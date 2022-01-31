const displayPrevValue = document.getElementById('displayPrevValue');
const displayCurrentValue = document.getElementById('displayCurrentValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPrevValue, displayCurrentValue);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.addNumber(button.innerHTML);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.compute(button.value);
  });
})