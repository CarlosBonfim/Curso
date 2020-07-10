const produtos = [
    {nome: 'Notebook',preco: 2499,fragil: true},
    {nome:' ipad Pro', preco: 4199, fragil:true },
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false }
]
//developer mozilla
console.log(produtos.filter(function(p){
    return false
}))
/*
CaroFragil = produtos.filter(function(retorne){
    return retorne.preco > 500 && retorne.fragil == true
})
console.log(CaroFragil)
*/

const caro = p=> p.preco >= 500
const fragil = p=> p.fragil// == true(pelo fato de ser uma arrow functio ja passa verdadeiro por padrão)

const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)
