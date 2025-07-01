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
        
        <section className='seccion-navbar'>
          <Navbar/>
        </section>
        
        <section className="seccion-CarruselInfo">
          <CarruselInfo />
        </section>

        <section className='seccion-CarouselSkills'>
          <CarouselSkills />
        </section>

        <section className='seccion-Servicios'>
          <Servicios />
        </section>

        <section className='seccion-Proyectos'>
          <ProyectosBro/>  
        </section>
        
        
        <Footer />
        


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;