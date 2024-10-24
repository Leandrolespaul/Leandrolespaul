import id from "../funcoes.js/id.js"
import clientes from "../arrays/arrayClientes.js"; //Array de clientes
import  telefone from "../funcoes.js/telefone.js"
import data from "../funcoes.js/data.js"
import validaCep from "../funcoes.js/validaCep.js"



export const cadastrarCliente = (nome, dataNascimento, phone, logradouro, numero, bairro, cep, referencia) => {
    if (typeof nome !== 'string') throw Error('Tem que ser String') 
    if (typeof dataNascimento !== 'string') throw Error('Tem que ser String') 
    if (typeof phone !== 'string') throw ('Tem que ser String') 
    if (typeof logradouro !== 'string') throw ('Tem que ser String') 
    if (typeof numero !== 'number') throw ('Tem que ser Number') 
    if (typeof bairro !== 'string') throw ('Tem que ser String') 
    if (typeof cep !== 'string') throw ('Tem que ser String') 
    if (typeof referencia !== 'string') throw ('Tem que ser String') 

    clientes.push({id: id(), nome, dataNascimento: data(dataNascimento), phone: telefone(phone), logradouro, numero, bairro, cep: validaCep(cep), referencia})
}

const alterarCliente = (id, nome, dataNascimento, phone, logradouro, numero, bairro, cep, referencia) => {
    if (typeof id !== 'number') throw Error('Tem que ser Number') 
    if (typeof nome !== 'string') throw Error('Tem que ser String') 
    if (typeof dataNascimento !== 'string') throw Error('Tem que ser String') 
    if (typeof phone !== 'string') throw ('Tem que ser String') 
    if (typeof logradouro !== 'string') throw ('Tem que ser String') 
    if (typeof numero !== 'number') throw ('Tem que ser Number') 
    if (typeof bairro !== 'string') throw ('Tem que ser String') 
    if (typeof cep !== 'string') throw ('Tem que ser String') 
    if (typeof referencia !== 'string') throw ('Tem que ser String') 

    const encontrarCliente = clientes.find(cliente => cliente.id === id)
    if(nome) encontrarCliente.nome = nome
    if(dataNascimento) encontrarCliente.dataNascimento = dataNascimento
    if(phone) encontrarCliente.phone = telefone(phone)
    if(logradouro) encontrarCliente.logradouro = logradouro
    if(numero) encontrarCliente.numero = numero
    if(bairro) encontrarCliente.bairro = bairro
    if(cep) encontrarCliente.cep = cep
    if(referencia) encontrarCliente.referencia = referencia
}

const deletar = (id) => {
    if (typeof id !== 'number') throw Error('Tem que ser Number') 
    const filtrarCliente = clientes.filter(cliente => cliente.id !== id)
    console.log(filtrarCliente)
}



cadastrarCliente("Leandro dos Santos Cunha", "16/10/1984", "22991031962", "Rua Vigário de Alexandre", 51, "Centro", "20637000", "Ao lado do banco Itaú" )
// alterarCliente(1,'leo', '25/12/2023', "22991051962", '', 78, '', '', '')
// deletar(1)


// console.log(clientes)
