const modelPecas = require('../model/pecas.json')
const pecasController = {
    listaPecas: (req, res) => {
        res.render('pecas', {listaPecas: modelPecas})
    }
}

module.exports = pecasController