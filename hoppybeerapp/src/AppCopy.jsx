import './App';

import { Login } from "./Componentes/Login.js";
import { Inventario } from "./Componentes/Inventario.js";
import { Carrito } from "./Componentes/Carrito.js";
import { Inicio } from "./Componentes/Inicio.js";


function App() {
  return (
    <>
      
      <Login/>
      <br></br>
      <Inventario/>
      <br></br>
      <Carrito/>
      <br></br>
      <Inicio/>
      <br></br>
          

    </>


  );
}

export default AppCopy;