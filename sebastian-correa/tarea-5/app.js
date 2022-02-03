const targetOrder = [
  [1, 2, 3, 0],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

let playerOrder = [];

/**
 * This function swaps a clicked tile if the empty tile is adjacent to it.
 * It also checks if the last swap was a winning move.
 * @param {*} tile - The tile that was clicked.
 */
function swap(tile) {
  const posX = +(tile.dataset.position[0]);
  const posY = +(tile.dataset.position[1]);
  let emptyPosition = getEmptyPosition(posX, posY);
  if (!!emptyPosition) {
    emptyPosition = emptyPosition.split(',');
    let emptyTile = document.querySelector(`img[data-position='${emptyPosition[0]}${emptyPosition[1]}']`);
    let clickedTile = document.querySelector(`img[data-position='${posX}${posY}']`);
    
    // Updating the player order
    playerOrder[+emptyPosition[0]][+emptyPosition[1]] = playerOrder[posX][posY];
    playerOrder[posX][posY] = 0;

    // Updating DOM
    emptyTile.dataset.value = `${playerOrder[+emptyPosition[0]][+emptyPosition[1]]}`;
    clickedTile.dataset.value = '0';
  }
  if (checkWin()) {
    alert('Congratulations, you won!');
  }
}

/**
 * This function searches the empty tile position in the list of adjacents of a clicked tile.
 * @param {string} posX - The row of the clicked tile.
 * @param {string} posY - The column of the clicked tile.
 * @returns The position of the empty tile, if adjacent, otherwise undefined.
 */
function getEmptyPosition(posX, posY) {
  let adjacents = getAdjacents(+posX, +posY);
  return adjacents.find(value => {
    const position = value.split(',');
    if ((position[0] > -1 && position[1] > -1 && position[0] < 4 && position[1] < 4) && playerOrder[position[0]][position[1]] == 0) {
      return position;
    }
  });
}

/**
 * This function compares if the target order matches the current player order, to determine if the player win.
 * @returns Whether the player won or not.
 */
function checkWin() {
  return JSON.stringify(targetOrder) === JSON.stringify(playerOrder);
}

/**
 * This function calculates the positions of the adjacent tiles of a clicked tile.
 * @param {number} posX - The row of the clicked tile.
 * @param {number} posY - The column of the clicked tile.
 * @returns An array containing between 2 and 4 positions, depending on if the tile is a corner.
 */
function getAdjacents(posX, posY) {
  let adjacents = [
    `${posX-1},${posY}`,
    `${posX},${posY+1}`,
    `${posX+1},${posY}`,
    `${posX},${posY-1}`,
  ];
  return adjacents;
}

/**
 * This function initializes the shuffled puzzle.
 */
function startGame() {
  shuffle();
  initializeDOM();
}

/**
 * This function creates the player matrix and shuffles it by using a shuffle algorithm.
 */
function shuffle() {
  let unidimensional = targetOrder.flat();
  unidimensional = fisherYates(unidimensional);
  playerOrder = unidimensional.reduce((rows, key, index) => (index % 4 == 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
}

/**
 * This function sets all the shuffled tiles in the DOM.
 */
function initializeDOM() {
  for (let i = 0; i < playerOrder.length; i++) {
    for (let j = 0; j < playerOrder[0].length; j++) {
      let element = document.querySelector(`img[data-position='${i}${j}']`);
      element.dataset.value = playerOrder[i][j];
    }
  }
}

/**
 * Implementation of the Fisher-Yates shuffling algorithm.
 * @param {[number]} array - The array to shuffle.
 * @returns A shuffled array.
 */
function fisherYates(array) {
  let index = array.length, randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

startGame();