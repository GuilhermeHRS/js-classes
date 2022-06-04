

// const blogs = [
//     { title: 'terra plana', likes: 30},
//     { title: 'buraco negro', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'guilherme',
    age: 20,
    email: 'guilherme@gmail.com',
    location: 'brazil',
    blogs: [
        { title: 'terra plana', likes: 30},
        { title: 'buraco negro', likes: 50}
    ],    
    login: function(){
        console.log(`the user ${user.name} is logged in`);
    },
    logout: function(){
        console.log(`the user ${user.name} logged out`);
    },
    logCells(){
        console.log('this user has 2 cellphones:');
        this.blogs.forEach((blog, index) => {
            console.log(index, blog.title, blog.likes);
        })

    }
};

// user.login();
// user.logout();

user.logCells();
