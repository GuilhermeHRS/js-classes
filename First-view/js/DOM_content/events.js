/* ------------ 3 STEPS TO MAKE AN EVENT ------------
1° We need to query the DOM to get the element where we expect the event to happen, in this case is going to the botton
2° We need to add what's called an event listener to the element and an event listener actively 
3° We need to write a callback function, which will fire when that event happens 
*/

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

//----------------------------------------------------------------

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         //console.log('item clicked');
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(item);
//         e.target.style.textDecoration = 'line-through';
        
//     });
// });

//----------------------------------------------------------------

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li); // adicionar uma 'li' embaixo da lista
//     // ul.prepend(li); // adicionar uma 'li' em cima da lista
// });

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through';
//         console.log('event in UL');
//         e.target.remove();
//     });
// });

// ul.addEventListener('click', e => {
//     console.log('event in UL');
// });

// ----------------------------- AULA 55 Event Bubbling
const ul = document.querySelector('ul');
const button = document.querySelector('button');
// ul.remove();

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});

const items = document.querySelectorAll('li');

/*
items.forEach(item => {
    item.addEventListener('click', e => {
        console.log('event in LI');
        e.stopPropagation(); // ele "cancela" e para de mostrar o que está no pai, neste caso é o UL, então ele só mostra o que está na linha 66.
        e.target.remove();
    });
});
*/

ul.addEventListener('click', e => {
   // console.log('event in UL');
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});


 