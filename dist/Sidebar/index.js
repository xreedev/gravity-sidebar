"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Sidebar = exports.Sidebar = function Sidebar() {
  var _useState = (0, _react.useState)("Home"),
    _useState2 = _slicedToArray(_useState, 2),
    activeItem = _useState2[0],
    setActiveItem = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    sideBar = _useState4[0],
    setSideBar = _useState4[1];
  var handleItemClick = function handleItemClick(item) {
    setActiveItem(item);
  };
  var handleSidebar = function handleSidebar() {
    setSideBar(!sideBar);
  };
  var options = [{
    name: "Home",
    icon: "fas fa-home"
  }, {
    name: "Events",
    icon: "fa fa-envelope-open"
  }, {
    name: "Communities",
    icon: "fa fa-users"
  }, {
    name: "Calender",
    icon: "fa fa-window-maximize"
  }, {
    name: "Scheduled",
    icon: "fa fa-briefcase"
  }, {
    name: "Create",
    icon: "fa fa-star"
  }];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-container ".concat(sideBar ? 'sidebar-container-collapsed' : 'sidebar-container-expanded')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-header mobile-nav"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    "class": "fa fa-bars header-icon",
    "aria-hidden": "true",
    onClick: handleSidebar
  }), !sideBar ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "no-sidebar mobile-nav"
  }, "BoardFlex") : ''), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-list"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "sidebar-content"
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: option.name,
      className: "sidebar-item ".concat(activeItem === option.name ? "active-sidebar-item" : "inactive-sidebar-item"),
      onClick: function onClick() {
        return handleItemClick(option.name);
      }
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "".concat(option.icon, " sidebar-list-icon "),
      "aria-hidden": "true"
    }), !sideBar ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "no-sidebar"
    }, option.name) : null);
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-footer mobile-nav"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-footer-icons"
  }, !sideBar ? /*#__PURE__*/_react["default"].createElement("i", {
    "class": "fa fa-user footer-icon no-sidebar ",
    "aria-hidden": "true"
  }) : '', !sideBar ? /*#__PURE__*/_react["default"].createElement("i", {
    "class": "fa fa-cog footer-icon no-sidebar",
    "aria-hidden": "true"
  }) : '', /*#__PURE__*/_react["default"].createElement("i", {
    "class": "fa fa-sign-out footer-icon",
    "aria-hidden": "true"
  }))));
};