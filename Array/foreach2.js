/*Basciamente estamos criando uma funcao foreach manualente, alterando o prototupe e depois de tudo isso passando os paraketro*/

Array.prototype.forEach2 = function(callback){
    for (let i =0; i<this.length; i++){//this.lenght ira percorrer ate o ultimo parametro do vetor
            callback (this[i], i, this)// estou passadno como parametro o elemtento na posiçao, o indice e o proprio array(por isso o this)
    }
}

const aprovados = ['AAAA','BBB','CCCCC','DDDDDD']

aprovados.forEach2(function(nome, indice){//crio uma função e passso os parametros
    console.log(`${indice + 1} ${nome}`)//exibo o nome e o indice
})

