let button$$ = document.createElement('button');
button$$.setAttribute('id' , 'btnToClick')

console.log(button$$);
button$$.textContent = "pinchame"
document.body.appendChild(button$$);

button$$.addEventListener("click" , clicky);
function clicky(event){
    console.log(event);
}

// lo mismo con arrow funciton

const click = (event) =>{console.log}

//en la línea 8 estoy declarando una función llamada clicky
//y recibe un evento
//Pues en la línea 12 hago lo mismo. Recibe event y devuelve console.log