import React from 'react';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';



const Conferencias = () => {
  const conferenceArray = [
    {
      id: 1,
      titulo: 'Conferencia 1',
      fecha: '16-8-2020',
      lugar: 'Ibarra',
      info: '0990812688',
      image: 'https://github.com/Crypto1776/website/blob/main/src/images/volante.jpg?raw=true',
    },
    // {
    //     id: 1,
    //     titulo: 'Conferencia 2',
    //     fecha: '16-8-2020',
    //     lugar: 'Ibarra',
    //     info: '0990812688',
    //     image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'
    // }

    // }, {
    //     id: 1,
    //     titulo: 'Conferencia 3',
    //     fecha: '16-8-2020',
    //     lugar: 'Ibarra',
    //     info: '0990812688',
    //     image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'
    //
    // }, {
    //     id: 1,
    //     titulo: 'Conferencia 1',
    //     fecha: '16-8-2020',
    //     lugar: 'Ibarra',
    //     info: '0990812688',
    //     image: 'https://github.com/Crypto1776/website/blob/main/src/images/afiche.jpg?raw=true'
    // }
  ];
  const conferenceDisplay = conferenceArray.map((items) => {
    return (
      <div className='relative group shadow-lg block center-content hover:shadow-xl mb-14 px-8 '>
        <img className='md:group-hover:grayscale md:group-hover:blur md:group-hover:contrast h-full' src={items.image}
             alt={items.titulo} />
        <div
          className='transition bg-yellow-50 duration-600 bottom-0 left-0 h-20 md:h-40 w-full md:absolute md:group-hover:opacity-100 md:opacity-0'>
          <a
            href='https://api.whatsapp.com/send/?phone=%2B593990812688&text=Estoy+Interesado+en+asistir+a+este+evento.&app_absent=0'
            target='_blank'
            className='animate-bounce rounded-xl w-20 bg-yellow-500 p-6 text-white md:text-lg md:p-3 text-xl'>Inscribirme</a>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1
        className=' text-4xl md:text-3xl lg:text-5xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold'>Conferencias</h1>
      <div className=' text-center w-lg center-content screen'>
      </div>
      <section className='px-3'>
        <div className='center-content border border-yellow-600 '>
          <div className={'block bg-yellow-300 shadow-xl w-full font-bold px-2'}>
            <h2>18, Septiembre 16h00 pm - 19h00 pm</h2>
            <h2>Hotel Turismo</h2>
            <h3>Ibarra-Ecuador</h3>
          </div>
          <div>
            <div className={'block'}>
              <Flip>
                <img src='https://github.com/Crypto1776/website/blob/main/src/images/logo-web.png?raw=true' alt='Logo'
                     className='p-5 md:pt-4 animate-ping logo-conferencias' />
              </Flip>
            </div>

          </div>
          <div>
            <div>

              <LightSpeed right>
              <div>
                <h1 className='bg-white text-4xl text-center'>Crypto Conference</h1>
                <h1 className='bg-white text-4xl text-center pb-3'>2021</h1>
                <h2 className='bg-white text-xl text-center text-yellow-700  font-black'>EL MEJOR MÉTODO PARA</h2>
                <h2 className='bg-white text-xl text-center text-yellow-700  font-black'>GANAR DINERO DE FORMA
                  SEGURA</h2>
                <h2 className='bg-white text-xl text-center text-yellow-700 font-black'>POR PRIMERA VEZ EN LA CIUDAD
                  BLANCA DE IBARRA</h2>
                <h3 className='bg-white text-xl text-center text-yellow-700 font-black shadow-xl'>Asiste y aprende con
                  nosotros en Crypto Conference</h3>
              </div>
              </LightSpeed>
            </div>

            <div className={'px-2 e shadow-sm rounded-full'}>
              <h2>Dirigido a todas las personas que desean aprender y prepararse por el futuro potencial colapso del
                dólar.</h2>
            </div>
            <LightSpeed left>
            <div className={'px-2 shadow-xl'}>
              <h1 className='font-black'>PUNTOS A TRATAR </h1>
              <ol>
                <li>1. Historia del Bitcoin, Cryptomoneda y el Dólar.</li>
                <li>2. Cómo entrar en el mundo de la Cryptomoneda, Bitcoin de forma segura.</li>
                <li>3. Cómo ganar dinero y mejorar la vida de la Crytomoneda y Blockchain.</li>
                <li>4. Oportunidades de tener su negocio propio en Cryptomonedas ahora.</li>
              </ol>
            </div>
            </LightSpeed>
            <LightSpeed right>
            <div className={'px-2'}>
              <h3 className='font-black'>Requisitos</h3>
              <h2>Traer un Smartphone: Apple o Android.</h2>
              <h2>Un cuadernillo de notas y un lapicero.</h2>
            </div>
            </LightSpeed>
          </div>
          <Zoom right>
          <div>
            <h1 className='bg-white md:text-7xl text-center text-2xl font-black'>Evento Gratuito</h1>
            <h3>Cupos Limitados, llama ya.</h3>
            <div className="center-content ">
              <a className='rounded-xl  bg-yellow-500 p-2 text-center text-white md:text-lg md:p-3 text-xl'
                 href='https://api.whatsapp.com/send/?phone=%2B593990812688&text=Estoy+Interesado+en+asistir+a+este+evento.&app_absent=0'
                 target='_blank'
              >Inscribirme</a>
            </div>
          </div>
          </Zoom>
        </div>
      </section>
    </>
  );
};
export default Conferencias;