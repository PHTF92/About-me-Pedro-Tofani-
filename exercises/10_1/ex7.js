const assert = require('assert');

// Teste se uma variável foi definida
const a = 'oi'
assert.deepStrictEqual((typeof a !== 'undefined'), true)
// Teste se uma função foi definida
function afunc() {
    return 'oi'
}
assert.deepStrictEqual((typeof afunc === 'function'), true)
// Utilize assert.ok() para testar uma condição
const b = 5
assert.ok(b < 6);
// Compare dois objetos (JSON) para verificar se são idênticos ou não
const obj1 = { 'nome': 'paulo', 'apelido': 'p' }
const obj2 = { 'apelido': 'p', 'nome': 'paulo' }
assert.deepStrictEqual(obj1, obj2)
// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
function eMaior(a, b) {
    if (a > b) return true
    else return false
}
assert.deepStrictEqual(eMaior(6, 5), true)
assert.deepStrictEqual(eMaior(6, 7), false)
