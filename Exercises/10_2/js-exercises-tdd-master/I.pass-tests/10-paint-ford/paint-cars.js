Object.prototype.clone = function() {
    var newObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i == 'clone') 
            continue;
        if (this[i] && typeof this[i] == "object") {
            newObj[i] = this[i].clone();
        } 
        else 
            newObj[i] = this[i]
    } return newObj;
};

const paintShop = (cars, colour) => {
    const arranjoModificado = cars.clone()
    if (!colour) return arranjoModificado
    else {
        arranjoModificado.forEach(Element => {
            if (Element.colour === 'Red') Element.colour = 'Pink'
        })
    }
    return arranjoModificado
}

var cars = [
    { make: "Ford", model: "Fiesta", colour: "Red" },
    { make: "Land Rover", model: "Defender", colour: "Muddy" },
];

paintShop(cars, "Pink")

module.exports = paintShop