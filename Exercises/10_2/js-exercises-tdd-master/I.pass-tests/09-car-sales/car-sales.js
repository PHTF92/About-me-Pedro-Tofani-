
const sairCarro = (carros) => {
    const total = {}
    const a = carros.forEach(({ make, price }) => {
        if (total[make]) total[make] += price;
        else {
            total[make] = price
        }
    })
    return total
}

module.exports = sairCarro;