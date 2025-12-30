(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".canvas-col[data-v-123a249d]{display:flex;flex:var(--v594d435a);flex-direction:column;flex-wrap:nowrap;row-gap:var(--v77270676);column-gap:var(--v5d895510);align-items:var(--d0e7f82a);justify-content:var(--v2afa6f5f)}.canvas-row[data-v-a851b150]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:var(--v695ca9a0);align-items:var(--f640f2a8);column-gap:var(--v3443dbd5);row-gap:var(--v1aa62a6f);min-height:var(--v13fd3b80)}.row-col-container[data-v-1460ffb2]{display:flex;flex-direction:column;row-gap:var(--v7162bcb6)}.canvas-flex-box[data-v-fab67e2d]{display:flex;flex:1 1 0px;flex-direction:var(--v4002297f);gap:var(--v07441c0f);padding:var(--v2c4784ca);align-items:var(--dc10673c);justify-content:var(--v390884f0)}.canvas-flex-box[data-v-fab67e2d] .canvas-container{width:100%}.canvas-section[data-v-24e70ccf]{width:100%;display:flex;flex:1 1 0;align-items:center;justify-content:center}.canvas-navigate[data-v-4775fb71]{display:flex;padding:8px 12px}.canvas-navigate-horizontal[data-v-4775fb71]{align-items:center;justify-content:center}.canvas-navigate-vertical[data-v-4775fb71]{flex-direction:column}.placeholder-layer[data-v-ebded622],.placeholder-layer[data-v-a08659d7]{height:40px;background-color:#f5f5f5;width:100%;text-align:center;line-height:40px}[data-v-a08659d7] .tiny-button.tiny-button--text.tiny-button{min-width:20px;padding:0}.placeholder-layer[data-v-1dbe1122]{height:40px;background-color:#f5f5f5;width:100%;text-align:center;line-height:40px}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as Ee, useCssVars as qe, computed as B, createElementBlock as x, openBlock as d, renderSlot as Ne, normalizeClass as Br, ref as G, reactive as Ue, watch as Oe, resolveDirective as lr, createBlock as E, unref as _, mergeProps as H, withCtx as C, createVNode as k, Fragment as J, renderList as K, resolveDynamicComponent as ae, withDirectives as fe, createTextVNode as W, toDisplayString as le, useAttrs as ir, createCommentVNode as ue, onMounted as Fr, createElementVNode as Dr } from "vue";
import { Numeric as pt, DatePicker as ut, Radio as dt, Checkbox as ct, Select as ft, Input as ht, Form as he, Row as be, Col as me, FormItem as Ce, Grid as sr, GridColumn as _e, Button as pe, Popover as pr, Pager as ur, DialogBox as Ir, Modal as $r, Notify as je } from "@opentiny/vue";
import * as ye from "@opentiny/vue-icon";
const Q = (e) => typeof e == "number" || /^\d+\.?\d*$/.test(e) ? `${e}px` : /^\d+\.?\d*(px|%|pt|em|rem|vw|vh)$/.test(e) ? e : "", dr = {
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  stretch: "stretch",
  start: "start",
  end: "end"
}, cr = {
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly",
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  stretch: "stretch",
  center: "center",
  start: "start",
  end: "end",
  left: "left",
  right: "right"
}, Mr = {
  ref: "colRef",
  class: "canvas-col"
}, jr = /* @__PURE__ */ Ee({
  __name: "CanvasCol",
  props: {
    flexBasis: {
      type: String,
      default: "0px"
    },
    rowGap: {
      type: [String, Number],
      default: ""
    },
    colGap: {
      type: [String, Number],
      default: ""
    },
    align: {
      type: String,
      default: ""
    },
    justAlign: {
      type: String,
      default: ""
    },
    grow: {
      type: Boolean,
      default: !0
    },
    shrink: {
      type: Boolean,
      default: !0
    },
    widthType: {
      type: String,
      default: "auto"
    }
  },
  setup(e) {
    qe((n) => ({
      v594d435a: o.value.flex,
      v77270676: o.value.rowGap,
      v5d895510: o.value.colGap,
      d0e7f82a: o.value.align,
      v2afa6f5f: o.value.justAlign
    }));
    const t = e, r = (n) => {
      const { flexBasis: a, grow: i, shrink: l, widthType: u } = n;
      return u === "fixed" ? `0 0 ${Q(a)}` : `${Number(i)} ${Number(l)} ${Q(a)}`;
    }, o = B(() => {
      const { flexBasis: n, grow: a, shrink: i, widthType: l } = t;
      return {
        flex: r({ flexBasis: n, grow: a, shrink: i, widthType: l }),
        rowGap: Q(t.rowGap),
        colGap: Q(t.colGap),
        align: dr[t.align] || "stretch",
        justAlign: cr[t.justAlign] || "flex-start"
      };
    });
    return (n, a) => (d(), x("div", Mr, [
      Ne(n.$slots, "default", {}, void 0, !0)
    ], 512));
  }
}), ee = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, za = /* @__PURE__ */ ee(jr, [["__scopeId", "data-v-123a249d"]]), Lr = { class: "canvas-row" }, Wr = /* @__PURE__ */ Ee({
  __name: "CanvasRow",
  props: {
    minHeight: {
      type: [String, Number],
      default: ""
    },
    rowGap: {
      type: [String, Number],
      default: ""
    },
    colGap: {
      type: [String, Number],
      default: ""
    },
    align: {
      type: [String, Number],
      default: ""
    },
    justAlign: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e) {
    qe((o) => ({
      v695ca9a0: r.value.justAlign,
      f640f2a8: r.value.align,
      v3443dbd5: r.value.rowGap,
      v1aa62a6f: r.value.colGap,
      v13fd3b80: r.value.minHeight
    }));
    const t = e, r = B(() => ({
      minHeight: Q(t.minHeight),
      rowGap: Q(t.rowGap),
      colGap: Q(t.colGap),
      align: dr[t.align] || "stretch",
      justAlign: cr[t.justAlign] || "flex-start"
    }));
    return (o, n) => (d(), x("div", Lr, [
      Ne(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}), wa = /* @__PURE__ */ ee(Wr, [["__scopeId", "data-v-a851b150"]]), Gr = { class: "row-col-container" }, Hr = /* @__PURE__ */ Ee({
  __name: "CanvasRowColContainer",
  props: {
    rowGap: {
      type: [String, Number],
      default: ""
    }
  },
  setup(e) {
    qe((o) => ({
      v7162bcb6: r.value.rowGap
    }));
    const t = e, r = B(() => ({
      rowGap: Q(t.rowGap)
    }));
    return (o, n) => (d(), x("div", Gr, [
      Ne(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}), xa = /* @__PURE__ */ ee(Hr, [["__scopeId", "data-v-1460ffb2"]]), Jr = { class: "canvas-flex-box" }, Xr = /* @__PURE__ */ Ee({
  __name: "CanvasFlexBox",
  props: {
    flexDirection: {
      type: String,
      default: "row"
    },
    gap: {
      type: [String, Number],
      default: "8px"
    },
    padding: {
      type: [String, Number],
      default: "8px"
    },
    alignItems: {
      type: String,
      default: "center"
    },
    justifyContent: {
      type: String,
      default: "flex-start"
    }
  },
  setup(e) {
    qe((o) => ({
      v4002297f: r.value.flexDirection,
      v07441c0f: r.value.gap,
      v2c4784ca: r.value.padding,
      dc10673c: r.value.alignItems,
      v390884f0: r.value.justifyContent
    }));
    const t = e, r = B(() => ({
      flexDirection: t.flexDirection,
      gap: Q(t.gap),
      padding: Q(t.padding),
      alignItems: t.alignItems,
      justifyContent: t.justifyContent
    }));
    return (o, n) => (d(), x("div", Jr, [
      Ne(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Sa = /* @__PURE__ */ ee(Xr, [["__scopeId", "data-v-fab67e2d"]]), Kr = {}, Qr = { class: "canvas-section" };
function Yr(e, t) {
  return d(), x("div", Qr, [
    Ne(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Oa = /* @__PURE__ */ ee(Kr, [["render", Yr], ["__scopeId", "data-v-24e70ccf"]]), Zr = /* @__PURE__ */ Ee({
  __name: "CanvasNavigation",
  props: {
    type: {
      type: String,
      default: "horizontal"
    }
  },
  setup(e) {
    return (t, r) => (d(), x("div", {
      class: Br([
        "canvas-navigate",
        { "canvas-navigate-horizontal": e.type === "horizontal" },
        { "canvas-navigate-vertical": e.type === "vertical" }
      ])
    }, [
      Ne(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ua = /* @__PURE__ */ ee(Zr, [["__scopeId", "data-v-4775fb71"]]);
function eo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bt = { exports: {} }, fr = function(t, r) {
  return function() {
    return t.apply(r, arguments);
  };
}, to = fr, mt = Object.prototype.toString, Ct = /* @__PURE__ */ function(e) {
  return function(t) {
    var r = mt.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function ie(e) {
  return e = e.toLowerCase(), function(r) {
    return Ct(r) === e;
  };
}
function Ae(e) {
  return Array.isArray(e);
}
function nt(e) {
  return typeof e > "u";
}
function ro(e) {
  return e !== null && !nt(e) && e.constructor !== null && !nt(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var hr = ie("ArrayBuffer");
function oo(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && hr(e.buffer), t;
}
function no(e) {
  return typeof e == "string";
}
function br(e) {
  return typeof e == "number";
}
function mr(e) {
  return e !== null && typeof e == "object";
}
function ke(e) {
  if (Ct(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function ao(e) {
  return e && Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
}
var lo = ie("Date"), io = ie("File"), so = ie("Blob"), po = ie("FileList");
function _t(e) {
  return mt.call(e) === "[object Function]";
}
function uo(e) {
  return mr(e) && _t(e.pipe);
}
function co(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || mt.call(e) === t || _t(e.toString) && e.toString() === t);
}
var fo = ie("URLSearchParams");
function ho(e) {
  return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
function bo() {
  var e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function yt(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ae(e))
      for (var r = 0, o = e.length; r < o; r++)
        t.call(null, e[r], r, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
}
function at() {
  var e = {};
  function t(n, a) {
    ke(e[a]) && ke(n) ? e[a] = at(e[a], n) : ke(n) ? e[a] = at({}, n) : Ae(n) ? e[a] = n.slice() : e[a] = n;
  }
  for (var r = 0, o = arguments.length; r < o; r++)
    yt(arguments[r], t);
  return e;
}
function mo(e, t, r) {
  return yt(t, function(n, a) {
    r && typeof n == "function" ? e[a] = to(n, r) : e[a] = n;
  }), e;
}
function Co(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function _o(e, t, r, o) {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function yo(e, t, r, o) {
  var n, a, i, l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      i = n[a], (!o || o(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = r !== !1 && Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function go(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var o = e.indexOf(t, r);
  return o !== -1 && o === r;
}
function vo(e) {
  if (!e) return null;
  if (Ae(e)) return e;
  var t = e.length;
  if (!br(t)) return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var No = /* @__PURE__ */ function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
function zo(e, t) {
  for (var r = e && e[Symbol.iterator], o = r.call(e), n; (n = o.next()) && !n.done; ) {
    var a = n.value;
    t.call(e, a[0], a[1]);
  }
}
function wo(e, t) {
  for (var r, o = []; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}
var xo = ie("HTMLFormElement"), So = /* @__PURE__ */ function(t) {
  return function(r, o) {
    return t.call(r, o);
  };
}(Object.prototype.hasOwnProperty), A = {
  isArray: Ae,
  isArrayBuffer: hr,
  isBuffer: ro,
  isFormData: co,
  isArrayBufferView: oo,
  isString: no,
  isNumber: br,
  isObject: mr,
  isPlainObject: ke,
  isEmptyObject: ao,
  isUndefined: nt,
  isDate: lo,
  isFile: io,
  isBlob: so,
  isFunction: _t,
  isStream: uo,
  isURLSearchParams: fo,
  isStandardBrowserEnv: bo,
  forEach: yt,
  merge: at,
  extend: mo,
  trim: ho,
  stripBOM: Co,
  inherits: _o,
  toFlatObject: yo,
  kindOf: Ct,
  kindOfTest: ie,
  endsWith: go,
  toArray: vo,
  isTypedArray: No,
  isFileList: po,
  forEachEntry: zo,
  matchAll: wo,
  isHTMLForm: xo,
  hasOwnProperty: So
}, Cr = A;
function ge(e, t, r, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), n && (this.response = n);
}
Cr.inherits(ge, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var _r = ge.prototype, yr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach(function(e) {
  yr[e] = { value: e };
});
Object.defineProperties(ge, yr);
Object.defineProperty(_r, "isAxiosError", { value: !0 });
ge.from = function(e, t, r, o, n, a) {
  var i = Object.create(_r);
  return Cr.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }), ge.call(i, e.message, t, r, o, n), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
var de = ge, Oo = typeof self == "object" ? self.FormData : window.FormData, Uo = Oo, T = A, Eo = de, Po = Uo;
function lt(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function gr(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ut(e, t, r) {
  return e ? e.concat(t).map(function(n, a) {
    return n = gr(n), !r && a ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function Ro(e) {
  return T.isArray(e) && !e.some(lt);
}
var To = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ko(e) {
  return e && T.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function Vo(e, t, r) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Po || FormData)(), r = T.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, v) {
    return !T.isUndefined(v[w]);
  });
  var o = r.metaTokens, n = r.visitor || c, a = r.dots, i = r.indexes, l = r.Blob || typeof Blob < "u" && Blob, u = l && ko(t);
  if (!T.isFunction(n))
    throw new TypeError("visitor must be a function");
  function y(g) {
    if (g === null) return "";
    if (T.isDate(g))
      return g.toISOString();
    if (!u && T.isBlob(g))
      throw new Eo("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g) ? u && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function c(g, w, v) {
    var h = g;
    if (g && !v && typeof g == "object") {
      if (T.endsWith(w, "{}"))
        w = o ? w : w.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && Ro(g) || T.isFileList(g) || T.endsWith(w, "[]") && (h = T.toArray(g)))
        return w = gr(w), h.forEach(function(b, m) {
          !T.isUndefined(b) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ut([w], m, a) : i === null ? w : w + "[]",
            y(b)
          );
        }), !1;
    }
    return lt(g) ? !0 : (t.append(Ut(v, w, a), y(g)), !1);
  }
  var U = [], F = Object.assign(To, {
    defaultVisitor: c,
    convertValue: y,
    isVisitable: lt
  });
  function s(g, w) {
    if (!T.isUndefined(g)) {
      if (U.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      U.push(g), T.forEach(g, function(h, O) {
        var b = !T.isUndefined(h) && n.call(
          t,
          h,
          T.isString(O) ? O.trim() : O,
          w,
          F
        );
        b === !0 && s(h, w ? w.concat(O) : [O]);
      }), U.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return s(e), t;
}
var Be = Vo, qo = Be;
function Et(e) {
  var t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function vr(e, t) {
  this._pairs = [], e && qo(e, this, t);
}
var Nr = vr.prototype;
Nr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Nr.toString = function(t) {
  var r = t ? function(o) {
    return t.call(this, o, Et);
  } : Et;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
var zr = vr, Ao = A, Bo = zr;
function Fo(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var wr = function(t, r, o) {
  if (!r)
    return t;
  var n = t.indexOf("#");
  n !== -1 && (t = t.slice(0, n));
  var a = o && o.encode || Fo, i = o && o.serialize, l;
  return i ? l = i(r, o) : l = Ao.isURLSearchParams(r) ? r.toString() : new Bo(r, o).toString(a), l && (t += (t.indexOf("?") === -1 ? "?" : "&") + l), t;
}, Do = A;
function Pe() {
  this.handlers = [];
}
Pe.prototype.use = function(t, r, o) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: o ? o.synchronous : !1,
    runWhen: o ? o.runWhen : null
  }), this.handlers.length - 1;
};
Pe.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Pe.prototype.clear = function() {
  this.handlers && (this.handlers = []);
};
Pe.prototype.forEach = function(t) {
  Do.forEach(this.handlers, function(o) {
    o !== null && t(o);
  });
};
var Io = Pe, $o = A, xr = function(t, r) {
  $o.forEach(t, function(n, a) {
    a !== r && a.toUpperCase() === r.toUpperCase() && (t[r] = n, delete t[a]);
  });
}, Sr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mo = zr, jo = typeof URLSearchParams < "u" ? URLSearchParams : Mo, Lo = FormData, Wo = {
  classes: {
    URLSearchParams: jo,
    FormData: Lo,
    Blob
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, gt = Wo, Go = A, Ho = Be, Pt = gt, Jo = function(t, r) {
  return Ho(t, new Pt.classes.URLSearchParams(), Object.assign({
    visitor: function(o, n, a, i) {
      return Pt.isNode && Go.isBuffer(o) ? (this.append(n, o.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}, oe = A;
function Xo(e) {
  return oe.matchAll(/\w+|\[(\w*)]/g, e).map(function(t) {
    return t[0] === "[]" ? "" : t[1] || t[0];
  });
}
function Ko(e) {
  var t = {}, r = Object.keys(e), o, n = r.length, a;
  for (o = 0; o < n; o++)
    a = r[o], t[a] = e[a];
  return t;
}
function Qo(e) {
  function t(o, n, a, i) {
    var l = o[i++], u = Number.isFinite(+l), y = i >= o.length;
    if (l = !l && oe.isArray(a) ? a.length : l, y)
      return oe.hasOwnProperty(a, l) ? a[l] = [a[l], n] : a[l] = n, !u;
    (!a[l] || !oe.isObject(a[l])) && (a[l] = []);
    var c = t(o, n, a[l], i);
    return c && oe.isArray(a[l]) && (a[l] = Ko(a[l])), !u;
  }
  if (oe.isFormData(e) && oe.isFunction(e.entries)) {
    var r = {};
    return oe.forEachEntry(e, function(o, n) {
      t(Xo(o), n, r, 0);
    }), r;
  }
  return null;
}
var Or = Qo, Le, Rt;
function Yo() {
  if (Rt) return Le;
  Rt = 1;
  var e = de;
  return Le = function(r, o, n) {
    var a = n.config.validateStatus;
    !n.status || !a || a(n.status) ? r(n) : o(new e(
      "Request failed with status code " + n.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    ));
  }, Le;
}
var We, Tt;
function Zo() {
  if (Tt) return We;
  Tt = 1;
  var e = A;
  return We = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    /* @__PURE__ */ function() {
      return {
        write: function(o, n, a, i, l, u) {
          var y = [];
          y.push(o + "=" + encodeURIComponent(n)), e.isNumber(a) && y.push("expires=" + new Date(a).toGMTString()), e.isString(i) && y.push("path=" + i), e.isString(l) && y.push("domain=" + l), u === !0 && y.push("secure"), document.cookie = y.join("; ");
        },
        read: function(o) {
          var n = document.cookie.match(new RegExp("(^|;\\s*)(" + o + ")=([^;]*)"));
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove: function(o) {
          this.write(o, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    /* @__PURE__ */ function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), We;
}
var en = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, tn = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, rn = en, on = tn, Ur = function(t, r) {
  return t && !rn(r) ? on(t, r) : r;
}, Ge, kt;
function nn() {
  if (kt) return Ge;
  kt = 1;
  var e = A, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Ge = function(o) {
    var n = {}, a, i, l;
    return o && e.forEach(o.split(`
`), function(y) {
      if (l = y.indexOf(":"), a = e.trim(y.slice(0, l)).toLowerCase(), i = e.trim(y.slice(l + 1)), a) {
        if (n[a] && t.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? n[a] = (n[a] ? n[a] : []).concat([i]) : n[a] = n[a] ? n[a] + ", " + i : i;
      }
    }), n;
  }, Ge;
}
var He, Vt;
function an() {
  if (Vt) return He;
  Vt = 1;
  var e = A;
  return He = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var r = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a"), n;
      function a(i) {
        var l = i;
        return r && (o.setAttribute("href", l), l = o.href), o.setAttribute("href", l), {
          href: o.href,
          protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
          host: o.host,
          search: o.search ? o.search.replace(/^\?/, "") : "",
          hash: o.hash ? o.hash.replace(/^#/, "") : "",
          hostname: o.hostname,
          port: o.port,
          pathname: o.pathname.charAt(0) === "/" ? o.pathname : "/" + o.pathname
        };
      }
      return n = a(window.location.href), function(l) {
        var u = e.isString(l) ? a(l) : l;
        return u.protocol === n.protocol && u.host === n.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function() {
      return function() {
        return !0;
      };
    }()
  ), He;
}
var Je, qt;
function Fe() {
  if (qt) return Je;
  qt = 1;
  var e = de, t = A;
  function r(o, n, a) {
    e.call(this, o ?? "canceled", e.ERR_CANCELED, n, a), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), Je = r, Je;
}
var Xe, At;
function ln() {
  return At || (At = 1, Xe = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), Xe;
}
var Ke, Bt;
function Ft() {
  if (Bt) return Ke;
  Bt = 1;
  var e = A, t = Yo(), r = Zo(), o = wr, n = Ur, a = nn(), i = an(), l = Sr, u = de, y = Fe(), c = ln(), U = gt;
  return Ke = function(s) {
    return new Promise(function(w, v) {
      var h = s.data, O = s.headers, b = s.responseType, m = s.withXSRFToken, N;
      function P() {
        s.cancelToken && s.cancelToken.unsubscribe(N), s.signal && s.signal.removeEventListener("abort", N);
      }
      e.isFormData(h) && e.isStandardBrowserEnv() && delete O["Content-Type"];
      var p = new XMLHttpRequest();
      if (s.auth) {
        var se = s.auth.username || "", Re = s.auth.password ? unescape(encodeURIComponent(s.auth.password)) : "";
        O.Authorization = "Basic " + btoa(se + ":" + Re);
      }
      var te = n(s.baseURL, s.url);
      p.open(s.method.toUpperCase(), o(te, s.params, s.paramsSerializer), !0), p.timeout = s.timeout;
      function ze() {
        if (p) {
          var M = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null, Y = !b || b === "text" || b === "json" ? p.responseText : p.response, Z = {
            data: Y,
            status: p.status,
            statusText: p.statusText,
            headers: M,
            config: s,
            request: p
          };
          t(function(xe) {
            w(xe), P();
          }, function(xe) {
            v(xe), P();
          }, Z), p = null;
        }
      }
      if ("onloadend" in p ? p.onloadend = ze : p.onreadystatechange = function() {
        !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(ze);
      }, p.onabort = function() {
        p && (v(new u("Request aborted", u.ECONNABORTED, s, p)), p = null);
      }, p.onerror = function() {
        v(new u("Network Error", u.ERR_NETWORK, s, p)), p = null;
      }, p.ontimeout = function() {
        var Y = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded", Z = s.transitional || l;
        s.timeoutErrorMessage && (Y = s.timeoutErrorMessage), v(new u(
          Y,
          Z.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
          s,
          p
        )), p = null;
      }, e.isStandardBrowserEnv() && (m && e.isFunction(m) && (m = m(s)), m || m !== !1 && i(te))) {
        var Te = s.xsrfHeaderName && s.xsrfCookieName && r.read(s.xsrfCookieName);
        Te && (O[s.xsrfHeaderName] = Te);
      }
      "setRequestHeader" in p && e.forEach(O, function(Y, Z) {
        typeof h > "u" && Z.toLowerCase() === "content-type" ? delete O[Z] : p.setRequestHeader(Z, Y);
      }), e.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), b && b !== "json" && (p.responseType = s.responseType), typeof s.onDownloadProgress == "function" && p.addEventListener("progress", s.onDownloadProgress), typeof s.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", s.onUploadProgress), (s.cancelToken || s.signal) && (N = function(M) {
        p && (v(!M || M.type ? new y(null, s, p) : M), p.abort(), p = null);
      }, s.cancelToken && s.cancelToken.subscribe(N), s.signal && (s.signal.aborted ? N() : s.signal.addEventListener("abort", N))), !h && h !== !1 && h !== 0 && h !== "" && (h = null);
      var we = c(te);
      if (we && U.protocols.indexOf(we) === -1) {
        v(new u("Unsupported protocol " + we + ":", u.ERR_BAD_REQUEST, s));
        return;
      }
      p.send(h);
    });
  }, Ke;
}
var q = A, Dt = xr, It = de, sn = Sr, pn = Be, un = Jo, $t = gt, dn = Or, cn = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Mt(e, t) {
  !q.isUndefined(e) && q.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function fn() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Ft()), e;
}
function hn(e, t, r) {
  if (q.isString(e))
    try {
      return (t || JSON.parse)(e), q.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(e);
}
var De = {
  transitional: sn,
  adapter: fn(),
  transformRequest: [function(t, r) {
    Dt(r, "Accept"), Dt(r, "Content-Type");
    var o = r && r["Content-Type"] || "", n = o.indexOf("application/json") > -1, a = q.isObject(t);
    a && q.isHTMLForm(t) && (t = new FormData(t));
    var i = q.isFormData(t);
    if (i)
      return n ? JSON.stringify(dn(t)) : t;
    if (q.isArrayBuffer(t) || q.isBuffer(t) || q.isStream(t) || q.isFile(t) || q.isBlob(t))
      return t;
    if (q.isArrayBufferView(t))
      return t.buffer;
    if (q.isURLSearchParams(t))
      return Mt(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var l;
    if (a) {
      if (o.indexOf("application/x-www-form-urlencoded") !== -1)
        return un(t, this.formSerializer).toString();
      if ((l = q.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        var u = this.env && this.env.FormData;
        return pn(
          l ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || n ? (Mt(r, "application/json"), hn(t)) : t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || De.transitional, o = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (t && q.isString(t) && (o && !this.responseType || n)) {
      var a = r && r.silentJSONParsing, i = !a && n;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? It.from(l, It.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: $t.classes.FormData,
    Blob: $t.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
q.forEach(["delete", "get", "head"], function(t) {
  De.headers[t] = {};
});
q.forEach(["post", "put", "patch"], function(t) {
  De.headers[t] = q.merge(cn);
});
var vt = De, bn = A, mn = vt, Cn = function(t, r, o, n) {
  var a = this || mn;
  return bn.forEach(n, function(l) {
    t = l.call(a, t, r, o);
  }), t;
}, Qe, jt;
function Er() {
  return jt || (jt = 1, Qe = function(t) {
    return !!(t && t.__CANCEL__);
  }), Qe;
}
var Lt = A, Ye = Cn, _n = Er(), yn = vt, gn = Fe(), Wt = xr;
function Ze(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gn();
}
var vn = function(t) {
  Ze(t), t.headers = t.headers || {}, t.data = Ye.call(
    t,
    t.data,
    t.headers,
    null,
    t.transformRequest
  ), Wt(t.headers, "Accept"), Wt(t.headers, "Content-Type"), t.headers = Lt.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), Lt.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(n) {
      delete t.headers[n];
    }
  );
  var r = t.adapter || yn.adapter;
  return r(t).then(function(n) {
    return Ze(t), n.data = Ye.call(
      t,
      n.data,
      n.headers,
      n.status,
      t.transformResponse
    ), n;
  }, function(n) {
    return _n(n) || (Ze(t), n && n.response && (n.response.data = Ye.call(
      t,
      n.response.data,
      n.response.headers,
      n.response.status,
      t.transformResponse
    ))), Promise.reject(n);
  });
}, I = A, Pr = function(t, r) {
  r = r || {};
  var o = {};
  function n(c, U) {
    return I.isPlainObject(c) && I.isPlainObject(U) ? I.merge(c, U) : I.isEmptyObject(U) ? I.merge({}, c) : I.isPlainObject(U) ? I.merge({}, U) : I.isArray(U) ? U.slice() : U;
  }
  function a(c) {
    if (I.isUndefined(r[c])) {
      if (!I.isUndefined(t[c]))
        return n(void 0, t[c]);
    } else return n(t[c], r[c]);
  }
  function i(c) {
    if (!I.isUndefined(r[c]))
      return n(void 0, r[c]);
  }
  function l(c) {
    if (I.isUndefined(r[c])) {
      if (!I.isUndefined(t[c]))
        return n(void 0, t[c]);
    } else return n(void 0, r[c]);
  }
  function u(c) {
    if (c in r)
      return n(t[c], r[c]);
    if (c in t)
      return n(void 0, t[c]);
  }
  var y = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u
  };
  return I.forEach(Object.keys(t).concat(Object.keys(r)), function(U) {
    var F = y[U] || a, s = F(U);
    I.isUndefined(s) && F !== u || (o[U] = s);
  }), o;
}, et, Gt;
function Rr() {
  return Gt || (Gt = 1, et = {
    version: "0.28.1"
  }), et;
}
var Nn = Rr().version, ne = de, Nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Nt[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var Ht = {};
Nt.transitional = function(t, r, o) {
  function n(a, i) {
    return "[Axios v" + Nn + "] Transitional option '" + a + "'" + i + (o ? ". " + o : "");
  }
  return function(a, i, l) {
    if (t === !1)
      throw new ne(
        n(i, " has been removed" + (r ? " in " + r : "")),
        ne.ERR_DEPRECATED
      );
    return r && !Ht[i] && (Ht[i] = !0, console.warn(
      n(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
function zn(e, t, r) {
  if (typeof e != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  for (var o = Object.keys(e), n = o.length; n-- > 0; ) {
    var a = o[n], i = t[a];
    if (i) {
      var l = e[a], u = l === void 0 || i(l, a, e);
      if (u !== !0)
        throw new ne("option " + a + " must be " + u, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ne("Unknown option " + a, ne.ERR_BAD_OPTION);
  }
}
var wn = {
  assertOptions: zn,
  validators: Nt
}, zt = A, xn = wr, Jt = Io, Xt = vn, Ie = Pr, Sn = Ur, it = wn, re = it.validators;
function ve(e) {
  this.defaults = e, this.interceptors = {
    request: new Jt(),
    response: new Jt()
  };
}
ve.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ie(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var o = r.transitional;
  o !== void 0 && it.assertOptions(o, {
    silentJSONParsing: re.transitional(re.boolean),
    forcedJSONParsing: re.transitional(re.boolean),
    clarifyTimeoutError: re.transitional(re.boolean)
  }, !1);
  var n = r.paramsSerializer;
  n !== void 0 && it.assertOptions(n, {
    encode: re.function,
    serialize: re.function
  }, !0), zt.isFunction(n) && (r.paramsSerializer = { serialize: n });
  var a = [], i = !0;
  this.interceptors.request.forEach(function(g) {
    typeof g.runWhen == "function" && g.runWhen(r) === !1 || (i = i && g.synchronous, a.unshift(g.fulfilled, g.rejected));
  });
  var l = [];
  this.interceptors.response.forEach(function(g) {
    l.push(g.fulfilled, g.rejected);
  });
  var u;
  if (!i) {
    var y = [Xt, void 0];
    for (Array.prototype.unshift.apply(y, a), y = y.concat(l), u = Promise.resolve(r); y.length; )
      u = u.then(y.shift(), y.shift());
    return u;
  }
  for (var c = r; a.length; ) {
    var U = a.shift(), F = a.shift();
    try {
      c = U(c);
    } catch (s) {
      F(s);
      break;
    }
  }
  try {
    u = Xt(c);
  } catch (s) {
    return Promise.reject(s);
  }
  for (; l.length; )
    u = u.then(l.shift(), l.shift());
  return u;
};
ve.prototype.getUri = function(t) {
  t = Ie(this.defaults, t);
  var r = Sn(t.baseURL, t.url);
  return xn(r, t.params, t.paramsSerializer);
};
zt.forEach(["delete", "get", "head", "options"], function(t) {
  ve.prototype[t] = function(r, o) {
    return this.request(Ie(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
zt.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(a, i, l) {
      return this.request(Ie(l || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  ve.prototype[t] = r(), ve.prototype[t + "Form"] = r(!0);
});
var On = ve, tt, Kt;
function Un() {
  if (Kt) return tt;
  Kt = 1;
  var e = Fe();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var o;
    this.promise = new Promise(function(i) {
      o = i;
    });
    var n = this;
    this.promise.then(function(a) {
      if (n._listeners) {
        for (var i = n._listeners.length; i-- > 0; )
          n._listeners[i](a);
        n._listeners = null;
      }
    }), this.promise.then = function(a) {
      var i, l = new Promise(function(u) {
        n.subscribe(u), i = u;
      }).then(a);
      return l.cancel = function() {
        n.unsubscribe(i);
      }, l;
    }, r(function(i, l, u) {
      n.reason || (n.reason = new e(i, l, u), o(n.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(o) {
    if (this.reason) {
      o(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(o) : this._listeners = [o];
  }, t.prototype.unsubscribe = function(o) {
    if (this._listeners) {
      var n = this._listeners.indexOf(o);
      n !== -1 && this._listeners.splice(n, 1);
    }
  }, t.source = function() {
    var o, n = new t(function(i) {
      o = i;
    });
    return {
      token: n,
      cancel: o
    };
  }, tt = t, tt;
}
var rt, Qt;
function En() {
  return Qt || (Qt = 1, rt = function(t) {
    return function(o) {
      return t.apply(null, o);
    };
  }), rt;
}
var ot, Yt;
function Pn() {
  if (Yt) return ot;
  Yt = 1;
  var e = A;
  return ot = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, ot;
}
var st = A, Rn = fr, Ve = On, Tn = Pr, kn = vt, Vn = Or;
function Tr(e) {
  var t = new Ve(e), r = Rn(Ve.prototype.request, t);
  return st.extend(r, Ve.prototype, t), st.extend(r, t), r.create = function(n) {
    return Tr(Tn(e, n));
  }, r;
}
var $ = Tr(kn);
$.Axios = Ve;
$.CanceledError = Fe();
$.CancelToken = Un();
$.isCancel = Er();
$.VERSION = Rr().version;
$.toFormData = Be;
$.AxiosError = de;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = En();
$.isAxiosError = Pn();
$.formToJSON = function(e) {
  return Vn(st.isHTMLForm(e) ? new FormData(e) : e);
};
bt.exports = $;
bt.exports.default = $;
var qn = bt.exports, An = qn;
const j = /* @__PURE__ */ eo(An), Bn = {
  key: 0,
  class: "placeholder-layer"
}, Fn = { class: "custom-label" }, Dn = { key: 0 }, In = { class: "custom-label" }, $n = {
  __name: "BaseForm",
  props: {
    style: {
      type: String
    },
    className: {
      type: String
    },
    layout: {
      type: Number,
      default: 2
    },
    viewOnly: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: Object
    },
    serviceModel: {
      type: Object
    },
    modelApis: {
      type: Array,
      default: () => []
    }
  },
  setup(e, { expose: t }) {
    const r = e, o = G(), n = G(null), a = B(() => 12 / r.layout), i = B(() => r.layout === 1 ? 6 : 12), l = B(() => r.serviceModel), u = Ue({
      TinyInput: ht,
      TinySelect: ft,
      TinyCheckbox: ct,
      TinyRadio: dt,
      TinyDatePicker: ut,
      TinyNumeric: pt
    }), y = (w = o.value) => {
      const v = r.modelApis.find((h) => h.nameEn === "insertApi");
      if (v)
        return j[v.method](v.url, w).then((h) => {
          if (h.status === 200)
            return h.data;
          throw new Error("request fail");
        }).catch((h) => {
          throw new Error(h);
        });
    }, c = (w = o.value) => {
      const v = r.modelApis.find((h) => h.nameEn === "updateApi");
      if (v)
        return j[v.method](v.url, w).then((h) => {
          if (h.status === 200)
            return h.data;
          throw new Error("request fail");
        }).catch((h) => {
          throw new Error(h);
        });
    }, U = ({ currentPage: w, pageSize: v, data: h } = {}) => {
      const O = r.modelApis.find((b) => b.nameEn === "queryApi");
      if (O)
        return j[O.method](`${O.url}?currentPage=${w || 1}&pageSize=${v || 10}`, {
          params: h || o.value
        }).then((b) => {
          if (b.status === 200)
            return b.data;
          throw new Error("request fail");
        }).catch((b) => {
          throw new Error(b);
        });
    }, F = (w = { id: ((v) => (v = o.value) == null ? void 0 : v.id)() }) => {
      const h = r.modelApis.find((O) => O.nameEn === "deleteApi");
      if (h)
        return j[h.method](h.url, { params: w }).then((O) => {
          if (O.status === 200)
            return O.data;
          throw new Error("request fail");
        }).catch((O) => {
          throw new Error(O);
        });
    }, s = () => {
      var w;
      o.value = Object.fromEntries(
        (((w = l.value) == null ? void 0 : w.parameters) || []).map((v) => [
          v.prop,
          v != null && v.isModel ? Object.fromEntries(
            v.defaultValue.map((h) => [h.prop, h.defaultValue || null])
          ) : v.defaultValue || null
        ])
      );
    };
    return Oe(
      () => r.modelValue,
      (w) => {
        w && (o.value = r.modelValue);
      },
      { deep: !0, immediate: !0 }
    ), Oe(
      () => r.serviceModel,
      () => {
        o.value || s();
      },
      { immediate: !0 }
    ), t({
      ...{
        formData: () => o.value,
        formRef: n,
        insertApi: y,
        updateApi: c,
        queryApi: U,
        deleteApi: F
      }
    }), (w, v) => {
      var O;
      const h = lr("auto-tip");
      return d(), x("div", null, [
        !l.value || !((O = l.value) != null && O.id) ? (d(), x("div", Bn, "请选择表单模型")) : (d(), E(_(he), H({
          key: 1,
          ref_key: "formRef",
          ref: n,
          "label-width": "120",
          "label-position": "left",
          model: o.value
        }, w.$attrs), {
          default: C(() => [
            k(_(be), null, {
              default: C(() => {
                var b;
                return [
                  (d(!0), x(J, null, K((b = l.value) == null ? void 0 : b.parameters, (m, N) => (d(), E(_(me), {
                    span: a.value,
                    key: N
                  }, {
                    default: C(() => [
                      k(_(Ce), {
                        prop: m.prop
                      }, {
                        label: C(() => [
                          fe((d(), x("div", Fn, [
                            W(le(m.label), 1)
                          ])), [
                            [h]
                          ])
                        ]),
                        default: C(() => [
                          m.isModel && m.defaultValue !== null ? (d(), x("div", Dn, [
                            k(_(he), {
                              "label-width": "100",
                              "label-position": "left",
                              model: o.value[m.prop]
                            }, {
                              default: C(() => [
                                k(_(be), null, {
                                  default: C(() => [
                                    (d(!0), x(J, null, K(m.defaultValue, (P, p) => (d(), E(_(me), {
                                      span: i.value,
                                      key: p
                                    }, {
                                      default: C(() => [
                                        k(_(Ce), {
                                          prop: P.prop
                                        }, {
                                          label: C(() => [
                                            fe((d(), x("div", In, [
                                              W(le(P.label), 1)
                                            ])), [
                                              [h]
                                            ])
                                          ]),
                                          default: C(() => [
                                            (d(), E(ae(u[P.component]), H({
                                              modelValue: o.value[m.prop][P.prop],
                                              "onUpdate:modelValue": (se) => o.value[m.prop][P.prop] = se,
                                              disabled: e.viewOnly
                                            }, { ref_for: !0 }, P), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                                          ]),
                                          _: 2
                                        }, 1032, ["prop"])
                                      ]),
                                      _: 2
                                    }, 1032, ["span"]))), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["model"])
                          ])) : (d(), E(ae(u[m.component]), H({
                            key: 1,
                            modelValue: o.value[m.prop],
                            "onUpdate:modelValue": (P) => o.value[m.prop] = P,
                            disabled: e.viewOnly
                          }, { ref_for: !0 }, m), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                        ]),
                        _: 2
                      }, 1032, ["prop"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128))
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }, 16, ["model"]))
      ]);
    };
  }
}, Ea = /* @__PURE__ */ ee($n, [["__scopeId", "data-v-ebded622"]]), Mn = {
  key: 0,
  class: "placeholder-layer"
}, jn = { key: 0 }, Ln = { key: 1 }, Wn = {
  __name: "BaseTable",
  props: {
    style: {
      type: String
    },
    className: {
      type: String
    },
    viewOnly: {
      type: Boolean,
      default: !1
    },
    pager: {
      type: Object
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    serviceModel: {
      type: Object
    },
    nodeType: {
      type: String
    },
    rowOperations: {
      type: Object
    },
    modelApis: {
      type: Array,
      default: () => []
    }
  },
  setup(e, { expose: t }) {
    const r = e, o = ir(), n = G(), a = B(() => r.serviceModel), i = G(r.modelValue), l = Ue({
      TinyInput: ht,
      TinySelect: ft,
      TinyCheckbox: ct,
      TinyRadio: dt,
      TinyDatePicker: ut,
      TinyNumeric: pt
    }), u = B(() => {
      const b = { ...o };
      return o.rowOperationEnabled && (b.editConfig = { trigger: "manual", mode: "row", autoClear: !1 }), b;
    }), y = B(() => {
      var b;
      return (((b = r.serviceModel) == null ? void 0 : b.parameters) || []).map((m) => {
        const N = { ...m };
        return o.rowOperationEnabled && (N.editor = {
          component: l[m.component],
          attrs: m
        }), N;
      });
    }), c = Ue(
      r.pager || {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50],
        total: 0,
        layout: "total, sizes, prev, pager, next, jumper"
      }
    ), U = B(() => {
      var b;
      return (b = r.rowOperations) == null ? void 0 : b.value.map((m) => ({
        ...m,
        icon: m.icon ? ye == null ? void 0 : ye[m.icon]() : "",
        itemVisible: "itemVisible" in m ? m.itemVisible : !0
      }));
    }), F = (b) => {
      c.currentPage = b;
    }, s = (b) => {
      c.pageSize = b;
    }, O = {
      tableData: () => i.value,
      gridRef: n,
      insertApi: (b = {}) => {
        const m = r.modelApis.find((N) => N.nameEn === "insertApi");
        if (m)
          return j[m.method](m.url, b).then((N) => {
            if (N.status === 200)
              return N.data;
            throw new Error("request fail");
          }).catch((N) => {
            throw new Error(N);
          });
      },
      updateApi: (b) => {
        const m = r.modelApis.find((N) => N.nameEn === "updateApi");
        if (m)
          return j[m.method](m.url, b).then((N) => {
            if (N.status === 200)
              return N.data;
            throw new Error("request fail");
          }).catch((N) => {
            throw new Error(N);
          });
      },
      queryApi: ({ currentPage: b, pageSize: m, data: N } = { currentPage: c.currentPage, pageSize: c.pageSize }) => {
        const P = r.modelApis.find((p) => p.nameEn === "queryApi");
        if (P)
          return j[P.method](`${P.url}?currentPage=${b}&pageSize=${m}`, { params: N }).then((p) => {
            if (p.status === 200 && p.data.code === 200)
              return i.value = p.data.data, c.total = p.data.total, p.data;
            throw new Error("request fail");
          }).catch((p) => {
            throw new Error(p);
          });
      },
      deleteApi: (b) => {
        const m = r.modelApis.find((N) => N.nameEn === "deleteApi");
        if (m)
          return j[m.method](m.url, { params: b }).then((N) => {
            if (N.status === 200)
              return N.data;
            throw new Error("request fail");
          }).catch((N) => {
            throw new Error(N);
          });
      }
    };
    return t({
      ...O
    }), (b, m) => {
      var N;
      return d(), x("div", null, [
        !a.value || !((N = a.value) != null && N.id) ? (d(), x("div", Mn, "请选择表格模型")) : (d(), x(J, { key: 1 }, [
          k(_(sr), H({
            ref_key: "gridRef",
            ref: n,
            data: i.value
          }, u.value), {
            default: C(() => [
              u.value.selectedEnabled ? (d(), E(_(_e), {
                key: 0,
                type: "selection",
                width: "60"
              })) : ue("", !0),
              (d(!0), x(J, null, K(y.value, (P) => (d(), E(_(_e), {
                key: P.prop,
                field: P.prop,
                title: P.label,
                editor: P.editor
              }, null, 8, ["field", "title", "editor"]))), 128)),
              u.value.rowOperationEnabled ? (d(), E(_(_e), {
                key: 1,
                field: "operation",
                title: "操作"
              }, {
                default: C((P) => [
                  (d(!0), x(J, null, K(U.value, (p) => (d(), E(_(pe), {
                    key: p.label,
                    type: "text",
                    onClick: (se) => p == null ? void 0 : p.handler(P.row, P.rowIndex, O)
                  }, {
                    default: C(() => [
                      p.itemVisible ? (d(), x("div", jn, [
                        u.value.useIconOperation && p.icon ? (d(), E(_(pr), {
                          key: 0,
                          width: "auto",
                          trigger: "hover",
                          placement: "top",
                          content: p.label
                        }, {
                          reference: C(() => [
                            (d(), E(ae(p.icon), { class: "tiny-svg-size" }))
                          ]),
                          _: 2
                        }, 1032, ["content"])) : (d(), x("span", Ln, le(p.label), 1))
                      ])) : ue("", !0)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128))
                ]),
                _: 1
              })) : ue("", !0)
            ]),
            _: 1
          }, 16, ["data"]),
          c.total > c.pageSize ? (d(), E(_(ur), H({ key: 0 }, c, {
            onCurrentChange: F,
            onSizeChange: s
          }), null, 16)) : ue("", !0)
        ], 64))
      ]);
    };
  }
}, Pa = /* @__PURE__ */ ee(Wn, [["__scopeId", "data-v-a08659d7"]]), Gn = {
  key: 0,
  class: "placeholder-layer"
}, Hn = { key: 1 }, Jn = { class: "custom-label" }, Xn = { key: 0 }, Kn = { class: "custom-label" }, Qn = { key: 1 }, Yn = { class: "custom-label" }, Zn = { key: 0 }, ea = { class: "custom-label" }, ta = {
  __name: "BasePage",
  props: {
    style: {
      type: String
    },
    className: {
      type: String
    },
    layout: {
      type: Number,
      default: 2
    },
    pager: {
      type: Object
    },
    viewOnly: {
      type: Boolean,
      default: !1
    },
    searchFormData: {
      type: Object
    },
    editFormData: {
      type: Object
    },
    tableData: {
      type: Array,
      default: () => []
    },
    serviceModel: {
      type: Object
    },
    modelApis: {
      type: Array,
      default: () => []
    },
    rowOperations: {
      type: Object
    }
  },
  emits: ["update:searchFormData", "update:tableData", "update:editFormData"],
  setup(e, { expose: t, emit: r }) {
    const o = e, n = r, a = G(null), i = B(() => 12 / o.layout), l = B(() => o.layout === 1 ? 6 : 12), u = B(() => o.serviceModel), y = G(), c = G(), U = G(!1), F = G(!1), s = G(o.tableData), g = ir(), w = G(), v = Ue({
      TinyInput: ht,
      TinySelect: ft,
      TinyCheckbox: ct,
      TinyRadio: dt,
      TinyDatePicker: ut,
      TinyNumeric: pt
    }), h = B(() => ({ ...g })), O = B(() => {
      var S;
      return (((S = o.serviceModel) == null ? void 0 : S.parameters) || []).map((f) => {
        const z = { ...f };
        return h.value.rowOperationEnabled && (z.editor = {
          component: v[f.component],
          attrs: f
        }), z;
      });
    }), b = Ue(
      o.pager || {
        currentPage: 1,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50],
        total: 0,
        layout: "total, sizes, prev, pager, next, jumper"
      }
    ), m = (S) => {
      b.currentPage = S;
    }, N = (S) => {
      b.pageSize = S;
    }, P = () => {
      U.value = !0;
    }, p = () => {
      U.value = !1;
    }, se = (S = c.value) => {
      const f = o.modelApis.find((z) => z.nameEn === "insertApi");
      if (f)
        return j[f.method](f.url, S).then((z) => {
          if (z.status === 200)
            return je({
              type: "success",
              message: z.data.message,
              position: "top-right"
            }), z.data;
          throw new Error("request fail");
        }).catch((z) => {
          throw new Error(z);
        });
    }, Re = (S = c.value) => {
      const f = o.modelApis.find((z) => z.nameEn === "updateApi");
      if (f)
        return j[f.method](f.url, S).then((z) => {
          if (z.status === 200)
            return je({
              type: "success",
              message: z.data.message,
              position: "top-right"
            }), z.data;
          throw new Error("request fail");
        }).catch((z) => {
          throw new Error(z);
        });
    }, te = ({ currentPage: S, pageSize: f, data: z } = {}) => {
      const ce = o.modelApis.find((L) => L.nameEn === "queryApi");
      if (ce)
        return j[ce.method](`${ce.url}?currentPage=${S || 1}&pageSize=${f || 10}`, {
          params: z || y.value
        }).then((L) => {
          if (L.status === 200)
            return s.value = L.data.data, b.total = L.data.total, n("update:tableData", s.value), L.data;
          throw new Error("request fail");
        }).catch((L) => {
          throw new Error(L);
        });
    }, ze = (S) => {
      const f = o.modelApis.find((z) => z.nameEn === "deleteApi");
      if (f)
        return j[f.method](f.url, { params: S }).then((z) => {
          if (z.status === 200)
            return je({
              type: "success",
              message: z.data.message,
              position: "top-right"
            }), z.data;
          throw new Error("request fail");
        }).catch((z) => {
          throw new Error(z);
        });
    }, Te = async () => {
      F.value ? await Re() : await se(), await te(), p();
    }, we = () => {
      te();
    }, M = () => {
      var S;
      y.value = Object.fromEntries(
        (((S = u.value) == null ? void 0 : S.parameters) || []).map((f) => [
          f.prop,
          f != null && f.isModel ? Object.fromEntries(
            f.defaultValue.map((z) => [z.prop, z.defaultValue || null])
          ) : f.defaultValue || null
        ])
      ), n("update:searchFormData", y.value);
    }, Y = () => {
      var S;
      c.value = Object.fromEntries(
        (((S = u.value) == null ? void 0 : S.parameters) || []).map((f) => [
          f.prop,
          f != null && f.isModel ? Object.fromEntries(
            f.defaultValue.map((z) => [z.prop, z.defaultValue || null])
          ) : f.defaultValue || null
        ])
      ), n("update:editFormData", c.value);
    }, Z = () => {
      M();
    }, $e = () => {
      Y(), F.value = !1, P();
    }, xe = (S) => {
      c.value = { ...S }, n("update:editFormData", c.value), F.value = !0, P();
    }, kr = (S) => {
      const f = { id: S.id };
      $r.confirm("您确定要删除吗？").then(() => {
        ze(f);
      });
    }, Vr = B(() => {
      var S;
      return (((S = o.rowOperations) == null ? void 0 : S.value) || []).map((f) => (f.builtIn && f.label === "编辑" && (f.handler = f.handler ?? xe), f.builtIn && f.label === "删除" && (f.handler = f.handler ?? kr), {
        ...f,
        icon: f.icon ? ye == null ? void 0 : ye[f.icon]() : ""
      }));
    });
    return Oe(
      () => o.searchFormData,
      (S) => {
        S && (y.value = o.searchFormData);
      },
      { deep: !0, immediate: !0 }
    ), Oe(
      () => o.editFormData,
      (S) => {
        S && (c.value = o.editFormData);
      },
      { deep: !0, immediate: !0 }
    ), Oe(
      () => o.serviceModel,
      () => {
        y.value || M(), c.value || Y();
      },
      { immediate: !0 }
    ), Fr(() => {
      te();
    }), t({
      ...{
        tableData: () => s.value,
        insertApi: se,
        updateApi: Re,
        queryApi: te,
        deleteApi: ze
      }
    }), (S, f) => {
      var ce, L, wt, xt, St, Ot;
      const z = lr("auto-tip");
      return d(), x("div", null, [
        !u.value || !((ce = u.value) != null && ce.id) ? (d(), x("div", Gn, "请选择模型")) : (d(), x("div", Hn, [
          k(_(he), {
            ref_key: "formRef",
            ref: a,
            "label-width": "120px",
            "label-position": "left",
            model: y.value,
            layout: (L = h.value) == null ? void 0 : L.layout,
            size: (wt = h.value) == null ? void 0 : wt.size
          }, {
            default: C(() => [
              k(_(be), null, {
                default: C(() => {
                  var D;
                  return [
                    (d(!0), x(J, null, K((D = u.value) == null ? void 0 : D.parameters, (R, Se) => (d(), E(_(me), {
                      span: i.value,
                      key: Se
                    }, {
                      default: C(() => [
                        k(_(Ce), {
                          prop: R.prop
                        }, {
                          label: C(() => [
                            fe((d(), x("div", Jn, [
                              W(le(R.label), 1)
                            ])), [
                              [z]
                            ])
                          ]),
                          default: C(() => [
                            R != null && R.isModel && R.defaultValue !== null ? (d(), x("div", Xn, [
                              k(_(he), {
                                "label-width": "100",
                                "label-position": "left",
                                model: y.value[R.prop]
                              }, {
                                default: C(() => [
                                  k(_(be), null, {
                                    default: C(() => [
                                      (d(!0), x(J, null, K(R.defaultValue, (V, Me) => (d(), E(_(me), {
                                        span: l.value,
                                        key: Me
                                      }, {
                                        default: C(() => [
                                          k(_(Ce), {
                                            prop: V.prop
                                          }, {
                                            label: C(() => [
                                              fe((d(), x("div", Kn, [
                                                W(le(V.label), 1)
                                              ])), [
                                                [z]
                                              ])
                                            ]),
                                            default: C(() => [
                                              (d(), E(ae(v[V.component]), H({
                                                modelValue: y.value[R.prop][V.prop],
                                                "onUpdate:modelValue": (X) => y.value[R.prop][V.prop] = X,
                                                disabled: e.viewOnly
                                              }, { ref_for: !0 }, V), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                                            ]),
                                            _: 2
                                          }, 1032, ["prop"])
                                        ]),
                                        _: 2
                                      }, 1032, ["span"]))), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["model"])
                            ])) : (d(), E(ae(v[R.component]), H({
                              key: 1,
                              modelValue: y.value[R.prop],
                              "onUpdate:modelValue": (V) => y.value[R.prop] = V,
                              disabled: e.viewOnly
                            }, { ref_for: !0 }, R, { label: "" }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                          ]),
                          _: 2
                        }, 1032, ["prop"])
                      ]),
                      _: 2
                    }, 1032, ["span"]))), 128))
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "layout", "size"]),
          Dr("div", null, [
            k(_(pe), {
              type: "primary",
              size: (xt = h.value) == null ? void 0 : xt.size,
              onClick: $e
            }, {
              default: C(() => [...f[1] || (f[1] = [
                W(" 新增 ", -1)
              ])]),
              _: 1
            }, 8, ["size"]),
            k(_(pe), {
              size: (St = h.value) == null ? void 0 : St.size,
              onClick: we
            }, {
              default: C(() => [...f[2] || (f[2] = [
                W(" 搜索 ", -1)
              ])]),
              _: 1
            }, 8, ["size"]),
            k(_(pe), {
              size: (Ot = h.value) == null ? void 0 : Ot.size,
              onClick: Z
            }, {
              default: C(() => [...f[3] || (f[3] = [
                W(" 重置 ", -1)
              ])]),
              _: 1
            }, 8, ["size"])
          ]),
          k(_(sr), H({
            ref_key: "gridRef",
            ref: w,
            data: s.value
          }, h.value), {
            default: C(() => [
              h.value.selectedEnabled ? (d(), E(_(_e), {
                key: 0,
                type: "selection",
                width: "60"
              })) : ue("", !0),
              (d(!0), x(J, null, K(O.value, (D) => (d(), E(_(_e), {
                key: D.prop,
                field: D.prop,
                title: D.label,
                editor: D.editor
              }, null, 8, ["field", "title", "editor"]))), 128)),
              h.value.rowOperationEnabled ? (d(), E(_(_e), {
                key: 1,
                field: "operation",
                title: "操作"
              }, {
                default: C((D) => [
                  (d(!0), x(J, null, K(Vr.value, (R) => (d(), E(_(pe), {
                    key: R.label,
                    type: "text",
                    onClick: (Se) => R == null ? void 0 : R.handler(D.row, D.rowIndex)
                  }, {
                    default: C(() => [
                      h.value.useIconOperation && R.icon ? (d(), E(_(pr), {
                        key: 0,
                        width: "auto",
                        trigger: "hover",
                        placement: "top",
                        content: R.label
                      }, {
                        reference: C(() => [
                          (d(), E(ae(R.icon), { class: "tiny-svg-size" }))
                        ]),
                        _: 2
                      }, 1032, ["content"])) : (d(), x("span", Qn, le(R.label), 1))
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128))
                ]),
                _: 1
              })) : ue("", !0)
            ]),
            _: 1
          }, 16, ["data"]),
          b.total > b.pageSize ? (d(), E(_(ur), H({ key: 0 }, b, {
            onCurrentChange: m,
            onSizeChange: N
          }), null, 16)) : ue("", !0),
          k(_(Ir), {
            visible: U.value,
            "onUpdate:visible": f[0] || (f[0] = (D) => U.value = D),
            title: F.value ? "编辑" : "新增",
            width: "70%"
          }, {
            footer: C(() => [
              k(_(pe), {
                onClick: p,
                round: ""
              }, {
                default: C(() => [...f[4] || (f[4] = [
                  W(" 取 消 ", -1)
                ])]),
                _: 1
              }),
              k(_(pe), {
                type: "primary",
                onClick: Te,
                round: ""
              }, {
                default: C(() => [...f[5] || (f[5] = [
                  W(" 确 定 ", -1)
                ])]),
                _: 1
              })
            ]),
            default: C(() => {
              var D, R;
              return [
                k(_(he), {
                  "label-width": "100px",
                  "label-position": "left",
                  model: c.value,
                  layout: (D = h.value) == null ? void 0 : D.layout,
                  size: (R = h.value) == null ? void 0 : R.size
                }, {
                  default: C(() => [
                    k(_(be), null, {
                      default: C(() => {
                        var Se;
                        return [
                          (d(!0), x(J, null, K((Se = u.value) == null ? void 0 : Se.parameters, (V, Me) => (d(), E(_(me), {
                            span: i.value,
                            key: Me
                          }, {
                            default: C(() => [
                              k(_(Ce), {
                                prop: V.prop
                              }, {
                                label: C(() => [
                                  fe((d(), x("div", Yn, [
                                    W(le(V.label), 1)
                                  ])), [
                                    [z]
                                  ])
                                ]),
                                default: C(() => [
                                  V != null && V.isModel && V.defaultValue !== null ? (d(), x("div", Zn, [
                                    k(_(he), {
                                      "label-width": "100",
                                      "label-position": "left",
                                      model: c.value[V.prop]
                                    }, {
                                      default: C(() => [
                                        k(_(be), null, {
                                          default: C(() => [
                                            (d(!0), x(J, null, K(V.defaultValue, (X, qr) => (d(), E(_(me), {
                                              span: l.value,
                                              key: qr
                                            }, {
                                              default: C(() => [
                                                k(_(Ce), {
                                                  prop: X.prop
                                                }, {
                                                  label: C(() => [
                                                    fe((d(), x("div", ea, [
                                                      W(le(X.label), 1)
                                                    ])), [
                                                      [z]
                                                    ])
                                                  ]),
                                                  default: C(() => [
                                                    (d(), E(ae(v[X.component]), H({
                                                      modelValue: c.value[V.prop][X.prop],
                                                      "onUpdate:modelValue": (Ar) => c.value[V.prop][X.prop] = Ar,
                                                      disabled: e.viewOnly
                                                    }, { ref_for: !0 }, X), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                                                  ]),
                                                  _: 2
                                                }, 1032, ["prop"])
                                              ]),
                                              _: 2
                                            }, 1032, ["span"]))), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["model"])
                                  ])) : (d(), E(ae(v[V.component]), H({
                                    key: 1,
                                    modelValue: c.value[V.prop],
                                    "onUpdate:modelValue": (X) => c.value[V.prop] = X,
                                    disabled: e.viewOnly
                                  }, { ref_for: !0 }, V, { label: "" }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]))
                                ]),
                                _: 2
                              }, 1032, ["prop"])
                            ]),
                            _: 2
                          }, 1032, ["span"]))), 128))
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "layout", "size"])
              ];
            }),
            _: 1
          }, 8, ["visible", "title"])
        ]))
      ]);
    };
  }
}, Ra = /* @__PURE__ */ ee(ta, [["__scopeId", "data-v-1dbe1122"]]), ra = {
  icon: "Box",
  name: {
    zh_CN: "CanvasCol"
  },
  component: "CanvasCol",
  schema: {
    slots: {},
    properties: [
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多"
          }
        },
        content: [
          {
            property: "widthType",
            type: "String",
            defaultValue: "auto",
            label: {
              text: {
                zh_CN: "宽度类型"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "RadioGroupConfigurator",
              props: {
                options: [
                  {
                    label: "auto",
                    text: "自适应"
                  },
                  {
                    label: "fixed",
                    text: "固定"
                  }
                ],
                type: "button"
              }
            }
          },
          {
            property: "flexBasis",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "固定宽度"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          },
          {
            property: "rowGap",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "行间距"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          },
          {
            property: "colGap",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "列间距"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          },
          {
            property: "align",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "副轴对齐"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    value: "flex-start",
                    label: "头部对齐"
                  },
                  {
                    value: "center",
                    label: "中间对齐"
                  },
                  {
                    value: "flex-end",
                    label: "尾端对齐"
                  },
                  {
                    value: "stretch",
                    label: "拉伸对齐"
                  }
                ],
                type: "button"
              }
            }
          },
          {
            property: "justAlign",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "主轴对齐"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    value: "flex-start",
                    label: "头部对齐"
                  },
                  {
                    value: "center",
                    label: "中间对齐"
                  },
                  {
                    value: "flex-end",
                    label: "尾端对齐"
                  },
                  {
                    value: "space-between",
                    label: "两端对齐"
                  },
                  {
                    value: "space-evenly",
                    label: "均分对齐"
                  }
                ],
                type: "button"
              }
            }
          },
          {
            property: "grow",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "增长"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SwitchConfigurator",
              props: {}
            }
          },
          {
            property: "shrink",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "收缩"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SwitchConfigurator",
              props: {}
            }
          }
        ]
      }
    ],
    events: {},
    shortcuts: {
      properties: []
    },
    contentMenu: {
      actions: []
    }
  },
  configure: {
    loop: !0,
    isContainer: !0,
    nestingRule: {
      childWhitelist: [],
      descendantBlacklist: []
    }
  }
}, oa = {
  component: ra
}, na = {
  icon: "Box",
  name: {
    zh_CN: "CanvasRow"
  },
  component: "CanvasRow",
  schema: {
    slots: {},
    properties: [
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多"
          }
        },
        content: [
          {
            property: "minHeight",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "最小高度"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          },
          {
            property: "rowGap",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "行间距"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          },
          {
            property: "colGap",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "列间距"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          },
          {
            property: "align",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "副轴对齐"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    value: "flex-start",
                    label: "头部对齐"
                  },
                  {
                    value: "center",
                    label: "中间对齐"
                  },
                  {
                    value: "flex-end",
                    label: "尾端对齐"
                  },
                  {
                    value: "stretch",
                    label: "拉伸对齐"
                  }
                ],
                type: "button"
              }
            }
          },
          {
            property: "justAlign",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "主轴对齐"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    value: "flex-start",
                    label: "头部对齐"
                  },
                  {
                    value: "center",
                    label: "中间对齐"
                  },
                  {
                    value: "flex-end",
                    label: "尾端对齐"
                  },
                  {
                    value: "space-between",
                    label: "两端对齐"
                  },
                  {
                    value: "space-evenly",
                    label: "均分对齐"
                  }
                ],
                type: "button"
              }
            }
          }
        ]
      }
    ],
    events: {},
    shortcuts: {
      properties: []
    },
    contentMenu: {
      actions: []
    }
  },
  configure: {
    loop: !0,
    isContainer: !0,
    nestingRule: {
      childWhitelist: [],
      descendantBlacklist: []
    }
  }
}, aa = {
  component: na
}, la = {
  icon: "RowColContainer",
  name: {
    zh_CN: "行列容器"
  },
  component: "CanvasRowColContainer",
  schema: {
    slots: {},
    properties: [
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多"
          }
        },
        content: [
          {
            property: "rowGap",
            type: "String",
            defaultValue: "",
            label: {
              text: {
                zh_CN: "行间距"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "InputConfigurator",
              props: {}
            }
          }
        ]
      }
    ],
    events: {},
    shortcuts: {
      properties: []
    },
    contentMenu: {
      actions: []
    }
  },
  configure: {
    loop: !0,
    isContainer: !0,
    nestingRule: {
      childWhitelist: [],
      descendantBlacklist: []
    }
  }
}, ia = {
  name: {
    zh_CN: "行列容器"
  },
  screenshot: "",
  snippetName: "CanvasRowColContainer",
  icon: "RowColContainer",
  schema: {
    componentName: "CanvasRowColContainer",
    props: {
      rowGap: "16px"
    },
    children: [
      {
        componentName: "CanvasRow",
        props: {
          rowGap: "16px",
          colGap: "16px"
        },
        children: [
          {
            componentName: "CanvasCol",
            props: {
              rowGap: "16px",
              colGap: "16px",
              grow: !0,
              shrink: !0,
              widthType: "auto"
            }
          }
        ]
      }
    ]
  }
}, Zt = {
  component: la,
  snippet: ia
}, sa = {
  icon: "FlexBox",
  name: {
    zh_CN: "弹性容器"
  },
  component: "CanvasFlexBox",
  schema: {
    slots: {},
    properties: [
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多"
          }
        },
        content: [
          {
            property: "flexDirection",
            type: "String",
            defaultValue: "row",
            bindState: !0,
            label: {
              text: {
                zh_CN: "排列方向"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: "水平,起点在左端",
                    value: "row"
                  },
                  {
                    label: "水平,起点在右端",
                    value: "row-reverse"
                  },
                  {
                    label: "垂直,起点在上沿",
                    value: "column"
                  },
                  {
                    label: "垂直,起点在下沿",
                    value: "column-reverse"
                  }
                ]
              }
            }
          },
          {
            property: "gap",
            defaultValue: "8px",
            label: {
              text: {
                zh_CN: "间距"
              }
            },
            widget: {
              component: "InputConfigurator"
            },
            description: {
              zh_CN: "控制容器内水平和垂直的间距"
            },
            labelPosition: "left"
          },
          {
            property: "padding",
            defaultValue: "8px",
            label: {
              text: {
                zh_CN: "内边距"
              }
            },
            widget: {
              component: "InputConfigurator"
            },
            labelPosition: "left"
          },
          {
            property: "justifyContent",
            type: "String",
            defaultValue: "flex-start",
            bindState: !0,
            label: {
              text: {
                zh_CN: "水平对齐方式"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: "左对齐",
                    value: "flex-start"
                  },
                  {
                    label: "右对齐",
                    value: "flex-end"
                  },
                  {
                    label: "居中",
                    value: "center"
                  },
                  {
                    label: "两端对齐,子元素间隔相等",
                    value: "space-between"
                  },
                  {
                    label: "子元素两侧间隔相等",
                    value: "space-around"
                  }
                ]
              }
            }
          },
          {
            property: "alignItems",
            type: "String",
            defaultValue: "center",
            bindState: !0,
            label: {
              text: {
                zh_CN: "垂直对齐方式"
              }
            },
            cols: 12,
            rules: [],
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: "交叉轴的中点对齐",
                    value: "center"
                  },
                  {
                    label: "交叉轴的起点对齐",
                    value: "flex-start"
                  },
                  {
                    label: "交叉轴的终点对齐",
                    value: "flex-end"
                  },
                  {
                    label: "以子元素第一行文字的基线对齐",
                    value: "baseline"
                  },
                  {
                    label: "占满容器高度",
                    value: "stretch"
                  }
                ]
              }
            }
          }
        ]
      }
    ],
    events: {
      onClick: {
        label: {
          zh_CN: "点击事件"
        },
        description: {
          zh_CN: "点击时触发的回调函数"
        },
        type: "event",
        functionInfo: {
          params: [],
          returns: {}
        },
        defaultValue: ""
      }
    },
    shortcuts: {
      properties: []
    },
    contentMenu: {
      actions: []
    }
  },
  configure: {
    loop: !0,
    isContainer: !0,
    nestingRule: {
      childWhitelist: [],
      descendantBlacklist: []
    }
  }
}, pa = {
  name: {
    zh_CN: "弹性容器"
  },
  screenshot: "",
  snippetName: "CanvasFlexBox",
  icon: "FlexBox",
  schema: {
    componentName: "CanvasFlexBox",
    props: {
      flexDirection: "row",
      gap: "8px",
      padding: "8px"
    }
  }
}, er = {
  component: sa,
  snippet: pa
}, ua = {
  icon: "FullWidthCenter",
  name: {
    zh_CN: "全宽居中布局"
  },
  component: "CanvasSection",
  schema: {
    slots: {},
    properties: [
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多"
          }
        },
        content: []
      }
    ],
    events: {
      onClick: {
        label: {
          zh_CN: "点击事件"
        },
        description: {
          zh_CN: "点击时触发的回调函数"
        },
        type: "event",
        functionInfo: {
          params: [],
          returns: {}
        },
        defaultValue: ""
      }
    },
    shortcuts: {
      properties: []
    },
    contentMenu: {
      actions: []
    }
  },
  configure: {
    loop: !0,
    isContainer: !0,
    nestingRule: {
      childWhitelist: [],
      descendantBlacklist: []
    }
  }
}, da = {
  name: {
    zh_CN: "全宽居中布局"
  },
  screenshot: "",
  snippetName: "CanvasSection",
  icon: "FullWidthCenter",
  schema: {
    componentName: "CanvasSection",
    props: {}
  }
}, tr = {
  component: ua,
  snippet: da
}, ca = {
  icon: "navigation",
  name: {
    zh_CN: "导航条"
  },
  component: "CanvasNavigation",
  schema: {
    slots: {},
    properties: [
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多"
          }
        },
        content: [
          {
            property: "type",
            label: {
              text: {
                zh_CN: "类型"
              }
            },
            description: {
              zh_CN: "类型"
            },
            cols: 12,
            labelPosition: "left",
            type: "string",
            defaultValue: "horizontal",
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: "horizontal",
                    value: "horizontal"
                  },
                  {
                    label: "vertical",
                    value: "vertical"
                  }
                ]
              }
            }
          },
          {
            property: "tabs",
            label: {
              text: {
                zh_CN: "选项卡"
              }
            },
            required: !0,
            readOnly: !1,
            disabled: !1,
            defaultValue: "",
            cols: 12,
            bindState: !1,
            widget: {
              component: "TabBarConfigurator",
              props: {}
            },
            description: {
              zh_CN: "tabs 选项卡"
            },
            labelPosition: "none"
          }
        ]
      }
    ],
    events: {
      onClick: {
        label: {
          zh_CN: "点击事件"
        },
        description: {
          zh_CN: "点击时触发的回调函数"
        },
        type: "event",
        functionInfo: {
          params: [],
          returns: {}
        },
        defaultValue: ""
      }
    },
    shortcuts: {
      properties: []
    },
    contentMenu: {
      actions: []
    }
  },
  configure: {
    loop: !0,
    isContainer: !0,
    nestingRule: {
      childWhitelist: [],
      descendantBlacklist: []
    }
  }
}, fa = {
  name: {
    zh_CN: "导航条"
  },
  snippetName: "CanvasNavigation",
  icon: "navigation",
  schema: {
    componentName: "CanvasNavigation",
    props: {
      style: "text-align: center; padding: 8px 12px; box-shadow: 0 0 4px #0003;"
    },
    children: [
      {
        componentName: "RouterLink",
        props: {
          to: "",
          style: "display: inline-flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
        },
        children: [
          {
            componentName: "Icon",
            props: {
              name: "IconPublicHome",
              style: "margin-top: 3px;"
            }
          },
          {
            componentName: "Text",
            props: {
              text: "首页"
            }
          }
        ]
      },
      {
        componentName: "RouterLink",
        props: {
          to: "",
          style: "display: inline-flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
        },
        children: [
          {
            componentName: "Icon",
            props: {
              name: "IconTaskCooperation",
              style: "margin-top: 3px;"
            }
          },
          {
            componentName: "Text",
            props: {
              text: "介绍"
            }
          }
        ]
      },
      {
        componentName: "RouterLink",
        props: {
          to: "",
          style: "display: flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
        },
        children: [
          {
            componentName: "Icon",
            props: {
              name: "IconText",
              style: "margin-top: 3px;"
            }
          },
          {
            componentName: "Text",
            props: {
              text: "文档"
            }
          }
        ]
      }
    ]
  }
}, rr = {
  component: ca,
  snippet: fa
}, ha = {
  icon: "form",
  name: {
    zh_CN: "FormModel"
  },
  component: "FormModel",
  schema: {
    properties: [
      {
        label: {
          zh_CN: "选择模型"
        },
        description: {
          zh_CN: "选择模型"
        },
        content: [
          {
            property: "serviceModel",
            label: {
              text: {
                zh_CN: "选择模型"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            bindState: !1,
            cols: 12,
            widget: {
              component: "ModelConfigurator",
              props: {
                expand: !0
              }
            },
            properties: [
              {
                label: {
                  zh_CN: "默认分组",
                  en_US: "Default Group"
                },
                content: [
                  {
                    property: "label",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "表单项标签",
                        en_US: "Form Item Label"
                      }
                    },
                    required: !0,
                    bindState: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "表单项标签",
                      en_US: "Form item's label."
                    }
                  },
                  {
                    property: "prop",
                    bindState: !1,
                    disabled: !0,
                    label: {
                      text: {
                        zh_CN: "字段名",
                        en_US: "Field Name"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "字段名",
                      en_US: "Name of the form field."
                    }
                  },
                  {
                    property: "required",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "必填",
                        en_US: "Required"
                      }
                    },
                    required: !1,
                    bindState: !0,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否必填",
                      en_US: "Enable required or not."
                    }
                  },
                  {
                    property: "rules",
                    label: {
                      text: {
                        zh_CN: "校验规则",
                        en_US: "Verification Rules"
                      }
                    },
                    required: !1,
                    bindState: !0,
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        language: "json"
                      }
                    },
                    description: {
                      zh_CN: "表单项校验",
                      en_US: "Verification for form item."
                    }
                  },
                  {
                    property: "component",
                    type: "string",
                    required: !1,
                    bindState: !0,
                    cols: 12,
                    label: {
                      text: {
                        zh_CN: "输入类型",
                        en_US: "Input Type"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: {
                              zh_CN: "输入框",
                              en_US: "Input"
                            },
                            value: "TinyInput"
                          },
                          {
                            label: {
                              zh_CN: "选择器",
                              en_US: "Select"
                            },
                            value: "TinySelect"
                          },
                          {
                            label: {
                              zh_CN: "多选框",
                              en_US: "Checkbox"
                            },
                            value: "TinyCheckbox"
                          },
                          {
                            label: {
                              zh_CN: "单选框",
                              en_US: "Radio"
                            },
                            value: "TinyRadio"
                          },
                          {
                            label: {
                              zh_CN: "日期选择器",
                              en_US: "Date Picker"
                            },
                            value: "TinyDatePicker"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "输入类型",
                      en_US: "Type of the input."
                    }
                  }
                ]
              },
              {
                componentName: "TinyInput",
                label: {
                  zh_CN: "输入框",
                  en_US: "Input"
                },
                content: [
                  {
                    property: "type",
                    label: {
                      text: {
                        zh_CN: "类型"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "textarea",
                            value: "textarea"
                          },
                          {
                            label: "text",
                            value: "text"
                          },
                          {
                            label: "password",
                            value: "password"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "设置input框的type属性"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "rows",
                    label: {
                      text: {
                        zh_CN: "行数"
                      }
                    },
                    widget: {
                      component: "NumberConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框行数，只对 type='textarea' 有效"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinySelect",
                label: {
                  zh_CN: "选择器",
                  en_US: "Select"
                },
                content: [
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "searchable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "下拉可搜索"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "下拉面板是否可搜索"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "options",
                    label: {
                      text: {
                        zh_CN: "选项数据"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    bindState: !0,
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        language: "json"
                      }
                    },
                    description: {
                      zh_CN: "配置 Select 下拉数据项"
                    },
                    labelPosition: "top"
                  },
                  {
                    property: "multiple",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "多选"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否允许输入框输入或选择多个项"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyDatePicker",
                label: {
                  zh_CN: "日期选择器",
                  en_US: "DatePicker"
                },
                content: [
                  {
                    property: "type",
                    label: {
                      text: {
                        zh_CN: "类型"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "日期",
                            value: "date"
                          },
                          {
                            label: "日期时间",
                            value: "datetime"
                          },
                          {
                            label: "周",
                            value: "week"
                          },
                          {
                            label: "月份",
                            value: "month"
                          },
                          {
                            label: "年份",
                            value: "year"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "设置日期框的type属性"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "readonly",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "只读"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否只读"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "format",
                    type: "string",
                    defaultValue: "",
                    label: {
                      text: {
                        zh_CN: "格式化"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否只读"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "valueFormat",
                    type: "string",
                    defaultValue: "",
                    label: {
                      text: {
                        zh_CN: "绑定值格式化"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "value-format"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyRadio",
                label: {
                  zh_CN: "单选框",
                  en_US: "Radio"
                },
                content: [
                  {
                    property: "text",
                    label: {
                      text: {
                        zh_CN: "文本内容"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "单选框文本内容"
                    }
                  },
                  {
                    property: "label",
                    label: {
                      text: {
                        zh_CN: "选中值"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "radio 选中时的值"
                    }
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyCheckbox",
                label: {
                  zh_CN: "多选框",
                  en_US: "Checkbox"
                },
                content: [
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "checked",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "勾选"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "当前是否勾选"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "text",
                    label: {
                      text: {
                        zh_CN: "文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "复选框的文本"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyNumeric",
                label: {
                  zh_CN: "数组输入框",
                  en_US: "Numeric"
                },
                content: [
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "allow-empty",
                    label: {
                      text: {
                        zh_CN: "内容可清空"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否内容可清空"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "size",
                    label: {
                      text: {
                        zh_CN: "尺寸"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "medium",
                            value: "medium"
                          },
                          {
                            label: "small",
                            value: "small"
                          },
                          {
                            label: "mini",
                            value: "mini"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "输入框尺寸。该属性的可选值为 medium / small / mini"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "controls",
                    label: {
                      text: {
                        zh_CN: "加减按钮"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否使用加减按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "controls-position",
                    label: {
                      text: {
                        zh_CN: "加减按钮位置"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "左右两侧",
                            value: ""
                          },
                          {
                            label: "只在右侧",
                            value: "right"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "加减按钮位置"
                    }
                  },
                  {
                    property: "precision",
                    label: {
                      text: {
                        zh_CN: "精度"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {
                        allowEmpty: !0
                      }
                    },
                    description: {
                      zh_CN: "数值精度"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "step",
                    label: {
                      text: {
                        zh_CN: "步长"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {
                        allowEmpty: !0
                      }
                    },
                    description: {
                      zh_CN: "步长"
                    },
                    labelPosition: "left"
                  }
                ]
              }
            ],
            labelPosition: "top"
          },
          {
            property: "modelApis",
            label: {
              text: {
                zh_CN: "绑定模型方法"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            bindState: !1,
            cols: 12,
            widget: {
              component: "ModelApiConfigurator",
              props: {}
            },
            labelPosition: "top"
          }
        ]
      },
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        content: [
          {
            property: "layout",
            label: {
              text: {
                zh_CN: "表单布局",
                en_US: "From Layout"
              }
            },
            required: !0,
            bindState: !1,
            cols: 12,
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: {
                      zh_CN: "一列布局",
                      en_US: "One-column Layout"
                    },
                    value: 1
                  },
                  {
                    label: {
                      zh_CN: "两列布局",
                      en_US: "Two-column Layout"
                    },
                    value: 2
                  },
                  {
                    label: {
                      zh_CN: "三列布局",
                      en_US: "Three-column Layout"
                    },
                    value: 3
                  }
                ]
              }
            },
            description: {
              zh_CN: "设置表单布局",
              en_US: "Set the form layout."
            }
          },
          {
            property: "size",
            label: {
              text: {
                zh_CN: "尺寸"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: "medium",
                    value: "medium"
                  },
                  {
                    label: "small",
                    value: "small"
                  },
                  {
                    label: "mini",
                    value: "mini"
                  }
                ]
              }
            },
            description: {
              zh_CN: "输入框尺寸。该属性的可选值为 medium / small / mini"
            },
            labelPosition: "left"
          },
          {
            property: "disabled",
            type: "boolean",
            defaultValue: !1,
            label: {
              text: {
                zh_CN: "禁用",
                en_US: "Disabled"
              }
            },
            required: !1,
            bindState: !0,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "是否禁用",
              en_US: "Enable Disabled or not."
            }
          },
          {
            property: "viewOnly",
            label: {
              text: {
                zh_CN: "只读",
                en_US: "Readonly"
              }
            },
            required: !1,
            bindState: !0,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "控制编辑态、查看态",
              en_US: "Control the editing and viewing states."
            }
          },
          {
            property: "modelValue",
            label: {
              text: {
                zh_CN: "表单数据绑定变量",
                en_US: "Binding Variables For Form Data"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "BindVariableConfigurator",
              props: {
                defaultValue: []
              }
            },
            description: {
              zh_CN: "为表单数据绑定变量",
              en_US: "Binding Variables For Form Data."
            }
          }
        ]
      }
    ],
    events: {
      "onUpdate:modelValue": {
        label: {
          zh_CN: "绑定值改变时触发",
          en_US: "Binding changed Triggered"
        },
        description: {
          zh_CN: "绑定值改变时触发",
          en_US: "Triggered when the value of the binding changes."
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "value",
              type: "array",
              defaultValue: [],
              description: {
                zh_CN: "双向绑定值",
                en_US: "Binding value."
              }
            }
          ],
          returns: {}
        }
      }
    }
  },
  configure: {
    loop: !1,
    condition: !0,
    isContainer: !1,
    isModal: !1,
    nestingRule: {
      childWhitelist: [],
      parentWhitelist: ""
    }
  }
}, ba = {
  name: {
    zh_CN: "表单模型",
    en_US: "FormModel"
  },
  icon: "form",
  screenshot: "",
  snippetName: "FormModel",
  schema: {
    componentName: "FormModel",
    props: {}
  }
}, or = {
  component: ha,
  snippet: ba
}, ma = {
  icon: "grid",
  name: {
    zh_CN: "TableModel"
  },
  component: "TableModel",
  schema: {
    properties: [
      {
        label: {
          zh_CN: "选择模型"
        },
        description: {
          zh_CN: "选择模型"
        },
        content: [
          {
            property: "serviceModel",
            label: {
              text: {
                zh_CN: "选择模型"
              }
            },
            required: !0,
            readOnly: !1,
            disabled: !1,
            bindState: !1,
            cols: 12,
            widget: {
              component: "ModelConfigurator",
              props: {
                expand: !0
              }
            },
            properties: [
              {
                label: {
                  zh_CN: "默认分组",
                  en_US: "Default Group"
                },
                content: [
                  {
                    property: "label",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "列标题",
                        en_US: "Column Title"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "列标题",
                      en_US: "Column's title."
                    }
                  },
                  {
                    property: "prop",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "列字段",
                        en_US: "Column Field"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !0,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "列字段",
                      en_US: "Column's field."
                    }
                  },
                  {
                    property: "width",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "列宽",
                        en_US: "Column Width"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "列宽",
                      en_US: "Column's width."
                    }
                  },
                  {
                    property: "minWidth",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "最小列宽",
                        en_US: "Minimum Width"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "最小列宽",
                      en_US: "Minimum width of column."
                    }
                  },
                  {
                    property: "formatter",
                    type: "object",
                    label: {
                      text: {
                        zh_CN: "格式化方法",
                        en_US: "Formatting Method"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        dataType: "JSFunction"
                      }
                    },
                    description: {
                      zh_CN: "格式化方法",
                      en_US: "Method to format."
                    }
                  },
                  {
                    property: "showOverflowTooltip",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "文本溢出显示tooltip",
                        en_US: "Tooltips when Text Overflow"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "文本溢出是否显示tooltip",
                      en_US: "Whether to display tooltips when text overflow?"
                    }
                  },
                  {
                    property: "fixed",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "列固定",
                        en_US: "Column Fixed"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: {
                              zh_CN: "固定左侧",
                              en_US: "Fixed Left"
                            },
                            value: "left"
                          },
                          {
                            label: {
                              zh_CN: "固定右侧",
                              en_US: "Fixed Right"
                            },
                            value: "right"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "列固定",
                      en_US: "Fixed table column on which side."
                    }
                  },
                  {
                    property: "sortable",
                    type: "boolean",
                    label: {
                      text: {
                        zh_CN: "是否排序",
                        en_US: "Sortable"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否排序",
                      en_US: "Enable sortable or not."
                    }
                  },
                  {
                    property: "tip",
                    type: "boolean",
                    label: {
                      text: {
                        zh_CN: "表头tip",
                        en_US: "Table Header Tip"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "表头tip",
                      en_US: "Tip of table's header."
                    }
                  },
                  {
                    property: "tipContent",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "表头tip内容",
                        en_US: "Header Tip Content"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "表头tip内容",
                      en_US: "Content of table header's tip."
                    }
                  },
                  {
                    property: "edit",
                    type: "boolean",
                    label: {
                      text: {
                        zh_CN: "是否可编辑",
                        en_US: "Editable"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否可编辑",
                      en_US: "Enable editable or not."
                    }
                  },
                  {
                    property: "required",
                    type: "boolean",
                    label: {
                      text: {
                        zh_CN: "必填",
                        en_US: "Required"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "不可编辑时，默认必填不生效",
                      en_US: "When it is not editable, the default requirement for mandatory filling does not take effect."
                    }
                  },
                  {
                    property: "component",
                    defaultValue: "TinyInput",
                    type: "string",
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    label: {
                      text: {
                        zh_CN: "控件类型",
                        en_US: "Control Type"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: {
                              zh_CN: "输入框",
                              en_US: "Input"
                            },
                            value: "TinyInput"
                          },
                          {
                            label: {
                              zh_CN: "选择框",
                              en_US: "Select"
                            },
                            value: "TinySelect"
                          },
                          {
                            label: {
                              zh_CN: "布尔值",
                              en_US: "Boolean"
                            },
                            value: "TinyRadio"
                          },
                          {
                            label: {
                              zh_CN: "状态标识",
                              en_US: "StatusMarker"
                            },
                            value: "TinyModelStatus"
                          },
                          {
                            label: {
                              zh_CN: "日期选择器",
                              en_US: "Date Picker"
                            },
                            value: "TinyDatePicker"
                          },
                          {
                            label: {
                              zh_CN: "计数器",
                              en_US: "Input Number"
                            },
                            value: "TinyNumeric"
                          }
                        ],
                        labelZhCN: "表格列配置"
                      }
                    },
                    description: {
                      zh_CN: "控件类型",
                      en_US: "Type of control."
                    }
                  }
                ]
              },
              {
                componentName: "TinyInput",
                label: {
                  zh_CN: "输入框",
                  en_US: "Input"
                },
                content: [
                  {
                    property: "type",
                    label: {
                      text: {
                        zh_CN: "类型"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "textarea",
                            value: "textarea"
                          },
                          {
                            label: "text",
                            value: "text"
                          },
                          {
                            label: "password",
                            value: "password"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "设置input框的type属性"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "rows",
                    label: {
                      text: {
                        zh_CN: "行数"
                      }
                    },
                    widget: {
                      component: "NumberConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框行数，只对 type='textarea' 有效"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "size",
                    label: {
                      text: {
                        zh_CN: "尺寸"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "medium",
                            value: "medium"
                          },
                          {
                            label: "small",
                            value: "small"
                          },
                          {
                            label: "mini",
                            value: "mini"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "输入框尺寸。该属性的可选值为 medium / small / mini"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinySelect",
                label: {
                  zh_CN: "选择器",
                  en_US: "Select"
                },
                content: [
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "searchable",
                    label: {
                      text: {
                        zh_CN: "下拉可搜索"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "下拉面板是否可搜索"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "options",
                    label: {
                      text: {
                        zh_CN: "选项数据"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        language: "json"
                      }
                    },
                    description: {
                      zh_CN: "配置 Select 下拉数据项"
                    },
                    labelPosition: "top"
                  },
                  {
                    property: "multiple",
                    label: {
                      text: {
                        zh_CN: "多选"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否允许输入框输入或选择多个项"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyDatePicker",
                label: {
                  zh_CN: "日期选择器",
                  en_US: "DatePicker"
                },
                content: [
                  {
                    property: "type",
                    label: {
                      text: {
                        zh_CN: "类型"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "日期",
                            value: "date"
                          },
                          {
                            label: "日期时间",
                            value: "datetime"
                          },
                          {
                            label: "周",
                            value: "week"
                          },
                          {
                            label: "月份",
                            value: "month"
                          },
                          {
                            label: "年份",
                            value: "year"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "设置日期框的type属性"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "readonly",
                    label: {
                      text: {
                        zh_CN: "只读"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否只读"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "size",
                    label: {
                      text: {
                        zh_CN: "尺寸"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "medium",
                            value: "medium"
                          },
                          {
                            label: "small",
                            value: "small"
                          },
                          {
                            label: "mini",
                            value: "mini"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "日期框尺寸。该属性的可选值为 medium / small / mini"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "format",
                    type: "string",
                    defaultValue: "",
                    label: {
                      text: {
                        zh_CN: "格式化"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否只读"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "valueFormat",
                    type: "string",
                    defaultValue: "",
                    label: {
                      text: {
                        zh_CN: "绑定值格式化"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "value-format"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyRadio",
                label: {
                  zh_CN: "单选框",
                  en_US: "Radio"
                },
                content: [
                  {
                    property: "text",
                    label: {
                      text: {
                        zh_CN: "文本内容"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "单选框文本内容"
                    }
                  },
                  {
                    property: "label",
                    label: {
                      text: {
                        zh_CN: "选中值"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "radio 选中时的值"
                    }
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyCheckbox",
                label: {
                  zh_CN: "多选框",
                  en_US: "Checkbox"
                },
                content: [
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "checked",
                    label: {
                      text: {
                        zh_CN: "勾选"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "当前是否勾选"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "text",
                    label: {
                      text: {
                        zh_CN: "文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "复选框的文本"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyNumeric",
                label: {
                  zh_CN: "数组输入框",
                  en_US: "Numeric"
                },
                content: [
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "allow-empty",
                    label: {
                      text: {
                        zh_CN: "内容可清空"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否内容可清空"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "size",
                    label: {
                      text: {
                        zh_CN: "尺寸"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "medium",
                            value: "medium"
                          },
                          {
                            label: "small",
                            value: "small"
                          },
                          {
                            label: "mini",
                            value: "mini"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "输入框尺寸。该属性的可选值为 medium / small / mini"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "controls",
                    label: {
                      text: {
                        zh_CN: "加减按钮"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否使用加减按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "controls-position",
                    label: {
                      text: {
                        zh_CN: "加减按钮位置"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "左右两侧",
                            value: ""
                          },
                          {
                            label: "只在右侧",
                            value: "right"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "加减按钮位置"
                    }
                  },
                  {
                    property: "precision",
                    label: {
                      text: {
                        zh_CN: "精度"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {
                        allowEmpty: !0
                      }
                    },
                    description: {
                      zh_CN: "数值精度"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "step",
                    label: {
                      text: {
                        zh_CN: "步长"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {
                        allowEmpty: !0
                      }
                    },
                    description: {
                      zh_CN: "步长"
                    },
                    labelPosition: "left"
                  }
                ]
              }
            ],
            labelPosition: "top"
          },
          {
            property: "modelApis",
            label: {
              text: {
                zh_CN: "绑定模型方法"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            bindState: !1,
            cols: 12,
            widget: {
              component: "ModelApiConfigurator",
              props: {}
            },
            labelPosition: "top"
          }
        ]
      },
      {
        label: {
          zh_CN: "基础属性",
          en_US: "Basic Attributes"
        },
        description: {
          zh_CN: "基础属性",
          en_US: "Basic attributes."
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多",
            en_US: "Show More"
          }
        },
        content: [
          {
            property: "viewOnly",
            label: {
              text: {
                zh_CN: "只读",
                en_US: "Readonly"
              }
            },
            required: !0,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "控制编辑态、查看态",
              en_US: "Control the editing and viewing states."
            }
          },
          {
            property: "selectedEnabled",
            resetProps: !0,
            label: {
              text: {
                zh_CN: "启用复选",
                en_US: "enable select data"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "是否允许复选框选中数据",
              en_US: "Whether to allow the check box to select data"
            },
            labelPosition: "left"
          },
          {
            property: "handleSelectedRows",
            label: {
              text: {
                zh_CN: "处理选中数据方法",
                en_US: "Method of Processing Selected Data"
              }
            },
            defaultValue: {
              type: "JSFunction",
              value: `/**\r
 * 获取表格勾选数据方法\r
 * tableSelection - 表格已勾选的数据\r
 */\r
function handleSelectedRows(tableSelection) {\r
  // 处理方法函数体\r
}`
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "CodeConfigurator",
              props: {
                language: "javascript",
                dataType: "JSFunction"
              }
            },
            description: {
              zh_CN: "处理选中数据方法",
              en_US: "Method of Processing Selected Data"
            },
            labelPosition: "left"
          }
        ]
      },
      {
        label: {
          zh_CN: "表格数据配置",
          en_US: "Form Data Configuration"
        },
        description: {
          zh_CN: "表格数据配置",
          en_US: "Configuration of form data."
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多",
            en_US: "Show More"
          }
        },
        content: [
          {
            property: "modelValue",
            label: {
              text: {
                zh_CN: "表格数据绑定变量",
                en_US: "Binding Variables For Table Data"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "BindVariableConfigurator",
              props: {
                defaultValue: [],
                isValueArray: !0
              }
            },
            description: {
              zh_CN: "为表格数据绑定变量",
              en_US: "Binding Variables For Search Form."
            }
          }
        ]
      },
      {
        label: {
          zh_CN: "表格列配置",
          en_US: "Columns Configuration"
        },
        description: {
          zh_CN: "表格列配置",
          en_US: "Configuration for table column."
        },
        collapse: {
          number: 6,
          text: {
            zh_CN: "显示更多",
            en_US: "Show More"
          }
        },
        content: [
          {
            property: "rowOperationEnabled",
            resetProps: !0,
            label: {
              text: {
                zh_CN: "启用行操作",
                en_US: "enable row operation"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "是否使用行操作",
              en_US: "Whether to allow the row operation"
            },
            labelPosition: "left"
          },
          {
            property: "useIconOperation",
            resetProps: !0,
            label: {
              text: {
                zh_CN: "使用图标",
                en_US: "use icon operation"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "行操作是否使用图标",
              en_US: "use Icon Whether to handle the row operation"
            },
            labelPosition: "left"
          },
          {
            type: "configList",
            property: "rowOperations",
            label: {
              text: {
                zh_CN: "行操作",
                en_US: "Row Operation"
              }
            },
            required: !1,
            cols: 12,
            properties: [
              {
                label: {
                  zh_CN: "默认分组",
                  en_US: "Default Group"
                },
                content: [
                  {
                    property: "label",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "文本",
                        en_US: "Text"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "操作名称",
                      en_US: "Operation's name."
                    }
                  },
                  {
                    property: "icon",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "图标",
                        en_US: "Icon"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {
                        placeholder: "请输入图标类名"
                      }
                    },
                    description: {
                      zh_CN: "图标库地址: https://tinyuidesign.cloudbu.huawei.com/tiny-vue/zh-CN/os-theme/components/icon#list",
                      en_US: "Icon Library Address: https://tinyuidesign.cloudbu.huawei.com/tiny-vue/zh-CN/os-theme/components/icon#list"
                    }
                  },
                  {
                    property: "handler",
                    label: {
                      text: {
                        zh_CN: "点击回调事件",
                        en_US: "Click Callback Event"
                      }
                    },
                    defaultValue: {
                      type: "JSFunction",
                      value: "function handleRow(row, index, extendApis) {}"
                    },
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        dataType: "JSFunction"
                      }
                    },
                    description: {
                      zh_CN: "操作的回调函数",
                      en_US: "Callback functions for operations."
                    }
                  }
                ]
              }
            ],
            widget: {
              component: "OperatorGroupConfigurator",
              props: {
                type: "object",
                textField: "label",
                language: "json",
                buttonText: "编辑行操作",
                title: "编辑行操作",
                enableVisibleControl: !0,
                disableDelete: !0,
                expand: !0,
                isAbleBatchOperation: !0
              }
            },
            description: {
              zh_CN: "表格自定义行操作",
              en_US: "Custom operations For table's row."
            },
            labelPosition: "top"
          },
          {
            property: "columnMinWidth",
            label: {
              text: {
                zh_CN: "表格列最小宽度",
                en_US: "Minimum Column Width"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "NumberConfigurator",
              props: {}
            },
            description: {
              zh_CN: "表格列最小宽度",
              en_US: "Minimum width of table's column."
            }
          },
          {
            property: "columnWidth",
            label: {
              text: {
                zh_CN: "表格列宽度",
                en_US: "Column Width"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "NumberConfigurator",
              props: {}
            },
            description: {
              zh_CN: "表格列宽度",
              en_US: "Width of table's column."
            }
          }
        ]
      }
    ],
    events: {
      onFilterChange: {
        label: {
          zh_CN: "筛选条件改变时触发改事件"
        },
        description: {
          zh_CN: "配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: "{$table,filters} 包含 table 实例对象和过滤条件的对象"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onSortChange: {
        label: {
          zh_CN: "点击列头，执行数据排序前触发的事件"
        },
        description: {
          zh_CN: "配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: "{$table,filters} 包含 table 实例对象和过滤条件的对象"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onSelectAll: {
        label: {
          zh_CN: "当手动勾选全选时触发的事件"
        },
        description: {
          zh_CN: "只对 type=selection 有效，当手动勾选全选时触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " 包含 table 实例对象"
              }
            },
            {
              name: "checked",
              type: "boolean",
              defaultValue: "",
              description: {
                zh_CN: "勾选状态"
              }
            },
            {
              name: "selction",
              type: "Array",
              defaultValue: "",
              description: {
                zh_CN: "选中的表格数据数组"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onSelectChange: {
        label: {
          zh_CN: "手动勾选并且值发生改变时触发的事件"
        },
        description: {
          zh_CN: "只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " table 实例对象"
              }
            },
            {
              name: "event",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " 原生 Event"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onToggleExpandChange: {
        label: {
          zh_CN: "当行展开或收起时会触发该事件"
        },
        description: {
          zh_CN: "当行展开或收起时会触发该事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: "{$table,row,rowIndex} 包含 table 实例对象和当前行数据的对象"
              }
            },
            {
              name: "event",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " 原生 Event"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onCurrentChange: {
        label: {
          zh_CN: "行点击时触发"
        },
        description: {
          zh_CN: "行点击时触发"
        },
        type: "event",
        functionInfo: {
          params: [],
          returns: {}
        },
        defaultValue: ""
      }
    },
    shortcuts: {
      properties: [
        "sortable",
        "columns"
      ]
    },
    contentMenu: {
      actions: [
        "create symbol"
      ]
    },
    onBeforeMount: "console.log('table on load'); this.pager = source.pager; this.fetchData = source.fetchData; this.data = source.data ;this.columns = source.columns"
  },
  configure: {
    loop: !1,
    condition: !0,
    styles: !0,
    isContainer: !1,
    isModal: !1,
    nestingRule: {
      childWhitelist: "",
      parentWhitelist: ""
    }
  }
}, Ca = {
  name: {
    zh_CN: "表格模型",
    en_US: "TableModel"
  },
  icon: "grid",
  screenshot: "",
  snippetName: "TableModel",
  schema: {
    componentName: "TableModel",
    props: {
      editConfig: {
        trigger: "click",
        mode: "cell",
        showStatus: !0
      },
      rowOperations: {
        type: "object",
        value: []
      }
    }
  }
}, nr = {
  component: ma,
  snippet: Ca
}, _a = {
  icon: "form",
  name: {
    zh_CN: "PageModel"
  },
  component: "PageModel",
  schema: {
    properties: [
      {
        label: {
          zh_CN: "选择模型"
        },
        description: {
          zh_CN: "选择模型"
        },
        content: [
          {
            property: "serviceModel",
            label: {
              text: {
                zh_CN: "选择模型"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            bindState: !1,
            cols: 12,
            widget: {
              component: "ModelConfigurator",
              props: {
                expand: !0
              }
            },
            properties: [
              {
                label: {
                  zh_CN: "默认分组",
                  en_US: "Default Group"
                },
                content: [
                  {
                    property: "label",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "表单项标签",
                        en_US: "Form Item Label"
                      }
                    },
                    required: !0,
                    bindState: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "表单项标签",
                      en_US: "Form item's label."
                    }
                  },
                  {
                    property: "prop",
                    bindState: !1,
                    disabled: !0,
                    label: {
                      text: {
                        zh_CN: "字段名",
                        en_US: "Field Name"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "字段名",
                      en_US: "Name of the form field."
                    }
                  },
                  {
                    property: "required",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "必填",
                        en_US: "Required"
                      }
                    },
                    required: !1,
                    bindState: !0,
                    cols: 12,
                    widget: {
                      component: "SwitchConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否必填",
                      en_US: "Enable required or not."
                    }
                  },
                  {
                    property: "rules",
                    label: {
                      text: {
                        zh_CN: "校验规则",
                        en_US: "Verification Rules"
                      }
                    },
                    required: !1,
                    bindState: !0,
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        language: "json"
                      }
                    },
                    description: {
                      zh_CN: "表单项校验",
                      en_US: "Verification for form item."
                    }
                  },
                  {
                    property: "component",
                    type: "string",
                    required: !1,
                    bindState: !0,
                    cols: 12,
                    label: {
                      text: {
                        zh_CN: "输入类型",
                        en_US: "Input Type"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: {
                              zh_CN: "输入框",
                              en_US: "Input"
                            },
                            value: "TinyInput"
                          },
                          {
                            label: {
                              zh_CN: "选择器",
                              en_US: "Select"
                            },
                            value: "TinySelect"
                          },
                          {
                            label: {
                              zh_CN: "多选框",
                              en_US: "Checkbox"
                            },
                            value: "TinyCheckbox"
                          },
                          {
                            label: {
                              zh_CN: "单选框",
                              en_US: "Radio"
                            },
                            value: "TinyRadio"
                          },
                          {
                            label: {
                              zh_CN: "日期选择器",
                              en_US: "Date Picker"
                            },
                            value: "TinyDatePicker"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "输入类型",
                      en_US: "Type of the input."
                    }
                  }
                ]
              },
              {
                componentName: "TinyInput",
                label: {
                  zh_CN: "输入框",
                  en_US: "Input"
                },
                content: [
                  {
                    property: "type",
                    label: {
                      text: {
                        zh_CN: "类型"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "textarea",
                            value: "textarea"
                          },
                          {
                            label: "text",
                            value: "text"
                          },
                          {
                            label: "password",
                            value: "password"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "设置input框的type属性"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "rows",
                    label: {
                      text: {
                        zh_CN: "行数"
                      }
                    },
                    widget: {
                      component: "NumberConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框行数，只对 type='textarea' 有效"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinySelect",
                label: {
                  zh_CN: "选择器",
                  en_US: "Select"
                },
                content: [
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "searchable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "下拉可搜索"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "下拉面板是否可搜索"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "options",
                    label: {
                      text: {
                        zh_CN: "选项数据"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    bindState: !0,
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        language: "json"
                      }
                    },
                    description: {
                      zh_CN: "配置 Select 下拉数据项"
                    },
                    labelPosition: "top"
                  },
                  {
                    property: "multiple",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "多选"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否允许输入框输入或选择多个项"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyDatePicker",
                label: {
                  zh_CN: "日期选择器",
                  en_US: "DatePicker"
                },
                content: [
                  {
                    property: "type",
                    label: {
                      text: {
                        zh_CN: "类型"
                      }
                    },
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "日期",
                            value: "date"
                          },
                          {
                            label: "日期时间",
                            value: "datetime"
                          },
                          {
                            label: "周",
                            value: "week"
                          },
                          {
                            label: "月份",
                            value: "month"
                          },
                          {
                            label: "年份",
                            value: "year"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "设置日期框的type属性"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "clearable",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "清除按钮"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否显示清除按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "readonly",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "只读"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否只读"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "format",
                    type: "string",
                    defaultValue: "",
                    label: {
                      text: {
                        zh_CN: "格式化"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否只读"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "valueFormat",
                    type: "string",
                    defaultValue: "",
                    label: {
                      text: {
                        zh_CN: "绑定值格式化"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "value-format"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyRadio",
                label: {
                  zh_CN: "单选框",
                  en_US: "Radio"
                },
                content: [
                  {
                    property: "text",
                    label: {
                      text: {
                        zh_CN: "文本内容"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "单选框文本内容"
                    }
                  },
                  {
                    property: "label",
                    label: {
                      text: {
                        zh_CN: "选中值"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "radio 选中时的值"
                    }
                  },
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyCheckbox",
                label: {
                  zh_CN: "多选框",
                  en_US: "Checkbox"
                },
                content: [
                  {
                    property: "disabled",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "checked",
                    type: "boolean",
                    defaultValue: !1,
                    label: {
                      text: {
                        zh_CN: "勾选"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "当前是否勾选"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "text",
                    label: {
                      text: {
                        zh_CN: "文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "复选框的文本"
                    },
                    labelPosition: "left"
                  }
                ]
              },
              {
                componentName: "TinyNumeric",
                label: {
                  zh_CN: "数组输入框",
                  en_US: "Numeric"
                },
                content: [
                  {
                    property: "placeholder",
                    label: {
                      text: {
                        zh_CN: "占位文本"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "输入框占位文本"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "allow-empty",
                    label: {
                      text: {
                        zh_CN: "内容可清空"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否内容可清空"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "disabled",
                    label: {
                      text: {
                        zh_CN: "禁用"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否禁用"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "size",
                    label: {
                      text: {
                        zh_CN: "尺寸"
                      }
                    },
                    required: !0,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "medium",
                            value: "medium"
                          },
                          {
                            label: "small",
                            value: "small"
                          },
                          {
                            label: "mini",
                            value: "mini"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "输入框尺寸。该属性的可选值为 medium / small / mini"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "controls",
                    label: {
                      text: {
                        zh_CN: "加减按钮"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "CheckBoxConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "是否使用加减按钮"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "controls-position",
                    label: {
                      text: {
                        zh_CN: "加减按钮位置"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "SelectConfigurator",
                      props: {
                        options: [
                          {
                            label: "左右两侧",
                            value: ""
                          },
                          {
                            label: "只在右侧",
                            value: "right"
                          }
                        ]
                      }
                    },
                    description: {
                      zh_CN: "加减按钮位置"
                    }
                  },
                  {
                    property: "precision",
                    label: {
                      text: {
                        zh_CN: "精度"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {
                        allowEmpty: !0
                      }
                    },
                    description: {
                      zh_CN: "数值精度"
                    },
                    labelPosition: "left"
                  },
                  {
                    property: "step",
                    label: {
                      text: {
                        zh_CN: "步长"
                      }
                    },
                    required: !1,
                    readOnly: !1,
                    disabled: !1,
                    cols: 12,
                    widget: {
                      component: "NumberConfigurator",
                      props: {
                        allowEmpty: !0
                      }
                    },
                    description: {
                      zh_CN: "步长"
                    },
                    labelPosition: "left"
                  }
                ]
              }
            ],
            labelPosition: "top"
          },
          {
            property: "modelApis",
            label: {
              text: {
                zh_CN: "绑定模型方法"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            bindState: !1,
            cols: 12,
            widget: {
              component: "ModelApiConfigurator",
              props: {}
            },
            labelPosition: "top"
          },
          {
            property: "searchFormData",
            label: {
              text: {
                zh_CN: "搜索表单绑定变量",
                en_US: "Binding Variables For Search Form"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "BindVariableConfigurator"
            },
            description: {
              zh_CN: "为搜索表单绑定变量",
              en_US: "Binding Variables For Search Form."
            }
          },
          {
            property: "tableData",
            label: {
              text: {
                zh_CN: "表格数据绑定变量",
                en_US: "Binding Variables For Table Data"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "BindVariableConfigurator",
              props: {
                defaultValue: [],
                isValueArray: !0
              }
            },
            description: {
              zh_CN: "为表格数据绑定变量",
              en_US: "Binding Variables For Search Form."
            }
          },
          {
            property: "editFormData",
            label: {
              text: {
                zh_CN: "数据表单绑定变量",
                en_US: "Binding Variables For Data Form"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "BindVariableConfigurator"
            },
            description: {
              zh_CN: "为新增数据或编辑数据表单绑定变量",
              en_US: "Binding Variables For Add or Edit Form."
            }
          }
        ]
      },
      {
        label: {
          zh_CN: "基础信息"
        },
        description: {
          zh_CN: "基础信息"
        },
        content: [
          {
            property: "layout",
            label: {
              text: {
                zh_CN: "表单布局",
                en_US: "From Layout"
              }
            },
            required: !0,
            bindState: !1,
            cols: 12,
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: {
                      zh_CN: "一列布局",
                      en_US: "One-column Layout"
                    },
                    value: 1
                  },
                  {
                    label: {
                      zh_CN: "两列布局",
                      en_US: "Two-column Layout"
                    },
                    value: 2
                  },
                  {
                    label: {
                      zh_CN: "三列布局",
                      en_US: "Three-column Layout"
                    },
                    value: 3
                  }
                ]
              }
            },
            description: {
              zh_CN: "设置表单布局",
              en_US: "Set the form layout."
            }
          },
          {
            property: "size",
            label: {
              text: {
                zh_CN: "尺寸"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SelectConfigurator",
              props: {
                options: [
                  {
                    label: "medium",
                    value: "medium"
                  },
                  {
                    label: "small",
                    value: "small"
                  },
                  {
                    label: "mini",
                    value: "mini"
                  }
                ]
              }
            },
            description: {
              zh_CN: "输入框尺寸。该属性的可选值为 medium / small / mini"
            },
            labelPosition: "left"
          }
        ]
      },
      {
        label: {
          zh_CN: "表格信息"
        },
        description: {
          zh_CN: "表格信息"
        },
        content: [
          {
            property: "selectedEnabled",
            resetProps: !0,
            label: {
              text: {
                zh_CN: "启用复选",
                en_US: "enable select data"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "是否允许复选框选中数据",
              en_US: "Whether to allow the check box to select data"
            },
            labelPosition: "left"
          },
          {
            property: "handleSelectedRows",
            label: {
              text: {
                zh_CN: "处理选中数据方法",
                en_US: "Method of Processing Selected Data"
              }
            },
            defaultValue: {
              type: "JSFunction",
              value: `/**\r
 * 获取表格勾选数据方法\r
 * tableSelection - 表格已勾选的数据\r
 */\r
function handleSelectedRows(tableSelection) {\r
  // 处理方法函数体\r
}`
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "CodeConfigurator",
              props: {
                language: "javascript",
                dataType: "JSFunction"
              }
            },
            description: {
              zh_CN: "处理选中数据方法",
              en_US: "Method of Processing Selected Data"
            },
            labelPosition: "left"
          },
          {
            property: "rowOperationEnabled",
            resetProps: !0,
            label: {
              text: {
                zh_CN: "启用行操作",
                en_US: "enable row operation"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "是否使用行操作",
              en_US: "Whether to allow the row operation"
            },
            labelPosition: "left"
          },
          {
            property: "useIconOperation",
            resetProps: !0,
            label: {
              text: {
                zh_CN: "使用图标",
                en_US: "use icon operation"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "SwitchConfigurator",
              props: {}
            },
            description: {
              zh_CN: "行操作是否使用图标",
              en_US: "use Icon Whether to handle the row operation"
            },
            labelPosition: "left"
          },
          {
            type: "configList",
            property: "rowOperations",
            label: {
              text: {
                zh_CN: "行操作",
                en_US: "Row Operation"
              }
            },
            required: !1,
            cols: 12,
            properties: [
              {
                label: {
                  zh_CN: "默认分组",
                  en_US: "Default Group"
                },
                content: [
                  {
                    property: "label",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "文本",
                        en_US: "Text"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "I18nConfigurator",
                      props: {}
                    },
                    description: {
                      zh_CN: "操作名称",
                      en_US: "Operation's name."
                    }
                  },
                  {
                    property: "icon",
                    type: "string",
                    label: {
                      text: {
                        zh_CN: "图标",
                        en_US: "Icon"
                      }
                    },
                    cols: 12,
                    widget: {
                      component: "InputConfigurator",
                      props: {
                        placeholder: "请输入图标类名"
                      }
                    },
                    description: {
                      zh_CN: "图标库地址: https://tinyuidesign.cloudbu.huawei.com/tiny-vue/zh-CN/os-theme/components/icon#list",
                      en_US: "Icon Library Address: https://tinyuidesign.cloudbu.huawei.com/tiny-vue/zh-CN/os-theme/components/icon#list"
                    }
                  },
                  {
                    property: "handler",
                    label: {
                      text: {
                        zh_CN: "点击回调事件",
                        en_US: "Click Callback Event"
                      }
                    },
                    defaultValue: {
                      type: "JSFunction",
                      value: "function handleRow(row, index, extendApis) {}"
                    },
                    cols: 12,
                    widget: {
                      component: "CodeConfigurator",
                      props: {
                        dataType: "JSFunction"
                      }
                    },
                    description: {
                      zh_CN: "操作的回调函数",
                      en_US: "Callback functions for operations."
                    }
                  }
                ]
              }
            ],
            widget: {
              component: "OperatorGroupConfigurator",
              props: {
                type: "object",
                textField: "label",
                language: "json",
                buttonText: "编辑行操作",
                title: "编辑行操作",
                enableVisibleControl: !0,
                disableDelete: !0,
                expand: !0,
                isAbleBatchOperation: !0
              }
            },
            description: {
              zh_CN: "表格自定义行操作",
              en_US: "Custom operations For table's row."
            },
            labelPosition: "top"
          },
          {
            property: "columnMinWidth",
            label: {
              text: {
                zh_CN: "表格列最小宽度",
                en_US: "Minimum Column Width"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "NumberConfigurator",
              props: {}
            },
            description: {
              zh_CN: "表格列最小宽度",
              en_US: "Minimum width of table's column."
            }
          },
          {
            property: "columnWidth",
            label: {
              text: {
                zh_CN: "表格列宽度",
                en_US: "Column Width"
              }
            },
            required: !1,
            readOnly: !1,
            disabled: !1,
            cols: 12,
            widget: {
              component: "NumberConfigurator",
              props: {}
            },
            description: {
              zh_CN: "表格列宽度",
              en_US: "Width of table's column."
            }
          }
        ]
      }
    ],
    events: {
      "onUpdate:modelValue": {
        label: {
          zh_CN: "绑定值改变时触发",
          en_US: "Binding changed Triggered"
        },
        description: {
          zh_CN: "绑定值改变时触发",
          en_US: "Triggered when the value of the binding changes."
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "value",
              type: "array",
              defaultValue: [],
              description: {
                zh_CN: "双向绑定值",
                en_US: "Binding value."
              }
            }
          ],
          returns: {}
        }
      },
      "onUpdate:searchFormData": {
        label: {
          zh_CN: "绑定值改变时触发",
          en_US: "Binding changed Triggered"
        },
        description: {
          zh_CN: "绑定值改变时触发",
          en_US: "Triggered when the value of the binding changes."
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "value",
              type: "object",
              defaultValue: {},
              description: {
                zh_CN: "双向绑定值",
                en_US: "Binding value."
              }
            }
          ],
          returns: {}
        }
      },
      "onUpdate:tableData": {
        label: {
          zh_CN: "绑定值改变时触发",
          en_US: "Binding changed Triggered"
        },
        description: {
          zh_CN: "绑定值改变时触发",
          en_US: "Triggered when the value of the binding changes."
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "value",
              type: "array",
              defaultValue: [],
              description: {
                zh_CN: "双向绑定值",
                en_US: "Binding value."
              }
            }
          ],
          returns: {}
        }
      },
      "onUpdate:editFormData": {
        label: {
          zh_CN: "绑定值改变时触发",
          en_US: "Binding changed Triggered"
        },
        description: {
          zh_CN: "绑定值改变时触发",
          en_US: "Triggered when the value of the binding changes."
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "value",
              type: "object",
              defaultValue: {},
              description: {
                zh_CN: "双向绑定值",
                en_US: "Binding value."
              }
            }
          ],
          returns: {}
        }
      },
      onFilterChange: {
        label: {
          zh_CN: "筛选条件改变时触发改事件"
        },
        description: {
          zh_CN: "配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: "{$table,filters} 包含 table 实例对象和过滤条件的对象"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onSortChange: {
        label: {
          zh_CN: "点击列头，执行数据排序前触发的事件"
        },
        description: {
          zh_CN: "配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: "{$table,filters} 包含 table 实例对象和过滤条件的对象"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onSelectAll: {
        label: {
          zh_CN: "当手动勾选全选时触发的事件"
        },
        description: {
          zh_CN: "只对 type=selection 有效，当手动勾选全选时触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " 包含 table 实例对象"
              }
            },
            {
              name: "checked",
              type: "boolean",
              defaultValue: "",
              description: {
                zh_CN: "勾选状态"
              }
            },
            {
              name: "selction",
              type: "Array",
              defaultValue: "",
              description: {
                zh_CN: "选中的表格数据数组"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onSelectChange: {
        label: {
          zh_CN: "手动勾选并且值发生改变时触发的事件"
        },
        description: {
          zh_CN: "只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " table 实例对象"
              }
            },
            {
              name: "event",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " 原生 Event"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onToggleExpandChange: {
        label: {
          zh_CN: "当行展开或收起时会触发该事件"
        },
        description: {
          zh_CN: "当行展开或收起时会触发该事件"
        },
        type: "event",
        functionInfo: {
          params: [
            {
              name: "table",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: "{$table,row,rowIndex} 包含 table 实例对象和当前行数据的对象"
              }
            },
            {
              name: "event",
              type: "Object",
              defaultValue: "",
              description: {
                zh_CN: " 原生 Event"
              }
            }
          ],
          returns: {}
        },
        defaultValue: "function onClick(e) {}"
      },
      onCurrentChange: {
        label: {
          zh_CN: "行点击时触发"
        },
        description: {
          zh_CN: "行点击时触发"
        },
        type: "event",
        functionInfo: {
          params: [],
          returns: {}
        },
        defaultValue: ""
      }
    }
  },
  configure: {
    loop: !1,
    condition: !0,
    styles: !0,
    isContainer: !1,
    isModal: !1,
    nestingRule: {
      childWhitelist: [],
      parentWhitelist: ""
    }
  }
}, ya = {
  name: {
    zh_CN: "页面模型",
    en_US: "PageModel"
  },
  icon: "page",
  screenshot: "",
  snippetName: "PageModel",
  schema: {
    componentName: "PageModel",
    props: {
      rowOperations: {
        value: [
          {
            label: "编辑",
            icon: "IconEdit",
            builtIn: !0,
            itemVisible: !0
          },
          {
            label: "删除",
            icon: "IconDel",
            builtIn: !0,
            itemVisible: !0
          }
        ]
      }
    }
  }
}, ar = {
  component: _a,
  snippet: ya
}, Ta = {
  components: [
    oa.component,
    aa.component,
    Zt.component,
    er.component,
    tr.component,
    rr.component,
    or.component,
    nr.component,
    ar.component
  ],
  snippets: [
    {
      group: "layout",
      label: {
        zh_CN: "布局与容器"
      },
      children: [Zt.snippet, er.snippet, tr.snippet]
    },
    {
      group: "advanced",
      label: {
        zh_CN: "高级元素"
      },
      children: [rr.snippet]
    },
    {
      group: "model",
      label: {
        zh_CN: "模型组件"
      },
      children: [or.snippet, nr.snippet, ar.snippet]
    }
  ]
};
export {
  za as CanvasCol,
  Sa as CanvasFlexBox,
  Ua as CanvasNavigation,
  wa as CanvasRow,
  xa as CanvasRowColContainer,
  Oa as CanvasSection,
  Ea as FormModel,
  Ra as PageModel,
  Pa as TableModel,
  Ta as meta
};
//# sourceMappingURL=index.mjs.map
