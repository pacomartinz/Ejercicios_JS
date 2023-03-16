const pointsList = [32, 54, 21, 64, 75, 43]


//spread operator crea copias. ¿Para qué?
//Por si te dan un array gigante y si no lo quieres modificar te creas una copia y esa es la que modificas, no el original
//Spread operator se usa así:
//3 puntos(...)+ de dónde queremos hacer la copia

const copia = [...pointsList];

console.log(copia);

