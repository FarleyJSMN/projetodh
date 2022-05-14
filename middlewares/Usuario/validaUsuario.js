const validaUsuario = function (req, res, next){
    const validandoUsuario = req.session.user
    if (validandoUsuario) {             
        next()
    }else{
        res.redirect('/users/login')
    }
}

module.exports = validaUsuario
