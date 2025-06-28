import json

TIME_FRAMES = ["15s", "1m", "5m", "15m", "1h", "4h", "D", "W", "M"]

class ToolBox:
    def __init__(self, chart):
        self.run_script = chart.run_script
        self.chart = chart
        self.id = chart.id
        self._save_under = None
        self.drawings = {}
        chart.win.handlers[f'save_drawings{self.id}'] = self._save_drawings
        self.run_script(f'{self.id}.createToolBox()')

    def save_drawings_under(self, widget: str):
        """
        Drawings made on charts will be saved under the widget given. eg `chart.toolbox.save_drawings_under(chart.topbar['symbol'])`.
        """
        self._save_under = widget

    def load_drawings(self, tag: str):
        """
        Loads and displays the drawings on the chart stored under the tag given.
        """
        if not self.drawings.get(tag):
            return
        self.run_script(f'if ({self.id}.toolBox) {self.id}.toolBox.loadDrawings({json.dumps(self.drawings[tag])})')

    def import_drawings(self, file_path):
        """
        Imports a list of drawings stored at the given file path.
        """
        with open(file_path, 'r') as f:
            json_data = json.load(f)
            self.drawings = json_data

    def export_drawings(self, file_path):
        """
        Exports the current list of drawings to the given file path.
        """
        with open(file_path, 'w') as f:
            json.dump(self.drawings, f, indent=4)

    def _save_drawings(self, drawings):
        if not self._save_under:
            return
        
        print("--------------------------------------------------------------------------------")
        print(drawings)
        print("--------------------------------------NEXT---------------------------------------")


        target_drawings = json.loads(drawings)
        final_drawings = []

        if self._save_under in self.drawings:
            for drawing in self.drawings[self._save_under]:
                if TIME_FRAMES.index(drawing['timeframe']) < TIME_FRAMES.index(self.chart.topbar["tf_switcher"].value):
                    final_drawings.append(drawing)

        final_drawings = final_drawings + target_drawings
        self.drawings[self._save_under] = final_drawings
        
        print(final_drawings)
        print("--------------------------------------------------------------------------------")