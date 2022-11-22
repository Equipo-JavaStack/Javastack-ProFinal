import "../../Style/target-product.css";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
// import cerveza from '../../Resource/cervezadorada.jpg';

export const Productos = () => {
  const [dataProductos, setDataProductos] = useState([
    
  ]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://localhost:5000/productos")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProductos(resp);
      })
      .catch((err) => console.log(err));
  }
  //LO QUE SE PINTA EN EL COMPONENTE
  return (
    <div className="container mt-5">
      <h2 align="center"> Lista de productos completos</h2>

      <div className="target">
        {dataProductos.map((Producto) => (
          <div className="target-product">
            <p className="description">{Producto.nombreProducto}</p>
            <img src={Producto.imagen} alt="imaggen"></img>
            <div className="body-target">{Producto.costo}</div>

            <button className="btn btn-primary boton-comprar" onClick={agregarCompra}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};


function agregarCompra(){
  const datosJSON = JSON.stringify(dataProductos)       
    

  fetch("http://localhost:5000/solicitudCompra", {
      method: "POST",
      body: datosJSON,
      headers: {
          "Content-Type": "application/json",
      },

  })
}