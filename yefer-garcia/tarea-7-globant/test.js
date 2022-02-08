const usuario = document.getElementById('user');
const password = document.getElementById('password');
const formulario = document.getElementById('formulario');
const userAlert = document.getElementById('advertencia1');
const passwordAlert = document.getElementById('advertencia2');
const signIn = document.getElementById('signin');


formulario.addEventListener("submit", event=>{
    event.preventDefault()
    
    if(usuario.value.length < 4){
        userAlert.innerHTML = "Usuario invalido"
    }
    else{userAlert.innerHTML = ""} 

    if(password.value.length < 6){
        passwordAlert.innerHTML = "Contraseña Invalida"
    }
    else if(password.value.length>6){
        passwordAlert.innerHTML = ""
    }
    if(usuario.value.length > 4 && password.value.length > 6){
        alert("Bien Hecho Te haz registrado exitosamente")
    }
})