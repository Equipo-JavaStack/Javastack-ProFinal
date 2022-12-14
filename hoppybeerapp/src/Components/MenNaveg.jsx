import React from "react";
import  {Link}  from "react-router-dom";

export const MenNaveg =() => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Inventario"}>Inventario</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Carrito"}>Carrito</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Inicio"}>Inicio</Link>
              
            </li>
            
          </ul>
        
      </div>
    </nav>
  );
};