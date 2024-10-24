import hamburgers from "./src/arrays/arrayHamburgers.js"
import clientes from "./src/arrays/arrayClientes.js"
import ingredientes from "./src/arrays/arrayIngredientes.js"
import { cadastrarCliente } from "./src/CRUD/clientes.js"
import { cadastrarHamburguer } from "./src/CRUD/hamburgers.js"
import bebidas from "./src/arrays/arrayBebidas.js"
import { cadastrarBebidas } from "./src/CRUD/bebidas.js"
import { cadastrarIngredientes } from "./src/CRUD/hamburgers.js"

cadastrarBebidas('Coca-cola 600', '600ml', 20, 7.00)
cadastrarBebidas('Fanta-Laranja', '2l', 25, 12.00)
cadastrarBebidas('Guaraná Doly', '400ml', 32, 3.50)
cadastrarBebidas('Guaravita', '290ml', 80, 2.00)
cadastrarBebidas('Coca-cola Garrafinha', '290ml', 40, 4.50)


const pedidoCliente = (nome, hamburguer, qtd, bebid, qtdBebida, adicional, qtdAdicional) => {
    const encontrarCliente = clientes.find(cliente => cliente.nome === nome)
    if (encontrarCliente) console.log(`ID do cliente: ${encontrarCliente.id}, Nome do cliente: ${encontrarCliente.nome}`)

    const encontrarHamburger = hamburgers.find(hamburger => hamburger.descricao === hamburguer)
    if (encontrarHamburger) console.log(`Hamburguer: ${encontrarHamburger.descricao}, Quantidade: ${qtd}, Preço unidade: ${encontrarHamburger.preco}`)
    let soma = encontrarHamburger.preco * qtd
    console.log(`Preço total do Hamburguer R$${soma}`)

    const encontrarBebida = bebidas.find(bebida => bebida.descricao === bebid)
    if (encontrarBebida) console.log(`Bebida: ${encontrarBebida.descricao}, uniMedida: ${encontrarBebida.unidadeMedida}, Quantidade: ${qtdBebida}, Preço: ${encontrarBebida.precoUnidade}`)
    let somaBebdida = encontrarBebida.precoUnidade * qtdBebida
    console.log(`Valor total Bebida: R$${somaBebdida}`)

    const encontrarIgrendiente = ingredientes.find(ingrediente => ingrediente.descricao === adicional)
    if (encontrarIgrendiente) console.log(`Seu Pedido Adicional foi: ${encontrarIgrendiente.descricao}, Quantidade Adicional: ${qtdAdicional}, Preço Adicional Por Unidade: R$${encontrarIgrendiente.preco}`)
    let somaAdicional = encontrarIgrendiente.preco * qtdAdicional
    console.log(`Preço final adicional: ${somaAdicional}`)

    let total = somaBebdida + soma + somaAdicional
    console.log(`Preço final: R$${total}`)

    const metodoPagamento = (DEBITO, CREDITO, DINHEIRO, PIX, PAGAMENTO, PAGANDO) => {
        if (DEBITO === true) {
            if (PAGANDO < PAGAMENTO) {
                console.log('Saldo Insuficiente')
            }
            if (PAGAMENTO < PAGANDO) {
                let falta = PAGANDO - PAGAMENTO
                console.log('Falta: R$', falta.toFixed(2), 'Deseja pagar de outra forma?')
            }
            if (PAGAMENTO === PAGANDO) {
                console.log(`Você pagou no débito R$${PAGAMENTO}`)
            }
        }

        if (CREDITO === true) {
            console.log(`Você pagou no Crédito o valor: R$${PAGAMENTO.toFixed(2)}`)
            if (PAGAMENTO < PAGANDO) {
                console.log('Saldo Insuficiente')
                let falta = PAGANDO - PAGAMENTO
                console.log('Falta: R$', falta.toFixed(2), 'Deseja pagar de outra forma?')
            }
            if (PAGAMENTO === PAGANDO) {
                console.log(`Pagamento Efetuado no Crédito no valor: R$${PAGAMENTO.toFixed(2)}`)
                console.log('Pagamento Realizado! Obrigado, volte sempre!')
            }
        }

        if (DINHEIRO === true) {
            console.log(`Você pagou no Dinheiro R$ ${PAGAMENTO}`)
            if (PAGAMENTO > PAGANDO) {
                let troco = PAGAMENTO - PAGANDO
                console.log('Seu troco é: R$', troco.toFixed(2))
            }
            if (PAGAMENTO < PAGANDO) {
                let falta = PAGANDO - PAGAMENTO
                console.log('Falta: R$', falta.toFixed(2), 'Deseja pagar de outra forma?')
            }
            if (PAGAMENTO === PAGAMENTO) {
                console.log('Pagamento Efetuado')
            }
        }
        if (PIX === true) {
            if (PAGAMENTO < PAGANDO) {
                let falta = PAGANDO - PAGAMENTO
                console.log(`Você pagou no PIX R$${PAGAMENTO}`)
                console.log('Falta: R$', falta.toFixed(2), 'Deseja pagar de outra forma?')
            }
            if (PAGAMENTO === PAGANDO) {
                console.log(`Você pagou no PIX R$${PAGAMENTO}`)
                console.log('Pagamento Efetuado')
            }
        }

    }

    console.log("____________________________________________________")

    // metodoPagamento('', true, '', '', '', 50, 91.8)
    // metodoPagamento('', true, '', '', 20, 91.80)
    // metodoPagamento(true, '', '', '', 70, 71.8)
    // metodoPagamento('', '', true, '', 5 , 1.80)
    metodoPagamento('', '', '', true, 70 , 91.8)
    metodoPagamento('', '', '', true, 21.80 , 21.80)
    // metodoPagamento('', true, '', '', '', 50, 91.8)
    // metodoPagamento('', true, '', '', '', 41.8, 41.8)

}

cadastrarIngredientes('Pão', 50, 3.00)
cadastrarIngredientes('Alface', 50, 1.00)
cadastrarIngredientes('Tomate', 50, 4.00)
cadastrarIngredientes('Queijo-Prado', 50, 2.00)
cadastrarIngredientes('Queijo-Mussarela', 50, 1.50)
cadastrarIngredientes('Queijo-Empanado', 50, 8.00)
cadastrarIngredientes('Cebola-Roxa', 50, 1.00)
cadastrarIngredientes('Cebola-Crispy', 50, 2.00)
cadastrarIngredientes('Cebola-Caramelizada', 50, 2.00)
cadastrarIngredientes('Picles', 50, 2.50)
cadastrarIngredientes('Ovo', 50, 1.00)
cadastrarIngredientes('Carne-Blend 180g', 50, 5.00)
cadastrarIngredientes('Carne-Blend 230g', 50, 5.00)
cadastrarIngredientes('Frango-Blend 180g', 50, 4.00)
cadastrarIngredientes('Frango-Blend 230g', 50, 4.00)


pedidoCliente('Leandro dos Santos Cunha', 'Double Smash', 2, 'Coca-cola 600', 2, 'Queijo-Prado', 2)



cadastrarCliente("Leandro dos Santos Cunha", "16/10/1984", "22991031962", "Rua Vigário de Alexandre", 51, "Centro", "20637000", "Ao lado do banco Itaú")
cadastrarCliente("Leonardo Almeida da Cunha", "17/05/2003", "22992033462", "Rua Manoel Alfredo", 32, "Volta", "20637000", "Em frente aos correios")
cadastrarCliente("Beth Soares Lopes", "16/10/1984", "22991031962", "Rua Vigário de Alexandre", 51, "Centro", "20637000", "Ao lado do banco Itaú")
cadastrarCliente("Leandro dos Santos Cunha", "16/10/1984", "22991031962", "Rua Vigário de Alexandre", 51, "Centro", "20637000", "Ao lado do banco Itaú")



cadastrarHamburguer("Mega burguer", "Pão, alface, tomate, queijo, cheddar, carne-blend 180g", 31.9)
cadastrarHamburguer("Double Smash", "Pão, alface, tomate, queijo-mussarela, cheddar, carne-blend 180g, carne-blend 180g", 36.9)
cadastrarHamburguer("Cream Chesse", "Pão, alface, tomate, queijo-mussarela, cream chesse, carne-blend 180g", 34.9)
cadastrarHamburguer("Brguer Simple", "Pão, alface, tomate, queijo, carne-blend 180g", 25.9)


