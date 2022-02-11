function smallEnough(number, limit){
    isAllBelowLimit = "";
    number.forEach((number)=> {
        isAllBelowLimit =   number <= limit;
        if (!isAllBelowLimit) return isAllBelowLimit
    })
    return isAllBelowLimit;
    }