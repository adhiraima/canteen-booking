'use strict'

var Hapi = require('hapi')
var routes = require('./config/routes')

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
})

server.route(routes)

server.start(() => console.log('started at: ${server.info.uri}'))
