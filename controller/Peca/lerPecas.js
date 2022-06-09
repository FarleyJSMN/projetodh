const modelPecas = require('../../model/pecas.json')
const lerPecas = {
    listarPecas: (req, res) => {
        res.render('pecas', {listarPecas: modelPecas})
    }
}

module.exports = lerPecas