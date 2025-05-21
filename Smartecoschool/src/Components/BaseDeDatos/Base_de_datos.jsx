import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import "./Base_de_datos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faTint } from "@fortawesome/free-solid-svg-icons";
import Sensores from '../Sensores/Sensores'

Chart.register(...registerables);

const Base_de_datos = () => {
  const [luzData, setLuzData] = useState({ labels: [], medidas: [] });
  const [aguaData, setAguaData] = useState({ labels: [], medidas: [] });
  const [luzChart, setLuzChart] = useState(null);
  const [aguaChart, setAguaChart] = useState(null);
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
        // Obtener datos de luz
        const response = await axios.get("http://escritorios.ieselrincon.es:3306/api/medidas");
        const luzDatosProcesados = procesarDatosDiarios(response.data.filter((luz) => {
          return luz.idSensor == 1
        }));

        const aguaDatosProcesados = procesarDatosDiarios(response.data.filter((agua) => {
          return agua.idSensor == 2
        }));


        setLuzData(luzDatosProcesados)
        setAguaData(aguaDatosProcesados)
      } catch (error) {
        setError("Error al cargar los datos. Intenta nuevamente más tarde.");
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [procesarDatosDiarios]);

  const createChart = (ctx, labels, data, chartLabel, borderColor, backgroundColor) => {
    return new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: chartLabel,
            data: data,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: chartLabel,
            color: "#333",
            font: {
              size: 16,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: chartLabel.split(" ")[2] + " (kWh)",
              color: "#333",
              font: {
                size: 14,
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#333",
              font: {
                size: 12,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: "Fecha",
              color: "#333",
              font: {
                size: 14,
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              color: "#333",
              font: {
                size: 12,
              },
              maxRotation: 45,
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    if (!isLoading && luzData.labels.length > 0 && aguaData.labels.length > 0) {
      const ctxLuz = document.getElementById("luzChart")?.getContext("2d");
      const ctxAgua = document.getElementById("aguaChart")?.getContext("2d");

      if (ctxLuz && ctxAgua) {
        // Crear o actualizar el gráfico de Luz
        if (luzChart) {
          luzChart.data.labels = luzData.labels;
          luzChart.data.datasets[0].data = luzData.medidas;
          luzChart.update();
        } else {
          const newLuzChart = createChart(
            ctxLuz,
            luzData.labels,
            luzData.medidas,
            "medidas de Luz (kWh)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 0.2)"
          );
          setLuzChart(newLuzChart);
        }

        // Crear o actualizar el gráfico de Agua
        if (aguaChart) {
          aguaChart.data.labels = aguaData.labels;
          aguaChart.data.datasets[0].data = aguaData.medidas;
          aguaChart.update();
        } else {
          const newAguaChart = createChart(
            ctxAgua,
            aguaData.labels,
            aguaData.medidas,
            "medidas de Agua (m³)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 0.2)"
          );
          setAguaChart(newAguaChart);
        }
      }
    }
  }, [luzData, aguaData, isLoading, luzChart, aguaChart]);

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="base_de_datos">
      <h1>Gráficos de medidas:</h1>
      <div className="charts-container">
        <div className="chart-card">
          <div className="chart-header">
            <FontAwesomeIcon icon={faLightbulb} className="chart-icon" />
            <h2>medidas de Luz</h2>
          </div>
          <div className="chart-wrapper">
            <canvas id="luzChart"></canvas>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <FontAwesomeIcon icon={faTint} className="chart-icon" />
            <h2>medidas de Agua</h2>
          </div>
          <div className="chart-wrapper">
            <canvas id="aguaChart"></canvas>
          </div>
        </div>
      </div>
      <div>
        <Sensores/>
      </div>
    </div>
  );
};

export default Base_de_datos;