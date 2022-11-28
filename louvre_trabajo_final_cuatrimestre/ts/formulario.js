var form = document.getElementById("formulario");
console.log(form);
form.addEventListener("submit", function (e) { return handleSubmit(e); });
function handleSubmit(e) {
    e.preventDefault();
    var data = new FormData(form);
    data.forEach(function (value) { return console.log(value); });
    console.log(data.get("nombre"));
    var email = data.get("email");
    var apellido = data.get("apellido");
    var nombre = data.get("nombre");
    var direccion = data.get("direccion");
    var fecha = data.get("fecha");
    var cantidad = data.get("cantidad");
    if (email === "" || nombre === "" || apellido === "" || direccion === "" || fecha === "" || cantidad === "") {
        console.log("Por favor rellene los campos");
    }
    else {
        console.log("Su reserva ha sido efectuada con exito");
    }
    form.reset();
}
