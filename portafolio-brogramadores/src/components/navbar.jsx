import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/img.jsx';
import styles from '../Styles/Navbar.module.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={img.Brogramadores}
            alt="Logo"
            width="85"
            height="55"
            className="d-inline-block align-text-top"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                <li><a className="dropdown-item" href="#">Contáctanos</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;