const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const copia = [...colors];

copia.splice(2,1)

//esto dice que quiero eliminar de la posición 2, un elemento

console.log(copia);