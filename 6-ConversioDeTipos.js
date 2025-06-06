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