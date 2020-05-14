const express = require('express');

const server = express();

//let hubs = [];
//let lessons = [];

server.get('/', (req, res) => {
  res.send("Hello there! Here is a web server!")
});

server.get('/api/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'Mario',
      bio: "World's worst plumber"
    },
    {
      id: 2,
      name: 'Donkey Kong',
      bio: "Not even remotely like a donkey"
    },
    {
      id: 3,
      name: 'Link',
      bio: "Speechless hero"
    },
  ];

  res.status(200).json(users);
})

server.post('/api/users', (req, res) => {
  if (req.body.name === undefined || !req.body.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user."});
  } else {
    res.status(201).json({ url: '/users', operation: 'POST' });
  }
})

server.get('/api/users/:id', (req, res) => {
  if (!req.body.id) {
    res
      .status(404)
      .json({ errorMessage: "The user with the specified ID does not exist." })
  } else {
    res.status(200)
  }
})

server.delete('/api/users/:id', (req, res) => {
  if (!req.body.id) {
    res
      .status(404)
      .json({ errorMessage: "The user with the specified ID does not exist." })
  } else {
    res.status(204);
  }
})

server.put('/api/users/:id', (req, res) => {
  if (!req.body.id) {
    res
      .status(404)
      .json({ errorMessage: "The user with the specified ID does not exist." })
  } else if (req.body.name === undefined || !req.body.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user."});
  } else {
    res
      .status(200)
      .json({ url: '/users/:id', operation: 'PUT'})
  }
})

//-------------------------------------
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
