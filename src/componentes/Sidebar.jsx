import { useState } from "react";
import { Link } from "react-router-dom";
import icono from "../assets/favicon.ico";
import "../assets/styles/sidebar.css";

const Sidebar = () => {
  // Estado para abrir/cerrar el submenú de Integrantes
  const [mostrarIntegrantes, setMostrarIntegrantes] = useState(false);

  // Controla menú hamburguesa
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const toggleIntegrantes = () => {
    setMostrarIntegrantes(!mostrarIntegrantes);
  };

  const toggleSidebar = () => setSidebarAbierto(!sidebarAbierto);

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar ${sidebarAbierto ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            src={icono}
            alt="Icono del grupo"
            className="sidebar-icon"
          />
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">Portada</Link>
          </li>
          <li>
            <Link to="/paginas/bitacora">Bitacora</Link>
          </li>
          <li>
            <Link to="/paginas/datosarchivosjson">Datos JSON</Link>
          </li>
          <li>
            <Link to="/paginas/datosapi">Datos API</Link>
          </li>
          <li>
            <Link to="/paginas/arbolrenderizado">Árbol de Renderizado</Link>
          </li>
          <li>
            <Link to="/paginas/diagramacarpetas">Diagrama de carpetas</Link>
          </li>
          <li>
            <button className="submenu-toggle" onClick={toggleIntegrantes}>
              {mostrarIntegrantes ? "▼ Integrantes" : "► Integrantes"}
            </button>
          
          {mostrarIntegrantes && (
            <ul
              className="submenu"
            >
              <li>
                <Link to="/integrantes/ana">Ana</Link>
              </li>
              <li>
                <Link to="/integrantes/virginia">Virginia</Link>
              </li>
              <li>
                <Link to="/integrantes/tomas">Tomás</Link>
              </li>
              <li>
                <Link to="/integrantes/jessica">Jessica</Link>
              </li>
              <li>
                <Link to="/integrantes/alvaro">Álvaro</Link>
              </li>
            </ul>
          )}
          </li>
        </ul>
              {/* --- Botones de las redes sociales --- */}
      <div className="sidebar-social">
        <a
          href="https://github.com/af-coronel/TP3-FRONT-END"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="social-btn"
          title="GitHub"
        >
          {/* GitHub */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2
            c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73
            1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.49-1.34-5.49-5.96
            0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.43 11.43 0 0 1 6 0
            c2.29-1.56 3.3-1.24 3.3-1.24.66 1.64.24 2.86.12 3.16.77.85 1.24 1.93 1.24 3.25
            0 4.63-2.82 5.65-5.5 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/TP3-FRONT-END"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="social-btn"
          title="LinkedIn"
        >
          {/* LinkedIn */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.05
            c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.8 2.67 4.8 6.14V21h-4v-5.3c0-1.27-.02-2.9-1.76-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/TP3-FRONT-END"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="social-btn"
          title="Instagram"
        >
          {/* Instagram */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10
            a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2
            a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 9.5zm5.25-2.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
          </svg>
        </a>

        <a
          href="https://x.com/TP3-FRONT-END"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="social-btn"
          title="X (Twitter)"
        >
          {/* X */}
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M18.9 2H22l-7.7 8.8L23.5 22H16l-5-6.6L5 22H1.9l8.5-9.7L.5 2H8l4.6 6L18.9 2zM16.7 20h1.7L7.3 4H5.6z"/>
          </svg>
        </a>
      </div>

      </nav>
    </>
  );
};
export default Sidebar;
