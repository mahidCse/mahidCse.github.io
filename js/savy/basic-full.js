! function(a) {
    "$:nomunge";

    function b(a) {
        return "string" == typeof a
    }

    function c(a) {
        var b = v.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(v.call(arguments)))
        }
    }

    function d(a) {
        return a.replace(r, "$2")
    }

    function e(a) {
        return a.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function f(c, d, e, f, g) {
        var h, k, m, n, o;
        return f !== i ? (m = e.match(c ? r : /^([^#?]*)\??([^#]*)(#?.*)/), o = m[3] || "", 2 === g && b(f) ? k = f.replace(c ? q : G, "") : (n = l(m[2]), f = b(f) ? l[c ? C : B](f) : f, k = 2 === g ? f : 1 === g ? a.extend({}, f, n) : a.extend({}, n, f), k = j(k), c && (k = k.replace(s, w))), h = m[1] + (c ? u : k || !m[1] ? "?" : "") + k + o) : h = d(e !== i ? e : location.href), h
    }

    function g(a, c, d) {
        return c === i || "boolean" == typeof c ? (d = c, c = x[a ? C : B]()) : c = b(c) ? c.replace(a ? q : G, "") : c, l(c, d)
    }

    function h(c, d, e, f) {
        return b(e) || "object" == typeof e || (f = e, e = d, d = i), this.each(function() {
            var b = a(this),
                g = d || p()[(this.nodeName || "").toLowerCase()] || "",
                h = g && b.attr(g) || "";
            b.attr(g, x[c](h, e, f))
        })
    }
    var i, j, k, l, m, n, o, p, q, r, s, t, u, v = Array.prototype.slice,
        w = decodeURIComponent,
        x = a.param,
        y = a.bbq = a.bbq || {},
        z = a.event.special,
        A = "hashchange",
        B = "querystring",
        C = "fragment",
        D = "elemUrlAttr",
        E = "href",
        F = "src",
        G = /^.*\?|#.*$/g,
        H = {};
    x[B] = c(f, 0, e), x[C] = k = c(f, 1, d), x.sorted = j = function(b, c) {
        var d = [],
            e = {};
        return a.each(x(b, c).split("&"), function(a, b) {
            var c = b.replace(/(?:%5B|=).*$/, ""),
                f = e[c];
            f || (f = e[c] = [], d.push(c)), f.push(b)
        }), a.map(d.sort(), function(a) {
            return e[a]
        }).join("&")
    }, k.noEscape = function(b) {
        b = b || "";
        var c = a.map(b.split(""), encodeURIComponent);
        s = new RegExp(c.join("|"), "g")
    }, k.noEscape(",/"), k.ajaxCrawlable = function(a) {
        return a !== i && (a ? (q = /^.*(?:#!|#)/, r = /^([^#]*)(?:#!|#)?(.*)$/, u = "#!") : (q = /^.*#/, r = /^([^#]*)#?(.*)$/, u = "#"), t = !!a), t
    }, k.ajaxCrawlable(0), a.deparam = l = function(b, c) {
        var d = {},
            e = {
                "true": !0,
                "false": !1,
                "null": null
            };
        return a.each(b.replace(/\+/g, " ").split("&"), function(b, f) {
            var g, h = f.split("="),
                j = w(h[0]),
                k = d,
                l = 0,
                m = j.split("]["),
                n = m.length - 1;
            if (/\[/.test(m[0]) && /\]$/.test(m[n]) ? (m[n] = m[n].replace(/\]$/, ""), m = m.shift().split("[").concat(m), n = m.length - 1) : n = 0, 2 === h.length)
                if (g = w(h[1]), c && (g = g && !isNaN(g) ? +g : "undefined" === g ? i : e[g] !== i ? e[g] : g), n)
                    for (; n >= l; l++) j = "" === m[l] ? k.length : m[l], k = k[j] = n > l ? k[j] || (m[l + 1] && isNaN(m[l + 1]) ? {} : []) : g;
                else a.isArray(d[j]) ? d[j].push(g) : d[j] = d[j] !== i ? [d[j], g] : g;
            else j && (d[j] = c ? i : "")
        }), d
    }, l[B] = c(g, 0), l[C] = m = c(g, 1), a[D] || (a[D] = function(b) {
        return a.extend(H, b)
    })({
        a: E,
        base: E,
        iframe: F,
        img: F,
        input: F,
        form: "action",
        link: E,
        script: F
    }), p = a[D], a.fn[B] = c(h, B), a.fn[C] = c(h, C), y.pushState = n = function(a, c) {
        b(a) && /^#/.test(a) && c === i && (c = 2);
        var d = a !== i,
            e = k(location.href, d ? a : {}, d ? c : 2);
        location.href = e
    }, y.getState = o = function(a, b) {
        return a === i || "boolean" == typeof a ? m(a) : m(b)[a]
    }, y.removeState = function(b) {
        var c = {};
        b !== i && (c = o(), a.each(a.isArray(b) ? b : arguments, function(a, b) {
            delete c[b]
        })), n(c, 2)
    }, z[A] = a.extend(z[A], {
        add: function(b) {
            function c(a) {
                var b = a[C] = k();
                a.getState = function(a, c) {
                    return a === i || "boolean" == typeof a ? l(b, a) : l(b, c)[a]
                }, d.apply(this, arguments)
            }
            var d;
            return a.isFunction(b) ? (d = b, c) : (d = b.handler, void(b.handler = c))
        }
    })
}(jQuery, this),
function(a, b, c) {
    "$:nomunge";

    function d(a) {
        return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var e, f = "hashchange",
        g = document,
        h = a.event.special,
        i = g.documentMode,
        j = "on" + f in b && (i === c || i > 7);
    a.fn[f] = function(a) {
        return a ? this.bind(f, a) : this.trigger(f)
    }, a.fn[f].delay = 50, h[f] = a.extend(h[f], {
        setup: function() {
            return j ? !1 : void a(e.start)
        },
        teardown: function() {
            return j ? !1 : void a(e.stop)
        }
    }), e = function() {
        function e() {
            var c = d(),
                g = n(k);
            c !== k ? (m(k = c, g), a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g), h = setTimeout(e, a.fn[f].delay)
        }
        var h, i = {},
            k = d(),
            l = function(a) {
                return a
            },
            m = l,
            n = l;
        return i.start = function() {
            h || e()
        }, i.stop = function() {
            h && clearTimeout(h), h = c
        }, b.navigator.userAgent.indexOf("MSIE ") > 0 && !j && function() {
            var b, c;
            i.start = function() {
                b || (c = a.fn[f].src, c = c && c + d(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    c || m(d()), e()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (b.document.title = g.title)
                    } catch (a) {}
                })
            }, i.stop = l, n = function() {
                return d(b.location.href)
            }, m = function(c, d) {
                var e = b.document,
                    h = a.fn[f].domain;
                c !== d && (e.title = g.title, e.open(), h && e.write('<script>document.domain="' + h + '"</script>'), e.close(), b.location.hash = c)
            }
        }(), i
    }()
}(jQuery, this),
function(a, b, c) {
    ! function(b) {
        var d = "function" == typeof define && define.amd,
            e = "https:" == c.location.protocol ? "https:" : "http:",
            f = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.html";
        d || a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + e + "//" + f + "%3E%3C/script%3E")), b()
    }(function() {
        var d, e = "mCustomScrollbar1",
            f = "mCS",
            g = ".mCustomScrollbar1",
            h = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: !0
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            i = 0,
            j = {},
            k = b.attachEvent && !b.addEventListener ? 1 : 0,
            l = !1,
            /* m = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], */
            n = {
                init: function(b) {
                    var b = a.extend(!0, {}, h, b),
                        c = o.call(this);
                    if (b.live) {
                        var d = b.liveSelector || this.selector || g,
                            e = a(d);
                        if ("off" === b.live) return void q(d);
                        j[d] = setTimeout(function() {
                            e.mCustomScrollbar1(b), "once" === b.live && e.length && q(d)
                        }, 500)
                    } else q(d);
                    return b.setWidth = b.set_width ? b.set_width : b.setWidth, b.setHeight = b.set_height ? b.set_height : b.setHeight, b.axis = b.horizontalScroll ? "x" : r(b.axis), b.scrollInertia = b.scrollInertia > 0 && b.scrollInertia < 17 ? 17 : b.scrollInertia, "object" != typeof b.mouseWheel && 1 == b.mouseWheel && (b.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount, b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta, b.scrollButtons.scrollType = s(b.scrollButtons.scrollType), p(b), a(c).each(function() {
                        var c = a(this);
                        if (!c.data(f)) {
                            c.data(f, {
                                idx: ++i,
                                opt: b,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: c.css("direction"),
                                cbOffsets: null,
                                trigger: null
                            });
                            var d = c.data(f),
                                e = d.opt,
                                g = c.data("mcs-axis"),
                                h = c.data("mcs-scrollbar-position"),
                                j = c.data("mcs-theme");
                            g && (e.axis = g), h && (e.scrollbarPosition = h), j && (e.theme = j, p(e)), t.call(this), a("#mCSB_" + d.idx + "_container img:not(." + m[2] + ")").addClass(m[2]), n.update.call(null, c)
                        }
                    })
                },
                update: function(b, c) {
                    var d = b || o.call(this);
                    return a(d).each(function() {
                        var b = a(this);
                        if (b.data(f)) {
                            var d = b.data(f),
                                e = d.opt,
                                g = a("#mCSB_" + d.idx + "_container"),
                                h = [a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal")];
                            if (!g.length) return;
                            d.tweenRunning && W(b), b.hasClass(m[3]) && b.removeClass(m[3]), b.hasClass(m[4]) && b.removeClass(m[4]), x.call(this), v.call(this), "y" === e.axis || e.advanced.autoExpandHorizontalScroll || g.css("width", u(g.children())), d.overflowed = B.call(this), F.call(this), e.autoDraggerLength && y.call(this), z.call(this), D.call(this);
                            var i = [Math.abs(g[0].offsetTop), Math.abs(g[0].offsetLeft)];
                            "x" !== e.axis && (d.overflowed[0] ? h[0].height() > h[0].parent().height() ? C.call(this) : (X(b, i[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), d.contentReset.y = null) : (C.call(this), "y" === e.axis ? E.call(this) : "yx" === e.axis && d.overflowed[1] && X(b, i[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== e.axis && (d.overflowed[1] ? h[1].width() > h[1].parent().width() ? C.call(this) : (X(b, i[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), d.contentReset.x = null) : (C.call(this), "x" === e.axis ? E.call(this) : "yx" === e.axis && d.overflowed[0] && X(b, i[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), c && d && (2 === c && e.callbacks.onImageLoad && "function" == typeof e.callbacks.onImageLoad ? e.callbacks.onImageLoad.call(this) : 3 === c && e.callbacks.onSelectorChange && "function" == typeof e.callbacks.onSelectorChange ? e.callbacks.onSelectorChange.call(this) : e.callbacks.onUpdate && "function" == typeof e.callbacks.onUpdate && e.callbacks.onUpdate.call(this)), U.call(this)
                        }
                    })
                },
                scrollTo: function(b, c) {
                    if ("undefined" != typeof b && null != b) {
                        var d = o.call(this);
                        return a(d).each(function() {
                            var d = a(this);
                            if (d.data(f)) {
                                var e = d.data(f),
                                    g = e.opt,
                                    h = {
                                        trigger: "external",
                                        scrollInertia: g.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    i = a.extend(!0, {}, h, c),
                                    j = S.call(this, b),
                                    k = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia;
                                j[0] = T.call(this, j[0], "y"), j[1] = T.call(this, j[1], "x"), i.moveDragger && (j[0] *= e.scrollRatio.y, j[1] *= e.scrollRatio.x), i.dur = k, setTimeout(function() {
                                    null !== j[0] && "undefined" != typeof j[0] && "x" !== g.axis && e.overflowed[0] && (i.dir = "y", i.overwrite = "all", X(d, j[0].toString(), i)), null !== j[1] && "undefined" != typeof j[1] && "y" !== g.axis && e.overflowed[1] && (i.dir = "x", i.overwrite = "none", X(d, j[1].toString(), i))
                                }, i.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var b = o.call(this);
                    return a(b).each(function() {
                        var b = a(this);
                        b.data(f) && W(b)
                    })
                },
                disable: function(b) {
                    var c = o.call(this);
                    return a(c).each(function() {
                        var c = a(this);
                        c.data(f) && (c.data(f), U.call(this, "remove"), E.call(this), b && C.call(this), F.call(this, !0), c.addClass(m[3]))
                    })
                },
                destroy: function() {
                    var b = o.call(this);
                    return a(b).each(function() {
                        var c = a(this);
                        if (c.data(f)) {
                            var d = c.data(f),
                                g = d.opt,
                                h = a("#mCSB_" + d.idx),
                                i = a("#mCSB_" + d.idx + "_container"),
                                j = a(".mCSB_" + d.idx + "_scrollbar");
                            g.live && q(g.liveSelector || a(b).selector), U.call(this, "remove"), E.call(this), C.call(this), c.removeData(f), _(this, "mcs"), j.remove(), i.find("img." + m[2]).removeClass(m[2]), h.replaceWith(i.contents()), c.removeClass(e + " _" + f + "_" + d.idx + " " + m[6] + " " + m[7] + " " + m[5] + " " + m[3]).addClass(m[4])
                        }
                    })
                }
            },
            o = function() {
                return "object" != typeof a(this) || a(this).length < 1 ? g : this
            },
            p = function(b) {
                var c = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    d = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    e = ["minimal", "minimal-dark"],
                    f = ["minimal", "minimal-dark"],
                    g = ["minimal", "minimal-dark"];
                b.autoDraggerLength = a.inArray(b.theme, c) > -1 ? !1 : b.autoDraggerLength, b.autoExpandScrollbar = a.inArray(b.theme, d) > -1 ? !1 : b.autoExpandScrollbar, b.scrollButtons.enable = a.inArray(b.theme, e) > -1 ? !1 : b.scrollButtons.enable, b.autoHideScrollbar = a.inArray(b.theme, f) > -1 ? !0 : b.autoHideScrollbar, b.scrollbarPosition = a.inArray(b.theme, g) > -1 ? "outside" : b.scrollbarPosition
            },
            q = function(a) {
                j[a] && (clearTimeout(j[a]), _(j, a))
            },
            r = function(a) {
                return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
            },
            s = function(a) {
                return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
            },
/*             t = function() {
                var b = a(this),
                    c = b.data(f),
                    d = c.opt,
                    g = d.autoExpandScrollbar ? " " + m[1] + "_expand" : "",
                    h = ["<div id='mCSB_" + c.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + c.idx + "_scrollbar mCS-" + d.theme + " mCSB_scrollTools_vertical" + g + "'><div class='" + m[12] + "'><div id='mCSB_" + c.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + c.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + c.idx + "_scrollbar mCS-" + d.theme + " mCSB_scrollTools_horizontal" + g + "'><div class='" + m[12] + "'><div id='mCSB_" + c.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    i = "yx" === d.axis ? "mCSB_vertical_horizontal" : "x" === d.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    j = "yx" === d.axis ? h[0] + h[1] : "x" === d.axis ? h[1] : h[0],
                    k = "yx" === d.axis ? "<div id='mCSB_" + c.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    l = d.autoHideScrollbar ? " " + m[6] : "",
                    n = "x" !== d.axis && "rtl" === c.langDir ? " " + m[7] : "";
                d.setWidth && b.css("width", d.setWidth), d.setHeight && b.css("height", d.setHeight), d.setLeft = "y" !== d.axis && "rtl" === c.langDir ? "989999px" : d.setLeft, b.addClass(e + " _" + f + "_" + c.idx + l + n).wrapInner("<div id='mCSB_" + c.idx + "' class='mCustomScrollBox mCS-" + d.theme + " " + i + "'><div id='mCSB_" + c.idx + "_container' class='mCSB_container' style='position:relative; top:" + d.setTop + "; left:" + d.setLeft + ";' dir=" + c.langDir + " /></div>");
                var o = a("#mCSB_" + c.idx),
                    p = a("#mCSB_" + c.idx + "_container");
                "y" === d.axis || d.advanced.autoExpandHorizontalScroll || p.css("width", u(p.children())), "outside" === d.scrollbarPosition ? ("static" === b.css("position") && b.css("position", "relative"), b.css("overflow", "visible"), o.addClass("mCSB_outside").after(j)) : (o.addClass("mCSB_inside").append(j), p.wrap(k)), w.call(this);
                var q = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                q[0].css("min-height", q[0].height()), q[1].css("min-width", q[1].width())
            }, */
            u = function(b) {
                return Math.max.apply(Math, b.map(function() {
                    return a(this).outerWidth(!0)
                }).get())
            },
            v = function() {
                var b = a(this),
                    c = b.data(f),
                    d = c.opt,
                    e = a("#mCSB_" + c.idx + "_container");
                d.advanced.autoExpandHorizontalScroll && "y" !== d.axis && e.css({
                    position: "absolute",
                    width: "auto"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(e[0].getBoundingClientRect().right + .4) - Math.floor(e[0].getBoundingClientRect().left),
                    position: "relative"
                }).unwrap()
            },
            w = function() {
                var b = a(this),
                    c = b.data(f),
                    d = c.opt,
                    e = a(".mCSB_" + c.idx + "_scrollbar:first"),
                    g = ca(d.scrollButtons.tabindex) ? "tabindex='" + d.scrollButtons.tabindex + "'" : "",
                    h = ["<a href='#' class='" + m[13] + "' oncontextmenu='return false;' " + g + " />", "<a href='#' class='" + m[14] + "' oncontextmenu='return false;' " + g + " />", "<a href='#' class='" + m[15] + "' oncontextmenu='return false;' " + g + " />", "<a href='#' class='" + m[16] + "' oncontextmenu='return false;' " + g + " />"],
                    i = ["x" === d.axis ? h[2] : h[0], "x" === d.axis ? h[3] : h[1], h[2], h[3]];
                d.scrollButtons.enable && e.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools1").prepend(i[2]).append(i[3])
            },
            x = function() {
                var b = a(this),
                    c = b.data(f),
                    d = a("#mCSB_" + c.idx),
                    e = b.css("max-height") || "none",
                    g = -1 !== e.indexOf("%"),
                    h = b.css("box-sizing");
                if ("none" !== e) {
                    var i = g ? b.parent().height() * parseInt(e) / 100 : parseInt(e);
                    "border-box" === h && (i -= b.innerHeight() - b.height() + (b.outerHeight() - b.innerHeight())), d.css("max-height", Math.round(i))
                }
            },
            y = function() {
                var b = a(this),
                    c = b.data(f),
                    d = a("#mCSB_" + c.idx),
                    e = a("#mCSB_" + c.idx + "_container"),
                    g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
                    h = [d.height() / e.outerHeight(!1), d.width() / e.outerWidth(!1)],
                    i = [parseInt(g[0].css("min-height")), Math.round(h[0] * g[0].parent().height()), parseInt(g[1].css("min-width")), Math.round(h[1] * g[1].parent().width())],
                    j = k && i[1] < i[0] ? i[0] : i[1],
                    l = k && i[3] < i[2] ? i[2] : i[3];
                g[0].css({
                    height: j,
                    "max-height": g[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": i[0] + "px"
                }), g[1].css({
                    width: l,
                    "max-width": g[1].parent().width() - 10
                })
            },
            z = function() {
                var b = a(this),
                    c = b.data(f),
                    d = a("#mCSB_" + c.idx),
                    e = a("#mCSB_" + c.idx + "_container"),
                    g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
                    h = [e.outerHeight(!1) - d.height(), e.outerWidth(!1) - d.width()],
                    i = [h[0] / (g[0].parent().height() - g[0].height()), h[1] / (g[1].parent().width() - g[1].width())];
                c.scrollRatio = {
                    y: i[0],
                    x: i[1]
                }
            },
            A = function(a, b, c) {
                var d = c ? m[0] + "_expanded" : "",
                    e = a.closest(".mCSB_scrollTools1");
                "active" === b ? (a.toggleClass(m[0] + " " + d), e.toggleClass(m[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(m[0]), e.removeClass(m[1])) : (a.addClass(m[0]), e.addClass(m[1])))
            },
            B = function() {
                var b = a(this),
                    c = b.data(f),
                    d = a("#mCSB_" + c.idx),
                    e = a("#mCSB_" + c.idx + "_container"),
                    g = null == c.overflowed ? e.height() : e.outerHeight(!1),
                    h = null == c.overflowed ? e.width() : e.outerWidth(!1);
                return [g > d.height(), h > d.width()]
            },
            C = function() {
                var b = a(this),
                    c = b.data(f),
                    d = c.opt,
                    e = a("#mCSB_" + c.idx),
                    g = a("#mCSB_" + c.idx + "_container"),
                    h = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
                if (W(b), ("x" !== d.axis && !c.overflowed[0] || "y" === d.axis && c.overflowed[0]) && (h[0].add(g).css("top", 0), X(b, "_resetY")), "y" !== d.axis && !c.overflowed[1] || "x" === d.axis && c.overflowed[1]) {
                    var i = dx = 0;
                    "rtl" === c.langDir && (i = e.width() - g.outerWidth(!1), dx = Math.abs(i / c.scrollRatio.x)), g.css("left", i), h[1].css("left", dx), X(b, "_resetX")
                }
            },
            D = function() {
                function b() {
                    g = setTimeout(function() {
                        a.event.special.mousewheel ? (clearTimeout(g), K.call(c[0])) : b()
                    }, 100)
                }
                var c = a(this),
                    d = c.data(f),
                    e = d.opt;
                if (!d.bindEvents) {
                    if (H.call(this), e.contentTouchScroll && I.call(this), J.call(this), e.mouseWheel.enable) {
                        var g;
                        b()
                    }
                    M.call(this), O.call(this), e.advanced.autoScrollOnFocus && N.call(this), e.scrollButtons.enable && P.call(this), e.keyboard.enable && Q.call(this), d.bindEvents = !0
                }
            },
            E = function() {
                var b = a(this),
                    d = b.data(f),
                    e = d.opt,
                    g = f + "_" + d.idx,
                    h = ".mCSB_" + d.idx + "_scrollbar",
                    i = a("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + h + " ." + m[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + h + ">a"),
                    j = a("#mCSB_" + d.idx + "_container");
                e.advanced.releaseDraggableSelectors && i.add(a(e.advanced.releaseDraggableSelectors)), d.bindEvents && (a(c).unbind("." + g), i.each(function() {
                    a(this).unbind("." + g)
                }), clearTimeout(b[0]._focusTimeout), _(b[0], "_focusTimeout"), clearTimeout(d.sequential.step), _(d.sequential, "step"), clearTimeout(j[0].onCompleteTimeout), _(j[0], "onCompleteTimeout"), d.bindEvents = !1)
            },
            F = function(b) {
                var c = a(this),
                    d = c.data(f),
                    e = d.opt,
                    g = a("#mCSB_" + d.idx + "_container_wrapper"),
                    h = g.length ? g : a("#mCSB_" + d.idx + "_container"),
                    i = [a("#mCSB_" + d.idx + "_scrollbar_vertical"), a("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                    j = [i[0].find(".mCSB_dragger"), i[1].find(".mCSB_dragger")];
                "x" !== e.axis && (d.overflowed[0] && !b ? (i[0].add(j[0]).add(i[0].children("a")).css("display", "block"), h.removeClass(m[8] + " " + m[10])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && j[0].css("display", "none"), h.removeClass(m[10])) : (i[0].css("display", "none"), h.addClass(m[10])), h.addClass(m[8]))), "y" !== e.axis && (d.overflowed[1] && !b ? (i[1].add(j[1]).add(i[1].children("a")).css("display", "block"), h.removeClass(m[9] + " " + m[11])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && j[1].css("display", "none"), h.removeClass(m[11])) : (i[1].css("display", "none"), h.addClass(m[11])), h.addClass(m[9]))), d.overflowed[0] || d.overflowed[1] ? c.removeClass(m[5]) : c.addClass(m[5])
            },
            G = function(a) {
                var b = a.type;
                switch (b) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return [a.originalEvent.pageY, a.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0],
                            d = a.originalEvent.touches.length || a.originalEvent.changedTouches.length;
                        return [c.pageY, c.pageX, d > 1];
                    default:
                        return [a.pageY, a.pageX, !1]
                }
            },
            H = function() {
                function b(a) {
                    var b = p.find("iframe");
                    if (b.length) {
                        var c = a ? "auto" : "none";
                        b.css("pointer-events", c)
                    }
                }

                function d(a, b, c, d) {
                    if (p[0].idleTimer = m.scrollInertia < 233 ? 250 : 0, e.attr("id") === o[1]) var f = "x",
                        g = (e[0].offsetLeft - b + d) * j.scrollRatio.x;
                    else var f = "y",
                        g = (e[0].offsetTop - a + c) * j.scrollRatio.y;
                    X(i, g.toString(), {
                        dir: f,
                        drag: !0
                    })
                }
                var e, g, h, i = a(this),
                    j = i.data(f),
                    m = j.opt,
                    n = f + "_" + j.idx,
                    o = ["mCSB_" + j.idx + "_dragger_vertical", "mCSB_" + j.idx + "_dragger_horizontal"],
                    p = a("#mCSB_" + j.idx + "_container"),
                    q = a("#" + o[0] + ",#" + o[1]),
                    r = m.advanced.releaseDraggableSelectors ? q.add(a(m.advanced.releaseDraggableSelectors)) : q;
                q.bind("mousedown." + n + " touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, function(d) {
                    if (d.stopImmediatePropagation(), d.preventDefault(), aa(d)) {
                        l = !0, k && (c.onselectstart = function() {
                            return !1
                        }), b(!1), W(i), e = a(this);
                        var f = e.offset(),
                            j = G(d)[0] - f.top,
                            n = G(d)[1] - f.left,
                            o = e.height() + f.top,
                            p = e.width() + f.left;
                        o > j && j > 0 && p > n && n > 0 && (g = j, h = n), A(e, "active", m.autoExpandScrollbar)
                    }
                }).bind("touchmove." + n, function(a) {
                    a.stopImmediatePropagation(), a.preventDefault();
                    var b = e.offset(),
                        c = G(a)[0] - b.top,
                        f = G(a)[1] - b.left;
                    d(g, h, c, f)
                }), a(c).bind("mousemove." + n + " pointermove." + n + " MSPointerMove." + n, function(a) {
                    if (e) {
                        var b = e.offset(),
                            c = G(a)[0] - b.top,
                            f = G(a)[1] - b.left;
                        if (g === c) return;
                        d(g, h, c, f)
                    }
                }).add(r).bind("mouseup." + n + " touchend." + n + " pointerup." + n + " MSPointerUp." + n, function() {
                    e && (A(e, "active", m.autoExpandScrollbar), e = null), l = !1, k && (c.onselectstart = null), b(!0)
                })
            },
            I = function() {
                function b(a, b) {
                    var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                    return a > 90 ? b > 4 ? c[0] : c[3] : a > 60 ? b > 3 ? c[3] : c[2] : a > 30 ? b > 8 ? c[1] : b > 6 ? c[0] : b > 4 ? b : c[2] : b > 8 ? b : c[3]
                }

                function c(a, b, c, d, e, f) {
                    a && X(t, a.toString(), {
                        dur: b,
                        scrollEasing: c,
                        dir: d,
                        overwrite: e,
                        drag: f
                    })
                }
                var e, g, h, i, j, k, m, n, o, p, q, r, s, t = a(this),
                    u = t.data(f),
                    v = u.opt,
                    w = f + "_" + u.idx,
                    x = a("#mCSB_" + u.idx),
                    y = a("#mCSB_" + u.idx + "_container"),
                    z = [a("#mCSB_" + u.idx + "_dragger_vertical"), a("#mCSB_" + u.idx + "_dragger_horizontal")],
                    A = [],
                    B = [],
                    C = 0,
                    D = "yx" === v.axis ? "none" : "all",
                    E = [];
                y.bind("touchstart." + w + " pointerdown." + w + " MSPointerDown." + w, function(a) {
                    if (!ba(a) || l || G(a)[2]) return void(d = 0);
                    d = 1, r = 0, s = 0;
                    var b = y.offset();
                    e = G(a)[0] - b.top, g = G(a)[1] - b.left, E = [G(a)[0], G(a)[1]]
                }).bind("touchmove." + w + " pointermove." + w + " MSPointerMove." + w, function(a) {
                    if (ba(a) && !l && !G(a)[2] && (a.stopImmediatePropagation(), !s || r)) {
                        k = Z();
                        var b = x.offset(),
                            d = G(a)[0] - b.top,
                            f = G(a)[1] - b.left,
                            h = "mcsLinearOut";
                        if (A.push(d), B.push(f), E[2] = Math.abs(G(a)[0] - E[0]), E[3] = Math.abs(G(a)[1] - E[1]), u.overflowed[0]) var i = z[0].parent().height() - z[0].height(),
                            j = e - d > 0 && d - e > -(i * u.scrollRatio.y) && (2 * E[3] < E[2] || "yx" === v.axis);
                        if (u.overflowed[1]) var m = z[1].parent().width() - z[1].width(),
                            n = g - f > 0 && f - g > -(m * u.scrollRatio.x) && (2 * E[2] < E[3] || "yx" === v.axis);
                        j || n ? (a.preventDefault(), r = 1) : s = 1, p = "yx" === v.axis ? [e - d, g - f] : "x" === v.axis ? [null, g - f] : [e - d, null], y[0].idleTimer = 250, u.overflowed[0] && c(p[0], C, h, "y", "all", !0), u.overflowed[1] && c(p[1], C, h, "x", D, !0)
                    }
                }), x.bind("touchstart." + w + " pointerdown." + w + " MSPointerDown." + w, function(a) {
                    if (!ba(a) || l || G(a)[2]) return void(d = 0);
                    d = 1, a.stopImmediatePropagation(), W(t), j = Z();
                    var b = x.offset();
                    h = G(a)[0] - b.top, i = G(a)[1] - b.left, A = [], B = []
                }).bind("touchend." + w + " pointerup." + w + " MSPointerUp." + w, function(a) {
                    if (ba(a) && !l && !G(a)[2]) {
                        a.stopImmediatePropagation(), r = 0, s = 0, m = Z();
                        var d = x.offset(),
                            e = G(a)[0] - d.top,
                            f = G(a)[1] - d.left;
                        if (!(m - k > 30)) {
                            o = 1e3 / (m - j);
                            var g = "mcsEaseOut",
                                t = 2.5 > o,
                                w = t ? [A[A.length - 2], B[B.length - 2]] : [0, 0];
                            n = t ? [e - w[0], f - w[1]] : [e - h, f - i];
                            var z = [Math.abs(n[0]), Math.abs(n[1])];
                            o = t ? [Math.abs(n[0] / 4), Math.abs(n[1] / 4)] : [o, o];
                            var C = [Math.abs(y[0].offsetTop) - n[0] * b(z[0] / o[0], o[0]), Math.abs(y[0].offsetLeft) - n[1] * b(z[1] / o[1], o[1])];
                            p = "yx" === v.axis ? [C[0], C[1]] : "x" === v.axis ? [null, C[1]] : [C[0], null], q = [4 * z[0] + v.scrollInertia, 4 * z[1] + v.scrollInertia];
                            var E = parseInt(v.contentTouchScroll) || 0;
                            p[0] = z[0] > E ? p[0] : 0, p[1] = z[1] > E ? p[1] : 0, u.overflowed[0] && c(p[0], q[0], g, "y", D, !1), u.overflowed[1] && c(p[1], q[1], g, "x", D, !1)
                        }
                    }
                })
            },
            J = function() {
                function e() {
                    return b.getSelection ? b.getSelection().toString() : c.selection && "Control" != c.selection.type ? c.selection.createRange().text : 0
                }

                function g(a, b, c) {
                    m.type = c && h ? "stepped" : "stepless", m.scrollAmount = 10, R(i, a, b, "mcsLinearOut", c ? 60 : null)
                }
                var h, i = a(this),
                    j = i.data(f),
                    k = j.opt,
                    m = j.sequential,
                    n = f + "_" + j.idx,
                    o = a("#mCSB_" + j.idx + "_container"),
                    p = o.parent();
                o.bind("mousedown." + n, function() {
                    d || h || (h = 1, l = !0)
                }).add(c).bind("mousemove." + n, function(a) {
                    if (!d && h && e()) {
                        var b = o.offset(),
                            c = G(a)[0] - b.top + o[0].offsetTop,
                            f = G(a)[1] - b.left + o[0].offsetLeft;
                        c > 0 && c < p.height() && f > 0 && f < p.width() ? m.step && g("off", null, "stepped") : ("x" !== k.axis && j.overflowed[0] && (0 > c ? g("on", 38) : c > p.height() && g("on", 40)), "y" !== k.axis && j.overflowed[1] && (0 > f ? g("on", 37) : f > p.width() && g("on", 39)))
                    }
                }).bind("mouseup." + n, function() {
                    d || (h && (h = 0, g("off", null)), l = !1)
                })
            },
            K = function() {
                function b(a) {
                    var b = null;
                    try {
                        var c = a.contentDocument || a.contentWindow.document;
                        b = c.body.innerHTML
                    } catch (d) {}
                    return null !== b
                }
                var c = a(this),
                    d = c.data(f);
                if (d) {
                    var e = d.opt,
                        g = f + "_" + d.idx,
                        h = a("#mCSB_" + d.idx),
                        i = [a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal")],
                        j = a("#mCSB_" + d.idx + "_container").find("iframe"),
                        l = h;
                    j.length && j.each(function() {
                        var c = this;
                        b(c) && (l = l.add(a(c).contents().find("body")))
                    }), l.bind("mousewheel." + g, function(b, f) {
                        if (W(c), !L(c, b.target)) {
                            var g = "auto" !== e.mouseWheel.deltaFactor ? parseInt(e.mouseWheel.deltaFactor) : k && b.deltaFactor < 100 ? 100 : b.deltaFactor || 100;
                            if ("x" === e.axis || "x" === e.mouseWheel.axis) var j = "x",
                                l = [Math.round(g * d.scrollRatio.x), parseInt(e.mouseWheel.scrollAmount)],
                                m = "auto" !== e.mouseWheel.scrollAmount ? l[1] : l[0] >= h.width() ? .9 * h.width() : l[0],
                                n = Math.abs(a("#mCSB_" + d.idx + "_container")[0].offsetLeft),
                                o = i[1][0].offsetLeft,
                                p = i[1].parent().width() - i[1].width(),
                                q = b.deltaX || b.deltaY || f;
                            else var j = "y",
                                l = [Math.round(g * d.scrollRatio.y), parseInt(e.mouseWheel.scrollAmount)],
                                m = "auto" !== e.mouseWheel.scrollAmount ? l[1] : l[0] >= h.height() ? .9 * h.height() : l[0],
                                n = Math.abs(a("#mCSB_" + d.idx + "_container")[0].offsetTop),
                                o = i[0][0].offsetTop,
                                p = i[0].parent().height() - i[0].height(),
                                q = b.deltaY || f;
                            "y" === j && !d.overflowed[0] || "x" === j && !d.overflowed[1] || (e.mouseWheel.invert && (q = -q), e.mouseWheel.normalizeDelta && (q = 0 > q ? -1 : 1), (q > 0 && 0 !== o || 0 > q && o !== p || e.mouseWheel.preventDefault) && (b.stopImmediatePropagation(), b.preventDefault()), X(c, (n - q * m).toString(), {
                                dir: j
                            }))
                        }
                    })
                }
            },
            L = function(b, c) {
                var d = c.nodeName.toLowerCase(),
                    e = b.data(f).opt.mouseWheel.disableOver,
                    g = ["select", "textarea"];
                return a.inArray(d, e) > -1 && !(a.inArray(d, g) > -1 && !a(c).is(":focus"))
            },
            M = function() {
                var b = a(this),
                    c = b.data(f),
                    d = f + "_" + c.idx,
                    e = a("#mCSB_" + c.idx + "_container"),
                    g = e.parent(),
                    h = a(".mCSB_" + c.idx + "_scrollbar ." + m[12]);
                h.bind("touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function() {
                    l = !0
                }).bind("touchend." + d + " pointerup." + d + " MSPointerUp." + d, function() {
                    l = !1
                }).bind("click." + d, function(d) {
                    if (a(d.target).hasClass(m[12]) || a(d.target).hasClass("mCSB_draggerRail")) {
                        W(b);
                        var f = a(this),
                            h = f.find(".mCSB_dragger");
                        if (f.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!c.overflowed[1]) return;
                            var i = "x",
                                j = d.pageX > h.offset().left ? -1 : 1,
                                k = Math.abs(e[0].offsetLeft) - .9 * j * g.width()
                        } else {
                            if (!c.overflowed[0]) return;
                            var i = "y",
                                j = d.pageY > h.offset().top ? -1 : 1,
                                k = Math.abs(e[0].offsetTop) - .9 * j * g.height()
                        }
                        X(b, k.toString(), {
                            dir: i,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
  /*           N = function() {
                var b = a(this),
                    d = b.data(f),
                    e = d.opt,
                    g = f + "_" + d.idx,
                    h = a("#mCSB_" + d.idx + "_container"),
                    i = h.parent();
                h.bind("focusin." + g, function() {
                    var d = a(c.activeElement),
                        f = h.find(".mCustomScrollBox").length,
                        g = 0;
                    d.is(e.advanced.autoScrollOnFocus) && (W(b), clearTimeout(b[0]._focusTimeout), b[0]._focusTimer = f ? (g + 17) * f : 0, b[0]._focusTimeout = setTimeout(function() {
                        var a = [da(d)[0], da(d)[1]],
                            c = [h[0].offsetTop, h[0].offsetLeft],
                            f = [c[0] + a[0] >= 0 && c[0] + a[0] < i.height() - d.outerHeight(!1), c[1] + a[1] >= 0 && c[0] + a[1] < i.width() - d.outerWidth(!1)],
                            j = "yx" !== e.axis || f[0] || f[1] ? "all" : "none";
                        "x" === e.axis || f[0] || X(b, a[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: j,
                            dur: g
                        }), "y" === e.axis || f[1] || X(b, a[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: j,
                            dur: g
                        })
                    }, b[0]._focusTimer))
                })
            }, */
            O = function() {
                var b = a(this),
                    c = b.data(f),
                    d = f + "_" + c.idx,
                    e = a("#mCSB_" + c.idx + "_container").parent();
                e.bind("scroll." + d, function() {
                    (0 !== e.scrollTop() || 0 !== e.scrollLeft()) && a(".mCSB_" + c.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            P = function() {
                var b = a(this),
                    c = b.data(f),
                    d = c.opt,
                    e = c.sequential,
                    g = f + "_" + c.idx,
                    h = ".mCSB_" + c.idx + "_scrollbar",
                    i = a(h + ">a");
                i.bind("mousedown." + g + " touchstart." + g + " pointerdown." + g + " MSPointerDown." + g + " mouseup." + g + " touchend." + g + " pointerup." + g + " MSPointerUp." + g + " mouseout." + g + " pointerout." + g + " MSPointerOut." + g + " click." + g, function(f) {
                    function g(a, c) {
                        e.scrollAmount = d.snapAmount || d.scrollButtons.scrollAmount, R(b, a, c)
                    }
                    if (f.preventDefault(), aa(f)) {
                        var h = a(this).attr("class");
                        switch (e.type = d.scrollButtons.scrollType, f.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === e.type) return;
                                l = !0, c.tweenRunning = !1, g("on", h);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === e.type) return;
                                l = !1, e.dir && g("off", h);
                                break;
                            case "click":
                                if ("stepped" !== e.type || c.tweenRunning) return;
                                g("on", h)
                        }
                    }
                })
            },
            Q = function() {
                var b = a(this),
                    d = b.data(f),
                    e = d.opt,
                    g = d.sequential,
                    h = f + "_" + d.idx,
                    i = a("#mCSB_" + d.idx),
                    j = a("#mCSB_" + d.idx + "_container"),
                    k = j.parent(),
                    l = "input,textarea,select,datalist,keygen,[contenteditable='true']";
                i.attr("tabindex", "0").bind("blur." + h + " keydown." + h + " keyup." + h, function(f) {
                    function h(a, c) {
                        g.type = e.keyboard.scrollType, g.scrollAmount = e.snapAmount || e.keyboard.scrollAmount, "stepped" === g.type && d.tweenRunning || R(b, a, c)
                    }
                    switch (f.type) {
                        case "blur":
                            d.tweenRunning && g.dir && h("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var i = f.keyCode ? f.keyCode : f.which,
                                m = "on";
                            if ("x" !== e.axis && (38 === i || 40 === i) || "y" !== e.axis && (37 === i || 39 === i)) {
                                if ((38 === i || 40 === i) && !d.overflowed[0] || (37 === i || 39 === i) && !d.overflowed[1]) return;
                                "keyup" === f.type && (m = "off"), a(c.activeElement).is(l) || (f.preventDefault(), f.stopImmediatePropagation(), h(m, i))
                            } else if (33 === i || 34 === i) {
                                if ((d.overflowed[0] || d.overflowed[1]) && (f.preventDefault(), f.stopImmediatePropagation()), "keyup" === f.type) {
                                    W(b);
                                    var n = 34 === i ? -1 : 1;
                                    if ("x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0]) var o = "x",
                                        p = Math.abs(j[0].offsetLeft) - .9 * n * k.width();
                                    else var o = "y",
                                        p = Math.abs(j[0].offsetTop) - .9 * n * k.height();
                                    X(b, p.toString(), {
                                        dir: o,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === i || 36 === i) && !a(c.activeElement).is(l) && ((d.overflowed[0] || d.overflowed[1]) && (f.preventDefault(), f.stopImmediatePropagation()), "keyup" === f.type)) {
                                if ("x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0]) var o = "x",
                                    p = 35 === i ? Math.abs(k.width() - j.outerWidth(!1)) : 0;
                                else var o = "y",
                                    p = 35 === i ? Math.abs(k.height() - j.outerHeight(!1)) : 0;
                                X(b, p.toString(), {
                                    dir: o,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                })
            },
            R = function(b, c, d, e, g) {
                function h(a) {
                    var c = "stepped" !== l.type,
                        d = g ? g : a ? c ? p / 1.5 : q : 1e3 / 60,
                        f = a ? c ? 7.5 : 40 : 2.5,
                        i = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)],
                        k = [j.scrollRatio.y > 10 ? 10 : j.scrollRatio.y, j.scrollRatio.x > 10 ? 10 : j.scrollRatio.x],
                        m = "x" === l.dir[0] ? i[1] + l.dir[1] * k[1] * f : i[0] + l.dir[1] * k[0] * f,
                        o = "x" === l.dir[0] ? i[1] + l.dir[1] * parseInt(l.scrollAmount) : i[0] + l.dir[1] * parseInt(l.scrollAmount),
                        r = "auto" !== l.scrollAmount ? o : m,
                        s = e ? e : a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        t = a ? !0 : !1;
                    return a && 17 > d && (r = "x" === l.dir[0] ? i[1] : i[0]), X(b, r.toString(), {
                        dir: l.dir[0],
                        scrollEasing: s,
                        dur: d,
                        onComplete: t
                    }), a ? void(l.dir = !1) : (clearTimeout(l.step), void(l.step = setTimeout(function() {
                        h()
                    }, d)))
                }

                function i() {
                    clearTimeout(l.step), _(l, "step"), W(b)
                }
                var j = b.data(f),
                    k = j.opt,
                    l = j.sequential,
                    n = a("#mCSB_" + j.idx + "_container"),
                    o = "stepped" === l.type ? !0 : !1,
                    p = k.scrollInertia < 26 ? 26 : k.scrollInertia,
                    q = k.scrollInertia < 1 ? 17 : k.scrollInertia;
                switch (c) {
                    case "on":
                        if (l.dir = [d === m[16] || d === m[15] || 39 === d || 37 === d ? "x" : "y", d === m[13] || d === m[15] || 38 === d || 37 === d ? -1 : 1], W(b), ca(d) && "stepped" === l.type) return;
                        h(o);
                        break;
                    case "off":
                        i(), (o || j.tweenRunning && l.dir) && h(!0)
                }
            },
            S = function(b) {
                var c = a(this).data(f).opt,
                    d = [];
                return "function" == typeof b && (b = b()), b instanceof Array ? d = b.length > 1 ? [b[0], b[1]] : "x" === c.axis ? [null, b[0]] : [b[0], null] : (d[0] = b.y ? b.y : b.x || "x" === c.axis ? null : b, d[1] = b.x ? b.x : b.y || "y" === c.axis ? null : b), "function" == typeof d[0] && (d[0] = d[0]()), "function" == typeof d[1] && (d[1] = d[1]()), d
            },
            T = function(b, c) {
                if (null != b && "undefined" != typeof b) {
                    var d = a(this),
                        e = d.data(f),
                        g = e.opt,
                        h = a("#mCSB_" + e.idx + "_container"),
                        i = h.parent(),
                        j = typeof b;
                    c || (c = "x" === g.axis ? "x" : "y");
                    var k = "x" === c ? h.outerWidth(!1) : h.outerHeight(!1),
                        l = "x" === c ? h[0].offsetLeft : h[0].offsetTop,
                        m = "x" === c ? "left" : "top";
                    switch (j) {
                        case "function":
                            return b();
                        case "object":
                            var o = b.jquery ? b : a(b);
                            if (!o.length) return;
                            return "x" === c ? da(o)[1] : da(o)[0];
                        case "string":
                        case "number":
                            if (ca(b)) return Math.abs(b);
                            if (-1 !== b.indexOf("%")) return Math.abs(k * parseInt(b) / 100);
                            if (-1 !== b.indexOf("-=")) return Math.abs(l - parseInt(b.split("-=")[1]));
                            if (-1 !== b.indexOf("+=")) {
                                var p = l + parseInt(b.split("+=")[1]);

                                return p >= 0 ? 0 : Math.abs(p)
                            }
                            if (-1 !== b.indexOf("px") && ca(b.split("px")[0])) return Math.abs(b.split("px")[0]);
                            if ("top" === b || "left" === b) return 0;
                            if ("bottom" === b) return Math.abs(i.height() - h.outerHeight(!1));
                            if ("right" === b) return Math.abs(i.width() - h.outerWidth(!1));
                            if ("first" === b || "last" === b) {
                                var o = h.find(":" + b);
                                return "x" === c ? da(o)[1] : da(o)[0]
                            }
                            return a(b).length ? "x" === c ? da(a(b))[1] : da(a(b))[0] : (h.css(m, b), void n.update.call(null, d[0]))
                    }
                }
            },
            U = function(b) {
                function c() {
                    clearTimeout(l[0].autoUpdate), l[0].autoUpdate = setTimeout(function() {
                        return k.advanced.updateOnSelectorChange && (o = g(), o !== u) ? (h(3), void(u = o)) : (k.advanced.updateOnContentResize && (p = [l.outerHeight(!1), l.outerWidth(!1), r.height(), r.width(), t()[0], t()[1]], (p[0] !== v[0] || p[1] !== v[1] || p[2] !== v[2] || p[3] !== v[3] || p[4] !== v[4] || p[5] !== v[5]) && (h(p[0] !== v[0] || p[1] !== v[1]), v = p)), k.advanced.updateOnImageLoad && (q = d(), q !== w && (l.find("img").each(function() {
                            e(this)
                        }), w = q)), void((k.advanced.updateOnSelectorChange || k.advanced.updateOnContentResize || k.advanced.updateOnImageLoad) && c()))
                    }, 60)
                }

                function d() {
                    var a = 0;
                    return k.advanced.updateOnImageLoad && (a = l.find("img").length), a
                }

                function e(b) {
                    function c(a, b) {
                        return function() {
                            return b.apply(a, arguments)
                        }
                    }

                    function d() {
                        this.onload = null, a(b).addClass(m[2]), h(2)
                    }
                    if (a(b).hasClass(m[2])) return void h();
                    var e = new Image;
                    e.onload = c(e, d), e.src = b.src
                }

                function g() {
                    k.advanced.updateOnSelectorChange === !0 && (k.advanced.updateOnSelectorChange = "*");
                    var b = 0,
                        c = l.find(k.advanced.updateOnSelectorChange);
                    return k.advanced.updateOnSelectorChange && c.length > 0 && c.each(function() {
                        b += a(this).height() + a(this).width()
                    }), b
                }

                function h(a) {
                    clearTimeout(l[0].autoUpdate), n.update.call(null, i[0], a)
                }
                var i = a(this),
                    j = i.data(f),
                    k = j.opt,
                    l = a("#mCSB_" + j.idx + "_container");
                if (b) return clearTimeout(l[0].autoUpdate), void _(l[0], "autoUpdate");
                var o, p, q, r = l.parent(),
                    s = [a("#mCSB_" + j.idx + "_scrollbar_vertical"), a("#mCSB_" + j.idx + "_scrollbar_horizontal")],
                    t = function() {
                        return [s[0].is(":visible") ? s[0].outerHeight(!0) : 0, s[1].is(":visible") ? s[1].outerWidth(!0) : 0]
                    },
                    u = g(),
                    v = [l.outerHeight(!1), l.outerWidth(!1), r.height(), r.width(), t()[0], t()[1]],
                    w = d();
                c()
            },
            V = function(a, b, c) {
                return Math.round(a / b) * b - c
            },
            W = function(b) {
                var c = b.data(f),
                    d = a("#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper,#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal");
                d.each(function() {
                    $.call(this)
                })
            },
            X = function(b, c, d) {
                function e(a) {
                    return i && j.callbacks[a] && "function" == typeof j.callbacks[a]
                }

                function g() {
                    return [j.callbacks.alwaysTriggerOffsets || t >= u[0] + w, j.callbacks.alwaysTriggerOffsets || -x >= t]
                }

                function h() {
                    var a = [n[0].offsetTop, n[0].offsetLeft],
                        c = [r[0].offsetTop, r[0].offsetLeft],
                        e = [n.outerHeight(!1), n.outerWidth(!1)],
                        f = [m.height(), m.width()];
                    b[0].mcs = {
                        content: n,
                        top: a[0],
                        left: a[1],
                        draggerTop: c[0],
                        draggerLeft: c[1],
                        topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(e[0]) - f[0])),
                        leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(e[1]) - f[1])),
                        direction: d.dir
                    }
                }
                var i = b.data(f),
                    j = i.opt,
                    k = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: j.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    d = a.extend(k, d),
                    l = [d.dur, d.drag ? 0 : d.dur],
                    m = a("#mCSB_" + i.idx),
                    n = a("#mCSB_" + i.idx + "_container"),
                    o = n.parent(),
                    p = j.callbacks.onTotalScrollOffset ? S.call(b, j.callbacks.onTotalScrollOffset) : [0, 0],
                    q = j.callbacks.onTotalScrollBackOffset ? S.call(b, j.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (i.trigger = d.trigger, (0 !== o.scrollTop() || 0 !== o.scrollLeft()) && (a(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), o.scrollTop(0).scrollLeft(0)), "_resetY" !== c || i.contentReset.y || (e("onOverflowYNone") && j.callbacks.onOverflowYNone.call(b[0]), i.contentReset.y = 1), "_resetX" !== c || i.contentReset.x || (e("onOverflowXNone") && j.callbacks.onOverflowXNone.call(b[0]), i.contentReset.x = 1), "_resetY" !== c && "_resetX" !== c) {
                    switch (!i.contentReset.y && b[0].mcs || !i.overflowed[0] || (e("onOverflowY") && j.callbacks.onOverflowY.call(b[0]), i.contentReset.x = null), !i.contentReset.x && b[0].mcs || !i.overflowed[1] || (e("onOverflowX") && j.callbacks.onOverflowX.call(b[0]), i.contentReset.x = null), j.snapAmount && (c = V(c, j.snapAmount, j.snapOffset)), d.dir) {
                        case "x":
                            var r = a("#mCSB_" + i.idx + "_dragger_horizontal"),
                                s = "left",
                                t = n[0].offsetLeft,
                                u = [m.width() - n.outerWidth(!1), r.parent().width() - r.width()],
                                v = [c, 0 === c ? 0 : c / i.scrollRatio.x],
                                w = p[1],
                                x = q[1],
                                y = w > 0 ? w / i.scrollRatio.x : 0,
                                z = x > 0 ? x / i.scrollRatio.x : 0;
                            break;
                        case "y":
                            var r = a("#mCSB_" + i.idx + "_dragger_vertical"),
                                s = "top",
                                t = n[0].offsetTop,
                                u = [m.height() - n.outerHeight(!1), r.parent().height() - r.height()],
                                v = [c, 0 === c ? 0 : c / i.scrollRatio.y],
                                w = p[0],
                                x = q[0],
                                y = w > 0 ? w / i.scrollRatio.y : 0,
                                z = x > 0 ? x / i.scrollRatio.y : 0
                    }
                    v[1] < 0 || 0 === v[0] && 0 === v[1] ? v = [0, 0] : v[1] >= u[1] ? v = [u[0], u[1]] : v[0] = -v[0], b[0].mcs || (h(), e("onInit") && j.callbacks.onInit.call(b[0])), clearTimeout(n[0].onCompleteTimeout), (i.tweenRunning || !(0 === t && v[0] >= 0 || t === u[0] && v[0] <= u[0])) && (Y(r[0], s, Math.round(v[1]), l[1], d.scrollEasing), Y(n[0], s, Math.round(v[0]), l[0], d.scrollEasing, d.overwrite, {
                        onStart: function() {
                            d.callbacks && d.onStart && !i.tweenRunning && (e("onScrollStart") && (h(), j.callbacks.onScrollStart.call(b[0])), i.tweenRunning = !0, A(r), i.cbOffsets = g())
                        },
                        onUpdate: function() {
                            d.callbacks && d.onUpdate && e("whileScrolling") && (h(), j.callbacks.whileScrolling.call(b[0]))
                        },
                        onComplete: function() {
                            if (d.callbacks && d.onComplete) {
                                "yx" === j.axis && clearTimeout(n[0].onCompleteTimeout);
                                var a = n[0].idleTimer || 0;
                                n[0].onCompleteTimeout = setTimeout(function() {
                                    e("onScroll") && (h(), j.callbacks.onScroll.call(b[0])), e("onTotalScroll") && v[1] >= u[1] - y && i.cbOffsets[0] && (h(), j.callbacks.onTotalScroll.call(b[0])), e("onTotalScrollBack") && v[1] <= z && i.cbOffsets[1] && (h(), j.callbacks.onTotalScrollBack.call(b[0])), i.tweenRunning = !1, n[0].idleTimer = 0, A(r, "hide")
                                }, a)
                            }
                        }
                    }))
                }
            },
            Y = function(a, c, d, e, f, g, h) {
                function i() {
                    w.stop || (t || p.call(), t = Z() - s, j(), t >= w.time && (w.time = t > w.time ? t + n - (t - w.time) : t + n - 1, w.time < t + 1 && (w.time = t + 1)), w.time < e ? w.id = o(i) : r.call())
                }

                function j() {
                    e > 0 ? (w.currVal = m(w.time, u, x, e, f), v[c] = Math.round(w.currVal) + "px") : v[c] = d + "px", q.call()
                }

                function k() {
                    n = 1e3 / 60, w.time = t + n, o = b.requestAnimationFrame ? b.requestAnimationFrame : function(a) {
                        return j(), setTimeout(a, .01)
                    }, w.id = o(i)
                }

                function l() {
                    null != w.id && (b.requestAnimationFrame ? b.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null)
                }

                function m(a, b, c, d, e) {
                    switch (e) {
                        case "linear":
                        case "mcsLinear":
                            return c * a / d + b;
                        case "mcsLinearOut":
                            return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                        case "easeInOutSmooth":
                            return a /= d / 2, 1 > a ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);
                        case "easeInOutStrong":
                            return a /= d / 2, 1 > a ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (-Math.pow(2, -10 * a) + 2) + b);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return a /= d / 2, 1 > a ? c / 2 * a * a * a + b : (a -= 2, c / 2 * (a * a * a + 2) + b);
                        case "easeOutSmooth":
                            return a /= d, a--, -c * (a * a * a * a - 1) + b;
                        case "easeOutStrong":
                            return c * (-Math.pow(2, -10 * a / d) + 1) + b;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var f = (a /= d) * a,
                                g = f * a;
                            return b + c * (.499999999999997 * g * f + -2.5 * f * f + 5.5 * g + -6.5 * f + 4 * a)
                    }
                }
                a._mTween || (a._mTween = {
                    top: {},
                    left: {}
                });
                var n, o, h = h || {},
                    p = h.onStart || function() {},
                    q = h.onUpdate || function() {},
                    r = h.onComplete || function() {},
                    s = Z(),
                    t = 0,
                    u = a.offsetTop,
                    v = a.style,
                    w = a._mTween[c];
                "left" === c && (u = a.offsetLeft);
                var x = d - u;
                w.stop = 0, "none" !== g && l(), k()
            },
            Z = function() {
                return b.performance && b.performance.now ? b.performance.now() : b.performance && b.performance.webkitNow ? b.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            $ = function() {
                var a = this;
                a._mTween || (a._mTween = {
                    top: {},
                    left: {}
                });
                for (var c = ["top", "left"], d = 0; d < c.length; d++) {
                    var e = c[d];
                    a._mTween[e].id && (b.requestAnimationFrame ? b.cancelAnimationFrame(a._mTween[e].id) : clearTimeout(a._mTween[e].id), a._mTween[e].id = null, a._mTween[e].stop = 1)
                }
            },
            _ = function(a, b) {
                try {
                    delete a[b]
                } catch (c) {
                    a[b] = null
                }
            },
            aa = function(a) {
                return !(a.which && 1 !== a.which)
            },
            ba = function(a) {
                var b = a.originalEvent.pointerType;
                return !(b && "touch" !== b && 2 !== b)
            },
            ca = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            da = function(a) {
                var b = a.parents(".mCSB_container1");
                return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
            };
        a.fn[e] = function(b) {
            return n[b] ? n[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : n.init.apply(this, arguments)
        }, a[e] = function(b) {
            return n[b] ? n[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : n.init.apply(this, arguments)
        }, a[e].defaults = h, b[e] = !0, a(b).load(function() {
            a(g)[e](), a.extend(a.expr[":"], {
                mcsInView: a.expr[":"].mcsInView || function(b) {
                    var c, d, e = a(b),
                        f = e.parents(".mCSB_container1");
                    return f.length ? (c = f.parent(), d = [f[0].offsetTop, f[0].offsetLeft], d[0] + da(e)[0] >= 0 && d[0] + da(e)[0] < c.height() - e.outerHeight(!1) && d[1] + da(e)[1] >= 0 && d[1] + da(e)[1] < c.width() - e.outerWidth(!1)) : void 0
                },
                mcsOverflow: a.expr[":"].mcsOverflow || function(b) {
                    var c = a(b).data(f);
                    return c ? c.overflowed[0] || c.overflowed[1] : void 0
                }
            })
        })
    })
}(jQuery, window, document), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.1", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : a.extend({}, e.data(), {
                trigger: this
            });
        c.call(f, h)
    })
}(jQuery),
function(a, b) {
    "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
}(this, function(a) {
    var b = function(a, b) {
            var c, d = document.createElement("canvas");
            a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
            var e = d.getContext("2d");
            d.width = d.height = b.size;
            var f = 1;
            window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-.5 + b.rotate / 180) * Math.PI);
            var g = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
                return +new Date
            };
            var h = function(a, b, c) {
                    c = Math.min(Math.max(-1, c || 0), 1);
                    var d = 0 >= c ? !0 : !1;
                    e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                },
                i = function() {
                    var a, c;
                    e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                    for (var d = 18; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                    e.restore()
                },
                j = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                        window.setTimeout(a, 1e3 / 60)
                    }
                }(),
                k = function() {
                    b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
                };
            this.getCanvas = function() {
                return d
            }, this.getCtx = function() {
                return e
            }, this.clear = function() {
                e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
            }, this.draw = function(a) {
                b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                var d;
                d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
            }.bind(this), this.animate = function(a, c) {
                var d = Date.now();
                b.onStart(a, c);
                var e = function() {
                    var f = Math.min(Date.now() - d, b.animate.duration),
                        g = b.easing(this, f, a, c - a, b.animate.duration);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                }.bind(this);
                j(e)
            }.bind(this)
        },
        c = function(a, c) {
            var d = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function(a, b, c, d, e) {
                    return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                },
                onStart: function() {},
                onStep: function() {},
                onStop: function() {}
            };
            if ("undefined" != typeof b) d.renderer = b;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                d.renderer = SVGRenderer
            }
            var e = {},
                f = 0,
                g = function() {
                    this.el = a, this.options = e;
                    for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                    e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
                        duration: e.animate,
                        enabled: !0
                    }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                        duration: 1e3,
                        enabled: e.animate
                    }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                }.bind(this);
            this.update = function(a) {
                return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
            }.bind(this), this.disableAnimation = function() {
                return e.animate.enabled = !1, this
            }, this.enableAnimation = function() {
                return e.animate.enabled = !0, this
            }, g()
        };
    a.fn.easyPieChart = function(b) {
        return this.each(function() {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
        })
    }
}),
function(a) {
    "use strict";
    var b = {
        init: function(c) {
            return this.each(function() {
                this.self = a(this), b.destroy.call(this.self), this.opt = a.extend(!0, {}, a.fn.raty.defaults, c), b._adjustCallback.call(this), b._adjustNumber.call(this), b._adjustHints.call(this), this.opt.score = b._adjustedScore.call(this, this.opt.score), "img" !== this.opt.starType && b._adjustStarType.call(this), b._adjustPath.call(this), b._createStars.call(this), this.opt.cancel && b._createCancel.call(this), this.opt.precision && b._adjustPrecision.call(this), b._createScore.call(this), b._apply.call(this, this.opt.score), b._setTitle.call(this, this.opt.score), b._target.call(this, this.opt.score), this.opt.readOnly ? b._lock.call(this) : (this.style.cursor = "pointer", b._binds.call(this))
            })
        },
        _adjustCallback: function() {
            for (var a = ["number", "readOnly", "score", "scoreName", "target"], b = 0; b < a.length; b++) "function" == typeof this.opt[a[b]] && (this.opt[a[b]] = this.opt[a[b]].call(this))
        },
        _adjustedScore: function(a) {
            return a ? b._between(a, 0, this.opt.number) : a
        },
        _adjustHints: function() {
            if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half)
                for (var a = this.opt.precision ? 10 : 2, b = 0; b < this.opt.number; b++) {
                    var c = this.opt.hints[b];
                    "[object Array]" !== Object.prototype.toString.call(c) && (c = [c]), this.opt.hints[b] = [];
                    for (var d = 0; a > d; d++) {
                        var e = c[d],
                            f = c[c.length - 1];
                        void 0 === f && (f = null), this.opt.hints[b][d] = void 0 === e ? f : e
                    }
                }
        },
        _adjustNumber: function() {
            this.opt.number = b._between(this.opt.number, 1, this.opt.numberMax)
        },
        _adjustPath: function() {
            this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "index.html")
        },
        _adjustPrecision: function() {
            this.opt.half = !0
        },
        _adjustStarType: function() {
            var a = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
            this.opt.path = "";
            for (var b = 0; b < a.length; b++) this.opt[a[b]] = this.opt[a[b]].replace(".", "-")
        },
        _apply: function(a) {
            b._fill.call(this, a), a && (a > 0 && this.score.val(a), b._roundStars.call(this, a))
        },
        _between: function(a, b, c) {
            return Math.min(Math.max(parseFloat(a), b), c)
        },
        _binds: function() {
            this.cancel && (b._bindOverCancel.call(this), b._bindClickCancel.call(this), b._bindOutCancel.call(this)), b._bindOver.call(this), b._bindClick.call(this), b._bindOut.call(this)
        },
        _bindClick: function() {
            var c = this;
            c.stars.on("click.raty", function(d) {
                var e = !0,
                    f = c.opt.half || c.opt.precision ? c.self.data("score") : this.alt || a(this).data("alt");
                c.opt.click && (e = c.opt.click.call(c, +f, d)), (e || void 0 === e) && (c.opt.half && !c.opt.precision && (f = b._roundHalfScore.call(c, f)), b._apply.call(c, f))
            })
        },
        _bindClickCancel: function() {
            var a = this;
            a.cancel.on("click.raty", function(b) {
                a.score.removeAttr("value"), a.opt.click && a.opt.click.call(a, null, b)
            })
        },
        _bindOut: function() {
            var a = this;
            a.self.on("mouseleave.raty", function(c) {
                var d = +a.score.val() || void 0;
                b._apply.call(a, d), b._target.call(a, d, c), b._resetTitle.call(a), a.opt.mouseout && a.opt.mouseout.call(a, d, c)
            })
        },
        _bindOutCancel: function() {
            var a = this;
            a.cancel.on("mouseleave.raty", function(c) {
                var d = a.opt.cancelOff;
                if ("img" !== a.opt.starType && (d = a.opt.cancelClass + " " + d), b._setIcon.call(a, this, d), a.opt.mouseout) {
                    var e = +a.score.val() || void 0;
                    a.opt.mouseout.call(a, e, c)
                }
            })
        },
        _bindOver: function() {
            var a = this,
                c = a.opt.half ? "mousemove.raty" : "mouseover.raty";
            a.stars.on(c, function(c) {
                var d = b._getScoreByPosition.call(a, c, this);
                b._fill.call(a, d), a.opt.half && (b._roundStars.call(a, d, c), b._setTitle.call(a, d, c), a.self.data("score", d)), b._target.call(a, d, c), a.opt.mouseover && a.opt.mouseover.call(a, d, c)
            })
        },
        _bindOverCancel: function() {
            var a = this;
            a.cancel.on("mouseover.raty", function(c) {
                var d = a.opt.path + a.opt.starOff,
                    e = a.opt.cancelOn;
                "img" === a.opt.starType ? a.stars.attr("src", d) : (e = a.opt.cancelClass + " " + e, a.stars.attr("class", d)), b._setIcon.call(a, this, e), b._target.call(a, null, c), a.opt.mouseover && a.opt.mouseover.call(a, null)
            })
        },
        _buildScoreField: function() {
            return a("<input />", {
                name: this.opt.scoreName,
                type: "hidden"
            }).appendTo(this)
        },
        _createCancel: function() {
            var b = this.opt.path + this.opt.cancelOff,
                c = a("<" + this.opt.starType + " />", {
                    title: this.opt.cancelHint,
                    "class": this.opt.cancelClass
                });
            "img" === this.opt.starType ? c.attr({
                src: b,
                alt: "x"
            }) : c.attr("data-alt", "x").addClass(b), "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(c) : this.self.append("&#160;").append(c), this.cancel = c
        },
        _createScore: function() {
            var c = a(this.opt.targetScore);
            this.score = c.length ? c : b._buildScoreField.call(this)
        },
        _createStars: function() {
            for (var c = 1; c <= this.opt.number; c++) {
                var d = b._nameForIndex.call(this, c),
                    e = {
                        alt: c,
                        src: this.opt.path + this.opt[d]
                    };
                "img" !== this.opt.starType && (e = {
                    "data-alt": c,
                    "class": e.src
                }), e.title = b._getHint.call(this, c), a("<" + this.opt.starType + " />", e).appendTo(this), this.opt.space && this.self.append(c < this.opt.number ? "&#160;" : "")
            }
            this.stars = this.self.children(this.opt.starType)
        },
        _error: function(b) {
            a(this).text(b), a.error(b)
        },
        _fill: function(a) {
            for (var c = 0, d = 1; d <= this.stars.length; d++) {
                var e, f = this.stars[d - 1],
                    g = b._turnOn.call(this, d, a);
                if (this.opt.iconRange && this.opt.iconRange.length > c) {
                    var h = this.opt.iconRange[c];
                    e = b._getRangeIcon.call(this, h, g), d <= h.range && b._setIcon.call(this, f, e), d === h.range && c++
                } else e = this.opt[g ? "starOn" : "starOff"], b._setIcon.call(this, f, e)
            }
        },
        _getFirstDecimal: function(a) {
            var b = a.toString().split(".")[1],
                c = 0;
            return b && (c = parseInt(b.charAt(0), 10), "9999" === b.slice(1, 5) && c++), c
        },
        _getRangeIcon: function(a, b) {
            return b ? a.on || this.opt.starOn : a.off || this.opt.starOff
        },
        _getScoreByPosition: function(c, d) {
            var e = parseInt(d.alt || d.getAttribute("data-alt"), 10);
            if (this.opt.half) {
                var f = b._getWidth.call(this),
                    g = parseFloat((c.pageX - a(d).offset().left) / f);
                e = e - 1 + g
            }
            return e
        },
        _getHint: function(a, c) {
            if (0 !== a && !a) return this.opt.noRatedMsg;
            var d = b._getFirstDecimal.call(this, a),
                e = Math.ceil(a),
                f = this.opt.hints[(e || 1) - 1],
                g = f,
                h = !c || this.move;
            return this.opt.precision ? (h && (d = 0 === d ? 9 : d - 1), g = f[d]) : (this.opt.halfShow || this.opt.half) && (d = h && 0 === d ? 1 : d > 5 ? 1 : 0, g = f[d]), "" === g ? "" : g || a
        },
        _getWidth: function() {
            var a = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
            return a || b._error.call(this, "Could not get the icon width!"), a
        },
        _lock: function() {
            var a = b._getHint.call(this, this.score.val());
            this.style.cursor = "", this.title = a, this.score.prop("readonly", !0), this.stars.prop("title", a), this.cancel && this.cancel.hide(), this.self.data("readonly", !0)
        },
        _nameForIndex: function(a) {
            return this.opt.score && this.opt.score >= a ? "starOn" : "starOff"
        },
        _resetTitle: function() {
            for (var a = 0; a < this.opt.number; a++) this.stars[a].title = b._getHint.call(this, a + 1)
        },
        _roundHalfScore: function(a) {
            var c = parseInt(a, 10),
                d = b._getFirstDecimal.call(this, a);
            return 0 !== d && (d = d > 5 ? 1 : .5), c + d
        },
        _roundStars: function(a, c) {
            var d, e = (a % 1).toFixed(2);
            if (c || this.move ? d = e > .5 ? "starOn" : "starHalf" : e > this.opt.round.down && (d = "starOn", this.opt.halfShow && e < this.opt.round.up ? d = "starHalf" : e < this.opt.round.full && (d = "starOff")), d) {
                var f = this.opt[d],
                    g = this.stars[Math.ceil(a) - 1];
                b._setIcon.call(this, g, f)
            }
        },
        _setIcon: function(a, b) {
            a["img" === this.opt.starType ? "src" : "className"] = this.opt.path + b
        },
        _setTarget: function(a, b) {
            b && (b = this.opt.targetFormat.toString().replace("{score}", b)), a.is(":input") ? a.val(b) : a.html(b)
        },
        _setTitle: function(a, c) {
            if (a) {
                var d = parseInt(Math.ceil(a), 10),
                    e = this.stars[d - 1];
                e.title = b._getHint.call(this, a, c)
            }
        },
        _target: function(c, d) {
            if (this.opt.target) {
                var e = a(this.opt.target);
                e.length || b._error.call(this, "Target selector invalid or missing!");
                var f = d && "mouseover" === d.type;
                if (void 0 === c) c = this.opt.targetText;
                else if (null === c) c = f ? this.opt.cancelHint : this.opt.targetText;
                else {
                    "hint" === this.opt.targetType ? c = b._getHint.call(this, c, d) : this.opt.precision && (c = parseFloat(c).toFixed(1));
                    var g = d && "mousemove" === d.type;
                    f || g || this.opt.targetKeep || (c = this.opt.targetText)
                }
                b._setTarget.call(this, e, c)
            }
        },
        _turnOn: function(a, b) {
            return this.opt.single ? a === b : b >= a
        },
        _unlock: function() {
            this.style.cursor = "pointer", this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1);
            for (var a = 0; a < this.opt.number; a++) this.stars[a].title = b._getHint.call(this, a + 1);
            this.cancel && this.cancel.css("display", "")
        },
        cancel: function(c) {
            return this.each(function() {
                var d = a(this);
                d.data("readonly") !== !0 && (b[c ? "click" : "score"].call(d, null), this.score.removeAttr("value"))
            })
        },
        click: function(c) {
            return this.each(function() {
                a(this).data("readonly") !== !0 && (c = b._adjustedScore.call(this, c), b._apply.call(this, c), this.opt.click && this.opt.click.call(this, c, a.Event("click")), b._target.call(this, c))
            })
        },
        destroy: function() {
            return this.each(function() {
                var b = a(this),
                    c = b.data("raw");
                c ? b.off(".raty").empty().css({
                    cursor: c.style.cursor
                }).removeData("readonly") : b.data("raw", b.clone()[0])
            })
        },
        getScore: function() {
            var a, b = [];
            return this.each(function() {
                a = this.score.val(), b.push(a ? +a : void 0)
            }), b.length > 1 ? b : b[0]
        },
        move: function(c) {
            return this.each(function() {
                var d = parseInt(c, 10),
                    e = b._getFirstDecimal.call(this, c);
                d >= this.opt.number && (d = this.opt.number - 1, e = 10);
                var f = b._getWidth.call(this),
                    g = f / 10,
                    h = a(this.stars[d]),
                    i = h.offset().left + g * e,
                    j = a.Event("mousemove", {
                        pageX: i
                    });
                this.move = !0, h.trigger(j), this.move = !1
            })
        },
        readOnly: function(c) {
            return this.each(function() {
                var d = a(this);
                d.data("readonly") !== c && (c ? (d.off(".raty").children("img").off(".raty"), b._lock.call(this)) : (b._binds.call(this), b._unlock.call(this)), d.data("readonly", c))
            })
        },
        reload: function() {
            return b.set.call(this, {})
        },
        score: function() {
            var c = a(this);
            return arguments.length ? b.setScore.apply(c, arguments) : b.getScore.call(c)
        },
        set: function(b) {
            return this.each(function() {
                a(this).raty(a.extend({}, this.opt, b))
            })
        },
        setScore: function(c) {
            return this.each(function() {
                a(this).data("readonly") !== !0 && (c = b._adjustedScore.call(this, c), b._apply.call(this, c), b._target.call(this, c))
            })
        }
    };
    a.fn.raty = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist!") : b.init.apply(this, arguments)
    }, a.fn.raty.defaults = {
        cancel: !1,
        cancelClass: "raty-cancel",
        cancelHint: "Cancel this rating!",
        cancelOff: "cancel-off.png",
        cancelOn: "cancel-on.png",
        cancelPlace: "left",
        click: void 0,
        half: !1,
        halfShow: !0,
        hints: ["bad", "poor", "regular", "good", "gorgeous"],
        iconRange: void 0,
        mouseout: void 0,
        mouseover: void 0,
        noRatedMsg: "Not rated yet!",
        number: 5,
        numberMax: 20,
        path: void 0,
        precision: !1,
        readOnly: !1,
        round: {
            down: .25,
            full: .6,
            up: .76
        },
        score: void 0,
        scoreName: "score",
        single: !1,
        space: !0,
        starHalf: "star-half.png",
        starOff: "star-off.png",
        starOn: "star-on.png",
        starType: "img",
        target: void 0,
        targetFormat: "{score}",
        targetKeep: !1,
        targetScore: void 0,
        targetText: "",
        targetType: "hint"
    }
}(jQuery),
function(a, b, c, d) {
    function f(b, c) {
        this.element = b, this.options = a.extend(!0, {}, i, c), this.options.share = c.share, this._defaults = i, this._name = h, this.init()
    }
    if ("undefined" == typeof g) var g = [];
    var h = "sharrre",
        i = {
            className: "",
            share: {
                googlePlus: !1,
                facebook: !1,
                twitter: !1,
                digg: !1,
                delicious: !1,
                stumbleupon: !1,
                linkedin: !1,
                pinterest: !1
            },
            shareTotal: 0,
            template: "",
            title: "",
            url: c.location.href,
            text: c.title,
            urlCurl: "",
            count: {},
            total: 0,
            shorterTotal: !0,
            enableHover: !0,
            enableCounter: !0,
            enableTracking: !1,
            hover: function() {},
            hide: function() {},
            click: function() {},
            render: function() {},
            buttons: {
                googlePlus: {
                    url: "",
                    urlCount: !1,
                    size: "medium",
                    lang: "en-US",
                    annotation: ""
                },
                facebook: {
                    url: "",
                    urlCount: !1,
                    action: "like",
                    layout: "button_count",
                    width: "",
                    send: "false",
                    faces: "false",
                    colorscheme: "",
                    font: "",
                    lang: "en_US"
                },
                twitter: {
                    url: "",
                    urlCount: !1,
                    count: "horizontal",
                    hashtags: "",
                    via: "",
                    related: "",
                    lang: "en"
                },
                digg: {
                    url: "",
                    urlCount: !1,
                    type: "DiggCompact"
                },
                delicious: {
                    url: "",
                    urlCount: !1,
                    size: "medium"
                },
                stumbleupon: {
                    url: "",
                    urlCount: !1,
                    layout: "1"
                },
                linkedin: {
                    url: "",
                    urlCount: !1,
                    counter: ""
                },
                pinterest: {
                    url: "",
                    media: "",
                    description: "",
                    layout: "horizontal"
                }
            }
        },
        j = {
            googlePlus: "",
            facebook: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
            twitter: "http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
            digg: "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
            delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
            stumbleupon: "",
            linkedin: "http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            pinterest: "http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"
        },
        k = {
            googlePlus: function(d) {
                var e = d.options.buttons.googlePlus;
                a(d.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="' + e.size + '" data-href="' + ("" !== e.url ? e.url : d.options.url) + '" data-annotation="' + e.annotation + '"></div></div>'), b.___gcfg = {
                    lang: d.options.buttons.googlePlus.lang
                };
                var f = 0;
                "undefined" == typeof gapi && 0 == f ? (f = 1, function() {
                    var a = c.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = "../apis.google.com/js/plusone.html";
                    var b = c.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }()) : gapi.plusone.go()
            },
            facebook: function(b) {
                var d = b.options.buttons.facebook;
                a(b.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' + ("" !== d.url ? d.url : b.options.url) + '" data-send="' + d.send + '" data-layout="' + d.layout + '" data-width="' + d.width + '" data-show-faces="' + d.faces + '" data-action="' + d.action + '" data-colorscheme="' + d.colorscheme + '" data-font="' + d.font + '" data-via="' + d.via + '"></div></div>');
                var e = 0;
                "undefined" == typeof FB && 0 == e ? (e = 1, function(a, b, c) {
                    var e, f = a.getElementsByTagName(b)[0];
                    a.getElementById(c) || (e = a.createElement(b), e.id = c, e.src = "//connect.facebook.net/" + d.lang + "/all.js#xfbml=1", f.parentNode.insertBefore(e, f))
                }(c, "script", "facebook-jssdk")) : FB.XFBML.parse()
            },
            twitter: function(b) {
                var d = b.options.buttons.twitter;
                a(b.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + ("" !== d.url ? d.url : b.options.url) + '" data-count="' + d.count + '" data-text="' + b.options.text + '" data-via="' + d.via + '" data-hashtags="' + d.hashtags + '" data-related="' + d.related + '" data-lang="' + d.lang + '">Tweet</a></div>');
                var e = 0;
                "undefined" == typeof twttr && 0 == e ? (e = 1, function() {
                    var a = c.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = "https://twitter.com/tweetrobi";
                    var b = c.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }()) : a.ajax({
                    url: "//platform.twitter.com/widgets.js",
                    dataType: "script",
                    cache: !0
                })
            },
            digg: function(b) {
                var d = b.options.buttons.digg;
                a(b.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton ' + d.type + '" rel="nofollow external" href="http://digg.com/submit?url=' + encodeURIComponent("" !== d.url ? d.url : b.options.url) + '"></a></div>');
                var e = 0;
                "undefined" == typeof __DBW && 0 == e && (e = 1, function() {
                    var a = c.createElement("SCRIPT"),
                        b = c.getElementsByTagName("SCRIPT")[0];
                    a.type = "text/javascript", a.async = !0, a.src = "../widgets.digg.com/buttons.html", b.parentNode.insertBefore(a, b)
                }())
            },
            delicious: function(b) {
                if ("tall" == b.options.buttons.delicious.size) var c = "width:50px;",
                    d = "height:35px;width:50px;font-size:15px;line-height:35px;",
                    e = "height:18px;line-height:18px;margin-top:3px;";
                else var c = "width:93px;",
                    d = "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
                    e = "float:left;height:20px;line-height:20px;";
                var f = b.shorterTotal(b.options.count.delicious);
                "undefined" == typeof f && (f = 0), a(b.element).find(".buttons").append('<div class="button delicious"><div style="' + c + 'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="' + d + 'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' + f + '</div><div style="' + e + 'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'),
                    a(b.element).find(".delicious").on("click", function() {
                        b.openPopup("delicious")
                    })
            },
            stumbleupon: function(d) {
                var e = d.options.buttons.stumbleupon;
                a(d.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="' + e.layout + '" location="' + ("" !== e.url ? e.url : d.options.url) + '"></su:badge></div>');
                var f = 0;
                "undefined" == typeof STMBLPN && 0 == f ? (f = 1, function() {
                    var a = c.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = "../platform.stumbleupon.com/1/widgets.html";
                    var b = c.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }(), s = b.setTimeout(function() {
                    "undefined" != typeof STMBLPN && (STMBLPN.processWidgets(), clearInterval(s))
                }, 500)) : STMBLPN.processWidgets()
            },
            linkedin: function(d) {
                var e = d.options.buttons.linkedin;
                a(d.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="' + ("" !== e.url ? e.url : d.options.url) + '" data-counter="' + e.counter + '"></script></div>');
                var f = 0;
                "undefined" == typeof b.IN && 0 == f ? (f = 1, function() {
                    var a = c.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = "../platform.linkedin.com/in.js";
                    var b = c.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }()) : b.IN.init()
            },
            pinterest: function(b) {
                var d = b.options.buttons.pinterest;
                a(b.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url=' + ("" !== d.url ? d.url : b.options.url) + "&media=" + d.media + "&description=" + d.description + '" class="pin-it-button" count-layout="' + d.layout + '">Pin It</a></div>'),
                    function() {
                        var a = c.createElement("script");
                        a.type = "text/javascript", a.async = !0, a.src = "../assets.pinterest.com/js/pinit.html";
                        var b = c.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b)
                    }()
            }
        },
        l = {
            googlePlus: function() {},
            facebook: function() {
                fb = b.setInterval(function() {
                    "undefined" != typeof FB && (FB.Event.subscribe("edge.create", function(a) {
                        g.push(["_trackSocial", "facebook", "like", a])
                    }), FB.Event.subscribe("edge.remove", function(a) {
                        g.push(["_trackSocial", "facebook", "unlike", a])
                    }), FB.Event.subscribe("message.send", function(a) {
                        g.push(["_trackSocial", "facebook", "send", a])
                    }), clearInterval(fb))
                }, 1e3)
            },
            twitter: function() {
                tw = b.setInterval(function() {
                    "undefined" != typeof twttr && (twttr.events.bind("tweet", function(a) {
                        a && g.push(["_trackSocial", "twitter", "tweet"])
                    }), clearInterval(tw))
                }, 1e3)
            },
            digg: function() {},
            delicious: function() {},
            stumbleupon: function() {},
            linkedin: function() {},
            pinterest: function() {}
        },
        m = {
            googlePlus: function(a) {
                b.open("https://plus.google.com/share?hl=" + a.buttons.googlePlus.lang + "&url=" + encodeURIComponent("" !== a.buttons.googlePlus.url ? a.buttons.googlePlus.url : a.url), "", "toolbar=0, status=0, width=900, height=500")
            },
            facebook: function(a) {
                b.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("" !== a.buttons.facebook.url ? a.buttons.facebook.url : a.url) + "&t=" + a.text, "", "toolbar=0, status=0, width=900, height=500")
            },
            twitter: function(a) {
                b.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(a.text) + "&url=" + encodeURIComponent("" !== a.buttons.twitter.url ? a.buttons.twitter.url : a.url) + ("" !== a.buttons.twitter.via ? "&via=" + a.buttons.twitter.via : ""), "", "toolbar=0, status=0, width=650, height=360")
            },
            digg: function(a) {
                b.open("http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent("" !== a.buttons.digg.url ? a.buttons.digg.url : a.url) + "&title=" + a.text + "&related=true&style=true", "", "toolbar=0, status=0, width=650, height=360")
            },
            delicious: function(a) {
                b.open("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent("" !== a.buttons.delicious.url ? a.buttons.delicious.url : a.url) + "&title=" + a.text, "delicious", "toolbar=no,width=550,height=550")
            },
            stumbleupon: function(a) {
                b.open("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent("" !== a.buttons.delicious.url ? a.buttons.delicious.url : a.url), "stumbleupon", "toolbar=no,width=550,height=550")
            },
            linkedin: function(a) {
                b.open("https://www.linkedin.com/cws/share?url=" + encodeURIComponent("" !== a.buttons.delicious.url ? a.buttons.delicious.url : a.url) + "&token=&isFramed=true", "linkedin", "toolbar=no,width=550,height=550")
            },
            pinterest: function(a) {
                b.open("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent("" !== a.buttons.pinterest.url ? a.buttons.pinterest.url : a.url) + "&media=" + encodeURIComponent(a.buttons.pinterest.media) + "&description=" + a.buttons.pinterest.description, "pinterest", "toolbar=no,width=700,height=300")
            }
        };
    f.prototype.init = function() {
        var b = this;
        if ("" !== this.options.urlCurl) {
            var c = this.options.urlCurl.search("\\?") < 0 ? "?" : "&";
            j.googlePlus = this.options.urlCurl + c + "url={url}&type=googlePlus", j.stumbleupon = this.options.urlCurl + c + "?url={url}&type=stumbleupon"
        }
        a(this.element).addClass(this.options.className), "undefined" != typeof a(this.element).data("title") && (this.options.title = a(this.element).attr("data-title")), "undefined" != typeof a(this.element).data("url") && (this.options.url = a(this.element).data("url")), "undefined" != typeof a(this.element).data("text") && (this.options.text = a(this.element).data("text")), a.each(this.options.share, function(a, c) {
            c === !0 && b.options.shareTotal++
        }), b.options.enableCounter === !0 ? a.each(this.options.share, function(a, c) {
            if (c === !0) try {
                b.getSocialJson(a)
            } catch (d) {}
        }) : "" !== b.options.template ? this.options.render(this, this.options) : this.loadButtons(), a(this.element).hover(function() {
            0 === a(this).find(".buttons").length && b.options.enableHover === !0 && b.loadButtons(), b.options.hover(b, b.options)
        }, function() {
            b.options.hide(b, b.options)
        }), a(this.element).click(function() {
            return b.options.click(b, b.options), !1
        })
    }, f.prototype.loadButtons = function() {
        var b = this;
        a(this.element).append('<div class="buttons"></div>'), a.each(b.options.share, function(a, c) {
            1 == c && (k[a](b), b.options.enableTracking === !0 && l[a]())
        })
    }, f.prototype.getSocialJson = function(b) {
        var c = this,
            d = 0,
            e = j[b].replace("{url}", encodeURIComponent(this.options.url));
        this.options.buttons[b].urlCount === !0 && "" !== this.options.buttons[b].url && (e = j[b].replace("{url}", this.options.buttons[b].url)), "" != e && "" !== c.options.urlCurl ? a.getJSON(e, function(a) {
            if ("undefined" != typeof a.count) {
                var e = a.count + "";
                e = e.replace("Â ", ""), d += parseInt(e, 10)
            } else a.data && a.data.length > 0 && "undefined" != typeof a.data[0].total_count ? d += parseInt(a.data[0].total_count, 10) : "undefined" != typeof a[0] ? d += parseInt(a[0].total_posts, 10) : "undefined" != typeof a[0];
            c.options.count[b] = d, c.options.total += d, c.renderer(), c.rendererPerso()
        }).error(function() {
            c.options.count[b] = 0, c.rendererPerso()
        }) : (c.renderer(), c.options.count[b] = 0, c.rendererPerso())
    }, f.prototype.rendererPerso = function() {
        var a = 0;
        for (e in this.options.count) a++;
        a === this.options.shareTotal && this.options.render(this, this.options)
    }, f.prototype.renderer = function() {
        var b = this.options.total,
            c = this.options.template;
        this.options.shorterTotal === !0 && (b = this.shorterTotal(b)), "" !== c ? (c = c.replace("{total}", b), a(this.element).html(c)) : a(this.element).html('<div class="box"><a class="count" href="#">' + b + "</a>" + ("" !== this.options.title ? '<a class="share" href="#">' + this.options.title + "</a>" : "") + "</div>")
    }, f.prototype.shorterTotal = function(a) {
        return a >= 1e6 ? a = (a / 1e6).toFixed(2) + "M" : a >= 1e3 && (a = (a / 1e3).toFixed(1) + "k"), a
    }, f.prototype.openPopup = function(a) {
        if (m[a](this.options), this.options.enableTracking === !0) {
            var b = {
                googlePlus: {
                    site: "Google",
                    action: "+1"
                },
                facebook: {
                    site: "facebook",
                    action: "like"
                },
                twitter: {
                    site: "twitter",
                    action: "tweet"
                },
                digg: {
                    site: "digg",
                    action: "add"
                },
                delicious: {
                    site: "delicious",
                    action: "add"
                },
                stumbleupon: {
                    site: "stumbleupon",
                    action: "add"
                },
                linkedin: {
                    site: "linkedin",
                    action: "share"
                },
                pinterest: {
                    site: "pinterest",
                    action: "pin"
                }
            };
            g.push(["_trackSocial", b[a].site, b[a].action])
        }
    }, f.prototype.simulateClick = function() {
        var b = a(this.element).html();
        a(this.element).html(b.replace(this.options.total, this.options.total + 1))
    }, f.prototype.update = function(a, b) {
        "" !== a && (this.options.url = a), "" !== b && (this.options.text = b)
    }, a.fn[h] = function(b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function() {
            a.data(this, "plugin_" + h) || a.data(this, "plugin_" + h, new f(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
            var d = a.data(this, "plugin_" + h);
            d instanceof f && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1))
        }) : void 0
    }
}(jQuery, window, document),
function(a, b) {
    "use strict";
    a.HoverDir = function(b, c) {
        this.$el = a(c), this._init(b)
    }, a.HoverDir.defaults = {
        speed: 300,
        easing: "ease",
        hoverDelay: 0,
        inverse: !1
    }, a.HoverDir.prototype = {
        _init: function(b) {
            this.options = a.extend(!0, {}, a.HoverDir.defaults, b), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = !0, this._loadEvents()
        },
        _loadEvents: function() {
            var b = this;
            this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(c) {
                var d = a(this),
                    e = d.find("div"),
                    f = b._getDir(d, {
                        x: c.pageX,
                        y: c.pageY
                    }),
                    g = b._getStyle(f);
                "mouseenter" === c.type ? (e.hide().css(g.from), clearTimeout(b.tmhover), b.tmhover = setTimeout(function() {
                    e.show(0, function() {
                        var c = a(this);
                        b.support && c.css("transition", b.transitionProp), b._applyAnimation(c, g.to, b.options.speed)
                    })
                }, b.options.hoverDelay)) : (b.support && e.css("transition", b.transitionProp), clearTimeout(b.tmhover), b._applyAnimation(e, g.from, b.options.speed))
            })
        },
        _getDir: function(a, b) {
            var c = a.width(),
                d = a.height(),
                e = (b.x - a.offset().left - c / 2) * (c > d ? d / c : 1),
                f = (b.y - a.offset().top - d / 2) * (d > c ? c / d : 1),
                g = Math.round((Math.atan2(f, e) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            return g
        },
        _getStyle: function(a) {
            var b, c, d = {
                    left: "0px",
                    top: "-100%"
                },
                e = {
                    left: "0px",
                    top: "100%"
                },
                f = {
                    left: "-100%",
                    top: "0px"
                },
                g = {
                    left: "100%",
                    top: "0px"
                },
                h = {
                    top: "0px"
                },
                i = {
                    left: "0px"
                };
            switch (a) {
                case 0:
                    b = this.options.inverse ? e : d, c = h;
                    break;
                case 1:
                    b = this.options.inverse ? f : g, c = i;
                    break;
                case 2:
                    b = this.options.inverse ? d : e, c = h;
                    break;
                case 3:
                    b = this.options.inverse ? g : f, c = i
            }
            return {
                from: b,
                to: c
            }
        },
        _applyAnimation: function(b, c, d) {
            a.fn.applyStyle = this.support ? a.fn.css : a.fn.animate, b.stop().applyStyle(c, a.extend(!0, [], {
                duration: d + "ms"
            }))
        }
    };
    var c = function(a) {
        b.console && b.console.error(a)
    };
    a.fn.hoverdir = function(b) {
        var d = a.data(this, "hoverdir");
        if ("string" == typeof b) {
            var e = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                return d ? a.isFunction(d[b]) && "_" !== b.charAt(0) ? void d[b].apply(d, e) : void c("no such method '" + b + "' for hoverdir instance") : void c("cannot call methods on hoverdir prior to initialization; attempted to call method '" + b + "'")
            })
        } else this.each(function() {
            d ? d._init() : d = a.data(this, "hoverdir", new a.HoverDir(b, this))
        });
        return d
    }
}(jQuery, window);