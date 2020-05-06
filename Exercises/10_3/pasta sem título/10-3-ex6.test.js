const fizz = require('./10-3-ex6.js');

test('myFizzBuzz', () => {
    // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    expect(fizz(15)).toEqual('fizzbuzz')
    // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    expect(fizz(6)).toEqual('fizz')
    // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    expect(fizz(10)).toEqual('buzz')
    // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    expect(fizz(7)).toEqual(7)
    // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
    expect(fizz('7')).toEqual(false)
}) 