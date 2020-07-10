const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto']= 'Generica' //marca do produto está com string por nao se encaixar na notação ponto
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const Carro = {
    modelo: 'Uno',
    valor: 5000,
    proprietario: {
        nome: 'Raimundo',
        idade: 25
    }
}
Carro.proprietario.idade = 29 //usando a notação ponto para cheagr nos valores do objeto
console.log(Carro)