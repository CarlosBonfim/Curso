// Um redeuce transforma um array em outra coisa
const produtos = [
    {nome: 'Notebook',preco: 2499,fragil: true},
    {nome:' ipad Pro', preco: 4199, fragil:true },
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false }
]
console.log(produtos.map(prod=>prod.preco))
const resultado = produtos.map(prod => prod.preco).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)