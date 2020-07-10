Array.prototype.reduce2 = function(callback, valorInicial){
    const IndiceInicial = valorInicial ? 0 : 1  // se valor inicial ja estiver setado, o indice inicial sera 0 senão 1 
    let acumulador = valorInicial || this[0] //se valor não for setado, pegue a partir da posição 0 do vetor
    for(let i=IndiceInicial; i<this.length;i++){
        acumulador = callback(acumulador, this[i],i,this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce(soma, 21))
/* O acumulador = this[0] ja passa logo na declaração da vairavel o valor para o acumulador, por isso no for ja comça com indice igual a 1
a função callback, será a função que eu vou chamar para fazer a operação */