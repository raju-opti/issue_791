(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc(h, b);
    } else
      k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = dh(a, e, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e);
  c = Xh(a, b, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e);
}
function kj(a, b, c, d, e, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h, f2, b);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f2, g, h, k2) {
  a = new bl(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f2, g, h, k2) {
  a = cl(c, d, true, a, e, f2, g, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f2 = L(), g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f2), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p(299));
  var c = false, d = "", e = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const reactLogo = "/assets/react-35ef61ed.svg";
const viteLogo = "/vite.svg";
const App$1 = "";
var lib$2 = {};
var errorHandler = {};
Object.defineProperty(errorHandler, "__esModule", { value: true });
var NoopErrorHandler = (
  /** @class */
  function() {
    function NoopErrorHandler2() {
    }
    NoopErrorHandler2.prototype.handleError = function(exception) {
      return;
    };
    return NoopErrorHandler2;
  }()
);
errorHandler.NoopErrorHandler = NoopErrorHandler;
var globalErrorHandler = new NoopErrorHandler();
function setErrorHandler(handler) {
  globalErrorHandler = handler;
}
errorHandler.setErrorHandler = setErrorHandler;
function getErrorHandler() {
  return globalErrorHandler;
}
errorHandler.getErrorHandler = getErrorHandler;
function resetErrorHandler() {
  globalErrorHandler = new NoopErrorHandler();
}
errorHandler.resetErrorHandler = resetErrorHandler;
var models = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  (function(LogLevel) {
    LogLevel[LogLevel["NOTSET"] = 0] = "NOTSET";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARNING"] = 3] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  })(exports.LogLevel || (exports.LogLevel = {}));
})(models);
var logger$c = {};
var lib$1 = {};
var rngBrowser$1 = { exports: {} };
var getRandomValues$2 = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues$2) {
  var rnds8$2 = new Uint8Array(16);
  rngBrowser$1.exports = function whatwgRNG() {
    getRandomValues$2(rnds8$2);
    return rnds8$2;
  };
} else {
  var rnds$1 = new Array(16);
  rngBrowser$1.exports = function mathRNG() {
    for (var i = 0, r2; i < 16; i++) {
      if ((i & 3) === 0)
        r2 = Math.random() * 4294967296;
      rnds$1[i] = r2 >>> ((i & 3) << 3) & 255;
    }
    return rnds$1;
  };
}
var rngBrowserExports$1 = rngBrowser$1.exports;
var byteToHex$2 = [];
for (var i$2 = 0; i$2 < 256; ++i$2) {
  byteToHex$2[i$2] = (i$2 + 256).toString(16).substr(1);
}
function bytesToUuid$5(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex$2;
  return [
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]]
  ].join("");
}
var bytesToUuid_1$1 = bytesToUuid$5;
var rng$4 = rngBrowserExports$1;
var bytesToUuid$4 = bytesToUuid_1$1;
var _nodeId$1;
var _clockseq$1;
var _lastMSecs$1 = 0;
var _lastNSecs$1 = 0;
function v1$3(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId$1;
  var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq$1;
  if (node == null || clockseq == null) {
    var seedBytes = rng$4();
    if (node == null) {
      node = _nodeId$1 = [
        seedBytes[0] | 1,
        seedBytes[1],
        seedBytes[2],
        seedBytes[3],
        seedBytes[4],
        seedBytes[5]
      ];
    }
    if (clockseq == null) {
      clockseq = _clockseq$1 = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  var msecs = options.msecs !== void 0 ? options.msecs : (/* @__PURE__ */ new Date()).getTime();
  var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs$1 + 1;
  var dt = msecs - _lastMSecs$1 + (nsecs - _lastNSecs$1) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs$1) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs$1 = msecs;
  _lastNSecs$1 = nsecs;
  _clockseq$1 = clockseq;
  msecs += 122192928e5;
  var tl2 = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl2 >>> 24 & 255;
  b[i++] = tl2 >>> 16 & 255;
  b[i++] = tl2 >>> 8 & 255;
  b[i++] = tl2 & 255;
  var tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (var n2 = 0; n2 < 6; ++n2) {
    b[i + n2] = node[n2];
  }
  return buf ? buf : bytesToUuid$4(b);
}
var v1_1$1 = v1$3;
var rng$3 = rngBrowserExports$1;
var bytesToUuid$3 = bytesToUuid_1$1;
function v4$5(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == "string") {
    buf = options === "binary" ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng$3)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    for (var ii2 = 0; ii2 < 16; ++ii2) {
      buf[i + ii2] = rnds[ii2];
    }
  }
  return buf || bytesToUuid$3(rnds);
}
var v4_1$1 = v4$5;
var v1$2 = v1_1$1;
var v4$4 = v4_1$1;
var uuid$2 = v4$4;
uuid$2.v1 = v1$2;
uuid$2.v4 = v4$4;
var uuid_1$1 = uuid$2;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var uuid_12 = uuid_1$1;
  function generateUUID() {
    return uuid_12.v4();
  }
  exports.generateUUID = generateUUID;
  function getTimestamp2() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  exports.getTimestamp = getTimestamp2;
  function isValidEnum2(enumToCheck, value) {
    var found = false;
    var keys = Object.keys(enumToCheck);
    for (var index2 = 0; index2 < keys.length; index2++) {
      if (value === enumToCheck[keys[index2]]) {
        found = true;
        break;
      }
    }
    return found;
  }
  exports.isValidEnum = isValidEnum2;
  function groupBy2(arr, grouperFn) {
    var grouper = {};
    arr.forEach(function(item) {
      var key = grouperFn(item);
      grouper[key] = grouper[key] || [];
      grouper[key].push(item);
    });
    return objectValues2(grouper);
  }
  exports.groupBy = groupBy2;
  function objectValues2(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
  exports.objectValues = objectValues2;
  function objectEntries2(obj) {
    return Object.keys(obj).map(function(key) {
      return [key, obj[key]];
    });
  }
  exports.objectEntries = objectEntries2;
  function find2(arr, cond) {
    var found;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
      var item = arr_1[_i];
      if (cond(item)) {
        found = item;
        break;
      }
    }
    return found;
  }
  exports.find = find2;
  function keyBy2(arr, keyByFn) {
    var map = {};
    arr.forEach(function(item) {
      var key = keyByFn(item);
      map[key] = item;
    });
    return map;
  }
  exports.keyBy = keyBy2;
  function sprintf2(format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var i = 0;
    return format.replace(/%s/g, function() {
      var arg = args[i++];
      var type = typeof arg;
      if (type === "function") {
        return arg();
      } else if (type === "string") {
        return arg;
      } else {
        return String(arg);
      }
    });
  }
  exports.sprintf = sprintf2;
  (function(NOTIFICATION_TYPES2) {
    NOTIFICATION_TYPES2["ACTIVATE"] = "ACTIVATE:experiment, user_id,attributes, variation, event";
    NOTIFICATION_TYPES2["DECISION"] = "DECISION:type, userId, attributes, decisionInfo";
    NOTIFICATION_TYPES2["LOG_EVENT"] = "LOG_EVENT:logEvent";
    NOTIFICATION_TYPES2["OPTIMIZELY_CONFIG_UPDATE"] = "OPTIMIZELY_CONFIG_UPDATE";
    NOTIFICATION_TYPES2["TRACK"] = "TRACK:event_key, user_id, attributes, event_tags, event";
  })(exports.NOTIFICATION_TYPES || (exports.NOTIFICATION_TYPES = {}));
})(lib$1);
var __spreadArrays$1 = commonjsGlobal && commonjsGlobal.__spreadArrays || function() {
  for (var s = 0, i = 0, il2 = arguments.length; i < il2; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il2; i++)
    for (var a = arguments[i], j = 0, jl2 = a.length; j < jl2; j++, k2++)
      r2[k2] = a[j];
  return r2;
};
Object.defineProperty(logger$c, "__esModule", { value: true });
var errorHandler_1 = errorHandler;
var js_sdk_utils_1$3 = lib$1;
var models_1 = models;
var stringToLogLevel = {
  NOTSET: 0,
  DEBUG: 1,
  INFO: 2,
  WARNING: 3,
  ERROR: 4
};
function coerceLogLevel(level) {
  if (typeof level !== "string") {
    return level;
  }
  level = level.toUpperCase();
  if (level === "WARN") {
    level = "WARNING";
  }
  if (!stringToLogLevel[level]) {
    return level;
  }
  return stringToLogLevel[level];
}
var DefaultLogManager = (
  /** @class */
  function() {
    function DefaultLogManager2() {
      this.defaultLoggerFacade = new OptimizelyLogger();
      this.loggers = {};
    }
    DefaultLogManager2.prototype.getLogger = function(name) {
      if (!name) {
        return this.defaultLoggerFacade;
      }
      if (!this.loggers[name]) {
        this.loggers[name] = new OptimizelyLogger({ messagePrefix: name });
      }
      return this.loggers[name];
    };
    return DefaultLogManager2;
  }()
);
var ConsoleLogHandler = (
  /** @class */
  function() {
    function ConsoleLogHandler2(config2) {
      if (config2 === void 0) {
        config2 = {};
      }
      this.logLevel = models_1.LogLevel.NOTSET;
      if (config2.logLevel !== void 0 && js_sdk_utils_1$3.isValidEnum(models_1.LogLevel, config2.logLevel)) {
        this.setLogLevel(config2.logLevel);
      }
      this.logToConsole = config2.logToConsole !== void 0 ? !!config2.logToConsole : true;
      this.prefix = config2.prefix !== void 0 ? config2.prefix : "[OPTIMIZELY]";
    }
    ConsoleLogHandler2.prototype.log = function(level, message) {
      if (!this.shouldLog(level) || !this.logToConsole) {
        return;
      }
      var logMessage = this.prefix + " - " + this.getLogLevelName(level) + " " + this.getTime() + " " + message;
      this.consoleLog(level, [logMessage]);
    };
    ConsoleLogHandler2.prototype.setLogLevel = function(level) {
      level = coerceLogLevel(level);
      if (!js_sdk_utils_1$3.isValidEnum(models_1.LogLevel, level) || level === void 0) {
        this.logLevel = models_1.LogLevel.ERROR;
      } else {
        this.logLevel = level;
      }
    };
    ConsoleLogHandler2.prototype.getTime = function() {
      return (/* @__PURE__ */ new Date()).toISOString();
    };
    ConsoleLogHandler2.prototype.shouldLog = function(targetLogLevel) {
      return targetLogLevel >= this.logLevel;
    };
    ConsoleLogHandler2.prototype.getLogLevelName = function(logLevel) {
      switch (logLevel) {
        case models_1.LogLevel.DEBUG:
          return "DEBUG";
        case models_1.LogLevel.INFO:
          return "INFO ";
        case models_1.LogLevel.WARNING:
          return "WARN ";
        case models_1.LogLevel.ERROR:
          return "ERROR";
        default:
          return "NOTSET";
      }
    };
    ConsoleLogHandler2.prototype.consoleLog = function(logLevel, logArguments) {
      switch (logLevel) {
        case models_1.LogLevel.DEBUG:
          console.log.apply(console, logArguments);
          break;
        case models_1.LogLevel.INFO:
          console.info.apply(console, logArguments);
          break;
        case models_1.LogLevel.WARNING:
          console.warn.apply(console, logArguments);
          break;
        case models_1.LogLevel.ERROR:
          console.error.apply(console, logArguments);
          break;
        default:
          console.log.apply(console, logArguments);
      }
    };
    return ConsoleLogHandler2;
  }()
);
logger$c.ConsoleLogHandler = ConsoleLogHandler;
var globalLogLevel = models_1.LogLevel.NOTSET;
var globalLogHandler = null;
var OptimizelyLogger = (
  /** @class */
  function() {
    function OptimizelyLogger2(opts) {
      if (opts === void 0) {
        opts = {};
      }
      this.messagePrefix = "";
      if (opts.messagePrefix) {
        this.messagePrefix = opts.messagePrefix;
      }
    }
    OptimizelyLogger2.prototype.log = function(level, message) {
      var splat = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        splat[_i - 2] = arguments[_i];
      }
      this.internalLog(coerceLogLevel(level), {
        message,
        splat
      });
    };
    OptimizelyLogger2.prototype.info = function(message) {
      var splat = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        splat[_i - 1] = arguments[_i];
      }
      this.namedLog(models_1.LogLevel.INFO, message, splat);
    };
    OptimizelyLogger2.prototype.debug = function(message) {
      var splat = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        splat[_i - 1] = arguments[_i];
      }
      this.namedLog(models_1.LogLevel.DEBUG, message, splat);
    };
    OptimizelyLogger2.prototype.warn = function(message) {
      var splat = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        splat[_i - 1] = arguments[_i];
      }
      this.namedLog(models_1.LogLevel.WARNING, message, splat);
    };
    OptimizelyLogger2.prototype.error = function(message) {
      var splat = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        splat[_i - 1] = arguments[_i];
      }
      this.namedLog(models_1.LogLevel.ERROR, message, splat);
    };
    OptimizelyLogger2.prototype.format = function(data) {
      return (this.messagePrefix ? this.messagePrefix + ": " : "") + js_sdk_utils_1$3.sprintf.apply(void 0, __spreadArrays$1([data.message], data.splat));
    };
    OptimizelyLogger2.prototype.internalLog = function(level, data) {
      if (!globalLogHandler) {
        return;
      }
      if (level < globalLogLevel) {
        return;
      }
      globalLogHandler.log(level, this.format(data));
      if (data.error && data.error instanceof Error) {
        errorHandler_1.getErrorHandler().handleError(data.error);
      }
    };
    OptimizelyLogger2.prototype.namedLog = function(level, message, splat) {
      var error;
      if (message instanceof Error) {
        error = message;
        message = error.message;
        this.internalLog(level, {
          error,
          message,
          splat
        });
        return;
      }
      if (splat.length === 0) {
        this.internalLog(level, {
          message,
          splat
        });
        return;
      }
      var last = splat[splat.length - 1];
      if (last instanceof Error) {
        error = last;
        splat.splice(-1);
      }
      this.internalLog(level, { message, error, splat });
    };
    return OptimizelyLogger2;
  }()
);
var globalLogManager = new DefaultLogManager();
function getLogger(name) {
  return globalLogManager.getLogger(name);
}
logger$c.getLogger = getLogger;
function setLogHandler(logger2) {
  globalLogHandler = logger2;
}
logger$c.setLogHandler = setLogHandler;
function setLogLevel(level) {
  level = coerceLogLevel(level);
  if (!js_sdk_utils_1$3.isValidEnum(models_1.LogLevel, level) || level === void 0) {
    globalLogLevel = models_1.LogLevel.ERROR;
  } else {
    globalLogLevel = level;
  }
}
logger$c.setLogLevel = setLogLevel;
function getLogLevel() {
  return globalLogLevel;
}
logger$c.getLogLevel = getLogLevel;
function resetLogger() {
  globalLogManager = new DefaultLogManager();
  globalLogLevel = models_1.LogLevel.NOTSET;
}
logger$c.resetLogger = resetLogger;
(function(exports) {
  function __export(m2) {
    for (var p2 in m2)
      if (!exports.hasOwnProperty(p2))
        exports[p2] = m2[p2];
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  __export(errorHandler);
  __export(models);
  __export(logger$c);
})(lib$2);
var lib = {};
var events = {};
Object.defineProperty(events, "__esModule", { value: true });
events.areEventContextsEqual = void 0;
function areEventContextsEqual(eventA, eventB) {
  var contextA = eventA.context;
  var contextB = eventB.context;
  return contextA.accountId === contextB.accountId && contextA.projectId === contextB.projectId && contextA.clientName === contextB.clientName && contextA.clientVersion === contextB.clientVersion && contextA.revision === contextB.revision && contextA.anonymizeIP === contextB.anonymizeIP && contextA.botFiltering === contextB.botFiltering;
}
events.areEventContextsEqual = areEventContextsEqual;
var eventProcessor$1 = {};
var eventQueue = {};
Object.defineProperty(eventQueue, "__esModule", { value: true });
eventQueue.DefaultEventQueue = eventQueue.SingleEventQueue = void 0;
var js_sdk_logging_1$5 = lib$2;
var logger$b = js_sdk_logging_1$5.getLogger("EventProcessor");
var Timer = (
  /** @class */
  function() {
    function Timer2(_a) {
      var timeout = _a.timeout, callback = _a.callback;
      this.timeout = Math.max(timeout, 0);
      this.callback = callback;
    }
    Timer2.prototype.start = function() {
      this.timeoutId = setTimeout(this.callback, this.timeout);
    };
    Timer2.prototype.refresh = function() {
      this.stop();
      this.start();
    };
    Timer2.prototype.stop = function() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    };
    return Timer2;
  }()
);
var SingleEventQueue = (
  /** @class */
  function() {
    function SingleEventQueue2(_a) {
      var sink = _a.sink;
      this.sink = sink;
    }
    SingleEventQueue2.prototype.start = function() {
    };
    SingleEventQueue2.prototype.stop = function() {
      return Promise.resolve();
    };
    SingleEventQueue2.prototype.enqueue = function(event) {
      this.sink([event]);
    };
    return SingleEventQueue2;
  }()
);
eventQueue.SingleEventQueue = SingleEventQueue;
var DefaultEventQueue = (
  /** @class */
  function() {
    function DefaultEventQueue2(_a) {
      var flushInterval = _a.flushInterval, maxQueueSize = _a.maxQueueSize, sink = _a.sink, batchComparator = _a.batchComparator;
      this.buffer = [];
      this.maxQueueSize = Math.max(maxQueueSize, 1);
      this.sink = sink;
      this.batchComparator = batchComparator;
      this.timer = new Timer({
        callback: this.flush.bind(this),
        timeout: flushInterval
      });
      this.started = false;
    }
    DefaultEventQueue2.prototype.start = function() {
      this.started = true;
    };
    DefaultEventQueue2.prototype.stop = function() {
      this.started = false;
      var result = this.sink(this.buffer);
      this.buffer = [];
      this.timer.stop();
      return result;
    };
    DefaultEventQueue2.prototype.enqueue = function(event) {
      if (!this.started) {
        logger$b.warn("Queue is stopped, not accepting event");
        return;
      }
      var bufferedEvent = this.buffer[0];
      if (bufferedEvent && !this.batchComparator(bufferedEvent, event)) {
        this.flush();
      }
      if (this.buffer.length === 0) {
        this.timer.refresh();
      }
      this.buffer.push(event);
      if (this.buffer.length >= this.maxQueueSize) {
        this.flush();
      }
    };
    DefaultEventQueue2.prototype.flush = function() {
      this.sink(this.buffer);
      this.buffer = [];
      this.timer.stop();
    };
    return DefaultEventQueue2;
  }()
);
eventQueue.DefaultEventQueue = DefaultEventQueue;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.sendEventNotification = exports.getQueue = exports.validateAndGetBatchSize = exports.validateAndGetFlushInterval = exports.DEFAULT_BATCH_SIZE = exports.DEFAULT_FLUSH_INTERVAL = void 0;
  var eventQueue_1 = eventQueue;
  var js_sdk_logging_12 = lib$2;
  var js_sdk_utils_12 = lib$1;
  exports.DEFAULT_FLUSH_INTERVAL = 3e4;
  exports.DEFAULT_BATCH_SIZE = 10;
  var logger2 = js_sdk_logging_12.getLogger("EventProcessor");
  function validateAndGetFlushInterval(flushInterval) {
    if (flushInterval <= 0) {
      logger2.warn("Invalid flushInterval " + flushInterval + ", defaulting to " + exports.DEFAULT_FLUSH_INTERVAL);
      flushInterval = exports.DEFAULT_FLUSH_INTERVAL;
    }
    return flushInterval;
  }
  exports.validateAndGetFlushInterval = validateAndGetFlushInterval;
  function validateAndGetBatchSize(batchSize) {
    batchSize = Math.floor(batchSize);
    if (batchSize < 1) {
      logger2.warn("Invalid batchSize " + batchSize + ", defaulting to " + exports.DEFAULT_BATCH_SIZE);
      batchSize = exports.DEFAULT_BATCH_SIZE;
    }
    batchSize = Math.max(1, batchSize);
    return batchSize;
  }
  exports.validateAndGetBatchSize = validateAndGetBatchSize;
  function getQueue(batchSize, flushInterval, sink, batchComparator) {
    var queue;
    if (batchSize > 1) {
      queue = new eventQueue_1.DefaultEventQueue({
        flushInterval,
        maxQueueSize: batchSize,
        sink,
        batchComparator
      });
    } else {
      queue = new eventQueue_1.SingleEventQueue({ sink });
    }
    return queue;
  }
  exports.getQueue = getQueue;
  function sendEventNotification(notificationCenter, event) {
    if (notificationCenter) {
      notificationCenter.sendNotifications(js_sdk_utils_12.NOTIFICATION_TYPES.LOG_EVENT, event);
    }
  }
  exports.sendEventNotification = sendEventNotification;
})(eventProcessor$1);
var eventDispatcher = {};
Object.defineProperty(eventDispatcher, "__esModule", { value: true });
var managed = {};
Object.defineProperty(managed, "__esModule", { value: true });
var pendingEventsDispatcher = {};
var pendingEventsStore = {};
Object.defineProperty(pendingEventsStore, "__esModule", { value: true });
pendingEventsStore.LocalStorageStore = void 0;
var js_sdk_utils_1$2 = lib$1;
var js_sdk_logging_1$4 = lib$2;
var logger$a = js_sdk_logging_1$4.getLogger("EventProcessor");
var LocalStorageStore = (
  /** @class */
  function() {
    function LocalStorageStore2(_a) {
      var key = _a.key, _b = _a.maxValues, maxValues = _b === void 0 ? 1e3 : _b;
      this.LS_KEY = key;
      this.maxValues = maxValues;
    }
    LocalStorageStore2.prototype.get = function(key) {
      return this.getMap()[key] || null;
    };
    LocalStorageStore2.prototype.set = function(key, value) {
      var map = this.getMap();
      map[key] = value;
      this.replace(map);
    };
    LocalStorageStore2.prototype.remove = function(key) {
      var map = this.getMap();
      delete map[key];
      this.replace(map);
    };
    LocalStorageStore2.prototype.values = function() {
      return js_sdk_utils_1$2.objectValues(this.getMap());
    };
    LocalStorageStore2.prototype.clear = function() {
      this.replace({});
    };
    LocalStorageStore2.prototype.replace = function(map) {
      try {
        window.localStorage && localStorage.setItem(this.LS_KEY, JSON.stringify(map));
        this.clean();
      } catch (e) {
        logger$a.error(e);
      }
    };
    LocalStorageStore2.prototype.clean = function() {
      var map = this.getMap();
      var keys = Object.keys(map);
      var toRemove = keys.length - this.maxValues;
      if (toRemove < 1) {
        return;
      }
      var entries = keys.map(function(key) {
        return {
          key,
          value: map[key]
        };
      });
      entries.sort(function(a, b) {
        return a.value.timestamp - b.value.timestamp;
      });
      for (var i = 0; i < toRemove; i++) {
        delete map[entries[i].key];
      }
      this.replace(map);
    };
    LocalStorageStore2.prototype.getMap = function() {
      try {
        var data = window.localStorage && localStorage.getItem(this.LS_KEY);
        if (data) {
          return JSON.parse(data) || {};
        }
      } catch (e) {
        logger$a.error(e);
      }
      return {};
    };
    return LocalStorageStore2;
  }()
);
pendingEventsStore.LocalStorageStore = LocalStorageStore;
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(pendingEventsDispatcher, "__esModule", { value: true });
pendingEventsDispatcher.LocalStoragePendingEventsDispatcher = pendingEventsDispatcher.PendingEventsDispatcher = void 0;
var js_sdk_logging_1$3 = lib$2;
var pendingEventsStore_1 = pendingEventsStore;
var js_sdk_utils_1$1 = lib$1;
var logger$9 = js_sdk_logging_1$3.getLogger("EventProcessor");
var PendingEventsDispatcher = (
  /** @class */
  function() {
    function PendingEventsDispatcher2(_a) {
      var eventDispatcher2 = _a.eventDispatcher, store = _a.store;
      this.dispatcher = eventDispatcher2;
      this.store = store;
    }
    PendingEventsDispatcher2.prototype.dispatchEvent = function(request, callback) {
      this.send({
        uuid: js_sdk_utils_1$1.generateUUID(),
        timestamp: js_sdk_utils_1$1.getTimestamp(),
        request
      }, callback);
    };
    PendingEventsDispatcher2.prototype.sendPendingEvents = function() {
      var _this = this;
      var pendingEvents = this.store.values();
      logger$9.debug("Sending %s pending events from previous page", pendingEvents.length);
      pendingEvents.forEach(function(item) {
        try {
          _this.send(item, function() {
          });
        } catch (e) {
        }
      });
    };
    PendingEventsDispatcher2.prototype.send = function(entry, callback) {
      var _this = this;
      this.store.set(entry.uuid, entry);
      this.dispatcher.dispatchEvent(entry.request, function(response) {
        _this.store.remove(entry.uuid);
        callback(response);
      });
    };
    return PendingEventsDispatcher2;
  }()
);
pendingEventsDispatcher.PendingEventsDispatcher = PendingEventsDispatcher;
var LocalStoragePendingEventsDispatcher = (
  /** @class */
  function(_super) {
    __extends$1(LocalStoragePendingEventsDispatcher2, _super);
    function LocalStoragePendingEventsDispatcher2(_a) {
      var eventDispatcher2 = _a.eventDispatcher;
      return _super.call(this, {
        eventDispatcher: eventDispatcher2,
        store: new pendingEventsStore_1.LocalStorageStore({
          // TODO make this configurable
          maxValues: 100,
          key: "fs_optly_pending_events"
        })
      }) || this;
    }
    return LocalStoragePendingEventsDispatcher2;
  }(PendingEventsDispatcher)
);
pendingEventsDispatcher.LocalStoragePendingEventsDispatcher = LocalStoragePendingEventsDispatcher;
var buildEventV1 = {};
var __assign$2 = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
Object.defineProperty(buildEventV1, "__esModule", { value: true });
buildEventV1.formatEvents = buildEventV1.buildConversionEventV1 = buildEventV1.buildImpressionEventV1 = buildEventV1.makeBatchedEventV1 = void 0;
var ACTIVATE_EVENT_KEY$1 = "campaign_activated";
var CUSTOM_ATTRIBUTE_FEATURE_TYPE$1 = "custom";
var BOT_FILTERING_KEY = "$opt_bot_filtering";
function makeBatchedEventV1(events2) {
  var visitors = [];
  var data = events2[0];
  events2.forEach(function(event) {
    if (event.type === "conversion" || event.type === "impression") {
      var visitor = makeVisitor(event);
      if (event.type === "impression") {
        visitor.snapshots.push(makeDecisionSnapshot(event));
      } else if (event.type === "conversion") {
        visitor.snapshots.push(makeConversionSnapshot(event));
      }
      visitors.push(visitor);
    }
  });
  return {
    client_name: data.context.clientName,
    client_version: data.context.clientVersion,
    account_id: data.context.accountId,
    project_id: data.context.projectId,
    revision: data.context.revision,
    anonymize_ip: data.context.anonymizeIP,
    enrich_decisions: true,
    visitors
  };
}
buildEventV1.makeBatchedEventV1 = makeBatchedEventV1;
function makeConversionSnapshot(conversion) {
  var tags = __assign$2({}, conversion.tags);
  delete tags["revenue"];
  delete tags["value"];
  var event = {
    entity_id: conversion.event.id,
    key: conversion.event.key,
    timestamp: conversion.timestamp,
    uuid: conversion.uuid
  };
  if (conversion.tags) {
    event.tags = conversion.tags;
  }
  if (conversion.value != null) {
    event.value = conversion.value;
  }
  if (conversion.revenue != null) {
    event.revenue = conversion.revenue;
  }
  return {
    events: [event]
  };
}
function makeDecisionSnapshot(event) {
  var _a, _b;
  var layer = event.layer, experiment = event.experiment, variation = event.variation, ruleKey = event.ruleKey, flagKey = event.flagKey, ruleType = event.ruleType, enabled = event.enabled;
  var layerId = layer ? layer.id : null;
  var experimentId = (_a = experiment === null || experiment === void 0 ? void 0 : experiment.id) !== null && _a !== void 0 ? _a : "";
  var variationId = (_b = variation === null || variation === void 0 ? void 0 : variation.id) !== null && _b !== void 0 ? _b : "";
  var variationKey = variation ? variation.key : "";
  return {
    decisions: [
      {
        campaign_id: layerId,
        experiment_id: experimentId,
        variation_id: variationId,
        metadata: {
          flag_key: flagKey,
          rule_key: ruleKey,
          rule_type: ruleType,
          variation_key: variationKey,
          enabled
        }
      }
    ],
    events: [
      {
        entity_id: layerId,
        timestamp: event.timestamp,
        key: ACTIVATE_EVENT_KEY$1,
        uuid: event.uuid
      }
    ]
  };
}
function makeVisitor(data) {
  var visitor = {
    snapshots: [],
    visitor_id: data.user.id,
    attributes: []
  };
  data.user.attributes.forEach(function(attr) {
    visitor.attributes.push({
      entity_id: attr.entityId,
      key: attr.key,
      type: "custom",
      value: attr.value
    });
  });
  if (typeof data.context.botFiltering === "boolean") {
    visitor.attributes.push({
      entity_id: BOT_FILTERING_KEY,
      key: BOT_FILTERING_KEY,
      type: CUSTOM_ATTRIBUTE_FEATURE_TYPE$1,
      value: data.context.botFiltering
    });
  }
  return visitor;
}
function buildImpressionEventV1(data) {
  var visitor = makeVisitor(data);
  visitor.snapshots.push(makeDecisionSnapshot(data));
  return {
    client_name: data.context.clientName,
    client_version: data.context.clientVersion,
    account_id: data.context.accountId,
    project_id: data.context.projectId,
    revision: data.context.revision,
    anonymize_ip: data.context.anonymizeIP,
    enrich_decisions: true,
    visitors: [visitor]
  };
}
buildEventV1.buildImpressionEventV1 = buildImpressionEventV1;
function buildConversionEventV1(data) {
  var visitor = makeVisitor(data);
  visitor.snapshots.push(makeConversionSnapshot(data));
  return {
    client_name: data.context.clientName,
    client_version: data.context.clientVersion,
    account_id: data.context.accountId,
    project_id: data.context.projectId,
    revision: data.context.revision,
    anonymize_ip: data.context.anonymizeIP,
    enrich_decisions: true,
    visitors: [visitor]
  };
}
buildEventV1.buildConversionEventV1 = buildConversionEventV1;
function formatEvents(events2) {
  return {
    url: "https://logx.optimizely.com/v1/events",
    httpVerb: "POST",
    params: makeBatchedEventV1(events2)
  };
}
buildEventV1.formatEvents = formatEvents;
var v1EventProcessor = {};
var requestTracker = {};
Object.defineProperty(requestTracker, "__esModule", { value: true });
var RequestTracker = (
  /** @class */
  function() {
    function RequestTracker2() {
      this.reqsInFlightCount = 0;
      this.reqsCompleteResolvers = [];
    }
    RequestTracker2.prototype.trackRequest = function(reqPromise) {
      var _this = this;
      this.reqsInFlightCount++;
      var onReqComplete = function() {
        _this.reqsInFlightCount--;
        if (_this.reqsInFlightCount === 0) {
          _this.reqsCompleteResolvers.forEach(function(resolver) {
            return resolver();
          });
          _this.reqsCompleteResolvers = [];
        }
      };
      reqPromise.then(onReqComplete, onReqComplete);
    };
    RequestTracker2.prototype.onRequestsComplete = function() {
      var _this = this;
      return new Promise(function(resolve) {
        if (_this.reqsInFlightCount === 0) {
          resolve();
        } else {
          _this.reqsCompleteResolvers.push(resolve);
        }
      });
    };
    return RequestTracker2;
  }()
);
requestTracker.default = RequestTracker;
var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = commonjsGlobal && commonjsGlobal.__generator || function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(v1EventProcessor, "__esModule", { value: true });
v1EventProcessor.LogTierV1EventProcessor = void 0;
var js_sdk_logging_1$2 = lib$2;
var eventProcessor_1 = eventProcessor$1;
var requestTracker_1 = __importDefault$2(requestTracker);
var events_1 = events;
var buildEventV1_1 = buildEventV1;
var logger$8 = js_sdk_logging_1$2.getLogger("LogTierV1EventProcessor");
var LogTierV1EventProcessor = (
  /** @class */
  function() {
    function LogTierV1EventProcessor2(_a) {
      var dispatcher = _a.dispatcher, _b = _a.flushInterval, flushInterval = _b === void 0 ? eventProcessor_1.DEFAULT_FLUSH_INTERVAL : _b, _c = _a.batchSize, batchSize = _c === void 0 ? eventProcessor_1.DEFAULT_BATCH_SIZE : _c, notificationCenter = _a.notificationCenter;
      this.dispatcher = dispatcher;
      this.notificationCenter = notificationCenter;
      this.requestTracker = new requestTracker_1.default();
      flushInterval = eventProcessor_1.validateAndGetFlushInterval(flushInterval);
      batchSize = eventProcessor_1.validateAndGetBatchSize(batchSize);
      this.queue = eventProcessor_1.getQueue(batchSize, flushInterval, this.drainQueue.bind(this), events_1.areEventContextsEqual);
    }
    LogTierV1EventProcessor2.prototype.drainQueue = function(buffer) {
      var _this = this;
      var reqPromise = new Promise(function(resolve) {
        logger$8.debug("draining queue with %s events", buffer.length);
        if (buffer.length === 0) {
          resolve();
          return;
        }
        var formattedEvent = buildEventV1_1.formatEvents(buffer);
        _this.dispatcher.dispatchEvent(formattedEvent, function() {
          resolve();
        });
        eventProcessor_1.sendEventNotification(_this.notificationCenter, formattedEvent);
      });
      this.requestTracker.trackRequest(reqPromise);
      return reqPromise;
    };
    LogTierV1EventProcessor2.prototype.process = function(event) {
      this.queue.enqueue(event);
    };
    LogTierV1EventProcessor2.prototype.stop = function() {
      try {
        this.queue.stop();
        return this.requestTracker.onRequestsComplete();
      } catch (e) {
        logger$8.error('Error stopping EventProcessor: "%s"', e.message, e);
      }
      return Promise.resolve();
    };
    LogTierV1EventProcessor2.prototype.start = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          this.queue.start();
          return [
            2
            /*return*/
          ];
        });
      });
    };
    return LogTierV1EventProcessor2;
  }()
);
v1EventProcessor.LogTierV1EventProcessor = LogTierV1EventProcessor;
(function(exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    Object.defineProperty(o, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o, m2, k2, k22) {
    if (k22 === void 0)
      k22 = k2;
    o[k22] = m2[k2];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m2, exports2) {
    for (var p2 in m2)
      if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
        __createBinding(exports2, m2, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(events, exports);
  __exportStar(eventProcessor$1, exports);
  __exportStar(eventDispatcher, exports);
  __exportStar(managed, exports);
  __exportStar(pendingEventsDispatcher, exports);
  __exportStar(buildEventV1, exports);
  __exportStar(v1EventProcessor, exports);
})(lib);
var rngBrowser = { exports: {} };
var getRandomValues$1 = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues$1) {
  var rnds8$1 = new Uint8Array(16);
  rngBrowser.exports = function whatwgRNG() {
    getRandomValues$1(rnds8$1);
    return rnds8$1;
  };
} else {
  var rnds = new Array(16);
  rngBrowser.exports = function mathRNG() {
    for (var i = 0, r2; i < 16; i++) {
      if ((i & 3) === 0)
        r2 = Math.random() * 4294967296;
      rnds[i] = r2 >>> ((i & 3) << 3) & 255;
    }
    return rnds;
  };
}
var rngBrowserExports = rngBrowser.exports;
var byteToHex$1 = [];
for (var i$1 = 0; i$1 < 256; ++i$1) {
  byteToHex$1[i$1] = (i$1 + 256).toString(16).substr(1);
}
function bytesToUuid$2(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex$1;
  return [
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    "-",
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]],
    bth[buf[i++]]
  ].join("");
}
var bytesToUuid_1 = bytesToUuid$2;
var rng$2 = rngBrowserExports;
var bytesToUuid$1 = bytesToUuid_1;
var _nodeId;
var _clockseq;
var _lastMSecs = 0;
var _lastNSecs = 0;
function v1$1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    var seedBytes = rng$2();
    if (node == null) {
      node = _nodeId = [
        seedBytes[0] | 1,
        seedBytes[1],
        seedBytes[2],
        seedBytes[3],
        seedBytes[4],
        seedBytes[5]
      ];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  var msecs = options.msecs !== void 0 ? options.msecs : (/* @__PURE__ */ new Date()).getTime();
  var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  var tl2 = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl2 >>> 24 & 255;
  b[i++] = tl2 >>> 16 & 255;
  b[i++] = tl2 >>> 8 & 255;
  b[i++] = tl2 & 255;
  var tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (var n2 = 0; n2 < 6; ++n2) {
    b[i + n2] = node[n2];
  }
  return buf ? buf : bytesToUuid$1(b);
}
var v1_1 = v1$1;
var rng$1 = rngBrowserExports;
var bytesToUuid = bytesToUuid_1;
function v4$3(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == "string") {
    buf = options === "binary" ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng$1)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    for (var ii2 = 0; ii2 < 16; ++ii2) {
      buf[i + ii2] = rnds[ii2];
    }
  }
  return buf || bytesToUuid(rnds);
}
var v4_1 = v4$3;
var v1 = v1_1;
var v4$1 = v4_1;
var uuid$1 = v4$1;
uuid$1.v1 = v1;
uuid$1.v4 = v4$1;
var uuid_1 = uuid$1;
const v4$2 = /* @__PURE__ */ getDefaultExportFromCjs(uuid_1);
var murmurhash$1 = { exports: {} };
(function(module) {
  (function() {
    function MurmurHashV2(str, seed) {
      var l2 = str.length, h = seed ^ l2, i = 0, k2;
      while (l2 >= 4) {
        k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k2 = (k2 & 65535) * 1540483477 + (((k2 >>> 16) * 1540483477 & 65535) << 16);
        k2 ^= k2 >>> 24;
        k2 = (k2 & 65535) * 1540483477 + (((k2 >>> 16) * 1540483477 & 65535) << 16);
        h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k2;
        l2 -= 4;
        ++i;
      }
      switch (l2) {
        case 3:
          h ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h ^= str.charCodeAt(i) & 255;
          h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
      }
      h ^= h >>> 13;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
      h ^= h >>> 15;
      return h >>> 0;
    }
    function MurmurHashV3(key, seed) {
      var remainder, bytes, h1, h1b, c1, c2, k1, i;
      remainder = key.length & 3;
      bytes = key.length - remainder;
      h1 = seed;
      c1 = 3432918353;
      c2 = 461845907;
      i = 0;
      while (i < bytes) {
        k1 = key.charCodeAt(i) & 255 | (key.charCodeAt(++i) & 255) << 8 | (key.charCodeAt(++i) & 255) << 16 | (key.charCodeAt(++i) & 255) << 24;
        ++i;
        k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
        h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
      }
      k1 = 0;
      switch (remainder) {
        case 3:
          k1 ^= (key.charCodeAt(i + 2) & 255) << 16;
        case 2:
          k1 ^= (key.charCodeAt(i + 1) & 255) << 8;
        case 1:
          k1 ^= key.charCodeAt(i) & 255;
          k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
          k1 = k1 << 15 | k1 >>> 17;
          k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
          h1 ^= k1;
      }
      h1 ^= key.length;
      h1 ^= h1 >>> 16;
      h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
      h1 ^= h1 >>> 13;
      h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
      h1 ^= h1 >>> 16;
      return h1 >>> 0;
    }
    var murmur = MurmurHashV3;
    murmur.v2 = MurmurHashV2;
    murmur.v3 = MurmurHashV3;
    {
      module.exports = murmur;
    }
  })();
})(murmurhash$1);
var murmurhashExports = murmurhash$1.exports;
const murmurhash = /* @__PURE__ */ getDefaultExportFromCjs(murmurhashExports);
var index_browser$1 = {};
var browserDatafileManager = {};
var browserRequest = {};
var config = {};
Object.defineProperty(config, "__esModule", { value: true });
config.DEFAULT_UPDATE_INTERVAL = 5 * 60 * 1e3;
config.MIN_UPDATE_INTERVAL = 1e3;
config.DEFAULT_URL_TEMPLATE = "https://cdn.optimizely.com/datafiles/%s.json";
config.DEFAULT_AUTHENTICATED_URL_TEMPLATE = "https://config.optimizely.com/datafiles/auth/%s.json";
config.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT = [0, 8, 16, 32, 64, 128, 256, 512];
config.REQUEST_TIMEOUT_MS = 60 * 1e3;
Object.defineProperty(browserRequest, "__esModule", { value: true });
var config_1$2 = config;
var js_sdk_logging_1$1 = lib$2;
var logger$7 = js_sdk_logging_1$1.getLogger("DatafileManager");
var GET_METHOD$1 = "GET";
var READY_STATE_DONE = 4;
function parseHeadersFromXhr(req) {
  var allHeadersString = req.getAllResponseHeaders();
  if (allHeadersString === null) {
    return {};
  }
  var headerLines = allHeadersString.split("\r\n");
  var headers = {};
  headerLines.forEach(function(headerLine) {
    var separatorIndex = headerLine.indexOf(": ");
    if (separatorIndex > -1) {
      var headerName = headerLine.slice(0, separatorIndex);
      var headerValue = headerLine.slice(separatorIndex + 2);
      if (headerValue.length > 0) {
        headers[headerName] = headerValue;
      }
    }
  });
  return headers;
}
function setHeadersInXhr(headers, req) {
  Object.keys(headers).forEach(function(headerName) {
    var header = headers[headerName];
    req.setRequestHeader(headerName, header);
  });
}
function makeGetRequest(reqUrl, headers) {
  var req = new XMLHttpRequest();
  var responsePromise = new Promise(function(resolve, reject) {
    req.open(GET_METHOD$1, reqUrl, true);
    setHeadersInXhr(headers, req);
    req.onreadystatechange = function() {
      if (req.readyState === READY_STATE_DONE) {
        var statusCode = req.status;
        if (statusCode === 0) {
          reject(new Error("Request error"));
          return;
        }
        var headers_1 = parseHeadersFromXhr(req);
        var resp = {
          statusCode: req.status,
          body: req.responseText,
          headers: headers_1
        };
        resolve(resp);
      }
    };
    req.timeout = config_1$2.REQUEST_TIMEOUT_MS;
    req.ontimeout = function() {
      logger$7.error("Request timed out");
    };
    req.send();
  });
  return {
    responsePromise,
    abort: function() {
      req.abort();
    }
  };
}
browserRequest.makeGetRequest = makeGetRequest;
var httpPollingDatafileManager = {};
var eventEmitter = {};
Object.defineProperty(eventEmitter, "__esModule", { value: true });
var EventEmitter = (
  /** @class */
  function() {
    function EventEmitter2() {
      this.listeners = {};
      this.listenerId = 1;
    }
    EventEmitter2.prototype.on = function(eventName, listener) {
      var _this = this;
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = {};
      }
      var currentListenerId = String(this.listenerId);
      this.listenerId++;
      this.listeners[eventName][currentListenerId] = listener;
      return function() {
        if (_this.listeners[eventName]) {
          delete _this.listeners[eventName][currentListenerId];
        }
      };
    };
    EventEmitter2.prototype.emit = function(eventName, arg) {
      var listeners = this.listeners[eventName];
      if (listeners) {
        Object.keys(listeners).forEach(function(listenerId) {
          var listener = listeners[listenerId];
          listener(arg);
        });
      }
    };
    EventEmitter2.prototype.removeAllListeners = function() {
      this.listeners = {};
    };
    return EventEmitter2;
  }()
);
eventEmitter.default = EventEmitter;
var backoffController = {};
Object.defineProperty(backoffController, "__esModule", { value: true });
var config_1$1 = config;
function randomMilliseconds() {
  return Math.round(Math.random() * 1e3);
}
var BackoffController = (
  /** @class */
  function() {
    function BackoffController2() {
      this.errorCount = 0;
    }
    BackoffController2.prototype.getDelay = function() {
      if (this.errorCount === 0) {
        return 0;
      }
      var baseWaitSeconds = config_1$1.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT[Math.min(config_1$1.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1, this.errorCount)];
      return baseWaitSeconds * 1e3 + randomMilliseconds();
    };
    BackoffController2.prototype.countError = function() {
      if (this.errorCount < config_1$1.BACKOFF_BASE_WAIT_SECONDS_BY_ERROR_COUNT.length - 1) {
        this.errorCount++;
      }
    };
    BackoffController2.prototype.reset = function() {
      this.errorCount = 0;
    };
    return BackoffController2;
  }()
);
backoffController.default = BackoffController;
var __assign$1 = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(httpPollingDatafileManager, "__esModule", { value: true });
var js_sdk_logging_1 = lib$2;
var js_sdk_utils_1 = lib$1;
var eventEmitter_1 = __importDefault$1(eventEmitter);
var config_1 = config;
var backoffController_1 = __importDefault$1(backoffController);
var logger$6 = js_sdk_logging_1.getLogger("DatafileManager");
var UPDATE_EVT = "update";
function isValidUpdateInterval(updateInterval) {
  return updateInterval >= config_1.MIN_UPDATE_INTERVAL;
}
function isSuccessStatusCode(statusCode) {
  return statusCode >= 200 && statusCode < 400;
}
var noOpKeyValueCache = {
  get: function() {
    return Promise.resolve("");
  },
  set: function() {
    return Promise.resolve();
  },
  contains: function() {
    return Promise.resolve(false);
  },
  remove: function() {
    return Promise.resolve();
  }
};
var HttpPollingDatafileManager$1 = (
  /** @class */
  function() {
    function HttpPollingDatafileManager2(config2) {
      var _this = this;
      var configWithDefaultsApplied = __assign$1(__assign$1({}, this.getConfigDefaults()), config2);
      var datafile = configWithDefaultsApplied.datafile, _a = configWithDefaultsApplied.autoUpdate, autoUpdate = _a === void 0 ? false : _a, sdkKey = configWithDefaultsApplied.sdkKey, _b = configWithDefaultsApplied.updateInterval, updateInterval = _b === void 0 ? config_1.DEFAULT_UPDATE_INTERVAL : _b, _c = configWithDefaultsApplied.urlTemplate, urlTemplate = _c === void 0 ? config_1.DEFAULT_URL_TEMPLATE : _c, _d = configWithDefaultsApplied.cache, cache = _d === void 0 ? noOpKeyValueCache : _d;
      this.cache = cache;
      this.cacheKey = "opt-datafile-" + sdkKey;
      this.isReadyPromiseSettled = false;
      this.readyPromiseResolver = function() {
      };
      this.readyPromiseRejecter = function() {
      };
      this.readyPromise = new Promise(function(resolve, reject) {
        _this.readyPromiseResolver = resolve;
        _this.readyPromiseRejecter = reject;
      });
      if (datafile) {
        this.currentDatafile = datafile;
        if (!sdkKey) {
          this.resolveReadyPromise();
        }
      } else {
        this.currentDatafile = "";
      }
      this.isStarted = false;
      this.datafileUrl = js_sdk_utils_1.sprintf(urlTemplate, sdkKey);
      this.emitter = new eventEmitter_1.default();
      this.autoUpdate = autoUpdate;
      if (isValidUpdateInterval(updateInterval)) {
        this.updateInterval = updateInterval;
      } else {
        logger$6.warn("Invalid updateInterval %s, defaulting to %s", updateInterval, config_1.DEFAULT_UPDATE_INTERVAL);
        this.updateInterval = config_1.DEFAULT_UPDATE_INTERVAL;
      }
      this.currentTimeout = null;
      this.currentRequest = null;
      this.backoffController = new backoffController_1.default();
      this.syncOnCurrentRequestComplete = false;
    }
    HttpPollingDatafileManager2.prototype.get = function() {
      return this.currentDatafile;
    };
    HttpPollingDatafileManager2.prototype.start = function() {
      if (!this.isStarted) {
        logger$6.debug("Datafile manager started");
        this.isStarted = true;
        this.backoffController.reset();
        this.setDatafileFromCacheIfAvailable();
        this.syncDatafile();
      }
    };
    HttpPollingDatafileManager2.prototype.stop = function() {
      logger$6.debug("Datafile manager stopped");
      this.isStarted = false;
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = null;
      }
      this.emitter.removeAllListeners();
      if (this.currentRequest) {
        this.currentRequest.abort();
        this.currentRequest = null;
      }
      return Promise.resolve();
    };
    HttpPollingDatafileManager2.prototype.onReady = function() {
      return this.readyPromise;
    };
    HttpPollingDatafileManager2.prototype.on = function(eventName, listener) {
      return this.emitter.on(eventName, listener);
    };
    HttpPollingDatafileManager2.prototype.onRequestRejected = function(err) {
      if (!this.isStarted) {
        return;
      }
      this.backoffController.countError();
      if (err instanceof Error) {
        logger$6.error("Error fetching datafile: %s", err.message, err);
      } else if (typeof err === "string") {
        logger$6.error("Error fetching datafile: %s", err);
      } else {
        logger$6.error("Error fetching datafile");
      }
    };
    HttpPollingDatafileManager2.prototype.onRequestResolved = function(response) {
      if (!this.isStarted) {
        return;
      }
      if (typeof response.statusCode !== "undefined" && isSuccessStatusCode(response.statusCode)) {
        this.backoffController.reset();
      } else {
        this.backoffController.countError();
      }
      this.trySavingLastModified(response.headers);
      var datafile = this.getNextDatafileFromResponse(response);
      if (datafile !== "") {
        logger$6.info("Updating datafile from response");
        this.currentDatafile = datafile;
        this.cache.set(this.cacheKey, datafile);
        if (!this.isReadyPromiseSettled) {
          this.resolveReadyPromise();
        } else {
          var datafileUpdate = {
            datafile
          };
          this.emitter.emit(UPDATE_EVT, datafileUpdate);
        }
      }
    };
    HttpPollingDatafileManager2.prototype.onRequestComplete = function() {
      if (!this.isStarted) {
        return;
      }
      this.currentRequest = null;
      if (!this.isReadyPromiseSettled && !this.autoUpdate) {
        this.rejectReadyPromise(new Error("Failed to become ready"));
      }
      if (this.autoUpdate && this.syncOnCurrentRequestComplete) {
        this.syncDatafile();
      }
      this.syncOnCurrentRequestComplete = false;
    };
    HttpPollingDatafileManager2.prototype.syncDatafile = function() {
      var _this = this;
      var headers = {};
      if (this.lastResponseLastModified) {
        headers["if-modified-since"] = this.lastResponseLastModified;
      }
      logger$6.debug("Making datafile request to url %s with headers: %s", this.datafileUrl, function() {
        return JSON.stringify(headers);
      });
      this.currentRequest = this.makeGetRequest(this.datafileUrl, headers);
      var onRequestComplete = function() {
        _this.onRequestComplete();
      };
      var onRequestResolved = function(response) {
        _this.onRequestResolved(response);
      };
      var onRequestRejected = function(err) {
        _this.onRequestRejected(err);
      };
      this.currentRequest.responsePromise.then(onRequestResolved, onRequestRejected).then(onRequestComplete, onRequestComplete);
      if (this.autoUpdate) {
        this.scheduleNextUpdate();
      }
    };
    HttpPollingDatafileManager2.prototype.resolveReadyPromise = function() {
      this.readyPromiseResolver();
      this.isReadyPromiseSettled = true;
    };
    HttpPollingDatafileManager2.prototype.rejectReadyPromise = function(err) {
      this.readyPromiseRejecter(err);
      this.isReadyPromiseSettled = true;
    };
    HttpPollingDatafileManager2.prototype.scheduleNextUpdate = function() {
      var _this = this;
      var currentBackoffDelay = this.backoffController.getDelay();
      var nextUpdateDelay = Math.max(currentBackoffDelay, this.updateInterval);
      logger$6.debug("Scheduling sync in %s ms", nextUpdateDelay);
      this.currentTimeout = setTimeout(function() {
        if (_this.currentRequest) {
          _this.syncOnCurrentRequestComplete = true;
        } else {
          _this.syncDatafile();
        }
      }, nextUpdateDelay);
    };
    HttpPollingDatafileManager2.prototype.getNextDatafileFromResponse = function(response) {
      logger$6.debug("Response status code: %s", response.statusCode);
      if (typeof response.statusCode === "undefined") {
        return "";
      }
      if (response.statusCode === 304) {
        return "";
      }
      if (isSuccessStatusCode(response.statusCode)) {
        return response.body;
      }
      return "";
    };
    HttpPollingDatafileManager2.prototype.trySavingLastModified = function(headers) {
      var lastModifiedHeader = headers["last-modified"] || headers["Last-Modified"];
      if (typeof lastModifiedHeader !== "undefined") {
        this.lastResponseLastModified = lastModifiedHeader;
        logger$6.debug("Saved last modified header value from response: %s", this.lastResponseLastModified);
      }
    };
    HttpPollingDatafileManager2.prototype.setDatafileFromCacheIfAvailable = function() {
      var _this = this;
      this.cache.get(this.cacheKey).then(function(datafile) {
        if (_this.isStarted && !_this.isReadyPromiseSettled && datafile !== "") {
          logger$6.debug("Using datafile from cache");
          _this.currentDatafile = datafile;
          _this.resolveReadyPromise();
        }
      });
    };
    return HttpPollingDatafileManager2;
  }()
);
httpPollingDatafileManager.default = HttpPollingDatafileManager$1;
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (b2.hasOwnProperty(p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(browserDatafileManager, "__esModule", { value: true });
var browserRequest_1 = browserRequest;
var httpPollingDatafileManager_1 = __importDefault(httpPollingDatafileManager);
var BrowserDatafileManager = (
  /** @class */
  function(_super) {
    __extends(BrowserDatafileManager2, _super);
    function BrowserDatafileManager2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserDatafileManager2.prototype.makeGetRequest = function(reqUrl, headers) {
      return browserRequest_1.makeGetRequest(reqUrl, headers);
    };
    BrowserDatafileManager2.prototype.getConfigDefaults = function() {
      return {
        autoUpdate: false
      };
    };
    return BrowserDatafileManager2;
  }(httpPollingDatafileManager_1.default)
);
browserDatafileManager.default = BrowserDatafileManager;
Object.defineProperty(index_browser$1, "__esModule", { value: true });
var browserDatafileManager_1 = browserDatafileManager;
var HttpPollingDatafileManager = index_browser$1.HttpPollingDatafileManager = browserDatafileManager_1.default;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __spreadArrays() {
  for (var s = 0, i = 0, il2 = arguments.length; i < il2; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k2 = 0, i = 0; i < il2; i++)
    for (var a = arguments[i], j = 0, jl2 = a.length; j < jl2; j++, k2++)
      r2[k2] = a[j];
  return r2;
}
var MAX_SAFE_INTEGER_LIMIT = Math.pow(2, 53);
function assign(target) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  if (!target) {
    return {};
  }
  if (typeof Object.assign === "function") {
    return Object.assign.apply(Object, __spreadArrays([target], sources));
  } else {
    var to = Object(target);
    for (var index2 = 0; index2 < sources.length; index2++) {
      var nextSource = sources[index2];
      if (nextSource !== null && nextSource !== void 0) {
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  }
}
function currentTimestamp() {
  return Math.round((/* @__PURE__ */ new Date()).getTime());
}
function isSafeInteger(number) {
  return typeof number == "number" && Math.abs(number) <= MAX_SAFE_INTEGER_LIMIT;
}
function keyBy(arr, key) {
  if (!arr)
    return {};
  return keyByUtil(arr, function(item) {
    return item[key];
  });
}
function isNumber(value) {
  return typeof value === "number";
}
function uuid() {
  return v4$2();
}
function getTimestamp() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function isValidEnum(enumToCheck, value) {
  var found = false;
  var keys = Object.keys(enumToCheck);
  for (var index2 = 0; index2 < keys.length; index2++) {
    if (value === enumToCheck[keys[index2]]) {
      found = true;
      break;
    }
  }
  return found;
}
function groupBy(arr, grouperFn) {
  var grouper = {};
  arr.forEach(function(item) {
    var key = grouperFn(item);
    grouper[key] = grouper[key] || [];
    grouper[key].push(item);
  });
  return objectValues(grouper);
}
function objectValues(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
}
function objectEntries(obj) {
  return Object.keys(obj).map(function(key) {
    return [key, obj[key]];
  });
}
function find(arr, cond) {
  var found;
  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    if (cond(item)) {
      found = item;
      break;
    }
  }
  return found;
}
function keyByUtil(arr, keyByFn) {
  var map = {};
  arr.forEach(function(item) {
    var key = keyByFn(item);
    map[key] = item;
  });
  return map;
}
function sprintf(format) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  var i = 0;
  return format.replace(/%s/g, function() {
    var arg = args[i++];
    var type = typeof arg;
    if (type === "function") {
      return arg();
    } else if (type === "string") {
      return arg;
    } else {
      return String(arg);
    }
  });
}
var fns = {
  assign,
  currentTimestamp,
  isSafeInteger,
  keyBy,
  uuid,
  isNumber,
  getTimestamp,
  isValidEnum,
  groupBy,
  objectValues,
  objectEntries,
  find,
  keyByUtil,
  sprintf
};
var LOG_LEVEL = {
  NOTSET: 0,
  DEBUG: 1,
  INFO: 2,
  WARNING: 3,
  ERROR: 4
};
var ERROR_MESSAGES = {
  CONDITION_EVALUATOR_ERROR: "%s: Error evaluating audience condition of type %s: %s",
  DATAFILE_AND_SDK_KEY_MISSING: "%s: You must provide at least one of sdkKey or datafile. Cannot start Optimizely",
  EXPERIMENT_KEY_NOT_IN_DATAFILE: "%s: Experiment key %s is not in datafile.",
  FEATURE_NOT_IN_DATAFILE: "%s: Feature key %s is not in datafile.",
  IMPROPERLY_FORMATTED_EXPERIMENT: "%s: Experiment key %s is improperly formatted.",
  INVALID_ATTRIBUTES: "%s: Provided attributes are in an invalid format.",
  INVALID_BUCKETING_ID: "%s: Unable to generate hash for bucketing ID %s: %s",
  INVALID_DATAFILE: "%s: Datafile is invalid - property %s: %s",
  INVALID_DATAFILE_MALFORMED: "%s: Datafile is invalid because it is malformed.",
  INVALID_CONFIG: "%s: Provided Optimizely config is in an invalid format.",
  INVALID_JSON: "%s: JSON object is not valid.",
  INVALID_ERROR_HANDLER: '%s: Provided "errorHandler" is in an invalid format.',
  INVALID_EVENT_DISPATCHER: '%s: Provided "eventDispatcher" is in an invalid format.',
  INVALID_EVENT_TAGS: "%s: Provided event tags are in an invalid format.",
  INVALID_EXPERIMENT_KEY: "%s: Experiment key %s is not in datafile. It is either invalid, paused, or archived.",
  INVALID_EXPERIMENT_ID: "%s: Experiment ID %s is not in datafile.",
  INVALID_GROUP_ID: "%s: Group ID %s is not in datafile.",
  INVALID_LOGGER: '%s: Provided "logger" is in an invalid format.',
  INVALID_ROLLOUT_ID: "%s: Invalid rollout ID %s attached to feature %s",
  INVALID_USER_ID: "%s: Provided user ID is in an invalid format.",
  INVALID_USER_PROFILE_SERVICE: "%s: Provided user profile service instance is in an invalid format: %s.",
  NO_DATAFILE_SPECIFIED: "%s: No datafile specified. Cannot start optimizely.",
  NO_JSON_PROVIDED: "%s: No JSON object to validate against schema.",
  NO_VARIATION_FOR_EXPERIMENT_KEY: "%s: No variation key %s defined in datafile for experiment %s.",
  UNDEFINED_ATTRIBUTE: "%s: Provided attribute: %s has an undefined value.",
  UNRECOGNIZED_ATTRIBUTE: "%s: Unrecognized attribute %s provided. Pruning before sending event to Optimizely.",
  UNABLE_TO_CAST_VALUE: "%s: Unable to cast value %s to type %s, returning null.",
  USER_NOT_IN_FORCED_VARIATION: "%s: User %s is not in the forced variation map. Cannot remove their forced variation.",
  USER_PROFILE_LOOKUP_ERROR: '%s: Error while looking up user profile for user ID "%s": %s.',
  USER_PROFILE_SAVE_ERROR: '%s: Error while saving user profile for user ID "%s": %s.',
  VARIABLE_KEY_NOT_IN_DATAFILE: '%s: Variable with key "%s" associated with feature with key "%s" is not in datafile.',
  VARIATION_ID_NOT_IN_DATAFILE: "%s: No variation ID %s defined in datafile for experiment %s.",
  VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT: "%s: Variation ID %s is not in the datafile.",
  INVALID_INPUT_FORMAT: "%s: Provided %s is in an invalid format.",
  INVALID_DATAFILE_VERSION: "%s: This version of the JavaScript SDK does not support the given datafile version: %s",
  INVALID_VARIATION_KEY: "%s: Provided variation key is in an invalid format."
};
var LOG_MESSAGES = {
  ACTIVATE_USER: "%s: Activating user %s in experiment %s.",
  DISPATCH_CONVERSION_EVENT: "%s: Dispatching conversion event to URL %s with params %s.",
  DISPATCH_IMPRESSION_EVENT: "%s: Dispatching impression event to URL %s with params %s.",
  DEPRECATED_EVENT_VALUE: "%s: Event value is deprecated in %s call.",
  EVENT_KEY_NOT_FOUND: "%s: Event key %s is not in datafile.",
  EXPERIMENT_NOT_RUNNING: "%s: Experiment %s is not running.",
  FEATURE_ENABLED_FOR_USER: "%s: Feature %s is enabled for user %s.",
  FEATURE_NOT_ENABLED_FOR_USER: "%s: Feature %s is not enabled for user %s.",
  FEATURE_HAS_NO_EXPERIMENTS: "%s: Feature %s is not attached to any experiments.",
  FAILED_TO_PARSE_VALUE: '%s: Failed to parse event value "%s" from event tags.',
  FAILED_TO_PARSE_REVENUE: '%s: Failed to parse revenue value "%s" from event tags.',
  FORCED_BUCKETING_FAILED: "%s: Variation key %s is not in datafile. Not activating user %s.",
  INVALID_OBJECT: "%s: Optimizely object is not valid. Failing %s.",
  INVALID_CLIENT_ENGINE: "%s: Invalid client engine passed: %s. Defaulting to node-sdk.",
  INVALID_DEFAULT_DECIDE_OPTIONS: "%s: Provided default decide options is not an array.",
  INVALID_DECIDE_OPTIONS: "%s: Provided decide options is not an array. Using default decide options.",
  INVALID_VARIATION_ID: "%s: Bucketed into an invalid variation ID. Returning null.",
  NOTIFICATION_LISTENER_EXCEPTION: "%s: Notification listener for (%s) threw exception: %s",
  NO_ROLLOUT_EXISTS: "%s: There is no rollout of feature %s.",
  NOT_ACTIVATING_USER: "%s: Not activating user %s for experiment %s.",
  NOT_TRACKING_USER: "%s: Not tracking user %s.",
  PARSED_REVENUE_VALUE: '%s: Parsed revenue value "%s" from event tags.',
  PARSED_NUMERIC_VALUE: '%s: Parsed event value "%s" from event tags.',
  RETURNING_STORED_VARIATION: '%s: Returning previously activated variation "%s" of experiment "%s" for user "%s" from user profile.',
  ROLLOUT_HAS_NO_EXPERIMENTS: "%s: Rollout of feature %s has no experiments",
  SAVED_VARIATION: '%s: Saved variation "%s" of experiment "%s" for user "%s".',
  SAVED_VARIATION_NOT_FOUND: "%s: User %s was previously bucketed into variation with ID %s for experiment %s, but no matching variation was found.",
  SHOULD_NOT_DISPATCH_ACTIVATE: '%s: Experiment %s is not in "Running" state. Not activating user.',
  SKIPPING_JSON_VALIDATION: "%s: Skipping JSON schema validation.",
  TRACK_EVENT: "%s: Tracking event %s for user %s.",
  UNRECOGNIZED_DECIDE_OPTION: "%s: Unrecognized decide option %s provided.",
  USER_ASSIGNED_TO_EXPERIMENT_BUCKET: "%s: Assigned bucket %s to user with bucketing ID %s.",
  USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is in experiment %s of group %s.",
  USER_BUCKETED_INTO_TARGETING_RULE: "%s: User %s bucketed into targeting rule %s.",
  USER_IN_FEATURE_EXPERIMENT: "%s: User %s is in variation %s of experiment %s on the feature %s.",
  USER_IN_ROLLOUT: "%s: User %s is in rollout of feature %s.",
  USER_NOT_BUCKETED_INTO_EVERYONE_TARGETING_RULE: "%s: User %s not bucketed into everyone targeting rule due to traffic allocation.",
  USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP: "%s: User %s is not in experiment %s of group %s.",
  USER_NOT_BUCKETED_INTO_ANY_EXPERIMENT_IN_GROUP: "%s: User %s is not in any experiment of group %s.",
  USER_NOT_BUCKETED_INTO_TARGETING_RULE: "%s User %s not bucketed into targeting rule %s due to traffic allocation. Trying everyone rule.",
  USER_NOT_IN_FEATURE_EXPERIMENT: "%s: User %s is not in any experiment on the feature %s.",
  USER_NOT_IN_ROLLOUT: "%s: User %s is not in rollout of feature %s.",
  USER_FORCED_IN_VARIATION: "%s: User %s is forced in variation %s.",
  USER_MAPPED_TO_FORCED_VARIATION: "%s: Set variation %s for experiment %s and user %s in the forced variation map.",
  USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s does not meet conditions for targeting rule %s.",
  USER_MEETS_CONDITIONS_FOR_TARGETING_RULE: "%s: User %s meets conditions for targeting rule %s.",
  USER_HAS_VARIATION: "%s: User %s is in variation %s of experiment %s.",
  USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
  USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED: "Variation (%s) is mapped to flag (%s) and user (%s) in the forced decision map.",
  USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s), rule (%s) and user (%s) in the forced decision map.",
  USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID: "Invalid variation is mapped to flag (%s) and user (%s) in the forced decision map.",
  USER_HAS_FORCED_VARIATION: "%s: Variation %s is mapped to experiment %s and user %s in the forced variation map.",
  USER_HAS_NO_VARIATION: "%s: User %s is in no variation of experiment %s.",
  USER_HAS_NO_FORCED_VARIATION: "%s: User %s is not in the forced variation map.",
  USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT: "%s: No experiment %s mapped to user %s in the forced variation map.",
  USER_NOT_IN_ANY_EXPERIMENT: "%s: User %s is not in any experiment of group %s.",
  USER_NOT_IN_EXPERIMENT: "%s: User %s does not meet conditions to be in experiment %s.",
  USER_RECEIVED_DEFAULT_VARIABLE_VALUE: '%s: User "%s" is not in any variation or rollout rule. Returning default value for variable "%s" of feature flag "%s".',
  FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Feature "%s" is not enabled for user %s. Returning the default variable value "%s".',
  VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE: '%s: Variable "%s" is not used in variation "%s". Returning default value.',
  USER_RECEIVED_VARIABLE_VALUE: '%s: Got variable value "%s" for variable "%s" of feature flag "%s"',
  VALID_DATAFILE: "%s: Datafile is valid.",
  VALID_USER_PROFILE_SERVICE: "%s: Valid user profile service provided.",
  VARIATION_REMOVED_FOR_USER: "%s: Variation mapped to experiment %s has been removed for user %s.",
  VARIABLE_REQUESTED_WITH_WRONG_TYPE: '%s: Requested variable type "%s", but variable is of type "%s". Use correct API to retrieve value. Returning None.',
  VALID_BUCKETING_ID: '%s: BucketingId is valid: "%s"',
  BUCKETING_ID_NOT_STRING: "%s: BucketingID attribute is not a string. Defaulted to userId",
  EVALUATING_AUDIENCE: '%s: Starting to evaluate audience "%s" with conditions: %s.',
  EVALUATING_AUDIENCES_COMBINED: '%s: Evaluating audiences for %s "%s": %s.',
  AUDIENCE_EVALUATION_RESULT: '%s: Audience "%s" evaluated to %s.',
  AUDIENCE_EVALUATION_RESULT_COMBINED: "%s: Audiences for %s %s collectively evaluated to %s.",
  MISSING_ATTRIBUTE_VALUE: '%s: Audience condition %s evaluated to UNKNOWN because no value was passed for user attribute "%s".',
  UNEXPECTED_CONDITION_VALUE: "%s: Audience condition %s evaluated to UNKNOWN because the condition value is not supported.",
  UNEXPECTED_TYPE: '%s: Audience condition %s evaluated to UNKNOWN because a value of type "%s" was passed for user attribute "%s".',
  UNEXPECTED_TYPE_NULL: '%s: Audience condition %s evaluated to UNKNOWN because a null value was passed for user attribute "%s".',
  UNKNOWN_CONDITION_TYPE: "%s: Audience condition %s has an unknown condition type. You may need to upgrade to a newer release of the Optimizely SDK.",
  UNKNOWN_MATCH_TYPE: "%s: Audience condition %s uses an unknown match type. You may need to upgrade to a newer release of the Optimizely SDK.",
  UPDATED_OPTIMIZELY_CONFIG: "%s: Updated Optimizely config to revision %s (project id %s)",
  OUT_OF_BOUNDS: '%s: Audience condition %s evaluated to UNKNOWN because the number value for user attribute "%s" is not in the range [-2^53, +2^53].',
  UNABLE_TO_ATTACH_UNLOAD: '%s: unable to bind optimizely.close() to page unload event: "%s"'
};
var CONTROL_ATTRIBUTES = {
  BOT_FILTERING: "$opt_bot_filtering",
  BUCKETING_ID: "$opt_bucketing_id",
  STICKY_BUCKETING_KEY: "$opt_experiment_bucket_map",
  USER_AGENT: "$opt_user_agent",
  FORCED_DECISION_NULL_RULE_KEY: "$opt_null_rule_key"
};
var JAVASCRIPT_CLIENT_ENGINE = "javascript-sdk";
var NODE_CLIENT_ENGINE = "node-sdk";
var REACT_CLIENT_ENGINE = "react-sdk";
var REACT_NATIVE_CLIENT_ENGINE = "react-native-sdk";
var REACT_NATIVE_JS_CLIENT_ENGINE = "react-native-js-sdk";
var NODE_CLIENT_VERSION = "4.9.2";
var DECISION_NOTIFICATION_TYPES = {
  AB_TEST: "ab-test",
  FEATURE: "feature",
  FEATURE_TEST: "feature-test",
  FEATURE_VARIABLE: "feature-variable",
  ALL_FEATURE_VARIABLES: "all-feature-variables",
  FLAG: "flag"
};
var DECISION_SOURCES = {
  FEATURE_TEST: "feature-test",
  ROLLOUT: "rollout",
  EXPERIMENT: "experiment"
};
var AUDIENCE_EVALUATION_TYPES = {
  RULE: "rule",
  EXPERIMENT: "experiment"
};
var FEATURE_VARIABLE_TYPES = {
  BOOLEAN: "boolean",
  DOUBLE: "double",
  INTEGER: "integer",
  STRING: "string",
  JSON: "json"
};
var DATAFILE_VERSIONS = {
  V2: "2",
  V3: "3",
  V4: "4"
};
var DECISION_MESSAGES = {
  SDK_NOT_READY: "Optimizely SDK not configured properly yet.",
  FLAG_KEY_INVALID: 'No flag was found for key "%s".',
  VARIABLE_VALUE_INVALID: 'Variable value for key "%s" is invalid or wrong type.'
};
var NOTIFICATION_TYPES;
(function(NOTIFICATION_TYPES2) {
  NOTIFICATION_TYPES2["ACTIVATE"] = "ACTIVATE:experiment, user_id,attributes, variation, event";
  NOTIFICATION_TYPES2["DECISION"] = "DECISION:type, userId, attributes, decisionInfo";
  NOTIFICATION_TYPES2["LOG_EVENT"] = "LOG_EVENT:logEvent";
  NOTIFICATION_TYPES2["OPTIMIZELY_CONFIG_UPDATE"] = "OPTIMIZELY_CONFIG_UPDATE";
  NOTIFICATION_TYPES2["TRACK"] = "TRACK:event_key, user_id, attributes, event_tags, event";
})(NOTIFICATION_TYPES || (NOTIFICATION_TYPES = {}));
var enums = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LOG_LEVEL,
  ERROR_MESSAGES,
  LOG_MESSAGES,
  CONTROL_ATTRIBUTES,
  JAVASCRIPT_CLIENT_ENGINE,
  NODE_CLIENT_ENGINE,
  REACT_CLIENT_ENGINE,
  REACT_NATIVE_CLIENT_ENGINE,
  REACT_NATIVE_JS_CLIENT_ENGINE,
  NODE_CLIENT_VERSION,
  DECISION_NOTIFICATION_TYPES,
  DECISION_SOURCES,
  AUDIENCE_EVALUATION_TYPES,
  FEATURE_VARIABLE_TYPES,
  DATAFILE_VERSIONS,
  DECISION_MESSAGES,
  get NOTIFICATION_TYPES() {
    return NOTIFICATION_TYPES;
  }
});
var MODULE_NAME = "CONFIG_VALIDATOR";
var SUPPORTED_VERSIONS = [DATAFILE_VERSIONS.V2, DATAFILE_VERSIONS.V3, DATAFILE_VERSIONS.V4];
var validate$1 = function(config2) {
  if (typeof config2 === "object" && config2 !== null) {
    var configObj = config2;
    var errorHandler2 = configObj["errorHandler"];
    var eventDispatcher2 = configObj["eventDispatcher"];
    var logger2 = configObj["logger"];
    if (errorHandler2 && typeof errorHandler2["handleError"] !== "function") {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_ERROR_HANDLER, MODULE_NAME));
    }
    if (eventDispatcher2 && typeof eventDispatcher2["dispatchEvent"] !== "function") {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_EVENT_DISPATCHER, MODULE_NAME));
    }
    if (logger2 && typeof logger2["log"] !== "function") {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_LOGGER, MODULE_NAME));
    }
    return true;
  }
  throw new Error(sprintf(ERROR_MESSAGES.INVALID_CONFIG, MODULE_NAME));
};
var validateDatafile = function(datafile) {
  if (!datafile) {
    throw new Error(sprintf(ERROR_MESSAGES.NO_DATAFILE_SPECIFIED, MODULE_NAME));
  }
  if (typeof datafile === "string") {
    try {
      datafile = JSON.parse(datafile);
    } catch (ex) {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_DATAFILE_MALFORMED, MODULE_NAME));
    }
  }
  if (typeof datafile === "object" && !Array.isArray(datafile) && datafile !== null) {
    if (SUPPORTED_VERSIONS.indexOf(datafile["version"]) === -1) {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_DATAFILE_VERSION, MODULE_NAME, datafile["version"]));
    }
  }
  return datafile;
};
var configValidator = {
  validate: validate$1,
  validateDatafile
};
function handleError() {
}
var defaultErrorHandler = {
  handleError
};
var POST_METHOD = "POST";
var GET_METHOD = "GET";
var READYSTATE_COMPLETE = 4;
var dispatchEvent = function(eventObj, callback) {
  var params = eventObj.params;
  var url = eventObj.url;
  var req;
  if (eventObj.httpVerb === POST_METHOD) {
    req = new XMLHttpRequest();
    req.open(POST_METHOD, url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.onreadystatechange = function() {
      if (req.readyState === READYSTATE_COMPLETE && callback && typeof callback === "function") {
        try {
          callback({ statusCode: req.status });
        } catch (e) {
        }
      }
    };
    req.send(JSON.stringify(params));
  } else {
    url += "?wxhr=true";
    if (params) {
      url += "&" + toQueryString(params);
    }
    req = new XMLHttpRequest();
    req.open(GET_METHOD, url, true);
    req.onreadystatechange = function() {
      if (req.readyState === READYSTATE_COMPLETE && callback && typeof callback === "function") {
        try {
          callback({ statusCode: req.status });
        } catch (e) {
        }
      }
    };
    req.send();
  }
};
var toQueryString = function(obj) {
  return Object.keys(obj).map(function(k2) {
    return encodeURIComponent(k2) + "=" + encodeURIComponent(obj[k2]);
  }).join("&");
};
var defaultEventDispatcher = {
  dispatchEvent
};
var NoOpLogger = (
  /** @class */
  function() {
    function NoOpLogger2() {
    }
    NoOpLogger2.prototype.log = function() {
    };
    return NoOpLogger2;
  }()
);
function createLogger(opts) {
  return new lib$2.ConsoleLogHandler(opts);
}
function createNoOpLogger() {
  return new NoOpLogger();
}
var loggerPlugin = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  NoOpLogger,
  createLogger,
  createNoOpLogger
});
var VariableType;
(function(VariableType2) {
  VariableType2["BOOLEAN"] = "boolean";
  VariableType2["DOUBLE"] = "double";
  VariableType2["INTEGER"] = "integer";
  VariableType2["STRING"] = "string";
  VariableType2["JSON"] = "json";
})(VariableType || (VariableType = {}));
var OptimizelyDecideOption;
(function(OptimizelyDecideOption2) {
  OptimizelyDecideOption2["DISABLE_DECISION_EVENT"] = "DISABLE_DECISION_EVENT";
  OptimizelyDecideOption2["ENABLED_FLAGS_ONLY"] = "ENABLED_FLAGS_ONLY";
  OptimizelyDecideOption2["IGNORE_USER_PROFILE_SERVICE"] = "IGNORE_USER_PROFILE_SERVICE";
  OptimizelyDecideOption2["INCLUDE_REASONS"] = "INCLUDE_REASONS";
  OptimizelyDecideOption2["EXCLUDE_VARIABLES"] = "EXCLUDE_VARIABLES";
})(OptimizelyDecideOption || (OptimizelyDecideOption = {}));
function newErrorDecision(key, user, reasons) {
  return {
    variationKey: null,
    enabled: false,
    variables: {},
    ruleKey: null,
    flagKey: key,
    userContext: user,
    reasons
  };
}
var OptimizelyUserContext = (
  /** @class */
  function() {
    function OptimizelyUserContext2(_a) {
      var optimizely = _a.optimizely, userId = _a.userId, attributes = _a.attributes;
      var _b;
      this.optimizely = optimizely;
      this.userId = userId;
      this.attributes = (_b = __assign({}, attributes)) !== null && _b !== void 0 ? _b : {};
      this.forcedDecisionsMap = {};
    }
    OptimizelyUserContext2.prototype.setAttribute = function(key, value) {
      this.attributes[key] = value;
    };
    OptimizelyUserContext2.prototype.getUserId = function() {
      return this.userId;
    };
    OptimizelyUserContext2.prototype.getAttributes = function() {
      return __assign({}, this.attributes);
    };
    OptimizelyUserContext2.prototype.getOptimizely = function() {
      return this.optimizely;
    };
    OptimizelyUserContext2.prototype.decide = function(key, options) {
      if (options === void 0) {
        options = [];
      }
      return this.optimizely.decide(this.cloneUserContext(), key, options);
    };
    OptimizelyUserContext2.prototype.decideForKeys = function(keys, options) {
      if (options === void 0) {
        options = [];
      }
      return this.optimizely.decideForKeys(this.cloneUserContext(), keys, options);
    };
    OptimizelyUserContext2.prototype.decideAll = function(options) {
      if (options === void 0) {
        options = [];
      }
      return this.optimizely.decideAll(this.cloneUserContext(), options);
    };
    OptimizelyUserContext2.prototype.trackEvent = function(eventName, eventTags) {
      this.optimizely.track(eventName, this.userId, this.attributes, eventTags);
    };
    OptimizelyUserContext2.prototype.setForcedDecision = function(context, decision) {
      var _a;
      var flagKey = context.flagKey;
      var ruleKey = (_a = context.ruleKey) !== null && _a !== void 0 ? _a : CONTROL_ATTRIBUTES.FORCED_DECISION_NULL_RULE_KEY;
      var variationKey = decision.variationKey;
      var forcedDecision = { variationKey };
      if (!this.forcedDecisionsMap[flagKey]) {
        this.forcedDecisionsMap[flagKey] = {};
      }
      this.forcedDecisionsMap[flagKey][ruleKey] = forcedDecision;
      return true;
    };
    OptimizelyUserContext2.prototype.getForcedDecision = function(context) {
      return this.findForcedDecision(context);
    };
    OptimizelyUserContext2.prototype.removeForcedDecision = function(context) {
      var _a;
      var ruleKey = (_a = context.ruleKey) !== null && _a !== void 0 ? _a : CONTROL_ATTRIBUTES.FORCED_DECISION_NULL_RULE_KEY;
      var flagKey = context.flagKey;
      var isForcedDecisionRemoved = false;
      if (this.forcedDecisionsMap.hasOwnProperty(flagKey)) {
        var forcedDecisionByRuleKey = this.forcedDecisionsMap[flagKey];
        if (forcedDecisionByRuleKey.hasOwnProperty(ruleKey)) {
          delete this.forcedDecisionsMap[flagKey][ruleKey];
          isForcedDecisionRemoved = true;
        }
        if (Object.keys(this.forcedDecisionsMap[flagKey]).length === 0) {
          delete this.forcedDecisionsMap[flagKey];
        }
      }
      return isForcedDecisionRemoved;
    };
    OptimizelyUserContext2.prototype.removeAllForcedDecisions = function() {
      this.forcedDecisionsMap = {};
      return true;
    };
    OptimizelyUserContext2.prototype.findForcedDecision = function(context) {
      var _a;
      var variationKey;
      var validRuleKey = (_a = context.ruleKey) !== null && _a !== void 0 ? _a : CONTROL_ATTRIBUTES.FORCED_DECISION_NULL_RULE_KEY;
      var flagKey = context.flagKey;
      if (this.forcedDecisionsMap.hasOwnProperty(context.flagKey)) {
        var forcedDecisionByRuleKey = this.forcedDecisionsMap[flagKey];
        if (forcedDecisionByRuleKey.hasOwnProperty(validRuleKey)) {
          variationKey = forcedDecisionByRuleKey[validRuleKey].variationKey;
          return { variationKey };
        }
      }
      return null;
    };
    OptimizelyUserContext2.prototype.cloneUserContext = function() {
      var userContext = new OptimizelyUserContext2({
        optimizely: this.getOptimizely(),
        userId: this.getUserId(),
        attributes: this.getAttributes()
      });
      if (Object.keys(this.forcedDecisionsMap).length > 0) {
        userContext.forcedDecisionsMap = __assign({}, this.forcedDecisionsMap);
      }
      return userContext;
    };
    return OptimizelyUserContext2;
  }()
);
var AND_CONDITION = "and";
var OR_CONDITION = "or";
var NOT_CONDITION = "not";
var DEFAULT_OPERATOR_TYPES = [AND_CONDITION, OR_CONDITION, NOT_CONDITION];
function evaluate(conditions, leafEvaluator) {
  if (Array.isArray(conditions)) {
    var firstOperator = conditions[0];
    var restOfConditions = conditions.slice(1);
    if (typeof firstOperator === "string" && DEFAULT_OPERATOR_TYPES.indexOf(firstOperator) === -1) {
      firstOperator = OR_CONDITION;
      restOfConditions = conditions;
    }
    switch (firstOperator) {
      case AND_CONDITION:
        return andEvaluator(restOfConditions, leafEvaluator);
      case NOT_CONDITION:
        return notEvaluator(restOfConditions, leafEvaluator);
      default:
        return orEvaluator(restOfConditions, leafEvaluator);
    }
  }
  var leafCondition = conditions;
  return leafEvaluator(leafCondition);
}
function andEvaluator(conditions, leafEvaluator) {
  var sawNullResult = false;
  if (Array.isArray(conditions)) {
    for (var i = 0; i < conditions.length; i++) {
      var conditionResult = evaluate(conditions[i], leafEvaluator);
      if (conditionResult === false) {
        return false;
      }
      if (conditionResult === null) {
        sawNullResult = true;
      }
    }
    return sawNullResult ? null : true;
  }
  return null;
}
function notEvaluator(conditions, leafEvaluator) {
  if (Array.isArray(conditions) && conditions.length > 0) {
    var result = evaluate(conditions[0], leafEvaluator);
    return result === null ? null : !result;
  }
  return null;
}
function orEvaluator(conditions, leafEvaluator) {
  var sawNullResult = false;
  if (Array.isArray(conditions)) {
    for (var i = 0; i < conditions.length; i++) {
      var conditionResult = evaluate(conditions[i], leafEvaluator);
      if (conditionResult === true) {
        return true;
      }
      if (conditionResult === null) {
        sawNullResult = true;
      }
    }
    return sawNullResult ? null : false;
  }
  return null;
}
var OptimizelyConfig = (
  /** @class */
  function() {
    function OptimizelyConfig2(configObj, datafile) {
      var _a, _b;
      this.sdkKey = (_a = configObj.sdkKey) !== null && _a !== void 0 ? _a : "";
      this.environmentKey = (_b = configObj.environmentKey) !== null && _b !== void 0 ? _b : "";
      this.attributes = configObj.attributes;
      this.audiences = OptimizelyConfig2.getAudiences(configObj);
      this.events = configObj.events;
      this.revision = configObj.revision;
      var featureIdVariablesMap = (configObj.featureFlags || []).reduce(function(resultMap, feature) {
        resultMap[feature.id] = feature.variables;
        return resultMap;
      }, {});
      var experimentsMapById = OptimizelyConfig2.getExperimentsMapById(configObj, featureIdVariablesMap);
      this.experimentsMap = OptimizelyConfig2.getExperimentsKeyMap(experimentsMapById);
      this.featuresMap = OptimizelyConfig2.getFeaturesMap(configObj, featureIdVariablesMap, experimentsMapById);
      this.datafile = datafile;
    }
    OptimizelyConfig2.prototype.getDatafile = function() {
      return this.datafile;
    };
    OptimizelyConfig2.getAudiences = function(configObj) {
      var audiences = [];
      var typedAudienceIds = [];
      (configObj.typedAudiences || []).forEach(function(typedAudience) {
        audiences.push({
          id: typedAudience.id,
          conditions: JSON.stringify(typedAudience.conditions),
          name: typedAudience.name
        });
        typedAudienceIds.push(typedAudience.id);
      });
      (configObj.audiences || []).forEach(function(audience) {
        if (typedAudienceIds.indexOf(audience.id) === -1 && audience.id != "$opt_dummy_audience") {
          audiences.push({
            id: audience.id,
            conditions: JSON.stringify(audience.conditions),
            name: audience.name
          });
        }
      });
      return audiences;
    };
    OptimizelyConfig2.getSerializedAudiences = function(conditions, audiencesById) {
      var serializedAudience = "";
      if (conditions) {
        var cond_1 = "";
        conditions.forEach(function(item) {
          var subAudience = "";
          if (item instanceof Array) {
            subAudience = OptimizelyConfig2.getSerializedAudiences(item, audiencesById);
            subAudience = "(" + subAudience + ")";
          } else if (DEFAULT_OPERATOR_TYPES.indexOf(item) > -1) {
            cond_1 = item.toUpperCase();
          } else {
            var audienceName = audiencesById[item] ? audiencesById[item].name : item;
            if (serializedAudience || cond_1 === "NOT") {
              cond_1 = cond_1 === "" ? "OR" : cond_1;
              if (serializedAudience === "") {
                serializedAudience = cond_1 + ' "' + audiencesById[item].name + '"';
              } else {
                serializedAudience = serializedAudience.concat(" " + cond_1 + ' "' + audienceName + '"');
              }
            } else {
              serializedAudience = '"' + audienceName + '"';
            }
          }
          if (subAudience !== "") {
            if (serializedAudience !== "" || cond_1 === "NOT") {
              cond_1 = cond_1 === "" ? "OR" : cond_1;
              if (serializedAudience === "") {
                serializedAudience = cond_1 + " " + subAudience;
              } else {
                serializedAudience = serializedAudience.concat(" " + cond_1 + " " + subAudience);
              }
            } else {
              serializedAudience = serializedAudience.concat(subAudience);
            }
          }
        });
      }
      return serializedAudience;
    };
    OptimizelyConfig2.getExperimentAudiences = function(experiment, configObj) {
      if (!experiment.audienceConditions) {
        return "";
      }
      return OptimizelyConfig2.getSerializedAudiences(experiment.audienceConditions, configObj.audiencesById);
    };
    OptimizelyConfig2.mergeFeatureVariables = function(featureIdVariableMap, variableIdMap, featureId, featureVariableUsages, isFeatureEnabled) {
      var variablesMap = (featureIdVariableMap[featureId] || []).reduce(function(optlyVariablesMap, featureVariable) {
        optlyVariablesMap[featureVariable.key] = {
          id: featureVariable.id,
          key: featureVariable.key,
          type: featureVariable.type,
          value: featureVariable.defaultValue
        };
        return optlyVariablesMap;
      }, {});
      (featureVariableUsages || []).forEach(function(featureVariableUsage) {
        var defaultVariable = variableIdMap[featureVariableUsage.id];
        var optimizelyVariable = {
          id: featureVariableUsage.id,
          key: defaultVariable.key,
          type: defaultVariable.type,
          value: isFeatureEnabled ? featureVariableUsage.value : defaultVariable.defaultValue
        };
        variablesMap[defaultVariable.key] = optimizelyVariable;
      });
      return variablesMap;
    };
    OptimizelyConfig2.getVariationsMap = function(variations, featureIdVariableMap, variableIdMap, featureId) {
      var variationsMap = {};
      variationsMap = variations.reduce(function(optlyVariationsMap, variation) {
        var variablesMap = OptimizelyConfig2.mergeFeatureVariables(featureIdVariableMap, variableIdMap, featureId, variation.variables, variation.featureEnabled);
        optlyVariationsMap[variation.key] = {
          id: variation.id,
          key: variation.key,
          featureEnabled: variation.featureEnabled,
          variablesMap
        };
        return optlyVariationsMap;
      }, {});
      return variationsMap;
    };
    OptimizelyConfig2.getVariableIdMap = function(configObj) {
      var variablesIdMap = {};
      variablesIdMap = (configObj.featureFlags || []).reduce(function(resultMap, feature) {
        feature.variables.forEach(function(variable) {
          resultMap[variable.id] = variable;
        });
        return resultMap;
      }, {});
      return variablesIdMap;
    };
    OptimizelyConfig2.getDeliveryRules = function(configObj, featureVariableIdMap, featureId, experiments) {
      var variableIdMap = OptimizelyConfig2.getVariableIdMap(configObj);
      return experiments.map(function(experiment) {
        return {
          id: experiment.id,
          key: experiment.key,
          audiences: OptimizelyConfig2.getExperimentAudiences(experiment, configObj),
          variationsMap: OptimizelyConfig2.getVariationsMap(experiment.variations, featureVariableIdMap, variableIdMap, featureId)
        };
      });
    };
    OptimizelyConfig2.getRolloutExperimentIds = function(rollouts) {
      var experimentIds = [];
      (rollouts || []).forEach(function(rollout) {
        rollout.experiments.forEach(function(e) {
          experimentIds.push(e.id);
        });
      });
      return experimentIds;
    };
    OptimizelyConfig2.getExperimentsMapById = function(configObj, featureIdVariableMap) {
      var variableIdMap = OptimizelyConfig2.getVariableIdMap(configObj);
      var rolloutExperimentIds = this.getRolloutExperimentIds(configObj.rollouts);
      var experiments = configObj.experiments;
      return (experiments || []).reduce(function(experimentsMap, experiment) {
        if (rolloutExperimentIds.indexOf(experiment.id) === -1) {
          var featureIds = configObj.experimentFeatureMap[experiment.id];
          var featureId = "";
          if (featureIds && featureIds.length > 0) {
            featureId = featureIds[0];
          }
          var variationsMap = OptimizelyConfig2.getVariationsMap(experiment.variations, featureIdVariableMap, variableIdMap, featureId.toString());
          experimentsMap[experiment.id] = {
            id: experiment.id,
            key: experiment.key,
            audiences: OptimizelyConfig2.getExperimentAudiences(experiment, configObj),
            variationsMap
          };
        }
        return experimentsMap;
      }, {});
    };
    OptimizelyConfig2.getExperimentsKeyMap = function(experimentsMapById) {
      var experimentKeysMap = {};
      for (var id2 in experimentsMapById) {
        var experiment = experimentsMapById[id2];
        experimentKeysMap[experiment.key] = experiment;
      }
      return experimentKeysMap;
    };
    OptimizelyConfig2.getFeaturesMap = function(configObj, featureVariableIdMap, experimentsMapById) {
      var featuresMap = {};
      configObj.featureFlags.forEach(function(featureFlag) {
        var featureExperimentMap = {};
        var experimentRules = [];
        featureFlag.experimentIds.forEach(function(experimentId) {
          var experiment = experimentsMapById[experimentId];
          if (experiment) {
            featureExperimentMap[experiment.key] = experiment;
          }
          experimentRules.push(experimentsMapById[experimentId]);
        });
        var featureVariableMap = (featureFlag.variables || []).reduce(function(variables, variable) {
          variables[variable.key] = {
            id: variable.id,
            key: variable.key,
            type: variable.type,
            value: variable.defaultValue
          };
          return variables;
        }, {});
        var deliveryRules = [];
        var rollout = configObj.rolloutIdMap[featureFlag.rolloutId];
        if (rollout) {
          deliveryRules = OptimizelyConfig2.getDeliveryRules(configObj, featureVariableIdMap, featureFlag.id, rollout.experiments);
        }
        featuresMap[featureFlag.key] = {
          id: featureFlag.id,
          key: featureFlag.key,
          experimentRules,
          deliveryRules,
          experimentsMap: featureExperimentMap,
          variablesMap: featureVariableMap
        };
      });
      return featuresMap;
    };
    return OptimizelyConfig2;
  }()
);
function createOptimizelyConfig(configObj, datafile) {
  return new OptimizelyConfig(configObj, datafile);
}
var EXPERIMENT_RUNNING_STATUS = "Running";
var RESERVED_ATTRIBUTE_PREFIX = "$opt_";
var MODULE_NAME$1 = "PROJECT_CONFIG";
function createMutationSafeDatafileCopy(datafile) {
  var _a, _b;
  var datafileCopy = assign({}, datafile);
  datafileCopy.audiences = (datafile.audiences || []).map(function(audience) {
    return assign({}, audience);
  });
  datafileCopy.experiments = (datafile.experiments || []).map(function(experiment) {
    return assign({}, experiment);
  });
  datafileCopy.featureFlags = (datafile.featureFlags || []).map(function(featureFlag) {
    return assign({}, featureFlag);
  });
  datafileCopy.groups = (datafile.groups || []).map(function(group) {
    var groupCopy = assign({}, group);
    groupCopy.experiments = (group.experiments || []).map(function(experiment) {
      return assign({}, experiment);
    });
    return groupCopy;
  });
  datafileCopy.rollouts = (datafile.rollouts || []).map(function(rollout) {
    var rolloutCopy = assign({}, rollout);
    rolloutCopy.experiments = (rollout.experiments || []).map(function(experiment) {
      return assign({}, experiment);
    });
    return rolloutCopy;
  });
  datafileCopy.environmentKey = (_a = datafile.environmentKey) !== null && _a !== void 0 ? _a : "";
  datafileCopy.sdkKey = (_b = datafile.sdkKey) !== null && _b !== void 0 ? _b : "";
  return datafileCopy;
}
var createProjectConfig = function(datafileObj, datafileStr) {
  if (datafileStr === void 0) {
    datafileStr = null;
  }
  var projectConfig = createMutationSafeDatafileCopy(datafileObj);
  projectConfig.__datafileStr = datafileStr === null ? JSON.stringify(datafileObj) : datafileStr;
  (projectConfig.audiences || []).forEach(function(audience) {
    audience.conditions = JSON.parse(audience.conditions);
  });
  projectConfig.audiencesById = keyBy(projectConfig.audiences, "id");
  assign(projectConfig.audiencesById, keyBy(projectConfig.typedAudiences, "id"));
  projectConfig.attributeKeyMap = keyBy(projectConfig.attributes, "key");
  projectConfig.eventKeyMap = keyBy(projectConfig.events, "key");
  projectConfig.groupIdMap = keyBy(projectConfig.groups, "id");
  var experiments;
  Object.keys(projectConfig.groupIdMap || {}).forEach(function(Id2) {
    experiments = projectConfig.groupIdMap[Id2].experiments;
    (experiments || []).forEach(function(experiment) {
      projectConfig.experiments.push(assign(experiment, { groupId: Id2 }));
    });
  });
  projectConfig.rolloutIdMap = keyBy(projectConfig.rollouts || [], "id");
  objectValues(projectConfig.rolloutIdMap || {}).forEach(function(rollout) {
    (rollout.experiments || []).forEach(function(experiment) {
      projectConfig.experiments.push(experiment);
      experiment.variationKeyMap = keyBy(experiment.variations, "key");
    });
  });
  projectConfig.experimentKeyMap = keyBy(projectConfig.experiments, "key");
  projectConfig.experimentIdMap = keyBy(projectConfig.experiments, "id");
  projectConfig.variationIdMap = {};
  projectConfig.variationVariableUsageMap = {};
  (projectConfig.experiments || []).forEach(function(experiment) {
    experiment.variationKeyMap = keyBy(experiment.variations, "key");
    assign(projectConfig.variationIdMap, keyBy(experiment.variations, "id"));
    objectValues(experiment.variationKeyMap || {}).forEach(function(variation) {
      if (variation.variables) {
        projectConfig.variationVariableUsageMap[variation.id] = keyBy(variation.variables, "id");
      }
    });
  });
  projectConfig.experimentFeatureMap = {};
  projectConfig.featureKeyMap = keyBy(projectConfig.featureFlags || [], "key");
  objectValues(projectConfig.featureKeyMap || {}).forEach(function(feature) {
    feature.variables.forEach(function(variable) {
      if (variable.type === FEATURE_VARIABLE_TYPES.STRING && variable.subType === FEATURE_VARIABLE_TYPES.JSON) {
        variable.type = FEATURE_VARIABLE_TYPES.JSON;
        delete variable.subType;
      }
    });
    feature.variableKeyMap = keyBy(feature.variables, "key");
    (feature.experimentIds || []).forEach(function(experimentId) {
      if (projectConfig.experimentFeatureMap[experimentId]) {
        projectConfig.experimentFeatureMap[experimentId].push(feature.id);
      } else {
        projectConfig.experimentFeatureMap[experimentId] = [feature.id];
      }
    });
  });
  projectConfig.flagRulesMap = {};
  (projectConfig.featureFlags || []).forEach(function(featureFlag) {
    var flagRuleExperiments = [];
    featureFlag.experimentIds.forEach(function(experimentId) {
      var experiment = projectConfig.experimentIdMap[experimentId];
      if (experiment) {
        flagRuleExperiments.push(experiment);
      }
    });
    var rollout = projectConfig.rolloutIdMap[featureFlag.rolloutId];
    if (rollout) {
      flagRuleExperiments.push.apply(flagRuleExperiments, rollout.experiments);
    }
    projectConfig.flagRulesMap[featureFlag.key] = flagRuleExperiments;
  });
  projectConfig.flagVariationsMap = {};
  objectEntries(projectConfig.flagRulesMap || {}).forEach(function(_a) {
    var flagKey = _a[0], rules = _a[1];
    var variations = [];
    rules.forEach(function(rule) {
      rule.variations.forEach(function(variation) {
        if (!find(variations, function(item) {
          return item.id === variation.id;
        })) {
          variations.push(variation);
        }
      });
    });
    projectConfig.flagVariationsMap[flagKey] = variations;
  });
  return projectConfig;
};
var getLayerId = function(projectConfig, experimentId) {
  var experiment = projectConfig.experimentIdMap[experimentId];
  if (!experiment) {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_EXPERIMENT_ID, MODULE_NAME$1, experimentId));
  }
  return experiment.layerId;
};
var getAttributeId = function(projectConfig, attributeKey, logger2) {
  var attribute = projectConfig.attributeKeyMap[attributeKey];
  var hasReservedPrefix = attributeKey.indexOf(RESERVED_ATTRIBUTE_PREFIX) === 0;
  if (attribute) {
    if (hasReservedPrefix) {
      logger2.log(LOG_LEVEL.WARNING, "Attribute %s unexpectedly has reserved prefix %s; using attribute ID instead of reserved attribute name.", attributeKey, RESERVED_ATTRIBUTE_PREFIX);
    }
    return attribute.id;
  } else if (hasReservedPrefix) {
    return attributeKey;
  }
  logger2.log(LOG_LEVEL.DEBUG, ERROR_MESSAGES.UNRECOGNIZED_ATTRIBUTE, MODULE_NAME$1, attributeKey);
  return null;
};
var getEventId = function(projectConfig, eventKey) {
  var event = projectConfig.eventKeyMap[eventKey];
  if (event) {
    return event.id;
  }
  return null;
};
var getExperimentStatus = function(projectConfig, experimentKey) {
  var experiment = projectConfig.experimentKeyMap[experimentKey];
  if (!experiment) {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_EXPERIMENT_KEY, MODULE_NAME$1, experimentKey));
  }
  return experiment.status;
};
var isActive = function(projectConfig, experimentKey) {
  return getExperimentStatus(projectConfig, experimentKey) === EXPERIMENT_RUNNING_STATUS;
};
var isRunning = function(projectConfig, experimentKey) {
  return getExperimentStatus(projectConfig, experimentKey) === EXPERIMENT_RUNNING_STATUS;
};
var getExperimentAudienceConditions = function(projectConfig, experimentId) {
  var experiment = projectConfig.experimentIdMap[experimentId];
  if (!experiment) {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_EXPERIMENT_ID, MODULE_NAME$1, experimentId));
  }
  return experiment.audienceConditions || experiment.audienceIds;
};
var getVariationKeyFromId = function(projectConfig, variationId) {
  if (projectConfig.variationIdMap.hasOwnProperty(variationId)) {
    return projectConfig.variationIdMap[variationId].key;
  }
  return null;
};
var getVariationFromId = function(projectConfig, variationId) {
  if (projectConfig.variationIdMap.hasOwnProperty(variationId)) {
    return projectConfig.variationIdMap[variationId];
  }
  return null;
};
var getVariationIdFromExperimentAndVariationKey = function(projectConfig, experimentKey, variationKey) {
  var experiment = projectConfig.experimentKeyMap[experimentKey];
  if (experiment.variationKeyMap.hasOwnProperty(variationKey)) {
    return experiment.variationKeyMap[variationKey].id;
  }
  return null;
};
var getExperimentFromKey = function(projectConfig, experimentKey) {
  if (projectConfig.experimentKeyMap.hasOwnProperty(experimentKey)) {
    var experiment = projectConfig.experimentKeyMap[experimentKey];
    if (experiment) {
      return experiment;
    }
  }
  throw new Error(sprintf(ERROR_MESSAGES.EXPERIMENT_KEY_NOT_IN_DATAFILE, MODULE_NAME$1, experimentKey));
};
var getTrafficAllocation = function(projectConfig, experimentId) {
  var experiment = projectConfig.experimentIdMap[experimentId];
  if (!experiment) {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_EXPERIMENT_ID, MODULE_NAME$1, experimentId));
  }
  return experiment.trafficAllocation;
};
var getExperimentFromId = function(projectConfig, experimentId, logger2) {
  if (projectConfig.experimentIdMap.hasOwnProperty(experimentId)) {
    var experiment = projectConfig.experimentIdMap[experimentId];
    if (experiment) {
      return experiment;
    }
  }
  logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.INVALID_EXPERIMENT_ID, MODULE_NAME$1, experimentId);
  return null;
};
var getFlagVariationByKey = function(projectConfig, flagKey, variationKey) {
  if (!projectConfig) {
    return null;
  }
  var variations = projectConfig.flagVariationsMap[flagKey];
  var result = find(variations, function(item) {
    return item.key === variationKey;
  });
  if (result) {
    return result;
  }
  return null;
};
var getFeatureFromKey = function(projectConfig, featureKey, logger2) {
  if (projectConfig.featureKeyMap.hasOwnProperty(featureKey)) {
    var feature = projectConfig.featureKeyMap[featureKey];
    if (feature) {
      return feature;
    }
  }
  logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.FEATURE_NOT_IN_DATAFILE, MODULE_NAME$1, featureKey);
  return null;
};
var getVariableForFeature = function(projectConfig, featureKey, variableKey, logger2) {
  var feature = projectConfig.featureKeyMap[featureKey];
  if (!feature) {
    logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.FEATURE_NOT_IN_DATAFILE, MODULE_NAME$1, featureKey);
    return null;
  }
  var variable = feature.variableKeyMap[variableKey];
  if (!variable) {
    logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.VARIABLE_KEY_NOT_IN_DATAFILE, MODULE_NAME$1, variableKey, featureKey);
    return null;
  }
  return variable;
};
var getVariableValueForVariation = function(projectConfig, variable, variation, logger2) {
  if (!variable || !variation) {
    return null;
  }
  if (!projectConfig.variationVariableUsageMap.hasOwnProperty(variation.id)) {
    logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.VARIATION_ID_NOT_IN_DATAFILE_NO_EXPERIMENT, MODULE_NAME$1, variation.id);
    return null;
  }
  var variableUsages = projectConfig.variationVariableUsageMap[variation.id];
  var variableUsage = variableUsages[variable.id];
  return variableUsage ? variableUsage.value : null;
};
var getTypeCastValue = function(variableValue, variableType, logger2) {
  var castValue;
  switch (variableType) {
    case FEATURE_VARIABLE_TYPES.BOOLEAN:
      if (variableValue !== "true" && variableValue !== "false") {
        logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.UNABLE_TO_CAST_VALUE, MODULE_NAME$1, variableValue, variableType);
        castValue = null;
      } else {
        castValue = variableValue === "true";
      }
      break;
    case FEATURE_VARIABLE_TYPES.INTEGER:
      castValue = parseInt(variableValue, 10);
      if (isNaN(castValue)) {
        logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.UNABLE_TO_CAST_VALUE, MODULE_NAME$1, variableValue, variableType);
        castValue = null;
      }
      break;
    case FEATURE_VARIABLE_TYPES.DOUBLE:
      castValue = parseFloat(variableValue);
      if (isNaN(castValue)) {
        logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.UNABLE_TO_CAST_VALUE, MODULE_NAME$1, variableValue, variableType);
        castValue = null;
      }
      break;
    case FEATURE_VARIABLE_TYPES.JSON:
      try {
        castValue = JSON.parse(variableValue);
      } catch (e) {
        logger2.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.UNABLE_TO_CAST_VALUE, MODULE_NAME$1, variableValue, variableType);
        castValue = null;
      }
      break;
    default:
      castValue = variableValue;
      break;
  }
  return castValue;
};
var getAudiencesById = function(projectConfig) {
  return projectConfig.audiencesById;
};
var eventWithKeyExists = function(projectConfig, eventKey) {
  return projectConfig.eventKeyMap.hasOwnProperty(eventKey);
};
var isFeatureExperiment = function(projectConfig, experimentId) {
  return projectConfig.experimentFeatureMap.hasOwnProperty(experimentId);
};
var toDatafile = function(projectConfig) {
  return projectConfig.__datafileStr;
};
var tryCreatingProjectConfig = function(config2) {
  var newDatafileObj;
  try {
    newDatafileObj = configValidator.validateDatafile(config2.datafile);
  } catch (error) {
    return { configObj: null, error };
  }
  if (config2.jsonSchemaValidator) {
    try {
      config2.jsonSchemaValidator.validate(newDatafileObj);
      config2.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.VALID_DATAFILE, MODULE_NAME$1);
    } catch (error) {
      return { configObj: null, error };
    }
  } else {
    config2.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.SKIPPING_JSON_VALIDATION, MODULE_NAME$1);
  }
  var createProjectConfigArgs = [newDatafileObj];
  if (typeof config2.datafile === "string") {
    createProjectConfigArgs.push(config2.datafile);
  }
  var newConfigObj = createProjectConfig.apply(void 0, createProjectConfigArgs);
  return {
    configObj: newConfigObj,
    error: null
  };
};
var getSendFlagDecisionsValue = function(projectConfig) {
  return !!projectConfig.sendFlagDecisions;
};
var logger = lib$2.getLogger();
var MODULE_NAME$2 = "PROJECT_CONFIG_MANAGER";
function getErrorMessage(maybeError, defaultMessage) {
  if (maybeError instanceof Error) {
    return maybeError.message;
  }
  return defaultMessage || "Unknown error";
}
var ProjectConfigManager = (
  /** @class */
  function() {
    function ProjectConfigManager2(config2) {
      this.updateListeners = [];
      this.configObj = null;
      this.optimizelyConfigObj = null;
      this.datafileManager = null;
      try {
        this.jsonSchemaValidator = config2.jsonSchemaValidator;
        if (!config2.datafile && !config2.sdkKey) {
          var datafileAndSdkKeyMissingError = new Error(sprintf(ERROR_MESSAGES.DATAFILE_AND_SDK_KEY_MISSING, MODULE_NAME$2));
          this.readyPromise = Promise.resolve({
            success: false,
            reason: getErrorMessage(datafileAndSdkKeyMissingError)
          });
          logger.error(datafileAndSdkKeyMissingError);
          return;
        }
        var handleNewDatafileException = null;
        if (config2.datafile) {
          handleNewDatafileException = this.handleNewDatafile(config2.datafile);
        }
        if (config2.sdkKey && config2.datafileManager) {
          this.datafileManager = config2.datafileManager;
          this.datafileManager.start();
          this.readyPromise = this.datafileManager.onReady().then(this.onDatafileManagerReadyFulfill.bind(this), this.onDatafileManagerReadyReject.bind(this));
          this.datafileManager.on("update", this.onDatafileManagerUpdate.bind(this));
        } else if (this.configObj) {
          this.readyPromise = Promise.resolve({
            success: true
          });
        } else {
          this.readyPromise = Promise.resolve({
            success: false,
            reason: getErrorMessage(handleNewDatafileException, "Invalid datafile")
          });
        }
      } catch (ex) {
        logger.error(ex);
        this.readyPromise = Promise.resolve({
          success: false,
          reason: getErrorMessage(ex, "Error in initialize")
        });
      }
    }
    ProjectConfigManager2.prototype.onDatafileManagerReadyFulfill = function() {
      if (this.datafileManager) {
        var newDatafileError = this.handleNewDatafile(this.datafileManager.get());
        if (newDatafileError) {
          return {
            success: false,
            reason: getErrorMessage(newDatafileError)
          };
        }
        return { success: true };
      }
      return {
        success: false,
        reason: getErrorMessage(null, "Datafile manager is not provided")
      };
    };
    ProjectConfigManager2.prototype.onDatafileManagerReadyReject = function(err) {
      return {
        success: false,
        reason: getErrorMessage(err, "Failed to become ready")
      };
    };
    ProjectConfigManager2.prototype.onDatafileManagerUpdate = function() {
      if (this.datafileManager) {
        this.handleNewDatafile(this.datafileManager.get());
      }
    };
    ProjectConfigManager2.prototype.handleNewDatafile = function(newDatafile) {
      var _a = tryCreatingProjectConfig({
        datafile: newDatafile,
        jsonSchemaValidator: this.jsonSchemaValidator,
        logger
      }), configObj = _a.configObj, error = _a.error;
      if (error) {
        logger.error(error);
      } else {
        var oldRevision = this.configObj ? this.configObj.revision : "null";
        if (configObj && oldRevision !== configObj.revision) {
          this.configObj = configObj;
          this.optimizelyConfigObj = null;
          this.updateListeners.forEach(function(listener) {
            return listener(configObj);
          });
        }
      }
      return error;
    };
    ProjectConfigManager2.prototype.getConfig = function() {
      return this.configObj;
    };
    ProjectConfigManager2.prototype.getOptimizelyConfig = function() {
      if (!this.optimizelyConfigObj && this.configObj) {
        this.optimizelyConfigObj = createOptimizelyConfig(this.configObj, toDatafile(this.configObj));
      }
      return this.optimizelyConfigObj;
    };
    ProjectConfigManager2.prototype.onReady = function() {
      return this.readyPromise;
    };
    ProjectConfigManager2.prototype.onUpdate = function(listener) {
      var _this = this;
      this.updateListeners.push(listener);
      return function() {
        var index2 = _this.updateListeners.indexOf(listener);
        if (index2 > -1) {
          _this.updateListeners.splice(index2, 1);
        }
      };
    };
    ProjectConfigManager2.prototype.stop = function() {
      if (this.datafileManager) {
        this.datafileManager.stop();
      }
      this.updateListeners = [];
    };
    return ProjectConfigManager2;
  }()
);
function createProjectConfigManager(config2) {
  return new ProjectConfigManager(config2);
}
var HASH_SEED = 1;
var MAX_HASH_VALUE = Math.pow(2, 32);
var MAX_TRAFFIC_VALUE = 1e4;
var MODULE_NAME$3 = "BUCKETER";
var RANDOM_POLICY = "random";
var bucket = function(bucketerParams) {
  var decideReasons = [];
  var experiment = bucketerParams.experimentIdMap[bucketerParams.experimentId];
  var groupId = experiment["groupId"];
  if (groupId) {
    var group = bucketerParams.groupIdMap[groupId];
    if (!group) {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_GROUP_ID, MODULE_NAME$3, groupId));
    }
    if (group.policy === RANDOM_POLICY) {
      var bucketedExperimentId = bucketUserIntoExperiment(group, bucketerParams.bucketingId, bucketerParams.userId, bucketerParams.logger);
      if (bucketedExperimentId === null) {
        bucketerParams.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_NOT_IN_ANY_EXPERIMENT, MODULE_NAME$3, bucketerParams.userId, groupId);
        decideReasons.push([
          LOG_MESSAGES.USER_NOT_IN_ANY_EXPERIMENT,
          MODULE_NAME$3,
          bucketerParams.userId,
          groupId
        ]);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      if (bucketedExperimentId !== bucketerParams.experimentId) {
        bucketerParams.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP, MODULE_NAME$3, bucketerParams.userId, bucketerParams.experimentKey, groupId);
        decideReasons.push([
          LOG_MESSAGES.USER_NOT_BUCKETED_INTO_EXPERIMENT_IN_GROUP,
          MODULE_NAME$3,
          bucketerParams.userId,
          bucketerParams.experimentKey,
          groupId
        ]);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      bucketerParams.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP, MODULE_NAME$3, bucketerParams.userId, bucketerParams.experimentKey, groupId);
      decideReasons.push([
        LOG_MESSAGES.USER_BUCKETED_INTO_EXPERIMENT_IN_GROUP,
        MODULE_NAME$3,
        bucketerParams.userId,
        bucketerParams.experimentKey,
        groupId
      ]);
    }
  }
  var bucketingId = "" + bucketerParams.bucketingId + bucketerParams.experimentId;
  var bucketValue = _generateBucketValue(bucketingId);
  bucketerParams.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, MODULE_NAME$3, bucketValue, bucketerParams.userId);
  decideReasons.push([
    LOG_MESSAGES.USER_ASSIGNED_TO_EXPERIMENT_BUCKET,
    MODULE_NAME$3,
    bucketValue,
    bucketerParams.userId
  ]);
  var entityId = _findBucket(bucketValue, bucketerParams.trafficAllocationConfig);
  if (entityId !== null) {
    if (!bucketerParams.variationIdMap[entityId]) {
      if (entityId) {
        bucketerParams.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.INVALID_VARIATION_ID, MODULE_NAME$3);
        decideReasons.push([LOG_MESSAGES.INVALID_VARIATION_ID, MODULE_NAME$3]);
      }
      return {
        result: null,
        reasons: decideReasons
      };
    }
  }
  return {
    result: entityId,
    reasons: decideReasons
  };
};
var bucketUserIntoExperiment = function(group, bucketingId, userId, logger2) {
  var bucketingKey = "" + bucketingId + group.id;
  var bucketValue = _generateBucketValue(bucketingKey);
  logger2.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_ASSIGNED_TO_EXPERIMENT_BUCKET, MODULE_NAME$3, bucketValue, userId);
  var trafficAllocationConfig = group.trafficAllocation;
  var bucketedExperimentId = _findBucket(bucketValue, trafficAllocationConfig);
  return bucketedExperimentId;
};
var _findBucket = function(bucketValue, trafficAllocationConfig) {
  for (var i = 0; i < trafficAllocationConfig.length; i++) {
    if (bucketValue < trafficAllocationConfig[i].endOfRange) {
      return trafficAllocationConfig[i].entityId;
    }
  }
  return null;
};
var _generateBucketValue = function(bucketingKey) {
  try {
    var hashValue = murmurhash.v3(bucketingKey, HASH_SEED);
    var ratio = hashValue / MAX_HASH_VALUE;
    return Math.floor(ratio * MAX_TRAFFIC_VALUE);
  } catch (ex) {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_BUCKETING_ID, MODULE_NAME$3, bucketingKey, ex.message));
  }
};
var MODULE_NAME$4 = "SEMANTIC VERSION";
var logger$1 = lib$2.getLogger();
function isNumber$1(content) {
  return /^\d+$/.test(content);
}
function isPreReleaseVersion(version) {
  var preReleaseIndex = version.indexOf(
    "-"
    /* PRE_RELEASE_VERSION_DELIMITER */
  );
  var buildIndex = version.indexOf(
    "+"
    /* BUILD_VERSION_DELIMITER */
  );
  if (preReleaseIndex < 0) {
    return false;
  }
  if (buildIndex < 0) {
    return true;
  }
  return preReleaseIndex < buildIndex;
}
function isBuildVersion(version) {
  var preReleaseIndex = version.indexOf(
    "-"
    /* PRE_RELEASE_VERSION_DELIMITER */
  );
  var buildIndex = version.indexOf(
    "+"
    /* BUILD_VERSION_DELIMITER */
  );
  if (buildIndex < 0) {
    return false;
  }
  if (preReleaseIndex < 0) {
    return true;
  }
  return buildIndex < preReleaseIndex;
}
function hasWhiteSpaces(version) {
  return /\s/.test(version);
}
function splitVersion(version) {
  var targetPrefix = version;
  var targetSuffix = "";
  if (hasWhiteSpaces(version)) {
    logger$1.warn(LOG_MESSAGES.UNKNOWN_MATCH_TYPE, MODULE_NAME$4, version);
    return null;
  }
  if (isPreReleaseVersion(version)) {
    targetPrefix = version.substring(0, version.indexOf(
      "-"
      /* PRE_RELEASE_VERSION_DELIMITER */
    ));
    targetSuffix = version.substring(version.indexOf(
      "-"
      /* PRE_RELEASE_VERSION_DELIMITER */
    ) + 1);
  } else if (isBuildVersion(version)) {
    targetPrefix = version.substring(0, version.indexOf(
      "+"
      /* BUILD_VERSION_DELIMITER */
    ));
    targetSuffix = version.substring(version.indexOf(
      "+"
      /* BUILD_VERSION_DELIMITER */
    ) + 1);
  }
  if (typeof targetPrefix !== "string" || typeof targetSuffix !== "string") {
    return null;
  }
  var dotCount = targetPrefix.split(".").length - 1;
  if (dotCount > 2) {
    logger$1.warn(LOG_MESSAGES.UNKNOWN_MATCH_TYPE, MODULE_NAME$4, version);
    return null;
  }
  var targetVersionParts = targetPrefix.split(".");
  if (targetVersionParts.length != dotCount + 1) {
    logger$1.warn(LOG_MESSAGES.UNKNOWN_MATCH_TYPE, MODULE_NAME$4, version);
    return null;
  }
  for (var _i = 0, targetVersionParts_1 = targetVersionParts; _i < targetVersionParts_1.length; _i++) {
    var part = targetVersionParts_1[_i];
    if (!isNumber$1(part)) {
      logger$1.warn(LOG_MESSAGES.UNKNOWN_MATCH_TYPE, MODULE_NAME$4, version);
      return null;
    }
  }
  if (targetSuffix) {
    targetVersionParts.push(targetSuffix);
  }
  return targetVersionParts;
}
function compareVersion(conditionsVersion, userProvidedVersion) {
  var userVersionParts = splitVersion(userProvidedVersion);
  var conditionsVersionParts = splitVersion(conditionsVersion);
  if (!userVersionParts || !conditionsVersionParts) {
    return null;
  }
  var userVersionPartsLen = userVersionParts.length;
  for (var idx = 0; idx < conditionsVersionParts.length; idx++) {
    if (userVersionPartsLen <= idx) {
      return isPreReleaseVersion(conditionsVersion) || isBuildVersion(conditionsVersion) ? 1 : -1;
    } else if (!isNumber$1(userVersionParts[idx])) {
      if (userVersionParts[idx] < conditionsVersionParts[idx]) {
        return isPreReleaseVersion(conditionsVersion) && !isPreReleaseVersion(userProvidedVersion) ? 1 : -1;
      } else if (userVersionParts[idx] > conditionsVersionParts[idx]) {
        return !isPreReleaseVersion(conditionsVersion) && isPreReleaseVersion(userProvidedVersion) ? -1 : 1;
      }
    } else {
      var userVersionPart = parseInt(userVersionParts[idx]);
      var conditionsVersionPart = parseInt(conditionsVersionParts[idx]);
      if (userVersionPart > conditionsVersionPart) {
        return 1;
      } else if (userVersionPart < conditionsVersionPart) {
        return -1;
      }
    }
  }
  if (isPreReleaseVersion(userProvidedVersion) && !isPreReleaseVersion(conditionsVersion)) {
    return -1;
  }
  return 0;
}
var MODULE_NAME$5 = "CUSTOM_ATTRIBUTE_CONDITION_EVALUATOR";
var logger$2 = lib$2.getLogger();
var EXACT_MATCH_TYPE = "exact";
var EXISTS_MATCH_TYPE = "exists";
var GREATER_OR_EQUAL_THAN_MATCH_TYPE = "ge";
var GREATER_THAN_MATCH_TYPE = "gt";
var LESS_OR_EQUAL_THAN_MATCH_TYPE = "le";
var LESS_THAN_MATCH_TYPE = "lt";
var SEMVER_EXACT_MATCH_TYPE = "semver_eq";
var SEMVER_GREATER_OR_EQUAL_THAN_MATCH_TYPE = "semver_ge";
var SEMVER_GREATER_THAN_MATCH_TYPE = "semver_gt";
var SEMVER_LESS_OR_EQUAL_THAN_MATCH_TYPE = "semver_le";
var SEMVER_LESS_THAN_MATCH_TYPE = "semver_lt";
var SUBSTRING_MATCH_TYPE = "substring";
var MATCH_TYPES = [
  EXACT_MATCH_TYPE,
  EXISTS_MATCH_TYPE,
  GREATER_THAN_MATCH_TYPE,
  GREATER_OR_EQUAL_THAN_MATCH_TYPE,
  LESS_THAN_MATCH_TYPE,
  LESS_OR_EQUAL_THAN_MATCH_TYPE,
  SUBSTRING_MATCH_TYPE,
  SEMVER_EXACT_MATCH_TYPE,
  SEMVER_LESS_THAN_MATCH_TYPE,
  SEMVER_LESS_OR_EQUAL_THAN_MATCH_TYPE,
  SEMVER_GREATER_THAN_MATCH_TYPE,
  SEMVER_GREATER_OR_EQUAL_THAN_MATCH_TYPE
];
var EVALUATORS_BY_MATCH_TYPE = {};
EVALUATORS_BY_MATCH_TYPE[EXACT_MATCH_TYPE] = exactEvaluator;
EVALUATORS_BY_MATCH_TYPE[EXISTS_MATCH_TYPE] = existsEvaluator;
EVALUATORS_BY_MATCH_TYPE[GREATER_THAN_MATCH_TYPE] = greaterThanEvaluator;
EVALUATORS_BY_MATCH_TYPE[GREATER_OR_EQUAL_THAN_MATCH_TYPE] = greaterThanOrEqualEvaluator;
EVALUATORS_BY_MATCH_TYPE[LESS_THAN_MATCH_TYPE] = lessThanEvaluator;
EVALUATORS_BY_MATCH_TYPE[LESS_OR_EQUAL_THAN_MATCH_TYPE] = lessThanOrEqualEvaluator;
EVALUATORS_BY_MATCH_TYPE[SUBSTRING_MATCH_TYPE] = substringEvaluator;
EVALUATORS_BY_MATCH_TYPE[SEMVER_EXACT_MATCH_TYPE] = semverEqualEvaluator;
EVALUATORS_BY_MATCH_TYPE[SEMVER_GREATER_THAN_MATCH_TYPE] = semverGreaterThanEvaluator;
EVALUATORS_BY_MATCH_TYPE[SEMVER_GREATER_OR_EQUAL_THAN_MATCH_TYPE] = semverGreaterThanOrEqualEvaluator;
EVALUATORS_BY_MATCH_TYPE[SEMVER_LESS_THAN_MATCH_TYPE] = semverLessThanEvaluator;
EVALUATORS_BY_MATCH_TYPE[SEMVER_LESS_OR_EQUAL_THAN_MATCH_TYPE] = semverLessThanOrEqualEvaluator;
function evaluate$1(condition, userAttributes) {
  var conditionMatch = condition.match;
  if (typeof conditionMatch !== "undefined" && MATCH_TYPES.indexOf(conditionMatch) === -1) {
    logger$2.warn(LOG_MESSAGES.UNKNOWN_MATCH_TYPE, MODULE_NAME$5, JSON.stringify(condition));
    return null;
  }
  var attributeKey = condition.name;
  if (!userAttributes.hasOwnProperty(attributeKey) && conditionMatch != EXISTS_MATCH_TYPE) {
    logger$2.debug(LOG_MESSAGES.MISSING_ATTRIBUTE_VALUE, MODULE_NAME$5, JSON.stringify(condition), attributeKey);
    return null;
  }
  var evaluatorForMatch;
  if (!conditionMatch) {
    evaluatorForMatch = exactEvaluator;
  } else {
    evaluatorForMatch = EVALUATORS_BY_MATCH_TYPE[conditionMatch] || exactEvaluator;
  }
  return evaluatorForMatch(condition, userAttributes);
}
function isValueTypeValidForExactConditions(value) {
  return typeof value === "string" || typeof value === "boolean" || fns.isNumber(value);
}
function exactEvaluator(condition, userAttributes) {
  var conditionValue = condition.value;
  var conditionValueType = typeof conditionValue;
  var conditionName = condition.name;
  var userValue = userAttributes[conditionName];
  var userValueType = typeof userValue;
  if (!isValueTypeValidForExactConditions(conditionValue) || fns.isNumber(conditionValue) && !fns.isSafeInteger(conditionValue)) {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_CONDITION_VALUE, MODULE_NAME$5, JSON.stringify(condition));
    return null;
  }
  if (userValue === null) {
    logger$2.debug(LOG_MESSAGES.UNEXPECTED_TYPE_NULL, MODULE_NAME$5, JSON.stringify(condition), conditionName);
    return null;
  }
  if (!isValueTypeValidForExactConditions(userValue) || conditionValueType !== userValueType) {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_TYPE, MODULE_NAME$5, JSON.stringify(condition), userValueType, conditionName);
    return null;
  }
  if (fns.isNumber(userValue) && !fns.isSafeInteger(userValue)) {
    logger$2.warn(LOG_MESSAGES.OUT_OF_BOUNDS, MODULE_NAME$5, JSON.stringify(condition), conditionName);
    return null;
  }
  return conditionValue === userValue;
}
function existsEvaluator(condition, userAttributes) {
  var userValue = userAttributes[condition.name];
  return typeof userValue !== "undefined" && userValue !== null;
}
function validateValuesForNumericCondition(condition, userAttributes) {
  var conditionName = condition.name;
  var userValue = userAttributes[conditionName];
  var userValueType = typeof userValue;
  var conditionValue = condition.value;
  if (conditionValue === null || !fns.isSafeInteger(conditionValue)) {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_CONDITION_VALUE, MODULE_NAME$5, JSON.stringify(condition));
    return false;
  }
  if (userValue === null) {
    logger$2.debug(LOG_MESSAGES.UNEXPECTED_TYPE_NULL, MODULE_NAME$5, JSON.stringify(condition), conditionName);
    return false;
  }
  if (!fns.isNumber(userValue)) {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_TYPE, MODULE_NAME$5, JSON.stringify(condition), userValueType, conditionName);
    return false;
  }
  if (!fns.isSafeInteger(userValue)) {
    logger$2.warn(LOG_MESSAGES.OUT_OF_BOUNDS, MODULE_NAME$5, JSON.stringify(condition), conditionName);
    return false;
  }
  return true;
}
function greaterThanEvaluator(condition, userAttributes) {
  var userValue = userAttributes[condition.name];
  var conditionValue = condition.value;
  if (!validateValuesForNumericCondition(condition, userAttributes) || conditionValue === null) {
    return null;
  }
  return userValue > conditionValue;
}
function greaterThanOrEqualEvaluator(condition, userAttributes) {
  var userValue = userAttributes[condition.name];
  var conditionValue = condition.value;
  if (!validateValuesForNumericCondition(condition, userAttributes) || conditionValue === null) {
    return null;
  }
  return userValue >= conditionValue;
}
function lessThanEvaluator(condition, userAttributes) {
  var userValue = userAttributes[condition.name];
  var conditionValue = condition.value;
  if (!validateValuesForNumericCondition(condition, userAttributes) || conditionValue === null) {
    return null;
  }
  return userValue < conditionValue;
}
function lessThanOrEqualEvaluator(condition, userAttributes) {
  var userValue = userAttributes[condition.name];
  var conditionValue = condition.value;
  if (!validateValuesForNumericCondition(condition, userAttributes) || conditionValue === null) {
    return null;
  }
  return userValue <= conditionValue;
}
function substringEvaluator(condition, userAttributes) {
  var conditionName = condition.name;
  var userValue = userAttributes[condition.name];
  var userValueType = typeof userValue;
  var conditionValue = condition.value;
  if (typeof conditionValue !== "string") {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_CONDITION_VALUE, MODULE_NAME$5, JSON.stringify(condition));
    return null;
  }
  if (userValue === null) {
    logger$2.debug(LOG_MESSAGES.UNEXPECTED_TYPE_NULL, MODULE_NAME$5, JSON.stringify(condition), conditionName);
    return null;
  }
  if (typeof userValue !== "string") {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_TYPE, MODULE_NAME$5, JSON.stringify(condition), userValueType, conditionName);
    return null;
  }
  return userValue.indexOf(conditionValue) !== -1;
}
function evaluateSemanticVersion(condition, userAttributes) {
  var conditionName = condition.name;
  var userValue = userAttributes[conditionName];
  var userValueType = typeof userValue;
  var conditionValue = condition.value;
  if (typeof conditionValue !== "string") {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_CONDITION_VALUE, MODULE_NAME$5, JSON.stringify(condition));
    return null;
  }
  if (userValue === null) {
    logger$2.debug(LOG_MESSAGES.UNEXPECTED_TYPE_NULL, MODULE_NAME$5, JSON.stringify(condition), conditionName);
    return null;
  }
  if (typeof userValue !== "string") {
    logger$2.warn(LOG_MESSAGES.UNEXPECTED_TYPE, MODULE_NAME$5, JSON.stringify(condition), userValueType, conditionName);
    return null;
  }
  return compareVersion(conditionValue, userValue);
}
function semverEqualEvaluator(condition, userAttributes) {
  var result = evaluateSemanticVersion(condition, userAttributes);
  if (result === null) {
    return null;
  }
  return result === 0;
}
function semverGreaterThanEvaluator(condition, userAttributes) {
  var result = evaluateSemanticVersion(condition, userAttributes);
  if (result === null) {
    return null;
  }
  return result > 0;
}
function semverLessThanEvaluator(condition, userAttributes) {
  var result = evaluateSemanticVersion(condition, userAttributes);
  if (result === null) {
    return null;
  }
  return result < 0;
}
function semverGreaterThanOrEqualEvaluator(condition, userAttributes) {
  var result = evaluateSemanticVersion(condition, userAttributes);
  if (result === null) {
    return null;
  }
  return result >= 0;
}
function semverLessThanOrEqualEvaluator(condition, userAttributes) {
  var result = evaluateSemanticVersion(condition, userAttributes);
  if (result === null) {
    return null;
  }
  return result <= 0;
}
var customAttributeConditionEvaluator = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  evaluate: evaluate$1
});
var logger$3 = lib$2.getLogger();
var MODULE_NAME$6 = "AUDIENCE_EVALUATOR";
var AudienceEvaluator = (
  /** @class */
  function() {
    function AudienceEvaluator2(UNSTABLE_conditionEvaluators) {
      this.typeToEvaluatorMap = fns.assign({}, UNSTABLE_conditionEvaluators, {
        custom_attribute: customAttributeConditionEvaluator
      });
    }
    AudienceEvaluator2.prototype.evaluate = function(audienceConditions, audiencesById, userAttributes) {
      var _this = this;
      if (userAttributes === void 0) {
        userAttributes = {};
      }
      if (!audienceConditions || audienceConditions.length === 0) {
        return true;
      }
      var evaluateAudience = function(audienceId) {
        var audience = audiencesById[audienceId];
        if (audience) {
          logger$3.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.EVALUATING_AUDIENCE, MODULE_NAME$6, audienceId, JSON.stringify(audience.conditions));
          var result = evaluate(audience.conditions, _this.evaluateConditionWithUserAttributes.bind(_this, userAttributes));
          var resultText = result === null ? "UNKNOWN" : result.toString().toUpperCase();
          logger$3.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.AUDIENCE_EVALUATION_RESULT, MODULE_NAME$6, audienceId, resultText);
          return result;
        }
        return null;
      };
      return !!evaluate(audienceConditions, evaluateAudience);
    };
    AudienceEvaluator2.prototype.evaluateConditionWithUserAttributes = function(userAttributes, condition) {
      var evaluator = this.typeToEvaluatorMap[condition.type];
      if (!evaluator) {
        logger$3.log(LOG_LEVEL.WARNING, LOG_MESSAGES.UNKNOWN_CONDITION_TYPE, MODULE_NAME$6, JSON.stringify(condition));
        return null;
      }
      try {
        return evaluator.evaluate(condition, userAttributes);
      } catch (err) {
        logger$3.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.CONDITION_EVALUATOR_ERROR, MODULE_NAME$6, condition.type, err.message);
      }
      return null;
    };
    return AudienceEvaluator2;
  }()
);
var createAudienceEvaluator = function(UNSTABLE_conditionEvaluators) {
  return new AudienceEvaluator(UNSTABLE_conditionEvaluators);
};
function validate$1$1(input) {
  return typeof input === "string" && input !== "";
}
var MODULE_NAME$7 = "DECISION_SERVICE";
var DecisionService = (
  /** @class */
  function() {
    function DecisionService2(options) {
      this.audienceEvaluator = createAudienceEvaluator(options.UNSTABLE_conditionEvaluators);
      this.forcedVariationMap = {};
      this.logger = options.logger;
      this.userProfileService = options.userProfileService || null;
    }
    DecisionService2.prototype.getVariation = function(configObj, experiment, user, options) {
      if (options === void 0) {
        options = {};
      }
      var userId = user.getUserId();
      var attributes = user.getAttributes();
      var bucketingId = this.getBucketingId(userId, attributes);
      var decideReasons = [];
      var experimentKey = experiment.key;
      if (!this.checkIfExperimentIsActive(configObj, experimentKey)) {
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.EXPERIMENT_NOT_RUNNING, MODULE_NAME$7, experimentKey);
        decideReasons.push([LOG_MESSAGES.EXPERIMENT_NOT_RUNNING, MODULE_NAME$7, experimentKey]);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      var decisionForcedVariation = this.getForcedVariation(configObj, experimentKey, userId);
      decideReasons.push.apply(decideReasons, decisionForcedVariation.reasons);
      var forcedVariationKey = decisionForcedVariation.result;
      if (forcedVariationKey) {
        return {
          result: forcedVariationKey,
          reasons: decideReasons
        };
      }
      var decisionWhitelistedVariation = this.getWhitelistedVariation(experiment, userId);
      decideReasons.push.apply(decideReasons, decisionWhitelistedVariation.reasons);
      var variation = decisionWhitelistedVariation.result;
      if (variation) {
        return {
          result: variation.key,
          reasons: decideReasons
        };
      }
      var shouldIgnoreUPS = options[OptimizelyDecideOption.IGNORE_USER_PROFILE_SERVICE];
      var experimentBucketMap = this.resolveExperimentBucketMap(userId, attributes);
      if (!shouldIgnoreUPS) {
        variation = this.getStoredVariation(configObj, experiment, userId, experimentBucketMap);
        if (variation) {
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.RETURNING_STORED_VARIATION, MODULE_NAME$7, variation.key, experimentKey, userId);
          decideReasons.push([
            LOG_MESSAGES.RETURNING_STORED_VARIATION,
            MODULE_NAME$7,
            variation.key,
            experimentKey,
            userId
          ]);
          return {
            result: variation.key,
            reasons: decideReasons
          };
        }
      }
      var decisionifUserIsInAudience = this.checkIfUserIsInAudience(configObj, experiment, AUDIENCE_EVALUATION_TYPES.EXPERIMENT, attributes, "");
      decideReasons.push.apply(decideReasons, decisionifUserIsInAudience.reasons);
      if (!decisionifUserIsInAudience.result) {
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_NOT_IN_EXPERIMENT, MODULE_NAME$7, userId, experimentKey);
        decideReasons.push([
          LOG_MESSAGES.USER_NOT_IN_EXPERIMENT,
          MODULE_NAME$7,
          userId,
          experimentKey
        ]);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      var bucketerParams = this.buildBucketerParams(configObj, experiment, bucketingId, userId);
      var decisionVariation = bucket(bucketerParams);
      decideReasons.push.apply(decideReasons, decisionVariation.reasons);
      var variationId = decisionVariation.result;
      if (variationId) {
        variation = configObj.variationIdMap[variationId];
      }
      if (!variation) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_HAS_NO_VARIATION, MODULE_NAME$7, userId, experimentKey);
        decideReasons.push([
          LOG_MESSAGES.USER_HAS_NO_VARIATION,
          MODULE_NAME$7,
          userId,
          experimentKey
        ]);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_HAS_VARIATION, MODULE_NAME$7, userId, variation.key, experimentKey);
      decideReasons.push([
        LOG_MESSAGES.USER_HAS_VARIATION,
        MODULE_NAME$7,
        userId,
        variation.key,
        experimentKey
      ]);
      if (!shouldIgnoreUPS) {
        this.saveUserProfile(experiment, variation, userId, experimentBucketMap);
      }
      return {
        result: variation.key,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.resolveExperimentBucketMap = function(userId, attributes) {
      attributes = attributes || {};
      var userProfile = this.getUserProfile(userId) || {};
      var attributeExperimentBucketMap = attributes[CONTROL_ATTRIBUTES.STICKY_BUCKETING_KEY];
      return fns.assign({}, userProfile.experiment_bucket_map, attributeExperimentBucketMap);
    };
    DecisionService2.prototype.checkIfExperimentIsActive = function(configObj, experimentKey) {
      return isActive(configObj, experimentKey);
    };
    DecisionService2.prototype.getWhitelistedVariation = function(experiment, userId) {
      var decideReasons = [];
      if (experiment.forcedVariations && experiment.forcedVariations.hasOwnProperty(userId)) {
        var forcedVariationKey = experiment.forcedVariations[userId];
        if (experiment.variationKeyMap.hasOwnProperty(forcedVariationKey)) {
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_FORCED_IN_VARIATION, MODULE_NAME$7, userId, forcedVariationKey);
          decideReasons.push([
            LOG_MESSAGES.USER_FORCED_IN_VARIATION,
            MODULE_NAME$7,
            userId,
            forcedVariationKey
          ]);
          return {
            result: experiment.variationKeyMap[forcedVariationKey],
            reasons: decideReasons
          };
        } else {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.FORCED_BUCKETING_FAILED, MODULE_NAME$7, forcedVariationKey, userId);
          decideReasons.push([
            LOG_MESSAGES.FORCED_BUCKETING_FAILED,
            MODULE_NAME$7,
            forcedVariationKey,
            userId
          ]);
          return {
            result: null,
            reasons: decideReasons
          };
        }
      }
      return {
        result: null,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.checkIfUserIsInAudience = function(configObj, experiment, evaluationAttribute, attributes, loggingKey) {
      var decideReasons = [];
      var experimentAudienceConditions = getExperimentAudienceConditions(configObj, experiment.id);
      var audiencesById = getAudiencesById(configObj);
      this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.EVALUATING_AUDIENCES_COMBINED, MODULE_NAME$7, evaluationAttribute, loggingKey || experiment.key, JSON.stringify(experimentAudienceConditions));
      decideReasons.push([
        LOG_MESSAGES.EVALUATING_AUDIENCES_COMBINED,
        MODULE_NAME$7,
        evaluationAttribute,
        loggingKey || experiment.key,
        JSON.stringify(experimentAudienceConditions)
      ]);
      var result = this.audienceEvaluator.evaluate(experimentAudienceConditions, audiencesById, attributes);
      this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.AUDIENCE_EVALUATION_RESULT_COMBINED, MODULE_NAME$7, evaluationAttribute, loggingKey || experiment.key, result.toString().toUpperCase());
      decideReasons.push([
        LOG_MESSAGES.AUDIENCE_EVALUATION_RESULT_COMBINED,
        MODULE_NAME$7,
        evaluationAttribute,
        loggingKey || experiment.key,
        result.toString().toUpperCase()
      ]);
      return {
        result,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.buildBucketerParams = function(configObj, experiment, bucketingId, userId) {
      return {
        bucketingId,
        experimentId: experiment.id,
        experimentKey: experiment.key,
        experimentIdMap: configObj.experimentIdMap,
        experimentKeyMap: configObj.experimentKeyMap,
        groupIdMap: configObj.groupIdMap,
        logger: this.logger,
        trafficAllocationConfig: getTrafficAllocation(configObj, experiment.id),
        userId,
        variationIdMap: configObj.variationIdMap
      };
    };
    DecisionService2.prototype.getStoredVariation = function(configObj, experiment, userId, experimentBucketMap) {
      if (experimentBucketMap.hasOwnProperty(experiment.id)) {
        var decision = experimentBucketMap[experiment.id];
        var variationId = decision.variation_id;
        if (configObj.variationIdMap.hasOwnProperty(variationId)) {
          return configObj.variationIdMap[decision.variation_id];
        } else {
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.SAVED_VARIATION_NOT_FOUND, MODULE_NAME$7, userId, variationId, experiment.key);
        }
      }
      return null;
    };
    DecisionService2.prototype.getUserProfile = function(userId) {
      var userProfile = {
        user_id: userId,
        experiment_bucket_map: {}
      };
      if (!this.userProfileService) {
        return userProfile;
      }
      try {
        return this.userProfileService.lookup(userId);
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.USER_PROFILE_LOOKUP_ERROR, MODULE_NAME$7, userId, ex.message);
      }
      return null;
    };
    DecisionService2.prototype.saveUserProfile = function(experiment, variation, userId, experimentBucketMap) {
      if (!this.userProfileService) {
        return;
      }
      try {
        experimentBucketMap[experiment.id] = {
          variation_id: variation.id
        };
        this.userProfileService.save({
          user_id: userId,
          experiment_bucket_map: experimentBucketMap
        });
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.SAVED_VARIATION, MODULE_NAME$7, variation.key, experiment.key, userId);
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.USER_PROFILE_SAVE_ERROR, MODULE_NAME$7, userId, ex.message);
      }
    };
    DecisionService2.prototype.getVariationForFeature = function(configObj, feature, user, options) {
      if (options === void 0) {
        options = {};
      }
      var decideReasons = [];
      var decisionVariation = this.getVariationForFeatureExperiment(configObj, feature, user, options);
      decideReasons.push.apply(decideReasons, decisionVariation.reasons);
      var experimentDecision = decisionVariation.result;
      if (experimentDecision.variation !== null) {
        return {
          result: experimentDecision,
          reasons: decideReasons
        };
      }
      var decisionRolloutVariation = this.getVariationForRollout(configObj, feature, user);
      decideReasons.push.apply(decideReasons, decisionRolloutVariation.reasons);
      var rolloutDecision = decisionRolloutVariation.result;
      var userId = user.getUserId();
      if (rolloutDecision.variation) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_IN_ROLLOUT, MODULE_NAME$7, userId, feature.key);
        decideReasons.push([LOG_MESSAGES.USER_IN_ROLLOUT, MODULE_NAME$7, userId, feature.key]);
        return {
          result: rolloutDecision,
          reasons: decideReasons
        };
      }
      this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_NOT_IN_ROLLOUT, MODULE_NAME$7, userId, feature.key);
      decideReasons.push([LOG_MESSAGES.USER_NOT_IN_ROLLOUT, MODULE_NAME$7, userId, feature.key]);
      return {
        result: rolloutDecision,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.getVariationForFeatureExperiment = function(configObj, feature, user, options) {
      if (options === void 0) {
        options = {};
      }
      var decideReasons = [];
      var variationKey = null;
      var decisionVariation;
      var index2;
      var variationForFeatureExperiment;
      if (feature.experimentIds.length > 0) {
        for (index2 = 0; index2 < feature.experimentIds.length; index2++) {
          var experiment = getExperimentFromId(configObj, feature.experimentIds[index2], this.logger);
          if (experiment) {
            decisionVariation = this.getVariationFromExperimentRule(configObj, feature.key, experiment, user, options);
            decideReasons.push.apply(decideReasons, decisionVariation.reasons);
            variationKey = decisionVariation.result;
            if (variationKey) {
              var variation = null;
              variation = experiment.variationKeyMap[variationKey];
              if (!variation) {
                variation = getFlagVariationByKey(configObj, feature.key, variationKey);
              }
              variationForFeatureExperiment = {
                experiment,
                variation,
                decisionSource: DECISION_SOURCES.FEATURE_TEST
              };
              return {
                result: variationForFeatureExperiment,
                reasons: decideReasons
              };
            }
          }
        }
      } else {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.FEATURE_HAS_NO_EXPERIMENTS, MODULE_NAME$7, feature.key);
        decideReasons.push([LOG_MESSAGES.FEATURE_HAS_NO_EXPERIMENTS, MODULE_NAME$7, feature.key]);
      }
      variationForFeatureExperiment = {
        experiment: null,
        variation: null,
        decisionSource: DECISION_SOURCES.FEATURE_TEST
      };
      return {
        result: variationForFeatureExperiment,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.getVariationForRollout = function(configObj, feature, user) {
      var decideReasons = [];
      var decisionObj;
      if (!feature.rolloutId) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.NO_ROLLOUT_EXISTS, MODULE_NAME$7, feature.key);
        decideReasons.push([LOG_MESSAGES.NO_ROLLOUT_EXISTS, MODULE_NAME$7, feature.key]);
        decisionObj = {
          experiment: null,
          variation: null,
          decisionSource: DECISION_SOURCES.ROLLOUT
        };
        return {
          result: decisionObj,
          reasons: decideReasons
        };
      }
      var rollout = configObj.rolloutIdMap[feature.rolloutId];
      if (!rollout) {
        this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.INVALID_ROLLOUT_ID, MODULE_NAME$7, feature.rolloutId, feature.key);
        decideReasons.push([ERROR_MESSAGES.INVALID_ROLLOUT_ID, MODULE_NAME$7, feature.rolloutId, feature.key]);
        decisionObj = {
          experiment: null,
          variation: null,
          decisionSource: DECISION_SOURCES.ROLLOUT
        };
        return {
          result: decisionObj,
          reasons: decideReasons
        };
      }
      var rolloutRules = rollout.experiments;
      if (rolloutRules.length === 0) {
        this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.ROLLOUT_HAS_NO_EXPERIMENTS, MODULE_NAME$7, feature.rolloutId);
        decideReasons.push([LOG_MESSAGES.ROLLOUT_HAS_NO_EXPERIMENTS, MODULE_NAME$7, feature.rolloutId]);
        decisionObj = {
          experiment: null,
          variation: null,
          decisionSource: DECISION_SOURCES.ROLLOUT
        };
        return {
          result: decisionObj,
          reasons: decideReasons
        };
      }
      var decisionVariation;
      var skipToEveryoneElse;
      var variation;
      var rolloutRule;
      var index2 = 0;
      while (index2 < rolloutRules.length) {
        decisionVariation = this.getVariationFromDeliveryRule(configObj, feature.key, rolloutRules, index2, user);
        decideReasons.push.apply(decideReasons, decisionVariation.reasons);
        variation = decisionVariation.result;
        skipToEveryoneElse = decisionVariation.skipToEveryoneElse;
        if (variation) {
          rolloutRule = configObj.experimentIdMap[rolloutRules[index2].id];
          decisionObj = {
            experiment: rolloutRule,
            variation,
            decisionSource: DECISION_SOURCES.ROLLOUT
          };
          return {
            result: decisionObj,
            reasons: decideReasons
          };
        }
        index2 = skipToEveryoneElse ? rolloutRules.length - 1 : index2 + 1;
      }
      decisionObj = {
        experiment: null,
        variation: null,
        decisionSource: DECISION_SOURCES.ROLLOUT
      };
      return {
        result: decisionObj,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.getBucketingId = function(userId, attributes) {
      var bucketingId = userId;
      if (attributes != null && typeof attributes === "object" && attributes.hasOwnProperty(CONTROL_ATTRIBUTES.BUCKETING_ID)) {
        if (typeof attributes[CONTROL_ATTRIBUTES.BUCKETING_ID] === "string") {
          bucketingId = attributes[CONTROL_ATTRIBUTES.BUCKETING_ID];
          this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.VALID_BUCKETING_ID, MODULE_NAME$7, bucketingId);
        } else {
          this.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.BUCKETING_ID_NOT_STRING, MODULE_NAME$7);
        }
      }
      return bucketingId;
    };
    DecisionService2.prototype.findValidatedForcedDecision = function(config2, user, flagKey, ruleKey) {
      var decideReasons = [];
      var forcedDecision = user.getForcedDecision({ flagKey, ruleKey });
      var variation = null;
      var variationKey;
      var userId = user.getUserId();
      if (config2 && forcedDecision) {
        variationKey = forcedDecision.variationKey;
        variation = getFlagVariationByKey(config2, flagKey, variationKey);
        if (variation) {
          if (ruleKey) {
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED, variationKey, flagKey, ruleKey, userId);
            decideReasons.push([
              LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED,
              variationKey,
              flagKey,
              ruleKey,
              userId
            ]);
          } else {
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED, variationKey, flagKey, userId);
            decideReasons.push([
              LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED,
              variationKey,
              flagKey,
              userId
            ]);
          }
        } else {
          if (ruleKey) {
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID, flagKey, ruleKey, userId);
            decideReasons.push([
              LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_RULE_SPECIFIED_BUT_INVALID,
              flagKey,
              ruleKey,
              userId
            ]);
          } else {
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID, flagKey, userId);
            decideReasons.push([
              LOG_MESSAGES.USER_HAS_FORCED_DECISION_WITH_NO_RULE_SPECIFIED_BUT_INVALID,
              flagKey,
              userId
            ]);
          }
        }
      }
      return {
        result: variation,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.removeForcedVariation = function(userId, experimentId, experimentKey) {
      if (!userId) {
        throw new Error(sprintf(ERROR_MESSAGES.INVALID_USER_ID, MODULE_NAME$7));
      }
      if (this.forcedVariationMap.hasOwnProperty(userId)) {
        delete this.forcedVariationMap[userId][experimentId];
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.VARIATION_REMOVED_FOR_USER, MODULE_NAME$7, experimentKey, userId);
      } else {
        throw new Error(sprintf(ERROR_MESSAGES.USER_NOT_IN_FORCED_VARIATION, MODULE_NAME$7, userId));
      }
    };
    DecisionService2.prototype.setInForcedVariationMap = function(userId, experimentId, variationId) {
      if (this.forcedVariationMap.hasOwnProperty(userId)) {
        this.forcedVariationMap[userId][experimentId] = variationId;
      } else {
        this.forcedVariationMap[userId] = {};
        this.forcedVariationMap[userId][experimentId] = variationId;
      }
      this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_MAPPED_TO_FORCED_VARIATION, MODULE_NAME$7, variationId, experimentId, userId);
    };
    DecisionService2.prototype.getForcedVariation = function(configObj, experimentKey, userId) {
      var decideReasons = [];
      var experimentToVariationMap = this.forcedVariationMap[userId];
      if (!experimentToVariationMap) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_HAS_NO_FORCED_VARIATION, MODULE_NAME$7, userId);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      var experimentId;
      try {
        var experiment = getExperimentFromKey(configObj, experimentKey);
        if (experiment.hasOwnProperty("id")) {
          experimentId = experiment["id"];
        } else {
          this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.IMPROPERLY_FORMATTED_EXPERIMENT, MODULE_NAME$7, experimentKey);
          decideReasons.push([
            ERROR_MESSAGES.IMPROPERLY_FORMATTED_EXPERIMENT,
            MODULE_NAME$7,
            experimentKey
          ]);
          return {
            result: null,
            reasons: decideReasons
          };
        }
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        decideReasons.push(ex.message);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      var variationId = experimentToVariationMap[experimentId];
      if (!variationId) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, MODULE_NAME$7, experimentKey, userId);
        return {
          result: null,
          reasons: decideReasons
        };
      }
      var variationKey = getVariationKeyFromId(configObj, variationId);
      if (variationKey) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_HAS_FORCED_VARIATION, MODULE_NAME$7, variationKey, experimentKey, userId);
        decideReasons.push([
          LOG_MESSAGES.USER_HAS_FORCED_VARIATION,
          MODULE_NAME$7,
          variationKey,
          experimentKey,
          userId
        ]);
      } else {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_HAS_NO_FORCED_VARIATION_FOR_EXPERIMENT, MODULE_NAME$7, experimentKey, userId);
      }
      return {
        result: variationKey,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.setForcedVariation = function(configObj, experimentKey, userId, variationKey) {
      if (variationKey != null && !validate$1$1(variationKey)) {
        this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.INVALID_VARIATION_KEY, MODULE_NAME$7);
        return false;
      }
      var experimentId;
      try {
        var experiment = getExperimentFromKey(configObj, experimentKey);
        if (experiment.hasOwnProperty("id")) {
          experimentId = experiment["id"];
        } else {
          this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.IMPROPERLY_FORMATTED_EXPERIMENT, MODULE_NAME$7, experimentKey);
          return false;
        }
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        return false;
      }
      if (variationKey == null) {
        try {
          this.removeForcedVariation(userId, experimentId, experimentKey);
          return true;
        } catch (ex) {
          this.logger.log(LOG_LEVEL.ERROR, ex.message);
          return false;
        }
      }
      var variationId = getVariationIdFromExperimentAndVariationKey(configObj, experimentKey, variationKey);
      if (!variationId) {
        this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.NO_VARIATION_FOR_EXPERIMENT_KEY, MODULE_NAME$7, variationKey, experimentKey);
        return false;
      }
      try {
        this.setInForcedVariationMap(userId, experimentId, variationId);
        return true;
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        return false;
      }
    };
    DecisionService2.prototype.getVariationFromExperimentRule = function(configObj, flagKey, rule, user, options) {
      if (options === void 0) {
        options = {};
      }
      var decideReasons = [];
      var forcedDecisionResponse = this.findValidatedForcedDecision(configObj, user, flagKey, rule.key);
      decideReasons.push.apply(decideReasons, forcedDecisionResponse.reasons);
      var forcedVariaton = forcedDecisionResponse.result;
      if (forcedVariaton) {
        return {
          result: forcedVariaton.key,
          reasons: decideReasons
        };
      }
      var decisionVariation = this.getVariation(configObj, rule, user, options);
      decideReasons.push.apply(decideReasons, decisionVariation.reasons);
      var variationKey = decisionVariation.result;
      return {
        result: variationKey,
        reasons: decideReasons
      };
    };
    DecisionService2.prototype.getVariationFromDeliveryRule = function(configObj, flagKey, rules, ruleIndex, user) {
      var decideReasons = [];
      var skipToEveryoneElse = false;
      var rule = rules[ruleIndex];
      var forcedDecisionResponse = this.findValidatedForcedDecision(configObj, user, flagKey, rule.key);
      decideReasons.push.apply(decideReasons, forcedDecisionResponse.reasons);
      var forcedVariaton = forcedDecisionResponse.result;
      if (forcedVariaton) {
        return {
          result: forcedVariaton,
          reasons: decideReasons,
          skipToEveryoneElse
        };
      }
      var userId = user.getUserId();
      var attributes = user.getAttributes();
      var bucketingId = this.getBucketingId(userId, attributes);
      var everyoneElse = ruleIndex === rules.length - 1;
      var loggingKey = everyoneElse ? "Everyone Else" : ruleIndex + 1;
      var bucketedVariation = null;
      var bucketerVariationId;
      var bucketerParams;
      var decisionVariation;
      var decisionifUserIsInAudience = this.checkIfUserIsInAudience(configObj, rule, AUDIENCE_EVALUATION_TYPES.RULE, attributes, loggingKey);
      decideReasons.push.apply(decideReasons, decisionifUserIsInAudience.reasons);
      if (decisionifUserIsInAudience.result) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE, MODULE_NAME$7, userId, loggingKey);
        decideReasons.push([
          LOG_MESSAGES.USER_MEETS_CONDITIONS_FOR_TARGETING_RULE,
          MODULE_NAME$7,
          userId,
          loggingKey
        ]);
        bucketerParams = this.buildBucketerParams(configObj, rule, bucketingId, userId);
        decisionVariation = bucket(bucketerParams);
        decideReasons.push.apply(decideReasons, decisionVariation.reasons);
        bucketerVariationId = decisionVariation.result;
        if (bucketerVariationId) {
          bucketedVariation = getVariationFromId(configObj, bucketerVariationId);
        }
        if (bucketedVariation) {
          this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_BUCKETED_INTO_TARGETING_RULE, MODULE_NAME$7, userId, loggingKey);
          decideReasons.push([
            LOG_MESSAGES.USER_BUCKETED_INTO_TARGETING_RULE,
            MODULE_NAME$7,
            userId,
            loggingKey
          ]);
        } else if (!everyoneElse) {
          this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_NOT_BUCKETED_INTO_TARGETING_RULE, MODULE_NAME$7, userId, loggingKey);
          decideReasons.push([
            LOG_MESSAGES.USER_NOT_BUCKETED_INTO_TARGETING_RULE,
            MODULE_NAME$7,
            userId,
            loggingKey
          ]);
          skipToEveryoneElse = true;
        }
      } else {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE, MODULE_NAME$7, userId, loggingKey);
        decideReasons.push([
          LOG_MESSAGES.USER_DOESNT_MEET_CONDITIONS_FOR_TARGETING_RULE,
          MODULE_NAME$7,
          userId,
          loggingKey
        ]);
      }
      return {
        result: bucketedVariation,
        reasons: decideReasons,
        skipToEveryoneElse
      };
    };
    return DecisionService2;
  }()
);
function createDecisionService(options) {
  return new DecisionService(options);
}
var MODULE_NAME$8 = "EVENT_TAG_UTILS";
var REVENUE_EVENT_METRIC_NAME = "revenue";
var VALUE_EVENT_METRIC_NAME = "value";
function getRevenueValue(eventTags, logger2) {
  if (eventTags.hasOwnProperty(REVENUE_EVENT_METRIC_NAME)) {
    var rawValue = eventTags[REVENUE_EVENT_METRIC_NAME];
    var parsedRevenueValue = void 0;
    if (typeof rawValue === "string") {
      parsedRevenueValue = parseInt(rawValue);
      if (isNaN(parsedRevenueValue)) {
        logger2.log(LOG_LEVEL.INFO, LOG_MESSAGES.FAILED_TO_PARSE_REVENUE, MODULE_NAME$8, rawValue);
        return null;
      }
      logger2.log(LOG_LEVEL.INFO, LOG_MESSAGES.PARSED_REVENUE_VALUE, MODULE_NAME$8, parsedRevenueValue);
      return parsedRevenueValue;
    }
    if (typeof rawValue === "number") {
      parsedRevenueValue = rawValue;
      logger2.log(LOG_LEVEL.INFO, LOG_MESSAGES.PARSED_REVENUE_VALUE, MODULE_NAME$8, parsedRevenueValue);
      return parsedRevenueValue;
    }
    return null;
  }
  return null;
}
function getEventValue(eventTags, logger2) {
  if (eventTags.hasOwnProperty(VALUE_EVENT_METRIC_NAME)) {
    var rawValue = eventTags[VALUE_EVENT_METRIC_NAME];
    var parsedEventValue = void 0;
    if (typeof rawValue === "string") {
      parsedEventValue = parseFloat(rawValue);
      if (isNaN(parsedEventValue)) {
        logger2.log(LOG_LEVEL.INFO, LOG_MESSAGES.FAILED_TO_PARSE_VALUE, MODULE_NAME$8, rawValue);
        return null;
      }
      logger2.log(LOG_LEVEL.INFO, LOG_MESSAGES.PARSED_NUMERIC_VALUE, MODULE_NAME$8, parsedEventValue);
      return parsedEventValue;
    }
    if (typeof rawValue === "number") {
      parsedEventValue = rawValue;
      logger2.log(LOG_LEVEL.INFO, LOG_MESSAGES.PARSED_NUMERIC_VALUE, MODULE_NAME$8, parsedEventValue);
      return parsedEventValue;
    }
    return null;
  }
  return null;
}
var MODULE_NAME$9 = "ATTRIBUTES_VALIDATOR";
function validate$2(attributes) {
  if (typeof attributes === "object" && !Array.isArray(attributes) && attributes !== null) {
    Object.keys(attributes).forEach(function(key) {
      if (typeof attributes[key] === "undefined") {
        throw new Error(sprintf(ERROR_MESSAGES.UNDEFINED_ATTRIBUTE, MODULE_NAME$9, key));
      }
    });
    return true;
  } else {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_ATTRIBUTES, MODULE_NAME$9));
  }
}
function isAttributeValid(attributeKey, attributeValue) {
  return typeof attributeKey === "string" && (typeof attributeValue === "string" || typeof attributeValue === "boolean" || fns.isNumber(attributeValue) && fns.isSafeInteger(attributeValue));
}
var ACTIVATE_EVENT_KEY = "campaign_activated";
var CUSTOM_ATTRIBUTE_FEATURE_TYPE = "custom";
var ENDPOINT = "https://logx.optimizely.com/v1/events";
var HTTP_VERB = "POST";
function getCommonEventParams(_a) {
  var attributes = _a.attributes, userId = _a.userId, clientEngine = _a.clientEngine, clientVersion = _a.clientVersion, configObj = _a.configObj, logger2 = _a.logger;
  var anonymize_ip = configObj.anonymizeIP ? configObj.anonymizeIP : false;
  var botFiltering = configObj.botFiltering;
  var visitor = {
    snapshots: [],
    visitor_id: userId,
    attributes: []
  };
  var commonParams = {
    account_id: configObj.accountId,
    project_id: configObj.projectId,
    visitors: [visitor],
    revision: configObj.revision,
    client_name: clientEngine,
    client_version: clientVersion,
    anonymize_ip,
    enrich_decisions: true
  };
  if (attributes) {
    Object.keys(attributes || {}).forEach(function(attributeKey) {
      var attributeValue = attributes[attributeKey];
      if (isAttributeValid(attributeKey, attributeValue)) {
        var attributeId = getAttributeId(configObj, attributeKey, logger2);
        if (attributeId) {
          commonParams.visitors[0].attributes.push({
            entity_id: attributeId,
            key: attributeKey,
            type: CUSTOM_ATTRIBUTE_FEATURE_TYPE,
            value: attributes[attributeKey]
          });
        }
      }
    });
  }
  if (typeof botFiltering === "boolean") {
    commonParams.visitors[0].attributes.push({
      entity_id: CONTROL_ATTRIBUTES.BOT_FILTERING,
      key: CONTROL_ATTRIBUTES.BOT_FILTERING,
      type: CUSTOM_ATTRIBUTE_FEATURE_TYPE,
      value: botFiltering
    });
  }
  return commonParams;
}
function getImpressionEventParams(configObj, experimentId, variationId, ruleKey, ruleType, flagKey, enabled) {
  var campaignId = experimentId ? getLayerId(configObj, experimentId) : null;
  var variationKey = variationId ? getVariationKeyFromId(configObj, variationId) : null;
  variationKey = variationKey || "";
  var impressionEventParams = {
    decisions: [
      {
        campaign_id: campaignId,
        experiment_id: experimentId,
        variation_id: variationId,
        metadata: {
          flag_key: flagKey,
          rule_key: ruleKey,
          rule_type: ruleType,
          variation_key: variationKey,
          enabled
        }
      }
    ],
    events: [
      {
        entity_id: campaignId,
        timestamp: fns.currentTimestamp(),
        key: ACTIVATE_EVENT_KEY,
        uuid: fns.uuid()
      }
    ]
  };
  return impressionEventParams;
}
function getVisitorSnapshot(configObj, eventKey, logger2, eventTags) {
  var snapshot = {
    events: []
  };
  var eventDict = {
    entity_id: getEventId(configObj, eventKey),
    timestamp: fns.currentTimestamp(),
    uuid: fns.uuid(),
    key: eventKey
  };
  if (eventTags) {
    var revenue = getRevenueValue(eventTags, logger2);
    if (revenue !== null) {
      eventDict[
        "revenue"
        /* REVENUE */
      ] = revenue;
    }
    var eventValue = getEventValue(eventTags, logger2);
    if (eventValue !== null) {
      eventDict[
        "value"
        /* VALUE */
      ] = eventValue;
    }
    eventDict["tags"] = eventTags;
  }
  snapshot.events.push(eventDict);
  return snapshot;
}
function getImpressionEvent(options) {
  var commonParams = getCommonEventParams(options);
  var impressionEventParams = getImpressionEventParams(options.configObj, options.experimentId, options.variationId, options.ruleKey, options.ruleType, options.flagKey, options.enabled);
  commonParams.visitors[0].snapshots.push(impressionEventParams);
  var impressionEvent = {
    httpVerb: HTTP_VERB,
    url: ENDPOINT,
    params: commonParams
  };
  return impressionEvent;
}
function getConversionEvent(options) {
  var commonParams = getCommonEventParams(options);
  var snapshot = getVisitorSnapshot(options.configObj, options.eventKey, options.logger, options.eventTags);
  commonParams.visitors[0].snapshots = [snapshot];
  var conversionEvent = {
    httpVerb: HTTP_VERB,
    url: ENDPOINT,
    params: commonParams
  };
  return conversionEvent;
}
function getExperimentKey(decisionObj) {
  var _a, _b;
  return (_b = (_a = decisionObj.experiment) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : "";
}
function getVariationKey(decisionObj) {
  var _a, _b;
  return (_b = (_a = decisionObj.variation) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : "";
}
function getFeatureEnabledFromVariation(decisionObj) {
  var _a, _b;
  return (_b = (_a = decisionObj.variation) === null || _a === void 0 ? void 0 : _a.featureEnabled) !== null && _b !== void 0 ? _b : false;
}
function getExperimentId(decisionObj) {
  var _a, _b;
  return (_b = (_a = decisionObj.experiment) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
}
function getVariationId(decisionObj) {
  var _a, _b;
  return (_b = (_a = decisionObj.variation) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null;
}
var logger$4 = lib$2.getLogger("EVENT_BUILDER");
var buildImpressionEvent = function(_a) {
  var configObj = _a.configObj, decisionObj = _a.decisionObj, userId = _a.userId, flagKey = _a.flagKey, enabled = _a.enabled, userAttributes = _a.userAttributes, clientEngine = _a.clientEngine, clientVersion = _a.clientVersion;
  var ruleType = decisionObj.decisionSource;
  var experimentKey = getExperimentKey(decisionObj);
  var experimentId = getExperimentId(decisionObj);
  var variationKey = getVariationKey(decisionObj);
  var variationId = getVariationId(decisionObj);
  var layerId = experimentId !== null ? getLayerId(configObj, experimentId) : null;
  return {
    type: "impression",
    timestamp: fns.currentTimestamp(),
    uuid: fns.uuid(),
    user: {
      id: userId,
      attributes: buildVisitorAttributes(configObj, userAttributes)
    },
    context: {
      accountId: configObj.accountId,
      projectId: configObj.projectId,
      revision: configObj.revision,
      clientName: clientEngine,
      clientVersion,
      anonymizeIP: configObj.anonymizeIP || false,
      botFiltering: configObj.botFiltering
    },
    layer: {
      id: layerId
    },
    experiment: {
      id: experimentId,
      key: experimentKey
    },
    variation: {
      id: variationId,
      key: variationKey
    },
    ruleKey: experimentKey,
    flagKey,
    ruleType,
    enabled
  };
};
var buildConversionEvent = function(_a) {
  var configObj = _a.configObj, userId = _a.userId, userAttributes = _a.userAttributes, clientEngine = _a.clientEngine, clientVersion = _a.clientVersion, eventKey = _a.eventKey, eventTags = _a.eventTags;
  var eventId = getEventId(configObj, eventKey);
  var revenue = eventTags ? getRevenueValue(eventTags, logger$4) : null;
  var eventValue = eventTags ? getEventValue(eventTags, logger$4) : null;
  return {
    type: "conversion",
    timestamp: fns.currentTimestamp(),
    uuid: fns.uuid(),
    user: {
      id: userId,
      attributes: buildVisitorAttributes(configObj, userAttributes)
    },
    context: {
      accountId: configObj.accountId,
      projectId: configObj.projectId,
      revision: configObj.revision,
      clientName: clientEngine,
      clientVersion,
      anonymizeIP: configObj.anonymizeIP || false,
      botFiltering: configObj.botFiltering
    },
    event: {
      id: eventId,
      key: eventKey
    },
    revenue,
    value: eventValue,
    tags: eventTags
  };
};
function buildVisitorAttributes(configObj, attributes) {
  var builtAttributes = [];
  if (attributes) {
    Object.keys(attributes || {}).forEach(function(attributeKey) {
      var attributeValue = attributes[attributeKey];
      if (isAttributeValid(attributeKey, attributeValue)) {
        var attributeId = getAttributeId(configObj, attributeKey, logger$4);
        if (attributeId) {
          builtAttributes.push({
            entityId: attributeId,
            key: attributeKey,
            value: attributes[attributeKey]
          });
        }
      }
    });
  }
  return builtAttributes;
}
var MODULE_NAME$a = "EVENT_TAGS_VALIDATOR";
function validate$3(eventTags) {
  if (typeof eventTags === "object" && !Array.isArray(eventTags) && eventTags !== null) {
    return true;
  } else {
    throw new Error(sprintf(ERROR_MESSAGES.INVALID_EVENT_TAGS, MODULE_NAME$a));
  }
}
var MODULE_NAME$b = "USER_PROFILE_SERVICE_VALIDATOR";
function validate$4(userProfileServiceInstance) {
  if (typeof userProfileServiceInstance === "object" && userProfileServiceInstance !== null) {
    if (typeof userProfileServiceInstance["lookup"] !== "function") {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_USER_PROFILE_SERVICE, MODULE_NAME$b, "Missing function 'lookup'"));
    } else if (typeof userProfileServiceInstance["save"] !== "function") {
      throw new Error(sprintf(ERROR_MESSAGES.INVALID_USER_PROFILE_SERVICE, MODULE_NAME$b, "Missing function 'save'"));
    }
    return true;
  }
  throw new Error(sprintf(ERROR_MESSAGES.INVALID_USER_PROFILE_SERVICE, MODULE_NAME$b));
}
var MODULE_NAME$c = "OPTIMIZELY";
var DEFAULT_ONREADY_TIMEOUT = 3e4;
var Optimizely = (
  /** @class */
  function() {
    function Optimizely2(config2) {
      var _this = this;
      var _a;
      var clientEngine = config2.clientEngine;
      if (!clientEngine) {
        config2.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.INVALID_CLIENT_ENGINE, MODULE_NAME$c, clientEngine);
        clientEngine = NODE_CLIENT_ENGINE;
      }
      this.clientEngine = clientEngine;
      this.clientVersion = config2.clientVersion || NODE_CLIENT_VERSION;
      this.errorHandler = config2.errorHandler;
      this.isOptimizelyConfigValid = config2.isValidInstance;
      this.logger = config2.logger;
      var decideOptionsArray = (_a = config2.defaultDecideOptions) !== null && _a !== void 0 ? _a : [];
      if (!Array.isArray(decideOptionsArray)) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.INVALID_DEFAULT_DECIDE_OPTIONS, MODULE_NAME$c);
        decideOptionsArray = [];
      }
      var defaultDecideOptions = {};
      decideOptionsArray.forEach(function(option) {
        if (OptimizelyDecideOption[option]) {
          defaultDecideOptions[option] = true;
        } else {
          _this.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.UNRECOGNIZED_DECIDE_OPTION, MODULE_NAME$c, option);
        }
      });
      this.defaultDecideOptions = defaultDecideOptions;
      this.projectConfigManager = createProjectConfigManager({
        datafile: config2.datafile,
        jsonSchemaValidator: config2.jsonSchemaValidator,
        sdkKey: config2.sdkKey,
        datafileManager: config2.datafileManager
      });
      this.disposeOnUpdate = this.projectConfigManager.onUpdate(function(configObj) {
        _this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.UPDATED_OPTIMIZELY_CONFIG, MODULE_NAME$c, configObj.revision, configObj.projectId);
        _this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.OPTIMIZELY_CONFIG_UPDATE);
      });
      var projectConfigManagerReadyPromise = this.projectConfigManager.onReady();
      var userProfileService = null;
      if (config2.userProfileService) {
        try {
          if (validate$4(config2.userProfileService)) {
            userProfileService = config2.userProfileService;
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.VALID_USER_PROFILE_SERVICE, MODULE_NAME$c);
          }
        } catch (ex) {
          this.logger.log(LOG_LEVEL.WARNING, ex.message);
        }
      }
      this.decisionService = createDecisionService({
        userProfileService,
        logger: this.logger,
        UNSTABLE_conditionEvaluators: config2.UNSTABLE_conditionEvaluators
      });
      this.notificationCenter = config2.notificationCenter;
      this.eventProcessor = config2.eventProcessor;
      var eventProcessorStartedPromise = this.eventProcessor.start();
      this.readyPromise = Promise.all([projectConfigManagerReadyPromise, eventProcessorStartedPromise]).then(function(promiseResults) {
        return promiseResults[0];
      });
      this.readyTimeouts = {};
      this.nextReadyTimeoutId = 0;
    }
    Optimizely2.prototype.isValidInstance = function() {
      return this.isOptimizelyConfigValid && !!this.projectConfigManager.getConfig();
    };
    Optimizely2.prototype.activate = function(experimentKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "activate");
          return null;
        }
        if (!this.validateInputs({ experiment_key: experimentKey, user_id: userId }, attributes)) {
          return this.notActivatingExperiment(experimentKey, userId);
        }
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return null;
        }
        try {
          var variationKey = this.getVariation(experimentKey, userId, attributes);
          if (variationKey === null) {
            return this.notActivatingExperiment(experimentKey, userId);
          }
          if (!isRunning(configObj, experimentKey)) {
            this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.SHOULD_NOT_DISPATCH_ACTIVATE, MODULE_NAME$c, experimentKey);
            return variationKey;
          }
          var experiment = getExperimentFromKey(configObj, experimentKey);
          var variation = experiment.variationKeyMap[variationKey];
          var decisionObj = {
            experiment,
            variation,
            decisionSource: DECISION_SOURCES.EXPERIMENT
          };
          this.sendImpressionEvent(decisionObj, "", userId, true, attributes);
          return variationKey;
        } catch (ex) {
          this.logger.log(LOG_LEVEL.ERROR, ex.message);
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.NOT_ACTIVATING_USER, MODULE_NAME$c, userId, experimentKey);
          this.errorHandler.handleError(ex);
          return null;
        }
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.sendImpressionEvent = function(decisionObj, flagKey, userId, enabled, attributes) {
      var configObj = this.projectConfigManager.getConfig();
      if (!configObj) {
        return;
      }
      var impressionEvent = buildImpressionEvent({
        decisionObj,
        flagKey,
        enabled,
        userId,
        userAttributes: attributes,
        clientEngine: this.clientEngine,
        clientVersion: this.clientVersion,
        configObj
      });
      this.eventProcessor.process(impressionEvent);
      this.emitNotificationCenterActivate(decisionObj, flagKey, userId, enabled, attributes);
    };
    Optimizely2.prototype.emitNotificationCenterActivate = function(decisionObj, flagKey, userId, enabled, attributes) {
      var configObj = this.projectConfigManager.getConfig();
      if (!configObj) {
        return;
      }
      var ruleType = decisionObj.decisionSource;
      var experimentKey = getExperimentKey(decisionObj);
      var experimentId = getExperimentId(decisionObj);
      var variationKey = getVariationKey(decisionObj);
      var variationId = getVariationId(decisionObj);
      var experiment;
      if (experimentId !== null && variationKey !== "") {
        experiment = configObj.experimentIdMap[experimentId];
      }
      var impressionEventOptions = {
        attributes,
        clientEngine: this.clientEngine,
        clientVersion: this.clientVersion,
        configObj,
        experimentId,
        ruleKey: experimentKey,
        flagKey,
        ruleType,
        userId,
        enabled,
        variationId,
        logger: this.logger
      };
      var impressionEvent = getImpressionEvent(impressionEventOptions);
      var variation;
      if (experiment && experiment.variationKeyMap && variationKey !== "") {
        variation = experiment.variationKeyMap[variationKey];
      }
      this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.ACTIVATE, {
        experiment,
        userId,
        attributes,
        variation,
        logEvent: impressionEvent
      });
    };
    Optimizely2.prototype.track = function(eventKey, userId, attributes, eventTags) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "track");
          return;
        }
        if (!this.validateInputs({ user_id: userId, event_key: eventKey }, attributes, eventTags)) {
          return;
        }
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return;
        }
        if (!eventWithKeyExists(configObj, eventKey)) {
          this.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.EVENT_KEY_NOT_FOUND, MODULE_NAME$c, eventKey);
          this.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.NOT_TRACKING_USER, MODULE_NAME$c, userId);
          return;
        }
        eventTags = this.filterEmptyValues(eventTags);
        var conversionEvent = buildConversionEvent({
          eventKey,
          eventTags,
          userId,
          userAttributes: attributes,
          clientEngine: this.clientEngine,
          clientVersion: this.clientVersion,
          configObj
        });
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.TRACK_EVENT, MODULE_NAME$c, eventKey, userId);
        this.eventProcessor.process(conversionEvent);
        this.emitNotificationCenterTrack(eventKey, userId, attributes, eventTags);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.NOT_TRACKING_USER, MODULE_NAME$c, userId);
      }
    };
    Optimizely2.prototype.emitNotificationCenterTrack = function(eventKey, userId, attributes, eventTags) {
      try {
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return;
        }
        var conversionEventOptions = {
          attributes,
          clientEngine: this.clientEngine,
          clientVersion: this.clientVersion,
          configObj,
          eventKey,
          eventTags,
          logger: this.logger,
          userId
        };
        var conversionEvent = getConversionEvent(conversionEventOptions);
        this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.TRACK, {
          eventKey,
          userId,
          attributes,
          eventTags,
          logEvent: conversionEvent
        });
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        this.errorHandler.handleError(ex);
      }
    };
    Optimizely2.prototype.getVariation = function(experimentKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getVariation");
          return null;
        }
        try {
          if (!this.validateInputs({ experiment_key: experimentKey, user_id: userId }, attributes)) {
            return null;
          }
          var configObj = this.projectConfigManager.getConfig();
          if (!configObj) {
            return null;
          }
          var experiment = configObj.experimentKeyMap[experimentKey];
          if (!experiment) {
            this.logger.log(LOG_LEVEL.DEBUG, ERROR_MESSAGES.INVALID_EXPERIMENT_KEY, MODULE_NAME$c, experimentKey);
            return null;
          }
          var variationKey = this.decisionService.getVariation(configObj, experiment, this.createUserContext(userId, attributes)).result;
          var decisionNotificationType = isFeatureExperiment(configObj, experiment.id) ? DECISION_NOTIFICATION_TYPES.FEATURE_TEST : DECISION_NOTIFICATION_TYPES.AB_TEST;
          this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.DECISION, {
            type: decisionNotificationType,
            userId,
            attributes: attributes || {},
            decisionInfo: {
              experimentKey,
              variationKey
            }
          });
          return variationKey;
        } catch (ex) {
          this.logger.log(LOG_LEVEL.ERROR, ex.message);
          this.errorHandler.handleError(ex);
          return null;
        }
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.setForcedVariation = function(experimentKey, userId, variationKey) {
      if (!this.validateInputs({ experiment_key: experimentKey, user_id: userId })) {
        return false;
      }
      var configObj = this.projectConfigManager.getConfig();
      if (!configObj) {
        return false;
      }
      try {
        return this.decisionService.setForcedVariation(configObj, experimentKey, userId, variationKey);
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        this.errorHandler.handleError(ex);
        return false;
      }
    };
    Optimizely2.prototype.getForcedVariation = function(experimentKey, userId) {
      if (!this.validateInputs({ experiment_key: experimentKey, user_id: userId })) {
        return null;
      }
      var configObj = this.projectConfigManager.getConfig();
      if (!configObj) {
        return null;
      }
      try {
        return this.decisionService.getForcedVariation(configObj, experimentKey, userId).result;
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        this.errorHandler.handleError(ex);
        return null;
      }
    };
    Optimizely2.prototype.validateInputs = function(stringInputs, userAttributes, eventTags) {
      try {
        if (stringInputs.hasOwnProperty("user_id")) {
          var userId = stringInputs["user_id"];
          if (typeof userId !== "string" || userId === null || userId === "undefined") {
            throw new Error(sprintf(ERROR_MESSAGES.INVALID_INPUT_FORMAT, MODULE_NAME$c, "user_id"));
          }
          delete stringInputs["user_id"];
        }
        Object.keys(stringInputs).forEach(function(key) {
          if (!validate$1$1(stringInputs[key])) {
            throw new Error(sprintf(ERROR_MESSAGES.INVALID_INPUT_FORMAT, MODULE_NAME$c, key));
          }
        });
        if (userAttributes) {
          validate$2(userAttributes);
        }
        if (eventTags) {
          validate$3(eventTags);
        }
        return true;
      } catch (ex) {
        this.logger.log(LOG_LEVEL.ERROR, ex.message);
        this.errorHandler.handleError(ex);
        return false;
      }
    };
    Optimizely2.prototype.notActivatingExperiment = function(experimentKey, userId) {
      this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.NOT_ACTIVATING_USER, MODULE_NAME$c, userId, experimentKey);
      return null;
    };
    Optimizely2.prototype.filterEmptyValues = function(map) {
      for (var key in map) {
        if (map.hasOwnProperty(key) && (map[key] === null || map[key] === void 0)) {
          delete map[key];
        }
      }
      return map;
    };
    Optimizely2.prototype.isFeatureEnabled = function(featureKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "isFeatureEnabled");
          return false;
        }
        if (!this.validateInputs({ feature_key: featureKey, user_id: userId }, attributes)) {
          return false;
        }
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return false;
        }
        var feature = getFeatureFromKey(configObj, featureKey, this.logger);
        if (!feature) {
          return false;
        }
        var sourceInfo = {};
        var user = this.createUserContext(userId, attributes);
        var decisionObj = this.decisionService.getVariationForFeature(configObj, feature, user).result;
        var decisionSource = decisionObj.decisionSource;
        var experimentKey = getExperimentKey(decisionObj);
        var variationKey = getVariationKey(decisionObj);
        var featureEnabled = getFeatureEnabledFromVariation(decisionObj);
        if (decisionSource === DECISION_SOURCES.FEATURE_TEST) {
          sourceInfo = {
            experimentKey,
            variationKey
          };
        }
        if (decisionSource === DECISION_SOURCES.FEATURE_TEST || decisionSource === DECISION_SOURCES.ROLLOUT && getSendFlagDecisionsValue(configObj)) {
          this.sendImpressionEvent(decisionObj, feature.key, userId, featureEnabled, attributes);
        }
        if (featureEnabled === true) {
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.FEATURE_ENABLED_FOR_USER, MODULE_NAME$c, featureKey, userId);
        } else {
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.FEATURE_NOT_ENABLED_FOR_USER, MODULE_NAME$c, featureKey, userId);
          featureEnabled = false;
        }
        var featureInfo = {
          featureKey,
          featureEnabled,
          source: decisionObj.decisionSource,
          sourceInfo
        };
        this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.DECISION, {
          type: DECISION_NOTIFICATION_TYPES.FEATURE,
          userId,
          attributes: attributes || {},
          decisionInfo: featureInfo
        });
        return featureEnabled;
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return false;
      }
    };
    Optimizely2.prototype.getEnabledFeatures = function(userId, attributes) {
      var _this = this;
      try {
        var enabledFeatures_1 = [];
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getEnabledFeatures");
          return enabledFeatures_1;
        }
        if (!this.validateInputs({ user_id: userId })) {
          return enabledFeatures_1;
        }
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return enabledFeatures_1;
        }
        objectValues(configObj.featureKeyMap).forEach(function(feature) {
          if (_this.isFeatureEnabled(feature.key, userId, attributes)) {
            enabledFeatures_1.push(feature.key);
          }
        });
        return enabledFeatures_1;
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return [];
      }
    };
    Optimizely2.prototype.getFeatureVariable = function(featureKey, variableKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getFeatureVariable");
          return null;
        }
        return this.getFeatureVariableForType(featureKey, variableKey, null, userId, attributes);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getFeatureVariableForType = function(featureKey, variableKey, variableType, userId, attributes) {
      if (!this.validateInputs({ feature_key: featureKey, variable_key: variableKey, user_id: userId }, attributes)) {
        return null;
      }
      var configObj = this.projectConfigManager.getConfig();
      if (!configObj) {
        return null;
      }
      var featureFlag = getFeatureFromKey(configObj, featureKey, this.logger);
      if (!featureFlag) {
        return null;
      }
      var variable = getVariableForFeature(configObj, featureKey, variableKey, this.logger);
      if (!variable) {
        return null;
      }
      if (variableType && variable.type !== variableType) {
        this.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.VARIABLE_REQUESTED_WITH_WRONG_TYPE, MODULE_NAME$c, variableType, variable.type);
        return null;
      }
      var user = this.createUserContext(userId, attributes);
      var decisionObj = this.decisionService.getVariationForFeature(configObj, featureFlag, user).result;
      var featureEnabled = getFeatureEnabledFromVariation(decisionObj);
      var variableValue = this.getFeatureVariableValueFromVariation(featureKey, featureEnabled, decisionObj.variation, variable, userId);
      var sourceInfo = {};
      if (decisionObj.decisionSource === DECISION_SOURCES.FEATURE_TEST && decisionObj.experiment !== null && decisionObj.variation !== null) {
        sourceInfo = {
          experimentKey: decisionObj.experiment.key,
          variationKey: decisionObj.variation.key
        };
      }
      this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.DECISION, {
        type: DECISION_NOTIFICATION_TYPES.FEATURE_VARIABLE,
        userId,
        attributes: attributes || {},
        decisionInfo: {
          featureKey,
          featureEnabled,
          source: decisionObj.decisionSource,
          variableKey,
          variableValue,
          variableType: variable.type,
          sourceInfo
        }
      });
      return variableValue;
    };
    Optimizely2.prototype.getFeatureVariableValueFromVariation = function(featureKey, featureEnabled, variation, variable, userId) {
      var configObj = this.projectConfigManager.getConfig();
      if (!configObj) {
        return null;
      }
      var variableValue = variable.defaultValue;
      if (variation !== null) {
        var value = getVariableValueForVariation(configObj, variable, variation, this.logger);
        if (value !== null) {
          if (featureEnabled) {
            variableValue = value;
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_RECEIVED_VARIABLE_VALUE, MODULE_NAME$c, variableValue, variable.key, featureKey);
          } else {
            this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.FEATURE_NOT_ENABLED_RETURN_DEFAULT_VARIABLE_VALUE, MODULE_NAME$c, featureKey, userId, variableValue);
          }
        } else {
          this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.VARIABLE_NOT_USED_RETURN_DEFAULT_VARIABLE_VALUE, MODULE_NAME$c, variable.key, variation.key);
        }
      } else {
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.USER_RECEIVED_DEFAULT_VARIABLE_VALUE, MODULE_NAME$c, userId, variable.key, featureKey);
      }
      return getTypeCastValue(variableValue, variable.type, this.logger);
    };
    Optimizely2.prototype.getFeatureVariableBoolean = function(featureKey, variableKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getFeatureVariableBoolean");
          return null;
        }
        return this.getFeatureVariableForType(featureKey, variableKey, FEATURE_VARIABLE_TYPES.BOOLEAN, userId, attributes);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getFeatureVariableDouble = function(featureKey, variableKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getFeatureVariableDouble");
          return null;
        }
        return this.getFeatureVariableForType(featureKey, variableKey, FEATURE_VARIABLE_TYPES.DOUBLE, userId, attributes);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getFeatureVariableInteger = function(featureKey, variableKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getFeatureVariableInteger");
          return null;
        }
        return this.getFeatureVariableForType(featureKey, variableKey, FEATURE_VARIABLE_TYPES.INTEGER, userId, attributes);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getFeatureVariableString = function(featureKey, variableKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getFeatureVariableString");
          return null;
        }
        return this.getFeatureVariableForType(featureKey, variableKey, FEATURE_VARIABLE_TYPES.STRING, userId, attributes);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getFeatureVariableJSON = function(featureKey, variableKey, userId, attributes) {
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getFeatureVariableJSON");
          return null;
        }
        return this.getFeatureVariableForType(featureKey, variableKey, FEATURE_VARIABLE_TYPES.JSON, userId, attributes);
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getAllFeatureVariables = function(featureKey, userId, attributes) {
      var _this = this;
      try {
        if (!this.isValidInstance()) {
          this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "getAllFeatureVariables");
          return null;
        }
        if (!this.validateInputs({ feature_key: featureKey, user_id: userId }, attributes)) {
          return null;
        }
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return null;
        }
        var featureFlag = getFeatureFromKey(configObj, featureKey, this.logger);
        if (!featureFlag) {
          return null;
        }
        var user = this.createUserContext(userId, attributes);
        var decisionObj_1 = this.decisionService.getVariationForFeature(configObj, featureFlag, user).result;
        var featureEnabled_1 = getFeatureEnabledFromVariation(decisionObj_1);
        var allVariables_1 = {};
        featureFlag.variables.forEach(function(variable) {
          allVariables_1[variable.key] = _this.getFeatureVariableValueFromVariation(featureKey, featureEnabled_1, decisionObj_1.variation, variable, userId);
        });
        var sourceInfo = {};
        if (decisionObj_1.decisionSource === DECISION_SOURCES.FEATURE_TEST && decisionObj_1.experiment !== null && decisionObj_1.variation !== null) {
          sourceInfo = {
            experimentKey: decisionObj_1.experiment.key,
            variationKey: decisionObj_1.variation.key
          };
        }
        this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.DECISION, {
          type: DECISION_NOTIFICATION_TYPES.ALL_FEATURE_VARIABLES,
          userId,
          attributes: attributes || {},
          decisionInfo: {
            featureKey,
            featureEnabled: featureEnabled_1,
            source: decisionObj_1.decisionSource,
            variableValues: allVariables_1,
            sourceInfo
          }
        });
        return allVariables_1;
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.getOptimizelyConfig = function() {
      try {
        var configObj = this.projectConfigManager.getConfig();
        if (!configObj) {
          return null;
        }
        return this.projectConfigManager.getOptimizelyConfig();
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return null;
      }
    };
    Optimizely2.prototype.close = function() {
      var _this = this;
      try {
        var eventProcessorStoppedPromise = this.eventProcessor.stop();
        if (this.disposeOnUpdate) {
          this.disposeOnUpdate();
          this.disposeOnUpdate = null;
        }
        if (this.projectConfigManager) {
          this.projectConfigManager.stop();
        }
        Object.keys(this.readyTimeouts).forEach(function(readyTimeoutId) {
          var readyTimeoutRecord = _this.readyTimeouts[readyTimeoutId];
          clearTimeout(readyTimeoutRecord.readyTimeout);
          readyTimeoutRecord.onClose();
        });
        this.readyTimeouts = {};
        return eventProcessorStoppedPromise.then(function() {
          return {
            success: true
          };
        }, function(err) {
          return {
            success: false,
            reason: String(err)
          };
        });
      } catch (err) {
        this.logger.log(LOG_LEVEL.ERROR, err.message);
        this.errorHandler.handleError(err);
        return Promise.resolve({
          success: false,
          reason: String(err)
        });
      }
    };
    Optimizely2.prototype.onReady = function(options) {
      var _this = this;
      var timeoutValue;
      if (typeof options === "object" && options !== null) {
        if (options.timeout !== void 0) {
          timeoutValue = options.timeout;
        }
      }
      if (!fns.isSafeInteger(timeoutValue)) {
        timeoutValue = DEFAULT_ONREADY_TIMEOUT;
      }
      var resolveTimeoutPromise;
      var timeoutPromise = new Promise(function(resolve) {
        resolveTimeoutPromise = resolve;
      });
      var timeoutId = this.nextReadyTimeoutId;
      this.nextReadyTimeoutId++;
      var onReadyTimeout = function() {
        delete _this.readyTimeouts[timeoutId];
        resolveTimeoutPromise({
          success: false,
          reason: sprintf("onReady timeout expired after %s ms", timeoutValue)
        });
      };
      var readyTimeout = setTimeout(onReadyTimeout, timeoutValue);
      var onClose = function() {
        resolveTimeoutPromise({
          success: false,
          reason: "Instance closed"
        });
      };
      this.readyTimeouts[timeoutId] = {
        readyTimeout,
        onClose
      };
      this.readyPromise.then(function() {
        clearTimeout(readyTimeout);
        delete _this.readyTimeouts[timeoutId];
        resolveTimeoutPromise({
          success: true
        });
      });
      return Promise.race([this.readyPromise, timeoutPromise]);
    };
    Optimizely2.prototype.createUserContext = function(userId, attributes) {
      if (!this.validateInputs({ user_id: userId }, attributes)) {
        return null;
      }
      return new OptimizelyUserContext({
        optimizely: this,
        userId,
        attributes
      });
    };
    Optimizely2.prototype.decide = function(user, key, options) {
      var _this = this;
      var _a, _b, _c, _d;
      if (options === void 0) {
        options = [];
      }
      var userId = user.getUserId();
      var attributes = user.getAttributes();
      var configObj = this.projectConfigManager.getConfig();
      var reasons = [];
      var decisionObj;
      if (!this.isValidInstance() || !configObj) {
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "decide");
        return newErrorDecision(key, user, [DECISION_MESSAGES.SDK_NOT_READY]);
      }
      var feature = configObj.featureKeyMap[key];
      if (!feature) {
        this.logger.log(LOG_LEVEL.ERROR, ERROR_MESSAGES.FEATURE_NOT_IN_DATAFILE, MODULE_NAME$c, key);
        return newErrorDecision(key, user, [sprintf(DECISION_MESSAGES.FLAG_KEY_INVALID, key)]);
      }
      var allDecideOptions = this.getAllDecideOptions(options);
      var forcedDecisionResponse = this.decisionService.findValidatedForcedDecision(configObj, user, key);
      reasons.push.apply(reasons, forcedDecisionResponse.reasons);
      var variation = forcedDecisionResponse.result;
      if (variation) {
        decisionObj = {
          experiment: null,
          variation,
          decisionSource: DECISION_SOURCES.FEATURE_TEST
        };
      } else {
        var decisionVariation = this.decisionService.getVariationForFeature(configObj, feature, user, allDecideOptions);
        reasons.push.apply(reasons, decisionVariation.reasons);
        decisionObj = decisionVariation.result;
      }
      var decisionSource = decisionObj.decisionSource;
      var experimentKey = (_b = (_a = decisionObj.experiment) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : null;
      var variationKey = (_d = (_c = decisionObj.variation) === null || _c === void 0 ? void 0 : _c.key) !== null && _d !== void 0 ? _d : null;
      var flagEnabled = getFeatureEnabledFromVariation(decisionObj);
      if (flagEnabled === true) {
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.FEATURE_ENABLED_FOR_USER, MODULE_NAME$c, key, userId);
      } else {
        this.logger.log(LOG_LEVEL.INFO, LOG_MESSAGES.FEATURE_NOT_ENABLED_FOR_USER, MODULE_NAME$c, key, userId);
      }
      var variablesMap = {};
      var decisionEventDispatched = false;
      if (!allDecideOptions[OptimizelyDecideOption.EXCLUDE_VARIABLES]) {
        feature.variables.forEach(function(variable) {
          variablesMap[variable.key] = _this.getFeatureVariableValueFromVariation(key, flagEnabled, decisionObj.variation, variable, userId);
        });
      }
      if (!allDecideOptions[OptimizelyDecideOption.DISABLE_DECISION_EVENT] && (decisionSource === DECISION_SOURCES.FEATURE_TEST || decisionSource === DECISION_SOURCES.ROLLOUT && getSendFlagDecisionsValue(configObj))) {
        this.sendImpressionEvent(decisionObj, key, userId, flagEnabled, attributes);
        decisionEventDispatched = true;
      }
      var shouldIncludeReasons = allDecideOptions[OptimizelyDecideOption.INCLUDE_REASONS];
      var reportedReasons = [];
      if (shouldIncludeReasons) {
        reportedReasons = reasons.map(function(reason) {
          return sprintf.apply(void 0, __spreadArrays([reason[0]], reason.slice(1)));
        });
      }
      var featureInfo = {
        flagKey: key,
        enabled: flagEnabled,
        variationKey,
        ruleKey: experimentKey,
        variables: variablesMap,
        reasons: reportedReasons,
        decisionEventDispatched
      };
      this.notificationCenter.sendNotifications(NOTIFICATION_TYPES.DECISION, {
        type: DECISION_NOTIFICATION_TYPES.FLAG,
        userId,
        attributes,
        decisionInfo: featureInfo
      });
      return {
        variationKey,
        enabled: flagEnabled,
        variables: variablesMap,
        ruleKey: experimentKey,
        flagKey: key,
        userContext: user,
        reasons: reportedReasons
      };
    };
    Optimizely2.prototype.getAllDecideOptions = function(options) {
      var _this = this;
      var allDecideOptions = __assign({}, this.defaultDecideOptions);
      if (!Array.isArray(options)) {
        this.logger.log(LOG_LEVEL.DEBUG, LOG_MESSAGES.INVALID_DECIDE_OPTIONS, MODULE_NAME$c);
      } else {
        options.forEach(function(option) {
          if (OptimizelyDecideOption[option]) {
            allDecideOptions[option] = true;
          } else {
            _this.logger.log(LOG_LEVEL.WARNING, LOG_MESSAGES.UNRECOGNIZED_DECIDE_OPTION, MODULE_NAME$c, option);
          }
        });
      }
      return allDecideOptions;
    };
    Optimizely2.prototype.decideForKeys = function(user, keys, options) {
      var _this = this;
      if (options === void 0) {
        options = [];
      }
      var decisionMap = {};
      if (!this.isValidInstance()) {
        this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "decideForKeys");
        return decisionMap;
      }
      if (keys.length === 0) {
        return decisionMap;
      }
      var allDecideOptions = this.getAllDecideOptions(options);
      keys.forEach(function(key) {
        var optimizelyDecision = _this.decide(user, key, options);
        if (!allDecideOptions[OptimizelyDecideOption.ENABLED_FLAGS_ONLY] || optimizelyDecision.enabled) {
          decisionMap[key] = optimizelyDecision;
        }
      });
      return decisionMap;
    };
    Optimizely2.prototype.decideAll = function(user, options) {
      if (options === void 0) {
        options = [];
      }
      var configObj = this.projectConfigManager.getConfig();
      var decisionMap = {};
      if (!this.isValidInstance() || !configObj) {
        this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.INVALID_OBJECT, MODULE_NAME$c, "decideAll");
        return decisionMap;
      }
      var allFlagKeys = Object.keys(configObj.featureKeyMap);
      return this.decideForKeys(user, allFlagKeys, options);
    };
    return Optimizely2;
  }()
);
var validateEventBatchSize = function(eventBatchSize) {
  if (typeof eventBatchSize === "number" && fns.isSafeInteger(eventBatchSize)) {
    return eventBatchSize >= 1;
  }
  return false;
};
var validateEventFlushInterval = function(eventFlushInterval) {
  if (typeof eventFlushInterval === "number" && fns.isSafeInteger(eventFlushInterval)) {
    return eventFlushInterval > 0;
  }
  return false;
};
var eventProcessorConfigValidator = {
  validateEventBatchSize,
  validateEventFlushInterval
};
var MODULE_NAME$d = "NOTIFICATION_CENTER";
var NotificationCenter = (
  /** @class */
  function() {
    function NotificationCenter2(options) {
      var _this = this;
      this.logger = options.logger;
      this.errorHandler = options.errorHandler;
      this.notificationListeners = {};
      objectValues(NOTIFICATION_TYPES).forEach(function(notificationTypeEnum) {
        _this.notificationListeners[notificationTypeEnum] = [];
      });
      this.listenerId = 1;
    }
    NotificationCenter2.prototype.addNotificationListener = function(notificationType, callback) {
      try {
        var notificationTypeValues = objectValues(NOTIFICATION_TYPES);
        var isNotificationTypeValid = notificationTypeValues.indexOf(notificationType) > -1;
        if (!isNotificationTypeValid) {
          return -1;
        }
        if (!this.notificationListeners[notificationType]) {
          this.notificationListeners[notificationType] = [];
        }
        var callbackAlreadyAdded_1 = false;
        (this.notificationListeners[notificationType] || []).forEach(function(listenerEntry) {
          if (listenerEntry.callback === callback) {
            callbackAlreadyAdded_1 = true;
            return;
          }
        });
        if (callbackAlreadyAdded_1) {
          return -1;
        }
        this.notificationListeners[notificationType].push({
          id: this.listenerId,
          callback
        });
        var returnId = this.listenerId;
        this.listenerId += 1;
        return returnId;
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
        return -1;
      }
    };
    NotificationCenter2.prototype.removeNotificationListener = function(listenerId) {
      var _this = this;
      try {
        var indexToRemove_1;
        var typeToRemove_1;
        Object.keys(this.notificationListeners).some(function(notificationType) {
          var listenersForType = _this.notificationListeners[notificationType];
          (listenersForType || []).every(function(listenerEntry, i) {
            if (listenerEntry.id === listenerId) {
              indexToRemove_1 = i;
              typeToRemove_1 = notificationType;
              return false;
            }
            return true;
          });
          if (indexToRemove_1 !== void 0 && typeToRemove_1 !== void 0) {
            return true;
          }
          return false;
        });
        if (indexToRemove_1 !== void 0 && typeToRemove_1 !== void 0) {
          this.notificationListeners[typeToRemove_1].splice(indexToRemove_1, 1);
          return true;
        }
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
      }
      return false;
    };
    NotificationCenter2.prototype.clearAllNotificationListeners = function() {
      var _this = this;
      try {
        objectValues(NOTIFICATION_TYPES).forEach(function(notificationTypeEnum) {
          _this.notificationListeners[notificationTypeEnum] = [];
        });
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
      }
    };
    NotificationCenter2.prototype.clearNotificationListeners = function(notificationType) {
      try {
        this.notificationListeners[notificationType] = [];
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
      }
    };
    NotificationCenter2.prototype.sendNotifications = function(notificationType, notificationData) {
      var _this = this;
      try {
        (this.notificationListeners[notificationType] || []).forEach(function(listenerEntry) {
          var callback = listenerEntry.callback;
          try {
            callback(notificationData);
          } catch (ex) {
            _this.logger.log(LOG_LEVEL.ERROR, LOG_MESSAGES.NOTIFICATION_LISTENER_EXCEPTION, MODULE_NAME$d, notificationType, ex.message);
          }
        });
      } catch (e) {
        this.logger.log(LOG_LEVEL.ERROR, e.message);
        this.errorHandler.handleError(e);
      }
    };
    return NotificationCenter2;
  }()
);
function createNotificationCenter(options) {
  return new NotificationCenter(options);
}
function createEventProcessor() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return new (lib.LogTierV1EventProcessor.bind.apply(lib.LogTierV1EventProcessor, __spreadArrays([void 0], args)))();
}
var eventProcessor = { createEventProcessor, LocalStoragePendingEventsDispatcher: lib.LocalStoragePendingEventsDispatcher };
function createHttpPollingDatafileManager(sdkKey, logger2, datafile, datafileOptions) {
  var datafileManagerConfig = { sdkKey };
  if (datafileOptions === void 0 || typeof datafileOptions === "object" && datafileOptions !== null) {
    fns.assign(datafileManagerConfig, datafileOptions);
  }
  if (datafile) {
    var _a = tryCreatingProjectConfig({
      datafile,
      jsonSchemaValidator: void 0,
      logger: logger2
    }), configObj = _a.configObj, error = _a.error;
    if (error) {
      logger2.error(error);
    }
    if (configObj) {
      datafileManagerConfig.datafile = toDatafile(configObj);
    }
  }
  return new HttpPollingDatafileManager(datafileManagerConfig);
}
var logger$5 = lib$2.getLogger();
lib$2.setLogHandler(createLogger());
lib$2.setLogLevel(lib$2.LogLevel.INFO);
var MODULE_NAME$e = "INDEX_BROWSER";
var DEFAULT_EVENT_BATCH_SIZE = 10;
var DEFAULT_EVENT_FLUSH_INTERVAL = 1e3;
var DEFAULT_EVENT_MAX_QUEUE_SIZE = 1e4;
var hasRetriedEvents = false;
var createInstance = function(config2) {
  try {
    var isValidInstance = false;
    if (config2.errorHandler) {
      lib$2.setErrorHandler(config2.errorHandler);
    }
    if (config2.logger) {
      lib$2.setLogHandler(config2.logger);
      lib$2.setLogLevel(lib$2.LogLevel.NOTSET);
    }
    if (config2.logLevel !== void 0) {
      lib$2.setLogLevel(config2.logLevel);
    }
    try {
      configValidator.validate(config2);
      isValidInstance = true;
    } catch (ex) {
      logger$5.error(ex);
    }
    var eventDispatcher2 = void 0;
    if (config2.eventDispatcher == null) {
      eventDispatcher2 = new lib.LocalStoragePendingEventsDispatcher({
        eventDispatcher: defaultEventDispatcher
      });
      if (!hasRetriedEvents) {
        eventDispatcher2.sendPendingEvents();
        hasRetriedEvents = true;
      }
    } else {
      eventDispatcher2 = config2.eventDispatcher;
    }
    var eventBatchSize = config2.eventBatchSize;
    var eventFlushInterval = config2.eventFlushInterval;
    if (!eventProcessorConfigValidator.validateEventBatchSize(config2.eventBatchSize)) {
      logger$5.warn("Invalid eventBatchSize %s, defaulting to %s", config2.eventBatchSize, DEFAULT_EVENT_BATCH_SIZE);
      eventBatchSize = DEFAULT_EVENT_BATCH_SIZE;
    }
    if (!eventProcessorConfigValidator.validateEventFlushInterval(config2.eventFlushInterval)) {
      logger$5.warn("Invalid eventFlushInterval %s, defaulting to %s", config2.eventFlushInterval, DEFAULT_EVENT_FLUSH_INTERVAL);
      eventFlushInterval = DEFAULT_EVENT_FLUSH_INTERVAL;
    }
    var errorHandler2 = lib$2.getErrorHandler();
    var notificationCenter = createNotificationCenter({ logger: logger$5, errorHandler: errorHandler2 });
    var eventProcessorConfig = {
      dispatcher: eventDispatcher2,
      flushInterval: eventFlushInterval,
      batchSize: eventBatchSize,
      maxQueueSize: config2.eventMaxQueueSize || DEFAULT_EVENT_MAX_QUEUE_SIZE,
      notificationCenter
    };
    var optimizelyOptions = __assign(__assign({ clientEngine: JAVASCRIPT_CLIENT_ENGINE }, config2), {
      eventProcessor: eventProcessor.createEventProcessor(eventProcessorConfig),
      logger: logger$5,
      errorHandler: errorHandler2,
      datafileManager: config2.sdkKey ? createHttpPollingDatafileManager(config2.sdkKey, logger$5, config2.datafile, config2.datafileOptions) : void 0,
      notificationCenter,
      isValidInstance
    });
    var optimizely_1 = new Optimizely(optimizelyOptions);
    try {
      if (typeof window.addEventListener === "function") {
        var unloadEvent = "onpagehide" in window ? "pagehide" : "unload";
        window.addEventListener(unloadEvent, function() {
          optimizely_1.close();
        }, false);
      }
    } catch (e) {
      logger$5.error(LOG_MESSAGES.UNABLE_TO_ATTACH_UNLOAD, MODULE_NAME$e, e.message);
    }
    return optimizely_1;
  } catch (e) {
    logger$5.error(e);
    return null;
  }
};
var __internalResetRetryState = function() {
  hasRetriedEvents = false;
};
var index_browser = {
  logging: loggerPlugin,
  errorHandler: defaultErrorHandler,
  eventDispatcher: defaultEventDispatcher,
  enums,
  setLogger: lib$2.setLogHandler,
  setLogLevel: lib$2.setLogLevel,
  createInstance,
  __internalResetRetryState,
  OptimizelyDecideOption
};
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid2) {
  return typeof uuid2 === "string" && REGEX.test(uuid2);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid2 = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid2)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid2;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
const loadOptimizely = async (setDone) => {
  try {
    console.log("uuid: " + v4());
    const optimizelyInstance = index_browser.createInstance({
      logLevel: "error",
      sdkKey: "your-sdk-key"
    });
    if (!optimizelyInstance) {
      throw new Error("Unable to create new Optimizely instance.");
    }
    await optimizelyInstance.onReady();
    const userId = "test-user-1";
    const user = optimizelyInstance.createUserContext(userId);
    if (!user) {
      throw new Error(
        `Error: Unable to create new Optimizely User Context for default user (${userId}).`
      );
    }
    const decision = user.decideAll();
    console.log(decision);
    setDone(true);
  } catch (e) {
    console.error("Unable to load Optimizely.");
    console.error(e);
  }
};
function App() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    loadOptimizely(setDone);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: done ? "test done, please check console" : "testing sdk" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
const index = "";
client.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
  // </React.StrictMode>,
);
