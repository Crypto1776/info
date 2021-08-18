import React from "../../snowpack/pkg/react.js";
import {Link} from "../../snowpack/pkg/react-router-dom.js";
import Slide from "../../snowpack/pkg/react-reveal/Slide.js";
const Hero = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white flex flex-col items-center justify-center landing md:px-60 md:w-auto md:h-80 portada"
  }, /* @__PURE__ */ React.createElement(Slide, {
    left: true
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "lg:text-9xl md:text-8xl text-4xl text-white mb-14 logo-text text-center letras"
  }, "D", /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl md:text-8xl letritas"
  }, "I"), "F", /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl md:text-8xl "
  }, "I"), /* @__PURE__ */ React.createElement("span", null, " I"), /* @__PURE__ */ React.createElement("span", {
    className: "text-4xl md:text-8xl"
  }, "o"), "T LATINOAMERICA")), /* @__PURE__ */ React.createElement(Link, {
    className: "py-6 px-10  rounded-full bg-yellow-300 flex text-xl\n            items-center transition duration-300 ease-in-out animate-bounce infomation",
    to: "/informacion"
  }, "Información")), /* @__PURE__ */ React.createElement("div", {
    className: "bg-black grid grid-cols-1 md:grid-cols-2 py-6 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-white flex-col flex justify-centers items-center md:pl-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg md:text-xl lg:text-2xl "
  }, "Crypto Couching y Asesoria Financiera")), /* @__PURE__ */ React.createElement("div", {
    className: ""
  })));
};
export default Hero;
