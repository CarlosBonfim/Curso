/*console.log(typeof Object) // objeto é uma funçao em javascript

class produto{}

console.log(typeof produto)
*/
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma()

//funcao com retorno
function soma(a, b = 0){
    return a+b
}
console.log(soma(2,3))
console.log(soma(2))
let b = soma(9,2)
console.log(b)