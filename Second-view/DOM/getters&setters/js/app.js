const link = document.querySelector('a'); 

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.github.io');
console.log(link.getAttribute('href'));
link.innerText = 'Github pages'