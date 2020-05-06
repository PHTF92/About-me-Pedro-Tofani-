const assert = require('assert')

class User {
    constructor (){
        this.nome = ""
    }
    get name (){
        return this.nome;
    }
    set name (novoNome){
        if (novoNome == undefined || novoNome == null) {
            return this.nome = ""
        }
        else {
            return this.nome = novoNome
        }
    }
}

let user1 = new User("Trybe")

assert.equal(typeof User.prototype, "object")
assert.ok(user1 instanceof User)
assert.equal(user1.name, "")

user1.name = undefined;
assert.equal(user1.name, "")

user1.name = null
assert.equal(user1.name, "")

user1.name = "Tryber"
assert.equal(user1.name, "Tryber")
