const { sequelize, Usuario } = require('../../models/index');
const bcrypt = require('bcrypt');

const telaLogin = async (req, res) => {
    res.render('usuario/login-form')
}

const criarLogin = async (req, res) => {
    const { email, senha } = req.body
    const buscarEmail = await Usuario.findOne({ where: { email: email } })

    if (!buscarEmail) {
        res.render('usuario/login-form')
    } else {
        const senhaCriptada = await bcrypt.compare(senha, buscarEmail.senha)

        if(!senhaCriptada){
        res.render('usuario/login-form')
        }

        if (senhaCriptada && email == buscarEmail.email) {
            req.session.user = email           
            res.redirect('/index')           
        }
    }
}

module.exports = {criarLogin, telaLogin}