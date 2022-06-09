const button = document.querySelector('button');
const input = document.querySelector('input');
const ul  = document.querySelector('ul');
const para = document.querySelector('p');

const items = document.querySelectorAll('li');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    
    
    if(input.value == ''){
        para.innerText = 'Please, select a value';
        para.style.color = 'crimson';
        input.style.border = '1px solid crimson'
    } else {
        para.innerText = '';
        ul.prepend(li); // add on the top of the list
    }
   input.value = '';
});


// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in LI')
//         e.stopPropagation(); // it ignores other events with the same
//         e.target.remove();
//     });
// });
// // console.log(item);
// // item.remove()

ul.addEventListener('click', e => {
   // console.log('event in UL')
   if(e.target.tagName === 'LI'){
       e.target.remove();
   }
   
});