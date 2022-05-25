// declaração de funções - function declaration 

// Essa função pode ser chamada em qualquer lugar do código - 'hoisting'
function greet(){
    console.log('hello there');
}


// 'chamada' de funções - function expression

// Essa função não pode ser chamada em qualquer lugar do código, deve estar sempre acima da chamada dela - it doesn't have 'hoisting'
const speak = function(){
    console.log('good day!');
};

// saudação - greet();
// greet();
// greet();

speak();