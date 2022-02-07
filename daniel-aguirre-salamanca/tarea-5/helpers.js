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
    let array = Array.from({length: 15}, (_, value) => value + 1)
    return array.sort(() => Math.random() - 0.5);
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
