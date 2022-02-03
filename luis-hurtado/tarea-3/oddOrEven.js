function oddOrEven(array) {

    let sumNumbers = 0;
    
    array.forEach((item) => {
      sumNumbers = sumNumbers + item;
    });

    return (
        sumNumbers % 2 === 0 ? 'even' : 'odd'
    )
}

function oddOrEven(array) {
  array.forEach((item) => {
    resultNumber = (item % 2 === 0) ? 'even' : 'odd'
  })
  return resultNumber
}

// function oddOrEven(array) {
//   let resultNumber = array.forEach((item) => {
//     (item % 2 === 0) ? 'even' : 'odd'
//   })
//   return resultNumber
// }

// function oddOrEven(array) {
  
  
//   return resultNumber
// }