/**
 * Objetivo: Arquivo de funções para devolver dados de um contato
 * Data: 23/03/2023
 * Versão: 1.0
 * Autora: Yasmin Gonçalves
 */

const contatosArquivo = require('./contatos.js')

const getContatos = function (number){
    let numeroTelefone = number
    let dadosContatos = []
    let status = false

    contatosArquivo.contatos['whats-users'].forEach(function (user){

        if(user.number == numeroTelefone){
            user.contacts.forEach(function (contact){
                dadosContatos.push(contact)
                status = true
            })
        }
    })

    if(status == false){
        return status
    } else {
        return dadosContatos
    }

}

const getInfoUsuarios = function (number) {
    let numeroTelefone = number
    let dadosUsuario = {}
    let status = false

    contatosArquivo.contatos['whats-users'].forEach(function (user){

        if(user.number == numeroTelefone){
            dadosUsuario.image = user['profile-image']
            dadosUsuario.name = user.account
            dadosUsuario.nickname = user.nickname
            
            status = true
        }

    })

    if(status == true){
        return dadosUsuario
    } else {
        return status
    }

}

module.exports = {
    getContatos
}

// console.log(getContatos('11955577796'))
// console.log(getInfoUsuarios('11955577796'))