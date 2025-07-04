import React from 'react';
import styles from '../Styles/RedesSociales.module.css';

const RedesSociales = () => {
  const redesSociales = [
    {
      id: 1,
      nombre: 'Facebook',
      icono: '📘',
      color: '#1877F2',
      url: 'https://facebook.com/brogramadores',
      descripcion: 'Síguenos en Facebook para estar al día con nuestras últimas publicaciones',
      seguidores: '2.5K',
      tipo: 'Red Social'
    },
    {
      id: 2,
      nombre: 'Instagram',
      icono: '📸',
      color: '#E4405F',
      url: 'https://instagram.com/brogramadores',
      descripcion: 'Contenido visual, historias y nuestros momentos especiales.',
      seguidores: '1.8K',
      tipo: 'Red Social'
    },
    {
      id: 3,
      nombre: 'Correo Electrónico',
      icono: '✉️',
      color: '#EA4335',
      url: 'mailto:contacto@brogramadores.com',
      descripcion: 'Contáctanos directamente para colaboraciones y/o consultas profesionales para contribuir contigo.',
      seguidores: 'Directo',
      tipo: 'Contacto'
    },
    {
      id: 4,
      nombre: 'GitHub-Brogramadores',
      icono: '🐙',
      color: '#333',
      url: 'https://github.com/brogramadores',
      descripcion: 'Explora nuestros proyectos para checar nuestra experiencia previa',
      seguidores: '892',
      tipo: 'Repositorio'
    },
    {
      id: 5,
      nombre: 'GitHub-Rafael Martinez Verdin',
      icono: '🐙',
      color: '#333',
      url: 'https://github.com/GitRaFaeLL',
      descripcion: 'Conoce a Rafael, un apasionado desarrollador con experiencia en aplicaciones web y móviles.',
      seguidores: '892',
      tipo: 'Repositorio Personal'
    },
    {
      id: 6,
      nombre: 'GitHub-Jose Esau Tovar Cruz',
      icono: '🐙',
      color: '#333',
      url: 'https://github.com/JetceMx',
      descripcion: 'Conoce a Esau, un miembro clave de nuestro equipo con experiencia en desarrollo web y móvil.',
      seguidores: '892',
      tipo: 'Repositorio Personal'
    },
    {
      id: 7,
      nombre: 'LinkedIn-Rafael Martinez Verdin',
      icono: '🔗',
      color: '#333',
      url: 'https://www.linkedin.com/in/rafael-martinez-verdin-746166225/',
      descripcion: 'Conecta con Rafael en LinkedIn para oportunidades profesionales y colaboraciones.',
      seguidores: '892',
      tipo: 'Contacto Profesional'
    },
    {
      id: 8,
      nombre: 'LinkedIn-Jose Esau Tovar Cruz',
      icono: '🔗',
      color: '#333',
      url: 'https://www.linkedin.com/in/jose-esau-tovar-cruz-456b41351/',
      descripcion: 'Conecta con Esau en LinkedIn para oportunidades profesionales y colaboraciones.',
      seguidores: '892',
      tipo: 'Contacto Profesional'
    },

    
    
    
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Brogramadores</h1>
        <p className={styles.subtitle}>Conecta con nosotros a traves de nuestras diferentes redes sociales</p>
      </div>
      
      <div className={styles.cardsContainer}>
        {redesSociales.map((red) => (
          <div
            key={red.id}
            className={styles.card}
            onClick={() => handleCardClick(red.url)}
            style={{ '--card-color': red.color }}
          >
            <div className={styles.cardInner}>
              {/* Frente de la card */}
              <div className={styles.cardFront}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>{red.icono}</span>
                </div>
                <h3 className={styles.cardTitle}>{red.nombre}</h3>
                <span className={styles.cardType}>{red.tipo}</span>
              </div>
              
              {/* Reverso de la card */}
              <div className={styles.cardBack}>
                <div className={styles.backContent}>
                  <h4 className={styles.backTitle}>{red.nombre}</h4>
                  <p className={styles.description}>{red.descripcion}</p>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>{red.seguidores}</span>
                      <span className={styles.statLabel}>
                        {red.nombre === 'Correo Electrónico' ? 'Contacto' : 'Seguidores'}
                      </span>
                    </div>
                  </div>
                  <div className={styles.clickHint}>
                    <span>Clic para visitar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <p>¿Quieres conocernos mas? ¡Contáctanos!</p>
      </div>
    </div>
  );
};

export default RedesSociales;