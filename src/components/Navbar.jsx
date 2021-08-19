import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/MarcaDifi.png';

const Navbar = ({ toggle }) => {
  return (
    <nav className='flex justify-between items-center bg-black md:text-xl lg:text-xl bg-white
         shadow-sm font-mono'
         role='navigation'>
      <NavLink to='/' className='pl-8'>
        <img src='https://github.com/Crypto1776/website/blob/main/src/images/MarcaDifi.png?raw=true' alt='Logo'
             className='w-20 md:w-40 pt-4 ' />
      </NavLink>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
             xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>

      <div className='pr-8 hidden md:block text-black'>
        <NavLink className='p-4 no-underline' to='/'>Home</NavLink>
        <NavLink className='p-4 no-underline' to='/contactos'
                 activeClassName='bg-red-600 text-gray-100 rounded-lg'>Contactos</NavLink>
        <NavLink className='p-4 no-underline' to='/conferencias'
                 activeClassName='bg-red-600 text-gray-100 rounded-lg'>Conferencias</NavLink>
        <NavLink className='p-4 no-underline' to='/tienda'
                 activeClassName='bg-red-600 text-gray-100 rounded-lg'>Tienda</NavLink>

      </div>
    </nav>
  );

};
export default Navbar;
