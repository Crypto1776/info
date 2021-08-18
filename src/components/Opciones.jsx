import React from 'react';
import Zoom from 'react-reveal/Zoom';


const opcioneArray = [
    {
        id: '1',
        title: 'Contactos',
        text: 'Dónde nos puedes encontrar?'
    },
    {
        id: '2',
        title: 'Conferencias',
        text: 'Recibe toda la información de nuestras conferencias.'


    },
    {
        id: '3',
        title: 'Tienda',
        text: 'Mire todos nuestros productos.'


    }
];

const opcionesDisplay = opcioneArray.map((items) => {
    return (
        <div className="block shadow-xl">
            <h2 className="text-2xl py-4 font-black">{items.title}</h2>
            <p className="w-full">{items.text}</p>
        </div>
    )
})

function Opciones() {
    return (
        <Zoom left>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-80">
            {opcionesDisplay}
        </div>
        </Zoom>
    )
}

export default Opciones;
