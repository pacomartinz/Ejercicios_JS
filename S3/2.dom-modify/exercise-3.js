const div = document.createElement('div');

document.body.appendChild(div);

const p = [];

for(let i=0 ; i<6 ; i++){
    p[i] = document.createElement('p');
    div.appendChild(p[i]);
}