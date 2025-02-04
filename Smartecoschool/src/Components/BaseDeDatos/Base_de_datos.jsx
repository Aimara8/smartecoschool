import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Base_de_datos.css'

const Base_de_datos = () => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <h1>Datos de la base de datos:</h1>
      
      {/* Crear la tabla */}
      <table className='table'>
        <thead>
          <tr className='fila'>
            {/* Aquí debes ajustar los nombres de las columnas según los datos que devuelvas */}
            <th className='titulo_col'>ID</th>
            <th className='titulo_col'>ID Sensor</th>
            <th className='titulo_col'>Fecha</th>
            <th className='titulo_col'>Consumo</th>
            {/* Puedes agregar más columnas si es necesario */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='fila'>
              <td className='columna'>{item.id_measure}</td>  {/* Aquí deberías poner las propiedades correspondientes de tu objeto */}
              <td className='columna'>{item.id_sensor}</td> {/* Ajusta según la estructura de tus datos */}
              <td className='columna'>{item.fecha}</td>  {/* Ajusta según la estructura de tus datos */}
              <td className='columna'>{item.consumo}</td>  {/* Ajusta según la estructura de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Base_de_datos;
