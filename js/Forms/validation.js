// var reg = /[a-z]/ig;

// var reg2 = new RegExp( /[a-z]/,'i');
const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z A-Z 0-9]{5,12}$/i,
    email:  /^([a-z \d \. -]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, 
    //          (yourname)    @ (domain)   . (extension)     (.again)  
    //          (theboss)     @ (gmail)    .    (com)          (.br)
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z \d-]{8,20}$/
};


// validation function
function validate(field, regex) {
    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}


inputs.forEach( input => {
    input.addEventListener('keyup', e => {
        // console.log(e.target.attributes.name.value); // ele mostra na tela os nomes dos atributos que estão em 'name' no HTML
        validate(e.target, patterns[e.target.attributes.name.value]); 
        // or i can use this: e.target, patterns['username', 'email', 'password', 'telephone', 'slug']);
    });
});