import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portada from "./paginas/Portada";
import Bitacora from "./paginas/Bitacora";
import DatosArchivoJSON from "./paginas/DatosArchivoJSON";
import DatosAPI from "./paginas/DatosAPI";
import ArbolRenderizado from "./paginas/ArbolRenderizado";
import DiagramaCarpetas from "./paginas/DiagramaCarpetas";
import Ana from "./integrantes/Ana";
import Virginia from "./integrantes/Virginia";
import Tomas from "./integrantes/Tomas";
import Jessica from "./integrantes/Jessica";
import Alvaro from "./integrantes/Alvaro";
import PaginaNoEncontrada from "./paginas/PaginaNoEncontrada";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/paginas/bitacora" element={<Bitacora />} />
        <Route
          path="/paginas/datosarchivosjson"
          element={<DatosArchivoJSON />}
        />
        <Route path="/paginas/datosapi" element={<DatosAPI />} />
        <Route
          path="/paginas/arbolrenderizado"
          element={<ArbolRenderizado />}
        />
        <Route
          path="/paginas/diagramacarpetas"
          element={<DiagramaCarpetas />}
        />
        {/* Aca debería decir integrantes y abrir otro menú con cada integrante */}
        <Route path="/integrantes/ana" element={<Ana />} />
        <Route path="/integrantes/virginia" element={<Virginia />} />
        <Route path="/integrantes/tomas" element={<Tomas />} />
        <Route path="/integrantes/jessica" element={<Jessica />} />
        <Route path="/integrantes/alvaro" element={<Alvaro />} />

         <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </Router>
  );
}

export default App;
