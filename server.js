const express = require('express');

const server = express();

server.use(express.json());

const accountRouter = require('./accounts-router')
server.use('/api/accounts', accountRouter)

module.exports = server;