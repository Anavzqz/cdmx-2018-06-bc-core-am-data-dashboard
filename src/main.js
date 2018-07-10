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


      // console.log(data.computeGenerationsStats(laboratoria));
      // drawGeneration(laboratoria)
      //       // console.log(totalStudents);
      //       countStudents(laboratoria)
      // arr = data.computeGenerationsStats(laboratoria);
      // for (let i = 0; i < arr.length; i++) {
      //   totalStudents = arr[i][0].count;
      //   // console.log(totalStudents);
      //   if (document.getElementById('selector').value === arr[i][0]) {
      //     console.log('si sirve');
      //   }
      // }
    });
  // .catch(error => {
  //   console.log("Error");
  // })
};

pullData();

const drawCampus = (laboratoria) => { // Función para pintar en HTML
  let campoRellenar = document.getElementById('selector');
  let relleno = '';

  for (key in laboratoria) {
    relleno +=// Iterando en Data
    `<optgroup label="${key.charAt(0).toUpperCase() + key.slice(1)}">
    </optgroup>
    `;
    let values = Object.keys(laboratoria[key].generacion);
    // console.log(laboratoria[key].generacion);
    let ent = Object.values(values);
    // console.log(ent);

    for (let i = 0; i < ent.length; i++) {
      ent[i];

      relleno += `
              <option>${ent[i]}</option>
            `;

      campoRellenar.innerHTML = relleno;
    }
  }
  campoRellenar.addEventListener('change', countStudents => {
    const estudiantes = data.computeStudentsStats(laboratoria);
    const generaciones = data.computeGenerationsStats(laboratoria);
    const obtenerGeneracion = data.getGeneration(laboratoria);
    const obtenerCampus = data.getCampus(laboratoria);
    arr = data.computeGenerationsStats(laboratoria);
    let root = document.getElementById('root');
    let relleno = '';
    let valuess = document.getElementById('selector').value;
    console.log(valuess);
    for (let i = 0; i < generaciones.length; i++) {
      let campus = generaciones[i][i].campus;
      let generacion = generaciones[i][i].generation;
      let estudiantesTotales = generaciones[i][i].count;
      // console.log(generacion);
      // console.log(campus);
      console.log(estudiantesTotales);
      if (valuess === generacion) {
        relleno += `
                  <div class="estudiantes-box">
                  <h1>Estudiantes totales:</h1>
                  <p>${estudiantesTotales}</p>
                  <p>Promedio general: </p>
                  </div>
                    `;
        root.innerHTML = relleno;
      }
    }
    // relleno += `
    // //           <p>${data.computeGenerationsStats(laboratoria)[i]} </p>
    // //           `;

    // for (let i = 0; i < arr.length; i++) {
    //   totalStudents = arr[i][0].count;
    // console.log(arr);7
    // if (selector.options[1].selected === true) {
    //   console.log(arr[1][1].count);
    //
    //   relleno += `
    //           <p>Promedio general: </p>
    //           <p>Estudiantes totales: ${arr[1][1].count} </p>
    //           `;
    //
    //   campoRellenar.innerHTML = relleno;
    // } else if (selector.options[1].selected === false) {
    //   console.log(arr[0][0].count);
    //
    //   relleno += `
    //         <p>Promedio general: </p>
    //         <p>Estudiantes totales: ${arr[0][0].count} </p>
    //
    //   `;
    //   campoRellenar.innerHTML = relleno;
    // }
  });
};

// const drawGeneration = (e) => {
//
//   console.log(selector[e.target.selectedIndex].innerHTML);
//   }


// let seleccionIndex = document.getElementById("selector").selectedIndex;
// for (key in laboratoria) {
//   let values = Object.keys(laboratoria[key].generacion)
//
// const root = document.getElementById("root");
// let totalArr = data.computeGenerationsStats(laboratoria);
// for (let i = 0; i < totalArr.length; i++) {
//   estudiantesTotales = totalArr[i].length;
//   console.log(estudiantesTotales);
//   if ( seleccionIndex == key) {
//
//     estudiantesTotales += `
//             <p>${estudiantesTotales} </p>
//     `
//     root.innerHTML = estudiantesTotales
//   }
//   }
// }


// console.log(selector[e.target.selectedIndex].innerHTML);
