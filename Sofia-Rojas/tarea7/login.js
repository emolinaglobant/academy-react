


const users = new Map();
users.set('userone', "securepass123.");
users.set('usertwo',"egypt.2022");

function verifyUser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(!verifyUsername(users, username) || !verifyPassword(users, username, password)){
        alert("Invalid username or password.");
    }
    else{
        alert("loggued in succesfully");
    }
}




