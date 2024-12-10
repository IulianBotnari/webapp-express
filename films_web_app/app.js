const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors())

const router = require('./Routes/router.js')

const HOST = 'http://localhost:'
const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server running at ${HOST}${PORT}`)
})

server.get('/', router)