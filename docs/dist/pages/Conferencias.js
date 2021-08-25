import React from "../../snowpack/pkg/react.js";
import Flip from "../../snowpack/pkg/react-reveal/Flip.js";
import LightSpeed from "../../snowpack/pkg/react-reveal/LightSpeed.js";
import Zoom from "../../snowpack/pkg/react-reveal/Zoom.js";
const Conferencias = () => {
  const conferenceArray = [
    {
      id: 1,
      titulo: "Conferencia 1",
      fecha: "16-8-2020",
      lugar: "Ibarra",
      info: "0990812688",
      image: "https://github.com/Crypto1776/website/blob/main/src/images/volante.jpg?raw=true"
    }
  ];
  const conferenceDisplay = conferenceArray.map((items) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "relative group shadow-lg block center-content hover:shadow-xl mb-14 px-8 "
    }, /* @__PURE__ */ React.createElement("img", {
      className: "md:group-hover:grayscale md:group-hover:blur md:group-hover:contrast h-full",
      src: items.image,
      alt: items.titulo
    }), /* @__PURE__ */ React.createElement("div", {
      className: "transition bg-yellow-50 duration-600 bottom-0 left-0 h-20 md:h-40 w-full md:absolute md:group-hover:opacity-100 md:opacity-0"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "https://api.whatsapp.com/send/?phone=%2B593990812688&text=Estoy+Interesado+en+asistir+a+este+evento.&app_absent=0",
      target: "_blank",
      className: "animate-bounce rounded-xl w-20 bg-yellow-500 p-6 text-white md:text-lg md:p-3 text-xl"
    }, "Inscribirme")));
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: " text-4xl md:text-3xl lg:text-5xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold"
  }, "Conferencias"), /* @__PURE__ */ React.createElement("div", {
    className: " text-center w-lg center-content screen"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "px-3 center-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "center-content border border-yellow-600 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block bg-yellow-300 shadow-xl w-full font-bold px-2"
  }, /* @__PURE__ */ React.createElement("h2", null, "18, Septiembre 16h00 pm - 19h00 pm"), /* @__PURE__ */ React.createElement("h2", null, "Hotel Turismo"), /* @__PURE__ */ React.createElement("h3", null, "Ibarra-Ecuador")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "block"
  }, /* @__PURE__ */ React.createElement(Flip, null, /* @__PURE__ */ React.createElement("img", {
    src: "https://github.com/Crypto1776/website/blob/main/src/images/logo-web.png?raw=true",
    alt: "Logo",
    className: "p-5 md:pt-4 animate-ping logo-conferencias"
  })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "bg-white text-4xl text-center"
  }, "Crypto Conference"), /* @__PURE__ */ React.createElement("h1", {
    className: "bg-white text-4xl text-center pb-3"
  }, "2021"), /* @__PURE__ */ React.createElement("h2", {
    className: "bg-white text-xl text-center text-yellow-700  font-black"
  }, "EL MEJOR MÉTODO PARA"), /* @__PURE__ */ React.createElement("h2", {
    className: "bg-white text-xl text-center text-yellow-700  font-black"
  }, "GANAR DINERO DE FORMA SEGURA"), /* @__PURE__ */ React.createElement("h2", {
    className: "bg-white text-xl text-center text-yellow-700 font-black"
  }, "POR PRIMERA VEZ EN LA CIUDAD BLANCA DE IBARRA"), /* @__PURE__ */ React.createElement("h3", {
    className: "bg-white text-xl text-center text-yellow-700 font-black shadow-xl"
  }, "Asiste y aprende con nosotros en Crypto Conference")))), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 e shadow-sm rounded-full"
  }, /* @__PURE__ */ React.createElement("h2", null, "Dirigido a todas las personas que desean aprender y prepararse por el futuro potencial colapso del dólar.")), /* @__PURE__ */ React.createElement(LightSpeed, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 shadow-xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-black"
  }, "PUNTOS A TRATAR "), /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, "1. Historia del Bitcoin, Cryptomoneda y el Dólar."), /* @__PURE__ */ React.createElement("li", null, "2. Cómo entrar en el mundo de la Cryptomoneda, Bitcoin de forma segura."), /* @__PURE__ */ React.createElement("li", null, "3. Cómo ganar dinero y mejorar la vida de la Crytomoneda y Blockchain."), /* @__PURE__ */ React.createElement("li", null, "4. Oportunidades de tener su negocio propio en Cryptomonedas ahora.")))), /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-black"
  }, "Requisitos"), /* @__PURE__ */ React.createElement("h2", null, "Traer un Smartphone: Apple o Android."), /* @__PURE__ */ React.createElement("h2", null, "Un cuadernillo de notas y un lapicero.")))), /* @__PURE__ */ React.createElement(Zoom, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "bg-white md:text-7xl text-center text-2xl font-black"
  }, "Evento Gratuito"), /* @__PURE__ */ React.createElement("h3", null, "Cupos Limitados, llama ya."), /* @__PURE__ */ React.createElement("div", {
    className: "center-content pb-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "rounded-xl  bg-yellow-500 p-2 text-center text-white md:text-lg md:p-3 text-xl",
    href: "https://api.whatsapp.com/send/?phone=%2B5939900707889&text=Estoy+Interesado+en+asistir+a+este+evento.&app_absent=0",
    target: "_blank"
  }, "Inscribirme")))))));
};
export default Conferencias;
