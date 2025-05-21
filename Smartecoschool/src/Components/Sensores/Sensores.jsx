import React, { useState, useCallback, useEffect } from 'react';
import axios from "axios";
import "./Sensores.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf, faDroplet } from "@fortawesome/free-solid-svg-icons";

const Sensores = () => {

    const [temperaturaData, settemperaturaData] = useState({ labels: [], medidas: [] });
    const [humedadData, sethumedadData] = useState({ labels: [], medidas: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reiniciar el estado de error
            try {
                // Obtener datos de temperatura y humedad
                const response = await axios.get("http://escritorios.ieselrincon.es:3306/api/medidas");

                // Filtrar y ordenar los datos de temperatura y humedad
                const tempFiltrados = response.data.filter((temp) => temp.idSensor == 5);
                const tempOrdenados = tempFiltrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
                const ultimoRegistroTemp = tempOrdenados.at(-1);

                const humFiltrados = response.data.filter((temp) => temp.idSensor == 6);
                const humOrdenados = humFiltrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
                const ultimoRegistroHum = humOrdenados.at(-1);


                settemperaturaData(ultimoRegistroTemp)
                sethumedadData(ultimoRegistroHum)
            } catch (error) {
                setError("Error al cargar los datos. Intenta nuevamente más tarde.");
                console.error("Error al obtener los datos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='sensores'>
            <h2>{new Date(temperaturaData.fecha).toLocaleDateString()}</h2>
            {isLoading && <p>Cargando datos...</p>}
            {error && <p className='error-message'>{error}</p>}
            <div className='sensores_container'>
                <div className='sensores_temp'>
                    <FontAwesomeIcon icon={faTemperatureHalf} className='icono_temp' />
                    <p>Temperatura: {temperaturaData.medidas} °C</p>
                </div>
                <div className='sensores_hum'>
                    <FontAwesomeIcon icon={faDroplet} className='icono_hum' />
                    <p>Humedad: {humedadData.medidas} %</p>
                </div>
            </div>
        </div>
    )
}

export default Sensores