import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import './Base_de_datos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTint } from '@fortawesome/free-solid-svg-icons';

Chart.register(...registerables);

const Base_de_datos = () => {
  const [data, setData] = useState([]);
  const [luzChart, setLuzChart] = useState(null);
  const [aguaChart, setAguaChart] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5003/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const luzData = data.filter(item => item.id_sensor === 1);
      const aguaData = data.filter(item => item.id_sensor === 2);

      const luzLabels = luzData.map(item => {
        const date = new Date(item.fecha);
        return `${date.getDate()}/${date.getMonth() + 1}`; // Formato: día/mes
      });

      const aguaLabels = aguaData.map(item => {
        const date = new Date(item.fecha);
        return `${date.getDate()}/${date.getMonth() + 1}`; // Formato: día/mes
      });

      const luzConsumo = luzData.map(item => item.consumo);
      const aguaConsumo = aguaData.map(item => item.consumo);

      const ctxLuz = document.getElementById('luzChart').getContext('2d');
      const ctxAgua = document.getElementById('aguaChart').getContext('2d');

      if (luzChart) luzChart.destroy();
      if (aguaChart) aguaChart.destroy();

      const newLuzChart = new Chart(ctxLuz, {
        type: 'line',
        data: {
          labels: luzLabels,
          datasets: [{
            label: 'Consumo de Luz (kWh)',
            data: luzConsumo,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                font: {
                  size: 14
                }
              }
            },
            title: {
              display: true,
              text: 'Consumo de Luz por Día',
              color: '#333',
              font: {
                size: 16
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Consumo (kWh)',
                color: '#333',
                font: {
                  size: 14
                }
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                color: '#333',
                font: {
                  size: 12
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Fecha',
                color: '#333',
                font: {
                  size: 14
                }
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                color: '#333',
                font: {
                  size: 12
                },
                maxRotation: 45,
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          }
        }
      });

      const newAguaChart = new Chart(ctxAgua, {
        type: 'line',
        data: {
          labels: aguaLabels,
          datasets: [{
            label: 'Consumo de Agua (m³)',
            data: aguaConsumo,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                font: {
                  size: 14
                }
              }
            },
            title: {
              display: true,
              text: 'Consumo de Agua por Día',
              color: '#333',
              font: {
                size: 16
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Consumo (m³)',
                color: '#333',
                font: {
                  size: 14
                }
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                color: '#333',
                font: {
                  size: 12
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Fecha',
                color: '#333',
                font: {
                  size: 14
                }
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                color: '#333',
                font: {
                  size: 12
                },
                maxRotation: 45,
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          }
        }
      });

      setLuzChart(newLuzChart);
      setAguaChart(newAguaChart);
    }
  }, [data]);

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
  );
};

export default Base_de_datos;