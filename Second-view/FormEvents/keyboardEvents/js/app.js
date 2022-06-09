const form = document.querySelector('.signup-form');
const fields = document.querySelector('input');
const feedback = document.querySelector('.feedback');
const userPattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;
    

    if(userPattern.test(username)){
        feedback.textContent = 'that username is valid!';
    } else {
        feedback.textContent = 'that username must contain letters only & be between 6 and 12 characters long';
    }
});

// live feedback
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value); // or form.username.value

    console.log(e);

    if(userPattern.test(e.target.value)){
        form.username.setAttribute('class', 'success'); // or fields.style.border = '2px solid #36cc36'
        
        feedback.innerHTML = `<p>that username is valid!</p>`;
    } else {
        form.username.setAttribute('class', 'error'); // or  // or fields.style.border = '2px solid crimson'
        feedback.innerHTML = `<p>that username must contain letters only & be between 6 and 12 characters long</p>`;
    }
});