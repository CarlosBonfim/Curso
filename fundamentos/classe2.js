class avo {
    constructor(sobrenome){//cirou o construtor sorbenome
        this.sobrenome = sobrenome
    }
}
class pai extends avo{
    constructor(sobrenome, profissao = 'Professor'){ // criou o construtor sobrenome e profissao 
        super(sobrenome)
        this.profissao = profissao
    }
}
class filho extends pai {
    constructor(){
            super('Silva','Vendedor')//instanciou o que recebu do pai, se nao alterasse nada esatria igual está la
    }
}
const filho1 = new filho
console.log(filho1)
