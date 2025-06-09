/*Los tipos primitivos de JavaScript incluyen números, texto (conocidos como cadenas o string) y 
valores booleanos. El tipo de objeto es una colección de propiedades, cada una de las cuales tiene un 
nombre y un valor, ya sea un valor primitivo u otro objeto. 

JavaScript es un lenguaje de programación multiparadigma y tiene soporte para los paradigmas funcionales, 
orientado a objetos o lógico por ejemplo.


Tipos de console-------------------------------------------------
console.error() para mostrar mensajes de error;

console.table() para ver información tabular de una manera más organizada;

console.time() y console.timeEnd() para cronometrar la cantidad de tiempo que tarda una operación de 
código en iniciarse y completarse;

console.trace() para mostrar el seguimiento de pila de todos los puntos (es decir, archivos llamados) donde pasó 
el código ejecutado durante la ejecución.
*/

//Inicio de calculo de tiempo 
console.time('Tiempo');

//mostrando mensajes
console.log("Hola mundo");

const edad = 39;
console.log(edad);


//Mostra error
console.error("Variabel debe ser mayor a 10");


//Mostrar una advertencia
console.warn("Debe indicar un valor");

//Muestra el tiempo que nos desde que declaramos console.time('Tiempo'); hasta console.timeEnd('Tiempo');
console.timeEnd('Tiempo');


//error con javascript
console.log("Se generó un error");

//con este codigo estamos simulando un error en consola
console.error(new Error("Se generó un error"));