// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const stringNome = str.split('')
    const novaStr = [];
    stringNome.forEach(letra => {
        novaStr.unshift(letra)
    })
    console.log(stringNome.join(''))
    console.log(stringNome)
    console.log(novaStr)
    return (stringNome.join() === novaStr.join())
}

console.log(palindrome('arara'))

module.exports = palindrome;
