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
    },
    cadastroForm: (req, res) => {
        const {name, email, password} = req.body
        res.redirect('voltaLogin')
    },
    voltaLogin: (req, res) => {
        res.render('usuario/login-form')
    }
}

module.exports = usuarioController