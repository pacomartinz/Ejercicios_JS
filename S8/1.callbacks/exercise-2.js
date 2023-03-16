const userAnwsers = [];

const confirmExample = (description) =>{
     return confirm(description);
};

const promptExample = (description) =>{
    return prompt(description);
};

const father = (description, callback) => {
    const resultado = callback(description);

    userAnwsers.push(resultado)
};

father("hola",confirmExample); //llamo a la función padre y el valor hola sustituye a description y el valor confirmExample sustituye a callback
father("soy un prompt", promptExample);