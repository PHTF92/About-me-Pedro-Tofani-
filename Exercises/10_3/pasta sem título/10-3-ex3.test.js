const soma = require('./10-3-ex3.js')

test('Minha soma', () => {
    // Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
    expect(soma([1, 2, 3, 4])).toEqual(10)
    // Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
    expect(soma([1, -2, -3, 4])).toEqual(0)
})