//Parte 2 - ex1

const fatorial = a => {
    let fatorial = 1
    for (let i = a; i >= 1; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(`O fatorial é ${fatorial(1)}`);

const fatorialRecursivo = b => {
    return resultado = b > 1 ? b * fatorialRecursivo(b - 1) : 1
}

console.log(fatorialRecursivo(5));
