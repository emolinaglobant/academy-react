class Mostrar{
    constructor(vAnterior,vActual){
        this.vActual=vActual
        this.Actual=''
        this.vAnterior=vAnterior
        this.Anterior=''
        this.calcular= new Calcular()
        this.TipoOperador=undefined  
        this.simbolos={
            sumar:'+',
            restar:'-',
            dividir:'÷',
            multiplicar:'x'
        }
    }
    borrarTodo(){
        this.Actual=""
        this.Anterior=""
        this.TipoOperador=undefined
        this.Imprimir()
    }
    borrar(){
        this.Actual=this.Actual.toString().slice(0,-1)
        this.Imprimir()
    }
    Operar(Tipo){
        this.TipoOperador!== 'igual' && this.Calculo()
        this.TipoOperador=Tipo
        this.Anterior=this.Actual|| this.Anterior
        this.Actual=''
        this.Imprimir()

    }
    AddNumero(numero){
        if(numero==='.'&& this.Actual.includes('.')) return
        this.Actual=this.Actual.toString()+numero.toString()
        this.Imprimir()
    }
    Imprimir(){
        this.vActual.textContent=this.Actual
        this.vAnterior.textContent=`${this.Anterior} ${this.simbolos[this.TipoOperador]||''}`
    }
    Calculo(){
        const Actual=parseFloat(this.Actual)
        const Anterior=parseFloat(this.Anterior)

        if(isNaN(Actual)||isNaN(Anterior))return
        this.Actual=this.calcular[this.TipoOperador](Anterior,Actual)
    }
}
class Calcular{
    sumar(n1,n2){
        return n1+n2
    }
    restar(n1,n2){
        return n1-n2
    }
    dividir(n1,n2){
        return n1/n2
    }
    multiplicar(n1,n2){
        return n1*n2
    }
}
const vAnterior=document.getElementById('anterior')
const vActual=document.getElementById('actual')
const Numeros_Button=document.querySelectorAll('.numeros-boton')
const Opreacion=document.querySelectorAll('.operacion')
const mostrar=new Mostrar(vAnterior,vActual);
Numeros_Button.forEach(boton=>{
    boton.addEventListener('click',()=>mostrar.AddNumero(boton.innerHTML))
})
Opreacion.forEach(boton=>{
    boton.addEventListener('click',()=>mostrar.Operar(boton.value))
})
