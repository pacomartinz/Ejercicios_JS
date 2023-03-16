const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const gender = []

for(const pelis of movies){
    for(const cate of pelis.categories){
        if(!gender.includes(cate)){
            gender.push(cate)
        }
    }
}

console.log(gender)