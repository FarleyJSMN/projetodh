const {sequelize, Bicicleta} = require('../../models/index');
const modelAntigo = require('../../model/bikes.json');

const criarBicicleta = async () => {
    for (listaBicicletas of modelAntigo) {
    const criandoBicicleta = await Bicicleta.create({
        nome_bicicleta: listaBicicletas.nome,
        preco_bicicleta: listaBicicletas.preco,
        // descricao_bicicleta: '',
    })}
}
// criarBicicleta()