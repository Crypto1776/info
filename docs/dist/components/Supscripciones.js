import React from "../../snowpack/pkg/react.js";
const supscripcionesArray = [
  {
    id: 1,
    precio: "$20",
    tipo: "Platinum",
    instrucciones: "Recibirás la información más actual y todas sus fuentes, conocerás todas las plataformas donde podrás invertir."
  },
  {
    id: 1,
    precio: "$15",
    tipo: "Gold",
    instrucciones: "Conocerás las noticias del mundo Crypto cada semana."
  },
  {
    id: 1,
    precio: "$10",
    tipo: "Silver",
    instrucciones: "Accederás a información no actual."
  }
];
const Supscripciones = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold"
  }, "Donaciones"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 text-center p-6 w-full bg-1 md:px-30 h-full md:py-4 lg:px-60 lg:py-20 "
  }, supscripcionesArray.map((items) => /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-xl bg-gray-200 mb-14 md:mb-0 center-content relative tarjetas-supscripcion p-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl color-2 font-bold"
  }, items.tipo), /* @__PURE__ */ React.createElement("p", null, items.instrucciones), /* @__PURE__ */ React.createElement("div", {
    className: "absolute right-0 top-0 text-white bg-red-600 shadow-xl"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "px-8 text-xl"
  }, items.precio))))));
};
export default Supscripciones;
