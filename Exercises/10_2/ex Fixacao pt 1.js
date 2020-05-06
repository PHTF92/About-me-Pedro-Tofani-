const possuiMult = [
    [1, 3],
    [2, 8, 10],
    [4, 10, 33],
    [4, 14, 34]
]

const nPossuiMult = [
    [1, 4],
    [1],
    [4, 13, 16]
]

const multiplos = [3, 5, 7, 11]

possuiMult.forEach(Element => {
    let eMultiplo = false
    Element.forEach(num => {
        multiplos.forEach(multiplo => {
            if (num % multiplo === 0) eMultiplo = true
        })
    })
    if (eMultiplo) {
        console.log(`[${Element}] Passou no teste -> possui múltiplo`)
    }
})

nPossuiMult.forEach(Element => {
    let eMultiplo = true
    Element.forEach(num => {
        multiplos.forEach(multiplo => {
            if (num % multiplo !== 0) return eMultiplo = false
        })
    })
    if (!eMultiplo) {
        console.log(`[${Element}] não passou no teste -> não possui múltiplo`)
    }
})

