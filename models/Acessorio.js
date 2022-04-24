const Acessorio = (sequelize, DataTypes) => {
    const acessorio = sequelize.define('Acessorio', {
        nome_acessorio: DataTypes.STRING,
        preco_acessorio: DataTypes.STRING,
        descricao_acessorio: DataTypes.TEXT
    },{
        tableName: 'acessorio',
        timestamps: false
    })
    return acessorio
}

module.exports = Acessorio
