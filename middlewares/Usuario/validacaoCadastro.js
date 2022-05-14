const {Usuario} = require('../../models/index')

const validarCadastro = async (req,res,next) => {
    let {nome, sobrenome, email, senha} = req.body
    let resultado = await Usuario.findOne({
        where: {email: email}
    })
    if (!resultado){
        if (!nome || !sobrenome || !email || !senha){
            res.send("Você deve preencher todos os campos")
        } else {
            next()
        }
    } else {
        res.send("Usuário já cadastrado")
    }
}

module.exports = validarCadastro