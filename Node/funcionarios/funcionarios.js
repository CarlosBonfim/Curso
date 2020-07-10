const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesa = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
//  console.log(funcionarios)

//obter a mulher chinesa com o menor salario'
    const func = funcionarios 
    .filter(chinesa) //funcao filter que filtrarade acordo com a funcao chinesa
    .filter(mulher)
    .reduce(menorSalario)

    console.log(func)
})


 
