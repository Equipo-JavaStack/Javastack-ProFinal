import React from "react";
import { Productos } from "./Admin/Productos";
import "./PageNav/page.css";

export const Home = () => {
  return (

  <>
  <div className="container border mt-2 home-producto">

    <Productos/>
    <Productos/>
    <Productos/>
    <Productos/>
    

  </div>
  </>
  )
}
