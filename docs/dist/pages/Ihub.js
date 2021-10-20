import React from "../../snowpack/pkg/react.js";
import Flip from "../../snowpack/pkg/react-reveal/Flip.js";
import LightSpeed from "../../snowpack/pkg/react-reveal/LightSpeed.js";
import Zoom from "../../snowpack/pkg/react-reveal/Zoom.js";
import {useState} from "../../snowpack/pkg/react.js";
import ReactDOM from "../../snowpack/pkg/react-dom.js";
import ModalVideo from "../../snowpack/pkg/react-modal-video.js";
const Ihub = () => {
  const conferenceArray = [
    {
      numero: 1,
      pregunta: "¿Qué  es iHUB GLOBAL?",
      texto: "iHUB GLOBAL es la empresa más importante a nivel global en distribución gratuita de hotspots de Helium Network. Si, leíste bien, es gratuita."
    },
    {
      numero: 2,
      pregunta: "¿Cual es el precio?",
      texto: "Dicha distribución la hace 100% sin costo en el mundo entero a toda persona interesada en tener y hospedar un dispositivo hotspot"
    },
    {
      numero: 3,
      pregunta: "¿Como gano?",
      texto: "Quienes alberguen dicho dispositivo tendrán como recompensa la generación de criptomonedas Helium todos los días, mismas que pueden ser intercambiadas por tu moneda local. Pero eso no es todo."
    },
    {
      numero: 4,
      pregunta: "¿Puedo invitar a mas personas?",
      texto: "Cualquier persona que haga su registro y solicite su hotspot gratuito, puede participar de un programa de recompensas por dar a conocer e invitar personas a que soliciten su propio hotspot gratuito. Dichas recompensas provienen de un porcentaje de las criptomonedas Helium generadas por los hotspots de sus invitados. Si lo que has leído hasta este momento llama tú atención espera a conocer los detalles. Contáctame para brindarte más información sobre cómo puedes beneficiarte de esta tecnología."
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: " text-4xl md:text-3xl lg:text-5xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold bg-1 text-white"
  }, "I-hub Global"), /* @__PURE__ */ React.createElement("div", {
    className: " text-center w-lg center-content"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "conferencias-content center-content bg-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "center-content"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "block pt-10"
  }, /* @__PURE__ */ React.createElement(Flip, null, /* @__PURE__ */ React.createElement("img", {
    src: "https://ihubglobal.site/wp-content/uploads/2021/08/cropped-ihub_logo_1-1-250x72.png",
    alt: "Logo",
    className: "p-5 md:pt-4 animate-ping logo-conferencias"
  })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-1 text-white pt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: " text-4xl  text-center"
  }, "iHUB GLOBAL es la empresa más importante a nivel global en distribución gratuita Minador hotspots de crypto Helium Network. Si, leíste bien, es GRATUITA")))), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 p-5 shadow-sm rounded-3xl text-white"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "px-3 text-yellow-700 text-2xl text-center"
  }, "Dirigido a todo el publico en general.")), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 shadow-xl bg-white"
  }, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("ol", null, conferenceArray.map((items) => /* @__PURE__ */ React.createElement("div", {
    className: "center-content"
  }, /* @__PURE__ */ React.createElement(LightSpeed, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white w-3/4 rounded rounded-6xl mb-14 p-8"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-yellow-600 text-4xl md:text-5xl"
  }, items.pregunta), /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl md:text-3xl"
  }, items.texto))))))), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 bg-white pb-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "pregunta-1 text-4xl md:text-6xl py-6 text-center"
  }, "¿Mas preguntas?")), /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "center-content text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl md:text-3xl"
  }, "Mira el siguiente video."), /* @__PURE__ */ React.createElement("div", null, video()))))), /* @__PURE__ */ React.createElement(Zoom, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: " md:text-5xl text-center text-3xl text-white py-3 "
  }, "Inscripcion"), /* @__PURE__ */ React.createElement("h3", {
    className: "text-white text-center py-2 md:text-3xl "
  }), /* @__PURE__ */ React.createElement("div", {
    className: "center-content py-3 "
  }, /* @__PURE__ */ React.createElement("a", {
    className: "rounded-xl  bg-yellow-700 p-2 text-center text-white md:text-lg md:p-6 text-xl md:text-4xl",
    href: "https://join.heliumtrack.app/luisfreire20",
    target: "_blank"
  }, "Inscribirme")), /* @__PURE__ */ React.createElement("div", {
    className: "center-content py-3 mt-10 bg-red-100 rounded p-2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-black"
  }, "Si tienes mas preguntas puedes escribirnos a nuestro TELEGRAM"), /* @__PURE__ */ React.createElement("a", {
    className: "rounded-xl  bg-blue-700 p-2 text-center text-white md:text-lg md:p-6 text-xl md:text-4xl",
    href: "https://t.me/DiFiIoTLatinoamerica",
    target: "_blank"
  }, "Telegram")))))));
};
const video = () => {
  const [isOpen, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ModalVideo, {
    channel: "youtube",
    autoplay: true,
    isOpen,
    videoId: "qYmoZqgOIp0",
    onClose: () => setOpen(false)
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  px-10",
    onClick: () => setOpen(true)
  }, "Click"));
};
export default Ihub;
