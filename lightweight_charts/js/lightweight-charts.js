/*!
 * @license
 * TradingView Lightweight Charts™ v4.1.3
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
! function () {
    "use strict";
    const t = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        wickVisible: !0,
        borderVisible: !0,
        borderColor: "#378658",
        borderUpColor: "#26a69a",
        borderDownColor: "#ef5350",
        wickColor: "#737375",
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350"
    },
        i = {
            upColor: "#26a69a",
            downColor: "#ef5350",
            openVisible: !0,
            thinBars: !0
        },
        n = {
            color: "#2196f3",
            lineStyle: 0,
            lineWidth: 3,
            lineType: 0,
            lineVisible: !0,
            crosshairMarkerVisible: !0,
            crosshairMarkerRadius: 4,
            crosshairMarkerBorderColor: "",
            crosshairMarkerBorderWidth: 2,
            crosshairMarkerBackgroundColor: "",
            lastPriceAnimation: 0,
            pointMarkersVisible: !1
        },
        s = {
            topColor: "rgba( 46, 220, 135, 0.4)",
            bottomColor: "rgba( 40, 221, 100, 0)",
            invertFilledArea: !1,
            lineColor: "#33D778",
            lineStyle: 0,
            lineWidth: 3,
            lineType: 0,
            lineVisible: !0,
            crosshairMarkerVisible: !0,
            crosshairMarkerRadius: 4,
            crosshairMarkerBorderColor: "",
            crosshairMarkerBorderWidth: 2,
            crosshairMarkerBackgroundColor: "",
            lastPriceAnimation: 0,
            pointMarkersVisible: !1
        },
        e = {
            baseValue: {
                type: "price",
                price: 0
            },
            topFillColor1: "rgba(38, 166, 154, 0.28)",
            topFillColor2: "rgba(38, 166, 154, 0.05)",
            topLineColor: "rgba(38, 166, 154, 1)",
            bottomFillColor1: "rgba(239, 83, 80, 0.05)",
            bottomFillColor2: "rgba(239, 83, 80, 0.28)",
            bottomLineColor: "rgba(239, 83, 80, 1)",
            lineWidth: 3,
            lineStyle: 0,
            lineType: 0,
            lineVisible: !0,
            crosshairMarkerVisible: !0,
            crosshairMarkerRadius: 4,
            crosshairMarkerBorderColor: "",
            crosshairMarkerBorderWidth: 2,
            crosshairMarkerBackgroundColor: "",
            lastPriceAnimation: 0,
            pointMarkersVisible: !1
        },
        r = {
            color: "#26a69a",
            base: 0
        },
        h = {
            color: "#2196f3"
        },
        l = {
            title: "",
            visible: !0,
            lastValueVisible: !0,
            priceLineVisible: !0,
            priceLineSource: 0,
            priceLineWidth: 1,
            priceLineColor: "",
            priceLineStyle: 2,
            baseLineVisible: !0,
            baseLineWidth: 1,
            baseLineColor: "#B2B5BE",
            baseLineStyle: 0,
            priceFormat: {
                type: "price",
                precision: 2,
                minMove: .01
            }
        };
    var a, o;

    function _(t, i) {
        const n = {
            0: [],
            1: [t.lineWidth, t.lineWidth],
            2: [2 * t.lineWidth, 2 * t.lineWidth],
            3: [6 * t.lineWidth, 6 * t.lineWidth],
            4: [t.lineWidth, 4 * t.lineWidth]
        }[i];
        t.setLineDash(n)
    }

    function u(t, i, n, s) {
        t.beginPath();
        const e = t.lineWidth % 2 ? .5 : 0;
        t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke()
    }

    function c(t, i) {
        if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""))
    }

    function d(t) {
        if (void 0 === t) throw new Error("Value is undefined");
        return t
    }

    function f(t) {
        if (null === t) throw new Error("Value is null");
        return t
    }

    function v(t) {
        return f(d(t))
    } ! function (t) {
        t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved"
    }(a || (a = {})),
        function (t) {
            t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted"
        }(o || (o = {}));
    const p = {
        khaki: "#f0e68c",
        azure: "#f0ffff",
        aliceblue: "#f0f8ff",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        gray: "#808080",
        green: "#008000",
        honeydew: "#f0fff0",
        floralwhite: "#fffaf0",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lemonchiffon: "#fffacd",
        hotpink: "#ff69b4",
        lightyellow: "#ffffe0",
        greenyellow: "#adff2f",
        lightgoldenrodyellow: "#fafad2",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        lightcyan: "#e0ffff",
        magenta: "#f0f",
        maroon: "#800000",
        olive: "#808000",
        orange: "#ffa500",
        oldlace: "#fdf5e6",
        mediumblue: "#0000cd",
        transparent: "#0000",
        lime: "#0f0",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        midnightblue: "#191970",
        orchid: "#da70d6",
        mediumorchid: "#ba55d3",
        mediumturquoise: "#48d1cc",
        orangered: "#ff4500",
        royalblue: "#4169e1",
        powderblue: "#b0e0e6",
        red: "#f00",
        coral: "#ff7f50",
        turquoise: "#40e0d0",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        wheat: "#f5deb3",
        teal: "#008080",
        steelblue: "#4682b4",
        bisque: "#ffe4c4",
        aquamarine: "#7fffd4",
        aqua: "#0ff",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        springgreen: "#00ff7f",
        antiquewhite: "#faebd7",
        burlywood: "#deb887",
        brown: "#a52a2a",
        beige: "#f5f5dc",
        chocolate: "#d2691e",
        chartreuse: "#7fff00",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cadetblue: "#5f9ea0",
        tomato: "#ff6347",
        fuchsia: "#f0f",
        blue: "#00f",
        salmon: "#fa8072",
        blanchedalmond: "#ffebcd",
        slateblue: "#6a5acd",
        slategray: "#708090",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        cyan: "#0ff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        blueviolet: "#8a2be2",
        black: "#000",
        darkmagenta: "#8b008b",
        darkslateblue: "#483d8b",
        darkkhaki: "#bdb76b",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkgreen: "#006400",
        darkred: "#8b0000",
        dodgerblue: "#1e90ff",
        darkslategray: "#2f4f4f",
        dimgray: "#696969",
        deepskyblue: "#00bfff",
        firebrick: "#b22222",
        forestgreen: "#228b22",
        indigo: "#4b0082",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        feldspar: "#d19275",
        indianred: "#cd5c5c",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightskyblue: "#87cefa",
        lightslategray: "#789",
        lightslateblue: "#8470ff",
        snow: "#fffafa",
        lightseagreen: "#20b2aa",
        lightsalmon: "#ffa07a",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        mediumpurple: "#9370d8",
        mediumaquamarine: "#66cdaa",
        skyblue: "#87ceeb",
        lavender: "#e6e6fa",
        lightsteelblue: "#b0c4de",
        mediumvioletred: "#c71585",
        mintcream: "#f5fffa",
        navajowhite: "#ffdead",
        navy: "#000080",
        olivedrab: "#6b8e23",
        palevioletred: "#d87093",
        violetred: "#d02090",
        yellow: "#ff0",
        yellowgreen: "#9acd32",
        lawngreen: "#7cfc00",
        pink: "#ffc0cb",
        paleturquoise: "#afeeee",
        palegoldenrod: "#eee8aa",
        darkolivegreen: "#556b2f",
        darkseagreen: "#8fbc8f",
        darkturquoise: "#00ced1",
        peachpuff: "#ffdab9",
        deeppink: "#ff1493",
        violet: "#ee82ee",
        palegreen: "#98fb98",
        mediumseagreen: "#3cb371",
        peru: "#cd853f",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        purple: "#800080",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        papayawhip: "#ffefd5",
        mediumslateblue: "#7b68ee",
        plum: "#dda0dd",
        mediumspringgreen: "#00fa9a"
    };

    function m(t) {
        return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0
    }

    function b(t) {
        return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0
    }
    const w = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
        g = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
        M = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
        x = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

    function S(t) {
        (t = t.toLowerCase()) in p && (t = p[t]);
        {
            const i = x.exec(t) || M.exec(t);
            if (i) return [m(parseInt(i[1], 10)), m(parseInt(i[2], 10)), m(parseInt(i[3], 10)), b(i.length < 5 ? 1 : parseFloat(i[4]))]
        } {
            const i = g.exec(t);
            if (i) return [m(parseInt(i[1], 16)), m(parseInt(i[2], 16)), m(parseInt(i[3], 16)), 1]
        } {
            const i = w.exec(t);
            if (i) return [m(17 * parseInt(i[1], 16)), m(17 * parseInt(i[2], 16)), m(17 * parseInt(i[3], 16)), 1]
        }
        throw new Error(`Cannot parse color: ${t}`)
    }

    function y(t) {
        const i = S(t);
        return {
            t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
            i: (n = i, .199 * n[0] + .687 * n[1] + .114 * n[2] > 160 ? "black" : "white")
        };
        var n
    }
    class k {
        constructor() {
            this.h = []
        }
        l(t, i, n) {
            const s = {
                o: t,
                _: i,
                u: !0 === n
            };
            this.h.push(s)
        }
        v(t) {
            const i = this.h.findIndex((i => t === i.o));
            i > -1 && this.h.splice(i, 1)
        }
        p(t) {
            this.h = this.h.filter((i => i._ !== t))
        }
        m(t, i, n) {
            const s = [...this.h];
            this.h = this.h.filter((t => !t.u)), s.forEach((s => s.o(t, i, n)))
        }
        M() {
            return this.h.length > 0
        }
        S() {
            this.h = []
        }
    }

    function C(t, ...i) {
        for (const n of i)
            for (const i in n) void 0 !== n[i] && ("object" != typeof n[i] || void 0 === t[i] || Array.isArray(n[i]) ? t[i] = n[i] : C(t[i], n[i]));
        return t
    }

    function T(t) {
        return "number" == typeof t && isFinite(t)
    }

    function P(t) {
        return "number" == typeof t && t % 1 == 0
    }

    function R(t) {
        return "string" == typeof t
    }

    function D(t) {
        return "boolean" == typeof t
    }

    function O(t) {
        const i = t;
        if (!i || "object" != typeof i) return i;
        let n, s, e;
        for (s in n = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(s) && (e = i[s], n[s] = e && "object" == typeof e ? O(e) : e);
        return n
    }

    function A(t) {
        return null !== t
    }

    function B(t) {
        return null === t ? void 0 : t
    }
    const V = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

    function z(t, i, n) {
        return void 0 === i && (i = V), `${n = void 0 !== n ? `${n} ` : ""}${t}px ${i}`
    }
    class E {
        constructor(t) {
            this.k = {
                C: 1,
                T: 5,
                P: NaN,
                R: "",
                D: "",
                O: "",
                A: "",
                B: 0,
                V: 0,
                I: 0,
                L: 0,
                N: 0
            }, this.F = t
        }
        W() {
            const t = this.k,
                i = this.j(),
                n = this.H();
            return t.P === i && t.D === n || (t.P = i, t.D = n, t.R = z(i, n), t.L = 2.5 / 12 * i, t.B = t.L, t.V = i / 12 * t.T, t.I = i / 12 * t.T, t.N = 0), t.O = this.$(), t.A = this.U(), this.k
        }
        $() {
            return this.F.W().layout.textColor
        }
        U() {
            return this.F.q()
        }
        j() {
            return this.F.W().layout.fontSize
        }
        H() {
            return this.F.W().layout.fontFamily
        }
    }
    class I {
        constructor() {
            this.Y = []
        }
        X(t) {
            this.Y = t
        }
        K(t, i, n) {
            this.Y.forEach((s => {
                s.K(t, i, n)
            }))
        }
    }
    class L {
        K(t, i, n) {
            t.useBitmapCoordinateSpace((t => this.Z(t, i, n)))
        }
    }
    class N extends L {
        constructor() {
            super(...arguments), this.G = null
        }
        J(t) {
            this.G = t
        }
        Z({
            context: t,
            horizontalPixelRatio: i,
            verticalPixelRatio: n
        }) {
            if (null === this.G || null === this.G.tt) return;
            const s = this.G.tt,
                e = this.G,
                r = Math.max(1, Math.floor(i)) % 2 / 2,
                h = h => {
                    t.beginPath();
                    for (let l = s.to - 1; l >= s.from; --l) {
                        const s = e.it[l],
                            a = Math.round(s.nt * i) + r,
                            o = s.st * n,
                            _ = h * n + r;
                        t.moveTo(a, o), t.arc(a, o, _, 0, 2 * Math.PI)
                    }
                    t.fill()
                };
            e.et > 0 && (t.fillStyle = e.rt, h(e.ht + e.et)), t.fillStyle = e.lt, h(e.ht)
        }
    }

    function F() {
        return {
            it: [{
                nt: 0,
                st: 0,
                ot: 0,
                _t: 0
            }],
            lt: "",
            rt: "",
            ht: 0,
            et: 0,
            tt: null
        }
    }
    const W = {
        from: 0,
        to: 1
    };
    class j {
        constructor(t, i) {
            this.ut = new I, this.ct = [], this.dt = [], this.ft = !0, this.F = t, this.vt = i, this.ut.X(this.ct)
        }
        bt(t) {
            const i = this.F.wt();
            i.length !== this.ct.length && (this.dt = i.map(F), this.ct = this.dt.map((t => {
                const i = new N;
                return i.J(t), i
            })), this.ut.X(this.ct)), this.ft = !0
        }
        gt() {
            return this.ft && (this.Mt(), this.ft = !1), this.ut
        }
        Mt() {
            const t = 2 === this.vt.W().mode,
                i = this.F.wt(),
                n = this.vt.xt(),
                s = this.F.St();
            i.forEach(((i, e) => {
                var r;
                const h = this.dt[e],
                    l = i.yt(n);
                if (t || null === l || !i.kt()) return void (h.tt = null);
                const a = f(i.Ct());
                h.lt = l.Tt, h.ht = l.ht, h.et = l.Pt, h.it[0]._t = l._t, h.it[0].st = i.Dt().Rt(l._t, a.Ot), h.rt = null !== (r = l.At) && void 0 !== r ? r : this.F.Bt(h.it[0].st / i.Dt().Vt()), h.it[0].ot = n, h.it[0].nt = s.zt(n), h.tt = W
            }))
        }
    }
    class H extends L {
        constructor(t) {
            super(), this.Et = t
        }
        Z({
            context: t,
            bitmapSize: i,
            horizontalPixelRatio: n,
            verticalPixelRatio: s
        }) {
            if (null === this.Et) return;
            const e = this.Et.It.kt,
                r = this.Et.Lt.kt;
            if (!e && !r) return;
            const h = Math.round(this.Et.nt * n),
                l = Math.round(this.Et.st * s);
            t.lineCap = "butt", e && h >= 0 && (t.lineWidth = Math.floor(this.Et.It.et * n), t.strokeStyle = this.Et.It.O, t.fillStyle = this.Et.It.O, _(t, this.Et.It.Nt), function (t, i, n, s) {
                t.beginPath();
                const e = t.lineWidth % 2 ? .5 : 0;
                t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke()
            }(t, h, 0, i.height)), r && l >= 0 && (t.lineWidth = Math.floor(this.Et.Lt.et * s), t.strokeStyle = this.Et.Lt.O, t.fillStyle = this.Et.Lt.O, _(t, this.Et.Lt.Nt), u(t, l, 0, i.width))
        }
    }
    class $ {
        constructor(t) {
            this.ft = !0, this.Ft = {
                It: {
                    et: 1,
                    Nt: 0,
                    O: "",
                    kt: !1
                },
                Lt: {
                    et: 1,
                    Nt: 0,
                    O: "",
                    kt: !1
                },
                nt: 0,
                st: 0
            }, this.Wt = new H(this.Ft), this.jt = t
        }
        bt() {
            this.ft = !0
        }
        gt() {
            return this.ft && (this.Mt(), this.ft = !1), this.Wt
        }
        Mt() {
            const t = this.jt.kt(),
                i = f(this.jt.Ht()),
                n = i.$t().W().crosshair,
                s = this.Ft;
            if (2 === n.mode) return s.Lt.kt = !1, void (s.It.kt = !1);
            s.Lt.kt = t && this.jt.Ut(i), s.It.kt = t && this.jt.qt(), s.Lt.et = n.horzLine.width, s.Lt.Nt = n.horzLine.style, s.Lt.O = n.horzLine.color, s.It.et = n.vertLine.width, s.It.Nt = n.vertLine.style, s.It.O = n.vertLine.color, s.nt = this.jt.Yt(), s.st = this.jt.Xt()
        }
    }

    function U(t, i, n, s, e, r) {
        t.fillRect(i + r, n, s - 2 * r, r), t.fillRect(i + r, n + e - r, s - 2 * r, r), t.fillRect(i, n, r, e), t.fillRect(i + s - r, n, r, e)
    }

    function q(t, i, n, s, e, r) {
        t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, n, s, e), t.restore()
    }

    function Y(t, i) {
        return t.map((t => 0 === t ? t : t + i))
    }

    function X(t, i, n, s, e, r) {
        t.beginPath(), t.lineTo(i + s - r[1], n), 0 !== r[1] && t.arcTo(i + s, n, i + s, n + r[1], r[1]), t.lineTo(i + s, n + e - r[2]), 0 !== r[2] && t.arcTo(i + s, n + e, i + s - r[2], n + e, r[2]), t.lineTo(i + r[3], n + e), 0 !== r[3] && t.arcTo(i, n + e, i, n + e - r[3], r[3]), t.lineTo(i, n + r[0]), 0 !== r[0] && t.arcTo(i, n, i + r[0], n, r[0])
    }

    function K(t, i, n, s, e, r, h = 0, l = [0, 0, 0, 0], a = "") {
        if (t.save(), !h || !a || a === r) return X(t, i, n, s, e, l), t.fillStyle = r, t.fill(), void t.restore();
        const o = h / 2;
        if ("transparent" !== r) {
            X(t, i + h, n + h, s - 2 * h, e - 2 * h, Y(l, -h)), t.fillStyle = r, t.fill()
        }
        if ("transparent" !== a) {
            X(t, i + o, n + o, s - h, e - h, Y(l, -o)), t.lineWidth = h, t.strokeStyle = a, t.closePath(), t.stroke()
        }
        t.restore()
    }

    function Z(t, i, n, s, e, r, h) {
        t.save(), t.globalCompositeOperation = "copy";
        const l = t.createLinearGradient(0, 0, 0, e);
        l.addColorStop(0, r), l.addColorStop(1, h), t.fillStyle = l, t.fillRect(i, n, s, e), t.restore()
    }
    class G {
        constructor(t, i) {
            this.J(t, i)
        }
        J(t, i) {
            this.Et = t, this.Kt = i
        }
        Vt(t, i) {
            return this.Et.kt ? t.P + t.L + t.B : 0
        }
        K(t, i, n, s) {
            if (!this.Et.kt || 0 === this.Et.Zt.length) return;
            const e = this.Et.O,
                r = this.Kt.t,
                h = t.useBitmapCoordinateSpace((t => {
                    const h = t.context;
                    h.font = i.R;
                    const l = this.Gt(t, i, n, s),
                        a = l.Jt,
                        o = (t, i) => {
                            l.Qt ? K(h, a.ti, a.ii, a.ni, a.si, t, a.ei, [a.ht, 0, 0, a.ht], i) : K(h, a.ri, a.ii, a.ni, a.si, t, a.ei, [0, a.ht, a.ht, 0], i)
                        };
                    return o(r, "transparent"), this.Et.hi && (h.fillStyle = e, h.fillRect(a.ri, a.li, a.ai - a.ri, a.oi)), o("transparent", r), this.Et._i && (h.fillStyle = i.A, h.fillRect(l.Qt ? a.ui - a.ei : 0, a.ii, a.ei, a.ci - a.ii)), l
                }));
            t.useMediaCoordinateSpace((({
                context: t
            }) => {
                const n = h.di;
                t.font = i.R, t.textAlign = h.Qt ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(this.Et.Zt, n.fi, (n.ii + n.ci) / 2 + n.vi)
            }))
        }
        Gt(t, i, n, s) {
            var e;
            const {
                context: r,
                bitmapSize: h,
                mediaSize: l,
                horizontalPixelRatio: a,
                verticalPixelRatio: o
            } = t, _ = this.Et.hi || !this.Et.pi ? i.T : 0, u = this.Et.mi ? i.C : 0, c = i.L + this.Kt.bi, d = i.B + this.Kt.wi, f = i.V, v = i.I, p = this.Et.Zt, m = i.P, b = n.gi(r, p), w = Math.ceil(n.Mi(r, p)), g = m + c + d, M = i.C + f + v + w + _, x = Math.max(1, Math.floor(o));
            let S = Math.round(g * o);
            S % 2 != x % 2 && (S += 1);
            const y = u > 0 ? Math.max(1, Math.floor(u * a)) : 0,
                k = Math.round(M * a),
                C = Math.round(_ * a),
                T = null !== (e = this.Kt.xi) && void 0 !== e ? e : this.Kt.Si,
                P = Math.round(T * o) - Math.floor(.5 * o),
                R = Math.floor(P + x / 2 - S / 2),
                D = R + S,
                O = "right" === s,
                A = O ? l.width - u : u,
                B = O ? h.width - y : y;
            let V, z, E;
            return O ? (V = B - k, z = B - C, E = A - _ - f - u) : (V = B + k, z = B + C, E = A + _ + f), {
                Qt: O,
                Jt: {
                    ii: R,
                    li: P,
                    ci: D,
                    ni: k,
                    si: S,
                    ht: 2 * a,
                    ei: y,
                    ti: V,
                    ri: B,
                    ai: z,
                    oi: x,
                    ui: h.width
                },
                di: {
                    ii: R / o,
                    ci: D / o,
                    fi: E,
                    vi: b
                }
            }
        }
    }
    class J {
        constructor(t) {
            this.yi = {
                Si: 0,
                t: "#000",
                wi: 0,
                bi: 0
            }, this.ki = {
                Zt: "",
                kt: !1,
                hi: !0,
                pi: !1,
                At: "",
                O: "#FFF",
                _i: !1,
                mi: !1
            }, this.Ci = {
                Zt: "",
                kt: !1,
                hi: !1,
                pi: !0,
                At: "",
                O: "#FFF",
                _i: !0,
                mi: !0
            }, this.ft = !0, this.Ti = new (t || G)(this.ki, this.yi), this.Pi = new (t || G)(this.Ci, this.yi)
        }
        Zt() {
            return this.Ri(), this.ki.Zt
        }
        Si() {
            return this.Ri(), this.yi.Si
        }
        bt() {
            this.ft = !0
        }
        Vt(t, i = !1) {
            return Math.max(this.Ti.Vt(t, i), this.Pi.Vt(t, i))
        }
        Di() {
            return this.yi.xi || 0
        }
        Oi(t) {
            this.yi.xi = t
        }
        Ai() {
            return this.Ri(), this.ki.kt || this.Ci.kt
        }
        Bi() {
            return this.Ri(), this.ki.kt
        }
        gt(t) {
            return this.Ri(), this.ki.hi = this.ki.hi && t.W().ticksVisible, this.Ci.hi = this.Ci.hi && t.W().ticksVisible, this.Ti.J(this.ki, this.yi), this.Pi.J(this.Ci, this.yi), this.Ti
        }
        Vi() {
            return this.Ri(), this.Ti.J(this.ki, this.yi), this.Pi.J(this.Ci, this.yi), this.Pi
        }
        Ri() {
            this.ft && (this.ki.hi = !0, this.Ci.hi = !1, this.zi(this.ki, this.Ci, this.yi))
        }
    }
    class Q extends J {
        constructor(t, i, n) {
            super(), this.jt = t, this.Ei = i, this.Ii = n
        }
        zi(t, i, n) {
            if (t.kt = !1, 2 === this.jt.W().mode) return;
            const s = this.jt.W().horzLine;
            if (!s.labelVisible) return;
            const e = this.Ei.Ct();
            if (!this.jt.kt() || this.Ei.Li() || null === e) return;
            const r = y(s.labelBackgroundColor);
            n.t = r.t, t.O = r.i;
            const h = 2 / 12 * this.Ei.P();
            n.bi = h, n.wi = h;
            const l = this.Ii(this.Ei);
            n.Si = l.Si, t.Zt = this.Ei.Ni(l._t, e), t.kt = !0
        }
    }
    const tt = /[1-9]/g;
    class it {
        constructor() {
            this.Et = null
        }
        J(t) {
            this.Et = t
        }
        K(t, i) {
            if (null === this.Et || !1 === this.Et.kt || 0 === this.Et.Zt.length) return;
            const n = t.useMediaCoordinateSpace((({
                context: t
            }) => (t.font = i.R, Math.round(i.Fi.Mi(t, f(this.Et).Zt, tt)))));
            if (n <= 0) return;
            const s = i.Wi,
                e = n + 2 * s,
                r = e / 2,
                h = this.Et.ji;
            let l = this.Et.Si,
                a = Math.floor(l - r) + .5;
            a < 0 ? (l += Math.abs(0 - a), a = Math.floor(l - r) + .5) : a + e > h && (l -= Math.abs(h - (a + e)), a = Math.floor(l - r) + .5);
            const o = a + e,
                _ = Math.ceil(0 + i.C + i.T + i.L + i.P + i.B);
            t.useBitmapCoordinateSpace((({
                context: t,
                horizontalPixelRatio: n,
                verticalPixelRatio: s
            }) => {
                const e = f(this.Et);
                t.fillStyle = e.t;
                const r = Math.round(a * n),
                    h = Math.round(0 * s),
                    l = Math.round(o * n),
                    u = Math.round(_ * s),
                    c = Math.round(2 * n);
                if (t.beginPath(), t.moveTo(r, h), t.lineTo(r, u - c), t.arcTo(r, u, r + c, u, c), t.lineTo(l - c, u), t.arcTo(l, u, l, u - c, c), t.lineTo(l, h), t.fill(), e.hi) {
                    const r = Math.round(e.Si * n),
                        l = h,
                        a = Math.round((l + i.T) * s);
                    t.fillStyle = e.O;
                    const o = Math.max(1, Math.floor(n)),
                        _ = Math.floor(.5 * n);
                    t.fillRect(r - _, l, o, a - l)
                }
            })), t.useMediaCoordinateSpace((({
                context: t
            }) => {
                const n = f(this.Et),
                    e = 0 + i.C + i.T + i.L + i.P / 2;
                t.font = i.R, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = n.O;
                const r = i.Fi.gi(t, "Apr0");
                t.translate(a + s, e + r), t.fillText(n.Zt, 0, 0)
            }))
        }
    }
    class nt {
        constructor(t, i, n) {
            this.ft = !0, this.Wt = new it, this.Ft = {
                kt: !1,
                t: "#4c525e",
                O: "white",
                Zt: "",
                ji: 0,
                Si: NaN,
                hi: !0
            }, this.vt = t, this.Hi = i, this.Ii = n
        }
        bt() {
            this.ft = !0
        }
        gt() {
            return this.ft && (this.Mt(), this.ft = !1), this.Wt.J(this.Ft), this.Wt
        }
        Mt() {
            const t = this.Ft;
            if (t.kt = !1, 2 === this.vt.W().mode) return;
            const i = this.vt.W().vertLine;
            if (!i.labelVisible) return;
            const n = this.Hi.St();
            if (n.Li()) return;
            t.ji = n.ji();
            const s = this.Ii();
            if (null === s) return;
            t.Si = s.Si;
            const e = n.$i(this.vt.xt());
            t.Zt = n.Ui(f(e)), t.kt = !0;
            const r = y(i.labelBackgroundColor);
            t.t = r.t, t.O = r.i, t.hi = n.W().ticksVisible
        }
    }
    class st {
        constructor() {
            this.qi = null, this.Yi = 0
        }
        Xi() {
            return this.Yi
        }
        Ki(t) {
            this.Yi = t
        }
        Dt() {
            return this.qi
        }
        Zi(t) {
            this.qi = t
        }
        Gi(t) {
            return []
        }
        Ji() {
            return []
        }
        kt() {
            return !0
        }
    }
    var et;
    ! function (t) {
        t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden"
    }(et || (et = {}));
    class rt extends st {
        constructor(t, i) {
            super(), this.Qi = null, this.tn = NaN, this.nn = 0, this.sn = !0, this.en = new Map, this.rn = !1, this.hn = NaN, this.ln = NaN, this.an = NaN, this.on = NaN, this.Hi = t, this._n = i, this.un = new j(t, this);
            this.cn = ((t, i) => n => {
                const s = i(),
                    e = t();
                if (n === f(this.Qi).dn()) return {
                    _t: e,
                    Si: s
                };
                {
                    const t = f(n.Ct());
                    return {
                        _t: n.fn(s, t),
                        Si: s
                    }
                }
            })((() => this.tn), (() => this.ln));
            const n = ((t, i) => () => {
                const n = this.Hi.St().vn(t()),
                    s = i();
                return n && Number.isFinite(s) ? {
                    ot: n,
                    Si: s
                } : null
            })((() => this.nn), (() => this.Yt()));
            this.pn = new nt(this, t, n), this.mn = new $(this)
        }
        W() {
            return this._n
        }
        bn(t, i) {
            this.an = t, this.on = i
        }
        wn() {
            this.an = NaN, this.on = NaN
        }
        gn() {
            return this.an
        }
        Mn() {
            return this.on
        }
        xn(t, i, n) {
            this.rn || (this.rn = !0), this.sn = !0, this.Sn(t, i, n)
        }
        xt() {
            return this.nn
        }
        Yt() {
            return this.hn
        }
        Xt() {
            return this.ln
        }
        kt() {
            return this.sn
        }
        yn() {
            this.sn = !1, this.kn(), this.tn = NaN, this.hn = NaN, this.ln = NaN, this.Qi = null, this.wn()
        }
        Cn(t) {
            return null !== this.Qi ? [this.mn, this.un] : []
        }
        Ut(t) {
            return t === this.Qi && this._n.horzLine.visible
        }
        qt() {
            return this._n.vertLine.visible
        }
        Tn(t, i) {
            this.sn && this.Qi === t || this.en.clear();
            const n = [];
            return this.Qi === t && n.push(this.Pn(this.en, i, this.cn)), n
        }
        Ji() {
            return this.sn ? [this.pn] : []
        }
        Ht() {
            return this.Qi
        }
        Rn() {
            this.mn.bt(), this.en.forEach((t => t.bt())), this.pn.bt(), this.un.bt()
        }
        Dn(t) {
            return t && !t.dn().Li() ? t.dn() : null
        }
        Sn(t, i, n) {
            this.On(t, i, n) && this.Rn()
        }
        On(t, i, n) {
            const s = this.hn,
                e = this.ln,
                r = this.tn,
                h = this.nn,
                l = this.Qi,
                a = this.Dn(n);
            this.nn = t, this.hn = isNaN(t) ? NaN : this.Hi.St().zt(t), this.Qi = n;
            const o = null !== a ? a.Ct() : null;
            return null !== a && null !== o ? (this.tn = i, this.ln = a.Rt(i, o)) : (this.tn = NaN, this.ln = NaN), s !== this.hn || e !== this.ln || h !== this.nn || r !== this.tn || l !== this.Qi
        }
        kn() {
            const t = this.Hi.wt().map((t => t.Bn().An())).filter(A),
                i = 0 === t.length ? null : Math.max(...t);
            this.nn = null !== i ? i : NaN
        }
        Pn(t, i, n) {
            let s = t.get(i);
            return void 0 === s && (s = new Q(this, i, n), t.set(i, s)), s
        }
    }

    function ht(t) {
        return "left" === t || "right" === t
    }
    class lt {
        constructor(t) {
            this.Vn = new Map, this.zn = [], this.En = t
        }
        In(t, i) {
            const n = function (t, i) {
                return void 0 === t ? i : {
                    Ln: Math.max(t.Ln, i.Ln),
                    Nn: t.Nn || i.Nn
                }
            }(this.Vn.get(t), i);
            this.Vn.set(t, n)
        }
        Fn() {
            return this.En
        }
        Wn(t) {
            const i = this.Vn.get(t);
            return void 0 === i ? {
                Ln: this.En
            } : {
                Ln: Math.max(this.En, i.Ln),
                Nn: i.Nn
            }
        }
        jn() {
            this.Hn(), this.zn = [{
                $n: 0
            }]
        }
        Un(t) {
            this.Hn(), this.zn = [{
                $n: 1,
                Ot: t
            }]
        }
        qn(t) {
            this.Yn(), this.zn.push({
                $n: 5,
                Ot: t
            })
        }
        Hn() {
            this.Yn(), this.zn.push({
                $n: 6
            })
        }
        Xn() {
            this.Hn(), this.zn = [{
                $n: 4
            }]
        }
        Kn(t) {
            this.Hn(), this.zn.push({
                $n: 2,
                Ot: t
            })
        }
        Zn(t) {
            this.Hn(), this.zn.push({
                $n: 3,
                Ot: t
            })
        }
        Gn() {
            return this.zn
        }
        Jn(t) {
            for (const i of t.zn) this.Qn(i);
            this.En = Math.max(this.En, t.En), t.Vn.forEach(((t, i) => {
                this.In(i, t)
            }))
        }
        static ts() {
            return new lt(2)
        }
        static ns() {
            return new lt(3)
        }
        Qn(t) {
            switch (t.$n) {
                case 0:
                    this.jn();
                    break;
                case 1:
                    this.Un(t.Ot);
                    break;
                case 2:
                    this.Kn(t.Ot);
                    break;
                case 3:
                    this.Zn(t.Ot);
                    break;
                case 4:
                    this.Xn();
                    break;
                case 5:
                    this.qn(t.Ot);
                    break;
                case 6:
                    this.Yn()
            }
        }
        Yn() {
            const t = this.zn.findIndex((t => 5 === t.$n)); - 1 !== t && this.zn.splice(t, 1)
        }
    }
    const at = ".";

    function ot(t, i) {
        if (!T(t)) return "n/a";
        if (!P(i)) throw new TypeError("invalid length");
        if (i < 0 || i > 16) throw new TypeError("invalid length");
        if (0 === i) return t.toString();
        return ("0000000000000000" + t.toString()).slice(-i)
    }
    class _t {
        constructor(t, i) {
            if (i || (i = 1), T(t) && P(t) || (t = 100), t < 0) throw new TypeError("invalid base");
            this.Ei = t, this.ss = i, this.es()
        }
        format(t) {
            const i = t < 0 ? "−" : "";
            return t = Math.abs(t), i + this.rs(t)
        }
        es() {
            if (this.hs = 0, this.Ei > 0 && this.ss > 0) {
                let t = this.Ei;
                for (; t > 1;) t /= 10, this.hs++
            }
        }
        rs(t) {
            const i = this.Ei / this.ss;
            let n = Math.floor(t),
                s = "";
            const e = void 0 !== this.hs ? this.hs : NaN;
            if (i > 1) {
                let r = +(Math.round(t * i) - n * i).toFixed(this.hs);
                r >= i && (r -= i, n += 1), s = at + ot(+r.toFixed(this.hs) * this.ss, e)
            } else n = Math.round(n * i) / i, e > 0 && (s = at + ot(0, e));
            return n.toFixed(0) + s
        }
    }
    class ut extends _t {
        constructor(t = 100) {
            super(t)
        }
        format(t) {
            return `${super.format(t)}%`
        }
    }
    class ct {
        constructor(t) {
            this.ls = t
        }
        format(t) {
            let i = "";
            return t < 0 && (i = "-", t = -t), t < 995 ? i + this.os(t) : t < 999995 ? i + this.os(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.os(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.os(t / 1e9) + "B")
        }
        os(t) {
            let i;
            const n = Math.pow(10, this.ls);
            return i = (t = Math.round(t * n) / n) >= 1e-15 && t < 1 ? t.toFixed(this.ls).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, ((t, i) => i))
        }
    }

    function dt(t, i, n, s, e, r, h) {
        if (0 === i.length || s.from >= i.length || s.to <= 0) return;
        const {
            context: l,
            horizontalPixelRatio: a,
            verticalPixelRatio: o
        } = t, _ = i[s.from];
        let u = r(t, _),
            c = _;
        if (s.to - s.from < 2) {
            const i = e / 2;
            l.beginPath();
            const n = {
                nt: _.nt - i,
                st: _.st
            },
                s = {
                    nt: _.nt + i,
                    st: _.st
                };
            l.moveTo(n.nt * a, n.st * o), l.lineTo(s.nt * a, s.st * o), h(t, u, n, s)
        } else {
            const e = (i, n) => {
                h(t, u, c, n), l.beginPath(), u = i, c = n
            };
            let d = c;
            l.beginPath(), l.moveTo(_.nt * a, _.st * o);
            for (let h = s.from + 1; h < s.to; ++h) {
                d = i[h];
                const s = r(t, d);
                switch (n) {
                    case 0:
                        l.lineTo(d.nt * a, d.st * o);
                        break;
                    case 1:
                        l.lineTo(d.nt * a, i[h - 1].st * o), s !== u && (e(s, d), l.lineTo(d.nt * a, i[h - 1].st * o)), l.lineTo(d.nt * a, d.st * o);
                        break;
                    case 2: {
                        const [t, n] = mt(i, h - 1, h);
                        l.bezierCurveTo(t.nt * a, t.st * o, n.nt * a, n.st * o, d.nt * a, d.st * o);
                        break
                    }
                }
                1 !== n && s !== u && (e(s, d), l.moveTo(d.nt * a, d.st * o))
            } (c !== d || c === d && 1 === n) && h(t, u, c, d)
        }
    }
    const ft = 6;

    function vt(t, i) {
        return {
            nt: t.nt - i.nt,
            st: t.st - i.st
        }
    }

    function pt(t, i) {
        return {
            nt: t.nt / i,
            st: t.st / i
        }
    }

    function mt(t, i, n) {
        const s = Math.max(0, i - 1),
            e = Math.min(t.length - 1, n + 1);
        var r, h;
        return [(r = t[i], h = pt(vt(t[n], t[s]), ft), {
            nt: r.nt + h.nt,
            st: r.st + h.st
        }), vt(t[n], pt(vt(t[e], t[i]), ft))]
    }

    function bt(t, i, n, s, e) {
        const {
            context: r,
            horizontalPixelRatio: h,
            verticalPixelRatio: l
        } = i;
        r.lineTo(e.nt * h, t * l), r.lineTo(s.nt * h, t * l), r.closePath(), r.fillStyle = n, r.fill()
    }
    class wt extends L {
        constructor() {
            super(...arguments), this.G = null
        }
        J(t) {
            this.G = t
        }
        Z(t) {
            var i;
            if (null === this.G) return;
            const {
                it: n,
                tt: s,
                _s: e,
                et: r,
                Nt: h,
                us: l
            } = this.G, a = null !== (i = this.G.cs) && void 0 !== i ? i : this.G.ds ? 0 : t.mediaSize.height;
            if (null === s) return;
            const o = t.context;
            o.lineCap = "butt", o.lineJoin = "round", o.lineWidth = r, _(o, h), o.lineWidth = 1, dt(t, n, l, s, e, this.fs.bind(this), bt.bind(null, a))
        }
    }

    function gt(t, i, n) {
        return Math.min(Math.max(t, i), n)
    }

    function Mt(t, i, n) {
        return i - t <= n
    }

    function xt(t) {
        const i = Math.ceil(t);
        return i % 2 == 0 ? i - 1 : i
    }
    class St {
        vs(t, i) {
            const n = this.ps,
                {
                    bs: s,
                    ws: e,
                    gs: r,
                    Ms: h,
                    xs: l,
                    cs: a
                } = i;
            if (void 0 === this.Ss || void 0 === n || n.bs !== s || n.ws !== e || n.gs !== r || n.Ms !== h || n.cs !== a || n.xs !== l) {
                const n = t.context.createLinearGradient(0, 0, 0, l);
                if (n.addColorStop(0, s), null != a) {
                    const i = gt(a * t.verticalPixelRatio / l, 0, 1);
                    n.addColorStop(i, e), n.addColorStop(i, r)
                }
                n.addColorStop(1, h), this.Ss = n, this.ps = i
            }
            return this.Ss
        }
    }
    class yt extends wt {
        constructor() {
            super(...arguments), this.ys = new St
        }
        fs(t, i) {
            return this.ys.vs(t, {
                bs: i.ks,
                ws: "",
                gs: "",
                Ms: i.Cs,
                xs: t.bitmapSize.height
            })
        }
    }

    function kt(t, i) {
        const n = t.context;
        n.strokeStyle = i, n.stroke()
    }
    class Ct extends L {
        constructor() {
            super(...arguments), this.G = null
        }
        J(t) {
            this.G = t
        }
        Z(t) {
            if (null === this.G) return;
            const {
                it: i,
                tt: n,
                _s: s,
                us: e,
                et: r,
                Nt: h,
                Ts: l
            } = this.G;
            if (null === n) return;
            const a = t.context;
            a.lineCap = "butt", a.lineWidth = r * t.verticalPixelRatio, _(a, h), a.lineJoin = "round";
            const o = this.Ps.bind(this);
            void 0 !== e && dt(t, i, e, n, s, o, kt), l && function (t, i, n, s, e) {
                const {
                    horizontalPixelRatio: r,
                    verticalPixelRatio: h,
                    context: l
                } = t;
                let a = null;
                const o = Math.max(1, Math.floor(r)) % 2 / 2,
                    _ = n * h + o;
                for (let n = s.to - 1; n >= s.from; --n) {
                    const s = i[n];
                    if (s) {
                        const i = e(t, s);
                        i !== a && (l.beginPath(), null !== a && l.fill(), l.fillStyle = i, a = i);
                        const n = Math.round(s.nt * r) + o,
                            u = s.st * h;
                        l.moveTo(n, u), l.arc(n, u, _, 0, 2 * Math.PI)
                    }
                }
                l.fill()
            }(t, i, l, n, o)
        }
    }
    class Tt extends Ct {
        Ps(t, i) {
            return i.lt
        }
    }

    function Pt(t, i, n, s, e = 0, r = i.length) {
        let h = r - e;
        for (; 0 < h;) {
            const r = h >> 1,
                l = e + r;
            s(i[l], n) === t ? (e = l + 1, h -= r + 1) : h = r
        }
        return e
    }
    const Rt = Pt.bind(null, !0),
        Dt = Pt.bind(null, !1);

    function Ot(t, i) {
        return t.ot < i
    }

    function At(t, i) {
        return i < t.ot
    }

    function Bt(t, i, n) {
        const s = i.Rs(),
            e = i.ui(),
            r = Rt(t, s, Ot),
            h = Dt(t, e, At);
        if (!n) return {
            from: r,
            to: h
        };
        let l = r,
            a = h;
        return r > 0 && r < t.length && t[r].ot >= s && (l = r - 1), h > 0 && h < t.length && t[h - 1].ot <= e && (a = h + 1), {
            from: l,
            to: a
        }
    }
    class Vt {
        constructor(t, i, n) {
            this.Ds = !0, this.Os = !0, this.As = !0, this.Bs = [], this.Vs = null, this.zs = t, this.Es = i, this.Is = n
        }
        bt(t) {
            this.Ds = !0, "data" === t && (this.Os = !0), "options" === t && (this.As = !0)
        }
        gt() {
            return this.zs.kt() ? (this.Ls(), null === this.Vs ? null : this.Ns) : null
        }
        Fs() {
            this.Bs = this.Bs.map((t => Object.assign(Object.assign({}, t), this.zs.js().Ws(t.ot))))
        }
        Hs() {
            this.Vs = null
        }
        Ls() {
            this.Os && (this.$s(), this.Os = !1), this.As && (this.Fs(), this.As = !1), this.Ds && (this.Us(), this.Ds = !1)
        }
        Us() {
            const t = this.zs.Dt(),
                i = this.Es.St();
            if (this.Hs(), i.Li() || t.Li()) return;
            const n = i.qs();
            if (null === n) return;
            if (0 === this.zs.Bn().Ys()) return;
            const s = this.zs.Ct();
            null !== s && (this.Vs = Bt(this.Bs, n, this.Is), this.Xs(t, i, s.Ot), this.Ks())
        }
    }
    class zt extends Vt {
        constructor(t, i) {
            super(t, i, !0)
        }
        Xs(t, i, n) {
            i.Zs(this.Bs, B(this.Vs)), t.Gs(this.Bs, n, B(this.Vs))
        }
        Js(t, i) {
            return {
                ot: t,
                _t: i,
                nt: NaN,
                st: NaN
            }
        }
        $s() {
            const t = this.zs.js();
            this.Bs = this.zs.Bn().Qs().map((i => {
                const n = i.Ot[3];
                return this.te(i.ie, n, t)
            }))
        }
    }
    class Et extends zt {
        constructor(t, i) {
            super(t, i), this.Ns = new I, this.ne = new yt, this.se = new Tt, this.Ns.X([this.ne, this.se])
        }
        te(t, i, n) {
            return Object.assign(Object.assign({}, this.Js(t, i)), n.Ws(t))
        }
        Ks() {
            const t = this.zs.W();
            this.ne.J({
                us: t.lineType,
                it: this.Bs,
                Nt: t.lineStyle,
                et: t.lineWidth,
                cs: null,
                ds: t.invertFilledArea,
                tt: this.Vs,
                _s: this.Es.St().ee()
            }), this.se.J({
                us: t.lineVisible ? t.lineType : void 0,
                it: this.Bs,
                Nt: t.lineStyle,
                et: t.lineWidth,
                tt: this.Vs,
                _s: this.Es.St().ee(),
                Ts: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0
            })
        }
    }
    class It extends L {
        constructor() {
            super(...arguments), this.Et = null, this.re = 0, this.he = 0
        }
        J(t) {
            this.Et = t
        }
        Z({
            context: t,
            horizontalPixelRatio: i,
            verticalPixelRatio: n
        }) {
            if (null === this.Et || 0 === this.Et.Bn.length || null === this.Et.tt) return;
            if (this.re = this.le(i), this.re >= 2) {
                Math.max(1, Math.floor(i)) % 2 != this.re % 2 && this.re--
            }
            this.he = this.Et.ae ? Math.min(this.re, Math.floor(i)) : this.re;
            let s = null;
            const e = this.he <= this.re && this.Et.ee >= Math.floor(1.5 * i);
            for (let r = this.Et.tt.from; r < this.Et.tt.to; ++r) {
                const h = this.Et.Bn[r];
                s !== h.oe && (t.fillStyle = h.oe, s = h.oe);
                const l = Math.floor(.5 * this.he),
                    a = Math.round(h.nt * i),
                    o = a - l,
                    _ = this.he,
                    u = o + _ - 1,
                    c = Math.min(h._e, h.ue),
                    d = Math.max(h._e, h.ue),
                    f = Math.round(c * n) - l,
                    v = Math.round(d * n) + l,
                    p = Math.max(v - f, this.he);
                t.fillRect(o, f, _, p);
                const m = Math.ceil(1.5 * this.re);
                if (e) {
                    if (this.Et.ce) {
                        const i = a - m;
                        let s = Math.max(f, Math.round(h.de * n) - l),
                            e = s + _ - 1;
                        e > f + p - 1 && (e = f + p - 1, s = e - _ + 1), t.fillRect(i, s, o - i, e - s + 1)
                    }
                    const i = a + m;
                    let s = Math.max(f, Math.round(h.fe * n) - l),
                        e = s + _ - 1;
                    e > f + p - 1 && (e = f + p - 1, s = e - _ + 1), t.fillRect(u + 1, s, i - u, e - s + 1)
                }
            }
        }
        le(t) {
            const i = Math.floor(t);
            return Math.max(i, Math.floor(function (t, i) {
                return Math.floor(.3 * t * i)
            }(f(this.Et).ee, t)))
        }
    }
    class Lt extends Vt {
        constructor(t, i) {
            super(t, i, !1)
        }
        Xs(t, i, n) {
            i.Zs(this.Bs, B(this.Vs)), t.ve(this.Bs, n, B(this.Vs))
        }
        pe(t, i, n) {
            return {
                ot: t,
                me: i.Ot[0],
                be: i.Ot[1],
                we: i.Ot[2],
                ge: i.Ot[3],
                nt: NaN,
                de: NaN,
                _e: NaN,
                ue: NaN,
                fe: NaN
            }
        }
        $s() {
            const t = this.zs.js();
            this.Bs = this.zs.Bn().Qs().map((i => this.te(i.ie, i, t)))
        }
    }
    class Nt extends Lt {
        constructor() {
            super(...arguments), this.Ns = new It
        }
        te(t, i, n) {
            return Object.assign(Object.assign({}, this.pe(t, i, n)), n.Ws(t))
        }
        Ks() {
            const t = this.zs.W();
            this.Ns.J({
                Bn: this.Bs,
                ee: this.Es.St().ee(),
                ce: t.openVisible,
                ae: t.thinBars,
                tt: this.Vs
            })
        }
    }
    class Ft extends wt {
        constructor() {
            super(...arguments), this.ys = new St
        }
        fs(t, i) {
            const n = this.G;
            return this.ys.vs(t, {
                bs: i.Me,
                ws: i.xe,
                gs: i.Se,
                Ms: i.ye,
                xs: t.bitmapSize.height,
                cs: n.cs
            })
        }
    }
    class Wt extends Ct {
        constructor() {
            super(...arguments), this.ke = new St
        }
        Ps(t, i) {
            const n = this.G;
            return this.ke.vs(t, {
                bs: i.Ce,
                ws: i.Ce,
                gs: i.Te,
                Ms: i.Te,
                xs: t.bitmapSize.height,
                cs: n.cs
            })
        }
    }
    class jt extends zt {
        constructor(t, i) {
            super(t, i), this.Ns = new I, this.Pe = new Ft, this.Re = new Wt, this.Ns.X([this.Pe, this.Re])
        }
        te(t, i, n) {
            return Object.assign(Object.assign({}, this.Js(t, i)), n.Ws(t))
        }
        Ks() {
            const t = this.zs.Ct();
            if (null === t) return;
            const i = this.zs.W(),
                n = this.zs.Dt().Rt(i.baseValue.price, t.Ot),
                s = this.Es.St().ee();
            this.Pe.J({
                it: this.Bs,
                et: i.lineWidth,
                Nt: i.lineStyle,
                us: i.lineType,
                cs: n,
                ds: !1,
                tt: this.Vs,
                _s: s
            }), this.Re.J({
                it: this.Bs,
                et: i.lineWidth,
                Nt: i.lineStyle,
                us: i.lineVisible ? i.lineType : void 0,
                Ts: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0,
                cs: n,
                tt: this.Vs,
                _s: s
            })
        }
    }
    class Ht extends L {
        constructor() {
            super(...arguments), this.Et = null, this.re = 0
        }
        J(t) {
            this.Et = t
        }
        Z(t) {
            if (null === this.Et || 0 === this.Et.Bn.length || null === this.Et.tt) return;
            const {
                horizontalPixelRatio: i
            } = t;
            if (this.re = function (t, i) {
                if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                const n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
                    s = Math.floor(t * n * i),
                    e = Math.floor(t * i),
                    r = Math.min(s, e);
                return Math.max(Math.floor(i), r)
            }(this.Et.ee, i), this.re >= 2) {
                Math.floor(i) % 2 != this.re % 2 && this.re--
            }
            const n = this.Et.Bn;
            this.Et.De && this.Oe(t, n, this.Et.tt), this.Et._i && this.Ae(t, n, this.Et.tt);
            const s = this.Be(i);
            (!this.Et._i || this.re > 2 * s) && this.Ve(t, n, this.Et.tt)
        }
        Oe(t, i, n) {
            if (null === this.Et) return;
            const {
                context: s,
                horizontalPixelRatio: e,
                verticalPixelRatio: r
            } = t;
            let h = "",
                l = Math.min(Math.floor(e), Math.floor(this.Et.ee * e));
            l = Math.max(Math.floor(e), Math.min(l, this.re));
            const a = Math.floor(.5 * l);
            let o = null;
            for (let t = n.from; t < n.to; t++) {
                const n = i[t];
                n.ze !== h && (s.fillStyle = n.ze, h = n.ze);
                const _ = Math.round(Math.min(n.de, n.fe) * r),
                    u = Math.round(Math.max(n.de, n.fe) * r),
                    c = Math.round(n._e * r),
                    d = Math.round(n.ue * r);
                let f = Math.round(e * n.nt) - a;
                const v = f + l - 1;
                null !== o && (f = Math.max(o + 1, f), f = Math.min(f, v));
                const p = v - f + 1;
                s.fillRect(f, c, p, _ - c), s.fillRect(f, u + 1, p, d - u), o = v
            }
        }
        Be(t) {
            let i = Math.floor(1 * t);
            this.re <= 2 * i && (i = Math.floor(.5 * (this.re - 1)));
            const n = Math.max(Math.floor(t), i);
            return this.re <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n
        }
        Ae(t, i, n) {
            if (null === this.Et) return;
            const {
                context: s,
                horizontalPixelRatio: e,
                verticalPixelRatio: r
            } = t;
            let h = "";
            const l = this.Be(e);
            let a = null;
            for (let t = n.from; t < n.to; t++) {
                const n = i[t];
                n.Ee !== h && (s.fillStyle = n.Ee, h = n.Ee);
                let o = Math.round(n.nt * e) - Math.floor(.5 * this.re);
                const _ = o + this.re - 1,
                    u = Math.round(Math.min(n.de, n.fe) * r),
                    c = Math.round(Math.max(n.de, n.fe) * r);
                if (null !== a && (o = Math.max(a + 1, o), o = Math.min(o, _)), this.Et.ee * e > 2 * l) U(s, o, u, _ - o + 1, c - u + 1, l);
                else {
                    const t = _ - o + 1;
                    s.fillRect(o, u, t, c - u + 1)
                }
                a = _
            }
        }
        Ve(t, i, n) {
            if (null === this.Et) return;
            const {
                context: s,
                horizontalPixelRatio: e,
                verticalPixelRatio: r
            } = t;
            let h = "";
            const l = this.Be(e);
            for (let t = n.from; t < n.to; t++) {
                const n = i[t];
                let a = Math.round(Math.min(n.de, n.fe) * r),
                    o = Math.round(Math.max(n.de, n.fe) * r),
                    _ = Math.round(n.nt * e) - Math.floor(.5 * this.re),
                    u = _ + this.re - 1;
                if (n.oe !== h) {
                    const t = n.oe;
                    s.fillStyle = t, h = t
                }
                this.Et._i && (_ += l, a += l, u -= l, o -= l), a > o || s.fillRect(_, a, u - _ + 1, o - a + 1)
            }
        }
    }
    class $t extends Lt {
        constructor() {
            super(...arguments), this.Ns = new Ht
        }
        te(t, i, n) {
            return Object.assign(Object.assign({}, this.pe(t, i, n)), n.Ws(t))
        }
        Ks() {
            const t = this.zs.W();
            this.Ns.J({
                Bn: this.Bs,
                ee: this.Es.St().ee(),
                De: t.wickVisible,
                _i: t.borderVisible,
                tt: this.Vs
            })
        }
    }
    class Ut {
        constructor(t, i) {
            this.Ie = t, this.Ei = i
        }
        K(t, i, n) {
            this.Ie.draw(t, this.Ei, i, n)
        }
    }
    class qt extends Vt {
        constructor(t, i, n) {
            super(t, i, !1), this.mn = n, this.Ns = new Ut(this.mn.renderer(), (i => {
                const n = t.Ct();
                return null === n ? null : t.Dt().Rt(i, n.Ot)
            }))
        }
        Le(t) {
            return this.mn.priceValueBuilder(t)
        }
        Ne(t) {
            return this.mn.isWhitespace(t)
        }
        $s() {
            const t = this.zs.js();
            this.Bs = this.zs.Bn().Qs().map((i => Object.assign(Object.assign({
                ot: i.ie,
                nt: NaN
            }, t.Ws(i.ie)), {
                Fe: i.We
            })))
        }
        Xs(t, i) {
            i.Zs(this.Bs, B(this.Vs))
        }
        Ks() {
            this.mn.update({
                bars: this.Bs.map(Yt),
                barSpacing: this.Es.St().ee(),
                visibleRange: this.Vs
            }, this.zs.W())
        }
    }

    function Yt(t) {
        return {
            x: t.nt,
            time: t.ot,
            originalData: t.Fe,
            barColor: t.oe
        }
    }
    class Xt extends L {
        constructor() {
            super(...arguments), this.Et = null, this.je = []
        }
        J(t) {
            this.Et = t, this.je = []
        }
        Z({
            context: t,
            horizontalPixelRatio: i,
            verticalPixelRatio: n
        }) {
            if (null === this.Et || 0 === this.Et.it.length || null === this.Et.tt) return;
            this.je.length || this.He(i);
            const s = Math.max(1, Math.floor(n)),
                e = Math.round(this.Et.$e * n) - Math.floor(s / 2),
                r = e + s;
            for (let i = this.Et.tt.from; i < this.Et.tt.to; i++) {
                const h = this.Et.it[i],
                    l = this.je[i - this.Et.tt.from],
                    a = Math.round(h.st * n);
                let o, _;
                t.fillStyle = h.oe, a <= e ? (o = a, _ = r) : (o = e, _ = a - Math.floor(s / 2) + s), t.fillRect(l.Rs, o, l.ui - l.Rs + 1, _ - o)
            }
        }
        He(t) {
            if (null === this.Et || 0 === this.Et.it.length || null === this.Et.tt) return void (this.je = []);
            const i = Math.ceil(this.Et.ee * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                n = Math.round(this.Et.ee * t) - i;
            this.je = new Array(this.Et.tt.to - this.Et.tt.from);
            for (let i = this.Et.tt.from; i < this.Et.tt.to; i++) {
                const s = this.Et.it[i],
                    e = Math.round(s.nt * t);
                let r, h;
                if (n % 2) {
                    const t = (n - 1) / 2;
                    r = e - t, h = e + t
                } else {
                    const t = n / 2;
                    r = e - t, h = e + t - 1
                }
                this.je[i - this.Et.tt.from] = {
                    Rs: r,
                    ui: h,
                    Ue: e,
                    qe: s.nt * t,
                    ot: s.ot
                }
            }
            for (let t = this.Et.tt.from + 1; t < this.Et.tt.to; t++) {
                const n = this.je[t - this.Et.tt.from],
                    s = this.je[t - this.Et.tt.from - 1];
                n.ot === s.ot + 1 && (n.Rs - s.ui !== i + 1 && (s.Ue > s.qe ? s.ui = n.Rs - i - 1 : n.Rs = s.ui + i + 1))
            }
            let s = Math.ceil(this.Et.ee * t);
            for (let t = this.Et.tt.from; t < this.Et.tt.to; t++) {
                const i = this.je[t - this.Et.tt.from];
                i.ui < i.Rs && (i.ui = i.Rs);
                const n = i.ui - i.Rs + 1;
                s = Math.min(n, s)
            }
            if (i > 0 && s < 4)
                for (let t = this.Et.tt.from; t < this.Et.tt.to; t++) {
                    const i = this.je[t - this.Et.tt.from];
                    i.ui - i.Rs + 1 > s && (i.Ue > i.qe ? i.ui -= 1 : i.Rs += 1)
                }
        }
    }
    class Kt extends zt {
        constructor() {
            super(...arguments), this.Ns = new Xt
        }
        te(t, i, n) {
            return Object.assign(Object.assign({}, this.Js(t, i)), n.Ws(t))
        }
        Ks() {
            const t = {
                it: this.Bs,
                ee: this.Es.St().ee(),
                tt: this.Vs,
                $e: this.zs.Dt().Rt(this.zs.W().base, f(this.zs.Ct()).Ot)
            };
            this.Ns.J(t)
        }
    }
    class Zt extends zt {
        constructor() {
            super(...arguments), this.Ns = new Tt
        }
        te(t, i, n) {
            return Object.assign(Object.assign({}, this.Js(t, i)), n.Ws(t))
        }
        Ks() {
            const t = this.zs.W(),
                i = {
                    it: this.Bs,
                    Nt: t.lineStyle,
                    us: t.lineVisible ? t.lineType : void 0,
                    et: t.lineWidth,
                    Ts: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
                    tt: this.Vs,
                    _s: this.Es.St().ee()
                };
            this.Ns.J(i)
        }
    }
    const Gt = /[2-9]/g;
    class Jt {
        constructor(t = 50) {
            this.Ye = 0, this.Xe = 1, this.Ke = 1, this.Ze = {}, this.Ge = new Map, this.Je = t
        }
        Qe() {
            this.Ye = 0, this.Ge.clear(), this.Xe = 1, this.Ke = 1, this.Ze = {}
        }
        Mi(t, i, n) {
            return this.tr(t, i, n).width
        }
        gi(t, i, n) {
            const s = this.tr(t, i, n);
            return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2
        }
        tr(t, i, n) {
            const s = n || Gt,
                e = String(i).replace(s, "0");
            if (this.Ge.has(e)) return d(this.Ge.get(e)).ir;
            if (this.Ye === this.Je) {
                const t = this.Ze[this.Ke];
                delete this.Ze[this.Ke], this.Ge.delete(t), this.Ke++, this.Ye--
            }
            t.save(), t.textBaseline = "middle";
            const r = t.measureText(e);
            return t.restore(), 0 === r.width && i.length || (this.Ge.set(e, {
                ir: r,
                nr: this.Xe
            }), this.Ze[this.Xe] = e, this.Ye++, this.Xe++), r
        }
    }
    class Qt {
        constructor(t) {
            this.sr = null, this.k = null, this.er = "right", this.rr = t
        }
        hr(t, i, n) {
            this.sr = t, this.k = i, this.er = n
        }
        K(t) {
            null !== this.k && null !== this.sr && this.sr.K(t, this.k, this.rr, this.er)
        }
    }
    class ti {
        constructor(t, i, n) {
            this.lr = t, this.rr = new Jt(50), this.ar = i, this.F = n, this.j = -1, this.Wt = new Qt(this.rr)
        }
        gt() {
            const t = this.F._r(this.ar);
            if (null === t) return null;
            const i = t.ur(this.ar) ? t.cr() : this.ar.Dt();
            if (null === i) return null;
            const n = t.dr(i);
            if ("overlay" === n) return null;
            const s = this.F.vr();
            return s.P !== this.j && (this.j = s.P, this.rr.Qe()), this.Wt.hr(this.lr.Vi(), s, n), this.Wt
        }
    }
    class ii extends L {
        constructor() {
            super(...arguments), this.Et = null
        }
        J(t) {
            this.Et = t
        }
        pr(t, i) {
            var n;
            if (!(null === (n = this.Et) || void 0 === n ? void 0 : n.kt)) return null;
            const {
                st: s,
                et: e,
                mr: r
            } = this.Et;
            return i >= s - e - 7 && i <= s + e + 7 ? {
                br: this.Et,
                mr: r
            } : null
        }
        Z({
            context: t,
            bitmapSize: i,
            horizontalPixelRatio: n,
            verticalPixelRatio: s
        }) {
            if (null === this.Et) return;
            if (!1 === this.Et.kt) return;
            const e = Math.round(this.Et.st * s);
            e < 0 || e > i.height || (t.lineCap = "butt", t.strokeStyle = this.Et.O, t.lineWidth = Math.floor(this.Et.et * n), _(t, this.Et.Nt), u(t, e, 0, i.width))
        }
    }
    class ni {
        constructor(t) {
            this.wr = {
                st: 0,
                O: "rgba(0, 0, 0, 0)",
                et: 1,
                Nt: 0,
                kt: !1
            }, this.gr = new ii, this.ft = !0, this.zs = t, this.Es = t.$t(), this.gr.J(this.wr)
        }
        bt() {
            this.ft = !0
        }
        gt() {
            return this.zs.kt() ? (this.ft && (this.Mr(), this.ft = !1), this.gr) : null
        }
    }
    class si extends ni {
        constructor(t) {
            super(t)
        }
        Mr() {
            this.wr.kt = !1;
            const t = this.zs.Dt(),
                i = t.Sr().Sr;
            if (2 !== i && 3 !== i) return;
            const n = this.zs.W();
            if (!n.baseLineVisible || !this.zs.kt()) return;
            const s = this.zs.Ct();
            null !== s && (this.wr.kt = !0, this.wr.st = t.Rt(s.Ot, s.Ot), this.wr.O = n.baseLineColor, this.wr.et = n.baseLineWidth, this.wr.Nt = n.baseLineStyle)
        }
    }
    class ei extends L {
        constructor() {
            super(...arguments), this.Et = null
        }
        J(t) {
            this.Et = t
        }
        We() {
            return this.Et
        }
        Z({
            context: t,
            horizontalPixelRatio: i,
            verticalPixelRatio: n
        }) {
            const s = this.Et;
            if (null === s) return;
            const e = Math.max(1, Math.floor(i)),
                r = e % 2 / 2,
                h = Math.round(s.qe.x * i) + r,
                l = s.qe.y * n;
            t.fillStyle = s.yr, t.beginPath();
            const a = Math.max(2, 1.5 * s.kr) * i;
            t.arc(h, l, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = s.Cr, t.beginPath(), t.arc(h, l, s.ht * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = e, t.strokeStyle = s.Tr, t.beginPath(), t.arc(h, l, s.ht * i + e / 2, 0, 2 * Math.PI, !1), t.stroke()
        }
    }
    const ri = [{
        Pr: 0,
        Rr: .25,
        Dr: 4,
        Or: 10,
        Ar: .25,
        Br: 0,
        Vr: .4,
        zr: .8
    }, {
        Pr: .25,
        Rr: .525,
        Dr: 10,
        Or: 14,
        Ar: 0,
        Br: 0,
        Vr: .8,
        zr: 0
    }, {
        Pr: .525,
        Rr: 1,
        Dr: 14,
        Or: 14,
        Ar: 0,
        Br: 0,
        Vr: 0,
        zr: 0
    }];

    function hi(t, i, n, s) {
        return function (t, i) {
            if ("transparent" === t) return t;
            const n = S(t),
                s = n[3];
            return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`
        }(t, n + (s - n) * i)
    }

    function li(t, i) {
        const n = t % 2600 / 2600;
        let s;
        for (const t of ri)
            if (n >= t.Pr && n <= t.Rr) {
                s = t;
                break
            } c(void 0 !== s, "Last price animation internal logic error");
        const e = (n - s.Pr) / (s.Rr - s.Pr);
        return {
            Cr: hi(i, e, s.Ar, s.Br),
            Tr: hi(i, e, s.Vr, s.zr),
            ht: (r = e, h = s.Dr, l = s.Or, h + (l - h) * r)
        };
        var r, h, l
    }
    class ai {
        constructor(t) {
            this.Wt = new ei, this.ft = !0, this.Er = !0, this.Ir = performance.now(), this.Lr = this.Ir - 1, this.Nr = t
        }
        Fr() {
            this.Lr = this.Ir - 1, this.bt()
        }
        Wr() {
            if (this.bt(), 2 === this.Nr.W().lastPriceAnimation) {
                const t = performance.now(),
                    i = this.Lr - t;
                if (i > 0) return void (i < 650 && (this.Lr += 2600));
                this.Ir = t, this.Lr = t + 2600
            }
        }
        bt() {
            this.ft = !0
        }
        jr() {
            this.Er = !0
        }
        kt() {
            return 0 !== this.Nr.W().lastPriceAnimation
        }
        Hr() {
            switch (this.Nr.W().lastPriceAnimation) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return performance.now() <= this.Lr
            }
        }
        gt() {
            return this.ft ? (this.Mt(), this.ft = !1, this.Er = !1) : this.Er && (this.$r(), this.Er = !1), this.Wt
        }
        Mt() {
            this.Wt.J(null);
            const t = this.Nr.$t().St(),
                i = t.qs(),
                n = this.Nr.Ct();
            if (null === i || null === n) return;
            const s = this.Nr.Ur(!0);
            if (s.qr || !i.Yr(s.ie)) return;
            const e = {
                x: t.zt(s.ie),
                y: this.Nr.Dt().Rt(s._t, n.Ot)
            },
                r = s.O,
                h = this.Nr.W().lineWidth,
                l = li(this.Xr(), r);
            this.Wt.J({
                yr: r,
                kr: h,
                Cr: l.Cr,
                Tr: l.Tr,
                ht: l.ht,
                qe: e
            })
        }
        $r() {
            const t = this.Wt.We();
            if (null !== t) {
                const i = li(this.Xr(), t.yr);
                t.Cr = i.Cr, t.Tr = i.Tr, t.ht = i.ht
            }
        }
        Xr() {
            return this.Hr() ? performance.now() - this.Ir : 2599
        }
    }

    function oi(t, i) {
        return xt(Math.min(Math.max(t, 12), 30) * i)
    }

    function _i(t, i) {
        switch (t) {
            case "arrowDown":
            case "arrowUp":
                return oi(i, 1);
            case "circle":
                return oi(i, .8);
            case "square":
                return oi(i, .7)
        }
    }

    function ui(t) {
        return function (t) {
            const i = Math.ceil(t);
            return i % 2 != 0 ? i - 1 : i
        }(oi(t, 1))
    }

    function ci(t) {
        return Math.max(oi(t, .1), 3)
    }

    function di(t, i, n, s, e) {
        const r = _i("square", n),
            h = (r - 1) / 2,
            l = t - h,
            a = i - h;
        return s >= l && s <= l + r && e >= a && e <= a + r
    }

    function fi(t, i, n, s) {
        const e = (_i("arrowUp", s) - 1) / 2 * n.Kr,
            r = (xt(s / 2) - 1) / 2 * n.Kr;
        i.beginPath(), t ? (i.moveTo(n.nt - e, n.st), i.lineTo(n.nt, n.st - e), i.lineTo(n.nt + e, n.st), i.lineTo(n.nt + r, n.st), i.lineTo(n.nt + r, n.st + e), i.lineTo(n.nt - r, n.st + e), i.lineTo(n.nt - r, n.st)) : (i.moveTo(n.nt - e, n.st), i.lineTo(n.nt, n.st + e), i.lineTo(n.nt + e, n.st), i.lineTo(n.nt + r, n.st), i.lineTo(n.nt + r, n.st - e), i.lineTo(n.nt - r, n.st - e), i.lineTo(n.nt - r, n.st)), i.fill()
    }

    function vi(t, i, n, s, e, r) {
        return di(i, n, s, e, r)
    }
    class pi extends L {
        constructor() {
            super(...arguments), this.Et = null, this.rr = new Jt, this.j = -1, this.H = "", this.Zr = ""
        }
        J(t) {
            this.Et = t
        }
        hr(t, i) {
            this.j === t && this.H === i || (this.j = t, this.H = i, this.Zr = z(t, i), this.rr.Qe())
        }
        pr(t, i) {
            if (null === this.Et || null === this.Et.tt) return null;
            for (let n = this.Et.tt.from; n < this.Et.tt.to; n++) {
                const s = this.Et.it[n];
                if (bi(s, t, i)) return {
                    br: s.Gr,
                    mr: s.mr
                }
            }
            return null
        }
        Z({
            context: t,
            horizontalPixelRatio: i,
            verticalPixelRatio: n
        }, s, e) {
            if (null !== this.Et && null !== this.Et.tt) {
                t.textBaseline = "middle", t.font = this.Zr;
                for (let s = this.Et.tt.from; s < this.Et.tt.to; s++) {
                    const e = this.Et.it[s];
                    void 0 !== e.Zt && (e.Zt.ji = this.rr.Mi(t, e.Zt.Jr), e.Zt.Vt = this.j, e.Zt.nt = e.nt - e.Zt.ji / 2), mi(e, t, i, n)
                }
            }
        }
    }

    function mi(t, i, n, s) {
        i.fillStyle = t.O, void 0 !== t.Zt && function (t, i, n, s, e, r) {
            t.save(), t.scale(e, r), t.fillText(i, n, s), t.restore()
        }(i, t.Zt.Jr, t.Zt.nt, t.Zt.st, n, s),
            function (t, i, n) {
                if (0 === t.Ys) return;
                switch (t.Qr) {
                    case "arrowDown":
                        return void fi(!1, i, n, t.Ys);
                    case "arrowUp":
                        return void fi(!0, i, n, t.Ys);
                    case "circle":
                        return void
                            function (t, i, n) {
                                const s = (_i("circle", n) - 1) / 2;
                                t.beginPath(), t.arc(i.nt, i.st, s * i.Kr, 0, 2 * Math.PI, !1), t.fill()
                            }(i, n, t.Ys);
                    case "square":
                        return void
                            function (t, i, n) {
                                const s = _i("square", n),
                                    e = (s - 1) * i.Kr / 2,
                                    r = i.nt - e,
                                    h = i.st - e;
                                t.fillRect(r, h, s * i.Kr, s * i.Kr)
                            }(i, n, t.Ys)
                }
                t.Qr
            }(t, i, function (t, i, n) {
                const s = Math.max(1, Math.floor(i)) % 2 / 2;
                return {
                    nt: Math.round(t.nt * i) + s,
                    st: t.st * n,
                    Kr: i
                }
            }(t, n, s))
    }

    function bi(t, i, n) {
        return !(void 0 === t.Zt || ! function (t, i, n, s, e, r) {
            const h = s / 2;
            return e >= t && e <= t + n && r >= i - h && r <= i + h
        }(t.Zt.nt, t.Zt.st, t.Zt.ji, t.Zt.Vt, i, n)) || function (t, i, n) {
            if (0 === t.Ys) return !1;
            switch (t.Qr) {
                case "arrowDown":
                case "arrowUp":
                    return vi(0, t.nt, t.st, t.Ys, i, n);
                case "circle":
                    return function (t, i, n, s, e) {
                        const r = 2 + _i("circle", n) / 2,
                            h = t - s,
                            l = i - e;
                        return Math.sqrt(h * h + l * l) <= r
                    }(t.nt, t.st, t.Ys, i, n);
                case "square":
                    return di(t.nt, t.st, t.Ys, i, n)
            }
        }(t, i, n)
    }

    function wi(t, i, n, s, e, r, h, l, a) {
        const o = T(n) ? n : n.ge,
            _ = T(n) ? n : n.be,
            u = T(n) ? n : n.we,
            c = T(i.size) ? Math.max(i.size, 0) : 1,
            d = ui(l.ee()) * c,
            f = d / 2;
        switch (t.Ys = d, i.position) {
            case "inBar":
                return t.st = h.Rt(o, a), void (void 0 !== t.Zt && (t.Zt.st = t.st + f + r + .6 * e));
            case "aboveBar":
                return t.st = h.Rt(_, a) - f - s.th, void 0 !== t.Zt && (t.Zt.st = t.st - f - .6 * e, s.th += 1.2 * e), void (s.th += d + r);
            case "belowBar":
                return t.st = h.Rt(u, a) + f + s.ih, void 0 !== t.Zt && (t.Zt.st = t.st + f + r + .6 * e, s.ih += 1.2 * e), void (s.ih += d + r)
        }
        i.position
    }
    class gi {
        constructor(t, i) {
            this.ft = !0, this.nh = !0, this.sh = !0, this.eh = null, this.Wt = new pi, this.Nr = t, this.Hi = i, this.Et = {
                it: [],
                tt: null
            }
        }
        bt(t) {
            this.ft = !0, this.sh = !0, "data" === t && (this.nh = !0)
        }
        gt(t) {
            if (!this.Nr.kt()) return null;
            this.ft && this.rh();
            const i = this.Hi.W().layout;
            return this.Wt.hr(i.fontSize, i.fontFamily), this.Wt.J(this.Et), this.Wt
        }
        hh() {
            if (this.sh) {
                if (this.Nr.lh().length > 0) {
                    const t = this.Hi.St().ee(),
                        i = ci(t),
                        n = 1.5 * ui(t) + 2 * i;
                    this.eh = {
                        above: n,
                        below: n
                    }
                } else this.eh = null;
                this.sh = !1
            }
            return this.eh
        }
        rh() {
            const t = this.Nr.Dt(),
                i = this.Hi.St(),
                n = this.Nr.lh();
            this.nh && (this.Et.it = n.map((t => ({
                ot: t.time,
                nt: 0,
                st: 0,
                Ys: 0,
                Qr: t.shape,
                O: t.color,
                Gr: t.Gr,
                mr: t.id,
                Zt: void 0
            }))), this.nh = !1);
            const s = this.Hi.W().layout;
            this.Et.tt = null;
            const e = i.qs();
            if (null === e) return;
            const r = this.Nr.Ct();
            if (null === r) return;
            if (0 === this.Et.it.length) return;
            let h = NaN;
            const l = ci(i.ee()),
                a = {
                    th: l,
                    ih: l
                };
            this.Et.tt = Bt(this.Et.it, e, !0);
            for (let e = this.Et.tt.from; e < this.Et.tt.to; e++) {
                const o = n[e];
                o.time !== h && (a.th = l, a.ih = l, h = o.time);
                const _ = this.Et.it[e];
                _.nt = i.zt(o.time), void 0 !== o.text && o.text.length > 0 && (_.Zt = {
                    Jr: o.text,
                    nt: 0,
                    st: 0,
                    ji: 0,
                    Vt: 0
                });
                const u = this.Nr.ah(o.time);
                null !== u && wi(_, o, u, a, s.fontSize, l, t, i, r.Ot)
            }
            this.ft = !1
        }
    }
    class Mi extends ni {
        constructor(t) {
            super(t)
        }
        Mr() {
            const t = this.wr;
            t.kt = !1;
            const i = this.zs.W();
            if (!i.priceLineVisible || !this.zs.kt()) return;
            const n = this.zs.Ur(0 === i.priceLineSource);
            n.qr || (t.kt = !0, t.st = n.Si, t.O = this.zs.oh(n.O), t.et = i.priceLineWidth, t.Nt = i.priceLineStyle)
        }
    }
    class xi extends J {
        constructor(t) {
            super(), this.jt = t
        }
        zi(t, i, n) {
            t.kt = !1, i.kt = !1;
            const s = this.jt;
            if (!s.kt()) return;
            const e = s.W(),
                r = e.lastValueVisible,
                h = "" !== s._h(),
                l = 0 === e.seriesLastValueMode,
                a = s.Ur(!1);
            if (a.qr) return;
            r && (t.Zt = this.uh(a, r, l), t.kt = 0 !== t.Zt.length), (h || l) && (i.Zt = this.dh(a, r, h, l), i.kt = i.Zt.length > 0);
            const o = s.oh(a.O),
                _ = y(o);
            n.t = _.t, n.Si = a.Si, i.At = s.$t().Bt(a.Si / s.Dt().Vt()), t.At = o, t.O = _.i, i.O = _.i
        }
        dh(t, i, n, s) {
            let e = "";
            const r = this.jt._h();
            return n && 0 !== r.length && (e += `${r} `), i && s && (e += this.jt.Dt().fh() ? t.ph : t.mh), e.trim()
        }
        uh(t, i, n) {
            return i ? n ? this.jt.Dt().fh() ? t.mh : t.ph : t.Zt : ""
        }
    }

    function Si(t, i, n, s) {
        const e = Number.isFinite(i),
            r = Number.isFinite(n);
        return e && r ? t(i, n) : e || r ? e ? i : n : s
    }
    class yi {
        constructor(t, i) {
            this.bh = t, this.wh = i
        }
        gh(t) {
            return null !== t && (this.bh === t.bh && this.wh === t.wh)
        }
        Mh() {
            return new yi(this.bh, this.wh)
        }
        xh() {
            return this.bh
        }
        Sh() {
            return this.wh
        }
        yh() {
            return this.wh - this.bh
        }
        Li() {
            return this.wh === this.bh || Number.isNaN(this.wh) || Number.isNaN(this.bh)
        }
        Jn(t) {
            return null === t ? this : new yi(Si(Math.min, this.xh(), t.xh(), -1 / 0), Si(Math.max, this.Sh(), t.Sh(), 1 / 0))
        }
        kh(t) {
            if (!T(t)) return;
            if (0 === this.wh - this.bh) return;
            const i = .5 * (this.wh + this.bh);
            let n = this.wh - i,
                s = this.bh - i;
            n *= t, s *= t, this.wh = i + n, this.bh = i + s
        }
        Ch(t) {
            T(t) && (this.wh += t, this.bh += t)
        }
        Th() {
            return {
                minValue: this.bh,
                maxValue: this.wh
            }
        }
        static Ph(t) {
            return null === t ? null : new yi(t.minValue, t.maxValue)
        }
    }
    class ki {
        constructor(t, i) {
            this.Rh = t, this.Dh = i || null
        }
        Oh() {
            return this.Rh
        }
        Ah() {
            return this.Dh
        }
        Th() {
            return null === this.Rh ? null : {
                priceRange: this.Rh.Th(),
                margins: this.Dh || void 0
            }
        }
        static Ph(t) {
            return null === t ? null : new ki(yi.Ph(t.priceRange), t.margins)
        }
    }
    class Ci extends ni {
        constructor(t, i) {
            super(t), this.Bh = i
        }
        Mr() {
            const t = this.wr;
            t.kt = !1;
            const i = this.Bh.W();
            if (!this.zs.kt() || !i.lineVisible) return;
            const n = this.Bh.Vh();
            null !== n && (t.kt = !0, t.st = n, t.O = i.color, t.et = i.lineWidth, t.Nt = i.lineStyle, t.mr = this.Bh.W().id)
        }
    }
    class Ti extends J {
        constructor(t, i) {
            super(), this.Nr = t, this.Bh = i
        }
        zi(t, i, n) {
            t.kt = !1, i.kt = !1;
            const s = this.Bh.W(),
                e = s.axisLabelVisible,
                r = "" !== s.title,
                h = this.Nr;
            if (!e || !h.kt()) return;
            const l = this.Bh.Vh();
            if (null === l) return;
            r && (i.Zt = s.title, i.kt = !0), i.At = h.$t().Bt(l / h.Dt().Vt()), t.Zt = this.zh(s.price), t.kt = !0;
            const a = y(s.axisLabelColor || s.color);
            n.t = a.t;
            const o = s.axisLabelTextColor || a.i;
            t.O = o, i.O = o, n.Si = l
        }
        zh(t) {
            const i = this.Nr.Ct();
            return null === i ? "" : this.Nr.Dt().Ni(t, i.Ot)
        }
    }
    class Pi {
        constructor(t, i) {
            this.Nr = t, this._n = i, this.Eh = new Ci(t, this), this.lr = new Ti(t, this), this.Ih = new ti(this.lr, t, t.$t())
        }
        Lh(t) {
            C(this._n, t), this.bt(), this.Nr.$t().Nh()
        }
        W() {
            return this._n
        }
        Fh() {
            return this.Eh
        }
        Wh() {
            return this.Ih
        }
        jh() {
            return this.lr
        }
        bt() {
            this.Eh.bt(), this.lr.bt()
        }
        Vh() {
            const t = this.Nr,
                i = t.Dt();
            if (t.$t().St().Li() || i.Li()) return null;
            const n = t.Ct();
            return null === n ? null : i.Rt(this._n.price, n.Ot)
        }
    }
    class Ri extends st {
        constructor(t) {
            super(), this.Hi = t
        }
        $t() {
            return this.Hi
        }
    }
    const Di = {
        Bar: (t, i, n, s) => {
            var e;
            const r = i.upColor,
                h = i.downColor,
                l = f(t(n, s)),
                a = v(l.Ot[0]) <= v(l.Ot[3]);
            return {
                oe: null !== (e = l.O) && void 0 !== e ? e : a ? r : h
            }
        },
        Candlestick: (t, i, n, s) => {
            var e, r, h;
            const l = i.upColor,
                a = i.downColor,
                o = i.borderUpColor,
                _ = i.borderDownColor,
                u = i.wickUpColor,
                c = i.wickDownColor,
                d = f(t(n, s)),
                p = v(d.Ot[0]) <= v(d.Ot[3]);
            return {
                oe: null !== (e = d.O) && void 0 !== e ? e : p ? l : a,
                Ee: null !== (r = d.At) && void 0 !== r ? r : p ? o : _,
                ze: null !== (h = d.Hh) && void 0 !== h ? h : p ? u : c
            }
        },
        Custom: (t, i, n, s) => {
            var e;
            return {
                oe: null !== (e = f(t(n, s)).O) && void 0 !== e ? e : i.color
            }
        },
        Area: (t, i, n, s) => {
            var e, r, h, l;
            const a = f(t(n, s));
            return {
                oe: null !== (e = a.lt) && void 0 !== e ? e : i.lineColor,
                lt: null !== (r = a.lt) && void 0 !== r ? r : i.lineColor,
                ks: null !== (h = a.ks) && void 0 !== h ? h : i.topColor,
                Cs: null !== (l = a.Cs) && void 0 !== l ? l : i.bottomColor
            }
        },
        Baseline: (t, i, n, s) => {
            var e, r, h, l, a, o;
            const _ = f(t(n, s));
            return {
                oe: _.Ot[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
                Ce: null !== (e = _.Ce) && void 0 !== e ? e : i.topLineColor,
                Te: null !== (r = _.Te) && void 0 !== r ? r : i.bottomLineColor,
                Me: null !== (h = _.Me) && void 0 !== h ? h : i.topFillColor1,
                xe: null !== (l = _.xe) && void 0 !== l ? l : i.topFillColor2,
                Se: null !== (a = _.Se) && void 0 !== a ? a : i.bottomFillColor1,
                ye: null !== (o = _.ye) && void 0 !== o ? o : i.bottomFillColor2
            }
        },
        Line: (t, i, n, s) => {
            var e, r;
            const h = f(t(n, s));
            return {
                oe: null !== (e = h.O) && void 0 !== e ? e : i.color,
                lt: null !== (r = h.O) && void 0 !== r ? r : i.color
            }
        },
        Histogram: (t, i, n, s) => {
            var e;
            return {
                oe: null !== (e = f(t(n, s)).O) && void 0 !== e ? e : i.color
            }
        }
    };
    class Oi {
        constructor(t) {
            this.$h = (t, i) => void 0 !== i ? i.Ot : this.Nr.Bn().Uh(t), this.Nr = t, this.qh = Di[t.Yh()]
        }
        Ws(t, i) {
            return this.qh(this.$h, this.Nr.W(), t, i)
        }
    }
    var Ai;
    ! function (t) {
        t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight"
    }(Ai || (Ai = {}));
    const Bi = 30;
    class Vi {
        constructor() {
            this.Xh = [], this.Kh = new Map, this.Zh = new Map
        }
        Gh() {
            return this.Ys() > 0 ? this.Xh[this.Xh.length - 1] : null
        }
        Jh() {
            return this.Ys() > 0 ? this.Qh(0) : null
        }
        An() {
            return this.Ys() > 0 ? this.Qh(this.Xh.length - 1) : null
        }
        Ys() {
            return this.Xh.length
        }
        Li() {
            return 0 === this.Ys()
        }
        Yr(t) {
            return null !== this.tl(t, 0)
        }
        Uh(t) {
            return this.il(t)
        }
        il(t, i = 0) {
            const n = this.tl(t, i);
            return null === n ? null : Object.assign(Object.assign({}, this.nl(n)), {
                ie: this.Qh(n)
            })
        }
        Qs() {
            return this.Xh
        }
        sl(t, i, n) {
            if (this.Li()) return null;
            let s = null;
            for (const e of n) {
                s = zi(s, this.el(t, i, e))
            }
            return s
        }
        J(t) {
            this.Zh.clear(), this.Kh.clear(), this.Xh = t
        }
        Qh(t) {
            return this.Xh[t].ie
        }
        nl(t) {
            return this.Xh[t]
        }
        tl(t, i) {
            const n = this.rl(t);
            if (null === n && 0 !== i) switch (i) {
                case -1:
                    return this.hl(t);
                case 1:
                    return this.ll(t);
                default:
                    throw new TypeError("Unknown search mode")
            }
            return n
        }
        hl(t) {
            let i = this.al(t);
            return i > 0 && (i -= 1), i !== this.Xh.length && this.Qh(i) < t ? i : null
        }
        ll(t) {
            const i = this.ol(t);
            return i !== this.Xh.length && t < this.Qh(i) ? i : null
        }
        rl(t) {
            const i = this.al(t);
            return i === this.Xh.length || t < this.Xh[i].ie ? null : i
        }
        al(t) {
            return Rt(this.Xh, t, ((t, i) => t.ie < i))
        }
        ol(t) {
            return Dt(this.Xh, t, ((t, i) => t.ie > i))
        }
        _l(t, i, n) {
            let s = null;
            for (let e = t; e < i; e++) {
                const t = this.Xh[e].Ot[n];
                Number.isNaN(t) || (null === s ? s = {
                    ul: t,
                    cl: t
                } : (t < s.ul && (s.ul = t), t > s.cl && (s.cl = t)))
            }
            return s
        }
        el(t, i, n) {
            if (this.Li()) return null;
            let s = null;
            const e = f(this.Jh()),
                r = f(this.An()),
                h = Math.max(t, e),
                l = Math.min(i, r),
                a = Math.ceil(h / Bi) * Bi,
                o = Math.max(a, Math.floor(l / Bi) * Bi);
            {
                const t = this.al(h),
                    e = this.ol(Math.min(l, a, i));
                s = zi(s, this._l(t, e, n))
            }
            let _ = this.Kh.get(n);
            void 0 === _ && (_ = new Map, this.Kh.set(n, _));
            for (let t = Math.max(a + 1, h); t < o; t += Bi) {
                const i = Math.floor(t / Bi);
                let e = _.get(i);
                if (void 0 === e) {
                    const t = this.al(i * Bi),
                        s = this.ol((i + 1) * Bi - 1);
                    e = this._l(t, s, n), _.set(i, e)
                }
                s = zi(s, e)
            } {
                const t = this.al(o),
                    i = this.ol(l);
                s = zi(s, this._l(t, i, n))
            }
            return s
        }
    }

    function zi(t, i) {
        if (null === t) return i;
        if (null === i) return t;
        return {
            ul: Math.min(t.ul, i.ul),
            cl: Math.max(t.cl, i.cl)
        }
    }
    class Ei {
        constructor(t) {
            this.dl = t
        }
        K(t, i, n) {
            this.dl.draw(t)
        }
        fl(t, i, n) {
            var s, e;
            null === (e = (s = this.dl).drawBackground) || void 0 === e || e.call(s, t)
        }
    }
    class Ii {
        constructor(t) {
            this.Ge = null, this.mn = t
        }
        gt() {
            var t;
            const i = this.mn.renderer();
            if (null === i) return null;
            if ((null === (t = this.Ge) || void 0 === t ? void 0 : t.vl) === i) return this.Ge.pl;
            const n = new Ei(i);
            return this.Ge = {
                vl: i,
                pl: n
            }, n
        }
        ml() {
            var t, i, n;
            return null !== (n = null === (i = (t = this.mn).zOrder) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : "normal"
        }
    }

    function Li(t) {
        var i, n, s, e, r;
        return {
            Zt: t.text(),
            Si: t.coordinate(),
            xi: null === (i = t.fixedCoordinate) || void 0 === i ? void 0 : i.call(t),
            O: t.textColor(),
            t: t.backColor(),
            kt: null === (s = null === (n = t.visible) || void 0 === n ? void 0 : n.call(t)) || void 0 === s || s,
            hi: null === (r = null === (e = t.tickVisible) || void 0 === e ? void 0 : e.call(t)) || void 0 === r || r
        }
    }
    class Ni {
        constructor(t, i) {
            this.Wt = new it, this.bl = t, this.wl = i
        }
        gt() {
            return this.Wt.J(Object.assign({
                ji: this.wl.ji()
            }, Li(this.bl))), this.Wt
        }
    }
    class Fi extends J {
        constructor(t, i) {
            super(), this.bl = t, this.Ei = i
        }
        zi(t, i, n) {
            const s = Li(this.bl);
            n.t = s.t, t.O = s.O;
            const e = 2 / 12 * this.Ei.P();
            n.bi = e, n.wi = e, n.Si = s.Si, n.xi = s.xi, t.Zt = s.Zt, t.kt = s.kt, t.hi = s.hi
        }
    }
    class Wi {
        constructor(t, i) {
            this.gl = null, this.Ml = null, this.xl = null, this.Sl = null, this.yl = null, this.kl = t, this.Nr = i
        }
        Cl() {
            return this.kl
        }
        Rn() {
            var t, i;
            null === (i = (t = this.kl).updateAllViews) || void 0 === i || i.call(t)
        }
        Cn() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).paneViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.gl) || void 0 === s ? void 0 : s.vl) === e) return this.gl.pl;
            const r = e.map((t => new Ii(t)));
            return this.gl = {
                vl: e,
                pl: r
            }, r
        }
        Ji() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).timeAxisViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.Ml) || void 0 === s ? void 0 : s.vl) === e) return this.Ml.pl;
            const r = this.Nr.$t().St(),
                h = e.map((t => new Ni(t, r)));
            return this.Ml = {
                vl: e,
                pl: h
            }, h
        }
        Tn() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).priceAxisViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.xl) || void 0 === s ? void 0 : s.vl) === e) return this.xl.pl;
            const r = this.Nr.Dt(),
                h = e.map((t => new Fi(t, r)));
            return this.xl = {
                vl: e,
                pl: h
            }, h
        }
        Tl() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).priceAxisPaneViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.Sl) || void 0 === s ? void 0 : s.vl) === e) return this.Sl.pl;
            const r = e.map((t => new Ii(t)));
            return this.Sl = {
                vl: e,
                pl: r
            }, r
        }
        Pl() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).timeAxisPaneViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.yl) || void 0 === s ? void 0 : s.vl) === e) return this.yl.pl;
            const r = e.map((t => new Ii(t)));
            return this.yl = {
                vl: e,
                pl: r
            }, r
        }
        Rl(t, i) {
            var n, s, e;
            return null !== (e = null === (s = (n = this.kl).autoscaleInfo) || void 0 === s ? void 0 : s.call(n, t, i)) && void 0 !== e ? e : null
        }
        pr(t, i) {
            var n, s, e;
            return null !== (e = null === (s = (n = this.kl).hitTest) || void 0 === s ? void 0 : s.call(n, t, i)) && void 0 !== e ? e : null
        }
    }

    function ji(t, i, n, s) {
        t.forEach((t => {
            i(t).forEach((t => {
                t.ml() === n && s.push(t)
            }))
        }))
    }

    function Hi(t) {
        return t.Cn()
    }

    function $i(t) {
        return t.Tl()
    }

    function Ui(t) {
        return t.Pl()
    }
    class qi extends Ri {
        constructor(t, i, n, s, e) {
            super(t), this.Et = new Vi, this.Eh = new Mi(this), this.Dl = [], this.Ol = new si(this), this.Al = null, this.Bl = null, this.Vl = [], this.zl = [], this.El = null, this.Il = [], this._n = i, this.Ll = n;
            const r = new xi(this);
            this.en = [r], this.Ih = new ti(r, this, t), "Area" !== n && "Line" !== n && "Baseline" !== n || (this.Al = new ai(this)), this.Nl(), this.Fl(e)
        }
        S() {
            null !== this.El && clearTimeout(this.El)
        }
        oh(t) {
            return this._n.priceLineColor || t
        }
        Ur(t) {
            const i = {
                qr: !0
            },
                n = this.Dt();
            if (this.$t().St().Li() || n.Li() || this.Et.Li()) return i;
            const s = this.$t().St().qs(),
                e = this.Ct();
            if (null === s || null === e) return i;
            let r, h;
            if (t) {
                const t = this.Et.Gh();
                if (null === t) return i;
                r = t, h = t.ie
            } else {
                const t = this.Et.il(s.ui(), -1);
                if (null === t) return i;
                if (r = this.Et.Uh(t.ie), null === r) return i;
                h = t.ie
            }
            const l = r.Ot[3],
                a = this.js().Ws(h, {
                    Ot: r
                }),
                o = n.Rt(l, e.Ot);
            return {
                qr: !1,
                _t: l,
                Zt: n.Ni(l, e.Ot),
                ph: n.Wl(l),
                mh: n.jl(l, e.Ot),
                O: a.oe,
                Si: o,
                ie: h
            }
        }
        js() {
            return null !== this.Bl || (this.Bl = new Oi(this)), this.Bl
        }
        W() {
            return this._n
        }
        Lh(t) {
            const i = t.priceScaleId;
            void 0 !== i && i !== this._n.priceScaleId && this.$t().Hl(this, i), C(this._n, t), void 0 !== t.priceFormat && (this.Nl(), this.$t().$l()), this.$t().Ul(this), this.$t().ql(), this.mn.bt("options")
        }
        J(t, i) {
            this.Et.J(t), this.Yl(), this.mn.bt("data"), this.un.bt("data"), null !== this.Al && (i && i.Xl ? this.Al.Wr() : 0 === t.length && this.Al.Fr());
            const n = this.$t()._r(this);
            this.$t().Kl(n), this.$t().Ul(this), this.$t().ql(), this.$t().Nh()
        }
        Zl(t) {
            this.Vl = t, this.Yl();
            const i = this.$t()._r(this);
            this.un.bt("data"), this.$t().Kl(i), this.$t().Ul(this), this.$t().ql(), this.$t().Nh()
        }
        Gl() {
            return this.Vl
        }
        lh() {
            return this.zl
        }
        Jl(t) {
            const i = new Pi(this, t);
            return this.Dl.push(i), this.$t().Ul(this), i
        }
        Ql(t) {
            const i = this.Dl.indexOf(t); - 1 !== i && this.Dl.splice(i, 1), this.$t().Ul(this)
        }
        Yh() {
            return this.Ll
        }
        Ct() {
            const t = this.ta();
            return null === t ? null : {
                Ot: t.Ot[3],
                ia: t.ot
            }
        }
        ta() {
            const t = this.$t().St().qs();
            if (null === t) return null;
            const i = t.Rs();
            return this.Et.il(i, 1)
        }
        Bn() {
            return this.Et
        }
        ah(t) {
            const i = this.Et.Uh(t);
            return null === i ? null : "Bar" === this.Ll || "Candlestick" === this.Ll || "Custom" === this.Ll ? {
                me: i.Ot[0],
                be: i.Ot[1],
                we: i.Ot[2],
                ge: i.Ot[3]
            } : i.Ot[3]
        }
        na(t) {
            const i = [];
            ji(this.Il, Hi, "top", i);
            const n = this.Al;
            return null !== n && n.kt() ? (null === this.El && n.Hr() && (this.El = setTimeout((() => {
                this.El = null, this.$t().sa()
            }), 0)), n.jr(), i.push(n), i) : i
        }
        Cn() {
            const t = [];
            this.ea() || t.push(this.Ol), t.push(this.mn, this.Eh, this.un);
            const i = this.Dl.map((t => t.Fh()));
            return t.push(...i), ji(this.Il, Hi, "normal", t), t
        }
        ra() {
            return this.ha(Hi, "bottom")
        }
        la(t) {
            return this.ha($i, t)
        }
        aa(t) {
            return this.ha(Ui, t)
        }
        oa(t, i) {
            return this.Il.map((n => n.pr(t, i))).filter((t => null !== t))
        }
        Gi(t) {
            return [this.Ih, ...this.Dl.map((t => t.Wh()))]
        }
        Tn(t, i) {
            if (i !== this.qi && !this.ea()) return [];
            const n = [...this.en];
            for (const t of this.Dl) n.push(t.jh());
            return this.Il.forEach((t => {
                n.push(...t.Tn())
            })), n
        }
        Ji() {
            const t = [];
            return this.Il.forEach((i => {
                t.push(...i.Ji())
            })), t
        }
        Rl(t, i) {
            if (void 0 !== this._n.autoscaleInfoProvider) {
                const n = this._n.autoscaleInfoProvider((() => {
                    const n = this._a(t, i);
                    return null === n ? null : n.Th()
                }));
                return ki.Ph(n)
            }
            return this._a(t, i)
        }
        ua() {
            return this._n.priceFormat.minMove
        }
        ca() {
            return this.da
        }
        Rn() {
            var t;
            this.mn.bt(), this.un.bt();
            for (const t of this.en) t.bt();
            for (const t of this.Dl) t.bt();
            this.Eh.bt(), this.Ol.bt(), null === (t = this.Al) || void 0 === t || t.bt(), this.Il.forEach((t => t.Rn()))
        }
        Dt() {
            return f(super.Dt())
        }
        yt(t) {
            if (!(("Line" === this.Ll || "Area" === this.Ll || "Baseline" === this.Ll) && this._n.crosshairMarkerVisible)) return null;
            const i = this.Et.Uh(t);
            if (null === i) return null;
            return {
                _t: i.Ot[3],
                ht: this.fa(),
                At: this.va(),
                Pt: this.pa(),
                Tt: this.ma(t)
            }
        }
        _h() {
            return this._n.title
        }
        kt() {
            return this._n.visible
        }
        ba(t) {
            this.Il.push(new Wi(t, this))
        }
        wa(t) {
            this.Il = this.Il.filter((i => i.Cl() !== t))
        }
        ga() {
            if (this.mn instanceof qt != !1) return t => this.mn.Le(t)
        }
        Ma() {
            if (this.mn instanceof qt != !1) return t => this.mn.Ne(t)
        }
        ea() {
            return !ht(this.Dt().xa())
        }
        _a(t, i) {
            if (!P(t) || !P(i) || this.Et.Li()) return null;
            const n = "Line" === this.Ll || "Area" === this.Ll || "Baseline" === this.Ll || "Histogram" === this.Ll ? [3] : [2, 1],
                s = this.Et.sl(t, i, n);
            let e = null !== s ? new yi(s.ul, s.cl) : null;
            if ("Histogram" === this.Yh()) {
                const t = this._n.base,
                    i = new yi(t, t);
                e = null !== e ? e.Jn(i) : i
            }
            let r = this.un.hh();
            return this.Il.forEach((n => {
                const s = n.Rl(t, i);
                if (null == s ? void 0 : s.priceRange) {
                    const t = new yi(s.priceRange.minValue, s.priceRange.maxValue);
                    e = null !== e ? e.Jn(t) : t
                }
                var h, l, a, o;
                (null == s ? void 0 : s.margins) && (h = r, l = s.margins, r = {
                    above: Math.max(null !== (a = null == h ? void 0 : h.above) && void 0 !== a ? a : 0, l.above),
                    below: Math.max(null !== (o = null == h ? void 0 : h.below) && void 0 !== o ? o : 0, l.below)
                })
            })), new ki(e, r)
        }
        fa() {
            switch (this.Ll) {
                case "Line":
                case "Area":
                case "Baseline":
                    return this._n.crosshairMarkerRadius
            }
            return 0
        }
        va() {
            switch (this.Ll) {
                case "Line":
                case "Area":
                case "Baseline": {
                    const t = this._n.crosshairMarkerBorderColor;
                    if (0 !== t.length) return t
                }
            }
            return null
        }
        pa() {
            switch (this.Ll) {
                case "Line":
                case "Area":
                case "Baseline":
                    return this._n.crosshairMarkerBorderWidth
            }
            return 0
        }
        ma(t) {
            switch (this.Ll) {
                case "Line":
                case "Area":
                case "Baseline": {
                    const t = this._n.crosshairMarkerBackgroundColor;
                    if (0 !== t.length) return t
                }
            }
            return this.js().Ws(t).oe
        }
        Nl() {
            switch (this._n.priceFormat.type) {
                case "custom":
                    this.da = {
                        format: this._n.priceFormat.formatter
                    };
                    break;
                case "volume":
                    this.da = new ct(this._n.priceFormat.precision);
                    break;
                case "percent":
                    this.da = new ut(this._n.priceFormat.precision);
                    break;
                default: {
                    const t = Math.pow(10, this._n.priceFormat.precision);
                    this.da = new _t(t, this._n.priceFormat.minMove * t)
                }
            }
            null !== this.qi && this.qi.Sa()
        }
        Yl() {
            const t = this.$t().St();
            if (!t.ya() || this.Et.Li()) return void (this.zl = []);
            const i = f(this.Et.Jh());
            this.zl = this.Vl.map(((n, s) => {
                const e = f(t.ka(n.time, !0)),
                    r = e < i ? 1 : -1;
                return {
                    time: f(this.Et.il(e, r)).ie,
                    position: n.position,
                    shape: n.shape,
                    color: n.color,
                    id: n.id,
                    Gr: s,
                    text: n.text,
                    size: n.size,
                    originalTime: n.originalTime
                }
            }))
        }
        Fl(t) {
            switch (this.un = new gi(this, this.$t()), this.Ll) {
                case "Bar":
                    this.mn = new Nt(this, this.$t());
                    break;
                case "Candlestick":
                    this.mn = new $t(this, this.$t());
                    break;
                case "Line":
                    this.mn = new Zt(this, this.$t());
                    break;
                case "Custom":
                    this.mn = new qt(this, this.$t(), d(t));
                    break;
                case "Area":
                    this.mn = new Et(this, this.$t());
                    break;
                case "Baseline":
                    this.mn = new jt(this, this.$t());
                    break;
                case "Histogram":
                    this.mn = new Kt(this, this.$t());
                    break;
                default:
                    throw Error("Unknown chart style assigned: " + this.Ll)
            }
        }
        ha(t, i) {
            const n = [];
            return ji(this.Il, t, i, n), n
        }
    }
    class Yi {
        constructor(t) {
            this._n = t
        }
        Ca(t, i, n) {
            let s = t;
            if (0 === this._n.mode) return s;
            const e = n.dn(),
                r = e.Ct();
            if (null === r) return s;
            const h = e.Rt(t, r),
                l = n.Ta().filter((t => t instanceof qi)).reduce(((t, s) => {
                    if (n.ur(s) || !s.kt()) return t;
                    const e = s.Dt(),
                        r = s.Bn();
                    if (e.Li() || !r.Yr(i)) return t;
                    const h = r.Uh(i);
                    if (null === h) return t;
                    const l = v(s.Ct());
                    return t.concat([e.Rt(h.Ot[3], l.Ot)])
                }), []);
            if (0 === l.length) return s;
            l.sort(((t, i) => Math.abs(t - h) - Math.abs(i - h)));
            const a = l[0];
            return s = e.fn(a, r), s
        }
    }
    class Xi extends L {
        constructor() {
            super(...arguments), this.Et = null
        }
        J(t) {
            this.Et = t
        }
        Z({
            context: t,
            bitmapSize: i,
            horizontalPixelRatio: n,
            verticalPixelRatio: s
        }) {
            if (null === this.Et) return;
            const e = Math.max(1, Math.floor(n));
            t.lineWidth = e,
                function (t, i) {
                    t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore()
                }(t, (() => {
                    const r = f(this.Et);
                    if (r.Pa) {
                        t.strokeStyle = r.Ra, _(t, r.Da), t.beginPath();
                        for (const s of r.Oa) {
                            const r = Math.round(s.Aa * n);
                            t.moveTo(r, -e), t.lineTo(r, i.height + e)
                        }
                        t.stroke()
                    }
                    if (r.Ba) {
                        t.strokeStyle = r.Va, _(t, r.za), t.beginPath();
                        for (const n of r.Ea) {
                            const r = Math.round(n.Aa * s);
                            t.moveTo(-e, r), t.lineTo(i.width + e, r)
                        }
                        t.stroke()
                    }
                }))
        }
    }
    class Ki {
        constructor(t) {
            this.Wt = new Xi, this.ft = !0, this.Qi = t
        }
        bt() {
            this.ft = !0
        }
        gt() {
            if (this.ft) {
                const t = this.Qi.$t().W().grid,
                    i = {
                        Ba: t.horzLines.visible,
                        Pa: t.vertLines.visible,
                        Va: t.horzLines.color,
                        Ra: t.vertLines.color,
                        za: t.horzLines.style,
                        Da: t.vertLines.style,
                        Ea: this.Qi.dn().Ia(),
                        Oa: (this.Qi.$t().St().Ia() || []).map((t => ({
                            Aa: t.coord
                        })))
                    };
                this.Wt.J(i), this.ft = !1
            }
            return this.Wt
        }
    }
    class Zi {
        constructor(t) {
            this.mn = new Ki(t)
        }
        Fh() {
            return this.mn
        }
    }
    const Gi = {
        La: 4,
        Na: 1e-4
    };

    function Ji(t, i) {
        const n = 100 * (t - i) / i;
        return i < 0 ? -n : n
    }

    function Qi(t, i) {
        const n = Ji(t.xh(), i),
            s = Ji(t.Sh(), i);
        return new yi(n, s)
    }

    function tn(t, i) {
        const n = 100 * (t - i) / i + 100;
        return i < 0 ? -n : n
    }

    function nn(t, i) {
        const n = tn(t.xh(), i),
            s = tn(t.Sh(), i);
        return new yi(n, s)
    }

    function sn(t, i) {
        const n = Math.abs(t);
        if (n < 1e-15) return 0;
        const s = Math.log10(n + i.Na) + i.La;
        return t < 0 ? -s : s
    }

    function en(t, i) {
        const n = Math.abs(t);
        if (n < 1e-15) return 0;
        const s = Math.pow(10, n - i.La) - i.Na;
        return t < 0 ? -s : s
    }

    function rn(t, i) {
        if (null === t) return null;
        const n = sn(t.xh(), i),
            s = sn(t.Sh(), i);
        return new yi(n, s)
    }

    function hn(t, i) {
        if (null === t) return null;
        const n = en(t.xh(), i),
            s = en(t.Sh(), i);
        return new yi(n, s)
    }

    function ln(t) {
        if (null === t) return Gi;
        const i = Math.abs(t.Sh() - t.xh());
        if (i >= 1 || i < 1e-15) return Gi;
        const n = Math.ceil(Math.abs(Math.log10(i))),
            s = Gi.La + n;
        return {
            La: s,
            Na: 1 / Math.pow(10, s)
        }
    }
    class an {
        constructor(t, i) {
            if (this.Fa = t, this.Wa = i, function (t) {
                if (t < 0) return !1;
                for (let i = t; i > 1; i /= 10)
                    if (i % 10 != 0) return !1;
                return !0
            }(this.Fa)) this.ja = [2, 2.5, 2];
            else {
                this.ja = [];
                for (let t = this.Fa; 1 !== t;) {
                    if (t % 2 == 0) this.ja.push(2), t /= 2;
                    else {
                        if (t % 5 != 0) throw new Error("unexpected base");
                        this.ja.push(2, 2.5), t /= 5
                    }
                    if (this.ja.length > 100) throw new Error("something wrong with base")
                }
            }
        }
        Ha(t, i, n) {
            const s = 0 === this.Fa ? 0 : 1 / this.Fa;
            let e = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))),
                r = 0,
                h = this.Wa[0];
            for (; ;) {
                const t = Mt(e, s, 1e-14) && e > s + 1e-14,
                    i = Mt(e, n * h, 1e-14),
                    l = Mt(e, 1, 1e-14);
                if (!(t && i && l)) break;
                e /= h, h = this.Wa[++r % this.Wa.length]
            }
            if (e <= s + 1e-14 && (e = s), e = Math.max(1, e), this.ja.length > 0 && (l = e, a = 1, o = 1e-14, Math.abs(l - a) < o))
                for (r = 0, h = this.ja[0]; Mt(e, n * h, 1e-14) && e > s + 1e-14;) e /= h, h = this.ja[++r % this.ja.length];
            var l, a, o;
            return e
        }
    }
    class on {
        constructor(t, i, n, s) {
            this.$a = [], this.Ei = t, this.Fa = i, this.Ua = n, this.qa = s
        }
        Ha(t, i) {
            if (t < i) throw new Error("high < low");
            const n = this.Ei.Vt(),
                s = (t - i) * this.Ya() / n,
                e = new an(this.Fa, [2, 2.5, 2]),
                r = new an(this.Fa, [2, 2, 2.5]),
                h = new an(this.Fa, [2.5, 2, 2]),
                l = [];
            return l.push(e.Ha(t, i, s), r.Ha(t, i, s), h.Ha(t, i, s)),
                function (t) {
                    if (t.length < 1) throw Error("array is empty");
                    let i = t[0];
                    for (let n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
                    return i
                }(l)
        }
        Xa() {
            const t = this.Ei,
                i = t.Ct();
            if (null === i) return void (this.$a = []);
            const n = t.Vt(),
                s = this.Ua(n - 1, i),
                e = this.Ua(0, i),
                r = this.Ei.W().entireTextOnly ? this.Ka() / 2 : 0,
                h = r,
                l = n - 1 - r,
                a = Math.max(s, e),
                o = Math.min(s, e);
            if (a === o) return void (this.$a = []);
            let _ = this.Ha(a, o),
                u = a % _;
            u += u < 0 ? _ : 0;
            const c = a >= o ? 1 : -1;
            let d = null,
                f = 0;
            for (let n = a - u; n > o; n -= _) {
                const s = this.qa(n, i, !0);
                null !== d && Math.abs(s - d) < this.Ya() || (s < h || s > l || (f < this.$a.length ? (this.$a[f].Aa = s, this.$a[f].Za = t.Ga(n)) : this.$a.push({
                    Aa: s,
                    Za: t.Ga(n)
                }), f++, d = s, t.Ja() && (_ = this.Ha(n * c, o))))
            }
            this.$a.length = f
        }
        Ia() {
            return this.$a
        }
        Ka() {
            return this.Ei.P()
        }
        Ya() {
            return Math.ceil(2.5 * this.Ka())
        }
    }

    function _n(t) {
        return t.slice().sort(((t, i) => f(t.Xi()) - f(i.Xi())))
    }
    var un;
    ! function (t) {
        t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100"
    }(un || (un = {}));
    const cn = new ut,
        dn = new _t(100, 1);
    class fn {
        constructor(t, i, n, s) {
            this.Qa = 0, this.io = null, this.Rh = null, this.no = null, this.so = {
                eo: !1,
                ro: null
            }, this.ho = 0, this.lo = 0, this.ao = new k, this.oo = new k, this._o = [], this.uo = null, this.co = null, this.do = null, this.fo = null, this.da = dn, this.vo = ln(null), this.po = t, this._n = i, this.mo = n, this.bo = s, this.wo = new on(this, 100, this.Mo.bind(this), this.xo.bind(this))
        }
        xa() {
            return this.po
        }
        W() {
            return this._n
        }
        Lh(t) {
            if (C(this._n, t), this.Sa(), void 0 !== t.mode && this.So({
                Sr: t.mode
            }), void 0 !== t.scaleMargins) {
                const i = d(t.scaleMargins.top),
                    n = d(t.scaleMargins.bottom);
                if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
                if (n < 0 || n > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);
                if (i + n > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i + n}`);
                this.yo(), this.co = null
            }
        }
        ko() {
            return this._n.autoScale
        }
        Ja() {
            return 1 === this._n.mode
        }
        fh() {
            return 2 === this._n.mode
        }
        Co() {
            return 3 === this._n.mode
        }
        Sr() {
            return {
                Nn: this._n.autoScale,
                To: this._n.invertScale,
                Sr: this._n.mode
            }
        }
        So(t) {
            const i = this.Sr();
            let n = null;
            void 0 !== t.Nn && (this._n.autoScale = t.Nn), void 0 !== t.Sr && (this._n.mode = t.Sr, 2 !== t.Sr && 3 !== t.Sr || (this._n.autoScale = !0), this.so.eo = !1), 1 === i.Sr && t.Sr !== i.Sr && (! function (t, i) {
                if (null === t) return !1;
                const n = en(t.xh(), i),
                    s = en(t.Sh(), i);
                return isFinite(n) && isFinite(s)
            }(this.Rh, this.vo) ? this._n.autoScale = !0 : (n = hn(this.Rh, this.vo), null !== n && this.Po(n))), 1 === t.Sr && t.Sr !== i.Sr && (n = rn(this.Rh, this.vo), null !== n && this.Po(n));
            const s = i.Sr !== this._n.mode;
            s && (2 === i.Sr || this.fh()) && this.Sa(), s && (3 === i.Sr || this.Co()) && this.Sa(), void 0 !== t.To && i.To !== t.To && (this._n.invertScale = t.To, this.Ro()), this.oo.m(i, this.Sr())
        }
        Do() {
            return this.oo
        }
        P() {
            return this.mo.fontSize
        }
        Vt() {
            return this.Qa
        }
        Oo(t) {
            this.Qa !== t && (this.Qa = t, this.yo(), this.co = null)
        }
        Ao() {
            if (this.io) return this.io;
            const t = this.Vt() - this.Bo() - this.Vo();
            return this.io = t, t
        }
        Oh() {
            return this.zo(), this.Rh
        }
        Po(t, i) {
            const n = this.Rh;
            (i || null === n && null !== t || null !== n && !n.gh(t)) && (this.co = null, this.Rh = t)
        }
        Li() {
            return this.zo(), 0 === this.Qa || !this.Rh || this.Rh.Li()
        }
        Eo(t) {
            return this.To() ? t : this.Vt() - 1 - t
        }
        Rt(t, i) {
            return this.fh() ? t = Ji(t, i) : this.Co() && (t = tn(t, i)), this.xo(t, i)
        }
        Gs(t, i, n) {
            this.zo();
            const s = this.Vo(),
                e = f(this.Oh()),
                r = e.xh(),
                h = e.Sh(),
                l = this.Ao() - 1,
                a = this.To(),
                o = l / (h - r),
                _ = void 0 === n ? 0 : n.from,
                u = void 0 === n ? t.length : n.to,
                c = this.Io();
            for (let n = _; n < u; n++) {
                const e = t[n],
                    h = e._t;
                if (isNaN(h)) continue;
                let l = h;
                null !== c && (l = c(e._t, i));
                const _ = s + o * (l - r),
                    u = a ? _ : this.Qa - 1 - _;
                e.st = u
            }
        }
        ve(t, i, n) {
            this.zo();
            const s = this.Vo(),
                e = f(this.Oh()),
                r = e.xh(),
                h = e.Sh(),
                l = this.Ao() - 1,
                a = this.To(),
                o = l / (h - r),
                _ = void 0 === n ? 0 : n.from,
                u = void 0 === n ? t.length : n.to,
                c = this.Io();
            for (let n = _; n < u; n++) {
                const e = t[n];
                let h = e.me,
                    l = e.be,
                    _ = e.we,
                    u = e.ge;
                null !== c && (h = c(e.me, i), l = c(e.be, i), _ = c(e.we, i), u = c(e.ge, i));
                let d = s + o * (h - r),
                    f = a ? d : this.Qa - 1 - d;
                e.de = f, d = s + o * (l - r), f = a ? d : this.Qa - 1 - d, e._e = f, d = s + o * (_ - r), f = a ? d : this.Qa - 1 - d, e.ue = f, d = s + o * (u - r), f = a ? d : this.Qa - 1 - d, e.fe = f
            }
        }
        fn(t, i) {
            const n = this.Mo(t, i);
            return this.Lo(n, i)
        }
        Lo(t, i) {
            let n = t;
            return this.fh() ? n = function (t, i) {
                return i < 0 && (t = -t), t / 100 * i + i
            }(n, i) : this.Co() && (n = function (t, i) {
                return t -= 100, i < 0 && (t = -t), t / 100 * i + i
            }(n, i)), n
        }
        Ta() {
            return this._o
        }
        No() {
            if (this.uo) return this.uo;
            let t = [];
            for (let i = 0; i < this._o.length; i++) {
                const n = this._o[i];
                null === n.Xi() && n.Ki(i + 1), t.push(n)
            }
            return t = _n(t), this.uo = t, this.uo
        }
        Fo(t) {
            -1 === this._o.indexOf(t) && (this._o.push(t), this.Sa(), this.Wo())
        }
        jo(t) {
            const i = this._o.indexOf(t);
            if (-1 === i) throw new Error("source is not attached to scale");
            this._o.splice(i, 1), 0 === this._o.length && (this.So({
                Nn: !0
            }), this.Po(null)), this.Sa(), this.Wo()
        }
        Ct() {
            let t = null;
            for (const i of this._o) {
                const n = i.Ct();
                null !== n && ((null === t || n.ia < t.ia) && (t = n))
            }
            return null === t ? null : t.Ot
        }
        To() {
            return this._n.invertScale
        }
        Ia() {
            const t = null === this.Ct();
            if (null !== this.co && (t || this.co.Ho === t)) return this.co.Ia;
            this.wo.Xa();
            const i = this.wo.Ia();
            return this.co = {
                Ia: i,
                Ho: t
            }, this.ao.m(), i
        }
        $o() {
            return this.ao
        }
        Uo(t) {
            this.fh() || this.Co() || null === this.do && null === this.no && (this.Li() || (this.do = this.Qa - t, this.no = f(this.Oh()).Mh()))
        }
        qo(t) {
            if (this.fh() || this.Co()) return;
            if (null === this.do) return;
            this.So({
                Nn: !1
            }), (t = this.Qa - t) < 0 && (t = 0);
            let i = (this.do + .2 * (this.Qa - 1)) / (t + .2 * (this.Qa - 1));
            const n = f(this.no).Mh();
            i = Math.max(i, .1), n.kh(i), this.Po(n)
        }
        Yo() {
            this.fh() || this.Co() || (this.do = null, this.no = null)
        }
        Xo(t) {
            this.ko() || null === this.fo && null === this.no && (this.Li() || (this.fo = t, this.no = f(this.Oh()).Mh()))
        }
        Ko(t) {
            if (this.ko()) return;
            if (null === this.fo) return;
            const i = f(this.Oh()).yh() / (this.Ao() - 1);
            let n = t - this.fo;
            this.To() && (n *= -1);
            const s = n * i,
                e = f(this.no).Mh();
            e.Ch(s), this.Po(e, !0), this.co = null
        }
        Zo() {
            this.ko() || null !== this.fo && (this.fo = null, this.no = null)
        }
        ca() {
            return this.da || this.Sa(), this.da
        }
        Ni(t, i) {
            switch (this._n.mode) {
                case 2:
                    return this.Go(Ji(t, i));
                case 3:
                    return this.ca().format(tn(t, i));
                default:
                    return this.zh(t)
            }
        }
        Ga(t) {
            switch (this._n.mode) {
                case 2:
                    return this.Go(t);
                case 3:
                    return this.ca().format(t);
                default:
                    return this.zh(t)
            }
        }
        Wl(t) {
            return this.zh(t, f(this.Jo()).ca())
        }
        jl(t, i) {
            return t = Ji(t, i), this.Go(t, cn)
        }
        Qo() {
            return this._o
        }
        t_(t) {
            this.so = {
                ro: t,
                eo: !1
            }
        }
        Rn() {
            this._o.forEach((t => t.Rn()))
        }
        Sa() {
            this.co = null;
            const t = this.Jo();
            let i = 100;
            null !== t && (i = Math.round(1 / t.ua())), this.da = dn, this.fh() ? (this.da = cn, i = 100) : this.Co() ? (this.da = new _t(100, 1), i = 100) : null !== t && (this.da = t.ca()), this.wo = new on(this, i, this.Mo.bind(this), this.xo.bind(this)), this.wo.Xa()
        }
        Wo() {
            this.uo = null
        }
        Jo() {
            return this._o[0] || null
        }
        Bo() {
            return this.To() ? this._n.scaleMargins.bottom * this.Vt() + this.lo : this._n.scaleMargins.top * this.Vt() + this.ho
        }
        Vo() {
            return this.To() ? this._n.scaleMargins.top * this.Vt() + this.ho : this._n.scaleMargins.bottom * this.Vt() + this.lo
        }
        zo() {
            this.so.eo || (this.so.eo = !0, this.i_())
        }
        yo() {
            this.io = null
        }
        xo(t, i) {
            if (this.zo(), this.Li()) return 0;
            t = this.Ja() && t ? sn(t, this.vo) : t;
            const n = f(this.Oh()),
                s = this.Vo() + (this.Ao() - 1) * (t - n.xh()) / n.yh();
            return this.Eo(s)
        }
        Mo(t, i) {
            if (this.zo(), this.Li()) return 0;
            const n = this.Eo(t),
                s = f(this.Oh()),
                e = s.xh() + s.yh() * ((n - this.Vo()) / (this.Ao() - 1));
            return this.Ja() ? en(e, this.vo) : e
        }
        Ro() {
            this.co = null, this.wo.Xa()
        }
        i_() {
            const t = this.so.ro;
            if (null === t) return;
            let i = null;
            const n = this.Qo();
            let s = 0,
                e = 0;
            for (const r of n) {
                if (!r.kt()) continue;
                const n = r.Ct();
                if (null === n) continue;
                const h = r.Rl(t.Rs(), t.ui());
                let l = h && h.Oh();
                if (null !== l) {
                    switch (this._n.mode) {
                        case 1:
                            l = rn(l, this.vo);
                            break;
                        case 2:
                            l = Qi(l, n.Ot);
                            break;
                        case 3:
                            l = nn(l, n.Ot)
                    }
                    if (i = null === i ? l : i.Jn(f(l)), null !== h) {
                        const t = h.Ah();
                        null !== t && (s = Math.max(s, t.above), e = Math.max(s, t.below))
                    }
                }
            }
            if (s === this.ho && e === this.lo || (this.ho = s, this.lo = e, this.co = null, this.yo()), null !== i) {
                if (i.xh() === i.Sh()) {
                    const t = this.Jo(),
                        n = 5 * (null === t || this.fh() || this.Co() ? 1 : t.ua());
                    this.Ja() && (i = hn(i, this.vo)), i = new yi(i.xh() - n, i.Sh() + n), this.Ja() && (i = rn(i, this.vo))
                }
                if (this.Ja()) {
                    const t = hn(i, this.vo),
                        n = ln(t);
                    if (r = n, h = this.vo, r.La !== h.La || r.Na !== h.Na) {
                        const s = null !== this.no ? hn(this.no, this.vo) : null;
                        this.vo = n, i = rn(t, n), null !== s && (this.no = rn(s, n))
                    }
                }
                this.Po(i)
            } else null === this.Rh && (this.Po(new yi(-.5, .5)), this.vo = ln(null));
            var r, h;
            this.so.eo = !0
        }
        Io() {
            return this.fh() ? Ji : this.Co() ? tn : this.Ja() ? t => sn(t, this.vo) : null
        }
        n_(t, i, n) {
            return void 0 === i ? (void 0 === n && (n = this.ca()), n.format(t)) : i(t)
        }
        zh(t, i) {
            return this.n_(t, this.bo.priceFormatter, i)
        }
        Go(t, i) {
            return this.n_(t, this.bo.percentageFormatter, i)
        }
    }
    class vn {
        constructor(t, i) {
            this._o = [], this.s_ = new Map, this.Qa = 0, this.e_ = 0, this.r_ = 1e3, this.uo = null, this.h_ = new k, this.wl = t, this.Hi = i, this.l_ = new Zi(this);
            const n = i.W();
            this.a_ = this.o_("left", n.leftPriceScale), this.__ = this.o_("right", n.rightPriceScale), this.a_.Do().l(this.u_.bind(this, this.a_), this), this.__.Do().l(this.u_.bind(this, this.__), this), this.c_(n)
        }
        c_(t) {
            if (t.leftPriceScale && this.a_.Lh(t.leftPriceScale), t.rightPriceScale && this.__.Lh(t.rightPriceScale), t.localization && (this.a_.Sa(), this.__.Sa()), t.overlayPriceScales) {
                const i = Array.from(this.s_.values());
                for (const n of i) {
                    const i = f(n[0].Dt());
                    i.Lh(t.overlayPriceScales), t.localization && i.Sa()
                }
            }
        }
        d_(t) {
            switch (t) {
                case "left":
                    return this.a_;
                case "right":
                    return this.__
            }
            return this.s_.has(t) ? d(this.s_.get(t))[0].Dt() : null
        }
        S() {
            this.$t().f_().p(this), this.a_.Do().p(this), this.__.Do().p(this), this._o.forEach((t => {
                t.S && t.S()
            })), this.h_.m()
        }
        v_() {
            return this.r_
        }
        p_(t) {
            this.r_ = t
        }
        $t() {
            return this.Hi
        }
        ji() {
            return this.e_
        }
        Vt() {
            return this.Qa
        }
        m_(t) {
            this.e_ = t, this.b_()
        }
        Oo(t) {
            this.Qa = t, this.a_.Oo(t), this.__.Oo(t), this._o.forEach((i => {
                if (this.ur(i)) {
                    const n = i.Dt();
                    null !== n && n.Oo(t)
                }
            })), this.b_()
        }
        Ta() {
            return this._o
        }
        ur(t) {
            const i = t.Dt();
            return null === i || this.a_ !== i && this.__ !== i
        }
        Fo(t, i, n) {
            const s = void 0 !== n ? n : this.g_().w_ + 1;
            this.M_(t, i, s)
        }
        jo(t) {
            const i = this._o.indexOf(t);
            c(-1 !== i, "removeDataSource: invalid data source"), this._o.splice(i, 1);
            const n = f(t.Dt()).xa();
            if (this.s_.has(n)) {
                const i = d(this.s_.get(n)),
                    s = i.indexOf(t); - 1 !== s && (i.splice(s, 1), 0 === i.length && this.s_.delete(n))
            }
            const s = t.Dt();
            s && s.Ta().indexOf(t) >= 0 && s.jo(t), null !== s && (s.Wo(), this.x_(s)), this.uo = null
        }
        dr(t) {
            return t === this.a_ ? "left" : t === this.__ ? "right" : "overlay"
        }
        S_() {
            return this.a_
        }
        y_() {
            return this.__
        }
        k_(t, i) {
            t.Uo(i)
        }
        C_(t, i) {
            t.qo(i), this.b_()
        }
        T_(t) {
            t.Yo()
        }
        P_(t, i) {
            t.Xo(i)
        }
        R_(t, i) {
            t.Ko(i), this.b_()
        }
        D_(t) {
            t.Zo()
        }
        b_() {
            this._o.forEach((t => {
                t.Rn()
            }))
        }
        dn() {
            let t = null;
            return this.Hi.W().rightPriceScale.visible && 0 !== this.__.Ta().length ? t = this.__ : this.Hi.W().leftPriceScale.visible && 0 !== this.a_.Ta().length ? t = this.a_ : 0 !== this._o.length && (t = this._o[0].Dt()), null === t && (t = this.__), t
        }
        cr() {
            let t = null;
            return this.Hi.W().rightPriceScale.visible ? t = this.__ : this.Hi.W().leftPriceScale.visible && (t = this.a_), t
        }
        x_(t) {
            null !== t && t.ko() && this.O_(t)
        }
        A_(t) {
            const i = this.wl.qs();
            t.So({
                Nn: !0
            }), null !== i && t.t_(i), this.b_()
        }
        B_() {
            this.O_(this.a_), this.O_(this.__)
        }
        V_() {
            this.x_(this.a_), this.x_(this.__), this._o.forEach((t => {
                this.ur(t) && this.x_(t.Dt())
            })), this.b_(), this.Hi.Nh()
        }
        No() {
            return null === this.uo && (this.uo = _n(this._o)), this.uo
        }
        z_() {
            return this.h_
        }
        E_() {
            return this.l_
        }
        O_(t) {
            const i = t.Qo();
            if (i && i.length > 0 && !this.wl.Li()) {
                const i = this.wl.qs();
                null !== i && t.t_(i)
            }
            t.Rn()
        }
        g_() {
            const t = this.No();
            if (0 === t.length) return {
                I_: 0,
                w_: 0
            };
            let i = 0,
                n = 0;
            for (let s = 0; s < t.length; s++) {
                const e = t[s].Xi();
                null !== e && (e < i && (i = e), e > n && (n = e))
            }
            return {
                I_: i,
                w_: n
            }
        }
        M_(t, i, n) {
            let s = this.d_(i);
            if (null === s && (s = this.o_(i, this.Hi.W().overlayPriceScales)), this._o.push(t), !ht(i)) {
                const n = this.s_.get(i) || [];
                n.push(t), this.s_.set(i, n)
            }
            s.Fo(t), t.Zi(s), t.Ki(n), this.x_(s), this.uo = null
        }
        u_(t, i, n) {
            i.Sr !== n.Sr && this.O_(t)
        }
        o_(t, i) {
            const n = Object.assign({
                visible: !0,
                autoScale: !0
            }, O(i)),
                s = new fn(t, n, this.Hi.W().layout, this.Hi.W().localization);
            return s.Oo(this.Vt()), s
        }
    }
    class pn {
        constructor(t, i, n = 50) {
            this.Ye = 0, this.Xe = 1, this.Ke = 1, this.Ge = new Map, this.Ze = new Map, this.L_ = t, this.N_ = i, this.Je = n
        }
        F_(t) {
            const i = t.time,
                n = this.N_.cacheKey(i),
                s = this.Ge.get(n);
            if (void 0 !== s) return s.W_;
            if (this.Ye === this.Je) {
                const t = this.Ze.get(this.Ke);
                this.Ze.delete(this.Ke), this.Ge.delete(d(t)), this.Ke++, this.Ye--
            }
            const e = this.L_(t);
            return this.Ge.set(n, {
                W_: e,
                nr: this.Xe
            }), this.Ze.set(this.Xe, n), this.Ye++, this.Xe++, e
        }
    }
    class mn {
        constructor(t, i) {
            c(t <= i, "right should be >= left"), this.j_ = t, this.H_ = i
        }
        Rs() {
            return this.j_
        }
        ui() {
            return this.H_
        }
        U_() {
            return this.H_ - this.j_ + 1
        }
        Yr(t) {
            return this.j_ <= t && t <= this.H_
        }
        gh(t) {
            return this.j_ === t.Rs() && this.H_ === t.ui()
        }
    }

    function bn(t, i) {
        return null === t || null === i ? t === i : t.gh(i)
    }
    class wn {
        constructor() {
            this.q_ = new Map, this.Ge = null, this.Y_ = !1
        }
        X_(t) {
            this.Y_ = t, this.Ge = null
        }
        K_(t, i) {
            this.Z_(i), this.Ge = null;
            for (let n = i; n < t.length; ++n) {
                const i = t[n];
                let s = this.q_.get(i.timeWeight);
                void 0 === s && (s = [], this.q_.set(i.timeWeight, s)), s.push({
                    index: n,
                    time: i.time,
                    weight: i.timeWeight,
                    originalTime: i.originalTime
                })
            }
        }
        G_(t, i) {
            const n = Math.ceil(i / t);
            return null !== this.Ge && this.Ge.J_ === n || (this.Ge = {
                Ia: this.Q_(n),
                J_: n
            }), this.Ge.Ia
        }
        Z_(t) {
            if (0 === t) return void this.q_.clear();
            const i = [];
            this.q_.forEach(((n, s) => {
                t <= n[0].index ? i.push(s) : n.splice(Rt(n, t, (i => i.index < t)), 1 / 0)
            }));
            for (const t of i) this.q_.delete(t)
        }
        Q_(t) {
            let i = [];
            for (const n of Array.from(this.q_.keys()).sort(((t, i) => i - t))) {
                if (!this.q_.get(n)) continue;
                const s = i;
                i = [];
                const e = s.length;
                let r = 0;
                const h = d(this.q_.get(n)),
                    l = h.length;
                let a = 1 / 0,
                    o = -1 / 0;
                for (let n = 0; n < l; n++) {
                    const l = h[n],
                        _ = l.index;
                    for (; r < e;) {
                        const t = s[r],
                            n = t.index;
                        if (!(n < _)) {
                            a = n;
                            break
                        }
                        r++, i.push(t), o = n, a = 1 / 0
                    }
                    if (a - _ >= t && _ - o >= t) i.push(l), o = _;
                    else if (this.Y_) return s
                }
                for (; r < e; r++) i.push(s[r])
            }
            return i
        }
    }
    class gn {
        constructor(t) {
            this.tu = t
        }
        iu() {
            return null === this.tu ? null : new mn(Math.floor(this.tu.Rs()), Math.ceil(this.tu.ui()))
        }
        nu() {
            return this.tu
        }
        static su() {
            return new gn(null)
        }
    }

    function Mn(t, i) {
        return t.weight > i.weight ? t : i
    }
    class xn {
        constructor(t, i, n, s) {
            this.e_ = 0, this.eu = null, this.ru = [], this.fo = null, this.do = null, this.hu = new wn, this.lu = new Map, this.au = gn.su(), this.ou = !0, this._u = new k, this.uu = new k, this.cu = new k, this.du = null, this.fu = null, this.vu = [], this._n = i, this.bo = n, this.pu = i.rightOffset, this.mu = i.barSpacing, this.Hi = t, this.N_ = s, this.bu(), this.hu.X_(i.uniformDistribution)
        }
        W() {
            return this._n
        }
        wu(t) {
            C(this.bo, t), this.gu(), this.bu()
        }
        Lh(t, i) {
            var n;
            C(this._n, t), this._n.fixLeftEdge && this.Mu(), this._n.fixRightEdge && this.xu(), void 0 !== t.barSpacing && this.Hi.Kn(t.barSpacing), void 0 !== t.rightOffset && this.Hi.Zn(t.rightOffset), void 0 !== t.minBarSpacing && this.Hi.Kn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.mu), this.gu(), this.bu(), this.cu.m()
        }
        vn(t) {
            var i, n;
            return null !== (n = null === (i = this.ru[t]) || void 0 === i ? void 0 : i.time) && void 0 !== n ? n : null
        }
        $i(t) {
            var i;
            return null !== (i = this.ru[t]) && void 0 !== i ? i : null
        }
        ka(t, i) {
            if (this.ru.length < 1) return null;
            if (this.N_.key(t) > this.N_.key(this.ru[this.ru.length - 1].time)) return i ? this.ru.length - 1 : null;
            const n = Rt(this.ru, this.N_.key(t), ((t, i) => this.N_.key(t.time) < i));
            return this.N_.key(t) < this.N_.key(this.ru[n].time) ? i ? n : null : n
        }
        Li() {
            return 0 === this.e_ || 0 === this.ru.length || null === this.eu
        }
        ya() {
            return this.ru.length > 0
        }
        qs() {
            return this.Su(), this.au.iu()
        }
        yu() {
            return this.Su(), this.au.nu()
        }
        ku() {
            const t = this.qs();
            if (null === t) return null;
            const i = {
                from: t.Rs(),
                to: t.ui()
            };
            return this.Cu(i)
        }
        Cu(t) {
            const i = Math.round(t.from),
                n = Math.round(t.to),
                s = f(this.Tu()),
                e = f(this.Pu());
            return {
                from: f(this.$i(Math.max(s, i))),
                to: f(this.$i(Math.min(e, n)))
            }
        }
        Ru(t) {
            return {
                from: f(this.ka(t.from, !0)),
                to: f(this.ka(t.to, !0))
            }
        }
        ji() {
            return this.e_
        }
        m_(t) {
            if (!isFinite(t) || t <= 0) return;
            if (this.e_ === t) return;
            const i = this.yu(),
                n = this.e_;
            if (this.e_ = t, this.ou = !0, this._n.lockVisibleTimeRangeOnResize && 0 !== n) {
                const i = this.mu * t / n;
                this.mu = i
            }
            if (this._n.fixLeftEdge && null !== i && i.Rs() <= 0) {
                const i = n - t;
                this.pu -= Math.round(i / this.mu) + 1, this.ou = !0
            }
            this.Du(), this.Ou()
        }
        zt(t) {
            if (this.Li() || !P(t)) return 0;
            const i = this.Au() + this.pu - t;
            return this.e_ - (i + .5) * this.mu - 1
        }
        Zs(t, i) {
            const n = this.Au(),
                s = void 0 === i ? 0 : i.from,
                e = void 0 === i ? t.length : i.to;
            for (let i = s; i < e; i++) {
                const s = t[i].ot,
                    e = n + this.pu - s,
                    r = this.e_ - (e + .5) * this.mu - 1;
                t[i].nt = r
            }
        }
        Bu(t) {
            return Math.ceil(this.Vu(t))
        }
        Zn(t) {
            this.ou = !0, this.pu = t, this.Ou(), this.Hi.zu(), this.Hi.Nh()
        }
        ee() {
            return this.mu
        }
        Kn(t) {
            this.Eu(t), this.Ou(), this.Hi.zu(), this.Hi.Nh()
        }
        Iu() {
            return this.pu
        }
        Ia() {
            if (this.Li()) return null;
            if (null !== this.fu) return this.fu;
            const t = this.mu,
                i = 5 * (this.Hi.W().layout.fontSize + 4) / 8 * (this._n.tickMarkMaxCharacterLength || 8),
                n = Math.round(i / t),
                s = f(this.qs()),
                e = Math.max(s.Rs(), s.Rs() - n),
                r = Math.max(s.ui(), s.ui() - n),
                h = this.hu.G_(t, i),
                l = this.Tu() + n,
                a = this.Pu() - n,
                o = this.Lu(),
                _ = this._n.fixLeftEdge || o,
                u = this._n.fixRightEdge || o;
            let c = 0;
            for (const t of h) {
                if (!(e <= t.index && t.index <= r)) continue;
                let n;
                c < this.vu.length ? (n = this.vu[c], n.coord = this.zt(t.index), n.label = this.Nu(t), n.weight = t.weight) : (n = {
                    needAlignCoordinate: !1,
                    coord: this.zt(t.index),
                    label: this.Nu(t),
                    weight: t.weight
                }, this.vu.push(n)), this.mu > i / 2 && !o ? n.needAlignCoordinate = !1 : n.needAlignCoordinate = _ && t.index <= l || u && t.index >= a, c++
            }
            return this.vu.length = c, this.fu = this.vu, this.vu
        }
        Fu() {
            this.ou = !0, this.Kn(this._n.barSpacing), this.Zn(this._n.rightOffset)
        }
        Wu(t) {
            this.ou = !0, this.eu = t, this.Ou(), this.Mu()
        }
        ju(t, i) {
            const n = this.Vu(t),
                s = this.ee(),
                e = s + i * (s / 10);
            this.Kn(e), this._n.rightBarStaysOnScroll || this.Zn(this.Iu() + (n - this.Vu(t)))
        }
        Uo(t) {
            this.fo && this.Zo(), null === this.do && null === this.du && (this.Li() || (this.do = t, this.Hu()))
        }
        qo(t) {
            if (null === this.du) return;
            const i = gt(this.e_ - t, 0, this.e_),
                n = gt(this.e_ - f(this.do), 0, this.e_);
            0 !== i && 0 !== n && this.Kn(this.du.ee * i / n)
        }
        Yo() {
            null !== this.do && (this.do = null, this.$u())
        }
        Xo(t) {
            null === this.fo && null === this.du && (this.Li() || (this.fo = t, this.Hu()))
        }
        Ko(t) {
            if (null === this.fo) return;
            const i = (this.fo - t) / this.ee();
            this.pu = f(this.du).Iu + i, this.ou = !0, this.Ou()
        }
        Zo() {
            null !== this.fo && (this.fo = null, this.$u())
        }
        Uu() {
            this.qu(this._n.rightOffset)
        }
        qu(t, i = 400) {
            if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
            if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
            const n = this.pu,
                s = performance.now();
            this.Hi.qn({
                Yu: t => (t - s) / i >= 1,
                Xu: e => {
                    const r = (e - s) / i;
                    return r >= 1 ? t : n + (t - n) * r
                }
            })
        }
        bt(t, i) {
            this.ou = !0, this.ru = t, this.hu.K_(t, i), this.Ou()
        }
        Ku() {
            return this._u
        }
        Zu() {
            return this.uu
        }
        Gu() {
            return this.cu
        }
        Au() {
            return this.eu || 0
        }
        Ju(t) {
            const i = t.U_();
            this.Eu(this.e_ / i), this.pu = t.ui() - this.Au(), this.Ou(), this.ou = !0, this.Hi.zu(), this.Hi.Nh()
        }
        Qu() {
            const t = this.Tu(),
                i = this.Pu();
            null !== t && null !== i && this.Ju(new mn(t, i + this._n.rightOffset))
        }
        tc(t) {
            const i = new mn(t.from, t.to);
            this.Ju(i)
        }
        Ui(t) {
            return void 0 !== this.bo.timeFormatter ? this.bo.timeFormatter(t.originalTime) : this.N_.formatHorzItem(t.time)
        }
        Lu() {
            const {
                handleScroll: t,
                handleScale: i
            } = this.Hi.W();
            return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch)
        }
        Tu() {
            return 0 === this.ru.length ? null : 0
        }
        Pu() {
            return 0 === this.ru.length ? null : this.ru.length - 1
        }
        ic(t) {
            return (this.e_ - 1 - t) / this.mu
        }
        Vu(t) {
            const i = this.ic(t),
                n = this.Au() + this.pu - i;
            return Math.round(1e6 * n) / 1e6
        }
        Eu(t) {
            const i = this.mu;
            this.mu = t, this.Du(), i !== this.mu && (this.ou = !0, this.nc())
        }
        Su() {
            if (!this.ou) return;
            if (this.ou = !1, this.Li()) return void this.sc(gn.su());
            const t = this.Au(),
                i = this.e_ / this.mu,
                n = this.pu + t,
                s = new mn(n - i + 1, n);
            this.sc(new gn(s))
        }
        Du() {
            const t = this.ec();
            if (this.mu < t && (this.mu = t, this.ou = !0), 0 !== this.e_) {
                const t = .5 * this.e_;
                this.mu > t && (this.mu = t, this.ou = !0)
            }
        }
        ec() {
            return this._n.fixLeftEdge && this._n.fixRightEdge && 0 !== this.ru.length ? this.e_ / this.ru.length : this._n.minBarSpacing
        }
        Ou() {
            const t = this.rc();
            this.pu > t && (this.pu = t, this.ou = !0);
            const i = this.hc();
            null !== i && this.pu < i && (this.pu = i, this.ou = !0)
        }
        hc() {
            const t = this.Tu(),
                i = this.eu;
            if (null === t || null === i) return null;
            return t - i - 1 + (this._n.fixLeftEdge ? this.e_ / this.mu : Math.min(2, this.ru.length))
        }
        rc() {
            return this._n.fixRightEdge ? 0 : this.e_ / this.mu - Math.min(2, this.ru.length)
        }
        Hu() {
            this.du = {
                ee: this.ee(),
                Iu: this.Iu()
            }
        }
        $u() {
            this.du = null
        }
        Nu(t) {
            let i = this.lu.get(t.weight);
            return void 0 === i && (i = new pn((t => this.lc(t)), this.N_), this.lu.set(t.weight, i)), i.F_(t)
        }
        lc(t) {
            return this.N_.formatTickmark(t, this.bo)
        }
        sc(t) {
            const i = this.au;
            this.au = t, bn(i.iu(), this.au.iu()) || this._u.m(), bn(i.nu(), this.au.nu()) || this.uu.m(), this.nc()
        }
        nc() {
            this.fu = null
        }
        gu() {
            this.nc(), this.lu.clear()
        }
        bu() {
            this.N_.updateFormatter(this.bo)
        }
        Mu() {
            if (!this._n.fixLeftEdge) return;
            const t = this.Tu();
            if (null === t) return;
            const i = this.qs();
            if (null === i) return;
            const n = i.Rs() - t;
            if (n < 0) {
                const t = this.pu - n - 1;
                this.Zn(t)
            }
            this.Du()
        }
        xu() {
            this.Ou(), this.Du()
        }
    }
    class Sn {
        K(t, i, n) {
            t.useMediaCoordinateSpace((t => this.Z(t, i, n)))
        }
        fl(t, i, n) {
            t.useMediaCoordinateSpace((t => this.ac(t, i, n)))
        }
        ac(t, i, n) { }
    }
    class yn extends Sn {
        constructor(t) {
            super(), this.oc = new Map, this.Et = t
        }
        Z(t) { }
        ac(t) {
            if (!this.Et.kt) return;
            const {
                context: i,
                mediaSize: n
            } = t;
            let s = 0;
            for (const t of this.Et._c) {
                if (0 === t.Zt.length) continue;
                i.font = t.R;
                const e = this.uc(i, t.Zt);
                e > n.width ? t.ju = n.width / e : t.ju = 1, s += t.cc * t.ju
            }
            let e = 0;
            switch (this.Et.dc) {
                case "top":
                    e = 0;
                    break;
                case "center":
                    e = Math.max((n.height - s) / 2, 0);
                    break;
                case "bottom":
                    e = Math.max(n.height - s, 0)
            }
            i.fillStyle = this.Et.O;
            for (const t of this.Et._c) {
                i.save();
                let s = 0;
                switch (this.Et.fc) {
                    case "left":
                        i.textAlign = "left", s = t.cc / 2;
                        break;
                    case "center":
                        i.textAlign = "center", s = n.width / 2;
                        break;
                    case "right":
                        i.textAlign = "right", s = n.width - 1 - t.cc / 2
                }
                i.translate(s, e), i.textBaseline = "top", i.font = t.R, i.scale(t.ju, t.ju), i.fillText(t.Zt, 0, t.vc), i.restore(), e += t.cc * t.ju
            }
        }
        uc(t, i) {
            const n = this.mc(t.font);
            let s = n.get(i);
            return void 0 === s && (s = t.measureText(i).width, n.set(i, s)), s
        }
        mc(t) {
            let i = this.oc.get(t);
            return void 0 === i && (i = new Map, this.oc.set(t, i)), i
        }
    }
    class kn {
        constructor(t) {
            this.ft = !0, this.Ft = {
                kt: !1,
                O: "",
                _c: [],
                dc: "center",
                fc: "center"
            }, this.Wt = new yn(this.Ft), this.jt = t
        }
        bt() {
            this.ft = !0
        }
        gt() {
            return this.ft && (this.Mt(), this.ft = !1), this.Wt
        }
        Mt() {
            const t = this.jt.W(),
                i = this.Ft;
            i.kt = t.visible, i.kt && (i.O = t.color, i.fc = t.horzAlign, i.dc = t.vertAlign, i._c = [{
                Zt: t.text,
                R: z(t.fontSize, t.fontFamily, t.fontStyle),
                cc: 1.2 * t.fontSize,
                vc: 0,
                ju: 0
            }])
        }
    }
    class Cn extends st {
        constructor(t, i) {
            super(), this._n = i, this.mn = new kn(this)
        }
        Tn() {
            return []
        }
        Cn() {
            return [this.mn]
        }
        W() {
            return this._n
        }
        Rn() {
            this.mn.bt()
        }
    }
    var Tn, Pn, Rn, Dn, On;
    ! function (t) {
        t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap"
    }(Tn || (Tn = {}));
    class An {
        constructor(t, i, n) {
            this.bc = [], this.wc = [], this.e_ = 0, this.gc = null, this.Mc = new k, this.xc = new k, this.Sc = null, this.yc = t, this._n = i, this.N_ = n, this.kc = new E(this), this.wl = new xn(this, i.timeScale, this._n.localization, n), this.vt = new rt(this, i.crosshair), this.Cc = new Yi(i.crosshair), this.Tc = new Cn(this, i.watermark), this.Pc(), this.bc[0].p_(2e3), this.Rc = this.Dc(0), this.Oc = this.Dc(1)
        }
        $l() {
            this.Ac(lt.ns())
        }
        Nh() {
            this.Ac(lt.ts())
        }
        sa() {
            this.Ac(new lt(1))
        }
        Ul(t) {
            const i = this.Bc(t);
            this.Ac(i)
        }
        Vc() {
            return this.gc
        }
        zc(t) {
            const i = this.gc;
            this.gc = t, null !== i && this.Ul(i.Ec), null !== t && this.Ul(t.Ec)
        }
        W() {
            return this._n
        }
        Lh(t) {
            C(this._n, t), this.bc.forEach((i => i.c_(t))), void 0 !== t.timeScale && this.wl.Lh(t.timeScale), void 0 !== t.localization && this.wl.wu(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.Mc.m(), this.Rc = this.Dc(0), this.Oc = this.Dc(1), this.$l()
        }
        Ic(t, i) {
            if ("left" === t) return void this.Lh({
                leftPriceScale: i
            });
            if ("right" === t) return void this.Lh({
                rightPriceScale: i
            });
            const n = this.Lc(t);
            null !== n && (n.Dt.Lh(i), this.Mc.m())
        }
        Lc(t) {
            for (const i of this.bc) {
                const n = i.d_(t);
                if (null !== n) return {
                    Ht: i,
                    Dt: n
                }
            }
            return null
        }
        St() {
            return this.wl
        }
        Nc() {
            return this.bc
        }
        Fc() {
            return this.Tc
        }
        Wc() {
            return this.vt
        }
        jc() {
            return this.xc
        }
        Hc(t, i) {
            t.Oo(i), this.zu()
        }
        m_(t) {
            this.e_ = t, this.wl.m_(this.e_), this.bc.forEach((i => i.m_(t))), this.zu()
        }
        Pc(t) {
            const i = new vn(this.wl, this);
            void 0 !== t ? this.bc.splice(t, 0, i) : this.bc.push(i);
            const n = void 0 === t ? this.bc.length - 1 : t,
                s = lt.ns();
            return s.In(n, {
                Ln: 0,
                Nn: !0
            }), this.Ac(s), i
        }
        k_(t, i, n) {
            t.k_(i, n)
        }
        C_(t, i, n) {
            t.C_(i, n), this.ql(), this.Ac(this.$c(t, 2))
        }
        T_(t, i) {
            t.T_(i), this.Ac(this.$c(t, 2))
        }
        P_(t, i, n) {
            i.ko() || t.P_(i, n)
        }
        R_(t, i, n) {
            i.ko() || (t.R_(i, n), this.ql(), this.Ac(this.$c(t, 2)))
        }
        D_(t, i) {
            i.ko() || (t.D_(i), this.Ac(this.$c(t, 2)))
        }
        A_(t, i) {
            t.A_(i), this.Ac(this.$c(t, 2))
        }
        Uc(t) {
            this.wl.Uo(t)
        }
        qc(t, i) {
            const n = this.St();
            if (n.Li() || 0 === i) return;
            const s = n.ji();
            t = Math.max(1, Math.min(t, s)), n.ju(t, i), this.zu()
        }
        Yc(t) {
            this.Xc(0), this.Kc(t), this.Zc()
        }
        Gc(t) {
            this.wl.qo(t), this.zu()
        }
        Jc() {
            this.wl.Yo(), this.Nh()
        }
        Xc(t) {
            this.wl.Xo(t)
        }
        Kc(t) {
            this.wl.Ko(t), this.zu()
        }
        Zc() {
            this.wl.Zo(), this.Nh()
        }
        wt() {
            return this.wc
        }
        Qc(t, i, n, s, e) {
            this.vt.bn(t, i);
            let r = NaN,
                h = this.wl.Bu(t);
            const l = this.wl.qs();
            null !== l && (h = Math.min(Math.max(l.Rs(), h), l.ui()));
            const a = s.dn(),
                o = a.Ct();
            null !== o && (r = a.fn(i, o)), r = this.Cc.Ca(r, h, s), this.vt.xn(h, r, s), this.sa(), e || this.xc.m(this.vt.xt(), {
                x: t,
                y: i
            }, n)
        }
        td(t, i, n) {
            const s = n.dn(),
                e = s.Ct(),
                r = s.Rt(t, f(e)),
                h = this.wl.ka(i, !0),
                l = this.wl.zt(f(h));
            this.Qc(l, r, null, n, !0)
        }
        nd(t) {
            this.Wc().yn(), this.sa(), t || this.xc.m(null, null, null)
        }
        ql() {
            const t = this.vt.Ht();
            if (null !== t) {
                const i = this.vt.gn(),
                    n = this.vt.Mn();
                this.Qc(i, n, null, t)
            }
            this.vt.Rn()
        }
        sd(t, i, n) {
            const s = this.wl.vn(0);
            void 0 !== i && void 0 !== n && this.wl.bt(i, n);
            const e = this.wl.vn(0),
                r = this.wl.Au(),
                h = this.wl.qs();
            if (null !== h && null !== s && null !== e) {
                const i = h.Yr(r),
                    l = this.N_.key(s) > this.N_.key(e),
                    a = null !== t && t > r && !l,
                    o = this.wl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
                    _ = i && (!(void 0 === n) || o) && this.wl.W().shiftVisibleRangeOnNewBar;
                if (a && !_) {
                    const i = t - r;
                    this.wl.Zn(this.wl.Iu() - i)
                }
            }
            this.wl.Wu(t)
        }
        Kl(t) {
            null !== t && t.V_()
        }
        _r(t) {
            const i = this.bc.find((i => i.No().includes(t)));
            return void 0 === i ? null : i
        }
        zu() {
            this.Tc.Rn(), this.bc.forEach((t => t.V_())), this.ql()
        }
        S() {
            this.bc.forEach((t => t.S())), this.bc.length = 0, this._n.localization.priceFormatter = void 0, this._n.localization.percentageFormatter = void 0, this._n.localization.timeFormatter = void 0
        }
        ed() {
            return this.kc
        }
        vr() {
            return this.kc.W()
        }
        f_() {
            return this.Mc
        }
        rd(t, i, n) {
            const s = this.bc[0],
                e = this.hd(i, t, s, n);
            return this.wc.push(e), 1 === this.wc.length ? this.$l() : this.Nh(), e
        }
        ld(t) {
            const i = this._r(t),
                n = this.wc.indexOf(t);
            c(-1 !== n, "Series not found"), this.wc.splice(n, 1), f(i).jo(t), t.S && t.S()
        }
        Hl(t, i) {
            const n = f(this._r(t));
            n.jo(t);
            const s = this.Lc(i);
            if (null === s) {
                const s = t.Xi();
                n.Fo(t, i, s)
            } else {
                const e = s.Ht === n ? t.Xi() : void 0;
                s.Ht.Fo(t, i, e)
            }
        }
        Qu() {
            const t = lt.ts();
            t.jn(), this.Ac(t)
        }
        ad(t) {
            const i = lt.ts();
            i.Un(t), this.Ac(i)
        }
        Xn() {
            const t = lt.ts();
            t.Xn(), this.Ac(t)
        }
        Kn(t) {
            const i = lt.ts();
            i.Kn(t), this.Ac(i)
        }
        Zn(t) {
            const i = lt.ts();
            i.Zn(t), this.Ac(i)
        }
        qn(t) {
            const i = lt.ts();
            i.qn(t), this.Ac(i)
        }
        Hn() {
            const t = lt.ts();
            t.Hn(), this.Ac(t)
        }
        od() {
            return this._n.rightPriceScale.visible ? "right" : "left"
        }
        _d() {
            return this.Oc
        }
        q() {
            return this.Rc
        }
        Bt(t) {
            const i = this.Oc,
                n = this.Rc;
            if (i === n) return i;
            if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Sc || this.Sc.ks !== n || this.Sc.Cs !== i) this.Sc = {
                ks: n,
                Cs: i,
                ud: new Map
            };
            else {
                const i = this.Sc.ud.get(t);
                if (void 0 !== i) return i
            }
            const s = function (t, i, n) {
                const [s, e, r, h] = S(t), [l, a, o, _] = S(i), u = [m(s + n * (l - s)), m(e + n * (a - e)), m(r + n * (o - r)), b(h + n * (_ - h))];
                return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`
            }(n, i, t / 100);
            return this.Sc.ud.set(t, s), s
        }
        $c(t, i) {
            const n = new lt(i);
            if (null !== t) {
                const s = this.bc.indexOf(t);
                n.In(s, {
                    Ln: i
                })
            }
            return n
        }
        Bc(t, i) {
            return void 0 === i && (i = 2), this.$c(this._r(t), i)
        }
        Ac(t) {
            this.yc && this.yc(t), this.bc.forEach((t => t.E_().Fh().bt()))
        }
        hd(t, i, n, s) {
            const e = new qi(this, t, i, n, s),
                r = void 0 !== t.priceScaleId ? t.priceScaleId : this.od();
            return n.Fo(e, r), ht(r) || e.Lh(t), e
        }
        Dc(t) {
            const i = this._n.layout;
            return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color
        }
    }

    function Bn(t) {
        return !T(t) && !R(t)
    }

    function Vn(t) {
        return T(t)
    } ! function (t) {
        t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate"
    }(Pn || (Pn = {})),
        function (t) {
            t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible"
        }(Rn || (Rn = {})),
        function (t) {
            t.Solid = "solid", t.VerticalGradient = "gradient"
        }(Dn || (Dn = {})),
        function (t) {
            t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds"
        }(On || (On = {}));
    const zn = t => t.getUTCFullYear();

    function En(t, i, n) {
        return i.replace(/yyyy/g, (t => ot(zn(t), 4))(t)).replace(/yy/g, (t => ot(zn(t) % 100, 2))(t)).replace(/MMMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "long"
        }))(t, n)).replace(/MMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {
            month: "short"
        }))(t, n)).replace(/MM/g, (t => ot((t => t.getUTCMonth() + 1)(t), 2))(t)).replace(/dd/g, (t => ot((t => t.getUTCDate())(t), 2))(t))
    }
    class In {
        constructor(t = "yyyy-MM-dd", i = "default") {
            this.dd = t, this.fd = i
        }
        F_(t) {
            return En(t, this.dd, this.fd)
        }
    }
    class Ln {
        constructor(t) {
            this.vd = t || "%h:%m:%s"
        }
        F_(t) {
            return this.vd.replace("%h", ot(t.getUTCHours(), 2)).replace("%m", ot(t.getUTCMinutes(), 2)).replace("%s", ot(t.getUTCSeconds(), 2))
        }
    }
    const Nn = {
        pd: "yyyy-MM-dd",
        md: "%h:%m:%s",
        bd: " ",
        wd: "default"
    };
    class Fn {
        constructor(t = {}) {
            const i = Object.assign(Object.assign({}, Nn), t);
            this.gd = new In(i.pd, i.wd), this.Md = new Ln(i.md), this.xd = i.bd
        }
        F_(t) {
            return `${this.gd.F_(t)}${this.xd}${this.Md.F_(t)}`
        }
    }

    function Wn(t) {
        return 60 * t * 60 * 1e3
    }

    function jn(t) {
        return 60 * t * 1e3
    }
    const Hn = [{
        Sd: ($n = 1, 1e3 * $n),
        yd: 10
    }, {
        Sd: jn(1),
        yd: 20
    }, {
        Sd: jn(5),
        yd: 21
    }, {
        Sd: jn(30),
        yd: 22
    }, {
        Sd: Wn(1),
        yd: 30
    }, {
        Sd: Wn(3),
        yd: 31
    }, {
        Sd: Wn(6),
        yd: 32
    }, {
        Sd: Wn(12),
        yd: 33
    }];
    var $n;

    function Un(t, i) {
        if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
        if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
        if (t.getUTCDate() !== i.getUTCDate()) return 50;
        for (let n = Hn.length - 1; n >= 0; --n)
            if (Math.floor(i.getTime() / Hn[n].Sd) !== Math.floor(t.getTime() / Hn[n].Sd)) return Hn[n].yd;
        return 0
    }

    function qn(t) {
        let i = t;
        if (R(t) && (i = Xn(t)), !Bn(i)) throw new Error("time must be of type BusinessDay");
        const n = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
        return {
            kd: Math.round(n.getTime() / 1e3),
            Cd: i
        }
    }

    function Yn(t) {
        if (!Vn(t)) throw new Error("time must be of type isUTCTimestamp");
        return {
            kd: t
        }
    }

    function Xn(t) {
        const i = new Date(t);
        if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
        return {
            day: i.getUTCDate(),
            month: i.getUTCMonth() + 1,
            year: i.getUTCFullYear()
        }
    }

    function Kn(t) {
        R(t.time) && (t.time = Xn(t.time))
    }
    class Zn {
        options() {
            return this._n
        }
        setOptions(t) {
            this._n = t, this.updateFormatter(t.localization)
        }
        preprocessData(t) {
            Array.isArray(t) ? function (t) {
                t.forEach(Kn)
            }(t) : Kn(t)
        }
        createConverterToInternalObj(t) {
            return f(function (t) {
                return 0 === t.length ? null : Bn(t[0].time) || R(t[0].time) ? qn : Yn
            }(t))
        }
        key(t) {
            return "object" == typeof t && "kd" in t ? t.kd : this.key(this.convertHorzItemToInternal(t))
        }
        cacheKey(t) {
            const i = t;
            return void 0 === i.Cd ? new Date(1e3 * i.kd).getTime() : new Date(Date.UTC(i.Cd.year, i.Cd.month - 1, i.Cd.day)).getTime()
        }
        convertHorzItemToInternal(t) {
            return Vn(i = t) ? Yn(i) : Bn(i) ? qn(i) : qn(Xn(i));
            var i
        }
        updateFormatter(t) {
            if (!this._n) return;
            const i = t.dateFormat;
            this._n.timeScale.timeVisible ? this.Td = new Fn({
                pd: i,
                md: this._n.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
                bd: "   ",
                wd: t.locale
            }) : this.Td = new In(i, t.locale)
        }
        formatHorzItem(t) {
            const i = t;
            return this.Td.F_(new Date(1e3 * i.kd))
        }
        formatTickmark(t, i) {
            const n = function (t, i, n) {
                switch (t) {
                    case 0:
                    case 10:
                        return i ? n ? 4 : 3 : 2;
                    case 20:
                    case 21:
                    case 22:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                        return i ? 3 : 2;
                    case 50:
                        return 2;
                    case 60:
                        return 1;
                    case 70:
                        return 0
                }
            }(t.weight, this._n.timeScale.timeVisible, this._n.timeScale.secondsVisible),
                s = this._n.timeScale;
            if (void 0 !== s.tickMarkFormatter) {
                const e = s.tickMarkFormatter(t.originalTime, n, i.locale);
                if (null !== e) return e
            }
            return function (t, i, n) {
                const s = {};
                switch (i) {
                    case 0:
                        s.year = "numeric";
                        break;
                    case 1:
                        s.month = "short";
                        break;
                    case 2:
                        s.day = "numeric";
                        break;
                    case 3:
                        s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit";
                        break;
                    case 4:
                        s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit", s.second = "2-digit"
                }
                const e = void 0 === t.Cd ? new Date(1e3 * t.kd) : new Date(Date.UTC(t.Cd.year, t.Cd.month - 1, t.Cd.day));
                return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(n, s)
            }(t.time, n, i.locale)
        }
        maxTickMarkWeight(t) {
            let i = t.reduce(Mn, t[0]).weight;
            return i > 30 && i < 50 && (i = 30), i
        }
        fillWeightsForPoints(t, i) {
            ! function (t, i = 0) {
                if (0 === t.length) return;
                let n = 0 === i ? null : t[i - 1].time.kd,
                    s = null !== n ? new Date(1e3 * n) : null,
                    e = 0;
                for (let r = i; r < t.length; ++r) {
                    const i = t[r],
                        h = new Date(1e3 * i.time.kd);
                    null !== s && (i.timeWeight = Un(h, s)), e += i.time.kd - (n || i.time.kd), n = i.time.kd, s = h
                }
                if (0 === i && t.length > 1) {
                    const i = Math.ceil(e / (t.length - 1)),
                        n = new Date(1e3 * (t[0].time.kd - i));
                    t[0].timeWeight = Un(new Date(1e3 * t[0].time.kd), n)
                }
            }(t, i)
        }
        static Pd(t) {
            return C({
                localization: {
                    dateFormat: "dd MMM 'yy"
                }
            }, null != t ? t : {})
        }
    }

    function Gn(t) {
        var i = t.width,
            n = t.height;
        if (i < 0) throw new Error("Negative width is not allowed for Size");
        if (n < 0) throw new Error("Negative height is not allowed for Size");
        return {
            width: i,
            height: n
        }
    }

    function Jn(t, i) {
        return t.width === i.width && t.height === i.height
    }
    var Qn = function () {
        function t(t) {
            var i = this;
            this._resolutionListener = function () {
                return i._onResolutionChanged()
            }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
        }
        return t.prototype.dispose = function () {
            this._uninstallResolutionListener(), this._window = null
        }, Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this._window.devicePixelRatio
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.subscribe = function (t) {
            var i = this,
                n = {
                    next: t
                };
            return this._observers.push(n), {
                unsubscribe: function () {
                    i._observers = i._observers.filter((function (t) {
                        return t !== n
                    }))
                }
            }
        }, t.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
            var t = this._window.devicePixelRatio;
            this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
        }, t.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
        }, t.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(), this._installResolutionListener()
        }, t.prototype._onResolutionChanged = function () {
            var t = this;
            this._observers.forEach((function (i) {
                return i.next(t._window.devicePixelRatio)
            })), this._reinstallResolutionListener()
        }, t
    }();
    var ts = function () {
        function t(t, i, n) {
            var s;
            this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = Gn({
                width: this._canvasElement.clientWidth,
                height: this._canvasElement.clientHeight
            }), this._transformBitmapSize = null != i ? i : function (t) {
                return t
            }, this._allowResizeObserver = null === (s = null == n ? void 0 : n.allowResizeObserver) || void 0 === s || s, this._chooseAndInitObserver()
        }
        return t.prototype.dispose = function () {
            var t, i;
            if (null === this._canvasElement) throw new Error("Object is disposed");
            null === (t = this._canvasElementResizeObserver) || void 0 === t || t.disconnect(), this._canvasElementResizeObserver = null, null === (i = this._devicePixelRatioObservable) || void 0 === i || i.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
        }, Object.defineProperty(t.prototype, "canvasElement", {
            get: function () {
                if (null === this._canvasElement) throw new Error("Object is disposed");
                return this._canvasElement
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "canvasElementClientSize", {
            get: function () {
                return this._canvasElementClientSize
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "bitmapSize", {
            get: function () {
                return Gn({
                    width: this.canvasElement.width,
                    height: this.canvasElement.height
                })
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.resizeCanvasElement = function (t) {
            this._canvasElementClientSize = Gn(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
        }, t.prototype.subscribeBitmapSizeChanged = function (t) {
            this._bitmapSizeChangedListeners.push(t)
        }, t.prototype.unsubscribeBitmapSizeChanged = function (t) {
            this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter((function (i) {
                return i !== t
            }))
        }, Object.defineProperty(t.prototype, "suggestedBitmapSize", {
            get: function () {
                return this._suggestedBitmapSize
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
            this._suggestedBitmapSizeChangedListeners.push(t)
        }, t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
            this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter((function (i) {
                return i !== t
            }))
        }, t.prototype.applySuggestedBitmapSize = function () {
            if (null !== this._suggestedBitmapSize) {
                var t = this._suggestedBitmapSize;
                this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize)
            }
        }, t.prototype._resizeBitmap = function (t) {
            var i = this.bitmapSize;
            Jn(i, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(i, t))
        }, t.prototype._emitBitmapSizeChanged = function (t, i) {
            var n = this;
            this._bitmapSizeChangedListeners.forEach((function (s) {
                return s.call(n, t, i)
            }))
        }, t.prototype._suggestNewBitmapSize = function (t) {
            var i = this._suggestedBitmapSize,
                n = Gn(this._transformBitmapSize(t, this._canvasElementClientSize)),
                s = Jn(this.bitmapSize, n) ? null : n;
            null === i && null === s || null !== i && null !== s && Jn(i, s) || (this._suggestedBitmapSize = s, this._emitSuggestedBitmapSizeChanged(i, s))
        }, t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
            var n = this;
            this._suggestedBitmapSizeChangedListeners.forEach((function (s) {
                return s.call(n, t, i)
            }))
        }, t.prototype._chooseAndInitObserver = function () {
            var t = this;
            this._allowResizeObserver ? new Promise((function (t) {
                var i = new ResizeObserver((function (n) {
                    t(n.every((function (t) {
                        return "devicePixelContentBoxSize" in t
                    }))), i.disconnect()
                }));
                i.observe(document.body, {
                    box: "device-pixel-content-box"
                })
            })).catch((function () {
                return !1
            })).then((function (i) {
                return i ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
            })) : this._initDevicePixelRatioObservable()
        }, t.prototype._initDevicePixelRatioObservable = function () {
            var t = this;
            if (null !== this._canvasElement) {
                var i = is(this._canvasElement);
                if (null === i) throw new Error("No window is associated with the canvas");
                this._devicePixelRatioObservable = function (t) {
                    return new Qn(t)
                }(i), this._devicePixelRatioObservable.subscribe((function () {
                    return t._invalidateBitmapSize()
                })), this._invalidateBitmapSize()
            }
        }, t.prototype._invalidateBitmapSize = function () {
            var t, i;
            if (null !== this._canvasElement) {
                var n = is(this._canvasElement);
                if (null !== n) {
                    var s = null !== (i = null === (t = this._devicePixelRatioObservable) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : n.devicePixelRatio,
                        e = this._canvasElement.getClientRects(),
                        r = void 0 !== e[0] ? function (t, i) {
                            return Gn({
                                width: Math.round(t.left * i + t.width * i) - Math.round(t.left * i),
                                height: Math.round(t.top * i + t.height * i) - Math.round(t.top * i)
                            })
                        }(e[0], s) : Gn({
                            width: this._canvasElementClientSize.width * s,
                            height: this._canvasElementClientSize.height * s
                        });
                    this._suggestNewBitmapSize(r)
                }
            }
        }, t.prototype._initResizeObserver = function () {
            var t = this;
            null !== this._canvasElement && (this._canvasElementResizeObserver = new ResizeObserver((function (i) {
                var n = i.find((function (i) {
                    return i.target === t._canvasElement
                }));
                if (n && n.devicePixelContentBoxSize && n.devicePixelContentBoxSize[0]) {
                    var s = n.devicePixelContentBoxSize[0],
                        e = Gn({
                            width: s.inlineSize,
                            height: s.blockSize
                        });
                    t._suggestNewBitmapSize(e)
                }
            })), this._canvasElementResizeObserver.observe(this._canvasElement, {
                box: "device-pixel-content-box"
            }))
        }, t
    }();

    function is(t) {
        return t.ownerDocument.defaultView
    }
    var ns = function () {
        function t(t, i, n) {
            if (0 === i.width || 0 === i.height) throw new TypeError("Rendering target could only be created on a media with positive width and height");
            if (this._mediaSize = i, 0 === n.width || 0 === n.height) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
            this._bitmapSize = n, this._context = t
        }
        return t.prototype.useMediaCoordinateSpace = function (t) {
            try {
                return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
                    context: this._context,
                    mediaSize: this._mediaSize
                })
            } finally {
                this._context.restore()
            }
        }, t.prototype.useBitmapCoordinateSpace = function (t) {
            try {
                return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({
                    context: this._context,
                    mediaSize: this._mediaSize,
                    bitmapSize: this._bitmapSize,
                    horizontalPixelRatio: this._horizontalPixelRatio,
                    verticalPixelRatio: this._verticalPixelRatio
                })
            } finally {
                this._context.restore()
            }
        }, Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
            get: function () {
                return this._bitmapSize.width / this._mediaSize.width
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "_verticalPixelRatio", {
            get: function () {
                return this._bitmapSize.height / this._mediaSize.height
            },
            enumerable: !1,
            configurable: !0
        }), t
    }();

    function ss(t, i) {
        var n = t.canvasElementClientSize;
        if (0 === n.width || 0 === n.height) return null;
        var s = t.bitmapSize;
        if (0 === s.width || 0 === s.height) return null;
        var e = t.canvasElement.getContext("2d", i);
        return null === e ? null : new ns(e, n, s)
    }
    const es = "undefined" != typeof window;

    function rs() {
        return !!es && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    }

    function hs() {
        return !!es && /iPhone|iPad|iPod/.test(window.navigator.platform)
    }

    function ls(t) {
        return t + t % 2
    }

    function as(t, i) {
        return t.Rd - i.Rd
    }

    function os(t, i, n) {
        const s = (t.Rd - i.Rd) / (t.ot - i.ot);
        return Math.sign(s) * Math.min(Math.abs(s), n)
    }
    class _s {
        constructor(t, i, n, s) {
            this.Dd = null, this.Od = null, this.Ad = null, this.Bd = null, this.Vd = null, this.zd = 0, this.Ed = 0, this.Id = t, this.Ld = i, this.Nd = n, this.ss = s
        }
        Fd(t, i) {
            if (null !== this.Dd) {
                if (this.Dd.ot === i) return void (this.Dd.Rd = t);
                if (Math.abs(this.Dd.Rd - t) < this.ss) return
            }
            this.Bd = this.Ad, this.Ad = this.Od, this.Od = this.Dd, this.Dd = {
                ot: i,
                Rd: t
            }
        }
        Pr(t, i) {
            if (null === this.Dd || null === this.Od) return;
            if (i - this.Dd.ot > 50) return;
            let n = 0;
            const s = os(this.Dd, this.Od, this.Ld),
                e = as(this.Dd, this.Od),
                r = [s],
                h = [e];
            if (n += e, null !== this.Ad) {
                const t = os(this.Od, this.Ad, this.Ld);
                if (Math.sign(t) === Math.sign(s)) {
                    const i = as(this.Od, this.Ad);
                    if (r.push(t), h.push(i), n += i, null !== this.Bd) {
                        const t = os(this.Ad, this.Bd, this.Ld);
                        if (Math.sign(t) === Math.sign(s)) {
                            const i = as(this.Ad, this.Bd);
                            r.push(t), h.push(i), n += i
                        }
                    }
                }
            }
            let l = 0;
            for (let t = 0; t < r.length; ++t) l += h[t] / n * r[t];
            Math.abs(l) < this.Id || (this.Vd = {
                Rd: t,
                ot: i
            }, this.Ed = l, this.zd = function (t, i) {
                const n = Math.log(i);
                return Math.log(1 * n / -t) / n
            }(Math.abs(l), this.Nd))
        }
        Xu(t) {
            const i = f(this.Vd),
                n = t - i.ot;
            return i.Rd + this.Ed * (Math.pow(this.Nd, n) - 1) / Math.log(this.Nd)
        }
        Yu(t) {
            return null === this.Vd || this.Wd(t) === this.zd
        }
        Wd(t) {
            const i = t - f(this.Vd).ot;
            return Math.min(i, this.zd)
        }
    }

    function us(t, i) {
        const n = f(t.ownerDocument).createElement("canvas");
        t.appendChild(n);
        const s = function (t, i) {
            if ("device-pixel-content-box" === i.type) return new ts(t, i.transform, i.options);
            throw new Error("Unsupported binding target")
        }(n, {
            type: "device-pixel-content-box",
            options: {
                allowResizeObserver: !1
            },
            transform: (t, i) => ({
                width: Math.max(t.width, i.width),
                height: Math.max(t.height, i.height)
            })
        });
        return s.resizeCanvasElement(i), s
    }

    function cs(t) {
        var i;
        t.width = 1, t.height = 1, null === (i = t.getContext("2d")) || void 0 === i || i.clearRect(0, 0, 1, 1)
    }

    function ds(t, i, n, s) {
        t.fl && t.fl(i, n, s)
    }

    function fs(t, i, n, s) {
        t.K(i, n, s)
    }

    function vs(t, i, n, s) {
        const e = t(n, s);
        for (const t of e) {
            const n = t.gt();
            null !== n && i(n)
        }
    }

    function ps(t) {
        es && void 0 !== window.chrome && t.addEventListener("mousedown", (t => {
            if (1 === t.button) return t.preventDefault(), !1
        }))
    }
    class ms {
        constructor(t, i, n) {
            this.jd = 0, this.Hd = null, this.$d = {
                nt: Number.NEGATIVE_INFINITY,
                st: Number.POSITIVE_INFINITY
            }, this.Ud = 0, this.qd = null, this.Yd = {
                nt: Number.NEGATIVE_INFINITY,
                st: Number.POSITIVE_INFINITY
            }, this.Xd = null, this.Kd = !1, this.Zd = null, this.Gd = null, this.Jd = !1, this.Qd = !1, this.tf = !1, this.if = null, this.nf = null, this.sf = null, this.ef = null, this.rf = null, this.hf = null, this.lf = null, this.af = 0, this._f = !1, this.uf = !1, this.cf = !1, this.df = 0, this.ff = null, this.vf = !hs(), this.pf = t => {
                this.mf(t)
            }, this.bf = t => {
                if (this.wf(t)) {
                    const i = this.gf(t);
                    if (++this.Ud, this.qd && this.Ud > 1) {
                        const {
                            Mf: n
                        } = this.xf(gs(t), this.Yd);
                        n < 30 && !this.tf && this.Sf(i, this.kf.yf), this.Cf()
                    }
                } else {
                    const i = this.gf(t);
                    if (++this.jd, this.Hd && this.jd > 1) {
                        const {
                            Mf: n
                        } = this.xf(gs(t), this.$d);
                        n < 5 && !this.Qd && this.Tf(i, this.kf.Pf), this.Rf()
                    }
                }
            }, this.Df = t, this.kf = i, this._n = n, this.Of()
        }
        S() {
            null !== this.if && (this.if(), this.if = null), null !== this.nf && (this.nf(), this.nf = null), null !== this.ef && (this.ef(), this.ef = null), null !== this.rf && (this.rf(), this.rf = null), null !== this.hf && (this.hf(), this.hf = null), null !== this.sf && (this.sf(), this.sf = null), this.Af(), this.Rf()
        }
        Bf(t) {
            this.ef && this.ef();
            const i = this.Vf.bind(this);
            if (this.ef = () => {
                this.Df.removeEventListener("mousemove", i)
            }, this.Df.addEventListener("mousemove", i), this.wf(t)) return;
            const n = this.gf(t);
            this.Tf(n, this.kf.zf), this.vf = !0
        }
        Rf() {
            null !== this.Hd && clearTimeout(this.Hd), this.jd = 0, this.Hd = null, this.$d = {
                nt: Number.NEGATIVE_INFINITY,
                st: Number.POSITIVE_INFINITY
            }
        }
        Cf() {
            null !== this.qd && clearTimeout(this.qd), this.Ud = 0, this.qd = null, this.Yd = {
                nt: Number.NEGATIVE_INFINITY,
                st: Number.POSITIVE_INFINITY
            }
        }
        Vf(t) {
            if (this.cf || null !== this.Gd) return;
            if (this.wf(t)) return;
            const i = this.gf(t);
            this.Tf(i, this.kf.Ef), this.vf = !0
        }
        If(t) {
            const i = xs(t.changedTouches, f(this.ff));
            if (null === i) return;
            if (this.df = Ms(t), null !== this.lf) return;
            if (this.uf) return;
            this._f = !0;
            const n = this.xf(gs(i), f(this.Gd)),
                {
                    Lf: s,
                    Nf: e,
                    Mf: r
                } = n;
            if (this.Jd || !(r < 5)) {
                if (!this.Jd) {
                    const t = .5 * s,
                        i = e >= t && !this._n.Ff(),
                        n = t > e && !this._n.Wf();
                    i || n || (this.uf = !0), this.Jd = !0, this.tf = !0, this.Af(), this.Cf()
                }
                if (!this.uf) {
                    const n = this.gf(t, i);
                    this.Sf(n, this.kf.jf), ws(t)
                }
            }
        }
        Hf(t) {
            if (0 !== t.button) return;
            const i = this.xf(gs(t), f(this.Zd)),
                {
                    Mf: n
                } = i;
            if (n >= 5 && (this.Qd = !0, this.Rf()), this.Qd) {
                const i = this.gf(t);
                this.Tf(i, this.kf.$f)
            }
        }
        xf(t, i) {
            const n = Math.abs(i.nt - t.nt),
                s = Math.abs(i.st - t.st);
            return {
                Lf: n,
                Nf: s,
                Mf: n + s
            }
        }
        Uf(t) {
            let i = xs(t.changedTouches, f(this.ff));
            if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
            this.ff = null, this.df = Ms(t), this.Af(), this.Gd = null, this.hf && (this.hf(), this.hf = null);
            const n = this.gf(t, i);
            if (this.Sf(n, this.kf.qf), ++this.Ud, this.qd && this.Ud > 1) {
                const {
                    Mf: t
                } = this.xf(gs(i), this.Yd);
                t < 30 && !this.tf && this.Sf(n, this.kf.yf), this.Cf()
            } else this.tf || (this.Sf(n, this.kf.Yf), this.kf.Yf && ws(t));
            0 === this.Ud && ws(t), 0 === t.touches.length && this.Kd && (this.Kd = !1, ws(t))
        }
        mf(t) {
            if (0 !== t.button) return;
            const i = this.gf(t);
            if (this.Zd = null, this.cf = !1, this.rf && (this.rf(), this.rf = null), rs()) {
                this.Df.ownerDocument.documentElement.removeEventListener("mouseleave", this.pf)
            }
            if (!this.wf(t))
                if (this.Tf(i, this.kf.Xf), ++this.jd, this.Hd && this.jd > 1) {
                    const {
                        Mf: n
                    } = this.xf(gs(t), this.$d);
                    n < 5 && !this.Qd && this.Tf(i, this.kf.Pf), this.Rf()
                } else this.Qd || this.Tf(i, this.kf.Kf)
        }
        Af() {
            null !== this.Xd && (clearTimeout(this.Xd), this.Xd = null)
        }
        Zf(t) {
            if (null !== this.ff) return;
            const i = t.changedTouches[0];
            this.ff = i.identifier, this.df = Ms(t);
            const n = this.Df.ownerDocument.documentElement;
            this.tf = !1, this.Jd = !1, this.uf = !1, this.Gd = gs(i), this.hf && (this.hf(), this.hf = null);
            {
                const i = this.If.bind(this),
                    s = this.Uf.bind(this);
                this.hf = () => {
                    n.removeEventListener("touchmove", i), n.removeEventListener("touchend", s)
                }, n.addEventListener("touchmove", i, {
                    passive: !1
                }), n.addEventListener("touchend", s, {
                    passive: !1
                }), this.Af(), this.Xd = setTimeout(this.Gf.bind(this, t), 240)
            }
            const s = this.gf(t, i);
            this.Sf(s, this.kf.Jf), this.qd || (this.Ud = 0, this.qd = setTimeout(this.Cf.bind(this), 500), this.Yd = gs(i))
        }
        Qf(t) {
            if (0 !== t.button) return;
            const i = this.Df.ownerDocument.documentElement;
            rs() && i.addEventListener("mouseleave", this.pf), this.Qd = !1, this.Zd = gs(t), this.rf && (this.rf(), this.rf = null);
            {
                const t = this.Hf.bind(this),
                    n = this.mf.bind(this);
                this.rf = () => {
                    i.removeEventListener("mousemove", t), i.removeEventListener("mouseup", n)
                }, i.addEventListener("mousemove", t), i.addEventListener("mouseup", n)
            }
            if (this.cf = !0, this.wf(t)) return;
            const n = this.gf(t);
            this.Tf(n, this.kf.tv), this.Hd || (this.jd = 0, this.Hd = setTimeout(this.Rf.bind(this), 500), this.$d = gs(t))
        }
        Of() {
            this.Df.addEventListener("mouseenter", this.Bf.bind(this)), this.Df.addEventListener("touchcancel", this.Af.bind(this));
            {
                const t = this.Df.ownerDocument,
                    i = t => {
                        this.kf.iv && (t.composed && this.Df.contains(t.composedPath()[0]) || t.target && this.Df.contains(t.target) || this.kf.iv())
                    };
                this.nf = () => {
                    t.removeEventListener("touchstart", i)
                }, this.if = () => {
                    t.removeEventListener("mousedown", i)
                }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, {
                    passive: !0
                })
            }
            hs() && (this.sf = () => {
                this.Df.removeEventListener("dblclick", this.bf)
            }, this.Df.addEventListener("dblclick", this.bf)), this.Df.addEventListener("mouseleave", this.nv.bind(this)), this.Df.addEventListener("touchstart", this.Zf.bind(this), {
                passive: !0
            }), ps(this.Df), this.Df.addEventListener("mousedown", this.Qf.bind(this)), this.sv(), this.Df.addEventListener("touchmove", (() => { }), {
                passive: !1
            })
        }
        sv() {
            void 0 === this.kf.ev && void 0 === this.kf.rv && void 0 === this.kf.hv || (this.Df.addEventListener("touchstart", (t => this.lv(t.touches)), {
                passive: !0
            }), this.Df.addEventListener("touchmove", (t => {
                if (2 === t.touches.length && null !== this.lf && void 0 !== this.kf.rv) {
                    const i = bs(t.touches[0], t.touches[1]) / this.af;
                    this.kf.rv(this.lf, i), ws(t)
                }
            }), {
                passive: !1
            }), this.Df.addEventListener("touchend", (t => {
                this.lv(t.touches)
            })))
        }
        lv(t) {
            1 === t.length && (this._f = !1), 2 !== t.length || this._f || this.Kd ? this.av() : this.ov(t)
        }
        ov(t) {
            const i = this.Df.getBoundingClientRect() || {
                left: 0,
                top: 0
            };
            this.lf = {
                nt: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
                st: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
            }, this.af = bs(t[0], t[1]), void 0 !== this.kf.ev && this.kf.ev(), this.Af()
        }
        av() {
            null !== this.lf && (this.lf = null, void 0 !== this.kf.hv && this.kf.hv())
        }
        nv(t) {
            if (this.ef && this.ef(), this.wf(t)) return;
            if (!this.vf) return;
            const i = this.gf(t);
            this.Tf(i, this.kf._v), this.vf = !hs()
        }
        Gf(t) {
            const i = xs(t.touches, f(this.ff));
            if (null === i) return;
            const n = this.gf(t, i);
            this.Sf(n, this.kf.uv), this.tf = !0, this.Kd = !0
        }
        wf(t) {
            return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : Ms(t) < this.df + 500
        }
        Sf(t, i) {
            i && i.call(this.kf, t)
        }
        Tf(t, i) {
            i && i.call(this.kf, t)
        }
        gf(t, i) {
            const n = i || t,
                s = this.Df.getBoundingClientRect() || {
                    left: 0,
                    top: 0
                };
            return {
                clientX: n.clientX,
                clientY: n.clientY,
                pageX: n.pageX,
                pageY: n.pageY,
                screenX: n.screenX,
                screenY: n.screenY,
                localX: n.clientX - s.left,
                localY: n.clientY - s.top,
                ctrlKey: t.ctrlKey,
                altKey: t.altKey,
                shiftKey: t.shiftKey,
                metaKey: t.metaKey,
                cv: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
                dv: t.type,
                fv: n.target,
                vv: t.view,
                pv: () => {
                    "touchstart" !== t.type && ws(t)
                }
            }
        }
    }

    function bs(t, i) {
        const n = t.clientX - i.clientX,
            s = t.clientY - i.clientY;
        return Math.sqrt(n * n + s * s)
    }

    function ws(t) {
        t.cancelable && t.preventDefault()
    }

    function gs(t) {
        return {
            nt: t.pageX,
            st: t.pageY
        }
    }

    function Ms(t) {
        return t.timeStamp || performance.now()
    }

    function xs(t, i) {
        for (let n = 0; n < t.length; ++n)
            if (t[n].identifier === i) return t[n];
        return null
    }

    function Ss(t) {
        return {
            Ec: t.Ec,
            mv: {
                mr: t.bv.externalId
            },
            wv: t.bv.cursorStyle
        }
    }

    function ys(t, i, n) {
        for (const s of t) {
            const t = s.gt();
            if (null !== t && t.pr) {
                const e = t.pr(i, n);
                if (null !== e) return {
                    vv: s,
                    mv: e
                }
            }
        }
        return null
    }

    function ks(t, i) {
        return n => {
            var s, e, r, h;
            return (null !== (e = null === (s = n.Dt()) || void 0 === s ? void 0 : s.xa()) && void 0 !== e ? e : "") !== i ? [] : null !== (h = null === (r = n.la) || void 0 === r ? void 0 : r.call(n, t)) && void 0 !== h ? h : []
        }
    }
    class Cs {
        constructor(t, i, n, s) {
            this.Ei = null, this.gv = null, this.Mv = !1, this.xv = new Jt(200), this.Zr = null, this.Sv = 0, this.yv = !1, this.kv = () => {
                this.yv || this.Qi.Cv().$t().Nh()
            }, this.Tv = () => {
                this.yv || this.Qi.Cv().$t().Nh()
            }, this.Qi = t, this._n = i, this.mo = i.layout, this.kc = n, this.Pv = "left" === s, this.Rv = ks("normal", s), this.Dv = ks("top", s), this.Ov = ks("bottom", s), this.Av = document.createElement("div"), this.Av.style.height = "100%", this.Av.style.overflow = "hidden", this.Av.style.width = "25px", this.Av.style.left = "0", this.Av.style.position = "relative", this.Bv = us(this.Av, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.kv);
            const e = this.Bv.canvasElement;
            e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Vv = us(this.Av, Gn({
                width: 16,
                height: 16
            })), this.Vv.subscribeSuggestedBitmapSizeChanged(this.Tv);
            const r = this.Vv.canvasElement;
            r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0";
            const h = {
                tv: this.zv.bind(this),
                Jf: this.zv.bind(this),
                $f: this.Ev.bind(this),
                jf: this.Ev.bind(this),
                iv: this.Iv.bind(this),
                Xf: this.Lv.bind(this),
                qf: this.Lv.bind(this),
                Pf: this.Nv.bind(this),
                yf: this.Nv.bind(this),
                zf: this.Fv.bind(this),
                _v: this.Wv.bind(this)
            };
            this.jv = new ms(this.Vv.canvasElement, h, {
                Ff: () => !this._n.handleScroll.vertTouchDrag,
                Wf: () => !0
            })
        }
        S() {
            this.jv.S(), this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.Tv), cs(this.Vv.canvasElement), this.Vv.dispose(), this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.kv), cs(this.Bv.canvasElement), this.Bv.dispose(), null !== this.Ei && this.Ei.$o().p(this), this.Ei = null
        }
        Hv() {
            return this.Av
        }
        P() {
            return this.mo.fontSize
        }
        $v() {
            const t = this.kc.W();
            return this.Zr !== t.R && (this.xv.Qe(), this.Zr = t.R), t
        }
        Uv() {
            if (null === this.Ei) return 0;
            let t = 0;
            const i = this.$v(),
                n = f(this.Bv.canvasElement.getContext("2d"));
            n.save();
            const s = this.Ei.Ia();
            n.font = this.qv(), s.length > 0 && (t = Math.max(this.xv.Mi(n, s[0].Za), this.xv.Mi(n, s[s.length - 1].Za)));
            const e = this.Yv();
            for (let i = e.length; i--;) {
                const s = this.xv.Mi(n, e[i].Zt());
                s > t && (t = s)
            }
            const r = this.Ei.Ct();
            if (null !== r && null !== this.gv) {
                const i = this.Ei.fn(1, r),
                    s = this.Ei.fn(this.gv.height - 2, r);
                t = Math.max(t, this.xv.Mi(n, this.Ei.Ni(Math.floor(Math.min(i, s)) + .11111111111111, r)), this.xv.Mi(n, this.Ei.Ni(Math.ceil(Math.max(i, s)) - .11111111111111, r)))
            }
            n.restore();
            const h = t || 34;
            return ls(Math.ceil(i.C + i.T + i.V + i.I + 5 + h))
        }
        Xv(t) {
            null !== this.gv && Jn(this.gv, t) || (this.gv = t, this.yv = !0, this.Bv.resizeCanvasElement(t), this.Vv.resizeCanvasElement(t), this.yv = !1, this.Av.style.width = `${t.width}px`, this.Av.style.height = `${t.height}px`)
        }
        Kv() {
            return f(this.gv).width
        }
        Zi(t) {
            this.Ei !== t && (null !== this.Ei && this.Ei.$o().p(this), this.Ei = t, t.$o().l(this.ao.bind(this), this))
        }
        Dt() {
            return this.Ei
        }
        Qe() {
            const t = this.Qi.Zv();
            this.Qi.Cv().$t().A_(t, f(this.Dt()))
        }
        Gv(t) {
            if (null === this.gv) return;
            if (1 !== t) {
                this.Jv(), this.Bv.applySuggestedBitmapSize();
                const t = ss(this.Bv);
                null !== t && (t.useBitmapCoordinateSpace((t => {
                    this.Qv(t), this.Ae(t)
                })), this.Qi.tp(t, this.Ov), this.ip(t), this.Qi.tp(t, this.Rv), this.np(t))
            }
            this.Vv.applySuggestedBitmapSize();
            const i = ss(this.Vv);
            null !== i && (i.useBitmapCoordinateSpace((({
                context: t,
                bitmapSize: i
            }) => {
                t.clearRect(0, 0, i.width, i.height)
            })), this.sp(i), this.Qi.tp(i, this.Dv))
        }
        ep() {
            return this.Bv.bitmapSize
        }
        rp(t, i, n) {
            const s = this.ep();
            s.width > 0 && s.height > 0 && t.drawImage(this.Bv.canvasElement, i, n)
        }
        bt() {
            var t;
            null === (t = this.Ei) || void 0 === t || t.Ia()
        }
        zv(t) {
            if (null === this.Ei || this.Ei.Li() || !this._n.handleScale.axisPressedMouseMove.price) return;
            const i = this.Qi.Cv().$t(),
                n = this.Qi.Zv();
            this.Mv = !0, i.k_(n, this.Ei, t.localY)
        }
        Ev(t) {
            if (null === this.Ei || !this._n.handleScale.axisPressedMouseMove.price) return;
            const i = this.Qi.Cv().$t(),
                n = this.Qi.Zv(),
                s = this.Ei;
            i.C_(n, s, t.localY)
        }
        Iv() {
            if (null === this.Ei || !this._n.handleScale.axisPressedMouseMove.price) return;
            const t = this.Qi.Cv().$t(),
                i = this.Qi.Zv(),
                n = this.Ei;
            this.Mv && (this.Mv = !1, t.T_(i, n))
        }
        Lv(t) {
            if (null === this.Ei || !this._n.handleScale.axisPressedMouseMove.price) return;
            const i = this.Qi.Cv().$t(),
                n = this.Qi.Zv();
            this.Mv = !1, i.T_(n, this.Ei)
        }
        Nv(t) {
            this._n.handleScale.axisDoubleClickReset.price && this.Qe()
        }
        Fv(t) {
            if (null === this.Ei) return;
            !this.Qi.Cv().$t().W().handleScale.axisPressedMouseMove.price || this.Ei.fh() || this.Ei.Co() || this.hp(1)
        }
        Wv(t) {
            this.hp(0)
        }
        Yv() {
            const t = [],
                i = null === this.Ei ? void 0 : this.Ei;
            return (n => {
                for (let s = 0; s < n.length; ++s) {
                    const e = n[s].Tn(this.Qi.Zv(), i);
                    for (let i = 0; i < e.length; i++) t.push(e[i])
                }
            })(this.Qi.Zv().No()), t
        }
        Qv({
            context: t,
            bitmapSize: i
        }) {
            const {
                width: n,
                height: s
            } = i, e = this.Qi.Zv().$t(), r = e.q(), h = e._d();
            r === h ? q(t, 0, 0, n, s, r) : Z(t, 0, 0, n, s, r, h)
        }
        Ae({
            context: t,
            bitmapSize: i,
            horizontalPixelRatio: n
        }) {
            if (null === this.gv || null === this.Ei || !this.Ei.W().borderVisible) return;
            t.fillStyle = this.Ei.W().borderColor;
            const s = Math.max(1, Math.floor(this.$v().C * n));
            let e;
            e = this.Pv ? i.width - s : 0, t.fillRect(e, 0, s, i.height)
        }
        ip(t) {
            if (null === this.gv || null === this.Ei) return;
            const i = this.Ei.Ia(),
                n = this.Ei.W(),
                s = this.$v(),
                e = this.Pv ? this.gv.width - s.T : 0;
            n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace((({
                context: t,
                horizontalPixelRatio: r,
                verticalPixelRatio: h
            }) => {
                t.fillStyle = n.borderColor;
                const l = Math.max(1, Math.floor(h)),
                    a = Math.floor(.5 * h),
                    o = Math.round(s.T * r);
                t.beginPath();
                for (const n of i) t.rect(Math.floor(e * r), Math.round(n.Aa * h) - a, o, l);
                t.fill()
            })), t.useMediaCoordinateSpace((({
                context: t
            }) => {
                var r;
                t.font = this.qv(), t.fillStyle = null !== (r = n.textColor) && void 0 !== r ? r : this.mo.textColor, t.textAlign = this.Pv ? "right" : "left", t.textBaseline = "middle";
                const h = this.Pv ? Math.round(e - s.V) : Math.round(e + s.T + s.V),
                    l = i.map((i => this.xv.gi(t, i.Za)));
                for (let n = i.length; n--;) {
                    const s = i[n];
                    t.fillText(s.Za, h, s.Aa + l[n])
                }
            }))
        }
        Jv() {
            if (null === this.gv || null === this.Ei) return;
            let t = this.gv.height / 2;
            const i = [],
                n = this.Ei.No().slice(),
                s = this.Qi.Zv(),
                e = this.$v();
            this.Ei === s.cr() && this.Qi.Zv().No().forEach((t => {
                s.ur(t) && n.push(t)
            }));
            const r = this.Ei.Ta()[0],
                h = this.Ei;
            n.forEach((n => {
                const e = n.Tn(s, h);
                e.forEach((t => {
                    t.Oi(null), t.Ai() && i.push(t)
                })), r === n && e.length > 0 && (t = e[0].Si())
            })), i.forEach((t => t.Oi(t.Si())));
            this.Ei.W().alignLabels && this.lp(i, e, t)
        }
        lp(t, i, n) {
            if (null === this.gv) return;
            const s = t.filter((t => t.Si() <= n)),
                e = t.filter((t => t.Si() > n));
            s.sort(((t, i) => i.Si() - t.Si())), s.length && e.length && e.push(s[0]), e.sort(((t, i) => t.Si() - i.Si()));
            for (const n of t) {
                const t = Math.floor(n.Vt(i) / 2),
                    s = n.Si();
                s > -t && s < t && n.Oi(t), s > this.gv.height - t && s < this.gv.height + t && n.Oi(this.gv.height - t)
            }
            for (let t = 1; t < s.length; t++) {
                const n = s[t],
                    e = s[t - 1],
                    r = e.Vt(i, !1),
                    h = n.Si(),
                    l = e.Di();
                h > l - r && n.Oi(l - r)
            }
            for (let t = 1; t < e.length; t++) {
                const n = e[t],
                    s = e[t - 1],
                    r = s.Vt(i, !0),
                    h = n.Si(),
                    l = s.Di();
                h < l + r && n.Oi(l + r)
            }
        }
        np(t) {
            if (null === this.gv) return;
            const i = this.Yv(),
                n = this.$v(),
                s = this.Pv ? "right" : "left";
            i.forEach((i => {
                if (i.Bi()) {
                    i.gt(f(this.Ei)).K(t, n, this.xv, s)
                }
            }))
        }
        sp(t) {
            if (null === this.gv || null === this.Ei) return;
            const i = this.Qi.Cv().$t(),
                n = [],
                s = this.Qi.Zv(),
                e = i.Wc().Tn(s, this.Ei);
            e.length && n.push(e);
            const r = this.$v(),
                h = this.Pv ? "right" : "left";
            n.forEach((i => {
                i.forEach((i => {
                    i.gt(f(this.Ei)).K(t, r, this.xv, h)
                }))
            }))
        }
        hp(t) {
            this.Av.style.cursor = 1 === t ? "ns-resize" : "default"
        }
        ao() {
            const t = this.Uv();
            this.Sv < t && this.Qi.Cv().$t().$l(), this.Sv = t
        }
        qv() {
            return z(this.mo.fontSize, this.mo.fontFamily)
        }
    }

    function Ts(t, i) {
        var n, s;
        return null !== (s = null === (n = t.ra) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    function Ps(t, i) {
        var n, s;
        return null !== (s = null === (n = t.Cn) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    function Rs(t, i) {
        var n, s;
        return null !== (s = null === (n = t.Gi) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    function Ds(t, i) {
        var n, s;
        return null !== (s = null === (n = t.na) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }
    class Os {
        constructor(t, i) {
            this.gv = Gn({
                width: 0,
                height: 0
            }), this.ap = null, this.op = null, this._p = null, this.up = !1, this.cp = new k, this.dp = new k, this.fp = 0, this.vp = !1, this.pp = null, this.mp = !1, this.bp = null, this.wp = null, this.yv = !1, this.kv = () => {
                this.yv || null === this.gp || this.Hi().Nh()
            }, this.Tv = () => {
                this.yv || null === this.gp || this.Hi().Nh()
            }, this.Mp = t, this.gp = i, this.gp.z_().l(this.xp.bind(this), this, !0), this.Sp = document.createElement("td"), this.Sp.style.padding = "0", this.Sp.style.position = "relative";
            const n = document.createElement("div");
            n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.yp = document.createElement("td"), this.yp.style.padding = "0", this.kp = document.createElement("td"), this.kp.style.padding = "0", this.Sp.appendChild(n), this.Bv = us(n, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.kv);
            const s = this.Bv.canvasElement;
            s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Vv = us(n, Gn({
                width: 16,
                height: 16
            })), this.Vv.subscribeSuggestedBitmapSizeChanged(this.Tv);
            const e = this.Vv.canvasElement;
            e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.Cp = document.createElement("tr"), this.Cp.appendChild(this.yp), this.Cp.appendChild(this.Sp), this.Cp.appendChild(this.kp), this.Tp(), this.jv = new ms(this.Vv.canvasElement, this, {
                Ff: () => null === this.pp && !this.Mp.W().handleScroll.vertTouchDrag,
                Wf: () => null === this.pp && !this.Mp.W().handleScroll.horzTouchDrag
            })
        }
        S() {
            null !== this.ap && this.ap.S(), null !== this.op && this.op.S(), this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.Tv), cs(this.Vv.canvasElement), this.Vv.dispose(), this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.kv), cs(this.Bv.canvasElement), this.Bv.dispose(), null !== this.gp && this.gp.z_().p(this), this.jv.S()
        }
        Zv() {
            return f(this.gp)
        }
        Pp(t) {
            null !== this.gp && this.gp.z_().p(this), this.gp = t, null !== this.gp && this.gp.z_().l(Os.prototype.xp.bind(this), this, !0), this.Tp()
        }
        Cv() {
            return this.Mp
        }
        Hv() {
            return this.Cp
        }
        Tp() {
            if (null !== this.gp && (this.Rp(), 0 !== this.Hi().wt().length)) {
                if (null !== this.ap) {
                    const t = this.gp.S_();
                    this.ap.Zi(f(t))
                }
                if (null !== this.op) {
                    const t = this.gp.y_();
                    this.op.Zi(f(t))
                }
            }
        }
        Dp() {
            null !== this.ap && this.ap.bt(), null !== this.op && this.op.bt()
        }
        v_() {
            return null !== this.gp ? this.gp.v_() : 0
        }
        p_(t) {
            this.gp && this.gp.p_(t)
        }
        zf(t) {
            if (!this.gp) return;
            this.Op();
            const i = t.localX,
                n = t.localY;
            this.Ap(i, n, t)
        }
        tv(t) {
            this.Op(), this.Bp(), this.Ap(t.localX, t.localY, t)
        }
        Ef(t) {
            var i;
            if (!this.gp) return;
            this.Op();
            const n = t.localX,
                s = t.localY;
            this.Ap(n, s, t);
            const e = this.pr(n, s);
            this.Mp.Vp(null !== (i = null == e ? void 0 : e.wv) && void 0 !== i ? i : null), this.Hi().zc(e && {
                Ec: e.Ec,
                mv: e.mv
            })
        }
        Kf(t) {
            null !== this.gp && (this.Op(), this.zp(t))
        }
        Pf(t) {
            null !== this.gp && this.Ep(this.dp, t)
        }
        yf(t) {
            this.Pf(t)
        }
        $f(t) {
            this.Op(), this.Ip(t), this.Ap(t.localX, t.localY, t)
        }
        Xf(t) {
            null !== this.gp && (this.Op(), this.vp = !1, this.Lp(t))
        }
        Yf(t) {
            null !== this.gp && this.zp(t)
        }
        uv(t) {
            if (this.vp = !0, null === this.pp) {
                const i = {
                    x: t.localX,
                    y: t.localY
                };
                this.Np(i, i, t)
            }
        }
        _v(t) {
            null !== this.gp && (this.Op(), this.gp.$t().zc(null), this.Fp())
        }
        Wp() {
            return this.cp
        }
        jp() {
            return this.dp
        }
        ev() {
            this.fp = 1, this.Hi().Hn()
        }
        rv(t, i) {
            if (!this.Mp.W().handleScale.pinch) return;
            const n = 5 * (i - this.fp);
            this.fp = i, this.Hi().qc(t.nt, n)
        }
        Jf(t) {
            this.vp = !1, this.mp = null !== this.pp, this.Bp();
            const i = this.Hi().Wc();
            null !== this.pp && i.kt() && (this.bp = {
                x: i.Yt(),
                y: i.Xt()
            }, this.pp = {
                x: t.localX,
                y: t.localY
            })
        }
        jf(t) {
            if (null === this.gp) return;
            const i = t.localX,
                n = t.localY;
            if (null === this.pp) this.Ip(t);
            else {
                this.mp = !1;
                const s = f(this.bp),
                    e = s.x + (i - this.pp.x),
                    r = s.y + (n - this.pp.y);
                this.Ap(e, r, t)
            }
        }
        qf(t) {
            0 === this.Cv().W().trackingMode.exitMode && (this.mp = !0), this.Hp(), this.Lp(t)
        }
        pr(t, i) {
            const n = this.gp;
            return null === n ? null : function (t, i, n) {
                const s = t.No(),
                    e = function (t, i, n) {
                        var s, e;
                        let r, h;
                        for (const o of t) {
                            const t = null !== (e = null === (s = o.oa) || void 0 === s ? void 0 : s.call(o, i, n)) && void 0 !== e ? e : [];
                            for (const i of t) l = i.zOrder, (!(a = null == r ? void 0 : r.zOrder) || "top" === l && "top" !== a || "normal" === l && "bottom" === a) && (r = i, h = o)
                        }
                        var l, a;
                        return r && h ? {
                            bv: r,
                            Ec: h
                        } : null
                    }(s, i, n);
                if ("top" === (null == e ? void 0 : e.bv.zOrder)) return Ss(e);
                for (const r of s) {
                    if (e && e.Ec === r && "bottom" !== e.bv.zOrder && !e.bv.isBackground) return Ss(e);
                    const s = ys(r.Cn(t), i, n);
                    if (null !== s) return {
                        Ec: r,
                        vv: s.vv,
                        mv: s.mv
                    };
                    if (e && e.Ec === r && "bottom" !== e.bv.zOrder && e.bv.isBackground) return Ss(e)
                }
                return (null == e ? void 0 : e.bv) ? Ss(e) : null
            }(n, t, i)
        }
        $p(t, i) {
            f("left" === i ? this.ap : this.op).Xv(Gn({
                width: t,
                height: this.gv.height
            }))
        }
        Up() {
            return this.gv
        }
        Xv(t) {
            Jn(this.gv, t) || (this.gv = t, this.yv = !0, this.Bv.resizeCanvasElement(t), this.Vv.resizeCanvasElement(t), this.yv = !1, this.Sp.style.width = t.width + "px", this.Sp.style.height = t.height + "px")
        }
        qp() {
            const t = f(this.gp);
            t.x_(t.S_()), t.x_(t.y_());
            for (const i of t.Ta())
                if (t.ur(i)) {
                    const n = i.Dt();
                    null !== n && t.x_(n), i.Rn()
                }
        }
        ep() {
            return this.Bv.bitmapSize
        }
        rp(t, i, n) {
            const s = this.ep();
            s.width > 0 && s.height > 0 && t.drawImage(this.Bv.canvasElement, i, n)
        }
        Gv(t) {
            if (0 === t) return;
            if (null === this.gp) return;
            if (t > 1 && this.qp(), null !== this.ap && this.ap.Gv(t), null !== this.op && this.op.Gv(t), 1 !== t) {
                this.Bv.applySuggestedBitmapSize();
                const t = ss(this.Bv);
                null !== t && (t.useBitmapCoordinateSpace((t => {
                    this.Qv(t)
                })), this.gp && (this.Yp(t, Ts), this.Xp(t), this.Kp(t), this.Yp(t, Ps), this.Yp(t, Rs)))
            }
            this.Vv.applySuggestedBitmapSize();
            const i = ss(this.Vv);
            null !== i && (i.useBitmapCoordinateSpace((({
                context: t,
                bitmapSize: i
            }) => {
                t.clearRect(0, 0, i.width, i.height)
            })), this.Zp(i), this.Yp(i, Ds))
        }
        Gp() {
            return this.ap
        }
        Jp() {
            return this.op
        }
        tp(t, i) {
            this.Yp(t, i)
        }
        xp() {
            null !== this.gp && this.gp.z_().p(this), this.gp = null
        }
        zp(t) {
            this.Ep(this.cp, t)
        }
        Ep(t, i) {
            const n = i.localX,
                s = i.localY;
            t.M() && t.m(this.Hi().St().Bu(n), {
                x: n,
                y: s
            }, i)
        }
        Qv({
            context: t,
            bitmapSize: i
        }) {
            const {
                width: n,
                height: s
            } = i, e = this.Hi(), r = e.q(), h = e._d();
            r === h ? q(t, 0, 0, n, s, h) : Z(t, 0, 0, n, s, r, h)
        }
        Xp(t) {
            const i = f(this.gp).E_().Fh().gt();
            null !== i && i.K(t, !1)
        }
        Kp(t) {
            const i = this.Hi().Fc();
            this.Qp(t, Ps, ds, i), this.Qp(t, Ps, fs, i)
        }
        Zp(t) {
            this.Qp(t, Ps, fs, this.Hi().Wc())
        }
        Yp(t, i) {
            const n = f(this.gp).No();
            for (const s of n) this.Qp(t, i, ds, s);
            for (const s of n) this.Qp(t, i, fs, s)
        }
        Qp(t, i, n, s) {
            const e = f(this.gp),
                r = e.$t().Vc(),
                h = null !== r && r.Ec === s,
                l = null !== r && h && void 0 !== r.mv ? r.mv.br : void 0;
            vs(i, (i => n(i, t, h, l)), s, e)
        }
        Rp() {
            if (null === this.gp) return;
            const t = this.Mp,
                i = this.gp.S_().W().visible,
                n = this.gp.y_().W().visible;
            i || null === this.ap || (this.yp.removeChild(this.ap.Hv()), this.ap.S(), this.ap = null), n || null === this.op || (this.kp.removeChild(this.op.Hv()), this.op.S(), this.op = null);
            const s = t.$t().ed();
            i && null === this.ap && (this.ap = new Cs(this, t.W(), s, "left"), this.yp.appendChild(this.ap.Hv())), n && null === this.op && (this.op = new Cs(this, t.W(), s, "right"), this.kp.appendChild(this.op.Hv()))
        }
        tm(t) {
            return t.cv && this.vp || null !== this.pp
        }
        im(t) {
            return Math.max(0, Math.min(t, this.gv.width - 1))
        }
        nm(t) {
            return Math.max(0, Math.min(t, this.gv.height - 1))
        }
        Ap(t, i, n) {
            this.Hi().Qc(this.im(t), this.nm(i), n, f(this.gp))
        }
        Fp() {
            this.Hi().nd()
        }
        Hp() {
            this.mp && (this.pp = null, this.Fp())
        }
        Np(t, i, n) {
            this.pp = t, this.mp = !1, this.Ap(i.x, i.y, n);
            const s = this.Hi().Wc();
            this.bp = {
                x: s.Yt(),
                y: s.Xt()
            }
        }
        Hi() {
            return this.Mp.$t()
        }
        Lp(t) {
            if (!this.up) return;
            const i = this.Hi(),
                n = this.Zv();
            if (i.D_(n, n.dn()), this._p = null, this.up = !1, i.Zc(), null !== this.wp) {
                const t = performance.now(),
                    n = i.St();
                this.wp.Pr(n.Iu(), t), this.wp.Yu(t) || i.qn(this.wp)
            }
        }
        Op() {
            this.pp = null
        }
        Bp() {
            if (!this.gp) return;
            if (this.Hi().Hn(), document.activeElement !== document.body && document.activeElement !== document.documentElement) f(document.activeElement).blur();
            else {
                const t = document.getSelection();
                null !== t && t.removeAllRanges()
            } !this.gp.dn().Li() && this.Hi().St().Li()
        }
        Ip(t) {
            if (null === this.gp) return;
            const i = this.Hi(),
                n = i.St();
            if (n.Li()) return;
            const s = this.Mp.W(),
                e = s.handleScroll,
                r = s.kineticScroll;
            if ((!e.pressedMouseMove || t.cv) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.cv)) return;
            const h = this.gp.dn(),
                l = performance.now();
            if (null !== this._p || this.tm(t) || (this._p = {
                x: t.clientX,
                y: t.clientY,
                kd: l,
                sm: t.localX,
                rm: t.localY
            }), null !== this._p && !this.up && (this._p.x !== t.clientX || this._p.y !== t.clientY)) {
                if (t.cv && r.touch || !t.cv && r.mouse) {
                    const t = n.ee();
                    this.wp = new _s(.2 / t, 7 / t, .997, 15 / t), this.wp.Fd(n.Iu(), this._p.kd)
                } else this.wp = null;
                h.Li() || i.P_(this.gp, h, t.localY), i.Xc(t.localX), this.up = !0
            }
            this.up && (h.Li() || i.R_(this.gp, h, t.localY), i.Kc(t.localX), null !== this.wp && this.wp.Fd(n.Iu(), l))
        }
    }
    class As {
        constructor(t, i, n, s, e) {
            this.ft = !0, this.gv = Gn({
                width: 0,
                height: 0
            }), this.kv = () => this.Gv(3), this.Pv = "left" === t, this.kc = n.ed, this._n = i, this.hm = s, this.lm = e, this.Av = document.createElement("div"), this.Av.style.width = "25px", this.Av.style.height = "100%", this.Av.style.overflow = "hidden", this.Bv = us(this.Av, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.kv)
        }
        S() {
            this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.kv), cs(this.Bv.canvasElement), this.Bv.dispose()
        }
        Hv() {
            return this.Av
        }
        Up() {
            return this.gv
        }
        Xv(t) {
            Jn(this.gv, t) || (this.gv = t, this.Bv.resizeCanvasElement(t), this.Av.style.width = `${t.width}px`, this.Av.style.height = `${t.height}px`, this.ft = !0)
        }
        Gv(t) {
            if (t < 3 && !this.ft) return;
            if (0 === this.gv.width || 0 === this.gv.height) return;
            this.ft = !1, this.Bv.applySuggestedBitmapSize();
            const i = ss(this.Bv);
            null !== i && i.useBitmapCoordinateSpace((t => {
                this.Qv(t), this.Ae(t)
            }))
        }
        ep() {
            return this.Bv.bitmapSize
        }
        rp(t, i, n) {
            const s = this.ep();
            s.width > 0 && s.height > 0 && t.drawImage(this.Bv.canvasElement, i, n)
        }
        Ae({
            context: t,
            bitmapSize: i,
            horizontalPixelRatio: n,
            verticalPixelRatio: s
        }) {
            if (!this.hm()) return;
            t.fillStyle = this._n.timeScale.borderColor;
            const e = Math.floor(this.kc.W().C * n),
                r = Math.floor(this.kc.W().C * s),
                h = this.Pv ? i.width - e : 0;
            t.fillRect(h, 0, e, r)
        }
        Qv({
            context: t,
            bitmapSize: i
        }) {
            q(t, 0, 0, i.width, i.height, this.lm())
        }
    }

    function Bs(t) {
        return i => {
            var n, s;
            return null !== (s = null === (n = i.aa) || void 0 === n ? void 0 : n.call(i, t)) && void 0 !== s ? s : []
        }
    }
    const Vs = Bs("normal"),
        zs = Bs("top"),
        Es = Bs("bottom");
    class Is {
        constructor(t, i) {
            this.am = null, this.om = null, this.k = null, this._m = !1, this.gv = Gn({
                width: 0,
                height: 0
            }), this.um = new k, this.xv = new Jt(5), this.yv = !1, this.kv = () => {
                this.yv || this.Mp.$t().Nh()
            }, this.Tv = () => {
                this.yv || this.Mp.$t().Nh()
            }, this.Mp = t, this.N_ = i, this._n = t.W().layout, this.dm = document.createElement("tr"), this.fm = document.createElement("td"), this.fm.style.padding = "0", this.vm = document.createElement("td"), this.vm.style.padding = "0", this.Av = document.createElement("td"), this.Av.style.height = "25px", this.Av.style.padding = "0", this.pm = document.createElement("div"), this.pm.style.width = "100%", this.pm.style.height = "100%", this.pm.style.position = "relative", this.pm.style.overflow = "hidden", this.Av.appendChild(this.pm), this.Bv = us(this.pm, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.kv);
            const n = this.Bv.canvasElement;
            n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Vv = us(this.pm, Gn({
                width: 16,
                height: 16
            })), this.Vv.subscribeSuggestedBitmapSizeChanged(this.Tv);
            const s = this.Vv.canvasElement;
            s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.dm.appendChild(this.fm), this.dm.appendChild(this.Av), this.dm.appendChild(this.vm), this.bm(), this.Mp.$t().f_().l(this.bm.bind(this), this), this.jv = new ms(this.Vv.canvasElement, this, {
                Ff: () => !0,
                Wf: () => !this.Mp.W().handleScroll.horzTouchDrag
            })
        }
        S() {
            this.jv.S(), null !== this.am && this.am.S(), null !== this.om && this.om.S(), this.Vv.unsubscribeSuggestedBitmapSizeChanged(this.Tv), cs(this.Vv.canvasElement), this.Vv.dispose(), this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.kv), cs(this.Bv.canvasElement), this.Bv.dispose()
        }
        Hv() {
            return this.dm
        }
        wm() {
            return this.am
        }
        gm() {
            return this.om
        }
        tv(t) {
            if (this._m) return;
            this._m = !0;
            const i = this.Mp.$t();
            !i.St().Li() && this.Mp.W().handleScale.axisPressedMouseMove.time && i.Uc(t.localX)
        }
        Jf(t) {
            this.tv(t)
        }
        iv() {
            const t = this.Mp.$t();
            !t.St().Li() && this._m && (this._m = !1, this.Mp.W().handleScale.axisPressedMouseMove.time && t.Jc())
        }
        $f(t) {
            const i = this.Mp.$t();
            !i.St().Li() && this.Mp.W().handleScale.axisPressedMouseMove.time && i.Gc(t.localX)
        }
        jf(t) {
            this.$f(t)
        }
        Xf() {
            this._m = !1;
            const t = this.Mp.$t();
            t.St().Li() && !this.Mp.W().handleScale.axisPressedMouseMove.time || t.Jc()
        }
        qf() {
            this.Xf()
        }
        Pf() {
            this.Mp.W().handleScale.axisDoubleClickReset.time && this.Mp.$t().Xn()
        }
        yf() {
            this.Pf()
        }
        zf() {
            this.Mp.$t().W().handleScale.axisPressedMouseMove.time && this.hp(1)
        }
        _v() {
            this.hp(0)
        }
        Up() {
            return this.gv
        }
        Mm() {
            return this.um
        }
        xm(t, i, n) {
            Jn(this.gv, t) || (this.gv = t, this.yv = !0, this.Bv.resizeCanvasElement(t), this.Vv.resizeCanvasElement(t), this.yv = !1, this.Av.style.width = `${t.width}px`, this.Av.style.height = `${t.height}px`, this.um.m(t)), null !== this.am && this.am.Xv(Gn({
                width: i,
                height: t.height
            })), null !== this.om && this.om.Xv(Gn({
                width: n,
                height: t.height
            }))
        }
        Sm() {
            const t = this.ym();
            return Math.ceil(t.C + t.T + t.P + t.L + t.B + t.km)
        }
        bt() {
            this.Mp.$t().St().Ia()
        }
        ep() {
            return this.Bv.bitmapSize
        }
        rp(t, i, n) {
            const s = this.ep();
            s.width > 0 && s.height > 0 && t.drawImage(this.Bv.canvasElement, i, n)
        }
        Gv(t) {
            if (0 === t) return;
            if (1 !== t) {
                this.Bv.applySuggestedBitmapSize();
                const i = ss(this.Bv);
                null !== i && (i.useBitmapCoordinateSpace((t => {
                    this.Qv(t), this.Ae(t), this.Cm(i, Es)
                })), this.ip(i), this.Cm(i, Vs)), null !== this.am && this.am.Gv(t), null !== this.om && this.om.Gv(t)
            }
            this.Vv.applySuggestedBitmapSize();
            const i = ss(this.Vv);
            null !== i && (i.useBitmapCoordinateSpace((({
                context: t,
                bitmapSize: i
            }) => {
                t.clearRect(0, 0, i.width, i.height)
            })), this.Tm([...this.Mp.$t().wt(), this.Mp.$t().Wc()], i), this.Cm(i, zs))
        }
        Cm(t, i) {
            const n = this.Mp.$t().wt();
            for (const s of n) vs(i, (i => ds(i, t, !1, void 0)), s, void 0);
            for (const s of n) vs(i, (i => fs(i, t, !1, void 0)), s, void 0)
        }
        Qv({
            context: t,
            bitmapSize: i
        }) {
            q(t, 0, 0, i.width, i.height, this.Mp.$t()._d())
        }
        Ae({
            context: t,
            bitmapSize: i,
            verticalPixelRatio: n
        }) {
            if (this.Mp.W().timeScale.borderVisible) {
                t.fillStyle = this.Pm();
                const s = Math.max(1, Math.floor(this.ym().C * n));
                t.fillRect(0, 0, i.width, s)
            }
        }
        ip(t) {
            const i = this.Mp.$t().St(),
                n = i.Ia();
            if (!n || 0 === n.length) return;
            const s = this.N_.maxTickMarkWeight(n),
                e = this.ym(),
                r = i.W();
            r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace((({
                context: t,
                horizontalPixelRatio: i,
                verticalPixelRatio: s
            }) => {
                t.strokeStyle = this.Pm(), t.fillStyle = this.Pm();
                const r = Math.max(1, Math.floor(i)),
                    h = Math.floor(.5 * i);
                t.beginPath();
                const l = Math.round(e.T * s);
                for (let s = n.length; s--;) {
                    const e = Math.round(n[s].coord * i);
                    t.rect(e - h, 0, r, l)
                }
                t.fill()
            })), t.useMediaCoordinateSpace((({
                context: t
            }) => {
                const i = e.C + e.T + e.L + e.P / 2;
                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.$(), t.font = this.qv();
                for (const e of n)
                    if (e.weight < s) {
                        const n = e.needAlignCoordinate ? this.Rm(t, e.coord, e.label) : e.coord;
                        t.fillText(e.label, n, i)
                    } this.Mp.W().timeScale.allowBoldLabels && (t.font = this.Dm());
                for (const e of n)
                    if (e.weight >= s) {
                        const n = e.needAlignCoordinate ? this.Rm(t, e.coord, e.label) : e.coord;
                        t.fillText(e.label, n, i)
                    }
            }))
        }
        Rm(t, i, n) {
            const s = this.xv.Mi(t, n),
                e = s / 2,
                r = Math.floor(i - e) + .5;
            return r < 0 ? i += Math.abs(0 - r) : r + s > this.gv.width && (i -= Math.abs(this.gv.width - (r + s))), i
        }
        Tm(t, i) {
            const n = this.ym();
            for (const s of t)
                for (const t of s.Ji()) t.gt().K(i, n)
        }
        Pm() {
            return this.Mp.W().timeScale.borderColor
        }
        $() {
            return this._n.textColor
        }
        j() {
            return this._n.fontSize
        }
        qv() {
            return z(this.j(), this._n.fontFamily)
        }
        Dm() {
            return z(this.j(), this._n.fontFamily, "bold")
        }
        ym() {
            null === this.k && (this.k = {
                C: 1,
                N: NaN,
                L: NaN,
                B: NaN,
                Wi: NaN,
                T: 5,
                P: NaN,
                R: "",
                Fi: new Jt,
                km: 0
            });
            const t = this.k,
                i = this.qv();
            if (t.R !== i) {
                const n = this.j();
                t.P = n, t.R = i, t.L = 3 * n / 12, t.B = 3 * n / 12, t.Wi = 9 * n / 12, t.N = 0, t.km = 4 * n / 12, t.Fi.Qe()
            }
            return this.k
        }
        hp(t) {
            this.Av.style.cursor = 1 === t ? "ew-resize" : "default"
        }
        bm() {
            const t = this.Mp.$t(),
                i = t.W();
            i.leftPriceScale.visible || null === this.am || (this.fm.removeChild(this.am.Hv()), this.am.S(), this.am = null), i.rightPriceScale.visible || null === this.om || (this.vm.removeChild(this.om.Hv()), this.om.S(), this.om = null);
            const n = {
                ed: this.Mp.$t().ed()
            },
                s = () => i.leftPriceScale.borderVisible && t.St().W().borderVisible,
                e = () => t._d();
            i.leftPriceScale.visible && null === this.am && (this.am = new As("left", i, n, s, e), this.fm.appendChild(this.am.Hv())), i.rightPriceScale.visible && null === this.om && (this.om = new As("right", i, n, s, e), this.vm.appendChild(this.om.Hv()))
        }
    }
    const Ls = !!es && !!navigator.userAgentData && navigator.userAgentData.brands.some((t => t.brand.includes("Chromium"))) && !!es && ((null === (Ns = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === Ns ? void 0 : Ns.platform) ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
    var Ns;
    class Fs {
        constructor(t, i, n) {
            var s;
            this.Om = [], this.Am = 0, this.Qa = 0, this.e_ = 0, this.Bm = 0, this.Vm = 0, this.zm = null, this.Em = !1, this.cp = new k, this.dp = new k, this.xc = new k, this.Im = null, this.Lm = null, this.Nm = t, this._n = i, this.N_ = n, this.dm = document.createElement("div"), this.dm.classList.add("tv-lightweight-charts"), this.dm.style.overflow = "hidden", this.dm.style.direction = "ltr", this.dm.style.width = "100%", this.dm.style.height = "100%", (s = this.dm).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.Fm = document.createElement("table"), this.Fm.setAttribute("cellspacing", "0"), this.dm.appendChild(this.Fm), this.Wm = this.jm.bind(this), Ws(this._n) && this.Hm(!0), this.Hi = new An(this.yc.bind(this), this._n, n), this.$t().jc().l(this.$m.bind(this), this), this.Um = new Is(this, this.N_), this.Fm.appendChild(this.Um.Hv());
            const e = i.autoSize && this.qm();
            let r = this._n.width,
                h = this._n.height;
            if (e || 0 === r || 0 === h) {
                const i = t.getBoundingClientRect();
                r = r || i.width, h = h || i.height
            }
            this.Ym(r, h), this.Xm(), t.appendChild(this.dm), this.Km(), this.Hi.St().Gu().l(this.Hi.$l.bind(this.Hi), this), this.Hi.f_().l(this.Hi.$l.bind(this.Hi), this)
        }
        $t() {
            return this.Hi
        }
        W() {
            return this._n
        }
        Zm() {
            return this.Om
        }
        Gm() {
            return this.Um
        }
        S() {
            this.Hm(!1), 0 !== this.Am && window.cancelAnimationFrame(this.Am), this.Hi.jc().p(this), this.Hi.St().Gu().p(this), this.Hi.f_().p(this), this.Hi.S();
            for (const t of this.Om) this.Fm.removeChild(t.Hv()), t.Wp().p(this), t.jp().p(this), t.S();
            this.Om = [], f(this.Um).S(), null !== this.dm.parentElement && this.dm.parentElement.removeChild(this.dm), this.xc.S(), this.cp.S(), this.dp.S(), this.Jm()
        }
        Ym(t, i, n = !1) {
            if (this.Qa === i && this.e_ === t) return;
            const s = function (t) {
                const i = Math.floor(t.width),
                    n = Math.floor(t.height);
                return Gn({
                    width: i - i % 2,
                    height: n - n % 2
                })
            }(Gn({
                width: t,
                height: i
            }));
            this.Qa = s.height, this.e_ = s.width;
            const e = this.Qa + "px",
                r = this.e_ + "px";
            f(this.dm).style.height = e, f(this.dm).style.width = r, this.Fm.style.height = e, this.Fm.style.width = r, n ? this.Qm(lt.ns(), performance.now()) : this.Hi.$l()
        }
        Gv(t) {
            void 0 === t && (t = lt.ns());
            for (let i = 0; i < this.Om.length; i++) this.Om[i].Gv(t.Wn(i).Ln);
            this._n.timeScale.visible && this.Um.Gv(t.Fn())
        }
        Lh(t) {
            const i = Ws(this._n);
            this.Hi.Lh(t);
            const n = Ws(this._n);
            n !== i && this.Hm(n), this.Km(), this.tb(t)
        }
        Wp() {
            return this.cp
        }
        jp() {
            return this.dp
        }
        jc() {
            return this.xc
        }
        ib() {
            null !== this.zm && (this.Qm(this.zm, performance.now()), this.zm = null);
            const t = this.nb(null),
                i = document.createElement("canvas");
            i.width = t.width, i.height = t.height;
            const n = f(i.getContext("2d"));
            return this.nb(n), i
        }
        sb(t) {
            if ("left" === t && !this.eb()) return 0;
            if ("right" === t && !this.rb()) return 0;
            if (0 === this.Om.length) return 0;
            return f("left" === t ? this.Om[0].Gp() : this.Om[0].Jp()).Kv()
        }
        hb() {
            return this._n.autoSize && null !== this.Im
        }
        lb() {
            return this.dm
        }
        Vp(t) {
            this.Lm = t, this.Lm ? this.lb().style.setProperty("cursor", t) : this.lb().style.removeProperty("cursor")
        }
        ab() {
            return this.Lm
        }
        ob() {
            return d(this.Om[0]).Up()
        }
        tb(t) {
            (void 0 !== t.autoSize || !this.Im || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Im && this.qm(), !1 === t.autoSize && null !== this.Im && this.Jm(), t.autoSize || void 0 === t.width && void 0 === t.height || this.Ym(t.width || this.e_, t.height || this.Qa))
        }
        nb(t) {
            let i = 0,
                n = 0;
            const s = this.Om[0],
                e = (i, n) => {
                    let s = 0;
                    for (let e = 0; e < this.Om.length; e++) {
                        const r = this.Om[e],
                            h = f("left" === i ? r.Gp() : r.Jp()),
                            l = h.ep();
                        null !== t && h.rp(t, n, s), s += l.height
                    }
                };
            if (this.eb()) {
                e("left", 0);
                i += f(s.Gp()).ep().width
            }
            for (let s = 0; s < this.Om.length; s++) {
                const e = this.Om[s],
                    r = e.ep();
                null !== t && e.rp(t, i, n), n += r.height
            }
            if (i += s.ep().width, this.rb()) {
                e("right", i);
                i += f(s.Jp()).ep().width
            }
            const r = (i, n, s) => {
                f("left" === i ? this.Um.wm() : this.Um.gm()).rp(f(t), n, s)
            };
            if (this._n.timeScale.visible) {
                const i = this.Um.ep();
                if (null !== t) {
                    let e = 0;
                    this.eb() && (r("left", e, n), e = f(s.Gp()).ep().width), this.Um.rp(t, e, n), e += i.width, this.rb() && r("right", e, n)
                }
                n += i.height
            }
            return Gn({
                width: i,
                height: n
            })
        }
        _b() {
            let t = 0,
                i = 0,
                n = 0;
            for (const s of this.Om) this.eb() && (i = Math.max(i, f(s.Gp()).Uv(), this._n.leftPriceScale.minimumWidth)), this.rb() && (n = Math.max(n, f(s.Jp()).Uv(), this._n.rightPriceScale.minimumWidth)), t += s.v_();
            i = ls(i), n = ls(n);
            const s = this.e_,
                e = this.Qa,
                r = Math.max(s - i - n, 0),
                h = this._n.timeScale.visible;
            let l = h ? Math.max(this.Um.Sm(), this._n.timeScale.minimumHeight) : 0;
            var a;
            l = (a = l) + a % 2;
            const o = 0 + l,
                _ = e < o ? 0 : e - o,
                u = _ / t;
            let c = 0;
            for (let t = 0; t < this.Om.length; ++t) {
                const s = this.Om[t];
                s.Pp(this.Hi.Nc()[t]);
                let e = 0,
                    h = 0;
                h = t === this.Om.length - 1 ? _ - c : Math.round(s.v_() * u), e = Math.max(h, 2), c += e, s.Xv(Gn({
                    width: r,
                    height: e
                })), this.eb() && s.$p(i, "left"), this.rb() && s.$p(n, "right"), s.Zv() && this.Hi.Hc(s.Zv(), e)
            }
            this.Um.xm(Gn({
                width: h ? r : 0,
                height: l
            }), h ? i : 0, h ? n : 0), this.Hi.m_(r), this.Bm !== i && (this.Bm = i), this.Vm !== n && (this.Vm = n)
        }
        Hm(t) {
            t ? this.dm.addEventListener("wheel", this.Wm, {
                passive: !1
            }) : this.dm.removeEventListener("wheel", this.Wm)
        }
        ub(t) {
            switch (t.deltaMode) {
                case t.DOM_DELTA_PAGE:
                    return 120;
                case t.DOM_DELTA_LINE:
                    return 32
            }
            return Ls ? 1 / window.devicePixelRatio : 1
        }
        jm(t) {
            if (!(0 !== t.deltaX && this._n.handleScroll.mouseWheel || 0 !== t.deltaY && this._n.handleScale.mouseWheel)) return;
            const i = this.ub(t),
                n = i * t.deltaX / 100,
                s = -i * t.deltaY / 100;
            if (t.cancelable && t.preventDefault(), 0 !== s && this._n.handleScale.mouseWheel) {
                const i = Math.sign(s) * Math.min(1, Math.abs(s)),
                    n = t.clientX - this.dm.getBoundingClientRect().left;
                this.$t().qc(n, i)
            }
            0 !== n && this._n.handleScroll.mouseWheel && this.$t().Yc(-80 * n)
        }
        Qm(t, i) {
            var n;
            const s = t.Fn();
            3 === s && this.cb(), 3 !== s && 2 !== s || (this.fb(t), this.vb(t, i), this.Um.bt(), this.Om.forEach((t => {
                t.Dp()
            })), 3 === (null === (n = this.zm) || void 0 === n ? void 0 : n.Fn()) && (this.zm.Jn(t), this.cb(), this.fb(this.zm), this.vb(this.zm, i), t = this.zm, this.zm = null)), this.Gv(t)
        }
        vb(t, i) {
            for (const n of t.Gn()) this.Qn(n, i)
        }
        fb(t) {
            const i = this.Hi.Nc();
            for (let n = 0; n < i.length; n++) t.Wn(n).Nn && i[n].B_()
        }
        Qn(t, i) {
            const n = this.Hi.St();
            switch (t.$n) {
                case 0:
                    n.Qu();
                    break;
                case 1:
                    n.tc(t.Ot);
                    break;
                case 2:
                    n.Kn(t.Ot);
                    break;
                case 3:
                    n.Zn(t.Ot);
                    break;
                case 4:
                    n.Fu();
                    break;
                case 5:
                    t.Ot.Yu(i) || n.Zn(t.Ot.Xu(i))
            }
        }
        yc(t) {
            null !== this.zm ? this.zm.Jn(t) : this.zm = t, this.Em || (this.Em = !0, this.Am = window.requestAnimationFrame((t => {
                if (this.Em = !1, this.Am = 0, null !== this.zm) {
                    const i = this.zm;
                    this.zm = null, this.Qm(i, t);
                    for (const n of i.Gn())
                        if (5 === n.$n && !n.Ot.Yu(t)) {
                            this.$t().qn(n.Ot);
                            break
                        }
                }
            })))
        }
        cb() {
            this.Xm()
        }
        Xm() {
            const t = this.Hi.Nc(),
                i = t.length,
                n = this.Om.length;
            for (let t = i; t < n; t++) {
                const t = d(this.Om.pop());
                this.Fm.removeChild(t.Hv()), t.Wp().p(this), t.jp().p(this), t.S()
            }
            for (let s = n; s < i; s++) {
                const i = new Os(this, t[s]);
                i.Wp().l(this.pb.bind(this), this), i.jp().l(this.mb.bind(this), this), this.Om.push(i), this.Fm.insertBefore(i.Hv(), this.Um.Hv())
            }
            for (let n = 0; n < i; n++) {
                const i = t[n],
                    s = this.Om[n];
                s.Zv() !== i ? s.Pp(i) : s.Tp()
            }
            this.Km(), this._b()
        }
        bb(t, i, n) {
            var s;
            const e = new Map;
            if (null !== t) {
                this.Hi.wt().forEach((i => {
                    const n = i.Bn().il(t);
                    null !== n && e.set(i, n)
                }))
            }
            let r;
            if (null !== t) {
                const i = null === (s = this.Hi.St().$i(t)) || void 0 === s ? void 0 : s.originalTime;
                void 0 !== i && (r = i)
            }
            const h = this.$t().Vc(),
                l = null !== h && h.Ec instanceof qi ? h.Ec : void 0,
                a = null !== h && void 0 !== h.mv ? h.mv.mr : void 0;
            return {
                wb: r,
                ie: null != t ? t : void 0,
                gb: null != i ? i : void 0,
                Mb: l,
                xb: e,
                Sb: a,
                yb: null != n ? n : void 0
            }
        }
        pb(t, i, n) {
            this.cp.m((() => this.bb(t, i, n)))
        }
        mb(t, i, n) {
            this.dp.m((() => this.bb(t, i, n)))
        }
        $m(t, i, n) {
            this.xc.m((() => this.bb(t, i, n)))
        }
        Km() {
            const t = this._n.timeScale.visible ? "" : "none";
            this.Um.Hv().style.display = t
        }
        eb() {
            return this.Om[0].Zv().S_().W().visible
        }
        rb() {
            return this.Om[0].Zv().y_().W().visible
        }
        qm() {
            return "ResizeObserver" in window && (this.Im = new ResizeObserver((t => {
                const i = t.find((t => t.target === this.Nm));
                i && this.Ym(i.contentRect.width, i.contentRect.height)
            })), this.Im.observe(this.Nm, {
                box: "border-box"
            }), !0)
        }
        Jm() {
            null !== this.Im && this.Im.disconnect(), this.Im = null
        }
    }

    function Ws(t) {
        return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel)
    }

    function js(t, i) {
        var n = {};
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && i.indexOf(s) < 0 && (n[s] = t[s]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var e = 0;
            for (s = Object.getOwnPropertySymbols(t); e < s.length; e++) i.indexOf(s[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[e]) && (n[s[e]] = t[s[e]])
        }
        return n
    }

    function Hs(t, i, n, s) {
        const e = n.value,
            r = {
                ie: i,
                ot: t,
                Ot: [e, e, e, e],
                wb: s
            };
        return void 0 !== n.color && (r.O = n.color), r
    }

    function $s(t, i, n, s) {
        const e = n.value,
            r = {
                ie: i,
                ot: t,
                Ot: [e, e, e, e],
                wb: s
            };
        return void 0 !== n.lineColor && (r.lt = n.lineColor), void 0 !== n.topColor && (r.ks = n.topColor), void 0 !== n.bottomColor && (r.Cs = n.bottomColor), r
    }

    function Us(t, i, n, s) {
        const e = n.value,
            r = {
                ie: i,
                ot: t,
                Ot: [e, e, e, e],
                wb: s
            };
        return void 0 !== n.topLineColor && (r.Ce = n.topLineColor), void 0 !== n.bottomLineColor && (r.Te = n.bottomLineColor), void 0 !== n.topFillColor1 && (r.Me = n.topFillColor1), void 0 !== n.topFillColor2 && (r.xe = n.topFillColor2), void 0 !== n.bottomFillColor1 && (r.Se = n.bottomFillColor1), void 0 !== n.bottomFillColor2 && (r.ye = n.bottomFillColor2), r
    }

    function qs(t, i, n, s) {
        const e = {
            ie: i,
            ot: t,
            Ot: [n.open, n.high, n.low, n.close],
            wb: s
        };
        return void 0 !== n.color && (e.O = n.color), e
    }

    function Ys(t, i, n, s) {
        const e = {
            ie: i,
            ot: t,
            Ot: [n.open, n.high, n.low, n.close],
            wb: s
        };
        return void 0 !== n.color && (e.O = n.color), void 0 !== n.borderColor && (e.At = n.borderColor), void 0 !== n.wickColor && (e.Hh = n.wickColor), e
    }

    function Xs(t, i, n, s, e) {
        const r = d(e)(n),
            h = Math.max(...r),
            l = Math.min(...r),
            a = r[r.length - 1],
            o = [a, h, l, a],
            _ = n,
            {
                time: u,
                color: c
            } = _;
        return {
            ie: i,
            ot: t,
            Ot: o,
            wb: s,
            We: js(_, ["time", "color"]),
            O: c
        }
    }

    function Ks(t) {
        return void 0 !== t.Ot
    }

    function Zs(t, i) {
        return void 0 !== i.customValues && (t.kb = i.customValues), t
    }

    function Gs(t) {
        return (i, n, s, e, r, h) => function (t, i) {
            return i ? i(t) : void 0 === (n = t).open && void 0 === n.value;
            var n
        }(s, h) ? Zs({
            ot: i,
            ie: n,
            wb: e
        }, s) : Zs(t(i, n, s, e, r), s)
    }

    function Js(t) {
        return {
            Candlestick: Gs(Ys),
            Bar: Gs(qs),
            Area: Gs($s),
            Baseline: Gs(Us),
            Histogram: Gs(Hs),
            Line: Gs(Hs),
            Custom: Gs(Xs)
        }[t]
    }

    function Qs(t) {
        return {
            ie: 0,
            Cb: new Map,
            ia: t
        }
    }

    function te(t, i) {
        if (void 0 !== t && 0 !== t.length) return {
            Tb: i.key(t[0].ot),
            Pb: i.key(t[t.length - 1].ot)
        }
    }

    function ie(t) {
        let i;
        return t.forEach((t => {
            void 0 === i && (i = t.wb)
        })), d(i)
    }
    class ne {
        constructor(t) {
            this.Rb = new Map, this.Db = new Map, this.Ob = new Map, this.Ab = [], this.N_ = t
        }
        S() {
            this.Rb.clear(), this.Db.clear(), this.Ob.clear(), this.Ab = []
        }
        Bb(t, i) {
            let n = 0 !== this.Rb.size,
                s = !1;
            const e = this.Db.get(t);
            if (void 0 !== e)
                if (1 === this.Db.size) n = !1, s = !0, this.Rb.clear();
                else
                    for (const i of this.Ab) i.pointData.Cb.delete(t) && (s = !0);
            let r = [];
            if (0 !== i.length) {
                const n = i.map((t => t.time)),
                    e = this.N_.createConverterToInternalObj(i),
                    h = Js(t.Yh()),
                    l = t.ga(),
                    a = t.Ma();
                r = i.map(((i, r) => {
                    const o = e(i.time),
                        _ = this.N_.key(o);
                    let u = this.Rb.get(_);
                    void 0 === u && (u = Qs(o), this.Rb.set(_, u), s = !0);
                    const c = h(o, u.ie, i, n[r], l, a);
                    return u.Cb.set(t, c), c
                }))
            }
            n && this.Vb(), this.zb(t, r);
            let h = -1;
            if (s) {
                const t = [];
                this.Rb.forEach((i => {
                    t.push({
                        timeWeight: 0,
                        time: i.ia,
                        pointData: i,
                        originalTime: ie(i.Cb)
                    })
                })), t.sort(((t, i) => this.N_.key(t.time) - this.N_.key(i.time))), h = this.Eb(t)
            }
            return this.Ib(t, h, function (t, i, n) {
                const s = te(t, n),
                    e = te(i, n);
                if (void 0 !== s && void 0 !== e) return {
                    Xl: s.Pb >= e.Pb && s.Tb >= e.Tb
                }
            }(this.Db.get(t), e, this.N_))
        }
        ld(t) {
            return this.Bb(t, [])
        }
        Lb(t, i) {
            const n = i;
            ! function (t) {
                void 0 === t.wb && (t.wb = t.time)
            }(n), this.N_.preprocessData(i);
            const s = this.N_.createConverterToInternalObj([i])(i.time),
                e = this.Ob.get(t);
            if (void 0 !== e && this.N_.key(s) < this.N_.key(e)) throw new Error(`Cannot update oldest data, last time=${e}, new time=${s}`);
            let r = this.Rb.get(this.N_.key(s));
            const h = void 0 === r;
            void 0 === r && (r = Qs(s), this.Rb.set(this.N_.key(s), r));
            const l = Js(t.Yh()),
                a = t.ga(),
                o = t.Ma(),
                _ = l(s, r.ie, i, n.wb, a, o);
            r.Cb.set(t, _), this.Nb(t, _);
            const u = {
                Xl: Ks(_)
            };
            if (!h) return this.Ib(t, -1, u);
            const c = {
                timeWeight: 0,
                time: r.ia,
                pointData: r,
                originalTime: ie(r.Cb)
            },
                d = Rt(this.Ab, this.N_.key(c.time), ((t, i) => this.N_.key(t.time) < i));
            this.Ab.splice(d, 0, c);
            for (let t = d; t < this.Ab.length; ++t) se(this.Ab[t].pointData, t);
            return this.N_.fillWeightsForPoints(this.Ab, d), this.Ib(t, d, u)
        }
        Nb(t, i) {
            let n = this.Db.get(t);
            void 0 === n && (n = [], this.Db.set(t, n));
            const s = 0 !== n.length ? n[n.length - 1] : null;
            null === s || this.N_.key(i.ot) > this.N_.key(s.ot) ? Ks(i) && n.push(i) : Ks(i) ? n[n.length - 1] = i : n.splice(-1, 1), this.Ob.set(t, i.ot)
        }
        zb(t, i) {
            0 !== i.length ? (this.Db.set(t, i.filter(Ks)), this.Ob.set(t, i[i.length - 1].ot)) : (this.Db.delete(t), this.Ob.delete(t))
        }
        Vb() {
            for (const t of this.Ab) 0 === t.pointData.Cb.size && this.Rb.delete(this.N_.key(t.time))
        }
        Eb(t) {
            let i = -1;
            for (let n = 0; n < this.Ab.length && n < t.length; ++n) {
                const s = this.Ab[n],
                    e = t[n];
                if (this.N_.key(s.time) !== this.N_.key(e.time)) {
                    i = n;
                    break
                }
                e.timeWeight = s.timeWeight, se(e.pointData, n)
            }
            if (-1 === i && this.Ab.length !== t.length && (i = Math.min(this.Ab.length, t.length)), -1 === i) return -1;
            for (let n = i; n < t.length; ++n) se(t[n].pointData, n);
            return this.N_.fillWeightsForPoints(t, i), this.Ab = t, i
        }
        Fb() {
            if (0 === this.Db.size) return null;
            let t = 0;
            return this.Db.forEach((i => {
                0 !== i.length && (t = Math.max(t, i[i.length - 1].ie))
            })), t
        }
        Ib(t, i, n) {
            const s = {
                Wb: new Map,
                St: {
                    Au: this.Fb()
                }
            };
            if (-1 !== i) this.Db.forEach(((i, e) => {
                s.Wb.set(e, {
                    We: i,
                    jb: e === t ? n : void 0
                })
            })), this.Db.has(t) || s.Wb.set(t, {
                We: [],
                jb: n
            }), s.St.Hb = this.Ab, s.St.$b = i;
            else {
                const i = this.Db.get(t);
                s.Wb.set(t, {
                    We: i || [],
                    jb: n
                })
            }
            return s
        }
    }

    function se(t, i) {
        t.ie = i, t.Cb.forEach((t => {
            t.ie = i
        }))
    }

    function ee(t) {
        const i = {
            value: t.Ot[3],
            time: t.wb
        };
        return void 0 !== t.kb && (i.customValues = t.kb), i
    }

    function re(t) {
        const i = ee(t);
        return void 0 !== t.O && (i.color = t.O), i
    }

    function he(t) {
        const i = ee(t);
        return void 0 !== t.lt && (i.lineColor = t.lt), void 0 !== t.ks && (i.topColor = t.ks), void 0 !== t.Cs && (i.bottomColor = t.Cs), i
    }

    function le(t) {
        const i = ee(t);
        return void 0 !== t.Ce && (i.topLineColor = t.Ce), void 0 !== t.Te && (i.bottomLineColor = t.Te), void 0 !== t.Me && (i.topFillColor1 = t.Me), void 0 !== t.xe && (i.topFillColor2 = t.xe), void 0 !== t.Se && (i.bottomFillColor1 = t.Se), void 0 !== t.ye && (i.bottomFillColor2 = t.ye), i
    }

    function ae(t) {
        const i = {
            open: t.Ot[0],
            high: t.Ot[1],
            low: t.Ot[2],
            close: t.Ot[3],
            time: t.wb
        };
        return void 0 !== t.kb && (i.customValues = t.kb), i
    }

    function oe(t) {
        const i = ae(t);
        return void 0 !== t.O && (i.color = t.O), i
    }

    function _e(t) {
        const i = ae(t),
            {
                O: n,
                At: s,
                Hh: e
            } = t;
        return void 0 !== n && (i.color = n), void 0 !== s && (i.borderColor = s), void 0 !== e && (i.wickColor = e), i
    }

    function ue(t) {
        return {
            Area: he,
            Line: re,
            Baseline: le,
            Histogram: re,
            Bar: oe,
            Candlestick: _e,
            Custom: ce
        }[t]
    }

    function ce(t) {
        const i = t.wb;
        return Object.assign(Object.assign({}, t.We), {
            time: i
        })
    }
    const de = {
        vertLine: {
            color: "#9598A1",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#131722"
        },
        horzLine: {
            color: "#9598A1",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#131722"
        },
        mode: 1
    },
        fe = {
            vertLines: {
                color: "#D6DCDE",
                style: 0,
                visible: !0
            },
            horzLines: {
                color: "#D6DCDE",
                style: 0,
                visible: !0
            }
        },
        ve = {
            background: {
                type: "solid",
                color: "#FFFFFF"
            },
            textColor: "#191919",
            fontSize: 12,
            fontFamily: V
        },
        pe = {
            autoScale: !0,
            mode: 0,
            invertScale: !1,
            alignLabels: !0,
            borderVisible: !0,
            borderColor: "#2B2B43",
            entireTextOnly: !1,
            visible: !1,
            ticksVisible: !1,
            scaleMargins: {
                bottom: .1,
                top: .2
            },
            minimumWidth: 0
        },
        me = {
            rightOffset: 0,
            barSpacing: 6,
            minBarSpacing: .5,
            fixLeftEdge: !1,
            fixRightEdge: !1,
            lockVisibleTimeRangeOnResize: !1,
            rightBarStaysOnScroll: !1,
            borderVisible: !0,
            borderColor: "#2B2B43",
            visible: !0,
            timeVisible: !1,
            secondsVisible: !0,
            shiftVisibleRangeOnNewBar: !0,
            allowShiftVisibleRangeOnWhitespaceReplacement: !1,
            ticksVisible: !1,
            uniformDistribution: !1,
            minimumHeight: 0,
            allowBoldLabels: !0
        },
        be = {
            color: "rgba(0, 0, 0, 0)",
            visible: !1,
            fontSize: 48,
            fontFamily: V,
            fontStyle: "",
            text: "",
            horzAlign: "center",
            vertAlign: "center"
        };

    function we() {
        return {
            width: 0,
            height: 0,
            autoSize: !1,
            layout: ve,
            crosshair: de,
            grid: fe,
            overlayPriceScales: Object.assign({}, pe),
            leftPriceScale: Object.assign(Object.assign({}, pe), {
                visible: !1
            }),
            rightPriceScale: Object.assign(Object.assign({}, pe), {
                visible: !0
            }),
            timeScale: me,
            watermark: be,
            localization: {
                locale: es ? navigator.language : "",
                dateFormat: "dd MMM 'yy"
            },
            handleScroll: {
                mouseWheel: !0,
                pressedMouseMove: !0,
                horzTouchDrag: !0,
                vertTouchDrag: !0
            },
            handleScale: {
                axisPressedMouseMove: {
                    time: !0,
                    price: !0
                },
                axisDoubleClickReset: {
                    time: !0,
                    price: !0
                },
                mouseWheel: !0,
                pinch: !0
            },
            kineticScroll: {
                mouse: !1,
                touch: !0
            },
            trackingMode: {
                exitMode: 1
            }
        }
    }
    class ge {
        constructor(t, i) {
            this.Ub = t, this.qb = i
        }
        applyOptions(t) {
            this.Ub.$t().Ic(this.qb, t)
        }
        options() {
            return this.Ei().W()
        }
        width() {
            return ht(this.qb) ? this.Ub.sb(this.qb) : 0
        }
        Ei() {
            return f(this.Ub.$t().Lc(this.qb)).Dt
        }
    }

    function Me(t, i, n) {
        const s = js(t, ["time", "originalTime"]),
            e = Object.assign({
                time: i
            }, s);
        return void 0 !== n && (e.originalTime = n), e
    }
    const xe = {
        color: "#FF0000",
        price: 0,
        lineStyle: 2,
        lineWidth: 1,
        lineVisible: !0,
        axisLabelVisible: !0,
        title: "",
        axisLabelColor: "",
        axisLabelTextColor: ""
    };
    class Se {
        constructor(t) {
            this.Bh = t
        }
        applyOptions(t) {
            this.Bh.Lh(t)
        }
        options() {
            return this.Bh.W()
        }
        Yb() {
            return this.Bh
        }
    }
    class ye {
        constructor(t, i, n, s, e) {
            this.Xb = new k, this.zs = t, this.Kb = i, this.Zb = n, this.N_ = e, this.Gb = s
        }
        S() {
            this.Xb.S()
        }
        priceFormatter() {
            return this.zs.ca()
        }
        priceToCoordinate(t) {
            const i = this.zs.Ct();
            return null === i ? null : this.zs.Dt().Rt(t, i.Ot)
        }
        coordinateToPrice(t) {
            const i = this.zs.Ct();
            return null === i ? null : this.zs.Dt().fn(t, i.Ot)
        }
        barsInLogicalRange(t) {
            if (null === t) return null;
            const i = new gn(new mn(t.from, t.to)).iu(),
                n = this.zs.Bn();
            if (n.Li()) return null;
            const s = n.il(i.Rs(), 1),
                e = n.il(i.ui(), -1),
                r = f(n.Jh()),
                h = f(n.An());
            if (null !== s && null !== e && s.ie > e.ie) return {
                barsBefore: t.from - r,
                barsAfter: h - t.to
            };
            const l = {
                barsBefore: null === s || s.ie === r ? t.from - r : s.ie - r,
                barsAfter: null === e || e.ie === h ? h - t.to : h - e.ie
            };
            return null !== s && null !== e && (l.from = s.wb, l.to = e.wb), l
        }
        setData(t) {
            this.N_, this.zs.Yh(), this.Kb.Jb(this.zs, t), this.Qb("full")
        }
        update(t) {
            this.zs.Yh(), this.Kb.tw(this.zs, t), this.Qb("update")
        }
        dataByIndex(t, i) {
            const n = this.zs.Bn().il(t, i);
            if (null === n) return null;
            return ue(this.seriesType())(n)
        }
        data() {
            const t = ue(this.seriesType());
            return this.zs.Bn().Qs().map((i => t(i)))
        }
        subscribeDataChanged(t) {
            this.Xb.l(t)
        }
        unsubscribeDataChanged(t) {
            this.Xb.v(t)
        }
        setMarkers(t) {
            this.N_;
            const i = t.map((t => Me(t, this.N_.convertHorzItemToInternal(t.time), t.time)));
            this.zs.Zl(i)
        }
        markers() {
            return this.zs.Gl().map((t => Me(t, t.originalTime, void 0)))
        }
        applyOptions(t) {
            this.zs.Lh(t)
        }
        options() {
            return O(this.zs.W())
        }
        priceScale() {
            return this.Zb.priceScale(this.zs.Dt().xa())
        }
        createPriceLine(t) {
            const i = C(O(xe), t),
                n = this.zs.Jl(i);
            return new Se(n)
        }
        removePriceLine(t) {
            this.zs.Ql(t.Yb())
        }
        seriesType() {
            return this.zs.Yh()
        }
        attachPrimitive(t) {
            this.zs.ba(t), t.attached && t.attached({
                chart: this.Gb,
                series: this,
                requestUpdate: () => this.zs.$t().$l()
            })
        }
        detachPrimitive(t) {
            this.zs.wa(t), t.detached && t.detached()
        }
        Qb(t) {
            this.Xb.M() && this.Xb.m(t)
        }
    }
    class ke {
        constructor(t, i, n) {
            this.iw = new k, this.uu = new k, this.um = new k, this.Hi = t, this.wl = t.St(), this.Um = i, this.wl.Ku().l(this.nw.bind(this)), this.wl.Zu().l(this.sw.bind(this)), this.Um.Mm().l(this.ew.bind(this)), this.N_ = n
        }
        S() {
            this.wl.Ku().p(this), this.wl.Zu().p(this), this.Um.Mm().p(this), this.iw.S(), this.uu.S(), this.um.S()
        }
        scrollPosition() {
            return this.wl.Iu()
        }
        scrollToPosition(t, i) {
            i ? this.wl.qu(t, 1e3) : this.Hi.Zn(t)
        }
        scrollToRealTime() {
            this.wl.Uu()
        }
        getVisibleRange() {
            const t = this.wl.ku();
            return null === t ? null : {
                from: t.from.originalTime,
                to: t.to.originalTime
            }
        }
        setVisibleRange(t) {
            const i = {
                from: this.N_.convertHorzItemToInternal(t.from),
                to: this.N_.convertHorzItemToInternal(t.to)
            },
                n = this.wl.Ru(i);
            this.Hi.ad(n)
        }
        getVisibleLogicalRange() {
            const t = this.wl.yu();
            return null === t ? null : {
                from: t.Rs(),
                to: t.ui()
            }
        }
        setVisibleLogicalRange(t) {
            c(t.from <= t.to, "The from index cannot be after the to index."), this.Hi.ad(t)
        }
        resetTimeScale() {
            this.Hi.Xn()
        }
        fitContent() {
            this.Hi.Qu()
        }
        logicalToCoordinate(t) {
            const i = this.Hi.St();
            return i.Li() ? null : i.zt(t)
        }
        coordinateToLogical(t) {
            return this.wl.Li() ? null : this.wl.Bu(t)
        }
        timeToCoordinate(t) {
            const i = this.N_.convertHorzItemToInternal(t),
                n = this.wl.ka(i, !1);
            return null === n ? null : this.wl.zt(n)
        }
        coordinateToTime(t) {
            const i = this.Hi.St(),
                n = i.Bu(t),
                s = i.$i(n);
            return null === s ? null : s.originalTime
        }
        width() {
            return this.Um.Up().width
        }
        height() {
            return this.Um.Up().height
        }
        subscribeVisibleTimeRangeChange(t) {
            this.iw.l(t)
        }
        unsubscribeVisibleTimeRangeChange(t) {
            this.iw.v(t)
        }
        subscribeVisibleLogicalRangeChange(t) {
            this.uu.l(t)
        }
        unsubscribeVisibleLogicalRangeChange(t) {
            this.uu.v(t)
        }
        subscribeSizeChange(t) {
            this.um.l(t)
        }
        unsubscribeSizeChange(t) {
            this.um.v(t)
        }
        applyOptions(t) {
            this.wl.Lh(t)
        }
        options() {
            return Object.assign(Object.assign({}, O(this.wl.W())), {
                barSpacing: this.wl.ee()
            })
        }
        nw() {
            this.iw.M() && this.iw.m(this.getVisibleRange())
        }
        sw() {
            this.uu.M() && this.uu.m(this.getVisibleLogicalRange())
        }
        ew(t) {
            this.um.m(t.width, t.height)
        }
    }

    function Ce(t) {
        if (void 0 === t || "custom" === t.type) return;
        const i = t;
        void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
            if (t >= 1) return 0;
            let i = 0;
            for (; i < 8; i++) {
                const n = Math.round(t);
                if (Math.abs(n - t) < 1e-8) return i;
                t *= 10
            }
            return i
        }(i.minMove))
    }

    function Te(t) {
        return function (t) {
            if (D(t.handleScale)) {
                const i = t.handleScale;
                t.handleScale = {
                    axisDoubleClickReset: {
                        time: i,
                        price: i
                    },
                    axisPressedMouseMove: {
                        time: i,
                        price: i
                    },
                    mouseWheel: i,
                    pinch: i
                }
            } else if (void 0 !== t.handleScale) {
                const {
                    axisPressedMouseMove: i,
                    axisDoubleClickReset: n
                } = t.handleScale;
                D(i) && (t.handleScale.axisPressedMouseMove = {
                    time: i,
                    price: i
                }), D(n) && (t.handleScale.axisDoubleClickReset = {
                    time: n,
                    price: n
                })
            }
            const i = t.handleScroll;
            D(i) && (t.handleScroll = {
                horzTouchDrag: i,
                vertTouchDrag: i,
                mouseWheel: i,
                pressedMouseMove: i
            })
        }(t), t
    }
    class Pe {
        constructor(t, i, n) {
            this.rw = new Map, this.hw = new Map, this.lw = new k, this.aw = new k, this.ow = new k, this._w = new ne(i);
            const s = void 0 === n ? O(we()) : C(O(we()), Te(n));
            this.N_ = i, this.Ub = new Fs(t, s, i), this.Ub.Wp().l((t => {
                this.lw.M() && this.lw.m(this.uw(t()))
            }), this), this.Ub.jp().l((t => {
                this.aw.M() && this.aw.m(this.uw(t()))
            }), this), this.Ub.jc().l((t => {
                this.ow.M() && this.ow.m(this.uw(t()))
            }), this);
            const e = this.Ub.$t();
            this.cw = new ke(e, this.Ub.Gm(), this.N_)
        }
        remove() {
            this.Ub.Wp().p(this), this.Ub.jp().p(this), this.Ub.jc().p(this), this.cw.S(), this.Ub.S(), this.rw.clear(), this.hw.clear(), this.lw.S(), this.aw.S(), this.ow.S(), this._w.S()
        }
        resize(t, i, n) {
            this.autoSizeActive() || this.Ub.Ym(t, i, n)
        }
        addCustomSeries(t, i) {
            const n = v(t),
                s = Object.assign(Object.assign({}, h), n.defaultOptions());
            return this.dw("Custom", s, i, n)
        }
        addAreaSeries(t) {
            return this.dw("Area", s, t)
        }
        addBaselineSeries(t) {
            return this.dw("Baseline", e, t)
        }
        addBarSeries(t) {
            return this.dw("Bar", i, t)
        }
        addCandlestickSeries(i = {}) {
            return function (t) {
                void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor)
            }(i), this.dw("Candlestick", t, i)
        }
        addHistogramSeries(t) {
            return this.dw("Histogram", r, t)
        }
        addLineSeries(t) {
            return this.dw("Line", n, t)
        }
        removeSeries(t) {
            const i = d(this.rw.get(t)),
                n = this._w.ld(i);
            this.Ub.$t().ld(i), this.fw(n), this.rw.delete(t), this.hw.delete(i)
        }
        Jb(t, i) {
            this.fw(this._w.Bb(t, i))
        }
        tw(t, i) {
            this.fw(this._w.Lb(t, i))
        }
        subscribeClick(t) {
            this.lw.l(t)
        }
        unsubscribeClick(t) {
            this.lw.v(t)
        }
        subscribeCrosshairMove(t) {
            this.ow.l(t)
        }
        unsubscribeCrosshairMove(t) {
            this.ow.v(t)
        }
        subscribeDblClick(t) {
            this.aw.l(t)
        }
        unsubscribeDblClick(t) {
            this.aw.v(t)
        }
        priceScale(t) {
            return new ge(this.Ub, t)
        }
        timeScale() {
            return this.cw
        }
        applyOptions(t) {
            this.Ub.Lh(Te(t))
        }
        options() {
            return this.Ub.W()
        }
        takeScreenshot() {
            return this.Ub.ib()
        }
        autoSizeActive() {
            return this.Ub.hb()
        }
        chartElement() {
            return this.Ub.lb()
        }
        paneSize() {
            const t = this.Ub.ob();
            return {
                height: t.height,
                width: t.width
            }
        }
        setCrosshairPosition(t, i, n) {
            const s = this.rw.get(n);
            if (void 0 === s) return;
            const e = this.Ub.$t()._r(s);
            null !== e && this.Ub.$t().td(t, i, e)
        }
        clearCrosshairPosition() {
            this.Ub.$t().nd(!0)
        }
        dw(t, i, n = {}, s) {
            Ce(n.priceFormat);
            const e = C(O(l), O(i), n),
                r = this.Ub.$t().rd(t, e, s),
                h = new ye(r, this, this, this, this.N_);
            return this.rw.set(h, r), this.hw.set(r, h), h
        }
        fw(t) {
            const i = this.Ub.$t();
            i.sd(t.St.Au, t.St.Hb, t.St.$b), t.Wb.forEach(((t, i) => i.J(t.We, t.jb))), i.zu()
        }
        pw(t) {
            return d(this.hw.get(t))
        }
        uw(t) {
            const i = new Map;
            t.xb.forEach(((t, n) => {
                const s = n.Yh(),
                    e = ue(s)(t);
                if ("Custom" !== s) c(function (t) {
                    return void 0 !== t.open || void 0 !== t.value
                }(e));
                else {
                    const t = n.Ma();
                    c(!t || !1 === t(e))
                }
                i.set(this.pw(n), e)
            }));
            const n = void 0 === t.Mb ? void 0 : this.pw(t.Mb);
            return {
                time: t.wb,
                logical: t.ie,
                point: t.gb,
                hoveredSeries: n,
                hoveredObjectId: t.Sb,
                seriesData: i,
                sourceEvent: t.yb
            }
        }
    }

    function Re(t, i, n) {
        let s;
        if (R(t)) {
            const i = document.getElementById(t);
            c(null !== i, `Cannot find element in DOM with id=${t}`), s = i
        } else s = t;
        const e = new Pe(s, i, n);
        return i.setOptions(e.options()), e
    }
    const De = Object.assign(Object.assign({}, l), h);
    var Oe = Object.freeze({
        __proto__: null,
        get ColorType() {
            return Dn
        },
        get CrosshairMode() {
            return et
        },
        get LastPriceAnimationMode() {
            return Pn
        },
        get LineStyle() {
            return o
        },
        get LineType() {
            return a
        },
        get MismatchDirection() {
            return Ai
        },
        get PriceLineSource() {
            return Rn
        },
        get PriceScaleMode() {
            return un
        },
        get TickMarkType() {
            return On
        },
        get TrackingModeExitMode() {
            return Tn
        },
        createChart: function (t, i) {
            return Re(t, new Zn, Zn.Pd(i))
        },
        createChartEx: Re,
        customSeriesDefaultOptions: De,
        isBusinessDay: Bn,
        isUTCTimestamp: Vn,
        version: function () {
            return "4.1.3"
        }
    });
    window.LightweightCharts = Oe
}();