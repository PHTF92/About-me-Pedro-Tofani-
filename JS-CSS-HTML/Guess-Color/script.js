window.onload = function () {
    this.adicionarBolas(6)
    this.colorirBolas();
}

let ponteiroBolas = document.getElementsByClassName('bola');
let botaoNBolas = document.getElementsByTagName('button')[0];
let botaoReiniciar = document.getElementsByTagName('button')[1];
let input = document.getElementsByTagName('input');
let conteudo = document.getElementById('conteudo');
let pontuacao = document.getElementsByTagName('h2');
let saltoPositivo = 3;
let contadorPositivo = 0;
let nPontos = 0;
let contadorNegativo = 0;

botaoNBolas.addEventListener('click', gerarBolas);
botaoReiniciar.addEventListener('click', reiniciar);

function gerarBolas() {
    if (input[0].value > 12 || input[0].value <= 0) alert('O número deve estar entre 1 e 12')
    else {
        removerBolas();
        let nBolas = input[0].value;
        adicionarBolas(nBolas);
        colorirBolas();
    }
}

function reiniciar() {
    document.getElementById('resposta').innerHTML = ''
    colorirBolas();
    input[0].value = '';
    pontuacao[0].innerHTML = 'Placar: ';
    nPontos = 0;
    contadorPositivo = 0;
    contadorNegativo = 0;
}

function colorirBolas() {
    for (let i = 0; i < ponteiroBolas.length; i++) {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        ponteiroBolas[i].style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')'
    }
    let bolaCerta = Math.floor(Math.random() * ponteiroBolas.length)
    let corretoRGB = ponteiroBolas[bolaCerta].style.backgroundColor
    document.getElementsByTagName('h3')[0].innerText = corretoRGB
}

function removerBolas() {
    conteudo.style.gridTemplateColumns = '';
    for (let i = 0; i < ponteiroBolas.length; i++) {
        conteudo.removeChild(ponteiroBolas[0]);
        i -= 1;
    }
}

function adicionarBolas(numeroBolas) {
    for (let i = 0; i < numeroBolas; i++) {
        let criarBola = document.createElement('div');
        criarBola.className = 'bola';
        criarBola.addEventListener('click', clicarBola);
        conteudo.appendChild(criarBola);
        conteudo.style.gridTemplateColumns += ' 90px';
    }
}

function clicarBola() {
    if (this.style.backgroundColor == document.getElementsByTagName('h3')[0].innerText) {
        document.getElementById('resposta').innerHTML = 'Boa! Acertou a cor!'
        nPontos += 3;
        contadorPositivo += 1;
        contadorNegativo = 0;
        if (contadorPositivo > 2) {
            nPontos += 1
        }
        else { };
    }
    else {
        document.getElementById('resposta').innerHTML = 'Errou a cor!'
        nPontos -= 1;
        contadorNegativo += 1;
        contadorPositivo = 0;
        if (contadorNegativo > 2) {
            nPontos -= 1;
        }

    }
    colorirBolas()
    if (nPontos < 0) {
        nPontos = 0
    }
    pontuacao[0].innerHTML = 'Placar: ' + nPontos
}

