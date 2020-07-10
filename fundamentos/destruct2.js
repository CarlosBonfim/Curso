//Quando se desestrutura um array usa o cochete, pois vetores usam cochetes
const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8] // pra pegar algo em posiçao no vetor tem que deixar o espaço em branco, pra poder pegar na posiçao certa
console.log(n1,n3,n5,n6)
//da pra vazer array do array tbm kkk, no caso o novo array vai tá numa posição do array
