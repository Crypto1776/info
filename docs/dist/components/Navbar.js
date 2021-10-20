import React from "../../snowpack/pkg/react.js";
import {NavLink} from "../../snowpack/pkg/react-router-dom.js";
import logo from "../images/logo-web.png.proxy.js";
const Navbar = ({toggle}) => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-between items-center bg-black text-white md:text-xl lg:text-xl  relative\n         shadow-sm font-mono nav",
    role: "navigation"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: "pl-8"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://github.com/Crypto1776/website/blob/main/src/images/logo-web.png?raw=true",
    alt: "Logo",
    className: " w-40 md:w-60 py-5 md:pt-4"
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
    className: "pr-8 hidden md:block text-white"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    smooth: true,
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    smooth: true,
    to: "/contactos",
    activeClassName: "bg-red-600 text-gray-100 rounded-lg"
  }, "Contactos"), /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    smooth: true,
    to: "/conferencias",
    activeClassName: "bg-red-600 text-gray-100 rounded-lg"
  }, "Conferencias"), /* @__PURE__ */ React.createElement(NavLink, {
    className: "p-4 no-underline",
    smooth: true,
    to: "/tienda",
    activeClassName: "bg-red-600 text-gray-100 rounded-lg"
  }, "Tienda")));
};
export default Navbar;
