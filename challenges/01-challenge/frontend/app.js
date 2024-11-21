document.getElementById('calculateButton').addEventListener('click', function () {
  const seconds = document.getElementById('secondsInput').value;

  // Validamos que los segundos sean un número válido
  if (isNaN(seconds) || seconds <= 0) {
    alert('Por favor, introduce un número válido de segundos.');
    return;
  }

  const resultElement = document.getElementById('result');
  const timeResultElement = document.getElementById('timeResult');

  // Elimina cualquier animación previa
  resultElement.classList.remove('visible');

  // Hacemos la petición al backend utilizando GET
  fetch(`http://localhost:3000/convert?seconds=${seconds}`)
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        // Actualizamos el texto del resultado
        timeResultElement.textContent = data.result;

        // Mostramos el resultado con animación
        resultElement.classList.add('visible');
      } else if (data.error) {
        timeResultElement.textContent = 'Error: ' + data.error;
        resultElement.classList.add('visible');
      }
    })
    .catch(() => {
      timeResultElement.textContent = 'Error al conectar con el backend.';
      resultElement.classList.add('visible');
    });
});
