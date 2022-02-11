import  Display  from './Display.js' 

const createPuzzle    = document.getElementById('create-puzzle');
const congratulations = document.getElementById('congratulations');
const piecePuzzle     = document.querySelectorAll('.piece-puzzle');
const display         = new Display();
let   order           = display.createOrder();

createPuzzle.addEventListener('click', () => {
    let index = 0; 
    order     = display.createOrder();
    congratulations.style.display = 'none';
    piecePuzzle.forEach( piece => {
        piece.innerHTML = order[index];
        piece.value     = order[index];
        piece.name      = (index + 1) == 16 ? 0 : index + 1;
        piece.className = order[index] == 0 ? "piece-puzzle empty-piece" 
                        : order[index] % 2 == 0 ? "piece-puzzle even-pieces" 
                        : "piece-puzzle odd-pieces";
        index += 1;
    });
});

piecePuzzle.forEach(piece => {

    piece.addEventListener('click', () => {
        const zeroPiece    = document.querySelectorAll('.empty-piece');
        let positionMatrix = display.convertToMatrix(order);
        let newPosition    = display.movePieces(positionMatrix, zeroPiece[0], piece, order, piecePuzzle, congratulations);
    });

});


