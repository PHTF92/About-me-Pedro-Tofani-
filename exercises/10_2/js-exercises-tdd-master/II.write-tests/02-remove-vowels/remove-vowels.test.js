var removeVowels = require("./remove-vowels.js");
test("remove vowels from word", function () {
  const nome = 'samuel'
  const resultado = removeVowels(nome)
  expect(resultado).toEqual(  '_a_ue_');
});
