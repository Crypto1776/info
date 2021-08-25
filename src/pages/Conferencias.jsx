import React from 'react';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';


const Conferencias = () => {
  const conferenceArray = [
    {
      numero: 1,
      texto: 'Historia del Bitcoin, Cryptomoneda y el Dólar',
    },
    {
      numero: 2,
      texto: 'Cómo entrar en el mundo de la Cryptomoneda, Bitcoin de forma segura',
    }, {
      numero: 3,
      texto: 'Cómo ganar dinero y mejorar la vida de la Crytomoneda y Blockchain',
    }, {
      numero: 4,
      texto: 'Oportunidades de tener su negocio propio en Cryptomonedas ahora',
    },

  ];

  return (
    <>
      <h1
        className=' text-4xl md:text-3xl lg:text-5xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold bg-1 text-white'>Conferencia
        1</h1>
      <div className=' text-center w-lg center-content'>
      </div>
      <section className='conferencias-content center-content bg-1'>
        <div className='center-content'>
          <div className={'block bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-xl w-full px-2 text-xl py-6'}>
            <h2>18, Septiembre 16h00 pm - 19h00 pm</h2>
            <h2>Hotel Turismo</h2>
            <h3>Ibarra-Ecuador</h3>
          </div>
          <div>
            <div className={'block pt-10'}>
              <Flip>
                <img src='https://github.com/Crypto1776/website/blob/main/src/images/logo-web.png?raw=true' alt='Logo'
                     className='p-5 md:pt-4 animate-ping logo-conferencias' />
              </Flip>
            </div>

          </div>
          <div>
            <div>

              <LightSpeed right>
                <div className='bg-1 text-white pt-10 pb-10'>
                  <h1 className=' text-4xl text-center'>Crypto Conference</h1>
                  <h1 className=' text-4xl text-center pb-3'>2021</h1>
                  <h2 className=' text-xl text-center text-white  '>EL MEJOR MÉTODO PARA</h2>
                  <h2 className=' text-xl text-center text-white '>GANAR DINERO DE FORMA
                    SEGURA</h2>
                  <h2 className=' text-xl text-center text-white'>POR PRIMERA VEZ EN LA CIUDAD
                    BLANCA DE IBARRA</h2>
                  <h3 className=' text-xl text-center text-white shadow-xl'>Asiste y aprende con
                    nosotros en Crypto Conference</h3>
                </div>
              </LightSpeed>
            </div>

            <div className={'px-2 p-5 shadow-sm rounded-3xl text-white'}>
              <h2 className='px-3 text-yellow-700 text-2xl text-center'>Dirigido a todas las personas que desean
                aprender y prepararse por el futuro potencial colapso del
                dólar.</h2>
            </div>
              <div className={'px-2 shadow-xl bg-white'}>
                <div>
                  <h1 className='pregunta-1 text-4xl py-6 text-center'>¿Qué aprenderás en Crypto Conference?
                  </h1>
                </div>
                <ol>
                  {
                    conferenceArray.map(items => (
                      <div className='center-content'>
                        <LightSpeed left>
                        <div
                          className='text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white w-3/4 rounded rounded-6xl mb-14 p-8'>
                          <p className='text-yellow-600 text-4xl'>{items.numero}</p>
                          <h2>{items.texto}</h2>
                        </div>
                        </LightSpeed>
                      </div>
                    ))

                  }
                </ol>
              </div>
              <div className={'px-2 bg-white pb-8'}>
                <div>
                  <h1 className='pregunta-1 text-4xl py-6 text-center'>¿Qué llevar?
                  </h1>
                </div>
                <LightSpeed right>
                <div className="center-content">
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-full
                   w-20 text-2xl' fill='none' viewBox='0 0 24 24'
                       stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                          d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                  </svg>
                  <h2 className="text-xl">Traer un Smartphone: Apple o Android.</h2>
                </div>
                </LightSpeed>
                <LightSpeed left>
                <div className="center-content">
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-20 w-full' fill='none' viewBox='0 0 24 24'
                       stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                          d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                  </svg>
                  <h2 className="text-xl">Un cuadernillo de notas y un lapicero.</h2>

                </div>
                </LightSpeed>
              </div>
          </div>
          <Zoom right>
            <div className="py-6">
              <h1 className=' md:text-7xl text-center text-3xl text-white py-3 '>Evento Gratuito</h1>
              <h3 className="text-white text-center py-2">Cupos Limitados.</h3>
              <div className='center-content py-3'>
                <a className='rounded-xl  bg-yellow-700 p-2 text-center text-white md:text-lg md:p-3 text-xl'
                   href='https://forms.gle/3hqMaSDzr8My2QUq5'
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