// //Funciones y data en este archivo
const url = 'https://alppacat.github.io/data-dashboard/data/laboratoria.json'; //Jalar URL
const getData = () => {
    fetch(url).then (response => response.json()) 
    .then(laboratoria =>{ //Asignando nombre a la información
        sedesFuc(laboratoria); //Enviar data a la siguiente función
    })  
}
getData();

const sedesFuc = (laboratoria) =>{ //Función sedes
    const sedes = Object.keys(laboratoria);
    console.log(sedes);
    const campus = document.getElementById("sedes"); //Llamando selector de sedes
    sedes.forEach((sede)=>{
        const option = document.createElement("option"); //Creando opciones de selector sedes
        option.innerHTML = sede; //Pintando en selector
        campus.appendChild(option); //Indicando de quien es hijo
    });
    campus.addEventListener("change",window.computeGenerationsStats(laboratoria)) //Desatando el evento
}

window.computeGenerationsStats = (laboratoria) =>{ //Función generación
    const countGen = [];
    const obj ={ //Creación del objeto 
        campus : "",
        generation : "",
        average : 0,
        count : 0,
    };
    let average = 0;
    for(key in laboratoria){
    obj.campus = key;
    average = 0;
    const generations = Object.key(laboratoria[key].generacion);
    generations.forEach((generation) =>{
       obj.generation = generation;
       const pupils = laboratoria[key].generacion[generation].estudiantes;
       for(pupil in pupils){
           average += pupils[pupil].progreso.porcentajeCompletado;
           average = average/ pupils.length;
           obj.average = average;
           obj.count = pupils.length;
           countGen.push(obj);
       }
    })
    }
    return countGen;
}
