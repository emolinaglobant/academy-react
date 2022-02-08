tile = [
  [15, 8, 1, 4],
  [9, 2, 14, 3],
  [12, 7, 5, 11],
  [6, 10, 13, 0],
];
tileSolution = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

function move(row, column, rowToMove, columnToMove) {
  if (tile[rowToMove][columnToMove] === 0) {
    tile[rowToMove][columnToMove] = tile[row][column];
    tile[row][column] = 0;
    let buttonOne = document.getElementById(row.toString() + column.toString());
    buttonOne.innerHTML = '0';

    let buttonTwo = document.getElementById(
      rowToMove.toString() + columnToMove.toString()
    );
    buttonTwo.innerHTML = tile[rowToMove][columnToMove].toString();
  }
}

function sideCount(side, row, column) {
  if (side === 'up') {
    move(row, column, row - 1, column);
  }

  if (side === 'down') {
    move(row, column, row + 1, column);
  }
  if (side === 'left') {
    move(row, column, row, column - 1);
  }
  if (side === 'right') {
    move(row, column, row, column + 1);
  }
}

function slide(row, column) {
  let sides = ['up', 'down', 'left', 'right'];
  if (column === 0) {
    let position = sides.indexOf('left');
    sides.splice(position, 1);
  }

  if (column === 3) {
    let position = sides.indexOf('right');
    sides.splice(position, 1);
  }

  if (row === 0) {
    let position = sides.indexOf('up');
    sides.splice(position, 1);
  }

  if (row === 3) {
    let position = sides.indexOf('down');
    sides.splice(position, 1);
  }

  console.log(sides);
  return sides;
}

function puzzle(row, column) {
  let sideReview = slide(row, column);
  sideReview.forEach((element) => {
    sideCount(element, row, column);
  });

  if (verifyPuzzle() === true) {
    alert('Done');
  }
}

function verifyPuzzle() {
  let verified = true;
  tile.forEach((element, row) => {
    element.forEach((number, column) => {
      if (number !== tileSolution[row][column]) {
        verified = false;
      }
    });
  });

  return verified;
}
