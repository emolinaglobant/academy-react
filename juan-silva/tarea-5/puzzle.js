//Initial matrix
let matrixPuzzle=[[2,3,10,11],[14,1,13,15],[5,4,8,7],[6,12,9,""]];
//explore the positions around the empty space
function findMoves(){
    let matrix = getMatrix();
    let posZero = findZeroPos(matrix);
    let moves=[];
    //Each if has directions(up,down,left,right) where the Zero can move
    posZero[0]<=3 && posZero[0]>0?moves.push([posZero[0]-1,posZero[1],"up"]):null;
    posZero[0]<3 && posZero[0]>=0?moves.push([posZero[0]+1,posZero[1],"down"]):null;
    posZero[1]<=3 && posZero[1]>0?moves.push([posZero[0],posZero[1]-1,"left"]):null;  
    posZero[1]<3 && posZero[0]>=0?moves.push([posZero[0],posZero[1]+1,"right"]):null;
    return moves;
}
//find the empty space in the puzzle
function findZeroPos(){
    let matrix = getMatrix();
    let positionZero=[];
    for(var i=0; i<matrix.length; i++) {
        for(var j=0; j<matrix[i].length; j++) {
            matrix[i][j]==="" ? positionZero=[i,j]:null;
        }
    }
    return positionZero;
}
function getMatrix(){
    return matrixPuzzle;
}
//move the empty space
function moveNumber(direction){
    let up,down,left,right
    let moves=findMoves();
    let posZero=findZeroPos();
    moves.forEach((vector)=>{
        //Extracting each possible movement
        vector[2]=="up"?up=vector.slice(0,2):null;
        vector[2]=="down"?down=vector.slice(0,2):null;
        vector[2]=="left"?left=vector.slice(0,2):null;
        vector[2]=="right"?right=vector.slice(0,2):null;
    });
    if(direction=="left"){
        if(right){
            matrixPuzzle[posZero[0]][posZero[1]]=matrixPuzzle[right[0]][right[1]];
            matrixPuzzle[right[0]][right[1]]="";
        }
        else{
        console.log("You can't move it");}
    }
    else if(direction=="up"){
        if(down){
            matrixPuzzle[posZero[0]][posZero[1]]=matrixPuzzle[down[0]][down[1]]; 
            matrixPuzzle[down[0]][down[1]]=""; 
        }
        else{
        console.log("You can't move it");}
    }
    else if(direction=="right"){
        if(left){
            matrixPuzzle[posZero[0]][posZero[1]]=matrixPuzzle[left[0]][left[1]];
            matrixPuzzle[left[0]][left[1]]="";   
        }
        else{
        console.log("You can't move it");}
    }
    else if(direction=="down"){
        if(up){
            matrixPuzzle[posZero[0]][posZero[1]]=matrixPuzzle[up[0]][up[1]];
            matrixPuzzle[up[0]][up[1]]="";  
        }
        else{
        console.log("You can't move it");}
    }
    showMatrix();
}
function showMatrix(){
    let currentMatrix = getMatrix();
    document.getElementById('boxAA').innerHTML = currentMatrix[0][0];
    document.getElementById('boxAB').innerHTML = currentMatrix[1][0];
    document.getElementById('boxAC').innerHTML = currentMatrix[2][0];
    document.getElementById('boxAD').innerHTML = currentMatrix[3][0];
    document.getElementById('boxBA').innerHTML = currentMatrix[0][1];
    document.getElementById('boxBB').innerHTML = currentMatrix[1][1];
    document.getElementById('boxBC').innerHTML = currentMatrix[2][1];
    document.getElementById('boxBD').innerHTML = currentMatrix[3][1];
    document.getElementById('boxCA').innerHTML = currentMatrix[0][2];
    document.getElementById('boxCB').innerHTML = currentMatrix[1][2];
    document.getElementById('boxCC').innerHTML = currentMatrix[2][2];
    document.getElementById('boxCD').innerHTML = currentMatrix[3][2];
    document.getElementById('boxDA').innerHTML = currentMatrix[0][3];
    document.getElementById('boxDB').innerHTML = currentMatrix[1][3];
    document.getElementById('boxDC').innerHTML = currentMatrix[2][3];
    document.getElementById('boxDD').innerHTML = currentMatrix[3][3];
} 

