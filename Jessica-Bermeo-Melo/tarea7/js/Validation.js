// export default class Validation {

module.exports = class Validation {

    regexExpMatcher(input, regexExp){
        let validate = regexExp.test(input);
        return validate;
    }

    userValidated(errorUser, state){
        errorUser.firstChild.style.display = state;
    }

    validateRule(rule, className){
        rule.className = className;
    }

    passwordValidated(errorPwd, state){

        for (var i = 0; i < errorPwd.children.length; i++) {
            errorPwd.children[i].style.display = state;    
        }
    }

    sendRequest(sendForm){
        return (sendForm ? 'Submitted form' : 'Complete the information');
    }
}


