const edad = 39;
console.log(edadPersona);

/*PARA SABER

Mientras trabajamos con la programación, pasamos mucho tiempo lidiando con los errores que
aparecen en nuestro código. Esto es completamente normal ya que nos ayudan a resolver 
problemas. ¿Te imaginas cuánto más difícil sería programar sin un recurso que nos diga dónde nos 
estamos equivocando y cómo corregirlo?

Como hemos visto, las personas que desarrollan los programas y lenguajes son las responsables del
 llamado “manejo de errores”, es decir, permitir la comunicación de cuáles fueron los problemas, y 
 esto no siempre ocurre de la mejor manera - aunque ya ha mejorado mucho en las últimas décadas.

Cada lenguaje de programación tiene su propia forma de tratar los errores. JavaScript comienza 
dividiendo cada tipo de posible error en algunas categorías:

* RangeError: cuando el código recibe datos del tipo correcto, pero no dentro del formato 
aceptable. Por ejemplo, un procesamiento que solo se puede hacer con números enteros 
mayores o iguales a cero, pero recibe -1.

* ReferenceError: generalmente ocurre cuando el código intenta acceder a algo que no existe, 
como una variable que no se ha definido; a menudo es causado por errores tipográficos o 
confusión en los nombres utilizados, pero también puede indicar un error en el programa.

* SyntaxError: En la mayoría de los casos ocurre cuando hay errores en el programa y JavaScript
no puede ejecutarlo. Los errores se pueden escribir incorrectamente o usar métodos o 
propiedades, por ejemplo, operadores o signos gráficos con elementos faltantes, como olvidarse 
de cerrar llaves o corchetes.

* TypeError: Indica que el código esperaba recibir datos de cierto tipo, como una cadena de texto, 
pero recibió otro tipo, como un número, booleano o nulo.

NodeJS funciona con otro tipo de errores específicos que no vamos a tratar ahora mismo, pero que 
siempre puedes consultar en la documentación oficial.

Además del tipo de error, el terminal también proporcionará otra información, como el nombre del 
archivo y la línea donde se detectó el error. Esto suele ser suficiente para identificarlo y corregirlo, 
pero también hay casos en los que JavaScript no detecta el error en la línea donde se declara el 
código, por ejemplo, sino donde se ejecuta. Por eso es importante practicar siempre la lectura de los 
errores y el stacktrace y nunca omitir este paso.

En el futuro, cuando trabaje en sus aplicaciones, también debería crear sus propios mensajes de error para ayudar a los usuarios.

stack trace: nos muestra e, camino por el cual intento node 
*/