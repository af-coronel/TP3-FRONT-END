import "../assets/styles/portada.css";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/Sidebar";
import LectorUsuarios from "../componentes/LectorUsuarios";
import Footer from "../componentes/Footer";

const DatosAPI = () => {

  return (
    <div className="portada-container page-container-fade-in">
      <Sidebar/>
      <div className="main-content">
      <h1 style={{textAlign:"center",marginTop:"50px"}}>Datos de la API Randomuser</h1>
      <LectorUsuarios/>
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
export default DatosAPI