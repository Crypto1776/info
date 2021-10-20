import React from "../../snowpack/pkg/react.js";
import Zoom from "../../snowpack/pkg/react-reveal/Zoom.js";
import {NavLink} from "../../snowpack/pkg/react-router-dom.js";
const opcioneArray = [
  {
    id: "1",
    title: "Contactos",
    text: "Dónde nos puedes encontrar?",
    icons: "https://github.com/Crypto1776/website/blob/main/src/images/contact.png?raw=true",
    link: "/contactos"
  },
  {
    id: "5",
    title: "I-hub Global",
    text: "Que es el proyecto I-hub Global?.",
    icons: "https://ihubglobal.site/wp-content/uploads/2021/08/cropped-ihub_logo_1-1-250x72.png",
    link: "/ihub"
  },
  {
    id: "3",
    title: "Tienda",
    text: "Mire todos nuestros productos.",
    icons: "https://github.com/Crypto1776/website/blob/main/src/images/shopping-cart.png?raw=true",
    link: "/tienda"
  }
];
const opcionesDisplay = opcioneArray.map((items) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-xl bg-green-200 mb-14 md:mb-0 center-content hover:scale-105"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    className: "center-content",
    to: items.link
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:py-4 font-black "
  }, items.title), /* @__PURE__ */ React.createElement("p", {
    className: "w-full"
  }, items.text), /* @__PURE__ */ React.createElement("img", {
    className: "w-20 pb-3",
    src: items.icons,
    alt: items.title
  })));
});
function Opciones() {
  return /* @__PURE__ */ React.createElement(Zoom, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-full p-6"
  }, opcionesDisplay));
}
export default Opciones;
