const express = require('express')
const server = express()
const cors = require('cors')
const NotFound = require('./Middlewares/NotFound.js')
const ServerErrorsHandler = require('./Middlewares/ServerErrorsHandler.js')
server.use(cors())

const router = require('./Routes/router.js')

const HOST = 'http://localhost:'
const PORT = 3000


server.get('/', router)

server.get('/:id', router)

server.use(NotFound)

server.use(ServerErrorsHandler)

server.listen(PORT, () => {
    console.log(`Server running at ${HOST}${PORT}`)
})