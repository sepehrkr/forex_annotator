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
        if "logical" in options: # This handles options for drawings like HorizontalLine if they use logical
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


def load_csv(file_path, date_fmt: str = "%Y%m%d%H%M", default_volume: int = 0):
    df = pd.read_csv(file_path).dropna()
    if "<VOL>" not in df.columns:
        df["<VOL>"] = default_volume

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
    global COUNTER, SYM_NOW, LAST_TF

    export_drawings(chart, SYM_NOW, LAST_TF) # Save drawings before switching symbol

    COUNTER = (COUNTER + 1) % len(SYMBOLS)
    SYM_NOW = SYMBOLS[COUNTER]
    chart.topbar["sym_button"].set(SYM_NOW)
    chart.toolbox.save_drawings_under(SYM_NOW) # Change context for saving drawings

    if tf not in DATA[SYM_NOW]:
        ask_for_CSV(SYM_NOW, tf)

    chart.run_script(f"{chart.id}.toolBox.clearDrawings()")
    chart.set(DATA[SYM_NOW][tf])
    import_drawings(chart, SYM_NOW, tf)
    # LAST_TF remains the current timeframe, no change here unless tf also changes


def import_drawings(chart: Chart, sym, tf):
    if os.path.isfile(f"drawings_{sym}.json"): # Use current symbol for filename
        chart.toolbox.import_drawings(f"drawings_{sym}.json")

        # The import_drawings in JS toolbox now handles loading.
        # We might still need to convert logicals if the saved drawings are from a *different* timeframe
        # than the one currently being loaded (tf).
        # However, the current JS loadDrawings in bundle.js expects drawings to be for the *current* chart series.
        # So, conversion should ideally happen *before* calling chart.toolbox.import_drawings or be part of it.
        # For simplicity, let's assume drawings are saved relative to their timeframe and reloaded onto the same.
        # The current `loadDrawings` in JS will attempt to place them.
        # The `convert_logical_indices_obj` is more for when *explicitly* changing timeframe.

        # If drawings in the JSON are for various timeframes, the JS `loadDrawings` needs to be smart or
        # Python needs to filter/convert before passing to a simpler JS `loadDrawings`.
        # Given the current structure, `chart.toolbox.import_drawings` calls `loadDrawings` in JS
        # which expects points to be directly usable.
        # This part might need more robust handling if drawings from *other* timeframes are stored in the same file
        # and expected to show up. For now, assuming drawings are loaded onto a chart of their native timeframe,
        # or `convert_logical_indices_obj` handles it before this point if needed.
        # The current `export_drawings` and `on_timeframe_selection` try to handle this.

        # Let's ensure the JS side is robust. The Python side prepares data for current timeframe.
        # The `chart.toolbox.drawings[sym]` is populated by JS `saveDrawings` callback.
        # When `import_drawings` is called, it should load what's in the file.
        # The critical part is that `export_drawings` correctly converts drawings to their *base* timeframe
        # before saving, or saves timeframe information. The current `export_drawings` seems to try this.
        pass # Relying on chart.toolbox.import_drawings and the conversion logic in on_timeframe_selection


def export_drawings(chart: Chart, sym, current_tf):
    if sym in chart.toolbox.drawings:
        processed_drawings_for_export = []
        for drawing_obj_from_js in chart.toolbox.drawings[sym]: # These are from JS callback
            # Ensure all points have a 'time' field, converting from 'logical' if necessary
            # This is crucial if JS sends back points with only 'logical'
            # The `convert_logical_indices_obj` can be adapted or a similar logic used here.
            # For now, assume points from JS CustomMarker have time and price.

            # The drawing_obj_from_js already contains 'timeframe' set by JS.
            # We need to ensure this 'timeframe' is the one active when drawing was made.
            # And convert its points to that timeframe's coordinates if they are somehow in current_tf coordinates.
            # However, CustomMarker points are stored with their original time, so this should be fine.
            processed_drawings_for_export.append(drawing_obj_from_js)

        # Overwrite the list for the current symbol with these processed drawings
        chart.toolbox.drawings[sym] = processed_drawings_for_export

    # This will then save the `chart.toolbox.drawings` dictionary.
    chart.toolbox.export_drawings(f"drawings_{sym}.json")


def save_chart(chart: Chart): # This is a generic save drawings trigger
    chart.run_script(f"{chart.id}.toolBox.saveDrawings()")


def on_timeframe_selection(chart: Chart):
    global LAST_TF, SYM_NOW

    new_tf = chart.topbar["tf_switcher"].value
    if new_tf == LAST_TF: # No change
        return

    # 1. Export drawings from the OLD timeframe (LAST_TF)
    # This ensures all drawings made on LAST_TF are saved correctly,
    # potentially converting their coordinates if JS reports them relative to LAST_TF.
    # The JS saveDrawings callback populates chart.toolbox.drawings[SYM_NOW]
    # then export_drawings persists them.
    chart.run_script(f"{chart.id}.toolBox.saveDrawings()") # Trigger JS to update Python's cache
    export_drawings(chart, SYM_NOW, LAST_TF)

    # 2. Ask for CSV for the new timeframe if not available
    if new_tf not in DATA[SYM_NOW]:
        ask_for_CSV(SYM_NOW, new_tf)

    # 3. Clear drawings from the chart (JS side)
    chart.run_script(f"{chart.id}.toolBox.clearDrawings()")

    # 4. Set new data on the chart
    chart.set(DATA[SYM_NOW][new_tf])

    # 5. Import drawings relevant to the NEW timeframe (new_tf)
    # This implies drawings_{SYM_NOW}.json might contain drawings from various timeframes.
    # The import_drawings logic (or rather, the JS loadDrawings) should handle this.
    # For CustomMarker, its points are {time, price, logical}, so it should adapt.
    if os.path.isfile(f"drawings_{SYM_NOW}.json"):
        with open(f"drawings_{SYM_NOW}.json", 'r') as f:
            all_drawings_for_sym = json.load(f)

        drawings_for_new_tf = []
        if SYM_NOW in all_drawings_for_sym:
            for d in all_drawings_for_sym[SYM_NOW]:
                # If drawing was made on a different timeframe, convert its points
                # from its native timeframe to the new_tf.
                # The `timeframe` field in the saved drawing tells us its native TF.
                native_tf = d.get("timeframe", LAST_TF) # Fallback if no timeframe saved
                if native_tf != new_tf:
                    if native_tf in DATA[SYM_NOW]: # Check if we have data for conversion
                        converted_drawing_list = convert_logical_indices_obj(
                            [d], DATA[SYM_NOW][native_tf], DATA[SYM_NOW][new_tf]
                        )
                        if converted_drawing_list:
                            drawings_for_new_tf.append(converted_drawing_list[0])
                    else: # Cannot convert, maybe skip or add as is if points have absolute time
                        if 'time' in d['points'][0]: # If absolute time exists, try adding
                             drawings_for_new_tf.append(d)
                else: # Drawing is already for the new_tf
                    drawings_for_new_tf.append(d)

        if drawings_for_new_tf:
            #chart.toolbox.load_drawings_from_list(drawings_for_new_tf) # Ideal
            # Workaround if above not available:
            # Create a temporary filtered JSON and load that, or load one by one
            # For now, let JS handle filtering if it can, or load all and expect some not to show
             chart.toolbox.run_script(
                f"if ({chart.toolbox.id}.toolBox) {chart.toolbox.id}.toolBox.loadDrawings({json.dumps(drawings_for_new_tf)})"
            )


    LAST_TF = new_tf


def gamma_click(chart:Chart):
    global GAMMA_CHECK, GAMMA_CLICKS
    if GAMMA_CHECK:
        # If we want to remove markers when toggling off:
        # for click_info in GAMMA_CLICKS:
        #     if "marker_obj" in click_info and click_info["marker_obj"]:
        #         try:
        #             click_info["marker_obj"].delete()
        #         except Exception as e:
        #             print(f"Error deleting marker: {e}")

        GAMMA_CHECK = False
        GAMMA_CLICKS = [] # Clear the list
        chart.topbar["gamma_correction"].set("GAMMA_TRADE-OFF")
    else:
        GAMMA_CHECK = True
        GAMMA_CLICKS = [] # Ensure list is clear when starting
        chart.topbar["gamma_correction"].set("GAMMA_TRADE-ON")


def on_click(chart: Chart, time, price):
    global GAMMA_CHECK, GAMMA_CLICKS

    if GAMMA_CHECK and len(GAMMA_CLICKS) < 5:
            dt_object = datetime.utcfromtimestamp(time)
            click_info = {"time": dt_object, "price": price}

            marker_color = "blue"
            marker_shape = "circle"
            marker_text = f"P{len(GAMMA_CLICKS)+1}"
            marker_size = 10

            if len(GAMMA_CLICKS) == 0:
                marker_color = "lime"
                marker_shape = "arrowUp"
                marker_size = 12
            elif len(GAMMA_CLICKS) == 4:
                marker_color = "red"
                marker_shape = "arrowDown"
                marker_size = 12
            else:
                marker_color = "gold"
                marker_shape = "square"
                marker_size = 8

            # Call the new chart.marker() method
            marker_obj = chart.marker(
                time=dt_object,
                price=price,
                color=marker_color,
                size=marker_size,
                shape=marker_shape,
                text=marker_text
            )
            click_info["marker_obj"] = marker_obj

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

        row_data = []
        for click in GAMMA_CLICKS:
            row_data.append(click['time'].strftime("%Y-%m-%d %H:%M:%S"))
            row_data.append(click['price'])
        writer.writerow(row_data)


async def update_clock(chart):
    while chart.is_alive:
        await asyncio.sleep(1 - datetime.now().microsecond / 1_000_000)
        chart.topbar["clock"].set(datetime.now().strftime("%H:%M:%S"))

# Removed redundant save_drawings async task, saving is handled by specific actions

# --------------------------------Main Loop---------------------------------------
async def main():
    chart = Chart(toolbox=True) # toolbox=True automatically creates the toolbox
    chart.run_script(f"{chart.id}.createTopBar()") # If topbar is also auto-created, this might be redundant or for specific setup

    chart.topbar.button("sym_button", SYMBOLS[0], func=sym_button)
    chart.topbar.switcher(
        name="tf_switcher",
        options=TIME_FRAMES,
        default=LAST_TF,
        func=on_timeframe_selection,
    )
    chart.topbar.button(name="gamma_correction", button_text="GAMMA_TRADE-OFF", align='right', func=gamma_click)

    read_all_DATA("data_paths.json")

    # Initial data load
    if LAST_TF not in DATA[SYM_NOW]:
        ask_for_CSV(SYM_NOW, LAST_TF)
    chart.set(DATA[SYM_NOW][LAST_TF])

    # Set initial timeframe for JS drawings
    chart.run_script(f"window.currentTimeframe = '{LAST_TF}';")

    # Setup JS callback wrapper for timeframe changes
    chart.run_script(
        f"""
    if (!window._origCallbackFunction) {{ // Run only once
        window._origCallbackFunction = window.callbackFunction;
        window.callbackFunction = function(name_payload) {{
            if (name_payload.startsWith('tf_switcher_~_')) {{
                window.currentTimeframe = name_payload.split('_~_')[1];
            }}
            window._origCallbackFunction(name_payload); // Call original
        }};
    }}
    """
    )

    chart.toolbox.save_drawings_under(SYM_NOW) # Set initial symbol context for saving
    import_drawings(chart, SYM_NOW, LAST_TF) # Load initial drawings

    chart.events.click += on_click
    chart.topbar.textbox("clock")

    await asyncio.gather(chart.show_async(), update_clock(chart))


if __name__ == "__main__":
    asyncio.run(main())
