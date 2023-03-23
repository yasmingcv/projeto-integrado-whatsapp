'use strict'

export const getContatosUser = async (numero) => {
    const url = `http://localhost:8080/v1/whatsapp/contatos/${numero}`
    const response = await fetch(url)
    const data = await response.json()

    return data
    
}