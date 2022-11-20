import React from 'react'
import "../Admin/admin.css";
import { useEffect } from "react";
import { useState } from "react";
// import cerveza from '../../Resource/cervezadorada.jpg';

export const productos = () => {
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
    <div>

      {dataProductos.map((producto)=>(
          <p>key={producto.}</p>
          

      ))}
    </div>

  )
    }
