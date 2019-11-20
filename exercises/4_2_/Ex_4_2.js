//Exercício 1
console.log("Ex1");
console.log("");
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

//Exercicio 2
console.log("");
console.log("Ex2");
console.log("");
n = 5;
i = 0;
comprimento = []
linha = null;
for (i; i < n; i++) {
    comprimento.push('*')
    linha = comprimento.join('');
    console.log(linha);
}

//Exercicio 3
console.log("");
console.log("Ex3");
console.log("");
n = 5;
i = 1;
comprimento = []
linha = null;

for (i; i <= n; i++) {
    comprimento = []
    for (let j = 0; j < n; j++) {
        if (j < (n - i)) {
            comprimento.push(' ');
        }
        else {
            comprimento.push('*');
        }
    }
    linha = comprimento.join('');
    console.log(linha);
}
