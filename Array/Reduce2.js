const produtos = [
    {nome: 'Notebook',preco: 2499,fragil: true},
    {nome:' ipad Pro', preco: 4199, fragil:true },
    {nome:'Copo de vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false }
]
//desafio 1: todos os alunos sao bolsistas
const todosfrageis = (resultado, fragil) => resultado && fragil
console.log(produtos.map(a=>a.fragil).reduce(todosfrageis))

//Desafio 2: algum aluno é bolsista

const algumfragil = (resultado, fragil) => resultado || fragil
console.log(produtos.map(a=>a.fragil).reduce(algumfragil))