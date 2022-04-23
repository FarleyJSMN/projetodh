const { sequelize, Usuario } = require('./models/index')

const testeUsuario = async () => {
    const criandoUsuario = await Usuario.create({
        nome: 'Farley',
        sobrenome: 'Santo',
        email: 'santos@gmail.com',
        senha: '123456789'
    })
}
testeUsuario()