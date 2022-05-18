const modelBikes = require('../model/bikes.json')
const  carrinhoController = {
    listaBikes: (req, res) => {
        res.render('bikes',{listaBikes: modelBikes})
    }
}

module.exports = carrinhoController