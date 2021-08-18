import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const Contactos = () => {
    return (
        <>
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold">Contactos</h2>
                <p className={"text-center"}>Para atender todas sus dudas estamos en todas las plataformas digitales.</p>
                <div className="flex flex-col items-center md:flex-row justify-center p-8 md:gap-5">
                <FaFacebookF className="text-5xl rounded facebook" />
                <FaInstagramSquare className="text-5xl rounded instagram"/>
                <FaYoutubeSquare className="text-5xl rounded youtube"/>
                <FaTwitch className="text-5xl rounded twitch"/>
                <FaWhatsapp className="text-5xl rounded twitch"/>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full ">

            </div>
        </>
    )
}
export default Contactos