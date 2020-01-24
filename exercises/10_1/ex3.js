const assert = require('assert');

function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.equal(mySum([1, 2, 3, 4]), 10)
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
assert.equal(mySum([1, -2, -3, 4]), 0)