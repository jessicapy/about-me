"use strict";
let nombre = prompt("Hola! Cuál es tu nombre?");
let counter = 1;
let puntos = 0;
let intentos = 0;
let respuestasCorrectas = "";
let condition = false;

alert("Hola " + nombre + "! Por favor contesta las siguientes preguntas:");
const respuestaAfirmativa = "Si";
const respuestaNegativa = "No";
function segundoNombre() {
    const pregunta1 = prompt("Tengo segundo nombre?");
    if (respuestaNegativa.toLowerCase() === pregunta1.toLowerCase()) {
        alert("Muy bien!");
        puntos++;
    }
    else {
        alert("Respuesta incorrecta!");
    }
}
segundoNombre();

function tengoTrabajo() {
    const pregunta2 = prompt("Tengo un trabajo actualmente?");
    if (respuestaAfirmativa.toLowerCase() === pregunta2.toLocaleLowerCase()) {
        alert("Muy bien!");
        puntos++;
    }
    else {
        alert("Respuesta incorrecta!");
    }
}
tengoTrabajo();

function tengoMaestria() {
    const pregunta3 = prompt("Tengo una Maestria?");
    if (respuestaAfirmativa.toLowerCase() === pregunta3.toLocaleLowerCase()) {
        alert("Muy bien!");
        puntos++;
    }
    else {
        alert("Respuesta incorrecta!");
    }
}
tengoMaestria();

function tengoPhd() {
    const pregunta4 = prompt("Tengo un PHD?");
    if (respuestaNegativa.toLowerCase() === pregunta4.toLocaleLowerCase()) {
        alert("Muy bien!");
        puntos++;
    }
    else {
        alert("Respuesta incorrecta!");
    }
}
tengoPhd();

function trabajoenGoogle() {
    const pregunta5 = prompt("Trabajo en Google?");
    if (respuestaNegativa.toLowerCase() === pregunta5.toLocaleLowerCase()) {
        alert("Muy bien!");
        puntos++;
    }
    else {
        alert("Respuesta incorrecta!");
    }
}
trabajoenGoogle();


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
    intentos++;
    for (let j = 0; j < respuesta7.length; j++) {
        if (pregunta7.toLowerCase() === respuesta7[j].toLowerCase()) {
            alert("Respuesta correcta! Adivinaste en el país en "+intentos+ " intento(s)");
            condition = true;
            puntos++;
            break;
            
        }
    }
    if (condition) {
        alert("Acumulaste en total " + puntos + " punto(s) con todas tus respuestas correctas");
        break;
    }
    else if (puntos === 5) {
        alert("Se acabaron tus intentos.");
    } else {
        alert("Sigue intentando");
    }
}