// Todo lo que se muestre en pantalla va en este archivo
let primerCaja = document.querySelector("#inputs"); //Trayendo caja de inputs de HTML
let botonEntrar = document.getElementById("entrar"); //id boton entrar


entrar.addEventListener("click", event => { //Evento del botón login
  let usuario = document.getElementById("usuario").value; //Valor de usuario
  let clave = parseInt(document.getElementById("clave").value); //Valor de clave
  if (usuario === "admin" && clave === 1234) { //Comparativo de simulación login
    inputs.style.display = "none"; //Se esconde sección para el siguiente paso

  } else {
    alert("¡Verifica los datos ingresados!") //Alerta de falta de datos
  };
})




const drawCampus = (laboratoria) => { //Función para pintar en HTML
  let campoRellenar = document.getElementById("selector");
  let relleno = "";
  for (key in laboratoria) { //Iterando en Data
    relleno += `
              <option>Sedes</option>
              <optgroup label="${key.toUpperCase()}">
              <option>Tercera</option>
              <option>Cuarta</option>
              <option>Quinta</option>
            </optgroup>`

    campoRellenar.innerHTML = relleno
    campoRellenar.addEventListener("change", drawGeneration)
  }
}

const drawGeneration = (e) => {
  console.log(selector[e.target.selectedIndex].innerHTML);
}
