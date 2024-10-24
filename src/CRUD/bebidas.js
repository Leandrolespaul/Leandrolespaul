import bebidas from "../arrays/arrayBebidas.js"
import idBebidas from "../funcoes.js/idBebidas.js"


export const cadastrarBebidas = (descricao, unidadeMedida, qtd, precoUnidade) => {
    if(typeof descricao !== "string") Error('error')
    if(typeof unidadeMedida !== "string") Error('error')
    if(typeof qtd !== "number") Error('error')
    if(typeof precoUnidade !== "number") Error('error')
    bebidas.push({id: idBebidas(), descricao, unidadeMedida, qtd, precoUnidade})
}



const alterarCadastroBebidas = (id, descricao, unidadeMedida, qtd, precoUnidade) => {
    if(typeof descricao !== "string") Error('error')
    if(typeof unidadeMedida !== "string") Error('error')
    if(typeof qtd !== "number") Error('error')
    if(typeof precoUnidade !== "number") Error('error')

    const encontrarBebida = bebidas.find(bebida => bebida.id === id)

    if(descricao) encontrarBebida.descricao = descricao
    if(unidadeMedida) encontrarBebida.unidadeMedida = unidadeMedida
    if(qtd) encontrarBebida.qtd = qtd
    if(precoUnidade) encontrarBebida.precoUnidade = precoUnidade
}


const deletarBebida = (id) => {
    const filtrarBebida = bebidas.filter(bebida => bebida.id !== id)
    console.log(filtrarBebida)
}


// alterarCadastroBebidas(3, 'Guaraná Antartica', '600ml', '',  7.00)
// deletarBebida(3)




