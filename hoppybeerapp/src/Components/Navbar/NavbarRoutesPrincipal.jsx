import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarRegister } from './NavbarRegister';
import { Home } from '../Home';
import { Error404 } from '../Error404';
import { LinkNav } from './LinkNav';
import { Historia } from '../PageNav/Historia';
import { QuienesSomos } from '../PageNav/QuienesSomos';
import { Contacto } from '../PageNav/Contacto';


export const NavbarRoutesPrincipal = () => {
  return (
   <BrowserRouter>
   <LinkNav/>
   <NavbarRegister/>
   <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Historia" element={ <Historia/> } />
      <Route path="/QuienesSomos" element={ <QuienesSomos/> } />
      <Route path="/Contactame" element={ <Contacto/> } />
      <Route path="*" element={ <Error404/> } />
   </Routes>  
   </BrowserRouter>





   )
}