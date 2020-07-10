/*O this pode variar muito de acordo com a funcção que está sendo chamado, mas poder ser contornado com uma arrow function
 */

function Pessoa() {
    this.idade = 0
    setInterval(()=> {//na arrow function o this e fixo no contexeto em que foi criado
      this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa;