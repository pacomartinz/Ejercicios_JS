const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(valor => valor%2===0);

console.log(pares);

//si fueran impares sería const pares = ages.filter(valor => valor%2!==0)