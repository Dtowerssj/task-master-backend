const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//inicializaciones
const server = express();

//Middlewares
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//rutas
server.use(require('./routes/users.routes'));

server.use(require('./routes/tasks.routes'));


module.exports = server;