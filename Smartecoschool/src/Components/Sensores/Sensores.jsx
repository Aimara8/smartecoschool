import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import { obtenerDatosSensores } from "./procesarDatos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faWater,
  faTint,
  faLightbulb,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import "./Sensores.css";

Chart.register(...registerables);

const GraficasSensores = () => {
  const aguaChartRef = useRef(null);
  const luzChartRef = useRef(null);
  const aguaCanvasRef = useRef(null);
  const luzCanvasRef = useRef(null);
  const [temperatura, setTemperatura] = useState({ medidas: "Cargando..." });
  const [humedad, setHumedad] = useState({ medidas: "Cargando..." });
  const [dioxido, setDioxido] = useState({ medidas: "Cargando..." });
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const cargarDatos = async () => {
      try {
        const datos = await obtenerDatosSensores();

        setTemperatura(datos.temperatura);
        setHumedad(datos.humedad);
        setDioxido(datos.dioxido);

        if (aguaChartRef.current) aguaChartRef.current.destroy();
        if (luzChartRef.current) luzChartRef.current.destroy();

        const maxPuntos = 7;

        if (datos.agua && datos.agua.labels && datos.agua.medidas) {
          const labelsAgua = datos.agua.labels.slice(-maxPuntos);
          const dataAgua = datos.agua.medidas.slice(-maxPuntos);

          aguaChartRef.current = new Chart(aguaCanvasRef.current, {
            type: "line",
            data: {
              labels: labelsAgua,
              datasets: [{
                label: "Agua (m³)",
                data: dataAgua,
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                fill: true,
                tension: 0.4,
              }],
            },
            options: {
              responsive: true,
              plugins: {
                title: { display: true, text: "Consumo de Agua" },
              },
            },
          });
        }

        if (datos.luz && datos.luz.labels && datos.luz.medidas) {
          const labelsLuz = datos.luz.labels.slice(-maxPuntos);
          const dataLuz = datos.luz.medidas.slice(-maxPuntos);

          luzChartRef.current = new Chart(luzCanvasRef.current, {
            type: "line",
            data: {
              labels: labelsLuz,
              datasets: [{
                label: "Luz (kWh)",
                data: dataLuz,
                borderColor: "orange",
                backgroundColor: "rgba(255, 165, 0, 0.2)",
                fill: true,
                tension: 0.4,
              }],
            },
            options: {
              responsive: true,
              plugins: {
                title: { display: true, text: "Intensidad de Luz" },
              },
            },
          });
        }

      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError("Error al cargar los datos de sensores.");
      }
    };

    // Llamada inicial
    cargarDatos();

    // Establecer intervalo para recarga automática
    intervalId = setInterval(cargarDatos, 60000); // 60 segundos

    // Limpieza
    return () => {
      clearInterval(intervalId);
      if (aguaChartRef.current) aguaChartRef.current.destroy();
      if (luzChartRef.current) luzChartRef.current.destroy();
    };
  }, []);


  if (error) return <p>{error}</p>;

  return (
    <div className="sensores">
      <div className="sensores_container">
        <div className="sensor-agua">
          <h2>
            <FontAwesomeIcon icon={faTint} /> Gráfica de Agua
          </h2>
          <canvas ref={aguaCanvasRef} />
        </div>

        <div className="sensor-luz">
          <h2>
            <FontAwesomeIcon icon={faLightbulb} /> Gráfica de Luz
          </h2>
          <canvas ref={luzCanvasRef} />
        </div>
      </div>
      <div className="sensor-temp-hum">
        {!temperatura || temperatura.medidas === undefined ? (
          <p>
            <FontAwesomeIcon icon={faTemperatureHigh} /> No se detectó
            temperatura
          </p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faTemperatureHigh} /> Temperatura:{" "}
            {temperatura.medidas} Cº
          </p>
        )}
        {!humedad || humedad.medidas === undefined ? (
          <p>
            <FontAwesomeIcon icon={faWater} /> No se detectó humedad
          </p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faTint} /> Humedad: {humedad.medidas} %
          </p>
        )}
        {!dioxido || dioxido.medidas === undefined ? (
          <p><FontAwesomeIcon icon={faLeaf} /> No se detectó Co2</p>
        ) : (
          <p><FontAwesomeIcon icon={faLeaf} /> Co2: {dioxido.medidas} ppm</p>
        )}
      </div>
    </div>
  );
};

export default GraficasSensores;
