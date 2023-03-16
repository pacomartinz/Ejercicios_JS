

const get = async() => {
try{
    const respuesta = await fetch ('https://api.agify.io?name=michael');
    const res = await respuesta.json();
    console.log(res);//con res no siempre voy a acceder a lo que quiero. Si accedo a un objeto que tiene dentro un array, para llegar al array pondré res.nombre

}catch(error){
    console.log(error);
}
}
get()


//fetch: coge toda la info
//then: cuando ya tengas toda la info la conviertes a json
// res es response


