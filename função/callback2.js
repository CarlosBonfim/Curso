const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]//vetor de todas as notas
//sem callback
let notasBaixas1 = [] //novo vetor que vai receber as notas notas baixas
for (let i in notas) {//for in 
    if (notas[i] < 7) {//if que VAI PEGAR AS NOTAS BAIXAS
        notasBaixas1.push(notas[i])//todas as notas que entrarem nesse if, serami inseridas no vetor notas baixas
    }
}
console.log(notasBaixas1)//executa o vetor notas baixas

//com callback
const notasBaixas2 = notas.filter(function (nota) {//notas.filter diz que ele vai puxar do vetor notas
    //vai tá criando uma fução vazia que vai ser armazenada em uma posição do vetor notasBaixas
    return nota < 7
})
console.log(notasBaixas2)

//Com callback e arrowfunction

const notasBaixas3 = notas.filter(nota => nota < 7)//ta criando a variavel nota ai mesmo e de quebra fazendo a comparação
//nota é o parametro e a seta e a condição, como é so uma linha nao precisa de parenteses
console.log(notasBaixas3)

// tem uma outra opção dessa ^^^^^^^^
const notasmenoresque7 = nota => nota > 7// aqui ta a função, ela so é a formula uqe vai ser chamada
const notasBaixas4 = notas.filter(notasmenoresque7)//chamei a função notasmenoresque7 pro filter
console.log(notasBaixas4)
