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

