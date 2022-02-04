let board = [
  [2, 3, 10, 11],
  [14, 1, 13, 15],
  [5, 4, 8, 7],
  [6, 12, 9, 0],
];

let aA = document.getElementById("aA"),
  aB = document.getElementById("aB"),
  aC = document.getElementById("aC"),
  aD = document.getElementById("aD"),
  bA = document.getElementById("bA"),
  bB = document.getElementById("bB"),
  bC = document.getElementById("bC"),
  bD = document.getElementById("bD"),
  cA = document.getElementById("cA"),
  cB = document.getElementById("cB"),
  cC = document.getElementById("cC"),
  cD = document.getElementById("cD"),
  dA = document.getElementById("dA"),
  dB = document.getElementById("dB"),
  dC = document.getElementById("dC"),
  dD = document.getElementById("dD");

  let arrButtons = [
    aA,
    aB,
    aC,
    aD,
    bA,
    bB,
    bC,
    bD,
    cA,
    cB,
    cC,
    cD,
    dA,
    dB,
    dC,
    dD,
  ];

let printBoard = () => {
  aA.innerHTML = board[0][0];
  aB.innerHTML = board[0][1];
  aC.innerHTML = board[0][2];
  aD.innerHTML = board[0][3];
  bA.innerHTML = board[1][0];
  bB.innerHTML = board[1][1];
  bC.innerHTML = board[1][2];
  bD.innerHTML = board[1][3];
  cA.innerHTML = board[2][0];
  cB.innerHTML = board[2][1];
  cC.innerHTML = board[2][2];
  cD.innerHTML = board[2][3];
  dA.innerHTML = board[3][0];
  dB.innerHTML = board[3][1];
  dC.innerHTML = board[3][2];
  dD.innerHTML = board[3][3];

  arrButtons.map(i => {
    if(i.innerHTML % 2 === 0) {
      i.classList.add('even')
    } else {
      i.classList.remove('even')
    }
    if(i.innerHTML === '0') {
      i.classList.add('bottonZero')
    } else {
      i.classList.remove('bottonZero')
    }
  })
};
printBoard();

aA.value = [0, 0];
aB.value = [0, 1];
aC.value = [0, 2];
aD.value = [0, 3];
bA.value = [1, 0];
bB.value = [1, 1];
bC.value = [1, 2];
bD.value = [1, 3];
cA.value = [2, 0];
cB.value = [2, 1];
cC.value = [2, 2];
cD.value = [2, 3];
dA.value = [3, 0];
dB.value = [3, 1];
dC.value = [3, 2];
dD.value = [3, 3];

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

let replaceZero = (coordY, coordX, zeroY, zeroX) => {
  board[zeroY][zeroX] = board[coordY][coordX];
  board[coordY][coordX] = 0;
  printBoard();
};

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

arrButtons.map((i) => [
  i.addEventListener("click", (e) => {
    e.preventDefault();
    let { zeroY, zeroX } = findZero();
    closeToZero(i.value[0], i.value[2], zeroY, zeroX);
  }),
]);
