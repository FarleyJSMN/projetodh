const BicicletaHasPedido = (sequelize, DataTypes) => {
    let bicicletaPedido = sequelize.define('BicicletaHasPedido', {
        bicicleta_id: DataTypes.INTEGER,
        pedido_id: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
    },{
        tableName: 'bicicleta_has_pedido',
        timestamps: false
    })
    
    return bicicletaPedido
}

module.exports = BicicletaHasPedido
