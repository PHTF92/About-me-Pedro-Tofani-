const soma = (num) => {
    return num.reduce((acc, el) => acc + el, 0)
}

const promessa = () => {
    return new Promise((resolve, reject) => {
        const arranjo = [];
        for (let i = 0; i < 10; i++) { arranjo.push((Math.random() * 50) ** 2) }
        const somatorio = soma(arranjo)
        if (somatorio > 8000) reject('É mais de oito mil! Essa promise deve estar quebrada!')
        else {
            const a = [2, 3, 5, 10].map(item => somatorio / item)
            console.log(a)
            resolve(a)
        }
    })
}

const promessaSomarArranjo = (arranjoASomar) => {
    return new Promise((resolve) => {
        console.log(soma(arranjoASomar))
        resolve(arranjoASomar)
    })
}


const encadear = async () => {
    try {
        const primeiraParte = await promessa()
        const segundaParte = await promessaSomarArranjo(primeiraParte)
    }
    catch(e) {
        console.log('erro')}
    }

    encadear()