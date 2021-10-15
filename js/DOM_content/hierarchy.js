const article = document.querySelector('article');

// console.log(article.children);

// console.log(Array.from(article.children)); // passando os 'filhos' para array
// console.log(article.children)

// Aqui, eu crio um Array para todos os 'filhos' dentro do 'article', logo, todas as tags podem ser modificadas 
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-elemnts');
// });

const title = document.querySelector('h2');

console.log(title.parentElement); // elemento pai
console.log(title.parentElement.parentElement); // buscando o elemento pai do (elemento pai)
console.log(title.nextElementSibling); // busca o próximo irmão
console.log(title.previousElementSibling); // busca o irmão interior

//  chaining
console.log(title.nextElementSibling.parentElement.children);

