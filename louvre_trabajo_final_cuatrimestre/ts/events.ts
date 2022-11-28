
function cambiarValorBoton(span:HTMLElement) {
	if(span.innerHTML === `Ver menos`){
		span.innerText = `Ver más`;
	} else {
		span.innerText = `Ver menos`;
	}
}
