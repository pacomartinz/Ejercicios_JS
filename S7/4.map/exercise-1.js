const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


//MAP es para dejar de hacer bucles


const userName = users.map(user => user.name)

//a mi variable, le digo que valga mi Array
//lo que vaya dentro del paréntesis te lo inventas
//De cada user, vas a darme el name

console.log(userName);

//es lo mismo que decir esto, que es más fácil de ver:

const userName2 = users.map((user) => {
    return user.name
});

//O ESTO con un bucle

users.forEach(user => {
    user.name
});
