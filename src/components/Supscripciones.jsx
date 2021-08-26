import React from 'react';

const supscripcionesArray = [
  {
    id: 1,
    precio: '$120',
    tipo: 'Gold',
    instrucciones: 'Recibirás la información más actual y todas sus fuentes,' +
      ' conocerás todas las plataformas donde podrás invertir.',
  },
  {
    id: 1,
    precio: '$90',
    tipo: 'Platinum',
    instrucciones: 'Conocerás las noticias del mundo Crypto cada semana.',

  }
  ,
  {
    id: 1,
    precio: '$0',
    tipo: 'Gratis',
    instrucciones: 'Accederás a información no actual.',

  },

];

const Supscripciones = () => {
  return (
    <>
      <h2 className='text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold'>Subscripciones</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 text-center p-6 w-full bg-1 md:px-30 h-full md:py-4 lg:px-60 lg:py-20 '>
        {
          supscripcionesArray.map(items => (
            <div className='block shadow-xl bg-gray-200 mb-14 md:mb-0 center-content relative tarjetas-supscripcion p-8'>
              <h2 className="text-2xl color-2 font-bold">{items.tipo}</h2>
              <p>{items.instrucciones}</p>
              <div className="absolute right-0 top-0 text-white bg-red-600 shadow-xl">
                <p className="px-8 text-xl">{items.precio}</p>
              </div>
            </div>
          ))

        }
      </div>
    </>
  );
};
export default Supscripciones;