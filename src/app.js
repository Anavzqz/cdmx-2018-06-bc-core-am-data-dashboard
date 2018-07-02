//Funciones y data en este archivo
window.data= () => { //Funcion para jalar la data
    let link= 'https://alppacat.github.io/data-dashboard/data/laboratoria.json'; //Variable para jalar la data
    let laboratoria= fetch(link); //Igualando a data
    data.computeStudentsStats(laboratoria); //Mandando data a la siguiente función
},
window.computeStudentsStats= (laboratoria) => {
laboratoria.then(resp => resp.json())
.then(dato =>{
    let sede = Object.getOwnPropertyNames(dato); //Propiedades
    let generacion = Object.values(data); //Valor
    generacion.forEach(element => { //Interar en los valores del objeto
        
    });
}
)};
// //Funciones y data en este archivo
const getData = () =>{ //Funcion para jalar la data
    const link= 'https://alppacat.github.io/data-dashboard/data/laboratoria.json'; //Variable para jalar la data
    fetch(link).then (response => response.json())
    .then(datos => {
        console.log(datos);  
    })
}
 getData();
window.computeStudentsStats= () => {
    

};

 window.computeGenerationsStats = ()=> {

 };

 window.sortStudents = () => {

 };
 window.filterStudents = () => {

};