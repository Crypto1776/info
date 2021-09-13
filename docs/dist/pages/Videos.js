import React, {useState} from "../../snowpack/pkg/react.js";
import ModalVideo from "../../snowpack/pkg/react-modal-video.js";
import "../../snowpack/pkg/react-modal-video/css/modal-video.css.proxy.js";
const canalArray = [
  {
    id: 1,
    titulo: "¿Quiénes somos?",
    link: "mZUzBL7_EuY"
  },
  {
    id: 2,
    titulo: "Invitación a CRIPTO CONFERENCIA",
    link: "HMjJ-Qa_NRE"
  },
  {
    id: 3,
    titulo: "Invitación a CRIPTO CONFERENCIA",
    link: "IQa9SIZcY1U"
  },
  {
    titulo: "Invitación a CRIPTO CONFERENCIA",
    id: 4,
    link: "CEQR7eyQJ7w"
  }
];
const Canal = () => {
  const [isOpen, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "center-content"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-bold py-5"
  }, "NUESTRA CANAL DE YOUTUBE")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-full p-6"
  }, canalArray.map((links) => /* @__PURE__ */ React.createElement("div", {
    className: "block shadow-xl  text-white mb-14 md:mb-0 center-content h-60"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-black"
  }, links.titulo), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ModalVideo, {
    channel: "youtube",
    autoplay: true,
    isOpen,
    videoId: links.link,
    onClose: () => setOpen(false)
  })), /* @__PURE__ */ React.createElement("button", {
    className: "btn-primary bg-red-600 rounded px-1",
    onClick: () => setOpen(true)
  }, "ver video")))))));
};
export default Canal;
