const modelBicicletas = require('../../model/bikes.json')
const lerBicicletas = {
    listarBicicletas: (req, res) => {
        res.render('bikes', {listarBicicletas: modelBicicletas})
    }
}

module.exports = lerBicicletas