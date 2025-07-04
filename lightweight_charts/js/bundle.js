var Lib = function (t, e) {
    "use strict";
    const i = {
        backgroundColor: "#0c0d0f",
        hoverBackgroundColor: "#3c434c",
        clickBackgroundColor: "#50565E",
        activeBackgroundColor: "rgba(0, 122, 255, 0.7)",
        mutedBackgroundColor: "rgba(0, 122, 255, 0.3)",
        borderColor: "#3C434C",
        color: "#d8d9db",
        activeColor: "#ececed"
    };

    function s() {
        window.pane = {
            ...i
        }, window.containerDiv = document.getElementById("container") || document.createElement("div"), window.setCursor = t => {
            t && (window.cursor = t), document.body.style.cursor = window.cursor
        }, window.cursor = "default", window.textBoxFocused = !1
    }
    class o {
        handler;
        div;
        seriesContainer;
        ohlcEnabled = !1;
        percentEnabled = !1;
        linesEnabled = !1;
        colorBasedOnCandle = !1;
        text;
        candle;
        _lines = [];
        constructor(t) {
            this.legendHandler = this.legendHandler.bind(this), this.handler = t, this.ohlcEnabled = !1, this.percentEnabled = !1, this.linesEnabled = !1, this.colorBasedOnCandle = !1, this.div = document.createElement("div"), this.div.classList.add("legend"), this.div.style.maxWidth = 100 * t.scale.width - 8 + "vw", this.div.style.display = "none";
            const e = document.createElement("div");
            e.style.display = "flex", e.style.flexDirection = "row", this.seriesContainer = document.createElement("div"), this.seriesContainer.classList.add("series-container"), this.text = document.createElement("span"), this.text.style.lineHeight = "1.8", this.candle = document.createElement("div"), e.appendChild(this.seriesContainer), this.div.appendChild(this.text), this.div.appendChild(this.candle), this.div.appendChild(e), t.div.appendChild(this.div), t.chart.subscribeCrosshairMove(this.legendHandler)
        }
        toJSON() {
            const {
                _lines: t,
                handler: e,
                ...i
            } = this;
            return i
        }
        makeSeriesRow(t, e) {
            const i = "#FFF";
            let s = `\n    <path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:${i};stroke-opacity:1;stroke-miterlimit:4;" d="M 21.998437 12 C 21.998437 12 18.998437 18 12 18 C 5.001562 18 2.001562 12 2.001562 12 C 2.001562 12 5.001562 6 12 6 C 18.998437 6 21.998437 12 21.998437 12 Z M 21.998437 12 " transform="matrix(0.833333,0,0,0.833333,0,0)"/>\n    <path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:${i};stroke-opacity:1;stroke-miterlimit:4;" d="M 15 12 C 15 13.654687 13.654687 15 12 15 C 10.345312 15 9 13.654687 9 12 C 9 10.345312 10.345312 9 12 9 C 13.654687 9 15 10.345312 15 12 Z M 15 12 " transform="matrix(0.833333,0,0,0.833333,0,0)"/>\`\n    `,
                o = `\n    <path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:${i};stroke-opacity:1;stroke-miterlimit:4;" d="M 20.001562 9 C 20.001562 9 19.678125 9.665625 18.998437 10.514062 M 12 14.001562 C 10.392187 14.001562 9.046875 13.589062 7.95 12.998437 M 12 14.001562 C 13.607812 14.001562 14.953125 13.589062 16.05 12.998437 M 12 14.001562 L 12 17.498437 M 3.998437 9 C 3.998437 9 4.354687 9.735937 5.104687 10.645312 M 7.95 12.998437 L 5.001562 15.998437 M 7.95 12.998437 C 6.689062 12.328125 5.751562 11.423437 5.104687 10.645312 M 16.05 12.998437 L 18.501562 15.998437 M 16.05 12.998437 C 17.38125 12.290625 18.351562 11.320312 18.998437 10.514062 M 5.104687 10.645312 L 2.001562 12 M 18.998437 10.514062 L 21.998437 12 " transform="matrix(0.833333,0,0,0.833333,0,0)"/>\n    `,
                n = document.createElement("div");
            n.style.display = "flex", n.style.alignItems = "center";
            let r = document.createElement("div"),
                a = document.createElement("div");
            a.classList.add("legend-toggle-switch");
            let l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            l.setAttribute("width", "22"), l.setAttribute("height", "16");
            let h = document.createElementNS("http://www.w3.org/2000/svg", "g");
            h.innerHTML = s;
            let d = !0;
            a.addEventListener("click", (() => {
                d ? (d = !1, h.innerHTML = o, e.applyOptions({
                    visible: !1
                })) : (d = !0, e.applyOptions({
                    visible: !0
                }), h.innerHTML = s)
            })), l.appendChild(h), a.appendChild(l), n.appendChild(r), n.appendChild(a), this.seriesContainer.appendChild(n);
            const c = e.options().color;
            this._lines.push({
                name: t,
                div: r,
                row: n,
                toggle: a,
                series: e,
                solid: c.startsWith("rgba") ? c.replace(/[^,]+(?=\))/, "1") : c
            })
        }
        legendItemFormat(t, e) {
            return t.toFixed(e).toString().padStart(8, " ")
        }
        shorthandFormat(t) {
            const e = Math.abs(t);
            return e >= 1e6 ? (t / 1e6).toFixed(1) + "M" : e >= 1e3 ? (t / 1e3).toFixed(1) + "K" : t.toString().padStart(8, " ")
        }
        legendHandler(t, e = !1) {
            if (!this.ohlcEnabled && !this.linesEnabled && !this.percentEnabled) return;
            const i = this.handler.series.options();
            if (!t.time) return this.candle.style.color = "transparent", void (this.candle.innerHTML = this.candle.innerHTML.replace(i.upColor, "").replace(i.downColor, ""));
            let s, o = null;
            if (e) {
                const e = this.handler.chart.timeScale();
                let i = e.timeToCoordinate(t.time);
                i && (o = e.coordinateToLogical(i.valueOf())), o && (s = this.handler.series.dataByIndex(o.valueOf()))
            } else s = t.seriesData.get(this.handler.series);
            this.candle.style.color = "";
            let n = '<span style="line-height: 1.8;">';
            if (s) {
                if (this.ohlcEnabled && (n += `O ${this.legendItemFormat(s.open, this.handler.precision)} `, n += `| H ${this.legendItemFormat(s.high, this.handler.precision)} `, n += `| L ${this.legendItemFormat(s.low, this.handler.precision)} `, n += `| C ${this.legendItemFormat(s.close, this.handler.precision)} `), this.percentEnabled) {
                    let t = (s.close - s.open) / s.open * 100,
                        e = t > 0 ? i.upColor : i.downColor,
                        o = `${t >= 0 ? "+" : ""}${t.toFixed(2)} %`;
                    this.colorBasedOnCandle ? n += `| <span style="color: ${e};">${o}</span>` : n += "| " + o
                }
                if (this.handler.volumeSeries) {
                    let e;
                    e = o ? this.handler.volumeSeries.dataByIndex(o) : t.seriesData.get(this.handler.volumeSeries), e && (n += this.ohlcEnabled ? `<br>V ${this.shorthandFormat(e.value)}` : "")
                }
            }
            this.candle.innerHTML = n + "</span>", this._lines.forEach((i => {
                if (!this.linesEnabled) return void (i.row.style.display = "none");
                let s, n;
                if (i.row.style.display = "flex", s = e && o ? i.series.dataByIndex(o) : t.seriesData.get(i.series), s?.value) {
                    if ("Histogram" == i.series.seriesType()) n = this.shorthandFormat(s.value);
                    else {
                        const t = i.series.options().priceFormat;
                        n = this.legendItemFormat(s.value, t.precision)
                    }
                    i.div.innerHTML = `<span style="color: ${i.solid};">▨</span>    ${i.name} : ${n}`
                }
            }))
        }
    }

    function n(t) {
        if (void 0 === t) throw new Error("Value is undefined");
        return t
    }
    class r {
        _chart = void 0;
        _series = void 0;
        requestUpdate() {
            this._requestUpdate && this._requestUpdate()
        }
        _requestUpdate;
        attached({
            chart: t,
            series: e,
            requestUpdate: i
        }) {
            this._chart = t, this._series = e, this._series.subscribeDataChanged(this._fireDataUpdated), this._requestUpdate = i, this.requestUpdate()
        }
        detached() {
            this._chart = void 0, this._series = void 0, this._requestUpdate = void 0
        }
        get chart() {
            return n(this._chart)
        }
        get series() {
            return n(this._series)
        }
        _fireDataUpdated(t) {
            this.dataUpdated && this.dataUpdated(t)
        }
    }
    const a = {
        lineColor: "#1E80F0",
        lineStyle: e.LineStyle.Solid,
        width: 4
    };
    var l;
    ! function (t) {
        t[t.NONE = 0] = "NONE", t[t.HOVERING = 1] = "HOVERING", t[t.DRAGGING = 2] = "DRAGGING", t[t.DRAGGINGP1 = 3] = "DRAGGINGP1", t[t.DRAGGINGP2 = 4] = "DRAGGINGP2", t[t.DRAGGINGP3 = 5] = "DRAGGINGP3", t[t.DRAGGINGP4 = 6] = "DRAGGINGP4"
    }(l || (l = {}));
    class h extends r {
        _paneViews = [];
        _options;
        _points = [];
        _state = l.NONE;
        _startDragPoint = null;
        _latestHoverPoint = null;
        static _mouseIsDown = !1;
        static hoveredObject = null;
        static lastHoveredObject = null;
        _listeners = [];
        constructor(t) {
            super(), this._options = {
                ...a,
                ...t
            }
        }
        updateAllViews() {
            this._paneViews.forEach((t => t.update()))
        }
        paneViews() {
            return this._paneViews
        }
        applyOptions(t) {
            this._options = {
                ...this._options,
                ...t
            }, this.requestUpdate()
        }
        updatePoints(...t) {
            for (let e = 0; e < this.points.length; e++) null != t[e] && (this.points[e] = t[e]);
            this.requestUpdate()
        }
        detach() {
            this._options.lineColor = "transparent", this.requestUpdate(), this.series.detachPrimitive(this);
            for (const t of this._listeners) document.body.removeEventListener(t.name, t.listener)
        }
        get points() {
            return this._points
        }
        _subscribe(t, e) {
            document.body.addEventListener(t, e), this._listeners.push({
                name: t,
                listener: e
            })
        }
        _unsubscribe(t, e) {
            document.body.removeEventListener(t, e);
            const i = this._listeners.find((i => i.name === t && i.listener === e));
            this._listeners.splice(this._listeners.indexOf(i), 1)
        }
        _handleHoverInteraction(t) {
            if (this._latestHoverPoint = t.point, h._mouseIsDown) this._handleDragInteraction(t);
            else if (this._mouseIsOverDrawing(t)) {
                if (this._state != l.NONE) return;
                this._moveToState(l.HOVERING), h.hoveredObject = h.lastHoveredObject = this
            } else {
                if (this._state == l.NONE) return;
                this._moveToState(l.NONE), h.hoveredObject === this && (h.hoveredObject = null)
            }
        }
        static _eventToPoint(t, e) {
            if (!e || !t.point || !t.logical) return null;
            const i = e.coordinateToPrice(t.point.y);
            return null == i ? null : {
                time: t.time || null,
                logical: t.logical,
                price: i.valueOf()
            }
        }
        static _getDiff(t, e) {
            return {
                logical: t.logical - e.logical,
                price: t.price - e.price
            }
        }
        _addDiffToPoint(t, e, i) {
            t && (t.logical = t.logical + e, t.price = t.price + i, t.time = this.series.dataByIndex(t.logical)?.time || null)
        }
        _handleMouseDownInteraction = () => {
            h._mouseIsDown = !0, this._onMouseDown()
        };
        _handleMouseUpInteraction = () => {
            h._mouseIsDown = !1, this._moveToState(l.HOVERING)
        };
        _handleDragInteraction(t) {
            if (this._state != l.DRAGGING && this._state != l.DRAGGINGP1 && this._state != l.DRAGGINGP2 && this._state != l.DRAGGINGP3 && this._state != l.DRAGGINGP4) return;
            const e = h._eventToPoint(t, this.series);
            if (!e) return;
            this._startDragPoint = this._startDragPoint || e;
            const i = h._getDiff(e, this._startDragPoint);
            this._onDrag(i), this.requestUpdate(), this._startDragPoint = e
        }
    }
    class d {
        _options;
        constructor(t) {
            this._options = t
        }
    }
    class c extends d {
        _p1;
        _p2;
        _hovered;
        constructor(t, e, i, s) {
            super(i), this._p1 = t, this._p2 = e, this._hovered = s
        }
        _getScaledCoordinates(t) {
            return null === this._p1.x || null === this._p1.y || null === this._p2.x || null === this._p2.y ? null : {
                x1: Math.round(this._p1.x * t.horizontalPixelRatio),
                y1: Math.round(this._p1.y * t.verticalPixelRatio),
                x2: Math.round(this._p2.x * t.horizontalPixelRatio),
                y2: Math.round(this._p2.y * t.verticalPixelRatio)
            }
        }
        _drawEndCircle(t, e, i) {
            t.context.fillStyle = "#000", t.context.beginPath(), t.context.arc(e, i, 9, 0, 2 * Math.PI), t.context.stroke(), t.context.fill()
        }
    }

    function p(t, i) {
        const s = {
            [e.LineStyle.Solid]: [],
            [e.LineStyle.Dotted]: [t.lineWidth, t.lineWidth],
            [e.LineStyle.Dashed]: [2 * t.lineWidth, 2 * t.lineWidth],
            [e.LineStyle.LargeDashed]: [6 * t.lineWidth, 6 * t.lineWidth],
            [e.LineStyle.SparseDotted]: [t.lineWidth, 4 * t.lineWidth]
        }[i];
        t.setLineDash(s)
    }
    class u extends d {
        _point = {
            x: null,
            y: null
        };
        constructor(t, e) {
            super(e), this._point = t
        }
        draw(t) {
            t.useBitmapCoordinateSpace((t => {
                if (null == this._point.y) return;
                const e = t.context,
                    i = Math.round(this._point.y * t.verticalPixelRatio),
                    s = this._point.x ? this._point.x * t.horizontalPixelRatio : 0;
                e.lineWidth = this._options.width, e.strokeStyle = this._options.lineColor, p(e, this._options.lineStyle), e.beginPath(), e.moveTo(s, i), e.lineTo(t.bitmapSize.width, i), e.stroke()
            }))
        }
    }
    class _ {
        _source;
        constructor(t) {
            this._source = t
        }
    }
    class m extends _ {
        _p1 = {
            x: null,
            y: null
        };
        _p2 = {
            x: null,
            y: null
        };
        _source;
        constructor(t) {
            super(t), this._source = t
        }
        update() {
            if (!this._source.p1 || !this._source.p2) return;
            const t = this._source.series,
                e = t.priceToCoordinate(this._source.p1.price),
                i = t.priceToCoordinate(this._source.p2.price),
                s = this._getX(this._source.p1),
                o = this._getX(this._source.p2);
            this._p1 = {
                x: s,
                y: e
            }, this._p2 = {
                x: o,
                y: i
            }
        }
        _getX(t) {
            return this._source.chart.timeScale().logicalToCoordinate(t.logical)
        }
    }
    class v extends _ {
        _source;
        _point = {
            x: null,
            y: null
        };
        constructor(t) {
            super(t), this._source = t
        }
        update() {
            const t = this._source._point,
                e = this._source.chart.timeScale(),
                i = this._source.series;
            "RayLine" == this._source._type && (this._point.x = t.time ? e.timeToCoordinate(t.time) : e.logicalToCoordinate(t.logical)), this._point.y = i.priceToCoordinate(t.price)
        }
        renderer() {
            return new u(this._point, this._source._options)
        }
    }
    class g {
        _source;
        _y = null;
        _price = null;
        constructor(t) {
            this._source = t
        }
        update() {
            if (!this._source.series || !this._source._point) return;
            this._y = this._source.series.priceToCoordinate(this._source._point.price);
            const t = this._source.series.options().priceFormat.precision;
            this._price = this._source._point.price.toFixed(t).toString()
        }
        visible() {
            return !0
        }
        tickVisible() {
            return !0
        }
        coordinate() {
            return this._y ?? 0
        }
        text() {
            return this._source._options.text || this._price || ""
        }
        textColor() {
            return "white"
        }
        backColor() {
            return this._source._options.lineColor
        }
    }
    class w extends h {
        _type = "HorizontalLine";
        _paneViews;
        _point;
        _callbackName;
        _priceAxisViews;
        _startDragPoint = null;
        constructor(t, e, i = null) {
            super(e), this._point = t, this._point.time = null, this._paneViews = [new v(this)], this._priceAxisViews = [new g(this)], this._callbackName = i
        }
        get points() {
            return [this._point]
        }
        updatePoints(...t) {
            for (const e of t) e && (this._point.price = e.price);
            this.requestUpdate()
        }
        updateAllViews() {
            this._paneViews.forEach((t => t.update())), this._priceAxisViews.forEach((t => t.update()))
        }
        priceAxisViews() {
            return this._priceAxisViews
        }
        _moveToState(t) {
            switch (t) {
                case l.NONE:
                    document.body.style.cursor = "default", this._unsubscribe("mousedown", this._handleMouseDownInteraction);
                    break;
                case l.HOVERING:
                    document.body.style.cursor = "pointer", this._unsubscribe("mouseup", this._childHandleMouseUpInteraction), this._subscribe("mousedown", this._handleMouseDownInteraction), this.chart.applyOptions({
                        handleScroll: !0
                    });
                    break;
                case l.DRAGGING:
                    document.body.style.cursor = "grabbing", this._subscribe("mouseup", this._childHandleMouseUpInteraction), this.chart.applyOptions({
                        handleScroll: !1
                    })
            }
            this._state = t
        }
        _onDrag(t) {
            this._addDiffToPoint(this._point, 0, t.price), this.requestUpdate()
        }
        _mouseIsOverDrawing(t, e = 4) {
            if (!t.point) return !1;
            const i = this.series.priceToCoordinate(this._point.price);
            return !!i && Math.abs(i - t.point.y) < e
        }
        _onMouseDown() {
            this._startDragPoint = null;
            if (this._latestHoverPoint) return this._moveToState(l.DRAGGING)
        }
        _childHandleMouseUpInteraction = () => {
            this._handleMouseUpInteraction(), this._callbackName && window.callbackFunction(`${this._callbackName}_~_${this._point.price.toFixed(8)}`)
        }
    }
    class y {
        _chart;
        _series;
        _finishDrawingCallback = null;
        _drawings = [];
        _activeDrawing = null;
        _isDrawing = !1;
        _drawingType = null;
        constructor(t, e, i = null) {
            this._chart = t, this._series = e, this._finishDrawingCallback = i, this._chart.subscribeClick(this._clickHandler), this._chart.subscribeCrosshairMove(this._moveHandler)
        }
        _clickHandler = t => this._onClick(t);
        _moveHandler = t => this._onMouseMove(t);
        beginDrawing(t) {
            this._drawingType = t, this._isDrawing = !0
        }
        stopDrawing() {
            this._isDrawing = !1, this._activeDrawing = null
        }
        get drawings() {
            return this._drawings
        }
        addNewDrawing(t) {
            this._series.attachPrimitive(t), this._drawings.push(t)
        }
        delete(t) {
            if (null == t) return;
            const e = this._drawings.indexOf(t); - 1 != e && (this._drawings.splice(e, 1), t.detach())
        }
        clearDrawings() {
            for (const t of this._drawings) t.detach();
            this._drawings = []
        }
        repositionOnTime() {
            for (const t of this.drawings) {
                const e = [];
                for (const i of t.points) {
                    if (!i) {
                        e.push(i);
                        continue
                    }
                    const t = i.time ? this._chart.timeScale().coordinateToLogical(this._chart.timeScale().timeToCoordinate(i.time) || 0) : i.logical;
                    e.push({
                        time: i.time,
                        logical: t,
                        price: i.price
                    })
                }
                t.updatePoints(...e)
            }
        }
        _onClick(t) {
            if (!this._isDrawing) return;
            const e = h._eventToPoint(t, this._series);
            if (!e) return;

            if (this._activeDrawing == null) {
                // First click: start a new drawing
                if (this._drawingType == null) return;
                this._activeDrawing = new this._drawingType(e, e);
                this._series.attachPrimitive(this._activeDrawing);
                // For horizontal lines, immediately complete on second click
                if (this._drawingType === w) {
                    this._onClick(t);
                }
            } else {
                // Second click: finish drawing, but first stamp its timeframe
                this._activeDrawing._timeframe = window.currentTimeframe || null;
                this._drawings.push(this._activeDrawing);
                this.stopDrawing();
                if (!this._finishDrawingCallback) return;
                this._finishDrawingCallback();
            }
        }
        _onMouseMove(t) {
            if (!t) return;
            for (const e of this._drawings) e._handleHoverInteraction(t);
            if (!this._isDrawing || !this._activeDrawing) return;
            const e = h._eventToPoint(t, this._series);
            e && this._activeDrawing.updatePoints(null, e)
        }
    }
    class b extends c {
        constructor(t, e, i, s) {
            super(t, e, i, s)
        }
        draw(t) {
            t.useBitmapCoordinateSpace((t => {
                if (null === this._p1.x || null === this._p1.y || null === this._p2.x || null === this._p2.y) return;
                const e = t.context,
                    i = this._getScaledCoordinates(t);
                i && (e.lineWidth = this._options.width, e.strokeStyle = this._options.lineColor, p(e, this._options.lineStyle), e.beginPath(), e.moveTo(i.x1, i.y1), e.lineTo(i.x2, i.y2), e.stroke(), this._hovered && (this._drawEndCircle(t, i.x1, i.y1), this._drawEndCircle(t, i.x2, i.y2)))
            }))
        }
    }
    class x extends m {
        constructor(t) {
            super(t)
        }
        renderer() {
            return new b(this._p1, this._p2, this._source._options, this._source.hovered)
        }
    }
    class C extends h {
        _paneViews = [];
        _hovered = !1;
        constructor(t, e, i) {
            super(), this.points.push(t), this.points.push(e), this._options = {
                ...a,
                ...i
            }
        }
        setFirstPoint(t) {
            this.updatePoints(t)
        }
        setSecondPoint(t) {
            this.updatePoints(null, t)
        }
        get p1() {
            return this.points[0]
        }
        get p2() {
            return this.points[1]
        }
        get hovered() {
            return this._hovered
        }
    }
    class f extends C {
        _type = "TrendLine";
        constructor(t, e, i) {
            super(t, e, i), this._paneViews = [new x(this)]
        }
        _moveToState(t) {
            switch (t) {
                case l.NONE:
                    document.body.style.cursor = "default", this._hovered = !1, this.requestUpdate(), this._unsubscribe("mousedown", this._handleMouseDownInteraction);
                    break;
                case l.HOVERING:
                    document.body.style.cursor = "pointer", this._hovered = !0, this.requestUpdate(), this._subscribe("mousedown", this._handleMouseDownInteraction), this._unsubscribe("mouseup", this._handleMouseDownInteraction), this.chart.applyOptions({
                        handleScroll: !0
                    });
                    break;
                case l.DRAGGINGP1:
                case l.DRAGGINGP2:
                case l.DRAGGING:
                    document.body.style.cursor = "grabbing", this._subscribe("mouseup", this._handleMouseUpInteraction), this.chart.applyOptions({
                        handleScroll: !1
                    })
            }
            this._state = t
        }
        _onDrag(t) {
            this._state != l.DRAGGING && this._state != l.DRAGGINGP1 || this._addDiffToPoint(this.p1, t.logical, t.price), this._state != l.DRAGGING && this._state != l.DRAGGINGP2 || this._addDiffToPoint(this.p2, t.logical, t.price)
        }
        _onMouseDown() {
            this._startDragPoint = null;
            const t = this._latestHoverPoint;
            if (!t) return;
            const e = this._paneViews[0]._p1,
                i = this._paneViews[0]._p2;
            if (!(e.x && i.x && e.y && i.y)) return this._moveToState(l.DRAGGING);
            Math.abs(t.x - e.x) < 10 && Math.abs(t.y - e.y) < 10 ? this._moveToState(l.DRAGGINGP1) : Math.abs(t.x - i.x) < 10 && Math.abs(t.y - i.y) < 10 ? this._moveToState(l.DRAGGINGP2) : this._moveToState(l.DRAGGING)
        }
        _mouseIsOverDrawing(t, e = 4) {
            if (!t.point) return !1;
            const i = this._paneViews[0]._p1.x,
                s = this._paneViews[0]._p1.y,
                o = this._paneViews[0]._p2.x,
                n = this._paneViews[0]._p2.y;
            if (!(i && o && s && n)) return !1;
            const r = t.point.x,
                a = t.point.y;
            if (r <= Math.min(i, o) - e || r >= Math.max(i, o) + e) return !1;
            return Math.abs((n - s) * r - (o - i) * a + o * s - n * i) / Math.sqrt((n - s) ** 2 + (o - i) ** 2) <= e
        }
    }






    class D extends c {
        constructor(t, e, i, s) {
            super(t, e, i, s)
        }
        draw(t) {
            t.useBitmapCoordinateSpace((t => {
                const e = t.context,
                    i = this._getScaledCoordinates(t);
                if (!i) return;
                e.lineWidth = this._options.width, e.strokeStyle = this._options.lineColor, p(e, this._options.lineStyle), e.fillStyle = this._options.fillColor;
                const s = Math.min(i.x1, i.x2),
                    o = Math.min(i.y1, i.y2),
                    n = Math.abs(i.x1 - i.x2),
                    r = Math.abs(i.y1 - i.y2);
                e.strokeRect(s, o, n, r), e.fillRect(s, o, n, r), this._hovered && (this._drawEndCircle(t, s, o), this._drawEndCircle(t, s + n, o), this._drawEndCircle(t, s + n, o + r), this._drawEndCircle(t, s, o + r))
            }))
        }
    }
    class E extends m {
        constructor(t) {
            super(t)
        }
        renderer() {
            return new D(this._p1, this._p2, this._source._options, this._source.hovered)
        }
    }
    const k = {
        fillEnabled: !0,
        fillColor: "rgba(255, 255, 255, 0.2)",
        ...a
    };
    class L extends C {
        _type = "Box";
        constructor(t, e, i) {
            super(t, e, i), this._options = {
                ...k,
                ...i
            }, this._paneViews = [new E(this)]
        }
        _moveToState(t) {
            switch (t) {
                case l.NONE:
                    document.body.style.cursor = "default", this._hovered = !1, this._unsubscribe("mousedown", this._handleMouseDownInteraction);
                    break;
                case l.HOVERING:
                    document.body.style.cursor = "pointer", this._hovered = !0, this._unsubscribe("mouseup", this._handleMouseUpInteraction), this._subscribe("mousedown", this._handleMouseDownInteraction), this.chart.applyOptions({
                        handleScroll: !0
                    });
                    break;
                case l.DRAGGINGP1:
                case l.DRAGGINGP2:
                case l.DRAGGINGP3:
                case l.DRAGGINGP4:
                case l.DRAGGING:
                    document.body.style.cursor = "grabbing", document.body.addEventListener("mouseup", this._handleMouseUpInteraction), this._subscribe("mouseup", this._handleMouseUpInteraction), this.chart.applyOptions({
                        handleScroll: !1
                    })
            }
            this._state = t
        }
        _onDrag(t) {
            this._state != l.DRAGGING && this._state != l.DRAGGINGP1 || this._addDiffToPoint(this.p1, t.logical, t.price), this._state != l.DRAGGING && this._state != l.DRAGGINGP2 || this._addDiffToPoint(this.p2, t.logical, t.price), this._state != l.DRAGGING && (this._state == l.DRAGGINGP3 && (this._addDiffToPoint(this.p1, t.logical, 0), this._addDiffToPoint(this.p2, 0, t.price)), this._state == l.DRAGGINGP4 && (this._addDiffToPoint(this.p1, 0, t.price), this._addDiffToPoint(this.p2, t.logical, 0)))
        }
        _onMouseDown() {
            this._startDragPoint = null;
            const t = this._latestHoverPoint,
                e = this._paneViews[0]._p1,
                i = this._paneViews[0]._p2;
            if (!(e.x && i.x && e.y && i.y)) return this._moveToState(l.DRAGGING);
            const s = 10;
            Math.abs(t.x - e.x) < s && Math.abs(t.y - e.y) < s ? this._moveToState(l.DRAGGINGP1) : Math.abs(t.x - i.x) < s && Math.abs(t.y - i.y) < s ? this._moveToState(l.DRAGGINGP2) : Math.abs(t.x - e.x) < s && Math.abs(t.y - i.y) < s ? this._moveToState(l.DRAGGINGP3) : Math.abs(t.x - i.x) < s && Math.abs(t.y - e.y) < s ? this._moveToState(l.DRAGGINGP4) : this._moveToState(l.DRAGGING)
        }
        _mouseIsOverDrawing(t, e = 4) {
            if (!t.point) return !1;
            const i = this._paneViews[0]._p1.x,
                s = this._paneViews[0]._p1.y,
                o = this._paneViews[0]._p2.x,
                n = this._paneViews[0]._p2.y;
            if (!(i && o && s && n)) return !1;
            const r = t.point.x,
                a = t.point.y,
                l = Math.min(i, o),
                h = Math.min(s, n),
                d = Math.abs(i - o),
                c = Math.abs(s - n),
                p = e / 2;
            return r > l - p && r < l + d + p && a > h - p && a < h + c + p
        }
    }
    class S {
        colorOption;
        static colors = ["#EBB0B0", "#E9CEA1", "#E5DF80", "#ADEB97", "#A3C3EA", "#D8BDED", "#E15F5D", "#E1B45F", "#E2D947", "#4BE940", "#639AE1", "#D7A0E8", "#E42C2A", "#E49D30", "#E7D827", "#3CFF0A", "#3275E4", "#B06CE3", "#F3000D", "#EE9A14", "#F1DA13", "#2DFC0F", "#1562EE", "#BB00EF", "#B50911", "#E3860E", "#D2BD11", "#48DE0E", "#1455B4", "#6E009F", "#7C1713", "#B76B12", "#8D7A13", "#479C12", "#165579", "#51007E"];
        _div;
        saveDrawings;
        opacity = 0;
        _opacitySlider;
        _opacityLabel;
        rgba;
        constructor(t, e) {
            this.colorOption = e, this.saveDrawings = t, this._div = document.createElement("div"), this._div.classList.add("color-picker");
            let i = document.createElement("div");
            i.style.margin = "10px", i.style.display = "flex", i.style.flexWrap = "wrap", S.colors.forEach((t => i.appendChild(this.makeColorBox(t))));
            let s = document.createElement("div");
            s.style.backgroundColor = window.pane.borderColor, s.style.height = "1px", s.style.width = "130px";
            let o = document.createElement("div");
            o.style.margin = "10px";
            let n = document.createElement("div");
            n.style.color = "lightgray", n.style.fontSize = "12px", n.innerText = "Opacity", this._opacityLabel = document.createElement("div"), this._opacityLabel.style.color = "lightgray", this._opacityLabel.style.fontSize = "12px", this._opacitySlider = document.createElement("input"), this._opacitySlider.type = "range", this._opacitySlider.value = (100 * this.opacity).toString(), this._opacityLabel.innerText = this._opacitySlider.value + "%", this._opacitySlider.oninput = () => {
                this._opacityLabel.innerText = this._opacitySlider.value + "%", this.opacity = parseInt(this._opacitySlider.value) / 100, this.updateColor()
            }, o.appendChild(n), o.appendChild(this._opacitySlider), o.appendChild(this._opacityLabel), this._div.appendChild(i), this._div.appendChild(s), this._div.appendChild(o), window.containerDiv.appendChild(this._div)
        }
        _updateOpacitySlider() {
            this._opacitySlider.value = (100 * this.opacity).toString(), this._opacityLabel.innerText = this._opacitySlider.value + "%"
        }
        makeColorBox(t) {
            const e = document.createElement("div");
            e.style.width = "18px", e.style.height = "18px", e.style.borderRadius = "3px", e.style.margin = "3px", e.style.boxSizing = "border-box", e.style.backgroundColor = t, e.addEventListener("mouseover", (() => e.style.border = "2px solid lightgray")), e.addEventListener("mouseout", (() => e.style.border = "none"));
            const i = S.extractRGBA(t);
            return e.addEventListener("click", (() => {
                this.rgba = i, this.updateColor()
            })), e
        }
        static extractRGBA(t) {
            const e = document.createElement("div");
            e.style.color = t, document.body.appendChild(e);
            const i = getComputedStyle(e).color;
            document.body.removeChild(e);
            const s = i.match(/\d+/g)?.map(Number);
            if (!s) return [];
            let o = i.includes("rgba") ? parseFloat(i.split(",")[3]) : 1;
            return [s[0], s[1], s[2], o]
        }
        updateColor() {
            if (!h.lastHoveredObject || !this.rgba) return;
            const t = `rgba(${this.rgba[0]}, ${this.rgba[1]}, ${this.rgba[2]}, ${this.opacity})`;
            h.lastHoveredObject.applyOptions({
                [this.colorOption]: t
            }), this.saveDrawings()
        }
        openMenu(t) {
            h.lastHoveredObject && (this.rgba = S.extractRGBA(h.lastHoveredObject._options[this.colorOption]), this.opacity = this.rgba[3], this._updateOpacitySlider(), this._div.style.top = t.top - 30 + "px", this._div.style.left = t.right + "px", this._div.style.display = "flex", setTimeout((() => document.addEventListener("mousedown", (t => {
                this._div.contains(t.target) || this.closeMenu()
            }))), 10))
        }
        closeMenu() {
            document.body.removeEventListener("click", this.closeMenu), this._div.style.display = "none"
        }
    }
    class G {
        static _styles = [{
            name: "Solid",
            var: e.LineStyle.Solid
        }, {
            name: "Dotted",
            var: e.LineStyle.Dotted
        }, {
            name: "Dashed",
            var: e.LineStyle.Dashed
        }, {
            name: "Large Dashed",
            var: e.LineStyle.LargeDashed
        }, {
            name: "Sparse Dotted",
            var: e.LineStyle.SparseDotted
        }];
        _div;
        _saveDrawings;
        constructor(t) {
            this._saveDrawings = t, this._div = document.createElement("div"), this._div.classList.add("context-menu"), G._styles.forEach((t => {
                this._div.appendChild(this._makeTextBox(t.name, t.var))
            })), window.containerDiv.appendChild(this._div)
        }
        _makeTextBox(t, e) {
            const i = document.createElement("span");
            return i.classList.add("context-menu-item"), i.innerText = t, i.addEventListener("click", (() => {
                h.lastHoveredObject?.applyOptions({
                    lineStyle: e
                }), this._saveDrawings()
            })), i
        }
        openMenu(t) {
            this._div.style.top = t.top - 30 + "px", this._div.style.left = t.right + "px", this._div.style.display = "block", setTimeout((() => document.addEventListener("mousedown", (t => {
                this._div.contains(t.target) || this.closeMenu()
            }))), 10)
        }
        closeMenu() {
            document.removeEventListener("click", this.closeMenu), this._div.style.display = "none"
        }
    }

    function T(t) {
        const e = [];
        for (const i of t) 0 == e.length ? e.push(i.toUpperCase()) : i == i.toUpperCase() ? e.push(" " + i) : e.push(i);
        return e.join("")
    }
    class I {
        saveDrawings;
        drawingTool;
        div;
        hoverItem;
        items = [];
        constructor(t, e) {
            this.saveDrawings = t, this.drawingTool = e, this._onRightClick = this._onRightClick.bind(this), this.div = document.createElement("div"), this.div.classList.add("context-menu"), document.body.appendChild(this.div), this.hoverItem = null, document.body.addEventListener("contextmenu", this._onRightClick)
        }
        _handleClick = t => this._onClick(t);
        _onClick(t) {
            t.target && (this.div.contains(t.target) || (this.div.style.display = "none", document.body.removeEventListener("click", this._handleClick)))
        }
        _onRightClick(t) {
            if (!h.hoveredObject) return;
            for (const t of this.items) this.div.removeChild(t);
            this.items = [];
            for (const t of Object.keys(h.hoveredObject._options)) {
                let e;
                if (t.toLowerCase().includes("color")) e = new S(this.saveDrawings, t);
                else {
                    if ("lineStyle" !== t) continue;
                    e = new G(this.saveDrawings)
                }
                let i = t => e.openMenu(t);
                this.menuItem(T(t), i, (() => {
                    document.removeEventListener("click", e.closeMenu), e._div.style.display = "none"
                }))
            }
            this.separator(), this.menuItem("Delete Drawing", (() => this.drawingTool.delete(h.lastHoveredObject))), t.preventDefault(), this.div.style.left = t.clientX + "px", this.div.style.top = t.clientY + "px", this.div.style.display = "block", document.body.addEventListener("click", this._handleClick)
        }
        menuItem(t, e, i = null) {
            const s = document.createElement("span");
            s.classList.add("context-menu-item"), this.div.appendChild(s);
            const o = document.createElement("span");
            if (o.innerText = t, o.style.pointerEvents = "none", s.appendChild(o), i) {
                let t = document.createElement("span");
                t.innerText = "►", t.style.fontSize = "8px", t.style.pointerEvents = "none", s.appendChild(t)
            }
            if (s.addEventListener("mouseover", (() => {
                this.hoverItem && this.hoverItem.closeAction && this.hoverItem.closeAction(), this.hoverItem = {
                    elem: o,
                    action: e,
                    closeAction: i
                }
            })), i) {
                let t;
                s.addEventListener("mouseover", (() => t = setTimeout((() => e(s.getBoundingClientRect())), 100))), s.addEventListener("mouseout", (() => clearTimeout(t)))
            } else s.addEventListener("click", (t => {
                e(t), this.div.style.display = "none"
            }));
            this.items.push(s)
        }
        separator() {
            const t = document.createElement("div");
            t.style.width = "90%", t.style.height = "1px", t.style.margin = "3px 0px", t.style.backgroundColor = window.pane.borderColor, this.div.appendChild(t), this.items.push(t)
        }
    }
    class M extends w {
        _type = "RayLine";
        constructor(t, e) {
            super({
                ...t
            }, e), this._point.time = t.time
        }
        updatePoints(...t) {
            for (const e of t) e && (this._point = e);
            this.requestUpdate()
        }
        _onDrag(t) {
            this._addDiffToPoint(this._point, t.logical, t.price), this.requestUpdate()
        }
        _mouseIsOverDrawing(t, e = 4) {
            if (!t.point) return !1;
            const i = this.series.priceToCoordinate(this._point.price),
                s = this._point.time ? this.chart.timeScale().timeToCoordinate(this._point.time) : null;
            return !(!i || !s) && (Math.abs(i - t.point.y) < e && t.point.x > s - e)
        }
    }
    class N extends d {
        _point = {
            x: null,
            y: null
        };
        constructor(t, e) {
            super(e), this._point = t
        }
        draw(t) {
            t.useBitmapCoordinateSpace((t => {
                if (null == this._point.x) return;
                const e = t.context,
                    i = this._point.x * t.horizontalPixelRatio;
                e.lineWidth = this._options.width, e.strokeStyle = this._options.lineColor, p(e, this._options.lineStyle), e.beginPath(), e.moveTo(i, 0), e.lineTo(i, t.bitmapSize.height), e.stroke()
            }))
        }
    }
    class R extends _ {
        _source;
        _point = {
            x: null,
            y: null
        };
        constructor(t) {
            super(t), this._source = t
        }
        update() {
            const t = this._source._point,
                e = this._source.chart.timeScale(),
                i = this._source.series;
            this._point.x = t.time ? e.timeToCoordinate(t.time) : e.logicalToCoordinate(t.logical), this._point.y = i.priceToCoordinate(t.price)
        }
        renderer() {
            return new N(this._point, this._source._options)
        }
    }
    class A {
        _source;
        _x = null;
        constructor(t) {
            this._source = t
        }
        update() {
            if (!this._source.chart || !this._source._point) return;
            const t = this._source._point,
                e = this._source.chart.timeScale();
            this._x = t.time ? e.timeToCoordinate(t.time) : e.logicalToCoordinate(t.logical)
        }
        visible() {
            return !!this._source._options.text
        }
        tickVisible() {
            return !0
        }
        coordinate() {
            return this._x ?? 0
        }
        text() {
            return this._source._options.text || ""
        }
        textColor() {
            return "white"
        }
        backColor() {
            return this._source._options.lineColor
        }
    }
    class B extends h {
        _type = "VerticalLine";
        _paneViews;
        _timeAxisViews;
        _point;
        _callbackName;
        _startDragPoint = null;
        constructor(t, e, i = null) {
            super(e), this._point = t, this._paneViews = [new R(this)], this._callbackName = i, this._timeAxisViews = [new A(this)]
        }
        updateAllViews() {
            this._paneViews.forEach((t => t.update())), this._timeAxisViews.forEach((t => t.update()))
        }
        timeAxisViews() {
            return this._timeAxisViews
        }
        updatePoints(...t) {
            for (const e of t) e && (!e.time && e.logical && (e.time = this.series.dataByIndex(e.logical)?.time || null), this._point = e);
            this.requestUpdate()
        }
        get points() {
            return [this._point]
        }
        _moveToState(t) {
            switch (t) {
                case l.NONE:
                    document.body.style.cursor = "default", this._unsubscribe("mousedown", this._handleMouseDownInteraction);
                    break;
                case l.HOVERING:
                    document.body.style.cursor = "pointer", this._unsubscribe("mouseup", this._childHandleMouseUpInteraction), this._subscribe("mousedown", this._handleMouseDownInteraction), this.chart.applyOptions({
                        handleScroll: !0
                    });
                    break;
                case l.DRAGGING:
                    document.body.style.cursor = "grabbing", this._subscribe("mouseup", this._childHandleMouseUpInteraction), this.chart.applyOptions({
                        handleScroll: !1
                    })
            }
            this._state = t
        }
        _onDrag(t) {
            this._addDiffToPoint(this._point, t.logical, 0), this.requestUpdate()
        }
        _mouseIsOverDrawing(t, e = 4) {
            if (!t.point) return !1;
            const i = this.chart.timeScale();
            let s;
            return s = this._point.time ? i.timeToCoordinate(this._point.time) : i.logicalToCoordinate(this._point.logical), !!s && Math.abs(s - t.point.x) < e
        }
        _onMouseDown() {
            this._startDragPoint = null;
            if (this._latestHoverPoint) return this._moveToState(l.DRAGGING)
        }
        _childHandleMouseUpInteraction = () => {
            this._handleMouseUpInteraction(), this._callbackName && window.callbackFunction(`${this._callbackName}_~_${this._point.price.toFixed(8)}`)
        }
    }



    // this.toolBox.saveDrawings();




    class P {
        static TREND_SVG = '<rect x="3.84" y="13.67" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.9847 14.4482)" width="21.21" height="1.56"/><path d="M23,3.17L20.17,6L23,8.83L25.83,6L23,3.17z M23,7.41L21.59,6L23,4.59L24.41,6L23,7.41z"/><path d="M6,20.17L3.17,23L6,25.83L8.83,23L6,20.17z M6,24.41L4.59,23L6,21.59L7.41,23L6,24.41z"/>';
        static HORZ_SVG = '<rect x="4" y="14" width="9" height="1"/><rect x="16" y="14" width="9" height="1"/><path d="M11.67,14.5l2.83,2.83l2.83-2.83l-2.83-2.83L11.67,14.5z M15.91,14.5l-1.41,1.41l-1.41-1.41l1.41-1.41L15.91,14.5z"/>';
        static RAY_SVG = '<rect x="8" y="14" width="17" height="1"/><path d="M3.67,14.5l2.83,2.83l2.83-2.83L6.5,11.67L3.67,14.5z M7.91,14.5L6.5,15.91L5.09,14.5l1.41-1.41L7.91,14.5z"/>';
        static BOX_SVG = '<rect x="8" y="6" width="12" height="1"/><rect x="9" y="22" width="11" height="1"/><path d="M3.67,6.5L6.5,9.33L9.33,6.5L6.5,3.67L3.67,6.5z M7.91,6.5L6.5,7.91L5.09,6.5L6.5,5.09L7.91,6.5z"/><path d="M19.67,6.5l2.83,2.83l2.83-2.83L22.5,3.67L19.67,6.5z M23.91,6.5L22.5,7.91L21.09,6.5l1.41-1.41L23.91,6.5z"/><path d="M19.67,22.5l2.83,2.83l2.83-2.83l-2.83-2.83L19.67,22.5z M23.91,22.5l-1.41,1.41l-1.41-1.41l1.41-1.41L23.91,22.5z"/><path d="M3.67,22.5l2.83,2.83l2.83-2.83L6.5,19.67L3.67,22.5z M7.91,22.5L6.5,23.91L5.09,22.5l1.41-1.41L7.91,22.5z"/><rect x="22" y="9" width="1" height="11"/><rect x="6" y="9" width="1" height="11"/>';
        // plain string version – drop-in replacement for BOX_SVG
        static BOX_ROTATED_45_SVG =
            '<g transform="rotate(45 14 14)">' +
            '<rect x="8"  y="6"  width="12" height="1"/>' +
            '<rect x="9"  y="22" width="11" height="1"/>' +
            '<path d="M3.67,6.5L6.5,9.33L9.33,6.5L6.5,3.67L3.67,6.5z M7.91,6.5L6.5,7.91L5.09,6.5L6.5,5.09L7.91,6.5z"/>' +
            '<path d="M19.67,6.5l2.83,2.83l2.83-2.83L22.5,3.67L19.67,6.5z M23.91,6.5L22.5,7.91L21.09,6.5l1.41-1.41L23.91,6.5z"/>' +
            '<path d="M19.67,22.5l2.83,2.83l2.83-2.83l-2.83-2.83L19.67,22.5z M23.91,22.5l-1.41,1.41l-1.41-1.41l1.41-1.41L23.91,22.5z"/>' +
            '<path d="M3.67,22.5l2.83,2.83l2.83-2.83L6.5,19.67L3.67,22.5z M7.91,22.5L6.5,23.91L5.09,22.5l1.41-1.41L7.91,22.5z"/>' +
            '<rect x="22" y="9" width="1" height="11"/>' +
            '<rect x="6"  y="9" width="1" height="11"/>' +
            '</g>';


        /* floppy-disk “save” icon – 28 × 28 grid */
        static SAVE_SVG =
            '<path d="M3 3v22h22V7.83L19.17 3H3zm12 2h4v4h-4V5zm-8 0h6v4H7V5zm14 16H7v-2h14v2zm0-4H7v-2h14v2z"/>';

        /* four dots connected like an “N” (bottom-left → top-left → top-right → bottom-right) */
        static POLY4_SVG =
            '<circle cx="5"  cy="23" r="1.5"/><circle cx="5"  cy="5" r="1.5"/>' +
            '<circle cx="23" cy="5" r="1.5"/><circle cx="23" cy="23" r="1.5"/>' +
            '<path d="M5 23 L5 5 L23 5 L23 23" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>';


        static POLY5_SVG =
            '<circle cx="5"  cy="23" r="1.5"/>' +  // p0
            '<circle cx="5"  cy="5"  r="1.5"/>' +  // p1
            '<circle cx="14" cy="14" r="1.5"/>' +  // p2
            '<circle cx="23" cy="5"  r="1.5"/>' +  // p3
            '<circle cx="23" cy="23" r="1.5"/>' +  // p4
            '<path d="M5 23 L5 5 L14 14 L23 5 L23 23" ' +
            'stroke="#FFFFFF" stroke-width="1.5" fill="none"/>';








        static VERT_SVG = P.RAY_SVG;
        div;
        activeIcon = null;
        buttons = [];
        _commandFunctions;
        _handlerID;
        _drawingTool;
        constructor(t, e, i, s) {
            this._handlerID = t, this._commandFunctions = s, this._drawingTool = new y(e, i, (() => this.removeActiveAndSave())), this.div = this._makeToolBox(), new I(this.saveDrawings, this._drawingTool), s.push((t => {
                if ((t.metaKey || t.ctrlKey) && "KeyZ" === t.code) {
                    const t = this._drawingTool.drawings.pop();
                    return t && this._drawingTool.delete(t), !0
                }
                return !1
            }))
        }
        toJSON() {
            const {
                ...t
            } = this;
            return t
        }
        _makeToolBox() {
            const t = document.createElement("div");
            t.classList.add("toolbox");

            /* existing buttons */

            this.buttons.push(this._makeToolBoxElement(f, "KeyT", P.TREND_SVG));         // trend
            this.buttons.push(this._makeToolBoxElement(w, "KeyH", P.HORZ_SVG));          // horizontal
            this.buttons.push(this._makeToolBoxElement(M, "KeyR", P.RAY_SVG));           // ray
            this.buttons.push(this._makeToolBoxElement(L, "KeyB", P.BOX_SVG));           // axis-aligned box

            /* NEW — arbitrary-angle/rotatable box (hot-key “A”) */
            this.buttons.push(this._makeToolBoxElement(A, "KeyA", P.BOX_ROTATED_45_SVG));

            this.buttons.push(this._makeToolBoxElement(B, "KeyV", P.VERT_SVG, !0));      // vertical
            /* NEW – utility buttons */
            this.buttons.push(this._makeToolBoxElement(S, "KeyS", P.SAVE_SVG, true));   // save image
            this.buttons.push(this._makeToolBoxElement(S, "KeyN", P.POLY4_SVG));        // 4-dot polyline
            this.buttons.push(this._makeToolBoxElement(S, "KeyW", P.POLY5_SVG));
            for (const e of this.buttons) t.appendChild(e);
            return t;
        }
        ///TODO
        _makeToolBoxElement(t, e, i, s = !1) {
            const o = document.createElement("div");
            o.classList.add("toolbox-button");
            const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            n.setAttribute("width", "29"), n.setAttribute("height", "29");
            const r = document.createElementNS("http://www.w3.org/2000/svg", "g");
            r.innerHTML = i, r.setAttribute("fill", window.pane.color), n.appendChild(r), o.appendChild(n);
            const a = {
                div: o,
                group: r,
                type: t
            };
            return o.addEventListener("click", (() => this._onIconClick(a))), this._commandFunctions.push((t => this._handlerID === window.handlerInFocus && (!(!t.altKey || t.code !== e) && (t.preventDefault(), this._onIconClick(a), !0)))), 1 == s && (n.style.transform = "rotate(90deg)", n.style.transformBox = "fill-box", n.style.transformOrigin = "center"), o
        }
        _onIconClick(t) {
            this.activeIcon && (this.activeIcon.div.classList.remove("active-toolbox-button"), window.setCursor("crosshair"), this._drawingTool?.stopDrawing(), this.activeIcon === t) ? this.activeIcon = null : (this.activeIcon = t, this.activeIcon.div.classList.add("active-toolbox-button"), window.setCursor("crosshair"), this._drawingTool?.beginDrawing(this.activeIcon.type))
            if (t.type === S) {
                this.saveDrawings();
            }
        }
        removeActiveAndSave = () => {
            window.setCursor("default"), this.activeIcon && this.activeIcon.div.classList.remove("active-toolbox-button"), this.activeIcon = null, this.saveDrawings()
        };
        addNewDrawing(t) {
            this._drawingTool.addNewDrawing(t)
        }
        clearDrawings() {
            this._drawingTool.clearDrawings()
        }
        saveDrawings = () => {
            const t = [];
            for (const e of this._drawingTool.drawings) {
                t.push({
                    type: e._type,
                    points: e.points,
                    options: e._options,
                    timeframe: e._timeframe || null
                });
            }
            const e = JSON.stringify(t);
            window.callbackFunction(`save_drawings${this._handlerID}_~_${e}`)
        };
        loadDrawings(t) {
            t.forEach((t => {
                let prim;
                switch (t.type) {
                    case "Box":
                        prim = new L(t.points[0], t.points[1], t.options);
                        break;
                    case "TrendLine":
                        prim = new f(t.points[0], t.points[1], t.options);
                        break;
                    case "HorizontalLine":
                        prim = new w(t.points[0], t.options);
                        break;
                    case "RayLine":
                        prim = new M(t.points[0], t.options);
                        break;
                    case "VerticalLine":
                        prim = new B(t.points[0], t.options);
                        break;
                }
                if (!prim) return;
                // ─── rehydrate the timeframe property ───
                prim._timeframe = t.timeframe;
                this._drawingTool.addNewDrawing(prim);
            }))
        }
    }
    class O {
        makeButton;
        callbackName;
        div;
        isOpen = !1;
        widget;
        constructor(t, e, i, s, o, n) {
            this.makeButton = t, this.callbackName = e, this.div = document.createElement("div"), this.div.classList.add("topbar-menu"), this.widget = this.makeButton(s + " ↓", null, o, !0, n), this.updateMenuItems(i), this.widget.elem.addEventListener("click", (() => {
                if (this.isOpen = !this.isOpen, !this.isOpen) return void (this.div.style.display = "none");
                let t = this.widget.elem.getBoundingClientRect();
                this.div.style.display = "flex", this.div.style.flexDirection = "column";
                let e = t.x + t.width / 2;
                this.div.style.left = e - this.div.clientWidth / 2 + "px", this.div.style.top = t.y + t.height + "px"
            })), document.body.appendChild(this.div)
        }
        updateMenuItems(t) {
            this.div.innerHTML = "", t.forEach((t => {
                let e = this.makeButton(t, null, !1, !1);
                e.elem.addEventListener("click", (() => {
                    this._clickHandler(e.elem.innerText)
                })), e.elem.style.margin = "4px 4px", e.elem.style.padding = "2px 2px", this.div.appendChild(e.elem)
            })), this.widget.elem.innerText = t[0] + " ↓"
        }
        _clickHandler(t) {
            this.widget.elem.innerText = t + " ↓", window.callbackFunction(`${this.callbackName}_~_${t}`), this.div.style.display = "none", this.isOpen = !1
        }
    }
    class V {
        _handler;
        _div;
        left;
        right;
        constructor(t) {
            this._handler = t, this._div = document.createElement("div"), this._div.classList.add("topbar");
            const e = t => {
                const e = document.createElement("div");
                return e.classList.add("topbar-container"), e.style.justifyContent = t, this._div.appendChild(e), e
            };
            this.left = e("flex-start"), this.right = e("flex-end")
        }
        makeSwitcher(chart_id, t, e, i, s = "left") {
            window.currentTimeframe = e;
            const o = document.createElement("div");
            let n;
            o.style.margin = "4px 12px";
            const r = {
                elem: o,
                callbackName: i,
                intervalElements: t.map((t => {
                    const i = document.createElement("button");
                    i.classList.add("topbar-button"), i.classList.add("switcher-button"), i.style.margin = "0px 2px", i.innerText = t, t == e && (n = i, i.classList.add("active-switcher-button"));
                    const s = V.getClientWidth(i);
                    return i.style.minWidth = s + 1 + "px", i.addEventListener("click", (() => r.onItemClicked(i))), o.appendChild(i), i
                })),
                onItemClicked: t => {
                    if (t !== n) {
                        chart_id.toolBox.saveDrawings();
                        n.classList.remove("active-switcher-button");
                        t.classList.add("active-switcher-button");
                        n = t;
                        window.callbackFunction(`${r.callbackName}_~_${t.innerText}`);
                        window.currentTimeframe = t.innerText;
                    }
                }
            };
            return this.appendWidget(o, s, !0), r
        }
        makeTextBoxWidget(t, e = "left", i = null) {
            if (i) {
                const s = document.createElement("input");
                return s.classList.add("topbar-textbox-input"), s.value = t, s.style.width = `${s.value.length + 2}ch`, s.addEventListener("focus", (() => {
                    window.textBoxFocused = !0
                })), s.addEventListener("input", (t => {
                    t.preventDefault(), s.style.width = `${s.value.length + 2}ch`
                })), s.addEventListener("keydown", (t => {
                    "Enter" == t.key && (t.preventDefault(), s.blur())
                })), s.addEventListener("blur", (() => {
                    window.callbackFunction(`${i}_~_${s.value}`), window.textBoxFocused = !1
                })), this.appendWidget(s, e, !0), s
            } {
                const i = document.createElement("div");
                return i.classList.add("topbar-textbox"), i.innerText = t, this.appendWidget(i, e, !0), i
            }
        }
        makeMenu(t, e, i, s, o) {
            return new O(this.makeButton.bind(this), s, t, e, i, o)
        }
        makeButton(t, e, i, s = !0, o = "left", n = !1) {
            let r = document.createElement("button");
            r.classList.add("topbar-button"), r.innerText = t, document.body.appendChild(r), r.style.minWidth = r.clientWidth + 1 + "px", document.body.removeChild(r);
            let a = {
                elem: r,
                callbackName: e
            };
            if (e) {
                let t;
                if (n) {
                    let e = !1;
                    t = () => {
                        e = !e, window.callbackFunction(`${a.callbackName}_~_${e}`), r.style.backgroundColor = e ? "var(--active-bg-color)" : "", r.style.color = e ? "var(--active-color)" : ""
                    }
                } else t = () => window.callbackFunction(`${a.callbackName}_~_${r.innerText}`);
                r.addEventListener("click", t)
            }
            return s && this.appendWidget(r, o, i), a
        }
        makeSeparator(t = "left") {
            const e = document.createElement("div");
            e.classList.add("topbar-seperator");
            ("left" == t ? this.left : this.right).appendChild(e)
        }
        appendWidget(t, e, i) {
            const s = "left" == e ? this.left : this.right;
            i ? ("left" == e && s.appendChild(t), this.makeSeparator(e), "right" == e && s.appendChild(t)) : s.appendChild(t), this._handler.reSize()
        }
        static getClientWidth(t) {
            document.body.appendChild(t);
            const e = t.clientWidth;
            return document.body.removeChild(t), e
        }
    }
    s();
    return t.Box = L, t.Handler = class {
        id;
        commandFunctions = [];
        wrapper;
        div;
        chart;
        scale;
        precision = 2;
        series;
        volumeSeries;
        legend;
        _topBar;
        toolBox;
        spinner;
        _seriesList = [];
        constructor(t, e, i, s, n) {
            this.reSize = this.reSize.bind(this), this.id = t, this.scale = {
                width: e,
                height: i
            }, this.wrapper = document.createElement("div"), this.wrapper.classList.add("handler"), this.wrapper.style.float = s, this.div = document.createElement("div"), this.div.style.position = "relative", this.wrapper.appendChild(this.div), window.containerDiv.append(this.wrapper), this.chart = this._createChart(), this.series = this.createCandlestickSeries(), this.volumeSeries = this.createVolumeSeries(), this.legend = new o(this), document.addEventListener("keydown", (t => {
                for (let e = 0; e < this.commandFunctions.length && !this.commandFunctions[e](t); e++);
            })), window.handlerInFocus = this.id, this.wrapper.addEventListener("mouseover", (() => window.handlerInFocus = this.id)), this.reSize(), n && window.addEventListener("resize", (() => this.reSize()))
        }
        reSize() {
            let t = 0 !== this.scale.height && this._topBar?._div.offsetHeight || 0;
            this.chart.resize(window.innerWidth * this.scale.width, window.innerHeight * this.scale.height - t), this.wrapper.style.width = 100 * this.scale.width + "%", this.wrapper.style.height = 100 * this.scale.height + "%", 0 === this.scale.height || 0 === this.scale.width ? this.toolBox && (this.toolBox.div.style.display = "none") : this.toolBox && (this.toolBox.div.style.display = "flex")
        }
        _createChart() {
            return e.createChart(this.div, {
                width: window.innerWidth * this.scale.width,
                height: window.innerHeight * this.scale.height,
                layout: {
                    textColor: window.pane.color,
                    background: {
                        color: "#000000",
                        type: e.ColorType.Solid
                    },
                    fontSize: 12
                },
                rightPriceScale: {
                    scaleMargins: {
                        top: .3,
                        bottom: .25
                    }
                },
                timeScale: {
                    timeVisible: !0,
                    secondsVisible: !1
                },
                crosshair: {
                    mode: e.CrosshairMode.Normal,
                    vertLine: {
                        labelBackgroundColor: "rgb(46, 46, 46)"
                    },
                    horzLine: {
                        labelBackgroundColor: "rgb(55, 55, 55)"
                    }
                },
                grid: {
                    vertLines: {
                        color: "rgba(29, 30, 38, 5)"
                    },
                    horzLines: {
                        color: "rgba(29, 30, 58, 5)"
                    }
                },
                handleScroll: {
                    vertTouchDrag: !0
                }
            })
        }
        createCandlestickSeries() {
            const t = "rgba(39, 157, 130, 100)",
                e = "rgba(200, 97, 100, 100)",
                i = this.chart.addCandlestickSeries({
                    upColor: t,
                    borderUpColor: t,
                    wickUpColor: t,
                    downColor: e,
                    borderDownColor: e,
                    wickDownColor: e
                });
            return i.priceScale().applyOptions({
                scaleMargins: {
                    top: .2,
                    bottom: .2
                }
            }), i
        }
        createVolumeSeries() {
            const t = this.chart.addHistogramSeries({
                color: "#26a69a",
                priceFormat: {
                    type: "volume"
                },
                priceScaleId: "volume_scale"
            });
            return t.priceScale().applyOptions({
                scaleMargins: {
                    top: .8,
                    bottom: 0
                }
            }), t
        }
        createLineSeries(t, e) {
            const i = this.chart.addLineSeries({
                ...e
            });
            return this._seriesList.push(i), this.legend.makeSeriesRow(t, i), {
                name: t,
                series: i
            }
        }
        createHistogramSeries(t, e) {
            const i = this.chart.addHistogramSeries({
                ...e
            });
            return this._seriesList.push(i), this.legend.makeSeriesRow(t, i), {
                name: t,
                series: i
            }
        }
        createToolBox() {
            this.toolBox = new P(this.id, this.chart, this.series, this.commandFunctions);
            this.div.appendChild(this.toolBox.div);
            // ───► PATCH: only fire saveDrawings() on middle‐button (scroll) click ◄───
            this.wrapper.addEventListener('auxclick', (e) => {
                // e.button===1 is the middle mouse button
                if (e.button === 1) {
                    console.log('bob esfanji')
                }
            });
        }
        createTopBar() {
            return this._topBar = new V(this), this.wrapper.prepend(this._topBar._div), this._topBar
        }
        toJSON() {
            const {
                chart: t,
                ...e
            } = this;
            return e
        }
        static syncCharts(t, e, i = !1) {
            function s(t, e) {
                e ? (t.chart.setCrosshairPosition(e.value || e.close, e.time, t.series), t.legend.legendHandler(e, !0)) : t.chart.clearCrosshairPosition()
            }

            function o(t, e) {
                return e.time && e.seriesData.get(t) || null
            }
            const n = t.chart.timeScale(),
                r = e.chart.timeScale(),
                a = t => {
                    t && n.setVisibleLogicalRange(t)
                },
                l = t => {
                    t && r.setVisibleLogicalRange(t)
                },
                h = i => {
                    s(e, o(t.series, i))
                },
                d = i => {
                    s(t, o(e.series, i))
                };
            let c = e;

            function p(t, e, s, o, n, r) {
                t.wrapper.addEventListener("mouseover", (() => {
                    c !== t && (c = t, e.chart.unsubscribeCrosshairMove(s), t.chart.subscribeCrosshairMove(o), i || (e.chart.timeScale().unsubscribeVisibleLogicalRangeChange(n), t.chart.timeScale().subscribeVisibleLogicalRangeChange(r)))
                }))
            }
            p(e, t, h, d, l, a), p(t, e, d, h, a, l), e.chart.subscribeCrosshairMove(d);
            const u = r.getVisibleLogicalRange();
            u && n.setVisibleLogicalRange(u), i || e.chart.timeScale().subscribeVisibleLogicalRangeChange(a)
        }
        static makeSearchBox(t) {
            const e = document.createElement("div");
            e.classList.add("searchbox"), e.style.display = "none";
            const i = document.createElement("div");
            i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke:lightgray;stroke-opacity:1;stroke-miterlimit:4;" d="M 15 15 L 21 21 M 10 17 C 6.132812 17 3 13.867188 3 10 C 3 6.132812 6.132812 3 10 3 C 13.867188 3 17 6.132812 17 10 C 17 13.867188 13.867188 17 10 17 Z M 10 17 "/></svg>';
            const s = document.createElement("input");
            return s.type = "text", e.appendChild(i), e.appendChild(s), t.div.appendChild(e), t.commandFunctions.push((i => window.handlerInFocus === t.id && !window.textBoxFocused && ("none" === e.style.display ? !!/^[a-zA-Z0-9]$/.test(i.key) && (e.style.display = "flex", s.focus(), !0) : ("Enter" === i.key || "Escape" === i.key) && ("Enter" === i.key && window.callbackFunction(`search${t.id}_~_${s.value}`), e.style.display = "none", s.value = "", !0)))), s.addEventListener("input", (() => s.value = s.value.toUpperCase())), {
                window: e,
                box: s
            }
        }
        static makeSpinner(t) {
            t.spinner = document.createElement("div"), t.spinner.classList.add("spinner"), t.wrapper.appendChild(t.spinner);
            let e = 0;
            ! function i() {
                t.spinner && (e += 10, t.spinner.style.transform = `translate(-50%, -50%) rotate(${e}deg)`, requestAnimationFrame(i))
            }()
        }
        static _styleMap = {
            "--bg-color": "backgroundColor",
            "--hover-bg-color": "hoverBackgroundColor",
            "--click-bg-color": "clickBackgroundColor",
            "--active-bg-color": "activeBackgroundColor",
            "--muted-bg-color": "mutedBackgroundColor",
            "--border-color": "borderColor",
            "--color": "color",
            "--active-color": "activeColor"
        };
        static setRootStyles(t) {
            const e = document.documentElement.style;
            for (const [i, s] of Object.entries(this._styleMap)) e.setProperty(i, t[s])
        }
    }, t.HorizontalLine = w, t.Legend = o, t.RayLine = M, t.Table = class {
        _div;
        callbackName;
        borderColor;
        borderWidth;
        table;
        rows = {};
        headings;
        widths;
        alignments;
        footer;
        header;
        constructor(t, e, i, s, o, n, r = !1, a, l, h, d, c) {
            this._div = document.createElement("div"), this.callbackName = null, this.borderColor = l, this.borderWidth = h, r ? (this._div.style.position = "absolute", this._div.style.cursor = "move") : (this._div.style.position = "relative", this._div.style.float = n), this._div.style.zIndex = "2000", this.reSize(t, e), this._div.style.display = "flex", this._div.style.flexDirection = "column", this._div.style.borderRadius = "5px", this._div.style.color = "white", this._div.style.fontSize = "12px", this._div.style.fontVariantNumeric = "tabular-nums", this.table = document.createElement("table"), this.table.style.width = "100%", this.table.style.borderCollapse = "collapse", this._div.style.overflow = "hidden", this.headings = i, this.widths = s.map((t => 100 * t + "%")), this.alignments = o;
            let p = this.table.createTHead().insertRow();
            for (let t = 0; t < this.headings.length; t++) {
                let e = document.createElement("th");
                e.textContent = this.headings[t], e.style.width = this.widths[t], e.style.letterSpacing = "0.03rem", e.style.padding = "0.2rem 0px", e.style.fontWeight = "500", e.style.textAlign = "center", 0 !== t && (e.style.borderLeft = h + "px solid " + l), e.style.position = "sticky", e.style.top = "0", e.style.backgroundColor = c.length > 0 ? c[t] : a, e.style.color = d[t], p.appendChild(e)
            }
            let u, _, m = document.createElement("div");
            if (m.style.overflowY = "auto", m.style.overflowX = "hidden", m.style.backgroundColor = a, m.appendChild(this.table), this._div.appendChild(m), window.containerDiv.appendChild(this._div), !r) return;
            let v = t => {
                this._div.style.left = t.clientX - u + "px", this._div.style.top = t.clientY - _ + "px"
            },
                g = () => {
                    document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", g)
                };
            this._div.addEventListener("mousedown", (t => {
                u = t.clientX - this._div.offsetLeft, _ = t.clientY - this._div.offsetTop, document.addEventListener("mousemove", v), document.addEventListener("mouseup", g)
            }))
        }
        divToButton(t, e) {
            t.addEventListener("mouseover", (() => t.style.backgroundColor = "rgba(60, 60, 60, 0.6)")), t.addEventListener("mouseout", (() => t.style.backgroundColor = "transparent")), t.addEventListener("mousedown", (() => t.style.backgroundColor = "rgba(60, 60, 60)")), t.addEventListener("click", (() => window.callbackFunction(e))), t.addEventListener("mouseup", (() => t.style.backgroundColor = "rgba(60, 60, 60, 0.6)"))
        }
        newRow(t, e = !1) {
            let i = this.table.insertRow();
            i.style.cursor = "default";
            for (let s = 0; s < this.headings.length; s++) {
                let o = i.insertCell();
                o.style.width = this.widths[s], o.style.textAlign = this.alignments[s], o.style.border = this.borderWidth + "px solid " + this.borderColor, e && this.divToButton(o, `${this.callbackName}_~_${t};;;${this.headings[s]}`)
            }
            e || this.divToButton(i, `${this.callbackName}_~_${t}`), this.rows[t] = i
        }
        deleteRow(t) {
            this.table.deleteRow(this.rows[t].rowIndex), delete this.rows[t]
        }
        clearRows() {
            let t = Object.keys(this.rows).length;
            for (let e = 0; e < t; e++) this.table.deleteRow(-1);
            this.rows = {}
        }
        _getCell(t, e) {
            return this.rows[t].cells[this.headings.indexOf(e)]
        }
        updateCell(t, e, i) {
            this._getCell(t, e).textContent = i
        }
        styleCell(t, e, i, s) {
            this._getCell(t, e).style[i] = s
        }
        makeSection(t, e, i, s = !1) {
            let o = document.createElement("div");
            o.style.display = "flex", o.style.width = "100%", o.style.padding = "3px 0px", o.style.backgroundColor = "rgb(30, 30, 30)", "footer" === e ? this._div.appendChild(o) : this._div.prepend(o);
            const n = [];
            for (let e = 0; e < i; e++) {
                let i = document.createElement("div");
                o.appendChild(i), i.style.flex = "1", i.style.textAlign = "center", s && (this.divToButton(i, `${t}_~_${e}`), i.style.borderRadius = "2px"), n.push(i)
            }
            "footer" === e ? this.footer = n : this.header = n
        }
        reSize(t, e) {
            this._div.style.width = t <= 1 ? 100 * t + "%" : t + "px", this._div.style.height = e <= 1 ? 100 * e + "%" : e + "px"
        }
    }, t.ToolBox = P, t.TopBar = V, t.TrendLine = f, t.VerticalLine = B, t.globalParamInit = s, t.paneStyleDefault = i, t.setCursor = t => {
        t && (window.cursor = t), document.body.style.cursor = window.cursor
    }, t
}({}, LightweightCharts);