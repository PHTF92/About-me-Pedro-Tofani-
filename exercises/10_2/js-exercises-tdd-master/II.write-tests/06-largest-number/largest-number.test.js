const maiorNumero = require('./largest-number.js');

test('Pegar o maior número', ()=> {
    const array = [3, 21, 88, 4, 36];
    const resultado = maiorNumero(array)
    expect(resultado).toEqual(88)
    expect(array).toEqual([3, 21, 88, 4, 36])
}) 
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
