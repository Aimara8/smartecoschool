import React from 'react'
import './About.css'
import contadorLuz from '../../assets/teclado.jpg'

const About = ({ setPlayerState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={contadorLuz} alt="" className='about-img' />
                <svg xmlns="http://www.w3.org/2000/svg" className='play-icon' width="60" height="60" fill="currentColor" viewBox="0 0 16 16"
                    onClick={() => setPlayerState(true)}>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                </svg>
            </div>
            <div className="about-right">
                <h3>Objetivos</h3>
                <h2>Innovando para un Futuro Sostenible</h2>
                <p>Estamos inmersos en un proyecto ambicioso que trasciende las líneas de código y las interfaces de usuario. Nos hemos propuesto desarrollar un sistema avanzado para el control eficiente del consumo de agua y luz, utilizando la tecnología como un pilar clave para fomentar prácticas sostenibles y responsables.</p>
                <p>Además, como parte de nuestra visión de innovación, incorporaremos elementos de edificios inteligentes, explorando la domotización en un aula. Este enfoque nos permitirá no solo optimizar el uso de recursos, sino también crear espacios más conectados, cómodos y eficientes, alineados con las necesidades del futuro.</p>
                <p>Estamos convencidos de que la tecnología no es solo una herramienta, sino un catalizador para generar conciencia y actuar de manera responsable hacia nuestro planeta. Juntos, podemos marcar la diferencia.</p>
            </div>
        </div>
    )
}

export default About