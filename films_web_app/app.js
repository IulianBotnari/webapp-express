const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors())

const HOST = 'http://localhost:'
const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server running at ${HOST}${PORT}`)
})

