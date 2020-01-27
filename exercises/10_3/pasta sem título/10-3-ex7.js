const a = 3;

function eMaior(a, b) {
    if (a > b) return true
    else return false
}

const obj1 = { 'nome': 'paulo', 'apelido': 'p' }
const obj2 = { 'apelido': 'p', 'nome': 'paulo' }

exports.funcao = eMaior;
exports.variavel = a
exports.obj1 = obj1
exports.obj2 = obj2
