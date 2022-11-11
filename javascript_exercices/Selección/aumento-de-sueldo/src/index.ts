/*
Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:
Sueldo Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento
Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre
*/

let sueldoIngresado = document.getElementById("sueldoIngresado") as HTMLElement;
let btn = document.getElementById("btnCalc") as HTMLElement;
let sueldoFinal = document.getElementById("sueldoFinal") as HTMLElement;
let sueldo: number;
let aumento: number;

btn.addEventListener("click", (even) => {
	even.preventDefault();
	sueldo = Number(sueldoIngresado.value);
	console.log(sueldo);
	if (sueldo === 0) {
		console.log("Ingrese un valor mayor a 0");
		sueldoFinal.innerHTML = "Ingrese un valor mayor a 0";
	} else if (sueldo <= 15000) {
		aumento = (sueldo * 20) / 100;
		console.log(
			"Usted tiene un aumento del 20%, su sueldo final es: " +
				(sueldo + aumento)
		);
		sueldoFinal.innerHTML =
			"Usted tiene un aumento del 20%, su sueldo final es: $" +
			(sueldo + aumento);
	} else if (sueldo <= 20000) {
		aumento = (sueldo * 10) / 100;
		console.log(
			"Usted tiene un aumento del 10%, su sueldo final es: " +
				(sueldo + aumento)
		);
		sueldoFinal.innerHTML =
			"Usted tiene un aumento del 10%, su sueldo final es: $" +
			(sueldo + aumento);
	} else if (sueldo <= 25000) {
		aumento = (sueldo * 5) / 100;
		console.log(
			"Usted tiene un aumento del 5%, su sueldo final es: " + (sueldo + aumento)
		);
		sueldoFinal.innerHTML =
			"Usted tiene un aumento del 5%, su sueldo final es: $" +
			(sueldo + aumento);
	} else {
		console.log("Usted no tiene aumento, su sueldo final es: " + sueldo);
		sueldoFinal.innerHTML =
			"Usted no tiene aumento, su sueldo final es: $" + sueldo;
	}
});
