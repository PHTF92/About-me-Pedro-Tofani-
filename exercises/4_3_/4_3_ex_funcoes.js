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
