const Pedido = (sequelize, DataTypes) => {
    const pedido = sequelize.define('Pedido', {
        usuario_id: DataTypes.INTEGER,     
    },{
        tableName: 'pedido',
        timestamps: false
    })
    pedido.associate = (models) => {
        pedido.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'pedido_usuario'
        })
    }

    return pedido
}

module.exports = Pedido
