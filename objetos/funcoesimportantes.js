const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.isFrozen(pessoa))//verifica se objeto está congeladp
console.log(Object.keys(pessoa))//me dá as chaves do objeto
console.log(Object.values(pessoa))// me da os valores do objeto
console.log(Object.entries(pessoa))//chave e valor objeto

Object.entries(pessoa).forEach(([chave, valor]) => {//função for each para percorrer o vetor 
    console.log(`${chave}: ${valor}`)// vai mostrar o valor e a chave presente no indice
})

Object.defineProperty(pessoa, 'dataNascimento',  {// voce pode criar uma propriedade e um objeto com as caracteristicas da linguagem
    enumerable: true,//para ser enumerado nas chaves
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'//Nao vai funcionar pois o objeto está congelado
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
//Object.assign 
const det = {a:1}
const o1 = {b:2, c:3}
const obj = Object.assign(det,o1)//serve para concatenar os objetos em 1
console.log(obj)//vai ficar  a:1 , b:2 , c:3
