const Bicicleta = (sequelize, DataTypes) => {
    const bicicleta = sequelize.define('Bicicleta', {
        nome_bicicleta: DataTypes.STRING,
        preco_bicicleta: DataTypes.STRING,
        descricao_bicicleta: DataTypes.TEXT
    },{
        tableName: 'bicicleta',
        timestamps: false
    })
    return bicicleta
}
module.exports = Bicicleta