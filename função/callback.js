const fabricantes = ["Mercedes","Audi","BMW"] //callback e passar uma função, e essa função sera chamada quando um evento acontecer


function imprimir(nome, indice){
    console.log(`${indice + 1 }.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
