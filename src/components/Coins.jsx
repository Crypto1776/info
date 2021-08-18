import React from 'react';
import '../index.css';

const Coin = ({
                  name,
                  price,
                  symbol,
                  marketcap,
                  volume,
                  image,
                  priceChange
              }) => {
    return (
        <div className='coin-container center-content md:flex-rows border'>
            <div className='coin-row'>
                <div className='coin center-content'>
                    <h1 className="text-xl text-center md:text-2xl">{name}-{symbol}</h1>
                    <img src={image} alt='crypto' className="w-1/2" />
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Precio: ${price.toLocaleString()}</p>
                    <p className='coin-volume'>Volúmen: ${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;
