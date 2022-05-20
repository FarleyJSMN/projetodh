

const telaLogin = (req, res) => {
    res.render('usuario/login-form')
}

const criarLogin = (req, res) => {
    const { email, senha } = req.body
    const criandoLogin = await Usuario.findOne({ where: { email: email } })

    if (!criandoLogin) {
        res.render('usuario/login-form')
    } else {
        const senhaCriptada = await bcrypt.compare(senha, criandoLogin.senha)

        if (senhaCriptada && email == criandoLogin.email) {
            req.session.user = email           
            res.redirect('/index')           
        }
    }
}

module.exports = {criarLogin, telaLogin}