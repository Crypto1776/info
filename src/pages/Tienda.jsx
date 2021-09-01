import React from 'react';

const Tienda = () => {
    const conferenceArray = [
        {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        },
        {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        }, {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        }, {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        },
        {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        },
        {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        },
        {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        },
        {
            id: 1,
            titulo: 'Producto 1',
            precio: '$20',
            lugar: 'Ibarra',
            images: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

        }
    ]
    const conferenceDisplay = conferenceArray.map((items) => {
        return (
            <div className="block shadow-xl center-content px-5 ">
                <img className="md:w-80" src={items.images} alt="{items.title}"/>
                <h2>{items.titulo}</h2>
                <p>{items.precio}</p>
                    <button className="rounded-xl text-white bg-yellow-500 p-3 mb-3">Detalles</button>
            </div>
        )
    })
    return (
        <>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold">Tienda</h2>
            <div className="flex flex-col items-center justify-center md:flex-row md:gap-5 md:flex-wrap text-center">
                <h3 className={"text-xl md:text-3xl lg:text-5xl py-10"}>Página en Construcción.</h3>
            </div>
        </>
    )
}
export default Tienda;