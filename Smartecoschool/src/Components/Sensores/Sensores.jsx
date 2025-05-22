import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { obtenerDatosSensores } from "./procesarDatos";
import "./Sensores.css";

Chart.register(...registerables);

const GraficasSensores = () => {
    const aguaChartRef = useRef(null);
    const luzChartRef = useRef(null);
    const aguaCanvasRef = useRef(null);
    const luzCanvasRef = useRef(null);
    const [temperatura, setTemperatura] = useState(null);
    const [humedad, setHumedad] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const datos = await obtenerDatosSensores();

                setTemperatura(datos.temperatura);
                setHumedad(datos.humedad);

                // Eliminar instancias previas si existen
                if (aguaChartRef.current) {
                    aguaChartRef.current.destroy();
                }
                if (luzChartRef.current) {
                    luzChartRef.current.destroy();
                }

                // Crear gráfica de Agua
                aguaChartRef.current = new Chart(aguaCanvasRef.current, {
                    type: "line",
                    data: {
                        labels: datos.agua.labels,
                        datasets: [
                            {
                                label: "Agua (m³)",
                                data: datos.agua.medidas,
                                borderColor: "blue",
                                backgroundColor: "rgba(0, 0, 255, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: { display: true, text: "Consumo de Agua" },
                        },
                    },
                });

                // Crear gráfica de Luz
                luzChartRef.current = new Chart(luzCanvasRef.current, {
                    type: "line",
                    data: {
                        labels: datos.luz.labels,
                        datasets: [
                            {
                                label: "Luz (intensidad/día)",
                                data: datos.luz.medidas,
                                borderColor: "orange",
                                backgroundColor: "rgba(255, 165, 0, 0.2)",
                                fill: true,
                                tension: 0.4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: { display: true, text: "Intensidad de Luz" },
                        },
                    },
                });
            } catch (err) {
                console.error("Error al cargar los datos:", err);
                setError("Error al cargar los datos de sensores.");
            }
        };

        cargarDatos();

        // Cleanup para evitar múltiples instancias de Chart
        return () => {
            if (aguaChartRef.current) aguaChartRef.current.destroy();
            if (luzChartRef.current) luzChartRef.current.destroy();
        };
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div className="sensores">
            <div className="sensores_container">
                <div className="sensor-agua">
                    <h2>Gráfica de Agua</h2>
                    <canvas ref={aguaCanvasRef} />
                </div>

                <div className="sensor-luz">
                    <h2>Gráfica de Luz</h2>
                    <canvas ref={luzCanvasRef} />
                </div>
            </div>
            <div className="sensor-temp-hum">
                <p>Temperatura: {temperatura.medidas} Cº</p>
                <p>Humedad: {humedad.medidas} %</p>
            </div>
        </div>
    );
};

export default GraficasSensores;
