const { Usuario } = require("../../models/index");

const buscarDados = { 
  exibePerfil: async (req, res) => {
  const sessao = req.session.user;
  const buscaDaSessao = await Usuario.findOne({
    raw: true,
    where: { email: sessao },
  });
  res.render("usuario/perfil", { message: buscaDaSessao });
  }
};

module.exports = buscarDados;
