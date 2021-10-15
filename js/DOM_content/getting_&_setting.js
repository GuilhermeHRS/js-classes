const link = document.querySelector('a');

console.log(link.getAttribute('href')); // bpegar o atributo
link.setAttribute('href', 'https://www.thenetninja.co.uk'); // modificar o atributo 
link.innerText = 'The Net Ninja Website'; // modificar o texto do atributo

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green');