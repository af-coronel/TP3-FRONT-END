"use client"

import "../assets/styles/tarjetaLibro.css"
import { useState, useEffect, useMemo } from "react"
import TarjetaLibro from "./TarjetaLibro"
import FiltroSelect from "./FiltroSelect"
// import datosLibros from "../../public/data.json";

const LectorLibros = () => {
  //Para la carga del json
  const [libros, setLibros] = useState([])
  const [cargando, setCargando] = useState(true)
  const [datosLibros, setDatosLibros] = useState([])

  //Para hacer el filtrado por cada select
  const [filtroTitulo, setFiltroTitulo] = useState("")
  const [filtroAutor, setFiltroAutor] = useState("")
  const [filtroGenero, setFiltroGenero] = useState("")
  const [filtroAnio, setFiltroAnio] = useState("")
  const [filtroIdioma, setFiltroIdioma] = useState("")

  //Carga del json
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch("/data.json")
        const data = await response.json()
        setDatosLibros(data)
        setLibros(data)
      } catch (error) {
        console.error("Error al cargar los datos de libros:", error)
      } finally {
        setCargando(false)
      }
    }

    cargarDatos()
  }, [])

  //Guardar datos para cada select
  const titulos = useMemo(() => [...new Set(datosLibros.map((l) => l.titulo))], [datosLibros])

  const autores = useMemo(() => [...new Set(datosLibros.map((l) => l.autor))], [datosLibros])

  const generos = useMemo(() => [...new Set(datosLibros.map((l) => l.genero))], [datosLibros])

  const anios = useMemo(() => [...new Set(datosLibros.map((l) => l.año_publicacion))].sort(), [datosLibros])

  const idiomas = useMemo(() => [...new Set(datosLibros.map((l) => l.idioma))], [datosLibros])

  // Filtrar libros
  const librosFiltrados = libros.filter((libro) => {
    return (
      (!filtroTitulo || libro.titulo === filtroTitulo) &&
      (!filtroAutor || libro.autor === filtroAutor) &&
      (!filtroGenero || libro.genero === filtroGenero) &&
      (!filtroAnio || libro.año_publicacion === Number(filtroAnio)) &&
      (!filtroIdioma || libro.idioma === filtroIdioma)
    )
  })

  if (cargando) return <p>Cargando datos de libros...</p>
  if (libros.length === 0) return <p>No se encontraron libros.</p>

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 0px" }}>Catálogo de Libros (Datos JSON)</h1>
      <div className="select-json-container">
        <FiltroSelect
          label="Filtrar por título..."
          opciones={titulos}
          value={filtroTitulo}
          onChange={setFiltroTitulo}
        />
      </div>
      <div className="select-json-container">
        <FiltroSelect label="Filtrar por autor..." opciones={autores} value={filtroAutor} onChange={setFiltroAutor} />
        <FiltroSelect
          label="Filtrar por género..."
          opciones={generos}
          value={filtroGenero}
          onChange={setFiltroGenero}
        />
      </div>

      <div className="select-json-container">
        <FiltroSelect label="Filtrar por año..." opciones={anios} value={filtroAnio} onChange={setFiltroAnio} />
        <FiltroSelect
          label="Filtrar por idioma..."
          opciones={idiomas}
          value={filtroIdioma}
          onChange={setFiltroIdioma}
        />
      </div>
      <div className="contenedor-libros">
        {librosFiltrados.length > 0 ? (
          librosFiltrados.map((libro) => <TarjetaLibro key={libro.id} libro={libro} />)
        ) : (
          <h2 style={{ marginTop: "40px", textAlign: "center", color: "#444" }}>
            No hay libros que se ajusten a los filtros
          </h2>
        )}
      </div>
    </div>
  )
}
export default LectorLibros
