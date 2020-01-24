const numerosImpares = require('./get-even-numbers.js')

test('Pegar os números ímprares', () => {
    const arranjo = [22, 13, 73, 82, 4];
    const resultado = numerosImpares(arranjo);
    expect(resultado).toEqual([22, 82, 4])
})

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
