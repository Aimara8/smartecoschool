const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 2254;

// Middleware
app.use(cors());
app.use(express.json());

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: '192.168.100.20',
  user: 'dam',
  password: 'password',
  database: 'ses'
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas
app.get('/Escritorio/ses.sql', (req, res) => {
  db.query('SELECT * FROM measurements', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://192.168.100.20:${port}`);
});