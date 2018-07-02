//Todo lo que se muestre en pantalla va en este archivo
let primerCaja = document.querySelector("#inputs"); //Trayendo caja de inputs de HTML
let botonEntrar = document.getElementById("entrar"); //id boton entrar

selectores.style.display = "none";
barra.style.display = "none";


entrar.addEventListener("click", event =>{ //Evento del botón login
    let usuario = document.getElementById("usuario").value; //Valor de usuario
    let clave = parseInt(document.getElementById("clave").value); //Valor de clave
    if(usuario === "admin" && clave === 1234){ //Comparativo de simulación login
        Login.style.display = "none"; //Se esconde sección para el siguiente paso
        selectores.style.display = "block";
        barra.style.display = "block";

}else{
    alert("¡Verifica los datos ingresados!") //Alerta de falta de datos
};
})

const link = "https://api.myjson.com/bins/1bjltq";
  fetch(link).then((response) => {
    return response.json();
    }).then((data) => {
        iterator(data);

      })

const iterator = (data) => {
    const sedes =  Object.keys(data);
// Se crea variables para las sedes
    const lima = sedes[0];
    const mexico = sedes[1];
    const santiago = sedes[2];
// Se crea variables para las generaciones
    const genLima =  data[lima].generacion;
    const genMexico = data[mexico].generacion;
    const genSantiago = data[santiago].generacion;
// Se crea variables para las estudiantes x generacion
// lima

    const estLimaGen3 = data[lima].generacion["tercera"].estudiantes;
    const estLimaGen4 = data[lima].generacion["cuarta"].estudiantes;
    // function () {
    //  data[lima].generacion["cuarta"].estudiantes;
    // estLimaGen4.forEach((limaGen4)=> {
    // const limaGen4Nom = limaGen4.nombre
    //   })

    const estLimaGen5 = data[lima].generacion["quinta"].estudiantes;
    estLimaGen5.forEach((limaGen5)=> {
    const limaGen5Nom = limaGen5.nombre
    });
//mexico
    const estMexGen3 = data[mexico].generacion["tercera"].estudiantes;
    const estMexGen4 = data[mexico].generacion["cuarta"].estudiantes;
    const estMexGen5 = data[mexico].generacion["quinta"].estudiantes;
// santiago
    const estSanGen3 = data[santiago].generacion["tercera"].estudiantes;
    const estSanGen4 = data[santiago].generacion["cuarta"].estudiantes;
    const estSanGen5 = data[santiago].generacion["quinta"].estudiantes;

// Se rota la sede y se agrega con el DOM
//   const selector = document.getElementById("opcion");
//   const root = document.getElementById("root");
//     sedes.forEach((sede)=> {
//     const option = document.createElement("opcion");
//     option.innerHTML = sede;
//     selector.appendChild(option);
//
// })
    const botonGo = document.getElementById("gobutton");

    selector.addEventListener("change", iterator => {
  // Condicionales según la opción del selector
      if (selector.options[0].selected == true ) {
         data[lima].generacion["cuarta"].estudiantes;
        estLimaGen4.forEach((limaGen4)=> {
        const limaGen4Nom = limaGen4.nombre;
        const estuBox = document.createElement("div");
        estuBox.setAttribute("class","estuBox");
        estuBox.innerHTML = limaGen4Nom;
        root.appendChild(estuBox);
          })
        // const sedesBox = document.createElement("div");
        // sedesBox.setAttribute("class","sedesBox");
        // sedesBox.innerHTML = estLimaGen5;
        // root.appendChild(sedesBox);

    console.log("lima");

          }else if (selector.options[1].selected == true) {
              console.log("mexico");
              }else if (selector.options[2].selected == true) {
  console.log("santiago");
      }

    })


// Entrando a las generaciones



}


const iteratorGen = (data) => {

}
