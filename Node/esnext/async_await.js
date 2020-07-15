function esperarPor(tempo = 1500){
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)      
    })
}
//esperarPor(2000)
    // .then(() => console.log('Executando promisse 1.'))
    // .then(esperarPor)
    // .then(() => console.log('Executando promisse 2.'))
    // .then(esperarPor)
    // .then(() => console.log('Executando promisse 3.'))
function retornarValor() {
    return new Promise (resolve => {
        setTimeout(()=>resolve(10),5000)
    })
}


 async function exectuar() {
    let valor = await  retornarValor()

    await esperarPor(1500)
    console.log(`assync/Await ${valor}`);
    await esperarPor(1500)
    console.log(`assync/Await ${valor + 1}`);
    await esperarPor(1500)
    console.log(`assync/Await ${valor +2}`);
 }   
 
 async function execDeVerd(){
    const v = await exectuar()
    }
execDeVerd()
 
 //exectuar()
    //.then(console.log)