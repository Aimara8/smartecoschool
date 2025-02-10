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
    // Hacer la solicitud a la API del backend
    axios.get('http://localhost:5003/data')
      .then((response) => {
        setData(response.data);  // Guardar los datos en el estado
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const luzData = data.filter(item => item.id_sensor === 1);
      const aguaData = data.filter(item => item.id_sensor === 2);

      const luzLabels = luzData.map(item => item.fecha.split(' ')[0]);
      const aguaLabels = aguaData.map(item => item.fecha.split(' ')[0]);

      const luzConsumo = luzData.map(item => item.consumo);
      const aguaConsumo = aguaData.map(item => item.consumo);

      const ctxLuz = document.getElementById('luzChart').getContext('2d');
      const ctxAgua = document.getElementById('aguaChart').getContext('2d');

      // Destroy previous charts if they exist
      if (luzChart) {
        luzChart.destroy();
      }
      if (aguaChart) {
        aguaChart.destroy();
      }

      // Create new charts
      const newLuzChart = new Chart(ctxLuz, {
        type: 'line',
        data: {
          labels: luzLabels,
          datasets: [{
            label: 'Consumo de Luz',
            data: luzConsumo,
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Consumo de Luz por Día'
            }
          }
        }
      });

      const newAguaChart = new Chart(ctxAgua, {
        type: 'line',
        data: {
          labels: aguaLabels,
          datasets: [{
            label: 'Consumo de Agua',
            data: aguaConsumo,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Consumo de Agua por Día'
            }
          }
        }
      });

      // Update state with new chart instances
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
          <div className="chart">
            <canvas id="luzChart"></canvas>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <FontAwesomeIcon icon={faTint} className="chart-icon" />
            <h2>Consumo de Agua</h2>
          </div>
          <div className="chart">
            <canvas id="aguaChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base_de_datos;