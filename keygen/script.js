function multiplicar() {
  var numero = document.getElementById("numeroInput").value;
  var resultado = document.getElementById("resultado");

  // Verificar si se ingresó un número válido
  if (isNaN(numero) || numero.length > 4) {
    resultado.textContent = "Por favor, ingrese un número válido de máximo 4 dígitos.";
  } else {
    // Realizar la operación y redondear hacia abajo
    var resultadoOperacion = Math.floor(((numero * 13362) / 12) + 1991);
    resultado.textContent = "El resultado de la operación es: " + resultadoOperacion;
  }
}

// Listener de evento para la tecla "Enter"
document.getElementById("numeroInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    multiplicar();
  }
});
