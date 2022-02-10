import database from "./Database.js";

class Login{
    static validate(username, password){
        if (!username){
            return "Empty username";
        }
        
        else if (!password){
            return "Empty password";
        }

        else if (username in database && password === database[username]){
            return "Logged in";
        }

        return "Invalid username or password";
    }
}

export default Login;