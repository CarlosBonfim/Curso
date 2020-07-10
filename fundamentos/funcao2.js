//Armazena uma função dentro da varivael
const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
//Armazenando uma funcao arrow em uma variael
const soma = (a,b) => {
    return a=b
}
console.log(soma(2,3))
// retorno implicito

const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a) //funcao arrow com retrono implicito de um parametro
imprimir2('Legal')