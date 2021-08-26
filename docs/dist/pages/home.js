import React from "../../snowpack/pkg/react.js";
import Opciones from "../components/Opciones.js";
import CryptoBalance from "../components/CryptoBalance.js";
import Hero from "../components/Principla.js";
import Supscripciones from "../components/Supscripciones.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Opciones, null), /* @__PURE__ */ React.createElement(Supscripciones, null), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold"
  }, "Balance de Crypto Monedas"), /* @__PURE__ */ React.createElement(CryptoBalance, null));
};
export default Home;
