// Declaring variables at the begining
let saludo = "¡Hola Mundo!";
let nombre = "Juan";
let array = [1, 2, 3, 4, 5];
let frase = "La lluvia en Sevilla es una maravilla";
let patron = /lluvia/;
let encontrado = frase.match(patron);

// Printing each line of the exercise
console.log("¡Hola Mundo! Soy", nombre);
console.log("Mi nombre en mayúsculas es:", nombre.toUpperCase());
console.log("Mi nombre en minúsculas es:", nombre.toLowerCase());
console.log("El mensaje de", saludo, "tiene", saludo.length, "caracteres.");
console.log("El tercer número del array con los valores", array, "es:", array[2]);

// Adding new item at the end of the list
array.push(6);

// Printing the last 2 lines of code
console.log("Se añade el número que sigue al final del arreglo y es:", array[array.length - 1]);
console.log("Se encontró el patrón 'lluvia' en el texto 'La lluvia en Sevilla es una maravilla', por lo que el resultado es:", encontrado[0]);