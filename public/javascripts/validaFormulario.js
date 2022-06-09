const nome = document.getElementById('nome')
nome.addEventListener('change', function validar(){       
    const nomeLabel = document.getElementById('labelNome')
    if (nome.value.replace(/\s/g, '')){    
        nomeLabel.innerHTML = 'Nome'
        nome.style.borderColor = 'blue' 
        nome.focus()
        return        
    }else{                
        nomeLabel.innerHTML = 'Preencha com seu nome'       
        nome.style.borderColor = 'red'
    }
})

const sobrenome = document.getElementById('sobrenome')
sobrenome.addEventListener('change', function validar(){
    const sobrenomeLabel = document.getElementById('labelSobrenome')
    if (sobrenome.value.replace(/\s/g, '')){
        sobrenomeLabel.innerHTML = 'Sobrenome'
        sobrenome.style.borderColor = 'blue'
        sobrenome.focus()
        return
    }else{
        sobrenomeLabel.innerHTML = 'Preencha com seu sobrenome'
        sobrenome.style.borderColor = 'red'
    }
})
    
const email = document.getElementById('email')
email.addEventListener('change', function validar(){
    const emailLabel = document.getElementById('labelEmail')
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regexEmail.test(email.value)){
        emailLabel.innerHTML = 'Email válido'
        email.style.borderColor = 'blue'
        email.focus()
        return
    }else{
        emailLabel.innerHTML = 'Preencha um email válido'
        email.style.borderColor = 'red'
    }
})

const senha = document.getElementById('senha')
senha.addEventListener('change', function validar(){
    const senhaLabel = document.getElementById('labelSenha')
    if (senha.value.length < 8 || senha.value.replace(/\s/g, '') == false){
        senhaLabel.innerHTML = 'Senha mínima 8 caracteres'
        senha.style.borderColor = 'red'
        senha.focus()
        return
    }else{
        senhaLabel.innerHTML = 'Senha'
        senha.style.borderColor = 'blue'
    }
})

const botao = document.getElementById('botao')
botao.addEventListener('click', function validar(evento){
    const span = document.getElementById('spanBotao')
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const senha = document.getElementById('senha')
    const email = document.getElementById('email')

    if (nome.value == '' || sobrenome.value == '' || email.value == '' ||
        senha.value.length < 8 || senha.value == ''){
        span.innerHTML = 'Preencha os campos'
        span.style.color = 'red'
        evento.preventDefault()        
    }else{
        span.style.color = 'blue'
        span.innerHTML = 'Cadastro com sucesso'
    }    
})