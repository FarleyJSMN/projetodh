const Endereco = (sequelize, DataTypes) => {
    let endereco = sequelize.define('Endereco', {
        rua: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        telefone: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
    },{
        tableName: "endereco",
        timestamps: false
    })
    endereco.associate = (models) => {
        endereco.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'endereco_usuario'
        })
    }

    return endereco
}

module.exports = Endereco