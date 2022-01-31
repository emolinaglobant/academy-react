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
    board.textContent += '+'
});
minus.addEventListener('click', function(){
    board.textContent += '-'
});
div.addEventListener('click', function(){
    board.textContent += '/'
});
multiply.addEventListener('click', function(){
    board.textContent += '*'
});
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
function addBoard(element){
    board.textContent += element.textContent
}