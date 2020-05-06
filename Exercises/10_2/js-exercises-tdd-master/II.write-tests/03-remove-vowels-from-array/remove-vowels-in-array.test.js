const removeVowelsArray = require("./remove-vowels-in-array.js");

test("remove vowels from all words in array", function () {
  const palavras = ["Irina", "Etza", "Daniel"]
  const resultado = removeVowelsArray(palavras)
  expect(resultado).toEqual(["__i_a", "___a", "_a_ie_"]);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
