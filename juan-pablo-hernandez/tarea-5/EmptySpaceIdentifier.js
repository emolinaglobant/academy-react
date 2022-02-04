class EmptySpaceIdentifier {

  bottom(puzzleNumber, HTMLMatrix, xIndex, yIndex) {

    if((xIndex < 3) && (HTMLMatrix[xIndex + 1][yIndex] === 'empty')) {

      // Update matrix
      HTMLMatrix[xIndex + 1][yIndex] = HTMLMatrix[xIndex][yIndex];
      HTMLMatrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      puzzleNumbers.forEach((HTMLNumber) => {
        if(HTMLNumber.dataset.index === `[${xIndex + 1}][${yIndex}]`) {
  
          HTMLNumber.dataset.number = puzzleNumber.dataset.number;
          HTMLNumber.innerHTML = puzzleNumber.dataset.number;
        }
      })
      
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    }
  }

  left(puzzleNumber, HTMLMatrix, xIndex, yIndex) {

    if(HTMLMatrix[xIndex][yIndex - 1] === 'empty') {
    
      // Update matrix
      HTMLMatrix[xIndex][yIndex - 1] = HTMLMatrix[xIndex][yIndex];
      HTMLMatrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      puzzleNumbers.forEach((HTMLNumber) => {
        if(HTMLNumber.dataset.index === `[${xIndex}][${yIndex - 1}]`) {
  
          HTMLNumber.dataset.number = puzzleNumber.dataset.number;
          HTMLNumber.innerHTML = puzzleNumber.dataset.number;
        }
      })
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    }
  }

  right(puzzleNumber, HTMLMatrix, xIndex, yIndex) {

    if(HTMLMatrix[xIndex][yIndex + 1] === 'empty') {

      // Update matrix
      HTMLMatrix[xIndex][yIndex + 1] = HTMLMatrix[xIndex][yIndex];
      HTMLMatrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      puzzleNumbers.forEach((HTMLNumber) => {
        if(HTMLNumber.dataset.index === `[${xIndex}][${yIndex + 1}]`) {
  
          HTMLNumber.dataset.number = puzzleNumber.dataset.number;
          HTMLNumber.innerHTML = puzzleNumber.dataset.number;
        }
      })
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    } 
  }

  top(puzzleNumber, HTMLMatrix, xIndex, yIndex) {

    if((xIndex >= 1) && (HTMLMatrix[xIndex - 1][yIndex] === 'empty')) {
    
      // Update matrix
      HTMLMatrix[xIndex - 1][yIndex] = HTMLMatrix[xIndex][yIndex];
      HTMLMatrix[xIndex][yIndex] = 'empty';
  
      // Update right number in HTML
      puzzleNumbers.forEach((HTMLNumber) => {
        if(HTMLNumber.dataset.index === `[${xIndex - 1}][${yIndex}]`) {
  
          HTMLNumber.dataset.number = puzzleNumber.dataset.number;
          HTMLNumber.innerHTML = puzzleNumber.dataset.number;
        }
      })
  
      // Update new empty in HTML
      puzzleNumber.dataset.number = 'empty';
      puzzleNumber.innerHTML = '';
    }
  }
  
}