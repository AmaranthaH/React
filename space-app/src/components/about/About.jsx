import React from 'react';
import "./About.css"
import imagen from './imagenes/ninfa.jpg';

function About() {
  return (
    <div>
      <h1>Acerca de mí</h1>
      <div className="about-card"> 
        <p>Nombre: Amarantha Hernandez</p>
        <p>Correo/contacto: amara-ntha@live.com</p>
        <p>Descripción: Estudiante de Java FullStack Developer </p>
        <img src={imagen} alt="Mi foto" className="mi-imagen"/> 
      </div>
    </div>
  );
}

export default About;
