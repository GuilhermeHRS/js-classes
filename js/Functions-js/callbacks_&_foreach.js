// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     // do something
//     console.log(value);
// });

let people = ['gui', 'gabriel', 'davi', 'miguel', 'arthur'];

// people.forEach(function(person){
//     console.log(person);
// });

// people.forEach((person, index) => {
//     console.log(index, person);
// });

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

