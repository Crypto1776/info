import React from "../../snowpack/pkg/react.js";
import "../index.css.proxy.js";
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "coin-container center-content md:flex-rows border mt-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "coin-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "coin center-content"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-center md:text-2xl"
  }, name, "-", symbol), /* @__PURE__ */ React.createElement("img", {
    src: image,
    alt: "crypto",
    className: "w-1/2"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "coin-data"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "coin-price"
  }, "Precio: $", price.toLocaleString()), /* @__PURE__ */ React.createElement("p", {
    className: "coin-volume"
  }, "Volúmen: $", volume.toLocaleString()), priceChange < 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "coin-percent red"
  }, priceChange.toFixed(2), "%") : /* @__PURE__ */ React.createElement("p", {
    className: "coin-percent green"
  }, priceChange.toFixed(2), "%"), /* @__PURE__ */ React.createElement("p", {
    className: "coin-marketcap"
  }, "Mkt Cap: $", marketcap.toLocaleString()))));
};
export default Coin;
