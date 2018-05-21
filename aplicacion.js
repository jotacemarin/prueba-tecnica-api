'use strict'

const express = require('express')
const aplicacion = express()
const bodyParser = require('body-parser')
const enrutador = require('./configuraciones/rutas')

aplicacion.use(bodyParser.urlencoded({ extended: false }))
aplicacion.use(bodyParser.json())
aplicacion.use('/api', enrutador)

module.exports = aplicacion