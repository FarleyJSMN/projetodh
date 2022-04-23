const Usuario = (sequelize, DataTypes) => {
    const usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    },{
        tableName: "usuario",
        timestamps: false
    })
    return usuario 
}

module.exports = Usuario