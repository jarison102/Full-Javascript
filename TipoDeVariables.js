var Apellido = "Mican";

console.log(Apellido)



var mi_sueldo=100.000;

console.log(mi_sueldo);

//tipo de objeto 
var objeto  = {
    nombre: "Jarison",
    Apellido:"Mican",
    Telefono:32211245

}

console.log(objeto)


//dato vuleano (True, False)

var genero = false;
console.log(typeof genero)


//funcion
function miFuncion(){}
console.log(typeof miFuncion);


//clase
class persona{
    constructor(nombre,apellido){
        //hacemos referencia al nombre y apellido 
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);



//undefined

var hola;

console.log(typeof hola)