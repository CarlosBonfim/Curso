//Notacao ponto serve pra meio que conectar uma coisa que está em algo o proprio console . log é um exemplo

console.log(Math.ceil(6.1)) //fumçao para arredondar um valor, no caso ceil vai pra cima

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // Pode ser usado pra alterar o atributo 1 NAO RECOMENDADO
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()