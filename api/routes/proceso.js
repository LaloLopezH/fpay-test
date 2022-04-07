const { Router } = require('express');
const { check } = require('express-validator');

const { validationFields } = require('../middlewares/validate-fields');
const { validationNumber } = require('../middlewares/custom-validators');

const { imprimirNumerosPrimos } = require('../controllers/proceso');

const router = Router();

router.post('/', [
    check('numero', 'El numero es requerido').not().isEmpty(),
    check('numero', 'Debe ingresar un valor numerico').isNumeric(),   
    check('numero').custom(validationNumber),   
    validationFields
], imprimirNumerosPrimos)

module.exports = router;