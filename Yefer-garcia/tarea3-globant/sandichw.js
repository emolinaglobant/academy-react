// ! sandwich 1
function duplicateSandwich(a) {
let set = new Set(), x;
[...a].forEach((i, ind) => (set.add(i), set.size < ind + 1 && x === undefined && (x = i)))
return a.slice(a.indexOf(x)+1, a.lastIndexOf(x))
}
duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])
        

 

// ! sandwich 2
const arreglo=["None", "Hello", "Example", "hello", "None", "Extra"]
const solicitud=[]
let sandwich= arreglo.forEach((posicion)=>posicion=='Hello'&&(solicitud.push(posicion))||posicion=='Example' &&(solicitud.push(posicion)) ||posicion=='hello'&&(solicitud.push(posicion)))

