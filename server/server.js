const path = require('path')
const express = require('express')

const jokesRoutes = require('./jokes')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('api/v1', jokesRoutes)

module.exports = server
