const convertToHeaderTitle = (path) => {
    const navName = path.slice(1);
    return navName.charAt(0).toUpperCase() + navName.slice(1)
};

const validateSignIn =(user, users)=> {
    if (users[user.username] === undefined){
        return ["404", "The user doesnt exist"]
    } 
    else if (users[user.username] !== user.password){
        return ["401", "Wrong password"]
    }
    else if (users[user.username] === user.password){
        return ["200", "Signed in"]
    }
};

const validateSignUp = (newUser, users)=>{
    if (!newUser.password || !newUser.username || !newUser.repeatedPassword){
        return ["400", "Please, fill all the fields"]
    }
    else if (users[newUser.username] !== undefined){ //user already exists
        return ["406", "The user already exists"]
    } 
    else if (newUser.password !== newUser.repeatedPassword){
        return ["400", "The passwords do not coincide"]
    }
    else if (users[newUser.username] === undefined){
        return ["200", "User created succesfully"]
    } 
}

export {convertToHeaderTitle, validateSignIn, validateSignUp};