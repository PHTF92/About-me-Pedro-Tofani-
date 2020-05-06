
const repositorios = require('./4ex.js');

test('Ver se retorna o repositório', () => {
    const url = 'https://api.github.com/users/tryber/repos';

    return repositorios(url).then(diretorios => {
        expect(diretorios).toContain('sd-01-week4-5-project-todo-list')
        expect(diretorios).toContain('sd-01-week4-5-project-meme-generator')
    })
})

