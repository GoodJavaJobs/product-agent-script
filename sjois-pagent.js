(function () {
  "use strict";
  var Zn,
    z,
    va,
    yt,
    xa,
    ka,
    Sa,
    Ea,
    ni,
    ri,
    ii,
    dn = {},
    Ca = [],
    sh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    fn = Array.isArray;
  function Ge(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function si(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function ai(t, e, n) {
    var r,
      i,
      s,
      a = {};
    for (s in e)
      s == "key" ? (r = e[s]) : s == "ref" ? (i = e[s]) : (a[s] = e[s]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? Zn.call(arguments, 2) : n),
      typeof t == "function" && t.defaultProps != null)
    )
      for (s in t.defaultProps) a[s] == null && (a[s] = t.defaultProps[s]);
    return er(t, a, r, i, null);
  }
  function er(t, e, n, r, i) {
    var s = {
      type: t,
      props: e,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: i ?? ++va,
      __i: -1,
      __u: 0,
    };
    return i == null && z.vnode != null && z.vnode(s), s;
  }
  function wt(t) {
    return t.children;
  }
  function Xe(t, e) {
    (this.props = t), (this.context = e);
  }
  function It(t, e) {
    if (e == null) return t.__ ? It(t.__, t.__i + 1) : null;
    for (var n; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
    return typeof t.type == "function" ? It(t) : null;
  }
  function Aa(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
        if ((n = t.__k[e]) != null && n.__e != null) {
          t.__e = t.__c.base = n.__e;
          break;
        }
      return Aa(t);
    }
  }
  function Pa(t) {
    ((!t.__d && (t.__d = !0) && yt.push(t) && !tr.__r++) ||
      xa != z.debounceRendering) &&
      ((xa = z.debounceRendering) || ka)(tr);
  }
  function tr() {
    for (var t, e, n, r, i, s, a, o = 1; yt.length; )
      yt.length > o && yt.sort(Sa),
        (t = yt.shift()),
        (o = yt.length),
        t.__d &&
          ((n = void 0),
          (i = (r = (e = t).__v).__e),
          (s = []),
          (a = []),
          e.__P &&
            (((n = Ge({}, r)).__v = r.__v + 1),
            z.vnode && z.vnode(n),
            oi(
              e.__P,
              n,
              r,
              e.__n,
              e.__P.namespaceURI,
              32 & r.__u ? [i] : null,
              s,
              i ?? It(r),
              !!(32 & r.__u),
              a
            ),
            (n.__v = r.__v),
            (n.__.__k[n.__i] = n),
            $a(s, n, a),
            n.__e != i && Aa(n)));
    tr.__r = 0;
  }
  function Ta(t, e, n, r, i, s, a, o, l, u, c) {
    var h,
      f,
      d,
      g,
      _,
      y,
      b = (r && r.__k) || Ca,
      w = e.length;
    for (l = ah(n, e, b, l, w), h = 0; h < w; h++)
      (d = n.__k[h]) != null &&
        ((f = d.__i == -1 ? dn : b[d.__i] || dn),
        (d.__i = h),
        (y = oi(t, d, f, i, s, a, o, l, u, c)),
        (g = d.__e),
        d.ref &&
          f.ref != d.ref &&
          (f.ref && li(f.ref, null, d), c.push(d.ref, d.__c || g, d)),
        _ == null && g != null && (_ = g),
        4 & d.__u || f.__k === d.__k
          ? (l = Ia(d, l, t))
          : typeof d.type == "function" && y !== void 0
          ? (l = y)
          : g && (l = g.nextSibling),
        (d.__u &= -7));
    return (n.__e = _), l;
  }
  function ah(t, e, n, r, i) {
    var s,
      a,
      o,
      l,
      u,
      c = n.length,
      h = c,
      f = 0;
    for (t.__k = new Array(i), s = 0; s < i; s++)
      (a = e[s]) != null && typeof a != "boolean" && typeof a != "function"
        ? ((l = s + f),
          ((a = t.__k[s] =
            typeof a == "string" ||
            typeof a == "number" ||
            typeof a == "bigint" ||
            a.constructor == String
              ? er(null, a, null, null, null)
              : fn(a)
              ? er(wt, { children: a }, null, null, null)
              : a.constructor == null && a.__b > 0
              ? er(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
              : a).__ = t),
          (a.__b = t.__b + 1),
          (o = null),
          (u = a.__i = oh(a, n, l, h)) != -1 &&
            (h--, (o = n[u]) && (o.__u |= 2)),
          o == null || o.__v == null
            ? (u == -1 && (i > c ? f-- : i < c && f++),
              typeof a.type != "function" && (a.__u |= 4))
            : u != l &&
              (u == l - 1
                ? f--
                : u == l + 1
                ? f++
                : (u > l ? f-- : f++, (a.__u |= 4))))
        : (t.__k[s] = null);
    if (h)
      for (s = 0; s < c; s++)
        (o = n[s]) != null &&
          (2 & o.__u) == 0 &&
          (o.__e == r && (r = It(o)), ja(o, o));
    return r;
  }
  function Ia(t, e, n) {
    var r, i;
    if (typeof t.type == "function") {
      for (r = t.__k, i = 0; r && i < r.length; i++)
        r[i] && ((r[i].__ = t), (e = Ia(r[i], e, n)));
      return e;
    }
    t.__e != e &&
      (e && t.type && !n.contains(e) && (e = It(t)),
      n.insertBefore(t.__e, e || null),
      (e = t.__e));
    do e = e && e.nextSibling;
    while (e != null && e.nodeType == 8);
    return e;
  }
  function nr(t, e) {
    return (
      (e = e || []),
      t == null ||
        typeof t == "boolean" ||
        (fn(t)
          ? t.some(function (n) {
              nr(n, e);
            })
          : e.push(t)),
      e
    );
  }
  function oh(t, e, n, r) {
    var i,
      s,
      a = t.key,
      o = t.type,
      l = e[n];
    if (
      (l === null && t.key == null) ||
      (l && a == l.key && o == l.type && (2 & l.__u) == 0)
    )
      return n;
    if (r > (l != null && (2 & l.__u) == 0 ? 1 : 0))
      for (i = n - 1, s = n + 1; i >= 0 || s < e.length; ) {
        if (i >= 0) {
          if ((l = e[i]) && (2 & l.__u) == 0 && a == l.key && o == l.type)
            return i;
          i--;
        }
        if (s < e.length) {
          if ((l = e[s]) && (2 & l.__u) == 0 && a == l.key && o == l.type)
            return s;
          s++;
        }
      }
    return -1;
  }
  function Ra(t, e, n) {
    e[0] == "-"
      ? t.setProperty(e, n ?? "")
      : (t[e] =
          n == null ? "" : typeof n != "number" || sh.test(e) ? n : n + "px");
  }
  function rr(t, e, n, r, i) {
    var s;
    e: if (e == "style")
      if (typeof n == "string") t.style.cssText = n;
      else {
        if ((typeof r == "string" && (t.style.cssText = r = ""), r))
          for (e in r) (n && e in n) || Ra(t.style, e, "");
        if (n) for (e in n) (r && n[e] == r[e]) || Ra(t.style, e, n[e]);
      }
    else if (e[0] == "o" && e[1] == "n")
      (s = e != (e = e.replace(Ea, "$1"))),
        (e =
          e.toLowerCase() in t || e == "onFocusOut" || e == "onFocusIn"
            ? e.toLowerCase().slice(2)
            : e.slice(2)),
        t.l || (t.l = {}),
        (t.l[e + s] = n),
        n
          ? r
            ? (n.u = r.u)
            : ((n.u = ni), t.addEventListener(e, s ? ii : ri, s))
          : t.removeEventListener(e, s ? ii : ri, s);
    else {
      if (i == "http://www.w3.org/2000/svg")
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        e != "width" &&
        e != "height" &&
        e != "href" &&
        e != "list" &&
        e != "form" &&
        e != "tabIndex" &&
        e != "download" &&
        e != "rowSpan" &&
        e != "colSpan" &&
        e != "role" &&
        e != "popover" &&
        e in t
      )
        try {
          t[e] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && e[4] != "-")
          ? t.removeAttribute(e)
          : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
    }
  }
  function Oa(t) {
    return function (e) {
      if (this.l) {
        var n = this.l[e.type + t];
        if (e.t == null) e.t = ni++;
        else if (e.t < n.u) return;
        return n(z.event ? z.event(e) : e);
      }
    };
  }
  function oi(t, e, n, r, i, s, a, o, l, u) {
    var c,
      h,
      f,
      d,
      g,
      _,
      y,
      b,
      w,
      x,
      S,
      P,
      v,
      T,
      V,
      O,
      j,
      C = e.type;
    if (e.constructor != null) return null;
    128 & n.__u && ((l = !!(32 & n.__u)), (s = [(o = e.__e = n.__e)])),
      (c = z.__b) && c(e);
    e: if (typeof C == "function")
      try {
        if (
          ((b = e.props),
          (w = "prototype" in C && C.prototype.render),
          (x = (c = C.contextType) && r[c.__c]),
          (S = c ? (x ? x.props.value : c.__) : r),
          n.__c
            ? (y = (h = e.__c = n.__c).__ = h.__E)
            : (w
                ? (e.__c = h = new C(b, S))
                : ((e.__c = h = new Xe(b, S)),
                  (h.constructor = C),
                  (h.render = uh)),
              x && x.sub(h),
              (h.props = b),
              h.state || (h.state = {}),
              (h.context = S),
              (h.__n = r),
              (f = h.__d = !0),
              (h.__h = []),
              (h._sb = [])),
          w && h.__s == null && (h.__s = h.state),
          w &&
            C.getDerivedStateFromProps != null &&
            (h.__s == h.state && (h.__s = Ge({}, h.__s)),
            Ge(h.__s, C.getDerivedStateFromProps(b, h.__s))),
          (d = h.props),
          (g = h.state),
          (h.__v = e),
          f)
        )
          w &&
            C.getDerivedStateFromProps == null &&
            h.componentWillMount != null &&
            h.componentWillMount(),
            w && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (
            (w &&
              C.getDerivedStateFromProps == null &&
              b !== d &&
              h.componentWillReceiveProps != null &&
              h.componentWillReceiveProps(b, S),
            (!h.__e &&
              h.shouldComponentUpdate != null &&
              h.shouldComponentUpdate(b, h.__s, S) === !1) ||
              e.__v == n.__v)
          ) {
            for (
              e.__v != n.__v &&
                ((h.props = b), (h.state = h.__s), (h.__d = !1)),
                e.__e = n.__e,
                e.__k = n.__k,
                e.__k.some(function (I) {
                  I && (I.__ = e);
                }),
                P = 0;
              P < h._sb.length;
              P++
            )
              h.__h.push(h._sb[P]);
            (h._sb = []), h.__h.length && a.push(h);
            break e;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(b, h.__s, S),
            w &&
              h.componentDidUpdate != null &&
              h.__h.push(function () {
                h.componentDidUpdate(d, g, _);
              });
        }
        if (
          ((h.context = S),
          (h.props = b),
          (h.__P = t),
          (h.__e = !1),
          (v = z.__r),
          (T = 0),
          w)
        ) {
          for (
            h.state = h.__s,
              h.__d = !1,
              v && v(e),
              c = h.render(h.props, h.state, h.context),
              V = 0;
            V < h._sb.length;
            V++
          )
            h.__h.push(h._sb[V]);
          h._sb = [];
        } else
          do
            (h.__d = !1),
              v && v(e),
              (c = h.render(h.props, h.state, h.context)),
              (h.state = h.__s);
          while (h.__d && ++T < 25);
        (h.state = h.__s),
          h.getChildContext != null && (r = Ge(Ge({}, r), h.getChildContext())),
          w &&
            !f &&
            h.getSnapshotBeforeUpdate != null &&
            (_ = h.getSnapshotBeforeUpdate(d, g)),
          (O = c),
          c != null &&
            c.type === wt &&
            c.key == null &&
            (O = La(c.props.children)),
          (o = Ta(t, fn(O) ? O : [O], e, n, r, i, s, a, o, l, u)),
          (h.base = e.__e),
          (e.__u &= -161),
          h.__h.length && a.push(h),
          y && (h.__E = h.__ = null);
      } catch (I) {
        if (((e.__v = null), l || s != null))
          if (I.then) {
            for (
              e.__u |= l ? 160 : 128;
              o && o.nodeType == 8 && o.nextSibling;

            )
              o = o.nextSibling;
            (s[s.indexOf(o)] = null), (e.__e = o);
          } else for (j = s.length; j--; ) si(s[j]);
        else (e.__e = n.__e), (e.__k = n.__k);
        z.__e(I, e, n);
      }
    else
      s == null && e.__v == n.__v
        ? ((e.__k = n.__k), (e.__e = n.__e))
        : (o = e.__e = lh(n.__e, e, n, r, i, s, a, l, u));
    return (c = z.diffed) && c(e), 128 & e.__u ? void 0 : o;
  }
  function $a(t, e, n) {
    for (var r = 0; r < n.length; r++) li(n[r], n[++r], n[++r]);
    z.__c && z.__c(e, t),
      t.some(function (i) {
        try {
          (t = i.__h),
            (i.__h = []),
            t.some(function (s) {
              s.call(i);
            });
        } catch (s) {
          z.__e(s, i.__v);
        }
      });
  }
  function La(t) {
    return typeof t != "object" || t == null || (t.__b && t.__b > 0)
      ? t
      : fn(t)
      ? t.map(La)
      : Ge({}, t);
  }
  function lh(t, e, n, r, i, s, a, o, l) {
    var u,
      c,
      h,
      f,
      d,
      g,
      _,
      y = n.props,
      b = e.props,
      w = e.type;
    if (
      (w == "svg"
        ? (i = "http://www.w3.org/2000/svg")
        : w == "math"
        ? (i = "http://www.w3.org/1998/Math/MathML")
        : i || (i = "http://www.w3.org/1999/xhtml"),
      s != null)
    ) {
      for (u = 0; u < s.length; u++)
        if (
          (d = s[u]) &&
          "setAttribute" in d == !!w &&
          (w ? d.localName == w : d.nodeType == 3)
        ) {
          (t = d), (s[u] = null);
          break;
        }
    }
    if (t == null) {
      if (w == null) return document.createTextNode(b);
      (t = document.createElementNS(i, w, b.is && b)),
        o && (z.__m && z.__m(e, s), (o = !1)),
        (s = null);
    }
    if (w == null) y === b || (o && t.data == b) || (t.data = b);
    else {
      if (
        ((s = s && Zn.call(t.childNodes)), (y = n.props || dn), !o && s != null)
      )
        for (y = {}, u = 0; u < t.attributes.length; u++)
          y[(d = t.attributes[u]).name] = d.value;
      for (u in y)
        if (((d = y[u]), u != "children")) {
          if (u == "dangerouslySetInnerHTML") h = d;
          else if (!(u in b)) {
            if (
              (u == "value" && "defaultValue" in b) ||
              (u == "checked" && "defaultChecked" in b)
            )
              continue;
            rr(t, u, null, d, i);
          }
        }
      for (u in b)
        (d = b[u]),
          u == "children"
            ? (f = d)
            : u == "dangerouslySetInnerHTML"
            ? (c = d)
            : u == "value"
            ? (g = d)
            : u == "checked"
            ? (_ = d)
            : (o && typeof d != "function") ||
              y[u] === d ||
              rr(t, u, d, y[u], i);
      if (c)
        o ||
          (h && (c.__html == h.__html || c.__html == t.innerHTML)) ||
          (t.innerHTML = c.__html),
          (e.__k = []);
      else if (
        (h && (t.innerHTML = ""),
        Ta(
          e.type == "template" ? t.content : t,
          fn(f) ? f : [f],
          e,
          n,
          r,
          w == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
          s,
          a,
          s ? s[0] : n.__k && It(n, 0),
          o,
          l
        ),
        s != null)
      )
        for (u = s.length; u--; ) si(s[u]);
      o ||
        ((u = "value"),
        w == "progress" && g == null
          ? t.removeAttribute("value")
          : g != null &&
            (g !== t[u] ||
              (w == "progress" && !g) ||
              (w == "option" && g != y[u])) &&
            rr(t, u, g, y[u], i),
        (u = "checked"),
        _ != null && _ != t[u] && rr(t, u, _, y[u], i));
    }
    return t;
  }
  function li(t, e, n) {
    try {
      if (typeof t == "function") {
        var r = typeof t.__u == "function";
        r && t.__u(), (r && e == null) || (t.__u = t(e));
      } else t.current = e;
    } catch (i) {
      z.__e(i, n);
    }
  }
  function ja(t, e, n) {
    var r, i;
    if (
      (z.unmount && z.unmount(t),
      (r = t.ref) && ((r.current && r.current != t.__e) || li(r, null, e)),
      (r = t.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (s) {
          z.__e(s, e);
        }
      r.base = r.__P = null;
    }
    if ((r = t.__k))
      for (i = 0; i < r.length; i++)
        r[i] && ja(r[i], e, n || typeof t.type != "function");
    n || si(t.__e), (t.__c = t.__ = t.__e = void 0);
  }
  function uh(t, e, n) {
    return this.constructor(t, n);
  }
  function ch(t, e, n) {
    var r, i, s, a;
    e == document && (e = document.documentElement),
      z.__ && z.__(t, e),
      (i = (r = !1) ? null : e.__k),
      (s = []),
      (a = []),
      oi(
        e,
        (t = e.__k = ai(wt, null, [t])),
        i || dn,
        dn,
        e.namespaceURI,
        i ? null : e.firstChild ? Zn.call(e.childNodes) : null,
        s,
        i ? i.__e : e.firstChild,
        r,
        a
      ),
      $a(s, t, a);
  }
  (Zn = Ca.slice),
    (z = {
      __e: function (t, e, n, r) {
        for (var i, s, a; (e = e.__); )
          if ((i = e.__c) && !i.__)
            try {
              if (
                ((s = i.constructor) &&
                  s.getDerivedStateFromError != null &&
                  (i.setState(s.getDerivedStateFromError(t)), (a = i.__d)),
                i.componentDidCatch != null &&
                  (i.componentDidCatch(t, r || {}), (a = i.__d)),
                a)
              )
                return (i.__E = i);
            } catch (o) {
              t = o;
            }
        throw t;
      },
    }),
    (va = 0),
    (Xe.prototype.setState = function (t, e) {
      var n;
      (n =
        this.__s != null && this.__s != this.state
          ? this.__s
          : (this.__s = Ge({}, this.state))),
        typeof t == "function" && (t = t(Ge({}, n), this.props)),
        t && Ge(n, t),
        t != null && this.__v && (e && this._sb.push(e), Pa(this));
    }),
    (Xe.prototype.forceUpdate = function (t) {
      this.__v && ((this.__e = !0), t && this.__h.push(t), Pa(this));
    }),
    (Xe.prototype.render = wt),
    (yt = []),
    (ka =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Sa = function (t, e) {
      return t.__v.__b - e.__v.__b;
    }),
    (tr.__r = 0),
    (Ea = /(PointerCapture)$|Capture$/i),
    (ni = 0),
    (ri = Oa(!1)),
    (ii = Oa(!0));
  var hh = 0;
  function G(t, e, n, r, i, s) {
    e || (e = {});
    var a,
      o,
      l = e;
    if ("ref" in l)
      for (o in ((l = {}), e)) o == "ref" ? (a = e[o]) : (l[o] = e[o]);
    var u = {
      type: t,
      props: l,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --hh,
      __i: -1,
      __u: 0,
      __source: i,
      __self: s,
    };
    if (typeof t == "function" && (a = t.defaultProps))
      for (o in a) l[o] === void 0 && (l[o] = a[o]);
    return z.vnode && z.vnode(u), u;
  }
  const ui = "RFC3986",
    ci = {
      RFC1738: (t) => String(t).replace(/%20/g, "+"),
      RFC3986: (t) => String(t),
    },
    dh = "RFC1738",
    fh = Array.isArray,
    Ue = (() => {
      const t = [];
      for (let e = 0; e < 256; ++e)
        t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
      return t;
    })(),
    hi = 1024,
    ph = (t, e, n, r, i) => {
      if (t.length === 0) return t;
      let s = t;
      if (
        (typeof t == "symbol"
          ? (s = Symbol.prototype.toString.call(t))
          : typeof t != "string" && (s = String(t)),
        n === "iso-8859-1")
      )
        return escape(s).replace(/%u[0-9a-f]{4}/gi, function (o) {
          return "%26%23" + parseInt(o.slice(2), 16) + "%3B";
        });
      let a = "";
      for (let o = 0; o < s.length; o += hi) {
        const l = s.length >= hi ? s.slice(o, o + hi) : s,
          u = [];
        for (let c = 0; c < l.length; ++c) {
          let h = l.charCodeAt(c);
          if (
            h === 45 ||
            h === 46 ||
            h === 95 ||
            h === 126 ||
            (h >= 48 && h <= 57) ||
            (h >= 65 && h <= 90) ||
            (h >= 97 && h <= 122) ||
            (i === dh && (h === 40 || h === 41))
          ) {
            u[u.length] = l.charAt(c);
            continue;
          }
          if (h < 128) {
            u[u.length] = Ue[h];
            continue;
          }
          if (h < 2048) {
            u[u.length] = Ue[192 | (h >> 6)] + Ue[128 | (h & 63)];
            continue;
          }
          if (h < 55296 || h >= 57344) {
            u[u.length] =
              Ue[224 | (h >> 12)] +
              Ue[128 | ((h >> 6) & 63)] +
              Ue[128 | (h & 63)];
            continue;
          }
          (c += 1),
            (h = 65536 + (((h & 1023) << 10) | (l.charCodeAt(c) & 1023))),
            (u[u.length] =
              Ue[240 | (h >> 18)] +
              Ue[128 | ((h >> 12) & 63)] +
              Ue[128 | ((h >> 6) & 63)] +
              Ue[128 | (h & 63)]);
        }
        a += u.join("");
      }
      return a;
    };
  function mh(t) {
    return !t || typeof t != "object"
      ? !1
      : !!(
          t.constructor &&
          t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
  }
  function Na(t, e) {
    if (fh(t)) {
      const n = [];
      for (let r = 0; r < t.length; r += 1) n.push(e(t[r]));
      return n;
    }
    return e(t);
  }
  const gh = Object.prototype.hasOwnProperty,
    Da = {
      brackets(t) {
        return String(t) + "[]";
      },
      comma: "comma",
      indices(t, e) {
        return String(t) + "[" + e + "]";
      },
      repeat(t) {
        return String(t);
      },
    },
    ze = Array.isArray,
    _h = Array.prototype.push,
    Fa = function (t, e) {
      _h.apply(t, ze(e) ? e : [e]);
    },
    yh = Date.prototype.toISOString,
    ae = {
      addQueryPrefix: !1,
      allowDots: !1,
      allowEmptyArrays: !1,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encodeDotInKeys: !1,
      encoder: ph,
      encodeValuesOnly: !1,
      format: ui,
      formatter: ci[ui],
      indices: !1,
      serializeDate(t) {
        return yh.call(t);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    };
  function wh(t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t == "symbol" ||
      typeof t == "bigint"
    );
  }
  const di = {};
  function Ma(t, e, n, r, i, s, a, o, l, u, c, h, f, d, g, _, y, b) {
    let w = t,
      x = b,
      S = 0,
      P = !1;
    for (; (x = x.get(di)) !== void 0 && !P; ) {
      const j = x.get(t);
      if (((S += 1), typeof j < "u")) {
        if (j === S) throw new RangeError("Cyclic object value");
        P = !0;
      }
      typeof x.get(di) > "u" && (S = 0);
    }
    if (
      (typeof u == "function"
        ? (w = u(e, w))
        : w instanceof Date
        ? (w = f == null ? void 0 : f(w))
        : n === "comma" &&
          ze(w) &&
          (w = Na(w, function (j) {
            return j instanceof Date ? (f == null ? void 0 : f(j)) : j;
          })),
      w === null)
    ) {
      if (s) return l && !_ ? l(e, ae.encoder, y, "key", d) : e;
      w = "";
    }
    if (wh(w) || mh(w)) {
      if (l) {
        const j = _ ? e : l(e, ae.encoder, y, "key", d);
        return [
          (g == null ? void 0 : g(j)) +
            "=" +
            (g == null ? void 0 : g(l(w, ae.encoder, y, "value", d))),
        ];
      }
      return [
        (g == null ? void 0 : g(e)) + "=" + (g == null ? void 0 : g(String(w))),
      ];
    }
    const v = [];
    if (typeof w > "u") return v;
    let T;
    if (n === "comma" && ze(w))
      _ && l && (w = Na(w, l)),
        (T = [{ value: w.length > 0 ? w.join(",") || null : void 0 }]);
    else if (ze(u)) T = u;
    else {
      const j = Object.keys(w);
      T = c ? j.sort(c) : j;
    }
    const V = o ? String(e).replace(/\./g, "%2E") : String(e),
      O = r && ze(w) && w.length === 1 ? V + "[]" : V;
    if (i && ze(w) && w.length === 0) return O + "[]";
    for (let j = 0; j < T.length; ++j) {
      const C = T[j],
        I = typeof C == "object" && typeof C.value < "u" ? C.value : w[C];
      if (a && I === null) continue;
      const L = h && o ? C.replace(/\./g, "%2E") : C,
        R = ze(w)
          ? typeof n == "function"
            ? n(O, L)
            : O
          : O + (h ? "." + L : "[" + L + "]");
      b.set(t, S);
      const D = new WeakMap();
      D.set(di, b),
        Fa(
          v,
          Ma(
            I,
            R,
            n,
            r,
            i,
            s,
            a,
            o,
            n === "comma" && _ && ze(w) ? null : l,
            u,
            c,
            h,
            f,
            d,
            g,
            _,
            y,
            D
          )
        );
    }
    return v;
  }
  function bh(t = ae) {
    if (
      typeof t.allowEmptyArrays < "u" &&
      typeof t.allowEmptyArrays != "boolean"
    )
      throw new TypeError(
        "`allowEmptyArrays` option can only be `true` or `false`, when provided"
      );
    if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
      throw new TypeError(
        "`encodeDotInKeys` option can only be `true` or `false`, when provided"
      );
    if (
      t.encoder !== null &&
      typeof t.encoder < "u" &&
      typeof t.encoder != "function"
    )
      throw new TypeError("Encoder has to be a function.");
    const e = t.charset || ae.charset;
    if (
      typeof t.charset < "u" &&
      t.charset !== "utf-8" &&
      t.charset !== "iso-8859-1"
    )
      throw new TypeError(
        "The charset option must be either utf-8, iso-8859-1, or undefined"
      );
    let n = ui;
    if (typeof t.format < "u") {
      if (!gh.call(ci, t.format))
        throw new TypeError("Unknown format option provided.");
      n = t.format;
    }
    const r = ci[n];
    let i = ae.filter;
    (typeof t.filter == "function" || ze(t.filter)) && (i = t.filter);
    let s;
    if (
      (t.arrayFormat && t.arrayFormat in Da
        ? (s = t.arrayFormat)
        : "indices" in t
        ? (s = t.indices ? "indices" : "repeat")
        : (s = ae.arrayFormat),
      "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    )
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    const a =
      typeof t.allowDots > "u"
        ? t.encodeDotInKeys
          ? !0
          : ae.allowDots
        : !!t.allowDots;
    return {
      addQueryPrefix:
        typeof t.addQueryPrefix == "boolean"
          ? t.addQueryPrefix
          : ae.addQueryPrefix,
      allowDots: a,
      allowEmptyArrays:
        typeof t.allowEmptyArrays == "boolean"
          ? !!t.allowEmptyArrays
          : ae.allowEmptyArrays,
      arrayFormat: s,
      charset: e,
      charsetSentinel:
        typeof t.charsetSentinel == "boolean"
          ? t.charsetSentinel
          : ae.charsetSentinel,
      commaRoundTrip: !!t.commaRoundTrip,
      delimiter: typeof t.delimiter > "u" ? ae.delimiter : t.delimiter,
      encode: typeof t.encode == "boolean" ? t.encode : ae.encode,
      encodeDotInKeys:
        typeof t.encodeDotInKeys == "boolean"
          ? t.encodeDotInKeys
          : ae.encodeDotInKeys,
      encoder: typeof t.encoder == "function" ? t.encoder : ae.encoder,
      encodeValuesOnly:
        typeof t.encodeValuesOnly == "boolean"
          ? t.encodeValuesOnly
          : ae.encodeValuesOnly,
      filter: i,
      format: n,
      formatter: r,
      serializeDate:
        typeof t.serializeDate == "function"
          ? t.serializeDate
          : ae.serializeDate,
      skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : ae.skipNulls,
      sort: typeof t.sort == "function" ? t.sort : null,
      strictNullHandling:
        typeof t.strictNullHandling == "boolean"
          ? t.strictNullHandling
          : ae.strictNullHandling,
    };
  }
  function vh(t, e = {}) {
    let n = t;
    const r = bh(e);
    let i, s;
    typeof r.filter == "function"
      ? ((s = r.filter), (n = s("", n)))
      : ze(r.filter) && ((s = r.filter), (i = s));
    const a = [];
    if (typeof n != "object" || n === null) return "";
    const o = Da[r.arrayFormat],
      l = o === "comma" && r.commaRoundTrip;
    i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
    const u = new WeakMap();
    for (let f = 0; f < i.length; ++f) {
      const d = i[f];
      (r.skipNulls && n[d] === null) ||
        Fa(
          a,
          Ma(
            n[d],
            d,
            o,
            l,
            r.allowEmptyArrays,
            r.strictNullHandling,
            r.skipNulls,
            r.encodeDotInKeys,
            r.encode ? r.encoder : null,
            r.filter,
            r.sort,
            r.allowDots,
            r.serializeDate,
            r.format,
            r.formatter,
            r.encodeValuesOnly,
            r.charset,
            u
          )
        );
    }
    const c = a.join(r.delimiter);
    let h = r.addQueryPrefix === !0 ? "?" : "";
    return (
      r.charsetSentinel &&
        (r.charset === "iso-8859-1"
          ? (h += "utf8=%26%2310003%3B&")
          : (h += "utf8=%E2%9C%93&")),
      c.length > 0 ? h + c : ""
    );
  }
  const Rt = "4.98.0";
  let Ba = !1,
    pn,
    Ua,
    za,
    fi,
    qa,
    Ha,
    Va,
    Wa,
    Ja;
  function xh(t, e = { auto: !1 }) {
    if (Ba)
      throw new Error(
        `you must \`import 'openai/shims/${t.kind}'\` before importing anything else from openai`
      );
    if (pn)
      throw new Error(
        `can't \`import 'openai/shims/${t.kind}'\` after \`import 'openai/shims/${pn}'\``
      );
    (Ba = e.auto),
      (pn = t.kind),
      (Ua = t.fetch),
      (za = t.FormData),
      (fi = t.File),
      (qa = t.ReadableStream),
      (Ha = t.getMultipartRequestOptions),
      (Va = t.getDefaultAgent),
      (Wa = t.fileFromPath),
      (Ja = t.isFsReadStream);
  }
  class kh {
    constructor(e) {
      this.body = e;
    }
    get [Symbol.toStringTag]() {
      return "MultipartBody";
    }
  }
  function Sh({ manuallyImported: t } = {}) {
    const e = t
      ? "You may need to use polyfills"
      : "Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
    let n, r, i, s;
    try {
      (n = fetch), (r = Request), (i = Response), (s = Headers);
    } catch (a) {
      throw new Error(
        `this environment is missing the following Web Fetch API type: ${a.message}. ${e}`
      );
    }
    return {
      kind: "web",
      fetch: n,
      Request: r,
      Response: i,
      Headers: s,
      FormData:
        typeof FormData < "u"
          ? FormData
          : class {
              constructor() {
                throw new Error(
                  `file uploads aren't supported in this environment yet as 'FormData' is undefined. ${e}`
                );
              }
            },
      Blob:
        typeof Blob < "u"
          ? Blob
          : class {
              constructor() {
                throw new Error(
                  `file uploads aren't supported in this environment yet as 'Blob' is undefined. ${e}`
                );
              }
            },
      File:
        typeof File < "u"
          ? File
          : class {
              constructor() {
                throw new Error(
                  `file uploads aren't supported in this environment yet as 'File' is undefined. ${e}`
                );
              }
            },
      ReadableStream:
        typeof ReadableStream < "u"
          ? ReadableStream
          : class {
              constructor() {
                throw new Error(
                  `streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${e}`
                );
              }
            },
      getMultipartRequestOptions: async (a, o) => ({ ...o, body: new kh(a) }),
      getDefaultAgent: (a) => {},
      fileFromPath: () => {
        throw new Error(
          "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads"
        );
      },
      isFsReadStream: (a) => !1,
    };
  }
  const Ka = () => {
    pn || xh(Sh(), { auto: !0 });
  };
  Ka();
  class N extends Error {}
  class de extends N {
    constructor(e, n, r, i) {
      super(`${de.makeMessage(e, n, r)}`),
        (this.status = e),
        (this.headers = i),
        (this.request_id = i == null ? void 0 : i["x-request-id"]),
        (this.error = n);
      const s = n;
      (this.code = s == null ? void 0 : s.code),
        (this.param = s == null ? void 0 : s.param),
        (this.type = s == null ? void 0 : s.type);
    }
    static makeMessage(e, n, r) {
      const i =
        n != null && n.message
          ? typeof n.message == "string"
            ? n.message
            : JSON.stringify(n.message)
          : n
          ? JSON.stringify(n)
          : r;
      return e && i
        ? `${e} ${i}`
        : e
        ? `${e} status code (no body)`
        : i || "(no status code or body)";
    }
    static generate(e, n, r, i) {
      if (!e || !i) return new ir({ message: r, cause: yi(n) });
      const s = n == null ? void 0 : n.error;
      return e === 400
        ? new Ga(e, s, r, i)
        : e === 401
        ? new Xa(e, s, r, i)
        : e === 403
        ? new Qa(e, s, r, i)
        : e === 404
        ? new Ya(e, s, r, i)
        : e === 409
        ? new Za(e, s, r, i)
        : e === 422
        ? new eo(e, s, r, i)
        : e === 429
        ? new to(e, s, r, i)
        : e >= 500
        ? new no(e, s, r, i)
        : new de(e, s, r, i);
    }
  }
  class Re extends de {
    constructor({ message: e } = {}) {
      super(void 0, void 0, e || "Request was aborted.", void 0);
    }
  }
  class ir extends de {
    constructor({ message: e, cause: n }) {
      super(void 0, void 0, e || "Connection error.", void 0),
        n && (this.cause = n);
    }
  }
  class pi extends ir {
    constructor({ message: e } = {}) {
      super({ message: e ?? "Request timed out." });
    }
  }
  class Ga extends de {}
  class Xa extends de {}
  class Qa extends de {}
  class Ya extends de {}
  class Za extends de {}
  class eo extends de {}
  class to extends de {}
  class no extends de {}
  class ro extends N {
    constructor() {
      super("Could not parse response content as the length limit was reached");
    }
  }
  class io extends N {
    constructor() {
      super(
        "Could not parse response content as the request was rejected by the content filter"
      );
    }
  }
  var sr = function (t, e, n, r, i) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return r === "a" ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
    },
    bt = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    Se;
  class ar {
    constructor() {
      Se.set(this, void 0),
        (this.buffer = new Uint8Array()),
        sr(this, Se, null, "f");
    }
    decode(e) {
      if (e == null) return [];
      const n =
        e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : typeof e == "string"
          ? new TextEncoder().encode(e)
          : e;
      let r = new Uint8Array(this.buffer.length + n.length);
      r.set(this.buffer), r.set(n, this.buffer.length), (this.buffer = r);
      const i = [];
      let s;
      for (; (s = Eh(this.buffer, bt(this, Se, "f"))) != null; ) {
        if (s.carriage && bt(this, Se, "f") == null) {
          sr(this, Se, s.index, "f");
          continue;
        }
        if (
          bt(this, Se, "f") != null &&
          (s.index !== bt(this, Se, "f") + 1 || s.carriage)
        ) {
          i.push(this.decodeText(this.buffer.slice(0, bt(this, Se, "f") - 1))),
            (this.buffer = this.buffer.slice(bt(this, Se, "f"))),
            sr(this, Se, null, "f");
          continue;
        }
        const a = bt(this, Se, "f") !== null ? s.preceding - 1 : s.preceding,
          o = this.decodeText(this.buffer.slice(0, a));
        i.push(o),
          (this.buffer = this.buffer.slice(s.index)),
          sr(this, Se, null, "f");
      }
      return i;
    }
    decodeText(e) {
      if (e == null) return "";
      if (typeof e == "string") return e;
      if (typeof Buffer < "u") {
        if (e instanceof Buffer) return e.toString();
        if (e instanceof Uint8Array) return Buffer.from(e).toString();
        throw new N(
          `Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`
        );
      }
      if (typeof TextDecoder < "u") {
        if (e instanceof Uint8Array || e instanceof ArrayBuffer)
          return (
            this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")),
            this.textDecoder.decode(e)
          );
        throw new N(
          `Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`
        );
      }
      throw new N(
        "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error."
      );
    }
    flush() {
      return this.buffer.length
        ? this.decode(`
`)
        : [];
    }
  }
  (Se = new WeakMap()),
    (ar.NEWLINE_CHARS = new Set([
      `
`,
      "\r",
    ])),
    (ar.NEWLINE_REGEXP = /\r\n|[\n\r]/g);
  function Eh(t, e) {
    for (let i = e ?? 0; i < t.length; i++) {
      if (t[i] === 10) return { preceding: i, index: i + 1, carriage: !1 };
      if (t[i] === 13) return { preceding: i, index: i + 1, carriage: !0 };
    }
    return null;
  }
  function Ch(t) {
    for (let r = 0; r < t.length - 1; r++) {
      if ((t[r] === 10 && t[r + 1] === 10) || (t[r] === 13 && t[r + 1] === 13))
        return r + 2;
      if (
        t[r] === 13 &&
        t[r + 1] === 10 &&
        r + 3 < t.length &&
        t[r + 2] === 13 &&
        t[r + 3] === 10
      )
        return r + 4;
    }
    return -1;
  }
  function so(t) {
    if (t[Symbol.asyncIterator]) return t;
    const e = t.getReader();
    return {
      async next() {
        try {
          const n = await e.read();
          return n != null && n.done && e.releaseLock(), n;
        } catch (n) {
          throw (e.releaseLock(), n);
        }
      },
      async return() {
        const n = e.cancel();
        return e.releaseLock(), await n, { done: !0, value: void 0 };
      },
      [Symbol.asyncIterator]() {
        return this;
      },
    };
  }
  class qe {
    constructor(e, n) {
      (this.iterator = e), (this.controller = n);
    }
    static fromSSEResponse(e, n) {
      let r = !1;
      async function* i() {
        if (r)
          throw new Error(
            "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
          );
        r = !0;
        let s = !1;
        try {
          for await (const a of Ah(e, n))
            if (!s) {
              if (a.data.startsWith("[DONE]")) {
                s = !0;
                continue;
              }
              if (
                a.event === null ||
                a.event.startsWith("response.") ||
                a.event.startsWith("transcript.")
              ) {
                let o;
                try {
                  o = JSON.parse(a.data);
                } catch (l) {
                  throw (
                    (console.error(
                      "Could not parse message into JSON:",
                      a.data
                    ),
                    console.error("From chunk:", a.raw),
                    l)
                  );
                }
                if (o && o.error)
                  throw new de(void 0, o.error, void 0, po(e.headers));
                yield o;
              } else {
                let o;
                try {
                  o = JSON.parse(a.data);
                } catch (l) {
                  throw (
                    (console.error(
                      "Could not parse message into JSON:",
                      a.data
                    ),
                    console.error("From chunk:", a.raw),
                    l)
                  );
                }
                if (a.event == "error")
                  throw new de(void 0, o.error, o.message, void 0);
                yield { event: a.event, data: o };
              }
            }
          s = !0;
        } catch (a) {
          if (a instanceof Error && a.name === "AbortError") return;
          throw a;
        } finally {
          s || n.abort();
        }
      }
      return new qe(i, n);
    }
    static fromReadableStream(e, n) {
      let r = !1;
      async function* i() {
        const a = new ar(),
          o = so(e);
        for await (const l of o) for (const u of a.decode(l)) yield u;
        for (const l of a.flush()) yield l;
      }
      async function* s() {
        if (r)
          throw new Error(
            "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
          );
        r = !0;
        let a = !1;
        try {
          for await (const o of i()) a || (o && (yield JSON.parse(o)));
          a = !0;
        } catch (o) {
          if (o instanceof Error && o.name === "AbortError") return;
          throw o;
        } finally {
          a || n.abort();
        }
      }
      return new qe(s, n);
    }
    [Symbol.asyncIterator]() {
      return this.iterator();
    }
    tee() {
      const e = [],
        n = [],
        r = this.iterator(),
        i = (s) => ({
          next: () => {
            if (s.length === 0) {
              const a = r.next();
              e.push(a), n.push(a);
            }
            return s.shift();
          },
        });
      return [
        new qe(() => i(e), this.controller),
        new qe(() => i(n), this.controller),
      ];
    }
    toReadableStream() {
      const e = this;
      let n;
      const r = new TextEncoder();
      return new qa({
        async start() {
          n = e[Symbol.asyncIterator]();
        },
        async pull(i) {
          try {
            const { value: s, done: a } = await n.next();
            if (a) return i.close();
            const o = r.encode(
              JSON.stringify(s) +
                `
`
            );
            i.enqueue(o);
          } catch (s) {
            i.error(s);
          }
        },
        async cancel() {
          var i;
          await ((i = n.return) == null ? void 0 : i.call(n));
        },
      });
    }
  }
  async function* Ah(t, e) {
    if (!t.body)
      throw (
        (e.abort(), new N("Attempted to iterate over a response with no body"))
      );
    const n = new Th(),
      r = new ar(),
      i = so(t.body);
    for await (const s of Ph(i))
      for (const a of r.decode(s)) {
        const o = n.decode(a);
        o && (yield o);
      }
    for (const s of r.flush()) {
      const a = n.decode(s);
      a && (yield a);
    }
  }
  async function* Ph(t) {
    let e = new Uint8Array();
    for await (const n of t) {
      if (n == null) continue;
      const r =
        n instanceof ArrayBuffer
          ? new Uint8Array(n)
          : typeof n == "string"
          ? new TextEncoder().encode(n)
          : n;
      let i = new Uint8Array(e.length + r.length);
      i.set(e), i.set(r, e.length), (e = i);
      let s;
      for (; (s = Ch(e)) !== -1; ) yield e.slice(0, s), (e = e.slice(s));
    }
    e.length > 0 && (yield e);
  }
  class Th {
    constructor() {
      (this.event = null), (this.data = []), (this.chunks = []);
    }
    decode(e) {
      if ((e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e)) {
        if (!this.event && !this.data.length) return null;
        const s = {
          event: this.event,
          data: this.data.join(`
`),
          raw: this.chunks,
        };
        return (this.event = null), (this.data = []), (this.chunks = []), s;
      }
      if ((this.chunks.push(e), e.startsWith(":"))) return null;
      let [n, r, i] = Ih(e, ":");
      return (
        i.startsWith(" ") && (i = i.substring(1)),
        n === "event" ? (this.event = i) : n === "data" && this.data.push(i),
        null
      );
    }
  }
  function Ih(t, e) {
    const n = t.indexOf(e);
    return n !== -1
      ? [t.substring(0, n), e, t.substring(n + e.length)]
      : [t, "", ""];
  }
  const ao = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t.url == "string" &&
      typeof t.blob == "function",
    oo = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t.name == "string" &&
      typeof t.lastModified == "number" &&
      or(t),
    or = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t.size == "number" &&
      typeof t.type == "string" &&
      typeof t.text == "function" &&
      typeof t.slice == "function" &&
      typeof t.arrayBuffer == "function",
    Rh = (t) => oo(t) || ao(t) || Ja(t);
  async function lo(t, e, n) {
    var i;
    if (((t = await t), oo(t))) return t;
    if (ao(t)) {
      const s = await t.blob();
      e || (e = new URL(t.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
      const a = or(s) ? [await s.arrayBuffer()] : [s];
      return new fi(a, e, n);
    }
    const r = await Oh(t);
    if ((e || (e = Lh(t) ?? "unknown_file"), !(n != null && n.type))) {
      const s = (i = r[0]) == null ? void 0 : i.type;
      typeof s == "string" && (n = { ...n, type: s });
    }
    return new fi(r, e, n);
  }
  async function Oh(t) {
    var n;
    let e = [];
    if (
      typeof t == "string" ||
      ArrayBuffer.isView(t) ||
      t instanceof ArrayBuffer
    )
      e.push(t);
    else if (or(t)) e.push(await t.arrayBuffer());
    else if (jh(t)) for await (const r of t) e.push(r);
    else
      throw new Error(
        `Unexpected data type: ${typeof t}; constructor: ${
          (n = t == null ? void 0 : t.constructor) == null ? void 0 : n.name
        }; props: ${$h(t)}`
      );
    return e;
  }
  function $h(t) {
    return `[${Object.getOwnPropertyNames(t)
      .map((n) => `"${n}"`)
      .join(", ")}]`;
  }
  function Lh(t) {
    var e;
    return (
      mi(t.name) ||
      mi(t.filename) ||
      ((e = mi(t.path)) == null ? void 0 : e.split(/[\\/]/).pop())
    );
  }
  const mi = (t) => {
      if (typeof t == "string") return t;
      if (typeof Buffer < "u" && t instanceof Buffer) return String(t);
    },
    jh = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t[Symbol.asyncIterator] == "function",
    uo = (t) =>
      t &&
      typeof t == "object" &&
      t.body &&
      t[Symbol.toStringTag] === "MultipartBody",
    Ot = async (t) => {
      const e = await Nh(t.body);
      return Ha(e, t);
    },
    Nh = async (t) => {
      const e = new za();
      return (
        await Promise.all(Object.entries(t || {}).map(([n, r]) => gi(e, n, r))),
        e
      );
    },
    gi = async (t, e, n) => {
      if (n !== void 0) {
        if (n == null)
          throw new TypeError(
            `Received null for "${e}"; to pass null in FormData, you must use the string 'null'`
          );
        if (
          typeof n == "string" ||
          typeof n == "number" ||
          typeof n == "boolean"
        )
          t.append(e, String(n));
        else if (Rh(n)) {
          const r = await lo(n);
          t.append(e, r);
        } else if (Array.isArray(n))
          await Promise.all(n.map((r) => gi(t, e + "[]", r)));
        else if (typeof n == "object")
          await Promise.all(
            Object.entries(n).map(([r, i]) => gi(t, `${e}[${r}]`, i))
          );
        else
          throw new TypeError(
            `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`
          );
      }
    };
  var Dh = function (t, e, n, r, i) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return r === "a" ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
    },
    Fh = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    lr;
  Ka();
  async function co(t) {
    var a;
    const { response: e } = t;
    if (t.options.stream)
      return (
        it("response", e.status, e.url, e.headers, e.body),
        t.options.__streamClass
          ? t.options.__streamClass.fromSSEResponse(e, t.controller)
          : qe.fromSSEResponse(e, t.controller)
      );
    if (e.status === 204) return null;
    if (t.options.__binaryResponse) return e;
    const n = e.headers.get("content-type"),
      r =
        (a = n == null ? void 0 : n.split(";")[0]) == null ? void 0 : a.trim();
    if (
      (r == null ? void 0 : r.includes("application/json")) ||
      (r == null ? void 0 : r.endsWith("+json"))
    ) {
      const o = await e.json();
      return it("response", e.status, e.url, e.headers, o), ho(o, e);
    }
    const s = await e.text();
    return it("response", e.status, e.url, e.headers, s), s;
  }
  function ho(t, e) {
    return !t || typeof t != "object" || Array.isArray(t)
      ? t
      : Object.defineProperty(t, "_request_id", {
          value: e.headers.get("x-request-id"),
          enumerable: !1,
        });
  }
  class ur extends Promise {
    constructor(e, n = co) {
      super((r) => {
        r(null);
      }),
        (this.responsePromise = e),
        (this.parseResponse = n);
    }
    _thenUnwrap(e) {
      return new ur(this.responsePromise, async (n) =>
        ho(e(await this.parseResponse(n), n), n.response)
      );
    }
    asResponse() {
      return this.responsePromise.then((e) => e.response);
    }
    async withResponse() {
      const [e, n] = await Promise.all([this.parse(), this.asResponse()]);
      return {
        data: e,
        response: n,
        request_id: n.headers.get("x-request-id"),
      };
    }
    parse() {
      return (
        this.parsedPromise ||
          (this.parsedPromise = this.responsePromise.then(this.parseResponse)),
        this.parsedPromise
      );
    }
    then(e, n) {
      return this.parse().then(e, n);
    }
    catch(e) {
      return this.parse().catch(e);
    }
    finally(e) {
      return this.parse().finally(e);
    }
  }
  class Mh {
    constructor({
      baseURL: e,
      maxRetries: n = 2,
      timeout: r = 6e5,
      httpAgent: i,
      fetch: s,
    }) {
      (this.baseURL = e),
        (this.maxRetries = _i("maxRetries", n)),
        (this.timeout = _i("timeout", r)),
        (this.httpAgent = i),
        (this.fetch = s ?? Ua);
    }
    authHeaders(e) {
      return {};
    }
    defaultHeaders(e) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": this.getUserAgent(),
        ...Hh(),
        ...this.authHeaders(e),
      };
    }
    validateHeaders(e, n) {}
    defaultIdempotencyKey() {
      return `stainless-node-retry-${Kh()}`;
    }
    get(e, n) {
      return this.methodRequest("get", e, n);
    }
    post(e, n) {
      return this.methodRequest("post", e, n);
    }
    patch(e, n) {
      return this.methodRequest("patch", e, n);
    }
    put(e, n) {
      return this.methodRequest("put", e, n);
    }
    delete(e, n) {
      return this.methodRequest("delete", e, n);
    }
    methodRequest(e, n, r) {
      return this.request(
        Promise.resolve(r).then(async (i) => {
          const s =
            i && or(i == null ? void 0 : i.body)
              ? new DataView(await i.body.arrayBuffer())
              : (i == null ? void 0 : i.body) instanceof DataView
              ? i.body
              : (i == null ? void 0 : i.body) instanceof ArrayBuffer
              ? new DataView(i.body)
              : i && ArrayBuffer.isView(i == null ? void 0 : i.body)
              ? new DataView(i.body.buffer)
              : i == null
              ? void 0
              : i.body;
          return { method: e, path: n, ...i, body: s };
        })
      );
    }
    getAPIList(e, n, r) {
      return this.requestAPIList(n, { method: "get", path: e, ...r });
    }
    calculateContentLength(e) {
      if (typeof e == "string") {
        if (typeof Buffer < "u") return Buffer.byteLength(e, "utf8").toString();
        if (typeof TextEncoder < "u")
          return new TextEncoder().encode(e).length.toString();
      } else if (ArrayBuffer.isView(e)) return e.byteLength.toString();
      return null;
    }
    buildRequest(e, { retryCount: n = 0 } = {}) {
      var _;
      const r = { ...e },
        { method: i, path: s, query: a, headers: o = {} } = r,
        l =
          ArrayBuffer.isView(r.body) ||
          (r.__binaryRequest && typeof r.body == "string")
            ? r.body
            : uo(r.body)
            ? r.body.body
            : r.body
            ? JSON.stringify(r.body, null, 2)
            : null,
        u = this.calculateContentLength(l),
        c = this.buildURL(s, a);
      "timeout" in r && _i("timeout", r.timeout),
        (r.timeout = r.timeout ?? this.timeout);
      const h = r.httpAgent ?? this.httpAgent ?? Va(c),
        f = r.timeout + 1e3;
      typeof ((_ = h == null ? void 0 : h.options) == null
        ? void 0
        : _.timeout) == "number" &&
        f > (h.options.timeout ?? 0) &&
        (h.options.timeout = f),
        this.idempotencyHeader &&
          i !== "get" &&
          (e.idempotencyKey ||
            (e.idempotencyKey = this.defaultIdempotencyKey()),
          (o[this.idempotencyHeader] = e.idempotencyKey));
      const d = this.buildHeaders({
        options: r,
        headers: o,
        contentLength: u,
        retryCount: n,
      });
      return {
        req: {
          method: i,
          ...(l && { body: l }),
          headers: d,
          ...(h && { agent: h }),
          signal: r.signal ?? null,
        },
        url: c,
        timeout: r.timeout,
      };
    }
    buildHeaders({ options: e, headers: n, contentLength: r, retryCount: i }) {
      const s = {};
      r && (s["content-length"] = r);
      const a = this.defaultHeaders(e);
      return (
        bo(s, a),
        bo(s, n),
        uo(e.body) && pn !== "node" && delete s["content-type"],
        hr(a, "x-stainless-retry-count") === void 0 &&
          hr(n, "x-stainless-retry-count") === void 0 &&
          (s["x-stainless-retry-count"] = String(i)),
        hr(a, "x-stainless-timeout") === void 0 &&
          hr(n, "x-stainless-timeout") === void 0 &&
          e.timeout &&
          (s["x-stainless-timeout"] = String(Math.trunc(e.timeout / 1e3))),
        this.validateHeaders(s, n),
        s
      );
    }
    async prepareOptions(e) {}
    async prepareRequest(e, { url: n, options: r }) {}
    parseHeaders(e) {
      return e
        ? Symbol.iterator in e
          ? Object.fromEntries(Array.from(e).map((n) => [...n]))
          : { ...e }
        : {};
    }
    makeStatusError(e, n, r, i) {
      return de.generate(e, n, r, i);
    }
    request(e, n = null) {
      return new ur(this.makeRequest(e, n));
    }
    async makeRequest(e, n) {
      var h, f;
      const r = await e,
        i = r.maxRetries ?? this.maxRetries;
      n == null && (n = i), await this.prepareOptions(r);
      const {
        req: s,
        url: a,
        timeout: o,
      } = this.buildRequest(r, { retryCount: i - n });
      if (
        (await this.prepareRequest(s, { url: a, options: r }),
        it("request", a, r, s.headers),
        (h = r.signal) != null && h.aborted)
      )
        throw new Re();
      const l = new AbortController(),
        u = await this.fetchWithTimeout(a, s, o, l).catch(yi);
      if (u instanceof Error) {
        if ((f = r.signal) != null && f.aborted) throw new Re();
        if (n) return this.retryRequest(r, n);
        throw u.name === "AbortError" ? new pi() : new ir({ cause: u });
      }
      const c = po(u.headers);
      if (!u.ok) {
        if (n && this.shouldRetry(u)) {
          const w = `retrying, ${n} attempts remaining`;
          return (
            it(`response (error; ${w})`, u.status, a, c),
            this.retryRequest(r, n, c)
          );
        }
        const d = await u.text().catch((w) => yi(w).message),
          g = Vh(d),
          _ = g ? void 0 : d;
        throw (
          (it(
            `response (error; ${
              n ? "(error; no more retries left)" : "(error; not retryable)"
            })`,
            u.status,
            a,
            c,
            _
          ),
          this.makeStatusError(u.status, g, _, c))
        );
      }
      return { response: u, options: r, controller: l };
    }
    requestAPIList(e, n) {
      const r = this.makeRequest(n, null);
      return new Bh(this, r, e);
    }
    buildURL(e, n) {
      const r = Jh(e)
          ? new URL(e)
          : new URL(
              this.baseURL +
                (this.baseURL.endsWith("/") && e.startsWith("/")
                  ? e.slice(1)
                  : e)
            ),
        i = this.defaultQuery();
      return (
        yo(i) || (n = { ...i, ...n }),
        typeof n == "object" &&
          n &&
          !Array.isArray(n) &&
          (r.search = this.stringifyQuery(n)),
        r.toString()
      );
    }
    stringifyQuery(e) {
      return Object.entries(e)
        .filter(([n, r]) => typeof r < "u")
        .map(([n, r]) => {
          if (
            typeof r == "string" ||
            typeof r == "number" ||
            typeof r == "boolean"
          )
            return `${encodeURIComponent(n)}=${encodeURIComponent(r)}`;
          if (r === null) return `${encodeURIComponent(n)}=`;
          throw new N(
            `Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`
          );
        })
        .join("&");
    }
    async fetchWithTimeout(e, n, r, i) {
      const { signal: s, ...a } = n || {};
      s && s.addEventListener("abort", () => i.abort());
      const o = setTimeout(() => i.abort(), r),
        l = { signal: i.signal, ...a };
      return (
        l.method && (l.method = l.method.toUpperCase()),
        this.fetch.call(void 0, e, l).finally(() => {
          clearTimeout(o);
        })
      );
    }
    shouldRetry(e) {
      const n = e.headers.get("x-should-retry");
      return n === "true"
        ? !0
        : n === "false"
        ? !1
        : e.status === 408 ||
          e.status === 409 ||
          e.status === 429 ||
          e.status >= 500;
    }
    async retryRequest(e, n, r) {
      let i;
      const s = r == null ? void 0 : r["retry-after-ms"];
      if (s) {
        const o = parseFloat(s);
        Number.isNaN(o) || (i = o);
      }
      const a = r == null ? void 0 : r["retry-after"];
      if (a && !i) {
        const o = parseFloat(a);
        Number.isNaN(o) ? (i = Date.parse(a) - Date.now()) : (i = o * 1e3);
      }
      if (!(i && 0 <= i && i < 60 * 1e3)) {
        const o = e.maxRetries ?? this.maxRetries;
        i = this.calculateDefaultRetryTimeoutMillis(n, o);
      }
      return await mn(i), this.makeRequest(e, n - 1);
    }
    calculateDefaultRetryTimeoutMillis(e, n) {
      const s = n - e,
        a = Math.min(0.5 * Math.pow(2, s), 8),
        o = 1 - Math.random() * 0.25;
      return a * o * 1e3;
    }
    getUserAgent() {
      return `${this.constructor.name}/JS ${Rt}`;
    }
  }
  class fo {
    constructor(e, n, r, i) {
      lr.set(this, void 0),
        Dh(this, lr, e, "f"),
        (this.options = i),
        (this.response = n),
        (this.body = r);
    }
    hasNextPage() {
      return this.getPaginatedItems().length ? this.nextPageInfo() != null : !1;
    }
    async getNextPage() {
      const e = this.nextPageInfo();
      if (!e)
        throw new N(
          "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`."
        );
      const n = { ...this.options };
      if ("params" in e && typeof n.query == "object")
        n.query = { ...n.query, ...e.params };
      else if ("url" in e) {
        const r = [
          ...Object.entries(n.query || {}),
          ...e.url.searchParams.entries(),
        ];
        for (const [i, s] of r) e.url.searchParams.set(i, s);
        (n.query = void 0), (n.path = e.url.toString());
      }
      return await Fh(this, lr, "f").requestAPIList(this.constructor, n);
    }
    async *iterPages() {
      let e = this;
      for (yield e; e.hasNextPage(); ) (e = await e.getNextPage()), yield e;
    }
    async *[((lr = new WeakMap()), Symbol.asyncIterator)]() {
      for await (const e of this.iterPages())
        for (const n of e.getPaginatedItems()) yield n;
    }
  }
  class Bh extends ur {
    constructor(e, n, r) {
      super(n, async (i) => new r(e, i.response, await co(i), i.options));
    }
    async *[Symbol.asyncIterator]() {
      const e = await this;
      for await (const n of e) yield n;
    }
  }
  const po = (t) =>
      new Proxy(Object.fromEntries(t.entries()), {
        get(e, n) {
          const r = n.toString();
          return e[r.toLowerCase()] || e[r];
        },
      }),
    Uh = {
      method: !0,
      path: !0,
      query: !0,
      body: !0,
      headers: !0,
      maxRetries: !0,
      stream: !0,
      timeout: !0,
      httpAgent: !0,
      signal: !0,
      idempotencyKey: !0,
      __metadata: !0,
      __binaryRequest: !0,
      __binaryResponse: !0,
      __streamClass: !0,
    },
    ne = (t) =>
      typeof t == "object" &&
      t !== null &&
      !yo(t) &&
      Object.keys(t).every((e) => wo(Uh, e)),
    zh = () => {
      var e;
      if (typeof Deno < "u" && Deno.build != null)
        return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": Rt,
          "X-Stainless-OS": go(Deno.build.os),
          "X-Stainless-Arch": mo(Deno.build.arch),
          "X-Stainless-Runtime": "deno",
          "X-Stainless-Runtime-Version":
            typeof Deno.version == "string"
              ? Deno.version
              : ((e = Deno.version) == null ? void 0 : e.deno) ?? "unknown",
        };
      if (typeof EdgeRuntime < "u")
        return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": Rt,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": `other:${EdgeRuntime}`,
          "X-Stainless-Runtime": "edge",
          "X-Stainless-Runtime-Version": process.version,
        };
      if (
        Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
        "[object process]"
      )
        return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": Rt,
          "X-Stainless-OS": go(process.platform),
          "X-Stainless-Arch": mo(process.arch),
          "X-Stainless-Runtime": "node",
          "X-Stainless-Runtime-Version": process.version,
        };
      const t = qh();
      return t
        ? {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": Rt,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": `browser:${t.browser}`,
            "X-Stainless-Runtime-Version": t.version,
          }
        : {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": Rt,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": "unknown",
            "X-Stainless-Runtime-Version": "unknown",
          };
    };
  function qh() {
    if (typeof navigator > "u" || !navigator) return null;
    const t = [
      { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      {
        key: "safari",
        pattern:
          /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
      },
    ];
    for (const { key: e, pattern: n } of t) {
      const r = n.exec(navigator.userAgent);
      if (r) {
        const i = r[1] || 0,
          s = r[2] || 0,
          a = r[3] || 0;
        return { browser: e, version: `${i}.${s}.${a}` };
      }
    }
    return null;
  }
  const mo = (t) =>
      t === "x32"
        ? "x32"
        : t === "x86_64" || t === "x64"
        ? "x64"
        : t === "arm"
        ? "arm"
        : t === "aarch64" || t === "arm64"
        ? "arm64"
        : t
        ? `other:${t}`
        : "unknown",
    go = (t) => (
      (t = t.toLowerCase()),
      t.includes("ios")
        ? "iOS"
        : t === "android"
        ? "Android"
        : t === "darwin"
        ? "MacOS"
        : t === "win32"
        ? "Windows"
        : t === "freebsd"
        ? "FreeBSD"
        : t === "openbsd"
        ? "OpenBSD"
        : t === "linux"
        ? "Linux"
        : t
        ? `Other:${t}`
        : "Unknown"
    );
  let _o;
  const Hh = () => _o ?? (_o = zh()),
    Vh = (t) => {
      try {
        return JSON.parse(t);
      } catch {
        return;
      }
    },
    Wh = /^[a-z][a-z0-9+.-]*:/i,
    Jh = (t) => Wh.test(t),
    mn = (t) => new Promise((e) => setTimeout(e, t)),
    _i = (t, e) => {
      if (typeof e != "number" || !Number.isInteger(e))
        throw new N(`${t} must be an integer`);
      if (e < 0) throw new N(`${t} must be a positive integer`);
      return e;
    },
    yi = (t) => {
      if (t instanceof Error) return t;
      if (typeof t == "object" && t !== null)
        try {
          return new Error(JSON.stringify(t));
        } catch {}
      return new Error(t);
    },
    cr = (t) => {
      var e, n, r, i, s;
      if (typeof process < "u")
        return (
          ((n = (e = process.env) == null ? void 0 : e[t]) == null
            ? void 0
            : n.trim()) ?? void 0
        );
      if (typeof Deno < "u")
        return (s =
          (i = (r = Deno.env) == null ? void 0 : r.get) == null
            ? void 0
            : i.call(r, t)) == null
          ? void 0
          : s.trim();
    };
  function yo(t) {
    if (!t) return !0;
    for (const e in t) return !1;
    return !0;
  }
  function wo(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function bo(t, e) {
    for (const n in e) {
      if (!wo(e, n)) continue;
      const r = n.toLowerCase();
      if (!r) continue;
      const i = e[n];
      i === null ? delete t[r] : i !== void 0 && (t[r] = i);
    }
  }
  const vo = new Set(["authorization", "api-key"]);
  function it(t, ...e) {
    var n;
    if (
      typeof process < "u" &&
      ((n = process == null ? void 0 : process.env) == null
        ? void 0
        : n.DEBUG) === "true"
    ) {
      const r = e.map((i) => {
        if (!i) return i;
        if (i.headers) {
          const a = { ...i, headers: { ...i.headers } };
          for (const o in i.headers)
            vo.has(o.toLowerCase()) && (a.headers[o] = "REDACTED");
          return a;
        }
        let s = null;
        for (const a in i)
          vo.has(a.toLowerCase()) && (s ?? (s = { ...i }), (s[a] = "REDACTED"));
        return s ?? i;
      });
      console.log(`OpenAI:DEBUG:${t}`, ...r);
    }
  }
  const Kh = () =>
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const e = (Math.random() * 16) | 0;
        return (t === "x" ? e : (e & 3) | 8).toString(16);
      }),
    Gh = () =>
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof navigator < "u",
    Xh = (t) => typeof (t == null ? void 0 : t.get) == "function",
    hr = (t, e) => {
      var r;
      const n = e.toLowerCase();
      if (Xh(t)) {
        const i =
          ((r = e[0]) == null ? void 0 : r.toUpperCase()) +
          e
            .substring(1)
            .replace(/([^\w])(\w)/g, (s, a, o) => a + o.toUpperCase());
        for (const s of [e, n, e.toUpperCase(), i]) {
          const a = t.get(s);
          if (a) return a;
        }
      }
      for (const [i, s] of Object.entries(t))
        if (i.toLowerCase() === n)
          return Array.isArray(s)
            ? (s.length <= 1 ||
                console.warn(
                  `Received ${s.length} entries for the ${e} header, using the first entry.`
                ),
              s[0])
            : s;
    },
    Qh = (t) => {
      if (typeof Buffer < "u") {
        const e = Buffer.from(t, "base64");
        return Array.from(
          new Float32Array(
            e.buffer,
            e.byteOffset,
            e.length / Float32Array.BYTES_PER_ELEMENT
          )
        );
      } else {
        const e = atob(t),
          n = e.length,
          r = new Uint8Array(n);
        for (let i = 0; i < n; i++) r[i] = e.charCodeAt(i);
        return Array.from(new Float32Array(r.buffer));
      }
    };
  function wi(t) {
    return t != null && typeof t == "object" && !Array.isArray(t);
  }
  class dr extends fo {
    constructor(e, n, r, i) {
      super(e, n, r, i), (this.data = r.data || []), (this.object = r.object);
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    nextPageParams() {
      return null;
    }
    nextPageInfo() {
      return null;
    }
  }
  class fe extends fo {
    constructor(e, n, r, i) {
      super(e, n, r, i),
        (this.data = r.data || []),
        (this.has_more = r.has_more || !1);
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    hasNextPage() {
      return this.has_more === !1 ? !1 : super.hasNextPage();
    }
    nextPageParams() {
      const e = this.nextPageInfo();
      if (!e) return null;
      if ("params" in e) return e.params;
      const n = Object.fromEntries(e.url.searchParams);
      return Object.keys(n).length ? n : null;
    }
    nextPageInfo() {
      var r;
      const e = this.getPaginatedItems();
      if (!e.length) return null;
      const n = (r = e[e.length - 1]) == null ? void 0 : r.id;
      return n ? { params: { after: n } } : null;
    }
  }
  class M {
    constructor(e) {
      this._client = e;
    }
  }
  let xo = class extends M {
      list(e, n = {}, r) {
        return ne(n)
          ? this.list(e, {}, n)
          : this._client.getAPIList(`/chat/completions/${e}/messages`, Yh, {
              query: n,
              ...r,
            });
      }
    },
    fr = class extends M {
      constructor() {
        super(...arguments), (this.messages = new xo(this._client));
      }
      create(e, n) {
        return this._client.post("/chat/completions", {
          body: e,
          ...n,
          stream: e.stream ?? !1,
        });
      }
      retrieve(e, n) {
        return this._client.get(`/chat/completions/${e}`, n);
      }
      update(e, n, r) {
        return this._client.post(`/chat/completions/${e}`, { body: n, ...r });
      }
      list(e = {}, n) {
        return ne(e)
          ? this.list({}, e)
          : this._client.getAPIList("/chat/completions", pr, {
              query: e,
              ...n,
            });
      }
      del(e, n) {
        return this._client.delete(`/chat/completions/${e}`, n);
      }
    };
  class pr extends fe {}
  class Yh extends fe {}
  (fr.ChatCompletionsPage = pr), (fr.Messages = xo);
  let mr = class extends M {
    constructor() {
      super(...arguments), (this.completions = new fr(this._client));
    }
  };
  (mr.Completions = fr), (mr.ChatCompletionsPage = pr);
  class ko extends M {
    create(e, n) {
      return this._client.post("/audio/speech", {
        body: e,
        ...n,
        headers: {
          Accept: "application/octet-stream",
          ...(n == null ? void 0 : n.headers),
        },
        __binaryResponse: !0,
      });
    }
  }
  class So extends M {
    create(e, n) {
      return this._client.post(
        "/audio/transcriptions",
        Ot({
          body: e,
          ...n,
          stream: e.stream ?? !1,
          __metadata: { model: e.model },
        })
      );
    }
  }
  class Eo extends M {
    create(e, n) {
      return this._client.post(
        "/audio/translations",
        Ot({ body: e, ...n, __metadata: { model: e.model } })
      );
    }
  }
  class gn extends M {
    constructor() {
      super(...arguments),
        (this.transcriptions = new So(this._client)),
        (this.translations = new Eo(this._client)),
        (this.speech = new ko(this._client));
    }
  }
  (gn.Transcriptions = So), (gn.Translations = Eo), (gn.Speech = ko);
  class bi extends M {
    create(e, n) {
      return this._client.post("/batches", { body: e, ...n });
    }
    retrieve(e, n) {
      return this._client.get(`/batches/${e}`, n);
    }
    list(e = {}, n) {
      return ne(e)
        ? this.list({}, e)
        : this._client.getAPIList("/batches", vi, { query: e, ...n });
    }
    cancel(e, n) {
      return this._client.post(`/batches/${e}/cancel`, n);
    }
  }
  class vi extends fe {}
  bi.BatchesPage = vi;
  var $e = function (t, e, n, r, i) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return r === "a" ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
    },
    te = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    xi,
    gr,
    _r,
    _n,
    yn,
    yr,
    wn,
    Qe,
    bn,
    wr,
    br,
    $t,
    Co;
  class ki {
    constructor() {
      xi.add(this),
        (this.controller = new AbortController()),
        gr.set(this, void 0),
        _r.set(this, () => {}),
        _n.set(this, () => {}),
        yn.set(this, void 0),
        yr.set(this, () => {}),
        wn.set(this, () => {}),
        Qe.set(this, {}),
        bn.set(this, !1),
        wr.set(this, !1),
        br.set(this, !1),
        $t.set(this, !1),
        $e(
          this,
          gr,
          new Promise((e, n) => {
            $e(this, _r, e, "f"), $e(this, _n, n, "f");
          }),
          "f"
        ),
        $e(
          this,
          yn,
          new Promise((e, n) => {
            $e(this, yr, e, "f"), $e(this, wn, n, "f");
          }),
          "f"
        ),
        te(this, gr, "f").catch(() => {}),
        te(this, yn, "f").catch(() => {});
    }
    _run(e) {
      setTimeout(() => {
        e().then(() => {
          this._emitFinal(), this._emit("end");
        }, te(this, xi, "m", Co).bind(this));
      }, 0);
    }
    _connected() {
      this.ended || (te(this, _r, "f").call(this), this._emit("connect"));
    }
    get ended() {
      return te(this, bn, "f");
    }
    get errored() {
      return te(this, wr, "f");
    }
    get aborted() {
      return te(this, br, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(e, n) {
      return (
        (te(this, Qe, "f")[e] || (te(this, Qe, "f")[e] = [])).push({
          listener: n,
        }),
        this
      );
    }
    off(e, n) {
      const r = te(this, Qe, "f")[e];
      if (!r) return this;
      const i = r.findIndex((s) => s.listener === n);
      return i >= 0 && r.splice(i, 1), this;
    }
    once(e, n) {
      return (
        (te(this, Qe, "f")[e] || (te(this, Qe, "f")[e] = [])).push({
          listener: n,
          once: !0,
        }),
        this
      );
    }
    emitted(e) {
      return new Promise((n, r) => {
        $e(this, $t, !0, "f"),
          e !== "error" && this.once("error", r),
          this.once(e, n);
      });
    }
    async done() {
      $e(this, $t, !0, "f"), await te(this, yn, "f");
    }
    _emit(e, ...n) {
      if (te(this, bn, "f")) return;
      e === "end" && ($e(this, bn, !0, "f"), te(this, yr, "f").call(this));
      const r = te(this, Qe, "f")[e];
      if (
        (r &&
          ((te(this, Qe, "f")[e] = r.filter((i) => !i.once)),
          r.forEach(({ listener: i }) => i(...n))),
        e === "abort")
      ) {
        const i = n[0];
        !te(this, $t, "f") && !(r != null && r.length) && Promise.reject(i),
          te(this, _n, "f").call(this, i),
          te(this, wn, "f").call(this, i),
          this._emit("end");
        return;
      }
      if (e === "error") {
        const i = n[0];
        !te(this, $t, "f") && !(r != null && r.length) && Promise.reject(i),
          te(this, _n, "f").call(this, i),
          te(this, wn, "f").call(this, i),
          this._emit("end");
      }
    }
    _emitFinal() {}
  }
  (gr = new WeakMap()),
    (_r = new WeakMap()),
    (_n = new WeakMap()),
    (yn = new WeakMap()),
    (yr = new WeakMap()),
    (wn = new WeakMap()),
    (Qe = new WeakMap()),
    (bn = new WeakMap()),
    (wr = new WeakMap()),
    (br = new WeakMap()),
    ($t = new WeakMap()),
    (xi = new WeakSet()),
    (Co = function (e) {
      if (
        ($e(this, wr, !0, "f"),
        e instanceof Error && e.name === "AbortError" && (e = new Re()),
        e instanceof Re)
      )
        return $e(this, br, !0, "f"), this._emit("abort", e);
      if (e instanceof N) return this._emit("error", e);
      if (e instanceof Error) {
        const n = new N(e.message);
        return (n.cause = e), this._emit("error", n);
      }
      return this._emit("error", new N(String(e)));
    });
  var $ = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    Ee = function (t, e, n, r, i) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return r === "a" ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
    },
    pe,
    Si,
    He,
    vr,
    Le,
    vt,
    Lt,
    xt,
    xr,
    Ce,
    kr,
    Sr,
    vn,
    xn,
    kn,
    Ao,
    Po,
    To,
    Io,
    Ro,
    Oo,
    $o;
  class je extends ki {
    constructor() {
      super(...arguments),
        pe.add(this),
        Si.set(this, []),
        He.set(this, {}),
        vr.set(this, {}),
        Le.set(this, void 0),
        vt.set(this, void 0),
        Lt.set(this, void 0),
        xt.set(this, void 0),
        xr.set(this, void 0),
        Ce.set(this, void 0),
        kr.set(this, void 0),
        Sr.set(this, void 0),
        vn.set(this, void 0);
    }
    [((Si = new WeakMap()),
    (He = new WeakMap()),
    (vr = new WeakMap()),
    (Le = new WeakMap()),
    (vt = new WeakMap()),
    (Lt = new WeakMap()),
    (xt = new WeakMap()),
    (xr = new WeakMap()),
    (Ce = new WeakMap()),
    (kr = new WeakMap()),
    (Sr = new WeakMap()),
    (vn = new WeakMap()),
    (pe = new WeakSet()),
    Symbol.asyncIterator)]() {
      const e = [],
        n = [];
      let r = !1;
      return (
        this.on("event", (i) => {
          const s = n.shift();
          s ? s.resolve(i) : e.push(i);
        }),
        this.on("end", () => {
          r = !0;
          for (const i of n) i.resolve(void 0);
          n.length = 0;
        }),
        this.on("abort", (i) => {
          r = !0;
          for (const s of n) s.reject(i);
          n.length = 0;
        }),
        this.on("error", (i) => {
          r = !0;
          for (const s of n) s.reject(i);
          n.length = 0;
        }),
        {
          next: async () =>
            e.length
              ? { value: e.shift(), done: !1 }
              : r
              ? { value: void 0, done: !0 }
              : new Promise((s, a) => n.push({ resolve: s, reject: a })).then(
                  (s) =>
                    s ? { value: s, done: !1 } : { value: void 0, done: !0 }
                ),
          return: async () => (this.abort(), { value: void 0, done: !0 }),
        }
      );
    }
    static fromReadableStream(e) {
      const n = new je();
      return n._run(() => n._fromReadableStream(e)), n;
    }
    async _fromReadableStream(e, n) {
      var s;
      const r = n == null ? void 0 : n.signal;
      r &&
        (r.aborted && this.controller.abort(),
        r.addEventListener("abort", () => this.controller.abort())),
        this._connected();
      const i = qe.fromReadableStream(e, this.controller);
      for await (const a of i) $(this, pe, "m", xn).call(this, a);
      if ((s = i.controller.signal) != null && s.aborted) throw new Re();
      return this._addRun($(this, pe, "m", kn).call(this));
    }
    toReadableStream() {
      return new qe(
        this[Symbol.asyncIterator].bind(this),
        this.controller
      ).toReadableStream();
    }
    static createToolAssistantStream(e, n, r, i, s) {
      const a = new je();
      return (
        a._run(() =>
          a._runToolAssistantStream(e, n, r, i, {
            ...s,
            headers: {
              ...(s == null ? void 0 : s.headers),
              "X-Stainless-Helper-Method": "stream",
            },
          })
        ),
        a
      );
    }
    async _createToolAssistantStream(e, n, r, i, s) {
      var u;
      const a = s == null ? void 0 : s.signal;
      a &&
        (a.aborted && this.controller.abort(),
        a.addEventListener("abort", () => this.controller.abort()));
      const o = { ...i, stream: !0 },
        l = await e.submitToolOutputs(n, r, o, {
          ...s,
          signal: this.controller.signal,
        });
      this._connected();
      for await (const c of l) $(this, pe, "m", xn).call(this, c);
      if ((u = l.controller.signal) != null && u.aborted) throw new Re();
      return this._addRun($(this, pe, "m", kn).call(this));
    }
    static createThreadAssistantStream(e, n, r) {
      const i = new je();
      return (
        i._run(() =>
          i._threadAssistantStream(e, n, {
            ...r,
            headers: {
              ...(r == null ? void 0 : r.headers),
              "X-Stainless-Helper-Method": "stream",
            },
          })
        ),
        i
      );
    }
    static createAssistantStream(e, n, r, i) {
      const s = new je();
      return (
        s._run(() =>
          s._runAssistantStream(e, n, r, {
            ...i,
            headers: {
              ...(i == null ? void 0 : i.headers),
              "X-Stainless-Helper-Method": "stream",
            },
          })
        ),
        s
      );
    }
    currentEvent() {
      return $(this, kr, "f");
    }
    currentRun() {
      return $(this, Sr, "f");
    }
    currentMessageSnapshot() {
      return $(this, Le, "f");
    }
    currentRunStepSnapshot() {
      return $(this, vn, "f");
    }
    async finalRunSteps() {
      return await this.done(), Object.values($(this, He, "f"));
    }
    async finalMessages() {
      return await this.done(), Object.values($(this, vr, "f"));
    }
    async finalRun() {
      if ((await this.done(), !$(this, vt, "f")))
        throw Error("Final run was not received.");
      return $(this, vt, "f");
    }
    async _createThreadAssistantStream(e, n, r) {
      var o;
      const i = r == null ? void 0 : r.signal;
      i &&
        (i.aborted && this.controller.abort(),
        i.addEventListener("abort", () => this.controller.abort()));
      const s = { ...n, stream: !0 },
        a = await e.createAndRun(s, { ...r, signal: this.controller.signal });
      this._connected();
      for await (const l of a) $(this, pe, "m", xn).call(this, l);
      if ((o = a.controller.signal) != null && o.aborted) throw new Re();
      return this._addRun($(this, pe, "m", kn).call(this));
    }
    async _createAssistantStream(e, n, r, i) {
      var l;
      const s = i == null ? void 0 : i.signal;
      s &&
        (s.aborted && this.controller.abort(),
        s.addEventListener("abort", () => this.controller.abort()));
      const a = { ...r, stream: !0 },
        o = await e.create(n, a, { ...i, signal: this.controller.signal });
      this._connected();
      for await (const u of o) $(this, pe, "m", xn).call(this, u);
      if ((l = o.controller.signal) != null && l.aborted) throw new Re();
      return this._addRun($(this, pe, "m", kn).call(this));
    }
    static accumulateDelta(e, n) {
      for (const [r, i] of Object.entries(n)) {
        if (!e.hasOwnProperty(r)) {
          e[r] = i;
          continue;
        }
        let s = e[r];
        if (s == null) {
          e[r] = i;
          continue;
        }
        if (r === "index" || r === "type") {
          e[r] = i;
          continue;
        }
        if (typeof s == "string" && typeof i == "string") s += i;
        else if (typeof s == "number" && typeof i == "number") s += i;
        else if (wi(s) && wi(i)) s = this.accumulateDelta(s, i);
        else if (Array.isArray(s) && Array.isArray(i)) {
          if (s.every((a) => typeof a == "string" || typeof a == "number")) {
            s.push(...i);
            continue;
          }
          for (const a of i) {
            if (!wi(a))
              throw new Error(
                `Expected array delta entry to be an object but got: ${a}`
              );
            const o = a.index;
            if (o == null)
              throw (
                (console.error(a),
                new Error(
                  "Expected array delta entry to have an `index` property"
                ))
              );
            if (typeof o != "number")
              throw new Error(
                `Expected array delta entry \`index\` property to be a number but got ${o}`
              );
            const l = s[o];
            l == null ? s.push(a) : (s[o] = this.accumulateDelta(l, a));
          }
          continue;
        } else
          throw Error(
            `Unhandled record type: ${r}, deltaValue: ${i}, accValue: ${s}`
          );
        e[r] = s;
      }
      return e;
    }
    _addRun(e) {
      return e;
    }
    async _threadAssistantStream(e, n, r) {
      return await this._createThreadAssistantStream(n, e, r);
    }
    async _runAssistantStream(e, n, r, i) {
      return await this._createAssistantStream(n, e, r, i);
    }
    async _runToolAssistantStream(e, n, r, i, s) {
      return await this._createToolAssistantStream(r, e, n, i, s);
    }
  }
  (xn = function (e) {
    if (!this.ended)
      switch (
        (Ee(this, kr, e, "f"), $(this, pe, "m", To).call(this, e), e.event)
      ) {
        case "thread.created":
          break;
        case "thread.run.created":
        case "thread.run.queued":
        case "thread.run.in_progress":
        case "thread.run.requires_action":
        case "thread.run.completed":
        case "thread.run.incomplete":
        case "thread.run.failed":
        case "thread.run.cancelling":
        case "thread.run.cancelled":
        case "thread.run.expired":
          $(this, pe, "m", $o).call(this, e);
          break;
        case "thread.run.step.created":
        case "thread.run.step.in_progress":
        case "thread.run.step.delta":
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
          $(this, pe, "m", Po).call(this, e);
          break;
        case "thread.message.created":
        case "thread.message.in_progress":
        case "thread.message.delta":
        case "thread.message.completed":
        case "thread.message.incomplete":
          $(this, pe, "m", Ao).call(this, e);
          break;
        case "error":
          throw new Error(
            "Encountered an error event in event processing - errors should be processed earlier"
          );
      }
  }),
    (kn = function () {
      if (this.ended) throw new N("stream has ended, this shouldn't happen");
      if (!$(this, vt, "f")) throw Error("Final run has not been received");
      return $(this, vt, "f");
    }),
    (Ao = function (e) {
      const [n, r] = $(this, pe, "m", Ro).call(this, e, $(this, Le, "f"));
      Ee(this, Le, n, "f"), ($(this, vr, "f")[n.id] = n);
      for (const i of r) {
        const s = n.content[i.index];
        (s == null ? void 0 : s.type) == "text" &&
          this._emit("textCreated", s.text);
      }
      switch (e.event) {
        case "thread.message.created":
          this._emit("messageCreated", e.data);
          break;
        case "thread.message.in_progress":
          break;
        case "thread.message.delta":
          if (
            (this._emit("messageDelta", e.data.delta, n), e.data.delta.content)
          )
            for (const i of e.data.delta.content) {
              if (i.type == "text" && i.text) {
                let s = i.text,
                  a = n.content[i.index];
                if (a && a.type == "text") this._emit("textDelta", s, a.text);
                else
                  throw Error(
                    "The snapshot associated with this text delta is not text or missing"
                  );
              }
              if (i.index != $(this, Lt, "f")) {
                if ($(this, xt, "f"))
                  switch ($(this, xt, "f").type) {
                    case "text":
                      this._emit(
                        "textDone",
                        $(this, xt, "f").text,
                        $(this, Le, "f")
                      );
                      break;
                    case "image_file":
                      this._emit(
                        "imageFileDone",
                        $(this, xt, "f").image_file,
                        $(this, Le, "f")
                      );
                      break;
                  }
                Ee(this, Lt, i.index, "f");
              }
              Ee(this, xt, n.content[i.index], "f");
            }
          break;
        case "thread.message.completed":
        case "thread.message.incomplete":
          if ($(this, Lt, "f") !== void 0) {
            const i = e.data.content[$(this, Lt, "f")];
            if (i)
              switch (i.type) {
                case "image_file":
                  this._emit("imageFileDone", i.image_file, $(this, Le, "f"));
                  break;
                case "text":
                  this._emit("textDone", i.text, $(this, Le, "f"));
                  break;
              }
          }
          $(this, Le, "f") && this._emit("messageDone", e.data),
            Ee(this, Le, void 0, "f");
      }
    }),
    (Po = function (e) {
      const n = $(this, pe, "m", Io).call(this, e);
      switch ((Ee(this, vn, n, "f"), e.event)) {
        case "thread.run.step.created":
          this._emit("runStepCreated", e.data);
          break;
        case "thread.run.step.delta":
          const r = e.data.delta;
          if (
            r.step_details &&
            r.step_details.type == "tool_calls" &&
            r.step_details.tool_calls &&
            n.step_details.type == "tool_calls"
          )
            for (const s of r.step_details.tool_calls)
              s.index == $(this, xr, "f")
                ? this._emit(
                    "toolCallDelta",
                    s,
                    n.step_details.tool_calls[s.index]
                  )
                : ($(this, Ce, "f") &&
                    this._emit("toolCallDone", $(this, Ce, "f")),
                  Ee(this, xr, s.index, "f"),
                  Ee(this, Ce, n.step_details.tool_calls[s.index], "f"),
                  $(this, Ce, "f") &&
                    this._emit("toolCallCreated", $(this, Ce, "f")));
          this._emit("runStepDelta", e.data.delta, n);
          break;
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
          Ee(this, vn, void 0, "f"),
            e.data.step_details.type == "tool_calls" &&
              $(this, Ce, "f") &&
              (this._emit("toolCallDone", $(this, Ce, "f")),
              Ee(this, Ce, void 0, "f")),
            this._emit("runStepDone", e.data, n);
          break;
      }
    }),
    (To = function (e) {
      $(this, Si, "f").push(e), this._emit("event", e);
    }),
    (Io = function (e) {
      switch (e.event) {
        case "thread.run.step.created":
          return ($(this, He, "f")[e.data.id] = e.data), e.data;
        case "thread.run.step.delta":
          let n = $(this, He, "f")[e.data.id];
          if (!n)
            throw Error(
              "Received a RunStepDelta before creation of a snapshot"
            );
          let r = e.data;
          if (r.delta) {
            const i = je.accumulateDelta(n, r.delta);
            $(this, He, "f")[e.data.id] = i;
          }
          return $(this, He, "f")[e.data.id];
        case "thread.run.step.completed":
        case "thread.run.step.failed":
        case "thread.run.step.cancelled":
        case "thread.run.step.expired":
        case "thread.run.step.in_progress":
          $(this, He, "f")[e.data.id] = e.data;
          break;
      }
      if ($(this, He, "f")[e.data.id]) return $(this, He, "f")[e.data.id];
      throw new Error("No snapshot available");
    }),
    (Ro = function (e, n) {
      let r = [];
      switch (e.event) {
        case "thread.message.created":
          return [e.data, r];
        case "thread.message.delta":
          if (!n)
            throw Error(
              "Received a delta with no existing snapshot (there should be one from message creation)"
            );
          let i = e.data;
          if (i.delta.content)
            for (const s of i.delta.content)
              if (s.index in n.content) {
                let a = n.content[s.index];
                n.content[s.index] = $(this, pe, "m", Oo).call(this, s, a);
              } else (n.content[s.index] = s), r.push(s);
          return [n, r];
        case "thread.message.in_progress":
        case "thread.message.completed":
        case "thread.message.incomplete":
          if (n) return [n, r];
          throw Error(
            "Received thread message event with no existing snapshot"
          );
      }
      throw Error("Tried to accumulate a non-message event");
    }),
    (Oo = function (e, n) {
      return je.accumulateDelta(n, e);
    }),
    ($o = function (e) {
      switch ((Ee(this, Sr, e.data, "f"), e.event)) {
        case "thread.run.created":
          break;
        case "thread.run.queued":
          break;
        case "thread.run.in_progress":
          break;
        case "thread.run.requires_action":
        case "thread.run.cancelled":
        case "thread.run.failed":
        case "thread.run.completed":
        case "thread.run.expired":
          Ee(this, vt, e.data, "f"),
            $(this, Ce, "f") &&
              (this._emit("toolCallDone", $(this, Ce, "f")),
              Ee(this, Ce, void 0, "f"));
          break;
      }
    });
  class Ei extends M {
    create(e, n) {
      return this._client.post("/assistants", {
        body: e,
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    retrieve(e, n) {
      return this._client.get(`/assistants/${e}`, {
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    update(e, n, r) {
      return this._client.post(`/assistants/${e}`, {
        body: n,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    list(e = {}, n) {
      return ne(e)
        ? this.list({}, e)
        : this._client.getAPIList("/assistants", Ci, {
            query: e,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(n == null ? void 0 : n.headers),
            },
          });
    }
    del(e, n) {
      return this._client.delete(`/assistants/${e}`, {
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
  }
  class Ci extends fe {}
  Ei.AssistantsPage = Ci;
  function Lo(t) {
    return typeof t.parse == "function";
  }
  const jt = (t) => (t == null ? void 0 : t.role) === "assistant",
    jo = (t) => (t == null ? void 0 : t.role) === "function",
    No = (t) => (t == null ? void 0 : t.role) === "tool";
  function Ai(t) {
    return (t == null ? void 0 : t.$brand) === "auto-parseable-response-format";
  }
  function Sn(t) {
    return (t == null ? void 0 : t.$brand) === "auto-parseable-tool";
  }
  function Zh(t, e) {
    return !e || !Do(e)
      ? {
          ...t,
          choices: t.choices.map((n) => ({
            ...n,
            message: {
              ...n.message,
              parsed: null,
              ...(n.message.tool_calls
                ? { tool_calls: n.message.tool_calls }
                : void 0),
            },
          })),
        }
      : Pi(t, e);
  }
  function Pi(t, e) {
    const n = t.choices.map((r) => {
      var i;
      if (r.finish_reason === "length") throw new ro();
      if (r.finish_reason === "content_filter") throw new io();
      return {
        ...r,
        message: {
          ...r.message,
          ...(r.message.tool_calls
            ? {
                tool_calls:
                  ((i = r.message.tool_calls) == null
                    ? void 0
                    : i.map((s) => td(e, s))) ?? void 0,
              }
            : void 0),
          parsed:
            r.message.content && !r.message.refusal
              ? ed(e, r.message.content)
              : null,
        },
      };
    });
    return { ...t, choices: n };
  }
  function ed(t, e) {
    var n, r;
    return ((n = t.response_format) == null ? void 0 : n.type) !== "json_schema"
      ? null
      : ((r = t.response_format) == null ? void 0 : r.type) === "json_schema"
      ? "$parseRaw" in t.response_format
        ? t.response_format.$parseRaw(e)
        : JSON.parse(e)
      : null;
  }
  function td(t, e) {
    var r;
    const n =
      (r = t.tools) == null
        ? void 0
        : r.find((i) => {
            var s;
            return (
              ((s = i.function) == null ? void 0 : s.name) === e.function.name
            );
          });
    return {
      ...e,
      function: {
        ...e.function,
        parsed_arguments: Sn(n)
          ? n.$parseRaw(e.function.arguments)
          : n != null && n.function.strict
          ? JSON.parse(e.function.arguments)
          : null,
      },
    };
  }
  function nd(t, e) {
    var r;
    if (!t) return !1;
    const n =
      (r = t.tools) == null
        ? void 0
        : r.find((i) => {
            var s;
            return (
              ((s = i.function) == null ? void 0 : s.name) === e.function.name
            );
          });
    return Sn(n) || (n == null ? void 0 : n.function.strict) || !1;
  }
  function Do(t) {
    var e;
    return Ai(t.response_format)
      ? !0
      : ((e = t.tools) == null
          ? void 0
          : e.some(
              (n) =>
                Sn(n) || (n.type === "function" && n.function.strict === !0)
            )) ?? !1;
  }
  function rd(t) {
    for (const e of t ?? []) {
      if (e.type !== "function")
        throw new N(
          `Currently only \`function\` tool types support auto-parsing; Received \`${e.type}\``
        );
      if (e.function.strict !== !0)
        throw new N(
          `The \`${e.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`
        );
    }
  }
  var we = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    _e,
    Ti,
    Er,
    Ii,
    Ri,
    Oi,
    Fo,
    $i;
  const Mo = 10;
  class Bo extends ki {
    constructor() {
      super(...arguments),
        _e.add(this),
        (this._chatCompletions = []),
        (this.messages = []);
    }
    _addChatCompletion(e) {
      var r;
      this._chatCompletions.push(e), this._emit("chatCompletion", e);
      const n = (r = e.choices[0]) == null ? void 0 : r.message;
      return n && this._addMessage(n), e;
    }
    _addMessage(e, n = !0) {
      if (("content" in e || (e.content = null), this.messages.push(e), n)) {
        if ((this._emit("message", e), (jo(e) || No(e)) && e.content))
          this._emit("functionCallResult", e.content);
        else if (jt(e) && e.function_call)
          this._emit("functionCall", e.function_call);
        else if (jt(e) && e.tool_calls)
          for (const r of e.tool_calls)
            r.type === "function" && this._emit("functionCall", r.function);
      }
    }
    async finalChatCompletion() {
      await this.done();
      const e = this._chatCompletions[this._chatCompletions.length - 1];
      if (!e) throw new N("stream ended without producing a ChatCompletion");
      return e;
    }
    async finalContent() {
      return await this.done(), we(this, _e, "m", Ti).call(this);
    }
    async finalMessage() {
      return await this.done(), we(this, _e, "m", Er).call(this);
    }
    async finalFunctionCall() {
      return await this.done(), we(this, _e, "m", Ii).call(this);
    }
    async finalFunctionCallResult() {
      return await this.done(), we(this, _e, "m", Ri).call(this);
    }
    async totalUsage() {
      return await this.done(), we(this, _e, "m", Oi).call(this);
    }
    allChatCompletions() {
      return [...this._chatCompletions];
    }
    _emitFinal() {
      const e = this._chatCompletions[this._chatCompletions.length - 1];
      e && this._emit("finalChatCompletion", e);
      const n = we(this, _e, "m", Er).call(this);
      n && this._emit("finalMessage", n);
      const r = we(this, _e, "m", Ti).call(this);
      r && this._emit("finalContent", r);
      const i = we(this, _e, "m", Ii).call(this);
      i && this._emit("finalFunctionCall", i);
      const s = we(this, _e, "m", Ri).call(this);
      s != null && this._emit("finalFunctionCallResult", s),
        this._chatCompletions.some((a) => a.usage) &&
          this._emit("totalUsage", we(this, _e, "m", Oi).call(this));
    }
    async _createChatCompletion(e, n, r) {
      const i = r == null ? void 0 : r.signal;
      i &&
        (i.aborted && this.controller.abort(),
        i.addEventListener("abort", () => this.controller.abort())),
        we(this, _e, "m", Fo).call(this, n);
      const s = await e.chat.completions.create(
        { ...n, stream: !1 },
        { ...r, signal: this.controller.signal }
      );
      return this._connected(), this._addChatCompletion(Pi(s, n));
    }
    async _runChatCompletion(e, n, r) {
      for (const i of n.messages) this._addMessage(i, !1);
      return await this._createChatCompletion(e, n, r);
    }
    async _runFunctions(e, n, r) {
      var f;
      const i = "function",
        { function_call: s = "auto", stream: a, ...o } = n,
        l = typeof s != "string" && (s == null ? void 0 : s.name),
        { maxChatCompletions: u = Mo } = r || {},
        c = {};
      for (const d of n.functions) c[d.name || d.function.name] = d;
      const h = n.functions.map((d) => ({
        name: d.name || d.function.name,
        parameters: d.parameters,
        description: d.description,
      }));
      for (const d of n.messages) this._addMessage(d, !1);
      for (let d = 0; d < u; ++d) {
        const _ =
          (f = (
            await this._createChatCompletion(
              e,
              {
                ...o,
                function_call: s,
                functions: h,
                messages: [...this.messages],
              },
              r
            )
          ).choices[0]) == null
            ? void 0
            : f.message;
        if (!_) throw new N("missing message in ChatCompletion response");
        if (!_.function_call) return;
        const { name: y, arguments: b } = _.function_call,
          w = c[y];
        if (w) {
          if (l && l !== y) {
            const v = `Invalid function_call: ${JSON.stringify(
              y
            )}. ${JSON.stringify(l)} requested. Please try again`;
            this._addMessage({ role: i, name: y, content: v });
            continue;
          }
        } else {
          const v = `Invalid function_call: ${JSON.stringify(
            y
          )}. Available options are: ${h
            .map((T) => JSON.stringify(T.name))
            .join(", ")}. Please try again`;
          this._addMessage({ role: i, name: y, content: v });
          continue;
        }
        let x;
        try {
          x = Lo(w) ? await w.parse(b) : b;
        } catch (v) {
          this._addMessage({
            role: i,
            name: y,
            content: v instanceof Error ? v.message : String(v),
          });
          continue;
        }
        const S = await w.function(x, this),
          P = we(this, _e, "m", $i).call(this, S);
        if ((this._addMessage({ role: i, name: y, content: P }), l)) return;
      }
    }
    async _runTools(e, n, r) {
      var d, g, _;
      const i = "tool",
        { tool_choice: s = "auto", stream: a, ...o } = n,
        l =
          typeof s != "string" &&
          ((d = s == null ? void 0 : s.function) == null ? void 0 : d.name),
        { maxChatCompletions: u = Mo } = r || {},
        c = n.tools.map((y) => {
          if (Sn(y)) {
            if (!y.$callback)
              throw new N(
                "Tool given to `.runTools()` that does not have an associated function"
              );
            return {
              type: "function",
              function: {
                function: y.$callback,
                name: y.function.name,
                description: y.function.description || "",
                parameters: y.function.parameters,
                parse: y.$parseRaw,
                strict: !0,
              },
            };
          }
          return y;
        }),
        h = {};
      for (const y of c)
        y.type === "function" &&
          (h[y.function.name || y.function.function.name] = y.function);
      const f =
        "tools" in n
          ? c.map((y) =>
              y.type === "function"
                ? {
                    type: "function",
                    function: {
                      name: y.function.name || y.function.function.name,
                      parameters: y.function.parameters,
                      description: y.function.description,
                      strict: y.function.strict,
                    },
                  }
                : y
            )
          : void 0;
      for (const y of n.messages) this._addMessage(y, !1);
      for (let y = 0; y < u; ++y) {
        const w =
          (g = (
            await this._createChatCompletion(
              e,
              { ...o, tool_choice: s, tools: f, messages: [...this.messages] },
              r
            )
          ).choices[0]) == null
            ? void 0
            : g.message;
        if (!w) throw new N("missing message in ChatCompletion response");
        if (!((_ = w.tool_calls) != null && _.length)) return;
        for (const x of w.tool_calls) {
          if (x.type !== "function") continue;
          const S = x.id,
            { name: P, arguments: v } = x.function,
            T = h[P];
          if (T) {
            if (l && l !== P) {
              const C = `Invalid tool_call: ${JSON.stringify(
                P
              )}. ${JSON.stringify(l)} requested. Please try again`;
              this._addMessage({ role: i, tool_call_id: S, content: C });
              continue;
            }
          } else {
            const C = `Invalid tool_call: ${JSON.stringify(
              P
            )}. Available options are: ${Object.keys(h)
              .map((I) => JSON.stringify(I))
              .join(", ")}. Please try again`;
            this._addMessage({ role: i, tool_call_id: S, content: C });
            continue;
          }
          let V;
          try {
            V = Lo(T) ? await T.parse(v) : v;
          } catch (C) {
            const I = C instanceof Error ? C.message : String(C);
            this._addMessage({ role: i, tool_call_id: S, content: I });
            continue;
          }
          const O = await T.function(V, this),
            j = we(this, _e, "m", $i).call(this, O);
          if ((this._addMessage({ role: i, tool_call_id: S, content: j }), l))
            return;
        }
      }
    }
  }
  (_e = new WeakSet()),
    (Ti = function () {
      return we(this, _e, "m", Er).call(this).content ?? null;
    }),
    (Er = function () {
      let e = this.messages.length;
      for (; e-- > 0; ) {
        const n = this.messages[e];
        if (jt(n)) {
          const { function_call: r, ...i } = n,
            s = {
              ...i,
              content: n.content ?? null,
              refusal: n.refusal ?? null,
            };
          return r && (s.function_call = r), s;
        }
      }
      throw new N(
        "stream ended without producing a ChatCompletionMessage with role=assistant"
      );
    }),
    (Ii = function () {
      var e, n;
      for (let r = this.messages.length - 1; r >= 0; r--) {
        const i = this.messages[r];
        if (jt(i) && i != null && i.function_call) return i.function_call;
        if (
          jt(i) &&
          (e = i == null ? void 0 : i.tool_calls) != null &&
          e.length
        )
          return (n = i.tool_calls.at(-1)) == null ? void 0 : n.function;
      }
    }),
    (Ri = function () {
      for (let e = this.messages.length - 1; e >= 0; e--) {
        const n = this.messages[e];
        if (
          (jo(n) && n.content != null) ||
          (No(n) &&
            n.content != null &&
            typeof n.content == "string" &&
            this.messages.some((r) => {
              var i;
              return (
                r.role === "assistant" &&
                ((i = r.tool_calls) == null
                  ? void 0
                  : i.some(
                      (s) => s.type === "function" && s.id === n.tool_call_id
                    ))
              );
            }))
        )
          return n.content;
      }
    }),
    (Oi = function () {
      const e = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
      for (const { usage: n } of this._chatCompletions)
        n &&
          ((e.completion_tokens += n.completion_tokens),
          (e.prompt_tokens += n.prompt_tokens),
          (e.total_tokens += n.total_tokens));
      return e;
    }),
    (Fo = function (e) {
      if (e.n != null && e.n > 1)
        throw new N(
          "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly."
        );
    }),
    ($i = function (e) {
      return typeof e == "string"
        ? e
        : e === void 0
        ? "undefined"
        : JSON.stringify(e);
    });
  class En extends Bo {
    static runFunctions(e, n, r) {
      const i = new En(),
        s = {
          ...r,
          headers: {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Helper-Method": "runFunctions",
          },
        };
      return i._run(() => i._runFunctions(e, n, s)), i;
    }
    static runTools(e, n, r) {
      const i = new En(),
        s = {
          ...r,
          headers: {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Helper-Method": "runTools",
          },
        };
      return i._run(() => i._runTools(e, n, s)), i;
    }
    _addMessage(e, n = !0) {
      super._addMessage(e, n),
        jt(e) && e.content && this._emit("content", e.content);
    }
  }
  const Uo = 1,
    zo = 2,
    qo = 4,
    Ho = 8,
    Vo = 16,
    Wo = 32,
    Jo = 64,
    Ko = 128,
    Go = 256,
    Xo = Ko | Go,
    Qo = Vo | Wo | Xo | Jo,
    Yo = Uo | zo | Qo,
    Zo = qo | Ho,
    id = Yo | Zo,
    le = {
      STR: Uo,
      NUM: zo,
      ARR: qo,
      OBJ: Ho,
      NULL: Vo,
      BOOL: Wo,
      NAN: Jo,
      INFINITY: Ko,
      MINUS_INFINITY: Go,
      INF: Xo,
      SPECIAL: Qo,
      ATOM: Yo,
      COLLECTION: Zo,
      ALL: id,
    };
  class sd extends Error {}
  class ad extends Error {}
  function od(t, e = le.ALL) {
    if (typeof t != "string")
      throw new TypeError(`expecting str, got ${typeof t}`);
    if (!t.trim()) throw new Error(`${t} is empty`);
    return ld(t.trim(), e);
  }
  const ld = (t, e) => {
      const n = t.length;
      let r = 0;
      const i = (f) => {
          throw new sd(`${f} at position ${r}`);
        },
        s = (f) => {
          throw new ad(`${f} at position ${r}`);
        },
        a = () => (
          h(),
          r >= n && i("Unexpected end of input"),
          t[r] === '"'
            ? o()
            : t[r] === "{"
            ? l()
            : t[r] === "["
            ? u()
            : t.substring(r, r + 4) === "null" ||
              (le.NULL & e && n - r < 4 && "null".startsWith(t.substring(r)))
            ? ((r += 4), null)
            : t.substring(r, r + 4) === "true" ||
              (le.BOOL & e && n - r < 4 && "true".startsWith(t.substring(r)))
            ? ((r += 4), !0)
            : t.substring(r, r + 5) === "false" ||
              (le.BOOL & e && n - r < 5 && "false".startsWith(t.substring(r)))
            ? ((r += 5), !1)
            : t.substring(r, r + 8) === "Infinity" ||
              (le.INFINITY & e &&
                n - r < 8 &&
                "Infinity".startsWith(t.substring(r)))
            ? ((r += 8), 1 / 0)
            : t.substring(r, r + 9) === "-Infinity" ||
              (le.MINUS_INFINITY & e &&
                1 < n - r &&
                n - r < 9 &&
                "-Infinity".startsWith(t.substring(r)))
            ? ((r += 9), -1 / 0)
            : t.substring(r, r + 3) === "NaN" ||
              (le.NAN & e && n - r < 3 && "NaN".startsWith(t.substring(r)))
            ? ((r += 3), NaN)
            : c()
        ),
        o = () => {
          const f = r;
          let d = !1;
          for (r++; r < n && (t[r] !== '"' || (d && t[r - 1] === "\\")); )
            (d = t[r] === "\\" ? !d : !1), r++;
          if (t.charAt(r) == '"')
            try {
              return JSON.parse(t.substring(f, ++r - Number(d)));
            } catch (g) {
              s(String(g));
            }
          else if (le.STR & e)
            try {
              return JSON.parse(t.substring(f, r - Number(d)) + '"');
            } catch {
              return JSON.parse(t.substring(f, t.lastIndexOf("\\")) + '"');
            }
          i("Unterminated string literal");
        },
        l = () => {
          r++, h();
          const f = {};
          try {
            for (; t[r] !== "}"; ) {
              if ((h(), r >= n && le.OBJ & e)) return f;
              const d = o();
              h(), r++;
              try {
                const g = a();
                Object.defineProperty(f, d, {
                  value: g,
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                });
              } catch (g) {
                if (le.OBJ & e) return f;
                throw g;
              }
              h(), t[r] === "," && r++;
            }
          } catch {
            if (le.OBJ & e) return f;
            i("Expected '}' at end of object");
          }
          return r++, f;
        },
        u = () => {
          r++;
          const f = [];
          try {
            for (; t[r] !== "]"; ) f.push(a()), h(), t[r] === "," && r++;
          } catch {
            if (le.ARR & e) return f;
            i("Expected ']' at end of array");
          }
          return r++, f;
        },
        c = () => {
          if (r === 0) {
            t === "-" && le.NUM & e && i("Not sure what '-' is");
            try {
              return JSON.parse(t);
            } catch (d) {
              if (le.NUM & e)
                try {
                  return t[t.length - 1] === "."
                    ? JSON.parse(t.substring(0, t.lastIndexOf(".")))
                    : JSON.parse(t.substring(0, t.lastIndexOf("e")));
                } catch {}
              s(String(d));
            }
          }
          const f = r;
          for (t[r] === "-" && r++; t[r] && !",]}".includes(t[r]); ) r++;
          r == n && !(le.NUM & e) && i("Unterminated number literal");
          try {
            return JSON.parse(t.substring(f, r));
          } catch {
            t.substring(f, r) === "-" &&
              le.NUM & e &&
              i("Not sure what '-' is");
            try {
              return JSON.parse(t.substring(f, t.lastIndexOf("e")));
            } catch (g) {
              s(String(g));
            }
          }
        },
        h = () => {
          for (
            ;
            r < n &&
            ` 
\r	`.includes(t[r]);

          )
            r++;
        };
      return a();
    },
    el = (t) => od(t, le.ALL ^ le.NUM);
  var Nt = function (t, e, n, r, i) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return r === "a" ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
    },
    X = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    oe,
    Ye,
    Dt,
    st,
    Li,
    Cr,
    ji,
    Ni,
    Di,
    Ar,
    Fi,
    tl;
  class Cn extends Bo {
    constructor(e) {
      super(),
        oe.add(this),
        Ye.set(this, void 0),
        Dt.set(this, void 0),
        st.set(this, void 0),
        Nt(this, Ye, e, "f"),
        Nt(this, Dt, [], "f");
    }
    get currentChatCompletionSnapshot() {
      return X(this, st, "f");
    }
    static fromReadableStream(e) {
      const n = new Cn(null);
      return n._run(() => n._fromReadableStream(e)), n;
    }
    static createChatCompletion(e, n, r) {
      const i = new Cn(n);
      return (
        i._run(() =>
          i._runChatCompletion(
            e,
            { ...n, stream: !0 },
            {
              ...r,
              headers: {
                ...(r == null ? void 0 : r.headers),
                "X-Stainless-Helper-Method": "stream",
              },
            }
          )
        ),
        i
      );
    }
    async _createChatCompletion(e, n, r) {
      var a;
      super._createChatCompletion;
      const i = r == null ? void 0 : r.signal;
      i &&
        (i.aborted && this.controller.abort(),
        i.addEventListener("abort", () => this.controller.abort())),
        X(this, oe, "m", Li).call(this);
      const s = await e.chat.completions.create(
        { ...n, stream: !0 },
        { ...r, signal: this.controller.signal }
      );
      this._connected();
      for await (const o of s) X(this, oe, "m", ji).call(this, o);
      if ((a = s.controller.signal) != null && a.aborted) throw new Re();
      return this._addChatCompletion(X(this, oe, "m", Ar).call(this));
    }
    async _fromReadableStream(e, n) {
      var a;
      const r = n == null ? void 0 : n.signal;
      r &&
        (r.aborted && this.controller.abort(),
        r.addEventListener("abort", () => this.controller.abort())),
        X(this, oe, "m", Li).call(this),
        this._connected();
      const i = qe.fromReadableStream(e, this.controller);
      let s;
      for await (const o of i)
        s &&
          s !== o.id &&
          this._addChatCompletion(X(this, oe, "m", Ar).call(this)),
          X(this, oe, "m", ji).call(this, o),
          (s = o.id);
      if ((a = i.controller.signal) != null && a.aborted) throw new Re();
      return this._addChatCompletion(X(this, oe, "m", Ar).call(this));
    }
    [((Ye = new WeakMap()),
    (Dt = new WeakMap()),
    (st = new WeakMap()),
    (oe = new WeakSet()),
    (Li = function () {
      this.ended || Nt(this, st, void 0, "f");
    }),
    (Cr = function (n) {
      let r = X(this, Dt, "f")[n.index];
      return (
        r ||
        ((r = {
          content_done: !1,
          refusal_done: !1,
          logprobs_content_done: !1,
          logprobs_refusal_done: !1,
          done_tool_calls: new Set(),
          current_tool_call_index: null,
        }),
        (X(this, Dt, "f")[n.index] = r),
        r)
      );
    }),
    (ji = function (n) {
      var i, s, a, o, l, u, c, h, f, d, g, _, y, b, w;
      if (this.ended) return;
      const r = X(this, oe, "m", tl).call(this, n);
      this._emit("chunk", n, r);
      for (const x of n.choices) {
        const S = r.choices[x.index];
        x.delta.content != null &&
          ((i = S.message) == null ? void 0 : i.role) === "assistant" &&
          (s = S.message) != null &&
          s.content &&
          (this._emit("content", x.delta.content, S.message.content),
          this._emit("content.delta", {
            delta: x.delta.content,
            snapshot: S.message.content,
            parsed: S.message.parsed,
          })),
          x.delta.refusal != null &&
            ((a = S.message) == null ? void 0 : a.role) === "assistant" &&
            (o = S.message) != null &&
            o.refusal &&
            this._emit("refusal.delta", {
              delta: x.delta.refusal,
              snapshot: S.message.refusal,
            }),
          ((l = x.logprobs) == null ? void 0 : l.content) != null &&
            ((u = S.message) == null ? void 0 : u.role) === "assistant" &&
            this._emit("logprobs.content.delta", {
              content: (c = x.logprobs) == null ? void 0 : c.content,
              snapshot: ((h = S.logprobs) == null ? void 0 : h.content) ?? [],
            }),
          ((f = x.logprobs) == null ? void 0 : f.refusal) != null &&
            ((d = S.message) == null ? void 0 : d.role) === "assistant" &&
            this._emit("logprobs.refusal.delta", {
              refusal: (g = x.logprobs) == null ? void 0 : g.refusal,
              snapshot: ((_ = S.logprobs) == null ? void 0 : _.refusal) ?? [],
            });
        const P = X(this, oe, "m", Cr).call(this, S);
        S.finish_reason &&
          (X(this, oe, "m", Di).call(this, S),
          P.current_tool_call_index != null &&
            X(this, oe, "m", Ni).call(this, S, P.current_tool_call_index));
        for (const v of x.delta.tool_calls ?? [])
          P.current_tool_call_index !== v.index &&
            (X(this, oe, "m", Di).call(this, S),
            P.current_tool_call_index != null &&
              X(this, oe, "m", Ni).call(this, S, P.current_tool_call_index)),
            (P.current_tool_call_index = v.index);
        for (const v of x.delta.tool_calls ?? []) {
          const T = (y = S.message.tool_calls) == null ? void 0 : y[v.index];
          T != null &&
            T.type &&
            ((T == null ? void 0 : T.type) === "function"
              ? this._emit("tool_calls.function.arguments.delta", {
                  name: (b = T.function) == null ? void 0 : b.name,
                  index: v.index,
                  arguments: T.function.arguments,
                  parsed_arguments: T.function.parsed_arguments,
                  arguments_delta:
                    ((w = v.function) == null ? void 0 : w.arguments) ?? "",
                })
              : (T == null || T.type, void 0));
        }
      }
    }),
    (Ni = function (n, r) {
      var a, o, l;
      if (X(this, oe, "m", Cr).call(this, n).done_tool_calls.has(r)) return;
      const s = (a = n.message.tool_calls) == null ? void 0 : a[r];
      if (!s) throw new Error("no tool call snapshot");
      if (!s.type) throw new Error("tool call snapshot missing `type`");
      if (s.type === "function") {
        const u =
          (l = (o = X(this, Ye, "f")) == null ? void 0 : o.tools) == null
            ? void 0
            : l.find(
                (c) =>
                  c.type === "function" && c.function.name === s.function.name
              );
        this._emit("tool_calls.function.arguments.done", {
          name: s.function.name,
          index: r,
          arguments: s.function.arguments,
          parsed_arguments: Sn(u)
            ? u.$parseRaw(s.function.arguments)
            : u != null && u.function.strict
            ? JSON.parse(s.function.arguments)
            : null,
        });
      } else s.type;
    }),
    (Di = function (n) {
      var i, s;
      const r = X(this, oe, "m", Cr).call(this, n);
      if (n.message.content && !r.content_done) {
        r.content_done = !0;
        const a = X(this, oe, "m", Fi).call(this);
        this._emit("content.done", {
          content: n.message.content,
          parsed: a ? a.$parseRaw(n.message.content) : null,
        });
      }
      n.message.refusal &&
        !r.refusal_done &&
        ((r.refusal_done = !0),
        this._emit("refusal.done", { refusal: n.message.refusal })),
        (i = n.logprobs) != null &&
          i.content &&
          !r.logprobs_content_done &&
          ((r.logprobs_content_done = !0),
          this._emit("logprobs.content.done", { content: n.logprobs.content })),
        (s = n.logprobs) != null &&
          s.refusal &&
          !r.logprobs_refusal_done &&
          ((r.logprobs_refusal_done = !0),
          this._emit("logprobs.refusal.done", { refusal: n.logprobs.refusal }));
    }),
    (Ar = function () {
      if (this.ended) throw new N("stream has ended, this shouldn't happen");
      const n = X(this, st, "f");
      if (!n) throw new N("request ended without sending any chunks");
      return (
        Nt(this, st, void 0, "f"),
        Nt(this, Dt, [], "f"),
        ud(n, X(this, Ye, "f"))
      );
    }),
    (Fi = function () {
      var r;
      const n = (r = X(this, Ye, "f")) == null ? void 0 : r.response_format;
      return Ai(n) ? n : null;
    }),
    (tl = function (n) {
      var r, i, s, a;
      let o = X(this, st, "f");
      const { choices: l, ...u } = n;
      o ? Object.assign(o, u) : (o = Nt(this, st, { ...u, choices: [] }, "f"));
      for (const {
        delta: c,
        finish_reason: h,
        index: f,
        logprobs: d = null,
        ...g
      } of n.choices) {
        let _ = o.choices[f];
        if (
          (_ ||
            (_ = o.choices[f] =
              { finish_reason: h, index: f, message: {}, logprobs: d, ...g }),
          d)
        )
          if (!_.logprobs) _.logprobs = Object.assign({}, d);
          else {
            const { content: v, refusal: T, ...V } = d;
            Object.assign(_.logprobs, V),
              v &&
                ((r = _.logprobs).content ?? (r.content = []),
                _.logprobs.content.push(...v)),
              T &&
                ((i = _.logprobs).refusal ?? (i.refusal = []),
                _.logprobs.refusal.push(...T));
          }
        if (
          h &&
          ((_.finish_reason = h), X(this, Ye, "f") && Do(X(this, Ye, "f")))
        ) {
          if (h === "length") throw new ro();
          if (h === "content_filter") throw new io();
        }
        if ((Object.assign(_, g), !c)) continue;
        const {
          content: y,
          refusal: b,
          function_call: w,
          role: x,
          tool_calls: S,
          ...P
        } = c;
        if (
          (Object.assign(_.message, P),
          b && (_.message.refusal = (_.message.refusal || "") + b),
          x && (_.message.role = x),
          w &&
            (_.message.function_call
              ? (w.name && (_.message.function_call.name = w.name),
                w.arguments &&
                  ((s = _.message.function_call).arguments ??
                    (s.arguments = ""),
                  (_.message.function_call.arguments += w.arguments)))
              : (_.message.function_call = w)),
          y &&
            ((_.message.content = (_.message.content || "") + y),
            !_.message.refusal &&
              X(this, oe, "m", Fi).call(this) &&
              (_.message.parsed = el(_.message.content))),
          S)
        ) {
          _.message.tool_calls || (_.message.tool_calls = []);
          for (const { index: v, id: T, type: V, function: O, ...j } of S) {
            const C = (a = _.message.tool_calls)[v] ?? (a[v] = {});
            Object.assign(C, j),
              T && (C.id = T),
              V && (C.type = V),
              O &&
                (C.function ??
                  (C.function = { name: O.name ?? "", arguments: "" })),
              O != null && O.name && (C.function.name = O.name),
              O != null &&
                O.arguments &&
                ((C.function.arguments += O.arguments),
                nd(X(this, Ye, "f"), C) &&
                  (C.function.parsed_arguments = el(C.function.arguments)));
          }
        }
      }
      return o;
    }),
    Symbol.asyncIterator)]() {
      const e = [],
        n = [];
      let r = !1;
      return (
        this.on("chunk", (i) => {
          const s = n.shift();
          s ? s.resolve(i) : e.push(i);
        }),
        this.on("end", () => {
          r = !0;
          for (const i of n) i.resolve(void 0);
          n.length = 0;
        }),
        this.on("abort", (i) => {
          r = !0;
          for (const s of n) s.reject(i);
          n.length = 0;
        }),
        this.on("error", (i) => {
          r = !0;
          for (const s of n) s.reject(i);
          n.length = 0;
        }),
        {
          next: async () =>
            e.length
              ? { value: e.shift(), done: !1 }
              : r
              ? { value: void 0, done: !0 }
              : new Promise((s, a) => n.push({ resolve: s, reject: a })).then(
                  (s) =>
                    s ? { value: s, done: !1 } : { value: void 0, done: !0 }
                ),
          return: async () => (this.abort(), { value: void 0, done: !0 }),
        }
      );
    }
    toReadableStream() {
      return new qe(
        this[Symbol.asyncIterator].bind(this),
        this.controller
      ).toReadableStream();
    }
  }
  function ud(t, e) {
    const {
        id: n,
        choices: r,
        created: i,
        model: s,
        system_fingerprint: a,
        ...o
      } = t,
      l = {
        ...o,
        id: n,
        choices: r.map(
          ({ message: u, finish_reason: c, index: h, logprobs: f, ...d }) => {
            if (!c) throw new N(`missing finish_reason for choice ${h}`);
            const {
                content: g = null,
                function_call: _,
                tool_calls: y,
                ...b
              } = u,
              w = u.role;
            if (!w) throw new N(`missing role for choice ${h}`);
            if (_) {
              const { arguments: x, name: S } = _;
              if (x == null)
                throw new N(`missing function_call.arguments for choice ${h}`);
              if (!S) throw new N(`missing function_call.name for choice ${h}`);
              return {
                ...d,
                message: {
                  content: g,
                  function_call: { arguments: x, name: S },
                  role: w,
                  refusal: u.refusal ?? null,
                },
                finish_reason: c,
                index: h,
                logprobs: f,
              };
            }
            return y
              ? {
                  ...d,
                  index: h,
                  finish_reason: c,
                  logprobs: f,
                  message: {
                    ...b,
                    role: w,
                    content: g,
                    refusal: u.refusal ?? null,
                    tool_calls: y.map((x, S) => {
                      const { function: P, type: v, id: T, ...V } = x,
                        { arguments: O, name: j, ...C } = P || {};
                      if (T == null)
                        throw new N(`missing choices[${h}].tool_calls[${S}].id
${Pr(t)}`);
                      if (v == null)
                        throw new N(`missing choices[${h}].tool_calls[${S}].type
${Pr(t)}`);
                      if (j == null)
                        throw new N(`missing choices[${h}].tool_calls[${S}].function.name
${Pr(t)}`);
                      if (O == null)
                        throw new N(`missing choices[${h}].tool_calls[${S}].function.arguments
${Pr(t)}`);
                      return {
                        ...V,
                        id: T,
                        type: v,
                        function: { ...C, name: j, arguments: O },
                      };
                    }),
                  },
                }
              : {
                  ...d,
                  message: {
                    ...b,
                    content: g,
                    role: w,
                    refusal: u.refusal ?? null,
                  },
                  finish_reason: c,
                  index: h,
                  logprobs: f,
                };
          }
        ),
        created: i,
        model: s,
        object: "chat.completion",
        ...(a ? { system_fingerprint: a } : {}),
      };
    return Zh(l, e);
  }
  function Pr(t) {
    return JSON.stringify(t);
  }
  function hw(t) {}
  class Ft extends Cn {
    static fromReadableStream(e) {
      const n = new Ft(null);
      return n._run(() => n._fromReadableStream(e)), n;
    }
    static runFunctions(e, n, r) {
      const i = new Ft(null),
        s = {
          ...r,
          headers: {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Helper-Method": "runFunctions",
          },
        };
      return i._run(() => i._runFunctions(e, n, s)), i;
    }
    static runTools(e, n, r) {
      const i = new Ft(n),
        s = {
          ...r,
          headers: {
            ...(r == null ? void 0 : r.headers),
            "X-Stainless-Helper-Method": "runTools",
          },
        };
      return i._run(() => i._runTools(e, n, s)), i;
    }
  }
  let nl = class extends M {
    parse(e, n) {
      return (
        rd(e.tools),
        this._client.chat.completions
          .create(e, {
            ...n,
            headers: {
              ...(n == null ? void 0 : n.headers),
              "X-Stainless-Helper-Method": "beta.chat.completions.parse",
            },
          })
          ._thenUnwrap((r) => Pi(r, e))
      );
    }
    runFunctions(e, n) {
      return e.stream
        ? Ft.runFunctions(this._client, e, n)
        : En.runFunctions(this._client, e, n);
    }
    runTools(e, n) {
      return e.stream
        ? Ft.runTools(this._client, e, n)
        : En.runTools(this._client, e, n);
    }
    stream(e, n) {
      return Cn.createChatCompletion(this._client, e, n);
    }
  };
  class Mi extends M {
    constructor() {
      super(...arguments), (this.completions = new nl(this._client));
    }
  }
  (function (t) {
    t.Completions = nl;
  })(Mi || (Mi = {}));
  class rl extends M {
    create(e, n) {
      return this._client.post("/realtime/sessions", {
        body: e,
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
  }
  class il extends M {
    create(e, n) {
      return this._client.post("/realtime/transcription_sessions", {
        body: e,
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
  }
  class Tr extends M {
    constructor() {
      super(...arguments),
        (this.sessions = new rl(this._client)),
        (this.transcriptionSessions = new il(this._client));
    }
  }
  (Tr.Sessions = rl), (Tr.TranscriptionSessions = il);
  class Bi extends M {
    create(e, n, r) {
      return this._client.post(`/threads/${e}/messages`, {
        body: n,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    retrieve(e, n, r) {
      return this._client.get(`/threads/${e}/messages/${n}`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    update(e, n, r, i) {
      return this._client.post(`/threads/${e}/messages/${n}`, {
        body: r,
        ...i,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(i == null ? void 0 : i.headers),
        },
      });
    }
    list(e, n = {}, r) {
      return ne(n)
        ? this.list(e, {}, n)
        : this._client.getAPIList(`/threads/${e}/messages`, Ui, {
            query: n,
            ...r,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(r == null ? void 0 : r.headers),
            },
          });
    }
    del(e, n, r) {
      return this._client.delete(`/threads/${e}/messages/${n}`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
  }
  class Ui extends fe {}
  Bi.MessagesPage = Ui;
  class zi extends M {
    retrieve(e, n, r, i = {}, s) {
      return ne(i)
        ? this.retrieve(e, n, r, {}, i)
        : this._client.get(`/threads/${e}/runs/${n}/steps/${r}`, {
            query: i,
            ...s,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(s == null ? void 0 : s.headers),
            },
          });
    }
    list(e, n, r = {}, i) {
      return ne(r)
        ? this.list(e, n, {}, r)
        : this._client.getAPIList(`/threads/${e}/runs/${n}/steps`, qi, {
            query: r,
            ...i,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(i == null ? void 0 : i.headers),
            },
          });
    }
  }
  class qi extends fe {}
  zi.RunStepsPage = qi;
  let An = class extends M {
    constructor() {
      super(...arguments), (this.steps = new zi(this._client));
    }
    create(e, n, r) {
      const { include: i, ...s } = n;
      return this._client.post(`/threads/${e}/runs`, {
        query: { include: i },
        body: s,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
        stream: n.stream ?? !1,
      });
    }
    retrieve(e, n, r) {
      return this._client.get(`/threads/${e}/runs/${n}`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    update(e, n, r, i) {
      return this._client.post(`/threads/${e}/runs/${n}`, {
        body: r,
        ...i,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(i == null ? void 0 : i.headers),
        },
      });
    }
    list(e, n = {}, r) {
      return ne(n)
        ? this.list(e, {}, n)
        : this._client.getAPIList(`/threads/${e}/runs`, Hi, {
            query: n,
            ...r,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(r == null ? void 0 : r.headers),
            },
          });
    }
    cancel(e, n, r) {
      return this._client.post(`/threads/${e}/runs/${n}/cancel`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    async createAndPoll(e, n, r) {
      const i = await this.create(e, n, r);
      return await this.poll(e, i.id, r);
    }
    createAndStream(e, n, r) {
      return je.createAssistantStream(e, this._client.beta.threads.runs, n, r);
    }
    async poll(e, n, r) {
      const i = {
        ...(r == null ? void 0 : r.headers),
        "X-Stainless-Poll-Helper": "true",
      };
      for (
        r != null &&
        r.pollIntervalMs &&
        (i["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString());
        ;

      ) {
        const { data: s, response: a } = await this.retrieve(e, n, {
          ...r,
          headers: { ...(r == null ? void 0 : r.headers), ...i },
        }).withResponse();
        switch (s.status) {
          case "queued":
          case "in_progress":
          case "cancelling":
            let o = 5e3;
            if (r != null && r.pollIntervalMs) o = r.pollIntervalMs;
            else {
              const l = a.headers.get("openai-poll-after-ms");
              if (l) {
                const u = parseInt(l);
                isNaN(u) || (o = u);
              }
            }
            await mn(o);
            break;
          case "requires_action":
          case "incomplete":
          case "cancelled":
          case "completed":
          case "failed":
          case "expired":
            return s;
        }
      }
    }
    stream(e, n, r) {
      return je.createAssistantStream(e, this._client.beta.threads.runs, n, r);
    }
    submitToolOutputs(e, n, r, i) {
      return this._client.post(`/threads/${e}/runs/${n}/submit_tool_outputs`, {
        body: r,
        ...i,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(i == null ? void 0 : i.headers),
        },
        stream: r.stream ?? !1,
      });
    }
    async submitToolOutputsAndPoll(e, n, r, i) {
      const s = await this.submitToolOutputs(e, n, r, i);
      return await this.poll(e, s.id, i);
    }
    submitToolOutputsStream(e, n, r, i) {
      return je.createToolAssistantStream(
        e,
        n,
        this._client.beta.threads.runs,
        r,
        i
      );
    }
  };
  class Hi extends fe {}
  (An.RunsPage = Hi), (An.Steps = zi), (An.RunStepsPage = qi);
  class Mt extends M {
    constructor() {
      super(...arguments),
        (this.runs = new An(this._client)),
        (this.messages = new Bi(this._client));
    }
    create(e = {}, n) {
      return ne(e)
        ? this.create({}, e)
        : this._client.post("/threads", {
            body: e,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(n == null ? void 0 : n.headers),
            },
          });
    }
    retrieve(e, n) {
      return this._client.get(`/threads/${e}`, {
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    update(e, n, r) {
      return this._client.post(`/threads/${e}`, {
        body: n,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    del(e, n) {
      return this._client.delete(`/threads/${e}`, {
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    createAndRun(e, n) {
      return this._client.post("/threads/runs", {
        body: e,
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
        stream: e.stream ?? !1,
      });
    }
    async createAndRunPoll(e, n) {
      const r = await this.createAndRun(e, n);
      return await this.runs.poll(r.thread_id, r.id, n);
    }
    createAndRunStream(e, n) {
      return je.createThreadAssistantStream(e, this._client.beta.threads, n);
    }
  }
  (Mt.Runs = An),
    (Mt.RunsPage = Hi),
    (Mt.Messages = Bi),
    (Mt.MessagesPage = Ui);
  class Bt extends M {
    constructor() {
      super(...arguments),
        (this.realtime = new Tr(this._client)),
        (this.chat = new Mi(this._client)),
        (this.assistants = new Ei(this._client)),
        (this.threads = new Mt(this._client));
    }
  }
  (Bt.Realtime = Tr),
    (Bt.Assistants = Ei),
    (Bt.AssistantsPage = Ci),
    (Bt.Threads = Mt);
  class sl extends M {
    create(e, n) {
      return this._client.post("/completions", {
        body: e,
        ...n,
        stream: e.stream ?? !1,
      });
    }
  }
  class al extends M {
    create(e, n) {
      const r = !!e.encoding_format;
      let i = r ? e.encoding_format : "base64";
      r && it("Request", "User defined encoding_format:", e.encoding_format);
      const s = this._client.post("/embeddings", {
        body: { ...e, encoding_format: i },
        ...n,
      });
      return r
        ? s
        : (it("response", "Decoding base64 embeddings to float32 array"),
          s._thenUnwrap(
            (a) => (
              a &&
                a.data &&
                a.data.forEach((o) => {
                  const l = o.embedding;
                  o.embedding = Qh(l);
                }),
              a
            )
          ));
    }
  }
  class Vi extends M {
    retrieve(e, n, r, i) {
      return this._client.get(`/evals/${e}/runs/${n}/output_items/${r}`, i);
    }
    list(e, n, r = {}, i) {
      return ne(r)
        ? this.list(e, n, {}, r)
        : this._client.getAPIList(`/evals/${e}/runs/${n}/output_items`, Wi, {
            query: r,
            ...i,
          });
    }
  }
  class Wi extends fe {}
  Vi.OutputItemListResponsesPage = Wi;
  class Pn extends M {
    constructor() {
      super(...arguments), (this.outputItems = new Vi(this._client));
    }
    create(e, n, r) {
      return this._client.post(`/evals/${e}/runs`, { body: n, ...r });
    }
    retrieve(e, n, r) {
      return this._client.get(`/evals/${e}/runs/${n}`, r);
    }
    list(e, n = {}, r) {
      return ne(n)
        ? this.list(e, {}, n)
        : this._client.getAPIList(`/evals/${e}/runs`, Ji, { query: n, ...r });
    }
    del(e, n, r) {
      return this._client.delete(`/evals/${e}/runs/${n}`, r);
    }
    cancel(e, n, r) {
      return this._client.post(`/evals/${e}/runs/${n}`, r);
    }
  }
  class Ji extends fe {}
  (Pn.RunListResponsesPage = Ji),
    (Pn.OutputItems = Vi),
    (Pn.OutputItemListResponsesPage = Wi);
  class Tn extends M {
    constructor() {
      super(...arguments), (this.runs = new Pn(this._client));
    }
    create(e, n) {
      return this._client.post("/evals", { body: e, ...n });
    }
    retrieve(e, n) {
      return this._client.get(`/evals/${e}`, n);
    }
    update(e, n, r) {
      return this._client.post(`/evals/${e}`, { body: n, ...r });
    }
    list(e = {}, n) {
      return ne(e)
        ? this.list({}, e)
        : this._client.getAPIList("/evals", Ki, { query: e, ...n });
    }
    del(e, n) {
      return this._client.delete(`/evals/${e}`, n);
    }
  }
  class Ki extends fe {}
  (Tn.EvalListResponsesPage = Ki),
    (Tn.Runs = Pn),
    (Tn.RunListResponsesPage = Ji);
  let Gi = class extends M {
    create(e, n) {
      return this._client.post("/files", Ot({ body: e, ...n }));
    }
    retrieve(e, n) {
      return this._client.get(`/files/${e}`, n);
    }
    list(e = {}, n) {
      return ne(e)
        ? this.list({}, e)
        : this._client.getAPIList("/files", Xi, { query: e, ...n });
    }
    del(e, n) {
      return this._client.delete(`/files/${e}`, n);
    }
    content(e, n) {
      return this._client.get(`/files/${e}/content`, {
        ...n,
        headers: {
          Accept: "application/binary",
          ...(n == null ? void 0 : n.headers),
        },
        __binaryResponse: !0,
      });
    }
    retrieveContent(e, n) {
      return this._client.get(`/files/${e}/content`, n);
    }
    async waitForProcessing(
      e,
      { pollInterval: n = 5e3, maxWait: r = 30 * 60 * 1e3 } = {}
    ) {
      const i = new Set(["processed", "error", "deleted"]),
        s = Date.now();
      let a = await this.retrieve(e);
      for (; !a.status || !i.has(a.status); )
        if ((await mn(n), (a = await this.retrieve(e)), Date.now() - s > r))
          throw new pi({
            message: `Giving up on waiting for file ${e} to finish processing after ${r} milliseconds.`,
          });
      return a;
    }
  };
  class Xi extends fe {}
  Gi.FileObjectsPage = Xi;
  class ol extends M {}
  let ll = class extends M {
    run(e, n) {
      return this._client.post("/fine_tuning/alpha/graders/run", {
        body: e,
        ...n,
      });
    }
    validate(e, n) {
      return this._client.post("/fine_tuning/alpha/graders/validate", {
        body: e,
        ...n,
      });
    }
  };
  class Qi extends M {
    constructor() {
      super(...arguments), (this.graders = new ll(this._client));
    }
  }
  Qi.Graders = ll;
  class Yi extends M {
    create(e, n, r) {
      return this._client.getAPIList(
        `/fine_tuning/checkpoints/${e}/permissions`,
        Zi,
        { body: n, method: "post", ...r }
      );
    }
    retrieve(e, n = {}, r) {
      return ne(n)
        ? this.retrieve(e, {}, n)
        : this._client.get(`/fine_tuning/checkpoints/${e}/permissions`, {
            query: n,
            ...r,
          });
    }
    del(e, n, r) {
      return this._client.delete(
        `/fine_tuning/checkpoints/${e}/permissions/${n}`,
        r
      );
    }
  }
  class Zi extends dr {}
  Yi.PermissionCreateResponsesPage = Zi;
  let Ir = class extends M {
    constructor() {
      super(...arguments), (this.permissions = new Yi(this._client));
    }
  };
  (Ir.Permissions = Yi), (Ir.PermissionCreateResponsesPage = Zi);
  class es extends M {
    list(e, n = {}, r) {
      return ne(n)
        ? this.list(e, {}, n)
        : this._client.getAPIList(`/fine_tuning/jobs/${e}/checkpoints`, ts, {
            query: n,
            ...r,
          });
    }
  }
  class ts extends fe {}
  es.FineTuningJobCheckpointsPage = ts;
  class Ut extends M {
    constructor() {
      super(...arguments), (this.checkpoints = new es(this._client));
    }
    create(e, n) {
      return this._client.post("/fine_tuning/jobs", { body: e, ...n });
    }
    retrieve(e, n) {
      return this._client.get(`/fine_tuning/jobs/${e}`, n);
    }
    list(e = {}, n) {
      return ne(e)
        ? this.list({}, e)
        : this._client.getAPIList("/fine_tuning/jobs", ns, { query: e, ...n });
    }
    cancel(e, n) {
      return this._client.post(`/fine_tuning/jobs/${e}/cancel`, n);
    }
    listEvents(e, n = {}, r) {
      return ne(n)
        ? this.listEvents(e, {}, n)
        : this._client.getAPIList(`/fine_tuning/jobs/${e}/events`, rs, {
            query: n,
            ...r,
          });
    }
    pause(e, n) {
      return this._client.post(`/fine_tuning/jobs/${e}/pause`, n);
    }
    resume(e, n) {
      return this._client.post(`/fine_tuning/jobs/${e}/resume`, n);
    }
  }
  class ns extends fe {}
  class rs extends fe {}
  (Ut.FineTuningJobsPage = ns),
    (Ut.FineTuningJobEventsPage = rs),
    (Ut.Checkpoints = es),
    (Ut.FineTuningJobCheckpointsPage = ts);
  class at extends M {
    constructor() {
      super(...arguments),
        (this.methods = new ol(this._client)),
        (this.jobs = new Ut(this._client)),
        (this.checkpoints = new Ir(this._client)),
        (this.alpha = new Qi(this._client));
    }
  }
  (at.Methods = ol),
    (at.Jobs = Ut),
    (at.FineTuningJobsPage = ns),
    (at.FineTuningJobEventsPage = rs),
    (at.Checkpoints = Ir),
    (at.Alpha = Qi);
  class ul extends M {}
  class is extends M {
    constructor() {
      super(...arguments), (this.graderModels = new ul(this._client));
    }
  }
  is.GraderModels = ul;
  class cl extends M {
    createVariation(e, n) {
      return this._client.post("/images/variations", Ot({ body: e, ...n }));
    }
    edit(e, n) {
      return this._client.post("/images/edits", Ot({ body: e, ...n }));
    }
    generate(e, n) {
      return this._client.post("/images/generations", { body: e, ...n });
    }
  }
  class ss extends M {
    retrieve(e, n) {
      return this._client.get(`/models/${e}`, n);
    }
    list(e) {
      return this._client.getAPIList("/models", as, e);
    }
    del(e, n) {
      return this._client.delete(`/models/${e}`, n);
    }
  }
  class as extends dr {}
  ss.ModelsPage = as;
  class hl extends M {
    create(e, n) {
      return this._client.post("/moderations", { body: e, ...n });
    }
  }
  function cd(t, e) {
    return !e || !dd(e)
      ? {
          ...t,
          output_parsed: null,
          output: t.output.map((n) =>
            n.type === "function_call"
              ? { ...n, parsed_arguments: null }
              : n.type === "message"
              ? {
                  ...n,
                  content: n.content.map((r) => ({ ...r, parsed: null })),
                }
              : n
          ),
        }
      : dl(t, e);
  }
  function dl(t, e) {
    const n = t.output.map((i) => {
        if (i.type === "function_call")
          return { ...i, parsed_arguments: md(e, i) };
        if (i.type === "message") {
          const s = i.content.map((a) =>
            a.type === "output_text" ? { ...a, parsed: hd(e, a.text) } : a
          );
          return { ...i, content: s };
        }
        return i;
      }),
      r = Object.assign({}, t, { output: n });
    return (
      Object.getOwnPropertyDescriptor(t, "output_text") || fl(r),
      Object.defineProperty(r, "output_parsed", {
        enumerable: !0,
        get() {
          for (const i of r.output)
            if (i.type === "message") {
              for (const s of i.content)
                if (s.type === "output_text" && s.parsed !== null)
                  return s.parsed;
            }
          return null;
        },
      }),
      r
    );
  }
  function hd(t, e) {
    var n, r, i, s;
    return ((r = (n = t.text) == null ? void 0 : n.format) == null
      ? void 0
      : r.type) !== "json_schema"
      ? null
      : "$parseRaw" in ((i = t.text) == null ? void 0 : i.format)
      ? ((s = t.text) == null ? void 0 : s.format).$parseRaw(e)
      : JSON.parse(e);
  }
  function dd(t) {
    var e;
    return !!Ai((e = t.text) == null ? void 0 : e.format);
  }
  function fd(t) {
    return (t == null ? void 0 : t.$brand) === "auto-parseable-tool";
  }
  function pd(t, e) {
    return t.find((n) => n.type === "function" && n.name === e);
  }
  function md(t, e) {
    const n = pd(t.tools ?? [], e.name);
    return {
      ...e,
      ...e,
      parsed_arguments: fd(n)
        ? n.$parseRaw(e.arguments)
        : n != null && n.strict
        ? JSON.parse(e.arguments)
        : null,
    };
  }
  function fl(t) {
    const e = [];
    for (const n of t.output)
      if (n.type === "message")
        for (const r of n.content) r.type === "output_text" && e.push(r.text);
    t.output_text = e.join("");
  }
  class pl extends M {
    list(e, n = {}, r) {
      return ne(n)
        ? this.list(e, {}, n)
        : this._client.getAPIList(`/responses/${e}/input_items`, _d, {
            query: n,
            ...r,
          });
    }
  }
  var zt = function (t, e, n, r, i) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !i : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return r === "a" ? i.call(t, n) : i ? (i.value = n) : e.set(t, n), n;
    },
    ot = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    qt,
    Rr,
    lt,
    Or,
    ml,
    gl,
    _l,
    yl;
  class os extends ki {
    constructor(e) {
      super(),
        qt.add(this),
        Rr.set(this, void 0),
        lt.set(this, void 0),
        Or.set(this, void 0),
        zt(this, Rr, e, "f");
    }
    static createResponse(e, n, r) {
      const i = new os(n);
      return (
        i._run(() =>
          i._createResponse(e, n, {
            ...r,
            headers: {
              ...(r == null ? void 0 : r.headers),
              "X-Stainless-Helper-Method": "stream",
            },
          })
        ),
        i
      );
    }
    async _createResponse(e, n, r) {
      var a;
      const i = r == null ? void 0 : r.signal;
      i &&
        (i.aborted && this.controller.abort(),
        i.addEventListener("abort", () => this.controller.abort())),
        ot(this, qt, "m", ml).call(this);
      const s = await e.responses.create(
        { ...n, stream: !0 },
        { ...r, signal: this.controller.signal }
      );
      this._connected();
      for await (const o of s) ot(this, qt, "m", gl).call(this, o);
      if ((a = s.controller.signal) != null && a.aborted) throw new Re();
      return ot(this, qt, "m", _l).call(this);
    }
    [((Rr = new WeakMap()),
    (lt = new WeakMap()),
    (Or = new WeakMap()),
    (qt = new WeakSet()),
    (ml = function () {
      this.ended || zt(this, lt, void 0, "f");
    }),
    (gl = function (n) {
      if (this.ended) return;
      const r = ot(this, qt, "m", yl).call(this, n);
      switch ((this._emit("event", n), n.type)) {
        case "response.output_text.delta": {
          const i = r.output[n.output_index];
          if (!i) throw new N(`missing output at index ${n.output_index}`);
          if (i.type === "message") {
            const s = i.content[n.content_index];
            if (!s) throw new N(`missing content at index ${n.content_index}`);
            if (s.type !== "output_text")
              throw new N(
                `expected content to be 'output_text', got ${s.type}`
              );
            this._emit("response.output_text.delta", {
              ...n,
              snapshot: s.text,
            });
          }
          break;
        }
        case "response.function_call_arguments.delta": {
          const i = r.output[n.output_index];
          if (!i) throw new N(`missing output at index ${n.output_index}`);
          i.type === "function_call" &&
            this._emit("response.function_call_arguments.delta", {
              ...n,
              snapshot: i.arguments,
            });
          break;
        }
        default:
          this._emit(n.type, n);
          break;
      }
    }),
    (_l = function () {
      if (this.ended) throw new N("stream has ended, this shouldn't happen");
      const n = ot(this, lt, "f");
      if (!n) throw new N("request ended without sending any events");
      zt(this, lt, void 0, "f");
      const r = gd(n, ot(this, Rr, "f"));
      return zt(this, Or, r, "f"), r;
    }),
    (yl = function (n) {
      let r = ot(this, lt, "f");
      if (!r) {
        if (n.type !== "response.created")
          throw new N(
            `When snapshot hasn't been set yet, expected 'response.created' event, got ${n.type}`
          );
        return (r = zt(this, lt, n.response, "f")), r;
      }
      switch (n.type) {
        case "response.output_item.added": {
          r.output.push(n.item);
          break;
        }
        case "response.content_part.added": {
          const i = r.output[n.output_index];
          if (!i) throw new N(`missing output at index ${n.output_index}`);
          i.type === "message" && i.content.push(n.part);
          break;
        }
        case "response.output_text.delta": {
          const i = r.output[n.output_index];
          if (!i) throw new N(`missing output at index ${n.output_index}`);
          if (i.type === "message") {
            const s = i.content[n.content_index];
            if (!s) throw new N(`missing content at index ${n.content_index}`);
            if (s.type !== "output_text")
              throw new N(
                `expected content to be 'output_text', got ${s.type}`
              );
            s.text += n.delta;
          }
          break;
        }
        case "response.function_call_arguments.delta": {
          const i = r.output[n.output_index];
          if (!i) throw new N(`missing output at index ${n.output_index}`);
          i.type === "function_call" && (i.arguments += n.delta);
          break;
        }
        case "response.completed": {
          zt(this, lt, n.response, "f");
          break;
        }
      }
      return r;
    }),
    Symbol.asyncIterator)]() {
      const e = [],
        n = [];
      let r = !1;
      return (
        this.on("event", (i) => {
          const s = n.shift();
          s ? s.resolve(i) : e.push(i);
        }),
        this.on("end", () => {
          r = !0;
          for (const i of n) i.resolve(void 0);
          n.length = 0;
        }),
        this.on("abort", (i) => {
          r = !0;
          for (const s of n) s.reject(i);
          n.length = 0;
        }),
        this.on("error", (i) => {
          r = !0;
          for (const s of n) s.reject(i);
          n.length = 0;
        }),
        {
          next: async () =>
            e.length
              ? { value: e.shift(), done: !1 }
              : r
              ? { value: void 0, done: !0 }
              : new Promise((s, a) => n.push({ resolve: s, reject: a })).then(
                  (s) =>
                    s ? { value: s, done: !1 } : { value: void 0, done: !0 }
                ),
          return: async () => (this.abort(), { value: void 0, done: !0 }),
        }
      );
    }
    async finalResponse() {
      await this.done();
      const e = ot(this, Or, "f");
      if (!e) throw new N("stream ended without producing a ChatCompletion");
      return e;
    }
  }
  function gd(t, e) {
    return cd(t, e);
  }
  class ls extends M {
    constructor() {
      super(...arguments), (this.inputItems = new pl(this._client));
    }
    create(e, n) {
      return this._client
        .post("/responses", { body: e, ...n, stream: e.stream ?? !1 })
        ._thenUnwrap(
          (r) => ("object" in r && r.object === "response" && fl(r), r)
        );
    }
    retrieve(e, n = {}, r) {
      return ne(n)
        ? this.retrieve(e, {}, n)
        : this._client.get(`/responses/${e}`, { query: n, ...r });
    }
    del(e, n) {
      return this._client.delete(`/responses/${e}`, {
        ...n,
        headers: { Accept: "*/*", ...(n == null ? void 0 : n.headers) },
      });
    }
    parse(e, n) {
      return this._client.responses.create(e, n)._thenUnwrap((r) => dl(r, e));
    }
    stream(e, n) {
      return os.createResponse(this._client, e, n);
    }
  }
  class _d extends fe {}
  ls.InputItems = pl;
  class wl extends M {
    create(e, n, r) {
      return this._client.post(`/uploads/${e}/parts`, Ot({ body: n, ...r }));
    }
  }
  class us extends M {
    constructor() {
      super(...arguments), (this.parts = new wl(this._client));
    }
    create(e, n) {
      return this._client.post("/uploads", { body: e, ...n });
    }
    cancel(e, n) {
      return this._client.post(`/uploads/${e}/cancel`, n);
    }
    complete(e, n, r) {
      return this._client.post(`/uploads/${e}/complete`, { body: n, ...r });
    }
  }
  us.Parts = wl;
  const yd = async (t) => {
    const e = await Promise.allSettled(t),
      n = e.filter((i) => i.status === "rejected");
    if (n.length) {
      for (const i of n) console.error(i.reason);
      throw new Error(`${n.length} promise(s) failed - see the above errors`);
    }
    const r = [];
    for (const i of e) i.status === "fulfilled" && r.push(i.value);
    return r;
  };
  class $r extends M {
    create(e, n, r) {
      return this._client.post(`/vector_stores/${e}/files`, {
        body: n,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    retrieve(e, n, r) {
      return this._client.get(`/vector_stores/${e}/files/${n}`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    update(e, n, r, i) {
      return this._client.post(`/vector_stores/${e}/files/${n}`, {
        body: r,
        ...i,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(i == null ? void 0 : i.headers),
        },
      });
    }
    list(e, n = {}, r) {
      return ne(n)
        ? this.list(e, {}, n)
        : this._client.getAPIList(`/vector_stores/${e}/files`, Lr, {
            query: n,
            ...r,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(r == null ? void 0 : r.headers),
            },
          });
    }
    del(e, n, r) {
      return this._client.delete(`/vector_stores/${e}/files/${n}`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    async createAndPoll(e, n, r) {
      const i = await this.create(e, n, r);
      return await this.poll(e, i.id, r);
    }
    async poll(e, n, r) {
      const i = {
        ...(r == null ? void 0 : r.headers),
        "X-Stainless-Poll-Helper": "true",
      };
      for (
        r != null &&
        r.pollIntervalMs &&
        (i["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString());
        ;

      ) {
        const s = await this.retrieve(e, n, {
            ...r,
            headers: i,
          }).withResponse(),
          a = s.data;
        switch (a.status) {
          case "in_progress":
            let o = 5e3;
            if (r != null && r.pollIntervalMs) o = r.pollIntervalMs;
            else {
              const l = s.response.headers.get("openai-poll-after-ms");
              if (l) {
                const u = parseInt(l);
                isNaN(u) || (o = u);
              }
            }
            await mn(o);
            break;
          case "failed":
          case "completed":
            return a;
        }
      }
    }
    async upload(e, n, r) {
      const i = await this._client.files.create(
        { file: n, purpose: "assistants" },
        r
      );
      return this.create(e, { file_id: i.id }, r);
    }
    async uploadAndPoll(e, n, r) {
      const i = await this.upload(e, n, r);
      return await this.poll(e, i.id, r);
    }
    content(e, n, r) {
      return this._client.getAPIList(
        `/vector_stores/${e}/files/${n}/content`,
        cs,
        {
          ...r,
          headers: {
            "OpenAI-Beta": "assistants=v2",
            ...(r == null ? void 0 : r.headers),
          },
        }
      );
    }
  }
  class Lr extends fe {}
  class cs extends dr {}
  ($r.VectorStoreFilesPage = Lr), ($r.FileContentResponsesPage = cs);
  class bl extends M {
    create(e, n, r) {
      return this._client.post(`/vector_stores/${e}/file_batches`, {
        body: n,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    retrieve(e, n, r) {
      return this._client.get(`/vector_stores/${e}/file_batches/${n}`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    cancel(e, n, r) {
      return this._client.post(`/vector_stores/${e}/file_batches/${n}/cancel`, {
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    async createAndPoll(e, n, r) {
      const i = await this.create(e, n);
      return await this.poll(e, i.id, r);
    }
    listFiles(e, n, r = {}, i) {
      return ne(r)
        ? this.listFiles(e, n, {}, r)
        : this._client.getAPIList(
            `/vector_stores/${e}/file_batches/${n}/files`,
            Lr,
            {
              query: r,
              ...i,
              headers: {
                "OpenAI-Beta": "assistants=v2",
                ...(i == null ? void 0 : i.headers),
              },
            }
          );
    }
    async poll(e, n, r) {
      const i = {
        ...(r == null ? void 0 : r.headers),
        "X-Stainless-Poll-Helper": "true",
      };
      for (
        r != null &&
        r.pollIntervalMs &&
        (i["X-Stainless-Custom-Poll-Interval"] = r.pollIntervalMs.toString());
        ;

      ) {
        const { data: s, response: a } = await this.retrieve(e, n, {
          ...r,
          headers: i,
        }).withResponse();
        switch (s.status) {
          case "in_progress":
            let o = 5e3;
            if (r != null && r.pollIntervalMs) o = r.pollIntervalMs;
            else {
              const l = a.headers.get("openai-poll-after-ms");
              if (l) {
                const u = parseInt(l);
                isNaN(u) || (o = u);
              }
            }
            await mn(o);
            break;
          case "failed":
          case "cancelled":
          case "completed":
            return s;
        }
      }
    }
    async uploadAndPoll(e, { files: n, fileIds: r = [] }, i) {
      if (n == null || n.length == 0)
        throw new Error(
          "No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead"
        );
      const s = (i == null ? void 0 : i.maxConcurrency) ?? 5,
        a = Math.min(s, n.length),
        o = this._client,
        l = n.values(),
        u = [...r];
      async function c(f) {
        for (let d of f) {
          const g = await o.files.create({ file: d, purpose: "assistants" }, i);
          u.push(g.id);
        }
      }
      const h = Array(a).fill(l).map(c);
      return await yd(h), await this.createAndPoll(e, { file_ids: u });
    }
  }
  class ut extends M {
    constructor() {
      super(...arguments),
        (this.files = new $r(this._client)),
        (this.fileBatches = new bl(this._client));
    }
    create(e, n) {
      return this._client.post("/vector_stores", {
        body: e,
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    retrieve(e, n) {
      return this._client.get(`/vector_stores/${e}`, {
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    update(e, n, r) {
      return this._client.post(`/vector_stores/${e}`, {
        body: n,
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    list(e = {}, n) {
      return ne(e)
        ? this.list({}, e)
        : this._client.getAPIList("/vector_stores", hs, {
            query: e,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v2",
              ...(n == null ? void 0 : n.headers),
            },
          });
    }
    del(e, n) {
      return this._client.delete(`/vector_stores/${e}`, {
        ...n,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    search(e, n, r) {
      return this._client.getAPIList(`/vector_stores/${e}/search`, ds, {
        body: n,
        method: "post",
        ...r,
        headers: {
          "OpenAI-Beta": "assistants=v2",
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
  }
  class hs extends fe {}
  class ds extends dr {}
  (ut.VectorStoresPage = hs),
    (ut.VectorStoreSearchResponsesPage = ds),
    (ut.Files = $r),
    (ut.VectorStoreFilesPage = Lr),
    (ut.FileContentResponsesPage = cs),
    (ut.FileBatches = bl);
  var vl;
  class U extends Mh {
    constructor({
      baseURL: e = cr("OPENAI_BASE_URL"),
      apiKey: n = cr("OPENAI_API_KEY"),
      organization: r = cr("OPENAI_ORG_ID") ?? null,
      project: i = cr("OPENAI_PROJECT_ID") ?? null,
      ...s
    } = {}) {
      if (n === void 0)
        throw new N(
          "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' })."
        );
      const a = {
        apiKey: n,
        organization: r,
        project: i,
        ...s,
        baseURL: e || "https://api.openai.com/v1",
      };
      if (!a.dangerouslyAllowBrowser && Gh())
        throw new N(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);
      super({
        baseURL: a.baseURL,
        timeout: a.timeout ?? 6e5,
        httpAgent: a.httpAgent,
        maxRetries: a.maxRetries,
        fetch: a.fetch,
      }),
        (this.completions = new sl(this)),
        (this.chat = new mr(this)),
        (this.embeddings = new al(this)),
        (this.files = new Gi(this)),
        (this.images = new cl(this)),
        (this.audio = new gn(this)),
        (this.moderations = new hl(this)),
        (this.models = new ss(this)),
        (this.fineTuning = new at(this)),
        (this.graders = new is(this)),
        (this.vectorStores = new ut(this)),
        (this.beta = new Bt(this)),
        (this.batches = new bi(this)),
        (this.uploads = new us(this)),
        (this.responses = new ls(this)),
        (this.evals = new Tn(this)),
        (this._options = a),
        (this.apiKey = n),
        (this.organization = r),
        (this.project = i);
    }
    defaultQuery() {
      return this._options.defaultQuery;
    }
    defaultHeaders(e) {
      return {
        ...super.defaultHeaders(e),
        "OpenAI-Organization": this.organization,
        "OpenAI-Project": this.project,
        ...this._options.defaultHeaders,
      };
    }
    authHeaders(e) {
      return { Authorization: `Bearer ${this.apiKey}` };
    }
    stringifyQuery(e) {
      return vh(e, { arrayFormat: "brackets" });
    }
  }
  (vl = U),
    (U.OpenAI = vl),
    (U.DEFAULT_TIMEOUT = 6e5),
    (U.OpenAIError = N),
    (U.APIError = de),
    (U.APIConnectionError = ir),
    (U.APIConnectionTimeoutError = pi),
    (U.APIUserAbortError = Re),
    (U.NotFoundError = Ya),
    (U.ConflictError = Za),
    (U.RateLimitError = to),
    (U.BadRequestError = Ga),
    (U.AuthenticationError = Xa),
    (U.InternalServerError = no),
    (U.PermissionDeniedError = Qa),
    (U.UnprocessableEntityError = eo),
    (U.toFile = lo),
    (U.fileFromPath = Wa),
    (U.Completions = sl),
    (U.Chat = mr),
    (U.ChatCompletionsPage = pr),
    (U.Embeddings = al),
    (U.Files = Gi),
    (U.FileObjectsPage = Xi),
    (U.Images = cl),
    (U.Audio = gn),
    (U.Moderations = hl),
    (U.Models = ss),
    (U.ModelsPage = as),
    (U.FineTuning = at),
    (U.Graders = is),
    (U.VectorStores = ut),
    (U.VectorStoresPage = hs),
    (U.VectorStoreSearchResponsesPage = ds),
    (U.Beta = Bt),
    (U.Batches = bi),
    (U.BatchesPage = vi),
    (U.Uploads = us),
    (U.Responses = ls),
    (U.Evals = Tn),
    (U.EvalListResponsesPage = Ki);
  const wd = (t) => new U({ apiKey: t, dangerouslyAllowBrowser: !0 }),
    fs = async (t, e, n) => {
      let r = 0;
      try {
        return (
          await t.responses.create({
            model: "gpt-4.1",
            tools: [{ type: "web_search_preview" }],
            input: [...e, { role: "user", content: n }],
          })
        ).output_text;
      } catch (i) {
        return console.log(i), r < 2 && (r++, fs(e, n)), null;
      }
    },
    bd = (
      t,
      e
    ) => `You are a product assistant for Shopify store: ${t}, embedded on a product page or collection page. 

  Customers engaging and talking to you usually fall into one of these categories:
  - They are unsure if our store is the best place for them to buy from, or if they should buy the product from one of our competitors
  - They are unsure if this product will help them achieve their goals
  - They are unsure if this is the right product for them and their specific needs

Your goal is to understand the customers needs and goals, and match them to the right product. We want the customer to get the perfect product for their needs. Your task is to answer customer questions about the product and the store accurately and provide product comparisons and product recommendations when appropriate. 

You are to answer the questions accurately and provide product recommendations when appropriate.

Here's the shopify store URL: ${t}

The current product you are assisting with, here's it url:  ${e}

Initial Response if on a product page (Automatic):
- share a standout feature of the product using the product name in a simple, friendly sentence.
- Link directly to the product page when mentioning the product name.

Example: "Hey! Did you know the Bushveld Roof Top Tent is perfect for your next adventure? It’s got plenty of space, top-notch durability, and it’s super easy to set up—perfect for a stress-free trip!"

Initial Response if on a collection page (Automatic):
- share a standout feature of the product using the product name in a simple, friendly sentence.
- Link directly to the collection page when mentioning the product name.

Example: "Hey! Did you know the Bushveld Roof Top Tent is perfect for your next adventure? It’s got plenty of space, top-notch durability, and it’s super easy to set up—perfect for a stress-free trip!"


Initial Response if on a collection page (Automatic):
- share a standout feature of the product using the product name in a simple, friendly sentence.
- Link directly to the collection page when mentioning the product name.

Example: "Hey! Need any help finding the perfect {{COLLECTION_NAME}} product for your needs? I can help you find the perfect match for your specific needs, just ask!

Ongoing Customer Interactions:

- If the customer asks about the product: Be clear and friendly, providing answers based on the product page details.
- If the customer asks to compare products: Help them by comparing the products in a simple, friendly way, pointing out the key differences. Use bullet points to compare similar features clearly in an easily readable way. Break chunks of text up so it is easy to read; use a maximum of two sentences per paragraph.
- Always include direct links to both the product being asked about and the products being compared.
- If you’re not sure about something: Be honest, and suggest reaching out to customer support.
- Never ever include links to other websites or to products that are not listed on the store. We want to keep customers on our site and product page, not send them to competitors that sell the same product.

Product Recommendations and Comparisons:

- If the customer asks for alternatives or similar products, recommend products that fit what they’re looking for. Keep it simple and helpful. Use bullet points to summarise noteworthy features and benefits of your recommendations.
- When comparing products, highlight the main differences and what each product does best using bullet points. Don’t forget to add links to each product.
- Always provide direct links to the recommended products or comparisons.
- You are to only recommend products that are in the store. 
- Never ever include links to other websites or to products that are not listed on the store. We want to keep customers on our site and product page, not send them to competitors that sell the same product.
- Many customers will not know what product they want or need, or what they should look for. To help them decide, we have created a variety of ‘best product’ roundup pages on our website to assist. These pages have the word ‘best’ in the url, here is an example for a ‘best exercise bikes’ page: https://cardioonline.com.au/pages/best-exercise-bikes-in-australia. Feel free to recommend these pages to customers that are unsure, you can also use the info on these pages to help provide recommendations. if the site doesn't have a page like this, then ignore this and recommend a product page.
- When providing recommendations, it is very important to first understand the customers needs, space requirements, and budget. Ask questions like: what maximum weight capacity do you need, do you want incline, do you want connectivity to fitness apps, do you just want to walk or do you want to be able to jog or sprint, what is your maximum budget. You can then use their responses to compare against product specifications and metafields to filter to suitable products. 
- You are not restricted to recommending alternative products from the same brand, you can recommend products from other brands as long as they meet the specific needs of the customer. The most important thing is to address the needs of the customer. If you are unsure which products to recommend, ask the customer more questions. Your goal is to match them to the perfect product for their needs.
- When a customer requests alternative recommendations, you should be careful not to recommend products that are far outside their budget, too large for their space or overkill for their needs.
- You can also use info from customer reviews on the product page should you wish. Customers are more likely to purchase products that others with similar needs have recommended.

Tone and Style:
- Keep things friendly, professional, and easy to understand.
- Always be helpful and provide clear, simple answers.

Response Format:
  Always respond in string markdown format as follows -- dont add anything else to response:
  "response"

Example Initial String Markdown Response:
  Hey! Did you know the [Bushveld Tundra Roof Top Tent](https://www.example.com/product/bushveld-tundra-roof-top-tent) is perfect for your next adventure? It’s got plenty of space, top-notch durability, and it’s super easy to set up—perfect for a stress-free trip!
  
- other than links, dont add any other formatting to the response.

Example Response for Product Comparison, If the customer asks for a comparison between the Bushveld Tundra Roof Top Tent and another product:
Sure! The [Bushveld Tundra Roof Top Tent](https://www.example.com/product/bushveld-tundra-roof-top-tent) is amazing for families—super spacious, durable, and easy to set up. But if you’re looking for something more rugged, the [Overland Explorer Roof Top Tent](https://www.example.com/product/overland-explorer-roof-top-tent) is a great choice. It's built for off-road adventures and is smaller, but perfect if you’re going for something compact. Both are awesome, just depends on what fits your needs better!
  `;
  function dw() {}
  function fw() {}
  function vd(t, e) {
    const n = {};
    return (t[t.length - 1] === "" ? [...t, ""] : t)
      .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
      .trim();
  }
  const xd = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    kd = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    Sd = {};
  function xl(t, e) {
    return (Sd.jsx ? kd : xd).test(t);
  }
  const Ed = /[ \t\n\f\r]/g;
  function Cd(t) {
    return typeof t == "object"
      ? t.type === "text"
        ? kl(t.value)
        : !1
      : kl(t);
  }
  function kl(t) {
    return t.replace(Ed, "") === "";
  }
  class In {
    constructor(e, n, r) {
      (this.normal = n), (this.property = e), r && (this.space = r);
    }
  }
  (In.prototype.normal = {}),
    (In.prototype.property = {}),
    (In.prototype.space = void 0);
  function Sl(t, e) {
    const n = {},
      r = {};
    for (const i of t) Object.assign(n, i.property), Object.assign(r, i.normal);
    return new In(n, r, e);
  }
  function ps(t) {
    return t.toLowerCase();
  }
  class be {
    constructor(e, n) {
      (this.attribute = n), (this.property = e);
    }
  }
  (be.prototype.attribute = ""),
    (be.prototype.booleanish = !1),
    (be.prototype.boolean = !1),
    (be.prototype.commaOrSpaceSeparated = !1),
    (be.prototype.commaSeparated = !1),
    (be.prototype.defined = !1),
    (be.prototype.mustUseProperty = !1),
    (be.prototype.number = !1),
    (be.prototype.overloadedBoolean = !1),
    (be.prototype.property = ""),
    (be.prototype.spaceSeparated = !1),
    (be.prototype.space = void 0);
  let Ad = 0;
  const q = kt(),
    ie = kt(),
    ms = kt(),
    E = kt(),
    Y = kt(),
    Ht = kt(),
    Ae = kt();
  function kt() {
    return 2 ** ++Ad;
  }
  const gs = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          boolean: q,
          booleanish: ie,
          commaOrSpaceSeparated: Ae,
          commaSeparated: Ht,
          number: E,
          overloadedBoolean: ms,
          spaceSeparated: Y,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    _s = Object.keys(gs);
  class ys extends be {
    constructor(e, n, r, i) {
      let s = -1;
      if ((super(e, n), El(this, "space", i), typeof r == "number"))
        for (; ++s < _s.length; ) {
          const a = _s[s];
          El(this, _s[s], (r & gs[a]) === gs[a]);
        }
    }
  }
  ys.prototype.defined = !0;
  function El(t, e, n) {
    n && (t[e] = n);
  }
  function Vt(t) {
    const e = {},
      n = {};
    for (const [r, i] of Object.entries(t.properties)) {
      const s = new ys(r, t.transform(t.attributes || {}, r), i, t.space);
      t.mustUseProperty &&
        t.mustUseProperty.includes(r) &&
        (s.mustUseProperty = !0),
        (e[r] = s),
        (n[ps(r)] = r),
        (n[ps(s.attribute)] = r);
    }
    return new In(e, n, t.space);
  }
  const Cl = Vt({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: ie,
      ariaAutoComplete: null,
      ariaBusy: ie,
      ariaChecked: ie,
      ariaColCount: E,
      ariaColIndex: E,
      ariaColSpan: E,
      ariaControls: Y,
      ariaCurrent: null,
      ariaDescribedBy: Y,
      ariaDetails: null,
      ariaDisabled: ie,
      ariaDropEffect: Y,
      ariaErrorMessage: null,
      ariaExpanded: ie,
      ariaFlowTo: Y,
      ariaGrabbed: ie,
      ariaHasPopup: null,
      ariaHidden: ie,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Y,
      ariaLevel: E,
      ariaLive: null,
      ariaModal: ie,
      ariaMultiLine: ie,
      ariaMultiSelectable: ie,
      ariaOrientation: null,
      ariaOwns: Y,
      ariaPlaceholder: null,
      ariaPosInSet: E,
      ariaPressed: ie,
      ariaReadOnly: ie,
      ariaRelevant: null,
      ariaRequired: ie,
      ariaRoleDescription: Y,
      ariaRowCount: E,
      ariaRowIndex: E,
      ariaRowSpan: E,
      ariaSelected: ie,
      ariaSetSize: E,
      ariaSort: null,
      ariaValueMax: E,
      ariaValueMin: E,
      ariaValueNow: E,
      ariaValueText: null,
      role: null,
    },
    transform(t, e) {
      return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
    },
  });
  function Al(t, e) {
    return e in t ? t[e] : e;
  }
  function Pl(t, e) {
    return Al(t, e.toLowerCase());
  }
  const Pd = Vt({
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv",
      },
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        abbr: null,
        accept: Ht,
        acceptCharset: Y,
        accessKey: Y,
        action: null,
        allow: null,
        allowFullScreen: q,
        allowPaymentRequest: q,
        allowUserMedia: q,
        alt: null,
        as: null,
        async: q,
        autoCapitalize: null,
        autoComplete: Y,
        autoFocus: q,
        autoPlay: q,
        blocking: Y,
        capture: null,
        charSet: null,
        checked: q,
        cite: null,
        className: Y,
        cols: E,
        colSpan: null,
        content: null,
        contentEditable: ie,
        controls: q,
        controlsList: Y,
        coords: E | Ht,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: q,
        defer: q,
        dir: null,
        dirName: null,
        disabled: q,
        download: ms,
        draggable: ie,
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: q,
        formTarget: null,
        headers: Y,
        height: E,
        hidden: ms,
        high: E,
        href: null,
        hrefLang: null,
        htmlFor: Y,
        httpEquiv: Y,
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: q,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: q,
        itemId: null,
        itemProp: Y,
        itemRef: Y,
        itemScope: q,
        itemType: Y,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: q,
        low: E,
        manifest: null,
        max: null,
        maxLength: E,
        media: null,
        method: null,
        min: null,
        minLength: E,
        multiple: q,
        muted: q,
        name: null,
        nonce: null,
        noModule: q,
        noValidate: q,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: q,
        optimum: E,
        pattern: null,
        ping: Y,
        placeholder: null,
        playsInline: q,
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: q,
        referrerPolicy: null,
        rel: Y,
        required: q,
        reversed: q,
        rows: E,
        rowSpan: E,
        sandbox: Y,
        scope: null,
        scoped: q,
        seamless: q,
        selected: q,
        shadowRootClonable: q,
        shadowRootDelegatesFocus: q,
        shadowRootMode: null,
        shape: null,
        size: E,
        sizes: null,
        slot: null,
        span: E,
        spellCheck: ie,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: E,
        step: null,
        style: null,
        tabIndex: E,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: q,
        useMap: null,
        value: ie,
        width: E,
        wrap: null,
        writingSuggestions: null,
        align: null,
        aLink: null,
        archive: Y,
        axis: null,
        background: null,
        bgColor: null,
        border: E,
        borderColor: null,
        bottomMargin: E,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: q,
        declare: q,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: E,
        leftMargin: E,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: E,
        marginWidth: E,
        noResize: q,
        noHref: q,
        noShade: q,
        noWrap: q,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: E,
        rules: null,
        scheme: null,
        scrolling: ie,
        standby: null,
        summary: null,
        text: null,
        topMargin: E,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: E,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: q,
        disableRemotePlayback: q,
        prefix: null,
        property: null,
        results: E,
        security: null,
        unselectable: null,
      },
      space: "html",
      transform: Pl,
    }),
    Td = Vt({
      attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        transformOrigin: "transform-origin",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin",
      },
      properties: {
        about: Ae,
        accentHeight: E,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: E,
        amplitude: E,
        arabicForm: null,
        ascent: E,
        attributeName: null,
        attributeType: null,
        azimuth: E,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: E,
        by: null,
        calcMode: null,
        capHeight: E,
        className: Y,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: E,
        diffuseConstant: E,
        direction: null,
        display: null,
        dur: null,
        divisor: E,
        dominantBaseline: null,
        download: q,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: E,
        enableBackground: null,
        end: null,
        event: null,
        exponent: E,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: E,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: Ht,
        g2: Ht,
        glyphName: Ht,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: E,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: E,
        horizOriginX: E,
        horizOriginY: E,
        id: null,
        ideographic: E,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: E,
        k: E,
        k1: E,
        k2: E,
        k3: E,
        k4: E,
        kernelMatrix: Ae,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: E,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: E,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: E,
        overlineThickness: E,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: E,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: Y,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: E,
        pointsAtY: E,
        pointsAtZ: E,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: Ae,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: Ae,
        rev: Ae,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: Ae,
        requiredFeatures: Ae,
        requiredFonts: Ae,
        requiredFormats: Ae,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: E,
        specularExponent: E,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: E,
        strikethroughThickness: E,
        string: null,
        stroke: null,
        strokeDashArray: Ae,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: E,
        strokeOpacity: E,
        strokeWidth: null,
        style: null,
        surfaceScale: E,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: Ae,
        tabIndex: E,
        tableValues: null,
        target: null,
        targetX: E,
        targetY: E,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: Ae,
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: E,
        underlineThickness: E,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: E,
        values: null,
        vAlphabetic: E,
        vMathematical: E,
        vectorEffect: null,
        vHanging: E,
        vIdeographic: E,
        version: null,
        vertAdvY: E,
        vertOriginX: E,
        vertOriginY: E,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: E,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null,
      },
      space: "svg",
      transform: Al,
    }),
    Tl = Vt({
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null,
      },
      space: "xlink",
      transform(t, e) {
        return "xlink:" + e.slice(5).toLowerCase();
      },
    }),
    Il = Vt({
      attributes: { xmlnsxlink: "xmlns:xlink" },
      properties: { xmlnsXLink: null, xmlns: null },
      space: "xmlns",
      transform: Pl,
    }),
    Rl = Vt({
      properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
      space: "xml",
      transform(t, e) {
        return "xml:" + e.slice(3).toLowerCase();
      },
    }),
    Id = {
      classId: "classID",
      dataType: "datatype",
      itemId: "itemID",
      strokeDashArray: "strokeDasharray",
      strokeDashOffset: "strokeDashoffset",
      strokeLineCap: "strokeLinecap",
      strokeLineJoin: "strokeLinejoin",
      strokeMiterLimit: "strokeMiterlimit",
      typeOf: "typeof",
      xLinkActuate: "xlinkActuate",
      xLinkArcRole: "xlinkArcrole",
      xLinkHref: "xlinkHref",
      xLinkRole: "xlinkRole",
      xLinkShow: "xlinkShow",
      xLinkTitle: "xlinkTitle",
      xLinkType: "xlinkType",
      xmlnsXLink: "xmlnsXlink",
    },
    Rd = /[A-Z]/g,
    Ol = /-[a-z]/g,
    Od = /^data[-\w.:]+$/i;
  function $d(t, e) {
    const n = ps(e);
    let r = e,
      i = be;
    if (n in t.normal) return t.property[t.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && Od.test(e)) {
      if (e.charAt(4) === "-") {
        const s = e.slice(5).replace(Ol, jd);
        r = "data" + s.charAt(0).toUpperCase() + s.slice(1);
      } else {
        const s = e.slice(4);
        if (!Ol.test(s)) {
          let a = s.replace(Rd, Ld);
          a.charAt(0) !== "-" && (a = "-" + a), (e = "data" + a);
        }
      }
      i = ys;
    }
    return new i(r, e);
  }
  function Ld(t) {
    return "-" + t.toLowerCase();
  }
  function jd(t) {
    return t.charAt(1).toUpperCase();
  }
  const Nd = Sl([Cl, Pd, Tl, Il, Rl], "html"),
    ws = Sl([Cl, Td, Tl, Il, Rl], "svg");
  function Dd(t) {
    return t.join(" ").trim();
  }
  function jr(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function Fd(t) {
    if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
    var e = t.default;
    if (typeof e == "function") {
      var n = function r() {
        return this instanceof r
          ? Reflect.construct(e, arguments, this.constructor)
          : e.apply(this, arguments);
      };
      n.prototype = e.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(t).forEach(function (r) {
        var i = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(
          n,
          r,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }
        );
      }),
      n
    );
  }
  var Wt = {},
    bs,
    $l;
  function Md() {
    if ($l) return bs;
    $l = 1;
    var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      e = /\n/g,
      n = /^\s*/,
      r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      i = /^:\s*/,
      s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      a = /^[;\s]*/,
      o = /^\s+|\s+$/g,
      l = `
`,
      u = "/",
      c = "*",
      h = "",
      f = "comment",
      d = "declaration";
    bs = function (_, y) {
      if (typeof _ != "string")
        throw new TypeError("First argument must be a string");
      if (!_) return [];
      y = y || {};
      var b = 1,
        w = 1;
      function x(L) {
        var R = L.match(e);
        R && (b += R.length);
        var D = L.lastIndexOf(l);
        w = ~D ? L.length - D : w + L.length;
      }
      function S() {
        var L = { line: b, column: w };
        return function (R) {
          return (R.position = new P(L)), V(), R;
        };
      }
      function P(L) {
        (this.start = L),
          (this.end = { line: b, column: w }),
          (this.source = y.source);
      }
      P.prototype.content = _;
      function v(L) {
        var R = new Error(y.source + ":" + b + ":" + w + ": " + L);
        if (
          ((R.reason = L),
          (R.filename = y.source),
          (R.line = b),
          (R.column = w),
          (R.source = _),
          !y.silent)
        )
          throw R;
      }
      function T(L) {
        var R = L.exec(_);
        if (R) {
          var D = R[0];
          return x(D), (_ = _.slice(D.length)), R;
        }
      }
      function V() {
        T(n);
      }
      function O(L) {
        var R;
        for (L = L || []; (R = j()); ) R !== !1 && L.push(R);
        return L;
      }
      function j() {
        var L = S();
        if (!(u != _.charAt(0) || c != _.charAt(1))) {
          for (
            var R = 2;
            h != _.charAt(R) && (c != _.charAt(R) || u != _.charAt(R + 1));

          )
            ++R;
          if (((R += 2), h === _.charAt(R - 1)))
            return v("End of comment missing");
          var D = _.slice(2, R - 2);
          return (
            (w += 2),
            x(D),
            (_ = _.slice(R)),
            (w += 2),
            L({ type: f, comment: D })
          );
        }
      }
      function C() {
        var L = S(),
          R = T(r);
        if (R) {
          if ((j(), !T(i))) return v("property missing ':'");
          var D = T(s),
            he = L({
              type: d,
              property: g(R[0].replace(t, h)),
              value: D ? g(D[0].replace(t, h)) : h,
            });
          return T(a), he;
        }
      }
      function I() {
        var L = [];
        O(L);
        for (var R; (R = C()); ) R !== !1 && (L.push(R), O(L));
        return L;
      }
      return V(), I();
    };
    function g(_) {
      return _ ? _.replace(o, h) : h;
    }
    return bs;
  }
  var Ll;
  function Bd() {
    if (Ll) return Wt;
    Ll = 1;
    var t =
      (Wt && Wt.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
    Object.defineProperty(Wt, "__esModule", { value: !0 }), (Wt.default = n);
    var e = t(Md());
    function n(r, i) {
      var s = null;
      if (!r || typeof r != "string") return s;
      var a = (0, e.default)(r),
        o = typeof i == "function";
      return (
        a.forEach(function (l) {
          if (l.type === "declaration") {
            var u = l.property,
              c = l.value;
            o ? i(u, c, l) : c && ((s = s || {}), (s[u] = c));
          }
        }),
        s
      );
    }
    return Wt;
  }
  var Rn = {},
    jl;
  function Ud() {
    if (jl) return Rn;
    (jl = 1),
      Object.defineProperty(Rn, "__esModule", { value: !0 }),
      (Rn.camelCase = void 0);
    var t = /^--[a-zA-Z0-9_-]+$/,
      e = /-([a-z])/g,
      n = /^[^-]+$/,
      r = /^-(webkit|moz|ms|o|khtml)-/,
      i = /^-(ms)-/,
      s = function (u) {
        return !u || n.test(u) || t.test(u);
      },
      a = function (u, c) {
        return c.toUpperCase();
      },
      o = function (u, c) {
        return "".concat(c, "-");
      },
      l = function (u, c) {
        return (
          c === void 0 && (c = {}),
          s(u)
            ? u
            : ((u = u.toLowerCase()),
              c.reactCompat ? (u = u.replace(i, o)) : (u = u.replace(r, o)),
              u.replace(e, a))
        );
      };
    return (Rn.camelCase = l), Rn;
  }
  var On, Nl;
  function zd() {
    if (Nl) return On;
    Nl = 1;
    var t =
        (On && On.__importDefault) ||
        function (i) {
          return i && i.__esModule ? i : { default: i };
        },
      e = t(Bd()),
      n = Ud();
    function r(i, s) {
      var a = {};
      return (
        !i ||
          typeof i != "string" ||
          (0, e.default)(i, function (o, l) {
            o && l && (a[(0, n.camelCase)(o, s)] = l);
          }),
        a
      );
    }
    return (r.default = r), (On = r), On;
  }
  var qd = zd();
  const Hd = jr(qd),
    Dl = Fl("end"),
    vs = Fl("start");
  function Fl(t) {
    return e;
    function e(n) {
      const r = (n && n.position && n.position[t]) || {};
      if (
        typeof r.line == "number" &&
        r.line > 0 &&
        typeof r.column == "number" &&
        r.column > 0
      )
        return {
          line: r.line,
          column: r.column,
          offset:
            typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
        };
    }
  }
  function Vd(t) {
    const e = vs(t),
      n = Dl(t);
    if (e && n) return { start: e, end: n };
  }
  function $n(t) {
    return !t || typeof t != "object"
      ? ""
      : "position" in t || "type" in t
      ? Ml(t.position)
      : "start" in t || "end" in t
      ? Ml(t)
      : "line" in t || "column" in t
      ? xs(t)
      : "";
  }
  function xs(t) {
    return Bl(t && t.line) + ":" + Bl(t && t.column);
  }
  function Ml(t) {
    return xs(t && t.start) + "-" + xs(t && t.end);
  }
  function Bl(t) {
    return t && typeof t == "number" ? t : 1;
  }
  class ye extends Error {
    constructor(e, n, r) {
      super(), typeof n == "string" && ((r = n), (n = void 0));
      let i = "",
        s = {},
        a = !1;
      if (
        (n &&
          ("line" in n && "column" in n
            ? (s = { place: n })
            : "start" in n && "end" in n
            ? (s = { place: n })
            : "type" in n
            ? (s = { ancestors: [n], place: n.position })
            : (s = { ...n })),
        typeof e == "string"
          ? (i = e)
          : !s.cause && e && ((a = !0), (i = e.message), (s.cause = e)),
        !s.ruleId && !s.source && typeof r == "string")
      ) {
        const l = r.indexOf(":");
        l === -1
          ? (s.ruleId = r)
          : ((s.source = r.slice(0, l)), (s.ruleId = r.slice(l + 1)));
      }
      if (!s.place && s.ancestors && s.ancestors) {
        const l = s.ancestors[s.ancestors.length - 1];
        l && (s.place = l.position);
      }
      const o = s.place && "start" in s.place ? s.place.start : s.place;
      (this.ancestors = s.ancestors || void 0),
        (this.cause = s.cause || void 0),
        (this.column = o ? o.column : void 0),
        (this.fatal = void 0),
        this.file,
        (this.message = i),
        (this.line = o ? o.line : void 0),
        (this.name = $n(s.place) || "1:1"),
        (this.place = s.place || void 0),
        (this.reason = this.message),
        (this.ruleId = s.ruleId || void 0),
        (this.source = s.source || void 0),
        (this.stack =
          a && s.cause && typeof s.cause.stack == "string"
            ? s.cause.stack
            : ""),
        this.actual,
        this.expected,
        this.note,
        this.url;
    }
  }
  (ye.prototype.file = ""),
    (ye.prototype.name = ""),
    (ye.prototype.reason = ""),
    (ye.prototype.message = ""),
    (ye.prototype.stack = ""),
    (ye.prototype.column = void 0),
    (ye.prototype.line = void 0),
    (ye.prototype.ancestors = void 0),
    (ye.prototype.cause = void 0),
    (ye.prototype.fatal = void 0),
    (ye.prototype.place = void 0),
    (ye.prototype.ruleId = void 0),
    (ye.prototype.source = void 0);
  const ks = {}.hasOwnProperty,
    Wd = new Map(),
    Jd = /[A-Z]/g,
    Kd = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    Gd = new Set(["td", "th"]),
    Ul = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function Xd(t, e) {
    if (!e || e.Fragment === void 0)
      throw new TypeError("Expected `Fragment` in options");
    const n = e.filePath || void 0;
    let r;
    if (e.development) {
      if (typeof e.jsxDEV != "function")
        throw new TypeError(
          "Expected `jsxDEV` in options when `development: true`"
        );
      r = sf(n, e.jsxDEV);
    } else {
      if (typeof e.jsx != "function")
        throw new TypeError("Expected `jsx` in production options");
      if (typeof e.jsxs != "function")
        throw new TypeError("Expected `jsxs` in production options");
      r = rf(n, e.jsx, e.jsxs);
    }
    const i = {
        Fragment: e.Fragment,
        ancestors: [],
        components: e.components || {},
        create: r,
        elementAttributeNameCase: e.elementAttributeNameCase || "react",
        evaluater: e.createEvaluater ? e.createEvaluater() : void 0,
        filePath: n,
        ignoreInvalidStyle: e.ignoreInvalidStyle || !1,
        passKeys: e.passKeys !== !1,
        passNode: e.passNode || !1,
        schema: e.space === "svg" ? ws : Nd,
        stylePropertyNameCase: e.stylePropertyNameCase || "dom",
        tableCellAlignToStyle: e.tableCellAlignToStyle !== !1,
      },
      s = zl(i, t, void 0);
    return s && typeof s != "string"
      ? s
      : i.create(t, i.Fragment, { children: s || void 0 }, void 0);
  }
  function zl(t, e, n) {
    if (e.type === "element") return Qd(t, e, n);
    if (e.type === "mdxFlowExpression" || e.type === "mdxTextExpression")
      return Yd(t, e);
    if (e.type === "mdxJsxFlowElement" || e.type === "mdxJsxTextElement")
      return ef(t, e, n);
    if (e.type === "mdxjsEsm") return Zd(t, e);
    if (e.type === "root") return tf(t, e, n);
    if (e.type === "text") return nf(t, e);
  }
  function Qd(t, e, n) {
    const r = t.schema;
    let i = r;
    e.tagName.toLowerCase() === "svg" &&
      r.space === "html" &&
      ((i = ws), (t.schema = i)),
      t.ancestors.push(e);
    const s = Hl(t, e.tagName, !1),
      a = af(t, e);
    let o = Es(t, e);
    return (
      Kd.has(e.tagName) &&
        (o = o.filter(function (l) {
          return typeof l == "string" ? !Cd(l) : !0;
        })),
      ql(t, a, s, e),
      Ss(a, o),
      t.ancestors.pop(),
      (t.schema = r),
      t.create(e, s, a, n)
    );
  }
  function Yd(t, e) {
    if (e.data && e.data.estree && t.evaluater) {
      const r = e.data.estree.body[0];
      return r.type, t.evaluater.evaluateExpression(r.expression);
    }
    Ln(t, e.position);
  }
  function Zd(t, e) {
    if (e.data && e.data.estree && t.evaluater)
      return t.evaluater.evaluateProgram(e.data.estree);
    Ln(t, e.position);
  }
  function ef(t, e, n) {
    const r = t.schema;
    let i = r;
    e.name === "svg" && r.space === "html" && ((i = ws), (t.schema = i)),
      t.ancestors.push(e);
    const s = e.name === null ? t.Fragment : Hl(t, e.name, !0),
      a = of(t, e),
      o = Es(t, e);
    return (
      ql(t, a, s, e),
      Ss(a, o),
      t.ancestors.pop(),
      (t.schema = r),
      t.create(e, s, a, n)
    );
  }
  function tf(t, e, n) {
    const r = {};
    return Ss(r, Es(t, e)), t.create(e, t.Fragment, r, n);
  }
  function nf(t, e) {
    return e.value;
  }
  function ql(t, e, n, r) {
    typeof n != "string" && n !== t.Fragment && t.passNode && (e.node = r);
  }
  function Ss(t, e) {
    if (e.length > 0) {
      const n = e.length > 1 ? e : e[0];
      n && (t.children = n);
    }
  }
  function rf(t, e, n) {
    return r;
    function r(i, s, a, o) {
      const u = Array.isArray(a.children) ? n : e;
      return o ? u(s, a, o) : u(s, a);
    }
  }
  function sf(t, e) {
    return n;
    function n(r, i, s, a) {
      const o = Array.isArray(s.children),
        l = vs(r);
      return e(
        i,
        s,
        a,
        o,
        {
          columnNumber: l ? l.column - 1 : void 0,
          fileName: t,
          lineNumber: l ? l.line : void 0,
        },
        void 0
      );
    }
  }
  function af(t, e) {
    const n = {};
    let r, i;
    for (i in e.properties)
      if (i !== "children" && ks.call(e.properties, i)) {
        const s = lf(t, i, e.properties[i]);
        if (s) {
          const [a, o] = s;
          t.tableCellAlignToStyle &&
          a === "align" &&
          typeof o == "string" &&
          Gd.has(e.tagName)
            ? (r = o)
            : (n[a] = o);
        }
      }
    if (r) {
      const s = n.style || (n.style = {});
      s[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
    }
    return n;
  }
  function of(t, e) {
    const n = {};
    for (const r of e.attributes)
      if (r.type === "mdxJsxExpressionAttribute")
        if (r.data && r.data.estree && t.evaluater) {
          const s = r.data.estree.body[0];
          s.type;
          const a = s.expression;
          a.type;
          const o = a.properties[0];
          o.type, Object.assign(n, t.evaluater.evaluateExpression(o.argument));
        } else Ln(t, e.position);
      else {
        const i = r.name;
        let s;
        if (r.value && typeof r.value == "object")
          if (r.value.data && r.value.data.estree && t.evaluater) {
            const o = r.value.data.estree.body[0];
            o.type, (s = t.evaluater.evaluateExpression(o.expression));
          } else Ln(t, e.position);
        else s = r.value === null ? !0 : r.value;
        n[i] = s;
      }
    return n;
  }
  function Es(t, e) {
    const n = [];
    let r = -1;
    const i = t.passKeys ? new Map() : Wd;
    for (; ++r < e.children.length; ) {
      const s = e.children[r];
      let a;
      if (t.passKeys) {
        const l =
          s.type === "element"
            ? s.tagName
            : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement"
            ? s.name
            : void 0;
        if (l) {
          const u = i.get(l) || 0;
          (a = l + "-" + u), i.set(l, u + 1);
        }
      }
      const o = zl(t, s, a);
      o !== void 0 && n.push(o);
    }
    return n;
  }
  function lf(t, e, n) {
    const r = $d(t.schema, e);
    if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
      if (
        (Array.isArray(n) && (n = r.commaSeparated ? vd(n) : Dd(n)),
        r.property === "style")
      ) {
        let i = typeof n == "object" ? n : uf(t, String(n));
        return t.stylePropertyNameCase === "css" && (i = cf(i)), ["style", i];
      }
      return [
        t.elementAttributeNameCase === "react" && r.space
          ? Id[r.property] || r.property
          : r.attribute,
        n,
      ];
    }
  }
  function uf(t, e) {
    try {
      return Hd(e, { reactCompat: !0 });
    } catch (n) {
      if (t.ignoreInvalidStyle) return {};
      const r = n,
        i = new ye("Cannot parse `style` attribute", {
          ancestors: t.ancestors,
          cause: r,
          ruleId: "style",
          source: "hast-util-to-jsx-runtime",
        });
      throw (
        ((i.file = t.filePath || void 0),
        (i.url = Ul + "#cannot-parse-style-attribute"),
        i)
      );
    }
  }
  function Hl(t, e, n) {
    let r;
    if (!n) r = { type: "Literal", value: e };
    else if (e.includes(".")) {
      const i = e.split(".");
      let s = -1,
        a;
      for (; ++s < i.length; ) {
        const o = xl(i[s])
          ? { type: "Identifier", name: i[s] }
          : { type: "Literal", value: i[s] };
        a = a
          ? {
              type: "MemberExpression",
              object: a,
              property: o,
              computed: !!(s && o.type === "Literal"),
              optional: !1,
            }
          : o;
      }
      r = a;
    } else
      r =
        xl(e) && !/^[a-z]/.test(e)
          ? { type: "Identifier", name: e }
          : { type: "Literal", value: e };
    if (r.type === "Literal") {
      const i = r.value;
      return ks.call(t.components, i) ? t.components[i] : i;
    }
    if (t.evaluater) return t.evaluater.evaluateExpression(r);
    Ln(t);
  }
  function Ln(t, e) {
    const n = new ye("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: t.ancestors,
      place: e,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime",
    });
    throw (
      ((n.file = t.filePath || void 0),
      (n.url = Ul + "#cannot-handle-mdx-estrees-without-createevaluater"),
      n)
    );
  }
  function cf(t) {
    const e = {};
    let n;
    for (n in t) ks.call(t, n) && (e[hf(n)] = t[n]);
    return e;
  }
  function hf(t) {
    let e = t.replace(Jd, df);
    return e.slice(0, 3) === "ms-" && (e = "-" + e), e;
  }
  function df(t) {
    return "-" + t.toLowerCase();
  }
  const Cs = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  };
  var jn,
    re,
    As,
    Vl,
    Nr = 0,
    Wl = [],
    se = z,
    Jl = se.__b,
    Kl = se.__r,
    Gl = se.diffed,
    Xl = se.__c,
    Ql = se.unmount,
    Yl = se.__;
  function Ps(t, e) {
    se.__h && se.__h(re, t, Nr || e), (Nr = 0);
    var n = re.__H || (re.__H = { __: [], __h: [] });
    return t >= n.__.length && n.__.push({}), n.__[t];
  }
  function Nn(t) {
    return (Nr = 1), ff(nu, t);
  }
  function ff(t, e, n) {
    var r = Ps(jn++, 2);
    if (
      ((r.t = t),
      !r.__c &&
        ((r.__ = [
          n ? n(e) : nu(void 0, e),
          function (o) {
            var l = r.__N ? r.__N[0] : r.__[0],
              u = r.t(l, o);
            l !== u && ((r.__N = [u, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = re),
        !re.__f))
    ) {
      var i = function (o, l, u) {
        if (!r.__c.__H) return !0;
        var c = r.__c.__H.__.filter(function (f) {
          return !!f.__c;
        });
        if (
          c.every(function (f) {
            return !f.__N;
          })
        )
          return !s || s.call(this, o, l, u);
        var h = r.__c.props !== o;
        return (
          c.forEach(function (f) {
            if (f.__N) {
              var d = f.__[0];
              (f.__ = f.__N), (f.__N = void 0), d !== f.__[0] && (h = !0);
            }
          }),
          (s && s.call(this, o, l, u)) || h
        );
      };
      re.__f = !0;
      var s = re.shouldComponentUpdate,
        a = re.componentWillUpdate;
      (re.componentWillUpdate = function (o, l, u) {
        if (this.__e) {
          var c = s;
          (s = void 0), i(o, l, u), (s = c);
        }
        a && a.call(this, o, l, u);
      }),
        (re.shouldComponentUpdate = i);
    }
    return r.__N || r.__;
  }
  function Zl(t, e) {
    var n = Ps(jn++, 3);
    !se.__s && tu(n.__H, e) && ((n.__ = t), (n.u = e), re.__H.__h.push(n));
  }
  function pf(t) {
    return (
      (Nr = 5),
      mf(function () {
        return { current: t };
      }, [])
    );
  }
  function mf(t, e) {
    var n = Ps(jn++, 7);
    return tu(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
  }
  function gf() {
    for (var t; (t = Wl.shift()); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(Dr), t.__H.__h.forEach(Ts), (t.__H.__h = []);
        } catch (e) {
          (t.__H.__h = []), se.__e(e, t.__v);
        }
  }
  (se.__b = function (t) {
    (re = null), Jl && Jl(t);
  }),
    (se.__ = function (t, e) {
      t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Yl && Yl(t, e);
    }),
    (se.__r = function (t) {
      Kl && Kl(t), (jn = 0);
      var e = (re = t.__c).__H;
      e &&
        (As === re
          ? ((e.__h = []),
            (re.__h = []),
            e.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
            }))
          : (e.__h.forEach(Dr), e.__h.forEach(Ts), (e.__h = []), (jn = 0))),
        (As = re);
    }),
    (se.diffed = function (t) {
      Gl && Gl(t);
      var e = t.__c;
      e &&
        e.__H &&
        (e.__H.__h.length &&
          ((Wl.push(e) !== 1 && Vl === se.requestAnimationFrame) ||
            ((Vl = se.requestAnimationFrame) || _f)(gf)),
        e.__H.__.forEach(function (n) {
          n.u && (n.__H = n.u), (n.u = void 0);
        })),
        (As = re = null);
    }),
    (se.__c = function (t, e) {
      e.some(function (n) {
        try {
          n.__h.forEach(Dr),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || Ts(r);
            }));
        } catch (r) {
          e.some(function (i) {
            i.__h && (i.__h = []);
          }),
            (e = []),
            se.__e(r, n.__v);
        }
      }),
        Xl && Xl(t, e);
    }),
    (se.unmount = function (t) {
      Ql && Ql(t);
      var e,
        n = t.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            Dr(r);
          } catch (i) {
            e = i;
          }
        }),
        (n.__H = void 0),
        e && se.__e(e, n.__v));
    });
  var eu = typeof requestAnimationFrame == "function";
  function _f(t) {
    var e,
      n = function () {
        clearTimeout(r), eu && cancelAnimationFrame(e), setTimeout(t);
      },
      r = setTimeout(n, 100);
    eu && (e = requestAnimationFrame(n));
  }
  function Dr(t) {
    var e = re,
      n = t.__c;
    typeof n == "function" && ((t.__c = void 0), n()), (re = e);
  }
  function Ts(t) {
    var e = re;
    (t.__c = t.__()), (re = e);
  }
  function tu(t, e) {
    return (
      !t ||
      t.length !== e.length ||
      e.some(function (n, r) {
        return n !== t[r];
      })
    );
  }
  function nu(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function yf(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function ru(t, e) {
    for (var n in t) if (n !== "__source" && !(n in e)) return !0;
    for (var r in e) if (r !== "__source" && t[r] !== e[r]) return !0;
    return !1;
  }
  function iu(t, e) {
    (this.props = t), (this.context = e);
  }
  ((iu.prototype = new Xe()).isPureReactComponent = !0),
    (iu.prototype.shouldComponentUpdate = function (t, e) {
      return ru(this.props, t) || ru(this.state, e);
    });
  var su = z.__b;
  z.__b = function (t) {
    t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
      su && su(t);
  };
  var wf = z.__e;
  z.__e = function (t, e, n, r) {
    if (t.then) {
      for (var i, s = e; (s = s.__); )
        if ((i = s.__c) && i.__c)
          return (
            e.__e == null && ((e.__e = n.__e), (e.__k = n.__k)), i.__c(t, e)
          );
    }
    wf(t, e, n, r);
  };
  var au = z.unmount;
  function ou(t, e, n) {
    return (
      t &&
        (t.__c &&
          t.__c.__H &&
          (t.__c.__H.__.forEach(function (r) {
            typeof r.__c == "function" && r.__c();
          }),
          (t.__c.__H = null)),
        (t = yf({}, t)).__c != null &&
          (t.__c.__P === n && (t.__c.__P = e),
          (t.__c.__e = !0),
          (t.__c = null)),
        (t.__k =
          t.__k &&
          t.__k.map(function (r) {
            return ou(r, e, n);
          }))),
      t
    );
  }
  function lu(t, e, n) {
    return (
      t &&
        n &&
        ((t.__v = null),
        (t.__k =
          t.__k &&
          t.__k.map(function (r) {
            return lu(r, e, n);
          })),
        t.__c &&
          t.__c.__P === e &&
          (t.__e && n.appendChild(t.__e), (t.__c.__e = !0), (t.__c.__P = n))),
      t
    );
  }
  function Is() {
    (this.__u = 0), (this.o = null), (this.__b = null);
  }
  function uu(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function Fr() {
    (this.i = null), (this.l = null);
  }
  (z.unmount = function (t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), au && au(t);
  }),
    ((Is.prototype = new Xe()).__c = function (t, e) {
      var n = e.__c,
        r = this;
      r.o == null && (r.o = []), r.o.push(n);
      var i = uu(r.__v),
        s = !1,
        a = function () {
          s || ((s = !0), (n.__R = null), i ? i(o) : o());
        };
      n.__R = a;
      var o = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var l = r.state.__a;
            r.__v.__k[0] = lu(l, l.__c.__P, l.__c.__O);
          }
          var u;
          for (r.setState({ __a: (r.__b = null) }); (u = r.o.pop()); )
            u.forceUpdate();
        }
      };
      r.__u++ || 32 & e.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
        t.then(a, a);
    }),
    (Is.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (Is.prototype.render = function (t, e) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = ou(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var i = e.__a && ai(wt, null, t.fallback);
      return i && (i.__u &= -33), [ai(wt, null, e.__a ? null : t.children), i];
    });
  var cu = function (t, e, n) {
    if (
      (++n[1] === n[0] && t.l.delete(e),
      t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
    )
      for (n = t.i; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        t.i = n = n[2];
      }
  };
  ((Fr.prototype = new Xe()).__a = function (t) {
    var e = this,
      n = uu(e.__v),
      r = e.l.get(t);
    return (
      r[0]++,
      function (i) {
        var s = function () {
          e.props.revealOrder ? (r.push(i), cu(e, t, r)) : i();
        };
        n ? n(s) : s();
      }
    );
  }),
    (Fr.prototype.render = function (t) {
      (this.i = null), (this.l = new Map());
      var e = nr(t.children);
      t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
      for (var n = e.length; n--; ) this.l.set(e[n], (this.i = [1, 0, this.i]));
      return t.children;
    }),
    (Fr.prototype.componentDidUpdate = Fr.prototype.componentDidMount =
      function () {
        var t = this;
        this.l.forEach(function (e, n) {
          cu(t, n, e);
        });
      });
  var bf =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    vf =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    xf = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    kf = /[A-Z0-9]/g,
    Sf = typeof document < "u",
    Ef = function (t) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(t);
    };
  (Xe.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (t) {
      Object.defineProperty(Xe.prototype, t, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    });
  var hu = z.event;
  function Cf() {}
  function Af() {
    return this.cancelBubble;
  }
  function Pf() {
    return this.defaultPrevented;
  }
  z.event = function (t) {
    return (
      hu && (t = hu(t)),
      (t.persist = Cf),
      (t.isPropagationStopped = Af),
      (t.isDefaultPrevented = Pf),
      (t.nativeEvent = t)
    );
  };
  var Tf = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    du = z.vnode;
  z.vnode = function (t) {
    typeof t.type == "string" &&
      (function (e) {
        var n = e.props,
          r = e.type,
          i = {},
          s = r.indexOf("-") === -1;
        for (var a in n) {
          var o = n[a];
          if (
            !(
              (a === "value" && "defaultValue" in n && o == null) ||
              (Sf && a === "children" && r === "noscript") ||
              a === "class" ||
              a === "className"
            )
          ) {
            var l = a.toLowerCase();
            a === "defaultValue" && "value" in n && n.value == null
              ? (a = "value")
              : a === "download" && o === !0
              ? (o = "")
              : l === "translate" && o === "no"
              ? (o = !1)
              : l[0] === "o" && l[1] === "n"
              ? l === "ondoubleclick"
                ? (a = "ondblclick")
                : l !== "onchange" ||
                  (r !== "input" && r !== "textarea") ||
                  Ef(n.type)
                ? l === "onfocus"
                  ? (a = "onfocusin")
                  : l === "onblur"
                  ? (a = "onfocusout")
                  : xf.test(a) && (a = l)
                : (l = a = "oninput")
              : s && vf.test(a)
              ? (a = a.replace(kf, "-$&").toLowerCase())
              : o === null && (o = void 0),
              l === "oninput" && i[(a = l)] && (a = "oninputCapture"),
              (i[a] = o);
          }
        }
        r == "select" &&
          i.multiple &&
          Array.isArray(i.value) &&
          (i.value = nr(n.children).forEach(function (u) {
            u.props.selected = i.value.indexOf(u.props.value) != -1;
          })),
          r == "select" &&
            i.defaultValue != null &&
            (i.value = nr(n.children).forEach(function (u) {
              u.props.selected = i.multiple
                ? i.defaultValue.indexOf(u.props.value) != -1
                : i.defaultValue == u.props.value;
            })),
          n.class && !n.className
            ? ((i.class = n.class), Object.defineProperty(i, "className", Tf))
            : ((n.className && !n.class) || (n.class && n.className)) &&
              (i.class = i.className = n.className),
          (e.props = i);
      })(t),
      (t.$$typeof = bf),
      du && du(t);
  };
  var fu = z.__r;
  z.__r = function (t) {
    fu && fu(t), t.__c;
  };
  var pu = z.diffed;
  z.diffed = function (t) {
    pu && pu(t);
    var e = t.props,
      n = t.__e;
    n != null &&
      t.type === "textarea" &&
      "value" in e &&
      e.value !== n.value &&
      (n.value = e.value == null ? "" : e.value);
  };
  const If = {};
  function Rf(t, e) {
    const n = If,
      r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
      i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return mu(t, r, i);
  }
  function mu(t, e, n) {
    if (Of(t)) {
      if ("value" in t) return t.type === "html" && !n ? "" : t.value;
      if (e && "alt" in t && t.alt) return t.alt;
      if ("children" in t) return gu(t.children, e, n);
    }
    return Array.isArray(t) ? gu(t, e, n) : "";
  }
  function gu(t, e, n) {
    const r = [];
    let i = -1;
    for (; ++i < t.length; ) r[i] = mu(t[i], e, n);
    return r.join("");
  }
  function Of(t) {
    return !!(t && typeof t == "object");
  }
  const _u = document.createElement("i");
  function Rs(t) {
    const e = "&" + t + ";";
    _u.innerHTML = e;
    const n = _u.textContent;
    return (n.charCodeAt(n.length - 1) === 59 && t !== "semi") || n === e
      ? !1
      : n;
  }
  function Ve(t, e, n, r) {
    const i = t.length;
    let s = 0,
      a;
    if (
      (e < 0 ? (e = -e > i ? 0 : i + e) : (e = e > i ? i : e),
      (n = n > 0 ? n : 0),
      r.length < 1e4)
    )
      (a = Array.from(r)), a.unshift(e, n), t.splice(...a);
    else
      for (n && t.splice(e, n); s < r.length; )
        (a = r.slice(s, s + 1e4)),
          a.unshift(e, 0),
          t.splice(...a),
          (s += 1e4),
          (e += 1e4);
  }
  function Oe(t, e) {
    return t.length > 0 ? (Ve(t, t.length, 0, e), t) : e;
  }
  const yu = {}.hasOwnProperty;
  function $f(t) {
    const e = {};
    let n = -1;
    for (; ++n < t.length; ) Lf(e, t[n]);
    return e;
  }
  function Lf(t, e) {
    let n;
    for (n in e) {
      const i = (yu.call(t, n) ? t[n] : void 0) || (t[n] = {}),
        s = e[n];
      let a;
      if (s)
        for (a in s) {
          yu.call(i, a) || (i[a] = []);
          const o = s[a];
          jf(i[a], Array.isArray(o) ? o : o ? [o] : []);
        }
    }
  }
  function jf(t, e) {
    let n = -1;
    const r = [];
    for (; ++n < e.length; ) (e[n].add === "after" ? t : r).push(e[n]);
    Ve(t, 0, 0, r);
  }
  function wu(t, e) {
    const n = Number.parseInt(t, e);
    return n < 9 ||
      n === 11 ||
      (n > 13 && n < 32) ||
      (n > 126 && n < 160) ||
      (n > 55295 && n < 57344) ||
      (n > 64975 && n < 65008) ||
      (n & 65535) === 65535 ||
      (n & 65535) === 65534 ||
      n > 1114111
      ? "�"
      : String.fromCodePoint(n);
  }
  function Jt(t) {
    return t
      .replace(/[\t\n\r ]+/g, " ")
      .replace(/^ | $/g, "")
      .toLowerCase()
      .toUpperCase();
  }
  const We = ct(/[A-Za-z]/),
    Pe = ct(/[\dA-Za-z]/),
    Nf = ct(/[#-'*+\--9=?A-Z^-~]/);
  function Os(t) {
    return t !== null && (t < 32 || t === 127);
  }
  const $s = ct(/\d/),
    Df = ct(/[\dA-Fa-f]/),
    Ff = ct(/[!-/:-@[-`{-~]/);
  function F(t) {
    return t !== null && t < -2;
  }
  function ve(t) {
    return t !== null && (t < 0 || t === 32);
  }
  function K(t) {
    return t === -2 || t === -1 || t === 32;
  }
  const Mf = ct(new RegExp("\\p{P}|\\p{S}", "u")),
    Bf = ct(/\s/);
  function ct(t) {
    return e;
    function e(n) {
      return n !== null && n > -1 && t.test(String.fromCharCode(n));
    }
  }
  function Kt(t) {
    const e = [];
    let n = -1,
      r = 0,
      i = 0;
    for (; ++n < t.length; ) {
      const s = t.charCodeAt(n);
      let a = "";
      if (s === 37 && Pe(t.charCodeAt(n + 1)) && Pe(t.charCodeAt(n + 2))) i = 2;
      else if (s < 128)
        /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) ||
          (a = String.fromCharCode(s));
      else if (s > 55295 && s < 57344) {
        const o = t.charCodeAt(n + 1);
        s < 56320 && o > 56319 && o < 57344
          ? ((a = String.fromCharCode(s, o)), (i = 1))
          : (a = "�");
      } else a = String.fromCharCode(s);
      a &&
        (e.push(t.slice(r, n), encodeURIComponent(a)),
        (r = n + i + 1),
        (a = "")),
        i && ((n += i), (i = 0));
    }
    return e.join("") + t.slice(r);
  }
  function Z(t, e, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let s = 0;
    return a;
    function a(l) {
      return K(l) ? (t.enter(n), o(l)) : e(l);
    }
    function o(l) {
      return K(l) && s++ < i ? (t.consume(l), o) : (t.exit(n), e(l));
    }
  }
  const Uf = { tokenize: zf };
  function zf(t) {
    const e = t.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return e;
    function r(o) {
      if (o === null) {
        t.consume(o);
        return;
      }
      return (
        t.enter("lineEnding"),
        t.consume(o),
        t.exit("lineEnding"),
        Z(t, e, "linePrefix")
      );
    }
    function i(o) {
      return t.enter("paragraph"), s(o);
    }
    function s(o) {
      const l = t.enter("chunkText", { contentType: "text", previous: n });
      return n && (n.next = l), (n = l), a(o);
    }
    function a(o) {
      if (o === null) {
        t.exit("chunkText"), t.exit("paragraph"), t.consume(o);
        return;
      }
      return F(o) ? (t.consume(o), t.exit("chunkText"), s) : (t.consume(o), a);
    }
  }
  const qf = { tokenize: Hf },
    bu = { tokenize: Vf };
  function Hf(t) {
    const e = this,
      n = [];
    let r = 0,
      i,
      s,
      a;
    return o;
    function o(x) {
      if (r < n.length) {
        const S = n[r];
        return (e.containerState = S[1]), t.attempt(S[0].continuation, l, u)(x);
      }
      return u(x);
    }
    function l(x) {
      if ((r++, e.containerState._closeFlow)) {
        (e.containerState._closeFlow = void 0), i && w();
        const S = e.events.length;
        let P = S,
          v;
        for (; P--; )
          if (
            e.events[P][0] === "exit" &&
            e.events[P][1].type === "chunkFlow"
          ) {
            v = e.events[P][1].end;
            break;
          }
        b(r);
        let T = S;
        for (; T < e.events.length; ) (e.events[T][1].end = { ...v }), T++;
        return (
          Ve(e.events, P + 1, 0, e.events.slice(S)), (e.events.length = T), u(x)
        );
      }
      return o(x);
    }
    function u(x) {
      if (r === n.length) {
        if (!i) return f(x);
        if (i.currentConstruct && i.currentConstruct.concrete) return g(x);
        e.interrupt = !!(
          i.currentConstruct && !i._gfmTableDynamicInterruptHack
        );
      }
      return (e.containerState = {}), t.check(bu, c, h)(x);
    }
    function c(x) {
      return i && w(), b(r), f(x);
    }
    function h(x) {
      return (
        (e.parser.lazy[e.now().line] = r !== n.length),
        (a = e.now().offset),
        g(x)
      );
    }
    function f(x) {
      return (e.containerState = {}), t.attempt(bu, d, g)(x);
    }
    function d(x) {
      return r++, n.push([e.currentConstruct, e.containerState]), f(x);
    }
    function g(x) {
      if (x === null) {
        i && w(), b(0), t.consume(x);
        return;
      }
      return (
        (i = i || e.parser.flow(e.now())),
        t.enter("chunkFlow", {
          _tokenizer: i,
          contentType: "flow",
          previous: s,
        }),
        _(x)
      );
    }
    function _(x) {
      if (x === null) {
        y(t.exit("chunkFlow"), !0), b(0), t.consume(x);
        return;
      }
      return F(x)
        ? (t.consume(x),
          y(t.exit("chunkFlow")),
          (r = 0),
          (e.interrupt = void 0),
          o)
        : (t.consume(x), _);
    }
    function y(x, S) {
      const P = e.sliceStream(x);
      if (
        (S && P.push(null),
        (x.previous = s),
        s && (s.next = x),
        (s = x),
        i.defineSkip(x.start),
        i.write(P),
        e.parser.lazy[x.start.line])
      ) {
        let v = i.events.length;
        for (; v--; )
          if (
            i.events[v][1].start.offset < a &&
            (!i.events[v][1].end || i.events[v][1].end.offset > a)
          )
            return;
        const T = e.events.length;
        let V = T,
          O,
          j;
        for (; V--; )
          if (
            e.events[V][0] === "exit" &&
            e.events[V][1].type === "chunkFlow"
          ) {
            if (O) {
              j = e.events[V][1].end;
              break;
            }
            O = !0;
          }
        for (b(r), v = T; v < e.events.length; )
          (e.events[v][1].end = { ...j }), v++;
        Ve(e.events, V + 1, 0, e.events.slice(T)), (e.events.length = v);
      }
    }
    function b(x) {
      let S = n.length;
      for (; S-- > x; ) {
        const P = n[S];
        (e.containerState = P[1]), P[0].exit.call(e, t);
      }
      n.length = x;
    }
    function w() {
      i.write([null]),
        (s = void 0),
        (i = void 0),
        (e.containerState._closeFlow = void 0);
    }
  }
  function Vf(t, e, n) {
    return Z(
      t,
      t.attempt(this.parser.constructs.document, e, n),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function vu(t) {
    if (t === null || ve(t) || Bf(t)) return 1;
    if (Mf(t)) return 2;
  }
  function Ls(t, e, n) {
    const r = [];
    let i = -1;
    for (; ++i < t.length; ) {
      const s = t[i].resolveAll;
      s && !r.includes(s) && ((e = s(e, n)), r.push(s));
    }
    return e;
  }
  const js = { name: "attention", resolveAll: Wf, tokenize: Jf };
  function Wf(t, e) {
    let n = -1,
      r,
      i,
      s,
      a,
      o,
      l,
      u,
      c;
    for (; ++n < t.length; )
      if (
        t[n][0] === "enter" &&
        t[n][1].type === "attentionSequence" &&
        t[n][1]._close
      ) {
        for (r = n; r--; )
          if (
            t[r][0] === "exit" &&
            t[r][1].type === "attentionSequence" &&
            t[r][1]._open &&
            e.sliceSerialize(t[r][1]).charCodeAt(0) ===
              e.sliceSerialize(t[n][1]).charCodeAt(0)
          ) {
            if (
              (t[r][1]._close || t[n][1]._open) &&
              (t[n][1].end.offset - t[n][1].start.offset) % 3 &&
              !(
                (t[r][1].end.offset -
                  t[r][1].start.offset +
                  t[n][1].end.offset -
                  t[n][1].start.offset) %
                3
              )
            )
              continue;
            l =
              t[r][1].end.offset - t[r][1].start.offset > 1 &&
              t[n][1].end.offset - t[n][1].start.offset > 1
                ? 2
                : 1;
            const h = { ...t[r][1].end },
              f = { ...t[n][1].start };
            xu(h, -l),
              xu(f, l),
              (a = {
                type: l > 1 ? "strongSequence" : "emphasisSequence",
                start: h,
                end: { ...t[r][1].end },
              }),
              (o = {
                type: l > 1 ? "strongSequence" : "emphasisSequence",
                start: { ...t[n][1].start },
                end: f,
              }),
              (s = {
                type: l > 1 ? "strongText" : "emphasisText",
                start: { ...t[r][1].end },
                end: { ...t[n][1].start },
              }),
              (i = {
                type: l > 1 ? "strong" : "emphasis",
                start: { ...a.start },
                end: { ...o.end },
              }),
              (t[r][1].end = { ...a.start }),
              (t[n][1].start = { ...o.end }),
              (u = []),
              t[r][1].end.offset - t[r][1].start.offset &&
                (u = Oe(u, [
                  ["enter", t[r][1], e],
                  ["exit", t[r][1], e],
                ])),
              (u = Oe(u, [
                ["enter", i, e],
                ["enter", a, e],
                ["exit", a, e],
                ["enter", s, e],
              ])),
              (u = Oe(
                u,
                Ls(e.parser.constructs.insideSpan.null, t.slice(r + 1, n), e)
              )),
              (u = Oe(u, [
                ["exit", s, e],
                ["enter", o, e],
                ["exit", o, e],
                ["exit", i, e],
              ])),
              t[n][1].end.offset - t[n][1].start.offset
                ? ((c = 2),
                  (u = Oe(u, [
                    ["enter", t[n][1], e],
                    ["exit", t[n][1], e],
                  ])))
                : (c = 0),
              Ve(t, r - 1, n - r + 3, u),
              (n = r + u.length - c - 2);
            break;
          }
      }
    for (n = -1; ++n < t.length; )
      t[n][1].type === "attentionSequence" && (t[n][1].type = "data");
    return t;
  }
  function Jf(t, e) {
    const n = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      i = vu(r);
    let s;
    return a;
    function a(l) {
      return (s = l), t.enter("attentionSequence"), o(l);
    }
    function o(l) {
      if (l === s) return t.consume(l), o;
      const u = t.exit("attentionSequence"),
        c = vu(l),
        h = !c || (c === 2 && i) || n.includes(l),
        f = !i || (i === 2 && c) || n.includes(r);
      return (
        (u._open = !!(s === 42 ? h : h && (i || !f))),
        (u._close = !!(s === 42 ? f : f && (c || !h))),
        e(l)
      );
    }
  }
  function xu(t, e) {
    (t.column += e), (t.offset += e), (t._bufferIndex += e);
  }
  const Kf = { name: "autolink", tokenize: Gf };
  function Gf(t, e, n) {
    let r = 0;
    return i;
    function i(d) {
      return (
        t.enter("autolink"),
        t.enter("autolinkMarker"),
        t.consume(d),
        t.exit("autolinkMarker"),
        t.enter("autolinkProtocol"),
        s
      );
    }
    function s(d) {
      return We(d) ? (t.consume(d), a) : d === 64 ? n(d) : u(d);
    }
    function a(d) {
      return d === 43 || d === 45 || d === 46 || Pe(d) ? ((r = 1), o(d)) : u(d);
    }
    function o(d) {
      return d === 58
        ? (t.consume(d), (r = 0), l)
        : (d === 43 || d === 45 || d === 46 || Pe(d)) && r++ < 32
        ? (t.consume(d), o)
        : ((r = 0), u(d));
    }
    function l(d) {
      return d === 62
        ? (t.exit("autolinkProtocol"),
          t.enter("autolinkMarker"),
          t.consume(d),
          t.exit("autolinkMarker"),
          t.exit("autolink"),
          e)
        : d === null || d === 32 || d === 60 || Os(d)
        ? n(d)
        : (t.consume(d), l);
    }
    function u(d) {
      return d === 64 ? (t.consume(d), c) : Nf(d) ? (t.consume(d), u) : n(d);
    }
    function c(d) {
      return Pe(d) ? h(d) : n(d);
    }
    function h(d) {
      return d === 46
        ? (t.consume(d), (r = 0), c)
        : d === 62
        ? ((t.exit("autolinkProtocol").type = "autolinkEmail"),
          t.enter("autolinkMarker"),
          t.consume(d),
          t.exit("autolinkMarker"),
          t.exit("autolink"),
          e)
        : f(d);
    }
    function f(d) {
      if ((d === 45 || Pe(d)) && r++ < 63) {
        const g = d === 45 ? f : h;
        return t.consume(d), g;
      }
      return n(d);
    }
  }
  const Mr = { partial: !0, tokenize: Xf };
  function Xf(t, e, n) {
    return r;
    function r(s) {
      return K(s) ? Z(t, i, "linePrefix")(s) : i(s);
    }
    function i(s) {
      return s === null || F(s) ? e(s) : n(s);
    }
  }
  const ku = {
    continuation: { tokenize: Yf },
    exit: Zf,
    name: "blockQuote",
    tokenize: Qf,
  };
  function Qf(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      if (a === 62) {
        const o = r.containerState;
        return (
          o.open || (t.enter("blockQuote", { _container: !0 }), (o.open = !0)),
          t.enter("blockQuotePrefix"),
          t.enter("blockQuoteMarker"),
          t.consume(a),
          t.exit("blockQuoteMarker"),
          s
        );
      }
      return n(a);
    }
    function s(a) {
      return K(a)
        ? (t.enter("blockQuotePrefixWhitespace"),
          t.consume(a),
          t.exit("blockQuotePrefixWhitespace"),
          t.exit("blockQuotePrefix"),
          e)
        : (t.exit("blockQuotePrefix"), e(a));
    }
  }
  function Yf(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      return K(a)
        ? Z(
            t,
            s,
            "linePrefix",
            r.parser.constructs.disable.null.includes("codeIndented")
              ? void 0
              : 4
          )(a)
        : s(a);
    }
    function s(a) {
      return t.attempt(ku, e, n)(a);
    }
  }
  function Zf(t) {
    t.exit("blockQuote");
  }
  const Su = { name: "characterEscape", tokenize: ep };
  function ep(t, e, n) {
    return r;
    function r(s) {
      return (
        t.enter("characterEscape"),
        t.enter("escapeMarker"),
        t.consume(s),
        t.exit("escapeMarker"),
        i
      );
    }
    function i(s) {
      return Ff(s)
        ? (t.enter("characterEscapeValue"),
          t.consume(s),
          t.exit("characterEscapeValue"),
          t.exit("characterEscape"),
          e)
        : n(s);
    }
  }
  const Eu = { name: "characterReference", tokenize: tp };
  function tp(t, e, n) {
    const r = this;
    let i = 0,
      s,
      a;
    return o;
    function o(h) {
      return (
        t.enter("characterReference"),
        t.enter("characterReferenceMarker"),
        t.consume(h),
        t.exit("characterReferenceMarker"),
        l
      );
    }
    function l(h) {
      return h === 35
        ? (t.enter("characterReferenceMarkerNumeric"),
          t.consume(h),
          t.exit("characterReferenceMarkerNumeric"),
          u)
        : (t.enter("characterReferenceValue"), (s = 31), (a = Pe), c(h));
    }
    function u(h) {
      return h === 88 || h === 120
        ? (t.enter("characterReferenceMarkerHexadecimal"),
          t.consume(h),
          t.exit("characterReferenceMarkerHexadecimal"),
          t.enter("characterReferenceValue"),
          (s = 6),
          (a = Df),
          c)
        : (t.enter("characterReferenceValue"), (s = 7), (a = $s), c(h));
    }
    function c(h) {
      if (h === 59 && i) {
        const f = t.exit("characterReferenceValue");
        return a === Pe && !Rs(r.sliceSerialize(f))
          ? n(h)
          : (t.enter("characterReferenceMarker"),
            t.consume(h),
            t.exit("characterReferenceMarker"),
            t.exit("characterReference"),
            e);
      }
      return a(h) && i++ < s ? (t.consume(h), c) : n(h);
    }
  }
  const Cu = { partial: !0, tokenize: rp },
    Au = { concrete: !0, name: "codeFenced", tokenize: np };
  function np(t, e, n) {
    const r = this,
      i = { partial: !0, tokenize: P };
    let s = 0,
      a = 0,
      o;
    return l;
    function l(v) {
      return u(v);
    }
    function u(v) {
      const T = r.events[r.events.length - 1];
      return (
        (s =
          T && T[1].type === "linePrefix"
            ? T[2].sliceSerialize(T[1], !0).length
            : 0),
        (o = v),
        t.enter("codeFenced"),
        t.enter("codeFencedFence"),
        t.enter("codeFencedFenceSequence"),
        c(v)
      );
    }
    function c(v) {
      return v === o
        ? (a++, t.consume(v), c)
        : a < 3
        ? n(v)
        : (t.exit("codeFencedFenceSequence"),
          K(v) ? Z(t, h, "whitespace")(v) : h(v));
    }
    function h(v) {
      return v === null || F(v)
        ? (t.exit("codeFencedFence"), r.interrupt ? e(v) : t.check(Cu, _, S)(v))
        : (t.enter("codeFencedFenceInfo"),
          t.enter("chunkString", { contentType: "string" }),
          f(v));
    }
    function f(v) {
      return v === null || F(v)
        ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), h(v))
        : K(v)
        ? (t.exit("chunkString"),
          t.exit("codeFencedFenceInfo"),
          Z(t, d, "whitespace")(v))
        : v === 96 && v === o
        ? n(v)
        : (t.consume(v), f);
    }
    function d(v) {
      return v === null || F(v)
        ? h(v)
        : (t.enter("codeFencedFenceMeta"),
          t.enter("chunkString", { contentType: "string" }),
          g(v));
    }
    function g(v) {
      return v === null || F(v)
        ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), h(v))
        : v === 96 && v === o
        ? n(v)
        : (t.consume(v), g);
    }
    function _(v) {
      return t.attempt(i, S, y)(v);
    }
    function y(v) {
      return t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), b;
    }
    function b(v) {
      return s > 0 && K(v) ? Z(t, w, "linePrefix", s + 1)(v) : w(v);
    }
    function w(v) {
      return v === null || F(v)
        ? t.check(Cu, _, S)(v)
        : (t.enter("codeFlowValue"), x(v));
    }
    function x(v) {
      return v === null || F(v)
        ? (t.exit("codeFlowValue"), w(v))
        : (t.consume(v), x);
    }
    function S(v) {
      return t.exit("codeFenced"), e(v);
    }
    function P(v, T, V) {
      let O = 0;
      return j;
      function j(D) {
        return v.enter("lineEnding"), v.consume(D), v.exit("lineEnding"), C;
      }
      function C(D) {
        return (
          v.enter("codeFencedFence"),
          K(D)
            ? Z(
                v,
                I,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(D)
            : I(D)
        );
      }
      function I(D) {
        return D === o ? (v.enter("codeFencedFenceSequence"), L(D)) : V(D);
      }
      function L(D) {
        return D === o
          ? (O++, v.consume(D), L)
          : O >= a
          ? (v.exit("codeFencedFenceSequence"),
            K(D) ? Z(v, R, "whitespace")(D) : R(D))
          : V(D);
      }
      function R(D) {
        return D === null || F(D) ? (v.exit("codeFencedFence"), T(D)) : V(D);
      }
    }
  }
  function rp(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      return a === null
        ? n(a)
        : (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), s);
    }
    function s(a) {
      return r.parser.lazy[r.now().line] ? n(a) : e(a);
    }
  }
  const Ns = { name: "codeIndented", tokenize: sp },
    ip = { partial: !0, tokenize: ap };
  function sp(t, e, n) {
    const r = this;
    return i;
    function i(u) {
      return t.enter("codeIndented"), Z(t, s, "linePrefix", 5)(u);
    }
    function s(u) {
      const c = r.events[r.events.length - 1];
      return c &&
        c[1].type === "linePrefix" &&
        c[2].sliceSerialize(c[1], !0).length >= 4
        ? a(u)
        : n(u);
    }
    function a(u) {
      return u === null
        ? l(u)
        : F(u)
        ? t.attempt(ip, a, l)(u)
        : (t.enter("codeFlowValue"), o(u));
    }
    function o(u) {
      return u === null || F(u)
        ? (t.exit("codeFlowValue"), a(u))
        : (t.consume(u), o);
    }
    function l(u) {
      return t.exit("codeIndented"), e(u);
    }
  }
  function ap(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      return r.parser.lazy[r.now().line]
        ? n(a)
        : F(a)
        ? (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), i)
        : Z(t, s, "linePrefix", 5)(a);
    }
    function s(a) {
      const o = r.events[r.events.length - 1];
      return o &&
        o[1].type === "linePrefix" &&
        o[2].sliceSerialize(o[1], !0).length >= 4
        ? e(a)
        : F(a)
        ? i(a)
        : n(a);
    }
  }
  const op = { name: "codeText", previous: up, resolve: lp, tokenize: cp };
  function lp(t) {
    let e = t.length - 4,
      n = 3,
      r,
      i;
    if (
      (t[n][1].type === "lineEnding" || t[n][1].type === "space") &&
      (t[e][1].type === "lineEnding" || t[e][1].type === "space")
    ) {
      for (r = n; ++r < e; )
        if (t[r][1].type === "codeTextData") {
          (t[n][1].type = "codeTextPadding"),
            (t[e][1].type = "codeTextPadding"),
            (n += 2),
            (e -= 2);
          break;
        }
    }
    for (r = n - 1, e++; ++r <= e; )
      i === void 0
        ? r !== e && t[r][1].type !== "lineEnding" && (i = r)
        : (r === e || t[r][1].type === "lineEnding") &&
          ((t[i][1].type = "codeTextData"),
          r !== i + 2 &&
            ((t[i][1].end = t[r - 1][1].end),
            t.splice(i + 2, r - i - 2),
            (e -= r - i - 2),
            (r = i + 2)),
          (i = void 0));
    return t;
  }
  function up(t) {
    return (
      t !== 96 ||
      this.events[this.events.length - 1][1].type === "characterEscape"
    );
  }
  function cp(t, e, n) {
    let r = 0,
      i,
      s;
    return a;
    function a(h) {
      return t.enter("codeText"), t.enter("codeTextSequence"), o(h);
    }
    function o(h) {
      return h === 96
        ? (t.consume(h), r++, o)
        : (t.exit("codeTextSequence"), l(h));
    }
    function l(h) {
      return h === null
        ? n(h)
        : h === 32
        ? (t.enter("space"), t.consume(h), t.exit("space"), l)
        : h === 96
        ? ((s = t.enter("codeTextSequence")), (i = 0), c(h))
        : F(h)
        ? (t.enter("lineEnding"), t.consume(h), t.exit("lineEnding"), l)
        : (t.enter("codeTextData"), u(h));
    }
    function u(h) {
      return h === null || h === 32 || h === 96 || F(h)
        ? (t.exit("codeTextData"), l(h))
        : (t.consume(h), u);
    }
    function c(h) {
      return h === 96
        ? (t.consume(h), i++, c)
        : i === r
        ? (t.exit("codeTextSequence"), t.exit("codeText"), e(h))
        : ((s.type = "codeTextData"), u(h));
    }
  }
  class hp {
    constructor(e) {
      (this.left = e ? [...e] : []), (this.right = []);
    }
    get(e) {
      if (e < 0 || e >= this.left.length + this.right.length)
        throw new RangeError(
          "Cannot access index `" +
            e +
            "` in a splice buffer of size `" +
            (this.left.length + this.right.length) +
            "`"
        );
      return e < this.left.length
        ? this.left[e]
        : this.right[this.right.length - e + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(e, n) {
      const r = n ?? Number.POSITIVE_INFINITY;
      return r < this.left.length
        ? this.left.slice(e, r)
        : e > this.left.length
        ? this.right
            .slice(
              this.right.length - r + this.left.length,
              this.right.length - e + this.left.length
            )
            .reverse()
        : this.left
            .slice(e)
            .concat(
              this.right
                .slice(this.right.length - r + this.left.length)
                .reverse()
            );
    }
    splice(e, n, r) {
      const i = n || 0;
      this.setCursor(Math.trunc(e));
      const s = this.right.splice(
        this.right.length - i,
        Number.POSITIVE_INFINITY
      );
      return r && Dn(this.left, r), s.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(e) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
    }
    pushMany(e) {
      this.setCursor(Number.POSITIVE_INFINITY), Dn(this.left, e);
    }
    unshift(e) {
      this.setCursor(0), this.right.push(e);
    }
    unshiftMany(e) {
      this.setCursor(0), Dn(this.right, e.reverse());
    }
    setCursor(e) {
      if (
        !(
          e === this.left.length ||
          (e > this.left.length && this.right.length === 0) ||
          (e < 0 && this.left.length === 0)
        )
      )
        if (e < this.left.length) {
          const n = this.left.splice(e, Number.POSITIVE_INFINITY);
          Dn(this.right, n.reverse());
        } else {
          const n = this.right.splice(
            this.left.length + this.right.length - e,
            Number.POSITIVE_INFINITY
          );
          Dn(this.left, n.reverse());
        }
    }
  }
  function Dn(t, e) {
    let n = 0;
    if (e.length < 1e4) t.push(...e);
    else for (; n < e.length; ) t.push(...e.slice(n, n + 1e4)), (n += 1e4);
  }
  function Pu(t) {
    const e = {};
    let n = -1,
      r,
      i,
      s,
      a,
      o,
      l,
      u;
    const c = new hp(t);
    for (; ++n < c.length; ) {
      for (; n in e; ) n = e[n];
      if (
        ((r = c.get(n)),
        n &&
          r[1].type === "chunkFlow" &&
          c.get(n - 1)[1].type === "listItemPrefix" &&
          ((l = r[1]._tokenizer.events),
          (s = 0),
          s < l.length && l[s][1].type === "lineEndingBlank" && (s += 2),
          s < l.length && l[s][1].type === "content"))
      )
        for (; ++s < l.length && l[s][1].type !== "content"; )
          l[s][1].type === "chunkText" &&
            ((l[s][1]._isInFirstContentOfListItem = !0), s++);
      if (r[0] === "enter")
        r[1].contentType && (Object.assign(e, dp(c, n)), (n = e[n]), (u = !0));
      else if (r[1]._container) {
        for (s = n, i = void 0; s--; )
          if (
            ((a = c.get(s)),
            a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          )
            a[0] === "enter" &&
              (i && (c.get(i)[1].type = "lineEndingBlank"),
              (a[1].type = "lineEnding"),
              (i = s));
          else if (
            !(a[1].type === "linePrefix" || a[1].type === "listItemIndent")
          )
            break;
        i &&
          ((r[1].end = { ...c.get(i)[1].start }),
          (o = c.slice(i, n)),
          o.unshift(r),
          c.splice(i, n - i + 1, o));
      }
    }
    return Ve(t, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
  }
  function dp(t, e) {
    const n = t.get(e)[1],
      r = t.get(e)[2];
    let i = e - 1;
    const s = [];
    let a = n._tokenizer;
    a ||
      ((a = r.parser[n.contentType](n.start)),
      n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
    const o = a.events,
      l = [],
      u = {};
    let c,
      h,
      f = -1,
      d = n,
      g = 0,
      _ = 0;
    const y = [_];
    for (; d; ) {
      for (; t.get(++i)[1] !== d; );
      s.push(i),
        d._tokenizer ||
          ((c = r.sliceStream(d)),
          d.next || c.push(null),
          h && a.defineSkip(d.start),
          d._isInFirstContentOfListItem &&
            (a._gfmTasklistFirstContentOfListItem = !0),
          a.write(c),
          d._isInFirstContentOfListItem &&
            (a._gfmTasklistFirstContentOfListItem = void 0)),
        (h = d),
        (d = d.next);
    }
    for (d = n; ++f < o.length; )
      o[f][0] === "exit" &&
        o[f - 1][0] === "enter" &&
        o[f][1].type === o[f - 1][1].type &&
        o[f][1].start.line !== o[f][1].end.line &&
        ((_ = f + 1),
        y.push(_),
        (d._tokenizer = void 0),
        (d.previous = void 0),
        (d = d.next));
    for (
      a.events = [],
        d ? ((d._tokenizer = void 0), (d.previous = void 0)) : y.pop(),
        f = y.length;
      f--;

    ) {
      const b = o.slice(y[f], y[f + 1]),
        w = s.pop();
      l.push([w, w + b.length - 1]), t.splice(w, 2, b);
    }
    for (l.reverse(), f = -1; ++f < l.length; )
      (u[g + l[f][0]] = g + l[f][1]), (g += l[f][1] - l[f][0] - 1);
    return u;
  }
  const fp = { resolve: mp, tokenize: gp },
    pp = { partial: !0, tokenize: _p };
  function mp(t) {
    return Pu(t), t;
  }
  function gp(t, e) {
    let n;
    return r;
    function r(o) {
      return (
        t.enter("content"),
        (n = t.enter("chunkContent", { contentType: "content" })),
        i(o)
      );
    }
    function i(o) {
      return o === null
        ? s(o)
        : F(o)
        ? t.check(pp, a, s)(o)
        : (t.consume(o), i);
    }
    function s(o) {
      return t.exit("chunkContent"), t.exit("content"), e(o);
    }
    function a(o) {
      return (
        t.consume(o),
        t.exit("chunkContent"),
        (n.next = t.enter("chunkContent", {
          contentType: "content",
          previous: n,
        })),
        (n = n.next),
        i
      );
    }
  }
  function _p(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      return (
        t.exit("chunkContent"),
        t.enter("lineEnding"),
        t.consume(a),
        t.exit("lineEnding"),
        Z(t, s, "linePrefix")
      );
    }
    function s(a) {
      if (a === null || F(a)) return n(a);
      const o = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") &&
        o &&
        o[1].type === "linePrefix" &&
        o[2].sliceSerialize(o[1], !0).length >= 4
        ? e(a)
        : t.interrupt(r.parser.constructs.flow, n, e)(a);
    }
  }
  function Tu(t, e, n, r, i, s, a, o, l) {
    const u = l || Number.POSITIVE_INFINITY;
    let c = 0;
    return h;
    function h(b) {
      return b === 60
        ? (t.enter(r), t.enter(i), t.enter(s), t.consume(b), t.exit(s), f)
        : b === null || b === 32 || b === 41 || Os(b)
        ? n(b)
        : (t.enter(r),
          t.enter(a),
          t.enter(o),
          t.enter("chunkString", { contentType: "string" }),
          _(b));
    }
    function f(b) {
      return b === 62
        ? (t.enter(s), t.consume(b), t.exit(s), t.exit(i), t.exit(r), e)
        : (t.enter(o), t.enter("chunkString", { contentType: "string" }), d(b));
    }
    function d(b) {
      return b === 62
        ? (t.exit("chunkString"), t.exit(o), f(b))
        : b === null || b === 60 || F(b)
        ? n(b)
        : (t.consume(b), b === 92 ? g : d);
    }
    function g(b) {
      return b === 60 || b === 62 || b === 92 ? (t.consume(b), d) : d(b);
    }
    function _(b) {
      return !c && (b === null || b === 41 || ve(b))
        ? (t.exit("chunkString"), t.exit(o), t.exit(a), t.exit(r), e(b))
        : c < u && b === 40
        ? (t.consume(b), c++, _)
        : b === 41
        ? (t.consume(b), c--, _)
        : b === null || b === 32 || b === 40 || Os(b)
        ? n(b)
        : (t.consume(b), b === 92 ? y : _);
    }
    function y(b) {
      return b === 40 || b === 41 || b === 92 ? (t.consume(b), _) : _(b);
    }
  }
  function Iu(t, e, n, r, i, s) {
    const a = this;
    let o = 0,
      l;
    return u;
    function u(d) {
      return t.enter(r), t.enter(i), t.consume(d), t.exit(i), t.enter(s), c;
    }
    function c(d) {
      return o > 999 ||
        d === null ||
        d === 91 ||
        (d === 93 && !l) ||
        (d === 94 && !o && "_hiddenFootnoteSupport" in a.parser.constructs)
        ? n(d)
        : d === 93
        ? (t.exit(s), t.enter(i), t.consume(d), t.exit(i), t.exit(r), e)
        : F(d)
        ? (t.enter("lineEnding"), t.consume(d), t.exit("lineEnding"), c)
        : (t.enter("chunkString", { contentType: "string" }), h(d));
    }
    function h(d) {
      return d === null || d === 91 || d === 93 || F(d) || o++ > 999
        ? (t.exit("chunkString"), c(d))
        : (t.consume(d), l || (l = !K(d)), d === 92 ? f : h);
    }
    function f(d) {
      return d === 91 || d === 92 || d === 93 ? (t.consume(d), o++, h) : h(d);
    }
  }
  function Ru(t, e, n, r, i, s) {
    let a;
    return o;
    function o(f) {
      return f === 34 || f === 39 || f === 40
        ? (t.enter(r),
          t.enter(i),
          t.consume(f),
          t.exit(i),
          (a = f === 40 ? 41 : f),
          l)
        : n(f);
    }
    function l(f) {
      return f === a
        ? (t.enter(i), t.consume(f), t.exit(i), t.exit(r), e)
        : (t.enter(s), u(f));
    }
    function u(f) {
      return f === a
        ? (t.exit(s), l(a))
        : f === null
        ? n(f)
        : F(f)
        ? (t.enter("lineEnding"),
          t.consume(f),
          t.exit("lineEnding"),
          Z(t, u, "linePrefix"))
        : (t.enter("chunkString", { contentType: "string" }), c(f));
    }
    function c(f) {
      return f === a || f === null || F(f)
        ? (t.exit("chunkString"), u(f))
        : (t.consume(f), f === 92 ? h : c);
    }
    function h(f) {
      return f === a || f === 92 ? (t.consume(f), c) : c(f);
    }
  }
  function Fn(t, e) {
    let n;
    return r;
    function r(i) {
      return F(i)
        ? (t.enter("lineEnding"),
          t.consume(i),
          t.exit("lineEnding"),
          (n = !0),
          r)
        : K(i)
        ? Z(t, r, n ? "linePrefix" : "lineSuffix")(i)
        : e(i);
    }
  }
  const yp = { name: "definition", tokenize: bp },
    wp = { partial: !0, tokenize: vp };
  function bp(t, e, n) {
    const r = this;
    let i;
    return s;
    function s(d) {
      return t.enter("definition"), a(d);
    }
    function a(d) {
      return Iu.call(
        r,
        t,
        o,
        n,
        "definitionLabel",
        "definitionLabelMarker",
        "definitionLabelString"
      )(d);
    }
    function o(d) {
      return (
        (i = Jt(
          r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
        )),
        d === 58
          ? (t.enter("definitionMarker"),
            t.consume(d),
            t.exit("definitionMarker"),
            l)
          : n(d)
      );
    }
    function l(d) {
      return ve(d) ? Fn(t, u)(d) : u(d);
    }
    function u(d) {
      return Tu(
        t,
        c,
        n,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString"
      )(d);
    }
    function c(d) {
      return t.attempt(wp, h, h)(d);
    }
    function h(d) {
      return K(d) ? Z(t, f, "whitespace")(d) : f(d);
    }
    function f(d) {
      return d === null || F(d)
        ? (t.exit("definition"), r.parser.defined.push(i), e(d))
        : n(d);
    }
  }
  function vp(t, e, n) {
    return r;
    function r(o) {
      return ve(o) ? Fn(t, i)(o) : n(o);
    }
    function i(o) {
      return Ru(
        t,
        s,
        n,
        "definitionTitle",
        "definitionTitleMarker",
        "definitionTitleString"
      )(o);
    }
    function s(o) {
      return K(o) ? Z(t, a, "whitespace")(o) : a(o);
    }
    function a(o) {
      return o === null || F(o) ? e(o) : n(o);
    }
  }
  const xp = { name: "hardBreakEscape", tokenize: kp };
  function kp(t, e, n) {
    return r;
    function r(s) {
      return t.enter("hardBreakEscape"), t.consume(s), i;
    }
    function i(s) {
      return F(s) ? (t.exit("hardBreakEscape"), e(s)) : n(s);
    }
  }
  const Sp = { name: "headingAtx", resolve: Ep, tokenize: Cp };
  function Ep(t, e) {
    let n = t.length - 2,
      r = 3,
      i,
      s;
    return (
      t[r][1].type === "whitespace" && (r += 2),
      n - 2 > r && t[n][1].type === "whitespace" && (n -= 2),
      t[n][1].type === "atxHeadingSequence" &&
        (r === n - 1 || (n - 4 > r && t[n - 2][1].type === "whitespace")) &&
        (n -= r + 1 === n ? 2 : 4),
      n > r &&
        ((i = {
          type: "atxHeadingText",
          start: t[r][1].start,
          end: t[n][1].end,
        }),
        (s = {
          type: "chunkText",
          start: t[r][1].start,
          end: t[n][1].end,
          contentType: "text",
        }),
        Ve(t, r, n - r + 1, [
          ["enter", i, e],
          ["enter", s, e],
          ["exit", s, e],
          ["exit", i, e],
        ])),
      t
    );
  }
  function Cp(t, e, n) {
    let r = 0;
    return i;
    function i(c) {
      return t.enter("atxHeading"), s(c);
    }
    function s(c) {
      return t.enter("atxHeadingSequence"), a(c);
    }
    function a(c) {
      return c === 35 && r++ < 6
        ? (t.consume(c), a)
        : c === null || ve(c)
        ? (t.exit("atxHeadingSequence"), o(c))
        : n(c);
    }
    function o(c) {
      return c === 35
        ? (t.enter("atxHeadingSequence"), l(c))
        : c === null || F(c)
        ? (t.exit("atxHeading"), e(c))
        : K(c)
        ? Z(t, o, "whitespace")(c)
        : (t.enter("atxHeadingText"), u(c));
    }
    function l(c) {
      return c === 35
        ? (t.consume(c), l)
        : (t.exit("atxHeadingSequence"), o(c));
    }
    function u(c) {
      return c === null || c === 35 || ve(c)
        ? (t.exit("atxHeadingText"), o(c))
        : (t.consume(c), u);
    }
  }
  const Ap = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "search",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul",
    ],
    Ou = ["pre", "script", "style", "textarea"],
    Pp = { concrete: !0, name: "htmlFlow", resolveTo: Rp, tokenize: Op },
    Tp = { partial: !0, tokenize: Lp },
    Ip = { partial: !0, tokenize: $p };
  function Rp(t) {
    let e = t.length;
    for (; e-- && !(t[e][0] === "enter" && t[e][1].type === "htmlFlow"); );
    return (
      e > 1 &&
        t[e - 2][1].type === "linePrefix" &&
        ((t[e][1].start = t[e - 2][1].start),
        (t[e + 1][1].start = t[e - 2][1].start),
        t.splice(e - 2, 2)),
      t
    );
  }
  function Op(t, e, n) {
    const r = this;
    let i, s, a, o, l;
    return u;
    function u(m) {
      return c(m);
    }
    function c(m) {
      return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(m), h;
    }
    function h(m) {
      return m === 33
        ? (t.consume(m), f)
        : m === 47
        ? (t.consume(m), (s = !0), _)
        : m === 63
        ? (t.consume(m), (i = 3), r.interrupt ? e : p)
        : We(m)
        ? (t.consume(m), (a = String.fromCharCode(m)), y)
        : n(m);
    }
    function f(m) {
      return m === 45
        ? (t.consume(m), (i = 2), d)
        : m === 91
        ? (t.consume(m), (i = 5), (o = 0), g)
        : We(m)
        ? (t.consume(m), (i = 4), r.interrupt ? e : p)
        : n(m);
    }
    function d(m) {
      return m === 45 ? (t.consume(m), r.interrupt ? e : p) : n(m);
    }
    function g(m) {
      const Me = "CDATA[";
      return m === Me.charCodeAt(o++)
        ? (t.consume(m), o === Me.length ? (r.interrupt ? e : I) : g)
        : n(m);
    }
    function _(m) {
      return We(m) ? (t.consume(m), (a = String.fromCharCode(m)), y) : n(m);
    }
    function y(m) {
      if (m === null || m === 47 || m === 62 || ve(m)) {
        const Me = m === 47,
          Pt = a.toLowerCase();
        return !Me && !s && Ou.includes(Pt)
          ? ((i = 1), r.interrupt ? e(m) : I(m))
          : Ap.includes(a.toLowerCase())
          ? ((i = 6), Me ? (t.consume(m), b) : r.interrupt ? e(m) : I(m))
          : ((i = 7),
            r.interrupt && !r.parser.lazy[r.now().line]
              ? n(m)
              : s
              ? w(m)
              : x(m));
      }
      return m === 45 || Pe(m)
        ? (t.consume(m), (a += String.fromCharCode(m)), y)
        : n(m);
    }
    function b(m) {
      return m === 62 ? (t.consume(m), r.interrupt ? e : I) : n(m);
    }
    function w(m) {
      return K(m) ? (t.consume(m), w) : j(m);
    }
    function x(m) {
      return m === 47
        ? (t.consume(m), j)
        : m === 58 || m === 95 || We(m)
        ? (t.consume(m), S)
        : K(m)
        ? (t.consume(m), x)
        : j(m);
    }
    function S(m) {
      return m === 45 || m === 46 || m === 58 || m === 95 || Pe(m)
        ? (t.consume(m), S)
        : P(m);
    }
    function P(m) {
      return m === 61 ? (t.consume(m), v) : K(m) ? (t.consume(m), P) : x(m);
    }
    function v(m) {
      return m === null || m === 60 || m === 61 || m === 62 || m === 96
        ? n(m)
        : m === 34 || m === 39
        ? (t.consume(m), (l = m), T)
        : K(m)
        ? (t.consume(m), v)
        : V(m);
    }
    function T(m) {
      return m === l
        ? (t.consume(m), (l = null), O)
        : m === null || F(m)
        ? n(m)
        : (t.consume(m), T);
    }
    function V(m) {
      return m === null ||
        m === 34 ||
        m === 39 ||
        m === 47 ||
        m === 60 ||
        m === 61 ||
        m === 62 ||
        m === 96 ||
        ve(m)
        ? P(m)
        : (t.consume(m), V);
    }
    function O(m) {
      return m === 47 || m === 62 || K(m) ? x(m) : n(m);
    }
    function j(m) {
      return m === 62 ? (t.consume(m), C) : n(m);
    }
    function C(m) {
      return m === null || F(m) ? I(m) : K(m) ? (t.consume(m), C) : n(m);
    }
    function I(m) {
      return m === 45 && i === 2
        ? (t.consume(m), he)
        : m === 60 && i === 1
        ? (t.consume(m), me)
        : m === 62 && i === 4
        ? (t.consume(m), Fe)
        : m === 63 && i === 3
        ? (t.consume(m), p)
        : m === 93 && i === 5
        ? (t.consume(m), et)
        : F(m) && (i === 6 || i === 7)
        ? (t.exit("htmlFlowData"), t.check(Tp, tt, L)(m))
        : m === null || F(m)
        ? (t.exit("htmlFlowData"), L(m))
        : (t.consume(m), I);
    }
    function L(m) {
      return t.check(Ip, R, tt)(m);
    }
    function R(m) {
      return t.enter("lineEnding"), t.consume(m), t.exit("lineEnding"), D;
    }
    function D(m) {
      return m === null || F(m) ? L(m) : (t.enter("htmlFlowData"), I(m));
    }
    function he(m) {
      return m === 45 ? (t.consume(m), p) : I(m);
    }
    function me(m) {
      return m === 47 ? (t.consume(m), (a = ""), De) : I(m);
    }
    function De(m) {
      if (m === 62) {
        const Me = a.toLowerCase();
        return Ou.includes(Me) ? (t.consume(m), Fe) : I(m);
      }
      return We(m) && a.length < 8
        ? (t.consume(m), (a += String.fromCharCode(m)), De)
        : I(m);
    }
    function et(m) {
      return m === 93 ? (t.consume(m), p) : I(m);
    }
    function p(m) {
      return m === 62
        ? (t.consume(m), Fe)
        : m === 45 && i === 2
        ? (t.consume(m), p)
        : I(m);
    }
    function Fe(m) {
      return m === null || F(m)
        ? (t.exit("htmlFlowData"), tt(m))
        : (t.consume(m), Fe);
    }
    function tt(m) {
      return t.exit("htmlFlow"), e(m);
    }
  }
  function $p(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      return F(a)
        ? (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), s)
        : n(a);
    }
    function s(a) {
      return r.parser.lazy[r.now().line] ? n(a) : e(a);
    }
  }
  function Lp(t, e, n) {
    return r;
    function r(i) {
      return (
        t.enter("lineEnding"),
        t.consume(i),
        t.exit("lineEnding"),
        t.attempt(Mr, e, n)
      );
    }
  }
  const jp = { name: "htmlText", tokenize: Np };
  function Np(t, e, n) {
    const r = this;
    let i, s, a;
    return o;
    function o(p) {
      return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(p), l;
    }
    function l(p) {
      return p === 33
        ? (t.consume(p), u)
        : p === 47
        ? (t.consume(p), P)
        : p === 63
        ? (t.consume(p), x)
        : We(p)
        ? (t.consume(p), V)
        : n(p);
    }
    function u(p) {
      return p === 45
        ? (t.consume(p), c)
        : p === 91
        ? (t.consume(p), (s = 0), g)
        : We(p)
        ? (t.consume(p), w)
        : n(p);
    }
    function c(p) {
      return p === 45 ? (t.consume(p), d) : n(p);
    }
    function h(p) {
      return p === null
        ? n(p)
        : p === 45
        ? (t.consume(p), f)
        : F(p)
        ? ((a = h), me(p))
        : (t.consume(p), h);
    }
    function f(p) {
      return p === 45 ? (t.consume(p), d) : h(p);
    }
    function d(p) {
      return p === 62 ? he(p) : p === 45 ? f(p) : h(p);
    }
    function g(p) {
      const Fe = "CDATA[";
      return p === Fe.charCodeAt(s++)
        ? (t.consume(p), s === Fe.length ? _ : g)
        : n(p);
    }
    function _(p) {
      return p === null
        ? n(p)
        : p === 93
        ? (t.consume(p), y)
        : F(p)
        ? ((a = _), me(p))
        : (t.consume(p), _);
    }
    function y(p) {
      return p === 93 ? (t.consume(p), b) : _(p);
    }
    function b(p) {
      return p === 62 ? he(p) : p === 93 ? (t.consume(p), b) : _(p);
    }
    function w(p) {
      return p === null || p === 62
        ? he(p)
        : F(p)
        ? ((a = w), me(p))
        : (t.consume(p), w);
    }
    function x(p) {
      return p === null
        ? n(p)
        : p === 63
        ? (t.consume(p), S)
        : F(p)
        ? ((a = x), me(p))
        : (t.consume(p), x);
    }
    function S(p) {
      return p === 62 ? he(p) : x(p);
    }
    function P(p) {
      return We(p) ? (t.consume(p), v) : n(p);
    }
    function v(p) {
      return p === 45 || Pe(p) ? (t.consume(p), v) : T(p);
    }
    function T(p) {
      return F(p) ? ((a = T), me(p)) : K(p) ? (t.consume(p), T) : he(p);
    }
    function V(p) {
      return p === 45 || Pe(p)
        ? (t.consume(p), V)
        : p === 47 || p === 62 || ve(p)
        ? O(p)
        : n(p);
    }
    function O(p) {
      return p === 47
        ? (t.consume(p), he)
        : p === 58 || p === 95 || We(p)
        ? (t.consume(p), j)
        : F(p)
        ? ((a = O), me(p))
        : K(p)
        ? (t.consume(p), O)
        : he(p);
    }
    function j(p) {
      return p === 45 || p === 46 || p === 58 || p === 95 || Pe(p)
        ? (t.consume(p), j)
        : C(p);
    }
    function C(p) {
      return p === 61
        ? (t.consume(p), I)
        : F(p)
        ? ((a = C), me(p))
        : K(p)
        ? (t.consume(p), C)
        : O(p);
    }
    function I(p) {
      return p === null || p === 60 || p === 61 || p === 62 || p === 96
        ? n(p)
        : p === 34 || p === 39
        ? (t.consume(p), (i = p), L)
        : F(p)
        ? ((a = I), me(p))
        : K(p)
        ? (t.consume(p), I)
        : (t.consume(p), R);
    }
    function L(p) {
      return p === i
        ? (t.consume(p), (i = void 0), D)
        : p === null
        ? n(p)
        : F(p)
        ? ((a = L), me(p))
        : (t.consume(p), L);
    }
    function R(p) {
      return p === null ||
        p === 34 ||
        p === 39 ||
        p === 60 ||
        p === 61 ||
        p === 96
        ? n(p)
        : p === 47 || p === 62 || ve(p)
        ? O(p)
        : (t.consume(p), R);
    }
    function D(p) {
      return p === 47 || p === 62 || ve(p) ? O(p) : n(p);
    }
    function he(p) {
      return p === 62
        ? (t.consume(p), t.exit("htmlTextData"), t.exit("htmlText"), e)
        : n(p);
    }
    function me(p) {
      return (
        t.exit("htmlTextData"),
        t.enter("lineEnding"),
        t.consume(p),
        t.exit("lineEnding"),
        De
      );
    }
    function De(p) {
      return K(p)
        ? Z(
            t,
            et,
            "linePrefix",
            r.parser.constructs.disable.null.includes("codeIndented")
              ? void 0
              : 4
          )(p)
        : et(p);
    }
    function et(p) {
      return t.enter("htmlTextData"), a(p);
    }
  }
  const Ds = { name: "labelEnd", resolveAll: Bp, resolveTo: Up, tokenize: zp },
    Dp = { tokenize: qp },
    Fp = { tokenize: Hp },
    Mp = { tokenize: Vp };
  function Bp(t) {
    let e = -1;
    const n = [];
    for (; ++e < t.length; ) {
      const r = t[e][1];
      if (
        (n.push(t[e]),
        r.type === "labelImage" ||
          r.type === "labelLink" ||
          r.type === "labelEnd")
      ) {
        const i = r.type === "labelImage" ? 4 : 2;
        (r.type = "data"), (e += i);
      }
    }
    return t.length !== n.length && Ve(t, 0, t.length, n), t;
  }
  function Up(t, e) {
    let n = t.length,
      r = 0,
      i,
      s,
      a,
      o;
    for (; n--; )
      if (((i = t[n][1]), s)) {
        if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
        t[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
      } else if (a) {
        if (
          t[n][0] === "enter" &&
          (i.type === "labelImage" || i.type === "labelLink") &&
          !i._balanced &&
          ((s = n), i.type !== "labelLink")
        ) {
          r = 2;
          break;
        }
      } else i.type === "labelEnd" && (a = n);
    const l = {
        type: t[s][1].type === "labelLink" ? "link" : "image",
        start: { ...t[s][1].start },
        end: { ...t[t.length - 1][1].end },
      },
      u = {
        type: "label",
        start: { ...t[s][1].start },
        end: { ...t[a][1].end },
      },
      c = {
        type: "labelText",
        start: { ...t[s + r + 2][1].end },
        end: { ...t[a - 2][1].start },
      };
    return (
      (o = [
        ["enter", l, e],
        ["enter", u, e],
      ]),
      (o = Oe(o, t.slice(s + 1, s + r + 3))),
      (o = Oe(o, [["enter", c, e]])),
      (o = Oe(
        o,
        Ls(e.parser.constructs.insideSpan.null, t.slice(s + r + 4, a - 3), e)
      )),
      (o = Oe(o, [["exit", c, e], t[a - 2], t[a - 1], ["exit", u, e]])),
      (o = Oe(o, t.slice(a + 1))),
      (o = Oe(o, [["exit", l, e]])),
      Ve(t, s, t.length, o),
      t
    );
  }
  function zp(t, e, n) {
    const r = this;
    let i = r.events.length,
      s,
      a;
    for (; i--; )
      if (
        (r.events[i][1].type === "labelImage" ||
          r.events[i][1].type === "labelLink") &&
        !r.events[i][1]._balanced
      ) {
        s = r.events[i][1];
        break;
      }
    return o;
    function o(f) {
      return s
        ? s._inactive
          ? h(f)
          : ((a = r.parser.defined.includes(
              Jt(r.sliceSerialize({ start: s.end, end: r.now() }))
            )),
            t.enter("labelEnd"),
            t.enter("labelMarker"),
            t.consume(f),
            t.exit("labelMarker"),
            t.exit("labelEnd"),
            l)
        : n(f);
    }
    function l(f) {
      return f === 40
        ? t.attempt(Dp, c, a ? c : h)(f)
        : f === 91
        ? t.attempt(Fp, c, a ? u : h)(f)
        : a
        ? c(f)
        : h(f);
    }
    function u(f) {
      return t.attempt(Mp, c, h)(f);
    }
    function c(f) {
      return e(f);
    }
    function h(f) {
      return (s._balanced = !0), n(f);
    }
  }
  function qp(t, e, n) {
    return r;
    function r(h) {
      return (
        t.enter("resource"),
        t.enter("resourceMarker"),
        t.consume(h),
        t.exit("resourceMarker"),
        i
      );
    }
    function i(h) {
      return ve(h) ? Fn(t, s)(h) : s(h);
    }
    function s(h) {
      return h === 41
        ? c(h)
        : Tu(
            t,
            a,
            o,
            "resourceDestination",
            "resourceDestinationLiteral",
            "resourceDestinationLiteralMarker",
            "resourceDestinationRaw",
            "resourceDestinationString",
            32
          )(h);
    }
    function a(h) {
      return ve(h) ? Fn(t, l)(h) : c(h);
    }
    function o(h) {
      return n(h);
    }
    function l(h) {
      return h === 34 || h === 39 || h === 40
        ? Ru(
            t,
            u,
            n,
            "resourceTitle",
            "resourceTitleMarker",
            "resourceTitleString"
          )(h)
        : c(h);
    }
    function u(h) {
      return ve(h) ? Fn(t, c)(h) : c(h);
    }
    function c(h) {
      return h === 41
        ? (t.enter("resourceMarker"),
          t.consume(h),
          t.exit("resourceMarker"),
          t.exit("resource"),
          e)
        : n(h);
    }
  }
  function Hp(t, e, n) {
    const r = this;
    return i;
    function i(o) {
      return Iu.call(
        r,
        t,
        s,
        a,
        "reference",
        "referenceMarker",
        "referenceString"
      )(o);
    }
    function s(o) {
      return r.parser.defined.includes(
        Jt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
      )
        ? e(o)
        : n(o);
    }
    function a(o) {
      return n(o);
    }
  }
  function Vp(t, e, n) {
    return r;
    function r(s) {
      return (
        t.enter("reference"),
        t.enter("referenceMarker"),
        t.consume(s),
        t.exit("referenceMarker"),
        i
      );
    }
    function i(s) {
      return s === 93
        ? (t.enter("referenceMarker"),
          t.consume(s),
          t.exit("referenceMarker"),
          t.exit("reference"),
          e)
        : n(s);
    }
  }
  const Wp = {
    name: "labelStartImage",
    resolveAll: Ds.resolveAll,
    tokenize: Jp,
  };
  function Jp(t, e, n) {
    const r = this;
    return i;
    function i(o) {
      return (
        t.enter("labelImage"),
        t.enter("labelImageMarker"),
        t.consume(o),
        t.exit("labelImageMarker"),
        s
      );
    }
    function s(o) {
      return o === 91
        ? (t.enter("labelMarker"),
          t.consume(o),
          t.exit("labelMarker"),
          t.exit("labelImage"),
          a)
        : n(o);
    }
    function a(o) {
      return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
        ? n(o)
        : e(o);
    }
  }
  const Kp = {
    name: "labelStartLink",
    resolveAll: Ds.resolveAll,
    tokenize: Gp,
  };
  function Gp(t, e, n) {
    const r = this;
    return i;
    function i(a) {
      return (
        t.enter("labelLink"),
        t.enter("labelMarker"),
        t.consume(a),
        t.exit("labelMarker"),
        t.exit("labelLink"),
        s
      );
    }
    function s(a) {
      return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
        ? n(a)
        : e(a);
    }
  }
  const Fs = { name: "lineEnding", tokenize: Xp };
  function Xp(t, e) {
    return n;
    function n(r) {
      return (
        t.enter("lineEnding"),
        t.consume(r),
        t.exit("lineEnding"),
        Z(t, e, "linePrefix")
      );
    }
  }
  const Br = { name: "thematicBreak", tokenize: Qp };
  function Qp(t, e, n) {
    let r = 0,
      i;
    return s;
    function s(u) {
      return t.enter("thematicBreak"), a(u);
    }
    function a(u) {
      return (i = u), o(u);
    }
    function o(u) {
      return u === i
        ? (t.enter("thematicBreakSequence"), l(u))
        : r >= 3 && (u === null || F(u))
        ? (t.exit("thematicBreak"), e(u))
        : n(u);
    }
    function l(u) {
      return u === i
        ? (t.consume(u), r++, l)
        : (t.exit("thematicBreakSequence"),
          K(u) ? Z(t, o, "whitespace")(u) : o(u));
    }
  }
  const xe = {
      continuation: { tokenize: tm },
      exit: rm,
      name: "list",
      tokenize: em,
    },
    Yp = { partial: !0, tokenize: im },
    Zp = { partial: !0, tokenize: nm };
  function em(t, e, n) {
    const r = this,
      i = r.events[r.events.length - 1];
    let s =
        i && i[1].type === "linePrefix"
          ? i[2].sliceSerialize(i[1], !0).length
          : 0,
      a = 0;
    return o;
    function o(d) {
      const g =
        r.containerState.type ||
        (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
      if (
        g === "listUnordered"
          ? !r.containerState.marker || d === r.containerState.marker
          : $s(d)
      ) {
        if (
          (r.containerState.type ||
            ((r.containerState.type = g), t.enter(g, { _container: !0 })),
          g === "listUnordered")
        )
          return (
            t.enter("listItemPrefix"),
            d === 42 || d === 45 ? t.check(Br, n, u)(d) : u(d)
          );
        if (!r.interrupt || d === 49)
          return t.enter("listItemPrefix"), t.enter("listItemValue"), l(d);
      }
      return n(d);
    }
    function l(d) {
      return $s(d) && ++a < 10
        ? (t.consume(d), l)
        : (!r.interrupt || a < 2) &&
          (r.containerState.marker
            ? d === r.containerState.marker
            : d === 41 || d === 46)
        ? (t.exit("listItemValue"), u(d))
        : n(d);
    }
    function u(d) {
      return (
        t.enter("listItemMarker"),
        t.consume(d),
        t.exit("listItemMarker"),
        (r.containerState.marker = r.containerState.marker || d),
        t.check(Mr, r.interrupt ? n : c, t.attempt(Yp, f, h))
      );
    }
    function c(d) {
      return (r.containerState.initialBlankLine = !0), s++, f(d);
    }
    function h(d) {
      return K(d)
        ? (t.enter("listItemPrefixWhitespace"),
          t.consume(d),
          t.exit("listItemPrefixWhitespace"),
          f)
        : n(d);
    }
    function f(d) {
      return (
        (r.containerState.size =
          s + r.sliceSerialize(t.exit("listItemPrefix"), !0).length),
        e(d)
      );
    }
  }
  function tm(t, e, n) {
    const r = this;
    return (r.containerState._closeFlow = void 0), t.check(Mr, i, s);
    function i(o) {
      return (
        (r.containerState.furtherBlankLines =
          r.containerState.furtherBlankLines ||
          r.containerState.initialBlankLine),
        Z(t, e, "listItemIndent", r.containerState.size + 1)(o)
      );
    }
    function s(o) {
      return r.containerState.furtherBlankLines || !K(o)
        ? ((r.containerState.furtherBlankLines = void 0),
          (r.containerState.initialBlankLine = void 0),
          a(o))
        : ((r.containerState.furtherBlankLines = void 0),
          (r.containerState.initialBlankLine = void 0),
          t.attempt(Zp, e, a)(o));
    }
    function a(o) {
      return (
        (r.containerState._closeFlow = !0),
        (r.interrupt = void 0),
        Z(
          t,
          t.attempt(xe, e, n),
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(o)
      );
    }
  }
  function nm(t, e, n) {
    const r = this;
    return Z(t, i, "listItemIndent", r.containerState.size + 1);
    function i(s) {
      const a = r.events[r.events.length - 1];
      return a &&
        a[1].type === "listItemIndent" &&
        a[2].sliceSerialize(a[1], !0).length === r.containerState.size
        ? e(s)
        : n(s);
    }
  }
  function rm(t) {
    t.exit(this.containerState.type);
  }
  function im(t, e, n) {
    const r = this;
    return Z(
      t,
      i,
      "listItemPrefixWhitespace",
      r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
    );
    function i(s) {
      const a = r.events[r.events.length - 1];
      return !K(s) && a && a[1].type === "listItemPrefixWhitespace"
        ? e(s)
        : n(s);
    }
  }
  const $u = { name: "setextUnderline", resolveTo: sm, tokenize: am };
  function sm(t, e) {
    let n = t.length,
      r,
      i,
      s;
    for (; n--; )
      if (t[n][0] === "enter") {
        if (t[n][1].type === "content") {
          r = n;
          break;
        }
        t[n][1].type === "paragraph" && (i = n);
      } else
        t[n][1].type === "content" && t.splice(n, 1),
          !s && t[n][1].type === "definition" && (s = n);
    const a = {
      type: "setextHeading",
      start: { ...t[r][1].start },
      end: { ...t[t.length - 1][1].end },
    };
    return (
      (t[i][1].type = "setextHeadingText"),
      s
        ? (t.splice(i, 0, ["enter", a, e]),
          t.splice(s + 1, 0, ["exit", t[r][1], e]),
          (t[r][1].end = { ...t[s][1].end }))
        : (t[r][1] = a),
      t.push(["exit", a, e]),
      t
    );
  }
  function am(t, e, n) {
    const r = this;
    let i;
    return s;
    function s(u) {
      let c = r.events.length,
        h;
      for (; c--; )
        if (
          r.events[c][1].type !== "lineEnding" &&
          r.events[c][1].type !== "linePrefix" &&
          r.events[c][1].type !== "content"
        ) {
          h = r.events[c][1].type === "paragraph";
          break;
        }
      return !r.parser.lazy[r.now().line] && (r.interrupt || h)
        ? (t.enter("setextHeadingLine"), (i = u), a(u))
        : n(u);
    }
    function a(u) {
      return t.enter("setextHeadingLineSequence"), o(u);
    }
    function o(u) {
      return u === i
        ? (t.consume(u), o)
        : (t.exit("setextHeadingLineSequence"),
          K(u) ? Z(t, l, "lineSuffix")(u) : l(u));
    }
    function l(u) {
      return u === null || F(u) ? (t.exit("setextHeadingLine"), e(u)) : n(u);
    }
  }
  const om = { tokenize: lm };
  function lm(t) {
    const e = this,
      n = t.attempt(
        Mr,
        r,
        t.attempt(
          this.parser.constructs.flowInitial,
          i,
          Z(
            t,
            t.attempt(this.parser.constructs.flow, i, t.attempt(fp, i)),
            "linePrefix"
          )
        )
      );
    return n;
    function r(s) {
      if (s === null) {
        t.consume(s);
        return;
      }
      return (
        t.enter("lineEndingBlank"),
        t.consume(s),
        t.exit("lineEndingBlank"),
        (e.currentConstruct = void 0),
        n
      );
    }
    function i(s) {
      if (s === null) {
        t.consume(s);
        return;
      }
      return (
        t.enter("lineEnding"),
        t.consume(s),
        t.exit("lineEnding"),
        (e.currentConstruct = void 0),
        n
      );
    }
  }
  const um = { resolveAll: ju() },
    cm = Lu("string"),
    hm = Lu("text");
  function Lu(t) {
    return { resolveAll: ju(t === "text" ? dm : void 0), tokenize: e };
    function e(n) {
      const r = this,
        i = this.parser.constructs[t],
        s = n.attempt(i, a, o);
      return a;
      function a(c) {
        return u(c) ? s(c) : o(c);
      }
      function o(c) {
        if (c === null) {
          n.consume(c);
          return;
        }
        return n.enter("data"), n.consume(c), l;
      }
      function l(c) {
        return u(c) ? (n.exit("data"), s(c)) : (n.consume(c), l);
      }
      function u(c) {
        if (c === null) return !0;
        const h = i[c];
        let f = -1;
        if (h)
          for (; ++f < h.length; ) {
            const d = h[f];
            if (!d.previous || d.previous.call(r, r.previous)) return !0;
          }
        return !1;
      }
    }
  }
  function ju(t) {
    return e;
    function e(n, r) {
      let i = -1,
        s;
      for (; ++i <= n.length; )
        s === void 0
          ? n[i] && n[i][1].type === "data" && ((s = i), i++)
          : (!n[i] || n[i][1].type !== "data") &&
            (i !== s + 2 &&
              ((n[s][1].end = n[i - 1][1].end),
              n.splice(s + 2, i - s - 2),
              (i = s + 2)),
            (s = void 0));
      return t ? t(n, r) : n;
    }
  }
  function dm(t, e) {
    let n = 0;
    for (; ++n <= t.length; )
      if (
        (n === t.length || t[n][1].type === "lineEnding") &&
        t[n - 1][1].type === "data"
      ) {
        const r = t[n - 1][1],
          i = e.sliceStream(r);
        let s = i.length,
          a = -1,
          o = 0,
          l;
        for (; s--; ) {
          const u = i[s];
          if (typeof u == "string") {
            for (a = u.length; u.charCodeAt(a - 1) === 32; ) o++, a--;
            if (a) break;
            a = -1;
          } else if (u === -2) (l = !0), o++;
          else if (u !== -1) {
            s++;
            break;
          }
        }
        if ((e._contentTypeTextTrailing && n === t.length && (o = 0), o)) {
          const u = {
            type:
              n === t.length || l || o < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              _bufferIndex: s ? a : r.start._bufferIndex + a,
              _index: r.start._index + s,
              line: r.end.line,
              column: r.end.column - o,
              offset: r.end.offset - o,
            },
            end: { ...r.end },
          };
          (r.end = { ...u.start }),
            r.start.offset === r.end.offset
              ? Object.assign(r, u)
              : (t.splice(n, 0, ["enter", u, e], ["exit", u, e]), (n += 2));
        }
        n++;
      }
    return t;
  }
  const fm = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: { null: [42, 95] },
        contentInitial: { 91: yp },
        disable: { null: [] },
        document: {
          42: xe,
          43: xe,
          45: xe,
          48: xe,
          49: xe,
          50: xe,
          51: xe,
          52: xe,
          53: xe,
          54: xe,
          55: xe,
          56: xe,
          57: xe,
          62: ku,
        },
        flow: {
          35: Sp,
          42: Br,
          45: [$u, Br],
          60: Pp,
          61: $u,
          95: Br,
          96: Au,
          126: Au,
        },
        flowInitial: { [-2]: Ns, [-1]: Ns, 32: Ns },
        insideSpan: { null: [js, um] },
        string: { 38: Eu, 92: Su },
        text: {
          [-5]: Fs,
          [-4]: Fs,
          [-3]: Fs,
          33: Wp,
          38: Eu,
          42: js,
          60: [Kf, jp],
          91: Kp,
          92: [xp, Su],
          93: Ds,
          95: js,
          96: op,
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  function pm(t, e, n) {
    let r = {
      _bufferIndex: -1,
      _index: 0,
      line: (n && n.line) || 1,
      column: (n && n.column) || 1,
      offset: (n && n.offset) || 0,
    };
    const i = {},
      s = [];
    let a = [],
      o = [];
    const l = {
        attempt: T(P),
        check: T(v),
        consume: w,
        enter: x,
        exit: S,
        interrupt: T(v, { interrupt: !0 }),
      },
      u = {
        code: null,
        containerState: {},
        defineSkip: _,
        events: [],
        now: g,
        parser: t,
        previous: null,
        sliceSerialize: f,
        sliceStream: d,
        write: h,
      };
    let c = e.tokenize.call(u, l);
    return e.resolveAll && s.push(e), u;
    function h(C) {
      return (
        (a = Oe(a, C)),
        y(),
        a[a.length - 1] !== null
          ? []
          : (V(e, 0), (u.events = Ls(s, u.events, u)), u.events)
      );
    }
    function f(C, I) {
      return gm(d(C), I);
    }
    function d(C) {
      return mm(a, C);
    }
    function g() {
      const { _bufferIndex: C, _index: I, line: L, column: R, offset: D } = r;
      return { _bufferIndex: C, _index: I, line: L, column: R, offset: D };
    }
    function _(C) {
      (i[C.line] = C.column), j();
    }
    function y() {
      let C;
      for (; r._index < a.length; ) {
        const I = a[r._index];
        if (typeof I == "string")
          for (
            C = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
            r._index === C && r._bufferIndex < I.length;

          )
            b(I.charCodeAt(r._bufferIndex));
        else b(I);
      }
    }
    function b(C) {
      c = c(C);
    }
    function w(C) {
      F(C)
        ? (r.line++, (r.column = 1), (r.offset += C === -3 ? 2 : 1), j())
        : C !== -1 && (r.column++, r.offset++),
        r._bufferIndex < 0
          ? r._index++
          : (r._bufferIndex++,
            r._bufferIndex === a[r._index].length &&
              ((r._bufferIndex = -1), r._index++)),
        (u.previous = C);
    }
    function x(C, I) {
      const L = I || {};
      return (
        (L.type = C),
        (L.start = g()),
        u.events.push(["enter", L, u]),
        o.push(L),
        L
      );
    }
    function S(C) {
      const I = o.pop();
      return (I.end = g()), u.events.push(["exit", I, u]), I;
    }
    function P(C, I) {
      V(C, I.from);
    }
    function v(C, I) {
      I.restore();
    }
    function T(C, I) {
      return L;
      function L(R, D, he) {
        let me, De, et, p;
        return Array.isArray(R) ? tt(R) : "tokenize" in R ? tt([R]) : Fe(R);
        function Fe(ge) {
          return Xn;
          function Xn(_t) {
            const un = _t !== null && ge[_t],
              cn = _t !== null && ge.null,
              ti = [
                ...(Array.isArray(un) ? un : un ? [un] : []),
                ...(Array.isArray(cn) ? cn : cn ? [cn] : []),
              ];
            return tt(ti)(_t);
          }
        }
        function tt(ge) {
          return (me = ge), (De = 0), ge.length === 0 ? he : m(ge[De]);
        }
        function m(ge) {
          return Xn;
          function Xn(_t) {
            return (
              (p = O()),
              (et = ge),
              ge.partial || (u.currentConstruct = ge),
              ge.name && u.parser.constructs.disable.null.includes(ge.name)
                ? Pt()
                : ge.tokenize.call(
                    I ? Object.assign(Object.create(u), I) : u,
                    l,
                    Me,
                    Pt
                  )(_t)
            );
          }
        }
        function Me(ge) {
          return C(et, p), D;
        }
        function Pt(ge) {
          return p.restore(), ++De < me.length ? m(me[De]) : he;
        }
      }
    }
    function V(C, I) {
      C.resolveAll && !s.includes(C) && s.push(C),
        C.resolve &&
          Ve(u.events, I, u.events.length - I, C.resolve(u.events.slice(I), u)),
        C.resolveTo && (u.events = C.resolveTo(u.events, u));
    }
    function O() {
      const C = g(),
        I = u.previous,
        L = u.currentConstruct,
        R = u.events.length,
        D = Array.from(o);
      return { from: R, restore: he };
      function he() {
        (r = C),
          (u.previous = I),
          (u.currentConstruct = L),
          (u.events.length = R),
          (o = D),
          j();
      }
    }
    function j() {
      r.line in i &&
        r.column < 2 &&
        ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
    }
  }
  function mm(t, e) {
    const n = e.start._index,
      r = e.start._bufferIndex,
      i = e.end._index,
      s = e.end._bufferIndex;
    let a;
    if (n === i) a = [t[n].slice(r, s)];
    else {
      if (((a = t.slice(n, i)), r > -1)) {
        const o = a[0];
        typeof o == "string" ? (a[0] = o.slice(r)) : a.shift();
      }
      s > 0 && a.push(t[i].slice(0, s));
    }
    return a;
  }
  function gm(t, e) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < t.length; ) {
      const s = t[n];
      let a;
      if (typeof s == "string") a = s;
      else
        switch (s) {
          case -5: {
            a = "\r";
            break;
          }
          case -4: {
            a = `
`;
            break;
          }
          case -3: {
            a = `\r
`;
            break;
          }
          case -2: {
            a = e ? " " : "	";
            break;
          }
          case -1: {
            if (!e && i) continue;
            a = " ";
            break;
          }
          default:
            a = String.fromCharCode(s);
        }
      (i = s === -2), r.push(a);
    }
    return r.join("");
  }
  function _m(t) {
    const r = {
      constructs: $f([fm, ...((t || {}).extensions || [])]),
      content: i(Uf),
      defined: [],
      document: i(qf),
      flow: i(om),
      lazy: {},
      string: i(cm),
      text: i(hm),
    };
    return r;
    function i(s) {
      return a;
      function a(o) {
        return pm(r, s, o);
      }
    }
  }
  function ym(t) {
    for (; !Pu(t); );
    return t;
  }
  const Nu = /[\0\t\n\r]/g;
  function wm() {
    let t = 1,
      e = "",
      n = !0,
      r;
    return i;
    function i(s, a, o) {
      const l = [];
      let u, c, h, f, d;
      for (
        s =
          e +
          (typeof s == "string"
            ? s.toString()
            : new TextDecoder(a || void 0).decode(s)),
          h = 0,
          e = "",
          n && (s.charCodeAt(0) === 65279 && h++, (n = void 0));
        h < s.length;

      ) {
        if (
          ((Nu.lastIndex = h),
          (u = Nu.exec(s)),
          (f = u && u.index !== void 0 ? u.index : s.length),
          (d = s.charCodeAt(f)),
          !u)
        ) {
          e = s.slice(h);
          break;
        }
        if (d === 10 && h === f && r) l.push(-3), (r = void 0);
        else
          switch (
            (r && (l.push(-5), (r = void 0)),
            h < f && (l.push(s.slice(h, f)), (t += f - h)),
            d)
          ) {
            case 0: {
              l.push(65533), t++;
              break;
            }
            case 9: {
              for (c = Math.ceil(t / 4) * 4, l.push(-2); t++ < c; ) l.push(-1);
              break;
            }
            case 10: {
              l.push(-4), (t = 1);
              break;
            }
            default:
              (r = !0), (t = 1);
          }
        h = f + 1;
      }
      return o && (r && l.push(-5), e && l.push(e), l.push(null)), l;
    }
  }
  const bm =
    /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function vm(t) {
    return t.replace(bm, xm);
  }
  function xm(t, e, n) {
    if (e) return e;
    if (n.charCodeAt(0) === 35) {
      const i = n.charCodeAt(1),
        s = i === 120 || i === 88;
      return wu(n.slice(s ? 2 : 1), s ? 16 : 10);
    }
    return Rs(n) || t;
  }
  const Du = {}.hasOwnProperty;
  function km(t, e, n) {
    return (
      typeof e != "string" && ((n = e), (e = void 0)),
      Sm(n)(ym(_m(n).document().write(wm()(t, e, !0))))
    );
  }
  function Sm(t) {
    const e = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong",
      ],
      enter: {
        autolink: s(rh),
        autolinkProtocol: O,
        autolinkEmail: O,
        atxHeading: s(eh),
        blockQuote: s(cn),
        characterEscape: O,
        characterReference: O,
        codeFenced: s(ti),
        codeFencedFenceInfo: a,
        codeFencedFenceMeta: a,
        codeIndented: s(ti, a),
        codeText: s(nw, a),
        codeTextData: O,
        data: O,
        codeFlowValue: O,
        definition: s(rw),
        definitionDestinationString: a,
        definitionLabelString: a,
        definitionTitleString: a,
        emphasis: s(iw),
        hardBreakEscape: s(th),
        hardBreakTrailing: s(th),
        htmlFlow: s(nh, a),
        htmlFlowData: O,
        htmlText: s(nh, a),
        htmlTextData: O,
        image: s(sw),
        label: a,
        link: s(rh),
        listItem: s(aw),
        listItemValue: f,
        listOrdered: s(ih, h),
        listUnordered: s(ih),
        paragraph: s(ow),
        reference: m,
        referenceString: a,
        resourceDestinationString: a,
        resourceTitleString: a,
        setextHeading: s(eh),
        strong: s(lw),
        thematicBreak: s(cw),
      },
      exit: {
        atxHeading: l(),
        atxHeadingSequence: P,
        autolink: l(),
        autolinkEmail: un,
        autolinkProtocol: _t,
        blockQuote: l(),
        characterEscapeValue: j,
        characterReferenceMarkerHexadecimal: Pt,
        characterReferenceMarkerNumeric: Pt,
        characterReferenceValue: ge,
        characterReference: Xn,
        codeFenced: l(y),
        codeFencedFence: _,
        codeFencedFenceInfo: d,
        codeFencedFenceMeta: g,
        codeFlowValue: j,
        codeIndented: l(b),
        codeText: l(D),
        codeTextData: j,
        data: j,
        definition: l(),
        definitionDestinationString: S,
        definitionLabelString: w,
        definitionTitleString: x,
        emphasis: l(),
        hardBreakEscape: l(I),
        hardBreakTrailing: l(I),
        htmlFlow: l(L),
        htmlFlowData: j,
        htmlText: l(R),
        htmlTextData: j,
        image: l(me),
        label: et,
        labelText: De,
        lineEnding: C,
        link: l(he),
        listItem: l(),
        listOrdered: l(),
        listUnordered: l(),
        paragraph: l(),
        referenceString: Me,
        resourceDestinationString: p,
        resourceTitleString: Fe,
        resource: tt,
        setextHeading: l(V),
        setextHeadingLineSequence: T,
        setextHeadingText: v,
        strong: l(),
        thematicBreak: l(),
      },
    };
    Fu(e, (t || {}).mdastExtensions || []);
    const n = {};
    return r;
    function r(k) {
      let A = { type: "root", children: [] };
      const B = {
          stack: [A],
          tokenStack: [],
          config: e,
          enter: o,
          exit: u,
          buffer: a,
          resume: c,
          data: n,
        },
        J = [];
      let Q = -1;
      for (; ++Q < k.length; )
        if (k[Q][1].type === "listOrdered" || k[Q][1].type === "listUnordered")
          if (k[Q][0] === "enter") J.push(Q);
          else {
            const Be = J.pop();
            Q = i(k, Be, Q);
          }
      for (Q = -1; ++Q < k.length; ) {
        const Be = e[k[Q][0]];
        Du.call(Be, k[Q][1].type) &&
          Be[k[Q][1].type].call(
            Object.assign({ sliceSerialize: k[Q][2].sliceSerialize }, B),
            k[Q][1]
          );
      }
      if (B.tokenStack.length > 0) {
        const Be = B.tokenStack[B.tokenStack.length - 1];
        (Be[1] || Mu).call(B, void 0, Be[0]);
      }
      for (
        A.position = {
          start: ht(
            k.length > 0 ? k[0][1].start : { line: 1, column: 1, offset: 0 }
          ),
          end: ht(
            k.length > 0
              ? k[k.length - 2][1].end
              : { line: 1, column: 1, offset: 0 }
          ),
        },
          Q = -1;
        ++Q < e.transforms.length;

      )
        A = e.transforms[Q](A) || A;
      return A;
    }
    function i(k, A, B) {
      let J = A - 1,
        Q = -1,
        Be = !1,
        Tt,
        nt,
        Qn,
        Yn;
      for (; ++J <= B; ) {
        const Ie = k[J];
        switch (Ie[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            Ie[0] === "enter" ? Q++ : Q--, (Yn = void 0);
            break;
          }
          case "lineEndingBlank": {
            Ie[0] === "enter" &&
              (Tt && !Yn && !Q && !Qn && (Qn = J), (Yn = void 0));
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Yn = void 0;
        }
        if (
          (!Q && Ie[0] === "enter" && Ie[1].type === "listItemPrefix") ||
          (Q === -1 &&
            Ie[0] === "exit" &&
            (Ie[1].type === "listUnordered" || Ie[1].type === "listOrdered"))
        ) {
          if (Tt) {
            let hn = J;
            for (nt = void 0; hn--; ) {
              const rt = k[hn];
              if (
                rt[1].type === "lineEnding" ||
                rt[1].type === "lineEndingBlank"
              ) {
                if (rt[0] === "exit") continue;
                nt && ((k[nt][1].type = "lineEndingBlank"), (Be = !0)),
                  (rt[1].type = "lineEnding"),
                  (nt = hn);
              } else if (
                !(
                  rt[1].type === "linePrefix" ||
                  rt[1].type === "blockQuotePrefix" ||
                  rt[1].type === "blockQuotePrefixWhitespace" ||
                  rt[1].type === "blockQuoteMarker" ||
                  rt[1].type === "listItemIndent"
                )
              )
                break;
            }
            Qn && (!nt || Qn < nt) && (Tt._spread = !0),
              (Tt.end = Object.assign({}, nt ? k[nt][1].start : Ie[1].end)),
              k.splice(nt || J, 0, ["exit", Tt, Ie[2]]),
              J++,
              B++;
          }
          if (Ie[1].type === "listItemPrefix") {
            const hn = {
              type: "listItem",
              _spread: !1,
              start: Object.assign({}, Ie[1].start),
              end: void 0,
            };
            (Tt = hn),
              k.splice(J, 0, ["enter", hn, Ie[2]]),
              J++,
              B++,
              (Qn = void 0),
              (Yn = !0);
          }
        }
      }
      return (k[A][1]._spread = Be), B;
    }
    function s(k, A) {
      return B;
      function B(J) {
        o.call(this, k(J), J), A && A.call(this, J);
      }
    }
    function a() {
      this.stack.push({ type: "fragment", children: [] });
    }
    function o(k, A, B) {
      this.stack[this.stack.length - 1].children.push(k),
        this.stack.push(k),
        this.tokenStack.push([A, B || void 0]),
        (k.position = { start: ht(A.start), end: void 0 });
    }
    function l(k) {
      return A;
      function A(B) {
        k && k.call(this, B), u.call(this, B);
      }
    }
    function u(k, A) {
      const B = this.stack.pop(),
        J = this.tokenStack.pop();
      if (J)
        J[0].type !== k.type &&
          (A ? A.call(this, k, J[0]) : (J[1] || Mu).call(this, k, J[0]));
      else
        throw new Error(
          "Cannot close `" +
            k.type +
            "` (" +
            $n({ start: k.start, end: k.end }) +
            "): it’s not open"
        );
      B.position.end = ht(k.end);
    }
    function c() {
      return Rf(this.stack.pop());
    }
    function h() {
      this.data.expectingFirstListItemValue = !0;
    }
    function f(k) {
      if (this.data.expectingFirstListItemValue) {
        const A = this.stack[this.stack.length - 2];
        (A.start = Number.parseInt(this.sliceSerialize(k), 10)),
          (this.data.expectingFirstListItemValue = void 0);
      }
    }
    function d() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.lang = k;
    }
    function g() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.meta = k;
    }
    function _() {
      this.data.flowCodeInside ||
        (this.buffer(), (this.data.flowCodeInside = !0));
    }
    function y() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      (A.value = k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
        (this.data.flowCodeInside = void 0);
    }
    function b() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.value = k.replace(/(\r?\n|\r)$/g, "");
    }
    function w(k) {
      const A = this.resume(),
        B = this.stack[this.stack.length - 1];
      (B.label = A), (B.identifier = Jt(this.sliceSerialize(k)).toLowerCase());
    }
    function x() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.title = k;
    }
    function S() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.url = k;
    }
    function P(k) {
      const A = this.stack[this.stack.length - 1];
      if (!A.depth) {
        const B = this.sliceSerialize(k).length;
        A.depth = B;
      }
    }
    function v() {
      this.data.setextHeadingSlurpLineEnding = !0;
    }
    function T(k) {
      const A = this.stack[this.stack.length - 1];
      A.depth = this.sliceSerialize(k).codePointAt(0) === 61 ? 1 : 2;
    }
    function V() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function O(k) {
      const B = this.stack[this.stack.length - 1].children;
      let J = B[B.length - 1];
      (!J || J.type !== "text") &&
        ((J = uw()),
        (J.position = { start: ht(k.start), end: void 0 }),
        B.push(J)),
        this.stack.push(J);
    }
    function j(k) {
      const A = this.stack.pop();
      (A.value += this.sliceSerialize(k)), (A.position.end = ht(k.end));
    }
    function C(k) {
      const A = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const B = A.children[A.children.length - 1];
        (B.position.end = ht(k.end)), (this.data.atHardBreak = void 0);
        return;
      }
      !this.data.setextHeadingSlurpLineEnding &&
        e.canContainEols.includes(A.type) &&
        (O.call(this, k), j.call(this, k));
    }
    function I() {
      this.data.atHardBreak = !0;
    }
    function L() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.value = k;
    }
    function R() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.value = k;
    }
    function D() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.value = k;
    }
    function he() {
      const k = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const A = this.data.referenceType || "shortcut";
        (k.type += "Reference"),
          (k.referenceType = A),
          delete k.url,
          delete k.title;
      } else delete k.identifier, delete k.label;
      this.data.referenceType = void 0;
    }
    function me() {
      const k = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const A = this.data.referenceType || "shortcut";
        (k.type += "Reference"),
          (k.referenceType = A),
          delete k.url,
          delete k.title;
      } else delete k.identifier, delete k.label;
      this.data.referenceType = void 0;
    }
    function De(k) {
      const A = this.sliceSerialize(k),
        B = this.stack[this.stack.length - 2];
      (B.label = vm(A)), (B.identifier = Jt(A).toLowerCase());
    }
    function et() {
      const k = this.stack[this.stack.length - 1],
        A = this.resume(),
        B = this.stack[this.stack.length - 1];
      if (((this.data.inReference = !0), B.type === "link")) {
        const J = k.children;
        B.children = J;
      } else B.alt = A;
    }
    function p() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.url = k;
    }
    function Fe() {
      const k = this.resume(),
        A = this.stack[this.stack.length - 1];
      A.title = k;
    }
    function tt() {
      this.data.inReference = void 0;
    }
    function m() {
      this.data.referenceType = "collapsed";
    }
    function Me(k) {
      const A = this.resume(),
        B = this.stack[this.stack.length - 1];
      (B.label = A),
        (B.identifier = Jt(this.sliceSerialize(k)).toLowerCase()),
        (this.data.referenceType = "full");
    }
    function Pt(k) {
      this.data.characterReferenceType = k.type;
    }
    function ge(k) {
      const A = this.sliceSerialize(k),
        B = this.data.characterReferenceType;
      let J;
      B
        ? ((J = wu(A, B === "characterReferenceMarkerNumeric" ? 10 : 16)),
          (this.data.characterReferenceType = void 0))
        : (J = Rs(A));
      const Q = this.stack[this.stack.length - 1];
      Q.value += J;
    }
    function Xn(k) {
      const A = this.stack.pop();
      A.position.end = ht(k.end);
    }
    function _t(k) {
      j.call(this, k);
      const A = this.stack[this.stack.length - 1];
      A.url = this.sliceSerialize(k);
    }
    function un(k) {
      j.call(this, k);
      const A = this.stack[this.stack.length - 1];
      A.url = "mailto:" + this.sliceSerialize(k);
    }
    function cn() {
      return { type: "blockquote", children: [] };
    }
    function ti() {
      return { type: "code", lang: null, meta: null, value: "" };
    }
    function nw() {
      return { type: "inlineCode", value: "" };
    }
    function rw() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: "",
      };
    }
    function iw() {
      return { type: "emphasis", children: [] };
    }
    function eh() {
      return { type: "heading", depth: 0, children: [] };
    }
    function th() {
      return { type: "break" };
    }
    function nh() {
      return { type: "html", value: "" };
    }
    function sw() {
      return { type: "image", title: null, url: "", alt: null };
    }
    function rh() {
      return { type: "link", title: null, url: "", children: [] };
    }
    function ih(k) {
      return {
        type: "list",
        ordered: k.type === "listOrdered",
        start: null,
        spread: k._spread,
        children: [],
      };
    }
    function aw(k) {
      return {
        type: "listItem",
        spread: k._spread,
        checked: null,
        children: [],
      };
    }
    function ow() {
      return { type: "paragraph", children: [] };
    }
    function lw() {
      return { type: "strong", children: [] };
    }
    function uw() {
      return { type: "text", value: "" };
    }
    function cw() {
      return { type: "thematicBreak" };
    }
  }
  function ht(t) {
    return { line: t.line, column: t.column, offset: t.offset };
  }
  function Fu(t, e) {
    let n = -1;
    for (; ++n < e.length; ) {
      const r = e[n];
      Array.isArray(r) ? Fu(t, r) : Em(t, r);
    }
  }
  function Em(t, e) {
    let n;
    for (n in e)
      if (Du.call(e, n))
        switch (n) {
          case "canContainEols": {
            const r = e[n];
            r && t[n].push(...r);
            break;
          }
          case "transforms": {
            const r = e[n];
            r && t[n].push(...r);
            break;
          }
          case "enter":
          case "exit": {
            const r = e[n];
            r && Object.assign(t[n], r);
            break;
          }
        }
  }
  function Mu(t, e) {
    throw t
      ? new Error(
          "Cannot close `" +
            t.type +
            "` (" +
            $n({ start: t.start, end: t.end }) +
            "): a different token (`" +
            e.type +
            "`, " +
            $n({ start: e.start, end: e.end }) +
            ") is open"
        )
      : new Error(
          "Cannot close document, a token (`" +
            e.type +
            "`, " +
            $n({ start: e.start, end: e.end }) +
            ") is still open"
        );
  }
  function Cm(t) {
    const e = this;
    e.parser = n;
    function n(r) {
      return km(r, {
        ...e.data("settings"),
        ...t,
        extensions: e.data("micromarkExtensions") || [],
        mdastExtensions: e.data("fromMarkdownExtensions") || [],
      });
    }
  }
  function Am(t, e) {
    const n = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: t.wrap(t.all(e), !0),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Pm(t, e) {
    const n = { type: "element", tagName: "br", properties: {}, children: [] };
    return (
      t.patch(e, n),
      [
        t.applyData(e, n),
        {
          type: "text",
          value: `
`,
        },
      ]
    );
  }
  function Tm(t, e) {
    const n = e.value
        ? e.value +
          `
`
        : "",
      r = {};
    e.lang && (r.className = ["language-" + e.lang]);
    let i = {
      type: "element",
      tagName: "code",
      properties: r,
      children: [{ type: "text", value: n }],
    };
    return (
      e.meta && (i.data = { meta: e.meta }),
      t.patch(e, i),
      (i = t.applyData(e, i)),
      (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
      t.patch(e, i),
      i
    );
  }
  function Im(t, e) {
    const n = {
      type: "element",
      tagName: "del",
      properties: {},
      children: t.all(e),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Rm(t, e) {
    const n = {
      type: "element",
      tagName: "em",
      properties: {},
      children: t.all(e),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Om(t, e) {
    const n =
        typeof t.options.clobberPrefix == "string"
          ? t.options.clobberPrefix
          : "user-content-",
      r = String(e.identifier).toUpperCase(),
      i = Kt(r.toLowerCase()),
      s = t.footnoteOrder.indexOf(r);
    let a,
      o = t.footnoteCounts.get(r);
    o === void 0
      ? ((o = 0), t.footnoteOrder.push(r), (a = t.footnoteOrder.length))
      : (a = s + 1),
      (o += 1),
      t.footnoteCounts.set(r, o);
    const l = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + n + "fn-" + i,
        id: n + "fnref-" + i + (o > 1 ? "-" + o : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: ["footnote-label"],
      },
      children: [{ type: "text", value: String(a) }],
    };
    t.patch(e, l);
    const u = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [l],
    };
    return t.patch(e, u), t.applyData(e, u);
  }
  function $m(t, e) {
    const n = {
      type: "element",
      tagName: "h" + e.depth,
      properties: {},
      children: t.all(e),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Lm(t, e) {
    if (t.options.allowDangerousHtml) {
      const n = { type: "raw", value: e.value };
      return t.patch(e, n), t.applyData(e, n);
    }
  }
  function Bu(t, e) {
    const n = e.referenceType;
    let r = "]";
    if (
      (n === "collapsed"
        ? (r += "[]")
        : n === "full" && (r += "[" + (e.label || e.identifier) + "]"),
      e.type === "imageReference")
    )
      return [{ type: "text", value: "![" + e.alt + r }];
    const i = t.all(e),
      s = i[0];
    s && s.type === "text"
      ? (s.value = "[" + s.value)
      : i.unshift({ type: "text", value: "[" });
    const a = i[i.length - 1];
    return (
      a && a.type === "text"
        ? (a.value += r)
        : i.push({ type: "text", value: r }),
      i
    );
  }
  function jm(t, e) {
    const n = String(e.identifier).toUpperCase(),
      r = t.definitionById.get(n);
    if (!r) return Bu(t, e);
    const i = { src: Kt(r.url || ""), alt: e.alt };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const s = { type: "element", tagName: "img", properties: i, children: [] };
    return t.patch(e, s), t.applyData(e, s);
  }
  function Nm(t, e) {
    const n = { src: Kt(e.url) };
    e.alt !== null && e.alt !== void 0 && (n.alt = e.alt),
      e.title !== null && e.title !== void 0 && (n.title = e.title);
    const r = { type: "element", tagName: "img", properties: n, children: [] };
    return t.patch(e, r), t.applyData(e, r);
  }
  function Dm(t, e) {
    const n = { type: "text", value: e.value.replace(/\r?\n|\r/g, " ") };
    t.patch(e, n);
    const r = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [n],
    };
    return t.patch(e, r), t.applyData(e, r);
  }
  function Fm(t, e) {
    const n = String(e.identifier).toUpperCase(),
      r = t.definitionById.get(n);
    if (!r) return Bu(t, e);
    const i = { href: Kt(r.url || "") };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const s = {
      type: "element",
      tagName: "a",
      properties: i,
      children: t.all(e),
    };
    return t.patch(e, s), t.applyData(e, s);
  }
  function Mm(t, e) {
    const n = { href: Kt(e.url) };
    e.title !== null && e.title !== void 0 && (n.title = e.title);
    const r = {
      type: "element",
      tagName: "a",
      properties: n,
      children: t.all(e),
    };
    return t.patch(e, r), t.applyData(e, r);
  }
  function Bm(t, e, n) {
    const r = t.all(e),
      i = n ? Um(n) : Uu(e),
      s = {},
      a = [];
    if (typeof e.checked == "boolean") {
      const c = r[0];
      let h;
      c && c.type === "element" && c.tagName === "p"
        ? (h = c)
        : ((h = {
            type: "element",
            tagName: "p",
            properties: {},
            children: [],
          }),
          r.unshift(h)),
        h.children.length > 0 &&
          h.children.unshift({ type: "text", value: " " }),
        h.children.unshift({
          type: "element",
          tagName: "input",
          properties: { type: "checkbox", checked: e.checked, disabled: !0 },
          children: [],
        }),
        (s.className = ["task-list-item"]);
    }
    let o = -1;
    for (; ++o < r.length; ) {
      const c = r[o];
      (i || o !== 0 || c.type !== "element" || c.tagName !== "p") &&
        a.push({
          type: "text",
          value: `
`,
        }),
        c.type === "element" && c.tagName === "p" && !i
          ? a.push(...c.children)
          : a.push(c);
    }
    const l = r[r.length - 1];
    l &&
      (i || l.type !== "element" || l.tagName !== "p") &&
      a.push({
        type: "text",
        value: `
`,
      });
    const u = { type: "element", tagName: "li", properties: s, children: a };
    return t.patch(e, u), t.applyData(e, u);
  }
  function Um(t) {
    let e = !1;
    if (t.type === "list") {
      e = t.spread || !1;
      const n = t.children;
      let r = -1;
      for (; !e && ++r < n.length; ) e = Uu(n[r]);
    }
    return e;
  }
  function Uu(t) {
    const e = t.spread;
    return e ?? t.children.length > 1;
  }
  function zm(t, e) {
    const n = {},
      r = t.all(e);
    let i = -1;
    for (
      typeof e.start == "number" && e.start !== 1 && (n.start = e.start);
      ++i < r.length;

    ) {
      const a = r[i];
      if (
        a.type === "element" &&
        a.tagName === "li" &&
        a.properties &&
        Array.isArray(a.properties.className) &&
        a.properties.className.includes("task-list-item")
      ) {
        n.className = ["contains-task-list"];
        break;
      }
    }
    const s = {
      type: "element",
      tagName: e.ordered ? "ol" : "ul",
      properties: n,
      children: t.wrap(r, !0),
    };
    return t.patch(e, s), t.applyData(e, s);
  }
  function qm(t, e) {
    const n = {
      type: "element",
      tagName: "p",
      properties: {},
      children: t.all(e),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Hm(t, e) {
    const n = { type: "root", children: t.wrap(t.all(e)) };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Vm(t, e) {
    const n = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: t.all(e),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Wm(t, e) {
    const n = t.all(e),
      r = n.shift(),
      i = [];
    if (r) {
      const a = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: t.wrap([r], !0),
      };
      t.patch(e.children[0], a), i.push(a);
    }
    if (n.length > 0) {
      const a = {
          type: "element",
          tagName: "tbody",
          properties: {},
          children: t.wrap(n, !0),
        },
        o = vs(e.children[1]),
        l = Dl(e.children[e.children.length - 1]);
      o && l && (a.position = { start: o, end: l }), i.push(a);
    }
    const s = {
      type: "element",
      tagName: "table",
      properties: {},
      children: t.wrap(i, !0),
    };
    return t.patch(e, s), t.applyData(e, s);
  }
  function Jm(t, e, n) {
    const r = n ? n.children : void 0,
      s = (r ? r.indexOf(e) : 1) === 0 ? "th" : "td",
      a = n && n.type === "table" ? n.align : void 0,
      o = a ? a.length : e.children.length;
    let l = -1;
    const u = [];
    for (; ++l < o; ) {
      const h = e.children[l],
        f = {},
        d = a ? a[l] : void 0;
      d && (f.align = d);
      let g = { type: "element", tagName: s, properties: f, children: [] };
      h && ((g.children = t.all(h)), t.patch(h, g), (g = t.applyData(h, g))),
        u.push(g);
    }
    const c = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: t.wrap(u, !0),
    };
    return t.patch(e, c), t.applyData(e, c);
  }
  function Km(t, e) {
    const n = {
      type: "element",
      tagName: "td",
      properties: {},
      children: t.all(e),
    };
    return t.patch(e, n), t.applyData(e, n);
  }
  const zu = 9,
    qu = 32;
  function Gm(t) {
    const e = String(t),
      n = /\r?\n|\r/g;
    let r = n.exec(e),
      i = 0;
    const s = [];
    for (; r; )
      s.push(Hu(e.slice(i, r.index), i > 0, !0), r[0]),
        (i = r.index + r[0].length),
        (r = n.exec(e));
    return s.push(Hu(e.slice(i), i > 0, !1)), s.join("");
  }
  function Hu(t, e, n) {
    let r = 0,
      i = t.length;
    if (e) {
      let s = t.codePointAt(r);
      for (; s === zu || s === qu; ) r++, (s = t.codePointAt(r));
    }
    if (n) {
      let s = t.codePointAt(i - 1);
      for (; s === zu || s === qu; ) i--, (s = t.codePointAt(i - 1));
    }
    return i > r ? t.slice(r, i) : "";
  }
  function Xm(t, e) {
    const n = { type: "text", value: Gm(String(e.value)) };
    return t.patch(e, n), t.applyData(e, n);
  }
  function Qm(t, e) {
    const n = { type: "element", tagName: "hr", properties: {}, children: [] };
    return t.patch(e, n), t.applyData(e, n);
  }
  const Ym = {
    blockquote: Am,
    break: Pm,
    code: Tm,
    delete: Im,
    emphasis: Rm,
    footnoteReference: Om,
    heading: $m,
    html: Lm,
    imageReference: jm,
    image: Nm,
    inlineCode: Dm,
    linkReference: Fm,
    link: Mm,
    listItem: Bm,
    list: zm,
    paragraph: qm,
    root: Hm,
    strong: Vm,
    table: Wm,
    tableCell: Km,
    tableRow: Jm,
    text: Xm,
    thematicBreak: Qm,
    toml: Ur,
    yaml: Ur,
    definition: Ur,
    footnoteDefinition: Ur,
  };
  function Ur() {}
  const Vu = -1,
    zr = 0,
    Mn = 1,
    qr = 2,
    Ms = 3,
    Bs = 4,
    Us = 5,
    zs = 6,
    Wu = 7,
    Ju = 8,
    Ku = typeof self == "object" ? self : globalThis,
    Zm = (t, e) => {
      const n = (i, s) => (t.set(s, i), i),
        r = (i) => {
          if (t.has(i)) return t.get(i);
          const [s, a] = e[i];
          switch (s) {
            case zr:
            case Vu:
              return n(a, i);
            case Mn: {
              const o = n([], i);
              for (const l of a) o.push(r(l));
              return o;
            }
            case qr: {
              const o = n({}, i);
              for (const [l, u] of a) o[r(l)] = r(u);
              return o;
            }
            case Ms:
              return n(new Date(a), i);
            case Bs: {
              const { source: o, flags: l } = a;
              return n(new RegExp(o, l), i);
            }
            case Us: {
              const o = n(new Map(), i);
              for (const [l, u] of a) o.set(r(l), r(u));
              return o;
            }
            case zs: {
              const o = n(new Set(), i);
              for (const l of a) o.add(r(l));
              return o;
            }
            case Wu: {
              const { name: o, message: l } = a;
              return n(new Ku[o](l), i);
            }
            case Ju:
              return n(BigInt(a), i);
            case "BigInt":
              return n(Object(BigInt(a)), i);
            case "ArrayBuffer":
              return n(new Uint8Array(a).buffer, a);
            case "DataView": {
              const { buffer: o } = new Uint8Array(a);
              return n(new DataView(o), a);
            }
          }
          return n(new Ku[s](a), i);
        };
      return r;
    },
    Gu = (t) => Zm(new Map(), t)(0),
    Gt = "",
    { toString: eg } = {},
    { keys: tg } = Object,
    Bn = (t) => {
      const e = typeof t;
      if (e !== "object" || !t) return [zr, e];
      const n = eg.call(t).slice(8, -1);
      switch (n) {
        case "Array":
          return [Mn, Gt];
        case "Object":
          return [qr, Gt];
        case "Date":
          return [Ms, Gt];
        case "RegExp":
          return [Bs, Gt];
        case "Map":
          return [Us, Gt];
        case "Set":
          return [zs, Gt];
        case "DataView":
          return [Mn, n];
      }
      return n.includes("Array")
        ? [Mn, n]
        : n.includes("Error")
        ? [Wu, n]
        : [qr, n];
    },
    Hr = ([t, e]) => t === zr && (e === "function" || e === "symbol"),
    ng = (t, e, n, r) => {
      const i = (a, o) => {
          const l = r.push(a) - 1;
          return n.set(o, l), l;
        },
        s = (a) => {
          if (n.has(a)) return n.get(a);
          let [o, l] = Bn(a);
          switch (o) {
            case zr: {
              let c = a;
              switch (l) {
                case "bigint":
                  (o = Ju), (c = a.toString());
                  break;
                case "function":
                case "symbol":
                  if (t) throw new TypeError("unable to serialize " + l);
                  c = null;
                  break;
                case "undefined":
                  return i([Vu], a);
              }
              return i([o, c], a);
            }
            case Mn: {
              if (l) {
                let f = a;
                return (
                  l === "DataView"
                    ? (f = new Uint8Array(a.buffer))
                    : l === "ArrayBuffer" && (f = new Uint8Array(a)),
                  i([l, [...f]], a)
                );
              }
              const c = [],
                h = i([o, c], a);
              for (const f of a) c.push(s(f));
              return h;
            }
            case qr: {
              if (l)
                switch (l) {
                  case "BigInt":
                    return i([l, a.toString()], a);
                  case "Boolean":
                  case "Number":
                  case "String":
                    return i([l, a.valueOf()], a);
                }
              if (e && "toJSON" in a) return s(a.toJSON());
              const c = [],
                h = i([o, c], a);
              for (const f of tg(a))
                (t || !Hr(Bn(a[f]))) && c.push([s(f), s(a[f])]);
              return h;
            }
            case Ms:
              return i([o, a.toISOString()], a);
            case Bs: {
              const { source: c, flags: h } = a;
              return i([o, { source: c, flags: h }], a);
            }
            case Us: {
              const c = [],
                h = i([o, c], a);
              for (const [f, d] of a)
                (t || !(Hr(Bn(f)) || Hr(Bn(d)))) && c.push([s(f), s(d)]);
              return h;
            }
            case zs: {
              const c = [],
                h = i([o, c], a);
              for (const f of a) (t || !Hr(Bn(f))) && c.push(s(f));
              return h;
            }
          }
          const { message: u } = a;
          return i([o, { name: l, message: u }], a);
        };
      return s;
    },
    Xu = (t, { json: e, lossy: n } = {}) => {
      const r = [];
      return ng(!(e || n), !!e, new Map(), r)(t), r;
    },
    Vr =
      typeof structuredClone == "function"
        ? (t, e) =>
            e && ("json" in e || "lossy" in e)
              ? Gu(Xu(t, e))
              : structuredClone(t)
        : (t, e) => Gu(Xu(t, e));
  function rg(t, e) {
    const n = [{ type: "text", value: "↩" }];
    return (
      e > 1 &&
        n.push({
          type: "element",
          tagName: "sup",
          properties: {},
          children: [{ type: "text", value: String(e) }],
        }),
      n
    );
  }
  function ig(t, e) {
    return "Back to reference " + (t + 1) + (e > 1 ? "-" + e : "");
  }
  function sg(t) {
    const e =
        typeof t.options.clobberPrefix == "string"
          ? t.options.clobberPrefix
          : "user-content-",
      n = t.options.footnoteBackContent || rg,
      r = t.options.footnoteBackLabel || ig,
      i = t.options.footnoteLabel || "Footnotes",
      s = t.options.footnoteLabelTagName || "h2",
      a = t.options.footnoteLabelProperties || { className: ["sr-only"] },
      o = [];
    let l = -1;
    for (; ++l < t.footnoteOrder.length; ) {
      const u = t.footnoteById.get(t.footnoteOrder[l]);
      if (!u) continue;
      const c = t.all(u),
        h = String(u.identifier).toUpperCase(),
        f = Kt(h.toLowerCase());
      let d = 0;
      const g = [],
        _ = t.footnoteCounts.get(h);
      for (; _ !== void 0 && ++d <= _; ) {
        g.length > 0 && g.push({ type: "text", value: " " });
        let w = typeof n == "string" ? n : n(l, d);
        typeof w == "string" && (w = { type: "text", value: w }),
          g.push({
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + e + "fnref-" + f + (d > 1 ? "-" + d : ""),
              dataFootnoteBackref: "",
              ariaLabel: typeof r == "string" ? r : r(l, d),
              className: ["data-footnote-backref"],
            },
            children: Array.isArray(w) ? w : [w],
          });
      }
      const y = c[c.length - 1];
      if (y && y.type === "element" && y.tagName === "p") {
        const w = y.children[y.children.length - 1];
        w && w.type === "text"
          ? (w.value += " ")
          : y.children.push({ type: "text", value: " " }),
          y.children.push(...g);
      } else c.push(...g);
      const b = {
        type: "element",
        tagName: "li",
        properties: { id: e + "fn-" + f },
        children: t.wrap(c, !0),
      };
      t.patch(u, b), o.push(b);
    }
    if (o.length !== 0)
      return {
        type: "element",
        tagName: "section",
        properties: { dataFootnotes: !0, className: ["footnotes"] },
        children: [
          {
            type: "element",
            tagName: s,
            properties: { ...Vr(a), id: "footnote-label" },
            children: [{ type: "text", value: i }],
          },
          {
            type: "text",
            value: `
`,
          },
          {
            type: "element",
            tagName: "ol",
            properties: {},
            children: t.wrap(o, !0),
          },
          {
            type: "text",
            value: `
`,
          },
        ],
      };
  }
  const Qu = function (t) {
    if (t == null) return ug;
    if (typeof t == "function") return Wr(t);
    if (typeof t == "object") return Array.isArray(t) ? ag(t) : og(t);
    if (typeof t == "string") return lg(t);
    throw new Error("Expected function, string, or object as test");
  };
  function ag(t) {
    const e = [];
    let n = -1;
    for (; ++n < t.length; ) e[n] = Qu(t[n]);
    return Wr(r);
    function r(...i) {
      let s = -1;
      for (; ++s < e.length; ) if (e[s].apply(this, i)) return !0;
      return !1;
    }
  }
  function og(t) {
    const e = t;
    return Wr(n);
    function n(r) {
      const i = r;
      let s;
      for (s in t) if (i[s] !== e[s]) return !1;
      return !0;
    }
  }
  function lg(t) {
    return Wr(e);
    function e(n) {
      return n && n.type === t;
    }
  }
  function Wr(t) {
    return e;
    function e(n, r, i) {
      return !!(
        cg(n) && t.call(this, n, typeof r == "number" ? r : void 0, i || void 0)
      );
    }
  }
  function ug() {
    return !0;
  }
  function cg(t) {
    return t !== null && typeof t == "object" && "type" in t;
  }
  function kw(t) {
    return t;
  }
  const Yu = [],
    hg = !0,
    Zu = !1,
    dg = "skip";
  function fg(t, e, n, r) {
    let i;
    typeof e == "function" && typeof n != "function"
      ? ((r = n), (n = e))
      : (i = e);
    const s = Qu(i),
      a = r ? -1 : 1;
    o(t, void 0, [])();
    function o(l, u, c) {
      const h = l && typeof l == "object" ? l : {};
      if (typeof h.type == "string") {
        const d =
          typeof h.tagName == "string"
            ? h.tagName
            : typeof h.name == "string"
            ? h.name
            : void 0;
        Object.defineProperty(f, "name", {
          value: "node (" + (l.type + (d ? "<" + d + ">" : "")) + ")",
        });
      }
      return f;
      function f() {
        let d = Yu,
          g,
          _,
          y;
        if (
          (!e || s(l, u, c[c.length - 1] || void 0)) &&
          ((d = pg(n(l, c))), d[0] === Zu)
        )
          return d;
        if ("children" in l && l.children) {
          const b = l;
          if (b.children && d[0] !== dg)
            for (
              _ = (r ? b.children.length : -1) + a, y = c.concat(b);
              _ > -1 && _ < b.children.length;

            ) {
              const w = b.children[_];
              if (((g = o(w, _, y)()), g[0] === Zu)) return g;
              _ = typeof g[1] == "number" ? g[1] : _ + a;
            }
        }
        return d;
      }
    }
  }
  function pg(t) {
    return Array.isArray(t)
      ? t
      : typeof t == "number"
      ? [hg, t]
      : t == null
      ? Yu
      : [t];
  }
  function ec(t, e, n, r) {
    let i, s, a;
    typeof e == "function"
      ? ((s = void 0), (a = e), (i = n))
      : ((s = e), (a = n), (i = r)),
      fg(t, s, o, i);
    function o(l, u) {
      const c = u[u.length - 1],
        h = c ? c.children.indexOf(l) : void 0;
      return a(l, h, c);
    }
  }
  const qs = {}.hasOwnProperty,
    mg = {};
  function gg(t, e) {
    const n = e || mg,
      r = new Map(),
      i = new Map(),
      s = new Map(),
      a = { ...Ym, ...n.handlers },
      o = {
        all: u,
        applyData: yg,
        definitionById: r,
        footnoteById: i,
        footnoteCounts: s,
        footnoteOrder: [],
        handlers: a,
        one: l,
        options: n,
        patch: _g,
        wrap: bg,
      };
    return (
      ec(t, function (c) {
        if (c.type === "definition" || c.type === "footnoteDefinition") {
          const h = c.type === "definition" ? r : i,
            f = String(c.identifier).toUpperCase();
          h.has(f) || h.set(f, c);
        }
      }),
      o
    );
    function l(c, h) {
      const f = c.type,
        d = o.handlers[f];
      if (qs.call(o.handlers, f) && d) return d(o, c, h);
      if (o.options.passThrough && o.options.passThrough.includes(f)) {
        if ("children" in c) {
          const { children: _, ...y } = c,
            b = Vr(y);
          return (b.children = o.all(c)), b;
        }
        return Vr(c);
      }
      return (o.options.unknownHandler || wg)(o, c, h);
    }
    function u(c) {
      const h = [];
      if ("children" in c) {
        const f = c.children;
        let d = -1;
        for (; ++d < f.length; ) {
          const g = o.one(f[d], c);
          if (g) {
            if (
              d &&
              f[d - 1].type === "break" &&
              (!Array.isArray(g) &&
                g.type === "text" &&
                (g.value = tc(g.value)),
              !Array.isArray(g) && g.type === "element")
            ) {
              const _ = g.children[0];
              _ && _.type === "text" && (_.value = tc(_.value));
            }
            Array.isArray(g) ? h.push(...g) : h.push(g);
          }
        }
      }
      return h;
    }
  }
  function _g(t, e) {
    t.position && (e.position = Vd(t));
  }
  function yg(t, e) {
    let n = e;
    if (t && t.data) {
      const r = t.data.hName,
        i = t.data.hChildren,
        s = t.data.hProperties;
      if (typeof r == "string")
        if (n.type === "element") n.tagName = r;
        else {
          const a = "children" in n ? n.children : [n];
          n = { type: "element", tagName: r, properties: {}, children: a };
        }
      n.type === "element" && s && Object.assign(n.properties, Vr(s)),
        "children" in n &&
          n.children &&
          i !== null &&
          i !== void 0 &&
          (n.children = i);
    }
    return n;
  }
  function wg(t, e) {
    const n = e.data || {},
      r =
        "value" in e && !(qs.call(n, "hProperties") || qs.call(n, "hChildren"))
          ? { type: "text", value: e.value }
          : {
              type: "element",
              tagName: "div",
              properties: {},
              children: t.all(e),
            };
    return t.patch(e, r), t.applyData(e, r);
  }
  function bg(t, e) {
    const n = [];
    let r = -1;
    for (
      e &&
      n.push({
        type: "text",
        value: `
`,
      });
      ++r < t.length;

    )
      r &&
        n.push({
          type: "text",
          value: `
`,
        }),
        n.push(t[r]);
    return (
      e &&
        t.length > 0 &&
        n.push({
          type: "text",
          value: `
`,
        }),
      n
    );
  }
  function tc(t) {
    let e = 0,
      n = t.charCodeAt(e);
    for (; n === 9 || n === 32; ) e++, (n = t.charCodeAt(e));
    return t.slice(e);
  }
  function nc(t, e) {
    const n = gg(t, e),
      r = n.one(t, void 0),
      i = sg(n),
      s = Array.isArray(r)
        ? { type: "root", children: r }
        : r || { type: "root", children: [] };
    return (
      i &&
        s.children.push(
          {
            type: "text",
            value: `
`,
          },
          i
        ),
      s
    );
  }
  function vg(t, e) {
    return t && "run" in t
      ? async function (n, r) {
          const i = nc(n, { file: r, ...e });
          await t.run(i, r);
        }
      : function (n, r) {
          return nc(n, { file: r, ...(t || e) });
        };
  }
  function rc(t) {
    if (t) throw t;
  }
  var Hs, ic;
  function xg() {
    if (ic) return Hs;
    ic = 1;
    var t = Object.prototype.hasOwnProperty,
      e = Object.prototype.toString,
      n = Object.defineProperty,
      r = Object.getOwnPropertyDescriptor,
      i = function (u) {
        return typeof Array.isArray == "function"
          ? Array.isArray(u)
          : e.call(u) === "[object Array]";
      },
      s = function (u) {
        if (!u || e.call(u) !== "[object Object]") return !1;
        var c = t.call(u, "constructor"),
          h =
            u.constructor &&
            u.constructor.prototype &&
            t.call(u.constructor.prototype, "isPrototypeOf");
        if (u.constructor && !c && !h) return !1;
        var f;
        for (f in u);
        return typeof f > "u" || t.call(u, f);
      },
      a = function (u, c) {
        n && c.name === "__proto__"
          ? n(u, c.name, {
              enumerable: !0,
              configurable: !0,
              value: c.newValue,
              writable: !0,
            })
          : (u[c.name] = c.newValue);
      },
      o = function (u, c) {
        if (c === "__proto__")
          if (t.call(u, c)) {
            if (r) return r(u, c).value;
          } else return;
        return u[c];
      };
    return (
      (Hs = function l() {
        var u,
          c,
          h,
          f,
          d,
          g,
          _ = arguments[0],
          y = 1,
          b = arguments.length,
          w = !1;
        for (
          typeof _ == "boolean" && ((w = _), (_ = arguments[1] || {}), (y = 2)),
            (_ == null || (typeof _ != "object" && typeof _ != "function")) &&
              (_ = {});
          y < b;
          ++y
        )
          if (((u = arguments[y]), u != null))
            for (c in u)
              (h = o(_, c)),
                (f = o(u, c)),
                _ !== f &&
                  (w && f && (s(f) || (d = i(f)))
                    ? (d
                        ? ((d = !1), (g = h && i(h) ? h : []))
                        : (g = h && s(h) ? h : {}),
                      a(_, { name: c, newValue: l(w, g, f) }))
                    : typeof f < "u" && a(_, { name: c, newValue: f }));
        return _;
      }),
      Hs
    );
  }
  var kg = xg();
  const Vs = jr(kg);
  function Ws(t) {
    if (typeof t != "object" || t === null) return !1;
    const e = Object.getPrototypeOf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  }
  function Sg() {
    const t = [],
      e = { run: n, use: r };
    return e;
    function n(...i) {
      let s = -1;
      const a = i.pop();
      if (typeof a != "function")
        throw new TypeError("Expected function as last argument, not " + a);
      o(null, ...i);
      function o(l, ...u) {
        const c = t[++s];
        let h = -1;
        if (l) {
          a(l);
          return;
        }
        for (; ++h < i.length; )
          (u[h] === null || u[h] === void 0) && (u[h] = i[h]);
        (i = u), c ? Eg(c, o)(...u) : a(null, ...u);
      }
    }
    function r(i) {
      if (typeof i != "function")
        throw new TypeError("Expected `middelware` to be a function, not " + i);
      return t.push(i), e;
    }
  }
  function Eg(t, e) {
    let n;
    return r;
    function r(...a) {
      const o = t.length > a.length;
      let l;
      o && a.push(i);
      try {
        l = t.apply(this, a);
      } catch (u) {
        const c = u;
        if (o && n) throw c;
        return i(c);
      }
      o ||
        (l && l.then && typeof l.then == "function"
          ? l.then(s, i)
          : l instanceof Error
          ? i(l)
          : s(l));
    }
    function i(a, ...o) {
      n || ((n = !0), e(a, ...o));
    }
    function s(a) {
      i(null, a);
    }
  }
  const Je = { basename: Cg, dirname: Ag, extname: Pg, join: Tg, sep: "/" };
  function Cg(t, e) {
    if (e !== void 0 && typeof e != "string")
      throw new TypeError('"ext" argument must be a string');
    Un(t);
    let n = 0,
      r = -1,
      i = t.length,
      s;
    if (e === void 0 || e.length === 0 || e.length > t.length) {
      for (; i--; )
        if (t.codePointAt(i) === 47) {
          if (s) {
            n = i + 1;
            break;
          }
        } else r < 0 && ((s = !0), (r = i + 1));
      return r < 0 ? "" : t.slice(n, r);
    }
    if (e === t) return "";
    let a = -1,
      o = e.length - 1;
    for (; i--; )
      if (t.codePointAt(i) === 47) {
        if (s) {
          n = i + 1;
          break;
        }
      } else
        a < 0 && ((s = !0), (a = i + 1)),
          o > -1 &&
            (t.codePointAt(i) === e.codePointAt(o--)
              ? o < 0 && (r = i)
              : ((o = -1), (r = a)));
    return n === r ? (r = a) : r < 0 && (r = t.length), t.slice(n, r);
  }
  function Ag(t) {
    if ((Un(t), t.length === 0)) return ".";
    let e = -1,
      n = t.length,
      r;
    for (; --n; )
      if (t.codePointAt(n) === 47) {
        if (r) {
          e = n;
          break;
        }
      } else r || (r = !0);
    return e < 0
      ? t.codePointAt(0) === 47
        ? "/"
        : "."
      : e === 1 && t.codePointAt(0) === 47
      ? "//"
      : t.slice(0, e);
  }
  function Pg(t) {
    Un(t);
    let e = t.length,
      n = -1,
      r = 0,
      i = -1,
      s = 0,
      a;
    for (; e--; ) {
      const o = t.codePointAt(e);
      if (o === 47) {
        if (a) {
          r = e + 1;
          break;
        }
        continue;
      }
      n < 0 && ((a = !0), (n = e + 1)),
        o === 46 ? (i < 0 ? (i = e) : s !== 1 && (s = 1)) : i > -1 && (s = -1);
    }
    return i < 0 || n < 0 || s === 0 || (s === 1 && i === n - 1 && i === r + 1)
      ? ""
      : t.slice(i, n);
  }
  function Tg(...t) {
    let e = -1,
      n;
    for (; ++e < t.length; )
      Un(t[e]), t[e] && (n = n === void 0 ? t[e] : n + "/" + t[e]);
    return n === void 0 ? "." : Ig(n);
  }
  function Ig(t) {
    Un(t);
    const e = t.codePointAt(0) === 47;
    let n = Rg(t, !e);
    return (
      n.length === 0 && !e && (n = "."),
      n.length > 0 && t.codePointAt(t.length - 1) === 47 && (n += "/"),
      e ? "/" + n : n
    );
  }
  function Rg(t, e) {
    let n = "",
      r = 0,
      i = -1,
      s = 0,
      a = -1,
      o,
      l;
    for (; ++a <= t.length; ) {
      if (a < t.length) o = t.codePointAt(a);
      else {
        if (o === 47) break;
        o = 47;
      }
      if (o === 47) {
        if (!(i === a - 1 || s === 1))
          if (i !== a - 1 && s === 2) {
            if (
              n.length < 2 ||
              r !== 2 ||
              n.codePointAt(n.length - 1) !== 46 ||
              n.codePointAt(n.length - 2) !== 46
            ) {
              if (n.length > 2) {
                if (((l = n.lastIndexOf("/")), l !== n.length - 1)) {
                  l < 0
                    ? ((n = ""), (r = 0))
                    : ((n = n.slice(0, l)),
                      (r = n.length - 1 - n.lastIndexOf("/"))),
                    (i = a),
                    (s = 0);
                  continue;
                }
              } else if (n.length > 0) {
                (n = ""), (r = 0), (i = a), (s = 0);
                continue;
              }
            }
            e && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
          } else
            n.length > 0
              ? (n += "/" + t.slice(i + 1, a))
              : (n = t.slice(i + 1, a)),
              (r = a - i - 1);
        (i = a), (s = 0);
      } else o === 46 && s > -1 ? s++ : (s = -1);
    }
    return n;
  }
  function Un(t) {
    if (typeof t != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(t)
      );
  }
  const Og = { cwd: $g };
  function $g() {
    return "/";
  }
  function Js(t) {
    return !!(
      t !== null &&
      typeof t == "object" &&
      "href" in t &&
      t.href &&
      "protocol" in t &&
      t.protocol &&
      t.auth === void 0
    );
  }
  function Lg(t) {
    if (typeof t == "string") t = new URL(t);
    else if (!Js(t)) {
      const e = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' +
          t +
          "`"
      );
      throw ((e.code = "ERR_INVALID_ARG_TYPE"), e);
    }
    if (t.protocol !== "file:") {
      const e = new TypeError("The URL must be of scheme file");
      throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
    }
    return jg(t);
  }
  function jg(t) {
    if (t.hostname !== "") {
      const r = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
    }
    const e = t.pathname;
    let n = -1;
    for (; ++n < e.length; )
      if (e.codePointAt(n) === 37 && e.codePointAt(n + 1) === 50) {
        const r = e.codePointAt(n + 2);
        if (r === 70 || r === 102) {
          const i = new TypeError(
            "File URL path must not include encoded / characters"
          );
          throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
        }
      }
    return decodeURIComponent(e);
  }
  const Ks = ["history", "path", "basename", "stem", "extname", "dirname"];
  class sc {
    constructor(e) {
      let n;
      e
        ? Js(e)
          ? (n = { path: e })
          : typeof e == "string" || Ng(e)
          ? (n = { value: e })
          : (n = e)
        : (n = {}),
        (this.cwd = "cwd" in n ? "" : Og.cwd()),
        (this.data = {}),
        (this.history = []),
        (this.messages = []),
        this.value,
        this.map,
        this.result,
        this.stored;
      let r = -1;
      for (; ++r < Ks.length; ) {
        const s = Ks[r];
        s in n &&
          n[s] !== void 0 &&
          n[s] !== null &&
          (this[s] = s === "history" ? [...n[s]] : n[s]);
      }
      let i;
      for (i in n) Ks.includes(i) || (this[i] = n[i]);
    }
    get basename() {
      return typeof this.path == "string" ? Je.basename(this.path) : void 0;
    }
    set basename(e) {
      Xs(e, "basename"),
        Gs(e, "basename"),
        (this.path = Je.join(this.dirname || "", e));
    }
    get dirname() {
      return typeof this.path == "string" ? Je.dirname(this.path) : void 0;
    }
    set dirname(e) {
      ac(this.basename, "dirname"),
        (this.path = Je.join(e || "", this.basename));
    }
    get extname() {
      return typeof this.path == "string" ? Je.extname(this.path) : void 0;
    }
    set extname(e) {
      if ((Gs(e, "extname"), ac(this.dirname, "extname"), e)) {
        if (e.codePointAt(0) !== 46)
          throw new Error("`extname` must start with `.`");
        if (e.includes(".", 1))
          throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = Je.join(this.dirname, this.stem + (e || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(e) {
      Js(e) && (e = Lg(e)),
        Xs(e, "path"),
        this.path !== e && this.history.push(e);
    }
    get stem() {
      return typeof this.path == "string"
        ? Je.basename(this.path, this.extname)
        : void 0;
    }
    set stem(e) {
      Xs(e, "stem"),
        Gs(e, "stem"),
        (this.path = Je.join(this.dirname || "", e + (this.extname || "")));
    }
    fail(e, n, r) {
      const i = this.message(e, n, r);
      throw ((i.fatal = !0), i);
    }
    info(e, n, r) {
      const i = this.message(e, n, r);
      return (i.fatal = void 0), i;
    }
    message(e, n, r) {
      const i = new ye(e, n, r);
      return (
        this.path &&
          ((i.name = this.path + ":" + i.name), (i.file = this.path)),
        (i.fatal = !1),
        this.messages.push(i),
        i
      );
    }
    toString(e) {
      return this.value === void 0
        ? ""
        : typeof this.value == "string"
        ? this.value
        : new TextDecoder(e || void 0).decode(this.value);
    }
  }
  function Gs(t, e) {
    if (t && t.includes(Je.sep))
      throw new Error(
        "`" + e + "` cannot be a path: did not expect `" + Je.sep + "`"
      );
  }
  function Xs(t, e) {
    if (!t) throw new Error("`" + e + "` cannot be empty");
  }
  function ac(t, e) {
    if (!t)
      throw new Error("Setting `" + e + "` requires `path` to be set too");
  }
  function Ng(t) {
    return !!(
      t &&
      typeof t == "object" &&
      "byteLength" in t &&
      "byteOffset" in t
    );
  }
  const Dg = function (t) {
      const r = this.constructor.prototype,
        i = r[t],
        s = function () {
          return i.apply(s, arguments);
        };
      return Object.setPrototypeOf(s, r), s;
    },
    Fg = {}.hasOwnProperty;
  class Qs extends Dg {
    constructor() {
      super("copy"),
        (this.Compiler = void 0),
        (this.Parser = void 0),
        (this.attachers = []),
        (this.compiler = void 0),
        (this.freezeIndex = -1),
        (this.frozen = void 0),
        (this.namespace = {}),
        (this.parser = void 0),
        (this.transformers = Sg());
    }
    copy() {
      const e = new Qs();
      let n = -1;
      for (; ++n < this.attachers.length; ) {
        const r = this.attachers[n];
        e.use(...r);
      }
      return e.data(Vs(!0, {}, this.namespace)), e;
    }
    data(e, n) {
      return typeof e == "string"
        ? arguments.length === 2
          ? (ea("data", this.frozen), (this.namespace[e] = n), this)
          : (Fg.call(this.namespace, e) && this.namespace[e]) || void 0
        : e
        ? (ea("data", this.frozen), (this.namespace = e), this)
        : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const e = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [n, ...r] = this.attachers[this.freezeIndex];
        if (r[0] === !1) continue;
        r[0] === !0 && (r[0] = void 0);
        const i = n.call(e, ...r);
        typeof i == "function" && this.transformers.use(i);
      }
      return (
        (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
      );
    }
    parse(e) {
      this.freeze();
      const n = Jr(e),
        r = this.parser || this.Parser;
      return Ys("parse", r), r(String(n), n);
    }
    process(e, n) {
      const r = this;
      return (
        this.freeze(),
        Ys("process", this.parser || this.Parser),
        Zs("process", this.compiler || this.Compiler),
        n ? i(void 0, n) : new Promise(i)
      );
      function i(s, a) {
        const o = Jr(e),
          l = r.parse(o);
        r.run(l, o, function (c, h, f) {
          if (c || !h || !f) return u(c);
          const d = h,
            g = r.stringify(d, f);
          Ug(g) ? (f.value = g) : (f.result = g), u(c, f);
        });
        function u(c, h) {
          c || !h ? a(c) : s ? s(h) : n(void 0, h);
        }
      }
    }
    processSync(e) {
      let n = !1,
        r;
      return (
        this.freeze(),
        Ys("processSync", this.parser || this.Parser),
        Zs("processSync", this.compiler || this.Compiler),
        this.process(e, i),
        lc("processSync", "process", n),
        r
      );
      function i(s, a) {
        (n = !0), rc(s), (r = a);
      }
    }
    run(e, n, r) {
      oc(e), this.freeze();
      const i = this.transformers;
      return (
        !r && typeof n == "function" && ((r = n), (n = void 0)),
        r ? s(void 0, r) : new Promise(s)
      );
      function s(a, o) {
        const l = Jr(n);
        i.run(e, l, u);
        function u(c, h, f) {
          const d = h || e;
          c ? o(c) : a ? a(d) : r(void 0, d, f);
        }
      }
    }
    runSync(e, n) {
      let r = !1,
        i;
      return this.run(e, n, s), lc("runSync", "run", r), i;
      function s(a, o) {
        rc(a), (i = o), (r = !0);
      }
    }
    stringify(e, n) {
      this.freeze();
      const r = Jr(n),
        i = this.compiler || this.Compiler;
      return Zs("stringify", i), oc(e), i(e, r);
    }
    use(e, ...n) {
      const r = this.attachers,
        i = this.namespace;
      if ((ea("use", this.frozen), e != null))
        if (typeof e == "function") l(e, n);
        else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
        else throw new TypeError("Expected usable value, not `" + e + "`");
      return this;
      function s(u) {
        if (typeof u == "function") l(u, []);
        else if (typeof u == "object")
          if (Array.isArray(u)) {
            const [c, ...h] = u;
            l(c, h);
          } else a(u);
        else throw new TypeError("Expected usable value, not `" + u + "`");
      }
      function a(u) {
        if (!("plugins" in u) && !("settings" in u))
          throw new Error(
            "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
          );
        o(u.plugins),
          u.settings && (i.settings = Vs(!0, i.settings, u.settings));
      }
      function o(u) {
        let c = -1;
        if (u != null)
          if (Array.isArray(u))
            for (; ++c < u.length; ) {
              const h = u[c];
              s(h);
            }
          else
            throw new TypeError("Expected a list of plugins, not `" + u + "`");
      }
      function l(u, c) {
        let h = -1,
          f = -1;
        for (; ++h < r.length; )
          if (r[h][0] === u) {
            f = h;
            break;
          }
        if (f === -1) r.push([u, ...c]);
        else if (c.length > 0) {
          let [d, ...g] = c;
          const _ = r[f][1];
          Ws(_) && Ws(d) && (d = Vs(!0, _, d)), (r[f] = [u, d, ...g]);
        }
      }
    }
  }
  const Mg = new Qs().freeze();
  function Ys(t, e) {
    if (typeof e != "function")
      throw new TypeError("Cannot `" + t + "` without `parser`");
  }
  function Zs(t, e) {
    if (typeof e != "function")
      throw new TypeError("Cannot `" + t + "` without `compiler`");
  }
  function ea(t, e) {
    if (e)
      throw new Error(
        "Cannot call `" +
          t +
          "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
      );
  }
  function oc(t) {
    if (!Ws(t) || typeof t.type != "string")
      throw new TypeError("Expected node, got `" + t + "`");
  }
  function lc(t, e, n) {
    if (!n)
      throw new Error("`" + t + "` finished async. Use `" + e + "` instead");
  }
  function Jr(t) {
    return Bg(t) ? t : new sc(t);
  }
  function Bg(t) {
    return !!(t && typeof t == "object" && "message" in t && "messages" in t);
  }
  function Ug(t) {
    return typeof t == "string" || zg(t);
  }
  function zg(t) {
    return !!(
      t &&
      typeof t == "object" &&
      "byteLength" in t &&
      "byteOffset" in t
    );
  }
  const qg =
      "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    uc = [],
    cc = { allowDangerousHtml: !0 },
    Hg = /^(https?|ircs?|mailto|xmpp)$/i,
    Vg = [
      { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
      {
        from: "allowDangerousHtml",
        id: "remove-buggy-html-in-markdown-parser",
      },
      {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement",
      },
      {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements",
      },
      { from: "className", id: "remove-classname" },
      {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements",
      },
      { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
      { from: "includeElementIndex", id: "#remove-includeelementindex" },
      {
        from: "includeNodeIndex",
        id: "change-includenodeindex-to-includeelementindex",
      },
      { from: "linkTarget", id: "remove-linktarget" },
      {
        from: "plugins",
        id: "change-plugins-to-remarkplugins",
        to: "remarkPlugins",
      },
      { from: "rawSourcePos", id: "#remove-rawsourcepos" },
      {
        from: "renderers",
        id: "change-renderers-to-components",
        to: "components",
      },
      { from: "source", id: "change-source-to-children", to: "children" },
      { from: "sourcePos", id: "#remove-sourcepos" },
      {
        from: "transformImageUri",
        id: "#add-urltransform",
        to: "urlTransform",
      },
      { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
    ];
  function Wg(t) {
    const e = Jg(t),
      n = Kg(t);
    return Gg(e.runSync(e.parse(n), n), t);
  }
  function Jg(t) {
    const e = t.rehypePlugins || uc,
      n = t.remarkPlugins || uc,
      r = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...cc } : cc;
    return Mg().use(Cm).use(n).use(vg, r).use(e);
  }
  function Kg(t) {
    const e = t.children || "",
      n = new sc();
    return typeof e == "string" && (n.value = e), n;
  }
  function Gg(t, e) {
    const n = e.allowedElements,
      r = e.allowElement,
      i = e.components,
      s = e.disallowedElements,
      a = e.skipHtml,
      o = e.unwrapDisallowed,
      l = e.urlTransform || Xg;
    for (const c of Vg)
      Object.hasOwn(e, c.from) &&
        ("" +
          c.from +
          (c.to ? "use `" + c.to + "` instead" : "remove it") +
          qg +
          c.id,
        void 0);
    return (
      ec(t, u),
      Xd(t, {
        Fragment: wt,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: G,
        jsxs: G,
        passKeys: !0,
        passNode: !0,
      })
    );
    function u(c, h, f) {
      if (c.type === "raw" && f && typeof h == "number")
        return (
          a
            ? f.children.splice(h, 1)
            : (f.children[h] = { type: "text", value: c.value }),
          h
        );
      if (c.type === "element") {
        let d;
        for (d in Cs)
          if (Object.hasOwn(Cs, d) && Object.hasOwn(c.properties, d)) {
            const g = c.properties[d],
              _ = Cs[d];
            (_ === null || _.includes(c.tagName)) &&
              (c.properties[d] = l(String(g || ""), d, c));
          }
      }
      if (c.type === "element") {
        let d = n ? !n.includes(c.tagName) : s ? s.includes(c.tagName) : !1;
        if (
          (!d && r && typeof h == "number" && (d = !r(c, h, f)),
          d && f && typeof h == "number")
        )
          return (
            o && c.children
              ? f.children.splice(h, 1, ...c.children)
              : f.children.splice(h, 1),
            h
          );
      }
    }
  }
  function Xg(t) {
    const e = t.indexOf(":"),
      n = t.indexOf("?"),
      r = t.indexOf("#"),
      i = t.indexOf("/");
    return e === -1 ||
      (i !== -1 && e > i) ||
      (n !== -1 && e > n) ||
      (r !== -1 && e > r) ||
      Hg.test(t.slice(0, e))
      ? t
      : "";
  }
  function Qg({ site: t, productURL: e, openKey: n }) {
    const [r, i] = Nn([]),
      [s, a] = Nn(""),
      [o, l] = Nn([]),
      [u, c] = Nn(!1),
      [h, f] = Nn(!1),
      d = pf(null),
      g = wd(n),
      _ = () => {
        d.current && (d.current.scrollTop = d.current.scrollHeight);
      };
    Zl(() => {
      _();
    }, [r]),
      Zl(() => {
        u || (y(), c(!0));
      }, []);
    const y = async () => {
        const w = bd(t, e);
        f(!0);
        const x = await fs(g, o, w);
        if ((f(!1), x)) {
          const S = { role: "assistant", content: x };
          i((P) => [...P, S]),
            l((P) => [...P, { role: "user", content: w }, S]);
        }
      },
      b = async () => {
        if (!s.trim()) return;
        f(!0);
        const w = { role: "user", content: s };
        i((S) => [...S, w]), a("");
        const x = await fs(g, [...o, w], s);
        if ((f(!1), x)) {
          const S = { role: "assistant", content: x };
          i((P) => [...P, S]), l((P) => [...P, w, S]);
        }
      };
    return G("div", {
      className: "relative w-full  bg-white ",
      children: [
        G("div", {
          style: { scrollbarWidth: "thin" },
          className:
            "h-300 p-3 overflow-y-auto  border-b border-gray-200 chat-bubble",
          ref: d,
          children: [
            r.map((w, x) =>
              G(
                "div",
                {
                  className: `flex ${
                    w.role === "user" ? "justify-end" : "justify-start"
                  }`,
                  children: G("div", {
                    className: `p-2 rounded-md ${
                      w.role === "user" ? "bg-dark text-white" : "bg-gray-100"
                    }`,
                    style: {
                      maxWidth: "80%",
                      wordWrap: "break-word",
                      whiteSpace: "pre-wrap",
                    },
                    children: G(Wg, {
                      components: {
                        a: ({ ...S }) =>
                          G("a", {
                            ...S,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: S.children,
                          }),
                      },
                      children: w.content,
                    }),
                  }),
                },
                x
              )
            ),
            h &&
              G("div", {
                className:
                  "p-2 rounded-md w-fit bg-gray-100 text-left flex items-center space-x-2",
                children: [
                  G("div", { className: "dot-pulse" }),
                  G("div", { className: "dot-pulse" }),
                  G("div", { className: "dot-pulse" }),
                ],
              }),
          ],
        }),
        G("div", {
          className: "p-3 flex gap-3 items-center  chat-footer",
          children: [
            G("input", {
              onKeyDown: (w) => {
                w.key === "Enter" && b();
              },
              type: "text",
              value: s,
              onChange: (w) => a(w.target.value),
              placeholder: "Ask me anything about this product...",
              className: "flex-1 input-chat ",
            }),
            G("svg", {
              style: { cursor: "pointer" },
              xmlns: "http://www.w3.org/2000/svg",
              fill: "#000000",
              viewBox: "0 0 24 24",
              className: "w-6 h-6",
              onClick: b,
              children: [
                G("g", {
                  children: G("path", {
                    d: "M2,3v7.8L18,12L2,13.2V21l20-9L2,3z",
                  }),
                }),
                G("rect", { width: "24", height: "24", fill: "none" }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function Yg({ agentInfo: t }) {
    return G("div", {
      className: "border border-gray-200",
      children: [
        G("div", {
          className: "flex gap-2 border-b border-gray-200  chat-header",
          children: [
            G("div", {
              children: G("img", {
                className: "rounded-full",
                width: 40,
                src: t.image,
                alt: t.name,
              }),
            }),
            G("div", {
              children: [
                G("h3", {
                  style: { margin: 0 },
                  className: "font-bold",
                  children: t.name,
                }),
                G("p", {
                  style: { marginBottom: 0, marginTop: "5px" },
                  className: "text-sm text-gray-500",
                  children: t.description,
                }),
              ],
            }),
          ],
        }),
        G("div", {
          className: " my-1",
          children: G(Qg, {
            site: window.location.origin,
            productURL: window.location.href,
            openKey: t.openApiKey,
          }),
        }),
      ],
    });
  }
  const Zg = (t) => {
    let e;
    return (
      t
        ? (e = t)
        : typeof fetch > "u"
        ? (e = (...n) =>
            Promise.resolve()
              .then(() => nn)
              .then(({ default: r }) => r(...n)))
        : (e = fetch),
      (...n) => e(...n)
    );
  };
  class ta extends Error {
    constructor(e, n = "FunctionsError", r) {
      super(e), (this.name = n), (this.context = r);
    }
  }
  class e_ extends ta {
    constructor(e) {
      super(
        "Failed to send a request to the Edge Function",
        "FunctionsFetchError",
        e
      );
    }
  }
  class t_ extends ta {
    constructor(e) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
    }
  }
  class n_ extends ta {
    constructor(e) {
      super(
        "Edge Function returned a non-2xx status code",
        "FunctionsHttpError",
        e
      );
    }
  }
  var na;
  (function (t) {
    (t.Any = "any"),
      (t.ApNortheast1 = "ap-northeast-1"),
      (t.ApNortheast2 = "ap-northeast-2"),
      (t.ApSouth1 = "ap-south-1"),
      (t.ApSoutheast1 = "ap-southeast-1"),
      (t.ApSoutheast2 = "ap-southeast-2"),
      (t.CaCentral1 = "ca-central-1"),
      (t.EuCentral1 = "eu-central-1"),
      (t.EuWest1 = "eu-west-1"),
      (t.EuWest2 = "eu-west-2"),
      (t.EuWest3 = "eu-west-3"),
      (t.SaEast1 = "sa-east-1"),
      (t.UsEast1 = "us-east-1"),
      (t.UsWest1 = "us-west-1"),
      (t.UsWest2 = "us-west-2");
  })(na || (na = {}));
  var r_ = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  class i_ {
    constructor(
      e,
      { headers: n = {}, customFetch: r, region: i = na.Any } = {}
    ) {
      (this.url = e),
        (this.headers = n),
        (this.region = i),
        (this.fetch = Zg(r));
    }
    setAuth(e) {
      this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e, n = {}) {
      var r;
      return r_(this, void 0, void 0, function* () {
        try {
          const { headers: i, method: s, body: a } = n;
          let o = {},
            { region: l } = n;
          l || (l = this.region), l && l !== "any" && (o["x-region"] = l);
          let u;
          a &&
            ((i && !Object.prototype.hasOwnProperty.call(i, "Content-Type")) ||
              !i) &&
            ((typeof Blob < "u" && a instanceof Blob) ||
            a instanceof ArrayBuffer
              ? ((o["Content-Type"] = "application/octet-stream"), (u = a))
              : typeof a == "string"
              ? ((o["Content-Type"] = "text/plain"), (u = a))
              : typeof FormData < "u" && a instanceof FormData
              ? (u = a)
              : ((o["Content-Type"] = "application/json"),
                (u = JSON.stringify(a))));
          const c = yield this.fetch(`${this.url}/${e}`, {
              method: s || "POST",
              headers: Object.assign(
                Object.assign(Object.assign({}, o), this.headers),
                i
              ),
              body: u,
            }).catch((g) => {
              throw new e_(g);
            }),
            h = c.headers.get("x-relay-error");
          if (h && h === "true") throw new t_(c);
          if (!c.ok) throw new n_(c);
          let f = (
              (r = c.headers.get("Content-Type")) !== null && r !== void 0
                ? r
                : "text/plain"
            )
              .split(";")[0]
              .trim(),
            d;
          return (
            f === "application/json"
              ? (d = yield c.json())
              : f === "application/octet-stream"
              ? (d = yield c.blob())
              : f === "text/event-stream"
              ? (d = c)
              : f === "multipart/form-data"
              ? (d = yield c.formData())
              : (d = yield c.text()),
            { data: d, error: null }
          );
        } catch (i) {
          return { data: null, error: i };
        }
      });
    }
  }
  var ue = {},
    Xt = {},
    Qt = {},
    Yt = {},
    Zt = {},
    en = {},
    s_ = function () {
      if (typeof self < "u") return self;
      if (typeof window < "u") return window;
      if (typeof global < "u") return global;
      throw new Error("unable to locate global object");
    },
    tn = s_();
  const a_ = tn.fetch,
    hc = tn.fetch.bind(tn),
    dc = tn.Headers,
    o_ = tn.Request,
    l_ = tn.Response,
    nn = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Headers: dc,
          Request: o_,
          Response: l_,
          default: hc,
          fetch: a_,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    u_ = Fd(nn);
  var Kr = {},
    fc;
  function pc() {
    if (fc) return Kr;
    (fc = 1), Object.defineProperty(Kr, "__esModule", { value: !0 });
    class t extends Error {
      constructor(n) {
        super(n.message),
          (this.name = "PostgrestError"),
          (this.details = n.details),
          (this.hint = n.hint),
          (this.code = n.code);
      }
    }
    return (Kr.default = t), Kr;
  }
  var mc;
  function gc() {
    if (mc) return en;
    mc = 1;
    var t =
      (en && en.__importDefault) ||
      function (i) {
        return i && i.__esModule ? i : { default: i };
      };
    Object.defineProperty(en, "__esModule", { value: !0 });
    const e = t(u_),
      n = t(pc());
    class r {
      constructor(s) {
        (this.shouldThrowOnError = !1),
          (this.method = s.method),
          (this.url = s.url),
          (this.headers = s.headers),
          (this.schema = s.schema),
          (this.body = s.body),
          (this.shouldThrowOnError = s.shouldThrowOnError),
          (this.signal = s.signal),
          (this.isMaybeSingle = s.isMaybeSingle),
          s.fetch
            ? (this.fetch = s.fetch)
            : typeof fetch > "u"
            ? (this.fetch = e.default)
            : (this.fetch = fetch);
      }
      throwOnError() {
        return (this.shouldThrowOnError = !0), this;
      }
      setHeader(s, a) {
        return (
          (this.headers = Object.assign({}, this.headers)),
          (this.headers[s] = a),
          this
        );
      }
      then(s, a) {
        this.schema === void 0 ||
          (["GET", "HEAD"].includes(this.method)
            ? (this.headers["Accept-Profile"] = this.schema)
            : (this.headers["Content-Profile"] = this.schema)),
          this.method !== "GET" &&
            this.method !== "HEAD" &&
            (this.headers["Content-Type"] = "application/json");
        const o = this.fetch;
        let l = o(this.url.toString(), {
          method: this.method,
          headers: this.headers,
          body: JSON.stringify(this.body),
          signal: this.signal,
        }).then(async (u) => {
          var c, h, f;
          let d = null,
            g = null,
            _ = null,
            y = u.status,
            b = u.statusText;
          if (u.ok) {
            if (this.method !== "HEAD") {
              const P = await u.text();
              P === "" ||
                (this.headers.Accept === "text/csv" ||
                (this.headers.Accept &&
                  this.headers.Accept.includes(
                    "application/vnd.pgrst.plan+text"
                  ))
                  ? (g = P)
                  : (g = JSON.parse(P)));
            }
            const x =
                (c = this.headers.Prefer) === null || c === void 0
                  ? void 0
                  : c.match(/count=(exact|planned|estimated)/),
              S =
                (h = u.headers.get("content-range")) === null || h === void 0
                  ? void 0
                  : h.split("/");
            x && S && S.length > 1 && (_ = parseInt(S[1])),
              this.isMaybeSingle &&
                this.method === "GET" &&
                Array.isArray(g) &&
                (g.length > 1
                  ? ((d = {
                      code: "PGRST116",
                      details: `Results contain ${g.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                      hint: null,
                      message:
                        "JSON object requested, multiple (or no) rows returned",
                    }),
                    (g = null),
                    (_ = null),
                    (y = 406),
                    (b = "Not Acceptable"))
                  : g.length === 1
                  ? (g = g[0])
                  : (g = null));
          } else {
            const x = await u.text();
            try {
              (d = JSON.parse(x)),
                Array.isArray(d) &&
                  u.status === 404 &&
                  ((g = []), (d = null), (y = 200), (b = "OK"));
            } catch {
              u.status === 404 && x === ""
                ? ((y = 204), (b = "No Content"))
                : (d = { message: x });
            }
            if (
              (d &&
                this.isMaybeSingle &&
                !(
                  (f = d == null ? void 0 : d.details) === null || f === void 0
                ) &&
                f.includes("0 rows") &&
                ((d = null), (y = 200), (b = "OK")),
              d && this.shouldThrowOnError)
            )
              throw new n.default(d);
          }
          return { error: d, data: g, count: _, status: y, statusText: b };
        });
        return (
          this.shouldThrowOnError ||
            (l = l.catch((u) => {
              var c, h, f;
              return {
                error: {
                  message: `${
                    (c = u == null ? void 0 : u.name) !== null && c !== void 0
                      ? c
                      : "FetchError"
                  }: ${u == null ? void 0 : u.message}`,
                  details: `${
                    (h = u == null ? void 0 : u.stack) !== null && h !== void 0
                      ? h
                      : ""
                  }`,
                  hint: "",
                  code: `${
                    (f = u == null ? void 0 : u.code) !== null && f !== void 0
                      ? f
                      : ""
                  }`,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              };
            })),
          l.then(s, a)
        );
      }
      returns() {
        return this;
      }
      overrideTypes() {
        return this;
      }
    }
    return (en.default = r), en;
  }
  var _c;
  function yc() {
    if (_c) return Zt;
    _c = 1;
    var t =
      (Zt && Zt.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
    Object.defineProperty(Zt, "__esModule", { value: !0 });
    const e = t(gc());
    class n extends e.default {
      select(i) {
        let s = !1;
        const a = (i ?? "*")
          .split("")
          .map((o) => (/\s/.test(o) && !s ? "" : (o === '"' && (s = !s), o)))
          .join("");
        return (
          this.url.searchParams.set("select", a),
          this.headers.Prefer && (this.headers.Prefer += ","),
          (this.headers.Prefer += "return=representation"),
          this
        );
      }
      order(
        i,
        {
          ascending: s = !0,
          nullsFirst: a,
          foreignTable: o,
          referencedTable: l = o,
        } = {}
      ) {
        const u = l ? `${l}.order` : "order",
          c = this.url.searchParams.get(u);
        return (
          this.url.searchParams.set(
            u,
            `${c ? `${c},` : ""}${i}.${s ? "asc" : "desc"}${
              a === void 0 ? "" : a ? ".nullsfirst" : ".nullslast"
            }`
          ),
          this
        );
      }
      limit(i, { foreignTable: s, referencedTable: a = s } = {}) {
        const o = typeof a > "u" ? "limit" : `${a}.limit`;
        return this.url.searchParams.set(o, `${i}`), this;
      }
      range(i, s, { foreignTable: a, referencedTable: o = a } = {}) {
        const l = typeof o > "u" ? "offset" : `${o}.offset`,
          u = typeof o > "u" ? "limit" : `${o}.limit`;
        return (
          this.url.searchParams.set(l, `${i}`),
          this.url.searchParams.set(u, `${s - i + 1}`),
          this
        );
      }
      abortSignal(i) {
        return (this.signal = i), this;
      }
      single() {
        return (
          (this.headers.Accept = "application/vnd.pgrst.object+json"), this
        );
      }
      maybeSingle() {
        return (
          this.method === "GET"
            ? (this.headers.Accept = "application/json")
            : (this.headers.Accept = "application/vnd.pgrst.object+json"),
          (this.isMaybeSingle = !0),
          this
        );
      }
      csv() {
        return (this.headers.Accept = "text/csv"), this;
      }
      geojson() {
        return (this.headers.Accept = "application/geo+json"), this;
      }
      explain({
        analyze: i = !1,
        verbose: s = !1,
        settings: a = !1,
        buffers: o = !1,
        wal: l = !1,
        format: u = "text",
      } = {}) {
        var c;
        const h = [
            i ? "analyze" : null,
            s ? "verbose" : null,
            a ? "settings" : null,
            o ? "buffers" : null,
            l ? "wal" : null,
          ]
            .filter(Boolean)
            .join("|"),
          f =
            (c = this.headers.Accept) !== null && c !== void 0
              ? c
              : "application/json";
        return (
          (this.headers.Accept = `application/vnd.pgrst.plan+${u}; for="${f}"; options=${h};`),
          u === "json" ? this : this
        );
      }
      rollback() {
        var i;
        return (
          ((i = this.headers.Prefer) !== null && i !== void 0 ? i : "").trim()
            .length > 0
            ? (this.headers.Prefer += ",tx=rollback")
            : (this.headers.Prefer = "tx=rollback"),
          this
        );
      }
      returns() {
        return this;
      }
    }
    return (Zt.default = n), Zt;
  }
  var wc;
  function ra() {
    if (wc) return Yt;
    wc = 1;
    var t =
      (Yt && Yt.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
    Object.defineProperty(Yt, "__esModule", { value: !0 });
    const e = t(yc());
    class n extends e.default {
      eq(i, s) {
        return this.url.searchParams.append(i, `eq.${s}`), this;
      }
      neq(i, s) {
        return this.url.searchParams.append(i, `neq.${s}`), this;
      }
      gt(i, s) {
        return this.url.searchParams.append(i, `gt.${s}`), this;
      }
      gte(i, s) {
        return this.url.searchParams.append(i, `gte.${s}`), this;
      }
      lt(i, s) {
        return this.url.searchParams.append(i, `lt.${s}`), this;
      }
      lte(i, s) {
        return this.url.searchParams.append(i, `lte.${s}`), this;
      }
      like(i, s) {
        return this.url.searchParams.append(i, `like.${s}`), this;
      }
      likeAllOf(i, s) {
        return (
          this.url.searchParams.append(i, `like(all).{${s.join(",")}}`), this
        );
      }
      likeAnyOf(i, s) {
        return (
          this.url.searchParams.append(i, `like(any).{${s.join(",")}}`), this
        );
      }
      ilike(i, s) {
        return this.url.searchParams.append(i, `ilike.${s}`), this;
      }
      ilikeAllOf(i, s) {
        return (
          this.url.searchParams.append(i, `ilike(all).{${s.join(",")}}`), this
        );
      }
      ilikeAnyOf(i, s) {
        return (
          this.url.searchParams.append(i, `ilike(any).{${s.join(",")}}`), this
        );
      }
      is(i, s) {
        return this.url.searchParams.append(i, `is.${s}`), this;
      }
      in(i, s) {
        const a = Array.from(new Set(s))
          .map((o) =>
            typeof o == "string" && new RegExp("[,()]").test(o)
              ? `"${o}"`
              : `${o}`
          )
          .join(",");
        return this.url.searchParams.append(i, `in.(${a})`), this;
      }
      contains(i, s) {
        return (
          typeof s == "string"
            ? this.url.searchParams.append(i, `cs.${s}`)
            : Array.isArray(s)
            ? this.url.searchParams.append(i, `cs.{${s.join(",")}}`)
            : this.url.searchParams.append(i, `cs.${JSON.stringify(s)}`),
          this
        );
      }
      containedBy(i, s) {
        return (
          typeof s == "string"
            ? this.url.searchParams.append(i, `cd.${s}`)
            : Array.isArray(s)
            ? this.url.searchParams.append(i, `cd.{${s.join(",")}}`)
            : this.url.searchParams.append(i, `cd.${JSON.stringify(s)}`),
          this
        );
      }
      rangeGt(i, s) {
        return this.url.searchParams.append(i, `sr.${s}`), this;
      }
      rangeGte(i, s) {
        return this.url.searchParams.append(i, `nxl.${s}`), this;
      }
      rangeLt(i, s) {
        return this.url.searchParams.append(i, `sl.${s}`), this;
      }
      rangeLte(i, s) {
        return this.url.searchParams.append(i, `nxr.${s}`), this;
      }
      rangeAdjacent(i, s) {
        return this.url.searchParams.append(i, `adj.${s}`), this;
      }
      overlaps(i, s) {
        return (
          typeof s == "string"
            ? this.url.searchParams.append(i, `ov.${s}`)
            : this.url.searchParams.append(i, `ov.{${s.join(",")}}`),
          this
        );
      }
      textSearch(i, s, { config: a, type: o } = {}) {
        let l = "";
        o === "plain"
          ? (l = "pl")
          : o === "phrase"
          ? (l = "ph")
          : o === "websearch" && (l = "w");
        const u = a === void 0 ? "" : `(${a})`;
        return this.url.searchParams.append(i, `${l}fts${u}.${s}`), this;
      }
      match(i) {
        return (
          Object.entries(i).forEach(([s, a]) => {
            this.url.searchParams.append(s, `eq.${a}`);
          }),
          this
        );
      }
      not(i, s, a) {
        return this.url.searchParams.append(i, `not.${s}.${a}`), this;
      }
      or(i, { foreignTable: s, referencedTable: a = s } = {}) {
        const o = a ? `${a}.or` : "or";
        return this.url.searchParams.append(o, `(${i})`), this;
      }
      filter(i, s, a) {
        return this.url.searchParams.append(i, `${s}.${a}`), this;
      }
    }
    return (Yt.default = n), Yt;
  }
  var bc;
  function vc() {
    if (bc) return Qt;
    bc = 1;
    var t =
      (Qt && Qt.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
    Object.defineProperty(Qt, "__esModule", { value: !0 });
    const e = t(ra());
    class n {
      constructor(i, { headers: s = {}, schema: a, fetch: o }) {
        (this.url = i), (this.headers = s), (this.schema = a), (this.fetch = o);
      }
      select(i, { head: s = !1, count: a } = {}) {
        const o = s ? "HEAD" : "GET";
        let l = !1;
        const u = (i ?? "*")
          .split("")
          .map((c) => (/\s/.test(c) && !l ? "" : (c === '"' && (l = !l), c)))
          .join("");
        return (
          this.url.searchParams.set("select", u),
          a && (this.headers.Prefer = `count=${a}`),
          new e.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
      insert(i, { count: s, defaultToNull: a = !0 } = {}) {
        const o = "POST",
          l = [];
        if (
          (this.headers.Prefer && l.push(this.headers.Prefer),
          s && l.push(`count=${s}`),
          a || l.push("missing=default"),
          (this.headers.Prefer = l.join(",")),
          Array.isArray(i))
        ) {
          const u = i.reduce((c, h) => c.concat(Object.keys(h)), []);
          if (u.length > 0) {
            const c = [...new Set(u)].map((h) => `"${h}"`);
            this.url.searchParams.set("columns", c.join(","));
          }
        }
        return new e.default({
          method: o,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: i,
          fetch: this.fetch,
          allowEmpty: !1,
        });
      }
      upsert(
        i,
        {
          onConflict: s,
          ignoreDuplicates: a = !1,
          count: o,
          defaultToNull: l = !0,
        } = {}
      ) {
        const u = "POST",
          c = [`resolution=${a ? "ignore" : "merge"}-duplicates`];
        if (
          (s !== void 0 && this.url.searchParams.set("on_conflict", s),
          this.headers.Prefer && c.push(this.headers.Prefer),
          o && c.push(`count=${o}`),
          l || c.push("missing=default"),
          (this.headers.Prefer = c.join(",")),
          Array.isArray(i))
        ) {
          const h = i.reduce((f, d) => f.concat(Object.keys(d)), []);
          if (h.length > 0) {
            const f = [...new Set(h)].map((d) => `"${d}"`);
            this.url.searchParams.set("columns", f.join(","));
          }
        }
        return new e.default({
          method: u,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: i,
          fetch: this.fetch,
          allowEmpty: !1,
        });
      }
      update(i, { count: s } = {}) {
        const a = "PATCH",
          o = [];
        return (
          this.headers.Prefer && o.push(this.headers.Prefer),
          s && o.push(`count=${s}`),
          (this.headers.Prefer = o.join(",")),
          new e.default({
            method: a,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: i,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
      delete({ count: i } = {}) {
        const s = "DELETE",
          a = [];
        return (
          i && a.push(`count=${i}`),
          this.headers.Prefer && a.unshift(this.headers.Prefer),
          (this.headers.Prefer = a.join(",")),
          new e.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
    }
    return (Qt.default = n), Qt;
  }
  var zn = {},
    qn = {},
    xc;
  function c_() {
    return (
      xc ||
        ((xc = 1),
        Object.defineProperty(qn, "__esModule", { value: !0 }),
        (qn.version = void 0),
        (qn.version = "0.0.0-automated")),
      qn
    );
  }
  var kc;
  function h_() {
    if (kc) return zn;
    (kc = 1),
      Object.defineProperty(zn, "__esModule", { value: !0 }),
      (zn.DEFAULT_HEADERS = void 0);
    const t = c_();
    return (
      (zn.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${t.version}` }),
      zn
    );
  }
  var Sc;
  function d_() {
    if (Sc) return Xt;
    Sc = 1;
    var t =
      (Xt && Xt.__importDefault) ||
      function (s) {
        return s && s.__esModule ? s : { default: s };
      };
    Object.defineProperty(Xt, "__esModule", { value: !0 });
    const e = t(vc()),
      n = t(ra()),
      r = h_();
    class i {
      constructor(a, { headers: o = {}, schema: l, fetch: u } = {}) {
        (this.url = a),
          (this.headers = Object.assign(
            Object.assign({}, r.DEFAULT_HEADERS),
            o
          )),
          (this.schemaName = l),
          (this.fetch = u);
      }
      from(a) {
        const o = new URL(`${this.url}/${a}`);
        return new e.default(o, {
          headers: Object.assign({}, this.headers),
          schema: this.schemaName,
          fetch: this.fetch,
        });
      }
      schema(a) {
        return new i(this.url, {
          headers: this.headers,
          schema: a,
          fetch: this.fetch,
        });
      }
      rpc(a, o = {}, { head: l = !1, get: u = !1, count: c } = {}) {
        let h;
        const f = new URL(`${this.url}/rpc/${a}`);
        let d;
        l || u
          ? ((h = l ? "HEAD" : "GET"),
            Object.entries(o)
              .filter(([_, y]) => y !== void 0)
              .map(([_, y]) => [
                _,
                Array.isArray(y) ? `{${y.join(",")}}` : `${y}`,
              ])
              .forEach(([_, y]) => {
                f.searchParams.append(_, y);
              }))
          : ((h = "POST"), (d = o));
        const g = Object.assign({}, this.headers);
        return (
          c && (g.Prefer = `count=${c}`),
          new n.default({
            method: h,
            url: f,
            headers: g,
            schema: this.schemaName,
            body: d,
            fetch: this.fetch,
            allowEmpty: !1,
          })
        );
      }
    }
    return (Xt.default = i), Xt;
  }
  var Ec;
  function f_() {
    if (Ec) return ue;
    Ec = 1;
    var t =
      (ue && ue.__importDefault) ||
      function (o) {
        return o && o.__esModule ? o : { default: o };
      };
    Object.defineProperty(ue, "__esModule", { value: !0 }),
      (ue.PostgrestError =
        ue.PostgrestBuilder =
        ue.PostgrestTransformBuilder =
        ue.PostgrestFilterBuilder =
        ue.PostgrestQueryBuilder =
        ue.PostgrestClient =
          void 0);
    const e = t(d_());
    ue.PostgrestClient = e.default;
    const n = t(vc());
    ue.PostgrestQueryBuilder = n.default;
    const r = t(ra());
    ue.PostgrestFilterBuilder = r.default;
    const i = t(yc());
    ue.PostgrestTransformBuilder = i.default;
    const s = t(gc());
    ue.PostgrestBuilder = s.default;
    const a = t(pc());
    return (
      (ue.PostgrestError = a.default),
      (ue.default = {
        PostgrestClient: e.default,
        PostgrestQueryBuilder: n.default,
        PostgrestFilterBuilder: r.default,
        PostgrestTransformBuilder: i.default,
        PostgrestBuilder: s.default,
        PostgrestError: a.default,
      }),
      ue
    );
  }
  var p_ = f_();
  const m_ = jr(p_),
    {
      PostgrestClient: g_,
      PostgrestQueryBuilder: Sw,
      PostgrestFilterBuilder: Ew,
      PostgrestTransformBuilder: Cw,
      PostgrestBuilder: Aw,
      PostgrestError: Pw,
    } = m_,
    __ = { "X-Client-Info": "realtime-js/2.11.2" },
    y_ = "1.0.0",
    Cc = 1e4,
    w_ = 1e3;
  var rn;
  (function (t) {
    (t[(t.connecting = 0)] = "connecting"),
      (t[(t.open = 1)] = "open"),
      (t[(t.closing = 2)] = "closing"),
      (t[(t.closed = 3)] = "closed");
  })(rn || (rn = {}));
  var Te;
  (function (t) {
    (t.closed = "closed"),
      (t.errored = "errored"),
      (t.joined = "joined"),
      (t.joining = "joining"),
      (t.leaving = "leaving");
  })(Te || (Te = {}));
  var Ne;
  (function (t) {
    (t.close = "phx_close"),
      (t.error = "phx_error"),
      (t.join = "phx_join"),
      (t.reply = "phx_reply"),
      (t.leave = "phx_leave"),
      (t.access_token = "access_token");
  })(Ne || (Ne = {}));
  var ia;
  (function (t) {
    t.websocket = "websocket";
  })(ia || (ia = {}));
  var St;
  (function (t) {
    (t.Connecting = "connecting"),
      (t.Open = "open"),
      (t.Closing = "closing"),
      (t.Closed = "closed");
  })(St || (St = {}));
  class b_ {
    constructor() {
      this.HEADER_LENGTH = 1;
    }
    decode(e, n) {
      return e.constructor === ArrayBuffer
        ? n(this._binaryDecode(e))
        : n(typeof e == "string" ? JSON.parse(e) : {});
    }
    _binaryDecode(e) {
      const n = new DataView(e),
        r = new TextDecoder();
      return this._decodeBroadcast(e, n, r);
    }
    _decodeBroadcast(e, n, r) {
      const i = n.getUint8(1),
        s = n.getUint8(2);
      let a = this.HEADER_LENGTH + 2;
      const o = r.decode(e.slice(a, a + i));
      a = a + i;
      const l = r.decode(e.slice(a, a + s));
      a = a + s;
      const u = JSON.parse(r.decode(e.slice(a, e.byteLength)));
      return { ref: null, topic: o, event: l, payload: u };
    }
  }
  class Ac {
    constructor(e, n) {
      (this.callback = e),
        (this.timerCalc = n),
        (this.timer = void 0),
        (this.tries = 0),
        (this.callback = e),
        (this.timerCalc = n);
    }
    reset() {
      (this.tries = 0), clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer),
        (this.timer = setTimeout(() => {
          (this.tries = this.tries + 1), this.callback();
        }, this.timerCalc(this.tries + 1)));
    }
  }
  var ee;
  (function (t) {
    (t.abstime = "abstime"),
      (t.bool = "bool"),
      (t.date = "date"),
      (t.daterange = "daterange"),
      (t.float4 = "float4"),
      (t.float8 = "float8"),
      (t.int2 = "int2"),
      (t.int4 = "int4"),
      (t.int4range = "int4range"),
      (t.int8 = "int8"),
      (t.int8range = "int8range"),
      (t.json = "json"),
      (t.jsonb = "jsonb"),
      (t.money = "money"),
      (t.numeric = "numeric"),
      (t.oid = "oid"),
      (t.reltime = "reltime"),
      (t.text = "text"),
      (t.time = "time"),
      (t.timestamp = "timestamp"),
      (t.timestamptz = "timestamptz"),
      (t.timetz = "timetz"),
      (t.tsrange = "tsrange"),
      (t.tstzrange = "tstzrange");
  })(ee || (ee = {}));
  const Pc = (t, e, n = {}) => {
      var r;
      const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
      return Object.keys(e).reduce((s, a) => ((s[a] = v_(a, t, e, i)), s), {});
    },
    v_ = (t, e, n, r) => {
      const i = e.find((o) => o.name === t),
        s = i == null ? void 0 : i.type,
        a = n[t];
      return s && !r.includes(s) ? Tc(s, a) : sa(a);
    },
    Tc = (t, e) => {
      if (t.charAt(0) === "_") {
        const n = t.slice(1, t.length);
        return E_(e, n);
      }
      switch (t) {
        case ee.bool:
          return x_(e);
        case ee.float4:
        case ee.float8:
        case ee.int2:
        case ee.int4:
        case ee.int8:
        case ee.numeric:
        case ee.oid:
          return k_(e);
        case ee.json:
        case ee.jsonb:
          return S_(e);
        case ee.timestamp:
          return C_(e);
        case ee.abstime:
        case ee.date:
        case ee.daterange:
        case ee.int4range:
        case ee.int8range:
        case ee.money:
        case ee.reltime:
        case ee.text:
        case ee.time:
        case ee.timestamptz:
        case ee.timetz:
        case ee.tsrange:
        case ee.tstzrange:
          return sa(e);
        default:
          return sa(e);
      }
    },
    sa = (t) => t,
    x_ = (t) => {
      switch (t) {
        case "t":
          return !0;
        case "f":
          return !1;
        default:
          return t;
      }
    },
    k_ = (t) => {
      if (typeof t == "string") {
        const e = parseFloat(t);
        if (!Number.isNaN(e)) return e;
      }
      return t;
    },
    S_ = (t) => {
      if (typeof t == "string")
        try {
          return JSON.parse(t);
        } catch (e) {
          return console.log(`JSON parse error: ${e}`), t;
        }
      return t;
    },
    E_ = (t, e) => {
      if (typeof t != "string") return t;
      const n = t.length - 1,
        r = t[n];
      if (t[0] === "{" && r === "}") {
        let s;
        const a = t.slice(1, n);
        try {
          s = JSON.parse("[" + a + "]");
        } catch {
          s = a ? a.split(",") : [];
        }
        return s.map((o) => Tc(e, o));
      }
      return t;
    },
    C_ = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
    Ic = (t) => {
      let e = t;
      return (
        (e = e.replace(/^ws/i, "http")),
        (e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
        e.replace(/\/+$/, "")
      );
    };
  class aa {
    constructor(e, n, r = {}, i = Cc) {
      (this.channel = e),
        (this.event = n),
        (this.payload = r),
        (this.timeout = i),
        (this.sent = !1),
        (this.timeoutTimer = void 0),
        (this.ref = ""),
        (this.receivedResp = null),
        (this.recHooks = []),
        (this.refEvent = null);
    }
    resend(e) {
      (this.timeout = e),
        this._cancelRefEvent(),
        (this.ref = ""),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1),
        this.send();
    }
    send() {
      this._hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
          join_ref: this.channel._joinRef(),
        }));
    }
    updatePayload(e) {
      this.payload = Object.assign(Object.assign({}, this.payload), e);
    }
    receive(e, n) {
      var r;
      return (
        this._hasReceived(e) &&
          n(
            (r = this.receivedResp) === null || r === void 0
              ? void 0
              : r.response
          ),
        this.recHooks.push({ status: e, callback: n }),
        this
      );
    }
    startTimeout() {
      if (this.timeoutTimer) return;
      (this.ref = this.channel.socket._makeRef()),
        (this.refEvent = this.channel._replyEventName(this.ref));
      const e = (n) => {
        this._cancelRefEvent(),
          this._cancelTimeout(),
          (this.receivedResp = n),
          this._matchReceive(n);
      };
      this.channel._on(this.refEvent, {}, e),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
    }
    trigger(e, n) {
      this.refEvent &&
        this.channel._trigger(this.refEvent, { status: e, response: n });
    }
    destroy() {
      this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
      this.refEvent && this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
    }
    _matchReceive({ status: e, response: n }) {
      this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(n));
    }
    _hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
  }
  var Rc;
  (function (t) {
    (t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave");
  })(Rc || (Rc = {}));
  class Hn {
    constructor(e, n) {
      (this.channel = e),
        (this.state = {}),
        (this.pendingDiffs = []),
        (this.joinRef = null),
        (this.caller = {
          onJoin: () => {},
          onLeave: () => {},
          onSync: () => {},
        });
      const r = (n == null ? void 0 : n.events) || {
        state: "presence_state",
        diff: "presence_diff",
      };
      this.channel._on(r.state, {}, (i) => {
        const { onJoin: s, onLeave: a, onSync: o } = this.caller;
        (this.joinRef = this.channel._joinRef()),
          (this.state = Hn.syncState(this.state, i, s, a)),
          this.pendingDiffs.forEach((l) => {
            this.state = Hn.syncDiff(this.state, l, s, a);
          }),
          (this.pendingDiffs = []),
          o();
      }),
        this.channel._on(r.diff, {}, (i) => {
          const { onJoin: s, onLeave: a, onSync: o } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(i)
            : ((this.state = Hn.syncDiff(this.state, i, s, a)), o());
        }),
        this.onJoin((i, s, a) => {
          this.channel._trigger("presence", {
            event: "join",
            key: i,
            currentPresences: s,
            newPresences: a,
          });
        }),
        this.onLeave((i, s, a) => {
          this.channel._trigger("presence", {
            event: "leave",
            key: i,
            currentPresences: s,
            leftPresences: a,
          });
        }),
        this.onSync(() => {
          this.channel._trigger("presence", { event: "sync" });
        });
    }
    static syncState(e, n, r, i) {
      const s = this.cloneDeep(e),
        a = this.transformState(n),
        o = {},
        l = {};
      return (
        this.map(s, (u, c) => {
          a[u] || (l[u] = c);
        }),
        this.map(a, (u, c) => {
          const h = s[u];
          if (h) {
            const f = c.map((y) => y.presence_ref),
              d = h.map((y) => y.presence_ref),
              g = c.filter((y) => d.indexOf(y.presence_ref) < 0),
              _ = h.filter((y) => f.indexOf(y.presence_ref) < 0);
            g.length > 0 && (o[u] = g), _.length > 0 && (l[u] = _);
          } else o[u] = c;
        }),
        this.syncDiff(s, { joins: o, leaves: l }, r, i)
      );
    }
    static syncDiff(e, n, r, i) {
      const { joins: s, leaves: a } = {
        joins: this.transformState(n.joins),
        leaves: this.transformState(n.leaves),
      };
      return (
        r || (r = () => {}),
        i || (i = () => {}),
        this.map(s, (o, l) => {
          var u;
          const c = (u = e[o]) !== null && u !== void 0 ? u : [];
          if (((e[o] = this.cloneDeep(l)), c.length > 0)) {
            const h = e[o].map((d) => d.presence_ref),
              f = c.filter((d) => h.indexOf(d.presence_ref) < 0);
            e[o].unshift(...f);
          }
          r(o, c, l);
        }),
        this.map(a, (o, l) => {
          let u = e[o];
          if (!u) return;
          const c = l.map((h) => h.presence_ref);
          (u = u.filter((h) => c.indexOf(h.presence_ref) < 0)),
            (e[o] = u),
            i(o, u, l),
            u.length === 0 && delete e[o];
        }),
        e
      );
    }
    static map(e, n) {
      return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
    }
    static transformState(e) {
      return (
        (e = this.cloneDeep(e)),
        Object.getOwnPropertyNames(e).reduce((n, r) => {
          const i = e[r];
          return (
            "metas" in i
              ? (n[r] = i.metas.map(
                  (s) => (
                    (s.presence_ref = s.phx_ref),
                    delete s.phx_ref,
                    delete s.phx_ref_prev,
                    s
                  )
                ))
              : (n[r] = i),
            n
          );
        }, {})
      );
    }
    static cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  }
  var Oc;
  (function (t) {
    (t.ALL = "*"),
      (t.INSERT = "INSERT"),
      (t.UPDATE = "UPDATE"),
      (t.DELETE = "DELETE");
  })(Oc || (Oc = {}));
  var $c;
  (function (t) {
    (t.BROADCAST = "broadcast"),
      (t.PRESENCE = "presence"),
      (t.POSTGRES_CHANGES = "postgres_changes"),
      (t.SYSTEM = "system");
  })($c || ($c = {}));
  var Ze;
  (function (t) {
    (t.SUBSCRIBED = "SUBSCRIBED"),
      (t.TIMED_OUT = "TIMED_OUT"),
      (t.CLOSED = "CLOSED"),
      (t.CHANNEL_ERROR = "CHANNEL_ERROR");
  })(Ze || (Ze = {}));
  class oa {
    constructor(e, n = { config: {} }, r) {
      (this.topic = e),
        (this.params = n),
        (this.socket = r),
        (this.bindings = {}),
        (this.state = Te.closed),
        (this.joinedOnce = !1),
        (this.pushBuffer = []),
        (this.subTopic = e.replace(/^realtime:/i, "")),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: "" },
            private: !1,
          },
          n.config
        )),
        (this.timeout = this.socket.timeout),
        (this.joinPush = new aa(this, Ne.join, this.params, this.timeout)),
        (this.rejoinTimer = new Ac(
          () => this._rejoinUntilConnected(),
          this.socket.reconnectAfterMs
        )),
        this.joinPush.receive("ok", () => {
          (this.state = Te.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((i) => i.send()),
            (this.pushBuffer = []);
        }),
        this._onClose(() => {
          this.rejoinTimer.reset(),
            this.socket.log(
              "channel",
              `close ${this.topic} ${this._joinRef()}`
            ),
            (this.state = Te.closed),
            this.socket._remove(this);
        }),
        this._onError((i) => {
          this._isLeaving() ||
            this._isClosed() ||
            (this.socket.log("channel", `error ${this.topic}`, i),
            (this.state = Te.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          this._isJoining() &&
            (this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout
            ),
            (this.state = Te.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this._on(Ne.reply, {}, (i, s) => {
          this._trigger(this._replyEventName(s), i);
        }),
        (this.presence = new Hn(this)),
        (this.broadcastEndpointURL =
          Ic(this.socket.endPoint) + "/api/broadcast"),
        (this.private = this.params.config.private || !1);
    }
    subscribe(e, n = this.timeout) {
      var r, i;
      if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      {
        const {
          config: { broadcast: s, presence: a, private: o },
        } = this.params;
        this._onError((c) => (e == null ? void 0 : e(Ze.CHANNEL_ERROR, c))),
          this._onClose(() => (e == null ? void 0 : e(Ze.CLOSED)));
        const l = {},
          u = {
            broadcast: s,
            presence: a,
            postgres_changes:
              (i =
                (r = this.bindings.postgres_changes) === null || r === void 0
                  ? void 0
                  : r.map((c) => c.filter)) !== null && i !== void 0
                ? i
                : [],
            private: o,
          };
        this.socket.accessTokenValue &&
          (l.access_token = this.socket.accessTokenValue),
          this.updateJoinPayload(Object.assign({ config: u }, l)),
          (this.joinedOnce = !0),
          this._rejoin(n),
          this.joinPush
            .receive("ok", async ({ postgres_changes: c }) => {
              var h;
              if ((this.socket.setAuth(), c === void 0)) {
                e == null || e(Ze.SUBSCRIBED);
                return;
              } else {
                const f = this.bindings.postgres_changes,
                  d =
                    (h = f == null ? void 0 : f.length) !== null && h !== void 0
                      ? h
                      : 0,
                  g = [];
                for (let _ = 0; _ < d; _++) {
                  const y = f[_],
                    {
                      filter: { event: b, schema: w, table: x, filter: S },
                    } = y,
                    P = c && c[_];
                  if (
                    P &&
                    P.event === b &&
                    P.schema === w &&
                    P.table === x &&
                    P.filter === S
                  )
                    g.push(Object.assign(Object.assign({}, y), { id: P.id }));
                  else {
                    this.unsubscribe(),
                      e == null ||
                        e(
                          Ze.CHANNEL_ERROR,
                          new Error(
                            "mismatch between server and client bindings for postgres changes"
                          )
                        );
                    return;
                  }
                }
                (this.bindings.postgres_changes = g), e && e(Ze.SUBSCRIBED);
                return;
              }
            })
            .receive("error", (c) => {
              e == null ||
                e(
                  Ze.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(c).join(", ") || "error")
                  )
                );
            })
            .receive("timeout", () => {
              e == null || e(Ze.TIMED_OUT);
            });
      }
      return this;
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, n = {}) {
      return await this.send(
        { type: "presence", event: "track", payload: e },
        n.timeout || this.timeout
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: "presence", event: "untrack" }, e);
    }
    on(e, n, r) {
      return this._on(e, n, r);
    }
    async send(e, n = {}) {
      var r, i;
      if (!this._canPush() && e.type === "broadcast") {
        const { event: s, payload: a } = e,
          l = {
            method: "POST",
            headers: {
              Authorization: this.socket.accessTokenValue
                ? `Bearer ${this.socket.accessTokenValue}`
                : "",
              apikey: this.socket.apiKey ? this.socket.apiKey : "",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [
                {
                  topic: this.subTopic,
                  event: s,
                  payload: a,
                  private: this.private,
                },
              ],
            }),
          };
        try {
          const u = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            l,
            (r = n.timeout) !== null && r !== void 0 ? r : this.timeout
          );
          return (
            await ((i = u.body) === null || i === void 0 ? void 0 : i.cancel()),
            u.ok ? "ok" : "error"
          );
        } catch (u) {
          return u.name === "AbortError" ? "timed out" : "error";
        }
      } else
        return new Promise((s) => {
          var a, o, l;
          const u = this._push(e.type, e, n.timeout || this.timeout);
          e.type === "broadcast" &&
            !(
              !(
                (l =
                  (o =
                    (a = this.params) === null || a === void 0
                      ? void 0
                      : a.config) === null || o === void 0
                    ? void 0
                    : o.broadcast) === null || l === void 0
              ) && l.ack
            ) &&
            s("ok"),
            u.receive("ok", () => s("ok")),
            u.receive("error", () => s("error")),
            u.receive("timeout", () => s("timed out"));
        });
    }
    updateJoinPayload(e) {
      this.joinPush.updatePayload(e);
    }
    unsubscribe(e = this.timeout) {
      this.state = Te.leaving;
      const n = () => {
        this.socket.log("channel", `leave ${this.topic}`),
          this._trigger(Ne.close, "leave", this._joinRef());
      };
      return (
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise((r) => {
          const i = new aa(this, Ne.leave, {}, e);
          i
            .receive("ok", () => {
              n(), r("ok");
            })
            .receive("timeout", () => {
              n(), r("timed out");
            })
            .receive("error", () => {
              r("error");
            }),
            i.send(),
            this._canPush() || i.trigger("ok", {});
        })
      );
    }
    async _fetchWithTimeout(e, n, r) {
      const i = new AbortController(),
        s = setTimeout(() => i.abort(), r),
        a = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, n), { signal: i.signal })
        );
      return clearTimeout(s), a;
    }
    _push(e, n, r = this.timeout) {
      if (!this.joinedOnce)
        throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      let i = new aa(this, e, n, r);
      return (
        this._canPush()
          ? i.send()
          : (i.startTimeout(), this.pushBuffer.push(i)),
        i
      );
    }
    _onMessage(e, n, r) {
      return n;
    }
    _isMember(e) {
      return this.topic === e;
    }
    _joinRef() {
      return this.joinPush.ref;
    }
    _trigger(e, n, r) {
      var i, s;
      const a = e.toLocaleLowerCase(),
        { close: o, error: l, leave: u, join: c } = Ne;
      if (r && [o, l, u, c].indexOf(a) >= 0 && r !== this._joinRef()) return;
      let f = this._onMessage(a, n, r);
      if (n && !f)
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      ["insert", "update", "delete"].includes(a)
        ? (i = this.bindings.postgres_changes) === null ||
          i === void 0 ||
          i
            .filter((d) => {
              var g, _, y;
              return (
                ((g = d.filter) === null || g === void 0 ? void 0 : g.event) ===
                  "*" ||
                ((y =
                  (_ = d.filter) === null || _ === void 0
                    ? void 0
                    : _.event) === null || y === void 0
                  ? void 0
                  : y.toLocaleLowerCase()) === a
              );
            })
            .map((d) => d.callback(f, r))
        : (s = this.bindings[a]) === null ||
          s === void 0 ||
          s
            .filter((d) => {
              var g, _, y, b, w, x;
              if (["broadcast", "presence", "postgres_changes"].includes(a))
                if ("id" in d) {
                  const S = d.id,
                    P =
                      (g = d.filter) === null || g === void 0
                        ? void 0
                        : g.event;
                  return (
                    S &&
                    ((_ = n.ids) === null || _ === void 0
                      ? void 0
                      : _.includes(S)) &&
                    (P === "*" ||
                      (P == null ? void 0 : P.toLocaleLowerCase()) ===
                        ((y = n.data) === null || y === void 0
                          ? void 0
                          : y.type.toLocaleLowerCase()))
                  );
                } else {
                  const S =
                    (w =
                      (b = d == null ? void 0 : d.filter) === null ||
                      b === void 0
                        ? void 0
                        : b.event) === null || w === void 0
                      ? void 0
                      : w.toLocaleLowerCase();
                  return (
                    S === "*" ||
                    S ===
                      ((x = n == null ? void 0 : n.event) === null ||
                      x === void 0
                        ? void 0
                        : x.toLocaleLowerCase())
                  );
                }
              else return d.type.toLocaleLowerCase() === a;
            })
            .map((d) => {
              if (typeof f == "object" && "ids" in f) {
                const g = f.data,
                  {
                    schema: _,
                    table: y,
                    commit_timestamp: b,
                    type: w,
                    errors: x,
                  } = g;
                f = Object.assign(
                  Object.assign(
                    {},
                    {
                      schema: _,
                      table: y,
                      commit_timestamp: b,
                      eventType: w,
                      new: {},
                      old: {},
                      errors: x,
                    }
                  ),
                  this._getPayloadRecords(g)
                );
              }
              d.callback(f, r);
            });
    }
    _isClosed() {
      return this.state === Te.closed;
    }
    _isJoined() {
      return this.state === Te.joined;
    }
    _isJoining() {
      return this.state === Te.joining;
    }
    _isLeaving() {
      return this.state === Te.leaving;
    }
    _replyEventName(e) {
      return `chan_reply_${e}`;
    }
    _on(e, n, r) {
      const i = e.toLocaleLowerCase(),
        s = { type: i, filter: n, callback: r };
      return (
        this.bindings[i] ? this.bindings[i].push(s) : (this.bindings[i] = [s]),
        this
      );
    }
    _off(e, n) {
      const r = e.toLocaleLowerCase();
      return (
        (this.bindings[r] = this.bindings[r].filter((i) => {
          var s;
          return !(
            ((s = i.type) === null || s === void 0
              ? void 0
              : s.toLocaleLowerCase()) === r && oa.isEqual(i.filter, n)
          );
        })),
        this
      );
    }
    static isEqual(e, n) {
      if (Object.keys(e).length !== Object.keys(n).length) return !1;
      for (const r in e) if (e[r] !== n[r]) return !1;
      return !0;
    }
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin();
    }
    _onClose(e) {
      this._on(Ne.close, {}, e);
    }
    _onError(e) {
      this._on(Ne.error, {}, (n) => e(n));
    }
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(e = this.timeout) {
      this._isLeaving() ||
        (this.socket._leaveOpenTopic(this.topic),
        (this.state = Te.joining),
        this.joinPush.resend(e));
    }
    _getPayloadRecords(e) {
      const n = { new: {}, old: {} };
      return (
        (e.type === "INSERT" || e.type === "UPDATE") &&
          (n.new = Pc(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") &&
          (n.old = Pc(e.columns, e.old_record)),
        n
      );
    }
  }
  const A_ = () => {},
    P_ = typeof WebSocket < "u",
    T_ = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
  class I_ {
    constructor(e, n) {
      var r;
      (this.accessTokenValue = null),
        (this.apiKey = null),
        (this.channels = []),
        (this.endPoint = ""),
        (this.httpEndpoint = ""),
        (this.headers = __),
        (this.params = {}),
        (this.timeout = Cc),
        (this.heartbeatIntervalMs = 3e4),
        (this.heartbeatTimer = void 0),
        (this.pendingHeartbeatRef = null),
        (this.ref = 0),
        (this.logger = A_),
        (this.conn = null),
        (this.sendBuffer = []),
        (this.serializer = new b_()),
        (this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        }),
        (this.accessToken = null),
        (this._resolveFetch = (s) => {
          let a;
          return (
            s
              ? (a = s)
              : typeof fetch > "u"
              ? (a = (...o) =>
                  Promise.resolve()
                    .then(() => nn)
                    .then(({ default: l }) => l(...o)))
              : (a = fetch),
            (...o) => a(...o)
          );
        }),
        (this.endPoint = `${e}/${ia.websocket}`),
        (this.httpEndpoint = Ic(e)),
        n != null && n.transport
          ? (this.transport = n.transport)
          : (this.transport = null),
        n != null && n.params && (this.params = n.params),
        n != null &&
          n.headers &&
          (this.headers = Object.assign(
            Object.assign({}, this.headers),
            n.headers
          )),
        n != null && n.timeout && (this.timeout = n.timeout),
        n != null && n.logger && (this.logger = n.logger),
        n != null &&
          n.heartbeatIntervalMs &&
          (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
      const i =
        (r = n == null ? void 0 : n.params) === null || r === void 0
          ? void 0
          : r.apikey;
      if (
        (i && ((this.accessTokenValue = i), (this.apiKey = i)),
        (this.reconnectAfterMs =
          n != null && n.reconnectAfterMs
            ? n.reconnectAfterMs
            : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4),
        (this.encode =
          n != null && n.encode ? n.encode : (s, a) => a(JSON.stringify(s))),
        (this.decode =
          n != null && n.decode
            ? n.decode
            : this.serializer.decode.bind(this.serializer)),
        (this.reconnectTimer = new Ac(async () => {
          this.disconnect(), this.connect();
        }, this.reconnectAfterMs)),
        (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)),
        n != null && n.worker)
      ) {
        if (typeof window < "u" && !window.Worker)
          throw new Error("Web Worker is not supported");
        (this.worker = (n == null ? void 0 : n.worker) || !1),
          (this.workerUrl = n == null ? void 0 : n.workerUrl);
      }
      this.accessToken = (n == null ? void 0 : n.accessToken) || null;
    }
    connect() {
      if (!this.conn) {
        if (this.transport) {
          this.conn = new this.transport(this.endpointURL(), void 0, {
            headers: this.headers,
          });
          return;
        }
        if (P_) {
          (this.conn = new WebSocket(this.endpointURL())),
            this.setupConnection();
          return;
        }
        (this.conn = new R_(this.endpointURL(), void 0, {
          close: () => {
            this.conn = null;
          },
        })),
          Promise.resolve()
            .then(() => tw)
            .then(({ default: e }) => {
              (this.conn = new e(this.endpointURL(), void 0, {
                headers: this.headers,
              })),
                this.setupConnection();
            });
      }
    }
    endpointURL() {
      return this._appendParams(
        this.endPoint,
        Object.assign({}, this.params, { vsn: y_ })
      );
    }
    disconnect(e, n) {
      this.conn &&
        ((this.conn.onclose = function () {}),
        e ? this.conn.close(e, n ?? "") : this.conn.close(),
        (this.conn = null),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset());
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e) {
      const n = await e.unsubscribe();
      return this.channels.length === 0 && this.disconnect(), n;
    }
    async removeAllChannels() {
      const e = await Promise.all(this.channels.map((n) => n.unsubscribe()));
      return this.disconnect(), e;
    }
    log(e, n, r) {
      this.logger(e, n, r);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case rn.connecting:
          return St.Connecting;
        case rn.open:
          return St.Open;
        case rn.closing:
          return St.Closing;
        default:
          return St.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === St.Open;
    }
    channel(e, n = { config: {} }) {
      const r = new oa(`realtime:${e}`, n, this);
      return this.channels.push(r), r;
    }
    push(e) {
      const { topic: n, event: r, payload: i, ref: s } = e,
        a = () => {
          this.encode(e, (o) => {
            var l;
            (l = this.conn) === null || l === void 0 || l.send(o);
          });
        };
      this.log("push", `${n} ${r} (${s})`, i),
        this.isConnected() ? a() : this.sendBuffer.push(a);
    }
    async setAuth(e = null) {
      let n =
        e ||
        (this.accessToken && (await this.accessToken())) ||
        this.accessTokenValue;
      if (n) {
        let r = null;
        try {
          r = JSON.parse(atob(n.split(".")[1]));
        } catch {}
        if (r && r.exp && !(Math.floor(Date.now() / 1e3) - r.exp < 0))
          return (
            this.log(
              "auth",
              `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`
            ),
            Promise.reject(
              `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`
            )
          );
        (this.accessTokenValue = n),
          this.channels.forEach((i) => {
            n && i.updateJoinPayload({ access_token: n }),
              i.joinedOnce &&
                i._isJoined() &&
                i._push(Ne.access_token, { access_token: n });
          });
      }
    }
    async sendHeartbeat() {
      var e;
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) {
          (this.pendingHeartbeatRef = null),
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection"
            ),
            (e = this.conn) === null ||
              e === void 0 ||
              e.close(w_, "hearbeat timeout");
          return;
        }
        (this.pendingHeartbeatRef = this._makeRef()),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }),
          this.setAuth();
      }
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    _makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
      );
    }
    _leaveOpenTopic(e) {
      let n = this.channels.find(
        (r) => r.topic === e && (r._isJoined() || r._isJoining())
      );
      n &&
        (this.log("transport", `leaving duplicate topic "${e}"`),
        n.unsubscribe());
    }
    _remove(e) {
      this.channels = this.channels.filter(
        (n) => n._joinRef() !== e._joinRef()
      );
    }
    setupConnection() {
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (e) => this._onConnError(e)),
        (this.conn.onmessage = (e) => this._onConnMessage(e)),
        (this.conn.onclose = (e) => this._onConnClose(e)));
    }
    _onConnMessage(e) {
      this.decode(e.data, (n) => {
        let { topic: r, event: i, payload: s, ref: a } = n;
        a &&
          a === this.pendingHeartbeatRef &&
          (this.pendingHeartbeatRef = null),
          this.log(
            "receive",
            `${s.status || ""} ${r} ${i} ${(a && "(" + a + ")") || ""}`,
            s
          ),
          this.channels
            .filter((o) => o._isMember(r))
            .forEach((o) => o._trigger(i, s, a)),
          this.stateChangeCallbacks.message.forEach((o) => o(n));
      });
    }
    async _onConnOpen() {
      if (
        (this.log("transport", `connected to ${this.endpointURL()}`),
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
      )
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
          (this.heartbeatTimer = setInterval(
            () => this.sendHeartbeat(),
            this.heartbeatIntervalMs
          ));
      else {
        this.workerUrl
          ? this.log("worker", `starting worker for from ${this.workerUrl}`)
          : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        (this.workerRef = new Worker(e)),
          (this.workerRef.onerror = (n) => {
            this.log("worker", "worker error", n.message),
              this.workerRef.terminate();
          }),
          (this.workerRef.onmessage = (n) => {
            n.data.event === "keepAlive" && this.sendHeartbeat();
          }),
          this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs,
          });
      }
      this.stateChangeCallbacks.open.forEach((e) => e());
    }
    _onConnClose(e) {
      this.log("transport", "close", e),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach((n) => n(e));
    }
    _onConnError(e) {
      this.log("transport", e.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach((n) => n(e));
    }
    _triggerChanError() {
      this.channels.forEach((e) => e._trigger(Ne.error));
    }
    _appendParams(e, n) {
      if (Object.keys(n).length === 0) return e;
      const r = e.match(/\?/) ? "&" : "?",
        i = new URLSearchParams(n);
      return `${e}${r}${i}`;
    }
    _workerObjectUrl(e) {
      let n;
      if (e) n = e;
      else {
        const r = new Blob([T_], { type: "application/javascript" });
        n = URL.createObjectURL(r);
      }
      return n;
    }
  }
  class R_ {
    constructor(e, n, r) {
      (this.binaryType = "arraybuffer"),
        (this.onclose = () => {}),
        (this.onerror = () => {}),
        (this.onmessage = () => {}),
        (this.onopen = () => {}),
        (this.readyState = rn.connecting),
        (this.send = () => {}),
        (this.url = null),
        (this.url = e),
        (this.close = r.close);
    }
  }
  class la extends Error {
    constructor(e) {
      super(e), (this.__isStorageError = !0), (this.name = "StorageError");
    }
  }
  function ce(t) {
    return typeof t == "object" && t !== null && "__isStorageError" in t;
  }
  class O_ extends la {
    constructor(e, n) {
      super(e), (this.name = "StorageApiError"), (this.status = n);
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  }
  class ua extends la {
    constructor(e, n) {
      super(e), (this.name = "StorageUnknownError"), (this.originalError = n);
    }
  }
  var $_ = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const Lc = (t) => {
      let e;
      return (
        t
          ? (e = t)
          : typeof fetch > "u"
          ? (e = (...n) =>
              Promise.resolve()
                .then(() => nn)
                .then(({ default: r }) => r(...n)))
          : (e = fetch),
        (...n) => e(...n)
      );
    },
    L_ = () =>
      $_(void 0, void 0, void 0, function* () {
        return typeof Response > "u"
          ? (yield Promise.resolve().then(() => nn)).Response
          : Response;
      }),
    ca = (t) => {
      if (Array.isArray(t)) return t.map((n) => ca(n));
      if (typeof t == "function" || t !== Object(t)) return t;
      const e = {};
      return (
        Object.entries(t).forEach(([n, r]) => {
          const i = n.replace(/([-_][a-z])/gi, (s) =>
            s.toUpperCase().replace(/[-_]/g, "")
          );
          e[i] = ca(r);
        }),
        e
      );
    };
  var Et = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const ha = (t) =>
      t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    j_ = (t, e, n) =>
      Et(void 0, void 0, void 0, function* () {
        const r = yield L_();
        t instanceof r && !(n != null && n.noResolveJson)
          ? t
              .json()
              .then((i) => {
                e(new O_(ha(i), t.status || 500));
              })
              .catch((i) => {
                e(new ua(ha(i), i));
              })
          : e(new ua(ha(t), t));
      }),
    N_ = (t, e, n, r) => {
      const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
      return t === "GET"
        ? i
        : ((i.headers = Object.assign(
            { "Content-Type": "application/json" },
            e == null ? void 0 : e.headers
          )),
          r && (i.body = JSON.stringify(r)),
          Object.assign(Object.assign({}, i), n));
    };
  function Vn(t, e, n, r, i, s) {
    return Et(this, void 0, void 0, function* () {
      return new Promise((a, o) => {
        t(n, N_(e, r, i, s))
          .then((l) => {
            if (!l.ok) throw l;
            return r != null && r.noResolveJson ? l : l.json();
          })
          .then((l) => a(l))
          .catch((l) => j_(l, o, r));
      });
    });
  }
  function Gr(t, e, n, r) {
    return Et(this, void 0, void 0, function* () {
      return Vn(t, "GET", e, n, r);
    });
  }
  function dt(t, e, n, r, i) {
    return Et(this, void 0, void 0, function* () {
      return Vn(t, "POST", e, r, i, n);
    });
  }
  function D_(t, e, n, r, i) {
    return Et(this, void 0, void 0, function* () {
      return Vn(t, "PUT", e, r, i, n);
    });
  }
  function F_(t, e, n, r) {
    return Et(this, void 0, void 0, function* () {
      return Vn(
        t,
        "HEAD",
        e,
        Object.assign(Object.assign({}, n), { noResolveJson: !0 }),
        r
      );
    });
  }
  function jc(t, e, n, r, i) {
    return Et(this, void 0, void 0, function* () {
      return Vn(t, "DELETE", e, r, i, n);
    });
  }
  var ke = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const M_ = {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    },
    Nc = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: !1,
    };
  class B_ {
    constructor(e, n = {}, r, i) {
      (this.url = e),
        (this.headers = n),
        (this.bucketId = r),
        (this.fetch = Lc(i));
    }
    uploadOrUpdate(e, n, r, i) {
      return ke(this, void 0, void 0, function* () {
        try {
          let s;
          const a = Object.assign(Object.assign({}, Nc), i);
          let o = Object.assign(
            Object.assign({}, this.headers),
            e === "POST" && { "x-upsert": String(a.upsert) }
          );
          const l = a.metadata;
          typeof Blob < "u" && r instanceof Blob
            ? ((s = new FormData()),
              s.append("cacheControl", a.cacheControl),
              l && s.append("metadata", this.encodeMetadata(l)),
              s.append("", r))
            : typeof FormData < "u" && r instanceof FormData
            ? ((s = r),
              s.append("cacheControl", a.cacheControl),
              l && s.append("metadata", this.encodeMetadata(l)))
            : ((s = r),
              (o["cache-control"] = `max-age=${a.cacheControl}`),
              (o["content-type"] = a.contentType),
              l && (o["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
            i != null &&
              i.headers &&
              (o = Object.assign(Object.assign({}, o), i.headers));
          const u = this._removeEmptyFolders(n),
            c = this._getFinalPath(u),
            h = yield this.fetch(
              `${this.url}/object/${c}`,
              Object.assign(
                { method: e, body: s, headers: o },
                a != null && a.duplex ? { duplex: a.duplex } : {}
              )
            ),
            f = yield h.json();
          return h.ok
            ? { data: { path: u, id: f.Id, fullPath: f.Key }, error: null }
            : { data: null, error: f };
        } catch (s) {
          if (ce(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    upload(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("POST", e, n, r);
      });
    }
    uploadToSignedUrl(e, n, r, i) {
      return ke(this, void 0, void 0, function* () {
        const s = this._removeEmptyFolders(e),
          a = this._getFinalPath(s),
          o = new URL(this.url + `/object/upload/sign/${a}`);
        o.searchParams.set("token", n);
        try {
          let l;
          const u = Object.assign({ upsert: Nc.upsert }, i),
            c = Object.assign(Object.assign({}, this.headers), {
              "x-upsert": String(u.upsert),
            });
          typeof Blob < "u" && r instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", u.cacheControl),
              l.append("", r))
            : typeof FormData < "u" && r instanceof FormData
            ? ((l = r), l.append("cacheControl", u.cacheControl))
            : ((l = r),
              (c["cache-control"] = `max-age=${u.cacheControl}`),
              (c["content-type"] = u.contentType));
          const h = yield this.fetch(o.toString(), {
              method: "PUT",
              body: l,
              headers: c,
            }),
            f = yield h.json();
          return h.ok
            ? { data: { path: s, fullPath: f.Key }, error: null }
            : { data: null, error: f };
        } catch (l) {
          if (ce(l)) return { data: null, error: l };
          throw l;
        }
      });
    }
    createSignedUploadUrl(e, n) {
      return ke(this, void 0, void 0, function* () {
        try {
          let r = this._getFinalPath(e);
          const i = Object.assign({}, this.headers);
          n != null && n.upsert && (i["x-upsert"] = "true");
          const s = yield dt(
              this.fetch,
              `${this.url}/object/upload/sign/${r}`,
              {},
              { headers: i }
            ),
            a = new URL(this.url + s.url),
            o = a.searchParams.get("token");
          if (!o) throw new la("No token returned by API");
          return {
            data: { signedUrl: a.toString(), path: e, token: o },
            error: null,
          };
        } catch (r) {
          if (ce(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    update(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("PUT", e, n, r);
      });
    }
    move(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        try {
          return {
            data: yield dt(
              this.fetch,
              `${this.url}/object/move`,
              {
                bucketId: this.bucketId,
                sourceKey: e,
                destinationKey: n,
                destinationBucket: r == null ? void 0 : r.destinationBucket,
              },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (i) {
          if (ce(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    copy(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        try {
          return {
            data: {
              path: (yield dt(
                this.fetch,
                `${this.url}/object/copy`,
                {
                  bucketId: this.bucketId,
                  sourceKey: e,
                  destinationKey: n,
                  destinationBucket: r == null ? void 0 : r.destinationBucket,
                },
                { headers: this.headers }
              )).Key,
            },
            error: null,
          };
        } catch (i) {
          if (ce(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    createSignedUrl(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        try {
          let i = this._getFinalPath(e),
            s = yield dt(
              this.fetch,
              `${this.url}/object/sign/${i}`,
              Object.assign(
                { expiresIn: n },
                r != null && r.transform ? { transform: r.transform } : {}
              ),
              { headers: this.headers }
            );
          const a =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
          return (
            (s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${a}`) }),
            { data: s, error: null }
          );
        } catch (i) {
          if (ce(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    createSignedUrls(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        try {
          const i = yield dt(
              this.fetch,
              `${this.url}/object/sign/${this.bucketId}`,
              { expiresIn: n, paths: e },
              { headers: this.headers }
            ),
            s =
              r != null && r.download
                ? `&download=${r.download === !0 ? "" : r.download}`
                : "";
          return {
            data: i.map((a) =>
              Object.assign(Object.assign({}, a), {
                signedUrl: a.signedURL
                  ? encodeURI(`${this.url}${a.signedURL}${s}`)
                  : null,
              })
            ),
            error: null,
          };
        } catch (i) {
          if (ce(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    download(e, n) {
      return ke(this, void 0, void 0, function* () {
        const i =
            typeof (n == null ? void 0 : n.transform) < "u"
              ? "render/image/authenticated"
              : "object",
          s = this.transformOptsToQueryString(
            (n == null ? void 0 : n.transform) || {}
          ),
          a = s ? `?${s}` : "";
        try {
          const o = this._getFinalPath(e);
          return {
            data: yield (yield Gr(this.fetch, `${this.url}/${i}/${o}${a}`, {
              headers: this.headers,
              noResolveJson: !0,
            })).blob(),
            error: null,
          };
        } catch (o) {
          if (ce(o)) return { data: null, error: o };
          throw o;
        }
      });
    }
    info(e) {
      return ke(this, void 0, void 0, function* () {
        const n = this._getFinalPath(e);
        try {
          const r = yield Gr(this.fetch, `${this.url}/object/info/${n}`, {
            headers: this.headers,
          });
          return { data: ca(r), error: null };
        } catch (r) {
          if (ce(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    exists(e) {
      return ke(this, void 0, void 0, function* () {
        const n = this._getFinalPath(e);
        try {
          return (
            yield F_(this.fetch, `${this.url}/object/${n}`, {
              headers: this.headers,
            }),
            { data: !0, error: null }
          );
        } catch (r) {
          if (ce(r) && r instanceof ua) {
            const i = r.originalError;
            if ([400, 404].includes(i == null ? void 0 : i.status))
              return { data: !1, error: r };
          }
          throw r;
        }
      });
    }
    getPublicUrl(e, n) {
      const r = this._getFinalPath(e),
        i = [],
        s =
          n != null && n.download
            ? `download=${n.download === !0 ? "" : n.download}`
            : "";
      s !== "" && i.push(s);
      const o =
          typeof (n == null ? void 0 : n.transform) < "u"
            ? "render/image"
            : "object",
        l = this.transformOptsToQueryString(
          (n == null ? void 0 : n.transform) || {}
        );
      l !== "" && i.push(l);
      let u = i.join("&");
      return (
        u !== "" && (u = `?${u}`),
        { data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${u}`) } }
      );
    }
    remove(e) {
      return ke(this, void 0, void 0, function* () {
        try {
          return {
            data: yield jc(
              this.fetch,
              `${this.url}/object/${this.bucketId}`,
              { prefixes: e },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (n) {
          if (ce(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    list(e, n, r) {
      return ke(this, void 0, void 0, function* () {
        try {
          const i = Object.assign(Object.assign(Object.assign({}, M_), n), {
            prefix: e || "",
          });
          return {
            data: yield dt(
              this.fetch,
              `${this.url}/object/list/${this.bucketId}`,
              i,
              { headers: this.headers },
              r
            ),
            error: null,
          };
        } catch (i) {
          if (ce(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    encodeMetadata(e) {
      return JSON.stringify(e);
    }
    toBase64(e) {
      return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
    }
    _getFinalPath(e) {
      return `${this.bucketId}/${e}`;
    }
    _removeEmptyFolders(e) {
      return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(e) {
      const n = [];
      return (
        e.width && n.push(`width=${e.width}`),
        e.height && n.push(`height=${e.height}`),
        e.resize && n.push(`resize=${e.resize}`),
        e.format && n.push(`format=${e.format}`),
        e.quality && n.push(`quality=${e.quality}`),
        n.join("&")
      );
    }
  }
  const U_ = { "X-Client-Info": "storage-js/2.7.1" };
  var sn = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  class z_ {
    constructor(e, n = {}, r) {
      (this.url = e),
        (this.headers = Object.assign(Object.assign({}, U_), n)),
        (this.fetch = Lc(r));
    }
    listBuckets() {
      return sn(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Gr(this.fetch, `${this.url}/bucket`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          if (ce(e)) return { data: null, error: e };
          throw e;
        }
      });
    }
    getBucket(e) {
      return sn(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Gr(this.fetch, `${this.url}/bucket/${e}`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (n) {
          if (ce(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    createBucket(e, n = { public: !1 }) {
      return sn(this, void 0, void 0, function* () {
        try {
          return {
            data: yield dt(
              this.fetch,
              `${this.url}/bucket`,
              {
                id: e,
                name: e,
                public: n.public,
                file_size_limit: n.fileSizeLimit,
                allowed_mime_types: n.allowedMimeTypes,
              },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (r) {
          if (ce(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    updateBucket(e, n) {
      return sn(this, void 0, void 0, function* () {
        try {
          return {
            data: yield D_(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {
                id: e,
                name: e,
                public: n.public,
                file_size_limit: n.fileSizeLimit,
                allowed_mime_types: n.allowedMimeTypes,
              },
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (r) {
          if (ce(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    emptyBucket(e) {
      return sn(this, void 0, void 0, function* () {
        try {
          return {
            data: yield dt(
              this.fetch,
              `${this.url}/bucket/${e}/empty`,
              {},
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (n) {
          if (ce(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    deleteBucket(e) {
      return sn(this, void 0, void 0, function* () {
        try {
          return {
            data: yield jc(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {},
              { headers: this.headers }
            ),
            error: null,
          };
        } catch (n) {
          if (ce(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
  }
  class q_ extends z_ {
    constructor(e, n = {}, r) {
      super(e, n, r);
    }
    from(e) {
      return new B_(this.url, this.headers, e, this.fetch);
    }
  }
  const H_ = "2.49.4";
  let Wn = "";
  typeof Deno < "u"
    ? (Wn = "deno")
    : typeof document < "u"
    ? (Wn = "web")
    : typeof navigator < "u" && navigator.product === "ReactNative"
    ? (Wn = "react-native")
    : (Wn = "node");
  const V_ = { headers: { "X-Client-Info": `supabase-js-${Wn}/${H_}` } },
    W_ = { schema: "public" },
    J_ = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit",
    },
    K_ = {};
  var G_ = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const X_ = (t) => {
      let e;
      return (
        t ? (e = t) : typeof fetch > "u" ? (e = hc) : (e = fetch),
        (...n) => e(...n)
      );
    },
    Q_ = () => (typeof Headers > "u" ? dc : Headers),
    Y_ = (t, e, n) => {
      const r = X_(n),
        i = Q_();
      return (s, a) =>
        G_(void 0, void 0, void 0, function* () {
          var o;
          const l = (o = yield e()) !== null && o !== void 0 ? o : t;
          let u = new i(a == null ? void 0 : a.headers);
          return (
            u.has("apikey") || u.set("apikey", t),
            u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
            r(s, Object.assign(Object.assign({}, a), { headers: u }))
          );
        });
    };
  var Z_ = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  function ey(t) {
    return t.replace(/\/$/, "");
  }
  function ty(t, e) {
    const { db: n, auth: r, realtime: i, global: s } = t,
      { db: a, auth: o, realtime: l, global: u } = e,
      c = {
        db: Object.assign(Object.assign({}, a), n),
        auth: Object.assign(Object.assign({}, o), r),
        realtime: Object.assign(Object.assign({}, l), i),
        global: Object.assign(Object.assign({}, u), s),
        accessToken: () =>
          Z_(this, void 0, void 0, function* () {
            return "";
          }),
      };
    return (
      t.accessToken ? (c.accessToken = t.accessToken) : delete c.accessToken, c
    );
  }
  const Dc = "2.69.1",
    an = 30 * 1e3,
    da = 3,
    fa = da * an,
    ny = "http://localhost:9999",
    ry = "supabase.auth.token",
    iy = { "X-Client-Info": `gotrue-js/${Dc}` },
    pa = "X-Supabase-Api-Version",
    Fc = {
      "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01",
      },
    },
    sy = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
    ay = 6e5;
  class ma extends Error {
    constructor(e, n, r) {
      super(e),
        (this.__isAuthError = !0),
        (this.name = "AuthError"),
        (this.status = n),
        (this.code = r);
    }
  }
  function H(t) {
    return typeof t == "object" && t !== null && "__isAuthError" in t;
  }
  class oy extends ma {
    constructor(e, n, r) {
      super(e, n, r),
        (this.name = "AuthApiError"),
        (this.status = n),
        (this.code = r);
    }
  }
  function ly(t) {
    return H(t) && t.name === "AuthApiError";
  }
  class Mc extends ma {
    constructor(e, n) {
      super(e), (this.name = "AuthUnknownError"), (this.originalError = n);
    }
  }
  class ft extends ma {
    constructor(e, n, r, i) {
      super(e, r, i), (this.name = n), (this.status = r);
    }
  }
  class pt extends ft {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
  }
  function uy(t) {
    return H(t) && t.name === "AuthSessionMissingError";
  }
  class ga extends ft {
    constructor() {
      super(
        "Auth session or user missing",
        "AuthInvalidTokenResponseError",
        500,
        void 0
      );
    }
  }
  class Xr extends ft {
    constructor(e) {
      super(e, "AuthInvalidCredentialsError", 400, void 0);
    }
  }
  class Qr extends ft {
    constructor(e, n = null) {
      super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        (this.details = null),
        (this.details = n);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  function cy(t) {
    return H(t) && t.name === "AuthImplicitGrantRedirectError";
  }
  class Bc extends ft {
    constructor(e, n = null) {
      super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        (this.details = null),
        (this.details = n);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  class _a extends ft {
    constructor(e, n) {
      super(e, "AuthRetryableFetchError", n, void 0);
    }
  }
  function ya(t) {
    return H(t) && t.name === "AuthRetryableFetchError";
  }
  class Uc extends ft {
    constructor(e, n, r) {
      super(e, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r);
    }
  }
  class Jn extends ft {
    constructor(e) {
      super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
    }
  }
  const zc =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
        ""
      ),
    qc = ` 	
\r=`.split(""),
    hy = (() => {
      const t = new Array(128);
      for (let e = 0; e < t.length; e += 1) t[e] = -1;
      for (let e = 0; e < qc.length; e += 1) t[qc[e].charCodeAt(0)] = -2;
      for (let e = 0; e < zc.length; e += 1) t[zc[e].charCodeAt(0)] = e;
      return t;
    })();
  function Hc(t, e, n) {
    const r = hy[t];
    if (r > -1)
      for (e.queue = (e.queue << 6) | r, e.queuedBits += 6; e.queuedBits >= 8; )
        n((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8);
    else {
      if (r === -2) return;
      throw new Error(
        `Invalid Base64-URL character "${String.fromCharCode(t)}"`
      );
    }
  }
  function Vc(t) {
    const e = [],
      n = (a) => {
        e.push(String.fromCodePoint(a));
      },
      r = { utf8seq: 0, codepoint: 0 },
      i = { queue: 0, queuedBits: 0 },
      s = (a) => {
        py(a, r, n);
      };
    for (let a = 0; a < t.length; a += 1) Hc(t.charCodeAt(a), i, s);
    return e.join("");
  }
  function dy(t, e) {
    if (t <= 127) {
      e(t);
      return;
    } else if (t <= 2047) {
      e(192 | (t >> 6)), e(128 | (t & 63));
      return;
    } else if (t <= 65535) {
      e(224 | (t >> 12)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63));
      return;
    } else if (t <= 1114111) {
      e(240 | (t >> 18)),
        e(128 | ((t >> 12) & 63)),
        e(128 | ((t >> 6) & 63)),
        e(128 | (t & 63));
      return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
  }
  function fy(t, e) {
    for (let n = 0; n < t.length; n += 1) {
      let r = t.charCodeAt(n);
      if (r > 55295 && r <= 56319) {
        const i = ((r - 55296) * 1024) & 65535;
        (r = (((t.charCodeAt(n + 1) - 56320) & 65535) | i) + 65536), (n += 1);
      }
      dy(r, e);
    }
  }
  function py(t, e, n) {
    if (e.utf8seq === 0) {
      if (t <= 127) {
        n(t);
        return;
      }
      for (let r = 1; r < 6; r += 1)
        if (((t >> (7 - r)) & 1) === 0) {
          e.utf8seq = r;
          break;
        }
      if (e.utf8seq === 2) e.codepoint = t & 31;
      else if (e.utf8seq === 3) e.codepoint = t & 15;
      else if (e.utf8seq === 4) e.codepoint = t & 7;
      else throw new Error("Invalid UTF-8 sequence");
      e.utf8seq -= 1;
    } else if (e.utf8seq > 0) {
      if (t <= 127) throw new Error("Invalid UTF-8 sequence");
      (e.codepoint = (e.codepoint << 6) | (t & 63)),
        (e.utf8seq -= 1),
        e.utf8seq === 0 && n(e.codepoint);
    }
  }
  function my(t) {
    const e = [],
      n = { queue: 0, queuedBits: 0 },
      r = (i) => {
        e.push(i);
      };
    for (let i = 0; i < t.length; i += 1) Hc(t.charCodeAt(i), n, r);
    return new Uint8Array(e);
  }
  function gy(t) {
    const e = [];
    return fy(t, (n) => e.push(n)), new Uint8Array(e);
  }
  function _y(t) {
    return Math.round(Date.now() / 1e3) + t;
  }
  function yy() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (t) {
        const e = (Math.random() * 16) | 0;
        return (t == "x" ? e : (e & 3) | 8).toString(16);
      }
    );
  }
  const Ke = () => typeof window < "u" && typeof document < "u",
    Ct = { tested: !1, writable: !1 },
    Kn = () => {
      if (!Ke()) return !1;
      try {
        if (typeof globalThis.localStorage != "object") return !1;
      } catch {
        return !1;
      }
      if (Ct.tested) return Ct.writable;
      const t = `lswt-${Math.random()}${Math.random()}`;
      try {
        globalThis.localStorage.setItem(t, t),
          globalThis.localStorage.removeItem(t),
          (Ct.tested = !0),
          (Ct.writable = !0);
      } catch {
        (Ct.tested = !0), (Ct.writable = !1);
      }
      return Ct.writable;
    };
  function wy(t) {
    const e = {},
      n = new URL(t);
    if (n.hash && n.hash[0] === "#")
      try {
        new URLSearchParams(n.hash.substring(1)).forEach((i, s) => {
          e[s] = i;
        });
      } catch {}
    return (
      n.searchParams.forEach((r, i) => {
        e[i] = r;
      }),
      e
    );
  }
  const Wc = (t) => {
      let e;
      return (
        t
          ? (e = t)
          : typeof fetch > "u"
          ? (e = (...n) =>
              Promise.resolve()
                .then(() => nn)
                .then(({ default: r }) => r(...n)))
          : (e = fetch),
        (...n) => e(...n)
      );
    },
    by = (t) =>
      typeof t == "object" &&
      t !== null &&
      "status" in t &&
      "ok" in t &&
      "json" in t &&
      typeof t.json == "function",
    Jc = async (t, e, n) => {
      await t.setItem(e, JSON.stringify(n));
    },
    Yr = async (t, e) => {
      const n = await t.getItem(e);
      if (!n) return null;
      try {
        return JSON.parse(n);
      } catch {
        return n;
      }
    },
    Zr = async (t, e) => {
      await t.removeItem(e);
    };
  class ei {
    constructor() {
      this.promise = new ei.promiseConstructor((e, n) => {
        (this.resolve = e), (this.reject = n);
      });
    }
  }
  ei.promiseConstructor = Promise;
  function wa(t) {
    const e = t.split(".");
    if (e.length !== 3) throw new Jn("Invalid JWT structure");
    for (let r = 0; r < e.length; r++)
      if (!sy.test(e[r])) throw new Jn("JWT not in base64url format");
    return {
      header: JSON.parse(Vc(e[0])),
      payload: JSON.parse(Vc(e[1])),
      signature: my(e[2]),
      raw: { header: e[0], payload: e[1] },
    };
  }
  async function vy(t) {
    return await new Promise((e) => {
      setTimeout(() => e(null), t);
    });
  }
  function xy(t, e) {
    return new Promise((r, i) => {
      (async () => {
        for (let s = 0; s < 1 / 0; s++)
          try {
            const a = await t(s);
            if (!e(s, null, a)) {
              r(a);
              return;
            }
          } catch (a) {
            if (!e(s, a)) {
              i(a);
              return;
            }
          }
      })();
    });
  }
  function ky(t) {
    return ("0" + t.toString(16)).substr(-2);
  }
  function Sy() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
      const n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
        r = n.length;
      let i = "";
      for (let s = 0; s < 56; s++) i += n.charAt(Math.floor(Math.random() * r));
      return i;
    }
    return crypto.getRandomValues(e), Array.from(e, ky).join("");
  }
  async function Ey(t) {
    const n = new TextEncoder().encode(t),
      r = await crypto.subtle.digest("SHA-256", n),
      i = new Uint8Array(r);
    return Array.from(i)
      .map((s) => String.fromCharCode(s))
      .join("");
  }
  async function Cy(t) {
    if (
      !(
        typeof crypto < "u" &&
        typeof crypto.subtle < "u" &&
        typeof TextEncoder < "u"
      )
    )
      return (
        console.warn(
          "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
        ),
        t
      );
    const n = await Ey(t);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function on(t, e, n = !1) {
    const r = Sy();
    let i = r;
    n && (i += "/PASSWORD_RECOVERY"), await Jc(t, `${e}-code-verifier`, i);
    const s = await Cy(r);
    return [s, r === s ? "plain" : "s256"];
  }
  const Ay = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function Py(t) {
    const e = t.headers.get(pa);
    if (!e || !e.match(Ay)) return null;
    try {
      return new Date(`${e}T00:00:00.0Z`);
    } catch {
      return null;
    }
  }
  function Ty(t) {
    if (!t) throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e) throw new Error("JWT has expired");
  }
  function Iy(t) {
    switch (t) {
      case "RS256":
        return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
      case "ES256":
        return {
          name: "ECDSA",
          namedCurve: "P-256",
          hash: { name: "SHA-256" },
        };
      default:
        throw new Error("Invalid alg claim");
    }
  }
  var Ry = function (t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]]);
    return n;
  };
  const At = (t) =>
      t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    Oy = [502, 503, 504];
  async function Kc(t) {
    var e;
    if (!by(t)) throw new _a(At(t), 0);
    if (Oy.includes(t.status)) throw new _a(At(t), t.status);
    let n;
    try {
      n = await t.json();
    } catch (s) {
      throw new Mc(At(s), s);
    }
    let r;
    const i = Py(t);
    if (
      (i &&
      i.getTime() >= Fc["2024-01-01"].timestamp &&
      typeof n == "object" &&
      n &&
      typeof n.code == "string"
        ? (r = n.code)
        : typeof n == "object" &&
          n &&
          typeof n.error_code == "string" &&
          (r = n.error_code),
      r)
    ) {
      if (r === "weak_password")
        throw new Uc(
          At(n),
          t.status,
          ((e = n.weak_password) === null || e === void 0
            ? void 0
            : e.reasons) || []
        );
      if (r === "session_not_found") throw new pt();
    } else if (
      typeof n == "object" &&
      n &&
      typeof n.weak_password == "object" &&
      n.weak_password &&
      Array.isArray(n.weak_password.reasons) &&
      n.weak_password.reasons.length &&
      n.weak_password.reasons.reduce((s, a) => s && typeof a == "string", !0)
    )
      throw new Uc(At(n), t.status, n.weak_password.reasons);
    throw new oy(At(n), t.status || 500, r);
  }
  const $y = (t, e, n, r) => {
    const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    return t === "GET"
      ? i
      : ((i.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e == null ? void 0 : e.headers
        )),
        (i.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, i), n));
  };
  async function W(t, e, n, r) {
    var i;
    const s = Object.assign({}, r == null ? void 0 : r.headers);
    s[pa] || (s[pa] = Fc["2024-01-01"].name),
      r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
    const a =
      (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
    r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
    const o = Object.keys(a).length
        ? "?" + new URLSearchParams(a).toString()
        : "",
      l = await Ly(
        t,
        e,
        n + o,
        { headers: s, noResolveJson: r == null ? void 0 : r.noResolveJson },
        {},
        r == null ? void 0 : r.body
      );
    return r != null && r.xform
      ? r == null
        ? void 0
        : r.xform(l)
      : { data: Object.assign({}, l), error: null };
  }
  async function Ly(t, e, n, r, i, s) {
    const a = $y(e, r, i, s);
    let o;
    try {
      o = await t(n, Object.assign({}, a));
    } catch (l) {
      throw (console.error(l), new _a(At(l), 0));
    }
    if ((o.ok || (await Kc(o)), r != null && r.noResolveJson)) return o;
    try {
      return await o.json();
    } catch (l) {
      await Kc(l);
    }
  }
  function mt(t) {
    var e;
    let n = null;
    Fy(t) &&
      ((n = Object.assign({}, t)),
      t.expires_at || (n.expires_at = _y(t.expires_in)));
    const r = (e = t.user) !== null && e !== void 0 ? e : t;
    return { data: { session: n, user: r }, error: null };
  }
  function Gc(t) {
    const e = mt(t);
    return (
      !e.error &&
        t.weak_password &&
        typeof t.weak_password == "object" &&
        Array.isArray(t.weak_password.reasons) &&
        t.weak_password.reasons.length &&
        t.weak_password.message &&
        typeof t.weak_password.message == "string" &&
        t.weak_password.reasons.reduce(
          (n, r) => n && typeof r == "string",
          !0
        ) &&
        (e.data.weak_password = t.weak_password),
      e
    );
  }
  function gt(t) {
    var e;
    return {
      data: { user: (e = t.user) !== null && e !== void 0 ? e : t },
      error: null,
    };
  }
  function jy(t) {
    return { data: t, error: null };
  }
  function Ny(t) {
    const {
        action_link: e,
        email_otp: n,
        hashed_token: r,
        redirect_to: i,
        verification_type: s,
      } = t,
      a = Ry(t, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type",
      ]),
      o = {
        action_link: e,
        email_otp: n,
        hashed_token: r,
        redirect_to: i,
        verification_type: s,
      },
      l = Object.assign({}, a);
    return { data: { properties: o, user: l }, error: null };
  }
  function Dy(t) {
    return t;
  }
  function Fy(t) {
    return t.access_token && t.refresh_token && t.expires_in;
  }
  var My = function (t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]]);
    return n;
  };
  class By {
    constructor({ url: e = "", headers: n = {}, fetch: r }) {
      (this.url = e),
        (this.headers = n),
        (this.fetch = Wc(r)),
        (this.mfa = {
          listFactors: this._listFactors.bind(this),
          deleteFactor: this._deleteFactor.bind(this),
        });
    }
    async signOut(e, n = "global") {
      try {
        return (
          await W(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (r) {
        if (H(r)) return { data: null, error: r };
        throw r;
      }
    }
    async inviteUserByEmail(e, n = {}) {
      try {
        return await W(this.fetch, "POST", `${this.url}/invite`, {
          body: { email: e, data: n.data },
          headers: this.headers,
          redirectTo: n.redirectTo,
          xform: gt,
        });
      } catch (r) {
        if (H(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async generateLink(e) {
      try {
        const { options: n } = e,
          r = My(e, ["options"]),
          i = Object.assign(Object.assign({}, r), n);
        return (
          "newEmail" in r &&
            ((i.new_email = r == null ? void 0 : r.newEmail),
            delete i.newEmail),
          await W(this.fetch, "POST", `${this.url}/admin/generate_link`, {
            body: i,
            headers: this.headers,
            xform: Ny,
            redirectTo: n == null ? void 0 : n.redirectTo,
          })
        );
      } catch (n) {
        if (H(n)) return { data: { properties: null, user: null }, error: n };
        throw n;
      }
    }
    async createUser(e) {
      try {
        return await W(this.fetch, "POST", `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: gt,
        });
      } catch (n) {
        if (H(n)) return { data: { user: null }, error: n };
        throw n;
      }
    }
    async listUsers(e) {
      var n, r, i, s, a, o, l;
      try {
        const u = { nextPage: null, lastPage: 0, total: 0 },
          c = await W(this.fetch, "GET", `${this.url}/admin/users`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page:
                (r =
                  (n = e == null ? void 0 : e.page) === null || n === void 0
                    ? void 0
                    : n.toString()) !== null && r !== void 0
                  ? r
                  : "",
              per_page:
                (s =
                  (i = e == null ? void 0 : e.perPage) === null || i === void 0
                    ? void 0
                    : i.toString()) !== null && s !== void 0
                  ? s
                  : "",
            },
            xform: Dy,
          });
        if (c.error) throw c.error;
        const h = await c.json(),
          f =
            (a = c.headers.get("x-total-count")) !== null && a !== void 0
              ? a
              : 0,
          d =
            (l =
              (o = c.headers.get("link")) === null || o === void 0
                ? void 0
                : o.split(",")) !== null && l !== void 0
              ? l
              : [];
        return (
          d.length > 0 &&
            (d.forEach((g) => {
              const _ = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)),
                y = JSON.parse(g.split(";")[1].split("=")[1]);
              u[`${y}Page`] = _;
            }),
            (u.total = parseInt(f))),
          { data: Object.assign(Object.assign({}, h), u), error: null }
        );
      } catch (u) {
        if (H(u)) return { data: { users: [] }, error: u };
        throw u;
      }
    }
    async getUserById(e) {
      try {
        return await W(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: gt,
        });
      } catch (n) {
        if (H(n)) return { data: { user: null }, error: n };
        throw n;
      }
    }
    async updateUserById(e, n) {
      try {
        return await W(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
          body: n,
          headers: this.headers,
          xform: gt,
        });
      } catch (r) {
        if (H(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async deleteUser(e, n = !1) {
      try {
        return await W(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          body: { should_soft_delete: n },
          xform: gt,
        });
      } catch (r) {
        if (H(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async _listFactors(e) {
      try {
        const { data: n, error: r } = await W(
          this.fetch,
          "GET",
          `${this.url}/admin/users/${e.userId}/factors`,
          {
            headers: this.headers,
            xform: (i) => ({ data: { factors: i }, error: null }),
          }
        );
        return { data: n, error: r };
      } catch (n) {
        if (H(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _deleteFactor(e) {
      try {
        return {
          data: await W(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (H(n)) return { data: null, error: n };
        throw n;
      }
    }
  }
  const Uy = {
    getItem: (t) => (Kn() ? globalThis.localStorage.getItem(t) : null),
    setItem: (t, e) => {
      Kn() && globalThis.localStorage.setItem(t, e);
    },
    removeItem: (t) => {
      Kn() && globalThis.localStorage.removeItem(t);
    },
  };
  function Xc(t = {}) {
    return {
      getItem: (e) => t[e] || null,
      setItem: (e, n) => {
        t[e] = n;
      },
      removeItem: (e) => {
        delete t[e];
      },
    };
  }
  function zy() {
    if (typeof globalThis != "object")
      try {
        Object.defineProperty(Object.prototype, "__magic__", {
          get: function () {
            return this;
          },
          configurable: !0,
        }),
          (__magic__.globalThis = __magic__),
          delete Object.prototype.__magic__;
      } catch {
        typeof self < "u" && (self.globalThis = self);
      }
  }
  const ln = {
    debug: !!(
      globalThis &&
      Kn() &&
      globalThis.localStorage &&
      globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") ===
        "true"
    ),
  };
  class Qc extends Error {
    constructor(e) {
      super(e), (this.isAcquireTimeout = !0);
    }
  }
  class qy extends Qc {}
  async function Hy(t, e, n) {
    ln.debug &&
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const r = new globalThis.AbortController();
    return (
      e > 0 &&
        setTimeout(() => {
          r.abort(),
            ln.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock acquire timed out",
                t
              );
        }, e),
      await Promise.resolve().then(() =>
        globalThis.navigator.locks.request(
          t,
          e === 0
            ? { mode: "exclusive", ifAvailable: !0 }
            : { mode: "exclusive", signal: r.signal },
          async (i) => {
            if (i) {
              ln.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: acquired",
                  t,
                  i.name
                );
              try {
                return await n();
              } finally {
                ln.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: released",
                    t,
                    i.name
                  );
              }
            } else {
              if (e === 0)
                throw (
                  (ln.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: not immediately available",
                      t
                    ),
                  new qy(
                    `Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`
                  ))
                );
              if (ln.debug)
                try {
                  const s = await globalThis.navigator.locks.query();
                  console.log(
                    "@supabase/gotrue-js: Navigator LockManager state",
                    JSON.stringify(s, null, "  ")
                  );
                } catch (s) {
                  console.warn(
                    "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                    s
                  );
                }
              return (
                console.warn(
                  "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                ),
                await n()
              );
            }
          }
        )
      )
    );
  }
  zy();
  const Vy = {
    url: ny,
    storageKey: ry,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: iy,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
  };
  async function Yc(t, e, n) {
    return await n();
  }
  class Gn {
    constructor(e) {
      var n, r;
      (this.memoryStorage = null),
        (this.stateChangeEmitters = new Map()),
        (this.autoRefreshTicker = null),
        (this.visibilityChangedCallback = null),
        (this.refreshingDeferred = null),
        (this.initializePromise = null),
        (this.detectSessionInUrl = !0),
        (this.hasCustomAuthorizationHeader = !1),
        (this.suppressGetSessionWarning = !1),
        (this.lockAcquired = !1),
        (this.pendingInLock = []),
        (this.broadcastChannel = null),
        (this.logger = console.log),
        (this.instanceID = Gn.nextInstanceID),
        (Gn.nextInstanceID += 1),
        this.instanceID > 0 &&
          Ke() &&
          console.warn(
            "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
          );
      const i = Object.assign(Object.assign({}, Vy), e);
      if (
        ((this.logDebugMessages = !!i.debug),
        typeof i.debug == "function" && (this.logger = i.debug),
        (this.persistSession = i.persistSession),
        (this.storageKey = i.storageKey),
        (this.autoRefreshToken = i.autoRefreshToken),
        (this.admin = new By({
          url: i.url,
          headers: i.headers,
          fetch: i.fetch,
        })),
        (this.url = i.url),
        (this.headers = i.headers),
        (this.fetch = Wc(i.fetch)),
        (this.lock = i.lock || Yc),
        (this.detectSessionInUrl = i.detectSessionInUrl),
        (this.flowType = i.flowType),
        (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
        i.lock
          ? (this.lock = i.lock)
          : Ke() &&
            !(
              (n = globalThis == null ? void 0 : globalThis.navigator) ===
                null || n === void 0
            ) &&
            n.locks
          ? (this.lock = Hy)
          : (this.lock = Yc),
        (this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
        (this.mfa = {
          verify: this._verify.bind(this),
          enroll: this._enroll.bind(this),
          unenroll: this._unenroll.bind(this),
          challenge: this._challenge.bind(this),
          listFactors: this._listFactors.bind(this),
          challengeAndVerify: this._challengeAndVerify.bind(this),
          getAuthenticatorAssuranceLevel:
            this._getAuthenticatorAssuranceLevel.bind(this),
        }),
        this.persistSession
          ? i.storage
            ? (this.storage = i.storage)
            : Kn()
            ? (this.storage = Uy)
            : ((this.memoryStorage = {}),
              (this.storage = Xc(this.memoryStorage)))
          : ((this.memoryStorage = {}),
            (this.storage = Xc(this.memoryStorage))),
        Ke() &&
          globalThis.BroadcastChannel &&
          this.persistSession &&
          this.storageKey)
      ) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(
            this.storageKey
          );
        } catch (s) {
          console.error(
            "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
            s
          );
        }
        (r = this.broadcastChannel) === null ||
          r === void 0 ||
          r.addEventListener("message", async (s) => {
            this._debug(
              "received broadcast notification from other tab or client",
              s
            ),
              await this._notifyAllSubscribers(
                s.data.event,
                s.data.session,
                !1
              );
          });
      }
      this.initialize();
    }
    _debug(...e) {
      return (
        this.logDebugMessages &&
          this.logger(
            `GoTrueClient@${
              this.instanceID
            } (${Dc}) ${new Date().toISOString()}`,
            ...e
          ),
        this
      );
    }
    async initialize() {
      return this.initializePromise
        ? await this.initializePromise
        : ((this.initializePromise = (async () =>
            await this._acquireLock(
              -1,
              async () => await this._initialize()
            ))()),
          await this.initializePromise);
    }
    async _initialize() {
      var e;
      try {
        const n = wy(window.location.href);
        let r = "none";
        if (
          (this._isImplicitGrantCallback(n)
            ? (r = "implicit")
            : (await this._isPKCECallback(n)) && (r = "pkce"),
          Ke() && this.detectSessionInUrl && r !== "none")
        ) {
          const { data: i, error: s } = await this._getSessionFromURL(n, r);
          if (s) {
            if (
              (this._debug(
                "#_initialize()",
                "error detecting session from URL",
                s
              ),
              cy(s))
            ) {
              const l =
                (e = s.details) === null || e === void 0 ? void 0 : e.code;
              if (
                l === "identity_already_exists" ||
                l === "identity_not_found" ||
                l === "single_identity_not_deletable"
              )
                return { error: s };
            }
            return await this._removeSession(), { error: s };
          }
          const { session: a, redirectType: o } = i;
          return (
            this._debug(
              "#_initialize()",
              "detected session in URL",
              a,
              "redirect type",
              o
            ),
            await this._saveSession(a),
            setTimeout(async () => {
              o === "recovery"
                ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a)
                : await this._notifyAllSubscribers("SIGNED_IN", a);
            }, 0),
            { error: null }
          );
        }
        return await this._recoverAndRefresh(), { error: null };
      } catch (n) {
        return H(n)
          ? { error: n }
          : { error: new Mc("Unexpected error during initialization", n) };
      } finally {
        await this._handleVisibilityChange(),
          this._debug("#_initialize()", "end");
      }
    }
    async signInAnonymously(e) {
      var n, r, i;
      try {
        const s = await W(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              data:
                (r =
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                    ? void 0
                    : n.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token:
                  (i = e == null ? void 0 : e.options) === null || i === void 0
                    ? void 0
                    : i.captchaToken,
              },
            },
            xform: mt,
          }),
          { data: a, error: o } = s;
        if (o || !a) return { data: { user: null, session: null }, error: o };
        const l = a.session,
          u = a.user;
        return (
          a.session &&
            (await this._saveSession(a.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: u, session: l }, error: null }
        );
      } catch (s) {
        if (H(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    }
    async signUp(e) {
      var n, r, i;
      try {
        let s;
        if ("email" in e) {
          const { email: c, password: h, options: f } = e;
          let d = null,
            g = null;
          this.flowType === "pkce" &&
            ([d, g] = await on(this.storage, this.storageKey)),
            (s = await W(this.fetch, "POST", `${this.url}/signup`, {
              headers: this.headers,
              redirectTo: f == null ? void 0 : f.emailRedirectTo,
              body: {
                email: c,
                password: h,
                data:
                  (n = f == null ? void 0 : f.data) !== null && n !== void 0
                    ? n
                    : {},
                gotrue_meta_security: {
                  captcha_token: f == null ? void 0 : f.captchaToken,
                },
                code_challenge: d,
                code_challenge_method: g,
              },
              xform: mt,
            }));
        } else if ("phone" in e) {
          const { phone: c, password: h, options: f } = e;
          s = await W(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: c,
              password: h,
              data:
                (r = f == null ? void 0 : f.data) !== null && r !== void 0
                  ? r
                  : {},
              channel:
                (i = f == null ? void 0 : f.channel) !== null && i !== void 0
                  ? i
                  : "sms",
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
            },
            xform: mt,
          });
        } else
          throw new Xr(
            "You must provide either an email or phone number and a password"
          );
        const { data: a, error: o } = s;
        if (o || !a) return { data: { user: null, session: null }, error: o };
        const l = a.session,
          u = a.user;
        return (
          a.session &&
            (await this._saveSession(a.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: u, session: l }, error: null }
        );
      } catch (s) {
        if (H(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    }
    async signInWithPassword(e) {
      try {
        let n;
        if ("email" in e) {
          const { email: s, password: a, options: o } = e;
          n = await W(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: s,
                password: a,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: Gc,
            }
          );
        } else if ("phone" in e) {
          const { phone: s, password: a, options: o } = e;
          n = await W(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: s,
                password: a,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: Gc,
            }
          );
        } else
          throw new Xr(
            "You must provide either an email or phone number and a password"
          );
        const { data: r, error: i } = n;
        return i
          ? { data: { user: null, session: null }, error: i }
          : !r || !r.session || !r.user
          ? { data: { user: null, session: null }, error: new ga() }
          : (r.session &&
              (await this._saveSession(r.session),
              await this._notifyAllSubscribers("SIGNED_IN", r.session)),
            {
              data: Object.assign(
                { user: r.user, session: r.session },
                r.weak_password ? { weakPassword: r.weak_password } : null
              ),
              error: i,
            });
      } catch (n) {
        if (H(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async signInWithOAuth(e) {
      var n, r, i, s;
      return await this._handleProviderSignIn(e.provider, {
        redirectTo:
          (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
        scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (i = e.options) === null || i === void 0 ? void 0 : i.queryParams,
        skipBrowserRedirect:
          (s = e.options) === null || s === void 0
            ? void 0
            : s.skipBrowserRedirect,
      });
    }
    async exchangeCodeForSession(e) {
      return (
        await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
      );
    }
    async _exchangeCodeForSession(e) {
      const n = await Yr(this.storage, `${this.storageKey}-code-verifier`),
        [r, i] = (n ?? "").split("/");
      try {
        const { data: s, error: a } = await W(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=pkce`,
          {
            headers: this.headers,
            body: { auth_code: e, code_verifier: r },
            xform: mt,
          }
        );
        if ((await Zr(this.storage, `${this.storageKey}-code-verifier`), a))
          throw a;
        return !s || !s.session || !s.user
          ? {
              data: { user: null, session: null, redirectType: null },
              error: new ga(),
            }
          : (s.session &&
              (await this._saveSession(s.session),
              await this._notifyAllSubscribers("SIGNED_IN", s.session)),
            {
              data: Object.assign(Object.assign({}, s), {
                redirectType: i ?? null,
              }),
              error: a,
            });
      } catch (s) {
        if (H(s))
          return {
            data: { user: null, session: null, redirectType: null },
            error: s,
          };
        throw s;
      }
    }
    async signInWithIdToken(e) {
      try {
        const {
            options: n,
            provider: r,
            token: i,
            access_token: s,
            nonce: a,
          } = e,
          o = await W(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              body: {
                provider: r,
                id_token: i,
                access_token: s,
                nonce: a,
                gotrue_meta_security: {
                  captcha_token: n == null ? void 0 : n.captchaToken,
                },
              },
              xform: mt,
            }
          ),
          { data: l, error: u } = o;
        return u
          ? { data: { user: null, session: null }, error: u }
          : !l || !l.session || !l.user
          ? { data: { user: null, session: null }, error: new ga() }
          : (l.session &&
              (await this._saveSession(l.session),
              await this._notifyAllSubscribers("SIGNED_IN", l.session)),
            { data: l, error: u });
      } catch (n) {
        if (H(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async signInWithOtp(e) {
      var n, r, i, s, a;
      try {
        if ("email" in e) {
          const { email: o, options: l } = e;
          let u = null,
            c = null;
          this.flowType === "pkce" &&
            ([u, c] = await on(this.storage, this.storageKey));
          const { error: h } = await W(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email: o,
              data:
                (n = l == null ? void 0 : l.data) !== null && n !== void 0
                  ? n
                  : {},
              create_user:
                (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
                r !== void 0
                  ? r
                  : !0,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
              code_challenge: u,
              code_challenge_method: c,
            },
            redirectTo: l == null ? void 0 : l.emailRedirectTo,
          });
          return { data: { user: null, session: null }, error: h };
        }
        if ("phone" in e) {
          const { phone: o, options: l } = e,
            { data: u, error: c } = await W(
              this.fetch,
              "POST",
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  phone: o,
                  data:
                    (i = l == null ? void 0 : l.data) !== null && i !== void 0
                      ? i
                      : {},
                  create_user:
                    (s = l == null ? void 0 : l.shouldCreateUser) !== null &&
                    s !== void 0
                      ? s
                      : !0,
                  gotrue_meta_security: {
                    captcha_token: l == null ? void 0 : l.captchaToken,
                  },
                  channel:
                    (a = l == null ? void 0 : l.channel) !== null &&
                    a !== void 0
                      ? a
                      : "sms",
                },
              }
            );
          return {
            data: {
              user: null,
              session: null,
              messageId: u == null ? void 0 : u.message_id,
            },
            error: c,
          };
        }
        throw new Xr("You must provide either an email or phone number.");
      } catch (o) {
        if (H(o)) return { data: { user: null, session: null }, error: o };
        throw o;
      }
    }
    async verifyOtp(e) {
      var n, r;
      try {
        let i, s;
        "options" in e &&
          ((i =
            (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo),
          (s =
            (r = e.options) === null || r === void 0
              ? void 0
              : r.captchaToken));
        const { data: a, error: o } = await W(
          this.fetch,
          "POST",
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: { captcha_token: s },
            }),
            redirectTo: i,
            xform: mt,
          }
        );
        if (o) throw o;
        if (!a) throw new Error("An error occurred on token verification.");
        const l = a.session,
          u = a.user;
        return (
          l != null &&
            l.access_token &&
            (await this._saveSession(l),
            await this._notifyAllSubscribers(
              e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
              l
            )),
          { data: { user: u, session: l }, error: null }
        );
      } catch (i) {
        if (H(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signInWithSSO(e) {
      var n, r, i;
      try {
        let s = null,
          a = null;
        return (
          this.flowType === "pkce" &&
            ([s, a] = await on(this.storage, this.storageKey)),
          await W(this.fetch, "POST", `${this.url}/sso`, {
            body: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      "providerId" in e ? { provider_id: e.providerId } : null
                    ),
                    "domain" in e ? { domain: e.domain } : null
                  ),
                  {
                    redirect_to:
                      (r =
                        (n = e.options) === null || n === void 0
                          ? void 0
                          : n.redirectTo) !== null && r !== void 0
                        ? r
                        : void 0,
                  }
                ),
                !(
                  (i = e == null ? void 0 : e.options) === null || i === void 0
                ) && i.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token: e.options.captchaToken,
                      },
                    }
                  : null
              ),
              {
                skip_http_redirect: !0,
                code_challenge: s,
                code_challenge_method: a,
              }
            ),
            headers: this.headers,
            xform: jy,
          })
        );
      } catch (s) {
        if (H(s)) return { data: null, error: s };
        throw s;
      }
    }
    async reauthenticate() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
      );
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (e) => {
          const {
            data: { session: n },
            error: r,
          } = e;
          if (r) throw r;
          if (!n) throw new pt();
          const { error: i } = await W(
            this.fetch,
            "GET",
            `${this.url}/reauthenticate`,
            { headers: this.headers, jwt: n.access_token }
          );
          return { data: { user: null, session: null }, error: i };
        });
      } catch (e) {
        if (H(e)) return { data: { user: null, session: null }, error: e };
        throw e;
      }
    }
    async resend(e) {
      try {
        const n = `${this.url}/resend`;
        if ("email" in e) {
          const { email: r, type: i, options: s } = e,
            { error: a } = await W(this.fetch, "POST", n, {
              headers: this.headers,
              body: {
                email: r,
                type: i,
                gotrue_meta_security: {
                  captcha_token: s == null ? void 0 : s.captchaToken,
                },
              },
              redirectTo: s == null ? void 0 : s.emailRedirectTo,
            });
          return { data: { user: null, session: null }, error: a };
        } else if ("phone" in e) {
          const { phone: r, type: i, options: s } = e,
            { data: a, error: o } = await W(this.fetch, "POST", n, {
              headers: this.headers,
              body: {
                phone: r,
                type: i,
                gotrue_meta_security: {
                  captcha_token: s == null ? void 0 : s.captchaToken,
                },
              },
            });
          return {
            data: {
              user: null,
              session: null,
              messageId: a == null ? void 0 : a.message_id,
            },
            error: o,
          };
        }
        throw new Xr(
          "You must provide either an email or phone number and a type"
        );
      } catch (n) {
        if (H(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async getSession() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () =>
          this._useSession(async (n) => n)
        )
      );
    }
    async _acquireLock(e, n) {
      this._debug("#_acquireLock", "begin", e);
      try {
        if (this.lockAcquired) {
          const r = this.pendingInLock.length
              ? this.pendingInLock[this.pendingInLock.length - 1]
              : Promise.resolve(),
            i = (async () => (await r, await n()))();
          return (
            this.pendingInLock.push(
              (async () => {
                try {
                  await i;
                } catch {}
              })()
            ),
            i
          );
        }
        return await this.lock(`lock:${this.storageKey}`, e, async () => {
          this._debug(
            "#_acquireLock",
            "lock acquired for storage key",
            this.storageKey
          );
          try {
            this.lockAcquired = !0;
            const r = n();
            for (
              this.pendingInLock.push(
                (async () => {
                  try {
                    await r;
                  } catch {}
                })()
              ),
                await r;
              this.pendingInLock.length;

            ) {
              const i = [...this.pendingInLock];
              await Promise.all(i), this.pendingInLock.splice(0, i.length);
            }
            return await r;
          } finally {
            this._debug(
              "#_acquireLock",
              "lock released for storage key",
              this.storageKey
            ),
              (this.lockAcquired = !1);
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(e) {
      this._debug("#_useSession", "begin");
      try {
        const n = await this.__loadSession();
        return await e(n);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin"),
        this.lockAcquired ||
          this._debug(
            "#__loadSession()",
            "used outside of an acquired lock!",
            new Error().stack
          );
      try {
        let e = null;
        const n = await Yr(this.storage, this.storageKey);
        if (
          (this._debug("#getSession()", "session from storage", n),
          n !== null &&
            (this._isValidSession(n)
              ? (e = n)
              : (this._debug(
                  "#getSession()",
                  "session from storage is not valid"
                ),
                await this._removeSession())),
          !e)
        )
          return { data: { session: null }, error: null };
        const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < fa : !1;
        if (
          (this._debug(
            "#__loadSession()",
            `session has${r ? "" : " not"} expired`,
            "expires_at",
            e.expires_at
          ),
          !r)
        ) {
          if (this.storage.isServer) {
            let a = this.suppressGetSessionWarning;
            e = new Proxy(e, {
              get: (l, u, c) => (
                !a &&
                  u === "user" &&
                  (console.warn(
                    "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                  ),
                  (a = !0),
                  (this.suppressGetSessionWarning = !0)),
                Reflect.get(l, u, c)
              ),
            });
          }
          return { data: { session: e }, error: null };
        }
        const { session: i, error: s } = await this._callRefreshToken(
          e.refresh_token
        );
        return s
          ? { data: { session: null }, error: s }
          : { data: { session: i }, error: null };
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(e) {
      return e
        ? await this._getUser(e)
        : (await this.initializePromise,
          await this._acquireLock(-1, async () => await this._getUser()));
    }
    async _getUser(e) {
      try {
        return e
          ? await W(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: e,
              xform: gt,
            })
          : await this._useSession(async (n) => {
              var r, i, s;
              const { data: a, error: o } = n;
              if (o) throw o;
              return !(
                !((r = a.session) === null || r === void 0) && r.access_token
              ) && !this.hasCustomAuthorizationHeader
                ? { data: { user: null }, error: new pt() }
                : await W(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      (s =
                        (i = a.session) === null || i === void 0
                          ? void 0
                          : i.access_token) !== null && s !== void 0
                        ? s
                        : void 0,
                    xform: gt,
                  });
            });
      } catch (n) {
        if (H(n))
          return (
            uy(n) &&
              (await this._removeSession(),
              await Zr(this.storage, `${this.storageKey}-code-verifier`)),
            { data: { user: null }, error: n }
          );
        throw n;
      }
    }
    async updateUser(e, n = {}) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(e, n))
      );
    }
    async _updateUser(e, n = {}) {
      try {
        return await this._useSession(async (r) => {
          const { data: i, error: s } = r;
          if (s) throw s;
          if (!i.session) throw new pt();
          const a = i.session;
          let o = null,
            l = null;
          this.flowType === "pkce" &&
            e.email != null &&
            ([o, l] = await on(this.storage, this.storageKey));
          const { data: u, error: c } = await W(
            this.fetch,
            "PUT",
            `${this.url}/user`,
            {
              headers: this.headers,
              redirectTo: n == null ? void 0 : n.emailRedirectTo,
              body: Object.assign(Object.assign({}, e), {
                code_challenge: o,
                code_challenge_method: l,
              }),
              jwt: a.access_token,
              xform: gt,
            }
          );
          if (c) throw c;
          return (
            (a.user = u.user),
            await this._saveSession(a),
            await this._notifyAllSubscribers("USER_UPDATED", a),
            { data: { user: a.user }, error: null }
          );
        });
      } catch (r) {
        if (H(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async setSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(e))
      );
    }
    async _setSession(e) {
      try {
        if (!e.access_token || !e.refresh_token) throw new pt();
        const n = Date.now() / 1e3;
        let r = n,
          i = !0,
          s = null;
        const { payload: a } = wa(e.access_token);
        if ((a.exp && ((r = a.exp), (i = r <= n)), i)) {
          const { session: o, error: l } = await this._callRefreshToken(
            e.refresh_token
          );
          if (l) return { data: { user: null, session: null }, error: l };
          if (!o) return { data: { user: null, session: null }, error: null };
          s = o;
        } else {
          const { data: o, error: l } = await this._getUser(e.access_token);
          if (l) throw l;
          (s = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: o.user,
            token_type: "bearer",
            expires_in: r - n,
            expires_at: r,
          }),
            await this._saveSession(s),
            await this._notifyAllSubscribers("SIGNED_IN", s);
        }
        return { data: { user: s.user, session: s }, error: null };
      } catch (n) {
        if (H(n)) return { data: { session: null, user: null }, error: n };
        throw n;
      }
    }
    async refreshSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(e))
      );
    }
    async _refreshSession(e) {
      try {
        return await this._useSession(async (n) => {
          var r;
          if (!e) {
            const { data: a, error: o } = n;
            if (o) throw o;
            e = (r = a.session) !== null && r !== void 0 ? r : void 0;
          }
          if (!(e != null && e.refresh_token)) throw new pt();
          const { session: i, error: s } = await this._callRefreshToken(
            e.refresh_token
          );
          return s
            ? { data: { user: null, session: null }, error: s }
            : i
            ? { data: { user: i.user, session: i }, error: null }
            : { data: { user: null, session: null }, error: null };
        });
      } catch (n) {
        if (H(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async _getSessionFromURL(e, n) {
      try {
        if (!Ke()) throw new Qr("No browser detected.");
        if (e.error || e.error_description || e.error_code)
          throw new Qr(
            e.error_description ||
              "Error in URL with unspecified error_description",
            {
              error: e.error || "unspecified_error",
              code: e.error_code || "unspecified_code",
            }
          );
        switch (n) {
          case "implicit":
            if (this.flowType === "pkce")
              throw new Bc("Not a valid PKCE flow url.");
            break;
          case "pkce":
            if (this.flowType === "implicit")
              throw new Qr("Not a valid implicit grant flow url.");
            break;
          default:
        }
        if (n === "pkce") {
          if (
            (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
            !e.code)
          )
            throw new Bc("No code detected.");
          const { data: w, error: x } = await this._exchangeCodeForSession(
            e.code
          );
          if (x) throw x;
          const S = new URL(window.location.href);
          return (
            S.searchParams.delete("code"),
            window.history.replaceState(window.history.state, "", S.toString()),
            { data: { session: w.session, redirectType: null }, error: null }
          );
        }
        const {
          provider_token: r,
          provider_refresh_token: i,
          access_token: s,
          refresh_token: a,
          expires_in: o,
          expires_at: l,
          token_type: u,
        } = e;
        if (!s || !o || !a || !u) throw new Qr("No session defined in URL");
        const c = Math.round(Date.now() / 1e3),
          h = parseInt(o);
        let f = c + h;
        l && (f = parseInt(l));
        const d = f - c;
        d * 1e3 <= an &&
          console.warn(
            `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${h}s`
          );
        const g = f - h;
        c - g >= 120
          ? console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
              g,
              f,
              c
            )
          : c - g < 0 &&
            console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
              g,
              f,
              c
            );
        const { data: _, error: y } = await this._getUser(s);
        if (y) throw y;
        const b = {
          provider_token: r,
          provider_refresh_token: i,
          access_token: s,
          expires_in: h,
          expires_at: f,
          refresh_token: a,
          token_type: u,
          user: _.user,
        };
        return (
          (window.location.hash = ""),
          this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
          { data: { session: b, redirectType: e.type }, error: null }
        );
      } catch (r) {
        if (H(r))
          return { data: { session: null, redirectType: null }, error: r };
        throw r;
      }
    }
    _isImplicitGrantCallback(e) {
      return !!(e.access_token || e.error_description);
    }
    async _isPKCECallback(e) {
      const n = await Yr(this.storage, `${this.storageKey}-code-verifier`);
      return !!(e.code && n);
    }
    async signOut(e = { scope: "global" }) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(e))
      );
    }
    async _signOut({ scope: e } = { scope: "global" }) {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: s } = n;
        if (s) return { error: s };
        const a =
          (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
        if (a) {
          const { error: o } = await this.admin.signOut(a, e);
          if (
            o &&
            !(
              ly(o) &&
              (o.status === 404 || o.status === 401 || o.status === 403)
            )
          )
            return { error: o };
        }
        return (
          e !== "others" &&
            (await this._removeSession(),
            await Zr(this.storage, `${this.storageKey}-code-verifier`)),
          { error: null }
        );
      });
    }
    onAuthStateChange(e) {
      const n = yy(),
        r = {
          id: n,
          callback: e,
          unsubscribe: () => {
            this._debug(
              "#unsubscribe()",
              "state change callback with id removed",
              n
            ),
              this.stateChangeEmitters.delete(n);
          },
        };
      return (
        this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (
          await this.initializePromise,
          await this._acquireLock(-1, async () => {
            this._emitInitialSession(n);
          })
        ))(),
        { data: { subscription: r } }
      );
    }
    async _emitInitialSession(e) {
      return await this._useSession(async (n) => {
        var r, i;
        try {
          const {
            data: { session: s },
            error: a,
          } = n;
          if (a) throw a;
          await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
            ? void 0
            : r.callback("INITIAL_SESSION", s)),
            this._debug("INITIAL_SESSION", "callback id", e, "session", s);
        } catch (s) {
          await ((i = this.stateChangeEmitters.get(e)) === null || i === void 0
            ? void 0
            : i.callback("INITIAL_SESSION", null)),
            this._debug("INITIAL_SESSION", "callback id", e, "error", s),
            console.error(s);
        }
      });
    }
    async resetPasswordForEmail(e, n = {}) {
      let r = null,
        i = null;
      this.flowType === "pkce" &&
        ([r, i] = await on(this.storage, this.storageKey, !0));
      try {
        return await W(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email: e,
            code_challenge: r,
            code_challenge_method: i,
            gotrue_meta_security: { captcha_token: n.captchaToken },
          },
          headers: this.headers,
          redirectTo: n.redirectTo,
        });
      } catch (s) {
        if (H(s)) return { data: null, error: s };
        throw s;
      }
    }
    async getUserIdentities() {
      var e;
      try {
        const { data: n, error: r } = await this.getUser();
        if (r) throw r;
        return {
          data: {
            identities:
              (e = n.user.identities) !== null && e !== void 0 ? e : [],
          },
          error: null,
        };
      } catch (n) {
        if (H(n)) return { data: null, error: n };
        throw n;
      }
    }
    async linkIdentity(e) {
      var n;
      try {
        const { data: r, error: i } = await this._useSession(async (s) => {
          var a, o, l, u, c;
          const { data: h, error: f } = s;
          if (f) throw f;
          const d = await this._getUrlForProvider(
            `${this.url}/user/identities/authorize`,
            e.provider,
            {
              redirectTo:
                (a = e.options) === null || a === void 0
                  ? void 0
                  : a.redirectTo,
              scopes:
                (o = e.options) === null || o === void 0 ? void 0 : o.scopes,
              queryParams:
                (l = e.options) === null || l === void 0
                  ? void 0
                  : l.queryParams,
              skipBrowserRedirect: !0,
            }
          );
          return await W(this.fetch, "GET", d, {
            headers: this.headers,
            jwt:
              (c =
                (u = h.session) === null || u === void 0
                  ? void 0
                  : u.access_token) !== null && c !== void 0
                ? c
                : void 0,
          });
        });
        if (i) throw i;
        return (
          Ke() &&
            !(
              !((n = e.options) === null || n === void 0) &&
              n.skipBrowserRedirect
            ) &&
            window.location.assign(r == null ? void 0 : r.url),
          {
            data: { provider: e.provider, url: r == null ? void 0 : r.url },
            error: null,
          }
        );
      } catch (r) {
        if (H(r))
          return { data: { provider: e.provider, url: null }, error: r };
        throw r;
      }
    }
    async unlinkIdentity(e) {
      try {
        return await this._useSession(async (n) => {
          var r, i;
          const { data: s, error: a } = n;
          if (a) throw a;
          return await W(
            this.fetch,
            "DELETE",
            `${this.url}/user/identities/${e.identity_id}`,
            {
              headers: this.headers,
              jwt:
                (i =
                  (r = s.session) === null || r === void 0
                    ? void 0
                    : r.access_token) !== null && i !== void 0
                  ? i
                  : void 0,
            }
          );
        });
      } catch (n) {
        if (H(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _refreshAccessToken(e) {
      const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
      this._debug(n, "begin");
      try {
        const r = Date.now();
        return await xy(
          async (i) => (
            i > 0 && (await vy(200 * Math.pow(2, i - 1))),
            this._debug(n, "refreshing attempt", i),
            await W(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=refresh_token`,
              { body: { refresh_token: e }, headers: this.headers, xform: mt }
            )
          ),
          (i, s) => {
            const a = 200 * Math.pow(2, i);
            return s && ya(s) && Date.now() + a - r < an;
          }
        );
      } catch (r) {
        if ((this._debug(n, "error", r), H(r)))
          return { data: { session: null, user: null }, error: r };
        throw r;
      } finally {
        this._debug(n, "end");
      }
    }
    _isValidSession(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        "access_token" in e &&
        "refresh_token" in e &&
        "expires_at" in e
      );
    }
    async _handleProviderSignIn(e, n) {
      const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
        redirectTo: n.redirectTo,
        scopes: n.scopes,
        queryParams: n.queryParams,
      });
      return (
        this._debug(
          "#_handleProviderSignIn()",
          "provider",
          e,
          "options",
          n,
          "url",
          r
        ),
        Ke() && !n.skipBrowserRedirect && window.location.assign(r),
        { data: { provider: e, url: r }, error: null }
      );
    }
    async _recoverAndRefresh() {
      var e;
      const n = "#_recoverAndRefresh()";
      this._debug(n, "begin");
      try {
        const r = await Yr(this.storage, this.storageKey);
        if (
          (this._debug(n, "session from storage", r), !this._isValidSession(r))
        ) {
          this._debug(n, "session is not valid"),
            r !== null && (await this._removeSession());
          return;
        }
        const i =
          ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) * 1e3 -
            Date.now() <
          fa;
        if (
          (this._debug(
            n,
            `session has${i ? "" : " not"} expired with margin of ${fa}s`
          ),
          i)
        ) {
          if (this.autoRefreshToken && r.refresh_token) {
            const { error: s } = await this._callRefreshToken(r.refresh_token);
            s &&
              (console.error(s),
              ya(s) ||
                (this._debug(
                  n,
                  "refresh failed with a non-retryable error, removing the session",
                  s
                ),
                await this._removeSession()));
          }
        } else await this._notifyAllSubscribers("SIGNED_IN", r);
      } catch (r) {
        this._debug(n, "error", r), console.error(r);
        return;
      } finally {
        this._debug(n, "end");
      }
    }
    async _callRefreshToken(e) {
      var n, r;
      if (!e) throw new pt();
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      const i = `#_callRefreshToken(${e.substring(0, 5)}...)`;
      this._debug(i, "begin");
      try {
        this.refreshingDeferred = new ei();
        const { data: s, error: a } = await this._refreshAccessToken(e);
        if (a) throw a;
        if (!s.session) throw new pt();
        await this._saveSession(s.session),
          await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
        const o = { session: s.session, error: null };
        return this.refreshingDeferred.resolve(o), o;
      } catch (s) {
        if ((this._debug(i, "error", s), H(s))) {
          const a = { session: null, error: s };
          return (
            ya(s) || (await this._removeSession()),
            (n = this.refreshingDeferred) === null ||
              n === void 0 ||
              n.resolve(a),
            a
          );
        }
        throw (
          ((r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.reject(s),
          s)
        );
      } finally {
        (this.refreshingDeferred = null), this._debug(i, "end");
      }
    }
    async _notifyAllSubscribers(e, n, r = !0) {
      const i = `#_notifyAllSubscribers(${e})`;
      this._debug(i, "begin", n, `broadcast = ${r}`);
      try {
        this.broadcastChannel &&
          r &&
          this.broadcastChannel.postMessage({ event: e, session: n });
        const s = [],
          a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
            try {
              await o.callback(e, n);
            } catch (l) {
              s.push(l);
            }
          });
        if ((await Promise.all(a), s.length > 0)) {
          for (let o = 0; o < s.length; o += 1) console.error(s[o]);
          throw s[0];
        }
      } finally {
        this._debug(i, "end");
      }
    }
    async _saveSession(e) {
      this._debug("#_saveSession()", e),
        (this.suppressGetSessionWarning = !0),
        await Jc(this.storage, this.storageKey, e);
    }
    async _removeSession() {
      this._debug("#_removeSession()"),
        await Zr(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const e = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        e &&
          Ke() &&
          window != null &&
          window.removeEventListener &&
          window.removeEventListener("visibilitychange", e);
      } catch (n) {
        console.error("removing visibilitychange callback failed", n);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
      const e = setInterval(() => this._autoRefreshTokenTick(), an);
      (this.autoRefreshTicker = e),
        e && typeof e == "object" && typeof e.unref == "function"
          ? e.unref()
          : typeof Deno < "u" &&
            typeof Deno.unrefTimer == "function" &&
            Deno.unrefTimer(e),
        setTimeout(async () => {
          await this.initializePromise, await this._autoRefreshTokenTick();
        }, 0);
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const e = this.autoRefreshTicker;
      (this.autoRefreshTicker = null), e && clearInterval(e);
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async (n) => {
                const {
                  data: { session: r },
                } = n;
                if (!r || !r.refresh_token || !r.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const i = Math.floor((r.expires_at * 1e3 - e) / an);
                this._debug(
                  "#_autoRefreshTokenTick()",
                  `access token expires in ${i} ticks, a tick lasts ${an}ms, refresh threshold is ${da} ticks`
                ),
                  i <= da && (await this._callRefreshToken(r.refresh_token));
              });
            } catch (n) {
              console.error(
                "Auto refresh tick failed with error. This is likely a transient error.",
                n
              );
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e.isAcquireTimeout || e instanceof Qc)
          this._debug("auto refresh token tick lock not available");
        else throw e;
      }
    }
    async _handleVisibilityChange() {
      if (
        (this._debug("#_handleVisibilityChange()"),
        !Ke() || !(window != null && window.addEventListener))
      )
        return this.autoRefreshToken && this.startAutoRefresh(), !1;
      try {
        (this.visibilityChangedCallback = async () =>
          await this._onVisibilityChanged(!1)),
          window == null ||
            window.addEventListener(
              "visibilitychange",
              this.visibilityChangedCallback
            ),
          await this._onVisibilityChanged(!0);
      } catch (e) {
        console.error("_handleVisibilityChange", e);
      }
    }
    async _onVisibilityChanged(e) {
      const n = `#_onVisibilityChanged(${e})`;
      this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible"
          ? (this.autoRefreshToken && this._startAutoRefresh(),
            e ||
              (await this.initializePromise,
              await this._acquireLock(-1, async () => {
                if (document.visibilityState !== "visible") {
                  this._debug(
                    n,
                    "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                  );
                  return;
                }
                await this._recoverAndRefresh();
              })))
          : document.visibilityState === "hidden" &&
            this.autoRefreshToken &&
            this._stopAutoRefresh();
    }
    async _getUrlForProvider(e, n, r) {
      const i = [`provider=${encodeURIComponent(n)}`];
      if (
        (r != null &&
          r.redirectTo &&
          i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null &&
          r.scopes &&
          i.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce")
      ) {
        const [s, a] = await on(this.storage, this.storageKey),
          o = new URLSearchParams({
            code_challenge: `${encodeURIComponent(s)}`,
            code_challenge_method: `${encodeURIComponent(a)}`,
          });
        i.push(o.toString());
      }
      if (r != null && r.queryParams) {
        const s = new URLSearchParams(r.queryParams);
        i.push(s.toString());
      }
      return (
        r != null &&
          r.skipBrowserRedirect &&
          i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${e}?${i.join("&")}`
      );
    }
    async _unenroll(e) {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          return s
            ? { data: null, error: s }
            : await W(
                this.fetch,
                "DELETE",
                `${this.url}/factors/${e.factorId}`,
                {
                  headers: this.headers,
                  jwt:
                    (r = i == null ? void 0 : i.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (n) {
        if (H(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _enroll(e) {
      try {
        return await this._useSession(async (n) => {
          var r, i;
          const { data: s, error: a } = n;
          if (a) return { data: null, error: a };
          const o = Object.assign(
              { friendly_name: e.friendlyName, factor_type: e.factorType },
              e.factorType === "phone"
                ? { phone: e.phone }
                : { issuer: e.issuer }
            ),
            { data: l, error: u } = await W(
              this.fetch,
              "POST",
              `${this.url}/factors`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (r = s == null ? void 0 : s.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
          return u
            ? { data: null, error: u }
            : (e.factorType === "totp" &&
                !((i = l == null ? void 0 : l.totp) === null || i === void 0) &&
                i.qr_code &&
                (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
              { data: l, error: null });
        });
      } catch (n) {
        if (H(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _verify(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (n) => {
            var r;
            const { data: i, error: s } = n;
            if (s) return { data: null, error: s };
            const { data: a, error: o } = await W(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: { code: e.code, challenge_id: e.challengeId },
                headers: this.headers,
                jwt:
                  (r = i == null ? void 0 : i.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
            return o
              ? { data: null, error: o }
              : (await this._saveSession(
                  Object.assign(
                    { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                    a
                  )
                ),
                await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
                { data: a, error: o });
          });
        } catch (n) {
          if (H(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    async _challenge(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (n) => {
            var r;
            const { data: i, error: s } = n;
            return s
              ? { data: null, error: s }
              : await W(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/challenge`,
                  {
                    body: { channel: e.channel },
                    headers: this.headers,
                    jwt:
                      (r = i == null ? void 0 : i.session) === null ||
                      r === void 0
                        ? void 0
                        : r.access_token,
                  }
                );
          });
        } catch (n) {
          if (H(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    async _challengeAndVerify(e) {
      const { data: n, error: r } = await this._challenge({
        factorId: e.factorId,
      });
      return r
        ? { data: null, error: r }
        : await this._verify({
            factorId: e.factorId,
            challengeId: n.id,
            code: e.code,
          });
    }
    async _listFactors() {
      const {
        data: { user: e },
        error: n,
      } = await this.getUser();
      if (n) return { data: null, error: n };
      const r = (e == null ? void 0 : e.factors) || [],
        i = r.filter(
          (a) => a.factor_type === "totp" && a.status === "verified"
        ),
        s = r.filter(
          (a) => a.factor_type === "phone" && a.status === "verified"
        );
      return { data: { all: r, totp: i, phone: s }, error: null };
    }
    async _getAuthenticatorAssuranceLevel() {
      return this._acquireLock(
        -1,
        async () =>
          await this._useSession(async (e) => {
            var n, r;
            const {
              data: { session: i },
              error: s,
            } = e;
            if (s) return { data: null, error: s };
            if (!i)
              return {
                data: {
                  currentLevel: null,
                  nextLevel: null,
                  currentAuthenticationMethods: [],
                },
                error: null,
              };
            const { payload: a } = wa(i.access_token);
            let o = null;
            a.aal && (o = a.aal);
            let l = o;
            ((r =
              (n = i.user.factors) === null || n === void 0
                ? void 0
                : n.filter((h) => h.status === "verified")) !== null &&
            r !== void 0
              ? r
              : []
            ).length > 0 && (l = "aal2");
            const c = a.amr || [];
            return {
              data: {
                currentLevel: o,
                nextLevel: l,
                currentAuthenticationMethods: c,
              },
              error: null,
            };
          })
      );
    }
    async fetchJwk(e, n = { keys: [] }) {
      let r = n.keys.find((a) => a.kid === e);
      if (
        r ||
        ((r = this.jwks.keys.find((a) => a.kid === e)),
        r && this.jwks_cached_at + ay > Date.now())
      )
        return r;
      const { data: i, error: s } = await W(
        this.fetch,
        "GET",
        `${this.url}/.well-known/jwks.json`,
        { headers: this.headers }
      );
      if (s) throw s;
      if (!i.keys || i.keys.length === 0) throw new Jn("JWKS is empty");
      if (
        ((this.jwks = i),
        (this.jwks_cached_at = Date.now()),
        (r = i.keys.find((a) => a.kid === e)),
        !r)
      )
        throw new Jn("No matching signing key found in JWKS");
      return r;
    }
    async getClaims(e, n = { keys: [] }) {
      try {
        let r = e;
        if (!r) {
          const { data: d, error: g } = await this.getSession();
          if (g || !d.session) return { data: null, error: g };
          r = d.session.access_token;
        }
        const {
          header: i,
          payload: s,
          signature: a,
          raw: { header: o, payload: l },
        } = wa(r);
        if (
          (Ty(s.exp),
          !i.kid ||
            i.alg === "HS256" ||
            !("crypto" in globalThis && "subtle" in globalThis.crypto))
        ) {
          const { error: d } = await this.getUser(r);
          if (d) throw d;
          return { data: { claims: s, header: i, signature: a }, error: null };
        }
        const u = Iy(i.alg),
          c = await this.fetchJwk(i.kid, n),
          h = await crypto.subtle.importKey("jwk", c, u, !0, ["verify"]);
        if (!(await crypto.subtle.verify(u, h, a, gy(`${o}.${l}`))))
          throw new Jn("Invalid JWT signature");
        return { data: { claims: s, header: i, signature: a }, error: null };
      } catch (r) {
        if (H(r)) return { data: null, error: r };
        throw r;
      }
    }
  }
  Gn.nextInstanceID = 0;
  const Wy = Gn;
  class Jy extends Wy {
    constructor(e) {
      super(e);
    }
  }
  var Ky = function (t, e, n, r) {
    function i(s) {
      return s instanceof n
        ? s
        : new n(function (a) {
            a(s);
          });
    }
    return new (n || (n = Promise))(function (s, a) {
      function o(c) {
        try {
          u(r.next(c));
        } catch (h) {
          a(h);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (h) {
          a(h);
        }
      }
      function u(c) {
        c.done ? s(c.value) : i(c.value).then(o, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  class Gy {
    constructor(e, n, r) {
      var i, s, a;
      if (((this.supabaseUrl = e), (this.supabaseKey = n), !e))
        throw new Error("supabaseUrl is required.");
      if (!n) throw new Error("supabaseKey is required.");
      const o = ey(e);
      (this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws")),
        (this.authUrl = `${o}/auth/v1`),
        (this.storageUrl = `${o}/storage/v1`),
        (this.functionsUrl = `${o}/functions/v1`);
      const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
        u = {
          db: W_,
          realtime: K_,
          auth: Object.assign(Object.assign({}, J_), { storageKey: l }),
          global: V_,
        },
        c = ty(r ?? {}, u);
      (this.storageKey =
        (i = c.auth.storageKey) !== null && i !== void 0 ? i : ""),
        (this.headers =
          (s = c.global.headers) !== null && s !== void 0 ? s : {}),
        c.accessToken
          ? ((this.accessToken = c.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (h, f) => {
                  throw new Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                      f
                    )} is not possible`
                  );
                },
              }
            )))
          : (this.auth = this._initSupabaseAuthClient(
              (a = c.auth) !== null && a !== void 0 ? a : {},
              this.headers,
              c.global.fetch
            )),
        (this.fetch = Y_(n, this._getAccessToken.bind(this), c.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Object.assign(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            c.realtime
          )
        )),
        (this.rest = new g_(`${o}/rest/v1`, {
          headers: this.headers,
          schema: c.db.schema,
          fetch: this.fetch,
        })),
        c.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new i_(this.functionsUrl, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    get storage() {
      return new q_(this.storageUrl, this.headers, this.fetch);
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, n = {}, r = {}) {
      return this.rest.rpc(e, n, r);
    }
    channel(e, n = { config: {} }) {
      return this.realtime.channel(e, n);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
      var e, n;
      return Ky(this, void 0, void 0, function* () {
        if (this.accessToken) return yield this.accessToken();
        const { data: r } = yield this.auth.getSession();
        return (n =
          (e = r.session) === null || e === void 0
            ? void 0
            : e.access_token) !== null && n !== void 0
          ? n
          : null;
      });
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: n,
        detectSessionInUrl: r,
        storage: i,
        storageKey: s,
        flowType: a,
        lock: o,
        debug: l,
      },
      u,
      c
    ) {
      const h = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new Jy({
        url: this.authUrl,
        headers: Object.assign(Object.assign({}, h), u),
        storageKey: s,
        autoRefreshToken: e,
        persistSession: n,
        detectSessionInUrl: r,
        storage: i,
        flowType: a,
        lock: o,
        debug: l,
        fetch: c,
        hasCustomAuthorizationHeader: "Authorization" in this.headers,
      });
    }
    _initRealtimeClient(e) {
      return new I_(
        this.realtimeUrl,
        Object.assign(Object.assign({}, e), {
          params: Object.assign(
            { apikey: this.supabaseKey },
            e == null ? void 0 : e.params
          ),
        })
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((n, r) => {
        this._handleTokenChanged(
          n,
          "CLIENT",
          r == null ? void 0 : r.access_token
        );
      });
    }
    _handleTokenChanged(e, n, r) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? (this.changedAccessToken = r)
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          n == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  }
  const Xy = ((t, e, n) => new Gy(t, e, n))(
      "https://sqesugujbokqdacsgqxu.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZXN1Z3VqYm9rcWRhY3NncXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNzQzMjEsImV4cCI6MjA0NzY1MDMyMX0.NdG4HHj-12E1SPTYKQQ7onMsBM7vRzoFrH27T4CgsCc"
    ),
    Qy = async (t) => {
      var r;
      const { data: e, error: n } = await Xy.from("product_agent")
        .select("data")
        .eq("agentID", t);
      return n
        ? (console.error(n), null)
        : ((r = e[0]) == null ? void 0 : r.data) || null;
    },
    Yy = async () => {
      const t = document.getElementById("sjois-product-agent");
      if (!t) return null;
      const e = t.getAttribute("data-agent-id");
      if (e) {
        const n = await Qy(e);
        ch(G(Yg, { agentInfo: n }), t);
      } else return;
    };
  document.addEventListener("DOMContentLoaded", () => {
    Yy();
  });
  var ba, Zc;
  function Zy() {
    return (
      Zc ||
        ((Zc = 1),
        (ba = function () {
          throw new Error(
            "ws does not work in the browser. Browser clients must use the native WebSocket object"
          );
        })),
      ba
    );
  }
  var ew = Zy();
  const tw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jr(ew) },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
})();
