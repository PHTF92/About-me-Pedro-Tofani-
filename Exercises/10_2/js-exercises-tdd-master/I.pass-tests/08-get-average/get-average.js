// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const media = (numerosArranjos) => {
    let unidades = 0;
    let soma = 0;
    numerosArranjos.forEach(elemento => {
        if (typeof elemento === 'number') {
            unidades += 1;
            soma += elemento
        }
    })
    return soma/unidades
}

module.exports = media;
