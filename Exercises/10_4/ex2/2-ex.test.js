const pegarUser = require('./2ex.js')

test('pegar o usuario', () => {
    return expect(pegarUser(4)).resolves.toEqual('Mark');
})

test('Usuario inexistente', () => {
    return pegarUser(7).catch(e => expect(e).toEqual({ error: 'User with 7 not found.', }));
})