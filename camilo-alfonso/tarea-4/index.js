const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')

buttons.forEach((button) => {
    button.addEventListener('click', calculation = (btn) => {
        let buttonContent = btn.target.value
        if (buttonContent === '=') {
            display.value = eval(display.value)
        } else if (buttonContent === 'AC') {
            display.value = ' '
        } else {
            display.value += buttonContent
        }
    })
});

