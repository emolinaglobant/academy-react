var User="nicolas.martin.castellanos@hotmail.com"
var Pass="123456"
class Main
{
    static VDPersona(usuario, password){
        if (usuario!==User&&password===Pass){
            alert("El Usuario Es Incorrecto")
            return "El Usuario Es Incorrecto"
        }else if(usuario===""&&password===""){
            alert("Todos Los Campos Son Obligatorios")
            return "Todos Los Campos Son Obligatorios";
        }else if(usuario===User&&password===""){
            alert("El Password Es Un Campo Obligatorio")
         }else if(usuario===""&&password===Pass){
            alert("El Usuario Es Un Campo Obligatorio")
        }else if (usuario===User&&password!==Pass){
            alert("La Contraseña Es Incorrecta")
            return "La Contraseña Es Incorrecta";
        }else if (usuario===User&&password===Pass){
            alert("Datos Correctos")
            return "Datos Correctos";
        }else{
            alert("El Usuario Y La Contraseña Son Incorrectos")
            return "El Usuario Y La Contraseña Son Incorrectos";
        }
    }
}
const testEstado = document.querySelector("#mensaje");
const testForm = document.querySelector(".login__form");

testForm.onsubmit = function(event){
    event.preventDefault();
    const usuario = document.querySelector("#usuario").value;
    const password = document.querySelector("#password").value;
    const result = Main.VDPersona(usuario, password);
    testEstado.innerHTML = result;
    let ClaseIngreso ="Estado ";
    ClaseIngreso += result === "Ingreso" ? "Ingreso correctamente" :"No ingreso";
    testEstado.ClaseIngreso = ClaseIngreso;
};

export default Main;