require('dotenv').config()

const express = require('express');

const app = express();
const port = process.env.PORT  || 4000; 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter API endpoint');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chair aur code. </h1>');
});

app.get('/youtube' , (req ,res) => {
  res.send("<h2>Chai Aur Code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});