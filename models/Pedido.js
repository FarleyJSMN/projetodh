const Pedido = (sequelize, DataTypes) => {
    let pedido = sequelize.define('Pedido', {
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
        pedido.belongsToMany(models.Acessorio, {
            foreignKey: 'acessorio_id',
            as: 'pedido_acessorio',
            through: 'AcessorioHasPedido',
            otherKey: 'acessorio_id'
        })
    }

    return pedido
}

module.exports = Pedido
