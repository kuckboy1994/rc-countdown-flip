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
  // console.log(format);
  var d = 100;
  var h = /H/.test(format) ? 100 : 24;
  var m = /M/.test(format) ? 100 : 60;
  var s = /S/.test(format) ? 100 : 60;
  var day = Math.floor(leftTime % (d * h * m * s) / (h * m * s));
  var hor = Math.floor(leftTime % (h * m * s) / (m * s));
  var min = Math.floor(leftTime % (m * s) / s);
  var sec = leftTime % s;
  var times = [];
  var fm = format.toLowerCase();

  for (var i = fm.length - 1; i >= 0; i -= 1) {
    switch (fm[i]) {
      case "d":
        if (fm[i + 1] === "d") {
          times.unshift({
            index: i,
            data: Math.floor(day / 10)
          });
        } else {
          times.unshift({
            index: i,
            data: day % 10
          });
        }

        break;

      case "h":
        if (fm[i + 1] === "h") {
          times.unshift({
            index: i,
            data: Math.floor(hor / 10)
          });
        } else {
          times.unshift({
            index: i,
            data: hor % 10
          });
        }

        break;

      case "m":
        if (fm[i + 1] === "m") {
          times.unshift({
            index: i,
            data: Math.floor(min / 10)
          });
        } else {
          times.unshift({
            index: i,
            data: min % 10
          });
        }

        break;

      case "s":
        if (fm[i + 1] === "s") {
          times.unshift({
            index: i,
            data: Math.floor(sec / 10)
          });
        } else {
          times.unshift({
            index: i,
            data: sec % 10
          });
        }

        break;

      default:
        times.unshift({
          index: i,
          data: fm[i]
        });
    }
  }

  return {
    leftTime: leftTime,
    times: times
  };
};

function _default(_ref) {
  var _ref$option = _ref.option,
      _ref$option$leftSecon = _ref$option.leftSecond,
      leftSecond = _ref$option$leftSecon === void 0 ? 0 : _ref$option$leftSecon,
      _ref$option$format = _ref$option.format,
      format = _ref$option$format === void 0 ? "dd:hh:mm:ss" : _ref$option$format,
      _ref$option$end = _ref$option.end,
      end = _ref$option$end === void 0 ? function () {} : _ref$option$end,
      _ref$option$style = _ref$option.style,
      style = _ref$option$style === void 0 ? {} : _ref$option$style,
      standard = _ref$option.standard;
  var prevLeftSecond = (0, _react.useRef)(leftSecond);

  var _useState = (0, _react.useState)(getTimeText(format, leftSecond)),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      times = _useState2$.times,
      leftTime = _useState2$.leftTime,
      setLeftTime = _useState2[1];

  (0, _react.useEffect)(function () {
    var id;

    var fn = function fn() {};

    if (prevLeftSecond.current !== leftSecond) {
      prevLeftSecond.current = leftSecond;
      setLeftTime(function () {
        return getTimeText(format, leftSecond);
      });
    } else if (leftTime > 0) {
      id = setInterval(function () {
        setLeftTime(function (prevData) {
          return getTimeText(format, prevData.leftTime - 1);
        });
      }, 1000);

      fn = function fn() {
        return clearInterval(id);
      };
    } else {
      id = setTimeout(function () {
        end();
      }, 1000);

      fn = function fn() {
        return clearTimeout(id);
      };
    }

    return fn;
  }, [leftTime, end, format, prevLeftSecond, leftSecond]);
  return _react["default"].createElement("div", {
    className: _styleModule["default"]["count-down"],
    style: {
      fontSize: standard
    }
  }, times.map(function (item) {
    return _react["default"].createElement(_Flipper["default"], {
      now: item.data,
      index: item.index,
      style: style
    });
  }));
}