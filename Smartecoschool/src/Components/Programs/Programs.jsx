import React from 'react'
import './Programs.css'
import contadorAgua from '../../assets/contadorAgua.png'
import contadorLuz from '../../assets/teclado.jpg'
import raspberry from '../../assets/chip.jpg'

const Programs = () => {
    return (
        <div className='programs'>
            <div className='text'>
                <p>Nuestro software monitoriza en tiempo real los contadores de agua y luz del centro, registrando y mostrando el consumo total de estos recursos. Con esta herramienta, buscamos fomentar un uso más eficiente y consciente, contribuyendo a un manejo responsable de la energía y el agua.</p>
            </div>
            <div className='programs-container'>
                <div className="program">
                    <img src={contadorAgua} alt="" />
                    <div className='caption'>
                        <h3>Raspberry PI</h3><br />
                        <p>El cerebro del sistema. Recopila y analiza datos de consumo, generando informes en tiempo real para optimizar el uso de recursos.</p>
                    </div>
                </div>
                <div className="program">
                    <img src={contadorLuz} alt="" />
                    <div className='caption'>
                        <h3>Cámaras</h3><br />
                        <p>Capturan imágenes periódicas de los contadores, permitiendo un seguimiento preciso y automático del consumo.</p>
                    </div>
                </div>
                <div className="program">
                    <img src={raspberry} alt="" />
                    <div className='caption'>
                        <h3>Monitores</h3><br />
                        <p>Muestran datos en tiempo real, fomentando la conciencia sobre el consumo y promoviendo prácticas responsables.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs