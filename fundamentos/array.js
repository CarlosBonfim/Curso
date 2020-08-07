const valores = [7.7, 8.9, 6.3, 9.2]//vetor de 4 posições
console.log(valores[0], valores[3])
console.log(valores[4])// nao existe, ele vai dar indefinido
valores[4]=10
console.log(valores[4])
console.log(valores)
valores[8]=6
console.log(valores.length)// serve pra dizer o numero de objetos no vetor

valores.push({id: 3}, false, null, 'teste') // serve para inserir objeto no vetor
console.log(valores)

console.log(valores.pop()) //Serve pra excluir algo do vetor, geralmetne o ultimo
delete valores[0] // outra maneira de excluir algo

console.log(valores)

console.log(typeof valores)// função  typeoff serve para dizer o tipo da variavel

async function init() {
    console.log(1);
    await sleep(1000);
    console.log(2);
}


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}  