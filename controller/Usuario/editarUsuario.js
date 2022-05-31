const { sequelize, Usuario } = require("../../models/index");

const buscarDados = { 
  exibePerfil: async (req, res) => {
  const sessao = req.session.user;
  const buscaDaSessao = await Usuario.findOne({
    raw: true,
    where: { email: sessao },
  });
  res.render("usuario/perfil", { message: buscaDaSessao });
  },
  editaPerfil: async (req,res) => {
    const emailAtual = document.getElementById("email")
    const botao = document.getElementById("botao")
    botao.onclick = async function(){
      const nome = document.getElementById("nome").value
      const sobrenome = document.getElementById("sobrenome").value
      const email = document.getElementById("email").value
      const atualizacao = await Usuario.update(
          {
              nome: "GGGGGGGGGGGGGGGGG",
              sobrenome: sobrenome,
              email: email
          },
          {
              where: {email: emailAtual}
          }
      )
      try {
        await atualizacao.save();
        res
          .status(200)
          .render("usuario/perfil", { message: "Alterado com sucesso" });
      } catch (error) {
        res.status(500).send(error);
      }
    
    }
  }
};

module.exports = buscarDados;
