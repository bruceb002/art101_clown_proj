"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireDefault(require("react"));
var _AccessoriesGrid = _interopRequireDefault(require("./AccessoriesGrid"));
var _ClownContainer = _interopRequireDefault(require("./ClownContainer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cushion"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "WELCOME TO THE CLOWN ZONE"))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_ClownContainer["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    id: "accessories"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Just Placeholding With Some Images"), /*#__PURE__*/_react["default"].createElement(_AccessoriesGrid["default"], null)));
}