import React from "../../snowpack/pkg/react.js";
import {FaFacebookF} from "../../snowpack/pkg/react-icons/fa.js";
import {FaInstagramSquare} from "../../snowpack/pkg/react-icons/fa.js";
import {FaYoutubeSquare} from "../../snowpack/pkg/react-icons/fa.js";
import {FaTwitch} from "../../snowpack/pkg/react-icons/fa.js";
import {FaWhatsapp} from "../../snowpack/pkg/react-icons/fa.js";
const Contactos = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold"
  }, "Contactos"), /* @__PURE__ */ React.createElement("p", {
    className: "text-center"
  }, "Para atender todas sus dudas estamos en todas las plataformas digitales."), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center md:flex-row justify-center p-8 md:gap-5"
  }, /* @__PURE__ */ React.createElement(FaFacebookF, {
    className: "text-5xl rounded facebook"
  }), /* @__PURE__ */ React.createElement(FaInstagramSquare, {
    className: "text-5xl rounded instagram"
  }), /* @__PURE__ */ React.createElement(FaYoutubeSquare, {
    className: "text-5xl rounded youtube"
  }), /* @__PURE__ */ React.createElement(FaTwitch, {
    className: "text-5xl rounded twitch"
  }), /* @__PURE__ */ React.createElement(FaWhatsapp, {
    className: "text-5xl rounded twitch"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center w-full "
  }));
};
export default Contactos;
