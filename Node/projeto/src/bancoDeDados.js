const sequence = {
    _id: 1,
    get id() { return this._id++
    }
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id // se o produto não tiver id, ele ganha
    produtos[produto.id] = produto //aqui vai substituir pelo valor mais recente
    return produto // retorna produto
}

function getProduto(id){ // funcao que vai pegar o produto pelo id
    return produtos[id] || {} //se o produto nao tiver id, simplesmente retorna um produto vazio
}

function getProdutos(){// funcao para retornar os valores dos produtos
    return  Object.values(produtos) // retornar todos os valores
}

function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id] 
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}