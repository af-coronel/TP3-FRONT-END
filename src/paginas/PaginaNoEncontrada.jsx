import { Link } from "react-router-dom";

const PaginaNoEncontrada = () => {
  return (
    <div style={{
    textAlign: "center",
    padding: "50px",
    fontFamily: "Inter, sans-serif",
  }}
    className="page-container-fade-in"
  >
      <h1 style={{
    fontSize: "2rem",
    color: "#ef4444",
  }}>404 - Página no encontrada</h1>
      <p style={ {
    color: "#475569",
    margin: "20px 0",
  }}>
        Lo sentimos, la página que buscás no existe o fue movida.
      </p>
      <Link to="/" style={ {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "bold",
  }}>
        Volver a la página principal
      </Link>
    </div>
  );
};

export default  PaginaNoEncontrada;