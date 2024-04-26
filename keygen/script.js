function multiplicar() {
  var numero = document.getElementById("numeroInput").value;
  var resultado = document.getElementById("resultado");

  // Verificar si se ingresó un número válido
  if (isNaN(numero) || numero.length > 4) {
    resultado.textContent = "Debe ingresar un valor que no supere los 4 dígitos.";
  } else {
    // Realizar la operación y redondear hacia abajo
    var resultadoOperacion = Math.floor(((numero * 13362) / 12) + 1991);
    resultado.textContent = "La key resultante es: " + resultadoOperacion;
  }
}

// Listener de evento para la tecla "Enter"
document.getElementById("numeroInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    multiplicar();
  }
});
