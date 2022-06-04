var {Usuario} = require("../../../models/index.js")

const emailAtual = document.getElementById("email")
const botao = document.getElementById("botao")
botao.onclick = async function(){
    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const email = document.getElementById("email").value
    Usuario.update(
        {
            nome: nome,
            sobrenome: sobrenome,
            email: email
        },
        {
            where: {email: emailAtual}
        }
    )
    
}