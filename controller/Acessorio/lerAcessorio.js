const modelAcessorio = require('../../model/acessorios.json')
const lerAcessorio = {
    listarAcessorios: (req, res) => {
        res.render('acessorios', {listarAcessorios: modelAcessorio})
    }
}

module.exports = lerAcessorio