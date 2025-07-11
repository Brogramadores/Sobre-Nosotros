import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../Styles/ProyectosBro.module.css';

import construccion from '../img/construccion.png';
import brogramadores from '../img/Brogramadores.jpg';
import sol from '../img/sol.jpg';
import { Link } from 'react-router-dom';

const ProyectosBro = () => {
  const projects = [
    {
      id: 1,
      img: brogramadores,
      title: 'Portafolio Brogramadores',
      github: 'https://github.com/Brogramadores/Sobre-Nosotros',
    },
    {
      id: 2,
      img: sol,
      title: 'Pagina Sol del Centro (En desarrollo)',
      github: 'https://github.com/Brogramadores/Sol-Del-Centro',
    },
    {
      id: 3,
      img: construccion,
      title: 'Proximamente',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 4,
      img: construccion,
      title: 'Proximamente',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 5,
      img: construccion,
      title: 'Proximamente',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 6,
      img: construccion,
      title: 'Proximamente',
      github: 'https://github.com/Brogramadores',
    },
  ];

  return (
    <section className={`${styles.projectsSection} py-5`}>
      <div className="container text-center">
        <h2 className={styles.seccionTitulo}>Proyectos</h2>
        <h3 className={styles.seccionDescripcion}>Estos son nuestros proyectos</h3>
        <div className="row">
          {projects.map(project => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.id}>
              <div className={`${styles.proyecto} position-relative`}>
                <img src={project.img} alt={project.title} className="img-fluid" />
                <div className="overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                  <p className={styles.proyectoTitulo}>{project.title}</p>
                  <div className={`${styles.iconosContenedor} d-flex gap-3`}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github fs-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/proyectos">
          <button type="button" className={`${styles.btnInfo} mt-4`}>
            Mas Proyectos <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProyectosBro;