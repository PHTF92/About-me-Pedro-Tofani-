var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function () {
    const entrada = [4, 10, 32, 9, 21];
    resultado = largerThanTen(entrada);
    expect(resultado).toEqual([32, 21]);


});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
