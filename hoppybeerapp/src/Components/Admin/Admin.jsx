import React from "react";
import { Inventario } from "./Inventario";
import logohb from "../../Resource/hoppybeer.png";
import { AgregarInventario } from "./AgregarInventario";
import "../Admin/admin.css";

import "../Admin/admin.css";

export const Admin = () => {
  return (
    <>
      <div
        class="modal modal-xl modal-fullscreen"
        id="modaladmin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog content-admin">
          <div class="modal-content">
            <div class="modal-header">
              <img className="logohb" src={logohb} alt="" />
              <h5 class="modal-title fs-3" id="staticBackdropLabel">
                Administrador del sistema
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="comandosnav">
              <hr />
              <div className="agre-inv ">
                <div className="row">
                  <div class="modal-body col-sm-9">
                    <div className="row">

                    <div className="contenidoamin col-md-8">
                      <Inventario />
                    </div>
                    <div className="agrega-inv col-md-4 ms-auto">
                      <AgregarInventario />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
