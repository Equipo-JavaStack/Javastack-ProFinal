import React from 'react'
import "../Admin/admin.css";
import cerveza from '../../Resource/cervezadorada.jpg';

export const Productos = () => {
  return (
    <div className="target-cerveza">
        <div className='contenido'>
        <p>CERVEZA DORADA</p>
        <img className='imgcerveza' src={cerveza} alt="" />

        <div className="botones-pedido">
            <button className='suma'>+</button>
            <input className='inputsumaresta' type="text" />
            <button className='resta'>-</button>
        </div>




        </div>

    </div>
  )
}
