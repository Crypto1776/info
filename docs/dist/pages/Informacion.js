import React from "../../snowpack/pkg/react.js";
import Fade from "../../snowpack/pkg/react-reveal/Fade.js";
import LightSpeed from "../../snowpack/pkg/react-reveal/Fade.js";
const Informacion = () => {
  const informationArray = [
    {
      id: "1",
      title: "Misión y Vision\n",
      text: "Somos reportistas e investigadores en el mundo de Crypto Moneda y Blockchain. Prometemos y existimos para buscar la verdad en todas las cosas, especificamente a lo que pertence al mundo de Crypto Moneda, Bitcoin y Blockchain."
    },
    {
      id: "2",
      title: "¿De qué trata nuestro proyecto?",
      text: "Ayudar a travez de nuestras prácticas, experiencias a cada individuo e incrementar sus ingresos económicos y financieros usando Blockchain y Crypto Moneda, para llevar a cabo sus medidas y lograr sus sueños."
    },
    {
      id: "3",
      title: "¿De qué trata nuestro proyecto?",
      text: "Ayudar a cada individuo a entender las leyes de su pais con respecto al uso de Crypto Moneda y Blockchain, y así mantenerse legal y justo ante las leyes del Gobierno en contabilidad e impuestos."
    },
    {
      id: "3",
      title: "¿De qué trata nuestro proyecto?",
      text: 'Educar y ayudar a todos a entender el "por qué " del Bitcoin, Crypto Moneda y Blockchain para fortalecer las comunidades, los hogares e individuos, basandose en los principios de Blockchain para mejorar sus vidas económicamente. \n'
    },
    {
      id: "3",
      title: "¿De qué trata nuestro proyecto?",
      text: "Educar y ayudar a los individuos a salir de la pobreza, a ser mejores ciudadanos de su país y del mundo, en ser responsables, más sabios e inteligentes y más autosuficiente. Poner nuestro enfoque en el país de Ecuador, Latinoamerica y de los Estados Unidos de América, tampoco excluir a nuestros amigos en otros paises del Mundo. "
    }
  ];
  const informationDisplay = informationArray.map((info) => {
    return /* @__PURE__ */ React.createElement("section", null);
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:text-3xl lg:text-4xl text-center py-6 md:py-7 font-extrabold"
  }, "Mision Vision"), /* @__PURE__ */ React.createElement("section", {
    className: "information bg-1 text-white md:center-content lg:px-80"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-6"
  }, /* @__PURE__ */ React.createElement(Fade, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-6"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mision-heading"
  }, "Quienes somos?"), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl"
  }, "Somos reportistas e investigadores en el mundo de Crypto Moneda y Blockchain. Prometemos y existimos para buscar la verdad en todas las cosas, especificamente a lo que pertence al mundo de Crypto Moneda, Bitcoin y Blockchain."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "mision-heading"
  }, "Qué queremos lograr?")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl"
  }, "Ayudar a travez de nuestras prácticas, experiencias a cada individuo e incrementar sus ingresos económicos y financieros usando Blockchain y Crypto Moneda, para llevar a cabo sus medidas y lograr sus sueños."))), /* @__PURE__ */ React.createElement(LightSpeed, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "mision-heading"
  }, "Para qué?"), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl"
  }, "Ayudar a cada individuo a entender las leyes de su pais con respecto al uso de Crypto Moneda y Blockchain, y así mantenerse legal y justo ante las leyes del Gobierno en contabilidad e impuestos."))), /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl"
  }, 'Educar y ayudar a todos a entender el "por qué " del Bitcoin, Crypto Moneda y Blockchain para fortalecer las comunidades, los hogares e individuos, basandose en los principios de Blockchain para mejorar sus vidas económicamente.'))), /* @__PURE__ */ React.createElement(LightSpeed, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pb-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl"
  }, "Educar y ayudar a los individuos a salir de la pobreza, a ser mejores ciudadanos de su país y del mundo, en ser responsables, más sabios e inteligentes y más autosuficiente. Poner nuestro enfoque en el país de Ecuador, Latinoamerica y de los Estados Unidos de América, tampoco excluir a nuestros amigos en otros paises del Mundo."))))))));
};
export default Informacion;
