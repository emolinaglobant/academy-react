// const password = document.getElementById("user-detail__password");
// const email = document.getElementById("user-detail__email");
// const loginForm = document.getElementById("form");

let errors = [];
let user = 'eduardo.salcedo@gmail.com';
let pass = '12345678Ld';
let logInCorrect = false;

const validateEmptyEmail =(email)=>{
    if(email == ''){
        alert("you cannot leave the email empty");
        errors.push(`you cannot leave the email empty`);
    }
    return errors;
}

const validateExpressionEmail = (email)=>{
    let expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!expression.test(email)){
        alert("the email does not have the necessary parameters");
        errors.push(`the email does not have the necessary parameters`);
    }
    return errors;
}

const valideEmptyPassword = (password) =>{
    if(password == ''){
        alert("you cannot leave the password empty");
        errors.push(`you cannot leave the password empty`);
    }
    return errors;
}

const validateExpresionPassword = (password)=>{
    expression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!expression.test(password)){
        alert("This must contain at least 8 characters, an uppercase letter, a lowercase letter, a number and a special character");
        errors.push(`This must contain at least 8 characters, an uppercase letter, a lowercase letter, a number and a special character`);
    }
    return errors;
}

const validateUserAndPassword = (pass1, user1) =>{
    if(pass1 == pass && user1 == user){
        return logInCorrect = true;   
    }else{
        errors.push(`the user is not registered`);
    }
    return errors;
}
// loginForm.addEventListener("submit", (result) => {
//     result.preventDefault();
//     validateEmptyEmail(email.value);
//     validateExpressionEmail(email.value);
//     valideEmptyPassword(password.value);
//     validateExpresionPassword(password.value);
//     validateUserAndPassword( password.value, email.value);

//     if(logInCorrecto){
//         alert("Logeado sactifactoriamente");
//     }else{
//         alert("no esta registrado en la base de datos")
//     }
// });


module.exports = { validateEmptyEmail, validateExpressionEmail, valideEmptyPassword, validateExpresionPassword };