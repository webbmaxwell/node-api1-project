const express = require('express');

const server = express();

//let hubs = [];
//let lessons = [];

server.listen(8000, () => console.log('API running on port 8000'));

server.get('/', (req, res) => {
  res.send("Hello")
});

server.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'Mario'
    }
    {
      id: 2,
      name: 'Donkey Kong'
    }
    {
      id: 3,
      name: 'Link'
    }
  ]
})

server.post('/users', (req, res) => {
  res.
})

server.get('/users/:id', (req, res) => {
  res.
})

server.delete('/users/:id', (req, res) => {
  res.
})

server.patch('/users/:id', (req, res) => {
  res.
})

//-------------------------------------
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
