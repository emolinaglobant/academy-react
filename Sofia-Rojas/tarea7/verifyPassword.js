

function verifyPassword(users, username, password){
    console.log(users.get(username)===password);
    return users.get(username)===password;
    
}

module.exports = verifyPassword

