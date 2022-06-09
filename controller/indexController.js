const modelOfertas = require('../model/ofertas.json')
const indexController = {
    index: (req, res) => {
        res.render('index', {listaOfertas: modelOfertas})
    }, 
    logout: (req,res) => {
        if(req.session.user){
            delete req.session.user
            res.redirect('/index')
        }
    }
}

module.exports = indexController