import { useState } from "react"

const MostrarOcultar = ({titulo,children,botonClassName = "boton-agregar-bitacora",widthClassName = "width-boton"}) => {

  const [isVisible, setIsVisible] = useState(true);

    const visibleONo = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div>
        <h2 style={{textAlign:"center", fontSize:"1.05rem",marginTop:"40px"}}>{titulo}</h2>
        {/* Ver el contenido */}
        {isVisible && (
          <div>
            {children}
          </div>
         )}
        <button onClick={visibleONo} className={`${botonClassName} ${widthClassName} btn-proyecto`}>
          {isVisible ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

    </div>
  )
}
export default MostrarOcultar