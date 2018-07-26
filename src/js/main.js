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


cleaning.addEventListener('click', event => {
  root.innerHTML = '';
  root2.innerHTML = '';
});

exit.addEventListener('click', event => {
  lateral.style.display = 'none';
  inputs.style.display = 'block';
  labor.style.display = 'block';
});


// const url = 'https://api.myjson.com/bins/nslqe'; // Jalar URL
// const pullData = () => {
//   fetch(url).then(response => response.json())
//     .then(laboratoria => { // Asignando nombre a la información
//       drawCampus(laboratoria);
//       const estudiantes = data.computeStudentsStats(laboratoria);
//       const generaciones = data.computeGenerationsStats(laboratoria);
//       const obtenerGeneracion = data.getGeneration(laboratoria);
//       const obtenerCampus = data.getCampus(laboratoria);
//     })
//     .catch(error => {
//       console.log('Error');
//     });
// };

// pullData();

const drawCampus = (laboratoria) => { // Función para pintar en HTML
  let fillingCampus = document.getElementById('selector');
  // let root = document.getElementById('root');
  let fillingC = '';

  for (key in laboratoria) {
    fillingC = // Iterando en Data
      `<option>${key}</option>
    `;
    fillingCampus.innerHTML += fillingC;
  }
  let fillingGeneration = document.getElementById('selector-gen');
  let fillingG = '';
  let values = Object.keys(laboratoria[key].generacion);
  let ent = Object.values(values);
  for (let i = 0; i < ent.length; i++) {
    // ent[i];

    fillingG = `
              <option>${ent[i]}</option>
            `;
    fillingGeneration.innerHTML += fillingG;
  }
  fillingGeneration.addEventListener('change', (event) => {
    const estudiantes = data.computeStudentsStats(laboratoria);
    const generaciones = data.computeGenerationsStats(laboratoria);
    // console.log(generaciones);
    // const obtenerGeneracion = data.getGeneration(laboratoria);
    // const obtenerCampus = data.getCampus(laboratoria);
    // arr = data.computeGenerationsStats(laboratoria);
    let fill = document.getElementById('root');
    let fill2 = document.getElementById('root2')
    let root1 = '';
    let root2 = '';
    let selectCampus = document.getElementById('selector').value;
    // console.log(selectCampus);

    let selectGeneration = document.getElementById('selector-gen').value;
    // console.log(generaciones.length);

    for (let i = 0; i < generaciones.length; i++) {
      let campus = generaciones[i].campus;
      let generacion = generaciones[i].generation;
      let estudiantesTotales = generaciones[i].count;
      let newAverage = generaciones[i].average;
      // console.log(generacion);
      // console.log(generaciones[i].generation);
      if (selectGeneration.toLowerCase() === generacion && selectCampus.toLowerCase() === campus) {
        // console.log('si sirvo we');
        root1 += `
                  <div class="estudiantes-box">
                  <h1>${selectCampus[0].toUpperCase() + selectCampus.substring(1)} ${selectGeneration} generación</h1>
                  <h2>Estudiantes totales:</h2>
                  <p class = "numeros">${estudiantesTotales}</p>
                  <h3>Promedio de avance general: </h3>
                  <p class = "numeros">${newAverage}%</p>
                  </div>
                    `;
        fill.innerHTML = root1;
      }
    }
    for (let i = 0; i < estudiantes.length; i++) {
      estudiantes2 = estudiantes[i];
      for (let j = 0; j < estudiantes2.length; j++) {
        estudiantes2[j]
      console.log(estudiantes2[j]);
      let generacion = estudiantes2[j].generation;
      let campus = estudiantes2[j].campus;
      let name = estudiantes2[j].name;
      let email = estudiantes2[j].email;


      if (selectGeneration === generacion && selectCampus === campus) {
        root2 += `
        <div class="lista">
        <img id="avi" src="../src/img/avatar.png" alt="">
        <p> Nombre: ${name} <br> Correo electrónico: ${email}</p>
        </div>
        `
        console.log('sisepudowe');
        fill2.innerHTML = root2

        }
      }
    }
  });
  // }
};
