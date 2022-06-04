// const content = document.querySelector('p');

// console.log(content.classList); //add a class to the content
// content.classList.add('error')
// content.classList.remove('error');
// content.classList.add('success')


const paras = document.querySelectorAll('p');

paras.forEach(p => {
   if(p.textContent.includes('error')){
       p.classList.add('error')
   } 
   if(p.innerHTML.includes('success')){
       p.classList.add('success')
   }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');