import React from 'react';
import MasProyectos from '../components/Mas-Proyectos';
import construccion from '../img/construccion.png';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import brogramadores from '../img/Brogramadores.jpg';
import sol from '../img/sol.jpg';

const Proyectos = () => {
    // Datos de ejemplo para los proyectos
    const proyectosData = [
        {
            id: 1,
            img: brogramadores,
            title: 'Portafolio Brogramadores',
            descripcion: 'Portafolio del equipo Brogramadores para mostrar sus habilidades y proyectos',
            tecnologias: ['React', 'Node.js', 'EmailJs', 'Bootstrap', 'Css'],
            github: 'https://github.com/Brogramadores/Sobre-Nosotros',
            demo: 'https://brogramadores.github.io/Sobre-Nosotros/',
            estado: 'Terminado'
        },
        {
            id: 2,
            img: sol,
            title: 'Pagina Sol del Centro',
            descripcion: 'Pagina web para la libreria Sol del Centro para mostrar y apartar sus productos',
            tecnologias: ['React', 'MySQL', 'Express', 'Bootstrap', 'Css', 'Node.js'],
            github: 'https://github.com/Brogramadores/Sol-Del-Centro',
            demo: '#',
            estado: 'En desarrollo'
        },
        {
            id: 3,
            img: construccion,
            title: 'Proyecto 3 (Proximamente)',
            descripcion: 'Proyecto en planificacion',
            tecnologias: ['React'],
            github: 'https://github.com/Brogramadores',
            demo: '#',
            estado: 'En planificación'
        },
        
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












