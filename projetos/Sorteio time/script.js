// let contadorTroca = false;

document.querySelector('#bordaMatriz').addEventListener('click', () => {
    event.target.classList.toggle('selecionado');
    if (document.getElementsByClassName('selecionado').length == 2) {
        let j1 = document.getElementsByClassName('selecionado')[0].innerHTML
        let j2 = document.getElementsByClassName('selecionado')[1].innerHTML
        document.getElementsByClassName('selecionado')[0].innerHTML = j2
        document.getElementsByClassName('selecionado')[1].innerHTML = j1
        document.getElementsByClassName('selecionado')[1].classList.remove('selecionado')
        document.getElementsByClassName('selecionado')[0].classList.remove('selecionado')
    }
});

const botao = document.getElementsByTagName('button')[0];
const inputJogador = document.getElementsByTagName('input');
const divDoJogador = document.getElementsByClassName('jogador');
const arranjoJogadores = [];
botao.addEventListener('click', () => {
    let n1 = [
        { 'jogador': inputJogador[0].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[1].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[2].value, 'nAleatorio': Math.random() }
    ]
    ordenarN(n1);
    colocarNoTime(ordenarNomes(n1), 0);

    let n2 = [
        { 'jogador': inputJogador[3].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[4].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[5].value, 'nAleatorio': Math.random() }
    ]
    ordenarN(n2);
    colocarNoTime(ordenarNomes(n2), 1);
    let n3 = [
        { 'jogador': inputJogador[6].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[7].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[8].value, 'nAleatorio': Math.random() }
    ]
    ordenarN(n3);
    colocarNoTime(ordenarNomes(n3), 2);
    let n4 = [
        { 'jogador': inputJogador[9].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[10].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[11].value, 'nAleatorio': Math.random() }
    ]
    ordenarN(n4);
    colocarNoTime(ordenarNomes(n4), 3);
    let n5 = [
        { 'jogador': inputJogador[12].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[13].value, 'nAleatorio': Math.random() },
        { 'jogador': inputJogador[14].value, 'nAleatorio': Math.random() }
    ]
    ordenarN(n5);
    colocarNoTime(ordenarNomes(n5), 4);
});

function ordenarN(arranjoGrupoJogador) {
    arranjoGrupoJogador.sort((a, b) => parseFloat(a.nAleatorio) - parseFloat(b.nAleatorio))
}

function ordenarNomes(arranjoOrdenado) {
    const arranjoJogadores = [];
    for (let i = 0; i < 3; i++) {
        arranjoJogadores.push(arranjoOrdenado[i]['jogador'])
    }
    return arranjoJogadores
}

function colocarNoTime(arranjoJogadores, forcaGrupo) {
    let j = 0;
    for (let i = (0 + forcaGrupo * 3); i < (3 + forcaGrupo * 3); i++) {
        divDoJogador[i].innerHTML = arranjoJogadores[j];
        j++;
    }
}
