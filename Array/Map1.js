const { remove } = require("lodash")

/* A ideia e mapear um array pra outro array do mesmo tamanho
o map serve pra mapear um array em um outro mas, com algumas modificações
*/
const nums = [1, 2, 3, 4, 5]
    //o map é um for com proposito
let resultado = nums.map(function(e) {
        return e / 2 // todos os elemntos do array serão dividios ´por dois
    })
    //console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //parseFloat converte um string em um flaot com virgula
    //toFIxed diz o tamanho do float pra dois e o replace foi suado pra trocar o ponto para virgula no decimal

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //vai converter, posso chamar denovo e denovo pra fazer esse processo


console.log(resultado)

const numero = [1, 2, 3, 4]
const resul = numero.map(e => {
    if (e % 2 == 0) {
        return e
    } else {
        return null
    }

})
const inserindo = resul.map(n => {
    if (!n)
})