import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/base-de-datos");
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.description")}</p>
        <button onClick={handleButtonClick} className="hero-button">
          {t("hero.graph")}
        </button>
      </div>
    </div>
  );
};

export default Hero;
