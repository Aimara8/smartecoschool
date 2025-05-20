import React, { useState, useCallback, useEffect } from 'react';
import axios from "axios";

const Sensores = () => {

    const [temperaturaData, settemperaturaData] = useState({ labels: [], medidas: [] });
    const [humedadData, sethumedadData] = useState({ labels: [], medidas: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para procesar los datos diarios
    const procesarDatosDiarios = useCallback((data) => {
        const datosPorDia = {};

        // Agrupar los datos por día y seleccionar el último registro del día
        data.forEach((item) => {
            const fecha = new Date(item.fecha);
            const dia = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;

            // Si ya existe un registro para este día, comparamos las horas
            if (datosPorDia[dia]) {
                const fechaExistente = new Date(datosPorDia[dia].fecha);
                if (fecha > fechaExistente) {
                    datosPorDia[dia] = { fecha: item.fecha, medidas: Number.parseFloat(item.medidas) };
                }
            } else {
                // Si no existe, lo agregamos
                datosPorDia[dia] = { fecha: item.fecha, medidas: Number.parseFloat(item.medidas) };
            }
        });

        // Convertir el objeto a un array y ordenarlo por fecha
        const datosDiarios = Object.keys(datosPorDia)
            .map((dia) => ({
                fecha: dia,
                medidas: datosPorDia[dia].medidas,
            }))
            .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

        // Calcular el medidas diario
        const medidasDiario = datosDiarios.map((item, index) => {
            if (index === 0) {
                return { fecha: item.fecha, medidasDiario: 0 }; // El primer día no tiene medidas diario
            } else {
                const medidasAnterior = datosDiarios[index - 1].medidas;
                return { fecha: item.fecha, medidasDiario: item.medidas - medidasAnterior };
            }
        });

        return {
            labels: medidasDiario.map((item) => item.fecha),
            medidas: medidasDiario.map((item) => item.medidasDiario),
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reiniciar el estado de error
            try {
                // Obtener datos de temperatura y humedad
                const response = await axios.get("http://escritorios.ieselrincon.es:3306/api/medidas");
                const TempDatosProcesados = procesarDatosDiarios(response.data.filter((temp) => {
                    return temp.idSensor == 5
                }));

                console.log(TempDatosProcesados)
                const humDatosProcesados = procesarDatosDiarios(response.data.filter((hum) => {
                    return hum.idSensor == 6
                }));


                settemperaturaData(TempDatosProcesados)
                sethumedadData(humDatosProcesados)
            } catch (error) {
                setError("Error al cargar los datos. Intenta nuevamente más tarde.");
                console.error("Error al obtener los datos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [procesarDatosDiarios]);

    
    return (
        <div>
            <p>Temperatura: {temperaturaData.medidas}</p>
            <p>Humedad: {humedadData.medidas}</p>
        </div>
    )
}

export default Sensores