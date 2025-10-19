import "../assets/styles/portada.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import imgArbol from "../assets/arbol_renderizado_react.drawio.png"
import Footer from "../componentes/Footer";

const ArbolRenderizado = () => {

  return (
    <div className="portada-container">
      <Sidebar/>
      <div className="main-content">
      <h1 style={{textAlign:"center"}}>Árbol de Renderizado</h1>
      <img src={imgArbol} alt="árbol de renderización" className="arbol"/>
      <Footer> 
        <p>
          © 2025 Equipo Retro Front End Grupo 12 —{" "}
          <Link to="/paginas/bitacora">Bitacora</Link> 
        </p>
        <p>Insert Coin 💾</p>
      </Footer>
      </div>
    </div>
  )
}
export default ArbolRenderizado