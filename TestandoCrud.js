const {sequelize, Usuario} = require('./models/index')

const result = async () => {
    const usuario = await Usuario.create({
        name: 10,
        sobrenome: 'Santo',
        email: 'santos@gmail.com',
        senha: '123456789'
    })
}
result()