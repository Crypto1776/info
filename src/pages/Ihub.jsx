import React from 'react';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

import { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';

const Ihub = () => {
  const conferenceArray = [
    {
      numero: 1,
      pregunta: '¿Qué  es iHUB GLOBAL?',
      texto:
        'iHUB GLOBAL es la empresa más importante a nivel global en distribución gratuita de hotspots de Helium Network. Si, leíste bien, es gratuita.',
    },
    {
      numero: 2,
      pregunta: '¿Cual es el precio?',

      texto:
        'Dicha distribución la hace 100% sin costo en el mundo entero a toda persona interesada en tener y hospedar un dispositivo hotspot',
    },
    {
      numero: 3,
      pregunta: '¿Como gano?',

      texto:
        'Quienes alberguen dicho dispositivo tendrán como recompensa la generación de criptomonedas Helium todos los días, mismas que pueden ser intercambiadas por tu moneda local. Pero eso no es todo.',
    },
    {
      numero: 4,
      pregunta: '¿Puedo invitar a mas personas?',

      texto:
        'Cualquier persona que haga su registro y solicite su hotspot gratuito, puede participar de un programa de recompensas por dar a conocer e invitar personas a que soliciten su propio hotspot gratuito. Dichas recompensas provienen de un porcentaje de las criptomonedas Helium generadas por los hotspots de sus invitados. Si lo que has leído hasta este momento llama tú atención espera a conocer los detalles. Contáctame para brindarte más información sobre cómo puedes beneficiarte de esta tecnología.',
    },
  ];

  return (
    <>
      <h1 className=" text-4xl md:text-3xl lg:text-5xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold bg-1 text-white">
        I-hub Global
      </h1>
      <div className=" text-center w-lg center-content"></div>
      <section className="conferencias-content center-content bg-1">
        <div className="center-content">
          <div>
            <div className={'block pt-10'}>
              <Flip>
                <img
                  src="https://ihubglobal.site/wp-content/uploads/2021/08/cropped-ihub_logo_1-1-250x72.png"
                  alt="Logo"
                  className="p-5 md:pt-4 animate-ping logo-conferencias"
                />
              </Flip>
            </div>
          </div>
          <div>
            <div>
              <LightSpeed right>
                <div className="bg-1 text-white pt-10 pb-10">
                  <h1 className=" text-4xl  text-center">
                    iHUB GLOBAL es la empresa más importante a nivel global en
                    distribución gratuita Minador hotspots de crypto Helium
                    Network. Si, leíste bien, es GRATUITA
                  </h1>
                  {/* <h1 className=' text-4xl text-center pb-3'>2021</h1>
                  <h2 className=' text-xl text-center text-white  '>EL MEJOR MÉTODO PARA</h2>
                  <h2 className=' text-xl text-center text-white '>GANAR DINERO DE FORMA
                    SEGURA</h2>
                  <h2 className=' text-xl text-center text-white'>POR PRIMERA VEZ EN LA CIUDAD
                    BLANCA DE IBARRA</h2>
                  <h3 className=' text-xl text-center text-white shadow-xl'>Asiste y aprende con
                    nosotros en Crypto Conference</h3> */}
                </div>
              </LightSpeed>
            </div>

            <div className={'px-2 p-5 shadow-sm rounded-3xl text-white'}>
              <h2 className="px-3 text-yellow-700 text-2xl text-center">
                Dirigido a todo el publico en general.
              </h2>
            </div>
            <div className={'px-2 shadow-xl bg-white'}>
              <div>
                {/* <h1 className='pregunta-1 text-4xl md:text-6xl py-6 text-center'>¿Qué es iHUB GLOBAL?
                </h1> */}
              </div>
              <ol>
                {conferenceArray.map((items) => (
                  <div className="center-content">
                    <LightSpeed left>
                      <div className="text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white w-3/4 rounded rounded-6xl mb-14 p-8">
                        <p className="text-yellow-600 text-4xl md:text-5xl">
                          {items.pregunta}
                        </p>
                        <h2 className="text-xl md:text-3xl">{items.texto}</h2>
                      </div>
                    </LightSpeed>
                  </div>
                ))}
              </ol>
            </div>
            <div className={'px-2 bg-white pb-8'}>
              <div>
                <h1 className="pregunta-1 text-4xl md:text-6xl py-6 text-center">
                  ¿Mas preguntas?
                </h1>
              </div>
              <LightSpeed right>
                <div className="center-content text-center">
                  <h2 className="text-xl md:text-3xl">
                    Mira el siguiente video.
                  </h2>
                  <div>{video()}</div>
                </div>
              </LightSpeed>
            </div>
          </div>
          <Zoom right>
            <div className="py-5">
              <h1 className=" md:text-5xl text-center text-3xl text-white py-3 ">
                Inscripcion
              </h1>
              <h3 className="text-white text-center py-2 md:text-3xl "></h3>
              <div className="center-content py-3 ">
                <a
                  className="rounded-xl  bg-yellow-700 p-2 text-center text-white md:text-lg md:p-6 text-xl md:text-4xl"
                  href="https://join.heliumtrack.app/luisfreire20"
                  target="_blank"
                >
                  Inscribirme
                </a>
              </div>
              <div className="center-content py-3 mt-10 bg-red-100 rounded p-2">
                <h3 className="text-black">
                  Si tienes mas preguntas puedes escribirnos a nuestro TELEGRAM
                </h3>
                <a
                  className="rounded-xl  bg-blue-700 p-2 text-center text-white md:text-lg md:p-6 text-xl md:text-4xl"
                  href="https://t.me/DiFiIoTLatinoamerica"
                  target="_blank"
                >
                  Telegram
                </a>
              </div>
            </div>
          </Zoom>
        </div>
      </section>
    </>
  );
};

const video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qYmoZqgOIp0"
        onClose={() => setOpen(false)}
      />

      <button
        className="btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  px-10"
        onClick={() => setOpen(true)}
      >
        Click
      </button>
    </React.Fragment>
  );
};
export default Ihub;
