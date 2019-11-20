//Exercício 1
let n = 5;
let comprimento = []

for (let i = 0; i < n; i++) {
    comprimento.push('*')
}
let linha = comprimento.join('');
let i = 0;
while (i < n) {
    console.log(linha);
    i++;
}
