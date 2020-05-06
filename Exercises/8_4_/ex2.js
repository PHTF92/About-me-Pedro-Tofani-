const assert = require('assert')

class Person {
    constructor(nome, idade) {
        this.name = nome;
        this.age = idade
    }
}

let person = new Person("Diana", 34)

assert.equal(typeof Person.prototype, "object")
assert.ok(person instanceof Person)
assert.equal(person.name, "Diana")
assert.equal(person.age, 34)
