const Peca = (sequelize, DataTypes) => {
    let peca = sequelize.define('Peca', {
        nome_peca: DataTypes.STRING,
        preco_peca: DataTypes.STRING,
        descricao_peca: DataTypes.TEXT
    },{
        tableName: 'peca',
        timestamps: false
    })
    peca.associate = (models) => {
        peca.belongsToMany(models.Pedido, {
            foreignKey: 'pedido_id',
            as: 'peca_pedido',
            through: 'PecaHasPedido',
            otherKey: 'pedido_id'
        })
    }

    return peca
}

module.exports = Peca
