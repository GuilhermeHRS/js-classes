const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => { 
    console.log('OI! my content is a copyright!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => { // mousemove é quando eu passo o mouse por cima de algo
    // console.log(e);
    //console.log(e.offsetX, e.offsetY); //isso mostra a posição de X e Y
    box.textContent = `X position = ${e.offsetX} / Y pos = ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});