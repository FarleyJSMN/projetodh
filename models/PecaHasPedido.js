const PecaHasPedido = (sequelize, DataTypes) => {
    const pecaPedido = sequelize.define('PecaHasPedido', {
        peca_id: DataTypes.INTEGER,
        pedido_id: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
    },{
        tableName: 'peca_has_pedido',
        timestamps: false
    })
    return pecaPedido
}

module.exports = PecaHasPedido