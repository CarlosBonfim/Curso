// Var não é muito volatil, ele nao leva blocos em consiferaçao, apenaas global ou função
//Nesse caso eçle lerá para as duas situaçãos valor 2
var numero = 1
{ 
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)
