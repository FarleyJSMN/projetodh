const { sequelize, Usuario } = require("../../models/index");
const bcrypt = require("bcrypt");

const telaCadastro = async (req, res) => {
  res.render("usuario/cadastro-form");
};

const criarUsuario = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  const criandoUsuario = await Usuario.create({
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: hash,
  });

  try {
    await criandoUsuario.save();
    res
      .status(200)
      .render("usuario/login-form", { message: "Cadastro com sucesso" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { criarUsuario, telaCadastro };
