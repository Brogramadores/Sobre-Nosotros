import React from 'react';
import MasProyectos from '../components/Mas-Proyectos';
import construccion from '../img/construccion.png';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Proyectos = () => {
    // Datos de ejemplo para los proyectos
    const proyectosData = [
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
            title: 'Portfolio Personal',
            descripcion: 'Sitio web personal con diseño moderno',
            tecnologias: ['React', 'CSS3', 'JavaScript', 'Bootstrap'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En desarrollo'
        }
    ];

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div>
                <div style={{ paddingTop: '50px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)'}}>
                    <MasProyectos proyectos={proyectosData} />
                </div>

            </div>
            <footer id="FooterProyectos">
                <Footer />
            </footer>
        </div>
    );
};

export default Proyectos;












