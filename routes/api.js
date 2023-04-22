const express = require('express')

const statsRouter = require('./stats/stats.router')

const api = express.Router()

api.use('/stats', statsRouter)

module.exports = api