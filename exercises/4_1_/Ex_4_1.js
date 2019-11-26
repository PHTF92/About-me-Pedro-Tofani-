//Exercício 1
function operacoes(a, b) {
    return (
        console.log(a + b),
        console.log(a - b),
        console.log(a * b),
        console.log(a / b),
        console.log(a % b)
    )
}
operacoes(15, 3);

//Exercício 2
function maiorNumero(x, y, z) {
    let mN
    if (x > y && x > z) { mN = X }
    else if (y > x && y > z) { mN = y }
    else if (z > x && z > y) { mN = z }
    else { console.log("Não tem número maior!") };
    return (mN)
}
console.log('O maior número é', maiorNumero(5, 12, 7));

//Exercício 3
function maiornumerodedois(c, d) {
    let numero = 0
    if (c == d) { numero = 'Os números são iguais' }
    else if (c > d) { numero = c }
    else { numero = d }
    return console.log(numero);
}
maiornumerodedois(8, 17)

//Exercício 4
function ePositivo(numero) {
    let n = -2;
    if (numero > 0) { n = "Positive" }
    else if (numero < 0) { n = "Negative" }
    else if (numero == 0) { n = "Zero" }
    return n;
}
console.log(ePositivo(0));

//Exercício 5
function triangulo(e, f, g) {
    let triang = undefined
    if (e + f + g == 180) { triang = true }
    else {
        triang = false;
    }
    if (triang == true) { return console.log('É triângulo') }
    else return (console.log('Erro'));
}
triangulo(90, 45, 40);

//Exercício 6
function chess(input) {
    let xadrez = input.toLowerCase();

    switch (xadrez) {
        case 'peon':
            return console.log("Foward");
            break;
        case 'queen':
            return console.log("All directions");
            break;
        case 'bishop':
            return console.log("Diagonal");
            break;
        case 'horse':
            return console.log("L");
            break;
        case 'tower':
            return console.log("Vertical and horizontal");
            break;
        default:
            return console.log("Error");
    }
}
chess('hoRse');

//Exercício 7
function conceito(nota) {

    if (nota < 0 || nota > 100) { return console.log("Nota inválida") }
    else if (nota >= 90) { returnconsole.log("A") }
    else if (nota < 90 && nota >= 80) { return console.log("B") }
    else if (nota < 80 && nota >= 70) { return console.log("C") }
    else if (nota < 70 && nota >= 60) { return console.log("D") }
    else if (nota < 60 && nota >= 50) { return console.log("E") }
    else { return console.log("F") }
}
conceito(42);

//Exercício 8
function temPar(n1, n2, n3) {

    if ((n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 != 0) || (n1 % 2 != 0 && n2 % 2 == 0 && n3 % 2 != 0) || (n1 % 2 != 0 && n2 % 2 != 0 && n3 % 2 == 0)) {
        return console.log('Tem par');
    }
    else (console.log('Tem mais de um ou nenhum par'))
}
temPar(4, 4, 3);

//exercício 9
function temImpar(n1, n2, n3) {

    if ((n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 != 0) || (n1 % 2 != 0 && n2 % 2 == 0 && n3 % 2 == 0) || (n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 == 0)) {
        return console.log('Uma peça é ímpar');
    }
    else (console.log('Tem mais de um ou nenhum ímpar'));
}
temImpar(3, 7, 6);

//exercício 10
function lucro(precoVenda, custo) {

    let lucro = 1000 * (precoVenda - 1.2 * custo);
    if (precoVenda < 0 || custo < 0) {
        console.log("Erro")
    }
    else { console.log(lucro) };
}
lucro(140, -20);

//Exercício 11

function salario (salarioBruto){

let inssBaixo = 0.08;
let inssMedio = 0.09;
let inssAlto = 0.11;
let inssMaximo = 570.88 / salarioBruto;
let irIsento = [0, 0];
let irBaixo = [0.075, 142.8];
let irMedioB = [0.15, 354.8];
let irMedioA = [0.225, 636.13];
let irAlto = [0.275, 869.36];

let inss = ((salarioBruto <= 1556.94) ? inssBaixo : ((salarioBruto <= 2594.92) ? inssMedio : ((salarioBruto <= 5189.82) ? inssAlto : inssMaximo)));
let salarioBase = salarioBruto - inss * salarioBruto;
let ir = ((salarioBase <= 1903.98) ? irIsento : ((salarioBase <= 2826.65) ? irBaixo : ((salarioBase <= 3751.05) ? irMedioB : (salarioBase <= 4664.68) ? irMedioA : irAlto)));


let salarioLiquido = salarioBase - ir[0] * salarioBase + ir[1];
return console.log(salarioLiquido);
// console.log(inss, inss * salarioBruto);
// console.log(ir[0], ir[0] * salarioBruto);
// console.log(ir[1]);
}
salario(5500);