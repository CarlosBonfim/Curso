let dobro = function (a){// Na versão literal eu criei uma variavel que recebe uma function com um parametro a
    return 2*a
}//note que eu tbm poderia criar a funcao da seguinte maneira: function dobro(a), so que como variavel eu posso armaenar


//criei a variaavel dobro la em cima ja, mas agaora to sobreescrevendo
dobro = (a) =>{//crei a variavel dobro que passa um parametro a e depois com a setinha criei a arrow function
    return 2*a
}

dobro = a => 2*a //foi criada uma arrow function de um parametro e uma linha, assim nao precisa de parentese e chave

let banana = (b)=>{
    return b*3
}
console.log(banana(2))


ola = _ =>'Ola'//se nao tiver parametro pra passar, no lugar do parentese pode por uma underline
console.log(ola())
