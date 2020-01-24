const assert = require('assert');


assert.deepEqual(retornaPrimo(5), [1, 5, 2, 3])
assert.deepEqual(retornaPrimo(1), [1])
assert.deepEqual(retornaPrimo(2), [1, 2])
assert.deepEqual(retornaPrimo(9), [1, 9, 2, 3, 5, 7])

function retornaPrimo(n) {
    const arranjo = criarArranjo(n);
    if (n ===1) return [1]
    const divisoresPrimos = [1, n];
    arranjo.forEach(elemento => {
        if (ePrimo(elemento)) divisoresPrimos.push(elemento)
    })
    return divisoresPrimos
}

function ePrimo(n) {
    if (n === 2) return true
    const divisores = criarArranjo(n)
    let ePrimo = true
    divisores.forEach(elemento => {
        if (n % elemento === 0) ePrimo = false
    })
    return ePrimo;
}

function criarArranjo(n) {
    const arranjoAlgarismos = []
    for (let i = 2; i <= n - 1; i++) {
        arranjoAlgarismos.push(i)
    }
    return arranjoAlgarismos
}

