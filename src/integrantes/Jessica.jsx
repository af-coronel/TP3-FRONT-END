import "../assets/styles/portada.css";
import { useState } from "react";
import Sidebar from "../componentes/Sidebar";
import HeaderIntegrantes from "../componentes/HeaderIntegrantes";
import SobreMi from "../componentes/SobreMi";
import MostrarOcultar from "../componentes/MostrarOcultar";
import Footer from "../componentes/Footer";
import imgJessica from "../assets/jessica.png";
import "../assets/styles/jessica.css";
import SkillBars from "../componentes/SkillBars";


const Jessica = () => {
  const [quote, setQuote] = useState("");

  const quotes = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti y todo será posible.",
    "La disciplina es el puente entre metas y logros.",
    "Cada día es una nueva oportunidad para crecer.",
    "Haz hoy lo que tu futuro yo te agradecerá."
  ];

  {/* arrglo de las habilidades */ }
  const habilidadesJessica = [
    { nombre: "HTML", nivel: 95 },
    { nombre: "CSS", nivel: 90 },
    { nombre: "JavaScript", nivel: 80 },
    { nombre: "Trabajo en equipo", nivel: 85 },
    { nombre: "Diseño UI", nivel: 70 },
  ];

  const newQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    /* --- MODIFICACIÓN AQUÍ (Página) --- */
    <div className="portada-container body page-container-fade-in">
      <Sidebar />
      <div className="main-content">
        <HeaderIntegrantes>
          <div className="hero">
            <img src={imgJessica} alt="Jessica" className="avatar" />
            <h1>Jessica Oleszuk</h1>
            <p className="info" style={{ fontFamily: "'Poppins', sans-serif" }}>Ubicación: Tucumán | Edad: 38 años</p>
          </div>
        </HeaderIntegrantes>
        <span style={{ marginTop: "30px" }}></span>
        <SobreMi
          titulo="Sobre mí"
          descripcion="Soy estudiante de la Tecnicatura en desarrollo de Software, con interés en diseño frontend y experiencia de usuario. Me encanta aprender nuevas tecnologías y trabajar en equipo, aprendo mucho de mis compañeros tambíen."
        />

        {/* Frases motivacionales */}
        <div >
          <h2>Te dejo una frase de regalo</h2>
          <div className="quote">{quote || "Presioná el botón para ver una frase motivacional"}</div>
          <button className="btn btn-proyecto" onClick={newQuote}>Nueva frase</button>
        </div>

        <MostrarOcultar titulo="Habilidades" botonClassName="btn">
          <ul>
            <li className="quote">HTML</li>
            <li className="quote">CSS</li>
            <li className="quote">JavaScript</li>
            <li className="quote">Trabajo en equipo</li>
          </ul>
        </MostrarOcultar>

        <MostrarOcultar titulo="Películas favoritas" botonClassName="btn">
          <ul>
            <li className="quote">Titanic</li>
            <li className="quote">En busca de la felicidad</li>
            <li className="quote">Diario de una pasión</li>
          </ul>
        </MostrarOcultar>

        <MostrarOcultar titulo="Música / Discos favoritos" botonClassName="btn">
          <ul>
            <li className="quote">Miranda</li>
            <li className="quote">Tan Bionica</li>
            <li className="quote">Maria Becerra</li>
          </ul>
        </MostrarOcultar>

        {/* <SkillBars /> */}
         <h2 className="titulo-habilidades">Mis habilidades</h2>
        <SkillBars
          skills={habilidadesJessica}
          colorFrom="#7A4AFF"   // violeta saturado
          colorTo="#C1A4FF"     // lila claro
        />

        <Footer>
          <p>© 2025 Equipo Retro Front End Grupo 12</p>
        </Footer>
      </div>
    </div>
  );
};

export default Jessica;