export default class Display {

    getRandomNumber(){
         return Math.floor(Math.random() * 16);
    }

    createOrder(){
        let number = "";
        let order  = [];
        for (let i = 0; i<16 ; i++)
        {
            do { 
                number = this.getRandomNumber();
            } while (order.includes(number));
            order.push(number);    
        }
        return order
    }

    convertToMatrix(array){
        let newMatrix = [];
        for (let i = 0; i<16 ; i+=4)
        {
            newMatrix.push(array.slice(i, i+4));
        }       
        return newMatrix;
    }

    getPosition(matrix, value){
        let position = [];
        for (let i = 0; i<4 ; i++){
            position  = matrix[i];
            if(position.indexOf(value) != -1) return [i, position.indexOf(value)];
        }
    }

    neighborsPieces(actualPosition, zeroPosition){
        let row  =  0;
        let col  =  1;
        let move =  (actualPosition[row] == zeroPosition[row]) && 
                    (Math.abs(actualPosition[col] - zeroPosition[col])==1) ? true 
                    : (actualPosition[col] == zeroPosition[col]) && 
                    (Math.abs(actualPosition[row] - zeroPosition[row])==1) ? true
                    : false;
        return move;
    } 

    orderModifier(order, valuePiece){
        let piecePosition    = order.indexOf(valuePiece); 
        let zeroPosition     = order.indexOf(0); 
        order[zeroPosition]  = valuePiece;
        order[piecePosition] = 0;
    }

    printGameOver(congratulations){
        congratulations.style.display = 'block';
        console.log("GAME OVER");
    }

    gameOver(piecePuzzle){
        let comparator = Boolean
        let vector     = [];
        for (const prop in piecePuzzle) {
            if ( parseInt(prop) ){
                comparator     = piecePuzzle[prop].value == piecePuzzle[prop].name ? true : false;
                vector[prop-1] = comparator;                   
            }                  
        }
        comparator = vector.every((currentValue) => currentValue == true);
        if (comparator) {this.printGameOver(congratulations)};
        // console.log(comparator);
    }

    pieceChange(piece, zeroPiece, order, piecePuzzle, congratulations){
        let value           = piece.value;
        let className       = piece.className; 
        piece.value         = 0;
        piece.innerHTML     = 0;
        piece.className     = "piece-puzzle empty-piece"
        zeroPiece.value     = value;
        zeroPiece.innerHTML = value;
        zeroPiece.className = className;
        this.orderModifier(order, value);
        this.gameOver(piecePuzzle, congratulations);
    }
    movePieces(positionMatrix, zeroPiece, piece, order, piecePuzzle, congratulations){
        let actualPosition = this.getPosition(positionMatrix, piece.value);
        let zeroPosition   = this.getPosition(positionMatrix, 0);
        let move           = this.neighborsPieces(actualPosition, zeroPosition);
        if (move){ this.pieceChange(piece, zeroPiece, order, piecePuzzle,congratulations)};
        return move;
    } 
}

// console.log(`piece: ${piece});