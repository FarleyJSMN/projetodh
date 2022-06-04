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
    let {nome, sobrenome, email} = req.body
    let sessao = req.session.user;
    await Usuario.update(
      {
          nome: nome,
          sobrenome: sobrenome,
          email: email
      },
      {
          where: {email: sessao}
      }
    )
    req.session.user = email
    sessao = email
    const buscaDaSessao = await Usuario.findOne({
      raw: true,
      where: { email: sessao },
    });
    res.render("usuario/perfil", { message: buscaDaSessao });
  }
};

module.exports = buscarDados;
