const { sequelize, Endereco, Usuario, Pedido, Peca, Bicicleta, Acessorio } = require('./models/index')

const testeUsuario = async () => {
    const criandoUsuario = await Usuario.create({
        nome: 'Junio',
        sobrenome: 'Santos',
        email: 'santos@gmail.com',
        senha: '123456789'
    })
    console.log(criandoUsuario.toJSON())
    sequelize.close()
}
// testeUsuario()

const testeEndereco = async () => {
    const criandoEndereco = await Endereco.create({
        rua: 'Jacauna',
        cidade: 'Coronel Fabriciano',
        estado: 'Minas Gerais',
        telefone: '985648985',
        usuario_id: 2 //Tem que colocar um id de um usuario criado, se não ele não cria.
    })
    console.log(criandoEndereco.toJSON())
    sequelize.close()
}
// testeEndereco()

const testePedido = async () => {
    const criandoPedido = await Pedido.create({
        usuario_id: 2
    })
    console.log(criandoPedido.toJSON())
    sequelize.close()
}
// testePedido()

const testePeca = async () => {
    const criandoPeca = await Peca.create({
        nome_peca: 'peca teste',
        preco_peca: '25.65',
        descricao_peca: 'Peca super potente, confia'
    })
    console.log(criandoPeca.toJSON())
    sequelize.close()
}
// testePeca()

const testeBicicleta = async () => {
    const criandoBicicleta = await Bicicleta.create({
        nome_bicicleta: 'bike teste',
        preco_bicicleta: '699.99',
        descricao_bicicleta: 'Otima bike, tu vai gostar muito'
    })
    console.log(criandoBicicleta.toJSON())
    sequelize.close()
}
// testeBicicleta()

const testeAcessorio = async () => {
    const criandoAcessorio = await Acessorio.create({
        nome_acessorio: 'acessorio teste',
        preco_acessorio: '63.98',
        descricao_acessorio: 'Tu vai gostar de mais desse acessorio'
    })
    console.log(criandoAcessorio.toJSON())
    sequelize.close()
} 
// testeAcessorio()