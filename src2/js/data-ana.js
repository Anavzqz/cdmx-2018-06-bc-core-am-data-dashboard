
window.computeStudentsStats = (laboratoria) => {
  console.log(laboratoria);
  let generations = {
    sede: null,
    generation: null,
    student: null,
    email: null,
    name: null,
    progress: null,
    turn: null,
  }
 let students =[];

  for (key in laboratoria){//Iteramos en la data con for in, para entrar a generaciones
    generations.sede = key; //Guardamos la ruta de las sedes con el nombre key
    console.log(key);//confirmamos que nos traiga el objeto de las sedes
    let gen = Object.keys(laboratoria[key].generacion);//Devuelve un array con las generaciones de cada sede
    console.log(gen);
    gen.forEach((gen) =>{//Iteramos en la generacion
      generations.generacion = gen;//Guardamos la ruta a las generaciones en gen
      console.log(gen);
      let students = laboratoria[key].generacion[gen].estudiantes;//Guardamos la ruta a las estudiantes en una variable
      console.log(students);
      students.forEach((student) => {//Entramos al arreglo de objetos de estudiantes y sacamos sus propiedades
        email = student.correo;
        console.log(email);
        name = student.nombre;
        console.log(name);
        progress = student.progreso;
        console.log(progress);
        turn = student.turno;
        console.log(turn);
        percentage = student.progreso.porcentajeCompletado;
        console.log(percentage);
        let topics = student.progreso.temas;
        console.log(topics);
      })

    })
  }
}


window.computeGenerationsStats = (laboratoria) => {
  console.log(laboratoria);
  //Declaramos una función que contenga los datos del objeto para ir marcando la ruta
      let generations = {
      //propiedades del objeto
      campus: null,//primero vamos a entrar a la sede
      generation: null,//después vamos a entrar a las generaciones de la sede seleccionada
      count: null,//Vamos a hacer el conteo de las estudiantes
      average: null//Sacamos el porcentaje completado por alumna
      }
      //Declaramos el arreglo de generaciones que va a retornar la funcion
       const arrayGenerations = [];
      //La sentencia for in itera en toda la data, por eso agregamos "laboratoria", para cada una de las propiedades se ejecuta una sentencia.
      for (key in laboratoria){
        //entramos a la propiedad campus de el objeto generations guardando la ruta en key que esta iterando en la data
         generations.campus = key;
         console.log(key);
         //El método Object.keys devuelve un array de strings de las propiedades de un objeto, en este caso devuelve las generaciones de cada sede
         let item = Object.keys(laboratoria[key].generacion);
         console.log(item);//Devuelve el array de generaciones de la sede
         //Los test piden el método forEach para average y count, forEach itera en cada elemento del array item que es una función callback
         item.forEach((item) => {
          generations.generation = item;
           console.log(item);//Nos da el string de generación
           //guardamos en una variable la ruta de estudiantes
           let students = laboratoria[key].generacion[item].estudiantes;
           console.log(students);//Nos da un array de objetos de las estudiantes de la generación
           //Guardamos en una variable la ruta de las estudiantes y contamos el total con la propiedad .length
           let count = laboratoria[key].generacion[item].estudiantes.length;
           generations.count = count;
           console.log(count);//Nos da el total de las estudiantes en number
           average = 0;
           //Vamos a entrar al porcentaje completado iterando con for in en estudiantes
          for (student in students){
           average += students[student].progreso.porcentajeCompletado;
           //console.log(average);//Nos da el porcentaje completado de todo el objeto estudiantes sumado
           //La función Math.round retorna el valor de un número redondeado al entero más cercano.
           generations.average = Math.round(average/generations.count);
           console.log(generations);//El objeto generations con sus propiedades
           arrayGenerations.push(generations);//Enviamos el array con las propiedades
         }
         })
      }

return arrayGenerations;
console.log(arrayGenerations);

};


/*window.sortStudents(laboratoria) () =>{

}

window.filterStudents(laboratoria) () =>{}
*/
