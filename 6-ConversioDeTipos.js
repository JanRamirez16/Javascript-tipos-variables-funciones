//conversion implicita----------------------------
/*La conversion implicita es cuando lo hace javascript en este caso no suma si no junta las dos variables,
pero la variable edad javascript la convierte a string.
Cuando en vez de poner + le ponemos - si va tomar valor edad como numero */
const edad = 39;
const edadUsuario = "39a";

console.log(edad - edadUsuario, edad + edadUsuario);

//Conversion explicitamente------------------------
//NaN es cuamdo algo no es numero, si queremos sumarle o restar nos seguira aparecindo NaN
/*Explicita por que primero como programador nosotros se la ponemos y si leemos el codigo ya sabemos lo que va ha hacer  */
console.log(edad + Number(edadUsuario)); //convertir un string a numero
console.log(String(edad) + edadUsuario);//convertir un numero a string

console.log(edad.toString() + edadUsuario);// con .toString lo que hacemos es decirle a edad lo tome com String


let usuarioConectado = false;
console.log(String(usuarioConectado)); // esto realizará un conversión del tipo de dato booleano para string, va a mostrar un string igual a “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // ahora tendremos un string igual a “true”.

/*Podemos convertir un string a numero poniendo un + antes de la variable por ejemplo */
let ancho = "10";
let alto = "5";
console.log( + ancho * + alto); // obtendremos una conversión de String para números usando el signo + antes de las variables.

/*Si tru y false lo queremos convertir a number nos devolvera un 0 y 1 */
let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // obtendremos una conversión de dato booleano para número, en ese caso false (falso) retorna el número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // ahora obtendremos la conversión del valor booleano para valor numerico, en ese caso true (verdadero) retorna el número 1.