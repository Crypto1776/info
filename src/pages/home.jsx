import React from 'react';
import Opciones from "../components/Opciones";
import CryptoBalance from '../components/CryptoBalance';
import Hero from '../components/Principla';

const Home = () => {
    return (
        <>
          <Hero/>
          <Opciones/>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold">Balance de Crypto Monedas</h2>
            <CryptoBalance/>
        </>
    )
}
export default Home;