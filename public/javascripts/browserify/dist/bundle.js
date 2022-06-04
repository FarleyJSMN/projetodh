(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var {Usuario} = require("../../../../models/index")

const emailAtual = document.getElementById("email")
const botao = document.getElementById("botao")
botao.onclick = async function(){
    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const email = document.getElementById("email").value
    Usuario.update(
        {
            nome: nome,
            sobrenome: sobrenome,
            email: email
        },
        {
            where: {email: emailAtual}
        }
    )
    
}
},{}]},{},[1]);
