function largestPairSum (numeros) {
    numeros.sort((numerogrande1,numerogrande2) => numerogrande2 - numerogrande1);
    return numeros[0] + numeros[1];     
}

console.log(largestPairSum([10, 14, 2, 23, 19])); 

console.log(largestPairSum([80,52,41,45,84,74])); 