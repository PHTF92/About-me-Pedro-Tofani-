const indexOf = require('./10-3-ex2.js');

test('IndexOf', () => {
    // Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
    expect(indexOf([1, 2, 3, 4], 3)).toEqual(2)
    // Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
    expect(indexOf([1, 2, 3, 4], 5)).toEqual(-1)
})