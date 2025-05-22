import React, { useState, useEffect } from "react";
import { obtenerDatosSensores } from "./procesarDatos";
import { Line } from "react-chartjs-2";
import "./Sensores.css";

const Sensores = () => {
  const [datosFiltrados, setDatosFiltrados] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const datos = await obtenerDatosSensores();

        // Filtrar los datos directamente desde "datos"
        const filtrados = ["agua", "luz"].reduce((id, sensor) => {
          if (datos[sensor]) {
            id[sensor] = datos[sensor];
          }
          return id;
        }, {});

        setDatosFiltrados(filtrados);
      } catch (error) {
        setError("Error al cargar los datos. Intenta nuevamente más tarde.");
        console.error("Error al cargar los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Cargando datos...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="sensores">
      <h2>Datos de Sensores</h2>
      <div className="graficas">
        {["agua", "luz"].map((sensor) => {
          // Validar si los datos del sensor están disponibles
          if (!datosFiltrados || !datosFiltrados[sensor]) {
            return (
              <div key={sensor} className="grafica">
                <h3>{sensor.charAt(0).toUpperCase() + sensor.slice(1)}</h3>
                <p>No hay datos disponibles para este sensor.</p>
              </div>
            );
          }

          return (
            <div key={sensor} className="grafica">
              <h3>{sensor.charAt(0).toUpperCase() + sensor.slice(1)}</h3>
              <Line
                data={{
                  labels: datosFiltrados[sensor].labels,
                  datasets: [
                    {
                      label: `Medidas de ${sensor}`,
                      data: datosFiltrados[sensor].medidas,
                      borderColor:
                        sensor === "agua"
                          ? "rgba(54, 162, 235, 1)"
                          : "rgba(75, 192, 192, 1)",
                      backgroundColor:
                        sensor === "agua"
                          ? "rgba(54, 162, 235, 0.2)"
                          : "rgba(75, 192, 192, 0.2)",
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: `Medidas de ${sensor}`,
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: sensor === "agua" ? "m³" : "kWh",
                      },
                    },
                    x: {
                      title: {
                        display: true,
                        text: "Fecha",
                      },
                    },
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sensores;
