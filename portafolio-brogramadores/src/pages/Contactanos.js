import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import styles from '../Styles/Contactanos.module.css';

function Contactanos() {
  return (
    <div className={styles.Contactanos}>
      <div className={styles.contenedorPrincipal}>
        <header className={styles.headerNavbar}>
          <Navbar/>
        </header>
        
        <section id="inicio" className={styles.seccionPrincipal}>
            <h1>¡Contáctanos!</h1>
            <p>Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
        </section>
        
        <footer id="contacto">
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Contactanos;