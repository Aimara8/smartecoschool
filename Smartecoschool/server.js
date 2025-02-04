const express = require('express');
const { Client } = require('ssh2');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5003;

// Habilitar CORS para todas las rutas
app.use(cors());

// Configuración del túnel SSH
const sshConfig = {
  host: '2.139.196.172',
  port: 2254,
  username: 'ses',
  password: 'ses2023-2024', // O usa privateKey para autenticación por clave
};

// Configuración de la base de datos
const dbConfig = {
  host: 'localhost', // Usar localhost porque el túnel SSH redirigirá la conexión
  user: 'dam',
  password: 'password',
  database: 'ses',
};

// Crear un túnel SSH
const conn = new Client();

conn.on('ready', () => {
  console.log('Conexión SSH establecida');
  conn.forwardOut(
    '127.0.0.1',
    12345, // Puerto local para el túnel
    dbConfig.host,
    3307, // Puerto de la base de datos
    (err, stream) => {
      if (err) throw err;

      // Crear conexión a la base de datos a través del túnel
      const dbConnection = mysql.createConnection({
        ...dbConfig,
        stream,
      });

      // Ruta de la API para obtener datos
      app.get('/data', (req, res) => {
        dbConnection.query('SELECT * FROM measurements', (err, results) => {
          if (err) {
            console.error('Error en la consulta SQL:', err);  // <--- Muestra el error exacto
            res.status(500).send(`Error al consultar la base de datos: ${err.message}`);
          } else {
            res.json(results);
          }
        });
      });
      

      // Iniciar el servidor
      app.listen(port, () => {
        console.log(`Servidor backend corriendo en http://localhost:${port}`);
      });
    }
  );
}).connect(sshConfig);