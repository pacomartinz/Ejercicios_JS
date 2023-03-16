const users = [{id: 1, name: 'Abel'},
 {id:2, name: 'Julia'},
 {id:3, name: 'Pedro'}, 
 {id:4, name: 'Amanda'}];

 const newName = users.map(usuario => {
    if(usuario.name[0]==="A"){
        return usuario.name = "Anacleto"
    }else{return usuario.name}
 })

 //de cada usuario, si el valor 0 d eusuario.name es A, devuelve Anacleto
 //Si no, devuelve el usuario.name

 console.log(newName);

 //CON TERNARIOS

 const newName2 = users.map((usuario) => {
 usuario.name[0]==="A" ? (usuario.name="Anacleto") : usuario.name; return usuario.name
 });

 console.log(newName2)
 

