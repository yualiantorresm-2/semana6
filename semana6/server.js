const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>¡Servidor Backend Activo!</h1><p>Usa /registro para ver la sección de registro.</p>');
});


app.get('/registro', (req, res) => {
  res.send('<h2>Sección de Registro</h2><p>El servidor está listo para recibir tus datos mediante POST.</p>');
});


app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: "maria",
    mensaje: "Hola servidor"
  });
});

app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo:  "Iluminación pública",
    descripcion: "La comunidad reporta que una lámpara del parque no funciona desde hace varios días."
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});