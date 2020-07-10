const pilotos = ['vettel','alonso','raikkonen','massa']
pilotos.pop()//ira remover o ultimo, no caso o massa

pilotos.push('Vestappen')// vai inserir o vestappen na ultima posição
console.log(pilotos)

pilotos.shift()// remove o priemiro elemento da lista de pilotos
console.log(pilotos)

pilotos.unshift('Hamilton')// Insere o elemtno no primeiro idnice do vet, ou seja no indice 0
console.log(pilotos)

pilotos.splice(2,0,'Bottas','Massa')//dessa maneira nao vamos deletar nignuem, mas apensas inserir no indice 0
console.log(pilotos)

pilotos.splice(3,1)//estara removendo um elemtno a partir da linha 3, ou seja, depois dela que é o massa
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)// vai ta craindo um novo vetor a partir da linha dois
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1,4)// vai pegar do vet posicao 1 ate o anteriro ao 4(ou seja o 3)
console.log(algunsPilotos1)