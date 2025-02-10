import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleButtonClick = () => {
        navigate('/base-de-datos'); // Redirige a Base_de_datos
    };

    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>{t('hero.title')}</h1>
                <p>{t('hero.description')}</p>
                <button onClick={handleButtonClick} className="hero-button">
                    {t('hero.graph')} {/* Asegúrate de tener este texto en tu archivo de traducción */}
                </button>
            </div>
        </div>
    );
};

export default Hero;