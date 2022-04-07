const { response, request } = require('express');

const imprimirNumerosPrimos = (req = request, res = response) => {
    const { numero } = req.query;

    const resultado = getPrimos(numero);

    res.json({ resultado });
}

const getPrimos = (numero) => {
    let numerosPrimos =  [];
    for(let x = 2; x <= numero; x++){
        if(esPrimo(x)){
            numerosPrimos.push(x);
        }
    }
    numerosPrimos.sort((a,b) => b-a);
    return numerosPrimos.toString();
}

const esPrimo = numero => {
    if (numero == 0 || numero == 1 || numero == 4){
        return false;
    }
    
    for(let x = 2; x < numero / 2; x++){
        if (numero % x == 0) {
            return false;
        }
    }
    return true;
}

module.exports = {
    imprimirNumerosPrimos,
    getPrimos
}