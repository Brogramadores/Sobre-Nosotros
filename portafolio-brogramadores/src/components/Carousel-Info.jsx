import React from "react";
import styles from '../Styles/Carrusel-Info.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Imagen1 from '../img/Brogramadores.jpg';
import Rafael from '../img/Rafael.jpg';
import Esau from '../img/Esau.jpg';

function CarruselInfo() {
    return(
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>Conoce a los Brogramadores</h2>
            <div id="miCarrusel" className={`carousel slide ${styles.miCarrusel}`} data-bs-ride="carousel">
                <div className={`carousel-inner ${styles.carouselContainer}`}>
                    {/* Primera slide - Imagen principal */}
                    <div className={`carousel-item active ${styles.carouselItem}`}>
                        <div className={styles.carouselCardContainer}>
                            <div className={styles.customCard}>
                                <div className={styles.cardImageSection}>
                                    <img 
                                        src={Imagen1} 
                                        className={styles.cardImage}
                                        alt="Brogramadores"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.cardContentSection}>
                                    <h5 className={styles.cardTitle}>Brogramadores</h5>
                                    <p className={styles.cardText}>
                                        Somos un equipo de desarrolladores apasionados por la tecnología y la programación. 
                                        Nos especializamos en crear soluciones innovadoras y eficientes para diversos proyectos 
                                        utilizando las últimas tecnologías del mercado.
                                    </p>
                                    <p className={styles.cardText}>
                                        <small className={styles.textMuted}>Equipo de desarrollo</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Segunda slide - Card con imagen de Rafael */}
                    <div className={`carousel-item ${styles.carouselItem}`}>
                        <div className={styles.carouselCardContainer}>
                            <div className={styles.customCard}>
                                <div className={styles.cardImageSection}>
                                    <img 
                                        src={Rafael} 
                                        className={styles.cardImage}
                                        alt="Rafael Martinez Verdin"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.cardContentSection}>
                                    <h5 className={styles.cardTitle}>Rafael Martinez Verdin</h5>
                                    <p className={styles.cardText}>
                                        Desarrollador Full Stack con experiencia en tecnologías web modernas. 
                                        Especializado en React, Node.js y bases de datos. Apasionado por crear 
                                        interfaces de usuario intuitivas y sistemas escalables.
                                    </p>
                                    <p className={styles.cardText}>
                                        <small className={styles.textMuted}>Desarrollador Full Stack</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tercera slide - Card con imagen de Esau */}
                    <div className={`carousel-item ${styles.carouselItem}`}>
                        <div className={styles.carouselCardContainer}>
                            <div className={styles.customCard}>
                                <div className={styles.cardImageSection}>
                                    <img 
                                        src={Esau} 
                                        className={styles.cardImage}
                                        alt="Jose Esau Tovar Cruz"
                                        loading="lazy"
                                    />
                                </div>
                                <div className={styles.cardContentSection}>
                                    <h5 className={styles.cardTitle}>Jose Esau Tovar Cruz</h5>
                                    <p className={styles.cardText}>
                                        Desarrollador especializado en Fullstack y diseño de experiencias de usuario. 
                                        Experto en JavaScript, CSS avanzado y frameworks modernos. Enfocado en 
                                        crear aplicaciones web responsivas y accesibles.
                                    </p>
                                    <p className={styles.cardText}>
                                        <small className={styles.textMuted}>Desarrollador Fullstack</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controles del carrusel */}
                <button 
                    className={`carousel-control-prev ${styles.carouselControlPrev}`}
                    type="button" 
                    data-bs-target="#miCarrusel" 
                    data-bs-slide="prev"
                    aria-label="Slide anterior"
                >
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button 
                    className={`carousel-control-next ${styles.carouselControlNext}`}
                    type="button" 
                    data-bs-target="#miCarrusel" 
                    data-bs-slide="next"
                    aria-label="Siguiente slide"
                >
                    <span className="visually-hidden">Siguiente</span>
                </button>

                {/* Indicadores del carrusel */}
                <div className={`carousel-indicators ${styles.carouselIndicators}`}>
                    <button 
                        type="button" 
                        data-bs-target="#miCarrusel" 
                        data-bs-slide-to="0" 
                        className="active" 
                        aria-current="true" 
                        aria-label="Slide 1"
                    ></button>
                    <button 
                        type="button" 
                        data-bs-target="#miCarrusel" 
                        data-bs-slide-to="1" 
                        aria-label="Slide 2"
                    ></button>
                    <button 
                        type="button" 
                        data-bs-target="#miCarrusel" 
                        data-bs-slide-to="2" 
                        aria-label="Slide 3"
                    ></button>
                </div>
            </div>
        </div>
    );
}

export default CarruselInfo;