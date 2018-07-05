window.onload = () => { //Carga la data al abirir la página
  const url = 'https://api.myjson.com/bins/nslqe'; //Jalar URL
  const pullData = () => {
    fetch(url).then(response => response.json())
      .then(laboratoria => { //Asignando nombre a la información
        drawCampus(laboratoria);
        const pullComputeGeneration = computeGenerationsStats(laboratoria); //Enviando data a Generation e invoco funcion
        console.log(pullComputeGeneration);
        const pullComputeStudent = computeStudentsStats(laboratoria); //Enviar data a Students e invoco funcion
        console.log(pullComputeStudent);

      })
      .catch(error => {
        console.log("Error");
      })
  }
  pullData();

  computeStudentsStats = (laboratoria) => { //Función lista de estudiantes
    const student = [];
    let newArray = [];
    let name = "";
    let email = "";
    let campus = "";
    let stats = [];
    let completedPercentage = 0;
    let percentageDuration = 0;
    let topics = [];
    let completedPercentage1 = 0;
    let percentageDuration1 = 0;
    let subtopics = [];
    let completedPercentage3 = 0;
    let type = "";
    let duration = 0;
    for (key in laboratoria) { //Recorriendo las propiedades del objeto
      campus = key.toUpperCase(); //Obteniendo sede y volviendola mayúsculas
      const generations = Object.keys(laboratoria[key].generacion); //Devolviendo las propiedades del objeto generacion
      generations.map((generation) => {
        generation = generation;
        const students = laboratoria[key].generacion[generation].estudiantes; //Devolviendo las propiedades del objeto estudiante
        newArray = students.map((student, i, array) => { //Invocando indices para nuevo array
          name = array[i].nombre;
          email = array[i].correo;
          completedPercentage = array[i].progreso.porcentajeCompletado;
          percentageDuration = array[i].progreso.duracionPrograma;

          return {
            "name": name,
            "email": email,
            "campus": campus,
            "generation": generation.toUpperCase(), //Volviendo mayúsculas 
            stats: {
              "status": status,
              "completedPercentage": completedPercentage,
              "percentageDuration": percentageDuration,
              topics: {
                "completePercentage": completedPercentage1,
                "percentageDuration": percentageDuration1,
                subtopics: {
                  "completePercentage": completedPercentage3,
                  "type": type,
                  "duration": duration

                }
              }
            }
          }
        })
        student.push(newArray); //Agregando elementos al array
      })
    }
    return student;
  }

  computeGenerationsStats = (laboratoria) => { //Función generación
    const countGen = [];
    let otherArray = [];
    let campus = "";
    let generation = "";
    let average = 0;
    for (key in laboratoria) { //Recorriendo las propiedades del objeto
      campus = key; //Sede
      average = 0;
      const generations = Object.keys(laboratoria[key].generacion);
      generations.map((generation) => {
        generation = generation;
        const pupils = laboratoria[key].generacion[generation].estudiantes;
        otherArray = pupils.map((pupil, i, array) => { //Map usa tres parámetros para recorrer el objeto por su indice y devolver un array
          average += array[i].progreso.porcentajeCompletado;
          average = Math.round(average / array.length); //Redondeando promedio
          return { //Creación del objeto
            "campus": key.toUpperCase(), //Volviendo mayúsculas 
            "generation": generation.toUpperCase(), //Volviendo mayúsculas 
            "average": average,
            "count": array.length
          }
        })
        countGen.push(otherArray);
      })
    }
    return countGen;
  }

  sortStudens = (laboratoria) => {

  }

  filterStudents = (laboratoria) => {

  }
}
 