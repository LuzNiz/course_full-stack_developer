let btn = document.getElementById("btn");
let img = document.getElementById("img");
let result = document.getElementById("result");
let cantClicks = document.getElementById("cantClicks");
let textMensaje = document.getElementById("textMensaje");
let pruebaBack = document.getElementById("pruebaBack");

let click = 0;
result.innerText = click
let divPrueba = document.getElementById("divPrueba");
divPrueba.className = "pruebaOculto";
pruebaBack.className = "backgroundOculto";

function contadorClick() {
   click = click + 1;
   result.innerText = click;
        if (click === 50){
            pruebaBack.className = "backgroundVisible";
            divPrueba.className= "pruebaVisible";
            textMensaje.innerText = "Está a mitad de camino";
            cantClicks.innerText = `Llegó a los ${click} clicks`;
        }if (click === 100){
            pruebaBack.className = "backgroundVisible";
            divPrueba.className= "pruebaVisible";
            textMensaje.innerText = `Felicitaciones!`
            cantClicks.innerText = `Llegó a los ${click} cliks`;
        } 
        
}

img.addEventListener("click", contadorClick)
btn.addEventListener("click", ()=>{
    click = 0;
    result.innerText = click;
    divPrueba.className= "pruebaOculto"
})

function cerrarDialogo(){
    divPrueba.className= "pruebaOculto";
    pruebaBack.className = "backgroundOculto";
}