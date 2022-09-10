const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const productoRandom = (productos) => {
    const cantidad = productos.length;
    const numeroAleatorio = getRandomInt(cantidad);
    console.log(numeroAleatorio)
    return productos[numeroAleatorio]
};

module.exports = {
    productoRandom
};