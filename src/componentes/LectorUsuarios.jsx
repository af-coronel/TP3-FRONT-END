import "../assets/styles/tarjetaLibro.css";
import { useState, useEffect } from "react";

const LectorUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- VOLVEMOS A LA LÓGICA ORIGINAL (Y CORRECTA) ---
    // Usamos la URL real de la API, no el archivo local
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => {
        if (!response.ok) {
          // para tener el mensaje de error
          throw new Error("No se pudo obtener la información desde la API");
        }
        // Usamos el .json() original
        return response.json();
      })
      .then((data) => {
        setUsuarios(data.results);
      })
      .catch((error) => {
        // Se guarda el mensaje
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []); // El array vacío asegura que se ejecute solo una vez

  if (error) {
    return (
      <p>
        ⚠️ **Error:** {error.message}
      </p>
    );
  }

  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div className="contenedor-libros">
      {/* Las clases de animación que agregamos se mantienen */}
      {usuarios.map((usuario) => (
        <div key={usuario.login.uuid} className="card-load-animation">
          <div className="tarjeta-libro card-item">
            <img
              src={usuario.picture.large}
              alt={`${usuario.name.first} ${usuario.name.last}`}
            />
            <div>
              <h2>
                {usuario.name.first} {usuario.name.last}
              </h2>
              <p>
                📍 {usuario.location.city}, {usuario.location.state},{" "}
                {usuario.location.country}
              </p>
              <p className="email">📧 {usuario.email}</p>
              <p>📞 {usuario.phone}</p>
              <p>🎂 {usuario.dob.age} años</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LectorUsuarios;