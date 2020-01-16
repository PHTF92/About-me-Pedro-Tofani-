
function ftipoFonte(tipo) {
    localStorage.setItem('tipoFonte', tipo)
}

function fcorFundo(cor) {
    localStorage.setItem('corFundo', cor)
}

function fcorTexto(cor) {
    localStorage.setItem('corTexto', cor)
}

function fespLinhas(linha) {
    localStorage.setItem('estLinha', linha)
}

function ftamanhoFonte() {
    const tamanhoFonte = document.getElementById('tamanhoFonte').value
    localStorage.setItem('tamanhoFonte', tamanhoFonte)
}

document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.getItem('corFundo')

const artigo = document.getElementsByTagName('p')[0].style

artigo.fontSize = localStorage.getItem('tamanhoFonte')

artigo.color = localStorage.getItem('corTexto')

artigo.lineHeight = localStorage.getItem('estLinha')

artigo.fontFamily = localStorage.getItem('tipoFonte')
