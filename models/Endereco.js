const Endereco = (sequelize, DataTypes) => {
    const endereco = sequelize.define('Endereco', {
        rua: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        telefone: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
    },{
        tableName: "endereco",
        timestamps: false
    })
    return endereco
}

module.exports = Endereco