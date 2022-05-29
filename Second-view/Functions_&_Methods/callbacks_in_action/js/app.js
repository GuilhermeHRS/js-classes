

const ul = document.querySelector('.people');

let people = ['guilherme', 'robinson', 'gabriel'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;