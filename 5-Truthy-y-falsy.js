const usuarioConectado = false;
const cuentaDisponible = true; 
const cadenaVacia = ""; // cadena vacia es un false
const numeroEntero = 100;

/*cuando no asigna nada a una variable al imprimir dara undefined este con let y var,
mientras con const drectamente nos arroja error*/
let variableNoDefinida; //aqui es ausencia de valor pero como programador no lo colocamos

const variableNula = null; //ausencia de valor explicito, osea como programador lo ponemos

/*0 es consideraddo como false y 1 como true*/
console.log(usuarioConectado == 0); 
console.log(cuentaDisponible == 1);
console.log(cadenaVacia == false);

console.log();
/*si comparamos (null == undefined) esto nos da true por que se comportan igual */
console.log(variableNoDefinida == null);
console.log(variableNula == null);

console.log();
/*typeof nos devuelve un string */
console.log(typeof variableNula);
console.log(typeof(variableNoDefinida) === "undefined");
console.log(typeof numeroEntero);