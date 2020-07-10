// operador ...rest(juntar)/spread(espalhar)

//spread como objeto
const funcionario = {nome: 'Maria', salario: 123487.99}
const clone = {ativo: true, ...funcionario}//vai juntar
console.log(clone);

//usar spread com array

const GroupA = ['Joao','Pedro','Gloria']
const GrupoFinal = ['Maria', 'Rafaela', ...GroupA]

console.log(GrupoFinal);


