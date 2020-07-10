const incremetoA = require('./instanciaUnica')
const incremetoB = require('./instanciaUnica')

//const incrementoC = require('./instanciaNova')
//const incrementoC = require('./instanciaNova')
const incrementoC = require('./instanciaNova')()

const incrementoD = require('./instanciaNova')()

incremetoA.inncremento()
incremetoA.inncremento()

incrementoC.incremento()
incrementoC.incremento()

incrementoD.incremento()


console.log(incremetoA.valor)
console.log(incremetoB.valor)

console.log(incrementoC.valor, incrementoD.valor)
