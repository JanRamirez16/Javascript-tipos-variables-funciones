//Declaracion de funcion
function multiplicaNumeros2(a,b,c) {
    return a*b*c;
}

//Expresion de funcion
const multiplicaNumeros = function(a,b,c){
    return a*b*c;
    
}

//Funcionde flecha, lleva una variable implicita
const multiplicaNumeroFuncionFlecha = (a,b,c)  => a*b*c;

const potenciaDe2 = numero => numero*numero;

//Estudiar tema alcance lexico
{
    const funcion1 = function(){
        //this-1
        function funcion2 (){
            //this-2
        }
    }

    const funcion1F = () => {
        //this-1
        const funcion2F = () =>{
            //this-2
        }
    }
}
