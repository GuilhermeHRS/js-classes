const title = document.querySelector('h1');

// title.setAttribute('style','margin: 50px;'); // esse método sobrescreve todo o atributo 'style' da tag


// Esse método é melhor, pois ele muda só o atributo que você indicar
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'green';
title.style.fontSize = '60px';
title.style.margin = ''; // serve para deletar o método de cima