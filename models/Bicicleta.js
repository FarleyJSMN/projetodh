const Bicicleta = (sequelize, DataTypes) => {
    let bicicleta = sequelize.define('Bicicleta', {
        nome_bicicleta: DataTypes.STRING,
        preco_bicicleta: DataTypes.STRING,
        descricao_bicicleta: DataTypes.TEXT
    },{
        tableName: 'bicicleta',
        timestamps: false
    })
    bicicleta.associate = (models) => {
        bicicleta.belongsToMany(models.Pedido, {
            foreignKey: 'pedido_id',
            as: 'bicicleta_pedido',
            through: 'BicicletaHasPedido',
            otherKey: 'pedido_id'
        })
    }

    return bicicleta
}
module.exports = Bicicleta