<<<<<<< HEAD
window.onload = () => { // Carga la data al abirir la página
  const url = 'https://api.myjson.com/bins/nslqe'; // Jalar URL
  const pullData = () => {
    fetch(url).then(response => response.json())
      .then(laboratoria => { // Asignando nombre a la información
        drawCampus(laboratoria);
        const pullComputeGeneration = computeGenerationsStats(laboratoria); // Enviando data a Generation e invoco funcion
        console.log(pullComputeGeneration);
        const pullComputeStudent = computeStudentsStats(laboratoria); // Enviar data a Students e invoco funcion
        console.log(pullComputeStudent);
      })
      .catch(error => {
        console.log('Error');
      });
  };
  pullData();

  computeStudentsStats = (laboratoria) => { // Función lista de estudiantes
=======
window.data = { //Carga la data al abirir la página

  computeStudentsStats: (laboratoria) => { //Función lista de estudiantes

>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
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
<<<<<<< HEAD
    for (key in laboratoria) { // Recorriendo las propiedades del objeto
      campus = key.toUpperCase(); // Obteniendo sede y volviendola mayúsculas
      const generations = Object.keys(laboratoria[key].generacion); // Devolviendo las propiedades del objeto generacion
=======

    for (key in laboratoria) { //Recorriendo las propiedades del objeto

      campus = key.toUpperCase(); //Obteniendo sede y volviendola mayúsculas
      const generations = Object.keys(laboratoria[key].generacion); //Devolviendo las propiedades del objeto generacion

>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
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
<<<<<<< HEAD
            'name': name,
            'email': email,
            'campus': campus,
            'generation': generation.toUpperCase(), // Volviendo mayúsculas 
=======
            "name": name,
            "email": email,
            "campus": campus,
            "generation": generation.toUpperCase(), //Volviendo mayúsculas
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
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
<<<<<<< HEAD
          };
        });
        student.push(newArray); // Agregando elementos al array
      });
    }
    return student;
  };

  computeGenerationsStats = (laboratoria) => { // Función generación
=======
          }

        })
        student.push(newArray); //Agregando elementos al array
      })

    }
    return student;

  },

  computeGenerationsStats: (laboratoria) => { //Función generación
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
    const countGen = [];
    let otherArray = [];
    let campus = '';
    let generation = '';
    let average = 0;
<<<<<<< HEAD
    for (key in laboratoria) { // Recorriendo las propiedades del objeto
      campus = key; // Sede
=======

      for (key in laboratoria) { //Recorriendo las propiedades del objeto

      campus = key; //Sede
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
      average = 0;
      const generations = Object.keys(laboratoria[key].generacion);

      generations.map((generation) => {
        generation = generation;
        // console.log(generation);
        const pupils = laboratoria[key].generacion[generation].estudiantes;
        otherArray = pupils.map((pupil, i, array) => { // Map usa tres parámetros para recorrer el objeto por su indice y devolver un array
          average += array[i].progreso.porcentajeCompletado;
<<<<<<< HEAD
          average = Math.round(average / array.length); // Redondeando promedio
          return { // Creación del objeto
            'campus': key.toUpperCase(), // Volviendo mayúsculas 
            'generation': generation.toUpperCase(), // Volviendo mayúsculas 
            'average': average,
            'count': array.length
          };
        });
=======
          average = Math.round(average / array.length); //Redondeando promedio
          return { //Creación del objeto
            "campus": key.toUpperCase(), //Volviendo mayúsculas
            "generation": generation.toUpperCase(), //Volviendo mayúsculas
            "average": average,
            "count": array.length
          }

        })
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a
        countGen.push(otherArray);
      });
    }
    return countGen;
<<<<<<< HEAD
  };
=======
  },
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a

  sortStudens: (laboratoria) => {

<<<<<<< HEAD
  };
=======
  },
>>>>>>> d2748d13379d2d9340fbeb8eb7d09b874fe6bf1a

  filterStudents: (laboratoria) => {

  };
};
