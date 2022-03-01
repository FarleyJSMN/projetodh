const modelAcessorio = require('../model/acessorios.json')
const acessoriosController = {
    listaAcessorios: (req, res) => {
        res.render('acessorios', {listaAcessorios: modelAcessorio})
    }
}

module.exports = acessoriosController