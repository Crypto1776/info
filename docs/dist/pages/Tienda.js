import React from "../../snowpack/pkg/react.js";
const Tienda = () => {
  const conferenceArray = [
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 1,
      titulo: "Producto 1",
      precio: "$20",
      lugar: "Ibarra",
      images: "https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];
  const conferenceDisplay = conferenceArray.map((items) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "block shadow-xl center-content px-5 "
    }, /* @__PURE__ */ React.createElement("img", {
      className: "md:w-80",
      src: items.images,
      alt: "{items.title}"
    }), /* @__PURE__ */ React.createElement("h2", null, items.titulo), /* @__PURE__ */ React.createElement("p", null, items.precio), /* @__PURE__ */ React.createElement("button", {
      className: "rounded-xl text-white bg-yellow-500 p-3 mb-3"
    }, "Detalles"));
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold"
  }, "Tienda"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center md:flex-row md:gap-5 md:flex-wrap text-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl md:text-3xl lg:text-5xl py-10"
  }, "Página en Construcción.")));
};
export default Tienda;
