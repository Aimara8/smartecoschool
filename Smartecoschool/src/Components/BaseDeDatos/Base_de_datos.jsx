import React, { useEffect, useState } from 'react';

const Base_de_datos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await fetch('http://192.168.100.20:2254/Escritorio/ses.sql');
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchDatos();
  }, []);

  return (
    <div>
      <h1>Datos de la Base de Datos</h1>
      <ul>
        {datos.map((dato, index) => (
          <li key={index}>{JSON.stringify(dato)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Base_de_datos;