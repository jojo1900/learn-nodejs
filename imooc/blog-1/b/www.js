const http = require('http')

const PORT = 9900

const serverHandle = require('../index')

const server = http.createServer(serverHandle)

server.listen(PORT)