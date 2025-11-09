import { useState, useEffect, useCallback } from "react";

const AgregarBitacora = ({ itemsIniciales }) => {
  const STORAGE_KEY = "bitacora-items";

  // Cargar los datos desde localStorage al iniciar
  const [items, setItems] = useState(() => {
    const guardados = localStorage.getItem(STORAGE_KEY);
    return guardados ? JSON.parse(guardados) : itemsIniciales;
  });

  const [nuevoItem, setNuevoItem] = useState("");

  // Guardar automáticamente cada vez que cambie la lista
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleAgregar = () => {
    const texto = nuevoItem.trim();
    if (texto === "") return;
    setItems([...items, texto]);
    setNuevoItem("");
  };

  const handleBorrar = useCallback((index) => {
    const nuevaLista = items.filter((_, i) => i !== index);
    setItems(nuevaLista);
  });

  return (
    <>
      <ul className="lista-portada">
        {items.map((item, index) => (
          <li key={index} style={{ borderLeft:"4px solid #2196f3",borderRadius:"6px",transition:"background 0.3s ease, transform 0.2s ease",lineHeight:"1.65", padding:"5px 10px" }}>
            {item}
            <button
              className="social-btn" /* Clase para hover de ícono */
              onClick={() => handleBorrar(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={nuevoItem}
          onChange={(e) => setNuevoItem(e.target.value)}
          placeholder="Escribí una nueva entrada..."
          className="filtro-input"
        />
        <button className="boton-agregar-bitacora btn-proyecto" onClick={handleAgregar}>
          Agregar
        </button>
      </div>
    </>
  );
};

export default AgregarBitacora;