const modelOfertas = require('../model/ofertas.json')
const indexController = {
    index: (req, res) => {
        res.render('index', {listaOfertas: modelOfertas})
    }
}

module.exports = indexController