// function spongeMeme(sentence) {
//     let array = sentence.split('')
//     let result =''
//     array.forEach((value, index) =>{
//       if(index%2==0){
//         result = result + value.toUpperCase()
//       } else{
//         result = result + value.toLowerCase()
//       }
//     });
//     return result 
//   }

  function spongeMeme(sentence) {
    let array = sentence.split(''), result=''
    array.forEach((value, index) => index%2==0 ? result += value.toUpperCase() : result += value.toLowerCase());
    return result 
  }