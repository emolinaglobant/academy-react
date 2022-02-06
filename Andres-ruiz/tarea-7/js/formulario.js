const nombre = document.getElementById('nombre');
const password = document.getElementById('password');
const email = document.getElementById('email');
const formulario = document.getElementById('formulario');
const parrafo = document.getElementById('alerta');

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let alerta = ""
    let ingreso = false
    let regularEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <4){
        alerta += "nombre no valido <br>"
        alert =( "funciona")
        ingreso = true
    }
    if(!regularEx.test(email.value)){
        alerta += "email no valido <br>"
        ingreso = true
    }
    if(password.value.length < 8){
        alerta += "email no valido <br>"
        ingreso = true
    }if(ingreso){
        parrafo.innerHTML = alerta
    }
})