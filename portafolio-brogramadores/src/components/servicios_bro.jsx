import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Servicios() {
    return (
        <section className="experiencia seccion-clara">
            <div className="container text-center">
                <div className="row">
                    {/* Conocimientos */}
                    <div className="columna col-12 col-md-4">
                        <i className="bi bi-cpu"></i>
                        <p className="experiencia-titulo">Desarrollo Web</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus, sit esse
                            repudiandae qui sint ipsum rerum deserunt tempore dolorem unde quidem, consectetur possimus
                            consequatur obcaecati in iste non commodi.
                        </p>
                        <div className="badges-contenedor">
                            <span className="badge text-bg-primary">Paginas Web</span>
                            <span className="badge text-bg-primary">Aplicaciones Web</span>
                            <span className="badge text-bg-primary">Sitios Web</span>
                            <span className="badge text-bg-primary">Plataformas</span>
                        </div>
                    </div>
                    
                    {/* Cursos Hechos */}
                    <div className="columna col-12 col-md-4">
                        <i className="bi bi-cpu"></i>
                        <p className="experiencia-titulo">Desarrollo de Software</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus, sit esse
                            repudiandae qui sint ipsum rerum deserunt tempore dolorem unde quidem, consectetur possimus
                            consequatur obcaecati in iste non commodi.
                        </p>
                        <div className="badges-contenedor">
                            <span className="badge text-bg-primary">Programas de Escritorio</span>
                            <span className="badge text-bg-primary">Aplicaciones Moviles</span>
                        </div>
                    </div>
                    
                    {/* Experiencia */}
                    <div className="columna col-12 col-md-4">
                        <i className="bi bi-cpu"></i>
                        <p className="experiencia-titulo">Consultoria</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto doloribus, sit esse
                            repudiandae qui sint ipsum rerum deserunt tempore dolorem unde quidem, consectetur possimus
                            consequatur obcaecati in iste non commodi.
                        </p>
                        <div className="badges-contenedor">
                            <span className="badge text-bg-primary">Levantamiento de Requerimientos</span>
                            <span className="badge text-bg-primary">Entrevistas</span>
                            <span className="badge text-bg-primary">Mantenimiento</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicios;