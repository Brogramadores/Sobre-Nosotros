import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/img.jsx';
import styles from '../Styles/Navbar.module.css';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
// ${styles.navbarCustom}
    return (
    <nav className={`${styles.navbarCustom}`}> 
        <nav className={`navbar navbar-expand-lg`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={img.Brogramadores} alt="Logo" width="65" height="45" className="d-inline-block align-text-top" />
                       Brogramadores
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle" 
                                href="#" 
                                role="button" 
                                onClick={toggleDropdown}
                                aria-expanded={isDropdownOpen}
                            >
                                Sobre Nosotros
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <li><a className="dropdown-item" href="#">Proyectos</a></li>
                                <li><a className="dropdown-item" href="#">Redes Sociales</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Contactanos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </nav>
    
    );
}

export default Navbar;