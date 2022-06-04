const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = "i'm so cool!";

const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML)
//content.innerHTML += `<h2>this is a new content</h2>`

const people = ['guilherme', 'robinson', 'gabriel'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});