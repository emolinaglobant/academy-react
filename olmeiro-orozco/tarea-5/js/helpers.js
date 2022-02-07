import { Box } from "./box.js";

const swapBoxes = (grid, box1, box2) => {
  const temporal = grid[box1.row][box1.column];

  grid[box1.row][box1.column] = grid[box2.row][box2.column];
  grid[box2.row][box2.column] = temporal;
};

const getGridRandom = () => {
  let grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];

  let whiteBox = new Box(3, 3);

  const arr = new Array(1000);
  const filledArray = [...arr].map(() => {
    const nextRandomBox = whiteBox.getRandomNextBox();
    swapBoxes(grid, whiteBox, nextRandomBox);
    whiteBox = nextRandomBox;
  });

  if (puzzleReady(grid)) return getGridRandom();
  return grid;
};

const puzzleReady = (grid) => {
  return (
    grid[0][0] === 1 &&
    grid[0][1] === 2 &&
    grid[0][2] === 3 &&
    grid[0][3] === 4 &&
    grid[1][0] === 5 &&
    grid[1][1] === 6 &&
    grid[1][2] === 7 &&
    grid[1][3] === 8 &&
    grid[2][0] === 9 &&
    grid[2][1] === 10 &&
    grid[2][2] === 11 &&
    grid[2][3] === 12 &&
    grid[3][0] === 13 &&
    grid[3][1] === 14 &&
    grid[3][2] === 15 &&
    grid[3][3] === 0
  );
};

export { puzzleReady, getGridRandom, swapBoxes };