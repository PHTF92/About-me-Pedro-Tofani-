const assert = require('assert')

// escreva sum abaixo

const sum = (...a) => {
    let b = 0
    a.forEach(item => b += item)
    return b
}


assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
