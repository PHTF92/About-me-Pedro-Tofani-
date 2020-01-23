const assert = require('assert');

function myRemove(arr, item) {
    return arr.filter((elem) => elem !== item);
}

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])
// Verifique que o array passado por parâmetro não sofreu alterações
const array = [1, 2, 3, 4]
myRemove(array);
assert.deepStrictEqual(array, [1, 2, 3, 4])
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])