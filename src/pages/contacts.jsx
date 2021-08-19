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
        <h2 className='text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold'>Contactos</h2>
        <p className={'text-center'}>Para atender todas sus dudas estamos en todas las plataformas digitales.</p>
        <div className='flex flex-col items-center md:flex-row justify-center p-8 md:gap-5'>
          <a href='https://www.facebook.com/profile.php?id=100071847725078' target='_blank'
             rel='noreferrer'><FaFacebookF className='text-5xl rounded facebook' /></a>
          <a href='https://instagram.com/difi_iot?utm_medium=copy_link' target='_blank'
             rel='noreferrer'><FaInstagramSquare className='text-5xl rounded instagram' /></a>
          <a href='https://www.youtube.com/channel/UCC5jKLTWSIHgRWN6tyKyw5g' target='_blank'
             rel='noreferrer'><FaYoutubeSquare className='text-5xl rounded youtube' /></a>
          <a href='https://www.twitch.tv/difilatinoamerica' target='_blank'><FaTwitch className='text-5xl rounded twitch' /> </a>

          <FaWhatsapp className='text-5xl rounded twitch' />

        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full '>

      </div>
    </>
  );
};
export default Contactos;