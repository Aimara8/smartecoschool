import React from "react";
import "./AboutUs.css";
import aboutImg1 from "../../assets/trabajando2.webp"; 
import aboutImg2 from "../../assets/trabajando1.webp"; 
import iconComputer from "../../assets/icon-escritorio.png"; 
import iconManos from "../../assets/icon-manos.png";
const AboutUs = () => {
  return (
    <section className="about-container">
      {/* Columna izquierda con dos imágenes */}
      <div className="left-column">
        <div className="circle-img"></div>
        <img src={aboutImg1} alt="Imagen 1" className="column-image" />
        <div className="circle-img"></div>
        <img src={aboutImg2} alt="Imagen 2" className="column-image" />
      </div>
      {/* Columna derecha con texto */}
      <div className="right-column">
        <div className="decorative-circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <h2>
            <span className="title-block">¡Bienvenido a nuestro espacio digital!</span> 
        </h2>
        <p>
          Somos un grupo de estudiantes del Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma, unidos por la determinación de hacer la diferencia.
          En el corazón de nuestro trabajo se encuentra un proyecto innovador que refleja nuestras habilidades técnicas y nuestra dedicación a crear un impacto positivo en el mundo que nos rodea.
          En nuestro grupo, no solo trabajamos juntos, sino que creamos un ambiente donde la colaboración florece.
          Con cada paso que damos, miramos hacia un futuro lleno de posibilidades. Sabemos que los desafíos son inevitables, pero estamos listos para enfrentarlos con determinación.
         <span id="subtitle-text"><strong>Gracias por ser parte de este viaje con nosotros.</strong></span>
        </p>
        <div className="props-list">
            <div className="prop">
                <div className="circle"></div>
                <img src={iconComputer} alt="Icono de escritorio" className="icon-prop-list"/>
                <span>Tecnologias y aplicaciones de ultima generacion</span>
            </div>

            <div className="prop">
                <div className="circle"></div>
                <img src={iconManos} alt="Icono de escritorio" className="icon-prop-list"/>
                <span>Compromiso y conciencia con el medioambiente</span>
            </div>
        </div>
        <hr id="separador"/>

        <button id="btn-right-column">Nuestros objetivos</button>
      </div>
    </section>
  );
};

export default AboutUs;
