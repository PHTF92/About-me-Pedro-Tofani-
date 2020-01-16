const botao = document.getElementById('submit');


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

function ftamanhoFonte(){
    const tamanhoFonte = document.getElementById('tamanhoFonte').value
    localStorage.setItem('tamanhoFonte', tamanhoFonte)
}