// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['gui', 'gabriel', 'davi', 'miguel', 'arthur'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li><br>`;
});

console.log(html);
ul.innerHTML = html;