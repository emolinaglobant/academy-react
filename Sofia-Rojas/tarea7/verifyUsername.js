function verifyUsername(users, username){
    console.log(users.has(username));
    return users.has(username);
}

module.exports = verifyUsername