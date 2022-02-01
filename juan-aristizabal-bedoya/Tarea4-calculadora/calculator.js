//tomamos lo que aparecera en pantalla y lo guardamos en screen
let screen = document.querySelector("#screen-result");
//toma el dato del inout type y se lo pone a screen
function getData(ref) {
  let value = ref.value;
  screen.value += value;
}
//limpia el screen
function clean() {
  screen.value = "";
}
//le asigna al screen el resultado de evaluar lo que tenga.
function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
    setTimeout(() => {
      clean();
    }, 500);
  }
}
