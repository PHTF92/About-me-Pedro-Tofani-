const assert = require('assert');

function myIndexOf(arr, item) {
    return arr.findIndex((element) => element === item);
}

// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.equal(myIndexOf([1, 2, 3, 4], 3), 2)
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.equal(myIndexOf([1, 2, 3, 4], 5), -1)
