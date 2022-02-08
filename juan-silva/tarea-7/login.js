let database=[
    {
        username:"jsilva97",
        password:123456789
    },
    {
        username:"pepito07",
        password:987654321
    }
];
const login={
    validateUser:(username)=>{
        let user=database.find(node=>node.username==username);
        if(user){
            return user;
        }
        else return("User not Found");
    },
    validateUsername:(username)=> {
        let user=database.find(node=>node.username==username);
        if(user){
            return user.username;
        }
        else return("Username not Found");
    },
    validateLogin:(username,password)=>{
        let user=database.find(node=>node.username==username);
        if(user){
            if (user.password==password){return("Login Succesfull");}
            else{return("Password wrong");}
        }
        else return("Username wrong");
    }
}

module.exports =login;