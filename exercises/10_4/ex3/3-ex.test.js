const pegarUser = require('./3ex.js');

test('pegarUser que exita', async () => {
    const usuario = await pegarUser(4);
    expect(usuario).toEqual('Mark')
})

test('usuario não existe', async () => {
    try {
        await pegarUser(7);
    } catch (e) {
        expect(e).toEqual({ error: 'User with 7 not found.', })
    }
})