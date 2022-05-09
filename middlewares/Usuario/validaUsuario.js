const session = require('express-session');

const validaUsuario = function (req, res, next){
    const validandoUsuario = req.session.validandoUsuario
    if (validandoUsuario) {
        next()
    }else{
        res.redirect('/users/login')
    }
}

module.exports = validaUsuario
