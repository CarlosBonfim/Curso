//com promises
const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve, reject)=> {
        http.get(url, res => {//res resposta
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

// recurso do es8
//objetivo de simplificar o uso de promisses

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
}//retorna uma funcao asyncFucntion
obterAlunos()
    .then(alunos => alunos.map( a => a.nome))
    .then(nomes => console.log(nomes))