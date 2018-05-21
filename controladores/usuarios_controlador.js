'use strict'

const bd = require('../configuraciones/persistencia')

/**
 * Esta funcion obtiene un listado de todos los usuarios
 * @param {*} request 
 * @param {*} response Respponse directo de la base de datos
 */
function obtenerUsuarios (request, response) {
    bd.any('SELECT * FROM public.usuarios')
    .then(data => {
        return response.status(200).send(data)
    }).catch(err => {
        return response.status(500).send({ error: err })
    })
}

/**
 * Esta funcion trae como objeto usuario que se desea obtener o bien un mensaje de error
 * indicando que el elemento no fue encontrado
 * @param {*} request El id del usuario que se desea obtener, se envia por parametro de url
 * @param {*} response El objeto que traera la busqueda
 */
function obtenerUsuario (request, response) {
    bd.any(`SELECT * FROM public.usuarios WHERE usuarios.id = ${request['params']['usuario_id']}`)
    .then(data => {
        return data.length == 0 ? response.status(404).send({ error: 'el usuario no fue encontrado' }) : response.status(200).send(data[0])
    }).catch(err => {
        return response.status(500).send({ error: err })
    })
}

/**
 * Esta funcion nos permite crear usuarios
 * @param {*} request Los datos que vamos a enviar: { name, last_name, address, city, state, country, phone, area_code, birthdate }, se envian por body
 * @param {*} response Envia de vuelta el id con el que se creo el usuario
 */
function crearUsuario (request, response) {
    bd.one('INSERT INTO public.usuarios (name, last_name, address, city, state, country, phone, area_code, birthdate ) ' +
    'VALUES (${name}, ${last_name}, ${address}, ${city}, ${state}, ${country}, ${phone}, ${area_code}, ${birthdate} ) ' +
    'RETURNING id', request['body'])
    .then(data => {
        return response.status(200).send(data)
    }).catch(err => {
        return response.status(500).send({ error: err })
    })
}

/**
 * Nos permite actualizar los usuarios
 * @param {*} request El id del usuario que se desea actualizar, se envia por parametro de url; 
 * Los datos que vamos a enviar: { name, last_name, address, city, state, country, phone, area_code, birthdate }, se envian por body
 * @param {*} response El id del usuario que fue actualizado
 */
function actualizarUsuario (request, response) {
    let usuario_id = request['params']['usuario_id'];
    bd.one('UPDATE public.usuarios ' + 
    'SET name=${name}, last_name=${last_name}, address=${address}, city=${city}, state=${state}, country=${country}, phone=${phone}, area_code=${area_code}, birthdate=${birthdate} ' +
    'WHERE usuarios.id = ' + usuario_id + ' RETURNING id', request['body'])
    .then(data => {
        return response.status(200).send(data)
    }).catch(err => {
        return response.status(500).send({ error: err })
    })
}

/**
 * Nos permite eliminar usuarios
 * @param {*} request El id del usuario que se desea eliminar, se envia por parametro de url
 * @param {*} response Los datos de la transaccion realizada en la base de datos
 */
function eliminarUsuario (request, response) {
    let usuario_id = request['params']['usuario_id'];
    bd.result('DELETE FROM public.usuarios WHERE usuarios.id = $1', usuario_id)
    .then(data => {
        return response.status(200).send(data)
    }).catch(err => {
        return response.status(500).send({ error: err })
    })
}

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}