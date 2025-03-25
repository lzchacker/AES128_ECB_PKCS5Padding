import {ac as Ue, ad as We} from "./vendor-3e88ea6e.js";
import {d as de} from "./apiClient-4e57d489.js";
import {B as J, j as Q} from "./jsNativeInteraction-2e621ea7.js";
var Ne = {
    exports: {}
};
(function(_) {
    //! openseadragon 4.1.1
    //! Built on 2024-04-01
    //! Git commit: v4.1.1-0-f90d9814
    //! http://openseadragon.github.io
    //! License: http://openseadragon.github.io/license/
    function T(e) {
        return new T.Viewer(e)
    }
    (function(e) {
        e.version = {
            versionStr: "4.1.1",
            major: parseInt("4", 10),
            minor: parseInt("1", 10),
            revision: parseInt("1", 10)
        };
        var t = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object AsyncFunction]": "function",
            "[object Promise]": "promise",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object"
        }
          , i = Object.prototype.toString
          , o = Object.prototype.hasOwnProperty;
        e.isFunction = function(h) {
            return e.type(h) === "function"
        }
        ,
        e.isArray = Array.isArray || function(h) {
            return e.type(h) === "array"
        }
        ,
        e.isWindow = function(h) {
            return h && typeof h == "object" && "setInterval"in h
        }
        ,
        e.type = function(h) {
            return h == null ? String(h) : t[i.call(h)] || "object"
        }
        ,
        e.isPlainObject = function(h) {
            if (!h || T.type(h) !== "object" || h.nodeType || e.isWindow(h) || h.constructor && !o.call(h, "constructor") && !o.call(h.constructor.prototype, "isPrototypeOf"))
                return !1;
            var n;
            for (var r in h)
                n = r;
            return n === void 0 || o.call(h, n)
        }
        ,
        e.isEmptyObject = function(h) {
            for (var n in h)
                return !1;
            return !0
        }
        ,
        e.freezeObject = function(h) {
            return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(n) {
                return n
            }
            ,
            e.freezeObject(h)
        }
        ,
        e.supportsCanvas = function() {
            var h = document.createElement("canvas");
            return !!(e.isFunction(h.getContext) && h.getContext("2d"))
        }(),
        e.isCanvasTainted = function(h) {
            var n = !1;
            try {
                h.getContext("2d").getImageData(0, 0, 1, 1)
            } catch (r) {
                n = !0
            }
            return n
        }
        ,
        e.supportsAddEventListener = function() {
            return !!(document.documentElement.addEventListener && document.addEventListener)
        }(),
        e.supportsRemoveEventListener = function() {
            return !!(document.documentElement.removeEventListener && document.removeEventListener)
        }(),
        e.supportsEventListenerOptions = function() {
            var h = 0;
            if (e.supportsAddEventListener)
                try {
                    var n = {
                        get capture() {
                            return h++,
                            !1
                        },
                        get once() {
                            return h++,
                            !1
                        },
                        get passive() {
                            return h++,
                            !1
                        }
                    };
                    window.addEventListener("test", null, n),
                    window.removeEventListener("test", null, n)
                } catch (r) {
                    h = 0
                }
            return h >= 3
        }(),
        e.getCurrentPixelDensityRatio = function() {
            if (e.supportsCanvas) {
                var h = document.createElement("canvas").getContext("2d")
                  , n = window.devicePixelRatio || 1
                  , r = h.webkitBackingStorePixelRatio || h.mozBackingStorePixelRatio || h.msBackingStorePixelRatio || h.oBackingStorePixelRatio || h.backingStorePixelRatio || 1;
                return Math.max(n, 1) / r
            } else
                return 1
        }
        ,
        e.pixelDensityRatio = e.getCurrentPixelDensityRatio()
    }
    )(T),
    function(e) {
        e.extend = function() {
            var r, s, l, d, f, v, y = arguments[0] || {}, x = arguments.length, w = !1, S = 1;
            for (typeof y == "boolean" && (w = y,
            y = arguments[1] || {},
            S = 2),
            typeof y != "object" && !T.isFunction(y) && (y = {}),
            x === S && (y = this,
            --S); S < x; S++)
                if (r = arguments[S],
                r !== null || r !== void 0)
                    for (s in r) {
                        var C = Object.getOwnPropertyDescriptor(r, s);
                        if (C !== void 0) {
                            if (C.get || C.set) {
                                Object.defineProperty(y, s, C);
                                continue
                            }
                            d = C.value
                        } else {
                            e.console.warn('Could not copy inherited property "' + s + '".');
                            continue
                        }
                        y !== d && (w && d && (T.isPlainObject(d) || (f = T.isArray(d))) ? (l = y[s],
                        f ? (f = !1,
                        v = l && T.isArray(l) ? l : []) : v = l && T.isPlainObject(l) ? l : {},
                        y[s] = T.extend(w, v, d)) : d !== void 0 && (y[s] = d))
                    }
            return y
        }
        ;
        var t = function() {
            if (typeof navigator != "object")
                return !1;
            var r = navigator.userAgent;
            return typeof r != "string" ? !1 : r.indexOf("iPhone") !== -1 || r.indexOf("iPad") !== -1 || r.indexOf("iPod") !== -1
        };
        e.extend(e, {
            DEFAULT_SETTINGS: {
                xmlPath: null,
                tileSources: null,
                tileHost: null,
                initialPage: 0,
                crossOriginPolicy: !1,
                ajaxWithCredentials: !1,
                loadTilesWithAjax: !1,
                ajaxHeaders: {},
                splitHashDataForPost: !1,
                panHorizontal: !0,
                panVertical: !0,
                constrainDuringPan: !1,
                wrapHorizontal: !1,
                wrapVertical: !1,
                visibilityRatio: .5,
                minPixelRatio: .5,
                defaultZoomLevel: 0,
                minZoomLevel: null,
                maxZoomLevel: null,
                homeFillsViewer: !1,
                clickTimeThreshold: 300,
                clickDistThreshold: 5,
                dblClickTimeThreshold: 300,
                dblClickDistThreshold: 20,
                springStiffness: 6.5,
                animationTime: 1.2,
                gestureSettingsMouse: {
                    dragToPan: !0,
                    scrollToZoom: !0,
                    clickToZoom: !0,
                    dblClickToZoom: !1,
                    dblClickDragToZoom: !1,
                    pinchToZoom: !1,
                    zoomToRefPoint: !0,
                    flickEnabled: !1,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                gestureSettingsTouch: {
                    dragToPan: !0,
                    scrollToZoom: !1,
                    clickToZoom: !1,
                    dblClickToZoom: !0,
                    dblClickDragToZoom: !0,
                    pinchToZoom: !0,
                    zoomToRefPoint: !0,
                    flickEnabled: !0,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                gestureSettingsPen: {
                    dragToPan: !0,
                    scrollToZoom: !1,
                    clickToZoom: !0,
                    dblClickToZoom: !1,
                    dblClickDragToZoom: !1,
                    pinchToZoom: !1,
                    zoomToRefPoint: !0,
                    flickEnabled: !1,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                gestureSettingsUnknown: {
                    dragToPan: !0,
                    scrollToZoom: !1,
                    clickToZoom: !1,
                    dblClickToZoom: !0,
                    dblClickDragToZoom: !1,
                    pinchToZoom: !0,
                    zoomToRefPoint: !0,
                    flickEnabled: !0,
                    flickMinSpeed: 120,
                    flickMomentum: .25,
                    pinchRotate: !1
                },
                zoomPerClick: 2,
                zoomPerScroll: 1.2,
                zoomPerDblClickDrag: 1.2,
                zoomPerSecond: 1,
                blendTime: 0,
                alwaysBlend: !1,
                autoHideControls: !0,
                immediateRender: !1,
                minZoomImageRatio: .9,
                maxZoomPixelRatio: 1.1,
                smoothTileEdgesMinZoom: 1.1,
                iOSDevice: t(),
                pixelsPerWheelLine: 40,
                pixelsPerArrowPress: 40,
                autoResize: !0,
                preserveImageSizeOnResize: !1,
                minScrollDeltaTime: 50,
                rotationIncrement: 90,
                showSequenceControl: !0,
                sequenceControlAnchor: null,
                preserveViewport: !1,
                preserveOverlays: !1,
                navPrevNextWrap: !1,
                showNavigationControl: !0,
                navigationControlAnchor: null,
                showZoomControl: !0,
                showHomeControl: !0,
                showFullPageControl: !0,
                showRotationControl: !1,
                showFlipControl: !1,
                controlsFadeDelay: 2e3,
                controlsFadeLength: 1500,
                mouseNavEnabled: !0,
                showNavigator: !1,
                navigatorElement: null,
                navigatorId: null,
                navigatorPosition: null,
                navigatorSizeRatio: .2,
                navigatorMaintainSizeRatio: !1,
                navigatorTop: null,
                navigatorLeft: null,
                navigatorHeight: null,
                navigatorWidth: null,
                navigatorAutoResize: !0,
                navigatorAutoFade: !0,
                navigatorRotate: !0,
                navigatorBackground: "#000",
                navigatorOpacity: .8,
                navigatorBorderColor: "#555",
                navigatorDisplayRegionColor: "#900",
                degrees: 0,
                flipped: !1,
                opacity: 1,
                preload: !1,
                compositeOperation: null,
                imageSmoothingEnabled: !0,
                placeholderFillStyle: null,
                subPixelRoundingForTransparency: null,
                showReferenceStrip: !1,
                referenceStripScroll: "horizontal",
                referenceStripElement: null,
                referenceStripHeight: null,
                referenceStripWidth: null,
                referenceStripPosition: "BOTTOM_LEFT",
                referenceStripSizeRatio: .2,
                collectionRows: 3,
                collectionColumns: 0,
                collectionLayout: "horizontal",
                collectionMode: !1,
                collectionTileSize: 800,
                collectionTileMargin: 80,
                imageLoaderLimit: 0,
                maxImageCacheCount: 200,
                timeout: 3e4,
                useCanvas: !0,
                tileRetryMax: 0,
                tileRetryDelay: 2500,
                prefixUrl: "/images/",
                navImages: {
                    zoomIn: {
                        REST: "zoomin_rest.png",
                        GROUP: "zoomin_grouphover.png",
                        HOVER: "zoomin_hover.png",
                        DOWN: "zoomin_pressed.png"
                    },
                    zoomOut: {
                        REST: "zoomout_rest.png",
                        GROUP: "zoomout_grouphover.png",
                        HOVER: "zoomout_hover.png",
                        DOWN: "zoomout_pressed.png"
                    },
                    home: {
                        REST: "home_rest.png",
                        GROUP: "home_grouphover.png",
                        HOVER: "home_hover.png",
                        DOWN: "home_pressed.png"
                    },
                    fullpage: {
                        REST: "fullpage_rest.png",
                        GROUP: "fullpage_grouphover.png",
                        HOVER: "fullpage_hover.png",
                        DOWN: "fullpage_pressed.png"
                    },
                    rotateleft: {
                        REST: "rotateleft_rest.png",
                        GROUP: "rotateleft_grouphover.png",
                        HOVER: "rotateleft_hover.png",
                        DOWN: "rotateleft_pressed.png"
                    },
                    rotateright: {
                        REST: "rotateright_rest.png",
                        GROUP: "rotateright_grouphover.png",
                        HOVER: "rotateright_hover.png",
                        DOWN: "rotateright_pressed.png"
                    },
                    flip: {
                        REST: "flip_rest.png",
                        GROUP: "flip_grouphover.png",
                        HOVER: "flip_hover.png",
                        DOWN: "flip_pressed.png"
                    },
                    previous: {
                        REST: "previous_rest.png",
                        GROUP: "previous_grouphover.png",
                        HOVER: "previous_hover.png",
                        DOWN: "previous_pressed.png"
                    },
                    next: {
                        REST: "next_rest.png",
                        GROUP: "next_grouphover.png",
                        HOVER: "next_hover.png",
                        DOWN: "next_pressed.png"
                    }
                },
                debugMode: !1,
                debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"],
                silenceMultiImageWarnings: !1
            },
            SIGNAL: "----seadragon----",
            delegate: function(r, s) {
                return function() {
                    var l = arguments;
                    return l === void 0 && (l = []),
                    s.apply(r, l)
                }
            },
            BROWSERS: {
                UNKNOWN: 0,
                IE: 1,
                FIREFOX: 2,
                SAFARI: 3,
                CHROME: 4,
                OPERA: 5,
                EDGE: 6,
                CHROMEEDGE: 7
            },
            SUBPIXEL_ROUNDING_OCCURRENCES: {
                NEVER: 0,
                ONLY_AT_REST: 1,
                ALWAYS: 2
            },
            _viewers: new Map,
            getViewer: function(r) {
                return e._viewers.get(this.getElement(r))
            },
            getElement: function(r) {
                return typeof r == "string" && (r = document.getElementById(r)),
                r
            },
            getElementPosition: function(r) {
                var s = new e.Point, l, d;
                for (r = e.getElement(r),
                l = e.getElementStyle(r).position === "fixed",
                d = n(r, l); d; )
                    s.x += r.offsetLeft,
                    s.y += r.offsetTop,
                    l && (s = s.plus(e.getPageScroll())),
                    r = d,
                    l = e.getElementStyle(r).position === "fixed",
                    d = n(r, l);
                return s
            },
            getElementOffset: function(r) {
                r = e.getElement(r);
                var s = r && r.ownerDocument, l, d, f = {
                    top: 0,
                    left: 0
                };
                return s ? (l = s.documentElement,
                typeof r.getBoundingClientRect < "u" && (f = r.getBoundingClientRect()),
                d = s === s.window ? s : s.nodeType === 9 ? s.defaultView || s.parentWindow : !1,
                new e.Point(f.left + (d.pageXOffset || l.scrollLeft) - (l.clientLeft || 0),f.top + (d.pageYOffset || l.scrollTop) - (l.clientTop || 0))) : new e.Point
            },
            getElementSize: function(r) {
                return r = e.getElement(r),
                new e.Point(r.clientWidth,r.clientHeight)
            },
            getElementStyle: document.documentElement.currentStyle ? function(r) {
                return r = e.getElement(r),
                r.currentStyle
            }
            : function(r) {
                return r = e.getElement(r),
                window.getComputedStyle(r, "")
            }
            ,
            getCssPropertyWithVendorPrefix: function(r) {
                var s = {};
                return e.getCssPropertyWithVendorPrefix = function(l) {
                    if (s[l] !== void 0)
                        return s[l];
                    var d = document.createElement("div").style
                      , f = null;
                    if (d[l] !== void 0)
                        f = l;
                    else
                        for (var v = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], y = e.capitalizeFirstLetter(l), x = 0; x < v.length; x++) {
                            var w = v[x] + y;
                            if (d[w] !== void 0) {
                                f = w;
                                break
                            }
                        }
                    return s[l] = f,
                    f
                }
                ,
                e.getCssPropertyWithVendorPrefix(r)
            },
            capitalizeFirstLetter: function(r) {
                return r.charAt(0).toUpperCase() + r.slice(1)
            },
            positiveModulo: function(r, s) {
                var l = r % s;
                return l < 0 && (l += s),
                l
            },
            pointInElement: function(r, s) {
                r = e.getElement(r);
                var l = e.getElementOffset(r)
                  , d = e.getElementSize(r);
                return s.x >= l.x && s.x < l.x + d.x && s.y < l.y + d.y && s.y >= l.y
            },
            getMousePosition: function(r) {
                if (typeof r.pageX == "number")
                    e.getMousePosition = function(s) {
                        var l = new e.Point;
                        return l.x = s.pageX,
                        l.y = s.pageY,
                        l
                    }
                    ;
                else if (typeof r.clientX == "number")
                    e.getMousePosition = function(s) {
                        var l = new e.Point;
                        return l.x = s.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                        l.y = s.clientY + document.body.scrollTop + document.documentElement.scrollTop,
                        l
                    }
                    ;
                else
                    throw new Error("Unknown event mouse position, no known technique.");
                return e.getMousePosition(r)
            },
            getPageScroll: function() {
                var r = document.documentElement || {}
                  , s = document.body || {};
                if (typeof window.pageXOffset == "number")
                    e.getPageScroll = function() {
                        return new e.Point(window.pageXOffset,window.pageYOffset)
                    }
                    ;
                else if (s.scrollLeft || s.scrollTop)
                    e.getPageScroll = function() {
                        return new e.Point(document.body.scrollLeft,document.body.scrollTop)
                    }
                    ;
                else if (r.scrollLeft || r.scrollTop)
                    e.getPageScroll = function() {
                        return new e.Point(document.documentElement.scrollLeft,document.documentElement.scrollTop)
                    }
                    ;
                else
                    return new e.Point(0,0);
                return e.getPageScroll()
            },
            setPageScroll: function(r) {
                if (typeof window.scrollTo < "u")
                    e.setPageScroll = function(d) {
                        window.scrollTo(d.x, d.y)
                    }
                    ;
                else {
                    var s = e.getPageScroll();
                    if (s.x === r.x && s.y === r.y)
                        return;
                    document.body.scrollLeft = r.x,
                    document.body.scrollTop = r.y;
                    var l = e.getPageScroll();
                    if (l.x !== s.x && l.y !== s.y) {
                        e.setPageScroll = function(d) {
                            document.body.scrollLeft = d.x,
                            document.body.scrollTop = d.y
                        }
                        ;
                        return
                    }
                    if (document.documentElement.scrollLeft = r.x,
                    document.documentElement.scrollTop = r.y,
                    l = e.getPageScroll(),
                    l.x !== s.x && l.y !== s.y) {
                        e.setPageScroll = function(d) {
                            document.documentElement.scrollLeft = d.x,
                            document.documentElement.scrollTop = d.y
                        }
                        ;
                        return
                    }
                    e.setPageScroll = function(d) {}
                }
                e.setPageScroll(r)
            },
            getWindowSize: function() {
                var r = document.documentElement || {}
                  , s = document.body || {};
                if (typeof window.innerWidth == "number")
                    e.getWindowSize = function() {
                        return new e.Point(window.innerWidth,window.innerHeight)
                    }
                    ;
                else if (r.clientWidth || r.clientHeight)
                    e.getWindowSize = function() {
                        return new e.Point(document.documentElement.clientWidth,document.documentElement.clientHeight)
                    }
                    ;
                else if (s.clientWidth || s.clientHeight)
                    e.getWindowSize = function() {
                        return new e.Point(document.body.clientWidth,document.body.clientHeight)
                    }
                    ;
                else
                    throw new Error("Unknown window size, no known technique.");
                return e.getWindowSize()
            },
            makeCenteredNode: function(r) {
                r = e.getElement(r);
                var s = [e.makeNeutralElement("div"), e.makeNeutralElement("div"), e.makeNeutralElement("div")];
                return e.extend(s[0].style, {
                    display: "table",
                    height: "100%",
                    width: "100%"
                }),
                e.extend(s[1].style, {
                    display: "table-row"
                }),
                e.extend(s[2].style, {
                    display: "table-cell",
                    verticalAlign: "middle",
                    textAlign: "center"
                }),
                s[0].appendChild(s[1]),
                s[1].appendChild(s[2]),
                s[2].appendChild(r),
                s[0]
            },
            makeNeutralElement: function(r) {
                var s = document.createElement(r)
                  , l = s.style;
                return l.background = "transparent none",
                l.border = "none",
                l.margin = "0px",
                l.padding = "0px",
                l.position = "static",
                s
            },
            now: function() {
                return Date.now ? e.now = Date.now : e.now = function() {
                    return new Date().getTime()
                }
                ,
                e.now()
            },
            makeTransparentImage: function(r) {
                var s = e.makeNeutralElement("img");
                return s.src = r,
                s
            },
            setElementOpacity: function(r, s, l) {
                var d, f;
                r = e.getElement(r),
                l && !e.Browser.alpha && (s = Math.round(s)),
                e.Browser.opacity ? r.style.opacity = s < 1 ? s : "" : s < 1 ? (d = Math.round(100 * s),
                f = "alpha(opacity=" + d + ")",
                r.style.filter = f) : r.style.filter = ""
            },
            setElementTouchActionNone: function(r) {
                r = e.getElement(r),
                typeof r.style.touchAction < "u" ? r.style.touchAction = "none" : typeof r.style.msTouchAction < "u" && (r.style.msTouchAction = "none")
            },
            setElementPointerEvents: function(r, s) {
                r = e.getElement(r),
                typeof r.style < "u" && typeof r.style.pointerEvents < "u" && (r.style.pointerEvents = s)
            },
            setElementPointerEventsNone: function(r) {
                e.setElementPointerEvents(r, "none")
            },
            addClass: function(r, s) {
                r = e.getElement(r),
                r.className ? (" " + r.className + " ").indexOf(" " + s + " ") === -1 && (r.className += " " + s) : r.className = s
            },
            indexOf: function(r, s, l) {
                return Array.prototype.indexOf ? this.indexOf = function(d, f, v) {
                    return d.indexOf(f, v)
                }
                : this.indexOf = function(d, f, v) {
                    var y, x = v || 0, w;
                    if (!d)
                        throw new TypeError;
                    if (w = d.length,
                    w === 0 || x >= w)
                        return -1;
                    for (x < 0 && (x = w - Math.abs(x)),
                    y = x; y < w; y++)
                        if (d[y] === f)
                            return y;
                    return -1
                }
                ,
                this.indexOf(r, s, l)
            },
            removeClass: function(r, s) {
                var l, d = [], f;
                for (r = e.getElement(r),
                l = r.className.split(/\s+/),
                f = 0; f < l.length; f++)
                    l[f] && l[f] !== s && d.push(l[f]);
                r.className = d.join(" ")
            },
            normalizeEventListenerOptions: function(r) {
                var s;
                return typeof r < "u" ? typeof r == "boolean" ? s = e.supportsEventListenerOptions ? {
                    capture: r
                } : r : s = e.supportsEventListenerOptions ? r : typeof r.capture < "u" ? r.capture : !1 : s = e.supportsEventListenerOptions ? {
                    capture: !1
                } : !1,
                s
            },
            addEvent: function() {
                if (e.supportsAddEventListener)
                    return function(r, s, l, d) {
                        d = e.normalizeEventListenerOptions(d),
                        r = e.getElement(r),
                        r.addEventListener(s, l, d)
                    }
                    ;
                if (document.documentElement.attachEvent && document.attachEvent)
                    return function(r, s, l) {
                        r = e.getElement(r),
                        r.attachEvent("on" + s, l)
                    }
                    ;
                throw new Error("No known event model.")
            }(),
            removeEvent: function() {
                if (e.supportsRemoveEventListener)
                    return function(r, s, l, d) {
                        d = e.normalizeEventListenerOptions(d),
                        r = e.getElement(r),
                        r.removeEventListener(s, l, d)
                    }
                    ;
                if (document.documentElement.detachEvent && document.detachEvent)
                    return function(r, s, l) {
                        r = e.getElement(r),
                        r.detachEvent("on" + s, l)
                    }
                    ;
                throw new Error("No known event model.")
            }(),
            cancelEvent: function(r) {
                r.preventDefault()
            },
            eventIsCanceled: function(r) {
                return r.defaultPrevented
            },
            stopEvent: function(r) {
                r.stopPropagation()
            },
            createCallback: function(r, s) {
                var l = [], d;
                for (d = 2; d < arguments.length; d++)
                    l.push(arguments[d]);
                return function() {
                    var f = l.concat([]), v;
                    for (v = 0; v < arguments.length; v++)
                        f.push(arguments[v]);
                    return s.apply(r, f)
                }
            },
            getUrlParameter: function(r) {
                var s = h[r];
                return s || null
            },
            getUrlProtocol: function(r) {
                var s = r.match(/^([a-z]+:)\/\//i);
                return s === null ? window.location.protocol : s[1].toLowerCase()
            },
            createAjaxRequest: function(r) {
                var s;
                try {
                    s = !!new ActiveXObject("Microsoft.XMLHTTP")
                } catch (l) {
                    s = !1
                }
                if (s)
                    window.XMLHttpRequest ? e.createAjaxRequest = function(l) {
                        return l ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
                    }
                    : e.createAjaxRequest = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                    ;
                else if (window.XMLHttpRequest)
                    e.createAjaxRequest = function() {
                        return new XMLHttpRequest
                    }
                    ;
                else
                    throw new Error("Browser doesn't support XMLHttpRequest.");
                return e.createAjaxRequest(r)
            },
            makeAjaxRequest: function(r, s, l) {
                var d, f, v, y;
                e.isPlainObject(r) && (s = r.success,
                l = r.error,
                d = r.withCredentials,
                f = r.headers,
                v = r.responseType || null,
                y = r.postData || null,
                r = r.url);
                var x = e.getUrlProtocol(r)
                  , w = e.createAjaxRequest(x === "file:");
                if (!e.isFunction(s))
                    throw new Error("makeAjaxRequest requires a success callback");
                w.onreadystatechange = function() {
                    w.readyState === 4 && (w.onreadystatechange = function() {}
                    ,
                    w.status >= 200 && w.status < 300 || w.status === 0 && x !== "http:" && x !== "https:" ? s(w) : e.isFunction(l) ? l(w) : e.console.error("AJAX request returned %d: %s", w.status, r))
                }
                ;
                var S = y ? "POST" : "GET";
                try {
                    if (w.open(S, r, !0),
                    v && (w.responseType = v),
                    f)
                        for (var C in f)
                            Object.prototype.hasOwnProperty.call(f, C) && f[C] && w.setRequestHeader(C, f[C]);
                    d && (w.withCredentials = !0),
                    w.send(y)
                } catch (D) {
                    e.console.error("%s while making AJAX request: %s", D.name, D.message),
                    w.onreadystatechange = function() {}
                    ,
                    e.isFunction(l) && l(w, D)
                }
                return w
            },
            jsonp: function(r) {
                var s, l = r.url, d = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = r.callbackName || "openseadragon" + e.now(), v = window[f], y = "$1" + f + "$2", x = r.param || "callback", w = r.callback;
                l = l.replace(/(=)\?(&|$)|\?\?/i, y),
                l += (/\?/.test(l) ? "&" : "?") + x + "=" + f,
                window[f] = function(S) {
                    if (v)
                        window[f] = v;
                    else
                        try {
                            delete window[f]
                        } catch (C) {}
                    w && e.isFunction(w) && w(S)
                }
                ,
                s = document.createElement("script"),
                (r.async !== void 0 || r.async !== !1) && (s.async = "async"),
                r.scriptCharset && (s.charset = r.scriptCharset),
                s.src = l,
                s.onload = s.onreadystatechange = function(S, C) {
                    (C || !s.readyState || /loaded|complete/.test(s.readyState)) && (s.onload = s.onreadystatechange = null,
                    d && s.parentNode && d.removeChild(s),
                    s = void 0)
                }
                ,
                d.insertBefore(s, d.firstChild)
            },
            createFromDZI: function() {
                throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open."
            },
            parseXml: function(r) {
                if (window.DOMParser)
                    e.parseXml = function(s) {
                        var l = null, d;
                        return d = new DOMParser,
                        l = d.parseFromString(s, "text/xml"),
                        l
                    }
                    ;
                else if (window.ActiveXObject)
                    e.parseXml = function(s) {
                        var l = null;
                        return l = new ActiveXObject("Microsoft.XMLDOM"),
                        l.async = !1,
                        l.loadXML(s),
                        l
                    }
                    ;
                else
                    throw new Error("Browser doesn't support XML DOM.");
                return e.parseXml(r)
            },
            parseJSON: function(r) {
                return e.parseJSON = window.JSON.parse,
                e.parseJSON(r)
            },
            imageFormatSupported: function(r) {
                return r = r || "",
                !!o[r.toLowerCase()]
            },
            setImageFormatsSupported: function(r) {
                e.extend(o, r)
            }
        });
        var i = function(r) {};
        e.console = window.console || {
            log: i,
            debug: i,
            info: i,
            warn: i,
            error: i,
            assert: i
        },
        e.Browser = {
            vendor: e.BROWSERS.UNKNOWN,
            version: 0,
            alpha: !0
        };
        var o = {
            bmp: !1,
            jpeg: !0,
            jpg: !0,
            png: !0,
            tif: !1,
            wdp: !1
        }
          , h = {};
        (function() {
            var r = navigator.appVersion, s = navigator.userAgent, l;
            switch (navigator.appName) {
            case "Microsoft Internet Explorer":
                window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE,
                e.Browser.version = parseFloat(s.substring(s.indexOf("MSIE") + 5, s.indexOf(";", s.indexOf("MSIE")))));
                break;
            case "Netscape":
                window.addEventListener && (s.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE,
                e.Browser.version = parseFloat(s.substring(s.indexOf("Edge") + 5))) : s.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE,
                e.Browser.version = parseFloat(s.substring(s.indexOf("Edg") + 4))) : s.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX,
                e.Browser.version = parseFloat(s.substring(s.indexOf("Firefox") + 8))) : s.indexOf("Safari") >= 0 ? (e.Browser.vendor = s.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI,
                e.Browser.version = parseFloat(s.substring(s.substring(0, s.indexOf("Safari")).lastIndexOf("/") + 1, s.indexOf("Safari")))) : (l = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),
                l.exec(s) !== null && (e.Browser.vendor = e.BROWSERS.IE,
                e.Browser.version = parseFloat(RegExp.$1))));
                break;
            case "Opera":
                e.Browser.vendor = e.BROWSERS.OPERA,
                e.Browser.version = parseFloat(r);
                break
            }
            var d = window.location.search.substring(1), f = d.split("&"), v, y, x;
            for (x = 0; x < f.length; x++)
                if (v = f[x],
                y = v.indexOf("="),
                y > 0) {
                    var w = v.substring(0, y)
                      , S = v.substring(y + 1);
                    try {
                        h[w] = decodeURIComponent(S)
                    } catch (C) {
                        e.console.error("Ignoring malformed URL parameter: %s=%s", w, S)
                    }
                }
            e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2),
            e.Browser.opacity = !0,
            e.Browser.vendor === e.BROWSERS.IE && e.Browser.version < 11 && e.console.error("Internet Explorer versions < 11 are not supported by OpenSeadragon")
        }
        )(),
        function(r) {
            var s = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || r.msRequestAnimationFrame
              , l = r.cancelAnimationFrame || r.mozCancelAnimationFrame || r.webkitCancelAnimationFrame || r.msCancelAnimationFrame;
            if (s && l)
                e.requestAnimationFrame = function() {
                    return s.apply(r, arguments)
                }
                ,
                e.cancelAnimationFrame = function() {
                    return l.apply(r, arguments)
                }
                ;
            else {
                var d = [], f = [], v = 0, y;
                e.requestAnimationFrame = function(x) {
                    return d.push([++v, x]),
                    y || (y = setInterval(function() {
                        if (d.length) {
                            var w = e.now()
                              , S = f;
                            for (f = d,
                            d = S; f.length; )
                                f.shift()[1](w)
                        } else
                            clearInterval(y),
                            y = void 0
                    }, 1e3 / 50)),
                    v
                }
                ,
                e.cancelAnimationFrame = function(x) {
                    var w, S;
                    for (w = 0,
                    S = d.length; w < S; w += 1)
                        if (d[w][0] === x) {
                            d.splice(w, 1);
                            return
                        }
                    for (w = 0,
                    S = f.length; w < S; w += 1)
                        if (f[w][0] === x) {
                            f.splice(w, 1);
                            return
                        }
                }
            }
        }(window);
        function n(r, s) {
            return s && r !== document.body ? document.body : r.offsetParent
        }
    }(T),
    function(e, t) {
        _.exports ? _.exports = t() : e.OpenSeadragon = t()
    }(Ue, function() {
        return T
    }),
    function(e) {
        var t = {
            supportsFullScreen: !1,
            isFullScreen: function() {
                return !1
            },
            getFullScreenElement: function() {
                return null
            },
            requestFullScreen: function() {},
            exitFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: "",
            fullScreenErrorEventName: ""
        };
        document.exitFullscreen ? (t.supportsFullScreen = !0,
        t.getFullScreenElement = function() {
            return document.fullscreenElement
        }
        ,
        t.requestFullScreen = function(i) {
            return i.requestFullscreen()
        }
        ,
        t.exitFullScreen = function() {
            document.exitFullscreen()
        }
        ,
        t.fullScreenEventName = "fullscreenchange",
        t.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (t.supportsFullScreen = !0,
        t.getFullScreenElement = function() {
            return document.msFullscreenElement
        }
        ,
        t.requestFullScreen = function(i) {
            return i.msRequestFullscreen()
        }
        ,
        t.exitFullScreen = function() {
            document.msExitFullscreen()
        }
        ,
        t.fullScreenEventName = "MSFullscreenChange",
        t.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (t.supportsFullScreen = !0,
        t.getFullScreenElement = function() {
            return document.webkitFullscreenElement
        }
        ,
        t.requestFullScreen = function(i) {
            return i.webkitRequestFullscreen()
        }
        ,
        t.exitFullScreen = function() {
            document.webkitExitFullscreen()
        }
        ,
        t.fullScreenEventName = "webkitfullscreenchange",
        t.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (t.supportsFullScreen = !0,
        t.getFullScreenElement = function() {
            return document.webkitCurrentFullScreenElement
        }
        ,
        t.requestFullScreen = function(i) {
            return i.webkitRequestFullScreen()
        }
        ,
        t.exitFullScreen = function() {
            document.webkitCancelFullScreen()
        }
        ,
        t.fullScreenEventName = "webkitfullscreenchange",
        t.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (t.supportsFullScreen = !0,
        t.getFullScreenElement = function() {
            return document.mozFullScreenElement
        }
        ,
        t.requestFullScreen = function(i) {
            return i.mozRequestFullScreen()
        }
        ,
        t.exitFullScreen = function() {
            document.mozCancelFullScreen()
        }
        ,
        t.fullScreenEventName = "mozfullscreenchange",
        t.fullScreenErrorEventName = "mozfullscreenerror"),
        t.isFullScreen = function() {
            return t.getFullScreenElement() !== null
        }
        ,
        t.cancelFullScreen = function() {
            e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."),
            t.exitFullScreen()
        }
        ,
        e.extend(e, t)
    }(T),
    function(e) {
        e.EventSource = function() {
            this.events = {}
        }
        ,
        e.EventSource.prototype = {
            addOnceHandler: function(t, i, o, h, n) {
                var r = this;
                h = h || 1;
                var s = 0
                  , l = function(d) {
                    return s++,
                    s === h && r.removeHandler(t, l),
                    i(d)
                };
                this.addHandler(t, l, o, n)
            },
            addHandler: function(t, i, o, h) {
                var n = this.events[t];
                if (n || (this.events[t] = n = []),
                i && e.isFunction(i)) {
                    var r = n.length
                      , s = {
                        handler: i,
                        userData: o || null,
                        priority: h || 0
                    };
                    for (n[r] = s; r > 0 && n[r - 1].priority < n[r].priority; )
                        n[r] = n[r - 1],
                        n[r - 1] = s,
                        r--
                }
            },
            removeHandler: function(t, i) {
                var o = this.events[t], h = [], n;
                if (o && e.isArray(o)) {
                    for (n = 0; n < o.length; n++)
                        o[n].handler !== i && h.push(o[n]);
                    this.events[t] = h
                }
            },
            numberOfHandlers: function(t) {
                var i = this.events[t];
                return i ? i.length : 0
            },
            removeAllHandlers: function(t) {
                if (t)
                    this.events[t] = [];
                else
                    for (var i in this.events)
                        this.events[i] = []
            },
            getHandler: function(t) {
                var i = this.events[t];
                return !i || !i.length ? null : (i = i.length === 1 ? [i[0]] : Array.apply(null, i),
                function(o, h) {
                    var n, r = i.length;
                    for (n = 0; n < r; n++)
                        i[n] && (h.eventSource = o,
                        h.userData = i[n].userData,
                        i[n].handler(h))
                }
                )
            },
            raiseEvent: function(t, i) {
                var o = this.getHandler(t);
                if (o)
                    return o(this, i || {})
            }
        }
    }(T),
    function(e) {
        var t = {};
        e.MouseTracker = function(c) {
            var u = arguments;
            e.isPlainObject(c) || (c = {
                element: u[0],
                clickTimeThreshold: u[1],
                clickDistThreshold: u[2]
            }),
            this.hash = Math.random(),
            this.element = e.getElement(c.element),
            this.clickTimeThreshold = c.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold,
            this.clickDistThreshold = c.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold,
            this.dblClickTimeThreshold = c.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold,
            this.dblClickDistThreshold = c.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold,
            this.userData = c.userData || null,
            this.stopDelay = c.stopDelay || 50,
            this.preProcessEventHandler = c.preProcessEventHandler || null,
            this.contextMenuHandler = c.contextMenuHandler || null,
            this.enterHandler = c.enterHandler || null,
            this.leaveHandler = c.leaveHandler || null,
            this.exitHandler = c.exitHandler || null,
            this.overHandler = c.overHandler || null,
            this.outHandler = c.outHandler || null,
            this.pressHandler = c.pressHandler || null,
            this.nonPrimaryPressHandler = c.nonPrimaryPressHandler || null,
            this.releaseHandler = c.releaseHandler || null,
            this.nonPrimaryReleaseHandler = c.nonPrimaryReleaseHandler || null,
            this.moveHandler = c.moveHandler || null,
            this.scrollHandler = c.scrollHandler || null,
            this.clickHandler = c.clickHandler || null,
            this.dblClickHandler = c.dblClickHandler || null,
            this.dragHandler = c.dragHandler || null,
            this.dragEndHandler = c.dragEndHandler || null,
            this.pinchHandler = c.pinchHandler || null,
            this.stopHandler = c.stopHandler || null,
            this.keyDownHandler = c.keyDownHandler || null,
            this.keyUpHandler = c.keyUpHandler || null,
            this.keyHandler = c.keyHandler || null,
            this.focusHandler = c.focusHandler || null,
            this.blurHandler = c.blurHandler || null;
            var p = this;
            t[this.hash] = {
                click: function(m) {
                    D(p, m)
                },
                dblclick: function(m) {
                    z(p, m)
                },
                keydown: function(m) {
                    U(p, m)
                },
                keyup: function(m) {
                    N(p, m)
                },
                keypress: function(m) {
                    k(p, m)
                },
                focus: function(m) {
                    A(p, m)
                },
                blur: function(m) {
                    G(p, m)
                },
                contextmenu: function(m) {
                    ne(p, m)
                },
                wheel: function(m) {
                    X(p, m)
                },
                mousewheel: function(m) {
                    K(p, m)
                },
                DOMMouseScroll: function(m) {
                    K(p, m)
                },
                MozMousePixelScroll: function(m) {
                    K(p, m)
                },
                losecapture: function(m) {
                    ae(p, m)
                },
                mouseenter: function(m) {
                    M(p, m)
                },
                mouseleave: function(m) {
                    we(p, m)
                },
                mouseover: function(m) {
                    Te(p, m)
                },
                mouseout: function(m) {
                    xe(p, m)
                },
                mousedown: function(m) {
                    pe(p, m)
                },
                mouseup: function(m) {
                    Se(p, m)
                },
                mousemove: function(m) {
                    Pe(p, m)
                },
                touchstart: function(m) {
                    ve(p, m)
                },
                touchend: function(m) {
                    oe(p, m)
                },
                touchmove: function(m) {
                    le(p, m)
                },
                touchcancel: function(m) {
                    ue(p, m)
                },
                gesturestart: function(m) {
                    fe(p, m)
                },
                gesturechange: function(m) {
                    ce(p, m)
                },
                gotpointercapture: function(m) {
                    Re(p, m)
                },
                lostpointercapture: function(m) {
                    be(p, m)
                },
                pointerenter: function(m) {
                    M(p, m)
                },
                pointerleave: function(m) {
                    we(p, m)
                },
                pointerover: function(m) {
                    Te(p, m)
                },
                pointerout: function(m) {
                    xe(p, m)
                },
                pointerdown: function(m) {
                    pe(p, m)
                },
                pointerup: function(m) {
                    Se(p, m)
                },
                pointermove: function(m) {
                    Pe(p, m)
                },
                pointercancel: function(m) {
                    Oe(p, m)
                },
                pointerupcaptured: function(m) {
                    De(p, m)
                },
                pointermovecaptured: function(m) {
                    He(p, m)
                },
                tracking: !1,
                activePointersLists: [],
                lastClickPos: null,
                dblClickTimeOut: null,
                pinchGPoints: [],
                lastPinchDist: 0,
                currentPinchDist: 0,
                lastPinchCenter: null,
                currentPinchCenter: null,
                sentDragEvent: !1
            },
            this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler),
            this.hasScrollHandler = !!this.scrollHandler,
            e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"),
            this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."),
            c.startDisabled || this.setTracking(!0)
        }
        ,
        e.MouseTracker.prototype = {
            destroy: function() {
                r(this),
                this.element = null,
                t[this.hash] = null,
                delete t[this.hash]
            },
            isTracking: function() {
                return t[this.hash].tracking
            },
            setTracking: function(c) {
                return c ? n(this) : r(this),
                this
            },
            getActivePointersListByType: function(c) {
                var u = t[this.hash], p, m = u.activePointersLists.length, P;
                for (p = 0; p < m; p++)
                    if (u.activePointersLists[p].type === c)
                        return u.activePointersLists[p];
                return P = new e.MouseTracker.GesturePointList(c),
                u.activePointersLists.push(P),
                P
            },
            getActivePointerCount: function() {
                var c = t[this.hash], u, p = c.activePointersLists.length, m = 0;
                for (u = 0; u < p; u++)
                    m += c.activePointersLists[u].getLength();
                return m
            },
            preProcessEventHandler: function() {},
            contextMenuHandler: function() {},
            enterHandler: function() {},
            leaveHandler: function() {},
            exitHandler: function() {},
            overHandler: function() {},
            outHandler: function() {},
            pressHandler: function() {},
            nonPrimaryPressHandler: function() {},
            releaseHandler: function() {},
            nonPrimaryReleaseHandler: function() {},
            moveHandler: function() {},
            scrollHandler: function() {},
            clickHandler: function() {},
            dblClickHandler: function() {},
            dragHandler: function() {},
            dragEndHandler: function() {},
            pinchHandler: function() {},
            stopHandler: function() {},
            keyDownHandler: function() {},
            keyUpHandler: function() {},
            keyHandler: function() {},
            focusHandler: function() {},
            blurHandler: function() {}
        };
        var i = function() {
            try {
                return window.self !== window.top
            } catch (c) {
                return !0
            }
        }();
        function o(c) {
            try {
                return c.addEventListener && c.removeEventListener
            } catch (u) {
                return !1
            }
        }
        e.MouseTracker.gesturePointVelocityTracker = function() {
            var c = []
              , u = 0
              , p = 0
              , m = function(V, B) {
                return V.hash.toString() + B.type + B.id.toString()
            }
              , P = function() {
                var V, B = c.length, re, Y, me = e.now(), Fe, ze, Me;
                for (Fe = me - p,
                p = me,
                V = 0; V < B; V++)
                    re = c[V],
                    Y = re.gPoint,
                    Y.direction = Math.atan2(Y.currentPos.y - re.lastPos.y, Y.currentPos.x - re.lastPos.x),
                    ze = re.lastPos.distanceTo(Y.currentPos),
                    re.lastPos = Y.currentPos,
                    Me = 1e3 * ze / (Fe + 1),
                    Y.speed = .75 * Me + .25 * Y.speed
            }
              , b = function(V, B) {
                var re = m(V, B);
                c.push({
                    guid: re,
                    gPoint: B,
                    lastPos: B.currentPos
                }),
                c.length === 1 && (p = e.now(),
                u = window.setInterval(P, 50))
            }
              , L = function(V, B) {
                var re = m(V, B), Y, me = c.length;
                for (Y = 0; Y < me; Y++)
                    if (c[Y].guid === re) {
                        c.splice(Y, 1),
                        me--,
                        me === 0 && window.clearInterval(u);
                        break
                    }
            };
            return {
                addPoint: b,
                removePoint: L
            }
        }(),
        e.MouseTracker.captureElement = document,
        e.MouseTracker.wheelEventName = e.Browser.vendor === e.BROWSERS.IE && e.Browser.version > 8 || "onwheel"in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll",
        e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName],
        e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"),
        window.PointerEvent ? (e.MouseTracker.havePointerEvents = !0,
        e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"),
        e.MouseTracker.havePointerCapture = function() {
            var c = document.createElement("div");
            return e.isFunction(c.setPointerCapture) && e.isFunction(c.releasePointerCapture)
        }(),
        e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = !1,
        e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"),
        e.MouseTracker.mousePointerId = "legacy-mouse",
        e.MouseTracker.havePointerCapture = function() {
            var c = document.createElement("div");
            return e.isFunction(c.setCapture) && e.isFunction(c.releaseCapture)
        }(),
        e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"),
        "ontouchstart"in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"),
        "ongesturestart"in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")),
        e.MouseTracker.GesturePointList = function(c) {
            this._gPoints = [],
            this.type = c,
            this.buttons = 0,
            this.contacts = 0,
            this.clicks = 0,
            this.captureCount = 0
        }
        ,
        e.MouseTracker.GesturePointList.prototype = {
            getLength: function() {
                return this._gPoints.length
            },
            asArray: function() {
                return this._gPoints
            },
            add: function(c) {
                return this._gPoints.push(c)
            },
            removeById: function(c) {
                var u, p = this._gPoints.length;
                for (u = 0; u < p; u++)
                    if (this._gPoints[u].id === c) {
                        this._gPoints.splice(u, 1);
                        break
                    }
                return this._gPoints.length
            },
            getByIndex: function(c) {
                return c < this._gPoints.length ? this._gPoints[c] : null
            },
            getById: function(c) {
                var u, p = this._gPoints.length;
                for (u = 0; u < p; u++)
                    if (this._gPoints[u].id === c)
                        return this._gPoints[u];
                return null
            },
            getPrimary: function(c) {
                var u, p = this._gPoints.length;
                for (u = 0; u < p; u++)
                    if (this._gPoints[u].isPrimary)
                        return this._gPoints[u];
                return null
            },
            addContact: function() {
                ++this.contacts,
                this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"),
                this.contacts = 1)
            },
            removeContact: function() {
                --this.contacts,
                this.contacts < 0 && (this.contacts = 0)
            }
        };
        function h(c) {
            var u = t[c.hash], p, m, P, b, L, V = u.activePointersLists.length;
            for (p = 0; p < V; p++)
                if (P = u.activePointersLists[p],
                P.getLength() > 0) {
                    for (L = [],
                    b = P.asArray(),
                    m = 0; m < b.length; m++)
                        L.push(b[m]);
                    for (m = 0; m < L.length; m++)
                        ge(c, P, L[m])
                }
            for (p = 0; p < V; p++)
                u.activePointersLists.pop();
            u.sentDragEvent = !1
        }
        function n(c) {
            var u = t[c.hash], p, m;
            if (!u.tracking) {
                for (m = 0; m < e.MouseTracker.subscribeEvents.length; m++)
                    p = e.MouseTracker.subscribeEvents[m],
                    e.addEvent(c.element, p, u[p], p === e.MouseTracker.wheelEventName ? {
                        passive: !1,
                        capture: !1
                    } : !1);
                h(c),
                u.tracking = !0
            }
        }
        function r(c) {
            var u = t[c.hash], p, m;
            if (u.tracking) {
                for (m = 0; m < e.MouseTracker.subscribeEvents.length; m++)
                    p = e.MouseTracker.subscribeEvents[m],
                    e.removeEvent(c.element, p, u[p], !1);
                h(c),
                u.tracking = !1
            }
        }
        function s(c, u) {
            var p = t[c.hash];
            if (u === "pointerevent")
                return {
                    upName: "pointerup",
                    upHandler: p.pointerupcaptured,
                    moveName: "pointermove",
                    moveHandler: p.pointermovecaptured
                };
            if (u === "mouse")
                return {
                    upName: "pointerup",
                    upHandler: p.pointerupcaptured,
                    moveName: "pointermove",
                    moveHandler: p.pointermovecaptured
                };
            if (u === "touch")
                return {
                    upName: "touchend",
                    upHandler: p.touchendcaptured,
                    moveName: "touchmove",
                    moveHandler: p.touchmovecaptured
                };
            throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.")
        }
        function l(c, u) {
            var p;
            if (e.MouseTracker.havePointerCapture)
                if (e.MouseTracker.havePointerEvents)
                    try {
                        c.element.setPointerCapture(u.id)
                    } catch (m) {
                        e.console.warn("setPointerCapture() called on invalid pointer ID");
                        return
                    }
                else
                    c.element.setCapture(!0);
            else
                p = s(c, e.MouseTracker.havePointerEvents ? "pointerevent" : u.type),
                i && o(window.top) && e.addEvent(window.top, p.upName, p.upHandler, !0),
                e.addEvent(e.MouseTracker.captureElement, p.upName, p.upHandler, !0),
                e.addEvent(e.MouseTracker.captureElement, p.moveName, p.moveHandler, !0);
            E(c, u, !0)
        }
        function d(c, u) {
            var p, m, P;
            if (e.MouseTracker.havePointerCapture)
                if (e.MouseTracker.havePointerEvents) {
                    if (m = c.getActivePointersListByType(u.type),
                    P = m.getById(u.id),
                    !P || !P.captured)
                        return;
                    try {
                        c.element.releasePointerCapture(u.id)
                    } catch (b) {}
                } else
                    c.element.releaseCapture();
            else
                p = s(c, e.MouseTracker.havePointerEvents ? "pointerevent" : u.type),
                i && o(window.top) && e.removeEvent(window.top, p.upName, p.upHandler, !0),
                e.removeEvent(e.MouseTracker.captureElement, p.moveName, p.moveHandler, !0),
                e.removeEvent(e.MouseTracker.captureElement, p.upName, p.upHandler, !0);
            E(c, u, !1)
        }
        function f(c) {
            return e.MouseTracker.havePointerEvents ? c.pointerId : e.MouseTracker.mousePointerId
        }
        function v(c) {
            return e.MouseTracker.havePointerEvents ? c.pointerType || (e.Browser.vendor === e.BROWSERS.IE ? "mouse" : "") : "mouse"
        }
        function y(c) {
            return e.MouseTracker.havePointerEvents ? c.isPrimary : !0
        }
        function x(c) {
            return e.getMousePosition(c)
        }
        function w(c, u) {
            return S(x(c), u)
        }
        function S(c, u) {
            var p = e.getElementOffset(u);
            return c.minus(p)
        }
        function C(c, u) {
            return new e.Point((c.x + u.x) / 2,(c.y + u.y) / 2)
        }
        function D(c, u) {
            var p = {
                originalEvent: u,
                eventType: "click",
                pointerType: "mouse",
                isEmulated: !1
            };
            g(c, p),
            p.preventDefault && !p.defaultPrevented && e.cancelEvent(u),
            p.stopPropagation && e.stopEvent(u)
        }
        function z(c, u) {
            var p = {
                originalEvent: u,
                eventType: "dblclick",
                pointerType: "mouse",
                isEmulated: !1
            };
            g(c, p),
            p.preventDefault && !p.defaultPrevented && e.cancelEvent(u),
            p.stopPropagation && e.stopEvent(u)
        }
        function U(c, u) {
            var p = null
              , m = {
                originalEvent: u,
                eventType: "keydown",
                pointerType: "",
                isEmulated: !1
            };
            g(c, m),
            c.keyDownHandler && !m.preventGesture && !m.defaultPrevented && (p = {
                eventSource: c,
                keyCode: u.keyCode ? u.keyCode : u.charCode,
                ctrl: u.ctrlKey,
                shift: u.shiftKey,
                alt: u.altKey,
                meta: u.metaKey,
                originalEvent: u,
                preventDefault: m.preventDefault || m.defaultPrevented,
                userData: c.userData
            },
            c.keyDownHandler(p)),
            (p && p.preventDefault || m.preventDefault && !m.defaultPrevented) && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function N(c, u) {
            var p = null
              , m = {
                originalEvent: u,
                eventType: "keyup",
                pointerType: "",
                isEmulated: !1
            };
            g(c, m),
            c.keyUpHandler && !m.preventGesture && !m.defaultPrevented && (p = {
                eventSource: c,
                keyCode: u.keyCode ? u.keyCode : u.charCode,
                ctrl: u.ctrlKey,
                shift: u.shiftKey,
                alt: u.altKey,
                meta: u.metaKey,
                originalEvent: u,
                preventDefault: m.preventDefault || m.defaultPrevented,
                userData: c.userData
            },
            c.keyUpHandler(p)),
            (p && p.preventDefault || m.preventDefault && !m.defaultPrevented) && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function k(c, u) {
            var p = null
              , m = {
                originalEvent: u,
                eventType: "keypress",
                pointerType: "",
                isEmulated: !1
            };
            g(c, m),
            c.keyHandler && !m.preventGesture && !m.defaultPrevented && (p = {
                eventSource: c,
                keyCode: u.keyCode ? u.keyCode : u.charCode,
                ctrl: u.ctrlKey,
                shift: u.shiftKey,
                alt: u.altKey,
                meta: u.metaKey,
                originalEvent: u,
                preventDefault: m.preventDefault || m.defaultPrevented,
                userData: c.userData
            },
            c.keyHandler(p)),
            (p && p.preventDefault || m.preventDefault && !m.defaultPrevented) && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function A(c, u) {
            var p = {
                originalEvent: u,
                eventType: "focus",
                pointerType: "",
                isEmulated: !1
            };
            g(c, p),
            c.focusHandler && !p.preventGesture && c.focusHandler({
                eventSource: c,
                originalEvent: u,
                userData: c.userData
            })
        }
        function G(c, u) {
            var p = {
                originalEvent: u,
                eventType: "blur",
                pointerType: "",
                isEmulated: !1
            };
            g(c, p),
            c.blurHandler && !p.preventGesture && c.blurHandler({
                eventSource: c,
                originalEvent: u,
                userData: c.userData
            })
        }
        function ne(c, u) {
            var p = null
              , m = {
                originalEvent: u,
                eventType: "contextmenu",
                pointerType: "mouse",
                isEmulated: !1
            };
            g(c, m),
            c.contextMenuHandler && !m.preventGesture && !m.defaultPrevented && (p = {
                eventSource: c,
                position: S(x(u), c.element),
                originalEvent: m.originalEvent,
                preventDefault: m.preventDefault || m.defaultPrevented,
                userData: c.userData
            },
            c.contextMenuHandler(p)),
            (p && p.preventDefault || m.preventDefault && !m.defaultPrevented) && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function X(c, u) {
            se(c, u, u)
        }
        function K(c, u) {
            var p = {
                target: u.target || u.srcElement,
                type: "wheel",
                shiftKey: u.shiftKey || !1,
                clientX: u.clientX,
                clientY: u.clientY,
                pageX: u.pageX ? u.pageX : u.clientX,
                pageY: u.pageY ? u.pageY : u.clientY,
                deltaMode: u.type === "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaZ: 0
            };
            e.MouseTracker.wheelEventName === "mousewheel" ? p.deltaY = -u.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : p.deltaY = u.detail,
            se(c, p, u)
        }
        function se(c, u, p) {
            var m = 0, P, b = null;
            m = u.deltaY < 0 ? 1 : -1,
            P = {
                originalEvent: u,
                eventType: "wheel",
                pointerType: "mouse",
                isEmulated: u !== p
            },
            g(c, P),
            c.scrollHandler && !P.preventGesture && !P.defaultPrevented && (b = {
                eventSource: c,
                pointerType: "mouse",
                position: w(u, c.element),
                scroll: m,
                shift: u.shiftKey,
                isTouchEvent: !1,
                originalEvent: p,
                preventDefault: P.preventDefault || P.defaultPrevented,
                userData: c.userData
            },
            c.scrollHandler(b)),
            P.stopPropagation && e.stopEvent(p),
            (b && b.preventDefault || P.preventDefault && !P.defaultPrevented) && e.cancelEvent(p)
        }
        function ae(c, u) {
            var p = {
                id: e.MouseTracker.mousePointerId,
                type: "mouse"
            }
              , m = {
                originalEvent: u,
                eventType: "lostpointercapture",
                pointerType: "mouse",
                isEmulated: !1
            };
            g(c, m),
            u.target === c.element && E(c, p, !1),
            m.stopPropagation && e.stopEvent(u)
        }
        function ve(c, u) {
            var p, m, P = u.changedTouches.length, b, L = c.getActivePointersListByType("touch");
            p = e.now(),
            L.getLength() > u.touches.length - P && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
            var V = {
                originalEvent: u,
                eventType: "pointerdown",
                pointerType: "touch",
                isEmulated: !1
            };
            for (g(c, V),
            m = 0; m < P; m++)
                b = {
                    id: u.changedTouches[m].identifier,
                    type: "touch",
                    isPrimary: L.getLength() === 0,
                    currentPos: x(u.changedTouches[m]),
                    currentTime: p
                },
                H(c, V, b),
                W(c, V, b, 0),
                E(c, b, !0);
            V.preventDefault && !V.defaultPrevented && e.cancelEvent(u),
            V.stopPropagation && e.stopEvent(u)
        }
        function oe(c, u) {
            var p, m, P = u.changedTouches.length, b;
            p = e.now();
            var L = {
                originalEvent: u,
                eventType: "pointerup",
                pointerType: "touch",
                isEmulated: !1
            };
            for (g(c, L),
            m = 0; m < P; m++)
                b = {
                    id: u.changedTouches[m].identifier,
                    type: "touch",
                    currentPos: x(u.changedTouches[m]),
                    currentTime: p
                },
                j(c, L, b, 0),
                E(c, b, !1),
                R(c, L, b);
            L.preventDefault && !L.defaultPrevented && e.cancelEvent(u),
            L.stopPropagation && e.stopEvent(u)
        }
        function le(c, u) {
            var p, m, P = u.changedTouches.length, b;
            p = e.now();
            var L = {
                originalEvent: u,
                eventType: "pointermove",
                pointerType: "touch",
                isEmulated: !1
            };
            for (g(c, L),
            m = 0; m < P; m++)
                b = {
                    id: u.changedTouches[m].identifier,
                    type: "touch",
                    currentPos: x(u.changedTouches[m]),
                    currentTime: p
                },
                q(c, L, b);
            L.preventDefault && !L.defaultPrevented && e.cancelEvent(u),
            L.stopPropagation && e.stopEvent(u)
        }
        function ue(c, u) {
            var p = u.changedTouches.length, m, P, b = {
                originalEvent: u,
                eventType: "pointercancel",
                pointerType: "touch",
                isEmulated: !1
            };
            for (g(c, b),
            m = 0; m < p; m++)
                P = {
                    id: u.changedTouches[m].identifier,
                    type: "touch"
                },
                F(c, b, P);
            b.stopPropagation && e.stopEvent(u)
        }
        function fe(c, u) {
            return e.eventIsCanceled(u) || u.preventDefault(),
            !1
        }
        function ce(c, u) {
            return e.eventIsCanceled(u) || u.preventDefault(),
            !1
        }
        function Re(c, u) {
            var p = {
                originalEvent: u,
                eventType: "gotpointercapture",
                pointerType: v(u),
                isEmulated: !1
            };
            g(c, p),
            u.target === c.element && E(c, {
                id: u.pointerId,
                type: v(u)
            }, !0),
            p.stopPropagation && e.stopEvent(u)
        }
        function be(c, u) {
            var p = {
                originalEvent: u,
                eventType: "lostpointercapture",
                pointerType: v(u),
                isEmulated: !1
            };
            g(c, p),
            u.target === c.element && E(c, {
                id: u.pointerId,
                type: v(u)
            }, !1),
            p.stopPropagation && e.stopEvent(u)
        }
        function M(c, u) {
            var p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            }
              , m = {
                originalEvent: u,
                eventType: "pointerenter",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            H(c, m, p)
        }
        function we(c, u) {
            var p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            }
              , m = {
                originalEvent: u,
                eventType: "pointerleave",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            R(c, m, p)
        }
        function Te(c, u) {
            var p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            }
              , m = {
                originalEvent: u,
                eventType: "pointerover",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            I(c, m, p),
            m.preventDefault && !m.defaultPrevented && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function xe(c, u) {
            var p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            }
              , m = {
                originalEvent: u,
                eventType: "pointerout",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            O(c, m, p),
            m.preventDefault && !m.defaultPrevented && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function pe(c, u) {
            var p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            }
              , m = e.MouseTracker.havePointerEvents && p.type === "touch" && e.Browser.vendor !== e.BROWSERS.IE
              , P = {
                originalEvent: u,
                eventType: "pointerdown",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, P),
            W(c, P, p, u.button),
            P.preventDefault && !P.defaultPrevented && e.cancelEvent(u),
            P.stopPropagation && e.stopEvent(u),
            P.shouldCapture && (m ? E(c, p, !0) : l(c, p))
        }
        function Se(c, u) {
            Ee(c, u)
        }
        function De(c, u) {
            var p = c.getActivePointersListByType(v(u));
            p.getById(u.pointerId) && Ee(c, u),
            e.stopEvent(u)
        }
        function Ee(c, u) {
            var p;
            p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            };
            var m = {
                originalEvent: u,
                eventType: "pointerup",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            j(c, m, p, u.button),
            m.preventDefault && !m.defaultPrevented && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u),
            m.shouldReleaseCapture && (u.target === c.element ? d(c, p) : E(c, p, !1))
        }
        function Pe(c, u) {
            _e(c, u)
        }
        function He(c, u) {
            var p = c.getActivePointersListByType(v(u));
            p.getById(u.pointerId) && _e(c, u),
            e.stopEvent(u)
        }
        function _e(c, u) {
            var p = {
                id: f(u),
                type: v(u),
                isPrimary: y(u),
                currentPos: x(u),
                currentTime: e.now()
            }
              , m = {
                originalEvent: u,
                eventType: "pointermove",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            q(c, m, p),
            m.preventDefault && !m.defaultPrevented && e.cancelEvent(u),
            m.stopPropagation && e.stopEvent(u)
        }
        function Oe(c, u) {
            var p = {
                id: u.pointerId,
                type: v(u)
            }
              , m = {
                originalEvent: u,
                eventType: "pointercancel",
                pointerType: p.type,
                isEmulated: !1
            };
            g(c, m),
            F(c, m, p),
            m.stopPropagation && e.stopEvent(u)
        }
        function ye(c, u) {
            return u.speed = 0,
            u.direction = 0,
            u.contactPos = u.currentPos,
            u.contactTime = u.currentTime,
            u.lastPos = u.currentPos,
            u.lastTime = u.currentTime,
            c.add(u)
        }
        function ge(c, u, p) {
            var m, P = u.getById(p.id);
            return P ? (P.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"),
            d(c, P)),
            u.removeContact(),
            m = u.removeById(p.id)) : m = u.getLength(),
            m
        }
        function a(c, u) {
            switch (u.eventType) {
            case "pointermove":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !1,
                u.preventGesture = !c.hasGestureHandlers,
                u.stopPropagation = !1;
                break;
            case "pointerover":
            case "pointerout":
            case "contextmenu":
            case "keydown":
            case "keyup":
            case "keypress":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !1,
                u.preventGesture = !1,
                u.stopPropagation = !1;
                break;
            case "pointerdown":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !1,
                u.preventGesture = !c.hasGestureHandlers,
                u.stopPropagation = !1;
                break;
            case "pointerup":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !1,
                u.preventGesture = !c.hasGestureHandlers,
                u.stopPropagation = !1;
                break;
            case "wheel":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !1,
                u.preventGesture = !c.hasScrollHandler,
                u.stopPropagation = !1;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
                u.isStoppable = !0,
                u.isCancelable = !1,
                u.preventDefault = !1,
                u.preventGesture = !1,
                u.stopPropagation = !1;
                break;
            case "click":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !!c.clickHandler,
                u.preventGesture = !1,
                u.stopPropagation = !1;
                break;
            case "dblclick":
                u.isStoppable = !0,
                u.isCancelable = !0,
                u.preventDefault = !!c.dblClickHandler,
                u.preventGesture = !1,
                u.stopPropagation = !1;
                break;
            case "focus":
            case "blur":
            case "pointerenter":
            case "pointerleave":
            default:
                u.isStoppable = !1,
                u.isCancelable = !1,
                u.preventDefault = !1,
                u.preventGesture = !1,
                u.stopPropagation = !1;
                break
            }
        }
        function g(c, u) {
            u.eventSource = c,
            u.eventPhase = u.originalEvent && typeof u.originalEvent.eventPhase < "u" ? u.originalEvent.eventPhase : 0,
            u.defaultPrevented = e.eventIsCanceled(u.originalEvent),
            u.shouldCapture = !1,
            u.shouldReleaseCapture = !1,
            u.userData = c.userData,
            a(c, u),
            c.preProcessEventHandler && c.preProcessEventHandler(u)
        }
        function E(c, u, p) {
            var m = c.getActivePointersListByType(u.type)
              , P = m.getById(u.id);
            P ? p && !P.captured ? (P.captured = !0,
            m.captureCount++) : !p && P.captured && (P.captured = !1,
            m.captureCount--,
            m.captureCount < 0 && (m.captureCount = 0,
            e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer")
        }
        function H(c, u, p) {
            var m = c.getActivePointersListByType(p.type), P;
            P = m.getById(p.id),
            P ? (P.insideElement = !0,
            P.lastPos = P.currentPos,
            P.lastTime = P.currentTime,
            P.currentPos = p.currentPos,
            P.currentTime = p.currentTime,
            p = P) : (p.captured = !1,
            p.insideElementPressed = !1,
            p.insideElement = !0,
            ye(m, p)),
            c.enterHandler && c.enterHandler({
                eventSource: c,
                pointerType: p.type,
                position: S(p.currentPos, c.element),
                buttons: m.buttons,
                pointers: c.getActivePointerCount(),
                insideElementPressed: p.insideElementPressed,
                buttonDownAny: m.buttons !== 0,
                isTouchEvent: p.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            })
        }
        function R(c, u, p) {
            var m = c.getActivePointersListByType(p.type), P, b;
            P = m.getById(p.id),
            P ? (P.captured ? (P.insideElement = !1,
            P.lastPos = P.currentPos,
            P.lastTime = P.currentTime,
            P.currentPos = p.currentPos,
            P.currentTime = p.currentTime) : ge(c, m, P),
            p = P) : (p.captured = !1,
            p.insideElementPressed = !1),
            (c.leaveHandler || c.exitHandler) && (b = {
                eventSource: c,
                pointerType: p.type,
                position: p.currentPos && S(p.currentPos, c.element),
                buttons: m.buttons,
                pointers: c.getActivePointerCount(),
                insideElementPressed: p.insideElementPressed,
                buttonDownAny: m.buttons !== 0,
                isTouchEvent: p.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            },
            c.leaveHandler && c.leaveHandler(b),
            c.exitHandler && c.exitHandler(b))
        }
        function I(c, u, p) {
            var m, P;
            m = c.getActivePointersListByType(p.type),
            P = m.getById(p.id),
            P ? p = P : (p.captured = !1,
            p.insideElementPressed = !1),
            c.overHandler && c.overHandler({
                eventSource: c,
                pointerType: p.type,
                position: S(p.currentPos, c.element),
                buttons: m.buttons,
                pointers: c.getActivePointerCount(),
                insideElementPressed: p.insideElementPressed,
                buttonDownAny: m.buttons !== 0,
                isTouchEvent: p.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            })
        }
        function O(c, u, p) {
            var m, P;
            m = c.getActivePointersListByType(p.type),
            P = m.getById(p.id),
            P ? p = P : (p.captured = !1,
            p.insideElementPressed = !1),
            c.outHandler && c.outHandler({
                eventSource: c,
                pointerType: p.type,
                position: p.currentPos && S(p.currentPos, c.element),
                buttons: m.buttons,
                pointers: c.getActivePointerCount(),
                insideElementPressed: p.insideElementPressed,
                buttonDownAny: m.buttons !== 0,
                isTouchEvent: p.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            })
        }
        function W(c, u, p, m) {
            var P = t[c.hash], b = c.getActivePointersListByType(p.type), L;
            if (typeof u.originalEvent.buttons < "u" ? b.buttons = u.originalEvent.buttons : m === 0 ? b.buttons |= 1 : m === 1 ? b.buttons |= 4 : m === 2 ? b.buttons |= 2 : m === 3 ? b.buttons |= 8 : m === 4 ? b.buttons |= 16 : m === 5 && (b.buttons |= 32),
            m !== 0) {
                u.shouldCapture = !1,
                u.shouldReleaseCapture = !1,
                c.nonPrimaryPressHandler && !u.preventGesture && !u.defaultPrevented && (u.preventDefault = !0,
                c.nonPrimaryPressHandler({
                    eventSource: c,
                    pointerType: p.type,
                    position: S(p.currentPos, c.element),
                    button: m,
                    buttons: b.buttons,
                    isTouchEvent: p.type === "touch",
                    originalEvent: u.originalEvent,
                    userData: c.userData
                }));
                return
            }
            L = b.getById(p.id),
            L ? (L.insideElementPressed = !0,
            L.insideElement = !0,
            L.originalTarget = u.originalEvent.target,
            L.contactPos = p.currentPos,
            L.contactTime = p.currentTime,
            L.lastPos = L.currentPos,
            L.lastTime = L.currentTime,
            L.currentPos = p.currentPos,
            L.currentTime = p.currentTime,
            p = L) : (p.captured = !1,
            p.insideElementPressed = !0,
            p.insideElement = !0,
            p.originalTarget = u.originalEvent.target,
            ye(b, p)),
            b.addContact(),
            !u.preventGesture && !u.defaultPrevented ? (u.shouldCapture = !0,
            u.shouldReleaseCapture = !1,
            u.preventDefault = !0,
            (c.dragHandler || c.dragEndHandler || c.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(c, p),
            b.contacts === 1 ? c.pressHandler && !u.preventGesture && c.pressHandler({
                eventSource: c,
                pointerType: p.type,
                position: S(p.contactPos, c.element),
                buttons: b.buttons,
                isTouchEvent: p.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }) : b.contacts === 2 && c.pinchHandler && p.type === "touch" && (P.pinchGPoints = b.asArray(),
            P.lastPinchDist = P.currentPinchDist = P.pinchGPoints[0].currentPos.distanceTo(P.pinchGPoints[1].currentPos),
            P.lastPinchCenter = P.currentPinchCenter = C(P.pinchGPoints[0].currentPos, P.pinchGPoints[1].currentPos))) : (u.shouldCapture = !1,
            u.shouldReleaseCapture = !1)
        }
        function j(c, u, p, m) {
            var P = t[c.hash], b = c.getActivePointersListByType(p.type), L, V, B, re = !1, Y;
            if (typeof u.originalEvent.buttons < "u" ? b.buttons = u.originalEvent.buttons : m === 0 ? b.buttons ^= -2 : m === 1 ? b.buttons ^= -5 : m === 2 ? b.buttons ^= -3 : m === 3 ? b.buttons ^= -9 : m === 4 ? b.buttons ^= -17 : m === 5 && (b.buttons ^= -33),
            u.shouldCapture = !1,
            m !== 0) {
                u.shouldReleaseCapture = !1,
                c.nonPrimaryReleaseHandler && !u.preventGesture && !u.defaultPrevented && (u.preventDefault = !0,
                c.nonPrimaryReleaseHandler({
                    eventSource: c,
                    pointerType: p.type,
                    position: S(p.currentPos, c.element),
                    button: m,
                    buttons: b.buttons,
                    isTouchEvent: p.type === "touch",
                    originalEvent: u.originalEvent,
                    userData: c.userData
                }));
                return
            }
            B = b.getById(p.id),
            B ? (b.removeContact(),
            B.captured && (re = !0),
            B.lastPos = B.currentPos,
            B.lastTime = B.currentTime,
            B.currentPos = p.currentPos,
            B.currentTime = p.currentTime,
            B.insideElement || ge(c, b, B),
            L = B.currentPos,
            V = B.currentTime) : (p.captured = !1,
            p.insideElementPressed = !1,
            p.insideElement = !0,
            ye(b, p),
            B = p),
            !u.preventGesture && !u.defaultPrevented && (re ? (u.shouldReleaseCapture = !0,
            u.preventDefault = !0,
            (c.dragHandler || c.dragEndHandler || c.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(c, B),
            b.contacts === 0 ? (c.releaseHandler && L && c.releaseHandler({
                eventSource: c,
                pointerType: B.type,
                position: S(L, c.element),
                buttons: b.buttons,
                insideElementPressed: B.insideElementPressed,
                insideElementReleased: B.insideElement,
                isTouchEvent: B.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }),
            c.dragEndHandler && P.sentDragEvent && c.dragEndHandler({
                eventSource: c,
                pointerType: B.type,
                position: S(B.currentPos, c.element),
                speed: B.speed,
                direction: B.direction,
                shift: u.originalEvent.shiftKey,
                isTouchEvent: B.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }),
            P.sentDragEvent = !1,
            (c.clickHandler || c.dblClickHandler) && B.insideElement && (Y = V - B.contactTime <= c.clickTimeThreshold && B.contactPos.distanceTo(L) <= c.clickDistThreshold,
            c.clickHandler && c.clickHandler({
                eventSource: c,
                pointerType: B.type,
                position: S(B.currentPos, c.element),
                quick: Y,
                shift: u.originalEvent.shiftKey,
                isTouchEvent: B.type === "touch",
                originalEvent: u.originalEvent,
                originalTarget: B.originalTarget,
                userData: c.userData
            }),
            c.dblClickHandler && Y && (b.clicks++,
            b.clicks === 1 ? (P.lastClickPos = L,
            P.dblClickTimeOut = setTimeout(function() {
                b.clicks = 0
            }, c.dblClickTimeThreshold)) : b.clicks === 2 && (clearTimeout(P.dblClickTimeOut),
            b.clicks = 0,
            P.lastClickPos.distanceTo(L) <= c.dblClickDistThreshold && c.dblClickHandler({
                eventSource: c,
                pointerType: B.type,
                position: S(B.currentPos, c.element),
                shift: u.originalEvent.shiftKey,
                isTouchEvent: B.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }),
            P.lastClickPos = null)))) : b.contacts === 2 && c.pinchHandler && B.type === "touch" && (P.pinchGPoints = b.asArray(),
            P.lastPinchDist = P.currentPinchDist = P.pinchGPoints[0].currentPos.distanceTo(P.pinchGPoints[1].currentPos),
            P.lastPinchCenter = P.currentPinchCenter = C(P.pinchGPoints[0].currentPos, P.pinchGPoints[1].currentPos))) : (u.shouldReleaseCapture = !1,
            c.releaseHandler && L && (c.releaseHandler({
                eventSource: c,
                pointerType: B.type,
                position: S(L, c.element),
                buttons: b.buttons,
                insideElementPressed: B.insideElementPressed,
                insideElementReleased: B.insideElement,
                isTouchEvent: B.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }),
            u.preventDefault = !0)))
        }
        function q(c, u, p) {
            var m = t[c.hash], P = c.getActivePointersListByType(p.type), b, L, V;
            if (typeof u.originalEvent.buttons < "u" && (P.buttons = u.originalEvent.buttons),
            b = P.getById(p.id),
            b)
                b.lastPos = b.currentPos,
                b.lastTime = b.currentTime,
                b.currentPos = p.currentPos,
                b.currentTime = p.currentTime;
            else
                return;
            u.shouldCapture = !1,
            u.shouldReleaseCapture = !1,
            c.stopHandler && p.type === "mouse" && (clearTimeout(c.stopTimeOut),
            c.stopTimeOut = setTimeout(function() {
                Z(c, u.originalEvent, p.type)
            }, c.stopDelay)),
            P.contacts === 0 ? c.moveHandler && c.moveHandler({
                eventSource: c,
                pointerType: p.type,
                position: S(p.currentPos, c.element),
                buttons: P.buttons,
                isTouchEvent: p.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }) : P.contacts === 1 ? (c.moveHandler && (b = P.asArray()[0],
            c.moveHandler({
                eventSource: c,
                pointerType: b.type,
                position: S(b.currentPos, c.element),
                buttons: P.buttons,
                isTouchEvent: b.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            })),
            c.dragHandler && !u.preventGesture && !u.defaultPrevented && (b = P.asArray()[0],
            V = b.currentPos.minus(b.lastPos),
            c.dragHandler({
                eventSource: c,
                pointerType: b.type,
                position: S(b.currentPos, c.element),
                buttons: P.buttons,
                delta: V,
                speed: b.speed,
                direction: b.direction,
                shift: u.originalEvent.shiftKey,
                isTouchEvent: b.type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            }),
            u.preventDefault = !0,
            m.sentDragEvent = !0)) : P.contacts === 2 && (c.moveHandler && (L = P.asArray(),
            c.moveHandler({
                eventSource: c,
                pointerType: L[0].type,
                position: S(C(L[0].currentPos, L[1].currentPos), c.element),
                buttons: P.buttons,
                isTouchEvent: L[0].type === "touch",
                originalEvent: u.originalEvent,
                userData: c.userData
            })),
            c.pinchHandler && p.type === "touch" && !u.preventGesture && !u.defaultPrevented && (V = m.pinchGPoints[0].currentPos.distanceTo(m.pinchGPoints[1].currentPos),
            V !== m.currentPinchDist && (m.lastPinchDist = m.currentPinchDist,
            m.currentPinchDist = V,
            m.lastPinchCenter = m.currentPinchCenter,
            m.currentPinchCenter = C(m.pinchGPoints[0].currentPos, m.pinchGPoints[1].currentPos),
            c.pinchHandler({
                eventSource: c,
                pointerType: "touch",
                gesturePoints: m.pinchGPoints,
                lastCenter: S(m.lastPinchCenter, c.element),
                center: S(m.currentPinchCenter, c.element),
                lastDistance: m.lastPinchDist,
                distance: m.currentPinchDist,
                shift: u.originalEvent.shiftKey,
                originalEvent: u.originalEvent,
                userData: c.userData
            }),
            u.preventDefault = !0)))
        }
        function F(c, u, p) {
            var m = c.getActivePointersListByType(p.type), P;
            P = m.getById(p.id),
            P && ge(c, m, P)
        }
        function Z(c, u, p) {
            c.stopHandler && c.stopHandler({
                eventSource: c,
                pointerType: p,
                position: w(u, c.element),
                buttons: c.getActivePointersListByType(p).buttons,
                isTouchEvent: p === "touch",
                originalEvent: u,
                userData: c.userData
            })
        }
    }(T),
    function(e) {
        e.ControlAnchor = {
            NONE: 0,
            TOP_LEFT: 1,
            TOP_RIGHT: 2,
            BOTTOM_RIGHT: 3,
            BOTTOM_LEFT: 4,
            ABSOLUTE: 5
        },
        e.Control = function(t, i, o) {
            var h = t.parentNode;
            typeof i == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"),
            i = {
                anchor: i
            }),
            i.attachToViewer = typeof i.attachToViewer > "u" ? !0 : i.attachToViewer,
            this.autoFade = typeof i.autoFade > "u" ? !0 : i.autoFade,
            this.element = t,
            this.anchor = i.anchor,
            this.container = o,
            this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"),
            this.wrapper.style.position = "absolute",
            this.wrapper.style.top = typeof i.top == "number" ? i.top + "px" : i.top,
            this.wrapper.style.left = typeof i.left == "number" ? i.left + "px" : i.left,
            this.wrapper.style.height = typeof i.height == "number" ? i.height + "px" : i.height,
            this.wrapper.style.width = typeof i.width == "number" ? i.width + "px" : i.width,
            this.wrapper.style.margin = "0px",
            this.wrapper.style.padding = "0px",
            this.element.style.position = "relative",
            this.element.style.top = "0px",
            this.element.style.left = "0px",
            this.element.style.height = "100%",
            this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"),
            this.wrapper.style.display = "inline-block",
            this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")),
            this.wrapper.appendChild(this.element),
            i.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : h.appendChild(this.wrapper)
        }
        ,
        e.Control.prototype = {
            destroy: function() {
                this.wrapper.removeChild(this.element),
                this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper)
            },
            isVisible: function() {
                return this.wrapper.style.display !== "none"
            },
            setVisible: function(t) {
                this.wrapper.style.display = t ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none"
            },
            setOpacity: function(t) {
                this.element[e.SIGNAL] && e.Browser.vendor === e.BROWSERS.IE ? e.setElementOpacity(this.element, t, !0) : e.setElementOpacity(this.wrapper, t, !0)
            }
        }
    }(T),
    function(e) {
        e.ControlDock = function(i) {
            var o = ["topleft", "topright", "bottomright", "bottomleft"], h, n;
            for (e.extend(!0, this, {
                id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6),
                container: e.makeNeutralElement("div"),
                controls: []
            }, i),
            this.container.onsubmit = function() {
                return !1
            }
            ,
            this.element && (this.element = e.getElement(this.element),
            this.element.appendChild(this.container),
            this.element.style.position = "relative",
            this.container.style.width = "100%",
            this.container.style.height = "100%"),
            n = 0; n < o.length; n++)
                h = o[n],
                this.controls[h] = e.makeNeutralElement("div"),
                this.controls[h].style.position = "absolute",
                h.match("left") && (this.controls[h].style.left = "0px"),
                h.match("right") && (this.controls[h].style.right = "0px"),
                h.match("top") && (this.controls[h].style.top = "0px"),
                h.match("bottom") && (this.controls[h].style.bottom = "0px");
            this.container.appendChild(this.controls.topleft),
            this.container.appendChild(this.controls.topright),
            this.container.appendChild(this.controls.bottomright),
            this.container.appendChild(this.controls.bottomleft)
        }
        ,
        e.ControlDock.prototype = {
            addControl: function(i, o) {
                i = e.getElement(i);
                var h = null;
                if (!(t(this, i) >= 0)) {
                    switch (o.anchor) {
                    case e.ControlAnchor.TOP_RIGHT:
                        h = this.controls.topright,
                        i.style.position = "relative",
                        i.style.paddingRight = "0px",
                        i.style.paddingTop = "0px";
                        break;
                    case e.ControlAnchor.BOTTOM_RIGHT:
                        h = this.controls.bottomright,
                        i.style.position = "relative",
                        i.style.paddingRight = "0px",
                        i.style.paddingBottom = "0px";
                        break;
                    case e.ControlAnchor.BOTTOM_LEFT:
                        h = this.controls.bottomleft,
                        i.style.position = "relative",
                        i.style.paddingLeft = "0px",
                        i.style.paddingBottom = "0px";
                        break;
                    case e.ControlAnchor.TOP_LEFT:
                        h = this.controls.topleft,
                        i.style.position = "relative",
                        i.style.paddingLeft = "0px",
                        i.style.paddingTop = "0px";
                        break;
                    case e.ControlAnchor.ABSOLUTE:
                        h = this.container,
                        i.style.margin = "0px",
                        i.style.padding = "0px";
                        break;
                    default:
                    case e.ControlAnchor.NONE:
                        h = this.container,
                        i.style.margin = "0px",
                        i.style.padding = "0px";
                        break
                    }
                    this.controls.push(new e.Control(i,o,h)),
                    i.style.display = "inline-block"
                }
            },
            removeControl: function(i) {
                i = e.getElement(i);
                var o = t(this, i);
                return o >= 0 && (this.controls[o].destroy(),
                this.controls.splice(o, 1)),
                this
            },
            clearControls: function() {
                for (; this.controls.length > 0; )
                    this.controls.pop().destroy();
                return this
            },
            areControlsEnabled: function() {
                var i;
                for (i = this.controls.length - 1; i >= 0; i--)
                    if (this.controls[i].isVisible())
                        return !0;
                return !1
            },
            setControlsEnabled: function(i) {
                var o;
                for (o = this.controls.length - 1; o >= 0; o--)
                    this.controls[o].setVisible(i);
                return this
            }
        };
        function t(i, o) {
            var h = i.controls, n;
            for (n = h.length - 1; n >= 0; n--)
                if (h[n].element === o)
                    return n;
            return -1
        }
    }(T),
    function(e) {
        e.Placement = e.freezeObject({
            CENTER: 0,
            TOP_LEFT: 1,
            TOP: 2,
            TOP_RIGHT: 3,
            RIGHT: 4,
            BOTTOM_RIGHT: 5,
            BOTTOM: 6,
            BOTTOM_LEFT: 7,
            LEFT: 8,
            properties: {
                0: {
                    isLeft: !1,
                    isHorizontallyCentered: !0,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !0,
                    isBottom: !1
                },
                1: {
                    isLeft: !0,
                    isHorizontallyCentered: !1,
                    isRight: !1,
                    isTop: !0,
                    isVerticallyCentered: !1,
                    isBottom: !1
                },
                2: {
                    isLeft: !1,
                    isHorizontallyCentered: !0,
                    isRight: !1,
                    isTop: !0,
                    isVerticallyCentered: !1,
                    isBottom: !1
                },
                3: {
                    isLeft: !1,
                    isHorizontallyCentered: !1,
                    isRight: !0,
                    isTop: !0,
                    isVerticallyCentered: !1,
                    isBottom: !1
                },
                4: {
                    isLeft: !1,
                    isHorizontallyCentered: !1,
                    isRight: !0,
                    isTop: !1,
                    isVerticallyCentered: !0,
                    isBottom: !1
                },
                5: {
                    isLeft: !1,
                    isHorizontallyCentered: !1,
                    isRight: !0,
                    isTop: !1,
                    isVerticallyCentered: !1,
                    isBottom: !0
                },
                6: {
                    isLeft: !1,
                    isHorizontallyCentered: !0,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !1,
                    isBottom: !0
                },
                7: {
                    isLeft: !0,
                    isHorizontallyCentered: !1,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !1,
                    isBottom: !0
                },
                8: {
                    isLeft: !0,
                    isHorizontallyCentered: !1,
                    isRight: !1,
                    isTop: !1,
                    isVerticallyCentered: !0,
                    isBottom: !1
                }
            }
        })
    }(T),
    function(e) {
        var t = {}
          , i = 1;
        e.Viewer = function(a) {
            var g = arguments, E = this, H;
            if (e.isPlainObject(a) || (a = {
                id: g[0],
                xmlPath: g.length > 1 ? g[1] : void 0,
                prefixUrl: g.length > 2 ? g[2] : void 0,
                controls: g.length > 3 ? g[3] : void 0,
                overlays: g.length > 4 ? g[4] : void 0
            }),
            a.config && (e.extend(!0, a, a.config),
            delete a.config),
            e.extend(!0, this, {
                id: a.id,
                hash: a.hash || i++,
                initialPage: 0,
                element: null,
                container: null,
                canvas: null,
                overlays: [],
                overlaysContainer: null,
                previousBody: [],
                customControls: [],
                source: null,
                drawer: null,
                world: null,
                viewport: null,
                navigator: null,
                collectionViewport: null,
                collectionDrawer: null,
                navImages: null,
                buttonGroup: null,
                profiler: null
            }, e.DEFAULT_SETTINGS, a),
            typeof this.hash > "u")
                throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
            for (typeof t[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."),
            t[this.hash] = {
                fsBoundsDelta: new e.Point(1,1),
                prevContainerSize: null,
                animating: !1,
                forceRedraw: !1,
                needsResize: !1,
                forceResize: !1,
                mouseInside: !1,
                group: null,
                zooming: !1,
                zoomFactor: null,
                lastZoomTime: null,
                fullPage: !1,
                onfullscreenchange: null,
                lastClickTime: null,
                draggingToZoom: !1
            },
            this._sequenceIndex = 0,
            this._firstOpen = !0,
            this._updateRequestId = null,
            this._loadQueue = [],
            this.currentOverlays = [],
            this._updatePixelDensityRatioBind = null,
            this._lastScrollTime = e.now(),
            e.EventSource.call(this),
            this.addHandler("open-failed", function(R) {
                var I = e.getString("Errors.OpenFailed", R.eventSource, R.message);
                E._showMessage(I)
            }),
            e.ControlDock.call(this, a),
            this.xmlPath && (this.tileSources = [this.xmlPath]),
            this.element = this.element || document.getElementById(this.id),
            this.canvas = e.makeNeutralElement("div"),
            this.canvas.className = "openseadragon-canvas",
            function(R) {
                R.width = "100%",
                R.height = "100%",
                R.overflow = "hidden",
                R.position = "absolute",
                R.top = "0px",
                R.left = "0px"
            }(this.canvas.style),
            e.setElementTouchActionNone(this.canvas),
            a.tabIndex !== "" && (this.canvas.tabIndex = a.tabIndex === void 0 ? 0 : a.tabIndex),
            this.container.className = "openseadragon-container",
            function(R) {
                R.width = "100%",
                R.height = "100%",
                R.position = "relative",
                R.overflow = "hidden",
                R.left = "0px",
                R.top = "0px",
                R.textAlign = "left"
            }(this.container.style),
            e.setElementTouchActionNone(this.container),
            this.container.insertBefore(this.canvas, this.container.firstChild),
            this.element.appendChild(this.container),
            this.bodyWidth = document.body.style.width,
            this.bodyHeight = document.body.style.height,
            this.bodyOverflow = document.body.style.overflow,
            this.docOverflow = document.documentElement.style.overflow,
            this.innerTracker = new e.MouseTracker({
                userData: "Viewer.innerTracker",
                element: this.canvas,
                startDisabled: !this.mouseNavEnabled,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                dblClickTimeThreshold: this.dblClickTimeThreshold,
                dblClickDistThreshold: this.dblClickDistThreshold,
                contextMenuHandler: e.delegate(this, w),
                keyDownHandler: e.delegate(this, S),
                keyHandler: e.delegate(this, C),
                clickHandler: e.delegate(this, D),
                dblClickHandler: e.delegate(this, z),
                dragHandler: e.delegate(this, U),
                dragEndHandler: e.delegate(this, N),
                enterHandler: e.delegate(this, k),
                leaveHandler: e.delegate(this, A),
                pressHandler: e.delegate(this, G),
                releaseHandler: e.delegate(this, ne),
                nonPrimaryPressHandler: e.delegate(this, X),
                nonPrimaryReleaseHandler: e.delegate(this, K),
                scrollHandler: e.delegate(this, oe),
                pinchHandler: e.delegate(this, se),
                focusHandler: e.delegate(this, ae),
                blurHandler: e.delegate(this, ve)
            }),
            this.outerTracker = new e.MouseTracker({
                userData: "Viewer.outerTracker",
                element: this.container,
                startDisabled: !this.mouseNavEnabled,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                dblClickTimeThreshold: this.dblClickTimeThreshold,
                dblClickDistThreshold: this.dblClickDistThreshold,
                enterHandler: e.delegate(this, le),
                leaveHandler: e.delegate(this, ue)
            }),
            this.toolbar && (this.toolbar = new e.ControlDock({
                element: this.toolbar
            })),
            this.bindStandardControls(),
            t[this.hash].prevContainerSize = o(this.container),
            window.ResizeObserver ? (this._autoResizePolling = !1,
            this._resizeObserver = new ResizeObserver(function() {
                t[E.hash].needsResize = !0
            }
            ),
            this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = !0,
            this.world = new e.World({
                viewer: this
            }),
            this.world.addHandler("add-item", function(R) {
                E.source = E.world.getItemAt(0).source,
                t[E.hash].forceRedraw = !0,
                E._updateRequestId || (E._updateRequestId = s(E, fe))
            }),
            this.world.addHandler("remove-item", function(R) {
                E.world.getItemCount() ? E.source = E.world.getItemAt(0).source : E.source = null,
                t[E.hash].forceRedraw = !0
            }),
            this.world.addHandler("metrics-change", function(R) {
                E.viewport && E.viewport._setContentBounds(E.world.getHomeBounds(), E.world.getContentFactor())
            }),
            this.world.addHandler("item-index-change", function(R) {
                E.source = E.world.getItemAt(0).source
            }),
            this.viewport = new e.Viewport({
                containerSize: t[this.hash].prevContainerSize,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime,
                minZoomImageRatio: this.minZoomImageRatio,
                maxZoomPixelRatio: this.maxZoomPixelRatio,
                visibilityRatio: this.visibilityRatio,
                wrapHorizontal: this.wrapHorizontal,
                wrapVertical: this.wrapVertical,
                defaultZoomLevel: this.defaultZoomLevel,
                minZoomLevel: this.minZoomLevel,
                maxZoomLevel: this.maxZoomLevel,
                viewer: this,
                degrees: this.degrees,
                flipped: this.flipped,
                navigatorRotate: this.navigatorRotate,
                homeFillsViewer: this.homeFillsViewer,
                margins: this.viewportMargins,
                silenceMultiImageWarnings: this.silenceMultiImageWarnings
            }),
            this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()),
            this.imageLoader = new e.ImageLoader({
                jobLimit: this.imageLoaderLimit,
                timeout: a.timeout,
                tileRetryMax: this.tileRetryMax,
                tileRetryDelay: this.tileRetryDelay
            }),
            this.tileCache = new e.TileCache({
                maxImageCacheCount: this.maxImageCacheCount
            }),
            this.drawer = new e.Drawer({
                viewer: this,
                viewport: this.viewport,
                element: this.canvas,
                debugGridColor: this.debugGridColor
            }),
            this.overlaysContainer = e.makeNeutralElement("div"),
            this.canvas.appendChild(this.overlaysContainer),
            this.drawer.canRotate() || (this.rotateLeft && (H = this.buttonGroup.buttons.indexOf(this.rotateLeft),
            this.buttonGroup.buttons.splice(H, 1),
            this.buttonGroup.element.removeChild(this.rotateLeft.element)),
            this.rotateRight && (H = this.buttonGroup.buttons.indexOf(this.rotateRight),
            this.buttonGroup.buttons.splice(H, 1),
            this.buttonGroup.element.removeChild(this.rotateRight.element))),
            this._addUpdatePixelDensityRatioEvent(),
            this.showNavigator && (this.navigator = new e.Navigator({
                element: this.navigatorElement,
                id: this.navigatorId,
                position: this.navigatorPosition,
                sizeRatio: this.navigatorSizeRatio,
                maintainSizeRatio: this.navigatorMaintainSizeRatio,
                top: this.navigatorTop,
                left: this.navigatorLeft,
                width: this.navigatorWidth,
                height: this.navigatorHeight,
                autoResize: this.navigatorAutoResize,
                autoFade: this.navigatorAutoFade,
                prefixUrl: this.prefixUrl,
                viewer: this,
                navigatorRotate: this.navigatorRotate,
                background: this.navigatorBackground,
                opacity: this.navigatorOpacity,
                borderColor: this.navigatorBorderColor,
                displayRegionColor: this.navigatorDisplayRegionColor,
                crossOriginPolicy: this.crossOriginPolicy,
                animationTime: this.animationTime
            })),
            this.sequenceMode && this.bindSequenceControls(),
            this.tileSources && this.open(this.tileSources),
            H = 0; H < this.customControls.length; H++)
                this.addControl(this.customControls[H].id, {
                    anchor: this.customControls[H].anchor
                });
            e.requestAnimationFrame(function() {
                d(E)
            }),
            this.imageSmoothingEnabled !== void 0 && !this.imageSmoothingEnabled && this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled),
            e._viewers.set(this.element, this)
        }
        ,
        e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, {
            isOpen: function() {
                return !!this.world.getItemCount()
            },
            openDzi: function(a) {
                return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."),
                this.open(a)
            },
            openTileSource: function(a) {
                return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."),
                this.open(a)
            },
            get buttons() {
                return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"),
                this.buttonGroup
            },
            open: function(a, g) {
                var E = this;
                if (this.close(),
                !a)
                    return this;
                if (this.sequenceMode && e.isArray(a))
                    return this.referenceStrip && (this.referenceStrip.destroy(),
                    this.referenceStrip = null),
                    typeof g < "u" && !isNaN(g) && (this.initialPage = g),
                    this.tileSources = a,
                    this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)),
                    this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]),
                    this.showReferenceStrip && this.addReferenceStrip()),
                    this._updateSequenceButtons(this._sequenceIndex),
                    this;
                if (e.isArray(a) || (a = [a]),
                !a.length)
                    return this;
                this._opening = !0;
                for (var H = a.length, R = 0, I = 0, O, W = function() {
                    if (R + I === H)
                        if (R) {
                            (E._firstOpen || !E.preserveViewport) && (E.viewport.goHome(!0),
                            E.viewport.update()),
                            E._firstOpen = !1;
                            var F = a[0];
                            if (F.tileSource && (F = F.tileSource),
                            E.overlays && !E.preserveOverlays)
                                for (var Z = 0; Z < E.overlays.length; Z++)
                                    E.currentOverlays[Z] = n(E, E.overlays[Z]);
                            E._drawOverlays(),
                            E._opening = !1,
                            E.raiseEvent("open", {
                                source: F
                            })
                        } else
                            E._opening = !1,
                            E.raiseEvent("open-failed", O)
                }, j = function(F) {
                    (!e.isPlainObject(F) || !F.tileSource) && (F = {
                        tileSource: F
                    }),
                    F.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"),
                    delete F.index),
                    F.collectionImmediately === void 0 && (F.collectionImmediately = !0);
                    var Z = F.success;
                    F.success = function(u) {
                        if (R++,
                        F.tileSource.overlays)
                            for (var p = 0; p < F.tileSource.overlays.length; p++)
                                E.addOverlay(F.tileSource.overlays[p]);
                        Z && Z(u),
                        W()
                    }
                    ;
                    var c = F.error;
                    F.error = function(u) {
                        I++,
                        O || (O = u),
                        c && c(u),
                        W()
                    }
                    ,
                    E.addTiledImage(F)
                }, q = 0; q < a.length; q++)
                    j(a[q]);
                return this
            },
            close: function() {
                return t[this.hash] ? (this._opening = !1,
                this.navigator && this.navigator.close(),
                this.preserveOverlays || (this.clearOverlays(),
                this.overlaysContainer.innerHTML = ""),
                t[this.hash].animating = !1,
                this.world.removeAll(),
                this.imageLoader.clear(),
                this.raiseEvent("close"),
                this) : this
            },
            destroy: function() {
                if (t[this.hash]) {
                    if (this.raiseEvent("before-destroy"),
                    this._removeUpdatePixelDensityRatioEvent(),
                    this.close(),
                    this.clearOverlays(),
                    this.overlaysContainer.innerHTML = "",
                    this._resizeObserver && this._resizeObserver.disconnect(),
                    this.referenceStrip && (this.referenceStrip.destroy(),
                    this.referenceStrip = null),
                    this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId),
                    this._updateRequestId = null),
                    this.drawer && this.drawer.destroy(),
                    this.navigator && (this.navigator.destroy(),
                    t[this.navigator.hash] = null,
                    delete t[this.navigator.hash],
                    this.navigator = null),
                    this.buttonGroup)
                        this.buttonGroup.destroy();
                    else if (this.customButtons)
                        for (; this.customButtons.length; )
                            this.customButtons.pop().destroy();
                    if (this.paging && this.paging.destroy(),
                    this.element)
                        for (; this.element.firstChild; )
                            this.element.removeChild(this.element.firstChild);
                    this.container.onsubmit = null,
                    this.clearControls(),
                    this.innerTracker && this.innerTracker.destroy(),
                    this.outerTracker && this.outerTracker.destroy(),
                    t[this.hash] = null,
                    delete t[this.hash],
                    this.canvas = null,
                    this.container = null,
                    e._viewers.delete(this.element),
                    this.element = null,
                    this.raiseEvent("destroy"),
                    this.removeAllHandlers()
                }
            },
            isMouseNavEnabled: function() {
                return this.innerTracker.isTracking()
            },
            setMouseNavEnabled: function(a) {
                return this.innerTracker.setTracking(a),
                this.outerTracker.setTracking(a),
                this.raiseEvent("mouse-enabled", {
                    enabled: a
                }),
                this
            },
            areControlsEnabled: function() {
                var a = this.controls.length, g;
                for (g = 0; g < this.controls.length; g++)
                    a = a && this.controls[g].isVisible();
                return a
            },
            setControlsEnabled: function(a) {
                return a ? v(this) : d(this),
                this.raiseEvent("controls-enabled", {
                    enabled: a
                }),
                this
            },
            setDebugMode: function(a) {
                for (var g = 0; g < this.world.getItemCount(); g++)
                    this.world.getItemAt(g).debugMode = a;
                this.debugMode = a,
                this.forceRedraw()
            },
            setAjaxHeaders: function(a, g) {
                if (a === null && (a = {}),
                !e.isPlainObject(a)) {
                    console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
                    return
                }
                if (g === void 0 && (g = !0),
                this.ajaxHeaders = a,
                g) {
                    for (var E = 0; E < this.world.getItemCount(); E++)
                        this.world.getItemAt(E)._updateAjaxHeaders(!0);
                    if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, !0),
                    this.referenceStrip && this.referenceStrip.miniViewers)
                        for (var H in this.referenceStrip.miniViewers)
                            this.referenceStrip.miniViewers[H].setAjaxHeaders(this.ajaxHeaders, !0)
                }
            },
            addButton: function(a) {
                this.buttonGroup.addButton(a)
            },
            isFullPage: function() {
                return t[this.hash].fullPage
            },
            setFullPage: function(a) {
                var g = document.body, E = g.style, H = document.documentElement.style, R = this, I, O;
                if (a === this.isFullPage())
                    return this;
                var W = {
                    fullPage: a,
                    preventDefaultAction: !1
                };
                if (this.raiseEvent("pre-full-page", W),
                W.preventDefaultAction)
                    return this;
                if (a) {
                    for (this.elementSize = e.getElementSize(this.element),
                    this.pageScroll = e.getPageScroll(),
                    this.elementMargin = this.element.style.margin,
                    this.element.style.margin = "0",
                    this.elementPadding = this.element.style.padding,
                    this.element.style.padding = "0",
                    this.bodyMargin = E.margin,
                    this.docMargin = H.margin,
                    E.margin = "0",
                    H.margin = "0",
                    this.bodyPadding = E.padding,
                    this.docPadding = H.padding,
                    E.padding = "0",
                    H.padding = "0",
                    this.bodyWidth = E.width,
                    this.docWidth = H.width,
                    E.width = "100%",
                    H.width = "100%",
                    this.bodyHeight = E.height,
                    this.docHeight = H.height,
                    E.height = "100%",
                    H.height = "100%",
                    this.bodyDisplay = E.display,
                    E.display = "block",
                    this.previousBody = [],
                    t[this.hash].prevElementParent = this.element.parentNode,
                    t[this.hash].prevNextSibling = this.element.nextSibling,
                    t[this.hash].prevElementWidth = this.element.style.width,
                    t[this.hash].prevElementHeight = this.element.style.height,
                    I = g.childNodes.length,
                    O = 0; O < I; O++)
                        this.previousBody.push(g.childNodes[0]),
                        g.removeChild(g.childNodes[0]);
                    this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode,
                    this.toolbar.nextSibling = this.toolbar.element.nextSibling,
                    g.appendChild(this.toolbar.element),
                    e.addClass(this.toolbar.element, "fullpage")),
                    e.addClass(this.element, "fullpage"),
                    g.appendChild(this.element),
                    this.element.style.height = "100vh",
                    this.element.style.width = "100vw",
                    this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"),
                    t[this.hash].fullPage = !0,
                    e.delegate(this, le)({})
                } else {
                    for (this.element.style.margin = this.elementMargin,
                    this.element.style.padding = this.elementPadding,
                    E.margin = this.bodyMargin,
                    H.margin = this.docMargin,
                    E.padding = this.bodyPadding,
                    H.padding = this.docPadding,
                    E.width = this.bodyWidth,
                    H.width = this.docWidth,
                    E.height = this.bodyHeight,
                    H.height = this.docHeight,
                    E.display = this.bodyDisplay,
                    g.removeChild(this.element),
                    I = this.previousBody.length,
                    O = 0; O < I; O++)
                        g.appendChild(this.previousBody.shift());
                    e.removeClass(this.element, "fullpage"),
                    t[this.hash].prevElementParent.insertBefore(this.element, t[this.hash].prevNextSibling),
                    this.toolbar && this.toolbar.element && (g.removeChild(this.toolbar.element),
                    e.removeClass(this.toolbar.element, "fullpage"),
                    this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling),
                    delete this.toolbar.parentNode,
                    delete this.toolbar.nextSibling),
                    this.element.style.width = t[this.hash].prevElementWidth,
                    this.element.style.height = t[this.hash].prevElementHeight;
                    var j = 0
                      , q = function() {
                        e.setPageScroll(R.pageScroll);
                        var F = e.getPageScroll();
                        j++,
                        j < 10 && (F.x !== R.pageScroll.x || F.y !== R.pageScroll.y) && e.requestAnimationFrame(q)
                    };
                    e.requestAnimationFrame(q),
                    t[this.hash].fullPage = !1,
                    e.delegate(this, ue)({})
                }
                return this.navigator && this.viewport && this.navigator.update(this.viewport),
                this.raiseEvent("full-page", {
                    fullPage: a
                }),
                this
            },
            setFullScreen: function(a) {
                var g = this;
                if (!e.supportsFullScreen)
                    return this.setFullPage(a);
                if (e.isFullScreen() === a)
                    return this;
                var E = {
                    fullScreen: a,
                    preventDefaultAction: !1
                };
                if (this.raiseEvent("pre-full-screen", E),
                E.preventDefaultAction)
                    return this;
                if (a) {
                    if (this.setFullPage(!0),
                    !this.isFullPage())
                        return this;
                    this.fullPageStyleWidth = this.element.style.width,
                    this.fullPageStyleHeight = this.element.style.height,
                    this.element.style.width = "100%",
                    this.element.style.height = "100%";
                    var H = function() {
                        var R = e.isFullScreen();
                        R || (e.removeEvent(document, e.fullScreenEventName, H),
                        e.removeEvent(document, e.fullScreenErrorEventName, H),
                        g.setFullPage(!1),
                        g.isFullPage() && (g.element.style.width = g.fullPageStyleWidth,
                        g.element.style.height = g.fullPageStyleHeight)),
                        g.navigator && g.viewport && setTimeout(function() {
                            g.navigator.update(g.viewport)
                        }),
                        g.raiseEvent("full-screen", {
                            fullScreen: R
                        })
                    };
                    e.addEvent(document, e.fullScreenEventName, H),
                    e.addEvent(document, e.fullScreenErrorEventName, H),
                    e.requestFullScreen(document.body)
                } else
                    e.exitFullScreen();
                return this
            },
            isVisible: function() {
                return this.container.style.visibility !== "hidden"
            },
            isFullScreen: function() {
                return e.isFullScreen() && this.isFullPage()
            },
            setVisible: function(a) {
                return this.container.style.visibility = a ? "" : "hidden",
                this.raiseEvent("visible", {
                    visible: a
                }),
                this
            },
            addTiledImage: function(a) {
                e.console.assert(a, "[Viewer.addTiledImage] options is required"),
                e.console.assert(a.tileSource, "[Viewer.addTiledImage] options.tileSource is required"),
                e.console.assert(!a.replace || a.index > -1 && a.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
                var g = this;
                a.replace && (a.replaceItem = g.world.getItemAt(a.index)),
                this._hideMessage(),
                a.placeholderFillStyle === void 0 && (a.placeholderFillStyle = this.placeholderFillStyle),
                a.opacity === void 0 && (a.opacity = this.opacity),
                a.preload === void 0 && (a.preload = this.preload),
                a.compositeOperation === void 0 && (a.compositeOperation = this.compositeOperation),
                a.crossOriginPolicy === void 0 && (a.crossOriginPolicy = a.tileSource.crossOriginPolicy !== void 0 ? a.tileSource.crossOriginPolicy : this.crossOriginPolicy),
                a.ajaxWithCredentials === void 0 && (a.ajaxWithCredentials = this.ajaxWithCredentials),
                a.loadTilesWithAjax === void 0 && (a.loadTilesWithAjax = this.loadTilesWithAjax),
                e.isPlainObject(a.ajaxHeaders) || (a.ajaxHeaders = {});
                var E = {
                    options: a
                };
                function H(O) {
                    for (var W = 0; W < g._loadQueue.length; W++)
                        if (g._loadQueue[W] === E) {
                            g._loadQueue.splice(W, 1);
                            break
                        }
                    g._loadQueue.length === 0 && R(E),
                    g.raiseEvent("add-item-failed", O),
                    a.error && a.error(O)
                }
                function R(O) {
                    g.collectionMode && (g.world.arrange({
                        immediately: O.options.collectionImmediately,
                        rows: g.collectionRows,
                        columns: g.collectionColumns,
                        layout: g.collectionLayout,
                        tileSize: g.collectionTileSize,
                        tileMargin: g.collectionTileMargin
                    }),
                    g.world.setAutoRefigureSizes(!0))
                }
                if (e.isArray(a.tileSource)) {
                    setTimeout(function() {
                        H({
                            message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.",
                            source: a.tileSource,
                            options: a
                        })
                    });
                    return
                }
                this._loadQueue.push(E);
                function I() {
                    for (var O, W, j; g._loadQueue.length && (O = g._loadQueue[0],
                    !!O.tileSource); ) {
                        if (g._loadQueue.splice(0, 1),
                        O.options.replace) {
                            var q = g.world.getIndexOfItem(O.options.replaceItem);
                            q !== -1 && (O.options.index = q),
                            g.world.removeItem(O.options.replaceItem)
                        }
                        W = new e.TiledImage({
                            viewer: g,
                            source: O.tileSource,
                            viewport: g.viewport,
                            drawer: g.drawer,
                            tileCache: g.tileCache,
                            imageLoader: g.imageLoader,
                            x: O.options.x,
                            y: O.options.y,
                            width: O.options.width,
                            height: O.options.height,
                            fitBounds: O.options.fitBounds,
                            fitBoundsPlacement: O.options.fitBoundsPlacement,
                            clip: O.options.clip,
                            placeholderFillStyle: O.options.placeholderFillStyle,
                            opacity: O.options.opacity,
                            preload: O.options.preload,
                            degrees: O.options.degrees,
                            flipped: O.options.flipped,
                            compositeOperation: O.options.compositeOperation,
                            springStiffness: g.springStiffness,
                            animationTime: g.animationTime,
                            minZoomImageRatio: g.minZoomImageRatio,
                            wrapHorizontal: g.wrapHorizontal,
                            wrapVertical: g.wrapVertical,
                            immediateRender: g.immediateRender,
                            blendTime: g.blendTime,
                            alwaysBlend: g.alwaysBlend,
                            minPixelRatio: g.minPixelRatio,
                            smoothTileEdgesMinZoom: g.smoothTileEdgesMinZoom,
                            iOSDevice: g.iOSDevice,
                            crossOriginPolicy: O.options.crossOriginPolicy,
                            ajaxWithCredentials: O.options.ajaxWithCredentials,
                            loadTilesWithAjax: O.options.loadTilesWithAjax,
                            ajaxHeaders: O.options.ajaxHeaders,
                            debugMode: g.debugMode,
                            subPixelRoundingForTransparency: g.subPixelRoundingForTransparency
                        }),
                        g.collectionMode && g.world.setAutoRefigureSizes(!1),
                        g.navigator && (j = e.extend({}, O.options, {
                            replace: !1,
                            originalTiledImage: W,
                            tileSource: O.tileSource
                        }),
                        g.navigator.addTiledImage(j)),
                        g.world.addItem(W, {
                            index: O.options.index
                        }),
                        g._loadQueue.length === 0 && R(O),
                        g.world.getItemCount() === 1 && !g.preserveViewport && g.viewport.goHome(!0),
                        O.options.success && O.options.success({
                            item: W
                        })
                    }
                }
                h(this, a.tileSource, a, function(O) {
                    E.tileSource = O,
                    I()
                }, function(O) {
                    O.options = a,
                    H(O),
                    I()
                })
            },
            addSimpleImage: function(a) {
                e.console.assert(a, "[Viewer.addSimpleImage] options is required"),
                e.console.assert(a.url, "[Viewer.addSimpleImage] options.url is required");
                var g = e.extend({}, a, {
                    tileSource: {
                        type: "image",
                        url: a.url
                    }
                });
                delete g.url,
                this.addTiledImage(g)
            },
            addLayer: function(a) {
                var g = this;
                e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
                var E = e.extend({}, a, {
                    success: function(H) {
                        g.raiseEvent("add-layer", {
                            options: a,
                            drawer: H.item
                        })
                    },
                    error: function(H) {
                        g.raiseEvent("add-layer-failed", H)
                    }
                });
                return this.addTiledImage(E),
                this
            },
            getLayerAtLevel: function(a) {
                return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."),
                this.world.getItemAt(a)
            },
            getLevelOfLayer: function(a) {
                return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."),
                this.world.getIndexOfItem(a)
            },
            getLayersCount: function() {
                return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."),
                this.world.getItemCount()
            },
            setLayerLevel: function(a, g) {
                return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."),
                this.world.setItemIndex(a, g)
            },
            removeLayer: function(a) {
                return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."),
                this.world.removeItem(a)
            },
            forceRedraw: function() {
                return t[this.hash].forceRedraw = !0,
                this
            },
            forceResize: function() {
                t[this.hash].needsResize = !0,
                t[this.hash].forceResize = !0
            },
            bindSequenceControls: function() {
                var a = e.delegate(this, y)
                  , g = e.delegate(this, x)
                  , E = e.delegate(this, this.goToNextPage)
                  , H = e.delegate(this, this.goToPreviousPage)
                  , R = this.navImages
                  , I = !0;
                return this.showSequenceControl && ((this.previousButton || this.nextButton) && (I = !1),
                this.previousButton = new e.Button({
                    element: this.previousButton ? e.getElement(this.previousButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.PreviousPage"),
                    srcRest: M(this.prefixUrl, R.previous.REST),
                    srcGroup: M(this.prefixUrl, R.previous.GROUP),
                    srcHover: M(this.prefixUrl, R.previous.HOVER),
                    srcDown: M(this.prefixUrl, R.previous.DOWN),
                    onRelease: H,
                    onFocus: a,
                    onBlur: g
                }),
                this.nextButton = new e.Button({
                    element: this.nextButton ? e.getElement(this.nextButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.NextPage"),
                    srcRest: M(this.prefixUrl, R.next.REST),
                    srcGroup: M(this.prefixUrl, R.next.GROUP),
                    srcHover: M(this.prefixUrl, R.next.HOVER),
                    srcDown: M(this.prefixUrl, R.next.DOWN),
                    onRelease: E,
                    onFocus: a,
                    onBlur: g
                }),
                this.navPrevNextWrap || this.previousButton.disable(),
                (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(),
                I && (this.paging = new e.ButtonGroup({
                    buttons: [this.previousButton, this.nextButton],
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold
                }),
                this.pagingControl = this.paging.element,
                this.toolbar ? this.toolbar.addControl(this.pagingControl, {
                    anchor: e.ControlAnchor.BOTTOM_RIGHT
                }) : this.addControl(this.pagingControl, {
                    anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT
                }))),
                this
            },
            bindStandardControls: function() {
                var a = e.delegate(this, we)
                  , g = e.delegate(this, xe)
                  , E = e.delegate(this, De)
                  , H = e.delegate(this, Te)
                  , R = e.delegate(this, Ee)
                  , I = e.delegate(this, He)
                  , O = e.delegate(this, _e)
                  , W = e.delegate(this, Oe)
                  , j = e.delegate(this, ye)
                  , q = e.delegate(this, ge)
                  , F = e.delegate(this, y)
                  , Z = e.delegate(this, x)
                  , c = this.navImages
                  , u = []
                  , p = !0;
                return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (p = !1),
                this.showZoomControl && (u.push(this.zoomInButton = new e.Button({
                    element: this.zoomInButton ? e.getElement(this.zoomInButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.ZoomIn"),
                    srcRest: M(this.prefixUrl, c.zoomIn.REST),
                    srcGroup: M(this.prefixUrl, c.zoomIn.GROUP),
                    srcHover: M(this.prefixUrl, c.zoomIn.HOVER),
                    srcDown: M(this.prefixUrl, c.zoomIn.DOWN),
                    onPress: a,
                    onRelease: g,
                    onClick: E,
                    onEnter: a,
                    onExit: g,
                    onFocus: F,
                    onBlur: Z
                })),
                u.push(this.zoomOutButton = new e.Button({
                    element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.ZoomOut"),
                    srcRest: M(this.prefixUrl, c.zoomOut.REST),
                    srcGroup: M(this.prefixUrl, c.zoomOut.GROUP),
                    srcHover: M(this.prefixUrl, c.zoomOut.HOVER),
                    srcDown: M(this.prefixUrl, c.zoomOut.DOWN),
                    onPress: H,
                    onRelease: g,
                    onClick: R,
                    onEnter: H,
                    onExit: g,
                    onFocus: F,
                    onBlur: Z
                }))),
                this.showHomeControl && u.push(this.homeButton = new e.Button({
                    element: this.homeButton ? e.getElement(this.homeButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.Home"),
                    srcRest: M(this.prefixUrl, c.home.REST),
                    srcGroup: M(this.prefixUrl, c.home.GROUP),
                    srcHover: M(this.prefixUrl, c.home.HOVER),
                    srcDown: M(this.prefixUrl, c.home.DOWN),
                    onRelease: I,
                    onFocus: F,
                    onBlur: Z
                })),
                this.showFullPageControl && u.push(this.fullPageButton = new e.Button({
                    element: this.fullPageButton ? e.getElement(this.fullPageButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.FullPage"),
                    srcRest: M(this.prefixUrl, c.fullpage.REST),
                    srcGroup: M(this.prefixUrl, c.fullpage.GROUP),
                    srcHover: M(this.prefixUrl, c.fullpage.HOVER),
                    srcDown: M(this.prefixUrl, c.fullpage.DOWN),
                    onRelease: O,
                    onFocus: F,
                    onBlur: Z
                })),
                this.showRotationControl && (u.push(this.rotateLeftButton = new e.Button({
                    element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.RotateLeft"),
                    srcRest: M(this.prefixUrl, c.rotateleft.REST),
                    srcGroup: M(this.prefixUrl, c.rotateleft.GROUP),
                    srcHover: M(this.prefixUrl, c.rotateleft.HOVER),
                    srcDown: M(this.prefixUrl, c.rotateleft.DOWN),
                    onRelease: W,
                    onFocus: F,
                    onBlur: Z
                })),
                u.push(this.rotateRightButton = new e.Button({
                    element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.RotateRight"),
                    srcRest: M(this.prefixUrl, c.rotateright.REST),
                    srcGroup: M(this.prefixUrl, c.rotateright.GROUP),
                    srcHover: M(this.prefixUrl, c.rotateright.HOVER),
                    srcDown: M(this.prefixUrl, c.rotateright.DOWN),
                    onRelease: j,
                    onFocus: F,
                    onBlur: Z
                }))),
                this.showFlipControl && u.push(this.flipButton = new e.Button({
                    element: this.flipButton ? e.getElement(this.flipButton) : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: e.getString("Tooltips.Flip"),
                    srcRest: M(this.prefixUrl, c.flip.REST),
                    srcGroup: M(this.prefixUrl, c.flip.GROUP),
                    srcHover: M(this.prefixUrl, c.flip.HOVER),
                    srcDown: M(this.prefixUrl, c.flip.DOWN),
                    onRelease: q,
                    onFocus: F,
                    onBlur: Z
                })),
                p ? (this.buttonGroup = new e.ButtonGroup({
                    buttons: u,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold
                }),
                this.navControl = this.buttonGroup.element,
                this.addHandler("open", e.delegate(this, Pe)),
                this.toolbar ? this.toolbar.addControl(this.navControl, {
                    anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT
                }) : this.addControl(this.navControl, {
                    anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT
                })) : this.customButtons = u),
                this
            },
            currentPage: function() {
                return this._sequenceIndex
            },
            goToPage: function(a) {
                return this.tileSources && a >= 0 && a < this.tileSources.length && (this._sequenceIndex = a,
                this._updateSequenceButtons(a),
                this.open(this.tileSources[a]),
                this.referenceStrip && this.referenceStrip.setFocus(a),
                this.raiseEvent("page", {
                    page: a
                })),
                this
            },
            addOverlay: function(a, g, E, H) {
                var R;
                if (e.isPlainObject(a) ? R = a : R = {
                    element: a,
                    location: g,
                    placement: E,
                    onDraw: H
                },
                a = e.getElement(R.element),
                r(this.currentOverlays, a) >= 0)
                    return this;
                var I = n(this, R);
                return this.currentOverlays.push(I),
                I.drawHTML(this.overlaysContainer, this.viewport),
                this.raiseEvent("add-overlay", {
                    element: a,
                    location: R.location,
                    placement: R.placement
                }),
                this
            },
            updateOverlay: function(a, g, E) {
                var H;
                return a = e.getElement(a),
                H = r(this.currentOverlays, a),
                H >= 0 && (this.currentOverlays[H].update(g, E),
                t[this.hash].forceRedraw = !0,
                this.raiseEvent("update-overlay", {
                    element: a,
                    location: g,
                    placement: E
                })),
                this
            },
            removeOverlay: function(a) {
                var g;
                return a = e.getElement(a),
                g = r(this.currentOverlays, a),
                g >= 0 && (this.currentOverlays[g].destroy(),
                this.currentOverlays.splice(g, 1),
                t[this.hash].forceRedraw = !0,
                this.raiseEvent("remove-overlay", {
                    element: a
                })),
                this
            },
            clearOverlays: function() {
                for (; this.currentOverlays.length > 0; )
                    this.currentOverlays.pop().destroy();
                return t[this.hash].forceRedraw = !0,
                this.raiseEvent("clear-overlay", {}),
                this
            },
            getOverlayById: function(a) {
                var g;
                return a = e.getElement(a),
                g = r(this.currentOverlays, a),
                g >= 0 ? this.currentOverlays[g] : null
            },
            _updateSequenceButtons: function(a) {
                this.nextButton && (!this.tileSources || this.tileSources.length - 1 === a ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()),
                this.previousButton && (a > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable())
            },
            _showMessage: function(a) {
                this._hideMessage();
                var g = e.makeNeutralElement("div");
                g.appendChild(document.createTextNode(a)),
                this.messageDiv = e.makeCenteredNode(g),
                e.addClass(this.messageDiv, "openseadragon-message"),
                this.container.appendChild(this.messageDiv)
            },
            _hideMessage: function() {
                var a = this.messageDiv;
                a && (a.parentNode.removeChild(a),
                delete this.messageDiv)
            },
            gestureSettingsByDeviceType: function(a) {
                switch (a) {
                case "mouse":
                    return this.gestureSettingsMouse;
                case "touch":
                    return this.gestureSettingsTouch;
                case "pen":
                    return this.gestureSettingsPen;
                default:
                    return this.gestureSettingsUnknown
                }
            },
            _drawOverlays: function() {
                var a, g = this.currentOverlays.length;
                for (a = 0; a < g; a++)
                    this.currentOverlays[a].drawHTML(this.overlaysContainer, this.viewport)
            },
            _cancelPendingImages: function() {
                this._loadQueue = []
            },
            removeReferenceStrip: function() {
                this.showReferenceStrip = !1,
                this.referenceStrip && (this.referenceStrip.destroy(),
                this.referenceStrip = null)
            },
            addReferenceStrip: function() {
                if (this.showReferenceStrip = !0,
                this.sequenceMode) {
                    if (this.referenceStrip)
                        return;
                    this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({
                        id: this.referenceStripElement,
                        position: this.referenceStripPosition,
                        sizeRatio: this.referenceStripSizeRatio,
                        scroll: this.referenceStripScroll,
                        height: this.referenceStripHeight,
                        width: this.referenceStripWidth,
                        tileSources: this.tileSources,
                        prefixUrl: this.prefixUrl,
                        useCanvas: this.useCanvas,
                        viewer: this
                    }),
                    this.referenceStrip.setFocus(this._sequenceIndex))
                } else
                    e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.')
            },
            _addUpdatePixelDensityRatioEvent: function() {
                this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this),
                e.addEvent(window, "resize", this._updatePixelDensityRatioBind)
            },
            _removeUpdatePixelDensityRatioEvent: function() {
                e.removeEvent(window, "resize", this._updatePixelDensityRatioBind)
            },
            _updatePixelDensityRatio: function() {
                var a = e.pixelDensityRatio
                  , g = e.getCurrentPixelDensityRatio();
                a !== g && (e.pixelDensityRatio = g,
                this.world.resetItems(),
                this.forceRedraw())
            },
            goToPreviousPage: function() {
                var a = this._sequenceIndex - 1;
                this.navPrevNextWrap && a < 0 && (a += this.tileSources.length),
                this.goToPage(a)
            },
            goToNextPage: function() {
                var a = this._sequenceIndex + 1;
                this.navPrevNextWrap && a >= this.tileSources.length && (a = 0),
                this.goToPage(a)
            },
            isAnimating: function() {
                return t[this.hash].animating
            }
        });
        function o(a) {
            return a = e.getElement(a),
            new e.Point(a.clientWidth === 0 ? 1 : a.clientWidth,a.clientHeight === 0 ? 1 : a.clientHeight)
        }
        function h(a, g, E, H, R) {
            var I = a;
            if (e.type(g) === "string") {
                if (g.match(/^\s*<.*>\s*$/))
                    g = e.parseXml(g);
                else if (g.match(/^\s*[{[].*[}\]]\s*$/))
                    try {
                        var O = e.parseJSON(g);
                        g = O
                    } catch (j) {}
            }
            function W(j, q) {
                j.ready ? H(j) : (j.addHandler("ready", function() {
                    H(j)
                }),
                j.addHandler("open-failed", function(F) {
                    R({
                        message: F.message,
                        source: q
                    })
                }))
            }
            setTimeout(function() {
                if (e.type(g) === "string")
                    g = new e.TileSource({
                        url: g,
                        crossOriginPolicy: E.crossOriginPolicy !== void 0 ? E.crossOriginPolicy : a.crossOriginPolicy,
                        ajaxWithCredentials: a.ajaxWithCredentials,
                        ajaxHeaders: E.ajaxHeaders ? E.ajaxHeaders : a.ajaxHeaders,
                        splitHashDataForPost: a.splitHashDataForPost,
                        useCanvas: a.useCanvas,
                        success: function(Z) {
                            H(Z.tileSource)
                        }
                    }),
                    g.addHandler("open-failed", function(Z) {
                        R(Z)
                    });
                else if (e.isPlainObject(g) || g.nodeType)
                    if (g.crossOriginPolicy === void 0 && (E.crossOriginPolicy !== void 0 || a.crossOriginPolicy !== void 0) && (g.crossOriginPolicy = E.crossOriginPolicy !== void 0 ? E.crossOriginPolicy : a.crossOriginPolicy),
                    g.ajaxWithCredentials === void 0 && (g.ajaxWithCredentials = a.ajaxWithCredentials),
                    g.useCanvas === void 0 && (g.useCanvas = a.useCanvas),
                    e.isFunction(g.getTileUrl)) {
                        var j = new e.TileSource(g);
                        j.getTileUrl = g.getTileUrl,
                        H(j)
                    } else {
                        var q = e.TileSource.determineType(I, g);
                        if (!q) {
                            R({
                                message: "Unable to load TileSource",
                                source: g
                            });
                            return
                        }
                        var F = q.prototype.configure.apply(I, [g]);
                        W(new q(F), g)
                    }
                else
                    W(g, g)
            })
        }
        function n(a, g) {
            if (g instanceof e.Overlay)
                return g;
            var E = null;
            if (g.element)
                E = e.getElement(g.element);
            else {
                var H = g.id ? g.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
                E = e.getElement(g.id),
                E || (E = document.createElement("a"),
                E.href = "#/overlay/" + H),
                E.id = H,
                e.addClass(E, g.className ? g.className : "openseadragon-overlay")
            }
            var R = g.location
              , I = g.width
              , O = g.height;
            if (!R) {
                var W = g.x
                  , j = g.y;
                if (g.px !== void 0) {
                    var q = a.viewport.imageToViewportRectangle(new e.Rect(g.px,g.py,I || 0,O || 0));
                    W = q.x,
                    j = q.y,
                    I = I !== void 0 ? q.width : void 0,
                    O = O !== void 0 ? q.height : void 0
                }
                R = new e.Point(W,j)
            }
            var F = g.placement;
            return F && e.type(F) === "string" && (F = e.Placement[g.placement.toUpperCase()]),
            new e.Overlay({
                element: E,
                location: R,
                placement: F,
                onDraw: g.onDraw,
                checkResize: g.checkResize,
                width: I,
                height: O,
                rotationMode: g.rotationMode
            })
        }
        function r(a, g) {
            var E;
            for (E = a.length - 1; E >= 0; E--)
                if (a[E].element === g)
                    return E;
            return -1
        }
        function s(a, g) {
            return e.requestAnimationFrame(function() {
                g(a)
            })
        }
        function l(a) {
            e.requestAnimationFrame(function() {
                f(a)
            })
        }
        function d(a) {
            a.autoHideControls && (a.controlsShouldFade = !0,
            a.controlsFadeBeginTime = e.now() + a.controlsFadeDelay,
            window.setTimeout(function() {
                l(a)
            }, a.controlsFadeDelay))
        }
        function f(a) {
            var g, E, H, R;
            if (a.controlsShouldFade) {
                for (g = e.now(),
                E = g - a.controlsFadeBeginTime,
                H = 1 - E / a.controlsFadeLength,
                H = Math.min(1, H),
                H = Math.max(0, H),
                R = a.controls.length - 1; R >= 0; R--)
                    a.controls[R].autoFade && a.controls[R].setOpacity(H);
                H > 0 && l(a)
            }
        }
        function v(a) {
            var g;
            for (a.controlsShouldFade = !1,
            g = a.controls.length - 1; g >= 0; g--)
                a.controls[g].setOpacity(1)
        }
        function y() {
            v(this)
        }
        function x() {
            d(this)
        }
        function w(a) {
            var g = {
                tracker: a.eventSource,
                position: a.position,
                originalEvent: a.originalEvent,
                preventDefault: a.preventDefault
            };
            this.raiseEvent("canvas-contextmenu", g),
            a.preventDefault = g.preventDefault
        }
        function S(a) {
            var g = {
                originalEvent: a.originalEvent,
                preventDefaultAction: !1,
                preventVerticalPan: a.preventVerticalPan || !this.panVertical,
                preventHorizontalPan: a.preventHorizontalPan || !this.panHorizontal
            };
            if (this.raiseEvent("canvas-key", g),
            !g.preventDefaultAction && !a.ctrl && !a.alt && !a.meta)
                switch (a.keyCode) {
                case 38:
                    g.preventVerticalPan || (a.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,-this.pixelsPerArrowPress))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 40:
                    g.preventVerticalPan || (a.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,this.pixelsPerArrowPress))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 37:
                    g.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress,0))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 39:
                    g.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress,0))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 187:
                    this.viewport.zoomBy(1.1),
                    this.viewport.applyConstraints(),
                    a.preventDefault = !0;
                    break;
                case 189:
                    this.viewport.zoomBy(.9),
                    this.viewport.applyConstraints(),
                    a.preventDefault = !0;
                    break;
                case 48:
                    this.viewport.goHome(),
                    this.viewport.applyConstraints(),
                    a.preventDefault = !0;
                    break;
                case 87:
                    g.preventVerticalPan || (a.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,-40))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 83:
                    g.preventVerticalPan || (a.shift ? this.viewport.zoomBy(.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0,40))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 65:
                    g.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40,0))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 68:
                    g.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40,0))),
                    this.viewport.applyConstraints()),
                    a.preventDefault = !0;
                    break;
                case 82:
                    a.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement),
                    this.viewport.applyConstraints(),
                    a.preventDefault = !0;
                    break;
                case 70:
                    this.viewport.toggleFlip(),
                    a.preventDefault = !0;
                    break;
                case 74:
                    this.goToPreviousPage();
                    break;
                case 75:
                    this.goToNextPage();
                    break;
                default:
                    a.preventDefault = !1;
                    break
                }
            else
                a.preventDefault = !1
        }
        function C(a) {
            var g = {
                originalEvent: a.originalEvent
            };
            this.raiseEvent("canvas-key-press", g)
        }
        function D(a) {
            var g, E = document.activeElement === this.canvas;
            E || this.canvas.focus(),
            this.viewport.flipped && (a.position.x = this.viewport.getContainerSize().x - a.position.x);
            var H = {
                tracker: a.eventSource,
                position: a.position,
                quick: a.quick,
                shift: a.shift,
                originalEvent: a.originalEvent,
                originalTarget: a.originalTarget,
                preventDefaultAction: !1
            };
            this.raiseEvent("canvas-click", H),
            !H.preventDefaultAction && this.viewport && a.quick && (g = this.gestureSettingsByDeviceType(a.pointerType),
            g.clickToZoom === !0 && (this.viewport.zoomBy(a.shift ? 1 / this.zoomPerClick : this.zoomPerClick, g.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null),
            this.viewport.applyConstraints()),
            g.dblClickDragToZoom && (t[this.hash].draggingToZoom === !0 ? (t[this.hash].lastClickTime = null,
            t[this.hash].draggingToZoom = !1) : t[this.hash].lastClickTime = e.now()))
        }
        function z(a) {
            var g, E = {
                tracker: a.eventSource,
                position: a.position,
                shift: a.shift,
                originalEvent: a.originalEvent,
                preventDefaultAction: !1
            };
            this.raiseEvent("canvas-double-click", E),
            !E.preventDefaultAction && this.viewport && (g = this.gestureSettingsByDeviceType(a.pointerType),
            g.dblClickToZoom && (this.viewport.zoomBy(a.shift ? 1 / this.zoomPerClick : this.zoomPerClick, g.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null),
            this.viewport.applyConstraints()))
        }
        function U(a) {
            var g, E = {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                delta: a.delta,
                speed: a.speed,
                direction: a.direction,
                shift: a.shift,
                originalEvent: a.originalEvent,
                preventDefaultAction: !1
            };
            if (this.raiseEvent("canvas-drag", E),
            g = this.gestureSettingsByDeviceType(a.pointerType),
            !E.preventDefaultAction && this.viewport) {
                if (g.dblClickDragToZoom && t[this.hash].draggingToZoom) {
                    var H = Math.pow(this.zoomPerDblClickDrag, a.delta.y / 50);
                    this.viewport.zoomBy(H)
                } else if (g.dragToPan && !t[this.hash].draggingToZoom) {
                    if (this.panHorizontal || (a.delta.x = 0),
                    this.panVertical || (a.delta.y = 0),
                    this.viewport.flipped && (a.delta.x = -a.delta.x),
                    this.constrainDuringPan) {
                        var R = this.viewport.deltaPointsFromPixels(a.delta.negate());
                        this.viewport.centerSpringX.target.value += R.x,
                        this.viewport.centerSpringY.target.value += R.y;
                        var I = this.viewport.getConstrainedBounds();
                        this.viewport.centerSpringX.target.value -= R.x,
                        this.viewport.centerSpringY.target.value -= R.y,
                        I.xConstrained && (a.delta.x = 0),
                        I.yConstrained && (a.delta.y = 0)
                    }
                    this.viewport.panBy(this.viewport.deltaPointsFromPixels(a.delta.negate()), g.flickEnabled && !this.constrainDuringPan)
                }
            }
        }
        function N(a) {
            var g, E = {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                speed: a.speed,
                direction: a.direction,
                shift: a.shift,
                originalEvent: a.originalEvent,
                preventDefaultAction: !1
            };
            if (this.raiseEvent("canvas-drag-end", E),
            g = this.gestureSettingsByDeviceType(a.pointerType),
            !E.preventDefaultAction && this.viewport) {
                if (!t[this.hash].draggingToZoom && g.flickEnabled && a.speed >= g.flickMinSpeed) {
                    var H = 0;
                    this.panHorizontal && (H = g.flickMomentum * a.speed * Math.cos(a.direction));
                    var R = 0;
                    this.panVertical && (R = g.flickMomentum * a.speed * Math.sin(a.direction));
                    var I = this.viewport.pixelFromPoint(this.viewport.getCenter(!0))
                      , O = this.viewport.pointFromPixel(new e.Point(I.x - H,I.y - R));
                    this.viewport.panTo(O, !1)
                }
                this.viewport.applyConstraints()
            }
            g.dblClickDragToZoom && t[this.hash].draggingToZoom === !0 && (t[this.hash].draggingToZoom = !1)
        }
        function k(a) {
            this.raiseEvent("canvas-enter", {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                buttons: a.buttons,
                pointers: a.pointers,
                insideElementPressed: a.insideElementPressed,
                buttonDownAny: a.buttonDownAny,
                originalEvent: a.originalEvent
            })
        }
        function A(a) {
            this.raiseEvent("canvas-exit", {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                buttons: a.buttons,
                pointers: a.pointers,
                insideElementPressed: a.insideElementPressed,
                buttonDownAny: a.buttonDownAny,
                originalEvent: a.originalEvent
            })
        }
        function G(a) {
            var g;
            if (this.raiseEvent("canvas-press", {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                insideElementPressed: a.insideElementPressed,
                insideElementReleased: a.insideElementReleased,
                originalEvent: a.originalEvent
            }),
            g = this.gestureSettingsByDeviceType(a.pointerType),
            g.dblClickDragToZoom) {
                var E = t[this.hash].lastClickTime
                  , H = e.now();
                if (E === null)
                    return;
                H - E < this.dblClickTimeThreshold && (t[this.hash].draggingToZoom = !0),
                t[this.hash].lastClickTime = null
            }
        }
        function ne(a) {
            this.raiseEvent("canvas-release", {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                insideElementPressed: a.insideElementPressed,
                insideElementReleased: a.insideElementReleased,
                originalEvent: a.originalEvent
            })
        }
        function X(a) {
            this.raiseEvent("canvas-nonprimary-press", {
                tracker: a.eventSource,
                position: a.position,
                pointerType: a.pointerType,
                button: a.button,
                buttons: a.buttons,
                originalEvent: a.originalEvent
            })
        }
        function K(a) {
            this.raiseEvent("canvas-nonprimary-release", {
                tracker: a.eventSource,
                position: a.position,
                pointerType: a.pointerType,
                button: a.button,
                buttons: a.buttons,
                originalEvent: a.originalEvent
            })
        }
        function se(a) {
            var g, E, H, R, I = {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                gesturePoints: a.gesturePoints,
                lastCenter: a.lastCenter,
                center: a.center,
                lastDistance: a.lastDistance,
                distance: a.distance,
                shift: a.shift,
                originalEvent: a.originalEvent,
                preventDefaultPanAction: !1,
                preventDefaultZoomAction: !1,
                preventDefaultRotateAction: !1
            };
            if (this.raiseEvent("canvas-pinch", I),
            this.viewport && (g = this.gestureSettingsByDeviceType(a.pointerType),
            g.pinchToZoom && (!I.preventDefaultPanAction || !I.preventDefaultZoomAction) && (E = this.viewport.pointFromPixel(a.center, !0),
            g.zoomToRefPoint && !I.preventDefaultPanAction && (H = this.viewport.pointFromPixel(a.lastCenter, !0),
            R = H.minus(E),
            this.panHorizontal || (R.x = 0),
            this.panVertical || (R.y = 0),
            this.viewport.panBy(R, !0)),
            I.preventDefaultZoomAction || this.viewport.zoomBy(a.distance / a.lastDistance, E, !0),
            this.viewport.applyConstraints()),
            g.pinchRotate && !I.preventDefaultRotateAction)) {
                var O = Math.atan2(a.gesturePoints[0].currentPos.y - a.gesturePoints[1].currentPos.y, a.gesturePoints[0].currentPos.x - a.gesturePoints[1].currentPos.x)
                  , W = Math.atan2(a.gesturePoints[0].lastPos.y - a.gesturePoints[1].lastPos.y, a.gesturePoints[0].lastPos.x - a.gesturePoints[1].lastPos.x);
                E = this.viewport.pointFromPixel(a.center, !0),
                this.viewport.rotateTo(this.viewport.getRotation(!0) + (O - W) * (180 / Math.PI), E, !0)
            }
        }
        function ae(a) {
            this.raiseEvent("canvas-focus", {
                tracker: a.eventSource,
                originalEvent: a.originalEvent
            })
        }
        function ve(a) {
            this.raiseEvent("canvas-blur", {
                tracker: a.eventSource,
                originalEvent: a.originalEvent
            })
        }
        function oe(a) {
            var g, E, H, R, I;
            R = e.now(),
            I = R - this._lastScrollTime,
            I > this.minScrollDeltaTime ? (this._lastScrollTime = R,
            g = {
                tracker: a.eventSource,
                position: a.position,
                scroll: a.scroll,
                shift: a.shift,
                originalEvent: a.originalEvent,
                preventDefaultAction: !1,
                preventDefault: !0
            },
            this.raiseEvent("canvas-scroll", g),
            !g.preventDefaultAction && this.viewport && (this.viewport.flipped && (a.position.x = this.viewport.getContainerSize().x - a.position.x),
            E = this.gestureSettingsByDeviceType(a.pointerType),
            E.scrollToZoom && (H = Math.pow(this.zoomPerScroll, a.scroll),
            this.viewport.zoomBy(H, E.zoomToRefPoint ? this.viewport.pointFromPixel(a.position, !0) : null),
            this.viewport.applyConstraints())),
            a.preventDefault = g.preventDefault) : a.preventDefault = !0
        }
        function le(a) {
            t[this.hash].mouseInside = !0,
            v(this),
            this.raiseEvent("container-enter", {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                buttons: a.buttons,
                pointers: a.pointers,
                insideElementPressed: a.insideElementPressed,
                buttonDownAny: a.buttonDownAny,
                originalEvent: a.originalEvent
            })
        }
        function ue(a) {
            a.pointers < 1 && (t[this.hash].mouseInside = !1,
            t[this.hash].animating || d(this)),
            this.raiseEvent("container-exit", {
                tracker: a.eventSource,
                pointerType: a.pointerType,
                position: a.position,
                buttons: a.buttons,
                pointers: a.pointers,
                insideElementPressed: a.insideElementPressed,
                buttonDownAny: a.buttonDownAny,
                originalEvent: a.originalEvent
            })
        }
        function fe(a) {
            Re(a),
            a.isOpen() ? a._updateRequestId = s(a, fe) : a._updateRequestId = !1
        }
        function ce(a, g) {
            var E = a.viewport
              , H = E.getZoom()
              , R = E.getCenter();
            E.resize(g, a.preserveImageSizeOnResize),
            E.panTo(R, !0);
            var I;
            if (a.preserveImageSizeOnResize)
                I = t[a.hash].prevContainerSize.x / g.x;
            else {
                var O = new e.Point(0,0)
                  , W = new e.Point(t[a.hash].prevContainerSize.x,t[a.hash].prevContainerSize.y).distanceTo(O)
                  , j = new e.Point(g.x,g.y).distanceTo(O);
                I = j / W * t[a.hash].prevContainerSize.x / g.x
            }
            E.zoomTo(H * I, null, !0),
            t[a.hash].prevContainerSize = g,
            t[a.hash].forceRedraw = !0,
            t[a.hash].needsResize = !1,
            t[a.hash].forceResize = !1
        }
        function Re(a) {
            if (!(a._opening || !t[a.hash])) {
                if (a.autoResize || t[a.hash].forceResize) {
                    var g;
                    if (a._autoResizePolling) {
                        g = o(a.container);
                        var E = t[a.hash].prevContainerSize;
                        g.equals(E) || (t[a.hash].needsResize = !0)
                    }
                    t[a.hash].needsResize && ce(a, g || o(a.container))
                }
                var H = a.viewport.update()
                  , R = a.world.update() || H;
                H && a.raiseEvent("viewport-change"),
                a.referenceStrip && (R = a.referenceStrip.update(a.viewport) || R);
                var I = t[a.hash].animating;
                !I && R && (a.raiseEvent("animation-start"),
                v(a));
                var O = I && !R;
                O && (t[a.hash].animating = !1),
                (R || O || t[a.hash].forceRedraw || a.world.needsDraw()) && (be(a),
                a._drawOverlays(),
                a.navigator && a.navigator.update(a.viewport),
                t[a.hash].forceRedraw = !1,
                R && a.raiseEvent("animation")),
                O && (a.raiseEvent("animation-finish"),
                t[a.hash].mouseInside || d(a)),
                t[a.hash].animating = R
            }
        }
        function be(a) {
            a.imageLoader.clear(),
            a.drawer.clear(),
            a.world.draw(),
            a.raiseEvent("update-viewport", {})
        }
        function M(a, g) {
            return a ? a + g : g
        }
        function we() {
            t[this.hash].lastZoomTime = e.now(),
            t[this.hash].zoomFactor = this.zoomPerSecond,
            t[this.hash].zooming = !0,
            pe(this)
        }
        function Te() {
            t[this.hash].lastZoomTime = e.now(),
            t[this.hash].zoomFactor = 1 / this.zoomPerSecond,
            t[this.hash].zooming = !0,
            pe(this)
        }
        function xe() {
            t[this.hash].zooming = !1
        }
        function pe(a) {
            e.requestAnimationFrame(e.delegate(a, Se))
        }
        function Se() {
            var a, g, E;
            t[this.hash].zooming && this.viewport && (a = e.now(),
            g = a - t[this.hash].lastZoomTime,
            E = Math.pow(t[this.hash].zoomFactor, g / 1e3),
            this.viewport.zoomBy(E),
            this.viewport.applyConstraints(),
            t[this.hash].lastZoomTime = a,
            pe(this))
        }
        function De() {
            this.viewport && (t[this.hash].zooming = !1,
            this.viewport.zoomBy(this.zoomPerClick / 1),
            this.viewport.applyConstraints())
        }
        function Ee() {
            this.viewport && (t[this.hash].zooming = !1,
            this.viewport.zoomBy(1 / this.zoomPerClick),
            this.viewport.applyConstraints())
        }
        function Pe() {
            this.buttonGroup && (this.buttonGroup.emulateEnter(),
            this.buttonGroup.emulateLeave())
        }
        function He() {
            this.viewport && this.viewport.goHome()
        }
        function _e() {
            this.isFullPage() && !e.isFullScreen() ? this.setFullPage(!1) : this.setFullScreen(!this.isFullPage()),
            this.buttonGroup && this.buttonGroup.emulateLeave(),
            this.fullPageButton.element.focus(),
            this.viewport && this.viewport.applyConstraints()
        }
        function Oe() {
            if (this.viewport) {
                var a = this.viewport.getRotation();
                this.viewport.flipped ? a += this.rotationIncrement : a -= this.rotationIncrement,
                this.viewport.setRotation(a)
            }
        }
        function ye() {
            if (this.viewport) {
                var a = this.viewport.getRotation();
                this.viewport.flipped ? a -= this.rotationIncrement : a += this.rotationIncrement,
                this.viewport.setRotation(a)
            }
        }
        function ge() {
            this.viewport.toggleFlip()
        }
    }(T),
    function(e) {
        e.Navigator = function(s) {
            var l = s.viewer, d = this, f, v;
            s.element || s.id ? (s.element ? (s.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."),
            s.element.id ? s.id = s.element.id : s.id = "navigator-" + e.now(),
            this.element = s.element) : this.element = document.getElementById(s.id),
            s.controlOptions = {
                anchor: e.ControlAnchor.NONE,
                attachToViewer: !1,
                autoFade: !1
            }) : (s.id = "navigator-" + e.now(),
            this.element = e.makeNeutralElement("div"),
            s.controlOptions = {
                anchor: e.ControlAnchor.TOP_RIGHT,
                attachToViewer: !0,
                autoFade: s.autoFade
            },
            s.position && (s.position === "BOTTOM_RIGHT" ? s.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : s.position === "BOTTOM_LEFT" ? s.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : s.position === "TOP_RIGHT" ? s.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : s.position === "TOP_LEFT" ? s.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : s.position === "ABSOLUTE" && (s.controlOptions.anchor = e.ControlAnchor.ABSOLUTE,
            s.controlOptions.top = s.top,
            s.controlOptions.left = s.left,
            s.controlOptions.height = s.height,
            s.controlOptions.width = s.width))),
            this.element.id = s.id,
            this.element.className += " navigator",
            s = e.extend(!0, {
                sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio
            }, s, {
                element: this.element,
                tabIndex: -1,
                showNavigator: !1,
                mouseNavEnabled: !1,
                showNavigationControl: !1,
                showSequenceControl: !1,
                immediateRender: !0,
                blendTime: 0,
                animationTime: s.animationTime,
                autoResize: !1,
                minZoomImageRatio: 1,
                background: s.background,
                opacity: s.opacity,
                borderColor: s.borderColor,
                displayRegionColor: s.displayRegionColor
            }),
            s.minPixelRatio = this.minPixelRatio = l.minPixelRatio,
            e.setElementTouchActionNone(this.element),
            this.borderWidth = 2,
            this.fudge = new e.Point(1,1),
            this.totalBorderWidths = new e.Point(this.borderWidth * 2,this.borderWidth * 2).minus(this.fudge),
            s.controlOptions.anchor !== e.ControlAnchor.NONE && function(w, S) {
                w.margin = "0px",
                w.border = S + "px solid " + s.borderColor,
                w.padding = "0px",
                w.background = s.background,
                w.opacity = s.opacity,
                w.overflow = "hidden"
            }(this.element.style, this.borderWidth),
            this.displayRegion = e.makeNeutralElement("div"),
            this.displayRegion.id = this.element.id + "-displayregion",
            this.displayRegion.className = "displayregion",
            function(w, S) {
                w.position = "relative",
                w.top = "0px",
                w.left = "0px",
                w.fontSize = "0px",
                w.overflow = "hidden",
                w.border = S + "px solid " + s.displayRegionColor,
                w.margin = "0px",
                w.padding = "0px",
                w.background = "transparent",
                w.float = "left",
                w.cssFloat = "left",
                w.styleFloat = "left",
                w.zIndex = 999999999,
                w.cursor = "default",
                w.boxSizing = "content-box"
            }(this.displayRegion.style, this.borderWidth),
            e.setElementPointerEventsNone(this.displayRegion),
            e.setElementTouchActionNone(this.displayRegion),
            this.displayRegionContainer = e.makeNeutralElement("div"),
            this.displayRegionContainer.id = this.element.id + "-displayregioncontainer",
            this.displayRegionContainer.className = "displayregioncontainer",
            this.displayRegionContainer.style.width = "100%",
            this.displayRegionContainer.style.height = "100%",
            e.setElementPointerEventsNone(this.displayRegionContainer),
            e.setElementTouchActionNone(this.displayRegionContainer),
            l.addControl(this.element, s.controlOptions),
            this._resizeWithViewer = s.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && s.controlOptions.anchor !== e.ControlAnchor.NONE,
            s.width && s.height ? (this.setWidth(s.width),
            this.setHeight(s.height)) : this._resizeWithViewer && (f = e.getElementSize(l.element),
            this.element.style.height = Math.round(f.y * s.sizeRatio) + "px",
            this.element.style.width = Math.round(f.x * s.sizeRatio) + "px",
            this.oldViewerSize = f,
            v = e.getElementSize(this.element),
            this.elementArea = v.x * v.y),
            this.oldContainerSize = new e.Point(0,0),
            e.Viewer.apply(this, [s]),
            this.displayRegionContainer.appendChild(this.displayRegion),
            this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
            function y(w, S) {
                n(d.displayRegionContainer, w),
                n(d.displayRegion, -w),
                d.viewport.setRotation(w, S)
            }
            if (s.navigatorRotate) {
                var x = s.viewer.viewport ? s.viewer.viewport.getRotation() : s.viewer.degrees || 0;
                y(x, !0),
                s.viewer.addHandler("rotate", function(w) {
                    y(w.degrees, w.immediately)
                })
            }
            this.innerTracker.destroy(),
            this.innerTracker = new e.MouseTracker({
                userData: "Navigator.innerTracker",
                element: this.element,
                dragHandler: e.delegate(this, i),
                clickHandler: e.delegate(this, t),
                releaseHandler: e.delegate(this, o),
                scrollHandler: e.delegate(this, h),
                preProcessEventHandler: function(w) {
                    w.eventType === "wheel" && (w.preventDefault = !0)
                }
            }),
            this.outerTracker.userData = "Navigator.outerTracker",
            e.setElementPointerEventsNone(this.canvas),
            e.setElementPointerEventsNone(this.container),
            this.addHandler("reset-size", function() {
                d.viewport && d.viewport.goHome(!0)
            }),
            l.world.addHandler("item-index-change", function(w) {
                window.setTimeout(function() {
                    var S = d.world.getItemAt(w.previousIndex);
                    d.world.setItemIndex(S, w.newIndex)
                }, 1)
            }),
            l.world.addHandler("remove-item", function(w) {
                var S = w.item
                  , C = d._getMatchingItem(S);
                C && d.world.removeItem(C)
            }),
            this.update(l.viewport)
        }
        ,
        e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, {
            updateSize: function() {
                if (this.viewport) {
                    var s = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth,this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
                    s.equals(this.oldContainerSize) || (this.viewport.resize(s, !0),
                    this.viewport.goHome(!0),
                    this.oldContainerSize = s,
                    this.drawer.clear(),
                    this.world.draw())
                }
            },
            setWidth: function(s) {
                this.width = s,
                this.element.style.width = typeof s == "number" ? s + "px" : s,
                this._resizeWithViewer = !1,
                this.updateSize()
            },
            setHeight: function(s) {
                this.height = s,
                this.element.style.height = typeof s == "number" ? s + "px" : s,
                this._resizeWithViewer = !1,
                this.updateSize()
            },
            setFlip: function(s) {
                return this.viewport.setFlip(s),
                this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"),
                this
            },
            setDisplayTransform: function(s) {
                r(this.displayRegion, s),
                r(this.canvas, s),
                r(this.element, s)
            },
            update: function(s) {
                var l, d, f, v, y, x;
                if (l = e.getElementSize(this.viewer.element),
                this._resizeWithViewer && l.x && l.y && !l.equals(this.oldViewerSize) && (this.oldViewerSize = l,
                this.maintainSizeRatio || !this.elementArea ? (d = l.x * this.sizeRatio,
                f = l.y * this.sizeRatio) : (d = Math.sqrt(this.elementArea * (l.x / l.y)),
                f = this.elementArea / d),
                this.element.style.width = Math.round(d) + "px",
                this.element.style.height = Math.round(f) + "px",
                this.elementArea || (this.elementArea = d * f),
                this.updateSize()),
                s && this.viewport) {
                    if (v = s.getBoundsNoRotate(!0),
                    y = this.viewport.pixelFromPointNoRotate(v.getTopLeft(), !1),
                    x = this.viewport.pixelFromPointNoRotate(v.getBottomRight(), !1).minus(this.totalBorderWidths),
                    !this.navigatorRotate) {
                        var w = s.getRotation(!0);
                        n(this.displayRegion, -w)
                    }
                    var S = this.displayRegion.style;
                    S.display = this.world.getItemCount() ? "block" : "none",
                    S.top = y.y.toFixed(2) + "px",
                    S.left = y.x.toFixed(2) + "px";
                    var C = x.x - y.x
                      , D = x.y - y.y;
                    S.width = Math.round(Math.max(C, 0)) + "px",
                    S.height = Math.round(Math.max(D, 0)) + "px"
                }
            },
            addTiledImage: function(s) {
                var l = this
                  , d = s.originalTiledImage;
                delete s.original;
                var f = e.extend({}, s, {
                    success: function(v) {
                        var y = v.item;
                        y._originalForNavigator = d,
                        l._matchBounds(y, d, !0),
                        l._matchOpacity(y, d),
                        l._matchCompositeOperation(y, d);
                        function x() {
                            l._matchBounds(y, d)
                        }
                        function w() {
                            l._matchOpacity(y, d)
                        }
                        function S() {
                            l._matchCompositeOperation(y, d)
                        }
                        d.addHandler("bounds-change", x),
                        d.addHandler("clip-change", x),
                        d.addHandler("opacity-change", w),
                        d.addHandler("composite-operation-change", S)
                    }
                });
                return e.Viewer.prototype.addTiledImage.apply(this, [f])
            },
            destroy: function() {
                return e.Viewer.prototype.destroy.apply(this)
            },
            _getMatchingItem: function(s) {
                for (var l = this.world.getItemCount(), d, f = 0; f < l; f++)
                    if (d = this.world.getItemAt(f),
                    d._originalForNavigator === s)
                        return d;
                return null
            },
            _matchBounds: function(s, l, d) {
                var f = l.getBoundsNoRotate();
                s.setPosition(f.getTopLeft(), d),
                s.setWidth(f.width, d),
                s.setRotation(l.getRotation(), d),
                s.setClip(l.getClip()),
                s.setFlip(l.getFlip())
            },
            _matchOpacity: function(s, l) {
                s.setOpacity(l.opacity)
            },
            _matchCompositeOperation: function(s, l) {
                s.setCompositeOperation(l.compositeOperation)
            }
        });
        function t(s) {
            var l = {
                tracker: s.eventSource,
                position: s.position,
                quick: s.quick,
                shift: s.shift,
                originalEvent: s.originalEvent,
                preventDefaultAction: !1
            };
            if (this.viewer.raiseEvent("navigator-click", l),
            !l.preventDefaultAction && s.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
                this.viewer.viewport.flipped && (s.position.x = this.viewport.getContainerSize().x - s.position.x);
                var d = this.viewport.pointFromPixel(s.position);
                this.panVertical ? this.panHorizontal || (d.x = this.viewer.viewport.getCenter(!0).x) : d.y = this.viewer.viewport.getCenter(!0).y,
                this.viewer.viewport.panTo(d),
                this.viewer.viewport.applyConstraints()
            }
        }
        function i(s) {
            var l = {
                tracker: s.eventSource,
                position: s.position,
                delta: s.delta,
                speed: s.speed,
                direction: s.direction,
                shift: s.shift,
                originalEvent: s.originalEvent,
                preventDefaultAction: !1
            };
            this.viewer.raiseEvent("navigator-drag", l),
            !l.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (s.delta.x = 0),
            this.panVertical || (s.delta.y = 0),
            this.viewer.viewport.flipped && (s.delta.x = -s.delta.x),
            this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(s.delta)),
            this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints())
        }
        function o(s) {
            s.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints()
        }
        function h(s) {
            var l = {
                tracker: s.eventSource,
                position: s.position,
                scroll: s.scroll,
                shift: s.shift,
                originalEvent: s.originalEvent,
                preventDefault: s.preventDefault
            };
            this.viewer.raiseEvent("navigator-scroll", l),
            s.preventDefault = l.preventDefault
        }
        function n(s, l) {
            r(s, "rotate(" + l + "deg)")
        }
        function r(s, l) {
            s.style.webkitTransform = l,
            s.style.mozTransform = l,
            s.style.msTransform = l,
            s.style.oTransform = l,
            s.style.transform = l
        }
    }(T),
    function(e) {
        var t = {
            Errors: {
                Dzc: "Sorry, we don't support Deep Zoom Collections!",
                Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
                Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
                ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
                Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
                Status: "This space unintentionally left blank ({0} {1}).",
                OpenFailed: "Unable to open {0}: {1}"
            },
            Tooltips: {
                FullPage: "Toggle full page",
                Home: "Go home",
                ZoomIn: "Zoom in",
                ZoomOut: "Zoom out",
                NextPage: "Next page",
                PreviousPage: "Previous page",
                RotateLeft: "Rotate left",
                RotateRight: "Rotate right",
                Flip: "Flip Horizontally"
            }
        };
        e.extend(e, {
            getString: function(i) {
                var o = i.split("."), h = null, n = arguments, r = t, s;
                for (s = 0; s < o.length - 1; s++)
                    r = r[o[s]] || {};
                return h = r[o[s]],
                typeof h != "string" && (e.console.error("Untranslated source string:", i),
                h = ""),
                h.replace(/\{\d+\}/g, function(l) {
                    var d = parseInt(l.match(/\d+/), 10) + 1;
                    return d < n.length ? n[d] : ""
                })
            },
            setString: function(i, o) {
                var h = i.split("."), n = t, r;
                for (r = 0; r < h.length - 1; r++)
                    n[h[r]] || (n[h[r]] = {}),
                    n = n[h[r]];
                n[h[r]] = o
            }
        })
    }(T),
    function(e) {
        e.Point = function(t, i) {
            this.x = typeof t == "number" ? t : 0,
            this.y = typeof i == "number" ? i : 0
        }
        ,
        e.Point.prototype = {
            clone: function() {
                return new e.Point(this.x,this.y)
            },
            plus: function(t) {
                return new e.Point(this.x + t.x,this.y + t.y)
            },
            minus: function(t) {
                return new e.Point(this.x - t.x,this.y - t.y)
            },
            times: function(t) {
                return new e.Point(this.x * t,this.y * t)
            },
            divide: function(t) {
                return new e.Point(this.x / t,this.y / t)
            },
            negate: function() {
                return new e.Point(-this.x,-this.y)
            },
            distanceTo: function(t) {
                return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
            },
            squaredDistanceTo: function(t) {
                return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
            },
            apply: function(t) {
                return new e.Point(t(this.x),t(this.y))
            },
            equals: function(t) {
                return t instanceof e.Point && this.x === t.x && this.y === t.y
            },
            rotate: function(t, i) {
                i = i || new e.Point(0,0);
                var o, h;
                if (t % 90 === 0) {
                    var n = e.positiveModulo(t, 360);
                    switch (n) {
                    case 0:
                        o = 1,
                        h = 0;
                        break;
                    case 90:
                        o = 0,
                        h = 1;
                        break;
                    case 180:
                        o = -1,
                        h = 0;
                        break;
                    case 270:
                        o = 0,
                        h = -1;
                        break
                    }
                } else {
                    var r = t * Math.PI / 180;
                    o = Math.cos(r),
                    h = Math.sin(r)
                }
                var s = o * (this.x - i.x) - h * (this.y - i.y) + i.x
                  , l = h * (this.x - i.x) + o * (this.y - i.y) + i.y;
                return new e.Point(s,l)
            },
            toString: function() {
                return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")"
            }
        }
    }(T),
    function(e) {
        e.TileSource = function(i, o, h, n, r, s) {
            var l = this, d = arguments, f, v;
            if (e.isPlainObject(i) ? f = i : f = {
                width: d[0],
                height: d[1],
                tileSize: d[2],
                tileOverlap: d[3],
                minLevel: d[4],
                maxLevel: d[5]
            },
            e.EventSource.call(this),
            e.extend(!0, this, f),
            !this.success) {
                for (v = 0; v < arguments.length; v++)
                    if (e.isFunction(arguments[v])) {
                        this.success = arguments[v];
                        break
                    }
            }
            this.success && this.addHandler("ready", function(y) {
                l.success(y)
            }),
            e.type(arguments[0]) === "string" && (this.url = arguments[0]),
            this.url ? (this.aspectRatio = 1,
            this.dimensions = new e.Point(10,10),
            this._tileWidth = 0,
            this._tileHeight = 0,
            this.tileOverlap = 0,
            this.minLevel = 0,
            this.maxLevel = 0,
            this.ready = !1,
            this.getImageInfo(this.url)) : (this.ready = !0,
            this.aspectRatio = f.width && f.height ? f.width / f.height : 1,
            this.dimensions = new e.Point(f.width,f.height),
            this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize,
            delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth,
            delete this.tileWidth) : this._tileWidth = 0,
            this.tileHeight ? (this._tileHeight = this.tileHeight,
            delete this.tileHeight) : this._tileHeight = 0),
            this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0,
            this.minLevel = f.minLevel ? f.minLevel : 0,
            this.maxLevel = f.maxLevel !== void 0 && f.maxLevel !== null ? f.maxLevel : f.width && f.height ? Math.ceil(Math.log(Math.max(f.width, f.height)) / Math.log(2)) : 0,
            this.success && e.isFunction(this.success) && this.success(this))
        }
        ,
        e.TileSource.prototype = {
            getTileSize: function(i) {
                return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"),
                this._tileWidth
            },
            getTileWidth: function(i) {
                return this._tileWidth ? this._tileWidth : this.getTileSize(i)
            },
            getTileHeight: function(i) {
                return this._tileHeight ? this._tileHeight : this.getTileSize(i)
            },
            setMaxLevel: function(i) {
                this.maxLevel = i,
                this._memoizeLevelScale()
            },
            getLevelScale: function(i) {
                return this._memoizeLevelScale(),
                this.getLevelScale(i)
            },
            _memoizeLevelScale: function() {
                var i = {}, o;
                for (o = 0; o <= this.maxLevel; o++)
                    i[o] = 1 / Math.pow(2, this.maxLevel - o);
                this.getLevelScale = function(h) {
                    return i[h]
                }
            },
            getNumTiles: function(i) {
                var o = this.getLevelScale(i)
                  , h = Math.ceil(o * this.dimensions.x / this.getTileWidth(i))
                  , n = Math.ceil(o * this.dimensions.y / this.getTileHeight(i));
                return new e.Point(h,n)
            },
            getPixelRatio: function(i) {
                var o = this.dimensions.times(this.getLevelScale(i))
                  , h = 1 / o.x * e.pixelDensityRatio
                  , n = 1 / o.y * e.pixelDensityRatio;
                return new e.Point(h,n)
            },
            getClosestLevel: function() {
                var i, o;
                for (i = this.minLevel + 1; i <= this.maxLevel && (o = this.getNumTiles(i),
                !(o.x > 1 || o.y > 1)); i++)
                    ;
                return i - 1
            },
            getTileAtPoint: function(i, o) {
                var h = o.x >= 0 && o.x <= 1 && o.y >= 0 && o.y <= 1 / this.aspectRatio;
                e.console.assert(h, "[TileSource.getTileAtPoint] must be called with a valid point.");
                var n = this.dimensions.x * this.getLevelScale(i)
                  , r = o.x * n
                  , s = o.y * n
                  , l = Math.floor(r / this.getTileWidth(i))
                  , d = Math.floor(s / this.getTileHeight(i));
                o.x >= 1 && (l = this.getNumTiles(i).x - 1);
                var f = 1e-15;
                return o.y >= 1 / this.aspectRatio - f && (d = this.getNumTiles(i).y - 1),
                new e.Point(l,d)
            },
            getTileBounds: function(i, o, h, n) {
                var r = this.dimensions.times(this.getLevelScale(i))
                  , s = this.getTileWidth(i)
                  , l = this.getTileHeight(i)
                  , d = o === 0 ? 0 : s * o - this.tileOverlap
                  , f = h === 0 ? 0 : l * h - this.tileOverlap
                  , v = s + (o === 0 ? 1 : 2) * this.tileOverlap
                  , y = l + (h === 0 ? 1 : 2) * this.tileOverlap
                  , x = 1 / r.x;
                return v = Math.min(v, r.x - d),
                y = Math.min(y, r.y - f),
                n ? new e.Rect(0,0,v,y) : new e.Rect(d * x,f * x,v * x,y * x)
            },
            getImageInfo: function(i) {
                var o = this, h, n, r, s, l, d, f;
                i && (l = i.split("/"),
                d = l[l.length - 1],
                f = d.lastIndexOf("."),
                f > -1 && (l[l.length - 1] = d.slice(0, f)));
                var v = null;
                if (this.splitHashDataForPost) {
                    var y = i.indexOf("#");
                    y !== -1 && (v = i.substring(y + 1),
                    i = i.substr(0, y))
                }
                n = function(x) {
                    typeof x == "string" && (x = e.parseXml(x));
                    var w = e.TileSource.determineType(o, x, i);
                    if (!w) {
                        o.raiseEvent("open-failed", {
                            message: "Unable to load TileSource",
                            source: i
                        });
                        return
                    }
                    s = w.prototype.configure.apply(o, [x, i, v]),
                    s.ajaxWithCredentials === void 0 && (s.ajaxWithCredentials = o.ajaxWithCredentials),
                    r = new w(s),
                    o.ready = !0,
                    o.raiseEvent("ready", {
                        tileSource: r
                    })
                }
                ,
                i.match(/\.js$/) ? (h = i.split("/").pop().replace(".js", ""),
                e.jsonp({
                    url: i,
                    async: !1,
                    callbackName: h,
                    callback: n
                })) : e.makeAjaxRequest({
                    url: i,
                    postData: v,
                    withCredentials: this.ajaxWithCredentials,
                    headers: this.ajaxHeaders,
                    success: function(x) {
                        var w = t(x);
                        n(w)
                    },
                    error: function(x, w) {
                        var S;
                        try {
                            S = "HTTP " + x.status + " attempting to load TileSource: " + i
                        } catch (D) {
                            var C;
                            typeof w > "u" || !w.toString ? C = "Unknown error" : C = w.toString(),
                            S = C + " attempting to load TileSource: " + i
                        }
                        e.console.error(S),
                        o.raiseEvent("open-failed", {
                            message: S,
                            source: i,
                            postData: v
                        })
                    }
                })
            },
            supports: function(i, o) {
                return !1
            },
            configure: function(i, o, h) {
                throw new Error("Method not implemented.")
            },
            getTileUrl: function(i, o, h) {
                throw new Error("Method not implemented.")
            },
            getTilePostData: function(i, o, h) {
                return null
            },
            getTileAjaxHeaders: function(i, o, h) {
                return {}
            },
            getTileHashKey: function(i, o, h, n, r, s) {
                function l(d) {
                    return r ? d + "+" + JSON.stringify(r) : d
                }
                return l(typeof n != "string" ? i + "/" + o + "_" + h : n)
            },
            tileExists: function(i, o, h) {
                var n = this.getNumTiles(i);
                return i >= this.minLevel && i <= this.maxLevel && o >= 0 && h >= 0 && o < n.x && h < n.y
            },
            hasTransparency: function(i, o, h, n) {
                return !!i || o.match(".png")
            },
            downloadTileStart: function(i) {
                var o = i.userData
                  , h = new Image;
                o.image = h,
                o.request = null;
                var n = function(r) {
                    if (!h) {
                        i.finish(null, o.request, "Image load failed: undefined Image instance.");
                        return
                    }
                    h.onload = h.onerror = h.onabort = null,
                    i.finish(r ? null : h, o.request, r)
                };
                h.onload = function() {
                    n()
                }
                ,
                h.onabort = h.onerror = function() {
                    n("Image load aborted.")
                }
                ,
                i.loadWithAjax ? o.request = e.makeAjaxRequest({
                    url: i.src,
                    withCredentials: i.ajaxWithCredentials,
                    headers: i.ajaxHeaders,
                    responseType: "arraybuffer",
                    postData: i.postData,
                    success: function(r) {
                        var s;
                        try {
                            s = new window.Blob([r.response])
                        } catch (f) {
                            var l = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                            if (f.name === "TypeError" && l) {
                                var d = new l;
                                d.append(r.response),
                                s = d.getBlob()
                            }
                        }
                        s.size === 0 ? n("Empty image response.") : h.src = (window.URL || window.webkitURL).createObjectURL(s)
                    },
                    error: function(r) {
                        n("Image load aborted - XHR error")
                    }
                }) : (i.crossOriginPolicy !== !1 && (h.crossOrigin = i.crossOriginPolicy),
                h.src = i.src)
            },
            downloadTileAbort: function(i) {
                i.userData.request && i.userData.request.abort();
                var o = i.userData.image;
                i.userData.image && (o.onload = o.onerror = o.onabort = null)
            },
            createTileCache: function(i, o, h) {
                i._data = o
            },
            destroyTileCache: function(i) {
                i._data = null,
                i._renderedContext = null
            },
            getTileCacheData: function(i) {
                return i._data
            },
            getTileCacheDataAsImage: function(i) {
                return i._data
            },
            getTileCacheDataAsContext2D: function(i) {
                if (!i._renderedContext) {
                    var o = document.createElement("canvas");
                    o.width = i._data.width,
                    o.height = i._data.height,
                    i._renderedContext = o.getContext("2d"),
                    i._renderedContext.drawImage(i._data, 0, 0),
                    i._data = null
                }
                return i._renderedContext
            }
        },
        e.extend(!0, e.TileSource.prototype, e.EventSource.prototype);
        function t(i) {
            var o = i.responseText, h = i.status, n, r;
            if (i) {
                if (i.status !== 200 && i.status !== 0)
                    throw h = i.status,
                    n = h === 404 ? "Not Found" : i.statusText,
                    new Error(e.getString("Errors.Status", h, n))
            } else
                throw new Error(e.getString("Errors.Security"));
            if (o.match(/^\s*<.*/))
                try {
                    r = i.responseXML && i.responseXML.documentElement ? i.responseXML : e.parseXml(o)
                } catch (s) {
                    r = i.responseText
                }
            else if (o.match(/\s*[{[].*/))
                try {
                    r = e.parseJSON(o)
                } catch (s) {
                    r = o
                }
            else
                r = o;
            return r
        }
        e.TileSource.determineType = function(i, o, h) {
            var n;
            for (n in T)
                if (n.match(/.+TileSource$/) && e.isFunction(T[n]) && e.isFunction(T[n].prototype.supports) && T[n].prototype.supports.call(i, o, h))
                    return T[n];
            return e.console.error("No TileSource was able to open %s %s", h, o),
            null
        }
    }(T),
    function(e) {
        e.DziTileSource = function(o, h, n, r, s, l, d, f, v) {
            var y, x, w, S;
            if (e.isPlainObject(o) ? S = o : S = {
                width: arguments[0],
                height: arguments[1],
                tileSize: arguments[2],
                tileOverlap: arguments[3],
                tilesUrl: arguments[4],
                fileFormat: arguments[5],
                displayRects: arguments[6],
                minLevel: arguments[7],
                maxLevel: arguments[8]
            },
            this._levelRects = {},
            this.tilesUrl = S.tilesUrl,
            this.fileFormat = S.fileFormat,
            this.displayRects = S.displayRects,
            this.displayRects)
                for (y = this.displayRects.length - 1; y >= 0; y--)
                    for (x = this.displayRects[y],
                    w = x.minLevel; w <= x.maxLevel; w++)
                        this._levelRects[w] || (this._levelRects[w] = []),
                        this._levelRects[w].push(x);
            e.TileSource.apply(this, [S])
        }
        ,
        e.extend(e.DziTileSource.prototype, e.TileSource.prototype, {
            supports: function(o, h) {
                var n;
                return o.Image ? n = o.Image.xmlns : o.documentElement && (o.documentElement.localName === "Image" || o.documentElement.tagName === "Image") && (n = o.documentElement.namespaceURI),
                n = (n || "").toLowerCase(),
                n.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || n.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1
            },
            configure: function(o, h, n) {
                var r;
                return e.isPlainObject(o) ? r = i(this, o) : r = t(this, o),
                h && !r.tilesUrl && (r.tilesUrl = h.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"),
                h.search(/\.(dzi|xml|js)\?/) !== -1 ? r.queryParams = h.match(/\?.*/) : r.queryParams = ""),
                r
            },
            getTileUrl: function(o, h, n) {
                return [this.tilesUrl, o, "/", h, "_", n, ".", this.fileFormat, this.queryParams].join("")
            },
            tileExists: function(o, h, n) {
                var r = this._levelRects[o], s, l, d, f, v, y, x;
                if (this.minLevel && o < this.minLevel || this.maxLevel && o > this.maxLevel)
                    return !1;
                if (!r || !r.length)
                    return !0;
                for (x = r.length - 1; x >= 0; x--)
                    if (s = r[x],
                    !(o < s.minLevel || o > s.maxLevel) && (l = this.getLevelScale(o),
                    d = s.x * l,
                    f = s.y * l,
                    v = d + s.width * l,
                    y = f + s.height * l,
                    d = Math.floor(d / this._tileWidth),
                    f = Math.floor(f / this._tileWidth),
                    v = Math.ceil(v / this._tileWidth),
                    y = Math.ceil(y / this._tileWidth),
                    d <= h && h < v && f <= n && n < y))
                        return !0;
                return !1
            }
        });
        function t(o, h) {
            if (!h || !h.documentElement)
                throw new Error(e.getString("Errors.Xml"));
            var n = h.documentElement, r = n.localName || n.tagName, s = h.documentElement.namespaceURI, l = null, d = [], f, v, y, x, w;
            if (r === "Image")
                try {
                    if (x = n.getElementsByTagName("Size")[0],
                    x === void 0 && (x = n.getElementsByTagNameNS(s, "Size")[0]),
                    l = {
                        Image: {
                            xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                            Url: n.getAttribute("Url"),
                            Format: n.getAttribute("Format"),
                            DisplayRect: null,
                            Overlap: parseInt(n.getAttribute("Overlap"), 10),
                            TileSize: parseInt(n.getAttribute("TileSize"), 10),
                            Size: {
                                Height: parseInt(x.getAttribute("Height"), 10),
                                Width: parseInt(x.getAttribute("Width"), 10)
                            }
                        }
                    },
                    !e.imageFormatSupported(l.Image.Format))
                        throw new Error(e.getString("Errors.ImageFormat", l.Image.Format.toUpperCase()));
                    for (f = n.getElementsByTagName("DisplayRect"),
                    f === void 0 && (f = n.getElementsByTagNameNS(s, "DisplayRect")[0]),
                    w = 0; w < f.length; w++)
                        v = f[w],
                        y = v.getElementsByTagName("Rect")[0],
                        y === void 0 && (y = v.getElementsByTagNameNS(s, "Rect")[0]),
                        d.push({
                            Rect: {
                                X: parseInt(y.getAttribute("X"), 10),
                                Y: parseInt(y.getAttribute("Y"), 10),
                                Width: parseInt(y.getAttribute("Width"), 10),
                                Height: parseInt(y.getAttribute("Height"), 10),
                                MinLevel: parseInt(v.getAttribute("MinLevel"), 10),
                                MaxLevel: parseInt(v.getAttribute("MaxLevel"), 10)
                            }
                        });
                    return d.length && (l.Image.DisplayRect = d),
                    i(o, l)
                } catch (D) {
                    throw D instanceof Error ? D : new Error(e.getString("Errors.Dzi"))
                }
            else {
                if (r === "Collection")
                    throw new Error(e.getString("Errors.Dzc"));
                if (r === "Error") {
                    var S = n.getElementsByTagName("Message")[0]
                      , C = S.firstChild.nodeValue;
                    throw new Error(C)
                }
            }
            throw new Error(e.getString("Errors.Dzi"))
        }
        function i(o, h) {
            var n = h.Image, r = n.Url, s = n.Format, l = n.Size, d = n.DisplayRect || [], f = parseInt(l.Width, 10), v = parseInt(l.Height, 10), y = parseInt(n.TileSize, 10), x = parseInt(n.Overlap, 10), w = [], S, C;
            for (C = 0; C < d.length; C++)
                S = d[C].Rect,
                w.push(new e.DisplayRect(parseInt(S.X, 10),parseInt(S.Y, 10),parseInt(S.Width, 10),parseInt(S.Height, 10),parseInt(S.MinLevel, 10),parseInt(S.MaxLevel, 10)));
            return e.extend(!0, {
                width: f,
                height: v,
                tileSize: y,
                tileOverlap: x,
                minLevel: null,
                maxLevel: null,
                tilesUrl: r,
                fileFormat: s,
                displayRects: w
            }, h)
        }
    }(T),
    function(e) {
        e.IIIFTileSource = function(n) {
            if (e.extend(!0, this, n),
            this._id = this["@id"] || this.id || this.identifier || null,
            !(this.height && this.width && this._id))
                throw new Error("IIIF required parameters (width, height, or id) not provided.");
            if (n.tileSizePerScaleFactor = {},
            this.tileFormat = this.tileFormat || "jpg",
            this.version = n.version,
            this.tile_width && this.tile_height)
                n.tileWidth = this.tile_width,
                n.tileHeight = this.tile_height;
            else if (this.tile_width)
                n.tileSize = this.tile_width;
            else if (this.tile_height)
                n.tileSize = this.tile_height;
            else if (this.tiles)
                if (this.tiles.length === 1)
                    n.tileWidth = this.tiles[0].width,
                    n.tileHeight = this.tiles[0].height || this.tiles[0].width,
                    this.scale_factors = this.tiles[0].scaleFactors;
                else {
                    this.scale_factors = [];
                    for (var r = 0; r < this.tiles.length; r++)
                        for (var s = 0; s < this.tiles[r].scaleFactors.length; s++) {
                            var l = this.tiles[r].scaleFactors[s];
                            this.scale_factors.push(l),
                            n.tileSizePerScaleFactor[l] = {
                                width: this.tiles[r].width,
                                height: this.tiles[r].height || this.tiles[r].width
                            }
                        }
                }
            else if (t(n)) {
                for (var d = Math.min(this.height, this.width), f = [256, 512, 1024], v = [], y = 0; y < f.length; y++)
                    f[y] <= d && v.push(f[y]);
                v.length > 0 ? n.tileSize = Math.max.apply(null, v) : n.tileSize = d
            } else
                this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = !0,
                n.levels = i(this),
                e.extend(!0, n, {
                    width: n.levels[n.levels.length - 1].width,
                    height: n.levels[n.levels.length - 1].height,
                    tileSize: Math.max(n.height, n.width),
                    tileOverlap: 0,
                    minLevel: 0,
                    maxLevel: n.levels.length - 1
                }),
                this.levels = n.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
            if (!n.maxLevel && !this.emulateLegacyImagePyramid)
                if (!this.scale_factors)
                    n.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
                else {
                    var x = Math.max.apply(null, this.scale_factors);
                    n.maxLevel = Math.round(Math.log(x) * Math.LOG2E)
                }
            if (this.sizes) {
                var w = this.sizes.length;
                (w === n.maxLevel || w === n.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort(function(S, C) {
                    return S.width - C.width
                }),
                w === n.maxLevel && this.levelSizes.push({
                    width: this.width,
                    height: this.height
                }))
            }
            e.TileSource.apply(this, [n])
        }
        ,
        e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, {
            supports: function(n, r) {
                return n.protocol && n.protocol === "http://iiif.io/api/image" || n["@context"] && (n["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || n["@context"] === "http://iiif.io/api/image/1/context.json") || n.profile && n.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || n.identifier && n.width && n.height ? !0 : !!(n.documentElement && n.documentElement.tagName === "info" && n.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/")
            },
            configure: function(n, r, s) {
                if (e.isPlainObject(n)) {
                    if (!n["@context"])
                        n["@context"] = "http://iiif.io/api/image/1.0/context.json",
                        n["@id"] = r.replace("/info.json", ""),
                        n.version = 1;
                    else {
                        var d = n["@context"];
                        if (Array.isArray(d)) {
                            for (var f = 0; f < d.length; f++)
                                if (typeof d[f] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(d[f]) || d[f] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                                    d = d[f];
                                    break
                                }
                        }
                        switch (d) {
                        case "http://iiif.io/api/image/1/context.json":
                        case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                            n.version = 1;
                            break;
                        case "http://iiif.io/api/image/2/context.json":
                            n.version = 2;
                            break;
                        case "http://iiif.io/api/image/3/context.json":
                            n.version = 3;
                            break;
                        default:
                            e.console.error("Data has a @context property which contains no known IIIF context URI.")
                        }
                    }
                    if (n.preferredFormats) {
                        for (var v = 0; v < n.preferredFormats.length; v++)
                            if (T.imageFormatSupported(n.preferredFormats[v])) {
                                n.tileFormat = n.preferredFormats[v];
                                break
                            }
                    }
                    return n
                } else {
                    var l = o(n);
                    return l["@context"] = "http://iiif.io/api/image/1.0/context.json",
                    l["@id"] = r.replace("/info.xml", ""),
                    l.version = 1,
                    l
                }
            },
            getTileWidth: function(n) {
                if (this.emulateLegacyImagePyramid)
                    return e.TileSource.prototype.getTileWidth.call(this, n);
                var r = Math.pow(2, this.maxLevel - n);
                return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[r] ? this.tileSizePerScaleFactor[r].width : this._tileWidth
            },
            getTileHeight: function(n) {
                if (this.emulateLegacyImagePyramid)
                    return e.TileSource.prototype.getTileHeight.call(this, n);
                var r = Math.pow(2, this.maxLevel - n);
                return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[r] ? this.tileSizePerScaleFactor[r].height : this._tileHeight
            },
            getLevelScale: function(n) {
                if (this.emulateLegacyImagePyramid) {
                    var r = NaN;
                    return this.levels.length > 0 && n >= this.minLevel && n <= this.maxLevel && (r = this.levels[n].width / this.levels[this.maxLevel].width),
                    r
                }
                return e.TileSource.prototype.getLevelScale.call(this, n)
            },
            getNumTiles: function(n) {
                if (this.emulateLegacyImagePyramid) {
                    var r = this.getLevelScale(n);
                    return r ? new e.Point(1,1) : new e.Point(0,0)
                }
                if (this.levelSizes) {
                    var s = this.levelSizes[n]
                      , l = Math.ceil(s.width / this.getTileWidth(n))
                      , d = Math.ceil(s.height / this.getTileHeight(n));
                    return new e.Point(l,d)
                } else
                    return e.TileSource.prototype.getNumTiles.call(this, n)
            },
            getTileAtPoint: function(n, r) {
                if (this.emulateLegacyImagePyramid)
                    return new e.Point(0,0);
                if (this.levelSizes) {
                    var s = r.x >= 0 && r.x <= 1 && r.y >= 0 && r.y <= 1 / this.aspectRatio;
                    e.console.assert(s, "[TileSource.getTileAtPoint] must be called with a valid point.");
                    var l = this.levelSizes[n].width
                      , d = r.x * l
                      , f = r.y * l
                      , v = Math.floor(d / this.getTileWidth(n))
                      , y = Math.floor(f / this.getTileHeight(n));
                    r.x >= 1 && (v = this.getNumTiles(n).x - 1);
                    var x = 1e-15;
                    return r.y >= 1 / this.aspectRatio - x && (y = this.getNumTiles(n).y - 1),
                    new e.Point(v,y)
                }
                return e.TileSource.prototype.getTileAtPoint.call(this, n, r)
            },
            getTileUrl: function(n, r, s) {
                if (this.emulateLegacyImagePyramid) {
                    var l = null;
                    return this.levels.length > 0 && n >= this.minLevel && n <= this.maxLevel && (l = this.levels[n].url),
                    l
                }
                var d = "0", f = Math.pow(.5, this.maxLevel - n), v, y, x, w, S, C, D, z, U, N, k, A, G, ne, X, K;
                return this.levelSizes ? (v = this.levelSizes[n].width,
                y = this.levelSizes[n].height) : (v = Math.ceil(this.width * f),
                y = Math.ceil(this.height * f)),
                x = this.getTileWidth(n),
                w = this.getTileHeight(n),
                S = Math.round(x / f),
                C = Math.round(w / f),
                this.version === 1 ? X = "native." + this.tileFormat : X = "default." + this.tileFormat,
                v < x && y < w ? (this.version === 2 && v === this.width ? A = "full" : this.version === 3 && v === this.width && y === this.height ? A = "max" : this.version === 3 ? A = v + "," + y : A = v + ",",
                D = "full") : (z = r * S,
                U = s * C,
                N = Math.min(S, this.width - z),
                k = Math.min(C, this.height - U),
                r === 0 && s === 0 && N === this.width && k === this.height ? D = "full" : D = [z, U, N, k].join(","),
                G = Math.min(x, v - r * x),
                ne = Math.min(w, y - s * w),
                this.version === 2 && G === this.width ? A = "full" : this.version === 3 && G === this.width && ne === this.height ? A = "max" : this.version === 3 ? A = G + "," + ne : A = G + ","),
                K = [this._id, D, A, d, X].join("/"),
                K
            },
            __testonly__: {
                canBeTiled: t,
                constructLevels: i
            }
        });
        function t(n) {
            var r = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"]
              , s = Array.isArray(n.profile) ? n.profile[0] : n.profile
              , l = r.indexOf(s) !== -1
              , d = !1;
            return n.version === 2 && n.profile.length > 1 && n.profile[1].supports && (d = n.profile[1].supports.indexOf("sizeByW") !== -1),
            n.version === 3 && n.extraFeatures && (d = n.extraFeatures.indexOf("sizeByWh") !== -1),
            !l || d
        }
        function i(n) {
            for (var r = [], s = 0; s < n.sizes.length; s++)
                r.push({
                    url: n._id + "/full/" + n.sizes[s].width + "," + (n.version === 3 ? n.sizes[s].height : "") + "/0/default." + n.tileFormat,
                    width: n.sizes[s].width,
                    height: n.sizes[s].height
                });
            return r.sort(function(l, d) {
                return l.width - d.width
            })
        }
        function o(n) {
            if (!n || !n.documentElement)
                throw new Error(e.getString("Errors.Xml"));
            var r = n.documentElement
              , s = r.tagName
              , l = null;
            if (s === "info")
                try {
                    return l = {},
                    h(r, l),
                    l
                } catch (d) {
                    throw d instanceof Error ? d : new Error(e.getString("Errors.IIIF"))
                }
            throw new Error(e.getString("Errors.IIIF"))
        }
        function h(n, r, s) {
            var l, d;
            if (n.nodeType === 3 && s)
                d = n.nodeValue.trim(),
                d.match(/^\d*$/) && (d = Number(d)),
                r[s] ? (e.isArray(r[s]) || (r[s] = [r[s]]),
                r[s].push(d)) : r[s] = d;
            else if (n.nodeType === 1)
                for (l = 0; l < n.childNodes.length; l++)
                    h(n.childNodes[l], r, n.nodeName)
        }
    }(T),
    function(e) {
        e.OsmTileSource = function(t, i, o, h, n) {
            var r;
            e.isPlainObject(t) ? r = t : r = {
                width: arguments[0],
                height: arguments[1],
                tileSize: arguments[2],
                tileOverlap: arguments[3],
                tilesUrl: arguments[4]
            },
            (!r.width || !r.height) && (r.width = 65572864,
            r.height = 65572864),
            r.tileSize || (r.tileSize = 256,
            r.tileOverlap = 0),
            r.tilesUrl || (r.tilesUrl = "http://tile.openstreetmap.org/"),
            r.minLevel = 8,
            e.TileSource.apply(this, [r])
        }
        ,
        e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, {
            supports: function(t, i) {
                return t.type && t.type === "openstreetmaps"
            },
            configure: function(t, i, o) {
                return t
            },
            getTileUrl: function(t, i, o) {
                return this.tilesUrl + (t - 8) + "/" + i + "/" + o + ".png"
            }
        })
    }(T),
    function(e) {
        e.TmsTileSource = function(t, i, o, h, n) {
            var r;
            e.isPlainObject(t) ? r = t : r = {
                width: arguments[0],
                height: arguments[1],
                tileSize: arguments[2],
                tileOverlap: arguments[3],
                tilesUrl: arguments[4]
            };
            var s = Math.ceil(r.width / 256) * 256, l = Math.ceil(r.height / 256) * 256, d;
            s > l ? d = s / 256 : d = l / 256,
            r.maxLevel = Math.ceil(Math.log(d) / Math.log(2)) - 1,
            r.tileSize = 256,
            r.width = s,
            r.height = l,
            e.TileSource.apply(this, [r])
        }
        ,
        e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, {
            supports: function(t, i) {
                return t.type && t.type === "tiledmapservice"
            },
            configure: function(t, i, o) {
                return t
            },
            getTileUrl: function(t, i, o) {
                var h = this.getNumTiles(t).y - 1;
                return this.tilesUrl + t + "/" + i + "/" + (h - o) + ".png"
            }
        })
    }(T),
    function(e) {
        e.ZoomifyTileSource = function(t) {
            typeof t.tileSize > "u" && (t.tileSize = 256),
            typeof t.fileFormat > "u" && (t.fileFormat = "jpg",
            this.fileFormat = t.fileFormat);
            var i = {
                x: t.width,
                y: t.height
            };
            for (t.imageSizes = [{
                x: t.width,
                y: t.height
            }],
            t.gridSize = [this._getGridSize(t.width, t.height, t.tileSize)]; parseInt(i.x, 10) > t.tileSize || parseInt(i.y, 10) > t.tileSize; )
                i.x = Math.floor(i.x / 2),
                i.y = Math.floor(i.y / 2),
                t.imageSizes.push({
                    x: i.x,
                    y: i.y
                }),
                t.gridSize.push(this._getGridSize(i.x, i.y, t.tileSize));
            t.imageSizes.reverse(),
            t.gridSize.reverse(),
            t.minLevel = 0,
            t.maxLevel = t.gridSize.length - 1,
            T.TileSource.apply(this, [t])
        }
        ,
        e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, {
            _getGridSize: function(t, i, o) {
                return {
                    x: Math.ceil(t / o),
                    y: Math.ceil(i / o)
                }
            },
            _calculateAbsoluteTileNumber: function(t, i, o) {
                for (var h = 0, n = {}, r = 0; r < t; r++)
                    n = this.gridSize[r],
                    h += n.x * n.y;
                return n = this.gridSize[t],
                h += n.x * o + i,
                h
            },
            supports: function(t, i) {
                return t.type && t.type === "zoomifytileservice"
            },
            configure: function(t, i, o) {
                return t
            },
            getTileUrl: function(t, i, o) {
                var h = 0
                  , n = this._calculateAbsoluteTileNumber(t, i, o);
                return h = Math.floor(n / 256),
                this.tilesUrl + "TileGroup" + h + "/" + t + "-" + i + "-" + o + "." + this.fileFormat
            }
        })
    }(T),
    function(e) {
        e.LegacyTileSource = function(h) {
            var n, r, s;
            e.isArray(h) && (n = {
                type: "legacy-image-pyramid",
                levels: h
            }),
            n.levels = t(n.levels),
            n.levels.length > 0 ? (r = n.levels[n.levels.length - 1].width,
            s = n.levels[n.levels.length - 1].height) : (r = 0,
            s = 0,
            e.console.error("No supported image formats found")),
            e.extend(!0, n, {
                width: r,
                height: s,
                tileSize: Math.max(s, r),
                tileOverlap: 0,
                minLevel: 0,
                maxLevel: n.levels.length > 0 ? n.levels.length - 1 : 0
            }),
            e.TileSource.apply(this, [n]),
            this.levels = n.levels
        }
        ,
        e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, {
            supports: function(h, n) {
                return h.type && h.type === "legacy-image-pyramid" || h.documentElement && h.documentElement.getAttribute("type") === "legacy-image-pyramid"
            },
            configure: function(h, n, r) {
                var s;
                return e.isPlainObject(h) ? s = o(this, h) : s = i(this, h),
                s
            },
            getLevelScale: function(h) {
                var n = NaN;
                return this.levels.length > 0 && h >= this.minLevel && h <= this.maxLevel && (n = this.levels[h].width / this.levels[this.maxLevel].width),
                n
            },
            getNumTiles: function(h) {
                var n = this.getLevelScale(h);
                return n ? new e.Point(1,1) : new e.Point(0,0)
            },
            getTileUrl: function(h, n, r) {
                var s = null;
                return this.levels.length > 0 && h >= this.minLevel && h <= this.maxLevel && (s = this.levels[h].url),
                s
            }
        });
        function t(h) {
            var n = [], r, s;
            for (s = 0; s < h.length; s++)
                r = h[s],
                r.height && r.width && r.url ? n.push({
                    url: r.url,
                    width: Number(r.width),
                    height: Number(r.height)
                }) : e.console.error("Unsupported image format: %s", r.url ? r.url : "<no URL>");
            return n.sort(function(l, d) {
                return l.height - d.height
            })
        }
        function i(h, n) {
            if (!n || !n.documentElement)
                throw new Error(e.getString("Errors.Xml"));
            var r = n.documentElement, s = r.tagName, l = null, d = [], f, v;
            if (s === "image")
                try {
                    for (l = {
                        type: r.getAttribute("type"),
                        levels: []
                    },
                    d = r.getElementsByTagName("level"),
                    v = 0; v < d.length; v++)
                        f = d[v],
                        l.levels.push({
                            url: f.getAttribute("url"),
                            width: parseInt(f.getAttribute("width"), 10),
                            height: parseInt(f.getAttribute("height"), 10)
                        });
                    return o(h, l)
                } catch (y) {
                    throw y instanceof Error ? y : new Error("Unknown error parsing Legacy Image Pyramid XML.")
                }
            else {
                if (s === "collection")
                    throw new Error("Legacy Image Pyramid Collections not yet supported.");
                if (s === "error")
                    throw new Error("Error: " + n)
            }
            throw new Error("Unknown element " + s)
        }
        function o(h, n) {
            return n.levels
        }
    }(T),
    function(e) {
        e.ImageTileSource = function(t) {
            t = e.extend({
                buildPyramid: !0,
                crossOriginPolicy: !1,
                ajaxWithCredentials: !1,
                useCanvas: !0
            }, t),
            e.TileSource.apply(this, [t])
        }
        ,
        e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, {
            supports: function(t, i) {
                return t.type && t.type === "image"
            },
            configure: function(t, i, o) {
                return t
            },
            getImageInfo: function(t) {
                var i = this._image = new Image
                  , o = this;
                this.crossOriginPolicy && (i.crossOrigin = this.crossOriginPolicy),
                this.ajaxWithCredentials && (i.useCredentials = this.ajaxWithCredentials),
                e.addEvent(i, "load", function() {
                    o.width = i.naturalWidth,
                    o.height = i.naturalHeight,
                    o.aspectRatio = o.width / o.height,
                    o.dimensions = new e.Point(o.width,o.height),
                    o._tileWidth = o.width,
                    o._tileHeight = o.height,
                    o.tileOverlap = 0,
                    o.minLevel = 0,
                    o.levels = o._buildLevels(),
                    o.maxLevel = o.levels.length - 1,
                    o.ready = !0,
                    o.raiseEvent("ready", {
                        tileSource: o
                    })
                }),
                e.addEvent(i, "error", function() {
                    o.raiseEvent("open-failed", {
                        message: "Error loading image at " + t,
                        source: t
                    })
                }),
                i.src = t
            },
            getLevelScale: function(t) {
                var i = NaN;
                return t >= this.minLevel && t <= this.maxLevel && (i = this.levels[t].width / this.levels[this.maxLevel].width),
                i
            },
            getNumTiles: function(t) {
                var i = this.getLevelScale(t);
                return i ? new e.Point(1,1) : new e.Point(0,0)
            },
            getTileUrl: function(t, i, o) {
                var h = null;
                return t >= this.minLevel && t <= this.maxLevel && (h = this.levels[t].url),
                h
            },
            getContext2D: function(t, i, o) {
                var h = null;
                return t >= this.minLevel && t <= this.maxLevel && (h = this.levels[t].context2D),
                h
            },
            destroy: function() {
                this._freeupCanvasMemory()
            },
            _buildLevels: function() {
                var t = [{
                    url: this._image.src,
                    width: this._image.naturalWidth,
                    height: this._image.naturalHeight
                }];
                if (!this.buildPyramid || !e.supportsCanvas || !this.useCanvas)
                    return delete this._image,
                    t;
                var i = this._image.naturalWidth
                  , o = this._image.naturalHeight
                  , h = document.createElement("canvas")
                  , n = h.getContext("2d");
                if (h.width = i,
                h.height = o,
                n.drawImage(this._image, 0, 0, i, o),
                t[0].context2D = n,
                delete this._image,
                e.isCanvasTainted(h))
                    return t;
                for (; i >= 2 && o >= 2; ) {
                    i = Math.floor(i / 2),
                    o = Math.floor(o / 2);
                    var r = document.createElement("canvas")
                      , s = r.getContext("2d");
                    r.width = i,
                    r.height = o,
                    s.drawImage(h, 0, 0, i, o),
                    t.splice(0, 0, {
                        context2D: s,
                        width: i,
                        height: o
                    }),
                    h = r,
                    n = s
                }
                return t
            },
            _freeupCanvasMemory: function() {
                for (var t = 0; t < this.levels.length; t++)
                    this.levels[t].context2D && (this.levels[t].context2D.canvas.height = 0,
                    this.levels[t].context2D.canvas.width = 0)
            }
        })
    }(T),
    function(e) {
        e.TileSourceCollection = function(t, i, o, h) {
            e.console.error("TileSourceCollection is deprecated; use World instead")
        }
    }(T),
    function(e) {
        e.ButtonState = {
            REST: 0,
            GROUP: 1,
            HOVER: 2,
            DOWN: 3
        },
        e.Button = function(s) {
            var l = this;
            e.EventSource.call(this),
            e.extend(!0, this, {
                tooltip: null,
                srcRest: null,
                srcGroup: null,
                srcHover: null,
                srcDown: null,
                clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
                clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
                fadeDelay: 0,
                fadeLength: 2e3,
                onPress: null,
                onRelease: null,
                onClick: null,
                onEnter: null,
                onExit: null,
                onFocus: null,
                onBlur: null,
                userData: null
            }, s),
            this.element = s.element || e.makeNeutralElement("div"),
            s.element || (this.imgRest = e.makeTransparentImage(this.srcRest),
            this.imgGroup = e.makeTransparentImage(this.srcGroup),
            this.imgHover = e.makeTransparentImage(this.srcHover),
            this.imgDown = e.makeTransparentImage(this.srcDown),
            this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip,
            e.setElementPointerEventsNone(this.imgRest),
            e.setElementPointerEventsNone(this.imgGroup),
            e.setElementPointerEventsNone(this.imgHover),
            e.setElementPointerEventsNone(this.imgDown),
            this.element.style.position = "relative",
            e.setElementTouchActionNone(this.element),
            this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute",
            this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px",
            this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px",
            this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden",
            e.Browser.vendor === e.BROWSERS.FIREFOX && e.Browser.version < 3 && (this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = ""),
            this.element.appendChild(this.imgRest),
            this.element.appendChild(this.imgGroup),
            this.element.appendChild(this.imgHover),
            this.element.appendChild(this.imgDown)),
            this.addHandler("press", this.onPress),
            this.addHandler("release", this.onRelease),
            this.addHandler("click", this.onClick),
            this.addHandler("enter", this.onEnter),
            this.addHandler("exit", this.onExit),
            this.addHandler("focus", this.onFocus),
            this.addHandler("blur", this.onBlur),
            this.currentState = e.ButtonState.GROUP,
            this.fadeBeginTime = null,
            this.shouldFade = !1,
            this.element.style.display = "inline-block",
            this.element.style.position = "relative",
            this.element.title = this.tooltip,
            this.tracker = new e.MouseTracker({
                userData: "Button.tracker",
                element: this.element,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                enterHandler: function(d) {
                    d.insideElementPressed ? (n(l, e.ButtonState.DOWN),
                    l.raiseEvent("enter", {
                        originalEvent: d.originalEvent
                    })) : d.buttonDownAny || n(l, e.ButtonState.HOVER)
                },
                focusHandler: function(d) {
                    l.tracker.enterHandler(d),
                    l.raiseEvent("focus", {
                        originalEvent: d.originalEvent
                    })
                },
                leaveHandler: function(d) {
                    r(l, e.ButtonState.GROUP),
                    d.insideElementPressed && l.raiseEvent("exit", {
                        originalEvent: d.originalEvent
                    })
                },
                blurHandler: function(d) {
                    l.tracker.leaveHandler(d),
                    l.raiseEvent("blur", {
                        originalEvent: d.originalEvent
                    })
                },
                pressHandler: function(d) {
                    n(l, e.ButtonState.DOWN),
                    l.raiseEvent("press", {
                        originalEvent: d.originalEvent
                    })
                },
                releaseHandler: function(d) {
                    d.insideElementPressed && d.insideElementReleased ? (r(l, e.ButtonState.HOVER),
                    l.raiseEvent("release", {
                        originalEvent: d.originalEvent
                    })) : d.insideElementPressed ? r(l, e.ButtonState.GROUP) : n(l, e.ButtonState.HOVER)
                },
                clickHandler: function(d) {
                    d.quick && l.raiseEvent("click", {
                        originalEvent: d.originalEvent
                    })
                },
                keyHandler: function(d) {
                    d.keyCode === 13 ? (l.raiseEvent("click", {
                        originalEvent: d.originalEvent
                    }),
                    l.raiseEvent("release", {
                        originalEvent: d.originalEvent
                    }),
                    d.preventDefault = !0) : d.preventDefault = !1
                }
            }),
            r(this, e.ButtonState.REST)
        }
        ,
        e.extend(e.Button.prototype, e.EventSource.prototype, {
            notifyGroupEnter: function() {
                n(this, e.ButtonState.GROUP)
            },
            notifyGroupExit: function() {
                r(this, e.ButtonState.REST)
            },
            disable: function() {
                this.notifyGroupExit(),
                this.element.disabled = !0,
                this.tracker.setTracking(!1),
                e.setElementOpacity(this.element, .2, !0)
            },
            enable: function() {
                this.element.disabled = !1,
                this.tracker.setTracking(!0),
                e.setElementOpacity(this.element, 1, !0),
                this.notifyGroupEnter()
            },
            destroy: function() {
                this.imgRest && (this.element.removeChild(this.imgRest),
                this.imgRest = null),
                this.imgGroup && (this.element.removeChild(this.imgGroup),
                this.imgGroup = null),
                this.imgHover && (this.element.removeChild(this.imgHover),
                this.imgHover = null),
                this.imgDown && (this.element.removeChild(this.imgDown),
                this.imgDown = null),
                this.removeAllHandlers(),
                this.tracker.destroy(),
                this.element = null
            }
        });
        function t(s) {
            e.requestAnimationFrame(function() {
                i(s)
            })
        }
        function i(s) {
            var l, d, f;
            s.shouldFade && (l = e.now(),
            d = l - s.fadeBeginTime,
            f = 1 - d / s.fadeLength,
            f = Math.min(1, f),
            f = Math.max(0, f),
            s.imgGroup && e.setElementOpacity(s.imgGroup, f, !0),
            f > 0 && t(s))
        }
        function o(s) {
            s.shouldFade = !0,
            s.fadeBeginTime = e.now() + s.fadeDelay,
            window.setTimeout(function() {
                t(s)
            }, s.fadeDelay)
        }
        function h(s) {
            s.shouldFade = !1,
            s.imgGroup && e.setElementOpacity(s.imgGroup, 1, !0)
        }
        function n(s, l) {
            s.element.disabled || (l >= e.ButtonState.GROUP && s.currentState === e.ButtonState.REST && (h(s),
            s.currentState = e.ButtonState.GROUP),
            l >= e.ButtonState.HOVER && s.currentState === e.ButtonState.GROUP && (s.imgHover && (s.imgHover.style.visibility = ""),
            s.currentState = e.ButtonState.HOVER),
            l >= e.ButtonState.DOWN && s.currentState === e.ButtonState.HOVER && (s.imgDown && (s.imgDown.style.visibility = ""),
            s.currentState = e.ButtonState.DOWN))
        }
        function r(s, l) {
            s.element.disabled || (l <= e.ButtonState.HOVER && s.currentState === e.ButtonState.DOWN && (s.imgDown && (s.imgDown.style.visibility = "hidden"),
            s.currentState = e.ButtonState.HOVER),
            l <= e.ButtonState.GROUP && s.currentState === e.ButtonState.HOVER && (s.imgHover && (s.imgHover.style.visibility = "hidden"),
            s.currentState = e.ButtonState.GROUP),
            l <= e.ButtonState.REST && s.currentState === e.ButtonState.GROUP && (o(s),
            s.currentState = e.ButtonState.REST))
        }
    }(T),
    function(e) {
        e.ButtonGroup = function(t) {
            e.extend(!0, this, {
                buttons: [],
                clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold,
                clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold,
                labelText: ""
            }, t);
            var i = this.buttons.concat([]), o = this, h;
            if (this.element = t.element || e.makeNeutralElement("div"),
            !t.group)
                for (this.element.style.display = "inline-block",
                h = 0; h < i.length; h++)
                    this.element.appendChild(i[h].element);
            e.setElementTouchActionNone(this.element),
            this.tracker = new e.MouseTracker({
                userData: "ButtonGroup.tracker",
                element: this.element,
                clickTimeThreshold: this.clickTimeThreshold,
                clickDistThreshold: this.clickDistThreshold,
                enterHandler: function(n) {
                    var r;
                    for (r = 0; r < o.buttons.length; r++)
                        o.buttons[r].notifyGroupEnter()
                },
                leaveHandler: function(n) {
                    var r;
                    if (!n.insideElementPressed)
                        for (r = 0; r < o.buttons.length; r++)
                            o.buttons[r].notifyGroupExit()
                }
            })
        }
        ,
        e.ButtonGroup.prototype = {
            addButton: function(t) {
                this.buttons.push(t),
                this.element.appendChild(t.element)
            },
            emulateEnter: function() {
                this.tracker.enterHandler({
                    eventSource: this.tracker
                })
            },
            emulateLeave: function() {
                this.tracker.leaveHandler({
                    eventSource: this.tracker
                })
            },
            destroy: function() {
                for (; this.buttons.length; ) {
                    var t = this.buttons.pop();
                    this.element.removeChild(t.element),
                    t.destroy()
                }
                this.tracker.destroy(),
                this.element = null
            }
        }
    }(T),
    function(e) {
        e.Rect = function(t, i, o, h, n) {
            this.x = typeof t == "number" ? t : 0,
            this.y = typeof i == "number" ? i : 0,
            this.width = typeof o == "number" ? o : 0,
            this.height = typeof h == "number" ? h : 0,
            this.degrees = typeof n == "number" ? n : 0,
            this.degrees = e.positiveModulo(this.degrees, 360);
            var r, s;
            this.degrees >= 270 ? (r = this.getTopRight(),
            this.x = r.x,
            this.y = r.y,
            s = this.height,
            this.height = this.width,
            this.width = s,
            this.degrees -= 270) : this.degrees >= 180 ? (r = this.getBottomRight(),
            this.x = r.x,
            this.y = r.y,
            this.degrees -= 180) : this.degrees >= 90 && (r = this.getBottomLeft(),
            this.x = r.x,
            this.y = r.y,
            s = this.height,
            this.height = this.width,
            this.width = s,
            this.degrees -= 90)
        }
        ,
        e.Rect.fromSummits = function(t, i, o) {
            var h = t.distanceTo(i)
              , n = t.distanceTo(o)
              , r = i.minus(t)
              , s = Math.atan(r.y / r.x);
            return r.x < 0 ? s += Math.PI : r.y < 0 && (s += 2 * Math.PI),
            new e.Rect(t.x,t.y,h,n,s / Math.PI * 180)
        }
        ,
        e.Rect.prototype = {
            clone: function() {
                return new e.Rect(this.x,this.y,this.width,this.height,this.degrees)
            },
            getAspectRatio: function() {
                return this.width / this.height
            },
            getTopLeft: function() {
                return new e.Point(this.x,this.y)
            },
            getBottomRight: function() {
                return new e.Point(this.x + this.width,this.y + this.height).rotate(this.degrees, this.getTopLeft())
            },
            getTopRight: function() {
                return new e.Point(this.x + this.width,this.y).rotate(this.degrees, this.getTopLeft())
            },
            getBottomLeft: function() {
                return new e.Point(this.x,this.y + this.height).rotate(this.degrees, this.getTopLeft())
            },
            getCenter: function() {
                return new e.Point(this.x + this.width / 2,this.y + this.height / 2).rotate(this.degrees, this.getTopLeft())
            },
            getSize: function() {
                return new e.Point(this.width,this.height)
            },
            equals: function(t) {
                return t instanceof e.Rect && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.degrees === t.degrees
            },
            times: function(t) {
                return new e.Rect(this.x * t,this.y * t,this.width * t,this.height * t,this.degrees)
            },
            translate: function(t) {
                return new e.Rect(this.x + t.x,this.y + t.y,this.width,this.height,this.degrees)
            },
            union: function(t) {
                var i = this.getBoundingBox()
                  , o = t.getBoundingBox()
                  , h = Math.min(i.x, o.x)
                  , n = Math.min(i.y, o.y)
                  , r = Math.max(i.x + i.width, o.x + o.width)
                  , s = Math.max(i.y + i.height, o.y + o.height);
                return new e.Rect(h,n,r - h,s - n)
            },
            intersection: function(t) {
                var i = 1e-10
                  , o = []
                  , h = this.getTopLeft();
                t.containsPoint(h, i) && o.push(h);
                var n = this.getTopRight();
                t.containsPoint(n, i) && o.push(n);
                var r = this.getBottomLeft();
                t.containsPoint(r, i) && o.push(r);
                var s = this.getBottomRight();
                t.containsPoint(s, i) && o.push(s);
                var l = t.getTopLeft();
                this.containsPoint(l, i) && o.push(l);
                var d = t.getTopRight();
                this.containsPoint(d, i) && o.push(d);
                var f = t.getBottomLeft();
                this.containsPoint(f, i) && o.push(f);
                var v = t.getBottomRight();
                this.containsPoint(v, i) && o.push(v);
                for (var y = this._getSegments(), x = t._getSegments(), w = 0; w < y.length; w++)
                    for (var S = y[w], C = 0; C < x.length; C++) {
                        var D = x[C]
                          , z = U(S[0], S[1], D[0], D[1]);
                        z && o.push(z)
                    }
                function U(K, se, ae, ve) {
                    var oe = se.minus(K)
                      , le = ve.minus(ae)
                      , ue = -le.x * oe.y + oe.x * le.y;
                    if (ue === 0)
                        return null;
                    var fe = (oe.x * (K.y - ae.y) - oe.y * (K.x - ae.x)) / ue
                      , ce = (le.x * (K.y - ae.y) - le.y * (K.x - ae.x)) / ue;
                    return -i <= fe && fe <= 1 - i && -i <= ce && ce <= 1 - i ? new e.Point(K.x + ce * oe.x,K.y + ce * oe.y) : null
                }
                if (o.length === 0)
                    return null;
                for (var N = o[0].x, k = o[0].x, A = o[0].y, G = o[0].y, ne = 1; ne < o.length; ne++) {
                    var X = o[ne];
                    X.x < N && (N = X.x),
                    X.x > k && (k = X.x),
                    X.y < A && (A = X.y),
                    X.y > G && (G = X.y)
                }
                return new e.Rect(N,A,k - N,G - A)
            },
            _getSegments: function() {
                var t = this.getTopLeft()
                  , i = this.getTopRight()
                  , o = this.getBottomLeft()
                  , h = this.getBottomRight();
                return [[t, i], [i, h], [h, o], [o, t]]
            },
            rotate: function(t, i) {
                if (t = e.positiveModulo(t, 360),
                t === 0)
                    return this.clone();
                i = i || this.getCenter();
                var o = this.getTopLeft().rotate(t, i)
                  , h = this.getTopRight().rotate(t, i)
                  , n = h.minus(o);
                n = n.apply(function(s) {
                    var l = 1e-15;
                    return Math.abs(s) < l ? 0 : s
                });
                var r = Math.atan(n.y / n.x);
                return n.x < 0 ? r += Math.PI : n.y < 0 && (r += 2 * Math.PI),
                new e.Rect(o.x,o.y,this.width,this.height,r / Math.PI * 180)
            },
            getBoundingBox: function() {
                if (this.degrees === 0)
                    return this.clone();
                var t = this.getTopLeft()
                  , i = this.getTopRight()
                  , o = this.getBottomLeft()
                  , h = this.getBottomRight()
                  , n = Math.min(t.x, i.x, o.x, h.x)
                  , r = Math.max(t.x, i.x, o.x, h.x)
                  , s = Math.min(t.y, i.y, o.y, h.y)
                  , l = Math.max(t.y, i.y, o.y, h.y);
                return new e.Rect(n,s,r - n,l - s)
            },
            getIntegerBoundingBox: function() {
                var t = this.getBoundingBox()
                  , i = Math.floor(t.x)
                  , o = Math.floor(t.y)
                  , h = Math.ceil(t.width + t.x - i)
                  , n = Math.ceil(t.height + t.y - o);
                return new e.Rect(i,o,h,n)
            },
            containsPoint: function(t, i) {
                i = i || 0;
                var o = this.getTopLeft()
                  , h = this.getTopRight()
                  , n = this.getBottomLeft()
                  , r = h.minus(o)
                  , s = n.minus(o);
                return (t.x - o.x) * r.x + (t.y - o.y) * r.y >= -i && (t.x - h.x) * r.x + (t.y - h.y) * r.y <= i && (t.x - o.x) * s.x + (t.y - o.y) * s.y >= -i && (t.x - n.x) * s.x + (t.y - n.y) * s.y <= i
            },
            toString: function() {
                return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]"
            }
        }
    }(T),
    function(e) {
        var t = {};
        e.ReferenceStrip = function(f) {
            var v = this, y = f.viewer, x = e.getElementSize(y.element), w, S, C;
            for (f.id || (f.id = "referencestrip-" + e.now(),
            this.element = e.makeNeutralElement("div"),
            this.element.id = f.id,
            this.element.className = "referencestrip"),
            f = e.extend(!0, {
                sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio,
                position: e.DEFAULT_SETTINGS.referenceStripPosition,
                scroll: e.DEFAULT_SETTINGS.referenceStripScroll,
                clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold
            }, f, {
                element: this.element
            }),
            e.extend(this, f),
            t[this.id] = {
                animating: !1
            },
            this.minPixelRatio = this.viewer.minPixelRatio,
            this.element.tabIndex = 0,
            S = this.element.style,
            S.marginTop = "0px",
            S.marginRight = "0px",
            S.marginBottom = "0px",
            S.marginLeft = "0px",
            S.left = "0px",
            S.bottom = "0px",
            S.border = "0px",
            S.background = "#000",
            S.position = "relative",
            e.setElementTouchActionNone(this.element),
            e.setElementOpacity(this.element, .8),
            this.viewer = y,
            this.tracker = new e.MouseTracker({
                userData: "ReferenceStrip.tracker",
                element: this.element,
                clickHandler: e.delegate(this, i),
                dragHandler: e.delegate(this, o),
                scrollHandler: e.delegate(this, h),
                enterHandler: e.delegate(this, r),
                leaveHandler: e.delegate(this, s),
                keyDownHandler: e.delegate(this, l),
                keyHandler: e.delegate(this, d),
                preProcessEventHandler: function(D) {
                    D.eventType === "wheel" && (D.preventDefault = !0)
                }
            }),
            f.width && f.height ? (this.element.style.width = f.width + "px",
            this.element.style.height = f.height + "px",
            y.addControl(this.element, {
                anchor: e.ControlAnchor.BOTTOM_LEFT
            })) : f.scroll === "horizontal" ? (this.element.style.width = x.x * f.sizeRatio * y.tileSources.length + 12 * y.tileSources.length + "px",
            this.element.style.height = x.y * f.sizeRatio + "px",
            y.addControl(this.element, {
                anchor: e.ControlAnchor.BOTTOM_LEFT
            })) : (this.element.style.height = x.y * f.sizeRatio * y.tileSources.length + 12 * y.tileSources.length + "px",
            this.element.style.width = x.x * f.sizeRatio + "px",
            y.addControl(this.element, {
                anchor: e.ControlAnchor.TOP_LEFT
            })),
            this.panelWidth = x.x * this.sizeRatio + 8,
            this.panelHeight = x.y * this.sizeRatio + 8,
            this.panels = [],
            this.miniViewers = {},
            C = 0; C < y.tileSources.length; C++)
                w = e.makeNeutralElement("div"),
                w.id = this.element.id + "-" + C,
                w.style.width = v.panelWidth + "px",
                w.style.height = v.panelHeight + "px",
                w.style.display = "inline",
                w.style.float = "left",
                w.style.cssFloat = "left",
                w.style.styleFloat = "left",
                w.style.padding = "2px",
                e.setElementTouchActionNone(w),
                e.setElementPointerEventsNone(w),
                this.element.appendChild(w),
                w.activePanel = !1,
                this.panels.push(w);
            n(this, this.scroll === "vertical" ? x.y : x.x, 0),
            this.setFocus(0)
        }
        ,
        e.ReferenceStrip.prototype = {
            setFocus: function(f) {
                var v = this.element.querySelector("#" + this.element.id + "-" + f), y = e.getElementSize(this.viewer.canvas), x = Number(this.element.style.width.replace("px", "")), w = Number(this.element.style.height.replace("px", "")), S = -Number(this.element.style.marginLeft.replace("px", "")), C = -Number(this.element.style.marginTop.replace("px", "")), D;
                this.currentSelected !== v && (this.currentSelected && (this.currentSelected.style.background = "#000"),
                this.currentSelected = v,
                this.currentSelected.style.background = "#999",
                this.scroll === "horizontal" ? (D = Number(f) * (this.panelWidth + 3),
                D > S + y.x - this.panelWidth ? (D = Math.min(D, x - y.x),
                this.element.style.marginLeft = -D + "px",
                n(this, y.x, -D)) : D < S && (D = Math.max(0, D - y.x / 2),
                this.element.style.marginLeft = -D + "px",
                n(this, y.x, -D))) : (D = Number(f) * (this.panelHeight + 3),
                D > C + y.y - this.panelHeight ? (D = Math.min(D, w - y.y),
                this.element.style.marginTop = -D + "px",
                n(this, y.y, -D)) : D < C && (D = Math.max(0, D - y.y / 2),
                this.element.style.marginTop = -D + "px",
                n(this, y.y, -D))),
                this.currentPage = f,
                r.call(this, {
                    eventSource: this.tracker
                }))
            },
            update: function() {
                return !!t[this.id].animating
            },
            destroy: function() {
                if (this.miniViewers)
                    for (var f in this.miniViewers)
                        this.miniViewers[f].destroy();
                this.tracker.destroy(),
                this.element && this.viewer.removeControl(this.element)
            }
        };
        function i(f) {
            if (f.quick) {
                var v;
                this.scroll === "horizontal" ? v = Math.floor(f.position.x / (this.panelWidth + 4)) : v = Math.floor(f.position.y / this.panelHeight),
                this.viewer.goToPage(v)
            }
            this.element.focus()
        }
        function o(f) {
            if (this.dragging = !0,
            this.element) {
                var v = Number(this.element.style.marginLeft.replace("px", ""))
                  , y = Number(this.element.style.marginTop.replace("px", ""))
                  , x = Number(this.element.style.width.replace("px", ""))
                  , w = Number(this.element.style.height.replace("px", ""))
                  , S = e.getElementSize(this.viewer.canvas);
                this.scroll === "horizontal" ? -f.delta.x > 0 ? v > -(x - S.x) && (this.element.style.marginLeft = v + f.delta.x * 2 + "px",
                n(this, S.x, v + f.delta.x * 2)) : -f.delta.x < 0 && v < 0 && (this.element.style.marginLeft = v + f.delta.x * 2 + "px",
                n(this, S.x, v + f.delta.x * 2)) : -f.delta.y > 0 ? y > -(w - S.y) && (this.element.style.marginTop = y + f.delta.y * 2 + "px",
                n(this, S.y, y + f.delta.y * 2)) : -f.delta.y < 0 && y < 0 && (this.element.style.marginTop = y + f.delta.y * 2 + "px",
                n(this, S.y, y + f.delta.y * 2))
            }
        }
        function h(f) {
            if (this.element) {
                var v = Number(this.element.style.marginLeft.replace("px", ""))
                  , y = Number(this.element.style.marginTop.replace("px", ""))
                  , x = Number(this.element.style.width.replace("px", ""))
                  , w = Number(this.element.style.height.replace("px", ""))
                  , S = e.getElementSize(this.viewer.canvas);
                this.scroll === "horizontal" ? f.scroll > 0 ? v > -(x - S.x) && (this.element.style.marginLeft = v - f.scroll * 60 + "px",
                n(this, S.x, v - f.scroll * 60)) : f.scroll < 0 && v < 0 && (this.element.style.marginLeft = v - f.scroll * 60 + "px",
                n(this, S.x, v - f.scroll * 60)) : f.scroll < 0 ? y > S.y - w && (this.element.style.marginTop = y + f.scroll * 60 + "px",
                n(this, S.y, y + f.scroll * 60)) : f.scroll > 0 && y < 0 && (this.element.style.marginTop = y + f.scroll * 60 + "px",
                n(this, S.y, y + f.scroll * 60)),
                f.preventDefault = !0
            }
        }
        function n(f, v, y) {
            var x, w, S, C, D, z;
            for (f.scroll === "horizontal" ? x = f.panelWidth : x = f.panelHeight,
            w = Math.ceil(v / x) + 5,
            S = Math.ceil((Math.abs(y) + v) / x) + 1,
            w = S - w,
            w = w < 0 ? 0 : w,
            D = w; D < S && D < f.panels.length; D++)
                if (z = f.panels[D],
                !z.activePanel) {
                    var U, N = f.viewer.tileSources[D];
                    N.referenceStripThumbnailUrl ? U = {
                        type: "image",
                        url: N.referenceStripThumbnailUrl
                    } : U = N,
                    C = new e.Viewer({
                        id: z.id,
                        tileSources: [U],
                        element: z,
                        navigatorSizeRatio: f.sizeRatio,
                        showNavigator: !1,
                        mouseNavEnabled: !1,
                        showNavigationControl: !1,
                        showSequenceControl: !1,
                        immediateRender: !0,
                        blendTime: 0,
                        animationTime: 0,
                        loadTilesWithAjax: f.viewer.loadTilesWithAjax,
                        ajaxHeaders: f.viewer.ajaxHeaders,
                        useCanvas: f.useCanvas
                    }),
                    e.setElementPointerEventsNone(C.canvas),
                    e.setElementPointerEventsNone(C.container),
                    C.innerTracker.setTracking(!1),
                    C.outerTracker.setTracking(!1),
                    f.miniViewers[z.id] = C,
                    z.activePanel = !0
                }
        }
        function r(f) {
            var v = f.eventSource.element;
            this.scroll === "horizontal" ? v.style.marginBottom = "0px" : v.style.marginLeft = "0px"
        }
        function s(f) {
            var v = f.eventSource.element;
            this.scroll === "horizontal" ? v.style.marginBottom = "-" + e.getElementSize(v).y / 2 + "px" : v.style.marginLeft = "-" + e.getElementSize(v).x / 2 + "px"
        }
        function l(f) {
            if (!f.ctrl && !f.alt && !f.meta)
                switch (f.keyCode) {
                case 38:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: 1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 40:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: -1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 37:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: -1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 39:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: 1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                default:
                    f.preventDefault = !1;
                    break
                }
            else
                f.preventDefault = !1
        }
        function d(f) {
            if (!f.ctrl && !f.alt && !f.meta)
                switch (f.keyCode) {
                case 61:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: 1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 45:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: -1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 48:
                case 119:
                case 87:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: 1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 115:
                case 83:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: -1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 97:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: -1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                case 100:
                    h.call(this, {
                        eventSource: this.tracker,
                        position: null,
                        scroll: 1,
                        shift: null
                    }),
                    f.preventDefault = !0;
                    break;
                default:
                    f.preventDefault = !1;
                    break
                }
            else
                f.preventDefault = !1
        }
    }(T),
    function(e) {
        e.DisplayRect = function(t, i, o, h, n, r) {
            e.Rect.apply(this, [t, i, o, h]),
            this.minLevel = n,
            this.maxLevel = r
        }
        ,
        e.extend(e.DisplayRect.prototype, e.Rect.prototype)
    }(T),
    function(e) {
        e.Spring = function(i) {
            var o = arguments;
            typeof i != "object" && (i = {
                initial: o.length && typeof o[0] == "number" ? o[0] : void 0,
                springStiffness: o.length > 1 ? o[1].springStiffness : 5,
                animationTime: o.length > 1 ? o[1].animationTime : 1.5
            }),
            e.console.assert(typeof i.springStiffness == "number" && i.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"),
            e.console.assert(typeof i.animationTime == "number" && i.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"),
            i.exponential && (this._exponential = !0,
            delete i.exponential),
            e.extend(!0, this, i),
            this.current = {
                value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1,
                time: e.now()
            },
            e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"),
            this.start = {
                value: this.current.value,
                time: this.current.time
            },
            this.target = {
                value: this.current.value,
                time: this.current.time
            },
            this._exponential && (this.start._logValue = Math.log(this.start.value),
            this.target._logValue = Math.log(this.target.value),
            this.current._logValue = Math.log(this.current.value))
        }
        ,
        e.Spring.prototype = {
            resetTo: function(i) {
                e.console.assert(!this._exponential || i !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"),
                this.start.value = this.target.value = this.current.value = i,
                this.start.time = this.target.time = this.current.time = e.now(),
                this._exponential && (this.start._logValue = Math.log(this.start.value),
                this.target._logValue = Math.log(this.target.value),
                this.current._logValue = Math.log(this.current.value))
            },
            springTo: function(i) {
                e.console.assert(!this._exponential || i !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"),
                this.start.value = this.current.value,
                this.start.time = this.current.time,
                this.target.value = i,
                this.target.time = this.start.time + 1e3 * this.animationTime,
                this._exponential && (this.start._logValue = Math.log(this.start.value),
                this.target._logValue = Math.log(this.target.value))
            },
            shiftBy: function(i) {
                this.start.value += i,
                this.target.value += i,
                this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"),
                this.start._logValue = Math.log(this.start.value),
                this.target._logValue = Math.log(this.target.value))
            },
            setExponential: function(i) {
                this._exponential = i,
                this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"),
                this.start._logValue = Math.log(this.start.value),
                this.target._logValue = Math.log(this.target.value),
                this.current._logValue = Math.log(this.current.value))
            },
            update: function() {
                this.current.time = e.now();
                var i, o;
                this._exponential ? (i = this.start._logValue,
                o = this.target._logValue) : (i = this.start.value,
                o = this.target.value);
                var h = this.current.time >= this.target.time ? o : i + (o - i) * t(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time))
                  , n = this.current.value;
                return this._exponential ? this.current.value = Math.exp(h) : this.current.value = h,
                n !== this.current.value
            },
            isAtTargetValue: function() {
                return this.current.value === this.target.value
            }
        };
        function t(i, o) {
            return (1 - Math.exp(i * -o)) / (1 - Math.exp(-i))
        }
    }(T),
    function(e) {
        e.ImageJob = function(i) {
            e.extend(!0, this, {
                timeout: e.DEFAULT_SETTINGS.timeout,
                jobId: null,
                tries: 0
            }, i),
            this.data = null,
            this.userData = {},
            this.errorMsg = null
        }
        ,
        e.ImageJob.prototype = {
            start: function() {
                this.tries++;
                var i = this
                  , o = this.abort;
                this.jobId = window.setTimeout(function() {
                    i.finish(null, null, "Image load exceeded timeout (" + i.timeout + " ms)")
                }, this.timeout),
                this.abort = function() {
                    i.source.downloadTileAbort(i),
                    typeof o == "function" && o()
                }
                ,
                this.source.downloadTileStart(this)
            },
            finish: function(i, o, h) {
                this.data = i,
                this.request = o,
                this.errorMsg = h,
                this.jobId && window.clearTimeout(this.jobId),
                this.callback(this)
            }
        },
        e.ImageLoader = function(i) {
            e.extend(!0, this, {
                jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit,
                timeout: e.DEFAULT_SETTINGS.timeout,
                jobQueue: [],
                failedTiles: [],
                jobsInProgress: 0
            }, i)
        }
        ,
        e.ImageLoader.prototype = {
            addJob: function(i) {
                if (!i.source) {
                    e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
                    var o = e.TileSource.prototype;
                    i.source = {
                        downloadTileStart: o.downloadTileStart,
                        downloadTileAbort: o.downloadTileAbort
                    }
                }
                var h = this
                  , n = function(l) {
                    t(h, l, i.callback)
                }
                  , r = {
                    src: i.src,
                    tile: i.tile || {},
                    source: i.source,
                    loadWithAjax: i.loadWithAjax,
                    ajaxHeaders: i.loadWithAjax ? i.ajaxHeaders : null,
                    crossOriginPolicy: i.crossOriginPolicy,
                    ajaxWithCredentials: i.ajaxWithCredentials,
                    postData: i.postData,
                    callback: n,
                    abort: i.abort,
                    timeout: this.timeout
                }
                  , s = new e.ImageJob(r);
                !this.jobLimit || this.jobsInProgress < this.jobLimit ? (s.start(),
                this.jobsInProgress++) : this.jobQueue.push(s)
            },
            clear: function() {
                for (var i = 0; i < this.jobQueue.length; i++) {
                    var o = this.jobQueue[i];
                    typeof o.abort == "function" && o.abort()
                }
                this.jobQueue = []
            }
        };
        function t(i, o, h) {
            o.errorMsg !== "" && (o.data === null || o.data === void 0) && o.tries < 1 + i.tileRetryMax && i.failedTiles.push(o);
            var n;
            i.jobsInProgress--,
            (!i.jobLimit || i.jobsInProgress < i.jobLimit) && i.jobQueue.length > 0 && (n = i.jobQueue.shift(),
            n.start(),
            i.jobsInProgress++),
            i.tileRetryMax > 0 && i.jobQueue.length === 0 && (!i.jobLimit || i.jobsInProgress < i.jobLimit) && i.failedTiles.length > 0 && (n = i.failedTiles.shift(),
            setTimeout(function() {
                n.start()
            }, i.tileRetryDelay),
            i.jobsInProgress++),
            h(o.data, o.errorMsg, o.request)
        }
    }(T),
    function(e) {
        e.Tile = function(t, i, o, h, n, r, s, l, d, f, v, y) {
            this.level = t,
            this.x = i,
            this.y = o,
            this.bounds = h,
            this.sourceBounds = f,
            this.exists = n,
            this._url = r,
            this.postData = v,
            this.context2D = s,
            this.loadWithAjax = l,
            this.ajaxHeaders = d,
            y === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."),
            y = e.TileSource.prototype.getTileHashKey(t, i, o, r, d, v)),
            this.cacheKey = y,
            this.loaded = !1,
            this.loading = !1,
            this.element = null,
            this.imgElement = null,
            this.style = null,
            this.position = null,
            this.size = null,
            this.flipped = !1,
            this.blendStart = null,
            this.opacity = null,
            this.squaredDistance = null,
            this.visibility = null,
            this.hasTransparency = !1,
            this.beingDrawn = !1,
            this.lastTouchTime = 0,
            this.isRightMost = !1,
            this.isBottomMost = !1
        }
        ,
        e.Tile.prototype = {
            toString: function() {
                return this.level + "/" + this.x + "_" + this.y
            },
            _hasTransparencyChannel: function() {
                return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."),
                !!this.context2D || this.getUrl().match(".png")
            },
            drawHTML: function(t) {
                if (!this.cacheImageRecord) {
                    e.console.warn("[Tile.drawHTML] attempting to draw tile %s when it's not cached", this.toString());
                    return
                }
                if (!this.loaded) {
                    e.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString());
                    return
                }
                if (!this.element) {
                    var i = this.getImage();
                    if (!i)
                        return;
                    this.element = e.makeNeutralElement("div"),
                    this.imgElement = i.cloneNode(),
                    this.imgElement.style.msInterpolationMode = "nearest-neighbor",
                    this.imgElement.style.width = "100%",
                    this.imgElement.style.height = "100%",
                    this.style = this.element.style,
                    this.style.position = "absolute"
                }
                this.element.parentNode !== t && t.appendChild(this.element),
                this.imgElement.parentNode !== this.element && this.element.appendChild(this.imgElement),
                this.style.top = this.position.y + "px",
                this.style.left = this.position.x + "px",
                this.style.height = this.size.y + "px",
                this.style.width = this.size.x + "px",
                this.flipped && (this.style.transform = "scaleX(-1)"),
                e.setElementOpacity(this.element, this.opacity)
            },
            get image() {
                return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."),
                this.getImage()
            },
            get url() {
                return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."),
                this.getUrl()
            },
            getImage: function() {
                return this.cacheImageRecord.getImage()
            },
            getUrl: function() {
                return typeof this._url == "function" ? this._url() : this._url
            },
            getCanvasContext: function() {
                return this.context2D || this.cacheImageRecord.getRenderedContext()
            },
            drawCanvas: function(t, i, o, h, n, r) {
                var s = this.position.times(e.pixelDensityRatio), l = this.size.times(e.pixelDensityRatio), d;
                if (!this.context2D && !this.cacheImageRecord) {
                    e.console.warn("[Tile.drawCanvas] attempting to draw tile %s when it's not cached", this.toString());
                    return
                }
                if (d = this.getCanvasContext(),
                !this.loaded || !d) {
                    e.console.warn("Attempting to draw tile %s when it's not yet loaded.", this.toString());
                    return
                }
                t.save(),
                t.globalAlpha = this.opacity,
                typeof o == "number" && o !== 1 && (s = s.times(o),
                l = l.times(o)),
                h instanceof e.Point && (s = s.plus(h)),
                t.globalAlpha === 1 && this.hasTransparency && (n && (s.x = Math.round(s.x),
                s.y = Math.round(s.y),
                l.x = Math.round(l.x),
                l.y = Math.round(l.y)),
                t.clearRect(s.x, s.y, l.x, l.y)),
                i({
                    context: t,
                    tile: this,
                    rendered: d
                });
                var f, v;
                this.sourceBounds ? (f = Math.min(this.sourceBounds.width, d.canvas.width),
                v = Math.min(this.sourceBounds.height, d.canvas.height)) : (f = d.canvas.width,
                v = d.canvas.height),
                t.translate(s.x + l.x / 2, 0),
                this.flipped && t.scale(-1, 1),
                t.drawImage(d.canvas, 0, 0, f, v, -l.x / 2, s.y, l.x, l.y),
                t.restore()
            },
            getScaleForEdgeSmoothing: function() {
                var t;
                if (this.cacheImageRecord)
                    t = this.cacheImageRecord.getRenderedContext();
                else if (this.context2D)
                    t = this.context2D;
                else
                    return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()),
                    1;
                return t.canvas.width / (this.size.x * e.pixelDensityRatio)
            },
            getTranslationForEdgeSmoothing: function(t, i, o) {
                var h = Math.max(1, Math.ceil((o.x - i.x) / 2))
                  , n = Math.max(1, Math.ceil((o.y - i.y) / 2));
                return new e.Point(h,n).minus(this.position.times(e.pixelDensityRatio).times(t || 1).apply(function(r) {
                    return r % 1
                }))
            },
            unload: function() {
                this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement),
                this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                this.element = null,
                this.imgElement = null,
                this.loaded = !1,
                this.loading = !1
            }
        }
    }(T),
    function(e) {
        e.OverlayPlacement = e.Placement,
        e.OverlayRotationMode = e.freezeObject({
            NO_ROTATION: 1,
            EXACT: 2,
            BOUNDING_BOX: 3
        }),
        e.Overlay = function(t, i, o) {
            var h;
            e.isPlainObject(t) ? h = t : h = {
                element: t,
                location: i,
                placement: o
            },
            this.element = h.element,
            this.style = h.element.style,
            this._init(h)
        }
        ,
        e.Overlay.prototype = {
            _init: function(t) {
                this.location = t.location,
                this.placement = t.placement === void 0 ? e.Placement.TOP_LEFT : t.placement,
                this.onDraw = t.onDraw,
                this.checkResize = t.checkResize === void 0 ? !0 : t.checkResize,
                this.width = t.width === void 0 ? null : t.width,
                this.height = t.height === void 0 ? null : t.height,
                this.rotationMode = t.rotationMode || e.OverlayRotationMode.EXACT,
                this.location instanceof e.Rect && (this.width = this.location.width,
                this.height = this.location.height,
                this.location = this.location.getTopLeft(),
                this.placement = e.Placement.TOP_LEFT),
                this.scales = this.width !== null && this.height !== null,
                this.bounds = new e.Rect(this.location.x,this.location.y,this.width,this.height),
                this.position = this.location
            },
            adjust: function(t, i) {
                var o = e.Placement.properties[this.placement];
                o && (o.isHorizontallyCentered ? t.x -= i.x / 2 : o.isRight && (t.x -= i.x),
                o.isVerticallyCentered ? t.y -= i.y / 2 : o.isBottom && (t.y -= i.y))
            },
            destroy: function() {
                var t = this.element
                  , i = this.style;
                t.parentNode && (t.parentNode.removeChild(t),
                t.prevElementParent && (i.display = "none",
                document.body.appendChild(t))),
                this.onDraw = null,
                i.top = "",
                i.left = "",
                i.position = "",
                this.width !== null && (i.width = ""),
                this.height !== null && (i.height = "");
                var o = e.getCssPropertyWithVendorPrefix("transformOrigin")
                  , h = e.getCssPropertyWithVendorPrefix("transform");
                o && h && (i[o] = "",
                i[h] = "")
            },
            drawHTML: function(t, i) {
                var o = this.element;
                o.parentNode !== t && (o.prevElementParent = o.parentNode,
                o.prevNextSibling = o.nextSibling,
                t.appendChild(o),
                this.style.position = "absolute",
                this.size = e.getElementSize(o));
                var h = this._getOverlayPositionAndSize(i)
                  , n = h.position
                  , r = this.size = h.size
                  , s = h.rotate;
                if (this.onDraw)
                    this.onDraw(n, r, this.element);
                else {
                    var l = this.style;
                    l.left = n.x + "px",
                    l.top = n.y + "px",
                    this.width !== null && (l.width = r.x + "px"),
                    this.height !== null && (l.height = r.y + "px");
                    var d = e.getCssPropertyWithVendorPrefix("transformOrigin")
                      , f = e.getCssPropertyWithVendorPrefix("transform");
                    d && f && (s ? (l[d] = this._getTransformOrigin(),
                    l[f] = "rotate(" + s + "deg)") : (l[d] = "",
                    l[f] = "")),
                    l.display = "block"
                }
            },
            _getOverlayPositionAndSize: function(t) {
                var i = t.pixelFromPoint(this.location, !0)
                  , o = this._getSizeInPixels(t);
                this.adjust(i, o);
                var h = 0;
                if (t.getRotation(!0) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION)
                    if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
                        var n = new e.Rect(i.x,i.y,o.x,o.y)
                          , r = this._getBoundingBox(n, t.getRotation(!0));
                        i = r.getTopLeft(),
                        o = r.getSize()
                    } else
                        h = t.getRotation(!0);
                return {
                    position: i,
                    size: o,
                    rotate: h
                }
            },
            _getSizeInPixels: function(t) {
                var i = this.size.x
                  , o = this.size.y;
                if (this.width !== null || this.height !== null) {
                    var h = t.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0,this.height || 0), !0);
                    this.width !== null && (i = h.x),
                    this.height !== null && (o = h.y)
                }
                if (this.checkResize && (this.width === null || this.height === null)) {
                    var n = this.size = e.getElementSize(this.element);
                    this.width === null && (i = n.x),
                    this.height === null && (o = n.y)
                }
                return new e.Point(i,o)
            },
            _getBoundingBox: function(t, i) {
                var o = this._getPlacementPoint(t);
                return t.rotate(i, o).getBoundingBox()
            },
            _getPlacementPoint: function(t) {
                var i = new e.Point(t.x,t.y)
                  , o = e.Placement.properties[this.placement];
                return o && (o.isHorizontallyCentered ? i.x += t.width / 2 : o.isRight && (i.x += t.width),
                o.isVerticallyCentered ? i.y += t.height / 2 : o.isBottom && (i.y += t.height)),
                i
            },
            _getTransformOrigin: function() {
                var t = ""
                  , i = e.Placement.properties[this.placement];
                return i && (i.isLeft ? t = "left" : i.isRight && (t = "right"),
                i.isTop ? t += " top" : i.isBottom && (t += " bottom")),
                t
            },
            update: function(t, i) {
                var o = e.isPlainObject(t) ? t : {
                    location: t,
                    placement: i
                };
                this._init({
                    location: o.location || this.location,
                    placement: o.placement !== void 0 ? o.placement : this.placement,
                    onDraw: o.onDraw || this.onDraw,
                    checkResize: o.checkResize || this.checkResize,
                    width: o.width !== void 0 ? o.width : this.width,
                    height: o.height !== void 0 ? o.height : this.height,
                    rotationMode: o.rotationMode || this.rotationMode
                })
            },
            getBounds: function(t) {
                e.console.assert(t, "A viewport must now be passed to Overlay.getBounds.");
                var i = this.width
                  , o = this.height;
                if (i === null || o === null) {
                    var h = t.deltaPointsFromPixelsNoRotate(this.size, !0);
                    i === null && (i = h.x),
                    o === null && (o = h.y)
                }
                var n = this.location.clone();
                return this.adjust(n, new e.Point(i,o)),
                this._adjustBoundsForRotation(t, new e.Rect(n.x,n.y,i,o))
            },
            _adjustBoundsForRotation: function(t, i) {
                if (!t || t.getRotation(!0) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT)
                    return i;
                if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
                    if (this.width === null || this.height === null)
                        return i;
                    var o = this._getOverlayPositionAndSize(t);
                    return t.viewerElementToViewportRectangle(new e.Rect(o.position.x,o.position.y,o.size.x,o.size.y))
                }
                return i.rotate(-t.getRotation(!0), this._getPlacementPoint(i))
            }
        }
    }(T),
    function(e) {
        e.Drawer = function(t) {
            e.console.assert(t.viewer, "[Drawer] options.viewer is required");
            var i = arguments;
            if (e.isPlainObject(t) || (t = {
                source: i[0],
                viewport: i[1],
                element: i[2]
            }),
            e.console.assert(t.viewport, "[Drawer] options.viewport is required"),
            e.console.assert(t.element, "[Drawer] options.element is required"),
            t.source && e.console.error("[Drawer] options.source is no longer accepted; use TiledImage instead"),
            this.viewer = t.viewer,
            this.viewport = t.viewport,
            this.debugGridColor = typeof t.debugGridColor == "string" ? [t.debugGridColor] : t.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor,
            t.opacity && e.console.error("[Drawer] options.opacity is no longer accepted; set the opacity on the TiledImage instead"),
            this.useCanvas = e.supportsCanvas && (this.viewer ? this.viewer.useCanvas : !0),
            this.container = e.getElement(t.element),
            this.canvas = e.makeNeutralElement(this.useCanvas ? "canvas" : "div"),
            this.context = this.useCanvas ? this.canvas.getContext("2d") : null,
            this.sketchCanvas = null,
            this.sketchContext = null,
            this.element = this.container,
            this.container.dir = "ltr",
            this.useCanvas) {
                var o = this._calculateCanvasSize();
                this.canvas.width = o.x,
                this.canvas.height = o.y
            }
            this.canvas.style.width = "100%",
            this.canvas.style.height = "100%",
            this.canvas.style.position = "absolute",
            e.setElementOpacity(this.canvas, this.opacity, !0),
            e.setElementPointerEventsNone(this.canvas),
            e.setElementTouchActionNone(this.canvas),
            this.container.style.textAlign = "left",
            this.container.appendChild(this.canvas),
            this._imageSmoothingEnabled = !0
        }
        ,
        e.Drawer.prototype = {
            addOverlay: function(t, i, o, h) {
                return e.console.error("drawer.addOverlay is deprecated. Use viewer.addOverlay instead."),
                this.viewer.addOverlay(t, i, o, h),
                this
            },
            updateOverlay: function(t, i, o) {
                return e.console.error("drawer.updateOverlay is deprecated. Use viewer.updateOverlay instead."),
                this.viewer.updateOverlay(t, i, o),
                this
            },
            removeOverlay: function(t) {
                return e.console.error("drawer.removeOverlay is deprecated. Use viewer.removeOverlay instead."),
                this.viewer.removeOverlay(t),
                this
            },
            clearOverlays: function() {
                return e.console.error("drawer.clearOverlays is deprecated. Use viewer.clearOverlays instead."),
                this.viewer.clearOverlays(),
                this
            },
            viewportCoordToDrawerCoord: function(t) {
                var i = this.viewport.pixelFromPointNoRotate(t, !0);
                return new e.Point(i.x * e.pixelDensityRatio,i.y * e.pixelDensityRatio)
            },
            clipWithPolygons: function(t, i) {
                if (this.useCanvas) {
                    var o = this._getContext(i);
                    o.beginPath(),
                    t.forEach(function(h) {
                        h.forEach(function(n, r) {
                            o[r === 0 ? "moveTo" : "lineTo"](n.x, n.y)
                        })
                    }),
                    o.clip()
                }
            },
            setOpacity: function(t) {
                e.console.error("drawer.setOpacity is deprecated. Use tiledImage.setOpacity instead.");
                for (var i = this.viewer.world, o = 0; o < i.getItemCount(); o++)
                    i.getItemAt(o).setOpacity(t);
                return this
            },
            getOpacity: function() {
                e.console.error("drawer.getOpacity is deprecated. Use tiledImage.getOpacity instead.");
                for (var t = this.viewer.world, i = 0, o = 0; o < t.getItemCount(); o++) {
                    var h = t.getItemAt(o).getOpacity();
                    h > i && (i = h)
                }
                return i
            },
            needsUpdate: function() {
                return e.console.error("[Drawer.needsUpdate] this function is deprecated. Use World.needsDraw instead."),
                this.viewer.world.needsDraw()
            },
            numTilesLoaded: function() {
                return e.console.error("[Drawer.numTilesLoaded] this function is deprecated. Use TileCache.numTilesLoaded instead."),
                this.viewer.tileCache.numTilesLoaded()
            },
            reset: function() {
                return e.console.error("[Drawer.reset] this function is deprecated. Use World.resetItems instead."),
                this.viewer.world.resetItems(),
                this
            },
            update: function() {
                return e.console.error("[Drawer.update] this function is deprecated. Use Drawer.clear and World.draw instead."),
                this.clear(),
                this.viewer.world.draw(),
                this
            },
            canRotate: function() {
                return this.useCanvas
            },
            destroy: function() {
                this.canvas.width = 1,
                this.canvas.height = 1,
                this.sketchCanvas = null,
                this.sketchContext = null
            },
            clear: function() {
                if (this.canvas.innerHTML = "",
                this.useCanvas) {
                    var t = this._calculateCanvasSize();
                    if ((this.canvas.width !== t.x || this.canvas.height !== t.y) && (this.canvas.width = t.x,
                    this.canvas.height = t.y,
                    this._updateImageSmoothingEnabled(this.context),
                    this.sketchCanvas !== null)) {
                        var i = this._calculateSketchCanvasSize();
                        this.sketchCanvas.width = i.x,
                        this.sketchCanvas.height = i.y,
                        this._updateImageSmoothingEnabled(this.sketchContext)
                    }
                    this._clear()
                }
            },
            _clear: function(t, i) {
                if (this.useCanvas) {
                    var o = this._getContext(t);
                    if (i)
                        o.clearRect(i.x, i.y, i.width, i.height);
                    else {
                        var h = o.canvas;
                        o.clearRect(0, 0, h.width, h.height)
                    }
                }
            },
            viewportToDrawerRectangle: function(t) {
                var i = this.viewport.pixelFromPointNoRotate(t.getTopLeft(), !0)
                  , o = this.viewport.deltaPixelsFromPointsNoRotate(t.getSize(), !0);
                return new e.Rect(i.x * e.pixelDensityRatio,i.y * e.pixelDensityRatio,o.x * e.pixelDensityRatio,o.y * e.pixelDensityRatio)
            },
            drawTile: function(t, i, o, h, n, r, s) {
                if (e.console.assert(t, "[Drawer.drawTile] tile is required"),
                e.console.assert(i, "[Drawer.drawTile] drawingHandler is required"),
                this.useCanvas) {
                    var l = this._getContext(o);
                    h = h || 1,
                    t.drawCanvas(l, i, h, n, r, s)
                } else
                    t.drawHTML(this.canvas)
            },
            _getContext: function(t) {
                var i = this.context;
                if (t) {
                    if (this.sketchCanvas === null) {
                        this.sketchCanvas = document.createElement("canvas");
                        var o = this._calculateSketchCanvasSize();
                        if (this.sketchCanvas.width = o.x,
                        this.sketchCanvas.height = o.y,
                        this.sketchContext = this.sketchCanvas.getContext("2d"),
                        this.viewport.getRotation() === 0) {
                            var h = this;
                            this.viewer.addHandler("rotate", function n() {
                                if (h.viewport.getRotation() !== 0) {
                                    h.viewer.removeHandler("rotate", n);
                                    var r = h._calculateSketchCanvasSize();
                                    h.sketchCanvas.width = r.x,
                                    h.sketchCanvas.height = r.y
                                }
                            })
                        }
                        this._updateImageSmoothingEnabled(this.sketchContext)
                    }
                    i = this.sketchContext
                }
                return i
            },
            saveContext: function(t) {
                this.useCanvas && this._getContext(t).save()
            },
            restoreContext: function(t) {
                this.useCanvas && this._getContext(t).restore()
            },
            setClip: function(t, i) {
                if (this.useCanvas) {
                    var o = this._getContext(i);
                    o.beginPath(),
                    o.rect(t.x, t.y, t.width, t.height),
                    o.clip()
                }
            },
            drawRectangle: function(t, i, o) {
                if (this.useCanvas) {
                    var h = this._getContext(o);
                    h.save(),
                    h.fillStyle = i,
                    h.fillRect(t.x, t.y, t.width, t.height),
                    h.restore()
                }
            },
            blendSketch: function(t, i, o, h) {
                var n = t;
                if (e.isPlainObject(n) || (n = {
                    opacity: t,
                    scale: i,
                    translate: o,
                    compositeOperation: h
                }),
                !(!this.useCanvas || !this.sketchCanvas)) {
                    t = n.opacity,
                    h = n.compositeOperation;
                    var r = n.bounds;
                    if (this.context.save(),
                    this.context.globalAlpha = t,
                    h && (this.context.globalCompositeOperation = h),
                    r)
                        r.x < 0 && (r.width += r.x,
                        r.x = 0),
                        r.x + r.width > this.canvas.width && (r.width = this.canvas.width - r.x),
                        r.y < 0 && (r.height += r.y,
                        r.y = 0),
                        r.y + r.height > this.canvas.height && (r.height = this.canvas.height - r.y),
                        this.context.drawImage(this.sketchCanvas, r.x, r.y, r.width, r.height, r.x, r.y, r.width, r.height);
                    else {
                        i = n.scale || 1,
                        o = n.translate;
                        var s = o instanceof e.Point ? o : new e.Point(0,0)
                          , l = 0
                          , d = 0;
                        if (o) {
                            var f = this.sketchCanvas.width - this.canvas.width
                              , v = this.sketchCanvas.height - this.canvas.height;
                            l = Math.round(f / 2),
                            d = Math.round(v / 2)
                        }
                        this.context.drawImage(this.sketchCanvas, s.x - l * i, s.y - d * i, (this.canvas.width + 2 * l) * i, (this.canvas.height + 2 * d) * i, -l, -d, this.canvas.width + 2 * l, this.canvas.height + 2 * d)
                    }
                    this.context.restore()
                }
            },
            drawDebugInfo: function(t, i, o, h) {
                if (this.useCanvas) {
                    var n = this.viewer.world.getIndexOfItem(h) % this.debugGridColor.length
                      , r = this.context;
                    r.save(),
                    r.lineWidth = 2 * e.pixelDensityRatio,
                    r.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial",
                    r.strokeStyle = this.debugGridColor[n],
                    r.fillStyle = this.debugGridColor[n],
                    this.viewport.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
                        degrees: this.viewport.getRotation(!0)
                    }),
                    h.getRotation(!0) % 360 !== 0 && this._offsetForRotation({
                        degrees: h.getRotation(!0),
                        point: h.viewport.pixelFromPointNoRotate(h._getRotationPoint(!0), !0)
                    }),
                    h.viewport.getRotation(!0) % 360 === 0 && h.getRotation(!0) % 360 === 0 && h._drawer.viewer.viewport.getFlip() && h._drawer._flip(),
                    r.strokeRect(t.position.x * e.pixelDensityRatio, t.position.y * e.pixelDensityRatio, t.size.x * e.pixelDensityRatio, t.size.y * e.pixelDensityRatio);
                    var s = (t.position.x + t.size.x / 2) * e.pixelDensityRatio
                      , l = (t.position.y + t.size.y / 2) * e.pixelDensityRatio;
                    r.translate(s, l),
                    r.rotate(Math.PI / 180 * -this.viewport.getRotation(!0)),
                    r.translate(-s, -l),
                    t.x === 0 && t.y === 0 && (r.fillText("Zoom: " + this.viewport.getZoom(), t.position.x * e.pixelDensityRatio, (t.position.y - 30) * e.pixelDensityRatio),
                    r.fillText("Pan: " + this.viewport.getBounds().toString(), t.position.x * e.pixelDensityRatio, (t.position.y - 20) * e.pixelDensityRatio)),
                    r.fillText("Level: " + t.level, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 20) * e.pixelDensityRatio),
                    r.fillText("Column: " + t.x, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 30) * e.pixelDensityRatio),
                    r.fillText("Row: " + t.y, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 40) * e.pixelDensityRatio),
                    r.fillText("Order: " + o + " of " + i, (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 50) * e.pixelDensityRatio),
                    r.fillText("Size: " + t.size.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 60) * e.pixelDensityRatio),
                    r.fillText("Position: " + t.position.toString(), (t.position.x + 10) * e.pixelDensityRatio, (t.position.y + 70) * e.pixelDensityRatio),
                    this.viewport.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(),
                    h.getRotation(!0) % 360 !== 0 && this._restoreRotationChanges(),
                    h.viewport.getRotation(!0) % 360 === 0 && h.getRotation(!0) % 360 === 0 && h._drawer.viewer.viewport.getFlip() && h._drawer._flip(),
                    r.restore()
                }
            },
            debugRect: function(t) {
                if (this.useCanvas) {
                    var i = this.context;
                    i.save(),
                    i.lineWidth = 2 * e.pixelDensityRatio,
                    i.strokeStyle = this.debugGridColor[0],
                    i.fillStyle = this.debugGridColor[0],
                    i.strokeRect(t.x * e.pixelDensityRatio, t.y * e.pixelDensityRatio, t.width * e.pixelDensityRatio, t.height * e.pixelDensityRatio),
                    i.restore()
                }
            },
            setImageSmoothingEnabled: function(t) {
                this.useCanvas && (this._imageSmoothingEnabled = t,
                this._updateImageSmoothingEnabled(this.context),
                this.viewer.forceRedraw())
            },
            _updateImageSmoothingEnabled: function(t) {
                t.msImageSmoothingEnabled = this._imageSmoothingEnabled,
                t.imageSmoothingEnabled = this._imageSmoothingEnabled
            },
            getCanvasSize: function(t) {
                var i = this._getContext(t).canvas;
                return new e.Point(i.width,i.height)
            },
            getCanvasCenter: function() {
                return new e.Point(this.canvas.width / 2,this.canvas.height / 2)
            },
            _offsetForRotation: function(t) {
                var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter()
                  , o = this._getContext(t.useSketch);
                o.save(),
                o.translate(i.x, i.y),
                this.viewer.viewport.flipped ? (o.rotate(Math.PI / 180 * -t.degrees),
                o.scale(-1, 1)) : o.rotate(Math.PI / 180 * t.degrees),
                o.translate(-i.x, -i.y)
            },
            _flip: function(t) {
                t = t || {};
                var i = t.point ? t.point.times(e.pixelDensityRatio) : this.getCanvasCenter()
                  , o = this._getContext(t.useSketch);
                o.translate(i.x, 0),
                o.scale(-1, 1),
                o.translate(-i.x, 0)
            },
            _restoreRotationChanges: function(t) {
                var i = this._getContext(t);
                i.restore()
            },
            _calculateCanvasSize: function() {
                var t = e.pixelDensityRatio
                  , i = this.viewport.getContainerSize();
                return {
                    x: Math.round(i.x * t),
                    y: Math.round(i.y * t)
                }
            },
            _calculateSketchCanvasSize: function() {
                var t = this._calculateCanvasSize();
                if (this.viewport.getRotation() === 0)
                    return t;
                var i = Math.ceil(Math.sqrt(t.x * t.x + t.y * t.y));
                return {
                    x: i,
                    y: i
                }
            }
        }
    }(T),
    function(e) {
        e.Viewport = function(t) {
            var i = arguments;
            i.length && i[0]instanceof e.Point && (t = {
                containerSize: i[0],
                contentSize: i[1],
                config: i[2]
            }),
            t.config && (e.extend(!0, t, t.config),
            delete t.config),
            this._margins = e.extend({
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }, t.margins || {}),
            delete t.margins,
            t.initialDegrees = t.degrees,
            delete t.degrees,
            e.extend(!0, this, {
                containerSize: null,
                contentSize: null,
                zoomPoint: null,
                rotationPivot: null,
                viewer: null,
                springStiffness: e.DEFAULT_SETTINGS.springStiffness,
                animationTime: e.DEFAULT_SETTINGS.animationTime,
                minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
                maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio,
                visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio,
                wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
                wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
                defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel,
                minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel,
                maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel,
                initialDegrees: e.DEFAULT_SETTINGS.degrees,
                flipped: e.DEFAULT_SETTINGS.flipped,
                homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer,
                silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings
            }, t),
            this._updateContainerInnerSize(),
            this.centerSpringX = new e.Spring({
                initial: 0,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this.centerSpringY = new e.Spring({
                initial: 0,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this.zoomSpring = new e.Spring({
                exponential: !0,
                initial: 1,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this.degreesSpring = new e.Spring({
                initial: t.initialDegrees,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this._oldCenterX = this.centerSpringX.current.value,
            this._oldCenterY = this.centerSpringY.current.value,
            this._oldZoom = this.zoomSpring.current.value,
            this._oldDegrees = this.degreesSpring.current.value,
            this._setContentBounds(new e.Rect(0,0,1,1), 1),
            this.goHome(!0),
            this.update()
        }
        ,
        e.Viewport.prototype = {
            get degrees() {
                return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."),
                this.getRotation()
            },
            set degrees(t) {
                e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."),
                this.rotateTo(t)
            },
            resetContentSize: function(t) {
                return e.console.assert(t, "[Viewport.resetContentSize] contentSize is required"),
                e.console.assert(t instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"),
                e.console.assert(t.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"),
                e.console.assert(t.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"),
                this._setContentBounds(new e.Rect(0,0,1,t.y / t.x), t.x),
                this
            },
            setHomeBounds: function(t, i) {
                e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."),
                this._setContentBounds(t, i)
            },
            _setContentBounds: function(t, i) {
                e.console.assert(t, "[Viewport._setContentBounds] bounds is required"),
                e.console.assert(t instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"),
                e.console.assert(t.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"),
                e.console.assert(t.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"),
                this._contentBoundsNoRotate = t.clone(),
                this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(i),
                this._contentBounds = t.rotate(this.getRotation()).getBoundingBox(),
                this._contentSize = this._contentBounds.getSize().times(i),
                this._contentAspectRatio = this._contentSize.x / this._contentSize.y,
                this.viewer && this.viewer.raiseEvent("reset-size", {
                    contentSize: this._contentSizeNoRotate.clone(),
                    contentFactor: i,
                    homeBounds: this._contentBoundsNoRotate.clone(),
                    contentBounds: this._contentBounds.clone()
                })
            },
            getHomeZoom: function() {
                if (this.defaultZoomLevel)
                    return this.defaultZoomLevel;
                var t = this._contentAspectRatio / this.getAspectRatio(), i;
                return this.homeFillsViewer ? i = t >= 1 ? t : 1 : i = t >= 1 ? 1 : t,
                i / this._contentBounds.width
            },
            getHomeBounds: function() {
                return this.getHomeBoundsNoRotate().rotate(-this.getRotation())
            },
            getHomeBoundsNoRotate: function() {
                var t = this._contentBounds.getCenter()
                  , i = 1 / this.getHomeZoom()
                  , o = i / this.getAspectRatio();
                return new e.Rect(t.x - i / 2,t.y - o / 2,i,o)
            },
            goHome: function(t) {
                return this.viewer && this.viewer.raiseEvent("home", {
                    immediately: t
                }),
                this.fitBounds(this.getHomeBounds(), t)
            },
            getMinZoom: function() {
                var t = this.getHomeZoom()
                  , i = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * t;
                return i
            },
            getMaxZoom: function() {
                var t = this.maxZoomLevel;
                return t || (t = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x,
                t /= this._contentBounds.width),
                Math.max(t, this.getHomeZoom())
            },
            getAspectRatio: function() {
                return this._containerInnerSize.x / this._containerInnerSize.y
            },
            getContainerSize: function() {
                return new e.Point(this.containerSize.x,this.containerSize.y)
            },
            getMargins: function() {
                return e.extend({}, this._margins)
            },
            setMargins: function(t) {
                e.console.assert(e.type(t) === "object", "[Viewport.setMargins] margins must be an object"),
                this._margins = e.extend({
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }, t),
                this._updateContainerInnerSize(),
                this.viewer && this.viewer.forceRedraw()
            },
            getBounds: function(t) {
                return this.getBoundsNoRotate(t).rotate(-this.getRotation(t))
            },
            getBoundsNoRotate: function(t) {
                var i = this.getCenter(t)
                  , o = 1 / this.getZoom(t)
                  , h = o / this.getAspectRatio();
                return new e.Rect(i.x - o / 2,i.y - h / 2,o,h)
            },
            getBoundsWithMargins: function(t) {
                return this.getBoundsNoRotateWithMargins(t).rotate(-this.getRotation(t), this.getCenter(t))
            },
            getBoundsNoRotateWithMargins: function(t) {
                var i = this.getBoundsNoRotate(t)
                  , o = this._containerInnerSize.x * this.getZoom(t);
                return i.x -= this._margins.left / o,
                i.y -= this._margins.top / o,
                i.width += (this._margins.left + this._margins.right) / o,
                i.height += (this._margins.top + this._margins.bottom) / o,
                i
            },
            getCenter: function(t) {
                var i = new e.Point(this.centerSpringX.current.value,this.centerSpringY.current.value), o = new e.Point(this.centerSpringX.target.value,this.centerSpringY.target.value), h, n, r, s, l, d, f, v;
                return t ? i : this.zoomPoint ? (h = this.pixelFromPoint(this.zoomPoint, !0),
                n = this.getZoom(),
                r = 1 / n,
                s = r / this.getAspectRatio(),
                l = new e.Rect(i.x - r / 2,i.y - s / 2,r,s),
                d = this._pixelFromPoint(this.zoomPoint, l),
                f = d.minus(h).rotate(-this.getRotation(!0)),
                v = f.divide(this._containerInnerSize.x * n),
                o.plus(v)) : o
            },
            getZoom: function(t) {
                return t ? this.zoomSpring.current.value : this.zoomSpring.target.value
            },
            _applyZoomConstraints: function(t) {
                return Math.max(Math.min(t, this.getMaxZoom()), this.getMinZoom())
            },
            _applyBoundaryConstraints: function(t) {
                var i = this.viewportToViewerElementRectangle(t).getBoundingBox()
                  , o = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox()
                  , h = !1
                  , n = !1;
                if (!this.wrapHorizontal) {
                    var r = i.x + i.width, s = o.x + o.width, l, d, f;
                    i.width > o.width ? l = this.visibilityRatio * o.width : l = this.visibilityRatio * i.width,
                    d = o.x - r + l,
                    f = s - i.x - l,
                    l > o.width ? (i.x += (d + f) / 2,
                    h = !0) : f < 0 ? (i.x += f,
                    h = !0) : d > 0 && (i.x += d,
                    h = !0)
                }
                if (!this.wrapVertical) {
                    var v = i.y + i.height, y = o.y + o.height, x, w, S;
                    i.height > o.height ? x = this.visibilityRatio * o.height : x = this.visibilityRatio * i.height,
                    w = o.y - v + x,
                    S = y - i.y - x,
                    x > o.height ? (i.y += (w + S) / 2,
                    n = !0) : S < 0 ? (i.y += S,
                    n = !0) : w > 0 && (i.y += w,
                    n = !0)
                }
                var C = h || n
                  , D = C ? this.viewerElementToViewportRectangle(i) : t.clone();
                return D.xConstrained = h,
                D.yConstrained = n,
                D.constraintApplied = C,
                D
            },
            _raiseConstraintsEvent: function(t) {
                this.viewer && this.viewer.raiseEvent("constrain", {
                    immediately: t
                })
            },
            applyConstraints: function(t) {
                var i = this.getZoom()
                  , o = this._applyZoomConstraints(i);
                i !== o && this.zoomTo(o, this.zoomPoint, t);
                var h = this.getConstrainedBounds(!1);
                return h.constraintApplied && (this.fitBounds(h, t),
                this._raiseConstraintsEvent(t)),
                this
            },
            ensureVisible: function(t) {
                return this.applyConstraints(t)
            },
            _fitBounds: function(t, i) {
                i = i || {};
                var o = i.immediately || !1
                  , h = i.constraints || !1
                  , n = this.getAspectRatio()
                  , r = t.getCenter()
                  , s = new e.Rect(t.x,t.y,t.width,t.height,t.degrees + this.getRotation()).getBoundingBox();
                s.getAspectRatio() >= n ? s.height = s.width / n : s.width = s.height * n,
                s.x = r.x - s.width / 2,
                s.y = r.y - s.height / 2;
                var l = 1 / s.width;
                if (o)
                    return this.panTo(r, !0),
                    this.zoomTo(l, null, !0),
                    h && this.applyConstraints(!0),
                    this;
                var d = this.getCenter(!0)
                  , f = this.getZoom(!0);
                this.panTo(d, !0),
                this.zoomTo(f, null, !0);
                var v = this.getBounds()
                  , y = this.getZoom();
                if (y === 0 || Math.abs(l / y - 1) < 1e-8)
                    return this.zoomTo(l, null, !0),
                    this.panTo(r, o),
                    h && this.applyConstraints(!1),
                    this;
                if (h) {
                    this.panTo(r, !1),
                    l = this._applyZoomConstraints(l),
                    this.zoomTo(l, null, !1);
                    var x = this.getConstrainedBounds();
                    this.panTo(d, !0),
                    this.zoomTo(f, null, !0),
                    this.fitBounds(x)
                } else {
                    var w = s.rotate(-this.getRotation())
                      , S = w.getTopLeft().times(l).minus(v.getTopLeft().times(y)).divide(l - y);
                    this.zoomTo(l, S, o)
                }
                return this
            },
            fitBounds: function(t, i) {
                return this._fitBounds(t, {
                    immediately: i,
                    constraints: !1
                })
            },
            fitBoundsWithConstraints: function(t, i) {
                return this._fitBounds(t, {
                    immediately: i,
                    constraints: !0
                })
            },
            fitVertically: function(t) {
                var i = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2,this._contentBounds.y,0,this._contentBounds.height);
                return this.fitBounds(i, t)
            },
            fitHorizontally: function(t) {
                var i = new e.Rect(this._contentBounds.x,this._contentBounds.y + this._contentBounds.height / 2,this._contentBounds.width,0);
                return this.fitBounds(i, t)
            },
            getConstrainedBounds: function(t) {
                var i, o;
                return i = this.getBounds(t),
                o = this._applyBoundaryConstraints(i),
                o
            },
            panBy: function(t, i) {
                var o = new e.Point(this.centerSpringX.target.value,this.centerSpringY.target.value);
                return this.panTo(o.plus(t), i)
            },
            panTo: function(t, i) {
                return i ? (this.centerSpringX.resetTo(t.x),
                this.centerSpringY.resetTo(t.y)) : (this.centerSpringX.springTo(t.x),
                this.centerSpringY.springTo(t.y)),
                this.viewer && this.viewer.raiseEvent("pan", {
                    center: t,
                    immediately: i
                }),
                this
            },
            zoomBy: function(t, i, o) {
                return this.zoomTo(this.zoomSpring.target.value * t, i, o)
            },
            zoomTo: function(t, i, o) {
                var h = this;
                return this.zoomPoint = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null,
                o ? this._adjustCenterSpringsForZoomPoint(function() {
                    h.zoomSpring.resetTo(t)
                }) : this.zoomSpring.springTo(t),
                this.viewer && this.viewer.raiseEvent("zoom", {
                    zoom: t,
                    refPoint: i,
                    immediately: o
                }),
                this
            },
            setRotation: function(t, i) {
                return this.rotateTo(t, null, i)
            },
            getRotation: function(t) {
                return t ? this.degreesSpring.current.value : this.degreesSpring.target.value
            },
            setRotationWithPivot: function(t, i, o) {
                return this.rotateTo(t, i, o)
            },
            rotateTo: function(t, i, o) {
                if (!this.viewer || !this.viewer.drawer.canRotate())
                    return this;
                if (this.degreesSpring.target.value === t && this.degreesSpring.isAtTargetValue())
                    return this;
                if (this.rotationPivot = i instanceof e.Point && !isNaN(i.x) && !isNaN(i.y) ? i : null,
                o)
                    if (this.rotationPivot) {
                        var h = t - this._oldDegrees;
                        if (!h)
                            return this.rotationPivot = null,
                            this;
                        this._rotateAboutPivot(t)
                    } else
                        this.degreesSpring.resetTo(t);
                else {
                    var n = e.positiveModulo(this.degreesSpring.current.value, 360)
                      , r = e.positiveModulo(t, 360)
                      , s = r - n;
                    s > 180 ? r -= 360 : s < -180 && (r += 360);
                    var l = n - r;
                    this.degreesSpring.resetTo(t + l),
                    this.degreesSpring.springTo(t)
                }
                return this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()),
                this.viewer.forceRedraw(),
                this.viewer.raiseEvent("rotate", {
                    degrees: t,
                    immediately: !!o,
                    pivot: this.rotationPivot || this.getCenter()
                }),
                this
            },
            rotateBy: function(t, i, o) {
                return this.rotateTo(this.degreesSpring.target.value + t, i, o)
            },
            resize: function(t, i) {
                var o = this.getBoundsNoRotate(), h = o, n;
                this.containerSize.x = t.x,
                this.containerSize.y = t.y,
                this._updateContainerInnerSize(),
                i && (n = t.x / this.containerSize.x,
                h.width = o.width * n,
                h.height = h.width / this.getAspectRatio()),
                this.viewer && this.viewer.raiseEvent("resize", {
                    newContainerSize: t,
                    maintain: i
                });
                var r = this.fitBounds(h, !0);
                return this.viewer && this.viewer.raiseEvent("after-resize", {
                    newContainerSize: t,
                    maintain: i
                }),
                r
            },
            _updateContainerInnerSize: function() {
                this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)),Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)))
            },
            update: function() {
                var t = this;
                this._adjustCenterSpringsForZoomPoint(function() {
                    t.zoomSpring.update()
                }),
                this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null),
                this.centerSpringX.update(),
                this.centerSpringY.update(),
                this.rotationPivot ? this._rotateAboutPivot(!0) : this.degreesSpring.update();
                var i = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
                return this._oldCenterX = this.centerSpringX.current.value,
                this._oldCenterY = this.centerSpringY.current.value,
                this._oldZoom = this.zoomSpring.current.value,
                this._oldDegrees = this.degreesSpring.current.value,
                i
            },
            _rotateAboutPivot: function(t) {
                var i = t === !0
                  , o = this.rotationPivot.minus(this.getCenter());
                this.centerSpringX.shiftBy(o.x),
                this.centerSpringY.shiftBy(o.y),
                i ? this.degreesSpring.update() : this.degreesSpring.resetTo(t);
                var h = this.degreesSpring.current.value - this._oldDegrees
                  , n = o.rotate(h * -1).times(-1);
                this.centerSpringX.shiftBy(n.x),
                this.centerSpringY.shiftBy(n.y)
            },
            _adjustCenterSpringsForZoomPoint: function(t) {
                if (this.zoomPoint) {
                    var i = this.pixelFromPoint(this.zoomPoint, !0);
                    t();
                    var o = this.pixelFromPoint(this.zoomPoint, !0)
                      , h = o.minus(i)
                      , n = this.deltaPointsFromPixels(h, !0);
                    this.centerSpringX.shiftBy(n.x),
                    this.centerSpringY.shiftBy(n.y),
                    this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null)
                } else
                    t()
            },
            deltaPixelsFromPointsNoRotate: function(t, i) {
                return t.times(this._containerInnerSize.x * this.getZoom(i))
            },
            deltaPixelsFromPoints: function(t, i) {
                return this.deltaPixelsFromPointsNoRotate(t.rotate(this.getRotation(i)), i)
            },
            deltaPointsFromPixelsNoRotate: function(t, i) {
                return t.divide(this._containerInnerSize.x * this.getZoom(i))
            },
            deltaPointsFromPixels: function(t, i) {
                return this.deltaPointsFromPixelsNoRotate(t, i).rotate(-this.getRotation(i))
            },
            pixelFromPointNoRotate: function(t, i) {
                return this._pixelFromPointNoRotate(t, this.getBoundsNoRotate(i))
            },
            pixelFromPoint: function(t, i) {
                return this._pixelFromPoint(t, this.getBoundsNoRotate(i))
            },
            _pixelFromPointNoRotate: function(t, i) {
                return t.minus(i.getTopLeft()).times(this._containerInnerSize.x / i.width).plus(new e.Point(this._margins.left,this._margins.top))
            },
            _pixelFromPoint: function(t, i) {
                return this._pixelFromPointNoRotate(t.rotate(this.getRotation(!0), this.getCenter(!0)), i)
            },
            pointFromPixelNoRotate: function(t, i) {
                var o = this.getBoundsNoRotate(i);
                return t.minus(new e.Point(this._margins.left,this._margins.top)).divide(this._containerInnerSize.x / o.width).plus(o.getTopLeft())
            },
            pointFromPixel: function(t, i) {
                return this.pointFromPixelNoRotate(t, i).rotate(-this.getRotation(i), this.getCenter(i))
            },
            _viewportToImageDelta: function(t, i) {
                var o = this._contentBoundsNoRotate.width;
                return new e.Point(t * this._contentSizeNoRotate.x / o,i * this._contentSizeNoRotate.x / o)
            },
            viewportToImageCoordinates: function(t, i) {
                if (t instanceof e.Point)
                    return this.viewportToImageCoordinates(t.x, t.y);
                if (this.viewer) {
                    var o = this.viewer.world.getItemCount();
                    if (o > 1)
                        this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
                    else if (o === 1) {
                        var h = this.viewer.world.getItemAt(0);
                        return h.viewportToImageCoordinates(t, i, !0)
                    }
                }
                return this._viewportToImageDelta(t - this._contentBoundsNoRotate.x, i - this._contentBoundsNoRotate.y)
            },
            _imageToViewportDelta: function(t, i) {
                var o = this._contentBoundsNoRotate.width;
                return new e.Point(t / this._contentSizeNoRotate.x * o,i / this._contentSizeNoRotate.x * o)
            },
            imageToViewportCoordinates: function(t, i) {
                if (t instanceof e.Point)
                    return this.imageToViewportCoordinates(t.x, t.y);
                if (this.viewer) {
                    var o = this.viewer.world.getItemCount();
                    if (o > 1)
                        this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
                    else if (o === 1) {
                        var h = this.viewer.world.getItemAt(0);
                        return h.imageToViewportCoordinates(t, i, !0)
                    }
                }
                var n = this._imageToViewportDelta(t, i);
                return n.x += this._contentBoundsNoRotate.x,
                n.y += this._contentBoundsNoRotate.y,
                n
            },
            imageToViewportRectangle: function(t, i, o, h) {
                var n = t;
                if (n instanceof e.Rect || (n = new e.Rect(t,i,o,h)),
                this.viewer) {
                    var r = this.viewer.world.getItemCount();
                    if (r > 1)
                        this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
                    else if (r === 1) {
                        var s = this.viewer.world.getItemAt(0);
                        return s.imageToViewportRectangle(t, i, o, h, !0)
                    }
                }
                var l = this.imageToViewportCoordinates(n.x, n.y)
                  , d = this._imageToViewportDelta(n.width, n.height);
                return new e.Rect(l.x,l.y,d.x,d.y,n.degrees)
            },
            viewportToImageRectangle: function(t, i, o, h) {
                var n = t;
                if (n instanceof e.Rect || (n = new e.Rect(t,i,o,h)),
                this.viewer) {
                    var r = this.viewer.world.getItemCount();
                    if (r > 1)
                        this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
                    else if (r === 1) {
                        var s = this.viewer.world.getItemAt(0);
                        return s.viewportToImageRectangle(t, i, o, h, !0)
                    }
                }
                var l = this.viewportToImageCoordinates(n.x, n.y)
                  , d = this._viewportToImageDelta(n.width, n.height);
                return new e.Rect(l.x,l.y,d.x,d.y,n.degrees)
            },
            viewerElementToImageCoordinates: function(t) {
                var i = this.pointFromPixel(t, !0);
                return this.viewportToImageCoordinates(i)
            },
            imageToViewerElementCoordinates: function(t) {
                var i = this.imageToViewportCoordinates(t);
                return this.pixelFromPoint(i, !0)
            },
            windowToImageCoordinates: function(t) {
                e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
                var i = t.minus(e.getElementPosition(this.viewer.element));
                return this.viewerElementToImageCoordinates(i)
            },
            imageToWindowCoordinates: function(t) {
                e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");
                var i = this.imageToViewerElementCoordinates(t);
                return i.plus(e.getElementPosition(this.viewer.element))
            },
            viewerElementToViewportCoordinates: function(t) {
                return this.pointFromPixel(t, !0)
            },
            viewportToViewerElementCoordinates: function(t) {
                return this.pixelFromPoint(t, !0)
            },
            viewerElementToViewportRectangle: function(t) {
                return e.Rect.fromSummits(this.pointFromPixel(t.getTopLeft(), !0), this.pointFromPixel(t.getTopRight(), !0), this.pointFromPixel(t.getBottomLeft(), !0))
            },
            viewportToViewerElementRectangle: function(t) {
                return e.Rect.fromSummits(this.pixelFromPoint(t.getTopLeft(), !0), this.pixelFromPoint(t.getTopRight(), !0), this.pixelFromPoint(t.getBottomLeft(), !0))
            },
            windowToViewportCoordinates: function(t) {
                e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
                var i = t.minus(e.getElementPosition(this.viewer.element));
                return this.viewerElementToViewportCoordinates(i)
            },
            viewportToWindowCoordinates: function(t) {
                e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");
                var i = this.viewportToViewerElementCoordinates(t);
                return i.plus(e.getElementPosition(this.viewer.element))
            },
            viewportToImageZoom: function(t) {
                if (this.viewer) {
                    var i = this.viewer.world.getItemCount();
                    if (i > 1)
                        this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
                    else if (i === 1) {
                        var o = this.viewer.world.getItemAt(0);
                        return o.viewportToImageZoom(t)
                    }
                }
                var h = this._contentSizeNoRotate.x
                  , n = this._containerInnerSize.x
                  , r = this._contentBoundsNoRotate.width
                  , s = n / h * r;
                return t * s
            },
            imageToViewportZoom: function(t) {
                if (this.viewer) {
                    var i = this.viewer.world.getItemCount();
                    if (i > 1)
                        this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image.");
                    else if (i === 1) {
                        var o = this.viewer.world.getItemAt(0);
                        return o.imageToViewportZoom(t)
                    }
                }
                var h = this._contentSizeNoRotate.x
                  , n = this._containerInnerSize.x
                  , r = this._contentBoundsNoRotate.width
                  , s = h / n / r;
                return t * s
            },
            toggleFlip: function() {
                return this.setFlip(!this.getFlip()),
                this
            },
            getFlip: function() {
                return this.flipped
            },
            setFlip: function(t) {
                return this.flipped === t ? this : (this.flipped = t,
                this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()),
                this.viewer.forceRedraw(),
                this.viewer.raiseEvent("flip", {
                    flipped: t
                }),
                this)
            }
        }
    }(T),
    function(e) {
        e.TiledImage = function(n) {
            var r = this;
            e.console.assert(n.tileCache, "[TiledImage] options.tileCache is required"),
            e.console.assert(n.drawer, "[TiledImage] options.drawer is required"),
            e.console.assert(n.viewer, "[TiledImage] options.viewer is required"),
            e.console.assert(n.imageLoader, "[TiledImage] options.imageLoader is required"),
            e.console.assert(n.source, "[TiledImage] options.source is required"),
            e.console.assert(!n.clip || n.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"),
            e.EventSource.call(this),
            this._tileCache = n.tileCache,
            delete n.tileCache,
            this._drawer = n.drawer,
            delete n.drawer,
            this._imageLoader = n.imageLoader,
            delete n.imageLoader,
            n.clip instanceof e.Rect && (this._clip = n.clip.clone()),
            delete n.clip;
            var s = n.x || 0;
            delete n.x;
            var l = n.y || 0;
            delete n.y,
            this.normHeight = n.source.dimensions.y / n.source.dimensions.x,
            this.contentAspectX = n.source.dimensions.x / n.source.dimensions.y;
            var d = 1;
            n.width ? (d = n.width,
            delete n.width,
            n.height && (e.console.error("specifying both width and height to a tiledImage is not supported"),
            delete n.height)) : n.height && (d = n.height / this.normHeight,
            delete n.height);
            var f = n.fitBounds;
            delete n.fitBounds;
            var v = n.fitBoundsPlacement || T.Placement.CENTER;
            delete n.fitBoundsPlacement;
            var y = n.degrees || 0;
            delete n.degrees;
            var x = n.ajaxHeaders;
            delete n.ajaxHeaders,
            e.extend(!0, this, {
                viewer: null,
                tilesMatrix: {},
                coverage: {},
                loadingCoverage: {},
                lastDrawn: [],
                lastResetTime: 0,
                _midDraw: !1,
                _needsDraw: !0,
                _hasOpaqueTile: !1,
                _tilesLoading: 0,
                springStiffness: e.DEFAULT_SETTINGS.springStiffness,
                animationTime: e.DEFAULT_SETTINGS.animationTime,
                minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio,
                wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal,
                wrapVertical: e.DEFAULT_SETTINGS.wrapVertical,
                immediateRender: e.DEFAULT_SETTINGS.immediateRender,
                blendTime: e.DEFAULT_SETTINGS.blendTime,
                alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend,
                minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio,
                smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom,
                iOSDevice: e.DEFAULT_SETTINGS.iOSDevice,
                debugMode: e.DEFAULT_SETTINGS.debugMode,
                crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy,
                ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials,
                placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle,
                opacity: e.DEFAULT_SETTINGS.opacity,
                preload: e.DEFAULT_SETTINGS.preload,
                compositeOperation: e.DEFAULT_SETTINGS.compositeOperation,
                subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency
            }, n),
            this._preload = this.preload,
            delete this.preload,
            this._fullyLoaded = !1,
            this._xSpring = new e.Spring({
                initial: s,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this._ySpring = new e.Spring({
                initial: l,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this._scaleSpring = new e.Spring({
                initial: d,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this._degreesSpring = new e.Spring({
                initial: y,
                springStiffness: this.springStiffness,
                animationTime: this.animationTime
            }),
            this._updateForScale(),
            f && this.fitBounds(f, v, !0),
            this._drawingHandler = function(w) {
                r.viewer.raiseEvent("tile-drawing", e.extend({
                    tiledImage: r
                }, w))
            }
            ,
            this._ownAjaxHeaders = {},
            this.setAjaxHeaders(x, !1)
        }
        ,
        e.extend(e.TiledImage.prototype, e.EventSource.prototype, {
            needsDraw: function() {
                return this._needsDraw
            },
            getFullyLoaded: function() {
                return this._fullyLoaded
            },
            _setFullyLoaded: function(n) {
                n !== this._fullyLoaded && (this._fullyLoaded = n,
                this.raiseEvent("fully-loaded-change", {
                    fullyLoaded: this._fullyLoaded
                }))
            },
            reset: function() {
                this._tileCache.clearTilesFor(this),
                this.lastResetTime = e.now(),
                this._needsDraw = !0
            },
            update: function() {
                var n = this._xSpring.update()
                  , r = this._ySpring.update()
                  , s = this._scaleSpring.update()
                  , l = this._degreesSpring.update();
                return n || r || s || l ? (this._updateForScale(),
                this._needsDraw = !0,
                !0) : !1
            },
            draw: function() {
                this.opacity !== 0 || this._preload ? (this._midDraw = !0,
                this._updateViewport(),
                this._midDraw = !1) : this._needsDraw = !1
            },
            destroy: function() {
                this.reset(),
                this.source.destroy && this.source.destroy()
            },
            getBounds: function(n) {
                return this.getBoundsNoRotate(n).rotate(this.getRotation(n), this._getRotationPoint(n))
            },
            getBoundsNoRotate: function(n) {
                return n ? new e.Rect(this._xSpring.current.value,this._ySpring.current.value,this._worldWidthCurrent,this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value,this._ySpring.target.value,this._worldWidthTarget,this._worldHeightTarget)
            },
            getWorldBounds: function() {
                return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"),
                this.getBounds()
            },
            getClippedBounds: function(n) {
                var r = this.getBoundsNoRotate(n);
                if (this._clip) {
                    var s = n ? this._worldWidthCurrent : this._worldWidthTarget
                      , l = s / this.source.dimensions.x
                      , d = this._clip.times(l);
                    r = new e.Rect(r.x + d.x,r.y + d.y,d.width,d.height)
                }
                return r.rotate(this.getRotation(n), this._getRotationPoint(n))
            },
            getTileBounds: function(n, r, s) {
                var l = this.source.getNumTiles(n)
                  , d = (l.x + r % l.x) % l.x
                  , f = (l.y + s % l.y) % l.y
                  , v = this.source.getTileBounds(n, d, f);
                return this.getFlip() && (v.x = 1 - v.x - v.width),
                v.x += (r - d) / l.x,
                v.y += this._worldHeightCurrent / this._worldWidthCurrent * ((s - f) / l.y),
                v
            },
            getContentSize: function() {
                return new e.Point(this.source.dimensions.x,this.source.dimensions.y)
            },
            getSizeInWindowCoordinates: function() {
                var n = this.imageToWindowCoordinates(new e.Point(0,0))
                  , r = this.imageToWindowCoordinates(this.getContentSize());
                return new e.Point(r.x - n.x,r.y - n.y)
            },
            _viewportToImageDelta: function(n, r, s) {
                var l = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
                return new e.Point(n * (this.source.dimensions.x / l),r * (this.source.dimensions.y * this.contentAspectX / l))
            },
            viewportToImageCoordinates: function(n, r, s) {
                var l;
                return n instanceof e.Point ? (s = r,
                l = n) : l = new e.Point(n,r),
                l = l.rotate(-this.getRotation(s), this._getRotationPoint(s)),
                s ? this._viewportToImageDelta(l.x - this._xSpring.current.value, l.y - this._ySpring.current.value) : this._viewportToImageDelta(l.x - this._xSpring.target.value, l.y - this._ySpring.target.value)
            },
            _imageToViewportDelta: function(n, r, s) {
                var l = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
                return new e.Point(n / this.source.dimensions.x * l,r / this.source.dimensions.y / this.contentAspectX * l)
            },
            imageToViewportCoordinates: function(n, r, s) {
                n instanceof e.Point && (s = r,
                r = n.y,
                n = n.x);
                var l = this._imageToViewportDelta(n, r);
                return s ? (l.x += this._xSpring.current.value,
                l.y += this._ySpring.current.value) : (l.x += this._xSpring.target.value,
                l.y += this._ySpring.target.value),
                l.rotate(this.getRotation(s), this._getRotationPoint(s))
            },
            imageToViewportRectangle: function(n, r, s, l, d) {
                var f = n;
                f instanceof e.Rect ? d = r : f = new e.Rect(n,r,s,l);
                var v = this.imageToViewportCoordinates(f.getTopLeft(), d)
                  , y = this._imageToViewportDelta(f.width, f.height, d);
                return new e.Rect(v.x,v.y,y.x,y.y,f.degrees + this.getRotation(d))
            },
            viewportToImageRectangle: function(n, r, s, l, d) {
                var f = n;
                n instanceof e.Rect ? d = r : f = new e.Rect(n,r,s,l);
                var v = this.viewportToImageCoordinates(f.getTopLeft(), d)
                  , y = this._viewportToImageDelta(f.width, f.height, d);
                return new e.Rect(v.x,v.y,y.x,y.y,f.degrees - this.getRotation(d))
            },
            viewerElementToImageCoordinates: function(n) {
                var r = this.viewport.pointFromPixel(n, !0);
                return this.viewportToImageCoordinates(r)
            },
            imageToViewerElementCoordinates: function(n) {
                var r = this.imageToViewportCoordinates(n);
                return this.viewport.pixelFromPoint(r, !0)
            },
            windowToImageCoordinates: function(n) {
                var r = n.minus(T.getElementPosition(this.viewer.element));
                return this.viewerElementToImageCoordinates(r)
            },
            imageToWindowCoordinates: function(n) {
                var r = this.imageToViewerElementCoordinates(n);
                return r.plus(T.getElementPosition(this.viewer.element))
            },
            _viewportToTiledImageRectangle: function(n) {
                var r = this._scaleSpring.current.value;
                return n = n.rotate(-this.getRotation(!0), this._getRotationPoint(!0)),
                new e.Rect((n.x - this._xSpring.current.value) / r,(n.y - this._ySpring.current.value) / r,n.width / r,n.height / r,n.degrees)
            },
            viewportToImageZoom: function(n) {
                var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
                return r * n
            },
            imageToViewportZoom: function(n) {
                var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
                return n / r
            },
            setPosition: function(n, r) {
                var s = this._xSpring.target.value === n.x && this._ySpring.target.value === n.y;
                if (r) {
                    if (s && this._xSpring.current.value === n.x && this._ySpring.current.value === n.y)
                        return;
                    this._xSpring.resetTo(n.x),
                    this._ySpring.resetTo(n.y),
                    this._needsDraw = !0
                } else {
                    if (s)
                        return;
                    this._xSpring.springTo(n.x),
                    this._ySpring.springTo(n.y),
                    this._needsDraw = !0
                }
                s || this._raiseBoundsChange()
            },
            setWidth: function(n, r) {
                this._setScale(n, r)
            },
            setHeight: function(n, r) {
                this._setScale(n / this.normHeight, r)
            },
            setCroppingPolygons: function(n) {
                var r = function(l) {
                    return l instanceof e.Point || typeof l.x == "number" && typeof l.y == "number"
                }
                  , s = function(l) {
                    return l.map(function(d) {
                        try {
                            if (r(d))
                                return {
                                    x: d.x,
                                    y: d.y
                                };
                            throw new Error
                        } catch (f) {
                            throw new Error("A Provided cropping polygon point is not supported")
                        }
                    })
                };
                try {
                    if (!e.isArray(n))
                        throw new Error("Provided cropping polygon is not an array");
                    this._croppingPolygons = n.map(function(l) {
                        return s(l)
                    })
                } catch (l) {
                    e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"),
                    e.console.error(l),
                    this._croppingPolygons = null
                }
            },
            resetCroppingPolygons: function() {
                this._croppingPolygons = null
            },
            fitBounds: function(n, r, s) {
                r = r || e.Placement.CENTER;
                var l = e.Placement.properties[r]
                  , d = this.contentAspectX
                  , f = 0
                  , v = 0
                  , y = 1
                  , x = 1;
                if (this._clip && (d = this._clip.getAspectRatio(),
                y = this._clip.width / this.source.dimensions.x,
                x = this._clip.height / this.source.dimensions.y,
                n.getAspectRatio() > d ? (f = this._clip.x / this._clip.height * n.height,
                v = this._clip.y / this._clip.height * n.height) : (f = this._clip.x / this._clip.width * n.width,
                v = this._clip.y / this._clip.width * n.width)),
                n.getAspectRatio() > d) {
                    var w = n.height / x
                      , S = 0;
                    l.isHorizontallyCentered ? S = (n.width - n.height * d) / 2 : l.isRight && (S = n.width - n.height * d),
                    this.setPosition(new e.Point(n.x - f + S,n.y - v), s),
                    this.setHeight(w, s)
                } else {
                    var C = n.width / y
                      , D = 0;
                    l.isVerticallyCentered ? D = (n.height - n.width / d) / 2 : l.isBottom && (D = n.height - n.width / d),
                    this.setPosition(new e.Point(n.x - f,n.y - v + D), s),
                    this.setWidth(C, s)
                }
            },
            getClip: function() {
                return this._clip ? this._clip.clone() : null
            },
            setClip: function(n) {
                e.console.assert(!n || n instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"),
                n instanceof e.Rect ? this._clip = n.clone() : this._clip = null,
                this._needsDraw = !0,
                this.raiseEvent("clip-change")
            },
            getFlip: function() {
                return !!this.flipped
            },
            setFlip: function(n) {
                this.flipped = !!n,
                this._needsDraw = !0,
                this._raiseBoundsChange()
            },
            getOpacity: function() {
                return this.opacity
            },
            setOpacity: function(n) {
                n !== this.opacity && (this.opacity = n,
                this._needsDraw = !0,
                this.raiseEvent("opacity-change", {
                    opacity: this.opacity
                }))
            },
            getPreload: function() {
                return this._preload
            },
            setPreload: function(n) {
                this._preload = !!n,
                this._needsDraw = !0
            },
            getRotation: function(n) {
                return n ? this._degreesSpring.current.value : this._degreesSpring.target.value
            },
            setRotation: function(n, r) {
                this._degreesSpring.target.value === n && this._degreesSpring.isAtTargetValue() || (r ? this._degreesSpring.resetTo(n) : this._degreesSpring.springTo(n),
                this._needsDraw = !0,
                this._raiseBoundsChange())
            },
            _getRotationPoint: function(n) {
                return this.getBoundsNoRotate(n).getCenter()
            },
            getCompositeOperation: function() {
                return this.compositeOperation
            },
            setCompositeOperation: function(n) {
                n !== this.compositeOperation && (this.compositeOperation = n,
                this._needsDraw = !0,
                this.raiseEvent("composite-operation-change", {
                    compositeOperation: this.compositeOperation
                }))
            },
            setAjaxHeaders: function(n, r) {
                if (n === null && (n = {}),
                !e.isPlainObject(n)) {
                    console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
                    return
                }
                this._ownAjaxHeaders = n,
                this._updateAjaxHeaders(r)
            },
            _updateAjaxHeaders: function(n) {
                if (n === void 0 && (n = !0),
                e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders,
                n) {
                    var r, s, l, d;
                    for (var f in this.tilesMatrix) {
                        r = this.source.getNumTiles(f);
                        for (var v in this.tilesMatrix[f]) {
                            s = (r.x + v % r.x) % r.x;
                            for (var y in this.tilesMatrix[f][v])
                                if (l = (r.y + y % r.y) % r.y,
                                d = this.tilesMatrix[f][v][y],
                                d.loadWithAjax = this.loadTilesWithAjax,
                                d.loadWithAjax) {
                                    var x = this.source.getTileAjaxHeaders(f, s, l);
                                    d.ajaxHeaders = e.extend({}, this.ajaxHeaders, x)
                                } else
                                    d.ajaxHeaders = null
                        }
                    }
                    for (var w = 0; w < this._imageLoader.jobQueue.length; w++) {
                        var S = this._imageLoader.jobQueue[w];
                        S.loadWithAjax = S.tile.loadWithAjax,
                        S.ajaxHeaders = S.tile.loadWithAjax ? S.tile.ajaxHeaders : null
                    }
                }
            },
            _setScale: function(n, r) {
                var s = this._scaleSpring.target.value === n;
                if (r) {
                    if (s && this._scaleSpring.current.value === n)
                        return;
                    this._scaleSpring.resetTo(n),
                    this._updateForScale(),
                    this._needsDraw = !0
                } else {
                    if (s)
                        return;
                    this._scaleSpring.springTo(n),
                    this._updateForScale(),
                    this._needsDraw = !0
                }
                s || this._raiseBoundsChange()
            },
            _updateForScale: function() {
                this._worldWidthTarget = this._scaleSpring.target.value,
                this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value,
                this._worldWidthCurrent = this._scaleSpring.current.value,
                this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value
            },
            _raiseBoundsChange: function() {
                this.raiseEvent("bounds-change")
            },
            _isBottomItem: function() {
                return this.viewer.world.getItemAt(0) === this
            },
            _getLevelsInterval: function() {
                var n = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2)))
                  , r = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), !0).x * this._scaleSpring.current.value
                  , s = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(r / this.minPixelRatio) / Math.log(2))));
                return s = Math.max(s, this.source.minLevel || 0),
                n = Math.min(n, s),
                {
                    lowestLevel: n,
                    highestLevel: s
                }
            },
            _updateViewport: function() {
                for (this._needsDraw = !1,
                this._tilesLoading = 0,
                this.loadingCoverage = {}; this.lastDrawn.length > 0; ) {
                    var n = this.lastDrawn.pop();
                    n.beingDrawn = !1
                }
                var r = this.viewport
                  , s = this._viewportToTiledImageRectangle(r.getBoundsWithMargins(!0));
                if (!this.wrapHorizontal && !this.wrapVertical) {
                    var l = this._viewportToTiledImageRectangle(this.getClippedBounds(!0));
                    if (s = s.intersection(l),
                    s === null)
                        return
                }
                for (var d = this._getLevelsInterval(), f = d.lowestLevel, v = d.highestLevel, y = null, x = !1, w = e.now(), S = v; S >= f; S--) {
                    var C = !1
                      , D = r.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(S), !0).x * this._scaleSpring.current.value;
                    if (S === f || !x && D >= this.minPixelRatio)
                        C = !0,
                        x = !0;
                    else if (!x)
                        continue;
                    var z = r.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(S), !1).x * this._scaleSpring.current.value
                      , U = r.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), !1).x * this._scaleSpring.current.value
                      , N = this.immediateRender ? 1 : U
                      , k = Math.min(1, (D - .5) / .5)
                      , A = N / Math.abs(N - z);
                    if (y = this._updateLevel(x, C, S, k, A, s, w, y),
                    this._providesCoverage(this.coverage, S))
                        break
                }
                this._drawTiles(this.lastDrawn),
                y && !y.context2D ? (this._loadTile(y, w),
                this._needsDraw = !0,
                this._setFullyLoaded(!1)) : this._setFullyLoaded(this._tilesLoading === 0)
            },
            _getCornerTiles: function(n, r, s) {
                var l, d;
                this.wrapHorizontal ? (l = e.positiveModulo(r.x, 1),
                d = e.positiveModulo(s.x, 1)) : (l = Math.max(0, r.x),
                d = Math.min(1, s.x));
                var f, v, y = 1 / this.source.aspectRatio;
                this.wrapVertical ? (f = e.positiveModulo(r.y, y),
                v = e.positiveModulo(s.y, y)) : (f = Math.max(0, r.y),
                v = Math.min(y, s.y));
                var x = this.source.getTileAtPoint(n, new e.Point(l,f))
                  , w = this.source.getTileAtPoint(n, new e.Point(d,v))
                  , S = this.source.getNumTiles(n);
                return this.wrapHorizontal && (x.x += S.x * Math.floor(r.x),
                w.x += S.x * Math.floor(s.x)),
                this.wrapVertical && (x.y += S.y * Math.floor(r.y / y),
                w.y += S.y * Math.floor(s.y / y)),
                {
                    topLeft: x,
                    bottomRight: w
                }
            },
            _updateLevel: function(n, r, s, l, d, f, v, y) {
                var x = f.getBoundingBox().getTopLeft()
                  , w = f.getBoundingBox().getBottomRight();
                this.viewer && this.viewer.raiseEvent("update-level", {
                    tiledImage: this,
                    havedrawn: n,
                    level: s,
                    opacity: l,
                    visibility: d,
                    drawArea: f,
                    topleft: x,
                    bottomright: w,
                    currenttime: v,
                    best: y
                }),
                this._resetCoverage(this.coverage, s),
                this._resetCoverage(this.loadingCoverage, s);
                var S = this._getCornerTiles(s, x, w)
                  , C = S.topLeft
                  , D = S.bottomRight
                  , z = this.source.getNumTiles(s)
                  , U = this.viewport.pixelFromPoint(this.viewport.getCenter());
                this.getFlip() && (D.x += 1,
                this.wrapHorizontal || (D.x = Math.min(D.x, z.x - 1)));
                for (var N = C.x; N <= D.x; N++)
                    for (var k = C.y; k <= D.y; k++) {
                        var A;
                        if (this.getFlip()) {
                            var G = (z.x + N % z.x) % z.x;
                            A = N + z.x - G - G - 1
                        } else
                            A = N;
                        f.intersection(this.getTileBounds(s, A, k)) !== null && (y = this._updateTile(r, n, A, k, s, l, d, U, z, v, y))
                    }
                return y
            },
            _updateTile: function(n, r, s, l, d, f, v, y, x, w, S) {
                var C = this._getTile(s, l, d, w, x, this._worldWidthCurrent, this._worldHeightCurrent)
                  , D = r;
                this.viewer && this.viewer.raiseEvent("update-tile", {
                    tiledImage: this,
                    tile: C
                }),
                this._setCoverage(this.coverage, d, s, l, !1);
                var z = C.loaded || C.loading || this._isCovered(this.loadingCoverage, d, s, l);
                if (this._setCoverage(this.loadingCoverage, d, s, l, z),
                !C.exists || (n && !D && (this._isCovered(this.coverage, d, s, l) ? this._setCoverage(this.coverage, d, s, l, !0) : D = !0),
                !D))
                    return S;
                if (this._positionTile(C, this.source.tileOverlap, this.viewport, y, v),
                !C.loaded)
                    if (C.context2D)
                        this._setTileLoaded(C);
                    else {
                        var U = this._tileCache.getImageRecord(C.cacheKey);
                        U && this._setTileLoaded(C, U.getData())
                    }
                if (C.loaded) {
                    var N = this._blendTile(C, s, l, d, f, w);
                    N && (this._needsDraw = !0)
                } else
                    C.loading ? this._tilesLoading++ : z || (S = this._compareTiles(S, C));
                return S
            },
            _getTile: function(n, r, s, l, d, f, v) {
                var y, x, w, S, C, D, z, U, N, k, A = this.tilesMatrix, G = this.source;
                return A[s] || (A[s] = {}),
                A[s][n] || (A[s][n] = {}),
                (!A[s][n][r] || !A[s][n][r].flipped != !this.flipped) && (y = (d.x + n % d.x) % d.x,
                x = (d.y + r % d.y) % d.y,
                w = this.getTileBounds(s, n, r),
                S = G.getTileBounds(s, y, x, !0),
                C = G.tileExists(s, y, x),
                D = G.getTileUrl(s, y, x),
                z = G.getTilePostData(s, y, x),
                this.loadTilesWithAjax ? (U = G.getTileAjaxHeaders(s, y, x),
                e.isPlainObject(this.ajaxHeaders) && (U = e.extend({}, this.ajaxHeaders, U))) : U = null,
                N = G.getContext2D ? G.getContext2D(s, y, x) : void 0,
                k = new e.Tile(s,n,r,w,C,D,N,this.loadTilesWithAjax,U,S,z,G.getTileHashKey(s, y, x, D, U, z)),
                this.getFlip() ? y === 0 && (k.isRightMost = !0) : y === d.x - 1 && (k.isRightMost = !0),
                x === d.y - 1 && (k.isBottomMost = !0),
                k.flipped = this.flipped,
                A[s][n][r] = k),
                k = A[s][n][r],
                k.lastTouchTime = l,
                k
            },
            _loadTile: function(n, r) {
                var s = this;
                n.loading = !0,
                this._imageLoader.addJob({
                    src: n.getUrl(),
                    tile: n,
                    source: this.source,
                    postData: n.postData,
                    loadWithAjax: n.loadWithAjax,
                    ajaxHeaders: n.ajaxHeaders,
                    crossOriginPolicy: this.crossOriginPolicy,
                    ajaxWithCredentials: this.ajaxWithCredentials,
                    callback: function(l, d, f) {
                        s._onTileLoad(n, r, l, d, f)
                    },
                    abort: function() {
                        n.loading = !1
                    }
                })
            },
            _onTileLoad: function(n, r, s, l, d) {
                if (s)
                    n.exists = !0;
                else {
                    e.console.error("Tile %s failed to load: %s - error: %s", n, n.getUrl(), l),
                    this.viewer.raiseEvent("tile-load-failed", {
                        tile: n,
                        tiledImage: this,
                        time: r,
                        message: l,
                        tileRequest: d
                    }),
                    n.loading = !1,
                    n.exists = !1;
                    return
                }
                if (r < this.lastResetTime) {
                    e.console.warn("Ignoring tile %s loaded before reset: %s", n, n.getUrl()),
                    n.loading = !1;
                    return
                }
                var f = this
                  , v = function() {
                    var y = f.source
                      , x = y.getClosestLevel();
                    f._setTileLoaded(n, s, x, d)
                };
                this._midDraw ? window.setTimeout(v, 1) : v()
            },
            _setTileLoaded: function(n, r, s, l) {
                var d = 0
                  , f = !1
                  , v = this;
                function y() {
                    return f && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."),
                    d++,
                    x
                }
                function x() {
                    d--,
                    d === 0 && (n.loading = !1,
                    n.loaded = !0,
                    n.hasTransparency = v.source.hasTransparency(n.context2D, n.getUrl(), n.ajaxHeaders, n.postData),
                    n.context2D || v._tileCache.cacheTile({
                        data: r,
                        tile: n,
                        cutoff: s,
                        tiledImage: v
                    }),
                    v._needsDraw = !0)
                }
                var w = y();
                this.viewer.raiseEvent("tile-loaded", {
                    tile: n,
                    tiledImage: this,
                    tileRequest: l,
                    get image() {
                        return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."),
                        r
                    },
                    data: r,
                    getCompletionCallback: y
                }),
                f = !0,
                w()
            },
            _positionTile: function(n, r, s, l, d) {
                var f = n.bounds.getTopLeft();
                f.x *= this._scaleSpring.current.value,
                f.y *= this._scaleSpring.current.value,
                f.x += this._xSpring.current.value,
                f.y += this._ySpring.current.value;
                var v = n.bounds.getSize();
                v.x *= this._scaleSpring.current.value,
                v.y *= this._scaleSpring.current.value;
                var y = s.pixelFromPointNoRotate(f, !0)
                  , x = s.pixelFromPointNoRotate(f, !1)
                  , w = s.deltaPixelsFromPointsNoRotate(v, !0)
                  , S = s.deltaPixelsFromPointsNoRotate(v, !1)
                  , C = x.plus(S.divide(2))
                  , D = l.squaredDistanceTo(C);
                r || (w = w.plus(new e.Point(1,1))),
                n.isRightMost && this.wrapHorizontal && (w.x += .75),
                n.isBottomMost && this.wrapVertical && (w.y += .75),
                n.position = y,
                n.size = w,
                n.squaredDistance = D,
                n.visibility = d
            },
            _blendTile: function(n, r, s, l, d, f) {
                var v = 1e3 * this.blendTime, y, x;
                if (n.blendStart || (n.blendStart = f),
                y = f - n.blendStart,
                x = v ? Math.min(1, y / v) : 1,
                this.alwaysBlend && (x *= d),
                n.opacity = x,
                this.lastDrawn.push(n),
                x === 1)
                    this._setCoverage(this.coverage, l, r, s, !0),
                    this._hasOpaqueTile = !0;
                else if (y < v)
                    return !0;
                return !1
            },
            _compareTiles: function(n, r) {
                return !n || r.visibility > n.visibility || r.visibility === n.visibility && r.squaredDistance < n.squaredDistance ? r : n
            },
            _drawTiles: function(n) {
                if (!(this.opacity === 0 || n.length === 0 && !this.placeholderFillStyle)) {
                    var r = n[0], s;
                    r && (s = this.opacity < 1 || this.compositeOperation && this.compositeOperation !== "source-over" || !this._isBottomItem() && this.source.hasTransparency(r.context2D, r.getUrl(), r.ajaxHeaders, r.postData));
                    var l, d, f = this.viewport.getZoom(!0), v = this.viewportToImageZoom(f);
                    n.length > 1 && v > this.smoothTileEdgesMinZoom && !this.iOSDevice && this.getRotation(!0) % 360 === 0 && e.supportsCanvas && this.viewer.useCanvas && (s = !0,
                    l = r.getScaleForEdgeSmoothing(),
                    d = r.getTranslationForEdgeSmoothing(l, this._drawer.getCanvasSize(!1), this._drawer.getCanvasSize(!0)));
                    var y;
                    s && (l || (y = this.viewport.viewportToViewerElementRectangle(this.getClippedBounds(!0)).getIntegerBoundingBox(),
                    this._drawer.viewer.viewport.getFlip() && (this.viewport.getRotation(!0) % 360 !== 0 || this.getRotation(!0) % 360 !== 0) && (y.x = this._drawer.viewer.container.clientWidth - (y.x + y.width)),
                    y = y.times(e.pixelDensityRatio)),
                    this._drawer._clear(!0, y)),
                    l || (this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
                        degrees: this.viewport.getRotation(!0),
                        useSketch: s
                    }),
                    this.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
                        degrees: this.getRotation(!0),
                        point: this.viewport.pixelFromPointNoRotate(this._getRotationPoint(!0), !0),
                        useSketch: s
                    }),
                    this.viewport.getRotation(!0) % 360 === 0 && this.getRotation(!0) % 360 === 0 && this._drawer.viewer.viewport.getFlip() && this._drawer._flip());
                    var x = !1;
                    if (this._clip) {
                        this._drawer.saveContext(s);
                        var w = this.imageToViewportRectangle(this._clip, !0);
                        w = w.rotate(-this.getRotation(!0), this._getRotationPoint(!0));
                        var S = this._drawer.viewportToDrawerRectangle(w);
                        l && (S = S.times(l)),
                        d && (S = S.translate(d)),
                        this._drawer.setClip(S, s),
                        x = !0
                    }
                    if (this._croppingPolygons) {
                        var C = this;
                        this._drawer.saveContext(s);
                        try {
                            var D = this._croppingPolygons.map(function(ne) {
                                return ne.map(function(X) {
                                    var K = C.imageToViewportCoordinates(X.x, X.y, !0).rotate(-C.getRotation(!0), C._getRotationPoint(!0))
                                      , se = C._drawer.viewportCoordToDrawerCoord(K);
                                    return l && (se = se.times(l)),
                                    d && (se = se.plus(d)),
                                    se
                                })
                            });
                            this._drawer.clipWithPolygons(D, s)
                        } catch (ne) {
                            e.console.error(ne)
                        }
                        x = !0
                    }
                    if (this.placeholderFillStyle && this._hasOpaqueTile === !1) {
                        var z = this._drawer.viewportToDrawerRectangle(this.getBounds(!0));
                        l && (z = z.times(l)),
                        d && (z = z.translate(d));
                        var U = null;
                        typeof this.placeholderFillStyle == "function" ? U = this.placeholderFillStyle(this, this._drawer.context) : U = this.placeholderFillStyle,
                        this._drawer.drawRectangle(z, U, s)
                    }
                    var N = h(this.subPixelRoundingForTransparency)
                      , k = !1;
                    if (N === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS)
                        k = !0;
                    else if (N === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
                        var A = this.viewer && this.viewer.isAnimating();
                        k = !A
                    }
                    for (var G = n.length - 1; G >= 0; G--)
                        r = n[G],
                        this._drawer.drawTile(r, this._drawingHandler, s, l, d, k, this.source),
                        r.beingDrawn = !0,
                        this.viewer && this.viewer.raiseEvent("tile-drawn", {
                            tiledImage: this,
                            tile: r
                        });
                    x && this._drawer.restoreContext(s),
                    l || (this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(s),
                    this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(s)),
                    s && (l && (this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
                        degrees: this.viewport.getRotation(!0),
                        useSketch: !1
                    }),
                    this.getRotation(!0) % 360 !== 0 && this._drawer._offsetForRotation({
                        degrees: this.getRotation(!0),
                        point: this.viewport.pixelFromPointNoRotate(this._getRotationPoint(!0), !0),
                        useSketch: !1
                    })),
                    this._drawer.blendSketch({
                        opacity: this.opacity,
                        scale: l,
                        translate: d,
                        compositeOperation: this.compositeOperation,
                        bounds: y
                    }),
                    l && (this.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(!1),
                    this.viewport.getRotation(!0) % 360 !== 0 && this._drawer._restoreRotationChanges(!1))),
                    l || this.viewport.getRotation(!0) % 360 === 0 && this.getRotation(!0) % 360 === 0 && this._drawer.viewer.viewport.getFlip() && this._drawer._flip(),
                    this._drawDebugInfo(n)
                }
            },
            _drawDebugInfo: function(n) {
                if (this.debugMode)
                    for (var r = n.length - 1; r >= 0; r--) {
                        var s = n[r];
                        try {
                            this._drawer.drawDebugInfo(s, n.length, r, this)
                        } catch (l) {
                            e.console.error(l)
                        }
                    }
            },
            _providesCoverage: function(n, r, s, l) {
                var d, f, v, y;
                if (!n[r])
                    return !1;
                if (s === void 0 || l === void 0) {
                    d = n[r];
                    for (v in d)
                        if (Object.prototype.hasOwnProperty.call(d, v)) {
                            f = d[v];
                            for (y in f)
                                if (Object.prototype.hasOwnProperty.call(f, y) && !f[y])
                                    return !1
                        }
                    return !0
                }
                return n[r][s] === void 0 || n[r][s][l] === void 0 || n[r][s][l] === !0
            },
            _isCovered: function(n, r, s, l) {
                return s === void 0 || l === void 0 ? this._providesCoverage(n, r + 1) : this._providesCoverage(n, r + 1, 2 * s, 2 * l) && this._providesCoverage(n, r + 1, 2 * s, 2 * l + 1) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * l) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * l + 1)
            },
            _setCoverage: function(n, r, s, l, d) {
                if (!n[r]) {
                    e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", r);
                    return
                }
                n[r][s] || (n[r][s] = {}),
                n[r][s][l] = d
            },
            _resetCoverage: function(n, r) {
                n[r] = {}
            }
        });
        var t = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        function i(n) {
            return n !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && n !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && n !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER
        }
        function o(n) {
            return i(n) ? t : n
        }
        function h(n) {
            if (typeof n == "number")
                return o(n);
            if (!n || !e.Browser)
                return t;
            var r = n[e.Browser.vendor];
            return i(r) && (r = n["*"]),
            o(r)
        }
    }(T),
    function(e) {
        var t = function(o) {
            e.console.assert(o, "[TileCache.cacheTile] options is required"),
            e.console.assert(o.tile, "[TileCache.cacheTile] options.tile is required"),
            e.console.assert(o.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"),
            this.tile = o.tile,
            this.tiledImage = o.tiledImage
        }
          , i = function(o) {
            e.console.assert(o, "[ImageRecord] options is required"),
            e.console.assert(o.data, "[ImageRecord] options.data is required"),
            this._tiles = [],
            o.create.apply(null, [this, o.data, o.ownerTile]),
            this._destroyImplementation = o.destroy.bind(null, this),
            this.getImage = o.getImage.bind(null, this),
            this.getData = o.getData.bind(null, this),
            this.getRenderedContext = o.getRenderedContext.bind(null, this)
        };
        i.prototype = {
            destroy: function() {
                this._destroyImplementation(),
                this._tiles = null
            },
            addTile: function(o) {
                e.console.assert(o, "[ImageRecord.addTile] tile is required"),
                this._tiles.push(o)
            },
            removeTile: function(o) {
                for (var h = 0; h < this._tiles.length; h++)
                    if (this._tiles[h] === o) {
                        this._tiles.splice(h, 1);
                        return
                    }
                e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", o)
            },
            getTileCount: function() {
                return this._tiles.length
            }
        },
        e.TileCache = function(o) {
            o = o || {},
            this._maxImageCacheCount = o.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount,
            this._tilesLoaded = [],
            this._imagesLoaded = [],
            this._imagesLoadedCount = 0
        }
        ,
        e.TileCache.prototype = {
            numTilesLoaded: function() {
                return this._tilesLoaded.length
            },
            cacheTile: function(o) {
                e.console.assert(o, "[TileCache.cacheTile] options is required"),
                e.console.assert(o.tile, "[TileCache.cacheTile] options.tile is required"),
                e.console.assert(o.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"),
                e.console.assert(o.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
                var h = o.cutoff || 0
                  , n = this._tilesLoaded.length
                  , r = this._imagesLoaded[o.tile.cacheKey];
                if (r || (o.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."),
                o.data = o.image),
                e.console.assert(o.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"),
                r = this._imagesLoaded[o.tile.cacheKey] = new i({
                    data: o.data,
                    ownerTile: o.tile,
                    create: o.tiledImage.source.createTileCache,
                    destroy: o.tiledImage.source.destroyTileCache,
                    getImage: o.tiledImage.source.getTileCacheDataAsImage,
                    getData: o.tiledImage.source.getTileCacheData,
                    getRenderedContext: o.tiledImage.source.getTileCacheDataAsContext2D
                }),
                this._imagesLoadedCount++),
                r.addTile(o.tile),
                o.tile.cacheImageRecord = r,
                this._imagesLoadedCount > this._maxImageCacheCount) {
                    for (var s = null, l = -1, d = null, f, v, y, x, w, S, C = this._tilesLoaded.length - 1; C >= 0; C--)
                        if (S = this._tilesLoaded[C],
                        f = S.tile,
                        !(f.level <= h || f.beingDrawn)) {
                            if (!s) {
                                s = f,
                                l = C,
                                d = S;
                                continue
                            }
                            x = f.lastTouchTime,
                            v = s.lastTouchTime,
                            w = f.level,
                            y = s.level,
                            (x < v || x === v && w > y) && (s = f,
                            l = C,
                            d = S)
                        }
                    s && l >= 0 && (this._unloadTile(d),
                    n = l)
                }
                this._tilesLoaded[n] = new t({
                    tile: o.tile,
                    tiledImage: o.tiledImage
                })
            },
            clearTilesFor: function(o) {
                e.console.assert(o, "[TileCache.clearTilesFor] tiledImage is required");
                for (var h, n = 0; n < this._tilesLoaded.length; ++n)
                    h = this._tilesLoaded[n],
                    h.tiledImage === o && (this._unloadTile(h),
                    this._tilesLoaded.splice(n, 1),
                    n--)
            },
            getImageRecord: function(o) {
                return e.console.assert(o, "[TileCache.getImageRecord] cacheKey is required"),
                this._imagesLoaded[o]
            },
            _unloadTile: function(o) {
                e.console.assert(o, "[TileCache._unloadTile] tileRecord is required");
                var h = o.tile
                  , n = o.tiledImage;
                h.unload(),
                h.cacheImageRecord = null;
                var r = this._imagesLoaded[h.cacheKey];
                r.removeTile(h),
                r.getTileCount() || (r.destroy(),
                delete this._imagesLoaded[h.cacheKey],
                this._imagesLoadedCount--),
                n.viewer.raiseEvent("tile-unloaded", {
                    tile: h,
                    tiledImage: n
                })
            }
        }
    }(T),
    function(e) {
        e.World = function(t) {
            var i = this;
            e.console.assert(t.viewer, "[World] options.viewer is required"),
            e.EventSource.call(this),
            this.viewer = t.viewer,
            this._items = [],
            this._needsDraw = !1,
            this._autoRefigureSizes = !0,
            this._needsSizesFigured = !1,
            this._delegatedFigureSizes = function(o) {
                i._autoRefigureSizes ? i._figureSizes() : i._needsSizesFigured = !0
            }
            ,
            this._figureSizes()
        }
        ,
        e.extend(e.World.prototype, e.EventSource.prototype, {
            addItem: function(t, i) {
                if (e.console.assert(t, "[World.addItem] item is required"),
                e.console.assert(t instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"),
                i = i || {},
                i.index !== void 0) {
                    var o = Math.max(0, Math.min(this._items.length, i.index));
                    this._items.splice(o, 0, t)
                } else
                    this._items.push(t);
                this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = !0,
                this._needsDraw = !0,
                t.addHandler("bounds-change", this._delegatedFigureSizes),
                t.addHandler("clip-change", this._delegatedFigureSizes),
                this.raiseEvent("add-item", {
                    item: t
                })
            },
            getItemAt: function(t) {
                return e.console.assert(t !== void 0, "[World.getItemAt] index is required"),
                this._items[t]
            },
            getIndexOfItem: function(t) {
                return e.console.assert(t, "[World.getIndexOfItem] item is required"),
                e.indexOf(this._items, t)
            },
            getItemCount: function() {
                return this._items.length
            },
            setItemIndex: function(t, i) {
                e.console.assert(t, "[World.setItemIndex] item is required"),
                e.console.assert(i !== void 0, "[World.setItemIndex] index is required");
                var o = this.getIndexOfItem(t);
                if (i >= this._items.length)
                    throw new Error("Index bigger than number of layers.");
                i === o || o === -1 || (this._items.splice(o, 1),
                this._items.splice(i, 0, t),
                this._needsDraw = !0,
                this.raiseEvent("item-index-change", {
                    item: t,
                    previousIndex: o,
                    newIndex: i
                }))
            },
            removeItem: function(t) {
                e.console.assert(t, "[World.removeItem] item is required");
                var i = e.indexOf(this._items, t);
                i !== -1 && (t.removeHandler("bounds-change", this._delegatedFigureSizes),
                t.removeHandler("clip-change", this._delegatedFigureSizes),
                t.destroy(),
                this._items.splice(i, 1),
                this._figureSizes(),
                this._needsDraw = !0,
                this._raiseRemoveItem(t))
            },
            removeAll: function() {
                this.viewer._cancelPendingImages();
                var t, i;
                for (i = 0; i < this._items.length; i++)
                    t = this._items[i],
                    t.removeHandler("bounds-change", this._delegatedFigureSizes),
                    t.removeHandler("clip-change", this._delegatedFigureSizes),
                    t.destroy();
                var o = this._items;
                for (this._items = [],
                this._figureSizes(),
                this._needsDraw = !0,
                i = 0; i < o.length; i++)
                    t = o[i],
                    this._raiseRemoveItem(t)
            },
            resetItems: function() {
                for (var t = 0; t < this._items.length; t++)
                    this._items[t].reset()
            },
            update: function() {
                for (var t = !1, i = 0; i < this._items.length; i++)
                    t = this._items[i].update() || t;
                return t
            },
            draw: function() {
                for (var t = 0; t < this._items.length; t++)
                    this._items[t].draw();
                this._needsDraw = !1
            },
            needsDraw: function() {
                for (var t = 0; t < this._items.length; t++)
                    if (this._items[t].needsDraw())
                        return !0;
                return this._needsDraw
            },
            getHomeBounds: function() {
                return this._homeBounds.clone()
            },
            getContentFactor: function() {
                return this._contentFactor
            },
            setAutoRefigureSizes: function(t) {
                this._autoRefigureSizes = t,
                t & this._needsSizesFigured && (this._figureSizes(),
                this._needsSizesFigured = !1)
            },
            arrange: function(t) {
                t = t || {};
                var i = t.immediately || !1, o = t.layout || e.DEFAULT_SETTINGS.collectionLayout, h = t.rows || e.DEFAULT_SETTINGS.collectionRows, n = t.columns || e.DEFAULT_SETTINGS.collectionColumns, r = t.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, s = t.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, l = r + s, d;
                !t.rows && n ? d = n : d = Math.ceil(this._items.length / h);
                var f = 0, v = 0, y, x, w, S, C;
                this.setAutoRefigureSizes(!1);
                for (var D = 0; D < this._items.length; D++)
                    D && D % d === 0 && (o === "horizontal" ? (v += l,
                    f = 0) : (f += l,
                    v = 0)),
                    y = this._items[D],
                    x = y.getBounds(),
                    x.width > x.height ? w = r : w = r * (x.width / x.height),
                    S = w * (x.height / x.width),
                    C = new e.Point(f + (r - w) / 2,v + (r - S) / 2),
                    y.setPosition(C, i),
                    y.setWidth(w, i),
                    o === "horizontal" ? f += l : v += l;
                this.setAutoRefigureSizes(!0)
            },
            _figureSizes: function() {
                var t = this._homeBounds ? this._homeBounds.clone() : null
                  , i = this._contentSize ? this._contentSize.clone() : null
                  , o = this._contentFactor || 0;
                if (!this._items.length)
                    this._homeBounds = new e.Rect(0,0,1,1),
                    this._contentSize = new e.Point(1,1),
                    this._contentFactor = 1;
                else {
                    var h = this._items[0]
                      , n = h.getBounds();
                    this._contentFactor = h.getContentSize().x / n.width;
                    for (var r = h.getClippedBounds().getBoundingBox(), s = r.x, l = r.y, d = r.x + r.width, f = r.y + r.height, v = 1; v < this._items.length; v++)
                        h = this._items[v],
                        n = h.getBounds(),
                        this._contentFactor = Math.max(this._contentFactor, h.getContentSize().x / n.width),
                        r = h.getClippedBounds().getBoundingBox(),
                        s = Math.min(s, r.x),
                        l = Math.min(l, r.y),
                        d = Math.max(d, r.x + r.width),
                        f = Math.max(f, r.y + r.height);
                    this._homeBounds = new e.Rect(s,l,d - s,f - l),
                    this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor,this._homeBounds.height * this._contentFactor)
                }
                (this._contentFactor !== o || !this._homeBounds.equals(t) || !this._contentSize.equals(i)) && this.raiseEvent("metrics-change", {})
            },
            _raiseRemoveItem: function(t) {
                this.raiseEvent("remove-item", {
                    item: t
                })
            }
        })
    }(T)
}
)(Ne);
var Ge = Ne.exports;
const ut = We(Ge)
  , Ve = /^(https*:\/\/[\w-\.]*)(\/.*\.(jpeg|jpg|png))\?*(.*)$/;
function je(_) {
    return {
        hex_chr_y11: "0134cdef".split(""),
        hg: _.xy11_web
    }
}
function qe(_, T) {
    let e = T.join("-");
    const t = _.x;
    return t && (e = ""),
    t.CK.toLowerCase() + e
}
function Ze() {
    return ( () => Le.xy11_web)()
}
function Xe(_) {
    const T = _.split("_");
    return [T[0], "fc", T[1]]
}
function Ke(_) {
    const {hg: T, hex_chr_y11: e} = je(_)
      , t = "lt_" + qe({
        x: _,
        hg: T
    }, e) + Ze();
    return Xe(t).join("")
}
const Ye = ["d", "o", "t"].join("").toUpperCase()
  , Le = {
    CK: Ye
};
Le.xy11_web = "net";
function Je(_) {
    if (!_)
        return _;
    let T = _.match(Ve);
    if (!T)
        return _;
    let e = T[1]
      , t = T[2]
      , i = T[4];
    i && (i = "".concat(i, "&"));
    let h = Math.floor(new Date().getTime() / 1e3)
      , n = 0
      , r = 0
      , s = "".concat(t, "-").concat(h, "-").concat(n, "-").concat(r, "-").concat(Ke(Le))
      , l = Be(s);
    return "".concat(e).concat(t, "?").concat(i, "auth_key=").concat(h, "-").concat(n, "-").concat(r, "-").concat(l)
}
function Ie(_, T) {
    let e = _[0]
      , t = _[1]
      , i = _[2]
      , o = _[3];
    e = $(e, t, i, o, T[0], 7, -680876936),
    o = $(o, e, t, i, T[1], 12, -389564586),
    i = $(i, o, e, t, T[2], 17, 606105819),
    t = $(t, i, o, e, T[3], 22, -1044525330),
    e = $(e, t, i, o, T[4], 7, -176418897),
    o = $(o, e, t, i, T[5], 12, 1200080426),
    i = $(i, o, e, t, T[6], 17, -1473231341),
    t = $(t, i, o, e, T[7], 22, -45705983),
    e = $(e, t, i, o, T[8], 7, 1770035416),
    o = $(o, e, t, i, T[9], 12, -1958414417),
    i = $(i, o, e, t, T[10], 17, -42063),
    t = $(t, i, o, e, T[11], 22, -1990404162),
    e = $(e, t, i, o, T[12], 7, 1804603682),
    o = $(o, e, t, i, T[13], 12, -40341101),
    i = $(i, o, e, t, T[14], 17, -1502002290),
    t = $(t, i, o, e, T[15], 22, 1236535329),
    e = ee(e, t, i, o, T[1], 5, -165796510),
    o = ee(o, e, t, i, T[6], 9, -1069501632),
    i = ee(i, o, e, t, T[11], 14, 643717713),
    t = ee(t, i, o, e, T[0], 20, -373897302),
    e = ee(e, t, i, o, T[5], 5, -701558691),
    o = ee(o, e, t, i, T[10], 9, 38016083),
    i = ee(i, o, e, t, T[15], 14, -660478335),
    t = ee(t, i, o, e, T[4], 20, -405537848),
    e = ee(e, t, i, o, T[9], 5, 568446438),
    o = ee(o, e, t, i, T[14], 9, -1019803690),
    i = ee(i, o, e, t, T[3], 14, -187363961),
    t = ee(t, i, o, e, T[8], 20, 1163531501),
    e = ee(e, t, i, o, T[13], 5, -1444681467),
    o = ee(o, e, t, i, T[2], 9, -51403784),
    i = ee(i, o, e, t, T[7], 14, 1735328473),
    t = ee(t, i, o, e, T[12], 20, -1926607734),
    e = te(e, t, i, o, T[5], 4, -378558),
    o = te(o, e, t, i, T[8], 11, -2022574463),
    i = te(i, o, e, t, T[11], 16, 1839030562),
    t = te(t, i, o, e, T[14], 23, -35309556),
    e = te(e, t, i, o, T[1], 4, -1530992060),
    o = te(o, e, t, i, T[4], 11, 1272893353),
    i = te(i, o, e, t, T[7], 16, -155497632),
    t = te(t, i, o, e, T[10], 23, -1094730640),
    e = te(e, t, i, o, T[13], 4, 681279174),
    o = te(o, e, t, i, T[0], 11, -358537222),
    i = te(i, o, e, t, T[3], 16, -722521979),
    t = te(t, i, o, e, T[6], 23, 76029189),
    e = te(e, t, i, o, T[9], 4, -640364487),
    o = te(o, e, t, i, T[12], 11, -421815835),
    i = te(i, o, e, t, T[15], 16, 530742520),
    t = te(t, i, o, e, T[2], 23, -995338651),
    e = ie(e, t, i, o, T[0], 6, -198630844),
    o = ie(o, e, t, i, T[7], 10, 1126891415),
    i = ie(i, o, e, t, T[14], 15, -1416354905),
    t = ie(t, i, o, e, T[5], 21, -57434055),
    e = ie(e, t, i, o, T[12], 6, 1700485571),
    o = ie(o, e, t, i, T[3], 10, -1894986606),
    i = ie(i, o, e, t, T[10], 15, -1051523),
    t = ie(t, i, o, e, T[1], 21, -2054922799),
    e = ie(e, t, i, o, T[8], 6, 1873313359),
    o = ie(o, e, t, i, T[15], 10, -30611744),
    i = ie(i, o, e, t, T[6], 15, -1560198380),
    t = ie(t, i, o, e, T[13], 21, 1309151649),
    e = ie(e, t, i, o, T[4], 6, -145523070),
    o = ie(o, e, t, i, T[11], 10, -1120210379),
    i = ie(i, o, e, t, T[2], 15, 718787259),
    t = ie(t, i, o, e, T[9], 21, -343485551),
    _[0] = he(e, _[0]),
    _[1] = he(t, _[1]),
    _[2] = he(i, _[2]),
    _[3] = he(o, _[3])
}
function Ce(_, T, e, t, i, o) {
    return T = he(he(T, _), he(t, o)),
    he(T << i | T >>> 32 - i, e)
}
function $(_, T, e, t, i, o, h) {
    return Ce(T & e | ~T & t, _, T, i, o, h)
}
function ee(_, T, e, t, i, o, h) {
    return Ce(T & t | e & ~t, _, T, i, o, h)
}
function te(_, T, e, t, i, o, h) {
    return Ce(T ^ e ^ t, _, T, i, o, h)
}
function ie(_, T, e, t, i, o, h) {
    return Ce(e ^ (T | ~t), _, T, i, o, h)
}
function Qe(_) {
    let T = _.length, e = [1732584193, -271733879, -1732584194, 271733878], t;
    for (t = 64; t <= _.length; t += 64)
        Ie(e, $e(_.substring(t - 64, t)));
    _ = _.substring(t - 64);
    let i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (t = 0; t < _.length; t++)
        i[t >> 2] |= _.charCodeAt(t) << (t % 4 << 3);
    if (i[t >> 2] |= 128 << (t % 4 << 3),
    t > 55)
        for (Ie(e, i),
        t = 0; t < 16; t++)
            i[t] = 0;
    return i[14] = T * 8,
    Ie(e, i),
    e
}
function $e(_) {
    let T = [], e;
    for (e = 0; e < 64; e += 4)
        T[e >> 2] = _.charCodeAt(e) + (_.charCodeAt(e + 1) << 8) + (_.charCodeAt(e + 2) << 16) + (_.charCodeAt(e + 3) << 24);
    return T
}
let Ae = "0123456789abcdef".split("");
function et(_) {
    let T = ""
      , e = 0;
    for (; e < 4; e++)
        T += Ae[_ >> e * 8 + 4 & 15] + Ae[_ >> e * 8 & 15];
    return T
}
function tt(_) {
    for (let T = 0; T < _.length; T++)
        _[T] = et(_[T]);
    return _.join("")
}
function Be(_) {
    return tt(Qe(_))
}
let he = function(_, T) {
    return _ + T & 4294967295
};
Be("hello") !== "5d41402abc4b2a76b9719d911017c592" && (he = function(_, T) {
    let e = (_ & 65535) + (T & 65535);
    return (_ >> 16) + (T >> 16) + (e >> 16) << 16 | e & 65535
}
);
const it = ["c", "a", "g", "_", "h", "o", "s", "t"].join("").toUpperCase()
  , ke = {};
ke[it] = "b49b4d8a45b8f098ba881d98abbb5c892f8b5c98";
const nt = /^(http.*\/\/[^\/]*)(\/.*\.(jpg|jpeg))\?*(.*)$/;
function rt(_) {
    let T = _.match(nt);
    if (!T)
        return _;
    let e = T[1]
      , t = T[2];
    T[3];
    let i = T[4]
      , o = ke.CAG_HOST
      , h = (Math.ceil(new Date().getTime() / 31536e6) * 31536e3).toString(16)
      , n = o + encodeURI(t) + h
      , r = Be(n);
    return [e, t, "?", i, "&sign=", r, "&t=", h].join("")
}
const st = "https://cag.ltfc.net"
  , ot = "https://cag-ac.ltfc.net";
function ct(_, T) {
    return T === "TILES_SOURCE_ALIYUN" ? Je(ot + (_ || "")) : rt(st + (_ || ""))
}
async function dt(_) {
    return de("/cag2.HDPicService/get", _)
}
async function ft(_) {
    return de("/cag2.HDPicService/getColl", _)
}
async function pt(_) {
    return de("/cag2.HDPicService/getHDPicOfColl", _)
}
async function gt(_) {
    return de("/cag2.HDPicService/listHDPSlice", {
        ..._,
        page: {
            skip: 0,
            limit: 999
        }
    })
}
async function mt(_) {
    return de("/cag2.HDPDetailService/getHdpDetail", _)
}
async function vt(_) {
    return de("/cag2.HDPicService/getWebDownloadImages", _)
}
async function yt(_) {
    return de("/cag2.HDPicService/getSingleDecryptDownloadImage", _)
}
async function wt(_) {
    return de("/cag2.HDPicService/delWebDownloadKey", _)
}
function Tt() {
    const _ = {
        requestType: J.TOUCH_SCREEN,
        message: "APP端已点击高清图屏幕"
    };
    Q("H5ToNative", _)
}
function xt() {
    let _ = {
        requestType: J.HIDE_MARK,
        message: "APP端隐藏标注"
    };
    Q("H5ToNative", _)
}
function St() {
    let _ = {
        requestType: J.SHOW_MARK,
        message: "APP端显示标注"
    };
    Q("H5ToNative", _)
}
function Et(_, T, e, t) {
    const i = {
        requestType: J.CHANGE_RESOURCE,
        message: "APP端已点击画册中的单张图",
        data: {
            src: "PIC",
            Id: _,
            index: T,
            renderSliceBtn: e,
            name: t || ""
        }
    };
    Q("H5ToNative", i)
}
function Pt(_) {
    const T = {
        requestType: J.SET_LOCK,
        message: "APP锁定高清 / 解除锁定高清图",
        data: {
            unLock: _
        }
    };
    Q("H5ToNative", T)
}
function _t() {
    let _ = {
        requestType: J.SHOW_NAV_PAGE,
        message: "APP端显示画集预览"
    };
    Q("H5ToNative", _)
}
function Ct(_, T) {
    let e = {
        requestType: J.COLLECT,
        message: "APP收藏资源",
        data: {
            id: _,
            src: T
        }
    };
    Q("H5ToNative", e)
}
function Rt(_, T, e) {
    let t = {
        requestType: J.SET_HDP_SLICE_MASK,
        message: "APP展示/隐藏画谱蒙板",
        data: {
            id: _,
            src: T,
            mask_status: e ? "show" : "hidden"
        }
    };
    Q("H5ToNative", t)
}
function bt(_, T, e) {
    let t = {
        requestType: J.DOWNLOAD_HDP,
        message: "APP下载资源",
        data: {
            id: _,
            src: T,
            screenshot: e
        }
    };
    Q("H5ToNative", t)
}
function Dt(_, T) {
    let e = {
        requestType: J.HDP_TOGGLE,
        message: "显示 / 隐藏注释操作按钮",
        data: {
            renderSliceBtn: _,
            hasPySize: T
        }
    };
    Q("H5ToNative", e)
}
function Ht(_, T) {
    let e = {
        requestType: J.RENDER_FONT_OVERLAYS,
        message: "显示 / 隐藏书法文字注释操作按钮",
        data: {
            render: _,
            hasPySize: T
        }
    };
    Q("H5ToNative", e)
}
function Ot(_) {
    let T = {
        requestType: J.SHOW_FONT_OVERLAYS,
        message: "显示 / 隐藏书法文字注释",
        data: {
            show: _
        }
    };
    Q("H5ToNative", T)
}
function It(_) {
    let T = {
        requestType: J.CALLBACK_START_BOUND,
        message: "回到历史比较位置",
        data: {
            status: _
        }
    };
    Q("H5ToNative", T)
}
function Lt(_) {
    let T = {
        requestType: J.SAVE_CUR_BOUND,
        message: "保存当前比较位置",
        data: {
            status: _
        }
    };
    Q("H5ToNative", T)
}
function Bt(_, T) {
    let e = {
        requestType: J.SET_COMPARE_LAYOUT,
        message: "切换比较图布局模式",
        data: {
            layout: _,
            status: T
        }
    };
    Q("H5ToNative", e)
}
function Ft(_, T, e) {
    let t = {
        requestType: J.SET_COMPARE_VIEW_SOURCE,
        message: "切换资源",
        data: {
            src: _,
            id: T,
            status: e
        }
    };
    Q("H5ToNative", t)
}
function zt(_, T) {
    let e = {
        requestType: J.VIEWPORT_BOUNDS_CHANGE,
        message: "位置发生变化",
        data: {
            status: T,
            id: _
        }
    };
    Q("H5ToNative", e)
}
function Mt(_, T) {
    let e = {
        requestType: J.GET_COMPARE_VIEWPORT_BOUNDS,
        message: "获取视图坐标",
        data: {
            firstViewBounds: _,
            secondViewBounds: T
        }
    };
    Q("H5ToNative", e)
}
export {Rt as A, ct as B, ut as O, Lt as a, It as b, zt as c, Bt as d, Ft as e, yt as f, vt as g, wt as h, dt as i, Mt as j, ft as k, mt as l, Ct as m, bt as n, Tt as o, St as p, xt as q, Dt as r, Et as s, _t as t, Ge as u, gt as v, Ht as w, Ot as x, Pt as y, pt as z};
