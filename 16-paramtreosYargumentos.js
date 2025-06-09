//decalra la funcion
function sumaYPorcentaje(a,b) {
    let c = a + b;
    c *= 10/100;

    function multiplicaNumeros(a,b) {
        return  a*b;
    }
    return c + multiplicaNumeros(a,b);
}

function saludar() {
    console.log("hola");
}

function mostrarTexto(texto) {
    console.log(texto);
}

/*Podemos ya definir el parametro en caso de que en no haya argumentos */
function mostrarTextoPorDefecto(texto = "Texto predeterminado") {
    console.log(texto);
}
//Ejecuccion
const resultado = sumaYPorcentaje(5,10);
const resultado2 = sumaYPorcentaje(543,10);

console.log(resultado);
console.log(resultado2);
console.log("*********************");

saludar();
mostrarTextoPorDefecto();
mostrarTextoPorDefecto("Este es un texto dinamico");

//--Ejemplo de alura
function saludar(){
  return '¡Hola chicos!';
}

function saludarPersona(nombrePersona) { //parametros
  console.log(`${saludar()} Mi nombre es ${nombrePersona}`);
}

saludarPersona('Paula') // ¡Hola chicos! Mi nombre es Paula y esto es un argumento

