import React from "react";

export const AgregarInventario = () => {
  return (
    <>
     <div
        // class="modal fade formlogin"
        // id="agregarproducto"
        // data-bs-backdrop="static"
        // data-bs-keyboard="false"
        // tabindex="-1"
        // aria-labelledby="staticBackdropLabel"
        // aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Agregar Producto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* ------------------FORM-------------------- */}
            <div className="modal-body">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                ></input>

                <label for="exampleFormControlInput1" className="form-label">
                  Descripcion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                ></input>

                <label for="exampleFormControlInput1" className="form-label">
                  Costo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                ></input>

                <label for="exampleFormControlInput1" className="form-label">
                  Venta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                ></input>

                <label for="exampleFormControlInput1" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                ></input>
              </div>
              {/* ----------------------------------------------- */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>

              <button type="button" className="btn btn-success">
                Agregar producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
