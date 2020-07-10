let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//Uma exclamação igual a falso, duas igual a verdadeiro

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!(' '|| null || 0 || '123'))

let nome = '' // vazio
console.log(nome || 'Desconhecido')// se nome tiver vazio, aparecer desconhecido no lugar do nome