const express = require('express');
const app = express();
const env = require('dotenv').config();

const port = process.env.BACKEND_PORT;

app.get('/', (req, res) => {
  res.send('Hello World, welcome to sport stats!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});