module.exports = {
    puerto: process.env.PORT || 3000,
    bd_usuario: process.env.USERNAME_PSQL || 'usuario postgres',
    bd_password: process.env.PASSWORD_PSQL || 'contraseña postgres',
    bd_uri: process.env.PASSWORD_PSQL || 'localhost:5432/prueba_tecnica',
}