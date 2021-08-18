import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../index.css';
import Coin from './Coins'

function CryptoBalance() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='coin-app flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-5 px-3 md:gap-1'>

            <div className='coin-search md:hidden'>
                <h1 className='coin-text text-center'>Busca una Moneda</h1>
                <form className="flex flex-col items-center w-full p-7">
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Buscar'
                    />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <div>
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default CryptoBalance;
