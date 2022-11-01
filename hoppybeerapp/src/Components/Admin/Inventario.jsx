import React from "react";


export const Inventario = () => {
  return (
    <>
      <div className="container">
        <h2>Inventario</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">DESCRIPCION</th>
              <th scope="col">COSTO</th>
              <th scope="col">VENTA</th>
              <th scope="col">STOCK</th>
              <th scope="col">ACCION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cerveza dorada</td>
              <td>Cerveza artesanal</td>
              <td>$ 4000</td>
              <td>$ 7000</td>
              <td>20</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cerveza negra</td>
              <td>Cerveza artesanal</td>
              <td>$ 4000</td>
              <td>$ 7000</td>
              <td>30</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cerveza roja</td>
              <td>Cerveza artesanal</td>
              <td>$ 4000</td>
              <td>$ 7000</td>
              <td>15</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#agregarproducto"
          >
          Ingresar producto
        </button>
       
      </div>
          
    </>
  );
};
