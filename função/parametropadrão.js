// estrategaia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 //se a nao tive nada o valor padrao vai ser 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
//estrategia 2,3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //se a variavel for direferente de undefned, pegue o valor de a, se nao pegue 1
    b = 1 in arguments ? b : 1// se b no indice 1(indice 1, por causa da segunda posição do vetor qe b)
    c = isNaN(c) ? 1 : c //se a variavel for um numero pegue o valor de c
    return a + b + c
}
console.log(soma2(), soma3(3), soma2(1, 2, 3))

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))