import React, {useState, useEffect} from "../../snowpack/pkg/react.js";
import axios from "../../snowpack/pkg/axios.js";
import "../index.css.proxy.js";
import Coin from "./Coins.js";
function CryptoBalance() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((res) => {
      setCoins(res.data);
      console.log(res.data);
    }).catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
  return /* @__PURE__ */ React.createElement("div", {
    className: "coin-app flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-5 px-3 md:gap-1 bg-white "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "coin-search md:hidden"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "coin-text text-center"
  }, "Busca una Moneda"), /* @__PURE__ */ React.createElement("form", {
    className: "flex flex-col items-center w-full p-7"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "coin-input",
    type: "text",
    onChange: handleChange,
    placeholder: "Buscar"
  }))), filteredCoins.map((coin) => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Coin, {
      key: coin.id,
      name: coin.name,
      price: coin.current_price,
      symbol: coin.symbol,
      marketcap: coin.total_volume,
      volume: coin.market_cap,
      image: coin.image,
      priceChange: coin.price_change_percentage_24h
    }));
  }));
}
export default CryptoBalance;
