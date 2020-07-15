/*const { promises } = require("dns");

setTimeout(() => {
    console.log('Executando Callbak');
    
    setTimeout(() => {
        console.log('Executando Callbak');
    }, 2000);
}, 200);
*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('aquifoi')
            resolve()
        }, tempo)      
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)