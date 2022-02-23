import  Validation  from './Validation.js' 

const userName  = document.getElementById('user-name');
const errorUser = document.getElementById('error-user');
const password  = document.getElementById('password');
const errorPwd  = document.getElementById('error-pwd');
const signIn    = document.getElementById('signin');
const validator = new Validation;
const rules     = { 'strLength'  : /(?=.{8,})/, 
                    'specialChar'  : /(?=.*[!@#$%^&*]{1,})/, 
                    'numChar'      : /(?=.*[0-9]{1,})/, 
                    'uppercaseChar': /(?=.*[A-Z]{1,})/ }
let userValidator = false;
let pwdValidator  = false;
let sendForm      = false;

userName.addEventListener('keyup', ($event) => {
    userValidator = validator.regexExpMatcher(userName.value, rules['strLength']);
    userValidator ? validator.userValidated(errorUser,'none') : validator.userValidated(errorUser,'block');
});

password.addEventListener('keyup', ($event) => {
    const regexExp = new RegExp("^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[!@#$%^&*]{1,})(?=.*[0-9]{1,})(?=.{8,}))");
    let index      = 0;
    let a          = '';
    pwdValidator   = validator.regexExpMatcher(password.value, regexExp);
    for (const prop in rules) {
        a = validator.regexExpMatcher(password.value,rules[prop]) ? validator.validateRule(errorPwd.children[index], 'validated')
                                                            : validator.validateRule(errorPwd.children[index], 'not-validated');
        index ++;
    }
    pwdValidator ? validator.passwordValidated(errorPwd,'none') : validator.passwordValidated(errorPwd,'block');
});

signIn.addEventListener('click', ($event) => {
    
    sendForm = userValidator && pwdValidator;
    sendForm ? alert(validator.sendRequest(sendForm)) : alert(validator.sendRequest(sendForm));
    // sendForm = userValidator && pwdValidator ? alert('Submitted form') : alert('Complete the information');
});






