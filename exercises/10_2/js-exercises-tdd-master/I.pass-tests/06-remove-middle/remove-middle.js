function removeMiddle(numb) {
    const metade = numb.length/2;
    return numb.splice(metade,1)
}
module.exports = removeMiddle

