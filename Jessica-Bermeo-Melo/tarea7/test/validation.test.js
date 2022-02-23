// import  Validation  from './Validation.js' 
const Validation = require('../js/Validation')

describe('Validation', () => {
    const validator = new Validation();
    const rules     = { 'userRule': /(?=.{8,})/, 
                        'pwdRule': /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[!@#$%^&*]{1,})(?=.*[0-9]{1,})(?=.{8,}))/};

    test('El campo de usuario "Adriana Mora" es correcto', () => {
        expect(validator.regexExpMatcher('Adriana Mora', rules['userRule'] )).toBe(true);
    });

    test('El campo de usuario "Adriana" No es correcto', () => {
        expect(validator.regexExpMatcher('Adriana', rules['userRule'] )).toBe(false);
    });

    test('El campo de contraseña "Adriana Mora" No es correcto', () => {
        expect(validator.regexExpMatcher('Adriana Mora', rules['pwdRule'] )).toBe(false);
    });

    test('El campo de contraseña "Adriana@Mora4" es correcto', () => {
        expect(validator.regexExpMatcher('adriana@Mora4', rules['pwdRule'] )).toBe(true);
    });

    test('La verificación de los 2 campos fue "true", el formulario fue enviado', () => {
        expect(validator.sendRequest(true)).toBe('Submitted form');
    });

    test('La verificación de los 2 campos fue "false" el formulario no fue enviado', () => {
        expect(validator.sendRequest(false)).toBe('Complete the information');
    });
    
});

