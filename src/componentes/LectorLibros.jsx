import "../assets/styles/tarjetaLibro.css";
import { useState, useEffect, useMemo } from "react";
import TarjetaLibro from "./TarjetaLibro";
import datosLibros from "../../public/data.json";

const LectorLibros = () => {

  //Para la carga del json
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);

  //Para hacer el filtrado por cada select
  const [filtroTitulo, setFiltroTitulo] = useState("");
  const [filtroAutor, setFiltroAutor] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [filtroIdioma, setFiltroIdioma] = useState("");

  //Carga del json
  useEffect(() => {
    try {
      setLibros(datosLibros);
    } catch (error) {
      console.error("Error al cargar los datos de libros:", error);
    } finally {
    setCargando(false);
    }
  }, []);

  //Guardar datos para cada select
  const titulos = useMemo(
    () => [...new Set(datosLibros.map((l) => l.titulo))],
    []
  );

  const autores = useMemo(
    () => [...new Set(datosLibros.map((l) => l.autor))],
    []
  );

  const generos = useMemo(
    () => [...new Set(datosLibros.map((l) => l.genero))],
    []
  );

  const anios = useMemo(
    () => [...new Set(datosLibros.map((l) => l.año_publicacion))].sort(),
    []
  );

  const idiomas = useMemo(
    () => [...new Set(datosLibros.map((l) => l.idioma))],
    []
  );

  // Filtrar libros
  const librosFiltrados = libros.filter((libro) => {
    return (
      (!filtroTitulo || libro.titulo === filtroTitulo) &&
      (!filtroAutor || libro.autor === filtroAutor) &&
      (!filtroGenero || libro.genero === filtroGenero) &&
      (!filtroAnio || libro.año_publicacion === Number(filtroAnio)) &&
      (!filtroIdioma || libro.idioma === filtroIdioma)
    );
  });

  if (cargando) return <p>Cargando datos de libros...</p>;
  if (libros.length === 0) return <p>No se encontraron libros.</p>;

  return (
    <div>
      <h1 style={{textAlign:"center",margin:"50px 0px"}}>Catálogo de Libros (Datos JSON)</h1>
            <div className="select-json-container">
        <select
          className="filtro-select-json"
          onChange={(e) => setFiltroTitulo(e.target.value)}
        >
          <option value="">Filtrar por título...</option>
          {titulos.map((titulo) => (
            <option key={titulo} value={titulo}>{titulo}</option>
          ))}
        </select>
      </div>
      <div className="select-json-container">
        <select
          className="filtro-select-json"
          onChange={(e) => setFiltroAutor(e.target.value)}
        >
          <option value="">Filtrar por autor...</option>
          {autores.map((autor) => (
            <option key={autor} value={autor}>{autor}</option>
          ))}
        </select>
        <select
          className="filtro-select-json"
          onChange={(e) => setFiltroGenero(e.target.value)}
        >
          <option value="">Filtrar por género...</option>
          {generos.map((genero) => (
            <option key={genero} value={genero}>{genero}</option>
          ))}
        </select>
      </div>
      <div className="select-json-container">
        <select
          className="filtro-select-json"
          onChange={(e) => setFiltroAnio(e.target.value)}
        >
          <option value="">Filtrar por año de publicación...</option>
          {anios.map((anio) => (
            <option key={anio} value={anio}>{anio}</option>
          ))}
        </select>
        <select
          className="filtro-select-json"
          onChange={(e) => setFiltroIdioma(e.target.value)}
        >
          <option value="">Filtrar por idioma...</option>
          {idiomas.map((idioma) => (
            <option key={idioma} value={idioma}>{idioma}</option>
          ))}
        </select>
      </div>
      <div className="contenedor-libros">
        {librosFiltrados.length > 0 ? (
          librosFiltrados.map((libro) => (
          <TarjetaLibro key={libro.id} libro={libro}/>
        ))
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