const carrinho = [
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caneta", "preco": 7.50 }',
    '{"nome": "kit de lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

Array.prototype.map2 = function(callback){
    const a = []
    for (let i = 0; i < this.length; i++){
      a.push(callback(this[i], i, this))  
    }
    return a
}

const paraObjeto = json => JSON.parse(json)//criou uma cariavel json que vai receber o parse
const apenasPreco = produto =>produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
