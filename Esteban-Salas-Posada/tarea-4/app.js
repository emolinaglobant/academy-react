const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')

const erase = document.querySelector('#erase')
const percentage = document.querySelector('#percentage')
const dot = document.querySelector('#dot')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const div = document.querySelector('#div')
const equal = document.querySelector('#equal')
const changeSign = document.querySelector('#changeSign')

const board = document.querySelector('#board')

event(zero, '0')
event(one, '1')
event(two, '2')
event(three, '3')
event(four, '4')
event(five, '5')
event(six, '6')
event(seven, '7')
event(eight, '8')
event(nine, '9')
event(plus, '+')
event(minus, '-')
event(div, '/')
event(multiply, '*')

function event(buttonPressed, operator){
    buttonPressed.addEventListener('click', function(){
        board.textContent += operator
    });
}

equal.addEventListener('click', function (){
    result = eval(board.textContent) 
    board.textContent = result
});
erase.addEventListener('click', function(){
    result = 0
    board.textContent = ''
});
changeSign.addEventListener('click', function () {
    result = eval(board.textContent) 
    board.textContent = -result
});
