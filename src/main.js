// Todo lo que se muestre en pantalla va en este archivo
// lateral.style.display = 'none';
let primerCaja = document.querySelector('#inputs'); // Trayendo caja de inputs de HTML
let botonEntrar = document.getElementById('entrar'); // id boton entrar
const cleaning = document.getElementById('cleaning');
const exit = document.getElementById('exit');

// entrar.addEventListener('click', event => { // Evento del botón login
//   let usuario = document.getElementById('usuario').value; // Valor de usuario
//   let clave = parseInt(document.getElementById('clave').value); // Valor de clave
//   if (usuario === 'admin' && clave === 1234) { // Comparativo de simulación login
//     inputs.style.display = 'none'; // Se esconde sección para el siguiente paso
//     labor.style.display = 'none';
//     lateral.style.display = 'block';
//     root.style.display = 'block';
//   } else {
//     alert('¡Verifica los datos ingresados!'); // Alerta de falta de datos
//   };
// });


// "borrar este comentario jijiji"
cleaning.addEventListener('click', (event) =>
  root.innerHTML = '');

exit.addEventListener('click', event => {
  lateral.style.display = 'none';
  inputs.style.display = 'block';
  labor.style.display = 'block';
});


const url = 'https://api.myjson.com/bins/nslqe'; // Jalar URL
const pullData = () => {
  fetch(url).then(response => response.json())
    .then(laboratoria => { // Asignando nombre a la información
      drawCampus(laboratoria);
      const estudiantes = data.computeStudentsStats(laboratoria);
      const generaciones = data.computeGenerationsStats(laboratoria);
      const obtenerGeneracion = data.getGeneration(laboratoria);
      const obtenerCampus = data.getCampus(laboratoria);
    });
  // .catch(error => {
  //   console.log("Error");
  // })
};

pullData();

const drawCampus = (laboratoria) => { // Función para pintar en HTML
  let fillingCampus = document.getElementById('selector');
  let root = document.getElementById('root');
  let fillingC = '';

  for (key in laboratoria) {
    fillingC +=// Iterando en Data
    `<option>${key}</option>
    `;
    fillingCampus.innerHTML = fillingC;
  }
  let fillingGeneration = document.getElementById('selector-gen');
  let fillingG = '';
  let values = Object.keys(laboratoria[key].generacion);
  let ent = Object.values(values);
  for (let i = 0; i < ent.length; i++) {
    ent[i];

    fillingG += `
              <option>${ent[i]}</option>
            `;
    fillingGeneration.innerHTML = fillingG;

    fillingGeneration.addEventListener('change', countStudents => {
      const estudiantes = data.computeStudentsStats(laboratoria);
      const generaciones = data.computeGenerationsStats(laboratoria);
      const obtenerGeneracion = data.getGeneration(laboratoria);
      const obtenerCampus = data.getCampus(laboratoria);
      arr = data.computeGenerationsStats(laboratoria);
      let fill = document.getElementById('root');
      let root = '';
      let selectCampus = document.getElementById('selector').value;
      let selectGeneration = document.getElementById('selector-gen').value;
      for (let i = 0; i < generaciones.length; i++) {
        let campus = generaciones[i][i].campus;
        let generacion = generaciones[i][i].generation;
        let estudiantesTotales = generaciones[i][i].count;
        // console.log(generacion);
        console.log(generaciones[i][i].generation);
        if (selectGeneration === generacion && selectCampus === campus) {
          console.log('si sirvo we');
          root += `
                  <div class="estudiantes-box">
                  <h1>Estudiantes totales:</h1>
                  <p>${estudiantesTotales}</p>
                  <p>Promedio general: </p>
                  </div>
                    `;
          fill.innerHTML = root;
        } else {
          console.log('hello');
        }
      }
    });
  }
};
