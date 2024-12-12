const express = require('express')
const server = express()
const cors = require('cors')
const NotFound = require('./Middlewares/NotFound.js')
const ServerErrorsHandler = require('./Middlewares/ServerErrorsHandler.js')
const bodyParser = require('body-parser')
server.use(cors())

server.use(bodyParser.json())

const router = require('./Routes/router.js')

const HOST = 'http://localhost:'
const PORT = 3000


server.get('/', router)

server.get('/:id', router)

server.post('/post', router)

server.use(NotFound)

server.use(ServerErrorsHandler)

server.listen(PORT, () => {
    console.log(`Server running at ${HOST}${PORT}`)
})