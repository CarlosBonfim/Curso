const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caneta", "preco": 7.50 }',
    '{"nome": "kit de lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]
// Retornar um array apenas com os preços

//const conversao = carrinho => JSON.parse(carrinho)


const paraObjeto = json =>JSON.parse(json)//criou uma cariavel json que vai receber o parse
const apenasPreco = produto =>produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
