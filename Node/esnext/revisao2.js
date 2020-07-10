//arrowfunction es6(2015)

const soma = (a,b) => a+b 

const somab = (a,b) => {
    return a+b//toda a vez que a função tiver um corpo, requer umr return
} 
console.log(soma(2,3))
console.log(somab(22,3))

// arrow function (this0

const lexico1 = () => console.log(this === exports)

//parametro default
function log(texto = 'Node'){//se eu passar undefined ou nenhum calor, ele assummira o texto
    console.log(texto)
}

log()//ele vai paegar o valor definido como padrçao

// operador rest

function total (...numeros){
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}

console.log(total(2,3,4,5));
