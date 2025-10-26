import React from "react";
import "./ErrorPage.css"; // Asegúrate de crear este archivo CSS

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
          </svg>
        </div>
        <h1 className="error-title">¡Ups! Algo salió mal</h1>
        <p className="error-message">
          No podemos conectarnos al servidor en este momento.
          <br />
          Por favor, inténtalo de nuevo más tarde.
        </p>
        <div className="error-animation">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
        <div className="error-buttons">
          <button className="error-button" onClick={() => window.location.href = "/#/sensores"}>
            Recargar página
          </button>
          <button className="error-button secondary" onClick={() => window.location.href = "/"}>
            Volver al inicio
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;
