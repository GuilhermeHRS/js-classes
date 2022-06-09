

let user = {
    name: 'guilherme',
    age: 20,
    email: 'guilherme@gmail.com',
    location: 'brazil',
    cellphone: ['(12)99129-3289', '(12)99765-5615']    
};

console.log(user);

user.age = 21;

console.log(user.age);


console.log(user['location'])
user['name'] = 'henrique';


console.log(user['name'])

console.log(typeof user)
