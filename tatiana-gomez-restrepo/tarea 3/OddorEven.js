function oddOrEven(array){
    if (array.length > 0){
        var num = 0;
        for (i = 0; i < array.length; i++){
            num = array[i] + num;
        }
        if (num % 2 == 0){
            return "even";
        }
        else {
            return "odd";
        }
    }
    else {
        return "even";
    }
}