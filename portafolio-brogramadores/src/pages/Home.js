import React from 'react';
import Navbar from '../components/navbar';
import CarruselInfo from '../components/Carousel-Info';
import CarouselSkills from '../components/Carousel-Skills';
import Servicios from '../components/Servicios-Bro';
import ProyectosBro from '../components/Proyectos-Bro';
import Footer from '../components/Footer';
import styles from '../Styles/Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.contenedorPrincipal}>
        <header className={styles.headerNavbar}>
          <Navbar/>
        </header>
        
        <section id="inicio" className={styles.seccionCarruselInfo}>
          <CarruselInfo/>
        </section>

        <section id="skills" className={styles.seccionCarouselSkills}>
          <CarouselSkills/>
        </section>
        
        <section id="servicios">
          <Servicios/>
        </section>
        
        <section id="proyectos">
          <ProyectosBro/>
        </section>
        
        <footer id="contacto">
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Home;