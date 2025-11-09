import React, { useState } from 'react';
import imgTomas from "../assets/tomas.png";

// Componentes de Layout y UI
import Sidebar from "../componentes/Sidebar";
import Footer from "../componentes/Footer";
import HydraCanvas from '../componentes/HydraCanvas';
import Dropdown from '../componentes/Dropdown'; 
import "../assets/styles/tomas.css"; 
import SkillBars from '../componentes/SkillBars'; // <-- 1. Importar

const Tomas = () => {
  const [dropdownsOpen, setDropdownsOpen] = useState(false);

  // --- 2. Crear el array de habilidades ---
  const habilidadesTomas = [
    { nombre: "Python", nivel: 90 },
    { nombre: "SQL", nivel: 75 },
    { nombre: "Admin. de Sistemas (Linux/Win)", nivel: 85 },
    { nombre: "Diagnóstico Hardware", nivel: 80 },
    { nombre: "Análisis y Visualización de Datos", nivel: 70 },
    { nombre: "Evaluación de Motores de Búsqueda", nivel: 65 },
    { nombre: "Soporte a Sistemas de TI", nivel: 75 },
  ];
  // ----------------------------------------

  const toggleDropdowns = () => {
    setDropdownsOpen(prevState => !prevState);
  };

  return (
    <div className="integrante-container page-container-fade-in">
      <HydraCanvas />
      
      <Sidebar />
      
      <main className="integrante-content">
        
        <section className="hero-section">
          <div className="hero-text">
            <h1>Tomas Julian</h1>
            <p>Ubicación: Ciudad Autónoma de Buenos Aires | Edad: 22</p>
          </div>
          <img src={imgTomas} alt="Avatar Tomas" id="tomas-avatar" />
        </section>

        <section>
          <h2>Sobre mí</h2>
          <p>Soy Tomas Julian Resquin, trabajo en el área de la educación técnica y en el desarrollo de sistemas para la gestión educativa. Estoy aprendiendo y formándome en programación, bases de datos, ciberseguridad y software libre, con el objetivo de integrar estas temáticas en distintos proyectos laborales y personales. Mi meta es seguir creciendo y optimizando mis métodos de trabajo, combinando práctica y tecnología de manera sencilla y útil.</p>
        </section>

        <div className="side-by-side-wrapper">
          <section>
            <h2>Películas Favoritas</h2>
            <ul>
              <li>
                <a href="https://www.imdb.com/es/title/tt0071203/" target="_blank" rel="noopener noreferrer">Belladonna of Sadness</a>
                <p>- Eiichi Yamamoto</p>
              </li>
              <li>
                <a href="https://www.imdb.com/es/title/tt0364569/" target="_blank" rel="noopener noreferrer">Oldboy</a>
                <p>- Park Chan-wook</p>
              </li>
              <li>
                <a href="https://www.imdb.com/es/title/tt0175880/" target="_blank" rel="noopener noreferrer">Magnolia</a>
                <p>- Paul Thomas Anderson</p>
              </li>
            </ul>
          </section>

          <section>
            <h2>Canciones Favoritas</h2>
            <ul>
              <li>
                <a href="https://www.youtube.com/watch?v=32_O-NwzFM0" target="_blank" rel="noopener noreferrer">Symphony No. 9 "From the New World" - IV. Allegro con fuoco</a>
                <p>- Antonin Dvorak</p>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=DYwQy_9JPtQ" target="_blank" rel="noopener noreferrer">Can't Take My Eyes Off You</a>
                <p>- Frankie Valli</p>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=uJ_1HMAGb4k" target="_blank" rel="noopener noreferrer">Riptide</a>
                <p>- Vance Joy</p>
              </li>
            </ul>
          </section>
        </div>

        <section>
          <h2>Proyectos finalizados</h2>
          <ul id="finalized-projects">
            <li>Sistema de acceso web a base de datos educativa.</li>
            <li>Sistema automático de envío de información de materias pendientes.</li>
            <li>Implementación de scripts en App Script para su uso en oficina.</li>
          </ul>
        </section>
        
        <section className="dropdown-section">
          {/* --- 3. Reemplazar la <ul> --- */}
          <Dropdown title="Habilidades" isOpen={dropdownsOpen} onClick={toggleDropdowns}>
            <SkillBars 
              skills={habilidadesTomas} 
              colorFrom="#FFD300" /* Amarillo (default) */
              colorTo="#00AEEF"   /* Celeste (default) */
            />
          </Dropdown>

          <Dropdown title="Idiomas" isOpen={dropdownsOpen} onClick={toggleDropdowns}>
            <ul>
              <li>Español (Nativo)</li>
              <li>Inglés (C1)</li>
              <li>Portugués (B1)</li>
            </ul>
          </Dropdown>

          <Dropdown title="Educación" isOpen={dropdownsOpen} onClick={toggleDropdowns}>
            <ul>
              <li>
                <h4>Licenciatura en Ciberdefensa</h4>
                <p>Universidad de la Defensa Nacional - Argentina</p>
              </li>
              <li>
                <h4>Tecnicatura Superior en Software Libre</h4>
                <p>Universidad Nacional del Litoral - Argentina</p>
              </li>
              <li>
                <h4>Tecnicatura Superior en Desarrollo de Software</h4>
                <p>Instituto de Formación Técnica Superior N° 29 - Argentina</p>
              </li>
            </ul>
          </Dropdown>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Tomas;