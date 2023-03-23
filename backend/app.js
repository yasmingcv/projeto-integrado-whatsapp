/*************************************************************
 * Objetivo: Arquivo de APIs para o projeto whatsapp
 * Data: 23/03/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 *************************************************************/

//Require das dependências
 const express = require('express')
 const cors = require('cors')
 const bodyParser = require('body-parser')

const contatosArquivo = require('./modulo/funcoes.js')

 const app = express()


 app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
   
    app.use(cors())

    next()
 })



 //EndPoints
 app.get('/v1/whatsapp/contatos/:numero', cors(), async function (request, response, next){
    let statusCode
    let dadosContatos = {}

    let numeroUsuario = request.params.numero

    if(numeroUsuario == '' || numeroUsuario == undefined || isNaN(numeroUsuario)){
        statusCode = 400
        dadosContatos.message = 'Não foi possível acessar pois os dados de entrada (número) não foram enviados conforme o exigido.'
    } else {
        let contatos = contatosArquivo.getContatos(numeroUsuario)

        if(contatos){
            statusCode = 200
            dadosContatos = contatos
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosContatos)
    

 })

 app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})

//http://localhost:8080/v1/whatsapp/contatos/11966578996