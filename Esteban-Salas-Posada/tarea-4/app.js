let operatorA, operatorB, operation
// Números
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
// Operaciones
const erase = document.querySelector('#erase')
const percentage = document.querySelector('#percentage')
const dot = document.querySelector('#dot')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const div = document.querySelector('#div')
const equal = document.querySelector('#equal')
const changeSign = document.querySelector('#changeSign')
// Tablero
const board = document.querySelector('#board')
zero.addEventListener('click', function(event){
    addBoard(zero)
});
one.addEventListener('click', function(event){
    addBoard(one)
});
two.addEventListener('click', function(event){
    addBoard(two)
});
three.addEventListener('click', function(event){
    addBoard(three)
});
four.addEventListener('click', function(event){
    addBoard(four)
});
five.addEventListener('click', function(event){
    addBoard(five)
});
six.addEventListener('click', function(event){
    addBoard(six)
});
seven.addEventListener('click', function(event){
    addBoard(seven)
});
eight.addEventListener('click', function(event){
    addBoard(eight)
});
nine.addEventListener('click', function(event){
    addBoard(nine)
});
plus.addEventListener('click', function(){
    operatorA = board.textContent
    operation = '+'
    board.textContent = ''
});
minus.addEventListener('click', function(){
    operatorA = board.textContent
    operation = '-'
    board.textContent = ''
});
div.addEventListener('click', function(){
    operatorA = board.textContent
    operation = '/'
    board.textContent = ''
});
multiply.addEventListener('click', function(){
    operatorA = board.textContent
    operation = '*'
    board.textContent = ''
});
equal.addEventListener('click', function (){
    operatorB = board.textContent
    resolve()
});
erase.addEventListener('click', function(){
    result = 0
    board.textContent = ''
});
changeSign.addEventListener('click', function () {
    operatorA = board.textContent
    operation = '+/-'
    board.textContent = ''
    resolve()
});
function addBoard(element){
    board.textContent = board.textContent + element.textContent
}
function reset() {
    board.textContent = ''
    operatorB = 0
    operatorA = 0
    operation = ''
}
function resolve() {
    var result
    switch (operation) {
        case '+':
            result = parseFloat(operatorA) + parseFloat(operatorB)
            break;
        case '-':
            result = parseFloat(operatorA) - parseFloat(operatorB)
            break;
        case '/':
            result = parseFloat(operatorA) / parseFloat(operatorB)
            break;
        case '*':
            result = parseFloat(operatorA) * parseFloat(operatorB)
            break;
        case '+/-':
            result = -operatorA
            break;
        default:
            break;
    }
    console.log(board.textContent.length)
    reset()
    board.textContent = result
}