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

