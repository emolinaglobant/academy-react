import TilePuzzle from "./tilePuzzle.js";
import { generatedArray } from "./utils.js";

const roundIndex1 = generatedArray(1000);

export const alternateTilePuzzle = (grid, item1, item2) => {
  const temp = grid[item1.y][item1.x];
  grid[item1.y][item1.x] = grid[item2.y][item2.x];
  grid[item2.y][item2.x] = temp;
};

export const isSolved = (grid) => {
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

export const getRamdomPositions = () => {
  let grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  let emptyButton = new TilePuzzle(3, 3);

  roundIndex1.forEach((element) => {
    const randomItems = emptyButton.getRamdomSlidingItems();
    alternateTilePuzzle(grid, emptyButton, randomItems);
    emptyButton = randomItems;
  });

  if (isSolved(grid)) return getRamdomPositions();
  return grid;
};
