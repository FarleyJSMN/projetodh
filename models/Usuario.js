const Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    },{
        tableName: "usuario",
        timestamps: false
    })
    usuario.associate = (models) => {
        usuario.hasMany(models.Endereco, {
            foreignKey: 'usuario_id',
            as: 'usuario_endereco'
        }) 
        usuario.hasMany(models.Pedido, {
            foreignKey: 'usuario_id',
            as: 'usuario_pedido'
        }) 
    }

    return usuario 
}

module.exports = Usuario