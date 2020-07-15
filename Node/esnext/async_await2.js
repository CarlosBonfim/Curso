function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) [max,min] = [min,max]  
    return new Promise((resolve, reject) => {
        const fator = max - min + 1 
        const aleatorio = parseInt(Math.random() * fator) + min      
        if(numerosProibidos.includes(aleatorio)){
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtde, tentativas = 1){
    try{
        const numeros = []
        for(let _ of Array(qtde).fill()){
           numeros.push(await gerarNumeroEntre(1,60, numeros))
        }
        return numeros.sort()
    }catch(e){
        if(tentativas > 5){
            throw "Excesso de tentativas"
        } else {
            return gerarMegaSena(qtde, tentativas + 1)   
        }
    }

}
gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
// gerarNumeroEntre(1, 5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)