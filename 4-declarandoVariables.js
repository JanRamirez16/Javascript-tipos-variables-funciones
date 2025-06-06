/*Programa para calcular el area de un rectangulo 
var se usa para codigo antiguo
let lo usamos con datos primitivos que necesiten cambiarse 
const lo usamos cuando no necesitan cambiarse y tipos de datos estructurados
*/

{   
    const base = 10;
    const altura = 20;
    const area = base * altura;
    {
        console.log(area);
    }
    altura = 15;
    area = base *  altura;
    console.log(area);
}   


/* Ejemplo de let, donde let es de bloque, como se ve ene el proximo ejemplo 
{
    {
        let base = 10;
        let altura = 20;
        let area = base * altura;
        console.log(area);
    }
    console.log(area);
}   
console.log(area); 
*/