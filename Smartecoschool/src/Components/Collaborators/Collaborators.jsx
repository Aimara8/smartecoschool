//npm install tailwindcss @tailwindcss/vite
import React from 'react';
import './Collaborators.css'
import LogoGobierno from '../../assets/gobierno_de_canarias.png'; // Ruta al logo 1
import LogoInstituto from '../../assets/ies_el_rincon.png'; // Ruta al logo 2

const Collaborators = () => {
  // Datos de colaboradores/patrocinadores
  const collaborators = [
    {
      name: "Gobierno de Canarias",
      logo: LogoGobierno, // URL del logo
      link: "https://www.gobiernodecanarias.org/principal/" // Enlace al sitio web
    },
    {
      name: "IES El Ricón",
      logo: LogoInstituto, // URL del logo
      link: "https://ieselrincon.es/" // Enlace al sitio web
    }
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