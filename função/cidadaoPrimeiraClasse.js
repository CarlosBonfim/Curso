// Função em Js é First-Class Object(citzens)
//High-order function

//Crair de forma literal
function fun1() { }

//Armazenar como uma variavel
const fun2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]// fun1 e fun2 soa as funçoes literais que tbm forama aramazenadas no vetor
console.log(array[0](2, 3))

//Armazenar atributo em um objeto
const obj = {}// criou o obneheto vaizo
obj.falar = function () { return 'opa' }//criou o atributo e função pra retornar uma palavra
console.log(obj.falar())// recebeu o return e executou

//passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Execeutando...') })

//Uma função pode retornoar /conter uma função
function soma(a, b) {//criou a função literal soma
    console.log('aqui')
    return function (c) {//vai ta retornado uma nova function c
        console.log(a + b + c) //vai ta somando os tres valores, atenção na maneira como está passando c
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)// vc pode passar a função soma e passar masi um valor como parametro
cincoMais(4)//cinco mais recebeu ps outros valores da funcao soma e agora vai passar o quatro pra execução interna