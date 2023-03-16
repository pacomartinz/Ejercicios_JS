const numbersList = [];

const sum = (a,b) => {
    return a+b;

}



const substract = (a,b) => {
    return a-b;

}

const father = (a , b , op) => {
    const resultado = op(a,b);
    numbersList.push(resultado);

};

father(1,2,sum);//llamo a la función father y le doy los parámetros
father(5,4,substract);
father(4,7,sum);

console.log(numbersList);