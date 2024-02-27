const ficha = document.getElementById("ficha");


const validar = function () {
  let exp = "^[a-zA-Z]{5}$";
  let campo = ficha.value

  if (campo.match(exp) != null) {
  } else {
    alert("Ingrese 5 numeros")
  }
}
ficha.addEventListener("blur", validar);

const letras = function (e) {
  const key = e.keyCode || e.which;
  const tecla = String.fromCharCode(key).toLowerCase();

}


