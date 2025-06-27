import React, { useEffect, useState } from "react";
import styles from '../Styles/Carrusel-Info.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Imagen1 from '../img/Brogramadores.jpg';
import Rafael from '../img/Rafael.jpg';
import Esau from '../img/Esau.jpg';

function CarruselInfo() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Datos del equipo
    const teamData = [
        {
            id: 'team',
            image: Imagen1,
            title: 'Brogramadores',
            description: 'Somos un equipo innovador de desarrolladores comprometidos con la excelencia tecnológica. Creamos experiencias digitales extraordinarias que transforman ideas en realidades funcionales, utilizando las tecnologías más avanzadas y metodologías ágiles.',
            subtitle: 'Equipo de Desarrollo',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 'rafael',
            image: Rafael,
            title: 'Rafael Martinez Verdin',
            description: 'Arquitecto de soluciones digitales con dominio en el ecosistema completo de desarrollo. Especialista en React, Node.js, arquitecturas de microservicios y optimización de rendimiento. Líder técnico apasionado por la innovación y la calidad del código.',
            subtitle: 'Desarrollador Full Stack Senior',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 'esau',
            image: Esau,
            title: 'Jose Esau Tovar Cruz',
            description: 'Experto en desarrollo frontend y experiencia de usuario con enfoque en accesibilidad y rendimiento. Dominio avanzado de JavaScript moderno, CSS Grid/Flexbox, y frameworks de última generación. Creador de interfaces elegantes y funcionales.',
            subtitle: 'Desarrollador Frontend Especialista',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
    ];

    // Efecto para auto-play del carrusel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % teamData.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, [teamData.length]);

    // Función para cambiar slide manualmente
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return(
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>Conoce a los Brogramadores</h2>
            
            <div id="miCarrusel" className={`carousel slide ${styles.miCarrusel}`} data-bs-ride="carousel" data-bs-interval="5000">
                <div className={`carousel-inner ${styles.carouselContainer}`}>
                    {teamData.map((member, index) => (
                        <div 
                            key={member.id}
                            className={`carousel-item ${index === 0 ? 'active' : ''} ${styles.carouselItem}`}
                        >
                            <div className={styles.carouselCardContainer}>
                                <div className={styles.customCard}>
                                    <div 
                                        className={styles.cardImageSection}
                                        style={{ background: member.gradient }}
                                    >
                                        <img 
                                            src={member.image} 
                                            className={styles.cardImage}
                                            alt={member.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className={styles.cardContentSection}>
                                        <h5 className={styles.cardTitle}>
                                            {member.title}
                                        </h5>
                                        <p className={styles.cardText}>
                                            {member.description}
                                        </p>
                                        <p className={styles.cardText}>
                                            <small className={styles.textMuted}>
                                                {member.subtitle}
                                            </small>
                                        </p>
                                        
                                        {/* Indicador de progreso para el slide actual */}
                                        <div style={{
                                            marginTop: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            {teamData.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    style={{
                                                        width: '30px',
                                                        height: '3px',
                                                        background: idx === index ? member.gradient : 'rgba(0,0,0,0.1)',
                                                        borderRadius: '2px',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles del carrusel con iconos mejorados */}
                <button 
                    className={`carousel-control-prev ${styles.carouselControlPrev}`}
                    type="button" 
                    data-bs-target="#miCarrusel" 
                    data-bs-slide="prev"
                    aria-label="Slide anterior"
                    onClick={() => goToSlide(currentSlide === 0 ? teamData.length - 1 : currentSlide - 1)}
                >
                    <span className="visually-hidden">Anterior</span>
                </button>
                
                <button 
                    className={`carousel-control-next ${styles.carouselControlNext}`}
                    type="button" 
                    data-bs-target="#miCarrusel" 
                    data-bs-slide="next"
                    aria-label="Siguiente slide"
                    onClick={() => goToSlide((currentSlide + 1) % teamData.length)}
                >
                    <span className="visually-hidden">Siguiente</span>
                </button>

                {/* Indicadores del carrusel mejorados */}
                <div className={`carousel-indicators ${styles.carouselIndicators}`}>
                    {teamData.map((member, index) => (
                        <button 
                            key={member.id}
                            type="button" 
                            data-bs-target="#miCarrusel" 
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""} 
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1} - ${member.title}`}
                            onClick={() => goToSlide(index)}
                            title={member.title}
                        />
                    ))}
                </div>
            </div>

            {/* Información adicional del equipo */}
            <div style={{
                marginTop: '4rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '1rem',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    Nuestro Compromiso
                </h3>
                <p style={{
                    color: '#4a5568',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    Combinamos creatividad, tecnología y experiencia para entregar soluciones 
                    que superen las expectativas. Cada proyecto es una oportunidad para innovar 
                    y crear valor duradero.
                </p>
            </div>
        </div>
    );
}

export default CarruselInfo;