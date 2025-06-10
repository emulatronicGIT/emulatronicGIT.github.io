const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'leaderboard.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'webgame')));

function readData() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/leaderboard', (req, res) => {
  res.json(readData());
});

app.post('/leaderboard', (req, res) => {
  const { nombre, puntos } = req.body;
  if (!nombre || typeof puntos !== 'number') {
    return res.status(400).json({ error: 'Datos inválidos' });
  }
  const datos = readData();
  datos.push({ nombre, puntos });
  datos.sort((a, b) => b.puntos - a.puntos);
  datos.splice(10);
  writeData(datos);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
