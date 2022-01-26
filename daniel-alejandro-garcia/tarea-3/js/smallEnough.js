function smallEnough(a, limit){
    let bool;
        for(let i = 0; i < a.length; i++){
            if(a[i] <= limit){
                bool = true;
            }else{
                bool = false;
            }
        }
    return bool;
}