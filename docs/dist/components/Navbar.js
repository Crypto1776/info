import React from "../../snowpack/pkg/react.js";
import {Link, NavLink} from "../../snowpack/pkg/react-router-dom.js";
import logo from "../images/MarcaDifi.png.proxy.js";
const Navbar = ({toggle}) => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-between items-center bg-black md:text-xl lg:text-xl bg-white relative\n         shadow-sm font-mono",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: "pl-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://github.com/Crypto1776/website/blob/main/src/images/MarcaDifi.png?raw=true",
    alt: "Logo",
    className: "w-20 md:w-40 pt-4 "
  })), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 cursor-pointer md:hidden",
    onClick: toggle
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "pr-8 hidden md:block text-black"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    to: "/contactos",
    activeClassName: "bg-red-600 text-gray-100 rounded-lg"
  }, "Contactos"), /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    to: "/conferencias",
    activeClassName: "bg-red-600 text-gray-100 rounded-lg"
  }, "Conferencias"), /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    to: "/tienda",
    activeClassName: "bg-red-600 text-gray-100 rounded-lg"
  }, "Tienda")));
};
export default Navbar;
