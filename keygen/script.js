var iterator = 0;

function multiplicar() {
  var numero = document.getElementById("numeroInput").value;
  var resultado = document.getElementById("resultado");
  var imagen = document.getElementById("imagen");

  // Verificar si se ingresó un número válido
  if (isNaN(numero) || numero.length > 4) {
    resultado.textContent = "Por favor, ingrese un número válido de máximo 4 dígitos.";
    iterator++;
    // Si el último número ingresado también es inválido, mostrar la imagen
    if (iterator >= 2) {
      imagen.style.display = "block";
      resultado.textContent = "Te dije, un número de máximo 4 dígitos.";
    }
  } else {
    // Realizar la operación y redondear hacia abajo
    var resultadoOperacion = Math.floor(((numero * 13362) / 12) + 1991);
    resultado.textContent = "La Key generada es: " + resultadoOperacion;
    imagen.style.display = "none"; // Ocultar la imagen si se ingresa un número válido
    iterator = 0;
  }

  ultimoNumero = numero; // Guardar el último número ingresado
}

// Listener de evento para la tecla "Enter"
document.getElementById("numeroInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    multiplicar();
  }
});
