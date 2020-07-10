/*Declarando variavel com let, trabalha se de maneira mais dinamica, pois o let também funciona com blocos, ou seja, ele olhará primeiro dentro
do bloco mais interno e irá saindo, igual resolve se uma formula matematica
*/
let numero = 1
{ 
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)
