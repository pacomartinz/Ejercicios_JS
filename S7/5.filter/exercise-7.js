const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
{ name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
{ name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


//Hay que coger el input con esta línea:

const input$$ = document.querySelector("input");

//Ya que he cogido mi input, le creo un evento que haga que cuando yo escriba, entre en la función llamar

const llamar = (event) => {
    const filtrado = streamers.filter(streamer =>
    streamer.name.toLowerCase().includes(event.target.value));

    console.log(filtrado);
}

input$$.addEventListener("input", llamar)

