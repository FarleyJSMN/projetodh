const {sequelize, Acessorio} = require('../../models/index');
const modelAntigo = require('../../model/acessorios.json');

const criarAcessorio = async () => {
    for (listaAcessorio of modelAntigo) {
    const criandoAcessrios = await Acessorio.create({
        nome_acessorio: listaAcessorio.nome,
        // preco_acessorio: listaAcessorio.preco,
        // descricao_acessorio: listaAcessorio.descricao,
    })}
}
// criarAcessorio()