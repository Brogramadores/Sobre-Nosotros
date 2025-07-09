import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contactanos from './pages/Contactanos';
import Proyectos from './pages/Proyectos';
import Redes from './pages/Redes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal - redirige a Sobre-Nosotros */}
          <Route path="/" element={<Navigate to="/Sobre-Nosotros" replace />} />
          
          {/* Ruta Sobre-Nosotros que muestra Home */}
          <Route path="/Sobre-Nosotros" element={<Home />} />
          
          {/* Rutas secundarias */}
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/redes-sociales" element={<Redes />} />
          
          {/* Fallback para rutas no encontradas (404) - redirige a Sobre-Nosotros */}
          <Route path="*" element={<Navigate to="/Sobre-Nosotros" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;