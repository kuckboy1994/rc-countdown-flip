"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _Flipper = _interopRequireDefault(require("./Flipper"));

var _styleModule = _interopRequireDefault(require("./style.module.sass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getTimeText = function getTimeText(format, leftTime) {
  var day = Math.floor(leftTime / (24 * 60 * 60));
  var hor = Math.floor(leftTime % (24 * 60 * 60) / (60 * 60));
  var min = Math.floor(leftTime % (60 * 60) / 60);
  var sec = leftTime % 60;
  var times = [];

  for (var i = format.length - 1; i >= 0; i -= 1) {
    switch (format[i].toLowerCase()) {
      case 'd':
        if ((format[i + 1] || '').toLowerCase() === 'd') {
          times.unshift(Math.floor(day / 10));
        } else {
          times.unshift(day % 10);
        }

        break;

      case 'h':
        if ((format[i + 1] || '').toLowerCase() === 'h') {
          times.unshift(Math.floor(hor / 10));
        } else {
          times.unshift(hor % 10);
        }

        break;

      case 'm':
        if ((format[i + 1] || '').toLowerCase() === 'm') {
          times.unshift(Math.floor(min / 10));
        } else {
          times.unshift(min % 10);
        }

        break;

      case 's':
        if ((format[i + 1] || '').toLowerCase() === 's') {
          times.unshift(Math.floor(sec / 10));
        } else {
          times.unshift(sec % 10);
        }

        break;

      default:
        times.unshift(format[i]);
    }
  }

  return {
    leftTime: leftTime,
    times: times
  };
};

function _default(_ref) {
  var _ref$option = _ref.option,
      leftSecond = _ref$option.leftSecond,
      format = _ref$option.format,
      end = _ref$option.end,
      _ref$option$style = _ref$option.style,
      style = _ref$option$style === void 0 ? {} : _ref$option$style,
      standard = _ref$option.standard;

  var _useState = (0, _react.useState)(getTimeText(format, leftSecond)),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      times = _useState2$.times,
      leftTime = _useState2$.leftTime,
      setLeftTime = _useState2[1];

  (0, _react.useEffect)(function () {
    var id;

    if (leftTime > 0) {
      id = setInterval(function () {
        setLeftTime(function (prevData) {
          return getTimeText(format, prevData.leftTime - 1);
        });
      }, 1000);
    } else {
      end();
    }

    return function () {
      return clearInterval(id);
    };
  }, [leftTime, end, format]);
  return _react["default"].createElement("div", {
    className: _styleModule["default"]['count-down'],
    style: {
      fontSize: standard
    }
  }, times.map(function (item) {
    return _react["default"].createElement(_Flipper["default"], {
      now: item,
      style: style
    });
  }));
}