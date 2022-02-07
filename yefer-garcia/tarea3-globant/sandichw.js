


 //  Primera Solucion

function duplicateSandwich(a) {
  for (let i = 0; i < a.length; i++)
  if (a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
  return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}


// Solucion Final 2

function duplicateSandwich(a) {
   let set = new Set(), x;
   a.forEach((i, ind) => (set.add(i), set.size < ind + 1 && x === undefined && (x = i)));return a.slice(a.indexOf(x)+1, a.lastIndexOf(x))
}


// Solucion Final 1

const arreglo=["None", "Hello", "Example", "hello", "None", "Extra"]
const solicitud=[]
let sandwiche= arreglo.forEach((posicion)=>posicion=='Hello'&&(solicitud.push(posicion))||posicion=='Example' &&(solicitud.push(posicion)) ||posicion=='hello'&&(solicitud.push(posicion)))
