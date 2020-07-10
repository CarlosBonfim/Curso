function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//arredonda para baixo
}
console.log(rand([50, 40]))//parentese, cochete
console.log(rand([992]))//parentese cochete
console.log(rand([ ,10]))
console.log(rand([ ]))