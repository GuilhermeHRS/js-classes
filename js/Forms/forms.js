// não declarei a const 'form', pois já foi declarada no regex.js

const feedback = document.querySelector('.feedback');
const msg = document.querySelector('#username');
const usernamePattern = /^[a-z A-Z 0-9]{6,12}$/;

form.addEventListener('submit', e  => {
    
   

    //validation
    const username = form.username.value;

    if(usernamePattern.test(username)) {
        //feedback good info
        feedback.textContent = 'that username is valid!';
        msg.setAttribute('class', 'success');
        // user.setAttribute('style', 'border: 1px solid green;');
    } else {
        //feedback help info
        feedback.textContent = 'username must contain letters and numbers only & be between 6 & 12 characters long!';
        msg.setAttribute('class', 'error');
    }
});

// live feedback

form.username.addEventListener('keyup', e => { //ele mantém em tempo real o que eu escrevo 
    //console.log(e.target.value, form.username.value);

    console.log(e);
    if(usernamePattern.test(e.target.value)) {
        msg.setAttribute('class', 'success');
    } else {
        msg.setAttribute('class', 'error');
    }
});