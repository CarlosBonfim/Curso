/*function Pessoa() {
    this.idade = 0,
    

   // const self = this
    setInterval(function (){//funcao setInterval voce pode dar um intervalo de tempo em milesegundos para que seja disparada
        this.idade++
        
        console.log(this.idade)
    }.bind(this) ,1000)
}
new Pessoa
*/


function Pessoa() {
    this.idade = 0

    const self = this //criou uma constante pra recebr o this, pra que mao imporat quem chame a função, o this seja o mesmo
    setInterval(function () {
        self.idade++//nesse caso self vai substituir o self, pois o self se refere aque self
        console.log(self.idade)
    }/*bind(this)*/, 1000)
}
new Pessoa