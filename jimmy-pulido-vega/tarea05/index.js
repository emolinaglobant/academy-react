let board = [
  [2, 3, 10, 11],
  [14, 1, 13, 15],
  [5, 4, 8, 7],
  [6, 12, 9, 0],
];

const arrButtons = [
  (aA = document.getElementById("aA")),
  (aB = document.getElementById("aB")),
  (aC = document.getElementById("aC")),
  (aD = document.getElementById("aD")),
  (bA = document.getElementById("bA")),
  (bB = document.getElementById("bB")),
  (bC = document.getElementById("bC")),
  (bD = document.getElementById("bD")),
  (cA = document.getElementById("cA")),
  (cB = document.getElementById("cB")),
  (cC = document.getElementById("cC")),
  (cD = document.getElementById("cD")),
  (dA = document.getElementById("dA")),
  (dB = document.getElementById("dB")),
  (dC = document.getElementById("dC")),
  (dD = document.getElementById("dD")),
];

let closeToZero = (coordY, coordX, zeroY, zeroX) => {
  let numY = parseInt(coordY, 10);
  let numX = parseInt(coordX, 10);
  let confirmUp = numY + 1 === zeroY && numX === zeroX;
  let confrimDown = numY - 1 === zeroY && numX === zeroX;
  let confirmRigth = numX - 1 === zeroX && numY === zeroY;
  let confirmLeft = numX + 1 === zeroX && numY === zeroY;
  if (confirmUp || confrimDown || confirmRigth || confirmLeft) {
    replaceZero(coordY, coordX, zeroY, zeroX);
  }
};

let findZero = () => {
  let positionY;
  let positionX;
  board.map((y, n) => {
    let findInY = y.indexOf(0);
    if (findInY >= 0) {
      positionY = n;
      positionX = findInY;
    }
  });
  return {
    zeroY: positionY,
    zeroX: positionX,
  };
};

let printBoardAndAssingValues = (arr) => {
  let y = -1;
  let x = 0;
  arr.map((i, n) => {
    n % 4 === 0 && y++;
    x++;
    n % 4 === 0 && (x = 0);
    i.value = [y, x];
    i.innerHTML = board[y][x];
    i.innerHTML % 2 === 0
      ? i.classList.add("even")
      : i.classList.remove("even");
    i.innerHTML === "0"
      ? i.classList.add("bottonZero")
      : i.classList.remove("bottonZero");
  });
};

let replaceZero = (coordY, coordX, zeroY, zeroX) => {
  board[zeroY][zeroX] = board[coordY][coordX];
  board[coordY][coordX] = 0;
  printBoardAndAssingValues(arrButtons);
};

//execution
printBoardAndAssingValues(arrButtons);

arrButtons.map((i) => [
  i.addEventListener("click", (e) => {
    e.preventDefault();
    let { zeroY, zeroX } = findZero();
    closeToZero(i.value[0], i.value[2], zeroY, zeroX);
  }),
]);