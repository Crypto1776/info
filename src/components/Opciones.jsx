import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';


const opcioneArray = [
  {
    id: '1',
    title: 'Contactos',
    text: 'Dónde nos puedes encontrar?',
    icons: 'https://github.com/Crypto1776/website/blob/main/src/images/contact.png?raw=true',
    link: '/contactos',
  },
  {
    id: '5',
    title: 'I-hub Global',
    text: 'Que es el proyecto I-hub Global?.',
    icons: 'https://ihubglobal.site/wp-content/uploads/2021/08/cropped-ihub_logo_1-1-250x72.png',
    link: '/ihub',


  },
  // {
  //   id: '2',
  //   title: 'Conferencias',
  //   text: 'Recibe toda la información de nuestras conferencias.',
  //   icons: 'https://github.com/Crypto1776/website/blob/main/src/images/conference.png?raw=true',
  //   link: '/conferencias',


  // },
  // {
  //   id: '4',
  //   title: 'Canal de YouTube',
  //   text: 'Mira todas nuestras capacitaciones en YouTube.',
  //   icons: 'https://github.com/Crypto1776/website/blob/main/src/images/you-tube.png?raw=true',
  //   link: '/canal',


  // },
  {
    id: '3',
    title: 'Tienda',
    text: 'Mire todos nuestros productos.',
    icons: 'https://github.com/Crypto1776/website/blob/main/src/images/shopping-cart.png?raw=true',
    link: '/tienda',


  },


];

const opcionesDisplay = opcioneArray.map((items) => {
  return (
    <div className='block shadow-xl bg-green-200 mb-14 md:mb-0 center-content hover:scale-105'>
      <NavLink className='center-content' to={items.link}>
        <h2 className='text-2xl md:py-4 font-black '>{items.title}</h2>
        <p className='w-full'>{items.text}</p>
        <img className='w-20 pb-3' src={items.icons} alt={items.title} />
      </NavLink>
    </div>
  );
});

function Opciones() {
  return (
    <Zoom left>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-full p-6'>
        {opcionesDisplay}
      </div>
    </Zoom>
  );
}

export default Opciones;
