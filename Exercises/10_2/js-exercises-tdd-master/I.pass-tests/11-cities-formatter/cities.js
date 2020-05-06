function cidades(cidades, funcaoTransformar) {
    const resposta = [];
    cidades.forEach(cidade => {
        resposta.push(funcaoTransformar(cidade))
    })
    return resposta
}
module.exports = cidades;