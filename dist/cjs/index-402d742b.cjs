'use strict';

var React = require('react');
var buffer = require('buffer');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _styled = require('styled-components');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var reactFeather = require('react-feather');
var core = require('@web3-react/core');
var polished = require('polished');
var wcagContrast = require('wcag-contrast');
var _extends$9 = require('@babel/runtime/helpers/extends');
var rebass = require('rebass');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var utils = require('jotai/utils');
var jotai = require('jotai');
require('wicg-inert');
var reactDom = require('react-dom');
var invariant = require('tiny-invariant');
var _get = require('@babel/runtime/helpers/get');
var _createClass = require('@babel/runtime/helpers/createClass');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
require('setimmediate');
var walletconnect = require('@web3-react/walletconnect');
var QRCode = require('qrcode');
var universalRouterSdk = require('@uniswap/universal-router-sdk');
var _typeof = require('@babel/runtime/helpers/typeof');
var react = require('@reduxjs/toolkit/query/react');
var immer = require('jotai/immer');
var sdkCore = require('@uniswap/sdk-core');
var units = require('@ethersproject/units');
var JSBI = require('jsbi');
var toolkit = require('@reduxjs/toolkit');
var routerSdk = require('@uniswap/router-sdk');
var qs = require('qs');
var v2Sdk = require('@uniswap/v2-sdk');
var v3Sdk = require('@uniswap/v3-sdk');
var abi$1 = require('@ethersproject/abi');
var reduxMulticall = require('@uniswap/redux-multicall');
var address = require('@ethersproject/address');
var constants = require('@ethersproject/constants');
var contracts = require('@ethersproject/contracts');
var permit2Sdk = require('@uniswap/permit2-sdk');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _wrapNativeSuper = require('@babel/runtime/helpers/wrapNativeSuper');
var hash = require('@ethersproject/hash');
var bytes = require('@ethersproject/bytes');
var bignumber = require('@ethersproject/bignumber');
var strings = require('@ethersproject/strings');
var CID = require('cids');
var multicodec = require('multicodec');
var multihashes = require('multihashes');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var maxSize = require('popper-max-size-modifier');
var reactPopper = require('react-popper');
var Vibrant = require('node-vibrant/lib/bundle.js');
var AutoSizer = require('react-virtualized-auto-sizer');
var reactWindow = require('react-window');
var providers = require('@ethersproject/providers');
var eip1193 = require('@web3-react/eip1193');
var metamask = require('@web3-react/metamask');
var network = require('@web3-react/network');
var types = require('@web3-react/types');
var plurals = require('make-plural/plurals');
var reactRedux = require('react-redux');
var redux = require('redux');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends$9);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var invariant__default = /*#__PURE__*/_interopDefaultLegacy(invariant);
var _get__default = /*#__PURE__*/_interopDefaultLegacy(_get);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var JSBI__default = /*#__PURE__*/_interopDefaultLegacy(JSBI);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _wrapNativeSuper__default = /*#__PURE__*/_interopDefaultLegacy(_wrapNativeSuper);
var CID__default = /*#__PURE__*/_interopDefaultLegacy(CID);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var maxSize__default = /*#__PURE__*/_interopDefaultLegacy(maxSize);
var Vibrant__default = /*#__PURE__*/_interopDefaultLegacy(Vibrant);
var AutoSizer__default = /*#__PURE__*/_interopDefaultLegacy(AutoSizer);

if (typeof window !== 'undefined') {
  // WalletConnect relies on Buffer, so it must be polyfilled.
  if (!('Buffer' in window)) {
    window.Buffer = buffer.Buffer;
  }
}

var LinguiContext = /*#__PURE__*/React__default["default"].createContext(null);

function useLingui() {
  var context = React__default["default"].useContext(LinguiContext);
  {
    if (context == null) {
      throw new Error("useLingui hook was used without I18nProvider.");
    }
  }
  return context;
}

function withI18n(o) {
  return function (WrappedComponent) {
    return function (props) {
      {
        if (typeof o === "function" || /*#__PURE__*/React__default["default"].isValidElement(o)) {
          throw new Error("withI18n([options]) takes options as a first argument, " + "but received React component itself. Without options, the Component " + "should be wrapped as withI18n()(Component), not withI18n(Component).");
        }
      }

      var _useLingui = useLingui(),
          i18n = _useLingui.i18n;

      return /*#__PURE__*/React__default["default"].createElement(WrappedComponent, Object.assign({}, props, {
        i18n: i18n
      }));
    };
  };
}

var I18nProvider$1 = function I18nProvider(_ref) {
  var i18n = _ref.i18n,
      defaultComponent = _ref.defaultComponent,
      _ref$forceRenderOnLoc = _ref.forceRenderOnLocaleChange,
      forceRenderOnLocaleChange = _ref$forceRenderOnLoc === void 0 ? true : _ref$forceRenderOnLoc,
      children = _ref.children;
  /**
   * We can't pass `i18n` object directly through context, because even when locale
   * or messages are changed, i18n object is still the same. Context provider compares
   * reference identity and suggested workaround is create a wrapper object every time
   * we need to trigger re-render. See https://reactjs.org/docs/context.html#caveats.
   *
   * Due to this effect we also pass `defaultComponent` in the same context, instead
   * of creating a separate Provider/Consumer pair.
   *
   * We can't use useMemo hook either, because we want to recalculate value manually.
   */

  var makeContext = function makeContext() {
    return {
      i18n: i18n,
      defaultComponent: defaultComponent
    };
  };

  var getRenderKey = function getRenderKey() {
    return forceRenderOnLocaleChange ? i18n.locale || 'default' : 'default';
  };

  var _React$useState = React__default["default"].useState(makeContext()),
      _React$useState2 = _slicedToArray__default["default"](_React$useState, 2),
      context = _React$useState2[0],
      setContext = _React$useState2[1],
      _React$useState3 = React__default["default"].useState(getRenderKey()),
      _React$useState4 = _slicedToArray__default["default"](_React$useState3, 2),
      renderKey = _React$useState4[0],
      setRenderKey = _React$useState4[1];
  /**
   * Subscribe for locale/message changes
   *
   * I18n object from `@lingui/core` is the single source of truth for all i18n related
   * data (active locale, catalogs). When new messages are loaded or locale is changed
   * we need to trigger re-rendering of LinguiContext.Consumers.
   *
   * We call `setContext(makeContext())` after adding the observer in case the `change`
   * event would already have fired between the inital renderKey calculation and the
   * `useEffect` hook being called. This can happen if locales are loaded/activated
   * async.
   */


  React__default["default"].useEffect(function () {
    var unsubscribe = i18n.on("change", function () {
      setContext(makeContext());
      setRenderKey(getRenderKey());
    });

    if (renderKey === 'default') {
      setRenderKey(getRenderKey());
    }

    if (forceRenderOnLocaleChange && renderKey === 'default') {
      console.log("I18nProvider did not render. A call to i18n.activate still needs to happen or forceRenderOnLocaleChange must be set to false.");
    }

    return function () {
      return unsubscribe();
    };
  }, []);
  if (forceRenderOnLocaleChange && renderKey === 'default') return null;
  return /*#__PURE__*/React__default["default"].createElement(LinguiContext.Provider, {
    value: context,
    key: renderKey
  }, children);
};

function _createForOfIteratorHelper$4(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}

function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var tagRe = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/;
var nlRe = /(?:\r\n|\r|\n)/g; // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var voidElementTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
  menuitem: true
};
/**
 * `formatElements` - parse string and return tree of react elements
 *
 * `value` is string to be formatted with <0>Paired<0/> or <0/> (unpaired)
 * placeholders. `elements` is a array of react elements which indexes
 * correspond to element indexes in formatted string
 */

function formatElements(value) {
  var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var uniqueId = makeCounter(0, '$lingui$');
  var parts = value.replace(nlRe, "").split(tagRe); // no inline elements, return

  if (parts.length === 1) return value;
  var tree = [];
  var before = parts.shift();
  if (before) tree.push(before);

  var _iterator = _createForOfIteratorHelper$4(getElements(parts)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray__default["default"](_step.value, 3),
          index = _step$value[0],
          children = _step$value[1],
          after = _step$value[2];

      var element = elements[index];

      if (!element || voidElementTags[element.type] && children) {
        if (!element) {
          console.error("Can use element at index '".concat(index, "' as it is not declared in the original translation"));
        } else {
          console.error("".concat(element.type, " is a void element tag therefore it must have no children"));
        } // ignore problematic element but push its children and elements after it


        element = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment);
      }

      tree.push( /*#__PURE__*/React__default["default"].cloneElement(element, {
        key: uniqueId()
      }, // format children for pair tags
      // unpaired tags might have children if it's a component passed as a variable
      children ? formatElements(children, elements) : element.props.children));
      if (after) tree.push(after);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return tree;
}
/*
 * `getElements` - return array of element indexes and element childrens
 *
 * `parts` is array of [pairedIndex, children, unpairedIndex, textAfter, ...]
 * where:
 * - `pairedIndex` is index of paired element (undef for unpaired)
 * - `children` are children of paired element (undef for unpaired)
 * - `unpairedIndex` is index of unpaired element (undef for paired)
 * - `textAfter` is string after all elements (empty string, if there's nothing)
 *
 * `parts` length is always multiply of 4
 *
 * Returns: Array<[elementIndex, children, after]>
 */


function getElements(parts) {
  if (!parts.length) return [];

  var _parts$slice = parts.slice(0, 4),
      _parts$slice2 = _slicedToArray__default["default"](_parts$slice, 4),
      paired = _parts$slice2[0],
      children = _parts$slice2[1],
      unpaired = _parts$slice2[2],
      after = _parts$slice2[3];

  return [[parseInt(paired || unpaired), children || "", after]].concat(getElements(parts.slice(4, parts.length)));
}

var makeCounter = function makeCounter() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return function () {
    return "".concat(prefix, "_").concat(count++);
  };
};

function ownKeys$j(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$j(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$j(Object(source), true).forEach(function (key) {
        _defineProperty__default["default"](target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$j(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Trans$1(props) {
  var _useLingui = useLingui(),
      i18n = _useLingui.i18n,
      defaultComponent = _useLingui.defaultComponent;

  var render = props.render,
      component = props.component,
      id = props.id,
      message = props.message,
      formats = props.formats;

  var values = _objectSpread$j({}, props.values);

  var components = _objectSpread$j({}, props.components);

  if (values) {
    /*
      Related discussion: https://github.com/lingui/js-lingui/issues/183
           Values *might* contain React elements with static content.
      They're replaced with <INDEX /> placeholders and added to `components`.
           Example:
      Translation: Hello {name}
      Values: { name: <strong>Jane</strong> }
           It'll become "Hello <0 />" with components=[<strong>Jane</strong>]
      */
    Object.keys(values).forEach(function (key) {
      var value = values[key];
      if (! /*#__PURE__*/React__default["default"].isValidElement(value)) return;
      var index = Object.keys(components).length;
      components[index] = value;
      values[key] = "<".concat(index, "/>");
    });
  }

  var _translation = i18n && typeof i18n._ === "function" ? i18n._(id, values, {
    message: message,
    formats: formats
  }) : id; // i18n provider isn't loaded at all


  var translation = _translation ? formatElements(_translation, components) : null;

  if (render === null || component === null) {
    // Although `string` is a valid react element, types only allow `Element`
    // Upstream issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return translation;
  }

  var FallbackComponent = defaultComponent || React__default["default"].Fragment; // Validation of `render` and `component` props

  if (render && component) {
    console.error("You can't use both `component` and `render` prop at the same time. `component` is ignored.");
  } else if (render && typeof render !== "function") {
    console.error("Invalid value supplied to prop `render`. It must be a function, provided ".concat(render));
  } else if (component && typeof component !== "function") {
    // Apparently, both function components and class components are functions
    // See https://stackoverflow.com/a/41658173/1535540
    console.error("Invalid value supplied to prop `component`. It must be a React component, provided ".concat(component));
    return /*#__PURE__*/React__default["default"].createElement(FallbackComponent, null, translation);
  } // Rendering using a render prop


  if (typeof render === "function") {
    // Component: render={(props) => <a title={props.translation}>x</a>}
    return render({
      id: id,
      translation: translation,
      message: message
    });
  } // `component` prop has a higher precedence over `defaultComponent`


  var Component = component || FallbackComponent;
  return /*#__PURE__*/React__default["default"].createElement(Component, null, translation);
}

Trans$1.defaultProps = {
  values: {},
  components: {}
};

var r = /*#__PURE__*/React__default["default"].createContext(null);

function o() {
  var e = React__default["default"].useContext(r);
  return e;
}

function a(e) {
  return function (e) {
    return function (t) {
      var r = o(),
          a = r.i18n;
      return /*#__PURE__*/React__default["default"].createElement(e, Object.assign({}, t, {
        i18n: a
      }));
    };
  };
}

var i$1 = function i(t) {
  var o = t.i18n,
      a = t.defaultComponent,
      i = t.forceRenderOnLocaleChange,
      c = void 0 === i || i,
      u = t.children,
      l = function l() {
    return {
      i18n: o,
      defaultComponent: a
    };
  },
      f = function f() {
    return c && o.locale || "default";
  },
      s = React__default["default"].useState(l()),
      p = _slicedToArray__default["default"](s, 2),
      m = p[0],
      d = p[1],
      v = React__default["default"].useState(f()),
      y = _slicedToArray__default["default"](v, 2),
      h = y[0],
      b = y[1];

  return React__default["default"].useEffect(function () {
    var e = o.on("change", function () {
      d(l()), b(f());
    });
    return "default" === h && b(f()), c && "default" === h && console.log("I18nProvider did not render. A call to i18n.activate still needs to happen or forceRenderOnLocaleChange must be set to false."), function () {
      return e();
    };
  }, []), c && "default" === h ? null : /*#__PURE__*/React__default["default"].createElement(r.Provider, {
    value: m,
    key: h
  }, u);
};

function c$1(e, n) {
  var t;

  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (t = function (e, n) {
      if (!e) return;
      if ("string" == typeof e) return u$1(e, n);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === t && e.constructor && (t = e.constructor.name);
      if ("Map" === t || "Set" === t) return Array.from(e);
      if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u$1(e, n);
    }(e)) || n && e && "number" == typeof e.length) {
      t && (e = t);

      var r = 0,
          o = function o() {};

      return {
        s: o,
        n: function n() {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: o
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var a,
      i = !0,
      c = !1;
  return {
    s: function s() {
      t = e[Symbol.iterator]();
    },
    n: function n() {
      var e = t.next();
      return i = e.done, e;
    },
    e: function e(_e2) {
      c = !0, a = _e2;
    },
    f: function f() {
      try {
        i || null == t.return || t.return();
      } finally {
        if (c) throw a;
      }
    }
  };
}

function u$1(e, n) {
  (null == n || n > e.length) && (n = e.length);

  for (var t = 0, r = new Array(n); t < n; t++) {
    r[t] = e[t];
  }

  return r;
}

var l = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,
    f$1 = /(?:\r\n|\r|\n)/g,
    s$1 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
};

function p$1(n) {
  if (!n.length) return [];
  var t = n.slice(0, 4),
      r = _slicedToArray__default["default"](t, 4),
      o = r[0],
      a = r[1],
      i = r[2],
      c = r[3];
  return [[parseInt(o || i), a || "", c]].concat(p$1(n.slice(4, n.length)));
}

var m$1 = function m() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return function () {
    return "".concat(n, "_").concat(e++);
  };
};

function d$1(e, n) {
  var t = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function (n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), t.push.apply(t, r);
  }

  return t;
}

function v$1(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = null != arguments[n] ? arguments[n] : {};
    n % 2 ? d$1(Object(r), !0).forEach(function (n) {
      _defineProperty__default["default"](e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d$1(Object(r)).forEach(function (n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }

  return e;
}

function y$1(t) {
  var r = o(),
      a = r.i18n,
      i = r.defaultComponent,
      u = t.render,
      d = t.component,
      y = t.id,
      h = t.message,
      b = t.formats,
      g = v$1({}, t.values),
      O = v$1({}, t.components);
  g && Object.keys(g).forEach(function (e) {
    var t = g[e];

    if ( /*#__PURE__*/React__default["default"].isValidElement(t)) {
      var r = Object.keys(O).length;
      O[r] = t, g[e] = "<".concat(r, "/>");
    }
  });
  var j = a && "function" == typeof a._ ? a._(y, g, {
    message: h,
    formats: b
  }) : y,
      w = j ? function t(r) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = m$1(0, "$lingui$"),
        i = r.replace(f$1, "").split(l);
    if (1 === i.length) return r;
    var u = [],
        d = i.shift();
    d && u.push(d);
    var v,
        y = c$1(p$1(i));

    try {
      for (y.s(); !(v = y.n()).done;) {
        var h = _slicedToArray__default["default"](v.value, 3),
            b = h[0],
            g = h[1],
            O = h[2],
            j = o[b];
        (!j || s$1[j.type] && g) && (j ? console.error("".concat(j.type, " is a void element tag therefore it must have no children")) : console.error("Can use element at index '".concat(b, "' as it is not declared in the original translation")), j = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment)), u.push( /*#__PURE__*/React__default["default"].cloneElement(j, {
          key: a()
        }, g ? t(g, o) : j.props.children)), O && u.push(O);
      }
    } catch (e) {
      y.e(e);
    } finally {
      y.f();
    }

    return u;
  }(j, O) : null;
  if (null === u || null === d) return w;
  var E = i || React__default["default"].Fragment;
  if (u && d) console.error("You can't use both `component` and `render` prop at the same time. `component` is ignored.");else if (u && "function" != typeof u) console.error("Invalid value supplied to prop `render`. It must be a function, provided ".concat(u));else if (d && "function" != typeof d) return console.error("Invalid value supplied to prop `component`. It must be a React component, provided ".concat(d)), /*#__PURE__*/React__default["default"].createElement(E, null, w);
  if ("function" == typeof u) return u({
    id: y,
    translation: w,
    message: h
  });
  var P = d || E;
  return /*#__PURE__*/React__default["default"].createElement(P, null, w);
}

y$1.defaultProps = {
  values: {},
  components: {}
};

var I18nProvider = process.env.NODE_ENV === "production" ? i$1 : I18nProvider$1;
var Trans = process.env.NODE_ENV === "production" ? y$1 : Trans$1;
process.env.NODE_ENV === "production" ? o : useLingui;
process.env.NODE_ENV === "production" ? a : withI18n;

var Row = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Row",
  componentId: "sc-1nzvhrh-0"
})(["align-items:", ";color:", ";display:", ";flex-flow:wrap;flex-grow:", ";gap:", ";grid-auto-flow:column;grid-template-columns:", ";justify-content:", ";padding:", ";"], function (_ref) {
  var align = _ref.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color && theme[color];
}, function (_ref3) {
  var flex = _ref3.flex;
  return flex ? 'flex' : 'grid';
}, function (_ref4) {
  var grow = _ref4.grow;
  return grow && 1;
}, function (_ref5) {
  var gap = _ref5.gap;
  return gap && "".concat(gap, "em");
}, function (_ref6) {
  var grow = _ref6.grow,
      children = _ref6.children;
  if (grow === 'first') return '1fr';
  if (grow === 'last') return "repeat(".concat(React.Children.count(children) - 1, ", auto) 1fr");
  if (grow) return "repeat(".concat(React.Children.count(children), ", 1fr)");
  return undefined;
}, function (_ref7) {
  var justify = _ref7.justify;
  return justify !== null && justify !== void 0 ? justify : 'space-between';
}, function (_ref8) {
  var pad = _ref8.pad;
  return pad && "0 ".concat(pad, "em");
});

var _defs, _path$3;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgAutoRouter = function SvgAutoRouter(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$8({
    width: 23,
    height: 20,
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _defs || (_defs = /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: "gradient",
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 0,
    gradientTransform: "rotate(95)"
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    id: "stop1",
    offset: 0,
    stopColor: "#2274E2"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    id: "stop1",
    offset: 0.5,
    stopColor: "#2274E2"
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    id: "stop2",
    offset: 1,
    stopColor: "#3FB672"
  })))), _path$3 || (_path$3 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M16 16C10 16 9 10 5 10M16 16C16 17.6569 17.3431 19 19 19C20.6569 19 22 17.6569 22 16C22 14.3431 20.6569 13 19 13C17.3431 13 16 14.3431 16 16ZM5 10C9 10 10 4 16 4M5 10H1.5M16 4C16 5.65685 17.3431 7 19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4Z",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "url(#gradient)"
  })));
};

var _circle$2, _path$2;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$7({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle$2 || (_circle$2 = /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 10,
    cy: 10,
    r: 10
  })), _path$2 || (_path$2 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M14 7L8.5 12.5L6 10",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _polyline, _polyline2;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgExpando = function SvgExpando(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$6({
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _polyline || (_polyline = /*#__PURE__*/React__default["default"].createElement("polyline", {
    className: "left",
    points: "18 15 12 9"
  })), _polyline2 || (_polyline2 = /*#__PURE__*/React__default["default"].createElement("polyline", {
    className: "right",
    points: "12 9 6 15"
  })));
};

var _mask$1, _circle$1, _circle2, _circle3;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var SvgInlineSpinner = function SvgInlineSpinner(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$5({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask$1 || (_mask$1 = /*#__PURE__*/React__default["default"].createElement("mask", {
    id: "mask"
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    fill: "black",
    stroke: "black",
    strokeWidth: 2
  }), /*#__PURE__*/React__default["default"].createElement("rect", {
    width: 12,
    height: 12,
    fill: "white",
    strokeWidth: 0
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 2,
    cy: 12,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 2,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }))), _circle$1 || (_circle$1 = /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 6,
    stroke: "none"
  })), _circle2 || (_circle2 = /*#__PURE__*/React__default["default"].createElement("circle", {
    id: "track",
    cx: 12,
    cy: 12,
    r: 10,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  })), _circle3 || (_circle3 = /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    mask: "url(#mask)"
  })));
};

var _g;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$4({
    viewBox: "0 0 14 15",
    fill: "black",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.15217 1.55141C3.96412 1.52242 3.95619 1.51902 4.04468 1.5055C4.21427 1.47958 4.61472 1.51491 4.89067 1.58012C5.53489 1.73232 6.12109 2.12221 6.74683 2.81466L6.91307 2.99862L7.15088 2.96062C8.15274 2.8006 9.17194 2.92778 10.0244 3.31918C10.2589 3.42686 10.6287 3.64121 10.6749 3.69629C10.6896 3.71384 10.7166 3.82684 10.7349 3.94742C10.7982 4.36458 10.7665 4.68434 10.6382 4.92317C10.5683 5.05313 10.5644 5.09432 10.6114 5.20554C10.6489 5.2943 10.7534 5.35999 10.8569 5.35985C11.0687 5.35956 11.2968 5.0192 11.4024 4.54561L11.4444 4.3575L11.5275 4.45109C11.9835 4.96459 12.3417 5.66488 12.4032 6.16335L12.4192 6.29332L12.3426 6.17517C12.2107 5.97186 12.0781 5.83346 11.9084 5.72183C11.6024 5.52062 11.2789 5.45215 10.4222 5.40727C9.64839 5.36675 9.21045 5.30106 8.77621 5.16032C8.03738 4.9209 7.66493 4.60204 6.78729 3.4576C6.39748 2.94928 6.15654 2.66804 5.91687 2.44155C5.37228 1.92691 4.83716 1.65701 4.15217 1.55141Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.8494 2.68637C10.8689 2.34575 10.9153 2.12108 11.0088 1.9159C11.0458 1.83469 11.0804 1.76822 11.0858 1.76822C11.0911 1.76822 11.075 1.82816 11.05 1.90142C10.9821 2.10054 10.9709 2.3729 11.0177 2.68978C11.0771 3.09184 11.1109 3.14985 11.5385 3.58416C11.739 3.78788 11.9723 4.0448 12.0568 4.15511L12.2106 4.35568L12.0568 4.21234C11.8688 4.03705 11.4364 3.6952 11.3409 3.64633C11.2768 3.61356 11.2673 3.61413 11.2278 3.65321C11.1914 3.68922 11.1837 3.74333 11.1787 3.99915C11.1708 4.39786 11.1161 4.65377 10.9842 4.90965C10.9128 5.04805 10.9015 5.01851 10.9661 4.8623C11.0143 4.74566 11.0192 4.69439 11.0189 4.30842C11.0181 3.53291 10.9255 3.34647 10.3823 3.02709C10.2447 2.94618 10.0179 2.8295 9.87839 2.76778C9.73887 2.70606 9.62805 2.6523 9.63208 2.64828C9.64746 2.63307 10.1772 2.78675 10.3905 2.86828C10.7077 2.98954 10.76 3.00526 10.7985 2.99063C10.8244 2.98082 10.8369 2.90608 10.8494 2.68637Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4.51745 4.01304C4.13569 3.49066 3.89948 2.68973 3.95062 2.091L3.96643 1.90572L4.05333 1.92148C4.21652 1.95106 4.49789 2.05515 4.62964 2.13469C4.9912 2.35293 5.14773 2.64027 5.30697 3.37811C5.35362 3.59423 5.41482 3.8388 5.44298 3.9216C5.48831 4.05487 5.65962 4.36617 5.7989 4.56834C5.89922 4.71395 5.83258 4.78295 5.61082 4.76305C5.27215 4.73267 4.8134 4.41799 4.51745 4.01304Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M10.3863 7.90088C8.60224 7.18693 7.97389 6.56721 7.97389 5.52157C7.97389 5.36769 7.97922 5.24179 7.98571 5.24179C7.99221 5.24179 8.06124 5.29257 8.1391 5.35465C8.50088 5.64305 8.906 5.76623 10.0275 5.92885C10.6875 6.02455 11.0589 6.10185 11.4015 6.21477C12.4904 6.57371 13.1641 7.30212 13.3248 8.29426C13.3715 8.58255 13.3441 9.12317 13.2684 9.4081C13.2087 9.63315 13.0263 10.0388 12.9779 10.0544C12.9645 10.0587 12.9514 10.0076 12.9479 9.93809C12.9296 9.56554 12.7402 9.20285 12.4221 8.93116C12.0604 8.62227 11.5745 8.37633 10.3863 7.90088Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.13385 8.19748C9.11149 8.06527 9.07272 7.89643 9.04769 7.82228L9.00217 7.68748L9.08672 7.7818C9.20374 7.91233 9.2962 8.07937 9.37457 8.30185C9.43438 8.47165 9.44111 8.52215 9.44066 8.79807C9.4402 9.06896 9.43273 9.12575 9.3775 9.27858C9.29042 9.51959 9.18233 9.69048 9.00097 9.87391C8.67507 10.2036 8.25607 10.3861 7.65143 10.4618C7.54633 10.4749 7.24 10.4971 6.97069 10.511C6.292 10.5461 5.84531 10.6186 5.44393 10.7587C5.38623 10.7788 5.3347 10.7911 5.32947 10.7859C5.31323 10.7698 5.58651 10.6079 5.81223 10.4998C6.1305 10.3474 6.44733 10.2643 7.15719 10.1468C7.50785 10.0887 7.86998 10.0183 7.96194 9.99029C8.83033 9.72566 9.27671 9.04276 9.13385 8.19748Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.95169 9.64109C9.71465 9.13463 9.66022 8.64564 9.79009 8.18961C9.80399 8.14088 9.82632 8.101 9.83976 8.101C9.85319 8.101 9.90913 8.13105 9.96404 8.16777C10.0733 8.24086 10.2924 8.36395 10.876 8.68023C11.6043 9.0749 12.0196 9.3805 12.302 9.72965C12.5493 10.0354 12.7023 10.3837 12.776 10.8084C12.8177 11.0489 12.7932 11.6277 12.7311 11.8699C12.5353 12.6337 12.0802 13.2336 11.4311 13.5837C11.336 13.635 11.2506 13.6771 11.2414 13.6773C11.2321 13.6775 11.2668 13.5899 11.3184 13.4827C11.5367 13.029 11.5616 12.5877 11.3965 12.0965C11.2954 11.7957 11.0893 11.4287 10.6732 10.8084C10.1893 10.0873 10.0707 9.89539 9.95169 9.64109Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M3.25046 12.3737C3.91252 11.8181 4.73629 11.4234 5.48666 11.3022C5.81005 11.25 6.34877 11.2707 6.64823 11.3469C7.12824 11.469 7.55763 11.7425 7.78094 12.0683C7.99918 12.3867 8.09281 12.6642 8.19029 13.2816C8.22875 13.5252 8.27057 13.7697 8.28323 13.8251C8.35644 14.1451 8.4989 14.4008 8.67544 14.5293C8.95583 14.7333 9.43865 14.7459 9.91362 14.5618C9.99423 14.5305 10.0642 14.5089 10.0691 14.5138C10.0864 14.5308 9.84719 14.6899 9.67847 14.7737C9.45143 14.8864 9.2709 14.93 9.03102 14.93C8.59601 14.93 8.23486 14.7101 7.9335 14.2616C7.87419 14.1733 7.7409 13.909 7.63729 13.6741C7.3191 12.9528 7.16199 12.7331 6.79255 12.4926C6.47104 12.2834 6.05641 12.2459 5.74449 12.3979C5.33475 12.5976 5.22043 13.118 5.51389 13.4478C5.63053 13.5789 5.84803 13.6919 6.02588 13.7139C6.35861 13.7551 6.64455 13.5035 6.64455 13.1696C6.64455 12.9528 6.56071 12.8291 6.34966 12.7344C6.0614 12.6051 5.75156 12.7562 5.75304 13.0254C5.75368 13.1402 5.80396 13.2122 5.91971 13.2643C5.99397 13.2977 5.99569 13.3003 5.93514 13.2878C5.67066 13.2333 5.6087 12.9164 5.82135 12.706C6.07667 12.4535 6.60461 12.5649 6.78591 12.9097C6.86208 13.0545 6.87092 13.3429 6.80451 13.517C6.6559 13.9068 6.22256 14.1117 5.78297 14.0002C5.48368 13.9242 5.36181 13.842 5.00097 13.4726C4.37395 12.8306 4.13053 12.7062 3.22657 12.566L3.05335 12.5391L3.25046 12.3737Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.308383 0.883984C2.40235 3.40996 3.84457 4.45213 4.00484 4.67231C4.13717 4.85412 4.08737 5.01757 3.86067 5.14567C3.7346 5.21689 3.47541 5.28905 3.34564 5.28905C3.19887 5.28905 3.14847 5.23278 3.14847 5.23278C3.06337 5.15255 3.01544 5.16658 2.5784 4.39555C1.97166 3.45981 1.46389 2.68357 1.45004 2.67057C1.41801 2.64052 1.41856 2.64153 2.51654 4.59413C2.69394 5.0011 2.55182 5.15049 2.55182 5.20845C2.55182 5.32636 2.51946 5.38834 2.37311 5.55059C2.12914 5.8211 2.02008 6.12505 1.94135 6.7541C1.8531 7.45926 1.60492 7.95737 0.917156 8.80989C0.514562 9.30893 0.448686 9.4004 0.3471 9.60153C0.219144 9.85482 0.183961 9.99669 0.169701 10.3165C0.154629 10.6547 0.183983 10.8732 0.287934 11.1965C0.378939 11.4796 0.473932 11.6665 0.716778 12.0403C0.926351 12.3629 1.04702 12.6027 1.04702 12.6965C1.04702 12.7711 1.06136 12.7712 1.38611 12.6983C2.16328 12.5239 2.79434 12.2171 3.14925 11.8411C3.36891 11.6084 3.42048 11.4799 3.42215 11.1611C3.42325 10.9525 3.41587 10.9088 3.35914 10.7888C3.2668 10.5935 3.09869 10.4311 2.72817 10.1794C2.2427 9.84953 2.03534 9.58398 1.97807 9.21878C1.93108 8.91913 1.98559 8.70771 2.25416 8.14825C2.53214 7.56916 2.60103 7.32239 2.64763 6.73869C2.67773 6.36158 2.71941 6.21286 2.82842 6.09348C2.94212 5.969 3.04447 5.92684 3.32584 5.88863C3.78457 5.82635 4.07667 5.70839 4.31677 5.48849C4.52505 5.29772 4.61221 5.11391 4.62558 4.8372L4.63574 4.62747L4.51934 4.49259C4.09783 4.00411 0.0261003 0.5 0.000160437 0.5C-0.00538105 0.5 0.133325 0.672804 0.308383 0.883984ZM1.28364 10.6992C1.37894 10.5314 1.3283 10.3158 1.16889 10.2104C1.01827 10.1109 0.78428 10.1578 0.78428 10.2875C0.78428 10.3271 0.806303 10.3559 0.855937 10.3813C0.939514 10.424 0.945581 10.4721 0.879823 10.5703C0.81323 10.6698 0.818604 10.7573 0.894991 10.8167C1.0181 10.9125 1.19237 10.8598 1.28364 10.6992Z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.92523 5.99865C4.70988 6.06439 4.50054 6.29124 4.43574 6.5291C4.39621 6.67421 4.41864 6.92875 4.47785 7.00736C4.57351 7.13433 4.66602 7.16778 4.91651 7.16603C5.40693 7.16263 5.83327 6.95358 5.88284 6.69224C5.92347 6.47801 5.73622 6.18112 5.4783 6.05078C5.34521 5.98355 5.06217 5.95688 4.92523 5.99865ZM5.49853 6.44422C5.57416 6.33741 5.54107 6.22198 5.41245 6.14391C5.1675 5.99525 4.79708 6.11827 4.79708 6.34826C4.79708 6.46274 4.99025 6.58765 5.16731 6.58765C5.28516 6.58765 5.44644 6.5178 5.49853 6.44422Z"
  }))));
};

var _mask, _circle;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgSpinner = function SvgSpinner(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$3({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/React__default["default"].createElement("mask", {
    id: "mask"
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    stroke: "white",
    strokeWidth: 2
  }), /*#__PURE__*/React__default["default"].createElement("rect", {
    width: 12,
    height: 12,
    fill: "black",
    strokeWidth: 0
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 2,
    cy: 12,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 2,
    r: 1,
    fill: "white",
    strokeWidth: 0
  }))), _circle || (_circle = /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    mask: "url(#mask)"
  })));
};

var _path$1, _path2$1, _path3$1;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgWallet = function SvgWallet(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$2({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V7Z",
    stroke: "currentColor",
    strokeWidth: 2
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M4 19H20C21.1046 19 22 18.1046 22 17V14C22 12.8954 21.1046 12 20 12H16C15.4477 12 14.9935 12.4624 14.7645 12.965C14.4438 13.6688 13.789 14.5 12 14.5C10.29 14.5 9.48213 13.7406 9.1936 13.0589C8.96576 12.5206 8.49905 12 7.91447 12H4C2.89543 12 2 12.8954 2 14V17C2 18.1046 2.89543 19 4 19Z",
    fill: "currentColor"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M22 13V11C22 9.89543 21.1034 9 19.9989 9C14.0294 9 9.97062 9 4.00115 9C2.89658 9 2 9.89543 2 11V13",
    stroke: "currentColor",
    strokeWidth: 2
  })));
};

var _path, _path2, _path3;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgWalletDisconnect = function SvgWalletDisconnect(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends$1({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.216 4.30015L12.7625 6.7537C13.4081 6.80314 13.9167 7.34272 13.9167 8.00001V8.43867C13.5743 8.16419 13.1397 8.00001 12.6667 8.00001H11.5162L5.43287 14.0833H12.6667C14.1855 14.0833 15.4167 12.8521 15.4167 11.3333V5.33332C15.4167 4.9679 15.3454 4.61913 15.216 4.30015Z"
  })), _path2 || (_path2 = /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M0.663258 11.994C0.611066 11.7824 0.58338 11.5611 0.58338 11.3333V5.33332C0.58338 3.81454 1.8146 2.58332 3.33338 2.58332H10.0739L8.57394 4.08332H3.33338C2.64302 4.08332 2.08338 4.64296 2.08338 5.33332V5.55032C2.4588 5.35831 2.88407 5.25001 3.33446 5.25001H7.40725L5.90725 6.75001H3.33446C2.64357 6.75001 2.08338 7.31018 2.08338 8.00001V8.43867C2.42578 8.16419 2.86041 8.00001 3.33338 8.00001H4.65725L0.663258 11.994Z"
  })), _path3 || (_path3 = /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.559422 15.4406C0.266529 15.1477 0.343167 14.5962 0.730598 14.2088L14.2088 0.730598C14.5962 0.343167 15.1477 0.266529 15.4406 0.559422C15.7335 0.852315 15.6569 1.40383 15.2694 1.79126L1.79126 15.2694C1.40383 15.6569 0.852315 15.7335 0.559422 15.4406Z"
  })));
};

var loadingOpacity = 0.6;
var loadingCss = /*#__PURE__*/_styled.css(["filter:grayscale(1);opacity:", ";"], loadingOpacity); // need to use isLoading as `loading` is a reserved prop

var loadingTransitionCss = /*#__PURE__*/_styled.css(["opacity:", ";transition:color 0.125s linear,opacity ", "s ease-in-out;"], function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && loadingOpacity;
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading ? 0 : 0.25;
});

var IdenticonGradient0 = "data:image/png;base64,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";

var IdenticonGradient1 = "data:image/png;base64,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";

var IdenticonGradient2 = "data:image/png;base64,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";

var IdenticonGradient3 = "data:image/png;base64,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";

var IdenticonGradient4 = "data:image/png;base64,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";

var IdenticonGradient5 = "data:image/png;base64,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";

var IdenticonGradient6 = "data:image/png;base64,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";

var IdenticonGradient7 = "data:image/png;base64,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";

var IdenticonGradient8 = "data:image/png;base64,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";

var IdenticonGradient9 = "data:image/png;base64,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";

var gradients = [IdenticonGradient0, IdenticonGradient1, IdenticonGradient2, IdenticonGradient3, IdenticonGradient4, IdenticonGradient5, IdenticonGradient6, IdenticonGradient7, IdenticonGradient8, IdenticonGradient9];

function getGradientIconSrc(account) {
  var num = parseInt(account.slice(2, 10), 16);
  var i = num % 10;
  return gradients[i];
}

function IdenticonIcon() {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var iconSrc = React.useMemo(function () {
    return account && getGradientIconSrc(account);
  }, [account]);
  return /*#__PURE__*/React__default["default"].createElement("img", {
    src: iconSrc,
    alt: "account icon",
    width: "16px",
    height: "16px"
  });
}

var _templateObject$5, _templateObject2$2;

function icon(Icon) {
  return _styled__default["default"](Icon).withConfig({
    displayName: "icons",
    componentId: "sc-lekdau-0"
  })(["clip-path:stroke-box;height:1em;stroke:", ";width:1em;"], function (_ref) {
    var _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'currentColor' : _ref$color,
        theme = _ref.theme;
    return theme[color];
  });
}

var largeIconCss = _styled.css(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral__default["default"](["\n  display: flex;\n\n  svg {\n    align-self: center;\n    height: ", "em;\n    width: ", "em;\n  }\n"])), function (_ref2) {
  var iconSize = _ref2.iconSize;
  return iconSize;
}, function (_ref3) {
  var iconSize = _ref3.iconSize;
  return iconSize;
});

var LargeWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "icons__LargeWrapper",
  componentId: "sc-lekdau-1"
})(["height:1em;width:", "em;", ""], function (_ref4) {
  var iconSize = _ref4.iconSize;
  return iconSize;
}, largeIconCss);

function LargeIcon(_ref5) {
  var Icon = _ref5.icon,
      color = _ref5.color,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 1.2 : _ref5$size,
      className = _ref5.className;
  return /*#__PURE__*/React__default["default"].createElement(LargeWrapper, {
    color: color,
    iconSize: size,
    className: className
  }, Icon && /*#__PURE__*/React__default["default"].createElement(Icon, {
    color: color
  }));
}
var AlertTriangle = icon(reactFeather.AlertTriangle);
var ArrowDown = icon(reactFeather.ArrowDown);
var ArrowRight = icon(reactFeather.ArrowRight);
icon(reactFeather.ArrowUp);
var CheckCircle = icon(reactFeather.CheckCircle);
var BarChart = icon(reactFeather.BarChart2);
var ChevronLeft = icon(reactFeather.ChevronLeft);
var ChevronDown = icon(reactFeather.ChevronDown);
var Clock = icon(reactFeather.Clock);
var HelpCircle = icon(reactFeather.HelpCircle);
icon(IdenticonIcon);
var Info = icon(reactFeather.Info);
var Link = icon(reactFeather.ExternalLink);
var AutoRouter = icon(SvgAutoRouter);
var Settings$1 = icon(reactFeather.Settings);
icon(reactFeather.Slash);
icon(reactFeather.Trash2);
var Wallet$1 = icon(SvgWallet);
icon(reactFeather.X);
var XOctagon = icon(reactFeather.XOctagon);
var Check = /*#__PURE__*/_styled__default["default"](icon(SvgCheck)).withConfig({
  displayName: "icons__Check",
  componentId: "sc-lekdau-2"
})(["circle{fill:", ";stroke:none;}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.active;
});
var Expando$2 = /*#__PURE__*/_styled__default["default"](icon(SvgExpando)).withConfig({
  displayName: "icons__Expando",
  componentId: "sc-lekdau-3"
})([".left,.right{transition:transform 0.25s ease-in-out;will-change:transform;}.left{transform:", ";}.right{transform:", ";}"], function (_ref7) {
  var open = _ref7.open;
  return open ? undefined : 'translateX(-25%)';
}, function (_ref8) {
  var open = _ref8.open;
  return open ? undefined : 'translateX(25%)';
});
var Logo = /*#__PURE__*/_styled__default["default"](icon(SvgLogo)).withConfig({
  displayName: "icons__Logo",
  componentId: "sc-lekdau-4"
})(["fill:", ";stroke:none;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.secondary;
});
var WalletDisconnect = /*#__PURE__*/_styled__default["default"](icon(SvgWalletDisconnect)).withConfig({
  displayName: "icons__WalletDisconnect",
  componentId: "sc-lekdau-5"
})(["fill:currentColor;stroke:none;"]);

var rotate = _styled.keyframes(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral__default["default"](["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));

var Spinner = /*#__PURE__*/_styled__default["default"](icon(SvgSpinner)).withConfig({
  displayName: "icons__Spinner",
  componentId: "sc-lekdau-6"
})(["animation:2s ", " linear infinite;stroke:", ";stroke-linecap:round;stroke-width:2;"], rotate, function (_ref10) {
  var _ref10$color = _ref10.color,
      color = _ref10$color === void 0 ? 'active' : _ref10$color,
      theme = _ref10.theme;
  return theme[color];
});
var InlineSpinner = /*#__PURE__*/_styled__default["default"](icon(SvgInlineSpinner)).withConfig({
  displayName: "icons__InlineSpinner",
  componentId: "sc-lekdau-7"
})(["animation:", " 1s cubic-bezier(0.83,0,0.17,1) infinite;color:", ";fill:", ";#track{stroke:", ";", ";}"], rotate, function (_ref11) {
  var _ref11$color = _ref11.color,
      color = _ref11$color === void 0 ? 'active' : _ref11$color,
      theme = _ref11.theme;
  return theme[color];
}, function (_ref12) {
  var _ref12$color = _ref12.color,
      color = _ref12$color === void 0 ? 'active' : _ref12$color,
      theme = _ref12.theme;
  return theme[color];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.secondary;
}, loadingCss);

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$i(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var black$1 = 'hsl(0, 0%, 0%)';
var white$1 = 'hsl(0, 0%, 100%)';
var light = {
  // surface
  interactive: polished.transparentize(1 - 0.54, black$1),
  outline: polished.transparentize(1 - 0.24, black$1),
  // text
  primary: black$1,
  secondary: polished.transparentize(1 - 0.64, black$1),
  onInteractive: white$1
};
var dark = {
  // surface
  interactive: polished.transparentize(1 - 0.48, white$1),
  outline: polished.transparentize(1 - 0.12, white$1),
  // text
  primary: white$1,
  secondary: polished.transparentize(1 - 0.6, white$1),
  onInteractive: black$1
};
function getDynamicTheme(theme, color) {
  var colors = {
    light: light,
    dark: dark
  }[polished.readableColor(color, 'light', 'dark', false)];
  return _objectSpread$i(_objectSpread$i(_objectSpread$i({}, theme), colors), {}, {
    module: color,
    onHover: function onHover(color) {
      return color === colors.primary ? polished.transparentize(0.4, colors.primary) : polished.opacify(0.25, color);
    }
  });
}

function getAccessibleColor(theme, color) {
  var dynamic = getDynamicTheme(theme, color);
  var primary = dynamic.primary;
  var AAscore = wcagContrast.hex(color, primary);
  var contrastify = wcagContrast.hex(color, '#000') > wcagContrast.hex(color, '#fff') ? polished.darken : polished.lighten;

  while (AAscore < 3) {
    color = contrastify(0.005, color);
    primary = getDynamicTheme(theme, color).primary;
    AAscore = wcagContrast.hex(color, primary);
  }

  return color;
}

function DynamicThemeProvider(_ref) {
  var color = _ref.color,
      children = _ref.children;

  var theme = _styled.useTheme();

  var value = React.useMemo(function () {
    if (!color) {
      return theme;
    }

    var accessibleColor = getAccessibleColor(theme, color);
    return getDynamicTheme(theme, accessibleColor);
  }, [theme, color]);
  return /*#__PURE__*/React__default["default"].createElement(_styled.ThemeProvider, {
    theme: value
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      color: value.primary
    }
  }, children));
}

var Layer;

(function (Layer) {
  Layer[Layer["UNDERLAYER"] = -1] = "UNDERLAYER";
  Layer[Layer["OVERLAY"] = 100] = "OVERLAY";
  Layer[Layer["DIALOG"] = 1000] = "DIALOG";
  Layer[Layer["TOOLTIP"] = 2000] = "TOOLTIP";
})(Layer || (Layer = {}));

var TextWrapper = /*#__PURE__*/_styled__default["default"](rebass.Text).withConfig({
  displayName: "type__TextWrapper",
  componentId: "sc-16386l-0"
})(["color:", ";min-height:", ";user-select:", ";white-space:", ";"], function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      theme = _ref.theme;
  return theme[color];
}, function (_ref2) {
  var lineHeight = _ref2.lineHeight;
  return lineHeight;
}, function (_ref3) {
  var userSelect = _ref3.userSelect;
  return userSelect === true ? 'text' : userSelect === false ? 'none' : undefined;
}, function (_ref4) {
  var noWrap = _ref4.noWrap;
  return noWrap && 'nowrap';
});

var TransitionTextWrapper = /*#__PURE__*/_styled__default["default"](TextWrapper).withConfig({
  displayName: "type__TransitionTextWrapper",
  componentId: "sc-16386l-1"
})(["transition:font-size 0.25s ease-out,line-height 0.25s ease-out;"]);

function H1(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "headline headline-1",
    fontSize: 36,
    fontWeight: 400,
    lineHeight: "44px",
    noWrap: true
  }, props));
}
function Subhead1(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "subhead subhead-1",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
    noWrap: true
  }, props));
}
function Subhead2(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "subhead subhead-2",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "14px",
    noWrap: true
  }, props));
}
function Body1(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "body body-1",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px"
  }, props));
}
function Body2(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "body body-2",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px"
  }, props));
}
function Caption$1(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "caption",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px"
  }, props));
}
function Badge(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "badge",
    fontSize: "8px",
    fontWeight: 600,
    lineHeight: "8px",
    noWrap: true
  }, props));
}
function ButtonLarge(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "button button-large",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "24px",
    noWrap: true
  }, props));
}
function ButtonMedium(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "button button-medium",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "16px",
    noWrap: true
  }, props));
}
function ButtonSmall(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextWrapper, _extends__default["default"]({
    className: "button button-small",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "14px",
    noWrap: true
  }, props));
}
function TransitionButton(props) {
  var className = "button button-".concat(props.buttonSize);
  var fontSize = {
    small: 14,
    medium: 16,
    large: 20
  }[props.buttonSize];
  var lineHeight = "".concat(fontSize, "px");
  return /*#__PURE__*/React__default["default"].createElement(TransitionTextWrapper, _extends__default["default"]({
    className: className,
    fontSize: fontSize,
    fontWeight: 600,
    lineHeight: lineHeight,
    noWrap: true
  }, props));
}

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$h(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var white = 'hsl(0, 0%, 100%)';
var black = 'hsl(0, 0%, 0%)';
var brandLight = 'hsl(331.3, 100%, 50%)';
var brandDark = 'hsl(221, 96%, 64%)';
var brand = brandLight;
var stateColors = {
  active: 'hsl(221, 96%, 64%)',
  success: 'hsl(145, 63.4%, 41.8%)',
  warning: 'hsl(43, 89.9%, 53.5%)',
  error: 'hsl(0, 98%, 62.2%)'
};
var lightTheme = _objectSpread$h(_objectSpread$h({
  // surface
  accent: brandLight,
  container: 'hsl(220, 23%, 97.5%)',
  module: 'hsl(231, 14%, 90%)',
  interactive: 'hsl(229, 13%, 83%)',
  outline: 'hsl(225, 7%, 78%)',
  dialog: white,
  // text
  onAccent: white,
  primary: black,
  secondary: 'hsl(227, 10%, 37.5%)',
  hint: 'hsl(224, 9%, 57%)',
  onInteractive: black
}, stateColors), {}, {
  currentColor: 'currentColor'
});
var darkTheme = _objectSpread$h(_objectSpread$h({
  // surface
  accent: brandDark,
  container: 'hsl(225, 30%, 8%)',
  module: 'hsl(222, 37%, 12%)',
  interactive: 'hsl(223, 28%, 22%)',
  outline: 'hsl(227, 10%, 37.5%)',
  dialog: black,
  // text
  onAccent: white,
  primary: white,
  secondary: 'hsl(227, 21%, 67%)',
  hint: 'hsl(225, 10%, 47.1%)',
  onInteractive: white
}, stateColors), {}, {
  currentColor: 'currentColor'
});
var defaultTheme = _objectSpread$h({
  borderRadius: 1,
  fontFamily: {
    font: '"Inter", sans-serif',
    variable: '"InterVariable", sans-serif'
  },
  fontFamilyCode: 'IBM Plex Mono',
  tokenColorExtraction: false
}, lightTheme);
var ThemeContext = /*#__PURE__*/React.createContext(toDefaultTheme(defaultTheme));
function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  var contextTheme = React.useContext(ThemeContext);
  var value = React.useMemo(function () {
    return toDefaultTheme(_objectSpread$h(_objectSpread$h({}, contextTheme), theme));
  }, [contextTheme, theme]);
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: value
  }, /*#__PURE__*/React__default["default"].createElement(_styled.ThemeProvider, {
    theme: value
  }, children));
}

function toDefaultTheme(theme) {
  return _objectSpread$h(_objectSpread$h({}, theme), {}, {
    borderRadius: clamp(Number.isFinite(theme.borderRadius) ? theme.borderRadius : theme.borderRadius ? 1 : 0),
    onHover: function onHover(color) {
      return color === theme.primary ? polished.transparentize(0.4, theme.primary) : polished.mix(0.16, theme.primary, color);
    }
  });

  function clamp(value) {
    return Math.min(Math.max(value, 0), 1);
  }
}

var _excluded$6 = ["target", "href", "rel"];

/**
 * Outbound link
 */
function ExternalLink(_ref) {
  var _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target,
      href = _ref.href,
      _ref$rel = _ref.rel,
      rel = _ref$rel === void 0 ? 'noopener noreferrer' : _ref$rel,
      rest = _objectWithoutProperties__default["default"](_ref, _excluded$6);

  return /*#__PURE__*/React__default["default"].createElement("a", _extends__default["default"]({
    target: target,
    rel: rel,
    href: href
  }, rest), rest.children);
}

var UniswapA = /*#__PURE__*/_styled__default["default"](ExternalLink).withConfig({
  displayName: "BrandedFooter__UniswapA",
  componentId: "sc-kpe23m-0"
})(["color:", ";cursor:pointer;text-decoration:none;", "{fill:", ";height:1em;transition:transform 0.25s ease,fill 0.25s ease;width:1em;will-change:transform;}:hover ", "{fill:", ";transform:rotate(-5deg);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
}, Logo, function (_ref2) {
  var theme = _ref2.theme;
  return theme.secondary;
}, Logo, brand);

var Wrapper = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "BrandedFooter__Wrapper",
  componentId: "sc-kpe23m-1"
})(["margin-top:12px;"]);

var BrandedFooter = /*#__PURE__*/React.memo(function BrandedFooter() {
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    justify: "center"
  }, /*#__PURE__*/React__default["default"].createElement(UniswapA, {
    href: "https://uniswap.org/"
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.25
  }, /*#__PURE__*/React__default["default"].createElement(Logo, null), /*#__PURE__*/React__default["default"].createElement(Caption$1, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Powered by the Uniswap protocol"
  })))));
});

var _excluded$5 = ["icon", "iconProps"];

var _templateObject$4;
var BaseButton = /*#__PURE__*/_styled__default["default"].button.withConfig({
  displayName: "Button__BaseButton",
  componentId: "sc-1soikk5-0"
})(["background-color:transparent;border:none;border-radius:0.5em;color:currentColor;cursor:pointer;font-size:inherit;font-weight:inherit;height:inherit;line-height:inherit;margin:0;padding:0;:enabled{transition:filter 0.125s linear;}:disabled{cursor:initial;filter:opacity(0.6);}"]);

var transitionCss = _styled.css(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral__default["default"](["\n  transition: background-color 0.125s linear, border-color 0.125s linear, filter 0.125s linear;\n"])));

var Button$1 = _styled__default["default"](BaseButton).withConfig({
  displayName: "Button",
  componentId: "sc-1soikk5-1"
})(["background-color:", ";border:1px solid transparent;color:", ";:enabled{", ";}:enabled:hover{background-color:", ";}"], function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      theme = _ref.theme;
  return theme[color];
}, function (_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'interactive' : _ref2$color,
      theme = _ref2.theme;
  return color === 'interactive' && theme.onInteractive;
}, transitionCss, function (_ref3) {
  var _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? 'interactive' : _ref3$color,
      theme = _ref3.theme;
  return theme.onHover(theme[color]);
});

var transparentButton = function transparentButton(defaultColor) {
  return _styled__default["default"](BaseButton).withConfig({
    displayName: "Button__transparentButton",
    componentId: "sc-1soikk5-2"
  })(["color:", ";:enabled:hover{color:", ";}"], function (_ref4) {
    var _ref4$color = _ref4.color,
        color = _ref4$color === void 0 ? defaultColor : _ref4$color,
        theme = _ref4.theme;
    return theme[color];
  }, function (_ref5) {
    var _ref5$color = _ref5.color,
        color = _ref5$color === void 0 ? defaultColor : _ref5$color,
        theme = _ref5.theme;
    return theme.onHover(theme[color]);
  });
};

var TextButton = transparentButton('accent');
var SecondaryButton = transparentButton('secondary');

var StyledIconButton = /*#__PURE__*/_styled__default["default"](SecondaryButton).withConfig({
  displayName: "Button__StyledIconButton",
  componentId: "sc-1soikk5-3"
})(["height:1em;"]);

var IconButton = /*#__PURE__*/React.forwardRef(function IconButton(_ref6, ref) {
  var Icon = _ref6.icon,
      iconProps = _ref6.iconProps,
      props = _objectWithoutProperties__default["default"](_ref6, _excluded$5);

  return /*#__PURE__*/React__default["default"].createElement(StyledIconButton, _extends__default["default"]({}, props, {
    ref: ref
  }), /*#__PURE__*/React__default["default"].createElement(Icon, iconProps));
});

var AccountButton = /*#__PURE__*/_styled__default["default"](TextButton).withConfig({
  displayName: "ConnectedWalletChip__AccountButton",
  componentId: "sc-1pistx8-0"
})(["filter:none;visibility:", ";"], function (_ref) {
  var hidden = _ref.hidden;
  return hidden ? 'hidden' : 'visible';
});

function ConnectedWalletChip(_ref2) {
  var disabled = _ref2.disabled,
      account = _ref2.account;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useWeb3React = core.useWeb3React(),
      connector = _useWeb3React.connector;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(AccountButton, {
    hidden: disabled,
    onClick: function onClick() {
      return connector.deactivate ? connector.deactivate() : connector.resetState();
    },
    color: "secondary",
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    "data-testid": "account"
  }, hover ? /*#__PURE__*/React__default["default"].createElement(Caption$1, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(WalletDisconnect, null), /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Disconnect wallet"
  }))) : /*#__PURE__*/React__default["default"].createElement(Subhead2, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(IdenticonIcon, null), account === null || account === void 0 ? void 0 : account.substring(0, 6), "...", account === null || account === void 0 ? void 0 : account.substring((account === null || account === void 0 ? void 0 : account.length) - 4)))));
}

function useConditionalHandler(handler) {
  return React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var result,
        _args = arguments;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (handler) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", true);

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return handler.apply(void 0, _args);

          case 5:
            result = _context.sent;

            if (!(result === false)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", false);

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", false);

          case 13:
            return _context.abrupt("return", true);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  })), [handler]);
}

// If set, allows integrator to add behavior when 'Connect wallet to swap' button is clicked
var onConnectWalletClickAtom = jotai.atom(undefined);

function isAnimating(node) {
  var _node$getAnimations$l, _node$getAnimations;

  return ((_node$getAnimations$l = node === null || node === void 0 ? void 0 : (_node$getAnimations = node.getAnimations) === null || _node$getAnimations === void 0 ? void 0 : _node$getAnimations.call(node).length) !== null && _node$getAnimations$l !== void 0 ? _node$getAnimations$l : 0) > 0;
}
/**
 * Delays a node's unmounting until any animations on that node are finished, so that an unmounting
 * animation may be applied. If there is no animation, this is a no-op.
 *
 * CSS should target the class returned from getAnimatingClass to determine when to apply the
 * animation.
 * Note that getAnimatingClass will be called when the node would normally begin unmounting.
 */

function useUnmountingAnimation(node, getAnimatingClass) {
  React.useEffect(function () {
    var current = node.current;
    var parent = current === null || current === void 0 ? void 0 : current.parentElement;
    var removeChild = parent === null || parent === void 0 ? void 0 : parent.removeChild;
    if (!(parent && removeChild)) return;

    parent.removeChild = function (child) {
      if (child === current) {
        current.classList.add(getAnimatingClass());

        if (isAnimating(current)) {
          current.addEventListener('animationend', function () {
            removeChild.call(parent, child);
          });
        } else {
          removeChild.call(parent, child);
        }

        return child;
      } else {
        return removeChild.call(parent, child);
      }
    };

    return function () {
      parent.removeChild = removeChild;
    };
  }, [getAnimatingClass, node]);
}

var Column = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Column",
  componentId: "sc-1ul9eki-0"
})(["align-items:", ";color:", ";display:", ";flex-direction:column;flex-grow:", ";gap:", ";grid-auto-flow:row;grid-template-columns:1fr;justify-content:", ";padding:", ";", ""], function (_ref) {
  var align = _ref.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color && theme[color];
}, function (_ref3) {
  var flex = _ref3.flex;
  return flex ? 'flex' : 'grid';
}, function (_ref4) {
  var grow = _ref4.grow;
  return grow && 1;
}, function (_ref5) {
  var gap = _ref5.gap;
  return gap && "".concat(gap, "em");
}, function (_ref6) {
  var justify = _ref6.justify;
  return justify !== null && justify !== void 0 ? justify : 'space-between';
}, function (_ref7) {
  var padded = _ref7.padded;
  return padded && '0.75em';
}, function (_ref8) {
  var css = _ref8.css;
  return css;
});

var Rule = /*#__PURE__*/_styled__default["default"].hr.withConfig({
  displayName: "Rule",
  componentId: "sc-1568p9j-0"
})(["border:none;border-bottom:1px solid ", ";margin:0 ", ";margin-bottom:", "px;margin-top:", "px;max-width:auto;width:auto;"], function (_ref) {
  var theme = _ref.theme;
  return theme.outline;
}, function (_ref2) {
  var padded = _ref2.padded;
  return padded ? '0.75em' : 0;
}, function (_ref3) {
  var scrollingEdge = _ref3.scrollingEdge;
  return scrollingEdge === 'bottom' ? -1 : 0;
}, function (_ref4) {
  var scrollingEdge = _ref4.scrollingEdge;
  return scrollingEdge !== 'bottom' ? -1 : 0;
});

var Animation;

(function (Animation) {
  Animation["CLOSING"] = "closing";
  Animation["PAGING"] = "paging";
})(Animation || (Animation = {}));

var Context = /*#__PURE__*/React.createContext({
  element: null,
  active: false,
  setActive: function setActive(active) {
    return undefined;
  }
});
function Provider$4(_ref) {
  var value = _ref.value,
      children = _ref.children;
  // If a Dialog is active, mark the main content inert
  var ref = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var context = {
    element: value,
    active: active,
    setActive: setActive
  };
  React.useEffect(function () {
    if (ref.current) {
      ref.current.inert = active;
    }
  }, [active]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref,
    style: {
      isolation: 'isolate'
    } // creates a new stacking context, preventing the dialog from intercepting non-dialog clicks

  }, /*#__PURE__*/React__default["default"].createElement(Context.Provider, {
    value: context
  }, children));
}
var OnCloseContext = /*#__PURE__*/React.createContext(undefined);

var HeaderRow$1 = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "Dialog__HeaderRow",
  componentId: "sc-c8nkza-0"
})(["height:1.75em;margin:0 0.75em 0.75em;padding-top:0.5em;", " button{height:", "em;}"], largeIconCss, function (_ref2) {
  var iconSize = _ref2.iconSize;
  return iconSize;
});

function Header$2(_ref3) {
  var title = _ref3.title,
      children = _ref3.children,
      ruled = _ref3.ruled;
  var onClose = React.useContext(OnCloseContext);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    "data-testid": "dialog-header"
  }, /*#__PURE__*/React__default["default"].createElement(HeaderRow$1, {
    iconSize: 1.2
  }, /*#__PURE__*/React__default["default"].createElement(TextButton, {
    color: "primary",
    onClick: onClose
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    justify: "flex-start",
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeft, null), /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, title && /*#__PURE__*/React__default["default"].createElement(Subhead1, null, title)))), children), ruled && /*#__PURE__*/React__default["default"].createElement(Rule, {
    padded: true
  }));
}
var Modal = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Dialog__Modal",
  componentId: "sc-c8nkza-1"
})(["background-color:", ";border-radius:", "em;display:flex;flex-direction:column;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:", ";"], function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  return theme[color];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius * 0.75;
}, Layer.DIALOG);
function Dialog(_ref6) {
  var color = _ref6.color,
      children = _ref6.children,
      onClose = _ref6.onClose;
  var context = React.useContext(Context);
  React.useEffect(function () {
    context.setActive(true);
    return function () {
      return context.setActive(false);
    };
  }, [context]);
  var modal = React.useRef(null);
  useUnmountingAnimation(modal, function () {
    var _context$element$chil, _context$element;

    // Returns the context element's child count at the time of unmounting.
    // This cannot be done through state because the count is updated outside of React's lifecycle -
    // it *must* be checked at the time of unmounting in order to include the next page of Dialog.
    return ((_context$element$chil = (_context$element = context.element) === null || _context$element === void 0 ? void 0 : _context$element.childElementCount) !== null && _context$element$chil !== void 0 ? _context$element$chil : 0) > 1 ? Animation.PAGING : Animation.CLOSING;
  });
  React.useEffect(function () {
    var close = function close(e) {
      return e.key === 'Escape' && (onClose === null || onClose === void 0 ? void 0 : onClose());
    };

    document.addEventListener('keydown', close, true);
    return function () {
      return document.removeEventListener('keydown', close, true);
    };
  }, [onClose]);
  return context.element && /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(ThemeProvider, null, /*#__PURE__*/React__default["default"].createElement(OnCloseContext.Provider, {
    value: onClose
  }, /*#__PURE__*/React__default["default"].createElement(Modal, {
    color: color,
    ref: modal
  }, children))), context.element);
}

var METAMASK_ICON_URL = "data:image/png;base64,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";

var WALLETCONNECT_ICON_URL = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%3Crect%20width%3D%2224%22%20height%3D%2215.0867%22%20fill%3D%22url%28%23pattern0%29%22%2F%3E%20%20%3Cdefs%3E%20%20%20%20%3Cpattern%20id%3D%22pattern0%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23image0%22%20transform%3D%22translate%28-0.00968744%29%20scale%280.00339792%200.00540541%29%22%2F%3E%20%20%20%20%3C%2Fpattern%3E%20%20%20%20%3Cimage%20id%3D%22image0%22%20width%3D%22300%22%20height%3D%22185%22%20xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAASwAAAC5CAYAAACSoQIxAAAgAElEQVR4Ae19fZgdVZnn761TnQ%2FCtwmugxhkGPXZDIjDoENIuu9twsAm4CS7EpFhWHYktN23AwzC6Dg6xI%2FVWcGsk%2FTtNgQ0MogQ9lkQDAtLTN%2FuhDjIk5koG10eWRwQdAjRYBLIR9epd5%2B3um%2FS6dx7%2B35U3Vt16tx%2Fqu6pc96P33vqd8%2BtOu85BPuxCFRAYF4%2Fn%2BJ4ONNV3izt0AzycRwRzQBjBgPHEfszfMIMIjqOGDNAmAHguDGRb4HxJhPeZOa3yMFe%2BM5%2BR74DbzHzmyC8ST7vZXJ%2Fs9fFL7Z10e8qmGMvpRwBSrn%2F1n0AF97Np07d753rK2eOw%2F4fENG7ffCZYDrTIZzYTJAY%2BB3AvwDoX5nk6PxcaWfHb2fgJ9v%2FC73RTFusrvghYAkrfjGJ1KL21XyO4%2BgPMvhch%2BhcAHMAzIpUaUjCmfEagP8D4ucA2u6z%2BtFwjn4WkngrJgEIWMJKQJDqNfE%2FfJNnvXVQz3OYLwToAmZ8iAjT65UXy3aMfSD8E3x%2BlhVtPdimtv7wevptLG21RjWMgCWshiGMj4DzvsUnn3RAZx2NLDvcSSAZPaXq4zN8Av8YwCZi2rST1PCOHO1LFQgGO2sJK%2BHB7cjzBWDvcihc7jD9UcLdicR8Zv4hkfOY1s73h5fTc5EosUKbgoAlrKbAHJ6Ss1fx1He26UvIx4dBuBzAO8KTbr4kZvwrgx91GI%2FyLneosII88702x0NLWAmJZTCSIn29A3wMwAkJMTvWZjLjN8z8bZrmDhSupxdibaw1LkDAElaMO8JF9%2FAJ6qB%2FrQP%2FegKdF2NTE28ag7cw0V2vjqj1L9xIBxPvkKEOWMKKYWDb8zzXgV5GhKsATIuhicaa5DP2EHAvjai%2BwZvpeWMdTahjlrBiEjgZTU095P9nH%2F4NxHROTMxKtRkMfpqJ1thRV3y6gSWsFsciczefjUP6UwRcY0dTLQ5GGfWjoy6%2BS7vuys1d9Osy1WxxExCwhNUEkEupGCOqLzJjqUNwStWxZTFDgHGQgbXaVV%2B2xNWa2FjCajLulqiaDHgU6ixxRYFqVTItYVUFU%2BOV2vN8hkP6y2N%2F%2FRoXaCXEAgFm%2FgeP3M9v6aHdsTDIcCMsYUUcYHmY7h7yPuv4dBMIUyNWZ8W3AgHGbhB9aY9yVm%2FropFWmJAWnZawIop0ZgW7fJrf7YD%2FDsDMiNRYsXFCgPGiT%2Fj0UI%2F7UJzMMskWS1gRRDPbN3Kx76DfAb0nAvFWZMwRkEmo2nG7Nn%2BCfhpzUxNnniWsEEMmy7nsP6BXEYIJnyFKtqIShwDDA%2FF%2F36PcFdu66K3E2R9Tgy1hhREYZur8hp%2Fzmb9EwElhiLQyjEHgZQDLB3vcR43xqIWOWMJqEPxsH89h8tYR0R83KMo2NxuBR5lVVyFH%2F2a2m9F6ZwmrXnxXsJM9zf%2B0D77dAabUK8a2Sw8CPvBbYvQUcu6D6fE6XE8tYdWB5%2BjkT%2B8BAp1fR3PbJO0IMP7nm6xu%2BFEv%2FSbtUNTqv00JqQUxZmrP65twUP%2FEklUtwNm6RyFA%2BI%2FTSf80kx%2B57Khy%2B2VSBOwIa1KIRitk1vBMaL2egGyVTWw1i8CkCDCj7%2FVZ6pM7ltKhSSvbCrCEVUUnyPTzn4D1I0R4exXVbRWLQE0IMPO%2F%2BFPc%2FzS8jH5RU8MUVrZ%2FCSsFnZkyffqzBL3FklUloOy1RhAgog%2BoEf3jbL%2F34UbkpKGtHWGVifIH%2B%2Fhtx5F%2BkAgXl6liiy0CoSPgM68ayrXdFLpgQwRawioRyMwafh95%2Bn%2BDcEaJy7bIIhApAj54q4Z7uV0B4liY7V%2FCCZhk%2B7yF5OlnLVlNAMZ%2BbRoCDmiuy%2Fqf5YezaUoTosgS1rhAZfv1Z9jB90E4flyxPbUINB0BIpwpP5zyA9p05TFWaP8SjgUn2%2B99B8DVMY6VNS2lCDDRrYVu9bWUun%2BU26knrGAnZaUfI8IlRyFjv1gEYoQAg79e6Gn7qxiZ1BJTUk1YQlZnuPoJAJmWoG%2BVWgRqQMBnfHOoR10PIq6hmVFVU0tYF67k6dOm6cctWRnVn9PgzEO8U11dWEFeGpyd6GMqH7rPyfPxU6Z5Gy1ZTewO9nsCELgSp%2BlH5d9BAmwN3cTUjbDOvZdnnLrXe4qILgwdTSvQItAkBJh58%2BtwF%2B7I0b4mqYyFmlQR1odW8YnTlfcDu9heCH2PsY%2BB34H4DTkS6HeQ74w34PDosik%2BvQ2EkwGcxOCT4ONkIjopWJXVTh1pOAjM%2FE%2F7tXvpMzfSnoaFJURAaghLUm2mO94mB3RuQmLTOjODjUL5ZSJ6yWe87BC9xOCXoPklV7kvezvxcqPPUGRXIecdmA3fm%2B379C44NJuYZ%2Fs%2BZpOD2QycYRdGnLwLMHj7fs%2FtSAtppYKw%2FnSATzvke1uI6A8m7wKprLELjGENGoZ2hod%2Fix9jBfktRWI9q8xr%2BABcv4OY28GYD8IpLbUppsqFtDy4nWlI5TGesC65h3%2FPO6i3AHh3TPtbK8z6FQPDTDTskzOUiO2omGn%2BAM5xMEpgDLQ7hNNaAV4cdTJ4B5SbKXTRrjjaF5ZNRhPWgjX8Lq31ZgDvCguwBMt5GeAHR%2BA%2BuKWHtiXYj1HTmakjjz8BeVc5oKUg%2FLvE%2B9SgA8z8PFx3nsmkZSxhtef5DEX6GQDvaLAfJLn56wz%2Bjtbu%2F9i8nJ5OsiOT2d45MNKpmT7qMK5M819H%2BXtY6Gn7wGR4JfW6sYSVyY88m9K3gW%2BCcT85%2FMCm7rZNSe2YjdgdJAw7wWa2f9GInMS29fkrg71tn0ms%2FRUMN5KwMnnvOiJ8q4LfJl76NTOt3K%2Bdu9LyxmiyIMqb4RmOn%2FPBNznAqZPVN%2Bj6G4M9rpEvKIwkrGy%2F9z0AqVhulsE%2FZqb%2FNpRzv2vQDRe6K5m893Em%2FmsH9J7QhcdRoK%2F%2BcLCXdsTRtEZschtpHNe2zHwWkZFcPB7yR4n4HwZT%2BrdvPBDVnBdy7j0A7sn2eX%2FGxJ8kovnVtEtqHQLellTbK9ltJGGBYGxiKDMe86E%2BNZyjn1UKrL1WGoHBXldG39%2Bbv4o%2FqFxvJYEuKl0z4aUK%2Fy%2FhHpQ030zCAv1fAOeV9DihhcEra0JvIdcmSdv20yACm2%2BkHwGYlxnwroKPO4lweoMiY9NcUnYGe%2BjV2BgUoiFGrtbgAPeGiFFLRTHjNz5RTyHX9r5CjyWrsINR6HYfwHHqbPbpc8zYH7b8Vshjh77aCr3N0Gnsg56O%2FpGnZTH%2FZoAYlQ5ZZXKvclds6woSi6NSY%2BWOITB%2FDb%2FD9fTfg3BtYkFhfGcw516TWPsnMdxYwjp%2FDR93gqcfTei%2BggXtqBuGP0E%2FnyR%2B9nIECMzr5%2FNdePcQ6P0RiI9OJGP9YM79aHQKWi%2FZyL%2BEAuu2LnrrFa0WMeOp1sNcnQU%2Bw2fmzw%2FuVBdbsqoOsyhqSerSK577IWZ8Iwr5Uchk4IHBWcr4TVSMHWEVO8X5a7jtBE9viPsmE8x4zYX6yMYcSaK2%2FcQEgUy%2Ft5gY%2Fxjnrd%2BErArd6uo0rPVuPGFJvw9IS%2BuHCVgUk%2FvgKDMYGIRSS01OWj3K4YR9yQzwmWDvkVj%2BRWTcO9ijrksDWUm3SQVhiaOyYBxm6fVEWBKb%2B4XhMdFnC93OV9PS4WKDfY2GjI7UvTuI6KYam0ZXnbF2sEd1panvpIawir0m0%2B89QEDLH0wy4RVPq49s6SVZUcJ%2BEoJAZsC7HIz7gmWeW2gzM%2FoKOXd5C01oiWpjH7qXQ7MwU%2F25%2FOcvd70Z5T74J8pVf2zJqhloh6uj0O1%2B33PVBwG8HK7k6qWllawEodSNsIJuwUyZAX0%2FIViCpPqeEkJNeV61V6nL5S1mCOKsiBYhkFnDM6G9Jwh0fjNNSDNZCc7pJCzxnJmy%2FXpdUycJygPSWeovsZR0Mzu51RUNAplv8TTs1w8RcHk0Go6Wysx3FnJttx1dmq5v6SUsifMoaa0BYVn0YafbB3vUF6LXYzU0FQFZqvkb3t87TH8dpV6Zn1fIta2IUkcSZKebsMYilM17d0VFWgyMyCguyFlLQo%2BwNtaFQHveu1YRvglA1SWgQiNmuq2QU3dWqJKaS5awxkKdyY98PYJX1geIeFFalypOzV005mhnfuRPmUiWr5kWnu%2F0ycEetTI8ecmWZAlrXPwyeW81EXrHFdV%2FytinoS4dztHW%2BoXYlklDoD3Pcx3ojUSY3qjtRLR8U7fqa1SOSe0tYU2IZiY%2FIpMDb51QXNtXxj4fqnMoR8%2FW1tDWNgGBMEjLZ9wwlHPXmoBHmD6kbh7WZODJWxh5wDlZvXLXfcYeS1bl0ElHuYyqfagFYOyr1WMG2JJVedTsCKsMNpm8vpWI7yhzuXQxYzdDdRZytL10BVuaJgQ68nyBA72p2sTpMbK6bjjnGrMAZdjxtoRVAdEaSWsXfJUxcaeSChDZS5MgIKQF6I0O4cRKVYWsQLjavk2uhFKaJ45WxuXw1c4B3cvMqw8XlD7ZhUNq3uDN9Hzpy7Y0zQhk8nweQw9VIC3NhGssWU3eS%2BwIa3KM0JH3ljmEu0pVlXWsaER1WLIqhY4tKyJQgbS0T7hyqNt9uFjXHssjYB%2B6l8fm8BV5W0Og7sMFR05%2B5Ss135LVEUDsWWkE5LkmQXXIKh3jarzpM5ZYshqHyCSndoQ1CUDjL49NDPwbBhOBdrpT1c1PfZx%2BNb6OPbcIVELgvG%2FxySfv84It6BzX%2FfmmbjO346qEgb1mEbAIWAQsAhYBi4BFwCJgEbAIWAQsAhaBOhCI5BnWJffw740c8JaDcGFgE9Mb5PDAYHfbk3XYaJskBIHsKn4%2FlL6FiWeLycT0kvbVncPL6bmEuGDNrAOB7MDIpexTN4hPDuLuY6vX5q7e3EW%2FrkNcxSahE1YmP3InEX2ylFYGb%2FMd92N2z71S6CS37Pw1fNIJWq8jYHEZLx7ao9Qyu4N1GXQSWjz%2FG%2FzvHd%2F7rgM6t6QLPn9lsLftMyWv1VkYGmFVu5WW5NoBaoFNDK4zYjFrdvFafrs%2B5A0R0XsrmcbMz6spbscPltFrlerZa8lAoIYZ%2FBv2KrVkWxeNhOFZKPOwzl7FU4PNSqvY909m%2B0p%2B1ajDYbhgZbQKgc4BPt0%2FpLdORlZin9SRukJwrbLX6g0HgbHVKDZVmLl%2FWJHsBSrcIBxxuLCBk4ZHWGLIGa5%2BQrb%2Bq8kOu15UTXDFrXJAVqyfJiB4XlW1fYwXyVHtdv5R1YjFqmIDS%2BcUfumpy164kQ424lBDhHXhSp4%2BbZp%2BvGayGrOYGfvh88LC8rZCI07Yts1FoPNunu0f0kM1k1Ux7sBLzhTVsel6eqm5llttjSCQWT2SgUOPN7A4YeHAAbXwh7fQ%2FnrtqPsv4Zw8Hz9lmrexXrISg8VxcuiJAIh6PbDtmopAQFYH6xhZjbNSiM4%2FqJ8WWeOK7WmMEejoG7lE7tUGyEq8ywhnCHfU62pdI6wPreITp7veRgJdUK%2Fio9oxDvrMVwz1tj11VLn9EisEFvTzWR7rYSKcHoZhzHjVJdW%2BsYdeDEOelRENAmNktYGAtjA0MPjZ%2FZ674JkbaU%2Bt8momrHn9fIoLbxOBgnyoWhWWqy%2B7yxCwZLDH3VCuji1vHQLZr%2FN7uU0PESHUh%2Bay2oVLaq4lrdbFtpLmbL%2B3iIGHwyKroi4Gb9%2FvuR21klZNhDVGVpsJNKeoONQjwwNhsSWtUFFtWJiQFaboLQBmNiyshAC7RE8JUGJQJGQFxiMguFGYI6Tlwe3c0kO7q5Vf9TMs2ZrbhRcdWYnFAgzjkY4Bb0m1Dth60SKQ7eM5UZJVEHYZtU3RWwJd0bpjpVeJQHAPRkhWQdxB5wmnCLdUaRaqIqxg7oznbYlsZDXeWoLrMB6ypDUelNacy6JzIL05qpHVBK9mii5LWhNQacHXzIB3ldyDUY2sxrsUcIrnbal2ft6kfwllvg37ehiEs8YrasK5XTa2CSCXU1FhhcxyTcIptxt5hINjnVKErMC4n5q9fDrjRWeKmjtZJkTFEVZxcmALyErgVgKcbAFeJ%2Fa2WZ0ISBbCJGuQ1ym5imaEU0S3zYSoAquQqwT3WivISvwgnCWZEMI5ldwqS1jBfJt6ZjJX0lbjNWF5h7DOklaNwDVQXYhCUqeqSbtoQE3FpjZ9qyI8kVwc27dAEtgn%2FdcViQEiVEiLK8%2FPK0lYMt9GJvbVO5M5TIeKpCWAhinXyjoWgWKOWLX76B0rIcQSwvFCnGJTiFKtqBIIFDdZaSlZjdlVnFQsHFTC1GMfussrbI8loTWcyYGllNZaNkZad8mWW7W2tfWrQ0CyDRzojbEgq6LJo6S10ZJWEZDwj3JPldsRKnxt1UkU7hEOCqbTTGhy1PAv6vk2E3TX9ZWIlm%2FqVn11NbaNSiIgZCVpFyCEklFfUkkDhTbntAHwKjStcs%2FNChIiv3TMfp%2BH%2FxI2Y75NGO7JpqayI3MYsqwMoJgjFleykhgVc07FVhuzcBCQe6iKDYLDUVa%2FlJkT5%2BcFI6yArJxgJnOwxGn98pvZkv52sEd9uZkaTdOV7fMWwkGiUqEIWLipx%2F1fpsWimf5k%2BvRnyeEvNlNng7re8Bx10eZP0E%2Bd89fwcXD0YwASRFbiPv%2FXzMDIlxoEIrXNs33enyWNrIKoA49n%2B70PpzZwDTqe7Rv5csLISjw%2BWfn6UTlxTvD8vwLw7gZxaElzYvrbTH7kKy1RnmClmbz3ETh4JMEufC%2FT75VbPz7BbkVrekffyNfg0N9EqyUa6QT8frZf3%2BIAfqIDT0Sflo0vooHJPKmZvPdRIjyUdM8IeDjb5y1Nuh%2FNsr9jYGSl49AtzdIXjR6%2BwiGis6MR3jypsktPJu%2Btbp7GZGqStAsifCeZ1pew2sH9QSpJiUu26AgC2bx3l8Mk%2F6SS%2FWG8T94Sesn2YtR6IvRKYMB81FQNE3wLw4di2kWQ8hSGwHjICNK3LGmVCQYzBfcEwYhJ1z7gOMz8szLuJq%2BYsCwzoO9KnuHRWpzJex9XhG%2FHYSZz2J6KT8T4bvuA95dhy066vGy%2FXgtDyEpiQcBzDoiMusEJuL4j792T9M4Wlv3ZvO4hwt1hyYurHMW4J9uvb4irfc22K9vv3QvCx5utN0p9BPSPzsPq92Qt9QVRKmu2bAbuK%2FS4f9FsvXHS19GvlzvgVXGyKWpbNKh3uEflo9YTZ%2FnZvHcfCH8eZxtrtY2B7xd63CuCme67p6srmflfahUS5%2FoEXJPp974bZxujtG30FXC6yErwVOC%2Bzn59c5TYxll2Nu89aBpZ%2BcT%2FvN9TAQEffkAd%2Bk44MYkqMx7G62ppYQUZ8XKhGlgl7YKI76imrql1mOm2Qk6lZrpLZgW7mKXXE8Go5cUn7rBzmLCk48p%2BYbMo2BEnnO27YnI3MLABO9XiNJBWdkB%2FDsxfiAn0LTUjLaR1%2FhpuO0Fr2dlmUUsBD1m5D966i91Ld%2BRoX1H04eRnKZALr7PbKRWLFUw4BoE8TT8igTXBn3I%2BZPIjd1iyOoKOjDIzA%2Fr2IyXmnQVk5WnZM9A4sjp0wF0wnqwkekcRlhRIBakIwKjt4yWgJ3h6w9mrOJZLqDR6KwlZEZFdxWICkMS8IiDyCeUmfJW%2BLH2aCKatYlEQDiq1pf1RfwnHB1HAeKfSj5kIxi89ddkLN9LB8f4m%2BVxm%2BcvE2ST7ELXtzHxnIdd2W9R6miX%2FwpU8fdo0%2Fbhs%2F94snc3Qw4ynXtHqinL3Z1nCEuMODzcNZPADB9TCUgzejKCEqcOSVfVoMqOvkHOXV98injWFrKZM8zY6IKOWjxay2uuqRdu6aKQc8hUJSxqZ%2FECv3LCzHFixKpe0i369xqSZzE3Bl7F2MOcmdoKpvBibSd6TxpEVsGGvUksqkZX0j2OeYU3sNIGAnWpxMD1g4sUEf5eAy6%2BUdIDEuTFKVussWdUROcKypOacFt%2FiG0dWMvVop1o8GVlJtCcdYR3uEutZZXbp%2Bwi46nCZAScT53nE3qUjZGX3a2wkWIx7B3vUdUEmYiNymtTW2HmSwAOFmeoaLCVdDZTVE5ZIY6bMgJZdYU0jre37PbfjmRtpTzWgtayOoT8arcKT5WbpVlfHnbTm9fMpLoL5kee1Cqso9NaDf22EJVYb%2BgvP4O0e3M4tPbQ7iuA0LFPI6nX9kGkzmRvGpUEBwU1Twy98g%2Bpqbj5GVpsJNKfmxnFuUOcIt3bCEhAMfeDL4B1QbqbQRbviFGtT0y7igrE8ny3MUldW%2B7ekWXZn1vBMaK9gIFmtHexRXfWMbOsjrLGImbQ4WLETMvPzcN15cSGtgKxO04%2BYNpO5iHdcjnHLOb14Lb9dH%2FKGiOi9ccEoDDsanVrSEGGJAybOAxLSUlPcjh8so9fCCFK9MkydUlIvHlG3k5zTal6tR22HkJV%2FSG8FoeR27VHrj0p%2Bo2Qldk06rWEy42Uinswinqxekq7Lr5p0GOk4rbL7cNqFYTlircKzGr3F9C35oaimfhR1Ogf4dDPJSjINGp%2B02zBhSdAk5cH3DVshgHCWdBzpQFF0zEoyhazOcPUTBqZFVXI7FtcE81blnHbezbN91k%2BbN7Liz4eVFtXwX8LxvczEdZgYeMmZojo2XU8vjfc1qnNTc8SiwitCuYVm5pwGZHVQP02Epv9ARoihvJ8LdV2yUAlLHDeStBivOlPVRVGTlqlpF1HeEBHLLjQj53RBP5%2FlsR42jayIaPmmbtUXZoxCJywxrnNA9zKzUfsEMuNVl1T7xh56McwAFGUV0y4IZNTiiUX%2FknostYhcmL6MkdVWIrTseWmY%2FhRlRUFWIjsSwhLBHXlvGRHWmLS1FDNec0nNDZu0TE27KHbepB8lfUsWtpy4mFyjfmW%2Fzu%2FlNj1kElmxzNJkdA3l3LWN4lOqfWSEJcpk806HsM400qIR1TF4Mz1fCtBay0xNu6gVh7jXDzvnNNvHc%2BBoWSRzZtx9r9Y%2BISufcd1wzr232ja11gvlLWE5pYHhDKM2uAx%2BDafozZkB%2FsNyfldbfuHdfKpL3hCBjMoR88E%2FYeLnqsUhCfXkr%2Fp05RXkB6ZRe9tX8zm%2Bo4dNIivBJGqyEh2REpYoKOTcdRpm7ZEGYBazHsqu4vfX23kl7WLKIW%2BQmM6pV0Yc2zFj3VBP2%2FsL3W3nAvh2HG2s1yYi%2BoAkITdCWvP7%2BI%2BUo4cc4NR67YhjOyZ8LMqRVdHnSP8SFpXIsWPAW%2BL4WA%2BCO7480eeM3QzVWcjR9lr8CHLEPG%2BLaWkXmJjQam6ifF05px15vgDQGx3CibX0l1jXZXi%2Bg6VD3e7DzbAz8hFW0YnAIcJiMMzZH5BwCkMPjXbEoqeVj8HseTPJShJaj15fioiDMkYkD2ArIx3d1SAZ2fO2BD88VaqRPuJAbzKNrEBY3CyyEqibRliibLDH3SAOMlB2zeYq4x%2BbatIBpSNWQ1rFtAvTRlaSIxYsO0zExwRGSCvn3iB1jrmW4IIghp63pZr0rfY8z5U%2BAkLyVrctE6PgHiYsDu7pMnWiKG4qYYkD4iD7vAgMY3atkY4oHVI6ZrkgBWRlZtpFVTliJuecVkrfGiOrjSaRldy7cg83m6zk3mo6YYnSod62p9jnywwkrY2lSKuYI0bA7HKElsTyWrfOknwy0xLlJe9P8v9KkVZm9UjGgd5IhOlJjG8pm5mxX%2B5duYdLXY%2B6rCWEJU4VlrcVxHEBIGonmyVfOqZ0UOmoRZ0yk9mXHDHDyApEf1dPQutoGzJqN2aJbUBad%2FPhH6SOvpFLyCFJYDeKrHyoBXLvFvt3s49Ne0tYzrH5q%2Fki19FPGDVkBg744JUM51cO8%2BdMmskscQwjoTXbr28D%2BKvl%2BkUiyxn%2F5jv0BdL%2BbHLoU4n0oZzRjH0a6tLhHG0tV6UZ5S0nLHHSyNe9zYheC3SEmSNmYs5pC0ISuUqfsQdQC4Zy9GzkyiZREAvCEhszeT5PpggY9dp3EvCTdDmqHDHJOXUIdyUJi1TZWudcw6gwig1hiYNCWjT6%2Brfh9IeoAEuj3KhzxExMlDeinzB2g9X8wV7aERd%2FYkVYAoqJSaFxCXY9dkRNVkWbTEyUL%2FqW0OMu%2BCoTJ7ISHGNHWGKUictuJLTTaiZcU%2Bh2H2iG%2FZkB7ypi3AdANUOf1VEaAVlGKcwVSUprqa80loQlrpi6sFl9YWpBqybniBU9DHJOGQ9Z0ioi0txjVGu%2BheVFy%2BZhTeaALJIni%2BXJSp%2BT1bXXQ0ZA8j2bnCNW9EDy0nzClUblnBadi%2FlxbFXd0BeoDNPt2I6wik4Gs8QP6SHjJl4WHYzZUXLECFjSirSL8VBk%2B71FDDxMQMu23Bpvj%2Bnnzd5spV48YzvCKjokGz84pC4CI5K11It67FFmhLYuR2wi%2FkbmnE50Mi7fGS%2FKPRb1JithuBv7EVbRSVN3wy361%2BpjkCLl88JWpl2UwkDSnCTFBYSppa7bsgYRELKaoua2epfzar2I%2FQir6IgAKsDKNvLFMnsMCQHGvlbniJXzxMSc03K%2BNrtc7qUkkZXgk5gRVjGYwaJp2isEi6gVC%2B2xfgRGyaozDmkXlZyQVTAU9JOG5ZxWcjnSawyua9XUSI2qQnjiCEt8GttpZrMlrSoiXKFKnHLEKph5%2BJLNOT0MRUMnDN7uwe3c0kO7GxLUgsaJJCzByW6P1WBviVmOWLXe2PStapEqXU%2FIar%2FndjxzI%2B0pXSPepYl5hjURRvl1EOBlv7iJ1%2Bz3SRHYJTlitW6eManUJlQIbGY1H5LnZj81ITC2t2JiyUqcTewIqxgp2eJ9JnlPOqCyyxMX69pjgMAuHFLzwtoItlWY2pzT2pD3wVt3sXtp2LtX12ZF47UTO8Iqui4BOHTAXSABKZbZY2kEJO3CBLIS74Kk3ENqXuBTaXdt6REECnKPJJ2sxJ3Ej7CKMblwJU%2BfNk0%2FLqvUFMvs8QgCY2kX7ZLydKQ0%2BWdjOafDRDg9%2Bd5E4kHhl5667IUbyYhNX4whLAn12at46qA5Wb8AAAVoSURBVDuVfowIl0QS%2BoQKTUraRb3wBulbsm6%2BJa2jIGTGU69odYUpZCXOJf4v4fgISWD2ukpy0DaML0%2F1eYLSLuqNU5C%2BNVVdJMRcrwzT2sk9IPeCSWQlMTKKsMShbV00gp1KNmu1pDWWdrGpm4xf8cLmnB6h3KDv71SLg3vhSLERZ8YRlkSlsIK8gLQYDxsRpTqcSGLaRR1uHtVEiDnt6VssfX6nWhzcA0ehY8YXo55hHROS9awyu%2FR9BFx1zDWDC5KadhFWSIL0Lc%2FbEmwnH5bQBMhh4IHCTHUNlpJOgLl1mWg2YQkkzJTt1%2BtAuLYuhBLWKMlpF2FCnbqcU8a9gz3qOhBxmDjGTZb5hCWIp4S0kp52EfbNkZr0rZSQlfQPI59hHdPxiTj49WGsPeaaIQUmpF2EHYpUpG8x1qZhZFXsG%2BkYYRW9DfY%2B9FYToXdcUeJPTUm7iCoQpqZvMaOvkHOXR4VbHOWmY4Q1DnkJsAR6XFHST41Ju4gqECambzHznWkjK%2BkfqRthFW%2BKTH7kDiK6tfg9iUcTZzJHGQdT0rdGyarttiixiqvs1BKWBCQzoG8n5hVxDU4lu4SsZCaziZMDK%2Fnd6LXkp2%2FR7YM96guN4pDU9qkmLAlaJq9vJeI7khTAIO1CqSWWrOqL2vlruO0ErWULsUX1SWhNK2a6rZBTd7ZGezy0pu4Z1kTYpQMQUWIeXBZnMluymhjJ6r8H2CUsfUv6aNrJSiKc%2BhFWsZt3DuheZl5d%2FB7HYxpmMjcT98wKdjFLryfCkmbqrVWXz7hhKOcaOyWnFjwsYY1DqyPvLSPCGoohkQdk1a2uNn0m87hwNOc0xulbLFOeGV2WrI50BUtYR7AIztrz3rUOYV2sSCtFM5knhKM5X2OYCSFk5TOuG8659zYHhGRosYRVIk6ZAe8qMO6PBWmNzmTusiOrEoEKsyhGpCVkBcLVhW73gTBdNEFW6h%2B6lwpi0FEIVwNoada7THAdzLk3WLIqFaWQy%2BKTvqUtWZWPrR1hlccGHQPeEsfHehDcCtUiuZTmyYGRAFqD0Ey%2BRelbDM93sHSo203tOm6ThcmOsCogFHQcgqxeOlKhWuiXLFmFDmlNAkfTt7ip852CPkZYbMmqcqgsYVXGB4M97gb2WdaJbxJp0e2FXDrTLiYJRVMvBzFg%2FmIzlErfkj4mfa0Z%2BpKsw%2F4lrDJ6HX0jlzhEj4EwtcomNVezM5lrhizyBpFnQjAO%2BsxXDPW2PRW5MwYosIRVQxAzq0cycOhxIkyvoVlVVWUm86ZuZdIqElX5nYRKUZEWM%2FbD54WF5W2FJOAQBxstYdUYhfY8z3WgN4ZJWnYmc41BaEH10DMhGPs01KXDObI7ltcQT0tYNYBVrCqkpaCfBOH4Ylk9RzuTuR7UWtcmtEwIxj4fqnMoR8%2B2zptkaraEVWfcOvJ8AaA3OoQT6xFhZzLXg1rr2zSaCeEz9gBqgSWr%2BmJpCas%2B3IJWmTyfR9CbQDilRjGaCdfYmcw1ohaT6nWTFmM3Q3UWcrQ9Jq4kzgxLWA2GLNvHc0B6c9WkZScHNoh4PJpL%2BhYx7gOgqrRoF3yVGeylHVXWt9VKIGAJqwQotRYFpOVoedMzs2JbhgfCYjvfpiJKiblYQybELhxS8wZvpucT41xMDbUTR0MIjPxqakfN9X3%2BaVlxjN0%2B80JLVmURStwFmZVO4EWjz6VKmy%2B7cEvfsGRVGp9aS%2B0Iq1bEJqnfPqC7iP1bHNB7pCozXiOiVXuUk9%2FWRb%2BbpLm9nEAEZMPWNvJ7wSwr184K4g7%2BGZi%2BVsi59yTQJWty2hBoX8vvnt%2FP56bN77T7KzHvvJtnpx2HqPz%2F%2F6omxnsqyGCHAAAAAElFTkSuQmCC%22%2F%3E%20%20%3C%2Fdefs%3E%3C%2Fsvg%3E";

var ConnectorsContext = /*#__PURE__*/React.createContext(null);
function Provider$3(_ref) {
  var connectors = _ref.connectors,
      children = _ref.children;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      connector = _useWeb3React.connector; // The network chainId must be kept synchronized to avoid a loop when disconnecting and for a better UX.


  React.useEffect(function () {
    if (connector !== connectors.network) {
      connectors.network.activate(chainId);
    }
  }, [chainId, connector, connectors.network]);
  return /*#__PURE__*/React__default["default"].createElement(ConnectorsContext.Provider, {
    value: connectors
  }, children);
}
function useConnectors() {
  var connectors = React.useContext(ConnectorsContext);
  invariant__default["default"](connectors, 'useConnectors used without initializing the context');
  return connectors;
}

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$g(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var WalletConnectPopup = /*#__PURE__*/function (_WalletConnect) {
  _inherits__default["default"](WalletConnectPopup, _WalletConnect);

  var _super = _createSuper$7(WalletConnectPopup);

  function WalletConnectPopup(_ref) {
    var actions = _ref.actions,
        options = _ref.options,
        defaultChainId = _ref.defaultChainId,
        timeout = _ref.timeout,
        onError = _ref.onError;

    _classCallCheck__default["default"](this, WalletConnectPopup);

    return _super.call(this, {
      actions: actions,
      options: _objectSpread$g(_objectSpread$g({}, options), {}, {
        qrcode: true
      }),
      defaultChainId: defaultChainId,
      timeout: timeout,
      onError: onError
    });
  }

  return _createClass__default["default"](WalletConnectPopup);
}(walletconnect.WalletConnect);
var WalletConnectQR = /*#__PURE__*/function (_WalletConnect2) {
  _inherits__default["default"](WalletConnectQR, _WalletConnect2);

  var _super2 = _createSuper$7(WalletConnectQR);

  function WalletConnectQR(_ref2) {
    var _this;

    var actions = _ref2.actions,
        options = _ref2.options,
        defaultChainId = _ref2.defaultChainId,
        timeout = _ref2.timeout,
        onError = _ref2.onError;

    _classCallCheck__default["default"](this, WalletConnectQR);

    _this = _super2.call(this, {
      actions: actions,
      options: _objectSpread$g(_objectSpread$g({}, options), {}, {
        qrcode: false
      }),
      defaultChainId: defaultChainId,
      timeout: timeout,
      onError: onError
    });

    _this.events.once(walletconnect.URI_AVAILABLE, function () {
      var _this$provider;

      (_this$provider = _this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.connector.on('disconnect', function () {
        _this.deactivate();
      });
    });

    _this.events.on(walletconnect.URI_AVAILABLE, /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(uri) {
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.svg = undefined;

                if (uri) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return QRCode__default["default"].toString(uri, {
                  // Leave a margin to increase contrast in dark mode.
                  margin: 1,
                  // Use 55*2=110 for the width to prevent distortion. The generated viewbox is "0 0 55 55".
                  width: 110,
                  type: 'svg'
                });

              case 5:
                _this.svg = _context.sent;

                _this.events.emit(WalletConnectQR.SVG_AVAILABLE, _this.svg);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass__default["default"](WalletConnectQR, [{
    key: "deactivate",
    value: function deactivate() {
      this.events.emit(walletconnect.URI_AVAILABLE);
      return _get__default["default"](_getPrototypeOf__default["default"](WalletConnectQR.prototype), "deactivate", this).call(this);
    }
  }]);

  return WalletConnectQR;
}(walletconnect.WalletConnect);

_defineProperty__default["default"](WalletConnectQR, "SVG_AVAILABLE", 'svg_available');

var NO_WALLET_HELP_CENTER_URL = 'https://help.uniswap.org/en/articles/5391585-how-to-get-a-wallet';

var Body$1 = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "ConnectWalletDialog__Body",
  componentId: "sc-u2uq9y-0"
})(["display:grid;gap:12px;grid-template-columns:repeat(2,calc(50% - 0.5em / 2));grid-template-rows:2fr 1fr;height:calc(100% - 2.5em);"]);

var StyledButtonContents = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "ConnectWalletDialog__StyledButtonContents",
  componentId: "sc-u2uq9y-1"
})(["gap:0.75em;justify-items:center;"]);

var StyledMainButton = /*#__PURE__*/_styled__default["default"](Button$1).withConfig({
  displayName: "ConnectWalletDialog__StyledMainButton",
  componentId: "sc-u2uq9y-2"
})(["border-radius:", "em;grid-column:1 / 3;height:100%;padding:22px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderRadius * 0.75;
});

var StyledMainButtonRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "ConnectWalletDialog__StyledMainButtonRow",
  componentId: "sc-u2uq9y-3"
})(["grid-template-columns:repeat(2,calc(50% - 1em / 2));justify-items:center;"]);

var StyledSmallButton = /*#__PURE__*/_styled__default["default"](Button$1).withConfig({
  displayName: "ConnectWalletDialog__StyledSmallButton",
  componentId: "sc-u2uq9y-4"
})(["border-radius:", "em;height:88px;padding:16px;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius * 0.75;
});

var StyledNoWalletText = /*#__PURE__*/_styled__default["default"](Subhead1).withConfig({
  displayName: "ConnectWalletDialog__StyledNoWalletText",
  componentId: "sc-u2uq9y-5"
})(["line-height:20px;white-space:pre-wrap;"]);

var QRCodeWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "ConnectWalletDialog__QRCodeWrapper",
  componentId: "sc-u2uq9y-6"
})(["height:110px;width:110px;path{fill:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.container === lightTheme.container ? '#00000000' : lightTheme.container;
});

function ButtonContents(_ref4) {
  var walletName = _ref4.walletName,
      logoSrc = _ref4.logoSrc,
      caption = _ref4.caption;
  return /*#__PURE__*/React__default["default"].createElement(StyledButtonContents, null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: logoSrc,
    alt: walletName,
    width: 26
  }), /*#__PURE__*/React__default["default"].createElement(Subhead1, null, walletName), caption && /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    color: "secondary"
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "{caption}",
    values: {
      caption: caption
    }
  })));
}

function WalletConnectButton(_ref5) {
  var walletName = _ref5.walletName,
      logoSrc = _ref5.logoSrc,
      walletConnect = _ref5.walletConnectQR,
      onClick = _ref5.onClick;

  var _useState = React.useState(walletConnect.svg),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      svg = _useState2[0],
      setSvg = _useState2[1];

  React.useEffect(function () {
    if (!svg) walletConnect.activate();
    walletConnect.events.on(WalletConnectQR.SVG_AVAILABLE, setSvg);
    return function () {
      walletConnect.events.off(WalletConnectQR.SVG_AVAILABLE, setSvg);
    };
  }, [svg, walletConnect]);
  return /*#__PURE__*/React__default["default"].createElement(StyledMainButton, {
    color: "container",
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(StyledMainButtonRow, null, /*#__PURE__*/React__default["default"].createElement(ButtonContents, {
    logoSrc: logoSrc,
    walletName: walletName,
    caption: 'Scan to connect your wallet. Works with most wallets.'
  }), svg && /*#__PURE__*/React__default["default"].createElement(QRCodeWrapper, {
    dangerouslySetInnerHTML: {
      __html: svg
    }
  })));
}

function MetaMaskButton(_ref6) {
  var walletName = _ref6.walletName,
      logoSrc = _ref6.logoSrc,
      onClick = _ref6.onClick;
  return /*#__PURE__*/React__default["default"].createElement(StyledSmallButton, {
    color: "container",
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(ButtonContents, {
    logoSrc: logoSrc,
    walletName: walletName
  }));
}

function NoWalletButton() {
  return /*#__PURE__*/React__default["default"].createElement(StyledSmallButton, {
    color: "container",
    onClick: function onClick() {
      return window.open(NO_WALLET_HELP_CENTER_URL);
    }
  }, /*#__PURE__*/React__default["default"].createElement(StyledNoWalletText, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "I don't have a wallet"
  })));
}

function ConnectWalletDialog() {
  var connectors = useConnectors();
  var onActivate = React.useCallback( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(connector) {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return connector.activate();

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function (_x) {
      return _ref7.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header$2, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Connect wallet"
    })
  }), /*#__PURE__*/React__default["default"].createElement(Body$1, {
    align: "stretch",
    padded: true
  }, /*#__PURE__*/React__default["default"].createElement(WalletConnectButton, {
    walletName: "WalletConnect",
    logoSrc: WALLETCONNECT_ICON_URL,
    walletConnectQR: connectors.walletConnectQR,
    onClick: function onClick() {
      return onActivate(connectors.walletConnect);
    }
  }), /*#__PURE__*/React__default["default"].createElement(MetaMaskButton, {
    walletName: "MetaMask",
    logoSrc: METAMASK_ICON_URL,
    onClick: function onClick() {
      return onActivate(connectors.metaMask);
    }
  }), /*#__PURE__*/React__default["default"].createElement(NoWalletButton, null)));
}

var WalletButton = /*#__PURE__*/_styled__default["default"](TextButton).withConfig({
  displayName: "ConnectWallet__WalletButton",
  componentId: "sc-3kqwi3-0"
})(["filter:none;visibility:", ";"], function (_ref) {
  var hidden = _ref.hidden;
  return hidden ? 'hidden' : 'visible';
});

function ConnectWallet$1(_ref2) {
  var disabled = _ref2.disabled;

  // Opens a dialog that initiates own wallet connection flow
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var onClose = function onClose() {
    return setOpen(false);
  };

  var onConnectWalletClick = useConditionalHandler(utils.useAtomValue(onConnectWalletClickAtom));
  var onClick = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = setOpen;
            _context.next = 3;
            return onConnectWalletClick();

          case 3:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [onConnectWalletClick]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(WalletButton, {
    hidden: disabled,
    onClick: onClick,
    color: "secondary",
    "data-testid": "connect-wallet"
  }, /*#__PURE__*/React__default["default"].createElement(Caption$1, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Wallet$1, null), /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Connect wallet to swap"
  })))), open && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    color: "dialog",
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(ConnectWalletDialog, null)));
}

function Wallet(_ref) {
  var disabled = _ref.disabled;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      isActive = _useWeb3React.isActive;

  return isActive && Boolean(account) ? /*#__PURE__*/React__default["default"].createElement(ConnectedWalletChip, {
    disabled: disabled,
    account: account
  }) : /*#__PURE__*/React__default["default"].createElement(ConnectWallet$1, {
    disabled: disabled
  });
}

function isVisibilityStateSupported() {
  return 'visibilityState' in document;
}

function isWindowVisible() {
  return !isVisibilityStateSupported() || document.visibilityState !== 'hidden';
}
/**
 * Returns whether the window is currently visible to the user.
 */


function useIsWindowVisible() {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var listener = React.useCallback(function () {
    setFocused(isWindowVisible());
  }, [setFocused]);
  React.useEffect(function () {
    if (!isVisibilityStateSupported()) return undefined;
    setFocused(function (focused) {
      return isWindowVisible();
    });
    document.addEventListener('visibilitychange', listener);
    return function () {
      document.removeEventListener('visibilitychange', listener);
    };
  }, [listener]);
  return focused;
}

var MISSING_PROVIDER$1 = Symbol();
var BlockNumberContext = /*#__PURE__*/React.createContext(MISSING_PROVIDER$1);

function useBlockNumberContext() {
  var blockNumber = React.useContext(BlockNumberContext);

  if (blockNumber === MISSING_PROVIDER$1) {
    throw new Error('BlockNumber hooks must be wrapped in a <BlockNumberProvider>');
  }

  return blockNumber;
}
/** Requires that BlockUpdater be installed in the DOM tree. */


function useBlockNumber() {
  return useBlockNumberContext().value;
}
function useFastForwardBlockNumber() {
  return useBlockNumberContext().fastForward;
}
function BlockNumberProvider(_ref) {
  var children = _ref.children;

  var _useWeb3React = core.useWeb3React(),
      activeChainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var _useState = React.useState({
    chainId: activeChainId
  }),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      _useState2$ = _useState2[0],
      chainId = _useState2$.chainId,
      block = _useState2$.block,
      setChainBlock = _useState2[1];

  var onBlock = React.useCallback(function (block) {
    setChainBlock(function (chainBlock) {
      if (chainBlock.chainId === activeChainId) {
        if (!chainBlock.block || chainBlock.block < block) {
          return {
            chainId: activeChainId,
            block: block
          };
        }
      }

      return chainBlock;
    });
  }, [activeChainId, setChainBlock]);
  var windowVisible = useIsWindowVisible();
  React.useEffect(function () {
    if (provider && activeChainId && windowVisible) {
      // If chainId hasn't changed, don't clear the block. This prevents re-fetching still valid data.
      setChainBlock(function (chainBlock) {
        return chainBlock.chainId === activeChainId ? chainBlock : {
          chainId: activeChainId
        };
      });
      var stale = false;
      provider.getBlockNumber().then(function (block) {
        if (stale) return;
        onBlock(block);
      }).catch(function (error) {
        if (stale) return;
        console.error("Failed to get block number for chainId ".concat(activeChainId), error);
      });
      provider.on('block', onBlock);
      return function () {
        stale = true;
        provider.off('block', onBlock);
      };
    }

    return undefined;
  }, [activeChainId, provider, onBlock, setChainBlock, windowVisible]);
  var value = React.useMemo(function () {
    return {
      value: chainId === activeChainId ? block : undefined,
      fastForward: function fastForward(update) {
        if (block && update > block) {
          setChainBlock({
            chainId: activeChainId,
            block: update
          });
        }
      }
    };
  }, [activeChainId, block, chainId]);
  return /*#__PURE__*/React__default["default"].createElement(BlockNumberContext.Provider, {
    value: value
  }, children);
}

var oldestBlockMapAtom = immer.atomWithImmer({});
var DEFAULT_MAX_BLOCK_AGE = 10;
function useSetOldestValidBlock() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var updateValidBlock = utils.useUpdateAtom(oldestBlockMapAtom);
  return React.useCallback(function (block) {
    if (!chainId) return;
    updateValidBlock(function (oldestBlockMap) {
      oldestBlockMap[chainId] = Math.max(block, oldestBlockMap[chainId] || 0);
    });
  }, [chainId, updateValidBlock]);
}
function useGetIsValidBlock() {
  var maxBlockAge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MAX_BLOCK_AGE;

  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var currentBlock = useBlockNumber();
  var oldestBlockMap = utils.useAtomValue(oldestBlockMapAtom);
  var oldestBlock = chainId ? oldestBlockMap[chainId] : 0;
  return React.useCallback(function (block) {
    if (!currentBlock) return false;
    if (currentBlock - block > maxBlockAge) return false;
    if (currentBlock < oldestBlock) return false;
    return true;
  }, [currentBlock, maxBlockAge, oldestBlock]);
}
function useIsValidBlock(block) {
  return useGetIsValidBlock()(block);
}

var _CHAIN_NAMES_TO_IDS;

/**
 * List of all the networks supported by the Uniswap Interface
 */
exports.SupportedChainId = void 0;

(function (SupportedChainId) {
  SupportedChainId[SupportedChainId["MAINNET"] = 1] = "MAINNET";
  SupportedChainId[SupportedChainId["ROPSTEN"] = 3] = "ROPSTEN";
  SupportedChainId[SupportedChainId["RINKEBY"] = 4] = "RINKEBY";
  SupportedChainId[SupportedChainId["GOERLI"] = 5] = "GOERLI";
  SupportedChainId[SupportedChainId["KOVAN"] = 42] = "KOVAN";
  SupportedChainId[SupportedChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
  SupportedChainId[SupportedChainId["ARBITRUM_RINKEBY"] = 421611] = "ARBITRUM_RINKEBY";
  SupportedChainId[SupportedChainId["OPTIMISM"] = 10] = "OPTIMISM";
  SupportedChainId[SupportedChainId["OPTIMISTIC_KOVAN"] = 69] = "OPTIMISTIC_KOVAN";
  SupportedChainId[SupportedChainId["POLYGON"] = 137] = "POLYGON";
  SupportedChainId[SupportedChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
  SupportedChainId[SupportedChainId["CELO"] = 42220] = "CELO";
  SupportedChainId[SupportedChainId["CELO_ALFAJORES"] = 44787] = "CELO_ALFAJORES";
})(exports.SupportedChainId || (exports.SupportedChainId = {}));

var ChainName;

(function (ChainName) {
  ChainName["MAINNET"] = "mainnet";
  ChainName["ROPSTEN"] = "ropsten";
  ChainName["RINKEBY"] = "rinkeby";
  ChainName["GOERLI"] = "goerli";
  ChainName["KOVAN"] = "kovan";
  ChainName["OPTIMISM"] = "optimism-mainnet";
  ChainName["OPTIMISTIC_KOVAN"] = "optimism-kovan";
  ChainName["ARBITRUM_ONE"] = "arbitrum-mainnet";
  ChainName["ARBITRUM_RINKEBY"] = "arbitrum-rinkeby";
  ChainName["POLYGON"] = "polygon-mainnet";
  ChainName["POLYGON_MUMBAI"] = "polygon-mumbai";
  ChainName["CELO"] = "celo";
  ChainName["CELO_ALFAJORES"] = "celo-alfajores";
})(ChainName || (ChainName = {}));

(_CHAIN_NAMES_TO_IDS = {}, _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.MAINNET, exports.SupportedChainId.MAINNET), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.ROPSTEN, exports.SupportedChainId.ROPSTEN), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.RINKEBY, exports.SupportedChainId.RINKEBY), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.GOERLI, exports.SupportedChainId.GOERLI), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.KOVAN, exports.SupportedChainId.KOVAN), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.POLYGON, exports.SupportedChainId.POLYGON), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.POLYGON_MUMBAI, exports.SupportedChainId.POLYGON_MUMBAI), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.ARBITRUM_ONE, exports.SupportedChainId.ARBITRUM_ONE), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.ARBITRUM_RINKEBY, exports.SupportedChainId.ARBITRUM_RINKEBY), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.OPTIMISM, exports.SupportedChainId.OPTIMISM), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.OPTIMISTIC_KOVAN, exports.SupportedChainId.OPTIMISTIC_KOVAN), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.CELO, exports.SupportedChainId.CELO), _defineProperty__default["default"](_CHAIN_NAMES_TO_IDS, ChainName.CELO_ALFAJORES, exports.SupportedChainId.CELO_ALFAJORES), _CHAIN_NAMES_TO_IDS);
/**
 * Array of all the supported chain IDs
 */

var ALL_SUPPORTED_CHAIN_IDS = Object.values(exports.SupportedChainId).filter(function (id) {
  return typeof id === 'number';
});
var SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [exports.SupportedChainId.MAINNET, exports.SupportedChainId.POLYGON, exports.SupportedChainId.OPTIMISM, exports.SupportedChainId.ARBITRUM_ONE, exports.SupportedChainId.CELO];
/**
 * All the chain IDs that are running the Ethereum protocol.
 */

[exports.SupportedChainId.MAINNET, exports.SupportedChainId.ROPSTEN, exports.SupportedChainId.RINKEBY, exports.SupportedChainId.GOERLI, exports.SupportedChainId.KOVAN, exports.SupportedChainId.POLYGON, exports.SupportedChainId.POLYGON_MUMBAI, exports.SupportedChainId.CELO, exports.SupportedChainId.CELO_ALFAJORES];

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
var L2_CHAIN_IDS = [exports.SupportedChainId.ARBITRUM_ONE, exports.SupportedChainId.ARBITRUM_RINKEBY, exports.SupportedChainId.OPTIMISM, exports.SupportedChainId.OPTIMISTIC_KOVAN];

var DEFAULT_NETWORKS = [exports.SupportedChainId.MAINNET, exports.SupportedChainId.ROPSTEN, exports.SupportedChainId.RINKEBY, exports.SupportedChainId.GOERLI, exports.SupportedChainId.KOVAN];
function constructSameAddressMap(address) {
  var additionalNetworks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce(function (memo, chainId) {
    memo[chainId] = address;
    return memo;
  }, {});
}

var _objectSpread2$1, _objectSpread3, _ENS_REGISTRAR_ADDRES;

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$f(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var UNI_ADDRESS = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984');
var MULTICALL_ADDRESS = _objectSpread$f(_objectSpread$f({}, constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [exports.SupportedChainId.OPTIMISTIC_KOVAN, exports.SupportedChainId.OPTIMISM, exports.SupportedChainId.POLYGON_MUMBAI, exports.SupportedChainId.POLYGON])), {}, (_objectSpread2$1 = {}, _defineProperty__default["default"](_objectSpread2$1, exports.SupportedChainId.ARBITRUM_ONE, '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB'), _defineProperty__default["default"](_objectSpread2$1, exports.SupportedChainId.ARBITRUM_RINKEBY, '0xa501c031958F579dB7676fF1CE78AD305794d579'), _defineProperty__default["default"](_objectSpread2$1, exports.SupportedChainId.CELO, '0x633987602DE5C4F337e3DbF265303A1080324204'), _defineProperty__default["default"](_objectSpread2$1, exports.SupportedChainId.CELO_ALFAJORES, '0x633987602DE5C4F337e3DbF265303A1080324204'), _objectSpread2$1));
var SWAP_ROUTER_ADDRESSES = _objectSpread$f(_objectSpread$f({}, constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45', [exports.SupportedChainId.OPTIMISM, exports.SupportedChainId.OPTIMISTIC_KOVAN, exports.SupportedChainId.ARBITRUM_ONE, exports.SupportedChainId.ARBITRUM_RINKEBY, exports.SupportedChainId.POLYGON, exports.SupportedChainId.POLYGON_MUMBAI])), {}, (_objectSpread3 = {}, _defineProperty__default["default"](_objectSpread3, exports.SupportedChainId.CELO, '0x5615CDAb10dc425a742d643d949a7F474C01abc4'), _defineProperty__default["default"](_objectSpread3, exports.SupportedChainId.CELO_ALFAJORES, '0x5615CDAb10dc425a742d643d949a7F474C01abc4'), _objectSpread3));
var ARGENT_WALLET_DETECTOR_ADDRESS = _defineProperty__default["default"]({}, exports.SupportedChainId.MAINNET, '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8');
var ENS_REGISTRAR_ADDRESSES = (_ENS_REGISTRAR_ADDRES = {}, _defineProperty__default["default"](_ENS_REGISTRAR_ADDRES, exports.SupportedChainId.MAINNET, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty__default["default"](_ENS_REGISTRAR_ADDRES, exports.SupportedChainId.ROPSTEN, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty__default["default"](_ENS_REGISTRAR_ADDRES, exports.SupportedChainId.GOERLI, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _defineProperty__default["default"](_ENS_REGISTRAR_ADDRES, exports.SupportedChainId.RINKEBY, '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'), _ENS_REGISTRAR_ADDRES);

var _USDC, _UNI, _objectSpread2, _USDC2;

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$e(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var USDC_MAINNET = new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
var USDC_ROPSTEN = new sdkCore.Token(exports.SupportedChainId.ROPSTEN, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
var USDC_RINKEBY = new sdkCore.Token(exports.SupportedChainId.RINKEBY, '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b', 6, 'tUSDC', 'test USD//C');
var USDC_GOERLI = new sdkCore.Token(exports.SupportedChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
var USDC_KOVAN = new sdkCore.Token(exports.SupportedChainId.KOVAN, '0x31eeb2d0f9b6fd8642914ab10f4dd473677d80df', 6, 'USDC', 'USD//C');
var USDC_OPTIMISM = new sdkCore.Token(exports.SupportedChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
var USDC_OPTIMISTIC_KOVAN = new sdkCore.Token(exports.SupportedChainId.OPTIMISTIC_KOVAN, '0x3b8e53b3ab8e01fb57d0c9e893bc4d655aa67d84', 6, 'USDC', 'USD//C');
var USDC_ARBITRUM = new sdkCore.Token(exports.SupportedChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
var USDC_ARBITRUM_RINKEBY = new sdkCore.Token(exports.SupportedChainId.ARBITRUM_RINKEBY, '0x09b98f8b2395d076514037ff7d39a091a536206c', 6, 'USDC', 'USD//C');
var USDC_POLYGON = new sdkCore.Token(exports.SupportedChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
var USDC_POLYGON_MUMBAI = new sdkCore.Token(exports.SupportedChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
var PORTAL_USDC_CELO = new sdkCore.Token(exports.SupportedChainId.CELO, '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd', 6, 'USDCet', 'USDC (Portal from Ethereum)');
var USDC_CELO_ALFAJORES = new sdkCore.Token(exports.SupportedChainId.CELO_ALFAJORES, '0x41F4a5d2632b019Ae6CE9625bE3c9CaC143AcC7D', 6, 'USDC', 'USD//C');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth');
var DAI = new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
new sdkCore.Token(exports.SupportedChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai stable coin');
var DAI_OPTIMISM = new sdkCore.Token(exports.SupportedChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai stable coin');
(_USDC = {}, _defineProperty__default["default"](_USDC, exports.SupportedChainId.MAINNET, USDC_MAINNET), _defineProperty__default["default"](_USDC, exports.SupportedChainId.ARBITRUM_ONE, USDC_ARBITRUM), _defineProperty__default["default"](_USDC, exports.SupportedChainId.OPTIMISM, USDC_OPTIMISM), _defineProperty__default["default"](_USDC, exports.SupportedChainId.ARBITRUM_RINKEBY, USDC_ARBITRUM_RINKEBY), _defineProperty__default["default"](_USDC, exports.SupportedChainId.OPTIMISTIC_KOVAN, USDC_OPTIMISTIC_KOVAN), _defineProperty__default["default"](_USDC, exports.SupportedChainId.POLYGON, USDC_POLYGON), _defineProperty__default["default"](_USDC, exports.SupportedChainId.POLYGON_MUMBAI, USDC_POLYGON_MUMBAI), _defineProperty__default["default"](_USDC, exports.SupportedChainId.CELO, PORTAL_USDC_CELO), _defineProperty__default["default"](_USDC, exports.SupportedChainId.CELO_ALFAJORES, USDC_CELO_ALFAJORES), _defineProperty__default["default"](_USDC, exports.SupportedChainId.GOERLI, USDC_GOERLI), _defineProperty__default["default"](_USDC, exports.SupportedChainId.RINKEBY, USDC_RINKEBY), _defineProperty__default["default"](_USDC, exports.SupportedChainId.KOVAN, USDC_KOVAN), _defineProperty__default["default"](_USDC, exports.SupportedChainId.ROPSTEN, USDC_ROPSTEN), _USDC);
new sdkCore.Token(exports.SupportedChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
new sdkCore.Token(exports.SupportedChainId.POLYGON, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', 'Tether USD');
new sdkCore.Token(exports.SupportedChainId.POLYGON, '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 8, 'WBTC', 'Wrapped BTC');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
new sdkCore.Token(exports.SupportedChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
new sdkCore.Token(exports.SupportedChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
new sdkCore.Token(exports.SupportedChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
new sdkCore.Token(exports.SupportedChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'Frax');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD', 18, 'ETH2x-FLI', 'ETH 2x Flexible Leverage Index');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0xFe2e637202056d30016725477c5da089Ab0A043A', 18, 'sETH2', 'StakeWise Staked ETH2');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x20BC832ca081b91433ff6c17f85701B6e92486c5', 18, 'rETH2', 'StakeWise Reward ETH2');
new sdkCore.Token(exports.SupportedChainId.MAINNET, '0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2', 18, 'SWISE', 'StakeWise');
new sdkCore.Token(exports.SupportedChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
new sdkCore.Token(exports.SupportedChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
var CELO_CELO = new sdkCore.Token(exports.SupportedChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo');
var CUSD_CELO = new sdkCore.Token(exports.SupportedChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'cUSD', 'Celo Dollar');
new sdkCore.Token(exports.SupportedChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'cEUR', 'Celo Euro Stablecoin');
new sdkCore.Token(exports.SupportedChainId.CELO, '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207', 18, 'ETH', 'Portal Ether');
new sdkCore.Token(exports.SupportedChainId.CELO, '0x32A9FE697a32135BFd313a6Ac28792DaE4D9979d', 18, 'cMCO2', 'Celo Moss Carbon Credit');
var CELO_CELO_ALFAJORES = new sdkCore.Token(exports.SupportedChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo');
new sdkCore.Token(exports.SupportedChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar');
new sdkCore.Token(exports.SupportedChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
var UNI = (_UNI = {}, _defineProperty__default["default"](_UNI, exports.SupportedChainId.MAINNET, new sdkCore.Token(exports.SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap')), _defineProperty__default["default"](_UNI, exports.SupportedChainId.RINKEBY, new sdkCore.Token(exports.SupportedChainId.RINKEBY, UNI_ADDRESS[4], 18, 'UNI', 'Uniswap')), _defineProperty__default["default"](_UNI, exports.SupportedChainId.ROPSTEN, new sdkCore.Token(exports.SupportedChainId.ROPSTEN, UNI_ADDRESS[3], 18, 'UNI', 'Uniswap')), _defineProperty__default["default"](_UNI, exports.SupportedChainId.GOERLI, new sdkCore.Token(exports.SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap')), _defineProperty__default["default"](_UNI, exports.SupportedChainId.KOVAN, new sdkCore.Token(exports.SupportedChainId.KOVAN, UNI_ADDRESS[42], 18, 'UNI', 'Uniswap')), _UNI);
var WRAPPED_NATIVE_CURRENCY = _objectSpread$e(_objectSpread$e({}, sdkCore.WETH9), {}, (_objectSpread2 = {}, _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.CELO, CELO_CELO), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.CELO_ALFAJORES, CELO_CELO_ALFAJORES), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.OPTIMISM, new sdkCore.Token(exports.SupportedChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether')), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.OPTIMISTIC_KOVAN, new sdkCore.Token(exports.SupportedChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether')), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.ARBITRUM_ONE, new sdkCore.Token(exports.SupportedChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether')), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.ARBITRUM_RINKEBY, new sdkCore.Token(exports.SupportedChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether')), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.POLYGON, new sdkCore.Token(exports.SupportedChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC')), _defineProperty__default["default"](_objectSpread2, exports.SupportedChainId.POLYGON_MUMBAI, new sdkCore.Token(exports.SupportedChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC')), _objectSpread2));
function isCelo(chainId) {
  return chainId === exports.SupportedChainId.CELO_ALFAJORES || chainId === exports.SupportedChainId.CELO;
}

function getCeloNativeCurrency(chainId) {
  switch (chainId) {
    case exports.SupportedChainId.CELO_ALFAJORES:
      return CELO_CELO_ALFAJORES;

    case exports.SupportedChainId.CELO:
      return CELO_CELO;

    default:
      throw new Error('Not celo');
  }
}

function isMatic(chainId) {
  return chainId === exports.SupportedChainId.POLYGON_MUMBAI || chainId === exports.SupportedChainId.POLYGON;
}

var MaticNativeCurrency = /*#__PURE__*/function (_NativeCurrency) {
  _inherits__default["default"](MaticNativeCurrency, _NativeCurrency);

  var _super = _createSuper$6(MaticNativeCurrency);

  function MaticNativeCurrency(chainId) {
    _classCallCheck__default["default"](this, MaticNativeCurrency);

    if (!isMatic(chainId)) throw new Error('Not matic');
    return _super.call(this, chainId, 18, 'MATIC', 'Polygon Matic');
  }

  _createClass__default["default"](MaticNativeCurrency, [{
    key: "equals",
    value: function equals(other) {
      return other.isNative && other.chainId === this.chainId;
    }
  }, {
    key: "wrapped",
    get: function get() {
      if (!isMatic(this.chainId)) throw new Error('Not matic');
      var wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
      invariant__default["default"](wrapped instanceof sdkCore.Token);
      return wrapped;
    }
  }]);

  return MaticNativeCurrency;
}(sdkCore.NativeCurrency);

var ExtendedEther = /*#__PURE__*/function (_Ether) {
  _inherits__default["default"](ExtendedEther, _Ether);

  var _super2 = _createSuper$6(ExtendedEther);

  function ExtendedEther() {
    _classCallCheck__default["default"](this, ExtendedEther);

    return _super2.apply(this, arguments);
  }

  _createClass__default["default"](ExtendedEther, [{
    key: "wrapped",
    get: function get() {
      var wrapped = WRAPPED_NATIVE_CURRENCY[this.chainId];
      if (wrapped) return wrapped;
      throw new Error('Unsupported chain ID');
    }
  }], [{
    key: "onChain",
    value: function onChain(chainId) {
      var _this$_cachedExtended;

      return (_this$_cachedExtended = this._cachedExtendedEther[chainId]) !== null && _this$_cachedExtended !== void 0 ? _this$_cachedExtended : this._cachedExtendedEther[chainId] = new ExtendedEther(chainId);
    }
  }]);

  return ExtendedEther;
}(sdkCore.Ether);

_defineProperty__default["default"](ExtendedEther, "_cachedExtendedEther", {});

var cachedNativeCurrency = {};
function nativeOnChain(chainId) {
  if (cachedNativeCurrency[chainId]) return cachedNativeCurrency[chainId];
  var nativeCurrency;

  if (isMatic(chainId)) {
    nativeCurrency = new MaticNativeCurrency(chainId);
  } else if (isCelo(chainId)) {
    nativeCurrency = getCeloNativeCurrency(chainId);
  } else {
    nativeCurrency = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId] = nativeCurrency;
}
({
  USDC: (_USDC2 = {}, _defineProperty__default["default"](_USDC2, exports.SupportedChainId.MAINNET, USDC_MAINNET.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.ARBITRUM_ONE, USDC_ARBITRUM.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.OPTIMISM, USDC_OPTIMISM.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.ARBITRUM_RINKEBY, USDC_ARBITRUM_RINKEBY.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.OPTIMISTIC_KOVAN, USDC_OPTIMISTIC_KOVAN.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.POLYGON, USDC_POLYGON.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.POLYGON_MUMBAI, USDC_POLYGON_MUMBAI.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.GOERLI, USDC_GOERLI.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.RINKEBY, USDC_RINKEBY.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.KOVAN, USDC_KOVAN.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.ROPSTEN, USDC_ROPSTEN.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.CELO, PORTAL_USDC_CELO.address), _defineProperty__default["default"](_USDC2, exports.SupportedChainId.CELO_ALFAJORES, USDC_CELO_ALFAJORES.address), _USDC2)
});

/**
 * Parses a CurrencyAmount from the passed string.
 * Returns the CurrencyAmount, or undefined if parsing fails.
 */

function tryParseCurrencyAmount(value, currency) {
  if (!value || !currency) {
    return undefined;
  }

  try {
    var typedValueParsed = units.parseUnits(value, currency.decimals).toString();

    if (typedValueParsed !== '0') {
      return sdkCore.CurrencyAmount.fromRawAmount(currency, JSBI__default["default"].BigInt(typedValueParsed));
    }
  } catch (error) {
    // fails if the user specifies too many decimal places of precision (or maybe exceed max uint?)
    console.debug("Failed to parse input amount: \"".concat(value, "\""), error);
  }

  return undefined;
}

var _STABLECOIN_AMOUNT_OU;
// The amount is large enough to filter low liquidity pairs.

var STABLECOIN_AMOUNT_OUT = (_STABLECOIN_AMOUNT_OU = {}, _defineProperty__default["default"](_STABLECOIN_AMOUNT_OU, exports.SupportedChainId.MAINNET, sdkCore.CurrencyAmount.fromRawAmount(USDC_MAINNET, 100000e6)), _defineProperty__default["default"](_STABLECOIN_AMOUNT_OU, exports.SupportedChainId.ARBITRUM_ONE, sdkCore.CurrencyAmount.fromRawAmount(USDC_ARBITRUM, 10000e6)), _defineProperty__default["default"](_STABLECOIN_AMOUNT_OU, exports.SupportedChainId.OPTIMISM, sdkCore.CurrencyAmount.fromRawAmount(DAI_OPTIMISM, 10000e18)), _defineProperty__default["default"](_STABLECOIN_AMOUNT_OU, exports.SupportedChainId.POLYGON, sdkCore.CurrencyAmount.fromRawAmount(USDC_POLYGON, 10000e6)), _defineProperty__default["default"](_STABLECOIN_AMOUNT_OU, exports.SupportedChainId.CELO, sdkCore.CurrencyAmount.fromRawAmount(CUSD_CELO, 10000e18)), _STABLECOIN_AMOUNT_OU);
/**
 *
 * @param fiatValue string representation of a USD amount
 * @returns CurrencyAmount where currency is stablecoin on active chain
 */

function useStablecoinAmountFromFiatValue(fiatValue) {
  var _STABLECOIN_AMOUNT_OU2;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var stablecoin = chainId ? (_STABLECOIN_AMOUNT_OU2 = STABLECOIN_AMOUNT_OUT[chainId]) === null || _STABLECOIN_AMOUNT_OU2 === void 0 ? void 0 : _STABLECOIN_AMOUNT_OU2.currency : undefined;
  return React.useMemo(function () {
    if (fiatValue === null || fiatValue === undefined || !chainId || !stablecoin) {
      return undefined;
    } // trim for decimal precision when parsing


    var parsedForDecimals = parseFloat(fiatValue).toFixed(stablecoin.decimals).toString();

    try {
      // parse USD string into CurrencyAmount based on stablecoin decimals
      return tryParseCurrencyAmount(parsedForDecimals, stablecoin);
    } catch (error) {
      return undefined;
    }
  }, [chainId, fiatValue, stablecoin]);
}

/**
 * Invokes callback after a timeout defined by the delay
 * @param callback
 * @param delay if null, the callback will not be invoked
 */

function useTimeout(callback, delay) {
  React.useEffect(function () {
    if (delay === null) return;
    var timeout = setTimeout(callback, delay);
    return function () {
      return clearTimeout(timeout);
    };
  });
}

var NON_SERIALIZABLE_KEYS = ['provider'];
/** Omits the non-serializable keys from GetQuoteArgs' cache key. */

function serializeGetQuoteArgs(_ref) {
  var endpointName = _ref.endpointName,
      queryArgs = _ref.queryArgs;
  // same as default serializeQueryArgs, but ignoring non-serializable keys.
  return "".concat(endpointName, "(").concat(JSON.stringify(queryArgs, function (key, value) {
    if (NON_SERIALIZABLE_KEYS.includes(key)) {
      return undefined;
    }

    if (toolkit.isPlainObject(value)) {
      return Object.keys(value).sort().reduce(function (acc, key) {
        acc[key] = value[key];
        return acc;
      }, {});
    } else {
      return value;
    }
  }), ")");
}
/**
 * Returns GetQuoteArgs for the Routing API query or SkipToken if the query should be skipped
 * (this includes if the window is not visible).
 * NB: Input arguments do not need to be memoized, as they will be destructured.
 */

function useGetQuoteArgs(_ref2, skip) {
  var provider = _ref2.provider,
      tradeType = _ref2.tradeType,
      amountSpecified = _ref2.amountSpecified,
      currencyIn = _ref2.currencyIn,
      currencyOut = _ref2.currencyOut,
      routerUrl = _ref2.routerUrl;
  var args = React.useMemo(function () {
    var _amountSpecified$quot;

    if (!provider || tradeType === undefined) return null;
    if (!currencyIn || !currencyOut || currencyIn.equals(currencyOut)) return null;
    return {
      amount: (_amountSpecified$quot = amountSpecified === null || amountSpecified === void 0 ? void 0 : amountSpecified.quotient.toString()) !== null && _amountSpecified$quot !== void 0 ? _amountSpecified$quot : null,
      tokenInAddress: currencyIn.wrapped.address,
      tokenInChainId: currencyIn.wrapped.chainId,
      tokenInDecimals: currencyIn.wrapped.decimals,
      tokenInSymbol: currencyIn.wrapped.symbol,
      tokenOutAddress: currencyOut.wrapped.address,
      tokenOutChainId: currencyOut.wrapped.chainId,
      tokenOutDecimals: currencyOut.wrapped.decimals,
      tokenOutSymbol: currencyOut.wrapped.symbol,
      routerUrl: routerUrl,
      tradeType: tradeType,
      provider: provider
    };
  }, [provider, amountSpecified, tradeType, currencyIn, currencyOut, routerUrl]);
  var isWindowVisible = useIsWindowVisible();
  if (skip || !isWindowVisible) return react.skipToken;
  return args !== null && args !== void 0 ? args : react.skipToken;
}

exports.Field = void 0;

(function (Field) {
  Field["INPUT"] = "INPUT";
  Field["OUTPUT"] = "OUTPUT";
})(exports.Field || (exports.Field = {}));

var initialSwap = _defineProperty__default["default"]({
  type: sdkCore.TradeType.EXACT_INPUT,
  amount: ''
}, exports.Field.INPUT, nativeOnChain(exports.SupportedChainId.MAINNET));

var controlledAtom$1 = jotai.atom(undefined);
var stateAtom$1 = immer.atomWithImmer(initialSwap);
var swapAtom = jotai.atom(function (get) {
  var controlled = get(controlledAtom$1);
  return controlled ? controlled : get(stateAtom$1);
}, stateAtom$1.write); // If set to a transaction hash, that transaction will display in a status dialog.

var displayTxHashAtom = jotai.atom(undefined);
var feeOptionsAtom = jotai.atom(undefined);
/** An integration hook called when the user resets settings. */

var swapEventHandlersAtom = jotai.atom({});

function isExactInput(tradeType) {
  return tradeType === sdkCore.TradeType.EXACT_INPUT;
}
function invertTradeType(tradeType) {
  switch (tradeType) {
    case sdkCore.TradeType.EXACT_INPUT:
      return sdkCore.TradeType.EXACT_OUTPUT;

    case sdkCore.TradeType.EXACT_OUTPUT:
      return sdkCore.TradeType.EXACT_INPUT;
  }
}
function toTradeType(modifiedField) {
  switch (modifiedField) {
    case exports.Field.INPUT:
      return sdkCore.TradeType.EXACT_INPUT;

    case exports.Field.OUTPUT:
      return sdkCore.TradeType.EXACT_OUTPUT;
  }
}

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TradeState; // from https://github.com/Uniswap/routing-api/blob/main/lib/handlers/schema.ts

(function (TradeState) {
  TradeState[TradeState["LOADING"] = 0] = "LOADING";
  TradeState[TradeState["INVALID"] = 1] = "INVALID";
  TradeState[TradeState["NO_ROUTE_FOUND"] = 2] = "NO_ROUTE_FOUND";
  TradeState[TradeState["VALID"] = 3] = "VALID";
})(TradeState || (TradeState = {}));

var INITIALIZED = 'Initialized';
var NO_ROUTE = 'No Route';
var InterfaceTrade = /*#__PURE__*/function (_Trade) {
  _inherits__default["default"](InterfaceTrade, _Trade);

  var _super = _createSuper$5(InterfaceTrade);

  function InterfaceTrade() {
    _classCallCheck__default["default"](this, InterfaceTrade);

    return _super.apply(this, arguments);
  }

  return _createClass__default["default"](InterfaceTrade);
}(routerSdk.Trade);

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var protocols = [routerSdk.Protocol.V2, routerSdk.Protocol.V3]; // routing API quote query params: https://github.com/Uniswap/routing-api/blob/main/lib/handlers/quote/schema/quote-schema.ts

var DEFAULT_QUERY_PARAMS = {
  protocols: protocols.map(function (p) {
    return p.toLowerCase();
  }).join(',')
};

var baseQuery = function baseQuery() {
  return {
    error: {
      reason: 'Unimplemented baseQuery'
    }
  };
};

var routing = react.createApi({
  reducerPath: 'routing',
  baseQuery: baseQuery,
  serializeQueryArgs: serializeGetQuoteArgs,
  endpoints: function endpoints(build) {
    return {
      getQuote: build.query({
        queryFn: function queryFn(args) {
          return _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
            var tokenInAddress, tokenInChainId, tokenOutAddress, tokenOutChainId, amount, tradeType, type, query, response, data, quote, _ref, _error$message, clientSideSmartOrderRouter, _quote, _ref2, _error$message2;

            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(args === react.skipToken)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", {
                      error: {
                        status: 'CUSTOM_ERROR',
                        error: 'Skipped'
                      }
                    });

                  case 2:
                    if (!( // If enabled, try the routing API, falling back to client-side routing.
                    Boolean(args.routerUrl) && // A null amount may be passed to initialize the client-side routing.
                    args.amount !== null)) {
                      _context.next = 27;
                      break;
                    }

                    _context.prev = 3;
                    tokenInAddress = args.tokenInAddress, tokenInChainId = args.tokenInChainId, tokenOutAddress = args.tokenOutAddress, tokenOutChainId = args.tokenOutChainId, amount = args.amount, tradeType = args.tradeType;
                    type = isExactInput(tradeType) ? 'exactIn' : 'exactOut';
                    query = qs__default["default"].stringify(_objectSpread$d(_objectSpread$d({}, DEFAULT_QUERY_PARAMS), {}, {
                      tokenInAddress: tokenInAddress,
                      tokenInChainId: tokenInChainId,
                      tokenOutAddress: tokenOutAddress,
                      tokenOutChainId: tokenOutChainId,
                      amount: amount,
                      type: type
                    }));
                    _context.next = 9;
                    return global.fetch("".concat(args.routerUrl, "quote?").concat(query));

                  case 9:
                    response = _context.sent;

                    if (response.ok) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 13;
                    return response.text();

                  case 13:
                    data = _context.sent;

                    try {
                      data = JSON.parse(data);
                    } catch (_unused) {} // NO_ROUTE should be treated as a valid response to prevent retries.


                    if (!(_typeof__default["default"](data) === 'object' && data.errorCode === 'NO_ROUTE')) {
                      _context.next = 17;
                      break;
                    }

                    return _context.abrupt("return", {
                      data: NO_ROUTE
                    });

                  case 17:
                    throw data;

                  case 18:
                    _context.next = 20;
                    return response.json();

                  case 20:
                    quote = _context.sent;
                    return _context.abrupt("return", {
                      data: quote
                    });

                  case 24:
                    _context.prev = 24;
                    _context.t0 = _context["catch"](3);
                    console.warn("GetQuote failed on routing API, falling back to client: ".concat((_ref = (_error$message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _error$message !== void 0 ? _error$message : _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.detail) !== null && _ref !== void 0 ? _ref : _context.t0));

                  case 27:
                    _context.next = 29;
                    return Promise.resolve().then(function () { return require('./clientSideSmartOrderRouter-b61a1f42.cjs'); });

                  case 29:
                    clientSideSmartOrderRouter = _context.sent;
                    _context.prev = 30;
                    _context.next = 33;
                    return clientSideSmartOrderRouter.getClientSideQuote(args, {
                      protocols: protocols
                    });

                  case 33:
                    _quote = _context.sent;
                    return _context.abrupt("return", {
                      data: _quote
                    });

                  case 37:
                    _context.prev = 37;
                    _context.t1 = _context["catch"](30);
                    console.warn("GetQuote failed on client: ".concat(_context.t1));
                    return _context.abrupt("return", {
                      error: {
                        status: 'CUSTOM_ERROR',
                        error: (_ref2 = (_error$message2 = _context.t1 === null || _context.t1 === void 0 ? void 0 : _context.t1.message) !== null && _error$message2 !== void 0 ? _error$message2 : _context.t1 === null || _context.t1 === void 0 ? void 0 : _context.t1.detail) !== null && _ref2 !== void 0 ? _ref2 : _context.t1
                      }
                    });

                  case 41:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[3, 24], [30, 37]]);
          }))();
        },
        keepUnusedDataFor: 10000
      })
    };
  }
});
var useLazyGetQuoteQuery = routing.useLazyGetQuoteQuery;
var useGetQuoteQueryState = routing.endpoints.getQuote.useQueryState;

/**
 * Transforms a Routing API quote into an array of routes that can be used to create
 * a `Trade`.
 */

function computeRoutes(currencyIn, currencyOut, tradeType, quoteResult) {
  if (!quoteResult || !quoteResult.route || !currencyIn || !currencyOut) return undefined;
  if (quoteResult.route.length === 0) return [];
  var parsedTokenIn = parseToken(quoteResult.route[0][0].tokenIn);
  var parsedTokenOut = parseToken(quoteResult.route[0][quoteResult.route[0].length - 1].tokenOut);
  if (parsedTokenIn.address !== currencyIn.wrapped.address) return undefined;
  if (parsedTokenOut.address !== currencyOut.wrapped.address) return undefined;

  try {
    return quoteResult.route.map(function (route) {
      if (route.length === 0) {
        throw new Error('Expected route to have at least one pair or pool');
      }

      var rawAmountIn = route[0].amountIn;
      var rawAmountOut = route[route.length - 1].amountOut;

      if (!rawAmountIn || !rawAmountOut) {
        throw new Error('Expected both amountIn and amountOut to be present');
      }

      return {
        routev3: isV3Route(route) ? new v3Sdk.Route(route.map(parsePool), currencyIn, currencyOut) : null,
        routev2: !isV3Route(route) ? new v2Sdk.Route(route.map(parsePair), currencyIn, currencyOut) : null,
        inputAmount: sdkCore.CurrencyAmount.fromRawAmount(currencyIn, rawAmountIn),
        outputAmount: sdkCore.CurrencyAmount.fromRawAmount(currencyOut, rawAmountOut)
      };
    });
  } catch (e) {
    // `Route` constructor may throw if inputs/outputs are temporarily out of sync
    // (RTK-Query always returns the latest data which may not be the right inputs/outputs)
    // This is not fatal and will fix itself in future render cycles
    console.error('computeRoutes error', e);
    return undefined;
  }
}
function transformRoutesToTrade(route, tradeType) {
  var _route$filter$map, _route$filter$map2;

  return new InterfaceTrade({
    v2Routes: (_route$filter$map = route === null || route === void 0 ? void 0 : route.filter(function (r) {
      return r.routev2 !== null;
    }).map(function (_ref) {
      var routev2 = _ref.routev2,
          inputAmount = _ref.inputAmount,
          outputAmount = _ref.outputAmount;
      return {
        routev2: routev2,
        inputAmount: inputAmount,
        outputAmount: outputAmount
      };
    })) !== null && _route$filter$map !== void 0 ? _route$filter$map : [],
    v3Routes: (_route$filter$map2 = route === null || route === void 0 ? void 0 : route.filter(function (r) {
      return r.routev3 !== null;
    }).map(function (_ref2) {
      var routev3 = _ref2.routev3,
          inputAmount = _ref2.inputAmount,
          outputAmount = _ref2.outputAmount;
      return {
        routev3: routev3,
        inputAmount: inputAmount,
        outputAmount: outputAmount
      };
    })) !== null && _route$filter$map2 !== void 0 ? _route$filter$map2 : [],
    tradeType: tradeType
  });
}

var parseToken = function parseToken(_ref3) {
  var address = _ref3.address,
      chainId = _ref3.chainId,
      decimals = _ref3.decimals,
      symbol = _ref3.symbol;
  return new sdkCore.Token(chainId, address, parseInt(decimals.toString()), symbol);
};

var parsePool = function parsePool(_ref4) {
  var fee = _ref4.fee,
      sqrtRatioX96 = _ref4.sqrtRatioX96,
      liquidity = _ref4.liquidity,
      tickCurrent = _ref4.tickCurrent,
      tokenIn = _ref4.tokenIn,
      tokenOut = _ref4.tokenOut;
  return new v3Sdk.Pool(parseToken(tokenIn), parseToken(tokenOut), parseInt(fee), sqrtRatioX96, liquidity, parseInt(tickCurrent));
};

var parsePair = function parsePair(_ref5) {
  var reserve0 = _ref5.reserve0,
      reserve1 = _ref5.reserve1;
  return new v2Sdk.Pair(sdkCore.CurrencyAmount.fromRawAmount(parseToken(reserve0.token), reserve0.quotient), sdkCore.CurrencyAmount.fromRawAmount(parseToken(reserve1.token), reserve1.quotient));
};

function isV3Route(route) {
  return route[0].type === 'v3-pool';
}

var RouterPreference;

(function (RouterPreference) {
  RouterPreference[RouterPreference["PRICE"] = 0] = "PRICE";
  RouterPreference[RouterPreference["TRADE"] = 1] = "TRADE";
  RouterPreference[RouterPreference["SKIP"] = 2] = "SKIP";
})(RouterPreference || (RouterPreference = {}));

var TRADE_INVALID = {
  state: TradeState.INVALID,
  trade: undefined
};
var TRADE_NOT_FOUND = {
  state: TradeState.NO_ROUTE_FOUND,
  trade: undefined
};
var TRADE_LOADING = {
  state: TradeState.LOADING,
  trade: undefined
};
/**
 * Returns the best trade by invoking the routing api or the smart order router on the client
 * @param tradeType whether the swap is an exact in/out
 * @param routerUrl the base URL of the integrator's auto router API
 * @param amountSpecified the exact amount to swap in/out
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */

function useRouterTrade(tradeType, amountSpecified, currencyIn, currencyOut, routerPreference, routerUrl) {
  var _useWeb3React = core.useWeb3React(),
      provider = _useWeb3React.provider;

  var queryArgs = useGetQuoteArgs({
    provider: provider,
    tradeType: tradeType,
    amountSpecified: amountSpecified,
    currencyIn: currencyIn,
    currencyOut: currencyOut,
    routerUrl: routerUrl
  },
  /*skip=*/
  routerPreference === RouterPreference.SKIP);
  var pollingInterval = React.useMemo(function () {
    if (!amountSpecified) return Infinity;

    switch (routerPreference) {
      // PRICE fetching is informational and costly, so it is done less frequently.
      case RouterPreference.PRICE:
        return 120000;

      case RouterPreference.TRADE:
        return 15000;

      case RouterPreference.SKIP:
        return Infinity;
    }
  }, [amountSpecified, routerPreference]); // Get the cached state *immediately* to update the UI without sending a request - using useGetQuoteQueryState -
  // but debounce the actual request - using useLazyGetQuoteQuery - to avoid flooding the router / JSON-RPC endpoints.

  var _useGetQuoteQueryStat = useGetQuoteQueryState(queryArgs),
      isError = _useGetQuoteQueryStat.isError,
      isFetching = _useGetQuoteQueryStat.isFetching,
      data = _useGetQuoteQueryStat.data,
      currentData = _useGetQuoteQueryStat.currentData,
      fulfilledTimeStamp = _useGetQuoteQueryStat.fulfilledTimeStamp; // An already-fetched value should be refetched if it is older than the pollingInterval.
  // Without explicit refetch, it would not be refetched until another pollingInterval has elapsed.


  var _useLazyGetQuoteQuery = useLazyGetQuoteQuery({
    pollingInterval: pollingInterval
  }),
      _useLazyGetQuoteQuery2 = _slicedToArray__default["default"](_useLazyGetQuoteQuery, 1),
      trigger = _useLazyGetQuoteQuery2[0];

  var request = React.useCallback(function () {
    var _trigger = trigger(queryArgs,
    /*preferCacheValue=*/
    true),
        refetch = _trigger.refetch;

    if (!isFetching && fulfilledTimeStamp && Date.now() - fulfilledTimeStamp > pollingInterval) {
      refetch();
    }
  }, [fulfilledTimeStamp, isFetching, pollingInterval, queryArgs, trigger]);
  useTimeout(request, 200);
  var quote = _typeof__default["default"](data) === 'object' ? data : undefined;
  var trade = React.useMemo(function () {
    var routes = computeRoutes(currencyIn, currencyOut, tradeType, quote);
    if (!routes || routes.length === 0) return;

    try {
      return transformRoutesToTrade(routes, tradeType);
    } catch (e) {
      console.debug('transformRoutesToTrade failed: ', e);
      return;
    }
  }, [currencyIn, currencyOut, quote, tradeType]);
  var isValidBlock = useIsValidBlock(Number(quote === null || quote === void 0 ? void 0 : quote.blockNumber));
  var isValid = currentData === data && isValidBlock;
  var gasUseEstimateUSD = useStablecoinAmountFromFiatValue(quote === null || quote === void 0 ? void 0 : quote.gasUseEstimateUSD);
  return React.useMemo(function () {
    if (!amountSpecified || isError || queryArgs === react.skipToken) {
      return TRADE_INVALID;
    } else if (data === NO_ROUTE) {
      return TRADE_NOT_FOUND;
    } else if (!trade) {
      return TRADE_LOADING;
    } else {
      var state = isValid ? TradeState.VALID : TradeState.LOADING;
      return {
        state: state,
        trade: trade,
        gasUseEstimateUSD: gasUseEstimateUSD
      };
    }
  }, [isError, amountSpecified, queryArgs, data, trade, isValid, gasUseEstimateUSD]);
}

var ERC20ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address"
			},
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address"
			},
			{
				name: "_value",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "_spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	}
];

var _format = "hh-sol-artifact-1";
var contractName = "UniswapInterfaceMulticall";
var sourceName = "contracts/lens/UniswapInterfaceMulticall.sol";
var abi = [
	{
		inputs: [
		],
		name: "getCurrentBlockTimestamp",
		outputs: [
			{
				internalType: "uint256",
				name: "timestamp",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address"
			}
		],
		name: "getEthBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "target",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "gasLimit",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "callData",
						type: "bytes"
					}
				],
				internalType: "struct UniswapInterfaceMulticall.Call[]",
				name: "calls",
				type: "tuple[]"
			}
		],
		name: "multicall",
		outputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "bool",
						name: "success",
						type: "bool"
					},
					{
						internalType: "uint256",
						name: "gasUsed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "returnData",
						type: "bytes"
					}
				],
				internalType: "struct UniswapInterfaceMulticall.Result[]",
				name: "returnData",
				type: "tuple[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var bytecode = "0x608060405234801561001057600080fd5b50610567806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
var deployedBytecode = "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e3146100645780634d2301cc14610085575b600080fd5b61004e610098565b60405161005b919061041f565b60405180910390f35b6100776100723660046102a7565b61009c565b60405161005b929190610428565b61004e610093366004610286565b610220565b4290565b8051439060609067ffffffffffffffff811180156100b957600080fd5b506040519080825280602002602001820160405280156100f357816020015b6100e061023a565b8152602001906001900390816100d85790505b50905060005b835181101561021a57600080600086848151811061011357fe5b60200260200101516000015187858151811061012b57fe5b60200260200101516020015188868151811061014357fe5b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101839190610403565b60006040518083038160008787f1925050503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b509150915060005a8403905060405180606001604052808415158152602001828152602001838152508989815181106101fb57fe5b60200260200101819052505050505050505080806001019150506100f9565b50915091565b73ffffffffffffffffffffffffffffffffffffffff163190565b604051806060016040528060001515815260200160008152602001606081525090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461028157600080fd5b919050565b600060208284031215610297578081fd5b6102a08261025d565b9392505050565b600060208083850312156102b9578182fd5b823567ffffffffffffffff808211156102d0578384fd5b818501915085601f8301126102e3578384fd5b8135818111156102ef57fe5b6102fc8485830201610506565b81815284810190848601875b848110156103f457813587017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610346578a8bfd5b60408051606081018181108b8211171561035c57fe5b8252610369848d0161025d565b8152818401358c82015260608401358a811115610384578d8efd5b8085019450508e603f850112610398578c8dfd5b8b8401358a8111156103a657fe5b6103b68d85601f84011601610506565b93508084528f838287010111156103cb578d8efd5b808386018e86013783018c018d9052908101919091528552509287019290870190600101610308565b50909998505050505050505050565b6000825161041581846020870161052a565b9190910192915050565b90815260200190565b600060408083018584526020828186015281865180845260609350838701915083838202880101838901875b838110156104f6578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa001855281518051151584528681015187850152880151888401889052805188850181905260806104b582828801858c0161052a565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01694909401909301925090850190600101610454565b50909a9950505050505050505050565b60405181810167ffffffffffffffff8111828210171561052257fe5b604052919050565b60005b8381101561054557818101518382015260200161052d565b83811115610554576000848401525b5050505056fea164736f6c6343000706000a";
var linkReferences = {
};
var deployedLinkReferences = {
};
var UniswapInterfaceMulticallJson = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var ARGENT_WALLET_DETECTOR_ABI = [
	{
		inputs: [
			{
				internalType: "bytes32[]",
				name: "_codes",
				type: "bytes32[]"
			},
			{
				internalType: "address[]",
				name: "_implementations",
				type: "address[]"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "code",
				type: "bytes32"
			}
		],
		name: "CodeAdded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "implementation",
				type: "address"
			}
		],
		name: "ImplementationAdded",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_newOwner",
				type: "address"
			}
		],
		name: "OwnerChanged",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		name: "acceptedCodes",
		outputs: [
			{
				internalType: "bool",
				name: "exists",
				type: "bool"
			},
			{
				internalType: "uint128",
				name: "index",
				type: "uint128"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "acceptedImplementations",
		outputs: [
			{
				internalType: "bool",
				name: "exists",
				type: "bool"
			},
			{
				internalType: "uint128",
				name: "index",
				type: "uint128"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "_code",
				type: "bytes32"
			}
		],
		name: "addCode",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_argentWallet",
				type: "address"
			}
		],
		name: "addCodeAndImplementationFromWallet",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_impl",
				type: "address"
			}
		],
		name: "addImplementation",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_newOwner",
				type: "address"
			}
		],
		name: "changeOwner",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCodes",
		outputs: [
			{
				internalType: "bytes32[]",
				name: "",
				type: "bytes32[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getImplementations",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_wallet",
				type: "address"
			}
		],
		name: "isArgentWallet",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var EIP_2612 = [
	{
		constant: true,
		inputs: [
			{
				name: "owner",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "DOMAIN_SEPARATOR",
		outputs: [
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ENS_PUBLIC_RESOLVER_ABI = [
	{
		inputs: [
			{
				internalType: "contract ENS",
				name: "_ens",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "contentType",
				type: "uint256"
			}
		],
		name: "ABIChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "a",
				type: "address"
			}
		],
		name: "AddrChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "coinType",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "newAddress",
				type: "bytes"
			}
		],
		name: "AddressChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "target",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "isAuthorised",
				type: "bool"
			}
		],
		name: "AuthorisationChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "hash",
				type: "bytes"
			}
		],
		name: "ContenthashChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "name",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "resource",
				type: "uint16"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "record",
				type: "bytes"
			}
		],
		name: "DNSRecordChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "name",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "resource",
				type: "uint16"
			}
		],
		name: "DNSRecordDeleted",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "DNSZoneCleared",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			},
			{
				indexed: false,
				internalType: "address",
				name: "implementer",
				type: "address"
			}
		],
		name: "InterfaceChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "string",
				name: "name",
				type: "string"
			}
		],
		name: "NameChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "x",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "y",
				type: "bytes32"
			}
		],
		name: "PubkeyChanged",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "string",
				name: "indexedKey",
				type: "string"
			},
			{
				indexed: false,
				internalType: "string",
				name: "key",
				type: "string"
			}
		],
		name: "TextChanged",
		type: "event"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "contentTypes",
				type: "uint256"
			}
		],
		name: "ABI",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "addr",
		outputs: [
			{
				internalType: "address payable",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "authorisations",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "clearDNSZone",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "contenthash",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "name",
				type: "bytes32"
			},
			{
				internalType: "uint16",
				name: "resource",
				type: "uint16"
			}
		],
		name: "dnsRecord",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "name",
				type: "bytes32"
			}
		],
		name: "hasDNSRecords",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			}
		],
		name: "interfaceImplementer",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "pubkey",
		outputs: [
			{
				internalType: "bytes32",
				name: "x",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "y",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "contentType",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "setABI",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint256",
				name: "coinType",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "a",
				type: "bytes"
			}
		],
		name: "setAddr",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "a",
				type: "address"
			}
		],
		name: "setAddr",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "target",
				type: "address"
			},
			{
				internalType: "bool",
				name: "isAuthorised",
				type: "bool"
			}
		],
		name: "setAuthorisation",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes",
				name: "hash",
				type: "bytes"
			}
		],
		name: "setContenthash",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "setDNSRecords",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			},
			{
				internalType: "address",
				name: "implementer",
				type: "address"
			}
		],
		name: "setInterface",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "string",
				name: "name",
				type: "string"
			}
		],
		name: "setName",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "x",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "y",
				type: "bytes32"
			}
		],
		name: "setPubkey",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "string",
				name: "key",
				type: "string"
			},
			{
				internalType: "string",
				name: "value",
				type: "string"
			}
		],
		name: "setText",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceID",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "pure",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "string",
				name: "key",
				type: "string"
			}
		],
		name: "text",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ENS_ABI = [
	{
		inputs: [
			{
				internalType: "contract ENS",
				name: "_old",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: true,
				internalType: "bytes32",
				name: "label",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "NewOwner",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "resolver",
				type: "address"
			}
		],
		name: "NewResolver",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "NewTTL",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "old",
		outputs: [
			{
				internalType: "contract ENS",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "recordExists",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "resolver",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "setOwner",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "resolver",
				type: "address"
			},
			{
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "setRecord",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "resolver",
				type: "address"
			}
		],
		name: "setResolver",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "label",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "setSubnodeOwner",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "bytes32",
				name: "label",
				type: "bytes32"
			},
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "resolver",
				type: "address"
			},
			{
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "setSubnodeRecord",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			},
			{
				internalType: "uint64",
				name: "ttl",
				type: "uint64"
			}
		],
		name: "setTTL",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				internalType: "bytes32",
				name: "node",
				type: "bytes32"
			}
		],
		name: "ttl",
		outputs: [
			{
				internalType: "uint64",
				name: "",
				type: "uint64"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var ERC20_BYTES32_ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var WETH_ABI = [
	{
		constant: true,
		inputs: [
		],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "guy",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "src",
				type: "address"
			},
			{
				name: "dst",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "withdraw",
		outputs: [
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "dst",
				type: "address"
			},
			{
				name: "wad",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
		],
		name: "deposit",
		outputs: [
		],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			},
			{
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: true,
				name: "guy",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: true,
				name: "dst",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "dst",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Deposit",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "src",
				type: "address"
			},
			{
				indexed: false,
				name: "wad",
				type: "uint256"
			}
		],
		name: "Withdrawal",
		type: "event"
	}
];

// returns the checksummed address if the address is valid, otherwise returns false
function isAddress(value) {
  try {
    return address.getAddress(value);
  } catch (_unused) {
    return false;
  }
} // shorten the checksummed version of the input address to have 0x + 4 characters at start and end

function getSigner(provider, account) {
  return provider.getSigner(account).connectUnchecked();
} // account is optional


function getProviderOrSigner(provider, account) {
  return account ? getSigner(provider, account) : provider;
} // account is optional


function getContract(address, ABI, provider, account) {
  if (!isAddress(address) || address === constants.AddressZero) {
    throw Error("Invalid 'address' parameter '".concat(address, "'."));
  }

  return new contracts.Contract(address, ABI, getProviderOrSigner(provider, account));
}

var MulticallABI = UniswapInterfaceMulticallJson.abi; // returns null on errors

function useContract(addressOrAddressMap, ABI) {
  var withSignerIfPossible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _useWeb3React = core.useWeb3React(),
      provider = _useWeb3React.provider,
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId;

  return React.useMemo(function () {
    if (!addressOrAddressMap || !ABI || !provider || !chainId) return null;
    var address;
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap;else address = addressOrAddressMap[chainId];
    if (!address) return null;

    try {
      return getContract(address, ABI, provider, withSignerIfPossible && account ? account : undefined);
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [addressOrAddressMap, ABI, provider, chainId, withSignerIfPossible, account]);
}
function useTokenContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, ERC20ABI, withSignerIfPossible);
}
function useWETHContract(withSignerIfPossible) {
  var _WRAPPED_NATIVE_CURRE;

  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  return useContract(chainId ? (_WRAPPED_NATIVE_CURRE = WRAPPED_NATIVE_CURRENCY[chainId]) === null || _WRAPPED_NATIVE_CURRE === void 0 ? void 0 : _WRAPPED_NATIVE_CURRE.address : undefined, WETH_ABI, withSignerIfPossible);
}
function useArgentWalletDetectorContract() {
  return useContract(ARGENT_WALLET_DETECTOR_ADDRESS, ARGENT_WALLET_DETECTOR_ABI, false);
}
function useENSRegistrarContract(withSignerIfPossible) {
  return useContract(ENS_REGISTRAR_ADDRESSES, ENS_ABI, withSignerIfPossible);
}
function useENSResolverContract(address, withSignerIfPossible) {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible);
}
function useBytes32TokenContract(tokenAddress, withSignerIfPossible) {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible);
}
function useEIP2612Contract(tokenAddress) {
  return useContract(tokenAddress, EIP_2612, false);
}
function useInterfaceMulticall() {
  return useContract(MULTICALL_ADDRESS, MulticallABI, false);
}

var multicall = reduxMulticall.createMulticall();
function MulticallUpdater() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var latestBlockNumber = useBlockNumber();
  var contract = useInterfaceMulticall();
  return /*#__PURE__*/React__default["default"].createElement(multicall.Updater, {
    chainId: chainId,
    latestBlockNumber: latestBlockNumber,
    contract: contract
  });
}

// Create wrappers for hooks so consumers don't need to get latest block themselves

function useMultipleContractSingleData() {
  var _multicall$hooks;

  var _useCallContext = useCallContext(),
      chainId = _useCallContext.chainId,
      latestBlock = _useCallContext.latestBlock;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (_multicall$hooks = multicall.hooks).useMultipleContractSingleData.apply(_multicall$hooks, [chainId, latestBlock].concat(args));
}
function useSingleCallResult() {
  var _multicall$hooks2;

  var _useCallContext2 = useCallContext(),
      chainId = _useCallContext2.chainId,
      latestBlock = _useCallContext2.latestBlock;

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return (_multicall$hooks2 = multicall.hooks).useSingleCallResult.apply(_multicall$hooks2, [chainId, latestBlock].concat(args));
}
function useSingleContractMultipleData() {
  var _multicall$hooks3;

  var _useCallContext3 = useCallContext(),
      chainId = _useCallContext3.chainId,
      latestBlock = _useCallContext3.latestBlock;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (_multicall$hooks3 = multicall.hooks).useSingleContractMultipleData.apply(_multicall$hooks3, [chainId, latestBlock].concat(args));
}

function useCallContext() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var latestBlock = useBlockNumber();
  return {
    chainId: chainId,
    latestBlock: latestBlock
  };
}

/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */

function useNativeCurrencyBalances(uncheckedAddresses) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var multicallContract = useInterfaceMulticall();
  var validAddressInputs = React.useMemo(function () {
    return uncheckedAddresses ? uncheckedAddresses.map(isAddress).filter(function (a) {
      return a !== false;
    }).sort().map(function (addr) {
      return [addr];
    }) : [];
  }, [uncheckedAddresses]);
  var results = useSingleContractMultipleData(multicallContract, 'getEthBalance', validAddressInputs);
  return React.useMemo(function () {
    return validAddressInputs.reduce(function (memo, _ref, i) {
      var _results$i, _results$i$result;

      var _ref2 = _slicedToArray__default["default"](_ref, 1),
          address = _ref2[0];

      var value = results === null || results === void 0 ? void 0 : (_results$i = results[i]) === null || _results$i === void 0 ? void 0 : (_results$i$result = _results$i.result) === null || _results$i$result === void 0 ? void 0 : _results$i$result[0];
      if (value && chainId) memo[address] = sdkCore.CurrencyAmount.fromRawAmount(nativeOnChain(chainId), JSBI__default["default"].BigInt(value.toString()));
      return memo;
    }, {});
  }, [validAddressInputs, chainId, results]);
}
var ERC20Interface = new abi$1.Interface(ERC20ABI);
var tokenBalancesGasRequirement = {
  gasRequired: 185000
};
/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */

function useTokenBalancesWithLoadingIndicator(address, tokens) {
  var validatedTokens = React.useMemo(function () {
    var _tokens$filter;

    return (_tokens$filter = tokens === null || tokens === void 0 ? void 0 : tokens.filter(function (t) {
      return isAddress(t === null || t === void 0 ? void 0 : t.address) !== false;
    })) !== null && _tokens$filter !== void 0 ? _tokens$filter : [];
  }, [tokens]);
  var validatedTokenAddresses = React.useMemo(function () {
    return validatedTokens.map(function (vt) {
      return vt.address;
    });
  }, [validatedTokens]);
  var balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20Interface, 'balanceOf', React.useMemo(function () {
    return [address];
  }, [address]), tokenBalancesGasRequirement);
  var anyLoading = React.useMemo(function () {
    return balances.some(function (callState) {
      return callState.loading;
    });
  }, [balances]);
  return React.useMemo(function () {
    return [address && validatedTokens.length > 0 ? validatedTokens.reduce(function (memo, token, i) {
      var _balances$i, _balances$i$result;

      var value = balances === null || balances === void 0 ? void 0 : (_balances$i = balances[i]) === null || _balances$i === void 0 ? void 0 : (_balances$i$result = _balances$i.result) === null || _balances$i$result === void 0 ? void 0 : _balances$i$result[0];
      var amount = value ? JSBI__default["default"].BigInt(value.toString()) : undefined;

      if (amount) {
        memo[token.address] = sdkCore.CurrencyAmount.fromRawAmount(token, amount);
      }

      return memo;
    }, {}) : {}, anyLoading];
  }, [address, validatedTokens, anyLoading, balances]);
}
function useTokenBalances(address, tokens) {
  return useTokenBalancesWithLoadingIndicator(address, tokens)[0];
} // get the balance for a single token/account combo
function useCurrencyBalances(account, currencies) {
  var tokens = React.useMemo(function () {
    var _currencies$filter;

    return (_currencies$filter = currencies === null || currencies === void 0 ? void 0 : currencies.filter(function (currency) {
      var _currency$isToken;

      return (_currency$isToken = currency === null || currency === void 0 ? void 0 : currency.isToken) !== null && _currency$isToken !== void 0 ? _currency$isToken : false;
    })) !== null && _currencies$filter !== void 0 ? _currencies$filter : [];
  }, [currencies]);
  var tokenBalances = useTokenBalances(account, tokens);
  var containsETH = React.useMemo(function () {
    var _currencies$some;

    return (_currencies$some = currencies === null || currencies === void 0 ? void 0 : currencies.some(function (currency) {
      return currency === null || currency === void 0 ? void 0 : currency.isNative;
    })) !== null && _currencies$some !== void 0 ? _currencies$some : false;
  }, [currencies]);
  var ethBalance = useNativeCurrencyBalances(React.useMemo(function () {
    return containsETH ? [account] : [];
  }, [containsETH, account]));
  return React.useMemo(function () {
    var _currencies$map;

    return (_currencies$map = currencies === null || currencies === void 0 ? void 0 : currencies.map(function (currency) {
      if (!account || !currency) return undefined;
      if (currency.isToken) return tokenBalances[currency.address];
      if (currency.isNative) return ethBalance[account];
      return undefined;
    })) !== null && _currencies$map !== void 0 ? _currencies$map : [];
  }, [account, currencies, ethBalance, tokenBalances]);
}
function useCurrencyBalance(account, currency) {
  return useCurrencyBalances(account, React.useMemo(function () {
    return [currency];
  }, [currency]))[0];
}

function useOnSupportedNetwork(chainId) {
  var _useWeb3React = core.useWeb3React(),
      activeChainId = _useWeb3React.chainId;

  chainId = chainId || activeChainId;
  return React.useMemo(function () {
    return Boolean(chainId && ALL_SUPPORTED_CHAIN_IDS.includes(chainId));
  }, [chainId]);
}

var EthereumLogo = "data:image/png;base64,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";

var arbitrumLogoUrl = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20470.287%20514.251%22%20enable-background%3D%22new%200%200%20470.287%20514.251%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%20id%3D%22Background%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Logos_and_symbols%22%3E%20%3Cg%20id%3D%22SYMBOL_VER_3%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_3_3_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_4%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_4_1_%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_4_3_%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22off_2_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22VER_3_1_%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2_1_%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22VER_3%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22off_2%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1_3_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1_1_%22%3E%20%20%3Cg%20id%3D%22_x31_-3%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_14_%22%3E%20%20%20%3Cpath%20fill%3D%22%232D374B%22%20d%3D%22M291.134%2C237.469l35.654-60.5l96.103%2C149.684l0.046%2C28.727l-0.313-197.672%20%20%20%20c-0.228-4.832-2.794-9.252-6.887-11.859L242.715%2C46.324c-4.045-1.99-9.18-1.967-13.22%2C0.063c-0.546%2C0.272-1.06%2C0.57-1.548%2C0.895%20%20%20%20l-0.604%2C0.379L59.399%2C144.983l-0.651%2C0.296c-0.838%2C0.385-1.686%2C0.875-2.48%2C1.444c-3.185%2C2.283-5.299%2C5.66-5.983%2C9.448%20%20%20%20c-0.103%2C0.574-0.179%2C1.158-0.214%2C1.749l0.264%2C161.083l89.515-138.745c11.271-18.397%2C35.825-24.323%2C58.62-24.001l26.753%2C0.706%20%20%20%20L67.588%2C409.765l18.582%2C10.697L245.692%2C157.22l70.51-0.256L157.091%2C426.849l66.306%2C38.138l7.922%2C4.556%20%20%20%20c3.351%2C1.362%2C7.302%2C1.431%2C10.681%2C0.21l175.453-101.678l-33.544%2C19.438L291.134%2C237.469z%20M304.736%2C433.395l-66.969-105.108%20%20%20%20l40.881-69.371l87.952%2C138.628L304.736%2C433.395z%22%2F%3E%20%20%20%3Cpolygon%20fill%3D%22%2328A0F0%22%20points%3D%22237.768%2C328.286%20304.736%2C433.395%20366.601%2C397.543%20278.648%2C258.915%20%20%20%20%22%2F%3E%20%20%20%3Cpath%20fill%3D%22%2328A0F0%22%20d%3D%22M422.937%2C355.379l-0.046-28.727l-96.103-149.684l-35.654%2C60.5l92.774%2C150.043l33.544-19.438%20%20%20%20c3.29-2.673%2C5.281-6.594%2C5.49-10.825L422.937%2C355.379z%22%2F%3E%20%20%20%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M20.219%2C382.469l47.369%2C27.296l157.634-252.801l-26.753-0.706c-22.795-0.322-47.35%2C5.604-58.62%2C24.001%20%20%20%20L50.334%2C319.004l-30.115%2C46.271V382.469z%22%2F%3E%20%20%20%3Cpolygon%20fill%3D%22%23FFFFFF%22%20points%3D%22316.202%2C156.964%20245.692%2C157.22%2086.17%2C420.462%20141.928%2C452.565%20157.091%2C426.849%20%20%20%20%22%2F%3E%20%20%20%3Cpath%20fill%3D%22%2396BEDC%22%20d%3D%22M452.65%2C156.601c-0.59-14.746-8.574-28.245-21.08-36.104L256.28%2C19.692%20%20%20%20c-12.371-6.229-27.825-6.237-40.218-0.004c-1.465%2C0.739-170.465%2C98.752-170.465%2C98.752c-2.339%2C1.122-4.592%2C2.458-6.711%2C3.975%20%20%20%20c-11.164%2C8.001-17.969%2C20.435-18.668%2C34.095v208.765l30.115-46.271L50.07%2C157.921c0.035-0.589%2C0.109-1.169%2C0.214-1.741%20%20%20%20c0.681-3.79%2C2.797-7.171%2C5.983-9.456c0.795-0.569%2C172.682-100.064%2C173.228-100.337c4.04-2.029%2C9.175-2.053%2C13.22-0.063%20%20%20%20l173.022%2C99.523c4.093%2C2.607%2C6.659%2C7.027%2C6.887%2C11.859v199.542c-0.209%2C4.231-1.882%2C8.152-5.172%2C10.825l-33.544%2C19.438%20%20%20%20l-17.308%2C10.031l-61.864%2C35.852l-62.737%2C36.357c-3.379%2C1.221-7.33%2C1.152-10.681-0.21l-74.228-42.693l-15.163%2C25.717%20%20%20%20l66.706%2C38.406c2.206%2C1.255%2C4.171%2C2.367%2C5.784%2C3.272c2.497%2C1.4%2C4.199%2C2.337%2C4.8%2C2.629c4.741%2C2.303%2C11.563%2C3.643%2C17.71%2C3.643%20%20%20%20c5.636%2C0%2C11.132-1.035%2C16.332-3.072l182.225-105.531c10.459-8.104%2C16.612-20.325%2C17.166-33.564V156.601z%22%2F%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_13_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_6_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_4_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White_3_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_15_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Monochromatic_3_%22%3E%20%20%20%3Cg%20id%3D%22_x33__7_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Monochromatic%22%3E%20%20%20%3Cg%20id%3D%22_x33__3_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x33__2_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x33__1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x33_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_10_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_2_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22_x34__1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Monochromatic_2_%22%3E%20%20%20%3Cg%20id%3D%22_x33__6_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White_2_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_11_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22Symbol_-_Original_5_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_12_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22One_color_version_-_White_1_%22%3E%20%20%20%3Cg%20id%3D%22Symbol_-_Original_9_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1_2_%22%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2_4_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2-1-1_1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2-2-1_1_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1_4_%22%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22New_Symbol_1_%22%3E%20%20%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1_3_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%20%3Cg%20id%3D%22New_Symbol%22%3E%20%20%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1_1_%22%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_4_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_3_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_3_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_2_2_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_2%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_1-1-1_2_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22Symbol_-_Original_7_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22Symbol_-_Original_8_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2-1-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2-2-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_2-3-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-1_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-1%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-2_1_%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22SYMBOL_VER_5-2%22%3E%20%3C%2Fg%3E%20%3Cg%20id%3D%22Symbol_-_Monochromatic_1_%22%3E%20%20%3Cg%20id%3D%22_x33__4_%22%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var CeloLogo = "data:image/svg+xml,%3Csvg%20id%3D%22Celo_Rings%22%20data-name%3D%22Celo%20Rings%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20950%20950%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fbcc5c%3B%7D.cls-2%7Bfill%3A%2335d07f%3B%7D.cls-3%7Bfill%3A%235ea33b%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EArtboard%201%3C%2Ftitle%3E%3Cpath%20id%3D%22Bottom_Ring%22%20data-name%3D%22Bottom%20Ring%22%20class%3D%22cls-1%22%20d%3D%22M375%2C850c151.88%2C0%2C275-123.12%2C275-275S526.88%2C300%2C375%2C300%2C100%2C423.12%2C100%2C575%2C223.12%2C850%2C375%2C850Zm0%2C100C167.9%2C950%2C0%2C782.1%2C0%2C575S167.9%2C200%2C375%2C200%2C750%2C367.9%2C750%2C575%2C582.1%2C950%2C375%2C950Z%22%2F%3E%3Cpath%20id%3D%22Top_Ring%22%20data-name%3D%22Top%20Ring%22%20class%3D%22cls-2%22%20d%3D%22M575%2C650c151.88%2C0%2C275-123.12%2C275-275S726.88%2C100%2C575%2C100%2C300%2C223.12%2C300%2C375%2C423.12%2C650%2C575%2C650Zm0%2C100c-207.1%2C0-375-167.9-375-375S367.9%2C0%2C575%2C0%2C950%2C167.9%2C950%2C375%2C782.1%2C750%2C575%2C750Z%22%2F%3E%3Cpath%20id%3D%22Rings_Overlap%22%20data-name%3D%22Rings%20Overlap%22%20class%3D%22cls-3%22%20d%3D%22M587.39%2C750a274.38%2C274.38%2C0%2C0%2C0%2C54.55-108.06A274.36%2C274.36%2C0%2C0%2C0%2C750%2C587.4a373.63%2C373.63%2C0%2C0%2C1-29.16%2C133.45A373.62%2C373.62%2C0%2C0%2C1%2C587.39%2C750ZM308.06%2C308.06A274.36%2C274.36%2C0%2C0%2C0%2C200%2C362.6a373.63%2C373.63%2C0%2C0%2C1%2C29.16-133.45A373.62%2C373.62%2C0%2C0%2C1%2C362.61%2C200%2C274.38%2C274.38%2C0%2C0%2C0%2C308.06%2C308.06Z%22%2F%3E%3C%2Fsvg%3E";

var optimismLogoUrl = "data:image/svg+xml,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20viewBox%3D%220%200%20500%20500%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%22250%22%20cy%3D%22250%22%20r%3D%22250%22%20fill%3D%22%23FF0420%22%2F%3E%3Cpath%20d%3D%22M177.133%20316.446C162.247%20316.446%20150.051%20312.943%20140.544%20305.938C131.162%20298.808%20126.471%20288.676%20126.471%20275.541C126.471%20272.789%20126.784%20269.411%20127.409%20265.408C129.036%20256.402%20131.35%20245.581%20134.352%20232.947C142.858%20198.547%20164.812%20181.347%20200.213%20181.347C209.845%20181.347%20218.476%20182.973%20226.107%20186.225C233.738%20189.352%20239.742%20194.106%20244.12%20200.486C248.498%20206.74%20250.688%20214.246%20250.688%20223.002C250.688%20225.629%20250.375%20228.944%20249.749%20232.947C247.873%20244.08%20245.621%20254.901%20242.994%20265.408C238.616%20282.546%20231.048%20295.368%20220.29%20303.874C209.532%20312.255%20195.147%20316.446%20177.133%20316.446ZM179.76%20289.426C186.766%20289.426%20192.707%20287.362%20197.586%20283.234C202.59%20279.106%20206.155%20272.789%20208.281%20264.283C211.158%20252.524%20213.348%20242.266%20214.849%20233.51C215.349%20230.883%20215.599%20228.194%20215.599%20225.441C215.599%20214.058%20209.657%20208.366%20197.774%20208.366C190.768%20208.366%20184.764%20210.43%20179.76%20214.558C174.882%20218.687%20171.379%20225.004%20169.253%20233.51C167.001%20241.891%20164.749%20252.149%20162.498%20264.283C161.997%20266.784%20161.747%20269.411%20161.747%20272.163C161.747%20283.672%20167.752%20289.426%20179.76%20289.426Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M259.303%20314.57C257.927%20314.57%20256.863%20314.132%20256.113%20313.256C255.487%20312.255%20255.3%20311.13%20255.55%20309.879L281.444%20187.914C281.694%20186.538%20282.382%20185.412%20283.508%20184.536C284.634%20183.661%20285.822%20183.223%20287.073%20183.223H336.985C350.87%20183.223%20362.003%20186.1%20370.384%20191.854C378.891%20197.609%20383.144%20205.927%20383.144%20216.81C383.144%20219.937%20382.769%20223.19%20382.018%20226.567C378.891%20240.953%20372.574%20251.586%20363.067%20258.466C353.685%20265.346%20340.8%20268.786%20324.413%20268.786H299.082L290.451%20309.879C290.2%20311.255%20289.512%20312.38%20288.387%20313.256C287.261%20314.132%20286.072%20314.57%20284.822%20314.57H259.303ZM325.727%20242.892C330.98%20242.892%20335.546%20241.453%20339.424%20238.576C343.427%20235.699%20346.054%20231.571%20347.305%20226.192C347.68%20224.065%20347.868%20222.189%20347.868%20220.563C347.868%20216.935%20346.805%20214.183%20344.678%20212.307C342.551%20210.305%20338.924%20209.305%20333.795%20209.305H311.278L304.148%20242.892H325.727Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var polygonMaticLogo = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2038.4%2033.5%22%20style%3D%22enable-background%3Anew%200%200%2038.4%2033.5%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%238247E5%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M29%2C10.2c-0.7-0.4-1.6-0.4-2.4%2C0L21%2C13.5l-3.8%2C2.1l-5.5%2C3.3c-0.7%2C0.4-1.6%2C0.4-2.4%2C0L5%2C16.3%20%20c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8%2C0.4-1.6%2C1.2-2.1l4.3-2.5c0.7-0.4%2C1.6-0.4%2C2.4%2C0L16%2C7.2c0.7%2C0.4%2C1.2%2C1.2%2C1.2%2C2.1v3.3l3.8-2.2V7%20%20c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4%2C0L1.2%2C5C0.4%2C5.4%2C0%2C6.2%2C0%2C7v9.4c0%2C0.8%2C0.4%2C1.6%2C1.2%2C2.1l8.1%2C4.7%20%20c0.7%2C0.4%2C1.6%2C0.4%2C2.4%2C0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4%2C1.6-0.4%2C2.4%2C0l4.3%2C2.5c0.7%2C0.4%2C1.2%2C1.2%2C1.2%2C2.1v5c0%2C0.8-0.4%2C1.6-1.2%2C2.1%20%20L29%2C28.8c-0.7%2C0.4-1.6%2C0.4-2.4%2C0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8%2C2.2v3.3c0%2C0.8%2C0.4%2C1.6%2C1.2%2C2.1l8.1%2C4.7%20%20c0.7%2C0.4%2C1.6%2C0.4%2C2.4%2C0l8.1-4.7c0.7-0.4%2C1.2-1.2%2C1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29%2C10.2z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _CHAIN_INFO;
var STANDARD_L1_BLOCK_TIME = 12000;
var NetworkType;

(function (NetworkType) {
  NetworkType[NetworkType["L1"] = 0] = "L1";
  NetworkType[NetworkType["L2"] = 1] = "L2";
})(NetworkType || (NetworkType = {}));

var CHAIN_INFO = (_CHAIN_INFO = {}, _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.MAINNET, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Ethereum',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.RINKEBY, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://rinkeby.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Rinkeby',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Rinkeby Ether',
    symbol: 'rETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.ROPSTEN, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://ropsten.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Ropsten',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Ropsten Ether',
    symbol: 'ropETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.KOVAN, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://kovan.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Kovan',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Kovan Ether',
    symbol: 'kovETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.GOERLI, {
  networkType: NetworkType.L1,
  docs: 'https://docs.uniswap.org/',
  explorer: 'https://goerli.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/',
  label: 'Görli',
  logoUrl: EthereumLogo,
  nativeCurrency: {
    name: 'Görli Ether',
    symbol: 'görETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.OPTIMISM, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 1500000,
  bridge: 'https://app.optimism.io/bridge',
  docs: 'https://optimism.io/',
  explorer: 'https://optimistic.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/optimism/',
  label: 'Optimism',
  logoUrl: optimismLogoUrl,
  statusPage: 'https://optimism.io/status',
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.OPTIMISTIC_KOVAN, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 1500000,
  bridge: 'https://app.optimism.io/bridge',
  docs: 'https://optimism.io/',
  explorer: 'https://optimistic.etherscan.io/',
  infoLink: 'https://info.uniswap.org/#/optimism/',
  label: 'Optimistic Kovan',
  logoUrl: optimismLogoUrl,
  statusPage: 'https://optimism.io/status',
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137778-uniswap-on-optimistic-ethereum-oξ',
  nativeCurrency: {
    name: 'Optimistic Kovan Ether',
    symbol: 'kovOpETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.ARBITRUM_ONE, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://bridge.arbitrum.io/',
  docs: 'https://offchainlabs.com/',
  explorer: 'https://arbiscan.io/',
  infoLink: 'https://info.uniswap.org/#/arbitrum',
  label: 'Arbitrum',
  logoUrl: arbitrumLogoUrl,
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.ARBITRUM_RINKEBY, {
  networkType: NetworkType.L2,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://bridge.arbitrum.io/',
  docs: 'https://offchainlabs.com/',
  explorer: 'https://rinkeby-explorer.arbitrum.io/',
  infoLink: 'https://info.uniswap.org/#/arbitrum/',
  label: 'Arbitrum Rinkeby',
  logoUrl: arbitrumLogoUrl,
  helpCenterUrl: 'https://help.uniswap.org/en/collections/3137787-uniswap-on-arbitrum',
  nativeCurrency: {
    name: 'Rinkeby Arbitrum Ether',
    symbol: 'rinkArbETH',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.POLYGON, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://wallet.polygon.technology/bridge',
  docs: 'https://polygon.io/',
  explorer: 'https://polygonscan.com/',
  infoLink: 'https://info.uniswap.org/#/polygon/',
  label: 'Polygon',
  logoUrl: polygonMaticLogo,
  nativeCurrency: {
    name: 'Polygon Matic',
    symbol: 'MATIC',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.POLYGON_MUMBAI, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://wallet.polygon.technology/bridge',
  docs: 'https://polygon.io/',
  explorer: 'https://mumbai.polygonscan.com/',
  infoLink: 'https://info.uniswap.org/#/polygon/',
  label: 'Polygon Mumbai',
  logoUrl: polygonMaticLogo,
  nativeCurrency: {
    name: 'Polygon Mumbai Matic',
    symbol: 'mMATIC',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.CELO, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://www.portalbridge.com/#/transfer',
  docs: 'https://docs.celo.org/',
  explorer: 'https://celoscan.io/',
  infoLink: 'https://info.uniswap.org/#/celo',
  label: 'Celo',
  logoUrl: CeloLogo,
  nativeCurrency: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18
  }
}), _defineProperty__default["default"](_CHAIN_INFO, exports.SupportedChainId.CELO_ALFAJORES, {
  networkType: NetworkType.L1,
  blockWaitMsBeforeWarning: 600000,
  bridge: 'https://www.portalbridge.com/#/transfer',
  docs: 'https://docs.celo.org/',
  explorer: 'https://alfajores.celoscan.io/',
  infoLink: 'https://info.uniswap.org/#/celo',
  label: 'Celo Alfajores',
  logoUrl: CeloLogo,
  nativeCurrency: {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18
  }
}), _CHAIN_INFO);

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * SupportedChainId -> returns L1ChainInfo | L2ChainInfo
 * SupportedL1ChainId -> returns L1ChainInfo
 * SupportedL2ChainId -> returns L2ChainInfo
 */
function getChainInfo(chainId) {
  if (chainId) {
    var _CHAIN_INFO$chainId;

    return (_CHAIN_INFO$chainId = CHAIN_INFO[chainId]) !== null && _CHAIN_INFO$chainId !== void 0 ? _CHAIN_INFO$chainId : undefined;
  }

  return undefined;
}
CHAIN_INFO[exports.SupportedChainId.MAINNET];

exports.TransactionType = void 0;

(function (TransactionType) {
  TransactionType[TransactionType["APPROVAL"] = 0] = "APPROVAL";
  TransactionType[TransactionType["SWAP"] = 1] = "SWAP";
  TransactionType[TransactionType["WRAP"] = 2] = "WRAP";
  TransactionType[TransactionType["UNWRAP"] = 3] = "UNWRAP";
})(exports.TransactionType || (exports.TransactionType = {}));

var transactionsAtom = immer.atomWithImmer({});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function wait(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function waitRandom(min, max) {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */


var CancelledError = /*#__PURE__*/function (_Error) {
  _inherits__default["default"](CancelledError, _Error);

  var _super = _createSuper$4(CancelledError);

  function CancelledError() {
    var _this;

    _classCallCheck__default["default"](this, CancelledError);

    _this = _super.call(this, 'Cancelled');

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this), "isCancelledError", true);

    return _this;
  }

  return _createClass__default["default"](CancelledError);
}( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));
/**
 * Throw this error if the function should retry
 */


var RetryableError = /*#__PURE__*/function (_Error2) {
  _inherits__default["default"](RetryableError, _Error2);

  var _super2 = _createSuper$4(RetryableError);

  function RetryableError() {
    var _this2;

    _classCallCheck__default["default"](this, RetryableError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty__default["default"](_assertThisInitialized__default["default"](_this2), "isRetryableError", true);

    return _this2;
  }

  return _createClass__default["default"](RetryableError);
}( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));

/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
function retry(fn, _ref) {
  var n = _ref.n,
      minWait = _ref.minWait,
      maxWait = _ref.maxWait;
  var completed = false;
  var rejectCancelled;
  var promise = new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(resolve, reject) {
      var result;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rejectCancelled = reject;

            case 1:

              result = void 0;
              _context.prev = 3;
              _context.next = 6;
              return fn();

            case 6:
              result = _context.sent;

              if (!completed) {
                resolve(result);
                completed = true;
              }

              return _context.abrupt("break", 24);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);

              if (!completed) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("break", 24);

            case 15:
              if (!(n <= 0 || !_context.t0.isRetryableError)) {
                _context.next = 19;
                break;
              }

              reject(_context.t0);
              completed = true;
              return _context.abrupt("break", 24);

            case 19:
              n--;

            case 20:
              _context.next = 22;
              return waitRandom(minWait, maxWait);

            case 22:
              _context.next = 1;
              break;

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  return {
    promise: promise,
    cancel: function cancel() {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    }
  };
}

var _RETRY_OPTIONS_BY_CHA;
function shouldCheck(lastBlockNumber, tx) {
  if (tx.receipt) return false;
  if (!tx.lastCheckedBlockNumber) return true;
  var blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber;
  if (blocksSinceCheck < 1) return false;
  var minutesPending = (new Date().getTime() - tx.addedTime) / 60000;

  if (minutesPending > 60) {
    // every 10 blocks if pending longer than an hour
    return blocksSinceCheck > 9;
  } else if (minutesPending > 5) {
    // every 3 blocks if pending longer than 5 minutes
    return blocksSinceCheck > 2;
  } else {
    // otherwise every block
    return true;
  }
}
var RETRY_OPTIONS_BY_CHAIN_ID = (_RETRY_OPTIONS_BY_CHA = {}, _defineProperty__default["default"](_RETRY_OPTIONS_BY_CHA, exports.SupportedChainId.ARBITRUM_ONE, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty__default["default"](_RETRY_OPTIONS_BY_CHA, exports.SupportedChainId.ARBITRUM_RINKEBY, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty__default["default"](_RETRY_OPTIONS_BY_CHA, exports.SupportedChainId.OPTIMISTIC_KOVAN, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _defineProperty__default["default"](_RETRY_OPTIONS_BY_CHA, exports.SupportedChainId.OPTIMISM, {
  n: 10,
  minWait: 250,
  maxWait: 1000
}), _RETRY_OPTIONS_BY_CHA);
var DEFAULT_RETRY_OPTIONS = {
  n: 1,
  minWait: 0,
  maxWait: 0
};
function Updater(_ref) {
  var pendingTransactions = _ref.pendingTransactions,
      onCheck = _ref.onCheck,
      onReceipt = _ref.onReceipt;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var lastBlockNumber = useBlockNumber();
  var fastForwardBlockNumber = useFastForwardBlockNumber();
  var getReceipt = React.useCallback(function (hash) {
    var _RETRY_OPTIONS_BY_CHA2;

    if (!provider || !chainId) throw new Error('No library or chainId');
    var retryOptions = (_RETRY_OPTIONS_BY_CHA2 = RETRY_OPTIONS_BY_CHAIN_ID[chainId]) !== null && _RETRY_OPTIONS_BY_CHA2 !== void 0 ? _RETRY_OPTIONS_BY_CHA2 : DEFAULT_RETRY_OPTIONS;
    return retry(function () {
      return provider.getTransactionReceipt(hash).then(function (receipt) {
        if (receipt === null) {
          console.debug("Retrying tranasaction receipt for ".concat(hash));
          throw new RetryableError();
        }

        return receipt;
      });
    }, retryOptions);
  }, [chainId, provider]);
  React.useEffect(function () {
    if (!chainId || !provider || !lastBlockNumber) return;
    var cancels = Object.keys(pendingTransactions).filter(function (hash) {
      return shouldCheck(lastBlockNumber, pendingTransactions[hash]);
    }).map(function (hash) {
      var _getReceipt = getReceipt(hash),
          promise = _getReceipt.promise,
          cancel = _getReceipt.cancel;

      promise.then(function (receipt) {
        if (receipt) {
          fastForwardBlockNumber(receipt.blockNumber);
          onReceipt({
            chainId: chainId,
            hash: hash,
            receipt: receipt
          });
        } else {
          onCheck({
            chainId: chainId,
            hash: hash,
            blockNumber: lastBlockNumber
          });
        }
      }).catch(function (error) {
        if (!error.isCancelledError) {
          console.warn("Failed to get transaction receipt for ".concat(hash), error);
        }
      });
      return cancel;
    });
    return function () {
      cancels.forEach(function (cancel) {
        return cancel();
      });
    };
  }, [chainId, provider, lastBlockNumber, getReceipt, fastForwardBlockNumber, onReceipt, onCheck, pendingTransactions]);
  return null;
}

function isTransactionRecent(transaction) {
  return Date.now() - transaction.addedTime < 86400000;
}

function usePendingTransactions() {
  var _ref;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var txs = utils.useAtomValue(transactionsAtom);
  return (_ref = chainId ? txs[chainId] : null) !== null && _ref !== void 0 ? _ref : {};
}
function useAddTransactionInfo() {
  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var blockNumber = useBlockNumber();
  var updateTxs = utils.useUpdateAtom(transactionsAtom);
  return React.useCallback(function (info) {
    invariant__default["default"](chainId);
    var txChainId = chainId;
    var hash = info.response.hash;
    updateTxs(function (chainTxs) {
      var txs = chainTxs[txChainId] || {};
      txs[hash] = {
        addedTime: new Date().getTime(),
        lastCheckedBlockNumber: blockNumber,
        info: info
      };
      chainTxs[chainId] = txs;
    });
  }, [blockNumber, chainId, updateTxs]);
}
/** Returns the hash of a pending approval transaction, if it exists. */

function usePendingApproval(token, spender) {
  var _Object$values$find;

  var _useWeb3React3 = core.useWeb3React(),
      chainId = _useWeb3React3.chainId;

  var txs = utils.useAtomValue(transactionsAtom);
  if (!chainId || !token || !spender) return undefined;
  var chainTxs = txs[chainId];
  if (!chainTxs) return undefined;
  return (_Object$values$find = Object.values(chainTxs).find(function (tx) {
    return tx && tx.receipt === undefined && tx.info.type === exports.TransactionType.APPROVAL && tx.info.tokenAddress === token.address && tx.info.spenderAddress === spender && isTransactionRecent(tx);
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.info.response.hash;
}
function useIsPendingApproval(token) {
  return Boolean(usePendingApproval(token));
}
function TransactionsUpdater(_ref2) {
  var onTxSubmit = _ref2.onTxSubmit,
      onTxSuccess = _ref2.onTxSuccess,
      onTxFail = _ref2.onTxFail;
  var currentPendingTxs = usePendingTransactions();
  var updateTxs = utils.useUpdateAtom(transactionsAtom);
  var onCheck = React.useCallback(function (_ref3) {
    var chainId = _ref3.chainId,
        hash = _ref3.hash,
        blockNumber = _ref3.blockNumber;
    updateTxs(function (txs) {
      var _txs$chainId;

      var tx = (_txs$chainId = txs[chainId]) === null || _txs$chainId === void 0 ? void 0 : _txs$chainId[hash];

      if (tx) {
        tx.lastCheckedBlockNumber = tx.lastCheckedBlockNumber ? Math.max(tx.lastCheckedBlockNumber, blockNumber) : blockNumber;
      }
    });
  }, [updateTxs]);
  var onReceipt = React.useCallback(function (_ref4) {
    var chainId = _ref4.chainId,
        hash = _ref4.hash,
        receipt = _ref4.receipt;
    updateTxs(function (txs) {
      var _txs$chainId2;

      var tx = (_txs$chainId2 = txs[chainId]) === null || _txs$chainId2 === void 0 ? void 0 : _txs$chainId2[hash];

      if (tx) {
        tx.receipt = receipt;
      }
    });

    if (receipt.status === 0) {
      onTxFail === null || onTxFail === void 0 ? void 0 : onTxFail(hash, receipt);
    } else {
      onTxSuccess === null || onTxSuccess === void 0 ? void 0 : onTxSuccess(hash, receipt);
    }
  }, [updateTxs, onTxFail, onTxSuccess]);
  var oldPendingTxs = React.useRef({});
  React.useEffect(function () {
    var newPendingTxHashes = Object.keys(currentPendingTxs);
    var oldPendingTxHashes = new Set(Object.keys(oldPendingTxs.current));

    if (newPendingTxHashes.length !== oldPendingTxHashes.size) {
      // if added new tx
      newPendingTxHashes.forEach(function (txHash) {
        if (!oldPendingTxHashes.has(txHash)) {
          onTxSubmit === null || onTxSubmit === void 0 ? void 0 : onTxSubmit(txHash, currentPendingTxs[txHash]);
        }
      });
      oldPendingTxs.current = currentPendingTxs;
    }
  }, [currentPendingTxs, onTxSubmit]);
  return /*#__PURE__*/React__default["default"].createElement(Updater, {
    pendingTransactions: currentPendingTxs,
    onCheck: onCheck,
    onReceipt: onReceipt
  });
}

/**
 * Invokes callback repeatedly over an interval defined by the delay
 * @param callback
 * @param delay if null, the callback will not be invoked
 * @param leading if true, the callback will be invoked immediately (on the leading edge); otherwise, it will be invoked after delay
 */

function useInterval(callback, delay) {
  var leading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  React.useEffect(function () {
    function tick() {
      var current = savedCallback.current;
      current && current();
    }

    if (delay !== null) {
      if (leading) tick();
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return;
  }, [delay, leading]);
}

var PERMIT2_ABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint160",
				name: "amount",
				type: "uint160"
			},
			{
				internalType: "uint48",
				name: "expiration",
				type: "uint48"
			},
			{
				internalType: "uint48",
				name: "nonce",
				type: "uint48"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var PERMIT_EXPIRATION = 2592000000;
var PERMIT_SIG_EXPIRATION = 1800000;

function toDeadline(expiration) {
  return Math.floor((Date.now() + expiration) / 1000);
}

function usePermitAllowance(token, owner, spender) {
  var contract = useContract(permit2Sdk.PERMIT2_ADDRESS, PERMIT2_ABI);
  var inputs = React.useMemo(function () {
    return [owner, token === null || token === void 0 ? void 0 : token.address, spender];
  }, [owner, spender, token === null || token === void 0 ? void 0 : token.address]); // If there is no allowance yet, re-check next observed block.
  // This guarantees that the permitAllowance is synced upon submission and updated upon being synced.

  var _useState = React.useState(),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      blocksPerFetch = _useState2[0],
      setBlocksPerFetch = _useState2[1];

  var result = useSingleCallResult(contract, 'allowance', inputs, {
    blocksPerFetch: blocksPerFetch
  }).result;
  var rawAmount = result === null || result === void 0 ? void 0 : result.amount.toString(); // convert to a string before using in a hook, to avoid spurious rerenders

  var allowance = React.useMemo(function () {
    return token && rawAmount ? sdkCore.CurrencyAmount.fromRawAmount(token, rawAmount) : undefined;
  }, [token, rawAmount]);
  React.useEffect(function () {
    return setBlocksPerFetch(allowance !== null && allowance !== void 0 && allowance.equalTo(0) ? 1 : undefined);
  }, [allowance]);
  return React.useMemo(function () {
    return {
      permitAllowance: allowance,
      expiration: result === null || result === void 0 ? void 0 : result.expiration,
      nonce: result === null || result === void 0 ? void 0 : result.nonce
    };
  }, [allowance, result === null || result === void 0 ? void 0 : result.expiration, result === null || result === void 0 ? void 0 : result.nonce]);
}
function useUpdatePermitAllowance(token, spender, nonce, onPermitSignature) {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  return React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var permit, _AllowanceTransfer$ge, domain, types, values, _signature, _token$symbol, symbol;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (chainId) {
              _context.next = 3;
              break;
            }

            throw new Error('missing chainId');

          case 3:
            if (provider) {
              _context.next = 5;
              break;
            }

            throw new Error('missing provider');

          case 5:
            if (token) {
              _context.next = 7;
              break;
            }

            throw new Error('missing token');

          case 7:
            if (spender) {
              _context.next = 9;
              break;
            }

            throw new Error('missing spender');

          case 9:
            if (!(nonce === undefined)) {
              _context.next = 11;
              break;
            }

            throw new Error('missing nonce');

          case 11:
            permit = {
              details: {
                token: token.address,
                amount: permit2Sdk.MaxAllowanceTransferAmount,
                expiration: toDeadline(PERMIT_EXPIRATION),
                nonce: nonce
              },
              spender: spender,
              sigDeadline: toDeadline(PERMIT_SIG_EXPIRATION)
            };
            _AllowanceTransfer$ge = permit2Sdk.AllowanceTransfer.getPermitData(permit, permit2Sdk.PERMIT2_ADDRESS, chainId), domain = _AllowanceTransfer$ge.domain, types = _AllowanceTransfer$ge.types, values = _AllowanceTransfer$ge.values;
            _context.next = 15;
            return provider.getSigner(account)._signTypedData(domain, types, values);

          case 15:
            _signature = _context.sent;
            onPermitSignature === null || onPermitSignature === void 0 ? void 0 : onPermitSignature(_objectSpread$c(_objectSpread$c({}, permit), {}, {
              signature: _signature
            }));
            return _context.abrupt("return");

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            symbol = (_token$symbol = token === null || token === void 0 ? void 0 : token.symbol) !== null && _token$symbol !== void 0 ? _token$symbol : 'Token';
            throw new Error("".concat(symbol, " permit failed: ").concat(_context.t0 instanceof Error ? _context.t0.message : _context.t0));

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  })), [account, chainId, nonce, onPermitSignature, provider, spender, token]);
}

/**
 * Returns the gas value plus a margin for unexpected or variable gas costs
 * @param value the gas value to pad
 */
function calculateGasMargin(value) {
  return value.mul(120).div(100);
}

function useTokenAllowance(token, owner, spender) {
  var contract = useTokenContract(token === null || token === void 0 ? void 0 : token.address, false);
  var inputs = React.useMemo(function () {
    return [owner, spender];
  }, [owner, spender]); // If there is no allowance yet, re-check next observed block.
  // This guarantees that the tokenAllowance is marked isSyncing upon approval and updated upon being synced.

  var _useState = React.useState(),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      blocksPerFetch = _useState2[0],
      setBlocksPerFetch = _useState2[1];

  var _ref = useSingleCallResult(contract, 'allowance', inputs, {
    blocksPerFetch: blocksPerFetch
  }),
      result = _ref.result,
      isSyncing = _ref.syncing;

  var rawAmount = result === null || result === void 0 ? void 0 : result.toString(); // convert to a string before using in a hook, to avoid spurious rerenders

  var allowance = React.useMemo(function () {
    return token && rawAmount ? sdkCore.CurrencyAmount.fromRawAmount(token, rawAmount) : undefined;
  }, [token, rawAmount]);
  React.useEffect(function () {
    return setBlocksPerFetch(allowance !== null && allowance !== void 0 && allowance.equalTo(0) ? 1 : undefined);
  }, [allowance]);
  return React.useMemo(function () {
    return {
      tokenAllowance: allowance,
      isSyncing: isSyncing
    };
  }, [allowance, isSyncing]);
}
function useUpdateTokenAllowance(amount, spender) {
  var contract = useTokenContract(amount === null || amount === void 0 ? void 0 : amount.currency.address);
  return React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var allowance, estimatedGas, gasLimit, response, _amount$currency$symb, symbol;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (amount) {
              _context.next = 3;
              break;
            }

            throw new Error('missing amount');

          case 3:
            if (contract) {
              _context.next = 5;
              break;
            }

            throw new Error('missing contract');

          case 5:
            if (spender) {
              _context.next = 7;
              break;
            }

            throw new Error('missing spender');

          case 7:
            allowance = sdkCore.MaxUint256.toString();
            _context.next = 10;
            return contract.estimateGas.approve(spender, allowance).catch(function () {
              // Fallback for tokens which restrict approval amounts:
              allowance = amount.quotient.toString();
              return contract.estimateGas.approve(spender, allowance);
            });

          case 10:
            estimatedGas = _context.sent;
            gasLimit = calculateGasMargin(estimatedGas);
            _context.next = 14;
            return contract.approve(spender, allowance, {
              gasLimit: gasLimit
            });

          case 14:
            response = _context.sent;
            return _context.abrupt("return", {
              type: exports.TransactionType.APPROVAL,
              response: response,
              tokenAddress: contract.address,
              spenderAddress: spender
            });

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            symbol = (_amount$currency$symb = amount === null || amount === void 0 ? void 0 : amount.currency.symbol) !== null && _amount$currency$symb !== void 0 ? _amount$currency$symb : 'Token';
            throw new Error("".concat(symbol, " approval failed: ").concat(_context.t0 instanceof Error ? _context.t0.message : _context.t0));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  })), [amount, contract, spender]);
}

var ApprovalState$1;

(function (ApprovalState) {
  ApprovalState[ApprovalState["PENDING"] = 0] = "PENDING";
  ApprovalState[ApprovalState["SYNCING"] = 1] = "SYNCING";
  ApprovalState[ApprovalState["SYNCED"] = 2] = "SYNCED";
})(ApprovalState$1 || (ApprovalState$1 = {}));

var AllowanceState;

(function (AllowanceState) {
  AllowanceState[AllowanceState["LOADING"] = 0] = "LOADING";
  AllowanceState[AllowanceState["REQUIRED"] = 1] = "REQUIRED";
  AllowanceState[AllowanceState["ALLOWED"] = 2] = "ALLOWED";
})(AllowanceState || (AllowanceState = {}));

function usePermit2Allowance(amount, spender) {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var token = amount === null || amount === void 0 ? void 0 : amount.currency;

  var _useTokenAllowance = useTokenAllowance(token, account, permit2Sdk.PERMIT2_ADDRESS),
      tokenAllowance = _useTokenAllowance.tokenAllowance,
      isApprovalSyncing = _useTokenAllowance.isSyncing;

  var updateTokenAllowance = useUpdateTokenAllowance(amount, permit2Sdk.PERMIT2_ADDRESS);
  var isApproved = React.useMemo(function () {
    if (!amount || !tokenAllowance) return false;
    return tokenAllowance.greaterThan(amount) || tokenAllowance.equalTo(amount);
  }, [amount, tokenAllowance]); // Marks approval as loading from the time it is submitted (pending), until it has confirmed and another block synced.
  // This avoids re-prompting the user for an already-submitted but not-yet-observed approval, by marking it loading
  // until it has been re-observed. It wll sync immediately, because confirmation fast-forwards the block number.

  var _useState = React.useState(ApprovalState$1.SYNCED),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      approvalState = _useState2[0],
      setApprovalState = _useState2[1];

  var isApprovalLoading = approvalState !== ApprovalState$1.SYNCED;
  var isApprovalPending = Boolean(usePendingApproval(token, permit2Sdk.PERMIT2_ADDRESS));
  React.useEffect(function () {
    if (isApprovalPending) {
      setApprovalState(ApprovalState$1.PENDING);
    } else {
      setApprovalState(function (state) {
        if (state === ApprovalState$1.PENDING && isApprovalSyncing) {
          return ApprovalState$1.SYNCING;
        } else if (state === ApprovalState$1.SYNCING && !isApprovalSyncing) {
          return ApprovalState$1.SYNCED;
        }

        return state;
      });
    }
  }, [isApprovalPending, isApprovalSyncing]); // Signature and PermitAllowance will expire, so they should be rechecked at an interval.

  var _useState3 = React.useState(Date.now()),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      now = _useState4[0],
      setNow = _useState4[1]; // Calculate now such that the signature will still be valid for the submitting block.


  useInterval(function () {
    return setNow((Date.now() - STANDARD_L1_BLOCK_TIME) / 1000);
  }, STANDARD_L1_BLOCK_TIME, true);

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      signature = _useState6[0],
      setSignature = _useState6[1];

  var isSigned = React.useMemo(function () {
    if (!amount || !signature) return false;
    return signature.details.token === (token === null || token === void 0 ? void 0 : token.address) && signature.spender === spender && signature.sigDeadline >= now;
  }, [amount, now, signature, spender, token === null || token === void 0 ? void 0 : token.address]);

  var _usePermitAllowance = usePermitAllowance(token, account, spender),
      permitAllowance = _usePermitAllowance.permitAllowance,
      permitExpiration = _usePermitAllowance.expiration,
      nonce = _usePermitAllowance.nonce;

  var updatePermitAllowance = useUpdatePermitAllowance(token, spender, nonce, setSignature);
  var isPermitted = React.useMemo(function () {
    if (!amount || !permitAllowance || !permitExpiration) return false;
    return (permitAllowance.greaterThan(amount) || permitAllowance.equalTo(amount)) && permitExpiration >= now;
  }, [amount, now, permitAllowance, permitExpiration]);
  var shouldRequestApproval = !(isApproved || isApprovalLoading);
  var shouldRequestSignature = !(isPermitted || isSigned);
  var addTransactionInfo = useAddTransactionInfo();
  var approveAndPermit = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var info;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!shouldRequestApproval) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return updateTokenAllowance();

          case 3:
            info = _context.sent;
            addTransactionInfo(info);

          case 5:
            if (!shouldRequestSignature) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return updatePermitAllowance();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [addTransactionInfo, shouldRequestApproval, shouldRequestSignature, updatePermitAllowance, updateTokenAllowance]);
  return React.useMemo(function () {
    if (token) {
      if (!tokenAllowance || !permitAllowance) {
        return {
          state: AllowanceState.LOADING
        };
      } else if (!(isPermitted || isSigned)) {
        return {
          token: token,
          state: AllowanceState.REQUIRED,
          isApprovalLoading: false,
          approveAndPermit: approveAndPermit
        };
      } else if (!isApproved) {
        return {
          token: token,
          state: AllowanceState.REQUIRED,
          isApprovalLoading: isApprovalLoading,
          approveAndPermit: approveAndPermit
        };
      }
    }

    return {
      token: token,
      state: AllowanceState.ALLOWED,
      permitSignature: !isPermitted && isSigned ? signature : undefined
    };
  }, [approveAndPermit, isApprovalLoading, isApproved, isPermitted, isSigned, permitAllowance, signature, token, tokenAllowance]);
}

var DEFAULT_DEADLINE_FROM_NOW = 60 * 30;
var L2_DEADLINE_FROM_NOW = 60 * 5; // transaction popup dismisal amounts

JSBI__default["default"].BigInt(60 * 60 * 24 * 7);
JSBI__default["default"].BigInt(0); // one basis JSBI.BigInt

var BIPS_BASE = JSBI__default["default"].BigInt(10000);
new sdkCore.Percent(JSBI__default["default"].BigInt(1), BIPS_BASE); // used for warning states

new sdkCore.Percent(JSBI__default["default"].BigInt(100), BIPS_BASE); // 1%

var ALLOWED_PRICE_IMPACT_MEDIUM = new sdkCore.Percent(JSBI__default["default"].BigInt(300), BIPS_BASE); // 3%

var ALLOWED_PRICE_IMPACT_HIGH = new sdkCore.Percent(JSBI__default["default"].BigInt(500), BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute

new sdkCore.Percent(JSBI__default["default"].BigInt(1000), BIPS_BASE); // 10%
// for non expert mode disable swaps above this

new sdkCore.Percent(JSBI__default["default"].BigInt(1500), BIPS_BASE); // 15%

new sdkCore.Percent(JSBI__default["default"].BigInt(50), BIPS_BASE);
var ZERO_PERCENT = new sdkCore.Percent('0');
new sdkCore.Percent(JSBI__default["default"].BigInt(200), BIPS_BASE);
var ONE_HUNDRED_PERCENT = new sdkCore.Percent('1');

function computeFiatValuePriceImpact(fiatValueInput, fiatValueOutput) {
  if (!fiatValueOutput || !fiatValueInput) return undefined;
  if (!fiatValueInput.currency.equals(fiatValueOutput.currency)) return undefined;
  if (JSBI__default["default"].equal(fiatValueInput.quotient, JSBI__default["default"].BigInt(0))) return undefined;
  var pct = ONE_HUNDRED_PERCENT.subtract(fiatValueOutput.divide(fiatValueInput));
  return new sdkCore.Percent(pct.numerator, pct.denominator);
}

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function largerPercentValue(a, b) {
  if (a && b) {
    return a.greaterThan(b) ? a : b;
  }

  return a || b;
}
function computeRealizedPriceImpact(trade) {
  var realizedLpFeePercent = computeRealizedLPFeePercent(trade);
  return trade.priceImpact.subtract(realizedLpFeePercent);
}
function getPriceImpactWarning(priceImpact) {
  if (priceImpact.greaterThan(ALLOWED_PRICE_IMPACT_HIGH)) return 'error';
  if (priceImpact.greaterThan(ALLOWED_PRICE_IMPACT_MEDIUM)) return 'warning';
  return;
}
function getFeeAmount(pool) {
  // Pair's (ie V2) FeeAmounts are always equivalent to FeeAmount.MEDIUM: 30 bips.
  if (pool instanceof v2Sdk.Pair) return v3Sdk.FeeAmount.MEDIUM;
  return pool.fee;
} // computes realized lp fee as a percent

function computeRealizedLPFeePercent(trade) {
  var percent;
  percent = ZERO_PERCENT;

  var _iterator = _createForOfIteratorHelper$3(trade.swaps),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var swap = _step.value;

      var _swap$inputAmount$div = swap.inputAmount.divide(trade.inputAmount),
          numerator = _swap$inputAmount$div.numerator,
          denominator = _swap$inputAmount$div.denominator;

      var overallPercent = new sdkCore.Percent(numerator, denominator);
      var routeRealizedLPFeePercent = overallPercent.multiply(ONE_HUNDRED_PERCENT.subtract(swap.route.pools.reduce(function (currentFee, pool) {
        var fee = getFeeAmount(pool);
        return currentFee.multiply(ONE_HUNDRED_PERCENT.subtract(new sdkCore.Fraction(fee, 1000000)));
      }, ONE_HUNDRED_PERCENT)));
      percent = percent.add(routeRealizedLPFeePercent);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return new sdkCore.Percent(percent.numerator, percent.denominator);
}

/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */

function useUSDCPrice(currency) {
  var chainId = currency === null || currency === void 0 ? void 0 : currency.chainId;
  var amountOut = chainId ? STABLECOIN_AMOUNT_OUT[chainId] : undefined;
  var stablecoin = amountOut === null || amountOut === void 0 ? void 0 : amountOut.currency;
  var trade = useRouterTrade(sdkCore.TradeType.EXACT_OUTPUT, amountOut, currency, stablecoin, RouterPreference.PRICE);
  var price = React.useMemo(function () {
    if (!currency || !stablecoin) {
      return undefined;
    } // handle usdc


    if (currency !== null && currency !== void 0 && currency.wrapped.equals(stablecoin)) {
      return new sdkCore.Price(stablecoin, stablecoin, '1', '1');
    }

    if (trade !== null && trade !== void 0 && trade.trade) {
      var _trade$trade$routes$ = trade.trade.routes[0].midPrice,
          numerator = _trade$trade$routes$.numerator,
          denominator = _trade$trade$routes$.denominator;
      return new sdkCore.Price(currency, stablecoin, denominator, numerator);
    }

    return undefined;
  }, [currency, stablecoin, trade.trade]);
  var lastPrice = React.useRef(price);

  if (!price || !lastPrice.current || !price.equalTo(lastPrice.current)) {
    lastPrice.current = price;
  }

  return lastPrice.current;
}
function useUSDCValue(currencyAmount) {
  var price = useUSDCPrice(currencyAmount === null || currencyAmount === void 0 ? void 0 : currencyAmount.currency);
  return React.useMemo(function () {
    if (!price || !currencyAmount) return;

    try {
      return price.quote(currencyAmount);
    } catch (error) {
      return;
    }
  }, [currencyAmount, price]);
}

function usePriceImpact(trade) {
  var _ref = [useUSDCValue(trade === null || trade === void 0 ? void 0 : trade.inputAmount), useUSDCValue(trade === null || trade === void 0 ? void 0 : trade.outputAmount)],
      inputUSDCValue = _ref[0],
      outputUSDCValue = _ref[1];
  return React.useMemo(function () {
    var fiatPriceImpact = computeFiatValuePriceImpact(inputUSDCValue, outputUSDCValue);
    var marketPriceImpact = trade ? computeRealizedPriceImpact(trade) : undefined;

    if (!fiatPriceImpact && !marketPriceImpact) {
      return undefined;
    }

    var percent = largerPercentValue(marketPriceImpact, fiatPriceImpact);
    return percent ? {
      percent: percent,
      warning: getPriceImpactWarning(percent),
      toString: function toString() {
        return toHumanReadablePercent(percent);
      }
    } : undefined;
  }, [inputUSDCValue, outputUSDCValue, trade]);
}
function toHumanReadablePercent(priceImpact) {
  var _priceImpact$multiply;

  var sign = priceImpact.lessThan(0) ? '+' : '';
  var exactFloat = Number(priceImpact.numerator) / Number(priceImpact.denominator) * 100;

  if (exactFloat < 0.005) {
    return '0.00%';
  }

  var number = parseFloat((_priceImpact$multiply = priceImpact.multiply(-1)) === null || _priceImpact$multiply === void 0 ? void 0 : _priceImpact$multiply.toFixed(2));
  return "".concat(sign).concat(number, "%");
}

function useNativeCurrency() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  return React.useMemo(function () {
    return chainId ? nativeOnChain(chainId) : // display mainnet when not connected
    nativeOnChain(exports.SupportedChainId.MAINNET);
  }, [chainId]);
}

/**
 * Returns true if the string value is zero in hex
 * @param hexNumberString
 */
function isZero(hexNumberString) {
  return hexNumberString === '0' || /^0x0*$/.test(hexNumberString);
}

function safeNamehash(name) {
  if (name === undefined) return undefined;

  try {
    return hash.namehash(name);
  } catch (error) {
    console.debug(error);
    return undefined;
  }
}

/**
 * Debounces updates to a value.
 * Non-primitives *must* wrap the value in useMemo, or the value will be updated due to referential inequality.
 */
// modified from https://usehooks.com/useDebounce/

function useDebounce(value, delay) {
  var _useState = React.useState(value),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  React.useEffect(function () {
    // Update debounced value after delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

/**
 * Does a lookup for an ENS name to find its address.
 */

function useENSAddress(ensName) {
  var _resolverAddress$resu;

  var debouncedName = useDebounce(ensName, 200);
  var ensNodeArgument = React.useMemo(function () {
    return [debouncedName === null ? undefined : safeNamehash(debouncedName)];
  }, [debouncedName]);
  var registrarContract = useENSRegistrarContract(false);
  var resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  var resolverAddressResult = (_resolverAddress$resu = resolverAddress.result) === null || _resolverAddress$resu === void 0 ? void 0 : _resolverAddress$resu[0];
  var resolverContract = useENSResolverContract(resolverAddressResult && !isZero(resolverAddressResult) ? resolverAddressResult : undefined, false);
  var addr = useSingleCallResult(resolverContract, 'addr', ensNodeArgument);
  var changed = debouncedName !== ensName;
  return React.useMemo(function () {
    var _addr$result$, _addr$result;

    return {
      address: changed ? null : (_addr$result$ = (_addr$result = addr.result) === null || _addr$result === void 0 ? void 0 : _addr$result[0]) !== null && _addr$result$ !== void 0 ? _addr$result$ : null,
      loading: changed || resolverAddress.loading || addr.loading
    };
  }, [addr.loading, addr.result, changed, resolverAddress.loading]);
}

var CHAIN_DATA_ABI = [{
  inputs: [],
  name: 'latestAnswer',
  outputs: [{
    internalType: 'int256',
    name: '',
    type: 'int256'
  }],
  stateMutability: 'view',
  type: 'function'
}];
/**
 * Returns the price of 1 gas in WEI for the currently selected network using the chainlink fast gas price oracle
 */

function useGasPrice() {
  var _useSingleCallResult$, _useSingleCallResult$2;

  var _useENSAddress = useENSAddress('fast-gas-gwei.data.eth'),
      address = _useENSAddress.address;

  var contract = useContract(address !== null && address !== void 0 ? address : undefined, CHAIN_DATA_ABI, false);
  var resultStr = (_useSingleCallResult$ = useSingleCallResult(contract, 'latestAnswer').result) === null || _useSingleCallResult$ === void 0 ? void 0 : (_useSingleCallResult$2 = _useSingleCallResult$[0]) === null || _useSingleCallResult$2 === void 0 ? void 0 : _useSingleCallResult$2.toString();
  return React.useMemo(function () {
    return typeof resultStr === 'string' ? JSBI__default["default"].BigInt(resultStr) : undefined;
  }, [resultStr]);
}

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var V3_SWAP_DEFAULT_SLIPPAGE = new sdkCore.Percent(50, 10000); // .50%

var ONE_TENTHS_PERCENT = new sdkCore.Percent(10, 10000); // .10%

var DEFAULT_AUTO_SLIPPAGE = ONE_TENTHS_PERCENT;
var GAS_ESTIMATE_BUFFER = new sdkCore.Percent(10, 100); // 10%
// Base costs regardless of how many hops in the route

var V3_SWAP_BASE_GAS_ESTIMATE = 100000;
var V2_SWAP_BASE_GAS_ESTIMATE = 135000; // Extra cost per hop in the route

var V3_SWAP_HOP_GAS_ESTIMATE = 70000;
var V2_SWAP_HOP_GAS_ESTIMATE = 50000;
/**
 * Return a guess of the gas cost used in computing slippage tolerance for a given trade
 * @param trade the trade for which to _guess_ the amount of gas it would cost to execute
 *
 * V3 logic is inspired by:
 * https://github.com/Uniswap/smart-order-router/blob/main/src/routers/alpha-router/gas-models/v3/v3-heuristic-gas-model.ts
 * V2 logic is inspired by:
 * https://github.com/Uniswap/smart-order-router/blob/main/src/routers/alpha-router/gas-models/v2/v2-heuristic-gas-model.ts
 */

function guesstimateGas(trade) {
  if (!!trade) {
    var gas = 0;

    var _iterator = _createForOfIteratorHelper$2(trade.swaps),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var route = _step.value.route;

        if (route.protocol === routerSdk.Protocol.V2) {
          gas += V2_SWAP_BASE_GAS_ESTIMATE + route.pools.length * V2_SWAP_HOP_GAS_ESTIMATE;
        } else if (route.protocol === routerSdk.Protocol.V3) {
          // V3 gas costs scale on initialized ticks being crossed, but we don't have that data here.
          // We bake in some tick crossings into the base 100k cost.
          gas += V3_SWAP_BASE_GAS_ESTIMATE + route.pools.length * V3_SWAP_HOP_GAS_ESTIMATE;
        } else if (route.protocol === routerSdk.Protocol.MIXED) {
          var sections = routerSdk.partitionMixedRouteByProtocol(route);
          gas += sections.reduce(function (gas, section) {
            if (section.every(function (pool) {
              return pool instanceof v3Sdk.Pool;
            })) {
              return gas + V3_SWAP_BASE_GAS_ESTIMATE + section.length * V3_SWAP_HOP_GAS_ESTIMATE;
            } else if (section.every(function (pool) {
              return pool instanceof v2Sdk.Pair;
            })) {
              return gas + V2_SWAP_BASE_GAS_ESTIMATE + (section.length - 1) * V2_SWAP_HOP_GAS_ESTIMATE;
            } else {
              console.warn('Invalid section');
              return gas;
            }
          }, 0);
        } else {
          // fallback general gas estimation
          gas += V3_SWAP_BASE_GAS_ESTIMATE + route.pools.length * V3_SWAP_HOP_GAS_ESTIMATE;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return gas;
  }

  return undefined;
}

var MIN_AUTO_SLIPPAGE_TOLERANCE = new sdkCore.Percent(5, 1000); // 0.5%

var MAX_AUTO_SLIPPAGE_TOLERANCE = new sdkCore.Percent(25, 100); // 25%

/**
 * Returns slippage tolerance based on values from current trade, gas estimates from api, and active network.
 */

function useAutoSlippageTolerance() {
  var _ref2;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      trade = _ref.trade,
      gasUseEstimateUSD = _ref.gasUseEstimateUSD;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var onL2 = chainId && L2_CHAIN_IDS.includes(chainId);
  var outputDollarValue = useUSDCValue(trade === null || trade === void 0 ? void 0 : trade.outputAmount);
  var nativeGasPrice = useGasPrice();
  var gasEstimate = guesstimateGas(trade);
  var nativeCurrency = useNativeCurrency();
  var nativeCurrencyPrice = useUSDCPrice((_ref2 = trade && nativeCurrency) !== null && _ref2 !== void 0 ? _ref2 : undefined);
  return React.useMemo(function () {
    if (!trade || onL2) return DEFAULT_AUTO_SLIPPAGE;
    var nativeGasCost = nativeGasPrice && typeof gasEstimate === 'number' ? JSBI__default["default"].multiply(nativeGasPrice, JSBI__default["default"].BigInt(gasEstimate)) : undefined;
    var dollarGasCost = nativeCurrency && nativeGasCost && nativeCurrencyPrice ? nativeCurrencyPrice.quote(sdkCore.CurrencyAmount.fromRawAmount(nativeCurrency, nativeGasCost)) : undefined; // if valid estimate from api and using api trade, use gas estimate from api
    // NOTE - dont use gas estimate for L2s yet - need to verify accuracy
    // if not, use local heuristic

    var dollarCostToUse = chainId && SUPPORTED_GAS_ESTIMATE_CHAIN_IDS.includes(chainId) && gasUseEstimateUSD ? gasUseEstimateUSD.multiply(GAS_ESTIMATE_BUFFER) : dollarGasCost === null || dollarGasCost === void 0 ? void 0 : dollarGasCost.multiply(GAS_ESTIMATE_BUFFER);

    if (outputDollarValue && dollarCostToUse) {
      // the rationale is that a user will not want their trade to fail for a loss due to slippage that is less than
      // the cost of the gas of the failed transaction
      var fraction = dollarCostToUse.asFraction.divide(outputDollarValue.asFraction);
      var result = new sdkCore.Percent(fraction.numerator, fraction.denominator);

      if (result.greaterThan(MAX_AUTO_SLIPPAGE_TOLERANCE)) {
        return MAX_AUTO_SLIPPAGE_TOLERANCE;
      }

      if (result.lessThan(MIN_AUTO_SLIPPAGE_TOLERANCE)) {
        return MIN_AUTO_SLIPPAGE_TOLERANCE;
      }

      return result;
    }

    return V3_SWAP_DEFAULT_SLIPPAGE;
  }, [trade, onL2, nativeGasPrice, gasEstimate, nativeCurrency, nativeCurrencyPrice, chainId, outputDollarValue, gasUseEstimateUSD]);
}

/* eslint-disable @typescript-eslint/ban-types */
/**
 * Creates a derived atom whose value is the picked object property.
 * By default, the setter acts as a primitive atom's, changing the original atom.
 * A custom setter may also be passed, which uses an Immer Draft so that it may be mutated directly.
 */

function pickAtom(anAtom, key) {
  var setter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (draft, update) {
    return update;
  };
  return jotai.atom(function (get) {
    return get(anAtom)[key];
  }, function (get, set, update) {
    return set(immer.withImmer(anAtom), function (value) {
      var derived = setter(value[key], update);
      value[key] = derived;
    });
  });
}

var initialSettings = {
  slippage: {
    auto: true,
    max: undefined
  },
  transactionTtl: undefined
};
var controlledAtom = jotai.atom(undefined);
var stateAtom = utils.atomWithReset(initialSettings);
var settingsAtom = jotai.atom(function (get) {
  var controlled = get(controlledAtom);
  return controlled ? controlled : get(stateAtom);
}, stateAtom.write);
var slippageAtom = pickAtom(settingsAtom, 'slippage');
var transactionTtlAtom = pickAtom(settingsAtom, 'transactionTtl');

function toPercent(maxSlippage) {
  if (!maxSlippage) return undefined;
  if (Number.isNaN(maxSlippage)) return undefined;
  var numerator = Math.floor(Number(maxSlippage) * 100);
  return new sdkCore.Percent(numerator, 10000);
}
var DEFAULT_SLIPPAGE = {
  auto: true,
  allowed: DEFAULT_AUTO_SLIPPAGE
};
/** Returns the allowed slippage, and whether it is auto-slippage. */

function useSlippage(trade) {
  var slippage = utils.useAtomValue(slippageAtom);
  var autoSlippage = useAutoSlippageTolerance(slippage.auto ? trade : undefined);
  var maxSlippage = React.useMemo(function () {
    return toPercent(slippage.max);
  }, [slippage.max]);
  return React.useMemo(function () {
    var auto = slippage.auto || !slippage.max;
    var allowed = slippage.auto ? autoSlippage : maxSlippage !== null && maxSlippage !== void 0 ? maxSlippage : autoSlippage;
    var warning = auto ? undefined : getSlippageWarning(allowed);

    if (auto && allowed === DEFAULT_AUTO_SLIPPAGE) {
      return DEFAULT_SLIPPAGE;
    }

    return {
      auto: auto,
      allowed: allowed,
      warning: warning
    };
  }, [autoSlippage, maxSlippage, slippage]);
}
var MAX_VALID_SLIPPAGE = new sdkCore.Percent(1, 2);
var MIN_HIGH_SLIPPAGE = new sdkCore.Percent(1, 100);
function getSlippageWarning(slippage) {
  if (slippage !== null && slippage !== void 0 && slippage.greaterThan(MAX_VALID_SLIPPAGE)) return 'error';
  if (slippage !== null && slippage !== void 0 && slippage.greaterThan(MIN_HIGH_SLIPPAGE)) return 'warning';
  return;
}

var flagsAtom = jotai.atom({});
function useInitialFlags(_ref) {
  var brandedFooter = _ref.brandedFooter,
      permit2 = _ref.permit2;
  // Only grab the initial flags on mount - ignore exhaustive-deps.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(function () {
    return [[flagsAtom, {
      brandedFooter: brandedFooter,
      permit2: permit2
    }]];
  }, []);
}
function useBrandedFooter() {
  var _useAtomValue$branded;

  return (_useAtomValue$branded = utils.useAtomValue(flagsAtom).brandedFooter) !== null && _useAtomValue$branded !== void 0 ? _useAtomValue$branded : true;
}
function usePermit2() {
  var _useAtomValue$permit;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var permit2 = (_useAtomValue$permit = utils.useAtomValue(flagsAtom).permit2) !== null && _useAtomValue$permit !== void 0 ? _useAtomValue$permit : false;

  try {
    // Detect if the Universal Router is not yet deployed to chainId.
    // This is necessary so that we can fallback correctly on chains without a Universal Router deployment.
    // It will be removed once Universal Router is deployed on all supported chains.
    chainId && universalRouterSdk.UNIVERSAL_ROUTER_ADDRESS(chainId);
    return permit2;
  } catch (_unused) {
    return false;
  }
}

// https://eips.ethereum.org/EIPS/eip-1193#provider-errors
var ErrorCode;

(function (ErrorCode) {
  ErrorCode[ErrorCode["USER_REJECTED_REQUEST"] = 4001] = "USER_REJECTED_REQUEST";
  ErrorCode[ErrorCode["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ErrorCode[ErrorCode["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ErrorCode[ErrorCode["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
})(ErrorCode || (ErrorCode = {}));

function useIsArgentWallet() {
  var _call$result;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var argentWalletDetector = useArgentWalletDetectorContract();
  var inputs = React.useMemo(function () {
    return [account !== null && account !== void 0 ? account : undefined];
  }, [account]);
  var call = useSingleCallResult(argentWalletDetector, 'isArgentWallet', inputs, reduxMulticall.NEVER_RELOAD);
  return Boolean(call === null || call === void 0 ? void 0 : (_call$result = call.result) === null || _call$result === void 0 ? void 0 : _call$result[0]);
}

var _$1, _3;

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var PermitType; // 20 minutes to submit after signing

(function (PermitType) {
  PermitType[PermitType["AMOUNT"] = 1] = "AMOUNT";
  PermitType[PermitType["ALLOWED"] = 2] = "ALLOWED";
})(PermitType || (PermitType = {}));

var PERMIT_VALIDITY_BUFFER = 20 * 60;
// todo: read this information from extensions on token lists or elsewhere (permit registry?)
var PERMITTABLE_TOKENS = {
  1: (_$1 = {}, _defineProperty__default["default"](_$1, USDC_MAINNET.address, {
    type: PermitType.AMOUNT,
    name: 'USD Coin',
    version: '2'
  }), _defineProperty__default["default"](_$1, DAI.address, {
    type: PermitType.ALLOWED,
    name: 'Dai Stablecoin',
    version: '1'
  }), _defineProperty__default["default"](_$1, UNI[1].address, {
    type: PermitType.AMOUNT,
    name: 'Uniswap'
  }), _$1),
  4: _defineProperty__default["default"]({
    '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735': {
      type: PermitType.ALLOWED,
      name: 'Dai Stablecoin',
      version: '1'
    }
  }, UNI[4].address, {
    type: PermitType.AMOUNT,
    name: 'Uniswap'
  }),
  3: (_3 = {}, _defineProperty__default["default"](_3, UNI[3].address, {
    type: PermitType.AMOUNT,
    name: 'Uniswap'
  }), _defineProperty__default["default"](_3, '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', {
    type: PermitType.AMOUNT,
    name: 'USD Coin',
    version: '2'
  }), _3),
  5: _defineProperty__default["default"]({}, UNI[5].address, {
    type: PermitType.AMOUNT,
    name: 'Uniswap'
  }),
  42: _defineProperty__default["default"]({}, UNI[42].address, {
    type: PermitType.AMOUNT,
    name: 'Uniswap'
  })
};
var PermitState;

(function (PermitState) {
  PermitState[PermitState["NOT_APPLICABLE"] = 0] = "NOT_APPLICABLE";
  PermitState[PermitState["LOADING"] = 1] = "LOADING";
  PermitState[PermitState["NOT_SIGNED"] = 2] = "NOT_SIGNED";
  PermitState[PermitState["SIGNED"] = 3] = "SIGNED";
})(PermitState || (PermitState = {}));

var EIP712_DOMAIN_TYPE = [{
  name: 'name',
  type: 'string'
}, {
  name: 'version',
  type: 'string'
}, {
  name: 'chainId',
  type: 'uint256'
}, {
  name: 'verifyingContract',
  type: 'address'
}];
var EIP712_DOMAIN_TYPE_NO_VERSION = [{
  name: 'name',
  type: 'string'
}, {
  name: 'chainId',
  type: 'uint256'
}, {
  name: 'verifyingContract',
  type: 'address'
}];
var EIP2612_TYPE = [{
  name: 'owner',
  type: 'address'
}, {
  name: 'spender',
  type: 'address'
}, {
  name: 'value',
  type: 'uint256'
}, {
  name: 'nonce',
  type: 'uint256'
}, {
  name: 'deadline',
  type: 'uint256'
}];
var PERMIT_ALLOWED_TYPE = [{
  name: 'holder',
  type: 'address'
}, {
  name: 'spender',
  type: 'address'
}, {
  name: 'nonce',
  type: 'uint256'
}, {
  name: 'expiry',
  type: 'uint256'
}, {
  name: 'allowed',
  type: 'bool'
}];
function usePermit(currencyAmount, spender, transactionDeadline, overridePermitInfo) {
  var _currencyAmount$curre, _PERMITTABLE_TOKENS$c;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var tokenAddress = currencyAmount !== null && currencyAmount !== void 0 && (_currencyAmount$curre = currencyAmount.currency) !== null && _currencyAmount$curre !== void 0 && _currencyAmount$curre.isToken ? currencyAmount.currency.address : undefined;
  var eip2612Contract = useEIP2612Contract(tokenAddress);
  var isArgentWallet = useIsArgentWallet();
  var nonceInputs = React.useMemo(function () {
    return [account !== null && account !== void 0 ? account : undefined];
  }, [account]);
  var tokenNonceState = useSingleCallResult(eip2612Contract, 'nonces', nonceInputs);
  var permitInfo = overridePermitInfo !== null && overridePermitInfo !== void 0 ? overridePermitInfo : chainId && tokenAddress ? (_PERMITTABLE_TOKENS$c = PERMITTABLE_TOKENS[chainId]) === null || _PERMITTABLE_TOKENS$c === void 0 ? void 0 : _PERMITTABLE_TOKENS$c[tokenAddress] : undefined;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      signatureData = _useState2[0],
      setSignatureData = _useState2[1];

  return React.useMemo(function () {
    var _tokenNonceState$resu, _tokenNonceState$resu2;

    if (isArgentWallet || !currencyAmount || !eip2612Contract || !account || !chainId || !transactionDeadline || !provider || !tokenNonceState.valid || !tokenAddress || !spender || !permitInfo) {
      return {
        state: PermitState.NOT_APPLICABLE
      };
    }

    var nonceNumber = (_tokenNonceState$resu = tokenNonceState.result) === null || _tokenNonceState$resu === void 0 ? void 0 : (_tokenNonceState$resu2 = _tokenNonceState$resu[0]) === null || _tokenNonceState$resu2 === void 0 ? void 0 : _tokenNonceState$resu2.toNumber();

    if (tokenNonceState.loading || typeof nonceNumber !== 'number') {
      return {
        state: PermitState.LOADING
      };
    }

    var isSignatureDataValid = signatureData && signatureData.owner === account && signatureData.deadline >= transactionDeadline.toNumber() && signatureData.tokenAddress === tokenAddress && signatureData.nonce === nonceNumber && signatureData.spender === spender && ('allowed' in signatureData || JSBI__default["default"].greaterThanOrEqual(JSBI__default["default"].BigInt(signatureData.amount), currencyAmount.quotient));
    return {
      state: isSignatureDataValid ? PermitState.SIGNED : PermitState.NOT_SIGNED,
      signatureData: isSignatureDataValid ? signatureData : undefined,
      sign: function () {
        var _sign = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
          var allowed, signatureDeadline, value, message, domain, data;
          return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  allowed = permitInfo.type === PermitType.ALLOWED;
                  signatureDeadline = transactionDeadline.toNumber() + PERMIT_VALIDITY_BUFFER;
                  value = currencyAmount.quotient.toString();
                  message = allowed ? {
                    holder: account,
                    spender: spender,
                    allowed: allowed,
                    nonce: nonceNumber,
                    expiry: signatureDeadline
                  } : {
                    owner: account,
                    spender: spender,
                    value: value,
                    nonce: nonceNumber,
                    deadline: signatureDeadline
                  };
                  domain = permitInfo.version ? {
                    name: permitInfo.name,
                    version: permitInfo.version,
                    verifyingContract: tokenAddress,
                    chainId: chainId
                  } : {
                    name: permitInfo.name,
                    verifyingContract: tokenAddress,
                    chainId: chainId
                  };
                  data = JSON.stringify({
                    types: {
                      EIP712Domain: permitInfo.version ? EIP712_DOMAIN_TYPE : EIP712_DOMAIN_TYPE_NO_VERSION,
                      Permit: allowed ? PERMIT_ALLOWED_TYPE : EIP2612_TYPE
                    },
                    domain: domain,
                    primaryType: 'Permit',
                    message: message
                  });
                  return _context.abrupt("return", provider.send('eth_signTypedData_v4', [account, data]).then(bytes.splitSignature).then(function (signature) {
                    setSignatureData(_objectSpread$b(_objectSpread$b({
                      v: signature.v,
                      r: signature.r,
                      s: signature.s,
                      deadline: signatureDeadline
                    }, allowed ? {
                      allowed: allowed
                    } : {
                      amount: value
                    }), {}, {
                      nonce: nonceNumber,
                      chainId: chainId,
                      owner: account,
                      spender: spender,
                      tokenAddress: tokenAddress,
                      permitType: permitInfo.type
                    }));
                  }));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function sign() {
          return _sign.apply(this, arguments);
        }

        return sign;
      }()
    };
  }, [currencyAmount, eip2612Contract, account, chainId, isArgentWallet, transactionDeadline, provider, tokenNonceState.loading, tokenNonceState.valid, tokenNonceState.result, tokenAddress, spender, permitInfo, signatureData]);
}

function useCurrentBlockTimestamp() {
  var _useSingleCallResult, _useSingleCallResult$, _useSingleCallResult$2;

  var multicall = useInterfaceMulticall();
  var resultStr = (_useSingleCallResult = useSingleCallResult(multicall, 'getCurrentBlockTimestamp')) === null || _useSingleCallResult === void 0 ? void 0 : (_useSingleCallResult$ = _useSingleCallResult.result) === null || _useSingleCallResult$ === void 0 ? void 0 : (_useSingleCallResult$2 = _useSingleCallResult$[0]) === null || _useSingleCallResult$2 === void 0 ? void 0 : _useSingleCallResult$2.toString();
  return React.useMemo(function () {
    return typeof resultStr === 'string' ? bignumber.BigNumber.from(resultStr) : undefined;
  }, [resultStr]);
}

/** Returns the default transaction TTL for the chain, in minutes. */

function useDefaultTransactionTtl() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  if (chainId && L2_CHAIN_IDS.includes(chainId)) return L2_DEADLINE_FROM_NOW / 60;
  return DEFAULT_DEADLINE_FROM_NOW / 60;
}
/** Returns the user-inputted transaction TTL, in minutes. */

function useTransactionTtl() {
  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onTransactionDeadlineChange = _useAtomValue.onTransactionDeadlineChange;

  var _useAtom = jotai.useAtom(transactionTtlAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      ttl = _useAtom2[0],
      setTtlBase = _useAtom2[1];

  var setTtl = React.useCallback(function (ttl) {
    onTransactionDeadlineChange === null || onTransactionDeadlineChange === void 0 ? void 0 : onTransactionDeadlineChange(ttl);
    setTtlBase(ttl);
  }, [onTransactionDeadlineChange, setTtlBase]);
  return [ttl, setTtl];
} // combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction

function useTransactionDeadline() {
  var _useTransactionTtl = useTransactionTtl(),
      _useTransactionTtl2 = _slicedToArray__default["default"](_useTransactionTtl, 1),
      ttl = _useTransactionTtl2[0];

  var defaultTtl = useDefaultTransactionTtl();
  var blockTimestamp = useCurrentBlockTimestamp();
  return React.useMemo(function () {
    if (!blockTimestamp) return undefined;
    return blockTimestamp.add((ttl || defaultTtl
    /* in seconds */
    ) * 60);
  }, [blockTimestamp, defaultTtl, ttl]);
}

var ApprovalState;

(function (ApprovalState) {
  ApprovalState["UNKNOWN"] = "UNKNOWN";
  ApprovalState["NOT_APPROVED"] = "NOT_APPROVED";
  ApprovalState["PENDING"] = "PENDING";
  ApprovalState["APPROVED"] = "APPROVED";
})(ApprovalState || (ApprovalState = {}));

function useApprovalStateForSpender(amountToApprove, spender, useIsPendingApproval) {
  var _amountToApprove$curr;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var token = amountToApprove !== null && amountToApprove !== void 0 && (_amountToApprove$curr = amountToApprove.currency) !== null && _amountToApprove$curr !== void 0 && _amountToApprove$curr.isToken ? amountToApprove.currency : undefined;

  var _useTokenAllowance = useTokenAllowance(token, account !== null && account !== void 0 ? account : undefined, spender),
      tokenAllowance = _useTokenAllowance.tokenAllowance;

  var pendingApproval = useIsPendingApproval(token, spender);
  return React.useMemo(function () {
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN;
    if (amountToApprove.currency.isNative) return ApprovalState.APPROVED; // we might not have enough data to know whether or not we need to approve

    if (!tokenAllowance) return ApprovalState.UNKNOWN; // amountToApprove will be defined if tokenAllowance is

    return tokenAllowance.lessThan(amountToApprove) ? pendingApproval ? ApprovalState.PENDING : ApprovalState.NOT_APPROVED : ApprovalState.APPROVED;
  }, [amountToApprove, pendingApproval, spender, tokenAllowance]);
}
function useApproval(amountToApprove, spender, useIsPendingApproval) {
  var _amountToApprove$curr2;

  var _useWeb3React2 = core.useWeb3React(),
      chainId = _useWeb3React2.chainId;

  var token = amountToApprove !== null && amountToApprove !== void 0 && (_amountToApprove$curr2 = amountToApprove.currency) !== null && _amountToApprove$curr2 !== void 0 && _amountToApprove$curr2.isToken ? amountToApprove.currency : undefined; // check the current approval status

  var approvalState = useApprovalStateForSpender(amountToApprove, spender, useIsPendingApproval);
  var tokenContract = useTokenContract(token === null || token === void 0 ? void 0 : token.address);
  var approve = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var logFailure, useExact, estimatedGas;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logFailure = function _logFailure(error) {
              console.warn("".concat((token === null || token === void 0 ? void 0 : token.symbol) || 'Token', " approval failed:"), error);
              return;
            };

            if (!(approvalState !== ApprovalState.NOT_APPROVED)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", logFailure('approve was called unnecessarily'));

          case 5:
            if (chainId) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", logFailure('no chainId'));

          case 9:
            if (token) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", logFailure('no token'));

          case 13:
            if (tokenContract) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", logFailure('tokenContract is null'));

          case 17:
            if (amountToApprove) {
              _context.next = 21;
              break;
            }

            return _context.abrupt("return", logFailure('missing amount to approve'));

          case 21:
            if (spender) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", logFailure('no spender'));

          case 23:
            useExact = false;
            _context.next = 26;
            return tokenContract.estimateGas.approve(spender, constants.MaxUint256).catch(function () {
              // general fallback for tokens which restrict approval amounts
              useExact = true;
              return tokenContract.estimateGas.approve(spender, amountToApprove.quotient.toString());
            });

          case 26:
            estimatedGas = _context.sent;
            return _context.abrupt("return", tokenContract.approve(spender, useExact ? amountToApprove.quotient.toString() : constants.MaxUint256, {
              gasLimit: calculateGasMargin(estimatedGas)
            }).then(function (response) {
              return {
                response: response,
                tokenAddress: token.address,
                spenderAddress: spender
              };
            }).catch(function (error) {
              logFailure(error);
              throw error;
            }));

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [approvalState, token, tokenContract, amountToApprove, spender, chainId]);
  return [approvalState, approve];
}

var SwapApprovalState;

(function (SwapApprovalState) {
  SwapApprovalState[SwapApprovalState["REQUIRES_APPROVAL"] = 0] = "REQUIRES_APPROVAL";
  SwapApprovalState[SwapApprovalState["PENDING_APPROVAL"] = 1] = "PENDING_APPROVAL";
  SwapApprovalState[SwapApprovalState["REQUIRES_SIGNATURE"] = 2] = "REQUIRES_SIGNATURE";
  SwapApprovalState[SwapApprovalState["PENDING_SIGNATURE"] = 3] = "PENDING_SIGNATURE";
  SwapApprovalState[SwapApprovalState["APPROVED"] = 4] = "APPROVED";
})(SwapApprovalState || (SwapApprovalState = {}));

/**
 * Returns all relevant statuses and callback functions for approvals.
 * Considers both standard approval and ERC20 permit.
 */
function useSwapApproval(amount) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var deadline = useTransactionDeadline();
  var spender = chainId ? SWAP_ROUTER_ADDRESSES[chainId] : undefined; // Check EIP-20 approval.

  var _useApproval = useApproval(amount, spender, useIsPendingApproval),
      _useApproval2 = _slicedToArray__default["default"](_useApproval, 2),
      approval = _useApproval2[0],
      approve = _useApproval2[1]; // Check EIP-2162 approval.


  var _usePermit = usePermit(amount, spender, deadline, null),
      permitState = _usePermit.state,
      signatureData = _usePermit.signatureData,
      sign = _usePermit.sign; // If permit is supported, sign a permit; if not, submit an approval.


  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSwapApprove = _useAtomValue.onSwapApprove;

  var approveOrSign = React.useMemo(function () {
    if (approval !== ApprovalState.NOT_APPROVED && permitState !== PermitState.NOT_SIGNED) return;
    return /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(permitState === PermitState.NOT_SIGNED && sign)) {
                _context.next = 14;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return sign();

            case 5:
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);

              if (!((_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.code) !== ErrorCode.USER_REJECTED_REQUEST)) {
                _context.next = 12;
                break;
              }

              _context.next = 12;
              return approve();

            case 12:
              _context.next = 16;
              break;

            case 14:
              _context.next = 16;
              return approve();

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](0);
              return _context.abrupt("return");

            case 21:
              onSwapApprove === null || onSwapApprove === void 0 ? void 0 : onSwapApprove();

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18], [2, 7]]);
    }));
  }, [approval, approve, onSwapApprove, permitState, sign]);
  var state = React.useMemo(function () {
    if (approval === ApprovalState.PENDING) {
      return SwapApprovalState.PENDING_APPROVAL;
    } else if (permitState === PermitState.LOADING) {
      return SwapApprovalState.PENDING_SIGNATURE;
    } else if (approval !== ApprovalState.NOT_APPROVED || permitState === PermitState.SIGNED) {
      return SwapApprovalState.APPROVED;
    } else if (sign) {
      return SwapApprovalState.REQUIRES_SIGNATURE;
    } else {
      return SwapApprovalState.REQUIRES_APPROVAL;
    }
  }, [approval, permitState, sign]);
  return {
    state: state,
    signatureData: signatureData,
    approve: approveOrSign
  };
}

function useWrapType() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var _useAtomValue = utils.useAtomValue(swapAtom),
      inputCurrency = _useAtomValue[exports.Field.INPUT],
      outputCurrency = _useAtomValue[exports.Field.OUTPUT];

  return React.useMemo(function () {
    if (chainId && inputCurrency && outputCurrency) {
      var _WRAPPED_NATIVE_CURRE, _WRAPPED_NATIVE_CURRE2;

      if (inputCurrency.isNative && (_WRAPPED_NATIVE_CURRE = WRAPPED_NATIVE_CURRENCY[chainId]) !== null && _WRAPPED_NATIVE_CURRE !== void 0 && _WRAPPED_NATIVE_CURRE.equals(outputCurrency)) {
        return exports.TransactionType.WRAP;
      }

      if (outputCurrency.isNative && (_WRAPPED_NATIVE_CURRE2 = WRAPPED_NATIVE_CURRENCY[chainId]) !== null && _WRAPPED_NATIVE_CURRE2 !== void 0 && _WRAPPED_NATIVE_CURRE2.equals(inputCurrency)) {
        return exports.TransactionType.UNWRAP;
      }
    }

    return undefined;
  }, [chainId, inputCurrency, outputCurrency]);
}
function useIsWrap() {
  return useWrapType() !== undefined;
}
function useWrapCallback() {
  var wrappedNativeCurrencyContract = useWETHContract();

  var _useAtomValue2 = utils.useAtomValue(swapAtom),
      amount = _useAtomValue2.amount,
      inputCurrency = _useAtomValue2[exports.Field.INPUT];

  var wrapType = useWrapType();
  var parsedAmountIn = React.useMemo(function () {
    return tryParseCurrencyAmount(amount, inputCurrency !== null && inputCurrency !== void 0 ? inputCurrency : undefined);
  }, [inputCurrency, amount]);
  var callback = React.useMemo(function () {
    return /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (parsedAmountIn) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.t0 = wrapType;
              _context.next = _context.t0 === exports.TransactionType.WRAP ? 5 : _context.t0 === exports.TransactionType.UNWRAP ? 6 : _context.t0 === undefined ? 7 : 8;
              break;

            case 5:
              return _context.abrupt("return", wrappedNativeCurrencyContract === null || wrappedNativeCurrencyContract === void 0 ? void 0 : wrappedNativeCurrencyContract.deposit({
                value: "0x".concat(parsedAmountIn.quotient.toString(16))
              }));

            case 6:
              return _context.abrupt("return", wrappedNativeCurrencyContract === null || wrappedNativeCurrencyContract === void 0 ? void 0 : wrappedNativeCurrencyContract.withdraw("0x".concat(parsedAmountIn.quotient.toString(16))));

            case 7:
              return _context.abrupt("return", undefined);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }, [parsedAmountIn, wrappedNativeCurrencyContract, wrapType]);
  return React.useMemo(function () {
    return {
      callback: callback,
      type: wrapType
    };
  }, [callback, wrapType]);
}

var _DEFAULT_SWAP_INFO;
var ChainError;

(function (ChainError) {
  ChainError[ChainError["UNCONNECTED_CHAIN"] = 0] = "UNCONNECTED_CHAIN";
  ChainError[ChainError["ACTIVATING_CHAIN"] = 1] = "ACTIVATING_CHAIN";
  ChainError[ChainError["UNSUPPORTED_CHAIN"] = 2] = "UNSUPPORTED_CHAIN";
  ChainError[ChainError["MISMATCHED_TOKEN_CHAINS"] = 3] = "MISMATCHED_TOKEN_CHAINS";
  ChainError[ChainError["MISMATCHED_CHAINS"] = 4] = "MISMATCHED_CHAINS";
})(ChainError || (ChainError = {}));

/** Returns the best computed swap (trade/wrap). */
function useComputeSwapInfo(routerUrl) {
  var _trade$trade3, _trade$trade4;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      isActivating = _useWeb3React.isActivating,
      isActive = _useWeb3React.isActive;

  var isSupported = useOnSupportedNetwork();

  var _useAtomValue = utils.useAtomValue(swapAtom),
      type = _useAtomValue.type,
      amount = _useAtomValue.amount,
      currencyIn = _useAtomValue[exports.Field.INPUT],
      currencyOut = _useAtomValue[exports.Field.OUTPUT];

  var isWrap = useIsWrap();
  var chainIdIn = currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.chainId;
  var chainIdOut = currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.chainId;
  var tokenChainId = chainIdIn || chainIdOut;
  var error = React.useMemo(function () {
    if (!isActive) return isActivating ? ChainError.ACTIVATING_CHAIN : ChainError.UNCONNECTED_CHAIN;
    if (!isSupported) return ChainError.UNSUPPORTED_CHAIN;
    if (chainIdIn && chainIdOut && chainIdIn !== chainIdOut) return ChainError.MISMATCHED_TOKEN_CHAINS;
    if (chainId && tokenChainId && chainId !== tokenChainId) return ChainError.MISMATCHED_CHAINS;
    return;
  }, [chainId, chainIdIn, chainIdOut, isActivating, isActive, isSupported, tokenChainId]);
  var parsedAmount = React.useMemo(function () {
    return tryParseCurrencyAmount(amount, isExactInput(type) ? currencyIn : currencyOut);
  }, [amount, currencyIn, currencyOut, type]);
  var trade = useRouterTrade(type, parsedAmount, currencyIn, currencyOut, isWrap || error ? RouterPreference.SKIP : RouterPreference.TRADE, routerUrl); // Use the parsed amount when applicable (exact amounts and wraps) immediately responsive UI.

  var _useMemo = React.useMemo(function () {
    var _trade$trade, _trade$trade2;

    if (isWrap) {
      return isExactInput(type) ? [parsedAmount, tryParseCurrencyAmount(amount, currencyOut)] : [tryParseCurrencyAmount(amount, currencyIn), parsedAmount];
    }

    return isExactInput(type) ? [parsedAmount, (_trade$trade = trade.trade) === null || _trade$trade === void 0 ? void 0 : _trade$trade.outputAmount] : [(_trade$trade2 = trade.trade) === null || _trade$trade2 === void 0 ? void 0 : _trade$trade2.inputAmount, parsedAmount];
  }, [amount, currencyIn, currencyOut, isWrap, parsedAmount, (_trade$trade3 = trade.trade) === null || _trade$trade3 === void 0 ? void 0 : _trade$trade3.inputAmount, (_trade$trade4 = trade.trade) === null || _trade$trade4 === void 0 ? void 0 : _trade$trade4.outputAmount, type]),
      _useMemo2 = _slicedToArray__default["default"](_useMemo, 2),
      amountIn = _useMemo2[0],
      amountOut = _useMemo2[1];

  var currencies = React.useMemo(function () {
    return [currencyIn, currencyOut];
  }, [currencyIn, currencyOut]);

  var _useCurrencyBalances = useCurrencyBalances(account, currencies),
      _useCurrencyBalances2 = _slicedToArray__default["default"](_useCurrencyBalances, 2),
      balanceIn = _useCurrencyBalances2[0],
      balanceOut = _useCurrencyBalances2[1];

  var _ref = [useUSDCValue(amountIn), useUSDCValue(amountOut)],
      usdcIn = _ref[0],
      usdcOut = _ref[1]; // Initialize USDC prices for otherCurrency so that it is available sooner after the trade loads.

  useUSDCPrice(isExactInput(type) ? currencyOut : currencyIn); // Compute slippage and impact off of the trade so that it refreshes with the trade.
  // Wait until the trade is valid to avoid displaying incorrect intermediate values.

  var slippage = useSlippage(trade);
  var impact = usePriceImpact(trade.trade);
  var permit2Enabled = usePermit2();
  var maximumAmountIn = React.useMemo(function () {
    var _trade$trade5;

    var maximumAmountIn = (_trade$trade5 = trade.trade) === null || _trade$trade5 === void 0 ? void 0 : _trade$trade5.maximumAmountIn(slippage.allowed);
    return maximumAmountIn !== null && maximumAmountIn !== void 0 && maximumAmountIn.currency.isToken ? maximumAmountIn : undefined;
  }, [slippage.allowed, trade.trade]);
  var approval = useSwapApproval(permit2Enabled ? undefined : maximumAmountIn);
  var allowance = usePermit2Allowance(permit2Enabled ? maximumAmountIn : undefined, permit2Enabled && chainId ? universalRouterSdk.UNIVERSAL_ROUTER_ADDRESS(chainId) : undefined);
  return React.useMemo(function () {
    var _ref2;

    return _ref2 = {}, _defineProperty__default["default"](_ref2, exports.Field.INPUT, {
      currency: currencyIn,
      amount: amountIn,
      balance: balanceIn,
      usdc: usdcIn
    }), _defineProperty__default["default"](_ref2, exports.Field.OUTPUT, {
      currency: currencyOut,
      amount: amountOut,
      balance: balanceOut,
      usdc: usdcOut
    }), _defineProperty__default["default"](_ref2, "error", error), _defineProperty__default["default"](_ref2, "trade", trade), _defineProperty__default["default"](_ref2, "approval", approval), _defineProperty__default["default"](_ref2, "allowance", allowance), _defineProperty__default["default"](_ref2, "slippage", slippage), _defineProperty__default["default"](_ref2, "impact", impact), _ref2;
  }, [allowance, amountIn, amountOut, approval, balanceIn, balanceOut, currencyIn, currencyOut, error, impact, slippage, trade, usdcIn, usdcOut]);
}

var DEFAULT_SWAP_INFO = (_DEFAULT_SWAP_INFO = {}, _defineProperty__default["default"](_DEFAULT_SWAP_INFO, exports.Field.INPUT, {}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, exports.Field.OUTPUT, {}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "error", ChainError.UNCONNECTED_CHAIN), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "trade", {
  state: TradeState.INVALID,
  trade: undefined
}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "approval", {
  state: SwapApprovalState.APPROVED
}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "allowance", {
  state: AllowanceState.LOADING
}), _defineProperty__default["default"](_DEFAULT_SWAP_INFO, "slippage", DEFAULT_SLIPPAGE), _DEFAULT_SWAP_INFO);
var SwapInfoContext = /*#__PURE__*/React.createContext(DEFAULT_SWAP_INFO);
function SwapInfoProvider(_ref3) {
  var children = _ref3.children,
      routerUrl = _ref3.routerUrl;
  var swapInfo = useComputeSwapInfo(routerUrl);
  var swap = utils.useAtomValue(swapAtom);
  var lastQuotedSwap = React.useRef(null);

  var _useAtomValue2 = utils.useAtomValue(swapEventHandlersAtom),
      onInitialSwapQuote = _useAtomValue2.onInitialSwapQuote;

  React.useEffect(function () {
    if (swap === lastQuotedSwap.current) return;

    if (swapInfo.trade.state === TradeState.VALID && swapInfo.trade.trade) {
      lastQuotedSwap.current = swap;
      onInitialSwapQuote === null || onInitialSwapQuote === void 0 ? void 0 : onInitialSwapQuote(swapInfo.trade.trade);
    }
  }, [onInitialSwapQuote, swap, swapInfo.trade.state, swapInfo.trade.trade]);
  return /*#__PURE__*/React__default["default"].createElement(SwapInfoContext.Provider, {
    value: swapInfo
  }, children);
}
/** Requires that SwapInfoUpdater be installed in the DOM tree. **/

function useSwapInfo() {
  return React.useContext(SwapInfoContext);
}

function useSyncController(_ref) {
  var value = _ref.value,
      settings = _ref.settings;
  // Log an error if the component changes from uncontrolled to controlled (or vice versa).
  var isSwapControlled = React.useRef(Boolean(value));
  var isSettingsControlled = React.useRef(Boolean(settings));
  React.useEffect(function () {
    if (Boolean(value) !== isSwapControlled.current) {
      warnOnControlChange({
        state: 'swap',
        prop: 'value'
      });
    }

    if (Boolean(settings) !== isSettingsControlled.current) {
      warnOnControlChange({
        state: 'settings',
        prop: 'settings'
      });
    }
  }, [settings, value]);
  var setSwap = utils.useUpdateAtom(controlledAtom$1);
  setSwap(function () {
    return value;
  });
  var setSettings = utils.useUpdateAtom(controlledAtom);
  setSettings(function () {
    return settings;
  });
}

function warnOnControlChange(_ref2) {
  var state = _ref2.state,
      prop = _ref2.prop;
  console.error("Warning: The SwapWidget component's ".concat(state, " state (controlled by the '").concat(prop, "' prop) is changing from uncontrolled to controlled (or vice versa). This should not happen. Decide between using a controlled or uncontrolled state for the lifetime of the component."));
}

function useSyncConvenienceFee(_ref) {
  var convenienceFee = _ref.convenienceFee,
      convenienceFeeRecipient = _ref.convenienceFeeRecipient;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var updateFeeOptions = utils.useUpdateAtom(feeOptionsAtom);
  React.useEffect(function () {
    if (convenienceFee && convenienceFeeRecipient) {
      if (typeof convenienceFeeRecipient === 'string') {
        updateFeeOptions({
          fee: new sdkCore.Percent(convenienceFee, 10000),
          recipient: convenienceFeeRecipient
        });
        return;
      }

      if (chainId && convenienceFeeRecipient[chainId]) {
        updateFeeOptions({
          fee: new sdkCore.Percent(convenienceFee, 10000),
          recipient: convenienceFeeRecipient[chainId]
        });
        return;
      }
    }

    updateFeeOptions(undefined);
  }, [chainId, convenienceFee, convenienceFeeRecipient, updateFeeOptions]);
}

function useSyncSwapEventHandlers(handlers) {
  var setSwapEventHandlersAtom = utils.useUpdateAtom(swapEventHandlersAtom);
  React.useEffect(function () {
    return setSwapEventHandlersAtom(handlers);
  }, [handlers, setSwapEventHandlersAtom]);
}

/**
 * Returns the input chain ID if chain is supported. If not, return undefined
 * @param chainId a chain ID, which will be returned if it is a supported chain ID
 */

function supportedChainId(chainId) {
  if (typeof chainId === 'number' && chainId in exports.SupportedChainId) {
    return chainId;
  }

  return undefined;
}

var REGISTRAR_ABI = [{
  constant: true,
  inputs: [{
    name: 'node',
    type: 'bytes32'
  }],
  name: 'resolver',
  outputs: [{
    name: 'resolverAddress',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}];
var REGISTRAR_ADDRESS = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e';
var RESOLVER_ABI = [{
  constant: true,
  inputs: [{
    internalType: 'bytes32',
    name: 'node',
    type: 'bytes32'
  }],
  name: 'contenthash',
  outputs: [{
    internalType: 'bytes',
    name: '',
    type: 'bytes'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}]; // cache the resolver contracts since most of them are the public resolver

function resolverContract(resolverAddress, provider) {
  return new contracts.Contract(resolverAddress, RESOLVER_ABI, provider);
}
/**
 * Fetches and decodes the result of an ENS contenthash lookup on mainnet to a URI
 * @param ensName to resolve
 * @param provider provider to use to fetch the data
 */


function resolveENSContentHash(_x, _x2) {
  return _resolveENSContentHash.apply(this, arguments);
}

function _resolveENSContentHash() {
  _resolveENSContentHash = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(ensName, provider) {
    var ensRegistrarContract, hash$1, resolverAddress;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ensRegistrarContract = new contracts.Contract(REGISTRAR_ADDRESS, REGISTRAR_ABI, provider);
            hash$1 = hash.namehash(ensName);
            _context.next = 4;
            return ensRegistrarContract.resolver(hash$1);

          case 4:
            resolverAddress = _context.sent;
            return _context.abrupt("return", resolverContract(resolverAddress, provider).contenthash(hash$1));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _resolveENSContentHash.apply(this, arguments);
}

function hexToUint8Array(hex) {
  hex = hex.startsWith('0x') ? hex.substr(2) : hex;
  if (hex.length % 2 !== 0) throw new Error('hex must have length that is multiple of 2');
  var arr = new Uint8Array(hex.length / 2);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(hex.substr(i * 2, 2), 16);
  }

  return arr;
}
var UTF_8_DECODER = new TextDecoder('utf-8');
/**
 * Returns the URI representation of the content hash for supported codecs
 * @param contenthash to decode
 */

function contenthashToUri(contenthash) {
  var data = hexToUint8Array(contenthash);
  var codec = multicodec.getNameFromData(data);

  switch (codec) {
    case 'ipfs-ns':
      {
        var unprefixedData = multicodec.rmPrefix(data);
        var cid = new CID__default["default"](unprefixedData);
        return "ipfs://".concat(multihashes.toB58String(cid.multihash));
      }

    case 'ipns-ns':
      {
        var _unprefixedData = multicodec.rmPrefix(data);

        var _cid = new CID__default["default"](_unprefixedData);

        var multihash = multihashes.decode(_cid.multihash);

        if (multihash.name === 'identity') {
          return "ipns://".concat(UTF_8_DECODER.decode(multihash.digest).trim());
        } else {
          return "ipns://".concat(multihashes.toB58String(_cid.multihash));
        }
      }

    default:
      throw new Error("Unrecognized codec: ".concat(codec));
  }
}

var ENS_NAME_REGEX = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;
function parseENSAddress(ensAddress) {
  var match = ensAddress.match(ENS_NAME_REGEX);
  if (!match) return undefined;
  return {
    ensName: "".concat(match[1].toLowerCase(), "eth"),
    ensPath: match[4]
  };
}

/**
 * Given a URI that may be ipfs, ipns, http, https, ar, or data protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */
function uriToHttp(uri) {
  var _uri$match, _uri$match2, _uri$match3;

  var protocol = uri.split(':')[0].toLowerCase();

  switch (protocol) {
    case 'data':
      return [uri];

    case 'https':
      return [uri];

    case 'http':
      return ['https' + uri.substr(4), uri];

    case 'ipfs':
      var hash = (_uri$match = uri.match(/^ipfs:(\/\/)?(.*)$/i)) === null || _uri$match === void 0 ? void 0 : _uri$match[2];
      return ["https://cloudflare-ipfs.com/ipfs/".concat(hash, "/"), "https://ipfs.io/ipfs/".concat(hash, "/")];

    case 'ipns':
      var name = (_uri$match2 = uri.match(/^ipns:(\/\/)?(.*)$/i)) === null || _uri$match2 === void 0 ? void 0 : _uri$match2[2];
      return ["https://cloudflare-ipfs.com/ipns/".concat(name, "/"), "https://ipfs.io/ipns/".concat(name, "/")];

    case 'ar':
      var tx = (_uri$match3 = uri.match(/^ar:(\/\/)?(.*)$/i)) === null || _uri$match3 === void 0 ? void 0 : _uri$match3[2];
      return ["https://arweave.net/".concat(tx)];

    default:
      return [];
  }
}

var ValidationSchema;

(function (ValidationSchema) {
  ValidationSchema["LIST"] = "list";
  ValidationSchema["TOKENS"] = "tokens";
})(ValidationSchema || (ValidationSchema = {}));

function getValidationErrors(validate) {
  var _validate$errors$map$, _validate$errors;

  return (_validate$errors$map$ = validate === null || validate === void 0 ? void 0 : (_validate$errors = validate.errors) === null || _validate$errors === void 0 ? void 0 : _validate$errors.map(function (error) {
    return [error.instancePath, error.message].filter(Boolean).join(' ');
  }).join('; ')) !== null && _validate$errors$map$ !== void 0 ? _validate$errors$map$ : 'unknown error';
}

function validate(_x, _x2) {
  return _validate.apply(this, arguments);
}
/**
 * Validates an array of tokens.
 * @param json the TokenInfo[] to validate
 */


function _validate() {
  _validate = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(schema, data) {
    var validatorImport, _yield$Promise$all, _yield$Promise$all2, validatorModule, validator;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = schema;
            _context.next = _context.t0 === ValidationSchema.LIST ? 3 : _context.t0 === ValidationSchema.TOKENS ? 5 : 7;
            break;

          case 3:
            validatorImport = Promise.resolve().then(function () { return require('./validateTokenList-fa40971c.cjs'); });
            return _context.abrupt("break", 9);

          case 5:
            validatorImport = Promise.resolve().then(function () { return require('./validateTokens-0b51c6ad.cjs'); });
            return _context.abrupt("break", 9);

          case 7:
            throw new Error('No validation function specified for schema');

          case 9:
            _context.next = 11;
            return Promise.all([Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('ajv')); }), validatorImport]);

          case 11:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray__default["default"](_yield$Promise$all, 2);
            validatorModule = _yield$Promise$all2[1];
            _context.next = 16;
            return validatorModule.default;

          case 16:
            validator = _context.sent;

            if (!(validator !== null && validator !== void 0 && validator(data))) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", data);

          case 19:
            throw new Error(getValidationErrors(validator));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validate.apply(this, arguments);
}

function validateTokens(_x3) {
  return _validateTokens.apply(this, arguments);
}
/**
 * Validates a token list.
 * @param json the TokenList to validate
 */

function _validateTokens() {
  _validateTokens = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(json) {
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return validate(ValidationSchema.TOKENS, {
              tokens: json
            });

          case 3:
            return _context2.abrupt("return", json);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            throw new Error("Tokens failed validation: ".concat(_context2.t0.message));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _validateTokens.apply(this, arguments);
}

function validateTokenList(_x4) {
  return _validateTokenList.apply(this, arguments);
}

function _validateTokenList() {
  _validateTokenList = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(json) {
    return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return validate(ValidationSchema.LIST, json);

          case 3:
            return _context3.abrupt("return", json);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            throw new Error("Token list failed validation: ".concat(_context3.t0.message));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _validateTokenList.apply(this, arguments);
}

var listCache = new Map();
/** Fetches and validates a token list. */

function fetchTokenList(_x, _x2) {
  return _fetchTokenList.apply(this, arguments);
}

function _fetchTokenList() {
  _fetchTokenList = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(listUrl, resolveENSContentHash) {
    var cached, urls, parsedENS, _parsedENS$ensPath, contentHashUri, message, translatedUri, _message, i, url, isLast, response, _message2, _message3, json, list;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cached = listCache === null || listCache === void 0 ? void 0 : listCache.get(listUrl); // avoid spurious re-fetches

            if (!cached) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", cached);

          case 3:
            parsedENS = parseENSAddress(listUrl);

            if (!parsedENS) {
              _context.next = 28;
              break;
            }

            _context.prev = 5;
            _context.next = 8;
            return resolveENSContentHash(parsedENS.ensName);

          case 8:
            contentHashUri = _context.sent;
            _context.next = 16;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            message = "failed to resolve ENS name: ".concat(parsedENS.ensName);
            console.debug(message, _context.t0);
            throw new Error(message);

          case 16:
            _context.prev = 16;
            translatedUri = contenthashToUri(contentHashUri);
            _context.next = 25;
            break;

          case 20:
            _context.prev = 20;
            _context.t1 = _context["catch"](16);
            _message = "failed to translate contenthash to URI: ".concat(contentHashUri);
            console.debug(_message, _context.t1);
            throw new Error(_message);

          case 25:
            urls = uriToHttp("".concat(translatedUri).concat((_parsedENS$ensPath = parsedENS.ensPath) !== null && _parsedENS$ensPath !== void 0 ? _parsedENS$ensPath : ''));
            _context.next = 29;
            break;

          case 28:
            urls = uriToHttp(listUrl);

          case 29:
            i = 0;

          case 30:
            if (!(i < urls.length)) {
              _context.next = 64;
              break;
            }

            url = urls[i];
            isLast = i === urls.length - 1;
            response = void 0;
            _context.prev = 34;
            _context.next = 37;
            return fetch(url, {
              credentials: 'omit'
            });

          case 37:
            response = _context.sent;
            _context.next = 47;
            break;

          case 40:
            _context.prev = 40;
            _context.t2 = _context["catch"](34);
            _message2 = "failed to fetch list: ".concat(listUrl);
            console.debug(_message2, _context.t2);

            if (!isLast) {
              _context.next = 46;
              break;
            }

            throw new Error(_message2);

          case 46:
            return _context.abrupt("continue", 61);

          case 47:
            if (response.ok) {
              _context.next = 53;
              break;
            }

            _message3 = "failed to fetch list: ".concat(listUrl);
            console.debug(_message3, response.statusText);

            if (!isLast) {
              _context.next = 52;
              break;
            }

            throw new Error(_message3);

          case 52:
            return _context.abrupt("continue", 61);

          case 53:
            _context.next = 55;
            return response.json();

          case 55:
            json = _context.sent;
            _context.next = 58;
            return validateTokenList(json);

          case 58:
            list = _context.sent;
            listCache === null || listCache === void 0 ? void 0 : listCache.set(listUrl, list);
            return _context.abrupt("return", list);

          case 61:
            i++;
            _context.next = 30;
            break;

          case 64:
            throw new Error('Unrecognized list URL protocol.');

          case 65:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 11], [16, 20], [34, 40]]);
  }));
  return _fetchTokenList.apply(this, arguments);
}

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Token instances created from token info on a token list.
 */
var WrappedTokenInfo = /*#__PURE__*/function () {
  function WrappedTokenInfo(tokenInfo, list) {
    _classCallCheck__default["default"](this, WrappedTokenInfo);

    _defineProperty__default["default"](this, "isNative", false);

    _defineProperty__default["default"](this, "isToken", true);

    _defineProperty__default["default"](this, "_checksummedAddress", null);

    _defineProperty__default["default"](this, "_tags", null);

    this.tokenInfo = tokenInfo;
    this.list = list;
  }

  _createClass__default["default"](WrappedTokenInfo, [{
    key: "address",
    get: function get() {
      if (this._checksummedAddress) return this._checksummedAddress;
      var checksummedAddress = isAddress(this.tokenInfo.address);
      if (!checksummedAddress) throw new Error("Invalid token address: ".concat(this.tokenInfo.address));
      return this._checksummedAddress = checksummedAddress;
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.tokenInfo.chainId;
    }
  }, {
    key: "decimals",
    get: function get() {
      return this.tokenInfo.decimals;
    }
  }, {
    key: "name",
    get: function get() {
      return this.tokenInfo.name;
    }
  }, {
    key: "symbol",
    get: function get() {
      return this.tokenInfo.symbol;
    }
  }, {
    key: "logoURI",
    get: function get() {
      return this.tokenInfo.logoURI;
    }
  }, {
    key: "tags",
    get: function get() {
      var _this$list;

      if (this._tags !== null) return this._tags;
      if (!this.tokenInfo.tags) return this._tags = [];
      var listTags = (_this$list = this.list) === null || _this$list === void 0 ? void 0 : _this$list.tags;
      if (!listTags) return this._tags = [];
      return this._tags = this.tokenInfo.tags.map(function (tagId) {
        return _objectSpread$a(_objectSpread$a({}, listTags[tagId]), {}, {
          id: tagId
        });
      });
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return other.chainId === this.chainId && other.isToken && other.address.toLowerCase() === this.address.toLowerCase();
    }
  }, {
    key: "sortsBefore",
    value: function sortsBefore(other) {
      if (this.equals(other)) throw new Error('Addresses should not be equal');
      return this.address.toLowerCase() < other.address.toLowerCase();
    }
  }, {
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);

  return WrappedTokenInfo;
}();

var mapCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
function tokensToChainTokenMap(tokens) {
  var cached = mapCache === null || mapCache === void 0 ? void 0 : mapCache.get(tokens);
  if (cached) return cached;

  var _ref = Array.isArray(tokens) ? [undefined, tokens] : [tokens, tokens.tokens],
      _ref2 = _slicedToArray__default["default"](_ref, 2),
      list = _ref2[0],
      infos = _ref2[1];

  var map = infos.reduce(function (map, info) {
    var _map$token$chainId;

    var token = new WrappedTokenInfo(info, list);

    if (((_map$token$chainId = map[token.chainId]) === null || _map$token$chainId === void 0 ? void 0 : _map$token$chainId[token.address]) !== undefined) {
      console.warn("Duplicate token skipped: ".concat(token.address));
      return map;
    }

    if (!map[token.chainId]) {
      map[token.chainId] = {};
    }

    map[token.chainId][token.address] = {
      token: token,
      list: list
    };
    return map;
  }, {});
  mapCache === null || mapCache === void 0 ? void 0 : mapCache.set(tokens, map);
  return map;
}

var alwaysTrue = function alwaysTrue() {
  return true;
};
/** Creates a filter function that filters tokens that do not match the query. */


function getTokenFilter(query) {
  var searchingAddress = isAddress(query);

  if (searchingAddress) {
    var address = searchingAddress.toLowerCase();
    return function (t) {
      return 'address' in t && address === t.address.toLowerCase();
    };
  }

  var queryParts = query.toLowerCase().split(/\s+/).filter(function (s) {
    return s.length > 0;
  });
  if (queryParts.length === 0) return alwaysTrue;

  var match = function match(s) {
    var parts = s.toLowerCase().split(/\s+/).filter(function (s) {
      return s.length > 0;
    });
    return queryParts.every(function (p) {
      return p.length === 0 || parts.some(function (sp) {
        return sp.startsWith(p) || sp.endsWith(p);
      });
    });
  };

  return function (_ref) {
    var name = _ref.name,
        symbol = _ref.symbol;
    return Boolean(symbol && match(symbol) || name && match(name));
  };
}

/** Sorts currency amounts (descending). */

function balanceComparator(a, b) {
  if (a && b) {
    return a.greaterThan(b) ? -1 : a.equalTo(b) ? 0 : 1;
  } else if (a !== null && a !== void 0 && a.greaterThan('0')) {
    return -1;
  } else if (b !== null && b !== void 0 && b.greaterThan('0')) {
    return 1;
  }

  return 0;
}

/** Sorts tokens by currency amount (descending), then symbol (ascending). */
function tokenComparator(balances, a, b) {
  // Sorts by balances
  var balanceComparison = balanceComparator(balances[a.address], balances[b.address]);
  if (balanceComparison !== 0) return balanceComparison; // Sorts by symbol

  if (a.symbol && b.symbol) {
    return a.symbol.toLowerCase() < b.symbol.toLowerCase() ? -1 : 1;
  }

  return -1;
}
/** Sorts tokens by query, giving precedence to exact matches and partial matches. */

function useSortTokensByQuery(query, tokens) {
  return React.useMemo(function () {
    if (!tokens) {
      return [];
    }

    var matches = query.toLowerCase().split(/\s+/).filter(function (s) {
      return s.length > 0;
    });

    if (matches.length > 1) {
      return tokens;
    }

    var exactMatches = [];
    var symbolSubtrings = [];
    var rest = []; // sort tokens by exact match -> subtring on symbol match -> rest

    tokens.map(function (token) {
      var _token$symbol, _token$symbol2;

      if (((_token$symbol = token.symbol) === null || _token$symbol === void 0 ? void 0 : _token$symbol.toLowerCase()) === matches[0]) {
        return exactMatches.push(token);
      } else if ((_token$symbol2 = token.symbol) !== null && _token$symbol2 !== void 0 && _token$symbol2.toLowerCase().startsWith(query.toLowerCase().trim())) {
        return symbolSubtrings.push(token);
      } else {
        return rest.push(token);
      }
    });
    return [].concat(exactMatches, symbolSubtrings, rest);
  }, [tokens, query]);
}

function useQueryTokens(query, tokens) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      account = _useWeb3React.account;

  var balances = useTokenBalances(account, tokens);
  var sortedTokens = React.useMemo( // Create a new array because sort is in-place and returns a referentially equivalent array.
  function () {
    return Array.from(tokens).sort(tokenComparator.bind(null, balances));
  }, [balances, tokens]);
  var debouncedQuery = useDebounce(query, 200);
  var filter = React.useMemo(function () {
    return getTokenFilter(debouncedQuery);
  }, [debouncedQuery]);
  var filteredTokens = React.useMemo(function () {
    return sortedTokens.filter(filter);
  }, [filter, sortedTokens]);
  var queriedTokens = useSortTokensByQuery(debouncedQuery, filteredTokens);
  var native = React.useMemo(function () {
    return chainId && nativeOnChain(chainId);
  }, [chainId]);
  return React.useMemo(function () {
    if (native && filter(native)) {
      return [native].concat(_toConsumableArray__default["default"](queriedTokens));
    }

    return queriedTokens;
  }, [filter, native, queriedTokens]);
}

var UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';
var EMPTY_TOKEN_LIST = [];
var MISSING_PROVIDER = Symbol();
var ChainTokenMapContext = /*#__PURE__*/React.createContext(MISSING_PROVIDER);

function useChainTokenMapContext() {
  var chainTokenMap = React.useContext(ChainTokenMapContext);

  if (chainTokenMap === MISSING_PROVIDER) {
    throw new Error('TokenList hooks must be wrapped in a <TokenListProvider>');
  }

  return chainTokenMap;
}

function useIsTokenListLoaded() {
  return Boolean(useChainTokenMapContext());
}
function useTokenList() {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var chainTokenMap = useChainTokenMapContext();
  var tokenMap = chainId && (chainTokenMap === null || chainTokenMap === void 0 ? void 0 : chainTokenMap[chainId]);
  return React.useMemo(function () {
    if (!tokenMap) return [];
    return Object.values(tokenMap).map(function (_ref) {
      var token = _ref.token;
      return token;
    });
  }, [tokenMap]);
}
function useTokenMap(chainId) {
  var _useWeb3React2 = core.useWeb3React(),
      activeChainId = _useWeb3React2.chainId;

  chainId = chainId || activeChainId;
  var chainTokenMap = useChainTokenMapContext();
  var tokenMap = chainId && (chainTokenMap === null || chainTokenMap === void 0 ? void 0 : chainTokenMap[chainId]);
  return React.useMemo(function () {
    if (!tokenMap) return {};
    return Object.entries(tokenMap).reduce(function (map, _ref2) {
      var _ref3 = _slicedToArray__default["default"](_ref2, 2),
          address = _ref3[0],
          token = _ref3[1].token;

      map[address] = token;
      return map;
    }, {});
  }, [tokenMap]);
}
function TokenListProvider(_ref4) {
  var _ref4$list = _ref4.list,
      list = _ref4$list === void 0 ? UNISWAP_TOKEN_LIST : _ref4$list,
      children = _ref4.children;

  // Error boundaries will not catch (non-rendering) async errors, but it should still be shown
  var _useState = React.useState(),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  if (error) throw error;

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      chainTokenMap = _useState4[0],
      setChainTokenMap = _useState4[1];

  React.useEffect(function () {
    return setChainTokenMap(undefined);
  }, [list]);

  var _useWeb3React3 = core.useWeb3React(),
      chainId = _useWeb3React3.chainId,
      provider = _useWeb3React3.provider;

  var resolver = React.useCallback(function (ensName) {
    if (provider && chainId === 1) {
      return resolveENSContentHash(ensName, provider);
    }

    throw new Error('Could not construct mainnet ENS resolver');
  }, [chainId, provider]);
  React.useEffect(function () {
    // If the list was already loaded, don't reload it.
    if (chainTokenMap) return;
    var stale = false;
    activateList(list);
    return function () {
      stale = true;
    };

    function activateList(_x) {
      return _activateList.apply(this, arguments);
    }

    function _activateList() {
      _activateList = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(list) {
        var tokens, map;
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(typeof list === 'string')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return fetchTokenList(list, resolver);

              case 4:
                tokens = _context.sent;
                _context.next = 15;
                break;

              case 7:
                if (!(list.length > 0)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return validateTokens(list);

              case 10:
                _context.t0 = _context.sent;
                _context.next = 14;
                break;

              case 13:
                _context.t0 = EMPTY_TOKEN_LIST;

              case 14:
                tokens = _context.t0;

              case 15:
                // tokensToChainTokenMap also caches the fetched tokens, so it must be invoked even if stale.
                map = tokensToChainTokenMap(tokens);

                if (!stale) {
                  setChainTokenMap(map);
                  setError(undefined);
                }

                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t1 = _context["catch"](0);

                if (!stale) {
                  // Do not update the token map, in case the map was already resolved without error on mainnet.
                  setError(_context.t1);
                }

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }));
      return _activateList.apply(this, arguments);
    }
  }, [chainTokenMap, list, resolver]);
  return /*#__PURE__*/React__default["default"].createElement(ChainTokenMapContext.Provider, {
    value: chainTokenMap
  }, children);
}

var BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/;

function parseStringOrBytes32(str, bytes32, defaultValue) {
  return str && str.length > 0 ? str : // need to check for proper bytes string and valid terminator
  bytes32 && BYTES32_REGEX.test(bytes32) && bytes.arrayify(bytes32)[31] === 0 ? strings.parseBytes32String(bytes32) : defaultValue;
}
/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */


function useTokenFromNetwork(tokenAddress) {
  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var formattedAddress = isAddress(tokenAddress);
  var tokenContract = useTokenContract(formattedAddress ? formattedAddress : undefined, false);
  var tokenContractBytes32 = useBytes32TokenContract(formattedAddress ? formattedAddress : undefined, false);
  var tokenName = useSingleCallResult(tokenContract, 'name', undefined, reduxMulticall.NEVER_RELOAD);
  var tokenNameBytes32 = useSingleCallResult(tokenContractBytes32, 'name', undefined, reduxMulticall.NEVER_RELOAD);
  var symbol = useSingleCallResult(tokenContract, 'symbol', undefined, reduxMulticall.NEVER_RELOAD);
  var symbolBytes32 = useSingleCallResult(tokenContractBytes32, 'symbol', undefined, reduxMulticall.NEVER_RELOAD);
  var decimals = useSingleCallResult(tokenContract, 'decimals', undefined, reduxMulticall.NEVER_RELOAD);
  return React.useMemo(function () {
    if (typeof tokenAddress !== 'string' || !chainId || !formattedAddress) return undefined;
    if (decimals.loading || symbol.loading || tokenName.loading) return null;

    if (decimals.result) {
      var _symbol$result, _symbolBytes32$result, _tokenName$result, _tokenNameBytes32$res;

      return new sdkCore.Token(chainId, formattedAddress, decimals.result[0], parseStringOrBytes32((_symbol$result = symbol.result) === null || _symbol$result === void 0 ? void 0 : _symbol$result[0], (_symbolBytes32$result = symbolBytes32.result) === null || _symbolBytes32$result === void 0 ? void 0 : _symbolBytes32$result[0], 'UNKNOWN'), parseStringOrBytes32((_tokenName$result = tokenName.result) === null || _tokenName$result === void 0 ? void 0 : _tokenName$result[0], (_tokenNameBytes32$res = tokenNameBytes32.result) === null || _tokenNameBytes32$res === void 0 ? void 0 : _tokenNameBytes32$res[0], 'Unknown Token'));
    }

    return undefined;
  }, [formattedAddress, chainId, decimals.loading, decimals.result, symbol.loading, symbol.result, symbolBytes32.result, tokenAddress, tokenName.loading, tokenName.result, tokenNameBytes32.result]);
}
/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */

function useTokenFromMapOrNetwork(tokens, tokenAddress) {
  var skipNetwork = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var address = isAddress(tokenAddress);
  var token = address ? tokens[address] : undefined;
  var tokenFromNetwork = useTokenFromNetwork(token ? undefined : address ? address : undefined);
  return skipNetwork ? token : tokenFromNetwork || token;
}
/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */

function useToken(tokenAddress, chainId) {
  var _useWeb3React2 = core.useWeb3React(),
      activeChainId = _useWeb3React2.chainId;

  var tokens = useTokenMap(chainId);
  var skipNetwork = chainId && chainId !== activeChainId;
  return useTokenFromMapOrNetwork(tokens, tokenAddress, skipNetwork);
}

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useDefaultToken(defaultAddress, chainId, defaultToNative) {
  var address = undefined;

  if (typeof defaultAddress === 'string') {
    address = defaultAddress;
  } else if (_typeof__default["default"](defaultAddress) === 'object' && chainId) {
    address = defaultAddress[chainId];
  }

  var token = useToken(address, chainId);
  var onSupportedNetwork = useOnSupportedNetwork(chainId);
  return React.useMemo(function () {
    // Only use native currency if chain ID is in supported chains. ExtendedEther will error otherwise.
    if (chainId && onSupportedNetwork && (address === 'NATIVE' || !token && defaultToNative)) {
      return nativeOnChain(chainId);
    }

    return token !== null && token !== void 0 ? token : undefined;
  }, [address, chainId, defaultToNative, onSupportedNetwork, token]);
}

function useSyncTokenDefaults(_ref) {
  var defaultInputTokenAddress = _ref.defaultInputTokenAddress,
      defaultInputAmount = _ref.defaultInputAmount,
      defaultOutputTokenAddress = _ref.defaultOutputTokenAddress,
      defaultOutputAmount = _ref.defaultOutputAmount,
      defaultChainId = _ref.defaultChainId;
  var lastChainId = React.useRef(undefined);
  var lastConnector = React.useRef(undefined);
  var updateSwap = utils.useUpdateAtom(swapAtom);

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId,
      connector = _useWeb3React.connector;

  var defaultOutputToken = useDefaultToken(defaultOutputTokenAddress, chainId, false);
  var defaultChainIdOutputToken = useDefaultToken(defaultOutputTokenAddress, defaultChainId, false);
  var defaultInputToken = useDefaultToken(defaultInputTokenAddress, chainId, true);
  var defaultChainIdInputToken = useDefaultToken(defaultInputTokenAddress, defaultChainId, true);
  var setToDefaults = React.useCallback(function (shouldUseDefaultChainId) {
    var _defaultSwapState;

    var defaultSwapState = (_defaultSwapState = {
      amount: ''
    }, _defineProperty__default["default"](_defaultSwapState, exports.Field.INPUT, shouldUseDefaultChainId ? defaultChainIdInputToken : defaultInputToken), _defineProperty__default["default"](_defaultSwapState, exports.Field.OUTPUT, shouldUseDefaultChainId ? defaultChainIdOutputToken : defaultOutputToken), _defineProperty__default["default"](_defaultSwapState, "type", sdkCore.TradeType.EXACT_INPUT), _defaultSwapState);

    if (defaultInputToken && defaultInputAmount) {
      defaultSwapState.amount = defaultInputAmount.toString();
    } else if (defaultOutputToken && defaultOutputAmount) {
      defaultSwapState.type = sdkCore.TradeType.EXACT_OUTPUT;
      defaultSwapState.amount = defaultOutputAmount.toString();
    }

    updateSwap(function (swap) {
      return _objectSpread$9(_objectSpread$9({}, swap), defaultSwapState);
    });
  }, [defaultChainIdInputToken, defaultInputToken, defaultChainIdOutputToken, defaultOutputToken, defaultInputAmount, defaultOutputAmount, updateSwap]);
  var isTokenListLoaded = useIsTokenListLoaded();
  React.useEffect(function () {
    var isChainSwitched = chainId && chainId !== lastChainId.current;
    var isConnectorSwitched = connector && connector !== lastConnector.current;
    var shouldSync = isTokenListLoaded && (isChainSwitched || isConnectorSwitched);
    var shouldUseDefaultChainId = isConnectorSwitched && defaultChainId;

    if (shouldSync) {
      setToDefaults(shouldUseDefaultChainId);
      lastChainId.current = chainId;
      lastConnector.current = connector;
    }
  }, [isTokenListLoaded, chainId, setToDefaults, connector, defaultChainId]);
}

var HeaderRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "Header__HeaderRow",
  componentId: "sc-1a8935c-0"
})(["height:1.75em;margin:0 0.75em 1em;padding-top:0.25em;", " button{height:", "em;}"], largeIconCss, function (_ref) {
  var iconSize = _ref.iconSize;
  return iconSize;
});

function Header$1(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return /*#__PURE__*/React__default["default"].createElement(HeaderRow, {
    iconSize: 1.2
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, title && /*#__PURE__*/React__default["default"].createElement(Subhead1, null, title)), /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 1
  }, children));
}

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var BoundaryContext = /*#__PURE__*/React.createContext(null);
var BoundaryProvider = BoundaryContext.Provider;

var PopoverContainer = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Popover__PopoverContainer",
  componentId: "sc-1liex6z-0"
})(["background-color:", ";border:1px solid ", ";border-radius:0.5em;opacity:", ";padding:10px 12px;transition:visibility 0.25s linear,opacity 0.25s linear;visibility:", ";z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.dialog;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.outline;
}, function (props) {
  return props.show ? 1 : 0;
}, function (props) {
  return props.show ? 'visible' : 'hidden';
}, Layer.TOOLTIP);

var Reference = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Popover__Reference",
  componentId: "sc-1liex6z-1"
})(["display:inline-block;height:1em;"]);

var Arrow = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Popover__Arrow",
  componentId: "sc-1liex6z-2"
})(["height:8px;width:8px;z-index:", ";::before{background:", ";border:1px solid ", ";content:'';height:8px;position:absolute;transform:rotate(45deg);width:8px;}&.arrow-top{bottom:-4px;::before{border-radius:1px;border-left:none;border-top:none;}}&.arrow-bottom{top:-5px;::before{border-bottom:none;border-right:none;border-radius:1px;}}&.arrow-left{right:-4px;::before{border-bottom:none;border-left:none;border-radius:1px;}}&.arrow-right{left:-5px;::before{border-radius:1px;border-right:none;border-top:none;}}"], Layer.TOOLTIP, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dialog;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.outline;
});

function Popover(_ref5) {
  var _attributes$popper$da, _attributes$popper;

  var content = _ref5.content,
      show = _ref5.show,
      children = _ref5.children,
      placement = _ref5.placement,
      offset = _ref5.offset,
      contained = _ref5.contained;
  var boundary = React.useContext(BoundaryContext);
  var reference = React.useRef(null); // Use callback refs to be notified when instantiated

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      popover = _useState2[0],
      setPopover = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      arrow = _useState4[0],
      setArrow = _useState4[1];

  var options = React.useMemo(function () {
    var modifiers = [{
      name: 'offset',
      options: {
        offset: [4, offset || 4]
      }
    }, {
      name: 'arrow',
      options: {
        element: arrow,
        padding: 4
      }
    }];

    if (contained) {
      modifiers.push({
        name: 'preventOverflow',
        options: {
          boundary: boundary,
          padding: 8
        }
      }, {
        name: 'flip',
        options: {
          boundary: boundary,
          padding: 8
        }
      }, _objectSpread$8(_objectSpread$8({}, maxSize__default["default"]), {}, {
        options: {
          boundary: boundary,
          padding: 8
        }
      }), {
        name: 'applyMaxSize',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['maxSize'],
        fn: function fn(_ref6) {
          var _boundary$clientWidth;

          var state = _ref6.state;
          var width = state.modifiersData.maxSize.width; // width is sometimes too small, so expand it to the clientWidth:

          var maxWidth = Math.max(width, ((_boundary$clientWidth = boundary === null || boundary === void 0 ? void 0 : boundary.clientWidth) !== null && _boundary$clientWidth !== void 0 ? _boundary$clientWidth : 16) - 16);
          state.styles.popper = _objectSpread$8(_objectSpread$8({}, state.styles.popper), {}, {
            maxWidth: "".concat(maxWidth, "px")
          });
        }
      });
    }

    return {
      placement: placement,
      strategy: 'absolute',
      modifiers: modifiers
    };
  }, [offset, arrow, contained, placement, boundary]);

  var _usePopper = reactPopper.usePopper(reference.current, popover, options),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Reference, {
    ref: reference
  }, children), boundary && /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(PopoverContainer, _extends__default["default"]({
    show: show,
    ref: setPopover,
    style: styles.popper
  }, attributes.popper), content, /*#__PURE__*/React__default["default"].createElement(Arrow, _extends__default["default"]({
    className: "arrow-".concat((_attributes$popper$da = (_attributes$popper = attributes.popper) === null || _attributes$popper === void 0 ? void 0 : _attributes$popper['data-popper-placement']) !== null && _attributes$popper$da !== void 0 ? _attributes$popper$da : ''),
    ref: setArrow,
    style: styles.arrow
  }, attributes.arrow))), boundary));
}

function otherField(field) {
  switch (field) {
    case exports.Field.INPUT:
      return exports.Field.OUTPUT;

    case exports.Field.OUTPUT:
      return exports.Field.INPUT;
  }
}

function useSwitchSwapCurrencies() {
  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSwitchTokens = _useAtomValue.onSwitchTokens;

  var setSwap = utils.useUpdateAtom(swapAtom);
  return React.useCallback(function () {
    setSwap(function (swap) {
      onSwitchTokens === null || onSwitchTokens === void 0 ? void 0 : onSwitchTokens();
      swap.type = invertTradeType(swap.type);
      var oldOutput = swap[exports.Field.OUTPUT];
      swap[exports.Field.OUTPUT] = swap[exports.Field.INPUT];
      swap[exports.Field.INPUT] = oldOutput;
    });
  }, [onSwitchTokens, setSwap]);
}
function useSwapCurrency(field) {
  var currencyAtom = React.useMemo(function () {
    return pickAtom(swapAtom, field);
  }, [field]);

  var _useAtom = jotai.useAtom(currencyAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      currency = _useAtom2[0],
      setCurrency = _useAtom2[1];

  var otherCurrencyAtom = React.useMemo(function () {
    return pickAtom(swapAtom, otherField(field));
  }, [field]);
  var otherCurrency = utils.useAtomValue(otherCurrencyAtom);

  var _useAtomValue2 = utils.useAtomValue(swapEventHandlersAtom),
      onTokenChange = _useAtomValue2.onTokenChange;

  var switchSwapCurrencies = useSwitchSwapCurrencies();
  var setOrSwitchCurrency = React.useCallback(function (update) {
    if (update === currency) return;

    if (update === otherCurrency) {
      switchSwapCurrencies();
    } else {
      onTokenChange === null || onTokenChange === void 0 ? void 0 : onTokenChange(field, update);
      setCurrency(update);
    }
  }, [currency, field, onTokenChange, otherCurrency, setCurrency, switchSwapCurrencies]);
  return [currency, setOrSwitchCurrency];
}
var tradeTypeAtom = pickAtom(swapAtom, 'type');
function useIsSwapFieldIndependent(field) {
  var type = utils.useAtomValue(tradeTypeAtom);
  return type === toTradeType(field);
}
var amountAtom = pickAtom(swapAtom, 'amount');
/** Returns true if the user has entered a non-zero amount. */

function useIsAmountPopulated() {
  return Boolean(Number(utils.useAtomValue(amountAtom)));
}
function useSwapAmount(field) {
  var value = utils.useAtomValue(amountAtom);
  var isFieldIndependent = useIsSwapFieldIndependent(field);
  var amount = isFieldIndependent ? value : undefined;

  var _useAtomValue3 = utils.useAtomValue(swapEventHandlersAtom),
      onAmountChange = _useAtomValue3.onAmountChange;

  var setSwap = utils.useUpdateAtom(swapAtom);
  var updateAmount = React.useCallback(function (update, origin) {
    if (update === amount) return;
    onAmountChange === null || onAmountChange === void 0 ? void 0 : onAmountChange(field, update, origin);
    setSwap(function (swap) {
      swap.type = toTradeType(field);
      swap.amount = update;
    });
  }, [amount, field, onAmountChange, setSwap]);
  return [amount, updateAmount];
}

var MaticLogo = "data:image/svg+xml,%3Csvg%20width%3D%221024%22%20height%3D%221024%22%20viewBox%3D%220%200%201024%201024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%22512%22%20cy%3D%22512%22%20r%3D%22512%22%20fill%3D%22%238247E5%22%2F%3E%3Cpath%20d%3D%22M681.469%20402.456C669.189%20395.312%20653.224%20395.312%20639.716%20402.456L543.928%20457.228L478.842%20492.949L383.055%20547.721C370.774%20554.865%20354.81%20554.865%20341.301%20547.721L265.162%20504.856C252.882%20497.712%20244.286%20484.614%20244.286%20470.325V385.786C244.286%20371.498%20251.654%20358.4%20265.162%20351.256L340.073%20309.581C352.353%20302.437%20368.318%20302.437%20381.827%20309.581L456.737%20351.256C469.018%20358.4%20477.614%20371.498%20477.614%20385.786V440.558L542.7%20403.646V348.874C542.7%20334.586%20535.332%20321.488%20521.824%20314.344L383.055%20235.758C370.774%20228.614%20354.81%20228.614%20341.301%20235.758L200.076%20314.344C186.567%20321.488%20179.199%20334.586%20179.199%20348.874V507.237C179.199%20521.525%20186.567%20534.623%20200.076%20541.767L341.301%20620.353C353.582%20627.498%20369.546%20627.498%20383.055%20620.353L478.842%20566.772L543.928%20529.86L639.716%20476.279C651.996%20469.135%20667.961%20469.135%20681.469%20476.279L756.38%20517.953C768.66%20525.098%20777.257%20538.195%20777.257%20552.484V637.023C777.257%20651.312%20769.888%20664.409%20756.38%20671.553L681.469%20714.419C669.189%20721.563%20653.224%20721.563%20639.716%20714.419L564.805%20672.744C552.525%20665.6%20543.928%20652.502%20543.928%20638.214V583.442L478.842%20620.353V675.125C478.842%20689.414%20486.21%20702.512%20499.719%20709.656L640.944%20788.242C653.224%20795.386%20669.189%20795.386%20682.697%20788.242L823.922%20709.656C836.203%20702.512%20844.799%20689.414%20844.799%20675.125V516.763C844.799%20502.474%20837.431%20489.377%20823.922%20482.232L681.469%20402.456Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

/**
 * Does a lookup for an ENS name to find its contenthash.
 */

function useENSContentHash(ensName) {
  var _resolverAddressResul;

  var ensNodeArgument = React.useMemo(function () {
    return [ensName === null ? undefined : safeNamehash(ensName)];
  }, [ensName]);
  var registrarContract = useENSRegistrarContract(false);
  var resolverAddressResult = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  var resolverAddress = (_resolverAddressResul = resolverAddressResult.result) === null || _resolverAddressResul === void 0 ? void 0 : _resolverAddressResul[0];
  var resolverContract = useENSResolverContract(resolverAddress && isZero(resolverAddress) ? undefined : resolverAddress, false);
  var contenthash = useSingleCallResult(resolverContract, 'contenthash', ensNodeArgument);
  return React.useMemo(function () {
    var _contenthash$result$, _contenthash$result;

    return {
      contenthash: (_contenthash$result$ = (_contenthash$result = contenthash.result) === null || _contenthash$result === void 0 ? void 0 : _contenthash$result[0]) !== null && _contenthash$result$ !== void 0 ? _contenthash$result$ : null,
      loading: resolverAddressResult.loading || contenthash.loading
    };
  }, [contenthash.loading, contenthash.result, resolverAddressResult.loading]);
}

function useHttpLocations(uri) {
  var ens = React.useMemo(function () {
    return uri ? parseENSAddress(uri) : undefined;
  }, [uri]);
  var resolvedContentHash = useENSContentHash(ens === null || ens === void 0 ? void 0 : ens.ensName);
  return React.useMemo(function () {
    if (ens) {
      return resolvedContentHash.contenthash ? uriToHttp(contenthashToUri(resolvedContentHash.contenthash)) : [];
    } else {
      return uri ? uriToHttp(uri) : [];
    }
  }, [ens, resolvedContentHash.contenthash, uri]);
}

function chainIdToNetworkName(networkId) {
  switch (networkId) {
    case exports.SupportedChainId.MAINNET:
      return 'ethereum';

    case exports.SupportedChainId.ARBITRUM_ONE:
      return 'arbitrum';

    case exports.SupportedChainId.OPTIMISM:
      return 'optimism';

    default:
      return 'ethereum';
  }
}

function getNativeLogoURI() {
  var chainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.SupportedChainId.MAINNET;

  switch (chainId) {
    case exports.SupportedChainId.POLYGON_MUMBAI:
    case exports.SupportedChainId.POLYGON:
      return MaticLogo;

    case exports.SupportedChainId.CELO:
    case exports.SupportedChainId.CELO_ALFAJORES:
      return CeloLogo;

    default:
      return EthereumLogo;
  }
}

function getTokenLogoURI(address) {
  var chainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.SupportedChainId.MAINNET;
  var networkName = chainIdToNetworkName(chainId);
  var networksWithUrls = [exports.SupportedChainId.ARBITRUM_ONE, exports.SupportedChainId.MAINNET, exports.SupportedChainId.OPTIMISM];

  if (networksWithUrls.includes(chainId)) {
    return "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/".concat(networkName, "/assets/").concat(address, "/logo.png");
  }

  if (isCelo(chainId)) {
    if (address === nativeOnChain(chainId).wrapped.address) {
      // The alternative logo represents $CELO as an erc-20 token and is consistent with token lists used by the
      // interface and other applications on Celo. The same logo should be displayed on the swap widget as on the
      // token list. Whereas the green and yellow logo traditionally represents the network itself.
      return 'https://celo-org.github.io/celo-token-list/assets/celo_alternative_logo.png';
    }
  }
}

function useCurrencyLogoURIs(currency) {
  var locations = useHttpLocations(currency === null || currency === void 0 ? void 0 : currency.logoURI);
  return React.useMemo(function () {
    var logoURIs = _toConsumableArray__default["default"](locations);

    if (currency) {
      if (currency.isNative) {
        logoURIs.push(getNativeLogoURI(currency.chainId));
      } else if (currency.isToken) {
        var logoURI = getTokenLogoURI(currency.address, currency.chainId);

        if (logoURI) {
          logoURIs.push(logoURI);
        }
      }
    }

    return logoURIs;
  }, [currency, locations]);
}

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var colors = new Map();
/**
 * Extracts the prominent color from a token.
 * NB: If cached, this function returns synchronously; using a callback allows sync or async returns.
 */

function getColorFromLogoURIs(_x) {
  return _getColorFromLogoURIs.apply(this, arguments);
}

function _getColorFromLogoURIs() {
  _getColorFromLogoURIs = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(logoURIs) {
    var cb,
        key,
        color,
        _iterator,
        _step,
        logoURI,
        uri,
        _args = arguments;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cb = _args.length > 1 && _args[1] !== undefined ? _args[1] : function () {
              return void 0;
            };
            key = logoURIs[0];
            color = colors.get(key);

            if (color) {
              _context.next = 26;
              break;
            }

            _iterator = _createForOfIteratorHelper$1(logoURIs);
            _context.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context.next = 18;
              break;
            }

            logoURI = _step.value;
            uri = logoURI;

            if (logoURI.startsWith('http')) {
              // Color extraction must use a CORS-compatible resource, but the resource may already be cached.
              // Adds a dummy parameter to force a different browser resource cache entry. Without this, color extraction prevents resource caching.
              uri += '?color';
            }

            _context.next = 13;
            return getColorFromUriPath(uri);

          case 13:
            color = _context.sent;

            if (!color) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("break", 18);

          case 16:
            _context.next = 7;
            break;

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](5);

            _iterator.e(_context.t0);

          case 23:
            _context.prev = 23;

            _iterator.f();

            return _context.finish(23);

          case 26:
            colors.set(key, color);
            return _context.abrupt("return", cb(color));

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 20, 23, 26]]);
  }));
  return _getColorFromLogoURIs.apply(this, arguments);
}

function getColorFromUriPath(_x2) {
  return _getColorFromUriPath.apply(this, arguments);
}

function _getColorFromUriPath() {
  _getColorFromUriPath = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(uri) {
    var _palette$Vibrant, palette;

    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Vibrant__default["default"].from(uri).getPalette();

          case 3:
            palette = _context2.sent;
            return _context2.abrupt("return", (_palette$Vibrant = palette.Vibrant) === null || _palette$Vibrant === void 0 ? void 0 : _palette$Vibrant.hex);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);

          case 9:
            return _context2.abrupt("return");

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getColorFromUriPath.apply(this, arguments);
}

function usePrefetchCurrencyColor(token) {
  var theme = _styled.useTheme();

  var logoURIs = useCurrencyLogoURIs(token);
  React.useEffect(function () {
    if (theme.tokenColorExtraction && token) {
      getColorFromLogoURIs(logoURIs);
    }
  }, [token, logoURIs, theme.tokenColorExtraction]);
}
function useCurrencyColor(token) {
  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var theme = _styled.useTheme();

  var logoURIs = useCurrencyLogoURIs(token);
  React.useEffect(function () {
    var stale = false;

    if (theme.tokenColorExtraction && token) {
      getColorFromLogoURIs(logoURIs, function (color) {
        if (!stale && color) {
          setColor(color);
        }
      });
    }

    return function () {
      stale = true;
      setColor(undefined);
    };
  }, [token, logoURIs, theme.tokenColorExtraction]);
  return color;
}

var SUPPORTED_LOCALES = [// order as they appear in the language dropdown
'en-US', 'af-ZA', 'ar-SA', 'ca-ES', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fi-FI', 'fr-FR', 'he-IL', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'nl-NL', 'no-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sr-SP', 'sv-SE', 'sw-TZ', 'tr-TR', 'uk-UA', 'vi-VN', 'zh-CN', 'zh-TW'];
var DEFAULT_LOCALE = 'en-US';

function currencyAmountToPreciseFloat(currencyAmount) {
  if (!currencyAmount) return undefined;
  var floatForLargerNumbers = parseFloat(currencyAmount.toExact());

  if (floatForLargerNumbers < 0.1) {
    return parseFloat(currencyAmount.toSignificant(6));
  }

  return floatForLargerNumbers;
} // Convert [Price] to number with necessary precision for price formatting.

function priceToPreciseFloat(price) {
  if (!price) return undefined;
  var floatForLargerNumbers = parseFloat(price.toFixed(9));

  if (floatForLargerNumbers < 0.1) {
    return parseFloat(price.toSignificant(6));
  }

  return floatForLargerNumbers;
}
// For USD or USD equivalent denominated values.
function formatDollar(_ref) {
  var num = _ref.num,
      _ref$lessPreciseStabl = _ref.lessPreciseStablecoinValues,
      lessPreciseStablecoinValues = _ref$lessPreciseStabl === void 0 ? false : _ref$lessPreciseStabl;
  if (num === 0) return '$0.00';
  if (!num) return '-';

  if (num < 0.000001) {
    return "$".concat(num.toExponential(2));
  }

  if (num >= 0.000001 && num < 0.1 || num > 1000000) {
    return "$".concat(Number(num).toPrecision(3));
  }

  if (num >= 0.1 && num < (lessPreciseStablecoinValues ? 0.9995 : 1.05)) {
    return "$".concat(num.toFixed(3));
  }

  return "$".concat(Number(num.toFixed(2)).toLocaleString(DEFAULT_LOCALE, {
    minimumFractionDigits: 2
  }));
}
function formatTransactionAmount(num) {
  var maxDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  if (num === 0) return '0.00';
  if (!num) return '';

  if (num < 0.00001) {
    return '<0.00001';
  }

  if (num >= 0.00001 && num < 1) {
    return "".concat(Number(num.toFixed(5)).toLocaleString(DEFAULT_LOCALE, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 5
    }));
  }

  if (num >= 1 && num < 10000) {
    return "".concat(Number(num.toPrecision(6)).toLocaleString(DEFAULT_LOCALE, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }));
  }

  if (num >= 10000 && num < 1000000) {
    return "".concat(Number(num.toFixed(2)).toLocaleString(DEFAULT_LOCALE, {
      minimumFractionDigits: 2
    }));
  } // For very large numbers, switch to scientific notation and show as much precision
  // as permissible by maxDigits param.


  if (num >= Math.pow(10, maxDigits - 1)) {
    return "".concat(num.toExponential(maxDigits - 3));
  }

  return "".concat(Number(num.toFixed(2)).toLocaleString(DEFAULT_LOCALE, {
    minimumFractionDigits: 2
  }));
}

/**
 * Returns currency amount formatted as a human readable string.
 * @param amount currency amount
 * @param isUsdPrice whether the amount is denominated in USD or USD equivalent
 */
function formatCurrencyAmount(_ref) {
  var amount = _ref.amount,
      _ref$isUsdPrice = _ref.isUsdPrice,
      isUsdPrice = _ref$isUsdPrice === void 0 ? false : _ref$isUsdPrice;
  if (!amount) return '';
  var currencyAmountNumber = currencyAmountToPreciseFloat(amount);
  return isUsdPrice ? formatDollar({
    num: currencyAmountNumber
  }) : formatTransactionAmount(currencyAmountNumber);
}
/**
 * Returns price formatted as a human readable string.
 * @param price price
 */

function formatPrice(price) {
  return formatTransactionAmount(priceToPreciseFloat(price));
}

var MIN_NATIVE_CURRENCY_FOR_GAS = JSBI__default["default"].exponentiate(JSBI__default["default"].BigInt(10), JSBI__default["default"].BigInt(16)); // .01 ETH

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */

function maxAmountSpend(currencyAmount) {
  if (!currencyAmount) return undefined;

  if (currencyAmount.currency.isNative) {
    if (JSBI__default["default"].greaterThan(currencyAmount.quotient, MIN_NATIVE_CURRENCY_FOR_GAS)) {
      return sdkCore.CurrencyAmount.fromRawAmount(currencyAmount.currency, JSBI__default["default"].subtract(currencyAmount.quotient, MIN_NATIVE_CURRENCY_FOR_GAS));
    } else {
      return sdkCore.CurrencyAmount.fromRawAmount(currencyAmount.currency, JSBI__default["default"].BigInt(0));
    }
  }

  return currencyAmount;
}

var _templateObject$3;

var _excluded$4 = ["value", "onChange"],
    _excluded2 = ["value", "onChange", "enforcer", "pattern"];

var Input$2 = /*#__PURE__*/_styled__default["default"].input.withConfig({
  displayName: "Input",
  componentId: "sc-1e35ws5-0"
})(["-webkit-appearance:textfield;background-color:transparent;border:none;color:currentColor;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;outline:none;overflow:hidden;padding:0;text-align:left;text-overflow:ellipsis;width:100%;::-webkit-search-decoration{-webkit-appearance:none;}[type='number']{-moz-appearance:textfield;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:", ";}:enabled{transition:color 0.125s linear;}:disabled{-webkit-text-fill-color:", ";color:", ";::placeholder{color:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return polished.transparentize(1 - loadingOpacity, theme.primary);
}, function (_ref3) {
  var theme = _ref3.theme;
  return polished.transparentize(1 - loadingOpacity, theme.primary);
}, function (_ref4) {
  var theme = _ref4.theme;
  return polished.transparentize(1 - loadingOpacity, theme.primary);
});
var StringInput = /*#__PURE__*/React.forwardRef(function StringInput(_ref5, ref) {
  var value = _ref5.value,
      _onChange = _ref5.onChange,
      props = _objectWithoutProperties__default["default"](_ref5, _excluded$4);

  return /*#__PURE__*/React__default["default"].createElement(Input$2, _extends__default["default"]({
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    } // universal input options
    ,
    inputMode: "text",
    autoComplete: "off",
    autoCorrect: "off" // text-specific options
    ,
    type: "text",
    placeholder: props.placeholder || '-',
    minLength: 1,
    spellCheck: "false",
    ref: ref
  }, props));
});
var NumericInput = /*#__PURE__*/React.forwardRef(function NumericInput(_ref6, ref) {
  var value = _ref6.value,
      onChange = _ref6.onChange,
      enforcer = _ref6.enforcer,
      pattern = _ref6.pattern,
      props = _objectWithoutProperties__default["default"](_ref6, _excluded2);

  var validateChange = React.useCallback(function (event) {
    var _enforcer;

    var nextInput = (_enforcer = enforcer(event.target.value.replace(/,/g, '.'))) === null || _enforcer === void 0 ? void 0 : _enforcer.replace(/^0+$/, '0');

    if (nextInput !== undefined) {
      onChange(nextInput);
    }
  }, [enforcer, onChange]);
  return /*#__PURE__*/React__default["default"].createElement(Input$2, _extends__default["default"]({
    value: value,
    onChange: validateChange // universal input options
    ,
    inputMode: "decimal",
    autoComplete: "off",
    autoCorrect: "off" // text-specific options
    ,
    type: "text",
    pattern: pattern,
    placeholder: props.placeholder || '0',
    minLength: 1,
    maxLength: 79,
    spellCheck: "false",
    ref: ref
  }, props));
});
var integerRegexp = /^\d*$/;

var integerEnforcer = function integerEnforcer(nextUserInput) {
  if (nextUserInput === '' || integerRegexp.test(nextUserInput)) {
    var nextInput = parseInt(nextUserInput);
    return isNaN(nextInput) ? '' : nextInput.toString();
  }

  return null;
};

var IntegerInput = /*#__PURE__*/React.forwardRef(function IntegerInput(props, ref) {
  return /*#__PURE__*/React__default["default"].createElement(NumericInput, _extends__default["default"]({
    pattern: "^[0-9]*$",
    enforcer: integerEnforcer,
    ref: ref
  }, props));
});
var decimalRegexp = /^\d*(?:[.])?\d*$/;

var decimalEnforcer = function decimalEnforcer(nextUserInput) {
  if (nextUserInput === '') {
    return '';
  } else if (nextUserInput === '.') {
    return '0.';
  } else if (decimalRegexp.test(nextUserInput)) {
    return nextUserInput;
  }

  return null;
};

var DecimalInput = /*#__PURE__*/React.forwardRef(function DecimalInput(props, ref) {
  return /*#__PURE__*/React__default["default"].createElement(NumericInput, _extends__default["default"]({
    pattern: "^[0-9]*[.,]?[0-9]*$",
    enforcer: decimalEnforcer,
    ref: ref
  }, props));
});
var inputCss = _styled.css(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral__default["default"](["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", "em;\n  cursor: text;\n  padding: calc(0.75em - 1px);\n\n  :hover:not(:focus-within) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :focus-within {\n    border-color: ", ";\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.container;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.container;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.borderRadius;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.onHover(theme.container);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.onHover(theme.container);
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.active;
});

var i = function i(e) {
  return "string" == typeof e;
},
    s = function s(e) {
  return "function" == typeof e;
},
    u = new Map(),
    c = new Map();

function f(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return function (n) {
    if (i(n) && (n = new Date(n)), r) {
      var a = v(e, t),
          o = c.get(a);
      if (o) return o.format(n);
      var l = new Intl.DateTimeFormat(e, t);
      return c.set(a, l), l.format(n);
    }

    var s = new Intl.DateTimeFormat(e, t);
    return s.format(n);
  };
}

function h(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  return function (n) {
    if (r) {
      var a = v(e, t),
          o = u.get(a);
      if (o) return o.format(n);
      var l = new Intl.NumberFormat(e, t);
      return u.set(a, l), l.format(n);
    }

    var i = new Intl.NumberFormat(e, t);
    return i.format(n);
  };
}

function v(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = Array.isArray(e) ? e.sort().join("-") : e;
  return "".concat(r, "-").concat(JSON.stringify(t));
}

var m = Object.freeze({
  __proto__: null,
  date: f,
  number: h
});

function g(e) {
  var t = e.locale,
      r = e.locales,
      n = e.values,
      a = e.formats,
      o = e.localeData,
      u = function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      plurals: void 0
    },
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    t = t || e;

    var a = r.plurals,
        o = function o(e) {
      return i(e) ? n[e] || {
        style: e
      } : e;
    },
        u = function u(e, r) {
      return function (n) {
        var a = s(r) ? r(n) : r,
            o = Array.isArray(a) ? a : [a],
            l = h(t)(e);
        return o.map(function (e) {
          return i(e) ? e.replace("#", l) : e;
        });
      };
    };

    return a || console.error("Plurals for locale ".concat(e, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback.")), {
      plural: function plural(e, t) {
        var r = t.offset,
            n = void 0 === r ? 0 : r,
            o = _objectWithoutProperties__default["default"](t, ["offset"]),
            i = o[e] || o[null == a ? void 0 : a(e - n)] || o.other;
        return u(e - n, i);
      },
      selectordinal: function selectordinal(e, t) {
        var r = t.offset,
            n = void 0 === r ? 0 : r,
            o = _objectWithoutProperties__default["default"](t, ["offset"]),
            i = o[e] || o[null == a ? void 0 : a(e - n, !0)] || o.other;
        return u(e - n, i);
      },
      select: function select(e, t) {
        return t[e] || t.other;
      },
      number: function number(e, r) {
        return h(t, o(r))(e);
      },
      date: function date(e, r) {
        return f(t, o(r))(e);
      },
      undefined: function undefined$1(e) {
        return e;
      }
    };
  }(t, r, o, a);

  return function e(t, r, a) {
    var o = n[t],
        l = u[r](o, a),
        i = s(l) ? l(e) : l;
    return Array.isArray(i) ? i.join("") : i;
  };
}

function d(e, t, r, n) {
  return function (a) {
    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = g({
      locale: t,
      locales: r,
      localeData: n,
      formats: l,
      values: a
    }),
        u = function e(t) {
      return Array.isArray(t) ? t.reduce(function (t, r) {
        if (i(r)) return t + r;
        var n = _slicedToArray__default["default"](r, 3),
            a = n[0],
            l = n[1],
            u = n[2],
            c = {};
        null == u || i(u) ? c = u : Object.keys(u).forEach(function (t) {
          c[t] = e(u[t]);
        });
        var f = s(a, l, c);
        return null == f ? t : t + f;
      }, "") : t;
    },
        c = u(e);

    return i(c) && /\\u[a-fA-F0-9]{4}/g.test(c) ? JSON.parse('"'.concat(c.trim(), '"')) : i(c) ? c.trim() : c;
  };
}

var p = function () {
  function r() {
    _classCallCheck__default["default"](this, r), this._events = {};
  }

  return _createClass__default["default"](r, [{
    key: "on",
    value: function value(e, t) {
      var r = this;
      return this._hasEvent(e) || (this._events[e] = []), this._events[e].push(t), function () {
        return r.removeListener(e, t);
      };
    }
  }, {
    key: "removeListener",
    value: function value(e, t) {
      if (this._hasEvent(e)) {
        var r = this._events[e].indexOf(t);

        ~r && this._events[e].splice(r, 1);
      }
    }
  }, {
    key: "emit",
    value: function value(e) {
      for (var t = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
        n[a - 1] = arguments[a];
      }

      this._hasEvent(e) && this._events[e].map(function (e) {
        return e.apply(t, n);
      });
    }
  }, {
    key: "_hasEvent",
    value: function value(e) {
      return Array.isArray(this._events[e]);
    }
  }]), r;
}();

function y(e) {
  var t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }();

  return function () {
    var r,
        o = _getPrototypeOf__default["default"](e);

    if (t) {
      var l = _getPrototypeOf__default["default"](this).constructor;
      r = Reflect.construct(o, arguments, l);
    } else r = o.apply(this, arguments);

    return _possibleConstructorReturn__default["default"](this, r);
  };
}

var _ = function (n) {
  _inherits__default["default"](o, n);
  var a = y(o);

  function o(t) {
    var r;
    return _classCallCheck__default["default"](this, o), r = a.call(this), r._messages = {}, r._localeData = {}, null != t.missing && (r._missing = t.missing), null != t.messages && r.load(t.messages), null != t.localeData && r.loadLocaleData(t.localeData), null == t.locale && null == t.locales || r.activate(t.locale, t.locales), r;
  }

  return _createClass__default["default"](o, [{
    key: "_loadLocaleData",
    value: function value(e, t) {
      null == this._localeData[e] ? this._localeData[e] = t : Object.assign(this._localeData[e], t);
    }
  }, {
    key: "loadLocaleData",
    value: function value(e, t) {
      var r = this;
      null != t ? this._loadLocaleData(e, t) : Object.keys(e).forEach(function (t) {
        return r._loadLocaleData(t, e[t]);
      }), this.emit("change");
    }
  }, {
    key: "_load",
    value: function value(e, t) {
      null == this._messages[e] ? this._messages[e] = t : Object.assign(this._messages[e], t);
    }
  }, {
    key: "load",
    value: function value(e, t) {
      var r = this;
      null != t ? this._load(e, t) : Object.keys(e).forEach(function (t) {
        return r._load(t, e[t]);
      }), this.emit("change");
    }
  }, {
    key: "activate",
    value: function value(e, t) {
      this._locale = e, this._locales = t, this.emit("change");
    }
  }, {
    key: "_",
    value: function value(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.message,
          a = r.formats;
      i(e) || (t = e.values || t, n = e.message, e = e.id);
      var o = this.messages[e] || n || e,
          l = this._missing;
      return l && !this.messages[e] ? s(l) ? l(this.locale, e) : l : (this.messages[e] || this.emit("missing", {
        id: e,
        locale: this._locale
      }), i(o) && /\\u[a-fA-F0-9]{4}/g.test(o) ? JSON.parse('"'.concat(o, '"')) : i(o) ? o : d(o, this.locale, this.locales, this.localeData)(t, a));
    }
  }, {
    key: "date",
    value: function value(e, t) {
      return f(this.locales || this.locale, t)(e);
    }
  }, {
    key: "number",
    value: function value(e, t) {
      return h(this.locales || this.locale, t)(e);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var e;
      return null !== (e = this._messages[this._locale]) && void 0 !== e ? e : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var e;
      return null !== (e = this._localeData[this._locale]) && void 0 !== e ? e : {};
    }
  }]), o;
}(p);

function b() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return new _(e);
}

var D = b();

/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    "class": function _class(expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any(expectation) {
      return "any character";
    },
    end: function end(expectation) {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = {
    start: peg$parsestart
  },
      peg$startRuleFunction = peg$parsestart,
      peg$c0 = "#",
      peg$c1 = peg$literalExpectation("#", false),
      peg$c2 = function peg$c2() {
    return inPlural[0];
  },
      peg$c3 = function peg$c3() {
    return {
      type: 'octothorpe'
    };
  },
      peg$c4 = function peg$c4(str) {
    return str.join('');
  },
      peg$c5 = "{",
      peg$c6 = peg$literalExpectation("{", false),
      peg$c7 = "}",
      peg$c8 = peg$literalExpectation("}", false),
      peg$c9 = function peg$c9(arg) {
    return {
      type: 'argument',
      arg: arg
    };
  },
      peg$c10 = ",",
      peg$c11 = peg$literalExpectation(",", false),
      peg$c12 = "select",
      peg$c13 = peg$literalExpectation("select", false),
      peg$c14 = function peg$c14(arg, m) {
    if (options.strict) {
      inPlural.unshift(false);
    }

    return m;
  },
      peg$c15 = function peg$c15(arg, cases) {
    if (options.strict) inPlural.shift();
    return {
      type: 'select',
      arg: arg,
      cases: cases
    };
  },
      peg$c16 = "plural",
      peg$c17 = peg$literalExpectation("plural", false),
      peg$c18 = "selectordinal",
      peg$c19 = peg$literalExpectation("selectordinal", false),
      peg$c20 = function peg$c20(arg, m) {
    inPlural.unshift(true);
    return m;
  },
      peg$c21 = function peg$c21(arg, type, offset, cases) {
    var ls = (type === 'selectordinal' ? options.ordinal : options.cardinal) || ['zero', 'one', 'two', 'few', 'many', 'other'];
    if (ls && ls.length) cases.forEach(function (c) {
      if (isNaN(c.key) && ls.indexOf(c.key) < 0) throw new Error('Invalid key `' + c.key + '` for argument `' + arg + '`.' + ' Valid ' + type + ' keys for this locale are `' + ls.join('`, `') + '`, and explicit keys like `=0`.');
    });
    inPlural.shift();
    return {
      type: type,
      arg: arg,
      offset: offset || 0,
      cases: cases
    };
  },
      peg$c22 = function peg$c22(arg, key, param) {
    return {
      type: 'function',
      arg: arg,
      key: key,
      param: param
    };
  },
      peg$c23 = peg$otherExpectation("identifier"),
      peg$c24 = /^[^\t-\r \x85\u200E\u200F\u2028\u2029!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
      peg$c25 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029", ["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["\xA1", "\xA7"], "\xA9", "\xAB", "\xAC", "\xAE", "\xB0", "\xB1", "\xB6", "\xBB", "\xBF", "\xD7", "\xF7", ["\u2010", "\u2027"], ["\u2030", "\u203E"], ["\u2041", "\u2053"], ["\u2055", "\u205E"], ["\u2190", "\u245F"], ["\u2500", "\u2775"], ["\u2794", "\u2BFF"], ["\u2E00", "\u2E7F"], ["\u3001", "\u3003"], ["\u3008", "\u3020"], "\u3030", "\uFD3E", "\uFD3F", "\uFE45", "\uFE46"], true, false),
      peg$c26 = function peg$c26(key, tokens) {
    return {
      key: key,
      tokens: tokens
    };
  },
      peg$c27 = function peg$c27(tokens) {
    return tokens;
  },
      peg$c28 = peg$otherExpectation("plural offset"),
      peg$c29 = "offset",
      peg$c30 = peg$literalExpectation("offset", false),
      peg$c31 = ":",
      peg$c32 = peg$literalExpectation(":", false),
      peg$c33 = function peg$c33(d) {
    return d;
  },
      peg$c34 = "=",
      peg$c35 = peg$literalExpectation("=", false),
      peg$c36 = "number",
      peg$c37 = peg$literalExpectation("number", false),
      peg$c38 = "date",
      peg$c39 = peg$literalExpectation("date", false),
      peg$c40 = "time",
      peg$c41 = peg$literalExpectation("time", false),
      peg$c42 = "spellout",
      peg$c43 = peg$literalExpectation("spellout", false),
      peg$c44 = "ordinal",
      peg$c45 = peg$literalExpectation("ordinal", false),
      peg$c46 = "duration",
      peg$c47 = peg$literalExpectation("duration", false),
      peg$c48 = function peg$c48(key) {
    if (options.strict || /^\d/.test(key)) return false;

    switch (key.toLowerCase()) {
      case 'select':
      case 'plural':
      case 'selectordinal':
        return false;

      default:
        return true;
    }
  },
      peg$c49 = function peg$c49(key) {
    return key;
  },
      peg$c50 = function peg$c50(tokens) {
    return !options.strict;
  },
      peg$c51 = function peg$c51(tokens) {
    return {
      tokens: tokens
    };
  },
      peg$c52 = function peg$c52(parts) {
    return {
      tokens: [parts.join('')]
    };
  },
      peg$c53 = peg$otherExpectation("a valid (strict) function parameter"),
      peg$c54 = /^[^'{}]/,
      peg$c55 = peg$classExpectation(["'", "{", "}"], true, false),
      peg$c56 = function peg$c56(p) {
    return p.join('');
  },
      peg$c57 = "'",
      peg$c58 = peg$literalExpectation("'", false),
      peg$c59 = function peg$c59(quoted) {
    return quoted;
  },
      peg$c60 = function peg$c60(p) {
    return '{' + p.join('') + '}';
  },
      peg$c61 = peg$otherExpectation("doubled apostrophe"),
      peg$c62 = "''",
      peg$c63 = peg$literalExpectation("''", false),
      peg$c64 = function peg$c64() {
    return "'";
  },
      peg$c65 = /^[^']/,
      peg$c66 = peg$classExpectation(["'"], true, false),
      peg$c67 = "'{",
      peg$c68 = peg$literalExpectation("'{", false),
      peg$c69 = function peg$c69(str) {
    return "{" + str.join('');
  },
      peg$c70 = "'}",
      peg$c71 = peg$literalExpectation("'}", false),
      peg$c72 = function peg$c72(str) {
    return "}" + str.join('');
  },
      peg$c73 = peg$otherExpectation("escaped string"),
      peg$c74 = "'#",
      peg$c75 = peg$literalExpectation("'#", false),
      peg$c76 = function peg$c76(str) {
    return "#" + str.join('');
  },
      peg$c77 = function peg$c77(quotedOcto) {
    return quotedOcto[0];
  },
      peg$c78 = peg$otherExpectation("plain char"),
      peg$c79 = /^[^{}#\0-\x08\x0E-\x1F\x7F]/,
      peg$c80 = peg$classExpectation(["{", "}", "#", ["\0", "\b"], ["\x0E", "\x1F"], "\x7F"], true, false),
      peg$c81 = function peg$c81(octo) {
    return !inPlural[0];
  },
      peg$c82 = function peg$c82(octo) {
    return octo;
  },
      peg$c83 = peg$otherExpectation("integer"),
      peg$c84 = /^[0-9]/,
      peg$c85 = peg$classExpectation([["0", "9"]], false, false),
      peg$c86 = peg$otherExpectation("white space"),
      peg$c87 = /^[\t-\r \x85\u200E\u200F\u2028\u2029]/,
      peg$c88 = peg$classExpectation([["\t", "\r"], " ", "\x85", "\u200E", "\u200F", "\u2028", "\u2029"], false, false),
      peg$currPos = 0,
      peg$posDetailsCache = [{
    line: 1,
    column: 1
  }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parsestart() {
    var s0, s1;
    s0 = [];
    s1 = peg$parsetoken();

    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parsetoken();
    }

    return s0;
  }

  function peg$parsetoken() {
    var s0, s1, s2;
    s0 = peg$parseargument();

    if (s0 === peg$FAILED) {
      s0 = peg$parseselect();

      if (s0 === peg$FAILED) {
        s0 = peg$parseplural();

        if (s0 === peg$FAILED) {
          s0 = peg$parsefunction();

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;

            if (input.charCodeAt(peg$currPos) === 35) {
              s1 = peg$c0;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c1);
              }
            }

            if (s1 !== peg$FAILED) {
              s2 = peg$c2();

              if (s2) {
                s2 = void 0;
              } else {
                s2 = peg$FAILED;
              }

              if (s2 !== peg$FAILED) {
                s1 = peg$c3();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }

            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = [];
              s2 = peg$parsechar();

              if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                  s1.push(s2);
                  s2 = peg$parsechar();
                }
              } else {
                s1 = peg$FAILED;
              }

              if (s1 !== peg$FAILED) {
                s1 = peg$c4(s1);
              }

              s0 = s1;
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseargument() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }

            if (s5 !== peg$FAILED) {
              s1 = peg$c9(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseselect() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;

                if (input.substr(peg$currPos, 6) === peg$c12) {
                  s8 = peg$c12;
                  peg$currPos += 6;
                } else {
                  s8 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }

                if (s8 !== peg$FAILED) {
                  s8 = peg$c14(s3, s8);
                }

                s7 = s8;

                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();

                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c10;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c11);
                      }
                    }

                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();

                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parseselectCase();

                        if (s12 !== peg$FAILED) {
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parseselectCase();
                          }
                        } else {
                          s11 = peg$FAILED;
                        }

                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse_();

                          if (s12 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s13 = peg$c7;
                              peg$currPos++;
                            } else {
                              s13 = peg$FAILED;

                              if (peg$silentFails === 0) {
                                peg$fail(peg$c8);
                              }
                            }

                            if (s13 !== peg$FAILED) {
                              s1 = peg$c15(s3, s11);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseplural() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;

                if (input.substr(peg$currPos, 6) === peg$c16) {
                  s8 = peg$c16;
                  peg$currPos += 6;
                } else {
                  s8 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c17);
                  }
                }

                if (s8 === peg$FAILED) {
                  if (input.substr(peg$currPos, 13) === peg$c18) {
                    s8 = peg$c18;
                    peg$currPos += 13;
                  } else {
                    s8 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c19);
                    }
                  }
                }

                if (s8 !== peg$FAILED) {
                  s8 = peg$c20(s3, s8);
                }

                s7 = s8;

                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();

                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c10;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c11);
                      }
                    }

                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();

                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseoffset();

                        if (s11 === peg$FAILED) {
                          s11 = null;
                        }

                        if (s11 !== peg$FAILED) {
                          s12 = [];
                          s13 = peg$parsepluralCase();

                          if (s13 !== peg$FAILED) {
                            while (s13 !== peg$FAILED) {
                              s12.push(s13);
                              s13 = peg$parsepluralCase();
                            }
                          } else {
                            s12 = peg$FAILED;
                          }

                          if (s12 !== peg$FAILED) {
                            s13 = peg$parse_();

                            if (s13 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 125) {
                                s14 = peg$c7;
                                peg$currPos++;
                              } else {
                                s14 = peg$FAILED;

                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c8);
                                }
                              }

                              if (s14 !== peg$FAILED) {
                                s1 = peg$c21(s3, s7, s11, s12);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefunction() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseid();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c10;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c11);
              }
            }

            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();

              if (s6 !== peg$FAILED) {
                s7 = peg$parsefunctionKey();

                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();

                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsefunctionParam();

                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }

                    if (s9 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 125) {
                        s10 = peg$c7;
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;

                        if (peg$silentFails === 0) {
                          peg$fail(peg$c8);
                        }
                      }

                      if (s10 !== peg$FAILED) {
                        s1 = peg$c22(s3, s7, s9);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseid() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c24.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c25);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c24.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c25);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }

    return s0;
  }

  function peg$parseselectCase() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseid();

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsecaseTokens();

          if (s4 !== peg$FAILED) {
            s1 = peg$c26(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsepluralCase() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsepluralKey();

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          s4 = peg$parsecaseTokens();

          if (s4 !== peg$FAILED) {
            s1 = peg$c26(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecaseTokens() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c6);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parse_();

      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;

        if (input.charCodeAt(peg$currPos) === 123) {
          s5 = peg$c5;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c6);
          }
        }

        peg$silentFails--;

        if (s5 !== peg$FAILED) {
          peg$currPos = s4;
          s4 = void 0;
        } else {
          s4 = peg$FAILED;
        }

        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsetoken();

        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsetoken();
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();

          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c7;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c8);
              }
            }

            if (s5 !== peg$FAILED) {
              s1 = peg$c27(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseoffset() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6) === peg$c29) {
        s2 = peg$c29;
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c30);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s4 = peg$c31;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c32);
            }
          }

          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();

            if (s5 !== peg$FAILED) {
              s6 = peg$parsedigits();

              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();

                if (s7 !== peg$FAILED) {
                  s1 = peg$c33(s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c28);
      }
    }

    return s0;
  }

  function peg$parsepluralKey() {
    var s0, s1, s2;
    s0 = peg$parseid();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c34;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c35);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parsedigits();

        if (s2 !== peg$FAILED) {
          s1 = peg$c33(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsefunctionKey() {
    var s0, s1, s2, s3, s4, s5;

    if (input.substr(peg$currPos, 6) === peg$c36) {
      s0 = peg$c36;
      peg$currPos += 6;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c37);
      }
    }

    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c38) {
        s0 = peg$c38;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c39);
        }
      }

      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c40) {
          s0 = peg$c40;
          peg$currPos += 4;
        } else {
          s0 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c41);
          }
        }

        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 8) === peg$c42) {
            s0 = peg$c42;
            peg$currPos += 8;
          } else {
            s0 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c43);
            }
          }

          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 7) === peg$c44) {
              s0 = peg$c44;
              peg$currPos += 7;
            } else {
              s0 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c45);
              }
            }

            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 8) === peg$c46) {
                s0 = peg$c46;
                peg$currPos += 8;
              } else {
                s0 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c47);
                }
              }

              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$currPos;
                peg$silentFails++;

                if (input.substr(peg$currPos, 6) === peg$c12) {
                  s2 = peg$c12;
                  peg$currPos += 6;
                } else {
                  s2 = peg$FAILED;

                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }

                peg$silentFails--;

                if (s2 === peg$FAILED) {
                  s1 = void 0;
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }

                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  peg$silentFails++;

                  if (input.substr(peg$currPos, 6) === peg$c16) {
                    s3 = peg$c16;
                    peg$currPos += 6;
                  } else {
                    s3 = peg$FAILED;

                    if (peg$silentFails === 0) {
                      peg$fail(peg$c17);
                    }
                  }

                  peg$silentFails--;

                  if (s3 === peg$FAILED) {
                    s2 = void 0;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }

                  if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    peg$silentFails++;

                    if (input.substr(peg$currPos, 13) === peg$c18) {
                      s4 = peg$c18;
                      peg$currPos += 13;
                    } else {
                      s4 = peg$FAILED;

                      if (peg$silentFails === 0) {
                        peg$fail(peg$c19);
                      }
                    }

                    peg$silentFails--;

                    if (s4 === peg$FAILED) {
                      s3 = void 0;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }

                    if (s3 !== peg$FAILED) {
                      s4 = peg$parseid();

                      if (s4 !== peg$FAILED) {
                        s5 = peg$c48(s4);

                        if (s5) {
                          s5 = void 0;
                        } else {
                          s5 = peg$FAILED;
                        }

                        if (s5 !== peg$FAILED) {
                          s1 = peg$c49(s4);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsefunctionParam() {
    var s0, s1, s2, s3, s4;
    s0 = peg$currPos;
    s1 = peg$parse_();

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 44) {
        s2 = peg$c10;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }

      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsetoken();

        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsetoken();
        }

        if (s3 !== peg$FAILED) {
          s4 = peg$c50();

          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s1 = peg$c51(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parse_();

      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c10;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c11);
          }
        }

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsestrictFunctionParamPart();

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsestrictFunctionParamPart();
          }

          if (s3 !== peg$FAILED) {
            s1 = peg$c52(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsestrictFunctionParamPart() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c54.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c55);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c54.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c55);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s1 = peg$c56(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$parsedoubleapos();

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c57;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseinapos();

          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c57;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c58);
              }
            }

            if (s3 !== peg$FAILED) {
              s1 = peg$c59(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c5;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c6);
            }
          }

          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsestrictFunctionParamPart();

            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsestrictFunctionParamPart();
            }

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s3 = peg$c7;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;

                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }

              if (s3 !== peg$FAILED) {
                s1 = peg$c60(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c53);
      }
    }

    return s0;
  }

  function peg$parsedoubleapos() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c62) {
      s1 = peg$c62;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c63);
      }
    }

    if (s1 !== peg$FAILED) {
      s1 = peg$c64();
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c61);
      }
    }

    return s0;
  }

  function peg$parseinapos() {
    var s0, s1, s2;
    s0 = peg$parsedoubleapos();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];

      if (peg$c65.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c66);
        }
      }

      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);

          if (peg$c65.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c66);
            }
          }
        }
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s1 = peg$c4(s1);
      }

      s0 = s1;
    }

    return s0;
  }

  function peg$parsequotedCurly() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;

    if (input.substr(peg$currPos, 2) === peg$c67) {
      s1 = peg$c67;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c68);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseinapos();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseinapos();
      }

      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c57;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }

        if (s3 !== peg$FAILED) {
          s1 = peg$c69(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c70) {
        s1 = peg$c70;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c71);
        }
      }

      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parseinapos();

        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseinapos();
        }

        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s3 = peg$c57;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }

          if (s3 !== peg$FAILED) {
            s1 = peg$c72(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsequoted() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$parsequotedCurly();

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;

      if (input.substr(peg$currPos, 2) === peg$c74) {
        s3 = peg$c74;
        peg$currPos += 2;
      } else {
        s3 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c75);
        }
      }

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parseinapos();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseinapos();
        }

        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s5 = peg$c57;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c58);
            }
          }

          if (s5 !== peg$FAILED) {
            s3 = peg$c76(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$c2();

        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s1 = peg$c77(s1);
      }

      s0 = s1;

      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s0 = peg$c57;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c73);
      }
    }

    return s0;
  }

  function peg$parseplainChar() {
    var s0;
    peg$silentFails++;

    if (peg$c79.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c80);
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {

      if (peg$silentFails === 0) {
        peg$fail(peg$c78);
      }
    }

    return s0;
  }

  function peg$parsechar() {
    var s0, s1, s2;
    s0 = peg$parsedoubleapos();

    if (s0 === peg$FAILED) {
      s0 = peg$parsequoted();

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c0;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c1);
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$c81();

          if (s2) {
            s2 = void 0;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            s1 = peg$c82(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$parseplainChar();
        }
      }
    }

    return s0;
  }

  function peg$parsedigits() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c84.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c85);
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);

        if (peg$c84.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c85);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c83);
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];

    if (peg$c87.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c88);
      }
    }

    while (s2 !== peg$FAILED) {
      s1.push(s2);

      if (peg$c87.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c88);
        }
      }
    }

    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c86);
      }
    }

    return s0;
  }

  var inPlural = [false];
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

var parser = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

var isString = function isString(s) {
  return typeof s === "string";
};

var isFunction = function isFunction(f) {
  return typeof f === "function";
};
/** Memoized cache */


var numberFormats = new Map();
var dateFormats = new Map();

function date(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (isString(value)) value = new Date(value);

    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = dateFormats.get(key);

      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }

      var _formatter = new Intl.DateTimeFormat(locales, format);

      dateFormats.set(key, _formatter);
      return _formatter.format(value);
    }

    var formatter = new Intl.DateTimeFormat(locales, format);
    return formatter.format(value);
  };
}

function number(locales) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var memoize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (value) {
    if (memoize) {
      var key = cacheKey(locales, format);
      var cachedFormatter = numberFormats.get(key);

      if (cachedFormatter) {
        return cachedFormatter.format(value);
      }

      var _formatter2 = new Intl.NumberFormat(locales, format);

      numberFormats.set(key, _formatter2);
      return _formatter2.format(value);
    }

    var formatter = new Intl.NumberFormat(locales, format);
    return formatter.format(value);
  };
}
/** Memoize helpers */


function cacheKey(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeKey = Array.isArray(locales) ? locales.sort().join('-') : locales;
  return "".concat(localeKey, "-").concat(JSON.stringify(options));
}

var formats = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  number: number
});

var defaultFormats = function defaultFormats(locale, locales) {
  var localeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    plurals: undefined
  };
  var formats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  locales = locales || locale;
  var plurals = localeData.plurals;

  var style = function style(format) {
    return isString(format) ? formats[format] || {
      style: format
    } : format;
  };

  var replaceOctothorpe = function replaceOctothorpe(value, message) {
    return function (ctx) {
      var msg = isFunction(message) ? message(ctx) : message;
      var norm = Array.isArray(msg) ? msg : [msg];
      var valueStr = number(locales)(value);
      return norm.map(function (m) {
        return isString(m) ? m.replace("#", valueStr) : m;
      });
    };
  };

  if (!plurals) {
    console.error("Plurals for locale ".concat(locale, " aren't loaded. Use i18n.loadLocaleData method to load plurals for specific locale. Using other plural rule as a fallback."));
  }

  return {
    plural: function plural(value, _ref) {
      var _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? 0 : _ref$offset,
          rules = _objectWithoutProperties__default["default"](_ref, ["offset"]);

      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    selectordinal: function selectordinal(value, _ref2) {
      var _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          rules = _objectWithoutProperties__default["default"](_ref2, ["offset"]);

      var message = rules[value] || rules[plurals === null || plurals === void 0 ? void 0 : plurals(value - offset, true)] || rules.other;
      return replaceOctothorpe(value - offset, message);
    },
    select: function select(value, rules) {
      return rules[value] || rules.other;
    },
    number: function number$1(value, format) {
      return number(locales, style(format))(value);
    },
    date: function date$1(value, format) {
      return date(locales, style(format))(value);
    },
    undefined: function undefined$1(value) {
      return value;
    }
  };
}; // Params -> CTX

/**
 * Creates a context object, which formats ICU MessageFormat arguments based on
 * argument type.
 *
 * @param locale     - Locale of message
 * @param locales      - Locales to be used when formatting the numbers or dates
 * @param values       - Parameters for variable interpolation
 * @param localeData - Locale data (e.g: plurals)
 * @param formats - Custom format styles
 * @returns {function(string, string, any)}
 */


function context(_ref3) {
  var locale = _ref3.locale,
      locales = _ref3.locales,
      values = _ref3.values,
      formats = _ref3.formats,
      localeData = _ref3.localeData;
  var formatters = defaultFormats(locale, locales, localeData, formats);

  var ctx = function ctx(name, type, format) {
    var value = values[name];
    var formatted = formatters[type](value, format);
    var message = isFunction(formatted) ? formatted(ctx) : formatted;
    return Array.isArray(message) ? message.join("") : message;
  };

  return ctx;
}

function interpolate(translation, locale, locales, localeData) {
  return function (values) {
    var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var ctx = context({
      locale: locale,
      locales: locales,
      localeData: localeData,
      formats: formats,
      values: values
    });

    var formatMessage = function formatMessage(message) {
      if (!Array.isArray(message)) return message;
      return message.reduce(function (message, token) {
        if (isString(token)) return message + token;

        var _token = _slicedToArray__default["default"](token, 3),
            name = _token[0],
            type = _token[1],
            format = _token[2];

        var interpolatedFormat = {};

        if (format != null && !isString(format)) {
          Object.keys(format).forEach(function (key) {
            interpolatedFormat[key] = formatMessage(format[key]);
          });
        } else {
          interpolatedFormat = format;
        }

        var value = ctx(name, type, interpolatedFormat);
        if (value == null) return message;
        return message + value;
      }, "");
    };

    var result = formatMessage(translation);
    if (isString(result) && /\\u[a-fA-F0-9]{4}/g.test(result)) return JSON.parse("\"".concat(result.trim(), "\""));
    if (isString(result)) return result.trim();
    return result;
  };
}

function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$7(Object(source), true).forEach(function (key) {
        _defineProperty__default["default"](target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function processTokens(tokens) {
  if (!tokens.filter(function (token) {
    return !isString(token);
  }).length) {
    return tokens.join("");
  }

  return tokens.map(function (token) {
    if (isString(token)) {
      return token; // # in plural case
    } else if (token.type === "octothorpe") {
      return "#"; // simple argument
    } else if (token.type === "argument") {
      return [token.arg]; // argument with custom format (date, number)
    } else if (token.type === "function") {
      var _param = token.param && token.param.tokens[0];

      var param = typeof _param === "string" ? _param.trim() : _param;
      return [token.arg, token.key, param].filter(Boolean);
    }

    var offset = token.offset ? parseInt(token.offset) : undefined; // complex argument with cases

    var formatProps = {};
    token.cases.forEach(function (item) {
      formatProps[item.key] = processTokens(item.tokens);
    });
    return [token.arg, token.type, _objectSpread$7({
      offset: offset
    }, formatProps)];
  });
} // Message -> (Params -> String)


function compile(message) {
  try {
    return processTokens(parser.parse(message));
  } catch (e) {
    console.error("Message cannot be parsed due to syntax errors: ".concat(message));
    return message;
  }
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck__default["default"](this, EventEmitter);

    this._events = {};
  }

  _createClass__default["default"](EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      var _this = this;

      if (!this._hasEvent(event)) this._events[event] = [];

      this._events[event].push(listener);

      return function () {
        return _this.removeListener(event, listener);
      };
    }
  }, {
    key: "removeListener",
    value: function removeListener(event, listener) {
      if (!this._hasEvent(event)) return;

      var index = this._events[event].indexOf(listener);

      if (~index) this._events[event].splice(index, 1);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this2 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!this._hasEvent(event)) return;

      this._events[event].map(function (listener) {
        return listener.apply(_this2, args);
      });
    }
  }, {
    key: "_hasEvent",
    value: function _hasEvent(event) {
      return Array.isArray(this._events[event]);
    }
  }]);

  return EventEmitter;
}();

function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf__default["default"](Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf__default["default"](this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn__default["default"](this, result);
  };
}

function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var I18n = /*#__PURE__*/function (_EventEmitter) {
  _inherits__default["default"](I18n, _EventEmitter);

  var _super = _createSuper$3(I18n);

  function I18n(params) {
    var _this;

    _classCallCheck__default["default"](this, I18n);

    _this = _super.call(this);
    _this._messages = {};
    _this._localeData = {};
    if (params.missing != null) _this._missing = params.missing;
    if (params.messages != null) _this.load(params.messages);
    if (params.localeData != null) _this.loadLocaleData(params.localeData);

    if (params.locale != null || params.locales != null) {
      _this.activate(params.locale, params.locales);
    }

    return _this;
  }

  _createClass__default["default"](I18n, [{
    key: "_loadLocaleData",
    value: function _loadLocaleData(locale, localeData) {
      if (this._localeData[locale] == null) {
        this._localeData[locale] = localeData;
      } else {
        Object.assign(this._localeData[locale], localeData);
      }
    }
  }, {
    key: "loadLocaleData",
    value: function loadLocaleData(localeOrAllData, localeData) {
      var _this2 = this;

      if (localeData != null) {
        // loadLocaleData('en', enLocaleData)
        // Loading locale data for a single locale.
        this._loadLocaleData(localeOrAllData, localeData);
      } else {
        // loadLocaleData(allLocaleData)
        // Loading all locale data at once.
        Object.keys(localeOrAllData).forEach(function (locale) {
          return _this2._loadLocaleData(locale, localeOrAllData[locale]);
        });
      }

      this.emit("change");
    }
  }, {
    key: "_load",
    value: function _load(locale, messages) {
      if (this._messages[locale] == null) {
        this._messages[locale] = messages;
      } else {
        Object.assign(this._messages[locale], messages);
      }
    }
  }, {
    key: "load",
    value: function load(localeOrMessages, messages) {
      var _this3 = this;

      if (messages != null) {
        // load('en', catalog)
        // Loading a catalog for a single locale.
        this._load(localeOrMessages, messages);
      } else {
        // load(catalogs)
        // Loading several locales at once.
        Object.keys(localeOrMessages).forEach(function (locale) {
          return _this3._load(locale, localeOrMessages[locale]);
        });
      }

      this.emit("change");
    }
  }, {
    key: "activate",
    value: function activate(locale, locales) {
      {
        if (!this._messages[locale]) {
          console.warn("Messages for locale \"".concat(locale, "\" not loaded."));
        }

        if (!this._localeData[locale]) {
          console.warn("Locale data for locale \"".concat(locale, "\" not loaded. Plurals won't work correctly."));
        }
      }
      this._locale = locale;
      this._locales = locales;
      this.emit("change");
    } // method for translation and formatting

  }, {
    key: "_",
    value: function _(id) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          message = _ref.message,
          formats = _ref.formats;

      if (!isString(id)) {
        values = id.values || values;
        message = id.message;
        id = id.id;
      }

      var translation = this.messages[id] || message || id; // replace missing messages with custom message for debugging

      var missing = this._missing;

      if (missing && !this.messages[id]) {
        return isFunction(missing) ? missing(this.locale, id) : missing;
      }

      if (!this.messages[id]) {
        this.emit("missing", {
          id: id,
          locale: this._locale
        });
      }

      {
        translation = isString(translation) ? compile(translation) : translation;
      } // hack for parsing unicode values inside a string to get parsed in react native environments

      if (isString(translation) && /\\u[a-fA-F0-9]{4}/g.test(translation)) return JSON.parse("\"".concat(translation, "\""));
      if (isString(translation)) return translation;
      return interpolate(translation, this.locale, this.locales, this.localeData)(values, formats);
    }
  }, {
    key: "date",
    value: function date$1(value, format) {
      return date(this.locales || this.locale, format)(value);
    }
  }, {
    key: "number",
    value: function number$1(value, format) {
      return number(this.locales || this.locale, format)(value);
    }
  }, {
    key: "locale",
    get: function get() {
      return this._locale;
    }
  }, {
    key: "locales",
    get: function get() {
      return this._locales;
    }
  }, {
    key: "messages",
    get: function get() {
      var _this$_messages$this$;

      return (_this$_messages$this$ = this._messages[this._locale]) !== null && _this$_messages$this$ !== void 0 ? _this$_messages$this$ : {};
    }
  }, {
    key: "localeData",
    get: function get() {
      var _this$_localeData$thi;

      return (_this$_localeData$thi = this._localeData[this._locale]) !== null && _this$_localeData$thi !== void 0 ? _this$_localeData$thi : {};
    }
  }]);

  return I18n;
}(EventEmitter);

function setupI18n() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new I18n(params);
}

var i18n$1 = setupI18n();

var i18n = process.env.NODE_ENV === 'production' ? D : i18n$1;
process.env.NODE_ENV === 'production' ? b : setupI18n;
process.env.NODE_ENV === 'production' ? m : formats;
process.env.NODE_ENV === 'production' ? _ : I18n;

var HelpCircleIcon = /*#__PURE__*/_styled__default["default"](HelpCircle).withConfig({
  displayName: "NoTokensAvailableOnNetwork__HelpCircleIcon",
  componentId: "sc-1xm8b8y-0"
})(["height:4em;margin-bottom:0.75em;stroke:", ";width:4em;"], function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
});

var StyledColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "NoTokensAvailableOnNetwork__StyledColumn",
  componentId: "sc-1xm8b8y-1"
})(["display:flex;height:80%;text-align:center;width:100%;"]);

function NoTokensAvailableOnNetwork() {
  return /*#__PURE__*/React__default["default"].createElement(StyledColumn, {
    align: "center",
    justify: "center"
  }, /*#__PURE__*/React__default["default"].createElement(HelpCircleIcon, null), /*#__PURE__*/React__default["default"].createElement(Body1, {
    color: "primary"
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "No tokens are available on this network. Please switch to another network."
  })));
}

var _excluded$3 = ["token", "size"];
var badSrcs = new Set();

var MissingTokenImg = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenImg__MissingTokenImg",
  componentId: "sc-1r1qqs2-0"
})(["align-items:center;background-color:", ";border-radius:100%;display:flex;justify-content:center;"], function (_ref) {
  var theme = _ref.theme;
  return theme.container;
});

var MissingTokenSymbol = /*#__PURE__*/_styled__default["default"].span.withConfig({
  displayName: "TokenImg__MissingTokenSymbol",
  componentId: "sc-1r1qqs2-1"
})(["color:", ";font-size:", "em;font-weight:500;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var size = _ref3.size;
  return (size || 1) * (7 / 20);
});

function TokenImg(_ref4) {
  var _useToken;

  var token = _ref4.token,
      size = _ref4.size,
      rest = _objectWithoutProperties__default["default"](_ref4, _excluded$3);

  // Use the wrapped token info so that it includes the logoURI...
  var currency = (_useToken = useToken(token.isToken ? token.wrapped.address : undefined)) !== null && _useToken !== void 0 ? _useToken : token; // ..but use the token directly if logoURI was included in its specification.

  var srcs = useCurrencyLogoURIs(token !== null && token !== void 0 && token.logoURI ? token : currency);
  var alt = currency.name || currency.symbol;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      attempt = _useState2[0],
      setAttempt = _useState2[1];

  var src = React.useMemo(function () {
    return srcs.find(function (src) {
      return !badSrcs.has(src);
    });
  }, [attempt, srcs]);
  var onError = React.useCallback(function (e) {
    if (src) badSrcs.add(src);
    setAttempt(function (attempt) {
      return ++attempt;
    });
  }, [src]);

  if (!src) {
    var _currency$symbol;

    return /*#__PURE__*/React__default["default"].createElement(MissingTokenImg, rest, /*#__PURE__*/React__default["default"].createElement(MissingTokenSymbol, {
      size: size
    }, (_currency$symbol = currency.symbol) === null || _currency$symbol === void 0 ? void 0 : _currency$symbol.toUpperCase().replace('$', '').replace(/\s+/g, '').slice(0, 3)));
  }

  return /*#__PURE__*/React__default["default"].createElement("img", _extends__default["default"]({
    src: src,
    alt: alt,
    key: alt,
    onError: onError
  }, rest));
}

var TokenImg$1 = _styled__default["default"](TokenImg).withConfig({
  displayName: "TokenImg",
  componentId: "sc-1r1qqs2-2"
})(["background:radial-gradient( ", " calc(100% / ", " - 1.5px),", " calc(100% / ", " - 1.5px) );border-radius:100%;height:", "em;width:", "em;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.module;
}, Math.sqrt(2), function (_ref6) {
  var theme = _ref6.theme;
  return theme.outline;
}, Math.sqrt(2), function (_ref7) {
  var size = _ref7.size;
  return size || 1;
}, function (_ref8) {
  var size = _ref8.size;
  return size || 1;
});

var StyledTokenButton = /*#__PURE__*/_styled__default["default"](Button$1).withConfig({
  displayName: "TokenButton__StyledTokenButton",
  componentId: "sc-1u7emor-0"
})(["border-radius:", "em;padding:0.25em;:enabled{transition:none;}", "{filter:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderRadius;
}, TokenImg$1, function (_ref2) {
  var approved = _ref2.approved;
  return approved === false && 'grayscale(1)';
});

var TokenButtonRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "TokenButton__TokenButtonRow",
  componentId: "sc-1u7emor-1"
})(["flex-direction:row;height:1.2em;max-width:12em;overflow:hidden;padding-left:", "em;width:max-content;img{min-width:1.2em;}"], function (_ref3) {
  var empty = _ref3.empty;
  return empty && 0.5;
});

function TokenButton$1(_ref4) {
  var value = _ref4.value,
      approved = _ref4.approved,
      disabled = _ref4.disabled,
      onClick = _ref4.onClick;
  return /*#__PURE__*/React__default["default"].createElement(StyledTokenButton, {
    onClick: onClick,
    color: value ? 'interactive' : 'accent',
    approved: approved,
    disabled: disabled,
    "data-testid": "token-select"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonLarge, {
    color: value ? 'currentColor' : 'onAccent'
  }, /*#__PURE__*/React__default["default"].createElement(TokenButtonRow, {
    empty: !value,
    flex: true,
    gap: 0.4
  }, value ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: value,
    size: 1.2
  }), /*#__PURE__*/React__default["default"].createElement("span", null, value.symbol)) : /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Select a token"
  }), /*#__PURE__*/React__default["default"].createElement(ChevronDown, {
    strokeWidth: 2
  }))));
}

function useNativeEvent(element, type, listener, options) {
  React.useEffect(function () {
    element === null || element === void 0 ? void 0 : element.addEventListener(type, listener, options);
    return function () {
      return element === null || element === void 0 ? void 0 : element.removeEventListener(type, listener, options);
    };
  }, [element, type, listener, options]);
}

var overflowCss = /*#__PURE__*/_styled.css(["overflow-y:scroll;"]);
/** Customizes the scrollbar for vertical overflow. */


var scrollbarCss = function scrollbarCss(padded) {
  return _styled.css(["overflow-y:scroll;::-webkit-scrollbar{width:1.25em;}::-webkit-scrollbar-thumb{background:radial-gradient( closest-corner at 0.25em 0.25em,", " 0.25em,transparent 0.25em ),linear-gradient( to bottom,#ffffff00 0.25em,", " 0.25em,", " calc(100% - 0.25em),#ffffff00 calc(100% - 0.25em) ),radial-gradient( closest-corner at 0.25em calc(100% - 0.25em),", " 0.25em,#ffffff00 0.25em );background-clip:padding-box;border:none;", ":0.75em solid transparent;}@supports not selector(::-webkit-scrollbar-thumb){scrollbar-color:", " transparent;}"], function (_ref) {
    var theme = _ref.theme;
    return theme.interactive;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.interactive;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.interactive;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.interactive;
  }, padded ? 'border-right' : 'border-left', function (_ref5) {
    var theme = _ref5.theme;
    return theme.interactive;
  });
};

function useScrollbar(element) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$padded = _ref6.padded,
      padded = _ref6$padded === void 0 ? false : _ref6$padded;

  return React.useMemo( // NB: The css must be applied on an element's first render. WebKit will not re-apply overflow
  // properties until any transitions have ended, so waiting a frame for state would cause jank.
  function () {
    return hasOverflow(element) ? scrollbarCss(padded) : overflowCss;
  }, [element, padded]);

  function hasOverflow(element) {
    if (!element) return true;
    return element.scrollHeight > element.clientHeight;
  }
}

function currencyId(currency) {
  if (currency.isNative) return 'ETH';
  if (currency.isToken) return currency.address;
  throw new Error('invalid currency');
}

var TokenButton = /*#__PURE__*/_styled__default["default"](BaseButton).withConfig({
  displayName: "TokenOptions__TokenButton",
  componentId: "sc-xx1k3q-0"
})(["border-radius:0;outline:none;padding:0.5em 0.75em;"]);

var ITEM_SIZE = 56;

var TokenList = /*#__PURE__*/_styled__default["default"](reactWindow.FixedSizeList).withConfig({
  displayName: "TokenOptions__TokenList",
  componentId: "sc-xx1k3q-1"
})(["", "[data-index='", "']{background-color:", ";}", " overscroll-behavior:none;"], TokenButton, function (_ref) {
  var hover = _ref.hover;
  return hover;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.onHover(theme.module);
}, function (_ref3) {
  var scrollbar = _ref3.scrollbar;
  return scrollbar;
});

var OnHover = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptions__OnHover",
  componentId: "sc-xx1k3q-2"
})(["background-color:", ";height:", "px;left:0;position:absolute;top:", "px;width:0%;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.onHover(theme.module);
}, ITEM_SIZE, function (_ref5) {
  var hover = _ref5.hover;
  return hover * ITEM_SIZE;
});

var TokenBalance = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptions__TokenBalance",
  componentId: "sc-xx1k3q-3"
})(["background-color:", ";border-radius:0.25em;padding:0.375em 0;"], function (_ref6) {
  var theme = _ref6.theme,
      isLoading = _ref6.isLoading;
  return isLoading && theme.secondary;
});

function TokenOption$1(_ref7) {
  var index = _ref7.index,
      value = _ref7.value,
      style = _ref7.style;
  var ref = React.useRef(null); // Annotate the event to be handled later instead of passing in handlers to avoid rerenders.
  // This prevents token logos from reloading and flashing on the screen.

  var onEvent = function onEvent(e) {
    var _ref$current;

    e.index = index;
    e.token = value;
    e.ref = (_ref$current = ref.current) !== null && _ref$current !== void 0 ? _ref$current : undefined;
  };

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var balance = useCurrencyBalance(account, value);
  return /*#__PURE__*/React__default["default"].createElement(TokenButton, {
    "data-index": index,
    style: style,
    onClick: onEvent,
    onBlur: onEvent,
    onFocus: onEvent,
    onMouseMove: onEvent,
    onKeyDown: onEvent,
    ref: ref
  }, /*#__PURE__*/React__default["default"].createElement(Body1, null, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: value,
    size: 1.5
  }), /*#__PURE__*/React__default["default"].createElement(Column, {
    flex: true,
    gap: 0.125,
    align: "flex-start"
  }, /*#__PURE__*/React__default["default"].createElement(Subhead1, null, value.symbol), /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    color: "secondary"
  }, value.name))), /*#__PURE__*/React__default["default"].createElement(TokenBalance, {
    isLoading: Boolean(account) && !balance
  }, (balance === null || balance === void 0 ? void 0 : balance.greaterThan(0)) && formatCurrencyAmount({
    amount: balance
  })))));
}

var itemKey = function itemKey(index, tokens) {
  return currencyId(tokens[index]);
};

var ItemRow = /*#__PURE__*/React.memo(function ItemRow(_ref8) {
  var tokens = _ref8.data,
      index = _ref8.index,
      style = _ref8.style;
  return /*#__PURE__*/React__default["default"].createElement(TokenOption$1, {
    index: index,
    value: tokens[index],
    style: style
  });
}, reactWindow.areEqual);
var TokenOptions = /*#__PURE__*/React.forwardRef(function TokenOptions(_ref9, ref) {
  var tokens = _ref9.tokens,
      onSelect = _ref9.onSelect;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var _useState3 = React.useState(tokens[0]),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var hover = React.useMemo(function () {
    return tokens.indexOf(selected);
  }, [selected, tokens]); // If tokens updates (eg from searching), always default to selecting the first token.
  // As long as tokens.length >= 1, a token should be selected.

  React.useEffect(function () {
    setSelected(function (selected) {
      return tokens.includes(selected) ? selected : tokens[0];
    });
  }, [tokens, setSelected]);
  var list = React.useRef(null);

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      element = _useState6[0],
      setElement = _useState6[1];

  var scrollTo = React.useCallback(function (index) {
    var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (index === undefined) return;

    if (scroll) {
      var _list$current;

      (_list$current = list.current) === null || _list$current === void 0 ? void 0 : _list$current.scrollToItem(index);
    }

    if (focused) {
      var _element$querySelecto;

      element === null || element === void 0 ? void 0 : (_element$querySelecto = element.querySelector("[data-index='".concat(index, "']"))) === null || _element$querySelecto === void 0 ? void 0 : _element$querySelecto.focus();
    }

    setSelected(tokens[index]);
  }, [element, focused, tokens]);
  var onKeyDown = React.useCallback(function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (e.key === 'ArrowDown' && hover < tokens.length - 1) {
        scrollTo(hover + 1);
      } else if (e.key === 'ArrowUp' && hover > 0) {
        scrollTo(hover - 1);
      } else if (e.key === 'ArrowUp' && hover === -1) {
        scrollTo(tokens.length - 1);
      }

      e.preventDefault();
    }

    if (e.key === 'Enter' && hover !== -1) {
      onSelect(tokens[hover]);
    }
  }, [hover, onSelect, scrollTo, tokens]);
  React.useImperativeHandle(ref, function () {
    return {
      onKeyDown: onKeyDown
    };
  }, [onKeyDown]);
  var onClick = React.useCallback(function (_ref10) {
    var token = _ref10.token;
    return token && onSelect(token);
  }, [onSelect]);
  var onFocus = React.useCallback(function (_ref11) {
    var index = _ref11.index;
    setFocused(true);
    scrollTo(index);
  }, [scrollTo]);
  var onBlur = React.useCallback(function () {
    return setFocused(false);
  }, []);
  var onMouseMove = React.useCallback(function (_ref12) {
    var index = _ref12.index;
    return scrollTo(index, false);
  }, [scrollTo]);
  var scrollbar = useScrollbar(element, {
    padded: true
  });
  var onHover = React.useRef(null); // use native onscroll handler to capture Safari's bouncy overscroll effect

  useNativeEvent(element, 'scroll', React.useCallback(function () {
    if (element && onHover.current) {
      // must be set synchronously to avoid jank (avoiding useState)
      onHover.current.style.marginTop = "".concat(-element.scrollTop, "px");
    }
  }, [element]));
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    align: "unset",
    grow: true,
    onKeyDown: onKeyDown,
    onClick: onClick,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseMove: onMouseMove,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default["default"].createElement(OnHover, {
    hover: hover,
    ref: onHover
  }), /*#__PURE__*/React__default["default"].createElement(AutoSizer__default["default"], {
    disableWidth: true
  }, function (_ref13) {
    var height = _ref13.height;
    return /*#__PURE__*/React__default["default"].createElement(TokenList, {
      hover: hover,
      height: height,
      width: "100%",
      itemCount: tokens.length,
      itemData: tokens,
      itemKey: itemKey,
      itemSize: ITEM_SIZE,
      className: "scrollbar",
      ref: list,
      outerRef: setElement,
      scrollbar: scrollbar
    }, ItemRow);
  }));
});

var Img = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptionsSkeleton__Img",
  componentId: "sc-vnnix6-0"
})(["clip-path:circle(50%);height:1.5em;width:1.5em;"]);

var _Symbol = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptionsSkeleton__Symbol",
  componentId: "sc-vnnix6-1"
})(["height:0.75em;width:7em;"]);

var Name = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptionsSkeleton__Name",
  componentId: "sc-vnnix6-2"
})(["height:0.5em;width:5.5em;"]);

var Balance$1 = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptionsSkeleton__Balance",
  componentId: "sc-vnnix6-3"
})(["padding:0.375em 0;width:1.5em;"]);

var TokenRow = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "TokenOptionsSkeleton__TokenRow",
  componentId: "sc-vnnix6-4"
})(["outline:none;padding:0.6875em 0.75em;", ",", ",", ",", "{background-color:", ";border-radius:0.25em;}"], Img, _Symbol, Name, Balance$1, function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
});

function TokenOption() {
  return /*#__PURE__*/React__default["default"].createElement(TokenRow, null, /*#__PURE__*/React__default["default"].createElement(Body1, null, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Img, null), /*#__PURE__*/React__default["default"].createElement(Column, {
    flex: true,
    gap: 0.125,
    align: "flex-start",
    justify: "flex-center"
  }, /*#__PURE__*/React__default["default"].createElement(Subhead1, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React__default["default"].createElement(_Symbol, null)), /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Name, null)))), /*#__PURE__*/React__default["default"].createElement(Balance$1, null))));
}

function TokenOptionsSkeleton() {
  return /*#__PURE__*/React__default["default"].createElement(Column, null, /*#__PURE__*/React__default["default"].createElement(TokenOption, null), /*#__PURE__*/React__default["default"].createElement(TokenOption, null), /*#__PURE__*/React__default["default"].createElement(TokenOption, null), /*#__PURE__*/React__default["default"].createElement(TokenOption, null), /*#__PURE__*/React__default["default"].createElement(TokenOption, null));
}

var SearchInput = /*#__PURE__*/_styled__default["default"](StringInput).withConfig({
  displayName: "TokenSelect__SearchInput",
  componentId: "sc-1krctvh-0"
})(["", ""], inputCss);

function usePrefetchBalances() {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var tokenList = useTokenList();
  var prefetchedTokenList = React.useRef();
  useCurrencyBalances(account, tokenList !== prefetchedTokenList.current ? tokenList : undefined);
  prefetchedTokenList.current = tokenList;
}

function useAreBalancesLoaded() {
  var _useWeb3React2 = core.useWeb3React(),
      account = _useWeb3React2.account;

  var tokens = useTokenList();
  var native = useNativeCurrency();
  var currencies = React.useMemo(function () {
    return [native].concat(_toConsumableArray__default["default"](tokens));
  }, [native, tokens]);
  var balances = useCurrencyBalances(account, currencies).filter(Boolean);
  return !account || currencies.length === balances.length;
}

function TokenSelectDialog(_ref) {
  _ref.value;
      var onSelect = _ref.onSelect,
      onClose = _ref.onClose;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var list = useTokenList();
  var tokens = useQueryTokens(query, list);
  var isTokenListLoaded = useIsTokenListLoaded();
  var areBalancesLoaded = useAreBalancesLoaded();

  var _useState3 = React.useState(isTokenListLoaded && areBalancesLoaded),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      isLoaded = _useState4[0],
      setIsLoaded = _useState4[1]; // Give the balance-less tokens a small block period to avoid layout thrashing from re-sorting.


  React.useEffect(function () {
    if (!isLoaded) {
      var timeout = setTimeout(function () {
        return setIsLoaded(true);
      }, 250);
      return function () {
        return clearTimeout(timeout);
      };
    }

    return;
  }, [isLoaded]);
  React.useEffect(function () {
    return setIsLoaded(Boolean(query) || isTokenListLoaded && areBalancesLoaded);
  }, [query, areBalancesLoaded, isTokenListLoaded]);
  var input = React.useRef(null);
  React.useEffect(function () {
    var _input$current;

    return (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.focus({
      preventScroll: true
    });
  }, [input]);

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var _useWeb3React3 = core.useWeb3React(),
      chainId = _useWeb3React3.chainId;

  var listHasTokens = React.useMemo(function () {
    return list.some(function (token) {
      return token.chainId === chainId;
    });
  }, [chainId, list]);

  if (!listHasTokens && isLoaded) {
    return /*#__PURE__*/React__default["default"].createElement(Dialog, {
      color: "module",
      onClose: onClose
    }, /*#__PURE__*/React__default["default"].createElement(Header$2, {
      title: /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Select a token"
      })
    }), /*#__PURE__*/React__default["default"].createElement(NoTokensAvailableOnNetwork, null));
  }

  return /*#__PURE__*/React__default["default"].createElement(Dialog, {
    color: "module",
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(Header$2, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Select a token"
    })
  }), /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    pad: 0.75,
    grow: true
  }, /*#__PURE__*/React__default["default"].createElement(Body1, null, /*#__PURE__*/React__default["default"].createElement(SearchInput, {
    value: query,
    onChange: setQuery,
    placeholder:
    /*i18n*/
    i18n._("Search by token name or address"),
    onKeyDown: options === null || options === void 0 ? void 0 : options.onKeyDown,
    ref: input
  }))), /*#__PURE__*/React__default["default"].createElement(Rule, {
    padded: true
  })), isLoaded ? tokens.length ? /*#__PURE__*/React__default["default"].createElement(TokenOptions, {
    tokens: tokens,
    onSelect: onSelect,
    ref: setOptions
  }) : /*#__PURE__*/React__default["default"].createElement(Column, {
    padded: true
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    justify: "center"
  }, /*#__PURE__*/React__default["default"].createElement(Body1, {
    color: "secondary"
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "No results found."
  })))) : /*#__PURE__*/React__default["default"].createElement(TokenOptionsSkeleton, null));
}
var TokenSelect = /*#__PURE__*/React.memo(function TokenSelect(_ref2) {
  var field = _ref2.field,
      value = _ref2.value,
      approved = _ref2.approved,
      disabled = _ref2.disabled,
      onSelect = _ref2.onSelect;
  usePrefetchBalances();

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var onTokenSelectorClick = useConditionalHandler(utils.useAtomValue(swapEventHandlersAtom).onTokenSelectorClick);
  var onOpen = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = setOpen;
            _context.next = 3;
            return onTokenSelectorClick(field);

          case 3:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [field, onTokenSelectorClick]);
  var selectAndClose = React.useCallback(function (value) {
    onSelect(value);
    setOpen(false);
  }, [onSelect, setOpen]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(TokenButton$1, {
    value: value,
    approved: approved,
    disabled: disabled,
    onClick: onOpen
  }), open && /*#__PURE__*/React__default["default"].createElement(TokenSelectDialog, {
    value: value,
    onSelect: selectAndClose,
    onClose: function onClose() {
      return setOpen(false);
    }
  }));
});

var _excluded$2 = ["field", "amount", "currency", "approved", "loading", "disabled", "onChangeInput", "onChangeCurrency", "children"];

var TokenInputRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "TokenInput__TokenInputRow",
  componentId: "sc-8sl0d3-0"
})(["grid-template-columns:1fr;"]);

var ValueInput = /*#__PURE__*/_styled__default["default"](DecimalInput).withConfig({
  displayName: "TokenInput__ValueInput",
  componentId: "sc-8sl0d3-1"
})(["color:", ";height:1.5em;margin:-0.25em 0;", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, loadingTransitionCss);

var TokenInputColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "TokenInput__TokenInputColumn",
  componentId: "sc-8sl0d3-2"
})(["margin:0 16px;"]);

var TokenInput = /*#__PURE__*/React.forwardRef(function TokenInput(_ref2, ref) {
  var field = _ref2.field,
      amount = _ref2.amount,
      currency = _ref2.currency,
      approved = _ref2.approved,
      loading = _ref2.loading,
      disabled = _ref2.disabled,
      onChangeInput = _ref2.onChangeInput,
      onChangeCurrency = _ref2.onChangeCurrency,
      children = _ref2.children,
      rest = _objectWithoutProperties__default["default"](_ref2, _excluded$2);

  var input = React.useRef(null);
  var onSelect = React.useCallback(function (currency) {
    onChangeCurrency(currency);
    setImmediate(function () {
      var _input$current;

      return (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.focus();
    });
  }, [onChangeCurrency]);
  var focus = React.useCallback(function () {
    setImmediate(function () {
      var _input$current2, _input$current3;

      (_input$current2 = input.current) === null || _input$current2 === void 0 ? void 0 : _input$current2.focus(); // Bring the start of the input into view so its value is apparent to the user.
      // The cursor will remain at the end of the input, and may be hidden.

      (_input$current3 = input.current) === null || _input$current3 === void 0 ? void 0 : _input$current3.scrollTo(0, 0);
    });
  }, []);
  React.useImperativeHandle(ref, function () {
    return {
      focus: focus
    };
  }, [focus]);
  return /*#__PURE__*/React__default["default"].createElement(TokenInputColumn, _extends__default["default"]({
    gap: 0.25
  }, rest), /*#__PURE__*/React__default["default"].createElement(TokenInputRow, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(H1, null, /*#__PURE__*/React__default["default"].createElement(ValueInput, {
    value: amount,
    onChange: onChangeInput,
    disabled: disabled || !currency,
    isLoading: Boolean(loading),
    ref: input
  })), /*#__PURE__*/React__default["default"].createElement(TokenSelect, {
    field: field,
    value: currency,
    approved: approved,
    disabled: disabled,
    onSelect: onSelect
  })), children);
});

var USDC = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "Input__USDC",
  componentId: "sc-ud81g8-0"
})(["", ";gap:0.25em;"], loadingTransitionCss);

var Balance = /*#__PURE__*/_styled__default["default"](Body2).withConfig({
  displayName: "Input__Balance",
  componentId: "sc-ud81g8-1"
})(["transition:color 0.25s ease-in-out;"]);

var InputColumn$1 = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Input__InputColumn",
  componentId: "sc-ud81g8-2"
})(["background-color:", ";border-radius:", "em;margin-bottom:4px;padding:1em 0 1.5em 0;position:relative;&:before{background-size:100%;border:1px solid ", ";border-radius:inherit;box-sizing:border-box;content:'';height:100%;left:0;pointer-events:none;position:absolute;top:0;transition:125ms ease border-color;width:100%;}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.module;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius - 0.25;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.module;
}, function (_ref4) {
  var theme = _ref4.theme,
      disableHover = _ref4.disableHover;
  return !disableHover && " &:hover:before {\n        border-color: ".concat(theme.interactive, ";\n      }\n\n      &:focus-within:before {\n        border-color: ").concat(theme.outline, ";\n      }");
});
function FieldWrapper(_ref6) {
  var field = _ref6.field,
      maxAmount = _ref6.maxAmount,
      isSufficientBalance = _ref6.isSufficientBalance,
      approved = _ref6.approved,
      impact = _ref6.impact,
      className = _ref6.className;

  var _useSwapInfo = useSwapInfo(),
      _useSwapInfo$field = _useSwapInfo[field],
      balance = _useSwapInfo$field.balance,
      currencyAmount = _useSwapInfo$field.amount,
      usdc = _useSwapInfo$field.usdc,
      error = _useSwapInfo.error,
      tradeState = _useSwapInfo.trade.state;

  var _useSwapAmount = useSwapAmount(field),
      _useSwapAmount2 = _slicedToArray__default["default"](_useSwapAmount, 2),
      amount = _useSwapAmount2[0],
      updateAmount = _useSwapAmount2[1];

  var _useSwapCurrency = useSwapCurrency(field),
      _useSwapCurrency2 = _slicedToArray__default["default"](_useSwapCurrency, 2),
      currency = _useSwapCurrency2[0],
      updateCurrency = _useSwapCurrency2[1];

  var wrapper = React.useRef(null);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var onClick = React.useCallback(function (event) {
    if (event.target === wrapper.current) {
      input === null || input === void 0 ? void 0 : input.focus();
    }
  }, [input]); // extract eagerly in case of reversal

  usePrefetchCurrencyColor(currency);
  var isDisabled = error !== undefined;
  var isRouteLoading = isDisabled || tradeState === TradeState.LOADING;
  var isDependentField = !useIsSwapFieldIndependent(field);
  var isLoading = isRouteLoading && isDependentField;
  var isWrap = useIsWrap();
  var formattedAmount = React.useMemo(function () {
    if (amount !== undefined) return amount;
    if (!currencyAmount) return '';
    return isWrap ? currencyAmount.toExact() : formatCurrencyAmount({
      amount: currencyAmount
    });
  }, [amount, currencyAmount, isWrap]);
  var onClickMax = React.useCallback(function () {
    if (!maxAmount) return;
    updateAmount(maxAmount,
    /* origin= */
    'max');
    input === null || input === void 0 ? void 0 : input.focus();
  }, [input, maxAmount, updateAmount]);
  return /*#__PURE__*/React__default["default"].createElement(InputColumn$1, {
    disableHover: isDisabled || !currency,
    ref: wrapper,
    onClick: onClick,
    className: className
  }, /*#__PURE__*/React__default["default"].createElement(TokenInput, {
    ref: setInput,
    field: field,
    amount: formattedAmount,
    currency: currency,
    loading: isLoading,
    approved: approved,
    disabled: isDisabled,
    onChangeInput: updateAmount,
    onChangeCurrency: updateCurrency
  }, /*#__PURE__*/React__default["default"].createElement(Body2, {
    color: "secondary",
    userSelect: true
  }, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(USDC, {
    isLoading: isRouteLoading
  }, usdc && "".concat(formatCurrencyAmount({
    amount: usdc,
    isUsdPrice: true
  })), impact && /*#__PURE__*/React__default["default"].createElement(Body2, {
    userSelect: false,
    color: impact.warning
  }, "(", impact.toString(), ")")), balance && /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Balance, {
    color: isSufficientBalance === false ? 'error' : 'secondary'
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Balance:"
  }), " ", formatCurrencyAmount({
    amount: balance
  })), maxAmount && /*#__PURE__*/React__default["default"].createElement(TextButton, {
    onClick: onClickMax
  }, /*#__PURE__*/React__default["default"].createElement(ButtonSmall, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Max"
  }))))))));
}
function Input$1() {
  var _useSwapInfo2 = useSwapInfo(),
      _useSwapInfo2$Field$I = _useSwapInfo2[exports.Field.INPUT],
      balance = _useSwapInfo2$Field$I.balance,
      currencyAmount = _useSwapInfo2$Field$I.amount,
      approvalState = _useSwapInfo2.approval.state;

  var isSufficientBalance = React.useMemo(function () {
    if (!balance || !currencyAmount) return undefined;
    return !currencyAmount.greaterThan(balance);
  }, [balance, currencyAmount]);
  var maxAmount = React.useMemo(function () {
    // account for gas needed if using max on native token
    var max = maxAmountSpend(balance);
    if (!max || !balance) return;
    if (max.equalTo(0) || balance.lessThan(max)) return;
    if (currencyAmount && max.equalTo(currencyAmount)) return;
    return max.toExact();
  }, [balance, currencyAmount]);
  return /*#__PURE__*/React__default["default"].createElement(FieldWrapper, {
    field: exports.Field.INPUT,
    maxAmount: maxAmount,
    isSufficientBalance: isSufficientBalance,
    approved: approvalState === SwapApprovalState.APPROVED
  });
}

var colorAtom = jotai.atom(undefined);

var OutputWrapper = /*#__PURE__*/_styled__default["default"](FieldWrapper).withConfig({
  displayName: "Output__OutputWrapper",
  componentId: "sc-3psmgo-0"
})(["border-bottom:1px solid ", ";border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:0;padding:1.75em 0 1.25em 0;transition:", ";>{transition:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.container;
}, function (_ref2) {
  var hasColor = _ref2.hasColor;
  return hasColor ? 'background-color 0.25s ease-out' : undefined;
}, function (_ref3) {
  var hasColor = _ref3.hasColor;
  return hasColor === null ? 'color 0.25s ease-in, stroke 0.25s ease-in' : undefined;
});

function Output() {
  var _useSwapInfo = useSwapInfo(),
      impact = _useSwapInfo.impact;

  var _useSwapCurrency = useSwapCurrency(exports.Field.OUTPUT),
      _useSwapCurrency2 = _slicedToArray__default["default"](_useSwapCurrency, 1),
      currency = _useSwapCurrency2[0];

  var overrideColor = utils.useAtomValue(colorAtom);
  var dynamicColor = useCurrencyColor(currency);
  var color = overrideColor || dynamicColor; // different state true/null/false allow smoother color transition

  var hasColor = currency ? Boolean(color) || null : false;
  return /*#__PURE__*/React__default["default"].createElement(DynamicThemeProvider, {
    color: color
  }, /*#__PURE__*/React__default["default"].createElement(OutputWrapper, {
    field: exports.Field.OUTPUT,
    impact: impact,
    hasColor: hasColor
  }));
}

var Underlayer = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "ReverseButton__Underlayer",
  componentId: "sc-d3cn9-0"
})(["background-color:", ";border-radius:", "em;height:48px;left:50%;position:absolute;transform:translate(-50%,calc(-50% - 2px));width:48px;z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.container;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius;
}, Layer.OVERLAY);

var StyledReverseButton = /*#__PURE__*/_styled__default["default"](Button$1).withConfig({
  displayName: "ReverseButton__StyledReverseButton",
  componentId: "sc-d3cn9-1"
})(["align-items:center;background-color:", ";border:4px solid ", ";border-radius:", "em;display:flex;justify-content:center;width:100%;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.interactive;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.container;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius;
});

function ReverseButton() {
  var _useSwapInfo = useSwapInfo(),
      error = _useSwapInfo.error;

  var isDisabled = error !== undefined;
  var switchCurrencies = useSwitchSwapCurrencies();
  return /*#__PURE__*/React__default["default"].createElement(Underlayer, null, /*#__PURE__*/React__default["default"].createElement(StyledReverseButton, {
    disabled: isDisabled,
    onClick: switchCurrencies
  }, /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    icon: ArrowDown
  })));
}

function useHasFocus(node) {
  var _node$contains, _document;

  React.useEffect(function () {
    if (node instanceof HTMLElement) {
      // tabIndex is required to receive blur events from non-button elements.
      node.tabIndex = node.tabIndex || -1; // Without explicitly omitting outline, Safari will now outline this node when focused.

      node.style.outline = node.style.outline || 'none';
    }
  }, [node]);

  var _useState = React.useState((_node$contains = node === null || node === void 0 ? void 0 : node.contains((_document = document) === null || _document === void 0 ? void 0 : _document.activeElement)) !== null && _node$contains !== void 0 ? _node$contains : false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var onFocus = React.useCallback(function () {
    return setHasFocus(true);
  }, []);
  var onBlur = React.useCallback(function (e) {
    var _node$contains2;

    return setHasFocus((_node$contains2 = node === null || node === void 0 ? void 0 : node.contains(e.relatedTarget)) !== null && _node$contains2 !== void 0 ? _node$contains2 : false);
  }, [node]);
  React.useEffect(function () {
    node === null || node === void 0 ? void 0 : node.addEventListener('focusin', onFocus);
    node === null || node === void 0 ? void 0 : node.addEventListener('focusout', onBlur);
    return function () {
      node === null || node === void 0 ? void 0 : node.removeEventListener('focusin', onFocus);
      node === null || node === void 0 ? void 0 : node.removeEventListener('focusout', onBlur);
    };
  }, [node, onFocus, onBlur]);
  return hasFocus;
}

function useHasHover(node) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      hasHover = _useState2[0],
      setHasHover = _useState2[1];

  var onMouseEnter = React.useCallback(function () {
    return setHasHover(true);
  }, []);
  var onMouseLeave = React.useCallback(function (e) {
    return setHasHover(false);
  }, []);
  React.useEffect(function () {
    node === null || node === void 0 ? void 0 : node.addEventListener('mouseenter', onMouseEnter);
    node === null || node === void 0 ? void 0 : node.addEventListener('mouseleave', onMouseLeave);
    return function () {
      node === null || node === void 0 ? void 0 : node.removeEventListener('mouseenter', onMouseEnter);
      node === null || node === void 0 ? void 0 : node.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [node, onMouseEnter, onMouseLeave]);
  return hasHover;
}

function useTooltip(tooltip) {
  var hover = useHasHover(tooltip);
  var focus = useHasFocus(tooltip);
  return hover || focus;
}

var IconTooltip = /*#__PURE__*/_styled__default["default"](IconButton).withConfig({
  displayName: "Tooltip__IconTooltip",
  componentId: "sc-tsxpgp-0"
})(["cursor:help;"]);

function Tooltip(_ref) {
  var _ref$icon = _ref.icon,
      Icon = _ref$icon === void 0 ? HelpCircle : _ref$icon,
      iconProps = _ref.iconProps,
      children = _ref.children,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'auto' : _ref$placement,
      offset = _ref.offset,
      contained = _ref.contained;
  var tooltip = React.useRef(null);
  var showTooltip = useTooltip(tooltip.current);
  return /*#__PURE__*/React__default["default"].createElement(Popover, {
    content: children,
    show: showTooltip,
    placement: placement,
    offset: offset,
    contained: contained
  }, /*#__PURE__*/React__default["default"].createElement(IconTooltip, {
    icon: Icon,
    iconProps: iconProps,
    ref: tooltip
  }));
}

var _templateObject$2;
var optionCss = function optionCss(selected) {
  return _styled.css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral__default["default"](["\n  border: 1px solid ", ";\n  border-radius: ", "em;\n  color: ", " !important;\n  display: grid;\n  grid-gap: 0.25em;\n  padding: calc(0.75em - 1px) 0.625em;\n\n  :enabled {\n    border: 1px solid ", ";\n  }\n\n  :enabled:hover {\n    border-color: ", ";\n  }\n\n  :enabled:focus-within {\n    border-color: ", ";\n  }\n"])), function (_ref) {
    var theme = _ref.theme;
    return selected ? theme.active : theme.outline;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.borderRadius * 0.75;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.primary;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return selected ? theme.active : theme.outline;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.onHover(selected ? theme.active : theme.outline);
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.active;
  });
};
function Label(_ref8) {
  var name = _ref8.name,
      tooltip = _ref8.tooltip;
  return /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5,
    justify: "flex-start"
  }, /*#__PURE__*/React__default["default"].createElement(Subhead2, null, name), tooltip && /*#__PURE__*/React__default["default"].createElement(Tooltip, {
    placement: "top",
    contained: true
  }, /*#__PURE__*/React__default["default"].createElement(Caption$1, null, tooltip)));
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Button = /*#__PURE__*/_styled__default["default"](TextButton).withConfig({
  displayName: "MaxSlippageSelect__Button",
  componentId: "sc-9adwbi-0"
})(["", ""], function (_ref) {
  var selected = _ref.selected;
  return optionCss(selected);
});

var Custom = /*#__PURE__*/_styled__default["default"](BaseButton).withConfig({
  displayName: "MaxSlippageSelect__Custom",
  componentId: "sc-9adwbi-1"
})(["", " ", ""], function (_ref2) {
  var selected = _ref2.selected;
  return optionCss(selected);
}, inputCss);

var Option = /*#__PURE__*/React.forwardRef(function Option(_ref3, ref) {
  var Wrapper = _ref3.wrapper,
      children = _ref3.children,
      selected = _ref3.selected,
      onSelect = _ref3.onSelect,
      icon = _ref3.icon,
      tabIndex = _ref3.tabIndex,
      testid = _ref3['data-testid'];
  return /*#__PURE__*/React__default["default"].createElement(Wrapper, {
    selected: selected,
    onClick: onSelect,
    ref: ref,
    tabIndex: tabIndex,
    "data-testid": testid
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, children, icon ? icon : /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    icon: selected ? Check : undefined,
    size: 1.25
  })));
});
var Warning = /*#__PURE__*/React.memo(function Warning(_ref4) {
  var state = _ref4.state,
      showTooltip = _ref4.showTooltip;
  var icon;
  var content;
  var show = showTooltip;

  switch (state) {
    case 'error':
      icon = XOctagon;
      content = /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Please enter a valid slippage %"
      });
      show = true;
      break;

    case 'warning':
      icon = AlertTriangle;
      content = /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "High slippage increases the risk of price movement"
      });
      break;
  }

  return /*#__PURE__*/React__default["default"].createElement(Popover, {
    key: state,
    content: /*#__PURE__*/React__default["default"].createElement(Caption$1, null, content),
    show: show,
    placement: "top",
    offset: 16,
    contained: true
  }, /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    icon: icon,
    color: state,
    size: 1.25
  }));
});
function MaxSlippageSelect() {
  var _slippage$max;

  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSlippageChange = _useAtomValue.onSlippageChange;

  var _useAtom = jotai.useAtom(slippageAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      slippage = _useAtom2[0],
      setSlippageBase = _useAtom2[1];

  var setSlippage = React.useCallback(function (update) {
    onSlippageChange === null || onSlippageChange === void 0 ? void 0 : onSlippageChange(update);
    setSlippageBase(update);
  }, [onSlippageChange, setSlippageBase]);
  var setAutoSlippage = React.useCallback(function () {
    return setSlippage(_objectSpread$6(_objectSpread$6({}, slippage), {}, {
      auto: true
    }));
  }, [setSlippage, slippage]);

  var _useState = React.useState(((_slippage$max = slippage.max) === null || _slippage$max === void 0 ? void 0 : _slippage$max.toString()) || ''),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      maxSlippageInput = _useState2[0],
      setMaxSlippageInput = _useState2[1];

  var option = React.useRef(null);
  var showTooltip = useTooltip(option.current);
  var input = React.useRef(null);
  var focus = React.useCallback(function () {
    var _input$current;

    return (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.focus();
  }, [input]);

  var _useState3 = React.useState(getSlippageWarning(toPercent(slippage.max))),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      warning = _useState4[0],
      setWarning = _useState4[1];

  React.useEffect(function () {
    var _slippage$max2;

    setMaxSlippageInput(((_slippage$max2 = slippage.max) === null || _slippage$max2 === void 0 ? void 0 : _slippage$max2.toString()) || '');
    setWarning(getSlippageWarning(toPercent(slippage.max)));
  }, [slippage.max]);
  var onInputSelect = React.useCallback(function () {
    focus();
    var percent = toPercent(slippage.max);
    var warning = getSlippageWarning(percent);
    var auto = !percent || warning === 'error';
    setSlippage(_objectSpread$6(_objectSpread$6({}, slippage), {}, {
      auto: auto
    }));
  }, [focus, slippage, setSlippage]);
  var processInput = React.useCallback(function (max) {
    setMaxSlippageInput(max || '');
    var percent = toPercent(max);
    var warning = getSlippageWarning(percent);
    var auto = !percent || warning === 'error';
    setSlippage({
      auto: auto,
      max: max
    });
  }, [setSlippage]);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Label, {
    name: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Max slippage"
    }),
    tooltip: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Your transaction will revert if the price changes unfavorably by more than this percentage."
    })
  }), /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5,
    grow: "last"
  }, /*#__PURE__*/React__default["default"].createElement(Option, {
    wrapper: Button,
    selected: slippage.auto,
    onSelect: setAutoSlippage,
    "data-testid": "auto"
  }, /*#__PURE__*/React__default["default"].createElement(ButtonMedium, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Auto"
  }))), /*#__PURE__*/React__default["default"].createElement(Option, {
    wrapper: Custom,
    selected: !slippage.auto,
    onSelect: onInputSelect,
    icon: warning && /*#__PURE__*/React__default["default"].createElement(Warning, {
      state: warning,
      showTooltip: showTooltip
    }),
    ref: option,
    tabIndex: -1,
    "data-testid": "custom"
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    color: warning === 'error' ? 'error' : undefined
  }, /*#__PURE__*/React__default["default"].createElement(DecimalInput, {
    size: Math.max(maxSlippageInput.length, 4),
    value: maxSlippageInput,
    onChange: function onChange(input) {
      return processInput(input);
    },
    placeholder: '0.10',
    ref: input,
    "data-testid": "input"
  }), "%"))));
}

var Input = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "TransactionTtlInput__Input",
  componentId: "sc-1fem02o-0"
})(["", ""], inputCss);

function TransactionTtlInput() {
  var _ttl$toString;

  var _useTransactionTtl = useTransactionTtl(),
      _useTransactionTtl2 = _slicedToArray__default["default"](_useTransactionTtl, 2),
      ttl = _useTransactionTtl2[0],
      setTtl = _useTransactionTtl2[1];

  var defaultTtl = useDefaultTransactionTtl();
  var placeholder = defaultTtl.toString();
  var input = React.useRef(null);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Label, {
    name: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Transaction deadline"
    }),
    tooltip: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Your transaction will revert if it has been pending for longer than this period of time."
    })
  }), /*#__PURE__*/React__default["default"].createElement(Body1, null, /*#__PURE__*/React__default["default"].createElement(Input, {
    justify: "start",
    onClick: function onClick() {
      var _input$current;

      return (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.focus();
    }
  }, /*#__PURE__*/React__default["default"].createElement(IntegerInput, {
    placeholder: placeholder,
    value: (_ttl$toString = ttl === null || ttl === void 0 ? void 0 : ttl.toString()) !== null && _ttl$toString !== void 0 ? _ttl$toString : '',
    onChange: function onChange(value) {
      return setTtl(value ? parseFloat(value) : undefined);
    },
    size: Math.max((ttl === null || ttl === void 0 ? void 0 : ttl.toString().length) || 0, placeholder.length),
    ref: input
  }), /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "minutes"
  }))));
}

function SettingsDialog() {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      boundary = _useState2[0],
      setBoundary = _useState2[1];

  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSettingsReset = _useAtomValue.onSettingsReset;

  var resetSettingsBase = utils.useResetAtom(settingsAtom);
  var resetSettings = React.useCallback(function () {
    onSettingsReset === null || onSettingsReset === void 0 ? void 0 : onSettingsReset();
    resetSettingsBase();
  }, [onSettingsReset, resetSettingsBase]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header$2, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Settings"
    }),
    ruled: true
  }, /*#__PURE__*/React__default["default"].createElement(TextButton, {
    onClick: resetSettings
  }, /*#__PURE__*/React__default["default"].createElement(ButtonSmall, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Reset"
  })))), /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 1,
    style: {
      paddingTop: '1em'
    },
    ref: setBoundary,
    padded: true
  }, /*#__PURE__*/React__default["default"].createElement(BoundaryProvider, {
    value: boundary
  }, /*#__PURE__*/React__default["default"].createElement(MaxSlippageSelect, null), /*#__PURE__*/React__default["default"].createElement(TransactionTtlInput, null))));
}

var SettingsButton = /*#__PURE__*/_styled__default["default"](IconButton).withConfig({
  displayName: "Settings__SettingsButton",
  componentId: "sc-1hvqnx5-0"
})(["", "{transform:", ";transition:", ";will-change:transform;}"], Settings$1, function (_ref) {
  var hover = _ref.hover;
  return hover && 'rotate(45deg)';
}, function (_ref2) {
  var hover = _ref2.hover;
  return hover && 'transform 0.25s';
});

function Settings(_ref3) {
  var disabled = _ref3.disabled;

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      hover = _useState6[0],
      setHover = _useState6[1];

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SettingsButton, {
    disabled: disabled,
    hover: hover,
    onClick: function onClick() {
      return setOpen(true);
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    icon: Settings$1
  }), open && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    color: "module",
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(SettingsDialog, null)));
}

var _excluded$1 = ["color", "disabled", "action", "onClick", "children", "wrapperProps"];

var _templateObject$1, _templateObject2$1, _templateObject3$1;

var StyledButton = /*#__PURE__*/_styled__default["default"](Button$1).withConfig({
  displayName: "ActionButton__StyledButton",
  componentId: "sc-xgl46p-0"
})(["border-radius:", "em;flex-grow:1;max-height:56px;transition:background-color 0.25s ease-out,border-radius 0.25s ease-out,flex-grow 0.25s ease-out;", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.borderRadius * 0.75;
}, function (_ref2) {
  var theme = _ref2.theme,
      disabled = _ref2.disabled;
  return disabled && _styled.css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral__default["default"](["\n      background-color: ", ";\n    "])), theme.interactive);
});

var ActionRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "ActionButton__ActionRow",
  componentId: "sc-xgl46p-1"
})([""]);

var grow = _styled.keyframes(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral__default["default"](["\n  from {\n    opacity: 0;\n    width: 0;\n  }\n  to {\n    opacity: 1;\n    width: max-content;\n  }\n"])));

var actionCss = _styled.css(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral__default["default"](["\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: calc(0.25em - 1px);\n  padding-left: calc(0.75em - 1px);\n\n  ", " {\n    animation: ", " 0.25s ease-in;\n    flex-grow: 1;\n    justify-content: flex-start;\n    white-space: nowrap;\n  }\n\n  ", " {\n    /* Subtract the padding from the borderRadius so that it nests properly. */\n    border-radius: ", "em;\n    flex-grow: 0;\n    padding: 0 1em;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.container;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.outline;
}, ActionRow, grow, StyledButton, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius - 0.25;
});

var Overlay = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "ActionButton__Overlay",
  componentId: "sc-xgl46p-2"
})(["border-radius:", "em;flex-direction:row-reverse;margin-top:12px;min-height:3.5em;transition:padding 0.25s ease-out;", ""], function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderRadius;
}, function (_ref7) {
  var hasAction = _ref7.hasAction;
  return hasAction && actionCss;
});
function ActionButton(_ref8) {
  var _ref8$color = _ref8.color,
      color = _ref8$color === void 0 ? 'accent' : _ref8$color,
      disabled = _ref8.disabled,
      action = _ref8.action,
      onClick = _ref8.onClick,
      children = _ref8.children,
      wrapperProps = _ref8.wrapperProps,
      rest = _objectWithoutProperties__default["default"](_ref8, _excluded$1);

  var textColor = React.useMemo(function () {
    return color === 'accent' ? 'onAccent' : 'currentColor';
  }, [color]);
  return /*#__PURE__*/React__default["default"].createElement(Overlay, _extends__default["default"]({
    hasAction: Boolean(action),
    flex: true,
    align: "stretch"
  }, wrapperProps), /*#__PURE__*/React__default["default"].createElement(StyledButton, _extends__default["default"]({
    color: color,
    disabled: disabled,
    onClick: (action === null || action === void 0 ? void 0 : action.onClick) || onClick
  }, rest), /*#__PURE__*/React__default["default"].createElement(TransitionButton, {
    buttonSize: action ? 'medium' : 'large',
    color: textColor
  }, (action === null || action === void 0 ? void 0 : action.children) || children)), action && /*#__PURE__*/React__default["default"].createElement(ActionRow, {
    gap: 0.5
  }, action.tooltipContent ? /*#__PURE__*/React__default["default"].createElement(Tooltip, {
    icon: LargeIcon,
    iconProps: {
      color: 'currentColor',
      icon: action.icon || AlertTriangle
    }
  }, action.tooltipContent) : /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    color: "currentColor",
    icon: action.icon || AlertTriangle
  }), /*#__PURE__*/React__default["default"].createElement(Subhead2, null, action === null || action === void 0 ? void 0 : action.message)));
}

var _excluded = ["title", "open", "onExpand", "height", "children"];

var HeaderColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Expando__HeaderColumn",
  componentId: "sc-yzkwmi-0"
})(["cursor:pointer;transition:gap 0.25s;"]);

var TitleRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "Expando__TitleRow",
  componentId: "sc-yzkwmi-1"
})(["color:", ";cursor:pointer;font-size:14px;font-weight:500;line-height:20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
});

var TitleHeader = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Expando__TitleHeader",
  componentId: "sc-yzkwmi-2"
})(["align-items:center;display:flex;justify-content:center;"]);

var ExpandoColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Expando__ExpandoColumn",
  componentId: "sc-yzkwmi-3"
})(["height:", "em;overflow:hidden;position:relative;transition:height 0.25s,padding 0.25s;:after{background:linear-gradient(transparent,", ");bottom:0;content:'';height:0.75em;pointer-events:none;position:absolute;width:calc(100% - 1em);}"], function (_ref2) {
  var height = _ref2.height,
      open = _ref2.open;
  return open ? height : 0;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dialog;
});

var InnerColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Expando__InnerColumn",
  componentId: "sc-yzkwmi-4"
})(["height:", "em;padding:0.5em 0;"], function (_ref4) {
  var height = _ref4.height;
  return height;
});

var _StyledInnerColumn = /*#__PURE__*/_styled__default["default"](InnerColumn).withConfig({
  displayName: "Expando___StyledInnerColumn",
  componentId: "sc-yzkwmi-5"
})(["", ""], function (p) {
  return p.$_css;
});

/** A scrollable Expando with an absolute height. */
function Expando$1(_ref5) {
  var title = _ref5.title,
      open = _ref5.open,
      onExpand = _ref5.onExpand,
      height = _ref5.height,
      children = _ref5.children,
      rest = _objectWithoutProperties__default["default"](_ref5, _excluded);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      scrollingEl = _useState2[0],
      setScrollingEl = _useState2[1];

  var scrollbar = useScrollbar(scrollingEl);
  return /*#__PURE__*/React__default["default"].createElement(Column, rest, /*#__PURE__*/React__default["default"].createElement(HeaderColumn, {
    gap: open ? 0.5 : 0.75,
    onClick: onExpand
  }, /*#__PURE__*/React__default["default"].createElement(Rule, null), /*#__PURE__*/React__default["default"].createElement(TitleRow, null, /*#__PURE__*/React__default["default"].createElement(TitleHeader, null, title), /*#__PURE__*/React__default["default"].createElement(IconButton, {
    color: "secondary",
    icon: Expando$2,
    iconProps: {
      open: open
    }
  })), open && /*#__PURE__*/React__default["default"].createElement(Rule, null)), /*#__PURE__*/React__default["default"].createElement(ExpandoColumn, {
    open: open,
    height: height
  }, /*#__PURE__*/React__default["default"].createElement(_StyledInnerColumn, {
    flex: true,
    align: "stretch",
    height: height,
    ref: setScrollingEl,
    $_css: scrollbar
  }, children)));
}

var HeaderIcon = /*#__PURE__*/_styled__default["default"](LargeIcon).withConfig({
  displayName: "ErrorDialog__HeaderIcon",
  componentId: "sc-1yuufry-0"
})(["flex-grow:1;transition:height 0.25s,width 0.25s;svg{transition:height 0.25s,width 0.25s;}"]);

function StatusHeader(_ref) {
  var Icon = _ref.icon,
      iconColor = _ref.iconColor,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 4 : _ref$iconSize,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Column, {
    flex: true,
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React__default["default"].createElement(HeaderIcon, {
    icon: Icon,
    color: iconColor,
    size: iconSize
  }), /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.75,
    flex: true,
    style: {
      textAlign: 'center'
    }
  }, children)));
}

var ErrorHeader = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "ErrorDialog__ErrorHeader",
  componentId: "sc-1yuufry-1"
})(["transition:gap 0.25s;div:last-child{max-height:", "em;overflow-y:hidden;transition:max-height 0.25s;}"], function (_ref2) {
  var open = _ref2.open;
  return open ? 0 : 60 / 14;
});

function ErrorDialog(_ref3) {
  var header = _ref3.header,
      error = _ref3.error,
      action = _ref3.action,
      onClick = _ref3.onClick;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var onExpand = React.useCallback(function () {
    return setOpen(function (open) {
      return !open;
    });
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    flex: true,
    padded: true,
    gap: 0.75,
    align: "stretch",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(StatusHeader, {
    icon: AlertTriangle,
    iconColor: "error",
    iconSize: open ? 3 : 4
  }, /*#__PURE__*/React__default["default"].createElement(ErrorHeader, {
    gap: open ? 0 : 0.75,
    open: open
  }, /*#__PURE__*/React__default["default"].createElement(Subhead1, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Something went wrong."
  })), /*#__PURE__*/React__default["default"].createElement(Body2, null, header))), /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: open ? 0 : 0.75,
    style: {
      transition: 'gap 0.25s'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Expando$1, {
    title: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Info, {
      style: {
        marginRight: '5px'
      },
      color: "secondary"
    }), /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Error details"
    })),
    open: open,
    onExpand: onExpand,
    height: 7.5
  }, /*#__PURE__*/React__default["default"].createElement(Body2, {
    userSelect: true
  }, error.name, error.message ? ": ".concat(error.message) : '')), /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    color: "interactive",
    onClick: onClick
  }, action)));
}

var _ETHERSCAN_PREFIXES;
var ETHERSCAN_PREFIXES = (_ETHERSCAN_PREFIXES = {}, _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.MAINNET, 'https://etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.ROPSTEN, 'https://ropsten.etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.RINKEBY, 'https://rinkeby.etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.GOERLI, 'https://goerli.etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.KOVAN, 'https://kovan.etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.OPTIMISM, 'https://optimistic.etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.OPTIMISTIC_KOVAN, 'https://kovan-optimistic.etherscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.POLYGON_MUMBAI, 'https://mumbai.polygonscan.com'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.POLYGON, 'https://polygonscan.com'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.CELO, 'https://celoscan.io'), _defineProperty__default["default"](_ETHERSCAN_PREFIXES, exports.SupportedChainId.CELO_ALFAJORES, 'https://alfajores.celoscan.io'), _ETHERSCAN_PREFIXES);
var ExplorerDataType;
/**
 * Return the explorer link for the given data and data type
 * @param chainId the ID of the chain for which to return the data
 * @param data the data to return a link for
 * @param type the type of the data
 */

(function (ExplorerDataType) {
  ExplorerDataType["TRANSACTION"] = "transaction";
  ExplorerDataType["TOKEN"] = "token";
  ExplorerDataType["ADDRESS"] = "address";
  ExplorerDataType["BLOCK"] = "block";
})(ExplorerDataType || (ExplorerDataType = {}));

function getExplorerLink(chainId, data, type) {
  var _ETHERSCAN_PREFIXES$c;

  if (chainId === exports.SupportedChainId.ARBITRUM_ONE) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return "https://arbiscan.io/tx/".concat(data);

      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return "https://arbiscan.io/address/".concat(data);

      case ExplorerDataType.BLOCK:
        return "https://arbiscan.io/block/".concat(data);

      default:
        return "https://arbiscan.io/";
    }
  }

  if (chainId === exports.SupportedChainId.ARBITRUM_RINKEBY) {
    switch (type) {
      case ExplorerDataType.TRANSACTION:
        return "https://rinkeby-explorer.arbitrum.io/tx/".concat(data);

      case ExplorerDataType.ADDRESS:
      case ExplorerDataType.TOKEN:
        return "https://rinkeby-explorer.arbitrum.io/address/".concat(data);

      case ExplorerDataType.BLOCK:
        return "https://rinkeby-explorer.arbitrum.io/block/".concat(data);

      default:
        return "https://rinkeby-explorer.arbitrum.io/";
    }
  }

  var prefix = (_ETHERSCAN_PREFIXES$c = ETHERSCAN_PREFIXES[chainId]) !== null && _ETHERSCAN_PREFIXES$c !== void 0 ? _ETHERSCAN_PREFIXES$c : 'https://etherscan.io';

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return "".concat(prefix, "/tx/").concat(data);

    case ExplorerDataType.TOKEN:
      return "".concat(prefix, "/token/").concat(data);

    case ExplorerDataType.BLOCK:
      if (chainId === exports.SupportedChainId.OPTIMISM || chainId === exports.SupportedChainId.OPTIMISTIC_KOVAN) {
        return "".concat(prefix, "/tx/").concat(data);
      }

      return "".concat(prefix, "/block/").concat(data);

    case ExplorerDataType.ADDRESS:
      return "".concat(prefix, "/address/").concat(data);

    default:
      return "".concat(prefix);
  }
}

var StyledExternalLink = /*#__PURE__*/_styled__default["default"](ExternalLink).withConfig({
  displayName: "EtherscanLink__StyledExternalLink",
  componentId: "sc-chwn20-0"
})(["color:", ";text-decoration:none;"], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme[color];
});

function EtherscanLink(_ref2) {
  var data = _ref2.data,
      type = _ref2.type,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'currentColor' : _ref2$color,
      children = _ref2.children;

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var url = React.useMemo(function () {
    return data && getExplorerLink(chainId || exports.SupportedChainId.MAINNET, data, type);
  }, [chainId, data, type]);
  return /*#__PURE__*/React__default["default"].createElement(StyledExternalLink, {
    href: url,
    color: color,
    target: "_blank"
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.25
  }, children, url && /*#__PURE__*/React__default["default"].createElement(Link, null)));
}

/**
 * Returns true if the trade requires a confirmation of details before we can submit it
 * @param args either a pair of V2 trades or a pair of V3 trades
 */
function tradeMeaningfullyDiffers() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var tradeA = args[0],
      tradeB = args[1];
  return tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeA.inputAmount.equalTo(tradeB.inputAmount) || !tradeA.outputAmount.currency.equals(tradeB.outputAmount.currency) || !tradeA.outputAmount.equalTo(tradeB.outputAmount);
}

/** Displays the price of a trade. If outputUSDC is included, also displays the unit price. */
function Price(_ref) {
  var trade = _ref.trade,
      outputUSDC = _ref.outputUSDC;
  var inputAmount = trade.inputAmount,
      outputAmount = trade.outputAmount,
      executionPrice = trade.executionPrice;

  var _useState = React.useState('input'),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      base = _useState2[0],
      setBase = _useState2[1];

  var onClick = React.useCallback(function () {
    return setBase(function (base) {
      return base === 'input' ? 'output' : 'input';
    });
  }, []); // Compute the usdc price from the output price, so that it aligns with the displayed price.

  var _useMemo = React.useMemo(function () {
    switch (base) {
      case 'input':
        return {
          price: executionPrice,
          usdcPrice: outputUSDC === null || outputUSDC === void 0 ? void 0 : outputUSDC.multiply(inputAmount.decimalScale).divide(inputAmount)
        };

      case 'output':
        return {
          price: executionPrice.invert(),
          usdcPrice: outputUSDC === null || outputUSDC === void 0 ? void 0 : outputUSDC.multiply(outputAmount.decimalScale).divide(outputAmount)
        };
    }
  }, [base, executionPrice, inputAmount, outputAmount, outputUSDC]),
      price = _useMemo.price,
      usdcPrice = _useMemo.usdcPrice;

  return /*#__PURE__*/React__default["default"].createElement(TextButton, {
    color: "primary",
    onClick: onClick
  }, /*#__PURE__*/React__default["default"].createElement(Caption$1, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.25
  }, 1, " ", price.baseCurrency.symbol, " = ", formatPrice(price), " ", price.quoteCurrency.symbol, usdcPrice && /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    color: "secondary"
  }, "(", formatCurrencyAmount({
    amount: usdcPrice,
    isUsdPrice: true
  }), ")"))));
}

var Value = /*#__PURE__*/_styled__default["default"].span.withConfig({
  displayName: "Details__Value",
  componentId: "sc-cp6wr2-0"
})(["color:", ";white-space:nowrap;"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return color && theme[color];
});

function Detail(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      color = _ref2.color;
  return /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    userSelect: true
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 2
  }, /*#__PURE__*/React__default["default"].createElement("span", null, label), /*#__PURE__*/React__default["default"].createElement(Value, {
    color: color
  }, value)));
}

function Details(_ref3) {
  var trade = _ref3.trade,
      slippage = _ref3.slippage,
      gasUseEstimateUSD = _ref3.gasUseEstimateUSD,
      impact = _ref3.impact;
  var inputAmount = trade.inputAmount,
      outputAmount = trade.outputAmount;
  var inputCurrency = inputAmount.currency;
  var outputCurrency = outputAmount.currency;
  var integrator = window.location.hostname;
  var feeOptions = utils.useAtomValue(feeOptionsAtom);
  var details = React.useMemo(function () {
    var rows = []; // @TODO(ianlapham): Check that provider fee is even a valid list item

    if (feeOptions) {
      var fee = outputAmount.multiply(feeOptions.fee);

      if (fee.greaterThan(0)) {
        var parsedFee = formatCurrencyAmount({
          amount: fee
        });
        rows.push([
        /*i18n*/
        i18n._("{integrator} fee", {
          integrator: integrator
        }), "".concat(parsedFee, " ").concat(outputCurrency.symbol || currencyId(outputCurrency))]);
      }
    }

    if (impact) {
      rows.push([
      /*i18n*/
      i18n._("Price impact"), impact.toString(), impact.warning]);
    }

    if (gasUseEstimateUSD) {
      rows.push([
      /*i18n*/
      i18n._("Network fee"), "~".concat(formatCurrencyAmount({
        amount: gasUseEstimateUSD,
        isUsdPrice: true
      }))]);
    }

    if (isExactInput(trade.tradeType)) {
      var localizedMaxSent = formatCurrencyAmount({
        amount: trade.minimumAmountOut(slippage.allowed)
      });
      rows.push([
      /*i18n*/
      i18n._("Minimum received"), "".concat(localizedMaxSent, " ").concat(outputCurrency.symbol)]);
    } else {
      var _localizedMaxSent = formatCurrencyAmount({
        amount: trade.maximumAmountIn(slippage.allowed)
      });

      rows.push([
      /*i18n*/
      i18n._("Maximum sent"), "".concat(_localizedMaxSent, " ").concat(inputCurrency.symbol)]);
    }

    rows.push([
    /*i18n*/
    i18n._("Slippage tolerance"), "".concat(slippage.allowed.toFixed(2), "%"), slippage.warning]);
    return rows;
  }, [feeOptions, gasUseEstimateUSD, impact, inputCurrency.symbol, integrator, outputAmount, outputCurrency, slippage.allowed, slippage.warning, trade]);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.5
  }, details.map(function (_ref4) {
    var _ref5 = _slicedToArray__default["default"](_ref4, 3),
        label = _ref5[0],
        detail = _ref5[1],
        color = _ref5[2];

    return /*#__PURE__*/React__default["default"].createElement(Detail, {
      key: label,
      label: label,
      value: detail,
      color: color
    });
  }));
}

var CollapsingColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Summary__CollapsingColumn",
  componentId: "sc-s8ilfd-0"
})(["justify-items:", ";"], function (_ref) {
  var open = _ref.open;
  return open ? 'left' : 'center';
});

function TokenValue(_ref2) {
  var input = _ref2.input,
      usdc = _ref2.usdc,
      open = _ref2.open,
      children = _ref2.children;
  return /*#__PURE__*/React__default["default"].createElement(CollapsingColumn, {
    justify: "flex-start",
    open: open,
    flex: true
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.375,
    justify: "flex-start"
  }, /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: input.currency
  }), /*#__PURE__*/React__default["default"].createElement(Body2, {
    userSelect: true
  }, formatCurrencyAmount({
    amount: input
  }), " ", input.currency.symbol)), usdc && /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    color: "secondary",
    userSelect: true
  }, /*#__PURE__*/React__default["default"].createElement(Row, {
    justify: "flex-start",
    gap: 0.25
  }, formatCurrencyAmount({
    amount: usdc,
    isUsdPrice: true
  }), children)));
}

function Summary(_ref3) {
  var input = _ref3.input,
      output = _ref3.output,
      inputUSDC = _ref3.inputUSDC,
      outputUSDC = _ref3.outputUSDC,
      impact = _ref3.impact,
      _ref3$open = _ref3.open,
      open = _ref3$open === void 0 ? true : _ref3$open;
  var summaryContents = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(TokenValue, {
    input: input,
    usdc: inputUSDC,
    open: open
  }), open ? /*#__PURE__*/React__default["default"].createElement(ArrowRight, null) : /*#__PURE__*/React__default["default"].createElement(ArrowDown, null), /*#__PURE__*/React__default["default"].createElement(TokenValue, {
    input: output,
    usdc: outputUSDC,
    open: open
  }, impact && /*#__PURE__*/React__default["default"].createElement(Caption$1, {
    color: impact.warning
  }, "(", impact.toString(), ")")));

  if (open) {
    return /*#__PURE__*/React__default["default"].createElement(Row, {
      gap: impact ? 1 : 0.25
    }, summaryContents);
  }

  return /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: impact ? 1 : 0.25,
    flex: true
  }, summaryContents);
}

var Expando = /*#__PURE__*/_styled__default["default"](Expando$1).withConfig({
  displayName: "Summary__Expando",
  componentId: "sc-uztx5q-0"
})(["margin-bottom:3.2em;transition:gap 0.25s;"]);

var Heading = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Summary__Heading",
  componentId: "sc-uztx5q-1"
})(["flex-grow:1;transition:flex-grow 0.25s;"]);

var StyledEstimate = /*#__PURE__*/_styled__default["default"](Caption$1).withConfig({
  displayName: "Summary__StyledEstimate",
  componentId: "sc-uztx5q-2"
})(["margin-bottom:0.5em;margin-top:0.5em;max-height:3em;"]);

var Body = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Summary__Body",
  componentId: "sc-uztx5q-3"
})(["height:calc(100% - 2.5em);"]);

function Subhead(_ref) {
  var impact = _ref.impact,
      slippage = _ref.slippage;
  var showWarning = Boolean((impact === null || impact === void 0 ? void 0 : impact.warning) || slippage.warning);
  return /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, showWarning ? /*#__PURE__*/React__default["default"].createElement(AlertTriangle, {
    color: (impact === null || impact === void 0 ? void 0 : impact.warning) || slippage.warning
  }) : /*#__PURE__*/React__default["default"].createElement(Info, {
    color: "secondary"
  }), /*#__PURE__*/React__default["default"].createElement(Subhead2, {
    color: (impact === null || impact === void 0 ? void 0 : impact.warning) || slippage.warning || 'secondary'
  }, impact !== null && impact !== void 0 && impact.warning ? /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "High price impact"
  }) : slippage.warning ? /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "High slippage"
  }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Swap details"
  })));
}

function Estimate(_ref2) {
  var trade = _ref2.trade,
      slippage = _ref2.slippage;
  var text = React.useMemo(function () {
    return isExactInput(trade.tradeType) ? /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Output is estimated. You will receive at least {0} {1} or the transaction will revert.",
      values: {
        0: formatCurrencyAmount({
          amount: trade.minimumAmountOut(slippage.allowed)
        }),
        1: trade.outputAmount.currency.symbol
      }
    }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Output is estimated. You will send at most {0} {1} or the transaction will revert.",
      values: {
        0: formatCurrencyAmount({
          amount: trade.maximumAmountIn(slippage.allowed)
        }),
        1: trade.inputAmount.currency.symbol
      }
    });
  }, [slippage.allowed, trade]);
  return /*#__PURE__*/React__default["default"].createElement(StyledEstimate, {
    color: "secondary"
  }, text);
}

function ConfirmButton(_ref3) {
  var trade = _ref3.trade,
      highPriceImpact = _ref3.highPriceImpact,
      onConfirm = _ref3.onConfirm;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      ackPriceImpact = _useState2[0],
      setAckPriceImpact = _useState2[1];

  var _useAtomValue = utils.useAtomValue(swapEventHandlersAtom),
      onSwapPriceUpdateAck = _useAtomValue.onSwapPriceUpdateAck,
      onSubmitSwapClick = _useAtomValue.onSubmitSwapClick;

  var _useState3 = React.useState(trade),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      ackTrade = _useState4[0],
      setAckTrade = _useState4[1];

  var doesTradeDiffer = React.useMemo(function () {
    return Boolean(trade && ackTrade && tradeMeaningfullyDiffers(trade, ackTrade));
  }, [ackTrade, trade]);

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      isPending = _useState6[0],
      setIsPending = _useState6[1];

  var onClick = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsPending(true);
            onSubmitSwapClick === null || onSubmitSwapClick === void 0 ? void 0 : onSubmitSwapClick(trade);
            _context.next = 4;
            return onConfirm();

          case 4:
            setIsPending(false);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [onConfirm, onSubmitSwapClick, trade]);
  var action = React.useMemo(function () {
    if (isPending) {
      return {
        message: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Confirm in your wallet"
        }),
        icon: Spinner
      };
    } else if (doesTradeDiffer) {
      return {
        message: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Price updated"
        }),
        icon: BarChart,
        onClick: function onClick() {
          onSwapPriceUpdateAck === null || onSwapPriceUpdateAck === void 0 ? void 0 : onSwapPriceUpdateAck(ackTrade, trade);
          setAckTrade(trade);
        },
        children: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Accept"
        })
      };
    } else if (highPriceImpact && !ackPriceImpact) {
      return {
        message: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "High price impact"
        }),
        onClick: function onClick() {
          return setAckPriceImpact(true);
        },
        children: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Acknowledge"
        })
      };
    }

    return;
  }, [ackPriceImpact, ackTrade, doesTradeDiffer, highPriceImpact, isPending, onSwapPriceUpdateAck, trade]);
  return /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    onClick: onClick,
    action: action,
    disabled: isPending,
    wrapperProps: {
      style: {
        bottom: '0.25em',
        position: 'absolute',
        width: 'calc(100% - 1.5em)'
      }
    }
  }, isPending ? /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Confirm"
  }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Confirm swap"
  }));
}

function SummaryDialog(_ref5) {
  var trade = _ref5.trade,
      slippage = _ref5.slippage,
      gasUseEstimateUSD = _ref5.gasUseEstimateUSD,
      inputUSDC = _ref5.inputUSDC,
      outputUSDC = _ref5.outputUSDC,
      impact = _ref5.impact,
      onConfirm = _ref5.onConfirm;
  var inputAmount = trade.inputAmount,
      outputAmount = trade.outputAmount;

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var _useAtomValue2 = utils.useAtomValue(swapEventHandlersAtom),
      onExpandSwapDetails = _useAtomValue2.onExpandSwapDetails;

  var onExpand = React.useCallback(function () {
    onExpandSwapDetails === null || onExpandSwapDetails === void 0 ? void 0 : onExpandSwapDetails();
    setOpen(function (open) {
      return !open;
    });
  }, [onExpandSwapDetails]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header$2, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Swap summary"
    }),
    ruled: true
  }), /*#__PURE__*/React__default["default"].createElement(Body, {
    flex: true,
    align: "stretch",
    padded: true,
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Heading, {
    gap: 0.75,
    flex: true,
    justify: "center"
  }, /*#__PURE__*/React__default["default"].createElement(Summary, {
    input: inputAmount,
    output: outputAmount,
    inputUSDC: inputUSDC,
    outputUSDC: outputUSDC,
    impact: impact,
    open: open
  }), /*#__PURE__*/React__default["default"].createElement(Price, {
    trade: trade
  })), /*#__PURE__*/React__default["default"].createElement(Expando, {
    title: /*#__PURE__*/React__default["default"].createElement(Subhead, {
      impact: impact,
      slippage: slippage
    }),
    open: open,
    onExpand: onExpand,
    height: 6,
    gap: open ? 0 : 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Details, {
    trade: trade,
    slippage: slippage,
    gasUseEstimateUSD: gasUseEstimateUSD,
    impact: impact
  }), /*#__PURE__*/React__default["default"].createElement(Estimate, {
    trade: trade,
    slippage: slippage
  }))), /*#__PURE__*/React__default["default"].createElement(ConfirmButton, {
    trade: trade,
    highPriceImpact: (impact === null || impact === void 0 ? void 0 : impact.warning) === 'error',
    onConfirm: onConfirm
  })));
}

var TransactionRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "StatusDialog__TransactionRow",
  componentId: "sc-1wcaa6z-0"
})(["flex-direction:row-reverse;"]);

function ElapsedTime(_ref) {
  var tx = _ref.tx;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      elapsedMs = _useState2[0],
      setElapsedMs = _useState2[1];

  useInterval(function () {
    return setElapsedMs(Date.now() - tx.addedTime);
  }, tx.receipt ? null : 1000);
  var toElapsedTime = React.useCallback(function (ms) {
    var sec = Math.floor(ms / 1000);
    var min = Math.floor(sec / 60);
    sec = sec % 60;

    if (min) {
      return /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "{min}m {sec}s",
        values: {
          min: min,
          sec: sec
        }
      });
    } else {
      return /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "{sec}s",
        values: {
          sec: sec
        }
      });
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.5
  }, /*#__PURE__*/React__default["default"].createElement(Clock, null), /*#__PURE__*/React__default["default"].createElement(Body2, null, toElapsedTime(elapsedMs)));
}

function TransactionStatus(_ref2) {
  var _tx$receipt2, _tx$receipt7, _tx$receipt8;

  var tx = _ref2.tx,
      onClose = _ref2.onClose;
  var Icon = React.useMemo(function () {
    var _tx$receipt;

    return (_tx$receipt = tx.receipt) !== null && _tx$receipt !== void 0 && _tx$receipt.status ? CheckCircle : Spinner;
  }, [(_tx$receipt2 = tx.receipt) === null || _tx$receipt2 === void 0 ? void 0 : _tx$receipt2.status]);
  var heading = React.useMemo(function () {
    var _tx$receipt6;

    if (tx.info.type === exports.TransactionType.SWAP) {
      var _tx$receipt3;

      return (_tx$receipt3 = tx.receipt) !== null && _tx$receipt3 !== void 0 && _tx$receipt3.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Swap confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Swap pending"
      });
    } else if (tx.info.type === exports.TransactionType.WRAP) {
      var _tx$receipt4;

      return (_tx$receipt4 = tx.receipt) !== null && _tx$receipt4 !== void 0 && _tx$receipt4.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap pending"
      });
    } else if (tx.info.type === exports.TransactionType.UNWRAP) {
      var _tx$receipt5;

      return (_tx$receipt5 = tx.receipt) !== null && _tx$receipt5 !== void 0 && _tx$receipt5.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap confirmed"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Unwrap pending"
      });
    }

    return (_tx$receipt6 = tx.receipt) !== null && _tx$receipt6 !== void 0 && _tx$receipt6.status ? /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Transaction confirmed"
    }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Transaction pending"
    });
  }, [tx.info, (_tx$receipt7 = tx.receipt) === null || _tx$receipt7 === void 0 ? void 0 : _tx$receipt7.status]);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    flex: true,
    padded: true,
    gap: 0.75,
    align: "stretch",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default["default"].createElement(StatusHeader, {
    icon: Icon,
    iconColor: (_tx$receipt8 = tx.receipt) !== null && _tx$receipt8 !== void 0 && _tx$receipt8.status ? 'success' : undefined
  }, /*#__PURE__*/React__default["default"].createElement(Subhead1, null, heading), tx.info.type === exports.TransactionType.SWAP ? /*#__PURE__*/React__default["default"].createElement(Summary, {
    input: tx.info.trade.inputAmount,
    output: tx.info.trade.outputAmount
  }) : null), /*#__PURE__*/React__default["default"].createElement(Rule, null), /*#__PURE__*/React__default["default"].createElement(TransactionRow, {
    flex: true
  }, /*#__PURE__*/React__default["default"].createElement(ButtonSmall, null, /*#__PURE__*/React__default["default"].createElement(EtherscanLink, {
    type: ExplorerDataType.TRANSACTION,
    data: tx.info.response.hash
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "View on Etherscan"
  }))), /*#__PURE__*/React__default["default"].createElement(ElapsedTime, {
    tx: tx
  })), /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    onClick: onClose
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Close"
  })));
}

function TransactionStatusDialog(_ref3) {
  var _tx$receipt9;

  var tx = _ref3.tx,
      onClose = _ref3.onClose;
  return ((_tx$receipt9 = tx.receipt) === null || _tx$receipt9 === void 0 ? void 0 : _tx$receipt9.status) === 0 ? /*#__PURE__*/React__default["default"].createElement(ErrorDialog, {
    header: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.",
      components: {
        0: /*#__PURE__*/React__default["default"].createElement("br", null)
      }
    }),
    error: new Error('TODO(zzmp)'),
    action: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Dismiss"
    }),
    onClick: onClose
  }) : /*#__PURE__*/React__default["default"].createElement(TransactionStatus, {
    tx: tx,
    onClose: onClose
  });
}

/**
 * Does a reverse lookup for an address to find its ENS name.
 * Note this is not the same as looking up an ENS name to find an address.
 */

function useENSName(address) {
  var _resolverAddress$resu, _nameCallRes$result;

  var debouncedAddress = useDebounce(address, 200);
  var ensNodeArgument = React.useMemo(function () {
    if (!debouncedAddress || !isAddress(debouncedAddress)) return [undefined];
    return [hash.namehash("".concat(debouncedAddress.toLowerCase().substr(2), ".addr.reverse"))];
  }, [debouncedAddress]);
  var registrarContract = useENSRegistrarContract(false);
  var resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument);
  var resolverAddressResult = (_resolverAddress$resu = resolverAddress.result) === null || _resolverAddress$resu === void 0 ? void 0 : _resolverAddress$resu[0];
  var resolverContract = useENSResolverContract(resolverAddressResult && !isZero(resolverAddressResult) ? resolverAddressResult : undefined, false);
  var nameCallRes = useSingleCallResult(resolverContract, 'name', ensNodeArgument);
  var name = (_nameCallRes$result = nameCallRes.result) === null || _nameCallRes$result === void 0 ? void 0 : _nameCallRes$result[0];
  /* ENS does not enforce that an address owns a .eth domain before setting it as a reverse proxy 
     and recommends that you perform a match on the forward resolution
     see: https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution
  */

  var fwdAddr = useENSAddress(name);
  var checkedName = address === (fwdAddr === null || fwdAddr === void 0 ? void 0 : fwdAddr.address) ? name : null;
  var changed = debouncedAddress !== address;
  return React.useMemo(function () {
    return {
      ENSName: changed ? null : checkedName,
      loading: changed || resolverAddress.loading || nameCallRes.loading
    };
  }, [changed, nameCallRes.loading, checkedName, resolverAddress.loading]);
}

/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */

function useENS(nameOrAddress) {
  var validated = isAddress(nameOrAddress);
  var reverseLookup = useENSName(validated ? validated : undefined);
  var lookup = useENSAddress(nameOrAddress);
  return React.useMemo(function () {
    return {
      loading: reverseLookup.loading || lookup.loading,
      address: validated ? validated : lookup.address,
      name: reverseLookup.ENSName ? reverseLookup.ENSName : !validated && lookup.address ? nameOrAddress || null : null
    };
  }, [lookup.address, lookup.loading, nameOrAddress, reverseLookup.ENSName, reverseLookup.loading, validated]);
}

var ERC20_INTERFACE = new abi$1.Interface([{
  constant: false,
  inputs: [{
    name: '_spender',
    type: 'address'
  }, {
    name: '_value',
    type: 'uint256'
  }],
  name: 'approve',
  outputs: [{
    name: '',
    type: 'bool'
  }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function'
}]);
function approveAmountCalldata(amount, spender) {
  if (!amount.currency.isToken) throw new Error('Must call with an amount of token');
  var approveData = ERC20_INTERFACE.encodeFunctionData('approve', [spender, v3Sdk.toHex(amount.quotient)]);
  return {
    to: amount.currency.address,
    data: approveData,
    value: '0x0'
  };
}

var ArgentWalletContractABI = [
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "to",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "value",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}
				],
				name: "_transactions",
				type: "tuple[]"
			}
		],
		name: "wc_multiCall",
		outputs: [
			{
				internalType: "bytes[]",
				name: "",
				type: "bytes[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes32",
				name: "_msgHash",
				type: "bytes32"
			},
			{
				internalType: "bytes",
				name: "_signature",
				type: "bytes"
			}
		],
		name: "isValidSignature",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

function useArgentWalletContract() {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var isArgentWallet = useIsArgentWallet();
  return useContract(isArgentWallet ? account !== null && account !== void 0 ? account : undefined : undefined, ArgentWalletContractABI, true);
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param recipientAddressOrName the ENS name or address of the recipient of the swap output
 * @param signatureData the signature data of the permit of the input token amount, if available
 */
function useSwapCallArguments(trade, allowedSlippage, recipientAddressOrName, signatureData, deadline, feeOptions) {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var _useENS = useENS(recipientAddressOrName),
      recipientAddress = _useENS.address;

  var recipient = recipientAddressOrName === null ? account : recipientAddress;
  var argentWalletContract = useArgentWalletContract();
  return React.useMemo(function () {
    if (!trade || !recipient || !provider || !account || !chainId || !deadline) return [];
    var swapRouterAddress = SWAP_ROUTER_ADDRESSES[chainId];
    if (!swapRouterAddress) return [];

    var swapOptions = _objectSpread$5({
      fee: feeOptions,
      recipient: recipient,
      slippageTolerance: allowedSlippage,
      deadlineOrPreviousBlockhash: deadline.toString()
    }, signatureData ? {
      inputTokenPermit: 'allowed' in signatureData ? {
        expiry: signatureData.deadline,
        nonce: signatureData.nonce,
        s: signatureData.s,
        r: signatureData.r,
        v: signatureData.v
      } : {
        deadline: signatureData.deadline,
        amount: signatureData.amount,
        s: signatureData.s,
        r: signatureData.r,
        v: signatureData.v
      }
    } : {});

    var _SwapRouter$swapCallP = routerSdk.SwapRouter.swapCallParameters(trade, swapOptions),
        value = _SwapRouter$swapCallP.value,
        calldata = _SwapRouter$swapCallP.calldata;

    if (argentWalletContract && trade.inputAmount.currency.isToken) {
      return [{
        address: argentWalletContract.address,
        calldata: argentWalletContract.interface.encodeFunctionData('wc_multiCall', [[approveAmountCalldata(trade.maximumAmountIn(allowedSlippage), swapRouterAddress), {
          to: swapRouterAddress,
          value: value,
          data: calldata
        }]]),
        value: '0x0'
      }];
    }

    return [{
      address: swapRouterAddress,
      calldata: calldata,
      value: value
    }];
  }, [account, allowedSlippage, argentWalletContract, chainId, deadline, feeOptions, provider, recipient, signatureData, trade]);
}

/**
 * This is hacking out the revert reason from the ethers provider thrown error however it can.
 * This object seems to be undocumented by ethers.
 * @param error an error from the ethers provider
 */

function swapErrorToUserReadableMessage(error) {
  var _reason, _reason2;

  if (error.code) {
    if (error.code === ErrorCode.USER_REJECTED_REQUEST) {
      return (
        /*i18n*/
        i18n._("transaction rejected.")
      );
    }
  }

  var reason;

  while (Boolean(error)) {
    var _ref, _error$reason, _error$error, _error$data;

    reason = (_ref = (_error$reason = error.reason) !== null && _error$reason !== void 0 ? _error$reason : error.message) !== null && _ref !== void 0 ? _ref : reason;
    error = (_error$error = error.error) !== null && _error$error !== void 0 ? _error$error : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.originalError;
  }

  if (((_reason = reason) === null || _reason === void 0 ? void 0 : _reason.indexOf('execution reverted: ')) === 0) reason = reason.substr('execution reverted: '.length);

  switch (reason) {
    case 'UniswapV2Router: EXPIRED':
      return (
        /*i18n*/
        i18n._("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.")
      );

    case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
    case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
      return (
        /*i18n*/
        i18n._("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.")
      );

    case 'TransferHelper: TRANSFER_FROM_FAILED':
      return (
        /*i18n*/
        i18n._("The input token cannot be transferred. There may be an issue with the input token.")
      );

    case 'UniswapV2: TRANSFER_FAILED':
      return (
        /*i18n*/
        i18n._("The output token cannot be transferred. There may be an issue with the output token.")
      );

    case 'UniswapV2: K':
      return (
        /*i18n*/
        i18n._("The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.")
      );

    case 'Too little received':
    case 'Too much requested':
    case 'STF':
      return (
        /*i18n*/
        i18n._("This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.")
      );

    case 'TF':
      return (
        /*i18n*/
        i18n._("The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.")
      );

    default:
      if (((_reason2 = reason) === null || _reason2 === void 0 ? void 0 : _reason2.indexOf('undefined is not an object')) !== -1) {
        console.error(error, reason);
        return (
          /*i18n*/
          i18n._("An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.")
        );
      }

      return (
        /*i18n*/
        i18n._("Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.", {
          0: reason ? ": \"".concat(reason, "\"") : ''
        })
      );
  }
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// returns a function that will execute a swap, if the parameters are all valid
function useSendSwapTransaction(account, chainId, provider, trade, swapCalls) {
  return React.useMemo(function () {
    if (!trade || !provider || !account || !chainId) {
      return {
        callback: null
      };
    }

    return {
      callback: function () {
        var _onSwap = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
          var estimatedCalls, bestCallOption, errorCalls, firstNoErrorCall, _bestCallOption, _bestCallOption$call, address, calldata, value;

          return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all(swapCalls.map(function (call) {
                    var address = call.address,
                        calldata = call.calldata,
                        value = call.value;
                    var tx = !value || isZero(value) ? {
                      from: account,
                      to: address,
                      data: calldata
                    } : {
                      from: account,
                      to: address,
                      data: calldata,
                      value: value
                    };
                    return provider.estimateGas(tx).then(function (gasEstimate) {
                      return {
                        call: call,
                        gasEstimate: gasEstimate
                      };
                    }).catch(function (gasError) {
                      console.debug('Gas estimate failed, trying eth_call to extract error', call);
                      return provider.call(tx).then(function (result) {
                        console.debug('Unexpected successful call after failed estimate gas', call, gasError, result);
                        return {
                          call: call,
                          error: /*#__PURE__*/React__default["default"].createElement(Trans, {
                            id: "Unexpected issue with estimating the gas. Please try again."
                          })
                        };
                      }).catch(function (callError) {
                        console.debug('Call threw error', call, callError);
                        return {
                          call: call,
                          error: swapErrorToUserReadableMessage(callError)
                        };
                      });
                    });
                  }));

                case 2:
                  estimatedCalls = _context.sent;
                  // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
                  bestCallOption = estimatedCalls.find(function (el, ix, list) {
                    return 'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1]);
                  }); // check if any calls errored with a recognizable error

                  if (bestCallOption) {
                    _context.next = 12;
                    break;
                  }

                  errorCalls = estimatedCalls.filter(function (call) {
                    return 'error' in call;
                  });

                  if (!(errorCalls.length > 0)) {
                    _context.next = 8;
                    break;
                  }

                  throw errorCalls[errorCalls.length - 1].error;

                case 8:
                  firstNoErrorCall = estimatedCalls.find(function (call) {
                    return !('error' in call);
                  });

                  if (firstNoErrorCall) {
                    _context.next = 11;
                    break;
                  }

                  throw new Error(
                  /*i18n*/
                  i18n._("Unexpected error. Could not estimate gas for the swap."));

                case 11:
                  bestCallOption = firstNoErrorCall;

                case 12:
                  _bestCallOption = bestCallOption, _bestCallOption$call = _bestCallOption.call, address = _bestCallOption$call.address, calldata = _bestCallOption$call.calldata, value = _bestCallOption$call.value;
                  return _context.abrupt("return", provider.getSigner().sendTransaction(_objectSpread$4(_objectSpread$4({
                    from: account,
                    to: address,
                    // SwapRouter contract address
                    data: calldata
                  }, 'gasEstimate' in bestCallOption ? {
                    gasLimit: calculateGasMargin(bestCallOption.gasEstimate)
                  } : {}), value && !isZero(value) ? {
                    value: value
                  } : {})).then(function (response) {
                    return response;
                  }).catch(function (error) {
                    // if the user rejected the tx, pass this along
                    if ((error === null || error === void 0 ? void 0 : error.code) === ErrorCode.USER_REJECTED_REQUEST) {
                      throw new Error(
                      /*i18n*/
                      i18n._("Transaction rejected."));
                    } else {
                      // otherwise, the error was unexpected and we need to convey that
                      console.error("Swap failed", error, calldata, value);
                      throw new Error(
                      /*i18n*/
                      i18n._("Swap failed: {0}", {
                        0: swapErrorToUserReadableMessage(error)
                      })); // FIXME: this prints to console as [object Object]
                    }
                  }));

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function onSwap() {
          return _onSwap.apply(this, arguments);
        }

        return onSwap;
      }()
    };
  }, [account, chainId, provider, swapCalls, trade]);
}

var SwapCallbackState;

(function (SwapCallbackState) {
  SwapCallbackState[SwapCallbackState["INVALID"] = 0] = "INVALID";
  SwapCallbackState[SwapCallbackState["LOADING"] = 1] = "LOADING";
  SwapCallbackState[SwapCallbackState["VALID"] = 2] = "VALID";
})(SwapCallbackState || (SwapCallbackState = {}));

// returns a function that will execute a swap, if the parameters are all valid
// and the user has approved the slippage adjusted input amount for the trade
function useSwapCallback(_ref) {
  var trade = _ref.trade,
      allowedSlippage = _ref.allowedSlippage,
      recipientAddressOrName = _ref.recipientAddressOrName,
      signatureData = _ref.signatureData,
      deadline = _ref.deadline,
      feeOptions = _ref.feeOptions;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  var swapCalls = useSwapCallArguments(trade, allowedSlippage, recipientAddressOrName, signatureData, deadline, feeOptions);

  var _useSendSwapTransacti = useSendSwapTransaction(account, chainId, provider, trade, swapCalls),
      _callback = _useSendSwapTransacti.callback;

  var _useENS = useENS(recipientAddressOrName),
      recipientAddress = _useENS.address;

  var recipient = recipientAddressOrName === null ? account : recipientAddress;
  return React.useMemo(function () {
    if (!trade || !provider || !account || !chainId || !_callback) {
      return {
        state: SwapCallbackState.INVALID,
        error: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Missing dependencies"
        })
      };
    }

    if (!recipient) {
      if (recipientAddressOrName !== null) {
        return {
          state: SwapCallbackState.INVALID,
          error: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Invalid recipient"
          })
        };
      } else {
        return {
          state: SwapCallbackState.LOADING
        };
      }
    }

    return {
      state: SwapCallbackState.VALID,
      callback: function () {
        var _callback2 = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
          return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", _callback());

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function callback() {
          return _callback2.apply(this, arguments);
        }

        return callback;
      }()
    };
  }, [trade, provider, account, chainId, _callback, recipient, recipientAddressOrName]);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useUniversalRouterSwapCallback(trade, options) {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId,
      provider = _useWeb3React.provider;

  return React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    var _options$deadline, _SwapRouter$swapERC, data, value, tx, gasEstimate, gasLimit, response, message;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (account) {
              _context.next = 3;
              break;
            }

            throw new Error('missing account');

          case 3:
            if (chainId) {
              _context.next = 5;
              break;
            }

            throw new Error('missing chainId');

          case 5:
            if (provider) {
              _context.next = 7;
              break;
            }

            throw new Error('missing provider');

          case 7:
            if (trade) {
              _context.next = 9;
              break;
            }

            throw new Error('missing trade');

          case 9:
            _SwapRouter$swapERC = universalRouterSdk.SwapRouter.swapERC20CallParameters(trade, {
              slippageTolerance: options.slippageTolerance,
              deadlineOrPreviousBlockhash: (_options$deadline = options.deadline) === null || _options$deadline === void 0 ? void 0 : _options$deadline.toString(),
              inputTokenPermit: options.permit,
              fee: options.feeOptions
            }), data = _SwapRouter$swapERC.calldata, value = _SwapRouter$swapERC.value;
            tx = _objectSpread$3({
              from: account,
              to: universalRouterSdk.UNIVERSAL_ROUTER_ADDRESS(chainId),
              data: data
            }, value && !isZero(value) ? {
              value: v3Sdk.toHex(value)
            } : {});
            _context.prev = 11;
            _context.next = 14;
            return provider.estimateGas(tx);

          case 14:
            gasEstimate = _context.sent;
            _context.next = 22;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](11);
            _context.next = 21;
            return provider.call(tx);

          case 21:
            throw new Error('unexpected issue with gas estimation; please try again');

          case 22:
            gasLimit = calculateGasMargin(gasEstimate);
            _context.next = 25;
            return provider.getSigner().sendTransaction(_objectSpread$3(_objectSpread$3({}, tx), {}, {
              gasLimit: gasLimit
            }));

          case 25:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](0);
            message = swapErrorToUserReadableMessage(_context.t1);
            throw new Error("Trade failed: ".concat(message));

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 29], [11, 17]]);
  })), [account, chainId, options.deadline, options.feeOptions, options.permit, options.slippageTolerance, provider, trade]);
}

/**
 * An approving AllowanceButton.
 * Should only be rendered if a valid trade exists that is not yet allowed.
 */
function AllowanceButton(_ref) {
  var token = _ref.token,
      isApprovalLoading = _ref.isApprovalLoading,
      approveAndPermit = _ref.approveAndPermit,
      color = _ref.color;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      isFailed = _useState4[0],
      setIsFailed = _useState4[1];

  var pendingApproval = usePendingApproval(token, permit2Sdk.PERMIT2_ADDRESS);
  React.useEffect(function () {
    // Reset pending/failed state if currency changes.
    setIsPending(false);
    setIsFailed(false);
  }, [token]);
  var onClick = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsPending(true);
            _context.prev = 1;
            _context.next = 4;
            return approveAndPermit === null || approveAndPermit === void 0 ? void 0 : approveAndPermit();

          case 4:
            setIsFailed(false);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
            setIsFailed(true);

          case 11:
            _context.prev = 11;
            setIsPending(false);
            return _context.finish(11);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7, 11, 14]]);
  })), [approveAndPermit]);
  var action = React.useMemo(function () {
    if (isPending) {
      return {
        icon: Spinner,
        message:
        /*i18n*/
        i18n._("Approve in your wallet")
      };
    } else if (isApprovalLoading) {
      return {
        icon: Spinner,
        message: pendingApproval ? /*#__PURE__*/React__default["default"].createElement(EtherscanLink, {
          type: ExplorerDataType.TRANSACTION,
          data: pendingApproval
        }, /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Approval pending"
        })) : /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Approval pending"
        })
      };
    } else if (isFailed) {
      return {
        message:
        /*i18n*/
        i18n._("Approval failed"),
        onClick: onClick
      };
    } else {
      var _token$symbol;

      return {
        tooltipContent:
        /*i18n*/
        i18n._("Permission is required for Uniswap to swap each token. This will expire after one month for your security."),
        message:
        /*i18n*/
        i18n._("Approve use of {0}", {
          0: (_token$symbol = token === null || token === void 0 ? void 0 : token.symbol) !== null && _token$symbol !== void 0 ? _token$symbol : 'token'
        }),
        onClick: onClick
      };
    }
  }, [isApprovalLoading, isFailed, isPending, onClick, pendingApproval, token === null || token === void 0 ? void 0 : token.symbol]);
  return /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    color: color,
    disabled: !(action !== null && action !== void 0 && action.onClick),
    action: action
  }, isFailed ?
  /*i18n*/
  i18n._("Try again") :
  /*i18n*/
  i18n._("Approve"));
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * An approving ActionButton.
 * Should only be rendered if a valid trade exists that is not yet approved.
 */

function ApproveButton(_ref) {
  var _trade$inputAmount;

  var color = _ref.color,
      trade = _ref.trade,
      state = _ref.state,
      approve = _ref.approve,
      onSubmit = _ref.onSubmit;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var onApprove = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setIsPending(true);
            _context2.prev = 1;
            _context2.next = 4;
            return onSubmit( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
              var info;
              return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return approve === null || approve === void 0 ? void 0 : approve();

                    case 2:
                      info = _context.sent;

                      if (info) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      return _context.abrupt("return", _objectSpread$2({
                        type: exports.TransactionType.APPROVAL
                      }, info));

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 4:
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0); // ignore error

          case 9:
            _context2.prev = 9;
            setIsPending(false);
            return _context2.finish(9);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 6, 9, 12]]);
  })), [approve, onSubmit]);
  var currency = trade === null || trade === void 0 ? void 0 : (_trade$inputAmount = trade.inputAmount) === null || _trade$inputAmount === void 0 ? void 0 : _trade$inputAmount.currency;
  var symbol = (currency === null || currency === void 0 ? void 0 : currency.symbol) || ''; // Reset the pending state if currency changes.

  React.useEffect(function () {
    return setIsPending(false);
  }, [currency]);

  var _useWeb3React = core.useWeb3React(),
      chainId = _useWeb3React.chainId;

  var spender = chainId ? SWAP_ROUTER_ADDRESSES[chainId] : undefined;
  var pendingApprovalHash = usePendingApproval(currency !== null && currency !== void 0 && currency.isToken ? currency : undefined, spender);
  var actionProps = React.useMemo(function () {
    switch (state) {
      case SwapApprovalState.REQUIRES_APPROVAL:
        if (isPending) {
          return {
            message: /*#__PURE__*/React__default["default"].createElement(Trans, {
              id: "Approve in your wallet"
            }),
            icon: Spinner
          };
        }

        return {
          message: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Approve {symbol} first",
            values: {
              symbol: symbol
            }
          }),
          onClick: onApprove,
          children: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Approve"
          })
        };

      case SwapApprovalState.REQUIRES_SIGNATURE:
        if (isPending) {
          return {
            message: /*#__PURE__*/React__default["default"].createElement(Trans, {
              id: "Allow in your wallet"
            }),
            icon: Spinner
          };
        }

        return {
          message: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Allow {symbol} first",
            values: {
              symbol: symbol
            }
          }),
          onClick: onApprove,
          children: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Allow"
          })
        };

      case SwapApprovalState.PENDING_APPROVAL:
        return {
          message: /*#__PURE__*/React__default["default"].createElement(EtherscanLink, {
            type: ExplorerDataType.TRANSACTION,
            data: pendingApprovalHash
          }, /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Approval pending"
          })),
          icon: Spinner
        };

      case SwapApprovalState.PENDING_SIGNATURE:
        return {
          message: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Allowance pending"
          }),
          icon: Spinner
        };

      default:
        return;
    }
  }, [isPending, onApprove, pendingApprovalHash, state, symbol]);
  return /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    color: color,
    action: actionProps
  });
}

/**
 * A swapping ActionButton.
 * Should only be rendered if a valid swap exists.
 */

function SwapButton(_ref) {
  var color = _ref.color,
      disabled = _ref.disabled,
      onSubmit = _ref.onSubmit;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      chainId = _useWeb3React.chainId;

  var _useSwapInfo = useSwapInfo(),
      inputUSDC = _useSwapInfo[exports.Field.INPUT].usdc,
      outputUSDC = _useSwapInfo[exports.Field.OUTPUT].usdc,
      _useSwapInfo$trade = _useSwapInfo.trade,
      trade = _useSwapInfo$trade.trade,
      gasUseEstimateUSD = _useSwapInfo$trade.gasUseEstimateUSD,
      approval = _useSwapInfo.approval,
      allowance = _useSwapInfo.allowance,
      slippage = _useSwapInfo.slippage,
      impact = _useSwapInfo.impact;

  var deadline = useTransactionDeadline();
  var feeOptions = utils.useAtomValue(feeOptionsAtom);
  var permit2Enabled = usePermit2();

  var _useSwapCallback = useSwapCallback({
    trade: permit2Enabled ? undefined : trade,
    allowedSlippage: slippage.allowed,
    recipientAddressOrName: account !== null && account !== void 0 ? account : null,
    signatureData: approval === null || approval === void 0 ? void 0 : approval.signatureData,
    deadline: deadline,
    feeOptions: feeOptions
  }),
      swapRouterCallback = _useSwapCallback.callback;

  var universalRouterSwapCallback = useUniversalRouterSwapCallback(permit2Enabled ? trade : undefined, {
    slippageTolerance: slippage.allowed,
    deadline: deadline,
    permit: allowance.state === AllowanceState.ALLOWED ? allowance.permitSignature : undefined,
    feeOptions: feeOptions
  });
  var swapCallback = permit2Enabled ? universalRouterSwapCallback : swapRouterCallback;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // Close the review modal if there is no available trade.


  React.useEffect(function () {
    return setOpen(function (open) {
      return trade ? open : false;
    });
  }, [trade]); // Close the review modal on chain change.

  React.useEffect(function () {
    return setOpen(false);
  }, [chainId]);
  var setOldestValidBlock = useSetOldestValidBlock();
  var onSwap = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return onSubmit( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
              var response;
              return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return swapCallback === null || swapCallback === void 0 ? void 0 : swapCallback();

                    case 2:
                      response = _context.sent;

                      if (response) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      // Set the block containing the response to the oldest valid block to ensure that the
                      // completed trade's impact is reflected in future fetched trades.
                      response.wait(1).then(function (receipt) {
                        setOldestValidBlock(receipt.blockNumber);
                      });
                      invariant__default["default"](trade);
                      return _context.abrupt("return", {
                        type: exports.TransactionType.SWAP,
                        response: response,
                        tradeType: trade.tradeType,
                        trade: trade,
                        slippageTolerance: slippage.allowed
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 3:
            // Only close the review modal if the swap submitted (ie no-throw).
            setOpen(false);
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0); // ignore error

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  })), [onSubmit, setOldestValidBlock, slippage.allowed, swapCallback, trade]);
  var onReviewSwapClick = useConditionalHandler(utils.useAtomValue(swapEventHandlersAtom).onReviewSwapClick);
  var onClick = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
    return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = setOpen;
            _context3.next = 3;
            return onReviewSwapClick();

          case 3:
            _context3.t1 = _context3.sent;
            (0, _context3.t0)(_context3.t1);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [onReviewSwapClick]);

  if (permit2Enabled) {
    if (!disabled && allowance.state === AllowanceState.REQUIRED) {
      return /*#__PURE__*/React__default["default"].createElement(AllowanceButton, _extends__default["default"]({
        color: color
      }, allowance));
    }
  } else {
    if (!disabled && approval.state !== SwapApprovalState.APPROVED) {
      return /*#__PURE__*/React__default["default"].createElement(ApproveButton, _extends__default["default"]({
        color: color,
        onSubmit: onSubmit,
        trade: trade
      }, approval));
    }
  }

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    color: color,
    onClick: onClick,
    disabled: disabled || permit2Enabled && allowance.state === AllowanceState.LOADING
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Review swap"
  })), open && trade && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    color: "dialog",
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(SummaryDialog, {
    trade: trade,
    slippage: slippage,
    gasUseEstimateUSD: gasUseEstimateUSD,
    inputUSDC: inputUSDC,
    outputUSDC: outputUSDC,
    impact: impact,
    onConfirm: onSwap
  })));
}

var _JSON_RPC_FALLBACK_EN;
/**
 * Fallback JSON RPC endpoints.
 * These are used if the integrator does not provide an endpoint, or if the endpoint does not work.
 *
 * MetaMask allows switching to any URL, but displays a warning if it is not on the "Safe" list:
 * https://github.com/MetaMask/metamask-mobile/blob/bdb7f37c90e4fc923881a07fca38d4e77c73a579/app/core/RPCMethods/wallet_addEthereumChain.js#L228-L235
 * https://chainid.network/chains.json
 *
 * These "Safe" URLs are listed first, followed by other fallback URLs, which are taken from chainlist.org.
 */

var JSON_RPC_FALLBACK_ENDPOINTS = (_JSON_RPC_FALLBACK_EN = {}, _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.MAINNET, [// "Safe" URLs
'https://cloudflare-eth.com', // "Fallback" URLs
'https://rpc.ankr.com/eth', 'https://eth-mainnet.public.blastapi.io']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.ROPSTEN, [// "Fallback" URLs
'https://rpc.ankr.com/eth_ropsten']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.RINKEBY, [// "Fallback" URLs
'https://rinkeby-light.eth.linkpool.io/']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.GOERLI, [// "Safe" URLs
'https://rpc.goerli.mudit.blog/', // "Fallback" URLs
'https://rpc.ankr.com/eth_goerli']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.KOVAN, [// "Fallback" URLs
'https://eth-kovan.public.blastapi.io']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.POLYGON, [// "Safe" URLs
'https://polygon-rpc.com/', 'https://rpc-mainnet.matic.network', 'https://matic-mainnet.chainstacklabs.com', 'https://rpc-mainnet.maticvigil.com', 'https://rpc-mainnet.matic.quiknode.pro', 'https://matic-mainnet-full-rpc.bwarelabs.com']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.POLYGON_MUMBAI, [// "Safe" URLs
'https://matic-mumbai.chainstacklabs.com', 'https://rpc-mumbai.maticvigil.com', 'https://matic-testnet-archive-rpc.bwarelabs.com']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.ARBITRUM_ONE, [// "Safe" URLs
'https://arb1.arbitrum.io/rpc', // "Fallback" URLs
'https://arbitrum.public-rpc.com']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.ARBITRUM_RINKEBY, [// "Safe" URLs
'https://rinkeby.arbitrum.io/rpc']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.OPTIMISM, [// "Safe" URLs
'https://mainnet.optimism.io/', // "Fallback" URLs
'https://rpc.ankr.com/optimism']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.OPTIMISTIC_KOVAN, [// "Safe" URLs
'https://kovan.optimism.io']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.CELO, [// "Safe" URLs
'https://forno.celo.org']), _defineProperty__default["default"](_JSON_RPC_FALLBACK_EN, exports.SupportedChainId.CELO_ALFAJORES, [// "Safe" URLs
'https://alfajores-forno.celo-testnet.org']), _JSON_RPC_FALLBACK_EN);

var JsonRpcUrlMapContext = /*#__PURE__*/React.createContext(undefined);
function Provider$2(_ref) {
  var jsonRpcMap = _ref.jsonRpcMap,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(JsonRpcUrlMapContext.Provider, {
    value: jsonRpcMap
  }, children);
}
function useJsonRpcUrlsMap() {
  var jsonRpcMap = React.useContext(JsonRpcUrlMapContext);
  return React.useMemo(function () {
    return toJsonRpcUrlsMap(jsonRpcMap);
  }, [jsonRpcMap]);
}

function toJsonRpcMap(getChainConnections) {
  var _ref2;

  return _ref2 = {}, _defineProperty__default["default"](_ref2, exports.SupportedChainId.MAINNET, getChainConnections(exports.SupportedChainId.MAINNET)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.ROPSTEN, getChainConnections(exports.SupportedChainId.ROPSTEN)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.RINKEBY, getChainConnections(exports.SupportedChainId.RINKEBY)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.GOERLI, getChainConnections(exports.SupportedChainId.GOERLI)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.KOVAN, getChainConnections(exports.SupportedChainId.KOVAN)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.POLYGON, getChainConnections(exports.SupportedChainId.POLYGON)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.POLYGON_MUMBAI, getChainConnections(exports.SupportedChainId.POLYGON_MUMBAI)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.ARBITRUM_ONE, getChainConnections(exports.SupportedChainId.ARBITRUM_ONE)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.ARBITRUM_RINKEBY, getChainConnections(exports.SupportedChainId.ARBITRUM_RINKEBY)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.OPTIMISM, getChainConnections(exports.SupportedChainId.OPTIMISM)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.OPTIMISTIC_KOVAN, getChainConnections(exports.SupportedChainId.OPTIMISTIC_KOVAN)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.CELO, getChainConnections(exports.SupportedChainId.CELO)), _defineProperty__default["default"](_ref2, exports.SupportedChainId.CELO_ALFAJORES, getChainConnections(exports.SupportedChainId.CELO_ALFAJORES)), _ref2;
}

function getChainConnections(connectionMap, chainId) {
  var _filter;

  var value = connectionMap === null || connectionMap === void 0 ? void 0 : connectionMap[chainId];
  return (_filter = (Array.isArray(value) ? value : [value]).filter(function (value) {
    return Boolean(value);
  })).concat.apply(_filter, _toConsumableArray__default["default"](JSON_RPC_FALLBACK_ENDPOINTS[chainId]));
}

function toJsonRpcConnectionMap(connectionMap) {
  function getJsonRpcProvider(chainId) {
    var _getChainConnections = getChainConnections(connectionMap, chainId),
        _getChainConnections2 = _slicedToArray__default["default"](_getChainConnections, 1),
        connection = _getChainConnections2[0];

    return providers.JsonRpcProvider.isProvider(connection) ? connection : new providers.StaticJsonRpcProvider(connection, Number(chainId));
  }

  return toJsonRpcMap(getJsonRpcProvider);
}
function toJsonRpcUrlMap(connectionMap) {
  function getJsonRpcUrl(chainId) {
    var _getChainConnections3 = getChainConnections(connectionMap, chainId),
        _getChainConnections4 = _slicedToArray__default["default"](_getChainConnections3, 1),
        connection = _getChainConnections4[0];

    return providers.JsonRpcProvider.isProvider(connection) ? connection.connection.url : connection;
  }

  return toJsonRpcMap(getJsonRpcUrl);
}
function toJsonRpcUrlsMap(connectionMap) {
  function getJsonRpcUrls(chainId) {
    var connections = getChainConnections(connectionMap, chainId);
    return connections.map(function (connection) {
      return providers.JsonRpcProvider.isProvider(connection) ? connection.connection.url : connection;
    });
  }

  return toJsonRpcMap(getJsonRpcUrls);
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/** Defined by EIP-3085. */

var onSwitchChainAtom = jotai.atom(undefined);

function toHex(chainId) {
  return "0x".concat(chainId.toString(16));
}

function addChain(_x, _x2) {
  return _addChain.apply(this, arguments);
}

function _addChain() {
  _addChain = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(provider, addChainParameter) {
    var _iterator, _step, rpcUrl;

    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(addChainParameter.rpcUrls);
            _context2.prev = 1;

            _iterator.s();

          case 3:
            if ((_step = _iterator.n()).done) {
              _context2.next = 17;
              break;
            }

            rpcUrl = _step.value;
            _context2.prev = 5;
            _context2.next = 8;
            return provider.send('wallet_addEthereumChain', [_objectSpread$1(_objectSpread$1({}, addChainParameter), {}, {
              rpcUrls: [rpcUrl]
            })]);

          case 8:
            _context2.next = 15;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](5);

            if (!((_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.code) !== ErrorCode.USER_REJECTED_REQUEST)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("continue", 15);

          case 14:
            throw _context2.t0;

          case 15:
            _context2.next = 3;
            break;

          case 17:
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t1 = _context2["catch"](1);

            _iterator.e(_context2.t1);

          case 22:
            _context2.prev = 22;

            _iterator.f();

            return _context2.finish(22);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 19, 22, 25], [5, 10]]);
  }));
  return _addChain.apply(this, arguments);
}

function switchChain(_x3, _x4, _x5) {
  return _switchChain.apply(this, arguments);
}

function _switchChain() {
  _switchChain = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(provider, chainId, addChainParameter) {
    return _regeneratorRuntime__default["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return provider.send('wallet_switchEthereumChain', [{
              chainId: toHex(chainId)
            }]);

          case 3:
            _context3.next = 12;
            break;

          case 5:
            _context3.prev = 5;
            _context3.t0 = _context3["catch"](0);

            if (!((_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.code) === ErrorCode.CHAIN_NOT_ADDED && addChainParameter !== null && addChainParameter !== void 0 && addChainParameter.rpcUrls.length)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 10;
            return addChain(provider, addChainParameter);

          case 10:
            return _context3.abrupt("return", switchChain(provider, chainId));

          case 11:
            throw _context3.t0;

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return _switchChain.apply(this, arguments);
}

function useSwitchChain() {
  var _useWeb3React = core.useWeb3React(),
      connector = _useWeb3React.connector,
      provider = _useWeb3React.provider;

  var connectors = useConnectors();
  var urlMap = useJsonRpcUrlsMap();
  var onSwitchChain = utils.useAtomValue(onSwitchChainAtom);
  return React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(chainId) {
      var _getChainInfo, chainName, nativeCurrency, explorer, addChainParameter, switching;

      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getChainInfo = getChainInfo(chainId), chainName = _getChainInfo.label, nativeCurrency = _getChainInfo.nativeCurrency, explorer = _getChainInfo.explorer;
              addChainParameter = {
                chainId: toHex(chainId),
                chainName: chainName,
                nativeCurrency: nativeCurrency,
                blockExplorerUrls: [explorer],
                rpcUrls: urlMap[chainId]
              };
              _context.prev = 2;

              if (!(connector === connectors.network)) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return connector.activate(chainId);

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
              if (!(connector === connectors.user)) {
                _context.next = 19;
                break;
              }

              _context.prev = 8;
              switching = onSwitchChain === null || onSwitchChain === void 0 ? void 0 : onSwitchChain(addChainParameter); // If onSwitchChain returns a Promise, the integrator is responsible for any chain switching. Await and return.

              if (!switching) {
                _context.next = 14;
                break;
              }

              _context.next = 13;
              return switching;

            case 13:
              return _context.abrupt("return", _context.sent);

            case 14:
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](8);
              return _context.abrupt("return");

            case 19:
              _context.prev = 19;

              if (provider) {
                _context.next = 22;
                break;
              }

              throw new Error();

            case 22:
              _context.next = 24;
              return Promise.all([// Await both the user action (switchChain) and its result (chainChanged)
              // so that the callback does not resolve before the chain switch has visibly occured.
              new Promise(function (resolve) {
                return provider.once('chainChanged', resolve);
              }), switchChain(provider, chainId, addChainParameter)]);

            case 24:
              _context.next = 32;
              break;

            case 26:
              _context.prev = 26;
              _context.t1 = _context["catch"](19);

              if (!((_context.t1 === null || _context.t1 === void 0 ? void 0 : _context.t1.code) === ErrorCode.USER_REJECTED_REQUEST)) {
                _context.next = 30;
                break;
              }

              return _context.abrupt("return");

            case 30:
              _context.next = 32;
              return connector.activate(chainId);

            case 32:
              _context.next = 37;
              break;

            case 34:
              _context.prev = 34;
              _context.t2 = _context["catch"](2);
              throw new Error("Failed to switch network: ".concat(_context.t2));

            case 37:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 34], [8, 16], [19, 26]]);
    }));

    return function (_x6) {
      return _ref.apply(this, arguments);
    };
  }(), [connector, connectors.network, connectors.user, onSwitchChain, provider, urlMap]);
}

/** A chain-switching ActionButton. */
function ChainSwitchButton(_ref) {
  var color = _ref.color,
      chainId = _ref.chainId;

  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isPending = _useState2[0],
      setIsPending = _useState2[1];

  var switchChain = useSwitchChain();

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var onSwitchChain = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsPending(true);
            _context.prev = 1;
            _context.next = 4;
            return switchChain(chainId);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            setError(_context.t0);

          case 9:
            _context.prev = 9;
            setIsPending(false);
            return _context.finish(9);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6, 9, 12]]);
  })), [chainId, switchChain]);
  if (error) throw error;
  var actionProps = React.useMemo(function () {
    return isPending ? {
      message: account ? /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switch network in your wallet"
      }) : /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switching network"
      }),
      icon: Spinner
    } : {
      message: /*#__PURE__*/React__default["default"].createElement(Trans, {
        id: "Switch network"
      }),
      onClick: onSwitchChain
    };
  }, [account, isPending, onSwitchChain]);
  return /*#__PURE__*/React__default["default"].createElement(ActionButton, {
    color: color,
    disabled: isPending,
    action: actionProps
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Switch"
  }));
}

/** Submits a transaction. */

function useOnSubmit() {
  var addTransactionInfo = useAddTransactionInfo();
  var setDisplayTxHash = utils.useUpdateAtom(displayTxHashAtom);

  var _useSwapAmount = useSwapAmount(exports.Field.INPUT),
      _useSwapAmount2 = _slicedToArray__default["default"](_useSwapAmount, 2),
      setInputAmount = _useSwapAmount2[1];

  return React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(submit) {
      var info;
      return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return submit();

            case 2:
              info = _context.sent;

              if (info) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              addTransactionInfo(info); // For actionable transactions, display the tx and reset the input.

              _context.t0 = info.type;
              _context.next = _context.t0 === exports.TransactionType.SWAP ? 9 : _context.t0 === exports.TransactionType.WRAP ? 9 : _context.t0 === exports.TransactionType.UNWRAP ? 9 : 15;
              break;

            case 9:
              setDisplayTxHash(info.response.hash);

              if (!isAnimating(document)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", new Promise(function (resolve) {
                var onAnimationEnd = function onAnimationEnd() {
                  document.removeEventListener('animationend', onAnimationEnd);
                  setInputAmount('');
                };

                document.addEventListener('animationend', onAnimationEnd);
              }));

            case 14:
              setInputAmount('');

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [addTransactionInfo, setDisplayTxHash, setInputAmount]);
}

/**
 * A wrapping ActionButton.
 * Should only be rendered if a valid wrap exists.
 */

function WrapButton(_ref) {
  var color = _ref.color,
      disabled = _ref.disabled,
      onSubmit = _ref.onSubmit;

  var _useWrapCallback = useWrapCallback(),
      wrapType = _useWrapCallback.type,
      wrapCallback = _useWrapCallback.callback;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isPending = _useState2[0],
      setIsPending = _useState2[1]; // Reset the pending state if user updates the wrap.


  React.useEffect(function () {
    return setIsPending(false);
  }, [wrapCallback]);
  var native = useNativeCurrency();
  var inputCurrency = wrapType === exports.TransactionType.WRAP ? native : native.wrapped;
  var onWrap = React.useCallback( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setIsPending(true);
            _context2.prev = 1;
            _context2.next = 4;
            return onSubmit( /*#__PURE__*/_asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
              var _response$value$toStr, _response$value;

              var response, amount;
              return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return wrapCallback();

                    case 2:
                      response = _context.sent;

                      if (response) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      invariant__default["default"](wrapType !== undefined); // if response is valid, then so is wrapType

                      // if response is valid, then so is wrapType
                      amount = sdkCore.CurrencyAmount.fromRawAmount(native, (_response$value$toStr = (_response$value = response.value) === null || _response$value === void 0 ? void 0 : _response$value.toString()) !== null && _response$value$toStr !== void 0 ? _response$value$toStr : '0');
                      return _context.abrupt("return", {
                        response: response,
                        type: wrapType,
                        amount: amount
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 4:
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0); // ignore error

          case 9:
            _context2.prev = 9;
            setIsPending(false);
            return _context2.finish(9);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 6, 9, 12]]);
  })), [native, onSubmit, wrapCallback, wrapType]);
  var actionProps = React.useMemo(function () {
    return isPending ? {
      action: {
        message: /*#__PURE__*/React__default["default"].createElement(Trans, {
          id: "Confirm in your wallet"
        }),
        icon: Spinner
      }
    } : {
      onClick: onWrap
    };
  }, [isPending, onWrap]);
  return /*#__PURE__*/React__default["default"].createElement(ActionButton, _extends__default["default"]({
    color: color
  }, actionProps, {
    disabled: disabled || isPending
  }), /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "{0} {1}",
    values: {
      0: wrapType === exports.TransactionType.WRAP ? 'Wrap' : 'Unwrap',
      1: inputCurrency === null || inputCurrency === void 0 ? void 0 : inputCurrency.symbol
    }
  }));
}

function SwapActionButton() {
  var _useSwapInfo = useSwapInfo(),
      _useSwapInfo$Field$IN = _useSwapInfo[exports.Field.INPUT],
      inputCurrency = _useSwapInfo$Field$IN.currency,
      inputCurrencyAmount = _useSwapInfo$Field$IN.amount,
      inputCurrencyBalance = _useSwapInfo$Field$IN.balance,
      outputCurrency = _useSwapInfo[exports.Field.OUTPUT].currency,
      error = _useSwapInfo.error,
      trade = _useSwapInfo.trade.trade;

  var isWrap = useIsWrap();
  var isDisabled = React.useMemo(function () {
    return error !== undefined || !isWrap && !trade || !(inputCurrencyAmount && inputCurrencyBalance) || inputCurrencyBalance.lessThan(inputCurrencyAmount);
  }, [error, isWrap, trade, inputCurrencyAmount, inputCurrencyBalance]);
  var onSubmit = useOnSubmit();

  var _useTheme2 = _styled.useTheme(),
      tokenColorExtraction = _useTheme2.tokenColorExtraction;

  var color = tokenColorExtraction ? 'interactive' : 'accent';

  if (error === ChainError.MISMATCHED_CHAINS) {
    var _ref, _inputCurrency$chainI;

    var tokenChainId = (_ref = (_inputCurrency$chainI = inputCurrency === null || inputCurrency === void 0 ? void 0 : inputCurrency.chainId) !== null && _inputCurrency$chainI !== void 0 ? _inputCurrency$chainI : outputCurrency === null || outputCurrency === void 0 ? void 0 : outputCurrency.chainId) !== null && _ref !== void 0 ? _ref : exports.SupportedChainId.MAINNET;
    return /*#__PURE__*/React__default["default"].createElement(ChainSwitchButton, {
      color: color,
      chainId: tokenChainId
    });
  } else if (isWrap) {
    return /*#__PURE__*/React__default["default"].createElement(WrapButton, {
      color: color,
      onSubmit: onSubmit,
      disabled: isDisabled
    });
  } else {
    return /*#__PURE__*/React__default["default"].createElement(SwapButton, {
      color: color,
      onSubmit: onSubmit,
      disabled: isDisabled
    });
  }
}

var _line;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDotLine = function SvgDotLine(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends({
    width: "100%",
    height: 35,
    viewBox: "850 0 300 200",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _line || (_line = /*#__PURE__*/React__default["default"].createElement("line", {
    x1: 0,
    x2: 3000,
    y1: 100,
    y2: 100,
    stroke: "currentColor",
    strokeWidth: 20,
    strokeLinecap: "round",
    strokeDasharray: "1, 45"
  })));
};

/**
 * Loops through all routes on a trade and returns an array of diagram entries.
 */
function getTokenPath(trade) {
  return trade.swaps.map(function (_ref) {
    var _ref$route = _ref.route,
        tokenPath = _ref$route.path,
        pools = _ref$route.pools,
        protocol = _ref$route.protocol,
        inputAmount = _ref.inputAmount,
        outputAmount = _ref.outputAmount;
    var portion = isExactInput(trade.tradeType) ? inputAmount.divide(trade.inputAmount) : outputAmount.divide(trade.outputAmount);
    var percent = new sdkCore.Percent(portion.numerator, portion.denominator);
    var path = [];

    for (var i = 0; i < pools.length; i++) {
      var nextPool = pools[i];
      var tokenIn = tokenPath[i];
      var tokenOut = tokenPath[i + 1];
      var entry = [tokenIn, tokenOut, getFeeAmount(nextPool)];
      path.push(entry);
    }

    return {
      percent: percent,
      path: path,
      protocol: protocol
    };
  });
}

var StyledAutoRouterLabel = /*#__PURE__*/_styled__default["default"](ButtonSmall).withConfig({
  displayName: "RoutingDiagram__StyledAutoRouterLabel",
  componentId: "sc-3p4p27-0"
})(["@supports (-webkit-background-clip:text) and (-webkit-text-fill-color:transparent){background-image:linear-gradient(90deg,#2172e5 0%,#54e521 163.16%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}"]);

function Header() {
  return /*#__PURE__*/React__default["default"].createElement(Subhead2, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    justify: "left",
    gap: 0.25
  }, /*#__PURE__*/React__default["default"].createElement(AutoRouter, null), /*#__PURE__*/React__default["default"].createElement(StyledAutoRouterLabel, {
    color: "primary",
    lineHeight: '16px'
  }, /*#__PURE__*/React__default["default"].createElement(Trans, {
    id: "Auto Router"
  }))));
}

var Dots = /*#__PURE__*/_styled__default["default"](SvgDotLine).withConfig({
  displayName: "RoutingDiagram__Dots",
  componentId: "sc-3p4p27-1"
})(["color:", ";position:absolute;z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.outline;
}, Layer.UNDERLAYER);

var RouteRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "RoutingDiagram__RouteRow",
  componentId: "sc-3p4p27-2"
})(["flex-wrap:nowrap;"]);

var RouteNode = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "RoutingDiagram__RouteNode",
  componentId: "sc-3p4p27-3"
})(["background-color:", ";border-radius:", ";margin-left:1.625em;padding:0.25em 0.375em;width:max-content;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.interactive;
}, function (_ref3) {
  var _theme$borderRadius;

  var theme = _ref3.theme;
  return "".concat(((_theme$borderRadius = theme.borderRadius) !== null && _theme$borderRadius !== void 0 ? _theme$borderRadius : 1) * 0.5, "em");
});

var RouteBadge = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "RoutingDiagram__RouteBadge",
  componentId: "sc-3p4p27-4"
})(["background-color:", ";border-radius:", ";padding:0.125em;"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.module;
}, function (_ref5) {
  var _theme$borderRadius2;

  var theme = _ref5.theme;
  return "".concat(((_theme$borderRadius2 = theme.borderRadius) !== null && _theme$borderRadius2 !== void 0 ? _theme$borderRadius2 : 1) * 0.25, "em");
});

function RouteDetail(_ref6) {
  var route = _ref6.route;
  var protocol = route.protocol.toUpperCase();
  return /*#__PURE__*/React__default["default"].createElement(RouteNode, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.375
  }, /*#__PURE__*/React__default["default"].createElement(Caption$1, null, route.percent.toSignificant(2), "%"), /*#__PURE__*/React__default["default"].createElement(RouteBadge, null, /*#__PURE__*/React__default["default"].createElement(Badge, {
    color: "secondary"
  }, protocol))));
}

var RoutePool = /*#__PURE__*/_styled__default["default"](RouteNode).withConfig({
  displayName: "RoutingDiagram__RoutePool",
  componentId: "sc-3p4p27-5"
})(["margin:0 0.75em;"]);

function Pool(_ref7) {
  var originCurrency = _ref7.originCurrency,
      targetCurrency = _ref7.targetCurrency,
      feeAmount = _ref7.feeAmount;
  return /*#__PURE__*/React__default["default"].createElement(RoutePool, null, /*#__PURE__*/React__default["default"].createElement(Caption$1, null, /*#__PURE__*/React__default["default"].createElement(Row, {
    gap: 0.25
  }, /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: originCurrency
  }), /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: targetCurrency,
    style: {
      marginLeft: '-0.65em'
    }
  }), feeAmount / 10000, "%")));
}

function Route(_ref8) {
  var route = _ref8.route;

  var _route$path$ = _slicedToArray__default["default"](route.path[0], 1),
      originCurrency = _route$path$[0];

  var _route$path = _slicedToArray__default["default"](route.path[route.path.length - 1], 2),
      targetCurrency = _route$path[1];

  return /*#__PURE__*/React__default["default"].createElement(Row, {
    align: "center",
    style: {
      gridTemplateColumns: '1em 1fr 1em'
    }
  }, /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: originCurrency
  }), /*#__PURE__*/React__default["default"].createElement(RouteRow, {
    flex: true,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React__default["default"].createElement(Dots, null), /*#__PURE__*/React__default["default"].createElement(RouteDetail, {
    route: route
  }), /*#__PURE__*/React__default["default"].createElement(RouteRow, {
    justify: "space-evenly",
    flex: true
  }, route.path.map(function (_ref9, index) {
    var _ref10 = _slicedToArray__default["default"](_ref9, 3),
        originCurrency = _ref10[0],
        targetCurrency = _ref10[1],
        feeAmount = _ref10[2];

    return /*#__PURE__*/React__default["default"].createElement(Pool, {
      key: index,
      originCurrency: originCurrency,
      targetCurrency: targetCurrency,
      feeAmount: feeAmount
    });
  }))), /*#__PURE__*/React__default["default"].createElement(TokenImg$1, {
    token: targetCurrency
  }));
}

function RoutingDiagram(_ref11) {
  var trade = _ref11.trade;
  var routes = React.useMemo(function () {
    return getTokenPath(trade);
  }, [trade]);
  return /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Header, null), /*#__PURE__*/React__default["default"].createElement(Rule, null), routes.map(function (route, index) {
    return /*#__PURE__*/React__default["default"].createElement(Route, {
      key: index,
      route: route
    });
  }));
}

var Loading = /*#__PURE__*/_styled__default["default"].span.withConfig({
  displayName: "Caption__Loading",
  componentId: "sc-7raauu-0"
})(["color:", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.secondary;
}, loadingCss);

function Caption(_ref2) {
  var _ref2$icon = _ref2.icon,
      Icon = _ref2$icon === void 0 ? AlertTriangle : _ref2$icon,
      caption = _ref2.caption;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(LargeIcon, {
    icon: Icon,
    color: "secondary"
  }), /*#__PURE__*/React__default["default"].createElement(Body2, {
    color: "secondary",
    lineHeight: "16px"
  }, caption));
}

function Connecting() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    icon: InlineSpinner,
    caption: /*#__PURE__*/React__default["default"].createElement(Loading, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Connecting\u2026"
    }))
  });
}
function ConnectWallet() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    caption: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Connect wallet to swap"
    })
  });
}
function UnsupportedNetwork() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    caption: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Switch to a supported network to trade"
    })
  });
}
function InsufficientBalance(_ref3) {
  var currency = _ref3.currency;
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    caption: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Insufficient {0} balance",
      values: {
        0: currency === null || currency === void 0 ? void 0 : currency.symbol
      }
    })
  });
}
function InsufficientLiquidity() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    caption: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Insufficient liquidity for your trade"
    })
  });
}
function Error$1() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    caption: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Error fetching trade"
    })
  });
}
function MissingInputs() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    icon: Info,
    caption: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Enter an amount"
    })
  });
}
function LoadingTrade() {
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    icon: InlineSpinner,
    caption: /*#__PURE__*/React__default["default"].createElement(Loading, null, /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Fetching best price\u2026"
    }))
  });
}
function WrapCurrency(_ref4) {
  var inputCurrency = _ref4.inputCurrency,
      outputCurrency = _ref4.outputCurrency;
  var Text = React.useCallback(function () {
    return /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Convert {0} to {1}",
      values: {
        0: inputCurrency.symbol,
        1: outputCurrency.symbol
      }
    });
  }, [inputCurrency.symbol, outputCurrency.symbol]);
  return /*#__PURE__*/React__default["default"].createElement(Caption, {
    icon: Info,
    caption: /*#__PURE__*/React__default["default"].createElement(Text, null)
  });
}
function Trade(_ref5) {
  var trade = _ref5.trade,
      outputUSDC = _ref5.outputUSDC,
      impact = _ref5.impact;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Tooltip, {
    placement: "bottom",
    icon: LargeIcon,
    iconProps: {
      icon: impact !== null && impact !== void 0 && impact.warning ? AlertTriangle : Info
    }
  }, /*#__PURE__*/React__default["default"].createElement(Column, {
    gap: 0.75
  }, (impact === null || impact === void 0 ? void 0 : impact.warning) && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Caption$1, null, "The output amount is estimated at ", impact.toString(), " less than the input amount due to impact"), /*#__PURE__*/React__default["default"].createElement(Rule, null)), /*#__PURE__*/React__default["default"].createElement(RoutingDiagram, {
    trade: trade
  }))), /*#__PURE__*/React__default["default"].createElement(Price, {
    trade: trade,
    outputUSDC: outputUSDC
  }));
}

var ToolbarRow = /*#__PURE__*/_styled__default["default"](Row).withConfig({
  displayName: "Toolbar__ToolbarRow",
  componentId: "sc-7xbipv-0"
})(["background-color:", ";border-bottom-left-radius:", "em;border-bottom-right-radius:", "em;gap:0.5em;min-height:44px;padding:14px 16px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.module;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius - 0.25;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.borderRadius - 0.25;
});

var Toolbar = /*#__PURE__*/React.memo(function Toolbar() {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account;

  var _useSwapInfo = useSwapInfo(),
      _useSwapInfo$Field$IN = _useSwapInfo[exports.Field.INPUT],
      inputCurrency = _useSwapInfo$Field$IN.currency,
      inputBalance = _useSwapInfo$Field$IN.balance,
      inputAmount = _useSwapInfo$Field$IN.amount,
      _useSwapInfo$Field$OU = _useSwapInfo[exports.Field.OUTPUT],
      outputCurrency = _useSwapInfo$Field$OU.currency,
      outputUSDC = _useSwapInfo$Field$OU.usdc,
      error = _useSwapInfo.error,
      _useSwapInfo$trade = _useSwapInfo.trade,
      trade = _useSwapInfo$trade.trade,
      state = _useSwapInfo$trade.state,
      impact = _useSwapInfo.impact;

  var isAmountPopulated = useIsAmountPopulated();
  var isWrap = useIsWrap();
  var caption = React.useMemo(function () {
    switch (error) {
      case ChainError.UNCONNECTED_CHAIN:
        return /*#__PURE__*/React__default["default"].createElement(ConnectWallet, null);

      case ChainError.ACTIVATING_CHAIN:
        return /*#__PURE__*/React__default["default"].createElement(Connecting, null);

      case ChainError.UNSUPPORTED_CHAIN:
        return /*#__PURE__*/React__default["default"].createElement(UnsupportedNetwork, null);

      case ChainError.MISMATCHED_TOKEN_CHAINS:
        return /*#__PURE__*/React__default["default"].createElement(Error$1, null);

      case ChainError.MISMATCHED_CHAINS:
        return;
    }

    if (state === TradeState.LOADING) {
      return /*#__PURE__*/React__default["default"].createElement(LoadingTrade, null);
    }

    if (!account) {
      return /*#__PURE__*/React__default["default"].createElement(ConnectWallet, null);
    }

    if (inputCurrency && outputCurrency && isAmountPopulated) {
      if (inputBalance && inputAmount !== null && inputAmount !== void 0 && inputAmount.greaterThan(inputBalance)) {
        return /*#__PURE__*/React__default["default"].createElement(InsufficientBalance, {
          currency: inputCurrency
        });
      }

      if (isWrap) {
        return /*#__PURE__*/React__default["default"].createElement(WrapCurrency, {
          inputCurrency: inputCurrency,
          outputCurrency: outputCurrency
        });
      }

      if (state === TradeState.NO_ROUTE_FOUND || trade && !trade.swaps) {
        return /*#__PURE__*/React__default["default"].createElement(InsufficientLiquidity, null);
      }

      if (trade !== null && trade !== void 0 && trade.inputAmount && trade.outputAmount) {
        return /*#__PURE__*/React__default["default"].createElement(Trade, {
          trade: trade,
          outputUSDC: outputUSDC,
          impact: impact
        });
      }

      if (state === TradeState.INVALID) {
        return /*#__PURE__*/React__default["default"].createElement(Error$1, null);
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(MissingInputs, null);
  }, [error, state, account, inputCurrency, outputCurrency, isAmountPopulated, inputBalance, inputAmount, isWrap, trade, outputUSDC, impact]);
  return /*#__PURE__*/React__default["default"].createElement(ToolbarRow, {
    flex: true,
    justify: "flex-start",
    "data-testid": "toolbar",
    gap: 3 / 8,
    align: "flex-end"
  }, caption);
});

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IntegrationError = /*#__PURE__*/function (_Error) {
  _inherits__default["default"](IntegrationError, _Error);

  var _super = _createSuper$2(IntegrationError);

  function IntegrationError(message) {
    var _this;

    _classCallCheck__default["default"](this, IntegrationError);

    _this = _super.call(this, message);
    _this.name = 'Integration Error';
    return _this;
  }

  return _createClass__default["default"](IntegrationError);
}( /*#__PURE__*/_wrapNativeSuper__default["default"](Error));

function isAddressOrAddressMap(addressOrMap) {
  if (_typeof__default["default"](addressOrMap) === 'object') {
    return Object.values(addressOrMap).every(function (address) {
      return isAddress(address);
    });
  }

  if (typeof addressOrMap === 'string') {
    return typeof isAddress(addressOrMap) === 'string';
  }

  return false;
}

function useValidate(props) {
  var convenienceFee = props.convenienceFee,
      convenienceFeeRecipient = props.convenienceFeeRecipient;
  React.useEffect(function () {
    if (convenienceFee) {
      if (convenienceFee > 100 || convenienceFee < 0) {
        throw new IntegrationError("convenienceFee must be between 0 and 100 (you set it to ".concat(convenienceFee, ")."));
      }

      if (!convenienceFeeRecipient) {
        throw new IntegrationError('convenienceFeeRecipient is required when convenienceFee is set.');
      }

      if (typeof convenienceFeeRecipient === 'string') {
        if (!isAddress(convenienceFeeRecipient)) {
          throw new IntegrationError("convenienceFeeRecipient must be a valid address (you set it to ".concat(convenienceFeeRecipient, ")."));
        }
      } else if (_typeof__default["default"](convenienceFeeRecipient) === 'object') {
        Object.values(convenienceFeeRecipient).forEach(function (recipient) {
          if (!isAddress(recipient)) {
            var values = Object.values(convenienceFeeRecipient).join(', ');
            throw new IntegrationError("All values in convenienceFeeRecipient object must be valid addresses (you used ".concat(values, ")."));
          }
        });
      }
    }
  }, [convenienceFee, convenienceFeeRecipient]);
  var defaultInputAmount = props.defaultInputAmount,
      defaultOutputAmount = props.defaultOutputAmount;
  React.useEffect(function () {
    if (defaultOutputAmount && defaultInputAmount) {
      throw new IntegrationError('defaultInputAmount and defaultOutputAmount may not both be defined.');
    }

    if (defaultInputAmount && (isNaN(+defaultInputAmount) || defaultInputAmount < 0)) {
      throw new IntegrationError("defaultInputAmount must be a positive number (you set it to ".concat(defaultInputAmount, ")"));
    }

    if (defaultOutputAmount && (isNaN(+defaultOutputAmount) || defaultOutputAmount < 0)) {
      throw new IntegrationError("defaultOutputAmount must be a positive number (you set it to ".concat(defaultOutputAmount, ")."));
    }
  }, [defaultInputAmount, defaultOutputAmount]);
  var defaultInputTokenAddress = props.defaultInputTokenAddress,
      defaultOutputTokenAddress = props.defaultOutputTokenAddress;
  React.useEffect(function () {
    if (defaultInputTokenAddress && !isAddressOrAddressMap(defaultInputTokenAddress) && defaultInputTokenAddress !== 'NATIVE') {
      throw new IntegrationError("defaultInputTokenAddress must be a valid address or \"NATIVE\" (you set it to ".concat(defaultInputTokenAddress, ")."));
    }

    if (defaultOutputTokenAddress && !isAddressOrAddressMap(defaultOutputTokenAddress) && defaultOutputTokenAddress !== 'NATIVE') {
      throw new IntegrationError("defaultOutputTokenAddress must be a valid address or \"NATIVE\" (you set it to ".concat(defaultOutputTokenAddress, ")."));
    }
  }, [defaultInputTokenAddress, defaultOutputTokenAddress]);
}

// since the wallet connection component exists within the Swap component.
// TODO(zzmp): refactor WalletConnection into Widget component

function Swap(props) {
  useValidate(props);
  useSyncController(props);
  useSyncConvenienceFee(props);
  useSyncSwapEventHandlers(props);
  useSyncTokenDefaults(props);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      wrapper = _useState2[0],
      setWrapper = _useState2[1];

  var _useAtom = jotai.useAtom(displayTxHashAtom),
      _useAtom2 = _slicedToArray__default["default"](_useAtom, 2),
      displayTxHash = _useAtom2[0],
      setDisplayTxHash = _useAtom2[1];

  var pendingTxs = usePendingTransactions();
  var displayTx = React.useMemo(function () {
    return displayTxHash && pendingTxs[displayTxHash];
  }, [displayTxHash, pendingTxs]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Header$1, {
    title: /*#__PURE__*/React__default["default"].createElement(Trans, {
      id: "Swap"
    })
  }, /*#__PURE__*/React__default["default"].createElement(Wallet, {
    disabled: props.hideConnectionUI
  }), /*#__PURE__*/React__default["default"].createElement(Settings, null)), /*#__PURE__*/React__default["default"].createElement("div", {
    ref: setWrapper
  }, /*#__PURE__*/React__default["default"].createElement(BoundaryProvider, {
    value: wrapper
  }, /*#__PURE__*/React__default["default"].createElement(SwapInfoProvider, {
    routerUrl: props.routerUrl
  }, /*#__PURE__*/React__default["default"].createElement(Input$1, null), /*#__PURE__*/React__default["default"].createElement(ReverseButton, null), /*#__PURE__*/React__default["default"].createElement(Output, null), /*#__PURE__*/React__default["default"].createElement(Toolbar, null), /*#__PURE__*/React__default["default"].createElement(SwapActionButton, null), useBrandedFooter() && /*#__PURE__*/React__default["default"].createElement(BrandedFooter, null)))), displayTx && /*#__PURE__*/React__default["default"].createElement(Dialog, {
    color: "dialog"
  }, /*#__PURE__*/React__default["default"].createElement(TransactionStatusDialog, {
    tx: displayTx,
    onClose: function onClose() {
      return setDisplayTxHash();
    }
  })));
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits__default["default"](ErrorBoundary, _Component);

  var _super = _createSuper$1(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck__default["default"](this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass__default["default"](ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      var _this$props$onError, _this$props;

      (_this$props$onError = (_this$props = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props, error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return /*#__PURE__*/React__default["default"].createElement(Dialog, {
          color: "dialog"
        }, /*#__PURE__*/React__default["default"].createElement(ErrorDialog, {
          error: this.state.error,
          header: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Please refresh the page and try again."
          }),
          action: /*#__PURE__*/React__default["default"].createElement(Trans, {
            id: "Reload the page"
          }),
          onClick: function onClick() {
            return window.location.reload();
          }
        }));
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(React.Component);

function useSyncWidgetEventHandlers(_ref) {
  var onConnectWalletClick = _ref.onConnectWalletClick,
      onSwitchChain = _ref.onSwitchChain;
  var setOnConnectWalletClick = utils.useUpdateAtom(onConnectWalletClickAtom);
  React.useEffect(function () {
    setOnConnectWalletClick(function () {
      return onConnectWalletClick;
    });
  }, [onConnectWalletClick, setOnConnectWalletClick]);
  var setOnSwitchChain = utils.useUpdateAtom(onSwitchChainAtom);
  React.useEffect(function () {
    setOnSwitchChain(function () {
      return onSwitchChain;
    });
  }, [onSwitchChain, setOnSwitchChain]);
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function parseChainId(chainId) {
  return Number.parseInt(chainId, 16);
}

var JsonRpcConnector = /*#__PURE__*/function (_Connector) {
  _inherits__default["default"](JsonRpcConnector, _Connector);

  var _super = _createSuper(JsonRpcConnector);

  function JsonRpcConnector(_ref) {
    var _this;

    var actions = _ref.actions,
        provider = _ref.provider,
        onError = _ref.onError;

    _classCallCheck__default["default"](this, JsonRpcConnector);

    _this = _super.call(this, actions, onError);
    _this.customProvider = provider.on('connect', function (_ref2) {
      var chainId = _ref2.chainId;

      _this.actions.update({
        chainId: parseChainId(chainId)
      });
    }).on('disconnect', function (error) {
      var _this$onError, _this2;

      (_this$onError = (_this2 = _this).onError) === null || _this$onError === void 0 ? void 0 : _this$onError.call(_this2, error);

      _this.actions.resetState();
    }).on('chainChanged', function (chainId) {
      _this.actions.update({
        chainId: parseChainId(chainId)
      });
    }).on('accountsChanged', function (accounts) {
      _this.actions.update({
        accounts: accounts
      });
    });
    return _this;
  }

  _createClass__default["default"](JsonRpcConnector, [{
    key: "activate",
    value: function () {
      var _activate = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
        var _yield$Promise$all, _yield$Promise$all2, chainId, accounts;

        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.actions.startActivation();
                _context.prev = 1;
                _context.next = 4;
                return Promise.all([this.customProvider.getNetwork(), this.customProvider.listAccounts()]);

              case 4:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray__default["default"](_yield$Promise$all, 2);
                chainId = _yield$Promise$all2[0].chainId;
                accounts = _yield$Promise$all2[1];
                this.actions.update({
                  chainId: chainId,
                  accounts: accounts
                });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                this.actions.resetState();
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function activate() {
        return _activate.apply(this, arguments);
      }

      return activate;
    }()
  }]);

  return JsonRpcConnector;
}(types.Connector);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var DEFAULT_CHAIN_ID = exports.SupportedChainId.MAINNET;
function Provider$1(_ref) {
  var _ref$defaultChainId = _ref.defaultChainId,
      chainId = _ref$defaultChainId === void 0 ? exports.SupportedChainId.MAINNET : _ref$defaultChainId,
      jsonRpcUrlMap = _ref.jsonRpcUrlMap,
      provider = _ref.provider,
      children = _ref.children;
  var defaultChainId = React.useMemo(function () {
    if (!supportedChainId(chainId)) {
      console.warn("Unsupported chainId: ".concat(chainId, ". Falling back to ").concat(DEFAULT_CHAIN_ID, " (").concat(exports.SupportedChainId[DEFAULT_CHAIN_ID], ")."));
      return DEFAULT_CHAIN_ID;
    }

    return chainId;
  }, [chainId]);
  var web3ReactConnectors = useWeb3ReactConnectors({
    provider: provider,
    jsonRpcUrlMap: jsonRpcUrlMap,
    defaultChainId: defaultChainId
  });
  var key = React.useRef(0);
  var prioritizedConnectors = React.useMemo(function () {
    // Re-key Web3ReactProvider before rendering new connectors, as it expects connectors to be
    // referentially static.
    key.current += 1;
    var prioritizedConnectors = [web3ReactConnectors.user, web3ReactConnectors.metaMask, web3ReactConnectors.walletConnect, web3ReactConnectors.walletConnectQR, web3ReactConnectors.network];
    return prioritizedConnectors.filter(function (connector) {
      return Boolean(connector);
    });
  }, [web3ReactConnectors]);
  var connectors = React.useMemo(function () {
    var _web3ReactConnectors$;

    return {
      user: (_web3ReactConnectors$ = web3ReactConnectors.user) === null || _web3ReactConnectors$ === void 0 ? void 0 : _web3ReactConnectors$[0],
      metaMask: web3ReactConnectors.metaMask[0],
      walletConnect: web3ReactConnectors.walletConnect[0],
      walletConnectQR: web3ReactConnectors.walletConnectQR[0],
      network: web3ReactConnectors.network[0]
    };
  }, [web3ReactConnectors]);
  var shouldEagerlyConnect = provider === undefined;
  React.useEffect(function () {
    // Ignore any errors during connection so they do not propagate to the widget.
    if (connectors.user) {
      connectors.user.activate().catch(function () {
        return undefined;
      });
      return;
    } else if (shouldEagerlyConnect) {
      var eagerConnectors = [connectors.metaMask, connectors.walletConnect];
      eagerConnectors.forEach(function (connector) {
        return connector.connectEagerly().catch(function () {
          return undefined;
        });
      });
    }

    connectors.network.activate().catch(function () {
      return undefined;
    });
  }, [connectors.metaMask, connectors.network, connectors.user, connectors.walletConnect, shouldEagerlyConnect]);
  return /*#__PURE__*/React__default["default"].createElement(core.Web3ReactProvider, {
    connectors: prioritizedConnectors,
    key: key.current
  }, /*#__PURE__*/React__default["default"].createElement(Provider$2, {
    jsonRpcMap: jsonRpcUrlMap
  }, /*#__PURE__*/React__default["default"].createElement(Provider$3, {
    connectors: connectors
  }, children)));
}

var onError = function onError(error) {
  return console.error(error);
};

function initializeWeb3ReactConnector(Constructor, options) {
  var _initializeConnector = core.initializeConnector(function (actions) {
    return new Constructor(_objectSpread({
      actions: actions,
      onError: onError
    }, options));
  }),
      _initializeConnector2 = _slicedToArray__default["default"](_initializeConnector, 2),
      connector = _initializeConnector2[0],
      hooks = _initializeConnector2[1];

  return [connector, hooks];
}

function useWeb3ReactConnectors(_ref2) {
  var defaultChainId = _ref2.defaultChainId,
      provider = _ref2.provider,
      jsonRpcUrlMap = _ref2.jsonRpcUrlMap;

  var _useMemo = React.useMemo(function () {
    return [toJsonRpcUrlMap(jsonRpcUrlMap), toJsonRpcConnectionMap(jsonRpcUrlMap)];
  }, [jsonRpcUrlMap]),
      _useMemo2 = _slicedToArray__default["default"](_useMemo, 2),
      urlMap = _useMemo2[0],
      connectionMap = _useMemo2[1];

  var user = React.useMemo(function () {
    if (!provider) return;

    if (providers.JsonRpcProvider.isProvider(provider)) {
      return initializeWeb3ReactConnector(JsonRpcConnector, {
        provider: provider
      });
    } else if (providers.JsonRpcProvider.isProvider(provider.provider)) {
      throw new Error('Eip1193Bridge is experimental: pass your ethers Provider directly');
    } else {
      return initializeWeb3ReactConnector(eip1193.EIP1193, {
        provider: provider
      });
    }
  }, [provider]);
  var metaMask = React.useMemo(function () {
    return initializeWeb3ReactConnector(metamask.MetaMask);
  }, []);
  var walletConnect = React.useMemo(function () {
    return initializeWeb3ReactConnector(WalletConnectPopup, {
      options: {
        rpc: urlMap
      },
      defaultChainId: defaultChainId
    });
  }, [defaultChainId, urlMap]);
  var walletConnectQR = React.useMemo(function () {
    return initializeWeb3ReactConnector(WalletConnectQR, {
      options: {
        rpc: urlMap
      },
      defaultChainId: defaultChainId
    });
  }, [defaultChainId, urlMap]);
  var network$1 = React.useMemo(function () {
    return initializeWeb3ReactConnector(network.Network, {
      urlMap: connectionMap,
      defaultChainId: defaultChainId
    });
  }, [connectionMap, defaultChainId]);
  return React.useMemo(function () {
    return {
      user: user,
      metaMask: metaMask,
      walletConnect: walletConnect,
      walletConnectQR: walletConnectQR,
      network: network$1
    };
  }, [metaMask, network$1, user, walletConnect, walletConnectQR]);
}

var _plurals = {
  'af-ZA': plurals.af,
  'ar-SA': plurals.ar,
  'ca-ES': plurals.ca,
  'cs-CZ': plurals.cs,
  'da-DK': plurals.da,
  'de-DE': plurals.de,
  'el-GR': plurals.el,
  'en-US': plurals.en,
  'es-ES': plurals.es,
  'fi-FI': plurals.fi,
  'fr-FR': plurals.fr,
  'he-IL': plurals.he,
  'hu-HU': plurals.hu,
  'id-ID': plurals.id,
  'it-IT': plurals.it,
  'ja-JP': plurals.ja,
  'ko-KR': plurals.ko,
  'nl-NL': plurals.nl,
  'no-NO': plurals.no,
  'pl-PL': plurals.pl,
  'pt-BR': plurals.pt,
  'pt-PT': plurals.pt,
  'ro-RO': plurals.ro,
  'ru-RU': plurals.ru,
  'sr-SP': plurals.sr,
  'sv-SE': plurals.sv,
  'sw-TZ': plurals.sw,
  'tr-TR': plurals.tr,
  'uk-UA': plurals.uk,
  'vi-VN': plurals.vi,
  'zh-CN': plurals.zh,
  'zh-TW': plurals.zh,
  pseudo: plurals.en
};
function dynamicActivate(_x) {
  return _dynamicActivate.apply(this, arguments);
}

function _dynamicActivate() {
  _dynamicActivate = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(locale) {
    var catalog;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i18n.loadLocaleData(locale, {
              plurals: function plurals() {
                return _plurals[locale];
              }
            });
            _context.prev = 1;
            _context.next = 4;
            return (function (t) { return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(t)); }); })("./locales/".concat(locale, ".js"));

          case 4:
            catalog = _context.sent;
            // Bundlers will either export it as default or as a named export named default.
            i18n.load(locale, catalog.messages || catalog.default.messages);
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);

          case 10:
            i18n.activate(locale);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _dynamicActivate.apply(this, arguments);
}

function Provider(_ref) {
  var locale = _ref.locale,
      _ref$forceRenderAfter = _ref.forceRenderAfterLocaleChange,
      forceRenderAfterLocaleChange = _ref$forceRenderAfter === void 0 ? true : _ref$forceRenderAfter,
      onActivate = _ref.onActivate,
      children = _ref.children;
  React.useEffect(function () {
    dynamicActivate(locale).then(function () {
      return onActivate === null || onActivate === void 0 ? void 0 : onActivate(locale);
    }).catch(function (error) {
      console.error('Failed to activate locale', locale, error);
    });
  }, [locale, onActivate]); // Initialize the locale immediately if it is DEFAULT_LOCALE, so that keys are shown while the translation messages load.
  // This renders the translation _keys_, not the translation _messages_, which is only acceptable while loading the DEFAULT_LOCALE,
  // as [there are no "default" messages](https://github.com/lingui/js-lingui/issues/388#issuecomment-497779030).
  // See https://github.com/lingui/js-lingui/issues/1194#issuecomment-1068488619.

  if (i18n.locale === undefined && locale === DEFAULT_LOCALE) {
    i18n.loadLocaleData(DEFAULT_LOCALE, {
      plurals: function plurals() {
        return _plurals[DEFAULT_LOCALE];
      }
    });
    i18n.load(DEFAULT_LOCALE, {});
    i18n.activate(DEFAULT_LOCALE);
  }

  return /*#__PURE__*/React__default["default"].createElement(I18nProvider, {
    forceRenderOnLocaleChange: forceRenderAfterLocaleChange,
    i18n: i18n
  }, children);
}

var _combineReducers;
var reducer = redux.combineReducers((_combineReducers = {}, _defineProperty__default["default"](_combineReducers, multicall.reducerPath, multicall.reducer), _defineProperty__default["default"](_combineReducers, routing.reducerPath, routing.reducer), _combineReducers));
var store = toolkit.configureStore({
  reducer: reducer,
  middleware: function middleware(getDefaultMiddleware) {
    return (// in routing, we pass in a non-serializable provider object to queryFn to avoid re-instantiating on every query
      // rtk-query stores original args in state, so we need to turn off serializableCheck
      // this is OK because we don't use time-travel debugging nor persistence
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredPaths: [routing.reducerPath]
        }
      }).concat(routing.middleware)
    );
  }
});

var _templateObject, _templateObject2, _templateObject3;
var WidgetWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Widget__WidgetWrapper",
  componentId: "sc-f3lvcb-0"
})(["-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);background-color:", ";border-radius:", "em;box-sizing:border-box;color:", ";display:flex;flex-direction:column;font-size:16px;font-smooth:always;font-variant:none;min-height:360px;min-width:300px;padding:8px;position:relative;user-select:none;width:", ";*{box-sizing:border-box;font-family:", ";@supports (font-variation-settings:normal){font-family:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.container;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var width = _ref4.width;
  return width && (isNaN(Number(width)) ? width : "".concat(width, "px"));
}, function (_ref5) {
  var theme = _ref5.theme;
  return typeof theme.fontFamily === 'string' ? theme.fontFamily : theme.fontFamily.font;
}, function (_ref6) {
  var theme = _ref6.theme;
  return typeof theme.fontFamily === 'string' ? undefined : theme.fontFamily.variable;
});

var slideInLeft = _styled.keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  from {\n    transform: translateX(calc(100% - 0.25em));\n  }\n"])));

var slideOutLeft = _styled.keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n  to {\n    transform: translateX(calc(0.25em - 100%));\n  }\n"])));

var slideOutRight = _styled.keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n  to {\n    transform: translateX(calc(100% - 0.25em));\n  }\n"])));

var DialogWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Widget__DialogWrapper",
  componentId: "sc-f3lvcb-1"
})(["border-radius:", "em;height:calc(100% - 0.5em);left:0;margin:0.25em;overflow:hidden;position:absolute;top:0;width:calc(100% - 0.5em);@supports (overflow:clip){overflow:clip;}", "{animation:", " 0.25s ease-in;&.", "{animation:", " 0.25s ease-in;}&.", "{animation:", " 0.25s ease-out;}}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.borderRadius * 0.75;
}, Modal, slideInLeft, Animation.PAGING, slideOutLeft, Animation.CLOSING, slideOutRight);
function Widget(props) {
  // UI configuration must be passed to initial atom values, or the first frame will render incorrectly.
  return /*#__PURE__*/React__default["default"].createElement(TestableWidget, _extends__default["default"]({}, props, {
    initialAtomValues: useInitialFlags(props)
  }));
}
function TestableWidget(props) {
  var width = React.useMemo(function () {
    var _props$width;

    if (props.width && props.width < 300) {
      console.warn("Widget width must be at least 300px (you set it to ".concat(props.width, "). Falling back to 300px."));
      return 300;
    }

    return (_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : 360;
  }, [props.width]);
  var locale = React.useMemo(function () {
    var _props$locale;

    if (props.locale && ![].concat(_toConsumableArray__default["default"](SUPPORTED_LOCALES), ['pseudo']).includes(props.locale)) {
      console.warn("Unsupported locale: ".concat(props.locale, ". Falling back to ").concat(DEFAULT_LOCALE, "."));
      return DEFAULT_LOCALE;
    }

    return (_props$locale = props.locale) !== null && _props$locale !== void 0 ? _props$locale : DEFAULT_LOCALE;
  }, [props.locale]);

  var _useState = React.useState(props.dialog || null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      dialog = _useState2[0],
      setDialog = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement(React.StrictMode, null, /*#__PURE__*/React__default["default"].createElement(ThemeProvider, {
    theme: props.theme
  }, /*#__PURE__*/React__default["default"].createElement(WidgetWrapper, {
    width: width,
    className: props.className
  }, /*#__PURE__*/React__default["default"].createElement(Provider, {
    locale: locale
  }, /*#__PURE__*/React__default["default"].createElement(DialogWrapper, {
    ref: setDialog
  }), /*#__PURE__*/React__default["default"].createElement(Provider$4, {
    value: props.dialog || dialog
  }, /*#__PURE__*/React__default["default"].createElement(ErrorBoundary, {
    onError: props.onError
  }, /*#__PURE__*/React__default["default"].createElement(reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/React__default["default"].createElement(jotai.Provider, {
    initialValues: props.initialAtomValues
  }, /*#__PURE__*/React__default["default"].createElement(WidgetUpdater, props), /*#__PURE__*/React__default["default"].createElement(Provider$1, props, /*#__PURE__*/React__default["default"].createElement(BlockNumberProvider, null, /*#__PURE__*/React__default["default"].createElement(MulticallUpdater, null), /*#__PURE__*/React__default["default"].createElement(TransactionsUpdater, props), /*#__PURE__*/React__default["default"].createElement(TokenListProvider, {
    list: props.tokenList
  }, props.children)))))))))));
}
/** A component in the scope of AtomProvider to set Widget-scoped state. */

function WidgetUpdater(props) {
  useSyncWidgetEventHandlers(props);
  return null;
}

var LoadingWrapper = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Skeleton__LoadingWrapper",
  componentId: "sc-1ra2yb8-0"
})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;"]);

var Blob = /*#__PURE__*/_styled__default["default"].div.withConfig({
  displayName: "Skeleton__Blob",
  componentId: "sc-1ra2yb8-1"
})(["background-color:", ";border-radius:", ";height:", ";width:", ";"], function (_ref) {
  var isModule = _ref.isModule,
      theme = _ref.theme;
  return isModule ? theme.outline : theme.module;
}, function (_ref2) {
  var theme = _ref2.theme,
      radius = _ref2.radius;
  return (radius !== null && radius !== void 0 ? radius : 0.25 * theme.borderRadius) + 'em';
}, function (_ref3) {
  var height = _ref3.height;
  return height;
}, function (_ref4) {
  var width = _ref4.width;
  return width;
});

var WideColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__WideColumn",
  componentId: "sc-1ra2yb8-2"
})(["width:100%;"]);

var TitleColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__TitleColumn",
  componentId: "sc-1ra2yb8-3"
})(["padding:0.5em;padding-bottom:1.25em;width:100%;"]);

var InputColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__InputColumn",
  componentId: "sc-1ra2yb8-4"
})(["background-color:", ";border-radius:", "em;display:flex;gap:1.875em;margin-bottom:0.25em;padding:0.75em;padding-bottom:3.25em;padding-top:1.5em;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.module;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderRadius - 0.25;
});

var OutputColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__OutputColumn",
  componentId: "sc-1ra2yb8-5"
})(["background-color:", ";border-radius:", "em;display:flex;padding-top:0.5em;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.module;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderRadius - 0.25;
});

var OutputInnerTopColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__OutputInnerTopColumn",
  componentId: "sc-1ra2yb8-6"
})(["border-bottom:1px solid ", ";padding-bottom:3.25em;padding-left:0.75em;padding-right:0.75em;padding-top:1.5em;width:100%;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.container;
});

var OutputInnerBottomColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__OutputInnerBottomColumn",
  componentId: "sc-1ra2yb8-7"
})(["padding-bottom:1em;padding-left:0.75em;padding-right:0.75em;padding-top:0.75em;width:100%;"]);

var ButtonColumn = /*#__PURE__*/_styled__default["default"](Column).withConfig({
  displayName: "Skeleton__ButtonColumn",
  componentId: "sc-1ra2yb8-8"
})(["padding-bottom:0em;padding-top:0.75em;width:100%;"]);

function FloatingTitle() {
  return /*#__PURE__*/React__default["default"].createElement(TitleColumn, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "1em",
    width: "2.5em",
    isModule: false
  })));
}

function FloatingInput() {
  return /*#__PURE__*/React__default["default"].createElement(WideColumn, {
    gap: 0.75
  }, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "3.75em",
    isModule: true
  }), /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "7.25em",
    isModule: true
  })));
}

function FloatingOutput(_ref10) {
  var isModule = _ref10.isModule;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(OutputInnerTopColumn, null, /*#__PURE__*/React__default["default"].createElement(Row, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "3.75em",
    isModule: isModule
  }), /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "2em",
    width: "7.25em",
    isModule: isModule
  }))), /*#__PURE__*/React__default["default"].createElement(OutputInnerBottomColumn, null, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "1em",
    width: "7.5em",
    isModule: true
  })));
}

function FloatingButton() {
  return /*#__PURE__*/React__default["default"].createElement(ButtonColumn, {
    gap: 0.875
  }, /*#__PURE__*/React__default["default"].createElement(Blob, {
    height: "3.375em",
    width: "100%",
    radius: 0.75,
    isModule: true
  }));
}

function SwapWidgetSkeleton(_ref11) {
  var theme = _ref11.theme,
      width = _ref11.width;
  return /*#__PURE__*/React__default["default"].createElement(React.StrictMode, null, /*#__PURE__*/React__default["default"].createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(WidgetWrapper, {
    width: width
  }, /*#__PURE__*/React__default["default"].createElement(LoadingWrapper, null, /*#__PURE__*/React__default["default"].createElement(FloatingTitle, null), /*#__PURE__*/React__default["default"].createElement(InputColumn, null, /*#__PURE__*/React__default["default"].createElement(FloatingInput, null)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ReverseButton, null), /*#__PURE__*/React__default["default"].createElement(OutputColumn, null, /*#__PURE__*/React__default["default"].createElement(FloatingOutput, {
    isModule: true
  })), /*#__PURE__*/React__default["default"].createElement(FloatingButton, null))))));
}

function SwapWidget(props) {
  return /*#__PURE__*/React__default["default"].createElement(Widget, props, /*#__PURE__*/React__default["default"].createElement(Swap, props));
}

exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.EMPTY_TOKEN_LIST = EMPTY_TOKEN_LIST;
exports.INITIALIZED = INITIALIZED;
exports.NO_ROUTE = NO_ROUTE;
exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
exports.SwapWidget = SwapWidget;
exports.SwapWidgetSkeleton = SwapWidgetSkeleton;
exports.UNISWAP_TOKEN_LIST = UNISWAP_TOKEN_LIST;
exports.darkTheme = darkTheme;
exports.defaultTheme = defaultTheme;
exports.invertTradeType = invertTradeType;
exports.isExactInput = isExactInput;
exports.lightTheme = lightTheme;
exports.toTradeType = toTradeType;
exports.validateTokenList = validateTokenList;
exports.validateTokens = validateTokens;
