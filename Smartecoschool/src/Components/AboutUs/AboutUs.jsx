import React, { useState } from "react";
import "./AboutUs.css";
import aboutImg1 from "../../assets/trabajando2.webp";
import aboutImg2 from "../../assets/trabajando1.webp";
import iconComputer from "../../assets/icon-escritorio.webp";
import iconManos from "../../assets/icon-manos.webp";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <section className="about-container">
                <div className="left-column">
                    <div className="circle-img"></div>
                    <img src={aboutImg1} alt="Imagen 1" className="column-image" />
                    <div className="circle-img"></div>
                    <img src={aboutImg2} alt="Imagen 2" className="column-image" />
                </div>

                <div className="right-column">
                    <div className="decorative-circles">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <h2><span className="title-block">{t('us.title')}</span></h2>
                    <p>
                        {t('us.parragraph')}
                        <span id="subtitle-text"><strong>{t('us.text')}</strong></span>
                    </p>
                    <div className="props-list">
                        <div className="prop">
                            <div className="circle"></div>
                            <img src={iconComputer} alt="Icono de escritorio" className="icon-prop-list" />
                            <span className="prop-text">{t('us.small-text')}</span>
                        </div>

                        <div className="prop">
                            <div className="circle"></div>
                            <img src={iconManos} alt="Icono de escritorio" className="icon-prop-list" />
                            <span className="prop-text">{t('us.small-text2')}</span>
                        </div>
                    </div>
                    <hr id="separador" />

                    <button id="btn-right-column" onClick={handleOpenModal}>
                        {t('participants')}
                    </button>
                </div>
            </section>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={handleCloseModal}>×</button>
                        <h3>{t('participants')}</h3>

                        <div className="modal-scroll-area">
                            <div className="names-list">
                                <div className="divParticipants">
                                    <h3>Web</h3>
                                    <ul>
                                        <li>Enrique García Pérez</li>
                                        <li>Cristian Jonay Jiménez Moreno</li>
                                        <li>Aimara Rodriguez Gomez</li>
                                        <li>Victor Plágaro Moreno</li>
                                        <li>Fátima Inés Hamdouni Jaizme</li>
                                        <li>Samuel Jiménez Delgado</li>
                                    </ul>
                                </div>

                                <div className="divParticipants">
                                    <h3>BackEnd</h3>
                                    <ul>
                                        <li>Gabriel Medina Torres</li>
                                        <li>Francisco Javier Naranjo Escobio</li>
                                        <li>Dalila María Sambruno Padilla</li>
                                        <li>Adrián Lajo Carbo</li>
                                        <li>Elsa Ramírez Castaño</li>
                                    </ul>
                                </div>

                                <div className="divParticipants">
                                    <h3>Sensores</h3>
                                    <ul>
                                        <li>Lara del Carmen Hernandez Santana</li>
                                        <li>Suan Adoney Morales Espino</li>
                                        <li>Pablo Alejandro Rodriguez Quintana</li>
                                        <li>José Daniel Sánchez León</li>
                                        <li>Eduardo Galván Quintana</li>
                                    </ul>
                                </div>

                                <div className="divParticipants">
                                    <h3>Raspberry</h3>
                                    <ul>
                                        <li>Moises Miranda Rivero</li>
                                        <li>Gonzalo Pérez Cabrera</li>
                                        <li>Jorge Bolaños Sánchez</li>
                                        <li>Jonathan San Pedro Montes</li>
                                        <li>Ivan Domingues Suarez</li>
                                    </ul>
                                </div>

                                <div className="divParticipants">
                                    <h3>Raspberry BackEnd</h3>
                                    <ul>
                                        <li>Anahel Gines Delgado Almeida</li>
                                        <li>Alexis Felipe Rodriguez</li>
                                        <li>Flavio Melián Santana</li>
                                        <li>Gabriel Marrero Rivero</li>
                                        <li>Javier Rodriguez Castellano</li>
                                        <li>Jose María Garcia Morales</li>
                                        <li>Rayco Santana</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutUs;
