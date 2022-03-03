const usuarioController = {
    cadastro: (req, res) =>{
        res.render('usuario/cadastro-form')
    },
    login: (req, res) =>{
        res.render('usuario/login-form')
    }
}

module.exports = usuarioController