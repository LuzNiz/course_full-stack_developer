
const form = document.getElementById("formulario") as HTMLFormElement;
console.log(form)
form.addEventListener("submit", (e) => handleSubmit(e));
function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();
  const data = new FormData(form);
  data.forEach(value => console.log(value));
  console.log(data.get("nombre"));
  let email = data.get("email");
  let apellido = data.get("apellido");
  let nombre = data.get("nombre");
  let direccion = data.get("direccion");
  let fecha = data.get("fecha");
  let cantidad = data.get("cantidad");

  if(email ==="" || nombre ==="" || apellido ===""|| direccion ===""|| fecha ==="" || cantidad ===""){
    console.log("Por favor rellene los campos")
  }else {
    console.log("Su reserva ha sido efectuada con exito")
  }

  form.reset();
}

