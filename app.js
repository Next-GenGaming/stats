const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const fsr = require('file-stream-rotator')
const api = require('./routes/api')
const db = require('./services/sql')
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const logDirectory = path.join(__dirname, 'log')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const logStream = fsr.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: true,
    max_logs: 7
})

const app = express()

app.use(cors({
    origin: '*'
}))



app.use(morgan('combined', {stream: logStream}))

app.use(express.json())

app.use('/v1', api)

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile))

module.exports = app