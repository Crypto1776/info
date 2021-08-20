import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav className='flex justify-between items-center bg-black text-white md:text-xl lg:text-xl  relative
         shadow-sm font-mono'
         role='navigation'>
      <NavLink to='/' className='pl-8'>
        <img src='https://github.com/Crypto1776/website/blob/main/src/images/logo_web.png?raw=true' alt='Logo'
             className=' w-40 md:w-60 py-5 md:pt-4' />
      </NavLink>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
             xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>

      <div className='pr-8 hidden md:block text-white'>
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
