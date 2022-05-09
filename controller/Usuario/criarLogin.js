const { sequelize, Usuario } = require('../../models/index');
const bcrypt = require('bcrypt');

const telaLogin = async (req, res) => {
    res.render('usuario/login-form')
}

const criarLogin = async (req, res) => {
    const { email, senha } = req.body
    const criandoLogin = await Usuario.findOne({ where: { email: email } })

    if (!criandoLogin) {
        console.log('Email não existe no sistema')
    } else {
        const compareSenha = await bcrypt.compare(senha, criandoLogin.senha).then((resultado) => {
            return resultado
        })
        if (compareSenha && email == criandoLogin.email) {
            req.session.criandoLogin = email
            res.redirect('/index')
        }
    }
}

module.exports = {criarLogin, telaLogin}