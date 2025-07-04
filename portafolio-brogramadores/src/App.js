import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contactanos from './pages/Contactanos';
import Proyectos from './pages/Proyectos';
import Redes from './pages/Redes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactanos" element={<Contactanos />} /> {/* Nueva ruta */}
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/redes-sociales" element={<Redes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
