const User  = require ('../models/user');

module.exports = {

    register(req, res) {

        const user = req.body; //CAPTURA DATOS ENVIADOS POR EL CLIENTE
        User.create(user, (err, data) =>{
            
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error en registro de usuario',
                    error: err
                });
            }

                return res.status(201).json({
                    success:true,
                    message: 'Registro Exitoso!',
                    data: data //ID DEL USUARIO REGISTRADO
                });
        });

    }
}
