const AcessorioHasPedido = (sequelize, DataTypes) => {
    let acessorioPedido = sequelize.define('AcessorioHasPedido', {
        acessorio_id: DataTypes.INTEGER,
        pedido_id: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
    },{
        tableName: 'acessorio_has_pedido',
        timestamps: false
    })
    return acessorioPedido
}

module.exports = AcessorioHasPedido