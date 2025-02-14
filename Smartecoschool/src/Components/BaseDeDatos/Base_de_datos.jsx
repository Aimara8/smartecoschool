import { useEffect, useState, useCallback } from "react"
import axios from "axios"
import { Chart, registerables } from "chart.js"
import "./Base_de_datos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faTint } from "@fortawesome/free-solid-svg-icons"

Chart.register(...registerables)

const Base_de_datos = () => {
  const [luzData, setLuzData] = useState({ labels: [], consumo: [] })
  const [aguaData, setAguaData] = useState({ labels: [], consumo: [] })
  const [luzChart, setLuzChart] = useState(null)
  const [aguaChart, setAguaChart] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Función mejorada para procesar los datos diarios
  const procesarDatosDiarios = useCallback((data) => {
    const datosPorDia = {}

    // Agrupar los datos por día
    data.forEach((item) => {
      const fecha = new Date(item.fecha)
      const dia = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`

      if (!datosPorDia[dia]) {
        datosPorDia[dia] = {
          consumoInicial: Number.parseFloat(item.consumo),
          consumoFinal: Number.parseFloat(item.consumo),
          lecturas: [Number.parseFloat(item.consumo)],
        }
      } else {
        datosPorDia[dia].consumoFinal = Number.parseFloat(item.consumo)
        datosPorDia[dia].lecturas.push(Number.parseFloat(item.consumo))
      }
    })

    // Calcular el consumo diario
    const datosDiarios = Object.keys(datosPorDia)
      .map((dia) => ({
        fecha: dia,
        consumoDiario: datosPorDia[dia].consumoFinal - datosPorDia[dia].consumoInicial,
        lecturas: datosPorDia[dia].lecturas,
      }))
      .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))

    return {
      labels: datosDiarios.map((item) => item.fecha),
      consumo: datosDiarios.map((item) => item.consumoDiario),
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null) // Reiniciar el estado de error
      try {
        // Obtener datos de luz
        const luzResponse = await axios.get("http://192.168.100.20:8888/api/medidas/1")
        const luzDatosProcesados = procesarDatosDiarios(luzResponse.data)
        setLuzData(luzDatosProcesados)

        // Obtener datos de agua
        const aguaResponse = await axios.get("http://192.168.100.20:8888/api/medidas/2")
        const aguaDatosProcesados = procesarDatosDiarios(aguaResponse.data)
        setAguaData(aguaDatosProcesados)
      } catch (error) {
        setError("Error al cargar los datos. Intenta nuevamente más tarde.")
        console.error("Error al obtener los datos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [procesarDatosDiarios])

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
    })
  }

  useEffect(() => {
    if (!isLoading && luzData.labels.length > 0 && aguaData.labels.length > 0) {
      const ctxLuz = document.getElementById("luzChart")?.getContext("2d")
      const ctxAgua = document.getElementById("aguaChart")?.getContext("2d")

      if (ctxLuz && ctxAgua) {
        // Crear o actualizar el gráfico de Luz
        if (luzChart) {
          luzChart.data.labels = luzData.labels
          luzChart.data.datasets[0].data = luzData.consumo
          luzChart.update()
        } else {
          const newLuzChart = createChart(ctxLuz, luzData.labels, luzData.consumo, "Consumo de Luz (kWh)", "rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 0.2)")
          setLuzChart(newLuzChart)
        }

        // Crear o actualizar el gráfico de Agua
        if (aguaChart) {
          aguaChart.data.labels = aguaData.labels
          aguaChart.data.datasets[0].data = aguaData.consumo
          aguaChart.update()
        } else {
          const newAguaChart = createChart(ctxAgua, aguaData.labels, aguaData.consumo, "Consumo de Agua (m³)", "rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 0.2)")
          setAguaChart(newAguaChart)
        }
      }
    }
  }, [luzData, aguaData, isLoading, luzChart, aguaChart])

  if (isLoading) {
    return <div>Cargando datos...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="base_de_datos">
      <h1>Gráficos de Consumo:</h1>
      <div className="charts-container">
        <div className="chart-card">
          <div className="chart-header">
            <FontAwesomeIcon icon={faLightbulb} className="chart-icon" />
            <h2>Consumo de Luz</h2>
          </div>
          <div className="chart-wrapper">
            <canvas id="luzChart"></canvas>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <FontAwesomeIcon icon={faTint} className="chart-icon" />
            <h2>Consumo de Agua</h2>
          </div>
          <div className="chart-wrapper">
            <canvas id="aguaChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Base_de_datos
