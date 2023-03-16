

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{ name: "Salad", isVegan: true }, 
{ name: "Salmon", isVegan: false }, 
{ name: "Tofu", isVegan: true }, 
{ name: "Burger", isVegan: false }, 
{ name: "Rice", isVegan: true }, 
{ name: "Pasta", isVegan: true }];



for( let i=0 ; i<foodSchedule.length ; i++){
    const food = foodSchedule[i];
    if(!food.isVegan){
        food.name=fruits[i];
        food.isVegan=true

    }
}

//OTRA FORMA DICHA POR JOSE

console.log(foodSchedule)

let contador=0;

for(let i; i<foodSchedule.length; i++){
    const food= foodSchedule[i];
    if(!food.esVegan){
        food.name=fruits[contador]
        food.isVegan=truecontador++
    }
}

console.log(foodSchedule)

