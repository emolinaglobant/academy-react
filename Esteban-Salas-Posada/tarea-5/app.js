let parrafos = document.getElementsByTagName("p")
let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'-']



let desordenarArreglo = function(){
    list.sort(function(){
        return Math.random() - 0.5
    })
}

let asignarValores = function(){
    list.forEach((value, index)=>{
        console.log("index",value)
        // con este codigo le cambiamos los valoes que tienen en orden los <p>
        parrafos[index].textContent = value
        parrafos[index].setAttribute('id', value)
        
    })
}

let asignarClasesCSS = function(){
    for(parrafo of parrafos){
        console.log(parrafo)
        if(parrafo.textContent % 2 === 0){
            parrafo.className = 'even'
        }else if(parrafo.textContent % 2 === 1){
            parrafo.className = 'odd'
        }
    }
}

desordenarArreglo()
asignarValores()
asignarClasesCSS()

console.log(list)

let cajaNegra = document.getElementById('-').addEventListener('click', function(){
    console.log('clickkk')
})
