var nombreCompleto = "Elios jan";
var ciudadDomicilio = "Ciudad de mexico";
var fechaNacimiento = "13 de noviembre de 2008";
var diaIndependenciaPais = "15 de septiembre del 2024";

var fichaTecnicaModo1 = "nombre del producto\n\
codigo del producto \n\
valor";

var fichaTecnicaModo2 = 'nombre del producto\n' +
'codigo del producto\n' +
'valor';

var fichaTecnicaModo3 = `Modo 3:
nombre del producto
codigo del producto
Valor`;

console.log(nombreCompleto.toLowerCase());
console.log(ciudadDomicilio.toUpperCase());
console.log(fechaNacimiento);
console.log(fechaNacimiento.length);
// console.log(nombreCompleto);
// console.log(ciudadDomicilio);


/*Aplicamos aqui lo de UTF para caracteres especiales y normales*/
const simboloPeso = '\u0024'
const aMayusculo = '\u0041'
const check = '\u2705'
const hiragana = '\u3041'

console.log(simboloPeso)
console.log(aMayusculo)
console.log(check)
console.log(hiragana)

/*Para hacer que nos devuelva un true lo convertimos a minusculas con tolowercase */
const ciudad = "buenos aires";
const input = "Buenos Aires";

const inputMinusculo = input.toLowerCase();

console.log(ciudad === inputMinusculo); // true

/*Compara los valores por el unicode donde a es el numero 41 y z es el numero 79 */
let a = "r";
let b = "z";
if (a < b) {
  // true
  console.log(a + " es menor que " + b);
} else if (a > b) {
  console.log(a + " es mayor que " + b);
} else {
  console.log(a + " y " + b + " son iguales.");
}