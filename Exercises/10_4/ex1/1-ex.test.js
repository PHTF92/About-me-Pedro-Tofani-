const upper = require('./1ex.js');

const callback = jest.fn();
upper('bola', callback)

test('Será função?', async () => {
    expect(typeof (upper)).toEqual('function');
    expect(callback).toHaveBeenCalledWith('BOLA');
})