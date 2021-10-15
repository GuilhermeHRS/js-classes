
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.8;

console.log(Math.round(area)); // serve para arrendondar o número
console.log(Math.floor(area)); // serve para arrendondar o número para "baixo", por exemplo: 7.8 = 7
console.log(Math.ceil (area)); // serve para arrendondar o número para "cima",  por exemplo: 7.4 = 8
console.log(Math.trunc(area)); // serve para tirar a casa decimal e deixar o número sem pontos ou vírgulas

// random numbers

const random = Math.random();

console.log(random);

console.log(Math.round(random * 100));