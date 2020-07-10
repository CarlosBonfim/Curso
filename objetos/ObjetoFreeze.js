const obj = {
    nome: 'joao',
    idade:20
}
console.log(obj)
obj.nome = 'Raimundo'
console.log(obj)
Object.freeze(obj)// a função object freeze não deixa alterar o objeto
obj.nome = 'Teste'
console.log(obj)

//pode fazer aassim tbm
const obj2 = Object.freeze({
    nome: 'gu',
    idade:20
})
obj2.nome = 'Do'
console.log(obj2)
