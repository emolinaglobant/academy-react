const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const isEmailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// function checkInputs() {
// 	const userInput = username.value.trim();
// 	const emailInput = email.value.trim();
// 	const passwordInput = password.value.trim();
// 	const confirmPasswordInput = password2.value.trim();
	
// 	if(userInput === '') {
// 		setErrorFor(username, 'User cannot be empty');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailInput === '') {
// 		setErrorFor(email, 'Email cannot be empty');
// 	} else if (!isEmailExpression.test(emailInput)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(passwordInput === '') {
// 		setErrorFor(password, 'Password cannot be empty');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// 	if(confirmPasswordInput === '') {
// 		setErrorFor(password2, 'Confirm password cannot be empty');
// 	} else if(passwordInput !== confirmPasswordInput) {
// 		setErrorFor(password2, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(password2);
// 	}
// }
function userInputEmpty (user) {
	if(user === '') {
		setErrorFor(username, 'User cannot be empty');
	} else {
		setSuccessFor(username);
	}
}

function emailInputEmpty (email) {
	if(email === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmailExpression.test(email)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
}

function passwordInputEmpty (password) {
	if(password === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
}

function confirmPasswordInputEmpty(passwordInput,confirmPasswordInput) {
	if(passwordInput === '') {
		setErrorFor(password2, 'Confirm password cannot be empty');
	} else if(passwordInput !== confirmPasswordInput) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function checkInputs() {
	const userInput = username.value.trim();
	const emailInput = email.value.trim();
	const passwordInput = password.value.trim();
	const confirmPasswordInput = password2.value.trim();
	
	userInputEmpty(userInput);
	emailInputEmpty(emailInput);
	passwordInputEmpty(passwordInput);
	confirmPasswordInputEmpty(passwordInput, confirmPasswordInput);
	
}




// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });


// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form__input error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form__input success';
// }
	
// function isEmail(email) {
// 	var messageEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
// 	return messageEmail;
// }

module.exports = {checkInputs, userInputEmpty, emailInputEmpty, passwordInputEmpty, confirmPasswordInputEmpty}; 