const btnNumeros = document.querySelectorAll(".numbers");
const btnsOperations = document.querySelectorAll(".operations")
const btnDeleteAll = document.querySelector(".btnDeleteAll");
const btnEqual = document.querySelector(".btnEqual");
const inputValue = document.getElementById("input");
const alert = document.querySelector(".alert");

let value = " ";
let newValue = " ";
let operation = undefined;

btnNumeros.forEach((btn) => {
    btn.addEventListener("click", function () {
        concatValues(btn.innerText);
        alert.innerHTML = " ";
        inputValue.style.backgroundColor = "#ffffffd0";
    });
});

// get the number and concatenate each value
const concatValues = number => {
    value = value.toString() + number.toString();
    update();
}

btnsOperations.forEach((btnOperation) => {
    btnOperation.addEventListener("click", function () {
        selectOperation(btnOperation.innerHTML);
        alert.innerHTML = " ";
        inputValue.style.backgroundColor = "#ffffffd0";
    });
})

// select the type operation

const selectOperation = op => {
    (operation !== " ") ? operation = op: null;
    if (value === "") return;
    (newValue !== "") && calculate();

    operation = op.toString();
    newValue = value;
    value = "";
}

const calculate = () => {
    let result;
    let valueOne = parseInt(value);
    let valueTwo = parseInt(newValue);

    if (isNaN(valueOne) || isNaN(valueTwo)) return;

    switch (operation) {

        case "+":
            result = valueTwo + valueOne;
            break;

        case "-":
            result = valueTwo - valueOne;
            break;

        case "*":
            result = valueTwo * valueOne;
            break;

        case "/":
            result = valueTwo / valueOne;
            break;

        case "%":
            result = (valueTwo * valueOne) / 100;
            break;

        default:
            return;
    }

    const separator = result => {
        let point = result.toString().split(".");
        point[0] = point[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        value = point.join(".");
    }

    separator(result);
    operation = undefined;
    newValue = "";
}

// btn equal
btnEqual.addEventListener("click", function () {

    if (value == " ") {
        alert.innerHTML = "You must enter a value for the operation";
        inputValue.style.backgroundColor = "#ff0606b4";
    }

    calculate();
    update();
});

// function for the btn deleteAll, this method clear input

btnDeleteAll.addEventListener("click", function () {
    value = " ";
    newValue = " ";
    operation = undefined;
    inputValue.value = 0;
    alert.innerHTML = " ";
    inputValue.style.backgroundColor = "#ffffffd0";
});

// this function update the input tag and show the result
const update = () => {
    inputValue.value = value;
}