const { sequelize, Usuario } = require("../../models/index");
const bcrypt = require("bcrypt");

const buscarDados = { 

  exibePerfil: async (req, res) => {
  const sessao = req.session.user;
  const buscaDaSessao = await Usuario.findOne({
    raw: true,
    where: { email: sessao },
  });
  res.render("usuario/perfil", { message: buscaDaSessao, alert: '' });
  },

  editaPerfil: async (req,res) => {
    let {nome, sobrenome, email} = req.body
    let sessao = req.session.user;
    const emailRepetido = await Usuario.findOne({
      where: {email: email}
    })
    if (emailRepetido) {
      const buscaDaSessao = await Usuario.findOne({
        raw: true,
        where: { email: sessao },
      });
      res.render("usuario/perfil", { message: buscaDaSessao, alert: 'Email já cadastrado no sistema' })
    } else {
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
      res.render("usuario/perfil", { message: buscaDaSessao, alert: '' });
    }
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
  },

  exibeAlteraSenha: (req,res) => {
    res.render('usuario/mudarSenha', { message: ''})
  },

  alteraSenha: async (req, res) => {
    const {senha} = req.body
    if(!senha){
      res.render('usuario/mudarSenha', { message: 'Você deve colocar uma senha'})
    } else {
      if(senha.length < 8){
        res.render('usuario/mudarSenha', { message: 'A senha deve ter no mínimo 8 caracteres'})
      } else {
        const hash = await bcrypt.hash(senha, 10);
        await Usuario.update(
          {senha: hash},
          {where: {email: req.session.user}}
        )
        delete req.session.user
        res.redirect('/users/login')
      }
    }
  }
};

module.exports = buscarDados;
