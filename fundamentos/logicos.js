function compras(trabalho1, trabalho2){
    const comprarsorvete = trabalho1 || trabalho2 //operaçaõ logica para ou
    const comprarTv50 = trabalho1 && trabalho2 // funcao logica para e
   // const comprarTv32 = !!(trabalho1 ^trabalho2)
    const comprarTv32 = trabalho1 != trabalho2 //simulação de xor
    const manterSaudavel = !comprarsorvete // operador unário

    return{comprarsorvete, comprarTv50, comprarTv32, manterSaudavel} //retornando como se tivesse criado um objeto
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))