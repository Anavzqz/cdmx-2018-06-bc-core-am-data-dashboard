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
<<<<<<< HEAD
});
=======
})

const url = 'https://api.myjson.com/bins/nslqe'; //Jalar URL
const pullData = () => {
  fetch(url).then(response => response.json())
    .then(laboratoria => { //Asignando nombre a la información
      drawCampus(laboratoria);
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a

      console.log(data.computeGenerationsStats(laboratoria));
// drawGeneration(laboratoria)
//       // console.log(totalStudents);
//       countStudents(laboratoria)
      arr = data.computeGenerationsStats(laboratoria);
      for (let i = 0; i < arr.length; i++) {
        totalStudents = arr[i][0].count;
        // console.log(totalStudents);
        if (document.getElementById("selector").value == arr[i][0]) {
          console.log("si sirve");
        }
      }
    })
    // .catch(error => {
    //   console.log("Error");
    // })

<<<<<<< HEAD
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
=======
}
pullData();

const drawCampus = (laboratoria) => { //Función para pintar en HTML
  let campoRellenar = document.getElementById("selector");
  let relleno = "";

  for (key in laboratoria) {
    relleno +=//Iterando en Data
    `<optgroup label="${key.charAt(0).toUpperCase() + key.slice(1)}">
    </optgroup>
    `
  let values = Object.keys(laboratoria[key].generacion)
  // console.log(laboratoria[key].generacion);
  let ent = Object.values(values);
  // console.log(ent);

  for (let i = 0; i < ent.length; i++) {
    ent[i]

    relleno += `
              <option>${ent[i]}</option>
            `

    campoRellenar.innerHTML = relleno

    }
  }
  campoRellenar.addEventListener("change", countStudents => {
    arr = data.computeGenerationsStats(laboratoria);
    let campoRellenar = document.getElementById("root");
    let relleno = "";
    // for (let i = 0; i < arr.length; i++) {
    //   totalStudents = arr[i][0].count;
      // console.log(arr);7
      if (selector.options[1].selected  == true) {
        console.log(arr[1][1].count);

        relleno += `
              <p>Promedio general: </p>
              <p>Estudiantes totales: ${arr[1][1].count} </p>
              `

        campoRellenar.innerHTML = relleno;
    }else if (selector.options[1].selected == false) {
      console.log(arr[0][0].count);

      relleno += `
            <p>Promedio general: </p>
            <p>Estudiantes totales: ${arr[0][0].count} </p>

      `
        campoRellenar.innerHTML = relleno;
    }
  })
}

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
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
