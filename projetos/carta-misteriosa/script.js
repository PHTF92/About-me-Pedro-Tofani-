window.onload = function () {
    gerarCarta();
}

let botao = document.getElementsByTagName('button')[0];
let pai = document.getElementById('bloco');
let filhos = document.getElementsByClassName('palavraOutput')
let arranjoEstilo = [];
let arranjoAleatorio = [];

botao.addEventListener('click', gerarCarta);

function gerarCarta() {
    limparDivs();
    criarEstilo();
    let selectTexto = document.getElementsByTagName('input')[0];
    let texto = selectTexto.value;
    let arranjoTexto = texto.split(' ');
    let comprimento = arranjoTexto.length;
    for (let i = 0; i < comprimento; i++) {
        criarDiv(arranjoTexto[i])
    }
    document.getElementById('npalavras').innerHTML = 'O número de palavras é: ' + comprimento;
}

function criarDiv(palavra) {
    criarEstilo();
    let word = document.createElement('div');
    word.innerHTML = palavra;
    word.classList.add('palavraOutput');
    word.classList.add(arranjoEstilo[0]);
    word.classList.add(arranjoEstilo[1]);
    word.classList.add(arranjoEstilo[2]);
    word.classList.add(arranjoEstilo[3]);
    word.classList.add(arranjoEstilo[4]);
    word.addEventListener('click', alterarEstilo)
    pai.appendChild(word);
}

function limparDivs() {
    let ndivs = document.getElementsByClassName('palavraOutput').length;
    for (let i = 0; i < ndivs; i++) {
        pai.removeChild(filhos[0])
    }
}

function criarEstilo() {
    arranjoAleatorio[0] = Math.floor((Math.random() * 5) + 1)
    arranjoAleatorio[1] = Math.floor((Math.random() * 3) + 1)
    arranjoAleatorio[2] = Math.floor((Math.random() * 3) + 1)
    arranjoAleatorio[3] = Math.floor((Math.random() * 3) + 1)
    arranjoAleatorio[4] = Math.floor((Math.random() * 3) + 1)

    imagemFundo(arranjoAleatorio[0]);
    tamanhoLetra(arranjoAleatorio[1]);
    efeitoFonte(arranjoAleatorio[2]);
    corLetra(arranjoAleatorio[3]);
    corFundo(arranjoAleatorio[4]);
}

function imagemFundo(j) {
    switch (j) {
        case 1:
            arranjoEstilo[0] = 'img1';
            break;
        case 2:
            arranjoEstilo[0] = 'img2';
            break;
        case 3:
            arranjoEstilo[0] = 'img3';
            break;
        case 4:
            arranjoEstilo[0] = 'img4';
            break;
        case 5:
            arranjoEstilo[0] = 'corFundo'
            break;
    }
}

function tamanhoLetra(j) {
    if (j == 1) arranjoEstilo[1] = 'letraGrande'
    else arranjoEstilo[1] = 'letraPequena'
}

function efeitoFonte(j) {
    arranjoEstilo[2] = (j == 1 ? 'riscar' : 'italico')
}

function corLetra(j) {
    arranjoEstilo[3] = (j == 1 ? 'red' : 'blue')
}

function corFundo(j) {
    arranjoEstilo[4] = (j == 1 ? 'cinza' : 'branco')
}

function alterarEstilo(){
    criarEstilo();
    this.className = '';
    this.classList.add(arranjoEstilo[0]);
    this.classList.add(arranjoEstilo[1]);
    this.classList.add(arranjoEstilo[2]);
    this.classList.add(arranjoEstilo[3]);
    this.classList.add(arranjoEstilo[4]);
}