function oddOrEven(array) {
    //function sum
    const reducer=(a,b)=>  a+b;
    //function callback
    res=array.reduce(reducer,0);
    //choose odd or even
    return(res%2==0 ? "even": "odd")
 }

 console.log(oddOrEven([1,2,3,4,5,6,7]));