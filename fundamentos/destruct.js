//è a forma de extrair elementos de uma estrutura
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
const {nome,idade} = pessoa //tire de dentro do objeto o atributo nome e idade
//const {nome: n, idade: i } = pessoa tbm pode, assim vai tá craindo variaveis mas o resultado é o meso
console.log(nome,idade)
const{sobrenome, bemhumorada = true} = pessoa // se nao tiver valor, vai voltar true
console.log(sobrenome, bemhumorada)

const {endereco:{logradouro,numero,cep}} = pessoa // cep nao existe
console.log(logradouro,numero,cep)
//so o ultimo dado pode estar nulo ou undefined, se algum dado no caminho por exemplo vai dar problema
