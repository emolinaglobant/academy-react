
function oddOrEven(array) {
   var longitud=array.length
   var suma=0
   var str

    if(longitud!=0){
        for(var i=0;i<longitud;i++){
           suma+=array[i]
        }

    }else{
        console.log(suma=0)
    }

    if (suma% 2 === 0 ){
       str=  "even"
    }else{
       str= "odd"
    }

    return  str
  }

  console.log(oddOrEven([0]));