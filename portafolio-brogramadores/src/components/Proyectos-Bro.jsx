import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/ProyectosBro.module.css'; // Crea este archivo para tu CSS adicional si lo requieres

const ProyectosBro = () => {
  const projects = [
    {
      id: 1,
      img: 'img/proyecto1.png',
      title: 'Proyecto 1',
      github: 'https://github.com',
      icon: 'bi-filetype-java',
    },
    {
      id: 2,
      img: 'img/proyecto2.png',
      title: 'Proyecto 2',
      github: 'https://github.com',
      icon: 'bi-google-play',
    },
    {
      id: 3,
      img: 'img/proyecto3.webp',
      title: 'Proyecto 3',
      github: 'https://github.com',
      icon: 'bi-hospital',
    },
    {
      id: 4,
      img: 'img/proyecto4.png',
      title: 'Proyecto 4',
      github: 'https://github.com',
      icon: 'bi-file-excel-fill',
    },
    {
      id: 5,
      img: 'img/proyecto5.jpg',
      title: 'Proyecto 5',
      github: 'https://github.com',
      icon: 'bi-file-earmark-word',
    },
    {
      id: 6,
      img: 'img/proyecto6.webp',
      title: 'Proyecto 6',
      github: 'https://github.com',
      icon: 'bi-bootstrap',
    },
  ];

  return (
    <section className="projects-section py-5">
      <div className="container text-center">
        <h2 className="seccion-titulo texto-negro">Proyectos</h2>
        <h3 className="seccion-descripcion">Estos son mis proyectos</h3>
        <div className="row">
          {projects.map(project => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={project.id}>
              <div className="proyecto position-relative">
                <img src={project.img} alt={project.title} className="img-fluid" />
                <div className="overlay d-flex flex-column justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                  <p>{project.title}</p>
                  <div className="iconos-contenedor d-flex gap-3">
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

        <a href="https://github.com/GitRaFaeLL" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-info mt-4">
            Mas Proyectos <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProyectosBro;
