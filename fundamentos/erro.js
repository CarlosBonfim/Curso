function tratarErroELancar(erro) {
   // throw new Error('...')
   throw {// throw serve pra gravar metodos de excessão
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}

function imprimirnomegritado(obj) {
    try { //tentar exedcutar
        console.log(obj.name.toUpperCase() + '!!!')
    } 
    catch (e) {//catch  signifcia caso de erro, ele abre a funçao tratar erro e passa por referencia uma variavel 
        tratarErroELancar(e)
    }
    finally{//vai passar independente de erro ou nao
        console.log('final')
    }
}
const obj = { nome: 'Roberto' }
imprimirnomegritado(obj)