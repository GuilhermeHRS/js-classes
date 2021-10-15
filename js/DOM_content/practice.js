const para = document.querySelector('p');
// Esse comando fez a utilização do innerHTML (para mostrar) e utilizou o innerText
//console.log(para.innerHTML);

// para.innerText = 'ninjas are awesome!'; // a propriedade 'innerText' serve para sobrescrever um texto de uma tag, id ou classe
// para.innerText += 'ninjas are awesome!'; // ele também pode ser usado para acrescentar



// Esses comandos adicionaram o 'new text' em todos os seletores com 'p'
const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

//console.log(content.innerHTML);
// content.innerHTML += ' <h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
