const API_URL = "https://icanhazdadjoke.com/"

const headers = {
    headers: { Accept: 'application/json' }
}

let fetchJoke = (URL, header) => {
    fetch(URL, header)
        .then(resposta => resposta.json())
        .then(data => {
            document.getElementById('jokeContainer').innerHTML = data.joke
        })
}        

// fetchJoke("https://icanhazdadjoke.com/", headers)

window.onload = () => {
    const piada = fetchJoke(API_URL, headers)
    document.getElementById('jokeContainer').innerHTML = piada;
}
