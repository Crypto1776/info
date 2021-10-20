import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Dropdown from './components/Dropdown';
import Contactos from './pages/contacts';
import Conferencias from './pages/Conferencias';
import Tienda from './pages/Tienda';
import Informacion from './pages/Informacion';
import Canal from './pages/Canal';
import Ihub from './pages/Ihub';


function App3() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contactos' exact component={Contactos} />
        <Route path='/conferencias' exact component={Conferencias} />
        <Route path='/tienda' exact component={Tienda} />
        <Route path='/canal' exact component={Canal} />
        <Route path='/informacion' exact component={Informacion} />
        <Route path='/ihub' exact component={Ihub} />
      </Switch>
      <Footer />
    </>
  );
}

export default App3;
