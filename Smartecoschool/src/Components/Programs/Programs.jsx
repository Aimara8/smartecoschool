import React from 'react'
import './Programs.css'
import contadorAgua from '../../assets/contadorAgua.png'
import contadorLuz from '../../assets/teclado.jpg'
import raspberry from '../../assets/chip.jpg'

const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={contadorAgua} alt="" />
                <div className='caption'>
                    <p>La base de este proyecto se cimienta en las tecnologias de reconocimientos de caracteres como podrian ser las aportadas por Google o Azure o las librerias de Tesseract y OpenCV.</p>
                </div>
            </div>
            <div className="program">
                <img src={contadorLuz} alt="" />
                <div className='caption'>
                    <p>La base de este proyecto se cimienta en las tecnologias de reconocimientos de caracteres como podrian ser las aportadas por Google o Azure o las librerias de Tesseract y OpenCV.</p>
                </div>
            </div>
            <div className="program">
                <img src={raspberry} alt="" />
                <div className='caption'>
                    <p>Usando una Raspberry Pi 4, instalamos una cámara con sensores infrarrojos para poder tomar fotos de los contadores incluso en condiciones de poca luz.</p>
                </div>
            </div>
        </div>
    )
}

export default Programs