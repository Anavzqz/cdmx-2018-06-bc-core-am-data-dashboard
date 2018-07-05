// Todo lo que se muestre en pantalla va en este archivo
let primerCaja = document.querySelector("#inputs"); //Trayendo caja de inputs de HTML
let botonEntrar = document.getElementById("entrar"); //id boton entrar
const selector = document.getElementById("new-selector"); 

entrar.addEventListener("click", event => { //Evento del botón login
  let usuario = document.getElementById("usuario").value; //Valor de usuario
  let clave = parseInt(document.getElementById("clave").value); //Valor de clave
  if (usuario === "admin" && clave === 1234) { //Comparativo de simulación login
    inputs.style.display = "none"; //Se esconde sección para el siguiente paso

  } else {
    alert("¡Verifica los datos ingresados!") //Alerta de falta de datos
  };
})

const drawCampus = (laboratoria)=>{
  for(key in laboratoria){
    let opcion = document.createElement("option");
    opcion.innerHTML= key;
    selector.appendChild(opcion)
    selector.addEventListener("change", drawGeneration)
  }
}

const drawGeneration = (e) => {
  console.log(selector[e.target.selectedIndex].innerHTML);
  
}