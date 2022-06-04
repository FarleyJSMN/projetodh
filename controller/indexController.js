const modelOfertas = require('../model/ofertas.json')
const indexController = {
    index: (req, res) => {
        console.log(req.session)
        res.render('index', {listaOfertas: modelOfertas})
    }
}

module.exports = indexController