

tile=[[15,8,1,4],[9,2,14,3],[12,7,5,11],[6,10,13,0]];
tileSolution=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];

function puzzle(row,column){  
   let sideReview = slide(row,column);
   for  (let i=0; i<sideReview.length;i++){
        if (sideCount(sideReview[i],row,column)===true){
            i=sideReview.length;
        }
   }

   if(verifyPuzzle()===true){
        console.log('Done'); 
   }
  
}

function verifyPuzzle() {
    for  (let i=0; i<tile.length;i++){
        
        for (let j=0; j<tile.length;j++){
            if (tile[i][j] != tileSolution[i][j]){
                return false;
            }
        }
   }    
   
    return true;
}



function sideCount(side,row,column){
    if(side==='up'){
        return  move(row,column,row-1,column);
    }

    if(side==='down'){
        return move(row,column,row+1,column);
    }
    if(side==='left'){
        return move(row,column,row,column-1);
    }
    if(side==='right'){
        return move(row,column,row,column+1);
    }
}

function move (row,column,rowToMove,columnToMove){
    
    if(tile[rowToMove][columnToMove]===0){
        tile[rowToMove][columnToMove]=tile [row][column];
        tile[row][column]=0;
        let buttonOne=document.getElementById(row.toString()+column.toString());
        buttonOne.innerHTML='0';

        let buttonTwo=document.getElementById((rowToMove).toString()+columnToMove.toString());
        buttonTwo.innerHTML= tile[rowToMove][columnToMove].toString();
        return true; 

    }
}


function slide(row,column) {
    let sides = ['up', 'down', 'left', 'right'];
    if(column===0){
        let position =sides.indexOf('left');
        sides.splice(position,1);
    }

    if(column===3){
        let position =sides.indexOf('right');
        sides.splice(position,1);
    }

    if(row===0){
        let position =sides.indexOf('up');
        sides.splice(position,1);
    }

    if(row===3){
        let position =sides.indexOf('down');
        sides.splice(position,1);
    }
    
    console.log(sides);
    return sides;
    

}

