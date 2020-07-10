const aprovados = ['AAAA','BBB','CCCCC','DDDDDD']

aprovados.forEach(function(nome, indice){//crio uma função e passso os parametros
    console.log(`${indice + 1} ${nome}`)//exibo o nome e o indice
})
aprovados.forEach(nome => console.log(nome))//uma arrow function que apenasd exibe o nome

const exibirAprovados = aprovados => console.log(aprovados) 
aprovados.forEach(exibirAprovados)