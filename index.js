const express = require('express');

const server = express();

//let hubs = [];
//let lessons = [];

server.get('/', (req, res) => {
  res.send("Hello there! Here is a web server!")
});

server.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'Mario'
    },
    {
      id: 2,
      name: 'Donkey Kong'
    },
    {
      id: 3,
      name: 'Link'
    },
  ];

  res.status(200).send(users);
})

server.post('/users', (req, res) => {
  res.status(201).json({ url: '/users', operation: 'POST' });
})

server.get('/users/:id', (req, res) => {
  res.status(200)
})

server.delete('/users/:id', (req, res) => {
  res.status(204);
})

server.put('/users/:id', (req, res) => {
  res.status(200).json({ url: '/users/:id', operation: 'PUT'})
})

//-------------------------------------
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
