
// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'england',
    blogs:[
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
console.log(this);

// -------------------------------- CLASS 39 -----------------------------------
// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

/* -------------------------------- CLASS 38 -----------------------------------
// maneiras para chamar o atributo de um objeto

console.log(user);
console.log(user.name);

user.age = 35; // para redefinir o valor de um atributo
console.log(user.age);

console.log(user['name']); // para puxar um atributo pelo objeto

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
*/
