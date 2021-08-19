import React from "../../snowpack/pkg/react.js";
import Zoom from "../../snowpack/pkg/react-reveal/Zoom.js";
const opcioneArray = [
  {
    id: "1",
    title: "Contactos",
    text: "Dónde nos puedes encontrar?",
    icons: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\n</svg>'
  },
  {
    id: "2",
    title: "Conferencias",
    text: "Recibe toda la información de nuestras conferencias.",
    icons: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />\n</svg>'
  },
  {
    id: "3",
    title: "Tienda",
    text: "Mire todos nuestros productos.",
    icons: '<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />\n</svg>'
  }
];
const opcionesDisplay = opcioneArray.map((items) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-xl bg-green-200 mb-14 md:mb-0"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:py-4 font-black "
  }, items.title), /* @__PURE__ */ React.createElement("p", {
    className: "w-full"
  }, items.text), items.icons);
});
function Opciones() {
  return /* @__PURE__ */ React.createElement(Zoom, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-full p-6"
  }, opcionesDisplay));
}
export default Opciones;
