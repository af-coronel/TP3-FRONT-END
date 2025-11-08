import React, { useEffect, useState } from "react";
import "../assets/styles/SkillBars.css";

function SkillBars({
  skills = [],
  colorFrom = "#FFD300", // amarillo
  colorTo = "#00AEEF",   // celeste
  showPercent = true,
}) {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">{skill.nombre}</div>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{
                width: `${skill.nivel}%`,
                background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
              }}
            />
            {showPercent && <span className="skill-percent">{skill.nivel}%</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
