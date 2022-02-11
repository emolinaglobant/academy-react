const validateForm = {
    validateUser: () => {
        if (username === null || username === ""){  
            return "Please enter a username";  
        } else if(username.length < 5){
            return "Username must be at least 5 characters long";
        }
        return "Correct User"
    },
    validatePassword: () => {
        let pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
        
        if(password.length < 10){  
            return "Password must be at least 10 characters long.";  
        } else if(password.includes(pattern)){
            return "Password must contain one number and one symbol"
        } 
        return "login succesfully"
    }
}
module.exports = validateForm

