import React from "react";
import aboutImg1 from "../../assets/trabajando2.webp";
import aboutImg2 from "../../assets/trabajando1.webp";
import iconComputer from "../../assets/icon-escritorio.png";
import iconManos from "../../assets/icon-manos.png";
import { useTranslation } from "react-i18next";
import "./AboutUs.css";

const AboutUs = () => {
  const { t } = useTranslation();
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
          <span className="title-block">{t("us.title")}</span>
        </h2>
        <p>
          {t("us.parragraph")}
          <span id="subtitle-text">
            <strong>{t("us.text")}</strong>
          </span>
        </p>
        <div className="props-list">
          <div className="prop">
            <div className="circle"></div>
            <img
              src={iconComputer}
              alt="Icono de escritorio"
              className="icon-prop-list"
            />
            <span className="prop-text">{t("us.small-text")}</span>
          </div>

          <div className="prop">
            <div className="circle"></div>
            <img
              src={iconManos}
              alt="Icono de escritorio"
              className="icon-prop-list"
            />
            <span className="prop-text">{t("us.small-text2")}</span>
          </div>
        </div>
        <hr id="separador" />

        <button id="btn-right-column">{t("about.objectives")}</button>
      </div>
    </section>
  );
};

export default AboutUs;
