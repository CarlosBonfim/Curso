function criarProduto(nome, preco){
    return{
        nome, // eu nao preciso da fazzer nome : nome, pq ja estou passadno como parametro
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('batata',15.99))