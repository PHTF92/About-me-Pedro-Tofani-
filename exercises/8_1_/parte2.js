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

//Parte 2 - ex2

const maiorPalavra = c => {
    const arranjoPalavras = c.split(' ');
    let maiorPalavra = arranjoPalavras[0];
    for (let i = 0; i < arranjoPalavras.length - 1; i++) {
        if (arranjoPalavras[i].length > arranjoPalavras[i + 1].length) {
            maiorPalavra = arranjoPalavras[i]
        }
    }
    if (maiorPalavra.length < arranjoPalavras[arranjoPalavras.length - 1].length) { maiorPalavra = arranjoPalavras[arranjoPalavras.length - 1] };
    return maiorPalavra;
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que acontxxxeceu"));