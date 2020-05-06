// const pegarPiada = require('./8ex.js');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    return fetch(API_URL, { headers: { Accept: 'application/json' }})
      .then(response => response.json())
      .then(data => data.joke);
  };

const fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            'id': '7h3oGtrOfxc',
            'joke': 'Whiteboards ... are remarkable.',
            'status': 200
        }),
    }));

test('Ver se pegamos a piada', () => {
    // const pegarPiadaMocada = fetch(piadaMocada);
    // expect(pegarPiadaMocada).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
    return fetchJoke()
        .then(piada => expect(piada).toEqual('Whiteboards ... are remarkable.'))
})