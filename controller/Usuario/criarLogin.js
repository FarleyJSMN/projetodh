

const telaLogin = (req, res) => {
    res.render('usuario/login-form')
}

const criarLogin = (req, res) => {
    const { email, senha } = req.body
    req.session.criandoLogin = email
    res.redirect('/index')
}

module.exports = {criarLogin, telaLogin}