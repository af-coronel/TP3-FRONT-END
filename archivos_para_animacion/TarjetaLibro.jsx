import "../assets/styles/tarjetaLibro.css";
const TarjetaLibro = ({libro}) => {

  const { titulo, autor, genero, año_publicacion, paginas, idioma } = libro;


  return (
     <div className="tarjeta-libro">
      <p>📚 {titulo}</p>
      <p>
        <strong>Autor:</strong> {autor}
      </p>
      <p>
        <strong>Género:</strong> {genero}
      </p>
      <p>
        <strong>Publicación:</strong> {año_publicacion}
      </p>
      <p>
        <strong>Páginas:</strong> {paginas}
      </p>
      <p>
        <strong>Idioma:</strong> {idioma}
      </p>
    </div>
  )
}
export default TarjetaLibro