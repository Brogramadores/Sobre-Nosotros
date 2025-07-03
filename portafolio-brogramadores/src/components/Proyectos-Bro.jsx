import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../Styles/ProyectosBro.module.css';
import proyecto1 from '../img/proyecto1.jpg';
import proyecto2 from '../img/proyecto2.jpg';
import proyecto3 from '../img/proyecto3.jpg';
import proyecto4 from '../img/proyecto4.jpg';
import proyecto5 from '../img/proyecto5.jpg';
import proyecto6 from '../img/proyecto6.jpg';
import construccion from '../img/construccion.png';
import { Link } from 'react-router-dom';

const ProyectosBro = () => {
  const projects = [
    {
      id: 1,
      img: construccion,
      title: 'Portafolio',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 2,
      img: construccion,
      title: 'Proyecto 2',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 3,
      img: construccion,
      title: 'Proyecto 3',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 4,
      img: construccion,
      title: 'Proyecto 4',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 5,
      img: construccion,
      title: 'Proyecto 5',
      github: 'https://github.com/Brogramadores',
    },
    {
      id: 6,
      img: construccion,
      title: 'Proyecto 6',
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