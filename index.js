const express = require('express');
const app = express();
const cors = require('cors');
const posts = require('./datas/posts.json');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json('Welcome my app');
});

app.get('/users/:id/posts', (req, res) => {
  res.status(200).json(posts);
});

app.listen(3001, () => {
  console.log('Mon serveur tourne sur le port 3001');
});
