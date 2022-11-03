import React from "react";
import image from "../../Resource/hoppybeer.png";
import { Admin } from "../Admin/Admin";
import { LogIn } from "../Login/LogIn";

import "../Navbar/Nav.css";

export const NavbarRegister = () => {
  return (
    <>
      <div className="navregistro container border shadow-sm mb-2 p-3">
        <img className="logo" src={image} alt="logo" />

        {/* ------------BOTON BUSCAR PRODUCTO----------- */}
        <form class="d-flex">
        <input class="form-control input-buscar" type="search" placeholder="Busta tu producto" aria-label="Search"/>
        <button class="btn btn-primary btnbuscar" type="submit">Buscar</button>
      </form>

        <div className="linkadmin">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>

          {/* <!-- Button trigger modal --> */}
          <button
            className="log-in"
            data-bs-toggle="modal"
            data-bs-target="#loginmodal"
          >
            | Login |
          </button>
        </div>
        <LogIn />
      </div>
      <Admin />
    </>
  );
};
