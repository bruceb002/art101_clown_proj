"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClownContainer;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import { useDrop } from 'react-dnd';
//import { ItemTypes } from './constants/ItemTypes';
function ClownContainer() {
  // Define the drop target behavior

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "clownZone"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cushion"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "doll-base",
    src: "../assets/doll-base.png",
    alt: "Doll Base"
  })));
}