const {check, validationResult, body} = require('express-validator');

const validarCadastro = [
    check('nome')
    .notEmpty().withMessage('Deve preencher o nome').bail()
    .isLength({min: 6}).withMessage('O nome deve ser maior'),

    check('sobrenome')
    .notEmpty().withMessage('Deve preencher o sobrenome').bail()
    .isLength({min: 6}).withMessage('O sobrenome deve ser maior'),

    check('email')
    .notEmpty().withMessage('Deve preencher o email').bail()
    .isEmail().withMessage('Deve preencher um email válido'),

    check('senha')
    .notEmpty().withMessage('Deve preencher a senha')
    .isLength({min: 8}).withMessage('A senha deve ter no mínimo 8 dígitos')    
]

module.exports = validarCadastro