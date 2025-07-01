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

const ProyectosBro = () => {
  const projects = [
    {
      id: 1,
      img: proyecto1,
      title: 'Proyecto 1',
      github: 'https://github.com/Brogramadores',
      icon: 'bi-filetype-java',
    },
    {
      id: 2,
      img: proyecto2,
      title: 'Proyecto 2',
      github: 'https://github.com/Brogramadores',
      icon: 'bi-google-play',
    },
    {
      id: 3,
      img: proyecto3,
      title: 'Proyecto 3',
      github: 'https://github.com/Brogramadores',
      icon: 'bi-hospital',
    },
    {
      id: 4,
      img: proyecto4,
      title: 'Proyecto 4',
      github: 'https://github.com/Brogramadores',
      icon: 'bi-file-excel-fill',
    },
    {
      id: 5,
      img: proyecto5,
      title: 'Proyecto 5',
      github: 'https://github.com/Brogramadores',
      icon: 'bi-file-earmark-word',
    },
    {
      id: 6,
      img: proyecto6,
      title: 'Proyecto 6',
      github: 'https://github.com/Brogramadores',
      icon: 'bi-bootstrap',
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
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className={`bi ${project.icon} fs-3`}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="https://github.com/Brogramadores" target="_blank" rel="noopener noreferrer">
          <button type="button" className={`${styles.btnInfo} mt-4`}>
            Mas Proyectos <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProyectosBro;