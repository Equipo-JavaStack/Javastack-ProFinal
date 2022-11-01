import React from "react";
import { Inventario } from "./Inventario";
import { AgregarInventaro } from "./AgregarInventaro";
import logohb from '../../Resource/hoppybeer.png';
import '../Admin/admin.css';

export const Admin = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

      {/* <!-- Moda --> */}
      <div
        class="modal dialog modal-xl"
        id="modaladmin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <img className="logohb" src={logohb} alt="logo" />
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Administrador del sistema
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
            <Inventario/>
                 
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button 
              type="button" 
              class="btn btn-primary"
                data-bs-dismiss="modal">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      <AgregarInventaro/>
    </>
  );
};
