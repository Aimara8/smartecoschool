import { useState } from 'react' 
import Modal from "../Modal/Modal.jsx"
import './Programs.css'
import monitor from '../../assets/monitor.jpg'
import raspberryPi from '../../assets/Raspberry_Pi.jpg'
import camara from '../../assets/camara.jpg'
import sensorFlujo from '../../assets/sensorflujo.jpg'
import sensorCorriente from '../../assets/sensorcorriente1.jpg'
import modulo from '../../assets/modulo.jpg'

const Programs = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalOpen(true);
    };

    return (
        <div className='programs'>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} {...modalContent} />
            <div className='text'>
                <p>Nuestro software monitoriza en tiempo real los contadores de agua y luz del centro, registrando y mostrando el consumo total de estos recursos. Con esta herramienta, buscamos fomentar un uso más eficiente y consciente, contribuyendo a un manejo responsable de la energía y el agua.</p>
            </div>
            <div className='programs-container'>
                {/* Raspberry Pi */}
                <div className="program">
                    <img src={raspberryPi} alt="Raspberry Pi" />
                    <div className='caption'>
                        <h3>Raspberry PI</h3>
                        <p>El cerebro del sistema. Recopila y analiza datos de consumo, generando informes en tiempo real para optimizar el uso de recursos.</p>
                        <button className='caption-button' onClick={() => openModal('Raspberry PI',
                            'Es un microordenador compacto y de bajo consumo, ideal para proyectos de automatización, monitoreo y aprendizaje de programación.')}>Ver más</button>
                    </div>
                </div>

                {/* Cámara */}
                <div className="program">
                    <img src={camara} alt="Cámara" />
                    <div className='caption'>
                        <h3>Cámara</h3>
                        <p>Captura imágenes de los contadores, permitiendo un seguimiento preciso del consumo.</p>
                        <button className='caption-button' onClick={() => openModal('Cámara OV5647',
                            'Sensor de 5MP, 1080P, compatible con Raspberry Pi, con visión nocturna y lente ojo de pez de gran angular.')}>Ver más</button>
                    </div>
                </div>

                {/* Monitores */}
                <div className="program">
                    <img src={monitor} alt="Monitor" />
                    <div className='caption'>
                        <h3>Monitores</h3>
                        <p>Muestran datos en tiempo real para fomentar conciencia y promover prácticas responsables.</p>
                        <button className='caption-button' onClick={() => openModal('Monitor Full HD',
                            'Monitores de 24" con HDMI, VGA y DisplayPort, diseñados para bajo consumo energético y alta durabilidad.')}>Ver más</button>
                    </div>
                </div>

                {/* Sensor de Caudal */}
                <div className="program">
                    <img src={sensorFlujo} alt="Sensor de Caudal" />
                    <div className='caption'>
                        <h3>Sensor de Caudal</h3>
                        <p>Mide la cantidad de agua que pasa a través de él con un rotor interno.</p>
                        <button className='caption-button' onClick={() => openModal('Sensor de Caudal YF-B1-S',
                            'Mide el flujo de líquidos con un rotor interno que genera pulsos proporcionales al caudal.')}>Ver más</button>
                    </div>
                </div>

                {/* Sensor de Corriente */}
                <div className="program">
                    <img src={sensorCorriente} alt="Sensor de Corriente" />
                    <div className='caption'>
                        <h3>Sensor de Corriente</h3>
                        <p>Permite medir corriente alterna sin contacto directo con el circuito.</p>
                        <button className='caption-button' onClick={() => openModal('Sensor de Corriente AC SCT-013',
                            'Mide corriente alterna sin contacto directo, ideal para monitoreo energético y control de consumo eléctrico.')}>Ver más</button>
                    </div>
                </div>

                {/* Módulo */}
                <div className="program">
                    <img src={modulo} alt="Módulo RPICT3T1" />
                    <div className='caption'>
                        <h3>Módulo</h3>
                        <p>Diseñado para trabajar con Raspberry Pi, midiendo corriente y temperatura.</p>
                        <button className='caption-button' onClick={() => openModal('Módulo RPICT3T1',
                            'Permite registrar valores de corriente y temperatura en tiempo real, ideal para gestión energética.')}>Ver más</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;
