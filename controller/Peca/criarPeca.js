const {sequelize, Peca} = require('../../models/index');
const modelAntigo = require('../../model/pecas.json');

const criarPeca = async () => {
    for (listaPecas of modelAntigo) {
    const criandoPeca = await Peca.create({
        nome_peca: listaPecas.nome,
        preco_peca: listaPecas.preco,
        descricao_peca: ''
    })}
}
// criarPeca()