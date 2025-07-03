import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import styles from '../Styles/Proyectos.module.css';
import construccion from '../img/construccion.png';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
const Proyectos = () => {
    const [filtroActivo, setFiltroActivo] = useState('Todos');
    const [busqueda, setBusqueda] = useState('');

    // Datos de proyectos con tecnologías
    const proyectos = [
        {
            id: 1,
            img: construccion,
            title: 'Sistema de Gestión',
            descripcion: 'Sistema web para gestión de inventarios y ventas',
            tecnologias: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 2,
            img: construccion,
            title: 'App Mobile E-commerce',
            descripcion: 'Aplicación móvil para comercio electrónico',
            tecnologias: ['React Native', 'Firebase', 'JavaScript'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 3,
            img: construccion,
            title: 'Dashboard Analytics',
            descripcion: 'Panel de control con análisis de datos en tiempo real',
            tecnologias: ['React', 'Chart.js', 'PostgreSQL', 'Express'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 4,
            img: construccion,
            title: 'API REST Servicios',
            descripcion: 'API para servicios de autenticación y gestión de usuarios',
            tecnologias: ['Node.js', 'Express', 'MongoDB', 'JWT'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 5,
            img: construccion,
            title: 'Plataforma Educativa',
            descripcion: 'Sistema de gestión de aprendizaje online',
            tecnologias: ['React', 'Redux', 'MySQL', 'Tailwind'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 6,
            img: construccion,
            title: 'Chat en Tiempo Real',
            descripcion: 'Aplicación de mensajería instantánea',
            tecnologias: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 7,
            img: construccion,
            title: 'Sistema de Reservas',
            descripcion: 'Plataforma para reservas de citas y servicios',
            tecnologias: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 8,
            img: construccion,
            title: 'Portfolio Personal',
            descripcion: 'Sitio web personal con diseño moderno',
            tecnologias: ['React', 'CSS3', 'JavaScript', 'Bootstrap'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        }
    ];

    // Obtener todas las tecnologías únicas
    const tecnologiasUnicas = ['Todos', ...new Set(proyectos.flatMap(p => p.tecnologias))];

    // Filtrar proyectos
    const proyectosFiltrados = proyectos.filter(proyecto => {
        const coincideFiltro = filtroActivo === 'Todos' || proyecto.tecnologias.includes(filtroActivo);
        const coincideBusqueda = proyecto.title.toLowerCase().includes(busqueda.toLowerCase()) ||
            proyecto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
            proyecto.tecnologias.some(tech => tech.toLowerCase().includes(busqueda.toLowerCase()));
        return coincideFiltro && coincideBusqueda;
    });

    const handleFiltroChange = (tecnologia) => {
        setFiltroActivo(tecnologia);
    };

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
    };

    return (
        <div className={styles.Proyectos}>
            <div className={styles.contenedorPrincipal}>
                <header className={styles.headerNavbar}>
                    <Navbar />
                </header>
                <section className={`${styles.projectsSection} py-5`}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h1 className={styles.seccionTitulo}>Nuestros Proyectos</h1>
                            <p className={styles.seccionDescripcion}>
                                Explora nuestra colección de proyectos en desarrollo y descubre las tecnologías que utilizamos. Cada proyecto refleja nuestra pasión por la programación y el desarrollo web.
                            </p>
                        </div>

                        {/* Buscador */}
                        <div className="row justify-content-center mb-4">
                            <div className="col-12 col-md-8 col-lg-6">
                                <div className={styles.buscadorContainer}>
                                    <div className="position-relative">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.buscadorInput}`}
                                            placeholder="Buscar proyectos por nombre, descripción o tecnología..."
                                            value={busqueda}
                                            onChange={handleBusquedaChange}
                                        />
                                        <i className={`bi bi-search ${styles.buscadorIcon}`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Filtros de tecnologías */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-12">
                                <div className={styles.filtrosContainer}>
                                    <div className="d-flex flex-wrap justify-content-center gap-2">
                                        {tecnologiasUnicas.map(tecnologia => (
                                            <button
                                                key={tecnologia}
                                                className={`${styles.filtroBtn} ${filtroActivo === tecnologia ? styles.filtroActivo : ''}`}
                                                onClick={() => handleFiltroChange(tecnologia)}
                                            >
                                                {tecnologia}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contador de resultados */}
                        <div className="text-center mb-4">
                            <p className={styles.resultadosContador}>
                                {proyectosFiltrados.length} proyecto{proyectosFiltrados.length !== 1 ? 's' : ''} encontrado{proyectosFiltrados.length !== 1 ? 's' : ''}
                            </p>
                        </div>

                        {/* Grid de proyectos */}
                        <div className="row">
                            {proyectosFiltrados.length > 0 ? (
                                proyectosFiltrados.map(proyecto => (
                                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={proyecto.id}>
                                        <div className={`${styles.proyecto} position-relative`}>
                                            <img src={proyecto.img} alt={proyecto.title} className="img-fluid" />

                                            {/* Badge de estado */}
                                            <div className={`${styles.estadoBadge} position-absolute`}>
                                                {proyecto.estado}
                                            </div>

                                            {/* Overlay con información */}
                                            <div className={`${styles.overlay} d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100`}>
                                                <h3 className={styles.proyectoTitulo}>{proyecto.title}</h3>
                                                <p className={styles.proyectoDescripcion}>{proyecto.descripcion}</p>

                                                {/* Tecnologías */}
                                                <div className={`${styles.tecnologiasContainer} mb-3`}>
                                                    {proyecto.tecnologias.map(tech => (
                                                        <span key={tech} className={styles.tecnologiaBadge}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Iconos de enlaces */}
                                                <div className={`${styles.iconosContenedor} d-flex gap-3`}>
                                                    <a href={proyecto.github} target="_blank" rel="noopener noreferrer" title="Ver código">
                                                        <i className="bi bi-github"></i>
                                                    </a>
                                                    <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" title="Ver demo">
                                                        <i className="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <div className={styles.noResultados}>
                                        <i className="bi bi-search mb-3"></i>
                                        <h4>No se encontraron proyectos</h4>
                                        <p>Intenta con otros términos de búsqueda o filtros</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Botón de volver */}
                        <div className="text-center mt-5">
                            <Link to="/">
                                <button
                                    type="button"
                                    className={`${styles.btnVolver}`}
                                >
                                    <i className="bi bi-arrow-left-circle-fill"></i> Volver
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <footer id="FooterProyectos" className={styles.footer}>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default Proyectos;