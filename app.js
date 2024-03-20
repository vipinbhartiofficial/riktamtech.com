const express = require("express");
const cors    = require("cors");

const http      = require('http');
const socketIo  = require('socket.io');

require("dotenv").config()
require("./models")

const routesApi = require('./src/api');

const app = express();

const server  = http.createServer(app);
const io      = socketIo(server);

app.set('io', io); // Attach io object to the app

app.use(cors())
app.use(express.json())

// app.get("/", (req, res) => {
//     res
//     .status(200)
//     .json({"messages" : "Server Started"})
// })

app.use('/api', routesApi);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

server.listen(process.env.PORT, () => {
  console.log(`App is running on http://localhost:${process.env.PORT}`);
})