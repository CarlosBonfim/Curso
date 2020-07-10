function meuObjeto (){}
//console.log(meuObjeto.prototype)  R=meuObjeto{}

const obj1 = new meuObjeto
const obj2 = new meuObjeto

//console.log(obj1.__proto__ === obj2.__proto__) R=true

//console.log(obj1.__proto__) R=meuObjeto{}
meuObjeto.prototype.nome = 'Bruno'

meuObjeto.prototype.falar = function(){
   console.log(`Olá!, meu nome é ${this.nome}`)
}
obj1.falar()
//Object.freeze(obj2)
obj2.nome = 'Raimundo'
obj2.falar()

/*for (let key in obj1){
    obj1.hasOwnProperty(key) ?
        console.log(key) : console.log(`Veio por herança: ${key}`)
}
*/