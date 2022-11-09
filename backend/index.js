const express = require('express');
const app = express();
const env = require('dotenv').config();

const port = process.env.BACKEND_PORT;

app.get('/', (req, res) => {
  res.send('Hello World, welcome to sport stats!');
});

app.get('/api/teams', (req, res) => {
  // TODO: Get teams from database
  res.send('Teams');
});

app.get('/api/players', (req, res) => {
  // TODO: Get players from database
  res.send('Players');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});