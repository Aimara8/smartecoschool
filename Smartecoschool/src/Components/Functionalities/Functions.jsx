import { useState } from 'react';
import Modal from "../Modal/Modal.jsx";
import './Functions.css';
import monitor from '../../assets/monitor.jpg';
import raspberryPi from '../../assets/Raspberry_Pi.jpg';
import camara from '../../assets/camara.jpg';
import sensorFlujo from '../../assets/sensorflujo.jpg';
import sensorCorriente from '../../assets/sensorcorriente1.jpg';
import modulo from '../../assets/modulo.jpg';
import { useTranslation } from 'react-i18next';

const Programs = () => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalOpen(true);
    };

    const images = [raspberryPi, camara, monitor, sensorFlujo, sensorCorriente, modulo];

    return (
        <div className='programs'>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} {...modalContent} />
            <div className='text'>
                <p>{t('about.description1')}</p>
            </div>
            <div className='programs-container'>
                {t('functions', { returnObjects: true }).map((func, index) => (
                    <div className="program" key={index}>
                        <img src={images[index]} alt={func.name} />
                        <div className='caption'>
                            <h3>{func.name}</h3>
                            <p>{func.description}</p>
                            <button className='caption-button' onClick={() => openModal(func.name, func.detail)}>{t('more.more')}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;
