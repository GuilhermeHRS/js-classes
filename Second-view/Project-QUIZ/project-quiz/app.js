const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

const paras = document.querySelectorAll('.lead');

const result = document.querySelector('.result')


paras.forEach(para => {
    para.addEventListener('copy', (e) => {
        console.log('This is a copyright')
        console.log(e);
    })
})

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]){
            score += 25;
        } 
    });

    // show result
    scrollTo(0, 0);
    result.classList.remove('d-none');

    // animation with the result
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output} %`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

// setTimeout(() => {
//     // do something
// }, 3000);


// TIMER

// let i = 0;
// const timer = setInterval(() => {
//     console.log('Hello!');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);