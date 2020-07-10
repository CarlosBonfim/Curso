//tagged templates - processa o template dentro  de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'GUi'
const situacao = 'aprovado'

//console.log(`${aluno} foi ${situacao}.`);//vai exibir normalmente
console.log(tag`${aluno} foi ${situacao}.`);//vai interpolar
//so vai entrar na função se colocar o "tag" na hora da chamada com o backtick
