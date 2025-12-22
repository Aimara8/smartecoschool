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
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

Chart.register(...registerables);

const GraficasSensores = () => {

  const { t } = useTranslation();

  const aguaChartRef = useRef(null);
  const luzChartRef = useRef(null);
  const aguaCanvasRef = useRef(null);
  const luzCanvasRef = useRef(null);
  const [temperatura, setTemperatura] = useState({ medidas: t('loading.message') + '...' });
  const [humedad, setHumedad] = useState({ medidas: t('loading.message') + '...' });
  const [dioxido, setDioxido] = useState({ medidas: t('loading.message') + '...' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;

    const cargarDatos = async () => {
      setLoading(true);
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
                label: t("sensors.water") + " (m³)",
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
                title: { display: true, text: t("sensors.waterConsumption") },
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
                label: t("sensors.light") + " (kWh)",
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
                title: { display: true, text: t("sensors.lightConsumption") },
              },
            },
          });
        }

      } catch (err) {
        console.error("Error al cargar los datos:", err);
        navigate("/error");
      } finally {
        setLoading(false);
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
          {loading && (
            <div className="chart-loading">
              <Loading />
            </div>
          )}
          <h2>
            <FontAwesomeIcon icon={faTint} /> {t("sensors.waterGraph")}
          </h2>
          <canvas ref={aguaCanvasRef} />
        </div>

        <div className="sensor-luz">
          {loading && (
            <div className="chart-loading">
              <Loading />
            </div>
          )}
          <h2>
            <FontAwesomeIcon icon={faLightbulb} /> {t("sensors.lightGraph")}
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
            <FontAwesomeIcon icon={faTemperatureHigh} /> {t("sensors.temperature")}:{" "}
            {temperatura.medidas} Cº
          </p>
        )}
        {!humedad || humedad.medidas === undefined ? (
          <p>
            <FontAwesomeIcon icon={faWater} /> No se detectó humedad
          </p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faTint} /> {t("sensors.humidity")}: {humedad.medidas} %
          </p>
        )}
        {!dioxido || dioxido.medidas === undefined ? (
          <p><FontAwesomeIcon icon={faLeaf} /> No se detectó Co2</p>
        ) : (
          <p><FontAwesomeIcon icon={faLeaf} /> {t("sensors.co2")}: {dioxido.medidas} ppm</p>
        )}
      </div>
    </div>
  );
};

export default GraficasSensores;
