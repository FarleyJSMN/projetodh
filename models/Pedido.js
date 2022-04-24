const Pedido = (sequelize, DataTypes) => {
    const pedido = sequelize.define('Pedido', {
        usuario_id: DataTypes.INTEGER,     
    },{
        tableName: 'pedido',
        timestamps: false
    })

    return pedido
}

module.exports = Pedido