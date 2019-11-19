//Exercício 1
let a = 15;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Exercício 2
let x = 5
let y = 7
let z = 9
if (x > y && x > z) { console.log("O maior número é: ", x) }
else if (y > x && y > z) { console.log("O maior número é:", y) }
else if (z > x && z > y) { console.log("O maior número é:", z) }
else { console.log("Não tem número maior!") };

//Exercício 3
let c = 4;
let d = 5;
if (c == d) { console.log("Os números são iguais") }
else if (c > d) { console.log(x, "é maior que", d) }
else { console.log(d, 'é maior que', c) }

//Exercício 4
let numero = -2;
if (numero > 0) { console.log("Positive") }
else if (numero < 0) { console.log("Negative") }
else if (numero == 0) { console.log("Zero") }

//Exercício 5
let e = 90;
let f = 45;
let g = 40;
triang = undefined

if (e + f + g == 180) { triang = true }
else {
    triang = false;
    console.log("Erro")
}
console.log(triang)

//Exercício 6
let input = 'PEon';
let xadrez = input.toLowerCase();

switch (xadrez) {
    case 'peon':
        console.log("Foward");
        break;
    case 'queen':
        console.log("All directions");
        break;
    case 'bishop':
        console.log("Diagonal");
        break;
    case 'horse':
        console.log("L");
        break;
    case 'tower':
        console.log("Vertical and horizontal");
        break;
    default:
        console.log("Error");
}

//Exercício 7
let nota = 91;

if (nota < 0 || nota > 100) { console.log("Nota inválida") }
else if (nota >= 90) { console.log("A") }
else if (nota < 90 && nota >= 80) { console.log("B") }
else if (nota < 80 && nota >= 70) { console.log("C") }
else if (nota < 70 && nota >= 60) { console.log("D") }
else if (nota < 60 && nota >= 50) { console.log("E") }
else { console.log("F") }

//Exercício 8
let n1 = 11;
let n2 = 21;
let n3 = 23;

if ((n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 != 0) || (n1 % 2 != 0 && n2 % 2 == 0 && n3 % 2 != 0) || (n1 % 2 != 0 && n2 % 2 != 0 && n3 % 2 == 0)) {
    console.log(true);
}
else (console.log(false));

//exercício 9
n1 = 12;
n2 = 22;
n3 = 23;

if ((n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 != 0) || (n1 % 2 != 0 && n2 % 2 == 0 && n3 % 2 == 0) || (n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 == 0)) {
    console.log(true);
}
else (console.log(false));

//exercício 10
let precoVenda = 140;
let custo = 100;
let lucro = 1000 * (precoVenda - 1.2 * custo);
if (precoVenda < 0 || custo < 0) {
    console.log("Erro")
}
else { console.log(lucro) };