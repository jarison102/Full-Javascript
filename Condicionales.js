var CasasJuan = 9;
var CasasArturo = 10;

if(CasasArturo > CasasJuan){
    console.log("Tienen las mismas cantidad de casas");

}else{
    console.log("No tienen  las mismas cantidad de casas");


}

/////////////////////////////////////////////////////////////
var tioedad = 54;
var madreedad = 45

if(tioedad == madreedad ){
    console.log("Tienen la misma edad");

}else{
    console.log("No tienen la misma edad");
}


////////////////////////////////////////////////////////////
//operador and 

var a = 10
var valmin = 0
var valormax = 10

if(a >= valmin && a <= valormax){
    console.log("Destro del Rango");

}else{
    console.log("Fuera de rango");
}
////////////////////////////////////////////////////////////
//operador or 
//aca sale que si puede porque una variable es true el or decir si alguna de estas se cumple pasa con el if si no else
var vacaciones = false;
var diaDescanso = true;

if( vacaciones || diaDescanso ){
    console.log("El padre Puede asistir al juego del hijo")

}else{
    console.log("No puede asistir al juego")
}
////////////////////////////////////////////////////////////////
//convertir string a numero 

var miedad = "18";
var edad = Number(miedad);

if(edad == 18){
    console.log("Puede Votar")
}else{
    console.log("No puede votar ")
}

let ValorMoto = 500;
if(ValorMoto < 500){
    console.log("Es menor al valor de la moto")

}else if (ValorMoto == 500){
    console.log("El valor de la moto es igual")
    
}else{
    console.log("El valor no es igual")
}
/////////////////////////////////////////////////////////////////////////////////
var mes = 10;
var estacion;

if(mes == 1 || mes == 2 || mes == 12 ){
    estacion = "Invierno";

}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";

}else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Otoño"
}else if (mes == 6 || mes == 7 || mes == 8 || mes == 9 || mes == 10 || mes == 11){
    estacion = "Stivur XD"
}else{
    estacion = "Valor Incorrecto"
}
console.log(estacion)

/////////////////////////////////////////////////////////////////////////////////////////////////
//Switch
var numero = 3 ;
var numeroString ="Valor Desconocido";
switch (numero) {
    case 1:
        numeroString = "Numero Uno";
        
        break;
    case 2:
        numeroString = "Numero Dos";
        
        break;
    case 3:
        numeroString = "Numero Tres";
            
        break;

    default:
        numeroString = "Caso no encontrado"
}
console.log(numeroString)
