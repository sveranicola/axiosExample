const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/getTodos', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=5')
  .then(result => res.send(result.data))
  .catch(err => console.log(err));
});

app.post('/postTodos', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/', req.body)
  .then(result => res.send(result.data))
  .catch(err => console.log(err));
});

module.exports = app;
