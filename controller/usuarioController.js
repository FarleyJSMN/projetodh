const modelOfertas = require('../model/ofertas.json');
const usuarioController = {
    cadastro: (req, res) =>{
        res.render('usuario/cadastro-form')
    },
    login: (req, res) =>{
        res.render('usuario/login-form')
    },
    loginForm: (req, res) => {
        const {email, senha} = req.body
        res.redirect('voltaHome')
    },
    voltaHome: (req, res) => {
        res.render('index', {listaOfertas: modelOfertas})
    }
}

module.exports = usuarioController