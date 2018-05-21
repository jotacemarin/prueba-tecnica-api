'use strict'
// nucleo: servidor express y su enrutador
const express = require('express')
const enrutador = express.Router()

const bienvenidosControlador = require('../controladores/bienvenidos_controlador')
const usuariosControlador = require('../controladores/usuarios_controlador')

enrutador.get('/test-conexion', bienvenidosControlador.hola)
enrutador.get('/usuarios', usuariosControlador.obtenerUsuarios)
enrutador.get('/usuarios/:usuario_id', usuariosControlador.obtenerUsuario)
enrutador.post('/usuarios', usuariosControlador.crearUsuario)
enrutador.put('/usuarios/:usuario_id', usuariosControlador.actualizarUsuario)
enrutador.delete('/usuarios/:usuario_id', usuariosControlador.eliminarUsuario)

module.exports = enrutador