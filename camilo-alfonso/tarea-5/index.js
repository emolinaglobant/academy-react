const boardTiles = document.querySelectorAll(".puzzle__tile");
const puzzleBoard = document.querySelector(".puzzle__board");

const puzzleMatriz = [
  [boardTiles[0], boardTiles[1], boardTiles[2], boardTiles[3]],
  [boardTiles[4], boardTiles[5], boardTiles[6], boardTiles[7]],
  [boardTiles[8], boardTiles[9], boardTiles[10], boardTiles[11]],
  [boardTiles[12], boardTiles[13], boardTiles[14], boardTiles[15]],
];

const slide = (puzzleBoard, puzzleMatriz) => {
  puzzleMatriz.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      column.style.top = `${rowIndex * 100}px`;
      column.style.left = `${columnIndex * 100}px`;

      column.style["background-position-y"] = `-${rowIndex * 100}px`;
      column.style["background-position-x"] = `-${columnIndex * 100}px`;

      puzzleBoard.appendChild(column);
    });
  });
};

const slidingTile = (tileX, tileY) => {
  const top = tileX.style.top;
  const left = tileX.style.left;

  tileX.style.top = tileY.style.top;
  tileX.style.left = tileY.style.left;

  tileY.style.top = top;
  tileY.style.left = left;
};

slide(puzzleBoard, puzzleMatriz);

puzzleBoard.addEventListener("click", (event) => {
  const target = event.target;

  let rowTile, columnTile, emptyTileX, emptyTileY;

  puzzleMatriz.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === target) {
        rowTile = rowIndex;
        columnTile = columnIndex;
      }

      const verify = column.innerText === "";
      verify ? ((emptyTileX = rowIndex), (emptyTileY = columnIndex)) : "";
    });
  });

  if (
    (columnTile === emptyTileY &&
      (rowTile + 1 === emptyTileX || rowTile - 1 === emptyTileX)) ||
    (rowTile === emptyTileX &&
      (columnTile + 1 === emptyTileY || columnTile - 1 === emptyTileY))
  ) {
    slidingTile(
      puzzleMatriz[rowTile][columnTile],
      puzzleMatriz[emptyTileX][emptyTileY]
    );

    const temp = puzzleMatriz[rowTile][columnTile];
    puzzleMatriz[rowTile][columnTile] = puzzleMatriz[emptyTileX][emptyTileY];
    puzzleMatriz[emptyTileX][emptyTileY] = temp;
  }
});
