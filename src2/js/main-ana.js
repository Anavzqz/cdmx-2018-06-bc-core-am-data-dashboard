window.onload = () => {
  fetch('https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json')
    .then(response => response.json())
    .then((laboratoria) => {
      getData(laboratoria);

    })
    //.catch(error => {
      //console.log("error");
    //})
};

const getData = (laboratoria) => {//Función para pintar en selectores
  let drawCampus = document.getElementById('selector');//Traemos el id del selector de campus
  let drawBox = "";//Donde se va a guardar la data
  for (key in laboratoria) {//Iteramos en la data 
    //Entramos a las generaciones y las pintamos con template string en el select
   drawBox = `
    <option>${key}</option> 
   `;
   drawCampus.innerHTML += drawBox;//Traemos el selector y le agregamos la data que guardamos en drawBox
   console.log(drawBox);
  }
  let drawGen = document.getElementById('selector-gen');//Traemos el id del selector de generaciones
  let drawBox2 = "";//Variable donde se guarda la data de las generaciones
  
  let values = Object.keys(laboratoria[key].generacion);
  console.log(values);
  let ent = Object.values(values);
  for (let i = 0; i < ent.length; i++) {

    drawBox2 = `
              <option>${ent[i]}</option>
            `;
    drawGen.innerHTML += drawBox2;
    console.log(drawBox2)
}


const computeGenerations = window.computeGenerationsStats(laboratoria);//Traemos la función de computeGenerationsStats porque contiene la data
console.log(computeGenerations);

let boxGen; 

computeGenerations.forEach(generations => {
  boxGen += card(generations.campus, generations.generation, generations.count, generations.average);

})

const card = (campus, generation, count, average)=>{
  let root1 = "";
  if (drawBox === generacion && drawBox2 === campus) {

    root1 += `<div>
             <h4>${campus}</h4>
             <p>${generation}</p>
             <p>${count}</p>
             <p>${average}</p>
</div>`;
  document.getElementById("root").innerHTML = root1;
  }
}
}
