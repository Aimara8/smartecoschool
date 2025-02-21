import React from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-button.png';
import back_icon from '../../assets/back-button.png';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const Testimonials = () => {
    const { t } = useTranslation();
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 33.33;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 33.33;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    // Función para iniciar el arrastre
    const startDragging = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    // Función para detener el arrastre
    const stopDragging = () => {
        setIsDragging(false);
    };

    // Función para arrastrar
    const onDragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li className='dot'>
                        <div className="slide"
                            onTouchStart={(e) => startDragging(e.touches[0])}
                            onTouchEnd={stopDragging}
                            onTouchMove={(e) => onDragging(e.touches[0])}
                        >
                            <div className="user-info">
                                <h3>{t('testimonials.smartHomes.title')}</h3>
                            </div>
                            <p>{t('testimonials.smartHomes.description')}</p>
                            <br />
                            <ul id='use-case-ul'>
                                <p><b>{t('testimonials.smartHomes.benefits')}</b></p>
                                <li className='use-case-li'><span>{t('testimonials.smartHomes.benefit1')}</span></li>
                                <li className='use-case-li'><span>{t('testimonials.smartHomes.benefit2')}</span></li>
                                <li className='use-case-li'><span>{t('testimonials.smartHomes.benefit3')}</span></li>
                            </ul>
                        </div>
                    </li>
                    <li className='dot'>
                        <div className="slide">
                            <div className="user-info">
                                <h3>{t('testimonials.commercialBuildings.title')}</h3>
                            </div>
                            <p>{t('testimonials.commercialBuildings.description')}</p>
                            <br />
                            <ul id='use-case-ul'>
                                <p><b>{t('testimonials.commercialBuildings.benefits')}</b></p>
                                <li className='use-case-li'><span>{t('testimonials.commercialBuildings.benefit1')}</span></li>
                                <li className='use-case-li'><span>{t('testimonials.commercialBuildings.benefit2')}</span></li>
                                <li className='use-case-li'><span>{t('testimonials.commercialBuildings.benefit3')}</span></li>
                            </ul>
                        </div>
                    </li>
                    <li className='dot'>
                        <div className="slide">
                            <div className="user-info">
                                <h3>{t('testimonials.publicSpaces.title')}</h3>
                            </div>
                            <p>{t('testimonials.publicSpaces.description')}</p>
                            <br />
                            <ul id='use-case-ul'>
                                <p><b>{t('testimonials.publicSpaces.benefits')}</b></p>
                                <li className='use-case-li'><span>{t('testimonials.publicSpaces.benefit1')}</span></li>
                                <li className='use-case-li'><span>{t('testimonials.publicSpaces.benefit2')}</span></li>
                                <li className='use-case-li'><span>{t('testimonials.publicSpaces.benefit3')}</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;