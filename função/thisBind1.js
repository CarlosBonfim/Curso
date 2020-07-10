const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
       // console.log(pessoa.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)//voce passsa um objeto no qual voce quer que seja resolido o this
falarDePessoa()// quando vc chama um objeto com this, o this sempre sera o objeto que voce passou para a função bind