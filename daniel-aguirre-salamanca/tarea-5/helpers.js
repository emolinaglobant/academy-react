function changeClass(button) {
  const number = parseInt(button.textContent);
  if (button.id === "empty") {
    button.className = "empty";
  } else if (number % 2 === 0) {
    button.className = "active active--even";
  } else {
    button.className = "active active--odd";
  }
}

function generateRandomness() {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function isInterchangeable(clickedButton, emptyButton) {
  const positions =
    Math.abs(clickedButton.dataset.column - emptyButton.dataset.column) +
    Math.abs(clickedButton.dataset.row - emptyButton.dataset.row);
  if (positions == 1) {
    return true;
  }
  return false;
}

export { changeClass, generateRandomness, isInterchangeable};
