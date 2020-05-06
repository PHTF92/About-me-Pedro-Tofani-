const adicao = require('./7ex.js');

test('textando a funcao', () => {
const funcaoMock = {
    add: jest.fn(),
    getCount: jest.fn()
}
adicao(funcaoMock)

expect(funcaoMock.add).toHaveBeenCalled()
expect(funcaoMock.add).toHaveBeenCalledTimes(2)
expect(funcaoMock.add).toHaveBeenCalledWith(15)
expect(funcaoMock.add).toHaveBeenCalledWith(20)
})