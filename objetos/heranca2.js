//Prototype
Object.prototype.attr0 = '0'//mexe aqui n 
const avo = { att1: 'A'}//herda do prototye por padrão
const pai = { __proto__:avo, attr2: 'B'}//herda do avo
const filho = {__proto__: pai, attr3: 'C'}//herda do pai

console.log(filho.att1)//Ele vai pesquisar atributo 1 e não ira achar então irá buscar no pai, também não estara la, entao ira para o avo, e encotrara
console.log(filho.attr0, filho.att1,filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`// nesse caso ele procurou a função status aqui, se não achasse, ele iria pro da função
    }//chamei super pra ir no statuss do carro
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(50)
ferrari.acelerarMais(100)

console.log(ferrari.status())
console.log(volvo.status())