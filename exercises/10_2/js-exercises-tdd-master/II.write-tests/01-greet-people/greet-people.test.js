let greetPeople = require("./greet-people.js");

test("print list of names prefixed with Hello", function() {
  // Arrange
  // Act
  // Assert

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
  var expected = 'Hello IrinaAshleighEtza'
  expect(result).toEqual(expected);
});
