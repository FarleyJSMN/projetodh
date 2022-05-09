const { sequelize, Endereco, Usuario, Pedido, Peca, Bicicleta, Acessorio } = require('./models/index')

//Teste de relacionamento entre models/tabelas - CREATE
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

//Teste de relacionamento entre models/tabelas - SELECT

//Buscando informações de Usuário pelo ID incluindo na busca o Endereço do mesmo.
Usuario.findByPk(1, { include: ['usuario_endereco'] }).then((buscandoUsuario) => {
    console.log(buscandoUsuario.toJSON())
})
//Buscando informações do Pedido pelo ID incluindo na busca o Usuario.
Pedido.findByPk(3, { include: ['pedido_usuario'] }).then((buscandoPedido) => {
    console.log(buscandoPedido.toJSON())
})
//Buscando informações de Acessorio pelo ID incluindo na busca o Pedido.
Acessorio.findByPk(1, { include: ['acessorio_pedido'] }).then((buscandoAcessorio) => {
    console.log(buscandoAcessorio.toJSON())
})
//Buscando informações de Bicicleta pelo ID incluindo na busca o Pedido.
Bicicleta.findByPk(1, { include: ['bicicleta_pedido'] }).then((buscandoBicicleta) => {
    console.log(buscandoBicicleta.toJSON())
})
//Buscando informações de Peca pelo ID incluindo na busca o Pedido.
Peca.findByPk(1, { include: ['peca_pedido'] }).then((buscandoPeca) => {
    console.log(buscandoPeca.toJSON())
})