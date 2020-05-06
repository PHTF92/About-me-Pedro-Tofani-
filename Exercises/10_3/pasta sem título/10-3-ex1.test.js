const soma = require('./10-3-ex1.js')

test('soma de um número', () => {
    // Teste se o retorno de sum(4, 5) é 9
    expect(soma(4, 5)).toEqual(9);
    // Teste se o retorno de sum(0, 0) é 0
    expect(soma(0, 0)).toEqual(0);
    // Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
    expect(() => soma(4, '5')).toThrowError();
    // Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
    expect(() => soma(4, '5')).toThrow(new Error('parameters must be numbers'));
})
