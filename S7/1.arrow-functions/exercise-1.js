const myArrowFunction = (a = 10,b = 5) => {
    console.log(a + b);

};

myArrowFunction();
//aquí simplemente estoy llamando a la función

myArrowFunction(20);
//aquí cambio un parámetro y por defecto cambia el primero, es decir, la a

myArrowFunction(30,66);
//aquí cambio los dos parámetros y el resultado será la suma de ambos

myArrowFunction("benito");
//aquí me sustituye la a por "benito"
