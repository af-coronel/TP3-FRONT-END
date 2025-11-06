import React, { useEffect, useState } from "react";
import "../assets/styles/SkillBars.css";

const SkillBars = () => {
  const [animate, setAnimate] = useState(false);

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Trabajo en equipo", level: 85 },
    { name: "Diseño UI", level: 70 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills-container fade-in">
      <h2>Mis habilidades</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: animate ? `${skill.level}%` : "0%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
