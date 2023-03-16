//Te creas una variable o constante nueva
//Le ponemos $$ para diferenciar que con esta variable estamos afectando al dom


const button$$ = document.querySelector('.showme');

//document. es lo que le indica que vamos a acceder al documento html
//querySelector es una funcion, por lo que siempre lleva paréntesis después
//Dentro de esos paréntesis te tienes que fijar en lo que quieres seleccionar
//Si es una clase la atacaremos con un .

console.log(button$$);