function largestPairSum(numbers)
{
    var numMayor = numbers[0];
    var numMayor2 = numbers[1];
    for (i = 2; i < numbers.length; i++){
        var inter = numbers[i];
        if (numMayor < inter){
            numMayor2 = numMayor;
            numMayor = inter;
        }
        else if (numMayor2 < inter){
            numMayor2 = inter;
        }
    }
    return numMayor + numMayor2;
}