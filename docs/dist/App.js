import React, {useState, useEffect} from "../snowpack/pkg/react.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import {Route, Switch} from "../snowpack/pkg/react-router-dom.js";
import Home from "./pages/home.js";
import Dropdown from "./components/Dropdown.js";
import Contactos from "./pages/contacts.js";
import Conferencias from "./pages/Conferencias.js";
import Tienda from "./pages/Tienda.js";
import Informacion from "./pages/Informacion.js";
import Canal from "./pages/Canal.js";
import Ihub from "./pages/Ihub.js";
function App3() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    toggle
  }), /* @__PURE__ */ React.createElement(Dropdown, {
    isOpen,
    toggle
  }), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    exact: true,
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/contactos",
    exact: true,
    component: Contactos
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/conferencias",
    exact: true,
    component: Conferencias
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/tienda",
    exact: true,
    component: Tienda
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/canal",
    exact: true,
    component: Canal
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/informacion",
    exact: true,
    component: Informacion
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/ihub",
    exact: true,
    component: Ihub
  })), /* @__PURE__ */ React.createElement(Footer, null));
}
export default App3;
