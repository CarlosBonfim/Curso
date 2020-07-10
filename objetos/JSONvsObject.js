const obj = {a: 1, b: 2, c: 3}
console.log(JSON.stringify(obj))//transforma um objeto em JSON

console.log(JSON.parse('{"a": 1, "b": 2}'))// transformando um JSON em algo, strings devem ser em aspas duplas
console.log(JSON.parse('{"a": 1, "b": true, "d" : {}, "e": []}'))// permite chaves, booleanos
