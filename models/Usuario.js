const bcrypt = require('bcryptjs');
const db = require ("../database/models/");
const fs = require('fs');


const Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    },
    {
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
        saveUser: (req, res) => {
            req.body.password = bcrypt.hashSync(req.body.password, 11);
            data = {
                avatarName: req.file.filename,
                ...req.body,
                createdAt: new Date(),
            }
    }}
    let logSuccessfull = bcrypt.compareSync( req.body.contrasena , elUser.password);

    if (logSuccessfull) {
        req.session.user = elUser;
        if (req.session.cart.length < 1){
            req.session.cart = [];
            res.cookie('cart', '');
        }else{
            
            res.cookie('cart', JSON.stringify(req.session.cart), { maxAge: 180000});
        }
        
        if (req.body.recordar) {
            res.cookie('user', bcrypt.hashSync(elUser.id.toString(), 12), { maxAge: 180000});
        }
        res.locals.logged = true;
        res.locals.user = elUser;
    }
    return usuario 
}

module.exports = Usuario