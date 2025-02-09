import React from "react";
import "./AboutUs.css";
import aboutImg1 from "../../assets/exampleABOUT.jpg"; 
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
        <img src={aboutImg1} alt="Imagen 2" className="column-image" />
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
            <span className="title-block">Colegio IES El Rincón</span> 
            <span className="title-block">haciendo cosas en rincones</span>
        </h2>
        <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de 
            texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
            el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
            desconocido usó una galería de textos y los mezcló de tal manera que logró hacer 
            un libro de textos especimen.
        </p>
        <div className="props-list">
            <div className="prop">
                <div className="circle"></div>
                <img src={iconComputer} alt="Icono de escritorio" />
                <span>Tecnologias y aplicaciones de ultima generacion</span>
            </div>

            <div className="prop">
                <div className="circle"></div>
                <img src={iconManos} alt="Icono de escritorio" />
                <span>Compromiso y conciencia con el medioambiente</span>
            </div>
        </div>
        <hr id="separador"/>

        <button>Nuestros objetivos</button>
      </div>
    </section>
  );
};

export default AboutUs;
