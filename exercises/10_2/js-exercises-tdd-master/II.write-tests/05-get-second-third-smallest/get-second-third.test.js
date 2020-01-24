const pegar2e3 = require("./get-second-third.js")

test('Pegar o segundo e o terceiro', () => {
    const array = [90, 5, 11, 8, 6];
    const resultado = pegar2e3(array);
    expect(resultado).toEqual([6, 8]);
    expect(array).toEqual([90, 5, 11, 8, 6])
});


// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
