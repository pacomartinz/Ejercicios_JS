const cities = [{isVisited:true, name: 'Tokyo'}, 
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'}, 
{isVisited:false, name: 'Seul'}];

const ciudadName = cities.map(ciudad => {
    if(ciudad.isVisited===true){
        return ciudad.name + "(visitado)"
    }else{
        return ciudad.name
    };
});

console.log(ciudadName);