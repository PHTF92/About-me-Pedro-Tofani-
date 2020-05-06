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

//Exercício 4
console.log("");
console.log("Ex4");
console.log("");
n = 24;
i = 1;
comprimento = []
linha = null;
if (n < 3) {
    console.log("O número deve ser maior do que 2");
}
else {
    let nlinha = 0;
    if (n % 2 == 0) { nlinha = n / 2; }
    else { nlinha = (Math.trunc(n / 2) + 1) }
    for (i = 1; i <= nlinha; i++) {
        comprimento = [];
        for (let j = 0; j < (nlinha - i); j++) {
            comprimento.push(' ');
        }
        for (let j = 0; j < (n - 2 * (nlinha - i)); j++) {
            comprimento.push('*');
        }
        for (let j = 0; j < (nlinha - i); j++) {
            comprimento.push(' ');
        }
        linha = comprimento.join('');
        console.log(linha);
    }
}

//Exercício 5
console.log("");
console.log("Ex5");
console.log("");

let nPrimo = 151;
let nDivisoes = [];
let x;
let ePrimo = true;
for (let i = 2; i < nPrimo; i++) {
    nDivisoes.push(i);
}
for (x of nDivisoes) {
    if (nPrimo % x == 0) { ePrimo = false }
}
if (ePrimo == true) { console.log(nPrimo, 'é primo') }
else { console.log(nPrimo, 'não é primo') }

//Exercício 6
console.log("");
console.log("Ex6");
console.log("");

let algarismo = "MMMMCMXCVIII"
let arranjo = algarismo.split('');
let cadaItem;
let transfEmArabicos = [];
for (cadaItem of arranjo) {
    switch (cadaItem) {
        case 'I':
            transfEmArabicos.push(1);
            break;
        case 'V':
            transfEmArabicos.push(5);
            break;
        case 'X':
            transfEmArabicos.push(10);
            break;
        case 'L':
            transfEmArabicos.push(50);
            break;
        case 'C':
            transfEmArabicos.push(100);
            break;
        case 'D':
            transfEmArabicos.push(500);
            break;
        case 'M':
            transfEmArabicos.push(1000);
            break;
    }
}
let resultado = 0;
let operations = (transfEmArabicos.length - 1);
for (let index = 0; index < (operations); index++) {
    if (transfEmArabicos[index] < transfEmArabicos[index + 1]) { resultado -= (transfEmArabicos[index]) }
    else { resultado += (transfEmArabicos[index]) }
}
resultado += transfEmArabicos[(transfEmArabicos.length - 1)];
console.log (resultado);
