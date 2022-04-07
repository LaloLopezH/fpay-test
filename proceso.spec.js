const { getPrimos } = require('./api/controllers/proceso');

describe('Obtener números primos', () => {
    test('Comparamos el resultado ingresando 7', () => {
        expect(getPrimos(7)).toBe('7,5,3,2');
    });
    test('Comparamos el resultado ingresando 15', () => {
        expect(getPrimos(15)).toBe('13,11,7,5,3,2');
    });
});