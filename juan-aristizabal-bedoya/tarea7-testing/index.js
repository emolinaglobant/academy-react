//information for testing
let data=[
  {
      email:"juanaristi",
      password:"colombia123"
  },
  {
      email:"juanbedoya",
      password:"colombia321"
  },
  {
    email:"camiloaristi",
    password:"colombia789"
},
];
const signin={
 
  validateEmail:(email)=> {
      let user=data.find(element=>element.email==email);
      if(user){
          return user.email;
      }
      else return("email not Found");
  },
  validatePassword:(password)=> {
    let pass=data.find(element=>element.password==password);
    if(pass){
        return pass.password;
    }
    else return("email not Found");
},
  }


module.exports =signin;