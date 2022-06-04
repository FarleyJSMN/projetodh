const { sequelize, Usuario } = require("../../models/index");
const modelOfertas = require('../../model/ofertas.json')

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
  },

  exibeDeletaPerfil: (req,res) => {
    res.render('usuario/deleta-usuario')
  },

  deletaPerfil: async (req,res) =>{
    let sessao = req.session.user;
    await Usuario.destroy({
      where: {email: sessao}
    })
    delete req.session.user
    res.redirect('/index')
  }
};

module.exports = buscarDados;
