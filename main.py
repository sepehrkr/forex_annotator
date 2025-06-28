import pandas as pd
import time as Time
from datetime import datetime, timezone
from lightweight_charts import Chart
from copy import deepcopy
import os
import numpy as np
import asyncio
import json

# ----------------Global Variables------------------------------#
TIME_FRAMES = ["15s", "1m", "5m", "15m", "1h", "4h", "D", "W", "M"]
TIME_FRAMES_IDXS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

Imported_TIMEFRAMES = {}
for tf in TIME_FRAMES:
    Imported_TIMEFRAMES[tf] = False

SYMBOLS = ["EURUSD", "XAUUSD"]
DATA = {}
for sym in SYMBOLS:
    DATA[sym] = {}

SYM_NOW = "EURUSD"
COUNTER = 0
LAST_TF = "4h"

GAMMA_CLICKS = []
LAST_TIME_CLICK = 0.0
GAMMA_CHECK = False

# --------------------------Functions--------------------------------#
def read_all_DATA(file_path):
    with open(file_path, "r") as f:
        data = json.load(f)

    for sym, paths in data.items():
        for tf, path in paths.items():
            if os.path.isfile(path):
                DATA[sym][tf] = load_csv(path)


def convert_logical_indices_obj(
    drawings, prev_df, next_df, time_col="time", time_format="%Y%m%d%H%M"
):
    prev_times = pd.to_datetime(prev_df[time_col], format=time_format)
    prev_times = prev_times.astype("int64") // 10**9
    next_times = pd.to_datetime(next_df[time_col], format=time_format)
    next_times = next_times.astype("int64") // 10**9

    drawings_alter = deepcopy(drawings)
    for obj in drawings_alter:
        for pt in obj.get("points", []):
            if pt.get("logical") is not None:
                old_logical = pt["logical"]
                # Out of range logic
                if old_logical < 0:
                    old_logical = 0
                elif old_logical >= len(prev_times):
                    old_logical = len(prev_times) - 1
                pt_time = int(prev_times.iloc[old_logical])
                pt["time"] = pt_time
            elif pt.get("time") is not None:
                pt_time = pt["time"]
            else:
                continue

            # STEP 2: time → logical (in new timeframe)
            matches = (next_times == pt_time).to_numpy().nonzero()[0]
            if len(matches) > 0:
                new_logical = int(matches[0])
                pt["logical"] = new_logical
            else:
                future_idx = (next_times >= pt_time).to_numpy().nonzero()[0]
                if len(future_idx) > 0:
                    pt["logical"] = int(future_idx[0])
                else:
                    pt["logical"] = len(next_times) - 1  # fallback to last bar

        options = obj.get("options", {})
        if "logical" in options:
            old_logical = options["logical"]
            if old_logical < 0:
                old_logical = 0
            elif old_logical >= len(prev_times):
                old_logical = len(prev_times) - 1
            pt_time = int(prev_times.iloc[old_logical])
            matches = (next_times == pt_time).to_numpy().nonzero()[0]
            if len(matches) > 0:
                new_logical = int(matches[0])
                options["logical"] = new_logical
            else:
                future_idx = (next_times >= pt_time).to_numpy().nonzero()[0]
                if len(future_idx) > 0:
                    options["logical"] = int(future_idx[0])
                else:
                    options["logical"] = len(next_times) - 1

    return drawings_alter


"""def load_csv(file):

    df = pd.read_csv(file)

    return (
        pd.read_csv(file)
        .dropna()
        .assign(Date=lambda d: pd.to_datetime(d["Date"]))
        .sort_values("Date")
        .reset_index(drop=True)
    )"""


def load_csv(file_path, date_fmt: str = "%Y%m%d%H%M", default_volume: int = 0):
    df = pd.read_csv(file_path).dropna()
    if "<VOL>" not in df.columns:
        df["<VOL>"] = default_volume

    pd.DataFrame()

    df = pd.DataFrame(
        [
            [
                str(row["<DTYYYYMMDD>"]) + str(int(row["<TIME>"])).zfill(4),
                float(row["<OPEN>"]),
                float(row["<HIGH>"]),
                float(row["<LOW>"]),
                float(row["<CLOSE>"]),
                int(row["<VOL>"]),
            ]
            for _, row in df.iterrows()
        ],
        columns=["time", "open", "high", "low", "close", "volume"],
    )

    df["time"] = df["time"].apply(lambda s: pd.to_datetime(s, format=date_fmt))
    return df


def ask_for_CSV(sym: str, tf: str):
    if tf in DATA[sym]:
        return

    csv_file = input(f"CSV File for {sym}, timeframe {tf}: ")
    DATA[sym][tf] = load_csv(csv_file)


def sym_button(chart: Chart):
    tf = chart.topbar["tf_switcher"].value
    global COUNTER, SYM_NOW
    COUNTER = (COUNTER + 1) % len(SYMBOLS)
    SYM_NOW = SYMBOLS[COUNTER]

    if tf not in DATA[SYM_NOW]:
        ask_for_CSV(SYM_NOW, tf)

    chart.set(DATA[SYM_NOW][tf], keep_drawings=False)
    chart.topbar["sym_button"].set(SYM_NOW)
    chart.toolbox.save_drawings_under(SYM_NOW)


def import_drawings(chart: Chart, sym, tf):
    if os.path.isfile(f"drawings_{SYM_NOW}.json"):
        chart.toolbox.import_drawings(f"drawings_{SYM_NOW}.json")

        if sym in chart.toolbox.drawings:
            for drawing in chart.toolbox.drawings[sym]:
                if TIME_FRAMES.index(drawing["timeframe"]) >= TIME_FRAMES.index(tf):
                    drawing_alter = convert_logical_indices_obj(
                        [drawing],
                        DATA[sym][drawing["timeframe"]],
                        DATA[sym][tf],
                        time_col="time",
                    )
                    chart.toolbox.run_script(
                        f"if ({chart.toolbox.id}.toolBox) {chart.toolbox.id}.toolBox.loadDrawings({json.dumps(drawing_alter)})"
                    )


def export_drawings(chart: Chart, sym, tf):
    # print("Hey, in export_drawing(...)")
    if sym in chart.toolbox.drawings:
        # print("Hey, in export)drawing, sym ...")
        new_drawings = []
        for drawing in chart.toolbox.drawings[sym]:
            drawing_alter = None
            if TIME_FRAMES.index(drawing["timeframe"]) > TIME_FRAMES.index(tf):
                drawing_alter = convert_logical_indices_obj(
                    [drawing],
                    DATA[sym][tf],
                    DATA[sym][drawing["timeframe"]],
                    time_col="time",
                )

            else:
                drawing_alter = [drawing]
            # print("drawing (after): ", drawing_alter)
            new_drawings.extend(drawing_alter)

        chart.toolbox.drawings[sym] = new_drawings
        print(new_drawings)

    chart.toolbox.export_drawings(f"drawings_{SYM_NOW}.json")


def save_chart(chart: Chart):
    chart.run_script(f"{chart.id}.toolBox.saveDrawings()")


def on_timeframe_selection(chart: Chart):
    global LAST_TF
    
    tf = chart.topbar["tf_switcher"].value
    if tf not in DATA[SYM_NOW]:
        ask_for_CSV(SYM_NOW, tf)

    # chart.run_script(f"window.currentTimeframe = '{tf}';")
    export_drawings(chart, SYM_NOW, LAST_TF)
    chart.run_script(f"{chart.id}.toolBox.clearDrawings()")
    
    chart.set(DATA[SYM_NOW][tf])
    import_drawings(chart, SYM_NOW, tf)
    LAST_TF = tf


def gamma_click(chart:Chart):
    global GAMMA_CHECK, GAMMA_CLICKS
    if GAMMA_CHECK:
        #if len(GAMMA_CLICKS) < 5:
            #for click_info in GAMMA_CLICKS:
                #chart.remove_marker(click_info["marker"])
        
        GAMMA_CHECK = False
        GAMMA_CLICKS = []
        chart.topbar["gamma_correction"].set("GAMMA_TRADE-OFF")
    else:
        GAMMA_CHECK = True
        GAMMA_CLICKS = []
        chart.topbar["gamma_correction"].set("GAMMA_TRADE-ON")
            

def on_click(chart: Chart, time, price):
    global GAMMA_CHECK, GAMMA_CLICKS
    
    if GAMMA_CHECK and len(GAMMA_CLICKS) < 5:
            dt_object = datetime.utcfromtimestamp(time)
            click_info = {"time": dt_object, "price": price}
            # Add marker for entry
            """click_info["marker"] = chart.marker(
                time=dt_object,
                color="blue",
                position="inside",
                shape="circle",
            )"""
            
            GAMMA_CLICKS.append(click_info)
            if len(GAMMA_CLICKS) == 5:
                save_trade_to_csv()
                gamma_click(chart)
 
 
def save_trade_to_csv():
    import os
    import csv

    file_exists = os.path.isfile("gamma_correction.csv")
    with open("gamma_correction.csv", "a", newline="") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(
                ["time1", "price1", "time2", "price2", "time3", "price3", "time4", "price4", "time5", "price5"]
            )

        writer.writerow(
            [
               GAMMA_CLICKS[0]['time'].strftime("%Y-%m-%d %H:%M:%S"),
               GAMMA_CLICKS[0]['price'],
               GAMMA_CLICKS[1]['time'].strftime("%Y-%m-%d %H:%M:%S"),
               GAMMA_CLICKS[1]['price'],
               GAMMA_CLICKS[2]['time'].strftime("%Y-%m-%d %H:%M:%S"),
               GAMMA_CLICKS[2]['price'],
               GAMMA_CLICKS[3]['time'].strftime("%Y-%m-%d %H:%M:%S"),
               GAMMA_CLICKS[3]['price'],
               GAMMA_CLICKS[4]['time'].strftime("%Y-%m-%d %H:%M:%S"),
               GAMMA_CLICKS[4]['price']
            ]
        )


"""def on_click(chart: Chart, time, price):
    global clicks, LAST_TIME_CLICK

    current_time = Time.time()
    # print("current_time - LAST_TIME_CLICK : ", current_time - LAST_TIME_CLICK)
    if current_time - LAST_TIME_CLICK < 0.1:
        dt_object = datetime.utcfromtimestamp(time)
        click_info = {"time": dt_object, "price": price}

        if len(clicks) == 0:
            # Entrance
            print(f"Entrance at: {dt_object}, price: {price}")
            position_type = input("long/short?")

            # Add marker for entry
            click_info["marker"] = chart.marker(
                time=dt_object,
                color="green",
                position="inside",
                shape="circle",
            )
            click_info["position_type"] = position_type
            clicks.append(click_info)

        elif len(clicks) == 1:
            # Exit
            clicks.append(click_info)
            print(f"Exit at: {dt_object}, price: {price}")

            # Add marker for exit
            click_info["marker"] = chart.marker(
                time=dt_object,
                color="red",
                position="inside",
                shape="square",
            )
            clicks.append(click_info)

            # Ask for trade evaluation
            trade_eval = input("Was this trade good? (yy/yn/ny/nn/x): ").lower().strip()

            if trade_eval != "x":
                # Save to CSV
                save_trade_to_csv(clicks[0], clicks[1], trade_eval)

            # Reset for next trade
            clicks = []

    LAST_TIME_CLICK = current_time
"""


"""def save_trade_to_csv(entry, exit, is_good):
    import os
    import csv

    file_exists = os.path.isfile("trades.csv")
    with open("trades.csv", "a", newline="") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(
                ["entry_time", "entry_price", "exit_time", "exit_price", "is_good"]
            )

        writer.writerow(
            [
                entry["position_type"],
                entry["time"].strftime("%Y-%m-%d %H:%M:%S"),
                entry["price"],
                exit["time"].strftime("%Y-%m-%d %H:%M:%S"),
                exit["price"],
                is_good,
            ]
        )

"""
async def update_clock(chart):
    while chart.is_alive:
        await asyncio.sleep(1 - datetime.now().microsecond / 1_000_000)
        chart.topbar["clock"].set(datetime.now().strftime("%H:%M:%S"))


async def save_drawings(chart: Chart):
    while chart.is_alive:
        await asyncio.sleep(1 - datetime.now().microsecond / 1_000_000)
        # chart.toolbox.save_drawings_under(chart.topbar["tf_switcher"])
        print("drawings: ", chart.toolbox.drawings)


# --------------------------------Main Loop---------------------------------------
async def main():
    chart = Chart(toolbox=True)
    chart.run_script(f"{chart.id}.createTopBar()")

    # Columns: time | open | high | low | close | volume

    # chart.events.search += on_search

    chart.topbar.button("sym_button", SYMBOLS[0], func=sym_button)

    chart.topbar.switcher(
        name="tf_switcher",
        options=TIME_FRAMES,
        default=LAST_TF,
        func=on_timeframe_selection,
    )

    chart.topbar.button(name="gamma_correction", button_text="GAMMA_TRADE-OFF", align='right', func=gamma_click)
    read_all_DATA("data_paths.json")
    ask_for_CSV(SYM_NOW, chart.topbar["tf_switcher"].value)

    chart.set(DATA[SYM_NOW][chart.topbar["tf_switcher"].value])
    
    chart.run_script(
        f"""
    // 1) stash the original JS callbackFunction
    window._origCallbackFunction = window.callbackFunction;

    // 2) replace it with a wrapper that watches for 'tf_switcher' events
    window.callbackFunction = function(name_payload) {{
        // name_payload looks like 'tf_switcher_~_<tf>'
        if (name_payload.startsWith('tf_switcher_~_')) {{
            // extract the tf and store it
            window.currentTimeframe = name_payload.split('_~_')[1];
        }}
        // pass everything through to the original
        window._origCallbackFunction(name_payload);
    }};

    // 3) initialize currentTimeframe to your default
    window.currentTimeframe = '{LAST_TF}';
    """
    )
    

    chart.toolbox.save_drawings_under(SYM_NOW)

    import_drawings(chart, SYM_NOW, chart.topbar["tf_switcher"].value)

    chart.events.click += on_click

    chart.topbar.textbox("clock")

    await asyncio.gather(chart.show_async(), update_clock(chart))


if __name__ == "__main__":

    asyncio.run(main())
