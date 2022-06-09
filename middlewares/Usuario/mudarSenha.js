const {sequelize, Usuario} = require("../../models/index")

const mudarSenhaMiddleware = async (req, res, next) =>{
    let {email} = req.body
    let dado = await Usuario.findOne({
        where: {email: email}
    })
    if(dado){
        if(email != req.session.user){
            res.render('usuario/mudarSenha', {message: 'email incorreto'})
        } else {
            next()
        }
    } else {
        res.render('usuario/mudarSenha', {message: 'email não cadastrado'})
    }

}
module.exports = mudarSenhaMiddleware