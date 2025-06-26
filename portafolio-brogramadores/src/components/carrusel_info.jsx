import React from "react";
import '../Styles/carrusel_info.css'; // Asegúrate de usar el CSS actualizado
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Imagen1 from '../img/Brogramadores.jpg';
import Rafael from '../img/Rafael.jpg';
import Esau from '../img/Esau.jpg';

function CarruselInfo() {
    return(
        <div className="container mt-5">
            <h2 className="text-center mb-4">Conoce a los Brogramadores</h2>
            <div id="miCarrusel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carousel-container">
                    {/* Primera slide - Imagen principal */}
                    <div className="carousel-item active">
                        <div className="carousel-card-container">
                            <div className="custom-card">
                                <div className="card-image-section">
                                    <img 
                                        src={Imagen1} 
                                        className="card-image" 
                                        alt="Brogramadores"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-content-section">
                                    <h5 className="card-title">Brogramadores</h5>
                                    <p className="card-text">
                                        Somos un equipo de desarrolladores apasionados por la tecnología y la programación. 
                                        Nos especializamos en crear soluciones innovadoras y eficientes para diversos proyectos 
                                        utilizando las últimas tecnologías del mercado.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">Equipo de desarrollo</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Segunda slide - Card con imagen de Rafael */}
                    <div className="carousel-item">
                        <div className="carousel-card-container">
                            <div className="custom-card">
                                <div className="card-image-section">
                                    <img 
                                        src={Rafael} 
                                        className="card-image" 
                                        alt="Rafael Martinez Verdin"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-content-section">
                                    <h5 className="card-title">Rafael Martinez Verdin</h5>
                                    <p className="card-text">
                                        Desarrollador Full Stack con experiencia en tecnologías web modernas. 
                                        Especializado en React, Node.js y bases de datos. Apasionado por crear 
                                        interfaces de usuario intuitivas y sistemas escalables.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">Desarrollador Full Stack</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tercera slide - Card con imagen de Esau */}
                    <div className="carousel-item">
                        <div className="carousel-card-container">
                            <div className="custom-card">
                                <div className="card-image-section">
                                    <img 
                                        src={Esau} 
                                        className="card-image" 
                                        alt="Jose Esau Tovar Cruz"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="card-content-section">
                                    <h5 className="card-title">Jose Esau Tovar Cruz</h5>
                                    <p className="card-text">
                                        Desarrollador especializado en frontend y diseño de experiencias de usuario. 
                                        Experto en JavaScript, CSS avanzado y frameworks modernos. Enfocado en 
                                        crear aplicaciones web responsivas y accesibles.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">Desarrollador Frontend</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controles del carrusel */}
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#miCarrusel" 
                    data-bs-slide="prev"
                    aria-label="Slide anterior"
                >
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#miCarrusel" 
                    data-bs-slide="next"
                    aria-label="Siguiente slide"
                >
                    <span className="visually-hidden">Siguiente</span>
                </button>

                {/* Indicadores del carrusel */}
                <div className="carousel-indicators">
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