import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Styles/ServiciosBro.module.css';

function Servicios() {
  const servicios = [
    {
      icono: "bi-globe",
      titulo: "Desarrollo Web",
      descripcion:
        "Creamos sitios web responsivos, seguros y optimizados para todo tipo de dispositivos.",
      badges: ["Páginas Web", "Aplicaciones Web", "Sitios Responsivos", "Plataformas"],
    },
    {
      icono: "bi-phone",
      titulo: "Desarrollo de Software",
      descripcion:
        "Desarrollamos software a la medida: desde apps móviles hasta sistemas de escritorio.",
      badges: ["Programas de Escritorio", "Aplicaciones Móviles", "APIs"],
    },
    {
      icono: "bi-person-check",
      titulo: "Consultoría TI",
      descripcion:
        "Asesoramos en implementación tecnológica, análisis de requerimientos y mantenimiento.",
      badges: ["Levantamiento de Requerimientos", "Entrevistas", "Mantenimiento"],
    },
  ];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg,rgb(161, 230, 239),rgb(163, 224, 168))' }}>
      <div className="container text-center">
        <h2 className="mb-5 text-primary fw-bold">Servicios que Ofrecemos</h2>
        <div className="row">
          {servicios.map((servicio, idx) => (
            <div className="col-12 col-md-4 mb-4" key={idx}>
              <div className={`card h-100 ${styles.cardAnimada}`}>
                <div className="card-body">
                  <div className={`${styles.iconoServicio} mb-3 text-success`}>
                    <i className={`bi ${servicio.icono}`}></i>
                  </div>
                  <h5 className="card-title text-dark fw-bold">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                    {servicio.badges.map((badge, i) => (
                      <span className="badge bg-success-subtle text-success border border-success" key={i}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
