class EmptySpaceIdentifier {

  bottom(puzzleNumber, matrix, xIndex, yIndex) {

    if((xIndex < 3) && (matrix[xIndex + 1][yIndex] === 'empty')) {

      // Update matrix
      matrix[xIndex + 1][yIndex] = matrix[xIndex][yIndex];
      matrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      for(let i = 0; i < puzzleNumbers.length; i++) {
  
        if(puzzleNumbers[i].dataset.index === `[${xIndex + 1}][${yIndex}]`) {
  
          puzzleNumbers[i].dataset.number = puzzleNumber.dataset.number;
          puzzleNumbers[i].innerHTML = puzzleNumber.dataset.number;
        }
      }
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    }
  }

  left(puzzleNumber, matrix, xIndex, yIndex) {

    if(matrix[xIndex][yIndex - 1] === 'empty') {
    
      // Update matrix
      matrix[xIndex][yIndex - 1] = matrix[xIndex][yIndex];
      matrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      for(let i = 0; i < puzzleNumbers.length; i++) {
  
        if(puzzleNumbers[i].dataset.index === `[${xIndex}][${yIndex - 1}]`) {
  
          puzzleNumbers[i].dataset.number = puzzleNumber.dataset.number;
          puzzleNumbers[i].innerHTML = puzzleNumber.dataset.number;
        }
      }
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    }
  }

  right(puzzleNumber, matrix, xIndex, yIndex) {

    if(matrix[xIndex][yIndex + 1] === 'empty') {

      // Update matrix
      matrix[xIndex][yIndex + 1] = matrix[xIndex][yIndex];
      matrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      for(let i = 0; i < puzzleNumbers.length; i++) {
  
        if(puzzleNumbers[i].dataset.index === `[${xIndex}][${yIndex + 1}]`) {
  
          puzzleNumbers[i].dataset.number = puzzleNumber.dataset.number;
          puzzleNumbers[i].innerHTML = puzzleNumber.dataset.number;
        }
      }
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    } 
  }

  top(puzzleNumber, matrix, xIndex, yIndex) {

    if((xIndex >= 1) && (matrix[xIndex - 1][yIndex] === 'empty')) {
    
      // Update matrix
      matrix[xIndex - 1][yIndex] = matrix[xIndex][yIndex];
      matrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      for(let i = 0; i < puzzleNumbers.length; i++) {
  
        if(puzzleNumbers[i].dataset.index === `[${xIndex - 1}][${yIndex}]`) {
  
          puzzleNumbers[i].dataset.number = puzzleNumber.dataset.number;
          puzzleNumbers[i].innerHTML = puzzleNumber.dataset.number;
        }
      }
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    }
  }
  
}