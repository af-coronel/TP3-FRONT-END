import "../assets/styles/portada.css";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import LectorLibros from "../componentes/LectorLibros";
import Footer from "../componentes/Footer";

const DatosArchivoJSON = () => {

  return (
    <div className="portada-container">
      <Sidebar/>
      <div className="main-content">
      <LectorLibros/>
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
export default DatosArchivoJSON