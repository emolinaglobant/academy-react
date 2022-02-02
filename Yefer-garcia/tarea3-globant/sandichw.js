
// function duplicateSandwich(a) {
//   for (let i = 0; i < a.length; i++)
//   if (a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
//   return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
// }
// console.log(
//   duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])
// );

// function sandwich(a) {

//     a.forEach((a,i)=>a[i] !== a.lastIndexOf(a[i])&&(a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]))))
// }
// console.log(
//   sandwich(["None", "Hello", "Example", "hello", "None", "Extra"])
// );

  



// !sandwich
const arreglo=["None", "Hello", "Example", "hello", "None", "Extra"]
const solicitud=[]
let sandwich= arreglo.forEach((posicion)=>posicion=='Hello'&&(solicitud.push(posicion))||posicion=='Example' &&(solicitud.push(posicion)) ||posicion=='hello'&&(solicitud.push(posicion)))

