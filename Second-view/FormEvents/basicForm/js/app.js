const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        feedback.textContent = 'that username is valid!';
    } else {
        feedback.textContent = 'that username must contain letters only & be between 6 and 12 characters long';
    }
});