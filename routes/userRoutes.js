const usersController = require('../controllers/usersControllers');

module.exports = (app) => {

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATO
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS

    app.post('/api/users/create', usersController.register);

}