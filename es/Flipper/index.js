"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styleModule = _interopRequireDefault(require("./style.module.sass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(props) {
  var _cn;

  var now = props.now,
      style = props.style;
  var prevNowRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      flip = _useState2[0],
      setFlip = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      oldVal = _useState4[0],
      setOldVal = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      newVal = _useState6[0],
      setNewVal = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      separator = _useState8[0],
      setSeparator = _useState8[1];

  (0, _react.useEffect)(function () {
    var id;

    if (typeof now === 'string') {
      setSeparator(true);
      setOldVal(now);
    } else if (typeof prevNowRef.current === 'undefined') {
      setOldVal(now);
    } else if (now !== prevNowRef.current) {
      setOldVal(prevNowRef.current);
      setNewVal(now);
      setFlip(true);
      id = setTimeout(function () {
        setFlip(false);
        setOldVal(now);
      }, 600);
    }

    prevNowRef.current = now;
    return function () {
      return clearTimeout(id);
    };
  }, [now]);

  if (separator) {
    var _sc = {};

    if (style && style.background) {
      _sc.color = style.background;
    }

    return _react["default"].createElement("div", {
      className: _styleModule["default"].separator,
      style: _sc
    }, oldVal);
  }

  var ba = {
    border: ".01em solid ".concat(style.background)
  };

  if (style && style.background) {
    ba.background = style.background;
  }

  var sc = {};

  if (style && style.color) {
    sc.color = style.color;
  }

  return _react["default"].createElement("div", {
    className: _styleModule["default"].card,
    style: sc
  }, _react["default"].createElement("div", {
    className: _styleModule["default"]['b-1'],
    style: ba
  }, _react["default"].createElement("div", {
    className: _styleModule["default"].top
  }, newVal)), _react["default"].createElement("div", {
    className: _styleModule["default"]['b-2'],
    style: ba
  }, _react["default"].createElement("div", {
    className: _styleModule["default"].bottom
  }, oldVal)), _react["default"].createElement("div", {
    className: (0, _classnames["default"])((_cn = {}, _defineProperty(_cn, _styleModule["default"].f, true), _defineProperty(_cn, _styleModule["default"].flip, flip), _cn))
  }, _react["default"].createElement("div", {
    className: _styleModule["default"]['a-1'],
    style: ba
  }, _react["default"].createElement("div", {
    className: _styleModule["default"].hou
  }, newVal)), _react["default"].createElement("div", {
    className: _styleModule["default"]['a-2'],
    style: ba
  }, _react["default"].createElement("div", {
    className: _styleModule["default"].qian
  }, oldVal))), _react["default"].createElement("div", {
    className: _styleModule["default"].before,
    style: ba
  }), _react["default"].createElement("div", {
    className: _styleModule["default"].after,
    style: ba
  }));
}