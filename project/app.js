import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API PQRS simulada funcionando');
});

app.get('/pqrs', (req, res) => {
  res.send('Simulación: se consultaron todas las PQRS.');
});

app.get('/pqrs/:id', (req, res) => {
  res.send(`Simulación: se consultó la PQRS con id ${req.params.id}.`);
});

app.post('/pqrs/crear', (req, res) => {
  res.send(`Simulación: se creó una nueva PQRS. Datos: ${JSON.stringify(req.body)}`);
});

app.put('/pqrs/:id/seActualiza', (req, res) => {
  res.send(`Simulación: se actualizó la PQRS con id ${req.params.id}.`);
});

app.delete('/pqrs/:id', (req, res) => {
  res.send(`Simulación: se eliminó la PQRS con id ${req.params.id}.`);
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
