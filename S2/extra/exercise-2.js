
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


let totalVolume = 0;
let count = 0;

for(const oyente of users){

    for(const vol in oyente.favoritesSounds){
        //console.log(oyente.favoritesSounds[vol].volume)

        totalVolume += oyente.favoritesSounds[vol].volume;
        count++;

    }
}


const mediaNum = totalVolume / count;

console.log(mediaNum)




//VARIABLE TOTAL
//VARIABLE numVolumes
//FORORF USERS -- accedes a cada USER
//FORIN USER.FAVORITESOUNDS -- con este obtienes la key de cada volume -- user.favoriteSound[key].volume
//TOTAL += key[volume]
//numVolumes++

//TOTAL / numVolumes