// const age = 20;

// if(age >= 20) {
//     console.log('you are over 20 years old');
// } else{
//     console.log('you are not over 20 years old');
// }

//---------------------------------------------------

// const ninjas = ['akali', 'shen', 'zed', 'master-yi'];

// ninjas.push('kennem'); //para adicionar mais um índice na array 

/*
MÉTODOS:

unshift() -> adicionará um elemento ao início de um vetor
shift()   -> removerá um elemento do ínicio do vetor
splice()  -> modifica o conteúdo de um array removendo elementos existentes e / ou adicionando novos elementos
concat()  -> retorna uma novo array composto do array original mais a que for passado por parametro no método
*/

// if(ninjas.length > 4){
//     console.log("that's a lot of ninjas");
//     console.log(ninjas);
// }

//-----------------------

// -----------Operadores lógicos || and &&
// const password = 'p@ssword1234';

// if (password.length >=12 && password.includes('@')) {
//     console.log('that password is might strong');
// } else if (password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that password is strong enough!');
// } else{
//     console.log('password is not long enough!');
// }

//---------------------------

//logical NOT(!)

let user = false;

if(!user) {
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

