import Login from "./Login.js";

const status = document.querySelector("#status-message");
const form = document.querySelector(".login__form");

form.onsubmit = function(event){
    event.preventDefault();
    const username = document.querySelector("#login__username").value;
    const password = document.querySelector("#login__password").value;
    const result = Login.validate(username, password);
    status.innerHTML = result;
    let className ="section__status ";
    className += result === "Logged in" ? "section__status--green" :"section__status--red";
    status.className = className;
};