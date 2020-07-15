function funciounarOuNao(valor, chanceErro) {
    return new Promise(function(resolve, reject){
        try{
            con.log('Banana')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }

    })
}   
funciounarOuNao('Testando: ', 0.9)
    .then(v => `O valor é ${v}`)
    .then(
        v => console.log(v),
        //err => console.log(`Erro Esp.: ${err}`)
    )
    .then(console.log)
    .then(console.log('Passou por aqui'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim'))