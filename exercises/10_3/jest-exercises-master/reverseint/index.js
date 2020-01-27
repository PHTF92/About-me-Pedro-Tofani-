// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const arrNum = n.toString().split('');
    const novoArrNum = []
    arrNum.forEach(numero => {
        novoArrNum.unshift(numero)
    })
    if (n < 0) {
        novoArrNum.pop();
        novoArrNum.unshift('-');
    }
    console.log(parseInt(novoArrNum.join('')))
    return parseInt(novoArrNum.join(''))
}

reverseInt(-5)

module.exports = reverseInt;
