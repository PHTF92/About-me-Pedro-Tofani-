
const segundoMaior = (arranjoNumeros) => {
    const c = arranjoNumeros.sort(function (a, b) {
        return b - a
    });
    return c[1];
}

module.exports = segundoMaior