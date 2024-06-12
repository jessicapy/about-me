"use strict";

let nombre = prompt("Hola! Cuál es tu nombre?");
let counter = 1;
let puntos =0;
let respuestasCorrectas = "";

alert("Hola " + nombre + "! Por favor contesta las siguientes preguntas:");
// Option 1:
//1 Tengo segundo nombre?
const respuesta1 = "No";
//2 Tengo un trabajo
const respuesta2 = "Si";
//3 Tengo una Maestria
const respuesta3 = "Si";
//4 Tengo un PHD
const respuesta4 = "No";
//5 Trabajo en Google
const respuesta5 = "No";

//1 case sensitive



const pregunta1 = prompt("Tengo un segundo nombre?");
if (respuesta1.toLowerCase() === pregunta1.toLowerCase()) {
    alert("Muy bien!");
    //console.log("Muy bien!");
    puntos++;
}
else {
    alert("Respuesta incorrecta!");
    //console.log("Respuesta incorrecta!");
}

const pregunta2 = prompt("Tengo un trabajo actualmente?");
if (respuesta2.toLowerCase() === pregunta2.toLocaleLowerCase()) {
    alert("Muy bien!");
    //console.log("Muy bien!");
    puntos++;
}
else {
    alert("Respuesta incorrecta!");
    //console.log("Respuesta incorrecta!");
}

const pregunta3 = prompt("Tengo una Maestria?");
if (respuesta3.toLowerCase() === pregunta3.toLocaleLowerCase()) {
    alert("Muy bien!");
    //console.log("Muy bien!");
    puntos++;
}
else {
    alert("Respuesta incorrecta!");
    //console.log("Respuesta incorrecta!");
}

const pregunta4 = prompt("Tengo un PHD?");
if (respuesta4.toLowerCase() === pregunta4.toLocaleLowerCase()) {
    alert("Muy bien!");
    //console.log("Muy bien!");
    puntos++;
}
else {
    alert("Respuesta incorrecta!");
    //console.log("Respuesta incorrecta!");
}

const pregunta5 = prompt("Trabajo en Google?");
if (respuesta5.toLowerCase() === pregunta5.toLocaleLowerCase()) {
    alert("Muy bien!");
    //console.log("Muy bien!");
    puntos++;
}
else {
    alert("Respuesta incorrecta!");
    //console.log("Respuesta incorrecta!");
}

const maxIntentos = 4;
//6 En qué año terminé mi licenciatura
const respuesta6 = 2010;


while (counter <= maxIntentos) {

    const pregunta6 = Number(prompt("Adivina en qué año terminé mi licenciatura? Tienes 4 intentos"));
    if (respuesta6 === pregunta6) {
        alert("Respuesta correcta!");
        puntos++;
        break;
    } else {
        counter++;
        if (counter === maxIntentos + 1) {
            alert("Se acabaron tus intentos. El año correcto era "
                + respuesta6);
        } else {
            if (respuesta6 > pregunta6) {
                alert("Ese número es muy bajo!");
                //console.log("");
            } else if (respuesta6 < pregunta6) {
                alert("Ese número es muy alto!");
                //console.log("!");
            }
        }
    }
}

//7 Menciona un país en el que you haya vivido
const respuesta7 = ["Peru", "Japon", "Francia", "Alemania", "USA"];

for (let i = 0; i < 6; i++) {
    let pregunta7 = prompt("Menciona uno de los países en los que he vivido. Tienes 6 intentos!");
    if (pregunta7.toLowerCase() === respuesta7[i].toLowerCase()) {
        alert("Respuesta correcta!");
        puntos++;
        alert("Tuviste "+ puntos + " respuesta(s) correcta(s)!");
        break;
    } else {
        alert("Sigue intentando");
    }
    if (i === 5) {
        alert("Se acabaron tus intentos.");
    }
}

/*
for (let j = 0; j < 5; j++) {
    respuestasCorrectas += respuesta7[j];
    if (j < 4) {
        respuestasCorrectas += ", ";
    }
}

alert("Tuviste "+ puntos + " respuesta(s) correcta(s). Las respuestas correctas eran: " 
    + respuestasCorrectas);


// puntos += 1;
//preguntas 6 y 7 del Lab03

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
