const puzzleNumbers =  document.querySelectorAll('button');
const overlayMessage = document.getElementById('winner-message');
let correctMatrix = [['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '10', '11', '12'], ['13', '14', '15', 'empty']];
let HTMLMatrix = [[], [], [], []]; 
let x = 0;
let y = 0;

// Set index attributes to HTML and fill matrix with data number attributes
const fillMatrix = (data) => {
  data.setAttribute('data-index', `[${x}][${y}]`);
  HTMLMatrix[x][y] = data.dataset.number;

  y += 1;

  if((y == 4) && (x < 4)) {
    y = 0;
    x += 1;
  }
}

// Identify empty space in neighborhood
const identifyEmpty = (puzzleNumber) => {

  let xIndex = parseInt(puzzleNumber.dataset.index.split('')[1]);
  let yIndex = parseInt(puzzleNumber.dataset.index.split('')[4]);

  const emptyIdentifier = new EmptySpaceIdentifier();

  emptyIdentifier.right(puzzleNumber, HTMLMatrix, xIndex, yIndex);
  emptyIdentifier.left(puzzleNumber, HTMLMatrix, xIndex, yIndex);
  emptyIdentifier.top(puzzleNumber, HTMLMatrix, xIndex, yIndex);
  emptyIdentifier.bottom(puzzleNumber, HTMLMatrix, xIndex, yIndex);

  (JSON.stringify(HTMLMatrix) === JSON.stringify(correctMatrix)) ? overlayMessage.classList.remove('hidden') : null;
  
}

// Add event listeners to each buttons and create matrix
puzzleNumbers.forEach((puzzleNumber) => {
  puzzleNumber.addEventListener('click', function() {
    identifyEmpty(puzzleNumber);
  });

  fillMatrix(puzzleNumber);
})





