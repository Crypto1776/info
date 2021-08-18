import React from "react";
import {Link} from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' : 'hidden'}
             onClick={toggle}
        >
            <Link className="p-4 no-underline" to="/">Home</Link>
            <Link className="p-4 no-underline" to="/contactos">Contactos</Link>
            <Link className="p-4 no-underline" to="/conferencias">Conferencias</Link>
            <Link className="p-4 no-underline" to="/tienda">Tienda</Link>
        </div>
    )
}
export default Dropdown
