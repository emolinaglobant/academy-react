import { changeClass, generateRandomness, isInterchangeable } from "./helpers.js";

const buttons = Object.values(document.querySelectorAll(".puzzle > button"));
const newPuzzleButton = document.querySelector("#new-puzzle__button");

buttons.map(button => {
    button.onclick = () => {move(button)};
});
newPuzzleButton.onclick = () => {
    createNewPuzzle(buttons);
};

createNewPuzzle(buttons); // initilize when server starts

function createNewPuzzle(buttons) {
    const values = generateRandomness();
    buttons.map((button, index) => {
        index == buttons.length-1 ? button.id = "empty": button.id = "";
        button.textContent = values[index]; 
        changeClass(button);
    });
    
}

function move(button) { // move the clicked button to the empty position if possible
    const emptyButton = document.getElementById("empty");
    if (isInterchangeable(button, emptyButton)) {
        [emptyButton.id, emptyButton.innerHTML] = ["", button.textContent];
        [button.id, button.innerHTML] = ["empty", ""];
        changeClass(emptyButton);
        changeClass(button);
    }
}
