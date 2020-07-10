//ESTRUTURA DE UM FOR 
let contador = 1 //let i
while(contador <=10){ //limite de repetição
    console.log(`contador = ${contador}`)
    contador++ //incremento
}

for (let i = 1; i<=10;i++){
    console.log(`i=${i}`)
}
const notas = [6.7,7.4,9.8,8.1,7.7]
for (let i = 0; i<notas.length; i++){//lenght significa o tamanho do array
    console.log(`nota= ${notas[i]}`)
}
//For in
const notas2 = [6.7,7.4,9.8,8.1,7.7]
for (let a in notas2){// botei a ao inves de i so pra entender msm
    console.log(a, notas2[a])// a vai dizer a posição do vetor



}
const pessoa = {
    nome: 'Ana',
    Sobrenome:'Silva',
    idade: 29,
    peso: 70}

for (let atributo in pessoa){//posso usar o for in de maneira mais pratica para exxibir atributos de um objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}   
