function sumaYPorcentaje(a,b) {
    let c = a + b;
    c *= 10/100;

    function multiplicaNumeros(a,b) {
        return  a*b;
    }
    return c + multiplicaNumeros(a,b);
}

const resultado = sumaYPorcentaje(5,10);
const resultado2 = sumaYPorcentaje(543,10);

console.log(resultado);

console.log(resultado2);