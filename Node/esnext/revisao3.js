// reucros do es8 object.values/object.entries

const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj))//vai mostrar so os valores
console.log((Object.entries(obj)));//vai criar uma matriz com as chaves e valores

//melhorias na Notação Liberal

const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}
console.log((pessoa.nome, pessoa.ola()));

//Class

class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au Au'
    }
}

console.log(new Cachorro().falar());
