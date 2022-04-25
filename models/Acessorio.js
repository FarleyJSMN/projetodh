const Acessorio = (sequelize, DataTypes) => {
    let acessorio = sequelize.define('Acessorio', {
        nome_acessorio: DataTypes.STRING,
        preco_acessorio: DataTypes.STRING,
        descricao_acessorio: DataTypes.TEXT
    },{
        tableName: 'acessorio',
        timestamps: false
    })
    acessorio.associate = (models) => {
        acessorio.belongsToMany(models.Pedido, {
            foreignKey: 'pedido_id',
            as: 'acessorio_pedido',
            through: 'AcessorioHasPedido',
            otherKey: 'pedido_id'
        })
    }

    return acessorio
}

module.exports = Acessorio
