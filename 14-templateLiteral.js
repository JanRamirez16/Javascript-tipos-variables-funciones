const nombre = 'Elios';
const paisNacimiento = 'Mexico'; 
const paisDomicilio = 'Mexico, EdoMex';
const deporteFavorito = 'Futbol';
const texto = 'Mi nombre es '+ nombre + 'nacie en ' + paisNacimiento + ".\n"
            + 'Actualmente vivo en ' + paisDomicilio + ".\n"
            + 'Mi deporte favorito es ' + deporteFavorito;

const textoTemplete = `Mi nombre es ${nombre}, naci es ${paisNacimiento}.
Acutulmente vivo en ${paisDomicilio}.
Mi deporte favorito es ${deporteFavorito}`;

console.log(texto);
console.log("********************");
console.log(textoTemplete);
console.log("********************");

//------------------------------------
const edad = 39;
const bebidaMayorEdad= "cerveza";
const bebidaMenorEdad = "jugo"; 

const pedido = `${nombre} dice: "Por favor, quiero beber ${edad >= 18 ? bebidaMayorEdad : bebidaMenorEdad}"`
console.log (pedido);