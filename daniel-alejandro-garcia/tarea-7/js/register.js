// const form = document.getElementById("form");
// const button = document.getElementById("button");
// const userName = document.getElementById("userName");
// const pass = document.getElementById("password");
// const messageError = document.getElementById("messageError");

let data = {
    user : "daniel21",
    password : "123456789",
    verify : false,
    errors :  [],
}

function valdiateUserName(user) {
    if(user.value == '') {
        data.errors.push(`The User Name cannot be empty. <br>`);
    }
    if(user.length < 6) {
        data.errors.push(`The User Name must have more than 6 characters. <br>`);
    }
    return data.errors;
}

function validatePassword(password) {
    if(password.value == '') {
        data.errors.push(`The Password cannot be empty. <br>`);
    }
    if(password.length < 8) {
        data.errors.push(`The Password must have more than 6 characters. <br>`)
    }
    return data.errors;
}

function correctData(user, password) {
    if(user == data.user && password == data.password) {
        return data.verify = true;
    } else {
        data.errors.push(`User not found in database <br>`);
    }
    return data.errors;
}

// form.addEventListener("submit", e => {
//     e.preventDefault();
    // let showErrors = [...valdiateUserName(userName), ...validatePassword(pass), ...correctData(userName.value, pass.value)];
//     let result = showErrors.filter((item, index) => {
//         return showErrors.indexOf(item) === index;
//     });
//     if(data.verify == true) {
//         data.errors = [];
//         messageError.innerHTML = 'Logged';
//         messageError.style.color = "green";
//     } else {
//         messageError.innerHTML += result;
//     }
// })

module.exports = {valdiateUserName, correctData, validatePassword};