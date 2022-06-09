const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
    alert('Hi, my content is a copyright!')
});

const box = document.querySelector('.box')

box.addEventListener('mousemove', e => {
    // console.log(e)
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});


document.addEventListener('keypress', e => {
    
    console.log(e.key)
});


const para = document.querySelector('p');

para.addEventListener('keypress', e => {
    para.textContent = `You type this letter: ${e.key}`;
});