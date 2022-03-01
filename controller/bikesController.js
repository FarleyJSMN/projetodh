const modelBikes = require('../model/bikes.json')
const bikesController = {
    listaBikes: (req, res) => {
        res.render('bikes',{listaBikes: modelBikes})
    }
}

module.exports = bikesController