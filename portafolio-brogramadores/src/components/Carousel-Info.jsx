import React, { useEffect, useState, useRef } from "react";
import styles from '../Styles/Carrusel-Info.module.css';
import Imagen1 from '../img/Brogramadores.jpg';
import Rafael from '../img/Rafael.jpg';
import Esau from '../img/Esau.jpg';

function CarruselInfo() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselTrackRef = useRef(null);
    const autoPlayIntervalRef = useRef(null);
    
    // Datos del equipo REORDENADOS - Rafael ahora es el primero (centro/principal)
    const teamData = [
        {
            id: 'rafael',
            image: Rafael,
            title: 'Rafael Martinez Verdin',
            description: 'Ingeniero recién egresado de la Universidad Politécnica de Aguascalientes, con sólidos conocimientos en programación estructurada y orientada a objetos. Experiencia en diseño y manejo de bases de datos, fundamentos de redes y conceptos básicos de ciberseguridad. Capacitado en desarrollo web y móvil, utilizando diversos frameworks modernos para crear soluciones eficientes y adaptables. Apasionado por el aprendizaje continuo y enfocado en aportar valor en proyectos de tecnología y software.',
            subtitle: 'Ingeniero en Sistemas Computacionales',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 'team',
            image: Imagen1,
            title: 'Brogramadores',
            description: '2 amigos apasionados por la tecnología y el desarrollo. Unidos por el deseo de aprender continuamente y crecer profesionalmente, trabajamos juntos para crear experiencias digitales innovadoras que convierten ideas en soluciones reales y funcionales. Nos comprometemos con la excelencia tecnológica, empleando las mejores prácticas, tecnologías actuales y metodologías ágiles para entregar proyectos de calidad.',
            subtitle: 'Equipo de Desarrollo & Innovación Freelance',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 'esau',
            image: Esau,
            title: 'Jose Esau Tovar Cruz',
            description: 'Recién egresado de la Universidad Autónoma de Aguascalientes, con conocimientos en programación estructurada y orientada a objetos. Manejo de bases de datos, fundamentos de redes y nociones en ciberseguridad. Experiencia en desarrollo web y móvil, apoyado en frameworks actuales para la creación de aplicaciones funcionales y eficientes. Motivado para enfrentar nuevos retos y crecer profesionalmente en el ámbito del desarrollo de software.',
            subtitle: 'Ingeniero en Sistemas Computacionales',
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        }
    ];

    // Función para actualizar la posición del carrusel
    const updateCarouselPosition = (slideIndex) => {
        if (carouselTrackRef.current) {
            const translateX = -slideIndex * (100 / teamData.length);
            carouselTrackRef.current.style.transform = `translateX(${translateX}%)`;
        }
    };

    // Función para ir a un slide específico
    const goToSlide = (index) => {
        setCurrentSlide(index);
        updateCarouselPosition(index);
        
        // Reiniciar autoplay si está activo
        if (isAutoPlaying) {
            clearInterval(autoPlayIntervalRef.current);
            startAutoPlay();
        }
    };

    // Función para el slide anterior
    const goToPrevSlide = () => {
        const newIndex = currentSlide === 0 ? teamData.length - 1 : currentSlide - 1;
        goToSlide(newIndex);
    };

    // Función para el slide siguiente
    const goToNextSlide = () => {
        const newIndex = (currentSlide + 1) % teamData.length;
        goToSlide(newIndex);
    };

    // Función para iniciar autoplay
    const startAutoPlay = () => {
        autoPlayIntervalRef.current = setInterval(() => {
            setCurrentSlide(prev => {
                const newIndex = (prev + 1) % teamData.length;
                updateCarouselPosition(newIndex);
                return newIndex;
            });
        }, 5000);
    };

    // Función para pausar autoplay
    const pauseAutoPlay = () => {
        if (autoPlayIntervalRef.current) {
            clearInterval(autoPlayIntervalRef.current);
        }
    };

    // Efecto para manejar el autoplay
    useEffect(() => {
        if (isAutoPlaying) {
            startAutoPlay();
        } else {
            pauseAutoPlay();
        }

        return () => {
            if (autoPlayIntervalRef.current) {
                clearInterval(autoPlayIntervalRef.current);
            }
        };
    }, [isAutoPlaying]);

    // Efecto para inicializar la posición del carrusel
    useEffect(() => {
        updateCarouselPosition(currentSlide);
    }, []);

    // Manejo de eventos de teclado
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') {
                goToPrevSlide();
            } else if (e.key === 'ArrowRight') {
                goToNextSlide();
            } else if (e.key === ' ') {
                e.preventDefault();
                setIsAutoPlaying(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentSlide]);

    // Manejo de eventos touch para móviles
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNextSlide();
        } else if (isRightSwipe) {
            goToPrevSlide();
        }
    };

    return(
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>Conoce a los Brogramadores</h2>
            
            <div 
                className={styles.miCarrusel}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <div 
                    className={styles.carouselContainer}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                        ref={carouselTrackRef}
                        className={styles.carouselTrack}
                    >
                        {teamData.map((member, index) => (
                            <div 
                                key={member.id}
                                className={`${styles.carouselItem} ${index === currentSlide ? 'active' : ''}`}
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
                                            <div className={styles.progressBar}>
                                                {teamData.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={styles.progressSegment}
                                                        style={{
                                                            background: idx === index ? member.gradient : 'rgba(0,0,0,0.1)'
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
                </div>

                {/* Controles del carrusel */}
                <button 
                    className={styles.carouselControlPrev}
                    onClick={goToPrevSlide}
                    aria-label="Slide anterior"
                    type="button"
                />
                
                <button 
                    className={styles.carouselControlNext}
                    onClick={goToNextSlide}
                    aria-label="Siguiente slide"
                    type="button"
                />

                {/* Indicadores del carrusel */}
                <div className={styles.carouselIndicators}>
                    {teamData.map((member, index) => (
                        <button 
                            key={member.id}
                            className={`${styles.carouselIndicator} ${index === currentSlide ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir a slide ${index + 1} - ${member.title}`}
                            title={member.title}
                            type="button"
                        />
                    ))}
                </div>
            </div>

            {/* Información adicional del equipo */}
            <div className={styles.teamInfo}>
                <h3 className={styles.teamInfoTitle}>
                    Nuestro Compromiso con la Excelencia
                </h3>
                <p className={styles.teamInfoText}>
                    Como equipo de desarrollo de élite, combinamos creatividad, tecnología de vanguardia 
                    y años de experiencia para entregar soluciones que no solo cumplen, sino que superan 
                    las expectativas más exigentes. Cada línea de código es una oportunidad para innovar 
                    y crear valor duradero para nuestros clientes.
                </p>
                
                {/* Controles de autoplay */}
                <div style={{ marginTop: '1.5rem' }}>
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        style={{
                            background: isAutoPlaying 
                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                : 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%)',
                            color: isAutoPlaying ? 'white' : '#4a5568',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            fontFamily: 'Inter, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        {isAutoPlaying ? '⏸ Pausar' : '▶ Reproducir'} Auto-Play
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarruselInfo;