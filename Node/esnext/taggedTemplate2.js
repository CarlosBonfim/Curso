function real(partes,...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`//isNan se nao for um valor numerico, ira retornar ele msm
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)//so vai entrar na função se colocar o real na hora da chamada com o backtick
