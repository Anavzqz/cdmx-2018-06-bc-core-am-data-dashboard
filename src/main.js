// Todo lo que se muestre en pantalla va en este archivo
let primerCaja = document.querySelector('#inputs'); // Trayendo caja de inputs de HTML
let botonEntrar = document.getElementById('entrar'); // id boton entrar


entrar.addEventListener('click', event => { // Evento del botón login
  let usuario = document.getElementById('usuario').value; // Valor de usuario
  let clave = parseInt(document.getElementById('clave').value); // Valor de clave
  if (usuario === 'admin' && clave === 1234) { // Comparativo de simulación login
    inputs.style.display = 'none'; // Se esconde sección para el siguiente paso
  } else {
    alert('¡Verifica los datos ingresados!'); // Alerta de falta de datos
  };
});


const drawCampus = (laboratoria) => { // Función para pintar en HTML
  let campoRellenar = document.getElementById('selector');
  let relleno = '';
  for (key in laboratoria) { // Iterando en Data
    relleno += `<option selected = "selected">Elegir</option> <!--Se ve culero hay que cambiarlo-->
              <optgroup label="${key.toUpperCase()}">
              <option>Quinta</option>
              <option>Cuarta</option>
              <option>Tercera</option>
            </optgroup>`;

    campoRellenar.innerHTML = relleno;
    campoRellenar.addEventListener('change', drawGeneration);
  }
};

const drawGeneration = (event) => {
  console.log(selector[event.target.selectedIndex].innerHTML);
};
