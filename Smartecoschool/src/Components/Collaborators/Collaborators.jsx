import React from "react";
import LogoGobierno from "../../assets/gobierno_de_canarias.webp";
import LogoInstituto from "../../assets/ies_el_rincon.webp";
import "./Collaborators.css";

const Collaborators = () => {
  // Datos de colaboradores/patrocinadores
  const collaborators = [
    {
      name: "Gobierno de Canarias",
      logo: LogoGobierno,
      link: "https://www.gobiernodecanarias.org/principal/",
    },
    {
      name: "IES El Ricón",
      logo: LogoInstituto,
      link: "https://ieselrincon.es/",
    },
  ];

  return (
    <section id="colaboradores" className="collaborators-section">
      <div className="collaborators-container">
        {collaborators.map((collaborator, index) => (
          <a
            key={index}
            href={collaborator.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={collaborator.logo}
              alt={collaborator.name}
              className="collaborator-logo"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;
