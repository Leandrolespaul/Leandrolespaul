import id from "../funcoes.js/id.js"
import hamburgers from "../arrays/arrayHamburgers.js";
import ingredientes from "../arrays/arrayIngredientes.js";
import identIng from "../funcoes.js/idIngredientes.js"


export const cadastrarIngredientes = (descricao, qtd, preco) => {
    ingredientes.push({ id: identIng(), descricao, qtd, preco })
}

// console.log(ingredientes)

export const  cadastrarHamburguer = (descricao, ingredientes, preco) => {
    if (typeof descricao !== "string") Error('error')
    if (typeof ingredientes !== "string") Error('error')
    if (typeof adicional !== "string") Error('error')
    if (typeof preco !== "number") Error('error')
    hamburgers.push({ id: id(), descricao, ingredientes, preco })
}

const alterarHamburguer = (id, descricao, ingredient, preco) => {
    if (typeof descricao !== "string") Error('error')
    if (typeof ingredient !== "string") Error('error')
    if (typeof adicional !== "string") Error('error')
    if (typeof preco !== "number") Error('error')
    const encontrarHamburger = hamburgers.find(hamburger => hamburger.id === id)
    if (descricao) encontrarHamburger.descricao = descricao
    if (ingredient) encontrarHamburger.ingredientes = ingredient
    if (preco) encontrarHamburger.preco = preco
}

const deletarHamburger = (id) => {
    const filtrarHamburger = hamburgers.filter(hamburger => hamburger.id !== id)
    console.log(filtrarHamburger)
}

cadastrarHamburguer("Mega burguer", "Pão, alface, tomate, queijo, cheddar, carne-blend 180g", 31.9)
cadastrarHamburguer("Double Smash", "Pão, alface, tomate, queijo-mussarela, cheddar, carne-blend 180g, carne-blend 180g", 36.9)
cadastrarHamburguer("Cream Chesse", "Pão, alface, tomate, queijo-mussarela, cream chesse, carne-blend 180g", 34.9)
cadastrarHamburguer("Brguer Simple", "Pão, alface, tomate, queijo, carne-blend 180g", 25.9)




// alterarHamburguer(1, 'Frango-Burguer', '', '')

// deletarHamburger(1)


// console.log(hamburgers)








