//let e const

{
    var a =2
    let b =3
}
console.log(a) //var eu consigo pegar fora do escopa
//console.log(b)// let n

const produto = 'Ipad'

console.log(`${produto} é caro!`)

//desestructuring

const [l, e, ...tras] = "Cod3r"
console.log(l,e, tras)
const[x,y] = [1,2,3]
console.log(x,y)

const{idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)

