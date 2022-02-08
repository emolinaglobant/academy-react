const inputName = document.querySelector(".inputName");
const inputEmail = document.querySelector(".inputEmail");
const inputNumberCard = document.querySelector(".inputCard");
const messageEmail = document.querySelector(".messageEmail");
const messageCard = document.querySelector(".messageCard");
let name, email, numberCard, message;

const getName = e =>name = e.target.value;

const getEmail = e => {
    email = e.target.value;
    messageEmail.innerHTML = (email.includes("@")) ? "valid email" : "it's not an email";
}

const getNumberCard = e => {
    numberCard = Number(e.target.value);
    messageCard.innerHTML = (isNaN(numberCard)) ? "this value is no a number" : "";
}
   
const verifyInput = (e) => {
    e.preventDefault();
    let array = [];
    let inputEmpty;
    
    array.push(name, email, numberCard);
    
    array.forEach((val) => {
        if (val === undefined) {
            inputEmpty = true;
        }
    });
    alert((inputEmpty === true) ? "Please fill all fields" : makePayment(name, email, numberCard));
}

const makePayment = (...values) => {
    let data = ["santiago", "santiago@gmail.com", 12345678];
    
    if (JSON.stringify(data) == JSON.stringify(values)) {
        message = ("successful payment");
        location.reload();
    } else {
        message = ("we could not make the payment, some values ​are incorrect");
    }
    alert(message);
}

inputName.addEventListener("keyup", getName);
inputEmail.addEventListener("keyup", getEmail);
inputNumberCard.addEventListener("keyup", getNumberCard);
document.querySelector(".btnPay").addEventListener("click", verifyInput);

module.exports = {getName , getEmail , getNumberCard , verifyInput , makePayment};