//for loops
// Laço para percorrer de 1 a 5
// for (let i = 0; i <5; i++){
//     console.log('in loop:', i);
// }

const names = ['shaun', 'mario', 'luigi'];

//Laço para mostrar e percorrer os nomes do vetor
for (let i = 0; i < names.length; i++) {
    //console.log(names[i]);

    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
