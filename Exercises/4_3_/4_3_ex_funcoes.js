//Exercício 1
console.log("Ex1:");
console.log("");

function verificaPalindrome(palavra) {
    let map = {
        "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e",
        "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o",
        "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u",
        "Ù": "U", "ç": "c", "Ç": "C"
    };

    function removerAcentos(s) { return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) };

    let semMaiuscula = palavra.toLocaleLowerCase();
    let semAcento = removerAcentos(semMaiuscula);
    let p_Arranjo = [];
    p_Arranjo = semAcento.split('');
    console.log(p_Arranjo);
    let comprimento = p_Arranjo.length;
    let ePalindromo = true;

    for (let i = 0; i < comprimento / 2; i++) {
        if (p_Arranjo[i] == p_Arranjo[comprimento - 1 - i]) { continue }
        else {
            ePalindromo = false;
            break;
        }
    }
    return ePalindromo;
}
console.log(verificaPalindrome('arara'));

//Exercício 2
console.log("");
console.log("Ex2:");
console.log("");

function iMaiorValor(arranjo2) {

    let valor = [];
    valor = arranjo2;
    let indiceMenor = 0;
    let comprimento = valor.length;
    for (let i = 0; i < comprimento - 1; i++) {
        if (valor[i] > valor[i + 1] && valor[i] > valor[indiceMenor]) { indiceMenor = i }
        if (valor[comprimento - 1] > valor[indiceMenor]) { indiceMenor = (comprimento - 1) }
    }
    return indiceMenor;
}
console.log(iMaiorValor([3, 3, 60, 4, 1, 1, 52]));

//Exercício 3
console.log("");
console.log("Ex3:");
console.log("");

function iMenorValor(arranjo3) {

    let valor = [];
    valor = arranjo3;
    let indiceMenor = 0;
    let comprimento = valor.length;
    for (let i = 0; i < comprimento - 1; i++) {
        if (valor[i] < valor[i + 1] && valor[i] < valor[indiceMenor]) { indiceMenor = i }
        if (valor[comprimento - 1] < valor[indiceMenor]) { indiceMenor = (comprimento - 1) }
    }
    return indiceMenor;
}
console.log(iMenorValor([1, 3, 60, 4, -5, 3, 52]));

//Exercício 4
console.log("");
console.log("Ex4:");
console.log("");

function iNomeMaior(arranjo4) {

    let nomes = [];
    nomes = arranjo4;
    let nomeMaior = 0;
    let comprimento = nomes.length;
    for (let i = 0; i < comprimento - 1; i++) {
        if (nomes[i].length > nomes[i + 1].length && nomes[i].length > nomeMaior) { nomeMaior = nomes[i] }
        if (nomes[comprimento - 1].length > nomeMaior.length) { nomeMaior = nomes[comprimento - 1] }
    }
    return nomeMaior;
}

console.log(iNomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Exercício 5
console.log("");
console.log("Ex5:");
console.log("");

function maisVezes(arranjo5) {
    let ordenado = arranjo5.sort();
    let contagem = 1
    let organizador = [ordenado[0], 1]
    let i = 0;
    let comprimento = arranjo5.length;
    for (i; i < comprimento; i++) {
        if (ordenado[i] == ordenado[i + 1]) contagem += 1;
        else if (organizador[1] < contagem) {
            organizador[1] = contagem;
            organizador[0] = ordenado[i];
            contagem = 1;
        }
    }
    return (organizador[0]);
}
console.log(maisVezes([2, 5, 3, 3, 3, 5, 3, 6]));

//Exercício 6
console.log("");
console.log("Ex6:");
console.log("");

function retornasoma(n) {

    let i = 1;
    let resultado = 1;
    while (i < n) {
        resultado += (i + 1);
        i++;
    }
    return resultado
}
console.log(retornasoma(5));

//Exercício 7
console.log("");
console.log("Ex7:");
console.log("");

function eFinal(word, ending) {
    let eVerdade = true;

    let arranjoW = word.split('');
    let arranjoE = ending.split('');

    comparacao = arranjoW.length - arranjoE.length;
    console.log(comparacao);

    for (let i = 0; i < arranjoE.length; i++) {
        if (arranjoE[i] == arranjoW[comparacao + i]) continue
        else eVerdade = false;
    }
    return eVerdade;
}
console.log (eFinal("Trybe", "be"));