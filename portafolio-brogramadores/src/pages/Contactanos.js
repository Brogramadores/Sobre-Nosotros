
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import styles from '../Styles/Contactanos.module.css';

function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoContacto: 'persona',
    formaContacto: '',
    asunto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validar campos requeridos
      if (!formData.nombre || !formData.formaContacto || !formData.asunto) {
        throw new Error('Por favor, completa todos los campos requeridos.');
      }

      // Configurar EmailJS (solo necesitas configurar una vez)
      const templateParams = {
        from_name: formData.nombre,
        from_email: formData.formaContacto,
        subject: formData.asunto,
        message: formData.mensaje,
        contact_type: formData.tipoContacto === 'persona' ? 'Persona' : 'Empresa',
        to_email: 'brogramadores20@gmail.com' // Donde quieres recibir
      };

      // Enviar con EmailJS (DIRECTO desde el navegador)
      const result = await emailjs.send(
        'service_myz9qys',    // Lo obtienes de EmailJS
        'template_epaxdiy',   // Lo obtienes de EmailJS
        templateParams,
        'zsgXtMq1rl_xyRZJv'     // Lo obtienes de EmailJS
      );

      console.log('Correo enviado:', result.text);
      setSubmitStatus('success');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        tipoContacto: 'persona',
        formaContacto: '',
        asunto: '',
        mensaje: ''
      });

    } catch (error) {
      setSubmitStatus('error');
      console.error('Error al enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.Contactanos}>
      <div className={styles.contenedorPrincipal}>
        <header className={styles.headerNavbar}>
          <Navbar/>
        </header>
        
        <section id="inicio" className={styles.seccionPrincipal}>
          <h1>¡Contáctanos!</h1>
          <p>Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
          
          <div className={styles.formularioContainer}>
            <form onSubmit={handleSubmit} className={styles.formularioContacto}>
              
              {/* Sección 1: Nombre de Persona/Empresa */}
              <div className={styles.seccionFormulario}>
                <h3>1. Información del Contacto</h3>
                
                <div className={styles.tipoContacto}>
                  <label>
                    <input
                      type="radio"
                      name="tipoContacto"
                      value="persona"
                      checked={formData.tipoContacto === 'persona'}
                      onChange={handleInputChange}
                    />
                    Persona
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="tipoContacto"
                      value="empresa"
                      checked={formData.tipoContacto === 'empresa'}
                      onChange={handleInputChange}
                    />
                    Empresa
                  </label>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="nombre">
                    {formData.tipoContacto === 'persona' ? 'Nombre completo' : 'Nombre de la empresa'} *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder={formData.tipoContacto === 'persona' ? 'Ingresa tu nombre completo' : 'Ingresa el nombre de tu empresa'}
                    required
                  />
                </div>
              </div>

              {/* Sección 2: Forma de Contacto */}
              <div className={styles.seccionFormulario}>
                <h3>2. Forma de Contacto</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="formaContacto">Correo electrónico o teléfono *</label>
                  <input
                    type="text"
                    id="formaContacto"
                    name="formaContacto"
                    value={formData.formaContacto}
                    onChange={handleInputChange}
                    placeholder="ejemplo@correo.com o +52 123 456 7890"
                    required
                  />
                </div>
              </div>

              {/* Sección 3: Asunto */}
              <div className={styles.seccionFormulario}>
                <h3>3. Asunto</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="asunto">Asunto del mensaje *</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    placeholder="Describe brevemente el motivo de tu contacto"
                    required
                  />
                </div>
              </div>

              {/* Sección adicional: Mensaje */}
              <div className={styles.seccionFormulario}>
                <h3>4. Mensaje (Opcional)</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="mensaje">Mensaje adicional</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Proporciona más detalles sobre tu consulta..."
                    rows="4"
                  />
                </div>
              </div>

              {/* Botón de envío */}
              <div className={styles.botonContainer}>
                <button 
                  type="submit" 
                  className={styles.botonEnviar}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className={styles.mensajeExito}>
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.mensajeError}>
                  Error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
              
            </form>
          </div>
        </section>
        
        <footer id="FooterContacto">
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Contactanos;