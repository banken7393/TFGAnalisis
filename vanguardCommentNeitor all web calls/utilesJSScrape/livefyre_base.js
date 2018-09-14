(function(z) {
    z.lh = function(a, b, c) {
        for (var d = a.length, f = z.p(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in f && b.call(c, f[g], g, a))
                return g;
        return -1
    }
    ;
    var mh = function(a, b) {
        var c = z.lh(a, b, void 0);
        return 0 > c ? null : z.p(a) ? a.charAt(c) : a[c]
    };
    var nh = function(a, b, c) {
        for (var d = a.length, f = z.p(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in f && !b.call(c, f[g], g, a))
                return !1;
        return !0
    };
    z.oh = function(a) {
        return "number" == typeof a
    }
    ;
    var ph = function(a, b) {
        if ("function" == typeof a.every)
            return a.every(b, void 0);
        if (z.fa(a) || z.p(a))
            return nh(a, b, void 0);
        for (var c = z.nd(a), d = z.md(a), f = d.length, g = 0; g < f; g++)
            if (!b.call(void 0, d[g], c && c[g], a))
                return !1;
        return !0
    };
    var qh = function(a) {
        return "function" == typeof a.nb ? a.nb() : z.fa(a) || z.p(a) ? a.length : z.Za(a)
    };
    var rh = function(a) {
        a = a.tabIndex;
        return z.oh(a) && 0 <= a && 32768 > a
    };
    var sh = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    };
    var th = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var f = 0, g = 0, h; h = a[g]; g++)
                    b == h.nodeName && (d[f++] = h);
                d.length = f;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = f = 0; h = a[g]; g++)
                b = h.className,
                "function" == typeof b.split && z.Sa(b.split(/\s+/), c) && (d[f++] = h);
            d.length = f;
            return d
        }
        return a
    };
    z.uh = function(a, b) {
        this.x = z.ba(a) ? a : 0;
        this.y = z.ba(b) ? b : 0
    }
    ;
    z.vh = function(a, b, c, d) {
        if (b = a.Qf[b]) {
            var f = a.qe;
            (b = mh(b, function(a) {
                return f[a + 1] == c && f[a + 2] == d
            })) && a.ap(b)
        }
    }
    ;
    var wh = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    };
    z.xh = function(a) {
        z.Fd.call(this, a);
        var b = z.xh.prototype.k;
        if (a && !a[b.X]) {
            a = this.get(b.za);
            var c = this.get(b.Li);
            this.set(b.X, a + ":" + c)
        }
    }
    ;
    var yh = function(a, b) {
        var c = qh(b);
        if (a.nb() > c)
            return !1;
        !(b instanceof z.zd) && 5 < c && (b = new z.zd(b));
        return ph(a, function(a) {
            var c = b;
            return "function" == typeof c.contains ? c.contains(a) : "function" == typeof c.Yi ? c.Yi(a) : z.fa(c) || z.p(c) ? z.Sa(c, a) : wh(c, a)
        })
    };
    var zh = function(a, b) {
        return a === b
    };
    var Ah = function(a, b) {
        b = b || a.L;
        var c;
        z.y(a, function(d) {
            if (z.ga(d) && d.jk)
                for (var f = 0, g = d.jk.length; f < g; ++f) {
                    var h = d.jk[f];
                    c = d.np ? d.np : b.T && z.ga(b.T.subscribe) ? b.T : b;
                    z.vh(c, h, d, a)
                }
        })
    };
    var Bh = function(a) {
        return sh(a) && rh(a)
    };
    var Ch = function(a, b) {
        var c = b[0]
          , d = b[1];
        if (!z.wg && d && (d.name || d.type)) {
            c = ["\x3c", c];
            d.name && c.push(' name\x3d"', z.ya(d.name), '"');
            if (d.type) {
                c.push(' type\x3d"', z.ya(d.type), '"');
                var f = {};
                z.A(f, d);
                delete f.type;
                d = f
            }
            c.push("\x3e");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (z.p(d) ? c.className = d : z.ea(d) ? c.className = d.join(" ") : z.Hc(c, d));
        2 < b.length && z.Jc(a, c, b, 2);
        return c
    };
    var Dh = function(a) {
        var b = z.J ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return z.C && z.B("10") && a.pageYOffset != b.scrollTop ? new z.uh(b.scrollLeft,b.scrollTop) : new z.uh(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    };
    z.Eh = function(a, b) {
        var c = b || window.document
          , d = null;
        return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : th(window.document, "*", a, b)[0]) || null
    }
    ;
    var Fh = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : th(window.document, "*", a, b)
    };
    var Gh = function(a, b) {
        return z.p(b) ? a.getElementById(b) : b
    };
    var Hh = function(a, b) {
        this.width = a;
        this.height = b
    };
    z.K = function(a, b) {
        return z.aa[a] = b
    }
    ;
    z.Ih = function(a, b, c, d) {
        z.F.id ? c() : a.login(b, c, d)
    }
    ;
    z.Jh = function() {
        var a = z.F;
        return {
            gm: a.get(z.E.ue),
            VP: a.kc(),
            e2: a.get(z.E.gu)
        }
    }
    ;
    var Kh = function(a, b, c, d, f) {
        a = b.af;
        var g = {};
        b.OC && (g.collectionMeta = b.OC);
        b.Ek && (g.checksum = b.Ek);
        z.ba(b.aI) && (g.signed = b.aI);
        (new z.Ee({
            url: z.v.J.so + z.v.cf + "site/" + a + "/collection/" + (c ? "create" : "update"),
            method: "POST",
            timeout: 1E4,
            ta: d,
            oa: f
        })).send(z.cd(g))
    };
    var Lh = function(a) {
        this.k = z.Fg;
        z.Fd.call(this, a)
    };
    z.Mh = function(a, b, c, d) {
        var f;
        z.p(b) ? (f = a.jc(b),
        b = c) : (f = a.Ga.Ag,
        d = c);
        a.on(f, b, d)
    }
    ;
    var Nh = function(a) {
        return Dh(a.Ma)
    };
    var Oh = function() {
        return !0
    };
    var Ph = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    z.Qh = function(a, b) {
        var c = a.createElement("div");
        z.C ? (c.innerHTML = "\x3cbr\x3e" + b,
        c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (var d = a.createDocumentFragment(); c.firstChild; )
            d.appendChild(c.firstChild);
        return d
    }
    ;
    z.Rh = function(a) {
        a = (a || window).document.documentElement;
        return new Hh(a.clientWidth,a.clientHeight)
    }
    ;
    var Sh = function(a) {
        a && "function" == typeof a.q && a.q()
    };
    var Th = function(a, b, c) {
        a.userService.fetch(b, c)
    };
    var Uh = function(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var f = 0; a && (c || f <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            f++
        }
        return null
    };
    var Vh = function(a, b) {
        for (var c = b; c = c.previousSibling; )
            if (c == a)
                return -1;
        return 1
    };
    var Wh = function(a) {
        if (8192 > a.length)
            return String.fromCharCode.apply(null, a);
        for (var b = "", c = 0; c < a.length; c += 8192)
            b += String.fromCharCode.apply(null, z.Ya(a, c, c + 8192));
        return b
    };
    var Xh = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var Yh = function(a, b, c, d, f) {
        for (var g = 0, h = a.length, k; g < h; ) {
            var m = g + h >> 1, r;
            r = c ? b.call(f, a[m], m, a) : b(d, a[m]);
            0 < r ? g = m + 1 : (h = m,
            k = !r)
        }
        return k ? g : ~g
    };
    var Zh = function(a, b, c, d) {
        return z.Va.splice.apply(a, z.Ya(arguments, 1))
    };
    z.$h = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    ;
    var ai = function() {
        this.F = [];
        this.Vw = this.Uw = 0
    };
    var bi = function(a) {
        function b() {
            return {
                articleId: a.ha.articleId,
                siteId: a.ha.siteId,
                serverUrl: (z.cf(z.af()) || {}).serverUrl
            }
        }
        if ("object" !== typeof window.Livefyre || "function" !== typeof window.Livefyre.require)
            return new z.ff;
        window.Livefyre.require(["auth"], function(c) {
            function d() {
                if (!z.F.id) {
                    var d = z.cf(z.af()) || {};
                    if (d.token)
                        if (d.permissions)
                            (0,
                            z.Ef)((0,
                            z.q)(a.An, a, {
                                data: d
                            }));
                        else {
                            var g = b();
                            g.token = d.token.value;
                            Th(c, g, function(b, c, d) {
                                b || (0,
                                z.Ef)((0,
                                z.q)(a.An, a, {
                                    data: d
                                }))
                            })
                        }
                }
            }
            c.get("livefyre") && d();
            c.on("login.livefyre", d);
            c.on("logout", function() {
                a.Te()
            })
        });
        return {
            login: function(a) {
                window.Livefyre.require(["auth"], function(d) {
                    if (!d.hasDelegate())
                        throw "No Auth Delegate";
                    d.login(function(f, g) {
                        if (f)
                            return a.failure();
                        var h = b();
                        h.token = g.livefyre;
                        Th(d, h, function(b, d, f) {
                            a.success({
                                data: f
                            })
                        })
                    })
                })
            },
            logout: function(a) {
                window.Livefyre.require(["auth"], function(b) {
                    if (!b.hasDelegate())
                        throw "No Auth Delegate";
                    b.logout(function(b) {
                        if (b)
                            return a.failure();
                        a.success()
                    })
                })
            },
            getUserPermissions: function(a, d) {
                window.Livefyre.require(["auth"], function(f) {
                    var g = b();
                    g.token = a;
                    Th(f, g, d)
                })
            },
            viewProfile: function(a, b) {
                window.Livefyre.require(["auth"], function(a) {
                    a.viewProfile(b)
                })
            },
            editProfile: function() {
                window.Livefyre.require(["auth"], function(a) {
                    a.editProfile()
                })
            },
            loginByCookie: function() {},
            appkitMetaDelegate: !0
        }
    };
    var ci = function(a) {
        var b = [];
        z.w(a, function(a) {
            var d = {};
            d.le = a.provider;
            d.Ba = a.profileUrl;
            wh(di, d.le) && b.push(d)
        });
        return b
    };
    var ei = function(a) {
        var b = z.qd(a);
        a = new z.pd;
        var c = null;
        a.next = function() {
            for (; ; ) {
                if (null == c) {
                    var a = b.next();
                    c = z.qd(a)
                }
                try {
                    return c.next()
                } catch (f) {
                    if (f !== z.rd)
                        throw f;
                    c = null
                }
            }
        }
        ;
        return a
    };
    var fi = function(a) {
        var b = a;
        z.p(a) && (b = window.document.createElement("div"),
        b.innerHTML = a);
        return "innerText"in b ? b.innerText : b.textContent
    };
    z.gi = function(a, b, c) {
        if (!b && !c)
            return null;
        var d = b ? b.toUpperCase() : null;
        return Uh(a, function(a) {
            return (!d || a.nodeName == d) && (!c || z.p(a.className) && z.Sa(a.className.split(/\s+/), c))
        }, !0)
    }
    ;
    z.hi = function(a) {
        if ("outerHTML"in a)
            return a.outerHTML;
        var b = z.Fc(a).createElement("div");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    }
    ;
    var ii = function(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (var d = b; d.parentNode != c; )
            d = d.parentNode;
        return Vh(d, a)
    };
    z.ji = function(a, b, c) {
        return Ch(window.document, arguments)
    }
    ;
    var ki = function(a, b, c) {
        for (var d = z.p(a) ? a.split("") : a, f = a.length - 1; 0 <= f; --f)
            f in d && b.call(c, d[f], f, a)
    };
    var li = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    var mi = function(a) {
        return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    };
    z.ni = function(a) {
        var b = z.wf;
        if (a)
            return b.delegate = z.v.doNotTrack.lo ? new z.jf : b.ha.authDelegate || (z.v.Ee ? bi(b) : new z.mf(a)),
            b || void 0
    }
    ;
    var oi = function(a) {
        return a instanceof z.Rd ? a.clone() : new z.Rd(a,void 0)
    };
    var pi = function(a) {
        var b = z.Nd
          , c = a.getAttribute("resource").replace("acct:", "")
          , d = z.Sc(a).innerHTML
          , f = a.getAttribute("data-lf-provider");
        f === z.Gg.dd && (c = d + "@twitter.com");
        var g = {};
        g[b.X] = c;
        g[b.za] = d;
        a = a.getAttribute("href");
        g[b.Yb] = a ? a : z.v.J.qt + "/" + g[b.za];
        g[b.ua] = z.Jg[f] || 1;
        return new z.Md(g)
    };
    var qi = function(a) {
        var b = z.Nd
          , c = {}
          , d = a[b.vb];
        d && (c[b.vb] = z.Od(d));
        c[b.za] = a[b.za];
        c[b.X] = a[b.X];
        c[b.Yb] = a[b.Yb];
        c[b.td] = a[b.td];
        c[b.ua] = a[b.ua];
        return c
    };
    var ri = function(a) {
        var b = z.Nd
          , c = {};
        c[b.ip] = a.bio || "";
        c[b.pm] = ci(a.connections || []);
        c[b.za] = a.display_name;
        c[b.mA] = a.first_name;
        c[b.GA] = a.last_name;
        c[b.Yb] = a.profile_url || null;
        c[b.wb] = a.rating || 5;
        c[b.URL] = a.website_url || null;
        return c
    };
    var si = function(a) {
        try {
            return z.qd(a).next()
        } catch (b) {
            if (b != z.rd)
                throw b;
            return null
        }
    };
    var ti = function(a) {
        return ei(arguments)
    };
    var ui = function(a, b) {
        var c = z.qd(a)
          , d = new z.pd;
        d.next = function() {
            for (; ; ) {
                var a = c.next();
                if (b.call(void 0, a, void 0, c))
                    return a
            }
        }
        ;
        return d
    };
    var vi = function(a) {
        var b = z.p(void 0) ? li(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, f) {
            return b + f.toUpperCase()
        })
    };
    var wi = function(a) {
        var b, c = {
            html: "",
            all: []
        };
        b || (b = ["SCRIPT"]);
        b = z.Pa(b, function(a) {
            a = a.toLowerCase();
            c[a] = [];
            return a
        });
        if (z.$h(null == a ? "" : String(a)))
            return c;
        a = z.ji("DIV", null, z.Qh(window.document, a));
        z.w(z.Qc(a), function(a) {
            var f = a.tagName.toLowerCase();
            z.Sa(b, f) && (c.all.push(a),
            c[f].push(a))
        });
        c.html = z.hi(a);
        return c
    };
    var xi = function(a) {
        a = a.replace(/&nbsp;/g, " ");
        a = z.xa(fi(a));
        return "" !== a
    };
    z.yi = function(a) {
        function b(a) {
            if (1 === a.nodeType && (z.Lc(a) || "BR" === a.nodeName)) {
                var c = a.firstChild, g = a.parentNode, h;
                if ("BR" === a.nodeName)
                    h = !1;
                else {
                    h = 0 === a.children.length;
                    var k = fi(a)
                      , k = z.$h(mi(k));
                    h = a && h && k
                }
                if (h)
                    z.Oc(a),
                    g && b(g);
                else
                    for (; c; )
                        b(c),
                        c = c.nextSibling
            }
        }
        var c = window.document.createElement("div");
        a = a.replace(/<p>&nbsp;/, "\x3cp\x3e");
        c.innerHTML = a.replace(/<span>&nbsp;<\/span>/g, " ");
        b(c);
        return c.innerHTML
    }
    ;
    var zi = function(a) {
        var b = [];
        z.Yc(a, b, !1);
        return b.join("")
    };
    var Ai = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
    };
    var Bi = function(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else
            z.Nc(a),
            a.appendChild(z.Fc(a).createTextNode(String(b)))
    };
    var Ci = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , f = window.Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h; )
                g.unshift(h),
                h = h.parentNode;
            d.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var h = d[0][b], k = 1; k < c; k++)
                if (h != d[k][b])
                    return g;
            g = h
        }
        return g
    };
    var Di = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (z.C && !z.lb(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = 1 == a.nodeType
              , d = 1 == b.nodeType;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode
              , g = b.parentNode;
            return f == g ? Vh(a, b) : !c && z.Vc(f, b) ? -1 * ii(a, b) : !d && z.Vc(g, a) ? ii(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
        }
        d = z.Fc(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(z.s.Range.START_TO_END, d)
    };
    var Ei = function(a) {
        var b;
        if (z.xg && !(z.C && z.B("9") && !z.B("10") && z.s.SVGElement && a instanceof z.s.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return z.Uc(b) ? b : null
    };
    var Fi = function(a) {
        if (!a)
            return null;
        if (!a.previousSibling)
            return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild; )
            a = a.lastChild;
        return a
    };
    var Gi = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : z.Tc(a.previousSibling, !1)
    };
    var Hi = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : z.Tc(a.nextSibling, !0)
    };
    var Ii = function(a) {
        return void 0 != a.lastElementChild ? a.lastElementChild : z.Tc(a.lastChild, !1)
    };
    var Ji = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    z.Ki = function(a, b) {
        a.insertBefore(b, a.childNodes[0] || null)
    }
    ;
    var Li = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    var Mi = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    var Ni = function(a, b) {
        return new z.uh(a.x - b.x,a.y - b.y)
    };
    var Pi = function(a, b) {
        var c = arguments
          , d = c.length;
        return function() {
            var a;
            d && (a = c[d - 1].apply(this, arguments));
            for (var b = d - 2; 0 <= b; b--)
                a = c[b].call(this, a);
            return a
        }
    };
    var Qi = function(a) {
        var b;
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    var Ri = function(a) {
        var b = arguments.length;
        if (1 == b && z.ea(arguments[0]))
            return Ri.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    };
    var Si = function(a) {
        var b = {}, c;
        for (c in a)
            b[a[c]] = c;
        return b
    };
    var Ti = function(a) {
        var b = z.da(a);
        if ("object" == b || "array" == b) {
            if (a.clone)
                return a.clone();
            var b = "array" == b ? [] : {}, c;
            for (c in a)
                b[c] = Ti(a[c]);
            return b
        }
        return a
    };
    z.Ui = function(a, b, c) {
        return b in a ? a[b] : a[b] = c
    }
    ;
    var Vi = function(a, b, c) {
        return b in a ? a[b] : c
    };
    var Wi = function(a, b, c) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    };
    var Xi = function(a) {
        a: for (var b in Yi)
            if (a.call(void 0, Yi[b], b, Yi))
                break a
    };
    var Zi = function(a) {
        for (var b in a)
            return a[b]
    };
    var $i = function(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a))
                return !0;
        return !1
    };
    z.aj = function(a, b, c) {
        var d = {}, f;
        for (f in a)
            d[f] = b.call(c, a[f], f, a);
        return d
    }
    ;
    z.bj = function(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    ;
    var cj = function(a, b) {
        var c = Yh(a, Xh, !1, b);
        0 <= c && z.Ua(a, c)
    };
    var dj = function(a, b, c) {
        c = Yh(a, c || Xh, !1, b);
        return 0 > c ? (Zh(a, -(c + 1), 0, b),
        !0) : !1
    };
    z.ej = function(a, b) {
        a.sort(b || Xh)
    }
    ;
    var fj = function(a, b, c) {
        return Yh(a, b, !0, void 0, c)
    };
    var gj = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length; ) {
            var f = a[d++]
              , g = z.ia(f) ? "o" + z.ja(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, g) || (b[g] = !0,
            a[c++] = f)
        }
        a.length = c
    };
    z.hj = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c], f;
            if (z.ea(d) || (f = z.fa(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))
                a.push.apply(a, d);
            else if (f)
                for (var g = a.length, h = d.length, k = 0; k < h; k++)
                    a[g + k] = d[k];
            else
                a.push(d)
        }
    }
    ;
    var ij = function(a, b, c) {
        var d = 0;
        ki(a, function(f, g) {
            b.call(c, f, g, a) && z.Ua(a, g) && d++
        })
    };
    var jj = function(a, b) {
        var c = z.lh(a, b, void 0);
        0 <= c && z.Ua(a, c)
    };
    z.kj = function(a, b) {
        z.Sa(a, b) || a.push(b)
    }
    ;
    var lj = function(a, b) {
        var c = 0;
        z.w(a, function(a, f, g) {
            b.call(void 0, a, f, g) && ++c
        }, void 0);
        return c
    };
    var mj = function(a, b) {
        var c = 0;
        ki(a, function(d, f) {
            c = b.call(void 0, c, d, f, a)
        });
        return c
    };
    z.nj = function(a, b, c, d) {
        var f = c;
        z.w(a, function(c, h) {
            f = b.call(d, f, c, h, a)
        });
        return f
    }
    ;
    var oj = function(a) {
        return a[a.length - 1]
    };
    var pj = function(a) {
        var b = z.p(void 0) ? li(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, f) {
            return b + f.toUpperCase()
        })
    };
    var qj = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    };
    var rj = function() {
        return "goog_" + z.gg++
    };
    z.sj = function(a) {
        return Array.prototype.join.call(arguments, "")
    }
    ;
    var tj = function(a, b) {
        var c = z.ba(void 0) ? a.toFixed(void 0) : String(a)
          , d = c.indexOf(".");
        -1 == d && (d = c.length);
        d = Math.max(0, b - d);
        return Array(d + 1).join("0") + c
    };
    var uj = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    var vj = function(a) {
        return !/[^\t\n\r ]/.test(a)
    };
    var L = function(a, b) {
        b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
            return d in b ? b[d] : a
        }));
        return a
    };
    z.wj = function(a) {
        return "boolean" == typeof a
    }
    ;
    z.xj = function(a) {
        this.du = yj;
        z.Fd.call(this, a)
    }
    ;
    var zj = function(a) {
        return a.get(a.k.sd) === a.du.kB
    };
    z.Aj = function(a, b) {
        this.H = b || {};
        this.T = z.Bc(z.Uf, a);
        var c = this.Mu;
        c || (c = z.tc.D(),
        z.vc(0, this.T),
        this.Mu = c);
        this.appName = a;
        this.Iy(this.H)
    }
    ;
    var Bj = function(a) {
        this[Cj] = (0,
        z.q)(a.Qu, a);
        this[Dj] = (0,
        z.q)(a.remove, a);
        this[Ej] = (0,
        z.q)(a.stop, a);
        this[Fj] = (0,
        z.q)(a.Ps, a);
        this[Gj] = Hj(a);
        this[Ij] = (0,
        z.q)(a.Ke, a);
        this[Jj] = (0,
        z.q)(a.Fv, a);
        this[Kj] = (0,
        z.q)(a.Cd, a);
        this[Lj] = function() {
            return a.$O
        }
        ;
        z.D.call(this)
    };
    var Mj = function(a) {
        return function() {
            try {
                if (z.ga(a))
                    return a.apply(null, arguments)
            } catch (b) {
                z.ia(z.s.console) && z.ga(z.s.console.error) && z.s.console.error(b.stack || b)
            }
        }
    };
    var Hj = function(a) {
        return function(b, c, d) {
            return a.on.call(a, b, Mj(c), d)
        }
    };
    var Nj = function(a) {
        this.k = Oj;
        z.Fd.call(this, a)
    };
    var Pj = function(a) {
        function b(b) {
            m && t && b(a) && (a[c.URL] = m,
            a[c.ua] = d.Tt)
        }
        var c = Oj
          , d = Qj
          , f = new Nj
          , g = a[c.rd]
          , h = a[c.ua]
          , k = a[c.URL]
          , m = Rj(a[c.rk] || k);
        if (z.v.hh) {
            var r = (g || "").toLowerCase()
              , x = Sj.test(a[c.rk]);
            m && (Tj.contains(r) || x || -1 < m.indexOf("https") ? m = m.replace(/http:/, "https:") : Uj.contains(r) || (m = null));
            Sj.test(k) && a[c.ua] === d.Tt && (a[c.URL] = Rj(k))
        }
        var t = h == d.lf;
        g in Vj && b(Vj[g] || function() {
            return !0
        }
        );
        a[c.ua] !== d.UB || m || (m = z.v.J.qb + "/images/video-play.png",
        a[c.HB] = 86,
        a[c.GB] = 61);
        a[c.rk] = m;
        return f.set(a)
    };
    var Wj = function(a, b) {
        return z.Pa(a, function(a) {
            var d = new Nj
              , f = Oj
              , g = "http://media.fyre.co/" + a.key;
            d.id = g;
            d.set(f.URL, Rj(g));
            d.set(f.lf, g);
            d.set(f.rd, "LivefyreFilePicker");
            d.set(f.ua, a.mimetype.match(/^video\//i) ? Qj.UB : Qj.Tt);
            b && d.set(f.cu, "stored" === b ? Xj.rM : Xj.AJ);
            return d
        })
    };
    var Rj = function(a) {
        return a && z.v.hh ? a.replace(Sj, z.v.$L) : a
    };
    var Yj = function(a, b) {
        b = b || {};
        b.xa = Nj;
        z.qf.call(this, a)
    };
    z.Zj = function(a, b) {
        var c = Oj;
        return (new Yj).add(z.Pa(a, function(a) {
            a[c.ab] === b && delete a[c.ab];
            return Pj(a)
        }))
    }
    ;
    var ak = function(a) {
        z.Fd.call(this, a)
    };
    var bk = function(a) {
        return new ak(a)
    };
    var ck = function(a) {
        a = a.className;
        return z.p(a) && a.match(/\S+/g) || []
    };
    z.dk = function(a, b) {
        var c = ck(a);
        ek(c, z.Ya(arguments, 1));
        a.className = c.join(" ")
    }
    ;
    z.fk = function(a, b) {
        var c = ck(a)
          , c = gk(c, z.Ya(arguments, 1));
        a.className = c.join(" ")
    }
    ;
    var ek = function(a, b) {
        for (var c = 0; c < b.length; c++)
            z.Sa(a, b[c]) || a.push(b[c])
    };
    var gk = function(a, b) {
        return z.Oa(a, function(a) {
            return !z.Sa(b, a)
        })
    };
    var hk = function(a, b, c) {
        for (var d = ck(a), f = !1, g = 0; g < d.length; g++)
            d[g] == b && (Zh(d, g--, 1),
            f = !0);
        f && (d.push(c),
        a.className = d.join(" "))
    };
    var ik = function(a, b, c) {
        var d = ck(a);
        z.p(b) ? z.Ta(d, b) : z.ea(b) && (d = gk(d, b));
        z.p(c) && !z.Sa(d, c) ? d.push(c) : z.ea(c) && ek(d, c);
        a.className = d.join(" ")
    };
    z.jk = function(a, b) {
        return z.Sa(ck(a), b)
    }
    ;
    var kk = function(a, b, c) {
        c ? z.dk(a, b) : z.fk(a, b)
    };
    var lk = function(a, b) {
        var c = !z.jk(a, b);
        kk(a, b, c)
    };
    var mk = function(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (nk.test(c))
            return b.Er = ok(c),
            b.type = "hex",
            b;
        c = pk(a);
        if (c.length) {
            var d = c[0];
            a = c[1];
            c = c[2];
            d = Number(d);
            a = Number(a);
            c = Number(c);
            if ((0,
            window.isNaN)(d) || 0 > d || 255 < d || (0,
            window.isNaN)(a) || 0 > a || 255 < a || (0,
            window.isNaN)(c) || 0 > c || 255 < c)
                throw Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color');
            d = qk(d.toString(16));
            a = qk(a.toString(16));
            c = qk(c.toString(16));
            b.Er = "#" + d + a + c;
            b.type = "rgb";
            return b
        }
        if (rk && (c = rk[a.toLowerCase()]))
            return b.Er = c,
            b.type = "named",
            b;
        throw Error(a + " is not a valid color string");
    };
    var ok = function(a) {
        if (!nk.test(a))
            throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(sk, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    };
    var pk = function(a) {
        var b = a.match(tk);
        if (b) {
            a = Number(b[1]);
            var c = Number(b[2])
              , b = Number(b[3]);
            if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b)
                return [a, c, b]
        }
        return []
    };
    var qk = function(a) {
        return 1 == a.length ? "0" + a : a
    };
    var uk = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.mi = !1;
        this.EH = !0
    };
    var vk = function(a) {
        a.preventDefault()
    };
    var wk = function(a) {
        wk[" "](a);
        return a
    };
    var xk = function(a, b) {
        uk.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.Px = !1;
        this.Sb = null;
        a && this.Zg(a, b)
    };
    var yk = function(a) {
        return (zk ? 0 == a.Sb.button : "click" == a.type ? !0 : !!(a.Sb.button & Ak[0])) && !(z.J && z.jg && a.ctrlKey)
    };
    var Bk = function(a) {
        return !(!a || !a[Ck])
    };
    var Dk = function(a, b, c, d, f) {
        this.eh = a;
        this.Bs = null;
        this.src = b;
        this.type = c;
        this.jq = !!d;
        this.dg = f;
        this.key = ++Ek;
        this.Ql = this.iq = !1
    };
    var Fk = function(a) {
        a.Ql = !0;
        a.eh = null;
        a.Bs = null;
        a.src = null;
        a.dg = null
    };
    var Gk = function(a) {
        this.src = a;
        this.lc = {};
        this.$o = 0
    };
    var Hk = function(a, b) {
        var c = b.type;
        if (!(c in a.lc))
            return !1;
        var d = z.Ta(a.lc[c], b);
        d && (Fk(b),
        0 == a.lc[c].length && (delete a.lc[c],
        a.$o--));
        return d
    };
    var Ik = function(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.Ql && g.eh == b && g.jq == !!c && g.dg == d)
                return f
        }
        return -1
    };
    var Jk = function(a, b, c, d, f) {
        if (z.ea(b)) {
            for (var g = 0; g < b.length; g++)
                Jk(a, b[g], c, d, f);
            return null
        }
        c = Kk(c);
        return Bk(a) ? a.e(b, c, d, f) : Lk(a, b, c, !1, d, f)
    };
    var Lk = function(a, b, c, d, f, g) {
        if (!b)
            throw Error("Invalid event type");
        var h = !!f
          , k = Mk(a);
        k || (a[Nk] = k = new Gk(a));
        c = k.add(b, c, d, f, g);
        if (c.Bs)
            return c;
        d = Ok();
        c.Bs = d;
        d.src = a;
        d.eh = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Pk(b.toString()), d);
        Qk++;
        return c
    };
    var Ok = function() {
        var a = Rk
          , b = Sk ? function(c) {
            return a.call(b.src, b.eh, c)
        }
        : function(c) {
            c = a.call(b.src, b.eh, c);
            if (!c)
                return c
        }
        ;
        return b
    };
    var Tk = function(a, b, c, d, f) {
        if (z.ea(b)) {
            for (var g = 0; g < b.length; g++)
                Tk(a, b[g], c, d, f);
            return null
        }
        c = Kk(c);
        return Bk(a) ? a.Ed(b, c, d, f) : Lk(a, b, c, !0, d, f)
    };
    var Uk = function(a, b, c, d, f) {
        if (z.ea(b))
            for (var g = 0; g < b.length; g++)
                Uk(a, b[g], c, d, f);
        else
            c = Kk(c),
            Bk(a) ? a.Fa(b, c, d, f) : a && (a = Mk(a)) && (b = a.wn(b, c, !!d, f)) && Vk(b)
    };
    var Vk = function(a) {
        if (z.oh(a) || !a || a.Ql)
            return !1;
        var b = a.src;
        if (Bk(b))
            return Hk(b.ee, a);
        var c = a.type
          , d = a.Bs;
        b.removeEventListener ? b.removeEventListener(c, d, a.jq) : b.detachEvent && b.detachEvent(Pk(c), d);
        Qk--;
        (c = Mk(b)) ? (Hk(c, a),
        0 == c.$o && (c.src = null,
        b[Nk] = null)) : Fk(a);
        return !0
    };
    var Pk = function(a) {
        return a in Wk ? Wk[a] : Wk[a] = "on" + a
    };
    var Xk = function(a, b, c, d) {
        var f = 1;
        if (a = Mk(a))
            if (b = a.lc[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.jq == c && !g.Ql && (f &= !1 !== Yk(g, d))
                }
        return Boolean(f)
    };
    var Yk = function(a, b) {
        var c = a.eh
          , d = a.dg || a.src;
        a.iq && Vk(a);
        return c.call(d, b)
    };
    var Rk = function(a, b) {
        if (a.Ql)
            return !0;
        if (!Sk) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = z.s, f; f = c.shift(); )
                        if (null != d[f])
                            d = d[f];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
            f = c;
            c = new xk(f,this);
            d = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var g = !1;
                    if (0 == f.keyCode)
                        try {
                            f.keyCode = -1;
                            break a
                        } catch (h) {
                            g = !0
                        }
                    if (g || void 0 == f.returnValue)
                        f.returnValue = !0
                }
                f = [];
                for (g = c.currentTarget; g; g = g.parentNode)
                    f.push(g);
                for (var g = a.type, k = f.length - 1; !c.mi && 0 <= k; k--)
                    c.currentTarget = f[k],
                    d &= Xk(f[k], g, !0, c);
                for (k = 0; !c.mi && k < f.length; k++)
                    c.currentTarget = f[k],
                    d &= Xk(f[k], g, !1, c)
            }
            return d
        }
        return Yk(a, new xk(b,this))
    };
    var Mk = function(a) {
        a = a[Nk];
        return a instanceof Gk ? a : null
    };
    var Kk = function(a) {
        if (z.ga(a))
            return a;
        a[Zk] || (a[Zk] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Zk]
    };
    var $k = function() {
        z.D.call(this);
        this.ee = new Gk(this);
        this.nN = this;
        this.Ox = null
    };
    var al = function(a, b, c, d) {
        b = a.ee.lc[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.Ql && h.jq == c) {
                var k = h.eh
                  , m = h.dg || h.src;
                h.iq && Hk(a.ee, h);
                f = !1 !== k.call(m, d) && f
            }
        }
        return f && 0 != d.EH
    };
    var bl = function() {
        $k.call(this);
        this.F = cl;
        this.endTime = this.startTime = null
    };
    var dl = function(a, b) {
        $k.call(this);
        this.zb = a || 1;
        this.em = b || z.s;
        this.Ju = (0,
        z.q)(this.MW, this);
        this.qx = z.qa()
    };
    var el = function(a, b, c) {
        if (z.ga(a))
            c && (a = (0,
            z.q)(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = (0,
            z.q)(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : z.s.setTimeout(a, b || 0)
    };
    var fl = function(a, b, c) {
        z.D.call(this);
        this.ai = a;
        this.zb = b || 0;
        this.pa = c;
        this.Ou = (0,
        z.q)(this.Ge, this)
    };
    var gl = function(a) {
        a.Bf() && a.Bv()
    };
    var hl = function(a) {
        a = z.ja(a);
        delete il[a];
        z.cb(il) && jl && jl.stop()
    };
    var kl = function() {
        jl || (jl = new fl(function() {
            ll()
        }
        ,20));
        var a = jl;
        a.Bf() || a.start()
    };
    var ll = function() {
        var a = z.qa();
        z.y(il, function(b) {
            ml(b, a)
        });
        z.cb(il) || kl()
    };
    var nl = function(a, b, c, d) {
        bl.call(this);
        if (!z.ea(a) || !z.ea(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.Oo = a;
        this.LO = b;
        this.duration = c;
        this.gC = d;
        this.coords = [];
        this.mt = !1
    };
    var ml = function(a, b) {
        a.Xe = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.Xe && (a.Xe = 1);
        ol(a, a.Xe);
        1 == a.Xe ? (a.F = cl,
        hl(a),
        a.ae("finish"),
        a.nd()) : 1 == a.F && a.ho()
    };
    var ol = function(a, b) {
        z.ga(a.gC) && (b = a.gC(b));
        a.coords = Array(a.Oo.length);
        for (var c = 0; c < a.Oo.length; c++)
            a.coords[c] = (a.LO[c] - a.Oo[c]) * b + a.Oo[c]
    };
    var pl = function(a, b) {
        uk.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.Xe = b.Xe;
        this.state = b.F
    };
    var ql = function() {
        return z.J ? "Webkit" : z.H ? "Moz" : z.C ? "ms" : z.G ? "O" : null
    };
    var rl = function() {
        return z.J ? "-webkit" : z.H ? "-moz" : z.C ? "-ms" : z.G ? "-o" : null
    };
    var sl = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    var tl = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    var ul = function(a) {
        return new tl(a.left,a.top,a.right - a.left,a.bottom - a.top)
    };
    z.vl = function(a, b, c) {
        if (z.p(b))
            (b = wl(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var f = b[d]
                  , g = wl(c, d);
                g && (c.style[g] = f)
            }
    }
    ;
    var wl = function(a, b) {
        var c = qj(b);
        if (void 0 === a.style[c]) {
            var d = ql() + pj(c);
            if (void 0 !== a.style[d])
                return d
        }
        return c
    };
    var xl = function(a, b) {
        var c = a.style[qj(b)];
        return "undefined" !== typeof c ? c : a.style[wl(a, b)] || ""
    };
    var yl = function(a, b) {
        var c = z.Fc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    };
    z.zl = function(a, b) {
        return yl(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    ;
    var Al = function(a) {
        return z.zl(a, "position")
    };
    z.Bl = function(a, b, c) {
        var d, f = z.H && (z.jg || z.lg) && z.B("1.9");
        b instanceof z.uh ? (d = b.x,
        b = b.y) : (d = b,
        b = c);
        a.style.left = Cl(d, f);
        a.style.top = Cl(b, f)
    }
    ;
    var Dl = function(a) {
        a = a ? z.Fc(a) : window.document;
        return !z.C || z.lb(9) || Oh(z.Dc(a)) ? a.documentElement : a.body
    };
    var El = function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        z.C && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    var Fl = function(a) {
        if (z.C && !z.lb(8))
            return a.offsetParent;
        var b = z.Fc(a)
          , c = z.zl(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = z.zl(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    };
    var Gl = function(a) {
        var b = new sl(0,window.Infinity,window.Infinity,0), c = z.Dc(a), d = c.la().body, f = c.la().documentElement, g;
        g = c.Ma;
        for (g = z.J ? g.body || g.documentElement : g.documentElement; a = Fl(a); )
            if (!(z.C && 0 == a.clientWidth || z.J && 0 == a.clientHeight && a == d) && a != d && a != f && "visible" != z.zl(a, "overflow")) {
                var h = z.Hl(a), k;
                k = a;
                if (z.H && !z.B("1.9")) {
                    var m = (0,
                    window.parseFloat)(yl(k, "borderLeftWidth"));
                    if (Il(k))
                        var r = k.offsetWidth - k.clientWidth - m - (0,
                        window.parseFloat)(yl(k, "borderRightWidth"))
                          , m = m + r;
                    k = new z.uh(m,(0,
                    window.parseFloat)(yl(k, "borderTopWidth")))
                } else
                    k = new z.uh(k.clientLeft,k.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = g.scrollLeft;
        f = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = z.Rh(c.hb());
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    };
    z.Hl = function(a) {
        var b, c = z.Fc(a), d = z.zl(a, "position"), f = z.H && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), g = new z.uh(0,0), h = Dl(c);
        if (a == h)
            return g;
        if (a.getBoundingClientRect)
            b = El(a),
            a = Nh(z.Dc(c)),
            g.x = b.left + a.x,
            g.y = b.top + a.y;
        else if (c.getBoxObjectFor && !f)
            b = c.getBoxObjectFor(a),
            a = c.getBoxObjectFor(h),
            g.x = b.screenX - a.screenX,
            g.y = b.screenY - a.screenY;
        else {
            b = a;
            do {
                g.x += b.offsetLeft;
                g.y += b.offsetTop;
                b != a && (g.x += b.clientLeft || 0,
                g.y += b.clientTop || 0);
                if (z.J && "fixed" == Al(b)) {
                    g.x += c.body.scrollLeft;
                    g.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            } while (b && b != a);if (z.G || z.J && "absolute" == d)
                g.y -= c.body.offsetTop;
            for (b = a; (b = Fl(b)) && b != c.body && b != h; )
                g.x -= b.scrollLeft,
                z.G && "TR" == b.tagName || (g.y -= b.scrollTop)
        }
        return g
    }
    ;
    var Jl = function(a, b, c) {
        if (b instanceof Hh)
            c = b.height,
            b = b.width;
        else if (void 0 == c)
            throw Error("missing height argument");
        Kl(a, b);
        z.Ll(a, c)
    };
    var Cl = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    z.Ll = function(a, b) {
        a.style.height = Cl(b, !0)
    }
    ;
    var Kl = function(a, b) {
        a.style.width = Cl(b, !0)
    };
    z.Ml = function(a) {
        var b = Nl;
        if ("none" != z.zl(a, "display"))
            return b(a);
        var c = a.style
          , d = c.display
          , f = c.visibility
          , g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = f;
        return a
    }
    ;
    var Nl = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = z.J && !b && !c;
        return z.ba(b) && !d || !a.getBoundingClientRect ? new Hh(b,c) : (a = El(a),
        new Hh(a.right - a.left,a.bottom - a.top))
    };
    var Ol = function(a) {
        var b = z.Hl(a);
        a = z.Ml(a);
        return new tl(b.x,b.y,a.width,a.height)
    };
    var Pl = function(a, b) {
        var c = a.style;
        "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
    };
    z.N = function(a, b) {
        a.style.display = b ? "" : "none"
    }
    ;
    z.Ql = function(a) {
        return "none" != a.style.display
    }
    ;
    var Rl = function(a, b) {
        var c = z.Dc(b)
          , d = null
          , f = c.la();
        if (z.C && f.createStyleSheet)
            c = d = f.createStyleSheet(),
            z.C && z.ba(c.cssText) ? c.cssText = a : c.innerHTML = a;
        else {
            f = th(c.Ma, "head", void 0, void 0)[0];
            f || (d = th(c.Ma, "body", void 0, void 0)[0],
            f = c.r("head"),
            d.parentNode.insertBefore(f, d));
            var g = d = c.r("style");
            z.C && z.ba(g.cssText) ? g.cssText = a : g.innerHTML = a;
            c.appendChild(f, d)
        }
    };
    var Il = function(a) {
        return "rtl" == z.zl(a, "direction")
    };
    var Sl = function(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Tl) {
            if (b = b ? "none" : "",
            a.style[Tl] = b,
            c) {
                a = 0;
                for (var d; d = c[a]; a++)
                    d.style[Tl] = b
            }
        } else if (z.C || z.G)
            if (b = b ? "on" : "",
            a.setAttribute("unselectable", b),
            c)
                for (a = 0; d = c[a]; a++)
                    d.setAttribute("unselectable", b)
    };
    z.Ul = function(a) {
        var b = z.Fc(a)
          , c = z.C && a.currentStyle;
        if (c && Oh(z.Dc(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing)
            return b = Vl(a, c.width, "width", "pixelWidth"),
            a = Vl(a, c.height, "height", "pixelHeight"),
            new Hh(b,a);
        c = new Hh(a.offsetWidth,a.offsetHeight);
        b = Wl(a);
        a = Xl(a);
        return new Hh(c.width - a.left - b.left - b.right - a.right,c.height - a.top - b.top - b.bottom - a.bottom)
    }
    ;
    var Vl = function(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return (0,
            window.parseInt)(b, 10);
        var f = a.style[c]
          , g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = f;
        a.runtimeStyle[c] = g;
        return b
    };
    var Yl = function(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Vl(a, c, "left", "pixelLeft") : 0
    };
    var Zl = function(a, b) {
        if (z.C) {
            var c = Yl(a, b + "Left")
              , d = Yl(a, b + "Right")
              , f = Yl(a, b + "Top")
              , g = Yl(a, b + "Bottom");
            return new sl(f,d,g,c)
        }
        c = yl(a, b + "Left");
        d = yl(a, b + "Right");
        f = yl(a, b + "Top");
        g = yl(a, b + "Bottom");
        return new sl((0,
        window.parseFloat)(f),(0,
        window.parseFloat)(d),(0,
        window.parseFloat)(g),(0,
        window.parseFloat)(c))
    };
    var Wl = function(a) {
        return Zl(a, "padding")
    };
    var $l = function(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in am ? am[c] : Vl(a, c, "left", "pixelLeft")
    };
    var Xl = function(a) {
        if (z.C && !z.lb(9)) {
            var b = $l(a, "borderLeft")
              , c = $l(a, "borderRight")
              , d = $l(a, "borderTop");
            a = $l(a, "borderBottom");
            return new sl(d,c,a,b)
        }
        b = yl(a, "borderLeftWidth");
        c = yl(a, "borderRightWidth");
        d = yl(a, "borderTopWidth");
        a = yl(a, "borderBottomWidth");
        return new sl((0,
        window.parseFloat)(d),(0,
        window.parseFloat)(c),(0,
        window.parseFloat)(a),(0,
        window.parseFloat)(b))
    };
    var bm = function(a, b, c, d, f) {
        nl.call(this, b, c, d, f);
        this.element = a
    };
    z.cm = function(a, b, c, d, f) {
        bm.call(this, a, [b], [c], d, f)
    }
    ;
    z.dm = function(a, b, c, d, f) {
        z.oh(b) && (b = [b]);
        z.oh(c) && (c = [c]);
        bm.call(this, a, b, c, d, f);
        if (1 != b.length || 1 != c.length)
            throw Error("Start and end points must be 1D");
    }
    ;
    z.em = function(a, b, c) {
        z.dm.call(this, a, 1, 0, b, c)
    }
    ;
    z.fm = function(a, b, c) {
        z.dm.call(this, a, 0, 1, b, c)
    }
    ;
    z.gm = function(a) {
        if (!(this instanceof z.gm))
            return new z.gm(a);
        this.element = a ? hm(a) : []
    }
    ;
    var im = function(a, b) {
        z.ga(b) && (z.ea(a) || z.Kc(a) ? z.Pa(a, function(a) {
            return b(a) || a
        }) : b(a))
    };
    var hm = function(a) {
        if (z.p(a))
            return window.document.getElementById(a);
        if (z.ba(a))
            z.ia(a) || z.ea(a);
        else
            return [];
        if (z.Uc(a) || z.ia(a) && a.window == a)
            return a;
        if (a.element && z.Uc(a.element))
            return a.element;
        if ((z.ea(a) || z.Kc(a)) && nh(a, function(a) {
            return z.Uc(a)
        }))
            return a
    };
    var jm = function(a) {
        im(a.element, function(a) {
            z.dk(a, "fyre-hovercard-below")
        })
    };
    var km = function(a) {
        im(a.element, function(a) {
            z.fk(a, "fyre-hovercard-below")
        })
    };
    var lm = function(a, b, c) {
        if ("undefined" === typeof c)
            return a.element.getAttribute(b);
        var d = {};
        d[b] = c;
        z.Hc(a.element, d);
        return a
    };
    var mm = function(a, b) {
        var c;
        a = z.xa(a);
        return "\x3c" === a[0] ? (c = z.ji("div"),
        c.innerHTML = a,
        new z.gm(c.childNodes[0])) : new z.gm(z.ji.apply(window, arguments))
    };
    var nm = function(a, b) {
        var c = z.Eh(b, a.element);
        return c ? new z.gm(c) : null
    };
    z.om = function(a) {
        return a == z.s.window ? "pageYOffset"in z.s ? z.s.pageYOffset : z.s.document.documentElement ? z.s.document.documentElement.scrollTop : z.s.document.body.scrollTop : z.Hl(a).y
    }
    ;
    var pm = function() {
        return {
            height: Math.min(window.document.documentElement.clientHeight, window.innerHeight || 0),
            width: Math.min(window.document.documentElement.clientWidth, window.innerWidth || 0)
        }
    };
    var qm = function(a) {
        this.qs = [];
        "number" == typeof a ? rm(this, a) : sm(this, a)
    };
    var sm = function(a, b) {
        for (; b; )
            for (var c = 0; c < tm.length; ++c) {
                var d = b.match(tm[c]);
                if (d) {
                    d = d[0];
                    b = b.substring(d.length);
                    0 == c && ("''" == d ? d = "'" : (d = d.substring(1, d.length - 1),
                    d = d.replace(/\'\'/, "'")));
                    a.qs.push({
                        text: d,
                        type: c
                    });
                    break
                }
            }
    };
    var rm = function(a, b) {
        var c;
        if (4 > b)
            c = um.At[b];
        else if (8 > b)
            c = um.fu[b - 4];
        else if (12 > b)
            c = um.At[b - 8] + " " + um.fu[b - 8];
        else {
            rm(a, 10);
            return
        }
        sm(a, c)
    };
    var vm = function(a) {
        if (void 0 === um.cN)
            return a;
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            b.push(48 <= d && 57 >= d ? String.fromCharCode(um.cN + d - 48) : a.charAt(c))
        }
        return b.join("")
    };
    var wm = function(a, b, c, d, f) {
        var g = a.length;
        switch (a.charAt(0)) {
        case "G":
            return b = 0 < c.getFullYear() ? 1 : 0,
            4 <= g ? um.Xz[b] : um.Yz[b];
        case "y":
            return b = c.getFullYear(),
            0 > b && (b = -b),
            vm(2 == g ? tj(b % 100, 2) : String(b));
        case "M":
            a: switch (b = c.getMonth(),
            g) {
            case 5:
                g = um.RA[b];
                break a;
            case 4:
                g = um.QA[b];
                break a;
            case 3:
                g = um.qB[b];
                break a;
            default:
                g = vm(tj(b + 1, g))
            }
            return g;
        case "k":
            return vm(tj(d.getHours() || 24, g));
        case "S":
            return vm((d.getTime() % 1E3 / 1E3).toFixed(Math.min(3, g)).substr(2) + (3 < g ? tj(0, g - 3) : ""));
        case "E":
            return b = c.getDay(),
            4 <= g ? um.ZB[b] : um.sB[b];
        case "a":
            return g = d.getHours(),
            um.Fz[12 <= g && 24 > g ? 1 : 0];
        case "h":
            return vm(tj(d.getHours() % 12 || 12, g));
        case "K":
            return vm(tj(d.getHours() % 12, g));
        case "H":
            return vm(tj(d.getHours(), g));
        case "c":
            a: switch (b = c.getDay(),
            g) {
            case 5:
                g = um.CB[b];
                break a;
            case 4:
                g = um.FB[b];
                break a;
            case 3:
                g = um.EB[b];
                break a;
            default:
                g = vm(tj(b, 1))
            }
            return g;
        case "L":
            a: switch (b = c.getMonth(),
            g) {
            case 5:
                g = um.BB[b];
                break a;
            case 4:
                g = um.AB[b];
                break a;
            case 3:
                g = um.DB[b];
                break a;
            default:
                g = vm(tj(b + 1, g))
            }
            return g;
        case "Q":
            return b = Math.floor(c.getMonth() / 3),
            4 > g ? um.rB[b] : um.dB[b];
        case "d":
            return vm(tj(c.getDate(), g));
        case "m":
            return vm(tj(d.getMinutes(), g));
        case "s":
            return vm(tj(d.getSeconds(), g));
        case "v":
            return g = f || xm.SB.eD(b.getTimezoneOffset()),
            g.I1();
        case "z":
            return a = f || xm.SB.eD(b.getTimezoneOffset()),
            4 > g ? a.H1(b) : a.C1(b);
        case "Z":
            return a = f || xm.SB.eD(b.getTimezoneOffset()),
            4 > g ? a.E1(b) : vm(a.B1(b));
        default:
            return ""
        }
    };
    var ym = function(a, b) {
        b || (b = "MMM d, yyyy");
        return (new qm(b)).format(a)
    };
    var zm = function(a, b, c, d, f) {
        d = z.qa() - a;
        d = Math.floor(d / 6E4);
        var g;
        g = +a;
        var h = z.qa();
        h < g && (g = h);
        var h = z.qa()
          , k = Math.floor((h - g) / 6E4)
          , m = !1;
        0 > k && (m = !0,
        k *= -1);
        60 > k ? g = Am(k, m, 0, f) : (k = Math.floor(k / 60),
        24 > k ? g = Am(k, m, 1, f) : (k = 6E4 * (new Date(z.qa())).getTimezoneOffset(),
        k = Math.floor((h + k) / 864E5) - Math.floor((g + k) / 864E5),
        m && (k *= -1),
        g = 14 > k ? Am(k, m, 2, f) : ""));
        if ("" === g || d >= b)
            g = ym(a, c);
        a = -1 === f.timeMinutesAgoPlural.indexOf("%s") ? "0 " + f.timeMinutesAgoPlural : z.wa(f.timeMinutesAgoPlural, 0);
        g === a && (g = f.timeJustNow);
        return g
    };
    var Bm = function(a) {
        var b = (new Date(z.qa())).getTimezoneOffset() / 60
          , c = Math.floor(a.getTime() / 1E3) + b
          , b = Math.floor(z.qa() / 1E3) + b - c;
        if (0 > b)
            return "1s";
        if (60 > b)
            return b + "s";
        b = Math.floor(b / 60);
        if (60 > b)
            return b + "m";
        b = Math.floor(b / 60);
        if (24 > b)
            return b + "h";
        b = Math.floor(b / 24);
        return 365 > b ? ym(a, "dd MMM") : ym(a, "dd MMM yyyy")
    };
    var Am = function(a, b, c, d) {
        var f = 1 !== a;
        switch (c) {
        case 0:
            c = b ? "inMinutes" : "minutesAgo";
            break;
        case 1:
            c = b ? "inHours" : "hoursAgo";
            break;
        case 2:
            c = b ? "inDays" : "daysAgo";
            break;
        default:
            return ""
        }
        b = c;
        c = qj("time-" + c);
        f && (b += "Plural",
        c += "Plural");
        f = Cm[b];
        f = L(f, {
            num: a
        });
        return (d = d[c]) ? -1 === d.indexOf("%s") ? a + " " + d : z.wa(d, a) : f
    };
    var Dm = function(a) {
        function b(a) {
            a = String(a);
            1 === a.length && (a = "0" + a);
            return a
        }
        var c;
        (0,
        window.isNaN)(a) ? c = Date.parse(a) : (c = new Date(0),
        c.setUTCSeconds(a));
        return Date.prototype.toISOString ? c.toISOString() : c.getUTCFullYear() + "-" + b(c.getUTCMonth() + 1) + "-" + b(c.getUTCDate()) + "T" + b(c.getUTCHours()) + ":" + b(c.getUTCMinutes()) + ":" + b(c.getUTCSeconds()) + "." + String((c.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z"
    };
    z.Em = function(a) {
        z.Fd.call(this, a)
    }
    ;
    z.Fm = function(a, b, c) {
        var d = a.content
          , f = {};
        c && (f[z.Gm] = c);
        var g = d.annotations || {};
        c = g.messagetag || [];
        f[Hm] = Im(a);
        f[z.Jm] = a.Zj;
        f[Km] = a.co || 0;
        f[Lm] = b;
        f[Mm] = a.event;
        f[Nm] = a.Ic;
        f[Om] = null != g.featuredmessage;
        f[Pm] = g.sortOrder || d.createdAt;
        f[Qm] = d.ancestorId;
        f[z.Rm] = d.parentId;
        f[z.Sm] = d.authorId;
        f[Tm] = d.updatedAt;
        f[Um] = d.id;
        f[Vm] = d.createdAt;
        f[Wm] = d.title;
        f[z.Xm] = g.likedBy || [];
        f[Ym] = d.linkback;
        z.cb(g) || (f[z.Zm] = g);
        if (b = d.mentions) {
            var h = new z.qf;
            z.w(b, function(a) {
                h.add(new Lh(a))
            });
            f[$m] = h
        }
        b = d.bodyHtml;
        (g = d.attachments) && (f[an] = z.Zj(Ti(g), b));
        f[z.bn] = !b && g ? "\x3cp\x3e\x3c/p\x3e" : b;
        (b = d.generator) && (f[cn] = b);
        a = a.rD;
        z.ba(a) && (f[dn] = a);
        d.feedEntry && (d = new bk(d.feedEntry),
        f[en] = d);
        f = new z.Em(f);
        fn(f);
        0 == c.length || f.pu(z.Pa(c, f.qv));
        return f
    }
    ;
    var Im = function(a) {
        var b = a[Hm];
        b || (b = z.oh(a[Um]) ? 5 : 0);
        return b
    };
    var gn = function(a) {
        return 18 === a.get(a.k.Zb)
    };
    var hn = function(a) {
        return a.Gb() ? a.get(a.k.jm)[a.k.oM] || null : null
    };
    var fn = function(a) {
        if (a.Gb() || a.Sc()) {
            var b = a.get(z.Zm)
              , c = b.socialMsgId;
            c || (c = a.id.split("@")[0].split("-"),
            c = c[c.length - 1],
            b.socialMsgId = c,
            a.set(z.Zm, b))
        }
    };
    var jn = function(a) {
        var b = a.k
          , c = a.get(b.OA);
        if (0 < c.length)
            return c.jb;
        kn(c, a.get(b.Jc));
        return c.jb
    };
    var kn = function(a, b) {
        var c = window.document.createElement("div");
        c.innerHTML = b;
        c = Fh("fyre-mention", c);
        z.w(c || [], function(b) {
            var c = {}
              , g = new z.gm(b);
            c.display_name = z.Sc(b).innerHTML;
            c.jid = lm(g, "resource").split("acct:")[1] || "";
            c.name = lm(g, "data-lf-handle");
            c.profile_url = lm(g, "href");
            c.provider = lm(g, "data-lf-provider");
            c.id = c.display_name + ":" + c.provider;
            a.get(c.id) || a.add(new z.xh(c))
        })
    };
    var ln = function(a) {
        var b = {};
        z.w(a.Hp, function(a) {
            z.A(b, z.gb(a, this.get(a)))
        }, a);
        b[Lm] = {
            id: a.get(Lm).id
        };
        return b
    };
    var mn = function(a) {
        var b = a.get(a.k.Nd)
          , c = b.get(b.k.Pd)
          , d = b.Dd()
          , b = zj(b);
        a = z.nn(a);
        return (d || b) && a && c
    };
    z.on = function(a, b) {
        var c = b || z.F
          , d = a.get(a.k.qc);
        return d && c.id === d.id
    }
    ;
    var pn = function(a) {
        var b = a.get("shareModel");
        if (b)
            return b;
        var b = z.Nd
          , c = a.get(Lm)
          , d = a.get(z.Gm)
          , f = d.get(b.za)
          , g = {};
        g[qn.qd] = d.get(b.X);
        g[qn.Nd] = c;
        g[qn.ff] = a;
        g[qn.gf] = a.get(z.bn);
        g[qn.za] = f;
        b = new rn(g);
        a.set("shareModel", b);
        return b
    };
    z.nn = function(a) {
        var b = a.get(Qm);
        return !a.get(z.Rm) && (!b || b === a.id)
    }
    ;
    var sn = function(a, b) {
        var c = a.EC(a.pu, a.wV);
        z.y(Yi, function(a) {
            var f = z.Pa(b[a] || [], this.qv);
            (a = c[a]) && a.call(this, f)
        }, a);
        a.O(z.Id("tags"))
    };
    z.tn = function(a, b) {
        var c = !1;
        Xi(function(a) {
            c = "added" == a;
            return z.ba(b[a])
        });
        a.set(Om, c);
        return c
    }
    ;
    z.un = function(a, b) {
        var c = b.added || []
          , d = b.removed || []
          , f = z.Xm
          , g = a.get(f);
        z.w(c, z.pa(z.kj, g));
        z.w(d, z.pa(z.Ta, g));
        a.set(f, g, {
            mn: !0
        })
    }
    ;
    var vn = function(a) {
        var b = a.get("updatedBy")
          , b = b && b !== a.get(z.Gm).id;
        a = a.get(b ? Tm : Vm);
        return Dm(a)
    };
    var wn = function(a, b) {
        if (1 === b)
            return !0;
        if (0 === b)
            return !1;
        var c = z.on(a)
          , d = z.F.eb();
        return 2 === b && c || 3 === b && (c || d)
    };
    z.xn = function(a) {
        z.Fd.call(this, a)
    }
    ;
    z.yn = function(a) {
        z.Fd.call(this, a)
    }
    ;
    var zn = function(a) {
        a = a.get(z.O.Oi);
        var b = 0;
        z.w(a.jb, function(a) {
            1 === a.get(z.An.Vf) && b++
        }, 0);
        return [b, a.jb.length]
    };
    var Bn = function(a, b, c) {
        var d = a.EC(a.ru, a.xH, a.NI);
        z.y(Yi, function(a) {
            var g = z.Pa(c[a] || [], z.pa(this.vI, b));
            (a = d[a]) && a.call(this, g)
        }, a)
    };
    var Cn = function(a) {
        var b = a.get(z.O.fp);
        a = a.get(z.O.Ki);
        return !!a && a === b
    };
    var Dn = function(a) {
        var b = {}, c = z.Qh(window.document, a), d;
        a = Fh("fyre-review-subpart", c);
        b.vg = z.Pa(a, function(a) {
            c.removeChild(a);
            return (d = a.innerHTML.match(/^<strong>[^<]*<\/strong>(.*)/)) ? d[1] : ""
        });
        a = window.document.createElement("div");
        a.appendChild(c);
        b.body = a.innerHTML.replace(/^(<p>)(<strong>[^<]*<\/strong>)/g, "$1");
        return b
    };
    var En = function() {
        this.Tb = new z.yc
    };
    var Fn = function(a) {
        return {
            targetId: a.Vj,
            targetAuthorId: a.mz
        }
    };
    z.Gn = function(a, b) {
        z.D.call(this);
        this.UP = a;
        this.$O = b;
        Hn(this, b);
        var c = this.H;
        this.name = "fyre.conv.app.main_" + z.ja(this);
        z.Cd(this.name);
        this.Tb = this.kj = this.bb = null;
        In(this);
        var d = this.Iv();
        c.ia && c.ia(d);
        z.v.doNotTrack.lo && (new z.af).clear()
    }
    ;
    var In = function(a) {
        var b = Jn(a);
        Kn(a);
        a.ak = new a.aJ(b)
    };
    z.Ln = function(a) {
        a.bb && (a.bb.q(),
        delete a.bb)
    }
    ;
    var Kn = function(a) {
        a.Tb || (a.Tb = new En);
        var b = a.Tb;
        a = Jn(a).T;
        a != b.Yw && (b.Yw = a,
        a = b.Yw,
        a.subscribe("quill_message_received", b.xU, b),
        a.subscribe("quill_flag_recv", b.vU, b),
        a.subscribe("quill_like_recv", b.wU, b),
        a.subscribe("quill_comment_shared", b.yU, b),
        a.subscribe("quill_vote_recv", b.zU, b),
        a.subscribe("quill_comment_featured", b.uU, b),
        a.So("render_complete", b.HU, b),
        a.subscribe("commentCountUpdated", b.tU, b),
        a.subscribe("show_more", b.KU, b),
        a.subscribe("quill_follow_added", b.XG, b),
        a.subscribe("quill_follow_removed", b.YG, b),
        a.subscribe("streamFollowerReceived", b.QU, b),
        z.Uf.subscribe("user_logged_in", b.OU, b),
        z.Uf.subscribe("user_logged_out", b.PU, b))
    };
    var Jn = function(a) {
        if (a.bb)
            return a.bb;
        var b = new a.pC(a.H,a.name);
        a.bb = b;
        return a.L = b
    };
    var Hn = function(a, b) {
        var c = a.kC.Rn(b);
        z.A(c, a.UP);
        z.A(c, {
            ud: !0
        });
        a.H = c;
        a.ha = c
    };
    z.Mn = function() {}
    ;
    var Nn = function(a) {
        if (!a)
            return [];
        if (!z.ea(a))
            throw Error("actionButtons must be an array of buttons");
        a = z.Oa(a, function(a) {
            return z.Qf ? !!a.mobile : !0
        });
        return z.Pa(a, function(a) {
            return {
                key: a.key,
                ia: a.callback
            }
        })
    };
    z.On = function(a) {
        z.rf.call(this, a);
        this.tz = null;
        this.xy = [];
        Pn((0,
        z.q)(this.IU, this))
    }
    ;
    var Pn = function(a) {
        function b() {
            z.Xf("//cdn.livefyre.com/libs/insights-emitter/v0.0.15/insights-emitter.min.js", null, null, function() {
                a(window.Livefyre["insights-emitter"])
            })
        }
        if ("object" === typeof window.Livefyre && "function" === typeof window.Livefyre.define && window.Livefyre.define.amd)
            window.Livefyre.require(["//cdn.livefyre.com/libs/insights-emitter/v0.0.15/insights-emitter.min.js"], function(b) {
                a(b)
            });
        else if ("function" === typeof window.define && window.define.amd)
            try {
                window.require(["//cdn.livefyre.com/libs/insights-emitter/v0.0.15/insights-emitter.min.js"], function(b) {
                    a(b)
                })
            } catch (c) {
                b()
            }
        else
            b()
    };
    var Qn = function() {};
    var Rn = function() {};
    var Sn = function() {};
    var Tn = function() {};
    var Un = function() {};
    var Vn = function(a) {
        var b;
        z.w(Wn, function(c) {
            z.Sa(c.types, a) && (b = c.Zo)
        });
        return b
    };
    z.Xn = function(a, b) {
        var c = Yn.getActivityType
          , c = {
            type: c ? c(a, "activity") || a : a
        }
          , d = Vn(a);
        d && (c.content = (new d).transform(b));
        return c
    }
    ;
    var Zn = function(a, b) {
        this.g = z.eb(a || {});
        this.WI = {};
        this.oD = {};
        b && this.Vl(b)
    };
    var $n = function(a, b, c, d) {
        z.ia(b) ? z.y(b, function(a, b) {
            $n(this, b, a, d)
        }, a) : d[b] = c
    };
    var ao = function(a, b) {
        Zn.call(this, a, b)
    };
    var rn = function(a) {
        z.Fd.call(this, a)
    };
    var bo = function() {
        this.kz = "";
        this.uM = co
    };
    var eo = function(a) {
        return a instanceof bo && a.constructor === bo && a.uM === co ? a.kz : "type_error:Const"
    };
    var fo = function() {
        this.Ux = "";
        this.YL = go
    };
    var ho = function(a) {
        return a instanceof fo && a.constructor === fo && a.YL === go ? a.Ux : "type_error:SafeStyle"
    };
    var io = function(a) {
        var b = new fo;
        b.Ux = a;
        return b
    };
    var jo = function() {
        this.Nl = "";
        this.ZL = ko
    };
    var lo = function(a) {
        return a instanceof jo && a.constructor === jo && a.ZL === ko ? a.Nl : "type_error:SafeUrl"
    };
    var mo = function() {
        this.Nl = "";
        this.XL = no;
        this.tD = null
    };
    var oo = function(a) {
        return a instanceof mo && a.constructor === mo && a.XL === no ? a.Nl : "type_error:SafeHtml"
    };
    var po = function(a) {
        if (a instanceof mo)
            return a;
        var b = null;
        a.PF && (b = a.tn());
        return qo(z.ya(a.Hr ? a.er() : String(a)), b)
    };
    var ro = function(a) {
        function b(a) {
            z.ea(a) ? z.w(a, b) : (a = po(a),
            d += oo(a),
            a = a.tn(),
            0 == c ? c = a : 0 != a && c != a && (c = null))
        }
        var c = 0
          , d = "";
        z.w(arguments, b);
        return qo(d, c)
    };
    var qo = function(a, b) {
        var c = new mo;
        c.Nl = a;
        c.tD = b;
        return c
    };
    var so = function() {
        throw Error("Do not instantiate directly");
    };
    z.to = function(a, b, c) {
        a.innerHTML = uo(b(c || vo, void 0, void 0))
    }
    ;
    var wo = function(a, b) {
        var c = z.Dc()
          , d = uo(a(b || vo, void 0, void 0));
        return z.Qh(c.Ma, d)
    };
    z.xo = function(a, b) {
        var c = z.Dc().createElement("DIV")
          , d = uo(a(b || vo, void 0, void 0));
        c.innerHTML = d;
        return 1 == c.childNodes.length && (d = c.firstChild,
        1 == d.nodeType) ? d : c
    }
    ;
    var uo = function(a) {
        if (!z.ia(a))
            return String(a);
        if (a instanceof so) {
            if (a.Yd === yo)
                return a.mb();
            if (a.Yd === zo)
                return z.ya(a.mb())
        }
        return "zSoyz"
    };
    var Ao = function(a, b) {
        null != a && this.append.apply(this, arguments)
    };
    var Bo = function(a) {
        if (null != a)
            switch (a.Sm) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    };
    var Co = function() {
        so.call(this)
    };
    z.P = function(a) {
        return null != a && a.Yd === yo ? a : a instanceof mo ? (0,
        z.Q)(oo(a), a.tn()) : (0,
        z.Q)(z.ya(String(String(a))), Bo(a))
    }
    ;
    var Do = function(a, b) {
        this.content = String(a);
        this.Sm = null != b ? b : null
    };
    var Eo = function(a, b) {
        var c = "key_a:" + a
          , d = Fo[c];
        if (void 0 === d || 0 > d)
            Fo[c] = 0,
            Go[c] = b;
        else if (0 == d)
            throw Error('Encountered two active delegates with the same priority ("a:' + a + '").');
    };
    var Ho = function() {
        return ""
    };
    var Io = function(a) {
        return (a = String(a)) ? new Do(a,void 0) : ""
    };
    z.Jo = function(a) {
        return z.P(a)
    }
    ;
    z.R = function(a) {
        null != a && a.Yd === yo ? (a = a.mb(),
        a = String(a).replace(Ko, "").replace(Lo, "\x26lt;"),
        a = String(a).replace(Mo, No)) : a = z.ya(String(a));
        return a
    }
    ;
    var Oo = function(a) {
        return "%" + a.charCodeAt(0).toString(16)
    };
    var Po = function(a) {
        if (null != a && a.Yd === Qo)
            return String(a).replace(Ro, So);
        if (a instanceof jo)
            return a = lo(a),
            String(a).replace(Ro, So);
        a = (0,
        window.encodeURIComponent)(String(String(a)));
        To.lastIndex = 0;
        return To.test(a) ? a.replace(To, Oo) : a
    };
    z.S = function(a) {
        null != a && a.Yd === Qo ? a = String(a).replace(Ro, So) : a instanceof jo ? (a = lo(a),
        a = String(a).replace(Ro, So)) : (a = String(a),
        a = Uo.test(a) ? a.replace(Ro, So) : "#zSoyz");
        return a
    }
    ;
    z.Vo = function(a) {
        null != a && a.Yd === Wo ? a = a.mb() : null == a ? a = "" : a instanceof fo ? a = ho(a) : (a = String(a),
        a = Xo.test(a) ? a : "zSoyz");
        return a
    }
    ;
    var No = function(a) {
        return Yo[a]
    };
    var Zo = function(a) {
        return $o[a]
    };
    var So = function(a) {
        return ap[a]
    };
    z.bp = function(a) {
        return String(a).replace(cp, Zo)
    }
    ;
    var dp = function() {
        return (0,
        z.Q)('\x3ca class\x3d"fyre-comment-flag-mobile-btn fyre-comment-action-button"\x3e\x3c/a\x3e')
    };
    var ep = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-mobile-menu"\x3e\x3cdiv class\x3d"fyre-flag-menu-item"\x3e\x3ca class\x3d"fyre-flag-spam-link" title\x3d"' + z.R(a.j.sP) + '"\x3e\x3cspan class\x3d"fyre-flag-spam-sprite"\x3e\x3c/span\x3e' + z.P(a.j.rP) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-flag-menu-item"\x3e\x3ca class\x3d"fyre-flag-offensive-link" title\x3d"' + z.R(a.j.oP) + '"\x3e\x3cspan class\x3d"fyre-flag-offensive-sprite"\x3e\x3c/span\x3e' + z.P(a.j.nP) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-flag-menu-item"\x3e\x3ca class\x3d"fyre-flag-disagree-link" title\x3d"' + z.R(a.j.lP) + '"\x3e\x3cspan class\x3d"fyre-flag-disagree-sprite"\x3e\x3c/span\x3e' + z.P(a.j.kP) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-flag-menu-item"\x3e\x3ca class\x3d"fyre-flag-offtopic-link" title\x3d"' + z.R(a.j.qP) + '"\x3e\x3cspan class\x3d"fyre-flag-off-topic-sprite"\x3e\x3c/span\x3e' + z.P(a.j.pP) + "\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e")
    };
    var fp = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment-actions"\x3e' + dp() + '\x3c/div\x3e\x3cspan class\x3d"fyre-comment-like"\x3e\x3c/span\x3e')
    };
    var gp = function(a) {
        return (0,
        z.Q)('\x3ca class\x3d"fyre-more-btn"\x3e' + z.P(a.j.aU) + "\x3c/a\x3e")
    };
    var hp = function(a) {
        return (0,
        z.Q)('\x3ca href\x3d"' + z.R(z.S(a.Ba)) + '" title\x3d"' + z.R(a.da) + '" rel\x3d"nofollow" target\x3d"_blank" data-authorid\x3d"' + z.R(a.Gg) + '" class\x3d"fyre-avatar"\x3e\x3cimg src\x3d"' + z.R(z.S(a.Lc)) + '" alt\x3d"' + z.R(a.da) + '" onerror\x3d"javascript:this.src\x3d\'' + z.R(z.bp(a.cc)) + "';\" /\x3e\x3c/a\x3e")
    };
    var ip = function(a) {
        return (0,
        z.Q)('\x3ca href\x3d"' + z.R(z.S(a.s.Ba)) + '" class\x3d"fyre-comment-author"\x3e\x3cimg src\x3d"' + z.R(z.S(a.s.Lc)) + '" class\x3d"fyre-user-avatar" alt\x3d"Avatar for ' + z.R(a.s.da) + '" onerror\x3d"javascript:this.src\x3d\'' + z.R(z.bp(a.s.cc)) + "';\" /\x3e\x3c/a\x3e")
    };
    z.jp = function(a) {
        return (0,
        z.Q)(a.Ue ? '\x3cspan class\x3d"fyre-user-level fyre-comment-author-tag fyre-moderator"\x3e' + z.P(a.j.Ue) + "\x3c/span\x3e" : "")
    }
    ;
    var kp = function(a) {
        return (0,
        z.Q)('\x3cspan class\x3d"fyre-comment-tag fyre-featured" ' + (a.bG ? "" : 'style\x3d"display: none;"') + '\x3e\x3cspan class\x3d"fyre-featured-icon"\x3e\x3c/span\x3e\x3cspan class\x3d"fyre-featured-text"\x3e' + z.P(a.j.aP) + "\x3c/span\x3e\x3cbr\x3e\x3c/span\x3e")
    };
    z.lp = function(a) {
        var b = "";
        a = a.s.IW;
        for (var c = a.length, d = 0; d < c; d++)
            var f = a[d]
              , b = b + ('\x3cspan class\x3d"fyre-comment-author-tag" data-fyre-author-tag\x3d"' + z.R(f) + '"\x3e' + z.P(f) + "\x3c/span\x3e");
        return (0,
        z.Q)(b)
    }
    ;
    var mp = function(a) {
        return (0,
        z.Q)('\x3ca class\x3d"fyre-share-link" title\x3d"' + z.R(a.j.My) + '"\x3e\x3cspan\x3e\x3c/span\x3e' + z.P(a.j.My) + "\x3c/a\x3e")
    };
    var np = function(a) {
        return (0,
        z.Q)('\x3ca class\x3d"fyre-tw-reply-link" href\x3d"' + z.R(z.S(a.dq)) + "tweet?in_reply_to\x3d" + Po(a.kt) + '" title\x3d"Reply on Twitter"\x3e\x3cspan\x3e\x3c/span\x3eReply on Twitter\x3c/a\x3e\x3ca class\x3d"fyre-tw-retweet-link" href\x3d"' + z.R(z.S(a.dq)) + "retweet?tweet_id\x3d" + Po(a.kt) + '" title\x3d"Retweet"\x3e\x3cspan\x3e\x3c/span\x3eRetweet\x3c/a\x3e\x3ca class\x3d"fyre-tw-fav-link" href\x3d"' + z.R(z.S(a.dq)) + "favorite?tweet_id\x3d" + Po(a.kt) + '" title\x3d"Like"\x3e\x3cspan\x3e\x3c/span\x3eLike\x3c/a\x3e')
    };
    var op = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment-ad"\x3e\x3cspan class\x3d"fyre-comment-ad-title"\x3e' + z.P(a.j.xW) + '\x3c/span\x3e\x3cdiv class\x3d"fyre-comment-ad-container"\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var pp = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-media-mask"\x3e\x3cdiv class\x3d"fyre-media-mask-container"\x3e\x3cp\x3eThis embedded content is from a site that may not support the current privacy settings in your browser that you have enabled for the site hosting the embedded content.\x3c/p\x3e\x3cp\x3ePlease note, if you elect to click through and view it anyway, you may be tracked by the site hosting the embedded content.\x3c/p\x3e\x3cspan class\x3d"fyre-show-embed"\x3eShow\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var qp = function(a) {
        z.D.call(this);
        this.pa = a;
        this.gb = {}
    };
    var rp = function(a, b, c, d, f, g) {
        z.ea(c) || (c && (sp[0] = c.toString()),
        c = sp);
        for (var h = 0; h < c.length; h++) {
            var k = Jk(b, c[h], d || a.handleEvent, f || !1, g || a.pa || a);
            if (!k)
                break;
            a.gb[k.key] = k
        }
        return a
    };
    var tp = function(a, b, c, d, f, g) {
        if (z.ea(c))
            for (var h = 0; h < c.length; h++)
                tp(a, b, c[h], d, f, g);
        else {
            b = Tk(b, c, d || a.handleEvent, f, g || a.pa || a);
            if (!b)
                return a;
            a.gb[b.key] = b
        }
        return a
    };
    var up = function() {};
    var vp = function(a) {
        return ":" + (a.gU++).toString(36)
    };
    z.T = function(a) {
        $k.call(this);
        this.va = a || z.Dc();
        this.qg = wp;
        this.fc = null;
        this.aa = !1;
        this.c = null;
        this.Rh = void 0;
        this.of = this.ma = this.Ta = this.l = null;
        this.ZI = !1
    }
    ;
    var xp = function(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    };
    var yp = function(a) {
        return a.fc || (a.fc = vp(a.IS))
    };
    var zp = function(a, b) {
        a.Ta && a.Ta.of && (z.db(a.Ta.of, a.fc),
        Wi(a.Ta.of, b, a));
        a.fc = b
    };
    z.Ap = function(a, b) {
        Bp(a, b.parentNode, b)
    }
    ;
    var Bp = function(a, b, c) {
        if (a.aa)
            throw Error("Component already rendered");
        a.c || a.r();
        b ? b.insertBefore(a.c, c || null) : a.va.la().body.appendChild(a.c);
        a.Ta && !a.Ta.aa || a.m()
    };
    var Cp = function(a) {
        return a.l
    };
    var Dp = function(a, b) {
        return a.of && b ? Vi(a.of, b) || null : null
    };
    z.Ep = function(a, b) {
        return a.ma && b ? z.Na(a.ma, b) : -1
    }
    ;
    var Fp = function(a, b) {
        z.T.call(this);
        this.l = a;
        this.tf = 4 === a.get(Lm).get(z.U.sd) ? z.V : z.W;
        this.vP = b.Cv
    };
    var Gp = function(a) {
        a = a.tf;
        var b = a.g
          , c = {}
          , d = [];
        c.spam = a.get(b.Ft);
        c.offensive = a.get(b.Dt);
        c.disagree = a.get(b.Ct);
        c["off-topic"] = a.get(b.Et);
        z.y(c, function(a, b) {
            d.push({
                label: a,
                pX: b
            })
        });
        return d
    };
    var Hp = function(a) {
        z.D.call(this);
        this.d = a;
        this.pa = null
    };
    var Ip = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-modal-container"\x3e\x3cdiv class\x3d"fyre-modal-subtitle"\x3e' + z.P(a.cs) + "\x3c/div\x3e\x3c/div\x3e")
    };
    var Jp = function(a) {
        return (0,
        z.Q)('\x3ca rel\x3d"nofollow" resource\x3d"acct:' + z.R(a.kG) + '" data-lf-handle\x3d"' + z.R(a.handle) + '" data-lf-provider\x3d"' + z.R(a.le) + '" property\x3d"url" href\x3d"' + z.R(z.S(a.Ba)) + '" class\x3d"fyre-mention fyre-mention-' + z.R(a.le) + '"\x3e' + z.P(a.prefix) + '\x3cspan property\x3d"name"\x3e' + z.P(a.da) + "\x3c/span\x3e\x3c/a\x3e")
    };
    var Kp = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-actions-menu"\x3e\x3c/div\x3e')
    };
    var Lp = function(a) {
        return (0,
        z.Q)((a.UT ? '\x3ca class\x3d"fyre-actions-menu-' + (a.Kw ? "back" : "close") + ' fyre-actions-menu-nav-btn"\x3e\x3c/a\x3e' : '\x3cspan class\x3d"fyre-actions-arrow"\x3e\x3c/span\x3e') + '\x3cdiv class\x3d"fyre-actions-menu-contents" /\x3e')
    };
    var Mp = function(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    };
    var Np = function(a, b, c) {
        z.ea(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (Op || (Op = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }),
        c = Op,
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var Pp = function(a, b) {
        var c = a.getAttribute("aria-" + b);
        return null == c || void 0 == c ? "" : String(c)
    };
    var Qp = function(a, b) {
        var c = "";
        b && (c = b.id);
        Np(a, "activedescendant", c)
    };
    var Rp = function(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return z.p(a) && a.match(/\S+/g) || []
    };
    var Sp = function(a, b) {
        return a.classList ? a.classList.contains(b) : z.Sa(Rp(a), b)
    };
    var Tp = function(a, b) {
        a.classList ? a.classList.add(b) : Sp(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    };
    var Up = function(a, b) {
        if (a.classList)
            z.w(b, function(b) {
                Tp(a, b)
            });
        else {
            var c = {};
            z.w(Rp(a), function(a) {
                c[a] = !0
            });
            z.w(b, function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c)
                a.className += 0 < a.className.length ? " " + d : d
        }
    };
    var Vp = function(a, b) {
        a.classList ? a.classList.remove(b) : Sp(a, b) && (a.className = z.Oa(Rp(a), function(a) {
            return a != b
        }).join(" "))
    };
    var Wp = function(a, b) {
        a.classList ? z.w(b, function(b) {
            Vp(a, b)
        }) : a.className = z.Oa(Rp(a), function(a) {
            return !z.Sa(b, a)
        }).join(" ")
    };
    var Xp = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode)
            return !1;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 224:
        case 92:
            return !1;
        case 0:
            return !z.H;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    };
    var Yp = function(a, b, c, d, f) {
        if (!(z.C || z.J && z.B("525")))
            return !0;
        if (z.jg && f)
            return Zp(a);
        if (f && !d)
            return !1;
        z.oh(b) && (b = $p(b));
        if (!c && (17 == b || 18 == b || z.jg && 91 == b))
            return !1;
        if (z.J && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (z.C && d && b == a)
            return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !z.J
        }
        return Zp(a)
    };
    var Zp = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || z.J && 0 == a)
            return !0;
        switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    };
    var $p = function(a) {
        if (z.H)
            a = aq(a);
        else if (z.jg && z.J)
            a: switch (a) {
            case 93:
                a = 91;
                break a
            }
        return a
    };
    var aq = function(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };
    var bq = function(a, b, c) {
        $k.call(this);
        this.target = a;
        this.handle = b || a;
        this.zl = c || new tl(window.NaN,window.NaN,window.NaN,window.NaN);
        this.Ma = z.Fc(a);
        this.uc = new qp(this);
        a = z.pa(Sh, this.uc);
        this.Fj || (this.Fj = []);
        this.Fj.push(z.ba(void 0) ? (0,
        z.q)(a, void 0) : a);
        Jk(this.handle, ["touchstart", "mousedown"], this.cz, !1, this)
    };
    var cq = function(a) {
        z.ba(a.qg) || (a.qg = Il(a.target));
        return a.qg
    };
    var dq = function(a) {
        var b = a.type;
        "touchstart" == b || "touchmove" == b ? a.Zg(a.Sb.targetTouches[0], a.currentTarget) : "touchend" != b && "touchcancel" != b || a.Zg(a.Sb.changedTouches[0], a.currentTarget)
    };
    var eq = function(a, b, c) {
        var d = Nh(z.Dc(a.Ma));
        b += d.x - a.Nx.x;
        c += d.y - a.Nx.y;
        a.Nx = d;
        a.deltaX += b;
        a.deltaY += c;
        b = fq(a, a.deltaX);
        a = gq(a, a.deltaY);
        return new z.uh(b,a)
    };
    var hq = function(a, b, c, d) {
        a.mt && cq(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
        a.target.style.top = d + "px";
        a.dispatchEvent(new iq("drag",a,b.clientX,b.clientY,0,c,d))
    };
    var fq = function(a, b) {
        var c = a.zl
          , d = (0,
        window.isNaN)(c.left) ? null : c.left
          , c = (0,
        window.isNaN)(c.width) ? 0 : c.width;
        return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
    };
    var gq = function(a, b) {
        var c = a.zl
          , d = (0,
        window.isNaN)(c.top) ? null : c.top
          , c = (0,
        window.isNaN)(c.height) ? 0 : c.height;
        return Math.min(null != d ? d + c : window.Infinity, Math.max(null != d ? d : -window.Infinity, b))
    };
    var iq = function(a, b, c, d, f, g, h) {
        uk.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.left = z.ba(g) ? g : b.deltaX;
        this.top = z.ba(h) ? h : b.deltaY;
        this.DD = b
    };
    var jq = function(a) {
        $k.call(this);
        this.c = a;
        a = z.C ? "focusout" : "blur";
        this.nT = Jk(this.c, z.C ? "focusin" : "focus", this, !z.C);
        this.oT = Jk(this.c, a, this, !z.C)
    };
    var kq = function(a, b) {
        $k.call(this);
        this.pa = new qp(this);
        this.Cy(a || null);
        b && (this.hm = b)
    };
    var lq = function(a) {
        if (a.zj)
            throw Error("Can not change this state of the popup while showing.");
    };
    var mq = function(a, b) {
        return z.Qa(a.tC || [], function(a) {
            return b === a || z.Vc(a, b)
        })
    };
    var nq = function(a, b) {
        z.T.call(this, b);
        this.lX = !!a;
        this.yl = null
    };
    var oq = function(a) {
        if (a.lX && !a.Mc) {
            var b;
            b = a.R().r("iframe", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: 'javascript:""'
            });
            a.Mc = b;
            a.Mc.className = a.P() + "-bg";
            z.N(a.Mc, !1);
            Pl(a.Mc, 0)
        }
        a.Xd || (a.Xd = a.R().r("div", a.P() + "-bg"),
        z.N(a.Xd, !1))
    };
    var pq = function(a) {
        a.Of || (a.Of = a.R().createElement("span"),
        z.N(a.Of, !1),
        Ai(a.Of, !0),
        a.Of.style.position = "absolute")
    };
    var qq = function(a, b) {
        if (b) {
            a.ll || (a.ll = []);
            for (var c = a.R(), c = c.ec(c.la().body), d = 0; d < c.length; d++) {
                var f = c[d];
                f == a.c || Pp(f, "hidden") || (Np(f, "hidden", !0),
                a.ll.push(f))
            }
        } else if (a.ll) {
            for (d = 0; d < a.ll.length; d++)
                a.ll[d].removeAttribute("aria-hidden");
            a.ll = null
        }
    };
    var rq = function(a, b) {
        a.Mc && z.N(a.Mc, b);
        a.Xd && z.N(a.Xd, b);
        z.N(a.f(), b);
        z.N(a.Of, b)
    };
    var sq = function(a, b, c) {
        nq.call(this, b, c);
        this.ed = a || "modal-dialog";
        this.Oc = tq()
    };
    var uq = function(a, b) {
        a.oz = b;
        a.pd && Bi(a.pd, b)
    };
    var vq = function(a, b) {
        a.cq = b;
        if (a.f()) {
            var c = a.Uq();
            c && Pl(c, a.cq)
        }
    };
    var wq = function(a, b) {
        var c = z.xa(a.ed + "-title-draggable").split(" ");
        a.f() && (b ? Up(a.Wa, c) : Wp(a.Wa, c));
        b && !a.Ih ? (a.Ih = new bq(a.f(),a.Wa),
        Up(a.Wa, c),
        Jk(a.Ih, "start", a.WV, !1, a)) : !b && a.Ih && (a.Ih.q(),
        a.Ih = null)
    };
    var xq = function(a) {
        if (a.Lw) {
            var b = a.Oc
              , c = b && b.Pu;
            c ? (b = b.get(c),
            a.dispatchEvent(new yq(c,b)) && a.V(!1)) : a.V(!1)
        }
    };
    var zq = function(a, b) {
        a.Oc = b;
        if (a.Bc) {
            if (a.Oc) {
                var c = a.Oc;
                c.c = a.Bc;
                c.ra()
            } else
                a.Bc.innerHTML = oo(Aq);
            z.N(a.Bc, !!a.Oc)
        }
    };
    var yq = function(a, b) {
        this.type = Bq;
        this.key = a;
        this.caption = b
    };
    var Cq = function(a) {
        this.va = a || z.Dc();
        z.ud.call(this)
    };
    var Dq = function(a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    };
    var tq = function() {
        return Dq(Dq(new Cq, Eq, !0), Fq, !1, !0)
    };
    z.Gq = function(a) {
        this.kp = Hq;
        sq.call(this, a || "fyre-modal-alert");
        this.RC = null;
        this.kv = !0;
        this.fv = !1;
        wq(this, !1);
        zq(this, null);
        this.yi = null;
        Jk(this, Bq, this.close);
        return this
    }
    ;
    var Iq = function(a, b) {
        a.aa || a.ra();
        ik(a.f(), a.RC, b);
        a.RC = b
    };
    var Jq = function(a) {
        a = a || "fyre-modal";
        this.kv = !0;
        this.fv = !1;
        wq(this, !1);
        sq.call(this, a)
    };
    var Kq = function(a, b, c) {
        a = a.Oc;
        a.dc(Eq.key).innerHTML = b;
        a.dc(Fq.key).innerHTML = c
    };
    var Lq = function(a, b, c) {
        var d = a.get(b);
        d || (d = [],
        a.set(b, d));
        d.push(c)
    };
    var Mq = function(a) {
        var b = a.type;
        if (!z.ba(b))
            return null;
        switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : null;
        case "select-one":
            return b = a.selectedIndex,
            0 <= b ? a.options[b].value : null;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++)
                c.selected && b.push(c.value);
            return b.length ? b : null;
        default:
            return z.ba(a.value) ? a.value : null
        }
    };
    var Nq = function(a) {
        z.w(a.H && a.H.Wk || [], function(a) {
            this[Oq(a.key)] = function(c) {
                a.ia({
                    authorId: c.n.get(z.Sm),
                    contentId: c.n.id
                })
            }
        }, this);
        Hp.call(this, a)
    };
    var Pq = function() {
        var a = z.Gq.D();
        a.Oa(z.W.get(z.W.g.gA));
        a.open()
    };
    var Oq = function(a) {
        a = a.replace(/ /g, "");
        return z.wa("handle%sClick_", a.charAt(0).toUpperCase() + a.slice(1))
    };
    var Qq = function(a) {
        Hp.call(this, a)
    };
    z.Rq = function(a, b) {
        z.rf.call(this, a, b);
        this.$s = z.af();
        z.vf();
        this.gc(b);
        z.Uf.subscribe("user_logged_in", this.qD, this)
    }
    ;
    var Sq = function(a, b, c) {
        if (!z.F.id && a.isEnabled()) {
            var d = {};
            switch (b) {
            case "post":
            case "post_review":
                d = ln(c)
            }
            c = z.cd(d);
            b = z.wa("%s%s%s", b, ":::", c);
            (c = a.$s.Yc.get("fyre-action-queue")) && (b = z.wa("%s%s%s", c, "|||", b));
            a.$s.Yc.set("fyre-action-queue", b)
        }
    };
    var Tq = function() {
        this.Fd = z.Cd("fyre.v1.client.FilepickerClient")
    };
    var Uq = function(a) {
        Hp.call(this, a);
        this.w = this.d.u.v();
        this.Va = zj(this.w) ? z.V : z.W
    };
    var Vq = function(a, b) {
        var c = new z.Em;
        c.set(Um, b.id || null);
        c.set(z.bn, b.Ck);
        c.set(Lm, a.w);
        c.set(z.Rm, b.hi || null);
        c.set(an, b.Dh);
        c.set("rawHtml", b.sV);
        var d;
        d = b.gj;
        var f = c.get(z.bn)
          , g = c.get(an)
          , h = c.get("rawHtml");
        xi(f) || h || g.length ? 8E3 < f.length ? (d(z.W.get(z.W.g.tm)),
        d = !1) : d = !0 : (d(z.W.get(z.W.g.dA)),
        d = !1);
        if (d)
            return c
    };
    var Wq = function(a, b) {
        var c = new z.yn;
        c.set(z.O.X, b.id || null);
        c.set(z.O.Jc, b.Ck);
        c.set(z.O.Nd, a.w);
        b.title && c.set(z.O.ab, b.title);
        b.Bb ? c.set(z.O.wb, b.Bb) : c.wg(z.O.wb);
        c.set(z.O.pk, b.vg);
        c.set(z.O.ef, b.Dh);
        if (Xq(a, c, b.gj))
            return c.set(z.O.Jc, b.vg.join("") + b.Ck),
            c
    };
    var Yq = function(a, b, c, d) {
        var f = a.d.Ud;
        b = (0,
        z.q)(b, a.d.lb, d, c.ia, c.gj);
        c = c.gj;
        try {
            z.Ih(f, a.w, b, c)
        } catch (g) {
            "CommentCharacterLimitReached" === g.name && c(a.Va.get(a.Va.g.tm))
        }
    };
    var Xq = function(a, b, c) {
        var d = b.get(z.O.Jc);
        a = a.d.H.$d;
        var f = !!b.id
          , g = b.get(z.O.wb)
          , h = b.get(z.O.pk)
          , k = b.get(z.O.ab);
        b = [];
        f || (z.ia(g) && !z.cb(g) ? $i(g, function(a) {
            return -1 === a
        }) && b.push(z.V.get(z.V.g.Bt)) : b.push(z.V.get(z.V.g.Bt)));
        !a && z.$h(k) && b.push(z.V.get(z.V.g.fA));
        var f = !xi(d)
          , h = z.Qa(h, function(a) {
            return z.$h(a)
        })
          , g = z.Ha(d, "fyre-editor-placeholder")
          , m = z.Ha(d, z.V.get(z.V.g.wt));
        (f || h || g && m) && b.push(z.V.get(z.V.g.eA));
        return (h = b.length) ? (d = z.V.get(z.V.g.hA),
        d = 1 === h ? d + (" " + b[0]) : 2 === h ? d + (" " + b[0] + " and " + b[1]) : d + (" " + b[0] + ", " + b[1] + ", and " + b[2]),
        c(d),
        !1) : !a && 150 < k.length ? (c(z.V.get(z.V.g.jA)),
        !1) : 8E3 < d.length ? (c(z.V.get(z.V.g.tm)),
        !1) : !0
    };
    var Zq = function(a) {
        Hp.call(this, a)
    };
    var $q = function(a) {
        Hp.call(this, a)
    };
    var ar = function(a, b, c, d, f, g) {
        var h = Jq.D();
        b = z.X.iP({
            message: b,
            Ie: c
        });
        h.Oa(b);
        h.open();
        Kq(h, d.get(d.g.pA), d.get(d.g.nA));
        h.e(Bq, (0,
        z.q)(function(a) {
            var b = !1;
            a.key === Eq.key && (this.d.lb.jn(f),
            b = !0);
            g(b)
        }, a))
    };
    var br = function(a, b) {
        $k.call(this);
        z.Cd("fyre.conv.widget.ui.DomWatcher");
        this.va = b || new z.Ec;
        this.dz = this.ki = null;
        this.HO = a
    };
    var cr = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-widget-loading-spinner"\x3e\x3c/div\x3e')
    };
    var dr = function(a) {
        z.T.call(this, a)
    };
    z.er = function(a) {
        z.D.call(this);
        this.pa = new qp(this);
        this.d = a;
        this.Gq = new br(a.H.Kq);
        this.pa.e(this.Gq, fr, this.BU)
    }
    ;
    z.gr = function(a, b) {
        function c(a) {
            var c = new z.ae(a), g;
            z.Qa(b, function(a) {
                g = c.get(a);
                return !!g
            });
            return g
        }
        b = z.ea(b) ? b : [b];
        return c(a.search.substring(1)) || c(a.hash.substring(1))
    }
    ;
    z.hr = function(a) {
        var b = window.location;
        a = a.d.u.v();
        b = z.gr(b, ir);
        if (!b)
            return null;
        if (0 < b.indexOf(":")) {
            b = b.split(":");
            if (b[0] !== a.id)
                return null;
            b = b[1]
        }
        return b
    }
    ;
    z.jr = function(a) {
        if (a.Qb && a.Qb.aa)
            return !1;
        if (!a.cO) {
            if (!a.dO) {
                var b = (0,
                z.q)(a.sU, a);
                a.d.u.Ke(b);
                a.dO = !0
            }
            return !1
        }
        if (!a.d.u.v().get(z.U.mp))
            return a.q(),
            !1;
        if (a.c && a.Qb)
            return a.ra(),
            !0
    }
    ;
    z.kr = function(a, b) {
        function c(a) {
            var c = null;
            if ("object" === typeof a.data)
                c = a.data;
            else
                try {
                    c = JSON.parse(a.data)
                } catch (d) {
                    return
                }
            "comments" === c.RW && c.data && "put" === c.action && this.Qb.Yg(c.data.pO, b)
        }
        (window.addEventListener || window.attachEvent)(window.addEventListener ? "message" : "onmessage", function(b) {
            c.call(a, b)
        }, !1);
        var d = a.d.u.v();
        (d = "object" === typeof d && d.get ? d.get(z.U.X) : null) && window.postMessage(JSON.stringify({
            A1: "comments",
            RW: "permalink",
            action: "post",
            data: {
                name: "comments",
                Aa: d
            }
        }), "*")
    }
    ;
    var lr = function(a, b) {
        z.T.call(this, b)
    };
    var mr = function(a) {
        var b = Oj
          , c = -1 < nr.indexOf(a.get(b.ua))
          , d = (a.get(b.rd) || "").toLowerCase()
          , f = z.v.doNotTrack.uX
          , g = a.get(b.Ii) || a.get(b.URL) || "";
        a = a.get(b.URL) || a.get(b.lf) || "";
        return !z.v.doNotTrack.gq || !c || "twitter" === d && -1 < g.indexOf("twimg.com") || "livefyre" === d && -1 < a.indexOf("cloudfront.net") ? !1 : -1 < or.indexOf(d) ? !0 : mh(f, function(a) {
            return -1 < g.indexOf(a)
        }) ? !1 : !0
    };
    var pr = function(a, b) {
        z.T.call(this);
        qr++;
        this.hE = qr;
        this.fg = a;
        this.hV = b
    };
    var rr = function(a, b) {
        z.T.call(this, b);
        this.Lf(a)
    };
    var sr = function(a, b) {
        var c = a.o("fyre-rich-media-content")
          , d = wi(tr(a, b.ol))
          , f = z.Qh(window.document, d.html);
        c.appendChild(f);
        z.w(d.script, function(a) {
            if (a.src)
                a = z.ji("SCRIPT", {
                    src: a.src
                }),
                c.appendChild(a);
            else if (a = a.innerHTML,
            z.s.execScript)
                z.s.execScript(a, "JavaScript");
            else if (z.s.eval)
                if (null == ur && (z.s.eval("var _et_ \x3d 1;"),
                "undefined" != typeof z.s._et_ ? (delete z.s._et_,
                ur = !0) : ur = !1),
                ur)
                    z.s.eval(a);
                else {
                    var b = z.s.document
                      , d = b.createElement("script");
                    d.type = "text/javascript";
                    d.defer = !1;
                    d.appendChild(b.createTextNode(a));
                    b.body.appendChild(d);
                    b.body.removeChild(d)
                }
            else
                throw Error("goog.globalEval not available");
        }, a)
    };
    var tr = function(a, b) {
        return "SoundCloud" === a.l.get(Oj.rd) ? b.replace(vr, "") : b
    };
    var wr = function(a, b) {
        var c = Oj
          , d = a.l.get(c.Ii)
          , c = a.l.get(c.rd);
        if ("instagram" === c)
            a.c.innerHTML = "",
            a.G(new pr(d,c), !0);
        else {
            var c = a.c
              , d = z.Qh(window.document, d)
              , f = (0,
            window.parseInt)(d.width, 10)
              , g = (0,
            window.parseInt)(d.height, 10) / f
              , h = z.Ml(a.c)
              , k = a.l.get(Oj.rd);
            if ("YouTube" === k || "Livefyre" === k)
                k = oi(d.src),
                z.de(k, "autoplay", b ? 1 : 0),
                d.src = k.toString();
            f > h.width && (d.width = h.width,
            d.height = g * h.width);
            d = z.hi(d);
            c.innerHTML = d
        }
    };
    var xr = function() {};
    var yr = function() {
        this.F = "pending";
        this.xr = [];
        this.bn = this.rh = void 0
    };
    var zr = function() {
        z.sa.call(this, "Multiple attempts to set the state of this Result")
    };
    var Ar = function(a, b, c) {
        "pending" == a.F ? a.xr.push({
            ia: b,
            scope: c || null
        }) : b.call(c, a)
    };
    var Br = function(a) {
        var b = a.xr;
        a.xr = [];
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.ia.call(d.scope, a)
        }
    };
    var Cr = function(a) {
        return "error" == a.F && a.bn instanceof xr
    };
    var Dr = function(a, b) {
        Ar(a, b, void 0)
    };
    var Er = function(a, b) {
        Dr(a, function(a) {
            "success" == a.yf() && b.call(this, a.Q(), a)
        })
    };
    var Fr = function(a) {
        function b() {
            "pending" == f.yf() && nh(d, c) && f.ob(d)
        }
        function c(a) {
            return "pending" != a.yf()
        }
        var d = z.Xa(arguments)
          , f = new Gr;
        z.w(d, function(a) {
            Ar(a, b, void 0)
        });
        return f
    };
    var Gr = function() {
        yr.call(this)
    };
    var Hr = function(a) {
        var b = new yr;
        z.Xf(a, null, null, function() {
            b.ob(!0)
        }, void 0);
        return b
    };
    var Ir = function(a, b) {
        function c() {
            z.w(g, d);
            h && h.widgets && z.Eh("twitter-tweet", b) && h.widgets.load(b)
        }
        function d(a) {
            try {
                window.eval(a)
            } catch (b) {}
        }
        var f = []
          , g = []
          , h = z.s.twttr;
        z.w(a, function(a) {
            a.src ? (a = Hr(a.src),
            f.push(a)) : g.push(fi(a))
        });
        if (f.length) {
            var k = Fr.apply(null, f);
            Er(k, c)
        } else
            c()
    };
    var Jr = function(a) {
        z.T.call(this, a)
    };
    var Kr = function(a) {
        z.T.call(this, a)
    };
    var Lr = function(a) {
        z.T.call(this, a)
    };
    var Mr = function(a, b, c) {
        this.Bj = this.Rg = null;
        this.AN = b || z.ug;
        z.T.call(this, c);
        this.Lf(a)
    };
    var Nr = function(a) {
        var b = Oj;
        return a.l.filter(function(a) {
            return a.get(b.ua) !== Qj.lf
        })
    };
    var Or = function(a, b) {
        a.Rg && (a.removeChild(a.Rg),
        a.Rg.q());
        a.Rg = new rr(b);
        a.G(a.Rg);
        var c = a.Bj && a.Bj.f();
        c ? z.Ap(a.Rg, c) : a.Rg.ra(a.c)
    };
    var Pr = function(a, b) {
        z.T.call(this);
        this.Cr = a;
        this.Lf(b);
        this.tf = zj(b.get(Lm)) ? z.V : z.W
    };
    var Qr = function(a, b, c, d, f) {
        this.cn = a;
        this.W = c;
        this.mf = c.get(z.Gm);
        this.jx = z.on(c, z.F);
        this.tv = b;
        this.wu = z.wj(d.Fg) ? d.Fg : !0;
        this.dE = this.Xn();
        z.T.call(this, f)
    };
    var Rr = function(a) {
        return z.Pa(a.cn, function(a) {
            return {
                Wi: !0,
                key: a.key.replace(/ /g, ""),
                j: [a.key, a.key]
            }
        })
    };
    var Sr = function(a, b) {
        z.T.call(this, b);
        this.C = a
    };
    var Tr = function(a, b, c, d, f) {
        this.C = d;
        gn(c) && (a = []);
        Qr.call(this, a, b, c, d, f)
    };
    var Ur = function(a) {
        var b = zj(a.W.get(Lm)) ? z.V : z.W
          , c = b.g
          , b = [{
            Wi: a.Wn(),
            key: "ban",
            j: [b.get(c.km), b.get(c.sJ)]
        }, {
            Wi: a.Wn(!0),
            key: "bozo",
            j: [b.get(c.nm), b.get(c.wJ)]
        }, {
            Wi: a.bx(),
            key: "delete",
            j: [b.get(c.th), b.get(c.FJ)]
        }, {
            Wi: a.Xn(),
            key: "flag",
            j: [b.get(c.ym), b.get(c.rK)]
        }, {
            Wi: !gn(a.W),
            key: "share",
            j: [b.get(c.Cg), b.get(c.dM)]
        }, {
            Wi: a.dx(),
            key: "feature",
            value: a.W.Yh(),
            j: [b.get(c.um), b.get(c.lK), b.get(c.pp), b.get(c.kK)]
        }];
        return z.Wa(b, Rr(a))
    };
    var Vr = function(a, b) {
        z.T.call(this, b);
        this.w = a.xa.get(Lm);
        this.OD = a.MO || {};
        this.QS = 0 === a.interval;
        this.zb = a.interval;
        this.l = a.xa;
        this.Wj = zj(this.w) ? z.V : z.W;
        this.xi = null
    };
    var Wr = function(a) {
        var b = a.k
          , c = a.get(b.qc)
          , d = a.get(b.Nd)
          , f = d.get(z.U.hf)
          , g = a.get(b.Zb)
          , g = Xr(g)
          , h = z.F.eb()
          , d = d.get(z.U.Bm);
        return g ? h ? !0 : 1 !== f || c.id !== z.F.get(z.E.X) || !a.Or() && d && a.get(a.k.Kb) == z.Yr.op || a.get(b.zm) ? !1 : !0 : !1
    };
    var Zr = function(a, b) {
        var c = a.get(a.k.bd)
          , d = a.get(a.k.Lp) || 0;
        return Math.floor(60 * b - ((new Date).getTime() / 1E3 - (c > d ? c : d)))
    };
    var Xr = function(a) {
        return !z.F.kc() && $r.contains(a)
    };
    var as = function(a, b) {
        var c = a.Wj.g
          , d = a.o("fyre-comment-edit-interval")
          , c = 1 === b ? a.Wj.get(a.OD.NW || c.IB) : a.Wj.get(a.OD.OW || c.JB);
        d.innerHTML = z.wa(c, b);
        a.xi = (0,
        window.setTimeout)((0,
        z.q)(function() {
            b--;
            0 < b ? as(this, b) : this.dispatchEvent("edit_timeout")
        }, a), 6E4)
    };
    var bs = function(a, b, c, d) {
        z.T.call(this, c);
        this.ha = d || {};
        this.n = a;
        this.w = b;
        b = this.w.get(z.U.vh);
        zj(this.w) || (this.jd = new Vr({
            interval: b,
            xa: a
        }),
        this.G(this.jd))
    };
    var cs = function(a) {
        return 1 !== a.nodeType ? z.ji("P", {}, a) : a
    };
    var ds = function(a, b, c, d) {
        z.T.call(this, d);
        this.n = b;
        this.d = a;
        this.s = c;
        this.tf = zj(a.u.v()) ? z.V : z.W
    };
    var es = function(a, b) {
        var c = a.tf, d, f, g, h, k, m = a.n.get("updatedBy");
        d = a.n.get(m && m != a.s.id ? Tm : Vm);
        var r;
        r = a.tf;
        r = {
            timeJustNow: r.get(r.g.FM),
            timeMinutesAgo: r.get(r.g.GM),
            timeMinutesAgoPlural: r.get(r.g.HM),
            timeHoursAgo: r.get(r.g.zM),
            timeHoursAgoPlural: r.get(r.g.AM),
            timeDaysAgo: r.get(r.g.xM),
            timeDaysAgoPlural: r.get(r.g.yM),
            timeInMinutes: r.get(r.g.IB),
            timeInMinutesPlural: r.get(r.g.JB),
            timeInHours: r.get(r.g.DM),
            timeInHoursPlural: r.get(r.g.EM),
            timeInDays: r.get(r.g.BM),
            timeInDaysPlural: r.get(r.g.CM)
        };
        a.n.Qe() && (f = a.n.get(en),
        d = f.get(fs.OL) || f.get(fs.Rz) || d);
        (0,
        window.isNaN)(d) ? f = Date.parse(d) : (f = new Date(0),
        f.setUTCSeconds(d));
        d = f;
        a.n.Gb() ? f = Bm : (f = a.d.lb,
        f = (f = f.ha.Ok && f.ha.Ok.VU || null) || zm);
        h = a.d.lb;
        h = h.ha.Ok && h.ha.Ok.fC || "MMM d, yyyy";
        g = a.d.lb;
        k = g.ha.Ok && g.ha.Ok.TT || 20160;
        g = f(d, k, h, null, r);
        b && g !== f(b, k, h, null, r) || (m && m != a.s.id && (g = c.get(c.g.xL) + " " + g),
        a.f().innerHTML = g);
        return d
    };
    var gs = function(a, b, c, d, f) {
        Qr.call(this, a, b, c, d, f);
        this.dE = this.Xn()
    };
    var hs = function(a, b, c, d) {
        bs.call(this, a, b, c, d)
    };
    var is = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-box-wrapper"\x3e\x3ca class\x3d"fyre-user-profile-link fyre-user-loggedin" target\x3d"_blank" role\x3d"button" tabindex\x3d"0"\x3e' + (a.Qa ? "" : '\x3cimg src\x3d"' + z.R(z.S(a.Lc)) + '" class\x3d"fyre-user-avatar-25" alt\x3d"Avatar for ' + z.R(a.da) + '" onerror\x3d"javascript:this.src\x3d\'' + z.R(z.bp(a.cc)) + "';\" /\x3e") + '\x3cspan class\x3d"fyre-user-drop"\x3e' + z.P(a.j.da) + '\x3c/span\x3e\x3c/a\x3e \x3cul class\x3d"fyre-box-list"\x3e\x3cli class\x3d"fyre-logout-link"\x3e\x3ca title\x3d"' + z.R(a.j.signOut) + '"\x3e' + z.P(a.j.signOut) + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e")
    };
    var js = function(a) {
        return (0,
        z.Q)('\x3ca rel\x3d"nofollow" class\x3d"fyre-user-loggedout" aria-label\x3d"' + z.R(a.j.jW) + '" role\x3d"button" tabindex\x3d"0"\x3e\x3c/a\x3e')
    };
    var ks = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-box-wrapper"\x3e\x3ca class\x3d"fyre-user-profile-link fyre-user-loggedin" aria-label\x3d"' + z.R(a.j.rX) + '" role\x3d"button" tabindex\x3d"0"\x3e' + (a.Qa ? "" : '\x3cimg src\x3d"' + z.R(z.S(a.Lc)) + '" class\x3d"fyre-user-avatar-25" alt\x3d"Avatar for ' + z.R(a.da) + '" onerror\x3d"javascript:this.src\x3d\'' + z.R(z.bp(a.cc)) + "';\" /\x3e") + " \x3cspan\x3e" + z.P(a.j.da) + '\x3c/span\x3e\x3cspan class\x3d"fyre-user-drop" aria-label\x3d"' + z.R(a.j.nX) + '" role\x3d"button" tabindex\x3d"0"\x3e\x3c/span\x3e\x3c/a\x3e\x3cul class\x3d"fyre-box-list"\x3e\x3cli class\x3d"fyre-edit-profile-link"\x3e\x3ca title\x3d"' + z.R(a.j.editProfile) + '" aria-label\x3d"' + z.R(a.j.FO) + '" role\x3d"button" tabindex\x3d"0"\x3e' + z.P(a.j.editProfile) + "\x3c/a\x3e\x3c/li\x3e" + (a.Ue ? a.ie ? "" : '\x3cli class\x3d"fyre-admin-link"\x3e\x3ca href\x3d"' + z.R(z.S(a.pN)) + '" title\x3d"' + z.R(a.j.bI) + '" aria-label\x3d"' + z.R(a.j.mW) + '" target\x3d"_blank" role\x3d"button" tabindex\x3d"0"\x3e' + z.P(a.j.bI) + "\x3c/a\x3e\x3c/li\x3e" : "") + (a.Ee && a.ie && a.Ue ? '\x3cli class\x3d"fyre-modq-link"\x3e\x3ca href\x3d"' + z.R(z.S(a.YT)) + '" title\x3d"' + z.R(a.j.EG) + '" aria-label\x3d"' + z.R(a.j.ZT) + '" target\x3d"_blank" role\x3d"button" tabindex\x3d"0"\x3e' + z.P(a.j.EG) + "\x3c/a\x3e\x3c/li\x3e" : "") + '\x3cli class\x3d"fyre-logout-link"\x3e\x3ca title\x3d"' + z.R(a.j.signOut) + '" aria-label\x3d"' + z.R(a.j.kW) + '" role\x3d"button" tabindex\x3d"0"\x3e' + z.P(a.j.signOut) + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e")
    };
    var ls = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-hovercard-fail"\x3eError loading @' + z.P(a.da) + "\x3c/div\x3e")
    };
    var ms = function(a) {
        var b = z.Q
          , c = '\x3cdiv class\x3d"fyre-hovercard-loading"\x3eLoading @' + z.P(a.da) + ' \x3c!--[if IE]\x3e\x3cimg src\x3d"'
          , d = a.Sd;
        null != d && d.Yd === yo ? (d = d.mb(),
        d = String(d).replace(Mo, No)) : d = z.ya(String(d));
        return b(c + d + '/images/hovercard/spinner-slide.gif" alt\x3d"" /\x3e\x3c![endif]--\x3e\x3c!--[if !IE]\x3e\x3c!--\x3e\x3cimg src\x3d"' + z.R(z.S(a.Sd)) + '/images/hovercard/spinner-ball.png" alt\x3d"" /\x3e\x3c!--\x3c![endif]--\x3e\x3c/div\x3e')
    };
    var ns = function(a, b, c, d, f) {
        z.T.call(this);
        this.ax = z.v.Ee;
        this.l = a;
        this.W = b;
        this.bb = d;
        this.Sy = f || !1;
        this.pe = c;
        this.Ex = null
    };
    z.os = function(a, b, c, d, f, g, h, k, m) {
        var r, x;
        if (r = c.offsetParent) {
            var t = "HTML" == r.tagName || "BODY" == r.tagName;
            t && "static" == Al(r) || (x = z.Hl(r),
            t || (t = (t = Il(r)) && z.H ? -r.scrollLeft : !t || z.C && z.B("8") || "visible" == z.zl(r, "overflowX") ? r.scrollLeft : r.scrollWidth - r.clientWidth - r.scrollLeft,
            x = Ni(x, new z.uh(t,r.scrollTop))))
        }
        r = x || new z.uh;
        x = Ol(a);
        (t = Gl(a)) && x.Zw(ul(t));
        var t = z.Dc(a)
          , I = z.Dc(c);
        if (t.la() != I.la()) {
            var t = t.la().body
              , I = I.hb()
              , M = new z.uh(0,0)
              , $ = Mi(z.Fc(t))
              , Xd = t;
            do {
                var ha;
                if ($ == I)
                    ha = z.Hl(Xd);
                else {
                    var ma = Xd;
                    ha = void 0;
                    if (ma.getBoundingClientRect)
                        ha = El(ma),
                        ha = new z.uh(ha.left,ha.top);
                    else {
                        ha = Nh(z.Dc(ma));
                        var ta = z.Hl(ma);
                        ha = new z.uh(ta.x - ha.x,ta.y - ha.y)
                    }
                    ta = void 0;
                    if (z.H && !z.B(12)) {
                        ta = void 0;
                        b: {
                            var ta = ma
                              , Cb = qj("transform");
                            if (void 0 === ta.style[Cb] && (Cb = ql() + pj(Cb),
                            void 0 !== ta.style[Cb])) {
                                ta = rl() + "-transform";
                                break b
                            }
                            ta = "transform"
                        }
                        ta = (ma = z.zl(ma, ta) || z.zl(ma, "transform")) ? (ma = ma.match(ps)) ? new z.uh((0,
                        window.parseFloat)(ma[1]),(0,
                        window.parseFloat)(ma[2])) : new z.uh(0,0) : new z.uh(0,0);
                        ta = new z.uh(ha.x + ta.x,ha.y + ta.y)
                    } else
                        ta = ha;
                    ha = ta
                }
                M.x += ha.x;
                M.y += ha.y
            } while ($ && $ != I && (Xd = $.frameElement) && ($ = $.parent));t = Ni(M, z.Hl(t));
            x.left += t.x;
            x.top += t.y
        }
        a = qs(a, b);
        b = new z.uh(a & 2 ? x.left + x.width : x.left,a & 1 ? x.top + x.height : x.top);
        b = Ni(b, r);
        f && (b.x += (a & 2 ? -1 : 1) * f.x,
        b.y += (a & 1 ? -1 : 1) * f.y);
        var Ca;
        if (h)
            if (m)
                Ca = m;
            else if (Ca = Gl(c))
                Ca.top -= r.y,
                Ca.right -= r.x,
                Ca.bottom -= r.y,
                Ca.left -= r.x;
        return rs(b, c, d, g, Ca, h, k)
    }
    ;
    var rs = function(a, b, c, d, f, g, h) {
        a = a.clone();
        var k = qs(b, c);
        c = z.Ml(b);
        h = h ? h.clone() : c.clone();
        a = a.clone();
        h = h.clone();
        var m = 0;
        if (d || 0 != k)
            k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left),
            k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        g && (f ? (d = a,
        k = h,
        m = 0,
        65 == (g & 65) && (d.x < f.left || d.x >= f.right) && (g &= -2),
        132 == (g & 132) && (d.y < f.top || d.y >= f.bottom) && (g &= -5),
        d.x < f.left && g & 1 && (d.x = f.left,
        m |= 1),
        d.x < f.left && d.x + k.width > f.right && g & 16 && (k.width = Math.max(k.width - (d.x + k.width - f.right), 0),
        m |= 4),
        d.x + k.width > f.right && g & 1 && (d.x = Math.max(f.right - k.width, f.left),
        m |= 1),
        g & 2 && (m = m | (d.x < f.left ? 16 : 0) | (d.x + k.width > f.right ? 32 : 0)),
        d.y < f.top && g & 4 && (d.y = f.top,
        m |= 2),
        d.y <= f.top && d.y + k.height < f.bottom && g & 32 && (k.height = Math.max(k.height - (f.top - d.y), 0),
        d.y = f.top,
        m |= 8),
        d.y >= f.top && d.y + k.height > f.bottom && g & 32 && (k.height = Math.max(k.height - (d.y + k.height - f.bottom), 0),
        m |= 8),
        d.y + k.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - k.height, f.top),
        m |= 2),
        g & 8 && (m = m | (d.y < f.top ? 64 : 0) | (d.y + k.height > f.bottom ? 128 : 0)),
        f = m) : f = 256,
        m = f);
        g = new tl(0,0,0,0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        f = m;
        if (f & 496)
            return f;
        z.Bl(b, new z.uh(g.left,g.top));
        h = g.Tv();
        c == h || c && h && c.width == h.width && c.height == h.height || (c = h,
        g = Oh(z.Dc(z.Fc(b))),
        !z.C || z.B("10") || g && z.B("8") ? (b = b.style,
        z.H ? b.MozBoxSizing = "border-box" : z.J ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box",
        b.width = Math.max(c.width, 0) + "px",
        b.height = Math.max(c.height, 0) + "px") : (h = b.style,
        g ? (g = Wl(b),
        b = Xl(b),
        h.pixelWidth = c.width - b.left - g.left - g.right - b.right,
        h.pixelHeight = c.height - b.top - g.top - g.bottom - b.bottom) : (h.pixelWidth = c.width,
        h.pixelHeight = c.height)));
        return f
    };
    var qs = function(a, b) {
        return (b & 4 && Il(a) ? b ^ 2 : b) & -5
    };
    var ss = function() {};
    z.ts = function(a, b, c) {
        this.element = a;
        this.Fh = b;
        this.UU = c
    }
    ;
    var us = function(a, b, c, d) {
        z.ts.call(this, a, b);
        this.Vr = c ? 5 : 0;
        this.Mx = d || void 0
    };
    var vs = function(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    var ws = function(a, b) {
        this.Uu = a instanceof z.uh ? a : new z.uh(a,b)
    };
    var xs = function(a, b) {
        this.fH = 4;
        this.Rx = b || void 0;
        kq.call(this, a)
    };
    var ys = function(a, b, c, d, f) {
        a.BT = null == b || b instanceof sl ? b : new sl(b,c,d,f);
        a.ka() && a.Fc()
    };
    z.zs = function(a, b, c) {
        this.va = c || (a ? z.Dc(Gh(window.document, a)) : z.Dc());
        xs.call(this, this.va.r("div", {
            style: "position:absolute;display:none;"
        }));
        this.Vm = new z.uh(1,1);
        this.Xa = new z.zd;
        a && this.Td(a);
        null != b && Bi(this.f(), b)
    }
    ;
    var As = function(a, b) {
        Uk(b, "mouseover", a.Ne, !1, a);
        Uk(b, "mouseout", a.qr, !1, a);
        Uk(b, "mousemove", a.hF, !1, a);
        Uk(b, "focus", a.Tg, !1, a);
        Uk(b, "blur", a.qr, !1, a)
    };
    var Bs = function(a, b) {
        var c = Nh(a.va);
        a.Vm.x = b.clientX + c.x;
        a.Vm.y = b.clientY + c.y
    };
    var Cs = function(a, b) {
        try {
            for (; b && !a.Xa.contains(b); )
                b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    var Ds = function(a) {
        if (a.anchor)
            for (var b, c = 0; b = Es[c]; c++)
                z.Vc(b.f(), a.anchor) && (b.NC = a,
                a.bH = b)
    };
    var Fs = function(a) {
        a.ti && (z.s.clearTimeout(a.ti),
        a.ti = void 0)
    };
    var Gs = function(a) {
        2 == a.yf() && (a.Nn = el((0,
        z.q)(a.IT, a, a.anchor), a.Pw))
    };
    var Hs = function(a) {
        a.Nn && (z.s.clearTimeout(a.Nn),
        a.Nn = void 0)
    };
    var Is = function(a, b) {
        ws.call(this, a, b)
    };
    var Js = function(a) {
        z.ts.call(this, a, 3)
    };
    var Ks = function(a, b, c) {
        this.className = Ls;
        this.va = c || (a ? z.Dc(Gh(window.document, a)) : z.Dc());
        a = this.va.la().body;
        this.zg = z.Eh(this.className, a);
        this.zg || (this.zg = mm((0,
        z.Q)('\x3cdiv class\x3d"fyre-hovercard" style\x3d"display: none;"\x3e\x3cdiv class\x3d"fyre-hovercard-body"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-hovercard-arrow"\x3e\x3c/div\x3e\x3c/div\x3e').content),
        z.Mc(a, this.zg.element));
        this.Du = nm(this.zg, Ms);
        xs.call(this, this.zg.element);
        this.Vm = new z.uh(1,1);
        this.pa = new qp(this);
        this.Xa = new z.zd;
        this.tc = !0;
        return this
    };
    var Ns = function(a) {
        this.content = a
    };
    var Os = function(a) {
        a = new Ns(a);
        z.p(void 0) && (a.Yd = void 0);
        if (a.Yd === zo)
            a = po(a.toString());
        else {
            if (a.Yd !== yo)
                throw Error("Sanitized content was not of kind TEXT or HTML.");
            a = qo(a.toString(), a.Sm || null)
        }
        return a
    };
    var Ps = function(a) {
        return a.replace(/&amp;/g, "\x26").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")
    };
    var Qs = function(a, b) {
        z.ea(b) || (b = [b]);
        var c = z.Pa(b, function(a) {
            return z.p(a) ? a : a.W1 + " " + a.duration + "s " + a.timing + " " + a.Fe + "s"
        });
        z.vl(a, "transition", c.join(","))
    };
    var Rs = function(a, b, c, d, f) {
        bl.call(this);
        this.c = a;
        this.EO = b;
        this.US = c;
        this.ZD = d;
        this.ZW = z.ea(f) ? f : [f]
    };
    z.Ss = function(a, b, c) {
        z.T.call(this);
        this.C = c || {};
        this.d = a;
        this.s = b.get(b.k.qc);
        this.n = b;
        this.mc = null;
        this.w = a.u.v();
        c = this.d.H.oX;
        (b = this.w.get(z.U.up) && !gn(b)) && z.wj(this.C[z.Ts]) && (b = this.C[z.Ts]);
        this.Wh = new Ks.D;
        this.Wh.bb = this.d;
        this.Wh.gc(b, c);
        b = this.w.get(z.U.sd);
        this.Wh.pe = b;
        this.hg = z.Qf;
        this.w.on(this.w.jc(this.ea.Pd), (0,
        z.q)(this.Dw, this));
        this.Sp();
        b = bs;
        22 === this.n.get(this.n.k.Zb) && (b = hs);
        this.pq = new b(this.n,this.w,this.va,this.C);
        this.G(this.pq);
        this.Zu = new ds(a,this.n,this.s,this.va);
        this.G(this.Zu)
    }
    ;
    var Us = function(a) {
        return (a = a.n.get(a.n.k.yA)) && -1 !== a.id.indexOf("youtube")
    };
    var Vs = function(a, b) {
        var c = a.p()
          , d = a.o("fyre-comment-head")
          , f = a.o("fyre-comment-premod");
        b ? a.Ch || (a.Ch = new Pr(d,a.n),
        a.G(a.Ch),
        a.Ch.U(f)) : a.Ch && (c.Fa(a.Ch, null, null),
        a.Ch.q(),
        a.removeChild(a.Ch),
        a.Ch = null,
        z.Nc(f))
    };
    var Ws = function(a) {
        var b = a.p()
          , c = a.bg("fyre-mention");
        0 == c.length || z.w(c, function(a) {
            b.e(a, "click", this.uR);
            this.Wh.Td(a, this.vR, this)
        }, a)
    };
    var Xs = function(a, b) {
        var c = a.f().parentNode;
        b ? z.dk(c, "fyre-featured") : z.fk(c, "fyre-featured")
    };
    var Ys = function(a) {
        var b = a.s.get(z.Nd.td);
        z.w(b, function(a) {
            a = a.toLowerCase().replace(/\s+/g, "-");
            z.dk(this.c, "fyre-comment-author-tag-" + a)
        }, a)
    };
    var $s = function(a, b, c) {
        var d = b.k
          , f = ck(a.c);
        b = b.get(d.td);
        z.w(f, function(a) {
            0 === a.indexOf(c) && z.fk(this.c, a)
        }, a);
        z.w(b, function(a) {
            a = a.replace(/\s+/g, "-");
            z.dk(this.c, c + a)
        }, a)
    };
    var at = function(a) {
        var b = a.n.get(a.ea.ef);
        a.mc = new Mr(b,a.d.H.zN);
        a.G(a.mc);
        a.mc.ra(a.o(bt.bk))
    };
    z.ct = function() {
        z.D.call(this)
    }
    ;
    z.dt = function(a, b, c, d, f) {
        a = "/bs3/v3.1";
        f && (a = "/bs3/v3.0");
        (new z.Ee({
            url: z.v.J.hq + a + b,
            ta: c,
            oa: d
        })).send()
    }
    ;
    z.et = function(a, b) {
        z.rf.call(this, a, b)
    }
    ;
    var ft = function(a, b) {
        b = b || {};
        var c = a.collectionSettings;
        if (!c)
            return null;
        var d = a.anchors
          , f = c.config
          , g = a.networkSettings
          , h = a.siteSettings;
        if (!f || !h || !g)
            return null;
        var k = {}
          , m = {};
        z.A(k, g);
        z.A(k, h);
        z.A(k, f);
        f = m[z.U.Ht] = a.headDocument;
        m[z.U.vm] = a.featured || !1;
        m[z.U.mp] = g[z.U.mp] && Vi(h, z.U.mp, !0);
        m.id = c.collectionId;
        m[z.U.ic] = c[z.U.ic];
        m[z.U.zh] = c[z.U.zh];
        m[z.U.xt] = c[z.U.xt];
        m[z.U.sh] = c[z.U.sh];
        m[z.U.zc] = k[z.U.zc];
        m[z.U.wh] = c[z.U.wh] || 0;
        !1 === g[z.U.zc] && (m[z.U.zc] = !1);
        !1 === h[z.U.zc] && (m[z.U.zc] = !1);
        m[z.U.ut] = c[z.U.ut] || [];
        m[z.U.hf] = k[z.U.hf];
        m[z.U.vh] = k[z.U.vh];
        m[z.U.jf] = c[z.U.jf] || f[z.U.jf] || 0;
        m[z.U.RB] = k[z.U.RB];
        m[z.U.xm] = k[z.U.xm];
        m[z.U.wm] = z.wj(b.Oq) ? b.Oq : k[z.U.wm];
        m[z.U.xh] = k[z.U.xh];
        m[z.U.tp] = m[z.U.Ht].isComplete;
        m[z.U.kk] = !1;
        m[z.U.up] = z.wj(b.ID) ? b.ID : k[z.U.up];
        m[z.U.yp] = z.wj(b.RD) ? b.RD ? 1 : 2 : k[z.U.yp];
        m[z.U.zp] = z.wj(b.JD) ? b.JD : k[z.U.zp];
        m[z.U.PA] = k[z.U.PA];
        m[z.U.Ji] = b.dU || k[z.U.Ji];
        m[z.U.td] = c.tags || [];
        m[z.U.ab] = c.title;
        m[z.U.URL] = c.url;
        m[z.U.Kc] = c[z.U.Kc] || f[z.U.Kc] || 0;
        d && (m[z.U.Kc] = Math.max(m[z.U.Kc] - d[z.U.Kc] || 0, 0));
        m[z.U.WA] = c.data || 0;
        m[z.U.Bm] = k[z.U.Bm];
        m[z.U.Uf] = k.rawHtml;
        m[z.U.Pd] = z.wj(b.hy) ? b.hy : k[z.U.Pd];
        m[z.U.sd] = k[z.U.sd] || 1;
        m[z.U.qk] = z.wj(k[z.U.qk]) ? k[z.U.qk] : !1;
        m[z.U.Ni] = 1;
        m[z.U.gp] = c[z.U.gp] || 0;
        m[z.U.Np] = k[z.U.Np] || null;
        m[z.U.Yt] = k[z.U.Yt];
        d = k[z.U.nk];
        null != d && (m[z.U.nk] = d);
        switch (m[z.U.sd]) {
        case 1:
            m[z.U.kk] = z.wj(b.KD) ? b.KD : k[z.U.kk];
            m[z.U.It] = k[z.U.It];
            m[z.U.Ni] = z.oh(b.AI) ? b.AI : k[z.U.Ni];
            break;
        case 2:
            m[z.U.qk] = !1;
            break;
        case 4:
            m[z.U.Pd] = m[z.U.Yt],
            m[z.U.vh] = 0
        }
        k = z.U.df;
        4 === m[z.U.sd] ? c = {
            Ff: 0,
            ps: z.v.Fu(m[z.U.ic], c.articleId),
            Jj: null
        } : c.archiveInfo ? (c = c.archiveInfo,
        c = {
            Ff: c.nPages,
            ps: c.pathBase,
            Jj: z.aj(c.pageInfo, gt)
        }) : c = ht(c.data);
        m[k] = c;
        return m
    };
    var ht = function(a) {
        var b = {
            Ff: a.length,
            Jj: {}
        };
        z.w(a, function(a, d) {
            b.Jj[d] = gt(a);
            b.Jj[d].KS = d
        });
        return b
    };
    var gt = function(a) {
        return {
            first: a.first,
            jT: a.last,
            url: a.url,
            KS: a.idx
        }
    };
    var it = function(a, b) {
        return (0,
        window.parseFloat)(((0,
        window.parseFloat)(b + b / a) - (a - b)).toFixed(3))
    };
    var jt = function(a) {
        a = a.data;
        return {
            fb: a.authors,
            zW: z.aj(a.content, function(a) {
                return {
                    content: a
                }
            })
        }
    };
    var kt = function(a) {
        var b = {}
          , c = a.content;
        b.id = c.id;
        b.source = a.source;
        b.type = a.type;
        b.event = a.event;
        b.Zj = a.vis;
        b.co = a.lastVis;
        b.He = a.erefs;
        b.rD = a.descendents;
        b.Ic = c.transport;
        b.content = c;
        b.content.ancestorId || (b.content.ancestorId = b.id);
        return b
    };
    var lt = function(a) {
        var b = z.Nd;
        z.$h(a[b.vb]) && delete a[b.vb];
        return a
    };
    z.mt = function(a, b) {
        var c = {
            He: {},
            content: {}
        };
        z.w(b.content || [], z.pa(nt, a, c));
        c.vc = b.followers || [];
        c.fb = z.aj(b.authors || {}, lt);
        c.Qs = b.reviewers || [];
        b.numPages && (c.kU = b.numPages);
        return c
    }
    ;
    var nt = function(a, b, c) {
        c.Ri = ot(c);
        if (!("blockId"in (c.Ri.annotation || {}))) {
            pt(c);
            var d = kt(c);
            d.Gd = a;
            d.Ic = 1;
            (d.He ? b.He : b.content)[d.content.id] = d;
            z.w(c.childContent || [], z.pa(nt, a, b))
        }
    };
    var pt = function(a) {
        var b = a.content.attachments || [];
        if (b.length && "instagram" === b[0].provider_name) {
            var c = {};
            a.content.attachments = z.Oa(b, function(a) {
                a = a.type;
                return "video" === a && c[a] ? !1 : c[a] = !0
            })
        }
    };
    var qt = function(a) {
        z.y(a, function(a) {
            a.type = 4
        })
    };
    var ot = function(a) {
        a = a.content.annotations || {};
        var b = a.vote || []
          , c = z.nj(b, function(a, b) {
            return a + (1 == rt[b.value] ? 1 : 0)
        }, 0);
        a.helpfulness = it(b.length, c);
        return a
    };
    var st = function(a, b) {
        z.Le.call(this, a, b)
    };
    var tt = function(a, b) {
        var c = a.ub.w;
        c.set(z.U.wh, c.get(z.U.wh) + b)
    };
    var ut = function(a) {
        z.qf.call(this, a)
    };
    var vt = function() {
        this.aD = new z.Ab(window.document)
    };
    z.wt = function() {
        z.D.call(this)
    }
    ;
    var xt = function(a) {
        var b = {}
          , c = vt.D();
        b.body = a.Ck;
        a.hi && (b.parent_id = a.hi);
        if (b.body.length > ("jsonp" == z.Ge ? 1500 : 8E3))
            throw new yt;
        a.Dh.length && (b.attachments = z.cd(a.Dh));
        c.isSupported() && (b._bi = c.get());
        return b
    };
    var zt = function(a) {
        var b = xt(a);
        b.title = a.title;
        a.Bb && (b.rating = JSON.stringify(a.Bb));
        return b
    };
    var At = function(a, b, c, d, f, g) {
        b = {
            archive: b.archive,
            message_id: b.Sa,
            collection_id: b.Aa,
            site_id: b.af
        };
        a.Dc(c, d, f, g).send(b)
    };
    z.Bt = function(a, b) {
        z.rf.call(this, a, b);
        this.ha = b;
        this.w = new z.xj;
        this.w.on(this.w.jc(this.w.k.Kc), function() {
            this.L.T.O("commentCountUpdated", this.w.get(this.w.k.Kc))
        }, this);
        this.QV = new z.zd;
        this.wc = new ut;
        this.Vd = new ut;
        this.dg = new (b.dg || st)(b,this);
        this.Kg = new z.gc;
        this.Xy = new z.zd
    }
    ;
    var Ct = function(a, b) {
        var c = z.sg.get("fyre_follow_" + a.w.id + b);
        return c ? "follow" === c : null
    };
    var Dt = function(a, b) {
        var c = -1 < window.location.href.indexOf("fyreForceUpdate")
          , d = b[z.U.sh]
          , d = a.ha && a.ha.Ek && a.ha.Ek !== d
          , f = 1 === Math.round(10 * Math.random()) % 9;
        return c ? !0 : d && !a.ha.vD && f
    };
    z.Et = function(a) {
        a.Ke(void 0, z.q(a.dD, a, z.n, z.n))
    }
    ;
    var Ft = function(a) {
        z.Fd.call(this, a)
    };
    z.Gt = function(a, b) {
        z.rf.call(this, a, b);
        z.v.doNotTrack.lo && z.Ze.D().remove("hasPostedReview")
    }
    ;
    var Ht = function(a, b) {
        var c = {}
          , d = z.It;
        b instanceof z.yn && (d = z.O,
        c.title = b.get(d.ab),
        c.Bb = b.get(d.wb));
        var f = a.d.u.v().id || b.get(d.Nd).id
          , g = b.get(d.Jc)
          , h = b.get(d.Uf);
        c.Aa = f;
        c.Ck = xi(g) ? g : "";
        c.hi = b.get(d.Ki);
        b.get(d.X) && (c.Sa = b.get(d.X));
        var d = b.get(d.ef)
          , k = Oj
          , f = d.filter(function(a) {
            return "LivefyreRawHTML" === a.get(k.rd)
        });
        h && (f.length ? (f[0].set(k.Ii, h),
        f[0].wg(k.rk)) : (f = new Nj,
        f.set(k.ua, "rich"),
        f.set(k.rd, "LivefyreRawHTML"),
        f.set(k.Ii, h),
        d.add(f)));
        c.Dh = z.Oa(d.toJSON(), function(a) {
            return "Scraper" !== a.strategy
        });
        return c
    };
    var Jt = function(a, b, c, d, f) {
        var g = b.get(b.k.qd);
        if (g === z.F.id)
            throw "liked_own_comment";
        var h = {
            Sa: b.id,
            Aa: a.d.u.v().id
        }
          , k = z.wt.D()
          , m = c ? "like" : "unlike";
        c && a.d.O("quill_like_recv", {
            Vj: b.id,
            mz: g
        });
        k.rx(h, z.Jh(), m, d, f)
    };
    var Kt = function(a) {
        a = z.ea(a) ? a.join(" ") : a;
        a = fi(a);
        a = a.replace(/http:\/\/[\S]+/g, "");
        this.text = mi(a);
        this.bJ = this.text.split(" ")
    };
    var Lt = function(a) {
        this.As = a;
        z.D.call(this)
    };
    var Mt = function(a) {
        this.yg = 0;
        this.Ca = null;
        this.ug = [];
        this.SS = 1E3 * (new Date).getTime();
        this.Fd = z.Cd("fyre.conv.manager.DecayFilter");
        Lt.call(this, a)
    };
    z.Nt = function(a) {
        this.k = Ot;
        z.Fd.call(this, a);
        this.Ga = Pt
    }
    ;
    z.Qt = function(a, b, c) {
        b = a.xv(b);
        c || z.A(a.get("content") || {}, b);
        a.O("contentUpdated", b, c)
    }
    ;
    z.Rt = function(a) {
        z.D.call(this);
        this.d = a;
        this.Xc = {};
        this.os = {};
        this.wz = {};
        this.oc = {};
        this.Vk = {};
        this.rv = {};
        this.Hd = {};
        this.no = {};
        z.Mh(z.F, z.F.k.gk, this.MV, this);
        this.Hk = null;
        this.w = a.u.v();
        this.w.on(this.w.jc(z.U.X), this.YV, this);
        a = (0,
        z.q)(this.mH, this);
        this.Hk = new Lt(a)
    }
    ;
    z.St = function(a, b, c) {
        if (b = a.Hd[b])
            z.ea(b) || (b = [b]),
            z.w(b, c, a)
    }
    ;
    var Tt = function(a) {
        return a.content && a.content.annotations && (a = a.content.annotations.annotation) && a.blockId ? !0 : !1
    };
    z.Ut = function(a, b) {
        var c = a.os[b.id] || {}
          , d = a.wz[b.id];
        d && a.Xc[a.pb] && z.w(d, function(a) {
            var b = this.Xc[this.pb][a];
            b && (c[a] = b)
        }, a);
        if (z.cb(c))
            return {};
        z.y(c, function(a, c) {
            c.Gd = this.oc[a] = b.Gd
        }, a);
        delete a.os[b.id];
        return c
    }
    ;
    z.Vt = function(a, b) {
        var c = [], d, f = {}, g = z.F.get(z.F.k.gk);
        z.y(b, function(a, b) {
            d || (d = a.event);
            null == a.Gd && (a.Gd = this.pb);
            var m;
            a: {
                m = a.He || a.erefs;
                for (var r, x = 0, t = m.length; x < t; x++) {
                    r = m[x];
                    b: {
                        for (var I = g, M = void 0, $ = 0, Xd = I.length; $ < Xd; $++) {
                            var ha = r
                              , M = new ai
                              , ma = z.sb(I[$])
                              , ta = void 0
                              , ta = void 0;
                            if (z.rg)
                                ta = z.s.atob(ha);
                            else {
                                z.vb();
                                for (var ta = z.yb, Cb = [], Ca = 0; Ca < ha.length; ) {
                                    var wd = ta[ha.charAt(Ca++)]
                                      , Nf = Ca < ha.length ? ta[ha.charAt(Ca)] : 0;
                                    ++Ca;
                                    var Oi = Ca < ha.length ? ta[ha.charAt(Ca)] : 64;
                                    ++Ca;
                                    var Zs = Ca < ha.length ? ta[ha.charAt(Ca)] : 64;
                                    ++Ca;
                                    if (null == wd || null == Nf || null == Oi || null == Zs)
                                        throw Error();
                                    Cb.push(wd << 2 | Nf >> 4);
                                    64 != Oi && (Cb.push(Nf << 4 & 240 | Oi >> 2),
                                    64 != Zs && Cb.push(Oi << 6 & 192 | Zs))
                                }
                                ta = Wh(Cb)
                            }
                            ta = z.sb(ta);
                            M.setKey(ma);
                            ha = ta;
                            ma = void 0;
                            ma = ha.length;
                            Cb = M.Uw;
                            Ca = M.Vw;
                            wd = M.F;
                            for (Nf = 0; Nf < ma; ++Nf)
                                Cb = Cb + 1 & 255,
                                Ca = Ca + wd[Cb] & 255,
                                Oi = wd[Cb],
                                wd[Cb] = wd[Ca],
                                wd[Ca] = Oi,
                                ha[Nf] ^= wd[wd[Cb] + wd[Ca] & 255];
                            M.Uw = Cb;
                            M.Vw = Ca;
                            if (M = (M = Wh(ta).match(Wt)) ? M[1] : null) {
                                r = M;
                                break b
                            }
                        }
                        r = void 0
                    }
                    if (r) {
                        m = r;
                        break a
                    }
                }
                m = void 0
            }
            m ? (this.Vk[b] = a,
            this.oc[b] = a.Gd,
            c.push(m)) : (z.Ui(f, a.Gd, {}),
            f[b] = a,
            this.rv[b] = a)
        }, a);
        c.length && Xt(a, c, d);
        z.y(f, a.OQ, a)
    }
    ;
    var Xt = function(a, b, c) {
        var d = b.length, f = (0,
        z.q)(a.MQ, a), g;
        do {
            g = Zh(b, 0, 20);
            z.ct.D();
            var h = a.d.u.v().id
              , k = z.v.J.ud + z.v.cf
              , k = k + ("collection/" + h + "/erefs/?cb\x3d" + c);
            (new z.Ee({
                url: k,
                ta: f,
                oa: void 0
            })).send({
                ref: g
            })
        } while (0 < (d -= 20))
    };
    var Yt = function(a, b) {
        a.Hd[b] = a.Hd[b] || new z.Nt;
        return a.Hd[b]
    };
    var Zt = function(a, b) {
        var c = b.get(b.k.df)
          , d = c.Jj[a];
        return d && d.url ? d.url : c.ps + a + ".json"
    };
    z.$t = function(a) {
        this.vu = {};
        this.jo = {};
        a.T.subscribe("stream_data_received", this.Uh, this);
        a.T.subscribe("quill_message_received", this.rr, this);
        z.Rt.call(this, a)
    }
    ;
    var au = function(a, b) {
        z.y(b, function(a, b) {
            4 === a.type && (z.Ui(this.vu, b, []),
            this.vu[b].push(a))
        }, a)
    };
    var bu = function(a, b) {
        z.y(b, function(a) {
            if (1 === a.type) {
                var b = a.content.targetId;
                z.Ui(this.jo, b, []);
                this.jo[b].push(a)
            }
        }, a)
    };
    var cu = function(a, b, c) {
        a = a.d.u.v();
        a = a.get(a.k.df);
        return 0 > c || c >= a.Ff || b.IG >= b.FT || b.Fx >= b.lI || b.Fx >= Math.max(b.ST, .8 * b.lI) ? !0 : !1
    };
    var du = function(a, b, c, d) {
        var f = c.k
          , g = a.Xc[b];
        a.d.u.v();
        var h = c.get(f.Gp) || c.get(f.bd);
        return a.no[b] && g ? $i(g, function(a) {
            var b = (a.content.annotations || {}).sortOrder || a.content.createdAt;
            return d ? b > h && !a.content.parentId : h > b
        }) : !0
    };
    var eu = function(a) {
        z.Rt.call(this, a);
        a.T.subscribe("stream_data_received", this.Uh, this)
    };
    var fu = function(a) {
        var b = a.vM
          , c = Yt(a, b);
        a.Hd[b] = c;
        var d = a.d.u.v()
          , d = Zt(a.gJ, d);
        z.dt(z.ct.D(), d, function(d) {
            a.La || (d = z.mt(b, d),
            gu(a, d, b, c))
        }, z.n);
        return c
    };
    var gu = function(a, b, c, d) {
        z.y(b.fb, (0,
        z.q)(a.d.T.O, a.d.T, "bootstrap_author_received"));
        z.A(a.oc, z.aj(b.content, z.Gb(c)));
        a.Rd(c, b.content);
        d.O(d.Ga.ok, {});
        d.set(d.k.kf, !0)
    };
    z.hu = function(a, b) {
        z.Rt.call(this, a);
        a.T.subscribe("stream_data_received", this.Uh, this);
        a.T.subscribe("quill_message_received", this.rr, this);
        this.jz = a.Lb.Jb;
        this.hT = b || !1
    }
    ;
    z.iu = function(a, b, c, d) {
        var f = a.pb;
        z.Ui(a.Hd, f, []);
        a.Hd[f].push(d);
        a = (0,
        z.q)(a.GW, a, f);
        d = (0,
        z.q)(d.O, d, d.Ga.Dm);
        b(c, a, d)
    }
    ;
    var ju = function(a, b, c) {
        ku(a, b, c);
        a.en(b)
    };
    var ku = function(a, b, c) {
        z.y(b, function(a, f) {
            var g;
            g = this.jz;
            var h = g.oc[f];
            g = h ? g.Xc[h][f] : void 0;
            g = g || a;
            g.Gd = c;
            g.Ic = a.Ic;
            a.content.annotations && z.A(g.content.annotations, a.content.annotations);
            b[f] = g
        }, a)
    };
    z.lu = function(a, b) {
        z.rf.call(this, a, b);
        this.Jb = null
    }
    ;
    z.mu = function(a, b) {
        return a.al("new" == b ? a.Jb.pb : 0)
    }
    ;
    z.nu = function(a) {
        a.zi && a.zi.q();
        a.zi = null
    }
    ;
    z.ou = function(a, b) {
        z.lu.call(this, a, b);
        this.Jb = new z.$t(a)
    }
    ;
    var pu = function(a) {
        z.D.call(this);
        a = a || {};
        this.uid = a.uid || null;
        this.Aa = a.Aa || null;
        this.ta = a.ta || z.n;
        this.oa = a.oa || z.n;
        this.Nf = !1;
        this.dn = {}
    };
    var qu = function(a) {
        this.k = ru;
        z.Fd.call(this, a)
    };
    var su = function() {
        var a = z.sg.get(z.v.Pt);
        null != a || z.v.doNotTrack.gq || (a = new String(Math.floor(Math.random() * Math.pow(10, 12))),
        z.sg.set(z.v.Pt, a));
        return a
    };
    z.tu = function(a) {
        z.rf.call(this, a);
        this.Pc = null;
        this.Xr = 0;
        this.xa = new qu;
        z.Mh(z.F, z.F.k.X, this.Fo, this)
    }
    ;
    z.uu = function(a) {
        z.rf.call(this, a);
        this.eJ = new z.Ee({
            url: [z.v.J.AW, "stats"].join("/"),
            method: "POST",
            with_credentials: !1
        });
        this.Es = [];
        this.zb = z.s.setInterval((0,
        z.q)(this.yy, this), 5E3)
    }
    ;
    var vu = function(a) {
        return z.Oa(a, function(a) {
            return a.rate ? Math.random() < a.rate : !0
        })
    };
    var wu = function(a) {
        var b = {}
          , c = z.Oa(a, function(a) {
            if ("counter" !== a.type)
                return !0;
            a.metric in b ? b[a.metric].value += a.value : b[a.metric] = a;
            return !1
        });
        z.y(b, function(a) {
            c.push(a)
        });
        return c
    };
    var xu = function(a) {
        z.Ee.call(this, a);
        this.loop = z.wj(a.loop) ? a.loop : !0;
        this.Fe = a.Fe || 0;
        this.data = a.data || null;
        this.Qp = this.Nj = !1
    };
    var yu = function(a, b) {
        z.D.call(this);
        this.mX = !!a;
        this.mD = b || 50;
        this.ca = new xu({
            url: z.v.J.stream,
            data: {},
            ta: (0,
            z.q)(this.ta, this),
            oa: (0,
            z.q)(this.oa, this),
            loop: !0,
            timeout: 65,
            Fe: this.mD
        });
        delete this.ca.Xp["X-DNT"];
        this.bt = function() {}
        ;
        this.Nq = function() {}
        ;
        this.Nf = !1;
        this.Pg = this.ft = 0;
        this.ij = [];
        this.Fd = z.Cd("fyre.v1.client.StreamClient");
        this.Po = null;
        this.dn = {}
    };
    var zu = function(a) {
        z.v.hh && z.Sd(a.ca.url, "https:");
        var b = a.Po.$q();
        b && (z.Ud(a.ca.url, b.split(":")[0]),
        b = "/v3.1",
        a.mX && (b = "/v3.0"),
        z.Wd(a.ca.url, b + "/collection/" + a.Aa + "/" + a.Qg + "/"),
        b = z.je(a.dn),
        z.Yd(a.ca.url, b),
        a.Fd.info("sending event ID: ", a.Qg))
    };
    var Au = function(a, b) {
        a.ca.Fe = Math.min(a.ca.Fe * b, 9E4)
    };
    var Bu = function(a, b, c, d) {
        a = oi(z.v.protocol + a + "/servers/").toString();
        c = new z.Ee({
            url: a,
            ta: c,
            oa: d
        });
        delete c.Xp["X-DNT"];
        c.send(b)
    };
    var Cu = function(a, b) {
        this.yo = 160;
        this.zo = {};
        this.keys = [];
        this.lg = [];
        b = b || {};
        b.yo && (this.yo = b.yo);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.lg.push(d);
            for (var f = 0; f < this.yo; f++) {
                var g = this.crypto(d + ":" + f);
                this.keys.push(g);
                this.zo[g] = d
            }
            this.keys.sort()
        }
    };
    var Du = function(a, b) {
        if (0 == z.ab(a.zo).length)
            return 0;
        var c;
        a: {
            c = a.crypto(b);
            var d = z.ab(a.zo).length
              , f = d - 1
              , g = 0
              , h = 0
              , k = 0;
            if (0 == f)
                c = 0;
            else {
                for (; g <= f; ) {
                    h = Math.floor((g + f) / 2);
                    k = a.compare(a.keys[h], c);
                    if (0 == k) {
                        c = h;
                        break a
                    }
                    0 < k ? f = h - 1 : g = h + 1
                }
                0 > f && (f = d - 1);
                c = f
            }
        }
        return a.zo[a.keys[c]]
    };
    var Eu = function() {
        this.ay = 0
    };
    var Fu = function(a, b) {
        this.hash = a;
        this.Br = b;
        this.Pg = this.ay = 0
    };
    var Gu = function(a, b) {
        Hu(a.id, b)
    };
    var Hu = function(a, b) {
        var c = {
            domain: z.v.J.domain,
            collectionId: a
        }
          , d = Iu.$q();
        Bu(d, c, function(c) {
            var d = a
              , h = c.servers;
            h && 0 != h.length ? (c.distribute && (d = su() + d),
            c = new Cu(h),
            b(new Fu(c,d))) : b(Iu)
        }, function() {
            b(Iu)
        })
    };
    z.Ju = function(a) {
        z.rf.call(this, a);
        a = a.H;
        z.Cd("StreamService");
        this.Pc = new yu(a.zz,(a.stream || {}).Fe);
        this.vv = !1;
        this.ox = 0;
        z.Mh(z.F, z.F.k.X, this.Fo, this)
    }
    ;
    var Ku = function(a) {
        this.d = a
    };
    var Lu = function(a) {
        var b = a.H || {};
        this.bb = a;
        this.WH = b.VH;
        this.ss = new z.zd
    };
    z.Mu = function(a, b) {
        z.rf.call(this, a, b || {})
    }
    ;
    var Nu = function(a, b, c) {
        function d(a) {
            a = a.data.url;
            g.set("shareLink", a, {
                mn: !0
            });
            b.set(f.URL, a, {
                mn: !0
            })
        }
        var f = qn
          , g = b.get(f.ff)
          , h = g.get("shareLink");
        h ? (d({
            data: {
                url: h
            }
        }),
        c && c()) : (h = g.get(Um),
        a.L.lb.ar(h, z.Hb(d, c || z.n), z.n))
    };
    z.Ou = function(a) {
        z.T.call(this);
        this.l = a;
        this.EW = this.dr()
    }
    ;
    var Pu = function() {
        z.T.call(this)
    };
    var Qu = function(a) {
        a.c.className = "fyre-editor"
    };
    var Ru = function(a, b, c, d) {
        this.Vd = a || [];
        this.VW = b || "";
        this.HT = c || 4;
        z.T.call(this, d)
    };
    var Su = function(a, b) {
        b && (a.Vd = b);
        for (var c = a.Vd.reverse(), d = window.document.createDocumentFragment(), f, g = Math.min(a.HT, c.length), h = 0; h < g; ++h) {
            f = c[h];
            var k = z.Nd;
            f = {
                Gg: f.id,
                Ba: f.get(k.Yb),
                da: f.get(k.za),
                Lc: f.get(k.vb),
                cc: f.get(k.fk)
            };
            f = z.xo(hp, f);
            d.appendChild(f)
        }
        a.va.Jf(a.c);
        a.c.appendChild(d)
    };
    z.Tu = function(a, b) {
        z.T.call(this, b);
        this.Lf(a.xa);
        this.Ej = a.bs;
        this.CN = a.aq;
        this.Ar = !1;
        this.ZS = a.YS;
        this.Wd = null;
        if (!a.Qa) {
            var c = this.qn();
            this.Wd = new Ru(c,"fyre-comment-like-imgs");
            this.G(this.Wd, !1)
        }
    }
    ;
    var Uu = function(a, b) {
        var c = {};
        c[Vu] = a.H.readOnly;
        z.Ss.call(this, a, b, c);
        this.IV = "fyre-editorstate-" + this.n.id;
        this.collapsed = !1;
        this.w.on(this.w.jc(this.ea.Pd), (0,
        z.q)(this.Dw, this));
        this.FC();
        this.Ua = null
    };
    var Wu = function(a, b, c) {
        var d = a.n.get(a.ea.nK);
        if (b = d && d.get(b))
            return b;
        a = a.n.get(a.ea.ef);
        if (a.length)
            return a.Bk(0).get(c)
    };
    var Xu = function(a) {
        a.Ua || (a.Ua = new z.Ou(a.n),
        a.kd ? z.Ap(a.Ua, a.kd.f()) : a.Ua.ra(a.ln),
        a.p().e(a.Ua, "replyCommentClicked", a.nF))
    };
    var Yu = function(a) {
        a.Ua && (a.p().Fa(a.Ua, null, null),
        a.Ua.q(),
        a.Ua = null)
    };
    var Zu = function(a) {
        a.kd || (a.kd = new Pu,
        a.G(a.kd),
        a.kd.ra(a.ln))
    };
    var $u = function(a, b) {
        var c = bt;
        z.w(a.Iq, function(a) {
            (a = this.o(a)) && lk(a, c.Hi)
        }, a);
        b ? a.kd.yb() : a.kd.show()
    };
    var av = function(a) {
        a.sf.q();
        a.sf = null
    };
    z.bv = function(a) {
        var b = bt
          , c = a.d.u.v()
          , d = a.o(b.uh)
          , b = z.cv.D()
          , f = a.p()
          , g = {
            L: a.d,
            li: "reply"
        }
          , h = !mn(a.n) || !z.nn(a.n);
        g.OT = dv(a);
        g.hi = a.n.get(a.ea.X);
        a.sf && av(a);
        Qu(a.kd);
        if (a.Ec && z.Ql(d))
            ev(a);
        else {
            var k = (0,
            z.q)(function() {
                this.qG(this.Ec);
                this.Ec.ag(!0);
                this.Ec.Eo(h);
                f.Ed(this.Ec, "fyre.v2.editor.EVENTS.HIDE", this.bR);
                this.dispatchEvent("open_reply_editor")
            }, a);
            z.N(d, !0);
            if (a.Ec)
                k();
            else {
                var m = (0,
                z.q)(function(a) {
                    this.Ec = a;
                    f.Ed(this.Ec, "fyre.v2.editor.EVENTS.LOAD", k);
                    this.G(this.Ec);
                    this.Ec.U(d, !0);
                    this.Ec.Eo(h)
                }, a);
                g.ia = (0,
                z.q)(a.hO, a);
                z.fv(b, "main", m, g, c, !1)
            }
        }
    }
    ;
    var ev = function(a) {
        var b = a.o(bt.uh);
        z.N(b, !1);
        a.removeChild(a.Ec);
        a.Ec.q();
        a.Ec = null
    };
    var dv = function(a) {
        var b = a.s.fm()
          , c = [];
        a.s.id === z.F.id || a.s.Qe() || c.push(b);
        z.w(jn(a.n), function(a) {
            a.id !== b.id && c.push(a)
        });
        return c
    };
    var gv = function(a, b) {
        function c() {
            h.mc && h.mc.q();
            d && at(h)
        }
        var d = 2 !== a.w.get(z.U.yp), f, g, h = a;
        b.length ? a.mc ? (f = a.mc.l,
        f.length !== b.length ? c() : (g = z.cd(f.jb[0].toJSON()),
        f = z.cd(b.jb[0].toJSON()),
        g !== f && c())) : c() : a.mc && a.mc.q()
    };
    var hv = function(a, b) {
        this.Za = a || 0;
        this.he = !1;
        z.T.call(this, b)
    };
    var iv = function(a, b) {
        b && (a.Za = b);
        a.JV.innerHTML = a.Qv();
        a.GV.innerHTML = b
    };
    var jv = function(a) {
        hv.call(this, a)
    };
    var kv = function(a) {
        hv.call(this, a);
        this.he = !0
    };
    var lv = function(a, b, c, d) {
        z.T.call(this, d);
        this.oe = a;
        this.nh = 0;
        this.state = mv;
        this.he = !0 === b;
        this.iT = !0 === c;
        this.Cq = this.rf = this.Vi = null
    };
    var nv = function(a) {
        return a.iT ? a.he ? 0 < a.oe || 0 < a.nh : 0 < a.oe : !1
    };
    var ov = function(a, b) {
        a.oe = b;
        a.c && (0 === a.oe ? (pv(a),
        z.fk(a.c, "fyre-divider-active"),
        z.N(a.Vi, !1)) : (nv(a) && (z.N(a.Vi, !0),
        z.dk(a.c, "fyre-divider-active")),
        a.rf && iv(a.rf, a.oe)))
    };
    var qv = function(a) {
        z.fk(a.c, "fyre-comment-expand", "fyre-divider-active");
        nv(a) && z.dk(a.c, "fyre-comment-collapse");
        a.oe += a.nh;
        a.nh = 0;
        pv(a)
    };
    var rv = function(a, b) {
        var c;
        b ? (a.rf = new kv(a.nh),
        c = a.xI) : (a.rf = new jv(a.oe),
        c = a.qz);
        a.G(a.rf);
        z.Ap(a.rf, a.Og);
        a.Cq = new qp(a);
        a.Cq.e(a.rf, "dividerCounterClicked", z.pa(a.tQ, c))
    };
    var pv = function(a) {
        a.rf && a.c && (z.fk(a.c, "fyre-comment-divider-force"),
        a.Cq.q(),
        a.Cq = null,
        a.removeChild(a.rf),
        a.rf.q(),
        a.rf = null)
    };
    var sv = function(a, b) {
        z.T.call(this);
        this.L = this.d = a;
        this.l = b;
        this.ea = this.l.k;
        this.Jd = [];
        this.$c = 0;
        this.l.bind("change", this.gl, this);
        this.w = this.L.u.v();
        this.xj = !0;
        this.Sl = null
    };
    var tv = function(a) {
        var b = a.L.u.fb().get(a.l.get(a.ea.qd))
          , c = a.l.get(a.ea.Jc);
        if (!b || !c)
            return !1;
        b = z.F.id === b.id;
        switch (a.l.get(a.ea.Kb)) {
        case 0:
            return !1;
        case 1:
            return !0;
        case 2:
            return b;
        case 3:
            return z.F.eb() || b;
        default:
            return !1
        }
    };
    var uv = function(a) {
        return a.$c + (a.Pa ? 1 : 0)
    };
    var vv = function(a) {
        var b = a.l.get("level") < a.w.get(z.U.Ji);
        kk(a.ng, "fyre-comment-replies-indent", b)
    };
    z.wv = function(a) {
        for (var b; b = a.previousElementSibling; )
            if ("none" === b.style.display)
                a = b;
            else
                return b;
        return a.parentNode || null
    }
    ;
    var xv = function(a, b) {
        sv.call(this, a, b);
        this.yS = !!this.l.get(z.Rm);
        this.he = a.u.v().get(z.U.kk);
        this.Db = null;
        this.ea = z.It;
        this.Vo = z.X;
        this.Bz = Uu;
        this.og = null
    };
    var yv = function(a) {
        return (0,
        z.Q)("\x3cspan\x3e" + z.P(a.j.gO) + "\x3c/span\x3e")
    };
    z.zv = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-content-loading"\x3e' + z.P(a.j.Qo) + "\x3c/div\x3e")
    }
    ;
    z.Av = function(a) {
        var b = z.Q;
        a = a.ev ? (0,
        z.Q)('\x3cdiv class\x3d"fyre-stream-more"\x3e\x3cdiv class\x3d"fyre-stream-more-container"\x3e\x3cdiv class\x3d"fyre-text"\x3e' + z.P(a.j.Qy) + "\x3c/div\x3e" + (0,
        z.Q)('\x3cdiv class\x3d"fyre-spinner"\x3e\x3cimg src\x3d"' + z.R(z.S(a.Sd)) + '/images/snake-loader.gif" alt\x3d"" /\x3e\x3c/div\x3e') + "\x3c/div\x3e\x3c/div\x3e") : "";
        return b('\x3cdiv class\x3d"fyre-stream-content"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-content-not-found"\x3e\x3c/div\x3e' + a)
    }
    ;
    var Bv = function(a) {
        return (0,
        z.Q)(z.zv(a) + '\x3cdiv class\x3d"fyre-stream-content"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-stream-content-not-found"\x3e\x3c/div\x3e')
    };
    var Cv = function(a) {
        return (0,
        z.Q)("\x3cdiv\x3e\x3cdiv\x3e" + z.P(a.j.qO) + '\x3c/div\x3e\x3ca class\x3d"fyre-stream-refresh"\x3e' + z.P(a.j.vV) + "\x3c/a\x3e\x3cdiv\x3e")
    };
    var Dv = function(a) {
        var b = '\x3cem class\x3d"fyre-stream-livecount"\x3e';
        if (!a.Xs)
            switch (a.Dl) {
            case 1:
                b += z.P(a.j.eh);
                break;
            default:
                b += z.P(a.j.lc)
            }
        b += (a.Xs ? z.P(a.Dl) + '\x3cspan class\x3d"fyre-stream-livecount-icon"\x3e\x3c/span\x3e' : "") + "\x3c/em\x3e";
        return (0,
        z.Q)(b)
    };
    var Ev = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-velocity"\x3e\x3ca class\x3d"fyre-velocity-next"\x3e\x3cspan class\x3d"fyre-velocity-count"\x3e' + z.P(a.count) + '\x3c/span\x3e\x3cspan class\x3d"fyre-velocity-text"\x3e' + z.P(a.j.fU) + '\x3c/span\x3e\x3c/a\x3e\x3ca class\x3d"fyre-velocity-refresh"\x3e' + z.P(a.j.refresh) + "\x3c/a\x3e\x3c/div\x3e")
    };
    var Fv = function(a) {
        z.T.call(this, a)
    };
    var Gv = function(a) {
        z.T.call(this);
        this.ei = this.Lk = this.xl = null;
        this.tf = a.NO;
        this.n = a.n;
        this.d = a.L
    };
    var Hv = function(a, b, c) {
        var d = a.f();
        if (!a.ei) {
            a.ei = new xs(d);
            var f = a.ei;
            lq(f);
            f.Qw = !0;
            a.ei.Eo(!0)
        }
        if (b === a.xl)
            z.N(d, !1),
            a.xl = null,
            a.Lk = null;
        else {
            var f = new z.ts(b,1)
              , g = a.ei;
            g.fH = 0;
            g.ka() && g.Fc();
            a.ei.V(!0);
            a.ei.Ze(f);
            a.Lk = c;
            z.N(d, !0);
            a.xl = b
        }
    };
    var Iv = function(a, b, c, d) {
        nl.call(this, [0], [1], c, d);
        this.uN = a;
        this.oO = b;
        this.LD = z.n
    };
    var Jv = function(a, b) {
        sv.call(this, a, b);
        this.xj = !1;
        this.og = null
    };
    var Kv = function(a, b) {
        Jv.call(this, a, b);
        this.Vo = z.X;
        this.Bz = Uu
    };
    var Lv = function(a, b, c) {
        xv.call(this, a, b);
        this.yH = this.ml = 0;
        this.Ns = this.L.H.zH;
        void 0 !== c && (this.Ns = c)
    };
    var Mv = function(a) {
        if (!a.iy)
            if (z.Eh(Nv.yt, a.c)) {
                var b = z.Eh(Nv.yt, a.c);
                th(window.document, "LABEL", null, b)[0].innerHTML = Ov(a)
            } else {
                kk(a.c, Nv.AA, !0);
                var b = z.Eh(Nv.Qz, a.c)
                  , c = z.xo(z.X.Ms, {
                    text: Ov(a)
                });
                b.appendChild(c);
                a.p().e(c, "click", a.sg);
                a.Db && kk(a.Db.c, "fyre-divider-vanilla", !0)
            }
    };
    var Ov = function(a) {
        var b = z.W.get(1 === a.ml ? z.W.g.TL : z.W.g.UL);
        return -1 === b.indexOf("%s") ? a.ml + " " + b : z.wa(b, a.ml)
    };
    var Pv = function(a) {
        kk(a.c, Nv.AA, !1);
        var b = z.Eh(Nv.yt, a.c);
        b && (a.p().Fa(b, "click", a.sg),
        z.Oc(b))
    };
    var Qv = function(a, b, c) {
        kk(b.f(), Nv.Hi, !c);
        a.ml += c ? -1 : 1
    };
    var Rv = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    z.Sv = function(a, b, c, d) {
        if (!Tv) {
            var f = window
              , g = z.om(f)
              , h = new Uv(f,[0, g],[0, a],b,Rv);
            Jk(h, "begin", function() {
                c && c();
                Tv = !0
            });
            Jk(h, "end", function() {
                d && d();
                Tv = !1;
                if (h)
                    if (Bk(h))
                        h.ee && h.ee.me(void 0);
                    else {
                        var a = Mk(h);
                        if (a) {
                            var b = 0, c;
                            for (c in a.lc)
                                for (var f = a.lc[c].concat(), g = 0; g < f.length; ++g)
                                    Vk(f[g]) && ++b
                        }
                    }
                h.q()
            });
            h.play()
        }
    }
    ;
    var Uv = function(a, b, c, d, f) {
        bm.call(this, a, b, c, d || 1500, f)
    };
    var Vv = function(a, b) {
        this.ao = a;
        this.rh = b
    };
    var Wv = function(a, b) {
        Vv.call(this, a, b);
        this.ma = this.Ta = null
    };
    var Xv = function(a) {
        for (var b = 0; a.getParent(); )
            b++,
            a = a.getParent();
        return b
    };
    var Yv = function(a, b, c) {
        z.w(a.ec(), function(a) {
            b.call(c, a);
            Yv(a, b, c)
        })
    };
    var Zv = function(a, b) {
        z.T.call(this, b);
        this.L = this.d = a;
        this.gd = new Wv(null,this);
        this.rb = {};
        this.Dk = this.ph = null;
        this.uj = [];
        this.w = this.L.u.v();
        this.Kr(!0);
        this.hd = this.lp.Cp;
        this.ql = (new Date).getTime() / 1E3
    };
    var $v = function(a) {
        return z.nj(a.gd.ec(), function(a, c) {
            return a + (uv(c.Q()) ? 1 : 0)
        }, 0)
    };
    var aw = function(a, b) {
        var c = a.rb[b];
        return c && !c.Q().xj
    };
    var bw = function(a, b) {
        if (b) {
            var c = z.Xa(a.gd.ec());
            ki(c, function(a) {
                var c = a.Q();
                a = c.l;
                var g = $v(this) > b
                  , h = !(-1 < [0, 5].indexOf(a.get(a.k.Zb)))
                  , c = 0 < uv(c);
                (g && c || !c && h) && this.by(a)
            }, a)
        }
    };
    var cw = function(a, b) {
        var c;
        c = b.get(Nm);
        var d = b.ka()
          , f = wn(b, b.get(Km))
          , g = 0;
        switch (c) {
        case 1:
            g = d ? 1 : 0;
            break;
        default:
            d && !f ? g = 1 : !d && f && (g = -1)
        }
        c = g;
        d = b.get(Qm);
        (f = a.rb[d]) || (f = a.di(d));
        d = Cp(f.Q());
        f = dn;
        (g = d.get(f)) || (g = 0);
        d.set(f, Math.max(g + c, 0))
    };
    var dw = function(a, b) {
        return mj(a.ec(), function(a, d, f) {
            d = f < b && d.Q().f();
            return a + (d ? 1 : 0)
        })
    };
    var ew = function(a, b, c) {
        var d = b.Q(), f = d.l, g = f.k, h = f.get(g.X), k = f.get(g.Ki), g = a.ql > f.get(g.bd), m;
        a: {
            k = a.rb[k];
            for (m = a.w.get(z.U.Ji); k; ) {
                if (Xv(k) <= m - 1) {
                    m = k;
                    break a
                }
                k = k.getParent()
            }
            m = a.gd
        }
        k = a.Nu(m, f);
        f.set(f.k.OK, Xv(m) + 1);
        m.xe(b, k);
        for (f = m; f.getParent(); )
            f = f.getParent();
        var f = f == a.gd
          , r = m.Q();
        m = dw(m, k);
        var x = b.Q();
        r !== a ? r.Wp(x, k, f) : r.xe(x, m, f);
        c && f && !g && a.L.O("message_add_dom", d);
        return a.rb[h] = b
    };
    var fw = function(a, b) {
        if (!b.get(z.Rm) && 1 === b.get(z.Jm)) {
            var c = b.get(Mm)
              , d = a.ph ? a.ph.get(Mm) < c : !0
              , c = a.Dk ? a.Dk.get(Mm) > c : !0;
            a.hd != a.lp.Cp && (d = a.ph ? !d : !0,
            c = a.Dk ? !c : !0);
            d && (a.ph = b.clone());
            c && (a.Dk = b.clone())
        }
    };
    z.gw = function(a) {
        var b = a.o("fyre-stream-content-not-found");
        a.Zf = new Fv;
        a.By();
        a.Zf.U(b);
        z.vl(b, "display", "block");
        a.p().e(a.Zf, "sortBackTo", a.hS)
    }
    ;
    z.hw = function(a, b) {
        Zv.call(this, a, b);
        this.au = "showMore"
    }
    ;
    var iw = function(a) {
        var b = a.gd.ec();
        a = a.gd.ld(b.length - 1);
        for (var c, d, f = b.length - 1; 0 <= f; f--)
            if (d = b[f].Q(),
            0 < uv(d)) {
                c = d.l;
                break
            }
        return c || Cp(a.Q())
    };
    var jw = function(a) {
        var b = kw(a);
        z.w(b, function(a) {
            var b = this.rb[a].Q();
            b.show(!0, !0);
            fw(this, b.l);
            this.L.O("message_displayed", a)
        }, a)
    };
    var lw = function(a, b) {
        z.T.call(this, b);
        this.ms = [];
        this.Ol = new z.zd;
        this.Va = a.Wo;
        this.Ai = {}
    };
    var mw = function(a, b, c) {
        a.Ol.add(b);
        nw(a);
        c && c !== b ? c in a.Ai ? a.Ai[c].push(b) : a.Ai[c] = [b] : a.ms.push(b)
    };
    var ow = function(a, b, c) {
        a.Ol.remove(b);
        if (c) {
            var d = a.Ai[c];
            d && (z.Ta(d, b),
            0 == d.length && delete a.Ai[c])
        }
        0 == (a.Ai[b] || []).length || delete a.ms[b];
        nw(a)
    };
    var pw = function(a) {
        return 1 == a.nb() ? a.Va.get(a.Va.g.SA) : a.Va.get(a.Va.g.TA)
    };
    var nw = function(a) {
        var b = a.nb();
        a.cD.innerHTML = b;
        a.oI.innerHTML = pw(a);
        0 === b ? a.yb() : a.show()
    };
    z.qw = function(a) {
        z.T.call(this, a);
        this.hx = !1
    }
    ;
    var rw = function(a, b) {
        this.ea = z.It;
        this.lv || (this.Ha = new z.qw,
        this.Ha.xc(this));
        this.he = a.u.v().get(z.U.kk);
        this.Fb = null;
        this.he && (this.Fb = new lw({
            Wo: z.W
        }));
        z.hw.call(this, a, b)
    };
    var kw = function(a) {
        function b(a) {
            return a.pageYOffset < c ? -1 : a.pageYOffset < c + d ? 0 : 1
        }
        var c = z.om(window)
          , d = z.Rh(window).height
          , f = [];
        if (0 === a.uj.length)
            return f;
        for (var g = null, g = null, h = (0,
        z.q)(function() {
            return fj(this.uj, b, this)
        }, a); -1 < (g = h()); )
            g = a.uj.splice(g, 1)[0],
            f.push(g.id);
        return f
    };
    var sw = function(a, b) {
        this.lv = !0;
        rw.call(this, a, b);
        this.Kr(!1)
    };
    var tw = function(a, b) {
        xv.call(this, a, b)
    };
    var uw = function(a, b) {
        Zv.call(this, a, b)
    };
    var vw = function() {
        var a = window.scrollY
          , b = z.Eh(z.ww.qM)
          , b = z.Hl(b).y;
        return [a, b]
    };
    var xw = function(a, b, c) {
        var d = new z.em(a.Uj,b);
        d.nd = function() {
            z.em.prototype.nd.call(d);
            z.vl(d.element, {
                display: "block",
                opacity: "100"
            });
            c()
        }
        ;
        d.play()
    };
    var yw = function(a, b) {
        Zv.call(this, a, b);
        this.WC = z.W.get(z.W.g.IM)
    };
    var zw = function(a, b) {
        Zv.call(this, a, b);
        this.WC = z.W.get(z.W.g.LK)
    };
    z.Aw = function(a) {
        this.d = a
    }
    ;
    z.Bw = function(a, b, c, d, f) {
        var g = d[b]
          , h = f[b];
        b === z.O.wb && (a = a.d.H.lV,
        g = g[a],
        h = h[a]);
        g = Cw(g, h, "descending" === c);
        if (0 !== g)
            return g;
        c = !0;
        var k;
        switch (b) {
        case z.O.se:
            b = z.O.bd;
            break;
        case z.O.Jp:
            b = z.O.bd;
            c = !1;
            break;
        case z.O.bd:
            b = z.O.se;
            break;
        default:
            b = z.O.se,
            k = z.O.bd
        }
        g = d[b];
        h = f[b];
        g = Cw(g, h, c);
        if (0 !== g || !k)
            return g;
        g = d[k];
        h = f[k];
        return Cw(g, h, !0)
    }
    ;
    var Cw = function(a, b, c) {
        var d = 0;
        a < b ? d = -1 : a > b && (d = 1);
        return c ? -1 * d : d
    };
    var Dw = function(a) {
        return (0,
        z.Q)('\x3cspan class\x3d"fyre-reviews-rated ' + (-1 == a.Bb["default"] ? "fyre-no-rating" : "") + '" style\x3d"width: ' + z.R(z.Vo(16 * a.Vb)) + 'px"\x3e\x3cmeta itemprop\x3d"worstRating" content\x3d"0" /\x3e\x3cmeta itemprop\x3d"ratingValue" content\x3d"' + z.R(a.Bb["default"]) + '" /\x3e\x3cmeta itemprop\x3d"bestRating" content\x3d"' + z.R(a.Vb) + '" /\x3e\x3clabel style\x3d"width: ' + z.R(z.Vo(a.Bb["default"] / a.Vb * 100)) + '%" /\x3e\x3c/span\x3e')
    };
    var Ew = function(a) {
        for (var b = "\x3cselect\x3e", c = a.Vb, d = 0; d < c; d++)
            b += "\x3coption\x3e" + z.P(a.j.sH[d]) + "\x3c/option\x3e";
        return (0,
        z.Q)(b + "\x3c/select\x3e")
    };
    var Fw = function(a, b) {
        z.T.call(this, b);
        this.ZN = a.YN;
        this.wW = a.vW || {};
        this.dm = a.cm
    };
    var Gw = function(a, b) {
        z.T.call(this, b);
        this.mf = a.n.get(a.n.k.qc);
        this.w = a.v;
        this.W = a.n;
        this.hg = z.Qf;
        this.C = a;
        this.Va = a.Wo
    };
    var Hw = function(a, b) {
        Gw.call(this, a, b);
        var c = this.w.get(z.U.vh)
          , d = this.Va.g;
        this.wu = z.wj(a.Fg) ? a.Fg : !0;
        this.jd = new Vr({
            MO: {
                NW: d.KB,
                OW: d.KB
            },
            interval: c,
            xa: this.W
        });
        this.G(this.jd);
        this.cn = a.Wk;
        this.tv = a.bP;
        this.kl = a.jl;
        this.CS = a.IF
    };
    var Iw = function(a, b) {
        Gw.call(this, a, b)
    };
    var Jw = function(a, b) {
        Gw.call(this, a, b)
    };
    var Kw = function(a, b) {
        z.T.call(this, b);
        this.VS = a.UF;
        this.hg = z.Qf;
        this.C = a;
        this.ot = []
    };
    var Lw = function(a, b) {
        a.Dg && (a.ot.push(a.Dg),
        a.Dg.S(),
        a.removeChild(a.Dg, !0));
        var c = {
            Kw: 0 < a.ot.length
        };
        z.A(c, a.C);
        a.Dg = new b(c);
        a.G(a.Dg, !0)
    };
    var Mw = function(a, b) {
        z.T.call(this, b);
        this.W = a.n;
        this.C = a;
        this.wi = zj(a.v) ? z.V : z.W;
        z.F.on(z.F.Ga.Ag, this.Jw, this)
    };
    var Nw = function(a) {
        var b = {
            UF: "action",
            Wo: a.wi
        };
        z.A(b, a.C);
        a.we = new Kw(b);
        a.G(a.we);
        a.we.ra(window.document.body);
        b = a.p();
        b.e(a.we, "menu.selected", a.yR);
        b.e(a.we, "menu.close", a.Rk)
    };
    var Ow = function(a) {
        if (!(z.F.eb() || 0 < a.C.Wk.length)) {
            var b = a.C.Fg
              , c = !z.F.get(z.E.ue)
              , d = -1 < a.C.jl.indexOf("flag");
            if (!c || b && !d) {
                var b = -1 < a.C.jl.indexOf("delete")
                  , f = a.C.v
                  , f = f.get(f.k.vh)
                  , g = a.W;
                g.get(g.k.Zb);
                var h = Wr(g)
                  , k = z.F.eb()
                  , g = Zr(g, f)
                  , f = h && (k || 0 === f || 0 < g)
                  , h = a.C.IF || -1 < a.C.jl.indexOf("edit");
                (k = z.on(a.W)) && (!f || h) && b ? a.q() : k || c || !d || a.q()
            } else
                a.q()
        }
    };
    var Pw = function(a) {
        z.T.call(this);
        this.Lf(a.xa);
        this.$j = a.xa.get(z.O.Oi);
        this.Ei = this.GF = 0
    };
    var Qw = function(a) {
        a.GF = it(a.$j.jb.length, a.Ei)
    };
    var Rw = function(a) {
        var b = !1
          , c = !1
          , d = a.$j.get(z.F.id);
        d && (c = d.get(z.An.Vf),
        b = 2 === c,
        c = 1 === c);
        a.zI(b, c)
    };
    var Sw = function(a, b) {
        a.dispatchEvent({
            type: "reviewVote",
            value: b,
            xa: a.l
        })
    };
    var Tw = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment-user" data-from\x3d"' + z.R(a.s.da) + '" data-author-id\x3d"' + z.R(a.s.id) + '"\x3e' + z.Jo(ip(a)) + '\x3cdiv class\x3d"fyre-comment-highlight"\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var Uw = function(a) {
        return (0,
        z.Q)('\x3clabel class\x3d"fyre-vote-label"\x3e' + z.P(a.j.label) + '\x3c/label\x3e\x3cspan class\x3d"fyre-vote-button-container"\x3e\x3ca class\x3d"fyre-comment-upvote-btn fyre-comment-action-button"\x3e' + z.P(a.j.jX) + '\x3c/a\x3e\x3cspan class\x3d"fyre-comment-vote-divider"\x3e' + z.P(a.j.BS) + '\x3c/span\x3e\x3ca class\x3d"fyre-comment-downvote-btn fyre-comment-action-button"\x3e' + z.P(a.j.DO) + "\x3c/a\x3e\x3c/span\x3e")
    };
    var Vw = function(a) {
        return (0,
        z.Q)('\x3clabel class\x3d"fyre-vote-label"\x3e' + z.P(a.j.label) + "\x3c/label\x3e")
    };
    var Ww = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment-reply-expander"\x3e\x3cspan\x3e' + z.Jo(z.X.Ls(a)) + "\x3c/span\x3e\x3clabel /\x3e\x3c/div\x3e")
    };
    var Xw = function(a) {
        Pw.call(this, a);
        this.Wd = null;
        this.Vn = !1;
        this.cm = Uw;
        a.Qa && (a = this.qn(),
        this.Wd = new Ru(a,"fyre-comment-vote-imgs"),
        this.G(this.Wd, !1))
    };
    var Yw = function(a) {
        return a.$j.some(function(a) {
            var c = 1 === a.get(z.An.Vf);
            return !!a.get(z.An.qc) && c
        })
    };
    var Zw = function(a) {
        var b = a.Vn ? z.V.get(z.V.g.St) : z.V.get(z.V.g.iu);
        a.je.innerHTML = b
    };
    var $w = function(a, b) {
        var c = !a.Vn || Yw(a) && b;
        z.N(a.je, c)
    };
    var ax = function(a, b) {
        z.T.call(this, b);
        this.vk = a.Pi;
        this.bb = a.d;
        this.w = this.bb.u.v();
        this.W = a.n;
        this.C = a;
        this.wi = zj(this.w) ? z.V : z.W;
        z.F.on(z.F.Ga.Ag, this.Jw, this)
    };
    var bx = function(a, b) {
        var c = a.o(cx.uh);
        c ? z.Ap(b, c) : b.ra(a.c)
    };
    var dx = function(a) {
        a.Qi && a.Qi.q();
        var b = a.w.get(z.U.xm)
          , c = a.w.ah();
        a.Qi = new a.Fi[ex.Ap]({
            Fg: a.bb.H.Fg,
            v: a.w,
            n: a.W,
            Wk: a.bb.H.Wk,
            bP: b && !c,
            IF: !!a.bb.H.readOnly,
            jl: a.bb.H.jl
        });
        a.G(a.Qi);
        bx(a, a.Qi)
    };
    var fx = function(a) {
        a.Ua = new a.Fi[ex.Bg](a.W);
        a.G(a.Ua);
        bx(a, a.Ua)
    };
    var gx = function(a) {
        var b = a.W.get(Lm)
          , c = b.get(z.U.Pd)
          , b = !b.get(z.U.zc);
        a = gn(a.W);
        return !b && c && !a
    };
    var hx = function(a) {
        Pw.call(this, a);
        this.cm = Vw;
        this.wi = zj(a.xa.get(a.xa.k.Nd)) ? z.V : z.W
    };
    var ix = function(a, b) {
        ax.call(this, a, b)
    };
    var jx = function(a) {
        z.Ou.call(this, a)
    };
    var kx = function(a) {
        var b = 0 < a.l.get(z.O.rm);
        z.N(a.c, b)
    };
    z.lx = function(a, b) {
        Uu.call(this, a, b);
        this.qV = a.H.iV || z.n
    }
    ;
    var mx = function(a) {
        a = zn(a.n);
        return 0 === a[1] ? "" : z.wa(z.V.get(z.V.g.CA), a[0], a[1])
    };
    var nx = function(a) {
        var b = a.o(ox.$B);
        b && (new a.qV).renderRating(b, {
            maxRating: a.d.H.Vb,
            rating: a.n.get(z.O.wb)
        })
    };
    var px = function(a, b) {
        a.n.set(z.O.se, b);
        var c = a.o(ox.pb)
          , d = mx(a)
          , f = z.$h(d);
        kk(c, ox.FL, f);
        a.FF.innerHTML = d
    };
    var qx = function(a, b) {
        Jv.call(this, a, b);
        this.ea = z.O;
        this.Vo = z.X;
        this.Bz = z.lx
    };
    var rx = function(a, b) {
        z.hw.call(this, a, b);
        this.ea = z.O;
        this.Fb = new lw({
            Wo: z.V
        });
        this.lv || (this.Ha = new z.qw,
        this.Ha.xc(this));
        this.fI = new z.Aw(a);
        var c = z.sx[a.H.Ym];
        this.dI = z.tx[c.type];
        this.hd = c.direction
    };
    var ux = function(a, b) {
        this.lv = !0;
        rx.call(this, a, b)
    };
    var vx = function() {};
    var wx = function() {};
    var xx = function() {};
    z.yx = function(a) {
        this.d = a;
        this.oh = {}
    }
    ;
    z.zx = function(a, b, c, d) {
        var f = {};
        f[Ax] = c;
        f[Bx] = d;
        f[Cx] = b;
        f[Dx] = void 0;
        f[Ex] = void 0;
        a.oh[b] = new Fx(f)
    }
    ;
    var Gx = function(a, b) {
        var c = a.oh[b]
          , d = wx;
        zj(a.d.u.v()) && (d = xx);
        d = d.D().cl(b, a.d);
        c[Bx] && c[Bx].G(d);
        c[Ax] && d.U(c[Ax]);
        c[Hx] = d;
        c[Ex](d);
        return d
    };
    z.Ix = function(a, b, c) {
        Jx(a, b, Ex, c)
    }
    ;
    z.Kx = function(a, b, c) {
        Jx(a, b, Dx, c)
    }
    ;
    var Jx = function(a, b, c, d) {
        a = a.oh[b];
        var f = a[c];
        a[c] = function(a) {
            f(a);
            d(a)
        }
    };
    var Fx = function(a) {
        Lx(this, a)
    };
    var Lx = function(a, b) {
        z.y(Mx, function(a) {
            this[a] = null != b[a] ? b[a] : this.sc[a]
        }, a)
    };
    var Nx = function(a, b) {
        z.T.call(this, b);
        this.If = a || ["1", "2", "3", "4", "5"];
        this.bm = [];
        this.cx = !0;
        this.pi = this.Na = -1;
        this.Km = null
    };
    var Ox = function(a) {
        a.Vh(a.pi);
        a.Na = -1;
        a.dispatchEvent("highlightchange");
        a.dispatchEvent("unhighlight")
    };
    var Px = function(a, b, c) {
        var d = a.P();
        b = 0 === b ? d + "-firststar" : b == a.If.length - 1 ? d + "-laststar" : d + "-midstar";
        return d + "-star " + (c ? b + "-on" : b + "-off") + " " + (a.cx ? d + "-enabled" : d + "-disabled")
    };
    var Qx = function(a, b) {
        Nx.call(this, a, b)
    };
    var Rx = function(a, b, c) {
        this.Yv = b;
        this.Sn = c;
        this.Aj = a;
        this.Cb = new Qx
    };
    var Sx = function(a, b, c) {
        this.Sn = c;
        this.Aj = a;
        this.jV = a = 100 / a / (b ? 2 : 1);
        this.Lj = null;
        this.Bo = -1
    };
    var Tx = function(a, b) {
        var c = 0;
        0 < b && (c = a.jV,
        c = Math.min(b + (c - b % c), 100));
        a.Bo = c;
        Kl(a.KH, c + "%")
    };
    var Ux = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-editor-disabled ' + z.R(a.cv) + '"\x3e\x3cspan class\x3d"fyre-editor-locked"\x3e\x3c/span\x3e ' + z.P(a.j.GD) + "\x3c/div\x3e")
    };
    var Vx = function(a) {
        return (0,
        z.Q)('\x3cspan class\x3d"fyre-editor-error"\x3e\x3ca class\x3d"fyre-editor-error-close"\x3e\x3c/a\x3e\x3cspan class\x3d"fyre-editor-error-message"\x3e' + z.P(a.cs) + "\x3c/span\x3e\x3c/span\x3e")
    };
    var Wx = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-editor-thumbnails-container"\x3e\x3cdiv class\x3d"fyre-editor-thumbnails"\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var Xx = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-editor-media-drawer"\x3e\x3c/div\x3e')
    };
    var Yx = function(a) {
        var b = '\x3cdiv class\x3d"fyre-media-thumb' + (a.fG ? " fyre-media-loading" : "") + '"\x3e' + (a.fG ? '\x3cimg src\x3d"' + z.R(z.S(a.Sd)) + '/images/snake-loader.gif" class\x3d"fyre-media-spinner"\x3e' : "") + (a.ie ? "" : '\x3ca href\x3d"' + z.R(z.S(a.url)) + '" target\x3d"_blank"\x3e');
        switch (a.type) {
        case "photo":
            b += '\x3cimg src\x3d"' + z.R(z.S(a.url)) + '" class\x3d"fyre-img-thumb" /\x3e';
            break;
        case "video":
            b += '\x3cimg src\x3d"' + z.R(z.S(a.url)) + '" class\x3d"fyre-video-thumbnail" /\x3e\x3cdiv class\x3d"fyre-video-play"\x3e\x3c/div\x3e';
            break;
        default:
            b += '\x3cimg src\x3d"' + z.R(z.S(a.url)) + '" /\x3e'
        }
        b += (a.ie ? "" : "\x3c/a\x3e") + "\x3c/div\x3e";
        return (0,
        z.Q)(b)
    };
    var Zx = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-editor-media-tooltip" style\x3d"display: none;"\x3e\x3cdiv class\x3d"fyre-editor-media-tooltip-body"\x3e\x3cbutton class\x3d"fyre-editor-media-tooltip-remove"\x3eRemove\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-editor-media-tooltip-arrow"\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var $x = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-provider-connections"\x3e\x3cstrong\x3e' + z.P(a.j.Bx) + "\x3c/strong\x3e\x3c/div\x3e")
    };
    var ay = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment-preview"\x3e\x3ch5\x3eCustom HTML Preview\x3cspan class\x3d"fyre-icon-remove"\x3e\x3c/span\x3e\x3c/h5\x3e\x3cdiv class\x3d"fyre-roundedpanel-content fyre-comment-preview-content"\x3e\x3carticle class\x3d"fyre-comment-article"\x3e\x3cdiv class\x3d"fyre-comment"\x3e\x3cdiv class\x3d"fyre-comment-raw-html"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/article\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var by = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-editor-toolbar"\x3e\x3c/div\x3e')
    };
    var cy = function(a, b) {
        $k.call(this);
        a && this.Td(a, b)
    };
    var dy = function(a, b, c, d) {
        xk.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    var ey = function() {};
    var fy = function() {
        var a = gy
          , b = new ey;
        b.P = function() {
            return a
        }
        ;
        return b
    };
    var hy = function(a, b, c) {
        if (a = c || a.Lh())
            c = b.getAttribute("role") || null,
            a != c && Mp(b, a)
    };
    var iy = function(a, b, c) {
        b.ka() || Np(c, "hidden", !b.ka());
        b.isEnabled() || a.Sf(c, 1, !b.isEnabled());
        jy(b, 8) && a.Sf(c, 8, !!(b.F & 8));
        jy(b, 16) && a.Sf(c, 16, !!(b.F & 16));
        jy(b, 64) && a.Sf(c, 64, b.Ab())
    };
    var ky = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        z.w([], function(d) {
            !nh(d, z.pa(z.Sa, a)) || b && !z.Sa(d, b) || c.push(d.join("_"))
        });
        return c
    };
    var ly = function(a) {
        var b = a.P();
        z.Ha(b.replace(/\xa0|\s/g, " "), " ");
        a.mq = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };
    var my = function() {};
    var ny = function(a, b) {
        if (!a)
            throw Error("Invalid class name " + a);
        if (!z.ga(b))
            throw Error("Invalid decorator function " + b);
        oy[a] = b
    };
    var py = function(a, b, c) {
        z.T.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b; ) {
                d = z.ja(b);
                if (d = qy[d])
                    break;
                b = b.b ? b.b.constructor : null
            }
            b = d ? z.ga(d.D) ? d.D() : new d : null
        }
        this.ba = b;
        this.Oj(z.ba(a) ? a : null)
    };
    var ry = function(a, b) {
        a.aa && b != a.ww && sy(a, b);
        a.ww = b
    };
    var sy = function(a, b) {
        var c = a.p()
          , d = a.f();
        b ? (c.e(d, "mouseover", a.Ne).e(d, "mousedown", a.Ug).e(d, "mouseup", a.sj).e(d, "mouseout", a.xw),
        a.Fn != z.n && c.e(d, "contextmenu", a.Fn),
        z.C && c.e(d, "dblclick", a.FE)) : (c.Fa(d, "mouseover", a.Ne).Fa(d, "mousedown", a.Ug).Fa(d, "mouseup", a.sj).Fa(d, "mouseout", a.xw),
        a.Fn != z.n && c.Fa(d, "contextmenu", a.Fn),
        z.C && c.Fa(d, "dblclick", a.FE))
    };
    var ty = function(a, b) {
        uy(a, 16, b) && a.Hc(16, b)
    };
    var jy = function(a, b) {
        return !!(a.To & b)
    };
    var vy = function(a, b) {
        return !!(a.nf & b) && jy(a, b)
    };
    var uy = function(a, b, c) {
        return jy(a, b) && !!(a.F & b) != c && (!(a.Sj & b) || a.dispatchEvent(xp(b, c))) && !a.La
    };
    var wy = function() {};
    var xy = function(a, b, c) {
        py.call(this, a, b || wy.D(), c)
    };
    var yy = function(a, b, c) {
        this.va = c || (a ? z.Dc(Gh(window.document, a)) : z.Dc());
        c = z.xo(Zx);
        var d = this.va.la().body;
        z.Mc(d, c);
        this.Eq = c;
        xs.call(this, this.Eq);
        c = z.Eh("fyre-editor-media-tooltip-remove", this.Eq);
        d = new xy(null);
        ry(d, !0);
        d.U(c);
        d.kh(this);
        this.Vm = new z.uh(1,1);
        this.Xa = new z.zd;
        a && this.Td(a);
        null != b && Bi(this.f(), b)
    };
    var zy = function(a, b) {
        z.T.call(this, b);
        this.l = a
    };
    var Ay = function(a, b) {
        z.T.call(this, b);
        this.md = a
    };
    var By = function(a, b) {
        z.T.call(this, b);
        this.md = a
    };
    var Cy = function(a) {
        return a.md.length ? !!z.Oa(a.md.jb, function(a) {
            return "LivefyreFilePicker" === a.get(a.k.rd)
        }).length : !1
    };
    var Dy = function(a) {
        a.mc || (a.mc = new Ay(a.md),
        a.G(a.mc, !0))
    };
    var Ey = function(a, b) {
        z.T.call(this);
        this.Nc = null;
        this.Sk = a;
        this.Z = a.Z;
        this.C = b;
        this.bb = b.L || {}
    };
    var Fy = function(a, b) {
        Ey.call(this, a, b)
    };
    var Gy = function(a, b) {
        Ey.call(this, a, b);
        this.Ev = b.vc && !!b.vc.get(b.user.id);
        this.qh = b.user
    };
    var Hy = function(a, b) {
        a.Ev = b;
        var c = a.C.j;
        a.Nc.Ay(b ? c.GI : c.mj)
    };
    var Iy = function(a, b) {
        Ey.call(this, a, b);
        this.Kj = null
    };
    var Jy = function(a, b, c) {
        b && (z.N(b, void 0),
        c.appendChild(b));
        b = new xs(b,new z.ts(a.Nc.f(),1));
        lq(b);
        b.Qw = !0;
        b.Eo(!0);
        c = a.p();
        c.e(b, Ky.vJ, z.pa(a.io, b));
        c.e(b, Ky.uJ, z.pa(a.pU, b));
        a.Kj = b
    };
    var Ly = function(a) {
        var b = a.Nc.f(), c;
        c = a.Kj;
        (c = c.zj || 150 > z.qa() - c.mx) ? z.fk(b, "fyre-button-left-open") : z.dk(b, "fyre-button-left-open");
        a.Kj.V(!c)
    };
    var My = function() {
        z.D.call(this)
    };
    var Ny = function(a) {
        z.D.call(this);
        this.gI = rj();
        this.MD = rj();
        this.ny = a.bh();
        this.va = z.Dc(a.la());
        a.Uo(this.va.r("SPAN", {
            id: this.gI
        }), this.va.r("SPAN", {
            id: this.MD
        }))
    };
    var Oy = function(a, b) {
        return a.va.f(b ? a.gI : a.MD)
    };
    var Py = function(a, b, c, d, f) {
        this.Gc = !!b;
        a && this.Ze(a, d);
        this.depth = void 0 != f ? f : this.Xb || 0;
        this.Gc && (this.depth *= -1);
        this.tq = !c
    };
    var Qy = function() {};
    var Ry = function(a) {
        if (a.getSelection)
            return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a)
                        return null
                } else if (!c.length || c.item(0).document != a)
                    return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    };
    var Sy = function(a) {
        for (var b = [], c = 0, d = a.dl(); c < d; c++)
            b.push(a.zf(c));
        return b
    };
    var Ty = function(a) {
        a = a.xd();
        return 1 == a.nodeType ? a : a.parentNode
    };
    var Uy = function(a) {
        return a.bh() ? a.Ja() : a.fa()
    };
    var Vy = function(a) {
        return a.bh() ? a.Eb() : a.$a()
    };
    var Wy = function(a) {
        return a.bh() ? a.fa() : a.Ja()
    };
    var Xy = function(a) {
        return a.bh() ? a.$a() : a.Eb()
    };
    var Yy = function(a) {
        return a.fa() && a.Ja() ? new Ny(a) : null
    };
    var Zy = function(a, b) {
        Py.call(this, a, b, !0)
    };
    var $y = function() {};
    var az = function(a, b, c, d, f) {
        var g;
        a && (this.sa = a,
        this.ya = b,
        this.na = c,
        this.wa = d,
        1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes,
        (b = a[b]) ? (this.sa = b,
        this.ya = 0) : (a.length && (this.sa = oj(a)),
        g = !0)),
        1 == c.nodeType && ((this.na = c.childNodes[d]) ? this.wa = 0 : this.na = c));
        Py.call(this, f ? this.na : this.sa, f, !0);
        if (g)
            try {
                this.next()
            } catch (h) {
                if (h != z.rd)
                    throw h;
            }
    };
    var bz = function() {};
    var cz = function(a) {
        this.N = a
    };
    var dz = function(a) {
        var b = z.Fc(a).createRange();
        if (3 == a.nodeType)
            b.setStart(a, 0),
            b.setEnd(a, a.length);
        else if (ez(a)) {
            for (var c, d = a; (c = d.firstChild) && ez(c); )
                d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && ez(c); )
                d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else
            c = a.parentNode,
            a = z.Na(c.childNodes, a),
            b.setStart(c, a),
            b.setEnd(c, a + 1);
        return b
    };
    var fz = function(a, b, c, d) {
        var f = z.Fc(a).createRange();
        f.setStart(a, b);
        f.setEnd(c, d);
        return f
    };
    var gz = function(a) {
        this.N = a
    };
    var hz = function(a, b) {
        this.N = a;
        this.Dq = b
    };
    var iz = function(a) {
        var b = z.Fc(a).body.createTextRange();
        if (1 == a.nodeType)
            b.moveToElementText(a),
            ez(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling; ) {
                var f = d.nodeType;
                if (3 == f)
                    c += d.length;
                else if (1 == f) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
    var jz = function(a, b) {
        for (var c = b.childNodes, d = 0, f = c.length; d < f; d++) {
            var g = c[d];
            if (ez(g)) {
                var h = iz(g)
                  , k = h.htmlText != g.outerHTML;
                if (a.isCollapsed() && k ? 0 <= a.Ce(h, 1, 1) && 0 >= a.Ce(h, 1, 0) : a.N.inRange(h))
                    return jz(a, g)
            }
        }
        return b
    };
    var kz = function(a, b, c) {
        c = c || a.xd();
        if (!c || !c.firstChild)
            return c;
        for (var d = 1 == b, f = 0, g = c.childNodes.length; f < g; f++) {
            var h = d ? f : g - f - 1, k = c.childNodes[h], m;
            try {
                m = lz(k)
            } catch (r) {
                continue
            }
            var x = m.N;
            if (a.isCollapsed())
                if (!ez(k)) {
                    if (0 == a.Ce(x, 1, 1)) {
                        a.ya = a.wa = h;
                        break
                    }
                } else {
                    if (m.Mg(a))
                        return kz(a, b, k)
                }
            else {
                if (a.Mg(m)) {
                    if (!ez(k)) {
                        d ? a.ya = h : a.wa = h + 1;
                        break
                    }
                    return kz(a, b, k)
                }
                if (0 > a.Ce(x, 1, 0) && 0 < a.Ce(x, 0, 1))
                    return kz(a, b, k)
            }
        }
        return c
    };
    var mz = function(a, b) {
        var c = 1 == b
          , d = c ? a.fa() : a.Ja();
        if (1 == d.nodeType) {
            for (var d = d.childNodes, f = d.length, g = c ? 1 : -1, h = c ? 0 : f - 1; 0 <= h && h < f; h += g) {
                var k = d[h];
                if (!ez(k) && 0 == a.N.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), lz(k).N))
                    return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        f = a.N.duplicate();
        g = iz(d);
        f.setEndPoint(c ? "EndToEnd" : "StartToStart", g);
        f = f.text.length;
        return c ? d.length - f : f
    };
    var nz = function(a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
    var oz = function(a, b, c) {
        c = c || z.Dc(a.parentElement());
        var d, f = d = b.id;
        d || (d = b.id = rj());
        a.pasteHTML(b.outerHTML);
        (b = c.f(d)) && (f || b.removeAttribute("id"));
        return b
    };
    var pz = function(a, b, c) {
        var d;
        d = d || z.Dc(a.parentElement());
        var f;
        1 != b.nodeType && (f = !0,
        b = d.r("DIV", null, b));
        a.collapse(c);
        b = oz(a, b, d);
        f && (a = b.firstChild,
        d.wP(b),
        b = a);
        return b
    };
    var qz = function(a) {
        this.N = a
    };
    var rz = function(a) {
        this.N = a
    };
    var sz = function(a) {
        return z.yg ? new hz(a,z.Fc(a.parentElement())) : z.J ? new rz(a) : z.H ? new gz(a) : z.G ? new qz(a) : new cz(a)
    };
    var lz = function(a) {
        if (z.C && !z.lb(9)) {
            var b = new hz(iz(a),z.Fc(a));
            if (ez(a)) {
                for (var c, d = a; (c = d.firstChild) && ez(c); )
                    d = c;
                b.sa = d;
                b.ya = 0;
                for (d = a; (c = d.lastChild) && ez(c); )
                    d = c;
                b.na = d;
                b.wa = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.mg = a
            } else
                b.sa = b.na = b.mg = a.parentNode,
                b.ya = z.Na(b.mg.childNodes, a),
                b.wa = b.ya + 1;
            a = b
        } else
            a = z.J ? new rz(dz(a)) : z.H ? new gz(dz(a)) : z.G ? new qz(dz(a)) : new cz(dz(a));
        return a
    };
    var ez = function(a) {
        return z.Lc(a) || 3 == a.nodeType
    };
    var tz = function() {};
    var uz = function(a, b) {
        var c = new tz;
        c.Ig = a;
        c.Df = !!b;
        return c
    };
    var vz = function(a, b, c, d) {
        var f = new tz;
        f.Df = wz(a, b, c, d);
        if (z.Uc(a) && !z.Lc(a)) {
            var g = a.parentNode;
            b = z.Na(g.childNodes, a);
            a = g
        }
        z.Uc(c) && !z.Lc(c) && (g = c.parentNode,
        d = z.Na(g.childNodes, c),
        c = g);
        f.Df ? (f.sa = c,
        f.ya = d,
        f.na = a,
        f.wa = b) : (f.sa = a,
        f.ya = b,
        f.na = c,
        f.wa = d);
        return f
    };
    var xz = function(a) {
        var b;
        if (!(b = a.Ig)) {
            b = a.fa();
            var c = a.$a()
              , d = a.Ja()
              , f = a.Eb();
            if (z.C && !z.lb(9)) {
                var g = b
                  , h = c
                  , k = d
                  , m = f
                  , r = !1;
                1 == g.nodeType && (h = g.childNodes[h],
                r = !h,
                g = h || g.lastChild || g,
                h = 0);
                var x = iz(g);
                h && x.move("character", h);
                g == k && h == m ? x.collapse(!0) : (r && x.collapse(!1),
                r = !1,
                1 == k.nodeType && (k = (h = k.childNodes[m]) || k.lastChild || k,
                m = 0,
                r = !h),
                g = iz(k),
                g.collapse(!r),
                m && g.moveEnd("character", m),
                x.setEndPoint("EndToEnd", g));
                m = new hz(x,z.Fc(b));
                m.sa = b;
                m.ya = c;
                m.na = d;
                m.wa = f;
                b = m
            } else
                b = z.J ? new rz(fz(b, c, d, f)) : z.H ? new gz(fz(b, c, d, f)) : z.G ? new qz(fz(b, c, d, f)) : new cz(fz(b, c, d, f));
            b = a.Ig = b
        }
        return b
    };
    var yz = function(a) {
        if (z.C && !z.lb(9)) {
            var b = !1;
            try {
                b = a.parentNode
            } catch (c) {}
            return !!b
        }
        return z.Vc(a.ownerDocument.body, a)
    };
    var zz = function(a) {
        z.D.call(this);
        this.oC = Uy(a);
        this.tN = Vy(a);
        this.gE = Wy(a);
        this.zP = Xy(a)
    };
    var Az = function() {};
    var Bz = function(a) {
        var b = new Az;
        b.N = a;
        return b
    };
    var Cz = function(a) {
        for (var b = z.Fc(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++)
            b.addElement(arguments[c]);
        return Bz(b)
    };
    var Dz = function(a) {
        a.No || (a.No = a.qj().concat(),
        a.No.sort(function(a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.No
    };
    var Ez = function(a) {
        this.Xa = a.qj()
    };
    var Fz = function(a) {
        a && (this.Xa = Dz(a),
        this.sa = this.Xa.shift(),
        this.na = oj(this.Xa) || this.sa);
        Py.call(this, this.sa, !1, !0)
    };
    var Gz = function() {
        this.Yf = [];
        this.Pl = [];
        this.De = this.am = null
    };
    var Hz = function(a) {
        var b = new Gz;
        b.Pl = a;
        b.Yf = z.Pa(a, function(a) {
            return a.Je()
        });
        return b
    };
    var Iz = function(a) {
        a.am || (a.am = Sy(a),
        a.am.sort(function(a, c) {
            var d = a.fa()
              , f = a.$a()
              , g = c.fa()
              , h = c.$a();
            return d == g && f == h ? 0 : wz(d, f, g, h) ? 1 : -1
        }));
        return a.am
    };
    var Jz = function(a) {
        this.ry = z.Pa(Sy(a), function(a) {
            return a.qy()
        })
    };
    var Kz = function(a) {
        a && (this.ig = z.Pa(Iz(a), function(a) {
            return z.qd(a)
        }));
        Zy.call(this, a ? this.fa() : null, !1)
    };
    var Lz = function(a) {
        return (a = Ry(a || window)) && Mz(a)
    };
    var Mz = function(a) {
        var b, c = !1;
        if (a.createRange)
            try {
                b = a.createRange()
            } catch (d) {
                return null
            }
        else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new Gz;
                for (var c = 0, f = a.rangeCount; c < f; c++)
                    b.Yf.push(a.getRangeAt(c));
                return b
            }
            b = a.getRangeAt(0);
            c = wz(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else
            return null;
        return Nz(b, c)
    };
    var Nz = function(a, b) {
        return a && a.addElement ? Bz(a) : uz(sz(a), b)
    };
    var Oz = function(a) {
        return uz(lz(a), void 0)
    };
    var Pz = function(a, b) {
        return vz(a, b, a, b)
    };
    var Qz = function(a) {
        if (a = Ry(a || window))
            if (a.empty)
                try {
                    a.empty()
                } catch (b) {}
            else
                try {
                    a.removeAllRanges()
                } catch (c) {}
    };
    var wz = function(a, b, c, d) {
        if (a == c)
            return d < b;
        var f;
        if (1 == a.nodeType && b)
            if (f = a.childNodes[b])
                a = f,
                b = 0;
            else if (z.Vc(a, c))
                return !0;
        if (1 == c.nodeType && d)
            if (f = c.childNodes[d])
                c = f,
                d = 0;
            else if (z.Vc(c, a))
                return !1;
        return 0 < (Di(a, c) || b - d)
    };
    var Rz = function(a) {
        return (a = a.exec(z.Kb)) ? a[1] : ""
    };
    var Sz = function(a, b, c) {
        this.KG = a;
        this.OV = !!c;
        a && !b && this.next()
    };
    var Tz = function(a, b, c) {
        z.ba(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
        Sz.call(this, a.childNodes[c], !0, b)
    };
    var Uz = function(a) {
        for (var b; b = a && 1 == a.nodeType ? Vz(ui(new Tz(a,!1), Wz)) : null; )
            a = b;
        return a
    };
    var Vz = function(a) {
        try {
            return a.next()
        } catch (b) {
            return null
        }
    };
    var Wz = function(a) {
        return 1 == a.nodeType || 3 == a.nodeType && !vj(a.nodeValue)
    };
    var Xz = function(a, b) {
        var c = zi(a);
        if (a.getElementsByTagName)
            for (var d in Yz)
                if (a.tagName == d || 0 < a.getElementsByTagName(d).length)
                    return !1;
        return !b && "\u00a0" == c || vj(c)
    };
    var Zz = function(a) {
        return a.length || a.childNodes.length
    };
    var $z = function(a) {
        return a.getAttribute && "true" == a.getAttribute("g_editable")
    };
    var aA = function(a, b) {
        z.C && z.Nc(a);
        a.innerHTML = b
    };
    var bA = function(a) {
        var b = a && a.nodeName.toLowerCase();
        return !(!a || "block" != (1 != a.nodeType ? null : z.C ? a.currentStyle ? a.currentStyle.display : null : yl(a, "display")) && "td" != b && "table" != b && "li" != b)
    };
    var cA = function(a) {
        return Uh(a, bA, !0)
    };
    var dA = function(a, b) {
        var c = eA(a, 1, b)
          , c = eA(c, 0, b)
          , d = c.fa()
          , f = c.Ja()
          , g = c.$a()
          , c = c.Eb();
        if (d == f) {
            for (; f != b && 0 == g && c == Zz(f); )
                d = f.parentNode,
                g = z.Na(d.childNodes, f),
                c = g + 1,
                f = d;
            d = f
        }
        return vz(d, g, f, c)
    };
    var eA = function(a, b, c) {
        for (var d = (b = 1 == b) ? a.fa() : a.Ja(), f = b ? a.$a() : a.Eb(), g = Ty(a); d != g && d != c && !(b && 0 != f || !b && f != Zz(d)); )
            var h = d.parentNode
              , f = z.Na(h.childNodes, d)
              , f = b ? f : f + 1
              , d = h;
        c = b ? d : a.fa();
        g = b ? f : a.$a();
        d = b ? a.Ja() : d;
        a = b ? a.Eb() : f;
        return vz(c, g, d, a)
    };
    var fA = function(a) {
        Pz(Uz(a), 0).select()
    };
    var gA = function(a, b) {
        var c = a.parentNode
          , d = z.Na(c.childNodes, a) + (b ? 0 : 1)
          , c = hA(c, d, b, !0)
          , c = Pz(c.Y, c.offset);
        c.select();
        return c
    };
    var iA = function(a) {
        for (var b = null, c = a.firstChild; c; ) {
            var d = c.nextSibling;
            3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue,
            a.removeChild(c)) : b = c : (iA(c),
            b = null);
            c = d
        }
    };
    var jA = function(a, b) {
        if (b)
            var c = kA(b)
              , d = cA(Ty(b));
        d ? (d = Ci(d, a),
        z.C ? iA(d) : d.normalize()) : a && (z.C ? iA(a) : a.normalize());
        return c ? c() : null
    };
    var lA = function(a, b) {
        return b ? hA(a.fa(), a.$a()) : hA(a.Ja(), a.Eb())
    };
    var kA = function(a) {
        var b = a.bh()
          , c = mA(lA(a, !b))
          , d = nA(c)
          , f = c.Y.previousSibling;
        3 == c.Y.nodeType && (c.Y = null);
        var g = mA(lA(a, b))
          , h = nA(g)
          , k = g.Y.previousSibling;
        3 == g.Y.nodeType && (g.Y = null);
        return function() {
            !c.Y && f && (c.Y = f.nextSibling,
            c.Y || (c = new oA(f,Zz(f))));
            !g.Y && k && (g.Y = k.nextSibling,
            g.Y || (g = new oA(k,Zz(k))));
            return vz(c.Y || d.Y.firstChild || d.Y, c.offset, g.Y || h.Y.firstChild || h.Y, g.offset)
        }
    };
    var mA = function(a) {
        var b;
        if (3 == a.Y.nodeType)
            for (b = a.Y.previousSibling; b && 3 == b.nodeType; b = b.previousSibling)
                a.offset += Zz(b);
        else
            b = a.Y.previousSibling;
        var c = a.Y.parentNode;
        a.Y = b ? b.nextSibling : c.firstChild;
        return a
    };
    var oA = function(a, b) {
        this.Y = a;
        this.offset = b
    };
    var nA = function(a) {
        var b = a.Y.parentNode;
        return new oA(b,z.Na(b.childNodes, a.Y))
    };
    var hA = function(a, b, c, d) {
        for (; 1 == a.nodeType; ) {
            var f = a.childNodes[b];
            if (f || a.lastChild)
                if (f) {
                    var g = f.previousSibling;
                    if (c && g) {
                        if (d && pA(g))
                            break;
                        a = g;
                        b = Zz(a)
                    } else {
                        if (d && pA(f))
                            break;
                        a = f;
                        b = 0
                    }
                } else {
                    if (d && pA(a.lastChild))
                        break;
                    a = a.lastChild;
                    b = Zz(a)
                }
            else
                break
        }
        return new oA(a,b)
    };
    var pA = function(a) {
        return 1 == a.nodeType && !z.Lc(a)
    };
    var qA = function(a) {
        Ny.call(this, a)
    };
    var rA = function(a, b) {
        this.Eg = a;
        this.eG = b;
        this.ov = []
    };
    var sA = function(a) {
        if (!a.Yu) {
            var b = Uz(a.Eg);
            a.Yu = b.tagName && "IMG" == b.tagName ? b.getAttribute("alt") : zi(a.Eg)
        }
        return a.Yu
    };
    var tA = function(a, b, c) {
        var d = new rA(a,!0);
        d.Eg.href = "/";
        b && (a.target = b);
        c && (d.ov = c);
        return d
    };
    var uA = function(a, b) {
        var c = new rA(a,!0), d;
        d = sA(c);
        d = vA(d) ? 0 > d.search(/:/) ? "http://" + d.replace(/^[\s\xa0]+/, "") : d : wA.test(d) ? "mailto:" + d : null;
        c.Eg.href = d ? d : "";
        b && (a.target = b)
    };
    var vA = function(a) {
        if (/\s/.test(a) || wA.test(a))
            return !1;
        var b = !1;
        /^[^:\/?#.]+:/.test(a) || (a = "http://" + a,
        b = !0);
        a = z.nb(a);
        if (-1 != z.Na(["mailto", "aim"], a[1]))
            return !0;
        var c = a[3];
        if (!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c))
            return !1;
        b = a[5];
        return !b || 0 == b.indexOf("/")
    };
    var xA = function() {
        $k.call(this);
        this.tc = this.Rp()
    };
    var yA = function(a) {
        return a.B && a.B.cb
    };
    var zA = function() {
        xA.call(this)
    };
    var AA = function(a) {
        return yA(a).la()
    };
    var BA = function(a) {
        if (z.C || z.G) {
            var b = a.yd()
              , c = Ty(b)
              , d = AA(a);
            CA.lastIndex = 0;
            CA.test(c.innerHTML) && (a = Yy(b),
            "P" == c.tagName ? DA(c, !0) : (b = c.innerHTML.replace(CA, '\x3cp$1 trtempbr\x3d"temp_br"\x3e'),
            aA(c, b),
            c = z.Xa(c.getElementsByTagName("P")),
            z.sd(c, function(a) {
                if ("temp_br" == a.getAttribute("trtempbr")) {
                    a.removeAttribute("trtempbr");
                    if (vj(z.Wc(a))) {
                        var b = z.C ? d.createTextNode("\u00a0") : d.createElement("BR");
                        a.appendChild(b)
                    }
                    DA(a)
                }
            })),
            a.restore())
        }
    };
    var DA = function(a, b) {
        if (z.C || z.G) {
            var c = a.outerHTML.replace(/<(\/?)p/gi, "\x3c$1div");
            b && (c = c.replace(CA, "\x3c/div\x3e\x3cdiv$1\x3e"));
            z.G && !/<\/div>$/i.test(c) && (c += "\x3c/div\x3e");
            a.outerHTML = c
        }
    };
    var EA = function(a) {
        return 0 == a.indexOf("+") ? a.substring(1) : a
    };
    var FA = function(a) {
        a = cA(a);
        a.align && (a.style.textAlign = a.align,
        a.removeAttribute("align"))
    };
    var GA = function(a, b, c, d, f) {
        var g = null;
        d && (g = a.B.queryCommandValue("rtl") ? "rtl" : a.B.queryCommandValue("ltr") ? "ltr" : null);
        b = EA(b);
        var h, k;
        if (z.C) {
            var m = b;
            k = [];
            d = null;
            var r = a.yd();
            h = yA(a);
            if (m in HA) {
                var x = r && Ty(r);
                if (x) {
                    for (var t = th(window.document, "BLOCKQUOTE", null, x), I, M = 0; M < t.length; M++)
                        if (r.containsNode(t[M])) {
                            I = t[M];
                            break
                        }
                    if (x = I || z.gi(x, "BLOCKQUOTE"))
                        d = h.r("div", {
                            style: "height:0"
                        }),
                        x.appendChild(d),
                        k.push(d),
                        I ? r = vz(I, 0, d, 0) : r.containsNode(d) && (I = r.fa(),
                        r = r.$a(),
                        r = vz(I, r, d, 0)),
                        r.select()
                }
            }
            I = a.B;
            !I.kb() && !d && m in IA && (m = I.f(),
            r && r.isCollapsed() && !z.Sc(m) && (d = r.zf(0).Je(),
            r = d.duplicate(),
            r.moveToElementText(m),
            r.collapse(!1),
            r.isEqual(d) && (r = h.createTextNode("\u00a0"),
            m.appendChild(r),
            d.move("character", 1),
            d.move("character", -1),
            d.select(),
            k.push(r))),
            d = h.r("div", {
                style: "height:0"
            }),
            m.appendChild(d),
            k.push(d));
            h = k[0];
            k = k[1]
        }
        if (z.J) {
            h = b;
            var $;
            JA[h] && ($ = yA(a).r("div", {
                style: "height: 0"
            }, "x"),
            a.B.f().appendChild($));
            !z.B(534) && KA[h] && (h = a.B.f(),
            $ = yA(a).r("div", {
                style: "height: 0"
            }, "x"),
            h.insertBefore($, h.firstChild));
            h = $
        }
        z.H && ($ = b,
        z.B("1.9") && "formatblock" == $.toLowerCase() && ($ = a.yd(),
        d = $.fa(),
        $.isCollapsed() && d && "BODY" == d.tagName && (m = $.$a(),
        (d = d.childNodes[m]) && "BR" == d.tagName && ($ = $.Je(),
        $.setStart(d, 0),
        $.setEnd(d, 0)))));
        LA && "fontsize" == b.toLowerCase() && MA(a);
        $ = AA(a);
        f && NA && ($.execCommand("styleWithCSS", !1, !0),
        z.G && OA(a));
        $.execCommand(b, !1, c);
        f && NA && $.execCommand("styleWithCSS", !1, !1);
        z.J && !z.B("526") && "formatblock" == b.toLowerCase() && c && /^[<]?h\d[>]?$/i.test(c) && PA(a);
        /insert(un)?orderedlist/i.test(b) && (z.J && !z.B(534) && QA(a),
        z.C && (RA(a),
        k && z.Oc(k)));
        h && z.Oc(h);
        g && a.B.execCommand(g)
    };
    var SA = function(a, b, c) {
        var d = null
          , f = []
          , g = b && Ty(b);
        if (g && "IMG" == g.tagName || !b)
            return null;
        if (b.isCollapsed())
            b = b.zf(0).Je(),
            TA ? (d = yA(a).createElement("A"),
            b.insertNode(d)) : UA && (b.pasteHTML("\x3ca id\x3d'newLink'\x3e\x3c/a\x3e"),
            d = yA(a).f("newLink"),
            d.removeAttribute("id"));
        else {
            var h = rj();
            GA(a, "CreateLink", h);
            z.w(a.B.f().getElementsByTagName("A"), function(a) {
                z.va(a.href, h) && f.push(a)
            });
            f.length && (d = f.pop());
            a = function(a) {
                return vA(zi(a))
            }
            ;
            if (f.length && nh(f, a)) {
                for (a = 0; b = f[a]; a++)
                    uA(b, c);
                f = null
            }
        }
        return tA(d, c, f)
    };
    var MA = function(a) {
        var b = dA(a.B.Ra(), a.B.f());
        z.sd(ui(b, function(a, d, f) {
            return 1 == f.Xb && b.containsNode(a)
        }), function(a) {
            z.vl(a, "font-size", "");
            z.H && 0 == a.style.length && null != a.getAttribute("style") && a.removeAttribute("style")
        })
    };
    var PA = function(a) {
        z.sd(a.yd(), function(a) {
            "Apple-style-span" == a.className && (a.style.fontSize = "",
            a.style.fontWeight = "")
        })
    };
    var QA = function(a) {
        var b = !1;
        z.sd(a.yd(), function(a) {
            var d = a.tagName;
            if ("UL" == d || "OL" == d)
                if (b) {
                    if (d = Gi(a)) {
                        var f = a.ownerDocument.createRange();
                        f.setStartAfter(d);
                        f.setEndBefore(a);
                        if (z.$h(f.toString()) && d.nodeName == a.nodeName) {
                            for (; d.lastChild; )
                                a.insertBefore(d.lastChild, a.firstChild);
                            d.parentNode.removeChild(d)
                        }
                    }
                } else
                    b = !0
        })
    };
    var RA = function(a) {
        for (a = (a = a.yd()) && a.xd(); a && "UL" != a.tagName && "OL" != a.tagName; )
            a = a.parentNode;
        a && (a = a.parentNode);
        if (a) {
            var b = z.Xa(a.getElementsByTagName("UL"));
            z.hj(b, z.Xa(a.getElementsByTagName("OL")));
            z.w(b, function(a) {
                var b = a.type;
                b && !("UL" == a.tagName ? VA : WA)[b] && (a.type = "")
            })
        }
    };
    var OA = function(a) {
        var b = []
          , c = Ty(a.B.Ra());
        do
            b.push(c);
        while (c = c.parentNode);a = ti(z.qd(a.B.Ra()), z.qd(b));
        a = ui(a, bA);
        z.sd(a, function(a) {
            var b = a.style.outline;
            a.style.outline = "0px solid red";
            a.style.outline = b
        })
    };
    var XA = function(a) {
        var b = null;
        z.sd(a, function(a, d, f) {
            if (-1 != f.Xb) {
                a = cA(a).tagName;
                b = b || a;
                if (b != a)
                    throw b = null,
                    z.rd;
                f.Wy()
            }
        });
        return b
    };
    var YA = function(a, b) {
        var c = b.replace("+justify", "").toLowerCase();
        "full" == c && (c = "justify");
        var d = a.B.We.Bidi;
        if (d)
            return c == d.G1();
        var f = a.yd();
        if (!f)
            return !1;
        for (var g = Ty(f), d = z.Oa(g.childNodes, function(a) {
            return Wz(a) && f.containsNode(a, !0)
        }), d = d.length ? d : [g], g = 0; g < d.length; g++) {
            var h = cA(d[g]);
            if (c != ZA(h))
                return !1
        }
        return !0
    };
    var ZA = function(a) {
        var b = z.zl(a, "textAlign")
          , b = b.replace(/^-(moz|webkit)-/, "");
        $A[b] || (b = a.align || "left");
        return b
    };
    var aB = function(a, b, c, d, f) {
        d = EA(d);
        if (f) {
            var g = AA(a);
            g.execCommand("styleWithCSS", !1, !0)
        }
        a = b ? c.queryCommandState(d) : c.queryCommandValue(d);
        f && g.execCommand("styleWithCSS", !1, !1);
        return a
    };
    var bB = function() {
        xA.call(this)
    };
    var cB = function(a) {
        this.yu = a
    };
    var dB = function(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    };
    var eB = function(a, b, c, d) {
        if (c) {
            d = d || c.firstChild;
            for (var f; d && d.parentNode == c; ) {
                f = d.nextSibling;
                if (1 == d.nodeType) {
                    var g = a.sn(d);
                    g && (g.c = d,
                    b.isEnabled() || g.gc(!1),
                    b.G(g),
                    g.U(d))
                } else
                    d.nodeValue && "" != z.xa(d.nodeValue) || c.removeChild(d);
                d = f
            }
        }
    };
    var fB = function(a, b, c) {
        z.T.call(this, c);
        this.ba = b || cB.D();
        this.Gj = a || this.ba.nE()
    };
    var gB = function(a, b) {
        var c = a.p()
          , d = a.Nb();
        b ? c.e(d, "focus", a.Tg).e(d, "blur", a.Sh).e(a.vn(), "key", a.Af) : c.Fa(d, "focus", a.Tg).Fa(d, "blur", a.Sh).Fa(a.vn(), "key", a.Af)
    };
    var hB = function(a, b) {
        var c = b.f()
          , c = c.id || (c.id = yp(b));
        a.Jg || (a.Jg = {});
        a.Jg[c] = b
    };
    var iB = function(a, b) {
        if (a.f())
            throw Error("Component already rendered");
        a.Gj = b
    };
    var jB = function(a) {
        return a.ld(a.Na)
    };
    var kB = function(a) {
        lB(a, function(a, c) {
            return (a + 1) % c
        }, a.Cc() - 1)
    };
    var mB = function(a) {
        lB(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    };
    var nB = function(a) {
        lB(a, function(a, c) {
            return (a + 1) % c
        }, a.Na)
    };
    var oB = function(a) {
        lB(a, function(a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.Na)
    };
    var lB = function(a, b, c) {
        c = 0 > c ? z.Ep(a, a.nc) : c;
        var d = a.Cc();
        c = b.call(a, c, d);
        for (var f = 0; f <= d; ) {
            var g = a.ld(c);
            if (g && a.JC(g)) {
                a.Pb(c);
                break
            }
            f++;
            c = b.call(a, c, d)
        }
    };
    var pB = function() {
        this.Ru = []
    };
    var qB = function(a, b) {
        var c = a.Ru[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.P() + "-highlight";
                break;
            case 1:
                c = a.P() + "-checkbox";
                break;
            case 2:
                c = a.P() + "-content"
            }
            a.Ru[b] = c
        }
        return c
    };
    var rB = function(a, b, c) {
        a = qB(a, 2);
        return c.r("div", a, b)
    };
    var sB = function(a, b) {
        var c = a.Ea(b);
        if (c) {
            var c = c.firstChild
              , d = qB(a, 1);
            return !!c && z.Uc(c) && Sp(c, d)
        }
        return !1
    };
    var tB = function(a, b, c, d) {
        hy(a, c, b.Ph());
        iy(a, b, c);
        d != sB(a, c) && (d ? Tp(c, "goog-option") : Vp(c, "goog-option"),
        c = a.Ea(c),
        d ? (a = qB(a, 1),
        c.insertBefore(b.R().r("div", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
    var uB = function(a, b, c, d) {
        py.call(this, a, d || pB.D(), c);
        this.ob(b)
    };
    var vB = function(a, b, c) {
        uB.call(this, a, b, c);
        this.Gy(!0)
    };
    var wB = function() {};
    var xB = function(a, b) {
        py.call(this, null, a || wB.D(), b);
        this.hc(1, !1);
        this.hc(2, !1);
        this.hc(4, !1);
        this.hc(32, !1);
        this.F = 1
    };
    var yB = function() {};
    var zB = function() {
        this.yu = "toolbar"
    };
    var AB = function(a, b, c) {
        fB.call(this, b, a || zB.D(), c)
    };
    var BB = function() {};
    var CB = function(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a; ) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var f = c.nodeValue;
                    if ("" == z.xa(f))
                        a.removeChild(c);
                    else {
                        c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
                        break
                    }
                } else
                    break;
                c = d
            }
    };
    var DB = function() {};
    var EB = function(a, b, c) {
        xy.call(this, a, b || DB.D(), c)
    };
    var FB = function() {};
    var GB = function(a, b, c) {
        py.call(this, a, c || FB.D(), b);
        this.hc(1, !1);
        this.hc(2, !1);
        this.hc(4, !1);
        this.hc(32, !1);
        this.F = 1
    };
    var HB = function(a) {
        this.yu = a || "menu"
    };
    var IB = function(a, b) {
        fB.call(this, JB, b || HB.D(), a);
        this.Ye(!1)
    };
    var KB = function(a, b) {
        var c = a.ba, d;
        d = a.R();
        d = th(d.Ma, "div", c.P() + "-content", b);
        for (var f = d.length, g = 0; g < f; g++)
            eB(c, a, d[g])
    };
    var LB = function() {};
    var MB = function(a, b, c) {
        return c.r("div", "goog-inline-block " + (b + "-caption"), a)
    };
    var NB = function() {};
    var OB = function(a, b) {
        return b.r("div", "goog-color-menu-button-indicator", a)
    };
    var PB = function(a, b) {
        if (a && a.firstChild) {
            var c;
            if (c = b)
                c = !!(nk.test("#" == b.charAt(0) ? b : "#" + b) || pk(b).length || rk && rk[b.toLowerCase()]);
            c = c ? mk(b).Er : null;
            a.firstChild.style.borderBottomColor = c || (z.C ? "" : "transparent")
        }
    };
    var QB = function(a, b, c, d) {
        Py.call(this, a, b, c, null, d)
    };
    var RB = function() {};
    var SB = function(a, b, c, d) {
        for (var f = [], g = 0, h = 0; g < c.height; g++) {
            for (var k = [], m = 0; m < c.width; m++) {
                var r = b && b[h++];
                k.push(TB(a, r, d))
            }
            f.push(UB(a, k, d))
        }
        return a.Vu(f, d)
    };
    var UB = function(a, b, c) {
        a = c.r("TR", a.P() + "-row", b);
        Mp(a, "row");
        return a
    };
    var TB = function(a, b, c) {
        a = c.r("TD", {
            "class": a.P() + "-cell",
            id: a.P() + "-cell-" + VB++
        }, b);
        Mp(a, "gridcell");
        Np(a, "selected", !1);
        if (!z.Wc(a) && !Pp(a, "label")) {
            var d;
            b = new QB(a);
            for (c = ""; !c && (d = si(b)); )
                1 == d.nodeType && (c = Pp(d, "label") || d.title);
            (d = c) && Np(a, "label", d)
        }
        return a
    };
    var WB = function(a, b, c) {
        for (b = b.f(); c && 1 == c.nodeType && c != b; ) {
            if ("TD" == c.tagName && Sp(c, a.P() + "-cell"))
                return c.firstChild;
            c = c.parentNode
        }
        return null
    };
    var XB = function(a) {
        $k.call(this);
        this.dh = [];
        YB(this, a)
    };
    var YB = function(a, b) {
        b && (z.w(b, function(a) {
            this.Tl(a, !1)
        }, a),
        z.hj(a.dh, b))
    };
    var ZB = function(a, b, c) {
        py.call(this, a, b || RB.D(), c);
        this.nf &= -89;
        this.Tm = new $B;
        this.Tm.kh(this);
        this.nx = -1
    };
    var aC = function(a) {
        var b = a.mb();
        return b && b[a.Na]
    };
    var bC = function(a) {
        var b = a.mb();
        if (b)
            if (a.bf && a.bf.width) {
                if (b = Math.ceil(b.length / a.bf.width),
                !z.oh(a.bf.height) || a.bf.height < b)
                    a.bf.height = b
            } else
                b = Math.ceil(Math.sqrt(b.length)),
                a.bf = new Hh(b,b);
        else
            a.bf = new Hh(0,0)
    };
    var $B = function() {
        py.call(this, null);
        this.Sj |= 2
    };
    var cC = function(a, b, c) {
        this.oq = a || [];
        ZB.call(this, null, b || RB.D(), c);
        this.oq = this.oq;
        this.fs = this.Ur = null;
        this.Oa(dC(this))
    };
    var dC = function(a) {
        return z.Pa(a.oq, function(a, c) {
            var d = this.R().r("div", {
                "class": this.ba.P() + "-colorswatch",
                style: "background-color:" + a
            }), f;
            this.Ur && this.Ur[c] ? f = this.Ur[c] : "#" == a.charAt(0) ? (f = ok(a),
            f = "RGB (" + [(0,
            window.parseInt)(f.substr(1, 2), 16), (0,
            window.parseInt)(f.substr(3, 2), 16), (0,
            window.parseInt)(f.substr(5, 2), 16)].join(", ") + ")") : f = a;
            d.title = f;
            return d
        }, a)
    };
    var eC = function(a) {
        if (a)
            try {
                return mk(a).Er
            } catch (b) {}
        return null
    };
    var fC = function(a, b, c, d) {
        us.call(this, a, b, c || d);
        if (c || d)
            this.Vr = 65 | (d ? 32 : 132)
    };
    var gC = function(a, b, c, d, f) {
        xy.call(this, a, c || LB.D(), d);
        this.hc(64, !0);
        this.as = new fC(null,5);
        b && this.Wl(b);
        this.PT = null;
        this.Ca = new dl(500);
        !z.fh && !z.dg || z.B("533.17.9") || (this.Mr = !0);
        this.aO = !0;
        this.QT = f || HB.D()
    };
    var hC = function(a) {
        a.M || a.Wl(new IB(a.R(),a.QT));
        return a.M || null
    };
    var iC = function(a) {
        if (a.M.aa) {
            var b = a.as;
            a.as.element = a.aV || a.f();
            var c = a.M.f();
            a.M.ka() || (c.style.visibility = "hidden",
            z.N(c, !0));
            !a.ns && a.as.NP && a.as.Vr & 32 && (a.ns = z.Ml(c));
            b.Fc(c, b.Fh ^ 1, a.PT, a.ns);
            a.M.ka() || (z.N(c, !1),
            c.style.visibility = "visible")
        }
    };
    var jC = function(a, b, c) {
        var d = a.p();
        c = c ? d.e : d.Fa;
        c.call(d, b, "action", a.Gn);
        c.call(d, b, "close", a.aw);
        c.call(d, b, "highlight", a.nw);
        c.call(d, b, "unhighlight", a.Hw)
    };
    var kC = function(a, b) {
        var c = a.p();
        (b ? c.e : c.Fa).call(c, a.f(), "keydown", a.fR)
    };
    var lC = function(a, b) {
        var c = a.f()
          , d = Pp(b, "activedescendant")
          , d = z.Fc(b).getElementById(d) || b;
        if (!d.id) {
            var f = up.D();
            d.id = vp(f)
        }
        Qp(c, d);
        Np(c, "owns", d.id)
    };
    var mC = function(a, b, c, d) {
        gC.call(this, a, b, c || NB.D(), d)
    };
    var nC = function(a) {
        var b = new IB(a);
        z.y(oC, function(c) {
            c = new cC(c,null,a);
            if (c.f())
                throw Error("Component already rendered");
            c.bf = z.oh(8) ? new Hh(8,void 0) : 8;
            bC(c);
            b.G(c, !0)
        });
        return b
    };
    var pC = function() {};
    var qC = function() {};
    var rC = function(a, b, c, d) {
        mC.call(this, a, b, c || qC.D(), d)
    };
    var sC = function(a, b, c, d) {
        gC.call(this, a, b, c || pC.D(), d)
    };
    var tC = function(a, b, c, d, f) {
        gC.call(this, a, b, c, d, f || new HB("listbox"));
        this.av = this.mb();
        this.Ww = null;
        this.Vs("listbox")
    };
    var uC = function(a, b) {
        a.av = b;
        vC(a)
    };
    var wC = function(a, b) {
        a.ga = new XB;
        b && b.Qc(function(a) {
            xC(a);
            this.ga.Wf(a)
        }, a);
        yC(a)
    };
    var yC = function(a) {
        a.ga && a.p().e(a.ga, "select", a.Jn)
    };
    var vC = function(a) {
        var b = a.xf();
        a.Oa(b ? b.vf() : a.av);
        var c = a.ba.Ea(a.f());
        c && a.R().bT(c) && (null == a.Ww && (a.Ww = Pp(c, "label")),
        b = (b = b ? b.f() : null) ? Pp(b, "label") : a.Ww,
        Np(c, "label", b),
        zC(a))
    };
    var zC = function(a) {
        var b = a.ba;
        if (b && (b = b.Ea(a.f()))) {
            var c = a.c;
            b.id || (b.id = vp(up.D()));
            Mp(b, "option");
            Np(c, "activedescendant", b.id);
            a.ga && (c = a.ga.tE(),
            c = lj(c, function(a) {
                return a instanceof uB
            }),
            Np(b, "setsize", c),
            Np(b, "posinset", 1 + a.ga.wf()))
        }
    };
    var xC = function(a) {
        a.Vs(a instanceof uB ? "option" : "separator")
    };
    var AC = function(a, b, c, d) {
        tC.call(this, a, b, c || pC.D(), d)
    };
    var BC = function(a) {
        var b = a.indexOf(",");
        a: for (a = (-1 != b ? a.substring(0, b) : a).toLowerCase(),
        b = 0; 2 > b; b++) {
            var c = "\"'".charAt(b);
            if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
                a = a.substring(1, a.length - 1);
                break a
            }
        }
        return a
    };
    var CC = function(a, b) {
        z.w(b, function(b) {
            var d = b.caption;
            b = b.value;
            var f = BC(b)
              , d = new vB(d,b,a.R());
            zp(d, f);
            a.Wf(d);
            d.Ea().style.fontFamily = b
        })
    };
    var DC = function(a) {
        z.w(EC, function(b) {
            var c = b.value;
            b = new vB(b.caption,c,a.R());
            a.Wf(b);
            b = b.Ea();
            b.style.fontSize = (FC[c] || 10) + "px";
            b.firstChild.style.height = "1.1em"
        })
    };
    var GC = function(a) {
        z.w(HC, function(b) {
            var c = b.caption;
            b = b.Ia;
            var d = a.R()
              , c = new vB(d.r("DIV", null, c),b,d);
            zp(c, b);
            a.Wf(c)
        })
    };
    var IC = function(a, b, c, d, f, g) {
        c = new EB(JC(c, d, g),f,g);
        zp(c, a);
        c.Pj(b);
        return c
    };
    var KC = function(a, b, c, d, f, g) {
        a = IC(a, b, c, d, f, g);
        a.hc(16, !0);
        return a
    };
    var LC = function(a, b, c, d, f, g) {
        f = new AC(null,null,f,g);
        d && z.w(d.split(/\s+/), f.Vp, f);
        f.Vp("goog-toolbar-select");
        uC(f, c);
        zp(f, a);
        f.Pj(b);
        return f
    };
    var MC = function(a, b, c, d, f, g) {
        c = new rC(JC(c, d, g),null,f,g);
        zp(c, a);
        c.Pj(b);
        return c
    };
    var JC = function(a, b, c) {
        a && "" != a || !z.H || z.B("1.9a") || (a = "\u00a0");
        return (c || z.Dc()).r("DIV", b ? {
            "class": b
        } : null, a)
    };
    var NC = function(a) {
        var b = "en-us".replace(/_/, "-").toLowerCase()
          , c = [];
        b in OC && (c = OC[b]);
        c.length && CC(a, c);
        CC(a, PC)
    };
    var QC = function(a, b) {
        for (var c = z.Dc(b), d = [], f = 0, g; g = a[f]; f++) {
            if (z.p(g)) {
                var h = void 0;
                if (g = RC[g]) {
                    var h = g.fe || KC
                      , k = g.Ia
                      , m = g.Ya
                      , r = g.caption
                      , x = g.Da
                      , t = c || z.Dc()
                      , h = h(k, m, r, x, null, t);
                    g.tb && (h.tb = !0)
                }
                g = h
            }
            g && d.push(g)
        }
        c = z.Dc(b);
        c = new AB(zB.D(),SC,c);
        f = Il(b);
        c.lh(f);
        c.Ye(!1);
        for (g = 0; h = d[g]; g++)
            h.hc(32, !1),
            h.lh(f),
            c.G(h, !0);
        c.ra(b);
        return c
    };
    var TC = function(a, b, c, d, f, g) {
        var h = IC(a, b, c, d, f, g);
        h.Di = function(a) {
            h.gc(a)
        }
        ;
        return h
    };
    var UC = function(a, b) {
        var c = b;
        try {
            if (z.C)
                var d = "000000" + c.toString(16)
                  , f = d.substr(d.length - 6, 6)
                  , c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
            c != a.Q() && a.ob(c)
        } catch (g) {}
    };
    var VC = function(a, b, c, d, f) {
        this.XD = a;
        this.$y = b;
        this.eq = c;
        this.aE = d;
        this.pv = f || {}
    };
    var WC = function(a, b) {
        this.xX = a;
        this.gD = b
    };
    var XC = function(a, b, c, d) {
        var f = [];
        a.eq && a.$y && f.push("\x3c!DOCTYPE HTML\x3e");
        f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
        a.eq && f.push("height:", a.aE ? "100%" : "auto");
        f.push('"\x3e');
        f.push("\x3chead\x3e\x3cstyle\x3e");
        c && c.gD && f.push(c.gD);
        z.H && a.$y && f.push(" img {-moz-force-broken-image-icon: 1;}");
        f.push("\x3c/style\x3e\x3c/head\x3e");
        f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
        YC && f.push("contentEditable ");
        f.push('class\x3d"editable ');
        f.push('" id\x3d"', a.XD, '" style\x3d"min-width:0;');
        z.H && a.eq && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", a.$y ? "100%" : "auto"),
        a.aE ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
        z.G && f.push(";outline:hidden");
        for (var g in a.pv)
            f.push(";" + g + ":" + a.pv[g]);
        f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
        a = f.join("");
        d = d.contentDocument || d.contentWindow.document;
        d.open();
        d.write(a);
        d.close()
    };
    var ZC = function(a, b) {
        $k.call(this);
        this.Wg = this.id = a;
        this.cb = null;
        this.We = {};
        this.vj = {};
        for (var c in $C)
            this.vj[c] = [];
        this.Kk = "";
        this.Tj = {};
        this.Tj[aD] = 1;
        this.Tj[bD] = 1;
        this.Lr = this.Nr = !1;
        this.yq = new fl(this.xD,cD,this);
        this.$u = {};
        for (var d in dD)
            this.$u[dD[d]] = 0;
        z.H && (this.ze = new fl(this.Dn,eD,this));
        this.de = new qp(this);
        this.yX = [];
        this.ci = fD;
        this.Hl = z.Dc(b || window.document);
        this.Tc = this.Hl.f(this.id);
        this.BP = gD;
        this.$p = this.Hl.hb()
    };
    var hD = function(a, b) {
        var c = b.Qh();
        a.We[c] = b;
        for (var d in $C)
            b[$C[d]] && a.vj[d].push(b);
        b.B = a;
        2 == a.ci && b.enable(a)
    };
    var iD = function(a) {
        var b = !(a.ctrlKey || a.metaKey) && a.keyCode in jD;
        return (a.ctrlKey || a.metaKey) && a.keyCode in kD || b
    };
    var lD = function(a, b) {
        a.ci = 2;
        a.Pq = b;
        a.cb = z.Dc(b);
        a.Nr = !1;
        a.Lr = !1;
        b.setAttribute("g_editable", "true");
        Mp(b, "textbox")
    };
    var mD = function(a, b) {
        if (9 == b.keyCode && !a.dispatchEvent({
            type: "beforetab",
            shiftKey: b.shiftKey,
            altKey: b.altKey,
            ctrlKey: b.ctrlKey
        }) || z.H && b.metaKey && !z.B(29) && (37 == b.keyCode || 39 == b.keyCode))
            return b.preventDefault(),
            !1;
        var c;
        (c = b.charCode) || (c = iD(b) ? !0 : !(!z.H || b.ctrlKey || b.metaKey || z.H && !b.charCode));
        a.Xv = c;
        a.Xv && a.Qk();
        return !0
    };
    var nD = function(a, b, c) {
        var d = {};
        a = a.Gs(8, b || "", d);
        z.vl(c, d);
        aA(c, a)
    };
    var oD = function(a, b) {
        if (!b.altKey) {
            var c = z.jg ? b.metaKey : b.ctrlKey;
            if (c || pD[b.keyCode]) {
                var d = b.charCode || b.keyCode;
                17 != d && a.Tn(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
            }
        }
    };
    var qD = function(a) {
        var b;
        return a.kb() && (b = a.cb) ? (a = b.hb()) && a.frameElement : null
    };
    var rD = function(a, b, c) {
        if (!sD(a, "selectionchange")) {
            var d = a.Ra()
              , d = d && Ty(d);
            a.Zn = !!d && z.Vc(a.f(), d);
            a.dispatchEvent("cvc");
            a.dispatchEvent({
                type: "selectionchange",
                S1: b && b.type
            });
            a.Tn(4, b, c)
        }
    };
    var tD = function(a, b) {
        b && (a.ze && gl(a.ze),
        a.Tj[aD] = 1);
        uD(a);
        a.Tj[bD] = 1
    };
    var vD = function(a, b, c) {
        !b && a.ze && gl(a.ze);
        a.Tj[aD] = 0;
        a.Tj[bD] = 0;
        b && a.Dn();
        c && a.xD()
    };
    var sD = function(a, b) {
        return !!a.Tj[b] || a.$u[b] && 500 >= z.qa() - a.$u[b]
    };
    var uD = function(a) {
        a.ze && gl(a.ze);
        gl(a.yq)
    };
    var wD = function(a) {
        z.gi(a.target, "A") && a.preventDefault()
    };
    z.xD = function(a) {
        if (a.queryCommandValue("usinglorem"))
            return "\u00a0";
        if (2 != a.ci)
            return a.Tc.innerHTML;
        var b = a.f()
          , c = b.cloneNode(!1)
          , b = b.innerHTML;
        z.C && b.match(/^\s*<script/i) && (b = "\u00a0" + b);
        c.innerHTML = b;
        a.$S(11, c);
        return a.Gs(10, c.innerHTML)
    }
    ;
    var yD = function(a, b) {
        var c = a.f();
        if (c) {
            var d;
            if (b)
                d = Uz(c);
            else {
                d = c;
                for (var f; f = d && 1 == d.nodeType ? Vz(ui(new Tz(d,!0), Wz)) : null; )
                    d = f
            }
            c == d ? Pz(c, 0).select() : gA(d, b);
            rD(a)
        }
    };
    var zD = function(a) {
        a.ci = 1;
        var b = a.Tc;
        a.nodeName = b.nodeName;
        a.cssText = b.style.cssText;
        b.className += " editable";
        a.xx(void 0)
    };
    var AD = function(a) {
        if (!z.ba(a.fx) && (a.fx = !1,
        z.C && a.kb())) {
            for (var b = a.Hl.hb(); b != b.parent; )
                try {
                    b = b.parent
                } catch (c) {
                    break
                }
            b = b.location;
            a.fx = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
        }
        return a.fx
    };
    var BD = function(a, b) {
        $k.call(this);
        this.pa = new qp(this);
        this.Z = a;
        this.Ka = b;
        this.Wx = [];
        this.Ka.Qc(function(a) {
            a.tb && this.Wx.push(CD(yp(a)))
        }, this);
        this.Ka.Ye(!1);
        this.pa.e(this.Z, "cvc", this.hX).e(this.Ka, "action", this.WP)
    };
    var CD = function(a) {
        return a
    };
    var DD = function(a, b) {
        Iy.call(this, a, b)
    };
    var ED = function(a, b) {
        Ey.call(this, a, b)
    };
    var FD = function(a, b, c) {
        this.IC = b;
        this.duration = c;
        this.timeout = this.ED = null;
        this.wX = a
    };
    var GD = function(a) {
        py.call(this);
        this.l = a;
        this.SH(fy())
    };
    var HD = function() {
        HB.call(this)
    };
    var ID = function(a) {
        $k.call(this);
        this.Ca = null;
        this.c = a;
        a = z.C || z.J && !z.B("531") && "TEXTAREA" == a.tagName;
        this.uc = new qp(this);
        this.uc.e(this.c, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    };
    var JD = function(a) {
        null != a.Ca && (z.s.clearTimeout(a.Ca),
        a.Ca = null)
    };
    var KD = function(a) {
        a = new xk(a.Sb);
        a.type = "input";
        return a
    };
    var LD = function() {
        this.Ru = []
    };
    var MD = function(a, b, c, d) {
        uB.call(this, a, b, c, d || new LD)
    };
    var ND = function(a, b) {
        IB.call(this, b, a)
    };
    var OD = function(a) {
        a.Ye(!0);
        var b = a.Mb;
        if (a.Rq) {
            var c = a.Nb()
              , d = a.aa;
            a.wl = b;
            var f = a.Nb();
            d && (a.wl = c,
            gB(a, !1),
            a.wl = b,
            a.vn().Td(f),
            gB(a, !0))
        } else
            throw Error("Can't set key event target for container that doesn't support keyboard focus!");
        z.H && a.Mb.setAttribute("autocomplete", "off");
        a.xG && (a.Mb.maxLength = a.xG)
    };
    var PD = function(a) {
        a.rl && (Uk(a.rl, "input", a.PE, !1, a),
        Uk(a.Mb.parentNode, "click", a.QG, !1, a),
        a.rl.q(),
        a.rl = void 0,
        a.Mq = void 0)
    };
    var QD = function(a, b) {
        return !(!a.ts || !a.ts[yp(b)])
    };
    var RD = function(a, b) {
        var c = HD.D();
        IB.call(this, void 0, c);
        this.Vd = b.fb;
        this.sq = b.rq;
        this.Sk = a;
        this.wc = b.vc;
        this.Sq = b.z1;
        this.C = b;
        this.gy = {};
        this.Hh = {};
        this.IH = {};
        this.vy = {};
        this.VC = {
            facebook: b.j.MT,
            facebook_fetching: b.j.NT
        };
        this.dH = null;
        z.w(SD, this.RS, this);
        this.Vd && TD(this, UD, this.Vd);
        this.wc && TD(this, UD, this.wc);
        this.Sq && TD(this, VD, this.Sq)
    };
    var WD = function(a, b, c) {
        var d = c.get("jid");
        a.IH[d] = b;
        var f = !a.aa
          , g = XD(a)[b].length >= YD[b]
          , h = !ZD(a, c);
        f || g || h ? a.Hh[b][d] = c : dj(a.gy[b], d) && (d = new GD(c),
        a.p().e(d, $D.Rt, z.pa(a.V, !1)),
        c.get("custom") && d.V(!1),
        a.xe(d, aE(a, b), !0),
        a.cp && a.cp[b].push(d))
    };
    var TD = function(a, b, c) {
        c.on("add", z.pa(a.lC, b), a);
        for (var d = 0, f = Math.min(200, c.length); d < f; d++)
            a.lC(b, c.Bk(d))
    };
    var aE = function(a, b) {
        var c = SD[z.Na(SD, b) + 1];
        return c ? z.Na(a.ma, a.vy[c]) : a.ma.length
    };
    var XD = function(a) {
        var b = {}, c;
        if (a.cp)
            return a.cp;
        z.y(bE, function(a) {
            b[a] = []
        });
        a.Qc(function(a) {
            a.ka() && !QD(this, a) && (c = a.l,
            b[this.IH[c.get("jid")]].push(a))
        }, a);
        return a.cp = b
    };
    var cE = function(a) {
        if (a.c) {
            var b = a.o("fyre-provider-connections");
            if (z.cb(a.sq))
                b && z.Oc(b),
                z.fk(a.c, "fyre-mention-connections");
            else {
                z.dk(a.c, "fyre-mention-connections");
                b || (b = z.xo($x, a.t()),
                z.Ki(a.c, b));
                var c = th(window.document, "A", null, b);
                z.w(c, function(a) {
                    z.Oc(a)
                });
                var d = a.p();
                z.y(a.sq, function(a, c) {
                    var h = z.xo(dE.s1, {
                        Sd: this.C.Sd,
                        href: a,
                        le: c,
                        j: {
                            p1: this.VC[c.split("_")[0]]
                        }
                    });
                    b.appendChild(h);
                    d.e(h, "click", this.nO, !1, this)
                }, a)
            }
        }
    };
    var ZD = function(a, b) {
        var c = b.get("display_name"), d;
        if (!(d = !a.yv)) {
            var f = a.yv;
            d = String(f).toLowerCase();
            c = String(c.substr(0, f.length)).toLowerCase();
            d = 0 == (d < c ? -1 : d == c ? 0 : 1)
        }
        return d
    };
    var eE = function(a) {
        this.rc = null;
        this.M = a;
        Jk(this.M, $D.Rt, this.bF, !1, this);
        xA.call(this)
    };
    var fE = function(a) {
        a.rc.parentNode && gE(a, a.rc, !0);
        a.rc = null;
        hE(a);
        a.M.Uc();
        a.M.V(!1)
    };
    var gE = function(a, b, c) {
        z.wj(c) && c && z.J ? (a.Hv(),
        a = window.document.createTextNode("\u00a0"),
        Li(a, b),
        gA(a, !1),
        z.Oc(a)) : gA(b, !1)
    };
    var hE = function(a) {
        var b = "";
        a.rc && (b = z.Wc(a.rc).substring(1));
        a = a.M;
        a.Mb && (a.Mb.value = b,
        a.hn(b))
    };
    var iE = function(a) {
        var b = !1;
        a.M.Qc(function(a) {
            b || (b = !QD(this.M, a) && a.ka())
        }, a);
        return b
    };
    z.jE = function(a, b) {
        Ey.call(this, a, b);
        this.jg = new RD(a,b);
        this.jg.V(!1);
        this.jg.ra();
        this.jg.xc(this)
    }
    ;
    z.kE = function(a, b) {
        var c = a.Nc.f();
        b ? z.dk(c, "fyre-button-left-open") : z.fk(c, "fyre-button-left-open")
    }
    ;
    var lE = function(a, b) {
        Ey.call(this, a, b);
        this.qh = b.user
    };
    var mE = function(a) {
        var b = a.C.j;
        return a.qh.id ? b.vs : b.us
    };
    var nE = function() {};
    var oE = function(a, b, c) {
        py.call(this, a, b || nE.D(), c);
        ry(this, !1);
        this.Ul(!0);
        this.il = "" != a;
        a || this.Oj("")
    };
    var pE = function(a) {
        return a.Hj.top + a.Hj.bottom + a.Gu.top + a.Gu.bottom
    };
    var qE = function(a) {
        var b = a.Dj
          , c = a.f();
        b && c && a.es && (b -= pE(a));
        return b
    };
    var rE = function(a) {
        return "placeholder"in a.f()
    };
    var sE = function(a) {
        a.Jl && (rE(a) ? a.f().placeholder = a.Jl : !a.f() || a.il || a.yr || (Tp(a.f(), tE),
        a.f().value = a.Jl))
    };
    var uE = function(a) {
        if (!a.CF) {
            var b = a.f().cloneNode(!1);
            z.vl(b, {
                position: "absolute",
                height: "auto",
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: "hidden"
            });
            a.R().la().body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.ty = d > c;
            b.style.borderWidth = "10px";
            a.sy = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.es = !0);
            z.Oc(b);
            a.CF = !0
        }
        b = a.f();
        (0,
        window.isNaN)(a.Hj.top) && (a.Hj = Wl(b),
        a.Gu = Xl(b));
        var c = a.f().scrollHeight
          , f = a.f()
          , d = f.offsetHeight - f.clientHeight;
        if (!a.ty)
            var g = a.Hj
              , d = d - (g.top + g.bottom);
        a.sy || (f = Xl(f),
        d -= f.top + f.bottom);
        c += 0 < d ? d : 0;
        a.es ? c -= pE(a) : (a.ty || (d = a.Hj,
        c += d.top + d.bottom),
        a.sy || (a = Xl(b),
        c += a.top + a.bottom));
        return c
    };
    var vE = function(a) {
        var b = a.f();
        b.style.height = "auto";
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.Xg = 0
    };
    var wE = function(a, b) {
        Ey.call(this, a, b);
        this.fg = b.tH;
        this.qh = b.user
    };
    var xE = function() {};
    var yE = function(a) {
        xA.call(this);
        this.XO = z.p(a) ? [a] : a
    };
    z.zE = function(a, b) {
        z.D.call(this);
        this.ai = a;
        this.pa = b;
        this.$f = new fl((0,
        z.q)(this.Lx, this),0,this)
    }
    ;
    var AE = function(a) {
        $k.call(this);
        this.c = a;
        this.El = this.c.value;
        this.uc = new qp(this);
        this.nG = z.qa();
        z.J || z.C || z.H && z.B("1.9") ? this.uc.e(a, "paste", this.$i) : this.uc.e(a, ["keydown", "blur", "focus", "mouseover", "input"], this.NQ);
        this.$f = new z.zE((0,
        z.q)(this.LC, this))
    };
    var BE = function() {
        xA.call(this)
    };
    var CE = function(a) {
        if (a.attributes) {
            var b = Vi(DE, a.nodeName, new z.zd);
            ki(a.attributes, function(c) {
                b && b.contains(c.name) || a.removeAttribute(c.name)
            })
        }
    };
    var EE = function(a, b) {
        ki(b.childNodes, function(a) {
            0 < a.childNodes.length && EE(this, a);
            FE.contains(a.nodeName) ? CE(a) : z.Pc(a)
        }, a)
    };
    var GE = function(a) {
        a = a.replace(/<[^>]*>?/g, "").split(/\r\n|\r|\n/g);
        var b = a.length
          , c = window.document.createDocumentFragment();
        z.w(a, function(a, f) {
            var g = z.xa(a);
            c.appendChild(window.document.createTextNode(g));
            b - 1 !== f && c.appendChild(window.document.createElement("BR"))
        });
        return c
    };
    var HE = function(a) {
        xA.call(this);
        this.TF = a
    };
    var IE = function(a, b) {
        z.D.call(this);
        this.js = [];
        for (this.ds = []; a && "BODY" != a.nodeName && a != b; ) {
            for (var c = 0, d = a.previousSibling; d; )
                d = d.previousSibling,
                ++c;
            this.js.unshift(c);
            this.ds.unshift(a.nodeName);
            a = a.parentNode
        }
    };
    var JE = function(a, b) {
        for (var c, d = b, f = 0; c = a.ds[f]; ++f)
            if (d = d.childNodes[a.js[f]],
            !d || d.nodeName != c)
                return null;
        return d
    };
    var KE = function() {
        xA.call(this)
    };
    var LE = function(a, b) {
        var c = a.B.Ra();
        if (c.isCollapsed()) {
            var d = c.Ja();
            if (1 == d.nodeType && (c = d.childNodes[c.Eb()]) && "BR" == c.tagName) {
                var f = Vz(ui(new Sz(c,!1,!0), Wz))
                  , g = c.nextSibling;
                d.removeChild(c);
                b.preventDefault();
                g && ME[g.tagName] && (f && "BR" != f.tagName && !ME[f.tagName] ? Pz(f, Zz(f)).select() : (d = Uz(g),
                Pz(d, 0).select()))
            }
        }
    };
    var NE = function(a) {
        return Xz(a) && 1 == a.getElementsByTagName("BR").length
    };
    var OE = function(a, b, c) {
        for (var d = a.B.Ra(), f = d.xd(), g = a.B.f(), h; f && f != g; ) {
            var k = f.nodeName;
            if (k == b || PE[k] && (!c || !NE(f))) {
                if (z.G && h) {
                    k == b && h == f.lastChild && Xz(h) && (Li(h, f),
                    Oz(h).select());
                    break
                }
                return
            }
            z.G && c && "P" == k && k != b && (h = f);
            f = f.parentNode
        }
        if (z.C && !z.B(9)) {
            var m = !1
              , d = d.Je();
            c = d.duplicate();
            c.moveEnd("character", 1);
            c.text.length && (m = c.parentElement(),
            c = c.duplicate(),
            c.collapse(!1),
            c = c.parentElement(),
            m = m != c && c != d.parentElement()) && (d.move("character", -1),
            d.select())
        }
        a.B.cb.la().execCommand("FormatBlock", !1, "\x3c" + b + "\x3e");
        m && (d.move("character", 1),
        d.select())
    };
    var QE = function(a) {
        if (TA) {
            a = a.B.Ra();
            if (!a.isCollapsed()) {
                var b = !0;
                if (z.G) {
                    var c = a.fa()
                      , d = a.$a();
                    c == a.Ja() && c.lastChild && "BR" == c.lastChild.tagName && d == c.childNodes.length - 1 && (b = !1)
                }
                if (b) {
                    var f = a;
                    if (f && !f.isCollapsed()) {
                        var g = !0, b = Ty(f), c = new IE(f.fa(),b), d = f.$a(), h;
                        h = f;
                        var k = h.fa();
                        bA(k) && (k = k.childNodes[h.$a()] || k);
                        var k = cA(k)
                          , m = h.Ja();
                        bA(m) && (m = m.childNodes[h.Eb()] || m);
                        m = cA(m);
                        h = k == m;
                        if (k = !h)
                            a: {
                                var m = f
                                  , k = m.Ja()
                                  , m = m.Eb()
                                  , r = k;
                                if (bA(r)) {
                                    var x = r.childNodes[m];
                                    if (!x || 1 == x.nodeType && bA(x)) {
                                        k = !1;
                                        break a
                                    }
                                }
                                for (x = cA(r); x != r; ) {
                                    if (Vz(ui(new Sz(r), Wz))) {
                                        k = !0;
                                        break a
                                    }
                                    r = r.parentNode
                                }
                                k = m != Zz(k)
                            }
                        f.Kf();
                        (f = JE(c, b)) ? f = Pz(f, d) : (f = Pz(b, b.childNodes.length),
                        g = !1);
                        f.select();
                        h && (h = cA(f.fa()),
                        Xz(h, !0) && (g = "\x26nbsp;",
                        z.G && "LI" == h.tagName && (g = "\x3cbr\x3e"),
                        aA(h, g),
                        fA(h.firstChild),
                        g = !1));
                        k && (f = cA(f.fa()),
                        h = Vz(ui(new Sz(f), Wz)),
                        f && h && (z.Mc(f, h.childNodes),
                        z.Oc(h)));
                        g && (f = Pz(JE(c, b), d),
                        f.select())
                    }
                }
            }
            a = lA(a, !0)
        } else
            a = yA(a).la(),
            b = a.selection.createRange(),
            c = rj(),
            b.pasteHTML('\x3cspan id\x3d"' + c + '"\x3e\x3c/span\x3e'),
            a = a.getElementById(c),
            a.id = "";
        return a
    };
    var RE = function(a) {
        this.tag = a;
        xA.call(this)
    };
    var SE = function(a, b, c) {
        c == a.B.f() && (b = Uh(b, function(a) {
            return c == a.parentNode
        }, !0),
        c = TE(a.tag, {
            Y: b,
            offset: 0
        }, c));
        return c
    };
    var UE = function(a, b) {
        var c = b.parentNode
          , d = c.parentNode
          , d = "OL" == d.tagName || "UL" == d.tagName
          , d = z.Dc(b).createElement(d ? "LI" : a.tag);
        if (b.previousSibling) {
            if (b.nextSibling) {
                for (var f = c.cloneNode(!1); b.nextSibling; )
                    f.appendChild(b.nextSibling);
                Li(f, c)
            }
            Li(d, c)
        } else
            Ph(d, c);
        Xz(c) && z.Oc(c);
        z.Oc(b);
        d.innerHTML = "\x26nbsp;";
        return d
    };
    var TE = function(a, b, c) {
        for (var d = b.Y; d.previousSibling && !bA(d.previousSibling); )
            d = d.previousSibling;
        for (b = b.Y; b.nextSibling && !bA(b.nextSibling); )
            b = b.nextSibling;
        for (a = c.ownerDocument.createElement(a); d != b; ) {
            var f = d.nextSibling;
            a.appendChild(d);
            d = f
        }
        d = b.nextSibling;
        a.appendChild(b);
        c.insertBefore(a, d);
        return a
    };
    var VE = function(a, b, c) {
        var d = Wy(b);
        b = Xy(b);
        Zz(d) == (c ? b : b + 1) && (c = d.nextSibling) && "BR" == c.tagName && (a.KN = c)
    };
    var WE = function(a, b) {
        var c = a.B.Ra(), d = Wy(c), c = Xy(c), f;
        if (b && "" == d.data)
            f = d.nextSibling;
        else if (b && 0 == c) {
            for (f = d; f && !f.previousSibling && f.parentNode != a.B.f(); )
                f = f.parentNode;
            f = f.previousSibling
        } else
            d.length == c && (f = d.nextSibling);
        f && "BR" == f.tagName && a.KN != f && (z.Oc(f),
        3 == d.nodeType && (d.data = d.data.replace(/^[\t\n\r]|[\t\n\r]$/g, ""),
        Pz(d, Math.min(c, d.length)).select()))
    };
    var XE = function(a, b) {
        if (a && "#text" == a.nodeName) {
            for (var c = b ? "nextSibling" : "previousSibling", d = b ? "previousSibling" : "nextSibling", f = [a.nodeValue]; a[c] && 3 == a[c].nodeType; )
                a = a[c],
                f.push(a.nodeValue),
                z.Oc(a[d]);
            b || f.reverse();
            a.nodeValue = f.join("")
        }
        return a
    };
    var YE = function(a, b, c) {
        a.nodeValue = a.nodeValue.replace(b ? /^[ \t\r\n]+/ : /[ \t\r\n]+$/, "\u00a0");
        c || "" != a.nodeValue || (a.nodeValue = "\u00a0")
    };
    var ZE = function(a, b) {
        for (; (a = b ? a.firstChild : a.lastChild) && "A" != a.tagName; )
            ;
        return a
    };
    var $E = function(a) {
        RE.call(this, a)
    };
    var aF = function(a) {
        var b = null;
        try {
            b = a.cssRules || a.rules
        } catch (c) {
            if (15 == c.code)
                throw c.styleSheet = a,
                c;
        }
        return b
    };
    var bF = function(a) {
        var b = [];
        a = a || window.document.styleSheets;
        var c = z.ba(void 0) ? void 0 : !1;
        if (a.imports && a.imports.length)
            for (var d = 0, f = a.imports.length; d < f; d++)
                z.hj(b, bF(a.imports[d]));
        else if (a.length)
            for (d = 0,
            f = a.length; d < f; d++)
                z.hj(b, bF(a[d]));
        else {
            var g = aF(a);
            if (g && g.length)
                for (var d = 0, f = g.length, h; d < f; d++)
                    h = g[d],
                    h.styleSheet && z.hj(b, bF(h.styleSheet))
        }
        !(a.type || a.rules || a.cssRules) || a.disabled && !c || b.push(a);
        return b
    };
    var cF = function() {
        this.Xm = "";
        this.jh = []
    };
    var dF = function(a, b, c) {
        var d = [], f;
        for (f in b) {
            var g = b[f];
            g && d.push(f, ":", g, c ? " !important" : "", ";")
        }
        a.Xm = d.join("")
    };
    var eF = function(a) {
        this.uu = {};
        if (a) {
            var b = [];
            a = a.split(/\s+/gm);
            for (var c = 0; c < a.length; c++)
                if (a[c]) {
                    var d = new fF(a[c]);
                    b.push(d)
                }
            this.ii = b
        }
    };
    var fF = function(a) {
        var b = gF[a];
        if (b)
            return b;
        for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {}, d = 0; d < b.length; d++) {
            var f = b[d];
            "." == f.charAt(0) ? c.className = f.substring(1, f.length) : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
        }
        this.WF = a;
        this.CT = c;
        this.nI = {};
        gF[a] = this
    };
    var hF = function(a, b) {
        var c = b.uid
          , d = a.nI[c];
        if ("undefined" != typeof d)
            return d;
        var f = a.CT
          , d = f.tagName
          , g = f.className
          , f = f.id
          , h = !0;
        d && "*" != d && d != b.nodeName ? h = !1 : f && f != b.id ? h = !1 : g && !b.SN[g] && (h = !1);
        return a.nI[c] = h
    };
    var iF = function(a) {
        var b = z.ja(a)
          , c = jF[b];
        if (c)
            return c;
        c = [];
        do {
            var d = {
                id: a.id,
                nodeName: a.nodeName
            };
            d.uid = z.ja(d);
            var f = {};
            if (a.className)
                for (var g = Rp(a), h = 0; h < g.length; h++)
                    f[g[h]] = 1;
            d.SN = f;
            c.unshift(d)
        } while (a = a.parentNode);this.lg = c;
        this.uid = z.ja(this);
        jF[b] = this
    };
    var kF = function(a) {
        var b = z.ja(a)
          , c = [];
        a = bF(a.styleSheets);
        for (var d = 0, f; f = a[d]; d++)
            if ((f = aF(f)) && f.length)
                for (var g = 0, h = f.length; g < h; g++) {
                    var k = new cF, m;
                    m = k;
                    var r = f[g]
                      , x = r.style;
                    if (x) {
                        var t = void 0
                          , I = "";
                        x && (t = r.selectorText) && (I = x.cssText) ? z.C && (I += "/* */") : r.cssText && (I = /([^\{]+)\{/,
                        t = I.exec(r.cssText)[1],
                        I = r.cssText.replace(I, "").replace(/\}[^\}]*$/g, ""));
                        if (t) {
                            r = t;
                            m.jh = [];
                            r = r.split(/,\s*/gm);
                            for (t = 0; t < r.length; t++)
                                x = r[t],
                                0 < x.length && m.jh.push(new eF(x));
                            m.Xm = I;
                            m = !0
                        } else
                            m = !1
                    } else
                        m = !1;
                    m && c.push(k)
                }
        lF[b] = c
    };
    var mF = function(a, b) {
        ZC.call(this, a, b)
    };
    var nF = function(a) {
        if (a.Lo ? 0 : a.Lo = !0) {
            var b = qD(a)
              , c = a.f()
              , d = !1;
            if (b && c) {
                var f, g = b.parentNode, h = g.offsetWidth;
                (0,
                window.parseInt)(xl(b, "width"), 10) != h && (f = Wl(c),
                b.style.width = h + "px",
                c.style.width = h - f.left - f.right + "px",
                d = !0);
                g = g.offsetHeight;
                a.sl() && (0,
                window.parseInt)(xl(b, "height"), 10) != g && (f || (f = Wl(c)),
                b.style.height = g + "px",
                c.style.height = g - f.top - f.bottom + "px",
                d = !0)
            }
            a.Lo = !1;
            d && a.dispatchEvent("ifrsz")
        }
    };
    var oF = function(a) {
        a.f() && (nF(a),
        a.sl() || a.Vy())
    };
    var pF = function(a, b) {
        ZC.call(this, a, b)
    };
    var qF = function(a) {
        a.kb() ? (0,
        window.setTimeout)(function() {
            var b = qD(a);
            b && b.contentWindow.document ? a.dispatchEvent("loaded") : (0,
            window.setTimeout)(arguments.callee, 10)
        }, 10) : a.dispatchEvent("loaded")
    };
    var rF = function(a, b) {
        this.RT = a || "";
        z.T.call(this, b)
    };
    var sF = function(a) {
        $k.call(this);
        this.yN = a
    };
    var tF = function() {
        $k.call(this);
        this.GT = 100;
        this.Ld = [];
        this.Mj = [];
        this.rs = []
    };
    var uF = function(a, b, c) {
        if (b.length) {
            var d = b.pop();
            c.push(d);
            a.rs.push({
                type: b == a.Ld ? "before_undo" : "before_redo",
                iE: b == a.Ld ? d.vz : d.Zx,
                state: d
            });
            1 == a.rs.length && a.Ge();
            0 != b.length && 1 != c.length || a.dispatchEvent("state_change")
        }
    };
    var vF = function(a) {
        xA.call(this);
        a = a || new tF;
        this.vG && Vk(this.vG);
        this.Rf = a;
        this.vG = Jk(this.Rf, "state_change", this.wO, !1, this);
        this.hj = {};
        this.Um = {};
        this.RF = null;
        this.JN = (0,
        z.q)(this.LV, this)
    };
    var wF = function(a, b) {
        var c = b.Wg, d, f;
        b.queryCommandValue("usinglorem") ? (d = "",
        f = null) : (d = b.f().innerHTML,
        f = new xF(b),
        f = f.Rr ? f : null);
        var g = a.Um[c];
        if (g) {
            if (g.Bi == d)
                return;
            if ("" == d || "" == g.Bi) {
                var h;
                h = b.Gs(8, "", {});
                if (d == h && "" == g.Bi || g.Bi == h && "" == d)
                    return
            }
            g.$x = d;
            g.tV = f;
            h = a.Rf;
            if (0 == h.Ld.length || !g.Uk(h.Ld[h.Ld.length - 1])) {
                h.Ld.push(g);
                h.Ld.length > h.GT && h.Ld.shift();
                var k = h.Mj.length;
                h.Mj.length = 0;
                h.dispatchEvent({
                    type: "state_added",
                    state: g
                });
                (1 == h.Ld.length || k) && h.dispatchEvent("state_change")
            }
        }
        a.Um[c] = new yF(c,d,f,a.JN)
    };
    var yF = function(a, b, c, d) {
        sF.call(this, !0);
        this.gn = a;
        this.DH = d;
        this.Bi = b;
        this.FI = c
    };
    var xF = function(a) {
        this.Z = a;
        var b = a.cb.hb();
        a = (a = a.Ra()) && a.ul() && a.hb() == b ? a : null;
        if (TA) {
            if (b = a,
            this.Rr = !1,
            b) {
                var c = Uy(b)
                  , d = Wy(b);
                if (c && d) {
                    a = Vy(b);
                    var c = new IE(c,this.Z.f())
                      , f = Xy(b)
                      , d = new IE(d,this.Z.f());
                    b.bh() ? (this.ya = d,
                    this.bz = f,
                    this.wa = c,
                    this.jv = a) : (this.ya = c,
                    this.bz = a,
                    this.wa = d,
                    this.jv = f);
                    this.Rr = !0
                }
            }
        } else
            UA && (b = a,
            this.Rr = !1,
            b && (a = b.zf(0).Je(),
            z.Vc(this.Z.f(), a.parentElement()) && (b = this.Z.cb.la().body.createTextRange(),
            b.moveToElementText(this.Z.f()),
            d = a.duplicate(),
            d.collapse(!0),
            d.setEndPoint("StartToStart", b),
            this.ya = zF(d),
            a = a.duplicate(),
            a.setEndPoint("StartToStart", b),
            this.wa = zF(a),
            this.Rr = !0)))
    };
    var zF = function(a) {
        var b = a.duplicate()
          , c = a.text
          , d = c.length;
        b.collapse(!0);
        b.moveEnd("character", d);
        for (var f, g = 10; (f = b.compareEndPoints("EndToEnd", a)) && (d -= f,
        b.moveEnd("character", -f),
        --g,
        0 != g); )
            ;
        a = 0;
        for (b = c.indexOf("\n\r"); -1 != b; )
            ++a,
            b = c.indexOf("\n\r", b + 1);
        return d + a
    };
    var AF = function(a, b) {
        z.T.call(this, b);
        this.Lm = !1;
        this.Vz = 100;
        this.dj = null;
        this.EF = !!a.content;
        this.xs = a.li;
        this.wj = "edit" === this.xs;
        this.ix = "reply" === this.xs;
        this.Cl = {};
        this.C = a;
        this.d = this.C.L || {};
        this.hH = !1;
        this.zu = a.Dh || new Yj;
        this.$r = new By(this.zu);
        this.Gm = z.C && !this.wj
    };
    var BF = function(a, b) {
        switch (b) {
        case "DuplicateCommentError":
        case "ReviewAlreadyPostedError":
            return a.C.j.PD;
        case "CommentsNotAllowedError":
            return a.C.j.OO;
        case "EditApprovedCommentNotAllowedError":
            return a.C.j.PO;
        case "EditTrashedCommentNotAllowedError":
            return a.C.j.SO;
        case "EditCommentsNotAllowedError":
            return a.C.j.QO;
        case "EditCommentTimeExceeded":
            return a.C.j.RO;
        case "MalformedCommentError":
            return a.C.j.VO;
        case "BodyLengthExceededError":
            return a.C.j.WO;
        case "ServiceUnavailableError":
            return a.C.j.UO;
        default:
            return a.C.j.tO
        }
    };
    var CF = function(a) {
        return mh(a.ma, function(a) {
            return a.dc && a.dc() && "fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED" === a.dc().Ez
        })
    };
    var DF = function(a, b) {
        a.hH = !b;
        var c = a.Cl.post.dc();
        b ? ik(c, "fyre-post-button-disabled", "fyre-post-button-enabled") : ik(c, "fyre-post-button-enabled", "fyre-post-button-disabled")
    };
    var EF = function(a, b) {
        if (a.$m) {
            var c = a.o("fyre-editor-toolbar");
            a.fj && a.fj.q();
            a.fj = new rF(b);
            z.Ap(a.fj, c);
            a.fj.show();
            var c = a.fj.f()
              , d = z.Ml(c);
            z.vl(c, "margin-top", -1 * d.height + "px")
        }
    };
    var FF = function(a, b) {
        z.T.call(this, b);
        this.C = a
    };
    var GF = function(a) {
        z.Mh(z.F, z.E.X, function() {
            a.dispatchEvent({
                type: "fyre.v2.editor.EVENTS.USER_CHANGE",
                user: {
                    id: z.F.id,
                    Ue: z.F.eb() || z.F.get(z.E.jp)
                }
            })
        })
    };
    z.fv = function(a, b, c, d, f, g) {
        var h = z.v.J.qb + "/javascripts/" + ("livefyre_mod_editor_" + b + (z.Qf ? "_mobile" : "") + ".js");
        a = (0,
        z.q)(function() {
            var a = this.LP.apply(this, [b, f, g])
              , h = d.L
              , r = d.li
              , x = h.H
              , t = h.u
              , I = t.v()
              , M = {};
            M.Sd = z.v.J.qb;
            M.fb = t.fb();
            M.vc = t.vc();
            M.rq = z.F.get(z.E.pm);
            M.LT = I.get(z.U.zp);
            M.rV = I.get(z.U.Uf);
            M.hv = x.hv;
            M.li = r;
            h = h.u.v();
            t = zj(h) ? z.V : z.W;
            I = {
                sO: t.get(t.g.BJ),
                tO: t.get(t.g.EJ),
                GD: t.get(t.g.MJ),
                PD: t.get(t.g.aA),
                OO: t.get(t.g.$z),
                PO: t.get(t.g.UJ),
                SO: t.get(t.g.WJ),
                QO: t.get(t.g.bA),
                RO: t.get(t.g.cA),
                UO: t.get(t.g.$J),
                VO: t.get(t.g.aK),
                WO: t.get(t.g.tm),
                mj: t.get(t.g.Gt),
                MT: t.get(t.g.nL),
                NT: t.get(t.g.oL),
                Bx: t.get(t.g.pL),
                O1: t.get(t.g.qL),
                P1: t.get(t.g.rL),
                dV: t.get(t.g.NL),
                GI: t.get(t.g.LM)
            };
            !z.v.Ee && z.F.eb() && (I.GD = t.get(t.g.NJ));
            switch (r) {
            case "edit":
                I.us = t.get(t.g.ML);
                I.vs = t.get(t.g.ZA);
                break;
            case "reply":
                I.us = t.get(t.g.aB);
                I.vs = t.get(t.g.$A);
                break;
            default:
                I.us = t.get(t.g.YA),
                I.vs = t.get(t.g.XA)
            }
            switch (b) {
            case "main":
                h.ah() && z.A(I, {
                    tT: t.get(t.g.$K),
                    uT: t.get(t.g.bL),
                    us: t.get(t.g.LA),
                    vs: t.get(t.g.LA),
                    U1: t.get(t.g.aL)
                });
                break;
            case "reviews":
                z.A(I, {
                    Eu: t.get(t.g.wt),
                    PD: t.get(t.g.Zz),
                    rH: t.get(t.g.eB),
                    mV: t.get(t.g.fB),
                    GH: t.get(t.g.nB),
                    uI: t.get(t.g.LB)
                })
            }
            M.j = I;
            M.user = {
                id: z.F.id,
                Ue: z.F.get(z.E.Od) || z.F.get(z.E.jp)
            };
            M.iv = x.iv;
            !z.v.Ee && z.F.eb() && (M.cv = "fyre-community-owner");
            switch (b) {
            case "reviews":
                M.$d = x.$d,
                M.yE = x.KO,
                M.Vb = x.Vb,
                M.Hf = x.Hf,
                M.Xx = x.Xx,
                r = z.Qf ? Sx : Rx,
                M.qH = x.kV || r
            }
            z.A(d, M);
            a = new a(d);
            GF(a);
            c(a)
        }, a);
        z.Xf(h, null, null, a)
    }
    ;
    z.HF = function(a, b) {
        z.T.call(this, b);
        this.d = a
    }
    ;
    z.IF = function(a, b, c) {
        var d = a.d.Jb;
        d.oh[c] && (z.Ix(d, c, (0,
        z.q)(function(a) {
            b.e(a, "sortBackTo", this.Hn)
        }, a)),
        z.Kx(d, c, (0,
        z.q)(function(a) {
            b.Fa(a, "sortBackTo", this.Hn)
        }, a)))
    }
    ;
    z.JF = function(a, b) {
        z.T.call(this, b);
        this.Lf(a)
    }
    ;
    z.KF = function(a) {
        this.Ab = !1;
        z.T.call(this, a)
    }
    ;
    z.LF = function(a, b, c, d) {
        z.T.call(this, d);
        this.d = a;
        this.l = b;
        this.Xs = c;
        this.ct = z.W
    }
    ;
    var MF = function(a, b) {
        function c(a) {
            a = d.get(a);
            z.Ha(a, "%s") || (a = "%s " + a);
            return Os(z.wa(a, b))
        }
        var d = a.ct;
        return {
            lc: c(d.g.Mt),
            eh: c(d.g.IA)
        }
    };
    var NF = function(a, b, c) {
        z.T.call(this);
        this.Pk = c || !1;
        this.Ab = !1;
        this.l = a;
        this.pe = b
    };
    var OF = function(a, b, c) {
        z.T.call(this);
        this.Pk = c || !1;
        this.l = a;
        this.pe = b
    };
    var PF = function(a, b) {
        z.T.call(this);
        this.ex = a;
        this.pe = b;
        this.Pn = 4 === this.pe ? z.V : z.W
    };
    z.QF = function(a, b, c) {
        z.T.call(this);
        this.Pk = c || !1;
        this.ex = a;
        this.pe = b
    }
    ;
    var RF = function(a, b) {
        this.c = a;
        this.Cz = a.offsetWidth;
        this.RN = b;
        this.iD = this.Rl = null;
        SF(this, this.Cz);
        this.pa = new qp(this);
        this.pa.e(window, "resize", this.WR)
    };
    var SF = function(a, b) {
        z.Qa(a.RN, function(a) {
            var d;
            a: {
                for (d in a)
                    break a;
                d = void 0
            }
            if (Zi(a) < b)
                return ik(this.c, this.iD, d),
                this.iD = d,
                this.Cz = b,
                !0
        }, a)
    };
    z.TF = function(a, b) {
        z.T.call(this, b);
        this.d = a;
        this.w = null
    }
    ;
    z.UF = function(a, b) {
        a.nt.U(a.o("fyre-login-bar"));
        a.bi.U(a.o("fyre-livecount"));
        a.qq.U(a.o("fyre-comment-count"));
        a.kn && a.kn.U(a.o("fyre-listener-avatars"));
        var c = a.d.Jb;
        z.zx(c, b, a.o("fyre-comment-stream"), a);
        var d = Gx(c, b);
        z.zx(c, 5, a.o("fyre-thread-breakout-stream"), a);
        a.mh.U(a.o("fyre-stream-header"));
        a.d.H.readOnly && z.dk(a.c, "fyre-read-only");
        d.dispatchEvent({
            type: "streamRendered",
            direction: VF.Cp
        });
        a.be = a.o("fyre-editor")
    }
    ;
    z.WF = function(a, b, c) {
        var d = a.d.Jb;
        a.dispatchEvent({
            type: "threadBreakout",
            dt: b,
            Wb: (0,
            z.q)(function() {
                this.mh.ri(!0);
                d.cl(5).Yg(b, c, !0)
            }, a),
            lj: (0,
            z.q)(function() {
                this.mh.ri(!0);
                var a = d.cl(5);
                z.gw(a)
            }, a)
        })
    }
    ;
    var XF = function(a, b, c) {
        z.D.call(this);
        this.ai = a;
        this.zb = b;
        this.pa = c;
        this.Ou = (0,
        z.q)(this.MU, this)
    };
    z.YF = function(a) {
        Hp.call(this, a);
        this.jC = [];
        this.wk = [];
        this.pI = {}
    }
    ;
    var ZF = function(a, b) {
        return {
            Fe: b ? null : a.d.H.Fm.delay,
            OS: !0,
            Y: b || z.Eh("fyre-stream-content", a.kN).children[0],
            eX: !1
        }
    };
    var $F = function(a, b) {
        var c = 0, d, f = b.Fe, g = b.eX ? Gi : Hi, h = a.d.H.Fm.frequency, k = 0, m, r, x = b.Y;
        b.OS || (x = g(x),
        k++);
        for (; x; )
            d = "none" === xl(x.children[0], "display"),
            f ? d || f-- : (m = 0 === k % h,
            d || k++,
            r = x.getAttribute("data-message-id"),
            m && !d && -1 === a.jC.indexOf(r) && (d = a.pI[r],
            dj(a.wk, d, function(a, b) {
                return a.l.get(Vm) > b.l.get(Vm) ? -1 : 1
            }),
            a.jC.push(r),
            c++)),
            x = g(x)
    };
    z.aG = function(a) {
        Hp.call(this, a);
        this.YC = []
    }
    ;
    z.bG = function(a, b, c, d, f) {
        f || a.YC.push(b);
        b.on(b.Ga.dk, c, a);
        b.on(b.Ga.Dm, d || z.n, a);
        b.get(b.k.kf) && c(b.get(b.k.gf))
    }
    ;
    z.cG = function(a) {
        for (var b; b = a.YC.shift(); )
            b.off(null, null, a)
    }
    ;
    var dG = function(a, b) {
        var c = {};
        z.y(Yi, function(d) {
            a[d][b] && (c[d] = a[d][b])
        });
        return c
    };
    z.eG = function(a, b) {
        var c = a.d.Jb;
        z.cG(a);
        var d = c.oh[a.Em]
          , f = d[Hx];
        f && (f.La || f.q());
        d[Bx].removeChild(f);
        d[Dx](f);
        d[Hx] = null;
        a.Em = b;
        return Gx(c, b)
    }
    ;
    var fG = function(a, b, c) {
        xy.call(this, a, b || BB.D(), c)
    };
    var gG = function(a, b, c) {
        fG.call(this, a, c);
        this.Ez = b
    };
    var hG = function() {};
    var iG = function() {};
    var jG = function(a, b) {
        xB.call(this, a || yB.D(), b)
    };
    var kG = function() {
        z.T.call(this);
        this.Ka = null;
        this.SW = {}
    };
    z.lG = function(a, b) {
        AF.call(this, a, b);
        this.wd = null;
        this.Sx = [];
        var c;
        a.content ? (c = a.content,
        c = c.replace(/<\/p>/g, "\n"),
        c = fi(c)) : c = "";
        this.TS = c;
        mG(this, a.content)
    }
    ;
    var mG = function(a, b) {
        if (b) {
            var c = window.document.createElement("div");
            c.innerHTML = b;
            c = Fh("fyre-mention", c) || [];
            z.w(c, function(a) {
                this.Sx.push({
                    kG: a.getAttribute("resource").substr(5),
                    handle: a.getAttribute("data-lf-handle"),
                    Ba: a.getAttribute("href"),
                    prefix: a.innerHTML[0],
                    le: a.getAttribute("data-lf-provider"),
                    da: z.Sc(a).innerHTML
                })
            }, a)
        }
    };
    var nG = function(a, b) {
        z.w(a.Sx, function(a) {
            var d = Jp(a);
            b = b.replace(a.prefix + a.da, d, "g")
        });
        return b
    };
    var oG = function(a, b) {
        b = z.xa(b);
        var c = "";
        z.w(b.split("\n"), function(a) {
            c += z.wa("\x3c%s\x3e%s\x3c/%s\x3e", "p", a, "p")
        });
        var d = nG(a, c);
        return z.yi(d)
    };
    var pG = function(a) {
        z.T.call(this, a);
        this.fg = null
    };
    var qG = function(a, b) {
        if (a.fg = b) {
            var c = a.o("fyre-comment-raw-html");
            if (c && (a.va.Jf(c),
            b)) {
                var d = wi(b)
                  , f = z.Qh(a.va.Ma, d.html);
                a.va.appendChild(c, f);
                Ir(d.script, c)
            }
            z.N(a.c, !0)
        } else
            z.N(a.c, !1),
            z.Nc(a.o("fyre-comment-raw-html"))
    };
    z.rG = function(a, b) {
        AF.call(this, a, b);
        this.cj = this.Z = null;
        this.zs = new pG
    }
    ;
    z.sG = function(a) {
        var b = a.tJ + z.ja(a.cj);
        a.cj.id = b;
        a.Z = new pF(b);
        a.uo();
        a.Wu();
        a.Yr();
        a.Av()
    }
    ;
    var tG = function(a, b) {
        var c = "";
        z.y(b, function(a, b) {
            c += z.wa("%s:%s !important;", b, a)
        });
        uG(a, z.wa("body { %s }", c))
    };
    var uG = function(a, b) {
        var c = a.Z.cb.la()
          , d = c.createElement("style");
        d.setAttribute("type", "text/css");
        d.styleSheet ? d.styleSheet.cssText = b : d.appendChild(c.createTextNode(b));
        var f = c.head;
        f || (f = c.createElement("head"),
        c.appendChild(f));
        f.appendChild(d)
    };
    var vG = function(a, b) {
        var c = a.Z.cb.la();
        z.p(b) && (b = [b]);
        z.w(b, function(a) {
            z.Wf(a, c)
        })
    };
    var wG = function(a) {
        var b = z.pa(a.dispatchEvent, "fyre.v2.editor.EVENTS.LOAD");
        a.p().Ed(a.Z, "loaded", b);
        qF(a.Z)
    };
    z.e = z.uh.prototype;
    z.e.clone = function() {
        return new z.uh(this.x,this.y)
    }
    ;
    z.e.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    z.e.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    z.e.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    z.e.translate = function(a, b) {
        a instanceof z.uh ? (this.x += a.x,
        this.y += a.y) : (this.x += a,
        z.oh(b) && (this.y += b));
        return this
    }
    ;
    z.e.scale = function(a, b) {
        var c = z.oh(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    var xG = {
        wp: "livefyre"
    };
    z.u(z.xh, z.Fd);
    z.xh.prototype.k = {
        vb: "avatar",
        Gi: "custom",
        za: "display_name",
        rp: "handle",
        X: "id",
        Jt: "jid",
        mk: "name",
        bB: "prefix",
        Yb: "profile_url",
        Li: "provider",
        Bg: "reply",
        ua: "type",
        KM: "uid"
    };
    z.xh.prototype.sc = z.Ag;
    z.e = Hh.prototype;
    z.e.clone = function() {
        return new Hh(this.width,this.height)
    }
    ;
    z.e.Pe = z.l(3);
    z.e.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    z.e.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    z.e.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    z.e.scale = function(a, b) {
        var c = z.oh(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    z.pf.prototype.ar = z.K(49, function(a, b, c, d) {
        c = this.Dc(b, z.v.cf + "message/" + a.Sa + "/permalink/", c, d);
        d = {};
        var f = b.get(b.k.ue);
        f && (d.Authorization = (b.kc() ? "lfgtoken " : "lftoken ") + f);
        c.send({
            collection_id: a.Aa
        }, d)
    });
    z.pf.prototype.Dc = z.K(48, function(a, b, c, d, f) {
        var g = new z.Rd(z.v.J.ud + b);
        z.y(f || {}, function(a, b) {
            z.de(g, b, a)
        });
        return new z.Ee({
            ta: c,
            oa: d,
            method: "GET",
            url: g.toString()
        })
    });
    z.Je.prototype.Cd = z.K(47, function() {
        return this.get(z.E.ik)
    });
    z.Je.prototype.eb = z.K(46, function() {
        return this.get(z.E.Od)
    });
    z.e = z.Md.prototype;
    z.e.$w = z.K(45, function() {
        return 1 !== this.get(this.k.ua) || this.Gb() || this.Sc() || this.Zh()
    });
    z.e.Qe = z.K(44, function() {
        return (new z.zd([2, 9])).contains(this.get(this.k.ua))
    });
    z.e.$n = z.K(43, function() {
        return 12 === this.get(this.k.ua)
    });
    z.e.Zh = z.K(42, function() {
        return 8 === this.get(this.k.ua)
    });
    z.e.Sc = z.K(41, function() {
        var a = 4 === this.get(this.k.ua)
          , b = !!this.id.match(z.Eg);
        return a || b
    });
    z.Ie.prototype.Sc = z.K(40, function() {
        var a = z.Ie.prototype.bu;
        return this.get(this.k.Li) === a.cd
    });
    z.Md.prototype.Gb = z.K(39, function() {
        var a = 3 === this.get(this.k.ua)
          , b = !!this.id.match(z.Dg);
        return a || b
    });
    z.Ie.prototype.Gb = z.K(38, function() {
        var a = z.Ie.prototype.bu;
        return this.get(this.k.Li) === a.dd
    });
    z.Md.prototype.fm = z.K(37, function() {
        var a = z.Nd
          , b = {}
          , c = this.get(this.k.ua);
        b.avatar = this.get(a.vb);
        b.display_name = this.get(a.za);
        b.jid = this.get(a.X);
        b.name = this.get(a.rp);
        b.profile_url = this.get(a.Yb);
        switch (c) {
        case z.Bg.ek:
        case z.Bg.mK:
        case z.Bg.JM:
        case z.Bg.$M:
            b.provider = "livefyre";
            break;
        case z.Bg.dd:
            b.provider = xG.dd;
            break;
        case z.Bg.cd:
            b.provider = xG.cd;
            break;
        case z.Bg.vp:
            b.provider = xG.vp
        }
        b.id = b.display_name + ":" + b.provider;
        return new z.xh(b)
    });
    z.Ie.prototype.fm = z.K(36, function() {
        var a = {}
          , b = this.k
          , c = this.bu;
        a.avatar = this.get(b.vb);
        a.display_name = this.get(b.mk);
        a.handle = this.get(b.mk);
        a.jid = this.get(b.X);
        a.name = this.get(b.mk);
        switch (this.get(this.k.Li)) {
        case c.dd:
            a.provider = xG.dd;
            break;
        case c.cd:
            a.provider = xG.cd
        }
        return new z.xh(a)
    });
    z.Bd.prototype.Tu = z.K(35, function() {});
    z.zd.prototype.Zw = z.K(34, function(a) {
        var b = new z.zd;
        a = z.md(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    });
    z.zd.prototype.me = z.K(33, function(a) {
        a = z.md(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    });
    z.ud.prototype.Uk = z.K(32, function(a, b) {
        if (this === a)
            return !0;
        if (this.Za != a.nb())
            return !1;
        var c = b || zh;
        z.vd(this);
        for (var d, f = 0; d = this.gb[f]; f++)
            if (!c(this.get(d), a.get(d)))
                return !1;
        return !0
    });
    z.zd.prototype.Uk = z.K(31, function(a) {
        return this.nb() == qh(a) && yh(this, a)
    });
    z.e = z.Ec.prototype;
    z.e.Cf = z.K(30, function(a) {
        var b;
        (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!sh(a) || rh(a)) : Bh(a)) && z.C ? (a = z.ga(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        },
        a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    });
    z.e.hb = z.K(29, function() {
        var a = this.Ma;
        return a.parentWindow || a.defaultView
    });
    z.e.Vu = z.K(28, function(a, b, c) {
        var d = this.Ma
          , f = !!c;
        c = ["\x3ctr\x3e"];
        for (var g = 0; g < b; g++)
            c.push(f ? "\x3ctd\x3e\x26nbsp;\x3c/td\x3e" : "\x3ctd\x3e\x3c/td\x3e");
        c.push("\x3c/tr\x3e");
        c = c.join("");
        b = ["\x3ctable\x3e"];
        for (g = 0; g < a; g++)
            b.push(c);
        b.push("\x3c/table\x3e");
        a = d.createElement("DIV");
        a.innerHTML = b.join("");
        return a.removeChild(a.firstChild)
    });
    z.e.r = z.K(27, function(a, b, c) {
        return Ch(this.Ma, arguments)
    });
    z.e.o = z.K(26, function(a, b) {
        return z.Eh(a, b || this.Ma)
    });
    z.e.bg = z.K(25, function(a, b) {
        return Fh(a, b || this.Ma)
    });
    z.e.f = z.K(24, function(a) {
        return Gh(this.Ma, a)
    });
    z.e.la = z.K(23, function() {
        return this.Ma
    });
    z.yc.prototype.So = z.K(22, function(a, b, c) {
        var d = this.subscribe(a, function(a) {
            b.apply(c, arguments);
            this.ap(d)
        }, this);
        return d
    });
    z.D.prototype.h = z.K(21, function() {
        if (this.Fj)
            for (; this.Fj.length; )
                this.Fj.shift()()
    });
    z.yc.prototype.h = z.K(20, function() {
        z.yc.b.h.call(this);
        if (0 != this.qo)
            for (var a = 1; a < this.qe.length; a += 3)
                this.ap(a);
        else
            z.zc(this)
    });
    z.Cc.prototype.h = z.K(19, function() {
        this.parent.Ro[this.name].q();
        delete this.parent.Ro[this.name];
        this.parent = null;
        z.Cc.b.h.call(this)
    });
    z.Me.prototype.h = z.K(18, function() {});
    z.D.prototype.q = z.K(17, function() {
        if (!this.La && (this.La = !0,
        this.h(),
        0 != z.wc)) {
            var a = z.ja(this);
            delete z.xc[a]
        }
    });
    z.Me.prototype.q = z.K(16, function() {
        this.h();
        Ah(this, this.parent.L);
        delete this.L;
        delete this.parent
    });
    z.Ab.prototype.Yi = z.K(15, function(a) {
        for (var b = z.Bb(this).Az, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    });
    z.ud.prototype.Yi = z.K(14, function(a) {
        for (var b = 0; b < this.gb.length; b++) {
            var c = this.gb[b];
            if (z.xd(this.Hb, c) && this.Hb[c] == a)
                return !0
        }
        return !1
    });
    z.ae.prototype.Yi = z.K(13, function(a) {
        var b = this.zd();
        return z.Sa(b, a)
    });
    z.Ab.prototype.nb = z.K(12, function() {
        return this.Ma.cookie ? (this.Ma.cookie || "").split(z.Db).length : 0
    });
    z.yc.prototype.nb = z.K(11, function(a) {
        if (a) {
            var b = this.Qf[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.Qf)
            a += this.nb(b);
        return a
    });
    z.ud.prototype.nb = z.K(10, function() {
        return this.Za
    });
    z.zd.prototype.nb = z.K(9, function() {
        return this.Hb.nb()
    });
    z.ae.prototype.nb = z.K(8, function() {
        z.he(this);
        return this.Za
    });
    z.Qe.prototype.nb = z.K(7, function() {
        var a = 0;
        z.sd(this.Qd(!0), function() {
            a++
        });
        return a
    });
    z.Re.prototype.nb = z.K(6, function() {
        return this.yc.length
    });
    z.Te.prototype.nb = z.K(5, function() {
        return z.Ye(this).attributes.length
    });
    z.Ab.prototype.Pe = z.K(4, function() {
        return !this.Ma.cookie
    });
    Hh.prototype.Pe = z.K(3, function() {
        return !(this.width * this.height)
    });
    z.ud.prototype.Pe = z.K(2, function() {
        return 0 == this.Za
    });
    z.zd.prototype.Pe = z.K(1, function() {
        return this.Hb.Pe()
    });
    z.ae.prototype.Pe = z.K(0, function() {
        z.he(this);
        return 0 == this.Za
    });
    var yG = {
        spam: "FlagSpam",
        offensive: "FlagOffensive",
        "off-topic": "FlagOffTopic",
        disagree: "FlagDisagree"
    };
    z.u(Lh, z.Fd);
    Lh.prototype.sc = z.Ig;
    var di = {
        cd: "facebook",
        yZ: "google",
        Lt: "linkedin",
        wp: "livefyre",
        v_: "openid",
        dd: "twitter",
        vp: "instagram"
    };
    ai.prototype.setKey = function(a, b) {
        b || (b = a.length);
        for (var c = this.F, d = 0; 256 > d; ++d)
            c[d] = d;
        for (var f = 0, d = 0; 256 > d; ++d) {
            var f = f + c[d] + a[d % b] & 255
              , g = c[d];
            c[d] = c[f];
            c[f] = g
        }
        this.Vw = this.Uw = 0
    }
    ;
    var ur = null
      , zG = {
        NONE: 0,
        op: 1,
        A_: 2,
        qp: 3
    }
      , rt = {
        0: 0,
        1: 1,
        2: -1
    }
      , AG = {
        x0: "spam",
        s_: "offensive",
        IY: "disagree",
        t_: "off-topic"
    }
      , BG = {
        OX: "ascending",
        BY: "descending",
        EZ: "highest",
        c_: "lowest",
        Cp: "new",
        u_: "old"
    }
      , Yi = {
        CX: "added",
        SL: "removed",
        Lp: "updated"
    }
      , CG = {
        GX: "annotation",
        pp: "featuredmessage",
        RZ: "likedBy",
        q_: "messagetag",
        Od: "moderator",
        wb: "rating",
        $_: "score",
        Gp: "sortOrder",
        L0: "thread_score",
        R0: "tweetMeta",
        Mp: "vote"
    };
    z.u(z.xj, z.Fd);
    z.xj.prototype.k = z.U = {
        xt: "bootstrapUrl",
        Kc: "numVisible",
        xh: "allowGuestComments",
        hf: "editMode",
        vh: "editCommentInterval",
        xm: "featuringEnabled",
        wm: "featuredReaderEnabled",
        X: "id",
        WA: "pages",
        ic: "siteId",
        zh: "networkId",
        sd: "streamType",
        sh: "checksum",
        PA: "__modified__",
        Ht: "headDocument",
        tp: "headIsComplete",
        Uf: "rawHtml",
        sM: "streamHashThreshold",
        zc: "commentsEnabled",
        mp: "enabled",
        Pd: "repliesEnabled",
        df: "archiveInfo",
        up: "hovercardsEnabled",
        kk: "highVelocityMode",
        It: "highVelocityShowCount",
        yp: "mediaDisplay",
        nk: "ratingDimensions",
        qk: "throttleStream",
        Ni: "topContentDisplay",
        vm: "featured_content",
        hZ: "featured_is_complete",
        gZ: "featured_content_count",
        ut: "archiveDeletedComments",
        gp: "archiveEnabled",
        hp: "archiveNumPages",
        zp: "mediaUploadEnabled",
        Yt: "reviewRepliesEnabled",
        Np: "xxHtmlBlob",
        RB: "translationSet",
        WZ: "listener_count",
        jf: "event",
        uY: "comment_text",
        bd: "created",
        ab: "title",
        XZ: "listener_text",
        p_: "message_class",
        a_: "login_types",
        fL: "loggedout",
        Zb: "source",
        Ji: "nestLevel",
        eL: "loggedin",
        hL: "logo",
        wh: "followers",
        tL: "message",
        Bm: "premoderated",
        td: "tags",
        URL: "url"
    };
    var yj = {
        I0: 1,
        JA: 2,
        ZK: 3,
        kB: 4
    }
      , DG = {};
    DG[z.U.fL] = !0;
    DG[z.U.jf] = null;
    DG[z.U.hf] = 0;
    DG[z.U.vh] = 5;
    DG[z.U.xm] = !1;
    DG[z.U.wm] = !0;
    DG[z.U.Zb] = null;
    DG[z.U.Ji] = 1E4;
    DG[z.U.Kc] = 0;
    DG[z.U.eL] = !1;
    DG[z.U.zc] = !0;
    DG[z.U.Pd] = !0;
    DG[z.U.sd] = 1;
    DG[z.U.hL] = "";
    DG[z.U.wh] = 0;
    DG[z.U.tL] = "Connecting live stream";
    DG[z.U.X] = null;
    DG[z.U.ic] = null;
    DG[z.U.Bm] = !1;
    DG[z.U.WA] = [];
    DG[z.U.xt] = "";
    DG[z.U.Kc] = 0;
    DG[z.U.sM] = 6E8;
    DG[z.U.qk] = !1;
    DG[z.U.nk] = ["default"];
    DG[z.U.vm] = null;
    DG[z.U.gp] = !1;
    DG[z.U.hp] = 0;
    DG[z.U.zp] = !1;
    DG[z.U.Np] = null;
    z.e = z.xj.prototype;
    z.e.sc = DG;
    z.e.Un = z.l(50);
    z.e.Dd = function() {
        return this.get(this.k.sd) === this.du.JA
    }
    ;
    z.e.ah = function() {
        return this.get(this.k.sd) === this.du.ZK
    }
    ;
    z.e.Oq = function() {
        return this.get(this.k.wm)
    }
    ;
    z.u(z.Aj, z.D);
    z.e = z.Aj.prototype;
    z.e.T = null;
    z.e.h = function() {
        z.Aj.b.h.call(this);
        if (this.Mu) {
            var a = this.T;
            delete a.sb;
            a.sb = a.aH;
            delete a.aH;
            delete this.Mu
        }
        this.T.q();
        delete this.T;
        this.u && this.u.q()
    }
    ;
    z.e.subscribe = function() {
        this.T.subscribe.apply(this.T, arguments)
    }
    ;
    z.e.So = function() {
        this.T.So.apply(this.T, arguments)
    }
    ;
    z.e.O = function() {
        this.La || this.T.O.apply(this.T, arguments)
    }
    ;
    var ir = ["lf_comment", "lf-content"];
    z.u(Bj, z.D);
    var Cj = "changeCollection"
      , Ij = "getCollection"
      , Jj = "getCommentCount"
      , Lj = "getOpts"
      , Kj = "isFollowing"
      , Dj = "remove"
      , Ej = "stop"
      , Gj = "on"
      , Fj = "resume";
    Bj.prototype.Qu = function() {}
    ;
    Bj.prototype[Cj] = Bj.prototype.Qu;
    Bj.prototype.Fv = function() {}
    ;
    Bj.prototype[Jj] = Bj.prototype.Fv;
    Bj.prototype.Cd = function() {}
    ;
    Bj.prototype[Kj] = Bj.prototype.Cd;
    Bj.prototype.remove = function() {}
    ;
    Bj.prototype[Dj] = Bj.prototype.remove;
    Bj.prototype.stop = function() {}
    ;
    Bj.prototype[Ej] = Bj.prototype.stop;
    Bj.prototype.Ps = function() {}
    ;
    Bj.prototype[Fj] = Bj.prototype.Ps;
    Bj.prototype.on = function() {}
    ;
    Bj.prototype[Gj] = Bj.prototype.on;
    Bj.prototype.bind = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this);
        c.unshift(a || z.n);
        return z.q.apply(this, c)
    }
    ;
    Bj.prototype.bind = Bj.prototype.bind;
    Bj.prototype.Mv = function() {}
    ;
    Bj.prototype[Lj] = Bj.prototype.Mv;
    Bj.prototype.h = function() {
        Bj.b.h.call(this);
        delete this[Cj];
        delete this[Dj];
        delete this[Ej];
        delete this[Fj];
        delete this[Gj];
        delete this.off
    }
    ;
    z.u(Nj, z.Fd);
    var Oj = {
        TX: "author_name",
        VX: "author_url",
        GJ: "description",
        BZ: "height",
        Ii: "html",
        lf: "link",
        rd: "provider_name",
        J_: "provider_url",
        w0: "source_url",
        cu: "state",
        z0: "strategy",
        GB: "thumbnail_height",
        rk: "thumbnail_url",
        HB: "thumbnail_width",
        ab: "title",
        ua: "type",
        URL: "url",
        VERSION: "version",
        f1: "width"
    }
      , Xj = {
        rM: 0,
        AJ: 1
    }
      , Qj = {
        Tt: "photo",
        UB: "video",
        WL: "rich",
        lf: "link",
        ERROR: "error",
        UM: "video_promise"
    }
      , Tj = new z.zd("twitter youtube imgur vine wikipedia soundcloud livefyrefilepicker".split(" "))
      , EG = {
        yJ: "CNET",
        cd: "Facebook",
        PK: "LivefyreRawHTML",
        wp: "Livefyre",
        v0: "SoundCloud",
        dd: "Twitter",
        g1: "Wikipedia",
        bN: "YouTube"
    }
      , Uj = new z.zd(["bskyb"])
      , Vj = function() {
        var a = Oj
          , b = {};
        b[EG.cd] = function(b) {
            return FG.test(b[a.URL])
        }
        ;
        b[EG.yJ] = null;
        return b
    }()
      , FG = /^https?:\/\/www\.facebook\.com\/(photo\.php|[^\/]*\/photos)/
      , Sj = /https?:\/\/media.fyre.co/;
    z.u(Yj, z.qf);
    Yj.prototype.Cj = function(a) {
        var b = this.jb;
        (b = z.Oa(a.jb, function(a) {
            return !mh(b, function(b) {
                return z.id(b.attributes, a.attributes, [])
            })
        })) && this.add(b)
    }
    ;
    z.u(ak, z.Fd);
    var fs;
    ak.prototype.k = fs = {
        pY: "channelId",
        Rz: "createdAt",
        GJ: "description",
        jZ: "type",
        iZ: "feedSource",
        X: "id",
        lf: "link",
        OL: "pubDate",
        ab: "title",
        Q0: "transformer"
    };
    var rk = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    var sk = /#(.)(.)(.)/
      , nk = /^#(?:[0-9a-f]{3}){1,2}$/i
      , tk = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    var zk = !z.C || z.lb(9)
      , Sk = !z.C || z.lb(9)
      , GG = z.C && !z.B("9");
    !z.J || z.B("528");
    z.H && z.B("1.9b") || z.C && z.B("8") || z.G && z.B("9.5") || z.J && z.B("528");
    z.H && !z.B("8") || z.C && z.B("9");
    uk.prototype.h = function() {}
    ;
    uk.prototype.q = function() {}
    ;
    uk.prototype.stopPropagation = function() {
        this.mi = !0
    }
    ;
    uk.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.EH = !1
    }
    ;
    var HG = z.C ? "focusin" : "DOMFocusIn";
    wk[" "] = z.n;
    z.u(xk, uk);
    var Ak = [1, 4, 2];
    z.e = xk.prototype;
    z.e.Zg = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (z.H) {
                var f;
                a: {
                    try {
                        wk(d.nodeName);
                        f = !0;
                        break a
                    } catch (g) {}
                    f = !1
                }
                f || (d = null)
            }
        } else
            "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = z.J || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = z.J || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Px = z.jg ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.Sb = a;
        a.defaultPrevented && this.preventDefault()
    }
    ;
    z.e.stopPropagation = function() {
        xk.b.stopPropagation.call(this);
        this.Sb.stopPropagation ? this.Sb.stopPropagation() : this.Sb.cancelBubble = !0
    }
    ;
    z.e.preventDefault = function() {
        xk.b.preventDefault.call(this);
        var a = this.Sb;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        GG)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    z.e.JP = function() {
        return this.Sb
    }
    ;
    z.e.h = function() {}
    ;
    var Ck = "closure_listenable_" + (1E6 * Math.random() | 0)
      , Ek = 0;
    Gk.prototype.add = function(a, b, c, d, f) {
        var g = a.toString();
        a = this.lc[g];
        a || (a = this.lc[g] = [],
        this.$o++);
        var h = Ik(a, b, d, f);
        -1 < h ? (b = a[h],
        c || (b.iq = !1)) : (b = new Dk(b,this.src,g,!!d,f),
        b.iq = c,
        a.push(b));
        return b
    }
    ;
    Gk.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.lc))
            return !1;
        var f = this.lc[a];
        b = Ik(f, b, c, d);
        return -1 < b ? (Fk(f[b]),
        z.Ua(f, b),
        0 == f.length && (delete this.lc[a],
        this.$o--),
        !0) : !1
    }
    ;
    Gk.prototype.me = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.lc)
            if (!a || c == a) {
                for (var d = this.lc[c], f = 0; f < d.length; f++)
                    ++b,
                    Fk(d[f]);
                delete this.lc[c];
                this.$o--
            }
        return b
    }
    ;
    Gk.prototype.wn = function(a, b, c, d) {
        a = this.lc[a.toString()];
        var f = -1;
        a && (f = Ik(a, b, c, d));
        return -1 < f ? a[f] : null
    }
    ;
    var Nk = "closure_lm_" + (1E6 * Math.random() | 0)
      , Wk = {}
      , Qk = 0
      , Zk = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    z.u($k, z.D);
    $k.prototype[Ck] = !0;
    z.e = $k.prototype;
    z.e.Yq = function() {
        return this.Ox
    }
    ;
    z.e.kh = function(a) {
        this.Ox = a
    }
    ;
    z.e.addEventListener = function(a, b, c, d) {
        Jk(this, a, b, c, d)
    }
    ;
    z.e.removeEventListener = function(a, b, c, d) {
        Uk(this, a, b, c, d)
    }
    ;
    z.e.dispatchEvent = function(a) {
        var b, c = this.Yq();
        if (c)
            for (b = []; c; c = c.Yq())
                b.push(c);
        var c = this.nN
          , d = a.type || a;
        if (z.p(a))
            a = new uk(a,c);
        else if (a instanceof uk)
            a.target = a.target || c;
        else {
            var f = a;
            a = new uk(d,c);
            z.A(a, f)
        }
        var f = !0, g;
        if (b)
            for (var h = b.length - 1; !a.mi && 0 <= h; h--)
                g = a.currentTarget = b[h],
                f = al(g, d, !0, a) && f;
        a.mi || (g = a.currentTarget = c,
        f = al(g, d, !0, a) && f,
        a.mi || (f = al(g, d, !1, a) && f));
        if (b)
            for (h = 0; !a.mi && h < b.length; h++)
                g = a.currentTarget = b[h],
                f = al(g, d, !1, a) && f;
        return f
    }
    ;
    z.e.h = function() {
        $k.b.h.call(this);
        this.ee && this.ee.me(void 0);
        this.Ox = null
    }
    ;
    z.e.e = function(a, b, c, d) {
        return this.ee.add(String(a), b, !1, c, d)
    }
    ;
    z.e.Ed = function(a, b, c, d) {
        return this.ee.add(String(a), b, !0, c, d)
    }
    ;
    z.e.Fa = function(a, b, c, d) {
        return this.ee.remove(String(a), b, c, d)
    }
    ;
    z.e.wn = function(a, b, c, d) {
        return this.ee.wn(String(a), b, c, d)
    }
    ;
    z.u(bl, $k);
    var cl = 0;
    bl.prototype.Ve = function() {
        this.ae("begin")
    }
    ;
    bl.prototype.nd = function() {
        this.ae("end")
    }
    ;
    bl.prototype.ae = function(a) {
        this.dispatchEvent(a)
    }
    ;
    z.u(dl, $k);
    z.e = dl.prototype;
    z.e.enabled = !1;
    z.e.Ca = null;
    z.e.setInterval = function(a) {
        this.zb = a;
        this.Ca && this.enabled ? (this.stop(),
        this.start()) : this.Ca && this.stop()
    }
    ;
    z.e.MW = function() {
        if (this.enabled) {
            var a = z.qa() - this.qx;
            0 < a && a < .8 * this.zb ? this.Ca = this.em.setTimeout(this.Ju, this.zb - a) : (this.Ca && (this.em.clearTimeout(this.Ca),
            this.Ca = null),
            this.dispatchEvent(IG),
            this.enabled && (this.Ca = this.em.setTimeout(this.Ju, this.zb),
            this.qx = z.qa()))
        }
    }
    ;
    z.e.start = function() {
        this.enabled = !0;
        this.Ca || (this.Ca = this.em.setTimeout(this.Ju, this.zb),
        this.qx = z.qa())
    }
    ;
    z.e.stop = function() {
        this.enabled = !1;
        this.Ca && (this.em.clearTimeout(this.Ca),
        this.Ca = null)
    }
    ;
    z.e.h = function() {
        dl.b.h.call(this);
        this.stop();
        delete this.em
    }
    ;
    var IG = "tick";
    z.u(fl, z.D);
    z.e = fl.prototype;
    z.e.fc = 0;
    z.e.h = function() {
        fl.b.h.call(this);
        this.stop();
        delete this.ai;
        delete this.pa
    }
    ;
    z.e.start = function(a) {
        this.stop();
        this.fc = el(this.Ou, z.ba(a) ? a : this.zb)
    }
    ;
    z.e.stop = function() {
        this.Bf() && z.s.clearTimeout(this.fc);
        this.fc = 0
    }
    ;
    z.e.Bv = function() {
        this.stop();
        this.Ge()
    }
    ;
    z.e.Bf = function() {
        return 0 != this.fc
    }
    ;
    z.e.Ge = function() {
        this.fc = 0;
        this.ai && this.ai.call(this.pa)
    }
    ;
    var il = {}
      , jl = null;
    z.u(nl, bl);
    z.e = nl.prototype;
    z.e.Xe = 0;
    z.e.play = function(a) {
        if (a || this.F == cl)
            this.Xe = 0,
            this.coords = this.Oo;
        else if (1 == this.F)
            return !1;
        hl(this);
        this.startTime = a = z.qa();
        -1 == this.F && (this.startTime -= this.duration * this.Xe);
        this.endTime = this.startTime + this.duration;
        this.Xe || this.Ve();
        this.ae("play");
        -1 == this.F && this.ae("resume");
        this.F = 1;
        var b = z.ja(this);
        b in il || (il[b] = this);
        kl();
        ml(this, a);
        return !0
    }
    ;
    z.e.stop = function(a) {
        hl(this);
        this.F = cl;
        a && (this.Xe = 1);
        ol(this, this.Xe);
        this.ae("stop");
        this.nd()
    }
    ;
    z.e.pause = function() {
        1 == this.F && (hl(this),
        this.F = -1,
        this.ae("pause"))
    }
    ;
    z.e.h = function() {
        this.F == cl || this.stop(!1);
        this.ae("destroy");
        nl.b.h.call(this)
    }
    ;
    z.e.ho = function() {
        this.ae("animate")
    }
    ;
    z.e.ae = function(a) {
        this.dispatchEvent(new pl(a,this))
    }
    ;
    z.u(pl, uk);
    z.e = sl.prototype;
    z.e.clone = function() {
        return new sl(this.top,this.right,this.bottom,this.left)
    }
    ;
    z.e.contains = function(a) {
        return this && a ? a instanceof sl ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    z.e.expand = function(a, b, c, d) {
        z.ia(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += b,
        this.bottom += c,
        this.left -= d);
        return this
    }
    ;
    z.e.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    z.e.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    z.e.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    z.e.translate = function(a, b) {
        a instanceof z.uh ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        z.oh(b) && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    z.e.scale = function(a, b) {
        var c = z.oh(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    }
    ;
    z.e = tl.prototype;
    z.e.clone = function() {
        return new tl(this.left,this.top,this.width,this.height)
    }
    ;
    z.e.Zw = function(a) {
        var b = Math.max(this.left, a.left)
          , c = Math.min(this.left + this.width, a.left + a.width);
        if (b <= c) {
            var d = Math.max(this.top, a.top);
            a = Math.min(this.top + this.height, a.top + a.height);
            if (d <= a)
                return this.left = b,
                this.top = d,
                this.width = c - b,
                this.height = a - d,
                !0
        }
        return !1
    }
    ;
    z.e.contains = function(a) {
        return a instanceof tl ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }
    ;
    z.e.Tv = function() {
        return new Hh(this.width,this.height)
    }
    ;
    z.e.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    z.e.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    z.e.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    z.e.translate = function(a, b) {
        a instanceof z.uh ? (this.left += a.x,
        this.top += a.y) : (this.left += a,
        z.oh(b) && (this.top += b));
        return this
    }
    ;
    z.e.scale = function(a, b) {
        var c = z.oh(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    }
    ;
    var Tl = z.H ? "MozUserSelect" : z.J ? "WebkitUserSelect" : null
      , am = {
        thin: 2,
        medium: 4,
        thick: 6
    }
      , JG = /[^\d]+$/
      , ps = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    z.u(bm, nl);
    z.e = bm.prototype;
    z.e.xg = z.n;
    z.e.Pr = function() {
        z.ba(this.qg) || (this.qg = Il(this.element));
        return this.qg
    }
    ;
    z.e.ho = function() {
        this.xg();
        bm.b.ho.call(this)
    }
    ;
    z.e.nd = function() {
        this.xg();
        bm.b.nd.call(this)
    }
    ;
    z.e.Ve = function() {
        this.xg();
        bm.b.Ve.call(this)
    }
    ;
    z.u(z.cm, bm);
    z.cm.prototype.xg = function() {
        this.element.style.height = Math.round(this.coords[0]) + "px"
    }
    ;
    z.u(z.dm, bm);
    z.dm.prototype.xg = function() {
        Pl(this.element, this.coords[0])
    }
    ;
    z.dm.prototype.show = function() {
        this.element.style.display = ""
    }
    ;
    z.dm.prototype.yb = function() {
        this.element.style.display = "none"
    }
    ;
    z.u(z.em, z.dm);
    z.em.prototype.Ve = function() {
        this.show();
        z.em.b.Ve.call(this)
    }
    ;
    z.em.prototype.nd = function() {
        this.yb();
        z.em.b.nd.call(this)
    }
    ;
    z.u(z.fm, z.dm);
    z.fm.prototype.Ve = function() {
        this.show();
        z.fm.b.Ve.call(this)
    }
    ;
    z.e = z.gm.prototype;
    z.e.append = function(a) {
        a instanceof z.gm && (a = a.element);
        z.ea(this.element) ? z.w(this.element, function(b) {
            z.Mc(b, a)
        }) : z.Mc(this.element, a);
        return this
    }
    ;
    z.e.rO = function(a) {
        if (0 === arguments.length)
            lm(this, "style");
        else {
            var b = [], c;
            for (c in a)
                a.hasOwnProperty(c) && b.push(c + ":" + a[c] + ";");
            lm(this, "style", b.join(""))
        }
    }
    ;
    z.e.empty = function() {
        z.Nc(this.element);
        return this
    }
    ;
    z.e.yb = function() {
        im(this.element, function(a) {
            a.style.display = "none"
        });
        return this
    }
    ;
    z.e.ol = function(a) {
        if (0 === arguments.length)
            return this.element.innerHTML;
        this.element.innerHTML = a;
        return this
    }
    ;
    z.e.Jf = function() {
        z.Nc(this.element);
        return this
    }
    ;
    z.e.getParent = function() {
        return new z.gm(this.element.parentNode)
    }
    ;
    z.e.children = z.gm.prototype.ec = function() {
        return z.Pa(z.Qc(this.element), z.gm)
    }
    ;
    z.e.replace = function(a) {
        Ji(a, this.element);
        this.element = a;
        return this
    }
    ;
    z.e.remove = function() {
        im(this.element, function(a) {
            z.Oc(a)
        })
    }
    ;
    z.e.show = function(a) {
        a ? this.rO({
            display: a
        }) : im(this.element, function(a) {
            z.N(a, !0)
        });
        return this
    }
    ;
    z.e.tl = function() {
        return !z.Ql(this.element)
    }
    ;
    var um, xm = {};
    um = {
        Yz: ["BC", "AD"],
        Xz: ["Before Christ", "Anno Domini"],
        RA: "JFMAMJJASOND".split(""),
        BB: "JFMAMJJASOND".split(""),
        QA: "January February March April May June July August September October November December".split(" "),
        AB: "January February March April May June July August September October November December".split(" "),
        qB: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        DB: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        ZB: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        FB: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        sB: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        EB: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        BL: "SMTWTFS".split(""),
        CB: "SMTWTFS".split(""),
        rB: ["Q1", "Q2", "Q3", "Q4"],
        dB: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        Fz: ["AM", "PM"],
        At: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        fu: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        wY: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        pK: 6,
        ZM: [5, 6],
        qK: 5
    };
    um = {
        Yz: ["BC", "AD"],
        Xz: ["Before Christ", "Anno Domini"],
        RA: "JFMAMJJASOND".split(""),
        BB: "JFMAMJJASOND".split(""),
        QA: "January February March April May June July August September October November December".split(" "),
        AB: "January February March April May June July August September October November December".split(" "),
        qB: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        DB: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        ZB: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        FB: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        sB: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        EB: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        BL: "SMTWTFS".split(""),
        CB: "SMTWTFS".split(""),
        rB: ["Q1", "Q2", "Q3", "Q4"],
        dB: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        Fz: ["AM", "PM"],
        At: ["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"],
        fu: ["HH:mm:ss v", "HH:mm:ss z", "HH:mm:ss", "HH:mm"],
        YX: {
            Md: "M/d",
            MMMMd: "MMMM d",
            MMMd: "MMM d"
        },
        pK: 0,
        ZM: [5, 6],
        qK: 3
    };
    var tm = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
    qm.prototype.format = function(a, b) {
        var c = b ? 6E4 * (a.getTimezoneOffset() - b.D1(a)) : 0
          , d = c ? new Date(a.getTime() + c) : a
          , f = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (f = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
        for (var c = [], g = 0; g < this.qs.length; ++g) {
            var h = this.qs[g].text;
            1 == this.qs[g].type ? c.push(wm(h, a, d, f, b)) : c.push(h)
        }
        return c.join("")
    }
    ;
    var Cm = {
        minutesAgo: "{$num} minute ago",
        minutesAgoPlural: "{$num} minutes ago",
        inMinutes: "in {$num} minute",
        inMinutesPlural: "in {$num} minutes",
        hoursAgo: "{$num} hour ago",
        hoursAgoPlural: "{$num} hours ago",
        inHours: "in {$num} hour",
        inHoursPlural: "in {$num} hours",
        daysAgo: "{$num} day ago",
        daysAgoPlural: "{$num} days ago",
        inDays: "in {$num} day",
        inDaysPlural: "in {$num} days"
    };
    var cn, Om, Ym, Km, Lm, an, dn, Qm, Pm, Wm, Nm, Vm, Mm, en, Um, $m, Hm, Tm;
    z.u(z.Em, z.Fd);
    z.Zm = "annotations";
    cn = "generator";
    Om = "is_featured";
    Ym = "linkback";
    z.Jm = "vis";
    Km = "lastVis";
    Lm = "collection";
    z.Xm = "likes";
    an = "attachments";
    dn = "descendentCount";
    Qm = "ancestorId";
    z.Rm = "parentId";
    Pm = "sortOrder";
    z.Gm = "author";
    Wm = "title";
    Nm = "transport";
    z.Sm = "authorId";
    z.bn = "bodyHtml";
    Vm = "createdAt";
    Mm = "event";
    en = "feedEntry";
    Um = "id";
    $m = "mentions";
    Hm = "source";
    Tm = "updatedAt";
    z.It = {
        jm: z.Zm,
        yA: cn,
        zm: Om,
        VZ: Ym,
        Uf: "rawHtml",
        Kb: z.Jm,
        HA: Km,
        Nd: Lm,
        QK: z.Xm,
        OK: "level",
        NM: "updatedBy",
        ef: an,
        rm: dn,
        hK: "expanding",
        HK: "hasBeenExpanded",
        Pd: "repliesEnabled",
        fp: Qm,
        Ki: z.Rm,
        hB: "replaces",
        oM: "socialMsgId",
        Gp: Pm,
        g0: "shareModel",
        qc: z.Gm,
        td: "tags",
        ab: Wm,
        Kp: Nm,
        JX: "approvable",
        $X: "awaiting_approval",
        qd: z.Sm,
        Jc: z.bn,
        zc: "comments_enabled",
        zJ: "conv",
        bd: Vm,
        AY: "deleted",
        TY: "elapsed_time",
        jf: Mm,
        nK: en,
        BA: "has_replies",
        KK: "hidden",
        X: Um,
        FA: "imported",
        OA: $m,
        Od: "moderator",
        w_: "sort_order",
        y_: "sort_order_reverse",
        D_: "permissionScope",
        SL: "removed",
        X_: "replies",
        Bg: "reply",
        f0: "shareLink",
        Zb: Hm,
        eu: "targetId",
        N0: "time_interval",
        O0: "time_interval_length",
        ua: "type",
        Lp: Tm,
        VERSION: "version"
    };
    z.Em.prototype.k = z.It;
    z.Em.prototype.sc = function() {
        var a = {};
        a[z.Zm] = {};
        a[z.Zm].moderator = !1;
        a[z.Zm].socialMsgId = null;
        a[an] = new Yj;
        a[z.Gm] = new z.Md;
        a.comments_enabled = !0;
        a[dn] = 0;
        a.elapsed_time = 0;
        a.expanding = !1;
        a.hasBeenExpanded = !1;
        a[Om] = !1;
        a.level = 1;
        a[z.Xm] = [];
        a[$m] = new z.qf([]);
        a[z.Rm] = "";
        a.permissionScope = 0;
        a.replaces = "";
        a.replies = 0;
        a.repliesEnabled = !0;
        a.tags = [];
        a.time_interval_length = 1E3;
        a.type = "livefyre";
        a.version = 1;
        a[z.Jm] = 1;
        return a
    }
    ;
    z.Yr = z.Em.prototype.Kb = zG;
    z.e = z.Em.prototype;
    z.e.$t = {
        cd: 1,
        dd: 2,
        Lt: 4
    };
    z.e.Gb = function() {
        var a = this.get(this.k.Zb);
        return z.Sa([1, 2, 7, 20], a)
    }
    ;
    z.e.Sc = function() {
        var a = this.get(this.k.Zb);
        return z.Sa([3, 6, 23], a)
    }
    ;
    z.e.Qe = function() {
        return 13 === this.get(this.k.Zb)
    }
    ;
    z.e.Yh = function() {
        return this.get(this.k.zm)
    }
    ;
    z.e.Hp = [z.bn, z.Rm, "rawHtml"];
    z.e.pu = function(a) {
        a = z.ea(a) ? a : [a];
        var b = this.get("tags");
        z.w(a, function(a) {
            b.push(a)
        });
        this.set("tags", b)
    }
    ;
    z.e.wV = function(a) {
        a = z.ea(a) ? a : [a];
        var b = this.get("tags");
        z.w(a, function(a) {
            z.Ta(b, a)
        });
        this.set("tags", b)
    }
    ;
    z.e.qv = function(a) {
        return a.toLowerCase()
    }
    ;
    z.e.EC = z.Jd(function(a, b, c) {
        var d = {};
        d.added = z.ga(a) ? a : null;
        d.removed = z.ga(b) ? b : null;
        d.updated = z.ga(c) ? c : null;
        return d
    });
    z.e.Cj = function(a, b) {
        var c = a.get(z.Jm);
        !z.ba(c) && a.set(z.Jm, this.get(z.Jm));
        c = a.get(an);
        this.get(an).Cj(c);
        z.Em.b.Cj.call(this, a, b)
    }
    ;
    z.e.ka = function() {
        return wn(this, this.get(z.Jm))
    }
    ;
    z.e.Pv = function() {
        var a = Oj, b = this.get(an), c, d;
        return (b = mh(b.jb, function(b) {
            c = b.get(a.rd) === EG.PK;
            return (d = b.get(a.ua) === Qj.WL) && c
        })) ? b.get(a.Ii) : null
    }
    ;
    z.e.Or = function() {
        return !1
    }
    ;
    z.u(z.xn, z.Fd);
    z.xn.prototype.k = z.An = {
        qc: "author",
        X: "id",
        Vf: "value"
    };
    var KG;
    z.u(z.yn, z.Em);
    KG = {
        bk: "body",
        se: "helpfulness",
        wb: "rating",
        pk: "subparts",
        ab: "title",
        Jp: "totalHelpfulness",
        Oi: "votes"
    };
    z.A(KG, z.It);
    z.O = KG;
    z.yn.prototype.k = z.O;
    z.yn.prototype.Hp = [z.O.pk, z.O.ab, z.O.wb];
    z.hj(z.yn.prototype.Hp, z.Em.prototype.Hp);
    z.e = z.yn.prototype;
    z.e.sc = function() {
        var a = z.yn.b.sc.call(this);
        a[z.O.rm] = 0;
        a[z.O.se] = 0;
        a[z.O.wb] = {
            "default": -1
        };
        a[z.O.pk] = [];
        a[z.O.ab] = "";
        a[z.O.Jp] = 0;
        a[z.O.Oi] = new z.qf([]);
        return a
    }
    ;
    z.e.ru = function(a) {
        this.get(z.O.Oi).add(a)
    }
    ;
    z.e.xH = function(a) {
        this.get(z.O.Oi).remove(a)
    }
    ;
    z.e.NI = function(a) {
        var b = this.get(z.O.Oi);
        z.w(a, function(a) {
            var d = b.get(a.id);
            d && d.Cj(a)
        })
    }
    ;
    z.e.Bw = function(a) {
        if ("updated"in a) {
            var b = {}
              , c = this.get(z.O.Nd).get(z.U.nk)
              , d = a.updated || [];
            z.w(c, function(a, c) {
                b[a] = d[c] || 0
            });
            this.set(z.O.wb, b)
        }
    }
    ;
    z.e.vI = function(a, b) {
        var c = new z.xn, d = b.author, f = b.value, g;
        g = a.get(d) ? a.get(d) : a.get(z.F.id);
        c.set(z.An.X, d);
        c.set(z.An.qc, g);
        c.set(z.An.Vf, f);
        return c
    }
    ;
    z.e.Kb = zG;
    z.e.$t = {
        cd: 1,
        dd: 2,
        Lt: 4
    };
    z.e.Or = function() {
        return !0
    }
    ;
    z.u(En, z.D);
    z.e = En.prototype;
    z.e.Yw = null;
    z.e.h = function() {
        En.b.h.call(this);
        this.Tb.q()
    }
    ;
    z.e.on = function(a, b, c) {
        this.Tb.subscribe(a, b || z.n, c)
    }
    ;
    z.e.HU = function() {
        this.Tb.sb("initialRenderComplete")
    }
    ;
    z.e.tU = function(a) {
        this.Tb.sb("commentCountUpdated", a)
    }
    ;
    z.e.xU = function(a) {
        var b = a.content;
        if (!b.replaces) {
            a = {
                authorId: b[z.Sm],
                bodyHtml: b[z.bn],
                id: b[Um],
                parent: b[z.Rm]
            };
            var c = b[z.O.ab];
            (b = (b[z.O.jm] || {}).rating) && (a.rating = b);
            c && (a.title = c);
            this.Tb.sb("commentPosted", a)
        }
    }
    ;
    z.e.vU = function(a) {
        var b = a.get(LG.UA);
        a = {
            targetId: a.get(LG.eu),
            type: a.get(LG.xA),
            notes: z.ea(b) ? b[0] : b
        };
        this.Tb.sb("commentFlagged", a)
    }
    ;
    z.e.wU = function(a) {
        this.Tb.sb("commentLiked", Fn(a))
    }
    ;
    z.e.yU = function(a) {
        var b = a.get(z.It.$t)
          , c = a.$t;
        this.Tb.sb("commentShared", {
            targetId: a.id,
            sharedToFacebook: 0 < (b & c.cd),
            sharedToTwitter: 0 < (b & c.dd)
        })
    }
    ;
    z.e.zU = function(a) {
        this.Tb.sb("commentVoted", Fn(a))
    }
    ;
    z.e.uU = function(a) {
        this.Tb.sb("commentFeatured", Fn(a))
    }
    ;
    z.e.XG = function(a, b) {
        this.Tb.sb("userFollowed", {
            id: a,
            optIn: !z.wj(b)
        })
    }
    ;
    z.e.YG = function(a, b) {
        this.Tb.sb("userUnfollowed", {
            id: a,
            optOut: !z.wj(b)
        })
    }
    ;
    z.e.QU = function(a) {
        (a.following ? this.XG : this.YG).call(this, a.authorId, !1)
    }
    ;
    z.e.OU = function() {
        var a = z.F.k
          , a = {
            avatar: z.F.get(a.vb),
            displayName: z.F.get(a.za),
            id: z.F.id,
            isModerator: z.F.eb()
        };
        this.Tb.sb("userLoggedIn", a)
    }
    ;
    z.e.PU = function() {
        this.Tb.sb("userLoggedOut")
    }
    ;
    z.e.KU = function() {
        this.Tb.sb("showMore")
    }
    ;
    z.u(z.Gn, z.D);
    z.e = z.Gn.prototype;
    z.e.Qu = function(a) {
        this.nz();
        Hn(this, a);
        In(this)
    }
    ;
    z.e.Ke = function() {
        return this.bb.u.v()
    }
    ;
    z.e.Cd = function(a) {
        return this.bb.u.Cd(a)
    }
    ;
    z.e.Fv = function() {
        var a = this.bb.u.v();
        return a.get(a.k.Kc)
    }
    ;
    z.e.Iv = function() {
        Kn(this);
        return this.kj ? this.kj : this.kj = new Bj(this)
    }
    ;
    z.e.on = function(a, b, c) {
        if (this.Tb)
            this.Tb.on(a, b, c)
    }
    ;
    z.e.remove = function() {
        this.q()
    }
    ;
    z.e.h = function() {
        z.Gn.b.h.call(this);
        var a = z.v;
        a.J = z.v.Sz;
        a.Ee = !1;
        a.fi = "livefyre.com";
        a.Zc = "livefyre.com"
    }
    ;
    z.e.nz = function() {
        z.Ln(this)
    }
    ;
    z.e.Ps = function() {
        this.ak.Rj();
        this.ak.yW()
    }
    ;
    z.e.stop = function() {
        this.ak.BW();
        this.ak.gz()
    }
    ;
    var MG;
    z.ca(z.Mn);
    MG = new z.zd(["desktop", "mobile", "tablet"]);
    z.NG = {
        NX: "articleId",
        WX: "authDelegate",
        XX: "authPageReload",
        zX: "actionButtons",
        FX: "animations",
        KX: "appName",
        fY: "betaBanner",
        jY: "bsMode",
        kY: "browserType",
        DY: "disableAvatars",
        lY: "callback",
        sh: "checksum",
        qY: "collectionMeta",
        xY: "datetimeFormat",
        GY: "disableThirdPartyAnalytics",
        UY: "el",
        jL: "maxVisible",
        KZ: "initialNumVisible",
        LZ: "initialNumVisibleLegacy",
        READ_ONLY: "readOnly",
        d0: "shareDelegate",
        p0: "signed",
        ic: "siteId",
        A0: "stream",
        Z0: "userRatingInHovercard",
        NY: "editorCss",
        HX: "anonymousFlaggingEnabled",
        mZ: "flaggingNoteEnabled",
        CZ: "hiddenActions",
        h1: "XX_UseSeamlessEditor",
        VY: "enableAddLink",
        EY: "disableCollectionUpdates",
        FY: "disableIE8Shim",
        Y_: "replyShowMoreInitial",
        BX: "ad",
        XY: "enableHovercards",
        YY: "enableMediaUpload",
        ZY: "enableQueuing",
        eZ: "expandMedia",
        Ji: "nestLevel",
        Pd: "repliesEnabled",
        Ni: "topContentDisplay",
        wm: "featuredReaderEnabled",
        D0: "strings",
        JY: "userPrivacyMaskDelegate",
        KY: "userPrivacyVideoWhitelist"
    };
    z.Mn.prototype.DJ = {
        fJ: "absoluteFormat",
        uL: "minutesUntilAbsoluteTime"
    };
    z.Mn.prototype.Rn = function(a) {
        var b = {};
        b.Jm = a.articleId;
        var c = a.authDelegate;
        c && (b.o1 = c);
        if (c = a.authPageReload || z.Qf && z.ba(z.s.fyre.sp))
            b.BN = c;
        b.zC = a.bsMode ? !0 : !1;
        c = a.XX_UseSeamlessEditor;
        b.i1 = c ? c : !1;
        if (c = a.callback)
            b.ia = c;
        if (c = a.checksum)
            b.Ek = c;
        if (c = a.collectionMeta)
            b.OC = c;
        var d = a.datetimeFormat
          , c = {};
        if (z.p(d))
            c.fC = d;
        else if (z.ga(d) && (c.VU = d),
        z.ia(d)) {
            var f = this.DJ
              , g = d[f.fJ];
            g && (c.fC = g);
            if (d = d[f.uL])
                c.TT = d
        }
        b.Ok = c;
        if (c = a.el)
            b.Kq = c;
        if (c = a.shareDelegate)
            b.VH = c;
        c = a.signed;
        null != c && (b.aI = c);
        if (c = a.disableAvatars || !1)
            b.Qa = c;
        b.readOnly = a.readOnly || !1;
        if (c = a.userRatingInHovercard)
            b.oX = c;
        if (c = a.editorCss)
            b.hv = c;
        b.af = a.siteId;
        b.Wk = Nn(a.actionButtons);
        c = a.anonymousFlaggingEnabled;
        b.Fg = z.wj(c) ? c : !0;
        c = a.flaggingNoteEnabled;
        b.Cv = z.wj(c) ? c : !0;
        b.jl = a.hiddenActions || [];
        b.v1 = a.disableThirdPartyAnalytics || !1;
        b.Xh = a.initialNumVisible || null;
        b.SF = a.initialNumVisibleLegacy || b.Xh || null;
        c = a.browserType || null;
        z.p(c) && MG.contains(c) && (z.Qf = "desktop" !== c,
        z.jh = "mobile" === c);
        c = a.enableAddLink;
        z.wj(c) && (b.iv = c);
        (c = a.ad) && z.ga(c.delegate) && (b.Fm = {
            delay: 10,
            delegate: z.n,
            frequency: 10
        },
        z.A(b.Fm, c));
        c = a.nestLevel;
        z.oh(c) && (b.dU = c);
        c = a.enableMediaUpload;
        z.wj(c) && (b.JD = c);
        c = a.expandMedia;
        z.wj(c) && (b.RD = c);
        c = a.enableHovercards;
        z.wj(c) && (b.ID = c);
        c = a.enableQueuing;
        z.wj(c) && (b.KD = c);
        c = a.repliesEnabled;
        z.wj(c) && (b.hy = c);
        c = a.topContentDisplay;
        z.oh(c) && (b.AI = c);
        c = a.featuredReaderEnabled;
        z.wj(c) && (b.Oq = c);
        b.vD = a.disableCollectionUpdates || !1;
        b.vO = a.disableIE8Shim || !1;
        "stream"in a ? (d = a.stream,
        c = {},
        z.oh(d.catchup) && (c.PN = Math.min(240, 10 * Math.round(d.catchup / 10))),
        z.oh(d.delay) && (d = d.delay,
        0 < d && (c.Fe = 1E3 * d))) : c = {};
        b.stream = c;
        z.wj(a.animations) && (b.uD = !a.animations);
        z.Qf && (b.uD = !0);
        b.Ms = !1;
        if (c = a.replyShowMoreInitial)
            b.Ms = !0,
            b.zH = c;
        c = a.appName;
        z.p(c) && (b.appName = c);
        c = a.strings;
        z.ia(c) && (b.j = c);
        c = a.userPrivacyMaskDelegate || (window.Livefyre || {}).userPrivacyMaskDelegate;
        z.ga(c) && (z.v.doNotTrack.delegate = c);
        z.v.doNotTrack.uX = a.userPrivacyVideoWhitelist || (window.Livefyre || {}).userPrivacyVideoWhitelist || [];
        return b
    }
    ;
    z.u(z.On, z.rf);
    var Yn = {};
    z.On.prototype.send = function(a) {
        this.tz ? this.tz.send(a) : this.xy.push(a)
    }
    ;
    z.On.prototype.IU = function(a) {
        var b = this.d.u.v();
        z.Mh(b, z.U.X, z.pa(this.GC, a), this);
        b.id && this.GC(a)
    }
    ;
    var OG;
    OG = window.map = {
        1: "comment-component",
        2: "blog-component",
        3: "chat-component",
        4: "review-component"
    };
    z.On.prototype.GC = function(a) {
        var b = this.d.u.v();
        this.tz = new a({
            appName: this.d.H.appName,
            collectionId: b.get(z.U.X),
            env: z.v.Zc || "livefyre.com",
            network: b.get(z.U.zh),
            siteId: b.get(z.U.ic),
            type: "App",
            name: OG[b.get(z.U.sd)],
            version: "3.0.0",
            el: window.document.getElementById(this.d.H.Kq)
        });
        Yn = a.ActivityStreamsVocabulary || {};
        z.w(this.xy, this.send, this);
        this.xy = []
    }
    ;
    Qn.prototype.transform = function() {
        throw Error("Must override");
    }
    ;
    z.u(Rn, Qn);
    Rn.prototype.transform = function(a) {
        var b = {}
          , c = a.bc;
        c instanceof z.Em || (c = z.Fm(c));
        a = c.get(cn);
        b.type = "Content";
        b.id = c.get(Um);
        b.content = c.get(z.bn);
        b.t1 = a && a.id || "livefyre.com";
        b.Yh = c.Yh();
        b.J1 = c.get(z.Rm) || "";
        b.Dh = c.get(an) || [];
        return b
    }
    ;
    z.u(Sn, Rn);
    Sn.prototype.transform = function(a) {
        a = Sn.b.transform.call(this, a);
        a.type = "PostMessage";
        return a
    }
    ;
    z.u(Tn, Qn);
    Tn.prototype.transform = function(a) {
        return {
            href: a.href,
            type: "Link"
        }
    }
    ;
    z.u(Un, Qn);
    Un.prototype.transform = function(a) {
        return {
            ls: a.ls,
            type: "Option"
        }
    }
    ;
    var Wn = [{
        types: "ClickProfileEdit CommentNotifierDisplay CommentNotifierDismiss CommentNotifierClick FollowCollection Init Load ProfileView RequestMore ShareFacebook ShareOnPostClick ShareTwitter UnfollowCollection View".split(" "),
        Zo: null
    }, {
        types: ["Post"],
        Zo: Sn
    }, {
        types: "CollapseReplies ExpandReplies FacebookUserSubscribe FlagCancel FlagClick FlagDisagree FlagOffensive FlagOffTopic FlagSpam Like Posted Share TwitterLikeClick TwitterReplyClick TwitterRetweetClick TwitterUserFollow Unlike".split(" "),
        Zo: Rn
    }, {
        types: ["ShareURL"],
        Zo: Tn
    }, {
        types: ["SortStream"],
        Zo: Un
    }];
    var yt = function(a) {
        function b(b) {
            this.name = a;
            this.message = b
        }
        z.u(b, Error);
        return b
    }("CommentCharacterLimitReached");
    var PG;
    PG = {
        ff: "commentCountLabel",
        om: "commentCountLabelPlural",
        Am: "commentCountLabelZero",
        YK: "liveblogPostCountLabel",
        KA: "liveblogPostCountLabelPlural",
        GL: "liveblogPostCountLabelZero",
        Nz: "commentNotifier",
        Oz: "commentNotifierPlural",
        WK: "liveblogNotifier",
        XK: "liveblogNotifierPlural",
        IA: "listenerCount",
        Mt: "listenerCountPlural",
        VK: "listenerProfile",
        TK: "listenerAvatar",
        za: "displayName",
        HJ: "displayNameGuest",
        hM: "signIn",
        jM: "signInGuest",
        uB: "signOut",
        OJ: "editProfile",
        yL: "modQ",
        EL: "notificationSettings",
        lM: "siteAdmin",
        iM: "signInAriaLabel",
        kM: "signOutAriaLabel",
        RM: "userMenuAriaLabel",
        VM: "viewProfileAriaLabel",
        PJ: "editProfileAriaLabel",
        zL: "modqAriaLabel",
        mM: "siteAdminAriaLabel",
        XA: "postButton",
        YA: "postAsButton",
        ZA: "postEditButton",
        ML: "postEditAsButton",
        NL: "postEditCancelButton",
        $A: "postReplyButton",
        aB: "postReplyAsButton",
        LA: "livechatPostButtonLabel",
        bL: "livechatWindowsInstruction",
        $K: "livechatOtherInstruction",
        aL: "livechatPostEditButton",
        eM: "shareText",
        j0: "sharePlaceholderText",
        k0: "shareTextFacebook",
        l0: "shareTextLinkedin",
        m0: "shareTextTwitter",
        MJ: "editorDisabled",
        NJ: "editorDisabledCommunityOwner",
        Gt: "follow",
        LM: "unfollow",
        Nt: "liveblogFollow",
        Ot: "liveblogUnfollow",
        nJ: "backToHotThreads",
        vt: "backToComments",
        EA: "sortHotThreads",
        Dp: "sortNewest",
        Ep: "sortOldest",
        zB: "sortSeparator",
        QB: "sortTopComments",
        Ip: "streamSorting",
        iJ: "archiveHeaderTitle",
        jJ: "archiveShowMore",
        Bh: "showMore",
        gM: "showMoreLiveblog",
        pM: "sponsored",
        RL: "refresh",
        SA: "newComment",
        TA: "newComments",
        DL: "newReply",
        CL: "newReplies",
        LK: "hotThreadsContentNotFoundMsg",
        IM: "topCommentsContentNotFoundMsg",
        LL: "permaLinkNotFoundMsg",
        tM: "streamRefreshMsg",
        wM: "threadBreakoutButton",
        te: "likeButton",
        MM: "unlikeButton",
        hf: "editButton",
        SY: "editTooltip",
        Bg: "replyButton",
        jB: "replyButtonSingular",
        iB: "replyButtonPlural",
        TZ: "likesSingular",
        SZ: "likesPlural",
        AL: "moreButton",
        km: "banUserButton",
        th: "deleteButton",
        ym: "flagButton",
        sK: "flagDefaultSelectOption",
        sA: "flagOffensiveButton",
        uA: "flagSpamButton",
        tA: "flagOfftopicButton",
        qA: "flagDisagreeButton",
        nm: "bozoButton",
        um: "featureButton",
        pp: "unfeatureButton",
        Cg: "shareButton",
        sJ: "banUserTooltip",
        FJ: "deleteCommentTooltip",
        rK: "flagCommentTooltip",
        yK: "flagOffensiveCommentTooltip",
        AK: "flagSpamCommentTooltip",
        zK: "flagOfftopicCommentTooltip",
        tK: "flagDisagreeCommentTooltip",
        dM: "shareCommentTooltip",
        wJ: "bozoCommentTooltip",
        lK: "featureCommentTooltip",
        kK: "featuredCommentTooltip",
        MK: "hovercardViewProfile",
        sL: "menuBackBtn",
        rJ: "banTitle",
        pJ: "banConfirmation",
        qJ: "banConfirmButton",
        oJ: "banCancelButton",
        XB: "voteTitle",
        XM: "voteReplyTitle",
        YM: "voteUpvote",
        WM: "voteDownvote",
        Ft: "flagSpam",
        Dt: "flagOffensive",
        Ct: "flagDisagree",
        Et: "flagOffTopic",
        wA: "flagTitle",
        BK: "flagSubtitle",
        uK: "flagEmail",
        vK: "flagEmailPlaceholder",
        wK: "flagNotes",
        xK: "flagNotesPlaceholder",
        oA: "flagConfirmationMessage",
        pA: "flagConfirmButton",
        nA: "flagCancelButton",
        vA: "flagSuccessMsg",
        o_: "mentionTitle",
        pL: "mentionMenuTitle",
        nL: "mentionFacebookConnect",
        oL: "mentionFacebookFetching",
        qL: "mentionTwitterConnect",
        rL: "mentionTwitterFetching",
        l_: "mentionSubtitleFacebook",
        m_: "mentionSubtitleTwitter",
        mL: "mentionDefaultText",
        i_: "mentionConfirmButton",
        g_: "mentionCancelButton",
        n_: "mentionSuccessMsg",
        k_: "mentionErrorNoneSelected",
        j_: "mentionErrorGeneral",
        fM: "shareTitle",
        c0: "shareButtonText",
        e0: "shareLabel",
        h0: "sharePermalink",
        i0: "loadingPermalink",
        OB: "commentTombstone",
        Od: "moderator",
        xL: "moderatorEditTimestamp",
        KL: "pendingComment",
        K_: "quickProfileTooltip",
        CK: "fromFacebook",
        EK: "fromTwitter",
        DK: "fromInstagram",
        FK: "fromWeibo",
        MB: "toggleCollapse",
        PL: "readMore",
        TL: "replyShowMore",
        UL: "replyShowMorePlural",
        FM: "timeJustNow",
        GM: "timeMinutesAgo",
        HM: "timeMinutesAgoPlural",
        zM: "timeHoursAgo",
        AM: "timeHoursAgoPlural",
        xM: "timeDaysAgo",
        yM: "timeDaysAgoPlural",
        IB: "timeInMinutes",
        JB: "timeInMinutesPlural",
        KB: "timeInMinutesShort",
        DM: "timeInHours",
        EM: "timeInHoursPlural",
        BM: "timeInDays",
        CM: "timeInDaysPlural",
        fZ: "featuredCommentsTitleSing",
        jK: "featuredCommentsTitlePlural",
        iK: "featuredCommentsTag",
        SJ: "errorAuthError",
        $z: "errorCommentsNotAllowed",
        WJ: "errorEditTrashNotAllowed",
        aZ: "errorDoNotTrack",
        aA: "errorDuplicate",
        UJ: "errorEditApprovedNotAllowed",
        VJ: "errorEditDuplicate",
        bA: "errorEditNotAllowed",
        dA: "errorEmpty",
        XJ: "errorFlagNotSelected",
        gA: "errorInsufficientPermissions",
        cZ: "errorInvalidChar",
        ZJ: "errorLikeOwnComment",
        YJ: "errorGuestLiked",
        aK: "errorMalformed",
        tm: "errorMaxChars",
        bZ: "errorExpired",
        cA: "errorEditTimeExceeded",
        dZ: "MultipleMediaNotAllowedError",
        bK: "errorMediaNotAvailable",
        iA: "errorShowMore",
        $J: "errorMaintenance",
        EJ: "errorDefault",
        BJ: "customHtmlDialogTitle"
    };
    z.QG = {
        commentCountLabel: "%s comment",
        commentCountLabelPlural: "%s comments",
        commentCountLabelZero: "%s comments",
        liveblogPostCountLabel: "post",
        liveblogPostCountLabelPlural: "posts",
        liveblogPostCountLabelZero: "posts",
        commentNotifier: "New Comment",
        commentNotifierPlural: "New Comments",
        liveblogNotifier: "New Post",
        liveblogNotifierPlural: "New Posts",
        listenerCount: "person listening",
        listenerCountPlural: "people listening",
        listenerProfile: "profile",
        listenerAvatar: "avatar",
        signIn: "Sign in",
        signInGuest: "Sign in or Post as Guest",
        displayName: "%s",
        displayNameGuest: "%s \x3cem\x3e(guest)\x3c/em\x3e",
        signOut: "Sign out",
        editProfile: "Edit profile",
        modQ: "ModQ",
        notificationSettings: "Notification settings",
        siteAdmin: "Studio",
        signInAriaLabel: "Sign in",
        signOutAriaLabel: "Sign out",
        userMenuAriaLabel: "Toggle user menu",
        viewProfileAriaLabel: "View profile",
        editProfileAriaLabel: "Edit profile",
        modqAriaLabel: "Moderation queue",
        siteAdminAriaLabel: "Studio",
        postButton: "Post comment",
        postAsButton: "Post comment as...",
        postEditButton: "Edit comment",
        postEditAsButton: "Edit comment as...",
        postEditCancelButton: "Cancel",
        postReplyButton: "Post comment",
        postReplyAsButton: "Post comment as...",
        livechatPostButtonLabel: "Post",
        livechatWindowsInstruction: "Press control+enter to post",
        livechatOtherInstruction: "Press command+enter to post",
        livechatPostEditButton: "Edit",
        shareText: 'I just left a comment in "{collectionTitle}"',
        shareTextFacebook: "",
        shareTextLinkedin: "",
        shareTextTwitter: "",
        editorDisabled: "This conversation is currently closed to new comments.",
        editorDisabledCommunityOwner: "Notice: Livefyre Community Comments will become read-only starting March 9, 2017 and no longer available as of April 6, 2017. To export your comments, please visit, www.livefyre.com/installation/site/export/. For more information, please see https://docs.adobe.com/docs/en/aem/livefyre-announcements.html.",
        follow: "+ Follow",
        unfollow: "- Unfollow",
        liveblogFollow: "Follow Liveblog",
        liveblogUnfollow: "Unfollow Liveblog",
        backToComments: "Back to Newest",
        backToHotThreads: "Back to Hot Threads",
        sortHotThreads: "Hot Threads",
        sortNewest: "Newest",
        sortOldest: "Oldest",
        sortSeparator: " | ",
        sortTopComments: "Top Comments",
        streamSorting: "Loading",
        archiveHeaderTitle: "From the Archive",
        archiveShowMore: "Show More",
        showMore: "Show More Comments",
        showMoreLiveblog: "Show More Posts",
        sponsored: "Sponsored",
        refresh: "Refresh",
        newComment: "New Comment",
        newComments: "New Comments",
        newReply: "new reply",
        newReplies: "new replies",
        hotThreadsContentNotFoundMsg: "There are not enough threads yet.",
        topCommentsContentNotFoundMsg: "There are not enough likes yet.",
        permaLinkNotFoundMsg: "This comment is no longer visible.",
        streamRefreshMsg: "See what's new.",
        threadBreakoutButton: "Show entire Thread",
        likeButton: "Like",
        unlikeButton: "Unlike",
        replyButton: "Reply",
        replyButtonSingular: "Reply",
        replyButtonPlural: "Replies",
        likesSingular: "Like",
        likesPlural: "Likes",
        editButton: "Edit",
        editTooltip: "Edit",
        featureButton: "Feature",
        unfeatureButton: "Unfeature",
        moreButton: "More",
        voteTitle: "Was this comment helpful?",
        voteReplyTitle: "Was this reply helpful?",
        voteUpvote: "Yes",
        voteDownvote: "No",
        flagButton: "Flag",
        flagOffensiveButton: "Offensive",
        flagSpamButton: "Spam",
        flagOfftopicButton: "Off-Topic",
        flagDisagreeButton: "Disagree",
        banUserButton: "Ban user",
        deleteButton: "Delete",
        bozoButton: "Bozo",
        flagConfirmationMessage: "Flag %s's comment as %s?",
        banUserTooltip: "Ban user",
        deleteCommentTooltip: "Delete",
        flagCommentTooltip: "Flag",
        flagOffensiveCommentTooltip: "Offensive",
        flagSpamCommentTooltip: "Spam",
        flagOfftopicCommentTooltip: "Off-Topic",
        flagDisagreeCommentTooltip: "Disagree",
        shareCommentTooltip: "Share",
        bozoCommentTooltip: "Bozo",
        featureCommentTooltip: "Feature",
        featuredCommentTooltip: "Unfeature",
        shareButton: "Share",
        hovercardViewProfile: "View Full Profile",
        menuBackBtn: "\x3c Back",
        banTitle: "Ban User",
        banConfirmation: "Are you sure you want to ban this user?",
        banConfirmButton: "OK",
        banCancelButton: "Cancel",
        flagSpam: "Spam",
        flagOffensive: "Offensive",
        flagDisagree: "Disagree",
        flagOffTopic: "Off Topic",
        flagDefaultSelectOption: "Select",
        flagTitle: "Flag %s's comment",
        flagSubtitle: "Flag as",
        flagEmail: "Email",
        flagEmailPlaceholder: "you@example.com",
        flagNotes: "Notes",
        flagNotesPlaceholder: "Start typing here...",
        flagConfirmButton: "OK",
        flagCancelButton: "Cancel",
        flagSuccessMsg: "Comment has been flagged.",
        mentionTitle: "Share Mention",
        mentionMenuTitle: "To see and mention your friends",
        mentionFacebookConnect: "Connect to Facebook",
        mentionFacebookFetching: "Fetching Friends...",
        mentionTwitterConnect: "Connect to Twitter",
        mentionTwitterFetching: "Fetching Friends...",
        mentionSubtitleFacebook: "Share Facebook post to:",
        mentionSubtitleTwitter: "Share Tweet to:",
        mentionDefaultText: "I mentioned you in a Livefyre comment!",
        mentionConfirmButton: "OK",
        mentionCancelButton: "Cancel",
        mentionSuccessMsg: "Mentions have been successfully sent.",
        mentionErrorNoneSelected: "You must have at least one mention enabled.",
        mentionErrorGeneral: "Oops! Something went wrong! Livefyre has been alerted.",
        sharePlaceholderText: "What do you think?",
        shareTitle: "Share Comment",
        shareButtonText: "Share",
        shareLabel: "Share on:",
        sharePermalink: "Permalink",
        loadingPermalink: "Loading short url...",
        commentTombstone: "This comment has been deleted",
        moderator: "moderator",
        moderatorEditTimestamp: "Edited by a Moderator",
        pendingComment: "pending",
        quickProfileTooltip: "Quick Profile",
        fromFacebook: "from Facebook",
        fromTwitter: "from Twitter",
        fromInstagram: "from Instagram",
        fromWeibo: "from Weibo",
        toggleCollapse: "Toggle Collapse",
        readMore: "read more",
        replyShowMore: "%s reply",
        replyShowMorePlural: "%s replies",
        timeJustNow: "just now",
        timeMinutesAgo: "minute ago",
        timeMinutesAgoPlural: "minutes ago",
        timeHoursAgo: "hour ago",
        timeHoursAgoPlural: "hours ago",
        timeDaysAgo: "day ago",
        timeDaysAgoPlural: "days ago",
        timeInMinutes: "in %s minute",
        timeInMinutesPlural: "in %s minutes",
        timeInMinutesShort: "%sm",
        timeInHours: "in %s hour",
        timeInHoursPlural: "in %s hours",
        timeInDays: "in %s day",
        timeInDaysPlural: "in %s days",
        featuredCommentsTitlePlural: "Featured Comments",
        featuredCommentsTag: "Featured",
        errorAuthError: "You're not authorized to post a comment on this conversation",
        errorCommentsNotAllowed: "Comments are not allowed on this conversation",
        errorDoNotTrack: "Do Not Track is enabled. If you wish to comment, please disable.",
        errorDuplicate: "As much as you liked your comment, you're not allowed to post it twice.",
        errorEditApprovedNotAllowed: "This comment can no longer be edited.",
        errorEditTrashNotAllowed: "The original comment no longer exists. Please write a new comment.",
        errorEditDuplicate: "You must change the body of the comment when you edit it.",
        errorEditNotAllowed: "You're not allowed to edit comments on this conversation.",
        errorEmpty: "It seems you're attempting to post an empty comment.",
        errorFlagNotSelected: "*Please select a flag type",
        errorInsufficientPermissions: "Insufficient Permissions",
        errorInvalidChar: "It seems you're attempting to post an invalid character.",
        errorLikeOwnComment: "You cannot like your own comment",
        errorGuestLiked: "Sorry, only those with accounts can like content.",
        errorMalformed: "It seems you're attempting to post malformed content.",
        errorMaxChars: "Sorry, your comment is too long. Please edit and try again.",
        errorExpired: "Your session has expired. Please reload the page.",
        errorEditTimeExceeded: "Sorry, your comment editing period has expired.",
        errorShowMore: "There was an error loading more comments.",
        MultipleMediaNotAllowedError: "Your permissions only grant you one media attachment at a time.",
        errorMediaNotAvailable: "Media is no longer visible.",
        errorMaintenance: "We are undergoing maintenance. Please try again soon.",
        errorDefault: "An error has occurred. Please try again.",
        customHtmlDialogTitle: "Add Custom HTML"
    };
    Zn.prototype.get = function(a) {
        var b = this.WI[a];
        return null != b ? b : this.oD[a]
    }
    ;
    Zn.prototype.set = function(a, b) {
        $n(this, a, b, this.WI)
    }
    ;
    Zn.prototype.Vl = function(a, b) {
        $n(this, a, b, this.oD)
    }
    ;
    z.W = new Zn(PG,z.QG);
    z.u(ao, Zn);
    var Y = {
        UK: "listenerMobile",
        cL: "livecountSeparator",
        vB: "sortBy",
        wB: "sortHighestRated",
        xB: "sortLowestRated",
        yB: "sortMostHelpful",
        Fp: "reviewBtn",
        QJ: "editReviewBtn",
        tB: "showReviewBtn",
        lB: "reviewsClosed",
        Hz: "averageRating",
        Jz: "breakdownHeader",
        CA: "helpful",
        JK: "helpfulPlural",
        VA: "outOf",
        gB: "ratingType",
        Vt: "ratingValues",
        eB: "ratingSubpartPlaceholders",
        fB: "ratingSubpartTitles",
        nB: "reviewStreamTitle",
        iu: "wasReviewHelpful",
        YB: "wasReviewHelpfulMobile",
        St: "ownWasReviewHelpful",
        oB: "reviewWasHelpful",
        DA: "helpfulDivider",
        pB: "reviewWasNotHelpful",
        wt: "bodyPlaceholder",
        LB: "titlePlaceholder",
        mB: "reviewsContentNotFoundMsg",
        Zz: "errorAlreadyPosted",
        TJ: "errorDislikeOwnComment",
        Bt: "errorFieldRating",
        eA: "errorFieldReview",
        fA: "errorFieldTitle",
        hA: "errorMissingFields",
        cK: "errorRatingEmpty",
        dK: "errorRatingNotSet",
        eK: "errorRatingNotValid",
        fK: "errorEmptyTitle",
        jA: "errorTitleMaxChars",
        kA: "errorVoteOwnComment"
    };
    z.A(Y, PG);
    z.Z = {};
    z.Z[Y.vt] = "Back to Reviews";
    z.Z[Y.mB] = "This review is no longer visible";
    z.Z[Y.ff] = "LiveReviews\x3cstrong\x3e|\x3c/strong\x3e%s";
    z.Z[Y.om] = "LiveReviews\x3cstrong\x3e|\x3c/strong\x3e%s";
    z.Z[Y.Am] = "LiveReviews\x3cstrong\x3e|\x3c/strong\x3e%s";
    z.Z[Y.Nz] = "New Review";
    z.Z[Y.Oz] = "New Reviews";
    z.Z[Y.IA] = "person listening";
    z.Z[Y.Mt] = "people listening";
    z.Z[Y.UK] = "people";
    z.Z[Y.cL] = "|";
    z.Z[Y.vB] = " ";
    z.Z[Y.wB] = "Highest rating";
    z.Z[Y.xB] = "Lowest rating";
    z.Z[Y.yB] = "Most helpful";
    z.Z[Y.Gt] = "I'm interested";
    z.Z[Y.Fp] = "Write review";
    z.Z[Y.QJ] = "Edit review";
    z.Z[Y.tB] = "Show review";
    z.Z[Y.lB] = "Reviews Closed";
    z.Z[Y.eM] = "I just wrote a review. Check it out!";
    z.Z[Y.Bh] = "Show More";
    z.Z[Y.SA] = "New Review";
    z.Z[Y.TA] = "New Reviews";
    z.Z[Y.Hz] = "Average User Rating";
    z.Z[Y.Jz] = "Rating Breakdown";
    z.Z[Y.CA] = "%s of %s found helpful";
    z.Z[Y.JK] = "%s of %s found helpful";
    z.Z[Y.VA] = "/";
    z.Z[Y.gB] = "star";
    z.Z[Y.Vt] = "Poor Poor Fair Fair Average Average Good Good Excellent Excellent".split(" ");
    z.Z[Y.eB] = [];
    z.Z[Y.fB] = [];
    z.Z[Y.nB] = "";
    z.Z[Y.iu] = "Helpful?";
    z.Z[Y.YB] = "Helpful?";
    z.Z[Y.St] = "Found helpful.";
    z.Z[Y.oB] = "Yes";
    z.Z[Y.DA] = "|";
    z.Z[Y.pB] = "No";
    z.Z[Y.wt] = "Write review...";
    z.Z[Y.XA] = "Post review";
    z.Z[Y.YA] = "Post review as...";
    z.Z[Y.ZA] = "Edit";
    z.Z[Y.$A] = "Post";
    z.Z[Y.aB] = "Post as...";
    z.Z[Y.Cg] = "Share";
    z.Z[Y.LB] = "Title...";
    z.Z[Y.XB] = "Was this review helpful?";
    z.Z[Y.oA] = "Flag %s's review as %s?";
    z.Z[Y.wA] = "Flag %s's review";
    z.Z[Y.vA] = "Review has been flagged.";
    z.Z[Y.mL] = "I mentioned you in a Livefyre review!";
    z.Z[Y.fM] = "Share Review";
    z.Z[Y.Zz] = "You can only post one review.";
    z.Z[Y.SJ] = "You're not authorized to post a review on this conversation";
    z.Z[Y.$z] = "Reviews cannot be posted at this time";
    z.Z[Y.aA] = "As much as you liked your review, you're not allowed to post it twice.";
    z.Z[Y.VJ] = "You must change the body of the review when you edit it.";
    z.Z[Y.bA] = "You're not allowed to edit reviews on this conversation.";
    z.Z[Y.TJ] = "You cannot dislike your own review";
    z.Z[Y.dA] = "It seems you're attempting to post an empty review.";
    z.Z[Y.tm] = "Sorry, your review is too long. Please edit and try again.";
    z.Z[Y.cK] = "You cannot submit an empty rating";
    z.Z[Y.dK] = "All ratings must be set";
    z.Z[Y.eK] = "The rating must be an object";
    z.Z[Y.fK] = "It seems you're attempting to post an empty title";
    z.Z[Y.jA] = "Sorry, your title is too long. Please edit and try again.";
    z.Z[Y.kA] = "You cannot vote on your own review";
    z.Z[Y.cA] = "Sorry, your review editing period has expired.";
    z.Z[Y.iA] = "There was an error loading more reviews.";
    z.Z[Y.hA] = "Please enter a";
    z.Z[Y.Bt] = "star rating";
    z.Z[Y.eA] = "review";
    z.Z[Y.fA] = "title";
    z.V = new ao(Y,z.QG);
    z.V.Vl(z.Z);
    z.u(rn, z.Fd);
    var qn;
    rn.prototype.k = qn = {
        qd: "authorId",
        Nd: "collection",
        ff: "comment",
        gf: "content",
        za: "displayName",
        bM: "services",
        ua: "type",
        URL: "url"
    };
    rn.prototype.sc = function() {
        var a = {};
        a[qn.qd] = null;
        a[qn.Nd] = null;
        a[qn.ff] = null;
        a[qn.gf] = null;
        a[qn.za] = "";
        a[qn.URL] = "";
        a[qn.bM] = new z.zd;
        return a
    }
    ;
    z.C && z.B(8);
    var RG = Ri("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    bo.prototype.Hr = !0;
    bo.prototype.er = function() {
        return this.kz
    }
    ;
    bo.prototype.toString = function() {
        return "Const{" + this.kz + "}"
    }
    ;
    var co = {};
    fo.prototype.Hr = !0;
    var go = {};
    fo.prototype.er = function() {
        return this.Ux
    }
    ;
    var SG = io("")
      , TG = /^[-.%_!# a-zA-Z0-9]+$/;
    jo.prototype.Hr = !0;
    jo.prototype.er = function() {
        return this.Nl
    }
    ;
    jo.prototype.PF = !0;
    jo.prototype.tn = function() {
        return 1
    }
    ;
    var ko = {};
    mo.prototype.PF = !0;
    mo.prototype.tn = function() {
        return this.tD
    }
    ;
    mo.prototype.Hr = !0;
    mo.prototype.er = function() {
        return this.Nl
    }
    ;
    var UG = /^[a-zA-Z0-9-]+$/
      , VG = Ri("action", "cite", "data", "formaction", "href", "manifest", "poster", "src")
      , WG = Ri("link", "script", "style")
      , no = {}
      , Aq = qo("", 0);
    var yo = {}
      , Qo = {}
      , Wo = {}
      , zo = {};
    so.prototype.Sm = null;
    so.prototype.mb = function() {
        return this.content
    }
    ;
    so.prototype.toString = function() {
        return this.content
    }
    ;
    var vo = {};
    z.e = Ao.prototype;
    z.e.Ti = "";
    z.e.set = function(a) {
        this.Ti = "" + a
    }
    ;
    z.e.append = function(a, b, c) {
        this.Ti += a;
        if (null != b)
            for (var d = 1; d < arguments.length; d++)
                this.Ti += arguments[d];
        return this
    }
    ;
    z.e.clear = function() {
        this.Ti = ""
    }
    ;
    z.e.toString = function() {
        return this.Ti
    }
    ;
    var Fo, Go;
    z.u(Co, so);
    Co.prototype.Yd = yo;
    z.u(Do, so);
    Do.prototype.Yd = zo;
    z.Q = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var f = new b(String(a));
            void 0 !== d && (f.Sm = d);
            return f
        }
    }(Co);
    Fo = {};
    Go = {};
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var f = String(a);
            if (!f)
                return "";
            f = new b(f);
            void 0 !== d && (f.Sm = d);
            return f
        }
    }
    )(Co);
    var To = /['()]/g
      , Yo = {
        "\x00": "\x26#0;",
        "\t": "\x26#9;",
        "\n": "\x26#10;",
        "\x0B": "\x26#11;",
        "\f": "\x26#12;",
        "\r": "\x26#13;",
        " ": "\x26#32;",
        '"': "\x26quot;",
        "\x26": "\x26amp;",
        "'": "\x26#39;",
        "-": "\x26#45;",
        "/": "\x26#47;",
        "\x3c": "\x26lt;",
        "\x3d": "\x26#61;",
        "\x3e": "\x26gt;",
        "`": "\x26#96;",
        "\u0085": "\x26#133;",
        "\u00a0": "\x26#160;",
        "\u2028": "\x26#8232;",
        "\u2029": "\x26#8233;"
    }
      , $o = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\x0B": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "\x26": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "\x3c": "\\x3c",
        "\x3d": "\\x3d",
        "\x3e": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    }
      , ap = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "\x3c": "%3C",
        "\x3e": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    }
      , Mo = /[\x00\x22\x27\x3c\x3e]/g
      , cp = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g
      , Ro = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , Xo = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i
      , Uo = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
      , Ko = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , Lo = /</g;
    z.X = {
        Pi: function(a) {
            var b = "";
            a = a.Pi;
            for (var c = a.length, d = 0; d < c; d++)
                b += z.X.action(a[d]);
            return (0,
            z.Q)(b)
        },
        action: function(a) {
            return (0,
            z.Q)(a.Wi ? z.X.mN({
                key: a.key,
                sz: Io("" + (a.value && a.j ? "" + a.j[3] : a.j ? "" + a.j[1] : "" + a.key)),
                QW: Io("" + (a.value && a.j ? "" + a.j[2] : a.j ? "" + a.j[0] : "" + a.key))
            }) : "")
        },
        mN: function(a) {
            return (0,
            z.Q)('\x3ca class\x3d"fyre-' + z.R(a.key) + '-link" title\x3d"' + z.R(a.sz) + '"\x3e\x3cspan\x3e\x3c/span\x3e' + z.P(a.QW) + "\x3c/a\x3e")
        },
        iP: function(a) {
            return (0,
            z.Q)('\x3cdiv class\x3d"fyre-mobile-flag-confirmation"\x3e\x3cspan class\x3d"fyre-flag-' + z.R(a.Ie) + '-confirmation-sprite"\x3e\x3c/span\x3e\x3cdiv\x3e' + z.P(a.message) + "\x3c/div\x3e\x3c/div\x3e")
        },
        NV: function(a) {
            return (0,
            z.Q)(a.my ? '\x3cdiv class\x3d"fyre-retweet-text"\x3e\x3cspan\x3e\x3c/span\x3eRetweeted by \x3ca href\x3d"https://twitter.com/' + z.R(a.my.handle) + '" target\x3d"_blank"\x3e' + z.P(a.my.name) + "\x3c/a\x3e\x3c/div\x3e" : "")
        },
        qC: function(a) {
            return (0,
            z.Q)('\x3cdiv class\x3d"fyre-mod-actions"\x3e\x3ca class\x3d"fyre-mod-deny" href\x3d"#" title\x3d"Deny"\x3e\x3cspan\x3e\x3c/span\x3e\x3c/a\x3e\x3ca class\x3d"fyre-mod-approve" href\x3d"#" title\x3d"Approve"\x3e\x3cspan\x3e\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-pending"\x3e' + z.P(a.j.WU) + "\x3c/div\x3e")
        },
        Xo: function(a) {
            return (0,
            z.Q)('\x3carticle class\x3d"fyre-comment-article" data-message-id\x3d"' + z.R(a.id) + '" data-author-id\x3d"' + z.R(a.Gg) + '" itemtype\x3d"' + z.R(a.j.jG) + '" itemscope\x3d"itemscope"\x3e\x3cdiv class\x3d"fyre-comment-wrapper"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-comment-divider"\x3e' + z.Jo((0,
            z.Q)('\x3ca title\x3d"' + z.R(a.j.wI) + '" class\x3d"fyre-comment-collapse" style\x3d"display: none;"\x3e\x3c/a\x3e\x3cdiv class\x3d"fyre-comment-divider"\x3e\x3c/div\x3e')) + '\x3c/div\x3e\x3cdiv class\x3d"fyre-outer-comment-container"\x3e\x3cdiv class\x3d"fyre-comment-container fyre-comment-replies"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/article\x3e')
        },
        Ms: function(a) {
            return (0,
            z.Q)('\x3cspan class\x3d"fyre-reply-more-toggle"\x3e\x3ca class\x3d"fyre-comment-collapse"\x3e\x3c/a\x3e\x3clabel\x3e' + z.P(a.text) + "\x3c/label\x3e\x3c/span\x3e")
        },
        jO: function() {
            return (0,
            z.Q)('\x3cdiv class\x3d"fyre-comment-wrapper"\x3e\x3c/div\x3e')
        },
        bc: function(a) {
            return (0,
            z.Q)((1 != a.IN ? '\x3cdiv class\x3d"fyre-comment-user" data-from\x3d"' + z.R(a.s.da) + '" data-author-id\x3d"' + z.R(a.s.id) + '"\x3e' + (a.Qa ? "" : z.X.user(a)) + '\x3cdiv class\x3d"fyre-comment-highlight"\x3e\x3c/div\x3e\x3c/div\x3e\x3cheader class\x3d"fyre-comment-head"\x3e' + z.X.AS(a) + "\x3c/header\x3e" : "") + '\x3csection class\x3d"fyre-comment-body"\x3e' + z.X.body(a) + z.X.NV(a) + "\x3c/section\x3e" + (1 != a.IN ? '\x3cfooter class\x3d"fyre-comment-footer"\x3e' + z.Jo(fp()) + "\x3c/footer\x3e" : ""))
        },
        body: function(a) {
            return (0,
            z.Q)('\x3cdiv class\x3d"fyre-comment" itemprop\x3d"text"\x3e\x3c/div\x3e' + (a.eo ? z.X.eo(a) : ""))
        },
        zT: function(a) {
            return (0,
            z.Q)("link" == a.type ? '\x3ca href\x3d"' + z.R(z.S(a.url)) + '" target\x3d"_blank" class\x3d"fyre-content-link"\x3e' + z.P(a.title) + "\x3c/a\x3e" : "photo" == a.type && a.title ? '\x3ch3 class\x3d"fyre-content-title"\x3e' + z.P(a.title) + "\x3c/h3\x3e" : "")
        },
        AT: function(a) {
            return (0,
            z.Q)('\x3ch4 class\x3d"fyre-media-title"\x3e' + z.P(a.title) + "\x3c/h4\x3e")
        },
        Yx: function(a) {
            return (0,
            z.Q)('\x3ca href\x3d"' + z.R(z.S(a.url)) + '" target\x3d"_blank" class\x3d"fyre-read-more"\x3e' + z.P(a.j.Yx) + "\x3c/a\x3e")
        },
        eo: function(a) {
            return (0,
            z.Q)('\x3cdiv class\x3d"fyre-comment-linkback"\x3e\x3cp\x3e\x3cspan class\x3d"fyre-label"\x3eLatest blog post: \x3ca rel\x3d"nofollow" target\x3d"_blank" href\x3d"' + z.R(z.S(a.eo.href)) + '"\x3e' + z.P(a.eo.title) + "\x3c/a\x3e\x3c/span\x3e\x3c/p\x3e\x3c/div\x3e")
        },
        AS: function(a) {
            return (0,
            z.Q)((a.s.kc && !a.s.Ba ? '\x3cspan class\x3d"fyre-comment-username"\x3e\x3cstrong\x3e\x3cspan itemprop\x3d"author"\x3e' + z.P(a.s.da) + "\x3c/span\x3e\x3c/strong\x3e\x3c/span\x3e" : '\x3ca class\x3d"fyre-comment-username"' + (a.s.Ba ? 'href\x3d"' + z.R(z.S(a.s.Ba)) + '" target\x3d"_blank"' : "") + '\x3e\x3cspan itemprop\x3d"author"\x3e' + z.P(a.s.da) + "\x3c/span\x3e\x3c/a\x3e " + (a.s.AO ? '\x3cspan class\x3d"fyre-comment-from-text fyre-comment-username"\x3efrom ' + z.P(a.s.source) + "\x3c/span\x3e" : "")) + (a.s.Gb ? (a.s.bX ? '\x3cspan class\x3d"fyre-twitter-verified"\x3e\x3c/span\x3e' : "") + '\x3ca href\x3d"' + z.R(z.S(a.s.Ba)) + '" class\x3d"fyre-twitter-handle" target\x3d"_blank"\x3e\x3cspan class\x3d"fyre-user-level fyre-user-twitter"\x3e@' + z.P(a.s.$W) + '\x3c/span\x3e\x3ca href\x3d"' + z.R(z.S(a.s.Ba)) + '" class\x3d"fyre-twitter-handle" target\x3d"_blank"\x3e\x3cspan class\x3d"fyre-comment-from-text"\x3e' + z.P(a.j.FP) + "\x3c/span\x3e\x3c/a\x3e\x3c/a\x3e" : "") + (a.s.Sc ? '\x3ca href\x3d"' + z.R(z.S(a.s.Ba)) + '" class\x3d"fyre-facebook-handle" target\x3d"_blank"\x3e\x3cspan class\x3d"fyre-comment-from-text"\x3e' + z.P(a.j.CP) + "\x3c/span\x3e\x3c/a\x3e" : "") + (a.s.Zh ? '\x3ca class\x3d"fyre-instagram-handle"' + (a.s.Ba ? 'href\x3d"' + z.R(z.S(a.s.Ba)) + '" target\x3d"_blank"' : "") + '\x3e\x3cspan class\x3d"fyre-comment-from-text"\x3e' + z.P(a.j.DP) + "\x3c/span\x3e\x3c/a\x3e" : "") + (a.s.$n ? '\x3ca class\x3d"fyre-weibo-handle"' + (a.s.Ba ? 'href\x3d"' + z.R(z.S(a.s.Ba)) + '" target\x3d"_blank"' : "") + '\x3e\x3cspan class\x3d"fyre-comment-from-text"\x3e' + z.P(a.j.GP) + "\x3c/span\x3e\x3c/a\x3e" : "") + (a.XI ? '\x3cspan class\x3d"fyre-comment-from-text"\x3efrom ' + z.P(a.XI) + "\x3c/span\x3e" : "") + z.X.TI(a) + z.Jo(z.jp(a)) + z.Jo(z.lp(a)) + z.Jo(kp(a)) + (a.s.Gb ? '\x3ca href\x3d"https://twitter.com" class\x3d"fyre-social-provider" target\x3d"_blank"\x3e\x3ctime class\x3d"fyre-comment-date"\x3e' + z.P(a.Jk) + "\x3c/time\x3e\x3c/a\x3e" : '\x3cmeta itemprop\x3d"dateCreated" content\x3d"' + z.R(a.vq) + '" /\x3e\x3ci class\x3d"fyre-social-provider"\x3e\x3c/i\x3e\x3ctime class\x3d"fyre-comment-date"\x3e' + z.P(a.Jk) + "\x3c/time\x3e" + (a.TD ? '\x3cimg src\x3d"' + z.R(z.S(a.TD)) + '" class\x3d"fyre-generator-favicon" /\x3e' : "")) + '\x3cspan class\x3d"fyre-comment-archive"\x3e\x3c/span\x3e\x3cdiv class\x3d"fyre-comment-premod"\x3e\x3c/div\x3e' + (a.title ? '\x3ca class\x3d"fyre-comment-title" ' + (a.link ? 'href\x3d"' + z.R(z.S(a.link)) + '" target\x3d"_blank"' : "") + "\x3e" + z.P(a.title) + "\x3c/a\x3e" : "") + '\x3cdiv class\x3d"fyre-flag-list"\x3e\x3c/div\x3e')
        },
        TI: function(a) {
            var b = '\x3cspan class\x3d"fyre-comment-user-rating"\x3e';
            switch (a.s.Bb) {
            case 1:
                b += z.P(a.s.Bb) + "pt";
                break;
            default:
                b += z.P(a.s.Bb) + "pts"
            }
            return (0,
            z.Q)(b + "\x3c/span\x3e")
        },
        user: function(a) {
            return (0,
            z.Q)((a.s.kc && !a.s.Ba ? '\x3cimg src\x3d"' + z.R(z.S(a.s.Lc)) + '" class\x3d"fyre-user-avatar fyre-comment-author" alt\x3d"Avatar for ' + z.R(a.s.da) + '" role\x3d"button" onerror\x3d"javascript:this.src\x3d\'' + z.R(z.bp(a.s.cc)) + "';\" /\x3e" : z.Jo(ip(a))) + '\x3cdiv class\x3d"fyre-comment-socialsync fyre-comment-from-' + z.R(a.type) + '"\x3e\x3c/div\x3e')
        },
        a2: function() {
            return (0,
            z.Q)('\x3cspan class\x3d"fyre-comment-see-more"\x3eSee more\x3c/span\x3e')
        },
        EV: function(a) {
            return (0,
            z.Q)('\x3ca class\x3d"fyre-comment-reply fyre-comment-action-button"\x3e' + z.X.Ls(a) + "\x3c/a\x3e")
        },
        Ls: function(a) {
            return (0,
            z.Q)(a.zq ? 1 == a.zq ? "1 " + z.P(a.j.CV) : z.P(a.zq) + " " + z.P(a.j.BV) : z.P(a.j.DV))
        },
        zO: function(a) {
            return (0,
            z.Q)('\x3cspan class\x3d"fyre-comment-reply-wrapper ' + (a.FS ? "fyre-comment-reply-highlight" : "") + '"\x3e\x3cspan class\x3d"fyre-comment-reply-count"\x3e\x3c/span\x3e\x3cspan class\x3d"fyre-comment-reply-text"\x3e\x3c/span\x3e\x3c/span\x3e')
        },
        pD: function(a) {
            return (0,
            z.Q)('\x3csection class\x3d"fyre-comment-deleted"\x3e\x3cp\x3e' + z.P(a.j.UC) + "\x3c/p\x3e\x3c/section\x3e")
        },
        iX: function(a) {
            return (0,
            z.Q)('\x3cspan class\x3d"fyre-comment-updated"\x3eLast edited ' + z.P(a.iX) + "\x3c/span\x3e")
        },
        Hq: function(a) {
            var b = z.Q
              , c = '\x3ca class\x3d"fyre-comment-edit"\x3e\x3cspan\x3e' + z.P(a.j.Hq);
            if (a.Ue)
                a = "";
            else {
                var d;
                d = a.XS;
                var f = Go["key_a:" + d];
                f || "" == d || (f = Go["key_a:"]);
                d = f ? f : Ho;
                a = " " + d(a)
            }
            return b(c + a + "\x3c/span\x3e\x3c/a\x3e")
        },
        dN: function(a) {
            return (0,
            z.Q)('(\x3cspan class\x3d"fyre-comment-edit-interval"\x3e' + z.P(a.interval) + "\x3c/span\x3e)")
        }
    };
    Eo("default", z.X.dN);
    z.X.mP = function(a) {
        for (var b = '\x3cdiv class\x3d"fyre-modal-container"\x3e\x3cform class\x3d"fyre-modal-flag-form"\x3e\x3clabel class\x3d"fyre-modal-subtitle" for\x3d"flagType"\x3e' + z.P(a.j.FW) + '\x3c/label\x3e\x3cspan class\x3d"fyre-modal-select-error"\x3e' + z.P(a.j.TO) + '\x3c/span\x3e\x3cselect class\x3d"fyre-modal-textarea fyre-modal-flagas" name\x3d"flagType"\x3e\x3coption value\x3d"none" selected\x3d"selected"\x3e' + z.P(a.j.jP) + "\x3c/option\x3e", c = a.tP, d = c.length, f = 0; f < d; f++)
            var g = c[f]
              , b = b + ('\x3coption value\x3d"' + z.R(g.pX) + '"\x3e' + z.P(g.label) + "\x3c/option\x3e");
        b += "\x3c/select\x3e" + (a.iU ? z.X.uP(a) : "") + "\x3c/form\x3e\x3c/div\x3e";
        return (0,
        z.Q)(b)
    }
    ;
    z.X.uP = function(a) {
        return (0,
        z.Q)((a.Gg ? '\x3cinput type\x3d"hidden" name\x3d"authorId" value\x3d"' + z.R(a.Gg) + '" /\x3e' : '\x3clabel class\x3d"fyre-modal-subtitle" for\x3d"email"\x3e' + z.P(a.j.ej) + '\x3c/label\x3e\x3cinput class\x3d"fyre-modal-textfield fyre-modal-email" name\x3d"email" type\x3d"text" placeholder\x3d"' + z.R(a.j.IO) + '"\x3e') + '\x3clabel class\x3d"fyre-modal-subtitle" for\x3d"notes"\x3e' + z.P(a.j.gi) + '\x3c/label\x3e\x3ctextarea name\x3d"notes" class\x3d"fyre-modal-textfield fyre-modal-notes" placeholder\x3d"' + z.R(a.j.jU) + '"\x3e\x3c/textarea\x3e')
    }
    ;
    z.X.KT = function(a) {
        var b = "";
        switch (a.type) {
        case "photo":
            b += '\x3ca href\x3d"' + z.R(z.S(a.url)) + '" target\x3d"_blank"\x3e\x3cimg src\x3d"' + z.R(z.S(a.url)) + '" alt\x3d"' + z.R(a.alt) + '" /\x3e\x3c/a\x3e';
            break;
        case "video":
            b += "\x3ca " + (a.url ? 'href\x3d"' + z.R(z.S(a.url)) + '"' : "") + ' class\x3d"fyre-comment-media-link"\x3e' + (a.ZO ? '\x3cspan class\x3d"fyre-comment-media-title"\x3e' + z.P(a.title) + '\x3c/span\x3e\x3cimg src\x3d"' + z.R(z.S(a.Xj)) + '" alt\x3d"' + z.R(a.title) + '" class\x3d"fyre-comment-media-img"' + (a.rI ? 'width\x3d"' + z.R(a.rI) + '"' : "") + (a.qI ? 'height\x3d"' + z.R(a.qI) + '"' : "") + '/\x3e\x3cspan class\x3d"fyre-comment-media-play"\x3e\x3c/span\x3e' : '\x3cimg src\x3d"' + z.R(z.S(a.Xj)) + '" alt\x3d"' + z.R(a.title) + '" class\x3d"fyre-comment-media-img" /\x3e\x3cdiv class\x3d"fyre-video-play"\x3e\x3c/div\x3e') + "\x3c/a\x3e";
            break;
        case "rich":
            b += '\x3cdiv class\x3d"fyre-rich-media-content"\x3e\x3c/div\x3e';
            break;
        default:
            b += '\x3cdiv class\x3d"fyre-rich-media-content"\x3e' + (a.Xj ? '\x3ca href\x3d"' + z.R(z.S(a.url)) + '" target\x3d"_blank"\x3e\x3cimg src\x3d"' + z.R(z.S(a.Xj)) + '" /\x3e\x3c/a\x3e' : "") + "\x3c/div\x3e"
        }
        return (0,
        z.Q)(b)
    }
    ;
    z.X.zG = function(a) {
        var b = "";
        switch (a.type) {
        case "video":
            b += '\x3cimg src\x3d"' + z.R(z.S(a.Xj)) + '" class\x3d"fyre-video-thumbnail" data-thumb-cid\x3d"' + z.R(a.Ae) + '" alt\x3d"video thumbnail" /\x3e\x3cdiv class\x3d"fyre-video-play"\x3e\x3c/div\x3e';
            break;
        case "placeholder":
            b += '\x3cdiv class\x3d"fyre-media-placeholder fyre-media-placeholder-' + z.R(a.le) + '" data-thumb-cid\x3d"' + z.R(a.Ae) + '" /\x3e';
            break;
        default:
            b += '\x3cimg src\x3d"' + z.R(z.S(a.Xj)) + '" class\x3d"fyre-img-thumb" data-thumb-cid\x3d"' + z.R(a.Ae) + '" alt\x3d"image thumbnail" /\x3e'
        }
        return (0,
        z.Q)(b)
    }
    ;
    z.X.oe = function(a) {
        var b = "";
        switch (a.Jd) {
        case 1:
            b += "1 reply";
            break;
        default:
            b += z.P(a.Jd) + " replies"
        }
        return (0,
        z.Q)(b)
    }
    ;
    z.X.kT = function(a) {
        return (0,
        z.Q)('\x3cspan class\x3d"fyre-comment-like-count"\x3e' + (a.count ? z.P(a.count) : "") + '\x3c/span\x3e\x3ca class\x3d"fyre-comment-like-btn fyre-comment-action-button"\x3e' + z.P(a.j.oG) + "\x3c/a\x3e")
    }
    ;
    z.X.lT = function(a) {
        return (0,
        z.Q)('\x3ca class\x3d"fyre-comment-like-btn fyre-comment-action-button"\x3e' + z.P(a.j.oG) + '\x3c/a\x3e\x3cspan class\x3d"fyre-comment-like-count"\x3e' + (a.count ? z.P(a.count) : "") + "\x3c/span\x3e")
    }
    ;
    z.X.JW = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-thread-breakout"\x3e\x3cspan\x3e' + z.P(a.KW) + "\x3c/span\x3e\x3c/div\x3e")
    }
    ;
    z.X.rT = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-liveblog-top-divider outer"\x3e\x3cdiv class\x3d"fyre-liveblog-top-divider inner"\x3e\x3c/div\x3e\x3c/div\x3e')
    }
    ;
    z.X.qT = function() {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-liveblog-reply-top"\x3e\x3cdiv class\x3d"fyre-liveblog-reply-top-inner"\x3e\x3cdiv class\x3d"fyre-liveblog-reply-top-bg"\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-liveblog-reply-top-arrow"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
    }
    ;
    z.X.q1 = function() {
        return (0,
        z.Q)('\x3cspan class\x3d"fyre-comment-expander"\x3e\x3ca\x3e...Continue Reading\x3c/a\x3e\x3c/span\x3e')
    }
    ;
    z.X.bW = function(a) {
        return (0,
        z.Q)('\x3cdiv class\x3d"fyre-share-component"\x3e' + z.X.action(a) + '\x3cul class\x3d"fyre-share-popover"\x3e\x3cli\x3e\x3ca class\x3d"fyre-share-twitter-link"\x3eTwitter\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca class\x3d"fyre-share-facebook-link"\x3eFacebook\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3cinput class\x3d"fyre-share-permalink" value\x3d"' + z.R(a.XU) + '" /\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e')
    }
    ;
    z.u(qp, z.D);
    var sp = [];
    z.e = qp.prototype;
    z.e.e = function(a, b, c, d) {
        return rp(this, a, b, c, d)
    }
    ;
    z.e.Ed = function(a, b, c, d) {
        return tp(this, a, b, c, d)
    }
    ;
    z.e.Fa = function(a, b, c, d, f) {
        if (z.ea(b))
            for (var g = 0; g < b.length; g++)
                this.Fa(a, b[g], c, d, f);
        else
            c = c || this.handleEvent,
            f = f || this.pa || this,
            c = Kk(c),
            d = !!d,
            b = Bk(a) ? a.wn(b, c, d, f) : a ? (a = Mk(a)) ? a.wn(b, c, d, f) : null : null,
            b && (Vk(b),
            delete this.gb[b.key]);
        return this
    }
    ;
    z.e.me = function() {
        z.y(this.gb, Vk);
        this.gb = {}
    }
    ;
    z.e.h = function() {
        qp.b.h.call(this);
        this.me()
    }
    ;
    z.e.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    z.ca(up);
    up.prototype.gU = 0;
    z.u(z.T, $k);
    z.T.prototype.IS = up.D();
    var wp = null;
    z.e = z.T.prototype;
    z.e.f = function() {
        return this.c
    }
    ;
    z.e.bg = function(a) {
        return this.c ? this.va.bg(a, this.c) : []
    }
    ;
    z.e.o = function(a) {
        return this.c ? this.va.o(a, this.c) : null
    }
    ;
    z.e.p = function() {
        this.Rh || (this.Rh = new qp(this));
        return this.Rh
    }
    ;
    z.e.xc = function(a) {
        if (this == a)
            throw Error("Unable to set parent component");
        if (a && this.Ta && this.fc && Dp(this.Ta, this.fc) && this.Ta != a)
            throw Error("Unable to set parent component");
        this.Ta = a;
        z.T.b.kh.call(this, a)
    }
    ;
    z.e.getParent = function() {
        return this.Ta
    }
    ;
    z.e.kh = function(a) {
        if (this.Ta && this.Ta != a)
            throw Error("Method not supported");
        z.T.b.kh.call(this, a)
    }
    ;
    z.e.R = function() {
        return this.va
    }
    ;
    z.e.dG = z.l(51);
    z.e.r = function() {
        this.c = this.va.createElement("div")
    }
    ;
    z.e.ra = function(a) {
        Bp(this, a)
    }
    ;
    z.e.U = function(a) {
        if (this.aa)
            throw Error("Component already rendered");
        if (a && this.vd(a)) {
            this.ZI = !0;
            var b = z.Fc(a);
            this.va && this.va.la() == b || (this.va = z.Dc(a));
            this.K(a);
            this.m()
        } else
            throw Error("Invalid element to decorate");
    }
    ;
    z.e.vd = function() {
        return !0
    }
    ;
    z.e.K = function(a) {
        this.c = a
    }
    ;
    z.e.m = function() {
        this.aa = !0;
        this.Qc(function(a) {
            !a.aa && a.f() && a.m()
        })
    }
    ;
    z.e.S = function() {
        this.Qc(function(a) {
            a.aa && a.S()
        });
        this.Rh && this.Rh.me();
        this.aa = !1
    }
    ;
    z.e.h = function() {
        this.aa && this.S();
        this.Rh && (this.Rh.q(),
        delete this.Rh);
        this.Qc(function(a) {
            a.q()
        });
        !this.ZI && this.c && z.Oc(this.c);
        this.Ta = this.l = this.c = this.of = this.ma = null;
        z.T.b.h.call(this)
    }
    ;
    z.e.Lf = function(a) {
        this.l = a
    }
    ;
    z.e.G = function(a, b) {
        this.xe(a, this.Cc(), b)
    }
    ;
    z.e.xe = function(a, b, c) {
        if (a.aa && (c || !this.aa))
            throw Error("Component already rendered");
        if (0 > b || b > this.Cc())
            throw Error("Child component index out of bounds");
        this.of && this.ma || (this.of = {},
        this.ma = []);
        if (a.getParent() == this) {
            var d = yp(a);
            this.of[d] = a;
            z.Ta(this.ma, a)
        } else
            Wi(this.of, yp(a), a);
        a.xc(this);
        Zh(this.ma, b, 0, a);
        a.aa && this.aa && a.getParent() == this ? (c = this.Ea(),
        c.insertBefore(a.f(), c.childNodes[b] || null)) : c ? (this.c || this.r(),
        b = this.ld(b + 1),
        Bp(a, this.Ea(), b ? b.c : null)) : this.aa && !a.aa && a.c && a.c.parentNode && 1 == a.c.parentNode.nodeType && a.m()
    }
    ;
    z.e.Ea = function() {
        return this.c
    }
    ;
    z.e.Pr = function() {
        null == this.qg && (this.qg = Il(this.aa ? this.c : this.va.la().body));
        return this.qg
    }
    ;
    z.e.lh = function(a) {
        if (this.aa)
            throw Error("Component already rendered");
        this.qg = a
    }
    ;
    z.e.Cc = function() {
        return this.ma ? this.ma.length : 0
    }
    ;
    z.e.ld = function(a) {
        return this.ma ? this.ma[a] || null : null
    }
    ;
    z.e.Qc = function(a, b) {
        this.ma && z.w(this.ma, a, b)
    }
    ;
    z.e.removeChild = function(a, b) {
        if (a) {
            var c = z.p(a) ? a : yp(a);
            a = Dp(this, c);
            c && a && (z.db(this.of, c),
            z.Ta(this.ma, a),
            b && (a.S(),
            a.c && z.Oc(a.c)),
            a.xc(null))
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    z.e.wo = function(a, b) {
        return this.removeChild(this.ld(a), b)
    }
    ;
    z.e.Jf = function(a) {
        for (var b = []; this.ma && 0 != this.ma.length; )
            b.push(this.wo(0, a));
        return b
    }
    ;
    z.u(Fp, z.T);
    Fp.prototype.r = function() {
        Fp.b.r.call(this);
        var a = this.t();
        this.c.innerHTML = z.X.mP(a)
    }
    ;
    Fp.prototype.t = function() {
        var a = this.tf
          , b = z.Nd;
        return {
            da: this.l.get(z.Gm).get(b.za),
            tP: Gp(this),
            iU: this.vP,
            j: {
                ej: a.get(a.g.uK),
                IO: a.get(a.g.vK),
                TO: a.get(a.g.XJ),
                jP: a.get(a.g.sK),
                gi: a.get(a.g.wK),
                jU: a.get(a.g.xK),
                FW: a.get(a.g.BK)
            }
        }
    }
    ;
    z.u(Hp, z.D);
    Hp.prototype.h = function() {
        Hp.b.h.call(this);
        this.pa && this.pa.q()
    }
    ;
    Hp.prototype.handle = function(a) {
        this.pa || (this.pa = new qp(this));
        this.ge(this.pa, a)
    }
    ;
    Hp.prototype.ge = function() {}
    ;
    var Op;
    z.u(bq, $k);
    var XG = z.C || z.H && z.B("1.9.3");
    z.e = bq.prototype;
    z.e.clientX = 0;
    z.e.clientY = 0;
    z.e.screenX = 0;
    z.e.screenY = 0;
    z.e.hI = 0;
    z.e.iI = 0;
    z.e.deltaX = 0;
    z.e.deltaY = 0;
    z.e.tc = !0;
    z.e.bj = !1;
    z.e.MF = 0;
    z.e.LS = !1;
    z.e.mt = !1;
    z.e.p = function() {
        return this.uc
    }
    ;
    z.e.gc = function(a) {
        this.tc = a
    }
    ;
    z.e.h = function() {
        bq.b.h.call(this);
        Uk(this.handle, ["touchstart", "mousedown"], this.cz, !1, this);
        this.uc.me();
        XG && this.Ma.releaseCapture();
        this.handle = this.target = null
    }
    ;
    z.e.cz = function(a) {
        var b = "mousedown" == a.type;
        if (!this.tc || this.bj || b && !yk(a))
            this.dispatchEvent("earlycancel");
        else {
            dq(a);
            if (0 == this.MF)
                if (this.dispatchEvent(new iq("start",this,a.clientX,a.clientY)))
                    this.bj = !0,
                    a.preventDefault();
                else
                    return;
            else
                a.preventDefault();
            var b = this.Ma
              , c = b.documentElement
              , d = !XG;
            this.uc.e(b, ["touchmove", "mousemove"], this.DR, d);
            this.uc.e(b, ["touchend", "mouseup"], this.Lq, d);
            XG ? (c.setCapture(!1),
            this.uc.e(c, "losecapture", this.Lq)) : this.uc.e(Mi(b), "blur", this.Lq);
            z.C && this.LS && this.uc.e(b, "dragstart", vk);
            this.SV && this.uc.e(this.SV, "scroll", this.JU, d);
            this.clientX = this.hI = a.clientX;
            this.clientY = this.iI = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.mt ? (a = this.target,
            b = a.offsetLeft,
            c = a.offsetParent,
            c || "fixed" != Al(a) || (c = z.Fc(a).documentElement),
            c ? (z.H ? (d = Xl(c),
            b += d.left) : z.lb(8) && !z.lb(9) && (d = Xl(c),
            b -= d.left),
            a = Il(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
            this.deltaX = a;
            this.deltaY = this.target.offsetTop;
            this.Nx = Nh(z.Dc(this.Ma));
            z.qa()
        }
    }
    ;
    z.e.Lq = function(a) {
        this.uc.me();
        XG && this.Ma.releaseCapture();
        if (this.bj) {
            dq(a);
            this.bj = !1;
            var b = fq(this, this.deltaX)
              , c = gq(this, this.deltaY);
            this.dispatchEvent(new iq("end",this,a.clientX,a.clientY,0,b,c))
        } else
            this.dispatchEvent("earlycancel")
    }
    ;
    z.e.DR = function(a) {
        if (this.tc) {
            dq(a);
            var b = (this.mt && cq(this) ? -1 : 1) * (a.clientX - this.clientX)
              , c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.bj) {
                var d = this.hI - this.clientX
                  , f = this.iI - this.clientY;
                if (d * d + f * f > this.MF)
                    if (this.dispatchEvent(new iq("start",this,a.clientX,a.clientY)))
                        this.bj = !0;
                    else {
                        this.La || this.Lq(a);
                        return
                    }
            }
            c = eq(this, b, c);
            b = c.x;
            c = c.y;
            this.bj && this.dispatchEvent(new iq("beforedrag",this,a.clientX,a.clientY,0,b,c)) && (hq(this, a, b, c),
            a.preventDefault())
        }
    }
    ;
    z.e.JU = function(a) {
        var b = eq(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        hq(this, a, b.x, b.y)
    }
    ;
    z.u(iq, uk);
    z.u(jq, $k);
    jq.prototype.handleEvent = function(a) {
        var b = new xk(a.Sb);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    }
    ;
    jq.prototype.h = function() {
        jq.b.h.call(this);
        Vk(this.nT);
        Vk(this.oT);
        delete this.c
    }
    ;
    z.u(kq, $k);
    z.e = kq.prototype;
    z.e.c = null;
    z.e.Lm = !0;
    z.e.tC = null;
    z.e.uC = null;
    z.e.zj = !1;
    z.e.fW = !1;
    z.e.px = -1;
    z.e.mx = -1;
    z.e.Qw = !1;
    z.e.JO = !0;
    z.e.hm = "toggle_display";
    var Ky = {
        vJ: "beforeshow",
        n0: "show",
        uJ: "beforehide",
        Hi: "hide"
    };
    z.e = kq.prototype;
    z.e.yn = function() {
        return this.hm
    }
    ;
    z.e.f = function() {
        return this.c
    }
    ;
    z.e.Cy = function(a) {
        lq(this);
        this.c = a
    }
    ;
    z.e.Eo = function(a) {
        lq(this);
        this.Lm = a
    }
    ;
    z.e.p = function() {
        return this.pa
    }
    ;
    z.e.ka = function() {
        return this.zj
    }
    ;
    z.e.V = function(a) {
        this.Ko && this.Ko.stop();
        this.On && this.On.stop();
        a ? this.Ty() : this.nl()
    }
    ;
    z.e.Fc = z.n;
    z.e.Ty = function() {
        if (!this.zj && this.io()) {
            if (!this.c)
                throw Error("Caller must call setElement before trying to show the popup");
            this.Fc();
            var a = z.Fc(this.c);
            this.Qw && this.pa.e(a, "keydown", this.AU, !0);
            if (this.Lm)
                if (this.pa.e(a, "mousedown", this.PG, !0),
                z.C) {
                    var b;
                    try {
                        b = a.activeElement
                    } catch (c) {}
                    for (; b && "IFRAME" == b.nodeName; ) {
                        try {
                            var d = b.contentDocument || b.contentWindow.document
                        } catch (f) {
                            break
                        }
                        a = d;
                        b = a.activeElement
                    }
                    this.pa.e(a, "mousedown", this.PG, !0);
                    this.pa.e(a, "deactivate", this.OG)
                } else
                    this.pa.e(a, "blur", this.OG);
            "toggle_display" == this.hm ? (this.c.style.visibility = "visible",
            z.N(this.c, !0)) : "move_offscreen" == this.hm && this.Fc();
            this.zj = !0;
            this.px = z.qa();
            this.mx = -1;
            this.Ko ? (Tk(this.Ko, "end", this.Gl, !1, this),
            this.Ko.play()) : this.Gl()
        }
    }
    ;
    z.e.nl = function(a) {
        if (!this.zj || !this.dispatchEvent({
            type: "beforehide",
            target: a
        }))
            return !1;
        this.pa && this.pa.me();
        this.zj = !1;
        this.mx = z.qa();
        this.On ? (Tk(this.On, "end", z.pa(this.ZC, a), !1, this),
        this.On.play()) : this.ZC(a);
        return !0
    }
    ;
    z.e.ZC = function(a) {
        "toggle_display" == this.hm ? this.fW ? el(this.KF, 0, this) : this.KF() : "move_offscreen" == this.hm && (this.c.style.top = "-10000px");
        this.Jx(a)
    }
    ;
    z.e.KF = function() {
        this.c.style.visibility = "hidden";
        z.N(this.c, !1)
    }
    ;
    z.e.io = function() {
        return this.dispatchEvent("beforeshow")
    }
    ;
    z.e.Gl = function() {
        this.dispatchEvent("show")
    }
    ;
    z.e.Jx = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    }
    ;
    z.e.PG = function(a) {
        a = a.target;
        z.Vc(this.c, a) || mq(this, a) || this.uC && !z.Vc(this.uC, a) || 150 > z.qa() - this.px || this.nl(a)
    }
    ;
    z.e.AU = function(a) {
        27 == a.keyCode && this.nl(a.target) && (a.preventDefault(),
        a.stopPropagation())
    }
    ;
    z.e.OG = function(a) {
        if (this.JO) {
            var b = z.Fc(this.c);
            if ("undefined" != typeof window.document.activeElement) {
                if (a = b.activeElement,
                !a || z.Vc(this.c, a) || "BODY" == a.tagName)
                    return
            } else if (a.target != b)
                return;
            150 > z.qa() - this.px || this.nl()
        }
    }
    ;
    z.e.h = function() {
        kq.b.h.call(this);
        this.pa.q();
        Sh(this.Ko);
        Sh(this.On);
        delete this.c;
        delete this.pa;
        delete this.tC
    }
    ;
    z.u(nq, z.T);
    z.e = nq.prototype;
    z.e.Dv = null;
    z.e.pc = !1;
    z.e.Xd = null;
    z.e.Mc = null;
    z.e.Of = null;
    z.e.Bu = !1;
    z.e.P = function() {
        return "goog-modalpopup"
    }
    ;
    z.e.Uq = function() {
        return this.Xd
    }
    ;
    z.e.r = function() {
        nq.b.r.call(this);
        var a = this.f()
          , b = z.xa(this.P()).split(" ");
        Up(a, b);
        Ai(a, !0);
        z.N(a, !1);
        oq(this);
        pq(this)
    }
    ;
    z.e.BH = function() {
        this.Bu = !1
    }
    ;
    z.e.vd = function(a) {
        return !!a && "DIV" == a.tagName
    }
    ;
    z.e.K = function(a) {
        nq.b.K.call(this, a);
        a = z.xa(this.P()).split(" ");
        Up(this.f(), a);
        oq(this);
        pq(this);
        z.N(this.f(), !1)
    }
    ;
    z.e.m = function() {
        this.Mc && Ph(this.Mc, this.f());
        Ph(this.Xd, this.f());
        nq.b.m.call(this);
        Li(this.Of, this.f());
        this.Dv = new jq(this.R().la());
        this.p().e(this.Dv, "focusin", this.DU);
        qq(this, !1)
    }
    ;
    z.e.S = function() {
        this.ka() && this.V(!1);
        Sh(this.Dv);
        nq.b.S.call(this);
        z.Oc(this.Mc);
        z.Oc(this.Xd);
        z.Oc(this.Of)
    }
    ;
    z.e.V = function(a) {
        a != this.pc && (this.Ll && this.Ll.stop(),
        this.Nm && this.Nm.stop(),
        this.Kl && this.Kl.stop(),
        this.Mm && this.Mm.stop(),
        this.aa && qq(this, a),
        a ? this.Ty() : this.nl())
    }
    ;
    z.e.Ty = function() {
        if (this.dispatchEvent("beforeshow")) {
            try {
                this.yl = this.R().la().activeElement
            } catch (a) {}
            this.ly();
            this.Fc();
            this.p().e(this.R().hb(), "resize", this.ly);
            rq(this, !0);
            this.focus();
            this.pc = !0;
            this.Ll && this.Nm ? (Tk(this.Ll, "end", this.ks, !1, this),
            this.Nm.play(),
            this.Ll.play()) : this.ks()
        }
    }
    ;
    z.e.nl = function() {
        if (this.dispatchEvent("beforehide")) {
            this.p().Fa(this.R().hb(), "resize", this.ly);
            this.pc = !1;
            this.Kl && this.Mm ? (Tk(this.Kl, "end", this.Fl, !1, this),
            this.Mm.play(),
            this.Kl.play()) : this.Fl();
            a: {
                try {
                    var a = this.R()
                      , b = a.la().body
                      , c = a.la().activeElement || b;
                    if (!this.yl || this.yl == b) {
                        this.yl = null;
                        break a
                    }
                    (c == b || a.contains(this.f(), c)) && this.yl.focus()
                } catch (d) {}
                this.yl = null
            }
        }
    }
    ;
    z.e.ks = function() {
        this.dispatchEvent("show")
    }
    ;
    z.e.Fl = function() {
        rq(this, !1);
        this.dispatchEvent("hide")
    }
    ;
    z.e.ka = function() {
        return this.pc
    }
    ;
    z.e.focus = function() {
        this.fE()
    }
    ;
    z.e.ly = function() {
        this.Mc && z.N(this.Mc, !1);
        this.Xd && z.N(this.Xd, !1);
        var a = this.R().la()
          , b = z.Rh(Mi(a) || window)
          , c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth))
          , a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.Mc && (z.N(this.Mc, !0),
        Jl(this.Mc, c, a));
        this.Xd && (z.N(this.Xd, !0),
        Jl(this.Xd, c, a))
    }
    ;
    z.e.Fc = function() {
        var a = this.R().la()
          , b = Mi(a) || window;
        if ("fixed" == Al(this.f()))
            var c = a = 0;
        else
            c = Nh(this.R()),
            a = c.x,
            c = c.y;
        var d = z.Ml(this.f())
          , b = z.Rh(b)
          , a = Math.max(a + b.width / 2 - d.width / 2, 0)
          , c = Math.max(c + b.height / 2 - d.height / 2, 0);
        z.Bl(this.f(), a, c);
        z.Bl(this.Of, a, c)
    }
    ;
    z.e.DU = function(a) {
        this.Bu ? this.BH() : a.target == this.Of && el(this.fE, 0, this)
    }
    ;
    z.e.fE = function() {
        try {
            z.C && this.R().la().body.focus(),
            this.f().focus()
        } catch (a) {}
    }
    ;
    z.e.h = function() {
        Sh(this.Ll);
        this.Ll = null;
        Sh(this.Kl);
        this.Kl = null;
        Sh(this.Nm);
        this.Nm = null;
        Sh(this.Mm);
        this.Mm = null;
        nq.b.h.call(this)
    }
    ;
    z.u(sq, nq);
    z.e = sq.prototype;
    z.e.kv = !0;
    z.e.Lw = !0;
    z.e.GG = !0;
    z.e.fv = !0;
    z.e.cq = .5;
    z.e.oz = "";
    z.e.qf = null;
    z.e.Ih = null;
    z.e.BD = !1;
    z.e.Wa = null;
    z.e.pd = null;
    z.e.gt = null;
    z.e.Kd = null;
    z.e.pf = null;
    z.e.Bc = null;
    z.e.po = "dialog";
    z.e.P = function() {
        return this.ed
    }
    ;
    z.e.Oa = function(a) {
        this.qf = a = qo(a, null);
        this.pf && (this.pf.innerHTML = oo(a))
    }
    ;
    z.e.mb = function() {
        return null != this.qf ? oo(this.qf) : ""
    }
    ;
    z.e.Ph = function() {
        return this.po
    }
    ;
    z.e.Vs = function(a) {
        this.po = a
    }
    ;
    z.e.Ea = function() {
        this.f() || this.ra();
        return this.pf
    }
    ;
    z.e.Uq = function() {
        this.f() || this.ra();
        return sq.b.Uq.call(this)
    }
    ;
    z.e.r = function() {
        sq.b.r.call(this);
        var a = this.f()
          , b = this.R();
        this.Wa = b.r("div", this.ed + "-title", this.pd = b.r("span", {
            className: this.ed + "-title-text",
            id: yp(this)
        }, this.oz), this.Kd = b.r("span", this.ed + "-title-close"));
        z.Mc(a, this.Wa, this.pf = b.r("div", this.ed + "-content"), this.Bc = b.r("div", this.ed + "-buttons"));
        Mp(this.pd, "heading");
        Mp(this.Kd, "button");
        Ai(this.Kd, !0);
        Np(this.Kd, "label", YG);
        this.gt = this.pd.id;
        Mp(a, this.Ph());
        Np(a, "labelledby", this.gt || "");
        this.qf && (this.pf.innerHTML = oo(this.qf));
        z.N(this.Kd, this.Lw);
        this.Oc && (a = this.Oc,
        a.c = this.Bc,
        a.ra());
        z.N(this.Bc, !!this.Oc);
        vq(this, this.cq)
    }
    ;
    z.e.K = function(a) {
        sq.b.K.call(this, a);
        a = this.f();
        var b = this.ed + "-content";
        this.pf = th(window.document, null, b, a)[0];
        this.pf || (this.pf = this.R().r("div", b),
        this.qf && (this.pf.innerHTML = oo(this.qf)),
        a.appendChild(this.pf));
        var b = this.ed + "-title"
          , c = this.ed + "-title-text"
          , d = this.ed + "-title-close";
        (this.Wa = th(window.document, null, b, a)[0]) ? (this.pd = th(window.document, null, c, this.Wa)[0],
        this.Kd = th(window.document, null, d, this.Wa)[0]) : (this.Wa = this.R().r("div", b),
        a.insertBefore(this.Wa, this.pf));
        this.pd ? (this.oz = z.Wc(this.pd),
        this.pd.id || (this.pd.id = yp(this))) : (this.pd = z.ji("span", {
            className: c,
            id: yp(this)
        }),
        this.Wa.appendChild(this.pd));
        this.gt = this.pd.id;
        Np(a, "labelledby", this.gt || "");
        this.Kd || (this.Kd = this.R().r("span", d),
        this.Wa.appendChild(this.Kd));
        z.N(this.Kd, this.Lw);
        b = this.ed + "-buttons";
        (this.Bc = th(window.document, null, b, a)[0]) ? (this.Oc = new Cq(this.R()),
        this.Oc.U(this.Bc)) : (this.Bc = this.R().r("div", b),
        a.appendChild(this.Bc),
        this.Oc && (a = this.Oc,
        a.c = this.Bc,
        a.ra()),
        z.N(this.Bc, !!this.Oc));
        vq(this, this.cq)
    }
    ;
    z.e.m = function() {
        sq.b.m.call(this);
        this.p().e(this.f(), "keydown", this.TG).e(this.f(), "keypress", this.TG);
        this.p().e(this.Bc, "click", this.qU);
        wq(this, this.fv);
        this.p().e(this.Kd, "click", this.NU);
        var a = this.f();
        Mp(a, this.Ph());
        "" !== this.pd.id && Np(a, "labelledby", this.pd.id);
        if (!this.GG) {
            this.GG = !1;
            if (this.aa) {
                var a = this.R()
                  , b = this.Uq();
                a.removeNode(this.Mc);
                a.removeNode(b)
            }
            this.ka() && qq(this, !1)
        }
    }
    ;
    z.e.S = function() {
        this.ka() && this.V(!1);
        wq(this, !1);
        sq.b.S.call(this)
    }
    ;
    z.e.V = function(a) {
        a != this.ka() && (this.aa || this.ra(),
        sq.b.V.call(this, a))
    }
    ;
    z.e.ks = function() {
        sq.b.ks.call(this);
        this.dispatchEvent(ZG)
    }
    ;
    z.e.Fl = function() {
        sq.b.Fl.call(this);
        this.dispatchEvent($G);
        this.BD && this.q()
    }
    ;
    z.e.WV = function() {
        var a = this.R().la()
          , b = z.Rh(Mi(a) || window)
          , c = Math.max(a.body.scrollWidth, b.width)
          , a = Math.max(a.body.scrollHeight, b.height)
          , d = z.Ml(this.f());
        "fixed" == Al(this.f()) ? (b = new tl(0,0,Math.max(0, b.width - d.width),Math.max(0, b.height - d.height)),
        this.Ih.zl = b || new tl(window.NaN,window.NaN,window.NaN,window.NaN)) : this.Ih.zl = new tl(0,0,c - d.width,a - d.height) || new tl(window.NaN,window.NaN,window.NaN,window.NaN)
    }
    ;
    z.e.NU = function() {
        xq(this)
    }
    ;
    z.e.h = function() {
        this.Bc = this.Kd = null;
        sq.b.h.call(this)
    }
    ;
    z.e.qU = function(a) {
        a: {
            for (a = a.target; null != a && a != this.Bc; ) {
                if ("BUTTON" == a.tagName)
                    break a;
                a = a.parentNode
            }
            a = null
        }
        if (a && !a.disabled) {
            a = a.name;
            var b = this.Oc.get(a);
            this.dispatchEvent(new yq(a,b)) && this.V(!1)
        }
    }
    ;
    z.e.TG = function(a) {
        var b = !1
          , c = !1
          , d = this.Oc
          , f = a.target;
        if ("keydown" == a.type)
            if (this.kv && 27 == a.keyCode) {
                var g = d && d.Pu
                  , f = "SELECT" == f.tagName && !f.disabled;
                g && !f ? (c = !0,
                b = d.get(g),
                b = this.dispatchEvent(new yq(g,b))) : f || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && f == this.f()) {
                    this.Bu = !0;
                    try {
                        this.Of.focus()
                    } catch (h) {}
                    el(this.BH, 0, this)
                }
            }
        else if (13 == a.keyCode) {
            if ("BUTTON" == f.tagName && !f.disabled)
                g = f.name;
            else if (f == this.Kd)
                xq(this);
            else if (d) {
                var k = d.xq
                  , m = k && d.dc(k)
                  , f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || "A" == f.tagName) && !f.disabled;
                !m || m.disabled || f || (g = k)
            }
            g && d && (c = !0,
            b = this.dispatchEvent(new yq(g,String(d.get(g)))))
        } else
            f == this.Kd && 32 == a.keyCode && xq(this);
        if (b || c)
            a.stopPropagation(),
            a.preventDefault();
        b && this.V(!1)
    }
    ;
    z.u(yq, uk);
    var Bq = "dialogselect"
      , $G = "afterhide"
      , ZG = "aftershow";
    z.u(Cq, z.ud);
    z.e = Cq.prototype;
    z.e.ed = "goog-buttonset";
    z.e.xq = null;
    z.e.c = null;
    z.e.Pu = null;
    z.e.set = function(a, b, c, d) {
        z.ud.prototype.set.call(this, a, b);
        c && (this.xq = a);
        d && (this.Pu = a);
        return this
    }
    ;
    z.e.ra = function() {
        if (this.c) {
            this.c.innerHTML = oo(Aq);
            var a = z.Dc(this.c);
            this.forEach(function(b, c) {
                var d = a.r("button", {
                    name: c
                }, b);
                c == this.xq && (d.className = this.ed + "-default");
                this.c.appendChild(d)
            }, this)
        }
    }
    ;
    z.e.U = function(a) {
        if (a && 1 == a.nodeType) {
            this.c = a;
            a = this.c.getElementsByTagName("button");
            for (var b = 0, c, d, f; c = a[b]; b++)
                if (d = c.name || c.id,
                f = z.Wc(c) || c.value,
                d) {
                    var g = 0 == b;
                    this.set(d, f, g, c.name == aH);
                    g && Tp(c, this.ed + "-default")
                }
        }
    }
    ;
    z.e.f = function() {
        return this.c
    }
    ;
    z.e.R = function() {
        return this.va
    }
    ;
    z.e.Vl = function(a) {
        this.xq = a
    }
    ;
    z.e.dc = function(a) {
        for (var b = this.c.getElementsByTagName("BUTTON"), c = 0, d; d = b[c]; c++)
            if (d.name == a || d.id == a)
                return d;
        return null
    }
    ;
    var aH = "cancel"
      , bH = L("OK")
      , cH = L("Cancel")
      , dH = L("Yes")
      , eH = L("No")
      , fH = L("Save")
      , gH = L("Continue")
      , YG = L("Close")
      , Eq = {
        key: "ok",
        caption: bH
    }
      , Fq = {
        key: aH,
        caption: cH
    }
      , hH = {
        key: "yes",
        caption: dH
    }
      , iH = {
        key: "no",
        caption: eH
    }
      , jH = {
        key: "save",
        caption: fH
    }
      , kH = {
        key: "continue",
        caption: gH
    };
    "undefined" != typeof window.document && (Dq(new Cq, Eq, !0, !0),
    tq(),
    Dq(Dq(new Cq, hH, !0), iH, !1, !0),
    Dq(Dq(Dq(new Cq, hH), iH, !0), Fq, !1, !0),
    Dq(Dq(Dq(new Cq, kH), jH), Fq, !0, !0));
    z.u(z.Gq, sq);
    z.ca(z.Gq);
    var Hq = {
        QL: "fyre-modal-alert-red",
        Iz: "fyre-modal-alert-black",
        GK: "fyre-modal-alert-green"
    };
    z.Gq.prototype.m = function() {
        z.Gq.b.m.call(this);
        Iq(this, this.kp.Iz)
    }
    ;
    z.Gq.prototype.open = function() {
        window.clearTimeout(this.yi);
        this.yi = window.setTimeout((0,
        z.q)(this.close, this), 5E3);
        this.V(!0);
        return this
    }
    ;
    z.Gq.prototype.close = function() {
        window.clearTimeout(this.yi);
        Iq(this, this.kp.Iz);
        this.V(!1);
        return this
    }
    ;
    z.u(Jq, sq);
    z.ca(Jq);
    z.e = Jq.prototype;
    z.e.G = function(a, b) {
        this.Oa("");
        zq(this, tq());
        Jq.b.G.call(this, a, b)
    }
    ;
    z.e.close = function(a) {
        this.V(!1);
        !0 === a && this.Jf(!0);
        return this
    }
    ;
    z.e.mb = function() {
        return new z.gm(this.Ea())
    }
    ;
    z.e.Fl = function() {
        this.BD || this.ee && this.ee.me(void 0);
        Jq.b.Fl.call(this)
    }
    ;
    z.e.open = function() {
        this.V(!0);
        return this
    }
    ;
    z.e.Oa = function(a) {
        this.Jf(!0);
        zq(this, tq());
        Jq.b.Oa.call(this, a);
        return this
    }
    ;
    z.u(Nq, Hp);
    Nq.prototype.dr = function() {
        return zj(this.d.u.v()) ? z.V : z.W
    }
    ;
    Nq.prototype.ge = function(a, b) {
        a.e(b, "action_clicked", function(a) {
            var b = Oq(a.key);
            z.ga(this[b]) && this[b].call(this, a)
        });
        a.e(b, "TwitterActionClick", function(a) {
            this.d.$b.send(z.Xn(a.XW, {
                bc: a.n
            }))
        })
    }
    ;
    Nq.prototype.handleBanClick_ = function(a) {
        a.preventDefault();
        var b = this.dr()
          , c = Jq.D()
          , d = a.n.get(z.Gm)
          , f = this;
        uq(c, b.get(b.g.rJ));
        c.Oa(Ip({
            cs: b.get(b.g.pJ)
        }));
        c.open();
        Kq(c, b.get(b.g.qJ), b.get(b.g.oJ));
        c.e(Bq, function(a) {
            if (a.key === Eq.key)
                try {
                    var b = f.d.lb.d.u.v();
                    if (!z.F.get(z.E.lm))
                        throw "insufficient_permissions";
                    var c = {
                        sites: b.get(b.k.ic),
                        authorId: d.id
                    }
                      , m = z.wt.D()
                      , r = z.Jh()
                      , x = {
                        author_id: c.authorId
                    };
                    c.sites && (x.site_ids = z.ea(c.sites) ? c.sites.join(",") : c.sites);
                    m.Dc(r, "author/" + c.authorId + "/ban/", void 0, void 0).send(x)
                } catch (t) {
                    switch (t) {
                    case "insufficient_permissions":
                        Pq();
                        break;
                    default:
                        throw t;
                    }
                }
        })
    }
    ;
    Nq.prototype.handleShareClick_ = function(a) {
        a.preventDefault();
        var b = a.n
          , c = pn(b);
        c.set(qn.ua, a.cW);
        a = this.d.Io;
        var d = (a.L.H || {}).VH;
        d ? z.ga(d) ? a = a.lW || (a.lW = new Lu(a.L)) : (z.da(d),
        a = void 0) : a = a.EN || (a.EN = new Ku(a.L));
        this.d.$b.send(z.Xn("ShareButtonClick", {
            bc: b
        }));
        a.show(c)
    }
    ;
    Nq.prototype.handleFlagClick_ = function(a) {
        a.preventDefault();
        var b = this.dr()
          , c = a.n;
        a = c.get(z.Gm);
        var d = a.get(a.k.za);
        a = this.d.H.Cv;
        var f = Jq.D()
          , d = z.wa(b.get(b.g.wA), d)
          , g = {};
        g.Cv = a;
        a = new Fp(c,g);
        this.d.$b.send(z.Xn("FlagClick", {
            bc: c
        }));
        f.G(a, !0);
        uq(f, d);
        Kq(f, b.get(b.g.pA), b.get(b.g.nA));
        f.open();
        f.e(Bq, (0,
        z.q)(function(a) {
            if (a.key === Fq.key)
                this.d.$b.send(z.Xn("FlagCancel", {
                    bc: c
                }));
            else {
                a = f.mb();
                for (var d = nm(a, "fyre-modal-flag-form").element, g = new z.ud, r = d.elements, x, t = 0; x = r[t]; t++)
                    if (x.form == d && !x.disabled && "fieldset" != x.tagName.toLowerCase()) {
                        var I = x.name;
                        switch (x.type.toLowerCase()) {
                        case "file":
                        case "submit":
                        case "reset":
                        case "button":
                            break;
                        case "select-multiple":
                            x = Mq(x);
                            if (null != x)
                                for (var M, $ = 0; M = x[$]; $++)
                                    Lq(g, I, M);
                            break;
                        default:
                            M = Mq(x),
                            null != M && Lq(g, I, M)
                        }
                    }
                r = d.getElementsByTagName("input");
                for (t = 0; x = r[t]; t++)
                    x.form == d && "image" == x.type.toLowerCase() && (I = x.name,
                    Lq(g, I, x.value),
                    Lq(g, I + ".x", "0"),
                    Lq(g, I + ".y", "0"));
                d = z.yd(g);
                d = {
                    Ie: d.flagType,
                    ej: d.email,
                    gi: d.notes
                };
                if ("none" === d.Ie[0])
                    return nm(a, "fyre-modal-select-error").show("inline"),
                    !1;
                a = z.Gq.D();
                d.Sa = c.id;
                d.Aa = c.get(Lm).id;
                this.d.$b.send(z.Xn(yG[d.Ie[0]], {
                    bc: c
                }));
                this.d.lb.jn(d);
                f.close();
                a.Oa(b.get(b.g.vA));
                a.open();
                Iq(a, a.kp.GK)
            }
        }, this))
    }
    ;
    Nq.prototype.handleDeleteClick_ = function(a) {
        a.preventDefault();
        a = a.n;
        try {
            this.d.lb.bv(a),
            a.set(z.Jm, a.Kb.NONE),
            a.get(z.Sm) === z.F.id && z.F.set(z.F.k.Ah, null)
        } catch (b) {
            switch (b) {
            case "insufficient_permissions":
                Pq();
                break;
            default:
                throw b;
            }
        }
    }
    ;
    Nq.prototype.handleBozoClick_ = function(a) {
        a.preventDefault();
        a = a.n;
        try {
            this.d.lb.Ku(a),
            a.set(z.Jm, a.Kb.NONE)
        } catch (b) {
            switch (b) {
            case "insufficient_permissions":
                Pq();
                break;
            default:
                throw b;
            }
        }
    }
    ;
    Nq.prototype.handleFeatureClick_ = function(a) {
        a.preventDefault();
        a = a.n;
        var b = a.get(Om);
        try {
            this.d.O("quill_comment_featured", {
                Vj: a.id,
                mz: a.get(z.Sm)
            }),
            this.d.lb.sv(a, !b)
        } catch (c) {
            switch (c) {
            case "insufficient_permissions":
                Pq();
                break;
            default:
                throw c;
            }
        }
        a.set(Om, !b)
    }
    ;
    z.u(Qq, Hp);
    Qq.prototype.ge = function(a, b) {
        a.e(b, "author_click", this.mU);
        a.e(b, "author_fetch", this.oU)
    }
    ;
    Qq.prototype.mU = function(a) {
        var b = a.s;
        if (!b.kc()) {
            var c = z.Nd;
            a = b.get(c.X);
            c = b.get(c.Yb);
            b = b.$w();
            this.d.Ud.viewProfile({
                id: a,
                isCuratedAuthor: b,
                profileUrl: c
            })
        }
    }
    ;
    Qq.prototype.oU = function(a) {
        var b = a.s
          , c = a.QD
          , d = b.id
          , f = {}
          , b = b.get(z.Nd.ua) || 1;
        f.source = b;
        a = (0,
        z.q)(this.nU, this, a);
        c = c || z.n;
        z.ct.D();
        (new z.Ee({
            url: z.v.J.ud + z.v.cf + "author/" + d + "/",
            ta: a,
            oa: c
        })).send(f)
    }
    ;
    Qq.prototype.nU = function(a, b) {
        var c = a.s
          , d = b.data
          , f = a.QD || z.n;
        z.cb(d) ? f() : c.set(ri(d))
    }
    ;
    var lH = {
        QX: "fyre.v2.editor.EVENTS.AT_PRESSED",
        oY: "fyre.v2.editor.EVENTS.CANCEL_CLICKED",
        PY: "fyre.v2.editor.EVENTS.EDIT_COMMENT_CLICKED",
        RY: "fyre.v2.editor.EVENTS.EDIT_REVIEW_CLICKED",
        qZ: "fyre.v2.editor.EVENTS.FOLLOW_CLICKED",
        xZ: "fyre.v2.editor.EVENTS.FORMAT_CLICKED",
        Hi: "fyre.v2.editor.EVENTS.HIDE",
        dL: "fyre.v2.editor.EVENTS.LOAD",
        kL: "fyre.v2.editor.EVENTS.MEDIA_UPLOAD_CLICKED",
        h_: "fyre.v2.editor.EVENTS.MENTION_CLICKED",
        E_: "fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED",
        H_: "fyre.v2.editor.EVENTS.POST_REVIEW_CLICKED",
        T_: "fyre.v2.editor.EVENTS.RAW_CLEARED",
        U_: "fyre.v2.editor.EVENTS.RAW_CLICKED",
        V_: "fyre.v2.editor.EVENTS.RAW_SUBMITTED",
        W0: "fyre.v2.editor.EVENTS.USER_CHANGE"
    };
    var mH = {};
    z.A(mH, lH);
    z.u(z.Rq, z.rf);
    z.e = z.Rq.prototype;
    z.e.qD = function() {
        if (z.F.id) {
            var a = this.$s.Yc.get("fyre-action-queue");
            if (a) {
                var b = 1 === z.s.FyreLoader.Zp.length;
                z.w(a.split("|||"), function(a) {
                    this.Ge(a) && (b = !0)
                }, this);
                b && this.clear()
            }
        }
    }
    ;
    z.e.clear = function() {
        this.$s.Yc.remove("fyre-action-queue")
    }
    ;
    z.e.Ge = function(a) {
        function b(a, b) {
            return (g = b.get(Lm)) && g.id === f ? (a(b),
            !0) : !1
        }
        a = a.split(":::");
        var c = a[0]
          , d = a[1];
        a = this.L.lb;
        var f = this.L.u.v().id, g;
        switch (c) {
        case "post":
            return c = new z.Em(z.ad(d)),
            b((0,
            z.q)(a.postMessage, a), c);
        case "post_review":
            return c = new z.yn(z.ad(d)),
            b((0,
            z.q)(a.ws, a), c)
        }
        return !1
    }
    ;
    z.e.gc = function(a) {
        this.enabled = !!a.BN
    }
    ;
    z.e.isEnabled = function() {
        return this.enabled
    }
    ;
    z.e.h = function() {
        z.vh(z.Uf, "user_logged_in", this.qD, this);
        z.Rq.b.h.call(this)
    }
    ;
    z.ca(Tq);
    var nH = {
        container: "modal",
        maxSize: 26214400,
        extensions: ".bmp .gif .jpg .jpeg .png .tif .tiff".split(" "),
        multiple: !0,
        services: "COMPUTER WEBCAM IMAGE_SEARCH FACEBOOK INSTAGRAM FLICKR PICASA BOX DROPBOX GOOGLE_DRIVE URL".split(" ")
    }
      , oH = {
        rotate: "exif"
    }
      , pH = {
        location: "S3",
        access: "public"
    };
    Tq.prototype.Zg = function(a) {
        this.Qq ? a() : z.s.filepicker || z.Xf("//api.filepicker.io/v2/filepicker.js", null, null, (0,
        z.q)(function() {
            this.Qq = z.s.filepicker;
            this.Qq.setKey("AYNlO8P2PT6qnCfo9eCw2z");
            a()
        }, this))
    }
    ;
    Tq.prototype.pickAndStore = function(a, b) {
        nH.multiple = a;
        this.Qq.pickAndStore(nH, pH, (0,
        z.q)(function(a) {
            b("stored", a);
            this.convert(a, b)
        }, this))
    }
    ;
    Tq.prototype.convert = function(a, b) {
        var c = a.length
          , d = [];
        z.w(a, z.pa(function(a, b) {
            this.Qq.convert(b, oH, pH, a)
        }, function(a) {
            d.push(a);
            d.length === c && b("converted", d)
        }), this)
    }
    ;
    z.u(Uq, Hp);
    z.e = Uq.prototype;
    z.e.ge = function(a, b) {
        a.e(b, mH.kL, this.tR);
        a.e(b, "fyre.v2.editor.EVENTS.EDIT_COMMENT_CLICKED", this.DQ);
        a.e(b, "fyre.v2.editor.EVENTS.EDIT_REVIEW_CLICKED", this.FQ);
        a.e(b, "fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED", this.JR);
        a.e(b, "fyre.v2.editor.EVENTS.POST_REVIEW_CLICKED", this.MR);
        a.e(b, "fyre.v2.editor.EVENTS.FOLLOW_CLICKED", this.kw)
    }
    ;
    z.e.DQ = function(a) {
        var b = Vq(this, a);
        b && b.id && Yq(this, this.d.lb.Jq, a, b)
    }
    ;
    z.e.FQ = function(a) {
        var b = Wq(this, a);
        b && b.id && Yq(this, this.d.lb.Jq, a, b)
    }
    ;
    z.e.kw = function(a) {
        var b = this.d.u;
        z.Ih(this.d.Ud, this.w, (0,
        z.q)(b.mj, b, a.value))
    }
    ;
    z.e.tR = function(a) {
        var b = Tq.D()
          , c = z.F.eb();
        b.Zg((0,
        z.q)(b.pickAndStore, b, c, function(b, c) {
            var g = Wj(c, b);
            a.ia(b, g)
        }))
    }
    ;
    z.e.JR = function(a) {
        if (z.v.doNotTrack.lo)
            a.gj(this.Va.get(this.Va.g.MY));
        else {
            var b = Vq(this, a);
            b && (this.d.$b.send(z.Xn("Post", {
                bc: b
            })),
            Sq(this.d.mu, "post", b),
            Yq(this, this.d.lb.postMessage, a, b))
        }
    }
    ;
    z.e.MR = function(a) {
        if (z.v.doNotTrack.lo)
            a.gj();
        else {
            var b = Wq(this, a);
            b && (Sq(this.d.mu, "post_review", b),
            Yq(this, this.d.lb.ws, a, b))
        }
    }
    ;
    z.F.hu = {};
    z.F.hu.UI = function() {
        var a = z.F;
        return {
            id: a.id,
            profileUrl: a.get(z.E.Yb),
            displayName: a.get(z.E.za),
            settingsUrl: a.get(z.E.cM)
        }
    }
    ;
    var qH = {
        Wz: "editClick",
        gL: "loginClick",
        MA: "logoutClick",
        cB: "profClick"
    };
    z.u(Zq, Hp);
    z.e = Zq.prototype;
    z.e.ge = function(a, b) {
        z.F.get(z.F.k.NB) || (a.e(b, qH.gL, this.nR),
        a.e(b, qH.MA, this.pR),
        a.e(b, qH.cB, this.PR),
        a.e(b, qH.Wz, this.EQ))
    }
    ;
    z.e.nR = function() {
        this.d.Ud.login(this.d.u.v())
    }
    ;
    z.e.pR = function() {
        this.d.Ud.logout()
    }
    ;
    z.e.PR = function() {
        var a = z.F.hu.UI();
        this.d.Ud.viewProfile(a)
    }
    ;
    z.e.EQ = function() {
        var a = z.F.hu.UI();
        this.d.Ud.editProfile(a)
    }
    ;
    z.u($q, Hp);
    $q.prototype.ge = function(a, b) {
        a.e(b, "mobile_flag_confirmation", this.CU)
    }
    ;
    $q.prototype.CU = function(a) {
        var b = zj(this.d.u.v()) ? z.V : z.W
          , c = b.get(b.g.oA)
          , d = a.data
          , f = a.data.Ie
          , g = a.ia || z.n;
        a = z.wa(c, a.eE, a.cE);
        c = null;
        z.jh ? c = window.confirm(a) : ar(this, a, f, b, d, g);
        c && this.d.lb.jn(d);
        g(c)
    }
    ;
    z.u(br, $k);
    br.prototype.h = function() {
        this.cancel();
        br.b.h.call(this);
        delete this.va
    }
    ;
    br.prototype.start = function() {
        this.cancel();
        this.dz = +new Date;
        this.oo()
    }
    ;
    br.prototype.cancel = function() {
        this.ki && ((0,
        window.clearTimeout)(this.ki),
        this.ki = null);
        this.dz = null
    }
    ;
    br.prototype.oo = function() {
        var a = this.va.f(this.HO);
        a ? (this.dispatchEvent({
            type: fr,
            Kq: a
        }),
        this.ki = null) : this.dz + 6E4 < +new Date || (this.ki = (0,
        window.setTimeout)((0,
        z.q)(this.oo, this), 25))
    }
    ;
    var fr = "ef_found";
    z.u(dr, z.T);
    dr.prototype.r = function() {
        var a = z.xo(cr);
        this.K(a)
    }
    ;
    z.u(z.er, z.D);
    z.er.prototype.h = function() {
        z.er.b.h.call(this);
        delete this.d;
        this.pa.q();
        this.Gq.q();
        this.hC.q();
        this.sC.q();
        this.sD.q();
        this.SI.q();
        this.FD.q()
    }
    ;
    z.er.prototype.pl = function(a) {
        this.sC = new Qq(this.d);
        this.sC.handle(this.Qb);
        this.sD = new $q(this.d);
        this.sD.handle(this.Qb);
        this.hC = new Nq(this.d);
        this.hC.handle(this.Qb);
        this.SI = new Zq(this.d);
        this.SI.handle(this.Qb);
        this.FD = new Uq(this.d);
        this.FD.handle(a)
    }
    ;
    z.er.prototype.sU = function() {
        if (!this.La && this.d && this.Qb) {
            this.cO = !0;
            var a = this.d.u.v();
            this.Qb.vH(this.d, a);
            this.d.ui.start();
            this.d.Al.start();
            z.jr(this);
            var b = a.get(z.U.zh)
              , a = a.get(z.U.ic);
            this.d && this.d.fz.send([{
                metric: "browser.comments.widget.basewidgetcontroller.ready." + b.replace(/\./g, "_") + "." + a,
                value: 1,
                type: "counter",
                rate: .01
            }])
        }
    }
    ;
    z.er.prototype.BU = function(a) {
        if (!this.La && this.d && this.Qb) {
            a = this.c = a.Kq;
            var b = z.Eh("fyre", a);
            b && z.Oc(b);
            z.jr(this) || (this.Tf = new dr,
            this.Tf.ra(a));
            this.d.T.O("dom_ready");
            z.Qf && a.setAttribute("ontouchstart", "")
        }
    }
    ;
    z.u(lr, z.T);
    var or = ["facebook", "instagram", "twitter", "youtube"]
      , nr = ["video"];
    lr.prototype.r = function() {
        this.c = z.xo(pp, this.t());
        var a = z.v.doNotTrack.delegate;
        if (a) {
            a = a();
            if (z.p(a))
                var b = z.Qh(window.document, a)
                  , a = 3 === b.nodeType ? z.Qh(window.document, "\x3cp\x3e" + a + "\x3c/p\x3e") : b;
            var c = z.Eh("fyre-media-mask-container", this.c)
              , b = z.Eh("fyre-show-embed", this.c)
              , c = z.Xa(z.Qc(c));
            z.w(c, function(a) {
                z.jk(a, "fyre-show-embed") || z.Oc(a)
            });
            Ph(a, b)
        }
    }
    ;
    lr.prototype.m = function() {
        lr.b.m.call(this);
        var a = z.Eh("fyre-show-embed", this.c);
        this.p().e(a, "click", this.ib)
    }
    ;
    lr.prototype.t = function() {
        return {}
    }
    ;
    lr.prototype.ib = function(a) {
        a.stopPropagation();
        this.dispatchEvent({
            type: "doNotTrackShowVideo"
        })
    }
    ;
    var qr = 0;
    z.u(pr, z.T);
    pr.prototype.r = function() {
        this.c = z.ji("IFRAME", "fyre-media-iframe");
        this.c.src = "https://cdn.livefyre.com/libs/sandbox/v1.2.4/sandbox.html?id\x3d" + this.hE;
        this.c.frameBorder = "0";
        this.c.scrolling = "no"
    }
    ;
    pr.prototype.h = function() {
        pr.b.h.call(this);
        window.removeEventListener("message", (0,
        z.q)(this.UG, this), !1)
    }
    ;
    pr.prototype.m = function() {
        pr.b.m.call(this);
        window.addEventListener("message", (0,
        z.q)(this.UG, this), !1)
    }
    ;
    pr.prototype.UG = function(a) {
        if (this.hE === a.data.id)
            switch (a.data.type) {
            case "ready":
                this.c.contentWindow.postMessage({
                    type: "inject",
                    html: this.fg,
                    mediaType: "rich",
                    provider: this.hV
                }, "*");
                break;
            case "size":
                z.dk(this.c, "fyre-media-iframe-loaded"),
                this.c.height = a.data.height,
                this.c.width = a.data.width
            }
    }
    ;
    z.u(rr, z.T);
    rr.prototype.t = function() {
        var a = Oj
          , b = this.l.get(a.URL)
          , c = this.l.get(a.ab)
          , d = "twitter" === (this.l.get(a.rd) || "").toLowerCase();
        return {
            ol: this.l.get(a.Ii),
            type: this.l.get(a.ua),
            url: b,
            Xj: this.l.get(a.rk),
            rI: this.l.get(a.HB),
            qI: this.l.get(a.GB),
            title: c && !d ? c : "",
            ZO: this.l.get("thumbnail_url"),
            alt: c || "expanded thumbnail"
        }
    }
    ;
    rr.prototype.r = function() {
        this.c = z.ji("DIV", "fyre-comment-media-expanded");
        var a = this.t();
        this.c.innerHTML = z.X.KT(a);
        var b = th(window.document, "IMG", null, this.c);
        b.length && (b[0].onerror = (0,
        z.q)(this.uw, this));
        switch (this.l.get("type")) {
        case "video":
            a = this.o("fyre-comment-media-link");
            this.p().e(a, "click", this.uS);
            break;
        case "rich":
            sr(this, a)
        }
    }
    ;
    rr.prototype.m = function() {
        rr.b.m.call(this);
        this.p().e(this, "doNotTrackShowVideo", this.qR)
    }
    ;
    rr.prototype.uw = function() {
        try {
            z.dk(this.c, "fyre-media-link-error"),
            this.c.innerHTML = z.W.get(z.W.g.bK)
        } catch (a) {}
    }
    ;
    var vr = /auto_play=(true|false)/g;
    rr.prototype.uS = function(a) {
        a.preventDefault();
        mr(this.l) ? (z.dk(this.c, "fyre-media-mask-enabled"),
        this.yx = new lr,
        this.G(this.yx, !0)) : wr(this, !0)
    }
    ;
    rr.prototype.qR = function() {
        z.fk(this.c, "fyre-media-mask-enabled");
        this.yx && this.yx.q();
        wr(this, !0)
    }
    ;
    z.u(xr, Error);
    z.Eb(yr);
    z.u(zr, z.sa);
    z.e = yr.prototype;
    z.e.yf = function() {
        return this.F
    }
    ;
    z.e.Q = function() {
        return this.rh
    }
    ;
    z.e.getError = function() {
        return this.bn
    }
    ;
    z.e.ob = function(a) {
        if ("pending" == this.F)
            this.rh = a,
            this.F = "success",
            Br(this);
        else if (!Cr(this))
            throw new zr;
    }
    ;
    z.e.cancel = function() {
        if ("pending" == this.F) {
            var a = new xr;
            if ("pending" == this.F)
                this.bn = a,
                this.F = "error",
                Br(this);
            else if (!Cr(this))
                throw new zr;
            return !0
        }
        return !1
    }
    ;
    z.e.then = function(a, b, c) {
        var d, f, g = new z.Tb(function(a, b) {
            d = a;
            f = b
        }
        );
        Ar(this, function(a) {
            Cr(a) ? g.cancel() : "success" == a.yf() ? d(a.Q()) : "error" == a.yf() && f(a.getError())
        });
        return g.then(a, b, c)
    }
    ;
    z.u(Gr, yr);
    z.u(Jr, z.T);
    Jr.prototype.r = function() {
        this.c = z.ji("DIV", "fyre-comment-raw-html")
    }
    ;
    Jr.prototype.Oa = function(a) {
        this.c && (this.va.Jf(this.c),
        a && (a = wi(a),
        this.va.appendChild(this.c, z.Qh(this.va.Ma, a.html)),
        Ir(a.script, this.f())))
    }
    ;
    z.u(Kr, z.T);
    Kr.prototype.r = function() {
        this.c = z.ji("DIV", "fyre-comment-media-thumbnails")
    }
    ;
    Kr.prototype.ou = function(a) {
        var b = Oj
          , c = a.get(b.rk) || a.get(b.URL)
          , b = {
            Ae: a.Ae,
            Xj: Rj(c),
            type: a.get(b.ua)
        }
          , b = z.xo(z.X.zG, b);
        b.onerror = (0,
        z.q)(this.uw, this, a);
        this.c.appendChild(b)
    }
    ;
    Kr.prototype.uw = function(a, b) {
        var c = z.xo(z.X.zG, {
            Ae: a.Ae,
            le: a.get(Oj.rd).toLowerCase(),
            type: "placeholder"
        });
        Ji(c, b.target)
    }
    ;
    z.u(Lr, z.T);
    Lr.prototype.r = function() {
        this.c = z.ji("DIV", "fyre-pending-video", "Video will be ready soon")
    }
    ;
    z.u(Mr, z.T);
    Mr.prototype.r = function() {
        this.c = z.ji("DIV", "fyre-comment-media fyre-comment-media-container");
        z.w(this.l.jb, this.oN, this)
    }
    ;
    Mr.prototype.oN = function(a) {
        var b = Oj;
        a.get(b.ua) !== Qj.lf && this.AN(a.toJSON()) && ("LivefyreRawHTML" === a.get(b.rd) ? (this.Fs = new Jr,
        this.G(this.Fs, !0),
        this.Fs.Oa(a.get(b.Ii))) : a.get(b.ua) === Qj.UM ? (this.qX = new Lr,
        this.G(this.qX, !0)) : (a.get("thumbnail_url") && !this.Rg && Or(this, a),
        1 < Nr(this).length && (this.Bj || (this.Bj = new Kr,
        this.G(this.Bj, !0),
        this.p().e(this.Bj.f(), "click", this.pS)),
        this.Bj.ou(a))))
    }
    ;
    Mr.prototype.pS = function(a) {
        a.preventDefault();
        a = a.target;
        var b = a.getAttribute("data-thumb-cid");
        "IMG" === a.nodeName || b || (a = Fi(a));
        if (b = a.getAttribute("data-thumb-cid"))
            a = this.l.kE(b),
            b = a.get("url"),
            z.v.hh && z.ua(b, "http:") ? window.open(b) : (Or(this, a),
            a.get("thumbnail_url") || wr(this.Rg, !1))
    }
    ;
    z.u(Pr, z.T);
    z.e = Pr.prototype;
    z.e.K = function(a) {
        a.innerHTML = z.X.qC(this.t());
        this.c = a
    }
    ;
    z.e.h = function() {
        this.cH = this.Dx = this.DG = this.CG = this.dm = null;
        Pr.b.h.call(this)
    }
    ;
    z.e.m = function() {
        Pr.b.m.call(this);
        this.CG = this.o("fyre-mod-approve");
        this.DG = this.o("fyre-mod-deny");
        this.Dx = this.o("fyre-mod-actions");
        this.cH = this.o("fyre-pending");
        var a = z.pa(this.ib, "approveClicked")
          , b = z.pa(this.ib, "denyClicked");
        this.p().e(this.CG, "click", a).e(this.DG, "click", b);
        z.Mh(z.F, z.F.k.Od, this.gF, this);
        this.gF()
    }
    ;
    z.e.S = function() {
        z.F.off(null, null, this);
        z.fk(this.Cr, "fyre-message-mod-approvable", "fyre-message-user-approvable");
        Pr.b.S.call(this)
    }
    ;
    z.e.t = function() {
        var a = this.tf;
        return {
            j: {
                WU: a.get(a.g.KL)
            }
        }
    }
    ;
    z.e.ib = function(a, b) {
        b.preventDefault();
        this.dispatchEvent({
            xa: this.l,
            type: a
        })
    }
    ;
    z.e.gF = function() {
        if (this.aa) {
            var a = z.F.get(z.F.k.Od);
            z.dk(this.Dx, "fyre-hide");
            z.fk(this.Cr, "fyre-message-mod-approvable", "fyre-message-user-approvable");
            a ? (z.dk(this.Cr, "fyre-message-mod-approvable"),
            z.fk(this.Dx, "fyre-hide")) : z.dk(this.Cr, "fyre-message-user-approvable");
            z.fk(this.cH, "fyre-hide")
        }
    }
    ;
    z.u(Qr, z.T);
    var rH = {
        fav: "TwitterLikeClick",
        reply: "TwitterReplyClick",
        retweet: "TwitterRetweetClick"
    };
    Qr.prototype.zE = function(a) {
        a.preventDefault();
        if ("A" == a.target.tagName)
            a = ck(a.target);
        else if ("SPAN" == a.target.tagName)
            a = ck(Ei(a.target));
        else
            return;
        z.Qa(a, function(a) {
            a = a.split("-");
            "tw" === a[1] && this.dispatchEvent({
                type: "TwitterActionClick",
                XW: rH[a[2]],
                n: this.W
            });
            if (3 !== a.length)
                return !1;
            this.dispatchEvent({
                type: "action_clicked",
                key: a[1],
                n: this.W,
                s: this.mf
            });
            return !0
        }, this)
    }
    ;
    Qr.prototype.Xn = function() {
        this.W.get(Lm);
        var a = !z.Jh().gm
          , b = gn(this.W);
        return a && !this.wu || b || this.W.Yh() ? !1 : !this.jx
    }
    ;
    z.u(Sr, z.T);
    z.e = Sr.prototype;
    z.e.K = function(a) {
        var b = z.xo(z.X.bW, this.t());
        a.parentElement.replaceChild(b, a);
        Sr.b.K.call(this, b)
    }
    ;
    z.e.m = function() {
        Sr.b.m.call(this);
        var a = this.p();
        a.e(this.c, "click", this.Ub);
        a.e(this.c, "mouseover", (0,
        z.q)(this.yI, this, "block"));
        a.e(this.c, "mouseout", (0,
        z.q)(this.yI, this, "none"));
        var b = z.Eh("fyre-share-permalink", this.c);
        a.e(b, HG, this.dR)
    }
    ;
    z.e.t = function() {
        var a = {
            XU: pn(this.C.n).get(qn.URL) || ""
        };
        z.A(a, this.C.Tu);
        return a
    }
    ;
    z.e.Ub = function(a) {
        a.stopPropagation();
        a = a.target.innerText.toLowerCase();
        -1 !== ["facebook", "twitter"].indexOf(a) && this.dispatchEvent({
            type: "action_clicked",
            key: "share",
            n: this.C.n,
            s: this.C.s,
            cW: a
        })
    }
    ;
    z.e.dR = function(a) {
        a.target.select()
    }
    ;
    z.e.yI = function(a) {
        var b = pn(this.C.n)
          , c = z.Eh("fyre-share-popover", this.c);
        z.vl(c, {
            display: a
        });
        b.get(qn.URL) || this.KV || (this.KV = !0,
        this.dispatchEvent({
            type: "fetchPermalink",
            n: this.C.n,
            ia: (0,
            z.q)(this.gX, this, b)
        }))
    }
    ;
    z.e.gX = function(a, b) {
        var c = z.Eh("fyre-share-permalink", this.c)
          , d = b.data.url;
        a.set(qn.URL, d);
        c.value = d;
        z.vl(c, {
            display: "block"
        })
    }
    ;
    z.u(Tr, Qr);
    z.e = Tr.prototype;
    z.e.Wn = function(a) {
        if (this.mf.Gb() || this.mf.Sc() || this.mf.Qe())
            return !1;
        var b = this.W.get(z.Zm).moderator
          , c = gn(this.W);
        return (a ? z.F.eb() : z.F.get(z.E.lm)) && !b && !this.jx && !c
    }
    ;
    z.e.bx = function() {
        return z.F.eb() || this.jx
    }
    ;
    z.e.dx = function() {
        var a = gn(this.W)
          , b = z.F.eb();
        return this.tv && b && !a
    }
    ;
    z.e.t = function() {
        return {
            Pi: Ur(this)
        }
    }
    ;
    z.e.K = function(a) {
        Tr.b.K.call(this, a);
        a = z.X.Pi;
        z.to(this.c, a, this.t());
        a = z.bb(this.C, "appContext", "appOpts", "shareDelegate");
        gn(this.W) || z.ga(a) || this.Xl || (this.Xl = new Sr({
            s: this.mf,
            n: this.W,
            Tu: mh(Ur(this), function(a) {
                return "share" === a.key
            })
        }),
        this.Xl.U(z.Eh("fyre-share-link", this.c)),
        this.Xl.kh(this));
        hn(this.W) && (a = np,
        a = wo(a, {
            dq: z.v.BI,
            kt: hn(this.W)
        }),
        z.Ki(this.c, a))
    }
    ;
    z.e.m = function() {
        Tr.b.m.call(this);
        this.p().e(this.c, "click", this.zE);
        hn(this.W) && z.Xf(z.v.CI)
    }
    ;
    z.e.h = function() {
        this.mf = this.W = this.cn = null;
        this.Xl && this.Xl.q();
        this.Xl = null;
        Tr.b.h.call(this)
    }
    ;
    z.u(Vr, z.T);
    var $r = new z.zd([0, 4, 5, 8]);
    z.e = Vr.prototype;
    z.e.r = function() {
        this.c = z.xo(z.X.Hq, this.t())
    }
    ;
    z.e.K = function(a) {
        Vr.b.K.call(this, a);
        a = this.l.get(Hm);
        Xr(a) ? z.to(this.c, z.X.Hq, this.t()) : this.dispatchEvent("edit_timeout")
    }
    ;
    z.e.m = function() {
        Vr.b.m.call(this);
        this.p().e(this.f(), "click", this.ib);
        if (!z.F.eb() && !this.QS) {
            var a = Zr(this.l, this.zb);
            0 > a ? this.dispatchEvent("edit_timeout") : as(this, Math.ceil(a / 60))
        }
    }
    ;
    z.e.S = function() {
        (0,
        window.clearTimeout)(this.xi);
        z.Oc(this.f());
        this.c = null;
        Vr.b.S.call(this)
    }
    ;
    z.e.t = function() {
        return {
            interval: this.zb,
            XS: zj(this.w) ? "reviews" : "default",
            Ue: z.F.eb(),
            j: {
                Hq: this.Wj.get(this.Wj.g.hf)
            }
        }
    }
    ;
    z.e.ib = function(a) {
        a.preventDefault();
        this.dispatchEvent("edit_clicked")
    }
    ;
    z.u(bs, z.T);
    z.e = bs.prototype;
    z.e.K = function(a) {
        bs.b.K.call(this, a);
        this.cy();
        this.xo()
    }
    ;
    z.e.m = function() {
        this.n.on("change", this.gl, this);
        z.Mh(this.w, this.w.k.zc, this.Th, this);
        z.F.on(z.F.Ga.Ag, this.xo, this);
        this.jd && this.p().e(this.jd, "edit_timeout", (0,
        z.q)(function() {
            this.jd.S()
        }, this));
        bs.b.m.call(this)
    }
    ;
    z.e.xo = function() {
        var a = this.ha[Vu]
          , b = Wr(this.n);
        this.jd && this.jd.aa && this.jd.S();
        this.jd && !a && b && (a = z.Qc(this.c),
        this.jd.ra(a[a.length - 1]))
    }
    ;
    z.e.cy = function() {
        var a = this.n.get(this.n.k.Jc)
          , a = cs(z.Qh(window.document, a));
        this.c.innerHTML = "";
        this.c.appendChild(a)
    }
    ;
    z.e.gl = function() {
        if (!this.La && this.aa) {
            var a = this.n.k
              , b = this.n.Vg(a.Jc)
              , c = this.n.Vg(a.Uf)
              , d = this.n.Vg(a.Kb);
            this.n.Vg(a.zm) && this.xo();
            if (d || b || c)
                this.cy(),
                this.xo()
        }
    }
    ;
    z.e.Th = function(a, b) {
        b && this.xo()
    }
    ;
    z.e.S = function() {
        this.n.off(null, null, this);
        this.w.off(null, null, this);
        z.F.off(z.F.Ga.Ag);
        bs.b.S.call(this)
    }
    ;
    z.u(ds, z.T);
    ds.prototype.K = function(a) {
        ds.b.K.call(this, a);
        this.Dz = new Date;
        this.Dz.setDate(this.Dz.getDate() - 1);
        this.Tx = es(this);
        this.fX = (0,
        z.q)(function() {
            this.Tx = es(this, this.Tx)
        }, this)
    }
    ;
    ds.prototype.h = function() {
        window.clearInterval(this.lD);
        this.lD = null;
        ds.b.h.call(this)
    }
    ;
    ds.prototype.m = function() {
        ds.b.m.call(this);
        this.Dz.getTime() < this.Tx.getTime() && (this.lD = (0,
        window.setInterval)(this.fX, 6E4))
    }
    ;
    z.u(gs, Qr);
    var sH = {
        rA: "fyre-comment-flag-mobile-btn",
        wL: "fyre-mobile-action-button"
    };
    gs.prototype.K = function(a) {
        gs.b.K.call(this, a);
        z.to(a, dp);
        var b = z.ji("DIV");
        z.to(b, z.X.Pi, this.t());
        z.w(b.childNodes, function(b) {
            z.dk(b, sH.wL);
            a.appendChild(b)
        });
        z.N(this.c, !!this.dE)
    }
    ;
    gs.prototype.m = function() {
        this.p().e(this.c, "click", this.ib);
        gs.b.m.call(this)
    }
    ;
    gs.prototype.t = function() {
        return {
            Pi: Rr(this)
        }
    }
    ;
    gs.prototype.ib = function(a) {
        a.preventDefault();
        z.jk(a.target, sH.rA) ? this.dispatchEvent("mobile_flag_butn") : this.zE(a)
    }
    ;
    z.u(hs, bs);
    hs.prototype.cy = function() {
        var a = this.n.k
          , b = this.n.get(a.ef).Bk(0)
          , a = this.n.get(a.Jc)
          , a = cs(z.Qh(window.document, a))
          , c = window.document.createDocumentFragment()
          , d = Oj;
        c.appendChild(z.xo(z.X.zT, {
            title: b.get(d.ab),
            type: b.get(d.ua),
            url: b.get(d.URL)
        }));
        "link" === b.get(d.ua) && (b = z.xo(z.X.Yx, {
            j: {
                Yx: z.W.get(z.W.g.PL)
            },
            url: b.get(d.URL)
        }),
        (Ii(a) || a).appendChild(b));
        c.appendChild(a);
        this.c.innerHTML = "";
        this.c.appendChild(c)
    }
    ;
    z.u(ns, z.T);
    var tH = {
        za: "fyre-hovercard-display-name",
        I_: "fyre-hovercard-button",
        t0: "fyre-hovercard-social-button",
        TB: "fyre-hovercard-username"
    }
      , uH = {
        facebook: "FacebookUserSubscribe",
        twitter: "TwitterUserFollow"
    };
    z.e = ns.prototype;
    z.e.K = function(a) {
        ns.b.K.call(this, a);
        var b, c = this.t();
        b = z.Q;
        if (c.Gb)
            c = (0,
            z.Q)('\x3cdiv class\x3d"fyre-hovercard-social-button fyre-hovercard-social-button-twitter"\x3e\x3ciframe name\x3d"twitter" allowtransparency\x3d"true" frameborder\x3d"0" scrolling\x3d"no" src\x3d"https://platform.twitter.com/widgets/follow_button.html?screen_name\x3d' + Po(c.da) + '\x26show_count\x3dfalse\x26show_screen_name\x3dfalse" style\x3d"width:60px; height:20px;"\x3e\x3c/iframe\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-hovercard-display-name"\x3e' + z.P(c.pn) + '\x3c/div\x3e\x3cdiv class\x3d"fyre-hovercard-username"\x3e' + (c.DF ? '\x3ca href\x3d"http://twitter.com/' + z.R(c.da) + '" target\x3d"_blank"\x3e@' + z.P(c.da) + "\x3c/a\x3e" : "") + '\x3c/div\x3e\x3cp class\x3d"fyre-hovercard-bio"\x3e' + z.P(c.xC) + "\x3c/p\x3e");
        else if (c.Sc)
            c = (0,
            z.Q)('\x3cdiv class\x3d"fyre-hovercard-social-button fyre-hovercard-social-button-facebook"\x3e\x3ciframe name\x3d"facebook" src\x3d"https://www.facebook.com/plugins/subscribe.php?href\x3dhttps%3A%2F%2Fwww.facebook.com%2F' + Po(c.pW) + '\x26amp;layout\x3dbutton\x26amp;show_faces\x3dfalse\x26amp;colorscheme\x3dlight\x26amp;font\x3dlucida+grande\x26amp;" scrolling\x3d"no" frameborder\x3d"0" allowTransparency\x3d"true"\x3e\x3c/iframe\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-hovercard-display-name"\x3e' + z.P(c.pn) + '\x3c/div\x3e\x3cdiv class\x3d"fyre-hovercard-username"\x3e' + (c.DF ? '\x3ca href\x3d"' + z.R(z.S(c.Ba)) + '" target\x3d"_blank"\x3efb.me/' + z.P(c.da) + "\x3c/a\x3e" : "") + "\x3c/div\x3e");
        else {
            for (var d = '\x3cdiv class\x3d"fyre-hovercard-connections"\x3e', f = c.rq, g = f.length, h = 0; h < g; h++)
                var k = f[h]
                  , d = d + ('\x3ca href\x3d"' + z.R(z.S(k.Ba)) + '" target\x3d"_blank"\x3e\x3cimg src\x3d"' + z.R(z.S(c.Sd)) + "/images/hovercard/" + z.R(k.le) + '.png" /\x3e\x3c/a\x3e');
            d += '\x3c/div\x3e\x3cdiv class\x3d"fyre-hovercard-display-name"\x3e' + (c.Ba ? '\x3ca href\x3d"' + z.R(z.S(c.Ba)) + '" target\x3d"_blank"\x3e' + z.P(c.pn) + "\x3c/a\x3e" : z.P(c.pn)) + "\x3c/div\x3e" + (c.hW ? '\x3cdiv class\x3d"fyre-hovercard-rating"\x3e' + z.P(c.Bb) + " pts\x3c/div\x3e" : "") + (c.Ba ? '\x3cdiv class\x3d"fyre-hovercard-username"\x3e\x3ca href\x3d"' + z.R(z.S(c.Ba)) + '" target\x3d"_blank"\x3e' + z.P(c.kH) + "\x3c/a\x3e\x3c/div\x3e" : "") + '\x3cp class\x3d"fyre-hovercard-bio"\x3e' + z.P(c.xC) + '\x3c/p\x3e\x3ca class\x3d"fyre-hovercard-button"\x3e' + z.P(c.j.viewProfile) + "\x3c/a\x3e";
            c = (0,
            z.Q)(d)
        }
        b = b(c);
        a.innerHTML = b;
        a = z.Eh("fyre-hovercard-social-button", this.c);
        b = this.p();
        b.e(this.c, "click", this.Ub);
        a && (b.e(a, "mouseover", this.bS),
        b.e(a, "mouseout", this.aS))
    }
    ;
    z.e.t = function() {
        var a = z.Nd
          , b = 4 === this.pe ? z.V : z.W
          , c = this.l.get(a.mA)
          , d = this.l.get(a.GA)
          , f = {};
        f.Sd = z.v.J.qb;
        f.xC = this.l.get(a.ip);
        f.da = this.l.get(a.za);
        f.DF = !!f.da;
        f.Ba = this.l.get(a.Yb);
        f.kH = "";
        f.Ba && (f.kH = this.ax ? f.Ba.replace("http://", "") : "livefyre.com/" + f.da);
        f.Bb = this.l.get(a.wb);
        f.source = this.l.get(a.ua) || 1;
        f.hW = !this.ax || this.Sy;
        f.Sc = this.l.Sc();
        f.Gb = this.l.Gb();
        if (f.Sc || f.Gb)
            f.pW = this.l.get(a.X).split("@")[0];
        var g = [];
        this.ax || g.push({
            le: "livefyre",
            Ba: f.Ba
        });
        z.hj(g, this.l.get(a.pm));
        f.rq = g;
        f.pn = f.da;
        c && d && (f.pn = z.sj(c, " ", d));
        f.j = {
            viewProfile: b.get(b.g.MK)
        };
        return f
    }
    ;
    z.e.bS = function() {
        this.Ex = (0,
        window.setInterval)((0,
        z.q)(function() {
            var a = window.document.activeElement;
            a && "IFRAME" === a.tagName && ((0,
            window.clearInterval)(this.Ex),
            this.bb.$b.send(z.Xn(uH[a.name], {
                bc: this.W
            })))
        }, this), 300)
    }
    ;
    z.e.aS = function() {
        (0,
        window.clearInterval)(this.Ex)
    }
    ;
    z.e.Ub = function(a) {
        var b = a.target
          , c = b.parentNode;
        $i(tH, function(a) {
            return z.jk(b, a) || z.jk(c, a)
        }) && (a.preventDefault(),
        this.dispatchEvent({
            type: "author_click",
            s: this.l
        }))
    }
    ;
    ss.prototype.Fc = function() {}
    ;
    z.u(z.ts, ss);
    z.ts.prototype.Fc = function(a, b, c) {
        z.os(this.element, this.Fh, a, b, void 0, c, this.UU)
    }
    ;
    z.u(us, z.ts);
    us.prototype.NP = function() {
        return this.Vr
    }
    ;
    us.prototype.Fc = function(a, b, c, d) {
        var f = z.os(this.element, this.Fh, a, b, null, c, 10, d, this.Mx);
        if (f & 496) {
            var g = vs(f, this.Fh);
            b = vs(f, b);
            f = z.os(this.element, g, a, b, null, c, 10, d, this.Mx);
            f & 496 && (g = vs(f, g),
            b = vs(f, b),
            z.os(this.element, g, a, b, null, c, this.Vr, d, this.Mx))
        }
    }
    ;
    z.u(ws, ss);
    ws.prototype.Fc = function(a, b, c, d) {
        z.os(Dl(a), 0, a, b, this.Uu, c, null, d)
    }
    ;
    z.u(xs, kq);
    xs.prototype.Ze = function(a) {
        this.Rx = a || void 0;
        this.ka() && this.Fc()
    }
    ;
    xs.prototype.Fc = function() {
        if (this.Rx) {
            var a = !this.ka() && "move_offscreen" != this.yn()
              , b = this.f();
            a && (b.style.visibility = "hidden",
            z.N(b, !0));
            this.Rx.Fc(b, this.fH, this.BT);
            a && z.N(b, !1)
        }
    }
    ;
    z.u(z.zs, xs);
    var Es = [];
    z.e = z.zs.prototype;
    z.e.Ac = null;
    z.e.className = "goog-tooltip";
    z.e.Jo = 500;
    z.e.Pw = 0;
    z.e.R = function() {
        return this.va
    }
    ;
    z.e.Td = function(a) {
        a = Gh(window.document, a);
        this.Xa.add(a);
        Jk(a, "mouseover", this.Ne, !1, this);
        Jk(a, "mouseout", this.qr, !1, this);
        Jk(a, "mousemove", this.hF, !1, this);
        Jk(a, "focus", this.Tg, !1, this);
        Jk(a, "blur", this.qr, !1, this)
    }
    ;
    z.e.detach = function(a) {
        if (a)
            a = Gh(window.document, a),
            As(this, a),
            this.Xa.remove(a);
        else {
            for (var b = this.Xa.zd(), c = 0; a = b[c]; c++)
                As(this, a);
            this.Xa.clear()
        }
    }
    ;
    z.e.rg = function(a) {
        a = qo(a, null);
        var b = this.f();
        b && (b.innerHTML = oo(a))
    }
    ;
    z.e.Cy = function(a) {
        var b = this.f();
        b && z.Oc(b);
        z.zs.b.Cy.call(this, a);
        a && (b = this.va.la().body,
        b.insertBefore(a, b.lastChild))
    }
    ;
    z.e.yf = function() {
        return this.ti ? this.ka() ? 4 : 1 : this.Nn ? 3 : this.ka() ? 2 : 0
    }
    ;
    z.e.io = function() {
        if (!kq.prototype.io.call(this))
            return !1;
        if (this.anchor)
            for (var a, b = 0; a = Es[b]; b++)
                z.Vc(a.f(), this.anchor) || a.V(!1);
        z.kj(Es, this);
        a = this.f();
        a.className = this.className;
        Hs(this);
        Jk(a, "mouseover", this.vF, !1, this);
        Jk(a, "mouseout", this.uF, !1, this);
        Fs(this);
        return !0
    }
    ;
    z.e.Jx = function() {
        z.Ta(Es, this);
        for (var a = this.f(), b, c = 0; b = Es[c]; c++)
            b.anchor && z.Vc(a, b.anchor) && b.V(!1);
        this.bH && Gs(this.bH);
        Uk(a, "mouseover", this.vF, !1, this);
        Uk(a, "mouseout", this.uF, !1, this);
        this.anchor = void 0;
        0 == this.yf() && (this.Rs = !1);
        kq.prototype.Jx.call(this)
    }
    ;
    z.e.Ax = function(a, b) {
        this.anchor == a && this.Xa.contains(this.anchor) && (this.Rs || !this.Y1 ? (this.V(!1),
        this.ka() || this.gH(a, b)) : this.anchor = void 0);
        this.ti = void 0
    }
    ;
    z.e.qj = function() {
        return this.Xa
    }
    ;
    z.e.gH = function(a, b) {
        this.anchor = a;
        this.Ze(b || this.Oh(0));
        this.V(!0)
    }
    ;
    z.e.IT = function(a) {
        this.Nn = void 0;
        a == this.anchor && (null != this.Ac && (this.Ac == this.f() || this.Xa.contains(this.Ac)) || this.NC && this.NC.Ac || this.V(!1))
    }
    ;
    z.e.Ne = function(a) {
        var b = Cs(this, a.target);
        this.Ac = b;
        Hs(this);
        b != this.anchor && (this.anchor = b,
        this.ti || (this.ti = el((0,
        z.q)(this.Ax, this, b, void 0), this.Jo)),
        Ds(this),
        Bs(this, a))
    }
    ;
    z.e.hF = function(a) {
        Bs(this, a);
        this.Rs = !0
    }
    ;
    z.e.Tg = function(a) {
        this.Ac = a = Cs(this, a.target);
        this.Rs = !0;
        if (this.anchor != a) {
            this.anchor = a;
            var b = this.Oh(1);
            Hs(this);
            this.ti || (this.ti = el((0,
            z.q)(this.Ax, this, a, b), this.Jo));
            Ds(this)
        }
    }
    ;
    z.e.Oh = function(a) {
        return 0 == a ? (a = this.Vm.clone(),
        new Is(a)) : new Js(this.Ac)
    }
    ;
    z.e.qr = function(a) {
        var b = Cs(this, a.target)
          , c = Cs(this, a.relatedTarget);
        b != c && (b == this.Ac && (this.Ac = null),
        Fs(this),
        this.Rs = !1,
        !this.ka() || a.relatedTarget && z.Vc(this.f(), a.relatedTarget) ? this.anchor = void 0 : Gs(this))
    }
    ;
    z.e.vF = function() {
        var a = this.f();
        this.Ac != a && (Hs(this),
        this.Ac = a)
    }
    ;
    z.e.uF = function(a) {
        var b = this.f();
        this.Ac != b || a.relatedTarget && z.Vc(b, a.relatedTarget) || (this.Ac = null,
        Gs(this))
    }
    ;
    z.e.h = function() {
        this.V(!1);
        Fs(this);
        this.detach();
        this.f() && z.Oc(this.f());
        this.Ac = null;
        delete this.va;
        z.zs.b.h.call(this)
    }
    ;
    z.u(Is, ws);
    Is.prototype.Fc = function(a, b, c) {
        b = Dl(a);
        b = Gl(b);
        c = c ? new sl(c.top + 10,c.right,c.bottom,c.left + 10) : new sl(10,0,0,10);
        rs(this.Uu, a, 4, c, b, 9) & 496 && rs(this.Uu, a, 4, c, b, 5)
    }
    ;
    z.u(Js, z.ts);
    Js.prototype.Fc = function(a, b, c) {
        var d = new z.uh(10,0);
        z.os(this.element, this.Fh, a, b, d, c, 9) & 496 && z.os(this.element, 2, a, 1, d, c, 5)
    }
    ;
    z.u(Ks, z.zs);
    z.ca(Ks);
    Ks.prototype.Jo = 100;
    Ks.prototype.Pw = 100;
    var Ls = "fyre-hovercard"
      , Ms = "fyre-hovercard-body";
    z.e = Ks.prototype;
    z.e.mC = function() {
        var a = this.zg.element
          , b = 0;
        a.clientHeight && (b = this.zg.element,
        (0,
        window.parseInt)(b.style.top.replace("px", ""), 10) - b.clientHeight < Dh(window.document).y ? (b = this.anchor.offsetHeight + 2,
        jm(this.zg)) : (b = -a.clientHeight,
        km(this.zg)),
        ys(this, b, void 0, void 0, -10))
    }
    ;
    z.e.Td = function(a, b, c) {
        this.tc && (Ks.b.Td.call(this, a),
        c ? (this.kh(c),
        b = z.ga(b) ? (0,
        z.q)(b, c, a) : z.n,
        a.ia = b) : a.ia = z.n)
    }
    ;
    z.e.Oh = function() {
        var a = Ks.b.Oh.call(this, 1);
        a.Fh = 0;
        return a
    }
    ;
    z.e.t = function() {
        var a = z.Nd
          , b = {};
        b.Sd = z.v.J.qb;
        b.da = "";
        this.l && (b.da = this.l.get(a.za));
        return b
    }
    ;
    z.e.Ne = function(a) {
        Cs(this, a.target).ia();
        Ks.b.Ne.call(this, a)
    }
    ;
    z.e.Gl = function() {
        Ks.b.Gl.call(this);
        this.mC()
    }
    ;
    z.e.gH = function(a, b) {
        this.l.kc() || (ys(this, null),
        this.anchor = a,
        this.Ze(b || this.Oh(1)),
        this.V(!0))
    }
    ;
    z.e.QH = function() {
        this.Eh && this.Eh.q();
        this.Eh = new ns(this.l,this.W,this.pe,this.bb,this.Sy);
        this.Eh.kh(this);
        this.Eh.U(this.Du.element);
        (0,
        window.setTimeout)((0,
        z.q)(this.mC, this), 20)
    }
    ;
    z.e.XV = function() {
        this.Eh && this.Eh.q();
        this.Du.ol(ls(this.t()))
    }
    ;
    z.e.Lf = function(a, b) {
        this.l && this.l.off(null, null, this);
        this.W = b;
        this.l = a;
        var c = z.Nd;
        null != this.l.get(c.ip) ? this.QH() : (this.Eh && this.Eh.q(),
        this.Du.ol(ms(this.t())),
        this.l.on(this.l.jc(c.ip), this.QH, this),
        this.dispatchEvent({
            type: "author_fetch",
            s: this.l,
            QD: (0,
            z.q)(this.XV, this)
        }))
    }
    ;
    z.e.gc = function(a, b) {
        null != a && (this.tc = a,
        this.Sy = b)
    }
    ;
    z.u(Ns, so);
    Ns.prototype.Yd = yo;
    var vH = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        if (z.C)
            return z.B("10.0");
        var a = window.document.createElement("div")
          , b = rl()
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!UG.test("div"))
            throw Error("Invalid tag name \x3cdiv\x3e.");
        if ("div"in WG)
            throw Error("Tag name \x3cdiv\x3e is not allowed for SafeHtml.");
        var d = null
          , b = "\x3cdiv";
        if (c)
            for (var f in c) {
                if (!UG.test(f))
                    throw Error('Invalid attribute name "' + f + '".');
                var g = c[f];
                if (null != g) {
                    if (g instanceof bo)
                        g = eo(g);
                    else if ("style" == f.toLowerCase()) {
                        if (!z.ia(g))
                            throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                        if (!(g instanceof fo)) {
                            var h = ""
                              , k = void 0;
                            for (k in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(k))
                                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                                var m = g[k];
                                null != m && (m instanceof bo ? m = eo(m) : TG.test(m) || (m = "zClosurez"),
                                h += k + ":" + m + ";")
                            }
                            g = h ? io(h) : SG
                        }
                        g = ho(g)
                    } else {
                        if (/^on/i.test(f))
                            throw Error('Attribute "' + f + '" requires goog.string.Const value, "' + g + '" given.');
                        if (g instanceof jo)
                            g = lo(g);
                        else if (f.toLowerCase()in VG)
                            throw Error('Attribute "' + f + '" requires goog.string.Const or goog.html.SafeUrl value, "' + g + '" given.');
                    }
                    b += " " + f + '\x3d"' + z.ya(String(g)) + '"'
                }
            }
        f = void 0;
        z.ba(f) ? z.ea(f) || (f = [f]) : f = [];
        !0 === RG.div ? b += "\x3e" : (d = ro(f),
        b += "\x3e" + oo(d) + "\x3c/div\x3e",
        d = d.tn());
        (c = c && c.dir) && (d = /^(ltr|rtl|auto)$/i.test(c) ? 0 : null);
        b = qo(b, d);
        a.innerHTML = oo(b);
        return "" != xl(a.firstChild, "transition")
    });
    z.u(Rs, bl);
    z.e = Rs.prototype;
    z.e.play = function() {
        if (1 == this.F)
            return !1;
        this.Ve();
        this.ae("play");
        this.startTime = z.qa();
        this.F = 1;
        if (vH())
            return z.vl(this.c, this.US),
            this.tI = el(this.YU, void 0, this),
            !0;
        this.hz(!1);
        return !1
    }
    ;
    z.e.YU = function() {
        z.Ml(this.c);
        Qs(this.c, this.ZW);
        z.vl(this.c, this.ZD);
        this.tI = el((0,
        z.q)(this.hz, this, !1), 1E3 * this.EO)
    }
    ;
    z.e.stop = function() {
        1 == this.F && this.hz(!0)
    }
    ;
    z.e.hz = function(a) {
        z.vl(this.c, "transition", "");
        z.s.clearTimeout(this.tI);
        z.vl(this.c, this.ZD);
        this.endTime = z.qa();
        this.F = cl;
        a ? this.ae("stop") : this.ae("finish");
        this.nd()
    }
    ;
    z.e.h = function() {
        this.stop();
        Rs.b.h.call(this)
    }
    ;
    z.e.pause = function() {}
    ;
    var Vu;
    z.u(z.Ss, z.T);
    z.Ts = "hideHovercards";
    Vu = "hideEditComponent";
    z.e = z.Ss.prototype;
    z.e.ea = z.It;
    z.e.Sp = function() {
        var a = this.d.H.Wk
          , b = this.w.get(z.U.xm)
          , c = {
            d: this.d
        };
        c.Fg = this.d.H.Fg;
        b && (b = !this.w.ah());
        this.vk && this.vk.q();
        var d = Tr;
        this.hg && (d = gs);
        this.vk = new d(a,b,this.n,c);
        this.G(this.vk)
    }
    ;
    z.e.wq = function() {
        var a = this.o(bt.rt);
        a && this.vk.U(a);
        this.hg && this.p().e(this, "mobile_flag_butn", this.UQ)
    }
    ;
    z.e.r = function() {
        var a = z.xo(z.X.jO);
        this.K(a)
    }
    ;
    z.e.K = function(a) {
        z.Ss.b.K.call(this, a);
        z.to(a, this.dm, this.t());
        this.o("fyre-comment-body");
        this.Be = this.o("fyre-comment");
        this.VD = this.o("fyre-featured");
        this.ln = this.o("fyre-comment-footer");
        this.wq();
        this.pq.U(this.Be);
        this.Zu.U(this.o("fyre-comment-date"));
        this.JI();
        $s(this, this.s, "fyre-tag-author-");
        Ys(this);
        Ws(this);
        var b = 2 !== this.w.get(z.U.yp)
          , c = this.n.get(this.ea.ef).length;
        b && c && at(this);
        b = this.n.get(this.ea.Zb);
        if (22 === b || 25 === b) {
            var d = Oj
              , f = this.n.get(this.n.k.ef).Bk(0)
              , b = this.o(bt.bk)
              , g = this.n.get(this.ea.ef).length
              , c = g && f.get(d.ua) === Qj.lf
              , d = g && f.get(d.ab);
            !c && d && z.Ki(b, z.xo(z.X.AT, {
                title: d
            }))
        }
        Us(this) && !this.d.H.Qa && z.dk(a, "show-avatar")
    }
    ;
    z.e.h = function() {
        this.C = this.mc = this.hg = this.Wh = this.VD = this.n = this.w = this.s = this.d = null;
        z.Ss.b.h.call(this)
    }
    ;
    z.e.m = function() {
        z.Ss.b.m.call(this);
        var a = this.n.get(this.ea.Kb);
        Vs(this, a === this.n.Kb.qp);
        this.n.bind("change", this.gl, this);
        z.Mh(this.n, this.ea.td, this.JI, this);
        z.Mh(z.F, z.F.k.X, this.Ln, this);
        a = this.w.jc(z.U.zc);
        this.w.on(a, this.Th, this);
        this.dispatchEvent({
            type: "renderComplete",
            xa: this.n
        });
        this.p().e(this, "fetchPermalink", this.RQ)
    }
    ;
    z.e.S = function() {
        this.n && this.n.off(null, null, this);
        this.w && this.w.off(null, null, this);
        z.F.off(null, null, this);
        z.Ss.b.S.call(this)
    }
    ;
    z.e.t = function() {
        var a = z.Nd, b = {}, c = this.s.get(a.vb) || this.s.get(a.fk), d = 22 === this.n.get(Hm), f = z.v.cc, g = Ps(this.s.get(a.za)), h = this.s.id, k = this.s.Sc(), m = this.s.Qe(), r = this.s.kc(), x = this.s.Gb(), t = this.s.Zh(), I = this.s.$n(), M = this.s.get(a.Yb), $ = this.s.get(a.wb), Xd = this.s.QP(), a = this.s.get(a.td), ha;
        ha = this.s;
        if (ha.Gb()) {
            var ma = ha.get("profileUrl");
            ha = ma.split("#!/");
            ma = ma.split("twitter.com/");
            ha = 1 < ha.length ? ha[1] || null : 1 < ma.length ? ma[1] || null : null
        } else
            ha = null;
        ma = this.n;
        ma = ma.Gb() ? (ma.get(ma.k.jm).tweetMeta || {}).verified_user || !1 : !1;
        b.s = {
            Lc: c,
            cc: f,
            da: g,
            id: h,
            Sc: k,
            Qe: m,
            kc: r,
            Gb: x,
            Zh: t,
            $n: I,
            Ba: M,
            Bb: $,
            source: Xd,
            IW: a,
            $W: ha,
            bX: ma
        };
        (c = this.n.get(cn)) && d && (b.XI = c.displayName || c.id || c.url,
        b.TD = c.image);
        b.s.AO = b.s.Qe && b.s.da && b.s.source !== z.Cg[1] && !d;
        b.Qa = this.ku();
        d = this.n.get(z.Zm);
        b.Ue = d.moderator;
        b.j = this.Uv();
        return b
    }
    ;
    z.e.ku = z.Jd(function() {
        var a;
        (a = 22 === this.n.get(this.n.k.Zb) && !Us(this)) || (a = (a = this.n.get(this.n.k.yA)) && -1 !== a.id.indexOf("tumblr"));
        return a || this.d.H.Qa
    });
    z.e.Uv = function() {
        return {
            aP: z.W.get(z.W.g.iK),
            CP: z.W.get(z.W.g.CK),
            DP: z.W.get(z.W.g.DK),
            FP: z.W.get(z.W.g.EK),
            GP: z.W.get(z.W.g.FK),
            Ue: z.W.get(z.W.g.Od)
        }
    }
    ;
    z.e.fl = function(a, b) {
        switch (b) {
        case this.ea.zm:
            this.KI(a)
        }
    }
    ;
    z.e.RQ = function(a) {
        Nu(this.d.Io, pn(a.n), a.ia)
    }
    ;
    z.e.KI = function(a) {
        Xs(this, a);
        this.xz();
        z.N(this.VD, a)
    }
    ;
    z.e.cQ = function() {
        this.Wh.Lf(this.s, this.n)
    }
    ;
    z.e.UQ = function(a) {
        a.bc = this.n
    }
    ;
    z.e.uR = function(a) {
        a.preventDefault();
        this.dispatchEvent({
            type: "author_click",
            s: pi(a.target.parentElement)
        })
    }
    ;
    z.e.vR = function(a) {
        (a = pi(a)) && this.Wh.Lf(a)
    }
    ;
    z.e.gl = function() {
        if (this.aa) {
            if (this.n.Vg(this.ea.Kb)) {
                var a = this.n.get(this.ea.Kb);
                Vs(this, a === this.n.Kb.qp)
            }
            z.y(this.n.kq(), this.fl, this)
        }
    }
    ;
    z.e.Ln = function() {
        this.aa && this.xz()
    }
    ;
    z.e.xz = function() {
        this.Sp();
        this.wq()
    }
    ;
    z.e.JI = function() {
        $s(this, this.n, "fyre-tag-content-")
    }
    ;
    z.e.Yg = function() {
        z.dk(this.c, "fyre-comment-highlight");
        var a = this.o("fyre-comment-highlight")
          , b = this.o("fyre-comment-user")
          , c = {
            opacity: 1,
            width: (b ? b.clientWidth ? b.clientWidth - 6 : 28 : 28) + "px"
        }
          , d = [];
        z.w(["opacity", "width"], function(a) {
            d.push({
                delay: 0,
                duration: .3,
                property: a,
                timing: "ease"
            })
        });
        c = new Rs(a,.3,{},c,d);
        b ? z.vl(b, "display", "block") : z.vl(a, "display", "block");
        c.play()
    }
    ;
    z.e.Ky = function(a) {
        var b = this.o(wH)
          , c = !1;
        a && (c = !0);
        z.N(b, c)
    }
    ;
    z.e.Ny = function() {
        var a = this.w.get(z.U.Pd)
          , b = !this.w.get(z.U.zc)
          , c = gn(this.n);
        return b || !a || c
    }
    ;
    z.u(z.ct, z.Qd);
    z.ca(z.ct);
    z.e = z.ct.prototype;
    z.e.KP = function(a, b, c) {
        (new z.Ee({
            url: z.v.J.ud + z.v.cf + "content/thread/",
            ta: b,
            oa: c
        })).send(a)
    }
    ;
    z.e.Kh = z.l(54);
    z.e.Nh = z.l(57);
    z.e.Mn = z.l(59);
    z.e.wv = function(a, b, c) {
        var d = new z.Rd(z.v.J.BC + z.v.hJ + "configuration/" + a.eU + "/site/" + a.af + "/");
        z.de(d, "section", "translations");
        z.de(d, "translations.lang_code", window.navigator.language);
        z.de(d, "translations.app", a.vN);
        a = {
            url: d.toString(),
            ta: b || z.n,
            oa: c || z.n,
            with_credentials: !1
        };
        (new z.Ee(a)).send()
    }
    ;
    z.u(z.et, z.rf);
    z.et.prototype.wv = function(a, b) {
        var c = z.Hb((0,
        z.q)(this.hN, this, a), b || z.n)
          , d = z.v.fi;
        "livefyre.com" === d ? b() : z.ct.D().wv({
            vN: zj(a) ? "review-component" : "comment-component",
            eU: d,
            af: a.get(z.U.ic)
        }, c, b)
    }
    ;
    z.et.prototype.hN = function(a, b) {
        var c, d = {}, f;
        200 === b.code && (zj(a) ? (c = "review-component",
        f = z.V) : (c = "comment-component",
        f = z.W),
        z.A(d, (b.data.translations || {})[c] || {}, this.d.H.j || {}),
        f.Vl(d))
    }
    ;
    z.u(st, z.Me);
    st.prototype.Bd = function(a, b) {
        this.ha = a;
        this.ub = b;
        z.Mh(z.F, z.F.k.X, this.qu, this);
        st.b.Bd.call(this, a, b)
    }
    ;
    st.prototype.h = function() {
        z.F.off(null, null, this);
        st.b.h.call(this)
    }
    ;
    st.prototype.WB = [1];
    st.prototype.RE = function(a) {
        for (var b, c = [], d = [], f = this.ub.vc(), g = this.ub.fb(), h, k = 0, m = a.length; k < m; k++)
            if (b = a[k],
            z.F.id !== b || !1 !== Ct(this.ub, b))
                (h = g.get(b)) && 10 > c.length ? c.push(h) : d.push(b);
        f.add(c);
        this.ub.Xy.Tp(d)
    }
    ;
    z.kd(["bootstrap_followers_received"], st.prototype.RE);
    st.prototype.xF = function() {
        this.qu(z.F);
        z.F.set(z.F.k.ik, !0);
        tt(this, 1);
        this.RE([z.F.id])
    }
    ;
    z.kd(["quill_follow_added"], st.prototype.xF);
    st.prototype.zF = function() {
        z.F.set(z.F.k.ik, !1);
        tt(this, -1);
        var a = this.ub.fb().get(z.F.id);
        a && this.ub.wc.remove(a)
    }
    ;
    z.kd(["quill_follow_removed"], st.prototype.zF);
    st.prototype.qu = function(a) {
        if (a.id) {
            var b = z.Nd
              , c = {};
            c[b.X] = a.id;
            c[b.vb] = a.get(z.E.vb);
            c[b.za] = a.get(z.E.za);
            c[b.Yb] = a.get(z.E.Yb);
            c[b.wb] = a.get(z.E.wb);
            a = new z.Md(c);
            this.ub.fb().get(a.id) || this.ub.fb().add(a);
            return a
        }
    }
    ;
    st.prototype.XR = function(a) {
        this.ub.Qs().add(a)
    }
    ;
    z.kd(["bootstrap_reviewer_received"], st.prototype.XR);
    st.prototype.Zv = function(a) {
        var b = this.ub.fb().get(a.id);
        a = qi(a);
        b ? b.set(a) : (b = new z.Md(a),
        this.ub.fb().add(b))
    }
    ;
    z.kd(["bootstrap_author_received", "stream_author_received", "eref_author_received", "login_author_received", "quill_author_received"], st.prototype.Zv);
    st.prototype.bQ = function(a) {
        var b = this.ub.fb(), c = [], d;
        for (d in a)
            a.hasOwnProperty(d) && c.push(qi(a[d]));
        b.add(c, {
            nW: !0,
            $e: !0
        })
    }
    ;
    z.kd(["bootstrap_authors_received"], st.prototype.bQ);
    st.prototype.Iw = function() {
        var a = z.F.id
          , b = z.F.Cd()
          , c = this.ub.Xy.contains(a);
        if (b || c)
            this.ub.Xy.remove(a),
            a = this.qu(z.F),
            this.ub.wc.add(a)
    }
    ;
    z.kd(["user_logged_in"], st.prototype.Iw, z.Uf);
    st.prototype.lS = function(a) {
        var b = this.ub.v()
          , c = this.ub.fb().get(a.content.Gg)
          , d = z.Fm(a, b, c)
          , c = z.Sa(this.WB, d.get(z.Jm))
          , f = z.Sa(this.WB, d.get(Km))
          , g = 0
          , h = b.Dd()
          , k = zj(b);
        if (!h && !k || z.nn(d)) {
            if (a.content && a.content.annotations && (a = a.content.annotations.annotation) && a.blockId)
                return;
            c && !f ? g++ : !c && f && g--;
            a = Math.max(0, b.get(z.U.Kc) + g);
            b.set(z.U.Kc, a)
        }
    }
    ;
    z.kd(["stream_message_received"], st.prototype.lS);
    st.prototype.nS = function(a) {
        a = z.gb(a.name, a.value);
        this.ub.w.set(a)
    }
    ;
    z.kd(["streamSettingReceived"], st.prototype.nS);
    st.prototype.jS = function(a) {
        var b = this.ub.wc
          , c = a.following;
        a = a.authorId;
        var d = this.ub.Vd.get(a)
          , f = b.get(a);
        !f && c ? (tt(this, 1),
        b.add(d)) : f && !c && (b.remove(a),
        tt(this, -1))
    }
    ;
    z.kd(["streamFollowerReceived"], st.prototype.jS);
    z.u(ut, z.qf);
    ut.prototype.Bd = function() {
        this.xa = z.Md
    }
    ;
    z.ca(vt);
    vt.prototype.get = function() {
        var a = z.rb()
          , b = this.aD.get("fyre-fpuuid");
        b || (b = this.VI(),
        this.aD.set("fyre-fpuuid", b, 31536E3, "/", a));
        return b
    }
    ;
    vt.prototype.VI = function(a) {
        return a ? (a ^ 16 * Math.random() >> a / 4).toString(16) : ([1E7] + -1E3 + -4E3 + -8E3 + -1E11).replace(/[018]/g, this.VI)
    }
    ;
    vt.prototype.isSupported = function() {
        return !!window.location.hostname
    }
    ;
    z.u(z.wt, z.Qd);
    z.ca(z.wt);
    z.e = z.wt.prototype;
    z.e.Dc = function(a, b, c, d, f) {
        var g = new z.Rd(z.v.J.so + z.v.cf + b);
        b = {
            ta: c || z.n,
            oa: d || z.n,
            method: "POST"
        };
        z.de(g, a.VP ? "lfgtoken" : "lftoken", a.gm);
        z.y(f || {}, function(a, b) {
            z.de(g, b, a)
        });
        b.url = g.toString();
        return new z.Ee(b)
    }
    ;
    z.e.postMessage = function(a, b, c, d) {
        var f = xt(a);
        this.Dc(b, "collection/" + a.Aa + "/post/", c, d).send(f)
    }
    ;
    z.e.ws = function(a, b, c, d) {
        var f = zt(a);
        this.Dc(b, "collection/" + a.Aa + "/post/review/", c, d).send(f)
    }
    ;
    z.e.rx = function(a, b, c, d, f) {
        var g = {
            message_id: a.Sa,
            collection_id: a.Aa
        };
        this.Dc(b, "message/" + a.Sa + "/" + c + "/", d, f).send(g)
    }
    ;
    z.e.ep = z.l(61);
    z.e.Ku = function(a, b, c, d) {
        var f = {
            message_id: a.Sa,
            collection_id: a.Aa,
            site_id: a.af
        };
        this.Dc(b, "message/" + a.Sa + "/bozo/", c, d).send(f)
    }
    ;
    z.e.jn = function(a, b, c, d) {
        var f = {
            message_id: a.Sa,
            collection_id: a.Aa,
            flag: a.bE,
            notes: a.gi,
            email: a.ej
        };
        this.Dc(b, "message/" + a.Sa + "/flag/" + a.bE + "/", c, d).send(f)
    }
    ;
    z.e.bv = function(a, b, c, d) {
        At(this, a, b, "message/" + a.Sa + "/delete/", c, d)
    }
    ;
    z.e.DS = function(a, b, c, d) {
        At(this, a, b, "message/" + a.Sa + "/hide/", c, d)
    }
    ;
    z.e.Jq = function(a, b, c, d) {
        var f = a.Sa
          , g = xt(a);
        g.collection_id = a.Aa;
        this.Dc(b, "message/" + f + "/edit/", c, d).send(g)
    }
    ;
    z.e.GO = function(a, b, c, d) {
        var f = a.Sa
          , g = zt(a);
        g.collection_id = a.Aa;
        this.Dc(b, "message/" + f + "/edit/review/", c, d).send(g)
    }
    ;
    z.e.AP = function(a, b, c, d) {
        this.aC.call(this, "follow", a, b, c, d)
    }
    ;
    z.e.cX = function(a, b, c, d) {
        this.aC.call(this, "unfollow", a, b, c, d)
    }
    ;
    z.e.aC = function(a, b, c, d, f) {
        var g = {
            collection_id: b.Aa
        };
        this.Dc(c, "collection/" + b.Aa + "/" + a + "/", d, f).send(g)
    }
    ;
    z.e.sv = function(a, b, c, d, f) {
        this.Dc(b, "collection/" + a.Aa + "/" + c + "/" + a.Sa + "/", d, f).send()
    }
    ;
    z.u(z.Bt, z.rf);
    z.e = z.Bt.prototype;
    z.e.q = function() {
        this.w && this.w.off(null, null, this);
        (0,
        window.clearTimeout)(this.bO);
        this.Kg.ac = []
    }
    ;
    z.e.v = function() {
        return this.w
    }
    ;
    z.e.vc = function() {
        return this.wc
    }
    ;
    z.e.Qs = function() {
        return this.QV
    }
    ;
    z.e.Cd = function(a) {
        var b = Ct(this, a);
        a = !!this.wc.get(a);
        if (null === b)
            return a;
        b ? this.dg.xF() : this.dg.zF();
        return b
    }
    ;
    z.e.fb = function() {
        return this.Vd
    }
    ;
    z.e.mj = function(a, b, c) {
        var d = z.wt.D()
          , f = {
            Aa: this.w.id
        }
          , g = z.Jh();
        b = z.Hb((0,
        z.q)(this.YQ, this), b || z.n);
        (a ? d.AP : d.cX).call(d, f, g, b, c || z.n)
    }
    ;
    z.e.YQ = function(a) {
        a = "follow" === z.bb(a, "data", "type") ? "follow" : "unfollow";
        var b = z.F.id
          , c = "fyre_follow_" + this.w.id + b;
        z.sg.remove(c);
        z.sg.set(c, a, 900);
        this.L.T.O({
            follow: "quill_follow_added",
            unfollow: "quill_follow_removed"
        }[a], b)
    }
    ;
    z.e.Ke = function(a, b) {
        if (!this.Kg.NS) {
            this.Kg.NS = !0;
            z.ct.D();
            console.log(this.ha);
            var c = this.ha
              , d = (0,
            z.q)(this.WE, this)
              , f = (0,
            z.q)(this.VE, this)
              , g = "/bs3/v3.1";
            this.d.H.zz && (g = "/bs3/v3.0");
            c = z.v.Fu(c.af, c.Jm);
            (new z.Ee({
                url: z.v.J.hq + g + c + "init",
                timeout: 1E4,
                ta: d,
                oa: f
            })).send()
        }
        z.mc(this.Kg, a || z.n, b || z.n)
    }
    ;
    z.e.WE = function(a) {
        a = ft(a, this.L.H);
        var b = this;
        a ? (a[z.U.ic] = this.ha.af,
        Dt(this, a) && Kh(z.He.D(), this.ha, !1),
        this.w.set(a),
        this.d.uz.wv(this.w, function() {
            b.Kg.eg() || b.Kg.ia(b.w)
        })) : this.ha.vD || this.dD((0,
        z.q)(this.WE, this), (0,
        z.q)(this.VE, this))
    }
    ;
    z.e.VE = function() {
        var a = this.Kg;
        this.Kg = new z.gc;
        z.w(a.ac ? a.ac : a.Do, function(a) {
            z.mc(this.Kg, a[0], null, a[2])
        }, this);
        z.lc(a)
    }
    ;
    z.e.Qx = function(a, b, c) {
        if (5 <= c)
            b();
        else {
            var d = z.Hb((0,
            z.q)(this.$U, this), a || z.n);
            a = (0,
            z.q)(this.ZU, this, a, b, c);
            d = (0,
            z.q)(this.Ke, this, d, a);
            this.bO = (0,
            window.setTimeout)(d, 1E3 + 1500 * c)
        }
    }
    ;
    z.e.$U = function(a) {
        this.L.T.O(z.Sg, a)
    }
    ;
    z.e.ZU = function(a, b, c) {
        this.Qx(a, b, c + 1)
    }
    ;
    z.e.dD = function(a, b) {
        var c = (0,
        z.q)(this.Qx, this, a, b, 0);
        Kh(z.He.D(), this.ha, !0, c, c)
    }
    ;
    z.e.Mn = z.l(58);
    z.e.XE = z.l(62);
    z.u(Ft, z.Fd);
    var LG;
    Ft.prototype.k = LG = {
        X: "id",
        qd: "authorId",
        eu: "targetId",
        xA: "flagType",
        UA: "notes"
    };
    z.u(z.Gt, z.rf);
    z.e = z.Gt.prototype;
    z.e.postMessage = function(a, b, c) {
        this.iH(a, z.Jh(), b, c)
    }
    ;
    z.e.iH = function(a, b, c, d) {
        var f = (0,
        z.q)(this.Aw, this, {});
        c = Pi(c || z.n, f);
        b = b || z.Jh();
        z.wt.D().postMessage(Ht(this, a), b, c, d || z.n)
    }
    ;
    z.e.ws = function(a, b, c) {
        var d = z.Jh()
          , f = (0,
        z.q)(this.Aw, this, {});
        b = Pi(b || z.n, f);
        d = d || z.Jh();
        z.wt.D().ws(Ht(this, a), d, z.Hb(b, this.OR), c || z.n)
    }
    ;
    z.e.OR = function(a) {
        a = a.data.messages[0];
        z.F.set(z.E.Ah, {
            Sa: a.content.id,
            visibility: a.vis
        });
        z.F.O("change");
        z.Ze.D().set("hasPostedReview", !0, 3600)
    }
    ;
    z.e.rx = function(a, b, c) {
        Jt(this, a, !0, b, c)
    }
    ;
    z.e.dX = function(a, b, c) {
        Jt(this, a, !1, b, c)
    }
    ;
    z.e.ep = z.l(60);
    z.e.WT = function(a, b, c) {
        var d = this.d.u.v();
        if (!z.F.eb())
            throw "insufficient_permissions";
        a = a.id;
        var f = d.id
          , g = d.get(d.k.ic)
          , d = z.wt.D()
          , h = z.Jh()
          , f = {
            message_id: a,
            collection_id: f,
            site_id: g
        };
        d.Dc(h, "message/" + a + "/approve/", b, c).send(f)
    }
    ;
    z.e.XT = function(a, b, c) {
        var d = this.d.u.v();
        if (!z.F.eb())
            throw "insufficient_permissions";
        a = a.id;
        var f = d.id
          , g = d.get(d.k.ic)
          , d = z.wt.D()
          , h = z.Jh()
          , f = {
            message_id: a,
            collection_id: f,
            site_id: g
        };
        d.Dc(h, "message/" + a + "/delete/", b, c).send(f)
    }
    ;
    z.e.jn = function(a, b, c) {
        var d = new Ft;
        d.set(d.k.qd, z.F.id);
        d.set(d.k.eu, a.Sa);
        d.set(d.k.xA, a.Ie);
        d.set(d.k.UA, a.gi);
        b = z.Hb((0,
        z.q)(this.VQ, this, d), b || z.n);
        a = {
            Sa: a.Sa,
            Aa: a.Aa,
            bE: a.Ie,
            gi: a.gi,
            ej: a.ej || ""
        };
        z.wt.D().jn(a, z.Jh(), b, c)
    }
    ;
    z.e.VQ = function(a) {
        this.d.O("quill_flag_recv", a)
    }
    ;
    z.e.bv = function(a, b, c) {
        if (!z.F)
            throw "insufficient_permissions";
        var d = this.d.u.v(), f = z.wt.D(), g, h = z.F.eb();
        if (z.F.id === a.get(a.k.qd) || h && gn(a))
            g = f.bv;
        else if (h)
            g = f.DS;
        else
            throw "insufficient_permissions";
        a = {
            archive: h && gn(a),
            Sa: a.id,
            Aa: d.id,
            af: d.get(d.k.ic)
        };
        g.call(f, a, z.Jh(), b, c)
    }
    ;
    z.e.Ku = function(a, b, c) {
        if (!z.F.eb())
            throw "insufficient_permissions";
        var d = this.d.u.v();
        a = {
            Sa: a.id,
            Aa: d.id,
            af: d.get(d.k.ic)
        };
        z.wt.D().Ku(a, z.Jh(), b, c)
    }
    ;
    z.e.Jq = function(a, b, c) {
        var d = z.wt.D()
          , f = Ht(this, a)
          , g = d.Jq;
        a instanceof z.yn && (g = d.GO);
        a = (0,
        z.q)(this.Aw, this, {});
        g.call(d, f, z.Jh(), Pi(b || z.n, a), c || z.n)
    }
    ;
    z.e.ar = function(a, b, c) {
        var d = this.d.u.v();
        z.pf.D().ar({
            Sa: a,
            Aa: d.get(z.U.X)
        }, z.F, b, c)
    }
    ;
    z.e.Aw = function(a, b) {
        var c = b.data
          , d = c.messages[0]
          , f = d.content;
        z.y(c.authors, (0,
        z.q)(this.d.O, this.d, "quill_author_received"));
        if (f.replaces != f[Um])
            return d = kt(d),
            this.d.O("quill_message_received", d),
            d
    }
    ;
    z.e.sv = function(a, b) {
        var c = z.Jh()
          , d = this.d.u.v().id || a.get(Lm).id
          , d = {
            Sa: a.get(Um),
            Aa: d
        };
        z.wt.D().sv(d, c, b ? "feature" : "unfeature", z.n, function() {
            a.set(Om, !b)
        })
    }
    ;
    var Wt = /^eref:\/\/([^:\/]+:[^:\/]+\/[^:\/]+)$/;
    z.u(Lt, z.D);
    Lt.prototype.Gw = function(a) {
        this.As(a)
    }
    ;
    Lt.prototype.h = function() {
        this.As = null;
        Lt.b.h.call(this)
    }
    ;
    z.u(Mt, Lt);
    Mt.prototype.gV = function() {
        this.yg *= .667;
        this.Fd.info("decay filter index decayed to: ", this.yg);
        if (this.ug.length) {
            var a;
            a = this.ug.length;
            for (var b = a - 1, c = 0, d, f, g = 0; g < a; g++) {
                f = Zi(this.ug[g]);
                d = f.RV;
                if (!d) {
                    d = f;
                    var h = new Kt(f.content.bodyHtml);
                    f = h.bJ.length;
                    for (var k = (h.text.match(/[\.!?]/g) || [0]).length, h = h.bJ, m = 0, r = 0, x = h.length; r < x; r++) {
                        var t;
                        t = h[r];
                        for (var I = [], M = 0, $ = t.length; M < $; M++)
                            -1 < "aeiou".indexOf(t[M]) ? I.push("v") : I.push("c");
                        t = I;
                        M = I = 0;
                        for ($ = t.length - 1; M < $; )
                            "c" === t[M] && "v" === t[M + 1] && (I += 1),
                            M += 1;
                        "v" === t[0] && (I += 1);
                        t = I;
                        m += 0 === t ? 1 : t
                    }
                    d = d.RV = f / k * .39 + m / f * 11.8 - 11.59
                }
                d >= c && (c = d,
                b = g)
            }
            a = b;
            b = this.ug[a];
            this.ug = this.ug.slice(a + 1);
            b && (this.Fd.info("decay filter releasing state: ", b),
            this.As(b))
        } else
            1 > this.yg && ((0,
            window.clearInterval)(this.Ca),
            this.Ca = null,
            this.yg = 0)
    }
    ;
    Mt.prototype.Gw = function(a) {
        var b = {};
        z.y(a, function(a) {
            var d = a.content.id;
            a.content.parentId ? b[d] = a : a.content.bodyHtml ? 0 !== a.type ? b[d] = a : this.SS > a.event ? b[d] = a : a.content.authorId === z.F.id ? (b[d] = a,
            this.yg = 0,
            this.ug = []) : Vi(a.content.annotations, "moderator", !1) ? b[d] = a : (this.yg += 3,
            this.Fd.info("decay filter index increased to: ", this.yg),
            this.Ca || (this.Ca = (0,
            window.setInterval)((0,
            z.q)(this.gV, this), 3E3)),
            8 < this.yg ? this.ug.push(z.gb(d, a)) : (this.ug = [],
            b[d] = a)) : b[d] = a
        }, this);
        this.As(b)
    }
    ;
    Mt.prototype.h = function() {
        (0,
        window.clearInterval)(this.Ca);
        this.Ca = null;
        this.ug = [];
        Mt.b.h.call(this)
    }
    ;
    z.u(z.Nt, z.Fd);
    var Ot = {
        mm: "bootstrapRequestComplete",
        gf: "content",
        kf: "hasData"
    }
      , Pt = {
        dk: "contentUpdated",
        ok: "reqComplete",
        Dm: "reqFailed"
    };
    z.Nt.prototype.sc = function() {
        return {
            content: {}
        }
    }
    ;
    z.Nt.prototype.xv = function(a) {
        return a
    }
    ;
    z.u(z.Rt, z.D);
    z.e = z.Rt.prototype;
    z.e.pb = "head";
    z.e.lp = BG;
    z.e.YV = function() {
        var a = (0,
        z.q)(this.mH, this);
        this.w.get(z.U.qk) && (this.Hk = new Mt(a))
    }
    ;
    z.e.Rd = function(a, b) {
        var c = z.Ui(this.Xc, a, {})
          , d = z.aj(b, function(a) {
            2 === a.Ic && (a = z.eb(a),
            a.Ic = 4);
            return a
        }, this);
        z.A(c, d);
        z.St(this, a, function(a) {
            z.Qt(a, b)
        });
        a == this.pb && this.d.u.Ke((0,
        z.q)(function(a) {
            this.La || (a = a.get(a.k.df).Ff - 1,
            0 > a && (a = 0),
            this.Rd(a, b))
        }, this))
    }
    ;
    z.e.Kn = function(a) {
        qt(a);
        z.St(this, this.pb, function(b) {
            z.Qt(b, a, !0)
        })
    }
    ;
    z.e.mH = function(a) {
        var b = {};
        z.y(a, function(a, d) {
            var f = a.content.hi
              , g = a.content.n1
              , h = this.oc[g] ? this.oc[g] : this.pb;
            f || (f = a.content.Vj);
            this.zv(a) && (a.Ic || (a.Ic = 2),
            null != h ? (g && h == this.pb && (z.Ui(this.wz, g, []),
            this.wz[g].push(d)),
            a.Gd = h,
            this.oc[d] = h,
            z.Ui(b, h, {}),
            z.A(b[h], z.Ut(this, a)),
            (f = b[h][d]) && f.event >= a.event || (b[h][d] = a)) : (z.Ui(this.os, f, {}),
            this.os[f][d] = a))
        }, this);
        z.y(b, function(a, b) {
            this.Rd(b, a)
        }, this)
    }
    ;
    z.e.zv = function(a) {
        return !Tt(a)
    }
    ;
    z.e.Uh = function(a) {
        this.Hk.Gw(a.content);
        this.Kn(a.Ri);
        z.Vt(this, a.He)
    }
    ;
    z.e.rr = function(a) {
        var b = {}
          , c = a.content;
        c.transport = 3;
        b[c.id] = a;
        this.Hk.Gw(b)
    }
    ;
    z.e.OQ = function(a, b) {
        var c = this.oc[b];
        if (c) {
            var d = this.Xc[c][b];
            if (!(d.event > a.event)) {
                d.Zj = a.Zj;
                d.co = a.co;
                d.event = a.event;
                var f = {};
                f[b] = d;
                this.Rd(c, f)
            }
        }
    }
    ;
    z.e.pE = function(a) {
        return this.Vk[a].Gd
    }
    ;
    z.e.MQ = function(a) {
        a = jt(a);
        var b = {};
        z.y(a.fb, function(a) {
            this.d.T.O("eref_author_received", a)
        }, this);
        z.y(a.zW, function(a, d) {
            if (this.Vk[d] && !Tt(a)) {
                var f = this.pE(d);
                z.Ui(b, f, {});
                b[f][d] = this.Vk[d];
                z.A(b[f][d].content, a.content)
            }
        }, this);
        z.y(b, function(a, b) {
            this.Rd(b, a)
        }, this)
    }
    ;
    z.e.MV = function() {
        var a = this.rv;
        this.rv = {};
        z.Vt(this, a)
    }
    ;
    z.e.h = function() {
        z.F.off(null, null, this);
        this.w.off(null, null, this);
        this.w = null;
        this.Hk.q();
        this.Hk = null;
        z.Rt.b.h.call(this)
    }
    ;
    z.u(z.$t, z.Rt);
    z.e = z.$t.prototype;
    z.e.al = function(a, b) {
        z.Ui(this.Hd, a, []);
        this.Hd[a].push(b);
        var c = this.Xc[a];
        c && (z.A(this.oc, z.aj(c, z.Gb(a))),
        this.en(c),
        z.Qt(b, c));
        this.no[a] ? (b.O(b.Ga.ok, {
            Gd: a
        }),
        b.set(b.k.kf, !0)) : (this.no[a] = !0,
        c = (0,
        z.q)(this.dP, this, a),
        this.d.u.Ke(c))
    }
    ;
    z.e.dP = function(a, b) {
        if (!this.La) {
            var c = (0,
            z.q)(this.QQ, this, a)
              , d = (0,
            z.q)(this.PQ, this, a);
            a >= b.get(b.k.df).Ff && (a = this.pb);
            if (a == this.pb)
                c(b.get(b.k.Ht));
            else {
                var f = Zt(a, b)
                  , g = this.d.H.zz;
                z.dt(z.ct.D(), f, c, d, g)
            }
        }
    }
    ;
    z.e.QQ = function(a, b) {
        if (!this.La) {
            var c = z.mt(a, b);
            this.d.T.O("bootstrap_authors_received", c.fb);
            c.vc && this.d.T.O("bootstrap_followers_received", c.vc);
            c.Qs && z.w(c.Qs, (0,
            z.q)(this.d.T.O, this.d.T, "bootstrap_reviewer_received"));
            z.y(c.content, function(a) {
                z.A(c.content, z.Ut(this, a))
            }, this);
            z.A(this.oc, z.aj(c.content, z.Gb(a)));
            this.en(c.content);
            this.Rd(a, c.content);
            z.Vt(this, c.He);
            z.St(this, a, function(b) {
                b.O(b.Ga.ok, {
                    Gd: a
                });
                b.set(b.k.kf, !0)
            })
        }
    }
    ;
    z.e.en = function(a) {
        z.y(this.jo, function(b, c) {
            a[c] && z.w(b, function(b) {
                a[b.id] || (a[b.id] = b)
            })
        })
    }
    ;
    z.e.PQ = function(a) {
        this.La || (this.no[a] = !1,
        z.St(this, a, function(a) {
            a.O(a.Ga.Dm)
        }))
    }
    ;
    z.e.Rd = function(a, b) {
        z.$t.b.Rd.call(this, a, b);
        au(this, b);
        bu(this, b)
    }
    ;
    z.e.Kn = function(a) {
        z.$t.b.Kn.call(this, a);
        au(this, a)
    }
    ;
    z.e.YD = function(a, b) {
        var c = a.uV
          , d = c.k
          , c = c.get(d.Gp) || c.get(d.bd)
          , d = (b.content.annotations || {}).sortOrder || b.content.createdAt;
        if (a.Ix && d > c || !a.Ix && d < c || (c = b.content.ancestorId) && c != b.id)
            return !0
    }
    ;
    z.e.CR = function(a, b) {
        var c = b.Gd;
        a.IG++;
        var d = (0,
        z.q)(function(b) {
            var d = b;
            if (b = b.content.ancestorId || b.content.parentId)
                if (d = this.Xc[c][b],
                !d)
                    return;
            this.YD(a, d) && a.Fx++
        }, this);
        this.Xc[c] && z.y(this.Xc[c], d, this);
        this.Vk[c] && z.y(this.Vk[c], d, this);
        a.Ix ? c++ : c--;
        this.Xq(a, c)
    }
    ;
    z.e.Xq = function(a, b) {
        a.PS && z.Qt(a.pH, this.Xc[this.pb]);
        var c = this.d.u.v();
        c.get(c.k.df);
        c = a.pH;
        c.xv = (0,
        z.q)(function(b) {
            return z.bj(b, (0,
            z.q)(this.YD, this, a))
        }, this);
        var d = (0,
        z.q)(this.CR, this, a);
        c.on(c.Ga.ok, d);
        cu(this, a, b) ? c.set(c.k.mm, !0) : this.al(b, c)
    }
    ;
    z.e.Tq = function(a) {
        var b = this.oc[a.id];
        if (b !== this.pb)
            return b;
        var c = a.k
          , b = this.d.u.v()
          , b = b.get(b.k.df);
        a = a.get(c.Gp) || a.get(c.bd);
        if (0 !== b.Ff) {
            if (a > b.Jj[b.Ff - 1].jT)
                return b.Ff - 1;
            for (c = b.Ff - 1; 0 <= c; c--) {
                var d = b.Jj[c];
                if (!d)
                    break;
                if (a >= d.first)
                    return c
            }
        }
    }
    ;
    z.e.zr = function(a, b) {
        var c = "old" == b
          , d = this.d.u.v()
          , f = d.get(d.k.df)
          , g = this.Tq(a, c)
          , h = this.d.H.zx || this.d.H.Xh;
        if (null == g)
            return null != h;
        if (!c && d.get(d.k.tp))
            return c = z.ab(this.oc),
            h && h < z.nj(c, function(a, b) {
                var c = this.Xc[this.oc[b]][b];
                if (!c)
                    return a;
                var d = 1 === c.Ic;
                return a + (c.Zj !== z.Yr.NONE && d ? 1 : 0)
            }, 0, this);
        for (h = 0; 5 > h; h++) {
            d = h;
            c || (d *= -1);
            d = g + d;
            if (0 > d || d >= f.Ff)
                break;
            if (du(this, d, a, c))
                return !0
        }
        return !1
    }
    ;
    z.e.h = function() {
        z.vh(this.d.T, "stream_data_received", this.Uh, this);
        z.vh(this.d.T, "quill_message_received", this.rr, this);
        z.$t.b.h.call(this)
    }
    ;
    z.u(eu, z.Rt);
    z.e = eu.prototype;
    z.e.pb = "featuredHead";
    z.e.vM = "featuredTail";
    z.e.gJ = "featured-all";
    z.e.mb = function() {
        var a;
        if (this.Hd[this.pb])
            a = fu(this);
        else {
            a = this.pb;
            var b = Yt(this, a);
            this.Hd[a] = b;
            var c = this.d.u.v().get(z.U.vm);
            c && (c = z.mt(a, c),
            gu(this, c, a, b));
            a = b
        }
        return a
    }
    ;
    z.e.zv = function(a) {
        return this.oc[a.content.targetId] ? !0 : !1
    }
    ;
    z.e.h = function() {
        z.vh(this.d.T, "stream_data_received", this.Uh, this);
        eu.b.h.call(this)
    }
    ;
    z.u(z.hu, z.Rt);
    z.e = z.hu.prototype;
    z.e.Kh = z.l(53);
    z.e.Nh = z.l(56);
    z.e.Wv = function(a, b, c) {
        a = {
            collection_id: this.d.u.v().id,
            content_id: a,
            depth_only: b
        };
        b = z.ct.D().KP;
        z.iu(this, b, a, c);
        return c
    }
    ;
    z.e.GW = function(a, b) {
        if (!this.La) {
            var c = z.mt(a, b.data);
            z.y(c.fb, (0,
            z.q)(this.d.T.O, this.d.T, "bootstrap_author_received"));
            ju(this, c.content, a);
            z.A(this.oc, z.aj(c.content, z.Gb(a)));
            this.Rd(a, c.content);
            z.Vt(this, c.He);
            z.St(this, a, function(a) {
                a.O(a.Ga.ok, {});
                a.set(a.k.kf, !0)
            })
        }
    }
    ;
    z.e.en = function(a) {
        z.y(this.jz.jo, function(b, c) {
            a[c] && z.w(b, function(b) {
                a[b.id] || (a[b.id] = b)
            })
        })
    }
    ;
    z.e.zv = function(a) {
        if (3 === a.Ic)
            return !0;
        var b = !1;
        this.hT && (b = a.content,
        b = this.oc[b.ancestorId] || this.oc[b.targetId]);
        return b || this.oc[a.id]
    }
    ;
    z.e.h = function() {
        z.vh(this.d.T, "stream_data_received", this.Uh, this);
        z.vh(this.d.T, "quill_message_received", this.rr, this);
        this.jz = null;
        z.hu.b.h.call(this)
    }
    ;
    z.u(z.lu, z.rf);
    z.lu.prototype.al = function(a) {
        var b = new z.Nt;
        this.Jb.al(a, b);
        return b
    }
    ;
    z.lu.prototype.zr = function(a, b) {
        return this.Jb.zr(a, b)
    }
    ;
    z.lu.prototype.Wv = function(a, b) {
        z.nu(this);
        this.zi = new z.hu(this.L,!0);
        var c = new z.Nt;
        this.zi.Wv(a, b, c);
        return c
    }
    ;
    z.u(z.ou, z.lu);
    z.e = z.ou.prototype;
    z.e.$k = z.l(63);
    z.e.Xq = function(a, b, c, d) {
        b = "old" == b;
        var f = this.Jb.Tq(a, b)
          , g = new z.Nt;
        this.Jb.Xq({
            uV: a,
            Ix: b,
            ST: .25 * c,
            lI: c,
            FT: 4,
            pH: g,
            Fx: 0,
            IG: 1,
            PS: !!d
        }, f);
        return g
    }
    ;
    z.e.Kh = z.l(52);
    z.e.Nh = z.l(55);
    z.e.Zq = function(a) {
        var b = this.Jb.Tq(a)
          , c = new z.Nt;
        c.xv = function(b) {
            return z.bj(b, function(b) {
                return b.content.ancestorId == a.id
            })
        }
        ;
        this.Jb.al(b, c);
        return c
    }
    ;
    z.u(pu, z.D);
    z.e = pu.prototype;
    z.e.Dy = function(a) {
        this.dn = a
    }
    ;
    z.e.Qr = function() {
        return this.ca && this.ca.Nj
    }
    ;
    z.e.stop = function() {
        this.Nf = !0;
        this.ca.abort()
    }
    ;
    z.e.start = function() {
        var a = {
            url: [this.Ao ? this.Ao : z.v.J.bi, "livecountping", this.Aa, this.uid].join("/"),
            timeout: 1E4,
            ta: (0,
            z.q)(this.tw, this),
            oa: (0,
            z.q)(this.sw, this),
            with_credentials: !1
        };
        this.ca = new z.Ee(a);
        a = {
            __: Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z.qa()).toString(36)
        };
        this.Ao ? a.routed = "1" : this.timeout && (a.timeout = "1");
        z.F.id && (a.userId = z.F.id);
        z.A(a, this.dn);
        this.ca.send(a)
    }
    ;
    z.e.tw = function(a) {
        if (!this.Nf) {
            var b = a.data;
            this.timeout = !1;
            switch (a.code) {
            case 302:
                this.Ao = b;
                this.start();
                break;
            case 500:
                this.Ao = !1;
                this.start();
                break;
            default:
                this.ta(b)
            }
        }
    }
    ;
    z.e.sw = function(a) {
        this.Nf || (this.timeout = !0,
        this.Ao = !1,
        this.oa(a.data))
    }
    ;
    z.u(qu, z.Fd);
    var ru = {
        Mt: "listeners",
        pZ: "followers"
    };
    qu.prototype.sc = {
        listeners: 0,
        followers: 0
    };
    z.u(z.tu, z.rf);
    z.e = z.tu.prototype;
    z.e.Fo = function() {
        if (this.Pc) {
            var a = this.d.u.v();
            this.Pc.Dy({
                jid: z.F.id || "",
                siteId: a.get(z.U.ic),
                networkId: a.get(z.U.zh)
            })
        }
    }
    ;
    z.e.stop = function() {
        this.Nf = !0;
        this.Bl && (0,
        window.clearTimeout)(this.Bl);
        this.Pc && this.Pc.stop()
    }
    ;
    z.e.start = function() {
        z.v.doNotTrack.gq || (this.Pc || (this.Pc = new pu({
            uid: su(),
            Aa: this.L.u.v().id,
            ta: (0,
            z.q)(this.tw, this),
            oa: (0,
            z.q)(this.sw, this)
        }),
        this.Fo()),
        this.Bl && (0,
        window.clearTimeout)(this.Bl),
        this.Pc.Qr() || this.Nf || this.Pc.start())
    }
    ;
    z.e.tw = function(a) {
        var b = this.xa.get("listeners") || 0;
        a = a || 0;
        0 < b && a < b / 2 && (a = Math.ceil(.9 * b));
        this.xa.set("listeners", a);
        this.Xr = 0;
        this.Bl = (0,
        window.setTimeout)((0,
        z.q)(this.start, this), 6E4)
    }
    ;
    z.e.sw = function() {
        this.Xr++;
        if (3 >= this.Xr) {
            var a = 6E4 * this.Xr;
            this.Bl = (0,
            window.setTimeout)((0,
            z.q)(this.start, this), a)
        }
    }
    ;
    z.e.h = function() {
        this.stop();
        (0,
        window.clearTimeout)(this.Bl);
        z.F.off(null, null, this);
        z.tu.b.h.call(this)
    }
    ;
    z.u(z.uu, z.rf);
    z.uu.prototype.send = function(a) {
        this.Es = this.Es.concat(a)
    }
    ;
    z.uu.prototype.yy = function() {
        if (!z.v.doNotTrack.gq) {
            var a = wu(this.Es)
              , a = vu(a);
            a.length && this.eJ.send(z.cd(a), {
                "Content-Type": "application/json"
            });
            this.Es = []
        }
    }
    ;
    z.uu.prototype.q = function() {
        (0,
        window.clearInterval)(this.zb);
        this.eJ = null;
        z.uu.b.q.call(this)
    }
    ;
    z.u(xu, z.Ee);
    z.e = xu.prototype;
    z.e.send = function(a) {
        this.Nj || (this.Qp = !1,
        this.Nj = !0,
        this.data = a || this.data,
        xu.b.send.call(this, this.data))
    }
    ;
    z.e.abort = function() {
        (0,
        window.clearTimeout)(this.AH);
        this.Qp = !0;
        xu.b.abort.call(this)
    }
    ;
    z.e.Qr = function() {
        return this.Nj
    }
    ;
    z.e.ta = function(a) {
        xu.b.ta.call(this, a);
        this.Nj = !1;
        this.loop && !this.Qp && (this.AH = (0,
        window.setTimeout)((0,
        z.q)(function() {
            this.send(this.data)
        }, this), this.Fe))
    }
    ;
    z.e.oa = function(a) {
        xu.b.oa.call(this, a);
        this.Nj = !1;
        this.loop && !this.Qp && (this.AH = (0,
        window.setTimeout)((0,
        z.q)(function() {
            this.send(this.data)
        }, this), this.Fe))
    }
    ;
    z.u(yu, z.D);
    z.e = yu.prototype;
    z.e.Dy = function(a) {
        z.A(a, {
            backend: this.Po.name,
            rlo: this.Po.ay,
            err: this.Pg,
            to: this.ft,
            cV: this.Pc
        });
        this.dn = a
    }
    ;
    z.e.start = function(a, b, c) {
        this.Qg = a.Qg || this.Qg || 0;
        this.Fd.info("starting poll at event ID:", this.Qg);
        this.Aa = a.Aa;
        zu(this);
        this.bt = b;
        this.Nq = c;
        this.ca.send({});
        this.Nf = !1
    }
    ;
    z.e.stop = function() {
        this.Nf || (this.Fd.info("stopping poll"),
        this.Nf = !0,
        this.ca.abort())
    }
    ;
    z.e.ta = function(a) {
        this.lz(a);
        zu(this)
    }
    ;
    z.e.lz = function(a) {
        this.Nf ? this.ca.abort() : a ? (this.Pg = 0,
        "timeout"in a ? (this.ft++,
        10 < this.ft && Au(this, 2)) : (this.ca.Fe = this.mD,
        this.ft = 0,
        z.ea(a) || (a = [a]),
        z.w(a, function(a) {
            a = a.data;
            var c = a.maxEventId;
            -1 !== z.Na(this.ij, c) ? (this.ij.push(c),
            this.ij.sort(),
            this.Qg = this.ij[this.ij.length - 1] + 1) : (100 < this.ij.push(c) && this.ij.shift(),
            this.Qg = c,
            this.Fd.info("streamClient setting event ID: ", this.Qg),
            this.bt(a))
        }, this))) : (this.Pg++,
        Au(this, 4))
    }
    ;
    z.e.oa = function(a, b) {
        this.Nf || (this.Po.MG(this.ca),
        this.Pg++,
        Au(this, 4),
        zu(this),
        this.Nq({
            version: this.version,
            data: a.data,
            event: b
        }))
    }
    ;
    Cu.prototype.removeNode = function(a) {
        for (var b = 0; b < this.lg.length; b++)
            this.lg[b] == a && (this.lg.splice(b, 1),
            b--);
        for (b = 0; b < this.yo; b++) {
            var c = this.crypto(a + ":" + b);
            delete this.zo[c];
            for (var d = 0; d < this.keys.length; d++)
                this.keys[d] == c && (this.keys.splice(d, 1),
                d--)
        }
    }
    ;
    Cu.prototype.compare = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    Cu.prototype.crypto = function(a) {
        var b = new z.zf;
        b.update(a);
        return z.Bf(b).join(":")
    }
    ;
    Eu.prototype.$q = function() {
        return z.v.J.stream.replace(/https?:\/\//, "")
    }
    ;
    Eu.prototype.MG = function() {
        this.Pg++
    }
    ;
    Eu.prototype.name = "ELB";
    var Iu = new Eu;
    Fu.prototype.$q = function() {
        return 0 == this.hash.lg.length ? Iu.$q() : Du(this.hash, this.Br)
    }
    ;
    Fu.prototype.MG = function() {
        this.Pg++;
        3 > this.Pg || (this.hash.removeNode(Du(this.hash, this.Br)),
        this.Pg = 0,
        this.ay++)
    }
    ;
    Fu.prototype.name = "DTH";
    z.u(z.Ju, z.rf);
    z.e = z.Ju.prototype;
    z.e.Qr = function() {
        return !!this.Pc.Nj
    }
    ;
    z.e.stop = function() {
        this.Pc.stop()
    }
    ;
    z.e.start = function() {
        this.Rj()
    }
    ;
    z.e.Fo = function() {
        var a = this.d.u.v()
          , a = {
            multi: !0,
            jid: z.F.id || "",
            siteId: a.get(z.U.ic),
            networkId: a.get(z.U.zh)
        };
        this.vv && this.Pc.Dy(a)
    }
    ;
    z.e.WD = function(a, b, c) {
        this.vv = !0;
        this.vC = c;
        this.ox = z.qa();
        this.Pc.Po = c;
        this.Rj(a, b)
    }
    ;
    z.e.Rj = function(a, b) {
        function c(a, b) {
            return b ? 1E3 * (z.qa() - 1E3 * b) : a
        }
        var d = this.d.u.v();
        if (this.vv) {
            var f = d.id
              , g = d.get(z.U.jf);
            this.Qr() ? b && b() : (a = Pi(a || z.n, (0,
            z.q)(this.JT, this, d, a, b), (0,
            z.q)(this.Uh, this)),
            this.Fo(),
            this.Pc.start({
                Aa: f,
                Qg: c(g, (this.d.H.stream || {}).PN)
            }, a, b || z.n))
        } else
            Gu(d, (0,
            z.q)(this.WD, this, a, b))
    }
    ;
    z.e.JT = function(a, b, c) {
        var d = z.qa();
        3E5 > d - this.ox || (this.ox = d,
        Gu(a, (0,
        z.q)(function(a) {
            var d = this.vC.Br === a.Br, h;
            a: {
                h = this.vC.hash.lg;
                var k = a.hash.lg;
                if (z.fa(h) && z.fa(k) && h.length == k.length) {
                    for (var m = h.length, r = 0; r < m; r++)
                        if (h[r] !== k[r]) {
                            h = !1;
                            break a
                        }
                    h = !0
                } else
                    h = !1
            }
            d && h || (this.Pc.stop(),
            this.WD(b, c, a))
        }, this)))
    }
    ;
    z.e.Uh = function(a) {
        this.d.T.sb("stream_data_received_raw", a);
        var b = {
            Ri: {},
            content: {},
            He: {},
            aW: [],
            vc: []
        }, c = {
            authors: this.Zv,
            states: this.iS,
            annotations: this.Kn,
            settings: this.oS,
            followers: this.kS
        }, d, f, g;
        for (g in c)
            if (d = a[g])
                f = z.ea(d) ? z.w : z.y,
                f(d, (0,
                z.q)(c[g], this, b));
        this.d.T.sb("stream_data_received", b);
        return b
    }
    ;
    z.e.Zv = function(a, b) {
        this.d.O("stream_author_received", b)
    }
    ;
    z.e.Kn = function(a, b, c) {
        a.Ri[c] = {};
        z.y(Yi, function(d) {
            var f = b[d];
            f && (z.cd(f),
            f.EP = !0,
            a.Ri[c][d] = f)
        }, this)
    }
    ;
    z.e.iS = function(a, b, c) {
        b = kt(b);
        b.EP = !0;
        b.Ic = 2;
        var d = b.content;
        if (!("annotations"in d && (d.annotations.annotation || {}).blockId))
            if (b.He)
                b.content = {
                    id: c
                },
                a.He[c] = b;
            else {
                var f;
                switch (b.type) {
                case 0:
                    f = "stream_message_received"
                }
                a.content[c] = b;
                this.d.T.sb(f, b)
            }
    }
    ;
    z.e.oS = function(a, b) {
        a.aW.push(b);
        this.d.T.sb("streamSettingReceived", b)
    }
    ;
    z.e.kS = function(a, b) {
        a.vc.push(b);
        this.d.T.sb("streamFollowerReceived", b)
    }
    ;
    z.e.h = function() {
        z.F.off(null, null, this);
        z.Ju.b.h.call(this)
    }
    ;
    z.u(Ku, z.D);
    var xH = {
        facebook: "https://www.facebook.com/dialog/feed",
        twitter: "https://twitter.com/intent/tweet"
    };
    Ku.prototype.SU = function(a) {
        var b, c, d = a.get(qn.ua), f = xH[d];
        if ("facebook" === d)
            b = null;
        else {
            b = a.get(qn.ff);
            b = fi(b.get(z.bn));
            c = (c = a.get(qn.za)) ? "- " + c : "";
            var g = a.get(qn.URL)
              , h = 280 - (g.length + 1) - c.length;
            h < b.length + 2 && (b = b.substring(0, h - 5) + "...");
            b = 0 > 280 - g.length - b.length - 2 - c.length ? "" : '"' + b + '"' + c
        }
        c = a.get(a.k.URL);
        window.open(f + ("facebook" === d ? ["?app_id\x3d595267417193679\x26caption\x3d", (0,
        window.encodeURIComponent)('Livefyre on "' + window.document.title + '"'), "\x26display\x3dpopup\x26link\x3d", (0,
        window.encodeURIComponent)(c), "\x26redirect_uri\x3d", (0,
        window.encodeURIComponent)([window.location.protocol, "//cdn.livefyre.com/libs/share/facebook-uri.html"].join(""))].join("") : ["?text\x3d", (0,
        window.encodeURIComponent)(b), "\x26url\x3d", (0,
        window.encodeURIComponent)(c)].join("")), "intent", "height\x3d420,width\x3d550");
        d = qj("Share-" + d);
        this.d.$b.send(z.Xn(d, {
            bc: a.get(qn.ff)
        }))
    }
    ;
    Ku.prototype.show = function(a) {
        Nu(this.d.Io, a, (0,
        z.q)(this.SU, this, a))
    }
    ;
    z.u(Lu, z.D);
    Lu.prototype.h = function() {
        z.w(this.ss.Az(), function(a) {
            a.off(null, null, this)
        });
        this.ss = null;
        delete this.WH;
        this.bb = null
    }
    ;
    Lu.prototype.My = function() {}
    ;
    Lu.prototype.show = function(a) {
        var b = this.bb.Io;
        z.Mh(a, qn.URL, function() {
            var b = {};
            b[yH] = a.get(qn.gf);
            b[zH] = a.get(qn.za);
            b[AH] = a.get(qn.URL);
            this.WH(b);
            a.off(null, null, this);
            this.ss.remove(a)
        }, this);
        this.ss.add(a);
        Nu(b, a)
    }
    ;
    var yH = "content"
      , zH = "displayName"
      , AH = "url";
    z.u(z.Mu, z.rf);
    z.u(z.Ou, z.T);
    var BH = {
        st: "fyre-reply-active"
    };
    z.e = z.Ou.prototype;
    z.e.r = function() {
        this.c = z.xo(z.X.EV, this.t())
    }
    ;
    z.e.m = function() {
        z.Ou.b.m.call(this);
        this.p().e(this.c, "click", this.Ub);
        mn(this.l) && z.Mh(this.l, dn, this.MI, this)
    }
    ;
    z.e.S = function() {
        z.Ou.b.S.call(this);
        this.l.off(null, null, this)
    }
    ;
    z.e.t = function() {
        return {
            zq: this.l.get(dn),
            j: this.EW
        }
    }
    ;
    z.e.dr = function() {
        var a = zj(this.l.get(Lm)) ? z.V : z.W;
        return {
            DV: a.get(a.g.Bg),
            CV: a.get(a.g.jB),
            BV: a.get(a.g.iB)
        }
    }
    ;
    z.e.Ub = function(a) {
        a.preventDefault();
        a.stopPropagation();
        lk(this.c, BH.st);
        this.dispatchEvent("replyCommentClicked")
    }
    ;
    z.e.MI = function(a) {
        a.get("expanding") || z.to(this.c, z.X.Ls, this.t())
    }
    ;
    z.u(Pu, z.T);
    Pu.prototype.r = function() {
        this.c = window.document.createElement("div");
        this.c.style.display = "none";
        Qu(this)
    }
    ;
    Pu.prototype.yb = function() {
        z.N(this.c, !1)
    }
    ;
    Pu.prototype.ka = function() {
        return z.Ql(this.c)
    }
    ;
    Pu.prototype.show = function() {
        z.N(this.c, !0)
    }
    ;
    z.u(Ru, z.T);
    Ru.prototype.r = function() {
        var a = this.va.createElement("span");
        z.dk(a, this.VW);
        this.c = a;
        Su(this, this.Vd)
    }
    ;
    Ru.prototype.m = function() {
        this.p().e(this.f(), "click", this.ib);
        Ru.b.m.call(this)
    }
    ;
    Ru.prototype.ib = function(a) {
        a.preventDefault();
        var b = ("IMG" === a.target.nodeName ? a.target.parentElement : a.target).getAttribute("data-authorid");
        a = mh(this.Vd, function(a) {
            return a.id === b
        });
        this.dispatchEvent({
            s: a,
            type: "author_click"
        })
    }
    ;
    Ru.prototype.h = function() {
        this.Vd = [];
        Ru.b.h.call(this)
    }
    ;
    z.u(z.Tu, z.T);
    var CH = {
        RK: "fyre-comment-like-btn",
        SK: "fyre-comment-like-count",
        UZ: "fyre-comment-like-imgs"
    };
    z.e = z.Tu.prototype;
    z.e.qn = function() {
        var a = this.l.get(this.Ej)
          , b = [];
        z.w(a, function(a) {
            (a = this.CN.get(a)) && b.push(a)
        }, this);
        return b
    }
    ;
    z.e.K = function(a) {
        z.Tu.b.K.call(this, a);
        var b = this.t();
        a.innerHTML = (this.ZS ? z.X.lT : z.X.kT)(b);
        this.Wr = this.o(CH.RK);
        this.bD = this.o(CH.SK);
        this.Wd && z.Ap(this.Wd, this.Wr);
        this.fy()
    }
    ;
    z.e.m = function() {
        z.Tu.b.m.call(this);
        this.p().e(this.Wr, "click", this.lR);
        z.Mh(z.F, z.F.k.X, this.fy, this);
        z.Mh(this.l, this.Ej, this.AR, this)
    }
    ;
    z.e.S = function() {
        z.F.off(null, null, this);
        this.l.off(null, null, this);
        z.Tu.b.S.call(this)
    }
    ;
    z.e.h = function() {
        z.Tu.b.h.call(this);
        this.bD = this.Wr = null
    }
    ;
    z.e.t = function() {
        return {
            j: {
                oG: z.W.get(z.W.g.te)
            },
            count: this.l.get(this.Ej).length
        }
    }
    ;
    z.e.AR = function() {
        this.fy();
        var a = this.l.get(this.Ej).length;
        this.bD.innerHTML = 0 === a ? "" : a;
        this.Wd && (a = this.qn(),
        Su(this.Wd, a))
    }
    ;
    z.e.lR = function(a) {
        a.preventDefault();
        a = this.l;
        this.dispatchEvent({
            type: "likeClicked",
            zS: this.Ar,
            xa: a
        });
        if (a.get(z.Sm) !== z.F.id && z.F.id && !z.F.kc()) {
            var b = a.get(this.Ej);
            this.Ar ? z.Ta(b, z.F.id) : b.push(z.F.id);
            a.set(this.Ej, b, {
                mn: !0
            })
        }
    }
    ;
    z.e.fy = function() {
        var a = z.Qa(this.l.get(this.Ej), function(a) {
            return a === z.F.id
        });
        this.Ar !== a && (this.Ar = a,
        this.Wr.innerHTML = z.W.get(a ? z.W.g.MM : z.W.g.te))
    }
    ;
    z.u(Uu, z.Ss);
    var wH = "fyre-comment-user-rating"
      , bt = {
        rt: "fyre-comment-actions",
        qc: "fyre-comment-author",
        UX: "fyre-comment-author-tag",
        bk: "fyre-comment-body",
        Mz: "fyre-comment-collapse",
        ff: "fyre-comment",
        CJ: "fyre-comment-date",
        IJ: "fyre-comment-divider",
        JJ: "fyre-comment-divider-narrow",
        QY: "fyre-edit-editor",
        uh: "fyre-editor",
        lA: "fyre-comment-expand",
        rA: "fyre-comment-flag-mobile-btn",
        oZ: "fyre-comment-focused",
        uZ: "fyre-comment-footer",
        xh: "fyre-guest",
        BA: "fyre-comment-has-replies",
        pb: "fyre-comment-head",
        Hi: "fyre-hide",
        te: "fyre-comment-like",
        lL: "fyre-mention",
        Ap: "fyre-more-btn",
        Bm: "fyre-comment-premod",
        Uf: "fyre-comment-raw-html",
        Bg: "fyre-comment-reply",
        a0: "fyre-comment-see-more",
        Cg: "fyre-share-link",
        Zb: "fyre-comment-source",
        QM: "fyre-comment-user",
        TB: "fyre-comment-username",
        SM: wH
    };
    z.e = Uu.prototype;
    z.e.Iq = "fyre-comment-body fyre-comment-reply fyre-comment-like fyre-comment-actions fyre-comment-see-more fyre-share-link fyre-more-btn".split(" ");
    z.e.dm = z.X.bc;
    z.e.FC = function() {
        gn(this.n) || (this.Se = new z.Tu({
            xa: this.n,
            Qa: this.d.H.Qa,
            bs: z.Xm,
            aq: this.d.u.fb()
        }),
        this.G(this.Se))
    }
    ;
    z.e.t = function() {
        this.n.get(z.Zm);
        var a = Uu.b.t.call(this);
        a.eo = this.n.get(Ym);
        var b = this.n.get(z.Jm);
        a.qC = b === this.n.Kb.qp;
        a.hy = this.w.get(z.U.Pd);
        a.bG = this.n.Yh();
        a.vq = vn(this.n);
        b = this.n;
        b = (b.get(b.k.jm).tweetMeta || {}).retweet_info || {};
        a.my = b.screen_name && b.name ? {
            name: b.name,
            handle: b.screen_name
        } : null;
        (b = this.n.Qe()) || (b = this.n,
        b = 26 === b.get(b.k.Zb));
        if (b) {
            var b = Wu(this, fs.ab, Oj.ab)
              , c = Wu(this, fs.lf, Oj.lf);
            b && (a.title = b,
            a.link = c)
        }
        return a
    }
    ;
    z.e.K = function(a) {
        Uu.b.K.call(this, a);
        a = this.o(bt.te);
        this.Se && this.Se.U(a)
    }
    ;
    z.e.m = function() {
        var a = bt
          , b = this.n.get(Hm)
          , c = this.s.get(this.s.k.FA);
        z.dk(this.c.parentNode, a.Zb + "-" + b);
        this.s.kc() && z.dk(this.c, a.xh);
        this.Ua = null;
        this.Ny() || Xu(this);
        this.kd = null;
        this.XH() && Zu(this);
        this.Ky(z.v.iW && this.s && !c);
        z.sg.Lg(this.IV) && z.bv(this);
        Xs(this, this.n.get(Om));
        b = this.p();
        this.ku() || ((c = this.ku()) || (c = this.n,
        c = 8 === c.get(c.k.Zb)),
        c || this.s.kc() || this.s.Zh() || this.s.$n() || this.Wh.Td(this.o(a.QM), this.cQ, this),
        b.e(this.o(a.qc), "click", this.$v));
        b.e(this.o(a.TB), "click", this.$v);
        b.e(this.pq, "edit_clicked", this.gw);
        Uu.b.m.call(this)
    }
    ;
    z.e.XH = function() {
        var a = this.n.get(this.n.k.Zb)
          , a = Xr(a);
        return !!this.Ua || a
    }
    ;
    z.e.Dw = function(a, b) {
        b ? Xu(this) : Yu(this)
    }
    ;
    z.e.Th = function(a, b) {
        b ? (Zu(this),
        Xu(this)) : (!this.pq.K1() && this.kd && (this.kd.q(),
        this.kd = null),
        Yu(this))
    }
    ;
    z.e.$v = function(a) {
        a.preventDefault();
        var b = z.Nd;
        a = gn(this.n);
        var c = this.s.kc()
          , b = this.s.get(b.Yb);
        c && !b || a && !b || this.dispatchEvent({
            type: "author_click",
            s: this.s
        })
    }
    ;
    z.e.fl = function(a, b) {
        switch (b) {
        case this.ea.Uf:
            this.Fs && this.Fs.Oa(a ? a : null);
            break;
        case this.ea.ef:
            gv(this, a);
            break;
        case this.ea.BA:
            a ? z.dk(this.c, "fyre-comment-has-replies") : z.fk(this.c, "fyre-comment-has-replies");
            break;
        case this.ea.Lp:
        case this.ea.NM:
            es(this.Zu)
        }
        Uu.b.fl.call(this, a, b)
    }
    ;
    z.e.gw = function(a) {
        this.kd.ka() ? (this.kd.yb(),
        mn(this.n) && this.dispatchEvent({
            type: "replies_toggle",
            toggle: !1
        })) : (a.preventDefault(),
        !this.sf && this.wx(),
        $u(this))
    }
    ;
    z.e.oE = function() {
        var a = this.ea
          , b = this.n;
        return {
            Dh: b.get(a.ef),
            ia: (0,
            z.q)(this.TC, this),
            Gk: b.id,
            content: b.get(a.Jc),
            L: this.d,
            li: "edit",
            tH: b.Pv()
        }
    }
    ;
    z.e.wx = function(a) {
        var b = bt
          , c = this.d.u.v()
          , d = this.o(b.uh)
          , b = z.cv.D()
          , f = this.p()
          , g = z.nn(this.n);
        a = a || "main";
        var h = this.oE();
        this.Ec && ev(this);
        Qu(this.kd);
        var k = (0,
        z.q)(function() {
            this.sf.ag(!0);
            f.Ed(this.sf, "fyre.v2.editor.EVENTS.CANCEL_CLICKED", this.BQ);
            f.Ed(this.sf, "fyre.v2.editor.EVENTS.EDIT_COMMENT_CLICKED", this.CQ)
        }, this);
        z.N(d, !0);
        if (this.sf)
            k();
        else {
            var m = (0,
            z.q)(function(a) {
                this.sf = a;
                f.Ed(this.sf, "fyre.v2.editor.EVENTS.LOAD", k);
                this.G(this.sf);
                this.sf.U(d, !0)
            }, this);
            z.fv(b, a, m, h, c, g)
        }
    }
    ;
    z.e.TC = function(a) {
        this.n.set(this.ea.Jc, a.content[this.ea.Jc]);
        this.n.set(this.ea.Uf, a.content[this.ea.Uf]);
        av(this);
        $u(this, !0)
    }
    ;
    z.e.CQ = function() {}
    ;
    z.e.BQ = function() {
        av(this);
        $u(this, !0)
    }
    ;
    z.e.nF = function() {
        z.bv(this)
    }
    ;
    z.e.qG = function(a) {
        var b = a.pj();
        if (!xi(b)) {
            var c = this.s.fm()
              , b = jn(this.n);
            this.s.id === z.F.id || this.s.Sc() || this.s.Qe() || this.s.Zh() || a.fo(c);
            z.w(b, function(b) {
                b.id !== c.id && a.fo(b)
            })
        }
    }
    ;
    z.e.bR = function() {
        z.fk(this.Ua.c, BH.st)
    }
    ;
    z.e.hO = function() {
        this.Ec.clear();
        mn(this.n) || ev(this)
    }
    ;
    z.e.DE = function(a) {
        var b = bt
          , c = this.o(b.IJ)
          , c = z.Qc(c);
        a.preventDefault();
        this.collapsed ? (hk(c[0], b.lA, b.Mz),
        c[1].innerHTML = "",
        this.collapsed = !1) : (hk(c[0], b.Mz, b.lA),
        c[1].innerHTML = z.X.X1({
            replies: this.zq
        }),
        this.collapsed = !0);
        lk(c[2].element, b.JJ);
        z.N(this.ng, !z.Ql(this.ng))
    }
    ;
    z.e.Ky = function(a) {
        var b = this.o(bt.SM)
          , c = !1;
        a && (c = !0);
        z.N(b, c)
    }
    ;
    z.e.S = function() {
        z.F.off(null, null, this);
        Uu.b.S.call(this)
    }
    ;
    z.e.h = function() {
        Yu(this);
        Uu.b.h.call(this)
    }
    ;
    z.u(hv, z.T);
    z.e = hv.prototype;
    z.e.r = function() {
        this.c = z.xo(z.X.zO, this.t())
    }
    ;
    z.e.m = function() {
        this.GV = this.o("fyre-comment-reply-count");
        this.JV = this.o("fyre-comment-reply-text");
        this.p().e(this.c, "click", this.Ub);
        iv(this, this.Za);
        hv.b.m.call(this)
    }
    ;
    z.e.Ub = function(a) {
        a.preventDefault();
        this.dispatchEvent("dividerCounterClicked")
    }
    ;
    z.e.Qv = z.fg.l1;
    z.e.t = function() {
        return {
            FS: this.he
        }
    }
    ;
    z.u(jv, hv);
    jv.prototype.Qv = function() {
        return 1 == this.Za ? z.W.get(z.W.g.jB) : z.W.get(z.W.g.iB)
    }
    ;
    z.u(kv, hv);
    kv.prototype.Qv = function() {
        return 1 == this.Za ? z.W.get(z.W.g.DL) : z.W.get(z.W.g.CL)
    }
    ;
    z.u(lv, z.T);
    var mv = "expanded";
    z.e = lv.prototype;
    z.e.m = function() {
        this.Vi = this.o("fyre-comment-collapse");
        this.Og = this.o("fyre-comment-divider");
        this.p().e(this.Vi, "click", this.wQ);
        nv(this) && (z.dk(this.c, "fyre-divider-active"),
        z.N(this.Vi, !0));
        lv.b.m.call(this)
    }
    ;
    z.e.S = function() {
        this.Og = this.Vi = null;
        lv.b.S.call(this)
    }
    ;
    z.e.wQ = function(a) {
        a.preventDefault();
        this.qz("menu")
    }
    ;
    z.e.qz = function(a, b) {
        var c;
        this.state = c = z.p(b) ? b : this.state === mv ? "collapsed" : mv;
        this.dispatchEvent({
            type: "replies_toggle",
            show: c === mv,
            source: a
        });
        "collapsed" === this.state ? (z.fk(this.c, "fyre-comment-collapse"),
        z.dk(this.c, "fyre-comment-expand"),
        this.he && 0 < this.nh || rv(this)) : qv(this)
    }
    ;
    z.e.xI = function() {
        this.dispatchEvent("velocity_replies_clicked");
        this.oe += this.nh;
        this.nh = 0;
        nv(this) && z.N(this.Vi, 0 < this.oe);
        this.state = mv;
        qv(this)
    }
    ;
    z.e.tQ = function(a) {
        a.call(this);
        pv(this)
    }
    ;
    z.u(sv, z.T);
    var DH = {};
    z.e = sv.prototype;
    z.e.r = function() {
        this.c = z.xo(this.Vo.Xo, this.t());
        z.N(this.c, !1);
        this.Be = this.o("fyre-comment-wrapper");
        this.Og = this.o("fyre-comment-divider")
    }
    ;
    z.e.t = function() {
        return {
            id: this.l.id,
            Gg: this.l.get(z.Sm),
            j: {
                wI: z.W.get(z.W.g.MB),
                jG: this.l.Or() ? "http://schema.org/Review" : "http://schema.org/Comment"
            }
        }
    }
    ;
    z.e.ne = function() {
        if (tv(this))
            return this.Pa ? void 0 : this.dy();
        this.Pa && (this.L.O("comment_hidden", this),
        this.p().Fa(this.Pa, null, null),
        this.Pa.q(),
        this.Pa = null,
        this.dispatchEvent("threadVisChanged"));
        this.Is()
    }
    ;
    z.e.S = function() {
        this.w && this.w.off(null, null, this);
        this.l && this.l.off(null, null, this);
        sv.b.S.call(this)
    }
    ;
    z.e.h = function() {
        this.Pa && (this.Pa.q(),
        this.Pa = null);
        this.$c = this.w = this.ea = this.l = this.L = this.Jd = null;
        this.Sl && this.Sl.q();
        this.Be = this.Og = this.ng = this.og = null;
        sv.b.h.call(this)
    }
    ;
    z.e.Ys = function() {
        !this.Pa && this.$c && (z.N(this.Be, !0),
        z.N(this.Og, !0),
        z.dk(this.c, "fyre-comment-vis-replies"))
    }
    ;
    z.e.gl = function() {
        if (this.aa) {
            var a = !!this.Pa
              , b = tv(this);
            a != b && this.ne()
        }
    }
    ;
    z.e.show = function(a) {
        z.w(this.Jd, function(a) {
            a.f() || a.ra(this.Ea());
            a.show(!1, !1)
        }, this);
        if (!this.c || this.tl()) {
            var b = this.L.H.uD;
            if (a = z.wj(b) ? !b : a) {
                var c = z.Ml(this.c).height;
                this.c.style.height = 0;
                var d = z.zl(this.c, "overflowX")
                  , f = z.zl(this.c, "overflowY");
                this.Sl = new z.cm(this.c,0,c,500);
                this.Sl.Ve = (0,
                z.q)(function() {
                    this.c.style.overflow = "hidden"
                }, this);
                this.Sl.nd = (0,
                z.q)(function() {
                    z.Ll(this.c, c);
                    this.c.style.overflowX = d;
                    this.c.style.overflowY = f;
                    this.c.style.height = ""
                }, this);
                this.Sl.play()
            }
            this.c && z.N(this.c, !0)
        }
    }
    ;
    z.e.yb = function() {
        this.c && z.N(this.c, !1)
    }
    ;
    z.e.tl = function() {
        return !z.Ql(this.c)
    }
    ;
    z.e.Wp = function(a, b, c) {
        this.xe(a, b, c);
        this.Jd.push(a);
        this.p().e(a, "threadVisChanged", z.pa(this.im, a));
        this.im(a)
    }
    ;
    z.e.im = function(a, b) {
        b && b.stopPropagation();
        var c = 0;
        z.w(this.Jd, function(a) {
            c += uv(a)
        });
        this.$c = c;
        this.Ys();
        this.dispatchEvent("threadVisChanged")
    }
    ;
    z.e.Ea = function() {
        return this.ng
    }
    ;
    z.e.Ey = function() {
        z.dk(this.c, "fyre-comment-focused")
    }
    ;
    z.e.Is = function() {
        z.N(this.Be, !1);
        z.N(this.Og, !1);
        z.fk(this.c, "fyre-comment-vis-replies");
        this.Be.innerHTML = this.Vo.pD({
            j: {
                UC: z.W.get(z.W.g.OB)
            }
        });
        this.Ys();
        kk(this.c, "fyre-comment-hidden", !this.$c)
    }
    ;
    z.e.dy = function() {
        this.Pa = new this.Bz(this.L,this.l);
        this.Pa.xc(this);
        this.Pa.U(this.Be);
        z.N(this.Be, !0);
        z.N(this.Og, !0);
        this.L.T.O("comment_rendered", this);
        this.dispatchEvent("threadVisChanged")
    }
    ;
    z.u(xv, sv);
    z.e = xv.prototype;
    z.e.r = function() {
        xv.b.r.call(this);
        this.ng = this.o("fyre-comment-replies");
        this.og = this.o("fyre-outer-comment-container");
        this.ne();
        vv(this)
    }
    ;
    z.e.h = function() {
        this.Db && this.Db.q();
        this.Db = null;
        xv.b.h.call(this)
    }
    ;
    z.e.DE = function(a) {
        a.stopPropagation();
        z.N(this.og, a.show);
        var b = "";
        a.show ? (b = "ExpandReplies",
        this.show()) : (b = "CollapseReplies",
        z.w(this.Jd, function(a) {
            a.yb()
        }));
        "menu" === a.source && this.L.$b.send(z.Xn(b, {
            bc: this.l
        }))
    }
    ;
    z.e.UR = function() {
        this.Db.qz("reply_button", mv)
    }
    ;
    z.e.ne = function() {
        xv.b.ne.call(this);
        this.Pa && (this.Db ? ov(this.Db, this.$c) : (this.Db = new lv(this.$c,this.he,!this.yS),
        this.Db.U(this.Og),
        this.Db.xc(this),
        this.p().e(this.Db, "replies_toggle", this.DE),
        this.p().e(this.Db, "velocity_replies_clicked", this.tS),
        this.p().e(this.Pa, "open_reply_editor", this.UR)))
    }
    ;
    z.e.tS = function() {
        z.N(this.og, !0);
        this.show();
        var a = this.Jd[this.Jd.length - 1];
        z.Qa(this.Jd, function(b) {
            if (z.Ql(b.f()))
                return a = b,
                !0
        });
        var b = a.f(), c = z.wv(b), d;
        this.Pa && this.Pa.Ec && (d = this.Pa.Ec.f());
        var f = 15;
        d && (f += z.Ml(d).height,
        f += Zl(d, "margin").top,
        f += Zl(d, "margin").bottom);
        b = z.Hl(c).y + z.Ml(c).height - z.Ml(b).height - f;
        b > ("innerHeight"in window ? window.innerHeight : window.document.documentElement.offsetHeight) + (window.document.body.scrollTop || window.document.documentElement.scrollTop) && z.Sv(b)
    }
    ;
    z.e.im = function(a, b) {
        xv.b.im.call(this, a, b);
        var c = a.l
          , d = 1 === c.get(Nm)
          , c = z.F.id && z.F.id === c.get(z.Sm)
          , f = a.getParent()
          , f = f.f() ? f.tl() : !0
          , g = a.f() ? a.tl() : !0;
        null != this.Db && (this.he ? d ? ov(this.Db, this.$c) : c ? (this.Db.xI(),
        ov(this.Db, this.$c)) : g ? (f && ov(this.Db, this.$c),
        d = this.Db,
        d.nh = Math.max(0, this.$c - d.oe),
        pv(d),
        0 === d.nh ? "collapsed" === d.state && rv(d) : (rv(d, !0),
        z.dk(d.c, "fyre-divider-active"),
        z.dk(d.c, "fyre-comment-divider-force"))) : ov(this.Db, this.$c) : ov(this.Db, this.$c))
    }
    ;
    z.u(Fv, z.T);
    z.e = Fv.prototype;
    z.e.t = function() {
        var a = {}
          , b = this.XC || z.W.get(z.W.g.LL);
        a.j = {
            qO: b,
            vV: z.W.get(z.W.g.tM)
        };
        return a
    }
    ;
    z.e.K = function(a) {
        Fv.b.K.call(this, a);
        z.to(this.c, Cv, this.t());
        this.Hs = this.o("fyre-stream-refresh")
    }
    ;
    z.e.m = function() {
        Fv.b.m.call(this);
        this.p().e(this.Hs, "click", this.ib)
    }
    ;
    z.e.ib = function(a) {
        a.preventDefault();
        this.dispatchEvent({
            type: "sortBackTo"
        })
    }
    ;
    z.e.h = function() {
        z.Nc(this.c);
        Fv.b.h.call(this)
    }
    ;
    z.u(Gv, z.T);
    var EH = {
        spam: "fyre-flag-spam-link",
        offensive: "fyre-flag-offensive-link",
        disagree: "fyre-flag-disagree-link",
        "off-topic": "fyre-flag-offtopic-link"
    };
    z.e = Gv.prototype;
    z.e.r = function() {
        var a;
        a = this.tf;
        a = {
            j: {
                nP: Os(a.get(a.g.sA)),
                oP: a.get(a.g.yK),
                rP: Os(a.get(a.g.uA)),
                sP: a.get(a.g.AK),
                pP: Os(a.get(a.g.tA)),
                qP: a.get(a.g.zK),
                kP: Os(a.get(a.g.qA)),
                lP: a.get(a.g.tK)
            }
        };
        a = z.xo(ep, a);
        z.N(a, !1);
        this.K(a)
    }
    ;
    z.e.h = function() {
        Gv.b.h.call(this);
        this.n = this.d = this.Lk = this.xl = this.tf = null;
        this.ei.q()
    }
    ;
    z.e.m = function() {
        Gv.b.m.call(this);
        var a = this.p(), b;
        for (b in AG)
            if (AG.hasOwnProperty(b)) {
                var c = AG[b]
                  , d = z.pa(this.WQ, c);
                a.e(this.o(EH[c]), "click", d)
            }
    }
    ;
    z.e.Gv = function(a, b) {
        var c = this.tf
          , d = null
          , f = this;
        switch (a.Ie) {
        case "spam":
            d = c.get(c.g.Ft);
            break;
        case "offensive":
            d = c.get(c.g.Dt);
            break;
        case "disagree":
            d = c.get(c.g.Ct);
            break;
        case "off-topic":
            d = c.get(c.g.Et)
        }
        Hv(this, this.xl);
        this.xl = null;
        this.dispatchEvent({
            type: "mobile_flag_confirmation",
            data: a,
            cE: d,
            eE: b,
            ia: function(b) {
                b && f.d.$b.send(z.Xn(yG[a.Ie], {
                    bc: f.n
                }))
            }
        })
    }
    ;
    z.e.WQ = function(a, b) {
        b.preventDefault();
        var c = z.Nd
          , d = this.Lk.get(z.Gm)
          , f = this.Lk.id
          , c = d.get(c.za)
          , d = this.Lk.get(Lm).id;
        this.Gv({
            Sa: f,
            Aa: d,
            Ie: a,
            gi: null,
            ej: null
        }, c)
    }
    ;
    z.u(Iv, nl);
    Iv.prototype.xg = function() {
        var a = z.Ml(this.oO).height * this.coords[0] / 1;
        z.Ll(this.uN, a)
    }
    ;
    Iv.prototype.ho = function() {
        this.xg();
        Iv.b.ho.call(this)
    }
    ;
    Iv.prototype.nd = function() {
        this.xg();
        Iv.b.nd.call(this);
        this.LD()
    }
    ;
    Iv.prototype.Ve = function() {
        this.xg();
        Iv.b.Ve.call(this)
    }
    ;
    z.u(Jv, sv);
    z.e = Jv.prototype;
    z.e.nq = function() {
        z.fk(this.c, "fyre-liveblog-expanded", DH.JL);
        z.N(this.ng, !1);
        this.og.style.height = "auto"
    }
    ;
    z.e.r = function() {
        Jv.b.r.call(this);
        this.ng = this.o("fyre-comment-replies");
        this.og = this.o("fyre-outer-comment-container");
        this.ne();
        vv(this)
    }
    ;
    z.e.nv = function(a) {
        z.N(this.ng, !0);
        z.dk(this.c, "fyre-liveblog-expanded");
        var b = (0,
        z.q)(function() {
            this.og.style.height = "auto";
            z.dk(this.c, DH.JL);
            this.dispatchEvent({
                type: "repliesExpanded",
                n: this.l,
                Xo: this
            })
        }, this);
        a ? (a = new Iv(this.og,this.ng,600),
        a.LD = b || z.n,
        a.play()) : b()
    }
    ;
    z.e.t = function() {
        var a = this.l.get(z.Gm)
          , b = zj(this.l.get(this.l.k.Nd)) ? z.V : z.W;
        return {
            Gg: (a || {}).id,
            id: this.l.id,
            j: {
                wI: b.get(b.g.MB),
                jG: this.l.Or() ? "http://schema.org/Review" : "http://schema.org/Comment"
            }
        }
    }
    ;
    z.e.Kx = function() {
        this.pz()
    }
    ;
    z.e.ne = function() {
        Jv.b.ne.call(this);
        if (this.Pa) {
            var a = this.o("fyre-comment-reply");
            a && this.p().e(a, "click", this.Kx)
        }
    }
    ;
    z.e.pz = function() {
        z.nn(this.l) && ((this.xj = !this.xj) ? this.nv() : this.nq())
    }
    ;
    z.u(Kv, Jv);
    z.e = Kv.prototype;
    z.e.nq = function() {
        Kv.b.nq.call(this);
        this.sx && z.Oc(this.sx)
    }
    ;
    z.e.nv = function() {
        Kv.b.nv.call(this, !0);
        mn(this.l) && (this.sx = z.xo(z.X.qT),
        Ph(this.sx, this.ng))
    }
    ;
    z.e.ne = function() {
        Kv.b.ne.call(this);
        if (this.Pa) {
            var a = z.xo(z.X.rT);
            z.Ki(this.Be, a);
            this.p().e(this.Pa, "replies_toggle", this.pz)
        }
    }
    ;
    z.e.Is = function() {
        Kv.b.Is.call(this);
        this.xj && (this.nq(),
        this.xj = !1)
    }
    ;
    z.e.Ys = z.n;
    z.u(Lv, xv);
    var Nv = {
        yt: "fyre-reply-more-toggle",
        Qz: "fyre-outer-comment-container",
        AA: "fyre-has-hidden-replies",
        Hi: "fyre-hide"
    };
    Lv.prototype.wr = function(a) {
        if (!this.iy && a.target.l.get(z.Rm) === this.l.id) {
            var b = 0
              , c = 0
              , d = 0;
            z.w(this.Jd, function(a) {
                var g = z.jk(a.f(), Nv.Hi)
                  , h = 0 !== a.l.get(z.Jm) || a.$c;
                a.aa && h && ((b++,
                !g && d < this.Ns) ? d++ : g ? g && h && d < this.Ns && (Qv(this, a, !0),
                c++,
                d++) : (Qv(this, a),
                c++))
            }, this);
            d === b ? Pv(this) : Mv(this)
        }
    }
    ;
    Lv.prototype.sg = function() {
        var a = this.p()
          , b = this.Pa ? this.Pa.Ua : null;
        z.w(this.Jd, function(b) {
            kk(b.f(), Nv.Hi, !1);
            (b = b.Pa) && (b = b.Ua) && a.Fa(b, "replyCommentClicked", this.sg)
        });
        Pv(this);
        this.ml = 0;
        this.iy = !0;
        this.Db && kk(this.Db.c, "fyre-divider-vanilla", !1);
        b && a.Fa(b, "replyCommentClicked", this.sg);
        a.Fa(this, "comment_notification_click", this.sg);
        a.Fa(this, "replies_toggle", this.sg);
        a.Fa(this, "threadVisChanged", this.wr)
    }
    ;
    Lv.prototype.Wp = function(a, b, c) {
        Lv.b.Wp.call(this, a, b, c);
        c && !this.iy && (a.l.ka() || z.Ql(a.Be) ? (this.Ns + this.yH < this.Jd.length && (Qv(this, a),
        Mv(this)),
        (a = a.Pa) && (a = a.Ua) && this.p().e(a, "replyCommentClicked", this.sg)) : this.yH++)
    }
    ;
    Lv.prototype.dy = function() {
        Lv.b.dy.call(this);
        var a = this.p()
          , b = this.Pa ? this.Pa.Ua : null;
        b && a.e(b, "replyCommentClicked", this.sg);
        a.Ed(this, "comment_notification_click", this.sg);
        a.Ed(this, "replies_toggle", this.sg);
        a.e(this, "threadVisChanged", this.wr)
    }
    ;
    var Tv = !1;
    z.u(Uv, bm);
    Uv.prototype.xg = function() {
        this.element.scrollTo(Math.round(this.coords[0]), Math.round(this.coords[1]))
    }
    ;
    Vv.prototype.getKey = function() {
        return this.ao
    }
    ;
    Vv.prototype.Q = function() {
        return this.rh
    }
    ;
    Vv.prototype.clone = function() {
        return new Vv(this.ao,this.rh)
    }
    ;
    z.u(Wv, Vv);
    var FH = [];
    z.e = Wv.prototype;
    z.e.clone = function() {
        return new Wv(this.getKey(),this.Q())
    }
    ;
    z.e.getParent = function() {
        return this.Ta
    }
    ;
    z.e.ec = function() {
        return this.ma || FH
    }
    ;
    z.e.ld = function(a) {
        return this.ec()[a] || null
    }
    ;
    z.e.Cc = function() {
        return this.ec().length
    }
    ;
    z.e.contains = function(a) {
        do
            a = a.getParent();
        while (a && a != this);return Boolean(a)
    }
    ;
    z.e.Qc = function(a, b) {
        z.w(this.ec(), a, b)
    }
    ;
    z.e.xc = function(a) {
        this.Ta = a
    }
    ;
    z.e.G = function(a) {
        this.xe(a, this.ma ? this.ma.length : 0)
    }
    ;
    z.e.xe = function(a, b) {
        a.xc(this);
        this.ma = this.ma || [];
        Zh(this.ma, b, 0, a)
    }
    ;
    z.e.replaceChild = function(a, b) {
        var c = z.Na(this.ec(), b)
          , d = this.ec()
          , f = d[c];
        f.xc(null);
        d[c] = a;
        a.xc(this);
        return f
    }
    ;
    z.e.wo = function(a) {
        var b = this.ma && this.ma[a];
        return b ? (b.xc(null),
        z.Ua(this.ma, a),
        0 == this.ma.length && delete this.ma,
        b) : null
    }
    ;
    z.e.removeChild = function(a) {
        return this.wo(z.Na(this.ec(), a))
    }
    ;
    z.e.Jf = function() {
        this.ma && z.w(this.ma, function(a) {
            a.xc(null)
        });
        delete this.ma
    }
    ;
    z.u(Zv, z.T);
    var VF = Zv.prototype.lp = BG;
    z.e = Zv.prototype;
    z.e.vL = 50;
    z.e.Kr = function(a) {
        this.Yo = this.w.Dd() ? Kv : a && this.L.H.Ms ? Lv : xv;
        this.jy = this.w.Dd() ? Kv : xv
    }
    ;
    z.e.Kv = function() {
        return this.L.H.Xh
    }
    ;
    z.e.Ho = z.n;
    z.e.m = function() {
        this.p().e(this, "mobile_flag_butn", this.gW);
        this.d.H.Qa && z.dk(this.c, "fyre-avatars-disabled");
        Zv.b.m.call(this)
    }
    ;
    z.e.II = function(a) {
        var b = a.get(Qm);
        return b && b !== a.id && aw(this, b) ? (cw(this, a),
        !0) : !1
    }
    ;
    z.e.vw = function(a, b, c, d) {
        this.Zf && this.Zf.q();
        this.Zf = null;
        if (!this.II(a, d))
            if (this.rb[a.get(Um)])
                this.yz(a, b);
            else {
                a: {
                    d = a.k;
                    var f = a.get(d.Ki);
                    if (f && !this.rb[f]) {
                        if (this.Kv())
                            break a;
                        this.di(f)
                    }
                    var g = 0 < this.d.H.zH ? 0 : void 0
                      , f = f ? new this.jy(this.L,a,g) : new this.Yo(this.L,a);
                    d = ew(this, new Wv(a.get(d.X),f), b);
                    this.Qj(d, b, c);
                    this.JF(d)
                }
                bw(this, this.L.H.zx);
                1 === a.get(Nm) && bw(this, this.Kv())
            }
    }
    ;
    z.e.by = function(a) {
        var b = this.rb[a.id]
          , c = b.Q()
          , d = this.gd.Q()
          , f = (0,
        z.q)(function(a) {
            b && this.gd.removeChild(b);
            -1 < z.Ep(d, c) && d.removeChild(c);
            z.db(this.rb, a);
            jj(this.uj, function(b) {
                return b.id === a
            })
        }, this);
        f(a.id);
        Yv(b, function(a) {
            f(a.getKey());
            a.Q().q()
        });
        c.q()
    }
    ;
    z.e.zw = function(a) {
        var b = a.Vj;
        z.un(Cp((this.rb[b] || this.di(b)).Q()), a)
    }
    ;
    z.e.OE = function(a, b) {
        z.tn(Cp((this.rb[b] || this.di(b)).Q()), a)
    }
    ;
    z.e.zR = function(a, b) {
        sn(Cp((this.rb[b] || this.di(b)).Q()), a)
    }
    ;
    z.e.Bw = function(a, b) {
        Cp((this.rb[b] || this.di(b)).Q()).Bw(a)
    }
    ;
    z.e.yz = function(a, b) {
        var c = a.get(Um)
          , d = this.rb[c]
          , f = Cp(d.Q());
        f.get(Um) != c ? f.set(z.Gm, a.get(z.Gm)) : (this.Cx(a, f),
        d.getParent() || ew(this, d, b),
        this.Qj(this.rb[f.id], b))
    }
    ;
    z.e.Cx = function(a, b) {
        a.wg(z.Xm);
        b.wg(Km, {
            $e: !0
        });
        b.wg(z.Jm, {
            $e: !0
        });
        b.Cj(a, {
            $e: !0
        });
        b.set(z.Jm, b.get(z.Jm))
    }
    ;
    z.e.JF = z.n;
    z.e.Yg = function(a, b) {
        var c = this.rb[a];
        if (c) {
            var d = c.Q();
            if (d && d.c && !d.tl() && d.Pa) {
                var f = d.Pa
                  , c = d.c
                  , g = window.document.documentElement.clientHeight
                  , h = c.offsetTop - (g - (c.children ? c.children[0] : c).offsetHeight) / 2;
                for (c.children[0].offsetHeight > g && (h = c.offsetTop - g / 4); c.offsetParent; )
                    h += c.offsetParent.offsetTop,
                    c = c.offsetParent;
                z.Sv(h, 2E3 > Math.abs(window.scrollY - h) ? 300 : 1E3, null, function() {
                    f.Yg();
                    b && b(d)
                })
            } else
                z.gw(this)
        } else
            z.gw(this)
    }
    ;
    z.e.di = function(a) {
        var b = new z.Em;
        b.set(b.k.X, a);
        b.set(b.k.Kb, b.Kb.NONE);
        b.set(b.k.Nd, this.L.u.v());
        this.rb[a] = new Wv(a,new this.Yo(this.L,b));
        return this.rb[a]
    }
    ;
    z.e.Ea = function() {
        return this.Uj
    }
    ;
    z.e.Qj = function(a, b, c) {
        var d = a.Q()
          , f = d.l
          , g = this.ql > f.get(Vm);
        a = a.getParent();
        c = c && !g;
        d.f() && (a !== this.gd && a.Q().tl() && this.Qj(a, b, !1),
        b || (d.show(c),
        fw(this, f)))
    }
    ;
    z.e.Nu = function(a, b) {
        var c = b.get(Pm)
          , d = a.ec()
          , f = a === this.gd && this.hd === this.lp.Cp;
        a.Q()instanceof Kv && (f = !0);
        f && (d = z.Xa(d),
        d.reverse());
        var g = fj(d, function(a) {
            a = Cp(a.Q());
            return c <= a.get(Pm) ? -1 : 1
        })
          , g = 0 > g ? ~g : g;
        return f ? d.length - g : g
    }
    ;
    z.e.gW = function(a) {
        this.L.$b.send(z.Xn("FlagClick", {
            bc: a.bc
        }));
        this.AG || (this.AG = z.Eh("fyre-stream-menu-container"));
        if (!this.Yk || this.Yk.La)
            this.Yk = new Gv({
                L: this.L,
                n: a.bc,
                NO: zj(this.w) ? z.V : z.W
            }),
            this.G(this.Yk),
            this.Yk.ra(this.AG);
        Hv(this.Yk, a.target.f(), a.bc)
    }
    ;
    z.e.By = z.n;
    z.e.hS = function(a) {
        a.stopPropagation();
        this.dispatchEvent("sortBackTo")
    }
    ;
    z.e.h = function() {
        z.Nc(this.c);
        this.gd.Jf();
        this.rb = {};
        this.uj = [];
        this.ph = this.Dk = null;
        this.Zf && this.Zf.q();
        this.Zf = null;
        Zv.b.h.call(this)
    }
    ;
    z.u(z.hw, Zv);
    z.e = z.hw.prototype;
    z.e.mF = function(a) {
        a.iO = this
    }
    ;
    z.e.pF = function() {
        this.uy || (this.uy = window.setTimeout((0,
        z.q)(function() {
            this.La || (jw(this),
            window.clearTimeout(this.uy),
            this.uy = null)
        }, this), 330))
    }
    ;
    z.e.Ew = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.Vx()
    }
    ;
    z.e.Vx = function() {
        this.dispatchEvent({
            type: this.au,
            MC: iw(this),
            direction: this.hd,
            target: this,
            Wb: (0,
            z.q)(this.Fw, this),
            lj: (0,
            z.q)(this.qF, this)
        })
    }
    ;
    z.e.qF = function() {
        this.Ha.Ws();
        var a = new z.Gq;
        Iq(a, a.kp.QL);
        a.Oa(z.W.get(z.W.g.iA));
        a.open()
    }
    ;
    z.e.Fw = function() {
        this.L.T.O("bootstrap_data_loaded");
        this.Ho()
    }
    ;
    z.e.wE = function(a) {
        var b = this.w.get(z.U.It);
        return 0 === b ? a : b
    }
    ;
    z.e.sF = function() {
        for (var a = 0, b, c, d = this.Fb.ms, f = d.length; a < this.wE(f); ) {
            b = d.shift();
            if (!b)
                break;
            c = this.rb[b];
            c = c.Q();
            c.show(!0, !1);
            c = c.l;
            var g = c.get(this.ea.jf)
              , h = 0;
            this.ph && (h = this.ph.get(this.ea.jf));
            a++;
            g > h && (this.ph = c);
            c = z.Xa(this.Fb.Ai[b] || []);
            z.w(c, function(a) {
                ow(this.Fb, a, b)
            }, this);
            ow(this.Fb, b)
        }
    }
    ;
    z.e.Ho = function() {
        if (this.Ha) {
            var a = this.gd.ld(this.gd.ec().length - 1);
            if (a) {
                var b = Cp(a.Q())
                  , b = this.L.Lb.zr(b, this.hd);
                a && b ? this.Ha.show() : this.Ha.yb()
            } else
                this.Ha.yb()
        }
    }
    ;
    z.e.h = function() {
        z.hw.b.h.call(this);
        this.Ha && this.Ha.q();
        this.Fb && this.Fb.q();
        this.Yk = this.Fb = this.Ha = null
    }
    ;
    z.u(lw, z.T);
    z.e = lw.prototype;
    z.e.r = function() {
        this.c = z.xo(Ev, this.t())
    }
    ;
    z.e.t = function() {
        return {
            count: this.Za,
            j: {
                fU: pw(this),
                refresh: this.Va.get(this.Va.g.RL)
            }
        }
    }
    ;
    z.e.m = function() {
        this.Hs = this.o("fyre-velocity-refresh");
        this.JG = this.o("fyre-velocity-next");
        this.cD = this.o("fyre-velocity-count");
        this.oI = this.o("fyre-velocity-text");
        this.p().e(this.Hs, "click", z.pa(this.ib, "streamRefreshClicked"));
        this.p().e(this.JG, "click", z.pa(this.ib, "showNextClicked"));
        lw.b.m.call(this)
    }
    ;
    z.e.S = function() {
        this.oI = this.cD = this.JG = this.Hs = null;
        lw.b.S.call(this)
    }
    ;
    z.e.show = function() {
        z.N(this.c, !0)
    }
    ;
    z.e.yb = function() {
        z.N(this.c, !1)
    }
    ;
    z.e.ib = function(a, b) {
        b.preventDefault();
        this.dispatchEvent(a)
    }
    ;
    z.e.nb = function() {
        return this.Ol.nb()
    }
    ;
    z.e.clear = function() {
        this.Ol.clear();
        this.ms = [];
        nw(this);
        this.Ai = {}
    }
    ;
    z.u(z.qw, z.T);
    z.e = z.qw.prototype;
    z.e.K = function(a) {
        z.qw.b.K.call(this, a);
        this.De = this.o("fyre-stream-more-container")
    }
    ;
    z.e.m = function() {
        z.qw.b.m.call(this);
        this.p().e(this.c, "click", this.Ub)
    }
    ;
    z.e.Ub = function() {
        if (!this.hx) {
            var a = z.Ml(this.De).width;
            Kl(this.De, a);
            z.dk(this.De, "fyre-stream-more-loading");
            this.hx = !0;
            this.dispatchEvent("showMore")
        }
    }
    ;
    z.e.yb = function() {
        z.N(this.c, !1)
    }
    ;
    z.e.Ws = function() {
        this.De && (z.vl(this.De, "width", null),
        z.fk(this.De, "fyre-stream-more-loading"),
        this.hx = !1)
    }
    ;
    z.e.show = function() {
        z.N(this.c, !0)
    }
    ;
    z.e.h = function() {
        z.Nc(this.c);
        this.De = null;
        z.qw.b.h.call(this)
    }
    ;
    z.u(rw, z.hw);
    var GH = {
        gf: "fyre-stream-content",
        Bh: "fyre-stream-more"
    };
    z.e = rw.prototype;
    z.e.t = function() {
        var a = {}
          , b = this.L.u;
        a.Sd = z.v.J.qb;
        a.tx = b.v().Dd();
        a.ev = this.Ha ? !0 : !1;
        var c;
        a.tx ? (c = z.W.get(z.W.g.KA),
        b = z.W.get(z.W.g.gM)) : (c = z.W.get(z.W.g.om),
        b = z.W.get(z.W.g.Bh));
        a.j = {
            Qy: b,
            r1: vi(c),
            c2: z.W.get(z.W.g.Bh)
        };
        return a
    }
    ;
    z.e.K = function(a) {
        rw.b.K.call(this, a);
        a = this.t();
        z.to(this.c, z.Av, a);
        this.Uj = this.o(GH.gf);
        this.Ha && (this.si = this.o(GH.Bh),
        this.Ha.U(this.si),
        z.N(this.si, !1));
        this.he && (z.Ap(this.Fb, this.Uj),
        this.Fb.xc(this),
        this.Fb.yb())
    }
    ;
    z.e.mw = function(a) {
        var b = Cp(a.Q());
        if (b.get(z.Rm) && (a = a.getParent().Q(),
        !this.Fb.Ol.contains(a.l.id)))
            return;
        a = b.ka();
        var c = wn(b, b.get(Km))
          , d = this.Fb.Ol.contains(b.id)
          , f = b.get(Qm);
        !a || c || d ? !a && c && d && ow(this.Fb, b.id, f) : mw(this.Fb, b.id, f)
    }
    ;
    z.e.Oy = function(a) {
        if (!this.he)
            return !1;
        var b = 2 === a.get(this.ea.Kp);
        a = z.on(a, z.F);
        return b && !a
    }
    ;
    z.e.Qj = function(a, b, c) {
        var d = a.Q();
        if (d.f()) {
            var f = d.l;
            if (this.Oy(f))
                this.mw(a);
            else if (rw.b.Qj.call(this, a, b, c),
            a = z.wv(d.f())) {
                a = z.Hl(a).y;
                b = z.om(window);
                if (b <= a && (d.show(c),
                fw(this, f),
                this.innerHeight + b > a)) {
                    this.L.O("message_displayed", f.id);
                    return
                }
                dj(this.uj, {
                    id: f.id,
                    pageYOffset: a
                }, function(a, b) {
                    return a.pageYOffset > b.pageYOffset ? -1 : 1
                })
            }
        }
    }
    ;
    z.e.m = function() {
        var a = this.p();
        this.Ha && a.e(this.Ha, "showMore", this.Ew);
        this.he ? a.e(this.Fb, "showNextClicked", this.sF) : (a.e(window, "scroll", this.pF),
        a.e(window, "resize", this.pF));
        a.e(this, "repliesExpanded", this.mF);
        rw.b.m.call(this)
    }
    ;
    z.e.Rm = function(a) {
        this.hd = a
    }
    ;
    z.u(sw, rw);
    z.u(tw, xv);
    tw.prototype.ne = function() {
        tw.b.ne.call(this);
        if (this.Pa && z.nn(this.l)) {
            var a = {
                KW: z.W.get(z.W.g.wM)
            }
              , a = z.xo(z.X.JW, a);
            Li(a, this.og);
            this.p().e(a, "click", this.LU)
        }
    }
    ;
    tw.prototype.LU = function() {
        this.dispatchEvent({
            type: "animationInit",
            dt: this.l.id
        })
    }
    ;
    z.u(uw, Zv);
    z.e = uw.prototype;
    z.e.K = function(a) {
        this.c = a;
        uw.b.K.call(this, a);
        z.to(this.c, Bv, this.t());
        this.Uj = this.o("fyre-stream-content");
        this.Wc = this.o("fyre-content-loading")
    }
    ;
    z.e.t = function() {
        var a = zj(this.L.u.v()) ? z.V : z.W;
        return {
            j: {
                Qo: a.get(a.g.Ip)
            }
        }
    }
    ;
    z.e.Ad = function() {
        z.vl(this.Wc, "display", "none")
    }
    ;
    z.e.Zl = function() {
        z.vl(this.Wc, "display", "block")
    }
    ;
    z.e.m = function() {
        uw.b.m.call(this);
        this.p().e(this, "animationInit", this.ZP)
    }
    ;
    z.e.ZP = function(a) {
        a.stopPropagation();
        var b = vw()
          , c = 2E3 < b[0] - b[1] ? 1E3 : 300;
        z.Sv(b[1], c);
        xw(this, c, (0,
        z.q)(function() {
            this.dispatchEvent({
                type: "threadBreakout",
                dt: a.dt,
                Wb: (0,
                z.q)(this.Ad, this)
            });
            this.Zl()
        }, this))
    }
    ;
    z.e.Nu = function(a, b) {
        var c = a.ec()
          , d = this.Rv(b)
          , f = b.get(Vm)
          , g = (0,
        z.q)(function(a) {
            var b = Cp(a.Q());
            a = this.Rv(b);
            b = b.get(Vm);
            b = d === a && f >= b;
            return d > a || b ? -1 : 1
        }, this)
          , c = fj(c, g);
        return 0 > c ? ~c : c
    }
    ;
    z.e.By = function() {
        this.Zf.XC = this.WC
    }
    ;
    z.u(yw, uw);
    yw.prototype.Rv = function(a) {
        return a.get(z.Zm).score || 0
    }
    ;
    z.u(zw, uw);
    zw.prototype.JF = function(a) {
        for (; a.getParent() !== this.gd; )
            a = a.getParent();
        a = a.Q().bg("fyre-comment-divider");
        var b = a.length
          , c = 2 < b ? b - 4 : -1;
        z.N(a[b - 2], !1);
        -1 < c && z.N(a[c], !0)
    }
    ;
    zw.prototype.Kr = function() {
        this.Yo = this.jy = tw
    }
    ;
    zw.prototype.Rv = function(a) {
        var b = z.nn(a) ? "thread_score" : "score";
        return a.get(z.Zm)[b] || 0
    }
    ;
    z.sx = {
        mostHelpful: {
            direction: "descending",
            type: "sortMostHelpful"
        },
        highestRated: {
            direction: "descending",
            type: "sortRated"
        },
        lowestRated: {
            direction: "ascending",
            type: "sortRated"
        },
        newest: {
            direction: "descending",
            type: "sortCreated"
        },
        oldest: {
            direction: "ascending",
            type: "sortCreated"
        }
    };
    z.tx = {};
    z.tx.sortCreated = z.O.bd;
    z.tx.sortMostHelpful = z.O.se;
    z.tx.sortRated = z.O.wb;
    z.n.prototype.zV = function(a, b) {
        b.rating = z.aj(b.rating, function(a) {
            return 0 >= a ? a : a / 100 * b.maxRating
        });
        a.innerHTML = Dw({
            Vb: b.maxRating,
            Bb: b.rating
        })
    }
    ;
    z.n.prototype.renderRating = z.n.prototype.zV;
    z.u(Fw, z.T);
    Fw.prototype.r = function() {
        this.c = z.xo(this.dm, this.wW)
    }
    ;
    Fw.prototype.m = function() {
        Fw.b.m.call(this);
        this.p().e(this.c, "click", this.ib)
    }
    ;
    Fw.prototype.ib = function(a) {
        a.stopPropagation();
        this.dispatchEvent(this.ZN)
    }
    ;
    z.u(Gw, z.T);
    z.e = Gw.prototype;
    z.e.cm = function(a) {
        var b = (a.title ? "\x3ch3\x3e" + z.P(a.title) + "\x3c/h3\x3e" : "") + '\x3cul class\x3d"fyre-actions-menu-list"\x3e';
        a = a.options;
        for (var c = a.length, d = 0; d < c; d++)
            var f = a[d]
              , b = b + ('\x3cli class\x3d"fyre-menu-item-' + z.R(f.value) + (f.Da ? " " + z.R(f.Da) : "") + '" data-value\x3d"' + z.R(f.value) + '"\x3e' + z.P(f.label) + "\x3c/li\x3e");
        return (0,
        z.Q)(b + "\x3c/ul\x3e")
    }
    ;
    z.e.r = function() {
        Gw.b.r.call(this);
        z.to(this.c, Lp, this.t());
        var a = this.o("fyre-actions-menu-contents");
        z.to(a, this.cm, this.Vv())
    }
    ;
    z.e.m = function() {
        Gw.b.m.call(this);
        var a = this.o("fyre-actions-menu-back")
          , b = this.o("fyre-actions-menu-close")
          , c = this.o("fyre-actions-menu-contents")
          , d = this.p();
        d.e(c, "click", this.nr);
        a && d.e(a, "click", this.dQ);
        b && d.e(b, "click", this.lQ);
        this.hg && this.ky()
    }
    ;
    z.e.t = function() {
        return {
            Kw: this.C.Kw,
            UT: this.hg,
            j: {
                Q1: this.Va.get(this.Va.g.sL)
            }
        }
    }
    ;
    z.e.Vv = function() {
        return {
            options: this.Lv()
        }
    }
    ;
    z.e.dQ = function(a) {
        a.stopPropagation();
        this.dispatchEvent("menu.back")
    }
    ;
    z.e.lQ = function(a) {
        a.stopPropagation();
        this.dispatchEvent("menu.close")
    }
    ;
    z.e.nr = function(a) {
        a.stopPropagation();
        this.dispatchEvent({
            type: "menu.selected",
            value: a.target.getAttribute("data-value")
        })
    }
    ;
    z.e.ky = function() {
        var a = this.o("fyre-actions-menu-contents")
          , b = z.Ml(a).height
          , b = (pm().height - b) / 2;
        z.vl(a, "marginTop", b + "px")
    }
    ;
    z.u(Hw, Gw);
    var HH = {
        Gi: "fyre-custom-action",
        th: "fyre-delete-link",
        NK: "fyre-menu-item-",
        Bp: "fyre-menu-item-negative",
        Ut: "fyre-menu-item-positive"
    }
      , IH = {
        km: "ban",
        nm: "bozo",
        th: "delete",
        hf: "edit",
        um: "feature",
        ym: "flag"
    };
    z.e = Hw.prototype;
    z.e.m = function() {
        Hw.b.m.call(this);
        var a = this.o(HH.NK + "edit");
        a && (this.p().e(this, "edit_timeout", this.GQ),
        this.jd.U(a));
        var a = this.bg(HH.Gi)
          , b = a[a.length - 1];
        b && Hi(b) && (a = z.ji("HR"),
        Li(a, b));
        a = this.bg(HH.Ut);
        (b = a[a.length - 1]) && Hi(b) && (a = z.ji("HR"),
        Li(a, b))
    }
    ;
    z.e.Lv = function() {
        var a = []
          , b = this.Va.g
          , c = this.W.Yh();
        if (!gn(this.W)) {
            var d;
            z.w(this.cn, function(b) {
                d = b.key.replace(/ /g, "");
                a.push({
                    Da: HH.Gi,
                    label: b.key,
                    value: d
                })
            })
        }
        (-1 < z.Na(this.kl, "edit") || this.CS ? 0 : Wr(this.W)) && a.push({
            Da: HH.Ut,
            label: this.Va.get(b.hf),
            value: IH.hf
        });
        this.dx() && a.push({
            Da: HH.Ut,
            label: this.Va.get(c ? b.pp : b.um),
            value: IH.um
        });
        this.Xn() && a.push({
            Da: HH.Bp,
            label: this.Va.get(b.ym),
            value: IH.ym
        });
        this.bx() && a.push({
            Da: [HH.th, HH.Bp].join(" "),
            label: this.Va.get(b.th),
            value: IH.th
        });
        this.Wn(!0) && (-1 < z.Na(this.kl, IH.nm) || a.push({
            Da: HH.Bp,
            label: this.Va.get(b.nm),
            value: IH.nm
        }));
        this.Wn() && (-1 < z.Na(this.kl, IH.km) || a.push({
            Da: HH.Bp,
            label: this.Va.get(b.km),
            value: IH.km
        }));
        return a
    }
    ;
    z.e.GQ = function() {
        var a = Hi(this.jd.f());
        a && "HR" === a.tagName && z.Oc(a);
        this.jd.q()
    }
    ;
    z.e.nr = function(a) {
        Hw.b.nr.call(this, a);
        if (z.jk(a.target, HH.Gi)) {
            var b = a.target.getAttribute("data-value");
            a = mh(this.cn, function(a) {
                return a.key === b
            });
            var c = this.W.get(this.W.k.qc);
            a && a.ia({
                Gg: c.id,
                pO: this.W.id
            })
        }
    }
    ;
    z.e.Wn = function(a) {
        if (this.mf.Gb() || this.mf.Sc() || this.mf.Qe())
            return !1;
        var b = this.W.get(z.Zm).moderator
          , c = gn(this.W)
          , d = z.on(this.W, z.F);
        return (a ? z.F.eb() : z.F.get(z.E.lm)) && !b && !d && !c
    }
    ;
    z.e.bx = function() {
        var a = z.on(this.W, z.F)
          , b = -1 < z.Na(this.kl, IH.th);
        return (z.F.eb() || a) && !b
    }
    ;
    z.e.dx = function() {
        var a = -1 < z.Na(this.kl, IH.um)
          , b = gn(this.W)
          , c = z.F.eb();
        return this.tv && c && !b && !a
    }
    ;
    z.e.Xn = function() {
        var a = !z.Jh().gm
          , b = gn(this.W)
          , c = z.on(this.W, z.F)
          , d = -1 < z.Na(this.kl, IH.ym);
        return a && !this.wu || b || d || this.W.Yh() ? !1 : !c
    }
    ;
    z.u(Iw, Gw);
    var JH = z.W.g
      , KH = {};
    KH.spam = JH.Ft;
    KH.offensive = JH.Dt;
    KH.disagree = JH.Ct;
    KH["off-topic"] = JH.Et;
    Iw.prototype.mO = function(a) {
        a && this.dispatchEvent("menu.close")
    }
    ;
    Iw.prototype.Gv = function(a, b) {
        this.dispatchEvent({
            type: "mobile_flag_confirmation",
            ia: (0,
            z.q)(this.mO, this),
            data: a,
            cE: KH[a.Ie],
            eE: b
        })
    }
    ;
    Iw.prototype.Lv = function() {
        var a = this.Va.g;
        return [{
            label: this.Va.get(a.uA),
            value: "spam"
        }, {
            label: this.Va.get(a.sA),
            value: "offensive"
        }, {
            label: this.Va.get(a.qA),
            value: "disagree"
        }, {
            label: this.Va.get(a.tA),
            value: "off-topic"
        }]
    }
    ;
    Iw.prototype.nr = function(a) {
        a.stopPropagation();
        this.Gv({
            Sa: this.W.id,
            Aa: this.w.id,
            Ie: a.target.getAttribute("data-value"),
            gi: null,
            ej: null
        }, this.mf.get("displayName"))
    }
    ;
    z.u(Jw, Gw);
    Jw.prototype.Lv = function() {
        var a = this.Va.g;
        return [{
            label: this.Va.get(a.YM),
            value: 1
        }, {
            label: this.Va.get(a.WM),
            value: 2
        }]
    }
    ;
    Jw.prototype.Vv = function() {
        var a = Jw.b.Vv.call(this)
          , b = this.Va.g
          , b = z.nn(this.W) ? b.XB : b.XM;
        a.title = this.Va.get(b);
        return a
    }
    ;
    z.u(Kw, z.T);
    var LH = {};
    LH.action = Hw;
    LH.flag = Iw;
    LH.vote = Jw;
    z.e = Kw.prototype;
    z.e.r = function() {
        this.c = z.xo(Kp)
    }
    ;
    z.e.m = function() {
        Kw.b.m.call(this);
        var a = this.p();
        a.e(this, "menu.back", this.ER);
        a.e(this, "menu.selected", this.ow);
        a.e(window.document, "click", this.jr)
    }
    ;
    z.e.jr = function(a) {
        if (a.target !== this.getParent().f()) {
            var b = this;
            Uh(a.target, function(a) {
                return a === b.c
            }, !0, 10) || this.q()
        }
    }
    ;
    z.e.ow = function(a) {
        if (this.hg) {
            var b = LH[a.value];
            b && (a.stopPropagation(),
            Lw(this, b))
        }
    }
    ;
    z.e.ER = function() {
        this.ot.length && (this.Dg.q(),
        this.removeChild(this.Dg, !0),
        this.Dg = this.ot.pop(),
        this.G(this.Dg, !0))
    }
    ;
    z.e.ra = function(a) {
        Kw.b.ra.call(this, a);
        (a = LH[this.VS]) && Lw(this, a);
        this.ky()
    }
    ;
    z.e.ky = function() {
        var a, b;
        this.hg ? (a = window.document.body.scrollLeft,
        b = window.document.body.scrollTop,
        z.Bl(this.c, a, b),
        a = pm(),
        Jl(this.c, a.width, a.height)) : (a = this.getParent().f(),
        b = z.Hl(a),
        a = z.Ml(this.c),
        a = b.x - window.document.body.scrollLeft - a.width + 54,
        b = b.y + 26,
        z.Bl(this.c, a, b))
    }
    ;
    z.u(Mw, z.T);
    z.e = Mw.prototype;
    z.e.r = function() {
        this.c = z.xo(gp, this.t())
    }
    ;
    z.e.Rk = function() {
        this.we && this.we.q();
        this.we = null;
        this.p().Fa(this.jd)
    }
    ;
    z.e.h = function() {
        z.F.off(null, null, this);
        this.Rk();
        this.W = this.we = null;
        Mw.b.h.call(this)
    }
    ;
    z.e.m = function() {
        Mw.b.m.call(this);
        this.p().e(this.c, "click", this.ir);
        Ow(this)
    }
    ;
    z.e.t = function() {
        var a = this.wi;
        return {
            j: {
                aU: a.get(a.g.AL)
            }
        }
    }
    ;
    z.e.ir = function() {
        this.we ? this.we.La ? (this.Rk(),
        Nw(this)) : this.Rk() : Nw(this)
    }
    ;
    z.e.yR = function(a) {
        if (!a.mi && (a.preventDefault(),
        this.Rk(),
        "edit" !== a.value)) {
            var b = this.W.get(this.W.k.qc);
            this.dispatchEvent({
                type: "action_clicked",
                key: a.value,
                n: this.W,
                s: b
            })
        }
    }
    ;
    z.e.Jw = function() {
        this.we && !this.we.La && (this.Rk(),
        Nw(this))
    }
    ;
    z.u(Pw, z.T);
    var MH = {
        sk: "fyre-comment-voted"
    };
    z.e = Pw.prototype;
    z.e.K = function(a) {
        Pw.b.K.call(this, a);
        z.to(a, this.cm, this.t())
    }
    ;
    z.e.m = function() {
        Pw.b.m.call(this);
        z.Mh(z.F, z.F.k.X, this.Rc, this);
        var a = this.$j;
        a.on(a.Ga.tt, this.bw, this).on(a.Ga.Ag, this.cw, this).on(a.Ga.Wt, this.dw, this);
        this.Rc()
    }
    ;
    z.e.S = function() {
        z.F.off(null, null, this);
        this.$j.off(null, null, this);
        Pw.b.S.call(this)
    }
    ;
    z.e.bw = function(a) {
        this.Ei += 1 === a.get(z.An.Vf) ? 1 : 0;
        Qw(this);
        this.En()
    }
    ;
    z.e.cw = function(a) {
        if (0 !== a.get(z.An.Vf) && (a = a.kq()[z.An.Vf],
        null != a))
            return this.Ei += 1 === a ? 1 : -1,
            Qw(this),
            this.En(),
            a
    }
    ;
    z.e.dw = function(a) {
        this.Ei += 1 === a.get(z.An.Vf) ? -1 : 0;
        Qw(this);
        this.En()
    }
    ;
    z.e.En = function() {
        this.dispatchEvent({
            Nw: this.GF,
            total: this.$j.jb.length,
            type: "helpfulness",
            h2: this.Ei
        });
        Rw(this)
    }
    ;
    z.e.Rc = function() {
        this.TH(z.on(this.l, z.F));
        Rw(this)
    }
    ;
    Eo("reviews", function() {
        return (0,
        z.Q)("")
    });
    z.u(Xw, Pw);
    var NH = {
        qc: "fyre-review-author",
        xJ: "fyre-vote-button-container",
        Tz: "fyre-comment-downvote-btn",
        Kt: "fyre-vote-label",
        PM: "fyre-comment-upvote-btn",
        d1: "fyre-comment-vote-imgs"
    };
    z.A(NH, MH);
    z.e = Xw.prototype;
    z.e.K = function(a) {
        Xw.b.K.call(this, a);
        this.DC = this.o(NH.xJ);
        this.CD = this.o(NH.Tz);
        this.je = this.o(NH.Kt);
        this.OI = this.o(NH.PM);
        this.Wd && z.Ap(this.Wd, this.DC)
    }
    ;
    z.e.m = function() {
        Xw.b.m.call(this);
        var a = this.p();
        a.e(this.CD, "click", this.AF);
        a.e(this.OI, "click", this.AF);
        this.Vn && (Zw(this),
        $w(this, !0))
    }
    ;
    z.e.qn = function() {
        var a = [];
        this.$j.forEach(function(b) {
            1 === b.get(z.An.Vf) && a.push(b.get(z.An.qc))
        });
        return a
    }
    ;
    z.e.t = function() {
        var a = this.Vn ? z.V.get(z.V.g.St) : z.V.get(z.V.g.iu);
        return {
            j: {
                DO: z.V.get(z.V.g.pB),
                label: a,
                BS: z.V.get(z.V.g.DA),
                jX: z.V.get(z.V.g.oB)
            }
        }
    }
    ;
    z.e.bw = function(a) {
        Xw.b.bw.call(this, a);
        $w(this, !0)
    }
    ;
    z.e.cw = function(a) {
        (a = Xw.b.cw.call(this, a)) && $w(this, 1 === a)
    }
    ;
    z.e.dw = function(a) {
        Xw.b.dw.call(this, a);
        $w(this, !1)
    }
    ;
    z.e.En = function() {
        Xw.b.En.call(this);
        this.Wd && Su(this.Wd, this.qn())
    }
    ;
    z.e.AF = function(a) {
        var b = z.jk(a.target, NH.sk);
        a = z.jk(a.target, NH.Tz);
        var c = 0;
        b || (c = a ? 2 : 1);
        Sw(this, c)
    }
    ;
    z.e.TH = function(a) {
        this.Vn = a;
        Zw(this);
        $w(this, !0);
        z.N(this.DC, !a);
        kk(this.c, NH.qc, a)
    }
    ;
    z.e.zI = function(a, b) {
        kk(this.CD, NH.sk, a);
        kk(this.OI, NH.sk, b)
    }
    ;
    z.u(ax, z.T);
    var cx = {
        rt: "fyre-comment-actions",
        uh: "fyre-editor",
        te: "fyre-comment-like",
        Cg: "fyre-share-link"
    }
      , ex = {
        te: "like",
        Ap: "more",
        Bg: "reply",
        Cg: "share",
        Mp: "vote"
    }
      , OH = {};
    OH[ex.te] = z.Tu;
    OH[ex.Ap] = Mw;
    OH[ex.Bg] = z.Ou;
    OH[ex.Cg] = Fw;
    OH[ex.Mp] = Xw;
    z.e = ax.prototype;
    z.e.Fi = OH;
    z.e.NN = function(a) {
        switch (a) {
        case ex.te:
            gn(this.W) || (this.Se = new this.Fi[ex.te]({
                xa: this.W,
                Qa: this.bb.H.Qa,
                bs: z.Xm,
                aq: this.bb.u.fb()
            }),
            this.G(this.Se),
            a = z.Eh(cx.te, this.c),
            this.Se.U(a));
            break;
        case ex.Ap:
            dx(this);
            break;
        case ex.Bg:
            if (!gn(this.W)) {
                a = this.w.jc(z.U.zc);
                var b = this.w.jc(z.U.Pd);
                this.w.on(a, this.oF, this);
                this.w.on(b, this.oF, this);
                gx(this) && fx(this)
            }
            break;
        case ex.Cg:
            gn(this.W) || (this.UH = new this.Fi[ex.Cg]({
                className: "fyre-share-link",
                YN: {
                    type: "action_clicked",
                    key: "share",
                    n: this.W
                },
                vW: {
                    j: {
                        My: this.wi.get(this.wi.g.Cg)
                    }
                },
                tagName: "A",
                cm: mp
            }),
            this.G(this.UH),
            bx(this, this.UH));
            break;
        case ex.Mp:
            this.dp = new this.Fi[ex.Mp]({
                xa: this.W,
                Qa: this.bb.H.Qa,
                bs: z.Xm,
                aq: this.bb.u.fb()
            });
            this.G(this.dp);
            a = z.Eh(cx.te, this.c);
            this.dp.U(a);
            break;
        default:
            throw "invalid button type: " + a;
        }
    }
    ;
    z.e.h = function() {
        z.F.off(null, null, this);
        this.Se && this.Se.q();
        this.Se = null;
        this.Ua && this.Ua.q();
        this.Ua = null;
        this.dp && this.dp.q();
        this.dp = null;
        ax.b.h.call(this)
    }
    ;
    z.e.m = function() {
        ax.b.m.call(this);
        z.w(this.vk, this.NN, this);
        this.rG()
    }
    ;
    z.e.t = function() {
        return {
            dq: z.v.BI,
            kt: hn(this.W)
        }
    }
    ;
    z.e.oF = function() {
        gx(this) ? this.Ua || fx(this) : (this.Ua && this.Ua.q(),
        this.Ua = null)
    }
    ;
    z.e.Jw = function() {
        this.Qi && (this.Qi.La ? dx(this) : Ow(this.Qi))
    }
    ;
    z.e.rG = function() {
        if (hn(this.W)) {
            var a = this.o(cx.rt);
            z.to(a, np, this.t());
            z.Xf(z.v.CI)
        }
    }
    ;
    z.u(hx, Pw);
    var PH = {
        KJ: "fyre-vote-down",
        OM: "fyre-vote-up"
    };
    z.A(PH, MH);
    z.e = hx.prototype;
    z.e.h = function() {
        this.Bq();
        hx.b.h.call(this)
    }
    ;
    z.e.Bq = function() {
        this.M && (this.M.q(),
        this.removeChild(this.M),
        this.M = null)
    }
    ;
    z.e.m = function() {
        hx.b.m.call(this);
        this.p().e(this.c, "click", this.ib)
    }
    ;
    z.e.t = function() {
        var a = this.wi;
        return {
            j: {
                label: a.get(a.g.YB)
            }
        }
    }
    ;
    z.e.ib = function(a) {
        a.stopPropagation();
        this.Bq();
        z.jk(this.c, PH.sk) ? Sw(this, 0) : (this.M = new Kw({
            UF: "vote",
            n: this.l,
            Wo: this.wi
        }),
        this.G(this.M),
        this.M.ra(window.document.body),
        a = this.p(),
        a.e(this.M, "menu.selected", this.xR),
        a.e(this.M, "menu.close", this.Bq))
    }
    ;
    z.e.xR = function(a) {
        this.Bq();
        a.value && Sw(this, z.jk(this.c, PH.sk) ? 0 : a.value)
    }
    ;
    z.e.TH = function(a) {
        z.N(this.c, !a)
    }
    ;
    z.e.zI = function(a, b) {
        kk(this.c, PH.sk, a || b);
        kk(this.c, PH.KJ, a);
        kk(this.c, PH.OM, b)
    }
    ;
    z.u(ix, ax);
    var QH = ix.prototype
      , RH = z.eb(ax.prototype.Fi);
    RH.vote = hx;
    QH.Fi = RH;
    ix.prototype.rG = z.n;
    z.u(jx, z.Ou);
    jx.prototype.r = function() {
        this.c = z.xo(Ww, this.t())
    }
    ;
    jx.prototype.m = function() {
        jx.b.m.call(this);
        kx(this)
    }
    ;
    jx.prototype.Ub = function(a) {
        a.stopPropagation();
        lk(this.c, BH.st);
        this.dispatchEvent("reply_expand_clicked")
    }
    ;
    jx.prototype.MI = function(a) {
        a.get(z.O.hK) || (z.to(this.c.children[0], z.X.Ls, this.t()),
        kx(this))
    }
    ;
    z.u(z.lx, Uu);
    var ox = {
        bk: "fyre-comment-body",
        ff: "fyre-comment",
        CJ: "fyre-comment-date",
        se: "fyre-reviews-helpful",
        te: "fyre-comment-like",
        FL: "fyre-no-helpfulness",
        ab: "fyre-review-title",
        $B: "fyre-reviews-rating-wrapper"
    };
    z.A(ox, bt);
    z.lx.prototype.ea = z.O;
    z.lx.prototype.Iq = ["fyre-review-title"];
    z.hj(z.lx.prototype.Iq, Uu.prototype.Iq);
    z.e = z.lx.prototype;
    z.e.VT = ["reply", "vote", "more"];
    z.e.HW = ["vote", "reply", "share", "more"];
    z.e.dm = function(a) {
        var b = z.Q, c = (a.ie || a.Qa ? "" : Tw(a)) + '\x3cheader class\x3d"fyre-comment-head"\x3e', d;
        a.ie ? (d = a.$d || !a.title,
        d = "" + ((a.Qa ? "" : Tw(a)) + (a.Qa ? '\x3cdiv class\x3d"fyre-comment-highlight"\x3e\x3c/div\x3e' : "") + '\x3cdiv class\x3d"fyre-user-data"\x3e\x3cdiv\x3e\x3cspan itemprop\x3d"author"\x3e\x3ca class\x3d"fyre-comment-username"' + (a.s.Ba ? 'href\x3d"' + z.R(z.S(a.s.Ba)) + '" target\x3d"_blank"' : "") + "\x3e" + z.P(a.s.da) + "\x3c/a\x3e\x3c/span\x3e" + z.Jo(z.jp(a)) + z.Jo(kp(a)) + z.Jo(z.lp(a)) + '\x3cmeta itemprop\x3d"datePublished" content\x3d"' + z.R(a.vq) + '" /\x3e\x3ctime class\x3d"fyre-comment-date"\x3e\x3c/time\x3e\x3cdiv class\x3d"fyre-comment-premod"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"fyre-reviews-rating-wrapper"\x3e\x3c/div\x3e\x3cspan class\x3d"fyre-reviews-helpful"\x3e' + z.P(a.Ow) + '\x3c/span\x3e\x3c/div\x3e\x3cspan class\x3d"fyre-comment-user-rating"\x3e\x3c/span\x3e\x3cdiv class\x3d"' + (d ? "fyre-no-title" : "") + '"\x3e' + (d ? "" : '\x3ch3 class\x3d"fyre-review-title" itemprop\x3d"name"\x3e' + z.P(a.title) + "\x3c/h3\x3e") + "\x3c/div\x3e")) : (d = a.$d || !a.title,
        d = "" + ('\x3cdiv class\x3d"' + (d ? "fyre-no-title" : "") + '"\x3e\x3cmeta itemprop\x3d"datePublished" content\x3d"' + z.R(a.vq) + '" /\x3e\x3ctime class\x3d"fyre-comment-date"\x3e\x3c/time\x3e\x3cdiv class\x3d"fyre-comment-premod"\x3e\x3c/div\x3e' + (a.Qa ? '\x3cdiv class\x3d"fyre-comment-highlight"\x3e\x3c/div\x3e' : "") + (d ? "" : '\x3ch3 class\x3d"fyre-review-title" itemprop\x3d"name"\x3e\x26quot;' + z.P(a.title) + "\x26quot;\x3c/h3\x3e") + "\x3c/div\x3e" + (a.iG ? "" : '\x3cdiv itemprop\x3d"reviewRating" itemscope itemtype\x3d"http://schema.org/Rating"\x3e\x3cdiv class\x3d"fyre-reviews-rating-wrapper"\x3e\x3c/div\x3e\x3cspan class\x3d"fyre-reviews-helpful"\x3e' + z.P(a.Ow) + "\x3c/span\x3e\x3c/div\x3e") + '\x3cspan itemprop\x3d"author"\x3e\x3ca class\x3d"fyre-comment-username"' + (a.s.Ba ? 'href\x3d"' + z.R(z.S(a.s.Ba)) + '" target\x3d"_blank"' : "") + "\x3e" + z.P(a.s.da) + '\x3c/a\x3e\x3c/span\x3e\x3cspan class\x3d"fyre-comment-user-rating"\x3e\x3c/span\x3e' + z.Jo(z.jp(a)) + z.Jo(z.lp(a)) + "\x3cbr\x3e" + z.Jo(kp(a)) + (a.iG ? '\x3cspan class\x3d"fyre-reviews-helpful"\x3e' + z.P(a.Ow) + "\x3c/span\x3e" : "")));
        d = (0,
        z.Q)(d);
        return b(c + d + '\x3c/header\x3e\x3csection class\x3d"fyre-comment-body" itemprop\x3d"reviewBody"\x3e' + (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment"\x3e\x3c/div\x3e') + '\x3c/section\x3e\x3cfooter class\x3d"fyre-comment-footer"\x3e' + (a.ie ? (0,
        z.Q)('\x3cdiv class\x3d"fyre-comment-actions"\x3e\x3c/div\x3e\x3cspan class\x3d"fyre-comment-like"\x3e\x3c/span\x3e') : z.Jo(fp())) + "\x3c/footer\x3e")
    }
    ;
    z.e.Sp = function() {
        this.nj && this.nj.q();
        var a = this.HW
          , b = ax;
        this.hg && (a = this.VT,
        b = ix);
        this.nj = new b({
            Pi: a,
            d: this.d,
            v: this.w,
            n: this.n
        });
        this.G(this.nj)
    }
    ;
    z.e.FC = z.n;
    z.e.wq = function() {
        this.nj.U(this.ln)
    }
    ;
    z.e.K = function(a) {
        z.lx.b.K.call(this, a);
        this.FF = this.o(ox.se);
        this.Wa = this.o(ox.ab);
        nx(this);
        px(this, this.n.get(z.O.se))
    }
    ;
    z.e.h = function() {
        z.lx.b.h.call(this);
        this.nj.q();
        this.nj = null
    }
    ;
    z.e.m = function() {
        z.lx.b.m.call(this);
        z.Qf && (this.HV = new jx(this.n),
        this.G(this.HV, !0));
        var a = this.p();
        a.e(this, "action_clicked", this.XP);
        a.e(this, "helpfulness", this.aR);
        a.e(this, "edit_clicked", this.gw);
        a.e(this, "replyCommentClicked", this.nF)
    }
    ;
    z.e.oE = function() {
        var a = z.F.eb()
          , b = this.n
          , c = Dn(b.get(z.O.Jc));
        b.set(z.O.bk, c.body);
        b.set(z.O.pk, c.vg);
        return {
            ia: (0,
            z.q)(this.TC, this),
            Gk: this.n.id,
            content: this.n.get(this.ea.bk),
            L: this.d,
            LF: !z.on(this.n) && a,
            li: "edit",
            Bb: this.n.get(this.ea.wb),
            tH: this.n.get(this.ea.Uf),
            vg: this.n.get(this.ea.pk),
            title: this.n.get(this.ea.ab)
        }
    }
    ;
    z.e.t = function() {
        var a = z.lx.b.t.call(this);
        a.vq = vn(this.n);
        a.$d = this.d.H.$d;
        a.Ow = mx(this);
        a.ie = z.Qf;
        a.iG = !z.nn(this.n);
        a.title = this.n.get(z.O.ab);
        a.bG = this.n.Yh();
        return a
    }
    ;
    z.e.XP = function(a) {
        "edit" === a.key && (a.stopPropagation(),
        this.gw(a))
    }
    ;
    z.e.fl = function(a, b) {
        switch (b) {
        case this.ea.ab:
            this.Wa.innerHTML = a;
            break;
        case this.ea.wb:
            nx(this)
        }
        z.lx.b.fl.call(this, a, b)
    }
    ;
    z.e.$v = function(a) {
        a.preventDefault();
        this.dispatchEvent({
            type: "author_click",
            s: this.s
        })
    }
    ;
    z.e.aR = function(a) {
        a.stopPropagation();
        this.FF && px(this, a.Nw)
    }
    ;
    z.e.gl = function() {
        if (this.aa) {
            if (this.n.Vg(this.ea.Kb)) {
                var a = this.n.Kb
                  , b = this.n.get(this.ea.Kb);
                Vs(this, b === a.qp)
            }
            a = this.n.kq();
            z.y(a, this.fl, this)
        }
    }
    ;
    z.e.tr = z.l(67);
    z.e.qG = z.n;
    z.e.wx = function() {
        z.lx.b.wx.call(this, "reviews")
    }
    ;
    z.e.Ny = function() {
        return !0
    }
    ;
    z.e.XH = function() {
        var a = this.n.get(this.n.k.Zb)
          , a = Xr(a);
        return !!this.nj.Ua || a
    }
    ;
    z.e.xz = z.n;
    z.u(qx, Jv);
    qx.prototype.Wp = function(a, b, c) {
        var d = this.Ea()
          , f = Cn(a.l)
          , f = f && -1 < b && d.children.length > b;
        this.G(a, f ? !1 : c);
        f && z.Ap(a, d.children[b]);
        this.Jd.push(a);
        b = z.pa(this.im, a);
        this.p().e(a, "threadVisChanged", b);
        this.im(a)
    }
    ;
    qx.prototype.Kx = function() {
        z.Qf || qx.b.Kx.call(this)
    }
    ;
    qx.prototype.ne = function() {
        qx.b.ne.call(this);
        this.p().e(this, "reply_expand_clicked", this.pz)
    }
    ;
    qx.prototype.Is = function() {
        var a = this.o("fyre-outer-comment-container");
        z.N(this.Be, !1);
        z.N(this.Og, !1);
        z.nn(this.l) ? z.N(a, !1) : (this.Be.innerHTML = this.Vo.pD({
            j: {
                UC: z.V.get(z.V.g.OB)
            }
        }),
        this.Ys())
    }
    ;
    z.u(rx, z.hw);
    var SH = {
        gf: "fyre-stream-content",
        Bh: "fyre-stream-more"
    };
    z.e = rx.prototype;
    z.e.Nu = function(a, b) {
        var c = b.get(this.ea.qd)
          , d = 1E3 * b.get(this.ea.bd)
          , f = this.ql < d
          , d = (new Date).getTime() <= d + 4E3;
        if (c === z.F.id && f && d)
            return 0;
        c = a.ec();
        f = Cn(b) ? this.FV : this.lO;
        f = z.lh(c, z.pa(f, b), this);
        return 0 > f ? c.length : f
    }
    ;
    z.e.lO = function(a, b) {
        var c = Cp(b.Q());
        return 0 > z.Bw(this.fI, this.dI, this.hd, a.attributes, c.attributes)
    }
    ;
    z.e.wE = function() {
        return 1
    }
    ;
    z.e.Kr = function() {
        this.Yo = qx;
        this.jy = xv
    }
    ;
    z.e.FV = function(a, b) {
        var c = Cp(b.Q());
        return 0 > z.Bw(this.fI, z.O.Jp, "descending", a.attributes, c.attributes)
    }
    ;
    z.e.Rm = function(a, b) {
        this.hd = b;
        this.dI = a
    }
    ;
    z.e.K = function(a) {
        rx.b.K.call(this, a);
        z.to(this.c, z.Av, this.t());
        this.Uj = this.o(SH.gf);
        this.Ha && (this.si = this.o(SH.Bh),
        this.Ha.U(this.si),
        z.N(this.si, !1));
        z.Ap(this.Fb, this.Uj);
        this.Fb.xc(this);
        this.Fb.yb()
    }
    ;
    z.e.m = function() {
        rx.b.m.call(this);
        var a = this.p();
        this.Ha && a.e(this.Ha, "showMore", this.Ew);
        a.e(this.Fb, "showNextClicked", this.sF);
        a.e(this, "repliesExpanded", this.mF)
    }
    ;
    z.e.t = function() {
        var a = {};
        a.Sd = z.v.J.qb;
        a.ev = this.Ha ? !0 : !1;
        a.j = {
            Qy: z.V.get(z.V.g.Bh)
        };
        return a
    }
    ;
    z.e.mw = function(a) {
        a = Cp(a.Q());
        var b = z.O.HA
          , c = 0 !== a.get(z.O.Kb)
          , d = 0 !== a.get(b)
          , b = a.get(b) && d;
        c && !b ? mw(this.Fb, a.id) : !c && b && ow(this.Fb, a.id)
    }
    ;
    z.e.II = function(a, b) {
        var c = a.get(z.O.fp)
          , d = !!b;
        if (!z.nn(a) && !d) {
            var f = this.rb[c]
              , f = (d = !!f) ? Cp(f.Q()) : null;
            if (!d || aw(this, c))
                if (cw(this, a),
                !d || !f.get(z.O.HK))
                    return !0
        }
        return !1
    }
    ;
    z.e.zw = function(a, b) {
        var c = Cp((this.rb[b] || this.di(b)).Q())
          , d = this.L.u.fb();
        Bn(c, d, a)
    }
    ;
    z.e.di = function(a) {
        var b = this.L.u.v()
          , c = new z.yn;
        c.set(z.O.X, a);
        c.set(z.O.Kb, c.Kb.NONE);
        c.set(z.O.Nd, b);
        b = new this.Yo(this.L,c);
        this.rb[a] = new Wv(a,b);
        return this.rb[a]
    }
    ;
    z.e.Cx = function(a, b) {
        0 === a.get(z.O.rm) && a.wg(z.O.rm);
        rx.b.Cx.call(this, a, b)
    }
    ;
    z.e.Oy = function(a) {
        var b = 2 === a.get(z.O.Kp)
          , c = 4 === a.get(z.O.Kp)
          , d = this.ql > a.get(z.O.bd)
          , f = a.get(z.O.qd) === z.F.id;
        return (b || c) && !d && !f && z.nn(a)
    }
    ;
    z.e.Qj = function(a, b, c) {
        var d = a.Q();
        if (d.f()) {
            var f = d.l
              , g = f.get(z.O.qd) === z.F.id
              , h = a.getParent().Cc();
            g && h < this.vL ? (d.show(c),
            fw(this, f),
            this.L.O("message_displayed", f.id)) : this.Oy(f) ? this.mw(a) : rx.b.Qj.call(this, a, b, c)
        }
    }
    ;
    z.e.By = function() {
        var a = z.V.get(z.V.g.mB);
        this.Zf.XC = a
    }
    ;
    z.u(ux, rx);
    vx.prototype.cl = function(a, b) {
        return new this.zt[a](b)
    }
    ;
    vx.prototype.zt = {};
    z.u(wx, vx);
    z.ca(wx);
    var TH = {};
    TH[1] = rw;
    TH[3] = yw;
    TH[4] = zw;
    TH[5] = sw;
    wx.prototype.zt = TH;
    z.u(xx, vx);
    z.ca(xx);
    var UH = {};
    UH[2] = rx;
    UH[5] = ux;
    xx.prototype.zt = UH;
    z.u(z.yx, z.D);
    new z.zd(z.$a({
        om: 1,
        kB: 2,
        QB: 3,
        EA: 4,
        J0: 5
    }));
    z.yx.prototype.cl = function(a) {
        return this.oh[a] && this.oh[a][Hx]
    }
    ;
    z.yx.prototype.h = function() {
        z.yx.b.h.call(this);
        this.oh = {};
        this.d = null
    }
    ;
    var Dx = "callbackDispose"
      , Ex = "callbackInit"
      , Ax = "domElement"
      , Bx = "parentComponent"
      , Cx = "type"
      , Hx = "view"
      , Mx = {
        mY: Dx,
        nY: Ex,
        LY: Ax,
        B_: Bx,
        ua: Cx,
        b1: Hx
    }
      , VH = {};
    VH[Dx] = z.n;
    VH[Ex] = z.n;
    VH[Ax] = null;
    VH[Bx] = null;
    VH[Cx] = 0;
    VH[Hx] = null;
    Fx.prototype.sc = VH;
    z.u(Nx, z.T);
    z.e = Nx.prototype;
    z.e.K = function(a) {
        var b = a.getElementsByTagName("select")[0];
        if (!b)
            throw Error("Can not decorate " + a + ", with Ratings. Must contain select box");
        for (var c = this.If.length = 0, d = b.options.length; c < d; c++)
            this.If.push(b.options[c].text);
        this.Vc(b.selectedIndex);
        b.style.display = "none";
        this.Km = b;
        this.r();
        a.insertBefore(this.f(), b)
    }
    ;
    z.e.m = function() {
        var a = this.f();
        a.tabIndex = 0;
        Tp(a, this.P());
        Mp(a, "slider");
        Np(a, "valuemin", 0);
        Np(a, "valuemax", this.If.length - 1);
        var b = this.p();
        b.e(a, "keydown", this.EU);
        for (var c = 0; c < this.If.length; c++) {
            var d = this.R().r("span", {
                title: this.If[c],
                "class": Px(this, c, !1),
                index: c
            });
            this.bm.push(d);
            a.appendChild(d)
        }
        b.e(a, "click", this.rU);
        b.e(a, "mouseout", this.FU);
        b.e(a, "mouseover", this.GU);
        this.Vh(this.pi)
    }
    ;
    z.e.S = function() {
        Nx.b.S.call(this);
        for (var a = 0; a < this.bm.length; a++)
            this.R().removeNode(this.bm[a]);
        this.bm.length = 0
    }
    ;
    z.e.h = function() {
        Nx.b.h.call(this);
        this.If.length = 0
    }
    ;
    z.e.P = function() {
        return "goog-ratings"
    }
    ;
    z.e.Vc = function(a) {
        a = Math.max(-1, Math.min(a, this.If.length - 1));
        a != this.pi && (this.pi = a,
        this.Vh(this.pi),
        this.Km && ("SELECT" == this.Km.tagName ? this.Km.selectedIndex = a : this.Km.value = this.Q(),
        Np(this.f(), "valuenow", this.If[a])),
        this.dispatchEvent("change"))
    }
    ;
    z.e.wf = function() {
        return this.pi
    }
    ;
    z.e.Q = function() {
        return -1 == this.pi ? null : this.If[this.pi]
    }
    ;
    z.e.gc = function(a) {
        (this.cx = a) || Ox(this)
    }
    ;
    z.e.isEnabled = function() {
        return this.cx
    }
    ;
    z.e.GU = function(a) {
        this.isEnabled() && z.ba(a.target.index) && (a = a.target.index,
        this.Na != a && (this.Vh(a),
        this.Na = a,
        this.dispatchEvent("highlightchange"),
        this.dispatchEvent("highlight")))
    }
    ;
    z.e.FU = function(a) {
        a.relatedTarget && !z.ba(a.relatedTarget.index) && Ox(this)
    }
    ;
    z.e.rU = function(a) {
        this.isEnabled() && z.ba(a.target.index) && this.Vc(a.target.index)
    }
    ;
    z.e.EU = function(a) {
        if (this.isEnabled())
            switch (a.keyCode) {
            case 27:
                this.Vc(-1);
                break;
            case 36:
                this.Vc(0);
                break;
            case 35:
                this.Vc(this.If.length);
                break;
            case 37:
                this.Vc(this.wf() - 1);
                break;
            case 39:
                this.Vc(this.wf() + 1);
                break;
            default:
                a = (0,
                window.parseInt)(String.fromCharCode(a.keyCode), 10),
                (0,
                window.isNaN)(a) || this.Vc(a - 1)
            }
    }
    ;
    z.e.Vh = function(a) {
        for (var b = 0, c; c = this.bm[b]; b++)
            c.className = Px(this, b, b <= a)
    }
    ;
    z.u(Qx, Nx);
    Qx.prototype.Vh = function(a) {
        z.w(this.bm, function(b, c) {
            var d = Px(this, c, c <= a).split(" ")
              , f = z.Oa(ck(b), function(a) {
                return !z.ua(a, "goog-ratings")
            });
            z.hj(d, f);
            gj(d);
            b.className = d.join(" ")
        }, this)
    }
    ;
    var WH = {
        gK: "fyre-rating-half-even",
        zA: "fyre-rating-half",
        IL: "fyre-rating-half-odd",
        Cm: "goog-ratings"
    };
    Rx.prototype.q = function() {
        this.Cb.q();
        this.Cb = null
    }
    ;
    Rx.prototype.dispose = Rx.prototype.q;
    Rx.prototype.Ov = function() {
        var a = this.Cb.wf()
          , a = 0 > a ? -1 : a + 1;
        return -1 === a ? {
            "default": a
        } : {
            "default": Math.ceil(100 / (this.Aj * (this.Yv ? 2 : 1)) * a)
        }
    }
    ;
    Rx.prototype.getRating = Rx.prototype.Ov;
    Rx.prototype.t = function() {
        return {
            j: {
                sH: z.V.get(z.V.g.Vt)
            }
        }
    }
    ;
    Rx.prototype.reset = function() {
        this.Cb.Vc(-1)
    }
    ;
    Rx.prototype.Ry = function(a) {
        var b = this.t();
        b.Vb = this.Aj * (this.Yv ? 2 : 1);
        a.innerHTML = Ew(b);
        this.Cb.U(a);
        var c = -1;
        this.Sn && (c = b.Vb / 100 * this.Sn["default"] - 1);
        this.Cb.Vc(c);
        this.Yv && (z.dk(a, WH.zA),
        a = z.Eh(WH.Cm, a),
        z.w(a.children, function(a, b) {
            z.dk(a, 0 === (b + 1) % 2 ? WH.gK : WH.IL)
        }))
    }
    ;
    Rx.prototype.showRatingSelector = Rx.prototype.Ry;
    var XH = {
        zA: "fyre-rating-half",
        Mi: "fyre-editor-ratings-selected",
        nM: "fyre-editor-ratings-slider",
        M0: "goog-slider-thumb"
    };
    Sx.prototype.q = function() {
        Uk(this.c, ["mousedown", "touchstart"], this.pr, !1, this);
        Uk(this.Lj, "drag", this.JE, !1, this);
        this.Lj.q();
        this.Lj = null
    }
    ;
    Sx.prototype.dispose = Sx.prototype.q;
    Sx.prototype.Ov = function() {
        0 === this.Bo && (this.Bo = -1);
        return {
            "default": this.Bo
        }
    }
    ;
    Sx.prototype.getRating = Sx.prototype.Ov;
    Sx.prototype.t = function() {
        return {
            j: {
                sH: z.V.get(z.V.g.Vt)
            }
        }
    }
    ;
    Sx.prototype.JE = function(a) {
        a = Math.round(100 * (a.left - a.DD.zl.left) / (a.DD.zl.width + 10));
        Tx(this, a)
    }
    ;
    Sx.prototype.pr = function(a) {
        this.Lj.deltaX = a.offsetX;
        this.Lj.cz(a);
        Tx(this, a.offsetX / a.target.clientWidth * 100)
    }
    ;
    Sx.prototype.Ry = function(a) {
        var b = 31 * this.Aj;
        Kl(a, b);
        b = new tl(0,0,b - 10,0);
        this.c = a;
        this.KH = z.Eh(XH.Mi, a);
        this.oW = z.Eh(XH.nM, a);
        this.Lj = new bq(this.oW,null,b);
        this.Sn && (this.Bo = b = this.Sn["default"],
        Kl(this.KH, b + "%"));
        Jk(a, ["mousedown", "touchstart"], this.pr, !1, this);
        Jk(this.Lj, "drag", this.JE, !1, this)
    }
    ;
    Sx.prototype.showRatingSelector = Sx.prototype.Ry;
    var dE = {};
    z.u(cy, $k);
    z.e = cy.prototype;
    z.e.c = null;
    z.e.Sr = null;
    z.e.lx = null;
    z.e.Tr = null;
    z.e.ke = -1;
    z.e.$h = -1;
    z.e.tu = !1;
    var YH = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }
      , ZH = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }
      , $H = z.C || z.J && z.B("525")
      , aI = z.jg && z.H;
    z.e = cy.prototype;
    z.e.pw = function(a) {
        z.J && (17 == this.ke && !a.ctrlKey || 18 == this.ke && !a.altKey || z.jg && 91 == this.ke && !a.metaKey) && (this.$h = this.ke = -1);
        -1 == this.ke && (a.ctrlKey && 17 != a.keyCode ? this.ke = 17 : a.altKey && 18 != a.keyCode ? this.ke = 18 : a.metaKey && 91 != a.keyCode && (this.ke = 91));
        $H && !Yp(a.keyCode, this.ke, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.$h = $p(a.keyCode),
        aI && (this.tu = a.altKey))
    }
    ;
    z.e.jR = function(a) {
        this.$h = this.ke = -1;
        this.tu = a.altKey
    }
    ;
    z.e.handleEvent = function(a) {
        var b = a.Sb, c, d, f = b.altKey;
        z.C && "keypress" == a.type ? (c = this.$h,
        d = 13 != c && 27 != c ? b.keyCode : 0) : z.J && "keypress" == a.type ? (c = this.$h,
        d = 0 <= b.charCode && 63232 > b.charCode && Zp(c) ? b.charCode : 0) : z.G ? (c = this.$h,
        d = Zp(c) ? b.keyCode : 0) : (c = b.keyCode || this.$h,
        d = b.charCode || 0,
        aI && (f = this.tu),
        z.jg && 63 == d && 224 == c && (c = 191));
        var g = c = $p(c)
          , h = b.keyIdentifier;
        c ? 63232 <= c && c in YH ? g = YH[c] : 25 == c && a.shiftKey && (g = 9) : h && h in ZH && (g = ZH[h]);
        a = g == this.ke;
        this.ke = g;
        b = new dy(g,d,a,b);
        b.altKey = f;
        this.dispatchEvent(b)
    }
    ;
    z.e.f = function() {
        return this.c
    }
    ;
    z.e.Td = function(a, b) {
        this.Tr && this.detach();
        this.c = a;
        this.Sr = Jk(this.c, "keypress", this, b);
        this.lx = Jk(this.c, "keydown", this.pw, b, this);
        this.Tr = Jk(this.c, "keyup", this.jR, b, this)
    }
    ;
    z.e.detach = function() {
        this.Sr && (Vk(this.Sr),
        Vk(this.lx),
        Vk(this.Tr),
        this.Tr = this.lx = this.Sr = null);
        this.c = null;
        this.$h = this.ke = -1
    }
    ;
    z.e.h = function() {
        cy.b.h.call(this);
        this.detach()
    }
    ;
    z.u(dy, xk);
    var bI;
    z.ca(ey);
    var cI = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    z.e = ey.prototype;
    z.e.Lh = function() {}
    ;
    z.e.r = function(a) {
        var b = a.R().r("div", this.Mh(a).join(" "), a.mb());
        iy(this, a, b);
        return b
    }
    ;
    z.e.Ea = function(a) {
        return a
    }
    ;
    z.e.Tk = function(a, b, c) {
        if (a = a.f ? a.f() : a) {
            var d = [b];
            z.C && !z.B("7") && (d = ky(Rp(a), b),
            d.push(b));
            (c ? Up : Wp)(a, d)
        }
    }
    ;
    z.e.vd = function() {
        return !0
    }
    ;
    z.e.U = function(a, b) {
        b.id && zp(a, b.id);
        var c = this.Ea(b);
        c && c.firstChild ? a.Oj(c.firstChild.nextSibling ? z.Xa(c.childNodes) : c.firstChild) : a.Oj(null);
        var d = 0
          , f = this.P()
          , g = this.P()
          , h = !1
          , k = !1
          , m = !1
          , r = z.Xa(Rp(b));
        z.w(r, function(a) {
            h || a != f ? k || a != g ? d |= this.cr(a) : k = !0 : (h = !0,
            g == f && (k = !0));
            1 == this.cr(a) && Bh(c) && Ai(c, !1)
        }, this);
        a.F = d;
        h || (r.push(f),
        g == f && (k = !0));
        k || r.push(g);
        var x = a.uf;
        x && r.push.apply(r, x);
        if (z.C && !z.B("7")) {
            var t = ky(r);
            0 < t.length && (r.push.apply(r, t),
            m = !0)
        }
        if (!h || !k || x || m)
            b.className = r.join(" ");
        iy(this, a, b);
        return b
    }
    ;
    z.e.gg = function(a) {
        a.Pr() && this.lh(a.f(), !0);
        a.isEnabled() && this.Ye(a, a.ka())
    }
    ;
    z.e.Ul = function(a, b) {
        Sl(a, !b, !z.C && !z.G)
    }
    ;
    z.e.lh = function(a, b) {
        this.Tk(a, this.P() + "-rtl", b)
    }
    ;
    z.e.Cf = function(a) {
        var b;
        return jy(a, 32) && (b = a.Nb()) ? Bh(b) : !1
    }
    ;
    z.e.Ye = function(a, b) {
        var c;
        if (jy(a, 32) && (c = a.Nb())) {
            if (!b && a.F & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.F & 32 && a.Sh(null)
            }
            Bh(c) != b && Ai(c, b)
        }
    }
    ;
    z.e.V = function(a, b) {
        z.N(a, b);
        a && Np(a, "hidden", !b)
    }
    ;
    z.e.Hc = function(a, b, c) {
        var d = a.f();
        if (d) {
            var f = this.rn(b);
            f && this.Tk(a, f, c);
            this.Sf(d, b, c)
        }
    }
    ;
    z.e.Sf = function(a, b, c) {
        bI || (bI = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        b = bI[b];
        var d = a.getAttribute("role") || null;
        d && (d = cI[d] || b,
        b = "checked" == b || "selected" == b ? d : b);
        b && Np(a, b, c)
    }
    ;
    z.e.Oa = function(a, b) {
        var c = this.Ea(a);
        if (c && (z.Nc(c),
        b))
            if (z.p(b))
                Bi(c, b);
            else {
                var d = function(a) {
                    if (a) {
                        var b = z.Fc(c);
                        c.appendChild(z.p(a) ? b.createTextNode(a) : a)
                    }
                };
                z.ea(b) ? z.w(b, d) : !z.fa(b) || "nodeType"in b ? d(b) : z.w(z.Xa(b), d)
            }
    }
    ;
    z.e.Nb = function(a) {
        return a.f()
    }
    ;
    z.e.P = function() {
        return "goog-control"
    }
    ;
    z.e.Mh = function(a) {
        var b = this.P()
          , c = [b]
          , d = this.P();
        d != b && c.push(d);
        b = a.yf();
        for (d = []; b; ) {
            var f = b & -b;
            d.push(this.rn(f));
            b &= ~f
        }
        c.push.apply(c, d);
        (a = a.uf) && c.push.apply(c, a);
        z.C && !z.B("7") && c.push.apply(c, ky(c));
        return c
    }
    ;
    z.e.rn = function(a) {
        this.mq || ly(this);
        return this.mq[a]
    }
    ;
    z.e.cr = function(a) {
        this.jI || (this.mq || ly(this),
        this.jI = Si(this.mq));
        a = (0,
        window.parseInt)(this.jI[a], 10);
        return (0,
        window.isNaN)(a) ? 0 : a
    }
    ;
    z.u(my, ey);
    z.ca(my);
    z.e = my.prototype;
    z.e.Lh = function() {
        return "button"
    }
    ;
    z.e.Sf = function(a, b, c) {
        switch (b) {
        case 8:
        case 16:
            Np(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            my.b.Sf.call(this, a, b, c)
        }
    }
    ;
    z.e.r = function(a) {
        var b = my.b.r.call(this, a);
        this.Pj(b, a.xn());
        var c = a.Q();
        c && this.ob(b, c);
        jy(a, 16) && this.Sf(b, 16, !!(a.F & 16));
        return b
    }
    ;
    z.e.U = function(a, b) {
        b = my.b.U.call(this, a, b);
        var c = this.Q(b);
        a.rh = c;
        a.Pf = this.xn(b);
        jy(a, 16) && this.Sf(b, 16, !!(a.F & 16));
        return b
    }
    ;
    z.e.Q = z.n;
    z.e.ob = z.n;
    z.e.xn = function(a) {
        return a.title
    }
    ;
    z.e.Pj = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    }
    ;
    z.e.P = function() {
        return "goog-button"
    }
    ;
    var qy = {}
      , oy = {};
    z.u(py, z.T);
    z.e = py.prototype;
    z.e.qf = null;
    z.e.F = 0;
    z.e.To = 39;
    z.e.nf = 255;
    z.e.Sj = 0;
    z.e.pc = !0;
    z.e.uf = null;
    z.e.ww = !0;
    z.e.Yp = !1;
    z.e.po = null;
    z.e.Nb = function() {
        return this.ba.Nb(this)
    }
    ;
    z.e.vn = function() {
        return this.Re || (this.Re = new cy)
    }
    ;
    z.e.SH = function(a) {
        if (this.aa)
            throw Error("Component already rendered");
        this.f() && (this.c = null);
        this.ba = a
    }
    ;
    z.e.Vp = function(a) {
        a && (this.uf ? z.Sa(this.uf, a) || this.uf.push(a) : this.uf = [a],
        this.ba.Tk(this, a, !0))
    }
    ;
    z.e.Tk = function(a, b) {
        b ? this.Vp(a) : a && this.uf && z.Ta(this.uf, a) && (0 == this.uf.length && (this.uf = null),
        this.ba.Tk(this, a, !1))
    }
    ;
    z.e.r = function() {
        var a = this.ba.r(this);
        this.c = a;
        hy(this.ba, a, this.Ph());
        this.Yp || this.ba.Ul(a, !1);
        this.ka() || this.ba.V(a, !1)
    }
    ;
    z.e.Ph = function() {
        return this.po
    }
    ;
    z.e.Vs = function(a) {
        this.po = a
    }
    ;
    z.e.Ea = function() {
        return this.ba.Ea(this.f())
    }
    ;
    z.e.vd = function(a) {
        return this.ba.vd(a)
    }
    ;
    z.e.K = function(a) {
        this.c = a = this.ba.U(this, a);
        hy(this.ba, a, this.Ph());
        this.Yp || this.ba.Ul(a, !1);
        this.pc = "none" != a.style.display
    }
    ;
    z.e.m = function() {
        py.b.m.call(this);
        this.ba.gg(this);
        if (this.To & -2 && (this.ww && sy(this, !0),
        jy(this, 32))) {
            var a = this.Nb();
            if (a) {
                var b = this.vn();
                b.Td(a);
                this.p().e(b, "key", this.Af).e(a, "focus", this.Tg).e(a, "blur", this.Sh)
            }
        }
    }
    ;
    z.e.S = function() {
        py.b.S.call(this);
        this.Re && this.Re.detach();
        this.ka() && this.isEnabled() && this.ba.Ye(this, !1)
    }
    ;
    z.e.h = function() {
        py.b.h.call(this);
        this.Re && (this.Re.q(),
        delete this.Re);
        delete this.ba;
        this.uf = this.qf = null
    }
    ;
    z.e.mb = function() {
        return this.qf
    }
    ;
    z.e.Oa = function(a) {
        this.ba.Oa(this.f(), a);
        this.Oj(a)
    }
    ;
    z.e.Oj = function(a) {
        this.qf = a
    }
    ;
    z.e.vf = function() {
        var a = this.mb();
        if (!a)
            return "";
        a = z.p(a) ? a : z.ea(a) ? z.Pa(a, zi).join("") : z.Wc(a);
        return uj(a)
    }
    ;
    z.e.Ay = function(a) {
        this.Oa(a)
    }
    ;
    z.e.lh = function(a) {
        py.b.lh.call(this, a);
        var b = this.f();
        b && this.ba.lh(b, a)
    }
    ;
    z.e.Ul = function(a) {
        this.Yp = a;
        var b = this.f();
        b && this.ba.Ul(b, a)
    }
    ;
    z.e.ka = function() {
        return this.pc
    }
    ;
    z.e.V = function(a, b) {
        if (b || this.pc != a && this.dispatchEvent(a ? "show" : "hide")) {
            var c = this.f();
            c && this.ba.V(c, a);
            this.isEnabled() && this.ba.Ye(this, a);
            this.pc = a;
            return !0
        }
        return !1
    }
    ;
    z.e.isEnabled = function() {
        return !(this.F & 1)
    }
    ;
    z.e.gc = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !uy(this, 1, !a) || (a || (this.setActive(!1),
        this.Uc(!1)),
        this.ka() && this.ba.Ye(this, a),
        this.Hc(1, !a, !0))
    }
    ;
    z.e.Uc = function(a) {
        uy(this, 2, a) && this.Hc(2, a)
    }
    ;
    z.e.Bf = function() {
        return !!(this.F & 4)
    }
    ;
    z.e.setActive = function(a) {
        uy(this, 4, a) && this.Hc(4, a)
    }
    ;
    z.e.Hy = function(a) {
        uy(this, 8, a) && this.Hc(8, a)
    }
    ;
    z.e.Ey = function(a) {
        uy(this, 32, a) && this.Hc(32, a)
    }
    ;
    z.e.Ab = function() {
        return !!(this.F & 64)
    }
    ;
    z.e.Ib = function(a) {
        uy(this, 64, a) && this.Hc(64, a)
    }
    ;
    z.e.yf = function() {
        return this.F
    }
    ;
    z.e.Hc = function(a, b, c) {
        c || 1 != a ? jy(this, a) && b != !!(this.F & a) && (this.ba.Hc(this, a, b),
        this.F = b ? this.F | a : this.F & ~a) : this.gc(!b)
    }
    ;
    z.e.hc = function(a, b) {
        if (this.aa && this.F & a && !b)
            throw Error("Component already rendered");
        !b && this.F & a && this.Hc(a, !1);
        this.To = b ? this.To | a : this.To & ~a
    }
    ;
    z.e.Ne = function(a) {
        (!a.relatedTarget || !z.Vc(this.f(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && vy(this, 2) && this.Uc(!0)
    }
    ;
    z.e.xw = function(a) {
        a.relatedTarget && z.Vc(this.f(), a.relatedTarget) || !this.dispatchEvent("leave") || (vy(this, 4) && this.setActive(!1),
        vy(this, 2) && this.Uc(!1))
    }
    ;
    z.e.Fn = z.n;
    z.e.Ug = function(a) {
        this.isEnabled() && (vy(this, 2) && this.Uc(!0),
        yk(a) && (vy(this, 4) && this.setActive(!0),
        this.ba.Cf(this) && this.Nb().focus()));
        !this.Yp && yk(a) && a.preventDefault()
    }
    ;
    z.e.sj = function(a) {
        this.isEnabled() && (vy(this, 2) && this.Uc(!0),
        this.Bf() && this.Gf(a) && vy(this, 4) && this.setActive(!1))
    }
    ;
    z.e.FE = function(a) {
        this.isEnabled() && this.Gf(a)
    }
    ;
    z.e.Gf = function(a) {
        vy(this, 16) && ty(this, !(this.F & 16));
        vy(this, 8) && this.Hy(!0);
        vy(this, 64) && this.Ib(!this.Ab());
        var b = new uk("action",this);
        a && (b.altKey = a.altKey,
        b.ctrlKey = a.ctrlKey,
        b.metaKey = a.metaKey,
        b.shiftKey = a.shiftKey,
        b.Px = a.Px);
        return this.dispatchEvent(b)
    }
    ;
    z.e.Tg = function() {
        vy(this, 32) && this.Ey(!0)
    }
    ;
    z.e.Sh = function() {
        vy(this, 4) && this.setActive(!1);
        vy(this, 32) && this.Ey(!1)
    }
    ;
    z.e.Af = function(a) {
        return this.ka() && this.isEnabled() && this.Me(a) ? (a.preventDefault(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    z.e.Me = function(a) {
        return 13 == a.keyCode && this.Gf(a)
    }
    ;
    if (!z.ga(py))
        throw Error("Invalid component class " + py);
    if (!z.ga(ey))
        throw Error("Invalid renderer class " + ey);
    var dI = z.ja(py);
    qy[dI] = ey;
    ny("goog-control", function() {
        return new py(null)
    });
    z.u(wy, my);
    z.ca(wy);
    z.e = wy.prototype;
    z.e.Lh = function() {}
    ;
    z.e.r = function(a) {
        ry(a, !1);
        a.nf &= -256;
        a.hc(32, !1);
        return a.R().r("button", {
            "class": this.Mh(a).join(" "),
            disabled: !a.isEnabled(),
            title: a.xn() || "",
            value: a.Q() || ""
        }, a.vf() || "")
    }
    ;
    z.e.vd = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    }
    ;
    z.e.U = function(a, b) {
        ry(a, !1);
        a.nf &= -256;
        a.hc(32, !1);
        if (b.disabled) {
            var c = this.rn(1);
            Tp(b, c)
        }
        return wy.b.U.call(this, a, b)
    }
    ;
    z.e.gg = function(a) {
        a.p().e(a.f(), "click", a.Gf)
    }
    ;
    z.e.Ul = z.n;
    z.e.lh = z.n;
    z.e.Cf = function(a) {
        return a.isEnabled()
    }
    ;
    z.e.Ye = z.n;
    z.e.Hc = function(a, b, c) {
        wy.b.Hc.call(this, a, b, c);
        (a = a.f()) && 1 == b && (a.disabled = c)
    }
    ;
    z.e.Q = function(a) {
        return a.value
    }
    ;
    z.e.ob = function(a, b) {
        a && (a.value = b)
    }
    ;
    z.e.Sf = z.n;
    z.u(xy, py);
    z.e = xy.prototype;
    z.e.Q = function() {
        return this.rh
    }
    ;
    z.e.ob = function(a) {
        this.rh = a;
        this.ba.ob(this.f(), a)
    }
    ;
    z.e.xn = function() {
        return this.Pf
    }
    ;
    z.e.Pj = function(a) {
        this.Pf = a;
        this.ba.Pj(this.f(), a)
    }
    ;
    z.e.h = function() {
        xy.b.h.call(this);
        delete this.rh;
        delete this.Pf
    }
    ;
    z.e.m = function() {
        xy.b.m.call(this);
        if (jy(this, 32)) {
            var a = this.Nb();
            a && this.p().e(a, "keyup", this.Me)
        }
    }
    ;
    z.e.Me = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Gf(a) : 32 == a.keyCode
    }
    ;
    ny("goog-button", function() {
        return new xy(null)
    });
    z.u(yy, z.zs);
    z.ca(yy);
    z.e = yy.prototype;
    z.e.Jo = 100;
    z.e.Pw = 100;
    z.e.className = "fyre-editor-media-tooltip";
    z.e.Gl = function() {
        yy.b.Gl.call(this);
        var a = this.Eq
          , b = 0;
        a.clientHeight && (b = -a.clientHeight,
        a = -10 - (this.Eq.clientWidth - this.anchor.clientWidth) / 2,
        ys(this, b, void 0, void 0, a))
    }
    ;
    z.e.Oh = function() {
        var a = yy.b.Oh.call(this, 1);
        a.Fh = 0;
        return a
    }
    ;
    z.e.Td = function(a, b) {
        b = z.ga(b) ? b : z.n;
        a.ia = b;
        z.Qf ? (this.Xa.add(a),
        Jk(a, "click", this.Ub, !1, this)) : yy.b.Td.call(this, a)
    }
    ;
    z.e.detach = function(a) {
        yy.b.detach.call(this, a);
        Uk(a, "click", this.Ub, !1, this)
    }
    ;
    z.e.Ne = function(a) {
        Cs(this, a.target).ia();
        yy.b.Ne.call(this, a)
    }
    ;
    z.e.Ub = function(a) {
        a = Cs(this, a.target);
        this.Ac === a && this.$F ? (this.V(!1),
        this.$F = !1) : (a.ia(),
        this.$F = !0,
        this.anchor = this.Ac = a,
        this.Ax(a))
    }
    ;
    z.u(zy, z.T);
    z.e = zy.prototype;
    z.e.r = function() {
        var a = this.t();
        this.c = z.xo(Yx, a)
    }
    ;
    z.e.t = function() {
        var a = Oj
          , b = {};
        b.url = this.l.get(a.URL);
        b.type = this.l.get(a.ua);
        b.ie = z.Qf;
        b.fG = 0 === this.l.get(a.cu);
        b.Sd = z.v.J.qb;
        return b
    }
    ;
    z.e.m = function() {
        zy.b.m.call(this);
        this.Pf = yy.D();
        this.Pf.Td(this.f(), (0,
        z.q)(this.ZV, this));
        this.l.on("change:state", this.gS, this)
    }
    ;
    z.e.gS = function() {
        var a = Oj;
        1 === this.l.get(a.cu) && (this.o("fyre-img-thumb").src = this.l.get(a.URL),
        z.fk(this.f(), "fyre-media-loading"),
        z.Oc(this.o("fyre-media-spinner")))
    }
    ;
    z.e.S = function() {
        zy.b.S.call(this);
        this.l.off(null, null, this)
    }
    ;
    z.e.ZV = function() {
        this.Pf.kh(this);
        this.p().e(this.Pf, "action", this.sr)
    }
    ;
    z.e.sr = function(a) {
        z.A(a, {
            media: this.l,
            ia: (0,
            z.q)(this.q, this)
        })
    }
    ;
    z.e.h = function() {
        this.Pf.detach(this.f());
        this.Pf.V(!1);
        this.p().Fa(this.Pf, "action", this.sr);
        zy.b.h.call(this)
    }
    ;
    z.u(Ay, z.T);
    z.e = Ay.prototype;
    z.e.r = function() {
        this.c = z.xo(Wx)
    }
    ;
    z.e.m = function() {
        Ay.b.m.call(this);
        this.md.on(this.md.Ga.tt, this.yG, this);
        this.sI = this.o("fyre-editor-thumbnails");
        z.w(this.md.jb, function(a) {
            "LivefyreFilePicker" === a.get(a.k.rd) && this.yG(a)
        }, this)
    }
    ;
    z.e.yG = function(a) {
        a = new zy(a);
        this.G(a);
        a.ra(this.sI);
        this.p().Ed(a, "action", this.sr)
    }
    ;
    z.e.sr = function(a) {
        a.stopPropagation();
        this.md.remove(a.media);
        a.ia()
    }
    ;
    z.e.TV = function() {
        var a = this.f().offsetWidth - this.sI.offsetWidth;
        0 < a || (this.f().scrollLeft = -a)
    }
    ;
    z.e.h = function() {
        this.md.off(null, null, this);
        Ay.b.h.call(this)
    }
    ;
    z.u(By, z.T);
    z.e = By.prototype;
    z.e.r = function() {
        var a = z.xo(Xx);
        z.N(a, !1);
        this.c = a
    }
    ;
    z.e.m = function() {
        By.b.m.call(this);
        var a = this.md.Ga;
        this.md.on(a.Wt, this.rR, this);
        this.md.on(a.VL, this.sR, this);
        Cy(this) && (Dy(this),
        this.show())
    }
    ;
    z.e.rR = function() {
        Cy(this) || this.yb(!0)
    }
    ;
    z.e.sR = function() {
        this.yb(!0)
    }
    ;
    z.e.ou = function(a, b) {
        Dy(this);
        if (b) {
            var c = this.md.jb;
            z.w(a, function(b, f) {
                c[c.length - a.length + f].Cj(b)
            }, this)
        } else
            this.md.add(a);
        this.show()
    }
    ;
    z.e.show = function(a) {
        a = z.oh(a) || 500;
        z.Ql(this.f()) || (new z.fm(this.f(),a)).play();
        (0,
        window.setTimeout)((0,
        z.q)(this.mc.TV, this.mc), a + 1E3)
    }
    ;
    z.e.yb = function(a) {
        z.N(this.f(), !1);
        a && this.mc && (this.removeChild(this.mc),
        this.mc.q(),
        this.mc = null)
    }
    ;
    z.e.h = function() {
        By.b.h.call(this);
        this.md.off(null, null, this)
    }
    ;
    z.u(Ey, z.T);
    z.e = Ey.prototype;
    z.e.Zd = function(a) {
        this.Nc = a.Ik.apply(a, this.oj());
        this.Ka = a
    }
    ;
    z.e.h = function() {
        this.Nc && this.Nc.q();
        this.Sk = this.Z = this.Ka = this.Nc = null;
        Ey.b.h.call(this)
    }
    ;
    z.e.dc = function() {
        return this.Nc
    }
    ;
    z.e.isSupported = function() {
        return !0
    }
    ;
    z.e.uo = z.n;
    z.u(Fy, Ey);
    Fy.prototype.oj = function() {
        return ["cancel", this.C.j.dV, "fyre-cancel-button", "cancel comment"]
    }
    ;
    z.u(Gy, Ey);
    z.e = Gy.prototype;
    z.e.Zd = function(a) {
        Gy.b.Zd.call(this, a);
        this.C.vc && (this.C.vc.on("add", this.lw, this),
        this.C.vc.on("remove", this.lw, this),
        a = this.p(),
        a.e(this.Sk, "fyre.v2.editor.EVENTS.USER_CHANGE", this.Rc),
        a.e(this.dc(), "fyre.v2.editor.EVENTS.FOLLOW_CLICKED", this.kw),
        a.e(this.dc().f(), "keypress", function(a) {
            13 === a.keyCode && (a.preventDefault(),
            this.dispatchEvent({
                CC: this,
                type: "fyre.v2.editor.EVENTS.FOLLOW_CLICKED"
            }))
        }))
    }
    ;
    z.e.h = function() {
        this.C.vc.off(null, null, this);
        Gy.b.h.call(this)
    }
    ;
    z.e.oj = function() {
        var a = this.C.j;
        return ["follow", this.Ev ? a.GI : a.mj, "fyre-follow-button", "editor follow button"]
    }
    ;
    z.e.kw = function(a) {
        a.value = !this.Ev;
        this.qh.id && (this.bb.$b.send(z.Xn(a.value ? "FollowCollection" : "UnfollowCollection")),
        Hy(this, a.value))
    }
    ;
    z.e.lw = function() {
        Hy(this, !!this.C.vc.get(this.qh.id))
    }
    ;
    z.e.Rc = function(a) {
        this.qh = a.user;
        this.lw()
    }
    ;
    z.u(Iy, Ey);
    Iy.prototype.h = function() {
        this.Kj && this.Kj.q();
        this.Kj = null;
        Iy.b.h.call(this)
    }
    ;
    Ey.prototype.Fr = z.n;
    Iy.prototype.pU = function() {
        z.fk(this.Nc.f(), "fyre-button-left-open")
    }
    ;
    Iy.prototype.io = function(a) {
        a.V(!1)
    }
    ;
    z.u(My, z.D);
    My.prototype.restore = function(a) {
        var b = this.Os();
        a || this.q();
        return b
    }
    ;
    z.u(Ny, My);
    Ny.prototype.vo = function(a) {
        z.Oc(Oy(this, !0));
        z.Oc(Oy(this, !1));
        return a
    }
    ;
    Ny.prototype.Os = function() {
        var a = null
          , b = Oy(this, !this.ny)
          , c = Oy(this, this.ny);
        if (b && c) {
            var a = b.parentNode
              , b = z.Na(a.childNodes, b)
              , d = c.parentNode
              , c = z.Na(d.childNodes, c);
            d == a && (this.ny ? b-- : c--);
            a = vz(a, b, d, c);
            a = this.vo(a);
            a.select()
        } else
            this.vo();
        return a
    }
    ;
    Ny.prototype.h = function() {
        this.vo();
        this.va = null
    }
    ;
    z.u(Py, z.pd);
    z.e = Py.prototype;
    z.e.Y = null;
    z.e.Xb = 0;
    z.e.ez = !1;
    z.e.Ze = function(a, b, c) {
        if (this.Y = a)
            this.Xb = z.oh(b) ? b : 1 != this.Y.nodeType ? 0 : this.Gc ? -1 : 1;
        z.oh(c) && (this.depth = c)
    }
    ;
    z.e.Ng = function(a) {
        this.Y = a.Y;
        this.Xb = a.Xb;
        this.depth = a.depth;
        this.Gc = a.Gc;
        this.tq = a.tq
    }
    ;
    z.e.clone = function() {
        return new Py(this.Y,this.Gc,!this.tq,this.Xb,this.depth)
    }
    ;
    z.e.Wy = function() {
        var a = this.Gc ? -1 : 1;
        this.Xb == a && (this.Xb = -1 * a,
        this.depth += this.Xb * (this.Gc ? -1 : 1))
    }
    ;
    z.e.next = function() {
        var a;
        if (this.ez) {
            if (!this.Y || this.tq && 0 == this.depth)
                throw z.rd;
            a = this.Y;
            var b = this.Gc ? -1 : 1;
            if (this.Xb == b) {
                var c = this.Gc ? a.lastChild : a.firstChild;
                c ? this.Ze(c) : this.Ze(a, -1 * b)
            } else
                (c = this.Gc ? a.previousSibling : a.nextSibling) ? this.Ze(c) : this.Ze(a.parentNode, -1 * b);
            this.depth += this.Xb * (this.Gc ? -1 : 1)
        } else
            this.ez = !0;
        a = this.Y;
        if (!this.Y)
            throw z.rd;
        return a
    }
    ;
    z.e.Uk = function(a) {
        return a.Y == this.Y && (!this.Y || a.Xb == this.Xb)
    }
    ;
    z.e.splice = function(a) {
        var b = this.Y
          , c = this.Gc ? 1 : -1;
        this.Xb == c && (this.Xb = -1 * c,
        this.depth += this.Xb * (this.Gc ? -1 : 1));
        this.Gc = !this.Gc;
        Py.prototype.next.call(this);
        this.Gc = !this.Gc;
        for (var c = z.fa(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--)
            Li(c[d], b);
        z.Oc(b)
    }
    ;
    z.e = Qy.prototype;
    z.e.Ts = function() {
        return !1
    }
    ;
    z.e.bh = function() {
        return !1
    }
    ;
    z.e.la = function() {
        return z.Fc(z.C ? this.xd() : this.fa())
    }
    ;
    z.e.hb = function() {
        return Mi(this.la())
    }
    ;
    z.e.containsNode = function(a, b) {
        return this.Mg(Oz(a), b)
    }
    ;
    z.e.Js = function(a) {
        this.isCollapsed() || this.Kf();
        return this.insertNode(a, !0)
    }
    ;
    z.u(Zy, Py);
    z.u($y, Qy);
    $y.prototype.Mg = function(a, b) {
        var c = Sy(this)
          , d = Sy(a);
        return (b ? z.Qa : nh)(d, function(a) {
            return z.Qa(c, function(c) {
                return c.Mg(a, b)
            })
        })
    }
    ;
    $y.prototype.insertNode = function(a, b) {
        b ? Ph(a, this.fa()) : Li(a, this.Ja());
        return a
    }
    ;
    $y.prototype.Uo = function(a, b) {
        this.insertNode(a, !0);
        this.insertNode(b, !1)
    }
    ;
    z.u(az, Zy);
    z.e = az.prototype;
    z.e.sa = null;
    z.e.na = null;
    z.e.ya = 0;
    z.e.wa = 0;
    z.e.br = function() {
        return 3 != this.Y.nodeType ? -1 : this.Y == this.sa ? this.ya : 0
    }
    ;
    z.e.Vq = function() {
        return 3 != this.Y.nodeType ? -1 : this.Y == this.na ? this.wa : this.Y.nodeValue.length
    }
    ;
    z.e.fa = function() {
        return this.sa
    }
    ;
    z.e.Ja = function() {
        return this.na
    }
    ;
    z.e.Yn = function() {
        return this.ez && this.Y == this.na && (!this.wa || 1 != this.Xb)
    }
    ;
    z.e.next = function() {
        if (this.Yn())
            throw z.rd;
        return az.b.next.call(this)
    }
    ;
    z.e.Wy = function() {
        az.b.Wy.apply(this);
        if (z.Vc(this.Y, this.na))
            throw z.rd;
    }
    ;
    z.e.Ng = function(a) {
        this.sa = a.sa;
        this.na = a.na;
        this.ya = a.ya;
        this.wa = a.wa;
        this.Df = a.Df;
        az.b.Ng.call(this, a)
    }
    ;
    z.e.clone = function() {
        var a = new az(this.sa,this.ya,this.na,this.wa,this.Df);
        a.Ng(this);
        return a
    }
    ;
    bz.prototype.Mg = function(a, b) {
        var c = b && !a.isCollapsed()
          , d = a.N;
        try {
            return c ? 0 <= this.Ce(d, 0, 1) && 0 >= this.Ce(d, 1, 0) : 0 <= this.Ce(d, 0, 0) && 0 >= this.Ce(d, 1, 1)
        } catch (f) {
            if (!z.C)
                throw f;
            return !1
        }
    }
    ;
    bz.prototype.containsNode = function(a, b) {
        return this.Mg(lz(a), b)
    }
    ;
    bz.prototype.un = function() {
        var a = new Ao;
        z.sd(this, function(b, c, d) {
            3 == b.nodeType ? a.append(z.ya(b.nodeValue.substring(d.br(), d.Vq()))) : 1 == b.nodeType && (-1 == d.Xb ? z.Lc(b) && a.append("\x3c/" + b.tagName + "\x3e") : (c = b.cloneNode(!1),
            c = z.hi(c),
            z.C && "LI" == b.tagName ? a.append(c) : (b = c.lastIndexOf("\x3c"),
            a.append(b ? c.substr(0, b) : c))))
        }, this);
        return a.toString()
    }
    ;
    bz.prototype.Qd = function() {
        return new az(this.fa(),this.$a(),this.Ja(),this.Eb())
    }
    ;
    z.u(cz, bz);
    z.e = cz.prototype;
    z.e.clone = function() {
        return new this.constructor(this.N.cloneRange())
    }
    ;
    z.e.xd = function() {
        return this.N.commonAncestorContainer
    }
    ;
    z.e.fa = function() {
        return this.N.startContainer
    }
    ;
    z.e.$a = function() {
        return this.N.startOffset
    }
    ;
    z.e.Ja = function() {
        return this.N.endContainer
    }
    ;
    z.e.Eb = function() {
        return this.N.endOffset
    }
    ;
    z.e.Ce = function(a, b, c) {
        return this.N.compareBoundaryPoints(1 == c ? 1 == b ? z.s.Range.START_TO_START : z.s.Range.START_TO_END : 1 == b ? z.s.Range.END_TO_START : z.s.Range.END_TO_END, a)
    }
    ;
    z.e.isCollapsed = function() {
        return this.N.collapsed
    }
    ;
    z.e.cg = function() {
        var a = z.Dc(this.N.startContainer).r("div");
        a.appendChild(this.N.cloneContents());
        a = a.innerHTML;
        if (z.ua(a, "\x3c") || !this.isCollapsed() && !z.Ha(a, "\x3c"))
            return a;
        var b = this.xd()
          , b = 1 == b.nodeType ? b : b.parentNode;
        return z.hi(b.cloneNode(!1)).replace("\x3e", "\x3e" + a)
    }
    ;
    z.e.select = function(a) {
        var b = Mi(z.Fc(this.fa()));
        this.JH(b.getSelection(), a)
    }
    ;
    z.e.JH = function(a, b) {
        !b || this.isCollapsed() ? (a.removeAllRanges(),
        a.addRange(this.N)) : (a.collapse(this.Ja(), this.Eb()),
        a.extend(this.fa(), this.$a()))
    }
    ;
    z.e.Kf = function() {
        var a = this.N;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == zi(b) && z.Oc(b);
                c && "" == zi(c) && z.Oc(c)
            }
        }
        if (z.C) {
            var b = this.fa()
              , c = this.$a()
              , d = this.Ja()
              , f = this.Eb()
              , g = b.nextSibling;
            b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue,
            z.Oc(g),
            a.setStart(b, c),
            a.setEnd(d, f))
        }
    }
    ;
    z.e.surroundContents = function(a) {
        this.N.surroundContents(a);
        return a
    }
    ;
    z.e.insertNode = function(a, b) {
        var c = this.N.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    }
    ;
    z.e.Uo = function(a, b) {
        var c = Mi(z.Fc(this.fa()));
        if (c = Lz(c))
            var d = c.fa()
              , f = c.Ja()
              , g = c.$a()
              , h = c.Eb();
        var k = this.N.cloneRange()
          , m = this.N.cloneRange();
        k.collapse(!1);
        m.collapse(!0);
        k.insertNode(b);
        m.insertNode(a);
        k.detach();
        m.detach();
        if (c) {
            if (3 == d.nodeType)
                for (; g > d.length; ) {
                    g -= d.length;
                    do
                        d = d.nextSibling;
                    while (d == a || d == b)
                }
            if (3 == f.nodeType)
                for (; h > f.length; ) {
                    h -= f.length;
                    do
                        f = f.nextSibling;
                    while (f == a || f == b)
                }
            vz(d, g, f, h).select()
        }
    }
    ;
    z.e.collapse = function(a) {
        this.N.collapse(a)
    }
    ;
    z.u(gz, cz);
    z.u(hz, bz);
    z.e = hz.prototype;
    z.e.mg = null;
    z.e.sa = null;
    z.e.na = null;
    z.e.ya = -1;
    z.e.wa = -1;
    z.e.clone = function() {
        var a = new hz(this.N.duplicate(),this.Dq);
        a.mg = this.mg;
        a.sa = this.sa;
        a.na = this.na;
        return a
    }
    ;
    z.e.fd = function() {
        this.mg = this.sa = this.na = null;
        this.ya = this.wa = -1
    }
    ;
    z.e.xd = function() {
        if (!this.mg) {
            var a = this.N.text
              , b = this.N.duplicate()
              , c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd("character", -c);
            c = b.parentElement();
            b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
            if (this.isCollapsed() && 0 < b)
                return this.mg = c;
            for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length; )
                c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == nz(c.firstChild) && ez(c.firstChild); )
                c = c.firstChild;
            0 == a.length && (c = jz(this, c));
            this.mg = c
        }
        return this.mg
    }
    ;
    z.e.fa = function() {
        this.sa || (this.sa = kz(this, 1),
        this.isCollapsed() && (this.na = this.sa));
        return this.sa
    }
    ;
    z.e.$a = function() {
        0 > this.ya && (this.ya = mz(this, 1),
        this.isCollapsed() && (this.wa = this.ya));
        return this.ya
    }
    ;
    z.e.Ja = function() {
        if (this.isCollapsed())
            return this.fa();
        this.na || (this.na = kz(this, 0));
        return this.na
    }
    ;
    z.e.Eb = function() {
        if (this.isCollapsed())
            return this.$a();
        0 > this.wa && (this.wa = mz(this, 0),
        this.isCollapsed() && (this.ya = this.wa));
        return this.wa
    }
    ;
    z.e.Ce = function(a, b, c) {
        return this.N.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    }
    ;
    z.e.ul = function() {
        var a = this.Dq.body.createTextRange();
        a.moveToElementText(this.Dq.body);
        return this.Mg(new hz(a,this.Dq), !0)
    }
    ;
    z.e.isCollapsed = function() {
        return 0 == this.N.compareEndPoints("StartToEnd", this.N)
    }
    ;
    z.e.cg = function() {
        return this.N.htmlText
    }
    ;
    z.e.select = function() {
        this.N.select()
    }
    ;
    z.e.Kf = function() {
        if (!this.isCollapsed() && this.N.htmlText) {
            var a = this.fa()
              , b = this.Ja()
              , c = this.N.text
              , d = this.N.duplicate();
            d.moveStart("character", 1);
            d.moveStart("character", -1);
            d.text == c && (this.N = d);
            this.N.text = "";
            this.fd();
            c = this.fa();
            d = this.$a();
            try {
                var f = a.nextSibling;
                a == b && a.parentNode && 3 == a.nodeType && f && 3 == f.nodeType && (a.nodeValue += f.nodeValue,
                z.Oc(f),
                this.N = iz(c),
                this.N.move("character", d),
                this.fd())
            } catch (g) {}
        }
    }
    ;
    z.e.surroundContents = function(a) {
        z.Oc(a);
        a.innerHTML = this.N.htmlText;
        (a = oz(this.N, a)) && this.N.moveToElementText(a);
        this.fd();
        return a
    }
    ;
    z.e.insertNode = function(a, b) {
        var c = pz(this.N.duplicate(), a, b);
        this.fd();
        return c
    }
    ;
    z.e.Uo = function(a, b) {
        var c = this.N.duplicate()
          , d = this.N.duplicate();
        pz(c, a, !0);
        pz(d, b, !1);
        this.fd()
    }
    ;
    z.e.collapse = function(a) {
        this.N.collapse(a);
        a ? (this.na = this.sa,
        this.wa = this.ya) : (this.sa = this.na,
        this.ya = this.wa)
    }
    ;
    z.u(qz, cz);
    qz.prototype.JH = function(a) {
        a.collapse(this.fa(), this.$a());
        this.Ja() == this.fa() && this.Eb() == this.$a() || a.extend(this.Ja(), this.Eb());
        0 == a.rangeCount && a.addRange(this.N)
    }
    ;
    z.u(rz, cz);
    rz.prototype.Ce = function(a, b, c) {
        return z.B("528") ? rz.b.Ce.call(this, a, b, c) : this.N.compareBoundaryPoints(1 == c ? 1 == b ? z.s.Range.START_TO_START : z.s.Range.END_TO_START : 1 == b ? z.s.Range.START_TO_END : z.s.Range.END_TO_END, a)
    }
    ;
    z.u(tz, Qy);
    z.e = tz.prototype;
    z.e.Ig = null;
    z.e.sa = null;
    z.e.ya = null;
    z.e.na = null;
    z.e.wa = null;
    z.e.Df = !1;
    z.e.clone = function() {
        var a = new tz;
        a.Ig = this.Ig && this.Ig.clone();
        a.sa = this.sa;
        a.ya = this.ya;
        a.na = this.na;
        a.wa = this.wa;
        a.Df = this.Df;
        return a
    }
    ;
    z.e.yn = function() {
        return "text"
    }
    ;
    z.e.Je = function() {
        return xz(this).N
    }
    ;
    z.e.Ts = function(a) {
        if (a && a.addElement)
            return !1;
        this.Ig = sz(a);
        this.fd();
        return !0
    }
    ;
    z.e.fd = function() {
        this.sa = this.ya = this.na = this.wa = null
    }
    ;
    z.e.dl = function() {
        return 1
    }
    ;
    z.e.zf = function() {
        return this
    }
    ;
    z.e.xd = function() {
        return xz(this).xd()
    }
    ;
    z.e.fa = function() {
        return this.sa || (this.sa = xz(this).fa())
    }
    ;
    z.e.$a = function() {
        return null != this.ya ? this.ya : this.ya = xz(this).$a()
    }
    ;
    z.e.Ja = function() {
        return this.na || (this.na = xz(this).Ja())
    }
    ;
    z.e.Eb = function() {
        return null != this.wa ? this.wa : this.wa = xz(this).Eb()
    }
    ;
    z.e.bh = function() {
        return this.Df
    }
    ;
    z.e.Mg = function(a, b) {
        var c = a.yn();
        return "text" == c ? xz(this).Mg(xz(a), b) : "control" == c ? (c = a.qj(),
        (b ? z.Qa : nh)(c, function(a) {
            return this.containsNode(a, b)
        }, this)) : !1
    }
    ;
    z.e.ul = function() {
        return (!this.sa || yz(this.sa)) && (!this.na || yz(this.na)) && (!(z.C && !z.lb(9)) || xz(this).ul())
    }
    ;
    z.e.isCollapsed = function() {
        return xz(this).isCollapsed()
    }
    ;
    z.e.un = function() {
        return xz(this).un()
    }
    ;
    z.e.cg = function() {
        return xz(this).cg()
    }
    ;
    z.e.Nv = function() {
        var a = this.cg();
        if (a.match(/^\s*<td\b/i))
            a = "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e" + a + "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e";
        else if (a.match(/^\s*<tr\b/i))
            a = "\x3ctable\x3e\x3ctbody\x3e" + a + "\x3c/tbody\x3e\x3c/table\x3e";
        else if (a.match(/^\s*<tbody\b/i))
            a = "\x3ctable\x3e" + a + "\x3c/table\x3e";
        else if (a.match(/^\s*<li\b/i)) {
            for (var b = this.xd(), c = "UL"; b; ) {
                if ("OL" == b.tagName) {
                    c = "OL";
                    break
                } else if ("UL" == b.tagName)
                    break;
                b = b.parentNode
            }
            a = z.sj("\x3c", c, "\x3e", a, "\x3c/", c, "\x3e")
        }
        return a
    }
    ;
    z.e.Qd = function() {
        return new az(this.fa(),this.$a(),this.Ja(),this.Eb())
    }
    ;
    z.e.select = function() {
        xz(this).select(this.Df)
    }
    ;
    z.e.Kf = function() {
        xz(this).Kf();
        this.fd()
    }
    ;
    z.e.surroundContents = function(a) {
        a = xz(this).surroundContents(a);
        this.fd();
        return a
    }
    ;
    z.e.insertNode = function(a, b) {
        var c = xz(this).insertNode(a, b);
        this.fd();
        return c
    }
    ;
    z.e.Uo = function(a, b) {
        xz(this).Uo(a, b);
        this.fd()
    }
    ;
    z.e.qy = function() {
        return new zz(this)
    }
    ;
    z.e.collapse = function(a) {
        a = this.bh() ? !a : a;
        this.Ig && this.Ig.collapse(a);
        a ? (this.na = this.sa,
        this.wa = this.ya) : (this.sa = this.na,
        this.ya = this.wa);
        this.Df = !1
    }
    ;
    z.u(zz, My);
    zz.prototype.Os = function() {
        return vz(this.oC, this.tN, this.gE, this.zP)
    }
    ;
    zz.prototype.h = function() {
        zz.b.h.call(this);
        this.gE = this.oC = null
    }
    ;
    z.u(Az, $y);
    z.e = Az.prototype;
    z.e.N = null;
    z.e.Xa = null;
    z.e.No = null;
    z.e.fd = function() {
        this.No = this.Xa = null
    }
    ;
    z.e.clone = function() {
        return Cz.apply(this, this.qj())
    }
    ;
    z.e.yn = function() {
        return "control"
    }
    ;
    z.e.Je = function() {
        return this.N || window.document.body.createControlRange()
    }
    ;
    z.e.Ts = function(a) {
        if (!a || !a.addElement)
            return !1;
        this.N = a;
        return !0
    }
    ;
    z.e.dl = function() {
        return this.N ? this.N.length : 0
    }
    ;
    z.e.zf = function(a) {
        a = this.N.item(a);
        return uz(lz(a), void 0)
    }
    ;
    z.e.xd = function() {
        return Ci.apply(null, this.qj())
    }
    ;
    z.e.fa = function() {
        return Dz(this)[0]
    }
    ;
    z.e.$a = function() {
        return 0
    }
    ;
    z.e.Ja = function() {
        var a = Dz(this)
          , b = oj(a);
        return mh(a, function(a) {
            return z.Vc(a, b)
        })
    }
    ;
    z.e.Eb = function() {
        return this.Ja().childNodes.length
    }
    ;
    z.e.qj = function() {
        if (!this.Xa && (this.Xa = [],
        this.N))
            for (var a = 0; a < this.N.length; a++)
                this.Xa.push(this.N.item(a));
        return this.Xa
    }
    ;
    z.e.ul = function() {
        var a = !1;
        try {
            a = nh(this.qj(), function(a) {
                return z.C ? !!a.parentNode : z.Vc(a.ownerDocument.body, a)
            })
        } catch (b) {}
        return a
    }
    ;
    z.e.isCollapsed = function() {
        return !this.N || !this.N.length
    }
    ;
    z.e.un = function() {
        return z.Pa(Dz(this), z.hi).join("")
    }
    ;
    z.e.cg = function() {
        return this.un()
    }
    ;
    z.e.Nv = Az.prototype.cg;
    z.e.Qd = function() {
        return new Fz(this)
    }
    ;
    z.e.select = function() {
        this.N && this.N.select()
    }
    ;
    z.e.Kf = function() {
        if (this.N) {
            for (var a = [], b = 0, c = this.N.length; b < c; b++)
                a.push(this.N.item(b));
            z.w(a, z.Oc);
            this.collapse(!1)
        }
    }
    ;
    z.e.Js = function(a) {
        a = this.insertNode(a, !0);
        this.isCollapsed() || this.Kf();
        return a
    }
    ;
    z.e.qy = function() {
        return new Ez(this)
    }
    ;
    z.e.collapse = function() {
        this.N = null;
        this.fd()
    }
    ;
    z.u(Ez, My);
    Ez.prototype.Os = function() {
        for (var a = (this.Xa.length ? z.Fc(this.Xa[0]) : window.document).body.createControlRange(), b = 0, c = this.Xa.length; b < c; b++)
            a.addElement(this.Xa[b]);
        return Bz(a)
    }
    ;
    Ez.prototype.h = function() {
        Ez.b.h.call(this);
        delete this.Xa
    }
    ;
    z.u(Fz, Zy);
    z.e = Fz.prototype;
    z.e.sa = null;
    z.e.na = null;
    z.e.Xa = null;
    z.e.br = function() {
        return 0
    }
    ;
    z.e.Vq = function() {
        return 0
    }
    ;
    z.e.fa = function() {
        return this.sa
    }
    ;
    z.e.Ja = function() {
        return this.na
    }
    ;
    z.e.Yn = function() {
        return !this.depth && !this.Xa.length
    }
    ;
    z.e.next = function() {
        if (this.Yn())
            throw z.rd;
        if (!this.depth) {
            var a = this.Xa.shift();
            this.Ze(a, 1, 1);
            return a
        }
        return Fz.b.next.call(this)
    }
    ;
    z.e.Ng = function(a) {
        this.Xa = a.Xa;
        this.sa = a.sa;
        this.na = a.na;
        Fz.b.Ng.call(this, a)
    }
    ;
    z.e.clone = function() {
        var a = new Fz(null);
        a.Ng(this);
        return a
    }
    ;
    z.u(Gz, $y);
    z.e = Gz.prototype;
    z.e.Fd = null;
    z.e.fd = function() {
        this.Pl = [];
        this.De = this.am = null
    }
    ;
    z.e.clone = function() {
        var a = new Gz;
        a.Yf = z.Xa(this.Yf);
        return a
    }
    ;
    z.e.yn = function() {
        return "mutli"
    }
    ;
    z.e.Je = function() {
        return this.Yf[0]
    }
    ;
    z.e.Ts = function() {
        return !1
    }
    ;
    z.e.dl = function() {
        return this.Yf.length
    }
    ;
    z.e.zf = function(a) {
        this.Pl[a] || (this.Pl[a] = uz(sz(this.Yf[a]), void 0));
        return this.Pl[a]
    }
    ;
    z.e.xd = function() {
        if (!this.De) {
            for (var a = [], b = 0, c = this.dl(); b < c; b++)
                a.push(this.zf(b).xd());
            this.De = Ci.apply(null, a)
        }
        return this.De
    }
    ;
    z.e.fa = function() {
        return Iz(this)[0].fa()
    }
    ;
    z.e.$a = function() {
        return Iz(this)[0].$a()
    }
    ;
    z.e.Ja = function() {
        return oj(Iz(this)).Ja()
    }
    ;
    z.e.Eb = function() {
        return oj(Iz(this)).Eb()
    }
    ;
    z.e.ul = function() {
        return nh(Sy(this), function(a) {
            return a.ul()
        })
    }
    ;
    z.e.isCollapsed = function() {
        return 0 == this.Yf.length || 1 == this.Yf.length && this.zf(0).isCollapsed()
    }
    ;
    z.e.un = function() {
        return this.cg()
    }
    ;
    z.e.cg = function() {
        return z.Pa(Sy(this), function(a) {
            return a.cg()
        }).join("")
    }
    ;
    z.e.Nv = function() {
        return this.cg()
    }
    ;
    z.e.Qd = function() {
        return new Kz(this)
    }
    ;
    z.e.select = function() {
        var a = Ry(this.hb());
        a.removeAllRanges();
        for (var b = 0, c = this.dl(); b < c; b++)
            a.addRange(this.zf(b).Je())
    }
    ;
    z.e.Kf = function() {
        z.w(Sy(this), function(a) {
            a.Kf()
        })
    }
    ;
    z.e.qy = function() {
        return new Jz(this)
    }
    ;
    z.e.collapse = function(a) {
        if (!this.isCollapsed()) {
            var b = a ? this.zf(0) : this.zf(this.dl() - 1);
            this.fd();
            b.collapse(a);
            this.Pl = [b];
            this.am = [b];
            this.Yf = [b.Je()]
        }
    }
    ;
    z.u(Jz, My);
    Jz.prototype.Os = function() {
        var a = z.Pa(this.ry, function(a) {
            return a.restore()
        });
        return Hz(a)
    }
    ;
    Jz.prototype.h = function() {
        Jz.b.h.call(this);
        z.w(this.ry, function(a) {
            a.q()
        });
        delete this.ry
    }
    ;
    z.u(Kz, Zy);
    z.e = Kz.prototype;
    z.e.ig = null;
    z.e.Mk = 0;
    z.e.br = function() {
        return this.ig[this.Mk].br()
    }
    ;
    z.e.Vq = function() {
        return this.ig[this.Mk].Vq()
    }
    ;
    z.e.fa = function() {
        return this.ig[0].fa()
    }
    ;
    z.e.Ja = function() {
        return oj(this.ig).Ja()
    }
    ;
    z.e.Yn = function() {
        return this.ig[this.Mk].Yn()
    }
    ;
    z.e.next = function() {
        try {
            var a = this.ig[this.Mk]
              , b = a.next();
            this.Ze(a.Y, a.Xb, a.depth);
            return b
        } catch (c) {
            if (c !== z.rd || this.ig.length - 1 == this.Mk)
                throw c;
            this.Mk++;
            return this.next()
        }
    }
    ;
    z.e.Ng = function(a) {
        this.ig = z.Xa(a.ig);
        Kz.b.Ng.call(this, a)
    }
    ;
    z.e.clone = function() {
        var a = new Kz(null);
        a.Ng(this);
        return a
    }
    ;
    var eI = function() {
        if (z.dh)
            return Rz(/Firefox\/([0-9.]+)/);
        if (z.C || z.G)
            return z.kb;
        if (z.hh)
            return Rz(/Chrome\/([0-9.]+)/);
        if (z.of)
            return Rz(/Version\/([0-9.]+)/);
        if (z.fh || z.dg) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z.Kb))
                return a[1] + "." + a[2]
        } else {
            if (z.gh)
                return (a = Rz(/Android\s+([0-9.]+)/)) ? a : Rz(/Version\/([0-9.]+)/);
            if (z.eh)
                return Rz(/Camino\/([0-9.]+)/)
        }
        return ""
    }();
    var UA = z.C && !z.lb(9)
      , TA = z.H || z.J || z.G || z.C && z.lb(9)
      , YC = z.C || z.J || z.G || !1
      , fI = z.J || !1
      , gI = z.C || z.J || z.G;
    z.J && z.B("534.16");
    var hI = z.H && !0
      , iI = z.H || z.J || z.G
      , jI = z.H || z.G;
    z.C && z.B("7.0");
    var NA = z.H && z.B("1.8") || z.J || z.G
      , gD = z.J || z.C && z.B("9");
    z.C || z.G || z.H && z.B("1.9");
    var kI = z.H || z.J && !z.B("527")
      , lI = z.C || z.G
      , mI = z.C || z.J && z.B("525");
    z.J && z.B("531");
    var nI = z.J && !z.B("528");
    z.H && z.B("1.9") || z.C || z.G || z.J && z.B("531");
    var oI = z.C || z.H || z.G
      , pI = z.H || z.J && !z.B("526")
      , qI = z.C || z.G
      , rI = !z.C && !z.G
      , LA = !z.J;
    z.hh && 0 <= z.Ia(eI, "4") || z.of && z.B("533") || z.H && z.B("2.0") || z.C && z.B("10");
    var sI = z.G && z.B("11.10");
    z.hh && z.Ia(eI, "12");
    z.u(Sz, z.pd);
    Sz.prototype.next = function() {
        var a = this.KG;
        if (!a)
            throw z.rd;
        this.KG = this.OV ? a.previousSibling : a.nextSibling;
        return a
    }
    ;
    z.u(Tz, Sz);
    var ME = Ri("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL")
      , Yz = Ri("IMG", "IFRAME", "EMBED");
    Ri("text", "file", "url");
    z.u(qA, Ny);
    qA.prototype.vo = function(a) {
        var b = Oy(this, !0)
          , c = Oy(this, !1)
          , b = b && c ? Ci(b, c) : b || c;
        qA.b.vo.call(this);
        if (a)
            return jA(b, a);
        b && (a = Lz(Mi(z.Fc(b))),
        (a = jA(b, a)) && a.select())
    }
    ;
    rA.prototype.eT = function() {
        return this.eG
    }
    ;
    var wA = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
    z.u(xA, $k);
    z.e = xA.prototype;
    z.e.B = null;
    z.e.DN = !0;
    z.e.HI = function() {
        this.B && (this.disable(this.B),
        this.B = null)
    }
    ;
    z.e.enable = function(a) {
        this.B == a && (this.tc = !0)
    }
    ;
    z.e.disable = function(a) {
        this.B == a && (this.tc = !1)
    }
    ;
    z.e.isEnabled = function(a) {
        return this.B == a ? this.tc : !1
    }
    ;
    z.e.Rp = z.tg;
    z.e.gT = z.tg;
    z.e.h = function() {
        this.B && this.HI(this.B);
        xA.b.h.call(this)
    }
    ;
    var $C = Si({
        rj: 1,
        YE: 2,
        qw: 3,
        Jn: 4,
        rw: 5,
        execCommand: 6,
        queryCommandValue: 7,
        jH: 8,
        UN: 10,
        TN: 11
    })
      , tI = Ri(8, 10, 11);
    xA.prototype.execCommand = function(a, b) {
        var c = this.gT(a);
        c || (z.H && tD(this.B, !0),
        this.B.Qk());
        try {
            var d = this.jj.apply(this, arguments)
        } finally {
            c || (this.B.Zi(),
            rD(this.B))
        }
        return d
    }
    ;
    xA.prototype.yj = function() {
        return !1
    }
    ;
    var uI = L("Link");
    L("Edit Link");
    L("Text to display:");
    var vI = L("Link to:");
    L("Web address");
    L("Link to a page or file somewhere else on the web");
    L("Test this link");
    L("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {
        startBold: "\x3cb\x3e",
        endBold: "\x3c/b\x3e",
        searchEngineLink: "\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e",
        endLink: "\x3c/a\x3e"
    });
    L("To what URL should this link go?");
    L("Email address");
    L("Link to an email address");
    L("Invalid email address");
    L("To what email address should this link?");
    L("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {
        preb: "\x3cb\x3e",
        postb: "\x3c/b\x3e"
    });
    L("Open this link in a new window");
    L("Image");
    z.u(zA, xA);
    zA.prototype.Qh = function() {
        return "BTF"
    }
    ;
    var wI = Si({
        lf: "+link",
        vZ: "+formatBlock",
        JZ: "+indent",
        z_: "+outdent",
        C0: "+strikeThrough",
        GZ: "+insertHorizontalRule",
        F0: "+subscript",
        G0: "+superscript",
        S0: "+underline",
        hY: "+bold",
        MZ: "+italic",
        tZ: "+fontSize",
        sZ: "+fontName",
        rZ: "+foreColor",
        aY: "+backColor",
        x_: "+insertOrderedList",
        V0: "+insertUnorderedList",
        NZ: "+justifyCenter",
        OZ: "+justifyFull",
        QZ: "+justifyRight",
        PZ: "+justifyLeft"
    });
    z.e = zA.prototype;
    z.e.yj = function(a) {
        return a in wI
    }
    ;
    z.e.yd = function() {
        return this.B.Ra()
    }
    ;
    z.e.jj = function(a, b) {
        var c, d, f, g, h, k = b;
        switch (a) {
        case "+backColor":
            if (null !== k)
                if (kI) {
                    d = k;
                    f = this.B.Ra();
                    var m, r;
                    f && f.isCollapsed() && (m = yA(this).createTextNode(z.H ? " " : ""),
                    k = f.fa(),
                    r = 1 == k.nodeType ? k : k.parentNode,
                    "" == r.innerHTML ? (r.style.textIndent = "-10000px",
                    r.appendChild(m)) : (r = yA(this).r("span", {
                        style: "text-indent:-10000px"
                    }, m),
                    f.Js(r)),
                    Oz(m).select());
                    GA(this, "hiliteColor", d, !1, !0);
                    m && (z.H && (m.data = ""),
                    r.style.textIndent = "")
                } else
                    z.G ? GA(this, "hiliteColor", k) : GA(this, a, k);
            break;
        case "+link":
            h = this.rz(k);
            break;
        case "+justifyCenter":
        case "+justifyFull":
        case "+justifyRight":
        case "+justifyLeft":
            GA(this, a, null, !1, !0);
            z.H && GA(this, a, null, !1, !0);
            NA && z.H || z.sd(this.B.Ra(), FA);
            break;
        default:
            z.C && "+formatBlock" == a && k && (k = "\x3c" + k + "\x3e");
            if ("+foreColor" == a && null === k)
                break;
            switch (a) {
            case "+indent":
            case "+outdent":
                NA && (z.H && (d = !0),
                z.G && (d = "+outdent" == a ? !AA(this).queryCommandEnabled("outdent") : !0));
            case "+insertOrderedList":
            case "+insertUnorderedList":
                if (m = qI)
                    m = AA(this),
                    m = aB(this, !0, m, a, void 0);
                m ? f = "P" != this.B.queryCommandValue("+defaultTag") : rI || BA(this);
                z.H && pI && !this.queryCommandValue(a) && (m = this.B.queryCommandValue("+defaultTag"),
                "P" == m || "DIV" == m ? m = !1 : (m = this.yd(),
                m.isCollapsed() && 3 != m.xd().nodeType ? (c = yA(this).createTextNode("\u00a0"),
                m.insertNode(c, !1),
                Oz(c).select(),
                m = !0) : m = !1),
                g |= m);
            case "+formatBlock":
                c = !!this.B.We.Bidi;
                break;
            case "+subscript":
            case "+superscript":
                oI && !this.queryCommandValue(a) && (m = "+subscript" == a ? "+superscript" : "+subscript",
                r = EA(m),
                this.queryCommandValue(m) || AA(this).execCommand(r, !1, null),
                AA(this).execCommand(r, !1, null));
                break;
            case "+underline":
            case "+bold":
            case "+italic":
                d = z.H && NA && this.queryCommandValue(a);
                break;
            case "+foreColor":
            case "+fontName":
                d = NA && z.H
            }
            GA(this, a, k, c, !!d);
            g && AA(this).execCommand("Delete", !1, !0);
            f && AA(this).execCommand("FormatBlock", !1, "\x3cdiv\x3e")
        }
        z.H && !this.B.Tw && yA(this).hb().focus();
        return h
    }
    ;
    z.e.queryCommandValue = function(a) {
        var b;
        switch (a) {
        case "+link":
            return a = (a = this.yd()) && Ty(a),
            a = z.gi(a, "A"),
            !!a && !!Uh(a, $z);
        case "+justifyCenter":
        case "+justifyFull":
        case "+justifyRight":
        case "+justifyLeft":
            return YA(this, a);
        case "+formatBlock":
            return XA(this.B.Ra());
        case "+indent":
        case "+outdent":
        case "+insertHorizontalRule":
            return !1;
        case "+fontSize":
        case "+fontName":
        case "+foreColor":
        case "+backColor":
            return this.Cs(AA(this), a, NA && z.H);
        case "+underline":
        case "+bold":
        case "+italic":
            b = NA && z.H;
        default:
            var c = AA(this);
            return aB(this, !0, c, a, b)
        }
    }
    ;
    z.e.jH = function(a) {
        iI && a.match(/^\s*<script/i) && (a = "\x26nbsp;" + a);
        jI && (a = a.replace(/<(\/?)strong([^\w])/gi, "\x3c$1b$2"),
        a = a.replace(/<(\/?)em([^\w])/gi, "\x3c$1i$2"));
        return a
    }
    ;
    z.e.TN = function(a) {
        a = a.getElementsByTagName("IMG");
        for (var b = 0, c; c = a[b]; b++)
            if (z.C) {
                c.removeAttribute("tabIndex");
                c.removeAttribute("tabIndexSet");
                var d = c;
                "removeAttribute"in d && d.removeAttribute(z.ka);
                try {
                    delete d[z.ka]
                } catch (f) {}
                c.lU && (c.tabIndex = c.lU)
            }
    }
    ;
    z.e.UN = function(a) {
        if (z.J) {
            for (var b = th(this.B.cb.Ma, "HEAD", void 0, void 0), c = [], d = b.length, f = 1; f < d; ++f)
                for (var g = b[f].getElementsByTagName("STYLE"), h = g.length, k = 0; k < h; ++k)
                    c.push(g[k].outerHTML);
            return c.join("") + a
        }
        return a
    }
    ;
    z.e.rw = function(a, b, c) {
        if (!c)
            return !1;
        var d;
        switch (b) {
        case "b":
            d = "+bold";
            break;
        case "i":
            d = "+italic";
            break;
        case "u":
            d = "+underline";
            break;
        case "s":
            return !0
        }
        return d ? (this.B.execCommand(d),
        !0) : !1
    }
    ;
    var CA = z.C ? /<br([^\/>]*)\/?>/gi : /<br([^\/>]*)\/?>(?!<\/(div|p)>)/gi;
    zA.prototype.rz = function(a) {
        this.B.Zn || yA(this).hb().focus();
        var b = this.yd()
          , c = b && Ty(b);
        if ((c = z.gi(c, "A")) && Uh(c, $z))
            z.Pc(c);
        else if (a = SA(this, b, a)) {
            if (!this.B.execCommand("link", a)) {
                var d = this.B.$p.prompt(vI, "http://");
                if (d) {
                    b = sA(a) || d;
                    c = a.Eg;
                    c.href = d;
                    var f = sA(a);
                    b != f && (d = Uz(c),
                    d.tagName && "IMG" == d.tagName ? d.setAttribute("alt", b ? b : "") : (3 == d.nodeType && (d = d.parentNode),
                    zi(d) != f && (d = c),
                    z.Nc(d),
                    c = z.Dc(d),
                    d.appendChild(c.createTextNode(b))),
                    a.Yu = null);
                    a.eG = !1;
                    b = a.Eg;
                    nI ? (c = b.nextSibling,
                    c && 3 == c.nodeType && (z.ua(c.data, "\u00a0") || z.ua(c.data, " ")) || (c = z.Dc(b).createTextNode("\u00a0"),
                    Li(c, b)),
                    Pz(c, 1).select()) : gA(b, !1)
                } else {
                    b = Oz(a.Eg);
                    b = new qA(b);
                    z.Pc(a.Eg);
                    for (a.Eg = null; a.ov.length; )
                        z.Pc(a.ov.pop());
                    b.restore().select();
                    return null
                }
            }
            return a
        }
        return null
    }
    ;
    var IA = {
        indent: 1,
        outdent: 1,
        insertOrderedList: 1,
        insertUnorderedList: 1,
        justifyCenter: 1,
        justifyFull: 1,
        justifyRight: 1,
        justifyLeft: 1,
        ltr: 1,
        rtl: 1
    }
      , HA = {
        insertOrderedList: 1,
        insertUnorderedList: 1
    }
      , WA = {
        1: 1,
        a: 1,
        A: 1,
        i: 1,
        I: 1
    }
      , VA = {
        disc: 1,
        circle: 1,
        square: 1
    }
      , JA = {
        justifyCenter: 1,
        justifyFull: 1,
        justifyRight: 1,
        justifyLeft: 1,
        formatBlock: 1
    }
      , KA = {
        insertOrderedList: 1,
        insertUnorderedList: 1
    }
      , $A = {
        center: 1,
        justify: 1,
        right: 1,
        left: 1
    };
    zA.prototype.Cs = function(a, b, c) {
        return aB(this, !1, a, b, c)
    }
    ;
    z.u(bB, zA);
    bB.prototype.jj = function(a, b) {
        if (!this.B.Lr && (this.B.XN && (this.B.rg(!1, null, !0),
        this.B.XN = !1),
        this.B.Pe())) {
            var c = this.B;
            !UA && z.H || yD(c, !0);
            c.focus()
        }
        return bB.b.jj.call(this, a, b)
    }
    ;
    bB.prototype.yd = function() {
        return bB.b.yd.call(this) || Lz(window)
    }
    ;
    bB.prototype.rz = function(a) {
        this.B.Zn || this.B.ag();
        bB.b.rz.call(this, a)
    }
    ;
    z.ca(cB);
    z.e = cB.prototype;
    z.e.Lh = function() {
        return this.yu
    }
    ;
    z.e.r = function(a) {
        return a.R().r("div", this.Mh(a).join(" "))
    }
    ;
    z.e.Ea = function(a) {
        return a
    }
    ;
    z.e.vd = function(a) {
        return "DIV" == a.tagName
    }
    ;
    z.e.U = function(a, b) {
        b.id && zp(a, b.id);
        var c = this.P()
          , d = !1
          , f = Rp(b);
        f && z.w(f, function(b) {
            b == c ? d = !0 : b && (b == c + "-disabled" ? a.gc(!1) : b == c + "-horizontal" ? iB(a, SC) : b == c + "-vertical" && iB(a, JB))
        }, this);
        d || Tp(b, c);
        eB(this, a, this.Ea(b));
        return b
    }
    ;
    z.e.sn = function(a) {
        a: {
            var b;
            a = Rp(a);
            for (var c = 0, d = a.length; c < d; c++)
                if (b = a[c],
                b = b in oy ? oy[b]() : null) {
                    a = b;
                    break a
                }
            a = null
        }
        return a
    }
    ;
    z.e.gg = function(a) {
        a = a.f();
        Sl(a, !0, z.H);
        z.C && (a.hideFocus = !0);
        var b = this.Lh();
        b && Mp(a, b)
    }
    ;
    z.e.Nb = function(a) {
        return a.f()
    }
    ;
    z.e.P = function() {
        return "goog-container"
    }
    ;
    z.e.Mh = function(a) {
        var b = this.P()
          , c = [b, a.Gj == SC ? b + "-horizontal" : b + "-vertical"];
        a.isEnabled() || c.push(b + "-disabled");
        return c
    }
    ;
    z.e.nE = function() {
        return JB
    }
    ;
    z.u(fB, z.T);
    var SC = "horizontal"
      , JB = "vertical";
    z.e = fB.prototype;
    z.e.wl = null;
    z.e.Re = null;
    z.e.ba = null;
    z.e.Gj = null;
    z.e.pc = !0;
    z.e.tc = !0;
    z.e.Rq = !0;
    z.e.Na = -1;
    z.e.nc = null;
    z.e.kg = !1;
    z.e.rN = !1;
    z.e.RU = !0;
    z.e.Jg = null;
    z.e.Nb = function() {
        return this.wl || this.ba.Nb(this)
    }
    ;
    z.e.vn = function() {
        return this.Re || (this.Re = new cy(this.Nb()))
    }
    ;
    z.e.SH = function(a) {
        if (this.f())
            throw Error("Component already rendered");
        this.ba = a
    }
    ;
    z.e.r = function() {
        this.c = this.ba.r(this)
    }
    ;
    z.e.Ea = function() {
        return this.ba.Ea(this.f())
    }
    ;
    z.e.vd = function(a) {
        return this.ba.vd(a)
    }
    ;
    z.e.K = function(a) {
        this.c = this.ba.U(this, a);
        "none" == a.style.display && (this.pc = !1)
    }
    ;
    z.e.m = function() {
        fB.b.m.call(this);
        this.Qc(function(a) {
            a.aa && hB(this, a)
        }, this);
        var a = this.f();
        this.ba.gg(this);
        this.V(this.pc, !0);
        this.p().e(this, "enter", this.iw).e(this, "highlight", this.nw).e(this, "unhighlight", this.Hw).e(this, "open", this.GR).e(this, "close", this.aw).e(a, "mousedown", this.Ug).e(z.Fc(a), "mouseup", this.zQ).e(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.hQ);
        this.Cf() && gB(this, !0)
    }
    ;
    z.e.S = function() {
        this.Pb(-1);
        this.nc && this.nc.Ib(!1);
        this.kg = !1;
        fB.b.S.call(this)
    }
    ;
    z.e.h = function() {
        fB.b.h.call(this);
        this.Re && (this.Re.q(),
        this.Re = null);
        this.ba = this.nc = this.Jg = this.wl = null
    }
    ;
    z.e.iw = function() {
        return !0
    }
    ;
    z.e.nw = function(a) {
        var b = z.Ep(this, a.target);
        if (-1 < b && b != this.Na) {
            var c = jB(this);
            c && c.Uc(!1);
            this.Na = b;
            c = jB(this);
            this.kg && c.setActive(!0);
            this.RU && this.nc && c != this.nc && (jy(c, 64) ? c.Ib(!0) : this.nc.Ib(!1))
        }
        b = this.f();
        null != a.target.f() && Np(b, "activedescendant", a.target.f().id)
    }
    ;
    z.e.Hw = function(a) {
        a.target == jB(this) && (this.Na = -1);
        this.f().removeAttribute("aria-activedescendant")
    }
    ;
    z.e.GR = function(a) {
        (a = a.target) && a != this.nc && a.getParent() == this && (this.nc && this.nc.Ib(!1),
        this.nc = a)
    }
    ;
    z.e.aw = function(a) {
        a.target == this.nc && (this.nc = null)
    }
    ;
    z.e.Ug = function(a) {
        this.tc && (this.kg = !0);
        var b = this.Nb();
        b && Bh(b) ? b.focus() : a.preventDefault()
    }
    ;
    z.e.zQ = function() {
        this.kg = !1
    }
    ;
    z.e.hQ = function(a) {
        var b;
        a: {
            b = a.target;
            if (this.Jg)
                for (var c = this.f(); b && b !== c; ) {
                    var d = b.id;
                    if (d in this.Jg) {
                        b = this.Jg[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b)
            switch (a.type) {
            case "mousedown":
                b.Ug(a);
                break;
            case "mouseup":
                b.sj(a);
                break;
            case "mouseover":
                b.Ne(a);
                break;
            case "mouseout":
                b.xw(a);
                break;
            case "contextmenu":
                b.Fn(a)
            }
    }
    ;
    z.e.Tg = function() {}
    ;
    z.e.Sh = function() {
        this.Pb(-1);
        this.kg = !1;
        this.nc && this.nc.Ib(!1)
    }
    ;
    z.e.Af = function(a) {
        return this.isEnabled() && this.ka() && (0 != this.Cc() || this.wl) && this.Me(a) ? (a.preventDefault(),
        a.stopPropagation(),
        !0) : !1
    }
    ;
    z.e.Me = function(a) {
        var b = jB(this);
        if (b && "function" == typeof b.Af && b.Af(a) || this.nc && this.nc != b && "function" == typeof this.nc.Af && this.nc.Af(a))
            return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)
            return !1;
        switch (a.keyCode) {
        case 27:
            if (this.Cf())
                this.Nb().blur();
            else
                return !1;
            break;
        case 36:
            kB(this);
            break;
        case 35:
            mB(this);
            break;
        case 38:
            if (this.Gj == JB)
                oB(this);
            else
                return !1;
            break;
        case 37:
            if (this.Gj == SC)
                this.Pr() ? nB(this) : oB(this);
            else
                return !1;
            break;
        case 40:
            if (this.Gj == JB)
                nB(this);
            else
                return !1;
            break;
        case 39:
            if (this.Gj == SC)
                this.Pr() ? oB(this) : nB(this);
            else
                return !1;
            break;
        default:
            return !1
        }
        return !0
    }
    ;
    z.e.G = function(a, b) {
        fB.b.G.call(this, a, b)
    }
    ;
    z.e.xe = function(a, b, c) {
        a.Sj |= 2;
        a.Sj |= 64;
        !this.Cf() && this.rN || a.hc(32, !1);
        ry(a, !1);
        var d = a.getParent() == this ? z.Ep(this, a) : -1;
        fB.b.xe.call(this, a, b, c);
        a.aa && this.aa && hB(this, a);
        a = d;
        -1 == a && (a = this.Cc());
        a == this.Na ? this.Na = Math.min(this.Cc() - 1, b) : a > this.Na && b <= this.Na ? this.Na++ : a < this.Na && b > this.Na && this.Na--
    }
    ;
    z.e.removeChild = function(a, b) {
        if (a = z.p(a) ? Dp(this, a) : a) {
            var c = z.Ep(this, a);
            -1 != c && (c == this.Na ? (a.Uc(!1),
            this.Na = -1) : c < this.Na && this.Na--);
            (c = a.f()) && c.id && this.Jg && z.db(this.Jg, c.id)
        }
        a = fB.b.removeChild.call(this, a, b);
        ry(a, !0);
        return a
    }
    ;
    z.e.ka = function() {
        return this.pc
    }
    ;
    z.e.V = function(a, b) {
        if (b || this.pc != a && this.dispatchEvent(a ? "show" : "hide")) {
            this.pc = a;
            var c = this.f();
            c && (z.N(c, a),
            this.Cf() && dB(this.Nb(), this.tc && this.pc),
            b || this.dispatchEvent(this.pc ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    }
    ;
    z.e.isEnabled = function() {
        return this.tc
    }
    ;
    z.e.gc = function(a) {
        this.tc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.tc = !0,
        this.Qc(function(a) {
            a.$I ? delete a.$I : a.gc(!0)
        })) : (this.Qc(function(a) {
            a.isEnabled() ? a.gc(!1) : a.$I = !0
        }),
        this.kg = this.tc = !1),
        this.Cf() && dB(this.Nb(), a && this.pc))
    }
    ;
    z.e.Cf = function() {
        return this.Rq
    }
    ;
    z.e.Ye = function(a) {
        a != this.Rq && this.aa && gB(this, a);
        this.Rq = a;
        this.tc && this.pc && dB(this.Nb(), a)
    }
    ;
    z.e.Pb = function(a) {
        (a = this.ld(a)) ? a.Uc(!0) : -1 < this.Na && jB(this).Uc(!1)
    }
    ;
    z.e.Uc = function(a) {
        this.Pb(z.Ep(this, a))
    }
    ;
    z.e.JC = function(a) {
        return a.ka() && a.isEnabled() && jy(a, 2)
    }
    ;
    z.u(pB, ey);
    z.ca(pB);
    z.e = pB.prototype;
    z.e.Lh = function() {
        return "menuitem"
    }
    ;
    z.e.r = function(a) {
        var b = a.R().r("div", this.Mh(a).join(" "), rB(this, a.mb(), a.R()));
        tB(this, a, b, jy(a, 8) || jy(a, 16));
        return b
    }
    ;
    z.e.Ea = function(a) {
        return a && a.firstChild
    }
    ;
    z.e.U = function(a, b) {
        var c = z.Sc(b)
          , d = qB(this, 2);
        c && Sp(c, d) || b.appendChild(rB(this, b.childNodes, a.R()));
        Sp(b, "goog-option") && (a.Us(!0),
        this.Us(a, b, !0));
        return pB.b.U.call(this, a, b)
    }
    ;
    z.e.Oa = function(a, b) {
        var c = this.Ea(a)
          , d = sB(this, a) ? c.firstChild : null;
        pB.b.Oa.call(this, a, b);
        d && !sB(this, a) && c.insertBefore(d, c.firstChild || null)
    }
    ;
    z.e.Gy = function(a, b, c) {
        a && b && tB(this, a, b, c)
    }
    ;
    z.e.Us = function(a, b, c) {
        a && b && tB(this, a, b, c)
    }
    ;
    z.e.rn = function(a) {
        switch (a) {
        case 2:
            return qB(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return pB.b.rn.call(this, a)
        }
    }
    ;
    z.e.cr = function(a) {
        var b = qB(this, 0);
        switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return pB.b.cr.call(this, a)
        }
    }
    ;
    z.e.P = function() {
        return "goog-menuitem"
    }
    ;
    z.u(uB, py);
    z.e = uB.prototype;
    z.e.Q = function() {
        var a = this.l;
        return null != a ? a : this.vf()
    }
    ;
    z.e.ob = function(a) {
        this.Lf(a)
    }
    ;
    z.e.hc = function(a, b) {
        uB.b.hc.call(this, a, b);
        switch (a) {
        case 8:
            this.F & 16 && !b && ty(this, !1);
            var c = this.f();
            c && this.ba.Gy(this, c, b);
            break;
        case 16:
            (c = this.f()) && this.ba.Us(this, c, b)
        }
    }
    ;
    z.e.Gy = function(a) {
        this.hc(8, a)
    }
    ;
    z.e.Us = function(a) {
        this.hc(16, a)
    }
    ;
    z.e.vf = function() {
        var a = this.mb();
        return z.ea(a) ? (a = z.Pa(a, function(a) {
            return z.Uc(a) && (Sp(a, "goog-menuitem-accel") || Sp(a, "goog-menuitem-mnemonic-separator")) ? "" : zi(a)
        }).join(""),
        uj(a)) : uB.b.vf.call(this)
    }
    ;
    z.e.jE = function() {
        var a = this.R()
          , b = this.mb();
        return z.ea(b) && (b = mh(b, function(a) {
            return Sp(a, "goog-menuitem-accel")
        })) ? a.SP(b) : null
    }
    ;
    z.e.sj = function(a) {
        var b = this.getParent();
        if (b) {
            var c = b.ZG;
            b.ZG = null;
            if (b = c && z.oh(a.clientX))
                b = new z.uh(a.clientX,a.clientY),
                b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b)
                return
        }
        uB.b.sj.call(this, a)
    }
    ;
    z.e.Me = function(a) {
        return a.keyCode == this.BG && this.Gf(a) ? !0 : uB.b.Me.call(this, a)
    }
    ;
    z.e.OP = function() {
        return this.BG
    }
    ;
    ny("goog-menuitem", function() {
        return new uB(null)
    });
    uB.prototype.Ph = function() {
        return jy(this, 16) ? "menuitemcheckbox" : jy(this, 8) ? "menuitemradio" : uB.b.Ph.call(this)
    }
    ;
    uB.prototype.getParent = function() {
        return py.prototype.getParent.call(this)
    }
    ;
    uB.prototype.Yq = function() {
        return py.prototype.Yq.call(this)
    }
    ;
    z.u(vB, uB);
    vB.prototype.Gf = function() {
        return this.dispatchEvent("action")
    }
    ;
    ny("goog-option", function() {
        return new vB(null)
    });
    z.u(wB, ey);
    z.ca(wB);
    wB.prototype.r = function(a) {
        return a.R().r("div", this.P())
    }
    ;
    wB.prototype.U = function(a, b) {
        b.id && zp(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.r(a);
            Ph(b, c);
            z.Oc(c)
        } else
            Tp(b, this.P());
        return b
    }
    ;
    wB.prototype.Oa = function() {}
    ;
    wB.prototype.P = function() {
        return "goog-menuseparator"
    }
    ;
    z.u(xB, py);
    xB.prototype.m = function() {
        xB.b.m.call(this);
        Mp(this.f(), "separator")
    }
    ;
    ny("goog-menuseparator", function() {
        return new xB
    });
    z.u(yB, wB);
    z.ca(yB);
    yB.prototype.r = function(a) {
        return a.R().r("div", this.P() + " goog-inline-block", "\u00a0")
    }
    ;
    yB.prototype.U = function(a, b) {
        b = yB.b.U.call(this, a, b);
        Tp(b, "goog-inline-block");
        return b
    }
    ;
    yB.prototype.P = function() {
        return "goog-toolbar-separator"
    }
    ;
    z.u(zB, cB);
    z.ca(zB);
    zB.prototype.sn = function(a) {
        return "HR" == a.tagName ? new xB(yB.D()) : zB.b.sn.call(this, a)
    }
    ;
    zB.prototype.P = function() {
        return "goog-toolbar"
    }
    ;
    zB.prototype.nE = function() {
        return SC
    }
    ;
    z.u(AB, fB);
    AB.prototype.Tg = function(a) {
        AB.b.Tg.call(this, a);
        this.kg || kB(this)
    }
    ;
    z.u(BB, my);
    z.ca(BB);
    z.e = BB.prototype;
    z.e.r = function(a) {
        var b = {
            "class": "goog-inline-block " + this.Mh(a).join(" ")
        }
          , b = a.R().r("div", b, this.Ik(a.mb(), a.R()));
        this.Pj(b, a.xn());
        iy(this, a, b);
        return b
    }
    ;
    z.e.Lh = function() {
        return "button"
    }
    ;
    z.e.Ea = function(a) {
        return a && a.firstChild && a.firstChild.firstChild
    }
    ;
    z.e.Ik = function(a, b) {
        return b.r("div", "goog-inline-block " + (this.P() + "-outer-box"), b.r("div", "goog-inline-block " + (this.P() + "-inner-box"), a))
    }
    ;
    z.e.vd = function(a) {
        return "DIV" == a.tagName
    }
    ;
    z.e.U = function(a, b) {
        CB(b, !0);
        CB(b, !1);
        var c;
        a: {
            c = a.R().qE(b);
            var d = this.P() + "-outer-box";
            if (c && Sp(c, d) && (c = a.R().qE(c),
            d = this.P() + "-inner-box",
            c && Sp(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.Ik(b.childNodes, a.R()));
        Up(b, ["goog-inline-block", this.P()]);
        return BB.b.U.call(this, a, b)
    }
    ;
    z.e.P = function() {
        return "goog-custom-button"
    }
    ;
    z.u(DB, BB);
    z.ca(DB);
    DB.prototype.P = function() {
        return "goog-toolbar-button"
    }
    ;
    z.u(EB, xy);
    ny("goog-toolbar-button", function() {
        return new EB(null)
    });
    z.u(FB, ey);
    z.ca(FB);
    FB.prototype.P = function() {
        return "goog-menuheader"
    }
    ;
    z.u(GB, py);
    ny("goog-menuheader", function() {
        return new GB(null)
    });
    z.u(HB, cB);
    z.ca(HB);
    z.e = HB.prototype;
    z.e.vd = function(a) {
        return "UL" == a.tagName || HB.b.vd.call(this, a)
    }
    ;
    z.e.sn = function(a) {
        return "HR" == a.tagName ? new xB : HB.b.sn.call(this, a)
    }
    ;
    z.e.Xi = function(a, b) {
        return z.Vc(a.f(), b)
    }
    ;
    z.e.P = function() {
        return "goog-menu"
    }
    ;
    z.e.gg = function(a) {
        HB.b.gg.call(this, a);
        Np(a.f(), "haspopup", "true")
    }
    ;
    ny("goog-menuseparator", function() {
        return new xB
    });
    z.u(IB, fB);
    z.e = IB.prototype;
    z.e.su = !0;
    z.e.sN = !1;
    z.e.P = function() {
        return this.ba.P()
    }
    ;
    z.e.Xi = function(a) {
        if (this.ba.Xi(this, a))
            return !0;
        for (var b = 0, c = this.Cc(); b < c; b++) {
            var d = this.ld(b);
            if ("function" == typeof d.Xi && d.Xi(a))
                return !0
        }
        return !1
    }
    ;
    z.e.Wf = function(a) {
        this.G(a, !0)
    }
    ;
    z.e.xk = function(a, b) {
        this.xe(a, b, !0)
    }
    ;
    z.e.removeItem = function(a) {
        (a = this.removeChild(a, !0)) && a.q()
    }
    ;
    z.e.bl = function(a) {
        return this.ld(a)
    }
    ;
    z.e.Wq = function() {
        return this.Cc()
    }
    ;
    z.e.tE = function() {
        var a = [];
        this.Qc(function(b) {
            a.push(b)
        });
        return a
    }
    ;
    z.e.Ze = function(a, b) {
        var c = this.ka();
        c || z.N(this.f(), !0);
        var d = this.f()
          , f = a
          , g = b
          , h = z.Hl(d);
        f instanceof z.uh && (g = f.y,
        f = f.x);
        z.Bl(d, d.offsetLeft + (f - h.x), d.offsetTop + (g - h.y));
        c || z.N(this.f(), !1)
    }
    ;
    z.e.V = function(a, b, c) {
        (b = IB.b.V.call(this, a, b)) && a && this.aa && this.su && this.Nb().focus();
        this.ZG = a && c && z.oh(c.clientX) ? new z.uh(c.clientX,c.clientY) : null;
        return b
    }
    ;
    z.e.iw = function(a) {
        this.su && this.Nb().focus();
        return IB.b.iw.call(this, a)
    }
    ;
    z.e.JC = function(a) {
        return (this.sN || a.isEnabled()) && a.ka() && jy(a, 2)
    }
    ;
    z.e.K = function(a) {
        KB(this, a);
        IB.b.K.call(this, a)
    }
    ;
    z.e.Me = function(a) {
        var b = IB.b.Me.call(this, a);
        b || this.Qc(function(c) {
            !b && c.OP && c.BG == a.keyCode && (this.isEnabled() && this.Uc(c),
            b = c.Af(a))
        }, this);
        return b
    }
    ;
    z.e.Pb = function(a) {
        IB.b.Pb.call(this, a);
        var b = this.ld(a);
        if (b) {
            a = this.f();
            var b = b.f()
              , c = z.Hl(b)
              , d = z.Hl(a)
              , f = Xl(a)
              , g = c.x - d.x - f.left
              , c = c.y - d.y - f.top
              , d = a.clientHeight - b.offsetHeight
              , f = a.scrollLeft
              , h = a.scrollTop
              , f = f + Math.min(g, Math.max(g - (a.clientWidth - b.offsetWidth), 0))
              , h = h + Math.min(c, Math.max(c - d, 0))
              , b = new z.uh(f,h);
            a.scrollLeft = b.x;
            a.scrollTop = b.y
        }
    }
    ;
    z.u(LB, BB);
    z.ca(LB);
    z.e = LB.prototype;
    z.e.Ea = function(a) {
        return LB.b.Ea.call(this, a && a.firstChild)
    }
    ;
    z.e.U = function(a, b) {
        var c = th(window.document, "*", "goog-menu", b)[0];
        if (c) {
            z.N(c, !1);
            z.Fc(c).body.appendChild(c);
            var d = new IB;
            d.U(c);
            a.Wl(d)
        }
        return LB.b.U.call(this, a, b)
    }
    ;
    z.e.Ik = function(a, b) {
        return LB.b.Ik.call(this, [this.createCaption(a, b), b.r("div", "goog-inline-block " + (this.P() + "-dropdown"), "\u00a0")], b)
    }
    ;
    z.e.createCaption = function(a, b) {
        return MB(a, this.P(), b)
    }
    ;
    z.e.P = function() {
        return "goog-menu-button"
    }
    ;
    z.u(NB, LB);
    z.ca(NB);
    NB.prototype.createCaption = function(a, b) {
        return NB.b.createCaption.call(this, OB(a, b), b)
    }
    ;
    NB.prototype.ob = function(a, b) {
        a && PB(this.Ea(a), b)
    }
    ;
    NB.prototype.gg = function(a) {
        var b = a.f();
        this.ob(b, a.Q());
        Tp(b, "goog-color-menu-button");
        NB.b.gg.call(this, a)
    }
    ;
    z.u(QB, Py);
    QB.prototype.next = function() {
        do
            QB.b.next.call(this);
        while (-1 == this.Xb);return this.Y
    }
    ;
    z.u(RB, ey);
    z.ca(RB);
    var VB = 0;
    z.e = RB.prototype;
    z.e.r = function(a) {
        var b = this.Mh(a);
        a = a.R().r("DIV", b ? b.join(" ") : null, SB(this, a.mb(), a.Tv(), a.R()));
        Mp(a, "grid");
        return a
    }
    ;
    z.e.Vu = function(a, b) {
        var c = b.r("TABLE", this.P() + "-table", b.r("TBODY", this.P() + "-body", a));
        c.cellSpacing = 0;
        c.cellPadding = 0;
        return c
    }
    ;
    z.e.vd = function() {
        return !1
    }
    ;
    z.e.U = function() {
        return null
    }
    ;
    z.e.Oa = function(a, b) {
        if (a) {
            var c = th(window.document, "TBODY", this.P() + "-body", a)[0];
            if (c) {
                var d = 0;
                z.w(c.rows, function(a) {
                    z.w(a.cells, function(a) {
                        z.Nc(a);
                        if (b) {
                            var c = b[d++];
                            c && a.appendChild(c)
                        }
                    })
                });
                if (d < b.length) {
                    for (var f = [], g = z.Dc(a), h = c.rows[0].cells.length; d < b.length; ) {
                        var k = b[d++];
                        f.push(TB(this, k, g));
                        f.length == h && (k = UB(this, f, g),
                        c.appendChild(k),
                        f.length = 0)
                    }
                    if (0 < f.length) {
                        for (; f.length < h; )
                            f.push(TB(this, "", g));
                        k = UB(this, f, g);
                        c.appendChild(k)
                    }
                }
            }
            Sl(a, !0, z.H)
        }
    }
    ;
    z.e.P = function() {
        return "goog-palette"
    }
    ;
    z.u(XB, $k);
    z.e = XB.prototype;
    z.e.ih = null;
    z.e.wy = null;
    z.e.Wq = function() {
        return this.dh.length
    }
    ;
    z.e.bl = function(a) {
        return this.dh[a] || null
    }
    ;
    z.e.Wf = function(a) {
        this.xk(a, this.Wq())
    }
    ;
    z.e.xk = function(a, b) {
        a && (this.Tl(a, !1),
        Zh(this.dh, b, 0, a))
    }
    ;
    z.e.removeItem = function(a) {
        a && z.Ta(this.dh, a) && a == this.ih && (this.ih = null,
        this.dispatchEvent("select"))
    }
    ;
    z.e.xf = function() {
        return this.ih
    }
    ;
    z.e.tE = function() {
        return z.Xa(this.dh)
    }
    ;
    z.e.Mf = function(a) {
        a != this.ih && (this.Tl(this.ih, !1),
        this.ih = a,
        this.Tl(a, !0));
        this.dispatchEvent("select")
    }
    ;
    z.e.wf = function() {
        var a = this.ih;
        return a ? z.Na(this.dh, a) : -1
    }
    ;
    z.e.Vc = function(a) {
        this.Mf(this.bl(a))
    }
    ;
    z.e.clear = function() {
        var a = this.dh;
        if (!z.ea(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0;
        this.ih = null
    }
    ;
    z.e.h = function() {
        XB.b.h.call(this);
        delete this.dh;
        this.ih = null
    }
    ;
    z.e.Tl = function(a, b) {
        a && ("function" == typeof this.wy ? this.wy(a, b) : "function" == typeof a.Hy && a.Hy(b))
    }
    ;
    z.u(ZB, py);
    z.e = ZB.prototype;
    z.e.bf = null;
    z.e.Na = -1;
    z.e.ga = null;
    z.e.h = function() {
        ZB.b.h.call(this);
        this.ga && (this.ga.q(),
        this.ga = null);
        this.bf = null;
        this.Tm.q()
    }
    ;
    z.e.Oj = function(a) {
        ZB.b.Oj.call(this, a);
        bC(this);
        this.ga ? (this.ga.clear(),
        YB(this.ga, a)) : (this.ga = new XB(a),
        a = (0,
        z.q)(this.Tl, this),
        this.ga.wy = a,
        this.p().e(this.ga, "select", this.Jn));
        this.Na = -1
    }
    ;
    z.e.vf = function() {
        return ""
    }
    ;
    z.e.Ay = function() {}
    ;
    z.e.Ne = function(a) {
        ZB.b.Ne.call(this, a);
        var b = WB(this.ba, this, a.target);
        b && a.relatedTarget && z.Vc(b, a.relatedTarget) || b == aC(this) || (a = this.mb(),
        this.Pb(a ? z.Na(a, b) : -1))
    }
    ;
    z.e.Ug = function(a) {
        ZB.b.Ug.call(this, a);
        if (this.Bf() && (a = WB(this.ba, this, a.target),
        a != aC(this))) {
            var b = this.mb();
            this.Pb(b ? z.Na(b, a) : -1)
        }
    }
    ;
    z.e.Gf = function(a) {
        var b = aC(this);
        return b ? (this.Mf(b),
        ZB.b.Gf.call(this, a)) : !1
    }
    ;
    z.e.Af = function(a) {
        var b = this.mb()
          , b = b ? b.length : 0
          , c = this.bf.width;
        if (0 == b || !this.isEnabled())
            return !1;
        if (13 == a.keyCode || 32 == a.keyCode)
            return this.Gf(a);
        if (36 == a.keyCode)
            return this.Pb(0),
            !0;
        if (35 == a.keyCode)
            return this.Pb(b - 1),
            !0;
        var d = 0 > this.Na ? this.wf() : this.Na;
        switch (a.keyCode) {
        case 37:
            if (-1 == d || 0 == d)
                d = b;
            this.Pb(d - 1);
            a.preventDefault();
            return !0;
        case 39:
            return d == b - 1 && (d = -1),
            this.Pb(d + 1),
            a.preventDefault(),
            !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c)
                return this.Pb(d - c),
                a.preventDefault(),
                !0;
            break;
        case 40:
            if (-1 == d && (d = -c),
            d < b - c)
                return this.Pb(d + c),
                a.preventDefault(),
                !0
        }
        return !1
    }
    ;
    z.e.Jn = function() {}
    ;
    z.e.Tv = function() {
        return this.bf
    }
    ;
    z.e.Pb = function(a) {
        a != this.Na && (this.Vh(this.Na, !1),
        this.nx = this.Na,
        this.Na = a,
        this.Vh(a, !0),
        this.dispatchEvent("a"))
    }
    ;
    z.e.wf = function() {
        return this.ga ? this.ga.wf() : -1
    }
    ;
    z.e.xf = function() {
        return this.ga ? this.ga.xf() : null
    }
    ;
    z.e.Vc = function(a) {
        this.ga && this.ga.Vc(a)
    }
    ;
    z.e.Mf = function(a) {
        this.ga && this.ga.Mf(a)
    }
    ;
    z.e.Vh = function(a, b) {
        if (this.f()) {
            var c = this.mb();
            if (c && 0 <= a && a < c.length) {
                var d;
                d = (d = aC(this)) ? d.parentNode : null;
                this.Tm.f() != d && (this.Tm.c = d);
                d = this.Tm;
                d.Uc(b);
                !!(d.F & 2) == b && (c = c[a]) && (c = c ? c.parentNode : null,
                d = this.ba.P() + "-cell-hover",
                b ? Tp(c, d) : Vp(c, d),
                b ? Np(this.c, "activedescendant", c.id) : c.id == Pp(this.c, "activedescendant") && this.c.removeAttribute("aria-activedescendant"))
            }
        }
    }
    ;
    z.e.Uc = function(a) {
        a && -1 == this.Na ? this.Pb(-1 < this.nx ? this.nx : 0) : a || this.Pb(-1);
        ZB.b.Uc.call(this, a)
    }
    ;
    z.e.Tl = function(a, b) {
        if (this.f() && a) {
            var c = a.parentNode
              , d = this.ba.P() + "-cell-selected";
            b ? Tp(c, d) : Vp(c, d);
            Np(c, "selected", b)
        }
    }
    ;
    z.u($B, py);
    z.u(cC, ZB);
    cC.prototype.fs = null;
    cC.prototype.Ur = null;
    cC.prototype.Sv = function() {
        var a = this.xf();
        return a ? (a = xl(a, "background-color"),
        eC(a)) : null
    }
    ;
    cC.prototype.Go = function(a) {
        a = eC(a);
        this.fs || (this.fs = z.Pa(this.oq, function(a) {
            return eC(a)
        }));
        this.Vc(a ? z.Na(this.fs, a) : -1)
    }
    ;
    z.u(fC, us);
    z.u(gC, xy);
    z.e = gC.prototype;
    z.e.Mr = !1;
    z.e.yV = !1;
    z.e.UV = !1;
    z.e.m = function() {
        gC.b.m.call(this);
        kC(this, !0);
        this.M && jC(this, this.M, !0);
        Np(this.c, "haspopup", !!this.M)
    }
    ;
    z.e.S = function() {
        gC.b.S.call(this);
        kC(this, !1);
        if (this.M) {
            this.Ib(!1);
            this.M.S();
            jC(this, this.M, !1);
            var a = this.M.f();
            a && z.Oc(a)
        }
    }
    ;
    z.e.h = function() {
        gC.b.h.call(this);
        this.M && (this.M.q(),
        delete this.M);
        delete this.aV;
        this.Ca.q()
    }
    ;
    z.e.Ug = function(a) {
        gC.b.Ug.call(this, a);
        this.Bf() && (this.Ib(!this.Ab(), a),
        this.M && (a = this.Ab(),
        this.M.kg = a))
    }
    ;
    z.e.sj = function(a) {
        gC.b.sj.call(this, a);
        this.M && !this.Bf() && (this.M.kg = !1)
    }
    ;
    z.e.Gf = function() {
        this.setActive(!1);
        return !0
    }
    ;
    z.e.yQ = function(a) {
        this.M && this.M.ka() && !this.Xi(a.target) && this.Ib(!1)
    }
    ;
    z.e.Xi = function(a) {
        return a && z.Vc(this.f(), a) || this.M && this.M.Xi(a) || !1
    }
    ;
    z.e.Me = function(a) {
        if (32 == a.keyCode) {
            if (a.preventDefault(),
            "keyup" != a.type)
                return !0
        } else if ("key" != a.type)
            return !1;
        if (this.M && this.M.ka()) {
            var b = 13 == a.keyCode || 32 == a.keyCode
              , c = this.M.Af(a);
            return 27 == a.keyCode || b && this.aO ? (this.Ib(!1),
            !0) : c
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Ib(!0, a),
        !0) : !1
    }
    ;
    z.e.Gn = function() {
        this.Ib(!1)
    }
    ;
    z.e.wR = function() {
        this.Bf() || this.Ib(!1)
    }
    ;
    z.e.Sh = function(a) {
        this.Mr || this.Ib(!1);
        gC.b.Sh.call(this, a)
    }
    ;
    z.e.Wl = function(a) {
        var b = this.M;
        if (a != b && (b && (this.Ib(!1),
        this.aa && jC(this, b, !1),
        delete this.M),
        this.aa && Np(this.c, "haspopup", !!a),
        a)) {
            this.M = a;
            a.xc(this);
            a.V(!1);
            var c = this.Mr;
            (a.su = c) && a.Ye(!0);
            this.aa && jC(this, a, !0)
        }
        return b
    }
    ;
    z.e.Wf = function(a) {
        hC(this).G(a, !0)
    }
    ;
    z.e.xk = function(a, b) {
        hC(this).xe(a, b, !0)
    }
    ;
    z.e.removeItem = function(a) {
        (a = hC(this).removeChild(a, !0)) && a.q()
    }
    ;
    z.e.bl = function(a) {
        return this.M ? this.M.ld(a) : null
    }
    ;
    z.e.Wq = function() {
        return this.M ? this.M.Cc() : 0
    }
    ;
    z.e.V = function(a, b) {
        var c = gC.b.V.call(this, a, b);
        c && !this.ka() && this.Ib(!1);
        return c
    }
    ;
    z.e.gc = function(a) {
        gC.b.gc.call(this, a);
        this.isEnabled() || this.Ib(!1)
    }
    ;
    z.e.Ib = function(a, b) {
        gC.b.Ib.call(this, a);
        if (this.M && !!(this.F & 64) == a) {
            if (a) {
                if (!this.M.aa)
                    if (this.yV) {
                        var c = Hi(this.f());
                        c ? z.Ap(this.M, c) : this.M.ra(this.f().parentNode)
                    } else
                        this.M.ra();
                this.YI = Gl(this.f());
                this.HC = Ol(this.f());
                iC(this);
                c = !!b && (13 == b.keyCode || 32 == b.keyCode);
                this.M.Pb(b && (40 == b.keyCode || 38 == b.keyCode) || c && this.UV ? 0 : -1)
            } else {
                this.setActive(!1);
                this.M.kg = !1;
                if (c = this.f())
                    Np(c, "activedescendant", ""),
                    Np(c, "owns", "");
                null != this.ns && (this.ns = void 0,
                (c = this.M.f()) && Jl(c, "", ""))
            }
            this.M.V(a, !1, b);
            if (!this.La) {
                var c = this.p()
                  , d = a ? c.e : c.Fa;
                d.call(c, this.R().la(), "mousedown", this.yQ, !0);
                this.Mr && d.call(c, this.M, "blur", this.wR);
                d.call(c, this.Ca, IG, this.Lx);
                a ? this.Ca.start() : this.Ca.stop()
            }
        }
        this.M && this.M.f() && this.M.c.removeAttribute("aria-hidden")
    }
    ;
    z.e.Lx = function() {
        var a = Ol(this.f())
          , b = Gl(this.f())
          , c = this.HC;
        (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.YI,
        c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.HC = a,
        this.YI = b,
        iC(this))
    }
    ;
    z.e.nw = function(a) {
        (a = a.target.f()) && lC(this, a)
    }
    ;
    z.e.fR = function(a) {
        jy(this, 32) && this.Nb() && this.M && this.M.ka() && a.stopPropagation()
    }
    ;
    z.e.Hw = function() {
        if (!jB(this.M)) {
            var a = this.f();
            Np(a, "activedescendant", "");
            Np(a, "owns", "")
        }
    }
    ;
    z.e.aw = function(a) {
        if (this.Ab() && a.target instanceof uB) {
            a = a.target;
            var b = a.f();
            a.ka() && a.F & 2 && null != b && lC(this, b)
        }
    }
    ;
    ny("goog-menu-button", function() {
        return new gC(null)
    });
    z.u(mC, gC);
    var oC = {
        AZ: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
        u0: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
        C_: "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
    };
    z.e = mC.prototype;
    z.e.Sv = function() {
        return this.Q()
    }
    ;
    z.e.Go = function(a) {
        this.ob(a)
    }
    ;
    z.e.ob = function(a) {
        for (var b = 0, c; c = this.bl(b); b++)
            "function" == typeof c.Go && c.Go(a);
        mC.b.ob.call(this, a)
    }
    ;
    z.e.Gn = function(a) {
        "function" == typeof a.target.Sv ? this.ob(a.target.Sv()) : "none" == a.target.Q() && this.ob(null);
        mC.b.Gn.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    }
    ;
    z.e.Ib = function(a, b) {
        a && 0 == this.Wq() && (this.Wl(nC(this.R())),
        this.ob(this.Q()));
        mC.b.Ib.call(this, a, b)
    }
    ;
    ny("goog-color-menu-button", function() {
        return new mC(null)
    });
    z.u(pC, LB);
    z.ca(pC);
    pC.prototype.P = function() {
        return "goog-toolbar-menu-button"
    }
    ;
    z.u(qC, pC);
    z.ca(qC);
    qC.prototype.createCaption = function(a, b) {
        return MB(OB(a, b), this.P(), b)
    }
    ;
    qC.prototype.ob = function(a, b) {
        a && PB(this.Ea(a), b)
    }
    ;
    qC.prototype.gg = function(a) {
        this.ob(a.f(), a.Q());
        Tp(a.f(), "goog-toolbar-color-menu-button");
        qC.b.gg.call(this, a)
    }
    ;
    z.u(rC, mC);
    ny("goog-toolbar-color-menu-button", function() {
        return new rC(null)
    });
    z.u(sC, gC);
    ny("goog-toolbar-menu-button", function() {
        return new sC(null)
    });
    z.u(tC, gC);
    z.e = tC.prototype;
    z.e.ga = null;
    z.e.m = function() {
        tC.b.m.call(this);
        vC(this);
        yC(this)
    }
    ;
    z.e.K = function(a) {
        tC.b.K.call(this, a);
        (a = this.vf()) ? uC(this, a) : this.xf() || this.Vc(0)
    }
    ;
    z.e.h = function() {
        tC.b.h.call(this);
        this.ga && (this.ga.q(),
        this.ga = null);
        this.av = null
    }
    ;
    z.e.Gn = function(a) {
        this.Mf(a.target);
        tC.b.Gn.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    }
    ;
    z.e.Jn = function() {
        var a = this.xf();
        tC.b.ob.call(this, a && a.Q());
        vC(this)
    }
    ;
    z.e.Wl = function(a) {
        var b = tC.b.Wl.call(this, a);
        a != b && (this.ga && this.ga.clear(),
        a && (this.ga ? a.Qc(function(a) {
            xC(a);
            this.ga.Wf(a)
        }, this) : wC(this, a)));
        return b
    }
    ;
    z.e.Wf = function(a) {
        xC(a);
        tC.b.Wf.call(this, a);
        this.ga ? this.ga.Wf(a) : wC(this, hC(this));
        zC(this)
    }
    ;
    z.e.xk = function(a, b) {
        xC(a);
        tC.b.xk.call(this, a, b);
        this.ga ? this.ga.xk(a, b) : wC(this, hC(this))
    }
    ;
    z.e.removeItem = function(a) {
        tC.b.removeItem.call(this, a);
        this.ga && this.ga.removeItem(a)
    }
    ;
    z.e.Mf = function(a) {
        if (this.ga) {
            var b = this.xf();
            this.ga.Mf(a);
            a != b && this.dispatchEvent("change")
        }
    }
    ;
    z.e.Vc = function(a) {
        this.ga && this.Mf(this.ga.bl(a))
    }
    ;
    z.e.ob = function(a) {
        if (null != a && this.ga)
            for (var b = 0, c; c = this.ga.bl(b); b++)
                if (c && "function" == typeof c.Q && c.Q() == a) {
                    this.Mf(c);
                    return
                }
        this.Mf(null)
    }
    ;
    z.e.Q = function() {
        var a = this.xf();
        return a ? a.Q() : null
    }
    ;
    z.e.xf = function() {
        return this.ga ? this.ga.xf() : null
    }
    ;
    z.e.wf = function() {
        return this.ga ? this.ga.wf() : -1
    }
    ;
    z.e.Ib = function(a, b) {
        tC.b.Ib.call(this, a, b);
        this.Ab() ? hC(this).Pb(this.wf()) : zC(this)
    }
    ;
    ny("goog-select", function() {
        return new tC(null)
    });
    z.u(AC, tC);
    ny("goog-toolbar-select", function() {
        return new AC(null)
    });
    var FC = [10, 10, 13, 16, 18, 24, 32, 48];
    var xI = {}
      , yI = L("Normal")
      , zI = L("Normal / serif")
      , PC = [{
        caption: yI,
        value: "arial,sans-serif"
    }, {
        caption: zI,
        value: "times new roman,serif"
    }, {
        caption: "Courier New",
        value: "courier new,monospace"
    }, {
        caption: "Georgia",
        value: "georgia,serif"
    }, {
        caption: "Trebuchet",
        value: "trebuchet ms,sans-serif"
    }, {
        caption: "Verdana",
        value: "verdana,sans-serif"
    }]
      , OC = {
        ja: [{
            caption: "\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af",
            value: "ms pgothic,sans-serif"
        }, {
            caption: "\uff2d\uff33 \uff30\u660e\u671d",
            value: "ms pmincho,serif"
        }, {
            caption: "\uff2d\uff33 \u30b4\u30b7\u30c3\u30af",
            value: "ms gothic,monospace"
        }],
        ko: [{
            caption: "\uad74\ub9bc",
            value: "gulim,sans-serif"
        }, {
            caption: "\ubc14\ud0d5",
            value: "batang,serif"
        }, {
            caption: "\uad74\ub9bc\uccb4",
            value: "gulimche,monospace"
        }],
        "zh-tw": [{
            caption: "\u65b0\u7d30\u660e\u9ad4",
            value: "pmingliu,serif"
        }, {
            caption: "\u7d30\u660e\u9ad4",
            value: "mingliu,serif"
        }],
        "zh-cn": [{
            caption: "\u5b8b\u4f53",
            value: "simsun,serif"
        }, {
            caption: "\u9ed1\u4f53",
            value: "simhei,sans-serif"
        }, {
            caption: "MS Song",
            value: "ms song,monospace"
        }]
    }
      , AI = L("Small")
      , BI = L("Normal")
      , CI = L("Large")
      , DI = L("Huge")
      , EC = [{
        caption: AI,
        value: 1
    }, {
        caption: BI,
        value: 2
    }, {
        caption: CI,
        value: 4
    }, {
        caption: DI,
        value: 6
    }]
      , EI = L("Heading")
      , FI = L("Subheading")
      , GI = L("Minor heading")
      , HI = L("Normal")
      , HC = [{
        caption: EI,
        Ia: "H2"
    }, {
        caption: FI,
        Ia: "H3"
    }, {
        caption: GI,
        Ia: "H4"
    }, {
        caption: HI,
        Ia: "P"
    }]
      , II = L("Format")
      , JI = L("Format")
      , KI = L("Undo")
      , LI = L("Redo")
      , MI = L("Font")
      , NI = L("Font size")
      , OI = L("Text color")
      , PI = L("Bold")
      , QI = L("Italic")
      , RI = L("Underline")
      , SI = L("Text background color")
      , TI = L("Add or remove link")
      , UI = L("Numbered list")
      , VI = L("Bullet list")
      , WI = L("Decrease indent")
      , XI = L("Increase indent")
      , YI = L("Align left")
      , ZI = L("Align center")
      , $I = L("Align right")
      , aJ = L("Justify")
      , bJ = L("Remove formatting")
      , cJ = L("Insert image")
      , dJ = L("Strikethrough")
      , eJ = L("Left-to-right")
      , fJ = L("Right-to-left")
      , gJ = L("Quote")
      , hJ = L("Edit HTML source")
      , iJ = L("Subscript")
      , jJ = L("Superscript")
      , kJ = L("Edit HTML")
      , RC = {};
    xI.Kz = [{
        Ia: "+undo",
        Ya: KI,
        Da: "tr-icon tr-undo",
        fe: TC,
        tb: !0
    }, {
        Ia: "+redo",
        Ya: LI,
        Da: "tr-icon tr-redo",
        fe: TC,
        tb: !0
    }, {
        Ia: "+fontName",
        Ya: MI,
        Da: "tr-fontName",
        fe: function(a, b, c, d, f, g) {
            var h = LC(a, b, c, d, f, g);
            NC(h);
            uC(h, yI);
            Tp(hC(h).Ea(), "goog-menu-noaccel");
            h.Di = function(a) {
                var b = null;
                a && 0 < a.length && (b = Dp(hC(h), BC(a)));
                b != h.xf() && h.Mf(b)
            }
            ;
            return h
        },
        tb: !0
    }, {
        Ia: "+fontSize",
        Ya: NI,
        Da: "tr-fontSize",
        fe: function(a, b, c, d, f, g) {
            var h = LC(a, b, c, d, f, g);
            DC(h);
            uC(h, BI);
            Tp(hC(h).Ea(), "goog-menu-noaccel");
            h.Di = function(a) {
                var b;
                if (b = z.p(a))
                    b = a.match(JG),
                    b = "px" == (b && b[0] || null);
                if (b)
                    a: {
                        a = (0,
                        window.parseInt)(a, 10);
                        b = FC;
                        var c = b.length - 1;
                        0 > c && (c = Math.max(0, b.length + c));
                        if (z.p(b))
                            a = z.p(a) && 1 == a.length ? b.lastIndexOf(a, c) : -1;
                        else {
                            for (; 0 <= c; c--)
                                if (c in b && b[c] === a) {
                                    a = c;
                                    break a
                                }
                            a = -1
                        }
                    }
                a = 0 < a ? a : null;
                a != h.Q() && h.ob(a)
            }
            ;
            return h
        },
        tb: !0
    }, {
        Ia: "+bold",
        Ya: PI,
        Da: "tr-icon tr-bold",
        tb: !0
    }, {
        Ia: "+italic",
        Ya: QI,
        Da: "tr-icon tr-italic",
        tb: !0
    }, {
        Ia: "+underline",
        Ya: RI,
        Da: "tr-icon tr-underline",
        tb: !0
    }, {
        Ia: "+foreColor",
        Ya: OI,
        Da: "tr-icon tr-foreColor",
        fe: function(a, b, c, d, f, g) {
            a = MC(a, b, c, d, f, g);
            a.Go("#000");
            a.Di = z.pa(UC, a);
            return a
        },
        tb: !0
    }, {
        Ia: "+backColor",
        Ya: SI,
        Da: "tr-icon tr-backColor",
        fe: function(a, b, c, d, f, g) {
            a = MC(a, b, c, d, f, g);
            a.Go("#FFF");
            a.Di = z.pa(UC, a);
            return a
        },
        tb: !0
    }, {
        Ia: "+link",
        Ya: TI,
        caption: uI,
        Da: "tr-link",
        tb: !0
    }, {
        Ia: "+insertOrderedList",
        Ya: UI,
        Da: "tr-icon tr-insertOrderedList",
        tb: !0
    }, {
        Ia: "+insertUnorderedList",
        Ya: VI,
        Da: "tr-icon tr-insertUnorderedList",
        tb: !0
    }, {
        Ia: "+outdent",
        Ya: WI,
        Da: "tr-icon tr-outdent",
        fe: IC
    }, {
        Ia: "+indent",
        Ya: XI,
        Da: "tr-icon tr-indent",
        fe: IC
    }, {
        Ia: "+justifyLeft",
        Ya: YI,
        Da: "tr-icon tr-justifyLeft",
        tb: !0
    }, {
        Ia: "+justifyCenter",
        Ya: ZI,
        Da: "tr-icon tr-justifyCenter",
        tb: !0
    }, {
        Ia: "+justifyRight",
        Ya: $I,
        Da: "tr-icon tr-justifyRight",
        tb: !0
    }, {
        Ia: "+justifyFull",
        Ya: aJ,
        Da: "tr-icon tr-justifyFull",
        tb: !0
    }, {
        Ia: "+removeFormat",
        Ya: bJ,
        Da: "tr-icon tr-removeFormat",
        fe: IC
    }, {
        Ia: "image",
        Ya: cJ,
        Da: "tr-icon tr-image",
        fe: IC
    }, {
        Ia: "+strikeThrough",
        Ya: dJ,
        Da: "tr-icon tr-strikeThrough",
        tb: !0
    }, {
        Ia: "+subscript",
        Ya: iJ,
        Da: "tr-icon tr-subscript",
        tb: !0
    }, {
        Ia: "+superscript",
        Ya: jJ,
        Da: "tr-icon tr-superscript",
        tb: !0
    }, {
        Ia: "ltr",
        Ya: eJ,
        Da: "tr-icon tr-ltr",
        tb: !0
    }, {
        Ia: "rtl",
        Ya: fJ,
        Da: "tr-icon tr-rtl",
        fe: function(a, b, c, d, f, g) {
            var h = KC(a, b, c, d, f, g);
            h.Di = function(a) {
                a = !!a;
                var b = h.getParent().f();
                a ? Tp(b, "tr-rtl-mode") : Vp(b, "tr-rtl-mode");
                ty(h, a)
            }
            ;
            return h
        },
        tb: !0
    }, {
        Ia: "+BLOCKQUOTE",
        Ya: gJ,
        Da: "tr-icon tr-BLOCKQUOTE",
        tb: !0
    }, {
        Ia: "+formatBlock",
        Ya: II,
        caption: JI,
        Da: "tr-formatBlock",
        fe: function(a, b, c, d, f, g) {
            var h = LC(a, b, c, d, f, g);
            GC(h);
            uC(h, HI);
            Tp(hC(h).Ea(), "goog-menu-noaccel");
            h.Di = function(a) {
                a = a && 0 < a.length ? a : null;
                a != h.Q() && h.ob(a)
            }
            ;
            return h
        },
        tb: !0
    }, {
        Ia: "editHtml",
        Ya: hJ,
        caption: kJ,
        Da: "tr-editHtml",
        fe: IC
    }];
    for (var lJ = 0, mJ; mJ = xI.Kz[lJ]; lJ++)
        RC[mJ.Ia] = mJ;
    delete xI.Kz;
    z.u(ZC, $k);
    ZC.prototype.Pq = null;
    ZC.prototype.Tc = null;
    var aD = "change"
      , bD = "delayedchange"
      , dD = {
        rY: "cvc",
        dL: "load",
        U0: "unload",
        cY: "beforechange",
        Ag: aD,
        zY: bD,
        dY: "beforefocus",
        nZ: "focus",
        gY: "blur",
        eY: "beforetab",
        IZ: "ifrsz",
        b0: "selectionchange"
    }
      , fD = 0
      , nJ = null;
    z.e = ZC.prototype;
    z.e.Tw = !1;
    z.e.RI = !1;
    z.e.pt = !1;
    z.e.f = function() {
        return this.Pq
    }
    ;
    z.e.addListener = function(a, b, c, d) {
        var f = this.f();
        hI && f && this.kb() && (f = f.ownerDocument);
        d ? rp(this.de, f, a, b, c, d) : this.de.e(f, a, b, c)
    }
    ;
    var eD = 15
      , cD = 250;
    ZC.prototype.kb = z.ug;
    ZC.prototype.sl = z.ug;
    ZC.prototype.YH = z.tg;
    var jD = {
        46: !0,
        8: !0
    };
    z.C || (jD[9] = !0);
    var kD = {
        86: !0,
        88: !0
    };
    z.kg && !z.H && (jD[229] = !0);
    ZC.prototype.Su = function() {
        this.de && this.de.me();
        if ((z.fh || z.dg) && this.kb() && this.YH()) {
            try {
                var a = this.cb.hb();
                a.removeEventListener("keydown", this.Pm, !1);
                a.removeEventListener("touchend", this.Pm, !1)
            } catch (b) {}
            delete this.Pm
        }
        if (z.G && this.kb()) {
            try {
                a = this.cb.hb(),
                a.removeEventListener("focus", this.Iu, !1),
                a.removeEventListener("blur", this.Hu, !1)
            } catch (c) {}
            delete this.Iu;
            delete this.Hu
        }
        this.ze && this.ze.stop();
        this.yq.stop()
    }
    ;
    ZC.prototype.h = function() {
        this.Tc && this.execCommand("clearlorem");
        this.ci = fD;
        for (var a in this.We) {
            var b = this.We[a];
            b.Rp() || b.disable(this)
        }
        this.cb = this.Pq = null;
        this.Su();
        this.Xk && (Vk(this.Xk),
        this.Xk = null);
        this.Hl = null;
        this.de && (this.de.q(),
        this.de = null);
        for (; a = this.yX.pop(); )
            a.q();
        nJ == this.id && (nJ = null);
        for (var c in this.We)
            a = this.We[c],
            a.DN && a.q();
        delete this.We;
        ZC.b.h.call(this)
    }
    ;
    var oJ = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
    ZC.prototype.Ly = function() {
        if (fI || !this.kb())
            this.de.e(this.f(), "DOMSubtreeModified", this.yw);
        else {
            var a = this.cb.la();
            this.de.e(a, oJ, this.yw, !0);
            this.de.e(a, "DOMAttrModified", (0,
            z.q)(this.IE, this, this.yw), !0)
        }
    }
    ;
    var pJ = {
        8: 1,
        9: 1,
        13: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        46: 1
    }
      , qJ = {
        65: !0,
        86: !0,
        88: !0
    }
      , pD = {
        8: 1,
        9: 1,
        13: 1,
        27: 1,
        33: 1,
        34: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    z.e = ZC.prototype;
    z.e.Tn = function(a, b) {
        for (var c = this.vj[a], d = z.Ya(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            if ((g.isEnabled(this) || tI[a]) && g[$C[a]].apply(g, d))
                return !0
        }
        return !1
    }
    ;
    z.e.$S = function(a, b) {
        for (var c = this.vj[a], d = z.Ya(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            (g.isEnabled(this) || tI[a]) && g[$C[a]].apply(g, d)
        }
    }
    ;
    z.e.Gs = function(a, b, c) {
        for (var d = this.vj[a], f = z.Ya(arguments, 1), g = 0; g < d.length; ++g) {
            var h = d[g];
            if (h.isEnabled(this) || tI[a])
                f[0] = h[$C[a]].apply(h, f)
        }
        return f[0]
    }
    ;
    z.e.pw = function(a) {
        (z.H || mD(this, a)) && !this.Tn(1, a) && mI && oD(this, a)
    }
    ;
    z.e.gR = function(a) {
        if (z.H) {
            if (!mD(this, a))
                return
        } else
            this.Xv = !0,
            this.Qk();
        this.Tn(2, a) || mI || oD(this, a)
    }
    ;
    z.e.hR = function(a) {
        z.H || !this.Xv && !iD(a) || this.Dn();
        this.Tn(3, a);
        sD(this, "selectionchange") || (pJ[a.keyCode] || (a.ctrlKey || a.metaKey) && qJ[a.keyCode]) && this.MH.start()
    }
    ;
    z.e.execCommand = function(a, b) {
        for (var c = arguments, d, f = this.vj[6], g = 0; g < f.length; ++g) {
            var h = f[g];
            if (h.isEnabled(this) && h.yj(a)) {
                d = h.execCommand.apply(h, c);
                break
            }
        }
        return d
    }
    ;
    z.e.queryCommandValue = function(a) {
        var b = 2 == this.ci && this.Zn;
        if (z.p(a))
            return this.Cs(a, b);
        for (var c = {}, d = 0; d < a.length; d++)
            c[a[d]] = this.Cs(a[d], b);
        return c
    }
    ;
    z.e.Cs = function(a, b) {
        for (var c = this.vj[7], d = 0; d < c.length; ++d) {
            var f = c[d];
            if (f.isEnabled(this) && f.yj(a) && (b || f.Rp()))
                return f.queryCommandValue(a)
        }
        return b ? null : !1
    }
    ;
    z.e.IE = function(a, b) {
        if (!sD(this, aD)) {
            var c = b.Sb;
            try {
                if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName)
                    return
            } catch (d) {
                return
            }
            c.prevValue != c.newValue && a.call(this, c)
        }
    }
    ;
    z.e.yw = function(a) {
        sD(this, aD) || (a = a.JP ? a.Sb : a,
        a.target.firebugIgnore || (this.Lr = this.Nr = !0,
        this.ze.start()))
    }
    ;
    z.e.KE = function() {
        z.C && this.execCommand("clearlorem", !0);
        z.H && this.dv();
        this.Zi()
    }
    ;
    z.e.Ra = function() {
        var a = this.cb && this.cb.hb();
        return a && Lz(a)
    }
    ;
    z.e.YR = function() {
        var a = this.LH;
        this.LH = null;
        rD(this, void 0, a)
    }
    ;
    z.e.Qk = function() {
        sD(this, "beforechange") || this.dispatchEvent("beforechange")
    }
    ;
    z.e.Zi = function(a) {
        vD(this, !0, a)
    }
    ;
    z.e.Dn = function() {
        sD(this, aD) || (this.ze && this.ze.stop(),
        this.Lr = this.Nr = !0,
        sD(this, bD) || this.yq.start())
    }
    ;
    z.e.xD = function() {
        sD(this, bD) || (this.yq.stop(),
        this.Nr = !1,
        this.dispatchEvent(bD))
    }
    ;
    z.e.dv = function() {
        this.wD();
        this.yD()
    }
    ;
    z.e.wD = function() {
        sD(this, "beforefocus") || (this.execCommand("clearlorem", !0),
        this.dispatchEvent("beforefocus"))
    }
    ;
    z.e.yD = function() {
        if (!sD(this, "focus")) {
            nJ = this.id;
            this.Zn = !0;
            this.dispatchEvent("focus");
            if (z.H) {
                var a = this.f()
                  , b = this.Ra();
                if (b) {
                    var c = Wy(b);
                    0 != Xy(b) || c && c != a && "BODY" != c.tagName || fA(a)
                }
            }
            !gI && this.kb() && this.cb.hb().parent.getSelection().removeAllRanges()
        }
    }
    ;
    z.e.Aq = function() {
        sD(this, "blur") || (nJ == this.id && (nJ = null),
        this.Zn = !1,
        this.dispatchEvent("blur"))
    }
    ;
    z.e.pr = function(a) {
        nJ = this.id;
        if (z.C) {
            var b = a.target;
            b && "A" == b.tagName && a.ctrlKey && this.Hl.hb().open(b.href)
        }
        this.pt = !0
    }
    ;
    z.e.AQ = function() {
        this.pt = !1
    }
    ;
    z.e.iF = function(a) {
        if (!this.RI || this.pt)
            this.pt = !1,
            rD(this, a),
            z.C && (this.LH = a.target,
            this.MH.start())
    }
    ;
    z.e.rg = function(a, b, c, d) {
        if (1 != this.ci) {
            d && this.execCommand("clearlorem");
            b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
            c && tD(this, !1);
            a = b;
            if (b = this.f()) {
                if (this.kb() && z.J)
                    for (var f = b.ownerDocument.getElementsByTagName("HEAD"), g = f.length - 1; 1 <= g; --g)
                        f[g].parentNode.removeChild(f[g])
            } else
                b = this.Tc;
            b && nD(this, a, b);
            d && this.execCommand("updatelorem");
            2 == this.ci && (c ? (z.H && gl(this.ze),
            vD(this)) : this.Zi())
        }
    }
    ;
    z.e.jt = function() {
        var a = this.cb.la();
        a.designMode = "on";
        NA && a.execCommand("styleWithCSS", !1, !1)
    }
    ;
    z.e.XF = function() {
        this.Kk && AD(this) && Rl(this.Kk, this.f())
    }
    ;
    z.e.focus = function() {
        if (!YC && this.kb())
            this.cb.hb().focus();
        else {
            if (z.G)
                var a = this.$p.pageXOffset
                  , b = this.$p.pageYOffset;
            this.f().focus();
            z.G && this.$p.scrollTo(a, b)
        }
    }
    ;
    z.e.xx = function(a) {
        var b = this.Tc;
        if (b) {
            var b = b.innerHTML
              , c = {}
              , b = this.Gs(8, b, c)
              , d = this.Hl.r("IFRAME", this.rE());
            if (AD(this)) {
                var f = (0,
                z.q)(this.NF, this, d, b, c);
                this.Xk = Jk(d, "load", f, !0);
                a && (d.src = a)
            }
            this.rC(d);
            AD(this) || this.NF(d, b, c)
        }
    }
    ;
    z.e.mr = function() {
        z.C && Qz(this.cb.hb());
        nJ != this.id && this.execCommand("updatelorem");
        if ((z.fh || z.dg) && this.kb() && this.YH()) {
            var a = this.cb.hb();
            this.Pm = (0,
            z.q)(a.focus, a);
            a.addEventListener("keydown", this.Pm, !1);
            a.addEventListener("touchend", this.Pm, !1)
        }
        z.G && this.kb() ? (this.Iu = (0,
        z.q)(this.dv, this),
        this.Hu = (0,
        z.q)(this.Aq, this),
        a = this.cb.hb(),
        a.addEventListener("focus", this.Iu, !1),
        a.addEventListener("blur", this.Hu, !1)) : (lI ? (this.addListener("focus", this.yD),
        this.addListener(HG, this.wD)) : this.addListener("focus", this.dv),
        this.addListener("blur", this.Aq, z.H));
        z.H ? this.Ly() : (this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.Qk),
        this.addListener(["cut", "paste"], Qi(this.Zi)),
        this.addListener("drop", this.KE));
        this.addListener(z.J ? "dragend" : "dragdrop", this.KE);
        this.addListener("keydown", this.pw);
        this.addListener("keypress", this.gR);
        this.addListener("keyup", this.hR);
        this.MH = new fl(this.YR,250,this);
        this.BP && this.addListener("click", wD);
        this.addListener("mousedown", this.pr);
        this.RI ? (this.de.e(this.cb.la(), "mouseup", this.iF),
        this.addListener("dragstart", this.AQ)) : this.addListener("mouseup", this.iF);
        this.XF();
        vD(this);
        this.dispatchEvent("load");
        for (var b in this.We)
            this.We[b].enable(this)
    }
    ;
    z.e.rC = function(a) {
        var b = this.Tc;
        a.className = b.className;
        a.id = b.id;
        Ji(a, b)
    }
    ;
    z.e.Jv = function(a) {
        var b = Oh(z.Dc(this.Tc));
        return new VC(this.id,b,!1,!1,a)
    }
    ;
    z.e.dJ = function(a, b, c) {
        c = this.Jv(c);
        AD(this) ? (a = (a.contentDocument || a.contentWindow.document).body,
        YC && (a.contentEditable = !0),
        a.className = "editable",
        a.setAttribute("g_editable", !0),
        a.hideFocus = !0,
        a.id = c.XD,
        z.vl(a, c.pv),
        a.innerHTML = b) : XC(c, b, new WC(this.f(),this.Kk), a)
    }
    ;
    z.e.NF = function(a, b, c) {
        this.Xk && (Vk(this.Xk),
        this.Xk = null);
        a.allowTransparency = "true";
        this.dJ(a, b, c);
        lD(this, (a.contentDocument || a.contentWindow.document).body);
        !YC && this.kb() && this.jt();
        this.mr()
    }
    ;
    z.e.rE = function() {
        var a = "padding:0;" + this.Tc.style.cssText;
        z.va(a, ";") || (a += ";");
        a += "background-color:white;";
        z.C && (a += "overflow:visible;");
        return {
            frameBorder: 0,
            style: a
        }
    }
    ;
    z.u(BD, $k);
    z.e = BD.prototype;
    z.e.p = function() {
        return this.pa
    }
    ;
    z.e.ka = function() {
        return this.Ka.ka()
    }
    ;
    z.e.V = function(a) {
        this.Ka.V(a)
    }
    ;
    z.e.isEnabled = function() {
        return this.Ka.isEnabled()
    }
    ;
    z.e.gc = function(a) {
        this.Ka.gc(a)
    }
    ;
    z.e.blur = function() {
        this.Ka.Sh(null)
    }
    ;
    z.e.h = function() {
        BD.b.h.call(this);
        this.pa && (this.pa.q(),
        delete this.pa);
        this.Ka && (this.Ka.q(),
        delete this.Ka);
        delete this.Z;
        delete this.Wx
    }
    ;
    z.e.hX = function(a) {
        if (this.Ka.isEnabled() && this.dispatchEvent("change")) {
            var b;
            try {
                b = this.Z.queryCommandValue(a.eO || this.Wx)
            } catch (c) {
                b = {}
            }
            a = b;
            for (var d in a)
                if (b = Dp(this.Ka, d)) {
                    var f = a[d];
                    b.Di ? b.Di(f) : ty(b, !!f)
                }
        }
    }
    ;
    z.e.WP = function(a) {
        var b = yp(a.target);
        this.Z.execCommand(b, a.target.Q())
    }
    ;
    z.u(DD, Iy);
    var rJ = ["+bold", "+italic", "+underline", "+insertOrderedList", "+insertUnorderedList"]
      , sJ = {
        wZ: "fyre-format-button",
        PB: "fyre-format-toolbar"
    };
    DD.prototype.Zd = function(a) {
        DD.b.Zd.call(this, a);
        a = this.p();
        a.e(this.dc(), "fyre.v2.editor.EVENTS.FORMAT_CLICKED", this.SE);
        a.e(this.dc().f(), "keypress", function(a) {
            13 === a.keyCode && (a.preventDefault(),
            this.SE())
        })
    }
    ;
    DD.prototype.oj = function() {
        return ["format", this.C.j.y1, "fyre-format-button", "editor format text"]
    }
    ;
    DD.prototype.SE = function() {
        if (!this.Kj) {
            var a = -1 < z.Na(rJ, "+link");
            this.C.iv && !a && rJ.splice(3, 0, "+link");
            var a = z.ji("DIV", sJ.PB)
              , b = QC(rJ, a);
            b.Qc(function(a) {
                Ai(a.f(), !0);
                z.Hc(a.f(), {
                    "aria-label": "format " + a.Pf
                })
            });
            new BD(this.Z,b);
            Jy(this, a, this.Ka.f())
        }
        Ly(this)
    }
    ;
    DD.prototype.uo = function() {
        hD(this.Z, new bB)
    }
    ;
    z.u(ED, Ey);
    ED.prototype.Zd = function(a) {
        ED.b.Zd.call(this, a);
        a = (0,
        z.q)(function() {
            var a = z.F.eb() || this.C.LT;
            this.Nc && this.Nc.V(a)
        }, this);
        z.Mh(z.F, z.F.k.X, a);
        a();
        this.p().e(this.dc().f(), "keypress", function(a) {
            13 === a.keyCode && (a.preventDefault(),
            this.dispatchEvent({
                CC: this,
                type: "fyre.v2.editor.EVENTS.MEDIA_UPLOAD_CLICKED"
            }))
        })
    }
    ;
    ED.prototype.S = function() {
        z.F.off(null, null, this);
        ED.b.S.call(this)
    }
    ;
    ED.prototype.oj = function() {
        return ["media", this.C.j.N1, "fyre-embed-button", "editor add media"]
    }
    ;
    FD.prototype.nH = function() {
        this.wX.closed ? (this.stop(),
        this.IC()) : this.timeout = (0,
        window.setTimeout)((0,
        z.q)(this.nH, this), 50)
    }
    ;
    FD.prototype.start = function() {
        this.timeout = (0,
        window.setTimeout)((0,
        z.q)(this.nH, this), 50);
        z.oh(this.duration) && (this.ED = (0,
        window.setTimeout)((0,
        z.q)(function() {
            this.stop();
            this.IC()
        }, this), this.duration))
    }
    ;
    FD.prototype.stop = function() {
        (0,
        window.clearTimeout)(this.ED);
        (0,
        window.clearTimeout)(this.timeout)
    }
    ;
    z.u(GD, py);
    var gy = "fyre-mention-item";
    z.e = GD.prototype;
    z.e.r = function() {
        GD.b.r.call(this);
        this.ra()
    }
    ;
    z.e.m = function() {
        GD.b.m.call(this);
        this.l.on("change", this.ra, this);
        this.l.on("visible", this.V, this);
        this.p().e(this, "action", this.ow)
    }
    ;
    z.e.S = function() {
        this.l.off(null, null, this);
        GD.b.S.call(this)
    }
    ;
    z.e.vf = function() {
        return this.l.get("display_name")
    }
    ;
    z.e.t = function() {
        return {
            Lc: this.l.get("avatar"),
            da: this.l.get("display_name"),
            le: this.l.get("provider")
        }
    }
    ;
    z.e.ow = function(a) {
        a.stopPropagation();
        this.dispatchEvent({
            fo: this.l,
            type: "mentionSelected"
        })
    }
    ;
    z.e.ra = function() {
        if (this.l) {
            var a = this.t();
            z.dk(this.c, gy + "-" + a.le);
            var b = this.c
              , a = (0,
            z.Q)('\x3cimg src\x3d"' + z.R(z.S(a.Lc)) + '" class\x3d"fyre-mention-item-avatar" alt\x3d"' + z.R(a.da) + '" /\x3e\x3ch4 class\x3d"fyre-mention-item-display-name"\x3e' + z.P(a.da) + '\x3c/h4\x3e\x3cspan class\x3d"fyre-mention-item-' + z.R(a.le) + '"\x3e\x3c/span\x3e');
            b.innerHTML = a
        }
    }
    ;
    z.e.Oa = z.n;
    z.e.V = function(a, b) {
        this.ba && GD.b.V.call(this, a, b)
    }
    ;
    z.u(HD, HB);
    z.ca(HD);
    HD.prototype.P = function() {
        return "fyre-mention-menu"
    }
    ;
    z.u(ID, $k);
    ID.prototype.handleEvent = function(a) {
        if ("input" == a.type)
            z.C && z.B(10) && 0 == a.keyCode && 0 == a.charCode || (JD(this),
            z.G && this.c != z.Fc(this.c).activeElement || this.dispatchEvent(KD(a)));
        else if ("keydown" != a.type || Xp(a)) {
            var b = "keydown" == a.type ? this.c.value : null;
            z.C && 229 == a.keyCode && (b = null);
            var c = KD(a);
            JD(this);
            this.Ca = el(function() {
                this.Ca = null;
                this.c.value != b && this.dispatchEvent(c)
            }, 0, this)
        }
    }
    ;
    ID.prototype.h = function() {
        ID.b.h.call(this);
        this.uc.q();
        JD(this);
        delete this.c
    }
    ;
    z.u(LD, pB);
    z.ca(LD);
    LD.prototype.P = function() {
        return "goog-filterobsmenuitem"
    }
    ;
    z.u(MD, uB);
    MD.prototype.hs = null;
    MD.prototype.m = function() {
        MD.b.m.call(this);
        this.hs && this.hs(this, "")
    }
    ;
    ny("goog-filterobsmenuitem", function() {
        return new MD(null)
    });
    z.u(ND, IB);
    z.e = ND.prototype;
    z.e.xG = 0;
    z.e.bo = "";
    z.e.nC = !1;
    z.e.fP = 0;
    z.e.r = function() {
        ND.b.r.call(this);
        var a = this.R()
          , b = a.r("div", this.ba.P() + "-filter", this.je = a.r("div", null, this.bo), this.Mb = a.r("input", {
            type: "text"
        }))
          , c = this.f();
        a.appendChild(c, b);
        b = yp(this) + ".content-el";
        this.uq = a.r("div", {
            "class": this.ba.P() + "-content",
            id: b
        });
        a.appendChild(c, this.uq);
        OD(this);
        Np(this.Mb, "autocomplete", "list");
        Np(this.Mb, "owns", b);
        Np(this.Mb, "expanded", !0)
    }
    ;
    z.e.V = function(a, b, c) {
        (b = ND.b.V.call(this, a, b, c)) && a && this.aa ? (this.Mb && (this.Mb.value = "",
        this.hn("")),
        !this.rl && this.Mb && (this.rl = new ID(this.Mb),
        Sl(this.Mb, !1),
        Jk(this.rl, "input", this.PE, !1, this),
        Jk(this.Mb.parentNode, "click", this.QG, !1, this),
        this.nC && (this.Mq = []))) : b && !a && PD(this);
        return b
    }
    ;
    z.e.h = function() {
        PD(this);
        this.je = this.Mb = void 0;
        ND.b.h.call(this)
    }
    ;
    z.e.PE = function() {
        this.hn(this.Mb.value);
        var a = jB(this);
        a && a.ka() || kB(this);
        this.dispatchEvent("filterchange")
    }
    ;
    z.e.hn = function(a) {
        if (this.yv != a) {
            this.je && (this.je.style.visibility = "" == a ? "visible" : "hidden");
            if (this.nC && this.Mq) {
                var b = a.match(/^(.+),[ ]*([^,]*)$/)
                  , c = b && b[1] ? b[1].split(",") : [];
                if ("," == a.substr(a.length - 1, 1) || c.length != this.Mq.length) {
                    var d = c[c.length - 1] || "";
                    if (jB(this) && "" != d) {
                        var f = jB(this).vf();
                        0 == f.toLowerCase().indexOf(d.toLowerCase()) && (c[c.length - 1] = f,
                        this.Mb.value = c.join(",") + ",")
                    }
                    this.Mq = c;
                    this.dispatchEvent("change");
                    this.Pb(-1)
                }
                b && (a = 2 < b.length ? z.xa(b[2]) : "")
            }
            b = new RegExp("(^|[- ,_/.:])" + li(a),"i");
            for (c = this.fP; d = this.ld(c); c++)
                if (d instanceof MD)
                    d.hs && d.hs(d, a || "");
                else if (!QD(this, d))
                    if (f = d.vf()) {
                        var g = f.match(b);
                        if ("" == a || g) {
                            d.V(!0);
                            (g = f.indexOf(g[0])) && g++;
                            var f = d
                              , d = g
                              , g = a.length
                              , h = f.vf()
                              , k = void 0;
                            if (0 == g)
                                k = this.R().createTextNode(h);
                            else
                                var k = h.substr(0, d)
                                  , m = h.substr(d, g)
                                  , d = h.substr(d + g)
                                  , k = this.R().r("span", null, k, this.R().r("b", null, m), d);
                            (d = f.jE && f.jE()) ? f.Oa([k, this.R().r("span", "goog-menuitem-accel", d)]) : f.Oa(k)
                        } else
                            d.V(!1)
                    } else
                        d.V("" == a);
            this.yv = a
        }
    }
    ;
    z.e.Me = function(a) {
        return a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode ? !1 : 27 == a.keyCode ? (this.dispatchEvent("blur"),
        !0) : ND.b.Me.call(this, a)
    }
    ;
    z.e.Pb = function(a) {
        ND.b.Pb.call(this, a);
        a = this.Ea();
        var b = jB(this) ? jB(this).f() : null;
        this.Mb && Qp(this.Mb, b);
        if (b && z.Vc(a, b)) {
            var c = z.C && !z.B(8) ? 0 : a.offsetTop
              , d = b.offsetTop + b.offsetHeight - c - (a.clientHeight + a.scrollTop) + 1;
            a.scrollTop += Math.max(d, 0);
            d = a.scrollTop - (b.offsetTop - c) + 1;
            a.scrollTop -= Math.max(d, 0)
        }
    }
    ;
    z.e.QG = function() {
        this.Mb.focus()
    }
    ;
    z.e.Ea = function() {
        return this.uq || this.f()
    }
    ;
    z.e.K = function(a) {
        this.c = a;
        KB(this, a);
        var b = this.R();
        a = th(b.Ma, "div", this.ba.P() + "-filter", a)[0];
        this.je = z.Sc(a);
        this.Mb = Hi(this.je);
        this.uq = Hi(a);
        eB(this.ba, this, a.parentNode, this.uq);
        OD(this)
    }
    ;
    z.u(RD, ND);
    var $D = {
        kZ: "fetchFriends",
        lZ: "fetchFriendsComplete",
        KK: "hidden",
        o0: "shown"
    };
    z.A($D, {
        Rt: "mentionSelected"
    });
    var UD = "conv"
      , VD = "soc"
      , bE = {
        zJ: UD,
        Gi: "custom",
        s0: VD
    }
      , tJ = {};
    tJ[UD] = "";
    tJ.custom = "";
    tJ[VD] = "";
    var SD = [UD, VD, "custom"]
      , YD = {};
    YD[UD] = 10;
    YD.custom = 2;
    YD[VD] = 10;
    z.e = RD.prototype;
    z.e.lC = function(a, b) {
        var c = b.get(z.Nd.za);
        z.$h(c) || b instanceof z.Md && (b.Qe() || b.Zh()) || b.Gb() || WD(this, a, b.fm())
    }
    ;
    z.e.nO = function(a) {
        a.preventDefault();
        a.stopPropagation();
        a = z.gi(a.target, null, "fyre-provider-connect");
        var b = a.getAttribute("data-provider")
          , b = (0,
        z.q)(this.pQ, this, b);
        a = z.ef(a.href, {
            height: 400,
            width: 770
        });
        this.dH = new FD(a,b,16E4);
        this.dH.start()
    }
    ;
    z.e.m = function() {
        RD.b.m.call(this);
        if (!z.cb(this.sq)) {
            var a = z.xo($x, this.t());
            z.Ki(this.c, a);
            z.dk(this.c, "fyre-mention-connections");
            cE(this)
        }
        a = lH.X0;
        this.p().e(this.Sk, a, this.qQ);
        z.w(SD, function(a) {
            this.G(this.vy[a], !0)
        }, this);
        this.ux = new z.xh({
            provider: "livefyre",
            jid: "custom@livefyre.com",
            custom: !0
        });
        WD(this, "custom", this.ux)
    }
    ;
    z.e.h = function() {
        this.Vd && this.Vd.off(null, null, this);
        this.wc && this.wc.off(null, null, this);
        this.Sq && this.Sq.off(null, null, this);
        RD.b.h.call(this)
    }
    ;
    z.e.hn = function(a) {
        this.cp = null;
        this.ux.set({
            display_name: z.p(a) ? a.split(" ")[0] : ""
        });
        RD.b.hn.call(this, a);
        z.y(XD(this), this.gP, this);
        z.$h(a) && this.ux.O("visible", !1)
    }
    ;
    z.e.gP = function(a, b) {
        for (var c = a.length, d, f, g; c > YD[b]; )
            d = this.removeChild(a.pop()),
            f = d.l,
            g = f.get("jid"),
            cj(this.gy[b], g),
            this.Hh[b][g] = f,
            d.q(),
            c--;
        c >= YD[b] || $i(this.Hh[b], function(a, d) {
            ZD(this, a) && (WD(this, b, a),
            (0,
            window.setTimeout)((0,
            z.q)(function() {
                delete this.Hh[b][d]
            }, this), 50),
            c++);
            return c >= YD[b]
        }, this)
    }
    ;
    z.e.t = function() {
        return {
            j: {
                Bx: this.C.j.Bx
            }
        }
    }
    ;
    z.e.pQ = function(a) {
        this.dispatchEvent("fetchFriends");
        var b = this.o("fyre-provider-" + a);
        z.dk(b, "fyre-provider-fetching");
        a = a.split("_")[0] + "_fetching";
        th(window.document, "label", null, b)[0].innerHTML = this.VC[a]
    }
    ;
    z.e.qQ = function(a) {
        this.sq = a.rq;
        cE(this)
    }
    ;
    z.e.xQ = function(a) {
        z.gi(a.target, null, "fyre-mention-menu") || this.V(!1)
    }
    ;
    z.e.wr = function(a) {
        var b = this.R().la()
          , c = this.p();
        (a ? c.e : c.Fa).call(c, b, "click", this.xQ, !1, this);
        this.dispatchEvent(a ? "shown" : "hidden")
    }
    ;
    z.e.RS = function(a) {
        var b = new py(tJ[a]);
        b.gc(!1);
        this.gy[a] = [];
        this.Hh[a] = {};
        this.vy[a] = b;
        this.ts || (this.ts = {});
        this.ts[yp(b)] = !0
    }
    ;
    z.e.V = function(a, b, c) {
        RD.b.V.call(this, a, b, c);
        (0,
        window.setTimeout)((0,
        z.q)(this.wr, this, a), 10)
    }
    ;
    z.u(eE, xA);
    var uJ = [9, 32];
    z.e = eE.prototype;
    z.e.h = function() {
        Uk(this.M, $D.Rt, this.bF, !1, this);
        eE.b.h.call(this)
    }
    ;
    z.e.jj = function(a, b) {
        var c = this.Hv(), d;
        d = {
            da: b.get("display_name"),
            kG: b.get("jid"),
            prefix: b.get("prefix"),
            Ba: b.get("profile_url"),
            le: b.get("provider"),
            handle: b.get("handle")
        };
        d = Jp(d);
        var c = z.Qh(c.Ma, d)
          , f = this.B.Ra();
        d = window.document.createTextNode("\u00a0");
        this.B.clear();
        this.rc ? (Ji(c, this.rc),
        fE(this)) : f ? f.Js(c) : (f = Ii(this.B.f()),
        f.appendChild(window.document.createTextNode(" ")),
        f.appendChild(c));
        Li(d, c);
        gE(this, d);
        this.M.Uc();
        this.M.V(!1)
    }
    ;
    z.e.Hv = z.Jd(function() {
        return this.B.cb
    });
    z.e.Qh = z.Gb("+mention");
    z.e.rj = function(a) {
        var b = 13 == a.keyCode
          , c = 9 == a.keyCode
          , d = 8 == a.keyCode
          , f = 38 == a.keyCode
          , g = 40 == a.keyCode;
        this.rc && !this.rc.parentNode && fE(this);
        if (d) {
            a: {
                var d = this.B.Ra()
                  , h = Ty(d);
                if (z.jk(h, "fyre-mention"))
                    d = h;
                else {
                    if (h.parentNode) {
                        if (z.jk(h.parentNode, "fyre-mention")) {
                            d = h.parentNode;
                            break a
                        }
                        if (0 === d.$a() && h.previousSibling && z.jk(h.previousSibling, "fyre-mention")) {
                            d = h.previousSibling;
                            break a
                        }
                    }
                    d = void 0
                }
            }
            if (d)
                return z.Oc(d),
                !0
        }
        if (this.M.ka()) {
            if (jB(this.M) && (b || c))
                return this.jj("+mention", Cp(jB(this.M))),
                a.preventDefault(),
                a.stopPropagation(),
                !0;
            if (f || g)
                f ? oB(this.M) : nB(this.M),
                a.preventDefault(),
                a.stopPropagation()
        }
        this.rc && b && fE(this)
    }
    ;
    z.e.YE = function(a) {
        if ("@" === String.fromCharCode(a.charCode))
            return this.rc && fE(this),
            this.rc = this.Hv().r("SPAN", "fyre-mention-partial", "@"),
            this.B.Ra().Js(this.rc),
            gE(this, this.rc.childNodes[0]),
            this.M.V(!0),
            a.preventDefault(),
            !0
    }
    ;
    z.e.qw = function(a) {
        var b = z.Sa(uJ, a.keyCode);
        Xp(a) && hE(this);
        b && this.rc && !iE(this) && fE(this)
    }
    ;
    z.e.bF = function(a) {
        this.jj("+mention", a.fo)
    }
    ;
    z.e.Jn = function() {
        var a = this.B.Ra(), a = a ? Ty(a) : null, b;
        if (b = a) {
            b = "SPAN" == a.tagName;
            var c = z.jk(a, "fyre-mention-partial");
            b = b && c
        }
        b ? (this.rc = a,
        this.M.V(!0)) : (this.rc = null,
        this.M.V(!1));
        hE(this)
    }
    ;
    z.e.yj = function(a) {
        return "+mention" == a
    }
    ;
    z.e.reset = function() {
        this.rc = null
    }
    ;
    z.u(z.jE, Ey);
    z.e = z.jE.prototype;
    z.e.Zd = function(a) {
        z.jE.b.Zd.call(this, a);
        var b = this.p();
        a.G(this.jg);
        b.e(this.jg, "shown", this.cF);
        b.e(this.jg, "hidden", this.cF);
        b.e(this.dc(), "fyre.v2.editor.EVENTS.MENTION_CLICKED", this.ir);
        b.e(this.dc().f(), "keypress", function(a) {
            13 === a.keyCode && (a.preventDefault(),
            this.ir(a))
        })
    }
    ;
    z.e.oj = function() {
        return ["mention", "", "fyre-mention-button", "editor mention user"]
    }
    ;
    z.e.ir = function() {
        var a = this.jg.ka();
        this.jg.V(!a);
        z.kE(this, !a)
    }
    ;
    z.e.cF = function(a) {
        z.kE(this, "shown" === a.type)
    }
    ;
    z.e.Fr = z.l(68);
    z.e.isSupported = function() {
        return !z.C || z.lb(9)
    }
    ;
    z.e.uo = function() {
        var a = new eE(this.jg);
        hD(this.Z, a)
    }
    ;
    z.u(lE, Ey);
    lE.prototype.Zd = function(a) {
        lE.b.Zd.call(this, a);
        this.p().e(this.Sk, "fyre.v2.editor.EVENTS.USER_CHANGE", this.Rc)
    }
    ;
    lE.prototype.oj = function() {
        return ["post", mE(this), "fyre-post-button fyre-post-button-" + this.C.li, "editor post comment"]
    }
    ;
    lE.prototype.Rc = function(a) {
        this.qh = a.user;
        this.Nc.Ay(mE(this))
    }
    ;
    z.u(nE, ey);
    z.ca(nE);
    z.e = nE.prototype;
    z.e.Lh = function() {}
    ;
    z.e.U = function(a, b) {
        ry(a, !1);
        a.nf &= -256;
        a.hc(32, !1);
        nE.b.U.call(this, a, b);
        a.Oa(b.value);
        return b
    }
    ;
    z.e.r = function(a) {
        ry(a, !1);
        a.nf &= -256;
        a.hc(32, !1);
        return a.R().r("textarea", {
            "class": this.Mh(a).join(" "),
            disabled: !a.isEnabled()
        }, a.mb() || "")
    }
    ;
    z.e.vd = function(a) {
        return "TEXTAREA" == a.tagName
    }
    ;
    z.e.lh = z.n;
    z.e.Cf = function(a) {
        return a.isEnabled()
    }
    ;
    z.e.Ye = z.n;
    z.e.Hc = function(a, b, c) {
        nE.b.Hc.call(this, a, b, c);
        (a = a.f()) && 1 == b && (a.disabled = c)
    }
    ;
    z.e.Sf = z.n;
    z.e.Oa = function(a, b) {
        a && (a.value = b)
    }
    ;
    z.e.P = function() {
        return "goog-textarea"
    }
    ;
    z.u(oE, py);
    var vJ = z.H || z.J || z.C && z.lb(11);
    z.e = oE.prototype;
    z.e.vl = !1;
    z.e.yr = !1;
    z.e.il = !1;
    z.e.Xg = 0;
    z.e.ET = 0;
    z.e.Dj = 0;
    z.e.CF = !1;
    z.e.es = !1;
    z.e.ty = !1;
    z.e.sy = !1;
    z.e.Jl = "";
    z.e.RH = function(a) {
        this.Dj = a;
        this.resize()
    }
    ;
    z.e.ob = function(a) {
        this.Oa(String(a))
    }
    ;
    z.e.Q = function() {
        return this.f().value != this.Jl || rE(this) || this.il ? this.f().value : ""
    }
    ;
    z.e.Oa = function(a) {
        oE.b.Oa.call(this, a);
        this.il = "" != a;
        this.resize()
    }
    ;
    z.e.gc = function(a) {
        oE.b.gc.call(this, a);
        this.f().disabled = !a
    }
    ;
    z.e.resize = function() {
        this.f() && this.fr()
    }
    ;
    z.e.m = function() {
        oE.b.m.call(this);
        var a = this.f();
        z.vl(a, {
            overflowY: "hidden",
            overflowX: "auto",
            boxSizing: "border-box",
            MsBoxSizing: "border-box",
            WebkitBoxSizing: "border-box",
            MozBoxSizing: "border-box"
        });
        this.Hj = Wl(a);
        this.Gu = Xl(a);
        this.p().e(a, "scroll", this.fr).e(a, "focus", this.fr).e(a, "keyup", this.fr).e(a, "mouseup", this.bU).e(a, "blur", this.HN);
        sE(this);
        this.resize()
    }
    ;
    z.e.qi = function(a) {
        this.Xg != a && (this.Xg = a,
        this.f().style.height = a + "px")
    }
    ;
    var tE = "textarea-placeholder-input";
    oE.prototype.HN = function() {
        rE(this) || (this.yr = !1,
        "" == this.f().value && (this.il = !1,
        sE(this)))
    }
    ;
    oE.prototype.fr = function(a) {
        if (!this.vl) {
            var b = this.f();
            !rE(this) && a && "focus" == a.type && (b.value == this.Jl && this.Jl && !this.yr && (Vp(b, tE),
            b.value = ""),
            this.yr = !0,
            this.il = "" != b.value);
            var c = !1;
            this.vl = !0;
            a = this.Xg;
            if (b.scrollHeight) {
                var d = !1, f = !1, g = uE(this), h = b.offsetHeight, k = qE(this), m;
                m = this.ET;
                var r = this.f();
                m && r && this.es && (m -= pE(this));
                k && g < k ? (this.qi(k),
                d = !0) : m && g > m ? (this.qi(m),
                b.style.overflowY = "",
                f = !0) : h != g ? this.qi(g) : this.Xg || (this.Xg = g);
                d || f || !vJ || (c = !0)
            } else
                vE(this);
            this.vl = !1;
            c && (b = this.f(),
            this.vl || (this.vl = !0,
            (f = b.scrollHeight) ? (g = uE(this),
            c = qE(this),
            c && g <= c || (d = this.Hj,
            b.style.paddingBottom = d.bottom + 1 + "px",
            uE(this) == g && (b.style.paddingBottom = d.bottom + f + "px",
            b.scrollTop = 0,
            f = uE(this) - f,
            f >= c ? this.qi(f) : this.qi(c)),
            b.style.paddingBottom = d.bottom + "px")) : vE(this),
            this.vl = !1));
            a != this.Xg && this.dispatchEvent("resize")
        }
    }
    ;
    oE.prototype.bU = function() {
        var a = this.f()
          , b = a.offsetHeight;
        a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
        b != this.Xg && (this.Xg = this.Dj = b)
    }
    ;
    z.u(wE, Ey);
    z.e = wE.prototype;
    z.e.clear = function() {
        this.fg = null
    }
    ;
    z.e.Zd = function(a) {
        wE.b.Zd.call(this, a);
        z.N(this.Nc.f(), !1);
        this.C.rV && (z.N(this.Nc.f(), this.qh.Ue),
        a = this.p(),
        a.e(this.Sk, "fyre.v2.editor.EVENTS.USER_CHANGE", this.Rc),
        a.e(this.dc(), "fyre.v2.editor.EVENTS.RAW_CLICKED", this.lF),
        a.e(this.dc().f(), "keypress", function(a) {
            13 === a.keyCode && (a.preventDefault(),
            this.lF())
        }))
    }
    ;
    z.e.oj = function() {
        return ["raw", "", "fyre-raw-button", "editor html embed"]
    }
    ;
    z.e.Pv = function() {
        return this.fg ? this.fg : null
    }
    ;
    z.e.lF = function() {
        var a = new oE;
        a.Vp("fyre-editor-rawhtml");
        this.fg && a.ob(this.fg);
        var b = Jq.D();
        uq(b, this.C.j.sO);
        b.G(a, !0);
        b.e(Bq, (0,
        z.q)(function(b) {
            b.key === Eq.key && this.Cw(a)
        }, this));
        b.open();
        a.RH(200);
        a.f().focus()
    }
    ;
    z.e.Cw = function(a) {
        a = a.Q();
        this.fg = z.$h(null == a ? "" : String(a)) ? null : a;
        this.dispatchEvent({
            ol: a,
            type: "fyre.v2.editor.EVENTS.RAW_SUBMITTED"
        })
    }
    ;
    z.e.Rc = function(a) {
        this.qh = a.user;
        z.N(this.Nc.f(), a.user.Ue)
    }
    ;
    z.ca(xE);
    var wJ = {};
    wJ.cancel = Fy;
    wJ.follow = Gy;
    wJ.format = DD;
    wJ.media = ED;
    wJ.mention = z.jE;
    wJ.post = lE;
    wJ.raw = wE;
    z.u(yE, xA);
    yE.prototype.Qh = function() {
        return "KeyShortcutHandler"
    }
    ;
    var xJ = {
        shortcut_modifier_enter: function(a, b) {
            return b && 13 === a.keyCode
        },
        shortcut_enter: function(a) {
            return 13 === a.keyCode
        }
    };
    yE.prototype.rw = function(a, b, c) {
        var d = !1;
        z.w(this.XO, function(b) {
            xJ[b](a, c) && (this.B.dispatchEvent(b),
            d = !0)
        }, this);
        return d
    }
    ;
    z.u(z.zE, z.D);
    z.e = z.zE.prototype;
    z.e.zb = 0;
    z.e.oy = 0;
    z.e.h = function() {
        this.$f.q();
        delete this.ai;
        delete this.pa;
        z.zE.b.h.call(this)
    }
    ;
    z.e.start = function(a, b) {
        this.stop();
        var c = b || 0;
        this.zb = Math.max(a || 0, 0);
        this.oy = 0 > c ? -1 : z.qa() + c;
        this.$f.start(0 > c ? this.zb : Math.min(this.zb, c))
    }
    ;
    z.e.stop = function() {
        this.$f.stop()
    }
    ;
    z.e.Bf = function() {
        return this.$f.Bf()
    }
    ;
    z.e.WG = function() {}
    ;
    z.e.Lx = function() {
        if (this.ai.call(this.pa))
            this.WG();
        else if (0 > this.oy)
            this.$f.start(this.zb);
        else {
            var a = this.oy - z.qa();
            0 >= a || this.$f.start(Math.min(this.zb, a))
        }
    }
    ;
    z.u(AE, $k);
    z.e = AE.prototype;
    z.e.F = "init";
    z.e.Fd = null;
    z.e.h = function() {
        AE.b.h.call(this);
        this.uc.q();
        this.uc = null;
        this.$f.q();
        this.$f = null
    }
    ;
    z.e.yf = function() {
        return this.F
    }
    ;
    z.e.LC = function() {
        if (this.El == this.c.value)
            return !1;
        this.dispatchEvent("after_paste");
        return !0
    }
    ;
    z.e.$i = function(a) {
        a = new xk(a.Sb);
        a.type = "paste";
        this.dispatchEvent(a);
        el(function() {
            this.LC() || this.$f.start(50, 200)
        }, 0, this)
    }
    ;
    z.e.NQ = function(a) {
        switch (this.F) {
        case "init":
            this.wF(a);
            break;
        case "focused":
            switch (a.type) {
            case "input":
                var b = this.nG + 400;
                (z.qa() > b || "focus" == this.fV) && this.$i(a);
                break;
            case "blur":
                this.F = "init";
                break;
            case "keydown":
                if (z.jg && z.G && 0 == a.keyCode || z.jg && z.G && 17 == a.keyCode)
                    break;
                this.F = "typing";
                break;
            case "mouseover":
                this.c.value != this.El && this.$i(a)
            }
            break;
        case "typing":
            switch (a.type) {
            case "input":
                this.F = "focused";
                break;
            case "blur":
                this.F = "init";
                break;
            case "keydown":
                (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode) && this.$i(a);
                break;
            case "mouseover":
                this.c.value != this.El && this.$i(a)
            }
        }
        this.nG = z.qa();
        this.El = this.c.value;
        this.fV = a.type
    }
    ;
    z.e.wF = function(a) {
        switch (a.type) {
        case "blur":
            this.F = "init";
            break;
        case "focus":
            this.F = "focused";
            break;
        case "mouseover":
            this.F = "init",
            this.c.value != this.El && this.$i(a)
        }
    }
    ;
    z.u(BE, xA);
    var DE = {};
    DE.A = new z.zd("class data-lf-handle data-lf-provider href target vocab typeof rel resource property".split(" "));
    DE.IMG = new z.zd(["src"]);
    DE.SPAN = new z.zd(["property"]);
    var FE = new z.zd("A B BLOCKQUOTE BR EM I LABEL LI OL P SPAN STRONG U UL #text".split(" "));
    z.e = BE.prototype;
    z.e.Qh = function() {
        return "FilterContent"
    }
    ;
    z.e.enable = function(a) {
        BE.b.enable.call(this, a);
        a = new AE(a.f());
        a.wF = function(a) {
            switch (a.type) {
            case "blur":
                this.F = "init";
                break;
            case "focus":
                this.F = "focused";
                break;
            case "mouseover":
                this.F = "init";
                this.c.value != this.El && (this.Fd.info("paste by dragdrop while on init!"),
                this.$i(a));
                break;
            case "keydown":
                this.F = "init"
            }
        }
        ;
        Jk(a, "paste", (0,
        z.q)(this.VN, this))
    }
    ;
    z.e.VN = function() {
        function a(a, c) {
            "A" === a.parentElement.tagName && (d = b.Je(),
            d[c].call(d, a.parentElement),
            b.Kf())
        }
        var b = this.B.Ra()
          , c = window.document.createElement("div");
        c.innerHTML = b.Nv();
        var c = 1 < c.childNodes.length || 1 < c.childNodes[0].childNodes.length, d, f = b.fa(), g = b.Ja();
        c ? (a(f, "setStartBefore"),
        a(g, "setEndAfter")) : 3 === f.nodeType && "A" === f.parentElement.tagName && (d = window.document.createRange(),
        d.selectNode(f.parentElement),
        b.Ts(d),
        b.Kf());
        (0,
        window.setTimeout)((0,
        z.q)(function() {
            EE(this, this.B.f())
        }, this), 100)
    }
    ;
    z.e.yj = function(a) {
        return "+filtercontent" == a
    }
    ;
    z.e.execCommand = function(a, b, c) {
        var d = yA(this)
          , f = this.B.Ra()
          , g = c.parentNode;
        if ("+filtercontent" !== a)
            return !1;
        tD(this.B, !0);
        f.isCollapsed() || (d.la().execCommand("delete", !1, null),
        f = this.B.Ra());
        b = GE(b);
        a = !0;
        switch (c.tagName) {
        case "BR":
            if ("P" === g.tagName) {
                1 === g.children.length && "BR" === g.firstChild.tagName && g.removeChild(g.firstChild);
                g.appendChild(b);
                c = g;
                break
            }
        case "BODY":
            c = d.createElement("P");
            c.appendChild(b);
            f.insertNode(c, !0);
            break;
        case "P":
            if (g && "P" === g.tagName) {
                g.appendChild(b);
                c = g;
                break
            }
        default:
            (a = c.children) && 1 === a.length && "BR" === c.firstChild.tagName && c.removeChild(c.firstChild),
            a = !1,
            d = f.fa(),
            f.insertNode(b, !0),
            f = d.parentNode,
            d = z.Na(f.childNodes, d),
            f = Pz(f.childNodes[d + 2], 0),
            gA(f.fa(), !0)
        }
        this.B.Zi();
        rD(this.B);
        a && gA(c, !1);
        return !1
    }
    ;
    z.u(HE, xA);
    z.e = HE.prototype;
    z.e.jj = function(a, b) {
        this.ni(b)
    }
    ;
    z.e.Qh = z.Gb("+resize");
    z.e.rj = function() {
        this.ni()
    }
    ;
    z.e.qw = function() {
        this.ni()
    }
    ;
    z.e.reset = function() {
        this.ni(!0)
    }
    ;
    z.e.ni = function(a) {
        var b = this.B.f();
        a ? this.qi(this.TF) : (a = z.Qc(b),
        b = 0,
        a.length && (b = z.nj(a, function(a, b) {
            return a + z.Ml(b).height
        }, z.Ml(a[0]).height + 4, this)),
        a = Math.max(b, this.TF),
        a = Math.min(a, 400),
        this.qi(a))
    }
    ;
    z.e.qi = function(a) {
        z.Ll(this.B.f(), a);
        var b;
        b = this.B;
        b = b.kb() ? b.Tc : b.f();
        z.Ll(b, a);
        this.B.kb() && (b = th(window.document, "IFRAME", null, b),
        z.Ll(b[0], a))
    }
    ;
    z.u(IE, z.D);
    IE.prototype.toString = function() {
        for (var a = [], b, c = 0; b = this.ds[c]; c++)
            a.push(this.js[c] + "," + b);
        return a.join("\n")
    }
    ;
    IE.prototype.h = function() {
        delete this.js;
        delete this.ds
    }
    ;
    z.u(KE, xA);
    z.e = KE.prototype;
    z.e.tag = "DIV";
    z.e.Qh = function() {
        return "EnterHandler"
    }
    ;
    z.e.enable = function(a) {
        KE.b.enable.call(this, a);
        !sI || "P" != this.tag && "DIV" != this.tag || yA(this).la().execCommand("opera-defaultBlock", !1, this.tag)
    }
    ;
    z.e.jH = function(a) {
        return !a || vj(a) ? iI ? this.vE() : "" : a
    }
    ;
    z.e.vE = z.Gb("\x3cbr\x3e");
    z.e.hr = function(a, b) {
        var c = this.B.f()
          , d = b && b.fa();
        c.firstChild == d && Xz(d) && (a.preventDefault(),
        a.stopPropagation())
    }
    ;
    z.e.lH = function(a, b) {
        if (z.C || z.G)
            OE(this, "DIV");
        else if (!b && z.J) {
            var c = this.B.Ra(), d;
            if (d = c)
                a: {
                    for (d = Ty(c); d; d = d.parentNode)
                        if (ME[d.tagName]) {
                            d = "BLOCKQUOTE" == d.tagName;
                            break a
                        }
                    d = !1
                }
            if (d) {
                d = yA(this);
                var f = d.createElement("BR");
                c.insertNode(f, !0);
                if (c = !!ME[f.parentNode.tagName]) {
                    for (c = f.nextSibling; c && 3 == c.nodeType && !c.nodeValue; )
                        c = c.nextSibling;
                    c = !c
                }
                c && Ph(d.createElement("BR"), f);
                gA(f, !1);
                a.preventDefault()
            }
        }
    }
    ;
    z.e.GE = function(a) {
        LE(this, a)
    }
    ;
    z.e.YE = function(a) {
        if (z.H && this.B.Tw)
            return !1;
        if (8 == a.keyCode)
            this.hr(a, this.B.Ra());
        else if (13 == a.keyCode)
            if (z.H) {
                if (!a.shiftKey) {
                    var b = this.B.Ra()
                      , c = !b || b.isCollapsed()
                      , d = QE(this)
                      , f = this.B.execCommand("+splitBlockquote", d);
                    f && (a.preventDefault(),
                    a.stopPropagation());
                    TA || d.removeNode(!0);
                    f || this.ME(a, c, b)
                }
            } else {
                this.B.Qk();
                b = QE(this);
                if (c = !!this.B.execCommand("+splitBlockquote", b))
                    a.preventDefault(),
                    a.stopPropagation();
                TA || b.removeNode(!0);
                z.J && this.kr(a);
                this.lH(a, c);
                this.B.Zi()
            }
        else
            z.H && 46 == a.keyCode && this.GE(a);
        return !1
    }
    ;
    z.e.qw = function(a) {
        if (z.H && this.B.Tw)
            return !1;
        this.ZE(a);
        return !1
    }
    ;
    z.e.ZE = function(a) {
        (z.C || z.G) && 13 == a.keyCode && OE(this, "DIV", !0)
    }
    ;
    z.e.kr = z.n;
    z.e.ME = z.n;
    var PE = Ri("LI", "DIV", "H1", "H2", "H3", "H4", "H5", "H6");
    z.u(RE, KE);
    z.e = RE.prototype;
    z.e.Qh = function() {
        return "TagOnEnterHandler"
    }
    ;
    z.e.vE = function() {
        return "P" == this.tag ? "\x3cp\x3e\x26nbsp;\x3c/p\x3e" : "DIV" == this.tag ? "\x3cdiv\x3e\x3cbr\x3e\x3c/div\x3e" : "\x3cbr\x3e"
    }
    ;
    z.e.Rp = z.ug;
    z.e.yj = function(a) {
        return "+defaultTag" == a
    }
    ;
    z.e.queryCommandValue = function(a) {
        return "+defaultTag" == a ? this.tag : null
    }
    ;
    z.e.hr = function(a, b) {
        RE.b.hr.call(this, a, b);
        z.H && VE(this, b, !0)
    }
    ;
    z.e.lH = function() {
        (z.G || z.C) && "P" != this.tag && OE(this, this.tag)
    }
    ;
    z.e.GE = function(a) {
        var b = this.B.Ra()
          , c = cA(b && Ty(b));
        this.B.f().lastChild == c && NE(c) ? (a.preventDefault(),
        a.stopPropagation()) : (VE(this, b, !1),
        LE(this, a))
    }
    ;
    z.e.ZE = function(a) {
        z.H ? 46 == a.keyCode ? WE(this, !1) : 8 == a.keyCode && WE(this, !0) : (z.C || z.G) && 13 == a.keyCode && OE(this, this.tag, !0)
    }
    ;
    var yJ = /^[\t\n\r ]*(<br[^>]*\/?>|&nbsp;)[\t\n\r ]*$/;
    RE.prototype.kr = function() {
        if ("DIV" == this.tag) {
            var a = this.B.Ra()
              , b = cA(Ty(a))
              , a = lA(a, !0);
            SE(this, a.Y, b);
            Pz(a.Y, a.offset).select()
        }
    }
    ;
    RE.prototype.ME = function(a, b, c) {
        var d = null;
        b && (d = z.gi(c && Ty(c), "LI"));
        var f;
        if (d && d.innerHTML.match(yJ))
            f = UE(this, d);
        else if (c = this.B.Ra(),
        b = cA(Ty(c)),
        NE(b))
            "BODY" == b.tagName && (b = SE(this, b.getElementsByTagName("BR")[0], b)),
            f = b.cloneNode(!0),
            Li(f, b);
        else {
            b.firstChild || (b.innerHTML = "\x26nbsp;");
            var g = lA(c, !0);
            c = b = SE(this, g.Y, b);
            var d = g.Y
              , h = g.offset
              , k = c;
            k || (k = d.ownerDocument.body);
            (g = 3 == d.nodeType) ? z.C && h == d.nodeValue.length ? (f = z.Dc(d).createTextNode(""),
            Li(f, d)) : f = d.splitText(h) : d = h ? d.childNodes[h - 1] : f = d.firstChild || d;
            for (var m, r = d, h = f; r != k && (m = r.parentNode); ) {
                for (var x = m.cloneNode(!1); r.nextSibling; )
                    x.appendChild(r.nextSibling);
                h && x.insertBefore(h, x.firstChild);
                h = x;
                r = m
            }
            m = h;
            g && (f = XE(f, !0),
            YE(f, !0, !!f.nextSibling),
            f = XE(d, !1),
            YE(f, !1, !1));
            Li(m, c);
            f = m;
            b = ZE(b);
            m = ZE(f, !0);
            b && m && "A" == b.tagName && "A" == m.tagName && (b = Xz(b, !1) ? b : m,
            z.Pc(b))
        }
        m = f;
        this.B.sl() && (b = this.B.f(),
        m = z.Hl(m).y + m.offsetHeight,
        d = yA(this),
        c = yA(this).hb(),
        d = Nh(d).y,
        c = z.Rh(c).height,
        m > c + d && ("BODY" == b.tagName && Oh(z.Dc(b)) && (b = b.parentNode),
        b.scrollTop = m - c));
        NE(f) && (f.normalize(),
        b = f.getElementsByTagName("BR")[0],
        b.previousSibling && 3 == b.previousSibling.nodeType && (f = b.previousSibling));
        fA(f);
        a.preventDefault();
        a.stopPropagation()
    }
    ;
    z.u($E, RE);
    $E.prototype.rj = function(a) {
        8 == a.keyCode && this.hr(a, this.B.Ra())
    }
    ;
    $E.prototype.kr = function(a) {
        if ("P" !== this.tag)
            $E.b.kr.call(this, a);
        else {
            var b = this.B.Ra()
              , c = null;
            if (!b || b.isCollapsed())
                c = z.gi(b && Ty(b), "LI");
            c && c.innerHTML.match(yJ) && (b = UE(this, c),
            fA(b),
            a.preventDefault(),
            a.stopPropagation())
        }
    }
    ;
    var zJ = /a(:(link|visited|active|hover))?/;
    cF.prototype.clone = function() {
        var a = new cF;
        a.jh = this.jh.concat();
        a.Xm = this.Xm;
        return a
    }
    ;
    var AJ = /(^|;|{)\s*color:([^;]+);/g
      , gF = {}
      , jF = {}
      , lF = {}
      , BJ = "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" ")
      , CJ = "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
    var DJ;
    z.u(mF, ZC);
    z.e = mF.prototype;
    z.e.RH = function(a) {
        a != this.Dj && (this.Dj = a,
        this.kb() && oF(this))
    }
    ;
    z.e.cG = !1;
    z.e.cT = !1;
    z.e.sl = function() {
        return this.cG
    }
    ;
    z.e.jF = function() {
        sD(this, aD) || nF(this)
    }
    ;
    z.e.Vy = function() {
        if (this.Lo ? 0 : this.Lo = !0) {
            var a = !1
              , b = qD(this);
            if (b) {
                var c, d = qD(this), f = d.contentDocument.body;
                c = f.parentNode;
                0 === (0,
                window.parseInt)(xl(d, "height"), 10) && z.vl(d, "height", "1px");
                Oh(z.Dc(f)) ? d = c.offsetHeight : (d = c.scrollHeight,
                c.clientHeight != c.offsetHeight && (c = d,
                (d = DJ) || (d = window.document.createElement("div"),
                d.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px",
                f = window.document.createElement("div"),
                Jl(f, "200px", "200px"),
                d.appendChild(f),
                window.document.body.appendChild(d),
                f = d.offsetWidth - d.clientWidth,
                z.Oc(d),
                d = DJ = f),
                d = c + d));
                c = d;
                this.Dj && (c = Math.max(c, this.Dj));
                (0,
                window.parseInt)(xl(b, "height"), 10) != c && (b.style.height = c + "px",
                a = !0)
            }
            this.Lo = !1;
            a && this.dispatchEvent("ifrsz")
        }
    }
    ;
    z.e.Sw = "";
    z.e.sE = function(a) {
        if (!this.Sw || a) {
            var b = this.Tc;
            if (b) {
                var c = b.ownerDocument;
                a && kF(c);
                a = z.ja(c);
                lF[a] || kF(c);
                a = lF[a];
                for (var c = [], d = 0; d < a.length; d++)
                    c.push(a[d].clone());
                var f = new iF(b)
                  , g = new fF("body");
                for (a = 0; a < c.length; a++)
                    for (var h = c[a].jh, d = h.length, k = 0; k < d; k++) {
                        var m = h[k], r;
                        var x = m;
                        r = f.uid;
                        if (x.uu[r])
                            r = x.uu[r];
                        else {
                            for (var t = 0, I = null, M = null, $ = null, Xd = f.lg, ha = Xd.length, ma = 0; ma <= x.ii.length; ma++) {
                                for (M = x.ii[ma]; t < ha; ) {
                                    var ta = Xd[t];
                                    if (M && hF(M, ta)) {
                                        I = {
                                            HD: t,
                                            NH: ma
                                        };
                                        t++;
                                        break
                                    } else
                                        $ && hF($, ta) && (I = {
                                            HD: t,
                                            NH: ma - 1
                                        });
                                    t++
                                }
                                $ = M
                            }
                            r = x.uu[r] = I
                        }
                        r && (x = r.NH,
                        m = m.ii,
                        t = m.length - 1,
                        r.HD == f.lg.length - 1 || x < t ? (m = m.concat(),
                        m.splice(0, x + 1, g),
                        x = new eF,
                        x.ii = m,
                        h.push(x)) : 0 < x && x == t && (x = new eF,
                        x.ii = [g, m[t]],
                        h.push(x)))
                    }
                f = new cF;
                d = b.currentStyle || z.Fc(b).defaultView.getComputedStyle(b, "") || {};
                a = new eF;
                a.ii = [new fF("html")];
                f.jh = [a];
                g = {};
                for (a = 0; b = BJ[a]; a++)
                    g[b] = d[qj(b)];
                dF(f, g);
                c.push(f);
                f = new cF;
                g = new eF;
                g.ii = [new fF("body")];
                h = {
                    position: "relative",
                    top: "0",
                    left: "0",
                    right: "auto",
                    display: "block",
                    visibility: "visible"
                };
                for (a = 0; b = CJ[a]; a++)
                    h[b] = d[qj(b)];
                dF(f, h, !0);
                f.jh = [g];
                c.push(f);
                b = [];
                d = c.length;
                for (a = 0; a < d; a++) {
                    h = c[a];
                    f = b;
                    k = h.jh.length;
                    g = !1;
                    for (m = 0; m < k; m++) {
                        x = h.jh[m].ii;
                        r = x.length;
                        for (t = 0; t < r; t++)
                            f.push(x[t].WF, " ");
                        m < k - 1 && f.push(",");
                        z.H && !z.B("1.9a") && (g = g || zJ.test(x[r - 1].WF))
                    }
                    h = h.Xm;
                    g && (h = h.replace(AJ, "$1 color: $2 ! important; "));
                    f.push("{", h, "}\n")
                }
                this.Sw = b.join("")
            }
        }
        return this.Sw
    }
    ;
    var EJ = !1;
    z.e = mF.prototype;
    z.e.kb = function() {
        return !YC
    }
    ;
    z.e.Ly = function() {
        mF.b.Ly.call(this);
        if (this.kb()) {
            var a = qD(this).ownerDocument;
            this.de.e(a, oJ, this.jF, !0);
            this.mT = Tk(this.cb.hb(), "load", this.Vy, !0, this);
            this.de.e(a, "DOMAttrModified", (0,
            z.q)(this.IE, this, this.jF), !0)
        }
    }
    ;
    z.e.Dn = function() {
        sD(this, aD) || (mF.b.Dn.call(this),
        this.kb() && this.Vy())
    }
    ;
    z.e.Aq = function() {
        if (!sD(this, "blur") && (mF.b.Aq.call(this),
        !YC && !gI)) {
            var a = this.cb.hb()
              , b = !1;
            Vk(this.pG);
            this.pG = Tk(a.document.body, "dragover", function() {
                b = !0
            });
            z.s.setTimeout((0,
            z.q)(function() {
                if (!b && this.cb) {
                    var a = this.Ra()
                      , d = this.cb.hb();
                    Qz(d);
                    a && (a.collapse(!0),
                    a.select())
                }
            }, this), 0)
        }
    }
    ;
    z.e.jt = function() {
        mF.b.jt.call(this);
        var a = this.cb.la();
        a.execCommand("enableInlineTableEditing", !1, "false");
        a.execCommand("enableObjectResizing", !1, "false")
    }
    ;
    z.e.XF = function() {
        this.kb() || EJ || (this.Kk && Rl(this.Kk, this.f()),
        EJ = !0)
    }
    ;
    z.e.xx = function(a) {
        if (this.kb())
            mF.b.xx.call(this, a);
        else if (a = this.Tc)
            lD(this, a),
            a.contentEditable = !0,
            nD(this, a.innerHTML, a),
            this.mr()
    }
    ;
    z.e.mr = function() {
        if (this.kb()) {
            var a = this;
            z.s.setTimeout(function() {
                oF(a)
            }, 0)
        }
        mF.b.mr.call(this)
    }
    ;
    z.e.rE = function() {
        return {
            frameBorder: 0,
            style: "padding:0;"
        }
    }
    ;
    z.e.rC = function(a) {
        if (!this.cT) {
            var b = this.Tc;
            b && (this.cG = "auto" == z.zl(b, "overflowY"))
        }
        var b = this.Tc
          , c = z.Dc(b)
          , d = b.style.width
          , f = b.style.height;
        z.vl(b, "visibility", "hidden");
        var c = c.r("DIV", {
            style: "height:0;clear:both",
            innerHTML: "\x26nbsp;"
        })
          , g = c.cloneNode(!0);
        b.insertBefore(c, b.firstChild);
        b.appendChild(g);
        var g = z.Ul(b)
          , c = g.width
          , g = g.height
          , h = "";
        this.sl() && (h = "\x26nbsp;",
        z.vl(b, "position", "relative"),
        z.vl(b, "overflow", "visible"),
        z.vl(a, "position", "absolute"),
        z.vl(a, "top", "0"),
        z.vl(a, "left", "0"));
        Jl(b, c, g);
        Oh(z.Dc(b)) && z.vl(b, "lineHeight", "0");
        aA(b, h);
        Jl(a, c, g);
        Jl(b, d, f);
        z.vl(b, "visibility", "");
        b.appendChild(a);
        AD(this) || (b = a.contentWindow.document,
        Oh(z.Dc(a.ownerDocument)) && (b.open(),
        b.write("\x3c!DOCTYPE HTML\x3e\x3chtml\x3e\x3c/html\x3e"),
        b.close()))
    }
    ;
    z.e.Jv = function(a) {
        var b = this.Tc;
        if (b)
            return new VC(this.id,Oh(z.Dc(b)),!0,this.sl(),a);
        throw Error("no field");
    }
    ;
    z.e.dJ = function(a, b, c) {
        z.vl(a, "visibility", "hidden");
        c = this.Jv(c);
        var d = new WC(this.Tc,this.Kk + this.sE());
        if (c.eq) {
            var f = Wl(d.xX);
            (f.top || f.left || f.right || f.bottom) && z.vl(a, "margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px")
        }
        XC(c, b, d, a);
        oF(this);
        z.vl(a, "visibility", "visible")
    }
    ;
    z.e.Su = function() {
        Vk(this.pG);
        Vk(this.mT);
        mF.b.Su.call(this)
    }
    ;
    z.u(pF, mF);
    z.e = pF.prototype;
    z.e.clear = function() {
        var a = this.f();
        z.w(a.children, function(b) {
            z.jk(b, "fyre-editor-placeholder") && a.removeChild(b)
        });
        a.children.length || a.appendChild(window.document.createElement("P"))
    }
    ;
    z.e.ag = function() {
        (UA || z.J) && yD(this, !1);
        this.focus()
    }
    ;
    z.e.Ra = function() {
        var a = pF.b.Ra.call(this);
        if (!a || this.kb())
            return a;
        var b = Ty(a);
        return z.gi(b, null, "fyre-editor-editable") ? a : null
    }
    ;
    z.e.sE = function() {
        return ""
    }
    ;
    z.e.Pe = function() {
        return !z.yi(z.xD(this))
    }
    ;
    z.e.jt = function() {
        this.cb.la().designMode = "on"
    }
    ;
    z.u(rF, z.T);
    z.e = rF.prototype;
    z.e.r = function() {
        this.c = z.xo(Vx, this.t())
    }
    ;
    z.e.m = function() {
        rF.b.m.call(this);
        var a = this.o("fyre-editor-error-close");
        this.p().e(a, "click", this.yb)
    }
    ;
    z.e.t = function() {
        return {
            cs: this.RT
        }
    }
    ;
    z.e.yb = function() {
        z.N(this.c, !1)
    }
    ;
    z.e.show = function() {
        z.N(this.c, !0)
    }
    ;
    z.u(sF, $k);
    z.u(tF, $k);
    z.e = tF.prototype;
    z.e.Ir = null;
    z.e.vz = function() {
        uF(this, this.Ld, this.Mj)
    }
    ;
    z.e.Zx = function() {
        uF(this, this.Mj, this.Ld)
    }
    ;
    z.e.Ge = function() {
        if (!this.Ir && 0 != this.rs.length) {
            var a = this.rs.shift();
            this.dispatchEvent({
                type: a.type,
                state: a.state
            }) && (a.state.yN ? (this.Ir = Jk(a.state, "action_completed", this.hP, !1, this),
            a.iE.call(a.state)) : (a.iE.call(a.state),
            this.Ge()))
        }
    }
    ;
    z.e.hP = function() {
        Vk(this.Ir);
        this.Ir = null;
        this.Ge()
    }
    ;
    z.u(vF, xA);
    vF.prototype.Qn = null;
    var FJ = Si({
        T0: "+undo",
        W_: "+redo"
    });
    z.e = vF.prototype;
    z.e.yj = function(a) {
        return a in FJ
    }
    ;
    z.e.HI = function(a) {
        this.disable(a);
        this.B = null
    }
    ;
    z.e.enable = function(a) {
        if (!this.isEnabled(a)) {
            uD(a);
            var b = new qp(this);
            z.H || b.e(a, "beforechange", this.eQ);
            b.e(a, bD, this.vQ);
            b.e(a, "blur", this.fQ);
            this.hj[a.Wg] = b;
            wF(this, a)
        }
    }
    ;
    z.e.disable = function(a) {
        uD(a);
        var b = this.hj[a.Wg];
        b && (b.q(),
        delete this.hj[a.Wg]);
        this.Um[a.Wg] && delete this.Um[a.Wg]
    }
    ;
    z.e.isEnabled = function(a) {
        return !!this.hj[a.Wg]
    }
    ;
    z.e.h = function() {
        vF.b.h.call(this);
        for (var a in this.hj)
            this.hj[a].q(),
            delete this.hj[a];
        this.B = null;
        this.Rf && (this.Rf.q(),
        delete this.Rf)
    }
    ;
    z.e.Qh = function() {
        return "UndoRedo"
    }
    ;
    z.e.execCommand = function(a) {
        "+undo" == a ? this.Rf.vz() : "+redo" == a && this.Rf.Zx()
    }
    ;
    z.e.queryCommandValue = function(a) {
        var b = null;
        "+undo" == a ? b = 0 < this.Rf.Ld.length : "+redo" == a && (b = 0 < this.Rf.Mj.length);
        return b
    }
    ;
    z.e.wO = function() {
        this.B.dispatchEvent({
            type: "cvc",
            eO: ["+redo", "+undo"]
        })
    }
    ;
    z.e.LV = function(a, b, c) {
        var d = this.B;
        if (d) {
            tD(d, !0);
            try {
                d.Qk();
                d.execCommand("clearlorem", !0);
                aA(d.f(), b);
                c && c.select();
                var f = this.B;
                d.focus();
                f && f.Wg != a.gn && f.execCommand("updatelorem");
                var g = this.Um[a.gn];
                g.Bi = b;
                g.FI = c
            } catch (h) {} finally {
                this.Qn = a,
                d.Zi(),
                rD(d)
            }
        }
    }
    ;
    z.e.rw = function(a, b, c) {
        if (c) {
            var d;
            "z" == b ? d = a.shiftKey ? "+redo" : "+undo" : "y" == b && (d = "+redo");
            if (d)
                return "+undo" == d ? (a = this.Rf,
                a = a.Ld[a.Ld.length - 1]) : (a = this.Rf,
                a = a.Mj[a.Mj.length - 1]),
                a && a.gn ? this.B.execCommand(d) : this.execCommand(d),
                !0
        }
        return !1
    }
    ;
    z.e.eQ = function(a) {
        if (!this.Qn) {
            a = a.target;
            var b = a.Wg;
            this.RF != b && (this.RF = b,
            wF(this, a))
        }
    }
    ;
    z.e.vQ = function(a) {
        this.Qn ? (a = this.Qn,
        this.Qn = null,
        a.dispatchEvent("action_completed")) : wF(this, a.target)
    }
    ;
    z.e.fQ = function(a) {
        (a = a.target) && uD(a)
    }
    ;
    z.u(yF, sF);
    yF.prototype.vz = function() {
        this.DH(this, this.Bi, this.FI)
    }
    ;
    yF.prototype.Zx = function() {
        this.DH(this, this.$x, this.tV)
    }
    ;
    yF.prototype.Uk = function(a) {
        return this.gn == a.gn && this.Bi == a.Bi && this.$x == a.$x
    }
    ;
    xF.prototype.toString = function() {
        return TA ? "W3C:" + this.ya.toString() + "\n" + this.bz + ":" + this.wa.toString() + "\n" + this.jv : "IE:" + this.ya + "," + this.wa
    }
    ;
    xF.prototype.select = function() {
        var a = this.yd(this.Z.f());
        a && (UA && this.Z.f().focus(),
        Nz(a).select())
    }
    ;
    xF.prototype.yd = function(a) {
        if (TA) {
            var b = JE(this.ya, a);
            a = JE(this.wa, a);
            return b && a ? vz(b, this.bz, a, this.jv).Je() : null
        }
        b = a.ownerDocument.body.createTextRange();
        b.moveToElementText(a);
        b.collapse(!0);
        b.moveEnd("character", this.wa);
        b.moveStart("character", this.ya);
        return b
    }
    ;
    z.u(AF, z.T);
    AF.prototype.tJ = "fyre-editor-";
    var GJ = {
        edit: "fyre.v2.editor.EVENTS.EDIT_COMMENT_CLICKED",
        "new": "fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED",
        reply: "fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED"
    };
    z.e = AF.prototype;
    z.e.sm = [];
    z.e.lk = [];
    z.e.Xt = [];
    z.e.Ui = function() {
        var a = {};
        a.type = GJ[this.xs];
        a.Ck = this.pj();
        a.id = this.C.Gk;
        a.hi = this.C.hi;
        a.Dh = this.zu;
        a.ia = z.Hb((0,
        z.q)(this.tj, this), this.C.ia || z.n);
        a.gj = z.Hb((0,
        z.q)(this.LR, this), this.C.gj || z.n);
        return a
    }
    ;
    z.e.K = function(a) {
        AF.b.K.call(this, a);
        this.dj && z.dk(this.c, this.dj)
    }
    ;
    z.e.m = function() {
        AF.b.m.call(this);
        this.$m = this.o("fyre-editor-container");
        this.Wc = this.o("fyre-editor-spinner");
        z.N(this.Wc, !1);
        kk(this.c, "fyre-edit-editor", this.wj)
    }
    ;
    z.e.aF = function(a) {
        a.ia = (0,
        z.q)(function(a, c) {
            this.$r.ou(c, "converted" === a)
        }, this)
    }
    ;
    z.e.t = function() {
        return {
            j: this.C.j
        }
    }
    ;
    z.e.jr = function(a) {
        z.Ql(this.c) && !z.gi(a.target, null, "fyre-editor") && (z.N(this.c, !1),
        this.dispatchEvent("fyre.v2.editor.EVENTS.HIDE"))
    }
    ;
    z.e.hl = function(a) {
        a.stopPropagation();
        this.hH || (DF(this, !1),
        this.fj && this.fj.q(),
        this.Zl(),
        this.dispatchEvent(this.Ui(a)))
    }
    ;
    z.e.LR = function(a) {
        DF(this, !0);
        this.Ad();
        "" === a && (a = {
            code: 503
        });
        a && (z.p(a) ? EF(this, a) : (503 === a.code && (a.error_type = "ServiceUnavailableError"),
        (a = BF(this, a.error_type)) && EF(this, a)))
    }
    ;
    z.e.tj = function(a) {
        this.d.$b.send(z.Xn("Posted", {
            bc: a
        }));
        DF(this, !0);
        this.Ad();
        this.zu.reset();
        this.Lm && this.dispatchEvent("fyre.v2.editor.EVENTS.HIDE")
    }
    ;
    z.e.Ad = function() {
        this.Wc && z.N(this.Wc, !1)
    }
    ;
    z.e.vT = function(a) {
        var b;
        xE.D();
        b = new wJ[a](this,this.C);
        b.isSupported() && (this.G(b),
        this.Cl[a] = b,
        b.Zd(this.Ka, this.xs),
        b.uo())
    }
    ;
    z.e.Yr = function() {
        z.w(this.wj ? this.sm : this.ix ? this.Xt : this.lk, this.vT, this)
    }
    ;
    z.e.Eo = function(a) {
        this.Lm = a;
        var b = this.R().la()
          , c = this.p();
        a ? c.e(b, "click", this.jr) : c.Fa(b, "click", this.jr)
    }
    ;
    z.e.Zl = function() {
        this.Wc && z.N(this.Wc, !0)
    }
    ;
    z.u(FF, z.T);
    FF.prototype.K = function(a) {
        FF.b.K.call(this, a);
        z.to(this.c, Ux, this.t())
    }
    ;
    FF.prototype.t = function() {
        return {
            j: this.C.j,
            cv: this.C.cv
        }
    }
    ;
    z.cv = z.n;
    z.ca(z.cv);
    z.cv.prototype.LP = function(a, b, c) {
        var d = b && b.Dd()
          , f = b && b.ah();
        b = b && !b.get(z.U.zc);
        var g = z.Qf;
        c = z.wj(c) ? c : !0;
        switch (a) {
        case "main":
            return b ? FF : g && d && c ? z.HJ : g ? z.IJ : d && c ? z.JJ : f ? z.KJ : z.LJ;
        case "reviews":
            return b ? FF : g ? z.MJ : z.NJ
        }
    }
    ;
    z.u(z.HF, z.T);
    z.HF.prototype.Ad = function() {
        z.N(this.Wc, !1)
    }
    ;
    z.HF.prototype.Zl = function() {
        z.N(this.Wc, !0)
    }
    ;
    z.HF.prototype.Hn = z.n;
    z.u(z.JF, z.T);
    z.e = z.JF.prototype;
    z.e.K = function(a) {
        z.JF.b.K.call(this, a);
        this.LI()
    }
    ;
    z.e.m = function() {
        z.Mh(this.l, z.U.Kc, this.LI, this);
        z.JF.b.m.call(this)
    }
    ;
    z.e.S = function() {
        this.l.off(null, null, this);
        z.JF.b.S.call(this)
    }
    ;
    z.e.t = function() {
        var a = this.mE(this.l.get(z.U.Kc));
        return {
            j: {
                gO: Os(a)
            }
        }
    }
    ;
    z.e.LI = function() {
        z.to(this.c, yv, this.t())
    }
    ;
    z.u(z.KF, z.T);
    z.e = z.KF.prototype;
    z.e.t = function() {
        return {
            CO: z.v.J.qb + "/images/down_arrow.png"
        }
    }
    ;
    z.e.K = function(a) {
        var b;
        b = this.t();
        b = (0,
        z.Q)('\x3cdiv class\x3d"fyre-box-wrapper"\x3e\x3ca class\x3d"fyre-logo-link" href\x3d"http://livefyre.com" target\x3d"_blank"\x3e\x3cimg class\x3d"fyre-logo-drop" src\x3d"' + z.R(z.S(b.CO)) + '" alt\x3d"Down arrow" /\x3e\x3cimg class\x3d"fyre-logo-help" src\x3d"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs\x3d" alt\x3d"Livefyre" /\x3e\x3c/a\x3e\x3cul class\x3d"fyre-box-list"\x3e\x3cli\x3e\x3ca href\x3d"http://livefyre.com" target\x3d"_blank" title\x3d"Get Livefyre"\x3eGet Livefyre\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"https://livefyre.zendesk.com/hc/en-us" target\x3d"_blank" title\x3d"FAQ"\x3eFAQ\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e');
        a.innerHTML = b;
        this.c = a
    }
    ;
    z.e.m = function() {
        z.Qf ? (this.p().e(this.c, "touchend", this.LQ),
        this.p().e(this.c, "click", this.KQ)) : this.p().e(this.c, "click", this.LE);
        z.KF.b.m.call(this)
    }
    ;
    z.e.LE = function(a) {
        this.Ab && (a = Uh(a.target, function(a) {
            if ("LI" === a.nodeName)
                return !0
        }, !0, 3)) && (this.Fk(),
        window.location = a.children[0].href)
    }
    ;
    z.e.LQ = function(a) {
        this.Ab ? this.LE(a.Sb) : (a.stopPropagation(),
        a.preventDefault(),
        z.dk(this.c, "fyre-box-mobile-touch"),
        this.zy(),
        this.Ab = !0)
    }
    ;
    z.e.KQ = function(a) {
        a.preventDefault();
        a.stopPropagation()
    }
    ;
    z.e.zy = function() {
        this.p().e(window.document, "touchend", this.Cn)
    }
    ;
    z.e.Cn = function(a) {
        z.Vc(this.c, a.Sb.target) || this.Fk()
    }
    ;
    z.e.Fk = function() {
        z.fk(this.c, "fyre-box-mobile-touch");
        this.Ab = !1;
        this.p().Fa(window.document, "touchend", this.Cn)
    }
    ;
    z.u(z.LF, z.T);
    z.e = z.LF.prototype;
    z.e.K = function(a) {
        z.LF.b.K.call(this, a);
        this.ey()
    }
    ;
    z.e.m = function() {
        z.LF.b.m.call(this);
        this.l.on("change", this.ey, this);
        z.Mh(this.d.u.v(), z.U.wh, this.ey, this)
    }
    ;
    z.e.S = function() {
        this.l.off(null, null, this);
        this.d.u.v().off(null, null, this);
        z.LF.b.S.call(this)
    }
    ;
    z.e.t = function() {
        var a = this.l.get("listeners")
          , b = this.d.u.v().get(z.U.wh)
          , a = a + b;
        return {
            Dl: a,
            Xs: this.Xs,
            j: MF(this, a)
        }
    }
    ;
    z.e.ey = function() {
        z.to(this.c, Dv, this.t())
    }
    ;
    z.u(NF, z.T);
    z.e = NF.prototype;
    z.e.Fk = function() {
        z.fk(this.c, "fyre-box-mobile-touch");
        this.Ab = !1;
        this.p().Fa(window.document, "touchend", this.Cn)
    }
    ;
    z.e.r = function() {
        this.c = z.xo(ks, this.t())
    }
    ;
    z.e.m = function() {
        NF.b.m.call(this);
        var a = this.p();
        this.gv = this.o("fyre-edit-profile-link");
        this.vx = this.o("fyre-logout-link");
        this.FG = this.o("fyre-modq-link");
        this.oH = this.o("fyre-user-profile-link");
        z.Qf ? (a.e(this.c, "touchend", this.rS),
        a.e(this.c, "click", this.iQ)) : (a.e(this.c, "keydown", this.rj),
        a.e(this.vx, "click", this.Ub),
        a.e(this.oH, "click", this.Ub),
        a.e(this.gv, "click", this.Ub))
    }
    ;
    z.e.S = function() {
        this.FG = this.gv = this.vx = null;
        NF.b.S.call(this)
    }
    ;
    z.e.t = function() {
        var a = z.F.k, b = {}, c = 4 === this.pe ? z.V : z.W, d = z.F.get(a.ue), d = (0,
        window.encodeURIComponent)(d), f = z.v.J.Hm, g;
        g = z.F.get(z.F.k.Zt) ? "https://studio." + z.v.Zc + "/" + z.v.fi : z.v.J.Hm + "/v3/content/?lftoken\x3d" + d;
        b.pN = g;
        b.Lc = this.l.get(a.vb);
        b.Ee = z.v.Ee;
        b.cc = z.v.cc;
        b.Qa = this.Pk;
        b.da = this.l.get(a.za);
        b.ie = z.Qf;
        b.Ue = this.l.get(a.Od);
        b.YT = f + "/v3/queue/?mobile\x3dt\x26lftoken\x3d" + d;
        a = z.wa(c.get(c.g.za), b.da);
        b.j = {
            da: Ps(a),
            editProfile: c.get(c.g.OJ),
            EG: c.get(c.g.yL),
            R1: c.get(c.g.EL),
            bI: c.get(c.g.lM),
            signOut: c.get(c.g.uB),
            kW: c.get(c.g.kM),
            nX: c.get(c.g.RM),
            rX: c.get(c.g.VM),
            FO: c.get(c.g.PJ),
            ZT: c.get(c.g.zL),
            mW: c.get(c.g.mM)
        };
        return b
    }
    ;
    z.e.Cn = function(a) {
        z.Vc(this.c, a.Sb.target) || this.Fk()
    }
    ;
    z.e.Ub = function(a, b) {
        var c;
        c = b ? b : a.currentTarget;
        switch (c) {
        case this.gv:
            c = qH.Wz;
            break;
        case this.vx:
            c = qH.MA;
            break;
        case this.FG:
            window.open(c.children[0].getAttribute("href"));
            this.Fk();
            return;
        case this.oH:
            c = qH.cB;
            break;
        default:
            return
        }
        this.Fk();
        this.dispatchEvent({
            type: c,
            event: a
        });
        a.preventDefault()
    }
    ;
    z.e.iQ = function(a) {
        a.preventDefault();
        a.stopPropagation()
    }
    ;
    z.e.rS = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.Ab ? this.Ub(a, a.Sb.target.parentNode) : (z.dk(this.c, "fyre-box-mobile-touch"),
        this.Ab = !0,
        this.zy())
    }
    ;
    z.e.rj = function(a) {
        if (-1 !== [13, 32].indexOf(a.keyCode))
            if (a.preventDefault(),
            a.stopPropagation(),
            z.jk(a.target, "fyre-user-drop"))
                kk(this.c, "fyre-box-mobile-touch", !this.Ab),
                this.Ab = !this.Ab;
            else {
                var b = a.Sb.target.parentNode;
                z.jk(a.target, "fyre-user-profile-link") && (b = a.target);
                this.Ub(a, b)
            }
    }
    ;
    z.e.zy = function() {
        this.p().e(window.document, "touchend", this.Cn)
    }
    ;
    z.u(OF, z.T);
    OF.prototype.t = function() {
        var a = z.F.k
          , b = 4 === this.pe ? z.V : z.W
          , a = {
            da: this.l.get(a.za),
            Lc: this.l.get(a.vb)
        };
        a.cc = z.v.cc;
        a.Qa = this.Pk;
        var c = z.wa(b.get(b.g.HJ), a.da);
        a.j = {
            da: Os(c),
            signOut: b.get(b.g.uB)
        };
        return a
    }
    ;
    OF.prototype.r = function() {
        OF.b.r.call(this);
        this.c = z.xo(is, this.t())
    }
    ;
    OF.prototype.m = function() {
        this.p().e(this.o("fyre-logout-link"), "click", this.oR);
        OF.b.m.call(this)
    }
    ;
    OF.prototype.oR = function(a) {
        a.preventDefault();
        this.dispatchEvent({
            type: "logoutClick"
        })
    }
    ;
    z.u(PF, z.T);
    z.e = PF.prototype;
    z.e.r = function() {
        this.c = z.xo(js, this.t())
    }
    ;
    z.e.m = function() {
        this.c.innerHTML = this.Pn.get(this.ex ? this.Pn.g.jM : this.Pn.g.hM);
        var a = this.p();
        a.e(this.c, "click", this.$E);
        a.e(this.c, "keydown", this.rj);
        PF.b.m.call(this)
    }
    ;
    z.e.t = function() {
        return {
            j: {
                jW: this.Pn.get(this.Pn.g.iM)
            }
        }
    }
    ;
    z.e.rj = function(a) {
        -1 !== [13, 32].indexOf(a.keyCode) && this.$E(a)
    }
    ;
    z.e.$E = function(a) {
        a.preventDefault();
        this.dispatchEvent({
            type: "loginClick"
        })
    }
    ;
    z.u(z.QF, z.T);
    z.QF.prototype.m = function() {
        this.yF();
        z.F.on(z.F.jc(z.F.k.X), this.yF, this);
        z.QF.b.m.call(this)
    }
    ;
    z.QF.prototype.yF = function() {
        var a;
        this.Jf(!0);
        a = z.F.id ? z.F.kc() ? new OF(z.F,this.pe,this.Pk) : new NF(z.F,this.pe,this.Pk) : new PF(this.ex,this.pe);
        this.G(a, !0)
    }
    ;
    z.QF.prototype.S = function() {
        z.F.off(null, null, this);
        z.QF.b.S.call(this)
    }
    ;
    z.u(RF, z.D);
    RF.prototype.WR = function() {
        this.Rl || (this.Rl = window.setTimeout((0,
        z.q)(function() {
            var a = this.c.offsetWidth;
            a !== this.Cz && SF(this, a);
            window.clearTimeout(this.Rl);
            this.Rl = null
        }, this), 4E3))
    }
    ;
    RF.prototype.h = function() {
        this.pa.q();
        window.clearTimeout(this.Rl);
        this.c = this.Rl = null;
        RF.b.h.call(this)
    }
    ;
    var PJ;
    z.u(z.TF, z.T);
    z.OJ = {
        lJ: "fyre-user-authenticated",
        ZX: "fyre-listener-avatars",
        iY: "fyre-bootstrap",
        sY: "fyre-comment-count",
        tY: "fyre-comment-stream",
        uh: "fyre-editor",
        IK: "fyre-help",
        YZ: "fyre-livecount",
        $Z: "fyre-login-bar",
        r_: "fyre-notifier-container",
        READ_ONLY: "fyre-read-only",
        qM: "fyre-stream-stats",
        B0: "fyre-stream-header",
        K0: "fyre-thread-breakout-stream",
        $B: "fyre",
        aN: "fyre-htmlblob"
    };
    PJ = [{
        "fyre-width-large": 1024
    }, {
        "fyre-width-medium": 400
    }, {
        "fyre-width-small": 0
    }];
    z.TF.prototype.m = function() {
        function a(a, b) {
            var d = this.f();
            d && kk(d, c.lJ, !!b)
        }
        z.TF.b.m.call(this);
        var b = this.w.k
          , c = z.OJ
          , d = this.w.jc(b.zc);
        this.w.on(d, this.Th, this);
        this.d.T.subscribe("render_complete", this.In, this);
        this.fD = new RF(this.c,PJ);
        z.Mh(z.F, z.F.k.X, a, this);
        a.call(this, 0, z.F.id);
        !this.d.H.zC && (b = this.w.get(b.Np)) && (d = z.ji("div", c.aN),
        d.innerHTML = b,
        z.Ki(this.f().parentNode, d))
    }
    ;
    z.TF.prototype.S = function() {
        z.TF.b.S.call(this);
        this.fD.q();
        this.w.off(null, null, this);
        z.vh(this.d.T, "render_complete", this.In, this)
    }
    ;
    z.TF.prototype.h = function() {
        z.TF.b.h.call(this);
        this.w = this.fD = this.be = null
    }
    ;
    z.u(XF, z.D);
    z.e = XF.prototype;
    z.e.Yl = !1;
    z.e.Il = 0;
    z.e.Ca = null;
    z.e.Bv = function() {
        this.Ca || this.Il ? this.Yl = !0 : this.Ge()
    }
    ;
    z.e.stop = function() {
        this.Ca && (z.s.clearTimeout(this.Ca),
        this.Ca = null,
        this.Yl = !1)
    }
    ;
    z.e.pause = function() {
        this.Il++
    }
    ;
    z.e.Ps = function() {
        this.Il--;
        this.Il || !this.Yl || this.Ca || (this.Yl = !1,
        this.Ge())
    }
    ;
    z.e.h = function() {
        XF.b.h.call(this);
        this.stop()
    }
    ;
    z.e.MU = function() {
        this.Ca = null;
        this.Yl && !this.Il && (this.Yl = !1,
        this.Ge())
    }
    ;
    z.e.Ge = function() {
        this.Ca = el(this.Ou, this.zb);
        this.ai.call(this.pa)
    }
    ;
    z.u(z.YF, Hp);
    z.e = z.YF.prototype;
    z.e.ge = function(a, b) {
        this.kN = b.f();
        a.e(b, "likeClicked", this.mR).e(b, ["approveClicked", "denyClicked"], this.CE).e(b, "renderComplete", this.TR);
        this.d.H.Fm && (this.et = new XF(this.Py,300,this),
        a.e(window, "scroll", (0,
        z.q)(this.et.Bv, this.et)),
        this.d.subscribe("comment_rendered", this.oQ, this),
        this.d.subscribe("render_complete", this.sQ, this),
        this.d.subscribe("bootstrap_data_loaded", this.ZR, this))
    }
    ;
    z.e.mR = function(a) {
        var b = z.Gq.D();
        if (z.F.kc())
            b.Oa(z.W.get(z.W.g.YJ)),
            b.open();
        else {
            var c;
            a.zS ? (c = this.d.lb.dX,
            this.d.$b.send(z.Xn("Unlike", {
                bc: a.xa
            }))) : (c = this.d.lb.rx,
            this.d.$b.send(z.Xn("Like", {
                bc: a.xa
            })));
            var d = (0,
            z.q)(function() {
                try {
                    c.call(this.d.lb, a.xa)
                } catch (d) {
                    if ("liked_own_comment" == d)
                        b.Oa(z.W.get(z.W.g.ZJ)),
                        b.open();
                    else
                        throw d;
                }
            }, this)
              , f = this.d.u.v();
            z.Ih(this.d.Ud, f, d)
        }
    }
    ;
    z.e.CE = function(a) {
        var b = this.d.lb, c, d;
        "approveClicked" === a.type ? (c = b.WT,
        d = z.Yr.op) : (c = b.XT,
        d = z.Yr.NONE);
        try {
            c.call(b, a.xa),
            a.xa.set(z.Jm, d)
        } catch (f) {
            switch (f) {
            case "insufficient_permissions":
                a = z.Gq.D();
                a.Oa(z.W.get(z.W.g.gA));
                a.open();
                break;
            default:
                throw f;
            }
        }
    }
    ;
    z.e.TR = function(a) {
        if (a.xa.Gb()) {
            var b = this.d.u.v()
              , b = {
                metric: "browser.comments.comment.controller.render.tweets." + b.get(b.k.zh).replace(/\./g, "_"),
                value: 1,
                type: "counter",
                rate: .1
            };
            this.d.fz.send([{
                metric: "browser.comments.comment.controller.render.tweet",
                value: 1,
                type: "counter",
                rate: .1
            }, b]);
            this.d.aX.wT([hn(a.xa)])
        }
    }
    ;
    z.e.oQ = function(a) {
        var b = a.l;
        b.get(z.Rm) || (this.pI[b.id] = a)
    }
    ;
    z.e.sQ = function() {
        $F(this, ZF(this, null));
        this.wk.length && (this.lG = oj(this.wk).f(),
        this.Py())
    }
    ;
    z.e.ZR = function() {
        $F(this, ZF(this, this.lG));
        this.lG = oj(this.wk).f();
        this.Py()
    }
    ;
    z.e.Py = function() {
        ij(this.wk, function(a) {
            var b = a.f()
              , c = z.Dc(b).la()
              , d = Gl(c.body)
              , d = ul(d);
            if (c = z.Vc(c, b))
                b = Ol(b),
                c = b.left <= d.left + d.width && d.left <= b.left + b.width && b.top <= d.top + d.height && d.top <= b.top + b.height;
            if (c)
                return a.iC = z.xo(op, {
                    j: {
                        xW: z.W.get(z.W.g.pM)
                    }
                }),
                b = z.Eh("fyre-comment-ad-container", a.iC),
                d = a.L.u.v(),
                d = a.L.H.Fm.delegate({
                    title: d.get(z.U.ab),
                    tags: d.get(z.U.td),
                    id: d.get(z.U.X),
                    url: d.get(z.U.URL),
                    networkId: d.get(z.U.zh),
                    siteId: d.get(z.U.ic)
                }),
                b.appendChild(z.Uc(d) ? d : d.element),
                z.Ki(a.c, a.iC),
                z.ga(d.callback) && d.callback(),
                !0
        }, this);
        this.wk.length ? this.et.Il = 0 : this.et.pause()
    }
    ;
    z.u(z.aG, Hp);
    z.e = z.aG.prototype;
    z.e.h = function() {
        z.aG.b.h.call(this);
        z.cG(this)
    }
    ;
    z.e.fw = function(a, b, c) {
        b = z.$a(b);
        z.ej(b, function(a, b) {
            return a.content.createdAt < b.content.createdAt ? -1 : 1
        });
        for (var d = 0, f = b.length; d < f; d++)
            this.ew(a, b[d], c);
        a.EE && a.EE()
    }
    ;
    z.e.Le = function(a, b, c) {
        if (z.cb(b))
            this.d.T.O("stream_view_reset");
        else if (!a.La)
            if (c)
                z.y(b, z.pa(this.BE, a), this);
            else {
                var d = {}
                  , f = {};
                z.y(b, function(a, b) {
                    4 === a.type ? d[b] = a : f[b] = a
                });
                !z.cb(f) && this.fw(a, f);
                z.cb(d) || z.y(d, z.pa(this.BE, a), this);
                a.Ho && a.Ho();
                this.d.T.O("stream_view_reset")
            }
    }
    ;
    z.e.BE = function(a, b, c) {
        function d(a, b, d) {
            if (/\.[0-9]+$/.test(c)) {
                var k = c.split(".");
                c = k.slice(0, k.length - 1).join(".")
            }
            z.ga(a) && a.call(d, b, c)
        }
        z.y(CG, function(f) {
            var g = dG(b, f);
            if (!z.cb(g))
                switch (g.Vj = c,
                f) {
                case "featuredmessage":
                    d(a.OE, g, a);
                    break;
                case "messagetag":
                    d(a.zR, g, a);
                    break;
                case "rating":
                    d(a.Bw, g, a);
                    break;
                case "vote":
                case "likedBy":
                    d(a.zw, g, a)
                }
        }, this)
    }
    ;
    z.e.ge = function(a, b) {
        a.e(b, "postComment", this.kF);
        a.e(b, "showMore", this.rF);
        a.e(b, "streamRefreshClicked", this.QR);
        a.e(b, "streamRendered", this.mS);
        a.e(b, "threadBreakout", this.vr);
        a.e(b, "request_featured_content", this.jw);
        this.uW = b
    }
    ;
    z.e.rF = function(a) {
        var b = null != this.d.H.Xh;
        this.d.H.zx = null;
        this.d.H.Xh = null;
        var b = this.d.Lb.Xq(a.MC, a.direction, 50, b)
          , c = (0,
        z.q)(a.target.Ha.Ws, a.target.Ha);
        if (b.get(b.k.mm))
            c();
        else
            b.on(b.jc(b.k.mm), c, this);
        c = (0,
        z.q)(function(b) {
            this.Le(a.target, b);
            a.Wb()
        }, this);
        z.bG(this, b, c, a.lj);
        this.d.O("show_more");
        this.d.$b.send(z.Xn("RequestMore"))
    }
    ;
    z.e.QR = function(a) {
        var b = z.eG(this, this.Em)
          , c = z.mu(this.d.Lb, "new");
        z.bG(this, c, (0,
        z.q)(this.Le, this, b), a.Wb)
    }
    ;
    z.e.mS = function(a) {
        var b = z.mu(this.d.Lb, a.direction);
        z.bG(this, b, (0,
        z.q)(this.Le, this, a.target))
    }
    ;
    z.e.jw = function(a) {
        var b;
        b = this.d.Lb;
        b.UD || (b.UD = new eu(b.L));
        b = b.UD.mb();
        z.bG(this, b, (0,
        z.q)(this.Le, this, a.vX), null, !0)
    }
    ;
    z.e.vr = function(a) {
        function b() {
            a.Wb();
            (new z.fm(c.c,z.oh(void 0) ? void 0 : 300)).play()
        }
        var c = z.eG(this, 5)
          , d = this.d.Lb.Wv(a.dt, !1);
        z.bG(this, d, (0,
        z.q)(function(a) {
            this.Le(c, a);
            b();
            b = z.n
        }, this), a.lj)
    }
    ;
    z.e.NE = function(a) {
        var b = a.n
          , c = dn;
        if (!b.get("hasBeenExpanded")) {
            b.set("expanding", !0);
            var d = function() {
                b.set(c, a.Xo.$c)
            }
              , f = (0,
            z.q)(function(f) {
                b.set(c, a.Xo.$c, !1);
                b.set("hasBeenExpanded", !0);
                b.set("expanding", !1);
                this.fw(a.iO, f, !0);
                this.pa.e(a.Xo, "threadVisChanged", d)
            }, this)
              , g = this.d.Lb.Zq(b);
            g.on(g.Ga.dk, f, this);
            f(g.get(g.k.gf))
        }
    }
    ;
    z.u(fG, xy);
    ny("goog-custom-button", function() {
        return new fG(null)
    });
    z.u(gG, fG);
    gG.prototype.m = function() {
        gG.b.m.call(this);
        this.p().e(this, "action", this.ib)
    }
    ;
    gG.prototype.ib = function() {
        this.dispatchEvent({
            CC: this,
            type: this.Ez
        })
    }
    ;
    var QJ = {
        cancel: "fyre.v2.editor.EVENTS.CANCEL_CLICKED",
        follow: "fyre.v2.editor.EVENTS.FOLLOW_CLICKED",
        format: "fyre.v2.editor.EVENTS.FORMAT_CLICKED",
        media: "fyre.v2.editor.EVENTS.MEDIA_UPLOAD_CLICKED",
        mention: "fyre.v2.editor.EVENTS.MENTION_CLICKED",
        post: "fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED",
        raw: "fyre.v2.editor.EVENTS.RAW_CLICKED"
    };
    z.u(hG, BB);
    hG.prototype.P = function() {
        return "fyre-button-left"
    }
    ;
    z.ca(hG);
    z.u(iG, BB);
    iG.prototype.P = function() {
        return "fyre-button-right"
    }
    ;
    z.ca(iG);
    z.u(jG, xB);
    ny("goog-toolbar-separator", function() {
        return new jG
    });
    z.u(kG, z.T);
    var RJ = hG.D()
      , SJ = iG.D()
      , TJ = {};
    TJ.cancel = SJ;
    TJ.follow = RJ;
    TJ.format = RJ;
    TJ.media = RJ;
    TJ.mention = RJ;
    TJ.post = SJ;
    TJ.raw = RJ;
    kG.prototype.Ik = function(a, b, c, d) {
        b = new gG(b,QJ[a],TJ[a]);
        b.Vs("button");
        b.Tk(c, !0);
        this.SW[a] = b;
        this.Ka.G(b, !0);
        Ai(b.f(), !0);
        d && z.Hc(b.f(), {
            "aria-label": d
        });
        return b
    }
    ;
    kG.prototype.r = function() {
        this.c = z.xo(by);
        this.Wu(this.c);
        this.Ka.xc(this)
    }
    ;
    kG.prototype.Wu = function(a) {
        var b = [new jG];
        this.Ka = QC(b, a)
    }
    ;
    kG.prototype.h = function() {
        this.Ka && this.Ka.q();
        this.Ka = null;
        kG.b.h.call(this)
    }
    ;
    z.u(z.lG, AF);
    z.e = z.lG.prototype;
    z.e.lk = z.lG.prototype.Xt = ["media", "post"];
    z.e.clear = function() {
        this.wd.value = ""
    }
    ;
    z.e.K = function(a) {
        z.lG.b.K.call(this, a);
        z.to(a, this.an, this.t());
        this.$m = this.o("fyre-editor-container");
        this.wd = this.o("fyre-editor-field-mobile");
        this.wd.value = this.TS;
        this.G(this.$r, !0);
        this.Ka = new kG;
        this.G(this.Ka, !0);
        this.Yr()
    }
    ;
    z.e.m = function() {
        z.lG.b.m.call(this);
        var a = this.p();
        a.e(this.Ka, ["fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED", "fyre.v2.editor.EVENTS.EDIT_COMMENT_CLICKED"], this.hl);
        this.Wc = this.o("fyre-editor-spinner");
        z.N(this.Wc, !1);
        a.e(this.wd, "keyup", this.ni);
        a.e(this.wd, "keydown", this.ni);
        a.e(this.Ka, "fyre.v2.editor.EVENTS.MEDIA_UPLOAD_CLICKED", this.aF);
        this.dispatchEvent("fyre.v2.editor.EVENTS.LOAD")
    }
    ;
    z.e.S = function() {
        this.Sx = this.wd = null;
        z.lG.b.S.call(this)
    }
    ;
    z.e.ag = function() {
        this.wd.focus();
        var a = this.wd.textContent.length;
        this.wd.setSelectionRange(a, a)
    }
    ;
    z.e.pj = function() {
        return oG(this, this.wd.value)
    }
    ;
    z.e.hl = function(a) {
        z.lG.b.hl.call(this, a);
        window.document.activeElement.blur();
        a.target.c.focus()
    }
    ;
    z.e.tj = function(a) {
        z.lG.b.tj.call(this, a);
        this.wd.value = "";
        DF(this, !0);
        this.Ad();
        this.ni()
    }
    ;
    z.e.fo = z.n;
    z.e.ni = function() {
        var a = this.wd.clientWidth / 12
          , b = z.nj(this.wd.value.split("\n"), function(b, d) {
            return b + Math.max(Math.ceil(d.length / a), 1)
        }, 0);
        this.wd.rows = b + 1
    }
    ;
    z.u(pG, z.T);
    pG.prototype.r = function() {
        this.c = z.xo(ay);
        z.N(this.c, !1)
    }
    ;
    pG.prototype.m = function() {
        pG.b.m.call(this);
        var a = this.o("fyre-icon-remove");
        this.p().e(a, "click", this.RR)
    }
    ;
    pG.prototype.RR = function() {
        qG(this, null);
        this.dispatchEvent("fyre.v2.editor.EVENTS.RAW_CLEARED")
    }
    ;
    z.u(z.rG, AF);
    var UJ = {
        r0: "fyre-editor-small"
    };
    z.A(UJ, {
        Qz: "fyre-editor-container",
        vY: "fyre-editor-container-focus",
        hf: "fyre-edit-editor",
        LJ: "fyre-editor-editable",
        uh: "fyre-editor",
        oK: "fyre-editor-field",
        HZ: "fyre-editor-iframe",
        JA: "fyre-liveblog-editor",
        F_: "fyre-post-button-disabled",
        G_: "fyre-post-button-enabled",
        q0: "fyre-editor-slide",
        y0: "fyre-editor-spinner",
        E0: "fyre-editor-subpart",
        PB: "fyre-editor-toolbar"
    });
    z.e = z.rG.prototype;
    z.e.Ui = function(a) {
        a = z.rG.b.Ui.call(this, a);
        var b = this.Cl.raw;
        b && (a.sV = b.Pv());
        return a
    }
    ;
    z.e.clear = function() {
        this.Z.rg(this.Gm, z.C ? " " : "", !0)
    }
    ;
    z.e.Wu = function() {
        this.G(this.$r);
        this.Ka = new kG;
        this.G(this.Ka);
        var a = this.o("fyre-editor-container");
        this.$r.ra(a);
        this.Ka.ra(a);
        this.p().e(this.Ka, "fyre.v2.editor.EVENTS.MEDIA_UPLOAD_CLICKED", this.aF)
    }
    ;
    z.e.K = function(a) {
        z.rG.b.K.call(this, a);
        z.to(this.c, this.an, this.t())
    }
    ;
    z.e.h = function() {
        this.Wc = this.$m = this.cj = null;
        this.Z && this.Z.q();
        z.rG.b.h.call(this)
    }
    ;
    z.e.m = function() {
        z.rG.b.m.call(this);
        this.cj = this.o(UJ.LJ);
        var a = 285 > z.Ml(this.c).width;
        kk(this.c, "fyre-editor-small", a)
    }
    ;
    z.e.ag = function() {
        this.Z.focus();
        if (!z.C || z.B(9)) {
            var a = this.Z.Pq.childNodes;
            a.length && (a = a[a.length - 1].childNodes,
            (0,
            window.setTimeout)(z.pa(gA, a[a.length - 1]), 10))
        }
    }
    ;
    z.e.pj = function() {
        var a = z.xD(this.Z)
          , a = a.replace(/(fyre-mention[^\-partial][^>]*>)(@)/g, "$1")
          , a = a.replace(/^<p>&nbsp;/, "\x3cp\x3e")
          , a = a.replace(/<span class="fyre-mention-space">(&nbsp;|\s)<\/span>/, " ")
          , a = a.replace(/&nbsp;&nbsp;/, " ");
        return a = z.yi(a)
    }
    ;
    z.e.tj = function(a) {
        z.rG.b.tj.call(this, a);
        this.clear();
        this.Z.rg(this.Gm, z.C ? " " : "", !0);
        (a = this.Z.We["+mention"]) && a.reset();
        this.Z.We["+resize"].reset();
        this.wj || this.ix || this.ag();
        if (a = this.Cl.raw)
            qG(this.zs, null),
            a.clear()
    }
    ;
    z.e.Xw = function() {
        this.Z.rg(this.Gm, this.C.content || (z.C ? " " : ""), !0)
    }
    ;
    z.e.Av = function() {
        zD(this.Z);
        this.Xw();
        var a = this.Z.f();
        z.dk(a, "fyre-editor-field");
        z.dk(this.$m, "fyre-editor-container-focus");
        kk(this.cj, "fyre-editor-iframe", this.Z.kb());
        this.Z.kb() && (0,
        window.setTimeout)((0,
        z.q)(function() {
            var b = th(window.document, "IFRAME", null, this.c);
            z.Hc(b[0], {
                style: ""
            });
            z.Hc(b[0], {
                "aria-label": "editor"
            });
            z.Hc(b[0], {
                title: "editor"
            });
            z.Hc(a, {
                style: ""
            });
            z.Hc(this.cj, {
                style: ""
            });
            vG(this, z.v.J.qb + "/css/editor.css");
            this.Z.kb() && (b = this.C.hv,
            z.ba(b) && (z.ia(b) && !z.ea(b) ? tG(this, b) : z.ea(b) || z.p(b) && z.ua(b, "http") ? vG(this, b) : z.p(b) && uG(this, b)))
        }, this), 10);
        this.C.tX && z.dk(this.c, "fyre-editor-slide");
        (this.C.tX || this.wj || this.ix) && this.ag();
        var b = this.p();
        b.e(this.Ka, ["fyre.v2.editor.EVENTS.POST_COMMENT_CLICKED", "fyre.v2.editor.EVENTS.EDIT_COMMENT_CLICKED"], this.hl);
        b.e(this.Z, "shortcut_modifier_enter", this.hl);
        var c = CF(this);
        c && c.dc() && c.dc().f() && b.e(c.dc().f(), "keypress", function(a) {
            13 === a.keyCode && this.hl(a)
        });
        wG(this);
        if (c = this.Cl.raw)
            this.G(this.zs, this),
            b.e(c, "fyre.v2.editor.EVENTS.RAW_SUBMITTED", this.Cw),
            b.e(this.zs, "fyre.v2.editor.EVENTS.RAW_CLEARED", (0,
            z.q)(c.clear, c))
    }
    ;
    z.e.Cw = function(a) {
        qG(this.zs, a.ol)
    }
    ;
    z.e.fo = function(a) {
        this.Z.execCommand("+mention", a)
    }
    ;
    z.e.uo = function() {
        hD(this.Z, new HE(this.Vz));
        hD(this.Z, new $E("P"));
        hD(this.Z, new vF);
        hD(this.Z, new BE);
        hD(this.Z, new yE("shortcut_modifier_enter"))
    }
    ;
}
)(fyre.conv);
