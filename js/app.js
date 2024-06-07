"use strict";

let nombre= prompt("Hola! Cuál es tu nombre?");
        alert("Hola "+ nombre + "! Por favor contesta las siguientes preguntas:"); 
// Option 1:
//1 Tengo segundo nombre?
const respuesta1 ="No";
//2 Tengo un trabajo
const respuesta2 ="Si";
//3 Tengo una Maestria
const respuesta3 ="Si";
//4 Tengo un PHD
const respuesta4 ="No";
//5 Trabajo en Google
const respuesta5 ="No";

//1 case sensitive
//let puntos =0;


const pregunta1 = prompt("Tengo un segundo nombre?"); 
if (respuesta1.toLowerCase()===pregunta1.toLowerCase()){
    alert("Muy bien!");
    //console.log("Muy bien!");
}
else {
        alert("Respuesta incorrecta!");
        //console.log("Respuesta incorrecta!");
     }

const pregunta2 = prompt("Tengo un trabajo actualmente?");
if (respuesta2.toLowerCase()===pregunta2.toLocaleLowerCase()){
    alert("Muy bien!");
    //console.log("Muy bien!");
}
else {
        alert("Respuesta incorrecta!");
        //console.log("Respuesta incorrecta!");
     }

const pregunta3 = prompt("Tengo una Maestria?"); 
if (respuesta3.toLowerCase()===pregunta3.toLocaleLowerCase()){
    alert("Muy bien!");
    //console.log("Muy bien!");
}
else {
        alert("Respuesta incorrecta!");
        //console.log("Respuesta incorrecta!");
     }

const pregunta4 = prompt("Tengo un PHD?"); 
if (respuesta4.toLowerCase()===pregunta4.toLocaleLowerCase()){
    alert("Muy bien!");
    //console.log("Muy bien!");
}
else {
        alert("Respuesta incorrecta!");
        //console.log("Respuesta incorrecta!");
     }

const pregunta5 = prompt("Trabajo en Google?");
if (respuesta5.toLowerCase()===pregunta5.toLocaleLowerCase()){
    alert("Muy bien!");
    //console.log("Muy bien!");
}
else {
        alert("Respuesta incorrecta!");
        //console.log("Respuesta incorrecta!");
     }

   // puntos += 1;


//Option 2
/*const arregloTotal = [
    ["Yamakawa", "Cual es mi segundo apellido?"], //primer arreglo y Anderson es 
    //la respuesta correcta y a la vez es el primer arreglo del primer arreglo
    ["YBUSA", "En que empresa trabajo actualment?"],//segundo arreglo
    ["Master", "cual es mi mayor grado académico?"],
    ["Université d'Orléans", "Donde estudie?"],
];
/*
// mostrando los indices en los arreglos en la consola, sólo como ejemplo
console.log(arregloTotal[0]);
console.log(arregloTotal[0][0]);
console.log(arregloTotal[0][1]);
console.log(arregloTotal[1]);
console.log(arregloTotal[1][0]);
console.log(arregloTotal[2]);
console.log(arregloTotal[2][0]);
*/
/*console.log("Usando FOR");
for (let i=0; i<arregloTotal.length;i++){
    console.log(arregloTotal[i][1]);
    const respuesta = prompt(arregloTotal[i][1]);
}
*/
