let deck = document.getElementsByTagName('img')[0];
let arranjoCartas = ['cinco-de-ouros', 'nove-de-espadas', 'quatro-de-paus', 'seis-de-copas', 'sete-de-espadas', 'sete-de-paus', 'tres-de-ouros']
let arranjoAnimacoes = ['helice','aumentar', 'translacao', 'skew']

deck.addEventListener('click', tiraCarta);

function tiraCarta() {
    let divPai = document.getElementsByTagName('div')[1];
    let carta = document.createElement('img');
    let cartaSorteada = Math.floor(Math.random() * 7);
    let animacaoSorteada=Math.floor(Math.random() * 4);
    carta.className = arranjoAnimacoes[animacaoSorteada];
    carta.src = `cartas/${arranjoCartas[cartaSorteada]}.png`;
    divPai.appendChild(carta);
}