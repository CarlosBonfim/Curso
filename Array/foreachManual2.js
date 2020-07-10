Array.prototype.forEach3 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['AAAA','BBB','CCCCC','DDDDDD']

aprovados.forEach3(function(nome, indice){//crio uma função e passso os parametros
    console.log(`${indice + 1} ${nome}`)//exibo o nome e o indice
})