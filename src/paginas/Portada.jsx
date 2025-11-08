"use client"

import imagen from "../assets/icon-github.png"
import alvaroImg from "../assets/alvaro.png"
import anaImg from "../assets/ana.PNG"
import jessicaImg from "../assets/jessica.png"
import tomasImg from "../assets/tomas.png"
import virginiaImg from "../assets/vir.png"
import "../assets/styles/portada.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../componentes/Sidebar"
import HeaderPortadaBitacora from "../componentes/HeaderPortadaBitacora"
import TarjetaIntegrante from "../componentes/TarjetaIntegrante"
import Footer from "../componentes/Footer"

const Portada = () => {
  const portadaItems = [
    "Navegación clara con Sidebar (Portada / Bitácora / Datos JSON / Datos API / Árbol de renderizado / Diagrama de Carpetas / Integrantes (Ana/ Virginia/ Tomás/ Jessica/ Álvaro)).",
    "Diseño responsive con breakpoints en 400px, 900px y 1200px.",
    "Portada en Portada.jsx, carpeta integrantes donde hablamos de cada uno, carpeta componentes donde se encuentran componentes reutilizables y carpeta paginas donde se encuentran todos los jsx que aparecen en el Sidebar.",
    "Sección Bitácora con decisiones, dificultades y cambios.",
    "Sección Datos JSON donde se muestran los datos de un archivo JSON que trata sobre libros.",
    "Sección Datos API donde se muestran los datos de la API pública Randomuser.",
    "Tipografías de Google Fonts y estilos consistentes.",
  ]

  // Estado del filtro
  const [filtro, setFiltro] = useState("")

  // Normaliza texto (quita tildes y pasa a minúscula)
  const normalizar = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()

  const integrantes = [
    { nombre: "Álvaro", imagen: alvaroImg, ruta: "/integrantes/alvaro" },
    { nombre: "Ana", imagen: anaImg, ruta: "/integrantes/ana" },
    { nombre: "Jessica", imagen: jessicaImg, ruta: "/integrantes/jessica" },
    { nombre: "Tomás", imagen: tomasImg, ruta: "/integrantes/tomas" },
    { nombre: "Virginia", imagen: virginiaImg, ruta: "/integrantes/virginia" },
  ]

  const filtrados = integrantes.filter((integrante) => normalizar(integrante.nombre).startsWith(normalizar(filtro)))

  return (
    <div className="portada-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-sections">
          <div className="header-portada-bitacora">
            <HeaderPortadaBitacora
              titulo="Proyecto Web - Grupo 12 🎮"
              subtitulo="Características principales"
              descripcion="Somos el grupo 12, Virginia, Álvaro, Jessica, Tomás y Ana. Nuestro sitio trata de plasmar de una forma 'retro' nuestras habilidades sobre React, intentando usar las mejores prácticas sobre esta librería, creando una portada con un menú lateral hacia todas las páginas."
              items={portadaItems}
            />
          </div>

          <section className="github-section">
            <h2>GitHub</h2>
            Ver proyecto/repositorio{" "}
            <a href="https://github.com/Ana-Galvez/TP2-FRONT-END" target="_blank" rel="noreferrer">
              <img src={imagen || "/placeholder.svg"} width="30" />
            </a>
          </section>

          <section className="integrantes-section">
            <h2>Integrantes</h2>

            <div>
              <input
                type="search"
                placeholder="Filtrar integrantes…"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="filtro-input"
              />
            </div>

            <div className="team" style={{ display: "flex", gap: "2px" }}>
              {filtrados.map((integrante) => (
                <TarjetaIntegrante key={integrante.nombre} {...integrante} />
              ))}

              {filtrados.length === 0 && <p style={{ marginTop: "10px" }}>No se encontraron integrantes.</p>}
            </div>
          </section>
          <Footer>
            <p>
              © 2025 Equipo Retro Front End Grupo 12 — <Link to="/paginas/bitacora">Bitacora</Link>
            </p>
            <p>Insert Coin 💾</p>
          </Footer>
        </div>
      </div>
    </div>
  )
}
export default Portada
