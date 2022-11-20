import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Inventario = () => {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://localhost:5000/productosStock")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5" align="center">
      <h2> Lista de productos completos</h2>

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <td>ID </td>
            <td>NOMBRE PRODUCTO </td>
            <td>DESCRIPCION PRODUCTO </td>
            <td>COSTO PRODUCTO</td>
            <td>VENTA PRODUCTO </td>
            <td>STOCK </td>
            <td>IMAGEN </td>
          </tr>
        </thead>
        <tbody>
          {dataProductos.map((Producto) => (
            <tr key={Producto.id}>
              <td>{Producto.id}</td>
              <td>{Producto.nombreProducto}</td>
              <td>{Producto.descripcion}</td>
              <td>{Producto.costo}</td>
              <td>{Producto.venta}</td>
              <td>{Producto.stock}</td>
              <td>{Producto.imagen}</td>

              <td>
                {" "}
                <button>MODIFICAR PRODUCTOS</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
