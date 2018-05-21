'use strict'

const aplicacion = require('./aplicacion')
const configuracion = require('./configuraciones/base')

const bd = require('./configuraciones/persistencia')

aplicacion.listen(configuracion.puerto, () => {
    /* bd.any('SELECT * FROM public.usuarios')
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.error('error pgp => ', err)
    }) */
    console.warn(`Prueba tecnica API-RESTFUL ejecutandose en http://localhost:${configuracion.puerto}`)
})