const user=document.getElementById ('username')
const pass=document.getElementById ('password')
function Validar(){
    var User="nicolas.martin.castellanos@hotmail.com"
    var Pass=123456
 if(user.value==User&&pass.value==Pass){
    alert("Datos Correctos")
    window.location="index.html"
 }else if(user.value==""&&pass.value==""){
    alert("Todos Los Campos Son Obligatorios")
 }else if(user.value==User&&pass.value==""){
    alert("El Password Es Un Campo Obligatorio")
 }else if(user.value==""&&pass.value==Pass){
    alert("El Usuario Es Un Campo Obligatorio")
 }else if(user.value==User&&pass.value!=Pass){
    alert("La Contraseña Es Incorrecta")
 }else if(user.value!=User&&pass.value==Pass){
    alert("El Usuario Es Incorrecto")
 }else{
    alert("El Usuario Y La Contraseña Son Incorrectos")
}}