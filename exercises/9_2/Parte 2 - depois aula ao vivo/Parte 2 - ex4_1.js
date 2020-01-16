const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
    const maxTemperature = 58
    return Math.floor(Math.random() * maxTemperature)
}
const sendMarsTemperature = () => {
    return getMarsTemperature()
}

setTimeout(() => console.log(`Mars temperature is: ${sendMarsTemperature()} degree Celsius"`), 5000) // imprime "Mars temperature is: 20 degree Celsius", por exemplo
