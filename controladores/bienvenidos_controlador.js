'use strict'

function hola (request, response) {
    return response.status(200).send({ mensaje: 'Hola Kuntur' })
}

module.exports = {
    hola
}