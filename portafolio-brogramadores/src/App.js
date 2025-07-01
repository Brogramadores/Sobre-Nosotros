import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CarruselInfo from './components/Carousel-Info';
import CarouselSkills from './components/Carousel-Skills';
import Servicios from './components/Servicios-Bro';
import ProyectosBro from './components/Proyectos-Bro';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <header className='header-navbar'>
          <Navbar/>
        </header>
        
        <section className="seccion-CarruselInfo">
          <CarruselInfo/>
        </section>

        <section className='seccion-CarouselSkills'>
          <CarouselSkills/>
        </section>
        
        <Servicios/>
        <ProyectosBro/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;