import React from "../../snowpack/pkg/react.js";
import Zoom from "../../snowpack/pkg/react-reveal/Zoom.js";
const opcioneArray = [
  {
    id: "1",
    title: "Contactos",
    text: "Dónde nos puedes encontrar?"
  },
  {
    id: "2",
    title: "Conferencias",
    text: "Recibe toda la información de nuestras conferencias."
  },
  {
    id: "3",
    title: "Tienda",
    text: "Mire todos nuestros productos."
  }
];
const opcionesDisplay = opcioneArray.map((items) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl py-4 font-black"
  }, items.title), /* @__PURE__ */ React.createElement("p", {
    className: "w-full"
  }, items.text));
});
function Opciones() {
  return /* @__PURE__ */ React.createElement(Zoom, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-80"
  }, opcionesDisplay));
}
export default Opciones;
