import React from 'react';

const opcioneArray = [
    {
        id: '1',
        title: 'Contactos',
    },
    {
        id: '2',
        title: 'Conferencias',

    },
    {
        id: '3',
        title: 'Tienda'

    }
];

const opcionesDisplay = opcioneArray.map((items) => {
    return (
        <div className="block shadow-xl">
            <h2 className="text-2xl py-4 font-black">{items.title}</h2>
            <p className="w-full"></p>
        </div>
    )
})

function Opciones() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 text-center h-80">
            {opcionesDisplay}
        </div>
    )
}

export default Opciones;
