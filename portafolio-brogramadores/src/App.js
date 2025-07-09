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
          {/* Ruta principal - muestra Home directamente */}
          <Route path="/" element={<Home />} />
          
          {/* Rutas secundarias */}
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/redes-sociales" element={<Redes />} />
          
          {/* Fallback para rutas no encontradas (404) - redirige a Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;