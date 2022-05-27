//normal function

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }

// arrow function with one or more parameter

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };


// arrow function with one parameter

// const calcArea = radius => {
//     return 3.14 * radius**2;
// };

// simple arrow function 

// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log(area);


// practise function ---------------------------------------------------------------

// const greet = function() {
//     return 'Hello world'
// };

// const greet = () => 'Hello world';
// const result = greet();
// console.log(result);


// -------------------- 

// const bill = function(products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2))