import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import monitor from "../../assets/monitor.webp";
import raspberryPi from "../../assets/Raspberry_Pi.webp";
import camara from "../../assets/camara.webp";
import sensorFlujo from "../../assets/sensorflujo.webp";
import sensorCorriente from "../../assets/sensorcorriente1.webp";
import modulo from "../../assets/modulo.webp";
import { useTranslation } from "react-i18next";
import "./Functions.css";

const Programs = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const images = [
    raspberryPi,
    camara,
    monitor,
    sensorFlujo,
    sensorCorriente,
    modulo,
  ];

  return (
    <div className="programs">
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        {...modalContent}
      />
      <div className="text">
        <p>{t("about.description1")}</p>
      </div>
      <div className="programs-container">
        {t("functions", { returnObjects: true }).map((func, index) => (
          <div className="program" key={index}>
            <img src={images[index]} alt={func.name} />
            <div className="caption">
              <h3>{func.name}</h3>
              <p>{func.description}</p>
              <button
                className="caption-button"
                onClick={() => openModal(func.name, func.detail)}
              >
                {t("more.more")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
