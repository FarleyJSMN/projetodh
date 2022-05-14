const bcrypt = require('bcrypt')
const {Usuario} = require('../../models/index')

const validacaoLogin = async (req,res,next) => {
    let {email, senha} = req.body
    let resultado = await Usuario.findOne({
        where: {email: email}
    })
    if(!resultado){
        return res.send("email não encontrado")
    }
    if (bcrypt.compareSync(senha, resultado.senha)){
        return next()
    } else {
        return res.send("senha incorreta")
    }
}

module.exports = validacaoLogin