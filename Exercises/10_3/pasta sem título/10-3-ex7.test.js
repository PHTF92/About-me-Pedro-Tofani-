const exportados = require('./10-3-ex7.js')

const {funcao, variavel, obj1, obj2} = exportados

test('Bora testar tudo!', () => {
    // Teste se uma variável foi definida
    expect(variavel).toBeDefined();
    // Teste se uma função foi definida
    expect(typeof (funcao)).toEqual('function')
    // Compare dois objetos(JSON) para verificar se são idênticos ou não
    expect(obj1).toEqual(obj2)
    // Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
    expect(funcao(6,5)).toEqual(true)
    expect(funcao(6,7)).toEqual(false)

})