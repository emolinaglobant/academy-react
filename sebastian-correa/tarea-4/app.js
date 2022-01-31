/** The max number of digits that can be displayed. */
const maxLength = 10;

/** The number or operator of a button by its id. */
const mappings = {
  "btn-1": "1",
  "btn-2": "2",
  "btn-3": "3",
  "btn-4": "4",
  "btn-5": "5",
  "btn-6": "6",
  "btn-7": "7",
  "btn-8": "8",
  "btn-9": "9",
  "btn-0": "0",
  "btn-percentage": "/100",
  "btn-divide": "/",
  "btn-multiply": "*",
  "btn-substract": "-",
  "btn-add": "+",
  "btn-point": ".",
};

/** The stack of numbers and operations. */
let stack = "";

/** The HTML element that displays the result. */
const result = document.querySelector(".result-value");

/** The HTML element that contains all the calculator buttons. */
const section = document.querySelector(".buttons-container");

section.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "btn-clear":
      result.innerHTML = "";
      stack = "";
      break;

    case "btn-percentage":
      result.innerHTML = eval(result.innerHTML.concat(mappings["btn-percentage"]));
      break;

    case "btn-alternate":
      if (result.innerHTML.startsWith("-")) {
        result.innerHTML = result.innerHTML.substring(1);
      } else {
        result.innerHTML = "-".concat(result.innerHTML);
      }
      break;

    case "btn-equals":
      let aux = result.innerHTML;
      result.innerHTML = eval(stack.concat(aux));
      if (result.innerHTML.length > maxLength) {
        result.innerHTML = parseFloat(eval(stack.concat(aux))).toPrecision(9);
      }
      stack = "";
      break;

    default:
      try {
        if (event.target.className.includes("number")) {
          if (result.innerHTML.length < maxLength) {
            result.innerHTML += mappings[event.target.id];
          }
        } else if (event.target.className.includes("operator")) {
          stack += result.innerHTML + mappings[event.target.id];
          result.innerHTML = "";
        }
      } catch (error) {
        alert("You must select a valid operation");
      }
      break;
  }
});
