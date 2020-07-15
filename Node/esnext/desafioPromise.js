const fs = require('fs')
const path = require('path')
const resolve  = require('path')


function lerArquivo(caminho){
    return new Promise(function (resolve){
        fs.readFile(caminho, function(__, conteudo){
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho).then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `o valor final é: ${conteudo}`)
    .then(console.log())