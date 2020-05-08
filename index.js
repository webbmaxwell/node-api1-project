const express = require('express');

const server = express();

let hubs = [];
let lessons = [];

server.get('/', (req, res) => {
  res.json({message: "Hello" })
});

server.get('/users')

//-------------------------------------
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
