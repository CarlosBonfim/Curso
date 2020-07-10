const produtos = [
    {nome: 'Notebook',preco: 2499,fragil: true},
    {nome:' ipad Pro', preco: 4199, fragil:true },
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false }
]

Array.prototype.filter2 = function(callback){
    const a = []
    for(let i=0; i<this.length;i++){
        if(callback(this[i],i,this)){// nessa hora entra na fução pro exemplo caro, exemplo se caro retornou verdadeiro, push
            a.push(this[i])
        }
    }
}

console.log(produtos.filter(function(p){
    return false
}))


const caro = p=> p.preco >= 500
const fragil = p=> p.fragil

const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)
