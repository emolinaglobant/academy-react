function smallEnough (a, limit){
    let numbers = a; 
    let limite = limit;
    let bool = false;
    for(index of a){
        if(index <= limite){
            bool = true;
        }else{
            bool = false;
        }
    }
    return bool;
}