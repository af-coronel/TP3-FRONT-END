import "../assets/styles/portada.css"
import { Link } from "react-router-dom"
import Sidebar from "../componentes/Sidebar"
import HeaderPortadaBitacora from "../componentes/HeaderPortadaBitacora"
import AgregarBitacora from "../componentes/AgregarBitacora"
import Footer from "../componentes/Footer"

const Bitacora = () => {
  const bitacoraItems = [
    "Definimos usar el esquema principal para todas las páginas, aunque podemos hacer cambios. Esto fue lo que nos llevó un poco de tiempo decidir.",
    "Google Fonts generales: Inter, Press Start 2P y Poppins.",
    "Uso de variables en CSS para colores.",
    "Uso de hover, transform, linear gradient, box-shadow, etc.",
    "Componentes reutilizables con y sin props, también el uso de children",
    "Uso de useState, useEffect, useCallback, useRef y useMemo",
    "Utilización de React Router",
    "Funcionalidades de React como filtro por integrantes, filtros para los datos del JSON, agregado de lista, alert, etc.",
    "Se agregó ícono de toda la página.",
    "En la página Datos JSON (sobre libros) se implementaron 5 select(dropdown) para realizar filtros por título, autor, género, año de publicación e idioma. Se pueden unir diferentes filtros, por ejemplo: género con idioma. Si no hay coincidencias saldrá un h2 mostrando 'No hay libros que se ajusten a los filtros'.",
    "Se agregó una barra de habilidades para mejorar la presentación visual y mostrar el nivel de dominio en diferentes tecnologías.",
    "Agregamos sección con link al repositorio de GitHub.",
    "Implementación del diagrama para mostrar las estructura de carpetas.",
    "Diagrama de la estructura React.",
    "Implementación del proyecto en Vercel importando el repositorio de GitHub.",
<<<<<<< HEAD
    "Se agregaron botones de redes sociales al pie del sidebar azul, con animación al hover que es un cambio de fondo a un degradado con los colores del ícono del sitio. ",
=======
    "Mejora 3 (Animaciones): Se implementaron transiciones (`transition`) y animaciones (`@keyframes`) con CSS puro para efectos hover y carga de elementos (tarjetas, botones, páginas).",
    "Corrección de bugs: Se solucionaron errores de layout (CSS `body` y `flex-wrap`), renderizado de Hydra (HiDPI `devicePixelRatio`) y `fetch` de la API (error `JSON.parse`)."
>>>>>>> 4a86438a63ab05f1cb606a059abefe7326baf2ed
  ]

  return (
    <div className="portada-container page-container-fade-in">
      <Sidebar />
      <div className="main-content">
        <div className="content-sections">
          <div className="header-portada-bitacora">
            <HeaderPortadaBitacora titulo="Bitácora" />
            <AgregarBitacora itemsIniciales={bitacoraItems} />
          </div>
          <Footer>
            <p>
              © 2025 Equipo Retro Front End Grupo 12 —
              <Link to="/integrantes/tomas" className="footer-integrantes">
                Tomás
              </Link>{" "}
              -
              <Link to="/integrantes/virginia" className="footer-integrantes">
                Virginia
              </Link>{" "}
              -
              <Link to="/integrantes/jessica" className="footer-integrantes">
                Jessica
              </Link>{" "}
              -
              <Link to="/integrantes/alvaro" className="footer-integrantes">
                Álvaro
              </Link>{" "}
              -
              <Link to="/integrantes/ana" className="footer-integrantes">
                Ana
              </Link>
            </p>
            <p>Insert Coin 💾</p>
          </Footer>
        </div>
      </div>
    </div>
  )
}
<<<<<<< HEAD
export default Bitacora
=======
export default Bitacora
>>>>>>> 4a86438a63ab05f1cb606a059abefe7326baf2ed
