function soma() {//arguments é uma função que permite pegar todos os paramtros passados
    let soma = 0 //ja que se trata de um array, tem que partir da posição inicial
    for (i in arguments) {//vai criar um array que vai percorrer os indices, assim recupreando os parametros
        soma +=arguments[i]//soma recebe uma tribuição aditiva, como o valor soma foi zerado, ele apenas somara o argumento com 0
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(1.1, 2.2, "Teste")// ele somou os dois primeiross e concatenar com a string
console.log(soma('a', 'b', 'c'))
