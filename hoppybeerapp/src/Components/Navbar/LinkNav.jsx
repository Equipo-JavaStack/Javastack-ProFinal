import React from "react";
import { NavLink } from "react-router-dom";
import '../Navbar/Nav.css'

export const LinkNav = () => {
  return (
    <>
      
        <div className="nav container justify-content-center position-relative bg-dark p-3 text-bg-red">
          
          <NavLink className="link" to={"/"}>Inicio</NavLink>
          <NavLink className="link" to={"/Historia"}>Historia</NavLink>
          <NavLink className="link" to={"/QuienesSomos"}>Quienes somos</NavLink>
          <NavLink className="link" to={"/Contactame"}>Contacto</NavLink>

           
          {/* ------------BOTON CARRITO CON IMAGEN------------- */}
          <button
            className="link-botton navbar-toggler bi-cart3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <svg
              // xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>

          {/* ------------MENU LATERAL--------------- */}
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Carrito de compras
              </h5>
              {/* ------------BOTON CERRAR CON IMAGEN------------- */}
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      
    </>
  );
};
