window.data = { // Carga la data al abirir la página

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
          // for(topics in laboratoria)


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
    let otherArray = [];
    let campus = '';
    let generation = '';
    let average = 0;


    for (key in laboratoria) { // Recorriendo las propiedades del objeto
      campus = key; // Sede
      average = 0;
      const generations = Object.keys(laboratoria[key].generacion);

      generations.map((generation) => {
        generation = generation;
        // console.log(generation);
        const pupils = laboratoria[key].generacion[generation].estudiantes;
        otherArray = pupils.map((pupil, i, array) => { // Map usa tres parámetros para recorrer el objeto por su indice y devolver un array
          average += array[i].progreso.porcentajeCompletado;

          average = Math.round(average / array.length); // Redondeando promedio
          return { // Creación del objeto
            'campus': key, // Volviendo mayúsculas
            'generation': generation, // Volviendo mayúsculas

            'average': average,
            'count': array.length
          };
        });

        countGen.push(otherArray);
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
  }
};
