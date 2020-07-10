let valor // nao inicializada
console.log(valor)


valor = null //ausencia de valor
console.log(valor)
console.log(valor)

const produto = {}
console.log(produto.preco) // Vai dar undefined pois o que não ta declarado é o atributo do objeto

produto.preco = 3.50
console.log(produto)

produto.preco = null// sem preço
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)
