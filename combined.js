/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function (a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a) {
            return n.each(this, a)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function () {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function (b) {
                return b = +b, ha(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function (a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function (a) {
                    return function (b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function (a) {
                    return a = a.replace(ba, ca),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function (a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Y.test(a.nodeName)
                },
                input: function (a) {
                    return X.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function () {
                    return [0]
                }),
                last: na(function (a, b) {
                    return [b - 1]
                }),
                eq: na(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
                    return a === b
                }, h, !0), l = ra(function (a) {
                    return J(b, a) > -1
                }, h, !0), m = [function (a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function (a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function (a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function (a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function (a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return u(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function (a) {
            return F(a, "nextSibling")
        },
        prev: function (a) {
            return F(a, "previousSibling")
        },
        nextAll: function (a) {
            return u(a, "nextSibling")
        },
        prevAll: function (a) {
            return u(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return v(a.firstChild)
        },
        contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function () {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function () {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function (b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function () {
                    return n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function (a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = g = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = !0, c || j.disable(), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function () {
                    return j.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function (b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function () {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function (a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function (a, b, c) {
                return R(a, b, c)
            },
            removeData: function (a, b) {
                return S(a, b)
            },
            _data: function (a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function (a) {
                return this.each(function () {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function () {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function () {
            var a;
            l.shrinkWrapBlocks = function () {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function () {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function () {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function (a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function () {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function (a) {
            return Ia(this, a, !0)
        },
        remove: function (a) {
            return Ia(this, a)
        },
        text: function (a) {
            return Y(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        },
        html: function (a) {
            return Y(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return Ha(this, arguments, function (b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function () {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function () {
                    return null == b && k(), f
                },
                boxSizingReliable: function () {
                    return null == b && k(), e
                },
                pixelMarginRight: function () {
                    return null == b && k(), c
                },
                pixelPosition: function () {
                    return null == b && k(), b
                },
                reliableMarginRight: function () {
                    return null == b && k(), g
                },
                reliableMarginLeft: function () {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function (a) {
        return a.currentStyle
    }, Sa = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function (a, b) {
            return Y(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return cb(this, !0)
        },
        hide: function () {
            return cb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function () {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function (a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function () {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            n.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function () {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function (a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function () {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function () {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function (b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function (a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function (a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function () {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function (d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function (a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function () {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function (e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return Y(this, function (a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
! function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.videojs = a()
    }
}(function () {
    var a;
    return function b(a, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!a[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                a[g][0].call(k.exports, function (b) {
                    var c = a[g][1][b];
                    return e(c ? c : b)
                }, k, k.exports, b, a, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(2),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-big-play-button"
                    }, b.prototype.handleClick = function (a) {
                        this.player_.play()
                    }, b
                }(i["default"]);
            l.prototype.controlText_ = "Play Video", k["default"].registerComponent("BigPlayButton", l), c["default"] = l
        }, {
            2: 2,
            5: 5
        }],
        2: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(3),
                i = d(h),
                j = a(5),
                k = d(j),
                l = a(86),
                m = d(l),
                n = a(88),
                o = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.createEl = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "button",
                            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        b = (0, n.assign)({
                            className: this.buildCSSClass()
                        }, b), "button" !== a && (m["default"].warn("Creating a Button with an HTML element of " + a + " is deprecated; use ClickableComponent instead."), b = (0, n.assign)({
                            tabIndex: 0
                        }, b), c = (0, n.assign)({
                            role: "button"
                        }, c)), c = (0, n.assign)({
                            type: "button",
                            "aria-live": "polite"
                        }, c);
                        var d = k["default"].prototype.createEl.call(this, a, b, c);
                        return this.createControlTextEl(d), d
                    }, b.prototype.addChild = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = this.constructor.name;
                        return m["default"].warn("Adding an actionable (user controllable) child to a Button (" + c + ") is not supported; use a ClickableComponent instead."), k["default"].prototype.addChild.call(this, a, b)
                    }, b.prototype.enable = function () {
                        a.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                    }, b.prototype.disable = function () {
                        a.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                    }, b.prototype.handleKeyPress = function (b) {
                        32 !== b.which && 13 !== b.which && a.prototype.handleKeyPress.call(this, b)
                    }, b
                }(i["default"]);
            k["default"].registerComponent("Button", o), c["default"] = o
        }, {
            3: 3,
            5: 5,
            86: 86,
            88: 88
        }],
        3: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(82),
                n = d(m),
                o = a(83),
                p = d(o),
                q = a(86),
                r = e(q),
                s = a(94),
                t = e(s),
                u = a(88),
                v = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.emitTapEvents(), e.enable(), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        c = (0, u.assign)({
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, c), "button" === b && r["default"].error("Creating a ClickableComponent with an HTML element of " + b + " is not supported; use a Button instead."), d = (0, u.assign)({
                            role: "button",
                            "aria-live": "polite"
                        }, d), this.tabIndex_ = c.tabIndex;
                        var e = a.prototype.createEl.call(this, b, c, d);
                        return this.createControlTextEl(e), e
                    }, b.prototype.createControlTextEl = function (a) {
                        return this.controlTextEl_ = l.createEl("span", {
                            className: "vjs-control-text"
                        }), a && a.appendChild(this.controlTextEl_), this.controlText(this.controlText_, a), this.controlTextEl_
                    }, b.prototype.controlText = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                        if (!a) return this.controlText_ || "Need Text";
                        var c = this.localize(a);
                        return this.controlText_ = a, this.controlTextEl_.innerHTML = c, b.setAttribute("title", c), this
                    }, b.prototype.buildCSSClass = function () {
                        return "vjs-control vjs-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.enable = function () {
                        return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this
                    }, b.prototype.disable = function () {
                        return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("tap", this.handleClick), this.off("click", this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this
                    }, b.prototype.handleClick = function (a) {}, b.prototype.handleFocus = function (a) {
                        n.on(t["default"], "keydown", p.bind(this, this.handleKeyPress))
                    }, b.prototype.handleKeyPress = function (b) {
                        32 === b.which || 13 === b.which ? (b.preventDefault(), this.handleClick(b)) : a.prototype.handleKeyPress && a.prototype.handleKeyPress.call(this, b)
                    }, b.prototype.handleBlur = function (a) {
                        n.off(t["default"], "keydown", p.bind(this, this.handleKeyPress))
                    }, b
                }(j["default"]);
            j["default"].registerComponent("ClickableComponent", v), c["default"] = v
        }, {
            5: 5,
            81: 81,
            82: 82,
            83: 83,
            86: 86,
            88: 88,
            94: 94
        }],
        4: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(2),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d) {
                        e(this, b);
                        var g = f(this, a.call(this, c, d));
                        return g.controlText(d && d.controlText || g.localize("Close")), g
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-close-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function (a) {
                        this.trigger({
                            type: "close",
                            bubbles: !1
                        })
                    }, b
                }(i["default"]);
            k["default"].registerComponent("CloseButton", l), c["default"] = l
        }, {
            2: 2,
            5: 5
        }],
        5: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }
            c.__esModule = !0;
            var g = a(95),
                h = e(g),
                i = a(81),
                j = d(i),
                k = a(83),
                l = d(k),
                m = a(85),
                n = d(m),
                o = a(82),
                p = d(o),
                q = a(86),
                r = e(q),
                s = a(91),
                t = e(s),
                u = a(87),
                v = e(u),
                w = function () {
                    function a(b, c, d) {
                        if (f(this, a), !b && this.play ? this.player_ = b = this : this.player_ = b, this.options_ = (0, v["default"])({}, this.options_), c = this.options_ = (0, v["default"])(this.options_, c), this.id_ = c.id || c.el && c.el.id, !this.id_) {
                            var e = b && b.id && b.id() || "no_player";
                            this.id_ = e + "_component_" + n.newGUID()
                        }
                        this.name_ = c.name || null, c.el ? this.el_ = c.el : c.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, c.initChildren !== !1 && this.initChildren(), this.ready(d), c.reportTouchActivity !== !1 && this.enableTouchActivity()
                    }
                    return a.prototype.dispose = function () {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var a = this.children_.length - 1; a >= 0; a--) this.children_[a].dispose && this.children_[a].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), j.removeElData(this.el_), this.el_ = null
                    }, a.prototype.player = function () {
                        return this.player_
                    }, a.prototype.options = function (a) {
                        return r["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), a ? (this.options_ = (0, v["default"])(this.options_, a), this.options_) : this.options_
                    }, a.prototype.el = function () {
                        return this.el_
                    }, a.prototype.createEl = function (a, b, c) {
                        return j.createEl(a, b, c)
                    }, a.prototype.localize = function (a) {
                        var b = this.player_.language && this.player_.language(),
                            c = this.player_.languages && this.player_.languages();
                        if (!b || !c) return a;
                        var d = c[b];
                        if (d && d[a]) return d[a];
                        var e = b.split("-")[0],
                            f = c[e];
                        return f && f[a] ? f[a] : a
                    }, a.prototype.contentEl = function () {
                        return this.contentEl_ || this.el_
                    }, a.prototype.id = function () {
                        return this.id_
                    }, a.prototype.name = function () {
                        return this.name_
                    }, a.prototype.children = function () {
                        return this.children_
                    }, a.prototype.getChildById = function (a) {
                        return this.childIndex_[a]
                    }, a.prototype.getChild = function (a) {
                        if (a) return a = (0, t["default"])(a), this.childNameIndex_[a]
                    }, a.prototype.addChild = function (b) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                            e = void 0,
                            f = void 0;
                        if ("string" == typeof b) {
                            f = (0, t["default"])(b), c || (c = {}), c === !0 && (r["default"].warn("Initializing a child component with `true` is deprecated.Children should be defined in an array when possible, but if necessary use an object instead of `true`."), c = {});
                            var g = c.componentClass || f;
                            c.name = f;
                            var h = a.getComponent(g);
                            if (!h) throw new Error("Component " + g + " does not exist");
                            if ("function" != typeof h) return null;
                            e = new h(this.player_ || this, c)
                        } else e = b;
                        if (this.children_.splice(d, 0, e), "function" == typeof e.id && (this.childIndex_[e.id()] = e), f = f || e.name && e.name(), f && (this.childNameIndex_[f] = e), "function" == typeof e.el && e.el()) {
                            var i = this.contentEl().children,
                                j = i[d] || null;
                            this.contentEl().insertBefore(e.el(), j)
                        }
                        return e
                    }, a.prototype.removeChild = function (a) {
                        if ("string" == typeof a && (a = this.getChild(a)), a && this.children_) {
                            for (var b = !1, c = this.children_.length - 1; c >= 0; c--)
                                if (this.children_[c] === a) {
                                    b = !0, this.children_.splice(c, 1);
                                    break
                                }
                            if (b) {
                                this.childIndex_[a.id()] = null, this.childNameIndex_[a.name()] = null;
                                var d = a.el();
                                d && d.parentNode === this.contentEl() && this.contentEl().removeChild(a.el())
                            }
                        }
                    }, a.prototype.initChildren = function () {
                        var b = this,
                            c = this.options_.children;
                        c && ! function () {
                            var d = b.options_,
                                e = function (a) {
                                    var c = a.name,
                                        e = a.opts;
                                    if (void 0 !== d[c] && (e = d[c]), e !== !1) {
                                        e === !0 && (e = {}), e.playerOptions = b.options_.playerOptions;
                                        var f = b.addChild(c, e);
                                        f && (b[c] = f)
                                    }
                                },
                                f = void 0,
                                g = a.getComponent("Tech");
                            f = Array.isArray(c) ? c : Object.keys(c), f.concat(Object.keys(b.options_).filter(function (a) {
                                return !f.some(function (b) {
                                    return "string" == typeof b ? a === b : a === b.name
                                })
                            })).map(function (a) {
                                var d = void 0,
                                    e = void 0;
                                return "string" == typeof a ? (d = a, e = c[d] || b.options_[d] || {}) : (d = a.name, e = a), {
                                    name: d,
                                    opts: e
                                }
                            }).filter(function (b) {
                                var c = a.getComponent(b.opts.componentClass || (0, t["default"])(b.name));
                                return c && !g.isTech(c)
                            }).forEach(e)
                        }()
                    }, a.prototype.buildCSSClass = function () {
                        return ""
                    }, a.prototype.on = function (a, b, c) {
                        var d = this;
                        return "string" == typeof a || Array.isArray(a) ? p.on(this.el_, a, l.bind(this, b)) : ! function () {
                            var e = a,
                                f = b,
                                g = l.bind(d, c),
                                h = function () {
                                    return d.off(e, f, g)
                                };
                            h.guid = g.guid, d.on("dispose", h);
                            var i = function () {
                                return d.off("dispose", h)
                            };
                            i.guid = g.guid, a.nodeName ? (p.on(e, f, g), p.on(e, "dispose", i)) : "function" == typeof a.on && (e.on(f, g), e.on("dispose", i))
                        }(), this
                    }, a.prototype.off = function (a, b, c) {
                        if (!a || "string" == typeof a || Array.isArray(a)) p.off(this.el_, a, b);
                        else {
                            var d = a,
                                e = b,
                                f = l.bind(this, c);
                            this.off("dispose", f), a.nodeName ? (p.off(d, e, f), p.off(d, "dispose", f)) : (d.off(e, f), d.off("dispose", f))
                        }
                        return this
                    }, a.prototype.one = function (a, b, c) {
                        var d = this,
                            e = arguments;
                        return "string" == typeof a || Array.isArray(a) ? p.one(this.el_, a, l.bind(this, b)) : ! function () {
                            var f = a,
                                g = b,
                                h = l.bind(d, c),
                                i = function j() {
                                    d.off(f, g, j), h.apply(null, e)
                                };
                            i.guid = h.guid, d.on(f, g, i)
                        }(), this
                    }, a.prototype.trigger = function (a, b) {
                        return p.trigger(this.el_, a, b), this
                    }, a.prototype.ready = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return a && (this.isReady_ ? b ? a.call(this) : this.setTimeout(a, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(a))), this
                    }, a.prototype.triggerReady = function () {
                        this.isReady_ = !0, this.setTimeout(function () {
                            var a = this.readyQueue_;
                            this.readyQueue_ = [], a && a.length > 0 && a.forEach(function (a) {
                                a.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, a.prototype.$ = function (a, b) {
                        return j.$(a, b || this.contentEl())
                    }, a.prototype.$$ = function (a, b) {
                        return j.$$(a, b || this.contentEl())
                    }, a.prototype.hasClass = function (a) {
                        return j.hasElClass(this.el_, a)
                    }, a.prototype.addClass = function (a) {
                        return j.addElClass(this.el_, a), this
                    }, a.prototype.removeClass = function (a) {
                        return j.removeElClass(this.el_, a), this
                    }, a.prototype.toggleClass = function (a, b) {
                        return j.toggleElClass(this.el_, a, b), this
                    }, a.prototype.show = function () {
                        return this.removeClass("vjs-hidden"), this
                    }, a.prototype.hide = function () {
                        return this.addClass("vjs-hidden"), this
                    }, a.prototype.lockShowing = function () {
                        return this.addClass("vjs-lock-showing"), this
                    }, a.prototype.unlockShowing = function () {
                        return this.removeClass("vjs-lock-showing"), this
                    }, a.prototype.getAttribute = function (a) {
                        return j.getAttribute(this.el_, a)
                    }, a.prototype.setAttribute = function (a, b) {
                        return j.setAttribute(this.el_, a, b), this
                    }, a.prototype.removeAttribute = function (a) {
                        return j.removeAttribute(this.el_, a), this
                    }, a.prototype.width = function (a, b) {
                        return this.dimension("width", a, b)
                    }, a.prototype.height = function (a, b) {
                        return this.dimension("height", a, b)
                    }, a.prototype.dimensions = function (a, b) {
                        return this.width(a, !0).height(b)
                    }, a.prototype.dimension = function (a, b, c) {
                        if (void 0 !== b) return null !== b && b === b || (b = 0), ("" + b).indexOf("%") !== -1 || ("" + b).indexOf("px") !== -1 ? this.el_.style[a] = b : "auto" === b ? this.el_.style[a] = "" : this.el_.style[a] = b + "px", c || this.trigger("resize"), this;
                        if (!this.el_) return 0;
                        var d = this.el_.style[a],
                            e = d.indexOf("px");
                        return e !== -1 ? parseInt(d.slice(0, e), 10) : parseInt(this.el_["offset" + (0, t["default"])(a)], 10)
                    }, a.prototype.currentDimension = function (a) {
                        var b = 0;
                        if ("width" !== a && "height" !== a) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof h["default"].getComputedStyle) {
                            var c = h["default"].getComputedStyle(this.el_);
                            b = c.getPropertyValue(a) || c[a]
                        }
                        if (b = parseFloat(b), 0 === b) {
                            var d = "offset" + (0, t["default"])(a);
                            b = this.el_[d]
                        }
                        return b
                    }, a.prototype.currentDimensions = function () {
                        return {
                            width: this.currentDimension("width"),
                            height: this.currentDimension("height")
                        }
                    }, a.prototype.currentWidth = function () {
                        return this.currentDimension("width")
                    }, a.prototype.currentHeight = function () {
                        return this.currentDimension("height")
                    }, a.prototype.emitTapEvents = function () {
                        var a = 0,
                            b = null,
                            c = 10,
                            d = 200,
                            e = void 0;
                        this.on("touchstart", function (c) {
                            1 === c.touches.length && (b = {
                                pageX: c.touches[0].pageX,
                                pageY: c.touches[0].pageY
                            }, a = (new Date).getTime(), e = !0)
                        }), this.on("touchmove", function (a) {
                            if (a.touches.length > 1) e = !1;
                            else if (b) {
                                var d = a.touches[0].pageX - b.pageX,
                                    f = a.touches[0].pageY - b.pageY,
                                    g = Math.sqrt(d * d + f * f);
                                g > c && (e = !1)
                            }
                        });
                        var f = function () {
                            e = !1
                        };
                        this.on("touchleave", f), this.on("touchcancel", f), this.on("touchend", function (c) {
                            if (b = null, e === !0) {
                                var f = (new Date).getTime() - a;
                                f < d && (c.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, a.prototype.enableTouchActivity = function () {
                        if (this.player() && this.player().reportUserActivity) {
                            var a = l.bind(this.player(), this.player().reportUserActivity),
                                b = void 0;
                            this.on("touchstart", function () {
                                a(), this.clearInterval(b), b = this.setInterval(a, 250)
                            });
                            var c = function (c) {
                                a(), this.clearInterval(b)
                            };
                            this.on("touchmove", a), this.on("touchend", c), this.on("touchcancel", c)
                        }
                    }, a.prototype.setTimeout = function (a, b) {
                        a = l.bind(this, a);
                        var c = h["default"].setTimeout(a, b),
                            d = function () {
                                this.clearTimeout(c)
                            };
                        return d.guid = "vjs-timeout-" + c, this.on("dispose", d), c
                    }, a.prototype.clearTimeout = function (a) {
                        h["default"].clearTimeout(a);
                        var b = function () {};
                        return b.guid = "vjs-timeout-" + a, this.off("dispose", b), a
                    }, a.prototype.setInterval = function (a, b) {
                        a = l.bind(this, a);
                        var c = h["default"].setInterval(a, b),
                            d = function () {
                                this.clearInterval(c)
                            };
                        return d.guid = "vjs-interval-" + c, this.on("dispose", d), c
                    }, a.prototype.clearInterval = function (a) {
                        h["default"].clearInterval(a);
                        var b = function () {};
                        return b.guid = "vjs-interval-" + a, this.off("dispose", b), a
                    }, a.registerComponent = function (b, c) {
                        if (b) return b = (0, t["default"])(b), a.components_ || (a.components_ = {}), "Player" === b && a.components_[b] && ! function () {
                            var c = a.components_[b];
                            if (c.players && Object.keys(c.players).length > 0 && Object.keys(c.players).map(function (a) {
                                    return c.players[a]
                                }).every(Boolean)) throw new Error("Can not register Player component after player has been created")
                        }(), a.components_[b] = c, c
                    }, a.getComponent = function (b) {
                        if (b) return b = (0, t["default"])(b), a.components_ && a.components_[b] ? a.components_[b] : h["default"] && h["default"].videojs && h["default"].videojs[b] ? (r["default"].warn("The " + b + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), h["default"].videojs[b]) : void 0
                    }, a.extend = function (b) {
                        b = b || {}, r["default"].warn("Component.extend({}) has been deprecated,  use videojs.extend(Component, {}) instead");
                        var c = b.init || b.init || this.prototype.init || this.prototype.init || function () {},
                            d = function () {
                                c.apply(this, arguments)
                            };
                        d.prototype = Object.create(this.prototype), d.prototype.constructor = d, d.extend = a.extend;
                        for (var e in b) b.hasOwnProperty(e) && (d.prototype[e] = b[e]);
                        return d
                    }, a
                }();
            w.registerComponent("Component", w), c["default"] = w
        }, {
            81: 81,
            82: 82,
            83: 83,
            85: 85,
            86: 86,
            87: 87,
            91: 91,
            95: 95
        }],
        6: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(36),
                i = d(h),
                j = a(5),
                k = d(j),
                l = a(7),
                m = d(l),
                n = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e(this, b), d.tracks = c.audioTracks && c.audioTracks();
                        var g = f(this, a.call(this, c, d));
                        return g.el_.setAttribute("aria-label", "Audio Menu"), g
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-audio-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.createItems = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            b = this.player_.audioTracks && this.player_.audioTracks();
                        if (!b) return a;
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            a.push(new m["default"](this.player_, {
                                track: d,
                                selectable: !0
                            }))
                        }
                        return a
                    }, b
                }(i["default"]);
            n.prototype.controlText_ = "Audio Track", k["default"].registerComponent("AudioTrackButton", n), c["default"] = n
        }, {
            36: 36,
            5: 5,
            7: 7
        }],
        7: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(48),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = d.track,
                            h = c.audioTracks();
                        d.label = e.label || e.language || "Unknown", d.selected = e.enabled;
                        var i = g(this, a.call(this, c, d));
                        return i.track = e, h && ! function () {
                            var a = n.bind(i, i.handleTracksChange);
                            h.addEventListener("change", a), i.on("dispose", function () {
                                h.removeEventListener("change", a)
                            })
                        }(), i
                    }
                    return h(b, a), b.prototype.handleClick = function (b) {
                        var c = this.player_.audioTracks();
                        if (a.prototype.handleClick.call(this, b), c)
                            for (var d = 0; d < c.length; d++) {
                                var e = c[d];
                                e.enabled = e === this.track
                            }
                    }, b.prototype.handleTracksChange = function (a) {
                        this.selected(this.track.enabled)
                    }, b
                }(j["default"]);
            l["default"].registerComponent("AudioTrackMenuItem", o), c["default"] = o
        }, {
            48: 48,
            5: 5,
            83: 83
        }],
        8: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h);
            a(12), a(32), a(33), a(35), a(34), a(10), a(18), a(9), a(38), a(40), a(11), a(25), a(27), a(29), a(24), a(6), a(13), a(21);
            var j = function (a) {
                function b() {
                    return e(this, b), f(this, a.apply(this, arguments))
                }
                return g(b, a), b.prototype.createEl = function () {
                    return a.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    }, {
                        role: "group"
                    })
                }, b
            }(i["default"]);
            j.prototype.options_ = {
                children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "audioTrackButton", "fullscreenToggle"]
            }, i["default"].registerComponent("ControlBar", j), c["default"] = j
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            18: 18,
            21: 21,
            24: 24,
            25: 25,
            27: 27,
            29: 29,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            38: 38,
            40: 40,
            5: 5,
            6: 6,
            9: 9
        }],
        9: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(2),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d) {
                        e(this, b);
                        var g = f(this, a.call(this, c, d));
                        return g.on(c, "fullscreenchange", g.handleFullscreenChange), g
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-fullscreen-control " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleFullscreenChange = function (a) {
                        this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                    }, b.prototype.handleClick = function (a) {
                        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                    }, b
                }(i["default"]);
            l.prototype.controlText_ = "Fullscreen", k["default"].registerComponent("FullscreenToggle", l), c["default"] = l
        }, {
            2: 2,
            5: 5
        }],
        10: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.updateShowing(), e.on(e.player(), "durationchange", e.updateShowing), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, "div", {
                            className: "vjs-live-control vjs-control"
                        });
                        return this.contentEl_ = l.createEl("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                        }, {
                            "aria-live": "off"
                        }), b.appendChild(this.contentEl_), b
                    }, b.prototype.updateShowing = function (a) {
                        this.player().duration() === 1 / 0 ? this.show() : this.hide()
                    }, b
                }(j["default"]);
            j["default"].registerComponent("LiveDisplay", m), c["default"] = m
        }, {
            5: 5,
            81: 81
        }],
        11: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(2),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(81),
                n = d(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.on(c, "volumechange", e.update), c.tech_ && c.tech_.featuresVolumeControl === !1 && e.addClass("vjs-hidden"), e.on(c, "loadstart", function () {
                            this.update(), c.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }), e
                    }
                    return h(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-mute-control " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function (a) {
                        this.player_.muted(!this.player_.muted())
                    }, b.prototype.update = function (a) {
                        var b = this.player_.volume(),
                            c = 3;
                        0 === b || this.player_.muted() ? c = 0 : b < .33 ? c = 1 : b < .67 && (c = 2);
                        var d = this.player_.muted() ? "Unmute" : "Mute";
                        this.controlText() !== d && this.controlText(d);
                        for (var e = 0; e < 4; e++) n.removeElClass(this.el_, "vjs-vol-" + e);
                        n.addElClass(this.el_, "vjs-vol-" + c)
                    }, b
                }(j["default"]);
            o.prototype.controlText_ = "Mute", l["default"].registerComponent("MuteToggle", o), c["default"] = o
        }, {
            2: 2,
            5: 5,
            81: 81
        }],
        12: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(2),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d) {
                        e(this, b);
                        var g = f(this, a.call(this, c, d));
                        return g.on(c, "play", g.handlePlay), g.on(c, "pause", g.handlePause), g
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-play-control " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function (a) {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, b.prototype.handlePlay = function (a) {
                        this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, b.prototype.handlePause = function (a) {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, b
                }(i["default"]);
            l.prototype.controlText_ = "Play", k["default"].registerComponent("PlayToggle", l), c["default"] = l
        }, {
            2: 2,
            5: 5
        }],
        13: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(47),
                j = e(i),
                k = a(49),
                l = e(k),
                m = a(14),
                n = e(m),
                o = a(5),
                p = e(o),
                q = a(81),
                r = d(q),
                s = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.updateVisibility(), e.updateLabel(), e.on(c, "loadstart", e.updateVisibility), e.on(c, "ratechange", e.updateLabel), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this);
                        return this.labelEl_ = r.createEl("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: 1
                        }), b.appendChild(this.labelEl_), b
                    }, b.prototype.buildCSSClass = function () {
                        return "vjs-playback-rate " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.createMenu = function () {
                        var a = new l["default"](this.player()),
                            b = this.playbackRates();
                        if (b)
                            for (var c = b.length - 1; c >= 0; c--) a.addChild(new n["default"](this.player(), {
                                rate: b[c] + "x"
                            }));
                        return a
                    }, b.prototype.updateARIAAttributes = function () {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, b.prototype.handleClick = function (a) {
                        for (var b = this.player().playbackRate(), c = this.playbackRates(), d = c[0], e = 0; e < c.length; e++)
                            if (c[e] > b) {
                                d = c[e];
                                break
                            }
                        this.player().playbackRate(d)
                    }, b.prototype.playbackRates = function () {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, b.prototype.playbackRateSupported = function () {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, b.prototype.updateVisibility = function (a) {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, b.prototype.updateLabel = function (a) {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, b
                }(j["default"]);
            s.prototype.controlText_ = "Playback Rate", p["default"].registerComponent("PlaybackRateMenuButton", s), c["default"] = s
        }, {
            14: 14,
            47: 47,
            49: 49,
            5: 5,
            81: 81
        }],
        14: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(48),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d) {
                        e(this, b);
                        var g = d.rate,
                            h = parseFloat(g, 10);
                        d.label = g, d.selected = 1 === h;
                        var i = f(this, a.call(this, c, d));
                        return i.label = g, i.rate = h, i.on(c, "ratechange", i.update), i
                    }
                    return g(b, a), b.prototype.handleClick = function (b) {
                        a.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, b.prototype.update = function (a) {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, b
                }(i["default"]);
            l.prototype.contentElType = "button", k["default"].registerComponent("PlaybackRateMenuItem", l), c["default"] = l
        }, {
            48: 48,
            5: 5
        }],
        15: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.partEls_ = [], e.on(c, "progress", e.update), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                        })
                    }, b.prototype.update = function (a) {
                        var b = this.player_.buffered(),
                            c = this.player_.duration(),
                            d = this.player_.bufferedEnd(),
                            e = this.partEls_,
                            f = function (a, b) {
                                var c = a / b || 0;
                                return 100 * (c >= 1 ? 1 : c) + "%"
                            };
                        this.el_.style.width = f(d, c);
                        for (var g = 0; g < b.length; g++) {
                            var h = b.start(g),
                                i = b.end(g),
                                j = e[g];
                            j || (j = this.el_.appendChild(l.createEl()), e[g] = j), j.style.left = f(h, d), j.style.width = f(i - h, d)
                        }
                        for (var k = e.length; k > b.length; k--) this.el_.removeChild(e[k - 1]);
                        e.length = b.length
                    }, b
                }(j["default"]);
            j["default"].registerComponent("LoadProgressBar", m), c["default"] = m
        }, {
            5: 5,
            81: 81
        }],
        16: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(83),
                n = d(m),
                o = a(84),
                p = e(o),
                q = a(80),
                r = e(q),
                s = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return d.playerOptions && d.playerOptions.controlBar && d.playerOptions.controlBar.progressControl && d.playerOptions.controlBar.progressControl.keepTooltipsInside && (e.keepTooltipsInside = d.playerOptions.controlBar.progressControl.keepTooltipsInside), e.keepTooltipsInside && (e.tooltip = l.createEl("div", {
                            className: "vjs-time-tooltip"
                        }), e.el().appendChild(e.tooltip), e.addClass("vjs-keep-tooltips-inside")), e.update(0, 0), c.on("ready", function () {
                            e.on(c.controlBar.progressControl.el(), "mousemove", n.throttle(n.bind(e, e.handleMouseMove), 25))
                        }), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-mouse-display"
                        })
                    }, b.prototype.handleMouseMove = function (a) {
                        var b = this.player_.duration(),
                            c = this.calculateDistance(a) * b,
                            d = a.pageX - l.findElPosition(this.el().parentNode).left;
                        this.update(c, d)
                    }, b.prototype.update = function (a, b) {
                        var c = (0, p["default"])(a, this.player_.duration());
                        if (this.el().style.left = b + "px", this.el().setAttribute("data-current-time", c), this.keepTooltipsInside) {
                            var d = this.clampPosition_(b),
                                e = b - d + 1,
                                f = parseFloat((0, r["default"])(this.tooltip, "width")),
                                g = f / 2;
                            this.tooltip.innerHTML = c, this.tooltip.style.right = "-" + (g - e) + "px"
                        }
                    }, b.prototype.calculateDistance = function (a) {
                        return l.getPointerPosition(this.el().parentNode, a).x
                    }, b.prototype.clampPosition_ = function (a) {
                        if (!this.keepTooltipsInside) return a;
                        var b = parseFloat((0, r["default"])(this.player().el(), "width")),
                            c = parseFloat((0, r["default"])(this.tooltip, "width")),
                            d = c / 2,
                            e = a;
                        return a < d ? e = Math.ceil(d) : a > b - d && (e = Math.floor(b - d)), e
                    }, b
                }(j["default"]);
            j["default"].registerComponent("MouseTimeDisplay", s), c["default"] = s
        }, {
            5: 5,
            80: 80,
            81: 81,
            83: 83,
            84: 84
        }],
        17: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(83),
                l = d(k),
                m = a(84),
                n = e(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.updateDataAttr(), e.on(c, "timeupdate", e.updateDataAttr), c.ready(l.bind(e, e.updateDataAttr)), d.playerOptions && d.playerOptions.controlBar && d.playerOptions.controlBar.progressControl && d.playerOptions.controlBar.progressControl.keepTooltipsInside && (e.keepTooltipsInside = d.playerOptions.controlBar.progressControl.keepTooltipsInside), e.keepTooltipsInside && e.addClass("vjs-keep-tooltips-inside"), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        })
                    }, b.prototype.updateDataAttr = function (a) {
                        var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("data-current-time", (0, n["default"])(b, this.player_.duration()))
                    }, b
                }(j["default"]);
            j["default"].registerComponent("PlayProgressBar", o), c["default"] = o
        }, {
            5: 5,
            83: 83,
            84: 84
        }],
        18: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h);
            a(19), a(16);
            var j = function (a) {
                function b() {
                    return e(this, b), f(this, a.apply(this, arguments))
                }
                return g(b, a), b.prototype.createEl = function () {
                    return a.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-control vjs-control"
                    })
                }, b
            }(i["default"]);
            j.prototype.options_ = {
                children: ["seekBar"]
            }, i["default"].registerComponent("ProgressControl", j), c["default"] = j
        }, {
            16: 16,
            19: 19,
            5: 5
        }],
        19: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(57),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = a(84),
                p = e(o),
                q = a(80),
                r = e(q);
            a(15), a(17), a(20);
            var s = function (a) {
                function b(c, d) {
                    f(this, b);
                    var e = g(this, a.call(this, c, d));
                    return e.on(c, "timeupdate", e.updateProgress), e.on(c, "ended", e.updateProgress), c.ready(n.bind(e, e.updateProgress)), d.playerOptions && d.playerOptions.controlBar && d.playerOptions.controlBar.progressControl && d.playerOptions.controlBar.progressControl.keepTooltipsInside && (e.keepTooltipsInside = d.playerOptions.controlBar.progressControl.keepTooltipsInside), e.keepTooltipsInside && (e.tooltipProgressBar = e.addChild("TooltipProgressBar")), e
                }
                return h(b, a), b.prototype.createEl = function () {
                    return a.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-holder"
                    }, {
                        "aria-label": "progress bar"
                    })
                }, b.prototype.updateProgress = function (a) {
                    if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) {
                        this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;
                        var b = parseFloat((0, r["default"])(this.player().el(), "width")),
                            c = parseFloat((0, r["default"])(this.tooltipProgressBar.tooltip, "width")),
                            d = this.tooltipProgressBar.el().style;
                        d.maxWidth = Math.floor(b - c / 2) + "px", d.minWidth = Math.ceil(c / 2) + "px", d.right = "-" + c / 2 + "px"
                    }
                }, b.prototype.updateAriaAttributes = function (a) {
                    var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    a.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), a.setAttribute("aria-valuetext", (0, p["default"])(b, this.player_.duration()))
                }, b.prototype.getPercent = function () {
                    var a = this.player_.currentTime() / this.player_.duration();
                    return a >= 1 ? 1 : a
                }, b.prototype.handleMouseDown = function (b) {
                    a.prototype.handleMouseDown.call(this, b), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
                }, b.prototype.handleMouseMove = function (a) {
                    var b = this.calculateDistance(a) * this.player_.duration();
                    b === this.player_.duration() && (b -= .1), this.player_.currentTime(b)
                }, b.prototype.handleMouseUp = function (b) {
                    a.prototype.handleMouseUp.call(this, b), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                }, b.prototype.stepForward = function () {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, b.prototype.stepBack = function () {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, b
            }(j["default"]);
            s.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, s.prototype.playerEvent = "timeupdate", l["default"].registerComponent("SeekBar", s), c["default"] = s
        }, {
            15: 15,
            17: 17,
            20: 20,
            5: 5,
            57: 57,
            80: 80,
            83: 83,
            84: 84
        }],
        20: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(83),
                l = d(k),
                m = a(84),
                n = e(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.updateDataAttr(), e.on(c, "timeupdate", e.updateDataAttr), c.ready(l.bind(e, e.updateDataAttr)), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, "div", {
                            className: "vjs-tooltip-progress-bar vjs-slider-bar",
                            innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        });
                        return this.tooltip = b.querySelector(".vjs-time-tooltip"), b
                    }, b.prototype.updateDataAttr = function (a) {
                        var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            c = (0, n["default"])(b, this.player_.duration());
                        this.el_.setAttribute("data-current-time", c), this.tooltip.innerHTML = c
                    }, b
                }(j["default"]);
            j["default"].registerComponent("TooltipProgressBar", o), c["default"] = o
        }, {
            5: 5,
            83: 83,
            84: 84
        }],
        21: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(22),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-custom-control-spacer " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, {
                            className: this.buildCSSClass()
                        });
                        return b.innerHTML = "&nbsp;", b
                    }, b
                }(i["default"]);
            k["default"].registerComponent("CustomControlSpacer", l), c["default"] = l
        }, {
            22: 22,
            5: 5
        }],
        22: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h),
                j = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-spacer " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, b
                }(i["default"]);
            i["default"].registerComponent("Spacer", j), c["default"] = j
        }, {
            5: 5
        }],
        23: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(31),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d) {
                        e(this, b), d.track = {
                            player: c,
                            kind: d.kind,
                            label: d.kind + " settings",
                            selectable: !1,
                            "default": !1,
                            mode: "disabled"
                        }, d.selectable = !1;
                        var g = f(this, a.call(this, c, d));
                        return g.addClass("vjs-texttrack-settings"), g.controlText(", opens " + d.kind + " settings dialog"), g
                    }
                    return g(b, a), b.prototype.handleClick = function (a) {
                        this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus()
                    }, b
                }(i["default"]);
            k["default"].registerComponent("CaptionSettingsMenuItem", l), c["default"] = l
        }, {
            31: 31,
            5: 5
        }],
        24: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(30),
                i = d(h),
                j = a(5),
                k = d(j),
                l = a(23),
                m = d(l),
                n = function (a) {
                    function b(c, d, g) {
                        e(this, b);
                        var h = f(this, a.call(this, c, d, g));
                        return h.el_.setAttribute("aria-label", "Captions Menu"), h
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-captions-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.update = function (b) {
                        var c = 2;
                        a.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (c = 1), this.items && this.items.length > c ? this.show() : this.hide()
                    }, b.prototype.createItems = function () {
                        var b = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || b.push(new m["default"](this.player_, {
                            kind: this.kind_
                        })), a.prototype.createItems.call(this, b)
                    }, b
                }(i["default"]);
            n.prototype.kind_ = "captions", n.prototype.controlText_ = "Captions", k["default"].registerComponent("CaptionsButton", n), c["default"] = n
        }, {
            23: 23,
            30: 30,
            5: 5
        }],
        25: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(30),
                i = d(h),
                j = a(5),
                k = d(j),
                l = a(26),
                m = d(l),
                n = a(91),
                o = d(n),
                p = function (a) {
                    function b(c, d, g) {
                        e(this, b);
                        var h = f(this, a.call(this, c, d, g));
                        return h.el_.setAttribute("aria-label", "Chapters Menu"), h
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-chapters-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.update = function (b) {
                        this.track_ && (!b || "addtrack" !== b.type && "removetrack" !== b.type) || this.setTrack(this.findChaptersTrack()), a.prototype.update.call(this)
                    }, b.prototype.setTrack = function (a) {
                        if (this.track_ !== a) {
                            if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                                var b = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                b && b.removeEventListener("load", this.updateHandler_), this.track_ = null
                            }
                            if (this.track_ = a, this.track_) {
                                this.track_.mode = "hidden";
                                var c = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                c && c.addEventListener("load", this.updateHandler_)
                            }
                        }
                    }, b.prototype.findChaptersTrack = function () {
                        for (var a = this.player_.textTracks() || [], b = a.length - 1; b >= 0; b--) {
                            var c = a[b];
                            if (c.kind === this.kind_) return c
                        }
                    }, b.prototype.getMenuCaption = function () {
                        return this.track_ && this.track_.label ? this.track_.label : this.localize((0, o["default"])(this.kind_))
                    }, b.prototype.createMenu = function () {
                        return this.options_.title = this.getMenuCaption(), a.prototype.createMenu.call(this)
                    }, b.prototype.createItems = function () {
                        var a = [];
                        if (!this.track_) return a;
                        var b = this.track_.cues;
                        if (!b) return a;
                        for (var c = 0, d = b.length; c < d; c++) {
                            var e = b[c],
                                f = new m["default"](this.player_, {
                                    track: this.track_,
                                    cue: e
                                });
                            a.push(f)
                        }
                        return a
                    }, b
                }(i["default"]);
            p.prototype.kind_ = "chapters", p.prototype.controlText_ = "Chapters", k["default"].registerComponent("ChaptersButton", p), c["default"] = p
        }, {
            26: 26,
            30: 30,
            5: 5,
            91: 91
        }],
        26: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(48),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = d.track,
                            h = d.cue,
                            i = c.currentTime();
                        d.selectable = !0, d.label = h.text, d.selected = h.startTime <= i && i < h.endTime;
                        var j = g(this, a.call(this, c, d));
                        return j.track = e, j.cue = h, e.addEventListener("cuechange", n.bind(j, j.update)), j
                    }
                    return h(b, a), b.prototype.handleClick = function (b) {
                        a.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, b.prototype.update = function (a) {
                        var b = this.cue,
                            c = this.player_.currentTime();
                        this.selected(b.startTime <= c && c < b.endTime)
                    }, b
                }(j["default"]);
            l["default"].registerComponent("ChaptersTrackMenuItem", o), c["default"] = o
        }, {
            48: 48,
            5: 5,
            83: 83
        }],
        27: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(30),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = function (a) {
                    function b(c, d, e) {
                        f(this, b);
                        var h = g(this, a.call(this, c, d, e));
                        h.el_.setAttribute("aria-label", "Descriptions Menu");
                        var i = c.textTracks();
                        return i && ! function () {
                            var a = n.bind(h, h.handleTracksChange);
                            i.addEventListener("change", a), h.on("dispose", function () {
                                i.removeEventListener("change", a)
                            })
                        }(), h
                    }
                    return h(b, a), b.prototype.handleTracksChange = function (a) {
                        for (var b = this.player().textTracks(), c = !1, d = 0, e = b.length; d < e; d++) {
                            var f = b[d];
                            if (f.kind !== this.kind_ && "showing" === f.mode) {
                                c = !0;
                                break
                            }
                        }
                        c ? this.disable() : this.enable()
                    }, b.prototype.buildCSSClass = function () {
                        return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this)
                    }, b
                }(j["default"]);
            o.prototype.kind_ = "descriptions", o.prototype.controlText_ = "Descriptions", l["default"].registerComponent("DescriptionsButton", o), c["default"] = o
        }, {
            30: 30,
            5: 5,
            83: 83
        }],
        28: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(31),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d) {
                        e(this, b), d.track = {
                            player: c,
                            kind: d.kind,
                            label: d.kind + " off",
                            "default": !1,
                            mode: "disabled"
                        }, d.selectable = !0;
                        var g = f(this, a.call(this, c, d));
                        return g.selected(!0), g
                    }
                    return g(b, a), b.prototype.handleTracksChange = function (a) {
                        for (var b = this.player().textTracks(), c = !0, d = 0, e = b.length; d < e; d++) {
                            var f = b[d];
                            if (f.kind === this.track.kind && "showing" === f.mode) {
                                c = !1;
                                break
                            }
                        }
                        this.selected(c)
                    }, b
                }(i["default"]);
            k["default"].registerComponent("OffTextTrackMenuItem", l), c["default"] = l
        }, {
            31: 31,
            5: 5
        }],
        29: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(30),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c, d, g) {
                        e(this, b);
                        var h = f(this, a.call(this, c, d, g));
                        return h.el_.setAttribute("aria-label", "Subtitles Menu"), h
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-subtitles-button " + a.prototype.buildCSSClass.call(this)
                    }, b
                }(i["default"]);
            l.prototype.kind_ = "subtitles", l.prototype.controlText_ = "Subtitles", k["default"].registerComponent("SubtitlesButton", l), c["default"] = l
        }, {
            30: 30,
            5: 5
        }],
        30: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(36),
                i = d(h),
                j = a(5),
                k = d(j),
                l = a(31),
                m = d(l),
                n = a(28),
                o = d(n),
                p = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e(this, b), d.tracks = c.textTracks(), f(this, a.call(this, c, d))
                    }
                    return g(b, a), b.prototype.createItems = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        a.push(new o["default"](this.player_, {
                            kind: this.kind_
                        }));
                        var b = this.player_.textTracks();
                        if (!b) return a;
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.kind === this.kind_ && a.push(new m["default"](this.player_, {
                                track: d,
                                selectable: !0
                            }))
                        }
                        return a
                    }, b
                }(i["default"]);
            k["default"].registerComponent("TextTrackButton", p), c["default"] = p
        }, {
            28: 28,
            31: 31,
            36: 36,
            5: 5
        }],
        31: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                    return typeof a
                } : function (a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                },
                j = a(48),
                k = e(j),
                l = a(5),
                m = e(l),
                n = a(83),
                o = d(n),
                p = a(95),
                q = e(p),
                r = a(94),
                s = e(r),
                t = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = d.track,
                            h = c.textTracks();
                        d.label = e.label || e.language || "Unknown", d.selected = e["default"] || "showing" === e.mode;
                        var j = g(this, a.call(this, c, d));
                        return j.track = e, h && ! function () {
                            var a = o.bind(j, j.handleTracksChange);
                            h.addEventListener("change", a), j.on("dispose", function () {
                                h.removeEventListener("change", a)
                            })
                        }(), h && void 0 === h.onchange && ! function () {
                            var a = void 0;
                            j.on(["tap", "click"], function () {
                                if ("object" !== i(q["default"].Event)) try {
                                    a = new q["default"].Event("change")
                                } catch (b) {}
                                a || (a = s["default"].createEvent("Event"), a.initEvent("change", !0, !0)), h.dispatchEvent(a)
                            })
                        }(), j
                    }
                    return h(b, a), b.prototype.handleClick = function (b) {
                        var c = this.track.kind,
                            d = this.player_.textTracks();
                        if (a.prototype.handleClick.call(this, b), d)
                            for (var e = 0; e < d.length; e++) {
                                var f = d[e];
                                f.kind === c && (f === this.track ? f.mode = "showing" : f.mode = "disabled")
                            }
                    }, b.prototype.handleTracksChange = function (a) {
                        this.selected("showing" === this.track.mode)
                    }, b
                }(k["default"]);
            m["default"].registerComponent("TextTrackMenuItem", t), c["default"] = t
        }, {
            48: 48,
            5: 5,
            83: 83,
            94: 94,
            95: 95
        }],
        32: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(84),
                n = e(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.on(c, "timeupdate", e.updateContent), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, "div", {
                            className: "vjs-current-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = l.createEl("div", {
                            className: "vjs-current-time-display",
                            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                        }, {
                            "aria-live": "off"
                        }), b.appendChild(this.contentEl_), b
                    }, b.prototype.updateContent = function (a) {
                        var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            c = this.localize("Current Time"),
                            d = (0, n["default"])(b, this.player_.duration());
                        d !== this.formattedTime_ && (this.formattedTime_ = d, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + c + "</span> " + d)
                    }, b
                }(j["default"]);
            j["default"].registerComponent("CurrentTimeDisplay", o), c["default"] = o
        }, {
            5: 5,
            81: 81,
            84: 84
        }],
        33: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(84),
                n = e(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.on(c, "durationchange", e.updateContent), e.on(c, "timeupdate", e.updateContent), e.on(c, "loadedmetadata", e.updateContent), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, "div", {
                            className: "vjs-duration vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = l.createEl("div", {
                            className: "vjs-duration-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                        }, {
                            "aria-live": "off"
                        }), b.appendChild(this.contentEl_), b
                    }, b.prototype.updateContent = function (a) {
                        var b = this.player_.duration();
                        if (b && this.duration_ !== b) {
                            this.duration_ = b;
                            var c = this.localize("Duration Time"),
                                d = (0, n["default"])(b);
                            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + c + "</span> " + d
                        }
                    }, b
                }(j["default"]);
            j["default"].registerComponent("DurationDisplay", o), c["default"] = o
        }, {
            5: 5,
            81: 81,
            84: 84
        }],
        34: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(84),
                n = e(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.on(c, "timeupdate", e.updateContent), e.on(c, "durationchange", e.updateContent), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, "div", {
                            className: "vjs-remaining-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = l.createEl("div", {
                            className: "vjs-remaining-time-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                        }, {
                            "aria-live": "off"
                        }), b.appendChild(this.contentEl_), b
                    }, b.prototype.updateContent = function (a) {
                        if (this.player_.duration()) {
                            var b = this.localize("Remaining Time"),
                                c = (0, n["default"])(this.player_.remainingTime());
                            c !== this.formattedTime_ && (this.formattedTime_ = c, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + b + "</span> -" + c)
                        }
                    }, b
                }(j["default"]);
            j["default"].registerComponent("RemainingTimeDisplay", o), c["default"] = o
        }, {
            5: 5,
            81: 81,
            84: 84
        }],
        35: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h),
                j = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        })
                    }, b
                }(i["default"]);
            i["default"].registerComponent("TimeDivider", j), c["default"] = j
        }, {
            5: 5
        }],
        36: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(47),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = d.tracks,
                            h = g(this, a.call(this, c, d));
                        if (h.items.length <= 1 && h.hide(), !e) return g(h);
                        var i = n.bind(h, h.update);
                        return e.addEventListener("removetrack", i), e.addEventListener("addtrack", i), h.player_.on("dispose", function () {
                            e.removeEventListener("removetrack", i), e.removeEventListener("addtrack", i)
                        }), h
                    }
                    return h(b, a), b
                }(j["default"]);
            l["default"].registerComponent("TrackButton", o), c["default"] = o
        }, {
            47: 47,
            5: 5,
            83: 83
        }],
        37: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(57),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m);
            a(39);
            var o = function (a) {
                function b(c, d) {
                    f(this, b);
                    var e = g(this, a.call(this, c, d));
                    return e.on(c, "volumechange", e.updateARIAAttributes), c.ready(n.bind(e, e.updateARIAAttributes)), e
                }
                return h(b, a), b.prototype.createEl = function () {
                    return a.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-bar vjs-slider-bar"
                    }, {
                        "aria-label": "volume level"
                    })
                }, b.prototype.handleMouseMove = function (a) {
                    this.checkMuted(), this.player_.volume(this.calculateDistance(a))
                }, b.prototype.checkMuted = function () {
                    this.player_.muted() && this.player_.muted(!1)
                }, b.prototype.getPercent = function () {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, b.prototype.stepForward = function () {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, b.prototype.stepBack = function () {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, b.prototype.updateARIAAttributes = function (a) {
                    var b = (100 * this.player_.volume()).toFixed(2);
                    this.el_.setAttribute("aria-valuenow", b), this.el_.setAttribute("aria-valuetext", b + "%")
                }, b
            }(j["default"]);
            o.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, o.prototype.playerEvent = "volumechange", l["default"].registerComponent("VolumeBar", o), c["default"] = o
        }, {
            39: 39,
            5: 5,
            57: 57,
            83: 83
        }],
        38: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h);
            a(37);
            var j = function (a) {
                function b(c, d) {
                    e(this, b);
                    var g = f(this, a.call(this, c, d));
                    return c.tech_ && c.tech_.featuresVolumeControl === !1 && g.addClass("vjs-hidden"), g.on(c, "loadstart", function () {
                        c.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    }), g
                }
                return g(b, a), b.prototype.createEl = function () {
                    return a.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-control vjs-control"
                    })
                }, b
            }(i["default"]);
            j.prototype.options_ = {
                children: ["volumeBar"]
            }, i["default"].registerComponent("VolumeControl", j), c["default"] = j
        }, {
            37: 37,
            5: 5
        }],
        39: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h),
                j = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, b
                }(i["default"]);
            i["default"].registerComponent("VolumeLevel", j), c["default"] = j
        }, {
            5: 5
        }],
        40: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(83),
                j = e(i),
                k = a(5),
                l = d(k),
                m = a(54),
                n = d(m),
                o = a(53),
                p = d(o),
                q = a(11),
                r = d(q),
                s = a(37),
                t = d(s),
                u = function (a) {
                    function b(c) {
                        function d() {
                            c.tech_ && c.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        f(this, b), void 0 === e.inline && (e.inline = !0), void 0 === e.vertical && (e.inline ? e.vertical = !1 : e.vertical = !0), e.volumeBar = e.volumeBar || {}, e.volumeBar.vertical = !!e.vertical;
                        var h = g(this, a.call(this, c, e));
                        return h.on(c, "volumechange", h.volumeUpdate), h.on(c, "loadstart", h.volumeUpdate), d.call(h), h.on(c, "loadstart", d), h.on(h.volumeBar, ["slideractive", "focus"], function () {
                            this.addClass("vjs-slider-active")
                        }), h.on(h.volumeBar, ["sliderinactive", "blur"], function () {
                            this.removeClass("vjs-slider-active")
                        }), h.on(h.volumeBar, ["focus"], function () {
                            this.addClass("vjs-lock-showing")
                        }), h.on(h.volumeBar, ["blur"], function () {
                            this.removeClass("vjs-lock-showing")
                        }), h
                    }
                    return h(b, a), b.prototype.buildCSSClass = function () {
                        var b = "";
                        return b = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + a.prototype.buildCSSClass.call(this) + " " + b
                    }, b.prototype.createPopup = function () {
                        var a = new n["default"](this.player_, {
                                contentElType: "div"
                            }),
                            b = new t["default"](this.player_, this.options_.volumeBar);
                        return a.addChild(b), this.menuContent = a, this.volumeBar = b, this.attachVolumeBarEvents(), a
                    }, b.prototype.handleClick = function (b) {
                        r["default"].prototype.handleClick.call(this), a.prototype.handleClick.call(this)
                    }, b.prototype.attachVolumeBarEvents = function () {
                        this.menuContent.on(["mousedown", "touchdown"], j.bind(this, this.handleMouseDown))
                    }, b.prototype.handleMouseDown = function (a) {
                        this.on(["mousemove", "touchmove"], j.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp)
                    }, b.prototype.handleMouseUp = function (a) {
                        this.off(["mousemove", "touchmove"], j.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                    }, b
                }(p["default"]);
            u.prototype.volumeUpdate = r["default"].prototype.update, u.prototype.controlText_ = "Mute", l["default"].registerComponent("VolumeMenuButton", u), c["default"] = u
        }, {
            11: 11,
            37: 37,
            5: 5,
            53: 53,
            54: 54,
            83: 83
        }],
        41: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h),
                j = a(50),
                k = d(j),
                l = a(87),
                m = d(l),
                n = function (a) {
                    function b(c, d) {
                        e(this, b);
                        var g = f(this, a.call(this, c, d));
                        return g.on(c, "error", g.open), g
                    }
                    return g(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-error-display " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.content = function () {
                        var a = this.player().error();
                        return a ? this.localize(a.message) : ""
                    }, b
                }(k["default"]);
            n.prototype.options_ = (0, m["default"])(k["default"].prototype.options_, {
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), i["default"].registerComponent("ErrorDisplay", n), c["default"] = n
        }, {
            5: 5,
            50: 50,
            87: 87
        }],
        42: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }
            c.__esModule = !0;
            var e = a(82),
                f = d(e),
                g = function () {};
            g.prototype.allowedEvents_ = {}, g.prototype.on = function (a, b) {
                var c = this.addEventListener;
                this.addEventListener = function () {}, f.on(this, a, b), this.addEventListener = c
            }, g.prototype.addEventListener = g.prototype.on, g.prototype.off = function (a, b) {
                f.off(this, a, b)
            }, g.prototype.removeEventListener = g.prototype.off, g.prototype.one = function (a, b) {
                var c = this.addEventListener;
                this.addEventListener = function () {}, f.one(this, a, b), this.addEventListener = c
            }, g.prototype.trigger = function (a) {
                var b = a.type || a;
                "string" == typeof a && (a = {
                    type: b
                }), a = f.fixEvent(a), this.allowedEvents_[b] && this["on" + b] && this["on" + b](a), f.trigger(this, a)
            }, g.prototype.dispatchEvent = g.prototype.trigger, c["default"] = g
        }, {
            82: 82
        }],
        43: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0;
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                    return typeof a
                } : function (a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                },
                f = a(86),
                g = d(f),
                h = a(88),
                i = function (a, b) {
                    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof b ? "undefined" : e(b)));
                    a.prototype = Object.create(b && b.prototype, {
                        constructor: {
                            value: a,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), b && (a.super_ = b)
                },
                j = function (a) {
                    var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = function () {
                            a.apply(this, arguments)
                        },
                        d = {};
                    (0, h.isObject)(b) ? ("function" == typeof b.init && (g["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), b.constructor = b.init), b.constructor !== Object.prototype.constructor && (c = b.constructor), d = b) : "function" == typeof b && (c = b), i(c, a);
                    for (var e in d) d.hasOwnProperty(e) && (c.prototype[e] = d[e]);
                    return c
                };
            c["default"] = j
        }, {
            86: 86,
            88: 88
        }],
        44: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0;
            for (var e = a(94), f = d(e), g = {}, h = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], i = h[0], j = void 0, k = 0; k < h.length; k++)
                if (h[k][1] in f["default"]) {
                    j = h[k];
                    break
                }
            if (j)
                for (var l = 0; l < j.length; l++) g[i[l]] = j[l];
            c["default"] = g
        }, {
            94: 94
        }],
        45: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h),
                j = function (a) {
                    function b() {
                        return e(this, b), f(this, a.apply(this, arguments))
                    }
                    return g(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-loading-spinner",
                            dir: "ltr"
                        })
                    }, b
                }(i["default"]);
            i["default"].registerComponent("LoadingSpinner", j), c["default"] = j
        }, {
            5: 5
        }],
        46: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a instanceof d ? a : ("number" == typeof a ? this.code = a : "string" == typeof a ? this.message = a : (0, e.isObject)(a) && ("number" == typeof a.code && (this.code = a.code), (0, e.assign)(this, a)), void(this.message || (this.message = d.defaultMessages[this.code] || "")))
            }
            c.__esModule = !0;
            var e = a(88);
            d.prototype.code = 0, d.prototype.message = "", d.prototype.status = null, d.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], d.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var f = 0; f < d.errorTypes.length; f++) d[d.errorTypes[f]] = f, d.prototype[d.errorTypes[f]] = f;
            c["default"] = d
        }, {
            88: 88
        }],
        47: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(3),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(49),
                n = e(m),
                o = a(81),
                p = d(o),
                q = a(83),
                r = d(q),
                s = a(91),
                t = e(s),
                u = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.update(), e.enabled_ = !0, e.el_.setAttribute("aria-haspopup", "true"), e.el_.setAttribute("role", "menuitem"), e.on("keydown", e.handleSubmenuKeyPress), e
                    }
                    return h(b, a), b.prototype.update = function () {
                        var a = this.createMenu();
                        this.menu && this.removeChild(this.menu), this.menu = a, this.addChild(a), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, b.prototype.createMenu = function () {
                        var a = new n["default"](this.player_);
                        if (this.options_.title) {
                            var b = p.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: (0, t["default"])(this.options_.title),
                                tabIndex: -1
                            });
                            a.children_.unshift(b), p.insertElFirst(b, a.contentEl())
                        }
                        if (this.items = this.createItems(), this.items)
                            for (var c = 0; c < this.items.length; c++) a.addItem(this.items[c]);
                        return a
                    }, b.prototype.createItems = function () {}, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, b.prototype.buildCSSClass = function () {
                        var b = "vjs-menu-button";
                        return b += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + b + " " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function (a) {
                        this.one(this.menu.contentEl(), "mouseleave", r.bind(this, function (a) {
                            this.unpressButton(), this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, b.prototype.handleKeyPress = function (b) {
                        27 === b.which || 9 === b.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== b.which && b.preventDefault()) : 38 === b.which || 40 === b.which ? this.buttonPressed_ || (this.pressButton(), b.preventDefault()) : a.prototype.handleKeyPress.call(this, b)
                    }, b.prototype.handleSubmenuKeyPress = function (a) {
                        27 !== a.which && 9 !== a.which || (this.buttonPressed_ && this.unpressButton(), 9 !== a.which && a.preventDefault())
                    }, b.prototype.pressButton = function () {
                        this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus())
                    }, b.prototype.unpressButton = function () {
                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus())
                    }, b.prototype.disable = function () {
                        return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, a.prototype.disable.call(this)
                    }, b.prototype.enable = function () {
                        return this.enabled_ = !0, a.prototype.enable.call(this)
                    }, b
                }(j["default"]);
            l["default"].registerComponent("MenuButton", u), c["default"] = u
        }, {
            3: 3,
            49: 49,
            5: 5,
            81: 81,
            83: 83,
            91: 91
        }],
        48: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(3),
                i = d(h),
                j = a(5),
                k = d(j),
                l = a(88),
                m = function (a) {
                    function b(c, d) {
                        e(this, b);
                        var g = f(this, a.call(this, c, d));
                        return g.selectable = d.selectable, g.selected(d.selected), g.selectable ? g.el_.setAttribute("role", "menuitemcheckbox") : g.el_.setAttribute("role", "menuitem"), g
                    }
                    return g(b, a), b.prototype.createEl = function (b, c, d) {
                        return a.prototype.createEl.call(this, "li", (0, l.assign)({
                            className: "vjs-menu-item",
                            innerHTML: this.localize(this.options_.label),
                            tabIndex: -1
                        }, c), d)
                    }, b.prototype.handleClick = function (a) {
                        this.selected(!0)
                    }, b.prototype.selected = function (a) {
                        this.selectable && (a ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                    }, b
                }(i["default"]);
            k["default"].registerComponent("MenuItem", m), c["default"] = m
        }, {
            3: 3,
            5: 5,
            88: 88
        }],
        49: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(83),
                n = d(m),
                o = a(82),
                p = d(o),
                q = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.focusedChild_ = -1, e.on("keydown", e.handleKeyPress), e
                    }
                    return h(b, a), b.prototype.addItem = function (a) {
                        this.addChild(a), a.on("click", n.bind(this, function (a) {
                            this.unlockShowing()
                        }))
                    }, b.prototype.createEl = function () {
                        var b = this.options_.contentElType || "ul";
                        this.contentEl_ = l.createEl(b, {
                            className: "vjs-menu-content"
                        }), this.contentEl_.setAttribute("role", "menu");
                        var c = a.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return c.setAttribute("role", "presentation"), c.appendChild(this.contentEl_), p.on(c, "click", function (a) {
                            a.preventDefault(), a.stopImmediatePropagation()
                        }), c
                    }, b.prototype.handleKeyPress = function (a) {
                        37 === a.which || 40 === a.which ? (a.preventDefault(), this.stepForward()) : 38 !== a.which && 39 !== a.which || (a.preventDefault(), this.stepBack())
                    }, b.prototype.stepForward = function () {
                        var a = 0;
                        void 0 !== this.focusedChild_ && (a = this.focusedChild_ + 1), this.focus(a)
                    }, b.prototype.stepBack = function () {
                        var a = 0;
                        void 0 !== this.focusedChild_ && (a = this.focusedChild_ - 1), this.focus(a)
                    }, b.prototype.focus = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            b = this.children().slice(),
                            c = b.length && b[0].className && /vjs-menu-title/.test(b[0].className);
                        c && b.shift(), b.length > 0 && (a < 0 ? a = 0 : a >= b.length && (a = b.length - 1), this.focusedChild_ = a, b[a].el_.focus())
                    }, b
                }(j["default"]);
            j["default"].registerComponent("Menu", q), c["default"] = q
        }, {
            5: 5,
            81: 81,
            82: 82,
            83: 83
        }],
        50: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(81),
                j = e(i),
                k = a(83),
                l = e(k),
                m = a(5),
                n = d(m),
                o = "vjs-modal-dialog",
                p = 27,
                q = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.opened_ = e.hasBeenOpened_ = e.hasBeenFilled_ = !1, e.closeable(!e.options_.uncloseable), e.content(e.options_.content), e.contentEl_ = j.createEl("div", {
                            className: o + "-content"
                        }, {
                            role: "document"
                        }), e.descEl_ = j.createEl("p", {
                            className: o + "-description vjs-offscreen",
                            id: e.el().getAttribute("aria-describedby")
                        }), j.textContent(e.descEl_, e.description()), e.el_.appendChild(e.descEl_), e.el_.appendChild(e.contentEl_), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, b.prototype.buildCSSClass = function () {
                        return o + " vjs-hidden " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleKeyPress = function (a) {
                        a.which === p && this.closeable() && this.close()
                    }, b.prototype.label = function () {
                        return this.options_.label || this.localize("Modal Window")
                    }, b.prototype.description = function () {
                        var a = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (a += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), a
                    }, b.prototype.open = function () {
                        if (!this.opened_) {
                            var a = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !a.paused(), this.wasPlaying_ && a.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", l.bind(this, this.handleKeyPress)), a.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                        return this
                    }, b.prototype.opened = function (a) {
                        return "boolean" == typeof a && this[a ? "open" : "close"](), this.opened_
                    }, b.prototype.close = function () {
                        if (this.opened_) {
                            var a = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && a.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", l.bind(this, this.handleKeyPress)), a.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose()
                        }
                        return this
                    }, b.prototype.closeable = function c(a) {
                        if ("boolean" == typeof a) {
                            var c = this.closeable_ = !!a,
                                b = this.getChild("closeButton");
                            if (c && !b) {
                                var d = this.contentEl_;
                                this.contentEl_ = this.el_, b = this.addChild("closeButton", {
                                    controlText: "Close Modal Dialog"
                                }), this.contentEl_ = d, this.on(b, "close", this.close)
                            }!c && b && (this.off(b, "close", this.close), this.removeChild(b), b.dispose())
                        }
                        return this.closeable_
                    }, b.prototype.fill = function () {
                        return this.fillWith(this.content())
                    }, b.prototype.fillWith = function (a) {
                        var b = this.contentEl(),
                            c = b.parentNode,
                            d = b.nextSibling;
                        return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, c.removeChild(b), this.empty(), j.insertContent(b, a), this.trigger("modalfill"), d ? c.insertBefore(b, d) : c.appendChild(b), this
                    }, b.prototype.empty = function () {
                        return this.trigger("beforemodalempty"), j.emptyEl(this.contentEl()), this.trigger("modalempty"),
                            this
                    }, b.prototype.content = function (a) {
                        return "undefined" != typeof a && (this.content_ = a), this.content_
                    }, b
                }(n["default"]);
            q.prototype.options_ = {
                temporary: !0
            }, n["default"].registerComponent("ModalDialog", q), c["default"] = q
        }, {
            5: 5,
            81: 81,
            83: 83
        }],
        51: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(94),
                l = e(k),
                m = a(95),
                n = e(m),
                o = a(82),
                p = d(o),
                q = a(81),
                r = d(q),
                s = a(83),
                t = d(s),
                u = a(85),
                v = d(u),
                w = a(78),
                x = d(w),
                y = a(86),
                z = e(y),
                A = a(91),
                B = e(A),
                C = a(90),
                D = a(79),
                E = a(89),
                F = d(E),
                G = a(44),
                H = e(G),
                I = a(46),
                J = e(I),
                K = a(97),
                L = e(K),
                M = a(88),
                N = a(87),
                O = e(N),
                P = a(69),
                Q = e(P),
                R = a(50),
                S = e(R),
                T = a(62),
                U = e(T),
                V = a(63),
                W = e(V),
                X = a(76),
                Y = e(X);
            a(61), a(59), a(55), a(68), a(45), a(1), a(4), a(8), a(41), a(71), a(60);
            var Z = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "volumechange", "texttrackchange"],
                $ = function (a) {
                    function b(c, d, e) {
                        if (f(this, b), c.id = c.id || "vjs_video_" + v.newGUID(), d = (0, M.assign)(b.getTagSettings(c), d), d.initChildren = !1, d.createEl = !1, d.reportTouchActivity = !1, !d.language)
                            if ("function" == typeof c.closest) {
                                var h = c.closest("[lang]");
                                h && (d.language = h.getAttribute("lang"))
                            } else
                                for (var i = c; i && 1 === i.nodeType;) {
                                    if (r.getElAttributes(i).hasOwnProperty("lang")) {
                                        d.language = i.getAttribute("lang");
                                        break
                                    }
                                    i = i.parentNode
                                }
                        var j = g(this, a.call(this, null, d, e));
                        if (!j.options_ || !j.options_.techOrder || !j.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        j.tag = c, j.tagAttributes = c && r.getElAttributes(c), j.language(j.options_.language), d.languages ? ! function () {
                            var a = {};
                            Object.getOwnPropertyNames(d.languages).forEach(function (b) {
                                a[b.toLowerCase()] = d.languages[b]
                            }), j.languages_ = a
                        }() : j.languages_ = b.prototype.options_.languages, j.cache_ = {}, j.poster_ = d.poster || "", j.controls_ = !!d.controls, c.controls = !1, j.scrubbing_ = !1, j.el_ = j.createEl();
                        var k = (0, O["default"])(j.options_);
                        return d.plugins && ! function () {
                            var a = d.plugins;
                            Object.getOwnPropertyNames(a).forEach(function (b) {
                                "function" == typeof this[b] ? this[b](a[b]) : z["default"].error("Unable to find plugin:", b)
                            }, j)
                        }(), j.options_.playerOptions = k, j.initChildren(), j.isAudio("audio" === c.nodeName.toLowerCase()), j.controls() ? j.addClass("vjs-controls-enabled") : j.addClass("vjs-controls-disabled"), j.el_.setAttribute("role", "region"), j.isAudio() ? j.el_.setAttribute("aria-label", "audio player") : j.el_.setAttribute("aria-label", "video player"), j.isAudio() && j.addClass("vjs-audio"), j.flexNotSupported_() && j.addClass("vjs-no-flex"), x.IS_IOS || j.addClass("vjs-workinghover"), b.players[j.id_] = j, j.userActive(!0), j.reportUserActivity(), j.listenForUserActivity_(), j.on("fullscreenchange", j.handleFullscreenChange_), j.on("stageclick", j.handleStageClick_), j
                    }
                    return h(b, a), b.prototype.dispose = function () {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), b.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), a.prototype.dispose.call(this)
                    }, b.prototype.createEl = function () {
                        var b = this.el_ = a.prototype.createEl.call(this, "div"),
                            c = this.tag;
                        c.removeAttribute("width"), c.removeAttribute("height");
                        var d = r.getElAttributes(c);
                        if (Object.getOwnPropertyNames(d).forEach(function (a) {
                                "class" === a ? b.className = d[a] : b.setAttribute(a, d[a])
                            }), c.playerId = c.id, c.id += "_html5_api", c.className = "vjs-tech", c.player = b.player = this, this.addClass("vjs-paused"), n["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                            this.styleEl_ = F.createStyleElement("vjs-styles-dimensions");
                            var e = r.$(".vjs-styles-defaults"),
                                f = r.$("head");
                            f.insertBefore(this.styleEl_, e ? e.nextSibling : f.firstChild)
                        }
                        this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                        for (var g = c.getElementsByTagName("a"), h = 0; h < g.length; h++) {
                            var i = g.item(h);
                            r.addElClass(i, "vjs-hidden"), i.setAttribute("hidden", "hidden")
                        }
                        return c.initNetworkState_ = c.networkState, c.parentNode && c.parentNode.insertBefore(b, c), r.insertElFirst(c, b), this.children_.unshift(c), this.el_ = b, b
                    }, b.prototype.width = function (a) {
                        return this.dimension("width", a)
                    }, b.prototype.height = function (a) {
                        return this.dimension("height", a)
                    }, b.prototype.dimension = function (a, b) {
                        var c = a + "_";
                        if (void 0 === b) return this[c] || 0;
                        if ("" === b) this[c] = void 0;
                        else {
                            var d = parseFloat(b);
                            if (isNaN(d)) return z["default"].error('Improper value "' + b + '" supplied for for ' + a), this;
                            this[c] = d
                        }
                        return this.updateStyleEl_(), this
                    }, b.prototype.fluid = function (a) {
                        return void 0 === a ? !!this.fluid_ : (this.fluid_ = !!a, a ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), void this.updateStyleEl_())
                    }, b.prototype.aspectRatio = function (a) {
                        if (void 0 === a) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(a)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = a, this.fluid(!0), this.updateStyleEl_()
                    }, b.prototype.updateStyleEl_ = function () {
                        if (n["default"].VIDEOJS_NO_DYNAMIC_STYLE === !0) {
                            var a = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                b = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                c = this.tech_ && this.tech_.el();
                            return void(c && (a >= 0 && (c.width = a), b >= 0 && (c.height = b)))
                        }
                        var d = void 0,
                            e = void 0,
                            f = void 0,
                            g = void 0;
                        f = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var h = f.split(":"),
                            i = h[1] / h[0];
                        d = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / i : this.videoWidth() || 300, e = void 0 !== this.height_ ? this.height_ : d * i, g = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(g), F.setTextContent(this.styleEl_, "\n      ." + g + " {\n        width: " + d + "px;\n        height: " + e + "px;\n      }\n\n      ." + g + ".vjs-fluid {\n        padding-top: " + 100 * i + "%;\n      }\n    ")
                    }, b.prototype.loadTech_ = function (a, b) {
                        var c = this;
                        this.tech_ && this.unloadTech_(), "Html5" !== a && this.tag && (U["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = a, this.isReady_ = !1;
                        var d = (0, M.assign)({
                            source: b,
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            playerId: this.id(),
                            techId: this.id() + "_" + a + "_api",
                            videoTracks: this.videoTracks_,
                            textTracks: this.textTracks_,
                            audioTracks: this.audioTracks_,
                            autoplay: this.options_.autoplay,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            "vtt.js": this.options_["vtt.js"]
                        }, this.options_[a.toLowerCase()]);
                        this.tag && (d.tag = this.tag), b && (this.currentType_ = b.type, b.src === this.cache_.src && this.cache_.currentTime > 0 && (d.startTime = this.cache_.currentTime), this.cache_.sources = null, this.cache_.source = b, this.cache_.src = b.src);
                        var e = U["default"].getTech(a);
                        e || (e = j["default"].getComponent(a)), this.tech_ = new e(d), this.tech_.ready(t.bind(this, this.handleTechReady_), !0), Q["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), Z.forEach(function (a) {
                            c.on(c.tech_, a, c["handleTech" + (0, B["default"])(a) + "_"])
                        }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === a && this.tag || r.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, b.prototype.unloadTech_ = function () {
                        this.videoTracks_ = this.videoTracks(), this.textTracks_ = this.textTracks(), this.audioTracks_ = this.audioTracks(), this.textTracksJson_ = Q["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, b.prototype.tech = function (a) {
                        if (a && a.IWillNotUseThisInPlugins) return this.tech_;
                        var b = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                        throw n["default"].alert(b), new Error(b)
                    }, b.prototype.addTechControlsListeners_ = function () {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, b.prototype.removeTechControlsListeners_ = function () {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, b.prototype.handleTechReady_ = function () {
                        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) {
                            try {
                                delete this.tag.poster
                            } catch (a) {
                                (0, z["default"])("deleting tag.poster throws in some browsers", a)
                            }
                            this.play()
                        }
                    }, b.prototype.handleTechLoadStart_ = function () {
                        this.removeClass("vjs-ended"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, b.prototype.hasStarted = function (a) {
                        return void 0 !== a ? (this.hasStarted_ !== a && (this.hasStarted_ = a, a ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                    }, b.prototype.handleTechPlay_ = function () {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, b.prototype.handleTechWaiting_ = function () {
                        var a = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                            return a.removeClass("vjs-waiting")
                        })
                    }, b.prototype.handleTechCanPlay_ = function () {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, b.prototype.handleTechCanPlayThrough_ = function () {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, b.prototype.handleTechPlaying_ = function () {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, b.prototype.handleTechSeeking_ = function () {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, b.prototype.handleTechSeeked_ = function () {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, b.prototype.handleTechFirstPlay_ = function () {
                        this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, b.prototype.handleTechPause_ = function () {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, b.prototype.handleTechEnded_ = function () {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, b.prototype.handleTechDurationChange_ = function () {
                        this.duration(this.techGet_("duration"))
                    }, b.prototype.handleTechClick_ = function (a) {
                        0 === a.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, b.prototype.handleTechTap_ = function () {
                        this.userActive(!this.userActive())
                    }, b.prototype.handleTechTouchStart_ = function () {
                        this.userWasActive = this.userActive()
                    }, b.prototype.handleTechTouchMove_ = function () {
                        this.userWasActive && this.reportUserActivity()
                    }, b.prototype.handleTechTouchEnd_ = function (a) {
                        a.preventDefault()
                    }, b.prototype.handleFullscreenChange_ = function () {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, b.prototype.handleStageClick_ = function () {
                        this.reportUserActivity()
                    }, b.prototype.handleTechFullscreenChange_ = function (a, b) {
                        b && this.isFullscreen(b.isFullscreen), this.trigger("fullscreenchange")
                    }, b.prototype.handleTechError_ = function () {
                        var a = this.tech_.error();
                        this.error(a)
                    }, b.prototype.handleTechTextData_ = function () {
                        var a = null;
                        arguments.length > 1 && (a = arguments[1]), this.trigger("textdata", a)
                    }, b.prototype.getCache = function () {
                        return this.cache_
                    }, b.prototype.techCall_ = function (a, b) {
                        if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function () {
                            this[a](b)
                        }, !0);
                        else try {
                            this.tech_ && this.tech_[a](b)
                        } catch (c) {
                            throw (0, z["default"])(c), c
                        }
                    }, b.prototype.techGet_ = function (a) {
                        if (this.tech_ && this.tech_.isReady_) try {
                            return this.tech_[a]()
                        } catch (b) {
                            throw void 0 === this.tech_[a] ? (0, z["default"])("Video.js: " + a + " method not defined for " + this.techName_ + " playback technology.", b) : "TypeError" === b.name ? ((0, z["default"])("Video.js: " + a + " unavailable on " + this.techName_ + " playback technology element.", b), this.tech_.isReady_ = !1) : (0, z["default"])(b), b
                        }
                    }, b.prototype.play = function () {
                        return this.src() || this.currentSrc() ? this.techCall_("play") : this.tech_.one("loadstart", function () {
                            this.play()
                        }), this
                    }, b.prototype.pause = function () {
                        return this.techCall_("pause"), this
                    }, b.prototype.paused = function () {
                        return this.techGet_("paused") !== !1
                    }, b.prototype.scrubbing = function (a) {
                        return void 0 !== a ? (this.scrubbing_ = !!a, a ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                    }, b.prototype.currentTime = function (a) {
                        return void 0 !== a ? (this.techCall_("setCurrentTime", a), this) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, b.prototype.duration = function (a) {
                        return void 0 === a ? this.cache_.duration || 0 : (a = parseFloat(a) || 0, a < 0 && (a = 1 / 0), a !== this.cache_.duration && (this.cache_.duration = a, a === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                    }, b.prototype.remainingTime = function () {
                        return this.duration() - this.currentTime()
                    }, b.prototype.buffered = function c() {
                        var c = this.techGet_("buffered");
                        return c && c.length || (c = (0, C.createTimeRange)(0, 0)), c
                    }, b.prototype.bufferedPercent = function () {
                        return (0, D.bufferedPercent)(this.buffered(), this.duration())
                    }, b.prototype.bufferedEnd = function () {
                        var a = this.buffered(),
                            b = this.duration(),
                            c = a.end(a.length - 1);
                        return c > b && (c = b), c
                    }, b.prototype.volume = function (a) {
                        var b = void 0;
                        return void 0 !== a ? (b = Math.max(0, Math.min(1, parseFloat(a))), this.cache_.volume = b, this.techCall_("setVolume", b), this) : (b = parseFloat(this.techGet_("volume")), isNaN(b) ? 1 : b)
                    }, b.prototype.muted = function (a) {
                        return void 0 !== a ? (this.techCall_("setMuted", a), this) : this.techGet_("muted") || !1
                    }, b.prototype.supportsFullScreen = function () {
                        return this.techGet_("supportsFullScreen") || !1
                    }, b.prototype.isFullscreen = function (a) {
                        return void 0 !== a ? (this.isFullscreen_ = !!a, this) : !!this.isFullscreen_
                    }, b.prototype.requestFullscreen = function () {
                        var a = H["default"];
                        return this.isFullscreen(!0), a.requestFullscreen ? (p.on(l["default"], a.fullscreenchange, t.bind(this, function b(c) {
                            this.isFullscreen(l["default"][a.fullscreenElement]), this.isFullscreen() === !1 && p.off(l["default"], a.fullscreenchange, b), this.trigger("fullscreenchange")
                        })), this.el_[a.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                    }, b.prototype.exitFullscreen = function () {
                        var a = H["default"];
                        return this.isFullscreen(!1), a.requestFullscreen ? l["default"][a.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                    }, b.prototype.enterFullWindow = function () {
                        this.isFullWindow = !0, this.docOrigOverflow = l["default"].documentElement.style.overflow, p.on(l["default"], "keydown", t.bind(this, this.fullWindowOnEscKey)), l["default"].documentElement.style.overflow = "hidden", r.addElClass(l["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, b.prototype.fullWindowOnEscKey = function (a) {
                        27 === a.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                    }, b.prototype.exitFullWindow = function () {
                        this.isFullWindow = !1, p.off(l["default"], "keydown", this.fullWindowOnEscKey), l["default"].documentElement.style.overflow = this.docOrigOverflow, r.removeElClass(l["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, b.prototype.canPlayType = function (a) {
                        for (var b = void 0, c = 0, d = this.options_.techOrder; c < d.length; c++) {
                            var e = (0, B["default"])(d[c]),
                                f = U["default"].getTech(e);
                            if (f || (f = j["default"].getComponent(e)), f) {
                                if (f.isSupported() && (b = f.canPlayType(a))) return b
                            } else z["default"].error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, b.prototype.selectSource = function (a) {
                        var b = this,
                            c = this.options_.techOrder.map(B["default"]).map(function (a) {
                                return [a, U["default"].getTech(a) || j["default"].getComponent(a)]
                            }).filter(function (a) {
                                var b = a[0],
                                    c = a[1];
                                return c ? c.isSupported() : (z["default"].error('The "' + b + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            }),
                            d = function (a, b, c) {
                                var d = void 0;
                                return a.some(function (a) {
                                    return b.some(function (b) {
                                        if (d = c(a, b)) return !0
                                    })
                                }), d
                            },
                            e = void 0,
                            f = function (a) {
                                return function (b, c) {
                                    return a(c, b)
                                }
                            },
                            g = function (a, c) {
                                var d = a[0],
                                    e = a[1];
                                if (e.canPlaySource(c, b.options_[d.toLowerCase()])) return {
                                    source: c,
                                    tech: d
                                }
                            };
                        return e = this.options_.sourceOrder ? d(a, c, f(g)) : d(c, a, g), e || !1
                    }, b.prototype.src = function (a) {
                        if (void 0 === a) return this.techGet_("src");
                        var b = U["default"].getTech(this.techName_);
                        return b || (b = j["default"].getComponent(this.techName_)), Array.isArray(a) ? this.sourceList_(a) : "string" == typeof a ? this.src({
                            src: a
                        }) : a instanceof Object && (a.type && !b.canPlaySource(a, this.options_[this.techName_.toLowerCase()]) ? this.sourceList_([a]) : (this.cache_.sources = null, this.cache_.source = a, this.cache_.src = a.src, this.currentType_ = a.type || "", this.ready(function () {
                            b.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", a) : this.techCall_("src", a.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                        }, !0))), this
                    }, b.prototype.sourceList_ = function (a) {
                        var b = this.selectSource(a);
                        b ? (b.tech === this.techName_ ? this.src(b.source) : this.loadTech_(b.tech, b.source), this.cache_.sources = a) : (this.setTimeout(function () {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }, 0), this.triggerReady())
                    }, b.prototype.load = function () {
                        return this.techCall_("load"), this
                    }, b.prototype.reset = function () {
                        return this.loadTech_((0, B["default"])(this.options_.techOrder[0]), null), this.techCall_("reset"), this
                    }, b.prototype.currentSources = function () {
                        var a = this.currentSource(),
                            b = [];
                        return 0 !== Object.keys(a).length && b.push(a), this.cache_.sources || b
                    }, b.prototype.currentSource = function () {
                        var a = {},
                            b = this.currentSrc();
                        return b && (a.src = b), this.cache_.source || a
                    }, b.prototype.currentSrc = function () {
                        return this.techGet_("currentSrc") || this.cache_.src || ""
                    }, b.prototype.currentType = function () {
                        return this.currentType_ || ""
                    }, b.prototype.preload = function (a) {
                        return void 0 !== a ? (this.techCall_("setPreload", a), this.options_.preload = a, this) : this.techGet_("preload")
                    }, b.prototype.autoplay = function (a) {
                        return void 0 !== a ? (this.techCall_("setAutoplay", a), this.options_.autoplay = a, this) : this.techGet_("autoplay", a)
                    }, b.prototype.loop = function (a) {
                        return void 0 !== a ? (this.techCall_("setLoop", a), this.options_.loop = a, this) : this.techGet_("loop")
                    }, b.prototype.poster = function (a) {
                        return void 0 === a ? this.poster_ : (a || (a = ""), this.poster_ = a, this.techCall_("setPoster", a), this.trigger("posterchange"), this)
                    }, b.prototype.handleTechPosterChange_ = function () {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, b.prototype.controls = function (a) {
                        return void 0 !== a ? (a = !!a, this.controls_ !== a && (this.controls_ = a, this.usingNativeControls() && this.techCall_("setControls", a), a ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                    }, b.prototype.usingNativeControls = function (a) {
                        return void 0 !== a ? (a = !!a, this.usingNativeControls_ !== a && (this.usingNativeControls_ = a, a ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                    }, b.prototype.error = function (a) {
                        return void 0 === a ? this.error_ || null : null === a ? (this.error_ = a, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close(), this) : (this.error_ = new J["default"](a), this.addClass("vjs-error"), z["default"].error("(CODE:" + this.error_.code + " " + J["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                    }, b.prototype.reportUserActivity = function (a) {
                        this.userActivity_ = !0
                    }, b.prototype.userActive = function (a) {
                        return void 0 !== a ? (a = !!a, a !== this.userActive_ && (this.userActive_ = a, a ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function (a) {
                            a.stopPropagation(), a.preventDefault()
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                    }, b.prototype.listenForUserActivity_ = function () {
                        var a = void 0,
                            b = void 0,
                            c = void 0,
                            d = t.bind(this, this.reportUserActivity),
                            e = function (a) {
                                a.screenX === b && a.screenY === c || (b = a.screenX, c = a.screenY, d())
                            },
                            f = function () {
                                d(), this.clearInterval(a), a = this.setInterval(d, 250)
                            },
                            g = function (b) {
                                d(), this.clearInterval(a)
                            };
                        this.on("mousedown", f), this.on("mousemove", e), this.on("mouseup", g), this.on("keydown", d), this.on("keyup", d);
                        var h = void 0;
                        this.setInterval(function () {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(h);
                                var a = this.options_.inactivityTimeout;
                                a > 0 && (h = this.setTimeout(function () {
                                    this.userActivity_ || this.userActive(!1)
                                }, a))
                            }
                        }, 250)
                    }, b.prototype.playbackRate = function (a) {
                        return void 0 !== a ? (this.techCall_("setPlaybackRate", a), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, b.prototype.isAudio = function (a) {
                        return void 0 !== a ? (this.isAudio_ = !!a, this) : !!this.isAudio_
                    }, b.prototype.videoTracks = function () {
                        return this.tech_ ? this.tech_.videoTracks() : (this.videoTracks_ = this.videoTracks_ || new Y["default"], this.videoTracks_)
                    }, b.prototype.audioTracks = function () {
                        return this.tech_ ? this.tech_.audioTracks() : (this.audioTracks_ = this.audioTracks_ || new W["default"], this.audioTracks_)
                    }, b.prototype.textTracks = function () {
                        if (this.tech_) return this.tech_.textTracks()
                    }, b.prototype.remoteTextTracks = function () {
                        if (this.tech_) return this.tech_.remoteTextTracks()
                    }, b.prototype.remoteTextTrackEls = function () {
                        if (this.tech_) return this.tech_.remoteTextTrackEls()
                    }, b.prototype.addTextTrack = function (a, b, c) {
                        if (this.tech_) return this.tech_.addTextTrack(a, b, c)
                    }, b.prototype.addRemoteTextTrack = function (a, b) {
                        if (this.tech_) return this.tech_.addRemoteTextTrack(a, b)
                    }, b.prototype.removeRemoteTextTrack = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            b = a.track,
                            c = void 0 === b ? arguments[0] : b;
                        if (this.tech_) return this.tech_.removeRemoteTextTrack(c)
                    }, b.prototype.videoWidth = function () {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, b.prototype.videoHeight = function () {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, b.prototype.language = function (a) {
                        return void 0 === a ? this.language_ : (this.language_ = String(a).toLowerCase(), this)
                    }, b.prototype.languages = function () {
                        return (0, O["default"])(b.prototype.options_.languages, this.languages_)
                    }, b.prototype.toJSON = function () {
                        var a = (0, O["default"])(this.options_),
                            b = a.tracks;
                        a.tracks = [];
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d = (0, O["default"])(d), d.player = void 0, a.tracks[c] = d
                        }
                        return a
                    }, b.prototype.createModal = function (a, b) {
                        var c = this;
                        b = b || {}, b.content = a || "";
                        var d = new S["default"](this, b);
                        return this.addChild(d), d.on("dispose", function () {
                            c.removeChild(d)
                        }), d.open()
                    }, b.getTagSettings = function (a) {
                        var b = {
                                sources: [],
                                tracks: []
                            },
                            c = r.getElAttributes(a),
                            d = c["data-setup"];
                        if (r.hasElClass(a, "vjs-fluid") && (c.fluid = !0), null !== d) {
                            var e = (0, L["default"])(d || "{}"),
                                f = e[0],
                                g = e[1];
                            f && z["default"].error(f), (0, M.assign)(c, g)
                        }
                        if ((0, M.assign)(b, c), a.hasChildNodes())
                            for (var h = a.childNodes, i = 0, j = h.length; i < j; i++) {
                                var k = h[i],
                                    l = k.nodeName.toLowerCase();
                                "source" === l ? b.sources.push(r.getElAttributes(k)) : "track" === l && b.tracks.push(r.getElAttributes(k))
                            }
                        return b
                    }, b.prototype.flexNotSupported_ = function () {
                        var a = l["default"].createElement("i");
                        return !("flexBasis" in a.style || "webkitFlexBasis" in a.style || "mozFlexBasis" in a.style || "msFlexBasis" in a.style || "msFlexOrder" in a.style)
                    }, b
                }(j["default"]);
            $.players = {};
            var _ = n["default"].navigator;
            $.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: _ && (_.languages && _.languages[0] || _.userLanguage || _.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (a) {
                $.prototype[a] = function () {
                    return this.techGet_(a)
                }
            }), Z.forEach(function (a) {
                $.prototype["handleTech" + (0, B["default"])(a) + "_"] = function () {
                    return this.trigger(a)
                }
            }), j["default"].registerComponent("Player", $), c["default"] = $
        }, {
            1: 1,
            4: 4,
            41: 41,
            44: 44,
            45: 45,
            46: 46,
            5: 5,
            50: 50,
            55: 55,
            59: 59,
            60: 60,
            61: 61,
            62: 62,
            63: 63,
            68: 68,
            69: 69,
            71: 71,
            76: 76,
            78: 78,
            79: 79,
            8: 8,
            81: 81,
            82: 82,
            83: 83,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            91: 91,
            94: 94,
            95: 95,
            97: 97
        }],
        52: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0;
            var e = a(51),
                f = d(e),
                g = function (a, b) {
                    f["default"].prototype[a] = b
                };
            c["default"] = g
        }, {
            51: 51
        }],
        53: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(3),
                i = d(h),
                j = a(5),
                k = d(j),
                l = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e(this, b);
                        var g = f(this, a.call(this, c, d));
                        return g.update(), g
                    }
                    return g(b, a), b.prototype.update = function () {
                        var a = this.createPopup();
                        this.popup && this.removeChild(this.popup), this.popup = a, this.addChild(a), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, b.prototype.createPopup = function () {}, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, b.prototype.buildCSSClass = function () {
                        var b = "vjs-menu-button";
                        return b += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + b + " " + a.prototype.buildCSSClass.call(this)
                    }, b
                }(i["default"]);
            k["default"].registerComponent("PopupButton", l), c["default"] = l
        }, {
            3: 3,
            5: 5
        }],
        54: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(83),
                n = d(m),
                o = a(82),
                p = d(o),
                q = function (a) {
                    function b() {
                        return f(this, b), g(this, a.apply(this, arguments))
                    }
                    return h(b, a), b.prototype.addItem = function (a) {
                        this.addChild(a), a.on("click", n.bind(this, function () {
                            this.unlockShowing()
                        }))
                    }, b.prototype.createEl = function () {
                        var b = this.options_.contentElType || "ul";
                        this.contentEl_ = l.createEl(b, {
                            className: "vjs-menu-content"
                        });
                        var c = a.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return c.appendChild(this.contentEl_), p.on(c, "click", function (a) {
                            a.preventDefault(), a.stopImmediatePropagation()
                        }), c
                    }, b
                }(j["default"]);
            j["default"].registerComponent("Popup", q), c["default"] = q
        }, {
            5: 5,
            81: 81,
            82: 82,
            83: 83
        }],
        55: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(3),
                j = e(i),
                k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = a(81),
                p = d(o),
                q = a(78),
                r = d(q),
                s = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.update(), c.on("posterchange", n.bind(e, e.update)), e
                    }
                    return h(b, a), b.prototype.dispose = function () {
                        this.player().off("posterchange", this.update), a.prototype.dispose.call(this)
                    }, b.prototype.createEl = function () {
                        var a = p.createEl("div", {
                            className: "vjs-poster",
                            tabIndex: -1
                        });
                        return r.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = p.createEl("img"), a.appendChild(this.fallbackImg_)), a
                    }, b.prototype.update = function (a) {
                        var b = this.player().poster();
                        this.setSrc(b), b ? this.show() : this.hide()
                    }, b.prototype.setSrc = function (a) {
                        if (this.fallbackImg_) this.fallbackImg_.src = a;
                        else {
                            var b = "";
                            a && (b = 'url("' + a + '")'), this.el_.style.backgroundImage = b
                        }
                    }, b.prototype.handleClick = function (a) {
                        this.player_.paused() ? this.player_.play() : this.player_.pause();
                    }, b
                }(j["default"]);
            l["default"].registerComponent("PosterImage", s), c["default"] = s
        }, {
            3: 3,
            5: 5,
            78: 78,
            81: 81,
            83: 83
        }],
        56: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                b && (n = b), setTimeout(o, a)
            }
            c.__esModule = !0, c.hasLoaded = c.autoSetupTimeout = c.autoSetup = void 0;
            var g = a(82),
                h = e(g),
                i = a(94),
                j = d(i),
                k = a(95),
                l = d(k),
                m = !1,
                n = void 0,
                o = function () {
                    var a = j["default"].getElementsByTagName("video"),
                        b = j["default"].getElementsByTagName("audio"),
                        c = [];
                    if (a && a.length > 0)
                        for (var d = 0, e = a.length; d < e; d++) c.push(a[d]);
                    if (b && b.length > 0)
                        for (var g = 0, h = b.length; g < h; g++) c.push(b[g]);
                    if (c && c.length > 0)
                        for (var i = 0, k = c.length; i < k; i++) {
                            var l = c[i];
                            if (!l || !l.getAttribute) {
                                f(1);
                                break
                            }
                            if (void 0 === l.player) {
                                var o = l.getAttribute("data-setup");
                                null !== o && n(l)
                            }
                        } else m || f(1)
                };
            "complete" === j["default"].readyState ? m = !0 : h.one(l["default"], "load", function () {
                m = !0
            });
            var p = function () {
                return m
            };
            c.autoSetup = o, c.autoSetupTimeout = f, c.hasLoaded = p
        }, {
            82: 82,
            94: 94,
            95: 95
        }],
        57: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(5),
                j = e(i),
                k = a(81),
                l = d(k),
                m = a(88),
                n = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return e.bar = e.getChild(e.options_.barName), e.vertical(!!e.options_.vertical), e.on("mousedown", e.handleMouseDown), e.on("touchstart", e.handleMouseDown), e.on("focus", e.handleFocus), e.on("blur", e.handleBlur), e.on("click", e.handleClick), e.on(c, "controlsvisible", e.update), e.on(c, e.playerEvent, e.update), e
                    }
                    return h(b, a), b.prototype.createEl = function (b) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return c.className = c.className + " vjs-slider", c = (0, m.assign)({
                            tabIndex: 0
                        }, c), d = (0, m.assign)({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, d), a.prototype.createEl.call(this, b, c, d)
                    }, b.prototype.handleMouseDown = function (a) {
                        var b = this.bar.el_.ownerDocument;
                        a.preventDefault(), l.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(b, "mousemove", this.handleMouseMove), this.on(b, "mouseup", this.handleMouseUp), this.on(b, "touchmove", this.handleMouseMove), this.on(b, "touchend", this.handleMouseUp), this.handleMouseMove(a)
                    }, b.prototype.handleMouseMove = function (a) {}, b.prototype.handleMouseUp = function () {
                        var a = this.bar.el_.ownerDocument;
                        l.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(a, "mousemove", this.handleMouseMove), this.off(a, "mouseup", this.handleMouseUp), this.off(a, "touchmove", this.handleMouseMove), this.off(a, "touchend", this.handleMouseUp), this.update()
                    }, b.prototype.update = function () {
                        if (this.el_) {
                            var a = this.getPercent(),
                                b = this.bar;
                            if (b) {
                                ("number" != typeof a || a !== a || a < 0 || a === 1 / 0) && (a = 0);
                                var c = (100 * a).toFixed(2) + "%";
                                this.vertical() ? b.el().style.height = c : b.el().style.width = c
                            }
                        }
                    }, b.prototype.calculateDistance = function (a) {
                        var b = l.getPointerPosition(this.el_, a);
                        return this.vertical() ? b.y : b.x
                    }, b.prototype.handleFocus = function () {
                        this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, b.prototype.handleKeyPress = function (a) {
                        37 === a.which || 40 === a.which ? (a.preventDefault(), this.stepBack()) : 38 !== a.which && 39 !== a.which || (a.preventDefault(), this.stepForward())
                    }, b.prototype.handleBlur = function () {
                        this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, b.prototype.handleClick = function (a) {
                        a.stopImmediatePropagation(), a.preventDefault()
                    }, b.prototype.vertical = function (a) {
                        return void 0 === a ? this.vertical_ || !1 : (this.vertical_ = !!a, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                    }, b
                }(j["default"]);
            j["default"].registerComponent("Slider", n), c["default"] = n
        }, {
            5: 5,
            81: 81,
            88: 88
        }],
        58: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, a.streamFromParts = function (a, b) {
                    return a + "&" + b
                }, a.streamToParts = function (a) {
                    var b = {
                        connection: "",
                        stream: ""
                    };
                    if (!a) return b;
                    var c = a.search(/&(?!\w+=)/),
                        d = void 0;
                    return c !== -1 ? d = c + 1 : (c = d = a.lastIndexOf("/") + 1, 0 === c && (c = d = a.length)), b.connection = a.substring(0, c), b.stream = a.substring(d, a.length), b
                }, a.isStreamingType = function (b) {
                    return b in a.streamingFormats
                }, a.RTMP_RE = /^rtmp[set]?:\/\//i, a.isStreamingSrc = function (b) {
                    return a.RTMP_RE.test(b)
                }, a.rtmpSourceHandler = {}, a.rtmpSourceHandler.canPlayType = function (b) {
                    return a.isStreamingType(b) ? "maybe" : ""
                }, a.rtmpSourceHandler.canHandleSource = function (b, c) {
                    var d = a.rtmpSourceHandler.canPlayType(b.type);
                    return d ? d : a.isStreamingSrc(b.src) ? "maybe" : ""
                }, a.rtmpSourceHandler.handleSource = function (b, c, d) {
                    var e = a.streamToParts(b.src);
                    c.setRtmpConnection(e.connection), c.setRtmpStream(e.stream)
                }, a.registerSourceHandler(a.rtmpSourceHandler), a
            }
            c.__esModule = !0, c["default"] = d
        }, {}],
        59: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }

            function i(a) {
                var b = a.charAt(0).toUpperCase() + a.slice(1);
                A["set" + b] = function (b) {
                    return this.el_.vjs_setProperty(a, b)
                }
            }

            function j(a) {
                A[a] = function () {
                    return this.el_.vjs_getProperty(a)
                }
            }
            c.__esModule = !0;
            for (var k = a(62), l = e(k), m = a(81), n = d(m), o = a(92), p = d(o), q = a(90), r = a(58), s = e(r), t = a(5), u = e(t), v = a(95), w = e(v), x = a(88), y = w["default"].navigator, z = function (a) {
                    function b(c, d) {
                        f(this, b);
                        var e = g(this, a.call(this, c, d));
                        return c.source && e.ready(function () {
                            this.setSource(c.source)
                        }, !0), c.startTime && e.ready(function () {
                            this.load(), this.play(), this.currentTime(c.startTime)
                        }, !0), w["default"].videojs = w["default"].videojs || {}, w["default"].videojs.Flash = w["default"].videojs.Flash || {}, w["default"].videojs.Flash.onReady = b.onReady, w["default"].videojs.Flash.onEvent = b.onEvent, w["default"].videojs.Flash.onError = b.onError, e.on("seeked", function () {
                            this.lastSeekTarget_ = void 0
                        }), e
                    }
                    return h(b, a), b.prototype.createEl = function () {
                        var a = this.options_;
                        if (!a.swf) {
                            var c = "5.1.0";
                            a.swf = "//vjs.zencdn.net/swf/" + c + "/video-js.swf"
                        }
                        var d = a.techId,
                            e = (0, x.assign)({
                                readyFunction: "videojs.Flash.onReady",
                                eventProxyFunction: "videojs.Flash.onEvent",
                                errorEventProxyFunction: "videojs.Flash.onError",
                                autoplay: a.autoplay,
                                preload: a.preload,
                                loop: a.loop,
                                muted: a.muted
                            }, a.flashVars),
                            f = (0, x.assign)({
                                wmode: "opaque",
                                bgcolor: "#000000"
                            }, a.params),
                            g = (0, x.assign)({
                                id: d,
                                name: d,
                                "class": "vjs-tech"
                            }, a.attributes);
                        return this.el_ = b.embed(a.swf, e, f, g), this.el_.tech = this, this.el_
                    }, b.prototype.play = function () {
                        this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                    }, b.prototype.pause = function () {
                        this.el_.vjs_pause()
                    }, b.prototype.src = function (a) {
                        return void 0 === a ? this.currentSrc() : this.setSrc(a)
                    }, b.prototype.setSrc = function (a) {
                        var b = this;
                        a = p.getAbsoluteURL(a), this.el_.vjs_src(a), this.autoplay() && this.setTimeout(function () {
                            return b.play()
                        }, 0)
                    }, b.prototype.seeking = function () {
                        return void 0 !== this.lastSeekTarget_
                    }, b.prototype.setCurrentTime = function (b) {
                        var c = this.seekable();
                        c.length && (b = b > c.start(0) ? b : c.start(0), b = b < c.end(c.length - 1) ? b : c.end(c.length - 1), this.lastSeekTarget_ = b, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", b), a.prototype.setCurrentTime.call(this))
                    }, b.prototype.currentTime = function () {
                        return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                    }, b.prototype.currentSrc = function () {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                    }, b.prototype.duration = function c() {
                        if (0 === this.readyState()) return NaN;
                        var c = this.el_.vjs_getProperty("duration");
                        return c >= 0 ? c : 1 / 0
                    }, b.prototype.load = function () {
                        this.el_.vjs_load()
                    }, b.prototype.poster = function () {
                        this.el_.vjs_getProperty("poster")
                    }, b.prototype.setPoster = function () {}, b.prototype.seekable = function () {
                        var a = this.duration();
                        return 0 === a ? (0, q.createTimeRange)() : (0, q.createTimeRange)(0, a)
                    }, b.prototype.buffered = function () {
                        var a = this.el_.vjs_getProperty("buffered");
                        return 0 === a.length ? (0, q.createTimeRange)() : (0, q.createTimeRange)(a[0][0], a[0][1])
                    }, b.prototype.supportsFullScreen = function () {
                        return !1
                    }, b.prototype.enterFullScreen = function () {
                        return !1
                    }, b
                }(l["default"]), A = z.prototype, B = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), C = "networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","), D = 0; D < B.length; D++) j(B[D]), i(B[D]);
            for (var E = 0; E < C.length; E++) j(C[E]);
            z.isSupported = function () {
                return z.version()[0] >= 10
            }, l["default"].withSourceHandlers(z), z.nativeSourceHandler = {}, z.nativeSourceHandler.canPlayType = function (a) {
                return a in z.formats ? "maybe" : ""
            }, z.nativeSourceHandler.canHandleSource = function (a, b) {
                function c(a) {
                    var b = p.getFileExtension(a);
                    return b ? "video/" + b : ""
                }
                var d = void 0;
                return d = a.type ? a.type.replace(/;.*/, "").toLowerCase() : c(a.src), z.nativeSourceHandler.canPlayType(d)
            }, z.nativeSourceHandler.handleSource = function (a, b, c) {
                b.setSrc(a.src)
            }, z.nativeSourceHandler.dispose = function () {}, z.registerSourceHandler(z.nativeSourceHandler), z.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, z.onReady = function (a) {
                var b = n.getEl(a),
                    c = b && b.tech;
                c && c.el() && z.checkReady(c)
            }, z.checkReady = function (a) {
                a.el() && (a.el().vjs_getProperty ? a.triggerReady() : this.setTimeout(function () {
                    z.checkReady(a)
                }, 50))
            }, z.onEvent = function (a, b) {
                var c = n.getEl(a).tech,
                    d = Array.prototype.slice.call(arguments, 2);
                c.setTimeout(function () {
                    c.trigger(b, d)
                }, 1)
            }, z.onError = function (a, b) {
                var c = n.getEl(a).tech;
                return "srcnotfound" === b ? c.error(4) : void c.error("FLASH: " + b)
            }, z.version = function () {
                var a = "0,0,0";
                try {
                    a = new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (b) {
                    try {
                        y.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (y.plugins["Shockwave Flash 2.0"] || y.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (c) {}
                }
                return a.split(",")
            }, z.embed = function (a, b, c, d) {
                var e = z.getEmbedCode(a, b, c, d),
                    f = n.createEl("div", {
                        innerHTML: e
                    }).childNodes[0];
                return f
            }, z.getEmbedCode = function (a, b, c, d) {
                var e = '<object type="application/x-shockwave-flash" ',
                    f = "",
                    g = "",
                    h = "";
                return b && Object.getOwnPropertyNames(b).forEach(function (a) {
                    f += a + "=" + b[a] + "&amp;"
                }), c = (0, x.assign)({
                    movie: a,
                    flashvars: f,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, c), Object.getOwnPropertyNames(c).forEach(function (a) {
                    g += '<param name="' + a + '" value="' + c[a] + '" />'
                }), d = (0, x.assign)({
                    data: a,
                    width: "100%",
                    height: "100%"
                }, d), Object.getOwnPropertyNames(d).forEach(function (a) {
                    h += a + '="' + d[a] + '" '
                }), "" + e + h + ">" + g + "</object>"
            }, (0, s["default"])(z), u["default"].registerComponent("Flash", z), l["default"].registerTech("Flash", z), c["default"] = z
        }, {
            5: 5,
            58: 58,
            62: 62,
            81: 81,
            88: 88,
            90: 90,
            92: 92,
            95: 95
        }],
        60: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                return a.raw = b, a
            }

            function g(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function h(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function i(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                    return typeof a
                } : function (a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                },
                k = f(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
                l = a(62),
                m = e(l),
                n = a(5),
                o = e(n),
                p = a(81),
                q = d(p),
                r = a(92),
                s = d(r),
                t = a(83),
                u = d(t),
                v = a(86),
                w = e(v),
                x = a(98),
                y = e(x),
                z = a(78),
                A = d(z),
                B = a(94),
                C = e(B),
                D = a(95),
                E = e(D),
                F = a(88),
                G = a(87),
                H = e(G),
                I = a(91),
                J = e(I),
                K = function (a) {
                    function b(c, d) {
                        g(this, b);
                        var e = h(this, a.call(this, c, d)),
                            f = c.source,
                            i = !1;
                        if (f && (e.el_.currentSrc !== f.src || c.tag && 3 === c.tag.initNetworkState_) ? e.setSource(f) : e.handleLateInit_(e.el_), e.el_.hasChildNodes()) {
                            for (var j = e.el_.childNodes, l = j.length, m = []; l--;) {
                                var n = j[l],
                                    o = n.nodeName.toLowerCase();
                                "track" === o && (e.featuresNativeTextTracks ? (e.remoteTextTrackEls().addTrackElement_(n), e.remoteTextTracks().addTrack_(n.track), i || e.el_.hasAttribute("crossorigin") || !s.isCrossOrigin(n.src) || (i = !0)) : m.push(n))
                            }
                            for (var p = 0; p < m.length; p++) e.el_.removeChild(m[p])
                        }
                        var q = ["audio", "video"];
                        return q.forEach(function (a) {
                            var b = e.el()[a + "Tracks"],
                                c = e[a + "Tracks"](),
                                d = (0, J["default"])(a);
                            e["featuresNative" + d + "Tracks"] && b && b.addEventListener && (e["handle" + d + "TrackChange_"] = function (a) {
                                c.trigger({
                                    type: "change",
                                    target: c,
                                    currentTarget: c,
                                    srcElement: c
                                })
                            }, e["handle" + d + "TrackAdd_"] = function (a) {
                                return c.addTrack(a.track)
                            }, e["handle" + d + "TrackRemove_"] = function (a) {
                                return c.removeTrack(a.track)
                            }, b.addEventListener("change", e["handle" + d + "TrackChange_"]), b.addEventListener("addtrack", e["handle" + d + "TrackAdd_"]), b.addEventListener("removetrack", e["handle" + d + "TrackRemove_"]), e["removeOld" + d + "Tracks_"] = function (a) {
                                return e.removeOldTracks_(c, b)
                            }, e.on("loadstart", e["removeOld" + d + "Tracks_"]))
                        }), e.featuresNativeTextTracks && (i && w["default"].warn((0, y["default"])(k)), e.handleTextTrackChange_ = u.bind(e, e.handleTextTrackChange), e.handleTextTrackAdd_ = u.bind(e, e.handleTextTrackAdd), e.handleTextTrackRemove_ = u.bind(e, e.handleTextTrackRemove), e.proxyNativeTextTracks_()), (A.TOUCH_ENABLED || A.IS_IPHONE || A.IS_NATIVE_ANDROID) && c.nativeControlsForTouch === !0 && e.setControls(!0), e.proxyWebkitFullscreen_(), e.triggerReady(), e
                    }
                    return i(b, a), b.prototype.dispose = function () {
                        var c = this;
                        ["audio", "video", "text"].forEach(function (a) {
                            var b = (0, J["default"])(a),
                                d = c.el_[a + "Tracks"];
                            d && d.removeEventListener && (d.removeEventListener("change", c["handle" + b + "TrackChange_"]), d.removeEventListener("addtrack", c["handle" + b + "TrackAdd_"]), d.removeEventListener("removetrack", c["handle" + b + "TrackRemove_"])), d && c.off("loadstart", c["removeOld" + b + "Tracks_"])
                        }), b.disposeMediaElement(this.el_), a.prototype.dispose.call(this)
                    }, b.prototype.createEl = function () {
                        var a = this.options_.tag;
                        if (!a || this.movingMediaElementInDOM === !1) {
                            if (a) {
                                var c = a.cloneNode(!0);
                                a.parentNode.insertBefore(c, a), b.disposeMediaElement(a), a = c
                            } else {
                                a = C["default"].createElement("video");
                                var d = this.options_.tag && q.getElAttributes(this.options_.tag),
                                    e = (0, H["default"])({}, d);
                                A.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete e.controls, q.setElAttributes(a, (0, F.assign)(e, {
                                    id: this.options_.techId,
                                    "class": "vjs-tech"
                                }))
                            }
                            a.playerId = this.options_.playerId
                        }
                        for (var f = ["autoplay", "preload", "loop", "muted"], g = f.length - 1; g >= 0; g--) {
                            var h = f[g],
                                i = {};
                            "undefined" != typeof this.options_[h] && (i[h] = this.options_[h]), q.setElAttributes(a, i)
                        }
                        return a
                    }, b.prototype.handleLateInit_ = function (a) {
                        var b = this;
                        if (0 !== a.networkState && 3 !== a.networkState) {
                            if (0 === a.readyState) {
                                var c = function () {
                                    var a = !1,
                                        c = function () {
                                            a = !0
                                        };
                                    b.on("loadstart", c);
                                    var d = function () {
                                        a || this.trigger("loadstart")
                                    };
                                    return b.on("loadedmetadata", d), b.ready(function () {
                                        this.off("loadstart", c), this.off("loadedmetadata", d), a || this.trigger("loadstart")
                                    }), {
                                        v: void 0
                                    }
                                }();
                                if ("object" === ("undefined" == typeof c ? "undefined" : j(c))) return c.v
                            }
                            var d = ["loadstart"];
                            d.push("loadedmetadata"), a.readyState >= 2 && d.push("loadeddata"), a.readyState >= 3 && d.push("canplay"), a.readyState >= 4 && d.push("canplaythrough"), this.ready(function () {
                                d.forEach(function (a) {
                                    this.trigger(a)
                                }, this)
                            })
                        }
                    }, b.prototype.proxyNativeTextTracks_ = function () {
                        var a = this.el().textTracks;
                        if (a) {
                            for (var b = 0; b < a.length; b++) this.textTracks().addTrack_(a[b]);
                            a.addEventListener && (a.addEventListener("change", this.handleTextTrackChange_), a.addEventListener("addtrack", this.handleTextTrackAdd_), a.addEventListener("removetrack", this.handleTextTrackRemove_)), this.on("loadstart", this.removeOldTextTracks_)
                        }
                    }, b.prototype.handleTextTrackChange = function (a) {
                        var b = this.textTracks();
                        this.textTracks().trigger({
                            type: "change",
                            target: b,
                            currentTarget: b,
                            srcElement: b
                        })
                    }, b.prototype.handleTextTrackAdd = function (a) {
                        this.textTracks().addTrack_(a.track)
                    }, b.prototype.handleTextTrackRemove = function (a) {
                        this.textTracks().removeTrack_(a.track)
                    }, b.prototype.removeOldTracks_ = function (a, b) {
                        var c = [];
                        if (b) {
                            for (var d = 0; d < a.length; d++) {
                                for (var e = a[d], f = !1, g = 0; g < b.length; g++)
                                    if (b[g] === e) {
                                        f = !0;
                                        break
                                    }
                                f || c.push(e)
                            }
                            for (var h = 0; h < c.length; h++) {
                                var i = c[h];
                                a.removeTrack_(i)
                            }
                        }
                    }, b.prototype.removeOldTextTracks_ = function (a) {
                        var b = this.textTracks(),
                            c = this.el().textTracks;
                        this.removeOldTracks_(b, c)
                    }, b.prototype.play = function () {
                        var a = this.el_.play();
                        void 0 !== a && "function" == typeof a.then && a.then(null, function (a) {})
                    }, b.prototype.setCurrentTime = function (a) {
                        try {
                            this.el_.currentTime = a
                        } catch (b) {
                            (0, w["default"])(b, "Video is not ready. (Video.js)")
                        }
                    }, b.prototype.duration = function () {
                        var a = this;
                        if (this.el_.duration === 1 / 0 && A.IS_ANDROID && A.IS_CHROME && 0 === this.el_.currentTime) {
                            var b = function () {
                                var b = function c() {
                                    a.el_.currentTime > 0 && (a.el_.duration === 1 / 0 && a.trigger("durationchange"), a.off("timeupdate", c))
                                };
                                return a.on("timeupdate", b), {
                                    v: NaN
                                }
                            }();
                            if ("object" === ("undefined" == typeof b ? "undefined" : j(b))) return b.v
                        }
                        return this.el_.duration || NaN
                    }, b.prototype.width = function () {
                        return this.el_.offsetWidth
                    }, b.prototype.height = function () {
                        return this.el_.offsetHeight
                    }, b.prototype.proxyWebkitFullscreen_ = function () {
                        var a = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var b = function () {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                },
                                c = function () {
                                    this.one("webkitendfullscreen", b), this.trigger("fullscreenchange", {
                                        isFullscreen: !0
                                    })
                                };
                            this.on("webkitbeginfullscreen", c), this.on("dispose", function () {
                                a.off("webkitbeginfullscreen", c), a.off("webkitendfullscreen", b)
                            })
                        }
                    }, b.prototype.supportsFullScreen = function () {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var a = E["default"].navigator && E["default"].navigator.userAgent || "";
                            if (/Android/.test(a) || !/Chrome|Mac OS X 10.5/.test(a)) return !0
                        }
                        return !1
                    }, b.prototype.enterFullScreen = function () {
                        var a = this.el_;
                        a.paused && a.networkState <= a.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                            a.pause(), a.webkitEnterFullScreen()
                        }, 0)) : a.webkitEnterFullScreen()
                    }, b.prototype.exitFullScreen = function () {
                        this.el_.webkitExitFullScreen()
                    }, b.prototype.src = function (a) {
                        return void 0 === a ? this.el_.src : void this.setSrc(a)
                    }, b.prototype.reset = function () {
                        b.resetMediaElement(this.el_)
                    }, b.prototype.currentSrc = function () {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, b.prototype.setControls = function (a) {
                        this.el_.controls = !!a
                    }, b.prototype.addTextTrack = function (b, c, d) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(b, c, d) : a.prototype.addTextTrack.call(this, b, c, d)
                    }, b.prototype.createRemoteTextTrack = function (b) {
                        if (!this.featuresNativeTextTracks) return a.prototype.createRemoteTextTrack.call(this, b);
                        var c = C["default"].createElement("track");
                        return b.kind && (c.kind = b.kind), b.label && (c.label = b.label), (b.language || b.srclang) && (c.srclang = b.language || b.srclang), b["default"] && (c["default"] = b["default"]), b.id && (c.id = b.id), b.src && (c.src = b.src), c
                    }, b.prototype.addRemoteTextTrack = function (b, c) {
                        var d = a.prototype.addRemoteTextTrack.call(this, b, c);
                        return this.featuresNativeTextTracks && this.el().appendChild(d), d
                    }, b.prototype.removeRemoteTextTrack = function (b) {
                        if (a.prototype.removeRemoteTextTrack.call(this, b), this.featuresNativeTextTracks)
                            for (var c = this.$$("track"), d = c.length; d--;) b !== c[d] && b !== c[d].track || this.el().removeChild(c[d])
                    }, b
                }(m["default"]);
            K.TEST_VID = C["default"].createElement("video");
            var L = C["default"].createElement("track");
            L.kind = "captions", L.srclang = "en", L.label = "English", K.TEST_VID.appendChild(L), K.isSupported = function () {
                try {
                    K.TEST_VID.volume = .5
                } catch (a) {
                    return !1
                }
                return !!K.TEST_VID.canPlayType
            }, K.canControlVolume = function () {
                try {
                    var a = K.TEST_VID.volume;
                    return K.TEST_VID.volume = a / 2 + .1, a !== K.TEST_VID.volume
                } catch (b) {
                    return !1
                }
            }, K.canControlPlaybackRate = function () {
                if (A.IS_ANDROID && A.IS_CHROME) return !1;
                try {
                    var a = K.TEST_VID.playbackRate;
                    return K.TEST_VID.playbackRate = a / 2 + .1, a !== K.TEST_VID.playbackRate
                } catch (b) {
                    return !1
                }
            }, K.supportsNativeTextTracks = function () {
                return A.IS_ANY_SAFARI
            }, K.supportsNativeVideoTracks = function () {
                var a = !!K.TEST_VID.videoTracks;
                return a
            }, K.supportsNativeAudioTracks = function () {
                var a = !!K.TEST_VID.audioTracks;
                return a
            }, K.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], K.prototype.featuresVolumeControl = K.canControlVolume(), K.prototype.featuresPlaybackRate = K.canControlPlaybackRate(), K.prototype.movingMediaElementInDOM = !A.IS_IOS, K.prototype.featuresFullscreenResize = !0, K.prototype.featuresProgressEvents = !0, K.prototype.featuresTimeupdateEvents = !0, K.prototype.featuresNativeTextTracks = K.supportsNativeTextTracks(), K.prototype.featuresNativeVideoTracks = K.supportsNativeVideoTracks(), K.prototype.featuresNativeAudioTracks = K.supportsNativeAudioTracks();
            var M = void 0,
                N = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                O = /^video\/mp4/i;
            K.patchCanPlayType = function () {
                A.ANDROID_VERSION >= 4 && !A.IS_FIREFOX && (M || (M = K.TEST_VID.constructor.prototype.canPlayType), K.TEST_VID.constructor.prototype.canPlayType = function (a) {
                    return a && N.test(a) ? "maybe" : M.call(this, a)
                }), A.IS_OLD_ANDROID && (M || (M = K.TEST_VID.constructor.prototype.canPlayType), K.TEST_VID.constructor.prototype.canPlayType = function (a) {
                    return a && O.test(a) ? "maybe" : M.call(this, a)
                })
            }, K.unpatchCanPlayType = function () {
                var a = K.TEST_VID.constructor.prototype.canPlayType;
                return K.TEST_VID.constructor.prototype.canPlayType = M, M = null, a
            }, K.patchCanPlayType(), K.disposeMediaElement = function (a) {
                if (a) {
                    for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
                    a.removeAttribute("src"), "function" == typeof a.load && ! function () {
                        try {
                            a.load()
                        } catch (b) {}
                    }()
                }
            }, K.resetMediaElement = function (a) {
                if (a) {
                    for (var b = a.querySelectorAll("source"), c = b.length; c--;) a.removeChild(b[c]);
                    a.removeAttribute("src"), "function" == typeof a.load && ! function () {
                        try {
                            a.load()
                        } catch (b) {}
                    }()
                }
            }, ["paused", "currentTime", "buffered", "volume", "muted", "poster", "preload", "autoplay", "controls", "loop", "error", "seeking", "seekable", "ended", "defaultMuted", "playbackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (a) {
                K.prototype[a] = function () {
                    return this.el_[a]
                }
            }), ["volume", "muted", "src", "poster", "preload", "autoplay", "loop", "playbackRate"].forEach(function (a) {
                K.prototype["set" + (0, J["default"])(a)] = function (b) {
                    this.el_[a] = b
                }
            }), ["pause", "load"].forEach(function (a) {
                K.prototype[a] = function () {
                    return this.el_[a]()
                }
            }), m["default"].withSourceHandlers(K), K.nativeSourceHandler = {}, K.nativeSourceHandler.canPlayType = function (a) {
                try {
                    return K.TEST_VID.canPlayType(a)
                } catch (b) {
                    return ""
                }
            }, K.nativeSourceHandler.canHandleSource = function (a, b) {
                if (a.type) return K.nativeSourceHandler.canPlayType(a.type);
                if (a.src) {
                    var c = s.getFileExtension(a.src);
                    return K.nativeSourceHandler.canPlayType("video/" + c)
                }
                return ""
            }, K.nativeSourceHandler.handleSource = function (a, b, c) {
                b.setSrc(a.src)
            }, K.nativeSourceHandler.dispose = function () {}, K.registerSourceHandler(K.nativeSourceHandler), o["default"].registerComponent("Html5", K), m["default"].registerTech("Html5", K), c["default"] = K
        }, {
            5: 5,
            62: 62,
            78: 78,
            81: 81,
            83: 83,
            86: 86,
            87: 87,
            88: 88,
            91: 91,
            92: 92,
            94: 94,
            95: 95,
            98: 98
        }],
        61: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function f(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function g(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var h = a(5),
                i = d(h),
                j = a(62),
                k = d(j),
                l = a(91),
                m = d(l),
                n = function (a) {
                    function b(c, d, g) {
                        e(this, b);
                        var h = f(this, a.call(this, c, d, g));
                        if (d.playerOptions.sources && 0 !== d.playerOptions.sources.length) c.src(d.playerOptions.sources);
                        else
                            for (var j = 0, l = d.playerOptions.techOrder; j < l.length; j++) {
                                var n = (0, m["default"])(l[j]),
                                    o = k["default"].getTech(n);
                                if (n || (o = i["default"].getComponent(n)), o && o.isSupported()) {
                                    c.loadTech_(n);
                                    break
                                }
                            }
                        return h
                    }
                    return g(b, a), b
                }(i["default"]);
            i["default"].registerComponent("MediaLoader", n), c["default"] = n
        }, {
            5: 5,
            62: 62,
            91: 91
        }],
        62: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }

            function i(a, b, c, d) {
                var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    f = a.textTracks();
                e.kind = b, c && (e.label = c), d && (e.language = d), e.tech = a;
                var g = new s["default"](e);
                return f.addTrack_(g), g
            }
            c.__esModule = !0;
            var j = a(5),
                k = e(j),
                l = a(66),
                m = e(l),
                n = a(65),
                o = e(n),
                p = a(87),
                q = e(p),
                r = a(72),
                s = e(r),
                t = a(70),
                u = e(t),
                v = a(76),
                w = e(v),
                x = a(63),
                y = e(x),
                z = a(83),
                A = d(z),
                B = a(86),
                C = e(B),
                D = a(90),
                E = a(79),
                F = a(46),
                G = e(F),
                H = a(95),
                I = e(H),
                J = a(94),
                K = e(J),
                L = function (a) {
                    function b() {
                        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
                        f(this, b), c.reportTouchActivity = !1;
                        var e = g(this, a.call(this, null, c, d));
                        return e.hasStarted_ = !1, e.on("playing", function () {
                            this.hasStarted_ = !0
                        }), e.on("loadstart", function () {
                            this.hasStarted_ = !1
                        }), e.textTracks_ = c.textTracks, e.videoTracks_ = c.videoTracks, e.audioTracks_ = c.audioTracks, e.featuresProgressEvents || e.manualProgressOn(), e.featuresTimeupdateEvents || e.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (a) {
                            c["native" + a + "Tracks"] === !1 && (e["featuresNative" + a + "Tracks"] = !1)
                        }), c.nativeCaptions === !1 && (e.featuresNativeTextTracks = !1), e.featuresNativeTextTracks || e.emulateTextTracks(), e.autoRemoteTextTracks_ = new u["default"], e.initTextTrackListeners(), e.initTrackListeners(), e.emitTapEvents(), e
                    }
                    return h(b, a), b.prototype.manualProgressOn = function () {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, b.prototype.manualProgressOff = function () {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, b.prototype.trackProgress = function (a) {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(A.bind(this, function () {
                            var a = this.bufferedPercent();
                            this.bufferedPercent_ !== a && this.trigger("progress"), this.bufferedPercent_ = a, 1 === a && this.stopTrackingProgress()
                        }), 500)
                    }, b.prototype.onDurationChange = function (a) {
                        this.duration_ = this.duration()
                    }, b.prototype.buffered = function () {
                        return (0, D.createTimeRange)(0, 0)
                    }, b.prototype.bufferedPercent = function () {
                        return (0, E.bufferedPercent)(this.buffered(), this.duration_)
                    }, b.prototype.stopTrackingProgress = function () {
                        this.clearInterval(this.progressInterval)
                    }, b.prototype.manualTimeUpdatesOn = function () {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, b.prototype.manualTimeUpdatesOff = function () {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, b.prototype.trackCurrentTime = function () {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                            this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, 250)
                    }, b.prototype.stopTrackingCurrentTime = function () {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, b.prototype.dispose = function () {
                        this.clearTracks(["audio", "video", "text"]), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), a.prototype.dispose.call(this)
                    }, b.prototype.clearTracks = function (a) {
                        var b = this;
                        a = [].concat(a), a.forEach(function (a) {
                            for (var c = b[a + "Tracks"]() || [], d = c.length; d--;) {
                                var e = c[d];
                                "text" === a && b.removeRemoteTextTrack(e), c.removeTrack_(e)
                            }
                        })
                    }, b.prototype.cleanupAutoTextTracks = function () {
                        for (var a = this.autoRemoteTextTracks_ || [], b = a.length; b--;) {
                            var c = a[b];
                            this.removeRemoteTextTrack(c)
                        }
                    }, b.prototype.reset = function () {}, b.prototype.error = function (a) {
                        return void 0 !== a && (this.error_ = new G["default"](a), this.trigger("error")), this.error_
                    }, b.prototype.played = function () {
                        return this.hasStarted_ ? (0, D.createTimeRange)(0, 0) : (0, D.createTimeRange)()
                    }, b.prototype.setCurrentTime = function () {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, b.prototype.initTextTrackListeners = function () {
                        var a = A.bind(this, function () {
                                this.trigger("texttrackchange")
                            }),
                            b = this.textTracks();
                        b && (b.addEventListener("removetrack", a), b.addEventListener("addtrack", a), this.on("dispose", A.bind(this, function () {
                            b.removeEventListener("removetrack", a), b.removeEventListener("addtrack", a)
                        })))
                    }, b.prototype.initTrackListeners = function () {
                        var a = this,
                            b = ["video", "audio"];
                        b.forEach(function (b) {
                            var c = function () {
                                    a.trigger(b + "trackchange")
                                },
                                d = a[b + "Tracks"]();
                            d.addEventListener("removetrack", c), d.addEventListener("addtrack", c), a.on("dispose", function () {
                                d.removeEventListener("removetrack", c), d.removeEventListener("addtrack", c)
                            })
                        })
                    }, b.prototype.addWebVttScript_ = function () {
                        var a = this;
                        I["default"].WebVTT || null === this.el().parentNode || void 0 === this.el().parentNode || ! function () {
                            var b = K["default"].createElement("script");
                            b.src = a.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", b.onload = function () {
                                a.trigger("vttjsloaded")
                            }, b.onerror = function () {
                                a.trigger("vttjserror");
                            }, a.on("dispose", function () {
                                b.onload = null, b.onerror = null
                            }), I["default"].WebVTT = !0, a.el().parentNode.appendChild(b)
                        }()
                    }, b.prototype.emulateTextTracks = function () {
                        var a = this,
                            b = this.textTracks();
                        if (b) {
                            this.remoteTextTracks().on("addtrack", function (b) {
                                a.textTracks().addTrack_(b.track)
                            }), this.remoteTextTracks().on("removetrack", function (b) {
                                a.textTracks().removeTrack_(b.track)
                            }), this.on("ready", this.addWebVttScript_);
                            var c = function () {
                                    return a.trigger("texttrackchange")
                                },
                                d = function () {
                                    c();
                                    for (var a = 0; a < b.length; a++) {
                                        var d = b[a];
                                        d.removeEventListener("cuechange", c), "showing" === d.mode && d.addEventListener("cuechange", c)
                                    }
                                };
                            d(), b.addEventListener("change", d), this.on("dispose", function () {
                                b.removeEventListener("change", d)
                            })
                        }
                    }, b.prototype.videoTracks = function () {
                        return this.videoTracks_ = this.videoTracks_ || new w["default"], this.videoTracks_
                    }, b.prototype.audioTracks = function () {
                        return this.audioTracks_ = this.audioTracks_ || new y["default"], this.audioTracks_
                    }, b.prototype.textTracks = function () {
                        return this.textTracks_ = this.textTracks_ || new u["default"], this.textTracks_
                    }, b.prototype.remoteTextTracks = function () {
                        return this.remoteTextTracks_ = this.remoteTextTracks_ || new u["default"], this.remoteTextTracks_
                    }, b.prototype.remoteTextTrackEls = function () {
                        return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new o["default"], this.remoteTextTrackEls_
                    }, b.prototype.addTextTrack = function (a, b, c) {
                        if (!a) throw new Error("TextTrack kind is required but was not provided");
                        return i(this, a, b, c)
                    }, b.prototype.createRemoteTextTrack = function (a) {
                        var b = (0, q["default"])(a, {
                            tech: this
                        });
                        return new m["default"](b)
                    }, b.prototype.addRemoteTextTrack = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            b = arguments[1],
                            c = this.createRemoteTextTrack(a);
                        return b !== !0 && b !== !1 && (C["default"].warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), b = !0), this.remoteTextTrackEls().addTrackElement_(c), this.remoteTextTracks().addTrack_(c.track), b !== !0 && this.autoRemoteTextTracks_.addTrack_(c.track), c
                    }, b.prototype.removeRemoteTextTrack = function (a) {
                        var b = this.remoteTextTrackEls().getTrackElementByTrack_(a);
                        this.remoteTextTrackEls().removeTrackElement_(b), this.remoteTextTracks().removeTrack_(a), this.autoRemoteTextTracks_.removeTrack_(a)
                    }, b.prototype.setPoster = function () {}, b.prototype.canPlayType = function () {
                        return ""
                    }, b.isTech = function (a) {
                        return a.prototype instanceof b || a instanceof b || a === b
                    }, b.registerTech = function (a, c) {
                        if (b.techs_ || (b.techs_ = {}), !b.isTech(c)) throw new Error("Tech " + a + " must be a Tech");
                        return b.techs_[a] = c, c
                    }, b.getTech = function (a) {
                        return b.techs_ && b.techs_[a] ? b.techs_[a] : I["default"] && I["default"].videojs && I["default"].videojs[a] ? (C["default"].warn("The " + a + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), I["default"].videojs[a]) : void 0
                    }, b
                }(k["default"]);
            L.prototype.textTracks_, L.prototype.audioTracks_, L.prototype.videoTracks_, L.prototype.featuresVolumeControl = !0, L.prototype.featuresFullscreenResize = !1, L.prototype.featuresPlaybackRate = !1, L.prototype.featuresProgressEvents = !1, L.prototype.featuresTimeupdateEvents = !1, L.prototype.featuresNativeTextTracks = !1, L.withSourceHandlers = function (a) {
                a.registerSourceHandler = function (b, c) {
                    var d = a.sourceHandlers;
                    d || (d = a.sourceHandlers = []), void 0 === c && (c = d.length), d.splice(c, 0, b)
                }, a.canPlayType = function (b) {
                    for (var c = a.sourceHandlers || [], d = void 0, e = 0; e < c.length; e++)
                        if (d = c[e].canPlayType(b)) return d;
                    return ""
                }, a.selectSourceHandler = function (b, c) {
                    for (var d = a.sourceHandlers || [], e = void 0, f = 0; f < d.length; f++)
                        if (e = d[f].canHandleSource(b, c)) return d[f];
                    return null
                }, a.canPlaySource = function (b, c) {
                    var d = a.selectSourceHandler(b, c);
                    return d ? d.canHandleSource(b, c) : ""
                };
                var b = ["seekable", "duration"];
                b.forEach(function (a) {
                    var b = this[a];
                    "function" == typeof b && (this[a] = function () {
                        return this.sourceHandler_ && this.sourceHandler_[a] ? this.sourceHandler_[a].apply(this.sourceHandler_, arguments) : b.apply(this, arguments)
                    })
                }, a.prototype), a.prototype.setSource = function (b) {
                    var c = a.selectSourceHandler(b, this.options_);
                    return c || (a.nativeSourceHandler ? c = a.nativeSourceHandler : C["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), c !== a.nativeSourceHandler && (this.currentSource_ = b, this.off(this.el_, "loadstart", a.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", a.prototype.successiveLoadStartListener_), this.one(this.el_, "loadstart", a.prototype.firstLoadStartListener_)), this.sourceHandler_ = c.handleSource(b, this, this.options_), this.on("dispose", this.disposeSourceHandler), this
                }, a.prototype.firstLoadStartListener_ = function () {
                    this.one(this.el_, "loadstart", a.prototype.successiveLoadStartListener_)
                }, a.prototype.successiveLoadStartListener_ = function () {
                    this.disposeSourceHandler(), this.one(this.el_, "loadstart", a.prototype.successiveLoadStartListener_)
                }, a.prototype.disposeSourceHandler = function () {
                    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.off(this.el_, "loadstart", a.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", a.prototype.successiveLoadStartListener_), this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, k["default"].registerComponent("Tech", L), k["default"].registerComponent("MediaTechController", L), L.registerTech("Tech", L), c["default"] = L
        }, {
            46: 46,
            5: 5,
            63: 63,
            65: 65,
            66: 66,
            70: 70,
            72: 72,
            76: 76,
            79: 79,
            83: 83,
            86: 86,
            87: 87,
            90: 90,
            94: 94,
            95: 95
        }],
        63: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(74),
                j = e(i),
                k = a(78),
                l = d(k),
                m = a(94),
                n = e(m),
                o = function (a, b) {
                    for (var c = 0; c < a.length; c++) b.id !== a[c].id && (a[c].enabled = !1)
                },
                p = function (a) {
                    function b() {
                        var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        f(this, b);
                        for (var h = void 0, i = e.length - 1; i >= 0; i--)
                            if (e[i].enabled) {
                                o(e, e[i]);
                                break
                            }
                        if (l.IS_IE8) {
                            h = n["default"].createElement("custom");
                            for (var k in j["default"].prototype) "constructor" !== k && (h[k] = j["default"].prototype[k]);
                            for (var m in b.prototype) "constructor" !== m && (h[m] = b.prototype[m])
                        }
                        return h = c = g(this, a.call(this, e, h)), h.changing_ = !1, d = h, g(c, d)
                    }
                    return h(b, a), b.prototype.addTrack_ = function (b) {
                        var c = this;
                        b.enabled && o(this, b), a.prototype.addTrack_.call(this, b), b.addEventListener && b.addEventListener("enabledchange", function () {
                            c.changing_ || (c.changing_ = !0, o(c, b), c.changing_ = !1, c.trigger("change"))
                        })
                    }, b.prototype.addTrack = function (a) {
                        this.addTrack_(a)
                    }, b.prototype.removeTrack = function (b) {
                        a.prototype.removeTrack_.call(this, b)
                    }, b
                }(j["default"]);
            c["default"] = p
        }, {
            74: 74,
            78: 78,
            94: 94
        }],
        64: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(73),
                j = a(75),
                k = e(j),
                l = a(87),
                m = e(l),
                n = a(78),
                o = d(n),
                p = function (a) {
                    function b() {
                        var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        f(this, b);
                        var h = (0, m["default"])(e, {
                                kind: i.AudioTrackKind[e.kind] || ""
                            }),
                            j = c = g(this, a.call(this, h)),
                            k = !1;
                        if (o.IS_IE8)
                            for (var l in b.prototype) "constructor" !== l && (j[l] = b.prototype[l]);
                        return Object.defineProperty(j, "enabled", {
                            get: function () {
                                return k
                            },
                            set: function (a) {
                                "boolean" == typeof a && a !== k && (k = a, this.trigger("enabledchange"))
                            }
                        }), h.enabled && (j.enabled = h.enabled), j.loaded_ = !0, d = j, g(c, d)
                    }
                    return h(b, a), b
                }(k["default"]);
            c["default"] = p
        }, {
            73: 73,
            75: 75,
            78: 78,
            87: 87
        }],
        65: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }
            c.__esModule = !0;
            var g = a(78),
                h = e(g),
                i = a(94),
                j = d(i),
                k = function () {
                    function a() {
                        var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        f(this, a);
                        var c = this;
                        if (h.IS_IE8) {
                            c = j["default"].createElement("custom");
                            for (var d in a.prototype) "constructor" !== d && (c[d] = a.prototype[d])
                        }
                        c.trackElements_ = [], Object.defineProperty(c, "length", {
                            get: function () {
                                return this.trackElements_.length
                            }
                        });
                        for (var e = 0, g = b.length; e < g; e++) c.addTrackElement_(b[e]);
                        if (h.IS_IE8) return c
                    }
                    return a.prototype.addTrackElement_ = function (a) {
                        var b = this.trackElements_.length;
                        "" + b in this || Object.defineProperty(this, b, {
                            get: function () {
                                return this.trackElements_[b]
                            }
                        }), this.trackElements_.indexOf(a) === -1 && this.trackElements_.push(a)
                    }, a.prototype.getTrackElementByTrack_ = function (a) {
                        for (var b = void 0, c = 0, d = this.trackElements_.length; c < d; c++)
                            if (a === this.trackElements_[c].track) {
                                b = this.trackElements_[c];
                                break
                            }
                        return b
                    }, a.prototype.removeTrackElement_ = function (a) {
                        for (var b = 0, c = this.trackElements_.length; b < c; b++)
                            if (a === this.trackElements_[b]) {
                                this.trackElements_.splice(b, 1);
                                break
                            }
                    }, a
                }();
            c["default"] = k
        }, {
            78: 78,
            94: 94
        }],
        66: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(78),
                j = e(i),
                k = a(94),
                l = d(k),
                m = a(42),
                n = d(m),
                o = a(72),
                p = d(o),
                q = 0,
                r = 1,
                s = 2,
                t = 3,
                u = function (a) {
                    function b() {
                        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        f(this, b);
                        var d = g(this, a.call(this)),
                            e = void 0,
                            h = d;
                        if (j.IS_IE8) {
                            h = l["default"].createElement("custom");
                            for (var i in b.prototype) "constructor" !== i && (h[i] = b.prototype[i])
                        }
                        var k = new p["default"](c);
                        if (h.kind = k.kind, h.src = k.src, h.srclang = k.language, h.label = k.label, h["default"] = k["default"], Object.defineProperty(h, "readyState", {
                                get: function () {
                                    return e
                                }
                            }), Object.defineProperty(h, "track", {
                                get: function () {
                                    return k
                                }
                            }), e = q, k.addEventListener("loadeddata", function () {
                                e = s, h.trigger({
                                    type: "load",
                                    target: h
                                })
                            }), j.IS_IE8) {
                            var m;
                            return m = h, g(d, m)
                        }
                        return d
                    }
                    return h(b, a), b
                }(n["default"]);
            u.prototype.allowedEvents_ = {
                load: "load"
            }, u.NONE = q, u.LOADING = r, u.LOADED = s, u.ERROR = t, c["default"] = u
        }, {
            42: 42,
            72: 72,
            78: 78,
            94: 94
        }],
        67: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }
            c.__esModule = !0;
            var g = a(78),
                h = e(g),
                i = a(94),
                j = d(i),
                k = function () {
                    function a(b) {
                        f(this, a);
                        var c = this;
                        if (h.IS_IE8) {
                            c = j["default"].createElement("custom");
                            for (var d in a.prototype) "constructor" !== d && (c[d] = a.prototype[d])
                        }
                        if (a.prototype.setCues_.call(c, b), Object.defineProperty(c, "length", {
                                get: function () {
                                    return this.length_
                                }
                            }), h.IS_IE8) return c
                    }
                    return a.prototype.setCues_ = function (a) {
                        var b = this.length || 0,
                            c = 0,
                            d = a.length;
                        this.cues_ = a, this.length_ = a.length;
                        var e = function (a) {
                            "" + a in this || Object.defineProperty(this, "" + a, {
                                get: function () {
                                    return this.cues_[a]
                                }
                            })
                        };
                        if (b < d)
                            for (c = b; c < d; c++) e.call(this, c)
                    }, a.prototype.getCueById = function (a) {
                        for (var b = null, c = 0, d = this.length; c < d; c++) {
                            var e = this[c];
                            if (e.id === a) {
                                b = e;
                                break
                            }
                        }
                        return b
                    }, a
                }();
            c["default"] = k
        }, {
            78: 78,
            94: 94
        }],
        68: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }

            function i(a, b) {
                return "rgba(" + parseInt(a[1] + a[1], 16) + "," + parseInt(a[2] + a[2], 16) + "," + parseInt(a[3] + a[3], 16) + "," + b + ")"
            }

            function j(a, b, c) {
                try {
                    a.style[b] = c
                } catch (d) {
                    return
                }
            }
            c.__esModule = !0;
            var k = a(5),
                l = e(k),
                m = a(83),
                n = d(m),
                o = a(95),
                p = e(o),
                q = "#222",
                r = "#ccc",
                s = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                t = function (a) {
                    function b(c, d, e) {
                        f(this, b);
                        var h = g(this, a.call(this, c, d, e));
                        return c.on("loadstart", n.bind(h, h.toggleDisplay)), c.on("texttrackchange", n.bind(h, h.updateDisplay)), c.ready(n.bind(h, function () {
                            if (c.tech_ && c.tech_.featuresNativeTextTracks) return void this.hide();
                            c.on("fullscreenchange", n.bind(this, this.updateDisplay));
                            for (var a = this.options_.playerOptions.tracks || [], b = 0; b < a.length; b++) this.player_.addRemoteTextTrack(a[b]);
                            var d = {
                                    captions: 1,
                                    subtitles: 1
                                },
                                e = this.player_.textTracks(),
                                f = void 0,
                                g = void 0;
                            if (e) {
                                for (var h = 0; h < e.length; h++) {
                                    var i = e[h];
                                    i["default"] && ("descriptions" !== i.kind || f ? i.kind in d && !g && (g = i) : f = i)
                                }
                                g ? g.mode = "showing" : f && (f.mode = "showing")
                            }
                        })), h
                    }
                    return h(b, a), b.prototype.toggleDisplay = function () {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        }, {
                            "aria-live": "off",
                            "aria-atomic": "true"
                        })
                    }, b.prototype.clearDisplay = function () {
                        "function" == typeof p["default"].WebVTT && p["default"].WebVTT.processCues(p["default"], [], this.el_)
                    }, b.prototype.updateDisplay = function () {
                        var a = this.player_.textTracks();
                        if (this.clearDisplay(), a) {
                            for (var b = null, c = null, d = a.length; d--;) {
                                var e = a[d];
                                "showing" === e.mode && ("descriptions" === e.kind ? b = e : c = e)
                            }
                            c ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(c)) : b && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(b))
                        }
                    }, b.prototype.updateForTrack = function (a) {
                        if ("function" == typeof p["default"].WebVTT && a.activeCues) {
                            for (var b = this.player_.textTrackSettings.getValues(), c = [], d = 0; d < a.activeCues.length; d++) c.push(a.activeCues[d]);
                            p["default"].WebVTT.processCues(p["default"], c, this.el_);
                            for (var e = c.length; e--;) {
                                var f = c[e];
                                if (f) {
                                    var g = f.displayState;
                                    if (b.color && (g.firstChild.style.color = b.color), b.textOpacity && j(g.firstChild, "color", i(b.color || "#fff", b.textOpacity)), b.backgroundColor && (g.firstChild.style.backgroundColor = b.backgroundColor), b.backgroundOpacity && j(g.firstChild, "backgroundColor", i(b.backgroundColor || "#000", b.backgroundOpacity)), b.windowColor && (b.windowOpacity ? j(g, "backgroundColor", i(b.windowColor, b.windowOpacity)) : g.style.backgroundColor = b.windowColor), b.edgeStyle && ("dropshadow" === b.edgeStyle ? g.firstChild.style.textShadow = "2px 2px 3px " + q + ", 2px 2px 4px " + q + ", 2px 2px 5px " + q : "raised" === b.edgeStyle ? g.firstChild.style.textShadow = "1px 1px " + q + ", 2px 2px " + q + ", 3px 3px " + q : "depressed" === b.edgeStyle ? g.firstChild.style.textShadow = "1px 1px " + r + ", 0 1px " + r + ", -1px -1px " + q + ", 0 -1px " + q : "uniform" === b.edgeStyle && (g.firstChild.style.textShadow = "0 0 4px " + q + ", 0 0 4px " + q + ", 0 0 4px " + q + ", 0 0 4px " + q)), b.fontPercent && 1 !== b.fontPercent) {
                                        var h = p["default"].parseFloat(g.style.fontSize);
                                        g.style.fontSize = h * b.fontPercent + "px", g.style.height = "auto", g.style.top = "auto", g.style.bottom = "2px"
                                    }
                                    b.fontFamily && "default" !== b.fontFamily && ("small-caps" === b.fontFamily ? g.firstChild.style.fontVariant = "small-caps" : g.firstChild.style.fontFamily = s[b.fontFamily])
                                }
                            }
                        }
                    }, b
                }(l["default"]);
            l["default"].registerComponent("TextTrackDisplay", t), c["default"] = t
        }, {
            5: 5,
            83: 83,
            95: 95
        }],
        69: [function (a, b, c) {
            "use strict";
            c.__esModule = !0;
            var d = function (a) {
                    var b = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (b, c, d) {
                        return a[c] && (b[c] = a[c]), b
                    }, {
                        cues: a.cues && Array.prototype.map.call(a.cues, function (a) {
                            return {
                                startTime: a.startTime,
                                endTime: a.endTime,
                                text: a.text,
                                id: a.id
                            }
                        })
                    });
                    return b
                },
                e = function (a) {
                    var b = a.$$("track"),
                        c = Array.prototype.map.call(b, function (a) {
                            return a.track
                        }),
                        e = Array.prototype.map.call(b, function (a) {
                            var b = d(a.track);
                            return a.src && (b.src = a.src), b
                        });
                    return e.concat(Array.prototype.filter.call(a.textTracks(), function (a) {
                        return c.indexOf(a) === -1
                    }).map(d))
                },
                f = function (a, b) {
                    return a.forEach(function (a) {
                        var c = b.addRemoteTextTrack(a).track;
                        !a.src && a.cues && a.cues.forEach(function (a) {
                            return c.addCue(a)
                        })
                    }), b.textTracks()
                };
            c["default"] = {
                textTracksToJson: e,
                jsonToTextTracks: f,
                trackToJson_: d
            }
        }, {}],
        70: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(74),
                j = e(i),
                k = a(83),
                l = d(k),
                m = a(78),
                n = d(m),
                o = a(94),
                p = e(o),
                q = function (a) {
                    function b() {
                        var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        f(this, b);
                        var h = void 0;
                        if (n.IS_IE8) {
                            h = p["default"].createElement("custom");
                            for (var i in j["default"].prototype) "constructor" !== i && (h[i] = j["default"].prototype[i]);
                            for (var k in b.prototype) "constructor" !== k && (h[k] = b.prototype[k])
                        }
                        return h = c = g(this, a.call(this, e, h)), d = h, g(c, d)
                    }
                    return h(b, a), b.prototype.addTrack_ = function (b) {
                        a.prototype.addTrack_.call(this, b), b.addEventListener("modechange", l.bind(this, function () {
                            this.trigger("change")
                        }))
                    }, b
                }(j["default"]);
            c["default"] = q
        }, {
            74: 74,
            78: 78,
            83: 83,
            94: 94
        }],
        71: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }

            function i(a, b) {
                if (b && (a = b(a)), a && "none" !== a) return a
            }

            function j(a, b) {
                var c = a.options[a.options.selectedIndex].value;
                return i(c, b)
            }

            function k(a, b, c) {
                if (b)
                    for (var d = 0; d < a.options.length; d++)
                        if (i(a.options[d].value, c) === b) {
                            a.selectedIndex = d;
                            break
                        }
            }
            c.__esModule = !0;
            var l = a(95),
                m = e(l),
                n = a(5),
                o = e(n),
                p = a(81),
                q = a(83),
                r = d(q),
                s = a(88),
                t = d(s),
                u = a(86),
                v = e(u),
                w = "vjs-text-track-settings",
                x = ["#000", "Black"],
                y = ["#00F", "Blue"],
                z = ["#0FF", "Cyan"],
                A = ["#0F0", "Green"],
                B = ["#F0F", "Magenta"],
                C = ["#F00", "Red"],
                D = ["#FFF", "White"],
                E = ["#FF0", "Yellow"],
                F = ["1", "Opaque"],
                G = ["0.5", "Semi-Transparent"],
                H = ["0", "Transparent"],
                I = {
                    backgroundColor: {
                        selector: ".vjs-bg-color > select",
                        id: "captions-background-color-%s",
                        label: "Color",
                        options: [x, D, C, A, y, E, B, z]
                    },
                    backgroundOpacity: {
                        selector: ".vjs-bg-opacity > select",
                        id: "captions-background-opacity-%s",
                        label: "Transparency",
                        options: [F, G, H]
                    },
                    color: {
                        selector: ".vjs-fg-color > select",
                        id: "captions-foreground-color-%s",
                        label: "Color",
                        options: [D, x, C, A, y, E, B, z]
                    },
                    edgeStyle: {
                        selector: ".vjs-edge-style > select",
                        id: "%s",
                        label: "Text Edge Style",
                        options: [
                            ["none", "None"],
                            ["raised", "Raised"],
                            ["depressed", "Depressed"],
                            ["uniform", "Uniform"],
                            ["dropshadow", "Dropshadow"]
                        ]
                    },
                    fontFamily: {
                        selector: ".vjs-font-family > select",
                        id: "captions-font-family-%s",
                        label: "Font Family",
                        options: [
                            ["proportionalSansSerif", "Proportional Sans-Serif"],
                            ["monospaceSansSerif", "Monospace Sans-Serif"],
                            ["proportionalSerif", "Proportional Serif"],
                            ["monospaceSerif", "Monospace Serif"],
                            ["casual", "Casual"],
                            ["script", "Script"],
                            ["small-caps", "Small Caps"]
                        ]
                    },
                    fontPercent: {
                        selector: ".vjs-font-percent > select",
                        id: "captions-font-size-%s",
                        label: "Font Size",
                        options: [
                            ["0.50", "50%"],
                            ["0.75", "75%"],
                            ["1.00", "100%"],
                            ["1.25", "125%"],
                            ["1.50", "150%"],
                            ["1.75", "175%"],
                            ["2.00", "200%"],
                            ["3.00", "300%"],
                            ["4.00", "400%"]
                        ],
                        "default": 2,
                        parser: function (a) {
                            return "1.00" === a ? null : Number(a)
                        }
                    },
                    textOpacity: {
                        selector: ".vjs-text-opacity > select",
                        id: "captions-foreground-opacity-%s",
                        label: "Transparency",
                        options: [F, G]
                    },
                    windowColor: {
                        selector: ".vjs-window-color > select",
                        id: "captions-window-color-%s",
                        label: "Color"
                    },
                    windowOpacity: {
                        selector: ".vjs-window-opacity > select",
                        id: "captions-window-opacity-%s",
                        label: "Transparency",
                        options: [H, G, F]
                    }
                };
            I.windowColor.options = I.backgroundColor.options;
            var J = function (a) {
                function b(c, d) {
                    f(this, b);
                    var e = g(this, a.call(this, c, d));
                    return e.setDefaults(), e.hide(), e.updateDisplay = r.bind(e, e.updateDisplay), void 0 === d.persistTextTrackSettings && (e.options_.persistTextTrackSettings = e.options_.playerOptions.persistTextTrackSettings), e.on(e.$(".vjs-done-button"), "click", function () {
                        e.saveSettings(), e.hide()
                    }), e.on(e.$(".vjs-default-button"), "click", function () {
                        e.setDefaults(), e.updateDisplay()
                    }), t.each(I, function (a) {
                        e.on(e.$(a.selector), "change", e.updateDisplay)
                    }), e.options_.persistTextTrackSettings && e.restoreSettings(), e
                }
                return h(b, a), b.prototype.createElSelect_ = function (a) {
                    var b = this,
                        c = I[a],
                        d = c.id.replace("%s", this.id_);
                    return [(0, p.createEl)("label", {
                        className: "vjs-label",
                        textContent: c.label
                    }, {
                        "for": d
                    }), (0, p.createEl)("select", {
                        id: d
                    }, void 0, c.options.map(function (a) {
                        return (0, p.createEl)("option", {
                            textContent: b.localize(a[1]),
                            value: a[0]
                        })
                    }))]
                }, b.prototype.createElFgColor_ = function () {
                    var a = (0, p.createEl)("legend", {
                            textContent: this.localize("Text")
                        }),
                        b = this.createElSelect_("color"),
                        c = (0, p.createEl)("span", {
                            className: "vjs-text-opacity vjs-opacity"
                        }, void 0, this.createElSelect_("textOpacity"));
                    return (0, p.createEl)("fieldset", {
                        className: "vjs-fg-color vjs-tracksetting"
                    }, void 0, [a].concat(b, c))
                }, b.prototype.createElBgColor_ = function () {
                    var a = (0, p.createEl)("legend", {
                            textContent: this.localize("Background")
                        }),
                        b = this.createElSelect_("backgroundColor"),
                        c = (0, p.createEl)("span", {
                            className: "vjs-bg-opacity vjs-opacity"
                        }, void 0, this.createElSelect_("backgroundOpacity"));
                    return (0, p.createEl)("fieldset", {
                        className: "vjs-bg-color vjs-tracksetting"
                    }, void 0, [a].concat(b, c))
                }, b.prototype.createElWinColor_ = function () {
                    var a = (0, p.createEl)("legend", {
                            textContent: this.localize("Window")
                        }),
                        b = this.createElSelect_("windowColor"),
                        c = (0, p.createEl)("span", {
                            className: "vjs-window-opacity vjs-opacity"
                        }, void 0, this.createElSelect_("windowOpacity"));
                    return (0, p.createEl)("fieldset", {
                        className: "vjs-window-color vjs-tracksetting"
                    }, void 0, [a].concat(b, c))
                }, b.prototype.createElColors_ = function () {
                    return (0, p.createEl)("div", {
                        className: "vjs-tracksettings-colors"
                    }, void 0, [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()])
                }, b.prototype.createElFont_ = function () {
                    var a = (0, p.createEl)("div", {
                            className: "vjs-font-percent vjs-tracksetting"
                        }, void 0, this.createElSelect_("fontPercent")),
                        b = (0, p.createEl)("div", {
                            className: "vjs-edge-style vjs-tracksetting"
                        }, void 0, this.createElSelect_("edgeStyle")),
                        c = (0, p.createEl)("div", {
                            className: "vjs-font-family vjs-tracksetting"
                        }, void 0, this.createElSelect_("fontFamily"));
                    return (0, p.createEl)("div", {
                        className: "vjs-tracksettings-font"
                    }, void 0, [a, b, c])
                }, b.prototype.createElControls_ = function () {
                    var a = (0, p.createEl)("button", {
                            className: "vjs-default-button",
                            textContent: this.localize("Defaults")
                        }),
                        b = (0, p.createEl)("button", {
                            className: "vjs-done-button",
                            textContent: "Done"
                        });
                    return (0, p.createEl)("div", {
                        className: "vjs-tracksettings-controls"
                    }, void 0, [a, b])
                }, b.prototype.createEl = function () {
                    var a = (0, p.createEl)("div", {
                            className: "vjs-tracksettings"
                        }, void 0, [this.createElColors_(), this.createElFont_(), this.createElControls_()]),
                        b = (0, p.createEl)("div", {
                            className: "vjs-control-text",
                            id: "TTsettingsDialogLabel-" + this.id_,
                            textContent: "Caption Settings Dialog"
                        }, {
                            "aria-level": "1",
                            role: "heading"
                        }),
                        c = (0, p.createEl)("div", {
                            className: "vjs-control-text",
                            id: "TTsettingsDialogDescription-" + this.id_,
                            textContent: "Beginning of dialog window. Escape will cancel and close the window."
                        }),
                        d = (0, p.createEl)("div", void 0, {
                            role: "document"
                        }, [b, c, a]);
                    return (0, p.createEl)("div", {
                        className: "vjs-caption-settings vjs-modal-overlay",
                        tabIndex: -1
                    }, {
                        role: "dialog",
                        "aria-labelledby": b.id,
                        "aria-describedby": c.id
                    }, d)
                }, b.prototype.getValues = function () {
                    var a = this;
                    return t.reduce(I, function (b, c, d) {
                        var e = j(a.$(c.selector), c.parser);
                        return void 0 !== e && (b[d] = e), b
                    }, {})
                }, b.prototype.setValues = function (a) {
                    var b = this;
                    t.each(I, function (c, d) {
                        k(b.$(c.selector), a[d], c.parser)
                    })
                }, b.prototype.setDefaults = function () {
                    var a = this;
                    t.each(I, function (b) {
                        var c = b.hasOwnProperty("default") ? b["default"] : 0;
                        a.$(b.selector).selectedIndex = c
                    })
                }, b.prototype.restoreSettings = function () {
                    var a = void 0;
                    try {
                        a = JSON.parse(m["default"].localStorage.getItem(w))
                    } catch (b) {
                        v["default"].warn(b)
                    }
                    a && this.setValues(a)
                }, b.prototype.saveSettings = function () {
                    if (this.options_.persistTextTrackSettings) {
                        var a = this.getValues();
                        try {
                            Object.keys(a).length ? m["default"].localStorage.setItem(w, JSON.stringify(a)) : m["default"].localStorage.removeItem(w)
                        } catch (b) {
                            v["default"].warn(b)
                        }
                    }
                }, b.prototype.updateDisplay = function () {
                    var a = this.player_.getChild("textTrackDisplay");
                    a && a.updateDisplay()
                }, b
            }(o["default"]);
            o["default"].registerComponent("TextTrackSettings", J), c["default"] = J
        }, {
            5: 5,
            81: 81,
            83: 83,
            86: 86,
            88: 88,
            95: 95
        }],
        72: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(67),
                j = e(i),
                k = a(83),
                l = d(k),
                m = a(73),
                n = a(86),
                o = e(n),
                p = a(95),
                q = e(p),
                r = a(75),
                s = e(r),
                t = a(92),
                u = a(99),
                v = e(u),
                w = a(87),
                x = e(w),
                y = a(78),
                z = d(y),
                A = function (a, b) {
                    var c = new q["default"].WebVTT.Parser(q["default"], q["default"].vttjs, q["default"].WebVTT.StringDecoder()),
                        d = [];
                    c.oncue = function (a) {
                        b.addCue(a)
                    }, c.onparsingerror = function (a) {
                        d.push(a)
                    }, c.onflush = function () {
                        b.trigger({
                            type: "loadeddata",
                            target: b
                        })
                    }, c.parse(a), d.length > 0 && (q["default"].console && q["default"].console.groupCollapsed && q["default"].console.groupCollapsed("Text Track parsing errors for " + b.src), d.forEach(function (a) {
                        return o["default"].error(a)
                    }), q["default"].console && q["default"].console.groupEnd && q["default"].console.groupEnd()), c.flush()
                },
                B = function (a, b) {
                    var c = {
                            uri: a
                        },
                        d = (0, t.isCrossOrigin)(a);
                    d && (c.cors = d), (0, v["default"])(c, l.bind(this, function (a, c, d) {
                        return a ? o["default"].error(a, c) : (b.loaded_ = !0, void("function" != typeof q["default"].WebVTT ? b.tech_ && ! function () {
                            var a = function () {
                                return A(d, b)
                            };
                            b.tech_.on("vttjsloaded", a), b.tech_.on("vttjserror", function () {
                                o["default"].error("vttjs failed to load, stopping trying to process " + b.src), b.tech_.off("vttjsloaded", a)
                            })
                        }() : A(d, b)))
                    }))
                },
                C = function (a) {
                    function b() {
                        var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (f(this, b), !e.tech) throw new Error("A tech was not provided.");
                        var h = (0, x["default"])(e, {
                                kind: m.TextTrackKind[e.kind] || "subtitles",
                                language: e.language || e.srclang || ""
                            }),
                            i = m.TextTrackMode[h.mode] || "disabled",
                            k = h["default"];
                        "metadata" !== h.kind && "chapters" !== h.kind || (i = "hidden");
                        var n = c = g(this, a.call(this, h));
                        if (n.tech_ = h.tech, z.IS_IE8)
                            for (var o in b.prototype) "constructor" !== o && (n[o] = b.prototype[o]);
                        n.cues_ = [], n.activeCues_ = [];
                        var p = new j["default"](n.cues_),
                            q = new j["default"](n.activeCues_),
                            r = !1,
                            s = l.bind(n, function () {
                                this.activeCues, r && (this.trigger("cuechange"), r = !1)
                            });
                        return "disabled" !== i && n.tech_.on("timeupdate", s), Object.defineProperty(n, "default", {
                            get: function () {
                                return k
                            },
                            set: function () {}
                        }), Object.defineProperty(n, "mode", {
                            get: function () {
                                return i
                            },
                            set: function (a) {
                                m.TextTrackMode[a] && (i = a, "showing" === i && this.tech_.on("timeupdate", s), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(n, "cues", {
                            get: function () {
                                return this.loaded_ ? p : null
                            },
                            set: function () {}
                        }), Object.defineProperty(n, "activeCues", {
                            get: function () {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return q;
                                for (var a = this.tech_.currentTime(), b = [], c = 0, d = this.cues.length; c < d; c++) {
                                    var e = this.cues[c];
                                    e.startTime <= a && e.endTime >= a ? b.push(e) : e.startTime === e.endTime && e.startTime <= a && e.startTime + .5 >= a && b.push(e)
                                }
                                if (r = !1, b.length !== this.activeCues_.length) r = !0;
                                else
                                    for (var f = 0; f < b.length; f++) this.activeCues_.indexOf(b[f]) === -1 && (r = !0);
                                return this.activeCues_ = b, q.setCues_(this.activeCues_), q
                            },
                            set: function () {}
                        }), h.src ? (n.src = h.src, B(h.src, n)) : n.loaded_ = !0, d = n, g(c, d)
                    }
                    return h(b, a), b.prototype.addCue = function (a) {
                        var b = this.tech_.textTracks();
                        if (b)
                            for (var c = 0; c < b.length; c++) b[c] !== this && b[c].removeCue(a);
                        this.cues_.push(a), this.cues.setCues_(this.cues_)
                    }, b.prototype.removeCue = function (a) {
                        for (var b = !1, c = 0, d = this.cues_.length; c < d; c++) {
                            var e = this.cues_[c];
                            e === a && (this.cues_.splice(c, 1), b = !0)
                        }
                        b && this.cues.setCues_(this.cues_)
                    }, b
                }(s["default"]);
            C.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            }, c["default"] = C
        }, {
            67: 67,
            73: 73,
            75: 75,
            78: 78,
            83: 83,
            86: 86,
            87: 87,
            92: 92,
            95: 95,
            99: 99
        }],
        73: [function (a, b, c) {
            "use strict";
            c.__esModule = !0;
            c.VideoTrackKind = {
                alternative: "alternative",
                captions: "captions",
                main: "main",
                sign: "sign",
                subtitles: "subtitles",
                commentary: "commentary"
            }, c.AudioTrackKind = {
                alternative: "alternative",
                descriptions: "descriptions",
                main: "main",
                "main-desc": "main-desc",
                translation: "translation",
                commentary: "commentary"
            }, c.TextTrackKind = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            }, c.TextTrackMode = {
                disabled: "disabled",
                hidden: "hidden",
                showing: "showing"
            }
        }, {}],
        74: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(42),
                j = e(i),
                k = a(78),
                l = d(k),
                m = a(94),
                n = e(m),
                o = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        f(this, b);
                        var h = g(this, a.call(this));
                        if (!e && (e = h, l.IS_IE8)) {
                            e = n["default"].createElement("custom");
                            for (var i in b.prototype) "constructor" !== i && (e[i] = b.prototype[i])
                        }
                        e.tracks_ = [], Object.defineProperty(e, "length", {
                            get: function () {
                                return this.tracks_.length
                            }
                        });
                        for (var j = 0; j < d.length; j++) e.addTrack_(d[j]);
                        return c = e, g(h, c)
                    }
                    return h(b, a), b.prototype.addTrack_ = function (a) {
                        var b = this.tracks_.length;
                        "" + b in this || Object.defineProperty(this, b, {
                            get: function () {
                                return this.tracks_[b]
                            }
                        }), this.tracks_.indexOf(a) === -1 && (this.tracks_.push(a), this.trigger({
                            track: a,
                            type: "addtrack"
                        }))
                    }, b.prototype.removeTrack_ = function (a) {
                        for (var b = void 0, c = 0, d = this.length; c < d; c++)
                            if (this[c] === a) {
                                b = this[c], b.off && b.off(), this.tracks_.splice(c, 1);
                                break
                            }
                        b && this.trigger({
                            track: b,
                            type: "removetrack"
                        })
                    }, b.prototype.getTrackById = function (a) {
                        for (var b = null, c = 0, d = this.length; c < d; c++) {
                            var e = this[c];
                            if (e.id === a) {
                                b = e;
                                break
                            }
                        }
                        return b
                    }, b
                }(j["default"]);
            o.prototype.allowedEvents_ = {
                change: "change",
                addtrack: "addtrack",
                removetrack: "removetrack"
            };
            for (var p in o.prototype.allowedEvents_) o.prototype["on" + p] = null;
            c["default"] = o
        }, {
            42: 42,
            78: 78,
            94: 94
        }],
        75: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(78),
                j = e(i),
                k = a(94),
                l = d(k),
                m = a(85),
                n = e(m),
                o = a(42),
                p = d(o),
                q = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        f(this, b);
                        var e = g(this, a.call(this)),
                            h = e;
                        if (j.IS_IE8) {
                            h = l["default"].createElement("custom");
                            for (var i in b.prototype) "constructor" !== i && (h[i] = b.prototype[i])
                        }
                        var k = {
                                id: d.id || "vjs_track_" + n.newGUID(),
                                kind: d.kind || "",
                                label: d.label || "",
                                language: d.language || ""
                            },
                            m = function (a) {
                                Object.defineProperty(h, a, {
                                    get: function () {
                                        return k[a]
                                    },
                                    set: function () {}
                                })
                            };
                        for (var o in k) m(o);
                        return c = h, g(e, c)
                    }
                    return h(b, a), b
                }(p["default"]);
            c["default"] = q
        }, {
            42: 42,
            78: 78,
            85: 85,
            94: 94
        }],
        76: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(74),
                j = e(i),
                k = a(78),
                l = d(k),
                m = a(94),
                n = e(m),
                o = function (a, b) {
                    for (var c = 0; c < a.length; c++) b.id !== a[c].id && (a[c].selected = !1)
                },
                p = function (a) {
                    function b() {
                        var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        f(this, b);
                        for (var h = void 0, i = e.length - 1; i >= 0; i--)
                            if (e[i].selected) {
                                o(e, e[i]);
                                break
                            }
                        if (l.IS_IE8) {
                            h = n["default"].createElement("custom");
                            for (var k in j["default"].prototype) "constructor" !== k && (h[k] = j["default"].prototype[k]);
                            for (var m in b.prototype) "constructor" !== m && (h[m] = b.prototype[m])
                        }
                        return h = c = g(this, a.call(this, e, h)), h.changing_ = !1, Object.defineProperty(h, "selectedIndex", {
                            get: function () {
                                for (var a = 0; a < this.length; a++)
                                    if (this[a].selected) return a;
                                return -1
                            },
                            set: function () {}
                        }), d = h, g(c, d)
                    }
                    return h(b, a), b.prototype.addTrack_ = function (b) {
                        var c = this;
                        b.selected && o(this, b), a.prototype.addTrack_.call(this, b), b.addEventListener && b.addEventListener("selectedchange", function () {
                            c.changing_ || (c.changing_ = !0, o(c, b), c.changing_ = !1, c.trigger("change"))
                        })
                    }, b.prototype.addTrack = function (a) {
                        this.addTrack_(a)
                    }, b.prototype.removeTrack = function (b) {
                        a.prototype.removeTrack_.call(this, b)
                    }, b
                }(j["default"]);
            c["default"] = p
        }, {
            74: 74,
            78: 78,
            94: 94
        }],
        77: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
            }

            function g(a, b) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !b || "object" != typeof b && "function" != typeof b ? a : b
            }

            function h(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            }
            c.__esModule = !0;
            var i = a(73),
                j = a(75),
                k = e(j),
                l = a(87),
                m = e(l),
                n = a(78),
                o = d(n),
                p = function (a) {
                    function b() {
                        var c, d, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        f(this, b);
                        var h = (0, m["default"])(e, {
                                kind: i.VideoTrackKind[e.kind] || ""
                            }),
                            j = c = g(this, a.call(this, h)),
                            k = !1;
                        if (o.IS_IE8)
                            for (var l in b.prototype) "constructor" !== l && (j[l] = b.prototype[l]);
                        return Object.defineProperty(j, "selected", {
                            get: function () {
                                return k
                            },
                            set: function (a) {
                                "boolean" == typeof a && a !== k && (k = a, this.trigger("selectedchange"))
                            }
                        }), h.selected && (j.selected = h.selected), d = j, g(c, d)
                    }
                    return h(b, a), b
                }(k["default"]);
            c["default"] = p
        }, {
            73: 73,
            75: 75,
            78: 78,
            87: 87
        }],
        78: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0, c.BACKGROUND_SIZE_SUPPORTED = c.TOUCH_ENABLED = c.IS_ANY_SAFARI = c.IS_SAFARI = c.IE_VERSION = c.IS_IE8 = c.IS_CHROME = c.IS_EDGE = c.IS_FIREFOX = c.IS_NATIVE_ANDROID = c.IS_OLD_ANDROID = c.ANDROID_VERSION = c.IS_ANDROID = c.IOS_VERSION = c.IS_IOS = c.IS_IPOD = c.IS_IPHONE = c.IS_IPAD = void 0;
            var e = a(94),
                f = d(e),
                g = a(95),
                h = d(g),
                i = h["default"].navigator && h["default"].navigator.userAgent || "",
                j = /AppleWebKit\/([\d.]+)/i.exec(i),
                k = j ? parseFloat(j.pop()) : null,
                l = c.IS_IPAD = /iPad/i.test(i),
                m = c.IS_IPHONE = /iPhone/i.test(i) && !l,
                n = c.IS_IPOD = /iPod/i.test(i),
                o = c.IS_IOS = m || l || n,
                p = (c.IOS_VERSION = function () {
                    var a = i.match(/OS (\d+)_/i);
                    return a && a[1] ? a[1] : null
                }(), c.IS_ANDROID = /Android/i.test(i)),
                q = c.ANDROID_VERSION = function () {
                    var a = i.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!a) return null;
                    var b = a[1] && parseFloat(a[1]),
                        c = a[2] && parseFloat(a[2]);
                    return b && c ? parseFloat(a[1] + "." + a[2]) : b ? b : null
                }(),
                r = (c.IS_OLD_ANDROID = p && /webkit/i.test(i) && q < 2.3, c.IS_NATIVE_ANDROID = p && q < 5 && k < 537, c.IS_FIREFOX = /Firefox/i.test(i), c.IS_EDGE = /Edge/i.test(i)),
                s = c.IS_CHROME = !r && /Chrome/i.test(i),
                t = (c.IS_IE8 = /MSIE\s8\.0/.test(i), c.IE_VERSION = function (a) {
                    return a && parseFloat(a[1])
                }(/MSIE\s(\d+)\.\d/.exec(i)), c.IS_SAFARI = /Safari/i.test(i) && !s && !p && !r);
            c.IS_ANY_SAFARI = t || o, c.TOUCH_ENABLED = !!("ontouchstart" in h["default"] || h["default"].DocumentTouch && f["default"] instanceof h["default"].DocumentTouch), c.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in f["default"].createElement("video").style
        }, {
            94: 94,
            95: 95
        }],
        79: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = 0,
                    d = void 0,
                    f = void 0;
                if (!b) return 0;
                a && a.length || (a = (0, e.createTimeRange)(0, 0));
                for (var g = 0; g < a.length; g++) d = a.start(g), f = a.end(g), f > b && (f = b), c += f - d;
                return c / b
            }
            c.__esModule = !0, c.bufferedPercent = d;
            var e = a(90)
        }, {
            90: 90
        }],
        80: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b) {
                if (!a || !b) return "";
                if ("function" == typeof g["default"].getComputedStyle) {
                    var c = g["default"].getComputedStyle(a);
                    return c ? c[b] : ""
                }
                return a.currentStyle[b] || ""
            }
            c.__esModule = !0, c["default"] = e;
            var f = a(95),
                g = d(f)
        }, {
            95: 95
        }],
        81: [function (a, b, c) {
            "use strict";

            function d(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function e(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function f(a, b) {
                return a.raw = b, a
            }

            function g(a) {
                return "string" == typeof a && /\S/.test(a)
            }

            function h(a) {
                if (/\s/.test(a)) throw new Error("class has illegal whitespace characters")
            }

            function i(a) {
                return new RegExp("(^|\\s)" + a + "($|\\s)")
            }

            function j(a) {
                return (0, V.isObject)(a) && 1 === a.nodeType
            }

            function k(a) {
                return function (b, c) {
                    if (!g(b)) return M["default"][a](null);
                    g(c) && (c = M["default"].querySelector(c));
                    var d = j(c) ? c : M["default"];
                    return d[a] && d[a](b)
                }
            }

            function l(a) {
                return 0 === a.indexOf("#") && (a = a.slice(1)), M["default"].getElementById(a)
            }

            function m() {
                var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = arguments[3],
                    e = M["default"].createElement(a);
                return Object.getOwnPropertyNames(b).forEach(function (a) {
                    var c = b[a];
                    a.indexOf("aria-") !== -1 || "role" === a || "type" === a ? (S["default"].warn((0, U["default"])(K, a, c)), e.setAttribute(a, c)) : "textContent" === a ? n(e, c) : e[a] = c
                }), Object.getOwnPropertyNames(c).forEach(function (a) {
                    e.setAttribute(a, c[a])
                }), d && I(e, d), e
            }

            function n(a, b) {
                return "undefined" == typeof a.textContent ? a.innerText = b : a.textContent = b, a
            }

            function o(a, b) {
                b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a)
            }

            function p(a) {
                var b = a[X];
                return b || (b = a[X] = Q.newGUID()), W[b] || (W[b] = {}), W[b]
            }

            function q(a) {
                var b = a[X];
                return !!b && !!Object.getOwnPropertyNames(W[b]).length
            }

            function r(a) {
                var b = a[X];
                if (b) {
                    delete W[b];
                    try {
                        delete a[X]
                    } catch (c) {
                        a.removeAttribute ? a.removeAttribute(X) : a[X] = null
                    }
                }
            }

            function s(a, b) {
                return h(b), a.classList ? a.classList.contains(b) : i(b).test(a.className)
            }

            function t(a, b) {
                return a.classList ? a.classList.add(b) : s(a, b) || (a.className = (a.className + " " + b).trim()), a
            }

            function u(a, b) {
                return a.classList ? a.classList.remove(b) : (h(b), a.className = a.className.split(/\s+/).filter(function (a) {
                    return a !== b
                }).join(" ")), a
            }

            function v(a, b, c) {
                var d = s(a, b);
                if ("function" == typeof c && (c = c(a, b)), "boolean" != typeof c && (c = !d), c !== d) return c ? t(a, b) : u(a, b), a
            }

            function w(a, b) {
                Object.getOwnPropertyNames(b).forEach(function (c) {
                    var d = b[c];
                    null === d || "undefined" == typeof d || d === !1 ? a.removeAttribute(c) : a.setAttribute(c, d === !0 ? "" : d)
                })
            }

            function x(a) {
                var b = {},
                    c = ",autoplay,controls,loop,muted,default,";
                if (a && a.attributes && a.attributes.length > 0)
                    for (var d = a.attributes, e = d.length - 1; e >= 0; e--) {
                        var f = d[e].name,
                            g = d[e].value;
                        "boolean" != typeof a[f] && c.indexOf("," + f + ",") === -1 || (g = null !== g), b[f] = g
                    }
                return b
            }

            function y(a, b) {
                return a.getAttribute(b)
            }

            function z(a, b, c) {
                a.setAttribute(b, c)
            }

            function A(a, b) {
                a.removeAttribute(b)
            }

            function B() {
                M["default"].body.focus(), M["default"].onselectstart = function () {
                    return !1
                }
            }

            function C() {
                M["default"].onselectstart = function () {
                    return !0
                }
            }

            function D(a) {
                var b = void 0;
                if (a.getBoundingClientRect && a.parentNode && (b = a.getBoundingClientRect()), !b) return {
                    left: 0,
                    top: 0
                };
                var c = M["default"].documentElement,
                    d = M["default"].body,
                    e = c.clientLeft || d.clientLeft || 0,
                    f = O["default"].pageXOffset || d.scrollLeft,
                    g = b.left + f - e,
                    h = c.clientTop || d.clientTop || 0,
                    i = O["default"].pageYOffset || d.scrollTop,
                    j = b.top + i - h;
                return {
                    left: Math.round(g),
                    top: Math.round(j)
                }
            }

            function E(a, b) {
                var c = {},
                    d = D(a),
                    e = a.offsetWidth,
                    f = a.offsetHeight,
                    g = d.top,
                    h = d.left,
                    i = b.pageY,
                    j = b.pageX;
                return b.changedTouches && (j = b.changedTouches[0].pageX, i = b.changedTouches[0].pageY), c.y = Math.max(0, Math.min(1, (g - i + f) / f)), c.x = Math.max(0, Math.min(1, (j - h) / e)), c
            }

            function F(a) {
                return (0, V.isObject)(a) && 3 === a.nodeType
            }

            function G(a) {
                for (; a.firstChild;) a.removeChild(a.firstChild);
                return a
            }

            function H(a) {
                return "function" == typeof a && (a = a()), (Array.isArray(a) ? a : [a]).map(function (a) {
                    return "function" == typeof a && (a = a()), j(a) || F(a) ? a : "string" == typeof a && /\S/.test(a) ? M["default"].createTextNode(a) : void 0
                }).filter(function (a) {
                    return a
                })
            }

            function I(a, b) {
                return H(b).forEach(function (b) {
                    return a.appendChild(b)
                }), a
            }

            function J(a, b) {
                return I(G(a), b)
            }
            c.__esModule = !0, c.$$ = c.$ = void 0;
            var K = f(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
            c.isEl = j, c.getEl = l, c.createEl = m, c.textContent = n, c.insertElFirst = o, c.getElData = p, c.hasElData = q, c.removeElData = r, c.hasElClass = s, c.addElClass = t, c.removeElClass = u, c.toggleElClass = v, c.setElAttributes = w, c.getElAttributes = x, c.getAttribute = y, c.setAttribute = z, c.removeAttribute = A, c.blockTextSelection = B, c.unblockTextSelection = C, c.findElPosition = D, c.getPointerPosition = E, c.isTextNode = F, c.emptyEl = G, c.normalizeContent = H, c.appendContent = I, c.insertContent = J;
            var L = a(94),
                M = e(L),
                N = a(95),
                O = e(N),
                P = a(85),
                Q = d(P),
                R = a(86),
                S = e(R),
                T = a(98),
                U = e(T),
                V = a(88),
                W = {},
                X = "vdata" + (new Date).getTime();
            c.$ = k("querySelector"), c.$$ = k("querySelectorAll")
        }, {
            85: 85,
            86: 86,
            88: 88,
            94: 94,
            95: 95,
            98: 98
        }],
        82: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a, b) {
                var c = n.getElData(a);
                0 === c.handlers[b].length && (delete c.handlers[b], a.removeEventListener ? a.removeEventListener(b, c.dispatcher, !1) : a.detachEvent && a.detachEvent("on" + b, c.dispatcher)), Object.getOwnPropertyNames(c.handlers).length <= 0 && (delete c.handlers, delete c.dispatcher, delete c.disabled), 0 === Object.getOwnPropertyNames(c).length && n.removeElData(a)
            }

            function g(a, b, c, d) {
                c.forEach(function (c) {
                    a(b, c, d)
                })
            }

            function h(a) {
                function b() {
                    return !0
                }

                function c() {
                    return !1
                }
                return a && a.isPropagationStopped || ! function () {
                    var d = a || t["default"].event;
                    a = {};
                    for (var e in d) "layerX" !== e && "layerY" !== e && "keyLocation" !== e && "webkitMovementX" !== e && "webkitMovementY" !== e && ("returnValue" === e && d.preventDefault || (a[e] = d[e]));
                    if (a.target || (a.target = a.srcElement || v["default"]), a.relatedTarget || (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), a.preventDefault = function () {
                            d.preventDefault && d.preventDefault(), a.returnValue = !1, d.returnValue = !1, a.defaultPrevented = !0
                        }, a.defaultPrevented = !1, a.stopPropagation = function () {
                            d.stopPropagation && d.stopPropagation(), a.cancelBubble = !0, d.cancelBubble = !0, a.isPropagationStopped = b
                        }, a.isPropagationStopped = c, a.stopImmediatePropagation = function () {
                            d.stopImmediatePropagation && d.stopImmediatePropagation(), a.isImmediatePropagationStopped = b, a.stopPropagation()
                        }, a.isImmediatePropagationStopped = c, null !== a.clientX && void 0 !== a.clientX) {
                        var f = v["default"].documentElement,
                            g = v["default"].body;
                        a.pageX = a.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = a.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
                    }
                    a.which = a.charCode || a.keyCode, null !== a.button && void 0 !== a.button && (a.button = 1 & a.button ? 0 : 4 & a.button ? 1 : 2 & a.button ? 2 : 0)
                }(), a
            }

            function i(a, b, c) {
                if (Array.isArray(b)) return g(i, a, b, c);
                var d = n.getElData(a);
                d.handlers || (d.handlers = {}), d.handlers[b] || (d.handlers[b] = []), c.guid || (c.guid = p.newGUID()), d.handlers[b].push(c), d.dispatcher || (d.disabled = !1, d.dispatcher = function (b, c) {
                    if (!d.disabled) {
                        b = h(b);
                        var e = d.handlers[b.type];
                        if (e)
                            for (var f = e.slice(0), g = 0, i = f.length; g < i && !b.isImmediatePropagationStopped(); g++) try {
                                f[g].call(a, b, c)
                            } catch (j) {
                                r["default"].error(j)
                            }
                    }
                }), 1 === d.handlers[b].length && (a.addEventListener ? a.addEventListener(b, d.dispatcher, !1) : a.attachEvent && a.attachEvent("on" + b, d.dispatcher))
            }

            function j(a, b, c) {
                if (n.hasElData(a)) {
                    var d = n.getElData(a);
                    if (d.handlers) {
                        if (Array.isArray(b)) return g(j, a, b, c);
                        var e = function (b) {
                            d.handlers[b] = [], f(a, b)
                        };
                        if (b) {
                            var h = d.handlers[b];
                            if (h) {
                                if (!c) return void e(b);
                                if (c.guid)
                                    for (var i = 0; i < h.length; i++) h[i].guid === c.guid && h.splice(i--, 1);
                                f(a, b)
                            }
                        } else
                            for (var k in d.handlers) e(k)
                    }
                }
            }

            function k(a, b, c) {
                var d = n.hasElData(a) ? n.getElData(a) : {},
                    e = a.parentNode || a.ownerDocument;
                if ("string" == typeof b && (b = {
                        type: b,
                        target: a
                    }), b = h(b), d.dispatcher && d.dispatcher.call(a, b, c), e && !b.isPropagationStopped() && b.bubbles === !0) k.call(null, e, b, c);
                else if (!e && !b.defaultPrevented) {
                    var f = n.getElData(b.target);
                    b.target[b.type] && (f.disabled = !0, "function" == typeof b.target[b.type] && b.target[b.type](), f.disabled = !1)
                }
                return !b.defaultPrevented
            }

            function l(a, b, c) {
                if (Array.isArray(b)) return g(l, a, b, c);
                var d = function e() {
                    j(a, b, e), c.apply(this, arguments)
                };
                d.guid = c.guid = c.guid || p.newGUID(), i(a, b, d)
            }
            c.__esModule = !0, c.fixEvent = h, c.on = i, c.off = j, c.trigger = k, c.one = l;
            var m = a(81),
                n = e(m),
                o = a(85),
                p = e(o),
                q = a(86),
                r = d(q),
                s = a(95),
                t = d(s),
                u = a(94),
                v = d(u)
        }, {
            81: 81,
            85: 85,
            86: 86,
            94: 94,
            95: 95
        }],
        83: [function (a, b, c) {
            "use strict";
            c.__esModule = !0, c.throttle = c.bind = void 0;
            var d = a(85);
            c.bind = function (a, b, c) {
                b.guid || (b.guid = (0, d.newGUID)());
                var e = function () {
                    return b.apply(a, arguments)
                };
                return e.guid = c ? c + "_" + b.guid : b.guid, e
            }, c.throttle = function (a, b) {
                var c = Date.now(),
                    d = function () {
                        var d = Date.now();
                        d - c >= b && (a.apply(void 0, arguments), c = d)
                    };
                return d
            }
        }, {
            85: 85
        }],
        84: [function (a, b, c) {
            "use strict";

            function d(a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                a = a < 0 ? 0 : a;
                var c = Math.floor(a % 60),
                    d = Math.floor(a / 60 % 60),
                    e = Math.floor(a / 3600),
                    f = Math.floor(b / 60 % 60),
                    g = Math.floor(b / 3600);
                return (isNaN(a) || a === 1 / 0) && (e = d = c = "-"), e = e > 0 || g > 0 ? e + ":" : "", d = ((e || f >= 10) && d < 10 ? "0" + d : d) + ":", c = c < 10 ? "0" + c : c, e + d + c
            }
            c.__esModule = !0, c["default"] = d
        }, {}],
        85: [function (a, b, c) {
            "use strict";

            function d() {
                return e++
            }
            c.__esModule = !0, c.newGUID = d;
            var e = 1
        }, {}],
        86: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0, c.logByType = void 0;
            var e = a(95),
                f = d(e),
                g = a(78),
                h = a(88),
                i = void 0,
                j = c.logByType = function (a, b) {
                    var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!g.IE_VERSION && g.IE_VERSION < 11;
                    "log" !== a && b.unshift(a.toUpperCase() + ":"), i.history.push(b), b.unshift("VIDEOJS:");
                    var d = f["default"].console && f["default"].console[a];
                    d && (c && (b = b.map(function (a) {
                        if ((0, h.isObject)(a) || Array.isArray(a)) try {
                            return JSON.stringify(a)
                        } catch (b) {
                            return String(a)
                        }
                        return String(a)
                    }).join(" ")), d.apply ? d[Array.isArray(b) ? "apply" : "call"](f["default"].console, b) : d(b))
                };
            i = function () {
                for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                j("log", b)
            }, i.history = [], i.error = function () {
                for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                return j("error", b)
            }, i.warn = function () {
                for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                return j("warn", b)
            }, c["default"] = i
        }, {
            78: 78,
            88: 88,
            95: 95
        }],
        87: [function (a, b, c) {
            "use strict";

            function d() {
                for (var a = {}, b = arguments.length, c = Array(b), f = 0; f < b; f++) c[f] = arguments[f];
                return c.forEach(function (b) {
                    b && (0, e.each)(b, function (b, c) {
                        return (0, e.isPlain)(b) ? ((0, e.isPlain)(a[c]) || (a[c] = {}), void(a[c] = d(a[c], b))) : void(a[c] = b)
                    })
                }), a
            }
            c.__esModule = !0, c["default"] = d;
            var e = a(88)
        }, {
            88: 88
        }],
        88: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                Object.keys(a).forEach(function (c) {
                    return b(a[c], c)
                })
            }

            function e(a, b) {
                var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return Object.keys(a).reduce(function (c, d) {
                    return b(c, a[d], d)
                }, c)
            }

            function f(a) {
                for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), e = 1; e < b; e++) c[e - 1] = arguments[e];
                return Object.assign ? Object.assign.apply(Object, [a].concat(c)) : (c.forEach(function (b) {
                    b && d(b, function (b, c) {
                        a[c] = b
                    })
                }), a)
            }

            function g(a) {
                return !!a && "object" === ("undefined" == typeof a ? "undefined" : i(a))
            }

            function h(a) {
                return g(a) && "[object Object]" === j.call(a) && a.constructor === Object
            }
            c.__esModule = !0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
            c.each = d, c.reduce = e, c.assign = f, c.isObject = g, c.isPlain = h;
            var j = Object.prototype.toString
        }, {}],
        89: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0, c.setTextContent = c.createStyleElement = void 0;
            var e = a(94),
                f = d(e);
            c.createStyleElement = function (a) {
                var b = f["default"].createElement("style");
                return b.className = a, b
            }, c.setTextContent = function (a, b) {
                a.styleSheet ? a.styleSheet.cssText = b : a.textContent = b
            }
        }, {
            94: 94
        }],
        90: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function e(a, b, c) {
                if (b < 0 || b > c) throw new Error("Failed to execute '" + a + "' on 'TimeRanges': The index provided (" + b + ") is greater than or equal to the maximum bound (" + c + ").")
            }

            function f(a, b, c, d) {
                return void 0 === d && (j["default"].warn("DEPRECATED: Function '" + a + "' on 'TimeRanges' called without an index argument."), d = 0), e(a, d, c.length - 1), c[d][b]
            }

            function g(a) {
                return void 0 === a || 0 === a.length ? {
                    length: 0,
                    start: function () {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function () {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: a.length,
                    start: f.bind(null, "start", 0, a),
                    end: f.bind(null, "end", 1, a)
                }
            }

            function h(a, b) {
                return Array.isArray(a) ? g(a) : void 0 === a || void 0 === b ? g() : g([
                    [a, b]
                ])
            }
            c.__esModule = !0, c.createTimeRange = void 0, c.createTimeRanges = h;
            var i = a(86),
                j = d(i);
            c.createTimeRange = h
        }, {
            86: 86
        }],
        91: [function (a, b, c) {
            "use strict";

            function d(a) {
                return "string" != typeof a ? a : a.charAt(0).toUpperCase() + a.slice(1)
            }
            c.__esModule = !0, c["default"] = d
        }, {}],
        92: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            c.__esModule = !0, c.isCrossOrigin = c.getFileExtension = c.getAbsoluteURL = c.parseUrl = void 0;
            var e = a(94),
                f = d(e),
                g = a(95),
                h = d(g),
                i = c.parseUrl = function (a) {
                    var b = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        c = f["default"].createElement("a");
                    c.href = a;
                    var d = "" === c.host && "file:" !== c.protocol,
                        e = void 0;
                    d && (e = f["default"].createElement("div"), e.innerHTML = '<a href="' + a + '"></a>', c = e.firstChild, e.setAttribute("style", "display:none; position:absolute;"), f["default"].body.appendChild(e));
                    for (var g = {}, h = 0; h < b.length; h++) g[b[h]] = c[b[h]];
                    return "http:" === g.protocol && (g.host = g.host.replace(/:80$/, "")), "https:" === g.protocol && (g.host = g.host.replace(/:443$/, "")), d && f["default"].body.removeChild(e), g
                };
            c.getAbsoluteURL = function (a) {
                if (!a.match(/^https?:\/\//)) {
                    var b = f["default"].createElement("div");
                    b.innerHTML = '<a href="' + a + '">x</a>', a = b.firstChild.href
                }
                return a
            }, c.getFileExtension = function (a) {
                if ("string" == typeof a) {
                    var b = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                        c = b.exec(a);
                    if (c) return c.pop().toLowerCase()
                }
                return ""
            }, c.isCrossOrigin = function (a) {
                var b = h["default"].location,
                    c = i(a),
                    d = ":" === c.protocol ? b.protocol : c.protocol,
                    e = d + c.host !== b.protocol + b.host;
                return e
            }
        }, {
            94: 94,
            95: 95
        }],
        93: [function (b, c, d) {
            "use strict";

            function e(a) {
                if (a && a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                return b["default"] = a, b
            }

            function f(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function g(a, b, c) {
                var d = void 0;
                if (b = b || {}, "string" == typeof a) {
                    if (0 === a.indexOf("#") && (a = a.slice(1)), g.getPlayers()[a]) return b && O["default"].warn('Player "' + a + '" is already initialised. Options will not be applied.'), c && g.getPlayers()[a].ready(c), g.getPlayers()[a];
                    d = Q.getEl(a)
                } else d = a;
                if (!d || !d.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                if (d.player || x["default"].players[d.playerId]) return d.player || x["default"].players[d.playerId];
                g.hooks("beforesetup").forEach(function (a) {
                    var c = a(d, (0, B["default"])(b));
                    return !(0, V.isObject)(c) || Array.isArray(c) ? void g.log.error("please return an object in beforesetup hooks") : void(b = (0, B["default"])(b, c))
                });
                var e = r["default"].getComponent("Player"),
                    f = new e(d, b, c);
                return g.hooks("setup").forEach(function (a) {
                    return a(f)
                }), f
            }
            d.__esModule = !0;
            var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                    return typeof a
                } : function (a) {
                    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                },
                i = b(95),
                j = f(i),
                k = b(94),
                l = f(k),
                m = b(56),
                n = e(m),
                o = b(89),
                p = e(o),
                q = b(5),
                r = f(q),
                s = b(42),
                t = f(s),
                u = b(82),
                v = e(u),
                w = b(51),
                x = f(w),
                y = b(52),
                z = f(y),
                A = b(87),
                B = f(A),
                C = b(83),
                D = e(C),
                E = b(72),
                F = f(E),
                G = b(64),
                H = f(G),
                I = b(77),
                J = f(I),
                K = b(90),
                L = b(84),
                M = f(L),
                N = b(86),
                O = f(N),
                P = b(81),
                Q = e(P),
                R = b(78),
                S = e(R),
                T = b(92),
                U = e(T),
                V = b(88),
                W = b(80),
                X = f(W),
                Y = b(43),
                Z = f(Y),
                $ = b(99),
                _ = f($),
                aa = b(62),
                ba = f(aa);
            if ("undefined" == typeof HTMLVideoElement && j["default"].document && j["default"].document.createElement && (l["default"].createElement("video"), l["default"].createElement("audio"), l["default"].createElement("track")), g.hooks_ = {}, g.hooks = function (a, b) {
                    return g.hooks_[a] = g.hooks_[a] || [], b && (g.hooks_[a] = g.hooks_[a].concat(b)), g.hooks_[a]
                }, g.hook = function (a, b) {
                    g.hooks(a, b)
                }, g.removeHook = function (a, b) {
                    var c = g.hooks(a).indexOf(b);
                    return !(c <= -1) && (g.hooks_[a] = g.hooks_[a].slice(), g.hooks_[a].splice(c, 1), !0)
                }, j["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                var ca = Q.$(".vjs-styles-defaults");
                if (!ca) {
                    ca = p.createStyleElement("vjs-styles-defaults");
                    var da = Q.$("head");
                    da && da.insertBefore(ca, da.firstChild), p.setTextContent(ca, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            n.autoSetupTimeout(1, g), g.VERSION = "5.14.1", g.options = x["default"].prototype.options_, g.getPlayers = function () {
                return x["default"].players
            }, g.players = x["default"].players, g.getComponent = r["default"].getComponent, g.registerComponent = function (a, b) {
                ba["default"].isTech(b) && O["default"].warn("The " + a + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), r["default"].registerComponent.call(r["default"], a, b)
            }, g.getTech = ba["default"].getTech, g.registerTech = ba["default"].registerTech, g.browser = S, g.TOUCH_ENABLED = S.TOUCH_ENABLED, g.extend = Z["default"], g.mergeOptions = B["default"], g.bind = D.bind, g.plugin = z["default"], g.addLanguage = function (a, b) {
                var c;
                return a = ("" + a).toLowerCase(), g.options.languages = (0, B["default"])(g.options.languages, (c = {}, c[a] = b, c)), g.options.languages[a]
            }, g.log = O["default"], g.createTimeRange = g.createTimeRanges = K.createTimeRanges, g.formatTime = M["default"], g.parseUrl = U.parseUrl, g.isCrossOrigin = U.isCrossOrigin, g.EventTarget = t["default"], g.on = v.on, g.one = v.one, g.off = v.off, g.trigger = v.trigger, g.xhr = _["default"], g.TextTrack = F["default"], g.AudioTrack = H["default"], g.VideoTrack = J["default"], g.isEl = Q.isEl, g.isTextNode = Q.isTextNode, g.createEl = Q.createEl, g.hasClass = Q.hasElClass, g.addClass = Q.addElClass, g.removeClass = Q.removeElClass, g.toggleClass = Q.toggleElClass, g.setAttributes = Q.setElAttributes, g.getAttributes = Q.getElAttributes, g.emptyEl = Q.emptyEl, g.appendContent = Q.appendContent, g.insertContent = Q.insertContent, g.computedStyle = X["default"], "function" == typeof a && a.amd ? a("videojs", [], function () {
                return g
            }) : "object" === ("undefined" == typeof d ? "undefined" : h(d)) && "object" === ("undefined" == typeof c ? "undefined" : h(c)) && (c.exports = g), d["default"] = g
        }, {
            42: 42,
            43: 43,
            5: 5,
            51: 51,
            52: 52,
            56: 56,
            62: 62,
            64: 64,
            72: 72,
            77: 77,
            78: 78,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            84: 84,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            92: 92,
            94: 94,
            95: 95,
            99: 99
        }],
        94: [function (a, b, c) {
            (function (c) {
                var d = "undefined" != typeof c ? c : "undefined" != typeof window ? window : {},
                    e = a(96);
                if ("undefined" != typeof document) b.exports = document;
                else {
                    var f = d["__GLOBAL_DOCUMENT_CACHE@4"];
                    f || (f = d["__GLOBAL_DOCUMENT_CACHE@4"] = e), b.exports = f
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            96: 96
        }],
        95: [function (a, b, c) {
            (function (a) {
                "undefined" != typeof window ? b.exports = window : "undefined" != typeof a ? b.exports = a : "undefined" != typeof self ? b.exports = self : b.exports = {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        96: [function (a, b, c) {}, {}],
        97: [function (a, b, c) {
            function d(a, b) {
                var c, d = null;
                try {
                    c = JSON.parse(a, b)
                } catch (e) {
                    d = e
                }
                return [d, c]
            }
            b.exports = d
        }, {}],
        98: [function (a, b, c) {
            function d(a) {
                return a.replace(/\n\r?\s*/g, "")
            }
            b.exports = function (a) {
                for (var b = "", c = 0; c < arguments.length; c++) b += d(a[c]) + (arguments[c + 1] || "");
                return b
            }
        }, {}],
        99: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                for (var c = 0; c < a.length; c++) b(a[c])
            }

            function e(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) return !1;
                return !0
            }

            function f(a, b, c) {
                var d = a;
                return l(b) ? (c = b, "string" == typeof a && (d = {
                    uri: a
                })) : d = n(b, {
                    uri: a
                }), d.callback = c, d
            }

            function g(a, b, c) {
                return b = f(a, b, c), h(b)
            }

            function h(a) {
                function b() {
                    4 === j.readyState && f()
                }

                function c() {
                    var a = void 0;
                    if (j.response ? a = j.response : "text" !== j.responseType && j.responseType || (a = j.responseText || j.responseXML), u) try {
                        a = JSON.parse(a)
                    } catch (b) {}
                    return a
                }

                function d(a) {
                    clearTimeout(o), a instanceof Error || (a = new Error("" + (a || "Unknown XMLHttpRequest Error"))), a.statusCode = 0, h(a, i)
                }

                function f() {
                    if (!n) {
                        var b;
                        clearTimeout(o), b = a.useXDR && void 0 === j.status ? 200 : 1223 === j.status ? 204 : j.status;
                        var d = i,
                            e = null;
                        0 !== b ? (d = {
                            body: c(),
                            statusCode: b,
                            method: q,
                            headers: {},
                            url: p,
                            rawRequest: j
                        }, j.getAllResponseHeaders && (d.headers = m(j.getAllResponseHeaders()))) : e = new Error("Internal XMLHttpRequest Error"), h(e, d, d.body)
                    }
                }
                var h = a.callback;
                if ("undefined" == typeof h) throw new Error("callback argument missing");
                h = k(h);
                var i = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: q,
                        url: p,
                        rawRequest: j
                    },
                    j = a.xhr || null;
                j || (j = a.cors || a.useXDR ? new g.XDomainRequest : new g.XMLHttpRequest);
                var l, n, o, p = j.url = a.uri || a.url,
                    q = j.method = a.method || "GET",
                    r = a.body || a.data || null,
                    s = j.headers = a.headers || {},
                    t = !!a.sync,
                    u = !1;
                if ("json" in a && (u = !0, s.accept || s.Accept || (s.Accept = "application/json"), "GET" !== q && "HEAD" !== q && (s["content-type"] || s["Content-Type"] || (s["Content-Type"] = "application/json"), r = JSON.stringify(a.json))), j.onreadystatechange = b, j.onload = f, j.onerror = d, j.onprogress = function () {}, j.ontimeout = d, j.open(q, p, !t, a.username, a.password), t || (j.withCredentials = !!a.withCredentials), !t && a.timeout > 0 && (o = setTimeout(function () {
                        n = !0, j.abort("timeout");
                        var a = new Error("XMLHttpRequest timeout");
                        a.code = "ETIMEDOUT", d(a)
                    }, a.timeout)), j.setRequestHeader)
                    for (l in s) s.hasOwnProperty(l) && j.setRequestHeader(l, s[l]);
                else if (a.headers && !e(a.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in a && (j.responseType = a.responseType), "beforeSend" in a && "function" == typeof a.beforeSend && a.beforeSend(j), j.send(r), j
            }

            function i() {}
            var j = a(95),
                k = a(101),
                l = a(100),
                m = a(104),
                n = a(105);
            b.exports = g, g.XMLHttpRequest = j.XMLHttpRequest || i, g.XDomainRequest = "withCredentials" in new g.XMLHttpRequest ? g.XMLHttpRequest : j.XDomainRequest, d(["get", "put", "post", "patch", "head", "delete"], function (a) {
                g["delete" === a ? "del" : a] = function (b, c, d) {
                    return c = f(b, c, d), c.method = a.toUpperCase(), h(c)
                }
            })
        }, {
            100: 100,
            101: 101,
            104: 104,
            105: 105,
            95: 95
        }],
        100: [function (a, b, c) {
            function d(a) {
                var b = e.call(a);
                return "[object Function]" === b || "function" == typeof a && "[object RegExp]" !== b || "undefined" != typeof window && (a === window.setTimeout || a === window.alert || a === window.confirm || a === window.prompt)
            }
            b.exports = d;
            var e = Object.prototype.toString
        }, {}],
        101: [function (a, b, c) {
            function d(a) {
                var b = !1;
                return function () {
                    if (!b) return b = !0, a.apply(this, arguments)
                }
            }
            b.exports = d, d.proto = d(function () {
                Object.defineProperty(Function.prototype, "once", {
                    value: function () {
                        return d(this)
                    },
                    configurable: !0
                })
            })
        }, {}],
        102: [function (a, b, c) {
            function d(a, b, c) {
                if (!h(b)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (c = this), "[object Array]" === i.call(a) ? e(a, b, c) : "string" == typeof a ? f(a, b, c) : g(a, b, c)
            }

            function e(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) j.call(a, d) && b.call(c, a[d], d, a)
            }

            function f(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) b.call(c, a.charAt(d), d, a)
            }

            function g(a, b, c) {
                for (var d in a) j.call(a, d) && b.call(c, a[d], d, a)
            }
            var h = a(100);
            b.exports = d;
            var i = Object.prototype.toString,
                j = Object.prototype.hasOwnProperty
        }, {
            100: 100
        }],
        103: [function (a, b, c) {
            function d(a) {
                return a.replace(/^\s*|\s*$/g, "")
            }
            c = b.exports = d, c.left = function (a) {
                return a.replace(/^\s*/, "")
            }, c.right = function (a) {
                return a.replace(/\s*$/, "")
            }
        }, {}],
        104: [function (a, b, c) {
            var d = a(103),
                e = a(102),
                f = function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                };
            b.exports = function (a) {
                if (!a) return {};
                var b = {};
                return e(d(a).split("\n"), function (a) {
                    var c = a.indexOf(":"),
                        e = d(a.slice(0, c)).toLowerCase(),
                        g = d(a.slice(c + 1));
                    "undefined" == typeof b[e] ? b[e] = g : f(b[e]) ? b[e].push(g) : b[e] = [b[e], g]
                }), b
            }
        }, {
            102: 102,
            103: 103
        }],
        105: [function (a, b, c) {
            function d() {
                for (var a = {}, b = 0; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) e.call(c, d) && (a[d] = c[d])
                }
                return a
            }
            b.exports = d;
            var e = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [93])(93)
}),
function (a) {
    var b = a.vttjs = {},
        c = b.VTTCue,
        d = b.VTTRegion,
        e = a.VTTCue,
        f = a.VTTRegion;
    b.shim = function () {
        b.VTTCue = c, b.VTTRegion = d
    }, b.restore = function () {
        b.VTTCue = e, b.VTTRegion = f
    }
}(this),
function (a, b) {
    function c(a) {
        if ("string" != typeof a) return !1;
        var b = h[a.toLowerCase()];
        return !!b && a.toLowerCase()
    }

    function d(a) {
        if ("string" != typeof a) return !1;
        var b = i[a.toLowerCase()];
        return !!b && a.toLowerCase()
    }

    function e(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c) a[d] = c[d]
        }
        return a
    }

    function f(a, b, f) {
        var h = this,
            i = /MSIE\s8\.0/.test(navigator.userAgent),
            j = {};
        i ? h = document.createElement("custom") : j.enumerable = !0, h.hasBeenReset = !1;
        var k = "",
            l = !1,
            m = a,
            n = b,
            o = f,
            p = null,
            q = "",
            r = !0,
            s = "auto",
            t = "start",
            u = 50,
            v = "middle",
            w = 50,
            x = "middle";
        if (Object.defineProperty(h, "id", e({}, j, {
                get: function () {
                    return k
                },
                set: function (a) {
                    k = "" + a
                }
            })), Object.defineProperty(h, "pauseOnExit", e({}, j, {
                get: function () {
                    return l
                },
                set: function (a) {
                    l = !!a
                }
            })), Object.defineProperty(h, "startTime", e({}, j, {
                get: function () {
                    return m
                },
                set: function (a) {
                    if ("number" != typeof a) throw new TypeError("Start time must be set to a number.");
                    m = a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "endTime", e({}, j, {
                get: function () {
                    return n
                },
                set: function (a) {
                    if ("number" != typeof a) throw new TypeError("End time must be set to a number.");
                    n = a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "text", e({}, j, {
                get: function () {
                    return o
                },
                set: function (a) {
                    o = "" + a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "region", e({}, j, {
                get: function () {
                    return p
                },
                set: function (a) {
                    p = a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "vertical", e({}, j, {
                get: function () {
                    return q
                },
                set: function (a) {
                    var b = c(a);
                    if (b === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    q = b, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "snapToLines", e({}, j, {
                get: function () {
                    return r
                },
                set: function (a) {
                    r = !!a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "line", e({}, j, {
                get: function () {
                    return s
                },
                set: function (a) {
                    if ("number" != typeof a && a !== g) throw new SyntaxError("An invalid number or illegal string was specified.");
                    s = a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "lineAlign", e({}, j, {
                get: function () {
                    return t
                },
                set: function (a) {
                    var b = d(a);
                    if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                    t = b, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "position", e({}, j, {
                get: function () {
                    return u
                },
                set: function (a) {
                    if (a < 0 || a > 100) throw new Error("Position must be between 0 and 100.");
                    u = a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "positionAlign", e({}, j, {
                get: function () {
                    return v
                },
                set: function (a) {
                    var b = d(a);
                    if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                    v = b, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "size", e({}, j, {
                get: function () {
                    return w
                },
                set: function (a) {
                    if (a < 0 || a > 100) throw new Error("Size must be between 0 and 100.");
                    w = a, this.hasBeenReset = !0
                }
            })), Object.defineProperty(h, "align", e({}, j, {
                get: function () {
                    return x
                },
                set: function (a) {
                    var b = d(a);
                    if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                    x = b, this.hasBeenReset = !0
                }
            })), h.displayState = void 0, i) return h
    }
    var g = "auto",
        h = {
            "": !0,
            lr: !0,
            rl: !0
        },
        i = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        };
    f.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, a.VTTCue = a.VTTCue || f, b.VTTCue = f
}(this, this.vttjs || {}),
function (a, b) {
    function c(a) {
        if ("string" != typeof a) return !1;
        var b = f[a.toLowerCase()];
        return !!b && a.toLowerCase()
    }

    function d(a) {
        return "number" == typeof a && a >= 0 && a <= 100
    }

    function e() {
        var a = 100,
            b = 3,
            e = 0,
            f = 100,
            g = 0,
            h = 100,
            i = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function () {
                    return a
                },
                set: function (b) {
                    if (!d(b)) throw new Error("Width must be between 0 and 100.");
                    a = b
                }
            },
            lines: {
                enumerable: !0,
                get: function () {
                    return b
                },
                set: function (a) {
                    if ("number" != typeof a) throw new TypeError("Lines must be set to a number.");
                    b = a
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function () {
                    return f
                },
                set: function (a) {
                    if (!d(a)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    f = a
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function () {
                    return e
                },
                set: function (a) {
                    if (!d(a)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    e = a
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function () {
                    return h
                },
                set: function (a) {
                    if (!d(a)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    h = a
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function () {
                    return g
                },
                set: function (a) {
                    if (!d(a)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    g = a
                }
            },
            scroll: {
                enumerable: !0,
                get: function () {
                    return i
                },
                set: function (a) {
                    var b = c(a);
                    if (b === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    i = b
                }
            }
        })
    }
    var f = {
        "": !0,
        up: !0
    };
    a.VTTRegion = a.VTTRegion || e, b.VTTRegion = e
}(this, this.vttjs || {}),
function (a) {
    function b(a, b) {
        this.name = "ParsingError", this.code = a.code, this.message = b || a.message
    }

    function c(a) {
        function b(a, b, c, d) {
            return 3600 * (0 | a) + 60 * (0 | b) + (0 | c) + (0 | d) / 1e3
        }
        var c = a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return c ? c[3] ? b(c[1], c[2], c[3].replace(":", ""), c[4]) : c[1] > 59 ? b(c[1], c[2], 0, c[4]) : b(0, c[1], c[2], c[4]) : null
    }

    function d() {
        this.values = o(null)
    }

    function e(a, b, c, d) {
        var e = d ? a.split(d) : [a];
        for (var f in e)
            if ("string" == typeof e[f]) {
                var g = e[f].split(c);
                if (2 === g.length) {
                    var h = g[0],
                        i = g[1];
                    b(h, i)
                }
            }
    }

    function f(a, f, g) {
        function h() {
            var d = c(a);
            if (null === d) throw new b(b.Errors.BadTimeStamp, "Malformed timestamp: " + k);
            return a = a.replace(/^[^\sa-zA-Z-]+/, ""), d
        }

        function i(a, b) {
            var c = new d;
            e(a, function (a, b) {
                switch (a) {
                    case "region":
                        for (var d = g.length - 1; d >= 0; d--)
                            if (g[d].id === b) {
                                c.set(a, g[d].region);
                                break
                            }
                        break;
                    case "vertical":
                        c.alt(a, b, ["rl", "lr"]);
                        break;
                    case "line":
                        var e = b.split(","),
                            f = e[0];
                        c.integer(a, f), c.percent(a, f) ? c.set("snapToLines", !1) : null, c.alt(a, f, ["auto"]), 2 === e.length && c.alt("lineAlign", e[1], ["start", "middle", "end"]);
                        break;
                    case "position":
                        e = b.split(","), c.percent(a, e[0]), 2 === e.length && c.alt("positionAlign", e[1], ["start", "middle", "end"]);
                        break;
                    case "size":
                        c.percent(a, b);
                        break;
                    case "align":
                        c.alt(a, b, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), b.region = c.get("region", null), b.vertical = c.get("vertical", ""), b.line = c.get("line", "auto"), b.lineAlign = c.get("lineAlign", "start"), b.snapToLines = c.get("snapToLines", !0), b.size = c.get("size", 100), b.align = c.get("align", "middle"), b.position = c.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, b.align), b.positionAlign = c.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, b.align)
        }

        function j() {
            a = a.replace(/^\s+/, "")
        }
        var k = a;
        if (j(), f.startTime = h(), j(), "-->" !== a.substr(0, 3)) throw new b(b.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + k);
        a = a.substr(3), j(), f.endTime = h(), j(), i(a, f)
    }

    function g(a, b) {
        function d() {
            function a(a) {
                return b = b.substr(a.length), a
            }
            if (!b) return null;
            var c = b.match(/^([^<]*)(<[^>]+>?)?/);
            return a(c[1] ? c[1] : c[2])
        }

        function e(a) {
            return p[a]
        }

        function f(a) {
            for (; o = a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) a = a.replace(o[0], e);
            return a
        }

        function g(a, b) {
            return !s[b.localName] || s[b.localName] === a.localName
        }

        function h(b, c) {
            var d = q[b];
            if (!d) return null;
            var e = a.document.createElement(d);
            e.localName = d;
            var f = r[b];
            return f && c && (e[f] = c.trim()), e
        }
        for (var i, j = a.document.createElement("div"), k = j, l = []; null !== (i = d());)
            if ("<" !== i[0]) k.appendChild(a.document.createTextNode(f(i)));
            else {
                if ("/" === i[1]) {
                    l.length && l[l.length - 1] === i.substr(2).replace(">", "") && (l.pop(), k = k.parentNode);
                    continue
                }
                var m, n = c(i.substr(1, i.length - 2));
                if (n) {
                    m = a.document.createProcessingInstruction("timestamp", n), k.appendChild(m);
                    continue
                }
                var o = i.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!o) continue;
                if (m = h(o[1], o[3]), !m) continue;
                if (!g(k, m)) continue;
                o[2] && (m.className = o[2].substr(1).replace(".", " ")), l.push(o[1]), k.appendChild(m), k = m
            }
        return j
    }

    function h(a) {
        function b(a, b) {
            for (var c = b.childNodes.length - 1; c >= 0; c--) a.push(b.childNodes[c])
        }

        function c(a) {
            if (!a || !a.length) return null;
            var d = a.pop(),
                e = d.textContent || d.innerText;
            if (e) {
                var f = e.match(/^.*(\n|\r)/);
                return f ? (a.length = 0, f[0]) : e
            }
            return "ruby" === d.tagName ? c(a) : d.childNodes ? (b(a, d), c(a)) : void 0
        }
        var d, e = [],
            f = "";
        if (!a || !a.childNodes) return "ltr";
        for (b(e, a); f = c(e);)
            for (var g = 0; g < f.length; g++) {
                d = f.charCodeAt(g);
                for (var h = 0; h < t.length; h++)
                    if (t[h] === d) return "rtl"
            }
        return "ltr"
    }

    function i(a) {
        if ("number" == typeof a.line && (a.snapToLines || a.line >= 0 && a.line <= 100)) return a.line;
        if (!a.track || !a.track.textTrackList || !a.track.textTrackList.mediaElement) return -1;
        for (var b = a.track, c = b.textTrackList, d = 0, e = 0; e < c.length && c[e] !== b; e++) "showing" === c[e].mode && d++;
        return ++d * -1
    }

    function j() {}

    function k(a, b, c) {
        var d = /MSIE\s8\.0/.test(navigator.userAgent),
            e = "rgba(255, 255, 255, 1)",
            f = "rgba(0, 0, 0, 0.8)";
        d && (e = "rgb(255, 255, 255)", f = "rgb(0, 0, 0)"), j.call(this), this.cue = b, this.cueDiv = g(a, b.text);
        var i = {
            color: e,
            backgroundColor: f,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        d || (i.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl", i.unicodeBidi = "plaintext"), this.applyStyles(i, this.cueDiv), this.div = a.document.createElement("div"), i = {
            textAlign: "middle" === b.align ? "center" : b.align,
            font: c.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, d || (i.direction = h(this.cueDiv), i.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(i), this.div.appendChild(this.cueDiv);
        var k = 0;
        switch (b.positionAlign) {
            case "start":
                k = b.position;
                break;
            case "middle":
                k = b.position - b.size / 2;
                break;
            case "end":
                k = b.position - b.size
        }
        "" === b.vertical ? this.applyStyles({
            left: this.formatStyle(k, "%"),
            width: this.formatStyle(b.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(k, "%"),
            height: this.formatStyle(b.size, "%")
        }), this.move = function (a) {
            this.applyStyles({
                top: this.formatStyle(a.top, "px"),
                bottom: this.formatStyle(a.bottom, "px"),
                left: this.formatStyle(a.left, "px"),
                right: this.formatStyle(a.right, "px"),
                height: this.formatStyle(a.height, "px"),
                width: this.formatStyle(a.width, "px")
            })
        }
    }

    function l(a) {
        var b, c, d, e, f = /MSIE\s8\.0/.test(navigator.userAgent);
        if (a.div) {
            c = a.div.offsetHeight, d = a.div.offsetWidth, e = a.div.offsetTop;
            var g = (g = a.div.childNodes) && (g = g[0]) && g.getClientRects && g.getClientRects();
            a = a.div.getBoundingClientRect(), b = g ? Math.max(g[0] && g[0].height || 0, a.height / g.length) : 0
        }
        this.left = a.left, this.right = a.right, this.top = a.top || e, this.height = a.height || c, this.bottom = a.bottom || e + (a.height || c), this.width = a.width || d, this.lineHeight = void 0 !== b ? b : a.lineHeight, f && !this.lineHeight && (this.lineHeight = 13)
    }

    function m(a, b, c, d) {
        function e(a, b) {
            for (var e, f = new l(a), g = 1, h = 0; h < b.length; h++) {
                for (; a.overlapsOppositeAxis(c, b[h]) || a.within(c) && a.overlapsAny(d);) a.move(b[h]);
                if (a.within(c)) return a;
                var i = a.intersectPercentage(c);
                g > i && (e = new l(a), g = i), a = new l(f)
            }
            return e || f
        }
        var f = new l(b),
            g = b.cue,
            h = i(g),
            j = [];
        if (g.snapToLines) {
            var k;
            switch (g.vertical) {
                case "":
                    j = ["+y", "-y"], k = "height";
                    break;
                case "rl":
                    j = ["+x", "-x"], k = "width";
                    break;
                case "lr":
                    j = ["-x", "+x"], k = "width"
            }
            var m = f.lineHeight,
                n = m * Math.round(h),
                o = c[k] + m,
                p = j[0];
            Math.abs(n) > o && (n = n < 0 ? -1 : 1, n *= Math.ceil(o / m) * m), h < 0 && (n += "" === g.vertical ? c.height : c.width, j = j.reverse()), f.move(p, n)
        } else {
            var q = f.lineHeight / c.height * 100;
            switch (g.lineAlign) {
                case "middle":
                    h -= q / 2;
                    break;
                case "end":
                    h -= q
            }
            switch (g.vertical) {
                case "":
                    b.applyStyles({
                        top: b.formatStyle(h, "%")
                    });
                    break;
                case "rl":
                    b.applyStyles({
                        left: b.formatStyle(h, "%")
                    });
                    break;
                case "lr":
                    b.applyStyles({
                        right: b.formatStyle(h, "%")
                    })
            }
            j = ["+y", "-x", "+x", "-y"], f = new l(b)
        }
        var r = e(f, j);
        b.move(r.toCSSCompatValues(c))
    }

    function n() {}
    var o = Object.create || function () {
        function a() {}
        return function (b) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return a.prototype = b, new a
        }
    }();
    b.prototype = o(Error.prototype), b.prototype.constructor = b, b.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, d.prototype = {
        set: function (a, b) {
            this.get(a) || "" === b || (this.values[a] = b)
        },
        get: function (a, b, c) {
            return c ? this.has(a) ? this.values[a] : b[c] : this.has(a) ? this.values[a] : b
        },
        has: function (a) {
            return a in this.values
        },
        alt: function (a, b, c) {
            for (var d = 0; d < c.length; ++d)
                if (b === c[d]) {
                    this.set(a, b);
                    break
                }
        },
        integer: function (a, b) {
            /^-?\d+$/.test(b) && this.set(a, parseInt(b, 10))
        },
        percent: function (a, b) {
            var c;
            return !!((c = b.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (b = parseFloat(b), b >= 0 && b <= 100)) && (this.set(a, b), !0)
        }
    };
    var p = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        q = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        r = {
            v: "title",
            lang: "lang"
        },
        s = {
            rt: "ruby"
        },
        t = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    j.prototype.applyStyles = function (a, b) {
        b = b || this.div;
        for (var c in a) a.hasOwnProperty(c) && (b.style[c] = a[c])
    }, j.prototype.formatStyle = function (a, b) {
        return 0 === a ? 0 : a + b
    }, k.prototype = o(j.prototype), k.prototype.constructor = k, l.prototype.move = function (a, b) {
        switch (b = void 0 !== b ? b : this.lineHeight, a) {
            case "+x":
                this.left += b, this.right += b;
                break;
            case "-x":
                this.left -= b, this.right -= b;
                break;
            case "+y":
                this.top += b, this.bottom += b;
                break;
            case "-y":
                this.top -= b, this.bottom -= b
        }
    }, l.prototype.overlaps = function (a) {
        return this.left < a.right && this.right > a.left && this.top < a.bottom && this.bottom > a.top
    }, l.prototype.overlapsAny = function (a) {
        for (var b = 0; b < a.length; b++)
            if (this.overlaps(a[b])) return !0;
        return !1
    }, l.prototype.within = function (a) {
        return this.top >= a.top && this.bottom <= a.bottom && this.left >= a.left && this.right <= a.right
    }, l.prototype.overlapsOppositeAxis = function (a, b) {
        switch (b) {
            case "+x":
                return this.left < a.left;
            case "-x":
                return this.right > a.right;
            case "+y":
                return this.top < a.top;
            case "-y":
                return this.bottom > a.bottom
        }
    }, l.prototype.intersectPercentage = function (a) {
        var b = Math.max(0, Math.min(this.right, a.right) - Math.max(this.left, a.left)),
            c = Math.max(0, Math.min(this.bottom, a.bottom) - Math.max(this.top, a.top)),
            d = b * c;
        return d / (this.height * this.width)
    }, l.prototype.toCSSCompatValues = function (a) {
        return {
            top: this.top - a.top,
            bottom: a.bottom - this.bottom,
            left: this.left - a.left,
            right: a.right - this.right,
            height: this.height,
            width: this.width
        }
    }, l.getSimpleBoxPosition = function (a) {
        var b = a.div ? a.div.offsetHeight : a.tagName ? a.offsetHeight : 0,
            c = a.div ? a.div.offsetWidth : a.tagName ? a.offsetWidth : 0,
            d = a.div ? a.div.offsetTop : a.tagName ? a.offsetTop : 0;
        a = a.div ? a.div.getBoundingClientRect() : a.tagName ? a.getBoundingClientRect() : a;
        var e = {
            left: a.left,
            right: a.right,
            top: a.top || d,
            height: a.height || b,
            bottom: a.bottom || d + (a.height || b),
            width: a.width || c
        };
        return e
    }, n.StringDecoder = function () {
        return {
            decode: function (a) {
                if (!a) return "";
                if ("string" != typeof a) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(a))
            }
        }
    }, n.convertCueToDOMTree = function (a, b) {
        return a && b ? g(a, b) : null
    };
    var u = .05,
        v = "sans-serif",
        w = "1.5%";
    n.processCues = function (a, b, c) {
        function d(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].hasBeenReset || !a[b].displayState) return !0;
            return !1
        }
        if (!a || !b || !c) return null;
        for (; c.firstChild;) c.removeChild(c.firstChild);
        var e = a.document.createElement("div");
        if (e.style.position = "absolute", e.style.left = "0", e.style.right = "0", e.style.top = "0", e.style.bottom = "0", e.style.margin = w, c.appendChild(e), d(b)) {
            var f = [],
                g = l.getSimpleBoxPosition(e),
                h = Math.round(g.height * u * 100) / 100,
                i = {
                    font: h + "px " + v
                };
            ! function () {
                for (var c, d, h = 0; h < b.length; h++) d = b[h], c = new k(a, d, i), e.appendChild(c.div), m(a, c, g, f), d.displayState = c.div, f.push(l.getSimpleBoxPosition(c))
            }()
        } else
            for (var j = 0; j < b.length; j++) e.appendChild(b[j].displayState)
    }, n.Parser = function (a, b, c) {
        c || (c = b, b = {}), b || (b = {}), this.window = a, this.vttjs = b, this.state = "INITIAL", this.buffer = "", this.decoder = c || new TextDecoder("utf8"), this.regionList = []
    }, n.Parser.prototype = {
        reportOrThrowError: function (a) {
            if (!(a instanceof b)) throw a;
            this.onparsingerror && this.onparsingerror(a)
        },
        parse: function (a) {
            function c() {
                for (var a = i.buffer, b = 0; b < a.length && "\r" !== a[b] && "\n" !== a[b];) ++b;
                var c = a.substr(0, b);
                return "\r" === a[b] && ++b, "\n" === a[b] && ++b, i.buffer = a.substr(b), c
            }

            function g(a) {
                var b = new d;
                if (e(a, function (a, c) {
                        switch (a) {
                            case "id":
                                b.set(a, c);
                                break;
                            case "width":
                                b.percent(a, c);
                                break;
                            case "lines":
                                b.integer(a, c);
                                break;
                            case "regionanchor":
                            case "viewportanchor":
                                var e = c.split(",");
                                if (2 !== e.length) break;
                                var f = new d;
                                if (f.percent("x", e[0]), f.percent("y", e[1]), !f.has("x") || !f.has("y")) break;
                                b.set(a + "X", f.get("x")), b.set(a + "Y", f.get("y"));
                                break;
                            case "scroll":
                                b.alt(a, c, ["up"])
                        }
                    }, /=/, /\s/), b.has("id")) {
                    var c = new(i.vttjs.VTTRegion || i.window.VTTRegion);
                    c.width = b.get("width", 100), c.lines = b.get("lines", 3), c.regionAnchorX = b.get("regionanchorX", 0), c.regionAnchorY = b.get("regionanchorY", 100), c.viewportAnchorX = b.get("viewportanchorX", 0), c.viewportAnchorY = b.get("viewportanchorY", 100), c.scroll = b.get("scroll", ""), i.onregion && i.onregion(c), i.regionList.push({
                        id: b.get("id"),
                        region: c
                    })
                }
            }

            function h(a) {
                e(a, function (a, b) {
                    switch (a) {
                        case "Region":
                            g(b)
                    }
                }, /:/)
            }
            var i = this;
            a && (i.buffer += i.decoder.decode(a, {
                stream: !0
            }));
            try {
                var j;
                if ("INITIAL" === i.state) {
                    if (!/\r\n|\n/.test(i.buffer)) return this;
                    j = c();
                    var k = j.match(/^WEBVTT([ \t].*)?$/);
                    if (!k || !k[0]) throw new b(b.Errors.BadSignature);
                    i.state = "HEADER"
                }
                for (var l = !1; i.buffer;) {
                    if (!/\r\n|\n/.test(i.buffer)) return this;
                    switch (l ? l = !1 : j = c(), i.state) {
                        case "HEADER":
                            /:/.test(j) ? h(j) : j || (i.state = "ID");
                            continue;
                        case "NOTE":
                            j || (i.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(j)) {
                                i.state = "NOTE";
                                break
                            }
                            if (!j) continue;
                            if (i.cue = new(i.vttjs.VTTCue || i.window.VTTCue)(0, 0, ""), i.state = "CUE", j.indexOf("-->") === -1) {
                                i.cue.id = j;
                                continue
                            }
                        case "CUE":
                            try {
                                f(j, i.cue, i.regionList)
                            } catch (m) {
                                i.reportOrThrowError(m), i.cue = null, i.state = "BADCUE";
                                continue
                            }
                            i.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var n = j.indexOf("-->") !== -1;
                            if (!j || n && (l = !0)) {
                                i.oncue && i.oncue(i.cue), i.cue = null, i.state = "ID";
                                continue
                            }
                            i.cue.text && (i.cue.text += "\n"), i.cue.text += j;
                            continue;
                        case "BADCUE":
                            j || (i.state = "ID");
                            continue
                    }
                }
            } catch (m) {
                i.reportOrThrowError(m), "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue), i.cue = null, i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function () {
            var a = this;
            try {
                if (a.buffer += a.decoder.decode(), (a.cue || "HEADER" === a.state) && (a.buffer += "\n\n", a.parse()), "INITIAL" === a.state) throw new b(b.Errors.BadSignature)
            } catch (c) {
                a.reportOrThrowError(c)
            }
            return a.onflush && a.onflush(), this
        }
    }, a.WebVTT = n
}(this, this.vttjs || {});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (a) {
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
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
! function () {
    "use strict";

    function e(n) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.2", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = {
            elements: {},
            containers: []
        }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (O.tools.isNode(e.container)) return e.container
        }
        return O.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++O.uid
    }

    function o(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config,
            i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = {
            target: e,
            config: t,
            interval: n
        };
        O.history.push(i)
    }

    function f() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
            O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0)
        }
        return O
    }

    function d() {
        T(y)
    }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function (o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function (n) {
            t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1)
        })
    }

    function m(e, t) {
        var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
            started: new Date
        }, e.sequence.timer.clock = window.setTimeout(function () {
            o.blocked = !1, e.sequence.timer = null, d()
        }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0,
            o = 0,
            r = "after";
        switch (e) {
            case "reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case "reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {
            started: new Date
        }, t.timer.clock = window.setTimeout(function () {
            t.config[r](t.domEl), t.timer = null
        }, o - i)
    }

    function g(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return q(e) && !e.revealing && !e.disabled
    }

    function w(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen
    }

    function v(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !q(e) && e.config.reset && e.revealing && !e.disabled
    }

    function b(e) {
        return {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }

    function h(e) {
        if (e && e !== window.document.documentElement) {
            var t = x(e);
            return {
                x: e.scrollLeft + t.left,
                y: e.scrollTop + t.top
            }
        }
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }

    function x(e) {
        var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return {
            top: t,
            left: n,
            height: i,
            width: o
        }
    }

    function q(e) {
        function t() {
            var t = c + a * s,
                n = f + l * s,
                i = d - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n > p && y < w
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }
        var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            f = i.left,
            d = c + a,
            u = f + l;
        return t() || n()
    }

    function E() {}
    var O, T;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function (e) {},
        beforeReset: function (e) {},
        afterReveal: function (e) {},
        afterReset: function (e) {}
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, d) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = {
            id: w,
            interval: a,
            elemIds: [],
            active: !1
        });
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
            id: i(),
            domEl: y[v],
            seen: !1,
            revealing: !1
        }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
            id: g.id,
            index: g.elemIds.length
        }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O
    }, e.prototype.sync = function () {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            f()
        }
        return O
    }, E.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, E.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, E.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, E.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, E.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, E.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            },
            getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H)
        },
        K = function () {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function (d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L), L = setInterval(function () {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function () {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function (a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function () {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
! function (t, e) {
    "use strict";

    function r(t) {
        t = t.split(" ");
        for (var e = {}, r = t.length, n = []; r--;) e.hasOwnProperty(t[r]) || (e[t[r]] = 1, n.unshift(t[r]));
        return n.join(" ")
    }
    var n = "file:" === t.location.protocol,
        i = e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"),
        o = Array.prototype.forEach || function (t, e) {
            if (void 0 === this || null === this || "function" != typeof t) throw new TypeError;
            var r, n = this.length >>> 0;
            for (r = 0; n > r; ++r) r in this && t.call(e, this[r], r, this)
        },
        a = {},
        l = 0,
        s = [],
        u = [],
        c = {},
        f = function (t) {
            return t.cloneNode(!0)
        },
        p = function (t, e) {
            u[t] = u[t] || [], u[t].push(e)
        },
        d = function (t) {
            for (var e = 0, r = u[t].length; r > e; e++) ! function (e) {
                setTimeout(function () {
                    u[t][e](f(a[t]))
                }, 0)
            }(e)
        },
        v = function (e, r) {
            if (void 0 !== a[e]) a[e] instanceof SVGSVGElement ? r(f(a[e])) : p(e, r);
            else {
                if (!t.XMLHttpRequest) return r("Browser does not support XMLHttpRequest"), !1;
                a[e] = {}, p(e, r);
                var i = new XMLHttpRequest;
                i.onreadystatechange = function () {
                    if (4 === i.readyState) {
                        if (404 === i.status || null === i.responseXML) return r("Unable to load SVG file: " + e), n && r("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."), r(), !1;
                        if (!(200 === i.status || n && 0 === i.status)) return r("There was a problem injecting the SVG: " + i.status + " " + i.statusText), !1;
                        if (i.responseXML instanceof Document) a[e] = i.responseXML.documentElement;
                        else if (DOMParser && DOMParser instanceof Function) {
                            var t;
                            try {
                                var o = new DOMParser;
                                t = o.parseFromString(i.responseText, "text/xml")
                            } catch (l) {
                                t = void 0
                            }
                            if (!t || t.getElementsByTagName("parsererror").length) return r("Unable to parse SVG file: " + e), !1;
                            a[e] = t.documentElement
                        }
                        d(e)
                    }
                }, i.open("GET", e), i.overrideMimeType && i.overrideMimeType("text/xml"), i.send()
            }
        },
        h = function (e, n, a, u) {
            var f = e.getAttribute("data-src") || e.getAttribute("src");
            if (!/\.svg/i.test(f)) return void u("Attempted to inject a file with a non-svg extension: " + f);
            if (!i) {
                var p = e.getAttribute("data-fallback") || e.getAttribute("data-png");
                return void(p ? (e.setAttribute("src", p), u(null)) : a ? (e.setAttribute("src", a + "/" + f.split("/").pop().replace(".svg", ".png")), u(null)) : u("This browser does not support SVG and no PNG fallback was defined."))
            } - 1 === s.indexOf(e) && (s.push(e), e.setAttribute("src", ""), v(f, function (i) {
                if ("undefined" == typeof i || "string" == typeof i) return u(i), !1;
                var a = e.getAttribute("id");
                a && i.setAttribute("id", a);
                var p = e.getAttribute("title");
                p && i.setAttribute("title", p);
                var d = [].concat(i.getAttribute("class") || [], "injected-svg", e.getAttribute("class") || []).join(" ");
                i.setAttribute("class", r(d));
                var v = e.getAttribute("style");
                v && i.setAttribute("style", v);
                var h = [].filter.call(e.attributes, function (t) {
                    return /^data-\w[\w\-]*$/.test(t.name)
                });
                o.call(h, function (t) {
                    t.name && t.value && i.setAttribute(t.name, t.value)
                });
                var g, m, b, y, A, w = {
                    clipPath: ["clip-path"],
                    "color-profile": ["color-profile"],
                    cursor: ["cursor"],
                    filter: ["filter"],
                    linearGradient: ["fill", "stroke"],
                    marker: ["marker", "marker-start", "marker-mid", "marker-end"],
                    mask: ["mask"],
                    pattern: ["fill", "stroke"],
                    radialGradient: ["fill", "stroke"]
                };
                Object.keys(w).forEach(function (t) {
                    g = t, b = w[t], m = i.querySelectorAll("defs " + g + "[id]");
                    for (var e = 0, r = m.length; r > e; e++) {
                        y = m[e].id, A = y + "-" + l;
                        var n;
                        o.call(b, function (t) {
                            n = i.querySelectorAll("[" + t + '*="' + y + '"]');
                            for (var e = 0, r = n.length; r > e; e++) n[e].setAttribute(t, "url(#" + A + ")")
                        }), m[e].id = A
                    }
                }), i.removeAttribute("xmlns:a");
                for (var x, S, k = i.querySelectorAll("script"), j = [], G = 0, T = k.length; T > G; G++) S = k[G].getAttribute("type"), S && "application/ecmascript" !== S && "application/javascript" !== S || (x = k[G].innerText || k[G].textContent, j.push(x), i.removeChild(k[G]));
                if (j.length > 0 && ("always" === n || "once" === n && !c[f])) {
                    for (var M = 0, V = j.length; V > M; M++) new Function(j[M])(t);
                    c[f] = !0
                }
                var E = i.querySelectorAll("style");
                o.call(E, function (t) {
                    t.textContent += ""
                }), e.parentNode.replaceChild(i, e), delete s[s.indexOf(e)], e = null, l++, u(i)
            }))
        },
        g = function (t, e, r) {
            e = e || {};
            var n = e.evalScripts || "always",
                i = e.pngFallback || !1,
                a = e.each;
            if (void 0 !== t.length) {
                var l = 0;
                o.call(t, function (e) {
                    h(e, n, i, function (e) {
                        a && "function" == typeof a && a(e), r && t.length === ++l && r(l)
                    })
                })
            } else t ? h(t, n, i, function (e) {
                a && "function" == typeof a && a(e), r && r(1), t = null
            }) : r && r(0)
        };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = exports = g : "function" == typeof define && define.amd ? define(function () {
        return g
    }) : "object" == typeof t && (t.SVGInjector = g)
}(window, document);
//# sourceMappingURL=svg-injector.map.js
(function () {
    var a, b, c, d, e, f = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function () {
        function a() {}
        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function (a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function (a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function () {}, a
    }()), d = this.getComputedStyle || function (a, b) {
        return this.getPropertyValue = function (b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function () {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function (b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function (a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
! function (a) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function (a, e) {
            $(a).ajaxChimp(e)
        }
    }, $.fn.ajaxChimp = function (a) {
        return $(this).each(function (e, i) {
            var n = $(i);
            console.log("Submitting form...");
            var t = n.find("input[type=email]"),
                s = n.find('p[class="mc-label"]'),
                o = $.extend({
                    url: n.attr("action"),
                    language: "en"
                }, a),
                r = o.url.replace("/post?", "/post-json?").concat("&c=?");
            n.attr("novalidate", "true"), t.attr("name", "EMAIL"), n.submit(function () {
                var email = t.val()

                function a(a) {
                    if ("success" === a.result) {
                        e = "We have sent you a confirmation email", s.removeClass("error").addClass("valid"), t.removeClass("error").addClass("valid");
                        if (window.location.href.indexOf('ref') > 0)
                            fetch(window.location.href, {
                                method: 'post'
                            })
                        fetch('https://helloaiko.com/getref?email=' + email, {
                            method: 'post'
                        }).then(function (res) {
                            console.log("Reffing " + email)
                            res.text().then(function (l) {
                                console.log("Got reflink " + l)
                                fetch('https://helloaiko.com/getpos?email=' + email, {
                                    method: 'post'
                                }).then(function (res) {
                                    console.log("Reffing " + email)
                                    res.text().then(function (c) {
                                        console.log("Got pos " + c)
                                        e = "You're "+c+"th on the waitlist! To raise your spot on the waitlist, you can refer friends with your special link: <a class=\"reflink\" href=\"https://helloaiko.com/ref/" + l + "\">https://helloaiko.com/ref/" + l + "</a><br /><br /><a class=\"nav-button btn btn-primary btn-xl\" onclick=\"FB.ui(\{ method: 'share', display: 'popup', href: 'https://helloaiko.com/ref/" + l + "'},function(response){});\" style=\"margin-left:0px !important;\">Share with Facebook<\/a>"
                                        return "en" !== o.language && void 0 !== $.ajaxChimp.responses[e] && $.ajaxChimp.translations && $.ajaxChimp.translations[o.language] && $.ajaxChimp.translations[o.language][$.ajaxChimp.responses[e]] && (e = $.ajaxChimp.translations[o.language][$.ajaxChimp.responses[e]]), s.html(e), s.show(2e3), o.callback && o.callback(a)
                                    })
                                })
                            })
                        })
                    } else {
                        t.removeClass("valid").addClass("error"), s.removeClass("valid").addClass("error");
                        var i = -1;
                        try {
                            var n = a.msg.split(" - ", 2);
                            if (a.msg.indexOf("is already subscribed") > 0) {
                                a.msg = "You're already subscribed! Just a sec while we fetch your referral link..."
                                fetch('https://helloaiko.com/getref?email=' + email, {
                                    method: 'post'
                                }).then(function (res) {
                                    console.log("Reffing " + email)
                                    res.text().then(function (l) {
                                        console.log("Got reflink " + l)
                                        fetch('https://helloaiko.com/getpos?email=' + email, {
                                            method: 'post'
                                        }).then(function (res) {
                                            console.log("Reffing " + email)
                                            res.text().then(function (c) {
                                                console.log("Got pos " + c)
                                                e = "You're <b>"+c+"th</b> on the waitlist! To raise your spot on the waitlist, you can refer friends with your special link: <a class=\"reflink\" href=\"https://helloaiko.com/ref/" + l + "\">https://helloaiko.com/ref/" + l + "</a><br /><br /><a class=\"nav-button btn btn-primary btn-xl\" onclick=\"FB.ui(\{ method: 'share', display: 'popup', href: 'https://helloaiko.com/ref/" + l + "'},function(response){});\" style=\"margin-left:0px !important;\">Share with Facebook<\/a>"
                                                return "en" !== o.language && void 0 !== $.ajaxChimp.responses[e] && $.ajaxChimp.translations && $.ajaxChimp.translations[o.language] && $.ajaxChimp.translations[o.language][$.ajaxChimp.responses[e]] && (e = $.ajaxChimp.translations[o.language][$.ajaxChimp.responses[e]]), s.html(e), s.show(2e3), o.callback && o.callback(a)
                                            })
                                        })
                                    })
                                })
                            }
                            if (void 0 === n[1]) e = a.msg;
                            else {
                                var r = parseInt(n[0], 10);
                                r.toString() === n[0] ? (i = n[0], e = n[1]) : (i = -1, e = a.msg)
                            }
                        } catch (n) {
                            i = -1, e = a.msg
                        }
                        return "en" !== o.language && void 0 !== $.ajaxChimp.responses[e] && $.ajaxChimp.translations && $.ajaxChimp.translations[o.language] && $.ajaxChimp.translations[o.language][$.ajaxChimp.responses[e]] && (e = $.ajaxChimp.translations[o.language][$.ajaxChimp.responses[e]]), s.html(e), s.show(2e3), o.callback && o.callback(a)
                    }
                }
                var e, i = {},
                    l = n.serializeArray();
                $.each(l, function (a, e) {
                    i[e.name] = e.value
                }), $.ajax({
                    url: r,
                    data: i,
                    success: a,
                    dataType: "jsonp",
                    error: function (a, e) {
                        console.log("mailchimp ajax submit error: " + e)
                    }
                });
                var c = "Submitting... if you see this message for more than a few seconds, your wireless is blocking our mailing list. You can subscribe directly <a href=\"\">here.</a>";
                return "en" !== o.language && $.ajaxChimp.translations && $.ajaxChimp.translations[o.language] && $.ajaxChimp.translations[o.language].submit && (c = $.ajaxChimp.translations[o.language].submit), s.html(c).show(2e3), !1
            })
        }), this
    }, $("#mc-embedded-subscribe-form").ajaxChimp(), $("#mc-embedded-subscribe-form-2").ajaxChimp(), a(window).on("load", function () {
        a("#spinner").animate({
            opacity: 0
        }, 400, function () {
            a("#spinner").css({
                display: "none"
            })
        })
    }), SVGInjector(document.querySelectorAll("img.inject-inline")), a("body").data("scroll-animation") === !0 && new WOW({
        mobile: !1
    }).init(), a("a.page-scroll").bind("click", function (e) {
        var i = a(this);
        a("html, body").stop().animate({
            scrollTop: a(i.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), e.preventDefault()
    }), a(".navbar-collapse ul :not(li.dropdown) a").click(function () {
        a(".navbar-toggle:visible").click()
    }), a("#mainNav").affix({
        offset: {
            top: 100
        }
    }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 200), sr.reveal(".sr-button", {
        duration: 1e3,
        delay: 200
    }), sr.reveal(".sr-contact", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 300), a(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    }), a(".person-selector>.person").click(function () {
        var e = this;
        a(".single-quote--active").animate({
            opacity: 0
        }, 300, function () {
            a(".single-quote--active").removeClass("single-quote--active").css({
                opacity: 1
            }), a("#" + e.id + "-quote").addClass("single-quote--active")
        }), a(".person--active").animate({
            width: 45,
            height: 45
        }, 300, function () {
            a(".person--active").removeClass("person--active")
        }), a(e).animate({
            width: 56,
            height: 56,
            "border-radius": 28
        }, 300, function () {
            a(e).addClass("person--active")
        })
    })
}(jQuery);

window.fbAsyncInit = function () {
    FB.init({
        appId: '282059942292868',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.12'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));