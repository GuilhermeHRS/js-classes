

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.5;

console.log(Math.round(area)); // serve para arrendondar o número
console.log(Math.floor(area)); // serve para deixar o número inteiro, tirando o 7.7 virará 7
console.log(Math.ceil(area)); // serve para deixar o número inteiro, tirando o 7.7 virará 8 
console.log(Math.trunc(area)); // serve para tirar o float 

// random numbers

const random = Math.random();

console.log(random); 
console.log(Math.round(random * 1000));