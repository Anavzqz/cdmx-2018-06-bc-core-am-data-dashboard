const url = 'https://api.myjson.com/bins/nslqe'; // Jalar URL
window.onload = ()=> { // Ejecuta la funcion cuando se carga la pagina
  fetch(url).then(response => response.json())
    .then(laboratoria => { // Asignando nombre a la información
      drawCampus(laboratoria);
      const estudiantes = data.computeStudentsStats(laboratoria);
      const generaciones = data.computeGenerationsStats(laboratoria);
      const obtenerGeneracion = data.getGeneration(laboratoria);
      const obtenerCampus = data.getCampus(laboratoria);
    })
    .catch(error => {
      console.log('Error');
    });
};

window.data = { // Carga la data al abirir la página
  // Aqui intentamos trabajar en las funciones pero no pudimos ligar.

  computeStudentsStats: (laboratoria) => { // Función lista de estudiantes
    const student = [];
    let newArray = []; // Variables con nombres acorde al readme
    let name = '';
    let email = '';
    let campus = '';
    let generation = '';
    let stats = [];
    let status = 0;
    let completedPercentage = 0;
    let percentageDuration = 0;
    let topics = [];
    let completedPercentage1 = 0;
    let percentageDuration1 = 0;
    let subtopics = [];
    let completedPercentage3 = 0;
    let type = '';
    let duration = 0;

    for (key in laboratoria) { // Recorriendo las propiedades del objeto
      campus = key; // Obteniendo sede y volviendola mayúsculas
      const generations = Object.keys(laboratoria[key].generacion); // Devolviendo las propiedades del objeto generacion

      generations.map((generation) => {
        generation = generation;
        const students = laboratoria[key].generacion[generation].estudiantes; // Devolviendo las propiedades del objeto estudiante
        newArray = students.map((student, i, array) => { // Invocando indices para nuevo array
          name = array[i].nombre;
          email = array[i].correo;
          completedPercentage = array[i].progreso.porcentajeCompletado;
          if (completedPercentage < 60) {
            let lessSixty = (stats[status] = completedPercentage);
            status = lessSixty;
          } else if (completedPercentage >= 90) {
            let moreNinety = (stats[status] = completedPercentage);
            status = moreNinety;
          } else {
            let otherNumber = (stats[status] = completedPercentage);
            status = otherNumber;
          }
          percentageDuration = array[i].progreso.duracionPrograma;
          topics = array[i].progreso.temas;

          return {

            'name': name,
            'email': email,
            'campus': campus,
            'generation': generation, // Volviendo mayúsculas
            stats: {
              'status': status,
              'completedPercentage': completedPercentage,
              'percentageDuration': percentageDuration,
              topics: {
                'completePercentage': completedPercentage1,
                'percentageDuration': percentageDuration1,
                subtopics: {
                  'completePercentage': completedPercentage3,
                  'type': type,
                  'duration': duration

                }
              }
            }

          };
        });
        student.push(newArray); // Agregando elementos al array
      });
    }
    return student;
  },


  computeGenerationsStats: (laboratoria) => { // Función generación
    const countGen = [];
    // let otherArray = [];
    let campus = '';
    let generationOne = '';
    let average = 0;
    let newTotal ;
    let countStudent ;

    for (key in laboratoria) { // Recorriendo las propiedades del objeto
      campus = key; // Sede
      average = 0;
      const generations = Object.keys(laboratoria[key].generacion);
      generations.forEach((generation) => {
        generationOne = generation;
        // console.log(generation);
        const students = laboratoria[key].generacion[generation].estudiantes;
        average = 0;
        for (studen in students) {
          average += students[studen].progreso.porcentajeCompletado;
          newTotal = Math.round(average / students.length);
          countStudent = students.length;
        }
        countGen.push({'campus': campus,
          'generation': generationOne,
          'average': newTotal,
          'count': countStudent});
      });
    }


    return countGen;
  },

  getGeneration: (laboratoria) => {
    for (key in laboratoria) {
      const generatioN = Object.keys(laboratoria[key].generacion);
      return generatioN;
    }
  },
  getCampus: (laboratoria) => {
    let sedes = Object.getOwnPropertyNames(laboratoria);
    return sedes;
  },
  promedio: (laboratoria) => {

  }
};
