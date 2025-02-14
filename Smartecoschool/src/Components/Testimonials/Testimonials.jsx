import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-button.png'
import back_icon from '../../assets/back-button.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user1.jpg'
import { useRef } from 'react'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 33.33;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 33.33;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>

            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <h3>Hogares inteligentes</h3>
                            </div>
                            <p>Los hogares inteligentes están transformando la manera en que consumimos recursos como la luz y el agua. Nuestro sistema IoT combina sensores avanzados, inteligencia artificial y una interfaz fácil de usar para garantizar que los residentes tengan un control total sobre su consumo energético. A través de la aplicación móvil, los usuarios pueden programar horarios para las luces, monitorear el uso de agua en tiempo real y recibir recomendaciones personalizadas basadas en su historial de consumo. <br/><br/> Además, los sensores inteligentes detectan hábitos cotidianos para ajustar automáticamente el sistema. Por ejemplo, si detectan que la casa está vacía, apagan las luces y ajustan el termostato, evitando el desperdicio. Esto no solo contribuye al ahorro económico, sino que también minimiza el impacto ambiental.</p>
                            <br />
                            <p><b>Beneficios:</b></p>
                            <ul className='use-case-ul'>
                                <li><span>Ahorro del 25-40% en facturas de agua y electricidad.</span></li>
                                <li><span>Control remoto de dispositivos como luces y termostatos.</span></li>
                                <li><span>Alertas en caso de fugas de agua o uso excesivo.</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <h3>Edificios Comerciales</h3>
                            </div>
                            <p>Los edificios comerciales inteligentes están revolucionando la gestión de recursos al integrar tecnología IoT para un control eficiente de la luz y el agua. Nuestro sistema permite la automatización de la iluminación y la climatización, ajustándose según la ocupación de los espacios y las condiciones ambientales. Esto no solo optimiza el consumo energético, sino que también mejora la comodidad de los empleados y visitantes. <br/><br/>A través de una plataforma centralizada, los administradores pueden monitorear en tiempo real el consumo de agua y energía, recibir alertas de posibles anomalías y aplicar configuraciones personalizadas para maximizar la eficiencia operativa.</p>
                            <br />
                            <p><b>Beneficios:</b></p>
                            <ul className='use-case-ul'>
                                <li><span>Reducción del 30-50% en costos de energía y agua.</span></li>
                                <li><span>Automatización del control de iluminación y climatización según la ocupación.</span></li>
                                <li><span>Monitoreo en tiempo real con alertas de fugas de agua o uso anómalo de energía.</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <h3>Espacios Públicos Sostenibles</h3>
                            </div>
                            <p>Los espacios públicos, como parques, plazas y áreas recreativas, pueden beneficiarse enormemente de los sistemas inteligentes de gestión de recursos. Nuestro sistema IoT optimiza la iluminación pública ajustando su intensidad según la hora del día y la presencia de personas, lo que mejora la seguridad y reduce el consumo energético. Asimismo, los sistemas de riego se controlan de forma automatizada teniendo en cuenta factores climáticos como la humedad del suelo y las previsiones meteorológicas, evitando el desperdicio de agua y asegurando un uso más responsable de los recursos naturales.</p>
                            <br />
                            <p><b>Beneficios:</b></p>
                            <ul className='use-case-ul'>
                                <li><span>Ahorro de hasta un 40% en el consumo de agua gracias al riego inteligente adaptado a las condiciones climáticas.</span></li>
                                <li><span>Reducción significativa de costos en iluminación pública, al ajustar automáticamente la intensidad lumínica.</span></li>
                                <li><span>Mejora de la seguridad ciudadana mediante la activación de luces en respuesta a la presencia de personas en zonas específicas.</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials