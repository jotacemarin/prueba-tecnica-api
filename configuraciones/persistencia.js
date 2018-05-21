'use strict'

const configuracion = require('../configuraciones/base')

const pgp = require('pg-promise')(/*options*/)
const bd = pgp(`postgres://${configuracion.bd_usuario}:${configuracion.bd_password}@${configuracion.bd_uri}`)

module.exports = bd