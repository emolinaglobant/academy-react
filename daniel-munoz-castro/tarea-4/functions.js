const displayValorActual  = document.getElementById('valor-actual');
const displayValorAnterior  = document.getElementById('valor-anterior');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorActual, displayValorAnterior);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value) );
})