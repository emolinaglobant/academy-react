let testingDB = [
    {
        username: 'juan.hm',
        password: 'test1'
    },
    {
        username: 'john.doe',
        password: 'test2'
    }
];

const login = {

    validateUser: (username) => {
        let user = testingDB.find(el => el.username === username);

        return user ? user.username : 'User not Found';
    },

    validateLogin: (username, password) => {
        let user = testingDB.find(el => el.username === username);

        if(user){
            
            return(user.password === password) ? 'Login Succesfull' : 'Password wrong';
        }
        else return('Username wrong');
    }

}

module.exports = login;