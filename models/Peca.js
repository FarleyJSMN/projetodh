const Peca = (sequelize, DataTypes) => {
    const peca = sequelize.define('Peca', {
        nome_peca: DataTypes.STRING,
        preco_peca: DataTypes.STRING,
        descricao_peca: DataTypes.TEXT
    },{
        tableName: 'peca',
        timestamps: false
    })
    return peca
}

module.exports = Peca
