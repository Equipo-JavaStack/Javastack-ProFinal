import React, { Fragment } from "react";
// import { Inventario } from "./Inventario";
// import {Carrito} from './Carrito';
// import {  Router, Route } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className="container bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="replace"
            alt=""
          >
            Active
          </a>
        </li>
        <li className="nav-item">

            <>
      
            </>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="replace" alt="">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="replace" alt="">
            Disabled
          </a>
        </li>
      </ul>
      </div>
    </>
  );
};
