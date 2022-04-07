const validationNumber = (numero) => {
    if (numero < 3) {
        throw new Error('Debe ingresar un número mayor de 2');
    }
    return true;
}

module.exports = {
    validationNumber
}