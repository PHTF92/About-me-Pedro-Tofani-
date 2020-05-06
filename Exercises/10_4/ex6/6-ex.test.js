const exportados = require('./6ex.js');
const { app, counter } = exportados
let count = 0;

test('Foi executado', () => {
    const mock = {
        increment: jest.fn(),
        getCount: jest.fn()
    }
    app(mock);
    expect(mock.increment).toHaveBeenCalledTimes(2);
    expect(mock.getCount).not.toHaveBeenCalled();
})
