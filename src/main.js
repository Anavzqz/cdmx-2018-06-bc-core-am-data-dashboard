// Todo lo que se muestre en pantalla va en este archivo
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
    const estLimaGen5 = data[lima].generacion["quinta"].estudiantes;
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

    selector.addEventListener("change", iterator => {
  // Condicionales según la opción del selector
      if (selector.options[0].selected == true ) {
        estLimaGen3.forEach((limaGen3)=> {
        const limaGen3Nom = limaGen3.nombre;
        // const progreso = Object.keys(limaGen3);
        // const porcentaje = progreso[2].porcentajeCompletado;
        // // const completado = porcentaje.porcentajeCompletado;
        // // console.log(typeof(porcentaje));
        // console.log(porcentaje);
        const root = document.getElementById("root");
        const subtitulo = document.getElementById("subtitulo");
        const estuBox = document.createElement("p");
        estuBox.setAttribute("class","estuBox");
        subtitulo.innerHTML = "Nombre de las alumnas"
        estuBox.innerHTML = limaGen3Nom + "  " + limaGen3Nom.progreso;
        root.appendChild(estuBox);
            })

    console.log("lima");

          }else if (selector.options[1].selected == true) {
            estLimaGen3.forEach((limaGen4)=> {
            const limaGen4Nom = limaGen4.nombre;
            const root = document.getElementById("root");
            const subtitulo = document.getElementById("subtitulo");
            const estuBox = document.createElement("p");
            estuBox.setAttribute("class","estuBox");
            subtitulo.innerHTML = "Nombre de las alumnas";
            estuBox.innerHTML = limaGen4Nom + "  " + limaGen4Nom.progreso;
            root.appendChild(estuBox);
                })

              }else if (selector.options[2].selected == true) {
                estLimaGen5.forEach((limaGen5)=> {
                const limaGen5Nom = limaGen5.nombre;
                const root = document.getElementById("root");
                const subtitulo = document.getElementById("subtitulo");
                const estuBox = document.createElement("p");
                estuBox.setAttribute("class","estuBox");
                subtitulo.innerHTML = "Nombre de las alumnas";
                estuBox.innerHTML = limaGen5Nom + "  " + limaGen5Nom.progreso;
                root.appendChild(estuBox);
                    })
                  }else if (selector.options[3].selected == true) {
                    estMexGen3.forEach((mexGen3)=> {
                    const mexGen3Nom = mexGen3.nombre;
                    const root = document.getElementById("root");
                    const subtitulo = document.getElementById("subtitulo");
                    const estuBox = document.createElement("p");
                    estuBox.setAttribute("class","estuBox");
                    subtitulo.innerHTML = "Nombre de las alumnas";
                    estuBox.innerHTML = mexGen3Nom + "  " + mexGen3Nom.progreso;
                    root.appendChild(estuBox);
                        })
                      }else if (selector.options[4].selected == true) {
                        estMexGen4.forEach((mexGen4)=> {
                        const mexGen4Nom = mexGen4.nombre;
                        const root = document.getElementById("root");
                        const subtitulo = document.getElementById("subtitulo");
                        const estuBox = document.createElement("p");
                        estuBox.setAttribute("class","estuBox");
                        subtitulo.innerHTML = "Nombre de las alumnas";
                        estuBox.innerHTML = mexGen4Nom + "  " + mexGen4Nom.progreso;
                        root.appendChild(estuBox);
                            })
                          }else if (selector.options[5].selected == true) {
                            estMexGen5.forEach((mexGen5)=> {
                            const mexGen5Nom = mexGen5.nombre;
                            const root = document.getElementById("root");
                            const subtitulo = document.getElementById("subtitulo");
                            const estuBox = document.createElement("p");
                            estuBox.setAttribute("class","estuBox");
                            subtitulo.innerHTML = "Nombre de las alumnas";
                            estuBox.innerHTML = mexGen5Nom + "  " + mexGen5Nom.progreso;
                            root.appendChild(estuBox);
                                })
                              }else if (selector.options[6].selected == true) {
                                estSanGen3.forEach((sanGen3)=> {
                                const sanGen3Nom = sanGen3.nombre;
                                const root = document.getElementById("root");
                                const subtitulo = document.getElementById("subtitulo");
                                const estuBox = document.createElement("p");
                                estuBox.setAttribute("class","estuBox");
                                subtitulo.innerHTML = "Nombre de las alumnas";
                                estuBox.innerHTML = sanGen3Nom + "  " + sanGen3Nom.progreso;
                                root.appendChild(estuBox);
                                    })
                                  }else if (selector.options[7].selected == true) {
                                    estSanGen4.forEach((sanGen4)=> {
                                    const sanGen4Nom = sanGen4.nombre;
                                    const root = document.getElementById("root");
                                    const subtitulo = document.getElementById("subtitulo");
                                    const estuBox = document.createElement("p");
                                    estuBox.setAttribute("class","estuBox");
                                    subtitulo.innerHTML = "Nombre de las alumnas";
                                    estuBox.innerHTML = sanGen4Nom + "  " + sanGen4Nom.progreso;
                                    root.appendChild(estuBox);
                                        })
                                      }else if (selector.options[8].selected == true) {
                                        estSanGen5.forEach((sanGen5)=> {
                                        const sanGen5Nom = sanGen5.nombre;
                                        const root = document.getElementById("root");
                                        const subtitulo = document.getElementById("subtitulo");
                                        const estuBox = document.createElement("p");
                                        estuBox.setAttribute("class","estuBox");
                                        subtitulo.innerHTML = "Nombre de las alumnas";
                                        estuBox.innerHTML = sanGen5Nom + "  " + sanGen5Nom.progreso;
                                        root.appendChild(estuBox);
                                            })

}

    })



}


const iteratorGen = (data) => {

}
