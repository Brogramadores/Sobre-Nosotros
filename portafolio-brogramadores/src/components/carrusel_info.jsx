import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// IMPORTA las imágenes correctamente - NO uses strings con rutas
import Imagen1 from '../img/Brogramadores.jpg';
import Rafael from '../img/Rafael.jpg';
import Esau from '../img/Esau.jpg';

function Carrusel_Info() {
    return(
        <div className="container mt-5">
            <div id="miCarrusel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                    {/* Primera slide - Imagen principal */}
                    <div className="carousel-item active">
                        <img src={Imagen1} className="d-block w-100" alt="Imagen Principal" style={{height: '400px', objectFit: 'cover'}} />
                    </div>
                    
                    {/* Segunda slide - Card con imagen de Rafael */}
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#f8f9fa'}}>
                            <div className="card mb-3" style={{maxWidth: '800px', width: '90%'}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Rafael} className="img-fluid rounded-start h-100" alt="Rafael" style={{objectFit: 'cover'}} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body h-100 d-flex flex-column justify-content-center">
                                            <h5 className="card-title">Rafael Martinez Verdin</h5>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquid, minus cum nulla magni cumque eum obcaecati iste sequi deleniti autem, ab nam dicta consectetur fugiat dignissimos voluptate neque dolor.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">Información adicional</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tercera slide - Card con imagen de Esau */}
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center align-items-center" style={{height: '400px', backgroundColor: '#f8f9fa'}}>
                            <div className="card mb-3" style={{maxWidth: '800px', width: '90%'}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Esau} className="img-fluid rounded-start h-100" alt="Esau" style={{objectFit: 'cover'}} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body h-100 d-flex flex-column justify-content-center">
                                            <h5 className="card-title">Jose Esau Tovar Cruz</h5>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia illum est tempore repellat voluptate odio itaque, corrupti nobis, neque rerum aspernatur explicabo magni eligendi excepturi! Sapiente nobis quas iusto!
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">Información adicional</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#miCarrusel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#miCarrusel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Imagen Principal"></button>
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="1" aria-label="Card Rafael"></button>
                    <button type="button" data-bs-target="#miCarrusel" data-bs-slide-to="2" aria-label="Card Esau"></button>
                </div>
            </div>
        </div>
    );
}

export default Carrusel_Info;