// ! Presentacion

// alert("Bienvenido a la Calculadora Enstein");

// ! array de botones del DOM

const botonesColumn = document.querySelectorAll(".tecla");
const botonesRow = document.querySelectorAll(".teclas-fila");

const botonesCol = Array.from(botonesColumn);

// ! funciones para los eventos de la calculadora

function pantalla(x) {
  if (document.querySelector(".resultado").innerHTML == 0) {
    document.querySelector(".resultado").innerHTML = x;
  } else {
    document.querySelector(".resultado").innerHTML += x;
  }
}
function borrar() {
  document.querySelector(".resultado").innerHTML = 0;
}
function calculo() {
  let resultado = eval(document.querySelector(".resultado").innerHTML);
  document.querySelector(".resultado").innerHTML = resultado;
}
// ! Evento onclick de los botones numericos
botonesCol.sort((a, b) => a - b);

botonesCol.map((cons) => {
  return cons.addEventListener("click", () => {
    pantalla(cons.innerHTML);
  });
});

// ! Variables de los botones

let multiplicar = botonesRow[2];
let sumar = botonesRow[0];
let restar = botonesRow[1];
let dividir = botonesRow[3];
let clear = document.getElementById("delete");
let igual = document.getElementById("igual");

// ! evento de los botones de signos

multiplicar.addEventListener("click", () => {
  pantalla("*");
});
sumar.addEventListener("click", () => {
  pantalla("+");
});
restar.addEventListener("click", () => {
  pantalla("-");
});
dividir.addEventListener("click", () => {
  pantalla("/");
});
clear.addEventListener("click", () => {
  borrar();
});
igual.addEventListener("click", () => {
  calculo();
});
// ! Eventos loader

window.addEventListener("load", function () {
  document.getElementById("loader").classList.toggle("loader2");
});
