//que contêm uma chave única e um valor mapeado para essa chave
//contem chave e valor
//É mais usado para pesquisar algo

const tecnologias = new Map()

tecnologias.set('react', {framework : false })
tecnologias.set('angular', {framework : true})

console.log(tecnologias.react);
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function () { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
    
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))//funcao que diz que um elemento está contido nesse map ou nao
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));//funcao que diz agora que nao ta no map
console.log(chavesVariadas.size);//que diz o tamanho
console.log(chavesVariadas);

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas);



